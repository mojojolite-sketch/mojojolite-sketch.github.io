# Andy Zeng

[返回主体档案库](../README.md) · [返回赛道总览](../../赛道总览.md) · [单篇导读索引](../../blogs/README.md)

- 主体类别：👤 个人与学者 (People)
- 核心定位与说明：Princeton 博士，前 Google DeepMind 研究科学家（Transporter Nets、SayCan、Code as Policies、RT-2 核心作者）
- 关联账号与官方入口：
  - web（Andy Zeng）：[机构／作者主页](https://andyzeng.github.io/) · 登记对象 `digest-publisher-479c150a3b26c3506ab24937` — Princeton 博士，前 Google DeepMind 研究科学家（Transporter Nets、SayCan、Code as Policies、RT-2 核心作者）

## 1. 核心研究问题与待核查争议（Questions & Open Debates）

### 🔍 待核查缺口与证据边界（Open Gaps）

- `not_disclosed`：Generalist AI 未公开 GEN-0（1,000h 微调，80%）、GEN-1（100h，99%）与 GEN-1.5（\<1h / 3–12s One-Shot）三代模型对比所使用的具体评测任务清单、成功判定标准及失败模式分布，尚无法排除跨代评测任务难度变化导致的分母漂移。（关联：[《Generalist：百万小时数据的infra》](../../blogs/Generalist%EF%BC%9A%E7%99%BE%E4%B8%87%E5%B0%8F%E6%97%B6%E6%95%B0%E6%8D%AE%E7%9A%84infra.md)）
- `not_disclosed`：内部扩展版 Airflow 4 的控制面改造细节、Mega Uploader 的 PCIe/USB 拓扑图纸及 AV1 按帧字节偏移 DataLoader 的 GOP 索引实现均未开源或发表技术白皮书。（关联：[《Generalist：百万小时数据的infra》](../../blogs/Generalist%EF%BC%9A%E7%99%BE%E4%B8%87%E5%B0%8F%E6%97%B6%E6%95%B0%E6%8D%AE%E7%9A%84infra.md)）

- [《Generalist：百万小时数据的infra》](../../blogs/Generalist%EF%BC%9A%E7%99%BE%E4%B8%87%E5%B0%8F%E6%97%B6%E6%95%B0%E6%8D%AE%E7%9A%84infra.md)：已定位微信文章《Generalist：百万小时数据的infra》的直接上游一手原片（Modal Runtime 2026 峰会演讲：Kathleen Brandes《The High-Stakes Infrastructure Problems That Are Defining Robotics》，2026-10-01）及三位联创（Pete Florence、Andrew J. Barry、Andy Zeng）配套的 4 期一手音频/视频播客与 GEN-0/1/1.5 官方技术博客；逐层保留五层数据基础设施工程细节并嵌入物理/系统量纲复核与可反驳条件。

## 2. 收录文章与一手材料（Ingested Articles & Primary Sources）

### [Generalist：百万小时数据的infra](../../blogs/Generalist%EF%BC%9A%E7%99%BE%E4%B8%87%E5%B0%8F%E6%97%B6%E6%95%B0%E6%8D%AE%E7%9A%84infra.md)

2026-11-09 · 来源：Modal Runtime 2026 · Generalist AI · 状态：有来源缺口

[单篇导读（blogs/）](../../blogs/Generalist%EF%BC%9A%E7%99%BE%E4%B8%87%E5%B0%8F%E6%97%B6%E6%95%B0%E6%8D%AE%E7%9A%84infra.md) · [微信原件](../../../../raw/9c16ea2806ee64ff015b203930a7380a9ff5c1b0d3c5aed283aba0cfd43b3808) · 固定版本 `digest-material-9c16ea2806ee64ff015b203930a7380a9ff5c1b0d3c5aed283aba0cfd43b3808@1`

> Kathleen Brandes 是 Generalist AI 的 Member of Technical Staff，毕业于 MIT，曾在 Boston Dynamics、Optimus Ride 和 Tesla 从事机器人软件、运动规划与机器学习相关工作。在 Tesla 期间，她参与开发 Tesla Bot 的端到端机器人操作策略，以及 Autopilot 自动变道算法。

> 我是 Generalist AI 的技术团队成员。Generalist AI 正在构建机器人基础模型，我们希望打造最具灵巧操作能力的机器人基础模型，使其能够覆盖从家庭到工业领域的真实世界应用。

关联一手材料：

- The High-Stakes Infrastructure Problems That Are Defining Robotics (Kathleen Brandes @ Modal Runtime 2026) & Generalist AI GEN-0 / GEN-1 / GEN-1.5 Technical Dossier（Modal Runtime 2026 · Generalist AI / Generalist AI Official Blog & Automated Podcast）· [原站](https://generalistai.com/blog/gen-1.5) · [NotebookLM](https://notebook.google.com/notebook/33f0076b-fc09-42cc-9cd9-fecfb847ce1c) · [Drive](https://drive.google.com/drive/folders/1ZIgKmZ2N95-AOAlhhzs2GDQ2iZw3yT4S) · 版本 `digest-material-c5fce1d7c6bde31797fd9db3551c48213aababeb429efaac6f01a26de587d6f7@1`
  > The WeChat article is a full Chinese translation of the technical conference talk given by Kathleen Brandes (Member of Technical Staff, Generalist AI) at Modal Runtime 2026 (San Francisco, October 1, 2026): "The High-Stakes Infrastructure Problems That Are Defining Robotics". — 原文提取
