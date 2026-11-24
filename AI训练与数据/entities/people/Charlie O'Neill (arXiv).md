# Charlie O'Neill (arXiv)

[返回主体档案库](../README.md) · [返回赛道总览](../../赛道总览.md) · [单篇导读索引](../../blogs/README.md)

- 主体类别：👤 个人与学者 (People)
- 核心定位与说明：Base Labs / Parsed KV Cache 压缩核心预印本。
- 关联账号与官方入口：
  - arXiv（Charlie O'Neill (arXiv)）：[作者索引](https://arxiv.org/search/?query=Charles+O%27Neill&searchtype=author) · 登记对象 `digest-publisher-d6fb420b6e8e611812b008ee` — Base Labs / Parsed KV Cache 压缩核心预印本。

## 1. 核心研究问题与待核查争议（Questions & Open Debates）

### 🔍 待核查缺口与证据边界（Open Gaps）

- `unavailable`：Substrate Magazine 原文页面在 39,755 字符处（第 45 分钟前后「Compressing the KV cache — Cat: Do you find that there are interesting ways to build a hybrid in between?」）触发 Substack 付费订阅墙截断，55 分钟音频最后约 10 分钟逐字稿未完全暴露；伴随 YouTube 视频（https://www.youtube.com/watch?v=B-mX7R6dB\_0）在 ingest.fetch 非浏览器环境下仅返回 157 字节无字幕外壳，混合内存架构后端细节暂以 Charlie O'Neill 同题个人长文及 arXiv:2606.07878（Still）补全。 [线索](https://www.youtube.com/watch?v=B-mX7R6dB_0)（关联：[《Open Source AI with Baseten's Co-Head of Research Charlie O'Neill》](../../blogs/Open%20Source%20AI%20with%20Baseten%27s%20Co-Head%20of%20Research%20Charlie%20O%27Neill.md)）
- `not_disclosed`：访谈引用 OpenRouter 开源模型占比 75%（一年前 21%）及约 70% token 量 / 30% 收入拆解，但未披露样本内部中美开源权重分布、企业生产调用 vs 个人开发者长尾对话占比；Baseten 亦未公开其每 GW 算力单位毛利、Loops 训练收入占比及与 OpenAI B2B Marketplace 分成比例。 [线索](https://read.substratemag.com/p/open-source-ai-with-basetens-co-head-4a9306ca)（关联：[《Open Source AI with Baseten's Co-Head of Research Charlie O'Neill》](../../blogs/Open%20Source%20AI%20with%20Baseten%27s%20Co-Head%20of%20Research%20Charlie%20O%27Neill.md)）

- [《Open Source AI with Baseten's Co-Head of Research Charlie O'Neill》](../../blogs/Open%20Source%20AI%20with%20Baseten%27s%20Co-Head%20of%20Research%20Charlie%20O%27Neill.md)：全库查重确认无既有重复建档（仅存本条目日推初始占位，Baseten 仅在 Fal 与 AWS Matt Garman 导读被旁及，Charlie O'Neill 仅于 podcast-source-discovery 登记过 2026-09 Dwarkesh 联播线索）。本轮拉通 Substrate Magazine 39,755 字符访谈全文（付费墙截取前约 45 分钟，覆盖至 KV Cache 压缩处）及 Charlie O'Neill / Baseten 五份一手原件：1) Baseten 观点长文《The Michael Scott Paper Company of AI》（18,306 字符，提出「绝对智能门槛」与时间不对称）；2) Baseten 官方公告《Announcing our partnership with OpenAI》（4,884 字符，证实 OpenAI B2B Marketplace 与 Codex 原生接入 Baseten 开源推理及 90+ 集群/20+ 云/200+ 算力商与 Blaxel 沙盒）；3) 个人技术长文《Trying to actually define continual learning》（14,158 字符，量化 Llama 3.1 70B 权重 141 GB vs KV Cache 320 KiB/token 于 431,000 tokens 反超）；4) 预印本 arXiv:2607.11020（Qwen3 经 20 轮连续写入合并后，重复陈述旧事实准确率跌至 1%，24 种改写样本留存 46%）；5) 预印本 arXiv:2606.07878（Still 单次前向传播 KV 压缩 8x–200x，8k–128k RULER 领先强基线 8–22 分）。

## 2. 收录文章与一手材料（Ingested Articles & Primary Sources）

### [Open Source AI with Baseten's Co-Head of Research Charlie O'Neill](../../blogs/Open%20Source%20AI%20with%20Baseten%27s%20Co-Head%20of%20Research%20Charlie%20O%27Neill.md)

2026-11-17 · 来源：Substrate Magazine (Cat Tang) · Charlie O'Neill (Baseten / Base Labs) · 状态：有来源缺口

[单篇导读（blogs/）](../../blogs/Open%20Source%20AI%20with%20Baseten%27s%20Co-Head%20of%20Research%20Charlie%20O%27Neill.md) · [微信原件](../../../../raw/bcf456f1d2f3920cb6b85f3f997fb6f2868fdd2d9214276a36c81dd4bcd29aa2) · 固定版本 `digest-material-bcf456f1d2f3920cb6b85f3f997fb6f2868fdd2d9214276a36c81dd4bcd29aa2@1`

> Last week on OpenRouter, open source token share crossed 75% of total volume, up from 21% last year.

> I think the most valuable thing in the world and the exogenous factor or input to how good any given startup or any given model or whatever will be is purely data.

关联一手材料：

- Trying to actually define continual learning（Charlie O'Neill）· [原站](https://charlesponeill.com/posts/defining-continual-learning/) · [本地原件](../../../../raw/831560f4f09f10fcc8d4855dd7a524462c934920412e91243ba43fdad92de612) · 版本 `digest-material-831560f4f09f10fcc8d4855dd7a524462c934920412e91243ba43fdad92de612@1`
  > Every AI agent today is an amnesiac intern. You can teach it an astonishing amount inside one context window. Then the context window ends, a new intern arrives, and all it has are the notes the previous one left behind. — 原文提取
- Can a Language Model Learn Facts Continually in Its Weights? (arXiv:2607.11020v3)（Charles O'Neill, Max Kirkby, Jonathon Liu & Michael Psenka (Base Labs)）· [原站](https://arxiv.org/abs/2607.11020) · [本地原件](../../../../raw/5563f6864b4117f5d25988857f53a1ff0bee90510ea82ff008157e86d872dc0b) · 版本 `digest-material-5563f6864b4117f5d25988857f53a1ff0bee90510ea82ff008157e86d872dc0b@1`
  > Title:Can a Language Model Learn Facts Continually in Its Weights? — 原文提取
- Still: Amortized KV Cache Compaction in a Single Forward Pass (arXiv:2606.07878)（Charles O'Neill, Alex Sandomirsky, Harry Partridge, Mudith Jayasekara & Max Kirkby）· [原站](https://arxiv.org/abs/2606.07878) · [本地原件](../../../../raw/d47e954f15cd713a4820aac415f1aa1562b39f6f7c7af11ec4702fe907aaffde) · 版本 `digest-material-d47e954f15cd713a4820aac415f1aa1562b39f6f7c7af11ec4702fe907aaffde@1`
  > Abstract:The KV cache is the memory bottleneck of long-horizon language model deployment. — 原文提取


## 3. 关联实体网络（Verified Entity Ontology）

- → Parsed · 创立（rule_verified/verified）
- → [Baseten](../companies/Baseten.md) · 任职 / 隶属（rule_verified/verified）
