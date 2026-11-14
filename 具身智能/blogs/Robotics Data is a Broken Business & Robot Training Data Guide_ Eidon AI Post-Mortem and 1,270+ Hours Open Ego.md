---
title: "Robotics Data is a Broken Business & Robot Training Data Guide: Eidon AI Post-Mortem and 1,270+ Hours Open Egocentric-IMU Corpus"
type: blog_digest
sector: "具身智能"
source: "Sam Padilla (@theSamPadilla) · By Cr"
published_at: "2026-06-15"
raw_sha256: "fa59eab89cce0cbc9626b5b7049efd93ddca9efbc2377c8aa1a760dd1bc86083"
material_version: "digest-material-fa59eab89cce0cbc9626b5b7049efd93ddca9efbc2377c8aa1a760dd1bc86083@1"
origin_url: "https://bycrux.com/insights/robotics-data-is-a-broken-business"
trigger_source: "Sam Padilla (@theSamPadilla) · By Crux"
trigger_url: "https://bycrux.com/insights/robotics-data-is-a-broken-business"
user_comments: ""
status: "processed_with_gaps"
---

<a id="digest-fa59eab89cce0cbc"></a>
# Robotics Data is a Broken Business & Robot Training Data Guide: Eidon AI Post-Mortem and 1,270+ Hours Open Egocentric-IMU Corpus

2026-06-15 · Sam Padilla (@theSamPadilla) · By Cr · 有来源缺口

[本地原件归档](../../../raw/fa59eab89cce0cbc9626b5b7049efd93ddca9efbc2377c8aa1a760dd1bc86083) · 固定材料版本 `digest-material-fa59eab89cce0cbc9626b5b7049efd93ddca9efbc2377c8aa1a760dd1bc86083@1` · [一手原站](https://bycrux.com/insights/robotics-data-is-a-broken-business)

## 深度拆解与复核

- ==核心结论/观点==：前 Google Cloud Web3 创始团队成员 Sam Padilla（@theSamPadilla） 与前 DeepMind 研究员 Peter Toth 联合创立的去中心化具身数采公司 Eidon AI（曾获 Framework Ventures 领投、cyber·Fund 参投 350 万美元种子轮），在运营两年多后正式停摆，并将全量采集的 1,270+ 小时配对家庭第一视角视频与 7 点上肢 IMU 追踪数据集（eidon-ai/tracker-pov 与 eidon-ai/tracker-pov-imu）以 CC-BY-4.0 协议开源至 Hugging Face。Sam Padilla 随后撰写的复盘《Robotics Data is a Broken Business》给出了具身智能数据赛道最稀缺的「一线证伪证据」——纯第三方独立卖具身原始采集数据之所以跑不通商业闭环，源于三重结构性死结：① 大客户池极度狭窄（全球付得起百万美元级数据合同的前沿具身实验室仅约 20 家）；② 非标硬件与规格碎片化吞噬毛利（穿戴式相机+7点 IMU 套件需前置承担硬件制造、跨国物流清关、传感器漂移标定与人工质检成本，且各家实验室对原始传感器流 vs. 机器人关节角重定向格式要求完全割裂，无法像文本 SaaS 一样一份数据卖百家）；③ 内置消亡倒计时（Built-in Expiration Date）——一旦全栈本体与基模巨头（如 Physical Intelligence、Figure、Skild AI、Generalist AI）跑通早期冷启动并铺开商业化真机车队，客户现场部署的机器人将自动回流高价值同分布长尾数据，彻底踢开第三方外包数采商。
- 场景与利益相关标注：本文作者 Sam Padilla 系 Eidon AI 联合创始人兼产品负责人，在其亲自操盘两年并关停公司、开源全部数据资产后撰写复盘，后转型创立应用级 AI 与数据工程公司 By Crux（bycrux.com）；相比仍在融资路演的在业数采创始人（如 PrismaX 等 DePIN 数采项目），其停摆复盘摆脱了募资吹捧激励，属于可信度极高的「负面证伪一手史料」，但仍需区分「低精度众包穿戴数采失效」与「高精力控工业遥操作/仿真评测工具链」的边界差异。

### 一、 工程与商业账本拆解：为什么 Eidon AI 采了 >1,270 小时真机家庭数据仍选择停摆？

1. 硬件与众包采集管线还原（Crowdsourced Capture Pipeline：头戴第一视角 + 7 点上肢 IMU 穿戴套件）
   - Eidon AI（法人 Solidic Labs Inc.，Co-founder & Head of Product 为 Sam Padilla，CEO 为前 DeepMind 研究员 Peter Toth，Seed Backing 获 Framework Ventures 领投、cyber·Fund 参投 \$3.5M）试图用去中心化众包激励网络解决具身智能的物理交互数据匮乏：向全球家庭贡献者寄送自研头戴式第一视角相机、追踪手套与 7 点上肢惯性测量单元（7-Point IMU Harness），采集做饭、清洁、叠衣等非结构化家务操作；
   - ✅ 物理与工程瓶颈复核（Extreme Upfront Physical Friction & Shifting Customer Specs，本工作台核查）：本工作台核查确认，与本工作台追踪的 复旦/地平线 Ego4WAM、通研院/Sharpa UVTA 视触觉外骨骼 及 UMI-Live 相比，众包寄送轻量化 IMU + 头戴相机面临两个致命物理折损：一是缺乏毫米级末端 6-DoF 绝对位姿（SLAM 在家庭纹理缺失墙面易漂移，7 点 IMU 积分存在累积漂移）与指尖接触力反馈，且不同下游实验室要求截然不同的 URDF 关节角重定向格式（Shifting Customer Specs），导致「录制时长（Recorded Hours）$\neq$ 可训练有效时长（Usable Training Hours）」；二是前置硬件制造资本开支（Upfront CapEx）、硬件损坏率、跨国海关延误与逐条人工清洗把本应轻资产的众包网络变成了重运营苦力活。
2. ⚠️ 商业模式对比复核：狭窄买家池（Tiny Enterprise Buyer Pool）与内置消亡期（Temporary Safety Drivers，本工作台推断）
   - 本工作台推断，对比本工作台「AI训练与数据」赛道中的 Scale AI、Mercor 与 Trajectory，纯第三方具身原始数采在供需两端同时遭遇挤压（Tiny Enterprise Buyer Pool 仅约 20 家前沿实验室如 Physical Intelligence、Figure、Skild AI、Generalist AI、Tesla、1X）：

| 维度 | LLM 后训练/专家数据商（Scale / Mercor / Trajectory） | 第三方独立具身数采商（Eidon AI / 众包 DePIN 数采） | 全栈具身基模自建数据管线（Generalist / π / Skild） |
| :--- | :--- | :--- | :--- |
| 有效大买家数量 | 数百家（基座大厂 + 金融/医疗/法律海量垂直企业） | 仅 ~20 家融资过亿的前沿机器人实验室 | 内部自用，无需外部商务定制拉锯 |
| 交付格式标准化 | 极高（纯文本/代码 JSONL、Docker 评测镜像） | 极低（相机内参、IMU 频率、灵巧手自由度各异） | 与自家模型架构（如 GEN-1.5 / $\pi_{0.7}$）原生紧耦合 |
| 边际交付成本 | 纯软件分发，一次构建多客复用 | 重物理摩擦（硬件制造、寄送损耗、标定漂移清洗） | 前期重资产自采，后期靠部署车队（Fleet Flywheel）零边际回流 |
| 终局生命周期 | 随企业持续后训练（Continual Post-Training）长期存在 | 临时拐杖（Safety Drivers），车队起量后即被抛弃 | 数据飞轮随商业工位扩张呈复利正反馈 |

### 观点与可反驳条件

- ==观点==：Sam Padilla 对 Eidon AI 的停摆复盘精准印证了本工作台「概念历程五步」对早期错误路径的否定——脱离特定执行器闭环与下游部署场景、单纯靠众包卖「非标穿戴原始视频/IMU 小时数」的独立具身数据掮客模式在单位经济模型上不成立；具身数据层的真正生存空间仅存在于两处：一是软件化的可观测、回放清洗与仿真评测工具链（如 Foxglove、仿真验证器），二是绑定高复用末端硬件（如标准夹爪/灵巧手 Adaptor）的闭环部署数据回流。
- ==推翻条件==：
  1. 若以 Ego4WAM、HoloMotion-1 或世界动作模型（WAM）为代表的跨形态迁移算法证明：完全无需精确末端力控与同构关节标定，仅凭低成本无标定众包第一视角视频即可在工业精密装配工位直接达到 >95% 零样本成功率，则第三方低成本海量视频数采商的商业价值将被重新激活；
  2. 若全球人形与工业机械臂行业在未来 18 个月内收敛至 1–2 款绝对垄断的硬件构型与统一传感器接口（彻底消除跨客户规格碎片化），使同一套标准化真机数采包可零修改重复售卖给上百家下游集成商，则独立具身数据供应商可实现高毛利软件化复用。

---

## 原文摘录与一手信源存证

> Robotics Data is a Broken Business — Post-Mortem on Eidon AI & Practical Guide to Robot Training Data Author: Sam Padilla (@theSamPadilla), Co-founder of By Crux & Co-founder / Head of Product at Eidon AI (Solidic Labs
> — 原文摘录，文字段落 1；证据 `digest-material-fa59eab89cce0cbc9626b5b7049efd93ddca9efbc2377c8aa1a760dd1bc86083-excerpt-1@1`

> contributors in their homes. After operating for over two years, Eidon AI wound down operations and released over 1,270+ hours of paired egocentric video and 7-point arm-tracking sensor data (\`tracker-pov-imu\` and \`tracker-pov\`)
> — 原文摘录，文字段落 2；证据 `digest-material-fa59eab89cce0cbc9626b5b7049efd93ddca9efbc2377c8aa1a760dd1bc86083-excerpt-2@1`

> CapEx for custom hardware manufacturing, global shipping, customs delays, sensor calibration drift, and manual quality filtering. Every robotics lab demands incompatible formats—ranging from raw camera + IMU streams to specific
> — 原文摘录，文字段落 3；证据 `digest-material-fa59eab89cce0cbc9626b5b7049efd93ddca9efbc2377c8aa1a760dd1bc86083-excerpt-3@1`

一手材料：

- Robotics Data is a Broken Business & Robot Training Data Guide: Eidon AI Post-Mortem and 1,270+ Hours Open Egocentric-IMU Corpus · Sam Padilla (@theSamPadilla) · By Crux & Eidon AI · [原站](https://bycrux.com/insights/robotics-data-is-a-broken-business) · [主体档案：Sam Padilla (@theSamPadilla)](../entities/people/Sam%20Padilla%20%28%40theSamPadilla%29.md) / [主体档案：By Crux](../entities/companies/By%20Crux.md) / [主体档案：Eidon AI](../entities/companies/Eidon%20AI.md) · [本地原件](../../../raw/fa59eab89cce0cbc9626b5b7049efd93ddca9efbc2377c8aa1a760dd1bc86083)
  材料版本 `digest-material-fa59eab89cce0cbc9626b5b7049efd93ddca9efbc2377c8aa1a760dd1bc86083@1`；获取方式 `user_curated_source_seed`。
  > Robotics Data is a Broken Business — Post-Mortem on Eidon AI & Practical Guide to Robot Training Data Author: Sam Padilla (@theSamPadilla), Co-founder of By Crux & Co-founder / Head of Product at Eidon AI (Solidic Labs — 原文提取
  > contributors in their homes. After operating for over two years, Eidon AI wound down operations and released over 1,270+ hours of paired egocentric video and 7-point arm-tracking sensor data (\`tracker-pov-imu\` and \`tracker-pov\`) — 原文提取

归属与范围：用户指定接入信源 Sam Padilla (@theSamPadilla)，归档其 Eidon AI 停摆复盘与 \>1,270 小时 Hugging Face 开源具身数采资产，并完整建立其在具身智能与 AI 训练数据网络中的血缘与对标连接。

来源缺口：

- `not_disclosed`：Eidon AI 在两年运营期内的单小时有效清洗后配对数据（tracker-pov-imu）综合硬件+人工摊销成本（\$/hour）具体明细未在公开复盘中披露精确财务表。

[返回赛道总览](../赛道总览.md#digest-fa59eab89cce0cbc) · [返回导读索引](README.md) · [主体档案库](../entities/README.md)
