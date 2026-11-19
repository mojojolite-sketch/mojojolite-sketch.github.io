# Peter Holderrieth

[返回主体档案库](../README.md) · [返回赛道总览](../../赛道总览.md) · [单篇导读索引](../../blogs/README.md)

- 主体类别：👤 个人与学者 (People)
- 核心定位与说明：MIT CSAIL 研究者，MIT 6.S184 课程讲义与 Generator Matching 第一作者。
- 关联账号与官方入口：
  - arXiv（Peter Holderrieth）：[作者索引](https://arxiv.org/search/?searchtype=author&query=Holderrieth%2C+Peter) · 登记对象 `digest-publisher-b65307c4d82623240745d35d` — MIT CSAIL 研究者，MIT 6.S184 课程讲义与 Generator Matching 第一作者。

## 1. 核心研究问题与待核查争议（Questions & Open Debates）

### 💬 追问与核查：《Discrete Diffusion Models》

- 这个我看不懂，蛮适合用我们的认知演进框架去解释一遍的

关联文章：[《Discrete Diffusion Models》](../../blogs/Discrete%20Diffusion%20Models.md)

> 追查结论摘要：这篇中文文章之所以读起来晦涩，是因为微信转发过程把所有行内 LaTeX 公式全吞掉了，只留下干瘪的“方程 (85)–(87)”“定理 33”“例 34”等骨架。本文真正来源是 MIT 6.S184 课程讲义《An Introduction to Flow Matching and Diffusion Models》（arXiv:2506.02070，2025-06-02，共 84 页）第 7 章《Discrete Diffusion Models》。下面用本工作台的「概念历程…

### 🔍 待核查缺口与证据边界（Open Gaps）

- `unavailable`：arXiv PDF 全文未本地下载归档：arXiv:2506.02070（84 页 MIT 6.S184 讲义）、arXiv:2410.20587 与 arXiv:2406.07524 仅留存基于 search\_web 检索核实的元数据、章节摘要与核心定理公式，待联网后补抓完整 PDF 原件（含公式符号与附录 C 证明细节）。 [线索](https://arxiv.org/abs/2506.02070)（关联：[《Discrete Diffusion Models》](../../blogs/Discrete%20Diffusion%20Models.md)）

- [《Discrete Diffusion Models》](../../blogs/Discrete%20Diffusion%20Models.md)：本文（微信公众号 human five 于 2026-11-16 09:53 转载）系 MIT 6.S184 课程讲义《An Introduction to Flow Matching and Diffusion Models》（arXiv:2506.02070，Peter Holderrieth & Ezra Erives，2025-06-02，共 84 页）第 7 章《Discrete Diffusion Models》的逐节中文译文，因微信 HTML 转换丢失行内 LaTeX 公式；已穿透核验 MIT CSAIL 讲义主源及 Generator Matching（arXiv:2410.20587）、MDLM（arXiv:2406.07524）等一手文献，并通过概念历程五步框架重构原理拆解。

## 2. 收录文章与一手材料（Ingested Articles & Primary Sources）

### [Discrete Diffusion Models](../../blogs/Discrete%20Diffusion%20Models.md)

2026-11-16 · 来源：arXiv:2506.02070 · An Introduction to Flow Matching · 状态：有来源缺口

[单篇导读（blogs/）](../../blogs/Discrete%20Diffusion%20Models.md) · [微信原件](../../../../raw/810d5287815cb4edfa0b8f604c2f297c8ce55c1f832f3d4f47ece01834c7d6f3) · 固定版本 `digest-material-810d5287815cb4edfa0b8f604c2f297c8ce55c1f832f3d4f47ece01834c7d6f3@1`

> 然而重要的是要记住，离散状态空间中不存在数学扩散过程（SDE 不存在于离散状态空间中）。我们不使用 ODE/SDE，而是使用连续时间马尔可夫链（CTMC）。

> 事实证明，Flow Matching 的原理并非 flow 或甚至 CTMC 所独有。相反，这些是构建带马尔可夫过程的生成模型的一般学习原理。这引出了 Generator Matching 框架——一个扩展并统一离散和连续 flow 与扩散模型到一个框架的生成式建模框架。

关联一手材料：

- An Introduction to Flow Matching and Diffusion Models (Chapter 7: Discrete Diffusion Models)（MIT CSAIL (Peter Holderrieth & Ezra Erives)）· [原站](https://arxiv.org/abs/2506.02070) · [本地原件](../../../../raw/ef0b5e9c5afb61af230e9d2affa57355c24568b49ee8492eae5d5b641e48c2f7) · 版本 `digest-material-ef0b5e9c5afb61af230e9d2affa57355c24568b49ee8492eae5d5b641e48c2f7@1`
  > - Section 7.1 Continuous-Time Markov Chain (CTMC) Models: Defines discrete state space S = V^d (vocabulary V, sequence length d, used for text or DNA). — 原文提取
- Generator Matching: Generative modeling with arbitrary Markov processes（Peter Holderrieth et al.）· [原站](https://arxiv.org/abs/2410.20587) · [本地原件](../../../../raw/5030e8979daf465261e212e9d7757f372a8166e1a93f87576fb2e8d9ee2550ee) · 版本 `digest-material-5030e8979daf465261e212e9d7757f372a8166e1a93f87576fb2e8d9ee2550ee@1`
  > Authors: Peter Holderrieth, Marton Havasi, Jason Yim, et al. — 原文提取
