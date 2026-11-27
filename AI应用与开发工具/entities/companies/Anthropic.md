# Anthropic

[返回主体档案库](../README.md) · [返回赛道总览](../../赛道总览.md) · [单篇导读索引](../../blogs/README.md)

- 主体类别：🏢 公司与产业主体 (Companies)
- 核心定位与说明：Anthropic 官网主入口 Claude 官方入口
- 关联账号与官方入口：
  - Official Site（Anthropic）：[机构／作者主页](https://www.anthropic.com/) · 登记对象 `digest-publisher-afe2508ac4caf5ee1733a2f2` — Anthropic 官网主入口
  - Official Site（Anthropic）：[机构／作者主页](https://claude.com/) · 登记对象 `digest-publisher-8b508401560d90364161320c` — Claude 官方入口

## 1. 核心研究问题与待核查争议（Questions & Open Debates）

### 🔍 待核查缺口与证据边界（Open Gaps）

- `not_disclosed`：Akamai 于 2026-10-27 推出的 Akamai Inference（Serverless / Dedicated）与基于 Fermyon Spin WebAssembly 的 Akamai Agent Sandbox 目前仍处于 Beta 阶段，Q3 财报及 Form 10-Q 均未单独拆分披露两项开发者产品的调用量、活跃开发者数或独立营收贡献。 [线索](https://www.akamai.com/newsroom/press-release/akamai-launches-ai-inference-service-and-agent-execution-environment)（关联：[《Akamai Technologies (NASDAQ: AKAM) Q3 2026 财报：CIS 云基建同比增 34%，年内 AI 多年期承诺突破 140 亿美元》](../../blogs/Akamai%20Technologies%20%28NASDAQ_%20AKAM%29%20Q3%202026%20%E8%B4%A2%E6%8A%A5%EF%BC%9ACIS%20%E4%BA%91%E5%9F%BA%E5%BB%BA%E5%90%8C%E6%AF%94%E5%A2%9E%2034%25%EF%BC%8C%E5%B9%B4%E5%86%85%20AI%20%E5%A4%9A%E5%B9%B4%E6%9C%9F%E6%89%BF%E8%AF%BA%E7%AA%81%E7%A0%B4%20140%20%E4%BA%BF%E7%BE%8E%E5%85%83.md)）
- `not_disclosed`：Akamai 2026Q3 Form 10-Q 确认 Anthropic 7 年 \$11.6B 专用 CPU 容量协议细节，但未公开其内部工作负载在编程沙盒、容器托管与数据处理管线之间的核数配比，亦未最终锁定新建 CIS 专用服务器在 2026 年报（Form 10-K）采用的法定折旧年限（5 年 vs 7 年）。 [线索](https://www.sec.gov/Archives/edgar/data/1086222/000108622226000100/akam-20260930.htm)（关联：[《Akamai Technologies (NASDAQ: AKAM) Q3 2026 财报：CIS 云基建同比增 34%，年内 AI 多年期承诺突破 140 亿美元》](../../blogs/Akamai%20Technologies%20%28NASDAQ_%20AKAM%29%20Q3%202026%20%E8%B4%A2%E6%8A%A5%EF%BC%9ACIS%20%E4%BA%91%E5%9F%BA%E5%BB%BA%E5%90%8C%E6%AF%94%E5%A2%9E%2034%25%EF%BC%8C%E5%B9%B4%E5%86%85%20AI%20%E5%A4%9A%E5%B9%B4%E6%9C%9F%E6%89%BF%E8%AF%BA%E7%AA%81%E7%A0%B4%20140%20%E4%BA%BF%E7%BE%8E%E5%85%83.md)）
- `unverified_claim`：实体关系入库跳过 (Akamai --supplies--\> Anthropic)：human\_certified 边受只补不盖锁保护，自动流程不得覆盖（关联：[《Akamai Technologies (NASDAQ: AKAM) Q3 2026 财报：CIS 云基建同比增 34%，年内 AI 多年期承诺突破 140 亿美元》](../../blogs/Akamai%20Technologies%20%28NASDAQ_%20AKAM%29%20Q3%202026%20%E8%B4%A2%E6%8A%A5%EF%BC%9ACIS%20%E4%BA%91%E5%9F%BA%E5%BB%BA%E5%90%8C%E6%AF%94%E5%A2%9E%2034%25%EF%BC%8C%E5%B9%B4%E5%86%85%20AI%20%E5%A4%9A%E5%B9%B4%E6%9C%9F%E6%89%BF%E8%AF%BA%E7%AA%81%E7%A0%B4%20140%20%E4%BA%BF%E7%BE%8E%E5%85%83.md)）
- `not_disclosed`：Cognition 未披露 Devin Review「平均每个 PR 检出 2 个缺陷且约 58% 为严重缺陷」背后的 PR 抽样总量（分母）、仓库覆盖分布及多轮生成器-验证器对抗循环增加的单任务耗时与推理成本；亦未披露 SWE-1.5 / SWE-1.6 与 Sonnet 4.5 / Opus-4.5 搭配 Smart Friend 时的具体基准得分差值。 [线索](https://cognition.com/blog/multi-agents-working)（关联：[《Multi-Agents: What's Actually Working》](../../blogs/Multi-Agents_%20What%27s%20Actually%20Working.md)）
- `unavailable`：文中引用的 Anthropic 245 页《Claude Mythos Preview System Card》（2026-04-07）因 PDF 体积较大未做全篇逐页解析，文中涉及 Mythos 级模型成本上升趋势的论述按两家公司官方公告摘要核对。 [线索](https://www-cdn.anthropic.com/08ab9158070959f88f296514c21b7facce6f52bc.pdf)（关联：[《Multi-Agents: What's Actually Working》](../../blogs/Multi-Agents_%20What%27s%20Actually%20Working.md)）
- `not_disclosed`：Cognition 未披露文中内部微调上下文压缩小模型的参数规模、训练语料配比与压缩延迟，亦未提供并行多代理对比单线程代理在生产任务上的定量失败率统计（文中 Flappy Bird 克隆与 Edit Apply Models 案例均为架构推演说明）。 [线索](https://cognition.com/blog/dont-build-multi-agents)（关联：[《Don’t Build Multi-Agents》](../../blogs/Don%E2%80%99t%20Build%20Multi-Agents.md)）

- [《Akamai Technologies (NASDAQ: AKAM) Q3 2026 财报：CIS 云基建同比增 34%，年内 AI 多年期承诺突破 140 亿美元》](../../blogs/Akamai%20Technologies%20%28NASDAQ_%20AKAM%29%20Q3%202026%20%E8%B4%A2%E6%8A%A5%EF%BC%9ACIS%20%E4%BA%91%E5%9F%BA%E5%BB%BA%E5%90%8C%E6%AF%94%E5%A2%9E%2034%25%EF%BC%8C%E5%B9%B4%E5%86%85%20AI%20%E5%A4%9A%E5%B9%B4%E6%9C%9F%E6%89%BF%E8%AF%BA%E7%AA%81%E7%A0%B4%20140%20%E4%BA%BF%E7%BE%8E%E5%85%83.md)：已从 SEC EDGAR（CIK 0001086222）完整抓回 Akamai 2026-11-05 Q3 2026 业绩新闻稿原件（Form 8-K Exhibit 99.1，42,116 字符）并同步核验 2026-11-06 Form 10-Q（0001086222-26-000100）、2026-10-27 Akamai Inference & Agent Sandbox 发布公告与 2026-11-09 循环信贷修订及 \$2.2B（含绿鞋 \$2.5B）可转债 8-K；同时按 SEC Q3 2026 一手财报横向对账 Cloudflare (NET)、Fastly (FSLY) 与 Arista Networks (ANET)。立足 AI 应用与开发工具赛道，以纯 CPU Agent 运行时与 Spin Wasm 沙盒机制前置，再行复核分部财报、\$19.9B RPO、Anthropic \$11.6B 合约与重资产融资压力。
- [《Multi-Agents: What's Actually Working》](../../blogs/Multi-Agents_%20What%27s%20Actually%20Working.md)：已采集 Cognition 官方工程博客原件（2026-04-22，Walden Yan），并穿透核验文中引用的 7 篇关键一级技术文献（Cognition SWE-1.5 / SWE-1.6、Anthropic The Advisor Strategy / Multi-Agent Research System / Building a C Compiler、Cursor Scaling Agents、Chroma Context Rot，连同原文共 8/14 条技术引用完成正文取证）；Devin Review 抽样 PR 分母与 Smart Friend 内部对照得分未公开，已登记 not\_disclosed 缺口。
- [《Don’t Build Multi-Agents》](../../blogs/Don%E2%80%99t%20Build%20Multi-Agents.md)：已采集 Cognition 官方工程博客原件（2025-06-12，Walden Yan），并交叉核验 Anthropic《Building effective AI agents》（2024-12-19）、OpenAI Swarm、Microsoft AutoGen 与 MetaGPT 等引用框架背景（2/6 条重点架构文献完成正文核验）；原文未披露内部历史压缩模型的参数规模及单线程对比多代理的定量任务成功率，已登记 not\_disclosed 缺口。

## 2. 收录文章与一手材料（Ingested Articles & Primary Sources）

### [Akamai Technologies (NASDAQ: AKAM) Q3 2026 财报：CIS 云基建同比增 34%，年内 AI 多年期承诺突破 140 亿美元](../../blogs/Akamai%20Technologies%20%28NASDAQ_%20AKAM%29%20Q3%202026%20%E8%B4%A2%E6%8A%A5%EF%BC%9ACIS%20%E4%BA%91%E5%9F%BA%E5%BB%BA%E5%90%8C%E6%AF%94%E5%A2%9E%2034%25%EF%BC%8C%E5%B9%B4%E5%86%85%20AI%20%E5%A4%9A%E5%B9%B4%E6%9C%9F%E6%89%BF%E8%AF%BA%E7%AA%81%E7%A0%B4%20140%20%E4%BA%BF%E7%BE%8E%E5%85%83.md)

2026-11-05 · 来源：Akamai Technologies (2026Q3 10-Q · Earnings) · 状态：有来源缺口

[单篇导读（blogs/）](../../blogs/Akamai%20Technologies%20%28NASDAQ_%20AKAM%29%20Q3%202026%20%E8%B4%A2%E6%8A%A5%EF%BC%9ACIS%20%E4%BA%91%E5%9F%BA%E5%BB%BA%E5%90%8C%E6%AF%94%E5%A2%9E%2034%25%EF%BC%8C%E5%B9%B4%E5%86%85%20AI%20%E5%A4%9A%E5%B9%B4%E6%9C%9F%E6%89%BF%E8%AF%BA%E7%AA%81%E7%A0%B4%20140%20%E4%BA%BF%E7%BE%8E%E5%85%83.md) · [微信原件](../../../../raw/cae9dd310718ae7f266601e0ec229b815a6276fa4c8bd02c9f21c7987d28ad9a) · 固定版本 `digest-material-cae9dd310718ae7f266601e0ec229b815a6276fa4c8bd02c9f21c7987d28ad9a@1`

> 【信源巡检核心摘要】 Akamai（NASDAQ: AKAM）于 2026-11-05 在官网（akamai.com）发布 Q3 2026 财报（随后于 11-06 向 SEC 提交 Form 10-Q）。

关联一手材料：

- Akamai Q3 2026 Form 10-Q & Financial Results: CIS Compute +34% YoY (\$108.8M), \$14B+ Multi-Year Cloud Commitments (\$11.6B Anthropic) & \$2.45B–\$2.65B Q4 CapEx Surge（Akamai Technologies (2026Q3 10-Q · Earnings)）· [原站](https://www.akamai.com/newsroom/press-release/akamai-reports-third-quarter-2026-financial-results) · [本地原件](../../../../raw/552a5bdb0e606b33c5d76205a94d4313af8e4c2d3e99742487c861c56fa181f5) · 版本 `digest-material-552a5bdb0e606b33c5d76205a94d4313af8e4c2d3e99742487c861c56fa181f5@1`
  > when adjusted for foreign exchange\* 2027 Cloud Infrastructure Services revenue projected to be \$1.1 billion to \$1.3 billion, with total company revenue growth of 17% to 22% year-over-year when adjusted for foreign exchange\* 2028 total company revenue projected to exceed \$7.0 billion CAMBRIDGE, Mass. — 原文提取

### [Multi-Agents: What's Actually Working](../../blogs/Multi-Agents_%20What%27s%20Actually%20Working.md)

2026-04-22 · 来源：Cognition · Anthropic · Cursor (Anysphere) · Chroma · 状态：有来源缺口

[单篇导读（blogs/）](../../blogs/Multi-Agents_%20What%27s%20Actually%20Working.md) · [微信原件](../../../../raw/bde0c64655f5407495829fc48be764e3ada630afce7124b54c1000a7cad10088) · 固定版本 `digest-material-bde0c64655f5407495829fc48be764e3ada630afce7124b54c1000a7cad10088@1`

> Even when we look at Devin usage in our largest enterprises segment, the segment that has traditionally been cautious toward adopting new technologies, we see an explosion over the last 6 months (~8x).

> The practical shape is map-reduce-and-manage: a manager splits work, children execute, the manager synthesizes and reports back.

关联一手材料：

- The advisor strategy: Give Sonnet an intelligence boost with Opus（Anthropic）· [原站](https://claude.com/resources/articles/the-advisor-strategy) · [本地原件](../../../../raw/7e87583aebf7714fc66d9c78bfaa9558a4f702db4ffbd3b6a738a7259ee7a33c) · 版本 `digest-material-7e87583aebf7714fc66d9c78bfaa9558a4f702db4ffbd3b6a738a7259ee7a33c@1`
  > Developers who want to better balance intelligence and cost have converged on what we call the advisor strategy: pair Opus as an advisor with Sonnet or Haiku as an executor. — 原文提取
- How we built our multi-agent research system（Anthropic）· [原站](https://www.anthropic.com/research/multi-agent-research-system) · [本地原件](../../../../raw/be756d9654beaabb97b69c15843554b98f8027fd30463966a045bcc4bddbf8c6) · 版本 `digest-material-be756d9654beaabb97b69c15843554b98f8027fd30463966a045bcc4bddbf8c6@1`
  > Claude now has Research capabilities that allow it to search across the web, Google Workspace, and any integrations to accomplish complex tasks. — 原文提取
- Building a C compiler with parallel Claudes（Anthropic）· [原站](https://www.anthropic.com/research/building-c-compiler) · [本地原件](../../../../raw/59af8159bdadc015258d09707aada20926198bb94bc3bd1d2102b780232ee1d0) · 版本 `digest-material-59af8159bdadc015258d09707aada20926198bb94bc3bd1d2102b780232ee1d0@1`
  > Written by Nicholas Carlini, a researcher on our Safeguards team. — 原文提取

### [Don’t Build Multi-Agents](../../blogs/Don%E2%80%99t%20Build%20Multi-Agents.md)

2025-06-12 · 来源：Cognition · 状态：有来源缺口

[单篇导读（blogs/）](../../blogs/Don%E2%80%99t%20Build%20Multi-Agents.md) · [微信原件](../../../../raw/a9d5002900ea060af7ba29d9a9c4c64b0f7a70265ae49dff54c0fef4ba3bbb13) · 固定版本 `digest-material-a9d5002900ea060af7ba29d9a9c4c64b0f7a70265ae49dff54c0fef4ba3bbb13@1`

> When agents have to actually be reliable while running for long periods of time and maintain coherent conversations, there are certain things you must do to contain the potential for compounding errors.

> The actions subagent 1 took and the actions subagent 2 took were based on conflicting assumptions not prescribed upfront.

关联一手材料：

- Building effective AI agents（Anthropic）· [原站](https://www.anthropic.com/research/building-effective-agents) · [本地原件](../../../../raw/b7b4af7cdc35812aab72583aea4ae77f1c638e0387a9f428c8e66633213dd387) · 版本 `digest-material-b7b4af7cdc35812aab72583aea4ae77f1c638e0387a9f428c8e66633213dd387@1`
  > Note: Much of the tooling landscape described in this post has changed since December 2024. For our current approach, see how we built Claude Managed Agents and the Managed Agents documentation. — 原文提取


## 3. 关联实体网络（Verified Entity Ontology）

- ← Amazon.com, Inc. · 投资 / 领投（human_certified/verified）
- ← [AMD](../companies/AMD.md) · 投资 / 领投 · \$2.5B（rule_verified/verified）
- ← Micron Technology · 投资 / 领投 · \$1.0B（rule_verified/verified）
- ← TSMC Partners · 投资 / 领投 · \$500M（rule_verified/verified）
- → AIG · 供应 / 服务 · insurance\_underwriting（rule_verified/verified）
- ← Google · 供应 / 服务 · \$121.3B（rule_verified/verified）
- → Accenture · 合作 / 联合研发 · enterprise\_distribution\_and\_cyber\_ai（rule_verified/verified）
- ← [NVIDIA](../companies/NVIDIA.md) · 投资 / 领投 · \$10.0B [2026-11-17..至今]（rule_verified/verified）
- → [Cognition](../companies/Cognition.md) · 供应 / 服务（rule_verified/verified）
- ← Fluidstack · 供应 / 服务（rule_verified/verified）
- ← OnePWR Solutions · \$3.4B 转让 1.7GW 燃机槽位 (\$2,000/kW)（human_certified/verified）
- ← Broadcom · 投资 / 领投 · \$1.0B（rule_verified/verified）
- ← Microsoft · 投资 / 领投 · \$1.0B（rule_verified/verified）
- ← [Akamai Technologies, Inc.](../companies/Akamai.md) · 7 年 \$11.6B 专用 CPU 集群 + Agent 沙盒（human_certified/verified）
- ← Amazon Web Services (AWS) · 供应 / 服务 · \$110.0B（rule_verified/verified）
- ← Dario Amodei · 创立 · Chief Executive Officer & Co-Founder（rule_verified/verified）
- ← [SpaceX](../companies/SpaceX.md) · 供应 / 服务 · up to \$120.5B · ~\$3.1B/month · SpaceX.AI 算力采购协议 [2026-11-17..至今]（rule_verified/verified）
- ← Sam McCandlish · 创立 · Chief Architect & Co-Founder（rule_verified/verified）
- ← Tom Brown · 创立 · Chief Compute Officer & Co-Founder（rule_verified/verified）
- ← Daniela Amodei · 创立 · President & Co-Founder（rule_verified/verified）
- ← Google · 投资 / 领投 · \$10.0B [2026-11-17..至今]（rule_verified/verified）
- ← Jared Kaplan · 创立 · Chief Science Officer & Co-Founder（rule_verified/verified）
- → Bristol Myers Squibb · 供应 / 服务 · enterprise\_ai\_deployment（rule_verified/verified）
