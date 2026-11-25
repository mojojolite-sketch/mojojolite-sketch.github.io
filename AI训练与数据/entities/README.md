# AI训练与数据 · 主体档案库（Entities）

按「个人 / 公司 / 基金 / 机构」四类主体聚合本赛道收录的微信文章、一手论文/报告（含 NotebookLM 与 Google Drive 归档）、用户追问及待核查缺口。账号、作者与机构身份在底层 `registry.sqlite3` 中严格分开。

[返回赛道总览](../赛道总览.md) · [单篇导读索引](../blogs/README.md) · [交互式逻辑演变图谱](https://mojojolite-sketch.github.io/AI%E8%AE%AD%E7%BB%83%E4%B8%8E%E6%95%B0%E6%8D%AE/index.html)

| 主体分类 | 主体数量 | 覆盖一手材料数 | 关联文章数 | 说明 |
| --- | --- | --- | --- | --- |
| [👤 个人与学者 (People)](#people) | 21 | 15 | 11 | 学者、创始人、工程师与独立研究者档案；同名 arXiv 作者索引仅作论文署名聚合，不自动合并社交账号身份。 |
| [🏢 公司与产业主体 (Companies)](#companies) | 16 | 21 | 10 | 机器人本体、模型算法、传感器、自动化与算力基础设施公司档案。 |
| [💰 基金与投资机构 (Funds)](#funds) | 2 | 2 | 2 | 风险投资机构、产业基金与二级市场投资载体档案。 |
| [🏛️ 实验室、高校与机构平台 (Labs & Institutions)](#labs) | 10 | 8 | 6 | 高校实验室、企业研究院、开源合作组织、政府与行业研究机构档案。 |

## ⚠️ 未分组待审（Unassigned Audit Bucket）

新入口先显式挂起，必须先核实母体/平台关系并写入 `state/publisher_groups.json` 后移入正式组，不得凭名称猜测合并。

| 主体名称 | 平台与入口 | 档案入口 |
| --- | --- | --- |
| a16z YouTube | [YouTube](https://www.youtube.com/@a16z) | [查看档案](companies/a16z%20YouTube.md) |
| Baseten | [GitHub](https://github.com/basetenlabs) | [查看档案](companies/Baseten.md) |
| Baseten (X) | [X](https://x.com/baseten) | [查看档案](companies/Baseten%20%28X%29.md) |
| Charlie O'Neill (arXiv) | [arXiv](https://arxiv.org/search/?query=Charles+O%27Neill&searchtype=author) | [查看档案](people/Charlie%20O%27Neill%20%28arXiv%29.md) |
| Ezra Erives | [arXiv](https://arxiv.org/search/?searchtype=author&query=Erives%2C+Ezra) | [查看档案](people/Ezra%20Erives.md) |
| Jonas Mueller | [Hugging Face](https://huggingface.co/jonasmueller) | [查看档案](companies/Jonas%20Mueller.md) |
| Peter Holderrieth | [arXiv](https://arxiv.org/search/?searchtype=author&query=Holderrieth%2C+Peter) | [查看档案](people/Peter%20Holderrieth.md) |
| Subham Sekhar Sahoo | [arXiv](https://arxiv.org/search/?searchtype=author&query=Sahoo%2C+Subham+Sekhar) | [查看档案](people/Subham%20Sekhar%20Sahoo.md) |
| Substrate Magazine (Cat Tang) | [Substack](https://read.substratemag.com/) | [查看档案](companies/Substrate%20Magazine%20%28Cat%20Tang%29.md) |
| Substrate Magazine (Cat Tang) YouTube | [YouTube](https://www.youtube.com/@substratemag) | [查看档案](companies/Substrate%20Magazine%20%28Cat%20Tang%29%20YouTube.md) |

<a id="people"></a>
## 👤 个人与学者 (People)

学者、创始人、工程师与独立研究者档案；同名 arXiv 作者索引仅作论文署名聚合，不自动合并社交账号身份。

| 主体名称 | 平台与入口 | 关注来源 | 收录文章 | 一手材料 | 问题/缺口 | 核心定位与说明 | 档案入口 |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Bertie Vidgen | [arXiv Author Index](https://arxiv.org/search/?searchtype=author&query=Vidgen%2C+Bertie) | [OWE-Bench: A long-horizon benchmark for measu…](https://arxiv.org/abs/2611.30017v1) | 1 | 1 | 0 | — | [查看档案](people/Bertie%20Vidgen.md) |
| Charlie O'Neill | [Personal Website](https://charlesponeill.com/)、[GitHub](https://github.com/charlieoneill11) | [Trying to actually define continual learning](https://charlesponeill.com/posts/defining-continual-learning/) | 1 | 1 | 2 | 前 Parsed 联合创始人兼 CTO，牛津大学机器学习博士退学生（曾师从 Jakob Foerster）。 公开研究代码与实验仓库。 | [查看档案](people/Charlie%20O%27Neill.md) |
| Charlie O'Neill (arXiv) | [arXiv](https://arxiv.org/search/?query=Charles+O%27Neill&searchtype=author) | [Trying to actually define continual learning](https://charlesponeill.com/posts/defining-continual-learning/) +2 | 1 | 3 | 2 | Base Labs / Parsed KV Cache 压缩核心预印本。 | [查看档案](people/Charlie%20O%27Neill%20%28arXiv%29.md) |
| Charlie O'Neill (X) | [X](https://x.com/oneill_c) | [Trying to actually define continual learning](https://charlesponeill.com/posts/defining-continual-learning/) | 1 | 1 | 2 | 公开发表开源模型经济性、RL 与持续学习观点。 | [查看档案](people/Charlie%20O%27Neill%20%28X%29.md) |
| Christina Qi | [Official Website](https://www.christinaqi.com/)、[X](https://x.com/christinaqi) | [Databento raises \$100M Series C at a \$1.1B va…](https://databento.com/blog/databento-raises-100m-series-c-at-a-1-1b-valuation) | 1 | 1 | 3 | Databento 联合创始人兼 CEO（MIT 本科期间曾联合创立高频对冲基金 Domeyard LP，日均交易额峰值约 70 亿美元）。… | [查看档案](people/Christina%20Qi.md) |
| Dwarkesh Patel | [web\_search\_only](https://www.dwarkesh.com/)、[youtube](https://www.youtube.com/@DwarkeshPatel) | [The avalanche that hit math is coming for AI …](https://www.dwarkesh.com/p/the-avalanche-that-hit-math-is-coming-for-ai-development) +1 | 2 | 2 | 3 | 同主体视频播客分发主入口 | [查看档案](people/Dwarkesh%20Patel.md) |
| Edward Hu | [arXiv Author Index](https://arxiv.org/search/?searchtype=author&query=Hu%2C+Edward) | [OWE-Bench: A long-horizon benchmark for measu…](https://arxiv.org/abs/2611.30017v1) | 1 | 1 | 0 | — | [查看档案](people/Edward%20Hu.md) |
| Ezra Erives | [arXiv](https://arxiv.org/search/?searchtype=author&query=Erives%2C+Ezra) | [An Introduction to Flow Matching and Diffusio…](https://arxiv.org/abs/2506.02070) | 1 | 1 | 2 | MIT 6.S184 Flow Matching and Diffusion Models 讲义共同作者。 | [查看档案](people/Ezra%20Erives.md) |
| Jacob Cole | [arXiv Author Index](https://arxiv.org/search/?searchtype=author&query=Cole%2C+Jacob) | [OWE-Bench: A long-horizon benchmark for measu…](https://arxiv.org/abs/2611.30017v1) | 1 | 1 | 0 | — | [查看档案](people/Jacob%20Cole.md) |
| Martin Dimakis | [arXiv Author Index](https://arxiv.org/search/?searchtype=author&query=Dimakis%2C+Martin) | [OWE-Bench: A long-horizon benchmark for measu…](https://arxiv.org/abs/2611.30017v1) | 1 | 1 | 0 | — | [查看档案](people/Martin%20Dimakis.md) |
| Nicolas Dufour | [arXiv](https://arxiv.org/search/cs?searchtype=author&query=Dufour%2C+N) | [Proving and Improving the Platonic Representa…](https://arxiv.org/abs/2610.39302) | 1 | 1 | 3 | • 生成模型与计算机视觉研究者（巴黎高科桥路学院 ENPC / Inria）。 • 针对本论文指出Recap-DataComp-1B依赖LL… | [查看档案](people/Nicolas%20Dufour.md) |
| Percy Liang | [arxiv](https://arxiv.org/search/?searchtype=author&query=Liang%2C+Percy) | [Rewriting Scaling Laws for Synthetic Data wit…](https://arxiv.org/abs/2610.31867) | 1 | 1 | 2 | Stanford University / CRFM（arXiv 作者索引） | [查看档案](people/Percy%20Liang.md) |
| Peter Holderrieth | [arXiv](https://arxiv.org/search/?searchtype=author&query=Holderrieth%2C+Peter) | [An Introduction to Flow Matching and Diffusio…](https://arxiv.org/abs/2506.02070) +1 | 1 | 2 | 2 | MIT CSAIL 研究者，MIT 6.S184 课程讲义与 Generator Matching 第一作者。 | [查看档案](people/Peter%20Holderrieth.md) |
| Phillip Isola | [个人学术主页](https://web.mit.edu/phillipi/) | [Proving and Improving the Platonic Representa…](https://arxiv.org/abs/2610.39302) | 1 | 1 | 3 | • MIT EECS副教授，计算机视觉与表征学习知名学者。 • 2024年提出柏拉图表征假说（PRH），引发跨模态表征收敛广泛讨论。 | [查看档案](people/Phillip%20Isola.md) |
| Randall Balestriero | [个人学术主页](https://randallbalestriero.github.io/) | [Proving and Improving the Platonic Representa…](https://arxiv.org/abs/2610.39302) | 1 | 1 | 3 | • 布朗大学计算机科学系助理教授，GalilAI实验室负责人。 • 前Meta FAIR博士后，AMI Labs核心合作学者。 • 主攻自监… | [查看档案](people/Randall%20Balestriero.md) |
| Ronak Malde | [arXiv Author Index](https://arxiv.org/search/?searchtype=author&query=Malde%2C+Ronak) | [Trajectory 获 Sequoia Capital 领投、NVIDIA 与 Bess…](https://www.sequoiacap.com/companies/trajectory/) | 1 | 1 | 1 | — | [查看档案](people/Ronak%20Malde.md) |
| Subham Sekhar Sahoo | [arXiv](https://arxiv.org/search/?searchtype=author&query=Sahoo%2C+Subham+Sekhar) | [Simple and Effective Masked Diffusion Languag…](https://arxiv.org/abs/2406.07524) | 1 | 1 | 2 | Simple and Effective Masked Diffusion Language Models (MDLM) 第一作者。 | [查看档案](people/Subham%20Sekhar%20Sahoo.md) |
| Victor Barres | [arXiv Author Index](https://arxiv.org/search/?searchtype=author&query=Barres%2C+Victor) | [OWE-Bench: A long-horizon benchmark for measu…](https://arxiv.org/abs/2611.30017v1) | 1 | 1 | 0 | — | [查看档案](people/Victor%20Barres.md) |
| Weiqi Wang | [arXiv](https://arxiv.org/search/cs?searchtype=author&query=Wang%2C+W) | [\[2609.33848\] QwenGyre: An Elastic Reinforceme…](https://arxiv.org/abs/2609.33848) | 1 | 1 | 0 | • 论文作者，聚焦弹性RL训练长时程智能体。 • arXiv仅证明同名署名，不合并社交账号。 | [查看档案](people/Weiqi%20Wang.md) |
| Xingang Guo | [GitHub](https://github.com/xingang2) | [Humanity's Sixth Sense (HSS): Benchmarking In…](https://arxiv.org/abs/2610.08966) | 1 | 1 | 2 | Scale AI 研究员，Humanity's Sixth Sense (HSS) 共同第一作者。 | [查看档案](people/Xingang%20Guo.md) |
| Yann LeCun (@ylecun) | [X](https://x.com/ylecun) | [Proving and Improving the Platonic Representa…](https://arxiv.org/abs/2610.39302) | 1 | 1 | 3 | • 2018年图灵奖得主，NYU教授，前Meta首席AI科学家。 • 巴黎世界模型独角兽AMI Labs联合创始人兼执行董事长（种子轮融资1… | [查看档案](people/Yann%20LeCun%20%28%40ylecun%29.md) |

<a id="companies"></a>
## 🏢 公司与产业主体 (Companies)

机器人本体、模型算法、传感器、自动化与算力基础设施公司档案。

| 主体名称 | 平台与入口 | 关注来源 | 收录文章 | 一手材料 | 问题/缺口 | 核心定位与说明 | 档案入口 |
| --- | --- | --- | --- | --- | --- | --- | --- |
| a16z YouTube | [YouTube](https://www.youtube.com/@a16z) | [OpenAI’s Mark Chen: The Future Is Models Alig…](https://www.youtube.com/shorts/5OszlMNUZD0) | 1 | 1 | 1 | EP1256 同步视频渠道。 | [查看档案](companies/a16z%20YouTube.md) |
| Baseten | [Official Website](https://www.baseten.co/)、[GitHub](https://github.com/basetenlabs) | [The Michael Scott Paper Company of AI](https://www.baseten.co/blog/the-michael-scott-paper-company-of-ai/) +1 | 1 | 2 | 2 | 推理与训练云基础设施主体。 开源 Truss 等模型打包与推理工具链。 | [查看档案](companies/Baseten.md) |
| Baseten (X) | [X](https://x.com/baseten) | [The Michael Scott Paper Company of AI](https://www.baseten.co/blog/the-michael-scott-paper-company-of-ai/) | 1 | 1 | 2 | 发布推理引擎、RL 训练及开放模型基准动态。 | [查看档案](companies/Baseten%20%28X%29.md) |
| Databento | [Official Website](https://databento.com/)、[GitHub](https://github.com/databento) | [Databento raises \$100M Series C at a \$1.1B va…](https://databento.com/blog/databento-raises-100m-series-c-at-a-1-1b-valuation) +5 | 1 | 6 | 3 | 金融与 AI 基础设施实时及历史市场数据平台，在 Equinix NY4/FR2、CyrusOne Aurora 自建共置抓包节点，提供零加… | [查看档案](companies/Databento.md) |
| Elorian | [机构官网](https://elorian.ai/) | [Humanity's Sixth Sense (HSS): Benchmarking In…](https://arxiv.org/abs/2610.08966) | 1 | 1 | 2 | Palo Alto 原生视觉推理 AI 实验室，由前 Apple AFM Multimodal 负责人 Yinfei Yang、前 xAI … | [查看档案](companies/Elorian.md) |
| Generalist AI | [Official Website](https://generalistai.com/) | [Generalist AI GEN-1.5 One-Shot Physical Promp…](https://generalistai.com/blog/gen-1-5) | 1 | 1 | 1 | — | [查看档案](companies/Generalist%20AI.md) |
| Handshake AI | [Official Website](https://joinhandshake.com/) | [What Frontier Labs Buy: A Data Deep Dive with…](https://latent.space/p/handshake/) +2 | 1 | 3 | 2 | 涵盖 9 个行业与 20 余种金融分析方法。 | [查看档案](companies/Handshake%20AI.md) |
| Isomorphic Labs | [website](https://www.isomorphiclabs.com/) | [Powering AI-Driven Drug Discovery with Presid…](https://www.youtube.com/watch?v=IiKf3BgBezE) | 1 | 1 | 2 | 受访者 Max Jaderberg 担任总裁的药物设计引擎主体 | [查看档案](companies/Isomorphic%20Labs.md) |
| Jonas Mueller | [Hugging Face](https://huggingface.co/jonasmueller) | [VIALS: A Benchmark for Visual Interpretation …](https://arxiv.org/abs/2608.21357) | 1 | 1 | 2 | Handshake AI 前沿评测负责人，AutoML 与数据策展研究者。 | [查看档案](companies/Jonas%20Mueller.md) |
| Mercor | [Official Site](https://www.mercor.com/research/) | [A benchmark map of the US economy \| Mercor](https://www.mercor.com/research/labor-index/benchmark-map/) +1 | 2 | 2 | 0 | — | [查看档案](companies/Mercor.md) |
| OpenAI | [Official Website](https://openai.com/) | [Chain of Thought Monitorability: A New and Fr…](https://arxiv.org/abs/2507.11473) | 1 | 1 | 1 | 与波士顿儿童医院及哈佛大学联合开展罕见病研究 | [查看档案](companies/OpenAI.md) |
| Scale AI Labs | [机构官网](https://labs.scale.com/)、[Hugging Face](https://huggingface.co/ScaleAI) | [Humanity's Sixth Sense (HSS): Benchmarking In…](https://arxiv.org/abs/2610.08966) | 1 | 1 | 2 | Scale AI 旗下前沿评测与领域安全研究机构（SEAL），联合顶尖医学院发布 CliniCARE-Bench（arXiv:2608.07… | [查看档案](companies/Scale%20AI%20Labs.md) |
| Skild AI | [Official Website](https://www.skild.ai/) | [Generalist AI GEN-1.5 One-Shot Physical Promp…](https://generalistai.com/blog/gen-1-5) | 1 | 1 | 1 | — | [查看档案](companies/Skild%20AI.md) |
| Substrate Magazine (Cat Tang) | [Substack](https://read.substratemag.com/) | [Open Source AI with Baseten's Co-Head of Rese…](https://read.substratemag.com/p/open-source-ai-with-basetens-co-head-4a9306ca) | 1 | 1 | 2 | 承载一手长篇文字实录与音频节目。 | [查看档案](companies/Substrate%20Magazine%20%28Cat%20Tang%29.md) |
| Substrate Magazine (Cat Tang) YouTube | [YouTube](https://www.youtube.com/@substratemag) | [Open Source AI with Baseten's Co-Head of Rese…](https://read.substratemag.com/p/open-source-ai-with-basetens-co-head-4a9306ca) | 1 | 1 | 2 | 对应库内既有主体档案 Substrate Magazine（Cat Tang）登记之 YouTube 入口。 | [查看档案](companies/Substrate%20Magazine%20%28Cat%20Tang%29%20YouTube.md) |
| Trajectory | [Official Website](https://trajectory.ai/) | [Trajectory 获 Sequoia Capital 领投、NVIDIA 与 Bess…](https://www.sequoiacap.com/companies/trajectory/) | 1 | 1 | 1 | — | [查看档案](companies/Trajectory.md) |

<a id="funds"></a>
## 💰 基金与投资机构 (Funds)

风险投资机构、产业基金与二级市场投资载体档案。

| 主体名称 | 平台与入口 | 关注来源 | 收录文章 | 一手材料 | 问题/缺口 | 核心定位与说明 | 档案入口 |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Fifth Down Capital | [Official Website](https://fifthdown.com/) | [Databento raises \$100M Series C at a \$1.1B va…](https://databento.com/blog/databento-raises-100m-series-c-at-a-1-1b-valuation) | 1 | 1 | 3 | 由 Andrew Spellman 创立的投资机构，Pre-revenue 阶段即投资 Databento 并领投其 2026 年 11 月… | [查看档案](funds/Fifth%20Down%20Capital.md) |
| Sequoia Capital | [Official Website](https://www.sequoiacap.com/) | [Trajectory 获 Sequoia Capital 领投、NVIDIA 与 Bess…](https://www.sequoiacap.com/companies/trajectory/) | 1 | 1 | 1 | — | [查看档案](funds/Sequoia%20Capital.md) |

<a id="labs"></a>
## 🏛️ 实验室、高校与机构平台 (Labs & Institutions)

高校实验室、企业研究院、开源合作组织、政府与行业研究机构档案。

| 主体名称 | 平台与入口 | 关注来源 | 收录文章 | 一手材料 | 问题/缺口 | 核心定位与说明 | 档案入口 |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Brown University Computer Science | [机构官网](https://cs.brown.edu/) | [Proving and Improving the Platonic Representa…](https://arxiv.org/abs/2610.39302) | 1 | 1 | 3 | • 美国常春藤盟校布朗大学计算机科学系。 • 在自监督表征学习数学理论、计算机视觉与机器人领域拥有深厚积累。 | [查看档案](labs/Brown%20University%20Computer%20Science.md) |
| GalilAI Group | [GitHub](https://github.com/galilai-group) | [Proving and Improving the Platonic Representa…](https://arxiv.org/abs/2610.39302) | 1 | 1 | 3 | • 布朗大学Randall Balestriero团队官方GitHub开源组织。 • 托管prh-proof（柏拉图表征定理证明与345组实… | [查看档案](labs/GalilAI%20Group.md) |
| Google DeepMind | [Official](https://deepmind.google/) | [Stop Regressing: Training Value Functions via…](https://arxiv.org/abs/2403.03950v1) | 1 | 1 | 0 | Google DeepMind Robotics 团队 | [查看档案](labs/Google%20DeepMind.md) |
| Handshake-AI-Research | [GitHub](https://github.com/Handshake-AI-Research) | [What Frontier Labs Buy: A Data Deep Dive with…](https://latent.space/p/handshake/) +1 | 1 | 2 | 2 | 含 VIALS 开源仓库。 | [查看档案](labs/Handshake-AI-Research.md) |
| Latent Space | [Official Website](https://latent.space/)、[YouTube](https://www.youtube.com/@LatentSpacePod) | [What Frontier Labs Buy: A Data Deep Dive with…](https://latent.space/p/handshake/) +1 | 1 | 2 | 2 | 由 Shawn Wang (swyx) 与 Alessio Fanelli 联合创立的 AI 工程师媒体与播客，官方 Firehose RS… | [查看档案](labs/Latent%20Space.md) |
| Latent Space (X) | [X](https://x.com/latentspacepod) | [What Frontier Labs Buy: A Data Deep Dive with…](https://latent.space/p/handshake/) | 1 | 1 | 2 | 播客更新、Newsletter 与 AI Engineer 大会官方社媒入口。 | [查看档案](labs/Latent%20Space%20%28X%29.md) |
| No Priors | [youtube](https://www.youtube.com/@NoPriorsPodcast) | [Powering AI-Driven Drug Discovery with Presid…](https://www.youtube.com/watch?v=IiKf3BgBezE) | 1 | 1 | 2 | Sarah Guo 与 Elad Gil 联合主持的 AI 播客主发布频道 | [查看档案](labs/No%20Priors.md) |
| NYU Courant Institute | [机构官网](https://cims.nyu.edu/) | [Proving and Improving the Platonic Representa…](https://arxiv.org/abs/2610.39302) | 1 | 1 | 3 | • 纽约大学库朗数学科学研究所（Courant Institute of Mathematical Sciences）。 • Yann Le… | [查看档案](labs/NYU%20Courant%20Institute.md) |
| TechCrunch | [Tech Media](https://techcrunch.com/) | [Trajectory raises \$45M to make AI model train…](https://techcrunch.com/2026/11/02/trajectory-raises-45m-to-make-ai-model-training-accessible-to-nontechnical-experts) | 1 | 1 | 3 | TechCrunch 科技与一级市场报道媒体 | [查看档案](labs/TechCrunch.md) |
| UC Santa Cruz | [高校官网](https://www.ucsc.edu/) | [Humanity's Sixth Sense (HSS): Benchmarking In…](https://arxiv.org/abs/2610.08966) | 1 | 1 | 2 | 加州大学圣克鲁兹分校（University of California, Santa Cruz），多模态与视觉推理合作研究高校。 | [查看档案](labs/UC%20Santa%20Cruz.md) |


待补账号入口：Mercor (OWE-Bench · arXiv:2611.30017v1)。

arXiv作者索引仅用于按署名检索论文，不能证明同名作者的账号身份。
