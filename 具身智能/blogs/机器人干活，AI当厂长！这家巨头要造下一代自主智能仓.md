---
title: "机器人干活，AI当厂长！这家巨头要造下一代自主智能仓"
type: blog_digest
sector: "具身智能"
source: "Geek+ Official Newsroom (2590.HK)"
published_at: "2026-11-03"
raw_sha256: "ea430487281ae8b136bc7d8cfdab5c5fc8448ec49fc4879486d91b806de87e56"
material_version: "digest-material-ea430487281ae8b136bc7d8cfdab5c5fc8448ec49fc4879486d91b806de87e56@1"
origin_url: "https://www.geekplus.com/resources/news/geek-unveils-24/7-warehouse-autonomy-plan-to-advance-self-optimizing-around-the-clock-operation"
trigger_source: "量子位"
trigger_url: ""
user_comments: ""
status: "processed_with_gaps"
primary_topic: "工业落地与商业模式"
topic_confidence: 0.8775
---

<a id="digest-ea430487281ae8b1"></a>
# 机器人干活，AI当厂长！这家巨头要造下一代自主智能仓

2026-11-03 · Geek+ Official Newsroom (2590.HK) · 有来源缺口

[本地原件归档](../../../raw/ea430487281ae8b136bc7d8cfdab5c5fc8448ec49fc4879486d91b806de87e56) · 固定材料版本 `digest-material-ea430487281ae8b136bc7d8cfdab5c5fc8448ec49fc4879486d91b806de87e56@1` · [一手原站](https://www.geekplus.com/resources/news/geek-unveils-24/7-warehouse-autonomy-plan-to-advance-self-optimizing-around-the-clock-operation)

## 深度拆解与复核

- ==核心结论==：极智嘉（[Geek+](../entities/companies/Geek%2B%20%28%E6%9E%81%E6%99%BA%E5%98%89%29.md)，2590.HK）将仓储具身智能的商业切口定在「棕色地带既有 AMR 集群 + 软件调度分层叠加单点无人拣选」，而非绿地重构全人形工厂. 本工作台穿透定位到的 Geek+ 官方 24/7 Warehouse Autonomy Plan 原文与 2026 RBR50 获奖公告验证了施耐德电气上海仓拣选效率翻倍（2 倍人工基线）、准确率超 99.99% 及 48 小时部署口号，但也暴露出人工对比基线跨度达 2 倍（150 至 300 件/小时）、英文官网滞后三天才正式挂网、8.1 万台总部署与年初 6.6 万台口径尚无港交所公告衔接等边界问题.

#### 一、口径与利益披露及业务核心机制

- 口径与利益披露：触发来稿为公众号「量子位（QbitAI）」2026-11-03 发布的公司产品规划转述稿，其中引用极智嘉系统平台部副总裁谭文哲博士采访口径，商业动机清晰——极智嘉正推动客户采购关系从一次性硬件 CapEx 销售转向基于 IOP（Intelligent Operations Platform）的长期软件订阅（subscription-based operational services），并借通用具身智能叙事重塑港股上市估值标签.
- 「一核双引擎（One Core, Dual Engine）」与 24/7 全仓自治结构：极智嘉把现有货到人（G2P）料箱/托盘/货架 AMR 与新近发布的通用具身产品摆在同一调度树下，拆为物理执行与仓库智能两层：
  - 物理执行层（End-to-End Robotics）：以统一具身框架 Gravity（采用 Mixture-of-Transformers 架构，拆分 AR Transformer Cognitive Brain 与 Diffusion Transformer Action Brain）及 Gravity 4D 世界模型扩展非标拣选与异常恢复边界；硬件含通用人形 Gino 1、工业分拣机械臂无人拣选工作站（Robot Arm Picking Station）及全品类 AMR 车队.
  - 仓库智能层（Geek+ Warehouse Brain）：由机器人管理系统 RMS、仓库执行系统 WES 与下一代智能运营平台 IOP 构成软件底座，其上通过 AI Agent 演化出两项能力——Orchestration Intelligence（基于 RMS/WES 的多机调度、路径规划与动态资源重分配）和 Operational Intelligence（实时异常诊断、瓶颈预测与夜间无人值守故障恢复）.
  - 渐进交付顺序：区别于从零替换人类工位的绿地路线，极智嘉先让标准 AMR 承接 90% 以上的确定性搬运流（单个仓库超 5,000 台协同记录），再用 Robot Arm Picking Station 与 Gino 1 填补多 SKU 拆零、包裹异形与异常恢复断点，目标在夜间与周末波峰减少对夜班人力与现场巡检的依赖.

#### 二、核心数据核查、口径纠偏与工程边界

- ✅ 「24/7 自主智能仓计划」英文官方原文与核心架构核实（本工作台核查）：针对原队列缺失的一手来源，本工作台从极智嘉英文官网定位并抓取《Geek+ Unveils 24/7 Warehouse Autonomy Plan to Advance Self-Optimizing, Around-the-Clock Operation》，确认三大核心路标为 Complete the Flow、Strengthen the Intelligence Loop 与 Scale Autonomy，并明确提出通过基于 IOP 的 AI 订阅服务在项目上线后持续交付运营优化（发布页面时间戳为 2026-11-06，比量子位中文稿晚 3 天，属国内外宣发节奏差）.
- ✅ 施耐德电气上海仓「2 倍效率、99.99%+ 准确率、48 小时上线」获奖公告复核（本工作台核查）：本工作台抓取 2026-05-19 极智嘉《Geek+ Wins 2026 RBR50 Innovation Award for Robot Arm Picking Station》一手公告，确认 Robot Arm Picking Station 在 Schneider Electric 上海物流中心试点中落地——==但分母与基线暴露重要口径细节==：官方规格把「2x manual efficiency（2 倍人工效率）」所对比的人工基准定义为「150–300 pieces/hour (variable)」，即熟练工与波动工况下人工分拣基线自身存在 100% 跨度；若取 300 pph 上限对比则机器人至少需达 600 pph，若取 150 pph 下限则 300 pph 即可宣称 2 倍，且 RBR50 公告未披露试点覆盖的 SKU 数量、异形包破损退回率与连续运行时长，测试中 100% 准确率与产线 >=99.99% 实测之间亦未见审计报告背书.
- ⚠️ 累计部署「8.1 万台」与「LIBERO-Plus 78.62% / 79.25%」指标的口径边界（本工作台复核）：极智嘉在 2026 年 3–4 月 LogiMAT 官方新闻中披露全球累计部署机器人数为 66,000+ 台（超 950 家全球客户），至 2026 年 11 月量子位稿件口径跃升至「超 8.1 万台、超 1,000 家客户」，半年多新增约 1.5 万台尚未在本轮极智嘉官网英文新闻或港交所公开披露中交叉核实. 模型能力侧，WAIC 2026 Gravity 公告仅公布自测 LIBERO-Plus 零样本成功率从 73.73% 提至 78.62%（变体 79.25%），并显示仅使用 Pointmap 表征优于直接堆叠深度信息，但评测权重、失败案例切片与 Gino 1 真机连续 MTBF（平均无故障时间）均未公开.
- ⚠️ 夜间无人值守的「物理异常恢复门槛」测算（本工作台推算）：极智嘉强调 Operational Intelligence Agent 具备异常检测与故障恢复能力，还设想以具身机器人执行物理干预. 在仓库夜间场景中，软体诊断（重启任务流、绕行拥堵通道）成本接近零，真正导致整夜停摆的是托盘歪斜、料箱变形散落或薄膜缠绕轮毂等长尾物理故障——只要 100 台机械臂夜间单台每千次抓取发生 1 起需物理清障卡滞，按每小时千次循环推算，12 小时无人班次内仍需触发十余次高难度跨区物理救场；若 Gino 1 移动操作清障成功率达不到 99% 以上，仓库仍无法真正取消夜班值守工程师，而官方公告尚未披露夜间人工介入率与平均故障恢复耗时（MTTR）.

#### 三、赛道横向对比与定位

| 对照公司 | 商业切口与部署基础 | 软件与模型栈 | 经济模型与主要短板 |
| :--- | :--- | :--- | :--- |
| [Geek+](../entities/companies/Geek%2B%20%28%E6%9E%81%E6%99%BA%E5%98%89%29.md)（2590.HK） | 棕色地带既有超 5,000 台单仓 AMR 存量网，复购率超 80%，用无人拣选臂与 Gino 1 补全断点 | Gravity (AR+Diff MoT) + RMS / WES / IOP 调度 Agent，本地数据保留（On-premise） | 意图从设备卖断切向 IOP 软件订阅；短板是具身机械臂多 SKU 长尾稳定性与夜间 MTBF 缺独立审计 |
| [Tutor Intelligence](./Investing%20in%20Tutor%20Intelligence.md) | 绿地直租物流 RaaS 包装拣选工作站，跳过存量软件系统包袱 | 30 个真实产线视频+触觉遥操作数据流 + 数据飞轮驱动模型迭代 | 按小时收取 14–18 美元服务费直接对标人力工资；缺既有千级客户基础与全仓交通调度层 |
| [Path Robotics](../entities/companies/Path%20Robotics.md) | 高客单价重工业自主焊接与制造（美国 2.45 万亿美元制造赛道切入） | Obsidian 自监督焊接物理世界模型，面向单工位工艺稳定性优化 | 高毛利工业重工艺交付周期长，与极智嘉主打高并发订单拆零调度属不同物理复杂度象限 |
| [Dyna Robotics](./Dyna-2.1_%20A%20Physical%20Agent%20for%20End-to-End%20Workflows.md) | 餐饮/酒店/物流单一端到端工作流，直接用全栈部署换回真机高频纠错与 ROI | Dyna-2 / 2.1 三层反应与任务编排架构，每站点连续 Episode 质检 | 以产品换数据并已过商业链规模扩张关；但未掌握全仓 WMS/WES 中央交通调度入口 |

极智嘉相对于纯具身创业公司最大的不对称优势在于客户现场已经铺设好的 RMS/WES 调度网与 AMR 货架基础设施：模型无需先解决仓库移动和任务分配即可直接寄生在既有货到人流水线上跑出局部效率倍增，进而通过 IOP 订阅把客户运营数据沉淀为行业壁垒. 但反过来看，物流履约软件长期受制于客户私有化部署习惯（施耐德试点即明确要求 On-premise 数据不出仓），限制了跨客户数据回流汇总与统一模型迭代速率.

### 观点与可反驳条件

- ==观点==：==极智嘉 24/7 自主智能仓规划的核心价值在于利用既有 40+ 国客户与 WES/RMS 调度入口做「棕色地带渐进式具身插接」，从而避开纯人形机器人在复杂环境中「单机未过 ROI、整厂无存量底座」的双重死结==；但「施耐德 2 倍效率」建立在宽幅变动的人工基准（150–300 件/小时）上，且夜间物理清障可靠性与 IOP 订阅渗透率尚未见量产期披露，因此当前仍属于具备清晰商业抓地力的早期产品路线演进，尚不能等同于全仓无人值守商业化定型.
- ==推翻条件==：
  1. ① 若 2027 年底前极智嘉港交所定期财报仍未披露软件及 IOP 订阅营收占比突破个位数，且前十大客户复购中 Robot Arm Picking Station 与 Gino 1 的打包搭售率低于 10%，说明物理具身与 AI 调度 Agent 并未跑通从硬件向高毛利运营订阅的迁移.
  2. ② 若在施耐德电气或同规模第三方物流仓的连续 90 天以上公开审计中，无人拣选工位叠加 24/7 夜班运行时的人工现场清障干预率仍高于每千单 5 次，或实测综合节拍在全品类长尾 SKU 上回落至 300 件/小时以下，则「2 倍人工效率、夜间自主运行」的核心价值锚点被证伪.
  3. ③ 若多家头部物流集成商通过自研通用 VLA 直连标准化第三方协作臂，在无须改造 RMS/WES 条件下于同一存量 AMR 系统中复现同等拣选性能，则极智嘉「一核双引擎」的软件粘性与平台议价力将显著削弱.

---

## 原文摘录与一手信源存证

> 当一众厂商还在围绕拣货、家务等任务探索时，如今有玩家盯上了具身智能产业化的一块硬骨头：智能仓储。
> — 原文摘录，PDF p.1；证据 `digest-material-ea430487281ae8b136bc7d8cfdab5c5fc8448ec49fc4879486d91b806de87e56-excerpt-1@1`

> 而且野心不小，要让AI接管整座仓库，实现7×24小时自主运行，还能在真实业务中持续学习、自主进化。
> — 原文摘录，PDF p.1；证据 `digest-material-ea430487281ae8b136bc7d8cfdab5c5fc8448ec49fc4879486d91b806de87e56-excerpt-2@1`

> 下一代仓储智能化的关键，是实现7×24小时自主运行、持续进化，并依托全球规模化商业能力，让自主智能仓成为新一代生产力基础设施。
> — 原文摘录，PDF p.2；证据 `digest-material-ea430487281ae8b136bc7d8cfdab5c5fc8448ec49fc4879486d91b806de87e56-excerpt-3@1`

一手材料：

- Geek+ Unveils 24/7 Warehouse Autonomy Plan to Advance Self-Optimizing, Around-the-Clock Operation · Geek+ · [原站](https://www.geekplus.com/resources/news/geek-unveils-24/7-warehouse-autonomy-plan-to-advance-self-optimizing-around-the-clock-operation) · [主体档案：Geek+ (极智嘉)](../entities/companies/Geek%2B%20%28%E6%9E%81%E6%99%BA%E5%98%89%29.md) · [本地原件](../../../raw/b76635cadfb8b936b510af10e09a392d6a6e164568f799fefdc224cdf0aaf7e1)
  材料版本 `digest-material-b76635cadfb8b936b510af10e09a392d6a6e164568f799fefdc224cdf0aaf7e1@1`；获取方式 `http_full_text`。
  > The roadmap brings together embodied AI, warehouse intelligence and globally deployed robotics to support the next generation of autonomous warehouse operations. — 原文提取
  > Geek+, a global leader in intelligent robotics, today announced its 24/7 Warehouse Autonomy Plan, a strategic roadmap for warehouses that can operate around the clock with increasing autonomy—and continue to improve through real-world experience. — 原文提取
- Geek+ Wins 2026 RBR50 Innovation Award for Robot Arm Picking Station · Geek+ · [原站](https://www.geekplus.com/resources/news/geekwins-2026-rbr50-innovation-award-for-robot-arm-picking-station) · [主体档案：Geek+ (极智嘉)](../entities/companies/Geek%2B%20%28%E6%9E%81%E6%99%BA%E5%98%89%29.md) · [本地原件](../../../raw/ceb05e5bd8c672d1ad86362d8e2cf38381788b05150faa1ab2c2fc42137348e4)
  材料版本 `digest-material-ceb05e5bd8c672d1ad86362d8e2cf38381788b05150faa1ab2c2fc42137348e4@1`；获取方式 `http_full_text`。
  > (HKEX: 2590.HK), a global leader in mobile robotics technologies, today announced that its Robot Arm Picking Station has won the 2026 RBR50 Innovation Award for its successful deployment at Schneider Electric’s Shanghai warehouse. — 原文提取
  > , standing alongside global tech giants like ABB, Amazon, Boston Dynamics and Nvidia at the forefront of innovation. — 原文提取
- Geek+ Debuts Gravity and Its “One Core, Dual Engine” Strategy at WAIC 2026, Accelerating the Next Era of Embodied AI · Geek+ · [原站](https://www.geekplus.com/resources/news/geek-debuts-gravity-and-its-one-core-dual-engine-strategy-at-waic-2026-accelerating-the-next-era-of-embodied-ai) · [主体档案：Geek+ (极智嘉)](../entities/companies/Geek%2B%20%28%E6%9E%81%E6%99%BA%E5%98%89%29.md) · [NotebookLM](https://notebook.google.com/notebook/33f0076b-fc09-42cc-9cd9-fecfb847ce1c) · [Drive](https://drive.google.com/file/d/1sfS6m8p-PoAeydYvZH7ALzw6vZu-OL1A/view?usp=drivesdk)
  材料版本 `digest-material-0695faacdbcbabf3814cc8c8bb91963d3e354c8944e33695699c65247267c840@2`；获取方式 `http_full_text_snapshot`。
  > Shanghai, July 17, 2026 — Geek+, a global leader in intelligent robotics, today unveiled Gravity, its unified embodied AI framework for long-horizon, complex physical tasks, at the 2026 World Artificial Intelligence Conference (WAIC). — 原文提取
  > Alongside Gravity, Geek+ officially announced its "One Core, Dual Engine" strategy for advancing general-purpose embodied intelligence. — 原文提取
- Geek+ Launches Next-Generation Intelligent Operation Platform (IOP) · Geek+ · [原站](https://www.geekplus.com/resources/robotics-blogs/geek-launches-next-generation-intelligent-operation-platform-iop) · [主体档案：Geek+ (极智嘉)](../entities/companies/Geek%2B%20%28%E6%9E%81%E6%99%BA%E5%98%89%29.md) · [NotebookLM](https://notebook.google.com/notebook/33f0076b-fc09-42cc-9cd9-fecfb847ce1c) · [Drive](https://drive.google.com/file/d/18NuHv3kGsOL5K-KVFjH9jJZDhP7o_3Ov/view?usp=drivesdk)
  材料版本 `digest-material-f44622eaa5967c4c2c6ebbb596fc8ac83360067973364e95a3ce6fe6de50381b@2`；获取方式 `http_full_text_snapshot`。
  > As digital transformation accelerates and intelligent technologies become increasingly integrated into warehouse operations, companies are rapidly advancing their data intelligence capabilities. — 原文提取
  > In response to this trend, global leader in warehouse robotics Geek+ (HKEX: 2590) has launched its new-generation Intelligent Operation Platform (IOP), built on a cloud-native architecture. — 原文提取
- Geekplus Brings Pioneering 'Geekplus Brain' Embodied Intelligence and Integrated Robotics Platform to LogiMAT 2026 · Geek+ · [原站](https://www.geekplus.com/resources/news/geekplus-brings-pioneering-geekplus-brain-embodied-intelligence-and-integrated-robotics-platform-to-logimat-2026) · [主体档案：Geek+ (极智嘉)](../entities/companies/Geek%2B%20%28%E6%9E%81%E6%99%BA%E5%98%89%29.md) · [NotebookLM](https://notebook.google.com/notebook/33f0076b-fc09-42cc-9cd9-fecfb847ce1c) · [Drive](https://drive.google.com/file/d/1cRXetBW6V-EtksoJYUXIdCDYGiNBPKom/view?usp=drivesdk)
  材料版本 `digest-material-1b030db36d174f57ed4dc5fcce0fd68ffd1d879bde47e971aa4aff6e261391c2@2`；获取方式 `http_full_text_snapshot`。
  > Stuttgart, March 11, 2026 - Geekplus (Stock Code: 2590.HK), the global leader in autonomous mobile robot (AMR) warehouse solutions, spearheads an expanded vision for intelligent logistics at Europe’s largest annual intralogistics trade show, LogiMAT 2026. — 原文提取
  > The trade show takes place at Stuttgart Trade Fair Centre, Germany, between March 24 and 26, 2026. — 原文提取
- Geekplus unveils new Robot Arm Picking Station, ushering in an era of fully unmanned warehouses · Geek+ · [原站](https://www.geekplus.com/resources/news/geekplus-unveils-new-robot-arm-picking-station-ushering-in-an-era-of-fully-unmanned-warehouses) · [主体档案：Geek+ (极智嘉)](../entities/companies/Geek%2B%20%28%E6%9E%81%E6%99%BA%E5%98%89%29.md) · [NotebookLM](https://notebook.google.com/notebook/33f0076b-fc09-42cc-9cd9-fecfb847ce1c) · [Drive](https://drive.google.com/file/d/1AoE4qnD8WUOnSSA_Yq1CTwtF9MfHth9q/view?usp=drivesdk)
  材料版本 `digest-material-39b08c059c6767174a543827c1858ae290ab89661403906f27672416638b2a47@2`；获取方式 `http_full_text_snapshot`。
  > Geekplus (Stock Code: 2590.HK), the global leader in warehouse robotics, today unveiled its new Robot Arm Picking Station, marking the industry's first end-to-end unmanned picking solution, and a major leap from "partial automation" to "full-process intelligence". — 原文提取
  > "This new solution marks a key milestone in our journey toward general-purpose warehouse robotics," said Yong Zheng, Founder and CEO of Geekplus. — 原文提取

归属与范围：在已有 4 篇 Geek+ 官网一手文献（Gravity WAIC 2026、IOP 博客、LogiMAT 2026 Geekplus Brain、Robot Arm Picking Station）基础上，本轮补充定位并抓回此前缺失的《24/7 Warehouse Autonomy Plan》官方原文（2026-11-06，11,298 字符）及《2026 RBR50 获奖公告》（2026-05-19，4,001 字符），核实了施耐德上海物流中心 2 倍人工基线（对照 150-300 pieces/hour）、\>=99.99% 准确率与 48 小时上线等宣称口径。保留未解缺口：施耐德试点具体 SKU 覆盖数与连续运行时长、24/7 夜间人工介入率/MTBF、IOP 订阅商业条款、以及 8.1 万台（中文稿）与 6.6 万+ 台（2026-03/04 英文 PR）之间的增量统计口径差异。

来源缺口：

- `not_disclosed`：Geek+ 官方 24/7 自主智能仓新闻与 2026 RBR50 公告均未披露施耐德上海仓试点的 SKU 品类总数、异形包破损拦截率、连续运行时长及夜间物理清障人工介入频率，也未公布 IOP AI 运营服务的商业订阅定价与毛利结构。
- `pending_verification`：2026 年 11 月中文媒体口径中的“累计部署超 8.1 万台机器人、超 1,000 家客户”与 2026 年 3–4 月 Geek+ 英文官方披露的“66,000+ 台、950+ 客户”存在半年新增 1.5 万台差额，尚无港交所（2590.HK）定期报告交叉核实；另 LIBERO-Plus 73.73%→78.62%/79.25% 仅见官方自测公告，评测脚本与权重未开源验证。

[返回赛道总览](../赛道总览.md#digest-ea430487281ae8b1) · [返回导读索引](README.md) · [主体档案库](../entities/README.md)
