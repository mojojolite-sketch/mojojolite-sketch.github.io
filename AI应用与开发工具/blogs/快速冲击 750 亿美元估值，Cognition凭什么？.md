---
title: "快速冲击 750 亿美元估值，Cognition凭什么？"
type: blog_digest
sector: "AI应用与开发工具"
source: "Cognition · Devin · Cognizant · Fortune"
published_at: "2026-11-27"
raw_sha256: "169ee4638425e463dd46fbf3e5bc96c7fd08d5a2a9db5a45df0365efb94cf58d"
material_version: "digest-material-169ee4638425e463dd46fbf3e5bc96c7fd08d5a2a9db5a45df0365efb94cf58d@1"
origin_url: "https://cognition.com/blog/series-e"
trigger_source: "具身阿尔法"
trigger_url: "https://mp.weixin.qq.com/s/OvCZqKhzlbsnHwg445RwDg"
user_comments: ""
status: "processed_with_gaps"
primary_topic: "AI编程与多Agent协作"
secondary_topics: ["企业交付、评测与FDE治理"]
topic_confidence: 0.4221
stack_claims: [{"layer_id": "sandbox_isolation", "pattern_id": "cloud_microvm_sandbox", "system": "Devin Cloud", "entity": "Cognition", "mechanism": "独立异步云端沙盒配合 Devin Desktop 与 FDE 交付承接企业遗留系统迁移", "metric_or_tradeoff": "Wayfair 1,600+ 工程师合并 40,000+ PR；花旗技术供应商支出降 30%", "source_url": "https://cognition.com/blog/series-e"}, {"layer_id": "model_inference_routing", "pattern_id": "lead_sidekick_fusion", "system": "Devin Fusion", "entity": "Cognition", "mechanism": "前沿模型规划审查配高性价比 Sidekick 执行代码并维护双持久缓存上下文", "metric_or_tradeoff": "单任务成本约 1.35 美元，较高配前沿模型降约 60%", "source_url": "https://cognition.com/blog/devin-fusion"}]
---

<a id="digest-169ee4638425e463"></a>
# 快速冲击 750 亿美元估值，Cognition凭什么？

2026-11-27 · Cognition · Devin · Cognizant · Fortune · 有来源缺口

[本地原件归档](../../../raw/169ee4638425e463dd46fbf3e5bc96c7fd08d5a2a9db5a45df0365efb94cf58d) · 固定材料版本 `digest-material-169ee4638425e463dd46fbf3e5bc96c7fd08d5a2a9db5a45df0365efb94cf58d@1` · [一手原站](https://cognition.com/blog/series-e) · [触发线索（具身阿尔法）](https://mp.weixin.qq.com/s/OvCZqKhzlbsnHwg445RwDg)

## 深度拆解与复核

- 口径与利益：本拆解以一级一手信源为据，直接穿透核验 Cognition 官方公告（[E 轮融资 2026-09-08](https://cognition.com/blog/series-e) · [10 亿 ARR 2026-09-25](https://cognition.com/blog/1b-run-rate) · [并购 Windsurf 2025-07-14](https://cognition.com/blog/windsurf) · [Devin Desktop](https://cognition.com/blog/introducing-devin-desktop) · [Devin Fusion](https://cognition.com/blog/devin-fusion) · [Devin 嵌套管理](https://cognition.com/blog/devin-can-now-manage-devins) · [Devin Review](https://cognition.com/blog/devin-review) · [DeepWiki](https://cognition.com/blog/deepwiki)）、[Cognizant × Odyssey 官方通稿（2026-09-23）](https://news.cognizant.com/2026-09-23-Cognizant-and-Cognition-put-autonomous-AI-engineering-into-production-at-Odyssey-Logistics,-with-a-37-percent-net-cost-saving) 及 [Fortune 对 CEO Scott Wu 专访（2026-11-17）](https://fortune.com/2026/11/17/exclusive-cognition-bets-on-devin-bots-coding-agents-in-challenge-to-anthropics-duet-and-openais-dots/)；微信公众号仅作触发线索，未采用其二手转述作主信源。对受付费墙限制的彭博 11-20 报道及 The Information 成本口径，以 [MLQ.ai 750 亿摘要](https://mlq.ai/news/cognition-is-in-talks-to-raise-at-a-75-billion-valuation-two-months-after-its-48-billion-round/) 与 [E 轮成本核查](https://mlq.ai/news/cognition-raises-more-than-2-billion-at-a-48-billion-valuation-as-ai-coding-competition-widens/) 交叉印证并登记来源缺口，同时对照 [Cursor (Anysphere)](../entities/companies/Cursor%20%28Anysphere%29.md) 与 [Conductor 导读](Meta收购Conductor：AI编程的下一场竞争，是让多个Agent一起干活.md)。官网案例与高管访谈处于对抗基座实验室整合的融资叙事场景，ARR 均未经过独立 GAAP 审计。
- 核心判断：==Cognition 估值半年跳升近 3 倍至传闻 750 亿美元（约 75x 10 亿 ARR），靠的不是编辑器席位，而是「Devin Cloud 异步沙盒 + Devin Desktop + Devin Fusion 路由 + FDE/外包商联合交付」切入银行与巨头遗留系统替换预算（花旗 1.4 万工程师降 30% 供应商支出）；但 50% 企业毛利率不含自研模型训练成本与约 8 亿美元年现金消耗，且正面承压 OpenAI Dots 与 Anthropic Duet 向下挤压==。

### 一、业务切口与核心机制

1. 团队与入口演进：Cognition 成立于 2024 年 1 月，三位 IOI 金牌创始人包括 CEO Scott Wu（前 Lunchclub CTO）、CTO Steven Hao（Scale AI 早期工程师）与 Walden Yan（前早期 Cursor 工程师）。Devin 于 2024 年 3 月亮相、12 月商用；2025 年 7 月收购 Windsurf（8,200 万美元 ARR、350+ 企业客户）补齐编辑器入口，2026 年 6 月重构为基于 Agent Command Center 与开放 ACP 协议的 Devin Desktop。
2. 七大组件与降本路由：Devin Cloud 经网页、Slack、Jira 与 CLI 接收异步工单并在独立虚拟机沙盒运行测试；DeepWiki 索引 5 万+ 公共仓库，Devin Review 化解「Lazy LGTM」审阅卡点；Devin Fusion 用主模型规划复核 + Sidekick 低价模型与自研 SWE 模型动态路由，FrontierCode 1.1 Extended 实测每任务 \$1.35（63.1 分），较 Opus 5（\$3.51）降本约 60%、较 Fable 5 xhigh（\$10.53）低 7.8 倍；2026 年 3 月嵌套管理升级为 11 月常驻式 Devin Bots（融合 Poke 技术，首批客户两周用量增 10 倍），DANA 模式接入 Looker、Snowflake 与 SQL 查数。

| 客户 | 规模与部署方式 | 实证效果与关键人验收（一手链接） |
| :--- | :--- | :--- |
| 花旗 (Citigroup) | 14,000 名工程师大规模接入替代外包 | CEO Jane Fraser 2026-10-13 披露技术供应商支出降 30%（[Fortune](https://fortune.com/2026/11/17/exclusive-cognition-bets-on-devin-bots-coding-agents-in-challenge-to-anthropics-duet-and-openais-dots/)） |
| Nubank | 1.31 亿客户；拆 600 万+ 行 ETL（10 万数据类，原需 1,000+ 人 18 个月） | 数周完成迁移，8x/12x 效率、20x 成本节省，Jose Carlos Castro 复核（[Nubank](https://devin.ai/customers/nubank)） |
| Wayfair | 124.57 亿美元收入、2,130 万客户；FDE 驻 Slack 接 200+ Okta 团队与 30 TB 迁库 | 1,600+ 工程师合并 40,000+ PR；Amanda Holland 回放从 2 周缩至 1 小时、吞吐 2.78x（[Wayfair](https://devin.ai/customers/wayfair)） |
| GE Aerospace | 459 亿美元 GAAP 收入；小团队试点扩至需求拆解与测试 | 副总裁 Nate Hicks 称「force multiplier」，3 个月事项近 2x（[GE](https://devin.ai/customers/geaerospace)） |
| Odyssey Logistics | 超 30 亿美元货运网；Cognizant 7 人配 Devin 建 OdysseyONE | 2026-09 上线，CIO/CDO Maneet Singh 确认 Microsoft Access 重构净省 37% 成本（[Cognizant](https://news.cognizant.com/2026-09-23-Cognizant-and-Cognition-put-autonomous-AI-engineering-into-production-at-Odyssey-Logistics,-with-a-37-percent-net-cost-saving)） |
| Rohlik / Eight Sleep / Tavrn / Linktree | Rohlik 12 仓 50+ MCP 接 Snowflake；Eight Sleep 查 Looker；Tavrn HIPAA；Linktree 5 仓 | Rohlik 90% 代理产码（30% 查数、80% 审码）；Eight Sleep 产出 3x；Tavrn 8 人顶 50 人、4/5 问题免转工程；Linktree 上线 Lemon8（[Rohlik](https://devin.ai/customers/rohlikgroup) / [Tavrn](https://devin.ai/customers/tavrn) / [Linktree](https://devin.ai/customers/linktree) / [Eight Sleep](https://cognition.com/blog/how-eight-sleep-uses-devin-as-a-data-analyst)） |

### 二、核心数据核查、口径纠偏与合规边界

- ✅ 融资三级跳核实：2026-11-20 彭博报道洽谈 750 亿美元估值融超 20 亿美元，紧接 2026-09-08 E 轮（a16z、Accel 领投超 20 亿美元，估值 480 亿美元）及 2026-05（10 亿美元、260 亿美元估值），全年已募资超 30 亿美元。
- ⚠️ 本工作台核查（ARR 基数纠偏与 50% 毛利隐藏成本）：触发稿称「年初 ARR 1 亿美元→最新 10 亿→年底超 20 亿（50% 毛利）」，存在三处偏差：（1）2025-07 并购 Windsurf（8,200 万）+ Devin（7,300 万）已超 1.55 亿美元，2026-05 达 4.92 亿、9 月底破 10 亿；（2）The Information 披露近 50% 企业毛利率明确剔除自研 SWE 模型训练成本，且 Cognition 年付数亿美元租 NVIDIA 集群、年烧钱约 8 亿美元、单一客户占收入约 10%，非 GAAP 综合毛利；（3）Fusion 降本实测为每任务 \$1.35 vs \$10.53，非单百万 token 10 美元降 5 倍。
- ⚠️ 本工作台核查（待核验）：Nubank 同页混用 8x 与 12x；Rohlik 4 月「371 人 1,500 次会话」、2025-12 开放 DANA 及 BLS 2025-05 工资（编程 3,000 亿 vs 管理金融 2.6 万亿美元）待逐表核验。
- 本工作台推断：大客户采购真正依赖隔离沙盒权限边界（Okta/HIPAA）、驻场 FDE 或 Cognizant（3,000+ 认证顾问）重塑业务规则，以及 Devin Review 合入门禁。

### 三、赛道横向对比

| 维度 | Cognition (Devin / Bots) | Cursor (Anysphere → SpaceX) | Conductor (Melty → Meta) | OpenAI Dots / Anthropic Duet |
| :--- | :--- | :--- | :--- | :--- |
| 估值锚点 | E 轮 480 亿（53x）/ 传 750 亿（75x ARR） | 26Q3 600 亿美元并入 SpaceX（30x ARR） | 2026-11-04 被 Meta 收购并关停云端 | 依托母公司模型生态捆绑 |
| 核心定位 | 独立云沙盒 + Desktop + Fusion 路由 | 日常高频 IDE + 远程云后台代理 | 本地 `git worktree` 多代理目录编排 | 原生 CLI/IDE + 常驻多代理 |
| 成本与挤压 | 自研 SWE 降本但年烧钱约 8 亿美元 | 并入 SpaceX / xAI 算力底座 | 无底层模型遭原厂整合挤压 | 掌握前沿模型推理边际成本 |

- 本工作台推断：750 亿美元估值把多模型中立溢价定价到极致，未来 12 个月估值能否站稳取决于渠道 FDE 杠杆与双寡头 Dots/Duet 渗透速度。

### 观点与可反驳条件

- ==观点==：Cognition 高估值的真实支撑是切入花旗、Wayfair、Odyssey 等企业「遗留系统改造与 IT 外包替换预算」（供应商支出降 30%–37%），但 50% 企业毛利率剔除训练成本且伴随约 8 亿美元年现金消耗，尚未跨越算力账单与模型原厂向下整合的双重夹击。
- ==推翻条件==：
  1. 截至 2027-06-30，若 Cognition 披露包含 SWE 训练与 GPU 租赁在内的综合毛利率连续两季 >=60%、年现金消耗降至 <2 亿美元且单客占比 <5%，则「重算力拖累盈利」的谨慎判断将被推翻。
  2. 截至 2027-12-31，若花旗（1.4 万工程师）、Wayfair（1,600+ 工程师）或 GE Aerospace 中至少两家披露改用 OpenAI Dots 或 Anthropic Duet 替代 Devin 主力迁移，且 Cognition 2027 年净新增 ARR 增速跌破 50%，则「中立执行层具备长期控制权」的叙事将被证伪。

---

## 原文摘录与一手信源存证

> 2026 年 11 月 20 日，彭博报道，Cognition 正洽谈以约 750 亿美元估值融资至少 20 亿美元。而仅仅两个月前，a16z、Accel 等领投的 E 轮融资超过 20 亿美元，估值 480 亿美元。
> — 原文摘录，文字段落 1；证据 `digest-material-169ee4638425e463dd46fbf3e5bc96c7fd08d5a2a9db5a45df0365efb94cf58d-excerpt-1@2`

> 公司成立于 2024 年 1 月。联合创始人兼 CEO Scott Wu 曾联合创办职业社交平台 Lunchclub 并任 CTO。联合创始人兼 CTO Steven Hao 是 Scale AI 的早期工程师，联合创始人 Walden Yan 曾在早期 Cursor 做工程开发。三人都获过国际信息学奥林匹克竞赛金牌。
> — 原文摘录，文字段落 2；证据 `digest-material-169ee4638425e463dd46fbf3e5bc96c7fd08d5a2a9db5a45df0365efb94cf58d-excerpt-2@2`

一手材料：

- Do it all with Devin: Announcing our Series E · Cognition · [原站](https://cognition.com/blog/series-e) · [主体档案：Cognition](../entities/companies/Cognition.md) · [本地原件](../../../raw/8496b2a12c36532ac0542678c6b8866283b338de321bedaf4ab09aa6d8815ea5)
  材料版本 `digest-material-8496b2a12c36532ac0542678c6b8866283b338de321bedaf4ab09aa6d8815ea5@1`；获取方式 `http_full_text`。
  > Cognition has raised over \$2B at a \$48B valuation. The round was led by new investors Andreessen Horowitz and Accel, alongside existing investors Founders Fund, General Catalyst, and Avenir. — 原文提取
  > Software shapes nearly every aspect of modern life. Yet the world’s demand for software far exceeds our capacity to build it. — 原文提取
- Cognition Crosses \$1B in Annualized Revenue Run Rate · Cognition · [原站](https://cognition.com/blog/1b-run-rate) · [主体档案：Cognition](../entities/companies/Cognition.md) · [本地原件](../../../raw/c9cc28868841cca5fc636cbede7b63d9424d7104963d61553e13481395d571b9)
  材料版本 `digest-material-c9cc28868841cca5fc636cbede7b63d9424d7104963d61553e13481395d571b9@1`；获取方式 `http_full_text`。
  > Today, Cognition crossed \$1B in annualized revenue run rate. — 原文提取
  > We started Cognition in January 2024 because the world needs far more software than it can build. — 原文提取
- Cognition’s acquisition of Windsurf · Cognition · [原站](https://cognition.com/blog/windsurf) · [主体档案：Cognition](../entities/companies/Cognition.md) · [本地原件](../../../raw/c9cdabdb5d8095218fe8bf8c16aa9a4e5218c07122fa7aff46d365bbd05c93a0)
  材料版本 `digest-material-c9cdabdb5d8095218fe8bf8c16aa9a4e5218c07122fa7aff46d365bbd05c93a0@1`；获取方式 `http_full_text`。
  > We’re excited to share that Cognition has signed a definitive agreement to acquire Windsurf, the agentic IDE. — 原文提取
  > The acquisition includes Windsurf’s IP, product, trademark and brand, and strong business. Above all, it includes Windsurf’s world-class people, some of the best talent in our industry, whom we’re privileged to welcome to our team. — 原文提取
- Introducing Devin Desktop · Cognition · [原站](https://cognition.com/blog/introducing-devin-desktop) · [主体档案：Cognition](../entities/companies/Cognition.md) · [本地原件](../../../raw/90faae522ee281d3ee2f3462a6a2b68c198f5bed48d90ff67c721711b1cc943c)
  材料版本 `digest-material-90faae522ee281d3ee2f3462a6a2b68c198f5bed48d90ff67c721711b1cc943c@1`；获取方式 `http_full_text`。
  > We’re excited to announce Devin Desktop - the next generation of Windsurf. — 原文提取
  > Earlier this year, we launched Windsurf 2.0 with the Agent Command Center and Devin inside Windsurf. Since then, one thing has become increasingly clear: the work of software engineers is shifting towards agent management. — 原文提取
- Devin Fusion: Frontier Performance at 60% Lower Cost · Cognition · [原站](https://cognition.com/blog/devin-fusion) · [主体档案：Cognition](../entities/companies/Cognition.md) · [本地原件](../../../raw/525113bcd819cc0e62b9e241761c4323eba7f0c484ee0ed9c15f050fee93ab04)
  材料版本 `digest-material-525113bcd819cc0e62b9e241761c4323eba7f0c484ee0ed9c15f050fee93ab04@1`；获取方式 `http_full_text`。
  > It's no longer sustainable to use the most expensive models on every task. But existing tools for mixing models suck. They look nice on most benchmarks but fail to write code you'd actually merge. — 原文提取
  > At Cognition, we specialize in routing across frontier models without sacrificing intelligence. — 原文提取
- Devin can now Manage Devins · Cognition · [原站](https://cognition.com/blog/devin-can-now-manage-devins) · [主体档案：Cognition](../entities/companies/Cognition.md) · [本地原件](../../../raw/224ebd53c3fc5b58bf66e82ad0acb601d4560487e0a28547e0464094c0a8f7a4)
  材料版本 `digest-material-224ebd53c3fc5b58bf66e82ad0acb601d4560487e0a28547e0464094c0a8f7a4@1`；获取方式 `http_full_text`。
  > Starting today, Devin can break down large tasks and delegate them to a team of managed Devins that work in parallel. — 原文提取
  > Each managed Devin is a full Devin, running in its own isolated virtual machine with its own terminal, browser, and development environment. — 原文提取
- Devin Review: AI to Stop Slop · Cognition · [原站](https://cognition.com/blog/devin-review) · [主体档案：Cognition](../entities/companies/Cognition.md) · [本地原件](../../../raw/cd73f1d9b95401f1e6c702723fbeab75a4e3932b71a2de275af1710dc8cd2ade)
  材料版本 `digest-material-cd73f1d9b95401f1e6c702723fbeab75a4e3932b71a2de275af1710dc8cd2ade@1`；获取方式 `http_full_text`。
  > As coding agents proliferate, the # of PRs increases, but the quality of that code can be mixed, and the size of each PR is increasing past maintainers' ability to understand. — 原文提取
  > That's why we built Devin Review, a code review tool that uses state-of-the-art AI + UX to scale human understanding of ever-more-complex code diffs —whether authored by a human, or an agent. — 原文提取
- How Eight Sleep Uses Devin as a Data Analyst · Cognition · [原站](https://cognition.com/blog/how-eight-sleep-uses-devin-as-a-data-analyst) · [主体档案：Cognition](../entities/companies/Cognition.md) · [本地原件](../../../raw/8ae8ca1808d01a47fb6549326066af6729fdc0eab87cf93752fe1944c30a52bc)
  材料版本 `digest-material-8ae8ca1808d01a47fb6549326066af6729fdc0eab87cf93752fe1944c30a52bc@1`；获取方式 `http_full_text`。
  > Building the future of sleep requires us to make data-driven product, operations, and finance decisions. But as a small team, we faced a challenge every scaling company knows well: the flood of random data asks . — 原文提取
  > "Can you pull yesterday's sales by channel? Can you check why this number looks off? Can we get a new dashboard for tomorrow's launch" Even with dbt, Looker, and Snowflake powering our analytics stack, these requests piled up. — 原文提取
- How Nubank refactors millions of lines of code to improve engineering efficiency with Devin · Cognition · [原站](https://devin.ai/customers/nubank) · [主体档案：Cognition](../entities/companies/Cognition.md) · [本地原件](../../../raw/749e274859bc430c2a5961bca07037926be65325db96fa37de95ee0580cf4bda)
  材料版本 `digest-material-749e274859bc430c2a5961bca07037926be65325db96fa37de95ee0580cf4bda@1`；获取方式 `http_full_text`。
  > Nubank is the largest financial technology bank in Latin America, serving over 110 million customers across Brazil, Mexico, and Colombia since its founding in 2013. — 原文提取
  > One of Nubank’s most critical, company-wide projects for 2023-2024 was a migration of their core ETL — an 8 year old, multi-million lines of code monolith — to sub-modules. — 原文提取
- How Wayfair's 1,600+ engineers went all in on cloud agents · Cognition · [原站](https://devin.ai/customers/wayfair) · [主体档案：Cognition](../entities/companies/Cognition.md) · [本地原件](../../../raw/53e459efc18780f54938a261c621f8c654d2d45460025961777475c9c06a60d5)
  材料版本 `digest-material-53e459efc18780f54938a261c621f8c654d2d45460025961777475c9c06a60d5@1`；获取方式 `http_full_text`。
  > Wayfair sells everything for the home to about 21 million active customers, with more than \$12 billion in annual revenue, a catalog of 40 million items, and a supply chain built to move large, bulky products quickly. — 原文提取
  > Fiona Tan, Wayfair's CTO, thinks home may be the hardest category to sell online. Wayfair is determined to make it easier, from helping shoppers discover and find products, to checkout, to delivery. — 原文提取
- How GE Aerospace uses Devin to invent the future of flight · Cognition · [原站](https://devin.ai/customers/geaerospace) · [主体档案：Cognition](../entities/companies/Cognition.md) · [本地原件](../../../raw/9dafa33021f2c564c24785aadc62d8c9560bf975d6fbe818c5d15b7c07b71494)
  材料版本 `digest-material-9dafa33021f2c564c24785aadc62d8c9560bf975d6fbe818c5d15b7c07b71494@1`；获取方式 `http_full_text`。
  > GE Aerospace designs, manufactures, and services jet engines and integrated systems for commercial and military aircraft, powering 3 out of every 4 commercial flights worldwide. — 原文提取
  > GE Aerospace has been advancing the technology of flight for more than a century. — 原文提取
- How Rohlik Group is building the agent-driven grocery company · Cognition · [原站](https://devin.ai/customers/rohlikgroup) · [主体档案：Cognition](../entities/companies/Cognition.md) · [本地原件](../../../raw/ac52ad5fb2ccdb5e923ac1206017fb4c17308cfb237b08f81fa4215d1be65bbb)
  材料版本 `digest-material-ac52ad5fb2ccdb5e923ac1206017fb4c17308cfb237b08f81fa4215d1be65bbb@1`；获取方式 `http_full_text`。
  > Rohlik Group is an online grocery company operating in five countries, founded in the Czech Republic, that delivers a full weekly shop of 17,000 products within 60 minutes or within 15-minute delivery slots. — 原文提取
  > Rohlik was one of the first unicorns founded in the Czech Republic, and after ten years on the market it remains one of the country's most loved brands. From the outside it looks like a grocery company. — 原文提取
- How Tavrn multiplies output across every function inside HIPAA constraints · Cognition · [原站](https://devin.ai/customers/tavrn) · [主体档案：Cognition](../entities/companies/Cognition.md) · [本地原件](../../../raw/c3c1ec509dbfa8a6ab8fdbb9abd2c54933deb74d1b5741617e6bcf19f000da35)
  材料版本 `digest-material-c3c1ec509dbfa8a6ab8fdbb9abd2c54933deb74d1b5741617e6bcf19f000da35@1`；获取方式 `http_full_text`。
  > Tavrn builds AI-powered infrastructure for retrieving medical records across the US, serving 500+ law firms, and has raised \$21.6M since its founding in San Francisco in 2022. — 原文提取
  > Tavrn is building the retrieval layer for medical records in the US, connecting to providers nationwide — from the largest health systems to the long tail of clinics that still rely on fax, paper, and phone calls. — 原文提取
- Cognizant and Cognition put autonomous AI engineering into production at Odyssey Logistics, with a 37 percent net cost saving · Cognizant · [原站](https://news.cognizant.com/2026-09-23-Cognizant-and-Cognition-put-autonomous-AI-engineering-into-production-at-Odyssey-Logistics,-with-a-37-percent-net-cost-saving) · [主体档案：Cognizant](../entities/companies/Cognizant.md) · [本地原件](../../../raw/300af8e4ebe04ed57a6d68024132d866eddee29dbf1d519dd9649f7407aca5a2)
  材料版本 `digest-material-300af8e4ebe04ed57a6d68024132d866eddee29dbf1d519dd9649f7407aca5a2@1`；获取方式 `http_full_text`。
  > Rebuilding Odyssey's transportation management platform from legacy forms into cloud-native software, with Odyssey reporting a 37 percent net cost saving inside a fixed budget and accelerated timeline. — 原文提取
  > Enterprises modernizing their technology estates face a persistent constraint: the work is often well understood, but engineering capacity is scarce and conventional modernization programs can run for a year or more before delivering value. — 原文提取
- Exclusive: Cognition launches Devin Bots to compete with OpenAI's Dots and Anthropic's Duet · Fortune · [原站](https://fortune.com/2026/11/17/exclusive-cognition-bets-on-devin-bots-coding-agents-in-challenge-to-anthropics-duet-and-openais-dots/) · [主体档案：Fortune](../entities/labs/Fortune.md) · [本地原件](../../../raw/5372b71760e6a480bfc1938377ebc470f73ebcf02851ea9165cebb2d4f510b37)
  材料版本 `digest-material-5372b71760e6a480bfc1938377ebc470f73ebcf02851ea9165cebb2d4f510b37@1`；获取方式 `http_full_text`。
  > Cognition’s AI coder just got promoted. The startup, currently valued at \$48 billion, helped kick off the race to build coding agents with its viral product Devin. — 原文提取
  > Devin Bots is Wu’s bet that the smarter AI models get, the more the product built around them matters. — 原文提取
- Cognition is in talks to raise at a \$75 billion valuation, two months after its \$48 billion round · MLQ.ai · [原站](https://mlq.ai/news/cognition-is-in-talks-to-raise-at-a-75-billion-valuation-two-months-after-its-48-billion-round/) · [主体档案：MLQ.ai](../entities/labs/MLQ.ai.md) · [本地原件](../../../raw/26a99c2b73a4bd18bfbabf67ca389250d1f2d82166d62c3fa797669078a2e043)
  材料版本 `digest-material-26a99c2b73a4bd18bfbabf67ca389250d1f2d82166d62c3fa797669078a2e043@1`；获取方式 `http_full_text`。
  > Cognition is in funding talks at a \$75 billion valuation and is considering raising \$2 billion or more, Bloomberg reported, citing people familiar with the matter \[1\] . — 原文提取
  > It raised more than \$2 billion at a \$48 billion valuation in September; it has raised over \$3 billion so far in 2026 \[1\] . — 原文提取
- Cognition raises more than \$2 billion at a \$48 billion valuation as AI coding competition widens · MLQ.ai · [原站](https://mlq.ai/news/cognition-raises-more-than-2-billion-at-a-48-billion-valuation-as-ai-coding-competition-widens/) · [主体档案：MLQ.ai](../entities/labs/MLQ.ai.md) · [本地原件](../../../raw/ad4ab58aa8ec7e285d09e192b377b5a08802d0a08ac38f5166eae49cb3bd20a2)
  材料版本 `digest-material-ad4ab58aa8ec7e285d09e192b377b5a08802d0a08ac38f5166eae49cb3bd20a2@1`；获取方式 `http_full_text`。
  > Cognition raised more than \$2 billion in Series E funding at a \$48 billion valuation, led by Andreessen Horowitz and Accel alongside existing investors Founders Fund, General Catalyst and Avenir. — 原文提取
  > The Information reported that Cognition leases an Nvidia server cluster costing hundreds of millions of dollars annually and could burn \$800 million in cash this year. — 原文提取

归属与范围：已沿微信公众号「具身alpha」（2026-11-27）触发线索穿透抓取 Cognition 官方博客（Series E \$48B、\$1B ARR、Windsurf 收购、Devin Desktop、Devin Fusion、Devin 嵌套管理 / Bots、Devin Review、DeepWiki、Eight Sleep）、Devin 官方客户案例（Nubank、Wayfair、GE Aerospace、Rohlik Group、Tavrn、Linktree）、Cognizant 联合 Odyssey Logistics 新闻稿（2026-09-23）、Fortune 对 Scott Wu 专访及花旗 CEO 电话会披露（2026-11-17）、以及 MLQ.ai 对彭博 11-20 报道与 The Information 口径核查摘要。核查纠正了微信稿在年初 ARR 基数、企业毛利率（不含模型训练成本）与 Devin Fusion 单位成本口径上的压缩或混淆，并新建/补全 Cognition、Devin 系列产品、Windsurf 并购及客户/竞争本体边；Bloomberg 与 The Information 付费墙原文及 Rohlik 4 月单月会话细节按未获取/待核验保留缺口。

来源缺口：

- `unavailable`：2026-11-20 Bloomberg 关于 Cognition 正洽谈以约 750 亿美元估值融资至少 20 亿美元的原始报道，以及 The Information 关于企业毛利率近 50%（剔除模型训练成本）、数亿美元 NVIDIA 集群租赁与约 8 亿美元年现金消耗、单一客户占约 10% 收入的原文受付费墙限制未能直采，当前以 Reuters/TradingView 通讯社标题与 MLQ.ai 摘要交叉核对。 [线索](https://mlq.ai/news/cognition-is-in-talks-to-raise-at-a-75-billion-valuation-two-months-after-its-48-billion-round/)
- `not_disclosed`：Cognition 未公开经审计 GAAP 收入、完整损益表、DANA 数据分析与非工程用例的独立 ARR 拆分，亦未官方披露 2026 年底超越 20 亿美元 ARR 的书面指引（The Information 对年底运行率的市场估算口径差异极大）。 [线索](https://cognition.com/blog/series-e)
- `pending_verification`：触发微信稿提及的「2026 年初披露 ARR 1 亿美元」「Rohlik 于 2026-04-24 披露前一个月 371 名员工发起 1,500 次数据分析会话」「2025 年 12 月开放 DANA」「美国劳工统计局 2025 年 5 月编程岗位约 3,000 亿美元 vs 管理商业金融岗位约 2.6 万亿美元年工资总额」未在本次抓取的 Cognition 客户页直接列示，待对照 2026-04 原始发布及 BLS OES 统计表补核。 [线索](https://devin.ai/customers/rohlikgroup)

[返回赛道总览](../赛道总览.md#digest-169ee4638425e463) · [返回导读索引](README.md) · [主体档案库](../entities/README.md)
