# AI产业与商业 · 主体档案库（Entities）

按「个人 / 公司 / 基金 / 机构」四类主体聚合本赛道收录的微信文章、一手论文/报告（含 NotebookLM 与 Google Drive 归档）、用户追问及待核查缺口。账号、作者与机构身份在底层 `registry.sqlite3` 中严格分开。

[返回赛道总览](../赛道总览.md) · [单篇导读索引](../blogs/README.md) · [交互式逻辑演变图谱](https://mojojolite-sketch.github.io/AI%E4%BA%A7%E4%B8%9A%E4%B8%8E%E5%95%86%E4%B8%9A/index.html)

| 主体分类 | 主体数量 | 覆盖一手材料数 | 关联文章数 | 说明 |
| --- | --- | --- | --- | --- |
| [👤 个人与学者 (People)](#people) | 8 | 5 | 5 | 学者、创始人、工程师与独立研究者档案；同名 arXiv 作者索引仅作论文署名聚合，不自动合并社交账号身份。 |
| [🏢 公司与产业主体 (Companies)](#companies) | 15 | 15 | 9 | 机器人本体、模型算法、传感器、自动化与算力基础设施公司档案。 |
| [💰 基金与投资机构 (Funds)](#funds) | 4 | 5 | 5 | 风险投资机构、产业基金与二级市场投资载体档案。 |
| [🏛️ 实验室、高校与机构平台 (Labs & Institutions)](#labs) | 8 | 7 | 6 | 高校实验室、企业研究院、开源合作组织、政府与行业研究机构档案。 |

## ⚠️ 未分组待审（Unassigned Audit Bucket）

新入口先显式挂起，必须先核实母体/平台关系并写入 `state/publisher_groups.json` 后移入正式组，不得凭名称猜测合并。

| 主体名称 | 平台与入口 | 档案入口 |
| --- | --- | --- |
| @arampell (X) | [X](https://x.com/arampell) | [查看档案](companies/%40arampell%20%28X%29.md) |
| a16z (X) | [X](https://x.com/a16z) | [查看档案](companies/a16z%20%28X%29.md) |
| Bessemer Venture Partners | [VC Official Site](https://www.bvp.com/) | [查看档案](companies/Bessemer%20Venture%20Partners.md) |
| David Senra | [website](https://www.davidsenra.com/) | [查看档案](companies/David%20Senra.md) |
| Founders Podcast | [spotify](https://open.spotify.com/show/7txiovdzPARhjm18NwMUYj) | [查看档案](companies/Founders%20Podcast.md) |
| Founders Podcast | [apple\_podcasts](https://podcasts.apple.com/us/podcast/founders/id1141877104) | [查看档案](companies/Founders%20Podcast.md) |
| Founders Podcast | [youtube](https://www.youtube.com/@FoundersPodcast) | [查看档案](companies/Founders%20Podcast.md) |
| Intuit | [Official IR](https://investors.intuit.com/) | [查看档案](companies/Intuit.md) |
| Stripe | [Official Website](https://stripe.com/) | [查看档案](companies/Stripe.md) |

<a id="people"></a>
## 👤 个人与学者 (People)

学者、创始人、工程师与独立研究者档案；同名 arXiv 作者索引仅作论文署名聚合，不自动合并社交账号身份。

| 主体名称 | 平台与入口 | 关注来源 | 收录文章 | 一手材料 | 问题/缺口 | 核心定位与说明 | 档案入口 |
| --- | --- | --- | --- | --- | --- | --- | --- |
| @eriktorenberg (X) | [X](https://x.com/eriktorenberg) | [REPLAY: The Story of Apple Pay \| Jennifer Bai…](https://a16z.simplecast.com/episodes/replay-the-story-of-apple-pay-jennifer-bailey-2024-0WemB8oE) | 1 | 1 | 1 | — | [查看档案](people/%40eriktorenberg%20%28X%29.md) |
| David Senra | [rss](https://feeds.megaphone.fm/david-senra)、[youtube](https://www.youtube.com/@davidsenra)、[x](https://x.com/davidsenra)、[apple\_podcasts](https://podcasts.apple.com/us/podcast/david-senra/id1836497887)、[spotify](https://open.spotify.com/show/7jVjHrQJCbgruHkhrFi94A) | [David Senra — Official Podcast Hub & Founders…](https://www.davidsenra.com/) | 1 | 1 | 2 | David Senra 节目可自动采集 RSS 源 David Senra 官方视频访谈频道 David Senra 个人官方 X 账号 A… | [查看档案](people/David%20Senra.md) |
| Founders Podcast | [rss](https://feeds.megaphone.fm/DSLLC6297708582)、[podcast\_rss](https://feeds.megaphone.fm/) | [David Senra — Official Podcast Hub & Founders…](https://www.davidsenra.com/) +1 | 2 | 2 | 3 | Founders 播客可自动采集 RSS 源 | [查看档案](people/Founders%20Podcast.md) |
| Joe Roberts | [作者独立网站](https://josephjcroberts.com/) | [The Commanding Heights](https://commanding-heights.com/) | 1 | 1 | 0 | • 美国特殊情境投资者，长文合著者。 • 文章提出AI时代Commanding Heights框架。 • 聚焦稀缺节点如何捕获智能扩散收益。 | [查看档案](people/Joe%20Roberts.md) |
| Mark Scott | [arXiv Author Index](https://arxiv.org/search/?searchtype=author&query=Scott%2C+Mark) | [Airship AI Q3 2026 Form 10-Q & \$29.0M DHS Fir…](https://ir.airship.ai/news-events/press-releases/detail/52/airship-ai-reports-third-quarter-2026-financial-results) | 1 | 1 | 0 | — | [查看档案](people/Mark%20Scott.md) |
| Scott Searle | [arXiv Author Index](https://arxiv.org/search/?searchtype=author&query=Searle%2C+Scott) | [Airship AI Q3 2026 Form 10-Q & \$29.0M DHS Fir…](https://ir.airship.ai/news-events/press-releases/detail/52/airship-ai-reports-third-quarter-2026-financial-results) | 1 | 1 | 0 | — | [查看档案](people/Scott%20Searle.md) |
| Victor Huang | [arXiv Author Index](https://arxiv.org/search/?searchtype=author&query=Huang%2C+Victor) | [Airship AI Q3 2026 Form 10-Q & \$29.0M DHS Fir…](https://ir.airship.ai/news-events/press-releases/detail/52/airship-ai-reports-third-quarter-2026-financial-results) | 1 | 1 | 0 | — | [查看档案](people/Victor%20Huang.md) |
| Will Manidis | [作者独立网站](https://willmanidis.com/) | [The Commanding Heights](https://commanding-heights.com/) | 1 | 1 | 0 | • ScienceIO创始人，公司售予大型EMR厂商。 • 参与Chroma、Thatch等早期投资。 • 合著长文，聚焦AI价值分配与权力… | [查看档案](people/Will%20Manidis.md) |

<a id="companies"></a>
## 🏢 公司与产业主体 (Companies)

机器人本体、模型算法、传感器、自动化与算力基础设施公司档案。

| 主体名称 | 平台与入口 | 关注来源 | 收录文章 | 一手材料 | 问题/缺口 | 核心定位与说明 | 档案入口 |
| --- | --- | --- | --- | --- | --- | --- | --- |
| @arampell (X) | [X](https://x.com/arampell) | [REPLAY: The Story of Apple Pay \| Jennifer Bai…](https://a16z.simplecast.com/episodes/replay-the-story-of-apple-pay-jennifer-bailey-2024-0WemB8oE) | 1 | 1 | 1 | — | [查看档案](companies/%40arampell%20%28X%29.md) |
| a16z (X) | [X](https://x.com/a16z) | [How to Win Bots and Influence Purchases](https://www.a16z.news/p/welcome-to-the-b2a-economy-how-agents) | 1 | 1 | 2 | 同步发布旗下合伙人研究文章与播客动态。 | [查看档案](companies/a16z%20%28X%29.md) |
| Anthropic | [机构官网](https://www.anthropic.com/) | [Anthropic, PBC IPO Investor Roadshow Presenta…](https://www.sec.gov/edgar/browse/?CIK=0002130357) | 1 | 1 | 2 | 前沿大模型与企业智能体实验室（Delaware PBC，拟议上市代码 NASDAQ: ANT），2026Q3 营收 \$16.96B、10 … | [查看档案](companies/Anthropic.md) |
| Bending Spoons | [Official Site](https://bendingspoons.com/)、[Official IR](https://bendingspoons.com/investors) | [Bending Spoons S.p.A. (NASDAQ: BSP) SEC Form …](https://www.sec.gov/edgar/browse/?CIK=0002004711) +1 | 2 | 2 | 6 | SEC CIK 0002004711 / NASDAQ: BSP | [查看档案](companies/Bending%20Spoons.md) |
| Bessemer Venture Partners | [VC Official Site](https://www.bvp.com/) | [Investing in fal: the generative media compan…](https://www.bvp.com/atlas/investing-in-fal-the-generative-media-company) | 1 | 1 | 2 | 领投 Fal \\\$1.3B Series F，合伙人 Talia Goldberg 加入 Fal 董事会 | [查看档案](companies/Bessemer%20Venture%20Partners.md) |
| David Senra | [website](https://www.davidsenra.com/) | [David Senra — Official Podcast Hub & Founders…](https://www.davidsenra.com/) | 1 | 1 | 2 | David Senra 访谈节目官方主站 | [查看档案](companies/David%20Senra.md) |
| DeepSeek（深度求索） | [Official Site](https://www.deepseek.com/) | [Monolith Management (SEC CIK 0001931557)、中基协 …](https://www.sec.gov/edgar/browse/?CIK=0001931557) | 1 | 1 | 4 | — | [查看档案](companies/DeepSeek%EF%BC%88%E6%B7%B1%E5%BA%A6%E6%B1%82%E7%B4%A2%EF%BC%89.md) |
| Fal (fal.ai) | [Company Official Site](https://fal.ai/)、[GitHub](https://github.com/fal-ai) | [The work and the people behind the build](https://fal.ai/blog/the-work-and-the-people-behind-the-build) | 1 | 1 | 2 | AI 生成式媒体推理基础设施与 Serverless 云平台 开源 FlashPack 等推理基础设施代码库 | [查看档案](companies/Fal%20%28fal.ai%29.md) |
| Founders Podcast | [youtube](https://www.youtube.com/@FoundersPodcast)、[apple\_podcasts](https://podcasts.apple.com/us/podcast/founders/id1141877104)、[spotify](https://open.spotify.com/show/7txiovdzPARhjm18NwMUYj) | [David Senra — Official Podcast Hub & Founders…](https://www.davidsenra.com/) | 1 | 1 | 2 | Founders 官方 YouTube 频道 Apple Podcasts Founders 主页 Spotify Founders 主页 | [查看档案](companies/Founders%20Podcast.md) |
| Intuit | [Official IR](https://investors.intuit.com/) | [Intuit Inc. Form 8-K (Item 1.01): Agreement t…](https://www.sec.gov/Archives/edgar/data/896878/000119312526468834/d182669d8k.htm) | 1 | 1 | 3 | SEC CIK 0000896878 / NASDAQ: INTU | [查看档案](companies/Intuit.md) |
| Navan | [Official Site](https://navan.com/) | [Charts of the Week: There is No Gen Z](https://www.a16z.news/p/charts-of-the-week-there-is-no-gen) | 1 | 1 | 1 | — | [查看档案](companies/Navan.md) |
| OpenAI | [Official Website](https://openai.com/) | [Introducing ChatGPT Wallet](https://openai.com/index/introducing-chatgpt-wallet/) | 1 | 1 | 2 | 与波士顿儿童医院及哈佛大学联合开展罕见病研究 | [查看档案](companies/OpenAI.md) |
| Stripe | [Official Website](https://stripe.com/) | [Stripe helps Muse, Meta's new personal AI age…](https://stripe.com/newsroom/news/stripe-helps-meta-muse-shop-with-link) | 1 | 1 | 2 | 官方新闻室承载与 Meta Muse 的集成披露。 | [查看档案](companies/Stripe.md) |
| The Prompting Company | [Official Website](https://promptingcompany.com/) | [How personal agents choose](https://promptingcompany.com/research/how-personal-agents-choose) | 1 | 1 | 2 | 与 a16z 合作执行 11,307 次个人 Agent 购物测试的数据生产方。 | [查看档案](companies/The%20Prompting%20Company.md) |
| Zhihu | [Official Site](https://www.zhihu.com/)、[Investor Relations](https://ir.zhihu.com/) | [Zhihu Inc. (NYSE: ZH / HKEX: 02390) 2026 年 9–…](https://www.sec.gov/edgar/browse/?CIK=0001835724) | 1 | 1 | 4 | — | [查看档案](companies/Zhihu.md) |

<a id="funds"></a>
## 💰 基金与投资机构 (Funds)

风险投资机构、产业基金与二级市场投资载体档案。

| 主体名称 | 平台与入口 | 关注来源 | 收录文章 | 一手材料 | 问题/缺口 | 核心定位与说明 | 档案入口 |
| --- | --- | --- | --- | --- | --- | --- | --- |
| a16z | [Official Website](https://a16z.com/)、[Podcast](https://feeds.simplecast.com/JGE3yC0V) | [Charts of the Week: There is No Gen Z](https://www.a16z.news/p/charts-of-the-week-there-is-no-gen) +2 | 3 | 3 | 4 | 发布 State of Markets 系列宏观与算力图表解析。 | [查看档案](funds/a16z.md) |
| a16z Newsletter | [Substack](https://www.a16z.news/) | [How to Win Bots and Influence Purchases](https://www.a16z.news/p/welcome-to-the-b2a-economy-how-agents) | 1 | 1 | 2 | 本文主发布载体（Olivia Moore & Justine Moore 署名）。 | [查看档案](funds/a16z%20Newsletter.md) |
| Coatue Management | [Official Site](https://www.coatue.com/) | [AI Agents Will Upend Investing Even More Than…](https://www.youtube.com/watch?v=AYFcmnQrZCg) | 1 | 1 | 2 | Philippe Laffont 于 1999 年创立的一二级市场科技投资机构（公开覆盖估测管理资产约 700 亿至 900 亿美元以上量级… | [查看档案](funds/Coatue%20Management.md) |
| Monolith Management（砺思资本） | [Official Site](https://monolithmgt.com/) | [Monolith Management (SEC CIK 0001931557)、中基协 …](https://www.sec.gov/edgar/browse/?CIK=0001931557) | 1 | 1 | 4 | — | [查看档案](funds/Monolith%20Management%EF%BC%88%E7%A0%BA%E6%80%9D%E8%B5%84%E6%9C%AC%EF%BC%89.md) |

<a id="labs"></a>
## 🏛️ 实验室、高校与机构平台 (Labs & Institutions)

高校实验室、企业研究院、开源合作组织、政府与行业研究机构档案。

| 主体名称 | 平台与入口 | 关注来源 | 收录文章 | 一手材料 | 问题/缺口 | 核心定位与说明 | 档案入口 |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 36氪（36Kr） | [Media](https://36kr.com/) | [《梁文锋攒了一个老乡局：老钱花35.5亿上船，但说不上话》（投中网 / 36氪参考原文）](https://eu.36kr.com/zh/p/4061947637699713) | 1 | 1 | 4 | — | [查看档案](labs/36%E6%B0%AA%EF%BC%8836Kr%EF%BC%89.md) |
| AI Engineer | [YouTube](https://www.youtube.com/@aiDotEngineer) | [AI Agents Will Upend Investing Even More Than…](https://www.youtube.com/watch?v=AYFcmnQrZCg) | 1 | 1 | 2 | AI Engineer 峰会官方 YouTube 频道，首发本场 14 分 04 秒主题演讲录像。 | [查看档案](labs/AI%20Engineer.md) |
| Electric Twin | [Official Site](https://www.electrictwin.com/) | [What we get wrong about Gen Z (Gen Z is Unbou…](https://www.electrictwin.com/research/gen-z-unbound) | 1 | 1 | 1 | — | [查看档案](labs/Electric%20Twin.md) |
| Fortune | [website](https://fortune.com/) | [How David Senra built the podcast the world’s…](https://fortune.com/2026/07/05/how-david-senra-built-founders-podcast-powerful-ceos-spotify-bezos-coinbase-ramp-tbpn/) | 1 | 1 | 2 | Fortune Magazine 原始媒体发布站点 | [查看档案](labs/Fortune.md) |
| Founders Podcast | [website](https://www.founderspodcast.com/)、[x](https://x.com/FoundersPodcast) | [David Senra — Official Podcast Hub & Founders…](https://www.davidsenra.com/) | 1 | 1 | 2 | Founders 播客官方主站 Founders 播客官方 X 账号 | [查看档案](labs/Founders%20Podcast.md) |
| Gartner | [机构官网](https://www.gartner.com/en/newsroom) | [Gartner Forecasts Worldwide IT Spending to Gr…](https://www.gartner.com/en/newsroom/press-releases/2026-07-27-gartner-forecasts-worldwide-it-spending-to-grow-14-point-2-percent-in-2026-totaling-6-point-37-trillion) | 1 | 1 | 1 | • IT研究与顾问机构，发布市场预测。 • 文章估2026全球IT支出\$6.37万亿，增14.2%。 • 面向企业技术与投资决策者。 | [查看档案](labs/Gartner.md) |
| TechCrunch | [Tech Media](https://techcrunch.com/) | [AI inference startup fal doubles its valuatio…](https://techcrunch.com/2026/11/03/ai-inference-startup-fal-doubles-its-valuation-to-16b-as-demand-surges/) | 1 | 1 | 2 | TechCrunch 科技与一级市场报道媒体 | [查看档案](labs/TechCrunch.md) |
| 投中网（ChinaVenture） | [Media](https://www.chinaventure.com.cn/) | [《梁文锋攒了一个老乡局：老钱花35.5亿上船，但说不上话》（投中网 / 36氪参考原文）](https://eu.36kr.com/zh/p/4061947637699713) | 1 | 1 | 4 | — | [查看档案](labs/%E6%8A%95%E4%B8%AD%E7%BD%91%EF%BC%88ChinaVenture%EF%BC%89.md) |


待补账号入口：Andreessen Horowitz (a16z)、Anthropic, PBC、Apple Newsroom、Bending Spoons S.p.A. (SEC CIK 0002004711)、Founders Podcast、Intuit Inc. (SEC CIK 0000896878)。

arXiv作者索引仅用于按署名检索论文，不能证明同名作者的账号身份。
