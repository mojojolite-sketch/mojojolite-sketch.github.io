# Google DeepMind

[返回主体档案库](../README.md) · [返回赛道总览](../../赛道总览.md) · [单篇导读索引](../../blogs/README.md)

- 主体类别：🏛️ 实验室、高校与机构平台 (Labs & Institutions)
- 核心定位与说明：RT-2 发布主体 Google DeepMind Robotics 团队
- 关联账号与官方入口：
  - GitHub（Google DeepMind）：[账号主页](https://github.com/google-deepmind) · 登记对象 `digest-publisher-6bc3c4afa37f0ba20240f781` — RT-2 发布主体
  - Official（Google DeepMind）：[机构／作者主页](https://deepmind.google/) · 登记对象 `digest-publisher-0ef9b0fe0f3c92b4cf35b492` — Google DeepMind Robotics 团队

## 1. 核心研究问题与待核查争议（Questions & Open Debates）

### 🔍 待核查缺口与证据边界（Open Gaps）

- `unavailable`：原课程授课讲师、所属高校课程编号及英文原版 PPT / 课堂录音 URL 未在微信转载稿（human five）中披露，公网检索亦未定位到可直采的原始课程页面；文中提到的 GPT-5 / GPT-5.4 多机器人协作演示与 PPT 中 Gemini Robotics 2 作为 Planner 的案例缺完整课程视频与实验配置日志。（关联：[《Robot Policies：从 Imitation Learning 到 Token VLA》](../../blogs/Robot%20Policies%EF%BC%9A%E4%BB%8E%20Imitation%20Learning%20%E5%88%B0%20Token%20VLA.md)）
- `not_disclosed`：微信正文多处以定性示例替代原始论文量化基准（如未披露 ACT 实际动作块长 K=100、OpenVLA-OFT 在 LIBERO 76.5% 至 97.1% 与 26 倍吞吐提升、FAST 5 倍训练加速与 10k 小时扩展曲线），且原稿因 HTML 转写丢失全部行内 LaTeX 公式。（关联：[《Robot Policies：从 Imitation Learning 到 Token VLA》](../../blogs/Robot%20Policies%EF%BC%9A%E4%BB%8E%20Imitation%20Learning%20%E5%88%B0%20Token%20VLA.md)）
- `not_disclosed`：human five 个人博文提及的自测 843 条 LIBERO 轨迹离散化脚本、各 Bin 下多步漂移定量曲线及 SmolVLA Checkpoint 语言扰动测试细节尚未随本文公开，留待作者后续博文释放。（关联：[《VLA简史：从RT1到MolMoAct2》](../../blogs/VLA%E7%AE%80%E5%8F%B2%EF%BC%9A%E4%BB%8ERT1%E5%88%B0MolMoAct2.md)）
- `not_disclosed`：Google DeepMind 与 Stanford University 未在 arXiv:2403.01823v2 或项目主页 rt-hierarchy.github.io 开源 RT-H（PaLI-X 55B）模型权重、30K Diverse 扩充示范数据集及 9 维本体动作自动标签脚本。 [线索](https://rt-hierarchy.github.io/)（关联：[《RT-H: Action Hierarchies Using Language》](../../blogs/RT-H_%20Action%20Hierarchies%20Using%20Language.md)）
- `pending_verification`：RT-H 的 Diverse+Kitchen 真机评测仅在单一移动机械臂本体上对 8 项任务各测 10 局（每方法共 80 局），且动作仍为 256 桶离散末端增量、无触力觉闭环或长程记忆状态；其在高频接触装配与跨本体迁移上的上限相比当代 2026 WAM（GR00T 2）与 MEM（π0.7）已显落伍。 [线索](https://arxiv.org/html/2403.01823v2)（关联：[《RT-H: Action Hierarchies Using Language》](../../blogs/RT-H_%20Action%20Hierarchies%20Using%20Language.md)）

- [《Robot Policies：从 Imitation Learning 到 Token VLA》](../../blogs/Robot%20Policies%EF%BC%9A%E4%BB%8E%20Imitation%20Learning%20%E5%88%B0%20Token%20VLA.md)：触发线索为微信公众号 human five 于 2026-11-24 发布的《Robot Policies：从 Imitation Learning 到 Token VLA》（未披露原英文课程编号、讲师及原始 PPT/录音链接，且因微信 HTML 转写丢失行内 LaTeX 数学符号）。本工作台穿透核查并归档讲授脉络中 8 篇一手核心论文（ACT arXiv:2304.13705、DAgger arXiv:1011.0686、HG-DAgger arXiv:1810.02890、AMP arXiv:2104.02180、RT-2 arXiv:2307.15818、FAST arXiv:2501.09747、OpenVLA-OFT arXiv:2502.19645、MolmoAct arXiv:2508.07917），为各发布机构与代码仓补齐主页级 publisher\_accounts，补全缺失数学公式并联动站内 VLA 简史、RT-H、π0.5、MDP 五步闭环与 VLA 内部物理表征等已有导读；未公开的原始课堂录音/PPT 及定性省略的超参实验表保留规范缺口。
- [《VLA简史：从RT1到MolMoAct2》](../../blogs/VLA%E7%AE%80%E5%8F%B2%EF%BC%9A%E4%BB%8ERT1%E5%88%B0MolMoAct2.md)：逐项核验 RT-1 至 MolmoAct2 八篇 arXiv 原始论文 PDF（64K–178K 字符），精准校准参数规模、LIBERO / SO100 / 跨本体指标及 MolmoAct2 55.79 Hz 开环均摊吞吐限制；保留博主 843 条 LIBERO 离散化实验（5.5 倍 RMSE 差异）并补足离线/真机边界。
- [《RT-H: Action Hierarchies Using Language》](../../blogs/RT-H_%20Action%20Hierarchies%20Using%20Language.md)：已通过 ingest.fetch 抓回 arXiv:2403.01823v2 HTML 全文（100,244 字符）及 PDF 首页（23 页）、官方项目主页 rt-hierarchy.github.io（10,616 字符）完成全量穿透核查：确认作者为 Google DeepMind Robotics（Tianli Ding, Ted Xiao, Pierre Sermanet, Quan Vuong, Jonathan Tompson, Yevgen Chebotar, Debidatta Dwibedi）与 Stanford University（Suneel Belkhale, Dorsa Sadigh）；拆解了双查询语言动作层 π\_h/π\_l、9 维本体自动标注（2,500+ 词表）、异步推理缓存、Diverse+Kitchen 100K 真机量化提升（40% vs RT-2 25%）、30 条语言纠偏跃升至 63%（vs RT-2-IWR 13%）及对比 GR00T 2 / π0.7 MEM / MAWAM 的四大当代局限；未开源 55B 权重与 D+K 数据集保留规范缺口。

## 2. 收录文章与一手材料（Ingested Articles & Primary Sources）

### [Robot Policies：从 Imitation Learning 到 Token VLA](../../blogs/Robot%20Policies%EF%BC%9A%E4%BB%8E%20Imitation%20Learning%20%E5%88%B0%20Token%20VLA.md)

2026-11-24 · 来源：human five（Physical AI 课程实录整理 · 穿透 ACT / DAgger / RT-2 / FAST / OpenVLA-OFT / MolmoAct 八篇原论文） · 状态：有来源缺口

[单篇导读（blogs/）](../../blogs/Robot%20Policies%EF%BC%9A%E4%BB%8E%20Imitation%20Learning%20%E5%88%B0%20Token%20VLA.md) · [微信原件](../../../../raw/67f2fa935195a16e5c94011ab4725501f78d42d6438377a308a1e67019492a70) · 固定版本 `digest-material-67f2fa935195a16e5c94011ab4725501f78d42d6438377a308a1e67019492a70@1`

> 今天我想介绍一下 Physical AI，主要讨论如何将你们已经学过的 Vision-Language Model（VLM）、Reinforcement Learning（RL）等技术与机器人结合起来，以及这些技术究竟是如何控制机器人的。

> Policy 输出目标 Action 的频率，通常远低于底层 Controller 实际运行的频率。

关联一手材料：

- RT-2: Vision-Language-Action Models Transfer Web Knowledge to Robotic Control（Anthony Brohan et al.）· [原站](https://arxiv.org/abs/2307.15818) · [NotebookLM](https://notebook.google.com/notebook/cac99041-d3b9-449e-a192-12bb4b1ad391) · [Drive](https://drive.google.com/file/d/1ENu2dfhC8NR5zA8TDpCzQrplRQIcCZco/view?usp=drivesdk) · 版本 `digest-material-0a62dc36bbbfdea232ad45a0ab75c82e9cf535b55333ff22c02d5da1897ccac3@1`
  > We study how vision-language models trained on Internet-scale data can be incorporated directly into end-to-end robotic control to boost generalization and enable emergent semantic reasoning. — PDF p.1

### [VLA简史：从RT1到MolMoAct2](../../blogs/VLA%E7%AE%80%E5%8F%B2%EF%BC%9A%E4%BB%8ERT1%E5%88%B0MolMoAct2.md)

2026-11-02 · 来源：human five（穿透 RT-1 / RT-2 / RT-X / Octo / OpenVLA / π0 / SmolVLA / MolmoAct2 八篇 arXiv 论文） · 状态：有来源缺口

[单篇导读（blogs/）](../../blogs/VLA%E7%AE%80%E5%8F%B2%EF%BC%9A%E4%BB%8ERT1%E5%88%B0MolMoAct2.md) · [微信原件](../../../../raw/337c8061044197579ff7f572a9c11aa6d2ca7b2e8d2cd1fb0e3e80ee95ddc2cc) · 固定版本 `digest-material-337c8061044197579ff7f572a9c11aa6d2ca7b2e8d2cd1fb0e3e80ee95ddc2cc@1`

> 刚开始在 Twitter 上关注机器人学习社区时，Vision-Language-Action Model （VLA ）是我经常看到的一个词。到了 2026 年，随着每一次所谓的「机器人领域 GPT 时刻」到来，我逐渐发现一件有意思的事情：机器人领域至今仍未就最值得 Scaling 的方向形成共识，不同研究者对不同技术路线有着各自坚定的判断，其中一条路线就是 VLA。

> 我想弄清楚我们是如何走到今天这一步的，从 RT-1 到 MolmoAct 2 这样的新模型，究竟发生了哪些变化？又是哪些架构设计让这些系统真正发挥作用？这篇 Blog 是我追溯这一演进过程、理解其中技术权衡，并尝试开展一些小型实验的记录。说到底，这也是我更新自己对机器人学习领域认知的一种方式。

关联一手材料：

- RT-1: Robotics Transformer for Real-World Control at Scale（Anthony Brohan et al.）· [原站](https://arxiv.org/abs/2212.06817) · [NotebookLM](https://notebook.google.com/notebook/cac99041-d3b9-449e-a192-12bb4b1ad391) · [Drive](https://drive.google.com/file/d/1Qj4ls1vFvCxpbzxQZCXf3UCNc6X8xFHf/view?usp=drivesdk) · 版本 `digest-material-81efe669c8fa50ffc7097886dc78a442fa7a8f7f2451684b93069cb9fbeda767@1`
  > By transferring knowledge from large, diverse, task-agnostic datasets, modern ma- chine learning models can solve specific downstream tasks either zero-shot or with small task-specific datasets to a high level of performance. — PDF p.1
- RT-2: Vision-Language-Action Models Transfer Web Knowledge to Robotic Control（Anthony Brohan et al.）· [原站](https://arxiv.org/abs/2307.15818) · [NotebookLM](https://notebook.google.com/notebook/cac99041-d3b9-449e-a192-12bb4b1ad391) · [Drive](https://drive.google.com/file/d/1ENu2dfhC8NR5zA8TDpCzQrplRQIcCZco/view?usp=drivesdk) · 版本 `digest-material-0a62dc36bbbfdea232ad45a0ab75c82e9cf535b55333ff22c02d5da1897ccac3@1`
  > We study how vision-language models trained on Internet-scale data can be incorporated directly into end-to-end robotic control to boost generalization and enable emergent semantic reasoning. — PDF p.1

### [RT-H: Action Hierarchies Using Language](../../blogs/RT-H_%20Action%20Hierarchies%20Using%20Language.md)

2024-03-04 · 来源：Google DeepMind · Stanford University (arXiv:2403.01823v2) · 状态：有来源缺口

[单篇导读（blogs/）](../../blogs/RT-H_%20Action%20Hierarchies%20Using%20Language.md) · [微信原件](../../../../raw/84a5425857072cb7c09545b1a2716d8e3bb67d092b715e8c0132d1e0af551fcc) · 固定版本 `digest-material-84a5425857072cb7c09545b1a2716d8e3bb67d092b715e8c0132d1e0af551fcc@1`

> To bridge tasks and actions, our insight is to teach the robot the language of actions, describing low-level motions with more fine-grained phrases like "move arm forward". Predicting these language motions as an intermediate step between tasks and actions forces the policy to learn the shared structure of low-level motions across seemingly disparate tasks.

> Our method RT-H builds an action hierarchy using language motions: it first learns to predict language motions, and conditioned on this and the high-level task, it predicts actions, using visual context at all stages. We show that RT-H leverages this language-action hierarchy to learn policies that are more robust and flexible by effectively tapping into multi-task datasets.

关联一手材料：

- RT-H: Action Hierarchies Using Language (arXiv:2403.01823v2 Full Paper)（Google DeepMind · Stanford University）· [原站](https://arxiv.org/abs/2403.01823v2) · [本地原件](../../../../raw/9036d9d1ef8a1e9c9ccc692e65da0fec5818c832400e5081b4f61f3ae9da1e5a) · 版本 `digest-material-9036d9d1ef8a1e9c9ccc692e65da0fec5818c832400e5081b4f61f3ae9da1e5a@1`
  > Language provides a way to break down complex concepts into digestible pieces. — 原文提取
- RT-H: Action Hierarchies Using Language Official Project Page（Google DeepMind Robotics · Stanford University）· [原站](https://rt-hierarchy.github.io/) · [本地原件](../../../../raw/d0a7e00ba9f24e71ac588397a89b7bf4156b5a11f40317de20cf8242a2ea38b1) · 版本 `digest-material-d0a7e00ba9f24e71ac588397a89b7bf4156b5a11f40317de20cf8242a2ea38b1@1`
  > Language provides a way to break down complex concepts into digestible pieces. — 原文提取


## 3. 关联实体网络（Verified Entity Ontology）

- ← Nishant Ranka · 任职 / 隶属（曾任） [已离任/曾任]（rule_verified/verified）
- ← Rishabh Agarwal · 任职 / 隶属 · Research Scientist / Co-first author（rule_verified/verified）
- ← [Ted Xiao](../people/Ted%20Xiao.md) · 任职 / 隶属（rule_verified/verified）
- ← [Yevgen Chebotar](../people/Yevgen%20Chebotar.md) · 任职 / 隶属 · Research Scientist (arXiv:2309.13041v1)（rule_verified/verified）
- ← Pierre Sermanet · 任职 / 隶属（rule_verified/verified）
- ← [Wilson Yan](../people/Wilson%20Yan.md) · 任职 / 隶属 · Senior Research Scientist（曾任） [已离任/曾任]（rule_verified/verified）
- ← Jesse Farebrother · 任职 / 隶属 · Researcher / Co-first author（rule_verified/verified）
- ← Debidatta Dwibedi · 任职 / 隶属（rule_verified/verified）
- ← Dorsa Sadigh · 任职 / 隶属（rule_verified/verified）
- ← [Pete Florence](../people/Pete%20Florence.md) · Google Brain 机器人核心学者（曾任） [已离任/曾任]（human_certified/pending）
- ← Peter Toth · 前 DeepMind 研究员 (Hamiltonian Gen. Net.) [已离任/曾任]（human_certified/verified）
- ← Aviral Kumar · 任职 / 隶属 · Research Scientist（rule_verified/verified）
- ← [Sergey Levine](../people/Sergey%20Levine.md) · 任职 / 隶属 · Researcher (Paper Affiliation)（rule_verified/verified）
- → [Stanford University](../labs/Stanford%20University.md) · 合作 / 联合研发（rule_verified/verified）
- ← [Danijar Hafner](../people/Danijar%20Hafner.md) · 任职 / 隶属 · Staff Research Scientist (10 years)（曾任） [已离任/曾任]（rule_verified/verified）
- ← Suneel Belkhale · 任职 / 隶属（rule_verified/verified）
- ← [Andy Zeng](../people/Andy%20Zeng.md) · Google Brain 机器人核心学者（曾任） [已离任/曾任]（human_certified/pending）
