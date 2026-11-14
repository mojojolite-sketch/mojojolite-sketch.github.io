# Zuxuan Wu

[返回主体档案库](../README.md) · [返回赛道总览](../../赛道总览.md) · [单篇导读索引](../../blogs/README.md)

- 主体类别：👤 个人与学者 (People)
- 核心定位与说明：• 复旦大学计算机科学技术学院教授、博士生导师，马里兰大学博士。 • 长期从事视频理解、多模态生成与具身智能世界模型研究，Ego4WAM 论文通讯作者。
- 关联账号与官方入口：
  - arXiv Author Index（Zuxuan Wu）：[作者索引](https://arxiv.org/search/?searchtype=author&query=Wu%2C+Zuxuan) · 登记对象 `digest-publisher-913103314c0416d45a3785d7`
  - arXiv作者检索（Zuxuan Wu）：[作者索引](https://arxiv.org/search/cs?searchtype=author&query=Wu%2C+Zuxuan) · 登记对象 `digest-publisher-fbb2cf5346a228e471e4be03` — • 复旦大学计算机科学技术学院教授、博士生导师，马里兰大学博士。 • 长期从事视频理解、多模态生成与具身智能世界模型研究，Ego4WAM 论文通讯作者。

## 1. 核心研究问题与待核查争议（Questions & Open Debates）

### 💬 追问与核查：《Ego4WAM：当人类数据迈向百万小时，探索数据时长之外真正值得 scali…》

- 是不是意味着在minimal的真机数据下，砸海量人咧数据，甚至砸海量人类仿真数据，泛化能力依旧可以有足够的提高

关联文章：[《Ego4WAM：当人类数据迈向百万小时，探索数据时长之外真正值得 scaling 的关键维度》](../../blogs/Ego4WAM%EF%BC%9A%E5%BD%93%E4%BA%BA%E7%B1%BB%E6%95%B0%E6%8D%AE%E8%BF%88%E5%90%91%E7%99%BE%E4%B8%87%E5%B0%8F%E6%97%B6%EF%BC%8C%E6%8E%A2%E7%B4%A2%E6%95%B0%E6%8D%AE%E6%97%B6%E9%95%BF%E4%B9%8B%E5%A4%96%E7%9C%9F%E6%AD%A3%E5%80%BC%E5%BE%97%20scaling%20%E7%9A%84%E5%85%B3%E9%94%AE%E7%BB%B4%E5%BA%A6.md)

> 追查结论摘要：来源：arXiv:2609.40341 · Fudan University & Horizon Robotics (Ego4WAM) · Ego4WAM Project Page · HuggingFace: HorizonRobotics/Ego4WAM

- [《Ego4WAM：当人类数据迈向百万小时，探索数据时长之外真正值得 scaling 的关键维度》](../../blogs/Ego4WAM%EF%BC%9A%E5%BD%93%E4%BA%BA%E7%B1%BB%E6%95%B0%E6%8D%AE%E8%BF%88%E5%90%91%E7%99%BE%E4%B8%87%E5%B0%8F%E6%97%B6%EF%BC%8C%E6%8E%A2%E7%B4%A2%E6%95%B0%E6%8D%AE%E6%97%B6%E9%95%BF%E4%B9%8B%E5%A4%96%E7%9C%9F%E6%AD%A3%E5%80%BC%E5%BE%97%20scaling%20%E7%9A%84%E5%85%B3%E9%94%AE%E7%BB%B4%E5%BA%A6.md)：已穿透微信二手编译稿（human five），完整核查并归档复旦大学（吴祖煊、孙志浩）与地平线（苏志忠、王新疆、刘流等）发表的一手论文《Ego4WAM: What Matters When Scaling Egocentric Human Data for Robot Learning?》（arXiv:2609.40341）、项目主页（https://sunzhihao18.github.io/Ego4WAM/）与 HuggingFace 模型库（HorizonRobotics/Ego4WAM），提取完整实验表（Table 1、Table 2、Figure 5 及 Piper 双臂真机 6 项任务数据），并结合本工作台具身智能与 AI 训练数据证据链深度回应用户关于「Minimal 真机数据下砸海量人类数据与海量人类仿真数据的泛化边界」追问。
- [《HoloMotion-1 Technical Report: Humanoid Whole-Body Motion Foundation Model via Hybrid Video & MoCap Corpus (arXiv:2605.15336)》](../../blogs/HoloMotion-1%20Technical%20Report_%20Humanoid%20Whole-Body%20Motion%20Foundation%20Model%20via%20Hybrid%20Video%20%26%20MoCap%20Corpus%20%28ar.md)：Horizon Robotics 发布人形机器人全身运动追踪基础模型 HoloMotion-1 技术报告（https://arxiv.org/abs/2605.15336）并开源训练与仿真套件 https://github.com/HorizonRobotics/HoloMotion 及生成式 3D 物理世界引擎 https://github.com/HorizonRobotics/EmbodiedGen 。采用稀疏混合专家（Sparse MoE Transformer）骨干网络，结合海量野外人类视频三维重建轨迹与…

## 2. 阅读笔记与原文 Highlight（Reading Highlights & Marginalia）

### 🖍️ 摘录与批注：《Ego4WAM：当人类数据迈向百万小时，探索数据时长之外真正值得 scali…》（1 条）

关联文章：[《Ego4WAM：当人类数据迈向百万小时，探索数据时长之外真正值得 scaling 的关键维度》](../../blogs/Ego4WAM%EF%BC%9A%E5%BD%93%E4%BA%BA%E7%B1%BB%E6%95%B0%E6%8D%AE%E8%BF%88%E5%90%91%E7%99%BE%E4%B8%87%E5%B0%8F%E6%97%B6%EF%BC%8C%E6%8E%A2%E7%B4%A2%E6%95%B0%E6%8D%AE%E6%97%B6%E9%95%BF%E4%B9%8B%E5%A4%96%E7%9C%9F%E6%AD%A3%E5%80%BC%E5%BE%97%20scaling%20%E7%9A%84%E5%85%B3%E9%94%AE%E7%BB%B4%E5%BA%A6.md)

> “Ego4WAM 正是沿着这两个问题展开：一方面，将 Egocentric Data 拆解为 Human-Robot Alignment、Data Duration、Task Diversity、以及 Action Supervision 等不同维度；Ego4WAM 通过大规模系统性的实验总结出三个主要结论：任务对齐的人类演示能够改善域外泛化并减少机器人数据需求；数据时长和任务多样性对机器人操作性能有着不同影响；没有动作标签的视频数据也能提供有效的动态先验。Data Duration 与 Task Diversity 是两条不同的 scaling 轴，收益取决于目标能力与任务分布，盲目扩大长尾覆盖甚至可能损害精细操控表现。”


## 3. 收录文章与一手材料（Ingested Articles & Primary Sources）

### [Ego4WAM：当人类数据迈向百万小时，探索数据时长之外真正值得 scaling 的关键维度](../../blogs/Ego4WAM%EF%BC%9A%E5%BD%93%E4%BA%BA%E7%B1%BB%E6%95%B0%E6%8D%AE%E8%BF%88%E5%90%91%E7%99%BE%E4%B8%87%E5%B0%8F%E6%97%B6%EF%BC%8C%E6%8E%A2%E7%B4%A2%E6%95%B0%E6%8D%AE%E6%97%B6%E9%95%BF%E4%B9%8B%E5%A4%96%E7%9C%9F%E6%AD%A3%E5%80%BC%E5%BE%97%20scaling%20%E7%9A%84%E5%85%B3%E9%94%AE%E7%BB%B4%E5%BA%A6.md)

2026-10-09 · 来源：arXiv:2609.40341 · Ego4WAM · 状态：已整理

[单篇导读（blogs/）](../../blogs/Ego4WAM%EF%BC%9A%E5%BD%93%E4%BA%BA%E7%B1%BB%E6%95%B0%E6%8D%AE%E8%BF%88%E5%90%91%E7%99%BE%E4%B8%87%E5%B0%8F%E6%97%B6%EF%BC%8C%E6%8E%A2%E7%B4%A2%E6%95%B0%E6%8D%AE%E6%97%B6%E9%95%BF%E4%B9%8B%E5%A4%96%E7%9C%9F%E6%AD%A3%E5%80%BC%E5%BE%97%20scaling%20%E7%9A%84%E5%85%B3%E9%94%AE%E7%BB%B4%E5%BA%A6.md) · [微信原件](../../../../raw/2168953cce4e8d605612b5cc8690420eea1875f01d677093d1a4d5bcd691f9a5) · 固定版本 `digest-material-2168953cce4e8d605612b5cc8690420eea1875f01d677093d1a4d5bcd691f9a5@1`

> 论文题目： Ego4WAM: What Matters When Scaling Egocentric Human Data for Robot Learning?

> 近年来，利用大规模 Egocentric Human Data 提升机器人基础模型的能力，正逐渐成为具身智能领域的重要研究趋势。 人类每天都在不同的环境中与丰富的物体交互，执行不同的任务，而第一视角操作视频天然记录着手部动作、物体交互和场景变化。从 EgoScale 到 Dyna-2，研究者持续扩大第一视角人类操作数据的规模，希望通过海量人类经验突破真实机器人数据采集效率有限的瓶颈。

关联一手材料：

- Ego4WAM: What Matters When Scaling Egocentric Human Data for Robot Learning? (arXiv:2609.40341 & Project Dossier)（Fudan University (Vision and Learning Lab) & Horizon Robotics / arXiv:2609.40341）· [原站](https://arxiv.org/abs/2609.40341) · [NotebookLM](https://notebook.google.com/notebook/33f0076b-fc09-42cc-9cd9-fecfb847ce1c) · [Drive](https://drive.google.com/drive/folders/1ZIgKmZ2N95-AOAlhhzs2GDQ2iZw3yT4S) · 版本 `digest-material-6d6f90771c734ecd77a621d3449f54f43ec8a75eda40c50bee3f0b58aae20dba@1`
  > PRIMARY SOURCE ARCHIVAL DOSSIER Paper Title: Ego4WAM: What Matters When Scaling Egocentric Human Data for Robot Learning? — 原文提取

### [HoloMotion-1 Technical Report: Humanoid Whole-Body Motion Foundation Model via Hybrid Video & MoCap Corpus (arXiv:2605.15336)](../../blogs/HoloMotion-1%20Technical%20Report_%20Humanoid%20Whole-Body%20Motion%20Foundation%20Model%20via%20Hybrid%20Video%20%26%20MoCap%20Corpus%20%28ar.md)

2026-05-26 · 来源：arXiv:2605.15336 · HoloMotion-1 Technical · 状态：已整理

[单篇导读（blogs/）](../../blogs/HoloMotion-1%20Technical%20Report_%20Humanoid%20Whole-Body%20Motion%20Foundation%20Model%20via%20Hybrid%20Video%20%26%20MoCap%20Corpus%20%28ar.md) · [微信原件](../../../../raw/4ac95b345be2ca6e8b930bb01a855be77c2261baf9d51344f90d54e4cf627baa) · 固定版本 `digest-material-4ac95b345be2ca6e8b930bb01a855be77c2261baf9d51344f90d54e4cf627baa@2`

> 【信源巡检核心摘要】 Horizon Robotics 发布人形机器人全身运动追踪基础模型 HoloMotion-1 技术报告（https://arxiv.org/abs/2605.15336）并开源训练与仿真套件 https://github.com/HorizonRobotics/HoloMotion 及生成式 3D 物理世界引擎 https://github.com/HorizonRobotics/EmbodiedGen 。

关联一手材料：

- HoloMotion-1 Technical Report: Humanoid Whole-Body Motion Foundation Model via Hybrid Video & MoCap Corpus (arXiv:2605.15336)（Horizon Robotics）· [原站](https://arxiv.org/abs/2605.15336) · [本地原件](../../../../raw/4ac95b345be2ca6e8b930bb01a855be77c2261baf9d51344f90d54e4cf627baa) · 版本 `digest-material-4ac95b345be2ca6e8b930bb01a855be77c2261baf9d51344f90d54e4cf627baa@2`
  > 【信源巡检核心摘要】 Horizon Robotics 发布人形机器人全身运动追踪基础模型 HoloMotion-1 技术报告（https://arxiv.org/abs/2605.15336）并开源训练与仿真套件 https://github.com/HorizonRobotics/HoloMotion 及生成式 3D 物理世界引擎 https://github.com/HorizonRobotics/EmbodiedGen 。 — 原文提取
