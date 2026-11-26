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
topic_confidence: 0.8939
---

<a id="digest-e2060220af905db8"></a>
# How to Win Bots and Influence Purchases

2026-11-23 · a16z (Olivia Moore & Justine Moore) · The Prompting Company · 有来源缺口

[本地原件归档](../../../raw/e2060220af905db8cba6c40c3966b1759fc6b901426bc6401144aa0e01ed67e9) · 固定材料版本 `digest-material-e2060220af905db8cba6c40c3966b1759fc6b901426bc6401144aa0e01ed67e9@1` · [一手原站](https://www.a16z.news/p/welcome-to-the-b2a-economy-how-agents)

## 深度拆解与复核

- 来源：[a16z《How to Win Bots and Influence Purchases》原文](https://www.a16z.news/p/welcome-to-the-b2a-economy-how-agents) · [The Prompting Company 11,307 次实测报告](https://promptingcompany.com/research/how-personal-agents-choose) · [Stripe Link × Meta Muse 官方通稿](https://stripe.com/newsroom/news/stripe-helps-meta-muse-shop-with-link) · [OpenAI ChatGPT Wallet 官方发布](https://openai.com/index/introducing-chatgpt-wallet/)
- 口径与利益披露：本文作者 Olivia Moore 与 Justine Moore 为 a16z 消费科技团队合伙人，文末明确声明 a16z 可能持有文中提及公司股份且未独立审计第三方数据；联合实验方 The Prompting Company 自身售卖面向 Agent 的品牌可见性优化软件（客户包括 NVIDIA、Google、Databricks、Cloudflare、Kalshi、Vercel、Snapchat、Exa、Clay），存在推动商家采购 Agent Optimization 工具的商业动机。同时，文章将两套差异巨大的数据集并置——The Prompting Company 在 2026-10-22 至 2026-11-08 针对 1,270 条提示跑完 11,307 次个人 Agent 测试（Grok Bot、Muse、Instinct、Dots）及 2,619 次传统模型对比（ChatGPT、Gemini、Perplexity），而 YipitData 截至 2026-11-11 的刷卡面板统计「由 Agent 促成」的消费且剔除 Amazon、未拆分 Muse 与 Instinct。
- ==核心结论==：B2A（Business-to-Agent）分布并非去中心化的长尾公平市场，而是向「自有商品目录 + 支付令牌钱包 + 聚合平台」三重控制点重新集中（直接印证本工作台「AI产业与商业」T2）。在搜索侧，Muse 优先检索 Meta 自有 Commerce Manager 目录（上限 50 个候选），浏览使用仅平均打开 3 个商品页，导致任一 Agent 选中产品被至少另一 Agent 重复选中的概率高达 73%，四家 Agent 接近四分之一场景选出同一榜首；在成交侧，因访客结账表单可达率达 81% 而登录墙直接归零、且缺乏价格透明度（如 GoDaddy 排名第 112 落后于注册量仅其五分之一却无首年锁价套路的 Porkbun 第 9 与 Cloudflare 第 17），控制权正由传统 SEO 品牌广告转向 Meta Catalog、Shopify Catalog、Expedia/Booking.com 聚合商以及 Stripe Link / Shop Pay / ChatGPT Wallet 结算通道。

---

### 一、 实验设计、样本拆解与两套口径分歧（对应「AI产业与商业」T3）

| 数据集与主体 | 覆盖时间与样本量 | 覆盖产品与平台 | 口径边界与潜在偏差（本工作台核查） |
| :--- | :--- | :--- | :--- |
| The Prompting Company 个人 Agent 测试 | 2026-10-22 至 2026-11-08；1,270 条提示、11,307 次完成运行 | Grok Bot、Muse、Instinct、Dots；物理商品（如 \$150 以下降噪耳机）与软件（Adobe vs Descript） | ⚠️ 实验室可控对比（本工作台核查）：含 80 条无品牌购物提示（3,283 次）、334 条软件对比（2,785 次）、393 条店面细微改动 A/B 测试（1,597 次）与 15 条结账测试（100 次），测量模型自动推荐与表单可达率，不等同真实付费转化 |
| 传统 LLM 购物基线对比 | 同期 2,619 次运行（子集 77 条共用提示：ChatGPT 642 次、Gemini 491 次） | ChatGPT、Gemini、Perplexity | ✅ 结构对照清晰：常规 ChatGPT 仅 59% 回答给出具体购买商店、Gemini 仅 57%（直连品牌官网仅 16.3%），显著低于四家个人 Agent 97%–99% 的可购买链接覆盖率 |
| YipitData 消费刷卡面板 | 截至 2026-11-11 | Muse 与其他个人 Agent 促成的美国真实卡消费 | ❌ 存在明显分母漂移（本工作台核查）：统计含人类用户在 Agent 推荐后手动点击下单的交易，未把 Muse 从 Instinct 中拆出，且完全剔除 Amazon（而测试中 Grok Bot 17.5% 外链指向 Amazon），会系统性抬高 Expedia、Booking.com、Walmart、Best Buy 与 Quince 的表面份额 |

---

### 二、 五大发现的全量数据还原与机制拆解

#### 1. 窄候选池与场景分化：通用默认赢家集中，细分子场景瞬间翻转
- 跨 Agent 高度趋同：在 Grok Bot、Muse、Instinct 与 Dots 上，一个商品被某 Agent 选中后有 73% 概率被至少另一家选中，近 25% 场次四家榜首完全一致。原因是短名单极窄——只有 Muse 完全暴露检索日志，显示其几乎总是先扫 Meta Commerce Manager 目录抓取最多 50 个选项，即使开启浏览器也平均只浏览 3 个商品页。
- 垂类「尖峰优势」可逆转默认结果：当问题宽泛时，Agent 只看价格与评论选出高性价比默认项，但只要加入特定约束，性能参数（重量、最高温度、专业输出）即刻翻盘：
  - Shark FlexStyle vs Dyson Airwrap：无特定要求时，更便宜的 Shark 拿下 91% 场次（126 次汇总样本）；一旦用户声明细软或染烫发质，Dyson 胜率升至 51%；声明每天使用，Dyson 胜率冲高至 88%（Muse、Instinct、Dots 均达 100%）。
  - Canva vs Adobe：一般平面设计提名中 Canva 占 78%，Adobe 为 0%；但提及团队共享模板时 Adobe 升至 43%（Dots 达 100%），一旦要求专业级输出（213 次样本中 41 次），Adobe 以 100% 胜出（41 胜 0 负）。

#### 2. Agent 爬虫搜索链路 vs 传统 LLMs：从「媒评语料」转向「用户记忆 + 结构化接口」
- 传统 LLMs（ChatGPT / Gemini）主要依赖训练语料并辅以网页检索，倾向引用评测站（如 RTINGS）、新闻媒体（NBC News 占 ChatGPT 6.1%）与论坛（Reddit 占 Gemini 4.9%），商店引用在商店+评测总引用中仅占 61.6%。
- 个人 Agent 先调取用户记忆（User Memory）锁定偏好，再调内部目录/连接器与外部网页搜索：The Prompting Company 活动日志证实，Muse 与 Dots 使用自研搜索系统，Grok Bot 与 Instinct 调用 Exa 进行检索；四家 Agent 将 76.2% 的商店+评测引用直接导向可买商店页面。在软件选用实测中，Dots 被要求基于商品图生成 10 张广告时，读取 Midjourney 社区指南发现无通用 API 且几乎全面禁止自动化调用，遂直接转选在官网显著暴露 API 文档与官方 MCP 集成代码示例的 Ideogram。
- ✅ 基础设施含义（本工作台核查）：Vercel（前沿 Web 应用部署底座）与 Cloudflare（边缘反爬与 Bot 管理基础设施）均位列 The Prompting Company 首批企业客户并非偶然——网站若继续靠粗糙 WAF 一刀切屏蔽爬虫或把定价藏在交互表单后，会直接丢失个人 Agent 候选资格。

#### 3. 机器冷算全包成本、退货条款与价格信任阈值
- 退换货与隐性费用直接决定归属：当两家零售商标价相同时，Agent 在 86% 测试中选择了退货政策更优的一方（免退货运费、更长退货期、原路退款）。女装电商 Quince 虽非全球 Top 15 零售商，却凭商品页顶部清晰标出 \$50 羊绒衫价格、免运费、库存状态、评价条数及品牌横比，挤入 Agent 消费额 Top 15。
- 透明定价击败规模霸权（Porkbun vs Cloudflare & GoDaddy）：在科技品类交易排名中，域名工具 Porkbun 跃居科技类第 1 名、总榜第 9 名，击败 Cloudflare（第 17 名）与 GoDaddy（第 112 名），尽管 Cloudflare 月注册域名数是 Porkbun 的 2.6 倍、GoDaddy 是 Porkbun 的 4.8 倍。原因在于 Muse 与 Dots 严厉惩罚首年低价续费暴涨与锁定条款，偏爱 Porkbun 无套路的平坦全周期定价。
- 信任溢价与反常低价惩罚：跨 275 组真实店铺比价中，Agent 在 72% 场次宁可选择更贵但更可信的授权渠道（例如 Grok Bot 放弃 \$200 第三方 Sonos 音箱而选 \$250 授权经销商以保修）。折扣低于 10% 无法撼动品牌渠道；折扣在 10% 至 50% 之间时，Agent 也仅在 24% 场次倒向低价非授权卖家；一旦折扣超过 50%，Agent 反而因防欺诈逻辑全部避开。

#### 4. 四大个人 Agent 行为偏好与商业合作分流

| 个人 Agent | 外部检索与防爬特征 | 渠道与合作生态倾斜 | 核心采信依据（Prompting Co 数据） |
| :--- | :--- | :--- | :--- |
| Grok Bot | 使用 Exa；Amazon 结账测试 100% 到达购物车 | 17.5% 运行链接至 Amazon（其余均不超过 1.6%）；5% 运行主动提议连接 App（其余均不超过 0.2%，Dots 仅 0.2%、Muse 仅 0.1%） | 价格 48%、评论 30%、库存 8%、配送 6%；支持 Shopify Catalog 与 Stripe Link |
| Muse (Meta) | 自研搜索；先扫 Meta Commerce Manager 50 项目录 | 26%（报告明细 26.4%）链接 Walmart、22%（21.5%）链接 Best Buy；正与 Walmart 联手推 A2A 通道 | 价格 57%、评论仅 10%（远低于其余 30%–41%）；原生集成 Stripe Link（超百万商户）与 Shop Pay |
| Instinct | 使用 Exa；Amazon 结账受阻；75.3% 引用品牌官网（45% 仅推官网） | 极少跳转大零售商（13.9%），最强直连品牌 DTC 倾向 | 价格 53%、评论 40%、库存 37%、退换货 14%；对站内评分存疑，26 次决胜仅 4 次采信更好评分，更重退改条款 |
| Dots (OpenAI) | 自研搜索；2026-11-13 接入 ChatGPT Wallet；15 次 Nordstrom 库存测试全被拦截 | 63.2% 引用品牌官网，依赖 Businesses in ChatGPT（11 月 10 日发布）商品 feed | 评论 41%、专业评测 11.4%（其余均不超过 3.7%）；软件任务优先考察自身「易用性」 |

- ⚠️ 商业中立性警钟（本工作台推断）：ChatGPT 近期悄然删除了「OpenAI 商业合作不影响商品推荐」的承诺，同时 Meta 依托 Commerce Manager 与 Walmart A2A、Shopify Catalog 构建封闭优先池。这意味着所谓的「客观最优计算」在商业协议落地后将快速让位于付费排名与白名单协议税。

#### 5. 聚合平台回流、访客结账墙与支付协议收口（对应「AI产业与商业」T2）
- 聚合商控制点未死反强：YipitData Top 50 商家中近三分之一消费流向市场与聚合平台；计入自营+第三方平台零售商升至 46%，再计入传统多品牌零售商高达 55%。旅游因重度聚合属性占据最大早期份额——Expedia 与 Booking.com 包揽前两名，American Airlines 列第 4、United 列第 6。以旧金山 Hotel Zelos（2026-12-04 至 12-06）为例，可退大床房官网直订 \$476.20 而 Expedia 标价 \$476 且同时暴露到店付/现付（含 PayPal）选项，Agent 几乎必然倒向聚合平台。
- 结账墙与身份令牌：在支持访客结账（Guest Checkout）的商户，Agent 成功抵达结账表单末尾的比率为 81%；但只要网站强制要求登录账号，Agent 在 100% 场次中均提前停摆或直接换店。为此 Stripe Link（为 Muse、Grok Bot、Instinct 发行单次虚拟卡）、Shopify Shop Pay 与 OpenAI ChatGPT Wallet（通过一次性支付令牌替代真实卡号并由用户在对话中逐笔审批）正加速充当 Agent 时代的身份与风控清算网关。

### 观点与可反驳条件

- ==观点==：个人 Agent 购物并不会把互联网带入完全扁平的 DTC 乌托邦，而是把旧时代的「Google 搜索关键词竞价 + 视觉落地页转化」重塑为两层新控制点：上层是**目录接入与机器可读定价标准**（如 Meta Commerce Manager、Businesses in ChatGPT、Shopify Catalog 与无首年套路的透明报价体系，决定品牌能否进入仅 3 个网页深的短名单），底层是**聚合平台与令牌化支付网关**（Expedia/Booking.com 靠全选项密度吸收旅游预算，Stripe Link/Shop Pay/ChatGPT Wallet 跨越 100% 登录墙拦截）。在此格局下，像 Cloudflare 这类同时面临「底层护城河客户需求（做 Agent 爬虫放行与认证）与自身 SaaS 商业定价被 Agent 跑分倒逼（域名排名落后 Porkbun）」的公司，其 2027 年新增软件营收弹性将取决于机器可读 API/MCP 暴露与全周期透明定价改造，而非单纯流量拦截壁垒。
- ==推翻条件==：
  1. ① 「短名单锁定与聚合平台回流」证伪条件：若到 2027-06-30，开源浏览器 Agent 或深度搜索模型普遍将单次比价检索深度从平均 3 个商品页扩展至 >30 个长尾独立站、且主流品牌通过协议（如直接向个人 Agent 开放原生 MCP + 联合登录标准）使 YipitData 统计的 Top 50 商家中纯粹单一品牌 DTC 官网消费占比反超 50%（而非当前聚合/平台/多品牌合计 55%），则「聚合平台垄断 Agent 早期交易份额」的判断将被推翻。
  2. ② 「透明定价击败规模巨头与商业白名单溢价」证伪条件：若 Meta Muse 与 ChatGPT 在 2027 年推出的商业赞助排名（Sponsored Listings）实质性压倒全包成本比价排序，导致像 Porkbun（第 9）这类无商业合作费的中小透明定价厂商跌出同类科技榜单前 30、而高溢价或复杂首年折扣厂商仅凭支付/广告返佣重新垄断 Top 推荐位，则「Agent 优先奖赏平坦透明定价而非协议竞价」的推论将被修正。
  3. ③ 「Amazon 拦截壁垒长期有效」证伪条件：若 Amazon 在 2027 年上半年前针对 Muse、Instinct 与 Dots 全面解除结账阻断（或与 Stripe Link / OpenAI 达成双向结账协议），使 Grok Bot（当前 17.5% Amazon 外链份额）在跨平台直达购物车上的独占优势消失且 YipitData 纳入 Amazon 后多品牌聚合占比出现跃升，则各家 Agent 当前的渠道分流格局将被全面重排。

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

归属与范围：已完整核验 a16z《How to Win Bots and Influence Purchases》（2026-11-23，Olivia Moore & Justine Moore）原文 16,242 字符，并穿透抓取联合实验方 The Prompting Company 原始实测报告《How personal agents choose》（2026-11-10，16,320 字符）以及 Stripe Link × Meta Muse、OpenAI Businesses in ChatGPT 与 ChatGPT Wallet 官方一手发布稿。同时厘清两套核心口径：The Prompting Company 测试 1,270 条提示、11,307 次完成运行（2026-10-22 至 2026-11-08），YipitData 信用卡/借记卡面板（截至 2026-11-11）统计「由个人 Agent 促成（facilitated by）」的交易且剔除 Amazon、未拆分 Muse 与 Instinct。文章正文所称分享按 Agent 消费额排名的 Top 50 商家榜单在原网页以嵌入式图片图表展示，未附可检索纯文本全表，故 Top 50 完整明细与各家最终成交转化漏斗保留为规范缺口。

来源缺口：

- `not_disclosed`：YipitData 银行卡消费面板（截至 2026-11-11）的样本总金额、Top 50 商家完整 50 席明细（原网页以图表图片嵌入）、Muse 与 Instinct 各自独立交易份额，以及剔除 Amazon 后造成的渠道集中度高估幅度均未披露。 [线索](https://www.a16z.news/p/welcome-to-the-b2a-economy-how-agents)
- `not_disclosed`：Meta Commerce Manager、Walmart A2A 通道、Shopify Catalog 与 OpenAI Businesses in ChatGPT 等商业目录合作对各家 Agent 推荐排序的具体加权权重，以及测试中到达结账表单（81%）之后的真实支付成功转化率未公开量化。 [线索](https://promptingcompany.com/research/how-personal-agents-choose)

[返回赛道总览](../赛道总览.md#digest-e2060220af905db8) · [返回导读索引](README.md) · [主体档案库](../entities/README.md)
