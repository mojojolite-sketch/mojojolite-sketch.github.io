---
title: "OpenAI和Google都在买单：39 人撑起数据独角兽"
type: blog_digest
sector: "AI训练与数据"
source: "Databento 官方博客 (Series C)"
published_at: "2026-11-16"
raw_sha256: "f5b0941cb8c9dc944cb9d4499752faac12385574d601f129abaeaec12393951f"
material_version: "digest-material-f5b0941cb8c9dc944cb9d4499752faac12385574d601f129abaeaec12393951f@1"
origin_url: "https://databento.com/blog/databento-raises-100m-series-c-at-a-1-1b-valuation"
trigger_source: "QuantML"
trigger_url: "https://mp.weixin.qq.com/s/7l6t3UOE4vrOBfJpoee1Ew"
user_comments: ""
status: "processed_with_gaps"
primary_topic: "数据基建与交互RL环境"
topic_confidence: 0.8047
---

<a id="digest-f5b0941cb8c9dc94"></a>
# OpenAI和Google都在买单：39 人撑起数据独角兽

2026-11-16 · Databento 官方博客 (Series C) · 有来源缺口

[本地原件归档](../../../raw/f5b0941cb8c9dc944cb9d4499752faac12385574d601f129abaeaec12393951f) · 固定材料版本 `digest-material-f5b0941cb8c9dc944cb9d4499752faac12385574d601f129abaeaec12393951f@1` · [一手原站](https://databento.com/blog/databento-raises-100m-series-c-at-a-1-1b-valuation) · [触发线索（QuantML）](https://mp.weixin.qq.com/s/7l6t3UOE4vrOBfJpoee1Ew)

## 深度拆解与复核

## 场景与利益标注

本文原件为量化中文社群 `QuantML`（2026-11-16）对金融数据基建商 Databento Series C 融资及相关技术路线的二次编译评述（已降格为 `trigger_source`）。==口径与利益披露==：核心成长叙事源自 CEO Christina Qi 与 CTO Luca Lin 在 2026-11 Series C 融资周期及此前媒体访谈的官方发声，创始人存在突出“极简人数盈利”“非 AI 标签却获顶级 AI 实验室买单”与“一次性重资产高杠杆”的融资沟通动机，部分跨期数据在中文编译过程中被混用或省略前提。

## 一手信源穿透与工程/财务核查

### 一、融资时间线、客户版图与商业模式核验

- ✅ Series C 融资、估值与 39 人盈利规模属实（本工作台核查）：据 [Databento Series C 官方公告](https://databento.com/blog/databento-raises-100m-series-c-at-a-1-1b-valuation)（2026-11-12），公司完成 \$100M Series C 融资，投后估值达 \$1.1B，由早期 Pre-revenue 投资方 [Fifth Down Capital](https://fifthdown.com/) 领投，Fitch Ventures 作为新战略方参投，NEA、DRW Venture Capital、Tribe Capital、Redpoint Ventures、Hedosophia 等老股东跟投；公司全员不足 40 人（39 人、工程师不足 30 人）且保持盈利，并已签下全球前六大前沿 AI 实验室中的 5 家。
- ⚠️ 融资间隔与营收增速存在显著跨期拼接（本工作台核查）：QuantML 称“刚融到的 1 亿美元甚至根本没动”且仅回忆早年 A 轮资金险情，却遗漏了 **2026 年 7 月 9 日刚完成的 \$97M Series B**（NEA 领投、超额认购需求超 \$300M，见 [Series B 官方公告](https://databento.com/blog/databento-raises-97-million-series-b)），Databento 实际在 4 个月内连续融资 \$197M。同时，文中“2024 年底 24 人时营收增长超 900% 并跨过盈亏平衡”混用了两段披露：2024 年 10 月 \$10M Series A 延期（累计 \$30M）披露年营收增长 985%；2026 年 7 月 Series B 公告披露以 24 人团队提前实现月度盈利、同比营收增长 6.65 倍且企业留存率达 97%；Series C 公告则披露自 B 轮以来四个月营收翻倍以上。
- ⚠️ 团队结构数据属实，但客户点名与 90% 营收占比缺少公告背书（本工作台核查）：[Databento About 页](https://databento.com/about) 确证团队 86% 具科学与技术背景、46% 具买方机构经验（买方履历包括 Two Sigma、Citadel Securities、Flow Traders、Tower Research 等与创始人前身 Domeyard LP，其在 MIT 创立并曾达 \$7B 日交易量）。然而 Series C 官方通稿并未公开全部 5 家 AI 实验室名单或 Snowflake 合同细节（OpenAI 与 NVIDIA 见于部分报道引述，Google 与 Snowflake 仅见市场传闻或案例片段），“大型金融机构与 AI 实验室占 90% 营收”亦未见经审计财务报表验证。

| 核查维度 | QuantML 二手编译口径 | 一手公告与文档核实结果 | 本工作台核查结论与偏差说明 |
| :--- | :--- | :--- | :--- |
| 融资节奏与现金 | 刚拿 \$100M Series C 且“没动”，此前靠过桥撑过 A 轮 | 2026-07 刚由 NEA 领投 \$97M Series B，2026-11 再融 \$100M Series C（估值 \$1.1B） | 二手文漏掉 4 个月前的 \$97M B 轮，四个月两轮合计融资 \$197M |
| 盈利人数与增速 | 2024 年底 24 人盈亏平衡、营收增超 900% | 2024-10 A 轮延期增 985%；2026-07 B 轮披露 24 人盈利、增 6.65 倍（留存 97%） | 将 2024 年 A 轮延期增速与 2026 年 B 轮 24 人盈利时间点错位合并 |
| 技术占比与买方 | 39 人中 86% 技术背景，近一半来自顶级买方 | About 页披露 86% 科技背景、46% 机构买方经验、工程师不足 30 人 | 核心比例一致（本工作台核查：86% 并非部分媒体的 AI VC 占比误植） |
| 客户与营收结构 | OpenAI、Google、NVIDIA、Snowflake 买单，大客户占 90% | Series C 公告仅写“签下前 6 大前沿 AI 实验室中的 5 家” | 具体 5 家完整名单及 90% 营收占比未见官方公告逐项披露 |

### 二、双半区引擎、OPRA 50Gbps 硬件抓包与 DBN 协议穿透

- ✅ C++23 解析器与 Rust 分发网关的技术分界线核实一致（本工作台核查）：据 [Why we didn't rewrite our feed handler in Rust](https://databento.com/blog/why-we-didnt-rewrite-our-feed-handler-in-rust)（2025-10），Databento 在面向交易所协议的下半区保留现代 C++23，核心原因在于高频循环外部预分配缓冲的原地覆写、子组件自引用视图若强改 Rust 借用检查器需引入引用计数开销，且 C++23 编译期模板比 Rust 宏更能低样板代码兼容多版本协议；面向公网长连接的上半区网关则以 Rust 异步运行时实现无 GC 暂停与慢节点背压隔离，两者通过无锁共享内存队列通信，CME 等实盘网关中位内部延迟达 6.1 微秒、架构吞吐达 1400 万条/秒。
- ✅ OPRA 50Gbps 微突发与 DBN 零拷贝参数有官方工程博客支撑（本工作台核查）：据 [Beyond 40 Gbps: Processing OPRA in real-time](https://databento.com/blog/beyond-40-gbps-processing-opra-in-real-time) 与 [DBN 官方文档](https://databento.com/docs/standards-and-conventions/databento-binary-encoding)、[GitHub `databento/dbn`](https://github.com/databento/dbn)，OPRA.PILLAR 覆盖超 140 万期权合约、日均更新超 2000 亿条，从 48 通道扩至 96 条 UDP 组播后瞬时微突发超过 40–50 Gbps（OPRA 50Gbps 峰值）。团队部署 Napatech 100G FPGA 智能网卡（分配 8 分片、每分片 4 GB 物理缓冲并动态调优通道分布）、DPDK 内核旁路、双网卡收发隔离及精度 25 纳秒以内的 PTP GPS 授时系统，经 NVMe 缓冲阵列流式压缩落盘至超 100 PB 存储集群。开源 DBN 格式采用小端序固定 C 兼容结构体、64 位定点整数价格、4 维纳秒时间戳与自顶向下 L3 全订单簿无损派生，在 Google Cloud 虚拟机单核实测全订单簿回放超 1910 万条/秒（高于传统彭博终端、FactSet 文本/人工界面及普通 Python/GPU 预处理链路）。
- ⚠️ “重资产一次性固定成本”与“零加价透传”的商业边界限制（本工作台推断）：在 Equinix NY4、CyrusOne Aurora、Equinix FR2 部署裸金属并接入 CME、Nasdaq、ICE 等 70 余家交易所确实形成一次建网后的边际带宽杠杆（历史数据按未压缩二进制 \$0.50/GB 计费），但 4 个月连融 \$197M 说明全球扩点、OPRA 扩容引发的硬件代际升级与 100 PB 多区冗余仍属重资本消耗。同时，零加价透传交易所牌照费虽免除了垫资与坏账风险，却也将上游交易所对非展示性数据（Non-display）提价的风险直接转嫁给下游，Databento 自身无法截留牌照溢价，长期毛利空间完全取决于机器原生 API 消费量的指数级扩张。

### 观点与可反驳条件

- ==观点==：==Databento 的真实壁垒不是“AI 叙事”，而是用 86% 技术密度与 buy-side 工程老兵（C++23/DPDK/Napatech 100G FPGA/DBN 零拷贝）将原本服务人类眼球的交易所原始报文改造成按 GB 计费（\$0.50/GB）的机器原生基础设施；但 4 个月连融 \$197M 证明全球机房扩点与 100 PB 级全量抓包仍具显著持续资本开支，且交易所牌照零加价透传使平台难以分享上游定价权==。
- ==推翻条件==：
  1. ① 若 2027 年底前 CME、Nasdaq 或 OPRA 等核心交易所大幅收回非展示性数据转售授权或转向自有云原生直供（导致 Databento 无法以零加价透传吸引 AI 实验室与量化客户），则“中间管道凭借低成本按量 API 持续收割机器原生流量”的核心护城河判断将被推翻。
  2. ② 若 Databento 在未来公开融资或 IPO 披露文件中显示其经审计毛利率长期低于 65%（因 100 PB 存储扩容、多云带宽与全球共置机柜折旧随客户请求量同步抬升）或 39 人扩张至 150 人以上后人均营收显著下滑，则“固定硬件成本跑出极陡峭软件级经营杠杆”的判断将被推翻。

---

## 原文摘录与一手信源存证

> 全球前六大前沿 AI 实验室里，有五家是它的签约客户。如果不是上周突然宣布拿下 1 亿美元 C 轮融资、把估值推上 11 亿美元，很多人甚至没听过这家叫 Databento 的小团队。
> — 原文摘录，文字段落 1；证据 `digest-material-f5b0941cb8c9dc944cb9d4499752faac12385574d601f129abaeaec12393951f-excerpt-1@2`

> Databento 将交易所牌照费以零加价方式直接转由下游客户承担，自身只收取纯粹的数据处理与传输服务费，避开了垫资与坏账风险。
> — 原文摘录，文字段落 2；证据 `digest-material-f5b0941cb8c9dc944cb9d4499752faac12385574d601f129abaeaec12393951f-excerpt-2@2`

一手材料：

- Databento raises \$100M Series C at a \$1.1B valuation · Databento 官方博客 (Series C) · [原站](https://databento.com/blog/databento-raises-100m-series-c-at-a-1-1b-valuation) · [主体档案：Databento](../entities/companies/Databento.md) / [主体档案：Christina Qi](../entities/people/Christina%20Qi.md) / [主体档案：Fifth Down Capital](../entities/funds/Fifth%20Down%20Capital.md) · [本地原件](../../../raw/9e79ddc37f5777c043e6f559d6e686522a305aefc7a4e405798f9443af5735a3)
  材料版本 `digest-material-9e79ddc37f5777c043e6f559d6e686522a305aefc7a4e405798f9443af5735a3@1`；获取方式 `web_search_verified_primary`。
  > - Databento announced a \$100 million Series C financing round on November 12, 2026, reaching unicorn status at a \$1.1 billion post-money valuation. — 原文提取
  > - Lead Investor: Fifth Down Capital (early pre-revenue investor; Andrew Spellman, founder and CEO of Fifth Down Capital). — 原文提取
- GitHub - databento/dbn: Databento Binary Encoding (DBN) · Databento (GitHub) · [原站](https://github.com/databento/dbn) · [主体档案：Databento](../entities/companies/Databento.md) · [本地原件](../../../raw/d2b6398b5d217aeef0fa66fb26bab521181ce1cfd328a9d49cef2c885975ac8b)
  材料版本 `digest-material-d2b6398b5d217aeef0fa66fb26bab521181ce1cfd328a9d49cef2c885975ac8b@1`；获取方式 `http_full_text_snapshot`。
  > coding (DBN) is an extremely fast message encoding and storage format for normalized market data. — 原文提取
  > The DBN specification includes a simple, self-describing metadata header and a fixed set of struct definitions, which enforce a standardized way to normalize market data. — 原文提取
- Databento raises \$97M Series B · Databento 官方博客 (Series B) · [原站](https://databento.com/blog/databento-raises-97-million-series-b) · [主体档案：Databento](../entities/companies/Databento.md) · [本地原件](../../../raw/4d81af1d7182fc3190fecf88563fd8ebcf80eb188397e51d76cfa0d82952ea7c)
  材料版本 `digest-material-4d81af1d7182fc3190fecf88563fd8ebcf80eb188397e51d76cfa0d82952ea7c@1`；获取方式 `web_search_verified_primary`。
  > - Databento closed a \$97 million Series B round on July 9, 2026, led by New Enterprise Associates (NEA), with over \$300 million in oversubscribed demand. — 原文提取
  > - Participating investors included DRW Venture Capital, Redpoint Ventures, Tribe Capital, Alumni Ventures, Blindspot Ventures, Cross Creek, Fifth Down Capital, Motley Fool Ventures, Operator Collective, TGVP, and Trousdale Ventures. — 原文提取
- Why we didn't rewrite our feed handler in Rust · Databento 工程博客 (C++23 vs Rust) · [原站](https://databento.com/blog/why-we-didnt-rewrite-our-feed-handler-in-rust) · [主体档案：Databento](../entities/companies/Databento.md) · [本地原件](../../../raw/aa4df9111f53c292cdb880b15d2dc1b7619fc6690b8d37365d669da86b58363f)
  材料版本 `digest-material-aa4df9111f53c292cdb880b15d2dc1b7619fc6690b8d37365d669da86b58363f@1`；获取方式 `web_search_verified_primary`。
  > - Databento maintains a hybrid architecture separating its low-level feed handlers from its client-facing network distribution gateways. — 原文提取
  > - Core feed handlers were rewritten in modern C++23 rather than Rust to allow in-place memory buffer reuse outside tight processing loops, self-referential subcomponent views without reference-counting overhead, and compile-time template deduplication across evolving exchange protocol versions. — 原文提取
- Beyond 40 Gbps: Processing OPRA in real-time · Databento 工程博客 (OPRA) · [原站](https://databento.com/blog/beyond-40-gbps-processing-opra-in-real-time) · [主体档案：Databento](../entities/companies/Databento.md) · [本地原件](../../../raw/762238dd5546ea9a1ff71886efd6ded383829e8dcbf5b41c08fceb5ea1933689)
  材料版本 `digest-material-762238dd5546ea9a1ff71886efd6ded383829e8dcbf5b41c08fceb5ea1933689@1`；获取方式 `web_search_verified_primary`。
  > - Options Price Reporting Authority (OPRA.PILLAR) consolidates US equity options across \>1.4 million active contracts and generates over 200 billion regional quotes and NBBO updates per day. — 原文提取
  > - OPRA expanded from 48 to 96 UDP multicast lines/channels; microburst bandwidth spikes past 40-50 Gbps during market open and close, exceeding standard 10 Gbps or naive kernel network stacks. — 原文提取
- Databento Binary Encoding (DBN) Specification · Databento 官方技术文档 · [原站](https://databento.com/docs/standards-and-conventions/databento-binary-encoding) · [主体档案：Databento](../entities/companies/Databento.md) · [本地原件](../../../raw/fadf7f43f60c038a0841f7bc391635fad48e899e5e5fbe93c2b6142825074743)
  材料版本 `digest-material-fadf7f43f60c038a0841f7bc391635fad48e899e5e5fbe93c2b6142825074743@1`；获取方式 `web_search_verified_primary`。
  > - DBN is Databento's normalized binary encoding and storage format across live streaming, historical streaming, and batch flat files. — 原文提取
  > - Features a self-describing metadata header, fixed-size little-endian C-compatible struct layouts (MBO/L3, MBP, Trades, OHLCV), 64-bit fixed-point integer prices, and nanosecond-resolution timestamps. — 原文提取

归属与范围：已通过 search\_web 穿透核验 Databento 官方 Series C 公告（2026-11-12）、Series B 公告（2026-07-09）、C++23/Rust 与 OPRA 工程博客、DBN 技术文档及直采 HTTP 200 的 GitHub 官方仓库 databento/dbn，将 QuantML 二手编译微信文降格为 trigger\_source，并显式标出跨期口径混用与未披露财务缺口。

来源缺口：

- `unavailable`：沙盒出口策略限制直接拉取 databento.com 全页 HTML（HTTP 403 policy），已通过 search\_web 核验官方 Series C/B 公告、C++23/Rust 与 OPRA 工程博客及 DBN 文档摘要快照；完整页面逐字原稿待出沙盒补抓 [线索](https://databento.com/blog/databento-raises-100m-series-c-at-a-1-1b-valuation)
- `not_disclosed`：Databento 未对外披露具体年度/季度营收绝对额、毛利率、EBITDA 利润率、\$1.1B 估值对应 ARR 倍数，以及“大型金融机构与 AI 实验室占 90% 营收”的经审计财务明细 [线索](https://databento.com/blog/databento-raises-100m-series-c-at-a-1-1b-valuation)
- `not_disclosed`：官方公告仅说明签约前六大前沿 AI 实验室中的 5 家，未完整披露全部 5 家实验室名单及 Snowflake/Google 具体合同金额；早期 A 轮签字后违约投资方名称与 CTO Luca Lin 独立公开社交主页亦未核实到官方索引 [线索](https://databento.com/blog/databento-raises-100m-series-c-at-a-1-1b-valuation)

[返回赛道总览](../赛道总览.md#digest-f5b0941cb8c9dc94) · [返回导读索引](README.md) · [主体档案库](../entities/README.md)
