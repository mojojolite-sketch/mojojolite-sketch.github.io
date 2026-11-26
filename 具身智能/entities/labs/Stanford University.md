# Stanford University

[返回主体档案库](../README.md) · [返回赛道总览](../../赛道总览.md) · [单篇导读索引](../../blogs/README.md)

- 主体类别：🏛️ 实验室、高校与机构平台 (Labs & Institutions)
- 核心定位与说明：Stanford CRFM / IRIS
- 关联账号与官方入口：
  - Official（Stanford University）：[机构／作者主页](https://www.stanford.edu/) · 登记对象 `digest-publisher-eccb970ba1ac5bfc9cf07d2a` — Stanford CRFM / IRIS

## 1. 核心研究问题与待核查争议（Questions & Open Debates）

### 🔍 待核查缺口与证据边界（Open Gaps）

- `unavailable`：原课程授课讲师、所属高校课程编号及英文原版 PPT / 课堂录音 URL 未在微信转载稿（human five）中披露，公网检索亦未定位到可直采的原始课程页面；文中提到的 GPT-5 / GPT-5.4 多机器人协作演示与 PPT 中 Gemini Robotics 2 作为 Planner 的案例缺完整课程视频与实验配置日志。（关联：[《Robot Policies：从 Imitation Learning 到 Token VLA》](../../blogs/Robot%20Policies%EF%BC%9A%E4%BB%8E%20Imitation%20Learning%20%E5%88%B0%20Token%20VLA.md)）
- `not_disclosed`：微信正文多处以定性示例替代原始论文量化基准（如未披露 ACT 实际动作块长 K=100、OpenVLA-OFT 在 LIBERO 76.5% 至 97.1% 与 26 倍吞吐提升、FAST 5 倍训练加速与 10k 小时扩展曲线），且原稿因 HTML 转写丢失全部行内 LaTeX 公式。（关联：[《Robot Policies：从 Imitation Learning 到 Token VLA》](../../blogs/Robot%20Policies%EF%BC%9A%E4%BB%8E%20Imitation%20Learning%20%E5%88%B0%20Token%20VLA.md)）
- `not_disclosed`：Google DeepMind 与 Stanford University 未在 arXiv:2403.01823v2 或项目主页 rt-hierarchy.github.io 开源 RT-H（PaLI-X 55B）模型权重、30K Diverse 扩充示范数据集及 9 维本体动作自动标签脚本。 [线索](https://rt-hierarchy.github.io/)（关联：[《RT-H: Action Hierarchies Using Language》](../../blogs/RT-H_%20Action%20Hierarchies%20Using%20Language.md)）
- `pending_verification`：RT-H 的 Diverse+Kitchen 真机评测仅在单一移动机械臂本体上对 8 项任务各测 10 局（每方法共 80 局），且动作仍为 256 桶离散末端增量、无触力觉闭环或长程记忆状态；其在高频接触装配与跨本体迁移上的上限相比当代 2026 WAM（GR00T 2）与 MEM（π0.7）已显落伍。 [线索](https://arxiv.org/html/2403.01823v2)（关联：[《RT-H: Action Hierarchies Using Language》](../../blogs/RT-H_%20Action%20Hierarchies%20Using%20Language.md)）

- [《Robot Policies：从 Imitation Learning 到 Token VLA》](../../blogs/Robot%20Policies%EF%BC%9A%E4%BB%8E%20Imitation%20Learning%20%E5%88%B0%20Token%20VLA.md)：触发线索为微信公众号 human five 于 2026-11-24 发布的《Robot Policies：从 Imitation Learning 到 Token VLA》（未披露原英文课程编号、讲师及原始 PPT/录音链接，且因微信 HTML 转写丢失行内 LaTeX 数学符号）。本工作台穿透核查并归档讲授脉络中 8 篇一手核心论文（ACT arXiv:2304.13705、DAgger arXiv:1011.0686、HG-DAgger arXiv:1810.02890、AMP arXiv:2104.02180、RT-2 arXiv:2307.15818、FAST arXiv:2501.09747、OpenVLA-OFT arXiv:2502.19645、MolmoAct arXiv:2508.07917），为各发布机构与代码仓补齐主页级 publisher\_accounts，补全缺失数学公式并联动站内 VLA 简史、RT-H、π0.5、MDP 五步闭环与 VLA 内部物理表征等已有导读；未公开的原始课堂录音/PPT 及定性省略的超参实验表保留规范缺口。
- [《RT-H: Action Hierarchies Using Language》](../../blogs/RT-H_%20Action%20Hierarchies%20Using%20Language.md)：已通过 ingest.fetch 抓回 arXiv:2403.01823v2 HTML 全文（100,244 字符）及 PDF 首页（23 页）、官方项目主页 rt-hierarchy.github.io（10,616 字符）完成全量穿透核查：确认作者为 Google DeepMind Robotics（Tianli Ding, Ted Xiao, Pierre Sermanet, Quan Vuong, Jonathan Tompson, Yevgen Chebotar, Debidatta Dwibedi）与 Stanford University（Suneel Belkhale, Dorsa Sadigh）；拆解了双查询语言动作层 π\_h/π\_l、9 维本体自动标注（2,500+ 词表）、异步推理缓存、Diverse+Kitchen 100K 真机量化提升（40% vs RT-2 25%）、30 条语言纠偏跃升至 63%（vs RT-2-IWR 13%）及对比 GR00T 2 / π0.7 MEM / MAWAM 的四大当代局限；未开源 55B 权重与 D+K 数据集保留规范缺口。

## 2. 收录文章与一手材料（Ingested Articles & Primary Sources）

### [Robot Policies：从 Imitation Learning 到 Token VLA](../../blogs/Robot%20Policies%EF%BC%9A%E4%BB%8E%20Imitation%20Learning%20%E5%88%B0%20Token%20VLA.md)

2026-11-24 · 来源：human five（Physical AI 课程实录整理 · 穿透 ACT / DAgger / RT-2 / FAST / OpenVLA-OFT / MolmoAct 八篇原论文） · 状态：有来源缺口

[单篇导读（blogs/）](../../blogs/Robot%20Policies%EF%BC%9A%E4%BB%8E%20Imitation%20Learning%20%E5%88%B0%20Token%20VLA.md) · [微信原件](../../../../raw/67f2fa935195a16e5c94011ab4725501f78d42d6438377a308a1e67019492a70) · 固定版本 `digest-material-67f2fa935195a16e5c94011ab4725501f78d42d6438377a308a1e67019492a70@1`

> 今天我想介绍一下 Physical AI，主要讨论如何将你们已经学过的 Vision-Language Model（VLM）、Reinforcement Learning（RL）等技术与机器人结合起来，以及这些技术究竟是如何控制机器人的。

> Policy 输出目标 Action 的频率，通常远低于底层 Controller 实际运行的频率。

关联一手材料：

- Learning Fine-Grained Bimanual Manipulation with Low-Cost Hardware (ACT)（Stanford University）· [原站](https://arxiv.org/abs/2304.13705) · [本地原件](../../../../raw/9b4e085b591222103d922dfb190ed44500c740b7f7801a422394aea47dcedac8) · 版本 `digest-material-9b4e085b591222103d922dfb190ed44500c740b7f7801a422394aea47dcedac8@1`
  > Abstract:Fine manipulation tasks, such as threading cable ties or slotting a battery, are notoriously difficult for robots because they require precision, careful coordination of contact forces, and closed-loop visual feedback. — 原文提取
- HG-DAgger: Interactive Imitation Learning with Human Experts（Stanford University）· [原站](https://arxiv.org/abs/1810.02890) · [本地原件](../../../../raw/17f98f3392f2e3c7e00653411c50737188cccb1e9c92f81e9c63c95b34c41401) · 版本 `digest-material-17f98f3392f2e3c7e00653411c50737188cccb1e9c92f81e9c63c95b34c41401@1`
  > Abstract:Imitation learning has proven to be useful for many real-world problems, but approaches such as behavioral cloning suffer from data mismatch and compounding error issues. — 原文提取
- Fine-Tuning Vision-Language-Action Models: Optimizing Speed and Success (OpenVLA-OFT)（Stanford University）· [原站](https://arxiv.org/abs/2502.19645) · [本地原件](../../../../raw/4891d285a1d9c03837cf6d14cd08fa3bfc41bcceb89cf1d25b0800265d8febdb) · 版本 `digest-material-4891d285a1d9c03837cf6d14cd08fa3bfc41bcceb89cf1d25b0800265d8febdb@1`
  > Abstract:Recent vision-language-action models (VLAs) build upon pretrained vision-language models and leverage diverse robot datasets to demonstrate strong task execution, language following ability, and semantic generalization. — 原文提取

### [RT-H: Action Hierarchies Using Language](../../blogs/RT-H_%20Action%20Hierarchies%20Using%20Language.md)

2024-03-04 · 来源：Google DeepMind · Stanford University (arXiv:2403.01823v2) · 状态：有来源缺口

[单篇导读（blogs/）](../../blogs/RT-H_%20Action%20Hierarchies%20Using%20Language.md) · [微信原件](../../../../raw/84a5425857072cb7c09545b1a2716d8e3bb67d092b715e8c0132d1e0af551fcc) · 固定版本 `digest-material-84a5425857072cb7c09545b1a2716d8e3bb67d092b715e8c0132d1e0af551fcc@1`

> To bridge tasks and actions, our insight is to teach the robot the language of actions, describing low-level motions with more fine-grained phrases like "move arm forward". Predicting these language motions as an intermediate step between tasks and actions forces the policy to learn the shared structure of low-level motions across seemingly disparate tasks.

> Our method RT-H builds an action hierarchy using language motions: it first learns to predict language motions, and conditioned on this and the high-level task, it predicts actions, using visual context at all stages. We show that RT-H leverages this language-action hierarchy to learn policies that are more robust and flexible by effectively tapping into multi-task datasets.

关联一手材料：

- RT-H: Action Hierarchies Using Language (arXiv:2403.01823v2 Full Paper)（Google DeepMind · Stanford University）· [原站](https://arxiv.org/abs/2403.01823v2) · [本地原件](../../../../raw/9036d9d1ef8a1e9c9ccc692e65da0fec5818c832400e5081b4f61f3ae9da1e5a) · 版本 `digest-material-9036d9d1ef8a1e9c9ccc692e65da0fec5818c832400e5081b4f61f3ae9da1e5a@1`
  > Language provides a way to break down complex concepts into digestible pieces. — 原文提取


## 3. 关联实体网络（Verified Entity Ontology）

- ← Stanford CS146S · 任职 / 隶属（decision1_verified/verified）
- ← [Goodfire AI](../companies/Goodfire%20AI.md) · 联合发表 VLA 神经几何与因果干预研究 [2026-10-16..至今]（rule_verified/verified）
- ← Dorsa Sadigh · 任职 / 隶属（rule_verified/verified）
- ← [Ruohan Gao](../people/Ruohan%20Gao.md) · 任职 / 隶属（曾任） [已离任/曾任]（rule_verified/verified）
- ← [Google Research](../labs/Google%20Research.md) · 合作 / 联合研发（rule_verified/verified）
- ← Suneel Belkhale · 任职 / 隶属（rule_verified/verified）
