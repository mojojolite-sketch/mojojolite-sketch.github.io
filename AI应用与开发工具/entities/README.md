# AI应用与开发工具 · 主体档案库（Entities）

按「个人 / 公司 / 基金 / 机构」四类主体聚合本赛道收录的微信文章、一手论文/报告（含 NotebookLM 与 Google Drive 归档）、用户追问及待核查缺口。账号、作者与机构身份在底层 `registry.sqlite3` 中严格分开。

[返回赛道总览](../赛道总览.md) · [单篇导读索引](../blogs/README.md) · [交互式逻辑演变图谱](https://mojojolite-sketch.github.io/AI%E5%BA%94%E7%94%A8%E4%B8%8E%E5%BC%80%E5%8F%91%E5%B7%A5%E5%85%B7/index.html)

| 主体分类 | 主体数量 | 覆盖一手材料数 | 关联文章数 | 说明 |
| --- | --- | --- | --- | --- |
| [👤 个人与学者 (People)](#people) | 17 | 21 | 15 | 学者、创始人、工程师与独立研究者档案；同名 arXiv 作者索引仅作论文署名聚合，不自动合并社交账号身份。 |
| [🏢 公司与产业主体 (Companies)](#companies) | 38 | 62 | 25 | 机器人本体、模型算法、传感器、自动化与算力基础设施公司档案。 |
| [💰 基金与投资机构 (Funds)](#funds) | 6 | 7 | 3 | 风险投资机构、产业基金与二级市场投资载体档案。 |
| [🏛️ 实验室、高校与机构平台 (Labs & Institutions)](#labs) | 16 | 16 | 11 | 高校实验室、企业研究院、开源合作组织、政府与行业研究机构档案。 |

## ⚠️ 未分组待审（Unassigned Audit Bucket）

新入口先显式挂起，必须先核实母体/平台关系并写入 `state/publisher_groups.json` 后移入正式组，不得凭名称猜测合并。

| 主体名称 | 平台与入口 | 档案入口 |
| --- | --- | --- |
| Dassault Systèmes | [Investor Relations](https://investor.3ds.com/) | [查看档案](companies/Dassault%20Syst%C3%A8mes.md) |
| Dassault Systèmes | [Official Website](https://www.3ds.com/) | [查看档案](companies/Dassault%20Syst%C3%A8mes.md) |
| David Senra | [website](https://www.davidsenra.com/) | [查看档案](companies/David%20Senra.md) |
| Shopify | [Official Website](https://www.shopify.com/) | [查看档案](companies/Shopify.md) |
| SpaceX | [SpaceXSI / xAI 官方域](https://x.ai/) | [查看档案](companies/SpaceX.md) |
| Team Beef Studios | [Official Site](https://www.teambeefvr.com/) | [查看档案](companies/Team%20Beef%20Studios.md) |
| Y Combinator | [Accelerator Directory](https://www.ycombinator.com/) | [查看档案](companies/Y%20Combinator.md) |

<a id="people"></a>
## 👤 个人与学者 (People)

学者、创始人、工程师与独立研究者档案；同名 arXiv 作者索引仅作论文署名聚合，不自动合并社交账号身份。

| 主体名称 | 平台与入口 | 关注来源 | 收录文章 | 一手材料 | 问题/缺口 | 核心定位与说明 | 档案入口 |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Alex Heath | [podcast](https://sources.news/) | [We are so early](https://sources.news/p/we-are-so-early) +2 | 3 | 3 | 5 | Alex Heath 主持的科技与 AI 访谈通讯与播客平台 | [查看档案](people/Alex%20Heath.md) |
| Barry McCardel | [X](https://x.com/barrald) | [A new era for Hex, and data](https://hex.tech/blog/hex-new-era/) | 1 | 1 | 2 | • Hex联合创始人兼CEO，前Palantir前线部署工程师。 • 主导推翻6年架构重写4.0，提出一切皆代码。 • 指出AI数据散乱与传… | [查看档案](people/Barry%20McCardel.md) |
| Bertie Vidgen | [arXiv Author Index](https://arxiv.org/search/?searchtype=author&query=Vidgen%2C+Bertie) | [APEX-Agents: AI Productivity Index for Agents…](https://arxiv.org/abs/2601.14242) +1 | 1 | 2 | 6 | — | [查看档案](people/Bertie%20Vidgen.md) |
| Brendan Foody | [arXiv Author Index](https://arxiv.org/search/?searchtype=author&query=Foody%2C+Brendan) | [APEX-Agents: AI Productivity Index for Agents…](https://arxiv.org/abs/2601.14242) +1 | 1 | 2 | 6 | Mercor 联合创始人兼 CEO（Thiel Fellow），主导收购 Deeptune 与 Sepal AI，并个人参投 Agent 代… | [查看档案](people/Brendan%20Foody.md) |
| Charlie Holtz | [X](https://x.com/charlieholtz) | [Meta Acquisition of Conductor (Melty Labs), M…](https://conductor.build/) | 1 | 1 | 5 | Conductor (Melty Labs) 联合创始人兼 CEO，2026年11月率团队加入 Meta Superintelligence… | [查看档案](people/Charlie%20Holtz.md) |
| David George | [arXiv Author Index](https://arxiv.org/search/?searchtype=author&query=George%2C+David) | [The a16z Show: The \$1 Trillion AI Buildout (S…](https://a16z.com/podcasts/a16z-podcast/the-1-trillion-ai-buildout-state-of-markets) | 1 | 1 | 2 | — | [查看档案](people/David%20George.md) |
| David Senra | [rss](https://feeds.megaphone.fm/david-senra)、[youtube](https://www.youtube.com/@davidsenra)、[x](https://x.com/davidsenra) | [Brian Armstrong, Coinbase - David Senra](https://www.davidsenra.com/episode/brian-armstrong) +3 | 2 | 4 | 4 | David Senra 节目可自动采集 RSS 源 David Senra 官方视频访谈频道 David Senra 个人官方 X 账号 | [查看档案](people/David%20Senra.md) |
| Greg Isenberg | [YouTube](https://www.youtube.com/@GregIsenberg) | [\$100M ARR Founder: The Next Big AI Opportunit…](https://www.youtube.com/watch?v=st61aKW8P5A) | 1 | 1 | 2 | • Late Checkout CEO，曾创办5by与Islands。 • 5by售予StumbleUpon，Islands售予WeWork… | [查看档案](people/Greg%20Isenberg.md) |
| Guillermo Rauch | [个人主页](https://rauchg.com/) | [Vercel CEO: How 1 Person + AI Agents Could Bu…](https://www.youtube.com/watch?v=W9YfKZaK7KI) | 1 | 1 | 4 | • Vercel创始人兼CEO，阿根廷籍工程师。 • 创办Next.js、Socket.io与Mongoose。 • 主张自驱动基础设施与后… | [查看档案](people/Guillermo%20Rauch.md) |
| ImChong (Robotics\_Notebooks) | [GitHub](https://github.com/ImChong) | [Stanford CS146S Fall 2026 公开讲义逐页阅读记录（8 套 127 …](https://github.com/ImChong/Robotics_Notebooks/blob/main/sources/courses/cs146s-2026-lecture-slides-reading.md) +1 | 1 | 2 | 3 | 系统整理斯坦福 CS146S Fall 2026 前 8 套 127 页公开讲义与 Week 1–5 作业模板核读索引的维护者。 | [查看档案](people/ImChong%20%28Robotics_Notebooks%29.md) |
| John Carmack | [X](https://x.com/ID_AA_Carmack) | [John Carmack (@ID\_AA\_Carmack)：愿为 Team Beef VR…](https://x.com/ID_AA_Carmack/status/2075319665564234012) | 1 | 1 | 2 | — | [查看档案](people/John%20Carmack.md) |
| Lauren Tan | [X (Twitter)](https://x.com/poteto) | [pstack: Agent Skills & /poteto-mode Playbook …](https://raw.githubusercontent.com/cursor/plugins/main/pstack/README.md) | 1 | 1 | 2 | SpaceXSI Grok Bot 核心工程师，前 Cursor、Netflix、Meta 及 React 核心团队成员，pstack 作者… | [查看档案](people/Lauren%20Tan.md) |
| Mihail Eric | [website](https://www.mihaileric.com/)、[x](https://x.com/mihail_eric)、[github](https://github.com/mihail911) | [mihail911/modern-software-dev-assignments (Fa…](https://github.com/mihail911/modern-software-dev-assignments) | 1 | 1 | 3 | Stanford CS146S 主讲人、Monaco Head of AI、前 Storia AI 联合创始人及 Amazon Alexa … | [查看档案](people/Mihail%20Eric.md) |
| Olivia Koshy | [个人主页](https://oliviakoshy.com/) | [Introducing Hex 4.0](https://hex.tech/blog/introducing-hex-4-0/) | 1 | 1 | 2 | • Hex产品主管，主导Hex AI与核心分析产品。 • 毕业于UC Berkeley，曾创办ML@Berkeley。 • 主笔Hex 4.… | [查看档案](people/Olivia%20Koshy.md) |
| Ovais Tariq (@ovaistariq) | [X](https://x.com/ovaistariq) | [Dropbox \$350M Acquisition of Tigris Data, DBX…](https://www.tigrisdata.com/blog/dropbox-acquires-tigris/) | 1 | 1 | 8 | • Tigris Data联合创始人兼CEO，前Uber存储平台工程负责人。 • 主导研发基于FoundationDB与不可变日志的全球分布… | [查看档案](people/Ovais%20Tariq%20%28%40ovaistariq%29.md) |
| Raghu Raghuram | [arXiv Author Index](https://arxiv.org/search/?searchtype=author&query=Raghuram%2C+Raghu) | [The a16z Show: The \$1 Trillion AI Buildout (S…](https://a16z.com/podcasts/a16z-podcast/the-1-trillion-ai-buildout-state-of-markets) | 1 | 1 | 2 | — | [查看档案](people/Raghu%20Raghuram.md) |
| Sarah Wang | [arXiv Author Index](https://arxiv.org/search/?searchtype=author&query=Wang%2C+Sarah) | [The a16z Show: The \$1 Trillion AI Buildout (S…](https://a16z.com/podcasts/a16z-podcast/the-1-trillion-ai-buildout-state-of-markets) | 1 | 1 | 2 | — | [查看档案](people/Sarah%20Wang.md) |

<a id="companies"></a>
## 🏢 公司与产业主体 (Companies)

机器人本体、模型算法、传感器、自动化与算力基础设施公司档案。

| 主体名称 | 平台与入口 | 关注来源 | 收录文章 | 一手材料 | 问题/缺口 | 核心定位与说明 | 档案入口 |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Akamai | [Official Site](https://www.akamai.com/) | [Meta Acquisition of Conductor (Melty Labs), M…](https://conductor.build/) +2 | 2 | 3 | 8 | 全球分布式边缘安全与云计算公司（NASDAQ: AKAM），2026Q3 营收 \$1.122B（CIS Compute \$108.8M,… | [查看档案](companies/Akamai.md) |
| AMD | [Official Site · 机构官网](https://www.amd.com/) | [Meta Acquisition of Conductor (Melty Labs), M…](https://conductor.build/) | 1 | 1 | 5 | 高密服务器 CPU 与异构 AI 算力芯片巨头（NASDAQ: AMD），拥有 EPYC Turin 服务器 CPU、Instinct 数据… | [查看档案](companies/AMD.md) |
| Anthropic | [Official Site](https://www.anthropic.com/) | [Akamai Q3 2026 Form 10-Q & Financial Results:…](https://www.akamai.com/newsroom/press-release/akamai-reports-third-quarter-2026-financial-results) | 1 | 1 | 3 | 前沿大模型厂商Anthropic官方主体站点 | [查看档案](companies/Anthropic.md) |
| Arda Industries | [LinkedIn](https://www.linkedin.com/company/arda-industries/) | [Arda Industries – AI for Manufacturing](https://arda.ai/) | 1 | 1 | 3 | • 制造业AI助手，把设计转为可产工艺。 • 案例披露Anduril部署。 • CNBC称2026-10融资\$230m，估值\$1.5b。 | [查看档案](companies/Arda%20Industries.md) |
| Bending Spoons | [Official IR](https://investors.bendingspoons.com/) | [Bending Spoons S.p.A. Form 6-K Ex-99.1: Defin…](https://www.sec.gov/Archives/edgar/data/2004711/000200471126000009/bsp_ex99-1.htm) +1 | 1 | 2 | 1 | SEC CIK 0002004711 / NASDAQ: BSP | [查看档案](companies/Bending%20Spoons.md) |
| Broccoli | [FinanceWire / Webdisclosure（分发）](https://broccoli.com/)、[Official Site](https://www.broccoli.com/) | [Broccoli Raises \$52M Led by Khosla Ventures t…](https://www.webdisclosure.com/press-release/broccoli-raises-52m-led-by-khosla-ventures-to-help-home-services-businesses-book-more-jobs-and-keep-customers-So2mNmsdWQy) +1 | 1 | 2 | 3 | • 家庭服务商AI语音接待与预约代理。 • 覆盖HVAC、屋顶、光伏、清洁等场景。 • 新闻稿称1500+企业使用；融资\$52m，估值未披… | [查看档案](companies/Broccoli.md) |
| Cloudflare | [Official Site](https://www.cloudflare.com/) | [Pricing · Cloudflare R2 docs](https://developers.cloudflare.com/r2/pricing/) +1 | 2 | 2 | 13 | 全球边缘网络与 Serverless 执行云平台，旗下 Cloudflare R2 主打 \$0.015/GB/月零出口费对象存储。 | [查看档案](companies/Cloudflare.md) |
| Conductor (Melty Labs) | [Official Site](https://conductor.build/) | [Meta Acquisition of Conductor (Melty Labs), M…](https://conductor.build/) | 1 | 1 | 5 | AI 编程多 Agent 并行编排客户端开发商（YC S24），2026年3月完成 Spark 与 Matrix 领投的 2,200 万美元… | [查看档案](companies/Conductor%20%28Melty%20Labs%29.md) |
| Cursor (Anysphere) | [Official Site](https://www.cursor.com/)、[GitHub](https://github.com/cursor) | [Meta Acquisition of Conductor (Melty Labs), M…](https://conductor.build/) +1 | 2 | 2 | 7 | 头部 AI 原生代码编辑器与云端后台 Agent 平台（Background Agents 基于独立远程虚拟机沙盒并行执行分支任务），202… | [查看档案](companies/Cursor%20%28Anysphere%29.md) |
| Dassault Systèmes | [Official Website](https://www.3ds.com/)、[Investor Relations](https://investor.3ds.com/)、[SOLIDWORKS Product Website](https://www.solidworks.com/)、[SOLIDWORKS Official Blog](https://blogs.solidworks.com/) | [Virtual Companion Units (Blue Tokens) Pricing…](https://www.3ds.com/store/blue-tokens) +4 | 1 | 5 | 3 | Euronext Paris: DSY.PA。 同主体多入口归并至 Dassault Systèmes 实体。 1993 年由 Jon Hi… | [查看档案](companies/Dassault%20Syst%C3%A8mes.md) |
| David Senra | [website](https://www.davidsenra.com/) | [Brian Armstrong, Coinbase - David Senra](https://www.davidsenra.com/episode/brian-armstrong) +3 | 2 | 4 | 4 | David Senra 访谈节目官方主站 | [查看档案](companies/David%20Senra.md) |
| Daytona | [Official Site](https://www.daytona.io/) | [Meta Acquisition of Conductor (Melty Labs), M…](https://conductor.build/) | 1 | 1 | 5 | 专注亚百毫秒级（\<100ms）AI Agent 专用代码执行沙盒基础设施，2026年10月完成 FirstMark 领投的 6,000 万… | [查看档案](companies/Daytona.md) |
| Dropbox | [Official Site](https://www.dropbox.com/) | [Dropbox \$350M Acquisition of Tigris Data, DBX…](https://www.tigrisdata.com/blog/dropbox-acquires-tigris/) +1 | 1 | 2 | 8 | 全球云存储与内容协作平台（NASDAQ: DBX），自建 Exabyte 级 Magic Pocket 裸金属存储基础设施。 | [查看档案](companies/Dropbox.md) |
| E2B | [Official Site](https://e2b.dev/) | [Meta Acquisition of Conductor (Melty Labs), M…](https://conductor.build/) | 1 | 1 | 5 | 开源 AI Agent 云端代码执行沙盒标准制定者（基于 AWS Firecracker 实现 150ms 极速启动完整 Linux Mic… | [查看档案](companies/E2B.md) |
| Fal (fal.ai) | [Company Official Site](https://fal.ai/)、[GitHub](https://github.com/fal-ai) | [Dropbox \$350M Acquisition of Tigris Data, DBX…](https://www.tigrisdata.com/blog/dropbox-acquires-tigris/) +1 | 2 | 2 | 12 | AI 生成式媒体推理基础设施与 Serverless 云平台 开源 FlashPack 等推理基础设施代码库 | [查看档案](companies/Fal%20%28fal.ai%29.md) |
| GC AI | [Official Site](https://gc.ai/) | [GC AI Raises \$60 Million Series B to Give Eve…](https://gc.ai/blog/gc-ai-raises-60-million-series-b-to-give-every-company-a-legal-advantage) +6 | 1 | 7 | 2 | 聚焦企业内部法务团队的 Legal AI 工作台，由 Cecilia Ziniti 与 Bardia Pourvakil 于 2023-11… | [查看档案](companies/GC%20AI.md) |
| GoEngineer | [Official Website](https://www.goengineer.com/) | [SOLIDWORKS AI Blue Tokens - FAQ (GoEngineer)](https://www.goengineer.com/blog/solidworks-ai-blue-tokens-faq) | 1 | 1 | 3 | 负责企业级 SOLIDWORKS 许可与 Blue Tokens 线下/企业租户交付。 | [查看档案](companies/GoEngineer.md) |
| Harvey | [机构官网](https://www.harvey.ai/) | [How Harvey is Building a Frontier Marketing O…](https://www.harvey.ai/blog/how-harvey-is-building-a-frontier-marketing-org) | 1 | 1 | 2 | • 法律与专业服务AI，客户是律所与企业法务。 • 覆盖合同、尽调、合规、研究与工作流。 • 官网披露融资\$550m，估值\$15.5b。 | [查看档案](companies/Harvey.md) |
| Hex | [机构官网](https://hex.tech/) | [A new era for Hex, and data](https://hex.tech/blog/hex-new-era/) +1 | 1 | 2 | 2 | • 协作式数据分析与AI数据应用平台，创办于2019。 • 获Peak XV/137领投1亿美元D轮，估值12亿美元。 • 推倒重写4.0，… | [查看档案](companies/Hex.md) |
| Mercor | [Official Site](https://www.mercor.com/research/)、[Hugging Face](https://huggingface.co/mercor) | [Meta Acquisition of Conductor (Melty Labs), M…](https://conductor.build/) +2 | 2 | 3 | 11 | Mercor 官方 Hugging Face 开源基准与数据集组织入口。 | [查看档案](companies/Mercor.md) |
| Meta | [Official Site](https://ai.meta.com/) | [Meta Acquisition of Conductor (Melty Labs), M…](https://conductor.build/) | 1 | 1 | 5 | Meta AI 部门与 Superintelligence Labs（由首席 AI 官 Alexandr Wang 与产品负责人 Nat F… | [查看档案](companies/Meta.md) |
| Modal | [Official Site](https://modal.com/) | [Meta Acquisition of Conductor (Melty Labs), M…](https://conductor.build/) | 1 | 1 | 5 | 自研 Rust 容器运行时与极速文件系统的 Serverless AI 基础设施独角兽，提供秒起万级并发的 Modal Sandboxes；… | [查看档案](companies/Modal.md) |
| Nutanix | [Official Site](https://www.nutanix.com/) | [Meta Acquisition of Conductor (Melty Labs), M…](https://conductor.build/) | 1 | 1 | 5 | 企业级超融合与虚拟化替代纯正龙头（NASDAQ: NTNX），凭自研 KVM 虚拟化管理程序 AHV（核心采用率 92%）大举承接逃离 Br… | [查看档案](companies/Nutanix.md) |
| NVIDIA | [GitHub](https://github.com/NVIDIA)、[Company Official Site](https://www.nvidia.com/) | [NVIDIA/auto-ontology: Open-Source Enterprise …](https://github.com/NVIDIA/auto-ontology) +1 | 1 | 2 | 6 | NVIDIA 开源评测工具链统一机构入口 | [查看档案](companies/NVIDIA.md) |
| OpenAI | [Official Website](https://openai.com/) | [Accelerating engineering for the physical wor…](https://openai.com/index/accelerating-engineering-for-the-physical-world/) +1 | 2 | 2 | 4 | 与波士顿儿童医院及哈佛大学联合开展罕见病研究 | [查看档案](companies/OpenAI.md) |
| Plato | [机构官网](https://plato.so/) | [Plato Raises \$16 Million to Build the Trainin…](https://www.prnewswire.com/news-releases/plato-raises-16-million-to-build-the-training-grounds-for-ais-next-leap-into-real-work-302921832.html) +2 | 1 | 3 | 2 | • 浏览器/计算机工作agent仿真环境公司。 • Computer Work Val含300个真实工作任务环境。 • 2026-10 A轮… | [查看档案](companies/Plato.md) |
| Railway | [机构官网](https://railway.com/) | [Dropbox \$350M Acquisition of Tigris Data, DBX…](https://www.tigrisdata.com/blog/dropbox-acquires-tigris/) | 1 | 1 | 8 | • 新一代开发者优先的云应用即时部署与基础设施平台。 • Tigris Data核心平台客户，代表AI与现代应用开发者的分发网络。 | [查看档案](companies/Railway.md) |
| Rosie | [Official Site](https://www.rosiematch.com/) | [Rosie Raises \$7 Million to Bring Flexible Chi…](https://www.prnewswire.com/news-releases/rosie-raises-7-million-to-bring-flexible-childcare-and-household-support-beyond-seattle-302913603.html) +3 | 1 | 4 | 3 | 面向护理与家政人员（Pros）的入驻与职业阶梯规则页。 | [查看档案](companies/Rosie.md) |
| SemiAnalysis | [website](https://semianalysis.com/)、[substack](https://newsletter.semianalysis.com/)、[website](https://gdpx.semianalysis.com/) | [GDPx: Measuring Frontier Model Capabilities A…](https://newsletter.semianalysis.com/p/gdpx-measuring-frontier-model-capabilities) | 1 | 1 | 2 | 半导体与 AI 基础设施研究机构 SemiAnalysis 主站 SemiAnalysis Substack 研究通讯入口 GDPx 官方评… | [查看档案](companies/SemiAnalysis.md) |
| Shopify | [Official Website](https://www.shopify.com/) | [Tobi Lütke on the AI agent revolution and fut…](https://sources.news/p/tobi-lutke-shopify-ai-agents) | 1 | 1 | 2 | 独立商户电商与 Agentic Commerce 目录/结账基础设施平台 | [查看档案](companies/Shopify.md) |
| Siemens | [机构官网](https://www.siemens.com/) | [Xometry Reports Record Third Quarter 2026 Res…](https://www.globenewswire.com/news-release/2026/11/03/3190820/0/en/Xometry-Reports-Record-Third-Quarter-2026-Results.html) | 1 | 1 | 1 | • 全球工业自动化、数字孪生与工业软件巨头（Siemens AG）。 • 2026年向Xometry战略投资5000万美元，在Designc… | [查看档案](companies/Siemens.md) |
| SpaceX | [官方网站](https://www.spacex.com/)、[SpaceXSI / xAI 官方域](https://x.ai/) | [Grok Bot 101 · Grok Bot Guides](https://x.ai/bot/guides/grok-bot-101) | 1 | 1 | 2 | 全球商业航天与超级智能（SpaceXSI，整合 xAI 与 Cursor）母体公司。 Grok Bot 与 xAI 产品体系官方域名入口。 | [查看档案](companies/SpaceX.md) |
| Team Beef Studios | [Official Site](https://www.teambeefvr.com/) | [Team Beef - VR Game Ports & Mods](https://www.teambeefvr.com/) | 1 | 1 | 2 | 2019 年创立于 VR 模组社区、2025 年注册为商业游戏移植公司 Team Beef Studios，长期维护 id Tech 开源引… | [查看档案](companies/Team%20Beef%20Studios.md) |
| Tigris Data | [Official Site](https://www.tigrisdata.com/) | [Dropbox \$350M Acquisition of Tigris Data, DBX…](https://www.tigrisdata.com/blog/dropbox-acquires-tigris/) +5 | 2 | 6 | 12 | 前 Uber 存储基础设施核心团队创立的全球分布式、零出口费、S3 兼容 AI 对象存储平台。 | [查看档案](companies/Tigris%20Data.md) |
| Together AI | [Official Site](https://www.together.ai/) | [Meta Acquisition of Conductor (Melty Labs), M…](https://conductor.build/) | 1 | 1 | 5 | 头部开源大模型推理与训练云平台，2024年12月全资收购 CodeSandbox，将毫秒级 Firecracker MicroVM 内存快照… | [查看档案](companies/Together%20AI.md) |
| Vercel | [Official Site](https://vercel.com/) | [Vercel CEO: How 1 Person + AI Agents Could Bu…](https://www.youtube.com/watch?v=W9YfKZaK7KI) +5 | 1 | 6 | 4 | Next.js 与 v0 缔造者，聚焦前端云与自驱动 Agent 基础设施平台。 | [查看档案](companies/Vercel.md) |
| Xometry | [机构官网](https://www.xometry.com/) | [Xometry Reports Record Third Quarter 2026 Res…](https://www.globenewswire.com/news-release/2026/11/03/3190820/0/en/Xometry-Reports-Record-Third-Quarter-2026-Results.html) | 1 | 1 | 1 | • 全球最大的AI按需定制制造双边交易平台（NASDAQ: XMTR）。 • 基于图神经网络提供CNC、注塑、钣金与3D打印秒级报价，连接9… | [查看档案](companies/Xometry.md) |
| Y Combinator | [Accelerator Directory](https://www.ycombinator.com/) | [Broccoli AI: AI-native operating system for h…](https://www.ycombinator.com/companies/broccoli-ai) | 1 | 1 | 3 | Broccoli 投资方及 Winter 2022 孵化器官方档案入口。 | [查看档案](companies/Y%20Combinator.md) |

<a id="funds"></a>
## 💰 基金与投资机构 (Funds)

风险投资机构、产业基金与二级市场投资载体档案。

| 主体名称 | 平台与入口 | 关注来源 | 收录文章 | 一手材料 | 问题/缺口 | 核心定位与说明 | 档案入口 |
| --- | --- | --- | --- | --- | --- | --- | --- |
| a16z (@a16z) | [Official Site](https://a16z.com/) | [The a16z Show: The \$1 Trillion AI Buildout (S…](https://a16z.com/podcasts/a16z-podcast/the-1-trillion-ai-buildout-state-of-markets) +3 | 1 | 4 | 2 | a16z 官方基础设施主题节目页。 | [查看档案](funds/a16z%20%28%40a16z%29.md) |
| a16z Newsletter | [Substack](https://www.a16z.news/) | [Dropbox \$350M Acquisition of Tigris Data, DBX…](https://www.tigrisdata.com/blog/dropbox-acquires-tigris/) | 1 | 1 | 8 | 本文主发布载体（Olivia Moore & Justine Moore 署名）。 | [查看档案](funds/a16z%20Newsletter.md) |
| Basis Set Ventures | [机构官网](https://www.basisset.ventures/) | [Dropbox \$350M Acquisition of Tigris Data, DBX…](https://www.tigrisdata.com/blog/dropbox-acquires-tigris/) | 1 | 1 | 8 | • 专注于AI、自动化与开发者基础设施的早期风投基金。 • 早期投资Tigris Data并参与其2500万美元Series A轮融资。 | [查看档案](funds/Basis%20Set%20Ventures.md) |
| David George | [Official Site](https://a16z.com/author/david-george/) | [There are only two paths left for software](https://a16z.com/there-are-only-two-paths-left-for-software/) | 1 | 1 | 2 | State of Markets 系列及 Software Two Paths 原文作者。 | [查看档案](funds/David%20George.md) |
| Spark Capital | [机构官网](https://www.sparkcapital.com/) | [Dropbox \$350M Acquisition of Tigris Data, DBX…](https://www.tigrisdata.com/blog/dropbox-acquires-tigris/) | 1 | 1 | 8 | • 美国一线风险投资机构，横跨早期与成长期科技投资。 • 2025年10月领投Tigris Data 2500万美元A轮融资，一年后迎3.5… | [查看档案](funds/Spark%20Capital.md) |
| Y Combinator | [YouTube](https://www.youtube.com/@ycombinator) | [The FDE Playbook for AI Startups with Bob McG…](https://www.youtube.com/watch?v=Zyw-YA0k3xo) | 1 | 1 | 2 | Y Combinator 官方 YouTube 频道，Lightcone 与 Startup Podcast 原视频发布入口。 | [查看档案](funds/Y%20Combinator.md) |

<a id="labs"></a>
## 🏛️ 实验室、高校与机构平台 (Labs & Institutions)

高校实验室、企业研究院、开源合作组织、政府与行业研究机构档案。

| 主体名称 | 平台与入口 | 关注来源 | 收录文章 | 一手材料 | 问题/缺口 | 核心定位与说明 | 档案入口 |
| --- | --- | --- | --- | --- | --- | --- | --- |
| AIPressRoom | [News Media](https://aipressroom.com/) | [Arda Industries Lands \$232M to Automate US Ma…](https://aipressroom.com/arda-industries-232m-manufacturing-ai/) | 1 | 1 | 3 | 跟踪 AI 工业自动化与大额融资交易的新闻站点。 | [查看档案](labs/AIPressRoom.md) |
| Business Insider | [News Media](https://www.businessinsider.com/) | [Shopify CEO Says Jensen Huang's Ouster Looked…](https://www.businessinsider.com/shopify-ceo-says-jensen-huangs-ouster-looked-choreographed-2026-11) | 1 | 1 | 2 | 美国商业科技媒体，提供 David Senra Ep. 57 逐字原话新闻报道 | [查看档案](labs/Business%20Insider.md) |
| CNBC | [CNBC Press Room](https://pressroom.versantmedia.com/cnbc/press-releases) | [CNBC Exclusive: Transcript: Prometheus Co-Fou…](https://pressroom.versantmedia.com/cnbc/press-releases/cnbc-exclusive-transcript-prometheus-co-founders-and-co-ceos-jeff-bezos-and-vik) | 1 | 1 | 3 | • CNBC商业新闻频道，Pressroom称月触达近5亿。 • 文章发布Prometheus创始人访谈记录。 • 受访者不等同发布主体。 | [查看档案](labs/CNBC.md) |
| Crunchbase News | [News Media](https://news.crunchbase.com/) | [A Startup General Counsel Knew What Corporate…](https://news.crunchbase.com/venture/nontech-startup-general-counsel-built-legal-tech-gc-ai-ziniti/) | 1 | 1 | 2 | 美国创投媒体 Crunchbase News 官方报道入口。 | [查看档案](labs/Crunchbase%20News.md) |
| Delphi | [YouTube](https://www.youtube.com/@withdelphi) | [Vercel CEO: How 1 Person + AI Agents Could Bu…](https://www.youtube.com/watch?v=W9YfKZaK7KI) | 1 | 1 | 4 | • 海外AI访谈平台，推出数字分身与对话播客。 • 深度对谈全球顶尖科技创始人与工程师。 • 原视频发布频道，非受访者个人账号。 | [查看档案](labs/Delphi.md) |
| Google Research | [Official Website](https://research.google/) | [Proactive AI for Superintelligent Agents](https://research.google/pubs/proactive-ai-for-superintelligent-agents/) | 1 | 1 | 2 | Google 科研与机器人学派总览入口。 | [查看档案](labs/Google%20Research.md) |
| NBER (National Bureau of Economic Research) | [机构官网](https://www.nber.org/) | [The future of the firm (OpenAI Intelligence A…](https://openai.com/index/the-future-of-the-firm/) | 1 | 1 | 2 | • 美国国家经济研究局（National Bureau of Economic Research），全球顶级经济学工作论文发布机构。 • 2… | [查看档案](labs/NBER%20%28National%20Bureau%20of%20Economic%20Research%29.md) |
| Road to VR | [News Media](https://roadtovr.com/) | [Former Oculus CTO John Carmack Puts up \$1M fo…](https://roadtovr.com/john-carmack-1m-guarantee-id-software-vr-games/) | 1 | 1 | 2 | 跟进报道 John Carmack 重申 \$1M 担保及 id Software 开源引擎与版权资产分离的商业约束。 | [查看档案](labs/Road%20to%20VR.md) |
| SiliconANGLE | [News Media](https://siliconangle.com/) | [Jeff Bezos’ Project Prometheus reportedly acq…](https://siliconangle.com/2025/11/26/jeff-bezos-project-prometheus-reportedly-acquires-ai-startup-general-agents/) | 1 | 1 | 3 | 持续跟踪报道 Project Prometheus \$6.2B 启动轮及 General Agents（Ace VLA 模型）并购动态。 | [查看档案](labs/SiliconANGLE.md) |
| Stanford CS146S | [website](https://themodernsoftware.dev/) | [Stanford Bulletin: CS 146S The Modern Softwar…](https://bulletin.stanford.edu/courses/2274401) | 1 | 1 | 3 | Stanford University AI 原生软件工程课（CS146S: The Modern Software Developer）总… | [查看档案](labs/Stanford%20CS146S.md) |
| Superpower Daily | [News Media](https://superpowerdaily.com/) | [Broccoli AI raises \$30 million to automate ca…](https://superpowerdaily.com/posts/broccoli-ai-raises-30-million-to-automate-calls-and-office-work-for-contractors) | 1 | 1 | 3 | 完整转述 Fortune 2026-10-28 对 AJ Jain 与 Marcelle Flowers 的专访细节。 | [查看档案](labs/Superpower%20Daily.md) |
| Tech Bytes | [News Media](https://techbytes.app/) | [From dishes to diapers: Seattle home-help sta…](https://techbytes.app/posts/from-dishes-to-diapers-seattle-home-help-startup-rosie-raises/) | 1 | 1 | 3 | 转载 GeekWire 2026-10-21 对 Rosie CEO Mitra Raman 深度专访的科技资讯站。 | [查看档案](labs/Tech%20Bytes.md) |
| TechCrunch | [News Media](https://techcrunch.com/) | [Jeff Bezos’s Prometheus raises \$12B to build …](https://techcrunch.com/2026/06/11/jeff-bezoss-prometheus-raises-12b-to-build-an-artificial-general-engineer-for-the-physical-world/) | 1 | 1 | 3 | 报道并交叉核实 Prometheus \$6.2B 初始轮次、\$12B B 轮（\$41B 估值）及参投金融机构。 | [查看档案](labs/TechCrunch.md) |
| Tectonic Defense | [News Media](https://www.tectonicdefense.com/) | [Arda Emerges from Stealth with \$232M for Auto…](https://www.tectonicdefense.com/arda-emerges-from-stealth-with-232m-for-automated-manufacturing/) | 1 | 1 | 3 | 报道美国防务工业软件、ArsenalOS 与制造自动化融资的一手行业媒体。 | [查看档案](labs/Tectonic%20Defense.md) |
| The Market Reporter | [News Media](https://www.themarketreporter.co.uk/) | [Bezos explores \$100 billion AI-driven manufac…](https://www.themarketreporter.co.uk/companies/news/1089242/bezos-explores-100-billion-ai-driven-manufacturing-fund-wsj-reports-1089242.html) | 1 | 1 | 3 | 留存《华尔街日报》关于 Jeff Bezos 探索设立 \$100B 制造业转型收购基金的公开报道摘要。 | [查看档案](labs/The%20Market%20Reporter.md) |
| UploadVR | [News Media](https://www.uploadvr.com/) | [John Carmack Reminds Microsoft He'll Guarante…](https://www.uploadvr.com/john-carmack-reminds-microsoft-hell-guarantee-1-million-to-bring-team-beefs-ports-to-vr/) | 1 | 1 | 2 | 报道并存档 John Carmack 2025-02 与 2026-07 两度为 Team Beef VR 移植提出 \$1M 担保的推文原… | [查看档案](labs/UploadVR.md) |

arXiv作者索引仅用于按署名检索论文，不能证明同名作者的账号身份。
