# Akamai

[返回主体档案库](../README.md) · [返回赛道总览](../../赛道总览.md) · [单篇导读索引](../../blogs/README.md)

- 主体类别：🏢 公司与产业主体 (Companies)
- 核心定位与说明：全球分布式边缘安全与云计算公司（NASDAQ: AKAM），2026Q3 营收 \$1.122B（CIS Compute \$108.8M, +34% YoY），年内累计签署 \>\$14B 多年期云承诺（含 Anthropic 7 年 \$11.6B 专用 CPU 协议）。
- 关联账号与官方入口：
  - Official Site（Akamai）：[机构／作者主页](https://www.akamai.com/) · 登记对象 `digest-publisher-0982f80bff901e6c53bbeda9` — 全球分布式边缘安全与云计算公司（NASDAQ: AKAM），2026Q3 营收 \$1.122B（CIS Compute \$108.8M, +34% YoY），年内累计签署 \>\$14B 多年期云承诺（含 Anthropic 7 年 \$11.6B 专用 CPU 协议）。

## 1. 核心研究问题与待核查争议（Questions & Open Debates）

### 💬 追问与核查：《Meta收购Conductor：AI编程的下一场竞争，是让多个Agent一起…》

- 所以是个沙盒？类似mersor之前也收购了一个多并发沙盒，沙盒/虚拟机技术的需求好像浮现了出来，i.e. Agent越多对CPU的需求越高，CPU的线程依赖沙盒拆分，不然就会导致之前Muse的用户访问到了别人的数据，所以沙盒技术也变得重要，但是我之前看沙盒/虚拟机，好像只有Broadcom收购了VMware这个消息（当然我很看好broadcom，但是虚拟机业务对broadcom来说太小了），还有别的相关公司吗？

关联文章：[《Meta收购Conductor：AI编程的下一场竞争，是让多个Agent一起干活》](../../blogs/Meta%E6%94%B6%E8%B4%ADConductor%EF%BC%9AAI%E7%BC%96%E7%A8%8B%E7%9A%84%E4%B8%8B%E4%B8%80%E5%9C%BA%E7%AB%9E%E4%BA%89%EF%BC%8C%E6%98%AF%E8%AE%A9%E5%A4%9A%E4%B8%AAAgent%E4%B8%80%E8%B5%B7%E5%B9%B2%E6%B4%BB.md)

> 追查结论摘要：口径与利益：本拆解汇总 Conductor 官方停服与并购公告（2026-11-04）、TechCrunch/Axios 并购报道、Mercor Deeptune 公告、Together AI CodeSandbox 公告、Nutanix FY2026 10-K、Cloudflare 财报、Akamai 披露、AMD EPYC、E2B、Modal 与 Daytona 一手材料，交叉关联 Conductor 档案、Meta 档案、Cursor 档案、Nutanix 档案、Clo…

### 🔍 待核查缺口与证据边界（Open Gaps）

- `not_disclosed`：Meta 收购 Conductor (Melty Labs) 的具体交易对价（现金与股票配比）、留任期激励（Earn-out）条款，以及 Conductor 在被收购前夕的精确付费席位数与月度经常性收入（MRR）均未由双方公开披露。 [线索](https://conductor.build/)（关联：[《Meta收购Conductor：AI编程的下一场竞争，是让多个Agent一起干活》](../../blogs/Meta%E6%94%B6%E8%B4%ADConductor%EF%BC%9AAI%E7%BC%96%E7%A8%8B%E7%9A%84%E4%B8%8B%E4%B8%80%E5%9C%BA%E7%AB%9E%E4%BA%89%EF%BC%8C%E6%98%AF%E8%AE%A9%E5%A4%9A%E4%B8%AAAgent%E4%B8%80%E8%B5%B7%E5%B9%B2%E6%B4%BB.md)）
- `not_disclosed`：Cloudflare (NYSE: NET) 2026Q3 财报（总营收 USD 782.5M）与 Akamai (NASDAQ: AKAM) 2026Q2 财报（CIS 营收 USD 99.3M）均未单独拆分披露其 Agent Sandbox / Containers / Workers AI 子产品线的独立收入金额与分项毛利率。 [线索](https://www.cloudflare.com/)（关联：[《Meta收购Conductor：AI编程的下一场竞争，是让多个Agent一起干活》](../../blogs/Meta%E6%94%B6%E8%B4%ADConductor%EF%BC%9AAI%E7%BC%96%E7%A8%8B%E7%9A%84%E4%B8%8B%E4%B8%80%E5%9C%BA%E7%AB%9E%E4%BA%89%EF%BC%8C%E6%98%AF%E8%AE%A9%E5%A4%9A%E4%B8%AAAgent%E4%B8%80%E8%B5%B7%E5%B9%B2%E6%B4%BB.md)）
- `unverified_claim`：实体关系入库跳过 (Meta --acquired--\> Conductor (Melty Labs))：human\_certified 边受只补不盖锁保护，自动流程不得覆盖（关联：[《Meta收购Conductor：AI编程的下一场竞争，是让多个Agent一起干活》](../../blogs/Meta%E6%94%B6%E8%B4%ADConductor%EF%BC%9AAI%E7%BC%96%E7%A8%8B%E7%9A%84%E4%B8%8B%E4%B8%80%E5%9C%BA%E7%AB%9E%E4%BA%89%EF%BC%8C%E6%98%AF%E8%AE%A9%E5%A4%9A%E4%B8%AAAgent%E4%B8%80%E8%B5%B7%E5%B9%B2%E6%B4%BB.md)）
- `unverified_claim`：实体关系入库跳过 (Charlie Holtz --founded--\> Conductor (Melty Labs))：human\_certified 边受只补不盖锁保护，自动流程不得覆盖（关联：[《Meta收购Conductor：AI编程的下一场竞争，是让多个Agent一起干活》](../../blogs/Meta%E6%94%B6%E8%B4%ADConductor%EF%BC%9AAI%E7%BC%96%E7%A8%8B%E7%9A%84%E4%B8%8B%E4%B8%80%E5%9C%BA%E7%AB%9E%E4%BA%89%EF%BC%8C%E6%98%AF%E8%AE%A9%E5%A4%9A%E4%B8%AAAgent%E4%B8%80%E8%B5%B7%E5%B9%B2%E6%B4%BB.md)）
- `not_disclosed`：Akamai 于 2026-10-27 推出的 Akamai Inference（Serverless / Dedicated）与基于 Fermyon Spin WebAssembly 的 Akamai Agent Sandbox 目前仍处于 Beta 阶段，Q3 财报及 Form 10-Q 均未单独拆分披露两项开发者产品的调用量、活跃开发者数或独立营收贡献。 [线索](https://www.akamai.com/newsroom/press-release/akamai-launches-ai-inference-service-and-agent-execution-environment)（关联：[《Akamai Technologies (NASDAQ: AKAM) Q3 2026 财报：CIS 云基建同比增 34%，年内 AI 多年期承诺突破 140 亿美元》](../../blogs/Akamai%20Technologies%20%28NASDAQ_%20AKAM%29%20Q3%202026%20%E8%B4%A2%E6%8A%A5%EF%BC%9ACIS%20%E4%BA%91%E5%9F%BA%E5%BB%BA%E5%90%8C%E6%AF%94%E5%A2%9E%2034%25%EF%BC%8C%E5%B9%B4%E5%86%85%20AI%20%E5%A4%9A%E5%B9%B4%E6%9C%9F%E6%89%BF%E8%AF%BA%E7%AA%81%E7%A0%B4%20140%20%E4%BA%BF%E7%BE%8E%E5%85%83.md)）
- `not_disclosed`：Akamai 2026Q3 Form 10-Q 确认 Anthropic 7 年 \$11.6B 专用 CPU 容量协议细节，但未公开其内部工作负载在编程沙盒、容器托管与数据处理管线之间的核数配比，亦未最终锁定新建 CIS 专用服务器在 2026 年报（Form 10-K）采用的法定折旧年限（5 年 vs 7 年）。 [线索](https://www.sec.gov/Archives/edgar/data/1086222/000108622226000100/akam-20260930.htm)（关联：[《Akamai Technologies (NASDAQ: AKAM) Q3 2026 财报：CIS 云基建同比增 34%，年内 AI 多年期承诺突破 140 亿美元》](../../blogs/Akamai%20Technologies%20%28NASDAQ_%20AKAM%29%20Q3%202026%20%E8%B4%A2%E6%8A%A5%EF%BC%9ACIS%20%E4%BA%91%E5%9F%BA%E5%BB%BA%E5%90%8C%E6%AF%94%E5%A2%9E%2034%25%EF%BC%8C%E5%B9%B4%E5%86%85%20AI%20%E5%A4%9A%E5%B9%B4%E6%9C%9F%E6%89%BF%E8%AF%BA%E7%AA%81%E7%A0%B4%20140%20%E4%BA%BF%E7%BE%8E%E5%85%83.md)）
- `unverified_claim`：实体关系入库跳过 (Akamai --supplies--\> Anthropic)：human\_certified 边受只补不盖锁保护，自动流程不得覆盖（关联：[《Akamai Technologies (NASDAQ: AKAM) Q3 2026 财报：CIS 云基建同比增 34%，年内 AI 多年期承诺突破 140 亿美元》](../../blogs/Akamai%20Technologies%20%28NASDAQ_%20AKAM%29%20Q3%202026%20%E8%B4%A2%E6%8A%A5%EF%BC%9ACIS%20%E4%BA%91%E5%9F%BA%E5%BB%BA%E5%90%8C%E6%AF%94%E5%A2%9E%2034%25%EF%BC%8C%E5%B9%B4%E5%86%85%20AI%20%E5%A4%9A%E5%B9%B4%E6%9C%9F%E6%89%BF%E8%AF%BA%E7%AA%81%E7%A0%B4%20140%20%E4%BA%BF%E7%BE%8E%E5%85%83.md)）

- [《Meta收购Conductor：AI编程的下一场竞争，是让多个Agent一起干活》](../../blogs/Meta%E6%94%B6%E8%B4%ADConductor%EF%BC%9AAI%E7%BC%96%E7%A8%8B%E7%9A%84%E4%B8%8B%E4%B8%80%E5%9C%BA%E7%AB%9E%E4%BA%89%EF%BC%8C%E6%98%AF%E8%AE%A9%E5%A4%9A%E4%B8%AAAgent%E4%B8%80%E8%B5%B7%E5%B9%B2%E6%B4%BB.md)：完成《Meta收购Conductor：AI编程的下一场竞争，是让多个Agent一起干活》的一手穿透复核与 Agent 沙盒/虚拟化/Server CPU 一二级市场全景研究：（1）核实 Melty Labs (Conductor, YC S24, Charlie Holtz & Jackson de Campos) 2026年3月 \$22M A轮（Spark/Matrix）及 2026年11月4日被 Meta Superintelligence Labs（Alexandr Wang / Nat Friedman）收购、11月13日只读、11月20日关停 Conductor Cloud 的完整时间线，厘清其本地 macOS 客户端基于 git worktree 目录隔离而非内核虚拟机的架构本质；（2）还原 Mercor 2026年7月收购多并发 RL 仿真软件沙盒 Deeptune（及 CEO 参投 Daytona \$60M B轮）、Together AI 收购 CodeSandbox（Firecracker 毫秒级内存快照分叉）、SpaceX/xAI \$60B 收购 Cursor (Anysphere) 及 Meta Muse 2026年8–10月三连安全事故（KVM 逃逸漏洞 CVE-2026-53359 Januscape、macOS 端点劫持、10月子域名被动 DNS 会话泄露导致用户访问他人数据）；（3）从 GPU 毫秒级脉冲 vs CPU 秒/分钟级编译测试占空比剪刀差拆解为何并发 Agent 推爆 Server CPU 与 MicroVM 沙盒，并构建涵盖 Nutanix (NTNX)、Cloudflare (NET)、Akamai (AKAM)、AMD (AMD EPYC Turin SEV-SNP) 及 Modal (\$15.75B)、Daytona (\$1.0B)、E2B 的一二级市场全景投资地图。
- [《Akamai Technologies (NASDAQ: AKAM) Q3 2026 财报：CIS 云基建同比增 34%，年内 AI 多年期承诺突破 140 亿美元》](../../blogs/Akamai%20Technologies%20%28NASDAQ_%20AKAM%29%20Q3%202026%20%E8%B4%A2%E6%8A%A5%EF%BC%9ACIS%20%E4%BA%91%E5%9F%BA%E5%BB%BA%E5%90%8C%E6%AF%94%E5%A2%9E%2034%25%EF%BC%8C%E5%B9%B4%E5%86%85%20AI%20%E5%A4%9A%E5%B9%B4%E6%9C%9F%E6%89%BF%E8%AF%BA%E7%AA%81%E7%A0%B4%20140%20%E4%BA%BF%E7%BE%8E%E5%85%83.md)：已从 SEC EDGAR（CIK 0001086222）完整抓回 Akamai 2026-11-05 Q3 2026 业绩新闻稿原件（Form 8-K Exhibit 99.1，42,116 字符）并同步核验 2026-11-06 Form 10-Q（0001086222-26-000100）、2026-10-27 Akamai Inference & Agent Sandbox 发布公告与 2026-11-09 循环信贷修订及 \$2.2B（含绿鞋 \$2.5B）可转债 8-K；同时按 SEC Q3 2026 一手财报横向对账 Cloudflare (NET)、Fastly (FSLY) 与 Arista Networks (ANET)。立足 AI 应用与开发工具赛道，以纯 CPU Agent 运行时与 Spin Wasm 沙盒机制前置，再行复核分部财报、\$19.9B RPO、Anthropic \$11.6B 合约与重资产融资压力。

## 2. 收录文章与一手材料（Ingested Articles & Primary Sources）

### [Meta收购Conductor：AI编程的下一场竞争，是让多个Agent一起干活](../../blogs/Meta%E6%94%B6%E8%B4%ADConductor%EF%BC%9AAI%E7%BC%96%E7%A8%8B%E7%9A%84%E4%B8%8B%E4%B8%80%E5%9C%BA%E7%AB%9E%E4%BA%89%EF%BC%8C%E6%98%AF%E8%AE%A9%E5%A4%9A%E4%B8%AAAgent%E4%B8%80%E8%B5%B7%E5%B9%B2%E6%B4%BB.md)

2026-11-05 · 来源：Conductor (Melty Labs) · Meta · Nutanix · Cloudflare · Akamai · AMD · 状态：已整理

[单篇导读（blogs/）](../../blogs/Meta%E6%94%B6%E8%B4%ADConductor%EF%BC%9AAI%E7%BC%96%E7%A8%8B%E7%9A%84%E4%B8%8B%E4%B8%80%E5%9C%BA%E7%AB%9E%E4%BA%89%EF%BC%8C%E6%98%AF%E8%AE%A9%E5%A4%9A%E4%B8%AAAgent%E4%B8%80%E8%B5%B7%E5%B9%B2%E6%B4%BB.md) · [微信原件](../../../../raw/41f4e81b9b058fbe2a476d37c1d7f8fea1f6a2824a916d935a568ef83699a7c9) · 固定版本 `digest-material-41f4e81b9b058fbe2a476d37c1d7f8fea1f6a2824a916d935a568ef83699a7c9@1`

> 开发者可以为同一个代码库创建多个相互隔离的工作空间，同时启动多个AI编程Agent，让它们并行处理不同任务，最后由人来审查、合并代码。Conductor自己不做Agent，它调用的Agent来自Anthropic、OpenAI等头部实验室。

> 一个项目有前端、后端、测试、文档、基础设施配置。让人一个一个和Agent对话，效率还是被人的注意力限制住。Conductor的思路是：为同一个代码库创建多个隔离副本，让Agent并行处理不同任务，人从“写代码”变成“审代码”。

关联一手材料：

- Meta Acquisition of Conductor (Melty Labs), Multi-Agent Sandbox Architecture (Git Worktree vs. Firecracker MicroVM), Meta Muse Isolation Vulnerabilities & Public/Private Virtualization Investment Dossier（Conductor (Melty Labs) · Nutanix / Cloudflare / Akamai / AMD / E2B / Modal 一手披露与本工作台核查档案）· [原站](https://conductor.build/) · [本地原件](../../../../raw/bebb215d4b2860668c5d05a7f83025efbf2f250fe2875be3420b749860326716) · 版本 `digest-material-bebb215d4b2860668c5d05a7f83025efbf2f250fe2875be3420b749860326716@1`
  > # Primary Source Dossier: Meta's Acquisition of Conductor (Melty Labs), Multi-Agent Sandbox Architecture (Git Worktree vs. — 原文提取

### [Akamai Technologies (NASDAQ: AKAM) Q3 2026 财报：CIS 云基建同比增 34%，年内 AI 多年期承诺突破 140 亿美元](../../blogs/Akamai%20Technologies%20%28NASDAQ_%20AKAM%29%20Q3%202026%20%E8%B4%A2%E6%8A%A5%EF%BC%9ACIS%20%E4%BA%91%E5%9F%BA%E5%BB%BA%E5%90%8C%E6%AF%94%E5%A2%9E%2034%25%EF%BC%8C%E5%B9%B4%E5%86%85%20AI%20%E5%A4%9A%E5%B9%B4%E6%9C%9F%E6%89%BF%E8%AF%BA%E7%AA%81%E7%A0%B4%20140%20%E4%BA%BF%E7%BE%8E%E5%85%83.md)

2026-11-05 · 来源：Akamai Technologies (2026Q3 10-Q · Earnings) · 状态：有来源缺口

[单篇导读（blogs/）](../../blogs/Akamai%20Technologies%20%28NASDAQ_%20AKAM%29%20Q3%202026%20%E8%B4%A2%E6%8A%A5%EF%BC%9ACIS%20%E4%BA%91%E5%9F%BA%E5%BB%BA%E5%90%8C%E6%AF%94%E5%A2%9E%2034%25%EF%BC%8C%E5%B9%B4%E5%86%85%20AI%20%E5%A4%9A%E5%B9%B4%E6%9C%9F%E6%89%BF%E8%AF%BA%E7%AA%81%E7%A0%B4%20140%20%E4%BA%BF%E7%BE%8E%E5%85%83.md) · [微信原件](../../../../raw/cae9dd310718ae7f266601e0ec229b815a6276fa4c8bd02c9f21c7987d28ad9a) · 固定版本 `digest-material-cae9dd310718ae7f266601e0ec229b815a6276fa4c8bd02c9f21c7987d28ad9a@1`

> 【信源巡检核心摘要】 Akamai（NASDAQ: AKAM）于 2026-11-05 在官网（akamai.com）发布 Q3 2026 财报（随后于 11-06 向 SEC 提交 Form 10-Q）。

关联一手材料：

- Akamai Q3 2026 Form 10-Q & Financial Results: CIS Compute +34% YoY (\$108.8M), \$14B+ Multi-Year Cloud Commitments (\$11.6B Anthropic) & \$2.45B–\$2.65B Q4 CapEx Surge（Akamai Technologies (2026Q3 10-Q · Earnings)）· [原站](https://www.akamai.com/newsroom/press-release/akamai-reports-third-quarter-2026-financial-results) · [本地原件](../../../../raw/552a5bdb0e606b33c5d76205a94d4313af8e4c2d3e99742487c861c56fa181f5) · 版本 `digest-material-552a5bdb0e606b33c5d76205a94d4313af8e4c2d3e99742487c861c56fa181f5@1`
  > when adjusted for foreign exchange\* 2027 Cloud Infrastructure Services revenue projected to be \$1.1 billion to \$1.3 billion, with total company revenue growth of 17% to 22% year-over-year when adjusted for foreign exchange\* 2028 total company revenue projected to exceed \$7.0 billion CAMBRIDGE, Mass. — 原文提取
- Akamai Technologies, Inc. Form 10-Q (Q3 2026, Ended September 30, 2026)（Akamai Technologies, Inc.）· [原站](https://www.sec.gov/Archives/edgar/data/1086222/000108622226000100/akam-20260930.htm) · [本地原件](../../../../raw/8daa8df5e765513fa1baffb1f8e18cb329daa671b01ed77eea92b9e1038a8165) · 版本 `digest-material-8daa8df5e765513fa1baffb1f8e18cb329daa671b01ed77eea92b9e1038a8165@1`
  > Key Financial Metrics & Disclosures (Q3 2026 ended September 30, 2026): - Total Revenue: \$1,122 million (\$1.122 billion), +6% YoY (+7% constant currency). — 原文提取


## 3. 关联实体网络（Verified Entity Ontology）

- → [Anthropic](../companies/Anthropic.md) · 供应 / 服务 · 7-year \$11.6B dedicated CPU commitment（rule_verified/verified）
- → [Anthropic](../companies/Anthropic.md) · 7 年 \$11.6B 专用 CPU 集群 + Agent 沙盒（human_certified/verified）
- → Fermyon · 并购 / 接盘 · Spin\_WebAssembly\_runtime [2025-12-01..至今]（rule_verified/verified）
- ← Jabil · 供应 / 服务（rule_verified/verified）
- ← Lenovo · 供应 / 服务（rule_verified/verified）
- ← Tom Leighton · 任职 / 隶属 · CEO（rule_verified/verified）
