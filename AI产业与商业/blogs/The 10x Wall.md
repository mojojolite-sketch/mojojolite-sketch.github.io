---
title: "The 10x Wall"
type: blog_digest
sector: "AI产业与商业"
source: "Tomasz Tunguz"
published_at: "2026-11-20"
raw_sha256: "f3b167bce2e979516d873eda85dff9a30d03602690a45e7fe8851b6722a91ae6"
material_version: "digest-material-f3b167bce2e979516d873eda85dff9a30d03602690a45e7fe8851b6722a91ae6@1"
origin_url: "https://tomtunguz.com/the-10x-wall/"
trigger_source: "Tomasz Tunguz"
trigger_url: "https://tomtunguz.com/the-10x-wall/"
user_comments: ""
status: "processed_with_gaps"
primary_topic: "模型经济学与护城河"
topic_confidence: 0.7503
---

<a id="digest-f3b167bce2e97951"></a>
# The 10x Wall

2026-11-20 · Tomasz Tunguz · 有来源缺口

[本地原件归档](../../../raw/f3b167bce2e979516d873eda85dff9a30d03602690a45e7fe8851b6722a91ae6) · 固定材料版本 `digest-material-f3b167bce2e979516d873eda85dff9a30d03602690a45e7fe8851b6722a91ae6@1` · [一手原站](https://tomtunguz.com/the-10x-wall/)

## 深度拆解与复核

## 深度拆解与 SEC 一手财报核查

- ==核心结论==：Tomasz Tunguz 于 Anthropic 上市次日（2026-11-20）提出万亿美元企业价值“10x Wall”规律——当市值跨过 $1T 门槛后，公开市场不再为 200%+ 远期营收增速支付估值倍数溢价，估值锚强制切换至 20x–26x 盈余倍数（P/E）；Anthropic（$1.56T 市值 / $1.30T EV / 9.5x EV/2027E 营收）与 SpaceX（$1.82T 市值 / $1.71T EV / 9.5x EV/2027E 营收）在增长落差下录得完全一致的远期市销率。经本工作台直查 Anthropic Form 424B4 / 8-K 与 SpaceX 2026Q3 Form 10-Q 核实，两家公司 TTM 营收基数准确，但作者直接援引的 Koyfin 与摘要口径存在三处重大失真：Koyfin 对 Anthropic 的 22% 毛利率系数据库将按性质列示的算力基建与薪酬支出合并视作营业成本所致（法定 9M26 营业成本毛利率为 85.5%、全口径算力利润率为 43%），且 Anthropic IPO 后因 Amazon 未豁免股权上限仍留存 $109.74B 可转债（真实净现金约 $134.8B 而非 $254B，真实 EV/2027E 营收达 10.4x）；SpaceX 所谓“九个月 62% 毛利率”实为 Q3 单季数值（9M26 为 58.1%），且其实际净现金为 $51.01B 而非隐含的 $110B。上述口径偏差不仅未推翻 10x 上限，反而把 Anthropic 的真实远期倍数推高至 10x 铁壁之上，进一步压缩上市后的倍数扩张空间。
- 本工作台交叉档案：[主体档案：Anthropic](../entities/companies/Anthropic.md) · [Anthropic Form S-1/A Amendment No. 3 拆解](Anthropic%2C%20PBC%20%C2%B7%20SEC%20Form%20S-1_A%20%282026-11-17%29.md) · [Anthropic 路演纪要与 PPT 核验](Anthropic%20%E8%B7%AF%E6%BC%94%E7%BA%AA%E8%A6%81%E5%85%A8%E6%96%87%2BPPT.md) · [主体档案：Tomasz Tunguz](../entities/people/Tomasz%20Tunguz.md)

### 1. 口径、利益披露与原文全量拆解

- 口径与利益披露：本文发布于 Theory Ventures 创始普通合伙人 Tomasz Tunguz（前 Google PM，著有《The 10x Wall》）的个人投研专栏（2026-11-20），代表买方一级/成长期软件与 AI 基础设施投资机构视角。作者高度依赖第三方终端 Koyfin 与 S&P Global（经由 stockanalysis.com 与 CNBC 转引）抓取刚上市标的的 TTM 财务与远期共识（其中 SpaceX 未被 Koyfin 覆盖而改采 S&P Global 共识），对 SEC 原始招股书附注的会计科目重分类与可转债保留条款未作穿透调整。
- 1) 双雄对比快照（截至 2026-11-20 收盘定价，含文中 Table 1 全量指标）：

| 估值与经营指标 | Anthropic (ANT) | SpaceX (SPCX) | 本工作台一手 SEC 文件复核结论 |
| --- | --- | --- | --- |
| 股价 / 市值（Market cap） | ~$86/股 / $1.56T（1.56 万亿美元） | $1.82T（市值相差在 15% 以内） | ⚠️ 本工作台核查（Anthropic 424B4 / 8-K）：11-18 定价 $83.00/股，11-20 交割含全额 1.47 亿股绿鞋后总毛募资 $119.5B（净募资 $117.0B）；按 11-20 ~$86 计完全稀释市值约 $1.56T，但在 9M26 前 S-1/A 区间为 $70–$78（最高基础募资 $643.5 亿）。 |
| 净现金与企业价值（EV） | EV $1.30T（扣除 $254B 净现金） | EV $1.71T（隐含 $110B 净现金） | ❌ 本工作台核查（口径误差）：Anthropic 424B4 备考现金及短投 ex-greenshoe 为 $232.35B，计入绿鞋净增 $12.2B 后现金约 $244.6B（$254B 接近备考总资产 $254.8B），且因 Amazon 拒绝豁免 14.6% 持股上限仍有 $109.74B 可转债留存表内，扣除后净现金约 $134.8B（EV 约 $1.43T）；SpaceX 26Q3 10-Q 账面现金及有价证券 $89.86B 减总债务及融资租赁 $38.84B，净现金仅 $51.01B（EV 约 $1.77T）。 |
| 过去 12 个月营收（TTM） | $35.3B（营收相差在 10% 以内） | $32.0B（截至 2026-09-30 12M） | ✅ 本工作台核查（双双坐实）：Anthropic 424B4 9M26 $33,242M + FY25 $4,585M - 9M25 $2,545M = $35,282M；SpaceX 424B4 FY25 $18,674M - 9M25 $13,714M = 4Q25 $4,960M，加 10-Q 9M26 $27,083M = $32,043M。 |
| 过去 12 个月毛利率 | 22%（Koyfin 口径） | 62%（引用 26Q3 Form 10-Q） | ⚠️ 本工作台核查（双双错位）：Anthropic 主表按性质列支，Koyfin 把 TTM 算力基建（$21,753M）与薪酬（$5,675M）合并充当 COGS 得出 22.3%，而 424B4 附注 8 法定 9M26 营业成本仅含付费推理算力（毛利率 85.5%、TTM 83.6%），9M26 全口径算力利润率为 43%（TTM 扣算力基建 38.3%）；SpaceX 62%（62.4%）实为 Q3 单季毛利率，9M26 为 58.1%、TTM 为 56.7%。 |
| 2027E 共识营收与隐含增速 | $137B / +288% | $181B / +466%（增速快 46%） | ⚠️ 本工作台核查：文中“快 46%”系按倍数比（5.66x / 3.88x - 1 = 45.9%）而非百分点差测算；按实际净现金重算 EV，Anthropic EV/2027E 为 10.4x（原文 9.49x→9.5x），SpaceX 为 9.8x（原文 9.45x→9.5x）。 |
| EV / 2027E 营收（及 NTM） | 9.5x（NTM 散点 11.4x） | 9.5x（NTM 散点 11.0x / +272%） | ⚠️ 本工作台推断：两家公司当前均属 GAAP-loss-making（N/M），NTM 倍数已回落至大盘同业中位，且受上述债务调整后实则贴着 10x 墙体运行。 |

- 2) 24 家大盘科技/SaaS 散点图（Chart 1：EV > $50B 的 EV/NTM 营收 vs 远期营收增速）与超大规模云厂铁壁（Table 2 & Chart 2）：
  - 散点分布：24 家大盘样本中位值为 ~8.9x EV/NTM 营收与 ~27% 远期增速（远低于 200%+ 增速，市场实则按 20% 增速组别给 Anthropic 与 SpaceX 定价）。Chart 1 标注同业包括高倍数 SaaS 安全龙头 CRWD（~35x, ~25%）、NET（~27.5x, ~36%）、PANW（~19x, ~27%）、SNOW（~12.5x, ~35%），硬件/平台股 TSLA（~11.8x, ~14%）、AVGO（~9.8x, ~66%）、AAPL（~9.5x, ~11%）、NVDA（~5.1x, ~96%）、CRWV（~3.8x, ~155%）与 MU（~2.3x, ~107%）。
  - 20x–26x 盈余紧箍咒（Table 2 & Chart 2）：在 5000 亿美元市值以下（Sub-$500b software），Palantir（$0.34T）PE 达 94x、Shopify（$0.16T）76x、ServiceNow（$0.10T）67x；而在 $1T+ 阵营中，除 Broadcom（$1.54T, 40x）、Apple（$5.01T, 38x）与 Nvidia（$3.24T, 14x）外，全部万亿美元超大规模云厂（Hyperscalers）均锁死在 20x–26x P/E 窄带——Microsoft（EV $3.73T，NTM EV/Sales 9.0x，远期增速 19%，毛利率 68%，PE 26x，凭 41% 净利率将远期市销率顶至 ~10x 上沿）、Google（$3.24T，2027E 共识 $636B 对应 5.1x，增速 27%，毛利率 61%，远期 PE 20x / 20.4x）、Meta（$1.50T，5.1x，增速 28%，毛利率 81%，PE 20x）与 Amazon（$2.94T，3.2x，增速 16%，毛利率 51%，PE 22x）。

### 2. 本工作台推断：10x Wall 与 AI 产业周期（T1 / T3）的实质张力

- 本工作台推断（穿透 T1 现金流锁死与 SpaceX 分部盈利结构）：Tunguz 的“倍数扩张终结、必须靠盈利消化估值”判断与本库 T1（闭源前沿盈利受限）和 T3（口径分裂）高度共振，且一线财报拆解揭示出比原文更严峻的兑现压力。
  - ① Anthropic 利润率与表外长约剪刀差：Anthropic 9M26 GAAP 营业亏损 -$1,260M（-3.8%），Non-GAAP 营业利润 $4,081M（12%）系加回 $3.3B 股权激励所得，同时表外仍背负延续至 2045 年的 $895.4B–$900.9B 算力与电力采购承诺。即使 2027E 营收如期翻近四倍至 $137B，若想匹配 Microsoft 的 ~10x EV/Sales 上限，其稳态 GAAP 净利率必须突破 38%–41%（按 25x–26x PE 倒推），否则在 20x–26x PE 框定下合理 EV/Sales 仅能锚定在 5x–6x（隐含 20%–25% 净利率）。
  - ② SpaceXSI 的低毛利稀释：SpaceX 26Q3 营收 $14,575M 中 51.9%（$7,560M）来自并入 xAI 与 Cursor 的 SI 分部，但 SI 单季营业利润仅 $431M（营业利润率 5.7%），真正贡献利润现金牛的是 Starlink 连接分部（$5,248M 营收、$2,367M 营业利润、45.1% 利润率）。随着低利润率地面算力与推理业务权重上升，SpaceX 合并毛利率已从 Q3 62.4% 之外的 9M26 58.1% 面临结构性下行，单纯靠营收体量冲至 $181B 并不足以自动兑现 20x PE 所需的利润厚度。

### 观点与可反驳条件

- ==观点==：Anthropic 与 SpaceX 上市后同步受制于万亿美元级企业价值的 10x 远期市销率上限与 20x–26x 盈余锚铁壁，二级市场估值倍数扩张窗口已然关闭；结合 SEC 424B4 与 10-Q 重分类校对后，Anthropic 真实 EV/2027E 营收约 10.4x（含 $109.74B 未转股可转债）、SpaceX 约 9.8x，两者未来 12–24 个月的股票超额收益只能取决于按量推理/星链现金流能否跑赢高额算力基建与研发投入，实现从 43% 算力利润率/58.1% 合并毛利率向 35%+ 稳态 GAAP 营业利润率的跨越。
- ==推翻条件==：
  1. ① 向上突破 10x 铁壁（证伪倍数封顶论）：若 Anthropic 或 SpaceX 在 2027 年连续两个季度保持 NTM 营收增速 >=150% 的同时，GAAP 营业利润率稳定站上 >=35%（Anthropic 全口径算力利润率升至 >=60% 且自由现金流完全覆盖当期算力租约净增量），且二级市场对其 EV/2027E 营收给予并维持 >=14x 的估值溢价超过 6 个月，则证明高复利 AI 基础设施资产可以打破传统云计算巨头的 10x 天花板。
  2. ② 向下跌破 5x–6x 盈余回归底线（验证过度估值与 T1 承压）：若 2027H1 财报显示 Anthropic 算力与基建费用占收入比反弹至 >=60% 或 GAAP 营业利润率仍低于 5%（同时 Amazon 持股上限限制与表外算力履约引发再融资贴现），或 SpaceX 2027E 共识营收增速下修至 <150%，导致两家公司 EV/NTM 营收跌破 6.5x 并向 Google/Meta（5.1x）快速收敛，则说明当前 9.5x–10.4x 定价仍高估了 AI 基础设施的远期稳态净利率。

---

## 原文摘录与一手信源存证

> The 10x Wall  一手发布主体：Tomasz Tunguz 原始链接：https://tomtunguz.com/the-10x-wall/ 发布日期：2026-11-20 归属赛道：AI产业与商业  【信源巡检核心摘要】 Tomasz Tunguz 在 Anthropic 上市次日对比 Anthropic 与 SpaceX 公开市场定价：截至 2026-11-20，Anthropic 股价约 86 美元，对应市值 1.56 万亿美元、扣除
> — 原文摘录，文字段落 1；证据 `digest-material-f3b167bce2e979516d873eda85dff9a30d03602690a45e7fe8851b6722a91ae6-excerpt-1@1`

> SpaceX 公开市场定价：截至 2026-11-20，Anthropic 股价约 86 美元，对应市值 1.56 万亿美元、扣除 2540 亿美元净现金后 EV 1.30 万亿美元，TTM 营收 353 亿美元而 Koyfin 口径 TTM 毛利率仅 22%，2027E 共识营收 1370 亿美元（+288%）对应 EV/2027E 营收 9.5x，与 SpaceX（+466%、9.5x）同受万亿美元体量 10x
> — 原文摘录，文字段落 2；证据 `digest-material-f3b167bce2e979516d873eda85dff9a30d03602690a45e7fe8851b6722a91ae6-excerpt-2@1`

> 营收 9.5x，与 SpaceX（+466%、9.5x）同受万亿美元体量 10x 远期市销率…  【分诊与中枢定位】 【AI产业与商业】Tomasz Tunguz：涉及 SpaceX, Anthropic；含指标 10x, 86 美元, 1.56 万；关联未决问题「Anthropic 拟募资最高 \$643.5
> — 原文摘录，文字段落 3；证据 `digest-material-f3b167bce2e979516d873eda85dff9a30d03602690a45e7fe8851b6722a91ae6-excerpt-3@1`

一手材料：

- The 10x Wall · Tomasz Tunguz · [原站](https://tomtunguz.com/the-10x-wall/) · [主体档案：Tomasz Tunguz](../entities/people/Tomasz%20Tunguz.md) · [本地原件](../../../raw/d617a0d61d503c9b1e0567969bd6ebd22efdd9beed29c72df3acabbf9329df78)
  材料版本 `digest-material-d617a0d61d503c9b1e0567969bd6ebd22efdd9beed29c72df3acabbf9329df78@1`；获取方式 `tg_approved_full_text`。
  > In short : Anthropic & SpaceX trade at an identical 9.5x 2027 est. revenue despite 288% & 466% projected growth. — 原文提取
  > The two largest IPOs in history look like twins. Anthropic & SpaceX trade within 15% of each other’s market cap, generate within 10% of the same trailing revenue, & are valued on an identical forward multiple of 9.5x. — 原文提取

归属与范围：Tomasz Tunguz 在 Anthropic 挂牌次日（2026-11-20）对比 Anthropic（市值 1.56 万亿美元、EV 1.30 万亿美元、TTM 营收 353 亿美元、2027E 共识 1370 亿美元 / +288%）与 SpaceX（市值 1.82 万亿美元、EV 1.71 万亿美元、TTM 营收 320 亿美元、2027E 共识 1810 亿美元 / +466%），指出两者 EV/2027E 营收均锁定在 9.5x、且万亿美元体量科技巨头受限于 20x–26x P/E 铁壁而丧失远期市销率扩张空间。本工作台直查 Anthropic Form 424B4 / 8-K 与 SpaceX 2026Q3 Form 10-Q / 424B4 核实：两家公司 TTM 营收口径成立，但 Koyfin 对 Anthropic 的 22% 毛利率系按性质成本归并所得（法定 9M26 营业成本毛利率 85.5%、全口径算力利润率 43%），且 Anthropic IPO 后仍留存 1097.4 亿美元未转股可转债、SpaceX 62% 实为 Q3 单季毛利率（9M26 为 58.1%）且实际净现金 510 亿美元低于文中隐含 1100 亿美元。

来源缺口：

- `not_disclosed`：原文及散点图未逐家列明 24 家市值超 500 亿美元科技/SaaS 样本中未标注代码个股的具体倍数，且未披露 S&P Global/CNBC 汇总的 Anthropic 2027E（1370 亿美元）与 SpaceX 2027E（1810 亿美元）营收共识背后的分部拆解与净利率预测明细。 [线索](https://tomtunguz.com/the-10x-wall/)

[返回赛道总览](../赛道总览.md#digest-f3b167bce2e97951) · [返回导读索引](README.md) · [主体档案库](../entities/README.md)
