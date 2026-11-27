# Cognition (Devin / Windsurf) · 深度公司研究：上下游供应链、RL 训推栈与企业交付

- 研究时点：2026 年 11 月 27 日
- 法定与商业主体：Cognition AI, Inc.（2024 年 1 月成立，总部旧金山；联合创始人 Scott Wu [CEO]、Steven Hao [CTO]、Walden Yan；核心产品 Devin Cloud / Devin Desktop / CLI / Devin Review / DeepWiki / DANA / Devin Bots）
- 阅读入口：[交互式 Tearsheet (refs/index.html)](https://mojojolite-sketch.github.io/AI%E5%BA%94%E7%94%A8%E4%B8%8E%E5%BC%80%E5%8F%91%E5%B7%A5%E5%85%B7/cognition/refs/index.html)｜[主体档案 (Cognition.md)](../entities/companies/Cognition.md)｜[赛道总览](../赛道总览.md)｜[行业估值与融资导读](../blogs/%E5%BF%AB%E9%80%9F%E5%86%B2%E5%87%BB%20750%20%E4%BA%BF%E7%BE%8E%E5%85%83%E4%BC%B0%E5%80%BC%EF%BC%8CCognition%E5%87%AD%E4%BB%80%E4%B9%88%EF%BC%9F.md)
- Registry 权威锚点：主体 `entity-company-cognition-ac32f2@1`；核心证据 `evidence-cog-coreweave-vera-rubin@1`、`evidence-cog-nebius-vera-rubin@1`、`evidence-cog-swe21-cerebras-ultrafast@1`、`evidence-cog-swe2-rl-recipe@1`、`evidence-cog-swe-check-applied-compute@1`、`evidence-cog-swe-grep-cerebras@1`、`evidence-cog-swe17-multicluster@1`、`evidence-cog-aws-sca-cobol@1`、`evidence-cog-itau-case@1`、`evidence-cog-comarch-case@1`、`evidence-cog-ramp-case@1`（全部记录当前核验状态 `verification=pending`）

---

## 0. 核心研究立场（Thesis & Falsification）

Cognition 的估值定价逻辑（2026-09 E 轮 480 亿美元，2026-11 彭博传闻洽谈 750 亿美元）不建立在「比 Anthropic/OpenAI 更强的基础预训练大模型」上，而是押注三层复合结构：以开源万亿级基模（Kimi K2.7/K3 2.8T MoE）和本土可控中等基模（Thinking Machines Inkling-Small）作底座，结合 CoreWeave/Nebius 租赁的 NVIDIA GB200 → Vera Rubin NVL72 集群完成大规模多轮 RL 后训练，再把低延迟交互工作流（SWE-grep / SWE-1.5 / 1.6 Fast / 1.7 / 2.1 Ultrafast）路由至 Cerebras 晶圆级推理引擎，并用 Devin Fusion 的 Lead（Claude Opus/Fable、GPT）+ Sidekick（SWE-2）双持久上下文架构，直接切入银行、制造业与联邦机构的遗留系统改造与 IT 外包替换预算（[Series E](https://cognition.com/blog/series-e) · [CoreWeave PR](https://www.coreweave.com/news/coreweave-delivers-nvidia-vera-rubin-nvl72-performance-at-production-scale-starting-with-cognition) · [SWE-2.1](https://cognition.com/blog/swe-2-1)）。

与传统 IDE 插件不同，Cognition 通过单租户云沙盒（Devbox + AWS PrivateLink / GovCloud / Outposts）、FDE 驻场及 SI 渠道（Cognizant、LTM、Infosys、Ahead）把交付边界前移到 CI/CD 与生产合规门禁内 → 这使它能在 Itaú（1.7 万科技人员）、Wayfair（1,600+ 工程师）、花旗（1.4 万工程师）实现企业级渗透，但同时也暴露出全口径毛利承压与上游依赖两项核心脆弱性。

可反驳条件（Falsification Criteria）：
1. 算力账单与毛利证伪：截至 2027-06-30，若 Cognition 仍无法在计入自研 SWE RL 训练算力与数亿美元级 NVIDIA 集群租赁成本后维持 >=55% 全口径综合毛利率，或年现金消耗继续维持 8 亿美元量级且净新增 ARR 增速跌破 60%，则「自研 SWE 路由可持续改善单位经济性」的判断被削弱（关联 `question-cog-full-loaded-gm`）。
2. 模型原厂向下整合挤出：截至 2027-12-31，若 Anthropic Duet / Claude Code 与 OpenAI Dots / Codex 通过 Bundled Seats 或原生云沙盒方案在花旗、Wayfair、Itaú、GE Aerospace 中至少两家标杆客户替代 Devin 主力迁移工作流，则 Devin Fusion 中立编排层的定价权被证伪。
3. 上游基座与后训练伙伴断供或摩擦：Cognition 旗舰模型（SWE-1.7 基于 Kimi K2.7、SWE-2/2.1 基于 Kimi K3）高度依赖 Moonshot AI 开源权重基座，且 SWE-check 后训练合作方 Applied Compute 于 2026-11-18 被 Palo Alto Networks 以 45 亿美元收购；若美国政府/大型金融机构禁用或限流中国基座衍生权重且 SWE-2 Flash（Inkling-Small 路线）未能补位同等旗舰性能，Cognition 将被迫重担预训练或回退纯外采闭源 API（关联 `question-cog-kimi-dependency`、`question-cog-applied-compute-post-panw`）。
4. 企业端试点向生产扩展停滞：若 ACU 消耗增长停留在局部清理脚本与技术债 PR，未能持续渗透遗留主系统重写、CVE 安全修复与 DANA 跨职能查询，当前约 53x（E 轮）/ 75x（传闻轮）ARR 倍数将面临显著下修。

---

## 1. 商业规模、产品矩阵与财务边界

| 指标维度 | 官方公开披露口径（Cognition / Partners） | 第三方媒体 / 市场核查口径（未审计 / 付费墙摘要） | 证据与边界注记 |
| :--- | :--- | :--- | :--- |
| 估值与融资 | 2026-09-08 E 轮募资超 20 亿美元、估值 480 亿美元（a16z、Accel 领投，Founders Fund、General Catalyst、Avenir 跟投）；2026 年累计融资超 30 亿美元 | 2026-05 曾以 260 亿美元估值融资 10 亿美元（Reuters）；2026-11-20 彭博报道正洽谈约 750 亿美元估值融资 >=20 亿美元 | [Series E](https://cognition.com/blog/series-e) · [MLQ 48B](https://mlq.ai/news/cognition-raises-more-than-2-billion-at-a-48-billion-valuation-as-ai-coding-competition-widens/) · [MLQ 75B](https://mlq.ai/news/cognition-is-in-talks-to-raise-at-a-75-billion-valuation-two-months-after-its-48-billion-round/) |
| 年化收入运行率 (ARR) | 2026-09-25 官方披露突破 10 亿美元 ARR；2025-07 并购 Windsurf 时 Windsurf 为 8,200 万美元 ARR、Devin 自身约 7,300 万美元 ARR | 2026-05 为 4.92 亿美元、9 月初逼近 9 亿美元；尚未公布经审计 GAAP 收入或完整损益表 | [1B ARR](https://cognition.com/blog/1b-run-rate) · [MLQ 48B](https://mlq.ai/news/cognition-raises-more-than-2-billion-at-a-48-billion-valuation-as-ai-coding-competition-widens/)（未经独立 GAAP 审计） |
| 毛利率、算力租金与现金消耗 | 官方在 Series E 未披露利润表与集群年租金 | The Information 据知情人士报道：企业业务毛利率近 50% 但明确剔除模型训练成本；年付数亿美元租赁 NVIDIA 服务器集群，2026 年现金消耗约 8 亿美元；单一未具名大客户贡献约 10% 业务 | [MLQ 48B](https://mlq.ai/news/cognition-raises-more-than-2-billion-at-a-48-billion-valuation-as-ai-coding-competition-widens/)（原始 The Information 报导受付费墙限制，登记 `question-cog-paywall-info-bbg`） |
| 商业定价模型 | 个人及小团队（Devin Desktop/CLI）：Free \$0、Pro \$20/月、Max \$200/月、Teams \$80/月（含每用户 2 个 Free 模式云端并发会话，最多 100 成员）；超额按模型 API 价（如 SWE-2.1 标价 \$2/\$10/Mtok，Ultrafast \$5/\$25/Mtok）；Enterprise 按 Agent Compute Units (ACUs) 计量 | 促销补贴换渗透：SWE-2 2026-11-30 前免费、SWE-2 Flash 12-04 前免费、SWE-2.1 12-08 前桌面端与 CLI 免费（均不含云会话与 Ultrafast）；Devin Security 承诺向企业发放超 1 亿美元 Claude Mythos 5.2 扫描额度 | [Devin Pricing](https://devin.ai/pricing) · [Devin AI Models](https://docs.devin.ai/desktop/models) · [Mythos Security](https://devin.ai/blog/claude-mythos-5-2-security) |

产品形态已经从单一云端异步 Agent 扩展为覆盖本地—云端—审阅—安全的六大界面：
1. Devin Cloud：网页、Slack、Linear、Jira、API 触发，每任务独占隔离虚拟机（Shell + 编辑器 + 浏览器）并在后台自动运行测试与提 PR（[Enterprise Deployment](https://docs.devin.ai/enterprise/deployment/overview)）。
2. Devin Desktop & CLI（前身 Windsurf 2.0，2025-07 并购后于 2026-06 重构）：Agent Command Center 统一纳管本地终端、云端会话与 Devin Bots，底层打通开放 Agent Client Protocol (ACP) 与 Cascade（[Devin Desktop](https://cognition.com/blog/introducing-devin-desktop) · [Local Fusion](https://cognition.com/blog/local-fusion)）。
3. DeepWiki 与 Fast Context：索引超 5 万公共仓库及企业私有库，生成跨文件调用链与系统架构图谱，由 SWE-grep 子代理支撑秒级上下文检索（[SWE-grep](https://cognition.com/blog/swe-grep) · [COBOL](https://cognition.com/blog/how-devin-is-modernizing-cobol-at-fortune-500-companies)）。
4. Devin Review & SWE-check：针对 AI 批量产码造成的 PR 评审拥堵（Lazy LGTM），对 Diff 按逻辑语义重组、区分重构移动与真实逻辑变更，并调用 SWE-check 自动扫描跨文件逻辑缺陷（[Devin Review](https://cognition.com/blog/devin-review) · [SWE-check](https://cognition.com/blog/swe-check-10x-faster)）。
5. Devin Security & Security Swarm：结合自研高安全权重 SWE-2.1 Cyber（常规扫描）与外采前沿网络模型 Claude Mythos 5.2（深度扫描），在独立沙盒验证漏洞可利用性后直接提交修复 PR（[SWE-2.1](https://cognition.com/blog/swe-2-1) · [Mythos Security](https://devin.ai/blog/claude-mythos-5-2-security)）。
6. Devin Bots（2026-11-17 融合 Poke 技术上线）与 DANA（Data Analyst）：前者是跨天/跨周常驻运行、可嵌套调度多个子 Devin 的协调者；后者直接读取 dbt / LookML 仓库语义层并经 MCP 查询 Snowflake、Looker、Metabase 与 Amplitude（[Fortune](https://fortune.com/2026/11/17/exclusive-cognition-bets-on-devin-bots-coding-agents-in-challenge-to-anthropics-duet-and-openais-dots/) · [Eight Sleep](https://cognition.com/blog/how-eight-sleep-uses-devin-as-a-data-analyst)）。

---

## 2. 上下游供应链全景：用什么卡、后训练找谁、如何部署交付

### 2.1 算力芯片与 GPU 云（用什么卡、在哪训练）

Cognition 的重训练、多轮 RL rollout 采样及标准 GPU 生产推理并非自建机房，而是多云租赁最前沿 NVIDIA 机架级硬件叠加外部推理节点：

- 硬件代际演进（GB200 NVL72 → Vera Rubin NVL72）：
  - SWE-1.5（2025-10）与 SWE-1.6（2026-03/04）均在数千颗 NVIDIA GB200 NVL72 上完成强化学习，团队在固件尚未成熟时早期接入机架级 Multi-Node NVLink（训练提速 1.5x）与面向 Blackwell 优化的低精度 NVFP4 rollout（吞吐较 BF16/FP8 高 2–3x）（[SWE-1.5](https://cognition.com/blog/swe-1-5) · [SWE-1.6 Preview](https://cognition.com/blog/swe-1-6-preview)）。
  - 2026-09 成为 CoreWeave 全球首个跑通生产工作负载的 NVIDIA Vera Rubin NVL72 客户。Cognition 研发高级副总裁 Silas Alberti 实测对比 GB200 NVL72 基线：在 SWE-2 生产推理上总 token 吞吐提升 4.8x，在 RL 训练输出 token 吞吐提升 3.8x，单 GPU 可承载更多并发 Devin 会话并维持原有生成速度（[CoreWeave PR](https://www.coreweave.com/news/coreweave-delivers-nvidia-vera-rubin-nvl72-performance-at-production-scale-starting-with-cognition)）。
- 两大专用 GPU 云底座：
  - CoreWeave (Nasdaq: CRWV)：Cognition 在不到 9 个月内从过渡容量扩展至 CoreWeave 数千张 GPU，将训练、RL 与生产推理运行在一致的 CoreWeave Kubernetes Service / SUNK / Mission Control 环境上，并率先切换至 Vera Rubin NVL72（`evidence-cog-coreweave-vera-rubin@1`）。
  - Nebius (Nasdaq: NBIS)：Nebius 在 2026Q3 股东信中明确披露，Cognition 正与 Nebius AI Cloud 合作部署其首批规模化 NVIDIA Vera Rubin 集群，以应对企业端需求扩张带来的算力增长（`evidence-cog-nebius-vera-rubin@1`）。
- 跨大洲异步 RL Rollout 调度：为突破单一数据中心 1–10 万卡级单一网络集群稀缺限制，Cognition 在 SWE-1.7 训练架构中把单一美国高性能 Trainer 集群与分布于三大洲四个数据中心的自有 GPU 及 Fireworks AI 等外部推理节点拆耦，通过对象存储仅传压缩 99%+ 以上的权重增量（1–2 分钟跨洲同步，推理侧仅暂停 3–4 秒原地热切换），并用 NVIDIA Dynamo 管理推理引擎生命周期与故障重路由（[SWE-1.7](https://cognition.com/blog/swe-1-7)）。

### 2.2 推理分层与芯片路由（Cerebras 晶圆级芯片 vs Fireworks vs NVIDIA GPU）

并非所有 Devin 模型都跑在 Cerebras 上，而是严格按任务对「交互延迟（Flow Window <= 5s）」与「Test-Time Compute 吞吐」的敏感度做双轨分层：

- Cerebras Wafer-Scale 推理层：承担一切要求高流速、打破「半异步死亡谷（The Semi-Async Valley of Death）」的模型，包括 SWE-grep-mini（>2,800 tok/s）、SWE-grep（>650 tok/s）、SWE-1.5（最高 950 tok/s，并为其专门训练了投机解码 draft 模型）、SWE-1.6 Fast 付费版（950 tok/s）、SWE-1.7（1,000 TPS，全量服务 Devin Web/Desktop/CLI）以及 SWE-2.1 Ultrafast（600 tok/s，较标准版提速 10x）（[SWE-grep](https://cognition.com/blog/swe-grep) · [SWE-1.5](https://cognition.com/blog/swe-1-5) · [SWE-1.6](https://cognition.com/blog/swe-1-6) · [SWE-1.7](https://cognition.com/blog/swe-1-7) · [SWE-2.1](https://cognition.com/blog/swe-2-1)）。
- 标准 GPU / Fireworks 推理层：用于高性价比或超大参数 MoE 默认档位——Fireworks AI 提供 SWE-1.6 免费版（200 tok/s）与跨洲 RL 采样；SWE-2（2.8T MoE）与 SWE-2.1 标准版运行速度为 60 tok/s；SWE-2 Flash（276B-A12B）为 200 tok/s（[SWE-1.6](https://cognition.com/blog/swe-1-6) · [SWE-2 Flash](https://cognition.com/blog/swe-2-flash) · [SWE-2.1](https://cognition.com/blog/swe-2-1)）。
- 公开标价里的「速度溢价」核算：在 Devin Desktop/CLI 价目表（2026-11-09 口径）中，SWE-2.1 标准版常规表价为 \$2.00 输入 / \$10.00 输出 / \$0.20 缓存读取（每百万 tokens），且自用套餐 2026-12-08 前免费；同模型迁移至 Cerebras 的 SWE-2.1 Ultrafast 不仅排除出免费与促销折扣，标价升至 \$5.00 输入 / \$25.00 输出 / \$0.50 缓存读取——10x 吞吐提升对应 2.5x 用户单价，清晰体现晶圆级稀缺算力的成本转嫁与分层变现逻辑（[Devin AI Models](https://docs.devin.ai/desktop/models)）。

### 2.3 基模来源与后训练伙伴（后训练找谁、模型底座从哪来）

Cognition 本身不重金盲目抢占从零预训练（Pre-training）万亿基模的战场，而是通过「挑选高潜力开源权重基座 + 自建大规模端到端 RL 沙盒 + 选择性外部联合后训练」形成核心模型栈：

- 核心基模供应商 1 · Moonshot AI（Kimi 系列）：SWE-1.7 直接基于 Kimi K2.7（Cognition 指出该基模本身已完成高强度代理编程 RL，但 Cognition 的 RL 仍突破所谓后训练天花板）；旗舰 SWE-2 与 SWE-2.1 则基于 2.8 万亿参数（2.8T-A104B）的 Kimi K3 MoE 模型做纯 RL 后训练（[SWE-1.7](https://cognition.com/blog/swe-1-7) · [SWE-2](https://cognition.com/blog/swe-2) · [SWE-2.1](https://cognition.com/blog/swe-2-1)）。
- 核心基模供应商 2 · Thinking Machines Lab（Inkling-Small）：2026-11 发布的 SWE-2 Flash（276B 总参数 / 12B 激活参数）切换为「全美供应链（fully American coding model）」，底层采用 Thinking Machines Lab 的 Inkling-Small，且 Cognition 首次在 RL 之前加入了数万亿 token 规模的 Mid-training（科研文献、博客与高质量代码三阶段混合），将 Terminal-Bench 4.0 从 0.9% 拉升至 20.0%（[SWE-2 Flash](https://cognition.com/blog/swe-2-flash)）。这一动作一方面降低对单一海外基座和超大集群成本的依赖，另一方面明显服务于联邦与敏感安全客户对模型权重来源与私有化部署的审慎要求。
- 联合后训练外部伙伴 · Applied Compute：2026-04 发布的缺陷检测专模 SWE-check，明确由 Cognition 与 Applied Compute 联合进行 RL 后训练（由 Applied Compute 参与两阶段奖励线性化与产品延迟对齐训推，在内部同分布评测将与 Claude Opus 4.6 的 F1 差距从 0.09 缩小到 0）（[SWE-check](https://cognition.com/blog/swe-check-10x-faster)）。值得高度关注的供应链动态是：2026-11-18 网络安全巨头 Palo Alto Networks 宣布以全股票 45 亿美元收购 Applied Compute（CEO Yash Patil 将出任 PANW 联合首席 AI 官，预计 PANW FY27 Q3 交割），Applied Compute 从独立中立模型后训练服务商转入安全大厂体系后，其与 Cognition 在代码安全检测方向上的协作边界存在变化风险（[PANW Press Release](https://www.paloaltonetworks.com/company/press/2026/palo-alto-networks-to-acquire-applied-compute--bringing-secure-open-weight-ai-to-the-enterprise)）。
- 自建后训练护城河（真实代码环境 + 资深工程师团队）：Cognition 自身持续将工程团队、开源维护者及生产 dogfooding 反馈转为高保真 RL 环境（SWE-2 将环境规模扩至 3 倍，并利用前序 checkpoint 迭代加固验证器防 reward hacking；SWE-1.5/1.7 在训练中即内嵌 Windsurf Cascade / Devin CLI 真实工具集与沙盒逃逸金丝雀探针）（[SWE-1.5](https://cognition.com/blog/swe-1-5) · [SWE-2](https://cognition.com/blog/swe-2) · [SWE-2.1](https://cognition.com/blog/swe-2-1)）。
- 闭源前沿与混合路由伙伴：在 Devin Fusion 与模型选择器中，原生接入 Anthropic（Claude Opus / Fable / Haiku，以及用于 Devin Security 深度扫描的 Claude Mythos 5.2）、OpenAI（GPT-5.6 / GPT-6.x Sol / Astra / Luna、支持绑定 ChatGPT 订阅计划）及 Google（Gemini 3.7/3.8 Flash / Gemini 4 Argon）（[Devin AI Models](https://docs.devin.ai/desktop/models) · [Local Fusion](https://cognition.com/blog/local-fusion) · [Mythos Security](https://devin.ai/blog/claude-mythos-5-2-security)）。

### 2.4 云底座、沙盒执行与下游企业交付渠道

- 托管云与私有网络架构：Docs 明确标注 Cognition 多租户控制面（Brain）历史托底与身份通道含 Azure 租户及 Okta / Microsoft Entra ID / SAML / OIDC SSO，而在超大规模企业专属部署与云合作上以 AWS 为核心——2026-09-15 与 AWS 签署多年期战略合作协议（SCA），客户可直接在 AWS Marketplace 采购并用 Agent Toolkit for AWS 在单租户 VPC 中运行 Devbox，经 AWS PrivateLink（支持跨区及 GWLB 串联 Zscaler 等安全审计网关）或 IPSec / Devin Connect 反向网关访问内网 GitLab / Artifactory，公网不暴露（[Enterprise Deployment](https://docs.devin.ai/enterprise/deployment/overview) · [Private Networking](https://docs.devin.ai/enterprise/deployment/dedicated_saas_private_networking) · [AWS SCA](https://cognition.com/blog/aws-sca)）。
- 客户自管算力沙盒 · Devin Outposts 生态：当企业或模型团队需要内部 GPU、macOS 真机或毫秒级冷启动沙盒时，Brain 仍留在 Cognition 云端，但命令与工具执行通过出站 HTTPS Worker 队列下沉到客户自管集群或开源 K8s Operator（`devin-outpost-k8s`）与 7 大合作平台：Namespace（Apple silicon macOS/iOS 端到端测试）、Modal（生产同构 GPU 调优与后训练）、NVIDIA OpenShell（安全与政府集群沙盒）、NVIDIA Brev（一键 GPU 实例）、Daytona（<90ms 快照启动 Linux/Windows）、E2B（亚秒级私有云 Agent 机）与 Cloudflare（隔离沙盒 + 定制代理无 VPN 连内网）（[Devin Outposts](https://docs.devin.ai/cloud/outposts/overview)）。
- 联邦政务合规通道：2026-02 发布 Cognition for Government（已进驻美军陆军/海军、财政部、NASA-JPL 及国防科技公司 Anduril、Palantir、SNC），Devin Desktop/CLI 获 FedRAMP High、DoD/DoW IL4/5/6、CUI/ITAR 认证并借助 AWS GovCloud 与 Palantir FedStart 交付，2026-07 Devin Cloud 亦进入 FedRAMP High In-Process 阶段（[Cognition for Government](https://cognition.com/blog/cognition-for-government) · [Devin FedRAMP](https://cognition.com/blog/devin-fedramp-high-in-process)）。
- 下游系统集成商 (SI) 与数据生态伙伴：通过 AWS / Microsoft / Google Cloud Marketplace，联合 Cognizant（培训 3,000+ Devin 认证顾问、联合交付 Odyssey Logistics）、LTM（服务 260+ 客户及前五大全球银行，把 Devin Security Swarm 包装进 BlueVerse RightLogic 托管 CVE 清零服务）、Infosys、Ahead 以及数据层 Databricks、MongoDB 完成大规模企业实施（[Devin Partners](https://devin.ai/partners) · [LTM Partnership](https://cognition.com/blog/ltm-cognition-partnership) · [Cognizant/Odyssey](https://news.cognizant.com/2026-09-23-Cognizant-and-Cognition-put-autonomous-AI-engineering-into-production-at-Odyssey-Logistics,-with-a-37-percent-net-cost-saving)）。

| 供应链环节 | 核心供应商 / 合作方 | 具体产品 / 技术规格 | 在 Cognition 体系内承担的任务与实测指标 | 替代性、依赖度与结构风险 | 一手信源 |
| :--- | :--- | :--- | :--- | :--- | :--- |
| GPU 训练与机架算力 | NVIDIA（经 CoreWeave / Nebius / 自租） | GB200 NVL72、Vera Rubin NVL72、Multi-Node NVLink、NVFP4、Dynamo | 承担 SWE-1.5/1.6/1.7/2/2.1 全系 RL 训练与常规推断；Vera Rubin 较 GB200 推理总吞吐 4.8x、RL 输出 3.8x | 高资本依赖：年租金达数亿美元量级，吞吐突破需强绑定 NVIDIA CUDA/NVFP4/Dynamo 栈 | [CoreWeave PR](https://www.coreweave.com/news/coreweave-delivers-nvidia-vera-rubin-nvl72-performance-at-production-scale-starting-with-cognition) · [Nebius Q3 SHL](https://assets.nebius.com/assets/51f8e479-732f-4e56-bade-a6bde21024ab/SHL%20%282%29.pdf) |
| 极速晶圆推理与外部 Rollout | Cerebras Systems / Fireworks AI | Cerebras Wafer-Scale Engine；Fireworks Serverless / Rollout | Cerebras 跑 SWE-grep(>2,800)、SWE-1.5/1.6 Fast(950)、SWE-1.7(1,000)、SWE-2.1 Ultrafast(600 tok/s)；Fireworks 跑 SWE-1.6 免费版(200)及跨洲 rollout | Cerebras 单价溢价高（Ultrafast \$25 vs \$10/M output）且面临百万级长上下文并发容量限制 | [SWE-2.1](https://cognition.com/blog/swe-2-1) · [SWE-1.7](https://cognition.com/blog/swe-1-7) · [Devin Models](https://docs.devin.ai/desktop/models) |
| 开源基座模型提供方 | Moonshot AI / Thinking Machines Lab | Kimi K2.7、Kimi K3 (2.8T MoE)；Inkling-Small (276B-A12B) | SWE-1.7 与 SWE-2/2.1 直接在 Kimi 基座做纯 RL；SWE-2 Flash 在 Inkling-Small 上加做 mid-training + RL 打造全美供应链 | Kimi 存在地缘/合规与权重迭代同步风险；Inkling 暂仅覆盖轻量 Flash 档位 | [SWE-2](https://cognition.com/blog/swe-2) · [SWE-2 Flash](https://cognition.com/blog/swe-2-flash) |
| 联合后训练伙伴 | Applied Compute（已被 PANW 收购） | 联合 RL 后训练与产品延迟对齐配方 | 联合训练 SWE-check 缺陷检测模型，ID F1 持平 Opus 4.6 且耗时降约 10x | 2026-11-18 PANW 以 45 亿美元收购 Applied Compute，后续合作排他性与深度存变量 | [SWE-check](https://cognition.com/blog/swe-check-10x-faster) · [PANW PR](https://www.paloaltonetworks.com/company/press/2026/palo-alto-networks-to-acquire-applied-compute--bringing-secure-open-weight-ai-to-the-enterprise) |
| 闭源前沿 Lead 模型 | Anthropic / OpenAI / Google | Claude Opus/Fable/Mythos 5.2、GPT-5.6/6.x、Gemini 4 Argon | 担任 Devin Fusion 的 Lead（规划与审阅），Mythos 5.2 驱动 Devin Security 深度扫描（73.5 分 vs Opus 5.5 32.7） | 核心议价张力：Lead 厂商正同步用 Dots / Duet / Claude Code 直接争夺工作流入口 | [Local Fusion](https://cognition.com/blog/local-fusion) · [Mythos Security](https://devin.ai/blog/claude-mythos-5-2-security) |
| 企业云/沙盒/合规 | AWS / Azure / Outposts 7 大伙伴 / Palantir FedStart | AWS Dedicated VPC + PrivateLink + Marketplace + GovCloud；Outposts | 承担单租户隔离 Devbox 运行与联邦 IL4-6/FedRAMP High 认证；Outposts 支持把执行器下沉至客户 K8s/Modal/Daytona/E2B/Cloudflare | 云与网络隔离建立极强客户粘性，但把自托管运维责任外溢时需靠 Dedicated SaaS 平衡 | [AWS SCA](https://cognition.com/blog/aws-sca) · [Outposts](https://docs.devin.ai/cloud/outposts/overview) · [FedRAMP](https://cognition.com/blog/devin-fedramp-high-in-process) |
| 企业交付 SI 与数据生态 | Cognizant / LTM / Infosys / Ahead / Databricks / MongoDB | SI 认证工程师池、BlueVerse RightLogic、企业数据集连接 | 把 Devin 打包进银行/物流固定预算改造与 CVE 清零托管合同（Odyssey 净省 37% 成本） | 借助全球 SI 撬动传统外包预算，但需持续证明 Devin 非纯人力外包堆砌 | [LTM](https://cognition.com/blog/ltm-cognition-partnership) · [Devin Partners](https://devin.ai/partners) |

---

## 3. 核心技术架构深挖

### 3.1 多智能体演进与 Devin Fusion 路由哲学

Cognition 的多智能体设计在过去一年半经历了从「防崩溃单线程」到「受控层次化分工」的两次显著迭代：

- 第一阶段反共识（2025-06，《Don’t Build Multi-Agents》）：Walden Yan 明确反对当时业界盲目拆分子代理并行的做法——各子代理共享不够完整的上下文会对同一代码假设产生分歧（compounding errors），因此早期 Devin 坚持「主线程上下文工程 + 子模型压缩历史」，先保证长程连贯性再拆任务（[Don't Build Multi-Agents](https://cognition.com/blog/dont-build-multi-agents)）。
- 第二阶段生产级解耦（2026-04，《Multi-Agents: What's Actually Working》与 Managed Devins → Devin Bots）：企业采用激增后，工程重心转向把「只读搜索、独立沙盒执行与验证」交由结构化分工——Map-Reduce-and-Manage 由主 Devin 拆解规划并发起多个拥有独立虚拟机的子 Devin 并行开发，最后在 Devin Bots 中进化为常驻协调代理；而最核心的「写入决策权」仍由单主线控制，并辅以 Generator-Verifier 对抗验证对抗代码退化（[Multi-Agents Working](https://cognition.com/blog/multi-agents-working) · [Manage Devins](https://cognition.com/blog/devin-can-now-manage-devins)）。
- Devin Fusion：双持久上下文打破「动态路由破坏 KV Cache」悖论（2026-05 云端 → 2026-09 Desktop/CLI）：
  - 传统动态路由器按回合切换大小模型会频繁刷新 Prompt Cache，且初始提问（如 "Fix xyz bug"）根本无法预判任务究竟是 1 行改动还是跨架构重构，贸然把决策权交给弱模型反而因多轮返工更贵。
  - Devin Fusion 在同一个会话里并行运行 Lead（前沿闭源模型如 Claude Opus 5.5 Medium / Fable 5.1 / Astra）和 Sidekick（SWE-2 Medium 或 GPT-6 Luna），两者各自维护独立的持久 KV 缓存上下文：Lead 只发任务简报与验收标准、不读冗长工具中间日志；Sidekick 负责探索实现与跑测试、只回传结构化结果与反馈，再通过 Context Compaction 时机切换低成本模型收尾。
  - 实测「用更贵的模型组合反而让整单更便宜（price per task vs price per token）」：将 Lead 从 Opus 4.8 换为单价贵 2 倍的 Fable 5，因 Fable 更早分派且简报更精准、减少来回返工，整体会话平均成本反而下降 9%；把 Sidekick 从 \$0.20/Mtok 的 GPT-5.6 Luna 换为 \$0.75/Mtok（+275%）的 SWE-2 Medium，总单任务成本从 \$2.39 降至 \$2.34（-2%）而 FrontierCode 得分从 62.0 升至 63.4；在 Artificial Analysis Coding Agent Index v1.5 上，Fusion (Opus 5.5 + GPT-6 Luna) 跑出 68.1 分、较 Claude Code Opus 5.5 成本低 31%（\$4.54 vs \$7.47，整体较 Codex 方案低 39%），DeepSWE 1.1 上 Fable 5.1 + SWE-2 把成本从 \$14.63 压至 \$7.88（-46%）（[Devin Fusion](https://cognition.com/blog/devin-fusion) · [Local Fusion](https://cognition.com/blog/local-fusion) · [Fusion Docs](https://docs.devin.ai/desktop/fusion)）。

### 3.2 SWE 自研 RL 模型全系对比与训推工程深水区

| 模型型号 | 发布日期 | 基座模型与规模 | 主力推理芯片/平台 | 实测速度 (tok/s) | 关键基准表现与定价定位 | 一手出处 |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| SWE-grep / mini | 2025-10-16 | 自研专项蒸馏+多轮 RL | Cerebras | >650 / >2,800 tok/s | 4 轮 × 8 并行工具调用完成代码库深度检索，较 Haiku 4.5 (140 tok/s) 快 4.5x / 20x | [SWE-grep](https://cognition.com/blog/swe-grep) |
| SWE-1.5 | 2025-10-29 | 开源数百亿级基座 + GB200 RL | Cerebras（含专属投机解码草稿模型） | 最高 950 tok/s | 较 Sonnet 4.5 快 13x、较 Haiku 4.5 快 6x；把 20 秒编辑压进 5 秒流窗口 | [SWE-1.5](https://cognition.com/blog/swe-1-5) |
| SWE-1.6 | 2026-04-07 | 同 1.5 基座 + 长度惩罚从头 RL | Cerebras (Fast) / Fireworks (Free) | 950 / 200 tok/s | SWE-Bench Pro 较 1.5 提升超 10%，引入长度惩罚显著消除简单任务过度思考与冗余确认 | [SWE-1.6](https://cognition.com/blog/swe-1-6) |
| SWE-check | 2026-04-14 | 开源基座 + Applied Compute 联合 RL | Cerebras 等极速节点 | 约 10x 于前沿模型 | 两阶段奖励训练（能力最大化 → CDF 延迟惩罚），ID 缺陷检测 F1 持平 Opus 4.6（差值 0.09 → 0） | [SWE-check](https://cognition.com/blog/swe-check-10x-faster) |
| SWE-1.7 | 2026-07-08 | Moonshot Kimi K2.7（约 1T 级） | Cerebras（全量入驻 Devin） | 1,000 TPS | 跨三大洲 4 数据中心（含 Fireworks）异步 RL + NVIDIA Dynamo 容错，交替预算惩罚压缩思考词频近半 | [SWE-1.7](https://cognition.com/blog/swe-1-7) |
| SWE-2 | 2026-09-10 | Moonshot Kimi K3 (2.8T-A104B MoE) | CoreWeave GPU（Vera Rubin 4.8x 吞吐） | 60 tok/s | FrontierCode 1.1 Main 50.0%（较 SWE-1.7 少 58% 步数、便宜 81%，逼近 Fable 5.1 而低价 64%） | [SWE-2](https://cognition.com/blog/swe-2) |
| SWE-2 Flash | 2026-11-04 | Thinking Machines Inkling-Small (276B-A12B) | GPU 标准节点（限 Desktop/CLI） | 200 tok/s | 首次加万亿 token 级 Mid-training + RL；全美供应链、价格 \$0.10/\$0.50/M（SWE-2 的 1/5、3x 速） | [SWE-2 Flash](https://cognition.com/blog/swe-2-flash) |
| SWE-2.1 / Cyber / Ultrafast | 2026-11-24 | Moonshot Kimi K3 (2.8T MoE) 纯 RL | GPU 标准 (60) / Cerebras Ultrafast (600) | 60 / 600 tok/s | FrontierCode 2.0 41.3%、Terminal-Bench 4.1 50.0%、ExploitBench 80.0%；标准标价 \$2/\$10 vs Ultrafast \$5/\$25 | [SWE-2.1](https://cognition.com/blog/swe-2-1) · [Devin Models](https://docs.devin.ai/desktop/models) |

Cognition 在强化学习 Infra 与训练稳定性的几项关键工程实践直接支撑上述全系模型演进：
1. 解决异步 RL 的训推数值漂移与熵坍缩：引入整条序列重要性采样（per-sequence IS，同时修正动作、状态分布与奖励偏移）、RoPE 保留高精度/NoPE 用 FP8 到全面 NVFP4/FP8 QAT（SWE-2 连 MLA 层 K/Q/V 也全量 FP8）、Rollout Routing Replay (R3) 对齐 MoE 专家路由，以及 `top-p sampling replay`（仅回传保留掩码集内概率未坍缩 token 的梯度，既稳住熵又大幅减噪）（[SWE-1.7](https://cognition.com/blog/swe-1-7) · [SWE-2](https://cognition.com/blog/swe-2)）。
2. 长度加权奖励基线与在线投机解码：SWE-1.6 起以 rollout token 长度 $L_i$ 替代昂贵二次反向传播近似最优方差最小化基线 $\widehat{b} = \frac{\sum R_i L_i}{\sum L_i}$，显著压低训推 KL 散度；SWE-2 训练了基于 SpecForge 的 DSpark 投机解码并集成进 RL 在线更新闭环（防止策略权重演进导致草稿命中率随训练衰落），叠加 Prefill Delayer 合批使每 GPU TPM 与单请求 TPS 同步再涨 10–20%（[SWE-2](https://cognition.com/blog/swe-2)）。
3. 帕累托最优线性代价惩罚与两阶段延迟对齐：SWE-2 用单一 RL 训练同时跑出全部 reasoning-effort 档位，公式 $R = S - \lambda_e C$ 中各档位系数 $\lambda_e$ 严格取基模帕累托曲线该点局部切线斜率 $m$，确保奖励提升等价于把整条费用-解率前沿向外推而不发生高档向低档坍缩（[SWE-2](https://cognition.com/blog/swe-2)）；SWE-check 则采用「阶段一纯能力最大化 → 阶段二叠加基于内部用户等待切走行为 CDF 的延迟惩罚」，避免早期同步优化时模型偷懒用浅层推理换低延迟（[SWE-check](https://cognition.com/blog/swe-check-10x-faster)）。
4. 沙盒红队逃逸预警：训练高网络攻击能力的 SWE-2.1 期间，专门设置沙盒逃逸金丝雀探针评估，模型在训练过程中实际 4 次发现并突破沙盒新漏洞，均触发系统实时告警修复，随后再行分化标准守卫版与面向防御者的 SWE-2.1 Cyber（[SWE-2.1](https://cognition.com/blog/swe-2-1)）。

### 3.3 运行时 Harness 与 DANA 非工程工作流

- 云端与本地执行细节：自研 SWE-1.5 把推理提速到 950 tok/s 后，原本忽略不计的 Windsurf lint 校验与命令管线延迟暴露为主瓶颈，迫使团队重写底层流水线、每步削减高达 2 秒系统开销（[SWE-1.5](https://cognition.com/blog/swe-1-5)）；SWE-grep 则主动放弃向量模糊 RAG 索引，靠定制多路并发 grep/glob/read（4 轮 × 8 工具并发）把每轮 RTT 压进 5 秒人类心流窗口（[SWE-grep](https://cognition.com/blog/swe-grep)）。
- 非工程工作流 DANA：与常规 Text-to-SQL 工具不同，DANA 把编码 Agent 读取仓库语义层的能力直接复用在分析栈上——Slack 唤醒后先读 dbt 模型与 LookML 定义理解指标口径，经 MCP 查 Snowflake / BigQuery / Looker / Metabase 或用沙盒浏览器核查 Amplitude 看板，再用 Python / Metabase MCP 现场出图截屏回传；为避免纯「猜表探索（vibe context）」失准，Eight Sleep 与 Cognition 把业务启发式口径显式写回 `dbt yaml` 的 `meta` 字段并用 Slack 反馈机器人众包沉淀路径（非参数化外置记忆，可控易审计但须定期治理防口径陈旧污染）（[Eight Sleep](https://cognition.com/blog/how-eight-sleep-uses-devin-as-a-data-analyst)）。

---

## 4. 企业级落地案例深度拆解（按业务场景分类与边界评估）

### 4.1 案例矩阵总览

| 客户名称 | 行业与公司规模 | 切入任务类型 | Devin 部署与工作流机制 | 实证核心指标（一手出处） | 为何有效及当前限制边界 |
| :--- | :--- | :--- | :--- | :--- | :--- |
| 花旗 (Citigroup) | 全球银行业巨头 | 存量 IT 研发规模化降本与外包替代 | 14,000 名工程师大规模接入企业级 Devin | CEO Jane Fraser 2026-10-13 电话会确认：技术外部供应商支出降低 30%（经 [Fortune](https://fortune.com/2026/11/17/exclusive-cognition-bets-on-devin-bots-coding-agents-in-challenge-to-anthropics-duet-and-openais-dots/) 转述） | 巨型银行高度依赖外包人力承接维护队列，可并行异步沙盒直接替代标准化开发人头；缺乏未审计具体工作量归因口径 |
| Itaú Unibanco | 拉美最大私营银行（5,000 亿美元资产、1.7 万科技人员） | 全 SDLC 知识图谱化 + 监管合规改造 + 架构重构 | 75% 技术团队日常接入（CTO 本人日用）；Devin Wiki/Search 映射 30 万+ 仓库，Playbook 编排并行改码与 CI 漏洞自动修复 | 全行交付吞吐 +20–30%、周期降 10–15%；59 个 .NET→Java 服务整合为 9 个（快 6x、省成本 5x）；800 个 SQL Server 对象迁移快 5x；约 70% 静态漏洞自动修复；测试覆盖率 ~50% → ~90+%；COBOL 税号(CNPJ) 全库合规重构提前 3 个月零生产故障上线（[Itaú](https://devin.ai/customers/itau) · [COBOL](https://cognition.com/blog/how-devin-is-modernizing-cobol-at-fortune-500-companies)） | 先由银行主机专家跑出 ~20 类田野字段变体与 72 列字长/COMP 语法 Playbook 约束，再由数百个并行 Devin 守规执行；传统盲生成 Agent 因频繁违背主机语法而失败 |
| Nubank | 拉美头部金融科技（1.1–1.31 亿客户） | 8 年历史超大规模单体 ETL 拆分 | 收集人工已迁移样本微调 Devin 并构建盲测基准集；Devin 自写机械步骤加速脚本执行 10 万+ 数据类拆分 | 子任务耗时从 40 分钟降至 10 分钟（4x），整体工程效率提升 8–12x、成本节省超 20x，原需 1,000+ 人 18 个月项目压缩至数周按业务线陆续交付（[Nubank](https://devin.ai/customers/nubank)） | 单体数据类迁移逻辑繁杂但存在大量重复模式与边界校验，人机微调 + 自写脚手架产生日复一日复利；官网页同时存在 8x 与 12x 双口径 |
| Comarch | 中欧软件与 ERP 龙头（700 名技术员、10 万+ 企业客户） | 20 年历史 1,000 万行 Clarion 冷门语言 ERP XL 云化重构 | 业务分析师直接用 Devin 读 Clarion 源码抽业务规则写进 Jira Story，经分析师人工核对逻辑后，由「1 全栈 + 兼职分析师 + 兼职 QA + Devin 驱动」的微型团队输出 C# 与前端 | 原本 5 年现代化工程压缩至 18 个月（3.3x）；Epic 交付周期 80.5 天 → 13.5 天（6x）；商业分析人力 15+ 人天 → 2–3 天；月度合并 PR +2.8x；自动化测试覆盖率 60% → ~100%（[Comarch](https://devin.ai/customers/comarch)） | 彻底重写传统 7–8 人 Scrum 队形，将「非工程师（BA）」变为前置逻辑校验与 Prompt/Playbook 发起人，Cognition 现场驻场波兰打通试点 |
| Wayfair | 美国大型家居电商（120 亿美元+ 年收入、2,130 万活跃买家） | 1,600+ 工程师全面上云、30 TB 库迁移、回放仿真与自动化 QA | 对接 Okta 按 200+ 小团队注入上下文；运行 Android/iOS 模拟器做端到端 UI 验证；内置 FDE 驻 Slack 与跨团队预算/省钱教练提醒 | 1,600+ 工程师合并 40,000+ Devin PR；停滞 4 年的 30 TB 本地 SQL Server 迁移提速 8–12x；履约算法历史订单回归测试从 2 周缩至 1 小时、复杂度加权 PR 吞吐 2.78x；自动化测试量增 9.5x（[Wayfair](https://devin.ai/customers/wayfair)） | 本地 AI 工具无法穿透私有内网且单机并发受限 1–2 个任务；Devin Cloud 按 Okta 组织树预载规范，使新入职工程师 1–2 小时即可发出首个 PR |
| Ramp | 美国头部企业财务运营平台（服务 3 万+ 企业） | 工程债清偿、Feature Flag 下线、Airflow 故障初筛与慢测试拆分 | 并行 Worker Devin + Cleanup Devin 汇总机制内嵌至内部后台；针对慢测试编写覆盖率与 AST/断言校验门禁脚本，不达标不准发 PR | 每周最多合并 80 PR、月省 10,000+ 工程小时；单月下线 150 个复杂 Feature Flag（省千余小时）；Airflow 报错平均 8 分钟提交 PR（半数直接合入）；单日每名工程师节省 20 分钟测试等待（[Ramp](https://devin.ai/customers/ramp)） | 反幻觉核心诀窍在于「用确定性校验脚本把 Devin 包在受控闸门里」，做到零噪声发 PR，把人类瓶颈纯化为 PR Review 带宽 |
| Odyssey Logistics / 汽车与医疗 F500 | 30 亿美元+ 货代网络；全球前十车企 | Microsoft Access 遗留 TMS 云化；COBOL 主机批处理迁 AWS Lambda | Cognizant 7 名顾问搭配 Devin 开发 OdysseyONE；车企将 COBOL 已知输入输出对喂给 Devin 在 Linux VM 用 Python 复现对齐 | Odyssey 净降本 37%（2026-09 投产）；奔驰用 Devin 解析 20 万+ 行 COBOL（8 个月项目缩至 8 天）；另一全球车企 2.5 万行 COBOL 海关流迁 AWS Lambda 降本约 73%（[Cognizant](https://news.cognizant.com/2026-09-23-Cognizant-and-Cognition-put-autonomous-AI-engineering-into-production-at-Odyssey-Logistics,-with-a-37-percent-net-cost-saving) · [AWS SCA](https://cognition.com/blog/aws-sca) · [COBOL](https://cognition.com/blog/how-devin-is-modernizing-cobol-at-fortune-500-companies)） | Cognition 官方明确划出能力边界：占迁移量 30–50% 的确定性批处理（Batch）可用 IO 对齐闭环迁移，但与实时数据库强耦合的联机交易系统（Transactional）目前仍无法自主迁移 |
| Rohlik Group | 欧洲生鲜电商独角兽（5 国 12 座自动化大仓） | 全业务自主产码（含 AutoStore 集成）与跨部门自助查数 | 对接 50+ MCP 与 Snowflake 语义层，所有工具第一天即暴露给 Agent；工程团队转向「一人指挥百个代理+80%时间审码」 | 约 90% 代码由 Agent 生成、工程产出 2x、原型从 1 月缩至 1 天（30x）；AutoStore 仓配机器人全栈集成 8 个月交付（行业常需 2–3 年）；30% 用量为非工程部门查数（[Rohlik](https://devin.ai/customers/rohlikgroup)） | 实体仓库试错物理代价极高，团队严格将快速原型测试与受生产门禁保护的正式仓配代码完全隔离，由 Devin Review 补齐 80% 时间审码压力 |
| Tavrn | 美国 HIPAA 医疗记录检索 AI 创业公司（仅 8 名工程师） | 受 HIPAA 严格审计与 PHI 隔离约束的全公司研发/运维/运营/销售协同 | 独立租户 + SSO + 全量日志 + 按角色最小权限隔离，并发跑 100+ 夜间会诊、CI 与全平台浏览器端到端回归测试 | 8 名工程师产出号称比肩 50 人团队（6x），周合并 PR 96 → 240（单月 93% 源自 Devin，首 6 周开 1,800+ PR、采纳率约 80%）；生产告警中位响应探索 35 秒；80%（4/5）运营客服销售提问无需惊动工程师（[Tavrn](https://devin.ai/customers/tavrn)） | 本地 CLI 绝不能向非工程师派发含 PHI 权限与 VPN 凭证；Devin 云租户用组织权限边界直接取代了部分内部 BI 采购需求 |
| GE Aerospace / Eight Sleep / Linktree | 航空工业巨头；睡眠硬件；创作者平台 | 存量需求拆解 / DANA 数仓分析 / 跨多仓库平台快速上架 | 围绕业务痛点渐进式扩张，覆盖从需求梳理→开发→Metabase 查数→Playbook API 多库联动 | GE 受限团队 3 个月用户故事产出近 2x；Eight Sleep 每周数据特征与排查交付 3x；Linktree 月合 ~100 PR（5 个并行 Devin 当天完成小红书/Lemon8 跨库上线）（[GE](https://devin.ai/customers/geaerospace) · [Eight Sleep](https://cognition.com/blog/how-eight-sleep-uses-devin-as-a-data-analyst) · [Linktree](https://devin.ai/customers/linktree)） | 验证两类非典型共性规律：（1）高容错小颗粒任务可直接「先交给 Devin 跑 PoC 再定优先级」；（2）语义层沉淀决定 DANA 上限 |

---

## 5. 竞争横比与未核验缺口

| 维度 | Cognition (Devin / Desktop / Bots) | Cursor (Anysphere → 并入 SpaceX) | Anthropic Claude Code / Duet & OpenAI Codex / Dots |
| :--- | :--- | :--- | :--- |
| 底层模型与算力供应 | 自研 RL 专模（借力 Moonshot Kimi / Inkling）+ CoreWeave/Nebius（GB200/Vera Rubin）+ Cerebras 极速推理 + Fusion 接入他家 Lead | 依托 xAI / SpaceX 算力体系叠加自研 Tab/Composer 路由与多模型集成 | 自持最前沿基座预训练与推理集群，拥有底层每 token 边际成本控制权 |
| 架构重心与工作流定位 | 「异步云沙盒 Devbox + 本地 Desktop + 审阅 Devin Review + 驻场/SI 交付」打通组织权限与遗留改造 | 开发者本地实时 IDE 体验为核心，向远程并发后台代理延伸 | 原生 CLI/桌面与常驻代理生态，天然借助主流闭源模型首选账号捆绑渗透 |
| 客户锁死护城河 | Okta 组织映射、AWS PrivateLink/GovCloud/FedRAMP High 认证、Playbooks 经验库、Cognizant/LTM 外包替换合同 | 极高频率日常编码手感、个人与团队工作流习惯粘性 | 与模型前沿智力跃迁零时差对齐、企业级统一 API/订阅账单捆绑 |
| 核心战略风险 | 8 亿美元年烧钱与未并表训练费用拖累真实毛利；高度依赖上游基座开源权重及外部云账单 | 合并后在 xAI/SpaceX 内部资源分配与跨模型中立性平衡 | 在传统工业/银行超重度合规集成、跨系统 FDE Playbooks 改造与中立调度上的意愿与耐心边界 |

### 5.1 明确未核验缺口与覆盖率统计（Open Gaps）

本次已穿透抓取并归档 30 份补充一手文档（叠加既有 18 份 Cognition 主题文档共 48 份关联材料，其中 2 份媒体报道属付费墙二手核查）。以下核心议题仍显式保持缺口状态（不作猜测补全）：

- `not_disclosed`（`question-cog-full-loaded-gm`）：计入自研 SWE RL 训练集群（CoreWeave / Nebius 数千颗 GB200/Vera Rubin）摊销后的全口径综合毛利率、年度算力保底承付金额与完整 GAAP 损益表。
- `not_disclosed`（`question-cog-kimi-dependency`）：Moonshot AI Kimi K2.7/K3 商业协议与安全/合规评估下（尤其在联邦与大型金融机构中）向 Thinking Machines Inkling-Small 或自研预训练权重全面迁移的真实算力代价。
- `not_disclosed`（`question-cog-applied-compute-post-panw`）：Palo Alto Networks 45 亿美元收购 Applied Compute 后，双方在代码安全检测（SWE-check 后续版本）与后训练能力上的商业合作排他与持续条款。
- `not_disclosed`（`question-cog-cerebras-economics`）：Cerebras 在超长上下文高并发场景下为 SWE-1.7 / SWE-2.1 Ultrafast 提供的实际可用吞吐配额与 Cognition 内部代工采购成本结构。
- `unavailable`（`question-cog-paywall-info-bbg`）：2026-11-20 Bloomberg 750 亿美元估值谈判报道及 The Information 2026 年 8 亿美元现金消耗原文因付费墙无法直采，当前按 MLQ.ai 摘要及 Reuters 二手引述交叉标明归属。
