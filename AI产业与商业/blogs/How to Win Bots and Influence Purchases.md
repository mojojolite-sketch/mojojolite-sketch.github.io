---
title: "How to Win Bots and Influence Purchases"
type: blog_digest
sector: "AI产业与商业"
source: "a16z (Olivia Moore & Justine Moore) · The Prompting Company"
published_at: "2026-11-23"
raw_sha256: "e2060220af905db8cba6c40c3966b1759fc6b901426bc6401144aa0e01ed67e9"
material_version: "digest-material-e2060220af905db8cba6c40c3966b1759fc6b901426bc6401144aa0e01ed67e9@1"
origin_url: "https://www.a16z.news/p/welcome-to-the-b2a-economy-how-agents"
trigger_source: "The a16z Show (a16z Podcast)"
trigger_url: "https://www.a16z.news/p/welcome-to-the-b2a-economy-how-agents"
user_comments: ""
status: "processed_with_gaps"
primary_topic: "分发渠道、平台与支付"
topic_confidence: 0.9246
---

<a id="digest-e2060220af905db8"></a>
# How to Win Bots and Influence Purchases

2026-11-23 · a16z (Olivia Moore & Justine Moore) · The Prompting Company · 有来源缺口

[本地原件归档](../../../raw/e2060220af905db8cba6c40c3966b1759fc6b901426bc6401144aa0e01ed67e9) · 固定材料版本 `digest-material-e2060220af905db8cba6c40c3966b1759fc6b901426bc6401144aa0e01ed67e9@1` · [一手原站](https://www.a16z.news/p/welcome-to-the-b2a-economy-how-agents)

## 深度拆解与复核

- 口径与利益：本篇拆解已全部穿透 [a16z《How to Win Bots and Influence Purchases》原文（2026-11-23）](https://www.a16z.news/p/welcome-to-the-b2a-economy-how-agents)、[The Prompting Company 11,307 次实测报告（2026-11-10）](https://promptingcompany.com/research/how-personal-agents-choose)、[Stripe Link × Meta Muse 官方通稿（2026-11-01）](https://stripe.com/newsroom/news/stripe-helps-meta-muse-shop-with-link) 与 [OpenAI ChatGPT Wallet 官方发布（2026-11-13）](https://openai.com/index/introducing-chatgpt-wallet/)。作者 Olivia Moore 与 Justine Moore 为 a16z 消费科技团队合伙人，文末声明 a16z 可能持有提及公司权益且未独立审计第三方数据；联合实验方 The Prompting Company 自身向 NVIDIA、Google、Databricks、Cloudflare、Kalshi、Vercel、Snapchat、Exa、Clay 等企业销售面向 Agent 的可见性优化软件，存在推动商家采购 Agent Optimization 工具的明确商业激励。

### 一、核心机制拆解：B2A 购物决策链路与三重控制点收敛（对应 T2）

1. 窄候选池趋同与场景「尖峰翻转」
   - 在 Grok Bot、Muse、Instinct 与 Dots 四家个人 Agent 的 11,307 次测试中，一个商品被某 Agent 选中后有 73% 概率被至少另一家选中，近 25% 场次四家榜首完全一致。Muse 是唯一完整暴露检索日志的 Agent，显示其几乎总是先扫 Meta 自有 Commerce Manager 目录抓取最多 50 个选项，即使开启浏览器也平均只查看 3 个商品页，决定排序的核心因子高度集中在价格与评论。
   - 当问题宽泛时 Agent 默认选出平价高性价比产品，但一旦用户加入特定物理或业务约束，性能参数即刻反转结果：Shark FlexStyle vs Dyson Airwrap 无限定测试中 Shark 拿下 91% 场次（126 次样本），一旦声明细软/受损发质 Dyson 升至 51%，声明每天使用 Dyson 升至 88%（Muse、Instinct、Dots 均达 100%）；Canva vs Adobe 常规平面设计测试中 Canva 占 78%、Adobe 为 0%，提及团队共享模板后 Adobe 升至 43%（Dots 达 100%），要求专业级输出时 Adobe 以 100% 胜出（41 胜 0 负）。

2. 爬虫检索链路重构与机器冷算全包成本
   - 与传统 LLMs（ChatGPT / Gemini）主要依赖训练语料并引用媒体评测站（NBC News 占 ChatGPT 6.1%、Reddit 占 Gemini 4.9%，商店在商店+评测总引用仅占 61.6%）不同，个人 Agent 先调取用户记忆（User Memory），再查内部目录/连接器与外部网页搜索（Muse 与 Dots 用自研搜索，Grok Bot 与 Instinct 调用 Exa），将 76.2% 的商店+评测引用直连可购买页面。软件选用测试中，Dots 读到 Midjourney 社区条款无通用 API 且禁止自动化调用后，立即转选在官网显著暴露 API 与官方 MCP 集成代码的 Ideogram。
   - 机器比价冷算包含运费、订阅续费套路与退货条款的「全包成本」：同价测试中，Agent 在 86% 场次选择免退货运费或退货期更优一方；Quince 虽非全球前 15 零售商，凭 $50 羊绒衫页面顶部结构化披露价格、免运费、库存与品牌对比挤入 Agent 消费 Top 15；科技类交易第 1 名（总榜第 9 名）域名商 Porkbun 击败月注册量 2.6 倍的 Cloudflare（第 17 名）与 4.8 倍的 GoDaddy（第 112 名），核心原因是 Muse 与 Dots 严厉惩罚首年低价续费暴涨与锁定条款。此外，跨 275 组比价显示 Agent 在 72% 场次愿为高信任授权商家支付溢价（如 Grok Bot 舍 $200 选 $250 Sonos 授权商保修）：折扣低于 10% 毫无影响，10%–50% 仅在 24% 场次倒向低价非授权卖家，超过 50% 反而因反欺诈全部避开。

3. 四大个人 Agent 渠道分流与防爬/支付清算网关

| 个人 Agent | 外部检索与防爬特征 | 渠道与合作生态倾斜 | 核心采信依据（Prompting Co 数据） |
| :--- | :--- | :--- | :--- |
| Grok Bot | 调用 Exa；Amazon 结账测试 100% 到达购物车 | 17.5% 运行链接至 Amazon（其余均不超过 1.6%）；5% 运行（115/2,286）主动提议连接 App（其余均不超过 0.2%） | 价格 48%、评论 30%、库存 8%、配送 6%；支持 Shopify Catalog 与 Stripe Link |
| Muse (Meta) | 自研搜索；先扫 Meta Commerce Manager 50 项目录 | 26.4%（文章约称 26%）链接 Walmart、21.5%（文章称 22%）链接 Best Buy；正与 Walmart 联手建 A2A 通道 | 价格 57%、评论仅 10%（其余均 30%–41%）；原生集成 Stripe Link（超百万商户）与 Shop Pay |
| Instinct | 调用 Exa；Amazon 结账受阻；75.3% 引用品牌官网（45% 仅推官网） | 极少跳转大零售商（13.9%），最强直连品牌 DTC 倾向 | 价格 53%、评论 40%、库存 37%、退换货 14%；26 次评分决胜仅 4 次采信更高评分 |
| Dots (OpenAI) | 自研搜索；2026-11-13 接入 ChatGPT Wallet；15 次 Nordstrom 库存测试全被拦截 | 63.2% 引用品牌官网，依赖 11 月 10 日发布的 Businesses in ChatGPT 商品 feed | 评论 41%、专业评测（RTINGS）11.4%（其余均不超过 3.7%）；软件任务优先考察「易用性」 |

- 聚合平台回流与登录墙拦截：在 YipitData Top 50 商家中，近三分之一消费流向市场与聚合平台，计入自营+第三方平台零售商升至 46%，含传统多品牌零售商达 55%（Expedia 与 Booking.com 包揽前两名，American Airlines 第 4、United 第 6）。以旧金山 Hotel Zelos（2026-12-04 至 12-06）为例，可退大床房官网 $476.20 而 Expedia 标价 $476 且同时暴露到店付/现付（含 PayPal），Agent 几乎必然流向聚合商。在结账环节，支持访客结账（Guest Checkout）时 Agent 到达表单末尾率为 81%，而要求账号登录时 100% 提前停摆或换店；为此 Stripe Link（超 3 亿用户、超 100 万商户，其余商户发单次虚拟卡）与 OpenAI ChatGPT Wallet（联合 Amex / Chase / Mastercard / Visa 发行一次性令牌，Face ID 审批并配套 Web Bot Auth 与 WebMCP）正加速成为 Agent 交易的身份与清算网关。

### 二、实验设计核查、口径分裂与商业中立性边界（对应 T3）

| 数据集与主体 | 覆盖时间与样本量 | 覆盖产品与平台 | 口径边界与潜在偏差（本工作台核查） |
| :--- | :--- | :--- | :--- |
| The Prompting Company 个人 Agent 测试 | 2026-10-22 至 2026-11-08；1,270 条提示、11,307 次完成运行 | Grok Bot、Muse、Instinct、Dots；物理商品（如 $150 以下降噪耳机）与软件（Adobe vs Descript） | ⚠️ 核查（实验室可控测试）：含 80 条无品牌购物（3,283 次）、334 条软件对比（2,785 次）、393 条店面改动（1,597 次）与 15 条结账（100 次），测量推荐概率与表单可达率，未披露 81% 到达表单后的最终支付成功转化率 |
| 传统 LLM 购物基线对比 | 同期 2,619 次运行（子集 77 条共用提示：ChatGPT 642 次、Gemini 491 次） | ChatGPT、Gemini、Perplexity | ✅ 核查（对照口径清晰）：常规 ChatGPT 仅 59% 给出购买商店、Gemini 仅 57%（直连官网仅 16.3%），显著低于四家个人 Agent 97%–99% 的可买链接覆盖率 |
| YipitData 消费刷卡面板 | 截至 2026-11-11 | Muse 与其他个人 Agent 促成的美国真实卡消费 | ❌ 核查（分母漂移严重）：统计含人类点击下单的「facilitated by」消费，未拆分 Muse 与 Instinct，且完全剔除 Amazon（而 Grok Bot 测试中 17.5% 外链指向 Amazon），会系统性抬高 Expedia、Booking.com、Walmart、Best Buy 与 Quince 的表面份额 |

- ⚠️ 本工作台核查（商业中立性退化风险）：a16z 原文披露 OpenAI 近期悄然删除了「商业合作不影响 ChatGPT 商品推荐」的承诺，而 Meta Muse 亦优先读取自有 Commerce Manager 50 项目录并与 Walmart 搭建 A2A 通道；随着商业协议落地，所谓「客观全包成本计算」极易演变为目录白名单与协议竞价机制。

### 三、赛道横向对比与主角主体关联

- 主体档案协同：联合实测方 [The Prompting Company 档案](../entities/companies/The%20Prompting%20Company.md) 证明其首批客户涵盖 Vercel 与 Cloudflare 等边缘开发底座，而 Cloudflare 自身却因域名续费定价策略在 Agent 跑分中落后于透明定价的 Porkbun（第 17 vs 第 9），侧面印证即使具备基础设施壁垒的厂商也必须重构机器可读报价；在清算支付端，[Stripe 档案](../entities/companies/Stripe.md)（Link 单次虚拟卡）与 [OpenAI 档案](../entities/companies/OpenAI.md)（ChatGPT Wallet 令牌 + WebMCP）正把支付清算权从传统硬件卡包上移至云端对话审批，直接对标 [a16z 档案](../entities/companies/a16z%20%28@a16z%29.md) 重播访谈中的 Apple Pay 端侧硬件控制点。
- 本工作台推断：对照库内 [Bending Spoons 档案](../entities/companies/Bending%20Spoons.md)（接盘邮件工具 Mailchimp）与 [Navan 档案](../entities/companies/Navan.md)（商旅直接交付改签结果），B2A 实测揭示了工作流软件与电商分发的同一条淘汰线——当 Agent 仅打开 3 个商品页、跳过 100% 登录墙且惩罚隐形涨价时，缺乏专有库存密度（Expedia）、直连协议权限（Stripe Link / Shop Pay）或端到端履约能力的中间层将被直接跳过，而 [a16z 档案](../entities/companies/a16z%20%28@a16z%29.md) 所追踪的 B2A 优化工具与令牌支付网关正成为新收费站。

### 观点与可反驳条件

- ==观点==：个人 Agent 购物并不会带来完全去中心化的长尾 DTC 乌托邦，而是将旧时代「Google 关键词竞价 + 视觉落地页」重塑为两层新控制点：上层是==目录接入与机器可读全包定价标准==（Meta Commerce Manager、Businesses in ChatGPT、Shopify Catalog 与无首年锁价的平坦报价，决定能否挤入仅 3 个页面的短名单），底层是==聚合平台与令牌化支付网关==（Expedia/Booking.com 靠选项密度承接旅游预算，Stripe Link/Shop Pay/ChatGPT Wallet 跨越 100% 登录墙拦截）；对同时承担 Agent 基础设施护城河与自身 SaaS 商业变现的厂商（如 Cloudflare），2027 年增量取决于机器可读 API/MCP 暴露与全周期透明定价改造。
- ==推翻条件==：
  1. 截至 2027-06-30，若开源浏览器 Agent 或深度搜索模型普遍将单次比价检索深度从平均 3 个商品页扩展至 >30 个长尾独立站，且品牌通过原生 MCP 与联合免密登录使 YipitData 口径 Top 50 商家中纯粹单一品牌 DTC 官网消费占比反超 50%（而非当前聚合/平台/多品牌合计 55%），则「聚合平台垄断 Agent 早期交易份额」的判断将被推翻。
  2. 若 Meta Muse 与 ChatGPT 在 2027 年推出的商业赞助排名（Sponsored Listings）实质性压倒全包成本排序，导致类似 Porkbun（第 9 名）的无商业合作中小透明定价厂商跌出同类科技榜单前 30，而靠返佣与首年套路溢价的巨头重占榜首，则「Agent 优先奖赏平坦透明定价」的推论将被修正。
  3. 若 Amazon 在 2027 年上半年前对 Muse、Instinct 与 Dots 全面解除结账拦截（或与 Stripe Link / OpenAI 达成双向结账协议），使 Grok Bot 当前 17.5% Amazon 外链份额的独占优势消失且 YipitData 纳入 Amazon 后渠道集中度结构重排，则现行四大 Agent 渠道分流格局将被改写。

---

## 原文摘录与一手信源存证

> In our first piece on the B2A economy, we argued that agents will increasingly influence what products we buy, which apps we use, and where we spend money - and tokens.
> — 原文摘录，文字段落 1；证据 `digest-material-e2060220af905db8cba6c40c3966b1759fc6b901426bc6401144aa0e01ed67e9-excerpt-1@1`

> We partnered with The Prompting Company - whose customers include NVIDIA, Google, Databricks, Cloudflare, Kalshi, Vercel, Snapchat, Exa, Clay, and many more - to test Grok Bot, Muse, Instinct, and Dots across 1,270 prompts and 11,307 completed agent runs.
> — 原文摘录，文字段落 2；证据 `digest-material-e2060220af905db8cba6c40c3966b1759fc6b901426bc6401144aa0e01ed67e9-excerpt-2@1`

> The tests covered physical products (“find me noise-canceling headphones under \$150”) and software (“should I use Adobe or Descript to edit this video?”) We paired these experiments with YipitData’s consumer spending data, to see where purchases facilitated by Muse and other consumer agents are already happening.
> — 原文摘录，文字段落 3；证据 `digest-material-e2060220af905db8cba6c40c3966b1759fc6b901426bc6401144aa0e01ed67e9-excerpt-3@1`

一手材料：

- How to Win Bots and Influence Purchases · The a16z Show (a16z Podcast) · [原站](https://www.a16z.news/p/welcome-to-the-b2a-economy-how-agents) · [主体档案：a16z](../entities/funds/a16z.md) / [主体档案：a16z Newsletter](../entities/funds/a16z%20Newsletter.md) / [主体档案：a16z (@a16z)](../entities/companies/a16z%20%28%40a16z%29.md) · [本地原件](../../../raw/e2060220af905db8cba6c40c3966b1759fc6b901426bc6401144aa0e01ed67e9)
  材料版本 `digest-material-e2060220af905db8cba6c40c3966b1759fc6b901426bc6401144aa0e01ed67e9@1`；获取方式 `tg_approved_full_text`。
  > In our first piece on the B2A economy, we argued that agents will increasingly influence what products we buy, which apps we use, and where we spend money - and tokens. — 原文提取
  > We partnered with The Prompting Company - whose customers include NVIDIA, Google, Databricks, Cloudflare, Kalshi, Vercel, Snapchat, Exa, Clay, and many more - to test Grok Bot, Muse, Instinct, and Dots across 1,270 prompts and 11,307 completed agent runs. — 原文提取
- How personal agents choose · The Prompting Company · [原站](https://promptingcompany.com/research/how-personal-agents-choose) · [主体档案：The Prompting Company](../entities/companies/The%20Prompting%20Company.md) · [本地原件](../../../raw/98dadb56e40892426e9bea3475b828a4adf6bd6a18878f17d565987cf32dd348)
  材料版本 `digest-material-98dadb56e40892426e9bea3475b828a4adf6bd6a18878f17d565987cf32dd348@1`；获取方式 `http_full_text`。
  > Where Grok Bot, Muse, Instinct and Dots send shoppers, which products they pick, and what changes the pick. — 原文提取
  > Personal agents send 76.2% of their store and review citations to stores, against 61.6% for regular LLMs. — 原文提取
- Stripe helps Muse, Meta's new personal AI agent, shop across the internet with Link · Stripe · [原站](https://stripe.com/newsroom/news/stripe-helps-meta-muse-shop-with-link) · [主体档案：Stripe](../entities/companies/Stripe.md) · [本地原件](../../../raw/d18ca479f967dc93d976a9f44c2597a99d78e5f534d27fb2714dfc307197a12e)
  材料版本 `digest-material-d18ca479f967dc93d976a9f44c2597a99d78e5f534d27fb2714dfc307197a12e@1`；获取方式 `http_full_text`。
  > -At more than 1 million businesses that accept Link, Muse can check out instantly using a US consumer's preferred payment method saved in Link. — 原文提取
  > SAN FRANCISCO AND DUBLIN – Stripe, the programmable financial services company, today announced that Meta has integrated Link's wallet for agents with Muse, its new personal AI agent. — 原文提取
- Introducing ChatGPT Wallet · OpenAI · [原站](https://openai.com/index/introducing-chatgpt-wallet/) · [主体档案：OpenAI](../entities/companies/OpenAI.md) · [本地原件](../../../raw/432bec37ee35e677c21adb1f95f992f5546351fd7447f7f75b102f9f110e4567)
  材料版本 `digest-material-432bec37ee35e677c21adb1f95f992f5546351fd7447f7f75b102f9f110e4567@1`；获取方式 `http_full_text`。
  > Building trusted agentic payments with networks, banks, and businesses. — 原文提取
  > We’re introducing ChatGPT Wallet, setting a new bar for secure payments by agents. — 原文提取

归属与范围：已完整核验 a16z《How to Win Bots and Influence Purchases》（2026-11-23，Olivia Moore & Justine Moore）原文 16,242 字符，并穿透抓取联合实验方 The Prompting Company 原始实测报告《How personal agents choose》（2026-11-10，16,320 字符）以及 Stripe Link × Meta Muse 与 OpenAI ChatGPT Wallet 官方一手发布稿。同时厘清两套核心口径：The Prompting Company 测试 1,270 条提示、11,307 次完成运行（2026-10-22 至 2026-11-08），YipitData 信用卡/借记卡面板（截至 2026-11-11）统计「由个人 Agent 促成（facilitated by）」的交易且剔除 Amazon、未拆分 Muse 与 Instinct。文章正文所称按 Agent 消费额排名的 Top 50 商家榜单在原网页以嵌入式图片图表展示，未附可检索纯文本全表，故 Top 50 完整明细与各家最终成交转化漏斗保留为规范缺口。

来源缺口：

- `not_disclosed`：YipitData 银行卡消费面板（截至 2026-11-11）的样本总金额、Top 50 商家完整 50 席明细（原网页以图表图片嵌入）、Muse 与 Instinct 各自独立交易份额，以及剔除 Amazon 后造成的渠道集中度高估幅度均未披露。 [线索](https://www.a16z.news/p/welcome-to-the-b2a-economy-how-agents)
- `not_disclosed`：Meta Commerce Manager、Walmart A2A 通道、Shopify Catalog 与 OpenAI Businesses in ChatGPT 等商业目录合作对各家 Agent 推荐排序的具体加权权重，以及测试中到达结账表单（81%）之后的真实支付成功转化率未公开量化。 [线索](https://promptingcompany.com/research/how-personal-agents-choose)

[返回赛道总览](../赛道总览.md#digest-e2060220af905db8) · [返回导读索引](README.md) · [主体档案库](../entities/README.md)
