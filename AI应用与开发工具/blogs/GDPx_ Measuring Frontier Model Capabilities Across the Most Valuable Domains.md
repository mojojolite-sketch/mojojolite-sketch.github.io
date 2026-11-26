---
title: "GDPx: Measuring Frontier Model Capabilities Across the Most Valuable Domains"
type: blog_digest
sector: "AI应用与开发工具"
source: "SemiAnalysis (GDPx v1.0)"
published_at: "2026-11-02"
raw_sha256: "0c8fea001bbce89e1e9f4b52e53b827ff235b1392ed468ba3777b16590e1338d"
material_version: "digest-material-0c8fea001bbce89e1e9f4b52e53b827ff235b1392ed468ba3777b16590e1338d@1"
origin_url: "https://newsletter.semianalysis.com/p/gdpx-measuring-frontier-model-capabilities"
trigger_source: "SemiAnalysis"
trigger_url: "https://newsletter.semianalysis.com/p/gdpx-measuring-frontier-model-capabilities"
user_comments: ""
status: "processed_with_gaps"
primary_topic: "企业交付、评测与FDE治理"
topic_confidence: 0.6238
---

<a id="digest-0c8fea001bbce89e"></a>
# GDPx: Measuring Frontier Model Capabilities Across the Most Valuable Domains

2026-11-02 · SemiAnalysis (GDPx v1.0) · 有来源缺口

[本地原件归档](../../../raw/0c8fea001bbce89e1e9f4b52e53b827ff235b1392ed468ba3777b16590e1338d) · 固定材料版本 `digest-material-0c8fea001bbce89e1e9f4b52e53b827ff235b1392ed468ba3777b16590e1338d@1` · [一手原站](https://newsletter.semianalysis.com/p/gdpx-measuring-frontier-model-capabilities)

## 深度拆解与复核

- 口径与利益：本篇基于 [SemiAnalysis GDPx 官方发布文章（2026-11-02，Max Kan、Andrew Megalaa、Dylan Patel 署名）](https://newsletter.semianalysis.com/p/gdpx-measuring-frontier-model-capabilities) 与 [GDPx 公开榜单门户](https://gdpx.semianalysis.com/)，并对照 [OpenAI GDPval 基准发布页](https://openai.com/index/gdpval/) 及主体档案 [SemiAnalysis](../entities/companies/SemiAnalysis.md)、[OpenAI](../entities/companies/OpenAI.md)、[Anthropic](../entities/companies/Anthropic.md)。SemiAnalysis 主营半导体、算力供给与机构级 AI 付费研报，将全量 206 项任务明细及深层剖面锁定于付费机构订阅并保留部分题库闭源防刷榜；同时相比按美国全经济行业抽样的 GDPval，GDPx 剔除政府、房地产、保险等低 ROI 官僚部门以聚焦高客单技术场景，客观上强化「复杂任务仍需重度算力投入与精密工具链选型」的买方研究叙事。

### 一、评测机制设计与 Harness 架构：11 域 206 项长程任务（对比 OpenAI GDPval）

- 为什么在 80%–90% 饱和后重做硬重置基准：当传统学术与单轮代码基准得分普遍饱和至 80%–90% 时，[SemiAnalysis GDPx v1.0（2026-11-02）](https://newsletter.semianalysis.com/p/gdpx-measuring-frontier-model-capabilities) 将能力标尺直接拉回真实长程工作流——把单任务最长执行时限拉长至 8 小时，在 11 个高 ROI 专业领域设置 206 项复杂自主任务，导致榜首前沿模型综合得分在上线时骤降至 12.0%。
- 11 个高价值经济域与 14 家数据/RL 合作方：GDPx 明确覆盖 11 个赛道——① Chip Design、② Cybersecurity、③ Biology（数据与 RL 伙伴含 LatchBio）、④ Finance、⑤ Legal、⑥ Quantitative Trading（Quant Trading）、⑦ Recursive Self-Improvement（RSI）、⑧ Hardware Design（CAD、CAM、PCB 布局）、⑨ Materials Science、⑩ Alignment 与 ⑪ Software Engineering（数据与 RL 伙伴含 Datacurve，另有 Arithmetic 等共 14 家专业伙伴）。
- 原生执行底座（Native Harness）与混合判分口径：与强制所有模型套用同一简陋脚手架的早期测试不同，GDPx 允许模型在各自原生 Agent Harness 中运行——Anthropic 使用 Claude Code、Google 使用 Antigravity、OpenAI 使用 Codex，其余模型回退至 OpenCode。判分摒弃早期 [OpenAI GDPval](https://openai.com/index/gdpval/) 依赖主观评审的低一致性做法，改为「确定性程序验证器（deterministic verifiers）+ 企业真实真值数据 + 结构化量表」混合判分（结合二元全过与域内连续得分），总榜取每题 3 次独立尝试的 pass@1 均值并在 11 个领域间等权汇总；为防数据污染与刷榜（hill-climbing），仅部分任务与执行轨迹（rollouts）公开托管于 [gdpx.semianalysis.com](https://gdpx.semianalysis.com/)。

### 二、榜单实测核查、单任务经济账与工程瓶颈

| 前沿模型（GDPx v1.0 榜单） | 原生执行底座（Harness） | 综合 pass@1 | 单任务推理成本 | 输出 token 与域内优势特征（本工作台核查） |
| :--- | :--- | ---: | ---: | :--- |
| Claude Opus 5.5（Anthropic） | Claude Code | 12.0% | \$51.41 | 约 548,000 输出 token；总榜第一，领跑 Quantitative Trading、Hardware Design 与 Chip Design |
| Gemini 4 Carbon（Google） | Antigravity | 10.9% | \$16.29 | 约 594,000 输出 token，成本不足 Opus 5.5 的三分之一；领跑 Biology 与 Software Engineering |
| GPT-6 Astra（OpenAI） | Codex | 9.6% | \$53.99 | 领跑 Recursive Self-Improvement（RSI）与 Materials Science |
| Muse Wonder Full（Meta） | OpenCode / 适配底座 | 9.0% | 未披露 | 受益于宽松安全分类器，大幅领跑 Cybersecurity |
| Claude Fable 5.1 / GPT 6.1 Sol / Claude Sonnet 5.5 | 原生 / 适配底座 | 8.5% / 8.4% / 8.2% | \$67.16 / \$9.80 / \$45.27 | GPT 6.1 Sol 占据低成本帕累托边界（\$9.80/任务），GLM 5.3 录得 2.7%（另有 DeepSeek、Luna 参评） |

- ✅ 本工作台核查 ①（为什么最强模型仅 12.0%）：主因在于双重刚性机制挤压，单步推理能力本身并未倒退。第一，长程零容错门槛——在 4,000 个文件的私募股权数据室审阅或合同红线修订等 Finance 与 Legal 复杂任务中，上线期严格二元判分下几乎所有模型均录得约 0%，多步状态一致性和跨文件校验仍是绝对短板；第二，安全分类器自残（Safety Classifier Sandbagging）——Claude Opus 5.5 与 GPT-6 Astra 在 Cybersecurity、Biology 与 Alignment 敏感测试中频繁触发安全分类器误拒答，反而使安全护栏更宽松的 Gemini 4 Carbon（10.9%）与 Muse Wonder Full（9.0%）大幅缩窄甚至反超分项差距。
- ⚠️ 本工作台核查 ②（单任务成本与人机经济账边界）：虽然公开摘要未给出完整的 11 域人类基准工时与时薪对照原表，但仅从公开 API 账单即可倒推真实部署经济账——Claude Opus 5.5 单次尝试推理成本 \$51.41（吐出约 548,000 输出 token），而一次通过率只有 12.0%。若未配合确定性沙盒验证器直接按期望重试次数（1 ÷ 0.12 ≈ 8.3 次）粗暴重跑，有效交付算力成本将跃升至约 \$428/任务；相比之下，Gemini 4 Carbon（\$16.29/任务，594,000 输出 token）与 GPT 6.1 Sol（\$9.80/任务）显著降低了长程探索成本，但高单价模型当前仅在量化交易、芯片设计与硬件 CAD 等高毛利研发场景具备替代或辅助初级工程师的 ROI。

### 三、跨库互证：GDPx 12% vs Mercor APEX-Agents 24% 与 Anthropic 900% NRR 传导

- ✅ 本工作台核查 ③（横向对比 Mercor Labor Benchmark Map 与 APEX-Agents）：在本库已归档的 [90% 的美国工作，没有任何 AI 基准覆盖](../../AI训练与数据/blogs/90%25%E7%9A%84%E7%BE%8E%E5%9B%BD%E5%B7%A5%E4%BD%9C%EF%BC%8C%E6%B2%A1%E6%9C%89%E4%BB%BB%E4%BD%95AI%E5%9F%BA%E5%87%86%E8%A6%86%E7%9B%96.md) 中，Mercor 映射美国劳工部 O*NET 923 种职业、18,797 项任务指出 90% 的美国工时缺乏现有基准覆盖；而在同赛道 [Mercor APEX-Agents & AI Consumer Index (ACE)](Mercor%20APEX-Agents%20%26%20AI%20Consumer%20Index%20%28ACE%29_%20Enterprise%20Multi-App%20Simulated%20Worlds%20vs%20Consumer%20Web-Grounding%20.md) 中，480 项投行/咨询/律所跨软件仿真任务最高 Pass@1 也仅 24.0%（且连续 8 次全过的 pass^8 仅 6.5%–13.4%）。SemiAnalysis GDPx（12.0%）与 Mercor APEX-Agents（24.0%）共同交叉印证：一旦脱离单轮问答进入跨多软件、多小时的长程状态保持，前沿模型独立交付率普遍卡在 10%–25% 区间。
- ⚠️ 本工作台推断（12% 基准与 Anthropic ~900% NRR 的真实传导机制）：结合本库 [Anthropic 路演纪要全文+PPT](../../AI产业与商业/blogs/Anthropic%20路演纪要全文%2BPPT.md) 披露的 9M26 营收 \$332.42 亿、10 月 ARR 约 \$810 亿及企业/API 净收入留存率（NRR）约 900% 可见，企业付费扩量并不以「模型 100% 替代人类自主完成 8 小时任务」为前提。当前商业爆发来自「工程师或研究员主导的人机协同 Harness（如 Claude Code）」，哪怕端到端一次全过率仅 12.0%，单任务吞吐 548,000 输出 token 已成常态，反而因试错迭代与局部验证放大了 token 消耗斜率；真正被 12%（及 Finance/Legal 0%）锁死的，是无专业人员兜底的全自动白领外包场景。

### 观点与可反驳条件

- ==观点==：GDPx 以 11 域 206 项 8 小时原生 harness 评测将行业能力水位从 80%–90% 虚高重置至 12.0%，精准划定了当前商业落地的边界——token 消耗型研发辅助（Claude Code / Antigravity / Codex）已跨过可用拐点（对应 Anthropic ~900% NRR），而高合规容错率为零的端到端金融与法律自主交付（0%）在未来 12 个月仍难规模化放量，模型竞争重心正从榜单刷分转向单位成本（Gemini 4 Carbon \$16.29 vs Opus 5.5 \$51.41）与安全分类器精确度优化。
- ==推翻条件==：
  1. 若在 2027 年 Q2 前下一代主流旗舰模型在 GDPx v1.0 未放宽判分标准的条件下将综合 pass@1 突破 35.0% 且 Finance 与 Legal 分域得分同步升至 25.0% 以上，同时保持单任务有效交付成本（计入重试次数后）低于 \$100，则「自主知识工作短期难脱人工复核」的判断将被证伪。
  2. 若企业大模型主要客户（如头部财报或 SEC 披露口径）显示非编程类金融、法务自主工作流在 2027H1 贡献的按量 API 增量收入占比超过 40%，且无需配套专业人员实时审校，则表明 GDPx 的二元苛刻判分低估了真实商业替代弹性。

---

## 原文摘录与一手信源存证

> 【信源巡检核心摘要】 SemiAnalysis发布真实经济价值域Agent能力基准测试GDPx（榜单托管于gdpx.semianalysis.com），横跨11个高价值行业域、共设206项复杂Agent任务，测评显示目前表现最强的前沿模型综合得分仍仅为12%，以量化工程数据揭示当前自主Agent在真实经济工作流中的能力上限与落地缺口。
> — 原文摘录，文字段落 1；证据 `digest-material-0c8fea001bbce89e1e9f4b52e53b827ff235b1392ed468ba3777b16590e1338d-excerpt-1@1`

一手材料：

- GDPx: Measuring Frontier Model Capabilities Across the Most Valuable Domains · SemiAnalysis · [原站](https://newsletter.semianalysis.com/p/gdpx-measuring-frontier-model-capabilities) · [主体档案：SemiAnalysis](../entities/companies/SemiAnalysis.md) · [本地原件](../../../raw/cf2ebce2aae31e2b3982190cd0db9d0a50e6e69d0557d92faf3a43ef666813cc)
  材料版本 `digest-material-cf2ebce2aae31e2b3982190cd0db9d0a50e6e69d0557d92faf3a43ef666813cc@1`；获取方式 `web_search_verified_primary`。
  > 3. Native Harnesses, Execution Limits & Grading Methodology - Execution limits: Tasks allow long-horizon agent execution up to 8 hours per task. — 原文提取

归属与范围：SemiAnalysis 于 2026-11-02 发布 GDPx（v1.0，作者 Max Kan、Andrew Megalaa、Dylan Patel），在 11 个高 ROI 行业域与 14 家数据/RL 伙伴共建的 206 项最长 8 小时复杂 Agent 任务中采用原生 harness（Claude Code、Antigravity、Codex、OpenCode）及 pass@1（3 次均值）评测，榜首 Claude Opus 5.5 综合得分仅 12.0%（\$51.41/任务，548,000 输出 token），Gemini 4 Carbon 10.9%（\$16.29/任务），GPT-6 Astra 9.6%（\$53.99/任务），揭示自主 Agent 在金融/法律近 0% 通过率与安全分类器误拒（sandbagging）下的工程天花板；本轮已按机制先行规范重构并补足 SemiAnalysis / OpenAI GDPval 行内链接与实体关系边。

来源缺口：

- `unavailable`：Substack 原文付费墙后段落及 gdpx.semianalysis.com 付费机构版全量 206 项任务明细、全部 14 家数据/RL 合作伙伴完整名单尚未在沙箱内直接抓回全文（当前仅检索到 LatchBio、Datacurve、Arithmetic 等部分伙伴及公开榜单主表）。 [线索](https://gdpx.semianalysis.com/)
- `not_disclosed`：公开摘要未披露 11 个行业域中各模型的逐域精确得分矩阵、人类专家基准工时与时薪对照表完整原表，以及 Meta Muse Wonder Full、GLM 5.3、DeepSeek 与 Luna 的单任务美元成本细目。 [线索](https://newsletter.semianalysis.com/p/gdpx-measuring-frontier-model-capabilities)

[返回赛道总览](../赛道总览.md#digest-0c8fea001bbce89e) · [返回导读索引](README.md) · [主体档案库](../entities/README.md)
