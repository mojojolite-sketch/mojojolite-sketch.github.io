---
title: "对谈｜Dyna 联合创始人 York：为什么一定要面向部署做预训练"
type: blog_digest
sector: "具身智能"
source: "Dyna Robotics Official Site / 具身纪元"
published_at: "2026-11-03"
raw_sha256: "0f7975c3b85d6fd9c7706d8543c4184675facc16d4f721893f4ae2764d4789c3"
material_version: "digest-material-0f7975c3b85d6fd9c7706d8543c4184675facc16d4f721893f4ae2764d4789c3@1"
origin_url: "https://www.dyna.co/dyna-2.1"
trigger_source: "具身纪元"
trigger_url: ""
user_comments: ""
status: "processed_with_gaps"
primary_topic: "工业落地与商业模式"
secondary_topics: ["模型与策略架构"]
topic_confidence: 0.5679
stack_claims: [{"layer_id": "policy_architecture", "pattern_id": "hierarchical_fast_slow", "system": "Dyna System 0 / 1 / 2 + HAL", "entity": "Dyna Robotics", "mechanism": "System 0 在执行器 MCU 运行 500-1000 Hz 底层伺服，System 1 在本地端侧 GPU 服务器 100-200 ms 推理并通过 HAL 屏蔽底层 SDK，System 2 负责上层慢速规划与长程记忆。", "metric_or_tradeoff": "采样耗时从 10,203 ms 压至 110 ms，规避 Wi-Fi 7 与 Starlink 掉线，但机械臂存在 15-30 秒零点漂移退化", "source_url": "https://www.dyna.co/dyna-2.1"}, {"layer_id": "data_acquisition", "pattern_id": "human_egocentric_video", "system": "Dyna-2 百万小时 Ego 预训练与现场回收", "entity": "Dyna Robotics", "mechanism": "基于 100 万小时无本体人类第一视角视频预训练世界动作模型，并结合客户真机现场每天 1 TB+ 全量 Episode 分级质检数据改写预训练配比。", "metric_or_tradeoff": "1K 至 1M 小时预训练使 14 项未知真机任务成功率由 20% 爬坡至 53%，冷启动验收达 87% vs 46%", "source_url": "https://www.dyna.co/dyna-2.1"}, {"layer_id": "training_infra_deploy", "pattern_id": "raas_industrial_cell", "system": "Dyna-2 本地化工作站产线交付", "entity": "Dyna Robotics", "mechanism": "在客户现场机柜旁部署 On-premise 桌面级 GPU 服务器，配合全量录像磨损定位与高频重标定，推进餐饮与物流标准化工作站驻场交付。", "metric_or_tradeoff": "鼎泰丰折叠吞吐从 35 升至 95 条/小时，良品率 75% 升至 93%，最快 3 天上线，但依赖 30-50 人现场运维团队", "source_url": "https://www.dyna.co/dyna-2.1"}]
---

<a id="digest-0f7975c3b85d6fd9"></a>
# 对谈｜Dyna 联合创始人 York：为什么一定要面向部署做预训练

2026-11-03 · Dyna Robotics Official Site / 具身纪元 · 有来源缺口

[本地原件归档](../../../raw/0f7975c3b85d6fd9c7706d8543c4184675facc16d4f721893f4ae2764d4789c3) · 固定材料版本 `digest-material-0f7975c3b85d6fd9c7706d8543c4184675facc16d4f721893f4ae2764d4789c3@1` · [一手原站](https://www.dyna.co/dyna-2.1)

## 深度拆解与复核

- ==核心结论==：对谈 [Dyna Robotics](../entities/companies/Dyna%20Robotics.md) 联合创始人 York Yang 揭示了该公司 2025–2026 年的组织转折点——==放弃研究与部署团队拆分的实验室模式，改为由 York 与 Jason Ma 直接统管预训练到现场交付的紧密耦合研发架构==（同时联合创始人 Lindon Gao 主导商业拓展）；结合 Dyna 官方 Dyna-2、Dyna-2.1 与客户规模化扩张实录交叉核验，其 2026 年折叠商用指标已从 Dyna-1 的 35 条/小时（75% 良品、18 小时 480 条）跨越至 Dyna-2 的 95 条/小时（2.7 倍吞吐、93% 良品、18 小时 1,590 条），核心驱动力在于现场高频重标定、On-premise 本地推理集群（解决 Wi-Fi 7 与 Starlink 掉线）以及 100 万小时第一视角人类预训练，但硬件寿命漂移、Arm 更换频率及外围现场团队成本仍构成重运营天花板.

#### 一、口径与利益披露及「面向部署预训练」的三层系统结构

- 口径与利益披露：本条目为媒体人 Marilyn Liu（具身纪元）在 2026-11-03 发布的对谈整理 PDF，一手访谈原始微信链接与音频未公开；文中绝大部分组织教训、硬件故障与网络折腾细节为 York Yang 的口述经验总结. 对照本工作台已收录的同主题技术精读 [Dyna-2.1: A Physical Agent for End-to-End Workflows](./Dyna-2.1_%20A%20Physical%20Agent%20for%20End-to-End%20Workflows.md)，该篇侧重拆解半人形本体 Taku、Unified Robot Representation (URR)、100 Hz 过阻尼强化学习与 VLM 记忆调度；==本文聚焦独有的创始人一线部署反思与算力/硬件/人力账本==.
- 两段组织踩坑驱动的研发重整：
  - 前创业 Caper AI 过度耦合教训与 2025 年矫枉过正：York 指出上一家零售科技公司 Caper AI 早期曾因工程与算法过度绑死拖累迭代，导致 Dyna Robotics 初创时矫枉过正，在 2025 年把 Pre-training 研究小组与 Post-training/现场交付团队切开——结果研究组指标（Loss）下降与客户产线良率完全脱钩；2025 年下半年起被迫重构组织，要求核心模型团队与真实交付指标共担责任，并用现场海量真实失败 Episode 直接改写 Pre-training 数据配比与接口抽象.
- 规避云端脆弱性的「System 0 / 1 / 2 + HAL」真机运行时栈：
  - System 0（500–1000 Hz）：运行于执行器末端主控芯片（MCU）上的高实时底层伺服控制与局部状态回路，保证关节力矩与高频动作跟随.
  - System 1（100–200 ms）：部署于客户现场桌面级 GPU 服务器（On-premise 局域网直连），规避公网抖动. 采访披露商用餐饮/仓库现场接入 AT&T 专线光纤往往耗时 6 个月，而 Wi-Fi 7 与 Starlink 均无法避免周期性丢包掉线，且 AGV 小车与多相机并发进一步挤压局域网带宽，迫使主模型推理退回本地端侧服务器并通过 HAL（Hardware Abstraction Layer）彻底屏蔽底层芯片通信与不同供应商 SDK 差异，形成统一 API 给模型调用.
  - System 2：上层慢速规划与跨工序状态推理（语言指令跟随与长程记忆调度），解决多槽位投递（例如精确按顺序放进 10 个储物格而非随机堆叠）.

#### 二、核心数据核查、口径纠偏与工程边界

- ✅ 鼎泰丰产线「Dyna-1 → Dyna-2 跨越 1,500 条 ROI 门槛」多篇一手文献互证（本工作台核查）：对比采访口述与 Dyna 官网 2026 年 8 月《Scaling Customer Deployments》一文，双方数字高度咬合——2025 年 6 月部署的 Dyna-1 折叠吞吐仅 35 条/小时、良品率 75%，18 小时班次有效产出约 480 条（远低于单店每班 1,500 条的盈亏线）；2026 年 8 月升级至 Dyna-2 后吞吐跃升至 95 条/小时（2.7 倍提升）、良品率 93%（且增加了工序），18 小时班次交付达 1,590 条，且单站点前置调试从数周/数月压缩至最快 3 天上线、单个现场安装不到 1 天完成.
- ✅ 100 万小时人类 Ego 预训练实证规模法则与推理提速核查（本工作台核查）：本工作台抓取 Dyna-2 官方技术报告（58,164 字符）验证，在仅匹配少量真机后训练样本下，将无本体人类第一视角（UMI/Ego）预训练数据从 1K 小时扩展至 1M 小时，14 项未知真机任务的基准成功率呈单调爬坡（20% → 28% → 45% → 53%）；同时在真实客户现场冷启动验收中达到 87% vs 46% 的显著优势（对比无 Ego 预训练基线）；推理管线采样耗时亦通过少步蒸馏从 10,203 ms 压缩至 110 ms，使其足以进入 System 1（100–200 ms）真实生产节拍.
- ⚠️ 硬件磨损与「零点漂移 15–30 秒」揭穿纯算法叙事（本工作台复核）：York 坦承目前商用中最大的隐性杀手在于机电一致性退化（即便模型权重、工位与物料完全不变）——因机械零点偏移、传动背隙与夹爪衬套磨损，机器人在生产周期内可能无端多耗 15 至 30 秒，甚至直接影响 SOP 质检达标率（Dyna 通过持续全量录像触发楼梯状退化自动标注定位夹爪磨损）；更严峻的是国产轻量臂成本 1.5 万至 3 万人民币但质保往往仅 15 天至 1 个月，同一批臂有的可撑 8 个月、有的不到 1 个月即损毁——然而这部分硬件 BOM 折旧摊销、备件替换人工以及 30–50 人规模的现场 Data/Ops 运营团队开支，采访中均未公布精确单小时财务分摊，故不能由「模型过 ROI 门槛」自动推导出全公司毛利已转正.
- ⚠️ 对「模型 API 派」与行业泡沫的双重批判实证（本工作台核查）：针对只卖推理 API 或轻量微调服务的竞争对手（如采访提及的 Ultra 等集成商及 π0.7 纯云端路线），York 认为离开现场 100% 全生命周期质检与每天 fleet 产生的 1 TB+ 真机流数据（Dyna 对客户现场实现每条 Episode 自动定级，配合 80% / 90% / 70% 分层质量门槛），第三方 API 无法跨过 80% 到 99.99% 的长尾运维深渊. 同时本工作台抓取 York 2026 年 5 月署名博文《What 10 Months in Production Taught Us About the Robotics “Bubble”》互证：文中直言 2022–2025 年全球机器人融资额自 USD 2.86B 增至 USD 8.76B（235 笔），但新锐美国创业公司真实工业营收合计仅约 USD 2M，Tesla 在 2026 年 1 月财报承认工厂内有实际产出的 Optimus 为零，Unitree 2026 年 3 月招股书则披露 2025 年前 9 个月人形收入中 73.6% 来自科研教育、仅约 9% 为工业场景（且多为展厅导览）.

#### 三、赛道横向对比与定位

| 对比维度 | [Dyna Robotics](../entities/companies/Dyna%20Robotics.md) | [Physical Intelligence](../entities/companies/Physical%20Intelligence.md) | [Generalist AI](../entities/companies/Generalist%20AI.md) | [Noematrix](../entities/companies/Noematrix%20%28%E7%A9%B9%E5%BD%BB%E6%99%BA%E8%83%BD%29.md) |
| :--- | :--- | :--- | :--- | :--- |
| 核心数据来源 | 100 万小时 Ego 预训练 + 客户真机每天 1 TB+ 全量回收 + 30–50 人现场运营队 | Pi API Beta + MEM 多尺度记忆（长程 10+ min）真机多构型数据 | 自建 100 万+ 小时通用高频操作数据工厂（GEN-1） | 10 万+ 小时无本体（RoboPocket 47–50 城）+ CoMiner 双模采数 |
| 部署架构边界 | System 0 (MCU 1 kHz) + 本地桌服 System 1 (100 ms) + HAL 隔绝 OEM 差 | 云/端混合模型 API 授权与标准化硬件微调接口 | 大一统操作大模型探索，尚少公开大规模 24/7 单客户长期驻场账单 | 依托非夕力控生态与药房（2.5 平米/3,000+ SKU）/酒店试点切入 |
| 已验证量产指标 | 鼎泰丰 95 条/h，93% 良品，1,590 条/18h，最快 3 天开站，计划 2027 H1 数百台 | [π0.7 实测长程任务](./Physical%20Intelligence%20Releases%20Pi%20API%20Beta%20%26%20π0.7%20with%20Multi-Scale%20Embodied%20Memory%20%28MEM%29%20for%2010%2B%20Min%20Long-Hori.md) 与跨任务能力提升 | [百万小时尺度数据 Scaling 验证](./Generalist：百万小时数据的infra.md) | Noe-0 仅披露数据量损失下降 10%/20%/100%，缺真机成功率 |
| 最大瓶颈约束 | 机械臂短质保损耗与零点漂移、非标餐饮/酒店重运营人力扩展弹性 | 缺少客户生产内网连续 Episode 质检与机电失效代维支撑 | 商业单点高频 ROI 闭路验收证据尚稀疏 | 「力中心」路线与无本体视觉预训练之间的传感器模态张力 |

Dyna 在当前硅谷具身阵营中最显著的差异化在于「反软件中心主义的部署工程深度」：当多数实验室仍在追求开放集零样本惊艳 demo 时，Dyna 通过在客户机柜旁架设本地显卡服务器、重写 HAL 隔离硬件故障、以及每天用全自动视频流追踪机械夹爪磨损漂移，验证了 70%–90% 实验室模型迈向 99.99% 商业可用性的真正摩擦所在；代价是每扩展一个新行业（如酒店、数据中心或物流）均需重新沉淀 SOP 质检树与硬件易损件供应链.

### 观点与可反驳条件

- ==观点==：==Dyna 的案例证明在当前机械臂精度漂移、网络不稳定且缺少高可靠通用本体的产业阶段，基础模型公司必须把「System 0/1 本地部署基础设施与连续真实 Episode 质检」纳入研究内部权重，才能将 80% 级别的演示策略推进至商业级盈利窗口==；同时 York 对 15–30 秒漂移、1 个月硬件质保及行业低真实工业营收的坦承也提示，高投入研发的「Deployment Research」在跨出标准化叠布巾场景后仍面临陡峭的人力与机电运维成本边界.
- ==推翻条件==：
  1. ① 若截至 2027 年上半年，Dyna 在官网宣布部署的「数百台商业车队」中超过 70% 仍局限于鼎泰丰单一叠布巾工况，且酒店、物流及数据中心新签场景在部署后 6 个月内仍需维持高于 1:5 的现场运维工程师配比，说明其「通用物理代理 + 可复用部署栈」向跨行业高频任务的迁移效率显著低于预期.
  2. ② 若下游头部客户或集成商基于外部 API（例如 Physical Intelligence Pi API 等）结合标准化三方高可靠协作臂（MTBF > 10,000 小时），在无需自建预训练和 30 人运维团队的情况下跑通同等单店 93% 良品率并实现低于 3 天的复制周期，则「必须深度自研重运营全栈才能跨过部署门槛」的论点被证伪.
  3. ③ 若 Dyna 后续公开财报或融资路演披露在当前 95 条/小时的产线节拍下，计入机械臂高损耗更换（1–8 个月寿命）与现场 Data/Ops 摊销后单工作站毛利长期为负，则「跨越商业 ROI 门槛」仅在忽略维护成本的窄口径下成立.

---

## 原文摘录与一手信源存证

> 今天的部署文章的很多aha moments 都来自和York的对话。其中他关于组织，关于面向场景部署做预训练优化的观点，让我眼前一亮。更让我意识到一些我习以为常的，沿途下蛋，数据飞轮的叙事其实都需要比较强的技术决断和组织牵引。
> — 原文摘录，PDF p.1；证据 `digest-material-0f7975c3b85d6fd9c7706d8543c4184675facc16d4f721893f4ae2764d4789c3-excerpt-1@1`

> 客户愿意为节省人工付费，前提是机器人能达到实际的速度和质量要求。反复重做后最终成功，并不足以衡量部署效果；模型能力、错误恢复、硬件可靠性和部署工具共同决定交付表现。
> — 原文摘录，PDF p.2；证据 `digest-material-0f7975c3b85d6fd9c7706d8543c4184675facc16d4f721893f4ae2764d4789c3-excerpt-2@1`

> 让人惊讶的是，后训练反哺预训练不是自然而然的，而是需要从组织和上层进行牵引。现场问题需要进入研发，由技术负责人判断哪些应转化为通用能力。
> — 原文摘录，PDF p.2；证据 `digest-material-0f7975c3b85d6fd9c7706d8543c4184675facc16d4f721893f4ae2764d4789c3-excerpt-3@1`

一手材料：

- Dyna-2.1: A Physical Agent for End-to-End Workflows · Dyna Robotics · [原站](https://www.dyna.co/dyna-2.1) · [主体档案：Dyna Robotics](../entities/companies/Dyna%20Robotics.md) · [NotebookLM](https://notebook.google.com/notebook/33f0076b-fc09-42cc-9cd9-fecfb847ce1c) · [Drive](https://drive.google.com/file/d/1yrr4uJbzQbGajwvrLqGgXBpTeQKkHG2-/view?usp=drivesdk)
  材料版本 `digest-material-8402d993a095afe73cc79f2fd0bf2a3938dc04b4f8ae8adac7e8129b36bbebf5@3`；获取方式 `http_full_text_snapshot`。
  > To be useful, a general-purpose robot needs to take over entire workflows without frequent human intervention. — 原文提取
  > Dyna-2.1: The first physical agent to automate an end-to-end workflow—one hour, uncut. — 原文提取
- Dyna-2: A 1-Million-Hour Scaling Law for World-Action Models · Dyna Robotics · [原站](https://www.dyna.co/dyna-2) · [主体档案：Dyna Robotics](../entities/companies/Dyna%20Robotics.md) · [本地原件](../../../raw/a54c274751585a392006b9d621e87860c3fd4b582891e21a07a1ebfb843021b3)
  材料版本 `digest-material-a54c274751585a392006b9d621e87860c3fd4b582891e21a07a1ebfb843021b3@1`；获取方式 `http_full_text`。
  > A world-action model pre-trained on more than one million hours of egocentric human video. It exhibits a scaling law on held-out human data and, for the first time, a human-to-robot transfer scaling law. — 原文提取
  > Figure 1. Dyna-2 is a world-action model (WAM) pre-trained on over one million hours of human video data. — 原文提取
- Scaling Customer Deployments: Not Just a Model, But a Product · Dyna Robotics · [原站](https://www.dyna.co/research/scaling-customer-deployments) · [主体档案：Dyna Robotics](../entities/companies/Dyna%20Robotics.md) · [本地原件](../../../raw/8e1a2af10e3e8f18f0a1ec55771af296f4cbf7bf0c4f3225697be6fc7f0b1a0c)
  材料版本 `digest-material-8e1a2af10e3e8f18f0a1ec55771af296f4cbf7bf0c4f3225697be6fc7f0b1a0c@1`；获取方式 `http_full_text`。
  > is rolling out Dyna's robots across its restaurant network. — 原文提取
  > This commercial scale, together with our rollouts across hotels, logistics companies, and data centers (more on those soon), will bring our deployed fleet to hundreds of robots by the first half of 2027. — 原文提取
- What 10 Months in Production Taught Us About the Robotics “Bubble” · Dyna Robotics · [原站](https://www.dyna.co/news/robotics-bubble) · [主体档案：Dyna Robotics](../entities/companies/Dyna%20Robotics.md) · [本地原件](../../../raw/101ba5af10e6de3319ab4db24531369762f8e1ded74b1946a9f694cb4c97497d)
  材料版本 `digest-material-101ba5af10e6de3319ab4db24531369762f8e1ded74b1946a9f694cb4c97497d@1`；获取方式 `http_full_text`。
  > Total useful work performed by humanoid robots in 2025? A rounding error. — 原文提取
  > In January 2026, Elon Musk acknowledged on Tesla's earnings call that zero Optimus robots were doing useful work in Tesla's factories. — 原文提取

归属与范围：在原有 Dyna-2.1 官方页面（27,854 字符）基础上，本轮抓取 Dyna 官网三篇核心第一手技术与洞察全文：《Dyna-2: A 1-Million-Hour Scaling Law》（58,164 字符）、《Scaling Customer Deployments》（22,794 字符）与 York Yang 署名《What 10 Months in Production Taught Us About the Robotics 'Bubble'》（2026-05，11,665 字符），核实了鼎泰丰从 Dyna-1（35/75%/480）到 Dyna-2（95/93%/1,590、2.7x 吞吐、3 天部署）、1M 小时 Ego Scaling（20%→28%→45%→53%、87% vs 46% 现场验收、110ms 采样）以及行业融资与工业营收差额。访谈原发微信链接仍无法直接抓取，1.5万–3万人民币国产机械臂售价、15天–1个月质保及 15–30s 零点漂移等口述工程参数维持归属标记与待复核。

来源缺口：

- `unavailable`：媒体人 Marilyn Liu（具身纪元）于 2026-11-03 发布的对谈原始微信链接及原始音频逐字稿未能直接抓取，部分组织内情（Caper AI 经验、2025 年团队拆分调整与部分硬件吐槽）完全依赖上传 PDF 转录本与官网同期文章交叉核对。
- `pending_verification`：York 访谈提及的国产机械臂 1.5 万至 3 万人民币采购成本、15 天至 1 个月短质保、15 至 30 秒周期零点漂移以及 30 至 50 人 Data/Ops 运营规模均为创始人未具名供应商口述细节；Dyna 官方页面未披露单站硬件折旧与服务净毛利率。

[返回赛道总览](../赛道总览.md#digest-0f7975c3b85d6fd9) · [返回导读索引](README.md) · [主体档案库](../entities/README.md)
