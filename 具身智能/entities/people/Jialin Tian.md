# Jialin Tian

[返回主体档案库](../README.md) · [返回赛道总览](../../赛道总览.md) · [单篇导读索引](../../blogs/README.md)

- 主体类别：👤 个人与学者 (People)
- 核心定位与说明：上海交通大学 MVIG 实验室研究员，复用已有建档记录。
- 关联账号与官方入口：
  - arXiv（Jialin Tian）：[作者索引](https://arxiv.org/search/?searchtype=author&query=Tian%2C+Jialin) · 登记对象 `digest-publisher-085bd12cee20fc6b85c132f8` — 上海交通大学 MVIG 实验室研究员，复用已有建档记录。

## 1. 核心研究问题与待核查争议（Questions & Open Debates）

### 🔍 待核查缺口与证据边界（Open Gaps）

- `pending_verification`：UniFlowWAM 当前 3D 流中训规模约 1,200 小时（远低于底座 LDA 的 30,000 小时 EI-30k），依赖 Track4World 离线单目伪标签（存在时序方向反转与 SAM 丢失背景噪声），且 ALOHA 真机评测采用每任务独立采集 50 条演示与固定初始条件带测试，多任务统一权重表现及力控紧配合场景尚未验证。 [线索](https://arxiv.org/abs/2610.30991)（关联：[《上海交大、创智学院、穹彻智能联合发布 UniFlowWAM： 当「流」成为模态》](../../blogs/%E4%B8%8A%E6%B5%B7%E4%BA%A4%E5%A4%A7%E3%80%81%E5%88%9B%E6%99%BA%E5%AD%A6%E9%99%A2%E3%80%81%E7%A9%B9%E5%BD%BB%E6%99%BA%E8%83%BD%E8%81%94%E5%90%88%E5%8F%91%E5%B8%83%20UniFlowWAM%EF%BC%9A%20%E5%BD%93%E3%80%8C%E6%B5%81%E3%80%8D%E6%88%90%E4%B8%BA%E6%A8%A1%E6%80%81.md)）
- `unverified_claim`：实体关系入库跳过 (Jialin Tian --produces--\> UniFlowWAM)：谓词 'produces' 不允许 to 实体类型 'company'（仅允许 \['product'\]）（关联：[《上海交大、创智学院、穹彻智能联合发布 UniFlowWAM： 当「流」成为模态》](../../blogs/%E4%B8%8A%E6%B5%B7%E4%BA%A4%E5%A4%A7%E3%80%81%E5%88%9B%E6%99%BA%E5%AD%A6%E9%99%A2%E3%80%81%E7%A9%B9%E5%BD%BB%E6%99%BA%E8%83%BD%E8%81%94%E5%90%88%E5%8F%91%E5%B8%83%20UniFlowWAM%EF%BC%9A%20%E5%BD%93%E3%80%8C%E6%B5%81%E3%80%8D%E6%88%90%E4%B8%BA%E6%A8%A1%E6%80%81.md)）
- `unverified_claim`：实体关系入库跳过 (Noematrix --produces--\> UniFlowWAM)：谓词 'produces' 不允许 to 实体类型 'company'（仅允许 \['product'\]）（关联：[《上海交大、创智学院、穹彻智能联合发布 UniFlowWAM： 当「流」成为模态》](../../blogs/%E4%B8%8A%E6%B5%B7%E4%BA%A4%E5%A4%A7%E3%80%81%E5%88%9B%E6%99%BA%E5%AD%A6%E9%99%A2%E3%80%81%E7%A9%B9%E5%BD%BB%E6%99%BA%E8%83%BD%E8%81%94%E5%90%88%E5%8F%91%E5%B8%83%20UniFlowWAM%EF%BC%9A%20%E5%BD%93%E3%80%8C%E6%B5%81%E3%80%8D%E6%88%90%E4%B8%BA%E6%A8%A1%E6%80%81.md)）

- [《上海交大、创智学院、穹彻智能联合发布 UniFlowWAM： 当「流」成为模态》](../../blogs/%E4%B8%8A%E6%B5%B7%E4%BA%A4%E5%A4%A7%E3%80%81%E5%88%9B%E6%99%BA%E5%AD%A6%E9%99%A2%E3%80%81%E7%A9%B9%E5%BD%BB%E6%99%BA%E8%83%BD%E8%81%94%E5%90%88%E5%8F%91%E5%B8%83%20UniFlowWAM%EF%BC%9A%20%E5%BD%93%E3%80%8C%E6%B5%81%E3%80%8D%E6%88%90%E4%B8%BA%E6%A8%A1%E6%80%81.md)：已复用归档的 arXiv:2610.30991v1 完整 14 页论文 PDF（47,979 字符），逐表核查三专家 MM-DiT、10 目标角色网格（含 4 项基模型任务与 6 项流任务）、约 1,200 小时 / 214,443 回合（RoboCOIN 47,050 + RoboMIND 2.0 140,231 + MolmoAct2-BimanualYAM 27,162）在 48 张 NVIDIA H200 的中训细节，以及 RoboCasa-GR1（56.38% 均值 / 58.9% 峰值 vs LDA 52.11%）、LIBERO（98.1%）、LIBERO-Plus（87.7% 均值 / 相机扰动 96.9% 但机器人初态仅 66.0%）和 AgileX Cobot Magic ALOHA 真机（87.0% 成功率 / 92.3 过程分 vs π0.5 68.5% / DreamZero 30.0% / LDA 15.5%）实测表现。

## 2. 收录文章与一手材料（Ingested Articles & Primary Sources）

### [上海交大、创智学院、穹彻智能联合发布 UniFlowWAM： 当「流」成为模态](../../blogs/%E4%B8%8A%E6%B5%B7%E4%BA%A4%E5%A4%A7%E3%80%81%E5%88%9B%E6%99%BA%E5%AD%A6%E9%99%A2%E3%80%81%E7%A9%B9%E5%BD%BB%E6%99%BA%E8%83%BD%E8%81%94%E5%90%88%E5%8F%91%E5%B8%83%20UniFlowWAM%EF%BC%9A%20%E5%BD%93%E3%80%8C%E6%B5%81%E3%80%8D%E6%88%90%E4%B8%BA%E6%A8%A1%E6%80%81.md)

2026-11-02 · 来源：SJTU MVIG · 上海创智学院 · 穹彻智能 (arXiv:2610.30991) · 状态：有来源缺口

[单篇导读（blogs/）](../../blogs/%E4%B8%8A%E6%B5%B7%E4%BA%A4%E5%A4%A7%E3%80%81%E5%88%9B%E6%99%BA%E5%AD%A6%E9%99%A2%E3%80%81%E7%A9%B9%E5%BD%BB%E6%99%BA%E8%83%BD%E8%81%94%E5%90%88%E5%8F%91%E5%B8%83%20UniFlowWAM%EF%BC%9A%20%E5%BD%93%E3%80%8C%E6%B5%81%E3%80%8D%E6%88%90%E4%B8%BA%E6%A8%A1%E6%80%81.md) · [微信原件](../../../../raw/40c9215721a303a76c1e466ca6b7e6b671413260f1d89fccf180cd56e107a9a2) · 固定版本 `digest-material-40c9215721a303a76c1e466ca6b7e6b671413260f1d89fccf180cd56e107a9a2@1`

> 近半年来，有关 WAM 的研究越发出现一种趋势，即将物理世界的信号提取为抽象模态，成为数据并进入编码器中，用于具身模型的学习。积水成冰，随着越来越多的团队叩问什么样的编码形式最有利于模型的数据吸收效率，模态已不仅仅局限于世界知识、动作信息，或是世界与动作之间的耦合，而逐渐扩展至了时间、因果关系、未来状态等等。可以说，模态本身也在愈发抽象。

> UniFlowWAM 之前，上海交通大学 MVIG 实验室、上海创智学院、穹彻智能发表于ECCV 2026 的 ChronoFlow-Policy 和 LaMP 已经将三维交互流确立为观测理解与动作预测之间的中介信号。UniFlowWAM 便是他们的最新力作。

关联一手材料：

- UniFlowWAM: A Unified World-Action Model with Visual Semantics and 4D Geometry（Jialin Tian et al. / arXiv）· [原站](https://arxiv.org/abs/2610.30991) · [NotebookLM](https://notebook.google.com/notebook/cac99041-d3b9-449e-a192-12bb4b1ad391) · [Drive](https://drive.google.com/file/d/1jkBs9HdS8cdEC85-XIGIvsnxjvbMty61/view?usp=drivesdk) · 版本 `digest-material-85f119875bdc158100156da280ff1b37209aa32c8c008fe170f2413398c0ecaf@1`
  > Robot demonstrations record what the robot saw and what it did. They do not specify how the 3D world changed in between. — PDF p.1
