---
title: "Robot Policies：从 Imitation Learning 到 Token VLA"
type: blog_digest
sector: "具身智能"
source: "human five（Physical AI 课程实录整理 · 穿透 ACT / DAgger / RT-2 / FAST / OpenVLA-OFT / MolmoAct 八篇原论文）"
published_at: "2026-11-24"
raw_sha256: "67f2fa935195a16e5c94011ab4725501f78d42d6438377a308a1e67019492a70"
material_version: "digest-material-67f2fa935195a16e5c94011ab4725501f78d42d6438377a308a1e67019492a70@1"
origin_url: "https://mp.weixin.qq.com/s/wKuYZE3P4yK-EX_v_69uBQ"
trigger_source: "human five"
trigger_url: "https://mp.weixin.qq.com/s/wKuYZE3P4yK-EX_v_69uBQ"
user_comments: ""
status: "processed_with_gaps"
primary_topic: "模型与策略架构"
topic_confidence: 0.9622
---

<a id="digest-67f2fa935195a16e"></a>
# Robot Policies：从 Imitation Learning 到 Token VLA

2026-11-24 · human five（Physical AI 课程实录整理 · 穿透 ACT / DAgger / RT-2 / FAST / OpenVLA-OFT / MolmoAct 八篇原论文） · 有来源缺口

[本地原件归档](../../../raw/67f2fa935195a16e5c94011ab4725501f78d42d6438377a308a1e67019492a70) · 固定材料版本 `digest-material-67f2fa935195a16e5c94011ab4725501f78d42d6438377a308a1e67019492a70@1` · [一手原站](https://mp.weixin.qq.com/s/wKuYZE3P4yK-EX_v_69uBQ)

## 深度拆解与复核

### 1. 场景与利益标注、原稿缺陷修复

- 口径与利益披露：本文唯一公开可读原件为微信公众号 `human five` 于 2026-11-24 发布的《Robot Policies：从 Imitation Learning 到 Token VLA》（`https://mp.weixin.qq.com/s/wKuYZE3P4yK-EX_v_69uBQ`），系对 2026 年秋季高校或研究机构 Physical AI 课程讲座（结合现场演示录音与 PPT「43. MolmoAct」「Gemini Robotics 2 Planner」及课程衔接语）的中文听课实录，非单一产品商业路演。因原讲师姓名、课程编号与英文原版 PPT/录音链接未公开披露（公网亦未检出同序列原始课纲页），按规范如实以 `human five` 作为触发并唯一可核实课程实录主入口；同时针对微信 HTML 转写吞掉全部行内 LaTeX 公式与定量基准的缺陷，本工作台已独立拉取讲授脉络涉及的 8 篇上游原始论文全文（ACT `arXiv:2304.13705`、DAgger `arXiv:1011.0686`、HG-DAgger `arXiv:1810.02890`、AMP `arXiv:2104.02180`、RT-2 `arXiv:2307.15818`、FAST `arXiv:2501.09747`、OpenVLA-OFT `arXiv:2502.19645`、MolmoAct `arXiv:2508.07917`）完成公式补全与基准核对，并与站内多篇 VLA 导读及关联科研主体逐一互链。
- ==核心结论==：把课堂讲授、原始论文与站内控制频谱研究对照后可见，==机器人策略演进的主线不是「用更大的语言模型硬输出关节角」，而是按频率分层解耦：底层靠高频硬件闭环保安全、中层靠 Action Chunking 与连续动作头消除自回归误差与精度塌缩、高层仅让 VLM / VLA 在 0.1–4 Hz 承担空间与任务规划==。直接拿离散 Token VLA 或通用 API 模型直控高频机械臂，本质上是拿语义推理频段去强行覆盖物理接触控制频段。

### 2. Physical AI 数学框架还原与底层控制链（第一、二部分）

#### 2.1 MDP 与统一策略训练目标

讲义第一部分给出机器人与环境交互循环 `Goal -> Policy -> Action -> Environment -> Observation -> Policy`，并区分不可完全观测的真实世界 State $s_t$ 与机器人通过相机/关节编码器获取的 Observation $o_t$（历史堆叠 $o_{t-H:t}$ 可缓解部分可观测问题）。原稿缺失的数学记号按标准强化学习形式化还原如下（与站内 [Markov Decision Process (MDP) — 强化学习数学建模与具身运控五步闭环](Markov%20Decision%20Process%20%28MDP%29%20%E2%80%94%20%E5%BC%BA%E5%8C%96%E5%AD%A6%E4%B9%A0%E6%95%B0%E5%AD%A6%E5%BB%BA%E6%A8%A1%E4%B8%8E%E5%85%B7%E8%BA%AB%E8%BF%90%E6%8E%A7%E4%BA%94%E6%AD%A5%E9%97%AD%E7%8E%AF.md) 一致）：

- 策略采样与轨迹（Trajectory / Rollout / Episode）：$\tau = (s_0, a_0, s_1, a_1, \dots, s_T)$，轨迹概率 $P(\tau) = p(s_0) \prod_{t=0}^{T-1} \pi_\theta(a_t \mid s_t) P(s_{t+1} \mid s_t, a_t)$（原稿示例 $p(s_0)=0.5, \pi(a_0\mid s_0)=0.8, P(s_1\mid s_0,a_0)=0.9$ 时单步联合概率为 $0.36$）。
- 折扣累积回报（Return）与期望回报（Expected Return）：$G_t = \sum_{k=0}^{T-t} \gamma^k r_{t+k}$，其中 Discount Factor $\gamma \in [0,1)$；若策略有 80% 概率获得回报 10、20% 概率失败得 0，则 Expected Return 为 $0.8 \times 10 + 0.2 \times 0 = 8$。Robot Learning 围绕 Policy、Dynamics 与 Reward 三要素展开。
- 统一训练目标：$\max_\theta \mathbb{E}_{(s,a) \sim p(\tau)} [ w(s,a) \log \pi_\theta(a \mid s) ]$，即所有方法均可在「数据分布 $p(\tau)$ 从何而来（Expert 示教还是自身 Rollouts）、样本权重 $w$ 如何赋权（纯 BC 取 1，RL 取 Advantage）、Policy 动作表示如何设计」三轴下统一理解。

#### 2.2 动作表示、控制模式与 Sim-to-Real Gap

| 工程维度 | 核心机制与讲义分类 | 本工作台物理与工程核查 |
| :--- | :--- | :--- |
| 动作空间映射 | Joint Space（各关节自由度角度）vs Task Space（End Effector / Gripper 位置 Position、姿态 Orientation 与 Gripper Open / Close）；两者经 Forward Kinematics 与 Inverse Kinematics 互转 | ⚠️ 核查提示：Task Space 跨构型迁移更易但可能触发奇异点或自碰撞，且双臂/人形全身操作仍常回落 Joint Space 或混合表示 |
| 动作参考基准 | Absolute（绝对目标，如关节 30 度）、Relative（相对 Action Chunk 起点偏移，如 +5 度）、Delta（相对上一 Timestamp 增量，如 +1 度） | ✅ 核查确认：Relative/Delta 利于局部泛化但易产生漂移累积；跨数据集混合训练必须先对齐 Coordinate System 与 Control Convention |
| 四类控制模式 | 链路 Policy -> Controller -> Motor Electronics -> Joint；含 Position Control、Velocity Control、Impedance Control（遇外力主动让步防撞毁）、Torque Control（直接控力矩） | ⚠️ 频率墙核查：Policy 频率远低于底层 Controller；如主流机器人仍以 Position Control 为主，但刚性装配需 Impedance Control 或力控补盲 |
| Sim-to-Real 弥合 | 四条路径：Domain Randomization（随机化质量/摩擦/光照/噪声）、Co-training with Real Data、World Model Augmentation（生成光照纹理变化）、Measure the Gap（实测真机与仿真关节误差并学习残差修正） | ✅ 核查确认：对照库内 [Generalist 百万小时基建](Generalist%EF%BC%9A%E7%99%BE%E4%B8%87%E5%B0%8F%E6%97%B6%E6%95%B0%E6%8D%AE%E7%9A%84infra.md) 与 [VLA内部物理表征](%E3%80%90%E6%85%A2%E7%A7%91%E7%A0%94%E3%80%91VLA%E5%A6%82%E4%BD%95%E5%9C%A8%E5%86%85%E9%83%A8%E8%A1%A8%E7%A4%BA%E7%89%A9%E7%90%86%E4%B8%96%E7%95%8C%EF%BC%9F.md)，纯仿真未标定摩擦/执行延迟时，Co-training 与真机残差测量是跨越最后一厘米的刚需 |

### 3. Imitation Learning 与 Deep Reinforcement Learning（第三、四部分）

#### 3.1 Imitation Learning：多模态分布与误差累积治理

讲义系统梳理了从监督学习 Behavior Cloning（BC）到序列块策略的演化路线：

1. 多模态动作塌缩（Multimodal Action Distribution）：使用 Mean Squared Error（MSE）回归 Expert Action 时，面对左绕与右绕障碍物两种合法 Expert Demonstrations 会预测出撞向障碍物的平均值。解决方案包括 Gaussian Mixture Model（GMM）输出多 Action Mode 混合分布、BC-RNN 叠加历史 Observation（结合 RNN 识别夹爪运动方向），以及讲义提及留待后续介绍的 Diffusion Policy（[arXiv:2303.04137](https://arxiv.org/abs/2303.04137)）。
2. ACT（Action Chunking with Transformers）与 Temporal Ensembling：输入图像与 Joint State，引入 Encoder 从示范推断风格 Latent Variable $z$（部署时跳过 Encoder 置 $z=0$），由 Transformer 一次性预测未来 $H$ 步 Action Chunk（如 Horizon=16、Executed Steps=4），并通过 Temporal Ensembling 对重叠时间步预测做加权融合平滑关节切换。
   - ✅ 核查确认（[arXiv:2304.13705](https://arxiv.org/abs/2304.13705) 与 Q&A 澄清）：正如讲者在 Q&A 问题一至问题四中明确承认，Action Chunking 每次前向预测更大动作块并不会提高单步推理速度，==其真实价值是将开环决策步数由 $T$ 压缩为 $T/k$，把误差累积（Compounding Errors）压低并学到跨时间步的平滑运动先验==；同时必须通过「预测 16 步仅执行前 4 步再重观测」在轨迹连贯性与闭环纠偏之间折中（若全 chunk 10 步开环执行完，环境变化或前序错位将导致连锁失败）。原论文在 ALOHA 双臂低成本硬件上仅凭约 10 分钟示范即可在开调料杯、插电池等 6 项精细任务取得 80%–90% 成功率。
3. 分布偏移纠偏与数据采集：DAgger（Dataset Aggregation，[arXiv:1011.0686](https://arxiv.org/abs/1011.0686)）让策略在环境中运行并由专家对偏离状态补标 Action Label 扩充 Dataset；HG-DAgger（[arXiv:1810.02890](https://arxiv.org/abs/1810.02890)）更进一步允许人类在风险状态直接 Expert Intervention 接管并录制恢复轨迹；采集端则对比了人形项目常用的 VR Headset 第一人称 Teleoperation 与直接手扶示教（后者易让人类手部入镜污染视觉观测）。

#### 3.2 Deep Reinforcement Learning：无示教试错与奖励自动化

当缺乏 Expert Demonstrations 或期望突破人类上限（如机器狗 1 m/s 跟踪速度指令）时，转向基于自身 Rollouts 的 Deep Reinforcement Learning：

- Actor-Critic、Advantage 与 PPO：Actor 选动作，Critic 预测当前 State 价值 $V(s_t)$ 作为 Baseline（讲义示例 Baseline=4，实得 Return=2 则劣于预期、得 5 则优于预期），定义 Advantage $A(s_t,a_t) = Q(s_t,a_t) - V(s_t)$；Proximal Policy Optimization（PPO）构造 Clipped Objective $L^{\text{CLIP}}(\theta) = \mathbb{E}_t[\min(r_t(\theta)A_t, \text{clip}(r_t(\theta), 1-\epsilon, 1+\epsilon)A_t)]$ 限制新旧策略概率比变化幅度，配合仿真大规模并行采样加速收敛。
- 奖励函数设计（Reward Function Design）的三条演进：面对速度、稳定性、能耗与接触安全的多目标冲突，首先可用 AMP（Adversarial Motion Priors，[arXiv:2104.02180](https://arxiv.org/abs/2104.02180)）从人类动作片段抽取 Motion Prior 注入风格奖励；进一步可由 Language Model 自动生成 Reward Function 代码，并用 VLM 审阅 Rollout 视频判定抓放成败，最终由 Agent 保留历史实验树迭代进化 Reward（即 Eureka [arXiv:2310.12931](https://arxiv.org/abs/2310.12931) 等范式，在 29 个环境上于 83% 任务超越人类专家奖励工程，平均归一化提升 52%）。

### 4. Token VLAs 与基础模型规划控制边界（第五部分）

讲义第五部分聚焦 Vision-Language-Action Model（VLA）如何将互联网预训练的视觉语言理解泛化到 Robot Actions（把 Next Token Prediction 扩展为 Action Token Prediction）：

| 代际模型与数据集 | 核心架构与 Action Token 路线 | 本工作台一手论文与工程复核结论 |
| :--- | :--- | :--- |
| RT-2（Google DeepMind） | Vision Transformer + Language Model，把连续动作逐维量化进 256 个离散 Bins 作为文本 Token 联合训练 | ✅ 核查确认（[arXiv:2307.15818](https://arxiv.org/abs/2307.15818)）：验证语义涌现，但粗粒度 Token Quantization 存在精度截断且单步自回归解码慢（另见 [VLA简史](VLA简史：从RT1到MolMoAct2.md) 与 [RT-H](RT-H_%20Action%20Hierarchies%20Using%20Language.md)） |
| Open X-Embodiment & OpenVLA | 跨 Robot Embodiments 大规模协作数据集；OpenVLA 7B 用 DINOv2 + SigLIP 视觉特征拼接输出 Action Tokens | ✅ 核查确认（[arXiv:2406.09246](https://arxiv.org/abs/2406.09246)）：跨本体混合需先统一 Coordinate System；OpenVLA 7B 仍受 7B 部署成本与逐 Token 解码延迟约束 |
| FAST（Physical Intelligence） | 对动作序列做 Discrete Cosine Transform（DCT）-> Quantization -> Byte Pair Encoding（BPE）压缩 Sequence Length | ⚠️ 关键瓶颈核查（[arXiv:2501.09747](https://arxiv.org/abs/2501.09747)）：原讲义未点破高频失效根因——在 50 Hz 高频控制下相邻步强自相关，朴素离散化会让模型只复读上一步 Token；FAST+ 在 1M 真实轨迹上训练后，结合 π0 扩展至 10k 小时数据达到扩散 VLA 同等性能并把训练时间缩短至多 5 倍 |
| OpenVLA-OFT（Stanford） | 摒弃逐 Token 自回归，一次预测 Action Chunk 并接连续 Action Head 直接输出连续动作 | ✅ 实测效率核查（[arXiv:2502.19645](https://arxiv.org/abs/2502.19645)）：采用并行解码 + Action Chunking + 连续 L1 回归头，把 LIBERO 四套件平均成功率从 76.5% 拉升至 97.1%、动作生成吞吐暴涨 26 倍，并在 ALOHA 双臂超越 π0 与 ACT |
| MolmoAct（Ai2，PPT 第 43 页） | 三阶段自回归条件生成：Image + Text -> Depth Tokens（Depth Anything + VAE）-> Visual Trace -> Action Tokens | ⚠️ 延迟与迭代核查（[arXiv:2508.07917](https://arxiv.org/abs/2508.07917)）：MolmoAct-7B-D 具备可解释轨迹编辑优势（SimplerEnv 零样本 70.5%、LIBERO 86.6%、OOD +23.3%），但讲义坦言单次完整调用需数秒；该瓶颈也直接催生了后续 [MolmoAct2](VLA简史：从RT1到MolMoAct2.md) 与 [π0.5 知识绝缘](%CF%800.5%20%28pi0.5%29_%20A%20Vision-Language-Action%20Model%20with%20Open-World%20Generalization%20%28arXiv_2504.16054%29.md) 对连续专家的剥离 |

- ⚠️ 高层 Agentic Framework vs 底层直接控制（本工作台核查）：讲义末尾严格区分了两种基础模型范式——其一是高层 Planner 模式（如实验室演示用 GPT-5 或 GPT-5.4 调度多机器人技能 Skills 协同，PPT 另附 Google DeepMind 于 2026-07-30 发布的 Gemini Robotics 2 作为 Planner 案例），仅在 0.1–4 Hz 拆解任务并调度底层 Skill Policy；其二是让前沿模型直读图像与关节角直接输出动作，讲义中抓取演示视频虽经加速仍耗时数分钟且 API 成本高昂。本工作台推断，结合物理控制频谱（关节伺服 200–1,000 Hz、端侧策略 5–50 Hz），纯文本/多阶段离散自回归 Token VLA 的工程归宿正在快速分化：低频空间推演与故障回退上移至 S2 Planner，而 S1 实时动作生成已被 OpenVLA-OFT 连续回归头或 FAST+ / Flow-Matching 动作专家全面接管。

### 观点与可反驳条件

- ==观点==：==标准离散 Token VLA（逐帧 256-Bin 自回归预测单步动作）作为过渡范式已经触及频率墙与精度天花板，具身策略的工程收敛态是「高层 S2 语义/空间 Trace 规划 + 中层高频压缩动作词表（FAST）或并行连续动作块头（OpenVLA-OFT / Flow-Matching）+ 底层阻抗/力控伺服」的三段式解耦==；Action Chunking 的不可替代性不在推理加速，而在把高维时序控制压缩为可控决策步长以抑制误差累积。
- ==推翻条件==：
  1. 若未来 12 个月内在主流 50 Hz 高频灵巧操作基准（如 ALOHA 双臂叠衣、插线或 LIBERO 长程套件）上，出现不依赖并行连续 Action Head 或扩散/流匹配专家、仅靠单模型端到端离散自回归 Token 解码即在端侧边缘芯片稳定跑满 >= 30 Hz 闭环且成功率超越 OpenVLA-OFT（97.1%）与 π0.5 的工作，则本文对离散 Token VLA 触及频率与精度天花板的判断被推翻。
  2. 若大规模对比消融实验证明在相同真机遥操作数据量与 20 Hz 以上控制频率下，单步自回归策略（Chunk=1）叠加高速闭环重观测在长程接触任务上的成功率显著高于 Action Chunking（Chunk>=8 + Temporal Ensembling）且不引入高频抖动与误差累积，则本文关于 Action Chunking 抑制误差累积不可替代的判断被推翻。

---

## 原文摘录与一手信源存证

> 今天我想介绍一下 Physical AI，主要讨论如何将你们已经学过的 Vision-Language Model（VLM）、Reinforcement Learning（RL）等技术与机器人结合起来，以及这些技术究竟是如何控制机器人的。
> — 原文摘录，文字段落 1；证据 `digest-material-67f2fa935195a16e5c94011ab4725501f78d42d6438377a308a1e67019492a70-excerpt-1@2`

> Policy 输出目标 Action 的频率，通常远低于底层 Controller 实际运行的频率。
> — 原文摘录，文字段落 2；证据 `digest-material-67f2fa935195a16e5c94011ab4725501f78d42d6438377a308a1e67019492a70-excerpt-2@2`

一手材料：

- Learning Fine-Grained Bimanual Manipulation with Low-Cost Hardware (ACT) · Stanford University · [原站](https://arxiv.org/abs/2304.13705) · [主体档案：Stanford University](../entities/labs/Stanford%20University.md) / [主体档案：tonyzhaozh (Tony Z. Zhao)](../entities/people/tonyzhaozh%20%28Tony%20Z.%20Zhao%29.md) · [本地原件](../../../raw/9b4e085b591222103d922dfb190ed44500c740b7f7801a422394aea47dcedac8)
  材料版本 `digest-material-9b4e085b591222103d922dfb190ed44500c740b7f7801a422394aea47dcedac8@1`；获取方式 `http_full_text`。
  > Abstract:Fine manipulation tasks, such as threading cable ties or slotting a battery, are notoriously difficult for robots because they require precision, careful coordination of contact forces, and closed-loop visual feedback. — 原文提取
  > arXivLabs is a framework that allows collaborators to develop and share new arXiv features directly on our website. — 原文提取
- A Reduction of Imitation Learning and Structured Prediction to No-Regret Online Learning (DAgger) · Carnegie Mellon University (CMU) · [原站](https://arxiv.org/abs/1011.0686) · [主体档案：Carnegie Mellon University (CMU)](../entities/labs/Carnegie%20Mellon%20University%20%28CMU%29.md) · [本地原件](../../../raw/aa3f7af165932d57551ffa35b88c642ffa988e8407f1ad08e60851cdfbc88acc)
  材料版本 `digest-material-aa3f7af165932d57551ffa35b88c642ffa988e8407f1ad08e60851cdfbc88acc@1`；获取方式 `http_full_text`。
  > Abstract:Sequential prediction problems such as imitation learning, where future observations depend on previous predictions (actions), violate the common i.i.d. assumptions made in statistical learning. — 原文提取
  > arXivLabs is a framework that allows collaborators to develop and share new arXiv features directly on our website. — 原文提取
- HG-DAgger: Interactive Imitation Learning with Human Experts · Stanford University · [原站](https://arxiv.org/abs/1810.02890) · [主体档案：Stanford University](../entities/labs/Stanford%20University.md) · [本地原件](../../../raw/17f98f3392f2e3c7e00653411c50737188cccb1e9c92f81e9c63c95b34c41401)
  材料版本 `digest-material-17f98f3392f2e3c7e00653411c50737188cccb1e9c92f81e9c63c95b34c41401@1`；获取方式 `http_full_text`。
  > Abstract:Imitation learning has proven to be useful for many real-world problems, but approaches such as behavioral cloning suffer from data mismatch and compounding error issues. — 原文提取
  > arXivLabs is a framework that allows collaborators to develop and share new arXiv features directly on our website. — 原文提取
- AMP: Adversarial Motion Priors for Stylized Physics-Based Character Control · BAIR · [原站](https://arxiv.org/abs/2104.02180) · [主体档案：BAIR](../entities/labs/BAIR.md) · [本地原件](../../../raw/d0cbed5110a8e3439af506e75899e408ab84d85917cce544add880dc93015d57)
  材料版本 `digest-material-d0cbed5110a8e3439af506e75899e408ab84d85917cce544add880dc93015d57@1`；获取方式 `http_full_text`。
  > Abstract:Synthesizing graceful and life-like behaviors for physically simulated characters has been a fundamental challenge in computer animation. — 原文提取
  > arXivLabs is a framework that allows collaborators to develop and share new arXiv features directly on our website. — 原文提取
- RT-2: Vision-Language-Action Models Transfer Web Knowledge to Robotic Control · Anthony Brohan et al. · [原站](https://arxiv.org/abs/2307.15818) · [主体档案：Google DeepMind](../entities/labs/Google%20DeepMind.md) · [NotebookLM](https://notebook.google.com/notebook/cac99041-d3b9-449e-a192-12bb4b1ad391) · [Drive](https://drive.google.com/file/d/1ENu2dfhC8NR5zA8TDpCzQrplRQIcCZco/view?usp=drivesdk)
  材料版本 `digest-material-0a62dc36bbbfdea232ad45a0ab75c82e9cf535b55333ff22c02d5da1897ccac3@1`；获取方式 `http_pdf`。
  > We study how vision-language models trained on Internet-scale data can be incorporated directly into end-to-end robotic control to boost generalization and enable emergent semantic reasoning. — PDF p.1
  > Figure 1 | RT-2 overview: we represent robot actions as another language, which can be cast into text tokens and trained together with Internet-scale vision-language datasets. — PDF p.2
- FAST: Efficient Action Tokenization for Vision-Language-Action Models · Physical Intelligence · [原站](https://arxiv.org/abs/2501.09747) · [主体档案：Physical Intelligence](../entities/companies/Physical%20Intelligence.md) · [本地原件](../../../raw/0c34a1580ed63be7707ff17b36ec6245c443176e6e2b6a9d4669f9b5943b4ce7)
  材料版本 `digest-material-0c34a1580ed63be7707ff17b36ec6245c443176e6e2b6a9d4669f9b5943b4ce7@1`；获取方式 `http_full_text`。
  > Abstract:Autoregressive sequence models, such as Transformer-based vision-language action (VLA) policies, can be tremendously effective for capturing complex and generalizable robotic behaviors. — 原文提取
  > arXivLabs is a framework that allows collaborators to develop and share new arXiv features directly on our website. — 原文提取
- Fine-Tuning Vision-Language-Action Models: Optimizing Speed and Success (OpenVLA-OFT) · Stanford University · [原站](https://arxiv.org/abs/2502.19645) · [主体档案：Stanford University](../entities/labs/Stanford%20University.md) / [主体档案：openvla](../entities/companies/openvla.md) · [本地原件](../../../raw/4891d285a1d9c03837cf6d14cd08fa3bfc41bcceb89cf1d25b0800265d8febdb)
  材料版本 `digest-material-4891d285a1d9c03837cf6d14cd08fa3bfc41bcceb89cf1d25b0800265d8febdb@1`；获取方式 `http_full_text`。
  > Abstract:Recent vision-language-action models (VLAs) build upon pretrained vision-language models and leverage diverse robot datasets to demonstrate strong task execution, language following ability, and semantic generalization. — 原文提取
  > arXivLabs is a framework that allows collaborators to develop and share new arXiv features directly on our website. — 原文提取
- MolmoAct: Action Reasoning Models that can Reason in Space · Allen Institute for AI (Ai2) · [原站](https://arxiv.org/abs/2508.07917) · [主体档案：Allen Institute for AI (Ai2)](../entities/labs/Allen%20Institute%20for%20AI%20%28Ai2%29.md) / [主体档案：allenai (Allen Institute for AI)](../entities/labs/allenai%20%28Allen%20Institute%20for%20AI%29.md) · [本地原件](../../../raw/a94808b7df780f5fa6d144cdc06f1df4947925b92c9d5e58a4847d599dacddf5)
  材料版本 `digest-material-a94808b7df780f5fa6d144cdc06f1df4947925b92c9d5e58a4847d599dacddf5@1`；获取方式 `http_full_text`。
  > Abstract:Reasoning is central to purposeful action, yet most robotic foundation models map perception and instructions directly to control, which limits adaptability, generalization, and semantic grounding. — 原文提取
  > arXivLabs is a framework that allows collaborators to develop and share new arXiv features directly on our website. — 原文提取

归属与范围：触发线索为微信公众号 human five 于 2026-11-24 发布的《Robot Policies：从 Imitation Learning 到 Token VLA》（未披露原英文课程编号、讲师及原始 PPT/录音链接，且因微信 HTML 转写丢失行内 LaTeX 数学符号）。本工作台穿透核查并归档讲授脉络中 8 篇一手核心论文（ACT arXiv:2304.13705、DAgger arXiv:1011.0686、HG-DAgger arXiv:1810.02890、AMP arXiv:2104.02180、RT-2 arXiv:2307.15818、FAST arXiv:2501.09747、OpenVLA-OFT arXiv:2502.19645、MolmoAct arXiv:2508.07917），为各发布机构与代码仓补齐主页级 publisher\_accounts，补全缺失数学公式并联动站内 VLA 简史、RT-H、π0.5、MDP 五步闭环与 VLA 内部物理表征等已有导读；未公开的原始课堂录音/PPT 及定性省略的超参实验表保留规范缺口。

来源缺口：

- `unavailable`：原课程授课讲师、所属高校课程编号及英文原版 PPT / 课堂录音 URL 未在微信转载稿（human five）中披露，公网检索亦未定位到可直采的原始课程页面；文中提到的 GPT-5 / GPT-5.4 多机器人协作演示与 PPT 中 Gemini Robotics 2 作为 Planner 的案例缺完整课程视频与实验配置日志。
- `not_disclosed`：微信正文多处以定性示例替代原始论文量化基准（如未披露 ACT 实际动作块长 K=100、OpenVLA-OFT 在 LIBERO 76.5% 至 97.1% 与 26 倍吞吐提升、FAST 5 倍训练加速与 10k 小时扩展曲线），且原稿因 HTML 转写丢失全部行内 LaTeX 公式。

[返回赛道总览](../赛道总览.md#digest-67f2fa935195a16e) · [返回导读索引](README.md) · [主体档案库](../entities/README.md)
