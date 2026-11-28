---
title: "Jim Fan 与 NVIDIA 在 CoRL 2026 发布 GR00T 2 世界动作模型（WAM）及 10 万小时开源示范数据集"
type: blog_digest
sector: "具身智能"
source: "NVIDIA · CoRL 2026 (GR00T 2 / Isaac Lab 3.0)"
published_at: "2026-11-09"
raw_sha256: "a9a0c7f0b641c24ae7d02b4233b17baaaeb6b162b4d4fb3764f4aa749fb83793"
material_version: "digest-material-a9a0c7f0b641c24ae7d02b4233b17baaaeb6b162b4d4fb3764f4aa749fb83793@1"
origin_url: "https://blogs.nvidia.com/blog/robotics-simulation-advancements-corl/"
trigger_source: "Jim Fan"
trigger_url: "https://blogs.nvidia.com/blog/2026/11/09/practice-makes-precise-corl/"
user_comments: ""
status: "processed_with_gaps"
primary_topic: "模型与策略架构"
topic_confidence: 0.9047
stack_claims: [{"layer_id": "policy_architecture", "pattern_id": "world_action_model", "system": "GR00T 2", "entity": "NVIDIA GEAR Lab", "mechanism": "基于Cosmos用单一扩散Transformer联合去噪未来视频帧与动作块，并通过X-Adapt从手套/UMI/DexUMI跨本体迁移至Dexter、YAM与Tianji臂", "metric_or_tradeoff": "X-Adapt需目标本体其他历史任务遥操作对齐运动学，缺少手指触觉与六维力原生反馈，Turbo版在双臂精细任务略逊完整版", "source_url": "https://blogs.nvidia.com/blog/2026/11/09/practice-makes-precise-corl/"}, {"layer_id": "sim_verification", "pattern_id": "real_world_benchmark", "system": "Isaac Lab 3.0 + Newton + DexBench", "entity": "NVIDIA", "mechanism": "将Isaac Lab 3.0、Newton多物理引擎、Video to Data、EgoHand与DexBench/VABAR/GaP绑定为统一仿真训练与工业评测管线", "metric_or_tradeoff": "Isaac Lab 3.0+Newton视觉灵巧操作吞吐达2.5倍于2.3+PhysX，但合作方产线良率、UPH与8小时MTBF均未披露", "source_url": "https://blogs.nvidia.com/blog/2026/11/09/practice-makes-precise-corl/"}, {"layer_id": "data_acquisition", "pattern_id": "teleop_umi_handheld", "system": "GEAR UMI / GEAR DexUMI", "entity": "NVIDIA GEAR Lab", "mechanism": "除10万小时开源第一视角人类视频外，结合10184小时手持UMI夹爪与穿戴式外骨骼DexUMI及23500小时遥操作完成跨本体任务迁移", "metric_or_tradeoff": "GEAR UMI迁移至YAM完成4分钟自卸卡车装配成功率60%，Dexter化学滤纸20次65%，全套权重延迟至12月开源", "source_url": "https://blogs.nvidia.com/blog/2026/11/09/practice-makes-precise-corl/"}]
---

<a id="digest-a9a0c7f0b641c24a"></a>
# Jim Fan 与 NVIDIA 在 CoRL 2026 发布 GR00T 2 世界动作模型（WAM）及 10 万小时开源示范数据集

2026-11-09 · NVIDIA · CoRL 2026 (GR00T 2 / Isaac Lab 3.0) · 有来源缺口

[本地原件归档](../../../raw/a9a0c7f0b641c24ae7d02b4233b17baaaeb6b162b4d4fb3764f4aa749fb83793) · 固定材料版本 `digest-material-a9a0c7f0b641c24ae7d02b4233b17baaaeb6b162b4d4fb3764f4aa749fb83793@1` · [一手原站](https://blogs.nvidia.com/blog/robotics-simulation-advancements-corl/) · [触发线索（Jim Fan）](https://blogs.nvidia.com/blog/2026/11/09/practice-makes-precise-corl/)

## 深度拆解与复核

- ==核心结论==：本条目对应 [Jim Fan](../entities/people/Jim%20Fan.md)（@DrJimFan）与 [NVIDIA](../entities/companies/NVIDIA.md) 在 CoRL 2026（奥斯汀，2026-11-09 至 11-12）面向开发者发布的生态总览公告。技术主线上，基于 Cosmos 架构的世界动作模型（WAM）GR00T 2 用单一扩散 Transformer 联合预测未来视觉帧与电机动作，支持超 20 步、5 分钟以上长程灵巧操作及 X-Adapt 跨本体迁移，20 亿（2B）参数的 GR00T 2 Turbo 可在 [宇树科技 (Unitree Robotics)](../entities/companies/%E5%AE%87%E6%A0%91%E7%A7%91%E6%8A%80%20%28Unitree%20Robotics%29.md) Unitree G1 机载 Jetson Thor 上以 124 ms 中位延迟本地脱离云端运行；生态层面上，官方同步在 Hugging Face 开源 10 万（100,000）小时第一视角人类视频数据集 PhysicalAI-Human-1M-100K，并将 Isaac Lab 3.0、Newton 多物理引擎、Video to Data、EgoHand、DexBench 与 VABAR 绑定为标准仿真评测管线。本篇与库内《Practice Makes Precise》（仿真求解器）、《GR00T 2 Official Technical Release》（算法架构消融）及《GR00T 2: World-Action Model for Physical AI and Agentic Robotics》（Keynote 实机细节）形成互补，重点厘清原巡检地址 404 纠偏、开源 10 万小时子集与 40.27 万小时预训练全集口径关系，以及 CoRL 合作生态清单的真实交付进展。

#### 一、业务切口与核心机制

1. 链接纠偏与 CoRL 2026 双轨发布架构
   - 原巡检摘要所附地址 blogs.nvidia.com/blog/2026/11/09/practice-makes-precise-corl/ 已失效，经本工作台核查，NVIDIA 官方博客实际发布地址为 blogs.nvidia.com/blog/robotics-simulation-advancements-corl/（2026-11-09 刊出），同时技术细则锚定于 [NVIDIA GEAR Lab](../entities/labs/NVIDIA%20GEAR%20Lab.md) 项目页 research.nvidia.com/labs/gear/gr00t-2/ 与 Hugging Face 数据仓库 nvidia/PhysicalAI-Human-1M-100K。
   - 发布逻辑由两条正交管线耦合组成：策略端以 GR00T 2（单扩散 Transformer 联合去噪未来视频帧与动作块）+ GR00T 2 Turbo（2B 参数 + 高压缩 Wan 2.2 风格紧凑视频自编码器）承接人类视频与真机控制；仿真与数据端以 Video to Data 工作流、EgoHand 模型（上线两周 Hugging Face 下载量超 40,000 次，联合 Noitom Robotics 数据训练）、Isaac Lab 3.0 + Newton（视觉灵巧操作基准吞吐最高达 Isaac Lab 2.3 + PhysX 的 2.5 倍）以及 DexBench / VABAR / Graph-as-Policy（GaP）承接大规模并行训练与验证。

2. 端侧实时运行与 X-Adapt 跨本体迁移机制
   - 机载双芯协同：在 Unitree G1 实机上，机载 Jetson Thor 本地运行 20 亿参数 GR00T 2 Turbo，相对同检查点 eager BF16 推理延迟压降 66%–86%（提速 2.9–7.2 倍），以 124 ms 中位延迟（桌面 RTX 5090 为 38 ms）每约 1 秒规划 1.6 s 长度（80 个动作 Token）的全身动作块，交由机载 Jetson Orin 上的 SONIC 控制器以 50 Hz 转为关节目标，彻底脱离会场 Wi-Fi 与云端往返制约。
   - X-Adapt 三类零目标任务遥操作迁移：一是人类手套/头腕视角视频迁移至双臂 Dexter（天机臂 + [Sharpa](../entities/companies/Sharpa.md) 五指灵巧手，化学漏斗滤纸任务 20 次试验成功率 65%）；二是手持 GEAR UMI 夹爪演示迁移至 YAM 机械臂（最长 4 分钟玩具自卸卡车装配端到端成功率 60%）；三是穿戴式外骨骼 GEAR DexUMI 迁移至 Tianji 臂 + ROBOTERA 灵巧手，自主完成切香蕉酸奶早餐制备与划火柴点灯。

#### 二、核心数据核查、口径纠偏与工程边界

- 场景与利益披露：本文主源为 NVIDIA 官方博客及 GEAR Lab（Jim Fan 与 [Yuke Zhu](../entities/people/Yuke%20Zhu.md) 联合领导）官方发布页。NVIDIA 并不销售通用人形整机，其免费开源 10 万小时人类视频、Isaac Lab 3.0 与 Newton、并承诺 12 月开源 GR00T 2 权重的商业动机，在于将上游数百万小时视频世界模型预训练留在自家数据中心 GPU，同时将下游具身整机的机载算力锁定在「Jetson Thor + Jetson Orin」双芯片参考栈。

| 核心口径项 | 社媒/巡检摘要表述 | 一手官网与技术页核查实情 | 复核结论与边界 |
| :--- | :--- | :--- | :--- |
| 人类视频数据规模 | 开源 10 万小时示范数据集 | Hugging Face 开源子集 nvidia/PhysicalAI-Human-1M-100K（CC BY 4.0，100,000 小时）；内部预训练全集为 402,730 小时第一视角人类视频 + 10,184 小时 UMI（2,897 任务）+ 23,500 小时遥操作 | ✅ 口径明确：10 万小时是可自由下载的子集，预训练全集仍以 40.27 万小时内部池为主 |
| 少样本与零样本成功率 | 50 项任务 0-Shot 40%、1-Shot 71%、5-Shot 95% | 50 项任务中有 40 项至少零样本成功一次；5 条演示（<3 分钟真机数据）经单卡 RTX 5090 LoRA 微调 30 分钟后均率 95%（37/50 全通） | ⚠️ 分母偏差：50 项任务经 ≥80% 可学性预筛选剔除了极难接触卡阻任务，非无偏工业成功率 |
| 端侧推理与协同频率 | 2B GR00T 2 Turbo 在 G1 Jetson Thor 延迟 124 ms | 124 ms 覆盖 1.6 s 全身动作块；在 G1 实机盛爆米花 48/48（100%）、清理桌面 93%（30 次）；但在 YAM 6 项中仅 2 项、Dexter 6 项中仅 1 项打平或胜过完整版 GR00T 2 | ⚠️ 精度折损：Turbo 版在灵巧双臂精细操作上整体略逊于完整版 GR00T 2 |
| 长程自主操作与外部介入 | 支持超 20 步、5 分钟以上长程操作 | 玩具装配 292/300 次（97–98/100）、垃圾分类 17/20 次均由高层推理模型通过 WAM API / WAM Edit 视觉标记（将短程指令遵循从 40% 提至 92%）与 ASPIRE 代码纠错辅助完成 | ⚠️ 依赖分层：长程跨故障恢复依赖上层推理模型视觉引导与仿真先验恢复例程 |

- ✅ 数据集与开源节奏核查（本工作台核查）：截至 2026-11-27，Hugging Face 数据仓 nvidia/PhysicalAI-Human-1M-100K 与 SimFoundry、GEAR DexUMI 硬件文档已实际可访问；但 GR00T 2 与 Turbo 模型权重以及 X-Adapt 代码在官网仍标示为 Available in December（2026 年 12 月放出），当前外部社区尚无法直接下载权重复现 50 项任务与 RoboCasa365/RoboLab/RoboDojo/MolmoSpaces 榜单前三成绩。
- ⚠️ X-Adapt 零样本前提复核（本工作台核查）：X-Adapt 的零样本仅指目标机器人在该待测任务上未采集遥操作轨迹，并非无需任何目标本体真机数据。训练集中仍包含目标机器人在其他历史任务上的常规遥操作数据，用以建立本体运动学与相机视角对齐。
- ❌ 生态合作方量产交付边界（本工作台推断）：CoRL 官方博客列举了 Nexuni（洗衣）、Foxconn（服务器制造自动化）、Siemens（工业评估与 VABAR/GaP）、MicroAGI（YAM 网线插拔）、RLWRLD（15 项任务 DexBench，获 Genesis AI 与 mimic robotics 测试，可通过 Bifrost Manifold 运行）、Skild AI（STEEL 求解器）、Dyna Robotics（Taku）、FieldAI、Flexion（Reflect）、Walden Robotics、Dexmate（Vega）与 Ambi Robotics/Bosch Research。上述合作伙伴多处于仿真训练接入、基准内测或早期产线试点阶段，官方博客未披露任何一家合作工厂的产线良率、节拍时间（UPH）或 8 小时连续运行平均故障间隔时间（MTBF）。

#### 三、赛道横向对比与定位

| 具身基础架构路线 | 代表系统 | 人类/跨本体数据利用方式 | 机载端侧推理与硬件绑定 | 核心优势与短板 |
| :--- | :--- | :--- | :--- | :--- |
| 统一序列世界动作模型（本文） | NVIDIA GR00T 2 / Turbo | 402,730h 人类视频（100k 开源）+ 10,184h UMI + 23,500h 遥操作，掩码条件流匹配 | 2B 参数在 Jetson Thor 达 124 ms 规划 1.6 s 动作块，绑定 Orin SONIC 50 Hz | 兼顾人类视频因果预训练与端侧实时执行；缺少手指触觉/六维力传感器原生反馈 |
| 瓶颈记忆流匹配 VLA | [Physical Intelligence](../entities/companies/Physical%20Intelligence.md) π0.7 + MEM | 跨本体真机遥操作 + 短期视频编码与长期语言日志（MEM） | 通过 Pi API Beta 托管云端微调与端侧部署 | 10–15 分钟长程任务记忆规划强，未主打大规模无标签人类视频预训练 |
| 三专家 4D 几何流 WAM | [Noematrix](../entities/companies/Noematrix%20%28%E7%A9%B9%E5%BD%BB%E6%99%BA%E8%83%BD%29.md) / SJTU UniFlowWAM | 离线 Track4World 3D 场景流 + 4D VAE 中训约 1,200h（214,443 回合） | 推理期流槽位放占位符无需抽流，桌面双臂为主 | 对相机视角与光照扰动鲁棒性突出（LIBERO-Plus 96.9%），尚未覆盖双足全身移动操作 |
| 云端大模型零样本控制 | OpenAI GPT-6 Astra（NVIDIA SRL Astranomy 实测） | 无任务微调直接调用视觉上下文与 Codex 持久会话 | 云端 API 单次调用平均 13.37–18.56 秒，单回合 $1.96–$36.40 | RoboLab-120 成功率达 66.3%–74.8%，但延迟与费用高出端侧小模型 2 个数量级以上 |

### 观点与可反驳条件

- ==观点==：==NVIDIA 在 CoRL 2026 推出一套由「100,000 小时开源人类视频底座 + 2B 端侧 124 ms WAM（GR00T 2 Turbo）+ Newton/Isaac Lab 3.0 仿真 + DexBench/VABAR 工业标准」组成的软硬一体生态标准，用以锁定云端训练算力与机载 Jetson Thor/Orin 双芯选型==；10 万小时开源数据将加速学术界与中小本体厂冷启动，但未纳入触觉力控且依赖 80% 预筛选任务池的指标口径，决定了其距离免调参工业量产仍差接触反馈与长程稳定性验证。
- ==推翻条件==：
  1. ① 2026 年 12 月开源后复现回撤：GR00T 2 与 Turbo 权重正式公开后，若第三方团队在不经 ≥80% 可学性预筛选的完整 DexBench（15 项工业任务）或线束插接场景按同等「5 条演示 + 单卡 RTX 5090 微调 30 分钟」评测，平均端到端成功率跌破 55%，则说明当前 95% 指标主要由任务池筛选贡献。
  2. ② 异构芯片替代与人类视频效率衰减：若截至 2027 年上半年，第三方本体厂商普遍采用非英伟达车规级 SoC（BOM 成本低于 Thor + Orin 组合 40% 以上）跑通 120 ms 级 80 步动作块控制，或独立消融显示 10 万小时 PhysicalAI-Human-1M-100K 在未入库新机械手上的微调收益显著低于 10 小时 DexUMI 采集，则英伟达通过该全栈标准绑定硬件与数据生态的护城河将被削弱。

---

## 原文摘录与一手信源存证

> 【信源巡检核心摘要】 NVIDIA 机器人总监 Jim Fan（@DrJimFan）于 2026 年 11 月 9–12 日 CoRL 2026 联合推出基于 Cosmos 架构的新一代世界动作模型（WAM）GR00T 2，采用单一扩散 Transformer 联合预测未来视觉帧与电机动作，支持超 20 步、5 分钟以上长程灵巧操作及 X-Adapt 跨本体迁移。
> — 原文摘录，文字段落 1；证据 `digest-material-a9a0c7f0b641c24ae7d02b4233b17baaaeb6b162b4d4fb3764f4aa749fb83793-excerpt-1@1`

一手材料：

- Practice Makes Precise: At CoRL, NVIDIA and Partners Reveal How Robots Rehearse Delicate Work in Simulation · NVIDIA · [原站](https://blogs.nvidia.com/blog/robotics-simulation-advancements-corl/) · [主体档案：NVIDIA Official Blog](../entities/companies/NVIDIA%20Official%20Blog.md) · [本地原件](../../../raw/1a6f06e59cb80aa4c84669c4b9646ea8bc3addf100d60808a7641427c4380583)
  材料版本 `digest-material-1a6f06e59cb80aa4c84669c4b9646ea8bc3addf100d60808a7641427c4380583@1`；获取方式 `http_full_text`。
  > At the Conference on Robot Learning, NVIDIA is introducing GR00T 2, Isaac Lab 3.0 and new open benchmarks, built in collaboration with partners, bringing precision and scale to robot training. — 原文提取
  > Simulation, which has long been the proving ground for robots learning to walk, roll and hop, is now helping researchers teach robots tasks that require a finer touch: aligning gears, connecting cables and assembling small components. — 原文提取
- GR00T 2: Scaling Robot Foundation Models for Generalization, Dexterity, and Adaptation · NVIDIA GEAR Lab · [原站](https://research.nvidia.com/labs/gear/gr00t-2/) · [主体档案：NVIDIA GEAR Lab](../entities/labs/NVIDIA%20GEAR%20Lab.md) · [本地原件](../../../raw/d59b15e263c9421ef17d0ed5a93ac42c2f6785eca4713cce122a6c04561b83a0)
  材料版本 `digest-material-d59b15e263c9421ef17d0ed5a93ac42c2f6785eca4713cce122a6c04561b83a0@1`；获取方式 `http_full_text`。
  > Scaling robot foundation models for generalization, dexterity, and adaptation. — 原文提取
  > . GR00T 2 predicts future video and robot actions together, learning how physical interactions unfold along with the actions that produce them. The models run on parallel grippers, dexterous hands, and humanoids. — 原文提取
- nvidia/PhysicalAI-Human-1M-100K (Open 100K Hours Egocentric Human Video Dataset) · NVIDIA · [原站](https://huggingface.co/datasets/nvidia/PhysicalAI-Human-1M-100K) · [主体档案：NVIDIA](../entities/companies/NVIDIA.md) · [本地原件](../../../raw/bd1a468524e7ffe1837c78a141b0b23b55c0b4d3d92938fa5584fcd5f5db05b2)
  材料版本 `digest-material-bd1a468524e7ffe1837c78a141b0b23b55c0b4d3d92938fa5584fcd5f5db05b2@1`；获取方式 `http_full_text`。
  > The worker repeatedly sews white lace fabric with a sewing machine after trimming loose threads. — 原文提取
  > The person removes the brake caliper from a motorcycle using a T-handle wrench and pliers, then uses a screwdriver to adjust the caliper. After moving the motorcycle, they return to work on the caliper with a wrench. — 原文提取

归属与范围：已穿透纠正原巡检失效链接并抓取 NVIDIA CoRL 2026 官方发布页（blogs.nvidia.com/blog/robotics-simulation-advancements-corl/）、NVIDIA GEAR Lab GR00T 2 技术发布页（research.nvidia.com/labs/gear/gr00t-2/）与 Hugging Face PhysicalAI-Human-1M-100K 数据集页面；系统梳理 100,000 小时开源子集与 402,730 小时内部全集层级、2B 参数 GR00T 2 Turbo 在 Unitree G1 机载 Jetson Thor 的 124 ms / 80 步动作块控制回路，以及 Nexuni、Foxconn、Siemens、MicroAGI、Skild AI、RLWRLD 等生态合作矩阵；权重预计 2026 年 12 月开源与 5-Shot 95% 任务池预筛选偏差保留缺口。

来源缺口：

- `unavailable`：原巡检条目标注链接 https://blogs.nvidia.com/blog/2026/11/09/practice-makes-precise-corl/ 返回失效错误，已穿透定位并归档官方实际发布页 https://blogs.nvidia.com/blog/robotics-simulation-advancements-corl/ 与 GEAR Lab 项目页全文。 [线索](https://blogs.nvidia.com/blog/robotics-simulation-advancements-corl/)
- `not_disclosed`：GR00T 2 与 GR00T 2 Turbo 模型权重及 Cross-Adapt 代码在官网仍标示为 Available in December（预计 2026 年 12 月开源）；白皮书 50 项少样本任务来自至少达 80% 可学性的预筛选池，且合作企业 Foxconn、Siemens、Nexuni 等未披露产线良率、UPH 节拍与多小时连续运行 MTBF。 [线索](https://research.nvidia.com/labs/gear/gr00t-2/)

[返回赛道总览](../赛道总览.md#digest-a9a0c7f0b641c24a) · [返回导读索引](README.md) · [主体档案库](../entities/README.md)
