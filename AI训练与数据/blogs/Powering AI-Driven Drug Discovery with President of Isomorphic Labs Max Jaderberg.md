---
title: "Powering AI-Driven Drug Discovery with President of Isomorphic Labs Max Jaderberg"
type: blog_digest
sector: "AI训练与数据"
source: "No Priors"
published_at: "2026-11-12"
raw_sha256: "9016417cdc8ce77d2d9de3e953079508e154e823cfb1295721cba4715a6dbe81"
material_version: "digest-material-9016417cdc8ce77d2d9de3e953079508e154e823cfb1295721cba4715a6dbe81@1"
origin_url: "https://www.youtube.com/watch?v=IiKf3BgBezE"
trigger_source: "No Priors"
trigger_url: "https://www.youtube.com/watch?v=IiKf3BgBezE"
user_comments: ""
status: "processed_with_gaps"
---

<a id="digest-9016417cdc8ce77d"></a>
# Powering AI-Driven Drug Discovery with President of Isomorphic Labs Max Jaderberg

2026-11-12 · No Priors · 有来源缺口

[本地原件归档](../../../raw/9016417cdc8ce77d2d9de3e953079508e154e823cfb1295721cba4715a6dbe81) · 固定材料版本 `digest-material-9016417cdc8ce77d2d9de3e953079508e154e823cfb1295721cba4715a6dbe81@1` · [一手原站](https://www.youtube.com/watch?v=IiKf3BgBezE)

## 深度拆解与复核

## 场景与利益标注

本访谈于 2026-11-12 发布于风险投资人 Sarah Guo（Conviction）与 Elad Gil 主持的《No Priors》播客，受访者 Max Jaderberg 为 Alphabet 分拆子公司 Isomorphic Labs 总裁。==口径与利益披露==：Alphabet 及 Thrive Capital（2025 年领投 6 亿美元外部融资）持有 Isomorphic Labs 股权，嘉宾有明确动机论证闭源药物设计引擎的长期高毛利壁垒，并淡化临床周期长与资金沉淀风险；两名主持人亦长期重仓应用层 AI 赛道，对话默认偏向垂直整合优于纯粹 API 卖水。

## 核心拆解与跨赛道实证核查

### 一、15 年与 15 亿美元药研困局下的工程切入点

Max Jaderberg 指出，传统新药研发周期长达 15 年、单药研发成本约 15 亿美元（\$1.5B），尽管科学文献与预算呈指数扩张，年度新药获批数数十年来仍基本持平。瓶颈集中于晚期临床毒性失败与动物实验的低可迁移性——大鼠等传统动物模型对人体临床毒性与脱靶效应的预测准确率仅约 30%。Isomorphic Labs 在 AlphaFold 3 证明深度学习跨生物空间泛化能力的基础上，构建统一闭源药物设计引擎 IsoDDE，试图将蛋白与小分子相互作用、结合亲和力、药代动力学 ADMET 及早期毒性筛选前置到计算侧，并以合成人体组织与自动化湿实验逐步替代低效动物试错。

- ✅ 行业基准与人体毒理痛点（本工作台核查）：动物毒理预测人体安全性长期处于低成功率区间确为跨国药企 II/III 期临床高损耗主因；Isomorphic 提出的 60%–80% 机器学习研究员无高校以上生物或化学科班背景，旨在用跨疾病、跨靶点、跨模态的工程建模视角取代传统湿实验经验试错，同时内部保留湿实验团队验证闭环。
- ⚠️ 跨模型代差压力（本工作台核查）：对比本工作台 AI医药 赛道既有《[诺奖得主 Baker 最新演讲：AI 正在颠覆生命科学](../../AI医药/blogs/诺奖得主Baker最新演讲：AI正在颠覆生命科学%EF%BC%81.md)》，UW IPD 与 NVIDIA 推出的 RFD4-Proteina（Lenacapavir 合成酶零样本命中 4/67 即 6.0%）及 MIT/Recursion 开源的 Boltz-2（结合自由能预测较传统 FEP 快 1,000 倍）已快速拉平结构与亲和力计算门槛，闭源引擎 IsoDDE 的真实壁垒已退守至多属性 ADMET 协同优化与人体体内成药性验证。

### 二、拒绝 API 与 Token 商业化的资本账与同类对比

Max Jaderberg 明确表示 Isomorphic Labs 绝不对外出售 API 或模型 Token，坚持将设计引擎锁在内部，一方面推进肿瘤、免疫与炎症方向的自研管线，另一方面仅与大型药企签署高额里程碑合作（已披露 2024 年 1 月签约的 Eli Lilly \$45M 首付款合作与 Novartis \$37.5M 首付款及后续扩约合作）。

| 比较维度 | Isomorphic Labs | Recursion Pharmaceuticals | Tempus AI / Boltz 生态 |
| :--- | :--- | :--- | :--- |
| 核心路径 | 闭源 IsoDDE + 自研管线 + MNC 合作 | 自有湿实验表型闭环 + MNC 合作 | 肿瘤多组学数据授权 / 开源基座 |
| 资本底座与现金消耗 | Alphabet 孵化 + Thrive 等 \$600M 融资 | 2026 前 9 月经营现金流出 \$264.45M | Tempus 2026Q3 营收 \$411.5M（毛利率 64.8%） |
| 商业变现与稀释风险 | 靠 Lilly \$45M / Novartis \$37.5M 首付降杠杆 | 2026-10-16 被迫 \$3.04/股增发 6,150 万股 | 数据合同超 \$550M，稳态现金流护城河 |
| 核心待解瓶颈 | 自研管线尚无大规模人体临床读数 | 9M26 营收 \$32.69M 高度依赖离散里程碑 | Boltz-2 仅卖铲子或开源，无终局新药分成 |

- ⚠️ 高毛利管线账的资本前提（本工作台推断）：交叉核对 AI医药 赛道《[Recursion Pharmaceuticals Q3 2026 Form 10-Q](../../AI医药/blogs/Recursion%20Pharmaceuticals%20Q3%202026%20Form%2010-Q_%20Revenue%20Jumps%20to%20%2418.55M%20%28%2410M%20Sanofi%20Milestone%29%20&%20Net%20Loss%20Narro.md)》可见，“不做 API、押注自研管线”极其依赖母体或一级市场巨额耐心资本托底——Recursion 在 2026 前 9 个月研发仍消耗高位现金、营收仅 \$32.69M（靠 Sanofi 单笔 \$10M 里程碑撑起 Q3 的 \$18.55M），最终不得不在 10 月以约 \$3.04/股折价增发 6,150 万股募资 \$1.872 亿续命，甚至曾用 RXRX 股票向卖水人 Tempus AI 抵付数据应收账款。Isomorphic 依靠 Alphabet 算力与 \$600M 外部融资暂时绕开了二级市场折价摊薄，但若其引擎设计的分子无法在人体 Phase 1/2 显著压低毒性失败率，远期里程碑依然无法线性兑现。

### 观点与可反驳条件

- ==观点==：==AI 药物设计的基础结构预测能力已在 2026 年随 RFD4-Proteina 与 Boltz-2 快速平权，Isomorphic Labs 拒绝出售 API/Token 而选择闭源垂直整合，能否跑通高毛利商业闭环的唯一试金石不再是分子对接得分，而是其模型对人体临床毒性与 ADMET 成药性的真实预测胜率，以及能否在耗尽 \$600M 融资与药企首付款前拿到首批人体临床概念验证数据==。
- ==推翻条件==：
  1. ① 若截至 2028 年底，Isomorphic Labs 内部主导及联合 Eli Lilly、Novartis 推进的候选分子仍未实现任何一项进入人体 Phase 1/2 临床并展现出优于传统小分子基线的安全性与药代读数，或同期开源基座结合外部 CRO 湿实验的管线临床转化率反超闭源平台，则其全闭源不开放 API 的高溢价逻辑将被证伪。
  2. ② 若 Isomorphic Labs 在未来 24 个月内宣布向中小 Biotech 开放商业 API 或推理 Token 订阅以补充现金流，说明高周期管线资本回收期已迫使其向软件卖水模式妥协。

---

## 原文摘录与一手信源存证

> 【信源巡检核心摘要】 Isomorphic Labs总裁Max Jaderberg在Sarah Guo与Elad Gil主持的《No Priors》访谈中指出，传统新药研发周期约15年、成本约15亿美元且受困于后期临床毒性失败，而Isomorphic旨在用高精度in-silico预测模型替代经验试错。
> — 原文摘录，文字段落 1；证据 `digest-material-9016417cdc8ce77d2d9de3e953079508e154e823cfb1295721cba4715a6dbe81-excerpt-1@1`

一手材料：

- Powering AI-Driven Drug Discovery with President of Isomorphic Labs Max Jaderberg · No Priors · [原站](https://www.youtube.com/watch?v=IiKf3BgBezE) · [主体档案：No Priors](../entities/labs/No%20Priors.md) / [主体档案：Isomorphic Labs](../entities/companies/Isomorphic%20Labs.md) · [本地原件](../../../raw/ca2290a859173a56e88f62258a2f7bc6bb0788c64e9770da83fc42339d5601b8)
  材料版本 `digest-material-ca2290a859173a56e88f62258a2f7bc6bb0788c64e9770da83fc42339d5601b8@1`；获取方式 `web_search_verified_primary`。
  > Primary Source Verification Snapshot (d0058) Title: Powering AI-Driven Drug Discovery with President of Isomorphic Labs Max Jaderberg Source / Show: No Priors Podcast (hosted by Sarah Guo and Elad Gil) Guest: Max Jaderberg, — 原文提取
  > biopharma from empirical trial-and-error toward precision in silico molecule engineering, eventually pairing predictive AI models with synthetic human tissues and automated wet labs to phase down animal testing.  2. AlphaFold 3 — 原文提取

归属与范围：已通过 web\_search 核实《No Priors》2026-11-12 期对 Isomorphic Labs 总裁 Max Jaderberg 访谈核心论据，并与 AI医药 赛道既有 Recursion Q3 2026 10-Q 与 David Baker 克鲁尼安讲座完成交叉对比。

来源缺口：

- `unavailable`：沙盒内未直接下载 YouTube 视频 IiKf3BgBezE 完整逐字字幕，访谈引述基于节目公开摘要与一手播客索引 [线索](https://www.youtube.com/watch?v=IiKf3BgBezE)
- `not_disclosed`：Isomorphic Labs 内部管线临床试验 IND 申报确切时间表及 Eli Lilly / Novartis 合作保密靶点名称未公开披露 [线索](https://www.isomorphiclabs.com/)

[返回赛道总览](../赛道总览.md#digest-9016417cdc8ce77d) · [返回导读索引](README.md) · [主体档案库](../entities/README.md)
