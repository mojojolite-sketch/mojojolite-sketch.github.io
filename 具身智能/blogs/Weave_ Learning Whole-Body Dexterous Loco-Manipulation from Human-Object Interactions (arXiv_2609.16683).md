---
title: "Weave: Learning Whole-Body Dexterous Loco-Manipulation from Human-Object Interactions (arXiv:2609.16683)"
type: blog_digest
sector: "具身智能"
source: "arXiv:2609.16683 · Weave"
published_at: "2026-09-21"
raw_sha256: "6d8e3213f0c29c3435aee94d028174b9f3f2919ea1c0d3fef9f93e514c23371c"
material_version: "digest-material-6d8e3213f0c29c3435aee94d028174b9f3f2919ea1c0d3fef9f93e514c23371c@1"
origin_url: "https://arxiv.org/abs/2609.16683"
trigger_source: "arXiv · Tsinghua / CUHK"
trigger_url: "https://arxiv.org/abs/2609.16683"
user_comments: ""
status: "processed_with_gaps"
---

<a id="digest-6d8e3213f0c29c34"></a>
# Weave: Learning Whole-Body Dexterous Loco-Manipulation from Human-Object Interactions (arXiv:2609.16683)

2026-09-21 · arXiv:2609.16683 · Weave · 有来源缺口

[本地原件归档](../../../raw/6d8e3213f0c29c3435aee94d028174b9f3f2919ea1c0d3fef9f93e514c23371c) · 固定材料版本 `digest-material-6d8e3213f0c29c3435aee94d028174b9f3f2919ea1c0d3fef9f93e514c23371c@1` · [一手原站](https://arxiv.org/abs/2609.16683)

## 深度拆解与复核

### 导读与核心拆解

- ==核心结论==：清华大学交叉信息研究院（IIIS）、清华学院人工智能班、大连理工大学与香港中文大学（Liu Cao、Xingze Wu、Jingzhi Cui、Botian Xu、Mingzhi Pei、Ruoqu Chen、Mengdi Xu 等，部分工作完成于 CocoMatrix）联合发布的 Weave（arXiv:2609.16683），打通了从人类-物体交互（HOI）动捕演示到人形机器人“全身双足行走+双臂+双五指灵巧手”端到端协同跟踪的物理闭环；==它证明了在 29 个全身关节与 12 个主动灵巧手手指关节构成的 41 自由度空间里，单一统一策略（SimBaV2 + Muon 优化器）可在仿真中跨 9 种日常物体达到 92.5% 已见序列成功率与 65.0% 未见序列零样本成功率，但该版本策略仍强依赖仿真真值里程计与物体位姿（odometry & object pose），尚未部署到真实 Unitree G1 实体机测试 sim2real 鸿沟==。

### 一、技术管线与实验指标全景（arXiv:2609.16683 一手实证）

| 模块 / 评价维度 | Weave 工程与数据规格 | 实测绩效（9 类日常物体） | 在分层架构（VLA / WAM vs 全身控制器）中的定位 |
| :--- | :--- | :--- | :--- |
| 机械本体与驱动空间 | Unitree G1 人形机器人：29 个全身驱动自由度 + 两只 Inspire 五指灵巧手（12 个主动手指自由度，聚焦近端驱动关节协同接触） | 同一套统一策略联合控制下肢动态平衡、负载补偿与双手多指抓握，未做上下肢硬解耦 | 充当高频底层执行与物理接触追踪层（200 Hz 物理仿真 / 50 Hz 策略控制频率） |
| 数据集划分与参考补全 | 通过接触感知重定向（Contact-aware Retargeting）与趋近动作补全（Approach-motion completion），切分互不重叠的 D_train（7,869 条轨迹 / 19.56 小时）与 D_test（1,605 条轨迹 / 3.67 小时） | 额外开源释放约 9,000 条经物理仿真实际执行的成功 Rollout（总计约 23 小时，附带逐帧接触标注） | 为上游 VLA 或世界动作模型（WAM）提供自带动力学可行性与接触标签的高纯度中继语料 |
| 网络结构与优化器 | 接触与几何感知状态特征输入 SimBaV2 网络；关键设计是将 2D 权重矩阵交由 Muon 优化器更新，偏置及其他参数沿用 AdamW | D_train 交互成功率达 92.5%（进度率 PR 超 95%）；无额外微调直接泛化至未见序列 D_test 成功率达 65.0%（进度率 84.5%） | 在多物体统一策略下维持低跟踪误差，验证了 Muon 优化器在高频连续全身 RL 中的收敛稳定性 |

### 二、对比工作台现有具身智能分层脉络的增量

在工作台先前归档的 VLA（视觉-语言-动作模型）与 WAM（世界动作模型）路线对比中，核心痛点一直在于“高层语义规划懂意图、不懂全身动力学重心转移与手指接触反作用力”，而传统人形全身控制器（WBC）往往只顾双足抗扰而不含双五指多物体交互。Weave 的突破在于把全自由度 HOI 动作跟踪扩展至单策略跨物体统一控制，使其输出的 23 小时、约 9,000 条物理一致执行轨迹，正好填补了“人类纯运动学 HOI 视频”与“机器人动力学可执行轨迹”之间的中间断裂带。

### 三、口径与利益披露（本工作台核查）

1. 激励与归属标注：作者来自清华 IIIS、大连理工与 CUHK 学术机构，脚注注明部分工作完成于商业团队 CocoMatrix，工程实现采用开源生态常见组合（Unitree G1 + Inspire 灵巧手 + 仿真环境）。
2. ==关键实验边界与仿真局限核查（本工作台复核）==：
   - ❌ 无真机部署实测（Sim2Real 未评估）：论文实验与限制说明段明确写明，当前策略在推理时直接消费仿真器提供的==真值里程计与真值物体六自由度位姿（ground-truth odometry and object pose）==，并未接通真实相机/激光雷达/力触觉进行实机机载状态估计，也未将策略蒸馏至纯视觉学生模型（perception-based student）部署至实体 Unitree G1 上测试；因此真实碰撞摩擦、灵巧手传动背隙与真机跌落风险完全处于未测状态。
   - ⚠️ 12 自由度与全驱指关节差异：Inspire 灵巧手每个手指仅近端关节主动驱动、远端联动，相较全驱动 22-DoF 灵巧手在复杂手内重抓（in-hand reorientation）上的物理复杂度更低。
   - ✅ 开源 ~9,000 条物理执行 HOI 轨迹与 Muon + SimBaV2 训练配方本身经过了严格的跨序列划分（D_train vs D_test 无重合）验证，仿真跟踪指标（92.5% / 65.0%）真实可信。

### 核心观点与可反驳条件

1. ① 物理仿真执行后的大规模接触标注 Rollout 正在成为高层 VLA/WAM 不可或缺的动力学桥梁
- ==观点==：Weave 开源的约 9,000 条（23 小时）带接触标签的物理执行轨迹，解决了直接拿人类动捕重定向导致穿模、脚底打滑与无力平衡的顽疾，是训练通用人形双手操作策略的优质中继数据。
- ==推翻条件==：若当策略从仿真真值位姿蒸馏给纯板载视觉/触觉学生模型时，受限于视觉遮挡与 G1 本体传感器噪声，真实环境任务成功率从仿真 65.0% 断崖跌破 15% 且无法通过随机化域迁移修复。

2. ② 在高层 VLA 与底层高频全身控制器分层架构中，以 Muon 加速的统一全身跟踪器正替代“分任务手工调参”
- ==观点==：用单一 SimBaV2 策略搭配 Muon 优化器统一覆盖 29 个体节与 12 个指关节并横跨 9 种日常物体（未见序列 65.0% 成功率 / 84.5% 进度率），说明底层全身-灵巧手统一控制器已不再需要为每个物体单独训专用 RL 策略，为上游 VLA 仅输出关键位姿/接触目标提供了稳固下层抽象。
- ==推翻条件==：若多物体跨度进一步放大至 100 种以上差异极大的柔性/重型工业物件，或者增加双足跨障、上下楼梯伴随双手端重物场景时，单一统一策略出现严重的容量干扰与梯度冲突，不得不重新退回分层专家技能库。

---

## 原文摘录与一手信源存证

> 【信源巡检核心摘要】 arXiv:2609.16683（清华大学 / 大连理工 / CUHK，Liu Cao、Mengdi Xu、Ruoqu Chen 等）：提出统一全身灵巧移动操作框架 Weave，从人-物交互演示中端到端协同控制人形机器人 29 个全身关节与 12 个主动灵巧手手指关节，打通双足动态平衡与精细多指抓取。
> — 原文摘录，文字段落 1；证据 `digest-material-6d8e3213f0c29c3435aee94d028174b9f3f2919ea1c0d3fef9f93e514c23371c-excerpt-1@1`

一手材料：

- Weave: Learning Whole-Body Dexterous Loco-Manipulation from Human-Object Interactions (arXiv:2609.16683) · arXiv · Tsinghua / CUHK · [原站](https://arxiv.org/abs/2609.16683) · [主体档案：Liu Cao](../entities/people/Liu%20Cao.md) / [主体档案：Mengdi Xu](../entities/people/Mengdi%20Xu.md) / [主体档案：Ruoqu Chen](../entities/people/Ruoqu%20Chen.md) · [本地原件](../../../raw/593052d04a83591d6136563f86cfc50b1249e3dfc50f04de56b962655b4a5cc4)
  材料版本 `digest-material-593052d04a83591d6136563f86cfc50b1249e3dfc50f04de56b962655b4a5cc4@1`；获取方式 `arxiv_pdf`。
  > Abstract—Learning humanoid–object interaction requires co- ordinating whole-body balance, locomotion, and dexterous hand contact to control both robot and object motion. — PDF p.1
  > robot to manipulate objects—approaching, grasping, and trans- porting them while maintaining balance. Such contact-rich loco-manipulation is a core capability for general-purpose humanoids. — PDF p.1

归属与范围：已用 arXiv:2609.16683v1 完整 PDF 替换占位摘要：核实 Weave 在 Unitree G1 (29+12 DoF) 仿真环境中以 SimBaV2+Muon 取得 92.5%/65.0% 成功率及约 9,000 条开源接触轨迹，同时明确标注该版本尚未脱离真值位姿进入实体真机测试。

来源缺口：

- `pending_verification`：策略仅在物理仿真器中验证，且直接依赖真值里程计（ground-truth odometry）与真值物体位姿（object pose），尚未蒸馏为纯视觉感知学生策略在实体 Unitree G1 上开展 sim2real 真机评测 [线索](https://arxiv.org/abs/2609.16683)

[返回赛道总览](../赛道总览.md#digest-6d8e3213f0c29c34) · [返回导读索引](README.md) · [主体档案库](../entities/README.md)
