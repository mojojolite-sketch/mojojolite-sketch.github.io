---
title: "融资 1600 万美金，Nava 领投，微软 AI CEO 个人也投了，这家公司给 AI 造上班前的练习环境"
type: blog_digest
sector: "AI应用与开发工具"
source: "Plato (PR Newswire · Computer Work Val · Web Clone Bench)"
published_at: "2026-11-03"
raw_sha256: "c5d2431bca7283ea03f3fcce3c68859cb44a3d9ebf85b09f125291694a80e008"
material_version: "digest-material-c5d2431bca7283ea03f3fcce3c68859cb44a3d9ebf85b09f125291694a80e008@1"
origin_url: "https://www.prnewswire.com/news-releases/plato-raises-16-million-to-build-the-training-grounds-for-ais-next-leap-into-real-work-302921832.html"
trigger_source: "深思SenseAI"
trigger_url: ""
user_comments: ""
status: "processed_with_gaps"
primary_topic: "企业交付、评测与FDE治理"
topic_confidence: 0.8213
---

<a id="digest-c5d2431bca7283ea"></a>
# 融资 1600 万美金，Nava 领投，微软 AI CEO 个人也投了，这家公司给 AI 造上班前的练习环境

2026-11-03 · Plato (PR Newswire · Computer Work Val · Web Clone Bench) · 有来源缺口

[本地原件归档](../../../raw/c5d2431bca7283ea03f3fcce3c68859cb44a3d9ebf85b09f125291694a80e008) · 固定材料版本 `digest-material-c5d2431bca7283ea03f3fcce3c68859cb44a3d9ebf85b09f125291694a80e008@1` · [一手原站](https://www.prnewswire.com/news-releases/plato-raises-16-million-to-build-the-training-grounds-for-ais-next-leap-into-real-work-302921832.html)

## 深度拆解与复核

- 口径与利益：触发稿为「深思SenseAI」（2026-11-03）编译稿（并援引 Value Add VC 2026-10-29 报道），本拆解已穿透对照 [PR Newswire 融资公告（2026-10-28）](https://www.prnewswire.com/news-releases/plato-raises-16-million-to-build-the-training-grounds-for-ais-next-leap-into-real-work-302921832.html)、[Computer Work Val v1.0（2026-10-27）](https://plato.so/research/computer-work-val/) 与 [Introducing Web Clone Bench（2026-10-05）](https://plato.so/research/web-clone-bench/) 三份一手信源，主体档案见 [Plato](../entities/companies/Plato.md) 与 [Mercor](../entities/companies/Mercor.md)。Nava Ventures 创始人 Freddie Martignetti 将 Plato 定性为服务前沿模型实验室的「data lab」，两套公开基准兼具工程评估与向实验室招揽环境采购合作的展示属性。

### 一、核心机制拆解：可重置 210 应用仿真沙盒与代价加权 Verifier

- 创始人训练底座背景决定架构选型：Plato 由 CEO Robert Farlow（Waterloo 背景，前 Yutori 计算机操作标注平台搭建者）与 CTO Pranav Putta（Georgia Tech 计算机视觉、机器人与 RL 背景，前 MultiOn computer-use 模型训练研发）于 2025 年在旧金山创立，2026-10-28 宣布完成 1,600 万美元 A 轮融资（累计 1,900 万美元），由 Nava Ventures 领投（Freddie Martignetti 入董），Gradient Ventures（前序种子轮领投方）、Transpose Platform 及 Microsoft AI CEO Mustafa Suleyman 个人参投。
- 为什么必须先做「可重置假环境」而非在真软件试错：一旦 AI 从问答进入软件操作（下单付款、改写库表、发送报表），在真实生产系统做强化学习（RL）会直接产生不可逆财务或数据事故。Plato 目前搭建了 210 个可随时毫秒级重置（reset）的高保真模拟应用，涵盖 Gmail、Excel、Word、PowerPoint、Google Sheets、Salesforce、Jira、DocuSign、Stripe、Mercury 等商业套件复刻，以及 ERPNext、Odoo、OpenEMR、EspoCRM、GitLab、Nextcloud、FreeCAD、DocuSeal、CourtListener 等开源企业软件，覆盖客服、人力、财务会计与医疗行政等流程。
- 真实工作流还原与 5 关出题漏斗（[Computer Work Val v1.0](https://plato.so/research/computer-work-val/)）：与单纯靠大模型合成题面不同，Plato 依据美国数字化岗位劳动力成本占比招募在职专家，要求满足 5 道筛选门槛：① 在相关机构任职、重度用 AI 且本行业满 3 年；② 沟通能力与领域专业度双轮面试；③ RL 任务编写与 Plato 平台培训；④ 3 小时试工；⑤ 领域专家与 Plato RL 任务专员终审。最终纳入 v1.0 的 300 项任务横跨 10 大行业域与 36 个具体职类（Finance & Accounting 75 题占 25%、Engineering & Design 64 题占 21%、Legal & Compliance 42 题占 14%、Healthcare Administration 28 题占 9%、Marketing 23 题占 8%、Insurance / Claims 23 题占 8%、Software & IT 19 题占 6%、Sales & Revenue 12 题占 4%、Operations & Management 7 题占 2%、HR & People Ops 7 题占 2%）。
- ==核心工程壁垒不在「克隆界面」，而在「防 Reward Hacking 的状态验证器」==：以 Juniper Bean 高级会计师制作 Q3 P&L 利润表为例——环境内还原了 Excel、Gmail（内含 Q2 P&L）、Stripe 与 Mercury，其中 Stripe 同时列明 USD 与 CAD 付款及折算美元金额。若模型直接加总金额列会多算 3,180 美元。交付时 Verifier 逐项核对 7 条状态检查（版式与上季一致、发给 CFO Elena、附最终 .xlsx、扣除退款、47 笔交易分类、工资计入 OpEx 而非 COGS、最终收入数字），前 6 项全过但第 7 项判错。Plato 对每题落实四项质检（Realistic、Fair、Difficult、Severe）并由两位同职业专家交叉复核，同时在评分器里检查过程约束（如购买成功但超预算即判负）与模型钻评分漏洞行为（reward hacking），防止长程 RL 训练出现过拟合。

### 二、两大自研基准实测核查与失效后果分层（含一手直链）

1. Computer Work Val v1.0（300 项跨岗位任务，推理强度统一设为 high）：

| 前沿模型（high 档） | avg pass@1 | 严重失效 Severe | 代价不小 Costly | 无法撤回 Can't be undone | 殃及客户/监管/资金 | 很晚或永不被发现 Late or never |
| :--- | ---: | ---: | ---: | ---: | ---: | ---: |
| Gemini 4 Argon | 58.5% | 8% | 70% | 2%（33% 分钟级/65% 费力） | 30%（团队级）/ 3%（外部） | 9% |
| Claude Opus 5.5 | 52.5% | 6% | 69% | 2%（42% 分钟级/56% 费力） | 29%（团队级）/ 3%（外部） | 17% |
| GPT-6 Astra | 43.1% | 10% | 66% | 6% | 34%（团队级）/ 4%（外部） | 20% |
| Grok 4.7 | 39.9% | 14% | 62% | 8% | 39%（团队级）/ 3%（外部） | 21% |
| Muse Wonder | 39.6% | 6% | 66% | 3% | 28%（团队级）/ 4%（外部） | 15% |

- ✅ 本工作台核查（通不过比做错几成更致命的「隐蔽事故率」）：依据 [Computer Work Val v1.0 公开数据](https://plato.so/research/computer-work-val/)，即便是榜首 Gemini 4 Argon（58.5%），仍有超四成（41.5%）真实任务未能一次做对；各模型失败样本中「代价不小（Costly）」均占 62%–70%，「严重（Severe）」占 6%–14%。更关键的是静默失效风险：Claude Opus 5.5 有 17% 的错误直到很晚甚至永远不会被发现（GPT-6 Astra 为 20%、Grok 4.7 达 21%、Gemini 4 Argon 为 9%）——把平均通过率与「事故美元后果 / 可发现时滞」拆开标注，比单一百分比得分更能解释企业为何不敢直接放权。

2. Web Clone Bench（[9 个参考应用从零全栈复刻](https://plato.so/research/web-clone-bench/)，单机沙盒 8 CPUs / 16 GB RAM / 40 GB 磁盘、8 小时上限、禁用原站 JS/CSS 包）：

| 模型与最高分推理档 | 综合复刻得分 | 单次平均 API 成本 | 平均耗时 | 工具步数 / 并行工具行为特征（[WCB 一手数据](https://plato.so/research/web-clone-bench/)） |
| :--- | ---: | ---: | ---: | :--- |
| Claude Opus 5.5 [xhigh] | 34.2% | \$652.07 | 5h 36m | 10,305 步；第 2 分钟改代码、第 8 分钟构建、第 13 分钟自查、26 分钟交初版，全程同时混用约 5 类工具 |
| GPT-6 Astra [max] | 17.5% | \$207.27 | 6h 20m | 1,290 步；长程规划较强但探索—构建并发密度显著低于 Opus 5.5 |
| Claude Fable 5.1 [high] | 13.3% | \$272.24 | 2h 13m | 2,768 步；xhigh 档得分 13.0%（\$314.08），低成本档效率更高 |
| GPT-6.1 Sol [max] | 12.6% | \$25.35 | 6h 40m | 793 步；成本仅为 Opus 5.5 的约 1/26，在中等预算帕累托边界表现突出 |
| Gemini 4 Argon [medium] | 8.6% | \$88.50 | 3h 47m | high 档反降至 6.3%（\$49.45），呈现推理档位非单调性 |
| Muse Wonder 1.0 [high] / Grok 4.7 [low] / Muse Spark 1.3 [medium] / Gemini 3.8 Flash [medium] | 3.7% / 2.8% / 1.5% / 1.0% | \$8.60 / \$18.32 / \$5.46 / \$2.01 | 19m / 26m / 32m / 17m | 135 / 532 / 235 / 219 步；Grok 4.7 前 15 分钟只读不构建，平均同时仅用 1.4 类工具 |

- ⚠️ 本工作台核查（自建自测口径与推理边际经济账）：WCB 的两项行为洞察具有工程价值——其一，在 Gmail（如 `jimwind439@gmail.com`）等无文档复杂 SPA 逆向工程中，高频「探索 → 构建（`scb-build`）→ 浏览器视觉对照（`agent-browser` / `scb-screenshot`）」交错循环远胜先读后写的线性习惯；其二，Opus 5.5 一次跑完消耗 \$652.07（max 档达 \$718.71）与超 5 小时 36 分钟，若环境无法低成本高频重置复用，实验室大规模 RL Rollout 的训练成本将极难承受。但两套榜单全部由 Plato 自行设计、聘人标注并自跑评测，尚缺外部第三方盲测验证，且官方未披露估值与环境商业定价。

### 三、赛道横向对比：Plato vs Mercor（APEX-Agents / Deeptune）vs 底层沙盒

| 对比维度 | Plato | Mercor（APEX-Agents + Deeptune） | 关联交叉结论（结合 [Mercor 拆解](Mercor%20APEX-Agents%20%26%20AI%20Consumer%20Index%20%28ACE%29_%20Enterprise%20Multi-App%20Simulated%20Worlds%20vs%20Consumer%20Web-Grounding%20.md)） |
| :--- | :--- | :--- | :--- |
| 融资与估值量级 | \$16M A 轮 / 累计 \$19M（2026-10，Nava 领投、Mustafa Suleyman 参投，估值未披露） | \$750M D 轮 / \$20B 估值（2026-11）；2026-07 收购 Deeptune（此前 Deeptune 获 a16z \$43M A 轮） | Plato 资金体量不足 Mercor 的千分之一，无法靠日均 ~\$5M 人力派息打专家人海战 |
| 环境覆盖路径 | 210 个高保真复刻 SaaS/开源应用 + 300 项跨 10 行业真实工作任务 + 数百个 Web/桌面训练环境 | 500 万专家池构建 33 个 Archipelago 数据室（480 项投行/咨询/法律任务）+ Deeptune 并发克隆 | 均指向同一结论：纯静态问答或合成环境无法支撑长程 Agent，必须转向可重置状态空间 |
| Verifier 判分哲学 | 过程约束（预算/防 reward hacking）+ 失败代价/隐蔽性分级（Annoying/Costly/Severe） | 严格二元全过制（Binary Pass@1，每题 1–10 条专家 Rubric，错 1 条即 0 分） | 本工作台推断：Plato 对职场灾难后果与静默误判的分级标注更贴近企业买单痛点，但 210 个环境的工程维护与专家造题单价会制约品类扩张速度 |

### 观点与可反驳条件

- ==观点==：Plato 的差异化壁垒核心来自用真实从业者的脏数据与带过程防作弊约束的代价分级 Verifier，精确捕捉到了大模型「表面通过率 50%+ 但 17%–21% 错误会静默流入 CFO 桌面」的企业落地断层；在 1,900 万美元总融资体量下，其能否与估值 200 亿美元且并购了 Deeptune 的 Mercor 拉开身位，取决于这 210 个高还原可重置环境能否成为大模型实验室采购高难度长程 RL 训练轨迹（而非仅做一次性公开评测榜单）的常驻底座。
- ==推翻条件==：
  1. 若截至 2027-Q4，主流大模型实验室普遍采用低成本自动化合成环境与代码形式化校验器（无需按人头雇佣 3+ 年资深行业专家手工录制 3 小时试工任务）即可在企业长程任务上取得同等 RL 增益，导致 Plato 人工高还原环境的实验室续约率或轨迹采购需求低于预期，则「重人工、高保真现实工作环境不可替代」的逻辑将被证伪。
  2. 若截至 2027-12-31，Mercor（依托 Deeptune + Daytona 并发沙盒与 500 万专家网络）或大型云厂/模型原厂自建仿真部全面吸纳头部实验室企业环境预算，而 Plato 仍未公布规模化商业收入或被迫退守单一垂直外包标注，则 Plato 作为独立「frontier data lab」的资本化空间将被证伪。

---

## 原文摘录与一手信源存证

> 想象一下，让 AI 替一家公司做第三季度的利润表，做完直接发给财务总监。收入里有一部分是加元，它按美元原样加了进去，收入就多出 3180 美元。这份表格格式整齐，条目齐全，大概不会有人马上发现哪里不对，它就这样送到了管理层手里。
> — 原文摘录，PDF p.2；证据 `digest-material-c5d2431bca7283ea03f3fcce3c68859cb44a3d9ebf85b09f125291694a80e008-excerpt-1@1`

> 这是 Plato 自己出的一道例题。在真公司里，这是一次让人头疼的事故；在 Plato 的模拟软件里，它只是 7 项检查里没通过的 1 项，改一改，重置，再来一遍。Plato 2025 年成立，总部在旧金山，专门给 AI 实验室造这样的练习环境。
> — 原文摘录，PDF p.2；证据 `digest-material-c5d2431bca7283ea03f3fcce3c68859cb44a3d9ebf85b09f125291694a80e008-excerpt-2@1`

> Nava 的创始人 Freddie Martignetti 进入董事会。加上之前由 Gradient 领投的种子轮，Plato 累计融资 1900 万美元。
> — 原文摘录，PDF p.2；证据 `digest-material-c5d2431bca7283ea03f3fcce3c68859cb44a3d9ebf85b09f125291694a80e008-excerpt-3@1`

一手材料：

- Plato Raises \$16 Million to Build the Training Grounds for AI's Next Leap Into Real Work · Plato Technologies, Inc. / PR Newswire · [原站](https://www.prnewswire.com/news-releases/plato-raises-16-million-to-build-the-training-grounds-for-ais-next-leap-into-real-work-302921832.html) · [主体档案：Plato](../entities/companies/Plato.md) · [NotebookLM](https://notebook.google.com/notebook/a5a6cb11-e073-464c-ae6c-a945ef70f174) · [Drive](https://drive.google.com/file/d/1CNvpRmQHsECI94-VnZRjXTPoDsi79lSl/view?usp=drivesdk)
  材料版本 `digest-material-4a52f59a52e3164099e8a8c3fc029818f0cd420d4803e351675af7e22e058987@1`；获取方式 `http_full_text_snapshot`。
  > As AI moves from answering questions to taking action, it needs practice using software, responding to changing circumstances, and completing multistep tasks. — 原文提取
  > "Mastering real complex work comes from experience doing those tasks," said Robert Farlow, co-founder and CEO of Plato. — 原文提取
- Computer Work Val v1.0 · Plato · [原站](https://plato.so/research/computer-work-val/) · [主体档案：Plato](../entities/companies/Plato.md) · [NotebookLM](https://notebook.google.com/notebook/a5a6cb11-e073-464c-ae6c-a945ef70f174) · [Drive](https://drive.google.com/file/d/1mBmf9Wmp7W_oimTYVCSh6CD2ssHXKKpo/view?usp=drivesdk)
  材料版本 `digest-material-58af71c8614be630d09f9bd228fa4f85d768042056ed1198f8e42f41c82224d0@2`；获取方式 `http_full_text_snapshot`。
  > The contributors come from the US occupations with the largest share of labor costs in digital work. Each one turns a piece of their own job into an environment. — 原文提取
  > Task authors rate what each failed verifier would cost if it happened at work. Each bar splits a model’s rated failures on one scale. — 原文提取
- Introducing Web Clone Bench · Plato · [原站](https://plato.so/research/web-clone-bench/) · [主体档案：Plato](../entities/companies/Plato.md) · [NotebookLM](https://notebook.google.com/notebook/a5a6cb11-e073-464c-ae6c-a945ef70f174) · [Drive](https://drive.google.com/file/d/1PgulJemmgRlaGXG6C3kTyWBCdRNb-A_l/view?usp=drivesdk)
  材料版本 `digest-material-5bcbe470639702ddb03e795616f4c91dc1a37a9340c3d0044a715127deb141f0@2`；获取方式 `http_full_text_snapshot`。
  > Today we’re excited to launch Web Clone Bench. Web Clone Bench (WCB) uses 9 reference web apps with the task of creating a perfect functional replica of each of them. — 原文提取
  > Much of modern reinforcement learning relies on training agents in simulated environments. — 原文提取

归属与范围：已穿透核对 Plato 2026-10-28 PR Newswire 1600 万美元 A 轮公告及两篇官方研究报告（2026-10-27 Computer Work Val v1.0 与 2026-10-05 Web Clone Bench）；微信公号「深思SenseAI」（2026-11-03）仅作触发线索（trigger\_source）。拆解还原 210 个可重置仿真应用、300 项跨 10 领域 36 岗位任务、5 关专家筛选、Juniper Bean 多币种损益表 7 项状态校验与失败代价分级（Costly / Severe / Late or never noticed），以及 9 款 Web 应用复刻沙盒（8 CPUs / 16 GB RAM / 40 GB 盘，最高 8 小时）实测差异，并与库内 Mercor APEX-Agents 二元 Pass@1 路线交叉对标。

来源缺口：

- `pending_verification`：Computer Work Val v1.0（300 题）与 Web Clone Bench（9 个参考应用）的榜单成绩、失败后果评级（Annoying / Costly / Severe）及过程防 reward hacking 效果均由 Plato 自研自测发布，尚未见独立第三方实验室盲测复现；使用 Plato 仿真环境开展 RL 后训练相比合成环境的实际性能增益幅度亦未披露。 [线索](https://plato.so/research/computer-work-val/)
- `not_disclosed`：Plato 未在官方新闻稿与研究页披露本次 \$16M A 轮估值、客户合约金额、环境订阅或按 trajectory 计费定价体系，以及 Computer Work Val 题库中自付雇佣领域专家的单位造题成本。 [线索](https://www.prnewswire.com/news-releases/plato-raises-16-million-to-build-the-training-grounds-for-ais-next-leap-into-real-work-302921832.html)

[返回赛道总览](../赛道总览.md#digest-c5d2431bca7283ea) · [返回导读索引](README.md) · [主体档案库](../entities/README.md)
