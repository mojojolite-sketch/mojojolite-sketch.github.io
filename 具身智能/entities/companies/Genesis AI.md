# Genesis AI

[返回主体档案库](../README.md) · [返回赛道总览](../../赛道总览.md) · [单篇导读索引](../../blogs/README.md)

- 主体类别：🏢 公司与产业主体 (Companies)
- 核心定位与说明：CMU 周宪（Zhou Xian）与前 Mistral AI 研究员 Théophile Gervet 于 2025 年 3 月创立的全栈物理 AI 公司（巴黎 + San Carlos）。2025-07 获 Eclipse 与 Khosla Ventures 领投 \\\$105M 种子轮；2026-05 发布 GENE-26.5（采用 Maxinsights 20 万小时第一视角视频并联合测试 MaxGlove）；2026-11-17 获 Premji Invest、Khosla Ventures、Eclipse 联合领投 \\\$500M A 轮（投后估值 \\\$3.5B，累计融资 \\\$605M），NVIDIA 与 AMD Ventures 同台参投。 承载 genesis-world（多物理仿真平台）、quadrants（源于 Taichi 的跨平台 Python-to-GPU 编译器）与 genesis-nyx（实时路径追踪渲染器）。
- 关联账号与官方入口：
  - github（Genesis AI）：[账号主页](https://github.com/Genesis-Embodied-AI) · 登记对象 `digest-publisher-c82d425c9c06fb472fd13500` — 承载 genesis-world（多物理仿真平台）、quadrants（源于 Taichi 的跨平台 Python-to-GPU 编译器）与 genesis-nyx（实时路径追踪渲染器）。
  - website（Genesis AI）：[机构／作者主页](https://www.genesis.ai/) · 登记对象 `digest-publisher-22c0db15c974c926a4cfb5db` — CMU 周宪（Zhou Xian）与前 Mistral AI 研究员 Théophile Gervet 于 2025 年 3 月创立的全栈物理 AI 公司（巴黎 + San Carlos）。2025-07 获 Eclipse 与 Khosla Ventures 领投 \\\$105M 种子轮；2026-05 发布 GENE-26.5（采用 Maxinsights 20 万小时第一视角视频并联合测试 MaxGlove）；2026-11-17 获 Premji Invest、Khosla Ventures、Eclipse 联合领投 \\\$500M A 轮（投后估值 \\\$3.5B，累计融资 \\\$605M），NVIDIA 与 AMD Ventures 同台参投。

<!-- curated-profile:begin -->
## 0. 核心定位、融资台账与全栈技术架构（Curated Dossier）

> [!IMPORTANT]
> - ==核心定位与创始团队==：由 CMU 博士周宪（Zhou Xian，CEO；部分中文稿误作“周衔”）与前 Mistral AI 研究员、CMU 博士 Théophile Gervet（President）于 2025 年 3 月创立，采用美国 San Carlos 与法国巴黎双总部架构，定位全栈物理 AI 与通用机器人公司（[官网](https://www.genesis.ai/)、[开源组织](https://github.com/Genesis-Embodied-AI)）。
> - ==资本台账与芯片巨头合投边界==：2025 年 7 月获 Eclipse 与 Khosla Ventures 领投 \$105M 种子轮；2026 年 11 月 17 日完成 \$500M A 轮融资，投后估值 \$3.5B，由 Premji Invest、Khosla Ventures 与 Eclipse 联合领投，NVIDIA 与 AMD Ventures 同台参投（累计公开融资 \$605M）。经本库核查，NVIDIA 与 AMD 此前已于 2026 年 2 月同轮参投李飞飞创立的 World Labs（\$1B 融资，后由 AMD 于 2026 年 9–11 月以约 \$8.2B 收购），故本次仅属二者在具身机器人本体与操作基模方向的首次同台合投。
> - ==供应链实证与多空分水岭==：外部供应链档案实证 `GENE-26.5` 预训练并非 100% 闭门自采，而是采购了 [Maxinsights](Maxinsights.md) 的 200,000 小时第一视角人类视频并联合实测 `MaxGlove` 轻标定触觉手套，再与内部 1:1:1 电磁场（EMF）触觉手套及第三视角数据融合至百万小时级；\$3.5B 估值的兑现锚点在于轮式折叠本体 `Eno` 2026 年底量产部署的真实可靠性与付费台数，以及 `Genesis World`（r = 0.8996）在工业接触密集任务中的外推有效性。

### 💰 2025–2026 融资台账与关键里程碑

| 日期 | 轮次 / 事件 | 金额与估值 | 领投方与核心股东 / 实证内容 | 一手出处与站内导读 |
| :--- | :--- | :--- | :--- | :--- |
| 2025-07 | Seed 种子轮 | \$105M（未披露估值） | Eclipse、Khosla Ventures 联合领投；Bpifrance、HSG、Eric Schmidt、Xavier Niel 等参投 | [PR Newswire (Seed)](https://www.prnewswire.com/news-releases/genesis-ai-emerges-from-stealth-with-105m-to-build-universal-robotics-foundation-model-and-horizontal-platform-for-general-purpose-physical-ai-302518608.html) |
| 2026-05 | GENE-26.5 基模与数据底座披露 | — | 发布共享权重通用操作基模 GENE-26.5（厨房 20+ 子任务、实验室移液离心、弹琴等）；确认采用 Maxinsights 200,000 小时第一视角人类视频并联合实测 MaxGlove | [GENE-26.5 博客](https://genesis.ai/blog/gene-26-5-advancing-robotic-manipulation-to-human-level)<br/>[Maxinsights 合作导读 →](../../blogs/Maxinsights%20Egocentric%20Data%20Now%20Embedded%20in%20the%20Training%20of%20Leading%20Robotic%20Foundation%20Models.md) |
| 2026-09 | MI-RSCH-001 供应链实证 | — | Maxinsights 官方工程报告证实 GENE-26.5 采用「第三视角 + Maxinsights 20 万h 第一视角 + 1:1:1 传感手套」三源混合引擎，与智元 AgiBot Genie 严格消歧 | [MI-RSCH-001 导读 →](../../blogs/Beyond%201M%20Hours_%20The%20Data%20Scaling%20Laws%20of%20Physical%20AI.md) |
| 2026-11-17 | Series A 轮融资 | \$500M / 投后 \$3.5B | Premji Invest、Khosla Ventures、Eclipse 联合领投；NVIDIA、AMD Ventures、Durable Capital Partners、T. Rowe Price Associates、Bpifrance、HSG、Zoom、Samsung Next、Ericsson 及 Eric Schmidt、Eric Yuan、Jerry Yang、Xavier Niel、Zach Kirkhorn 参投 | [PR Newswire (Series A)](https://www.prnewswire.com/news-releases/genesis-ai-raises-500m-series-a-at-35b-valuation-to-master-human-level-dexterity-in-general-purpose-robots-and-deploy-at-scale-302307849.html)<br/>[Series A 官网博客](https://genesis.ai/blog/genesis-raises-500m-series-a-to-fund-its-next-chapter)<br/>[A 轮拆解导读 →](../../blogs/%E8%8B%B1%E4%BC%9F%E8%BE%BEAMD%E9%A6%96%E6%AC%A1%E8%81%94%E6%89%8B%E6%8A%BC%E6%B3%A8%EF%BC%81Genesis%E5%AE%8C%E6%88%90A%E8%BD%AE%E8%9E%8D%E8%B5%84%EF%BC%8C%E4%BC%B0%E5%80%BC%E8%B6%85230%E4%BA%BF.md) |

### 🛠️ 全栈技术架构与供应链拆解

| 模块层级 | 核心系统与规格 | 工程机制与供应链边界 | 参考来源 |
| :--- | :--- | :--- | :--- |
| 通用大脑（Foundation Model） | GENE-26.5（单一共享权重模型） | 面向长程、富接触灵巧操作与毫米级工具交互；按空间精度、时序编排、接触丰富度、双手协同与工具交互五轴评估 | [GENE-26.5 博客](https://genesis.ai/blog/gene-26-5-advancing-robotic-manipulation-to-human-level) |
| 数据采集与触觉映射 | 三源混合引擎（已扩展至百万小时级）：第三视角 + 第一视角 + 1:1:1 EMF/触觉手套 | 1:1:1 映射打通人手—EMF 与高密度触觉数据手套—20 DoF 机械灵巧手；实测期同步向 Maxinsights 外采 20 万h 第一视角人类视频并共测 MaxGlove，非封闭纯自产 | [Maxinsights \$30M 导读 →](../../blogs/%E5%8D%8E%E4%BA%BA%E7%89%A9%E7%90%86AI%E5%85%AC%E5%8F%B8%E5%AE%8C%E6%88%903000%E4%B8%87%E7%BE%8E%E5%85%83%E7%A7%8D%E5%AD%90%E8%BD%AE.md) |
| 仿真与评估底座 | Genesis World（Nyx 光追渲染 + Quadrants 编译器 + 统一多物理引擎） | Quadrants 源于 Taichi，支持 CUDA、AMD ROCm、Apple Metal 与 Vulkan；官方对照实验中将 >200 小时真机评估压缩至 <30 分钟，Sim-to-Real Pearson r = 0.8996 | [genesis-world (GitHub)](https://github.com/Genesis-Embodied-AI/genesis-world)<br/>[Genesis World](https://genesis.ai/genesis-world) |
| 机器人本体硬件 | Eno（非人形轮式底座 + 可升降折叠躯干 + 双臂 20 DoF 柔性表皮灵巧手） | 舍弃双足人形外观换取移动效率、续航、成本与工位高度适配；计划 2026 年底前率先投产并部署工业、物流与实验室，再拓展至服务与家庭场景 | [Eno 发布通稿](https://www.prnewswire.com/news-releases/introducing-eno-genesis-ais-first-general-purpose-robot-is-challenging-traditional-humanoid-design-302826725.html) |

<!-- curated-profile:end -->

## 1. 核心研究问题与待核查争议（Questions & Open Debates）

### 🔍 待核查缺口与证据边界（Open Gaps）

- `not_disclosed`：Series A \\\$500M 中三大领投方（Premji Invest、Khosla Ventures、Eclipse）与 NVIDIA、AMD Ventures、Bpifrance、HSG、Durable Capital、T. Rowe Price 等各自出资比例与治理席位未公开。（关联：[《英伟达AMD首次联手押注！Genesis完成A轮融资，估值超230亿》](../../blogs/%E8%8B%B1%E4%BC%9F%E8%BE%BEAMD%E9%A6%96%E6%AC%A1%E8%81%94%E6%89%8B%E6%8A%BC%E6%B3%A8%EF%BC%81Genesis%E5%AE%8C%E6%88%90A%E8%BD%AE%E8%9E%8D%E8%B5%84%EF%BC%8C%E4%BC%B0%E5%80%BC%E8%B6%85230%E4%BA%BF.md)）
- `not_disclosed`：GENE-26.5 百万小时级训练语料中，外部采购（如 Maxinsights 20 万小时第一视角人类视频）与自有 EMF 触觉手套实采、仿真合成数据的精确配比及真机样本效率曲线未公开；Genesis World 仿真与真机对照相关性 r = 0.8996 的任务覆盖明细未公开。（关联：[《英伟达AMD首次联手押注！Genesis完成A轮融资，估值超230亿》](../../blogs/%E8%8B%B1%E4%BC%9F%E8%BE%BEAMD%E9%A6%96%E6%AC%A1%E8%81%94%E6%89%8B%E6%8A%BC%E6%B3%A8%EF%BC%81Genesis%E5%AE%8C%E6%88%90A%E8%BD%AE%E8%9E%8D%E8%B5%84%EF%BC%8C%E4%BC%B0%E5%80%BC%E8%B6%85230%E4%BA%BF.md)）
- `not_disclosed`：轮式通用机器人 Eno 的单机 BOM 成本、商业定价/RaaS 模式、2026 年底工业/物流/实验室首批交付台数、营收合同与长时无故障率（MTBF）均未公开。（关联：[《英伟达AMD首次联手押注！Genesis完成A轮融资，估值超230亿》](../../blogs/%E8%8B%B1%E4%BC%9F%E8%BE%BEAMD%E9%A6%96%E6%AC%A1%E8%81%94%E6%89%8B%E6%8A%BC%E6%B3%A8%EF%BC%81Genesis%E5%AE%8C%E6%88%90A%E8%BD%AE%E8%9E%8D%E8%B5%84%EF%BC%8C%E4%BC%B0%E5%80%BC%E8%B6%85230%E4%BA%BF.md)）
- `unavailable`：受沙箱外网白名单限制，PR Newswire 与 Genesis AI 官网域名无法直连抓取完整 HTML，已通过多源检索交叉核验标题、日期、股东名单与技术参数并归档核验快照；GitHub 开源仓 genesis-world 已通过 GitHub 官方 API 直拉完整元数据与 README 归档。（关联：[《英伟达AMD首次联手押注！Genesis完成A轮融资，估值超230亿》](../../blogs/%E8%8B%B1%E4%BC%9F%E8%BE%BEAMD%E9%A6%96%E6%AC%A1%E8%81%94%E6%89%8B%E6%8A%BC%E6%B3%A8%EF%BC%81Genesis%E5%AE%8C%E6%88%90A%E8%BD%AE%E8%9E%8D%E8%B5%84%EF%BC%8C%E4%BC%B0%E5%80%BC%E8%B6%85230%E4%BA%BF.md)）
- `pending_verification`：\$250M 为管理层披露的 2026 预计年化营收运行率（Projected Annualized Revenue Run Rate），包含大额现货库集中交付脉冲（如 1.5 周交付 30 万+ 小时），目前明确签署长期经常性合同（recurring contracts）的客户为 8 家，2027 年经常性续约留存率与经审计净收入待跟踪核实。（关联：[《华人物理AI公司完成3000万美元种子轮》](../../blogs/%E5%8D%8E%E4%BA%BA%E7%89%A9%E7%90%86AI%E5%85%AC%E5%8F%B8%E5%AE%8C%E6%88%903000%E4%B8%87%E7%BE%8E%E5%85%83%E7%A7%8D%E5%AD%90%E8%BD%AE.md)）
- `pending_verification`：MaxGlove 触觉力传感手套目前处于与 Genesis AI 联合实测阶段，其跨手型免标定精度、柔性力敏元件在数千名合同工高频佩戴下的耐用寿命及 2027 年 100 万小时力数据交付进度尚待独立硬件评测验证。（关联：[《华人物理AI公司完成3000万美元种子轮》](../../blogs/%E5%8D%8E%E4%BA%BA%E7%89%A9%E7%90%86AI%E5%85%AC%E5%8F%B8%E5%AE%8C%E6%88%903000%E4%B8%87%E7%BE%8E%E5%85%83%E7%A7%8D%E5%AD%90%E8%BD%AE.md)）
- `not_disclosed`：虽已结合 2026-11-09 PitchBook 专访补齐 2026 预计年化运行率（\$250M ARR）与前三大客户收入占比（30%），但 Maxinsights 向 Dyna Robotics 与 Genesis AI 交付可用训练工时的具体阶梯单价（\$/hour）与经审计毛利率明细仍未公开。（关联：[《Beyond 1M Hours: The Data Scaling Laws of Physical AI》](../../blogs/Beyond%201M%20Hours_%20The%20Data%20Scaling%20Laws%20of%20Physical%20AI.md)）
- `pending_verification`：主体消歧与一线交叉线索边界：公开一手材料已 100% 证实美国/法国 Genesis AI（GENE-26.5）采购 Maxinsights 20 万小时数据并共测 MaxGlove；而同名谐音的国内智元机器人 AgiBot（Genie-1 / AgiBot World）公开主打上海自建百台真机遥操作数采厂，其是否另行外采第三方第一视角人手视频仍属待独立核实的行业非公开线索。（关联：[《Beyond 1M Hours: The Data Scaling Laws of Physical AI》](../../blogs/Beyond%201M%20Hours_%20The%20Data%20Scaling%20Laws%20of%20Physical%20AI.md)）
- `not_disclosed`：文中称其数据已支撑硅谷湾区大多数基模开发团队（majority of foundation model developers in the Bay Area），除已公开具名的 Dyna Robotics 与 Genesis AI 外，其余北美头部客户名单受保密协议约束未予公开。（关联：[《Maxinsights Egocentric Data Now Embedded in the Training of Leading Robotic Foundation Models》](../../blogs/Maxinsights%20Egocentric%20Data%20Now%20Embedded%20in%20the%20Training%20of%20Leading%20Robotic%20Foundation%20Models.md)）

- [《英伟达AMD首次联手押注！Genesis完成A轮融资，估值超230亿》](../../blogs/%E8%8B%B1%E4%BC%9F%E8%BE%BEAMD%E9%A6%96%E6%AC%A1%E8%81%94%E6%89%8B%E6%8A%BC%E6%B3%A8%EF%BC%81Genesis%E5%AE%8C%E6%88%90A%E8%BD%AE%E8%9E%8D%E8%B5%84%EF%BC%8C%E4%BC%B0%E5%80%BC%E8%B6%85230%E4%BA%BF.md)：主信源穿透至 Genesis AI 官方 Series A 博客与 PR Newswire 正式通稿（2026-11-17），并关联 GENE-26.5 官方技术博客与 Genesis-Embodied-AI 开源仓库；量子位（QbitAI）编译稿退居 trigger\_source。同时与本工作台既有 Maxinsights 供应链实证档案交叉核查，勘误创始人大名、合投历史口径及 20 万小时数据来源边界。
- [《华人物理AI公司完成3000万美元种子轮》](../../blogs/%E5%8D%8E%E4%BA%BA%E7%89%A9%E7%90%86AI%E5%85%AC%E5%8F%B8%E5%AE%8C%E6%88%903000%E4%B8%87%E7%BE%8E%E5%85%83%E7%A7%8D%E5%AD%90%E8%BD%AE.md)：穿透整合 Business Wire 官方更正版 \$30M 融资暨 MaxLoop/MaxGlove 发布通稿、2026-11-09 PitchBook 专访（\$250M 预计 ARR、1.5 周交付 30 万+ 小时、前三大客户占 30%）及 Ashby 17 个在招研发岗位；勘误二手微信稿『头/腕/胸三路相机、6国』失真，完成单位经济学与 Eidon AI 停摆判词的正反对账。
- [《Beyond 1M Hours: The Data Scaling Laws of Physical AI》](../../blogs/Beyond%201M%20Hours_%20The%20Data%20Scaling%20Laws%20of%20Physical%20AI.md)：完整归档 Maxinsights《Beyond 1M Hours》（MI-RSCH-001）与《MaxSLAM》两篇官方工程原文，关联其 \$30M 种子轮更正版官方通稿与 Dyna-2.1 官方技术页；实锤核验 Dyna Robotics（Dyna-2 最大第一视角数据供应商）与 Genesis AI（GENE-26.5 20万小时第一视角数据供应 + MaxGlove 触觉手套联合测试），严格消歧同音主体智元机器人 AgiBot Genie，并与本库 Eidon AI 停摆复盘、NVIDIA GR00T 2 Human-1M、通研院/Sharpa UVTA 及狮子山 Lion-ER / Re-Mix 完成全维度对账。
- [《Maxinsights Egocentric Data Now Embedded in the Training of Leading Robotic Foundation Models》](../../blogs/Maxinsights%20Egocentric%20Data%20Now%20Embedded%20in%20the%20Training%20of%20Leading%20Robotic%20Foundation%20Models.md)：完整归档 Maxinsights 2026-05-18 LinkedIn Pulse 首发原文及 HTML 快照（官网 research.html 第三篇），纵向拉通 2026-05 至 2026-10 与 Genesis AI (GENE-26.5) 合作的定量演进（200,000 小时交付 + MaxGlove 共测），并全量拆解官网 09 大物理模态与传感器真值/伪标签边界。

## 2. 阅读笔记与原文 Highlight（Reading Highlights & Marginalia）

### 🖍️ 摘录与批注：《Beyond 1M Hours: The Data Scaling Laws…》（6 条）

关联文章：[《Beyond 1M Hours: The Data Scaling Laws of Physical AI》](../../blogs/Beyond%201M%20Hours_%20The%20Data%20Scaling%20Laws%20of%20Physical%20AI.md)

- [TG#245] dyna和genie的数据都是用max insight的，这篇博客很有参考价值

> “GENE's data engine combines these sources rather than choosing one: third-person video for breadth, egocentric video for natural interaction, and instrumented gloves for high-fidelity hand motion and tactile signals.”
> — 摘录（TG#246）

> “So the scaling law is also a manufacturing law, and that changes which metric the business runs on. Cost per recorded hour is easy to measure and is what procurement asks for. What governs the business is cost per usable training hour — one that cleared calibration, sync, annotation, and QC for the supervision actually being bought. What governs the model is one step further out: cost per unit of new physical information — the measure that tells you whether each additional decade of hours is still buying capability.”
> — 批注（TG#247）：这段真是太好了

> “One clarification, since this is where the framework is easiest to attack: Axis I coverage is breadth — more environments, people, and objects across the same kind of recording. Axis II is depth — how much of each interaction the recording preserves. Adding a thousand new kitchens is Axis I; capturing contact and object states inside the kitchens you already have is Axis II.”
> — 批注（TG#248）：tech details with clear definition，这篇文章竟然是免费的。

> “It should know what it already holds, at the level of state coverage rather than hours and task labels. It should estimate where that coverage is thin. It should acquire against that estimate alongside its volume targets, seeking new states as well as new hours — rare interactions, difficult geometries, underrepresented object classes. And it should route each hour to the level of supervision its expected value justifies, since full geometric annotation is worth paying for on some recordings and wasted on others.”
> — 批注（TG#249）：我太同意了

> “Three numbers make that measurable: end-to-end pipeline yield, marginal information gain per delivered hour, and coverage against a declared state taxonomy. Only the first is well-defined today. The second and third are open problems, and whoever defines them first will set the standard the market prices against.”
> — 摘录（TG#250）

> 导读核心结论：核心结论与六脉络总纲：硅谷/中国具身数据基础设施商 Maxinsights（海宇数维）发布的官方工程研究《Beyond 1M Hours: The Data Scaling Laws of Physical AI》（文档编号 MI-RSCH-001，2026-09-09），不仅从官方一手披露层面实锤了用户给出的一线供应链情报——Maxinsights 同时充当 Dyna Robotics 百万小时世界—动作模型 Dyna-2 的最大第一视角人类数据供应商，以及 Genesis…


## 3. 收录文章与一手材料（Ingested Articles & Primary Sources）

### [英伟达AMD首次联手押注！Genesis完成A轮融资，估值超230亿](../../blogs/%E8%8B%B1%E4%BC%9F%E8%BE%BEAMD%E9%A6%96%E6%AC%A1%E8%81%94%E6%89%8B%E6%8A%BC%E6%B3%A8%EF%BC%81Genesis%E5%AE%8C%E6%88%90A%E8%BD%AE%E8%9E%8D%E8%B5%84%EF%BC%8C%E4%BC%B0%E5%80%BC%E8%B6%85230%E4%BA%BF.md)

2026-11-18 · 来源：Genesis AI · 状态：有来源缺口

[单篇导读（blogs/）](../../blogs/%E8%8B%B1%E4%BC%9F%E8%BE%BEAMD%E9%A6%96%E6%AC%A1%E8%81%94%E6%89%8B%E6%8A%BC%E6%B3%A8%EF%BC%81Genesis%E5%AE%8C%E6%88%90A%E8%BD%AE%E8%9E%8D%E8%B5%84%EF%BC%8C%E4%BC%B0%E5%80%BC%E8%B6%85230%E4%BA%BF.md) · [微信原件](../../../../raw/53bf5c55620f343d04a95520cb020d04ff6c0d754dba1923cd4dc65cd3dd2594) · 固定版本 `digest-material-53bf5c55620f343d04a95520cb020d04ff6c0d754dba1923cd4dc65cd3dd2594@1`

> 刚刚，美国具身智能公司Genesis AI，完成了一笔新融资—— 5亿美金A轮，投后估值来到35亿美金。 投资方阵容也是相当豪华： NVIDIA、AMD、前谷歌CEO Eric Schmidt、Zoom创始人袁征、雅虎创始人Jerry Yang……一众大佬赫然在列。 值得一提的是，这是AMD和英伟达第一次联手投资具身智能公司。

> 一次模型评估可能涉及数百个任务，每个任务重复数百次。在现实世界中，这需要一名操作员和一台机器人连续工作超过200个小时。 而在Genesis World中，同样的数万次测试，可以在不到半小时内完成，且无需任何人工或硬件介入。 当然，这一切的前提，是「可信」。 为了缩小Sim-to-Real的差距，Genesis投入巨大精力，自研了渲染引擎Nyx、跨平台编译器Quadrants和统一的物理引擎。 最终，在官方开展的对照实验中，仿真评测与真实机器人测试结果表现出较强相关性，Pearson相关系数达到0.8996。

关联一手材料：

- Genesis AI Raises \$500M Series A at \$3.5B Valuation to Master Human-Level Dexterity in General-Purpose Robots and Deploy at Scale（Genesis AI）· [原站](https://www.prnewswire.com/news-releases/genesis-ai-raises-500m-series-a-at-35b-valuation-to-master-human-level-dexterity-in-general-purpose-robots-and-deploy-at-scale-302307849.html) · [本地原件](../../../../raw/f6325ddcf08fbf5a11292e64f036c615e5b9404d97ac7c97efd2854b557f6ba8) · 版本 `digest-material-f6325ddcf08fbf5a11292e64f036c615e5b9404d97ac7c97efd2854b557f6ba8@1`
  > - Company: Genesis AI, full-stack physical AI and general-purpose robotics company co-founded in March 2025 by Zhou Xian (CEO, CMU robotics PhD) and Théophile Gervet (President, former Mistral AI researcher, CMU PhD), operating out of San Carlos, California and Paris, France. — 原文提取

### [华人物理AI公司完成3000万美元种子轮](../../blogs/%E5%8D%8E%E4%BA%BA%E7%89%A9%E7%90%86AI%E5%85%AC%E5%8F%B8%E5%AE%8C%E6%88%903000%E4%B8%87%E7%BE%8E%E5%85%83%E7%A7%8D%E5%AD%90%E8%BD%AE.md)

2026-10-29 · 来源：Maxinsights · Official Engineering Blog & Release · 状态：有来源缺口

[单篇导读（blogs/）](../../blogs/%E5%8D%8E%E4%BA%BA%E7%89%A9%E7%90%86AI%E5%85%AC%E5%8F%B8%E5%AE%8C%E6%88%903000%E4%B8%87%E7%BE%8E%E5%85%83%E7%A7%8D%E5%AD%90%E8%BD%AE.md) · [微信原件](../../../../raw/75d06cb5e5936f22f9e5b8ec45d724d7aab35f54cbe811789e95ffd4c46bf76d) · 固定版本 `digest-material-75d06cb5e5936f22f9e5b8ec45d724d7aab35f54cbe811789e95ffd4c46bf76d@1`

> 近日，总部位于硅谷的 Maxinsights （中国实体为“海宇数维”）宣布完成 3000 万美元种子轮融资。本轮由 Peak XV （原红杉印度/ 东南亚）领投，Tola Capital 、South Park Commons、渶策资本与 Alumni Ventures 跟投。

> 两位创始人都是华人。 CEO 袁宇光毕业于上海交通大学，曾联合创办工业机器人公司 Mega Gear Robotics，后该公司被收购，他还曾在全球动力管理巨头 Eaton 担任管理职务。CTO汪堃毕业于北京大学，曾在 Google 自动驾驶项目担任工程师，后回国联合创办轻舟智航（QCraft），其自动驾驶技术已落地超百万辆。

关联一手材料：

- CORRECTING and REPLACING Waymo, Google and Microsoft Alums Raise \$30M to Build the Data Layer for Physical AI（Maxinsights（公司更正新闻稿，Business Wire分发））· [原站](https://www.businesswire.com/news/home/20261022672609/en/) · [NotebookLM](https://notebook.google.com/notebook/cac99041-d3b9-449e-a192-12bb4b1ad391) · [Drive](https://drive.google.com/file/d/1Xonxn_FFjceKhKst7wQ9j_XCtTCsQMOX/view?usp=drivesdk) · 版本 `digest-material-205fe390ebab7205efa6a019de548b78d5f1ce3b5a6f423c2a349f1083c19f8c@1`
  > Maxinsights, the company building the data layer for physical AI, today announced \$30 million in seed funding led by PeakXV, with participation from Tola Capital, South Park Commons, INCE Capital, and Alumni Ventures. — 原文提取

### [Beyond 1M Hours: The Data Scaling Laws of Physical AI](../../blogs/Beyond%201M%20Hours_%20The%20Data%20Scaling%20Laws%20of%20Physical%20AI.md)

2026-09-09 · 来源：Maxinsights · Official Engineering Blog · 状态：有来源缺口

[单篇导读（blogs/）](../../blogs/Beyond%201M%20Hours_%20The%20Data%20Scaling%20Laws%20of%20Physical%20AI.md) · [微信原件](../../../../raw/7cd8c0adb7118dba4b0d396babe2d976c18bcccde2eea617d5da32bb6529592a) · 固定版本 `digest-material-7cd8c0adb7118dba4b0d396babe2d976c18bcccde2eea617d5da32bb6529592a@2`

> The first million hours showed that human experience can scale physical intelligence. The next frontier is to scale not only how many hours we collect, but how much learnable physical information each hour contains.

> For years, one of the central questions in robotics has been whether Physical AI can follow a scaling path similar to language and vision.

关联一手材料：

- Beyond 1M Hours: The Data Scaling Laws of Physical AI (MI-RSCH-001)（Maxinsights · Official Engineering Blog）· [原站](https://www.maxinsights.ai/beyond-1m-hours.html) · [本地原件](../../../../raw/7cd8c0adb7118dba4b0d396babe2d976c18bcccde2eea617d5da32bb6529592a) · 版本 `digest-material-7cd8c0adb7118dba4b0d396babe2d976c18bcccde2eea617d5da32bb6529592a@2`
  > The first million hours showed that human experience can scale physical intelligence. The next frontier is to scale not only how many hours we collect, but how much learnable physical information each hour contains. — 原文提取
- CORRECTING and REPLACING Waymo, Google and Microsoft Alums Raise \$30M to Build the Data Layer for Physical AI（Maxinsights（公司更正新闻稿，Business Wire分发））· [原站](https://www.businesswire.com/news/home/20261022672609/en/) · [NotebookLM](https://notebook.google.com/notebook/cac99041-d3b9-449e-a192-12bb4b1ad391) · [Drive](https://drive.google.com/file/d/1Xonxn_FFjceKhKst7wQ9j_XCtTCsQMOX/view?usp=drivesdk) · 版本 `digest-material-205fe390ebab7205efa6a019de548b78d5f1ce3b5a6f423c2a349f1083c19f8c@1`
  > Maxinsights, the company building the data layer for physical AI, today announced \$30 million in seed funding led by PeakXV, with participation from Tola Capital, South Park Commons, INCE Capital, and Alumni Ventures. — 原文提取

### [Maxinsights Egocentric Data Now Embedded in the Training of Leading Robotic Foundation Models](../../blogs/Maxinsights%20Egocentric%20Data%20Now%20Embedded%20in%20the%20Training%20of%20Leading%20Robotic%20Foundation%20Models.md)

2026-05-18 · 来源：Maxinsights · Official Engineering Blog · 状态：有来源缺口

[单篇导读（blogs/）](../../blogs/Maxinsights%20Egocentric%20Data%20Now%20Embedded%20in%20the%20Training%20of%20Leading%20Robotic%20Foundation%20Models.md) · [微信原件](../../../../raw/227c1724da57a7f3e5888e5d1fa96a76699a53c7809f1e936615c99ae5ab09bd) · 固定版本 `digest-material-227c1724da57a7f3e5888e5d1fa96a76699a53c7809f1e936615c99ae5ab09bd@1`

> Title: Maxinsights Egocentric Data Now Embedded in the Training of Leading Robotic Foundation Models Subtitle: Datasets collected across six continents and powered by Maxinsights' engineering-led pipeline are helping train next-generation embodied AI systems, including Genesis AI's newly unveiled GENE-26.5.

> Maxinsights, a Silicon Valley data infrastructure company backed by Tola Capital, today shared that its globally distributed egocentric datasets are now a foundational input for the leading robotic foundation models in development today.

关联一手材料：

- Maxinsights Egocentric Data Now Embedded in the Training of Leading Robotic Foundation Models（Maxinsights · Official Engineering Blog）· [原站](https://www.linkedin.com/pulse/maxinsights-egocentric-data-now-embedded-training-leading-myp4c) · [本地原件](../../../../raw/227c1724da57a7f3e5888e5d1fa96a76699a53c7809f1e936615c99ae5ab09bd) · 版本 `digest-material-227c1724da57a7f3e5888e5d1fa96a76699a53c7809f1e936615c99ae5ab09bd@1`
  > Title: Maxinsights Egocentric Data Now Embedded in the Training of Leading Robotic Foundation Models Subtitle: Datasets collected across six continents and powered by Maxinsights' engineering-led pipeline are helping train next-generation embodied AI systems, including Genesis AI's newly unveiled GENE-26.5. — 原文提取
