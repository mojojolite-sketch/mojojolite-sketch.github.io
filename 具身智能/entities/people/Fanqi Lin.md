# Fanqi Lin

[返回主体档案库](../README.md) · [返回赛道总览](../../赛道总览.md) · [单篇导读索引](../../blogs/README.md)

- 主体类别：👤 个人与学者 (People)
- 核心定位与说明：• 论文作者，聚焦机器人模仿学习数据scaling law。 • arXiv仅证明同名署名，不合并社交账号。
- 关联账号与官方入口：
  - arXiv（Fanqi Lin）：[作者索引](https://arxiv.org/search/cs?searchtype=author&query=Lin%2C+F) · 登记对象 `digest-publisher-2de45335092a628994c0f5a6` — • 论文作者，聚焦机器人模仿学习数据scaling law。 • arXiv仅证明同名署名，不合并社交账号。

## 1. 核心研究问题与待核查争议（Questions & Open Debates）

### 🔍 待核查缺口与证据边界（Open Gaps）

- `pending_verification`：Unidata 明确披露其仅规模化运营 Pico 4 Ultra 设备群，对 Meta Quest 3、Apple Vision Pro 与 Project Aria 的对照均基于官方开发文档与 EgoKit 论文而非同场实测；跨设备真实规模化单小时成本及“20 地点各 500 小时优于单一地点 2,000 小时”的经验法则尚缺对照消融实验。（关联：[《使用Pico 4 Ultra采集Egocentric Data：规格、对比与Workflow》](../../blogs/%E4%BD%BF%E7%94%A8Pico%204%20Ultra%E9%87%87%E9%9B%86Egocentric%20Data%EF%BC%9A%E8%A7%84%E6%A0%BC%E3%80%81%E5%AF%B9%E6%AF%94%E4%B8%8EWorkflow.md)）
- `not_disclosed`：Unidata 未公开其 4,050 小时 Egocentric Video Dataset 与 1,000 小时 Robotic Household Activities Dataset 的商业售价、每班次人工审核报废率（pass rate）以及经第三方策略训练验证的下游成功率收益。（关联：[《使用Pico 4 Ultra采集Egocentric Data：规格、对比与Workflow》](../../blogs/%E4%BD%BF%E7%94%A8Pico%204%20Ultra%E9%87%87%E9%9B%86Egocentric%20Data%EF%BC%9A%E8%A7%84%E6%A0%BC%E3%80%81%E5%AF%B9%E6%AF%94%E4%B8%8EWorkflow.md)）
- `unverified_claim`：实体关系入库跳过 (Unidata --produces--\> Egocentric Video Dataset (4,050h))：谓词 'produces' 不允许 to 实体类型 'company'（仅允许 \['product'\]）（关联：[《使用Pico 4 Ultra采集Egocentric Data：规格、对比与Workflow》](../../blogs/%E4%BD%BF%E7%94%A8Pico%204%20Ultra%E9%87%87%E9%9B%86Egocentric%20Data%EF%BC%9A%E8%A7%84%E6%A0%BC%E3%80%81%E5%AF%B9%E6%AF%94%E4%B8%8EWorkflow.md)）
- `unverified_claim`：实体关系入库跳过 (Unidata --uses\_artifact--\> ZED SDK)：谓词 'uses\_artifact' 不允许 to 实体类型 'company'（仅允许 \['product'\]）（关联：[《使用Pico 4 Ultra采集Egocentric Data：规格、对比与Workflow》](../../blogs/%E4%BD%BF%E7%94%A8Pico%204%20Ultra%E9%87%87%E9%9B%86Egocentric%20Data%EF%BC%9A%E8%A7%84%E6%A0%BC%E3%80%81%E5%AF%B9%E6%AF%94%E4%B8%8EWorkflow.md)）

- [《使用Pico 4 Ultra采集Egocentric Data：规格、对比与Workflow》](../../blogs/%E4%BD%BF%E7%94%A8Pico%204%20Ultra%E9%87%87%E9%9B%86Egocentric%20Data%EF%BC%9A%E8%A7%84%E6%A0%BC%E3%80%81%E5%AF%B9%E6%AF%94%E4%B8%8EWorkflow.md)：完成一手信源核验与分诊：复用 Unidata 官方工程博客(2026-08-21)及被引全部 7 篇 arXiv 一手论文(EgoMimic、EgoScale、EgoKit、TWIST2、EgoHumanoid、GMR、Data Scaling Laws)；核对 Pico 4 Ultra 生产参数(2,321h 仅头显 + 1,729h 多相机 = 4,050h)、软件同步阈值(2–3 ms 典型 / 11 ms P95)与 4-平台 SDK 差异，保留 Quest 3 跨设备实测成本与法规适用性待核查缺口。

## 2. 收录文章与一手材料（Ingested Articles & Primary Sources）

### [使用Pico 4 Ultra采集Egocentric Data：规格、对比与Workflow](../../blogs/%E4%BD%BF%E7%94%A8Pico%204%20Ultra%E9%87%87%E9%9B%86Egocentric%20Data%EF%BC%9A%E8%A7%84%E6%A0%BC%E3%80%81%E5%AF%B9%E6%AF%94%E4%B8%8EWorkflow.md)

2026-09-14 · 来源：Unidata · Production Workflow · 状态：有来源缺口

[单篇导读（blogs/）](../../blogs/%E4%BD%BF%E7%94%A8Pico%204%20Ultra%E9%87%87%E9%9B%86Egocentric%20Data%EF%BC%9A%E8%A7%84%E6%A0%BC%E3%80%81%E5%AF%B9%E6%AF%94%E4%B8%8EWorkflow.md) · [微信原件](../../../../raw/11321de331892daf77b4a57c3b843e745f411f0f96235835315444d9de21061c) · 固定版本 `digest-material-11321de331892daf77b4a57c3b843e745f411f0f96235835315444d9de21061c@1`

> 你可以在 Pico 4 Ultra上部署自己的录制服务，并直接从头显读取其摄像头、手部追踪和全身姿态数据。并非每款头显都允许你触达这些数据，正是这种访问权限让egocentric 数据采集在此变得切实可行。

> 不过，仅靠头显无法覆盖fine manipulation。这需要腕部摄像头，而随之而来的是需要对齐的第二个时钟，以及每个 episode 都要通过的一次检查。这就是我们运行的两套setup ，在采集项目中，选择其中一套是第一个真正的决策。

关联一手材料：

- Data Scaling Laws in Imitation Learning for Robotic Manipulation（论文作者）· [原站](https://arxiv.org/abs/2410.18647) · [NotebookLM](https://notebook.google.com/notebook/cac99041-d3b9-449e-a192-12bb4b1ad391) · [Drive](https://drive.google.com/file/d/1GGJSlUeP_nHDFCezx-SWpZ1A8DjBKJCo/view?usp=drivesdk) · 版本 `digest-material-e3ee296bdf1b34dde4816d36207a0b2b496c66ab352299702e9efc8187e7ec07@1`
  > Data scaling has revolutionized fields like natural language processing and com- puter vision, providing models with remarkable generalization capabilities. — PDF p.1
