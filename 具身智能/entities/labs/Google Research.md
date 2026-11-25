# Google Research

[返回主体档案库](../README.md) · [返回赛道总览](../../赛道总览.md) · [单篇导读索引](../../blogs/README.md)

- 主体类别：🏛️ 实验室、高校与机构平台 (Labs & Institutions)
- 核心定位与说明：Google 科研与机器人学派总览入口。
- 关联账号与官方入口：
  - Official Website（Google Research）：[机构／作者主页](https://research.google/) · 登记对象 `digest-publisher-f93f00b36746f670fa74167d` — Google 科研与机器人学派总览入口。

## 1. 核心研究问题与待核查争议（Questions & Open Debates）

### 🔍 待核查缺口与证据边界（Open Gaps）

- `unavailable`：Kaushil Kundalia关于Dream API与机器人研发笔记的原始英文博客手记（源自kaushil.dev或个人手记）因个人网站网络连接限制暂无直接开放一手链接，SourceMind中文完整译文已归档入库，保留英文原始手记一手链接缺口。（关联：[《离开英伟达到Dream Labs当API负责人后，他发现决定机器人能力的诸多因素中，模型只占很小一部分》](../../blogs/%E7%A6%BB%E5%BC%80%E8%8B%B1%E4%BC%9F%E8%BE%BE%E5%88%B0Dream%20Labs%E5%BD%93API%E8%B4%9F%E8%B4%A3%E4%BA%BA%E5%90%8E%EF%BC%8C%E4%BB%96%E5%8F%91%E7%8E%B0%E5%86%B3%E5%AE%9A%E6%9C%BA%E5%99%A8%E4%BA%BA%E8%83%BD%E5%8A%9B%E7%9A%84%E8%AF%B8%E5%A4%9A%E5%9B%A0%E7%B4%A0%E4%B8%AD%EF%BC%8C%E6%A8%A1%E5%9E%8B%E5%8F%AA%E5%8D%A0%E5%BE%88%E5%B0%8F%E4%B8%80%E9%83%A8%E5%88%86.md)）
- `pending_verification`：Kundalia文中关于Dream API为首个面向公众开放的机器人基础模型API的主张，以及数据管道错误对机器人消融实验影响程度的经验性结论，保留为研究者手记观点，尚未经多方横向评测验证。（关联：[《离开英伟达到Dream Labs当API负责人后，他发现决定机器人能力的诸多因素中，模型只占很小一部分》](../../blogs/%E7%A6%BB%E5%BC%80%E8%8B%B1%E4%BC%9F%E8%BE%BE%E5%88%B0Dream%20Labs%E5%BD%93API%E8%B4%9F%E8%B4%A3%E4%BA%BA%E5%90%8E%EF%BC%8C%E4%BB%96%E5%8F%91%E7%8E%B0%E5%86%B3%E5%AE%9A%E6%9C%BA%E5%99%A8%E4%BA%BA%E8%83%BD%E5%8A%9B%E7%9A%84%E8%AF%B8%E5%A4%9A%E5%9B%A0%E7%B4%A0%E4%B8%AD%EF%BC%8C%E6%A8%A1%E5%9E%8B%E5%8F%AA%E5%8D%A0%E5%BE%88%E5%B0%8F%E4%B8%80%E9%83%A8%E5%88%86.md)）
- `not_disclosed`：Google DeepMind 与 Stanford University 未在 arXiv:2403.01823v2 或项目主页 rt-hierarchy.github.io 开源 RT-H（PaLI-X 55B）模型权重、30K Diverse 扩充示范数据集及 9 维本体动作自动标签脚本。 [线索](https://rt-hierarchy.github.io/)（关联：[《RT-H: Action Hierarchies Using Language》](../../blogs/RT-H_%20Action%20Hierarchies%20Using%20Language.md)）
- `pending_verification`：RT-H 的 Diverse+Kitchen 真机评测仅在单一移动机械臂本体上对 8 项任务各测 10 局（每方法共 80 局），且动作仍为 256 桶离散末端增量、无触力觉闭环或长程记忆状态；其在高频接触装配与跨本体迁移上的上限相比当代 2026 WAM（GR00T 2）与 MEM（π0.7）已显落伍。 [线索](https://arxiv.org/html/2403.01823v2)（关联：[《RT-H: Action Hierarchies Using Language》](../../blogs/RT-H_%20Action%20Hierarchies%20Using%20Language.md)）

- [《离开英伟达到Dream Labs当API负责人后，他发现决定机器人能力的诸多因素中，模型只占很小一部分》](../../blogs/%E7%A6%BB%E5%BC%80%E8%8B%B1%E4%BC%9F%E8%BE%BE%E5%88%B0Dream%20Labs%E5%BD%93API%E8%B4%9F%E8%B4%A3%E4%BA%BA%E5%90%8E%EF%BC%8C%E4%BB%96%E5%8F%91%E7%8E%B0%E5%86%B3%E5%AE%9A%E6%9C%BA%E5%99%A8%E4%BA%BA%E8%83%BD%E5%8A%9B%E7%9A%84%E8%AF%B8%E5%A4%9A%E5%9B%A0%E7%B4%A0%E4%B8%AD%EF%BC%8C%E6%A8%A1%E5%9E%8B%E5%8F%AA%E5%8D%A0%E5%BE%88%E5%B0%8F%E4%B8%80%E9%83%A8%E5%88%86.md)：完成来源分诊并抓取归档NeurIPS 2015经典论文PDF全文（Hidden Technical Debt in Machine Learning Systems）；登记Google Research与Kaushil Kundalia GitHub个人主页；核对模型周边基础设施（数据版本、推理控制异步、动作长度、统一评估台）；Kaushil原始英文手记一手链接与经验结论保留缺口。
- [《RT-H: Action Hierarchies Using Language》](../../blogs/RT-H_%20Action%20Hierarchies%20Using%20Language.md)：已通过 ingest.fetch 抓回 arXiv:2403.01823v2 HTML 全文（100,244 字符）及 PDF 首页（23 页）、官方项目主页 rt-hierarchy.github.io（10,616 字符）完成全量穿透核查：确认作者为 Google DeepMind Robotics（Tianli Ding, Ted Xiao, Pierre Sermanet, Quan Vuong, Jonathan Tompson, Yevgen Chebotar, Debidatta Dwibedi）与 Stanford University（Suneel Belkhale, Dorsa Sadigh）；拆解了双查询语言动作层 π\_h/π\_l、9 维本体自动标注（2,500+ 词表）、异步推理缓存、Diverse+Kitchen 100K 真机量化提升（40% vs RT-2 25%）、30 条语言纠偏跃升至 63%（vs RT-2-IWR 13%）及对比 GR00T 2 / π0.7 MEM / MAWAM 的四大当代局限；未开源 55B 权重与 D+K 数据集保留规范缺口。

## 2. 收录文章与一手材料（Ingested Articles & Primary Sources）

### [离开英伟达到Dream Labs当API负责人后，他发现决定机器人能力的诸多因素中，模型只占很小一部分](../../blogs/%E7%A6%BB%E5%BC%80%E8%8B%B1%E4%BC%9F%E8%BE%BE%E5%88%B0Dream%20Labs%E5%BD%93API%E8%B4%9F%E8%B4%A3%E4%BA%BA%E5%90%8E%EF%BC%8C%E4%BB%96%E5%8F%91%E7%8E%B0%E5%86%B3%E5%AE%9A%E6%9C%BA%E5%99%A8%E4%BA%BA%E8%83%BD%E5%8A%9B%E7%9A%84%E8%AF%B8%E5%A4%9A%E5%9B%A0%E7%B4%A0%E4%B8%AD%EF%BC%8C%E6%A8%A1%E5%9E%8B%E5%8F%AA%E5%8D%A0%E5%BE%88%E5%B0%8F%E4%B8%80%E9%83%A8%E5%88%86.md)

2026-11-05 · 来源：D. Sculley et al. · 状态：有来源缺口

[单篇导读（blogs/）](../../blogs/%E7%A6%BB%E5%BC%80%E8%8B%B1%E4%BC%9F%E8%BE%BE%E5%88%B0Dream%20Labs%E5%BD%93API%E8%B4%9F%E8%B4%A3%E4%BA%BA%E5%90%8E%EF%BC%8C%E4%BB%96%E5%8F%91%E7%8E%B0%E5%86%B3%E5%AE%9A%E6%9C%BA%E5%99%A8%E4%BA%BA%E8%83%BD%E5%8A%9B%E7%9A%84%E8%AF%B8%E5%A4%9A%E5%9B%A0%E7%B4%A0%E4%B8%AD%EF%BC%8C%E6%A8%A1%E5%9E%8B%E5%8F%AA%E5%8D%A0%E5%BE%88%E5%B0%8F%E4%B8%80%E9%83%A8%E5%88%86.md) · [微信原件](../../../../raw/aadcf0a4850a3bfd044d0d45b30a8ff50b72ce5b127bbc44856ec0da654f4701) · 固定版本 `digest-material-aadcf0a4850a3bfd044d0d45b30a8ff50b72ce5b127bbc44856ec0da654f4701@1`

> Kaushil Kundalia 曾是 NVIDIA 机器人基础模型项目 GR00T 的早期成员，如今在Dream Labs 负责机器人基础模型接口 Dream API。在复盘过去两年的研发经历时，他提出一个判断：决定机器人表现的诸多因素中，模型只占很小一部分，周围的数据、控制和评估系统同样左右着实验结果。

> 为什么重要： 即使模型权重完全相同，改变推理与控制的配合方式、每次执行动作的长度，也可能让同一套机器人测试台给出截然不同的分数。对正在搭建实验室的团队来说，控制这些变量，直接关系到能否判断一次改进究竟来自哪里，以及哪些结果值得继续投入。

关联一手材料：

- Hidden Technical Debt in Machine Learning Systems（D. Sculley et al. / Google / NeurIPS）· [原站](https://proceedings.neurips.cc/paper/2015/file/86df7dcfd896fcaf2674f757a2463eba-Paper.pdf) · [NotebookLM](https://notebook.google.com/notebook/33f0076b-fc09-42cc-9cd9-fecfb847ce1c) · [Drive](https://drive.google.com/file/d/1J9FSyaSh0leUyzjsdkGmfHyiOd5X39Hc/view?usp=drivesdk) · 版本 `digest-material-1a67da09a8bd5ba9a3577176e30aa2fbd88534e6baf0bc31522b4999f643d2a1@1`
  > D. Sculley, Gary Holt, Daniel Golovin, Eugene Davydov, Todd Phillips \{dsculley,gholt,dgg,edavydov,toddphillips\}@google.com Google, Inc. — PDF p.1

### [RT-H: Action Hierarchies Using Language](../../blogs/RT-H_%20Action%20Hierarchies%20Using%20Language.md)

2024-03-04 · 来源：Google DeepMind · Stanford University (arXiv:2403.01823v2) · 状态：有来源缺口

[单篇导读（blogs/）](../../blogs/RT-H_%20Action%20Hierarchies%20Using%20Language.md) · [微信原件](../../../../raw/84a5425857072cb7c09545b1a2716d8e3bb67d092b715e8c0132d1e0af551fcc) · 固定版本 `digest-material-84a5425857072cb7c09545b1a2716d8e3bb67d092b715e8c0132d1e0af551fcc@1`

> To bridge tasks and actions, our insight is to teach the robot the language of actions, describing low-level motions with more fine-grained phrases like "move arm forward". Predicting these language motions as an intermediate step between tasks and actions forces the policy to learn the shared structure of low-level motions across seemingly disparate tasks.

> Our method RT-H builds an action hierarchy using language motions: it first learns to predict language motions, and conditioned on this and the high-level task, it predicts actions, using visual context at all stages. We show that RT-H leverages this language-action hierarchy to learn policies that are more robust and flexible by effectively tapping into multi-task datasets.

关联一手材料：

- RT-H: Action Hierarchies Using Language (arXiv:2403.01823v2 Full Paper)（Google DeepMind · Stanford University）· [原站](https://arxiv.org/abs/2403.01823v2) · [本地原件](../../../../raw/9036d9d1ef8a1e9c9ccc692e65da0fec5818c832400e5081b4f61f3ae9da1e5a) · 版本 `digest-material-9036d9d1ef8a1e9c9ccc692e65da0fec5818c832400e5081b4f61f3ae9da1e5a@1`
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
