# Cognition

[返回主体档案库](../README.md) · [返回赛道总览](../../赛道总览.md) · [单篇导读索引](../../blogs/README.md)

- 主体类别：🏢 公司与产业主体 (Companies)
- 核心定位与说明：Cognition 官网主入口
- 关联账号与官方入口：
  - Official Site（Cognition）：[机构／作者主页](https://cognition.com/) · 登记对象 `digest-publisher-d1d3dcb02036789ac7c697ab` — Cognition 官网主入口

<!-- curated-profile:begin -->
## 0. 核心画像与上下游供应链摘要

- 商业规模与财务边界：2026-09 E 轮超 20 亿美元、估值 480 亿美元，2026-09-25 披露 ARR 破 10 亿美元（未审计），2026-11-20 彭博报道洽谈约 750 亿美元估值；据 The Information 报道（经 MLQ.ai 摘要），企业业务毛利率近 50% 但剔除了自研模型训练成本，年付数亿美元租用 NVIDIA 集群、2026 年预计烧钱约 8 亿美元且单一大客户占约 10%。
- 上游算力与芯片分层：训练与常规推理依托 CoreWeave（9 个月内扩至千卡级，首个生产级 NVIDIA Vera Rubin NVL72 客户，较 GB200 SWE-2 推理吞吐 +4.8x、RL 输出 +3.8x）及 Nebius（2026Q3 股东信披露合作首批规模化 Vera Rubin 集群）；低延迟心流级检索与快编码路由至 Cerebras 晶圆级芯片（SWE-grep-mini >2,800 tok/s、SWE-1.5/1.6 Fast 950、SWE-1.7 1,000、SWE-2.1 Ultrafast 600 tok/s，标价 \$5/\$25/Mtok 为标准版 2.5 倍）；Fireworks AI 承担 SWE-1.6 免费版与跨洲 RL 采样。
- 基座模型与后训练生态：不从零预训练万亿基模，旗舰 SWE-1.7 与 SWE-2/2.1 直接在 Moonshot AI Kimi K2.7 与 Kimi K3 (2.8T MoE) 上纯 RL 后训练，融入 NVFP4/FP8 QAT、top-p sampling replay、DSpark 在线投机解码及帕累托斜率代价惩罚；SWE-2 Flash 切换为 Thinking Machines Lab Inkling-Small (276B-A12B) + 万亿级 Mid-training 打造全美供应链；SWE-check 由 Cognition 与 Applied Compute 联合 RL（2026-11-18 Palo Alto Networks 宣布 45 亿美元收购 Applied Compute）。
- 云部署、合规与企业替换案例：以 Devin Fusion（Lead Claude/GPT + Sidekick SWE-2 双持久上下文）控本降返工；依托 AWS SCA / Single-Tenant VPC / PrivateLink、Devin Outposts（K8s/Modal/OpenShell/Daytona/E2B/Cloudflare）、AWS GovCloud + Palantir FedStart（FedRAMP High / IL4-6）及 Cognizant、LTM、Infosys、Ahead 等 SI 渠道交付花旗（1.4 万工程师降外部供应商支出 30%）、Itaú（75% 团队、.NET→Java 6x、漏洞自动修复 ~70%）、Nubank（600 万行 ETL 省成本 >20x）、Comarch（1,000 万行 Clarion ERP 5 年→18 个月）、Wayfair（1,600+ 工程师合 4 万+ PR）、Ramp（周合 80 PR、月省 1 万+ 小时）、Odyssey Logistics（净降本 37%）、Rohlik（90% 产码）、Tavrn（HIPAA 下 8 人顶 50 人）与 Eight Sleep（DANA）。
<!-- curated-profile:end -->

## 1. 核心研究问题与待核查争议（Questions & Open Debates）

### 🔍 待核查缺口与证据边界（Open Gaps）

- `unavailable`：2026-11-20 Bloomberg 关于 Cognition 正洽谈以约 750 亿美元估值融资至少 20 亿美元的原始报道，以及 The Information 关于企业毛利率近 50%（剔除模型训练成本）、数亿美元 NVIDIA 集群租赁与约 8 亿美元年现金消耗、单一客户占约 10% 收入的原文受付费墙限制未能直采，当前以 Reuters/TradingView 通讯社标题与 MLQ.ai 摘要交叉核对。 [线索](https://mlq.ai/news/cognition-is-in-talks-to-raise-at-a-75-billion-valuation-two-months-after-its-48-billion-round/)（关联：[《快速冲击 750 亿美元估值，Cognition凭什么？》](../../blogs/%E5%BF%AB%E9%80%9F%E5%86%B2%E5%87%BB%20750%20%E4%BA%BF%E7%BE%8E%E5%85%83%E4%BC%B0%E5%80%BC%EF%BC%8CCognition%E5%87%AD%E4%BB%80%E4%B9%88%EF%BC%9F.md)）
- `not_disclosed`：Cognition 未公开经审计 GAAP 收入、完整损益表、DANA 数据分析与非工程用例的独立 ARR 拆分，亦未官方披露 2026 年底超越 20 亿美元 ARR 的书面指引（The Information 对年底运行率的市场估算口径差异极大）。 [线索](https://cognition.com/blog/series-e)（关联：[《快速冲击 750 亿美元估值，Cognition凭什么？》](../../blogs/%E5%BF%AB%E9%80%9F%E5%86%B2%E5%87%BB%20750%20%E4%BA%BF%E7%BE%8E%E5%85%83%E4%BC%B0%E5%80%BC%EF%BC%8CCognition%E5%87%AD%E4%BB%80%E4%B9%88%EF%BC%9F.md)）
- `pending_verification`：触发微信稿提及的「2026 年初披露 ARR 1 亿美元」「Rohlik 于 2026-04-24 披露前一个月 371 名员工发起 1,500 次数据分析会话」「2025 年 12 月开放 DANA」「美国劳工统计局 2025 年 5 月编程岗位约 3,000 亿美元 vs 管理商业金融岗位约 2.6 万亿美元年工资总额」未在本次抓取的 Cognition 客户页直接列示，待对照 2026-04 原始发布及 BLS OES 统计表补核。 [线索](https://devin.ai/customers/rohlikgroup)（关联：[《快速冲击 750 亿美元估值，Cognition凭什么？》](../../blogs/%E5%BF%AB%E9%80%9F%E5%86%B2%E5%87%BB%20750%20%E4%BA%BF%E7%BE%8E%E5%85%83%E4%BC%B0%E5%80%BC%EF%BC%8CCognition%E5%87%AD%E4%BB%80%E4%B9%88%EF%BC%9F.md)）
- `not_disclosed`：Cognition 未披露 Devin Review「平均每个 PR 检出 2 个缺陷且约 58% 为严重缺陷」背后的 PR 抽样总量（分母）、仓库覆盖分布及多轮生成器-验证器对抗循环增加的单任务耗时与推理成本；亦未披露 SWE-1.5 / SWE-1.6 与 Sonnet 4.5 / Opus-4.5 搭配 Smart Friend 时的具体基准得分差值。 [线索](https://cognition.com/blog/multi-agents-working)（关联：[《Multi-Agents: What's Actually Working》](../../blogs/Multi-Agents_%20What%27s%20Actually%20Working.md)）
- `unavailable`：文中引用的 Anthropic 245 页《Claude Mythos Preview System Card》（2026-04-07）因 PDF 体积较大未做全篇逐页解析，文中涉及 Mythos 级模型成本上升趋势的论述按两家公司官方公告摘要核对。 [线索](https://www-cdn.anthropic.com/08ab9158070959f88f296514c21b7facce6f52bc.pdf)（关联：[《Multi-Agents: What's Actually Working》](../../blogs/Multi-Agents_%20What%27s%20Actually%20Working.md)）
- `not_disclosed`：Cognition 未披露文中内部微调上下文压缩小模型的参数规模、训练语料配比与压缩延迟，亦未提供并行多代理对比单线程代理在生产任务上的定量失败率统计（文中 Flappy Bird 克隆与 Edit Apply Models 案例均为架构推演说明）。 [线索](https://cognition.com/blog/dont-build-multi-agents)（关联：[《Don’t Build Multi-Agents》](../../blogs/Don%E2%80%99t%20Build%20Multi-Agents.md)）

- [《快速冲击 750 亿美元估值，Cognition凭什么？》](../../blogs/%E5%BF%AB%E9%80%9F%E5%86%B2%E5%87%BB%20750%20%E4%BA%BF%E7%BE%8E%E5%85%83%E4%BC%B0%E5%80%BC%EF%BC%8CCognition%E5%87%AD%E4%BB%80%E4%B9%88%EF%BC%9F.md)：已沿微信公众号「具身alpha」（2026-11-27）触发线索穿透抓取 Cognition 官方博客（Series E \$48B、\$1B ARR、Windsurf 收购、Devin Desktop、Devin Fusion、Devin 嵌套管理 / Bots、Devin Review、DeepWiki、Eight Sleep）、Devin 官方客户案例（Nubank、Wayfair、GE Aerospace、Rohlik Group、Tavrn、Linktree）、Cognizant 联合 Odyssey Logistics 新闻稿（2026-09-23）、Fortune 对 Scott Wu 专访及花旗 CEO 电话会披露（2026-11-17）、以及 MLQ.ai 对彭博 11-20 报道与 The Information 口径核查摘要。核查纠正了微信稿在年初 ARR 基数、企业毛利率（不含模型训练成本）与 Devin Fusion 单位成本口径上的压缩或混淆，并新建/补全 Cognition、Devin 系列产品、Windsurf 并购及客户/竞争本体边；Bloomberg 与 The Information 付费墙原文及 Rohlik 4 月单月会话细节按未获取/待核验保留缺口。
- [《Multi-Agents: What's Actually Working》](../../blogs/Multi-Agents_%20What%27s%20Actually%20Working.md)：已采集 Cognition 官方工程博客原件（2026-04-22，Walden Yan），并穿透核验文中引用的 7 篇关键一级技术文献（Cognition SWE-1.5 / SWE-1.6、Anthropic The Advisor Strategy / Multi-Agent Research System / Building a C Compiler、Cursor Scaling Agents、Chroma Context Rot，连同原文共 8/14 条技术引用完成正文取证）；Devin Review 抽样 PR 分母与 Smart Friend 内部对照得分未公开，已登记 not\_disclosed 缺口。
- [《Don’t Build Multi-Agents》](../../blogs/Don%E2%80%99t%20Build%20Multi-Agents.md)：已采集 Cognition 官方工程博客原件（2025-06-12，Walden Yan），并交叉核验 Anthropic《Building effective AI agents》（2024-12-19）、OpenAI Swarm、Microsoft AutoGen 与 MetaGPT 等引用框架背景（2/6 条重点架构文献完成正文核验）；原文未披露内部历史压缩模型的参数规模及单线程对比多代理的定量任务成功率，已登记 not\_disclosed 缺口。

## 2. 收录文章与一手材料（Ingested Articles & Primary Sources）

### [快速冲击 750 亿美元估值，Cognition凭什么？](../../blogs/%E5%BF%AB%E9%80%9F%E5%86%B2%E5%87%BB%20750%20%E4%BA%BF%E7%BE%8E%E5%85%83%E4%BC%B0%E5%80%BC%EF%BC%8CCognition%E5%87%AD%E4%BB%80%E4%B9%88%EF%BC%9F.md)

2026-11-27 · 来源：Cognition · Devin · Cognizant · Fortune · 状态：有来源缺口

[单篇导读（blogs/）](../../blogs/%E5%BF%AB%E9%80%9F%E5%86%B2%E5%87%BB%20750%20%E4%BA%BF%E7%BE%8E%E5%85%83%E4%BC%B0%E5%80%BC%EF%BC%8CCognition%E5%87%AD%E4%BB%80%E4%B9%88%EF%BC%9F.md) · [微信原件](../../../../raw/169ee4638425e463dd46fbf3e5bc96c7fd08d5a2a9db5a45df0365efb94cf58d) · 固定版本 `digest-material-169ee4638425e463dd46fbf3e5bc96c7fd08d5a2a9db5a45df0365efb94cf58d@1`

> 2026 年 11 月 20 日，彭博报道，Cognition 正洽谈以约 750 亿美元估值融资至少 20 亿美元。而仅仅两个月前，a16z、Accel 等领投的 E 轮融资超过 20 亿美元，估值 480 亿美元。

> 公司成立于 2024 年 1 月。联合创始人兼 CEO Scott Wu 曾联合创办职业社交平台 Lunchclub 并任 CTO。联合创始人兼 CTO Steven Hao 是 Scale AI 的早期工程师，联合创始人 Walden Yan 曾在早期 Cursor 做工程开发。三人都获过国际信息学奥林匹克竞赛金牌。

关联一手材料：

- Do it all with Devin: Announcing our Series E（Cognition）· [原站](https://cognition.com/blog/series-e) · [本地原件](../../../../raw/8496b2a12c36532ac0542678c6b8866283b338de321bedaf4ab09aa6d8815ea5) · 版本 `digest-material-8496b2a12c36532ac0542678c6b8866283b338de321bedaf4ab09aa6d8815ea5@1`
  > Cognition has raised over \$2B at a \$48B valuation. The round was led by new investors Andreessen Horowitz and Accel, alongside existing investors Founders Fund, General Catalyst, and Avenir. — 原文提取
- Cognition Crosses \$1B in Annualized Revenue Run Rate（Cognition）· [原站](https://cognition.com/blog/1b-run-rate) · [本地原件](../../../../raw/c9cc28868841cca5fc636cbede7b63d9424d7104963d61553e13481395d571b9) · 版本 `digest-material-c9cc28868841cca5fc636cbede7b63d9424d7104963d61553e13481395d571b9@1`
  > Today, Cognition crossed \$1B in annualized revenue run rate. — 原文提取
- Cognition’s acquisition of Windsurf（Cognition）· [原站](https://cognition.com/blog/windsurf) · [本地原件](../../../../raw/c9cdabdb5d8095218fe8bf8c16aa9a4e5218c07122fa7aff46d365bbd05c93a0) · 版本 `digest-material-c9cdabdb5d8095218fe8bf8c16aa9a4e5218c07122fa7aff46d365bbd05c93a0@1`
  > We’re excited to share that Cognition has signed a definitive agreement to acquire Windsurf, the agentic IDE. — 原文提取
- Introducing Devin Desktop（Cognition）· [原站](https://cognition.com/blog/introducing-devin-desktop) · [本地原件](../../../../raw/90faae522ee281d3ee2f3462a6a2b68c198f5bed48d90ff67c721711b1cc943c) · 版本 `digest-material-90faae522ee281d3ee2f3462a6a2b68c198f5bed48d90ff67c721711b1cc943c@1`
  > We’re excited to announce Devin Desktop - the next generation of Windsurf. — 原文提取
- Devin Fusion: Frontier Performance at 60% Lower Cost（Cognition）· [原站](https://cognition.com/blog/devin-fusion) · [本地原件](../../../../raw/525113bcd819cc0e62b9e241761c4323eba7f0c484ee0ed9c15f050fee93ab04) · 版本 `digest-material-525113bcd819cc0e62b9e241761c4323eba7f0c484ee0ed9c15f050fee93ab04@1`
  > It's no longer sustainable to use the most expensive models on every task. But existing tools for mixing models suck. They look nice on most benchmarks but fail to write code you'd actually merge. — 原文提取
- Devin can now Manage Devins（Cognition）· [原站](https://cognition.com/blog/devin-can-now-manage-devins) · [本地原件](../../../../raw/224ebd53c3fc5b58bf66e82ad0acb601d4560487e0a28547e0464094c0a8f7a4) · 版本 `digest-material-224ebd53c3fc5b58bf66e82ad0acb601d4560487e0a28547e0464094c0a8f7a4@1`
  > Starting today, Devin can break down large tasks and delegate them to a team of managed Devins that work in parallel. — 原文提取
- Devin Review: AI to Stop Slop（Cognition）· [原站](https://cognition.com/blog/devin-review) · [本地原件](../../../../raw/cd73f1d9b95401f1e6c702723fbeab75a4e3932b71a2de275af1710dc8cd2ade) · 版本 `digest-material-cd73f1d9b95401f1e6c702723fbeab75a4e3932b71a2de275af1710dc8cd2ade@1`
  > As coding agents proliferate, the # of PRs increases, but the quality of that code can be mixed, and the size of each PR is increasing past maintainers' ability to understand. — 原文提取
- How Eight Sleep Uses Devin as a Data Analyst（Cognition）· [原站](https://cognition.com/blog/how-eight-sleep-uses-devin-as-a-data-analyst) · [本地原件](../../../../raw/8ae8ca1808d01a47fb6549326066af6729fdc0eab87cf93752fe1944c30a52bc) · 版本 `digest-material-8ae8ca1808d01a47fb6549326066af6729fdc0eab87cf93752fe1944c30a52bc@1`
  > Building the future of sleep requires us to make data-driven product, operations, and finance decisions. But as a small team, we faced a challenge every scaling company knows well: the flood of random data asks . — 原文提取
- How Nubank refactors millions of lines of code to improve engineering efficiency with Devin（Cognition）· [原站](https://devin.ai/customers/nubank) · [本地原件](../../../../raw/749e274859bc430c2a5961bca07037926be65325db96fa37de95ee0580cf4bda) · 版本 `digest-material-749e274859bc430c2a5961bca07037926be65325db96fa37de95ee0580cf4bda@1`
  > Nubank is the largest financial technology bank in Latin America, serving over 110 million customers across Brazil, Mexico, and Colombia since its founding in 2013. — 原文提取
- How Wayfair's 1,600+ engineers went all in on cloud agents（Cognition）· [原站](https://devin.ai/customers/wayfair) · [本地原件](../../../../raw/53e459efc18780f54938a261c621f8c654d2d45460025961777475c9c06a60d5) · 版本 `digest-material-53e459efc18780f54938a261c621f8c654d2d45460025961777475c9c06a60d5@1`
  > Wayfair sells everything for the home to about 21 million active customers, with more than \$12 billion in annual revenue, a catalog of 40 million items, and a supply chain built to move large, bulky products quickly. — 原文提取
- How GE Aerospace uses Devin to invent the future of flight（Cognition）· [原站](https://devin.ai/customers/geaerospace) · [本地原件](../../../../raw/9dafa33021f2c564c24785aadc62d8c9560bf975d6fbe818c5d15b7c07b71494) · 版本 `digest-material-9dafa33021f2c564c24785aadc62d8c9560bf975d6fbe818c5d15b7c07b71494@1`
  > GE Aerospace designs, manufactures, and services jet engines and integrated systems for commercial and military aircraft, powering 3 out of every 4 commercial flights worldwide. — 原文提取
- How Rohlik Group is building the agent-driven grocery company（Cognition）· [原站](https://devin.ai/customers/rohlikgroup) · [本地原件](../../../../raw/ac52ad5fb2ccdb5e923ac1206017fb4c17308cfb237b08f81fa4215d1be65bbb) · 版本 `digest-material-ac52ad5fb2ccdb5e923ac1206017fb4c17308cfb237b08f81fa4215d1be65bbb@1`
  > Rohlik Group is an online grocery company operating in five countries, founded in the Czech Republic, that delivers a full weekly shop of 17,000 products within 60 minutes or within 15-minute delivery slots. — 原文提取
- How Tavrn multiplies output across every function inside HIPAA constraints（Cognition）· [原站](https://devin.ai/customers/tavrn) · [本地原件](../../../../raw/c3c1ec509dbfa8a6ab8fdbb9abd2c54933deb74d1b5741617e6bcf19f000da35) · 版本 `digest-material-c3c1ec509dbfa8a6ab8fdbb9abd2c54933deb74d1b5741617e6bcf19f000da35@1`
  > Tavrn builds AI-powered infrastructure for retrieving medical records across the US, serving 500+ law firms, and has raised \$21.6M since its founding in San Francisco in 2022. — 原文提取

### [Multi-Agents: What's Actually Working](../../blogs/Multi-Agents_%20What%27s%20Actually%20Working.md)

2026-04-22 · 来源：Cognition · Anthropic · Cursor (Anysphere) · Chroma · 状态：有来源缺口

[单篇导读（blogs/）](../../blogs/Multi-Agents_%20What%27s%20Actually%20Working.md) · [微信原件](../../../../raw/bde0c64655f5407495829fc48be764e3ada630afce7124b54c1000a7cad10088) · 固定版本 `digest-material-bde0c64655f5407495829fc48be764e3ada630afce7124b54c1000a7cad10088@1`

> Even when we look at Devin usage in our largest enterprises segment, the segment that has traditionally been cautious toward adopting new technologies, we see an explosion over the last 6 months (~8x).

> The practical shape is map-reduce-and-manage: a manager splits work, children execute, the manager synthesizes and reports back.

关联一手材料：

- Multi-Agents: What's Actually Working（Cognition）· [原站](https://cognition.com/blog/multi-agents-working) · [本地原件](../../../../raw/bde0c64655f5407495829fc48be764e3ada630afce7124b54c1000a7cad10088) · 版本 `digest-material-bde0c64655f5407495829fc48be764e3ada630afce7124b54c1000a7cad10088@2`
  > Even when we look at Devin usage in our largest enterprises segment, the segment that has traditionally been cautious toward adopting new technologies, we see an explosion over the last 6 months (~8x). — 原文提取
- Introducing SWE-1.5: Our Fast Agent Model（Cognition）· [原站](https://cognition.com/blog/swe-1-5) · [本地原件](../../../../raw/21ee82e005297a5a97fa3d541c7eb598e94f5619e28d8b57ebff415093205d66) · 版本 `digest-material-21ee82e005297a5a97fa3d541c7eb598e94f5619e28d8b57ebff415093205d66@1`
  > Today we’re releasing SWE-1.5, the latest in our family of models optimized for software engineering. It is a frontier-size model with hundreds of billions of parameters that achieves near-SOTA coding performance. — 原文提取
- Introducing SWE 1.6: Improving Model UX（Cognition）· [原站](https://cognition.com/blog/swe-1-6) · [本地原件](../../../../raw/d0e6181e634566dd006890f40c42d05b2f421af3b8a2b463a34b1ec321249241) · 版本 `digest-material-d0e6181e634566dd006890f40c42d05b2f421af3b8a2b463a34b1ec321249241@1`
  > We’re releasing SWE-1.6, our latest model built for software engineering agents, and we’re making it generally available in Windsurf. SWE-1.6 is optimized for both intelligence and model UX. — 原文提取

### [Don’t Build Multi-Agents](../../blogs/Don%E2%80%99t%20Build%20Multi-Agents.md)

2025-06-12 · 来源：Cognition · 状态：有来源缺口

[单篇导读（blogs/）](../../blogs/Don%E2%80%99t%20Build%20Multi-Agents.md) · [微信原件](../../../../raw/a9d5002900ea060af7ba29d9a9c4c64b0f7a70265ae49dff54c0fef4ba3bbb13) · 固定版本 `digest-material-a9d5002900ea060af7ba29d9a9c4c64b0f7a70265ae49dff54c0fef4ba3bbb13@1`

> When agents have to actually be reliable while running for long periods of time and maintain coherent conversations, there are certain things you must do to contain the potential for compounding errors.

> The actions subagent 1 took and the actions subagent 2 took were based on conflicting assumptions not prescribed upfront.

关联一手材料：

- Don’t Build Multi-Agents（Cognition）· [原站](https://cognition.com/blog/dont-build-multi-agents) · [本地原件](../../../../raw/a9d5002900ea060af7ba29d9a9c4c64b0f7a70265ae49dff54c0fef4ba3bbb13) · 版本 `digest-material-a9d5002900ea060af7ba29d9a9c4c64b0f7a70265ae49dff54c0fef4ba3bbb13@2`
  > When agents have to actually be reliable while running for long periods of time and maintain coherent conversations, there are certain things you must do to contain the potential for compounding errors. — 原文提取


## 3. 关联实体网络（Verified Entity Ontology）

- ← Cerebras Systems Inc. · 供应 / 服务（rule_verified/verified）
- → Itaú Unibanco · 供应 / 服务（rule_verified/verified）
- ← LTM · 合作 / 联合研发（rule_verified/verified）
- → Linktree · 供应 / 服务（rule_verified/verified）
- ← [Anthropic](../companies/Anthropic.md) · 供应 / 服务（rule_verified/verified）
- ← [OpenAI](../companies/OpenAI.md) · 供应 / 服务（rule_verified/verified）
- ← Applied Compute · 合作 / 联合研发（rule_verified/verified）
- ← Amazon Web Services (AWS) · 合作 / 联合研发（rule_verified/verified）
- ← Moonshot AI · 供应 / 服务（rule_verified/verified）
- ← [Modal](../companies/Modal.md) · 合作 / 联合研发（rule_verified/verified）
- ← CoreWeave · 供应 / 服务（rule_verified/verified）
- ← Walden Yan · 任职 / 隶属（rule_verified/verified）
- ← Thinking Machines Lab · 供应 / 服务（rule_verified/verified）
- → Ramp · 供应 / 服务（rule_verified/verified）
- ← Fireworks AI · 供应 / 服务（rule_verified/verified）
- ← Palantir · 合作 / 联合研发（rule_verified/verified）
- ← Nebius · 供应 / 服务（rule_verified/verified）
- ← [Google](../companies/Google.md) · 供应 / 服务（rule_verified/verified）
- → Comarch · 供应 / 服务（rule_verified/verified）
- ← [NVIDIA](../companies/NVIDIA.md) · 供应 / 服务（rule_verified/verified）
