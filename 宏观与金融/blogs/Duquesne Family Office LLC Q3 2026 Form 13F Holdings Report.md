---
title: "Duquesne Family Office LLC Q3 2026 Form 13F Holdings Report"
type: blog_digest
sector: "宏观与金融"
source: "Duquesne Family Office"
published_at: "2026-11-16"
raw_sha256: "16fcb8302018164d5d973ccac3f5c3a830f722167f263be4224313889b7c1096"
material_version: "digest-material-16fcb8302018164d5d973ccac3f5c3a830f722167f263be4224313889b7c1096@1"
origin_url: "https://www.sec.gov/Archives/edgar/data/1536411/000153641126000011/form13f_20260930.xml"
trigger_source: "Duquesne Family Office"
trigger_url: "https://www.sec.gov/Archives/edgar/data/1536411/000153641126000002/0001536411-26-000002-index.html"
user_comments: ""
status: "processed_with_gaps"
primary_topic: "宏观配置与13F持仓"
topic_confidence: 0.9709
---

<a id="digest-16fcb8302018164d"></a>
# Duquesne Family Office LLC Q3 2026 Form 13F Holdings Report

2026-11-16 · Duquesne Family Office · 有来源缺口

[本地原件归档](../../../raw/16fcb8302018164d5d973ccac3f5c3a830f722167f263be4224313889b7c1096) · 固定材料版本 `digest-material-16fcb8302018164d5d973ccac3f5c3a830f722167f263be4224313889b7c1096@1` · [一手原站](https://www.sec.gov/Archives/edgar/data/1536411/000153641126000011/form13f_20260930.xml) · [触发线索（Duquesne Family Office）](https://www.sec.gov/Archives/edgar/data/1536411/000153641126000002/0001536411-26-000002-index.html)

## 深度拆解与复核

### 导读与核心拆解

- ==核心结论==：对 SEC EDGAR 原件的交叉取证发现重大信源绑定勘误——本条目（d0107）虽标题标注为 Duquesne Family Office LLC 截至 2026-09-30 的 Q3 2026 Form 13F Holdings Report（2026-11-16 提交），但原站挂接的 Accession 0001536411-26-000002（form13f_20251231.xml）实为 2025Q4 申报（报告期 2025-12-31，2026-02-17 递交，62 只标的、市值 \$4.494B）；真正的 2026Q3 Form 13F-HR 实为 Accession 0001536411-26-000011（form13f_20260930.xml，报告期 2026-09-30，2026-11-16 递交，已有浅层档案 digest-c401c74fb728377e）。逐条比对 Q2 2026（0001536411-26-000006）与 Q3 2026 完整 XML 持仓表，Stanley Druckenmiller 在 Q3 将披露条目从 95 只砍至 65 只，总市值从 52.1 亿美元（\$5.211B）缩表 14.2% 至 44.7 亿美元（\$4.471B，其中纯股票 \$4.149B + 5 笔看涨期权 \$321.99M），同时清仓全部大盘宽基看涨期权（SPY/IWM/RSP Call）、将 TSMC ADR 大砍 94.5%（589,680 股降至 32,700 股）并清仓 Alphabet，但核心重仓出现极致单票集中——Natera 市值飙升至 \$1.306B（占组合 29.22%），与新建 SpaceX 股权（202,125 股、\$30.49M）、加倍押注 Seagate 存储周期及建仓三只金矿股（NEM/B/AEM）共同构成“砍宽基 Beta、缩减台积电算力敞口、重仓生物医药+存储+黄金硬资产”的鲜明转向。

### 一、SEC EDGAR Accession 错配勘误与三期 13F 总量核对

本工作台逐一调取 CIK 0001536411 最近三期 Form 13F-HR XML 主表与持仓表（单位均为千美元），结合既有浅层档案 《Duquesne Family Office LLC Form 13F-HR (Q3 2026)》（digest-c401c74fb728377e） 彻底厘清 Accession 错位与“41.5–44.7 亿美元”口径来源：

| SEC Accession 编号 | 实际报告期与递交日 | 持仓条目数 | 13F 披露总市值 | 纯股票 vs 期权拆分 | 本工作台一手核对结论 |
| :--- | :--- | :--- | :--- | :--- | :--- |
| 0001536411-26-000002（d0107 原链接） | 2025-12-31（2026-02-17 递交） | 62 条 | \$4,494,450K（\$4.494B） | 含 Natera \$575.33M、XLF \$300.99M、TSMC 543,085 ADR | 系 Q4 2025 历史申报，原巡检 SEC Archives 链接错挂旧版 |
| 0001536411-26-000006（Q2 基准） | 2026-06-30（2026-08-14 递交） | 95 条 | \$5,210,860K（52.1 亿美元） | 股票 \$4,354.22M + 9 笔 Call \$856.64M + 0 Put | 宽基与科技看涨期权占比高达 16.44% |
| 0001536411-26-000011（真实 Q3 2026） | 2026-09-30（2026-11-16 递交） | 65 条 | \$4,470,866K（44.7 亿美元） | 股票 \$4,148.87M（~41.5 亿）+ 5 笔 Call \$321.99M + 0 Put | 期权名义曝光锐减 62.4%，与区间 41.5–44.7 亿完全咬合 |

### 二、Q3 2026 全量 XML 调仓穿透：清宽基、砍算力、重仓 Natera/STX/黄金与 SpaceX

1. **生物医药单票极化与前沿治疗换仓**：Natera（CUSIP 632307104）在 Q3 仅微幅减持 25,640 股（-0.8%，期末 3,160,666 股），但受股价大涨驱动持仓市值从 Q2 的 \$864.92M（16.60%）跃升至 \$1,306.34M，占比高达 29.22%。其余生物医药中，Insmed 减持正股 23.3%（\$124.72M）并大砍 Call 期权 59.3%（\$62.78M），清仓 Caris Life Sciences（Q2 \$33.76M）与 Protagonist（Q2 \$25.61M），减持 Eli Lilly 69.3%（仅余 3,800 股）；同步加仓 Revolution Medicines（\$89.55M，+9.2%）、NewAmsterdam Pharma（\$81.65M，+9.3%）、Beam Therapeutics（+355.5% 至 \$17.11M）及 Relay Therapeutics（+144.3% 至 \$15.39M）。
2. **半导体去化与存储周期重配**：TSMC ADR（874039100）从 589,680 股（\$281.61M）砍至 32,700 股（\$14.92M），减幅达 94.45%（94 %）；清仓 Alphabet（Q2 336,300 股 / \$120.18M）、AMD（\$42.35M）、Rambus（\$22.96M）、Sandisk（\$79.35M）及 Meta Call（\$28.17M），并腰斩 STMicroelectronics（-47.9% 至 \$86.20M）与 Palo Alto（-74.3%）。资金并未彻底撤离硬件，而是向机械/大容量存储集中——Seagate（STX）正股大增 180.2% 至 341,790 股（\$315.25M，7.05% 居第二重仓）叠加新建 98,000 股 Call（\$90.39M，2.02%），合计占组合 9.07%（\$405.64M），并新建 Western Digital（\$36.79M）。
3. **清仓大盘杠杆与配置黄金+SpaceX**：Q3 彻底清零 Invesco S&P 500 等权 ETF Call（Q2 \$174.68M，仅留 \$15.48M 正股）、iShares Russell 2000 ETF Call（Q2 \$99.15M）、SPDR S&P 500 ETF Call（Q2 \$67.21M）及 iShares MSCI Brazil Call（Q2 \$145.87M，保留 \$125.81M 正股），并同步退出 United Airlines（\$108.08M）、Delta（\$56.48M）、D.R. Horton（\$48.70M）与 Cleveland-Cliffs（\$39.59M）。新增配置呈现“硬资产+稀缺软件航天”特征：等权建仓三大金矿龙头 Newmont（NEM，\$43.88M）、Barrick Mining（B，\$42.89M）与 Agnico Eagle（AEM，\$42.35M）合计 \$129.11M（2.89%）；新建 SpaceX（Space Exploration Techn Corp，CUSIP 84615Q103）202,125 股（\$30.493M，0.68%），同时增持 Unity（+435.5% 至 \$161.94M）、Amazon（正股+Call 合计 \$306.93M / 6.87%）及新建 AppLovin（\$31.79M）、Palantir（\$14.98M）。

### 三、口径与利益披露（本工作台核查）

- **口径与利益披露**：SEC Form 13F-HR 仅强制披露截至季末（2026-09-30）的美股多头股票及看涨/看跌期权多头头寸，申报时滞达 47 天（2026-11-16 递交）；家族办公室核心的利率、外汇、黄金期货、空头头寸、非美本地股票及未上市资产均不在 13F 统计范围内。经查 primary_doc.xml，0001536411-26-000011 申报类型为 13F HOLDINGS REPORT（isAmendment=false），XML 中未声明保密豁免条目（isConfidentialOmitted 字段缺省）。
- ❌ **原链接 Accession 错配核查（本工作台核查）**：d0107 原始挂载的 0001536411-26-000002-index.html 指向的是 2025-12-31 季度旧报告（2026-02-17 递交），与摘要所述的 Q3 2026（95 只缩至 65 只、44.7 亿美元、TSMC 减持 94 %、新建金矿股）不匹配；全部摘要数字经 0001536411-26-000011 的 form13f_20260930.xml 与 0001536411-26-000006 逐行对账后方获确认（65/65 条目全量核对，总值误差仅 XML 舍入带来的 \$1K）。
- ✅ **41.5–44.7 亿美元双口径核查（本工作台核查）**：经逐行加总 0001536411-26-000011 全量 65 条记录，60 条正股条目合计 \$4,148.873M（约 41.5 亿美元），5 条 Call 期权名义对应市值合计 \$321.994M，两者相加恰好等于封面汇总 \$4,470.866M（44.7 亿美元），解释了市场报道中两个看似冲突的总规模数值。
- ⚠️ **Natera 占比与 SpaceX 性质核查（本工作台推断）**：Natera 在 Q3 股数实际小幅净卖出 25,640 股，其组合权重从 16.60% 跃升至 29.22% 主要来自股价上涨与其余仓位缩表带来的分母收缩，而非 Q3 主动加仓；此外，SpaceX 以 CUSIP 84615Q103 现身公开 13F 持仓表（\$30.493M，0.68%），证明其已作为可申报 Section 13(f) 证券进入公开美股组合视野，但当前仓位尚属观察级配置（不足组合 1%），不宜过度外推为重仓压注。

### 观点与可反驳条件

- ==观点==：本工作台判断，Druckenmiller 在 2026Q3 的操作并非单纯“全面看空美股”，而是系统性撤离指数宽基 Call 杠杆、航空/地产等顺周期 Beta 及高估值台积电芯片主线，将风险预算收敛至少数强基本面标的（Natera MRD 龙头、Seagate 存储超级周期、Amazon/Unity）并用约 2.9% 金矿组合对冲宏观与货币尾部风险；同时需以 0001536411-26-000011 作为唯一 Q3 权威信源并合并引用 digest-c401c74fb728377e，杜绝继续引用错配的 Q4 2025 Accession。
- ==推翻条件==：
  ① 在截至 2026-12-31 的 Q4 2026 Form 13F-HR（预计 2027-02-16 前后递交）中，Duquesne 重新大额买回 SPY/IWM/QQQ 等宽基指数 Call 期权（名义市值合计恢复至 \$300M 以上）或大幅回补 TSMC/半导体算力龙头仓位至 \$200M 以上，证明 Q3 减仓仅属季度末战术再平衡。
  ② 在 Q4 2026 Form 13F-HR 中，Natera 持仓股数出现超过 25% 的实质性主动减持（降至 237 万股以下）且 NEM/B/AEM 三只金矿股遭清仓半数以上，证明 29.22% 集中度仅系 Q3 末止盈滞后且黄金配置属短线交易。
  ③ SEC EDGAR 后续针对 2026-09-30 报告期披露 13F-HR/A 补正声明，揭示 Q3 存在未在公开主表体现的重大保密持仓或期权对冲结构改变当前净敞口结论。

---

## 原文摘录与一手信源存证

> Stanley Druckenmiller 旗下 Duquesne Family Office（CIK 0001536411）于 2026-11-16 向 SEC 提交截至 2026-09-30 的 Q3 2026 Form 13F
> — 原文摘录，文字段落 1；证据 `digest-material-16fcb8302018164d5d973ccac3f5c3a830f722167f263be4224313889b7c1096-excerpt-1@2`

一手材料：

- Duquesne Family Office LLC Form 13F-HR Information Table (Q3 2026 Ended 2026-09-30, Accession 0001536411-26-000011) · Duquesne Family Office · [原站](https://www.sec.gov/Archives/edgar/data/1536411/000153641126000011/form13f_20260930.xml) · [主体档案库](../entities/README.md) · [本地原件](../../../raw/78a061e384a961a9bf5641c4450ea71cb087f95e0f6f1d0ae65394001b6840c2)
  材料版本 `digest-material-78a061e384a961a9bf5641c4450ea71cb087f95e0f6f1d0ae65394001b6840c2@1`；获取方式 `sec_edgar_primary_snapshot`。
  > Label: Q3\_2026 Accession: 0001536411-26-000011 Primary URL: https://www.sec.gov/Archives/edgar/data/1536411/000153641126000011/primary\_doc.xml InfoTable URL: — 原文提取
  > \$.01 | 457669307 | 62777 | 550000 | SH | Call | DFND Somnigroup International Inc | COM | 88023U101 | 61712 | 993600 | SH |  | DFND Newmont Corp | COM | 651639106 | 43875 | 380400 | SH |  | DFND Barrick Mng Corp | COM SHS | — 原文提取
- Duquesne Family Office LLC Form 13F-HR (Q4 2025 Ended 2025-12-31, Accession 0001536411-26-000002) \[错配核查对照\] · Duquesne Family Office · [原站](https://www.sec.gov/Archives/edgar/data/1536411/000153641126000002/0001536411-26-000002-index.html) · [主体档案库](../entities/README.md) · [本地原件](../../../raw/de06b0eae271b3d6587e97355373587a86110b86bb42559e8f63ad0b7df92437)
  材料版本 `digest-material-de06b0eae271b3d6587e97355373587a86110b86bb42559e8f63ad0b7df92437@1`；获取方式 `sec_edgar_primary_snapshot`。
  > Label: Q4\_2025 Accession: 0001536411-26-000002 Primary URL: https://www.sec.gov/Archives/edgar/data/1536411/000153641126000002/primary\_doc.xml InfoTable URL: — 原文提取
  > |  | DFND Bbb Foods Inc | CL A COM | G0896C103 | 89323 | 2675152 | SH |  | DFND Restaurant Brands Intl Inc | COM | 76131D103 | 82490 | 1209000 | SH |  | DFND Cogent Biosciences Inc | COM | 19240Q201 | 78658 | 2214470 | SH |  | — 原文提取
- Duquesne Family Office LLC Form 13F-HR Information Table (Q2 2026 Ended 2026-06-30, Accession 0001536411-26-000006) \[环比基准\] · Duquesne Family Office · [原站](https://www.sec.gov/Archives/edgar/data/1536411/000153641126000006/form13f_20260630.xml) · [主体档案库](../entities/README.md) · [本地原件](../../../raw/5434211f65e9b99fbe1ff4b0d7d693463a24cbc4b7c7d6a7fd0d9a7f4fda1cce)
  材料版本 `digest-material-5434211f65e9b99fbe1ff4b0d7d693463a24cbc4b7c7d6a7fd0d9a7f4fda1cce@1`；获取方式 `sec_edgar_primary_snapshot`。
  > Label: Q2\_2026 Accession: 0001536411-26-000006 Primary URL: https://www.sec.gov/Archives/edgar/data/1536411/000153641126000006/primary\_doc.xml InfoTable URL: — 原文提取
  > | 56477 | 603000 | SH |  | DFND Tesla Inc | COM | 88160R101 | 52996 | 126000 | SH | Call | DFND Fluor Corp | COM | 343412102 | 51457 | 982200 | SH |  | DFND D R Horton Inc | COM | 23331A109 | 48701 | 299000 | SH |  | DFND Coupang — 原文提取

归属与范围：勘误并核实 Duquesne Family Office（CIK 0001536411）Q3 2026 Form 13F：原链接 0001536411-26-000002 实为 Q4 2025（62 条/\$4.494B，2026-02-17 递交），真实 Q3 2026 为 0001536411-26-000011（2026-11-16 递交，65 条/\$4.471B，纯股票 \$4.149B + 5 笔 Call \$321.99M；对比 Q2 95 条/\$5.211B）。XML 逐行复核确认清仓 SPY/IWM/RSP Call 与 Alphabet，TSMC 砍仓 94.5%（589,680 降至 32,700 ADR），Natera 市值达 \$1.306B（29.22%），Seagate 正股加 Call 合计 \$405.64M（9.07%），并新建 SpaceX 202,125 股（\$30.493M）及 NEM/B/AEM 三只金矿股合计 \$129.11M。

来源缺口：

- `pending_verification`：d0107 原始巡检链接 0001536411-26-000002 实为 2025Q4 申报（2026-02-17 递交），已勘误切换至真实 Q3 2026 Accession 0001536411-26-000011；且与既有浅层档案 digest-c401c74fb728377e 存在同季申报重叠 [线索](https://www.sec.gov/Archives/edgar/data/1536411/000153641126000011/0001536411-26-000011-index.html)
- `not_disclosed`：Form 13F 仅披露截至 2026-09-30 的美股多头及部分期权多头（且存在 47 天披露滞后），不包含空头、利率/外汇期货、非美本地证券、现金及未上市敞口 [线索](https://www.sec.gov/Archives/edgar/data/1536411/000153641126000011/form13f_20260930.xml)

[返回赛道总览](../赛道总览.md#digest-16fcb8302018164d) · [返回导读索引](README.md) · [主体档案库](../entities/README.md)
