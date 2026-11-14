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
- `pending_verification`：已取得Unidata原文及七篇被引论文；厂商对照规格、法规适用性与跨设备采集成本未逐项复核。Unidata的500小时×20地经验法则不是对照实测结论。（关联：[《使用Pico 4 Ultra采集Egocentric Data：规格、对比与Workflow》](../../blogs/%E4%BD%BF%E7%94%A8Pico%204%20Ultra%E9%87%87%E9%9B%86Egocentric%20Data%EF%BC%9A%E8%A7%84%E6%A0%BC%E3%80%81%E5%AF%B9%E6%AF%94%E4%B8%8EWorkflow.md)）
- `unavailable`：Danfei Xu发表于X平台的博文长文《To Summon a Sensorimotor Ghost》（2026-02-26）因X平台登录墙限制无法直接通过开放HTTP获取完整正文，访谈正文引述了该博文核心章节，保留该独立博文原文缺口。（关联：[《专访Danfei Xu：人类数据是伪装成另一种形式的机器人数据》](../../blogs/%E4%B8%93%E8%AE%BFDanfei%20Xu%EF%BC%9A%E4%BA%BA%E7%B1%BB%E6%95%B0%E6%8D%AE%E6%98%AF%E4%BC%AA%E8%A3%85%E6%88%90%E5%8F%A6%E4%B8%80%E7%A7%8D%E5%BD%A2%E5%BC%8F%E7%9A%84%E6%9C%BA%E5%99%A8%E4%BA%BA%E6%95%B0%E6%8D%AE.md)）
- `pending_verification`：访谈中讨论的EgoScale在22自由度灵巧手上的对数线性Scaling规律、真实环境单次学习新任务（one-shot adaptation）能力以及从人类感觉运动预测到机器人物理控制的逆动力学迁移效果，保留为学术论文与研究者个人观点，尚未经第三方独立实验室重现。（关联：[《专访Danfei Xu：人类数据是伪装成另一种形式的机器人数据》](../../blogs/%E4%B8%93%E8%AE%BFDanfei%20Xu%EF%BC%9A%E4%BA%BA%E7%B1%BB%E6%95%B0%E6%8D%AE%E6%98%AF%E4%BC%AA%E8%A3%85%E6%88%90%E5%8F%A6%E4%B8%80%E7%A7%8D%E5%BD%A2%E5%BC%8F%E7%9A%84%E6%9C%BA%E5%99%A8%E4%BA%BA%E6%95%B0%E6%8D%AE.md)）

- [《RoboTTT: Context Scaling for Robot Policies — 8,000-Timestep Test-Time Training Without Latency Inflation (CoRL 2026 Best Paper Finalist · arXiv:2607.15275)》](../../blogs/RoboTTT_%20Context%20Scaling%20for%20Robot%20Policies%20%E2%80%94%208%2C000-Timestep%20Test-Time%20Training%20Without%20Latency%20Inflation%20%28CoR.md)：已用 arXiv:2607.15275v1 完整 PDF 替换原占位摘要：完整还原 RoboTTT 在 GR00T-N1.7 上引入 16 层 TTT 快权重至 8K 时间步（79% 总完成分、Gear Bot 唯一成功 2/10、One-Shot 65%），并澄清 8K 相对 1K 的 62%/63% 为相对增长率（71.5% vs 43.9%）。
- [《使用Pico 4 Ultra采集Egocentric Data：规格、对比与Workflow》](../../blogs/%E4%BD%BF%E7%94%A8Pico%204%20Ultra%E9%87%87%E9%9B%86Egocentric%20Data%EF%BC%9A%E8%A7%84%E6%A0%BC%E3%80%81%E5%AF%B9%E6%AF%94%E4%B8%8EWorkflow.md)：本轮完成引用与归属分诊、可访问原件获取及摘录索引；来源未得与事实待核验分别保留，不视为完整行业研究结论。
- [《专访Danfei Xu：人类数据是伪装成另一种形式的机器人数据》](../../blogs/%E4%B8%93%E8%AE%BFDanfei%20Xu%EF%BC%9A%E4%BA%BA%E7%B1%BB%E6%95%B0%E6%8D%AE%E6%98%AF%E4%BC%AA%E8%A3%85%E6%88%90%E5%8F%A6%E4%B8%80%E7%A7%8D%E5%BD%A2%E5%BC%8F%E7%9A%84%E6%9C%BA%E5%99%A8%E4%BA%BA%E6%95%B0%E6%8D%AE.md)：完成来源分诊并关联已归档之EgoScale论文PDF原件（arXiv:2602.16710）；核对佐治亚理工学院Danfei Xu受访观点、第一视角人类数据规模化（2万+小时）、感觉运动灵魂行为克隆（Sensorimotor Ghost）与人机效果驱动重定向；X平台博文原文与第三方实测复现保留缺口。

## 2. 收录文章与一手材料（Ingested Articles & Primary Sources）

### [RoboTTT: Context Scaling for Robot Policies — 8,000-Timestep Test-Time Training Without Latency Inflation (CoRL 2026 Best Paper Finalist · arXiv:2607.15275)](../../blogs/RoboTTT_%20Context%20Scaling%20for%20Robot%20Policies%20%E2%80%94%208%2C000-Timestep%20Test-Time%20Training%20Without%20Latency%20Inflation%20%28CoR.md)

2026-11-12 · 来源：arXiv:2607.15275 · RoboTTT · 状态：有来源缺口

[单篇导读（blogs/）](../../blogs/RoboTTT_%20Context%20Scaling%20for%20Robot%20Policies%20%E2%80%94%208%2C000-Timestep%20Test-Time%20Training%20Without%20Latency%20Inflation%20%28CoR.md) · [微信原件](../../../../raw/2ddf7493c342156f9c48f4f735c8bfc85072b83235b225bb2e2ef2dd6e9c8c31) · 固定版本 `digest-material-2ddf7493c342156f9c48f4f735c8bfc85072b83235b225bb2e2ef2dd6e9c8c31@1`

> 【信源巡检核心摘要】 CoRL 2026（Austin，2,094 投 687 中）最佳论文决选（Best Paper Finalist）。

关联一手材料：

- RoboTTT: Context Scaling for Robot Policies — 8,000-Timestep Test-Time Training Without Latency Inflation (arXiv:2607.15275)（NVIDIA GEAR Lab / Stanford / UT Austin）· [原站](https://arxiv.org/abs/2607.15275) · [本地原件](../../../../raw/6e3cbcbc0ab4db0c20e693c905c9ff4e7f7afe726b15f8fb6dc3a6d7415e4ca0) · 版本 `digest-material-6e3cbcbc0ab4db0c20e693c905c9ff4e7f7afe726b15f8fb6dc3a6d7415e4ca0@1`
  > Figure 1: RoboTTT, a long-context visuomotor policy that integrates Test-Time Training (TTT) into robot foundation models, with context scaled to 8K timesteps. — PDF p.1

### [使用Pico 4 Ultra采集Egocentric Data：规格、对比与Workflow](../../blogs/%E4%BD%BF%E7%94%A8Pico%204%20Ultra%E9%87%87%E9%9B%86Egocentric%20Data%EF%BC%9A%E8%A7%84%E6%A0%BC%E3%80%81%E5%AF%B9%E6%AF%94%E4%B8%8EWorkflow.md)

2026-09-14 · 来源：Unidata · 状态：有来源缺口

[单篇导读（blogs/）](../../blogs/%E4%BD%BF%E7%94%A8Pico%204%20Ultra%E9%87%87%E9%9B%86Egocentric%20Data%EF%BC%9A%E8%A7%84%E6%A0%BC%E3%80%81%E5%AF%B9%E6%AF%94%E4%B8%8EWorkflow.md) · [微信原件](../../../../raw/11321de331892daf77b4a57c3b843e745f411f0f96235835315444d9de21061c) · 固定版本 `digest-material-11321de331892daf77b4a57c3b843e745f411f0f96235835315444d9de21061c@1`

> 你可以在 Pico 4 Ultra上部署自己的录制服务，并直接从头显读取其摄像头、手部追踪和全身姿态数据。并非每款头显都允许你触达这些数据，正是这种访问权限让egocentric 数据采集在此变得切实可行。

> 不过，仅靠头显无法覆盖fine manipulation。这需要腕部摄像头，而随之而来的是需要对齐的第二个时钟，以及每个 episode 都要通过的一次检查。这就是我们运行的两套setup ，在采集项目中，选择其中一套是第一个真正的决策。

关联一手材料：

- EgoScale: Scaling Dexterous Manipulation with Diverse Egocentric Human Data（论文作者）· [原站](https://arxiv.org/abs/2602.16710) · [NotebookLM](https://notebook.google.com/notebook/cac99041-d3b9-449e-a192-12bb4b1ad391) · [Drive](https://drive.google.com/file/d/1CUTnSUejWUAe8aHEIJZunMgoxTmzCkL1/view?usp=drivesdk) · 版本 `digest-material-39c691baf374a154e26ffc0098b97037875909495013d4017d97761716ff2735@1`
  > Human behavior is among the most scalable sources of data for learning physical intelligence, yet how to effectively leverage it for dexterous manipulation remains unclear. — PDF p.1

### [专访Danfei Xu：人类数据是伪装成另一种形式的机器人数据](../../blogs/%E4%B8%93%E8%AE%BFDanfei%20Xu%EF%BC%9A%E4%BA%BA%E7%B1%BB%E6%95%B0%E6%8D%AE%E6%98%AF%E4%BC%AA%E8%A3%85%E6%88%90%E5%8F%A6%E4%B8%80%E7%A7%8D%E5%BD%A2%E5%BC%8F%E7%9A%84%E6%9C%BA%E5%99%A8%E4%BA%BA%E6%95%B0%E6%8D%AE.md)

2026-03-23 · 来源：arXiv:2602.16710 · EgoScale · 状态：有来源缺口

[单篇导读（blogs/）](../../blogs/%E4%B8%93%E8%AE%BFDanfei%20Xu%EF%BC%9A%E4%BA%BA%E7%B1%BB%E6%95%B0%E6%8D%AE%E6%98%AF%E4%BC%AA%E8%A3%85%E6%88%90%E5%8F%A6%E4%B8%80%E7%A7%8D%E5%BD%A2%E5%BC%8F%E7%9A%84%E6%9C%BA%E5%99%A8%E4%BA%BA%E6%95%B0%E6%8D%AE.md) · [微信原件](../../../../raw/6b994c422a6b5ed6332abda16ec1d5b63ec609df2cc1b637063d998161f90937) · 固定版本 `digest-material-6b994c422a6b5ed6332abda16ec1d5b63ec609df2cc1b637063d998161f90937@1`

> 关于Human Data，我们在2025年用了大半年的时间去展现以及科普一些最前沿的学术工作，集锦可以参考总结篇：Human Data—The “Key” to Robot Data。去年的工作汇总更多的是在全身运动控制，在进入2026年，随着EgoScale等工作发布，我们看到了人类数据在机器人操作上的可能性。

> Danfei Xu是Georgia Tech的助理教授，同时也参与NVIDIA Research的部分研究工作。他于 2021 年在斯坦福大学获得计算机科学博士学位，师从李飞飞（Fei-Fei Li）和 Silvio Savarese，本科毕业于哥伦比亚大学工程与应用科学学院。

关联一手材料：

- EgoScale: Scaling Dexterous Manipulation with Diverse Egocentric Human Data（论文作者）· [原站](https://arxiv.org/abs/2602.16710) · [NotebookLM](https://notebook.google.com/notebook/cac99041-d3b9-449e-a192-12bb4b1ad391) · [Drive](https://drive.google.com/file/d/1CUTnSUejWUAe8aHEIJZunMgoxTmzCkL1/view?usp=drivesdk) · 版本 `digest-material-39c691baf374a154e26ffc0098b97037875909495013d4017d97761716ff2735@1`
  > Human behavior is among the most scalable sources of data for learning physical intelligence, yet how to effectively leverage it for dexterous manipulation remains unclear. — PDF p.1
