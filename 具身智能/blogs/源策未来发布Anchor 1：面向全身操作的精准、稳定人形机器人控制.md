---
title: "源策未来发布Anchor 1：面向全身操作的精准、稳定人形机器人控制"
type: blog_digest
sector: "具身智能"
source: "Archon Robotics (源策未来 · arXiv:2611.00193)"
published_at: "2026-11-03"
raw_sha256: "cb3892fbac439534f34bdd119befb2c85b71ee7a1080076591373e7cf1ace27f"
material_version: "digest-material-cb3892fbac439534f34bdd119befb2c85b71ee7a1080076591373e7cf1ace27f@1"
origin_url: "https://www.archon.tech/research/anchor1"
trigger_source: "SourceMind"
trigger_url: ""
user_comments: ""
status: "processed_with_gaps"
primary_topic: "模型与策略架构"
topic_confidence: 0.9222
---

<a id="digest-cb3892fbac439534"></a>
# 源策未来发布Anchor 1：面向全身操作的精准、稳定人形机器人控制

2026-11-03 · Archon Robotics (源策未来 · arXiv:2611.00193) · 有来源缺口

[本地原件归档](../../../raw/cb3892fbac439534f34bdd119befb2c85b71ee7a1080076591373e7cf1ace27f) · 固定材料版本 `digest-material-cb3892fbac439534f34bdd119befb2c85b71ee7a1080076591373e7cf1ace27f@1` · [一手原站](https://www.archon.tech/research/anchor1)

## 深度拆解与复核

- ==核心结论==：源策未来（[Archon Robotics](../entities/companies/Archon%20Robotics.md)）发布的全身控制器 Anchor 1（[官网研究页](https://www.archon.tech/research/anchor1) 同步发表 32 页技术论文 [arXiv:2611.00193](https://arxiv.org/abs/2611.00193)），针对人形机器人在低矮取物、半跪与移动搬运时因在线重定向失真和误差耦合导致的漂移失稳，采用「T-pose 尺度校准 5 部位稀疏人体参考 + 离线精选机器人轨迹分布 + 解码器显式误差解耦」架构；在 Unitree G1 实机上将前瞻需求压缩至 0.06 秒且免在线重定向，72 段全身操作手腕全局误差降至 75.69 mm（对比 MimicLite 105.74 mm 与 SONIC-G1 234.37 mm），踢纸箱遥操采集效率从 SONIC 的 9 条/小时（成功率 37.50%）跃升至 43 条/小时（98.03%），但自主 VLA 取拖鞋成功率仅 0.45 且尚未开源权重，单本体外推与无接触力建模局限明显。

#### 一、业务切口与核心机制

1. 团队定位与 WBI 全身智能技术栈
   [Archon Robotics](../entities/companies/Archon%20Robotics.md)（源策未来）由李弘扬（Hongyang Li）、陈立（Li Chen，论文第一联络人）、李天羽（Tianyu Li）及乔宇（Yu Qiao）等领衔（[arXiv:2611.00193](https://arxiv.org/abs/2611.00193) 另列 VLA 集成团队成员含 [Modi Shi](../entities/people/Modi%20Shi.md)），核心班底具备端到端自动驾驶 UniAD 与华为 ADS 4.0 研发经历。其 Whole-Body Intelligence（WBI）主张用大规模人类全身动作预训练交互先验，再经真机后训练落地，而 Anchor 1 承担底层执行控制器职责——同时支撑前端四类人体设备（光学动捕 Chingmu/Nokov、Xsens 惯性动捕、PN-LINK 与 PICO VR，实测覆盖身高 165–188 cm、体重 50–80 kg 的四名操作员）高良率数采，以及上层 VLA 策略的动作 token 自主控制。
2. 绕过在线关节空间重定向（GMR / UMR）的 5 部位稀疏接口
   传统人形跟踪管线在部署时需调用 GMR（基于逆运动学）或 UMR（基于点云匹配）等在线重定向模块解算全身关节角参考 R，一旦求解异常或姿态奇异就会引发关节突变与控制跌倒。Anchor 1 仅保留骨盆、双手腕、双脚踝五个与支撑和操作强相关的刚体位姿作为稀疏指令 H′_5（以 50 Hz / 20 ms 步长输入未来 0、20、40、60 ms 四帧，仅需 0.06 秒前瞻），通过 T-pose 几何标定对齐人机骨架比例，其余全身自由度由 PPO 训练的策略自主协调。为约束多余自由度不出现奇葩构型，训练期把 H′_5 与经过自动筛选及人工复核的离线重定向机器人参考 R 配对，用 406,222 条（116.8M 帧，1,081.37 小时，含 142,342 条镜像序列）混合语料（In-House Track 自采占 77.28% / 835.67 h，Public Track 开源占 22.72% / 245.70 h，含 AMASS、BONES-SEED、CIRCLE、OMOMO、LAFAN）引导全身动力学协调。
3. 沿袭并改造 SONIC 动作 token：编码与误差反馈显式解耦
   在 [NVIDIA GEAR Lab](../entities/labs/NVIDIA%20GEAR%20Lab.md) [SONIC](%E4%B8%93%E8%AE%BF%E7%BD%97%E6%AD%A3%E5%AE%9C%EF%BC%9A%E5%85%B3%E4%BA%8ESONIC%E5%85%A8%E8%BA%AB%E6%8E%A7%E5%88%B6%E6%A1%86%E6%9E%B6%E7%9A%84%E8%AE%BF%E8%B0%88.md) 有限标量量化（FSQ）动作 token 的基础上，Anchor 1 发现若将实时执行误差直接喂给运动编码器（即消融版 Anchor 1*），同一参考指令会因当前机器人位姿偏差而生成漂移后的离散 token，彻底破坏上层策略对 token 空间的插值与预测。Anchor 1 的解法是把编码器 E 与解码器 D 隔离：编码器仅吃稀疏参考 H′_5 生成纯粹意图 token z_t，由正向运动学实时算出的手腕（Wrist）与脚踝（Ankle）跟踪误差 e_t 绕过编码器直接注入控制解码器 D(z_t, o_t, e_t)；并新增轨迹重建头（Recon.）从 z_t 反推近期目标位姿，使上层 VLA 既可用 5 部位稀疏参考接口，也可直接下发动作 token 而仍保留物理反馈修正能力。

#### 二、核心数据核查、口径纠偏与工程边界

场景与利益披露：官网研究页（含 In-House Track、Public Track、Reachability 三赛道基准与 Autonomous Execution、Data Collection Efficiency 表格）与 arXiv:2611.00193 均由 Archon Robotics 第一方发布，目前尚未公开模型权重、部署代码与挑战赛评测环境，亦未披露公司融资估值。本工作台调取论文全文对官网图文未载的硬件本体（Unitree G1）、数据构成、控制消融表（Table 2）及限制条款（Section 3.2）进行了完整还原与口径审计。

| 控制器与配置 | 测试环境与赛道口径 | 全局成功率 Global SR (↑) | 局部成功率 Local SR (↑) | 实机手腕全局误差 (mm ↓) | 前瞻时间 / 在线重定向 |
| :--- | :--- | :--- | :--- | :--- | :--- |
| Anchor 1G / Anchor 1 (本文) | MuJoCo In-House Track (15,342 段) + G1 实机 (72 段) | 88.7% (Global 模式) / 35.5% (re-locate) | 88.4% (Global) / 85.0% (re-locate) | 75.69 mm (Reachability 子集 44.58 mm) | 0.06 s / 无需 (H′_5) |
| Anchor 1* (误差注入编码器) | MuJoCo In-House Track (15,342 段) | 62.7% | 86.0% | 未单列实机误差表 | 0.06 s / 无需 |
| MimicLite v1.1 (ROA) | MuJoCo In-House + G1 实机 (72 段) | 11.3% | 26.3% | 105.74 mm (局部 25.63 mm 略优) | 0.08 s / 需要 (R) |
| ScaleBFM-14 / ScaleBFM-5 | MuJoCo In-House + G1 实机 (72 段) | 22.8% (G) / 7.0% (L) | 54.9% (G) / 37.7% (L) | 218.62 mm / 209.15 mm | 0.10 s / 需要 (R) |
| SONIC v1.1 (G1) / SONIC-SMPL | MuJoCo In-House + G1 实机 (72 段) | 10.0% | 32.5% | 234.37 mm (G1) / 314.00 mm (SMPL) | 0.90 s (G1) / 0.18 s (SMPL) |

- ✅ 实机控制精度与 VLA 解耦消融核查（本工作台核查）：穿透对比论文 Table 2 与 Table 4，解耦机制在自主任务上起决定性作用。在踢纸箱与取拖鞋两项 VLA 自主测试中，未解耦的 Anchor 1* 在稀疏目标接口尚可跑出 0.85 与 0.45 成功率，但切换至 Motion Token 接口时两项任务全部崩溃归零（0.00 ± 0.00）；而采用重建反馈的 Anchor 1 在 Motion Token 接口下将踢纸箱提升至 0.90 ± 0.00（得分 0.81）、取拖鞋维持 0.45 ± 0.07（大幅超过 SONIC v1.1 的 0.10 ± 0.00）。遥操数采效率同样显著，踢纸箱从 SONIC v1.1 的 9 条/小时（37.50%）提升至 43 条/小时（98.03%），取拖鞋从 41 条/小时（68.33%）提升至 62 条/小时（97.37%）。
- ⚠️ 口径裂隙与局部指标反超核查（本工作台核查）：官网渲染高亮的「88.7% 成功率」是仿真 Global 模式下接收全局根部真值的理想上限；而在真机不输入全局状态的 re-locate 模式下（Table 2），Anchor 1 的全局轨迹成功率跌至 35.5%，若叠加 Recon. 重建反馈更降至 24.3%（仅局部姿态成功率保持 85.0% / 72.4%）。此外，在 72 段 In-House 实机测试中，MimicLite 的局部手腕位置误差（25.63 mm）实际上略低于 Anchor 1（29.43 mm），且自主取拖鞋 0.45 的绝对成功率仍远低于工业落地门槛。
- ⚠️ 论文自述硬边界与生态依赖（本工作台推断）：arXiv:2611.00193 第 3.2 节坦承三大限制——① 全部实验仅在单一硬件本体 Unitree G1 上完成，跨本体零样本迁移未测；② 5 部位稀疏运动学参考不含物体几何、接触力与抓握稳定性信号，低位取物一旦发生手部遮挡或材质滑移，动作跟踪准确也不保证抓稳；③ 重建分支本身会引入跟踪误差（Table 2 中 Global SR 由 88.7% 降至 76.0%），且附录 Fig. S2 显示 MuJoCo 与 Isaac Sim 存在明显跨引擎表现落差。

#### 三、赛道横向对比与定位

对照工作台已收录的 [NVIDIA GEAR Lab SONIC](%E4%B8%93%E8%AE%BF%E7%BD%97%E6%AD%A3%E5%AE%9C%EF%BC%9A%E5%85%B3%E4%BA%8ESONIC%E5%85%A8%E8%BA%AB%E6%8E%A7%E5%88%B6%E6%A1%86%E6%9E%B6%E7%9A%84%E8%AE%BF%E8%B0%88.md) 与清华/CUHK 联合提出的 [Weave](Weave_%20Learning%20Whole-Body%20Dexterous%20Loco-Manipulation%20from%20Human-Object%20Interactions%20%28arXiv_2609.16683%29.md)，人形全身控制正从「会跳舞后空翻」分岔为两条工程路径：

| 项目 / 机构 | 输入接口与前瞻窗口 | 灵巧手与接触建模 | 仿真 vs 真机状态 | 核心长板与短板 |
| :--- | :--- | :--- | :--- | :--- |
| Anchor 1（Archon Robotics） | 5 部位稀疏参考或 FSQ 动作 token，0.06 s 前瞻，免在线重定向 | 仅追踪腕踝运动学，无接触力/手部多指建模 | 1,081.37 h 数据训成，已在 Unitree G1 实机测 72+51 段并接通 VLA | 长板在全局漂移收敛与遥操 98.03% 高良率；短板是自主复杂取物 0.45 且尚未开源 |
| SONIC v1.1（NVIDIA GEAR Lab） | 机器人空间全关节 R (0.90 s) 或 SMPL 人体输入 (0.18 s) | 无显式物体接触建模 | 700 h 动捕训成，已在 Unitree G1 实机部署并开源 | 通用敏捷运动生态成熟；但在精密操作容限下误差大、需长前瞻窗口 |
| Weave（清华 IIIS / CUHK） | HOI 接触感知全身+双手 41 DoF 统一策略 | 显式追踪 29 DoF 全身 + 12 主动 DoF Inspire 灵巧手与接触 | 仅仿真（D_train 92.5% / D_test 65.0%），依赖真值里程计 | 补齐手—物接触动力学，但尚未完成纯机载传感的真机迁移 |

### 观点与可反驳条件

- ==观点==：==Anchor 1 证明了把人形全身控制从「在线 IK 全关节重定向」切回「稀疏关键部位引导 + 误差反馈旁路直连解码器」能大幅抑制全身漂移与遥操废片率==，但它本质上仍是纯运动学位置跟踪器而非力控操作手，其长期价值取决于能否在 2026 年底按期开源权重并成为 VLA 生态的高精度通用下盘（System 0）。
- ==推翻条件==：
  1. ① 开源与第三方复现检验：若至 2027 年 Q1 底 Archon Robotics 仍未如期开源 Anchor 1 权重、PICO 遥操与挑战赛评测环境，或开源后第三方在同类 Unitree G1 硬件上按相同 10–15 cm 误差容限测试 72 段 In-House 任务，实机全局手腕误差高于 120 mm、遥操踢纸箱采集成功率跌破 75%，则其工程复现性与领先幅度判断将被推翻。
  2. ② 分层架构 vs 端到端原生全身 VLA 检验：若至 2027 年底，无需独立冻结 System 0 稀疏控制器，端到端全身 VLA/WAM（如同步输出躯干、足端与双手力矩/位姿的统一策略）在低位取物等移动全身操作任务上的真机成功率稳定超过 80%（高于 Anchor 1 + VLA 当前取拖鞋 45% 的双层组合），则“必须冻结解耦稀疏全身控制器作为 VLA 执行底座”的分层路线将被证伪。

---

## 原文摘录与一手信源存证

> 源策未来（Archon Robotics ）发布面向全身操作的人形机器人控制器 Anchor 1，让机器人在弯腰、半跪和移动时，更准确地控制手脚位置并保持身体稳定。团队的真机演示覆盖了按电饭煲按钮、半跪拿水瓶，以及边走边扶稳篮筐、堆放物品等操作。
> — 原文摘录，PDF p.1；证据 `digest-material-cb3892fbac439534f34bdd119befb2c85b71ee7a1080076591373e7cf1ace27f-excerpt-1@1`

> 为什么重要： 从低层货架取物、端着托盘行走，都需要把手部操作、躯干姿态和脚下支撑协调起来。身体的一次晃动或多余迈步，就会改变手与物体的位置关系；全身控制的精度，直接影响任务能否完成。
> — 原文摘录，PDF p.1；证据 `digest-material-cb3892fbac439534f34bdd119befb2c85b71ee7a1080076591373e7cf1ace27f-excerpt-2@1`

> 这也是源策未来的切入点。这家公司专注研发通用人形机器人基础模型，创始团队包括李弘扬、李天羽和陈立，拥有 UniAD、华为 ADS 4.0 等端到端自动驾驶研发经历。其WBI （Whole-Body Intelligence，全身智能）路线是：先用大规模人类全身动作数据预训练，学习身体协调与环境交互，再通过真机数据后训练，将这些能力转化为机器人技能。
> — 原文摘录，PDF p.1；证据 `digest-material-cb3892fbac439534f34bdd119befb2c85b71ee7a1080076591373e7cf1ace27f-excerpt-3@1`

一手材料：

- Anchor 1: Precise and Stable Humanoid Control for Whole-Body Manipulation · Archon Robotics · [原站](https://www.archon.tech/research/anchor1) · [主体档案：Archon Robotics](../entities/companies/Archon%20Robotics.md) · [NotebookLM](https://notebook.google.com/notebook/cac99041-d3b9-449e-a192-12bb4b1ad391) · [Drive](https://drive.google.com/file/d/1ASfSndoH7nvSalvYmy4tZPHS7e4GFDIH/view?usp=drivesdk)
  材料版本 `digest-material-81ba4d6bd8f81810f2b3d506a775e41260851028de7ae0188eed420cd63ec103@2`；获取方式 `http_full_text`。
  > Reaching into a low shelf requires precise hand placement and coordinated changes in posture and support. A small drift or an unexpected step can interrupt the task, even when the overall movement looks right. — 原文提取
  > Anchor 1 is a whole-body controller built around these demands. It preserves task-relevant human motion through a sparse command interface and uses explicit feedback to correct execution. — 原文提取
- Anchor 1: Precise and Stable Humanoid Control for Whole-Body Manipulation (arXiv:2611.00193 Full Paper) · Archon Robotics (Li Chen, Tianyu Li, Yu Qiao, Hongyang Li et al.) · [原站](https://arxiv.org/abs/2611.00193) · [主体档案：Archon Robotics](../entities/companies/Archon%20Robotics.md) / [主体档案：Hongyang Li](../entities/people/Hongyang%20Li.md) / [主体档案：Li Chen](../entities/people/Li%20Chen.md) · [本地原件](../../../raw/fd964804a2652f617e18cfba15e5a3ee4dc19ae222b2aacea0e3fc81f18b4135)
  材料版本 `digest-material-fd964804a2652f617e18cfba15e5a3ee4dc19ae222b2aacea0e3fc81f18b4135@1`；获取方式 `http_full_text`。
  > --- PAGE 1 --- Anchor 1: Precise and Stable Humanoid Control for Whole-Body Manipulation Archon Robotics\* \* For detailed authorship, see Contributions section. — 原文提取
  > tr  ¯R𝑏(𝑡) TR𝑏(𝑡)  −1 2 ! . (1) Here R𝑏 is the executed orientation after the same fixed yaw alignment and ¯R𝑏 the reference orientation; both scores use the same orientation error. — 原文提取

归属与范围：已同步归档 Archon Robotics 官方研究页（https://www.archon.tech/research/anchor1，2026-10-30 发布）及配套 32 页 arXiv 论文全文（arXiv:2611.00193，105,376 字符）；穿透核实真机部署硬件为 Unitree G1、50 Hz 控制频率、1,081.37 小时训练语料构成、李弘扬/陈立/李天羽/乔宇及 Modi Shi 等核心署名，以及 3.2 节单本体、无接触力建模与自主 Pick Up Slippers 45% 成功率边界。

来源缺口：

- `unavailable`：Anchor 1 模型权重、部署代码、PICO 遥操作配置及排行榜尚未公开发布（官方页面标注预期 2026 年底发布模型与代码、2027 年初举办挑战赛），第三方暂无法离线复现。
- `pending_verification`：arXiv:2611.00193 展示的 Unitree G1 实机跟踪误差、遥操作采集效率（43/62 条/小时）及 VLA 下游任务表现均为官方单机实测口径，尚未经过跨人形本体迁移与独立第三方真机评测；同时论文明确指出稀疏运动学目标未显式建模物体几何与接触力，且仿真存在 MuJoCo 与 Isaac Sim 跨引擎差异。

[返回赛道总览](../赛道总览.md#digest-cb3892fbac439534) · [返回导读索引](README.md) · [主体档案库](../entities/README.md)
