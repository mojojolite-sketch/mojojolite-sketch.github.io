# Allen Institute for AI (Ai2)

[返回主体档案库](../README.md) · [返回赛道总览](../../赛道总览.md) · [单篇导读索引](../../blogs/README.md)

- 主体类别：🏛️ 实验室、高校与机构平台 (Labs & Institutions)
- 核心定位与说明：Ai2 PRIOR / Molmo 团队
- 关联账号与官方入口：
  - Official（Allen Institute for AI (Ai2)）：[机构／作者主页](https://allenai.org/) · 登记对象 `digest-publisher-8b54ed35cac169b714cfa45c` — Ai2 PRIOR / Molmo 团队

## 1. 核心研究问题与待核查争议（Questions & Open Debates）

### 💬 追问与核查：《【慢科研】VLA如何在内部表示物理世界？》

- 看不懂...

关联文章：[《【慢科研】VLA如何在内部表示物理世界？》](../../blogs/%E3%80%90%E6%85%A2%E7%A7%91%E7%A0%94%E3%80%91VLA%E5%A6%82%E4%BD%95%E5%9C%A8%E5%86%85%E9%83%A8%E8%A1%A8%E7%A4%BA%E7%89%A9%E7%90%86%E4%B8%96%E7%95%8C%EF%BC%9F.md)

> 追查结论摘要：具象比喻（考场学霸 vs 背题机器）：

### 🔍 待核查缺口与证据边界（Open Gaps）

- `unavailable`：原课程授课讲师、所属高校课程编号及英文原版 PPT / 课堂录音 URL 未在微信转载稿（human five）中披露，公网检索亦未定位到可直采的原始课程页面；文中提到的 GPT-5 / GPT-5.4 多机器人协作演示与 PPT 中 Gemini Robotics 2 作为 Planner 的案例缺完整课程视频与实验配置日志。（关联：[《Robot Policies：从 Imitation Learning 到 Token VLA》](../../blogs/Robot%20Policies%EF%BC%9A%E4%BB%8E%20Imitation%20Learning%20%E5%88%B0%20Token%20VLA.md)）
- `not_disclosed`：微信正文多处以定性示例替代原始论文量化基准（如未披露 ACT 实际动作块长 K=100、OpenVLA-OFT 在 LIBERO 76.5% 至 97.1% 与 26 倍吞吐提升、FAST 5 倍训练加速与 10k 小时扩展曲线），且原稿因 HTML 转写丢失全部行内 LaTeX 公式。（关联：[《Robot Policies：从 Imitation Learning 到 Token VLA》](../../blogs/Robot%20Policies%EF%BC%9A%E4%BB%8E%20Imitation%20Learning%20%E5%88%B0%20Token%20VLA.md)）
- `not_disclosed`：arXiv:2610.20840主要在MolmoSpaces仿真器与离线DROID真实世界轨迹上完成了表征几何测绘与开环/仿真闭环干预，尚未披露在真实物理机械臂硬件（如Franka/UR5）上实时注入拉回引导向量（Pullback Steering）或状态信念编辑时的闭环控制频率开销、端到端抓取成功率变化及碰撞安全边界数据。（关联：[《【慢科研】VLA如何在内部表示物理世界？》](../../blogs/%E3%80%90%E6%85%A2%E7%A7%91%E7%A0%94%E3%80%91VLA%E5%A6%82%E4%BD%95%E5%9C%A8%E5%86%85%E9%83%A8%E8%A1%A8%E7%A4%BA%E7%89%A9%E7%90%86%E4%B8%96%E7%95%8C%EF%BC%9F.md)）

- [《Robot Policies：从 Imitation Learning 到 Token VLA》](../../blogs/Robot%20Policies%EF%BC%9A%E4%BB%8E%20Imitation%20Learning%20%E5%88%B0%20Token%20VLA.md)：触发线索为微信公众号 human five 于 2026-11-24 发布的《Robot Policies：从 Imitation Learning 到 Token VLA》（未披露原英文课程编号、讲师及原始 PPT/录音链接，且因微信 HTML 转写丢失行内 LaTeX 数学符号）。本工作台穿透核查并归档讲授脉络中 8 篇一手核心论文（ACT arXiv:2304.13705、DAgger arXiv:1011.0686、HG-DAgger arXiv:1810.02890、AMP arXiv:2104.02180、RT-2 arXiv:2307.15818、FAST arXiv:2501.09747、OpenVLA-OFT arXiv:2502.19645、MolmoAct arXiv:2508.07917），为各发布机构与代码仓补齐主页级 publisher\_accounts，补全缺失数学公式并联动站内 VLA 简史、RT-H、π0.5、MDP 五步闭环与 VLA 内部物理表征等已有导读；未公开的原始课堂录音/PPT 及定性省略的超参实验表保留规范缺口。
- [《【慢科研】VLA如何在内部表示物理世界？》](../../blogs/%E3%80%90%E6%85%A2%E7%A7%91%E7%A0%94%E3%80%91VLA%E5%A6%82%E4%BD%95%E5%9C%A8%E5%86%85%E9%83%A8%E8%A1%A8%E7%A4%BA%E7%89%A9%E7%90%86%E4%B8%96%E7%95%8C%EF%BC%9F.md)：触发线索为微信公众号「human five」2026-10-16发布的编译长文《【慢科研】VLA如何在内部表示物理世界？》，直接对应Mozes Jacobs\*（哈佛/Goodfire AI）、Aiden Swann\*（斯坦福/Goodfire AI）、Mathilde Papillon\*（UCSB/Goodfire AI）、Thomas McGrath、Matthew Kowal†、Thomas Fel†等人于2026年10月14日发表的一手论文《A Phenomenology of Neural Geometry in Vision-Language-Action Models》（arXiv:2610.20840v3）及同批发布的姊妹篇arXiv:2610.20767、arXiv:2610.20750。已完整提取论文8张核心实验图表落盘至work/views/具身智能/blogs/assets/vla\_internal\_physics\_representation/fig1.png至fig8.png，并在导读最前端提供零门槛直觉降维翻译与逐图读图指南。

## 2. 收录文章与一手材料（Ingested Articles & Primary Sources）

### [Robot Policies：从 Imitation Learning 到 Token VLA](../../blogs/Robot%20Policies%EF%BC%9A%E4%BB%8E%20Imitation%20Learning%20%E5%88%B0%20Token%20VLA.md)

2026-11-24 · 来源：human five（Physical AI 课程实录整理 · 穿透 ACT / DAgger / RT-2 / FAST / OpenVLA-OFT / MolmoAct 八篇原论文） · 状态：有来源缺口

[单篇导读（blogs/）](../../blogs/Robot%20Policies%EF%BC%9A%E4%BB%8E%20Imitation%20Learning%20%E5%88%B0%20Token%20VLA.md) · [微信原件](../../../../raw/67f2fa935195a16e5c94011ab4725501f78d42d6438377a308a1e67019492a70) · 固定版本 `digest-material-67f2fa935195a16e5c94011ab4725501f78d42d6438377a308a1e67019492a70@1`

> 今天我想介绍一下 Physical AI，主要讨论如何将你们已经学过的 Vision-Language Model（VLM）、Reinforcement Learning（RL）等技术与机器人结合起来，以及这些技术究竟是如何控制机器人的。

> Policy 输出目标 Action 的频率，通常远低于底层 Controller 实际运行的频率。

关联一手材料：

- MolmoAct: Action Reasoning Models that can Reason in Space（Allen Institute for AI (Ai2)）· [原站](https://arxiv.org/abs/2508.07917) · [本地原件](../../../../raw/a94808b7df780f5fa6d144cdc06f1df4947925b92c9d5e58a4847d599dacddf5) · 版本 `digest-material-a94808b7df780f5fa6d144cdc06f1df4947925b92c9d5e58a4847d599dacddf5@1`
  > Abstract:Reasoning is central to purposeful action, yet most robotic foundation models map perception and instructions directly to control, which limits adaptability, generalization, and semantic grounding. — 原文提取

### [【慢科研】VLA如何在内部表示物理世界？](../../blogs/%E3%80%90%E6%85%A2%E7%A7%91%E7%A0%94%E3%80%91VLA%E5%A6%82%E4%BD%95%E5%9C%A8%E5%86%85%E9%83%A8%E8%A1%A8%E7%A4%BA%E7%89%A9%E7%90%86%E4%B8%96%E7%95%8C%EF%BC%9F.md)

2026-10-16 · 来源：arXiv:2610.20840 · Goodfire AI & Harvard/Stanford · 状态：已整理

[单篇导读（blogs/）](../../blogs/%E3%80%90%E6%85%A2%E7%A7%91%E7%A0%94%E3%80%91VLA%E5%A6%82%E4%BD%95%E5%9C%A8%E5%86%85%E9%83%A8%E8%A1%A8%E7%A4%BA%E7%89%A9%E7%90%86%E4%B8%96%E7%95%8C%EF%BC%9F.md) · [微信原件](../../../../raw/7a8f304705ef4aa6fe127da3930a592bc15a055c9eb3cb84d3705e30a2a229aa) · 固定版本 `digest-material-7a8f304705ef4aa6fe127da3930a592bc15a055c9eb3cb84d3705e30a2a229aa@1`

> 既有关于 VLA 策略的研究已经证明，可以从激活中线性读取任务相关变量。然而，可读性只能证明某个变量存在，并不能说明其取值所描绘出的形状，而这种形状可能是弯曲的、多维的。

> 通过结合受控扫描、自然 rollout、线性探针和激活干预，我们构建了 VLA 模型中七种任务相关概念的分类体系。我们发现，这些概念所实现的几何结构主要是多维的，并受到策略执行动作时所面临约束的塑造。

关联一手材料：

- A Phenomenology of Neural Geometry in Vision-Language-Action Models (arXiv:2610.20840)（Goodfire AI · Harvard University · Stanford University · UC Santa Barbara (arXiv:2610.20840)）· [原站](https://arxiv.org/abs/2610.20840) · [本地原件](../../../../raw/c258bb5cca57be1832c362a8399b5b2974e4e34f5917a8dc2c6feb64fd7aec52) · 版本 `digest-material-c258bb5cca57be1832c362a8399b5b2974e4e34f5917a8dc2c6feb64fd7aec52@1`
  > Robotic manipulation is inherently geometric, involving multi-joint kinematic chains operating in 3D Euclidean and \$SO(3)\$ configuration spaces under physical contact constraints and multi-stage task horizons. — 原文提取
