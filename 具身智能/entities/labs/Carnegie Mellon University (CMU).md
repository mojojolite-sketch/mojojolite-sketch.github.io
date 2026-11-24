# Carnegie Mellon University (CMU)

[返回主体档案库](../README.md) · [返回赛道总览](../../赛道总览.md) · [单篇导读索引](../../blogs/README.md)

- 主体类别：🏛️ 实验室、高校与机构平台 (Labs & Institutions)
- 核心定位与说明：CMU Robotics Institute / Machine Learning Department
- 关联账号与官方入口：
  - Official（Carnegie Mellon University (CMU)）：[机构／作者主页](https://www.cmu.edu/) · 登记对象 `digest-publisher-3c0141232566b990a23b9c86` — CMU Robotics Institute / Machine Learning Department

## 1. 核心研究问题与待核查争议（Questions & Open Debates）

### 🔍 待核查缺口与证据边界（Open Gaps）

- `unavailable`：原课程授课讲师、所属高校课程编号及英文原版 PPT / 课堂录音 URL 未在微信转载稿（human five）中披露，公网检索亦未定位到可直采的原始课程页面；文中提到的 GPT-5 / GPT-5.4 多机器人协作演示与 PPT 中 Gemini Robotics 2 作为 Planner 的案例缺完整课程视频与实验配置日志。（关联：[《Robot Policies：从 Imitation Learning 到 Token VLA》](../../blogs/Robot%20Policies%EF%BC%9A%E4%BB%8E%20Imitation%20Learning%20%E5%88%B0%20Token%20VLA.md)）
- `not_disclosed`：微信正文多处以定性示例替代原始论文量化基准（如未披露 ACT 实际动作块长 K=100、OpenVLA-OFT 在 LIBERO 76.5% 至 97.1% 与 26 倍吞吐提升、FAST 5 倍训练加速与 10k 小时扩展曲线），且原稿因 HTML 转写丢失全部行内 LaTeX 公式。（关联：[《Robot Policies：从 Imitation Learning 到 Token VLA》](../../blogs/Robot%20Policies%EF%BC%9A%E4%BB%8E%20Imitation%20Learning%20%E5%88%B0%20Token%20VLA.md)）
- `unavailable`：受沙箱无外网直连约束，未能下载 arXiv:2611.03647 PDF 全文；5 类实机任务各自单项进度、w/o EAR 与 w/o REAM 消融百分点降幅、人类示范采集总条数/小时数以及伴随硬件 Pixel（arXiv:2611.03648）逐关节自由度与相机 BOM 未能直接核查。 [线索](https://arxiv.org/abs/2611.03647)（关联：[《Pixel-UMI: Learning Environment-Aware Whole-Body Manipulation from Sensorized Human Demonstrations》](../../blogs/Pixel-UMI_%20Learning%20Environment-Aware%20Whole-Body%20Manipulation%20from%20Sensorized%20Human%20Demonstrations.md)）
- `not_disclosed`：当前公开摘要与技术拆解未披露在线 DAgger 阶段人类实时干预步数占比与单任务平均纠偏工时，尚无法量化核算相对于纯真机遥操作的端到端采集降本倍率。 [线索](https://arxiv.org/abs/2611.03647)（关联：[《Pixel-UMI: Learning Environment-Aware Whole-Body Manipulation from Sensorized Human Demonstrations》](../../blogs/Pixel-UMI_%20Learning%20Environment-Aware%20Whole-Body%20Manipulation%20from%20Sensorized%20Human%20Demonstrations.md)）

- [《Robot Policies：从 Imitation Learning 到 Token VLA》](../../blogs/Robot%20Policies%EF%BC%9A%E4%BB%8E%20Imitation%20Learning%20%E5%88%B0%20Token%20VLA.md)：触发线索为微信公众号 human five 于 2026-11-24 发布的《Robot Policies：从 Imitation Learning 到 Token VLA》（未披露原英文课程编号、讲师及原始 PPT/录音链接，且因微信 HTML 转写丢失行内 LaTeX 数学符号）。本工作台穿透核查并归档讲授脉络中 8 篇一手核心论文（ACT arXiv:2304.13705、DAgger arXiv:1011.0686、HG-DAgger arXiv:1810.02890、AMP arXiv:2104.02180、RT-2 arXiv:2307.15818、FAST arXiv:2501.09747、OpenVLA-OFT arXiv:2502.19645、MolmoAct arXiv:2508.07917），为各发布机构与代码仓补齐主页级 publisher\_accounts，补全缺失数学公式并联动站内 VLA 简史、RT-H、π0.5、MDP 五步闭环与 VLA 内部物理表征等已有导读；未公开的原始课堂录音/PPT 及定性省略的超参实验表保留规范缺口。
- [《Pixel-UMI: Learning Environment-Aware Whole-Body Manipulation from Sensorized Human Demonstrations》](../../blogs/Pixel-UMI_%20Learning%20Environment-Aware%20Whole-Body%20Manipulation%20from%20Sensorized%20Human%20Demonstrations.md)：已通过 search\_web 核验 arXiv:2611.03647《Pixel-UMI: Learning Environment-Aware Whole-Body Manipulation from Sensorized Human Demonstrations》核心机制（EAR、延迟校准动作分配、REAM 与在线 DAgger）、5 类任务 87.0% 平均任务进度及伴随平台 Pixel（arXiv:2611.03648，\<\\\$15,000 轮式双臂硬件），并与库内 Ropedia Xperience 2（arXiv:2611.17060）、Maxinsights 与 UMI-Live（arXiv:2610.39385）完成四方路线横比。

## 2. 收录文章与一手材料（Ingested Articles & Primary Sources）

### [Robot Policies：从 Imitation Learning 到 Token VLA](../../blogs/Robot%20Policies%EF%BC%9A%E4%BB%8E%20Imitation%20Learning%20%E5%88%B0%20Token%20VLA.md)

2026-11-24 · 来源：human five（Physical AI 课程实录整理 · 穿透 ACT / DAgger / RT-2 / FAST / OpenVLA-OFT / MolmoAct 八篇原论文） · 状态：有来源缺口

[单篇导读（blogs/）](../../blogs/Robot%20Policies%EF%BC%9A%E4%BB%8E%20Imitation%20Learning%20%E5%88%B0%20Token%20VLA.md) · [微信原件](../../../../raw/67f2fa935195a16e5c94011ab4725501f78d42d6438377a308a1e67019492a70) · 固定版本 `digest-material-67f2fa935195a16e5c94011ab4725501f78d42d6438377a308a1e67019492a70@1`

> 今天我想介绍一下 Physical AI，主要讨论如何将你们已经学过的 Vision-Language Model（VLM）、Reinforcement Learning（RL）等技术与机器人结合起来，以及这些技术究竟是如何控制机器人的。

> Policy 输出目标 Action 的频率，通常远低于底层 Controller 实际运行的频率。

关联一手材料：

- A Reduction of Imitation Learning and Structured Prediction to No-Regret Online Learning (DAgger)（Carnegie Mellon University (CMU)）· [原站](https://arxiv.org/abs/1011.0686) · [本地原件](../../../../raw/aa3f7af165932d57551ffa35b88c642ffa988e8407f1ad08e60851cdfbc88acc) · 版本 `digest-material-aa3f7af165932d57551ffa35b88c642ffa988e8407f1ad08e60851cdfbc88acc@1`
  > Abstract:Sequential prediction problems such as imitation learning, where future observations depend on previous predictions (actions), violate the common i.i.d. assumptions made in statistical learning. — 原文提取

### [Pixel-UMI: Learning Environment-Aware Whole-Body Manipulation from Sensorized Human Demonstrations](../../blogs/Pixel-UMI_%20Learning%20Environment-Aware%20Whole-Body%20Manipulation%20from%20Sensorized%20Human%20Demonstrations.md)

2026-11-06 · 来源：arXiv:2611.03647 · Pixel-UMI · 状态：有来源缺口

[单篇导读（blogs/）](../../blogs/Pixel-UMI_%20Learning%20Environment-Aware%20Whole-Body%20Manipulation%20from%20Sensorized%20Human%20Demonstrations.md) · [微信原件](../../../../raw/f17a7d8598a711d597a3078df971f99229bc66bcec6bbddb929da1c674c71efb) · 固定版本 `digest-material-f17a7d8598a711d597a3078df971f99229bc66bcec6bbddb929da1c674c71efb@1`

> 【信源巡检核心摘要】 卡内基梅隆大学（CMU）Deepak Pathak 与 Ruslan Salakhutdinov 团队提出 Pixel-UMI 全身移动操作学习管线：通过环境感知重定向（EAR）结合重建场景几何生成无碰撞全身与底盘目标，引入重定向误差感知掩码（REAM）缓解人机视角错配，并配合在线 DAgger 人类纠偏应对富接触交互，在铰接物体、柔性物体、受限空间伸展、全身避障与双臂协同 5 类全身移动操作任务上取得 87.0% 平均任务进度。

关联一手材料：

- Pixel-UMI: Learning Environment-Aware Whole-Body Manipulation from Sensorized Human Demonstrations（CMU (Jason Jingzhou Liu, Tony Tao, Deepak Pathak, Ruslan Salakhutdinov)）· [原站](https://arxiv.org/abs/2611.03647) · [本地原件](../../../../raw/4d69cb9cdff3f2c0c103dda14de565be8b914eb974180845c32d47fc019aa636) · 版本 `digest-material-4d69cb9cdff3f2c0c103dda14de565be8b914eb974180845c32d47fc019aa636@1`
  > 2. Three Core Algorithmic Modules: - Environment-Aware Retargeting (EAR): Combines offline 3D scene geometry reconstructed from human-worn depth/camera recordings with demonstrated human head and gripper trajectories. — 原文提取


## 3. 关联实体网络（Verified Entity Ontology）

- ← [Haode Zhang](../people/Haode%20Zhang.md) · 任职 / 隶属（rule_verified/verified）
