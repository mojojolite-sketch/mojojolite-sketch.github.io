# Ruijie Zheng

[返回主体档案库](../README.md) · [返回赛道总览](../../赛道总览.md) · [单篇导读索引](../../blogs/README.md)

- 主体类别：👤 个人与学者 (People)
- 核心定位与说明：• 论文第一作者，聚焦第一视角人类数据与灵巧操作。 • 马里兰大学博士生，与NVIDIA GEAR合作完成。 • 共同提出EgoScale多模态数据规模化架构。
- 关联账号与官方入口：
  - arXiv（Ruijie Zheng）：[作者索引](https://arxiv.org/search/cs?searchtype=author&query=Zheng%2C+R) · 登记对象 `digest-publisher-99dc431c9db69ad1a374119c` — • 论文第一作者，聚焦第一视角人类数据与灵巧操作。 • 马里兰大学博士生，与NVIDIA GEAR合作完成。 • 共同提出EgoScale多模态数据规模化架构。
  - arXiv Author Index（Ruijie Zheng）：[作者索引](https://arxiv.org/search/?searchtype=author&query=Zheng%2C+Ruijie) · 登记对象 `digest-publisher-b378784ca120f1d267b2c7cc`

## 1. 核心研究问题与待核查争议（Questions & Open Debates）

### 🔍 待核查缺口与证据边界（Open Gaps）

- `pending_verification`：在最复杂的 5 分钟十阶段装配 Gear Bot 上完整成功率仍仅 2/10，且 8K（~4–5 分钟）之后若继续扩展至半小时级跨任务长视野，快权重遗忘边界尚待评估 [线索](https://arxiv.org/abs/2607.15275)（关联：[《RoboTTT: Context Scaling for Robot Policies — 8,000-Timestep Test-Time Training Without Latency Inflation (CoRL 2026 Best Paper Finalist · arXiv:2607.15275)》](../../blogs/RoboTTT_%20Context%20Scaling%20for%20Robot%20Policies%20%E2%80%94%208%2C000-Timestep%20Test-Time%20Training%20Without%20Latency%20Inflation%20%28CoR.md)）
- `pending_verification`：Unidata 明确披露其仅规模化运营 Pico 4 Ultra 设备群，对 Meta Quest 3、Apple Vision Pro 与 Project Aria 的对照均基于官方开发文档与 EgoKit 论文而非同场实测；跨设备真实规模化单小时成本及“20 地点各 500 小时优于单一地点 2,000 小时”的经验法则尚缺对照消融实验。（关联：[《使用Pico 4 Ultra采集Egocentric Data：规格、对比与Workflow》](../../blogs/%E4%BD%BF%E7%94%A8Pico%204%20Ultra%E9%87%87%E9%9B%86Egocentric%20Data%EF%BC%9A%E8%A7%84%E6%A0%BC%E3%80%81%E5%AF%B9%E6%AF%94%E4%B8%8EWorkflow.md)）
- `not_disclosed`：Unidata 未公开其 4,050 小时 Egocentric Video Dataset 与 1,000 小时 Robotic Household Activities Dataset 的商业售价、每班次人工审核报废率（pass rate）以及经第三方策略训练验证的下游成功率收益。（关联：[《使用Pico 4 Ultra采集Egocentric Data：规格、对比与Workflow》](../../blogs/%E4%BD%BF%E7%94%A8Pico%204%20Ultra%E9%87%87%E9%9B%86Egocentric%20Data%EF%BC%9A%E8%A7%84%E6%A0%BC%E3%80%81%E5%AF%B9%E6%AF%94%E4%B8%8EWorkflow.md)）
- `unverified_claim`：实体关系入库跳过 (Unidata --produces--\> Egocentric Video Dataset (4,050h))：谓词 'produces' 不允许 to 实体类型 'company'（仅允许 \['product'\]）（关联：[《使用Pico 4 Ultra采集Egocentric Data：规格、对比与Workflow》](../../blogs/%E4%BD%BF%E7%94%A8Pico%204%20Ultra%E9%87%87%E9%9B%86Egocentric%20Data%EF%BC%9A%E8%A7%84%E6%A0%BC%E3%80%81%E5%AF%B9%E6%AF%94%E4%B8%8EWorkflow.md)）
- `unverified_claim`：实体关系入库跳过 (Unidata --uses\_artifact--\> ZED SDK)：谓词 'uses\_artifact' 不允许 to 实体类型 'company'（仅允许 \['product'\]）（关联：[《使用Pico 4 Ultra采集Egocentric Data：规格、对比与Workflow》](../../blogs/%E4%BD%BF%E7%94%A8Pico%204%20Ultra%E9%87%87%E9%9B%86Egocentric%20Data%EF%BC%9A%E8%A7%84%E6%A0%BC%E3%80%81%E5%AF%B9%E6%AF%94%E4%B8%8EWorkflow.md)）
- `unavailable`：Danfei Xu于2026-02-26发表在X平台的长文《To Summon a Sensorimotor Ghost》受平台登录墙限制未形成开放HTTP全文存档，关键框架（Sensorimotor Ghost与makeshift System 2）系经专访引述交叉转述。（关联：[《专访Danfei Xu：人类数据是伪装成另一种形式的机器人数据》](../../blogs/%E4%B8%93%E8%AE%BFDanfei%20Xu%EF%BC%9A%E4%BA%BA%E7%B1%BB%E6%95%B0%E6%8D%AE%E6%98%AF%E4%BC%AA%E8%A3%85%E6%88%90%E5%8F%A6%E4%B8%80%E7%A7%8D%E5%BD%A2%E5%BC%8F%E7%9A%84%E6%9C%BA%E5%99%A8%E4%BA%BA%E6%95%B0%E6%8D%AE.md)）
- `pending_verification`：EgoScale（arXiv:2602.16710v1）所示对数线性Scaling规律依赖Stage II 50h对齐人手+4h真机中训（裸预训练成功率即由56%降至38%）及256 GB200高算力投入，该效应在低预算团队或纯无接触长尾工厂装配场景下的独立复现尚待验证。（关联：[《专访Danfei Xu：人类数据是伪装成另一种形式的机器人数据》](../../blogs/%E4%B8%93%E8%AE%BFDanfei%20Xu%EF%BC%9A%E4%BA%BA%E7%B1%BB%E6%95%B0%E6%8D%AE%E6%98%AF%E4%BC%AA%E8%A3%85%E6%88%90%E5%8F%A6%E4%B8%80%E7%A7%8D%E5%BD%A2%E5%BC%8F%E7%9A%84%E6%9C%BA%E5%99%A8%E4%BA%BA%E6%95%B0%E6%8D%AE.md)）

- [《RoboTTT: Context Scaling for Robot Policies — 8,000-Timestep Test-Time Training Without Latency Inflation (CoRL 2026 Best Paper Finalist · arXiv:2607.15275)》](../../blogs/RoboTTT_%20Context%20Scaling%20for%20Robot%20Policies%20%E2%80%94%208%2C000-Timestep%20Test-Time%20Training%20Without%20Latency%20Inflation%20%28CoR.md)：已用 arXiv:2607.15275v1 完整 PDF 替换原占位摘要：完整还原 RoboTTT 在 GR00T-N1.7 上引入 16 层 TTT 快权重至 8K 时间步（79% 总完成分、Gear Bot 唯一成功 2/10、One-Shot 65%），并澄清 8K 相对 1K 的 62%/63% 为相对增长率（71.5% vs 43.9%）。
- [《使用Pico 4 Ultra采集Egocentric Data：规格、对比与Workflow》](../../blogs/%E4%BD%BF%E7%94%A8Pico%204%20Ultra%E9%87%87%E9%9B%86Egocentric%20Data%EF%BC%9A%E8%A7%84%E6%A0%BC%E3%80%81%E5%AF%B9%E6%AF%94%E4%B8%8EWorkflow.md)：完成一手信源核验与分诊：复用 Unidata 官方工程博客(2026-08-21)及被引全部 7 篇 arXiv 一手论文(EgoMimic、EgoScale、EgoKit、TWIST2、EgoHumanoid、GMR、Data Scaling Laws)；核对 Pico 4 Ultra 生产参数(2,321h 仅头显 + 1,729h 多相机 = 4,050h)、软件同步阈值(2–3 ms 典型 / 11 ms P95)与 4-平台 SDK 差异，保留 Quest 3 跨设备实测成本与法规适用性待核查缺口。
- [《专访Danfei Xu：人类数据是伪装成另一种形式的机器人数据》](../../blogs/%E4%B8%93%E8%AE%BFDanfei%20Xu%EF%BC%9A%E4%BA%BA%E7%B1%BB%E6%95%B0%E6%8D%AE%E6%98%AF%E4%BC%AA%E8%A3%85%E6%88%90%E5%8F%A6%E4%B8%80%E7%A7%8D%E5%BD%A2%E5%BC%8F%E7%9A%84%E6%9C%BA%E5%99%A8%E4%BA%BA%E6%95%B0%E6%8D%AE.md)：完成专访（2026-03-23）与一手论文EgoScale（arXiv:2602.16710v1，官网发布2026-02-19，修正原有通用publisher字段）的全量实证比对：实测20,854h商业第一视角（零售20.1%为主导分布）+50h/4h对齐中训在Sharpa 22-DoF手拉动5项任务均值至56%（vs 2%，One-shot叠衣88%、拧瓶55%）且对数损失R^2=0.9983扎实；同步核对Aria Gen 2（96% SLAM精度）与对50–60家数采初创过剩的判断，保留X长文原生抓取及第三方低算力复现缺口。

## 2. 收录文章与一手材料（Ingested Articles & Primary Sources）

### [RoboTTT: Context Scaling for Robot Policies — 8,000-Timestep Test-Time Training Without Latency Inflation (CoRL 2026 Best Paper Finalist · arXiv:2607.15275)](../../blogs/RoboTTT_%20Context%20Scaling%20for%20Robot%20Policies%20%E2%80%94%208%2C000-Timestep%20Test-Time%20Training%20Without%20Latency%20Inflation%20%28CoR.md)

2026-11-12 · 来源：arXiv:2607.15275 · RoboTTT · 状态：有来源缺口

[单篇导读（blogs/）](../../blogs/RoboTTT_%20Context%20Scaling%20for%20Robot%20Policies%20%E2%80%94%208%2C000-Timestep%20Test-Time%20Training%20Without%20Latency%20Inflation%20%28CoR.md) · [微信原件](../../../../raw/2ddf7493c342156f9c48f4f735c8bfc85072b83235b225bb2e2ef2dd6e9c8c31) · 固定版本 `digest-material-2ddf7493c342156f9c48f4f735c8bfc85072b83235b225bb2e2ef2dd6e9c8c31@1`

> 【信源巡检核心摘要】 CoRL 2026（Austin，2,094 投 687 中）最佳论文决选（Best Paper Finalist）。

关联一手材料：

- RoboTTT: Context Scaling for Robot Policies — 8,000-Timestep Test-Time Training Without Latency Inflation (arXiv:2607.15275)（NVIDIA GEAR Lab / Stanford / UT Austin）· [原站](https://arxiv.org/abs/2607.15275) · [本地原件](../../../../raw/6e3cbcbc0ab4db0c20e693c905c9ff4e7f7afe726b15f8fb6dc3a6d7415e4ca0) · 版本 `digest-material-6e3cbcbc0ab4db0c20e693c905c9ff4e7f7afe726b15f8fb6dc3a6d7415e4ca0@1`
  > Figure 1: RoboTTT, a long-context visuomotor policy that integrates Test-Time Training (TTT) into robot foundation models, with context scaled to 8K timesteps. — PDF p.1

### [使用Pico 4 Ultra采集Egocentric Data：规格、对比与Workflow](../../blogs/%E4%BD%BF%E7%94%A8Pico%204%20Ultra%E9%87%87%E9%9B%86Egocentric%20Data%EF%BC%9A%E8%A7%84%E6%A0%BC%E3%80%81%E5%AF%B9%E6%AF%94%E4%B8%8EWorkflow.md)

2026-09-14 · 来源：Unidata · Production Workflow · 状态：有来源缺口

[单篇导读（blogs/）](../../blogs/%E4%BD%BF%E7%94%A8Pico%204%20Ultra%E9%87%87%E9%9B%86Egocentric%20Data%EF%BC%9A%E8%A7%84%E6%A0%BC%E3%80%81%E5%AF%B9%E6%AF%94%E4%B8%8EWorkflow.md) · [微信原件](../../../../raw/11321de331892daf77b4a57c3b843e745f411f0f96235835315444d9de21061c) · 固定版本 `digest-material-11321de331892daf77b4a57c3b843e745f411f0f96235835315444d9de21061c@1`

> 你可以在 Pico 4 Ultra上部署自己的录制服务，并直接从头显读取其摄像头、手部追踪和全身姿态数据。并非每款头显都允许你触达这些数据，正是这种访问权限让egocentric 数据采集在此变得切实可行。

> 不过，仅靠头显无法覆盖fine manipulation。这需要腕部摄像头，而随之而来的是需要对齐的第二个时钟，以及每个 episode 都要通过的一次检查。这就是我们运行的两套setup ，在采集项目中，选择其中一套是第一个真正的决策。

关联一手材料：

- EgoScale: Scaling Dexterous Manipulation with Diverse Egocentric Human Data（论文作者）· [原站](https://arxiv.org/abs/2602.16710) · [NotebookLM](https://notebook.google.com/notebook/cac99041-d3b9-449e-a192-12bb4b1ad391) · [Drive](https://drive.google.com/file/d/1CUTnSUejWUAe8aHEIJZunMgoxTmzCkL1/view?usp=drivesdk) · 版本 `digest-material-39c691baf374a154e26ffc0098b97037875909495013d4017d97761716ff2735@1`
  > Human behavior is among the most scalable sources of data for learning physical intelligence, yet how to effectively leverage it for dexterous manipulation remains unclear. — PDF p.1

### [专访Danfei Xu：人类数据是伪装成另一种形式的机器人数据](../../blogs/%E4%B8%93%E8%AE%BFDanfei%20Xu%EF%BC%9A%E4%BA%BA%E7%B1%BB%E6%95%B0%E6%8D%AE%E6%98%AF%E4%BC%AA%E8%A3%85%E6%88%90%E5%8F%A6%E4%B8%80%E7%A7%8D%E5%BD%A2%E5%BC%8F%E7%9A%84%E6%9C%BA%E5%99%A8%E4%BA%BA%E6%95%B0%E6%8D%AE.md)

2026-03-23 · 来源：NVIDIA & Georgia Tech · EgoScale (arXiv:2602.16710) · 状态：有来源缺口

[单篇导读（blogs/）](../../blogs/%E4%B8%93%E8%AE%BFDanfei%20Xu%EF%BC%9A%E4%BA%BA%E7%B1%BB%E6%95%B0%E6%8D%AE%E6%98%AF%E4%BC%AA%E8%A3%85%E6%88%90%E5%8F%A6%E4%B8%80%E7%A7%8D%E5%BD%A2%E5%BC%8F%E7%9A%84%E6%9C%BA%E5%99%A8%E4%BA%BA%E6%95%B0%E6%8D%AE.md) · [微信原件](../../../../raw/6b994c422a6b5ed6332abda16ec1d5b63ec609df2cc1b637063d998161f90937) · 固定版本 `digest-material-6b994c422a6b5ed6332abda16ec1d5b63ec609df2cc1b637063d998161f90937@1`

> 关于Human Data，我们在2025年用了大半年的时间去展现以及科普一些最前沿的学术工作，集锦可以参考总结篇：Human Data—The “Key” to Robot Data。去年的工作汇总更多的是在全身运动控制，在进入2026年，随着EgoScale等工作发布，我们看到了人类数据在机器人操作上的可能性。

> Danfei Xu是Georgia Tech的助理教授，同时也参与NVIDIA Research的部分研究工作。他于 2021 年在斯坦福大学获得计算机科学博士学位，师从李飞飞（Fei-Fei Li）和 Silvio Savarese，本科毕业于哥伦比亚大学工程与应用科学学院。

关联一手材料：

- EgoScale: Scaling Dexterous Manipulation with Diverse Egocentric Human Data（论文作者）· [原站](https://arxiv.org/abs/2602.16710) · [NotebookLM](https://notebook.google.com/notebook/cac99041-d3b9-449e-a192-12bb4b1ad391) · [Drive](https://drive.google.com/file/d/1CUTnSUejWUAe8aHEIJZunMgoxTmzCkL1/view?usp=drivesdk) · 版本 `digest-material-39c691baf374a154e26ffc0098b97037875909495013d4017d97761716ff2735@1`
  > Human behavior is among the most scalable sources of data for learning physical intelligence, yet how to effectively leverage it for dexterous manipulation remains unclear. — PDF p.1
