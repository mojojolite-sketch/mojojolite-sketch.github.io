---
title: "Coatue：用 AI 做投资，把一个对冲基金写成一个函数"
type: blog_digest
sector: "AI产业与商业"
source: "Coatue Management · Frank Long"
published_at: "2026-11-09"
raw_sha256: "ee6d45945db42f87d3f1a2e5db690c276446ca769e9ff03f9ff28226d0f388b8"
material_version: "digest-material-ee6d45945db42f87d3f1a2e5db690c276446ca769e9ff03f9ff28226d0f388b8@1"
origin_url: "https://www.youtube.com/watch?v=AYFcmnQrZCg"
trigger_source: "大声思考ThinkingAloud"
trigger_url: "https://mp.weixin.qq.com/s/5uZ4DM0ecWxgktBMIAkO3g"
user_comments: "coatue真是前沿啊…"
status: "processed_with_gaps"
primary_topic: "AI并购运营与企业转型"
topic_confidence: 0.7526
---

<a id="digest-ee6d45945db42f87"></a>
# Coatue：用 AI 做投资，把一个对冲基金写成一个函数

2026-11-09 · Coatue Management · Frank Long · 有来源缺口

[本地原件归档](../../../raw/ee6d45945db42f87d3f1a2e5db690c276446ca769e9ff03f9ff28226d0f388b8) · 固定材料版本 `digest-material-ee6d45945db42f87d3f1a2e5db690c276446ca769e9ff03f9ff28226d0f388b8@1` · [一手原站](https://www.youtube.com/watch?v=AYFcmnQrZCg) · [触发线索（大声思考ThinkingAloud）](https://mp.weixin.qq.com/s/5uZ4DM0ecWxgktBMIAkO3g)

> [!IMPORTANT]
> 用户关注点（TG）：coatue真是前沿啊…

## 针对性追查与回应

### 一、场景与利益标注（技术峰会招募与品牌口径）

回应用户关注（"coatue真是前沿啊…"）：Coatue 确实代表买方机构将大模型工程化的第一梯队，但解读这场发布于 2026-11-05 的 AI Engineer NYC 2026 演讲（原视频《AI Agents Will Upend Investing Even More Than Coding》，时长 14 分钟 / 14 分 04 秒，配 8 张幻灯片）时，==必须前置识别讲者身份与披露激励==。Coatue Head of AI 兼对冲基金团队合伙人 Frank Long（2025 年加入 Coatue，此前任 Goldman Sachs Global Institute 副总裁聚焦 AI 与地缘科技，更早曾任 Google 产品经理）选择在面向顶尖软件与 AI 工程师的 AI Engineer 大会公开方法论，核心激励是技术人才招募（"之后我会在走廊里"）与塑造机构前沿工程品牌，因此他大方拆解状态机元架构与组织哲学，但对实盘 PnL 归因、夏普比贡献、API Schema 与具体另类数据配方保持严格保密。

### 二、逐节工程拆解与华尔街领先壁垒核查

1. 函数抽象与屏幕 API 平权：演讲将对冲基金定义为全局状态压缩函数 `fund(c_external, c_internal) -> (selection, size, timing)`，输出买什么、买多少与何时交易的时间序列。其第一工程原则是屏幕像素与 API 100% 平权——若把最聪明投资者招进公司却只开放 25% 的系统登录权限，模型能力毫无意义；因此新闻、行情、财报等外部数据必须经 API 直连，而非人工拖拽复制。同时，Coatue 领先同行的真正壁垒并非单点 Prompt，而是十多年数据科学基建与长达数十年的投研文化：把每一笔已执行及主动放弃的交易决策、成败归因全部沉淀为结构化内部笔记，构成外部竞争者无法爬取的 `c_internal`。
2. 细粒度管道与韩语半导体新闻案例：为避免单次塞入上下文窗口失效，函数被拆解为 `gather -> analyze -> decide` 三阶段（每阶段输入输出严格对接），其中光 `gather` 内的韩语新闻流水线就涵盖 `collect`（经 MCP 或 CLI 接入授权清洗源，需调优切块与图片/文本策略）、`filter`（剔除非实质性内容，例如韩国 NBA 球迷新闻，但保留影响数据中心许可的 NBA 相关新闻）、`translate/extract`（摘要对比结构化抽取）与 `check`（交叉核验内部笔记、对话与会议录音）及 `propose/update`。
3. 4-Runner 混合编排与搜索空间爆炸：第 05–08 节按颜色标出四类 Runner——确定性代码（如 24 小时定时抓取、市盈率低于 15 筛选）、经典统计机器学习、LLM/Agent 与人类。Frank Long 明确反对为了自动化而自动化（例如调侃不会派 Unitree 机器人或 LLM 去和上市公司管理层开会），强调在 LLM 桶内部还需调节模型大小、`thinking effort`（xhigh / high / medium）以及 `harness` 加载的 `skills` 与 `hooks`，再叠加先 `dedupe` 还是先 `filter`、或先抽引语再核来源的控制流分支。演讲第 12 分 39 秒展示的屏保级真实流程图揭示：生产系统每个节点均存在至少 10 个超参数且每个超参数拥有至少 20 个有效取值。

- ✅ 本工作台核查（LLM 能力硬边界印证）：交叉比对 SemiAnalysis 的 [GDPx 评测导读](../../AI%E5%BA%94%E7%94%A8%E4%B8%8E%E5%BC%80%E5%8F%91%E5%B7%A5%E5%85%B7/blogs/GDPx_%20Measuring%20Frontier%20Model%20Capabilities%20Across%20the%20Most%20Valuable%20Domains.md) 可见，当前最强前沿模型在 11 域长程任务中的综合 pass@1 仅 12.0%，而 Finance 与 Legal 复杂多文件闭环得分几乎全员 0%。这从第三方实证侧面证实，Frank Long 在演讲中直言 LLM 在「翻译成组合影响」上表现极差、必须保留人类主导 `decide` 环节与管理层会议（而非交由 Agent 端到端下单），并非保守表态，而是受制于现阶段前沿模型的可靠性硬边界。
- ✅ 本工作台核查（工程品味的三处本质分水岭）：对照本库 [Harvey 营销代码库导读](../../AI%E5%BA%94%E7%94%A8%E4%B8%8E%E5%BC%80%E5%8F%91%E5%B7%A5%E5%85%B7/blogs/Harvey%E4%B8%A4%E5%91%A8%E7%83%A7156%E4%BA%BFtoken%EF%BC%8C%E8%90%A5%E9%94%80%E9%83%A8%E9%97%A8%E5%8F%98%E6%88%90%E4%BB%A3%E7%A0%81%E5%BA%93.md)（两周消耗 156 亿 token 将非工程部门重塑为 API/CLI 驱动系统）及 [Anthropic 路演纪要全文+PPT](Anthropic%20%E8%B7%AF%E6%BC%94%E7%BA%AA%E8%A6%81%E5%85%A8%E6%96%87%2BPPT.md) 中企业从外挂聊天转向按量生产流的趋势，==Coatue 真正领先大多数华尔街同行的并不是买了哪家模型，而是三项难以复制的组织与工程约束==：第一，100% 屏幕像素级的 API 工具平权（对应其「Agent 是 CPU 新用户」的 GPU 规划 / CPU 执行架构）；第二，十年以上积累的「做过与没做过的交易」结构化失败记忆（`c_internal` 无法通过外部购买获得）；第三，拒绝「万物皆 LLM」的 4-Runner 分工，将低成本确定性代码与人类判断力卡位在正确节点。
- ⚠️ 本工作台推断（「投资比编程更适合 Agent」的北极星评估陷阱）：Frank Long 断言 Agent 对投资的冲击将大于编程（Agents Will Upend Investing Even More Than Coding），并强调每个子环节必须隔离出可爬山的「北极星」评估指标。但对照 [Dwarkesh Patel 数学雪崩导读](../../AI%E8%AE%AD%E7%BB%83%E4%B8%8E%E6%95%B0%E6%8D%AE/blogs/The%20avalanche%20that%20hit%20math%20is%20coming%20for%20AI%20development.md) 可见根本差异：数学与代码拥有毫秒至分钟级的确定性形式校验器，而二级与一级市场投资的 `selection`、`size` 与 `timing` 面临极低信噪比、宏观体制切换（Regime Shift）与数季至数年的延迟反馈。若对每个节点至少 10 个超参数乘以至少 20 个取值直接按组合回报做闭环寻优，必然触发严重的多重检验过拟合；==真正工程可行且不致过拟合的「北极星」，只能落在可客观核验的中间信息处理节点（跨语种去重、引语回溯核源、财报口径对齐、数据中心电力/许可事件召回率），而非端到端自动收益优化==。

### 观点与可反驳条件

- ==观点==：==Coatue 领先买方同业的核心不是拥有更强的闭源大模型，而是把「十余年未投/已投历史决策记忆 `c_internal` + 100% 屏幕像素 API 化 + 4-Runner 非对称编排」工程化为可迭代状态机；但投资决策的低信噪比决定了「北极星」评估只能锚定 `gather` 与事实核查中间层，端到端 `decide` 在可见未来仍将保持人类主导==。
- ==推翻条件==：
  1. ① 若至 2027 年底前，SemiAnalysis GDPx（Finance 分域）或同类多文件金融实操基准中前沿模型的单次 pass@1 从当前接近 0% 跃升至 35% 以上且能直接输出经外部审计的超额组合归因，则「LLM 在翻译成组合影响上存在长期硬边界」的判断将被推翻。
  2. ② 若未来 18 个月内出现公开披露且经独立绩效审计的纯 AI 端到端多策略基金（人类完全不参与 `selection / size / timing` 最终复核，规模超 \$5 亿）在跨越完整宏观风格切换周期后仍实现显著正夏普收益且无重大过拟合回撤，则「投资无法像编程那样靠端到端回报北极星自动爬山」的推断将被推翻。
  3. ③ 若头部公募/对冲基金无需沉淀十年历史决策笔记、仅凭公开市场数据与通用商业 API/MCP 插件即在 12 个月内复现同等研究转化效率，则「`c_internal` 历史失败记忆构成买方核心护城河」的论断将被推翻。

---

## 原文摘录与一手信源存证

> 你可以把对冲基金看成一个函数：它接收两个参数——外部上下文和内部上下文——然后输出一个元组：selection、size、timing。买什么？买多少？什么时候？
> — 原文摘录，文字段落 1；证据 `digest-material-ee6d45945db42f87d3f1a2e5db690c276446ca769e9ff03f9ff28226d0f388b8-excerpt-1@2`

> 任何一个人能在屏幕像素上看到的东西，你公司里的 agent 都应该能通过 API 看到。我常用的类比是：想象你把史上最聪明的人、在世最伟大的投资者招进公司，但你给他的电脑只有 25% 的服务有登录权限。
> — 原文摘录，文字段落 2；证据 `digest-material-ee6d45945db42f87d3f1a2e5db690c276446ca769e9ff03f9ff28226d0f388b8-excerpt-2@2`

一手材料：

- AI Agents Will Upend Investing Even More Than Coding — Frank Long, Coatue · Coatue Management · Frank Long (AI Engineer NYC 2026) · [原站](https://www.youtube.com/watch?v=AYFcmnQrZCg) · [主体档案：Coatue Management](../entities/funds/Coatue%20Management.md) / [主体档案：AI Engineer](../entities/labs/AI%20Engineer.md) · [本地原件](../../../raw/6a8d490e9a602afac9394f8d066600a1ba25c6d355f79e20c5a0e3ed3fa23f35)
  材料版本 `digest-material-6a8d490e9a602afac9394f8d066600a1ba25c6d355f79e20c5a0e3ed3fa23f35@1`；获取方式 `web_search_verified_primary`。
  > Primary Source Verification Snapshot (#344) =========================================  1. Talk & Primary Video Metadata -------------------------------- - Title: AI Agents Will Upend Investing Even More Than Coding - Speaker: — 原文提取
  > Coatue has spent over a decade building internal data science teams, ingestion pipelines, and an organizational note-taking culture capturing rationale behind every trade made or passed over decades.  3. Engineering Architecture — 原文提取

归属与范围：已穿透至 AI Engineer NYC 2026 原演讲 https://www.youtube.com/watch?v=AYFcmnQrZCg（2026-11-05，14 分 04 秒），并核实讲者 Frank Long（Coatue Management Head of AI & Partner，2025 年加入，此前任 Goldman Sachs Global Institute VP 与 Google Product Manager）及 Coatue 一二级科技投研平台背景；微信公众号「大声思考ThinkingAloud」全文中译稿退居 trigger\_source 触发线索。

来源缺口：

- `not_disclosed`：这场 14 分钟大会公开演讲未披露 Coatue 内部实盘 PnL 归因、夏普比提升、具体 API Schema、实际选用的模型与 harness 供应商配比，以及私密另类数据源清单。 [线索](https://www.youtube.com/watch?v=AYFcmnQrZCg)
- `unavailable`：经多次公开检索，LinkedIn、X 与 AI Engineer 讲者目录均未公开索引 Frank Long 个人官方社交账号 URL（仅核实其 2025 年加入 Coatue 任 Head of AI & Partner，此前任 Goldman Sachs Global Institute VP 及 Google Product Manager），故未在实体入口中凭空构造个人社交链接。 [线索](https://www.coatue.com/)

[返回赛道总览](../赛道总览.md#digest-ee6d45945db42f87) · [返回导读索引](README.md) · [主体档案库](../entities/README.md)
