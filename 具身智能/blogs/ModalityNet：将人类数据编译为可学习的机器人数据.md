---
title: "ModalityNet：将人类数据编译为可学习的机器人数据"
type: blog_digest
sector: "具身智能"
source: "Noitom Robotics · ModalityNet & World Compiler"
published_at: "2026-07-20"
raw_sha256: "ab453c5ec40e394f5be028fe1e40e7ddf2103b7f15da8778e9a5186618cfbe40"
material_version: "digest-material-ab453c5ec40e394f5be028fe1e40e7ddf2103b7f15da8778e9a5186618cfbe40@1"
origin_url: "https://modalitynet.com/"
trigger_source: "石麻笔记"
trigger_url: ""
user_comments: ""
status: "processed_with_gaps"
primary_topic: "数据采集与数据基建"
topic_confidence: 0.8993
stack_claims: [{"layer_id": "data_acquisition", "pattern_id": "teleop_umi_handheld", "system": "HiPHI-MOV & HiPHI-OM", "entity": "Noitom Robotics", "mechanism": "在万平米基地用光惯磁混合动捕采集全身与 HOI 交互真值，在 3m 高密度舱采集亚毫米追踪与柔性触觉，并用 1/20 数据先验微调 VLA/WAM 验证可学习性。", "metric_or_tradeoff": "开源 617.5h HiPHI(含 245.7h HOI)，非穿模率 98.1% 优于 HIMO 79.0%；重资产基地 Capex 较高", "source_url": "https://modalitynet.com/"}, {"layer_id": "sim_verification", "pattern_id": "sim2real_domain_rand", "system": "World Compiler", "entity": "Noitom Robotics", "mechanism": "以 HiPHI 全模态真值训练人体先验时空补全编译器，通过刻意掩蔽深度或关节通道模拟便携头显稀疏输入，回溯校验还原误差与异构 Retargeting。", "metric_or_tradeoff": "尚未发布荒野 ITW+ 经编译后跑赢动捕或真机基准的开源定量评测表", "source_url": "https://modalitynet.com/"}]
---

<a id="digest-ab453c5ec40e394f"></a>
# ModalityNet：将人类数据编译为可学习的机器人数据

2026-07-20 · Noitom Robotics · ModalityNet & World Compiler · 有来源缺口

[本地原件归档](../../../raw/ab453c5ec40e394f5be028fe1e40e7ddf2103b7f15da8778e9a5186618cfbe40) · 固定材料版本 `digest-material-ab453c5ec40e394f5be028fe1e40e7ddf2103b7f15da8778e9a5186618cfbe40@1` · [一手原站](https://modalitynet.com/)

## 深度拆解与复核

- ==核心结论==：诺亦腾机器人（[Noitom Robotics](../entities/companies/Noitom%20Robotics.md)）创始人戴若犁围绕 ModalityNet（modalitynet.com）与 World Compiler 的战略构想十分清晰：当纯采集原始人类视频沦为“200 元/小时毛利见底”甚至因质量瑕疵导致下游 Loss 停滞、成功率仅有 40% 的惨烈外包时，数据商必须向“先在百平米及万平米动捕基地验证可学习性（Learnability）、再用人体结构先验将低配便携设备编译成全模态真值”的基础设施跃迁。2026 年 8 月团队官方发布的 Episode 3（arXiv:2608.16222）首次用可下载实体兑现了本场 7 月访谈的开源承诺——于 Hugging Face 开放 617.5 小时（约 200.1M 帧 @ 90 Hz、132 名演员、体积 215 GB）的高精度 HiPHI-MOV 全身与 245.7 小时人机交互（HOI）数据；然而，访谈中披露的“海外千小时至千万小时级需求暴涨”与“百万人小时规模产能规划”，在当前下游大厂普遍缺乏对应体量训练算力（甚至未跑通百万小时单调正收益）的现实面前，带有强烈的商业路线图宣讲成分。

#### 一、业务切口与核心机制

本条材料记录了 2026-07-20 对 [Noitom Robotics](../entities/companies/Noitom%20Robotics.md) 创始人戴若犁（配合官网发布的 Episode 1《ModalityNet: The Art of Modalities》与 Episode 2《World Compiler》及最新补档验证的 Episode 3《HiPHI》）进行的深度行业对话（对应 Human Data / EP10 行业一线脉络），完整拆解了商业数据工厂如何解决具身模型的对齐困局：

1. “1/20 开源验证、19/20 商业变现”的验证前置机制：针对常规数采业务与大模型买家之间长达 4–6 个月的“后验扯皮”（数据交付半年后模型商练不出效果、倒逼重采或拒付尾款），诺亦腾保留了约百人规模、其中包含 20 多名算法模型研究人员的内部预研队，把原始多模态资产切出 1/100 到 1/10 先行微调 VLA、VPP 与 World Action Models（WAM），以可量化“可学习性（Learnability）”而非单纯小时数作为商业验收锚点。在模态权重上，戴若犁给出了明确的工程排位：Vision（视觉）> Tactile（触觉）> Whole-body Pose（全身位姿）> Hand Pose（手部精确位姿，因接触阶段允许依物理顺应微调，反而在柔性触觉面前不需盲目堆砌毫米级绝对精度）。

2. 三层硬件采集轴线（HiPHI-MOV、HiPHI-OM 与 ITW+）：
   - 全身交互动捕矩阵 HiPHI-MOV：部署于深圳龙华约 10,000 平米基地（多套 20 m × 20 m Tracking Space），利用 FrameNet 语义动词原语（如 Cause_motion、Self_motion）+ LLM 生成多样场景脚本，基于光学—惯性—电磁混合（Hybrid Mocap）输出 BVH、21 处末端 6-DoF SMPL-X 人体姿态，以及精细标定的 Object Mesh、Object Trajectory 与多视角 RGB-D。2026 年 8 月正式开源了 HiPHI 首个基准数据集（617.5 小时 / 215 GB，含 308.7 小时原始采集经镜像扩增、371.8 小时纯全身动作与 245.7 小时/占 39.8% 的 40 件实体 0.45–6.25 kg 真实物体 HOI 交互、覆盖 22 个 FrameNet 框架与 214 个 Frame-LU 组合，其中 46.3% 为长尾复杂动作）。
   - 近身精密交互舱 HiPHI-OM：3 m × 3 m 高密度 Omni 舱（受访者透露单舱造价已接近大场馆级），集成了亚毫米级光惯磁追踪、柔性触觉传感（重测量量程与耐用性而非单纯极限分辨率）、第一视角及多视角 RGB-D、空间音频（Audio）与环境温度。
   - 荒野便携设备 ITW / ITW+ 与 Ego Vision Plus：针对大规模 In-The-Wild 外景数采，自研搭载双 210° 鱼眼相机（对齐人类 180°–220° 有效视野）、RGB/RGB-D 及 4 颗全局快门（Global Shutter）黑白 VSLAM/手部追踪传感器的全天续航头显，并与附加轻量手套/动捕节点的 Ego Vision Plus 构成梯度组合。

3. World Compiler（世界编译器）的“可微掩码退化回溯验证”：解决纯轻量化便携设备缺少深度（Depth）、全局姿态与密集触觉的问题——先用全模态满配的 HiPHI 真值空间训练基于 Human Prior 与几何模型（对标 VGGT 等三维前馈重建路线）的时空补全编译器；验证阶段则故意遮蔽 HiPHI 数据集里的深度或关节真值通道，模拟 ITW+ 的稀疏输入来校验编译器还原原始全模态真值的误差边界，并同步完成面向多构型机器人的底层 Retargeting 映射（对比指出此前部分商业方案如 Bones Studio 仅输出单模态身体位姿，用于 NVIDIA GEAR SONIC 这类纯无外置交互的全身追踪）。

#### 二、核心数据核查、口径纠偏与工程边界

场景与利益披露：本材料系数采基础设施服务商创始人面向行业媒体的一线专访及官网技术白皮书发布；其陈述“客户需求从数千小时暴涨至 30 万/50 万/100 万小时”“明年规划建成年产百万小时极低边际成本产线”“手握 8,000+ 小时内部库并计划按 1/20 开源万小时”直接服务于生态吸引与商业订单卡位，必须与第三方实测数据及算力需求账本严格区隔。

| 核查项目 | 7 月访谈核心宣称 | 官网一手发布与 8 月 Episode 3 实证核查 | 本工作台核查判定 |
| --- | --- | --- | --- |
| “几百小时高质量数据将率先开源” | 明确承诺会开源部分 HiPHI 数据验证商业可信度（以开源 1/20 反推商业 19/20） | 2026-08-18 官方 Episode 3（arXiv:2608.16222）正式开源 HiPHI：实测 617.5 小时（200.1M 帧 @ 90 Hz，132 人，215 GB Hugging Face 可查），含 245.7h HOI（占 39.8%） | ✅ 开源落地兑现（且质量指标严谨：网格占用率 1,443/1,620 胜出 BONES-SEED 1,114/1,438，长尾占比 14.1% vs 10.7%，P95 地面穿透 8 mm、悬空率 0.015%、漂移 64 mm/s） |
| HOI 与多库联合对下游策略的实际增益 | 自有数据与物体交互标注优于现有公开库，直接提振机器人操作与全身模型 | Episode 3 实测指标：HOI 物体非穿模率 98.1% & 近地贴合率 95.7%（vs HIMO 79.0%、OMOMO 50.4%）；在 3h–300h 扩增实验中，加入 HiPHI 数据使 Unitree G1 策略在 AMASS、BONES-SEED、Motion-X++ 与 LAFAN1 测试集 MPJPE 均呈下降 | ✅ 物理清洁度数据过硬（但需区分“仿真跟踪 MPJPE 降低”与“复杂真机灵巧操作成功率”） |
| “百万小时商业需求与 8,000h+ 库存实证” | 客户问询已从去年数千小时跳过 30 万/50 万跃向 100 万小时（并称有海外 1,000 万小时问询） | 访谈内部 8,000+ 小时库、HiPHI-OM 几千小时存量及“百万人小时明年量产产能”均未在官网/论文提供第三方审计台账；戴若犁自己亦承认当前市场对 1,000 万小时问询缺乏足够 GPU 消化 | ⚠️ 商业询单与产线交付口径不能混淆（即便是 200 RMB/h 基准测算，10 万小时纯采集已耗资 2,000 万元，百万小时需求受制于下游真实买单预算与算力消纳） |
| World Compiler 对荒野数据的编译精度 | 可靠人体先验与编译器把稀疏头显恢复成可学机器人真值 | 截至 Episode 3（2026-08），公开发布重心仍在光学基地采集的 HiPHI-MOV 基准，尚未发布 ITW+ 荒野数据经 World Compiler 补全后的开源评测集与真机控制消融表（HiPHI-OM 亦未随波释出开源包） | ❌ 缺失“纯便携荒野数据编译后跑赢真机/动捕基准”的公开定量验证证据（待后续论文发布） |

#### 三、赛道横向对比与定位

围绕具身数据商业化路线（“低成本荒野人海流”“工业级 SLAM 遥操/穿戴流”与“全模态动捕基座+编译器流”），Noitom Robotics 在工作台收录企业中构成了一条强调重资产高真值底座向轻量化编译溢出的独特路线：

| 数据商或体系 | 主打采集装备与传感器方案 | 已核实核心数据资产与代表指标 | 商业模型痛点与验证壁垒 |
| --- | --- | --- | --- |
| [ModalityNet：将人类数据编译为可学习的机器人数据](ModalityNet%EF%BC%9A%E5%B0%86%E4%BA%BA%E7%B1%BB%E6%95%B0%E6%8D%AE%E7%BC%96%E8%AF%91%E4%B8%BA%E5%8F%AF%E5%AD%A6%E4%B9%A0%E7%9A%84%E6%9C%BA%E5%99%A8%E4%BA%BA%E6%95%B0%E6%8D%AE.md) ([Noitom Robotics](../entities/companies/Noitom%20Robotics.md)) | 龙华 万平米级 HiPHI-MOV 基地 + 3 m HiPHI-OM 舱 + 210° 双鱼眼 ITW+ | 2026-08 开源 617.5h / 215 GB HiPHI（含 245.7h HOI）；号称万小时闭源池与编译器 | 重资产基地 Capex 沉重，World Compiler 从实验室真值跨向海量荒野设备的实际失真率尚未开源验真 |
| [Maxinsights Egocentric Data](Maxinsights%20Egocentric%20Data%20Now%20Embedded%20in%20the%20Training%20of%20Leading%20Robotic%20Foundation%20Models.md) ([Maxinsights](../entities/companies/Maxinsights.md)) | 头戴消费与工业多目采集 + MaxSLAM 空间重建 | 宣称录制 200 万小时 / 交付 150 万小时（MaxSLAM 4.24 mm 轨迹精度，USD 30M 融资） | 已跑通部分海外头部客户交付复购，但面临大客户自建产线与纯视频边际贬值挤压 |
| [Robotics Data Guide & Eidon AI Post-Mortem](Robotics%20Data%20is%20a%20Broken%20Business%20%26%20Robot%20Training%20Data%20Guide_%20Eidon%20AI%20Post-Mortem%20and%201%2C270%2B%20Hours%20Open%20Ego.md) ([By Crux](../entities/companies/By%20Crux.md) / [Sam Padilla](../entities/people/Sam%20Padilla%20%28%40theSamPadilla%29.md)) | 分级：单目低配 vs 双目空间 vs 高保真触觉手部 | 定价锚定：单目约 USD 5/h（已难变现）→ 高保真触觉 USD 100–120/h | 揭示“普通数采商死于下游拒绝为未验真小时数付费”，迫使中小玩家转型或退出 |
| [使用Pico 4 Ultra采集Egocentric Data](%E4%BD%BF%E7%94%A8Pico%204%20Ultra%E9%87%87%E9%9B%86Egocentric%20Data%EF%BC%9A%E8%A7%84%E6%A0%BC%E3%80%81%E5%AF%B9%E6%AF%94%E4%B8%8EWorkflow.md) / [Danfei Xu EgoScale](%E4%B8%93%E8%AE%BFDanfei%20Xu%EF%BC%9A%E4%BA%BA%E7%B1%BB%E6%95%B0%E6%8D%AE%E6%98%AF%E4%BC%AA%E8%A3%85%E6%88%90%E5%8F%A6%E4%B8%80%E7%A7%8D%E5%BD%A2%E5%BC%8F%E7%9A%84%E6%9C%BA%E5%99%A8%E4%BA%BA%E6%95%B0%E6%8D%AE.md) | 现成 VR 头显（Pico 4 Ultra / Aria Gen 2）+ 软件算子提取 | 极低单端硬件成本快速上量（EgoScale 用 2 万小时验证了预训练价值） | 若无后端如 HiPHI 先验或高精 SLAM 标定，裸数据常卡在 40% 成功率上限难以消纳 |

### 观点与可反驳条件

- ==观点==：诺亦腾切中了 2026 年具身数据赛道的真矛盾——商业买家采购瓶颈已从“采集不到视频”转向“无法低成本验证哪些小时数真正降低 VLA/WAM 损失并安全映射到异构实体”。依靠万平米光学基地筑造 HiPHI 真值壁垒再向便携头显反向编译的逻辑具备自洽性；但 2026–2027 年能否兑现高毛利“数据编译器”溢价，取决于两个核心验证：其一，World Compiler 能否在独立荒野设备上把误差压住并经大模型商实测；其二，客户预算是否真正为“百万小时”买单，而不像 [The State of Robotics Data In 2027](The%20State%20of%20Robotics%20Data%20In%202027.md) 警示的那样陷入高投入低回报的定制外包陷阱。
- ==推翻条件==：
  1. ① 若诺亦腾或其主要客户于未来 12 个月内公开发布基于纯 ITW+（无动捕基地同步追踪）经 World Compiler 补全后的数据集独立评测报告，证实其在灵巧操作与高动态全身任务中的真机成功率与同等体量昂贵 HiPHI-OM/光学真值库差距小于 5%，同时单小时全成本降到纯光学采集的 1/10 以下，则本工作台对“重资产基地高 Capex 拖累及编译器端外失真风险”的保留判断被推翻。
  2. ② 若下游头部大模型厂（如 [Generalist AI](../entities/companies/Generalist%20AI.md)、Physical Intelligence、NVIDIA）在 2027 年前普遍证明通过开源自研头显（如 Aria Gen 2 级别低成本硬件）加纯自监督世界模型即可在百小时内部真机微调下跑通全部长尾需求，完全停止百万小时级高价商业数据外购，则第三方重资产全模态数据平台（包括 HiPHI-MOV/OM 模式）的商业规模叙事被证伪。

---

## 原文摘录与一手信源存证

> 石麻笔记在2024年用了10期和机器人数据相关的论文访谈来科普各类具身数据EP10 Robot Data第一季访谈总结，在2025年又用了10期和人类数据相关的论文访谈来科普机器人训练会用到的人类数据总结篇：Human Data—The “Key” to Robot Data，我一直认为数据是观察具身智能发展的一个哨点，对数据理解的深度，决定了一个具身模型公司的上限。
> — 原文摘录，PDF p.1；证据 `digest-material-ab453c5ec40e394f5be028fe1e40e7ddf2103b7f15da8778e9a5186618cfbe40-excerpt-1@1`

> 但遗憾的是，国内大多数具身模型公司，真正能够对数据有原生思考的并不多。所以，我们非常需要一个比模型公司更懂数据的数据公司，因为它可以极大地提升行业的整体水平。
> — 原文摘录，PDF p.1；证据 `digest-material-ab453c5ec40e394f5be028fe1e40e7ddf2103b7f15da8778e9a5186618cfbe40-excerpt-2@1`

> ModalityNet（https://modalitynet.com）是我认为可以加速整个具身智能行业发展，推动整个行业向前进步的一个数据工作；它是一个致力于构建全球最大的、以人为中心的具身智能全模态数据集。
> — 原文摘录，PDF p.1；证据 `digest-material-ab453c5ec40e394f5be028fe1e40e7ddf2103b7f15da8778e9a5186618cfbe40-excerpt-3@1`

一手材料：

- ModalityNet Motion Dataset Browser · ModalityNet / Noitom Robotics · [原站](https://modalitynet.com/) · [主体档案：Noitom Robotics](../entities/companies/Noitom%20Robotics.md) · [NotebookLM](https://notebook.google.com/notebook/33f0076b-fc09-42cc-9cd9-fecfb847ce1c) · [Drive](https://drive.google.com/file/d/1svYCZ-e2pD4fdJllS3pZtcSDRklLyes2/view?usp=drivesdk)
  材料版本 `digest-material-b466d00f8b24ecc81de2a4d1f3efd5e043df3fb6d80054d9be972d5b19e64994@1`；获取方式 `http_full_text_snapshot`。
  > Best viewed on desktop. Dataset playback and 3D viewers require a screen 1024 px wide or larger. — 原文提取
  > How humans move, captured in high fidelity: the motion prior. — 原文提取
- Episode 1. ModalityNet: The Art of Modalities in Human-Centric Data · Noitom Robotics · [原站](https://noitomrobotics.com/art-of-modalities/) · [主体档案：Noitom Robotics](../entities/companies/Noitom%20Robotics.md) · [NotebookLM](https://notebook.google.com/notebook/33f0076b-fc09-42cc-9cd9-fecfb847ce1c) · [Drive](https://drive.google.com/file/d/12IIQSRwqG-o1tv4SVRkcfu29YsqFkiy9/view?usp=drivesdk)
  材料版本 `digest-material-69ff8ce0b8cd726eff9f1d9af2b627cad87b21dcc170d7950573edafbed93979@2`；获取方式 `http_full_text_snapshot`。
  > Compared to conventional AI systems, embodied intelligence necessitates a considerably richer and more diverse set of data modalities, encompassing vision, language, motion dynamics, tactile feedback, depth perception, mesh-level object tracking, scene reconstruction, audio signals, and beyond. — 原文提取
  > We propose ModalityNet — https://modalitynet.com, in tribute to the seminal contribution of ImageNet to modern computer vision, aspiring to serve as an embodied intelligence counterpart. — 原文提取
- Episode 2. The World Compiler: A Noitom Robotics Blueprint for the Next Infrastructure Layer of Physical AI · Noitom Robotics · [原站](https://noitomrobotics.com/world-compiler/) · [主体档案：Noitom Robotics](../entities/companies/Noitom%20Robotics.md) · [NotebookLM](https://notebook.google.com/notebook/33f0076b-fc09-42cc-9cd9-fecfb847ce1c) · [Drive](https://drive.google.com/file/d/1LiAShoWz0w_TtJs0ii3xslnQFmRbtNUU/view?usp=drivesdk)
  材料版本 `digest-material-5e9aaa9db1e330bf0ee69847c5a6d848a20f3a6dc6a55d79f0698d362ba64a7a@2`；获取方式 `http_full_text_snapshot`。
  > Every wave of AI has been unlocked by a new learnable representation. — 原文提取
  > Physical intelligence has not yet undergone this transformation. — 原文提取
- Episode 3. HiPHI: Designing the Motion Space for Humanoid Intelligence · Noitom Robotics · [原站](https://noitomrobotics.com/episode-3-hiphi-designing-the-motion-space-for-humanoid-intelligence/) · [主体档案：Noitom Robotics](../entities/companies/Noitom%20Robotics.md) · [本地原件](../../../raw/3112b539a3bd11bacb599f552e21ec9d74596c4951e0103734f46bb6e911e7dd)
  材料版本 `digest-material-3112b539a3bd11bacb599f552e21ec9d74596c4951e0103734f46bb6e911e7dd@1`；获取方式 `http_full_text`。
  > Humanoid intelligence requires learning over an enormous space of whole-body motions: walking, running, crawling, kneeling, carrying, pushing, pulling, kicking, and coordinating the whole body under diverse contact conditions. — 原文提取
  > Figure 1. Overview of HiPHI. A large-scale, high-fidelity dataset for humanoid learning. — 原文提取

归属与范围：完成专访（2026-07-20）与Noitom官网ModalityNet Episode 1/2及新增补抓Episode 3（2026-08-18，HiPHI arXiv:2608.16222）的交叉实证核查：证实团队已在Hugging Face兑现617.5小时/215 GB HiPHI开源（含245.7h 39.8% HOI、98.1%非穿模与95.7%贴合度领先HIMO 79.0%/OMOMO 50.4%），强有力背书其光学基地物理清洁度；同时对百万小时商业询问、ITW+荒野设备编译精度与HiPHI-OM实际开源留白设置严格核查缺口。

来源缺口：

- `not_disclosed`：World Compiler目前虽在Episode 2给出遮蔽真值校验思路，但尚无公开发表的开源代码、荒野ITW+编译后真实机器手/全身任务对比动捕真值的端到端定量误差报告（HiPHI-OM近身触觉库亦未同步开源）。
- `pending_verification`：访谈披露的8,000+小时内部存量、30万至100万小时（乃至海外1,000万小时）客户问询量、200 RMB/h行业外包成本线与百万小时明年产能计划均属于创始人商业口述，未见第三方审计采购合同及交付履约记录。

[返回赛道总览](../赛道总览.md#digest-ab453c5ec40e394f) · [返回导读索引](README.md) · [主体档案库](../entities/README.md)
