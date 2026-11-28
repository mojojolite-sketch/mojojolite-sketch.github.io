# Baseten

[返回主体档案库](../README.md) · [返回赛道总览](../../赛道总览.md) · [单篇导读索引](../../blogs/README.md)

- 主体类别：🏢 公司与产业主体 (Companies)
- 核心定位与说明：开源模型推理、后训练与智能体执行基础设施平台 开源 Truss 等部署工具链
- 关联账号与官方入口：
  - GitHub（Baseten）：[账号主页](https://github.com/basetenlabs) · 登记对象 `digest-publisher-84e1485eeeb8323d5673a68b` — 开源 Truss 等部署工具链
  - Official Website（Baseten）：[机构／作者主页](https://www.baseten.co/) · 登记对象 `digest-publisher-5719d4db2a20d72181db2c24` — 开源模型推理、后训练与智能体执行基础设施平台

## 1. 核心研究问题与待核查争议（Questions & Open Debates）

### 🔍 待核查缺口与证据边界（Open Gaps）

- `unavailable`：Substrate Magazine 原文页面在 39,755 字符处（第 45 分钟前后「Compressing the KV cache — Cat: Do you find that there are interesting ways to build a hybrid in between?」）触发 Substack 付费订阅墙截断，55 分钟音频最后约 10 分钟逐字稿未完全暴露；伴随 YouTube 视频（https://www.youtube.com/watch?v=B-mX7R6dB\_0）在 ingest.fetch 非浏览器环境下仅返回 157 字节无字幕外壳，混合内存架构后端细节暂以 Charlie O'Neill 同题个人长文及 arXiv:2606.07878（Still）补全。 [线索](https://www.youtube.com/watch?v=B-mX7R6dB_0)（关联：[《Open Source AI with Baseten's Co-Head of Research Charlie O'Neill》](../../blogs/Open%20Source%20AI%20with%20Baseten%27s%20Co-Head%20of%20Research%20Charlie%20O%27Neill.md)）
- `not_disclosed`：访谈引用 OpenRouter 开源模型占比 75%（一年前 21%）及约 70% token 量 / 30% 收入拆解，但未披露样本内部中美开源权重分布、企业生产调用 vs 个人开发者长尾对话占比；Baseten 亦未公开其每 GW 算力单位毛利、Loops 训练收入占比及与 OpenAI B2B Marketplace 分成比例。 [线索](https://read.substratemag.com/p/open-source-ai-with-basetens-co-head-4a9306ca)（关联：[《Open Source AI with Baseten's Co-Head of Research Charlie O'Neill》](../../blogs/Open%20Source%20AI%20with%20Baseten%27s%20Co-Head%20of%20Research%20Charlie%20O%27Neill.md)）
- `unavailable`：YouTube 原视频页面（https://www.youtube.com/watch?v=xE3ZtaomcxI，MTS @mtsituation 频道，时长 16m46s）触发平台人机验证拦截且 MTS Substack（mtslive.substack.com）返回 HTTP 403，未取回完整未删节逐字稿；本工作台已通过 YouTube oEmbed、BigGo 播客分节实录及 6 条逐字引文还原 8 个时间戳与核心论据，并穿透 Baseten 官网三篇一手发布文章完成产品事实核验 [线索](https://www.youtube.com/watch?v=xE3ZtaomcxI)（关联：[《Why AI Research Won't Hit Fast Takeoff | Charlie O'Neill》](../../blogs/Why%20AI%20Research%20Won%27t%20Hit%20Fast%20Takeoff%20_%20Charlie%20O%27Neill.md)）
- `not_disclosed`：Charlie O'Neill 在访谈中估算当前 Transformer + RL 架构在预训练阶段仅余 15%–20% 损失下降空间，并引用 OpenAI 研究员 2025-12 至 2026-08 消耗 124x Token 仅产出 1.6x 实验数及 METR 15 分钟 ML 任务时间视野，但访谈未公开 15%–20% 残余空间的具体缩放律参数拟合式、基线数据量与完整实验分母定义；Baseten 官方博客亦未公开 Grid（宣称相对 Opus 5.5 降本达 70%、质量折损 0.9 个百分点）的具体评估任务分布与 Serverless Loops 每 Token 定价表 [线索](https://www.baseten.co/blog/introducing-baseten-grid/)（关联：[《Why AI Research Won't Hit Fast Takeoff | Charlie O'Neill》](../../blogs/Why%20AI%20Research%20Won%27t%20Hit%20Fast%20Takeoff%20_%20Charlie%20O%27Neill.md)）
- `not_disclosed`：文中引用在 Parsed 与 Baseten 实测 sub-80B 领域微调模型在保险理赔工作流上击败 GPT-5.2，以及 50,000 条理赔记录、0 到 70 与 70 到 95 的能力分段，但未公开具体客户样本量、基准评测明细、延迟与单次推理成本对照表。 [线索](https://www.baseten.co/blog/the-michael-scott-paper-company-of-ai/)（关联：[《The Michael Scott Paper Company of AI》](../../blogs/The%20Michael%20Scott%20Paper%20Company%20of%20AI.md)）
- `not_disclosed`：文章主张开源生态覆盖约 90% 具经济价值工作后将分流闭源实验室高毛利层，但未定量测算企业在自建私域 RL 环境、奖励函数设计与持续维护上的隐性工程人力成本。 [线索](https://www.baseten.co/blog/the-michael-scott-paper-company-of-ai/)（关联：[《The Michael Scott Paper Company of AI》](../../blogs/The%20Michael%20Scott%20Paper%20Company%20of%20AI.md)）

- [《Open Source AI with Baseten's Co-Head of Research Charlie O'Neill》](../../blogs/Open%20Source%20AI%20with%20Baseten%27s%20Co-Head%20of%20Research%20Charlie%20O%27Neill.md)：全库查重确认无既有重复建档（仅存本条目日推初始占位，Baseten 仅在 Fal 与 AWS Matt Garman 导读被旁及，Charlie O'Neill 仅于 podcast-source-discovery 登记过 2026-09 Dwarkesh 联播线索）。本轮拉通 Substrate Magazine 39,755 字符访谈全文（付费墙截取前约 45 分钟，覆盖至 KV Cache 压缩处）及 Charlie O'Neill / Baseten 五份一手原件：1) Baseten 观点长文《The Michael Scott Paper Company of AI》（18,306 字符，提出「绝对智能门槛」与时间不对称）；2) Baseten 官方公告《Announcing our partnership with OpenAI》（4,884 字符，证实 OpenAI B2B Marketplace 与 Codex 原生接入 Baseten 开源推理及 90+ 集群/20+ 云/200+ 算力商与 Blaxel 沙盒）；3) 个人技术长文《Trying to actually define continual learning》（14,158 字符，量化 Llama 3.1 70B 权重 141 GB vs KV Cache 320 KiB/token 于 431,000 tokens 反超）；4) 预印本 arXiv:2607.11020（Qwen3 经 20 轮连续写入合并后，重复陈述旧事实准确率跌至 1%，24 种改写样本留存 46%）；5) 预印本 arXiv:2606.07878（Still 单次前向传播 KV 压缩 8x–200x，8k–128k RULER 领先强基线 8–22 分）。
- [《Why AI Research Won't Hit Fast Takeoff | Charlie O'Neill》](../../blogs/Why%20AI%20Research%20Won%27t%20Hit%20Fast%20Takeoff%20_%20Charlie%20O%27Neill.md)：已查重确认 work/views/AI训练与数据/blogs/ 仅存本条目占位，并调取站内已入库 Charlie O'Neill 三项成果（《The Michael Scott Paper Company of AI》、Substrate Magazine 专访、arXiv:2607.11020 与 Still arXiv:2606.07878）及 Dwarkesh RSI 辩护导读完成横向对账。因 YouTube 原页触发人机验证且 MTS Substack 返回 403，已通过公开 oEmbed、BigGo 8 节时间戳摘要与 6 条原话引文整理至 snap\_d0138.txt（未获官方完整逐字稿已在 gaps 记 unavailable），并穿透抓取访谈当日（2026-11-03/04/06）Baseten 发布的 Grid、Sandboxes（收购 Blaxel）与 Serverless Loops 三篇一手博客。
- [《The Michael Scott Paper Company of AI》](../../blogs/The%20Michael%20Scott%20Paper%20Company%20of%20AI.md)：通读 Charlie O'Neill 发表于 Baseten 的原始长文《The Michael Scott Paper Company of AI》（初版 2026-02-13、2026-11-03 更新，全文 18,306 字符），系统拆解绝对智能天花板（Intelligence Ceiling）、资本时钟 vs 能力/成本时钟的时间不对称、大实验室组织形态约束、RL 泛化反驳与 90%/10% 演进顺序，并与本库 Substrate 访谈、Anthropic S-1/A、Trajectory 及 arXiv:2607.11020 交叉核查。

## 2. 阅读笔记与原文 Highlight（Reading Highlights & Marginalia）

### 🖍️ 摘录与批注：《The Michael Scott Paper Company of AI》（1 条）

关联文章：[《The Michael Scott Paper Company of AI》](../../blogs/The%20Michael%20Scott%20Paper%20Company%20of%20AI.md)

- O'Neill 将 2026-02 在 Baseten 发表的《The Michael Scott Paper Company of AI》推进为更精细的经济分工模型：对任何具经济价值的白领或代码任务，存在一条明确的智能及格线，越过该门槛后，通用智能继续拔高的边际收益迅速递减。在 80% 人类专家质量但成本低 200 倍、耗时数秒即可交付的领域，企业早期会先用闭源前沿模型快速验证 PMF，随后在成熟高频工作流上切回可定制开源模型。

> 导读核心结论：口径与利益披露：本文作者 Charles O'Neill（Charlie O'Neill）于 2026-02-13 在 Baseten 官方博客首次发布该文（2026-11-03 更新，全文 18,306 字符）。O'Neill 曾联合创立专注模型后训练的 Parsed（2025 年底被 Baseten 收购），现任 Baseten 联合研发负责人及旗下 Base Labs 主理人。作为开源模型推理与定制后训练基础设施商业利益方，作者具有明确激励论证「专精化开源模型将在企业高…


## 3. 收录文章与一手材料（Ingested Articles & Primary Sources）

### [Open Source AI with Baseten's Co-Head of Research Charlie O'Neill](../../blogs/Open%20Source%20AI%20with%20Baseten%27s%20Co-Head%20of%20Research%20Charlie%20O%27Neill.md)

2026-11-17 · 来源：Substrate Magazine (Cat Tang) · Charlie O'Neill (Baseten / Base Labs) · 状态：有来源缺口

[单篇导读（blogs/）](../../blogs/Open%20Source%20AI%20with%20Baseten%27s%20Co-Head%20of%20Research%20Charlie%20O%27Neill.md) · [微信原件](../../../../raw/bcf456f1d2f3920cb6b85f3f997fb6f2868fdd2d9214276a36c81dd4bcd29aa2) · 固定版本 `digest-material-bcf456f1d2f3920cb6b85f3f997fb6f2868fdd2d9214276a36c81dd4bcd29aa2@1`

> Last week on OpenRouter, open source token share crossed 75% of total volume, up from 21% last year.

> I think the most valuable thing in the world and the exogenous factor or input to how good any given startup or any given model or whatever will be is purely data.

关联一手材料：

- The Michael Scott Paper Company of AI（Baseten / Base Labs (Charlie O'Neill)）· [原站](https://www.baseten.co/blog/the-michael-scott-paper-company-of-ai/) · [本地原件](../../../../raw/efa0854d80b079cb7c176b4f6a0ea92a4f8cabdffaff901e87f85f54e348e889) · 版本 `digest-material-efa0854d80b079cb7c176b4f6a0ea92a4f8cabdffaff901e87f85f54e348e889@1`
  > Every model has an intelligence ceiling: the fraction of economically valuable work it can automate at a cost and quality where you'd be irrational not to deploy it. This is a lower bar than human-level performance — a model that's 80% as good as a domain expert but 200x cheaper and runs in seconds has cleared it comfortably for an enormous category of work. — 原文提取
- Announcing our partnership with OpenAI（Baseten (Dannie Herzberg)）· [原站](https://www.baseten.co/blog/baseten-openai-partnership/) · [本地原件](../../../../raw/0f206880bf70926fbb2ff46f0594b822323aeb412a384adf4fd8951af76acb85) · 版本 `digest-material-0f206880bf70926fbb2ff46f0594b822323aeb412a384adf4fd8951af76acb85@1`
  > Baseten is partnering with OpenAI to serve open models natively via Codex and the Responses API. — 原文提取

### [Why AI Research Won't Hit Fast Takeoff | Charlie O'Neill](../../blogs/Why%20AI%20Research%20Won%27t%20Hit%20Fast%20Takeoff%20_%20Charlie%20O%27Neill.md)

2026-11-04 · 来源：MTS (Monitoring the Situation) · Charlie O'Neill (Baseten / Base Labs) · 状态：有来源缺口

[单篇导读（blogs/）](../../blogs/Why%20AI%20Research%20Won%27t%20Hit%20Fast%20Takeoff%20_%20Charlie%20O%27Neill.md) · [微信原件](../../../../raw/53dac0d23eff2cfb41da09c75dd0f52b0fe5dd4e9fd5064e8df8fca433011cf8) · 固定版本 `digest-material-53dac0d23eff2cfb41da09c75dd0f52b0fe5dd4e9fd5064e8df8fca433011cf8@1`

> 【信源巡检核心摘要】 Charles O'Neill（Baseten Base Labs 负责人）在 MTS 访谈中论证 AI 研发难以触发爆炸式递归自我改进（fast takeoff），只能形成弱递归改进：在当前 Transformer + RL 范式下，进一步压低预训练损失与自动化 ML 研发面临算力/token 边际收益陡降以及真实 RL 仿真环境构建瓶颈，与前述基于专有工作流环境的渐进式专业化分工论点一致。

关联一手材料：

- Why AI Research Won't Hit Fast Takeoff | Charlie O'Neill（MTS (Monitoring the Situation) · Charlie O'Neill）· [原站](https://www.youtube.com/watch?v=xE3ZtaomcxI) · [本地原件](../../../../raw/6ebd7d1983354cb2109b94cebb692aa49b8ec0cbc16b3a78983d53675eb72095) · 版本 `digest-material-6ebd7d1983354cb2109b94cebb692aa49b8ec0cbc16b3a78983d53675eb72095@1`
  > = STRUCTURED EPISODE SUMMARY, METRICS & KEY QUOTES = Key Takeaways Baseten's Charlie O'Neill argues recursive self-improvement under the transformer+RL paradigm will stay weak, since compute and experiment bottlenecks mean AI research automation is harder than assumed and fast takeoff unlikely. — 原文提取
- The building blocks of the open frontier（Baseten (Amir Haghighat)）· [原站](https://www.baseten.co/blog/the-building-blocks-of-the-open-frontier/) · [本地原件](../../../../raw/5f4dc64357386d6fdd6a2e9abbacbda78384c4686bce1ebe8fc47e87cd4f75b1) · 版本 `digest-material-5f4dc64357386d6fdd6a2e9abbacbda78384c4686bce1ebe8fc47e87cd4f75b1@1`
  > This week we’re expanding our inference platform with three launches alongside our fresh new website. — 原文提取
- Introducing Baseten Grid（Baseten (Sai Maddali · Kenzie Amack)）· [原站](https://www.baseten.co/blog/introducing-baseten-grid/) · [本地原件](../../../../raw/ebd68e793e2c7f9bbbe66dfd2daed774ba936085ad984fc69b6ecb05b6323123) · 版本 `digest-material-ebd68e793e2c7f9bbbe66dfd2daed774ba936085ad984fc69b6ecb05b6323123@1`
  > Put the right model to work on every task and cut AI coding spend, with intelligent routing, unified access, and enterprise control. — 原文提取
- Introducing Serverless Loops: frontier RL training for everyone（Baseten (Kimbrian Canavan · Raymond Cano · Ardin Lo)）· [原站](https://www.baseten.co/blog/introducing-serverless-loops/) · [本地原件](../../../../raw/ece88f9b62d423cf9356971daa4778d63dc2248cc5625825b2edbd868bfd89d5) · 版本 `digest-material-ece88f9b62d423cf9356971daa4778d63dc2248cc5625825b2edbd868bfd89d5@1`
  > Loops is now generally available. Post-train on frontier open models and deploy directly to Baseten Dedicated Inference. — 原文提取

### [The Michael Scott Paper Company of AI](../../blogs/The%20Michael%20Scott%20Paper%20Company%20of%20AI.md)

2026-11-03 · 来源：Baseten / Base Labs (Charlie O'Neill) · 状态：有来源缺口

[单篇导读（blogs/）](../../blogs/The%20Michael%20Scott%20Paper%20Company%20of%20AI.md) · [微信原件](../../../../raw/efa0854d80b079cb7c176b4f6a0ea92a4f8cabdffaff901e87f85f54e348e889) · 固定版本 `digest-material-efa0854d80b079cb7c176b4f6a0ea92a4f8cabdffaff901e87f85f54e348e889@1`

> Every model has an intelligence ceiling: the fraction of economically valuable work it can automate at a cost and quality where you'd be irrational not to deploy it. This is a lower bar than human-level performance — a model that's 80% as good as a domain expert but 200x cheaper and runs in seconds has cleared it comfortably for an enormous category of work.

> This is what I saw building specialised models at Parsed, and what I continue to see at Baseten: a sub 80B model fine-tuned on a client's claims data will outperform GPT-5.2 on that client's claims workflow, not because it's a smarter model, but because it's been trained on the actual distribution it needs to perform on.

关联一手材料：

- The Michael Scott Paper Company of AI（Baseten / Base Labs (Charlie O'Neill)）· [原站](https://www.baseten.co/blog/the-michael-scott-paper-company-of-ai/) · [本地原件](../../../../raw/efa0854d80b079cb7c176b4f6a0ea92a4f8cabdffaff901e87f85f54e348e889) · 版本 `digest-material-efa0854d80b079cb7c176b4f6a0ea92a4f8cabdffaff901e87f85f54e348e889@1`
  > Every model has an intelligence ceiling: the fraction of economically valuable work it can automate at a cost and quality where you'd be irrational not to deploy it. This is a lower bar than human-level performance — a model that's 80% as good as a domain expert but 200x cheaper and runs in seconds has cleared it comfortably for an enormous category of work. — 原文提取


## 4. 关联实体网络（Verified Entity Ontology）

- → Parsed · 并购 / 接盘（rule_verified/verified）
- ← Base Labs · 任职 / 隶属 · Open Research Lab（decision1_verified/verified）
- → [OpenAI](../companies/OpenAI.md) · 合作 / 联合研发（rule_verified/verified）
- → Blaxel · 并购 / 接盘（rule_verified/verified）
- ← [Charlie O'Neill](../people/Charlie%20O%27Neill.md) · 任职 / 隶属（rule_verified/verified）
