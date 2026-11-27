---
title: "The a16z Show: The $1 Trillion AI Buildout (State of Markets) & Raghu Raghuram on AI, Robotics and the Rebirth of Infrastructure"
type: blog_digest
sector: "AI应用与开发工具"
source: "The a16z Show · State of Markets (Sep 2026)"
published_at: "2026-09-30"
raw_sha256: "e78fd425cbe6b7f13e7c1ce42bcacf06f46236b51908735364feb0aba0e63100"
material_version: "digest-material-e78fd425cbe6b7f13e7c1ce42bcacf06f46236b51908735364feb0aba0e63100@2"
origin_url: "https://a16z.com/podcast/the-1-trillion-ai-buildout-state-of-markets/"
trigger_source: "The a16z Show"
trigger_url: "https://a16z.com/podcasts/a16z-podcast/the-1-trillion-ai-buildout-state-of-markets"
user_comments: ""
status: "processed_with_gaps"
primary_topic: "其他/独立议题"
topic_confidence: 0.722
---

<a id="digest-e78fd425cbe6b7f1"></a>
# The a16z Show: The \$1 Trillion AI Buildout (State of Markets) & Raghu Raghuram on AI, Robotics and the Rebirth of Infrastructure

2026-09-30 · The a16z Show · State of Markets (Sep 2026) · 有来源缺口

[本地原件归档](../../../raw/e78fd425cbe6b7f13e7c1ce42bcacf06f46236b51908735364feb0aba0e63100) · 固定材料版本 `digest-material-e78fd425cbe6b7f13e7c1ce42bcacf06f46236b51908735364feb0aba0e63100@2` · [一手原站](https://a16z.com/podcast/the-1-trillion-ai-buildout-state-of-markets/) · [触发线索（The a16z Show）](https://a16z.com/podcasts/a16z-podcast/the-1-trillion-ai-buildout-state-of-markets)

## 深度拆解与复核

- 口径与利益：原始线索将 [a16z Growth《The $1 Trillion AI Buildout | State of Markets》（2026-09-30）](https://a16z.com/podcast/the-1-trillion-ai-buildout-state-of-markets/)（主讲 David George、Sarah Wang、Alex Immerman、Santiago Rodriguez）与前 VMware CEO Raghu Raghuram 联合 Ben Horowitz、Martin Casado、David George 录制的《[AI, Robotics, and the Rebirth of Infrastructure（2025-10-27）](https://a16z.com/podcast/raghu-raghuram-ai-robotics-and-the-rebirth-of-infrastructure/)》合并整理。作为一级市场最大规模的 AI 算力、机器人与企业应用投资方，a16z 在[《State of Markets》88 页完整报告（2026 年 9 月）](https://a16z.com/state-of-markets-report-2) 中天然具有论证「万亿美元 CapEx 并非泡沫且重资产与 Agent 基础设施将持续重估」的商业激励，下文先拆解万亿基建与系统软件重构机制，再对关键口径做原位核查。

### 一、$1 Trillion AI 周期的宏观算力机制与系统软件重构

1. 「Everything Cycle」与万亿美元 CapEx 传导链（[State of Markets 2026-09 报告](https://a16z.com/state-of-markets-report-2)）
   - 超大规模算力投资由盈利现金流与债务协同接力：Alphabet、Amazon、Meta、Microsoft、Oracle 五家超大规模云厂合计资本开支从 2025 年 $416B 跳升至 2026 年预计 ~$780B，并预期自 2027 年起突破每年 $1T（万亿美元）以上；当前科技设备、软件与研发已占全美资本开支约 55%，科技板块占美股总市值近 40%（全球前十大市值公司中有 8 家为美国科技企业），按占 GDP 比例计算，本轮算力扩建强度已超越 19 世纪铁路建设周期。尽管五大云厂自由现金流（FCF）预计在 2028 年前因重资产投入明显承压（随后随折旧摊薄与收入兑现回升），但 Microsoft、Google 与 Amazon 合计高达 ~$1.7T 的云积压订单（Cloud Backlog）、模型公司累计融资超 $350B，以及 Google 披露 7–8 年老一代 TPU 仍保持 100% 满载、旧 GPU 租金稳健，证明算力紧张至少延续至 2028 年。
   - 泡沫论反证（估值压缩 vs 盈利驱动）：自近四年前首期 [State of Markets](https://a16z.com/state-of-markets/) 发布以来，市场累计上涨 90%（年化 17%），但过去一年科技股在业绩推动下上涨逾 20% 的同时，估值倍数反而较 5 年均值压缩约 20%；S&P 500 整体远期市盈率低于 20x（存储芯片周期股前瞻 PE 仅 6x–7x），与 2000 年科网泡沫期龙头 100x PE 形成显著区隔。
   - 从 Bits 转向 Atoms 的物理溢出：全球至 2040 年共需 ~$90T 基础设施投资（电力、电网、水务、军工与工厂）。针对「数据中心推高居民电价」的流行叙事，报告直接引用 Watten、Bistline、Blanford（2026 年 8 月论文）实证：因电网属高固定成本共享基础设施，数据中心容量每增加 10%，当地平均居民零售电价反而下降约 0.4%（40 bps；2019–2024 年间数据中心扩容 160% 的州居民电价累计下降 6%）。

2. Raghu Raghuram（前 VMware CEO）与 David George：确定性应用 → 概率性 Agent 的双路径重塑
   - 底层基础设施重写（[Rebirth of Infrastructure](https://a16z.com/podcast/raghu-raghuram-ai-robotics-and-the-rebirth-of-infrastructure/)）：Raghu Raghuram 曾领导 VMware 营收从数千万美元扩至 $13B+ 并以 $1.3B 收购 Martin Casado 创立的 Nicira；他与团队指出，过去二十年虚拟化（VMware / Kubernetes）面向「人类编写的确定性应用」，负载可预测、状态结构化；而 AI Agent 与具身机器人运行的是「概率性模型驱动的并发探索循环」，单次任务触发大量夜间长程与并发沙盒执行（如 OpenRouter Agent Token 消耗激增 14 倍），倒逼底层的计算调度、MicroVM 隔离、数据中心能源感知与机器人运维全面重写（直接印证本工作台对 [NVIDIA](../entities/companies/NVIDIA.md) 算力生态、[Daytona](../entities/companies/Daytona.md) 沙盒与 [Cursor (Anysphere)](../entities/companies/Cursor%20%28Anysphere%29.md) 并行编程底座的观察）。
   - 应用层「Two Paths」与商业软件分化（[Two Paths Left for Software, 2026-03-23](https://a16z.com/there-are-only-two-paths-left-for-software/)）：David George 与 Sarah Wang 提出公有云软件（75% 已盈利、仅 30% 维持 >=20% 增长，>=30% 增速者不足 5 家）已告别中间地带，走势分化为 Cybersecurity / Observability > Vertical SaaS > Horizontal Apps：
     - 路径一（+10+ pct 增速重构）：用净新增 AI 产品取代传统按人头席位计费，转向 Token、用量与结果计费（典型如 ServiceNow AI ACV 破 $1B、Agent 部署量 9 个月增 9 倍；Chime 借 Decagon 连续 4 年每年降本 >10%；Shopify Sidekick 推动新商户 15 天内达 5 单比例升 8%）。
     - 路径二（40%–50%+ 真实含 SBC 营业利润率）：若无望再加速，就必须效仿 Broadcom CEO Hock Tan 重组 VMware（精简产品栈转订阅制、2024 财年调整后 EBITDA 利润率指引达 61%），大幅压缩中层管理与稀释成本（这也反向成就了本库已建档的 [Nutanix](../entities/companies/Nutanix.md) 凭 AHV 承接 VMware 涨价流失客户）。同时在推理成本端，Databricks 智能路由降本 35%、Hebbia 缓存降本 10 倍、EliseAI 小模型微调降本 60%，验证「应用层毛利取决于单任务求解成本，而非盲目调用最贵模型」。

### 二、核心量化指标原位核查、口径纠偏与周期张力（✅ / ⚠️）

| 观测维度 | 公开宣称或摘要数字 | 上游一手信源与本工作台核查结论（✅ / ⚠️） |
| :--- | :--- | :--- |
| 宏观 CapEx 与算力供给窗口 | 科技占全美 CapEx ~55%、算力紧缺延至 2028 年 | ✅ 与 [State of Markets 2026-09 报告](https://a16z.com/state-of-markets-report-2) 及当期播客一致：五大云厂 2025 年 $416B → 2026 年 ~$780B → 2027 年 >$1T；Microsoft / Google / Amazon 合计云积压订单 ~$1.7T；部分数据中心物资交期已排至 2028 年（即便是 OpenAI 推出 $2,000/月 Pro 档也曾因算力紧张暂停新开订阅）。 |
| 「2% 渗透率」的真实分母纠偏 | 易被误读为「全美只有 2% 公司用了 AI」 | ⚠️ 口径精密拆解（本工作台核查）：报告实际上拆为两层统计——企业端「S&P 500 已有 69% 上线 AI 部署，30% 汇报可量化效果，但真正做到持续追踪核心指标（metric tracked over time）的经常性流程仅 ~2%」（多数仍停留在 Microsoft 365 Copilot 的 3,000 万付费席位级浅层使用）；消费端则是「仅略超 2% 美国家庭拥有付费 AI 订阅」（对比 Amazon Prime 超 2 亿户、Netflix 约 7,000 万户）。 |
| 8x–20x 用户幂律分化 | 重度用户支出高达中位数用户 8x–20x | ✅ 核实双组一手锚点：YipitData 面板显示前 1% 企业的 AI 供应商中位支出是前 10% 的 ~8 倍（前 1% 单体总支出逼近第 2%–10% 之和）；在 a16z 原生 AI 组合公司内部，头部用户月均消费 $7,500–$9,000，对比中位数用户 $200–$400（1–2 个叠加订阅），实测差距超过 20 倍；前瞻性 AI 原生公司给员工配备工具预算达人均成本 10%（对比大企业约 1%）。 |
| Agent 电商与广告利润池博弈 | Muse / Instinct 分流传统搜索 | ⚠️ 利益分歧敞口：报告专门剖析 Amazon 拒绝接入 Meta Muse 而 Instacart 选择接入的博弈——Amazon 广告收入已超过全部营业利润（逾 $70B），Meta 与 Google 在发达市场单用户年创收 $200+。若 Agent 接管高毛利决策（保险、酒店等），传统竞价广告利润池究竟是「被交易增量做大」还是「被比价代理抽干」，目前尚无实证定论。 |

- ⚠️ 本工作台推断（宏观 CapEx 与微观交付剪刀差）：将「五大云厂年化 CapEx 跨过 $1T」与「仅 2% S&P 500 真正追踪 AI 指标」并置，恰恰暴露出本轮周期最核心的估值锚矛盾——上游算力资产（[NVIDIA](../entities/companies/NVIDIA.md) 芯片、内存与电力基建）按 100% 远期 Agent 并发负载提前落子重资产，而下游 98% 的传统企业常规工作流仍卡在「[Mercor](Mercor%20APEX-Agents%20%26%20AI%20Consumer%20Index%20%28ACE%29_%20Enterprise%20Multi-App%20Simulated%20Worlds%20vs%20Consumer%20Web-Grounding%20.md) APEX-Agents 揭示的长程 Pass^8 <=13.4% 不可靠、权限隔离与合规审计缺失」的交付深水区；如果 2027–2028 年间那 98% 的浅层试用未能跨过可度量 ROI 门槛，一级市场零折价（二级市场 58% 员工要约参与率反映的高信仰）与云厂 2028 年 FCF 回正假设将同步面临重估压力。

### 观点与可反驳条件

- ==观点==：==a16z《State of Markets (Sep 2026)》揭示的并非简单的「AI 万亿算力狂热」，而是一场由盈利支撑但高度分化（69% 浅层部署 vs 2% 持续追踪、重度用户 20x+ 支出、公共软件被迫在「+10 pct AI 加速」与「Broadcom 式 61% EBITDA 缩表」间二选一）的结构性清洗==；2026–2028 年超额回报将集中于能把单人 Copilot 升级为多人协同（Multiplayer）Agent 沙盒编排与模型路由降本（-35% 至 -60%）的基础设施商，以及能撬动剩余 98% 未追踪企业流程的垂直执行引擎。
- ==推翻条件==：
  1. 若截至 2027-Q4，S&P 500 持续追踪指标的深度 AI 工作流渗透率仍停留在 <5%，且五大超大规模云厂因推理变现周期拉长或老旧 GPU/TPU 残值率骤降，在财报电话会中实质性下调 2028 年资本开支指引逾 15%，则「算力供需缺口延续至 2028 年且 2028 年 FCF 如期强劲回升」的核心假设将被推翻。
  2. 若截至 2027-12-31，受开源低价本地模型与推理路由压缩影响，头部原生 AI 组合中前 1% 重度用户（$7,500–$9,000/月）的 ARPU 出现 >=30% 回落，同时公共垂直 SaaS 头部公司未能在 12–18 个月窗口内交出 +10% 以上的收入加速（Path One），则应用层按 Token/结果计费取代席位费实现高净留存的叙事将被证伪。

---

## 原文摘录与一手信源存证

> 【信源巡检核心摘要】 a16z 增长基金合伙人 David George、Sarah Wang、Alex Immerman 与前 VMware CEO Raghu Raghuram、Martin Casado 深度复盘 2026 年万亿美元级 AI 基础设施扩建周期：剖析超大规模资本开支（CapEx）向企业级软件 ARR 转化率、后训练与 Agent 沙盒驱动的底层系统软件重构，以及具身机器人与物理基础设施的商业化拐点。
> — 原文摘录，文字段落 1；证据 `digest-material-e78fd425cbe6b7f13e7c1ce42bcacf06f46236b51908735364feb0aba0e63100-excerpt-1@1`

一手材料：

- The a16z Show: The \$1 Trillion AI Buildout (State of Markets) & Raghu Raghuram on AI, Robotics and the Rebirth of Infrastructure · The a16z Show · [原站](https://a16z.com/podcasts/a16z-podcast/the-1-trillion-ai-buildout-state-of-markets) · [主体档案：a16z](../entities/funds/a16z.md) / [主体档案：David George](../entities/people/David%20George.md) / [主体档案：Sarah Wang](../entities/people/Sarah%20Wang.md) · [本地原件](../../../raw/5dbb686ebe140944572019bae8538695f919af7965132897419832c31ccefdd0)
  材料版本 `digest-material-5dbb686ebe140944572019bae8538695f919af7965132897419832c31ccefdd0@1`；获取方式 `tg_approved_full_text`。
  > Important Disclosures This presentation is provided for informational purposes only. Furthermore, this content is not investment advice, nor is it intended for use by any investors or prospective investors in any a16z funds. — 原文提取
  > © 2026 Andreessen Horowitz. All rights reserved worldwide. — 原文提取
- The \$1 Trillion AI Buildout | State of Markets · a16z Growth (David George, Sarah Wang, Alex Immerman & Santiago Rodriguez) · [原站](https://a16z.com/podcast/the-1-trillion-ai-buildout-state-of-markets/) · [主体档案：a16z](../entities/funds/a16z.md) · [本地原件](../../../raw/d6d22652ca0befbfbdda64573f29c30be270539d7bb945be4858e03321796463)
  材料版本 `digest-material-d6d22652ca0befbfbdda64573f29c30be270539d7bb945be4858e03321796463@1`；获取方式 `http_full_text`。
  > a16z’s David George, Sarah Wang, Alex Immerman, and Santiago Rodriguez unpack 25 key charts from the latest State of Markets presentation, from the scale of the AI infrastructure buildout to what adoption looks like inside companies today. — 原文提取
  > They examine why rising markets have so far been supported by earnings rather than multiple expansion, why hyperscaler CapEx is approaching \$1 trillion annually, and why demand for compute continues to outrun supply. — 原文提取
- State of Markets (September 2026, 88-Slide Official Presentation) · Andreessen Horowitz (a16z Growth) · [原站](https://a16z.com/state-of-markets-report-2) · [主体档案：a16z](../entities/funds/a16z.md) · [本地原件](../../../raw/fae8e1fa186004c20c650a86f07da7481be2c3c5cb1594c5a4b35bb36280e766)
  材料版本 `digest-material-fae8e1fa186004c20c650a86f07da7481be2c3c5cb1594c5a4b35bb36280e766@1`；获取方式 `http_full_text`。
  > Important Disclosures This presentation is provided for informational purposes only. Furthermore, this content is not investment advice, nor is it intended for use by any investors or prospective investors in any a16z funds. — 原文提取
  > © 2026 Andreessen Horowitz. All rights reserved worldwide. — 原文提取
- Raghu Raghuram: AI, Robotics, and the Rebirth of Infrastructure · Andreessen Horowitz (a16z) · [原站](https://a16z.com/podcast/raghu-raghuram-ai-robotics-and-the-rebirth-of-infrastructure/) · [主体档案：a16z](../entities/funds/a16z.md) · [本地原件](../../../raw/84b3ea16942850fd06b4a7f151e9ff4ad45ba36d27e1f815846a7939d40f3d56)
  材料版本 `digest-material-84b3ea16942850fd06b4a7f151e9ff4ad45ba36d27e1f815846a7939d40f3d56@1`；获取方式 `http_full_text`。
  > From Netscape to VMware, Raghu Raghuram has been at the center of nearly every major inflection point in enterprise technology. — 原文提取
  > They discuss how VMware scaled from tens of millions to over \$13 billion in revenue, what it took to outlast the cloud revolution, and why AI is now triggering the biggest infrastructure reset since virtualization. — 原文提取
- There are only two paths left for software · Andreessen Horowitz (David George) · [原站](https://a16z.com/there-are-only-two-paths-left-for-software/) · [主体档案：David George](../entities/funds/David%20George.md) · [本地原件](../../../raw/e6f58a1c07fc7db2c13e0c6e94b8bbf69d02cc3fb8c9d88274a12e4104a70a08)
  材料版本 `digest-material-e6f58a1c07fc7db2c13e0c6e94b8bbf69d02cc3fb8c9d88274a12e4104a70a08@1`；获取方式 `http_full_text`。
  > Public markets have already repriced the sector, and for good reason. They are telling us software terminal value is not what it used to be. — 原文提取
  > , year over year, through genuinely new AI-native products over the course of the next 12-18 months. — 原文提取

归属与范围：已抓取并升级原 stub（e78fd425）为完整官方文本快照，同时补齐并归档 a16z 官网四份一手信源：《The \$1 Trillion AI Buildout | State of Markets》（2026-09-30，David George / Sarah Wang / Alex Immerman / Santiago Rodriguez）、《State of Markets Report Sep 2026》88 页完整 PDF 文本、Raghu Raghuram《AI, Robotics, and the Rebirth of Infrastructure》（2025-10-27）及 David George《There are only two paths left for software》（2026-03-23）。核查纠偏两处口径：其一，原站将两期不同年份播客并标题呈现，本文严格还原两期独立嘉宾与发布日；其二，将 2% 渗透率精准拆解为「S&P 500 企业 69% 已上线 vs 仅 2% 实现持续指标追踪」及「仅 ~2% 美国家庭付费订阅 AI」，并建立 a16z、Raghu Raghuram、David George、Sarah Wang、Martin Casado、VMware、Broadcom、Nicira、Anduril、NVIDIA 实体关系边。

来源缺口：

- `not_disclosed`：企业级多人协同（Multiplayer）Agent 工作流从单席位按量计费转向按结果（Outcome-based）计费后的净金额留存率（NDR）跨行业分布尚未在报告中披露。 [线索](https://a16z.com/state-of-markets-report-2)
- `unavailable`：YouTube 视频（lr3hNhA0IfQ 与 krnwd0UONP8）自动字幕接口受限于 IP 频控未拉取原始逐字句级时间戳，部分口语引述通过 State of Markets Sep 2026 88 页官方 PDF 与公开播客结构化纪要交叉核对。 [线索](https://a16z.com/podcast/the-1-trillion-ai-buildout-state-of-markets/)

[返回赛道总览](../赛道总览.md#digest-e78fd425cbe6b7f1) · [返回导读索引](README.md) · [主体档案库](../entities/README.md)
