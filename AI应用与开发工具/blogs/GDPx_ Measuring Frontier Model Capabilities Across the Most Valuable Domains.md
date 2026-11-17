---
title: "GDPx: Measuring Frontier Model Capabilities Across the Most Valuable Domains"
type: blog_digest
sector: "AI应用与开发工具"
source: "SemiAnalysis"
published_at: "2026-11-02"
raw_sha256: "0c8fea001bbce89e1e9f4b52e53b827ff235b1392ed468ba3777b16590e1338d"
material_version: "digest-material-0c8fea001bbce89e1e9f4b52e53b827ff235b1392ed468ba3777b16590e1338d@1"
origin_url: "https://newsletter.semianalysis.com/p/gdpx-measuring-frontier-model-capabilities"
trigger_source: "SemiAnalysis"
trigger_url: "https://newsletter.semianalysis.com/p/gdpx-measuring-frontier-model-capabilities"
user_comments: ""
status: "processed_with_gaps"
---

<a id="digest-0c8fea001bbce89e"></a>
# GDPx: Measuring Frontier Model Capabilities Across the Most Valuable Domains

2026-11-02 · SemiAnalysis · 有来源缺口

[本地原件归档](../../../raw/0c8fea001bbce89e1e9f4b52e53b827ff235b1392ed468ba3777b16590e1338d) · 固定材料版本 `digest-material-0c8fea001bbce89e1e9f4b52e53b827ff235b1392ed468ba3777b16590e1338d@1` · [一手原站](https://newsletter.semianalysis.com/p/gdpx-measuring-frontier-model-capabilities)

## 深度拆解与复核

## 深度导读与跨库核查

- 来源：[SemiAnalysis 原文：GDPx: Measuring Frontier Model Capabilities Across the Most Valuable Domains](https://newsletter.semianalysis.com/p/gdpx-measuring-frontier-model-capabilities) · [GDPx 官方榜单门户](https://gdpx.semianalysis.com/)
- ==核心结论==：SemiAnalysis（作者 Max Kan、Andrew Megalaa、Dylan Patel）在传统单轮基准饱和至 80%–90% 后推出 GDPx v1.0，横跨 11 个高价值技术与专业域共 206 项最长 8 小时自主任务；榜首 Claude Opus 5.5 综合 pass@1 仅 12.0%（单任务推理成本 \$51.41），且 Finance 与 Legal 域几乎全员 0%，说明当前 Agent 尚无法脱离人类工程复核独立闭环高风险工作流，但其在代码与量化领域的长程 token 消耗（单任务 548,000–594,000 输出 token）已足够撑起 Anthropic 约 900% 的企业 NRR。

### 一、场景与利益标注（Editorial Attribution & Incentives）

- 发布立场与商业激励：SemiAnalysis 主营半导体、算力供给与机构级 AI 付费研报，本次将 GDPx 公开榜单设在 gdpx.semianalysis.com 并保留部分题目闭源防刷榜，同时把深层任务剖面与机构分析工具挂钩其付费订阅体系。相比 OpenAI 的 GDPval 尝试按全经济行业权重抽样，SemiAnalysis 刻意剔除政府、房地产、保险等低 ROI 官僚部门，直接聚焦芯片、量化、生科、软件等最先为算力付费的高客单价领域，天然强化“复杂任务仍需重度算力投入与精细化工具链选型”的买方需求叙事。

### 二、11 域 206 任务评测架构与榜单经济性拆解

| 前沿模型（v1.0 榜单） | 原生执行底座（Harness） | 综合 pass@1 | 单任务推理成本 | 输出 token 与域内优势特征（本工作台核查） |
| :--- | :--- | :--- | :--- | :--- |
| Claude Opus 5.5（Anthropic） | Claude Code | 12.0% | \$51.41 | 约 548,000 输出 token；总榜第一，领跑 Quantitative Trading、Hardware Design 与 Chip Design |
| Gemini 4 Carbon（Google） | Antigravity | 10.9% | \$16.29 | 约 594,000 输出 token，成本不足 Opus 5.5 的三分之一；领跑 Biology 与 Software Engineering |
| GPT-6 Astra（OpenAI） | Codex | 9.6% | \$53.99 | 领跑 Recursive Self-Improvement（RSI）与 Materials Science |
| Muse Wonder Full（Meta） | OpenCode / 适配底座 | 9.0% | 未披露 | 受益于宽松安全分类器，大幅领跑 Cybersecurity |
| Claude Fable 5.1 / GPT 6.1 Sol / Claude Sonnet 5.5 | 原生 / 适配底座 | 8.5% / 8.4% / 8.2% | \$67.16 / \$9.80 / \$45.27 | GPT 6.1 Sol 占据低成本帕累托边界（\$9.80/任务），GLM 5.3 录得 2.7%（另有 DeepSeek、Luna 参评） |

- 11 个高价值域与 14 家共建伙伴：GDPx 涵盖 Chip Design、Cybersecurity、Biology（数据伙伴含 LatchBio）、Finance、Legal、Quantitative Trading、Recursive Self-Improvement（RSI）、Hardware Design（CAD、CAM、PCB 布局）、Materials Science、Alignment 与 Software Engineering（数据伙伴含 Datacurve，另有 Arithmetic 等共 14 家专业 RL/数据合作方）。评分摒弃早期主观量表（如 GDPval 的低评分者一致性），将确定性验证器（deterministic verifiers）、企业真实真值数据与结构化量表混合，在最长 8 小时执行预算下取 3 次尝试的 pass@1 均值并对 11 域等权汇总。

- ✅ 本工作台核查 ①（为什么最强模型仅 12.0%）：并非单步推理倒退，而是双重刚性收敛所致。第一，长程零容错门槛——在 4,000 个文件的私募股权数据室审阅或合同红线修订等 Finance 与 Legal 复杂任务中，二元交付判分下几乎所有模型初始均录得 0%；第二，安全分类器自残（Sandbagging）——Claude Opus 5.5 与 GPT-6 Astra 在 Cybersecurity、Biology 与 Alignment 敏感任务中频繁触发安全拒答误杀，使安全护栏较轻的 Gemini 4 Carbon（10.9%）与 Muse Wonder Full（9.0%）大幅缩窄甚至反超分项差距。

- ⚠️ 本工作台核查 ②（单任务成本与人机经济账边界）：虽然公开摘要未给出完整的 11 域人类时薪对照原表，但仅从公开 API 账单即可反推真实部署经济账——Claude Opus 5.5 单次尝试成本 \$51.41 却只有 12.0% pass@1 一次性成功概率。若未配合确定性沙盒验证器直接多次重试（按期望次数 1 ÷ 0.12 ≈ 8.3 次估算，有效交付算力成本跳升至约 \$428/任务），高单价模型仅在量化交易、芯片设计与硬件 CAD 等高毛利研发场景具备替代或辅助初级工程师的 ROI；常规低单价流水线文书若无高一次通过率反而难以跑通成本账。

### 三、跨库互证：为什么 GDPx 12% 与 Mercor 基准、Anthropic ~900% NRR 并不矛盾

- ✅ 本工作台核查 ③（横向对比 Mercor Labor Benchmark Map 与 APEX-Agents）：在本库已归档的[90%的美国工作，没有任何AI基准覆盖](../../AI%E8%AE%AD%E7%BB%83%E4%B8%8E%E6%95%B0%E6%8D%AE/blogs/90%25%E7%9A%84%E7%BE%8E%E5%9B%BD%E5%B7%A5%E4%BD%9C%EF%BC%8C%E6%B2%A1%E6%9C%89%E4%BB%BB%E4%BD%95AI%E5%9F%BA%E5%87%86%E8%A6%86%E7%9B%96.md)中，Mercor 映射美国劳工部 O*NET 923 种职业、18,797 项任务指出 90% 的美国工时缺乏现有基准覆盖；而在同赛道[Mercor APEX-Agents & AI Consumer Index (ACE)](Mercor%20APEX-Agents%20%26%20AI%20Consumer%20Index%20%28ACE%29_%20Enterprise%20Multi-App%20Simulated%20Worlds%20vs%20Consumer%20Web-Grounding%20.md)中，480 项投行/咨询/律所跨软件仿真任务最高 Pass@1 也仅 24.0%（且连续 8 次全过的 pass^8 仅 6.5%–13.4%）。SemiAnalysis GDPx（12.0%）与 Mercor APEX-Agents（24.0%）共同交叉印证：一旦脱离单轮问答进入跨多软件、多小时的长程状态保持，前沿模型独立交付率普遍卡在 10%–25% 区间。

- ⚠️ 本工作台推断（12% 基准与 Anthropic ~900% NRR 的真实传导机制）：结合本库[Anthropic 路演纪要全文+PPT](../../AI%E4%BA%A7%E4%B8%9A%E4%B8%8E%E5%95%86%E4%B8%9A/blogs/Anthropic%20%E8%B7%AF%E6%BC%94%E7%BA%AA%E8%A6%81%E5%85%A8%E6%96%87%2BPPT.md)披露的 9M26 营收 \$332.42 亿、10 月 ARR 约 \$810 亿及企业/API 净收入留存率（NRR）约 900% 可见，企业付费扩量并不以“模型 100% 替代人类自主完成 8 小时任务”为前提。当前商业爆发来自“工程师或研究员主导的人机协同 Harness（如 Claude Code）”，哪怕端到端一次全过率仅 12.0%，单任务吞吐 548,000 输出 token 已成常态，反而因试错迭代与局部验证放大了 token 消耗斜率；真正被 12%（及 Finance/Legal 0%）锁死的，是无专业人员兜底的全自动白领外包场景。

### 观点与可反驳条件

- ==观点==：GDPx 以 11 域 206 项 8 小时原生 harness 评测将行业能力水位从 80%–90% 虚高重置至 12.0%，精准划定了当前商业落地的边界——token 消耗型研发辅助（Claude Code / Antigravity / Codex）已跨过可用拐点（对应 Anthropic ~900% NRR），而高合规容错率为零的端到端金融与法律自主交付（0%）在未来 12 个月仍难规模化放量，模型竞争重心正从榜单刷分转向单位成本（Gemini 4 Carbon \$16.29 vs Opus 5.5 \$51.41）与安全分类器精确度优化。
- ==推翻条件==：
  1. ① 若在 2027 年 Q2 前下一代主流旗舰模型在 GDPx v1.0 未放宽判分标准的条件下将综合 pass@1 突破 35.0% 且 Finance 与 Legal 分域得分同步升至 25.0% 以上，同时保持单任务有效交付成本（计入重试次数后）低于 \$100，则“自主知识工作短期难脱人工复核”的判断将被证伪。
  2. ② 若企业大模型主要客户（如头部财报或 SEC 披露口径）显示非编程类金融、法务自主工作流在 2027H1 贡献的按量 API 增量收入占比超过 40%，且无需配套专业人员实时审校，则表明 GDPx 的二元苛刻判分低估了真实商业替代弹性。

---

## 原文摘录与一手信源存证

> 【信源巡检核心摘要】 SemiAnalysis发布真实经济价值域Agent能力基准测试GDPx（榜单托管于gdpx.semianalysis.com），横跨11个高价值行业域、共设206项复杂Agent任务，测评显示目前表现最强的前沿模型综合得分仍仅为12%，以量化工程数据揭示当前自主Agent在真实经济工作流中的能力上限与落地缺口。
> — 原文摘录，文字段落 1；证据 `digest-material-0c8fea001bbce89e1e9f4b52e53b827ff235b1392ed468ba3777b16590e1338d-excerpt-1@1`

一手材料：

- GDPx: Measuring Frontier Model Capabilities Across the Most Valuable Domains · SemiAnalysis · [原站](https://newsletter.semianalysis.com/p/gdpx-measuring-frontier-model-capabilities) · [主体档案：SemiAnalysis](../entities/companies/SemiAnalysis.md) · [本地原件](../../../raw/cf2ebce2aae31e2b3982190cd0db9d0a50e6e69d0557d92faf3a43ef666813cc)
  材料版本 `digest-material-cf2ebce2aae31e2b3982190cd0db9d0a50e6e69d0557d92faf3a43ef666813cc@1`；获取方式 `web_search_verified_primary`。
  > 3. Native Harnesses, Execution Limits & Grading Methodology - Execution limits: Tasks allow long-horizon agent execution up to 8 hours per task. — 原文提取

归属与范围：SemiAnalysis 于 2026-11-02 发布 GDPx（v1.0），在 11 个高 ROI 行业域与 14 家数据/RL 伙伴共建的 206 项最长 8 小时复杂 Agent 任务中采用原生 harness（Claude Code、Antigravity、Codex、OpenCode）及 pass@1（3 次均值）评测，榜首 Claude Opus 5.5 综合得分仅 12.0%（\\\$51.41/任务，548,000 输出 token），Gemini 4 Carbon 10.9%（\\\$16.29/任务），GPT-6 Astra 9.6%（\\\$53.99/任务），揭示自主 Agent 在金融/法律近 0% 通过率与安全分类器误拒（sandbagging）下的工程天花板。

来源缺口：

- `unavailable`：Substack 原文付费墙后段落及 gdpx.semianalysis.com 付费机构版全量 206 项任务明细、全部 14 家数据/RL 合作伙伴完整名单尚未在沙箱内直接抓回全文（当前仅检索到 LatchBio、Datacurve、Arithmetic 等部分伙伴及公开榜单主表）。 [线索](https://gdpx.semianalysis.com/)
- `not_disclosed`：公开摘要未披露 11 个行业域中各模型的逐域精确得分矩阵、人类专家基准工时与时薪对照表完整原表，以及 Meta Muse Wonder Full、GLM 5.3、DeepSeek 与 Luna 的单任务美元成本细目。 [线索](https://newsletter.semianalysis.com/p/gdpx-measuring-frontier-model-capabilities)

[返回赛道总览](../赛道总览.md#digest-0c8fea001bbce89e) · [返回导读索引](README.md) · [主体档案库](../entities/README.md)
