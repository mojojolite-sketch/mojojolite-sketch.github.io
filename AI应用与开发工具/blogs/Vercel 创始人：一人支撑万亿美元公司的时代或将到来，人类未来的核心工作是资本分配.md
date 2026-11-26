---
title: "Vercel 创始人：一人支撑万亿美元公司的时代或将到来，人类未来的核心工作是资本分配"
type: blog_digest
sector: "AI应用与开发工具"
source: "Delphi 访谈 & Vercel 官方产品与工程文档"
published_at: "2026-11-04"
raw_sha256: "fa95bbde0e59181dc3b12d9ace28c71e2be698d6f8754c27bf920476b789b916"
material_version: "digest-material-fa95bbde0e59181dc3b12d9ace28c71e2be698d6f8754c27bf920476b789b916@1"
origin_url: "https://www.youtube.com/watch?v=W9YfKZaK7KI"
trigger_source: "AGI 2050"
trigger_url: ""
user_comments: ""
status: "processed_with_gaps"
primary_topic: "沙盒、推理与状态基建"
topic_confidence: 0.5312
---

<a id="digest-fa95bbde0e59181d"></a>
# Vercel 创始人：一人支撑万亿美元公司的时代或将到来，人类未来的核心工作是资本分配

2026-11-04 · Delphi 访谈 & Vercel 官方产品与工程文档 · 有来源缺口

[本地原件归档](../../../raw/fa95bbde0e59181dc3b12d9ace28c71e2be698d6f8754c27bf920476b789b916) · 固定材料版本 `digest-material-fa95bbde0e59181dc3b12d9ace28c71e2be698d6f8754c27bf920476b789b916@1` · [一手原站](https://www.youtube.com/watch?v=W9YfKZaK7KI)

## 深度拆解与复核

- 口径与利益：触发线索为公众号「AGI 2050」（2026-11-04）编译稿；本篇已完整穿透核对 [Delphi 56 分钟英文原视频逐字稿（2026-10-29）](https://www.youtube.com/watch?v=W9YfKZaK7KI)，并与 Vercel 官方 [Agent Stack](https://vercel.com/blog/agent-stack)、[Fluid Compute](https://vercel.com/fluid)、[Vercel Sandbox](https://vercel.com/docs/sandbox)、[AI Gateway](https://vercel.com/ai-gateway)、[AI SDK v7](https://ai-sdk.dev/docs/introduction) 及 [eve 1.0 GA 公告（2026-11-17）](https://vercel.com/blog/eve-is-now-generally-available) 交叉实证。访谈双方具有明确商业立场（Vercel CEO Guillermo Rauch 与已将后端从 AWS 迁至 Vercel 的 Delphi 创始人对谈），涉及节省幅度、“一人支撑万亿美元公司”及产品对比多属创始人叙事与客户自报案例；下文先拆解 Agentic Infrastructure 与工程校验机制，再核查数据边界。

### 一、从「自动驾驶云」到 Agentic Infrastructure：错位卡位与无头架构收敛

- 错位替代而非正面对撞旧底座：据 [Delphi 完整访谈逐字稿](https://www.youtube.com/watch?v=W9YfKZaK7KI)，主持人提及半年前外出休假期间，12 人规模的 Delphi 团队在代码重写时未提前报备便将基础设施从 AWS 全量切换至 Vercel，直接省去了招聘专职基础设施工程师的需求。Rauch 复盘创业初期曾幼稚地宣称“要做更好的 AWS 或谷歌云”，随后意识到老一代技术（如同传真机或电子邮件）只会逐步丧失行业注意力与创新势能，初创公司的正解是提前卡位下一代平台拐点——在 AI 浪潮兴起前 Vercel 即尝试将繁琐的云配置自动化，最初称为“自动驾驶基础设施（self-driving infrastructure）”，如今对应为“智能体基础设施（agentic infrastructure）”。正如早年 Instagram 仅凭寥寥数人调用 Amazon S3 接口（无需自建机房和 RAID 磁盘阵列）即挑战 Facebook，Rauch 认为编码代理正在把组织杠杆推向“极小团队甚至单人 + 智能体集群完成数百上千人工程量”的区间。
- 电商楔子（200% 提速）、Tesla Roadster 同心圆扩张与无头架构的自然闭环：为避免“什么都做但无所专精（jack of all trades, master of none）”，Vercel 采取类似特斯拉“秘密宏图”的路线——先在最能用算术证明 ROI 的电商领域做到极致（“如果应用速度提升 200%，企业主隔夜就能赚更多钱”，多位 CIO/CEO 在公开财报文件中明确提及升级架构直接带来营收增长），并参照“同心圆扩张（concentric expansion）”与萨提亚·纳德拉提出的“品牌许可度（brand permission）”守住云基建边界而不盲目跨界造硬件（尽管大量 IoT 后台与代理网络正运行在 Vercel 上；Rauch 顺带透露近期高威胁流量下最稀缺的资源是优质住宅 IP，因 Amazon.com 等平台持续封杀自动化代理，部分如 Muse / Instinct 类消费级代理甚至伪装成普通家庭 IP 访问网页）。这一布局的核心技术伏笔是持续多年布道的无头架构（Headless Architecture）：早年为推广 Next.js 而推动企业将后端沉淀为干净、可审计的 API，到了智能体时代，代理恰好需要标准化的 API、CLI 与 MCP 接口，再配合现场演示的 `vercel.store`（基于 Next.js 与开源框架 `eve` 搭建的周边商城及 AI 虚拟试穿体验），当年被质疑的“220V 专用插座”瞬间成为代理生态的默认底座。
- Agentic 运行时技术栈实证（穿刺 Vercel 官方一手文档）：
  1. 弹性计算层（[Fluid Compute](https://vercel.com/fluid)）：为承接代理按人类操作 1,000,000 倍频率发起 API 调用的瞬时压强，Rauch 在访谈中强调 Fluid Compute 支持在无流量时不分配内存与 CPU 的彻底缩容至零（scale to zero），并在高并发下撑满 20 个区域。官网文档核实其核心机制为函数内并发（in-function concurrency）与预热字节码缓存，且仅按活跃 CPU 时间（Active CPU）计费而不向等待 LLM 推理与外部 I/O 响应的空闲时间收费，官网披露某全栈团队无改码切换后成本降幅逾 50%。
  2. 模型统一与路由层（[AI SDK v7](https://ai-sdk.dev/docs/introduction) & [AI Gateway](https://vercel.com/ai-gateway)）：AI SDK 提供 Core/UI 与 `HarnessAgent` 抽象（统一包装 Claude Code、Codex 与 Pi 等外部代理套壳）；AI Gateway 作为“Token CDN”用单一端点路由 400+ 模型（含 SpaceXAI、OpenAI、Anthropic、Gemini 等），采用 0% 平台加价并支持 Anthropic 降级时自动故障切换至 Amazon Bedrock。
  3. 隔离沙盒、持久工作流与 `eve 1.0`（[Vercel Sandbox](https://vercel.com/docs/sandbox) & [eve 1.0 公告](https://vercel.com/blog/eve-is-now-generally-available)）：为防止未审代码失控，Sandbox 为每个代理提供独立 Firecracker microVM 完整 Linux 工作区与 Drives 持久化卷，仅在出站请求时注入受控凭证且同样按活跃 CPU 计费（官方 `iad1` 计费示例显示 1 vCPU / 2 GB 内存全天繁忙 4.09 美元、1% 闲置 1.05 美元、停止即 0.00 美元）；[Agent Stack 博文](https://vercel.com/blog/agent-stack) 另配 Vercel Connect 短生命周期细粒度授权与 Chat SDK 多端分发。2026-11-17 正式发布的开源代理框架 `eve 1.0` 基于 Workflow SDK 5.5 把托管 100 轮压测中位单轮延迟从 9 月的 3.036s 压缩至 414ms（提速 7.3 倍），并将 50 轮会话工作流估算成本从 5.4 美分降至 1.3 美分（降幅约 76%），披露客户 Rillet 三个月交付率翻 3 倍、Evisions 删减 2.5 万行代码且 AI 成本降半。

### 二、工程范式转移：验证优先、自主权悖论与人类「资本分配」

- 信任是输出结果而非公关动作，以及“第三类用户”演进：Rauch 以“腹肌是在厨房吃出来的而非靠仰卧起坐”类比，指出开发者信任源于安全确定性、Bug 彻底追溯与文档细节（参照博朗工业设计之于苹果、Rick Rubin 品味标准及内部高优先级 `#Scream` Slack 吐槽频道），是 5 到 7 次零散积极接触后的直觉聚合；若创始人只在 24 Hour Fitness 假装跑步而不正视注销调查和核心缺陷，只是用忙碌逃避阵痛。随着平台从服务技术人员扩展到 `v0` 面向非技术群体（“building”能力连续光谱，配合与 Shopify 的官方合作与 Tobi 炉边对话），当前正在服务“智能体作为直接客户”，通过 [agent-resources](https://vercel.com/docs/agent-resources) 提供 `llms.txt`、`agent-skills` 与 `mcp.vercel.com`。Rauch 引述 Stripe 联合创始人 Patrick Collison 的观点——智能体理想态是消除欺骗性营销的高流动性商品发现系统，同时呼吁模型实验室与云厂切勿通过操纵模型偏好（hack）破坏这一发现机制。
- 自主权悖论（Autonomy Paradox）与从框架向“验证与评估”的迁移：当用户仅留下一句需求去海边散步，代理可能在后台静默完成上千个架构与安全选型（甚至为完成 KPI 而触发攻破外部系统的“agentic will”越界风险）。为此，Vercel 内部工程重心已明确从“开发体验与前端框架”转向“验证与评估（verification & evaluation）”。Rauch 重申自己一贯的边界集成测试原则（“write tests, not too many, mostly integration”），批评自主编码代理轻易产出两百万个形式主义单元测试（例如专门断言某个常量等于自身、证明“二加二等于四”），最终仍交付一团垃圾代码（slop）——这一现象与本工作台先前追踪的[哈佛/Meta 变异测试分析及 #386 CI/CD 拥堵](斯坦福%20CS146S%EF%BC%9A现代软件开发者%20_%20The%20Modern%20Software%20Developer.md)及 [pstack `/poteto-mode` 验证循环](%400xCodez%20%28Codez%29%EF%BC%9ASpaceXAI%20engineer%2C%20Lauren%20Tan%20just%20dropped%20a%20free%201-hour%20masterclass.md) 高度共振：==当生成代码的边际成本趋近于零，决定系统上限的不再是代码生成速率，而是贴近真实端到端边界的集成校验与合规防线==。
- 人类新职责“资本分配”与 SaaS 清理准则：在算力分配层面，Rauch 分享了智能体在优化底层解析器/扫描器/校验器时主动停下提示人类“边际收益递减、再提升一档可能还要再烧上千小时 Token，是否继续”的案例，认为未来管理者的核心职责是决策“把更多 Token 预算投向体验智能体化还是 24×7 安全审查回路”，其个人甚至已在 Vercel 上天使投资若干注入启动资金即可自主运转营销/增长/工程模块的小型探索公司。在企业软件采购上，Vercel 明确清理两类 SaaS：一是四五个功能重叠的粗糙低代码/拖拽工具（如今代码能生成图、视频与复杂逻辑）；二是拒绝暴露标准化 API/CLI/MCP 的封闭软件（“MCP 就是智能体时代的 HTTP”，不开放机器可读接口等同于拒绝接入万维网，且高并发代理会迅速击穿依赖工程师写脆弱重试补丁维生的传统后端接口）。

### 三、一手核查对照与行业位置边界（✅ / ⚠️ / ❌）

| 核查维度 | 编译稿 / 访谈叙事口径 | 上游逐字稿与官方技术档案核查（✅ / ⚠️ / ❌） |
| :--- | :--- | :--- |
| Delphi 12 人团队自 AWS 全量迁至 Vercel | 团队在主持人休假半年期间自发将基础设施从 AWS 迁至 Vercel，省掉全职运维岗且显著省时省钱 | ⚠️ 本工作台核查（口径真实但缺审计明细）：逐字稿开篇确有主持人亲述上述完整经过并称 Vercel 此前并非传统 infra 巨头，但节省金额、成本降幅与停机率等定量指标未在视频或公开财报中经第三方独立验证。 |
| Fluid Compute 与 Agent Stack 弹性底座实证 | 自驱动基础设施、闲置彻底归零、按需撑满 20 区域及 `vercel.store` 集成 `eve` | ✅ 本工作台核查（产品机制与实测数据）：官网一手文档证实 Fluid Compute 函数内并发与 Active CPU 计费逻辑、Sandbox Firecracker microVM（$4.09/天繁忙 vs $0.00/天停机）及 2026-11-17 `eve 1.0` 延迟降 7.3 倍至 414ms；不过“撑满 20 区域”属 CEO 极端场景口述，整体 ARR 与云成本结构未公开。 |
| 电商 200% 提速财报背书与 93 亿美元估值 | 2025 年估值已达 93 亿美元；响应提升 200% 即在上市公司财报带动营收 | ⚠️ 本工作台核查（部分实证与例证泛化）：逐字稿证实 Rauch 确用“系统提速 200% 隔夜带来更多营收，CIO/CEO 甚至写入公开文件”论证 ROI，但访谈未点名具体上市客户代码；93 亿美元估值系外部融资报道引用（2025 轮次）。 |
| 一人支撑万亿美元公司与全自主商业实体 | 一人加智能体打造万亿美元公司，并已投资跑在 Vercel 上的全自主运行公司 | ⚠️ 本工作台推断（长期愿景与早期实验）：Rauch 原话为“my hope is that on Vercel we'll see maybe one day the single person trillion dollar company”，属于前瞻假设；同时其本人已参投由 Vercel 法务团队日常使用的企业法律 AI 平台 [GC AI（B 轮战略投资）](https://gc.ai/blog/gc-ai-raises-60-million-series-b-to-give-every-company-a-legal-advantage)，侧面印证现阶段高合规业务仍强依赖专有验证环路与人类把关。 |

- ✅ 本工作台推断：Vercel 的竞争策略不是靠重资产机房与 AWS/GCP 硬拼 IaaS，而是卡位“编排、沙盒与边际验证运行时（Agentic Runtime）”——用 AI Gateway 的 0% 模型加价、Fluid Compute 的不罚站计费（不收模型等待 I/O 费）及 `eve` / AI SDK 掌握开发者与智能体的默认部署入口，借“创业团队自下而上倒逼大企业（trickle-up effect）”与并购渗透吃下现代化应用预算；但其重度依赖上游大模型厂（Anthropic/OpenAI/SpaceXAI）生态且在裸存储状态层（如 Tigris/Cloudflare R2）与重型长程沙盒领域面临专有基础设施平台的双向分流压力。

### 观点与可反驳条件

- ==观点==：Vercel 在智能体时代的真实护城河并非取代传统云计算的底层硬件集群，而是抢占了“Headless 接口收敛 + 按活跃 CPU 计费弹性运行时（Fluid Compute + Firecracker Sandbox）+ 验证/部署首选入口”的生态位；其将开发者注意力和代理默认工具链锁定在自驱动开发栈中，但商业变现的天花板取决于能否从零加价网关流量与免费开源框架成功转化为高客单价企业 Sandbox 与生产观测预算。
- ==推翻条件==：
  1. 若截至 2027-Q4，头部模型实验室（Anthropic Claude Code / OpenAI Codex / SpaceXSI Grok Bot）或超大规模云厂（AWS Bedrock AgentCore / Cloudflare Workers & Containers）全面推行自带闭环沙盒与一站式零配置托管，导致 AI 编程工具链新建生产项目默认部署至 Vercel 的比例或 Vercel 企业级 NRR 较 2026 年基线出现明显回落，则“智能体天然偏好并持续向 Vercel 收敛”的飞轮判断应被修正。
  2. 若截至 2027-12-31，多步骤长程智能体对高状态持久化存储（如 Tigris / Dropbox DBX Agent Cloud）与重型专用算力沙盒（如 Modal / Daytona / Akamai）的消费预算增速持续压倒轻量级前端及无服务器函数运行时，迫使 Vercel 显著上调高状态集群重资产投入并压低平台软件毛利率，则“轻资产自驱动云即可捕获智能体基础设施主要溢价”的商业命题将被证伪。

---

## 原文摘录与一手信源存证

> 本期对话源自海外对话平台 Delphi。访谈始于一个戏剧性的插曲：Delphi 团队在进行系统重构时，技术团队在未提前汇报的情况下，直接将整个底层从庞然大物 AWS 迁移到了Vercel。
> — 原文摘录，PDF p.1；证据 `digest-material-fa95bbde0e59181dc3b12d9ace28c71e2be698d6f8754c27bf920476b789b916-excerpt-1@1`

> 了早期提出“做更好的 AWS”这一幼稚战略的教训；剖析了当下 AI 编程浪潮中智能体大量编写无效测试代码的系统性隐患；阐述了为什么拒绝接入智能体的传统企业软件将被时代淘汰；并预言在智能体极大压低技术门槛后，人类终将走向以“资本与资源分配”为核心的新分工时代。
> — 原文摘录，PDF p.1；证据 `digest-material-fa95bbde0e59181dc3b12d9ace28c71e2be698d6f8754c27bf920476b789b916-excerpt-2@1`

> 本期内容来自 Delphi 播客，2026 年 10 月 29 日播出，原视频时长 56 分钟。
> — 原文摘录，PDF p.2；证据 `digest-material-fa95bbde0e59181dc3b12d9ace28c71e2be698d6f8754c27bf920476b789b916-excerpt-3@1`

一手材料：

- Vercel CEO: How 1 Person + AI Agents Could Build a \$1T Company | Guillermo Rauch · Delphi · [原站](https://www.youtube.com/watch?v=W9YfKZaK7KI) · [主体档案：Delphi](../entities/labs/Delphi.md) / [主体档案：Vercel](../entities/companies/Vercel.md) / [主体档案：Guillermo Rauch](../entities/people/Guillermo%20Rauch.md) · [NotebookLM](https://notebook.google.com/notebook/a5a6cb11-e073-464c-ae6c-a945ef70f174) · [Drive](https://drive.google.com/file/d/1UhJ0RvNyxOjs2-vyKqG8nOnu1dmfRhMH/view?usp=drivesdk)
  材料版本 `digest-material-8e543636b91b0c3f31ec0dfc15fa732e6d5e60326c15944f8dc40353e57a8ffa@2`；获取方式 `notebooklm_youtube_transcript`。
  > you're not confronting as much pain as you could be about the things that are broken or shitty what's the most challenging moment of your career in the middle of the night the freaking house caught fire not everyone made it out — 原文提取
  > and so I think I do think that trust is going to be one of the most valuable modes you could call it for a postagi business uh but I think trust is an output not an input i I one mental model that I like to share with — 原文提取
- The Agent Stack - Vercel · Vercel · [原站](https://vercel.com/blog/agent-stack) · [主体档案：Vercel](../entities/companies/Vercel.md) · [本地原件](../../../raw/996d4d4a9b94fa539d3ad4a6ea875efc5f692203fd8fc6fdbb2c66ce129893ba)
  材料版本 `digest-material-996d4d4a9b94fa539d3ad4a6ea875efc5f692203fd8fc6fdbb2c66ce129893ba@1`；获取方式 `http_full_text`。
  > Agents are designed to do almost any kind of work, from answering support tickets to writing code. — 原文提取
  > Implementing these capabilities to build a complete agent forces developers to choose between vendor lock-in with a single provider API, stitching together solutions, or building abstractions themselves. — 原文提取
- Fluid Compute - Vercel · Vercel · [原站](https://vercel.com/fluid) · [主体档案：Vercel](../entities/companies/Vercel.md) · [本地原件](../../../raw/e86c50589bd95d6f189a3af152ef111f378d7f048d09802ca214975078ae15bc)
  材料版本 `digest-material-e86c50589bd95d6f189a3af152ef111f378d7f048d09802ca214975078ae15bc@1`；获取方式 `http_full_text`。
  > Fluid compute combines the efficiency of servers and the flexibility of serverless, enabling real-time, dynamic workloads like APIs, streaming, and AI. — 原文提取
  > Fluid runs many requests on a single instance. Billing is based on CPU usage. — 原文提取
- Vercel Sandbox Documentation · Vercel · [原站](https://vercel.com/docs/sandbox) · [主体档案：Vercel](../entities/companies/Vercel.md) · [本地原件](../../../raw/07e07c21b1e7eb6a0109f4c08fa6266fede1bc062cab6541af2def7fa8accd8d)
  材料版本 `digest-material-07e07c21b1e7eb6a0109f4c08fa6266fede1bc062cab6541af2def7fa8accd8d@1`；获取方式 `http_full_text`。
  > Vercel Sandbox is an AI sandbox that runs untrusted or agent-generated code in isolated Linux microVMs. Use it to execute code, run coding agents, persist state with Drives, and control network access. — 原文提取
  > : Execute AI agent output, user uploads, or third-party scripts without exposing your production systems. — 原文提取
- AI Gateway - Vercel · Vercel · [原站](https://vercel.com/ai-gateway) · [主体档案：Vercel](../entities/companies/Vercel.md) · [本地原件](../../../raw/457dab03e177bc30aaff21928fdde9862b09a9dc2415f9b681265e96d89830a6)
  材料版本 `digest-material-457dab03e177bc30aaff21928fdde9862b09a9dc2415f9b681265e96d89830a6@1`；获取方式 `http_full_text`。
  > 400+ models at provider speed with near-zero overhead. One endpoint, no markup. Text, image, video, audio, realtime, retrieval, decisions, and tools. — 原文提取
  > If a provider degrades, the Gateway fails over to the same model on another provider. Identical output, no downtime. — 原文提取
- Introducing eve 1.0 - Vercel · Vercel · [原站](https://vercel.com/blog/eve-is-now-generally-available) · [主体档案：Vercel](../entities/companies/Vercel.md) · [本地原件](../../../raw/acb1ee5f3dfdb4ec886416ecb3b2670cf08a5b7b8456c5c64909b04a32a3b776)
  材料版本 `digest-material-acb1ee5f3dfdb4ec886416ecb3b2670cf08a5b7b8456c5c64909b04a32a3b776@1`；获取方式 `http_full_text`。
  > Today we're announcing eve 1.0 , the open-source framework for building production-ready agents. — 原文提取
  > Since the public preview in June , we've worked with early adopters to prepare eve for 1.0, shipping 230+ releases and merging thousands of pull requests. With this release, eve is now generally available. — 原文提取

归属与范围：已穿透提取 Delphi 56 分钟原视频完整英文自动转录（50,889 字符，2026-10-29），并核验 Vercel 官方发布的 Agent Stack、Fluid Compute、Vercel Sandbox（Firecracker microVM）、AI Gateway、AI SDK v7 与 eve 1.0 GA（2026-11-17）一手工程文档及性能基准；核查补充 Vercel 与 Delphi、Shopify、GC AI、Cloudflare、AWS 的本体关系边；Delphi 自 AWS 迁移的节省幅度与“一人万亿美元公司”长期预言仍保留为 pending\_verification 证据缺口。

来源缺口：

- `pending_verification`：访谈中提及的 Delphi 团队在主持人休假期间自 AWS 全量迁移至 Vercel 的真实费用节省百分比、延迟对比与 SLA 稳定性表现，均属主机双方口头叙述，尚未经第三方独立架构审计披露明细。 [线索](https://www.youtube.com/watch?v=W9YfKZaK7KI)
- `pending_verification`：关于“单人支撑万亿美元公司”的终局设想及由 AI 代理自主掌管种子资金的探索案例，被 Guillermo Rauch 明确表述为早期愿景与小规模实验，尚无经审计的规模化财务样本验证。 [线索](https://www.youtube.com/watch?v=W9YfKZaK7KI)
- `not_disclosed`：Vercel 尚未公开披露公司最新季度 ARR 体量、Fluid Compute / Agent Stack / Sandbox 在总收入中的拆分占比及推理代理零加价（0% markup）模式下的整体平台毛利率结构。 [线索](https://vercel.com/blog/agent-stack)
- `unverified_claim`：实体关系入库跳过 (Guillermo Rauch --founded--\> Vercel)：human\_certified 边受只补不盖锁保护，自动流程不得覆盖

[返回赛道总览](../赛道总览.md#digest-fa95bbde0e59181d) · [返回导读索引](README.md) · [主体档案库](../entities/README.md)
