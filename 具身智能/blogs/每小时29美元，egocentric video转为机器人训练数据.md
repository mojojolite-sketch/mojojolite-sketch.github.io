---
title: "每小时29美元，egocentric video转为机器人训练数据"
type: blog_digest
sector: "具身智能"
source: "Perceptron Inc. · Egocentric 1.0"
published_at: "2026-11-05"
raw_sha256: "05032fcf70d9374308f50313ccb8d2332cfe3d1b1d546a488fb2362c9f278093"
material_version: "digest-material-05032fcf70d9374308f50313ccb8d2332cfe3d1b1d546a488fb2362c9f278093@1"
origin_url: "https://perceptron.inc/blog/introducing-perceptron-egocentric-1-0"
trigger_source: "human five"
trigger_url: ""
user_comments: ""
status: "processed_with_gaps"
primary_topic: "数据采集与数据基建"
topic_confidence: 0.9721
stack_claims: [{"layer_id": "data_acquisition", "pattern_id": "human_egocentric_video", "system": "Perceptron Egocentric 1.0 + Mk1.5", "entity": "Perceptron", "mechanism": "通过7端点异步批处理API将无标定单目第一视角人手与双臂视频切分为亚秒级子任务时间线、单手活动标签，并用Mk1.5重建免标定3D手部网格与焦距估计。", "metric_or_tradeoff": "全套标价29美元/小时（时间线9美元）；HOT3D PA-MPJPE 5.21 mm，但手腕对齐MPJPE 15.62 mm弱于ACE-Ego-Hand，且缺世界系SLAM与触觉。", "source_url": "https://perceptron.inc/blog/introducing-perceptron-egocentric-1-0"}, {"layer_id": "sim_verification", "pattern_id": "real_world_benchmark", "system": "EgoHome / WGO-Bench评测基准", "entity": "Perceptron", "mechanism": "自建137片段EgoHome基准（含24段<0.5 s动作）采用permissible subsegment Jaccard与Gemini 3.5 Flash评判亚秒级事件分割精度。", "metric_or_tradeoff": "EgoHome总分0.787（8 fps 0.798），但自测跑2至3次取均值而竞品仅跑1次，且对机器人夹爪不输出关键点或网格。", "source_url": "https://perceptron.inc/blog/introducing-perceptron-egocentric-1-0"}]
---

<a id="digest-05032fcf70d93743"></a>
# 每小时29美元，egocentric video转为机器人训练数据

2026-11-05 · Perceptron Inc. · Egocentric 1.0 · 有来源缺口

[本地原件归档](../../../raw/05032fcf70d9374308f50313ccb8d2332cfe3d1b1d546a488fb2362c9f278093) · 固定材料版本 `digest-material-05032fcf70d9374308f50313ccb8d2332cfe3d1b1d546a488fb2362c9f278093@1` · [一手原站](https://perceptron.inc/blog/introducing-perceptron-egocentric-1-0)

## 深度拆解与复核

- ==核心结论==：[Perceptron](../entities/companies/Perceptron.md) 于 2026-11-04 正式发布 `Perceptron Egocentric 1.0` 自助式异步批处理 API，将第一视角人手与双臂机器人视频（示例含 Galaxea Open-World 与 Build AI Egocentric-10K）转化为亚秒级子任务时间线、单手独立活动标签及无需相机标定的 3D 手部网格，全套捆绑标价 \$29/小时（基础子任务仅 \$9/小时，约 GPT-6 Astra 同任务 \$76/小时的八分之一）。本工作台核查确认其手部形状指标 PA-MPJPE 在 HOT3D（5.21 mm）与 ARCTIC（6.61 mm）较 ACE-Ego-Hand 降低 12%–25%，但更值得关注的限制在于：在惩罚全局朝向与尺度偏差的手腕对齐姿态指标 wrist-aligned MPJPE 上，Perceptron（15.29–15.65 mm）在 HOT3D 标定/未标定及 ARCTIC 标定三项均落后于 ACE-Ego-Hand（12.89–15.26 mm）——这说明纯软件后处理虽把语义切分与局部手指形态压到极低单价，仍无法替代双目硬同步或显式标定提供的物理空间尺度；随着后端打标价格被迅速拉低，上游高良率传感硬件与稀缺现场数据的议价权反而进一步集中。

#### 一、业务切口与核心机制

1. 产品形态与 7 端点异步批处理接口
   Perceptron 将早先 7 月抢先体验版升级为免商务对接的自助 API（`https://api.perceptron.inc/v1/egocentric/`），提供 7 个标准接口：`POST /v1/egocentric/batches`（单请求最多提交 1,000 个视频 URL 并支持 `Idempotency-Key` 幂等键整批校验）、`GET /v1/egocentric/batches`、`GET /v1/egocentric/batches/{batch_id}`、`GET /v1/egocentric/batches/{batch_id}/jobs`、`GET /v1/egocentric/jobs`、`GET /v1/egocentric/jobs/{job_id}` 以及下载 JSON 结果的 `GET /v1/egocentric/jobs/{job_id}/result`。控制台按视频小时预扣额度，仅在作业成功后正式扣费（不足 1 分钟按 1 分钟计费；官方示例批次含 240 个作业、172.8 计费视频小时）。
2. 三层结构化输出与模块化计价
   - 子任务时间线（Subtask timeline，必选基础项）：\$9/视频小时（默认 4 fps；8 fps 选项因模型算力开销放大 1.7 倍估价约 \$15/视频小时），专门切分抓取、松开或旋转物体等不足 1 秒的短时动作。
   - 2D / 3D 手部追踪（二选一附加项）：2D 手部关键点加收 \$12/视频小时；基于自研模型 Mk1.5 的 3D 手部网格与关节角重建加收 \$14/视频小时，API 自动估计相机焦距与图像中心，无需预先相机标定。
   - 单手/夹爪独立活动时间线（Per-hand activity labels，附加项）：加收 \$6/视频小时，为左手、右手或双臂机器人的左右夹爪分别生成并行时间线及 Action / Object / Contact / Visibility 结构化字段（注意官方播放器显式标注机器人夹爪不输出手部关键点或网格，即 No hand keypoints or mesh for grippers）。全选子任务 + 3D 手部重建 + 单手标签合计 \$9 + \$14 + \$6 = \$29/视频小时。

#### 二、核心数据核查、口径纠偏与工程边界

场景与利益披露：原文出自商业 API 供应商 [Perceptron](../entities/companies/Perceptron.md) 官方发布博客，核心商业目标是向具身模型实验室销售异步标注 API 并吸引企业定制合同；所有指标均为厂商自行测评或引用第三方论文表格（标 `†` 为未经独立复现的外部自报数据），其中 EgoHome 为 Perceptron 为突出亚秒级切分优势而自建的新基准。

| 评测基准与核心指标 | Perceptron (默认 / 8 fps) | GPT-6 Astra | NVIDIA FLORA | ACE-Ego-Hand † | 口径核查与工程含义 |
| :--- | :--- | :--- | :--- | :--- | :--- |
| WGO-Bench (100 视频) Segment F1 ↑ | 0.583 | — | 0.503 ‡ | — | 汇总 F1 仅考时间定位（IoU ≥ 0.75）；FLORA 协议不同不可直比 |
| WGO-Bench Semantic F1 ↑ | 0.474 | 0.394 † | ‡（省略） | — | Midcentury Optimized Argus 达 0.502 †，Perceptron 居第二 |
| EgoHome (137 片段) 总分 ↑ | 0.787 (4fps) / 0.798 (8fps) | 0.797 (4fps) / 0.775 (1fps) | 0.747 | — | 含 24 段 <0.5 s、60 段 0.5–1 s；采用自研 permissible subsegment Jaccard |
| EgoHome <0.5 s / 0.5–1 s 子分 ↑ | 0.559 / 0.615 (4fps) | 0.595 (1fps) / 0.649 (4fps) | 0.579 / 0.615 | — | <0.5 s 极短片段 1 fps Astra 与 FLORA 反超默认 4 fps Perceptron |
| EgoHome 时间线成本 ($/h) ↓ | \$9 (4fps) / ≈ \$15 (8fps) | ≈ \$76 (4fps) / ≈ \$20 (1fps) | \$35.39 (GPU) | — | Gemini 3.8 Flash (≈ \$1.3) 得 0.663；Glimpse (≈ \$2.8) 得 0.689 |
| HOT3D / ARCTIC PA-MPJPE (mm) ↓ | 5.21 / 6.61（标定与未标定同分） | — | — | 6.44–6.77 / 7.47–8.76 | 对齐平移旋转尺度，较 ACE-Ego-Hand 降错 12%–25% |
| HOT3D / ARCTIC 手腕对齐 MPJPE (mm) ↓ | 15.62–15.63 / 15.65–15.29 | — | — | 12.89–13.54 / 15.26–16.62 | 保留朝向与尺度惩罚，Perceptron 4 项中 3 项落后 ACE-Ego-Hand |

1. ✅ 本工作台核查（PA-MPJPE 与手腕对齐 MPJPE 的物理口径剪刀差）：官方正文着重宣传 HOT3D 上 PA-MPJPE 达到 5.21 mm、较最强基线 ACE-Ego-Hand 领先 12%–25%（核验算式：(6.44−5.21)/6.44 = 19.1%、(6.77−5.21)/6.77 = 23.0%、(7.47−6.61)/7.47 = 11.5%、(8.76−6.61)/8.76 = 24.5%，确与 12%–25% 表述相符 ✅）。但本工作台核查 Table 3 发现，一旦切换到不消除全局朝向和尺度的 wrist-aligned MPJPE，Perceptron 在 HOT3D 已标定（15.62 mm vs 12.89 mm）、HOT3D 未标定（15.63 mm vs 13.54 mm）及 ARCTIC 已标定（15.65 mm vs 15.26 mm）三项均弱于 ACE-Ego-Hand，仅在 ARCTIC 未标定（15.29 mm vs 16.62 mm）占优。原因在于 Mk1.5 的核心强项是单帧/序列局部手指关节形态回归（去除尺度与刚体位姿后误差极低），但从单目无标定像素推断相机到指尖绝对物理尺度时，仍存在约 15 mm 级的方向与尺度误差——而且该表尚未纳入跨帧世界坐标系相机轨迹误差（对比 EgoMimic 与 VideoDex 下游重定向所需的绝对空间位移）。
2. ⚠️ 本工作台核查（EgoHome 基准与评估协议边界）：第一，EgoHome 虽由 Gemini 3.5 Flash 统一评判且训练集剔除了 EgoHome 片段，但 Perceptron 自己跑了 2–3 次取均值、竞品仅跑 1 次；第二，Pantheon Argus 在 EgoHome 上仅得 0.315–0.367，官方脚注自承原因是 Argus 输出物体状态标签（如“马克杯已放入上层碗架”）而被倾向动作描述的评判器判为不匹配，该分数不能直接解读为 Argus 的真实分割失效；第三，Table 3 中 ACE-Ego-Hand、WiLoR、HaMeR 与 ViDiHand 均来自外部论文表 1（其 244/302 片段切分名单未公开），属于非同片对齐对比。
3. ⚠️ 本工作台推断（机器人下游信号覆盖缺口）：对机器人操作而言，Perceptron 输出的“子任务动词短语 + 2D/3D MANO 网格 + 单手接触布尔标签”能大幅压缩粗清洗与语义分割成本，但它不输出机器人所需的世界系 6-DoF 头部 SLAM 位姿、不输出双目稠密深度、对机器人夹爪也不输出关键点（仅输出文本动作标签）。在 [NVIDIA](../entities/companies/NVIDIA.md) FLORA（arXiv:2610.31779）已将开源标注算力成本压至 \$35.39/h 并发出模型权重、Perceptron 再用闭源 API 把同级语义分割压到 \$9/h 之后，纯“视频打标签”环节的毛利天花板已被压平；买方真正稀缺的是源头视频本身是否具备物理可还原的毫米级位姿与触觉信号。

#### 三、赛道横向对比与定位

| 方案与主体 | 核心定位 | 关键精度 / 指标 | 单小时成本 / 商业模式 | 物理边界与瓶颈 |
| :--- | :--- | :--- | :--- | :--- |
| Perceptron Egocentric 1.0 | 无标定单目第一视角云端标注 API | EgoHome 0.787；HOT3D PA-MPJPE 5.21 mm；腕对齐 15.63 mm | \$9（时间线）–\$29/h（全套 3D），自助按量计费 | 缺全局世界系 SLAM 轨迹与触觉信号；绝对尺度误差 ~15 mm 级 |
| NVIDIA FLORA / Pantheon Argus | 开源机器人数据引擎套件 / 标注脚手架 | EgoHome 0.747 (FLORA)；WGO Semantic F1 0.502 (Optimized Argus) | 自托管 GPU 算力 \$35.39/h (FLORA) 或调闭源 LLM API | 需工程团队自建调度与部署，且缺少一体化免标定 3D 手部网格 |
| 觅蜂科技 MEgoVista (arXiv:2609.16684) | 标定多目硬件 + 离线 4D 重建管线 | PA-MPJPE-p 4.29 mm；非对齐 CT-p 14.30 mm；头部 ATE 0.65–2.83 mm | 绑定 MEgo View 硬件 + MEgoDeploy GPU 集群（14.05× 加速） | 依赖专用多目鱼眼硬件，非通用手机视频自助 API |
| [Maxinsights](../entities/companies/Maxinsights.md) (MaxSLAM + MaxLoop) | 硬同步双目+IMU 采集端与全球供货网 | 相机 ATE 4.24 mm、完整率 99.90%；MaxLoop 良率 96% | 按模型就绪小时打包交付（前三大客户占 30%） | 重资产硬件部署与跨国合规运营门槛极高 |

### 观点与可反驳条件

- ==观点==：Perceptron Egocentric 1.0 将亚秒级子任务分割与局部 3D 手部形态标注压缩至 \$9–\$29/h 自助 API，加速了第一视角视频后处理工具的平权化与去毛利化；然而因其基于无标定单目视频且腕对齐 MPJPE 停留在 15 mm 以上、亦无世界系头部轨迹与触觉输出，它只能充当既有单目库存视频的“廉价语义与手形编译层”，无法替代前端硬同步多目/触觉数采硬件在精密操作数据供应链中的核心定价权。
- ==推翻条件==：
  1. ① 若 2027 年底前有第三方独立研究使用 Galaxea 或真实桌面装配真机平台完成对照消融，证实仅凭普通手机单目视频叠加 Perceptron \$29/h API 输出即可在 <5 mm 公差装配任务上使下游 VLA/WAM 成功率追平带硬件标定双目+SLAM 数据集（差距 <3 个百分点），则单目无标定 15 mm 尺度偏差构不成实质工程瓶颈的论断将被推翻；
  2. ② 若 Perceptron 在未来 12 个月内通过商业 API 渗透实现年度经常性收入突破 \$50M 且核心大客户并非仅用于存量视频补标、而是长期按年框采购其云端 3D 标签作为主训练管线核心环节，则“纯标注 API 毛利天花板过低”的商业判断将被证伪。

---

## 原文摘录与一手信源存证

> 今天，我们发布 Perceptron Egocentric 1.0 。这是一款自助式 API ，可将人类和机器人的第一视角视频转化为机器人训练所需的结构化数据。它提供具有前沿水平的子任务时间线、每只手的连续活动标签，以及最先进的 3D 手部重建，每小时视频收费 29 美元，不到 GPT- 6 Astra仅生成子任务时间线费用的一半，后者约为 76 美元。
> — 原文摘录，PDF p.1；证据 `digest-material-05032fcf70d9374308f50313ccb8d2332cfe3d1b1d546a488fb2362c9f278093-excerpt-1@1`

> 按手分别提供结构化标注。 很少有 pipeline 能够同时提供每只手的连续活动标签、一致的动作分类体系、精确的 2D 关键点和 3D 手部重建。我们提供上述全部功能，其中包括一个新的 3D 手部重建模型，其手部形状精度在 HOT3D 和 ARCTIC 上达到最先进水平。
> — 原文摘录，PDF p.3；证据 `digest-material-05032fcf70d9374308f50313ccb8d2332cfe3d1b1d546a488fb2362c9f278093-excerpt-2@1`

> 简单、自助式的接入。 开源工具将计算、扩展和部署工作留给你的工程师，而托管服务提供商通常需要定制化合作。通过我们的 API ，你可以提交视频、跟踪作业并下载结构化标注，价格透明，无需人工协助开通。
> — 原文摘录，PDF p.3；证据 `digest-material-05032fcf70d9374308f50313ccb8d2332cfe3d1b1d546a488fb2362c9f278093-excerpt-3@1`

一手材料：

- Introducing Perceptron Egocentric 1.0 · Perceptron AI · [原站](https://perceptron.inc/blog/introducing-perceptron-egocentric-1-0) · [主体档案：Perceptron](../entities/companies/Perceptron.md) / [主体档案：perceptron-ai-inc](../entities/companies/perceptron-ai-inc.md) · [NotebookLM](https://notebook.google.com/notebook/33f0076b-fc09-42cc-9cd9-fecfb847ce1c) · [Drive](https://drive.google.com/file/d/1G5dJo66Oc3eUUX2eTCnu4HZx8eiLPIGp/view?usp=drivesdk)
  材料版本 `digest-material-d30c8a2328407de82a32187a2df30a4343b5e55b8bf34e890407e9ae2c40b63c@1`；获取方式 `http_full_text_snapshot`。
  > Today we're releasing Perceptron Egocentric 1.0, a self-service API that turns first-person human and robot video into structured training data for robotics. — 原文提取
  > Dish washing, bare hands (phone video, no calibration): rinsing a frying pan while the other hand works the faucet with a sponge. — 原文提取

归属与范围：完成一手信源核验与分诊：复用 Perceptron 官方博客《Introducing Perceptron Egocentric 1.0》(2026-11-04) 完整正文，核对 WGO-Bench、EgoHome、HOT3D 与 ARCTIC 各项基准口径、API 7 个端点及按输出拆分的 \$9–\$29/h 定价结构；识别单目无标定方案在手腕对齐绝对姿态 MPJPE 上仍逊于 ACE-Ego-Hand 的几何约束，模型权重与下游真机策略微调增益保留为缺口。

来源缺口：

- `unavailable`：Perceptron 官方未披露 3D 手部重建底座 Mk1.5 的模型权重、训练语料配比以及企业私有化部署授权费率，且 EgoHome 基准代码与完整标注集尚未在博客发布当日公开下载。
- `pending_verification`：Egocentric 1.0 在 EgoHome（自建 137 片段）与 HOT3D/ARCTIC 上的分数均为厂商报告结果（且 ACE-Ego-Hand 片段列表未公开导致测试切片存在差异）；该 API 标注对下游真机模仿学习策略（如 VLA/WAM）实际成功率的增益及严重遮挡工业装配工况鲁棒性待第三方实测复核。

[返回赛道总览](../赛道总览.md#digest-05032fcf70d93743) · [返回导读索引](README.md) · [主体档案库](../entities/README.md)
