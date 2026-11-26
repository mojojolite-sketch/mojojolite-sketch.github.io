---
title: "Tobi Lütke on the AI agent revolution and future of Shopify"
type: blog_digest
sector: "AI应用与开发工具"
source: "Sources (Alex Heath)"
published_at: "2026-10-28"
raw_sha256: "2d0329bd7b960b5b23ef348c0879b65e92b02f1ca304ac361c6afcb5faed2b77"
material_version: "digest-material-2d0329bd7b960b5b23ef348c0879b65e92b02f1ca304ac361c6afcb5faed2b77@1"
origin_url: "https://sources.news/p/tobi-lutke-shopify-ai-agents"
trigger_source: "Sources (Alex Heath)"
trigger_url: "https://sources.news/p/tobi-lutke-on-the-ai-agent-revolution-and-future-of-shopify"
user_comments: ""
status: "processed_with_gaps"
primary_topic: "创始人与产品增长"
topic_confidence: 0.6999
---

<a id="digest-2d0329bd7b960b5b"></a>
# Tobi Lütke on the AI agent revolution and future of Shopify

2026-10-28 · Sources (Alex Heath) · 有来源缺口

[本地原件归档](../../../raw/2d0329bd7b960b5b23ef348c0879b65e92b02f1ca304ac361c6afcb5faed2b77) · 固定材料版本 `digest-material-2d0329bd7b960b5b23ef348c0879b65e92b02f1ca304ac361c6afcb5faed2b77@1` · [一手原站](https://sources.news/p/tobi-lutke-shopify-ai-agents) · [触发线索（Sources (Alex Heath)）](https://sources.news/p/tobi-lutke-on-the-ai-agent-revolution-and-future-of-shopify)

## 深度拆解与复核

- 口径与利益：本材料为 [Sources (Alex Heath) 官方专访（2026-10-28）](https://sources.news/p/tobi-lutke-shopify-ai-agents) 在 Shopify 多伦多（Toronto）办公室对 Shopify 联合创始人兼 CEO、同时担任 Meta 董事的 Tobi Lütke 进行的 1 小时 24 分 20 秒一对一专访（含 96,737 字符 Substack VTT 逐字稿与 5,858 字符节目摘要，由 Hyperagent 冠名赞助，Atlassian Jira / Teamwork Graph、Granola、Mercury Books [与 Choice Financial Group / Column NA 合作提供 FDIC-insured 银行服务及 CPA 协作] 及 Framer Pro 赞助；Alex Heath 亦在节目中披露自己约两个月前兼任 VC 投资人）。主体档案详见 [Shopify](../entities/companies/Shopify.md)、[Stripe](../../AI产业与商业/entities/companies/Stripe.md)、[OpenAI](../entities/companies/OpenAI.md) 与 [Alex Heath](../entities/people/Alex%20Heath.md)，并与库内 [Tobi Lütke × David Senra 双期拆解](Tobi%20L%C3%BCtke%2C%20Shopify%20-%20David%20Senra.md) 严格区隔。Lütke 作为强控制权 Founder-CEO 与 Meta 董事，其发言兼具把 Shopify 塑造成对抗 Amazon 封闭生态的开放商户基础设施底座、为 Shopify 内部强制 AI 考核及 Meta 创始人掌舵背书的双重激励。

### 一、Agentic Commerce：开放商户目录 vs 广告聚合商防线（对应 T4）

- 极化立场背后的商业模式分叉：针对近期 Amazon 封锁 Meta 个人购物智能体 Muse 而 Shopify 主动宣布拥抱 Muse（同步对接 Instinct 与 GrokBot），Lütke 在 [Sources 专访原文](https://sources.news/p/tobi-lutke-shopify-ai-agents) 将其定性为延续 20 年的零售哲学分歧——Amazon 走百货公司聚合商（aggregator，Ben Thompson 框架）路线，需维护庞大站内广告与买家侧控制权，且三边市场（企业、买家、卖家）最终必然倒向数据更易观测的买家端；Shopify 则有意不建传统 marketplace、不做广告业务，让线上店面（online store）充当独立商户可控的品牌与叙事主场，同时持续开发大量 APIs 与结账系统，让线下 POS、Instagram 社交广告（被称为小企业的 LAU）与个人 AI Agent 全渠道均只负责扩大商户商品目录（Inventory）分发。
- 购物形态向高客单「项目式采购」迁移：Lütke 披露当前 Agent 下单量仍处低基数（百分比增速意义有限），但结构已出现分化——高频出现基于房间平面图或照片的家庭健身房全套采买、周末带孩子做 3D 打印项目并由 Agent 自动凑齐电子元件与本地门店磁铁/耗材，甚至把 Muse 接入 Tailscale 家庭内网（tailnet）直连 3D 打印机自动续订耗材；针对外部生态，其强调个人 AIs 正变成无限耐心的全天候助手。
- ✅ 本工作台核查（交叉比对 The Prompting Company 11,307 次实测与 Q3 现实基线）：库内已归档的 [a16z × The Prompting Company 11,307 次实测](../../AI产业与商业/blogs/How%20to%20Win%20Bots%20and%20Influence%20Purchases.md)（原始报告 [promptingcompany.com](https://promptingcompany.com/research/how-personal-agents-choose) 与 [a16z 原文](https://www.a16z.news/p/welcome-to-the-b2a-economy-how-agents)）证实了 Lütke 的部分接口论——Amazon 确实 100% 阻断了 Muse、Instinct 与 Dots 结账（仅 GrokBot 有 17.5% 外链指向 Amazon），而 Muse 为避开强制登录墙 100% 停摆的死穴（支持访客结账仅 81% 抵达末尾），已原生绑定 Shop Pay 与 Stripe Link 支付令牌。但同一信源 Alex Heath 2026-11-14 [Sources《We are so early》](https://sources.news/p/we-are-so-early) 拉出的 Uber（万圣节周 3.2 亿单 vs Agent 仅 500 单外卖 + 4 单打车）与 DoorDash 财报数据也表明，Agentic Commerce 距规模替代搜索/社交分发仍有数个量级距离，Lütke 本人亦在节目中承认当前美国（United States）家庭付费使用 AI 比例仅约 2%。

### 二、Agent 变现悖论与协议对照：Shopify vs OpenAI / Stripe（对应 T4）

- 拒绝「交易抽佣 2%」幻觉与 Sidekick / Canvas 定价策略：当 Heath 质疑当前 Agent 创业潮普遍假设从每笔交易抽取 2% Take Rate 究竟从谁的毛利里切（毕竟 Shopify 约 3% 的支付/交易费率大头流向信用卡发卡行与卡组）时，Lütke 直言「欢迎来到基点（basis points）的世界」，并类比 .com 时代人人被迫向 Oracle 支付百万美元买数据库的旧负担，否定 2% 抽成可持续，认为真正留存取决于产品是否「比多喝一杯 Starbucks 咖啡更有价值」（Heath 亦称其以此定价 newsletter）。当被问及 Shopify 内部商户 AI 工具 Sidekick 与 Canvas 降低运营门槛后是否会提高抽佣比率时，Lütke 明确回应宁可压低百分比费率、做大毛利总额（gross profit dollars）：新商户首月在 Shopify 的开销低于 Starbucks，靠 10 亿美元级大商户摊薄工程师与 token 成本，借 Jevons 悖论（成本下降刺激创业供给爆发）推动更多人在「当地时间午休（lunch break）」创立独立品牌。
- Shopify vs OpenAI / Stripe Agentic Commerce 协议栈分工（本工作台核查）：

| 生态角色与代表主体 | 核心控制点与开源协议标准 | 结账授权与支付令牌机制 | 与 Shopify 开放商户路由的协同与张力（✅ / ⚠️） |
| :--- | :--- | :--- | :--- |
| Shopify（[Shopify 档案](../entities/companies/Shopify.md)） | Shopify Catalog + 商户自控 Storefront + Sidekick / Canvas | Shop Pay 加速免密结账，拒绝自建三边抽佣 Marketplace | ✅ 把所有 AI 聊天界面视为前端导流入口而非竞争对手，靠做大商户总 GMV 与基点级费率扩张毛利美元额 |
| OpenAI（[OpenAI 档案](../entities/companies/OpenAI.md)） | [Instant Checkout 与 Agentic Commerce Protocol (ACP)](https://openai.com/index/buy-it-in-chatgpt-instant-checkout-and-the-agentic-commerce-protocol/) + Businesses in ChatGPT feed + WebMCP | [ChatGPT Wallet（2026-11-13）](https://openai.com/index/introducing-chatgpt-wallet/) 联合 Amex/Chase/Mastercard/Visa 发行一次性令牌 + Face ID | ⚠️ 早期尝试聊天框直连零售 listing 后因税费/库存同步复杂已部分转向 ChatGPT Apps；且悄然删除「商业合作不影响推荐」承诺，存在竞价排序倾向 |
| Stripe（[Stripe 档案](../../AI产业与商业/entities/companies/Stripe.md)） | [与 OpenAI 联合发布开放标准 ACP](https://stripe.com/blog/developing-agentic-commerce-standard) | [Stripe Link 接入 Meta Muse（2026-11-01）](https://stripe.com/newsroom/news/stripe-helps-meta-muse-shop-with-link)（超 3 亿用户/100 万商户 + 单次虚拟卡）与 Shared Payment Tokens (SPT) | ✅ 站在协议与支付清算中立层：无论前端跑在 Meta Muse、ChatGPT Dots 还是 Shopify 独立站，均吃下跨平台 Agent 结账令牌清算流水 |

- ⚠️ 商业广告与信托责任的不可调和张力（本工作台核查）：针对 Agent 时代的广告归属，Lütke 承认一旦用户认为私人助手收受回扣改变推荐排序（如同私吞里程积分），即构成「信任违约（breach of trust）」。但他同时将 Meta 与 Google 的效果广告引擎称为「小企业史上最大红利」及「工作量证明（proof of work）过滤器」（能付得起买量费用的商家大概率现金流健康），并预期未来会诞生依托区块链等原语的新型 Agent 发现撮合市场。对照 OpenAI 删除推荐中立承诺与 Meta Muse 优先读取 Commerce Manager 50 项目录，本工作台判断 Lütke 对「无偏见撮合市场」的设想在巨头竞价变现压力下大概率向付费白名单妥协。

### 三、Founder Mode、Reflexive AI 治理与本地酒窖 Dell GB300 算力隔离（对应 T2 / T3）

| 治理与工程实践维度 | 本期 Toronto 专访一手披露事实（[sources.news](https://sources.news/p/tobi-lutke-shopify-ai-agents)） | 与库内历史脉络及赛道主线的交叉复核（✅ / ⚠️） |
| :--- | :--- | :--- |
| Reflexive AI 全员强制备忘录 | 2025 年未经任何委员会（committee）审批直接发文：新增 headcount 前必须先证明 AI 无法替代，并把 AI 原型使用频次写入同行互评（peer review）机制；明确反感开源项目禁止 AI 提交 PR 的道德化争论，赞叹「AI-pilled」内部团队的生产力，主动放大与 AI 怀疑论者的分歧（拒绝平庸棕色调「milk-toasty」共识）。 | ✅ 与 Ep.1「Shopify OS Python 规则代码化」一脉相承（T3）：Lütke 靠不设年度计划（annual plan）、每日对输入跑同一决策函数及「每年年初假想用魔法重构更好 Shopify、再补齐 Diff」的自我颠覆机制，防止组织滑向 Silicon Valley 式 OKR 趋同（其直言以局外人视角在多伦多吸收硅谷养分但过滤极端摆动，且 Toronto 与多伦多大学孕育了 AlexNet 与 Geoffrey Hinton 的深度学习基石，与欧美心态形成对比）。 |
| Meta 董事视角与 Llama 转折 | 高度评价 Mark Zuckerberg 作为 Founder-CEO 决定开源 Llama 模型的行业外溢效应（若无创始人拍板，Meta 不可能推动开源常态化），并定性 Llama 4 受挫仅为科学实验中的「零结果（null result）」，肯定 Zuckerberg 迅速重组团队重回前沿训练；同时庆幸 Shopify 不必管理 70,000 名员工，并提及 11–12 年前借 SEC（RCC）允许发布致股东公开信的长期主义承诺。 | ⚠️ 结合库内 [Meta 收购 Conductor 拆解](Meta%E6%94%B6%E8%B4%ADConductor%EF%BC%9AAI%E7%BC%96%E7%A8%8B%E7%9A%84%E4%B8%8B%E4%B8%80%E5%9C%BA%E7%AB%9E%E4%BA%89%EF%BC%8C%E6%98%AF%E8%AE%A9%E5%A4%9A%E4%B8%AAAgent%E4%B8%80%E8%B5%B7%E5%B9%B2%E6%B4%BB.md) 中的 Muse 三连隔离漏洞（CVE-2026-53359 与被动 DNS 泄露）复核：创始人高压纠偏虽能提速模型迭代，但未自动解决多并发 Agent 在云端沙盒隔离与执行安全层面的架构欠账（T2）。 |
| 本地酒窖机架（Dell GB300）与 OpenClaw | 因多伦多住所玻璃酒窖空置，Lütke 自称「Atoms 极简主义者但数字归档极大主义者」，自行布线改造成「rack cellar」部署戴尔 Dell GB300 服务器，本地全离线运行定制 OpenClaw（「Toby Claw」）与 Claude 等模型，灌入 15 年 Unix 个人日志、全部历史写作、日历、地理位置及 Fitbit 心率数据，用来筛查「哪些会议最让人心率飙升」。 | ✅ 本工作台核查（T2 私有隔离硬边界）：作为上市公司 CEO，Lütke 明确指出大量高敏公司与个人遥测数据禁止发往外部 AI 实验室云端，只能靠本地硬件与私有化受控存储（15 年数字归档）兑现高上下文自动化；但单台 Dell GB300 的资本开支决定了该模式仅属高净值/CEO 极客样本，企业普及仍依赖可控 MicroVM 沙盒与零数据留存云租户。 |

- ⚠️ 本工作台推断（乐观叙事下的企业验证落差）：Lütke 以《Cryptonomicon》（Neil Stephenson）预言加密货币、Andy Weir 对照过去 15–20 年《Watchmen》式反乌托邦（对比《Spider-Man》核时代隐喻与 Promethean 盗火受罚神话）、以及 MrBeast（Jimmy）对年轻创业者的示范效应论证「反乌托邦只是 30 年前（比如没有 Wi-Fi 的年代）」，并宣称个人 PDoom 为零（AI 本质只是矩阵乘法与 Floating-point math）、「电脑现在能实现愿望（fulfill wishes）」。然而从企业软件交付角度（T1），AI 辅助个人/中小商户把延续 10,000 年（如 Alps 阿尔卑斯山 6,000 年前携带 2,000 公里商品贸易遗骸）的商贸创业成本压至最低，与「企业多系统长程无差错履约」属于两个维度——前者容忍高试错，后者仍受限于 APEX-Agents Pass^8 <= 13.4% 与 ACE 实时比价 <50% 的校验瓶颈。

### 观点与可反驳条件

- ==观点==：Tobi Lütke 这场专访真正具备长期投研定价意义的信号集中在两点结构性约束：其一，Agentic Commerce 初期并不会催生「个人助手抽 2% 交易税」的新暴利层，价值仍集中在拥有干净商品目录与免登录支付令牌的基础设施（Shopify Catalog + Shop Pay / Stripe Link + OpenAI ACP）；其二，高管与企业敏感工作流对「15 年私有日志 + 本地/隔离算力」的刚性需求，正在把生产力 Agent 推向私有机架（Dell GB300 类本地部署）或硬件级隔离云沙盒（T2）。
- ==推翻条件==：
  1. 若截至 2027-Q4，头部个人购物 Agent（Muse / Instinct / GrokBot / ChatGPT）直接向品牌及 SaaS 商户稳定收取 >=1.5% 的成交佣金（且导致 Shopify Merchant Solutions 毛利率同比下降 >150 bps 或 Shop Pay 在 Agent 结账中的份额被 Stripe Link / ChatGPT Wallet 等第三方钱包挤压至 <20%），则「basis points 现实锁死 Agent 高抽佣、Shopify 仅靠扩展总 GMV 获益」的判断将被推翻。
  2. 若到 2027-12-31，主流上市公司高管与企业知识库全面采纳外部云端零数据留存（ZDR）+ 机密计算沙盒（SEV-SNP / Nitro Enclaves），使得本地私有工作站/家用 GPU 机架在企业生产力 Agent 调用中的占比持续低于 5%，则「高敏上下文强制拉动本地/私有推理硬件」的推论需要大幅下调。

---

## 原文摘录与一手信源存证

> 【信源巡检核心摘要】 Sources podcast interview with Shopify CEO Tobi Lütke discussing agentic commerce, retail tech shifts driven by AI agents, running AI models locally, and his home wine-cellar GPU server setup.
> — 原文摘录，文字段落 1；证据 `digest-material-2d0329bd7b960b5b23ef348c0879b65e92b02f1ca304ac361c6afcb5faed2b77-excerpt-1@1`

一手材料：

- Tobi Lütke on the AI agent revolution and future of Shopify · Sources (Alex Heath) · [原站](https://sources.news/p/tobi-lutke-shopify-ai-agents) · [主体档案：Alex Heath](../entities/people/Alex%20Heath.md) / [主体档案：Shopify](../entities/companies/Shopify.md) · [本地原件](../../../raw/da5ec2268d8a22cbb92e1b982cb43271de54a0bc395e83b090efccff3bf254b1)
  材料版本 `digest-material-da5ec2268d8a22cbb92e1b982cb43271de54a0bc395e83b090efccff3bf254b1@1`；获取方式 `tg_approved_full_text`。
  > # Tobi Lütke on the AI agent revolution and future of Shopify Canonical URL: https://sources.news/p/tobi-lutke-shopify-ai-agents Published: 2026-10-28T15:52:12.817Z Subtitle: Shopify’s CEO on where agent commerce is headed, sci-fi becoming reality, and his GPU wine cellar. — 原文提取
  > === Article & Episode Notes === I brought a long list of questions to my conversation with Shopify co-founder and CEO Tobi Lütke . Within minutes, I was setting them aside. — 原文提取

归属与范围：已穿透 Sources 官方网页及 1h24m20s 完整播客逐字稿（Substack VTT 96,737 字符 + 5,858 字符节目摘要，规范 URL 为 sources.news/p/tobi-lutke-shopify-ai-agents；库内原登记 slug tobi-lutke-on-the-ai-agent-revolution-and-future-of-shopify 返回 HTTP 404）；本轮补全行内 sources.news、OpenAI（Instant Checkout / ACP / ChatGPT Wallet）、Stripe（ACP / Link）与 The Prompting Company / a16z 一手超链，严格区隔本期 2026-10-28 Alex Heath 多伦多总部专访与库内 2026-11-22 David Senra Ep.57 访谈，并建立 Shopify 与 Meta / OpenAI / Stripe / Amazon 的结构化实体关系边。

来源缺口：

- `unavailable`：原卡片记录链接 https://sources.news/p/tobi-lutke-on-the-ai-agent-revolution-and-future-of-shopify 返回 HTTP 404，经检索 Sources RSS 与归档定位真实规范 URL 为 https://sources.news/p/tobi-lutke-shopify-ai-agents 并已抓取完整网页摘要及 96,737 字符 Substack VTT 逐字稿。 [线索](https://sources.news/p/tobi-lutke-shopify-ai-agents)
- `not_disclosed`：访谈未披露 Shopify 当前由外部 AI Agent（Muse / Instinct / GrokBot）带来的具体 GMV 占比、Shop Pay 与 Stripe Link 的结账分流比例，亦未公布 Tobi Lütke 个人酒窖 Dell GB300 机架的具体卡数配置、购置金额与本地模型参数量。 [线索](https://sources.news/p/tobi-lutke-shopify-ai-agents)

[返回赛道总览](../赛道总览.md#digest-2d0329bd7b960b5b) · [返回导读索引](README.md) · [主体档案库](../entities/README.md)
