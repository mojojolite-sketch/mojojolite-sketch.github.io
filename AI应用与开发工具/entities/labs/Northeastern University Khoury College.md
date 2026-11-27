# Northeastern University Khoury College

[返回主体档案库](../README.md) · [返回赛道总览](../../赛道总览.md) · [单篇导读索引](../../blogs/README.md)

- 主体类别：🏛️ 实验室、高校与机构平台 (Labs & Institutions)
- 核心定位与说明：Khoury College of Computer Sciences, Northeastern University
- 关联账号与官方入口：
  - Official Site（Northeastern University Khoury College）：[机构／作者主页](https://www.khoury.northeastern.edu/) · 登记对象 `digest-publisher-0a7d0dfad4d3e238203c7e6b` — Khoury College of Computer Sciences, Northeastern University

## 1. 核心研究问题与待核查争议（Questions & Open Debates）

### 🔍 待核查缺口与证据边界（Open Gaps）

- `not_disclosed`：论文正文 Figure 1（五模型四语言中位 Output Tokens 与成功率散点对数图）及 Figure 3 仅以矢量图呈现，未在正文或附录列出逐语言 Accuracy 精确百分数对照表；全部代码与 2,000 条轨迹数据集声明将于正式发表时公开，当前尚未释放仓库链接。 [线索](https://arxiv.org/abs/2607.22807)（关联：[《The Best Programming Language for Tokenmaxxing: An Investigation of Coding Agent Behavior Across Programming Languages (arXiv:2607.22807)》](../../blogs/The%20Best%20Programming%20Language%20for%20Tokenmaxxing_%20An%20Investigation%20of%20Coding%20Agent%20Behavior%20Across%20Programming%20L.md)）

- [《The Best Programming Language for Tokenmaxxing: An Investigation of Coding Agent Behavior Across Programming Languages (arXiv:2607.22807)》](../../blogs/The%20Best%20Programming%20Language%20for%20Tokenmaxxing_%20An%20Investigation%20of%20Coding%20Agent%20Behavior%20Across%20Programming%20L.md)：已抓取 arXiv:2607.22807 完整 PDF 全文（18 页，2026-07-24 v1 提交，2026-10-21 v2 修订）及全部 9 张实验表，替换原 670 字符 RSS 摘要。论文在 MiniLCB（LiveCodeBench v6 中 499 道语言无关题随机抽样 100 题，单题 2–45 个可见单测、中位数 22 个）上用 mini-swe-agent 评估 5 个推理模型（Gemma-4-26B-A4B、Qwen3.6-35B-A3B、GLM-5.2、GPT-5.5、Claude-Sonnet-4.6）与 4 种语言（Python/Java/Rust/OCaml），共 2,000 条轨迹。混合效应模型（ICC 0.73–0.97）显示控制题难度后 OCaml 输出 Token 较 Python 多 1.28x–1.69x（p\<0.001），Rust 与 Java 的额外成本呈模型依赖性（Gemma 不显著，Qwen/GLM/GPT-5.5/Sonnet 显著高于 Python 1.16x–1.57x）；高耗主因在过程轨迹损耗（编译失败重试循环、通过单测后继续自我修改、注释内规划以及先用 Python 原型再转译），与最终代码长度无关（OCaml 中位解长度排第二短）。

## 2. 收录文章与一手材料（Ingested Articles & Primary Sources）

### [The Best Programming Language for Tokenmaxxing: An Investigation of Coding Agent Behavior Across Programming Languages (arXiv:2607.22807)](../../blogs/The%20Best%20Programming%20Language%20for%20Tokenmaxxing_%20An%20Investigation%20of%20Coding%20Agent%20Behavior%20Across%20Programming%20L.md)

2026-11-27 · 来源：arXiv:2607.22807 · Northeastern University & Wellesley College (Wu, Anderson, Guha) · 状态：有来源缺口

[单篇导读（blogs/）](../../blogs/The%20Best%20Programming%20Language%20for%20Tokenmaxxing_%20An%20Investigation%20of%20Coding%20Agent%20Behavior%20Across%20Programming%20L.md) · [微信原件](../../../../raw/c0731531fed378322a6a2aed89b0594ec29d6cbf834bb0468b3904ca2e37bd65) · 固定版本 `digest-material-c0731531fed378322a6a2aed89b0594ec29d6cbf834bb0468b3904ca2e37bd65@1`

> 【信源巡检核心摘要】 2026 年 7 月发表的一手实证论文（arXiv:2607.22807）系统拆解不同编程语言导致 Coding Agent Token 消耗差异的原因：控制题目难度后，OCaml 比 Python 多消耗 1.28x–1.69x Token，Rust 与 Java 亦因模型不同产生额外开销；关键发现是高耗原因并非最终代码长度（OCaml 中位解长度排第二短），而是过程轨迹损耗——模型在不熟悉或强约束静态类型语言中更易陷入编译失败重试循环、先用 Python 原型再转译、在注释中反复规划及在通过单测后继续自我修改。

关联一手材料：

- The Best Programming Language for Tokenmaxxing: An Investigation of Coding Agent Behavior Across Programming Languages (arXiv:2607.22807)（Northeastern University & Wellesley College (Zixuan Wu, Carolyn Jane Anderson, Arjun Guha)）· [原站](https://arxiv.org/abs/2607.22807) · [本地原件](../../../../raw/189bb11841893deb9cdd30fc1e19870d8cdc5c9424bd2310c5c986212fb39f34) · 版本 `digest-material-189bb11841893deb9cdd30fc1e19870d8cdc5c9424bd2310c5c986212fb39f34@1`
  > Let’s say you have a software engineer or AI researcher and you pay them \$500,000 a year. We do that all the time. That \$500,000 engineer, at the end of the year, I’m going to ask them, how much did you spend in tokens? — PDF p.1
