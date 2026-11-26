---
title: "被杠杆干趴后，「AI股神」换了个赌法"
type: blog_digest
sector: "宏观与金融"
source: "Situational Awareness LP · SEC Form 13F-HR"
published_at: "2026-11-17"
raw_sha256: "dea83f08bac5d864ad685a540aa34b51a4e7a67b738353d7e4f326b1491b18a6"
material_version: "digest-material-dea83f08bac5d864ad685a540aa34b51a4e7a67b738353d7e4f326b1491b18a6@1"
origin_url: "https://www.sec.gov/edgar/browse/?CIK=0002045724"
trigger_source: "Odaily"
trigger_url: "https://mp.weixin.qq.com/s/jnCqhK_lpB5ApLSQKJN-yA"
user_comments: "review一下Leopold的持仓，追溯Q1Q2和Q3差别，观测在上一轮下跌中Leopold的损失"
status: "processed_with_gaps"
primary_topic: "宏观配置与13F持仓"
topic_confidence: 0.9241
---

<a id="digest-dea83f08bac5d864"></a>
# 被杠杆干趴后，「AI股神」换了个赌法

2026-11-17 · Situational Awareness LP · SEC Form 13F-HR · 有来源缺口

[本地原件归档](../../../raw/dea83f08bac5d864ad685a540aa34b51a4e7a67b738353d7e4f326b1491b18a6) · 固定材料版本 `digest-material-dea83f08bac5d864ad685a540aa34b51a4e7a67b738353d7e4f326b1491b18a6@1` · [一手原站](https://www.sec.gov/edgar/browse/?CIK=0002045724) · [触发线索（Odaily）](https://mp.weixin.qq.com/s/jnCqhK_lpB5ApLSQKJN-yA)

> [!IMPORTANT]
> 用户关注点（TG）：review一下Leopold的持仓，追溯Q1Q2和Q3差别，观测在上一轮下跌中Leopold的损失

## 针对性追查与回应

### 场景与利益披露（讲者立场与口径局限）

本复核以 SEC EDGAR（CIK 0002045724）2026 Q1–Q3 Form 13F-HR 与 2026-09-17 Schedule 13D/A 为法定基准，拆解 Leopold Aschenbrenner（曾任职 FTX Future Fund，2024 年发表《Situational Awareness: The Decade Ahead》）执掌基金 Situational Awareness LP 的仓位演变与回撤损失。触发来源 Odaily（作者 Azuma）仅属二级财经编译（已退居 `trigger_source`），原文只对比 Q2 与 Q3 13F 做杠杆定性点评，遗漏了 Q1「半导体 Put 哑铃对冲」前史、7 月单月回撤及 Citadel 大宗接盘细节，亦未穿透 Q4 底层暴跌对正股与期权的不同冲击路径。口径硬边界在于：13F 仅覆盖季末美股多头正股与看涨/看跌期权 Notional Value（不含权利金 Premium 实付成本、Margin Debt、美股外本土头寸及表外私募股权），且截至 2026-09-30 的 Q3 报告于 2026-11-16 披露，存在 47 天信息滞后。

### 一、Q1 → Q2 → Q3 全周期 13F 结构演变与核心头寸核查

| 报告期与申报日期 | 13F 名义总市值与标的数 | 工具结构拆解（正股 / Put / Call） | 前五大核心头寸与关键变化（SEC 法定口径） | 本工作台法证核查 |
| :--- | :--- | :--- | :--- | :--- |
| 2025 Q4（2026-02 披露） | 约 \$5.5B（55 亿美元） | 多头正股与部分期权（较 2024Q4 \$225M 暴增 24 倍） | 重仓 AI 电力、算力与存储基础设施 | 早期高弹性基建赛道累积期 |
| 2026 Q1（截至 2026-03-31，5 月中旬提交） | \$13.68B / 42 项 | Put 约 \$8.46B（61.8%–61.9%）；Call 10.0%；正股 ~28.2% | SMH Put \$2.04B、NVDA Put \$1.57B、ORCL Put \$1.07B、AVGO Put \$1.01B、AMD Put \$969M；另含 MU Put \$584M（1,727,700 股，配对 \$422.3M Call）、TSM Put \$535.1M、ASML Put \$494.1M、INTC Put \$159.1M | ✅ 本工作台核查：Q1 并非裸多，而是典型的「做多存储电力 + 做空大盘与晶圆芯片链 Put」哑铃对冲 |
| 2026 Q2（截至 2026-06-30，2026-08-14 提交） | \$20.24B / 26 项 | 正股 \$20.17B（99.6%）；全面撤除 Q1 全部科技半导体 Put | SNDK 2,495,344 股（\$5.67B / 28.0%）、MU 4,828,786 股（\$5.57B / 27.5%）、BE 6,272,808 股+Call（\$1.94B / 9.6%）、NBIS 4,464,260 股（\$1.23B / 6.1%）、CORZ 26,008,473 股（\$665.6M）；另持 STM \$584.3M、SHAZ 5,396,127 股（\$456.8M）、IREN 9,474,099 股（\$433.3M） | ✅ 本工作台核查：撤掉 Put 护盾并叠加高倍杠杆，仅 SNDK + MU 两只强周期正股就压注 \$11.24B（55.5%） |
| 2026 Q3（截至 2026-09-30，2026-11-16 提交） | \$1.58B（15.8 亿美元）/ 9 项（单季缩水 92.2%） | 正股 \$533M（33.7%，较 Q2 缩水 97.4%）；Call 名义值 \$1.045B–\$1.047B（66.3%）；Put 归零 | 前五大占 94.2%（\$1.485B）：SHAZ 正股 8,070,950 股（\$441M / 27.9%，持股 21.1%）、BE Call \$389M（24.7%）、NBIS Call \$333M（21.1%）、SNDK Call \$183M（11.6%）、Roundhill Memory ETF（DRAM）Call \$140M（8.9%）；尾仓含 CLSK 3,019,029 股（\$38.89M / -75.4% sh）、IREN 527,864 股（\$21.58M / -94.4% sh）、Bitdeer（BTDR）1,934,618 股（\$20.29M / -43.8% sh）及新建仓 Fermi（FRMI）2,671,898 股（\$11.25M） | ✅ 本工作台核查：MU 与 SNDK 正股全数清空；唯一留守重仓正股 SHAZ 实际因 9 月权证行权逆势增股 +49.6% |

### 二、Odaily 漏掉的三层关键事实：从 Q1–Q2 策略错位到 7 月强平与 SHAZ 困守

- ✅ 本工作台核查（Odaily 遗漏的前史：Q1「Put 对冲打出 +439%」与 Q2「撤盾满仓存储」才是爆仓根源）：Odaily 将夏天的溃败笼统归咎于“高杠杆”，但穿透 SEC Q1 与 Q2 13F 对比可见，真正导致 7 月崩盘的临界操作发生在 Q2。Q1 期间 Leopold 通过高达 \$8.46B（61.8%）的 SMH、NVDA、ORCL、AVGO、AMD 及 MU 看跌期权严密对冲 Beta 风险，配合存储与电力多头在 2026 上半年斩获约 +439% 净回报（单位净值由 1.00x 升至 5.39x，据报道基金总资产峰值一度触及约 \$45B）。但 Q2 末他不仅彻底清零全部 Put 保护盾，将多头正股推升至 99.6%（\$20.17B），更把 55.5% 仓位单押在波动极高的两只存储正股 SanDisk 与 Micron 上，叠加主经纪商（Goldman Sachs、JPMorgan、Bank of America）提供的高倍融资杠杆（外媒报道总杠杆率超过 10 倍，公开持仓占 Q2 峰值比例远超自有权益）。
- ✅ 本工作台核查（7 月强平损失拆解：净值回吐约 82% 上半年收益，Citadel 接盘再剥 10% 流动性折价）：2026 年 7 月 AI 硬件、存储（含美股未进 13F 的 SK Hynix 等）与 Neocloud 剧烈回调叠加软件空头失血，Situational Awareness 单月净值暴跌约 -67%，上半年 +439% 复利净值从 5.39x 骤降至约 1.78x（抹去上半年累计收益的约 82%，Q2 高位新申购 LP 实打实亏损三分之二）。随着 Goldman Sachs、JPMorgan 与 BofA 发出 Margin Call，基金被迫在 2026-07-30 隔夜将约 \$16B 公募股票组合按约 10% 折价（单笔即额外让渡约 \$1.6B 流动性折价损失）打包甩卖给 Ken Griffin 旗下 Citadel Wellington；Citadel 于 8 月向投资人披露通过近 100 笔大宗交易出清逾 \$4B 市值，剥离了所接手组合超过 80% 的风险敞口（Citadel Wellington 借此在 7 月逆势获利 +5.94%）。
- ✅ 本工作台核查（Q3「唯一重仓正股」SHAZ 的被动困守真相与表外 Anthropic 缓冲）：表面看 SharonAI（SHAZ）在 Q3 占比高达 27.9%（\$441M），似乎是 Leopold 最坚定的正股信念；但对照 Q2（5,396,127 股 / \$456.8M，隐含单价 \$84.65）与 2026-09-17 提交的 Schedule 13D/A（披露于 2026-09-15 行使 2,674,823 份预付认股权证），其 SHAZ 持股量在 Q3 逆势暴增 +49.6% 至 8,070,950 股（占总股本 38,341,987 股的 21.1%），市值却滑落至 \$441M（隐含季末均价 \$54.64，单季跌幅达 -35.4%）。==这证明 7 月大宗清盘唯独清不掉、并在 9 月被迫以权证转为重仓的，恰好是这笔高控盘（>21%）且缺乏二级市场承接深度的澳洲 Neocloud 小盘股==；同期基金之所以未因公募清盘而破产，核心缓冲来自表外未进 13F 的私募股权（主要为约 \$5B 估值口径的 Anthropic 股权，参照本库 [Anthropic 路演纪要导读](../../AI%E4%BA%A7%E4%B8%9A%E4%B8%8E%E5%95%86%E4%B8%9A/blogs/Anthropic%20%E8%B7%AF%E6%BC%94%E7%BA%AA%E8%A6%81%E5%85%A8%E6%96%87%2BPPT.md)，其 11 月 IPO 路演定价估值已达 \$1.25T–\$1.40T）。

### 三、上一轮秋季下跌（2026 年 10–11 月）损失观测与结构对照

- ⚠️ 本工作台推断（Q3 实际投入本金测算：真实权益敞口仅约 \$640M–\$740M）：Q3 13F 账面 \$1.58B（15.8 亿）中，BE（\$389M）、NBIS（\$333M）、SNDK（\$183M）与 DRAM（\$140M）四项看涨期权合计名义价值约 \$1.045B（占比 66.3%）。按科技高波动个股及 ETF 平值/轻度虚值中期 Call 通常约 10%–20% 的权利金（Premium）比例估算，Leopold 9 月重回市场实际支出的 Call 本金约在 \$105M–\$210M 区间，连同 \$533M 正股（SHAZ \$441M + CleanSpark/Iren/Bitdeer/Fermi 合计 \$92M），Q3 末美股二级市场真实部署权益敞口约为 \$640M–\$740M，仅为 Q2 峰值的约 3.2%–3.7%。
- ⚠️ 本工作台推断（上一轮秋季下跌的真实损失力学：Call 切断二次强平，但 SHAZ 正股暴跌贡献主要现金亏损）：在 10 月中旬至 11 月中旬的新一轮 AI 估值压缩中（背景对应本库 [SemiAnalysis 加速器模型下修导读](../../%E5%88%86%E5%B8%83%E5%BC%8F%E8%AE%A1%E7%AE%97/blogs/Revising%20Down%20Accelerator%20Demand%20and%20Shipment%20Outlook%3B%20Nvidia%20Bears%20the%20Brunt%20%28SemiAnalysis%20Accelerator%20Model%20.md) 揭示的 2027–2030E 资本开支下调与 [Barclays AI CDS 导读](2008%E5%86%8D%E7%8E%B0%EF%BC%81%E4%B8%80%E6%96%87%E8%AF%BB%E6%87%82%E5%8D%8E%E5%B0%94%E8%A1%97%E6%9C%80%E7%83%AD%E9%97%A8%E4%BA%A4%E6%98%93%EF%BC%9AAI%20CDS.md) 追踪的算力信贷重定价），Situational Awareness 持仓标的普遭重挫：SHAZ 10 月单月暴跌 53%–58%（自季末 \$54–\$55 跌至 \$20–\$25），11 月 16 日公布 Q3 营收仅 \$9.9M（大幅低于预期约 \$26.9M）后再跌 7%–8% 至 \$19–\$22；Nebius Group（NBIS）因算力交付推迟与高达 \$27B/\$40B–\$45B 的资本开支指引在秋季暴跌逾 35%（较 6 月高点 \$299.86 回撤 40%–57% 至 \$105–\$115）；Bloom Energy（BE）自 10 月高点 \$258–\$300 回落约 27%–30%（11 月初低见 \$156，中旬回稳至 \$175–\$192）；SanDisk（SNDK）自季末高点 \$1,700–\$1,887 回调 40%–50% 至 \$820–\$930（11 月 20 日实施 1 拆 8 拆股）。==由于全额权利金 Call 彻底切断了 Margin Debt 强平链条，市场盛传的「二次爆仓」流言在结构上不成立，但 Q4 实际损失依然惨重：若 8,070,950 股 SHAZ 在 10–11 月未实质减持，单只正股按 \$20 计账面价值已由 \$441M 萎缩至约 \$161M（浮亏约 -\$280M），叠加四项 Call 在标的下挫 27%–50% 下的 Delta 与时间价值折损，Q4 二级组合净值回撤大概率达 \$300M–\$420M 量级==。
- ✅ 本工作台核查（同日 13F 横向对照：Leopold 赌周期高 Beta 期权 vs Druckenmiller 转向近线 HDD 双寡头）：同于 2026-11-16 披露的 [Duquesne Q3 2026 13F 复核](Druckenmiller%20Dumps%20Chips%2C%20Triples%20Hard%20Drives%2C%20Adds%20Gold%20%28Duquesne%20Q3%202026%2013F%20%26%20Hyperliquid%20%E5%A4%8D%E6%A0%B8%29.md) 显示，Stanley Druckenmiller 在 Q3 果断清仓 SanDisk（-100% / \$79M）与 IREN（-100% / \$4.0M）并削减台积电 94%，转而将筹码重配于供应高度集中的 HAMR 近线机械硬盘双寡头（Seagate 与 Western Digital 合计 \$442.64M，占 13F 9.9%）及 \$129M 黄金矿商对冲。两位顶流基金经理在存储与 AI 基建退潮期的分化证明，Leopold 在 Q3 虽改写了风控工具，却仍停留在高贝塔单边多头贝塔押注上。

### 观点与可反驳条件

- ==观点==：Situational Awareness LP 在 2026 年 7 月的实质溃败源于 Q2 撤除 \$8.46B 半导体 Put 护盾并叠加高倍 Margin Debt 豪赌强周期存储正股，而非单纯的赛道看错；Q3 转用 \$1.045B 全额权利金 Call 确已消除「融资追保二次爆仓」的流动性死亡螺旋，但被动锁仓 21.1% 流通股的 SharonAI（SHAZ）正股暴跌（-60%+）与高 Beta 期权在秋季下挫中的权利金损耗，仍使该基金在 2026 Q4 承受了重创。
- ==推翻条件==：① 后续 SEC Schedule 13D/A 或 Q4 13F-HR 显示 Situational Awareness 在 2026 年 10 月中旬暴跌前已大额减持或通过大宗协议转让退出 8,070,950 股 SHAZ，且 BE/NBIS/SNDK/DRAM 看涨期权于 10 月初高位提前止盈平仓。
- ==推翻条件==：② 基金致投资者信或经审计年报披露 2026 Q4 期间美股 Call 实际支付权利金占总基金权益不足 5%，且同期 Anthropic IPO 挂牌（NASDAQ: ANT）与非美直持资产（如存储本土现货多头或宏观利率头寸）带来的净值增值完全覆盖了二级公开持仓的秋季回撤。
- ==推翻条件==：③ SEC 披露或主经纪商诉讼/监管文件证实 Situational Awareness 在 2026 年 9–11 月期间仍通过掉期（TRS）或保证金账户重启了高倍融资杠杆并触发新一轮强平清算。

---

## 原文摘录与一手信源存证

> 今年夏天，曾被华尔街奉为新一代投资神话的“AI 股神” Leopold Aschenbrenner 及其旗下基金 Situational Awareness LP，经历了一场足以写入投资史册的大起大落。
> — 原文摘录，文字段落 1；证据 `digest-material-dea83f08bac5d864ad685a540aa34b51a4e7a67b738353d7e4f326b1491b18a6-excerpt-1@1`

> 在 Q1 与 Q2 的 13F 追踪报道中，我们曾见证他如何凭借对 AI 基础设施（存储、电力、算力）的极致押注，将基金公开持仓推向逾 200 亿美元的峰值。然而，Q2 报告期结束后不久，7 月 AI 板块的剧烈回调叠加上过高的杠杆率，让 Situational Awareness 遭受重创，Leopold 最终被迫挥泪斩仓，将绝大部分公开市场股票组合折价打包出售给了 Ken Griffin 旗下的 Citadel。
> — 原文摘录，文字段落 2；证据 `digest-material-dea83f08bac5d864ad685a540aa34b51a4e7a67b738353d7e4f326b1491b18a6-excerpt-2@1`

一手材料：

- Situational Awareness LP — SEC Form 13F-HR & Schedule 13D Filings (Q1 2026, Q2 2026 & Q3 2026 Comparison) · Situational Awareness LP · SEC Form 13F-HR · [原站](https://www.sec.gov/edgar/browse/?CIK=0002045724) · [主体档案：Situational Awareness LP](../entities/funds/Situational%20Awareness%20LP.md) · [本地原件](../../../raw/858f0b8cb78a460f64aacaf53327d5b4d0dd8560f491a4f4a3b9375552d88310)
  材料版本 `digest-material-858f0b8cb78a460f64aacaf53327d5b4d0dd8560f491a4f4a3b9375552d88310@1`；获取方式 `web_search_verified_primary`。
  > 2. QUARTERLY SEC FORM 13F-HR TRAJECTORY (Q4 2024 – Q3 2026)  - Q4 2024: ~\$225M reported 13F public portfolio value. - Q4 2025 (reported Feb 2026): ~\$5.5B reported 13F public portfolio value. — 原文提取
  > \[A\] Q1 2026 Form 13F-HR (Period Ended 2026-03-31; SEC Filing Window Mid-May 2026 / Deadline 2026-05-15, 13f.info submission timestamp May 18, 2026) - Total 13F Reported Value: \$13.68B across 42 line items. — 原文提取

归属与范围：已穿透 SEC EDGAR CIK 0002045724 Q1–Q3 13F-HR 与 13D 披露及外媒对 7 月 Citadel 大宗折价接盘纪要，Odaily 退居触发线索（trigger\_source）。

来源缺口：

- `not_disclosed`：SEC Form 13F-HR 不披露主经纪商（Goldman Sachs / JPMorgan / BofA）实际 Margin Debt 余额与融资利率、Q3 四项看涨期权（\$1.045B 名义值）的具体行权价/到期日与实际投入权利金成本、非美本土直持股票（如 SK Hynix）、表外 Anthropic 与 CoreWeave 等私募股权最新份额估值，以及 2026-09-30 之后 Q4 二级市场实时调仓与盈亏。 [线索](https://www.sec.gov/edgar/browse/?CIK=0002045724)

[返回赛道总览](../赛道总览.md#digest-dea83f08bac5d864) · [返回导读索引](README.md) · [主体档案库](../entities/README.md)
