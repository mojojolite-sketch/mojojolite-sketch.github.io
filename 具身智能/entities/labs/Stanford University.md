# Stanford University

[返回主体档案库](../README.md) · [返回赛道总览](../../赛道总览.md) · [单篇导读索引](../../blogs/README.md)

- 主体类别：🏛️ 实验室、高校与机构平台 (Labs & Institutions)
- 核心定位与说明：RT-H 联合研究高校主体。
- 关联账号与官方入口：
  - Official Website（Stanford University）：[机构／作者主页](https://www.stanford.edu/) · 登记对象 `digest-publisher-eccb970ba1ac5bfc9cf07d2a` — RT-H 联合研究高校主体。

## 1. 核心研究问题与待核查争议（Questions & Open Debates）

### 🔍 待核查缺口与证据边界（Open Gaps）

- `not_disclosed`：Google DeepMind 与 Stanford University 未在 arXiv:2403.01823v2 或项目主页 rt-hierarchy.github.io 开源 RT-H（PaLI-X 55B）模型权重、30K Diverse 扩充示范数据集及 9 维本体动作自动标签脚本。 [线索](https://rt-hierarchy.github.io/)（关联：[《RT-H: Action Hierarchies Using Language》](../../blogs/RT-H_%20Action%20Hierarchies%20Using%20Language.md)）
- `pending_verification`：RT-H 的 Diverse+Kitchen 真机评测仅在单一移动机械臂本体上对 8 项任务各测 10 局（每方法共 80 局），且动作仍为 256 桶离散末端增量、无触力觉闭环或长程记忆状态；其在高频接触装配与跨本体迁移上的上限相比当代 2026 WAM（GR00T 2）与 MEM（π0.7）已显落伍。 [线索](https://arxiv.org/html/2403.01823v2)（关联：[《RT-H: Action Hierarchies Using Language》](../../blogs/RT-H_%20Action%20Hierarchies%20Using%20Language.md)）

- [《RT-H: Action Hierarchies Using Language》](../../blogs/RT-H_%20Action%20Hierarchies%20Using%20Language.md)：已通过 ingest.fetch 抓回 arXiv:2403.01823v2 HTML 全文（100,244 字符）及 PDF 首页（23 页）、官方项目主页 rt-hierarchy.github.io（10,616 字符）完成全量穿透核查：确认作者为 Google DeepMind Robotics（Tianli Ding, Ted Xiao, Pierre Sermanet, Quan Vuong, Jonathan Tompson, Yevgen Chebotar, Debidatta Dwibedi）与 Stanford University（Suneel Belkhale, Dorsa Sadigh）；拆解了双查询语言动作层 π\_h/π\_l、9 维本体自动标注（2,500+ 词表）、异步推理缓存、Diverse+Kitchen 100K 真机量化提升（40% vs RT-2 25%）、30 条语言纠偏跃升至 63%（vs RT-2-IWR 13%）及对比 GR00T 2 / π0.7 MEM / MAWAM 的四大当代局限；未开源 55B 权重与 D+K 数据集保留规范缺口。

## 2. 收录文章与一手材料（Ingested Articles & Primary Sources）

### [RT-H: Action Hierarchies Using Language](../../blogs/RT-H_%20Action%20Hierarchies%20Using%20Language.md)

2024-03-04 · 来源：Google DeepMind · Stanford University (arXiv:2403.01823v2) · 状态：有来源缺口

[单篇导读（blogs/）](../../blogs/RT-H_%20Action%20Hierarchies%20Using%20Language.md) · [微信原件](../../../../raw/84a5425857072cb7c09545b1a2716d8e3bb67d092b715e8c0132d1e0af551fcc) · 固定版本 `digest-material-84a5425857072cb7c09545b1a2716d8e3bb67d092b715e8c0132d1e0af551fcc@1`

> To bridge tasks and actions, our insight is to teach the robot the language of actions, describing low-level motions with more fine-grained phrases like "move arm forward". Predicting these language motions as an intermediate step between tasks and actions forces the policy to learn the shared structure of low-level motions across seemingly disparate tasks.

> Our method RT-H builds an action hierarchy using language motions: it first learns to predict language motions, and conditioned on this and the high-level task, it predicts actions, using visual context at all stages. We show that RT-H leverages this language-action hierarchy to learn policies that are more robust and flexible by effectively tapping into multi-task datasets.

关联一手材料：

- RT-H: Action Hierarchies Using Language (arXiv:2403.01823v2 Full Paper)（Google DeepMind · Stanford University）· [原站](https://arxiv.org/abs/2403.01823v2) · [本地原件](../../../../raw/9036d9d1ef8a1e9c9ccc692e65da0fec5818c832400e5081b4f61f3ae9da1e5a) · 版本 `digest-material-9036d9d1ef8a1e9c9ccc692e65da0fec5818c832400e5081b4f61f3ae9da1e5a@1`
  > Language provides a way to break down complex concepts into digestible pieces. — 原文提取


## 3. 关联实体网络（Verified Entity Ontology）

- ← [Goodfire AI](../companies/Goodfire%20AI.md) · 联合发表 VLA 神经几何与因果干预研究 [2026-10-16..至今]（rule_verified/verified）
- ← Dorsa Sadigh · 任职 / 隶属（rule_verified/verified）
- ← [Ruohan Gao](../people/Ruohan%20Gao.md) · 任职 / 隶属（曾任） [已离任/曾任]（rule_verified/verified）
- ← [Google Research](../labs/Google%20Research.md) · 合作 / 联合研发（rule_verified/verified）
- ← Suneel Belkhale · 任职 / 隶属（rule_verified/verified）
