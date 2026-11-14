---
title: "3D打印服务商Xometry第三季度营收2.52亿美元再创新高，首次实现GAAP季度盈利"
type: blog_digest
sector: "AI应用与开发工具"
source: "Xometry 26Q3 财报 / SEC 10-Q"
published_at: "2026-11-08"
raw_sha256: "2b6d801e23b6b1a7da7a33595dac7acf292ea131d90b19a714867bdac392948d"
material_version: "digest-material-2b6d801e23b6b1a7da7a33595dac7acf292ea131d90b19a714867bdac392948d@1"
origin_url: "https://www.globenewswire.com/news-release/2026/11/03/3190820/0/en/Xometry-Reports-Record-Third-Quarter-2026-Results.html"
trigger_source: "南极熊3D打印"
trigger_url: "https://mp.weixin.qq.com/s/yVN4BMWQJPtFDyHgf3ft9A"
user_comments: "这家公司我一直都很感兴趣，帮我做个gstack的公司研究"
status: "processed"
---

<a id="digest-2b6d801e23b6b1a7"></a>
# 3D打印服务商Xometry第三季度营收2.52亿美元再创新高，首次实现GAAP季度盈利

2026-11-08 · Xometry 26Q3 财报 / SEC 10-Q · 已整理

[本地原件归档](../../../raw/2b6d801e23b6b1a7da7a33595dac7acf292ea131d90b19a714867bdac392948d) · 固定材料版本 `digest-material-2b6d801e23b6b1a7da7a33595dac7acf292ea131d90b19a714867bdac392948d@1` · [一手原站](https://www.globenewswire.com/news-release/2026/11/03/3190820/0/en/Xometry-Reports-Record-Third-Quarter-2026-Results.html) · [触发线索（南极熊3D打印）](https://mp.weixin.qq.com/s/yVN4BMWQJPtFDyHgf3ft9A)

> [!IMPORTANT]
> 用户关注点（TG）：这家公司我一直都很感兴趣，帮我做个gstack的公司研究

## 针对性追查与回应

已按 gstack / w 六步公司研究规范完成 Xometry, Inc. (NASDAQ: XMTR, CIK 0001657573) 深度研究，并建立独立研究目录与交互式 Tearsheet：
- 📊 交互式 Tearsheet（含年度/季度切换图、26Q3 利润桥瀑布图与客户飞轮）：[`work/views/AI应用与开发工具/xometry/refs/index.html`](https://mojojolite-sketch.github.io/AI%E5%BA%94%E7%94%A8%E4%B8%8E%E5%BC%80%E5%8F%91%E5%B7%A5%E5%85%B7/xometry/refs/index.html)（在线访问：`https://mojojolite-sketch.github.io/AI应用与开发工具/xometry/refs/index.html`）
- 📄 完整 Markdown 主稿：[`work/views/AI应用与开发工具/xometry/research.md`](../xometry/research.md)

以下为四层深度拆解精要：

---

### 第一层：Xometry 到底是一家什么公司？（破除“3D 打印代工厂”误解：它是「非标制造界的 Uber + AI 实时几何定价做市商」）

中文科技媒体常把 Xometry 简称为“3D 打印服务商”，但这严重掩盖了它的真实商业模式：Xometry 自己几乎不买重型机床或工业 3D 打印机（Asset-Light），也不靠自己开工厂挣加工费；它是一个用 AI 图神经网络做实时定价与派单的“非标零部件做市商（Market Maker）”。

```text
┌─────────────────────────────────────────────────────────────────────────────────────────┐
│                Xometry (NASDAQ: XMTR) 双边市场架构与 AI 实时定价资金/物流闭环             │
└─────────────────────────────────────────────────────────────────────────────────────────┘

 【买家侧：93,812 活跃买家 / 2,172 家 ≥$50k 大客户】      【卖家侧：全球 4,200+ 认证制造工厂 (Active Suppliers)】
  • 痛点：传统非标外协需发邮件找 3-5 家机加工厂人工看图，   • 痛点：全球数十万中小 CNC/注塑厂仅 10-50 台机床，
    等待 3~14 天才能拿到报价，且各厂报价相差 3~5 倍           无数字化获客能力，机床产能利用率常年仅 50%~65%
  • 入口1：网页拖拽上传 3D CAD + Teamspace 企业采购协同    • 工厂端 SaaS（Workcenter）：无需人工算价写报价单，
  • 入口2：西门子 5000 万美元战略入股，将 Xometry 报价       直接看到 AI 推送的【一口价报酬 P_B + 图纸 + 交期】，
    引擎原生嵌入 Siemens Designcenter (2027Q1 公测)          有空闲机台即像 Uber 司机一样一键“抢单 (Accept)”！
                        │                                                    ▲
                        ▼ (1) 上传 3D CAD 几何网格                           │ (3) 派单结算价 P_B (64.0% COGS)
 ┌───────────────────────────────────────────────────────────────────────────┴────────────┐
 │         核心大脑：Xometry AI Instant Quoting & Matching Engine（图神经网络 + 制造大模型）   │
 │  • 秒级解析 CAD 3D 拓扑特征（孔位/曲面/公差/壁厚），自动输出 DFM（可制造性诊断）与买家一口价 P_A  │
 │  • 会计准则（ASC 606）下作为主要责任人（Principal）按【总额法】确认收入：                     │
 │    2026Q3 买家付款确认营收 P_A ($238.00M) - 付给工厂成本 P_B ($152.30M) = 毛利 $85.70M (36.0%) │
 └────────────────────────────────────────────────────────────────────────────────────────┘
```

1. 六大核心工艺（CNC 与注塑量产才是大头，3D 打印只是引流入口）：
   - 涵盖 CNC 精密机加工（三轴/五轴铣削、车削）、注塑成型与模具（从几百件铝模试产到百万件钢模量产）、钣金加工、压铸、聚氨酯复模 以及 工业级 3D 打印（SLS/SLA/MJF/DMLS/FDM 等 7 大工艺）。
2. 两大披露分部（100% 增长引擎在 Marketplace）：
   - Marketplace（占 2026Q3 总营收 94.3%）：2026Q3 营收 \$238.00M（同比暴增 +42.9%），分部毛利 \$85.70M，分部毛利率创历史新高 36.0%（同比 +30 bps，环比 26Q2 的 34.7% 跃升 +130 bps）。
   - Supplier Services / Thomasnet（占 2026Q3 总营收 5.7%）：主体为 2021 年 12 月以 \$300M 收购的北美老牌工业名录平台 Thomasnet（广告展示、认证徽章及 Workcenter 供应链金融 Instant Pay）。分部毛利率高达 ~89.9%（单季毛利 \$12.98M），在经历 FY2022 (\$77.9M) → FY2025 (\$57.0M) 连续三年萎缩后，于 2026Q3 录得 \$14.44M（同比 +2.2%） 初步止跌企稳。

---

### 第二层：五年财务演进与 Unit Economics 深度拆解（为什么 2026Q3 能首次实现 GAAP 季度盈利？）

#### 1. 五年历史年度与 2026 季度核心财务序列（FY2021–2026Q4E，来自 SEC Form 10-K / 10-Q）

| 财务与运营指标 (百万美元) | FY2021 | FY2022 | FY2023 | FY2024 | FY2025 | 2026Q1 | 2026Q2 | 2026Q3 | 2026Q4E / FY26E 指引 |
| :--- | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| 总营收 (Total Revenue) | \$218.3 | \$381.0 | \$463.4 | \$545.5 | \$686.6 | \$205.1 | \$229.3 | \$252.44 | Q4: \$254–\$256M / FY: ≥+37% |
| ↳ *总营收同比增速 (YoY)* | *+54.4%* | *+74.5%* | *+21.6%* | *+17.7%* | *+25.9%* | *+36%* | *+40%* | +40.0% | 年化 Run-rate >\$1.01B |
| 1. Marketplace 营收 | ~\$214.0 | \$303.1 | \$394.8 | \$485.9 | \$629.6 | \$191.3 | \$215.4 | \$238.00 | +42.9% YoY (占比 94.3%) |
| 2. Supplier Services 营收 | ~\$4.3 | \$77.9 | \$68.7 | \$59.6 | \$57.0 | \$13.8 | \$13.9 | \$14.44 | +2.2% YoY (占比 5.7%) |
| Marketplace 毛利率 (%) | ~23.5–27.4% | 28.8% | 30.8% | 33.5% | 34.7% | 34.7% | 34.7% | 36.0% | 创历史最高纪录 |
| 合并毛利 (Gross Profit) | \$57.2 | \$146.9 | \$178.9 | \$215.3 | \$271.2 | \$78.8 | \$88.2 | \$98.68 | 合并毛利率 39.1% |
| 活跃买家数 (Active Buyers) | 28,130 | 40,567 | 55,325 | 68,267 | 81,821 | 85,581 | 89,557 | 93,812 | +20% YoY (单季净增 4,255) |
| 大客户数 (LTM Spend ≥\$50k) | 701 | 1,027 | 1,331 | 1,495 | 1,760 | 1,864 | 2,039 | 2,172 | +26% YoY 加速扩张 |
| Adjusted EBITDA | $(36.2) | $(34.7) | $(28.2) | $(9.7) | +\$18.5 | +\$10.5 | +\$14.1 | +\$21.42 | Q4: \$22–22.5M / FY: \$68–68.5M |
| GAAP 营业利润 / (亏损) | $(60.8) | $(78.1) | $(66.9) | $(49.2) | $(33.5) | $(7.1) | $(6.8) | +\$0.057 | 首次季度营业利润转正 (+\$57k) |
| GAAP 归母净利润 / (亏损) | $(61.7) | $(79.0) | $(67.5) | $(50.4) | $(31.2) | $(5.3) | $(5.3) | +\$1.935 | 首次季度 GAAP 盈利 (\$0.03/sh) |

#### 2. 驱动 2026Q3 首次实现 GAAP 盈利的三大飞轮与完整利润桥

1. 飞轮一（AI 定价与寻源匹配精度飞轮 $\rightarrow$ Marketplace 毛利率爬升超 1,000 bps）：
   随着历史成交零件图谱累积，AI 对买家价格弹性与全球 4,200+ 工厂闲置产能底价的预测误差持续收敛，Marketplace 毛利率从 2021 年的 ~23.5%–27.4% 一路爬升至 2026Q3 的 36.0%。在单季 \$238M Marketplace 营收规模下，相比 2022 年的毛利率水平，每个季度直接多创造 \$17.1M 纯毛利增量。
2. 飞轮二（企业大客户 Land & Expand 飞轮 $\rightarrow$ 摊薄获客成本）：
   Xometry 96%–98% 营收来自存量客户复购。大企业工程师先用信用卡打样 3D 打印手板（Land），随后通过 Teamspace 将整个部门的 批量生产件（Production Orders） 迁入平台（Expand），推动 年消费满 \$50,000 的大客户数在 2026Q3 达到 2,172 家（同比增速从 25 年 +18%、26Q2 +23% 显著加速至 +26%），将 GAAP 销售与营销费率压降至 14.1%。
3. 飞轮三（国际业务 + 西门子战略嵌入飞轮）：
   欧洲与亚太（FY25 国际收入 \$113M，+27% YoY，占 Marketplace 约 18%–19%）持续高速扩张；2026Q1 西门子斥资 \$50M 认购 Xometry 新股，将于 2027Q1 推出内嵌 Xometry 报价引擎的 Siemens Designcenter（NX / Solid Edge）测试版，并推进 西门子 Supplyframe × Thomasnet 合作，直接从工业 CAD 设计源头截流全球企业采购订单。
4. 2026Q3 首次 GAAP 盈利桥（单位：千美元）：
   - 合并毛利：\$98,680（毛利率 39.1%，同比 +\$26,670）；
   - 减去四项 GAAP 营业费用：合计 $(98,623)（其中 S&M \$35,571、运营支持 \$23,264、研发 \$16,102、行政 \$23,686；剔除 SBC 与折旧后 Non-GAAP 营业费用仅 \$77.4M，同比仅增 +17%，不到营收增速 +40% 的一半）；
   - GAAP 营业利润：+\$57（首次转正！）；
   - 加上净利息收入（账面 $505.0M 现金及有价证券带来 +$4,440 利息收入，扣除可转债利息支出 $(1,258) 及税费其他 $(1,304)）** $\rightarrow$ 归母 GAAP 净利润 +\$1,935（+\$1.94M / \$0.03 EPS），Adjusted EBITDA 达 \$21,423（\$21.42M，边际 EBITDA 转化率高达 21.3%）。

---

### 第三层：全球竞争格局横比（为什么轻资产 Xometry 彻底反超了昔日重资产霸主 Protolabs？）

| 竞争对手 | 商业模式与资产结构 | 2025–2026Q3 营收与增速 | 毛利率与盈利对比 | 客户任务边界与竞争胜负手 |
| :--- | :--- | :--- | :--- | :--- |
| Xometry<br/>(NASDAQ: XMTR) | 纯轻资产双边平台（Asset-Light）：0 自有重型工厂，AI 引擎连接 9.38 万买家与 4,200+ 工厂 | • FY25: \$686.6M (+26%)<br/>• 26Q3: \$252.4M (+40% YoY)<br/>• 年化 Run-rate >\$1.01B | • 合并毛利率 39.1% (Mkt 36.0%)<br/>• 26Q3 GAAP 净利 +\$1.94M，Adj. EBITDA \$21.4M (8.5%) | 全生命周期覆盖（1 件手板 → 百万件量产）：无自有设备尺寸/工艺上限；具备 ITAR / AS9100 / ISO13485 合规与西门子 CAD 原生入口 |
| Protolabs<br/>(NYSE: PRLB) | 重资产自建数字工厂为主 + Hubs 平台为辅：欧美自持数千台 CNC/注塑/3D 打印设备 | • FY24: \$500.9M (-0.6%)<br/>• FY25: \$533.1M (+6.4%)<br/>• 26Q3: \$154.3M (~+10% YoY) | • Non-GAAP 毛利率 44.5%–46.8%<br/>• 自营工厂满产毛利高，但重资产折旧重、增长缓慢 | 欧美本土 1–3 天超快加急打样极强，但价格昂贵；受自有机器加工包络线限制，客户进入大批量量产时易流失至 Xometry |
| Materialise<br/>(NASDAQ: MTLS) | 3D 打印软件 (Magics) + 医疗定制器械 + 欧洲增材工厂 | • FY25: €267.6M (+0.3%)<br/>• 26Q3: €67.7M (+2.1% YoY) | • 合并毛利率 ~57.1%（软件与医疗拉高），26Q3 净利 €1.38M | 医疗骨科导板/植入物与增材控制软件壁垒高，工业通用代工停滞 |
| Fictiv<br/>*(被 MISUMI 收购)* | 轻资产数字化制造网络：2025 年中以 \$350M 全现金被日本米思米（MISUMI）收购 | • 并购时点年化营收 ~\$92M（估值约 3.8x EV/Sales），增速 ~30%–40% | • 平台毛利率估计 30%–35%，并入 MISUMI 后打通 meviy 自动报价软件 | 北美硬件团队与中大型企业托管制造，在东莞/印度设驻厂质检团队；印证工业巨头对 AI 轻资产寻源网络的并购溢价 |
| 嘉立创 JLCPCB / PCBWay | 中国超大规模集约化自营数字工厂：自建数千台 CNC/SMT/PCB/3D 打印农场 | • 集团年营收超百亿元人民币（未上市，机械 CNC/3D 打印出海迅猛） | • 珠三角极致供应链 + 拼单算法，标准件单位成本全球最低 | 中小批量标准件价格屠夫（\$1–\$5 起），截流海外创客与价格敏感型研发；但受制于 ITAR 与美国军工/大企合规门槛 |

---

### 第四层：核心争议、风险敞口与显式数据缺口（Gaps）

1. 【核心未披露缺口 `not_disclosed`】中美关税与跨境供应链黑盒（`obs-xmtr-china-sourcing-share-gap@1`）：
   - Xometry 之所以能对欧美客户报出比本土工厂低 30%–50% 的价格并截留 36.0% 毛利率，核心支柱之一是将大量非涉密、标准交期的美国订单派发给中国珠三角/长三角高精密 CNC 与模具工厂生产，再经空运直邮交付。
   - 公司在 10-K 风险因素中提示了关税与贸易摩擦风险，并称 AI 引擎可动态重定价、将订单改派至美国本土、墨西哥、土耳其或印度工厂；但公司从未在财报中定量披露“美国区 Marketplace 成本中由中国跨境供应商履约的具体占比”——若关税大幅升级，订单改派高成本地区对 36% 毛利率的实际冲击仍需跟踪验证。
2. 西门子 Designcenter 2027Q1 公测后的转化漏斗（q-xmtr-siemens-monetization-2027@1）：
   - 需在 2027Q1–Q2 验证西门子 NX / Solid Edge 工程师一键询价对 ≥\$50k 企业量产客户的拉动幅度及与西门子的分成机制。
3. Thomasnet（Supplier Services）商誉与变现恢复（q-xmtr-thomasnet-stabilization@1）：
   - \$300M 收购的 Thomasnet 在连续三年萎缩后于 2026Q3 录得 \$14.44M (+2.2%)，需观察其与西门子 Supplyframe 的合作能否实质恢复高毛利广告与寻源订阅增长。

---

## 原文摘录与一手信源存证

> 2026年11月，南极熊获悉，按需制造在线平台Xometry（纳斯达克股票代码：XMTR）公布了2026年第三季度财报，季度营收达到2.52亿美元（约合16.8亿元人民币），连续第三个季度创下营收纪录，首次实现GAAP季度盈利（即扣除各项成本后的真实经营利润），达190万美元（约合1267万元人民币）。
> — 原文摘录，文字段落 1；证据 `digest-material-2b6d801e23b6b1a7da7a33595dac7acf292ea131d90b19a714867bdac392948d-excerpt-1@1`

> 今年早些时候，Xometry公布第一季度财报时单季营收2.05亿美元（约合13.6亿元人民币）创纪录，带动公司股价大幅上涨；当时西门子向这家在线制造市场投资5000万美元（约合3.3亿元人民币），并把Xometry的即时报价引擎与制造智能功能整合进西门子的设计软件网络。
> — 原文摘录，文字段落 2；证据 `digest-material-2b6d801e23b6b1a7da7a33595dac7acf292ea131d90b19a714867bdac392948d-excerpt-2@1`

> 在第三季度财报电话会议上，Xometry总裁Sanjeev Singh Sahni表示：“我们预计将于2027年第一季度推出测试版，随后将在年内逐步向客户推广Design Center的各个版本。除了Design Center内部的工作之外，西门子Supply Frame和Thomas之间也在积极合作，这将进一步提升双方团队能够为客户带来的价值。我们将随着项目进展分享更多信息，并预计与西门子的合作将对我们2027年的运营业绩产生积极影响。
> — 原文摘录，文字段落 3；证据 `digest-material-2b6d801e23b6b1a7da7a33595dac7acf292ea131d90b19a714867bdac392948d-excerpt-3@1`

一手材料：

- Xometry Reports Record Third Quarter 2026 Results, Siemens \$50M Strategic Partnership & FY2021-2026 SEC Filing Dossier · Xometry, Inc. Investor Relations / SEC EDGAR (CIK 0001657573) / Siemens AG Official Releases · [原站](https://www.globenewswire.com/news-release/2026/11/03/3190820/0/en/Xometry-Reports-Record-Third-Quarter-2026-Results.html) · [主体档案：Xometry](../entities/companies/Xometry.md) / [主体档案：Siemens](../entities/companies/Siemens.md) · [本地原件](../../../raw/4abe0e7026b12b17e9e1cb088bbacec35aaf77bf7087015527a0e12356011b19)
  材料版本 `digest-material-4abe0e7026b12b17e9e1cb088bbacec35aaf77bf7087015527a0e12356011b19@1`；获取方式 `primary_source_dossier_compilation`。
  > Document 1: Xometry Reports Record Third Quarter 2026 Results (First-Ever GAAP Profitable Quarter) Source: Xometry, Inc. — 原文提取
  > 1. CORPORATE IDENTITY & EXECUTIVE LEADERSHIP VERIFICATION - Legal Name: Xometry, Inc. — 原文提取

归属与范围：完成 Xometry（NASDAQ: XMTR, CIK 0001657573）一手财报与 SEC Form 10-K/10-Q 取证及 gstack / w 深度公司研究：建立独立研究目录 work/views/AI应用与开发工具/xometry/（含 research.md 与 Leuchtturm1917 风格交互式 Tearsheet refs/index.html），向 work/registry.sqlite3 写入 44 条版本化记录（含 FY2021–2026Q3 完整分部营收、毛利率、利润桥、客户飞轮及跨境中国供应链占比未披露缺口 obs-xmtr-china-sourcing-share-gap@1）。

[返回赛道总览](../赛道总览.md#digest-2b6d801e23b6b1a7) · [返回导读索引](README.md) · [主体档案库](../entities/README.md)
