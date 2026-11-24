---
title: "Open Source AI with Baseten's Co-Head of Research Charlie O'Neill"
type: blog_digest
sector: "AI训练与数据"
source: "Substrate Magazine (Cat Tang) · Charlie O'Neill (Baseten / Base Labs)"
published_at: "2026-11-17"
raw_sha256: "bcf456f1d2f3920cb6b85f3f997fb6f2868fdd2d9214276a36c81dd4bcd29aa2"
material_version: "digest-material-bcf456f1d2f3920cb6b85f3f997fb6f2868fdd2d9214276a36c81dd4bcd29aa2@1"
origin_url: "https://read.substratemag.com/p/open-source-ai-with-basetens-co-head-4a9306ca"
trigger_source: "Substrate Magazine (Cat Tang)"
trigger_url: "https://read.substratemag.com/p/open-source-ai-with-basetens-co-head-4a9306ca"
user_comments: ""
status: "processed_with_gaps"
---

<a id="digest-bcf456f1d2f3920c"></a>
# Open Source AI with Baseten's Co-Head of Research Charlie O'Neill

2026-11-17 · Substrate Magazine (Cat Tang) · Charlie O'Neill (Baseten / Base Labs) · 有来源缺口

[本地原件归档](../../../raw/bcf456f1d2f3920cb6b85f3f997fb6f2868fdd2d9214276a36c81dd4bcd29aa2) · 固定材料版本 `digest-material-bcf456f1d2f3920cb6b85f3f997fb6f2868fdd2d9214276a36c81dd4bcd29aa2@1` · [一手原站](https://read.substratemag.com/p/open-source-ai-with-basetens-co-head-4a9306ca)

## 深度拆解与复核

- 查重与上下文对齐：经全库核查，Substrate Magazine（Cat Tang）于 2026-11-17 专访 Baseten 联合研发负责人暨 Base Labs 负责人 Charlie O'Neill 的本篇长对话在工作台内尚无既有深度导读（Baseten 此前仅在 [AWS CEO Matt Garman 访谈](../../%E5%88%86%E5%B8%83%E5%BC%8F%E8%AE%A1%E7%AE%97/blogs/AWS%20CEO%20Matt%20Garman%20%E6%B7%B1%E5%BA%A6%E8%AE%BF%E8%B0%88%EF%BC%88Sources%EF%BC%89%EF%BC%9A5%E2%80%9310%20%E5%B9%B4%E5%86%B2%E5%87%BB%E4%B8%87%E4%BA%BF%E7%BE%8E%E5%85%83%E8%90%A5%E6%94%B6%E3%80%81%E6%AF%8F%2014%20%E7%A7%92%E8%A3%85%E4%B8%80%E5%8D%A1%E3%80%81%E6%8E%A8%E7%90%86%E5%B0%9A%E4%B8%8D%E8%B6%B3%201%25%20%E4%B8%8E%E5%BD%A2%E5%BC%8F%E5%8C%96%E9%AA%8C%E8%AF%81%20Agent.md) 中被归为「开源权重生态伙伴」并被 AWS 定位为底层 EC2/S3 收税对象）。
- 口径与利益披露：本场 55 分钟对话（39,755 字符公开逐字稿截取至第 45 分钟 KV Cache 混合记忆章节）受访者 Charlie O'Neill 曾联合创立专精模型后训练公司 Parsed（2025 年底被 Baseten 收购），现任 Baseten 联合研发负责人及旗下开放研究实验室 Base Labs 主理人。作为第三方开源推理与后训练基础设施商业利益方，O'Neill 具有明确的利益叙事动机：既需论证「开源权重 + 企业私有 RL 环境」构成长期真实护城河（对抗「等待下一代闭源基模」的观望惰性），又需将 6–9 个月闭源领先窗口合理化为「既安全、又足以让推理云避开零和烧钱研发的稳态」。下文将访谈主张置于其本人多篇一手博客、Baseten 技术通稿、arXiv 实证论文及库内 S-1/A 财务文件下逐项校验。
- ==核心结论==：开源模型在 OpenRouter 的 Token 份额一年内从 21% 跃升至 75%（约 70% Token 量对应 30% 收入），证实了 O'Neill 提出的「绝对智能门槛」假设——一旦开源权重越过特定任务的经济可行线，算子级定制量化、硬件拓扑调优与专用 RL 环境复利将把边际 ROI 留在应用层与推理基础设施端；但这一格局并不意味着通用连续学习已被攻克，O'Neill 团队自身的 arXiv:2607.11020 实证表明，20 轮连续权重写入后重复陈述旧事实的准确率会跌至 1%，迫使行业短期仍须在「外置工作区记忆」与「潜空间神经 KV Cache 压缩（Still / Cartridges / Engram）」之间寻找百万至十亿 Token 级折中解。

---

### 一、开源生态经济性、绝对智能门槛与安全窗口（6–9 个月均衡）

1. **从「相对代差」转向「绝对智能门槛」**（Intelligence Ceiling）：
   - O'Neill 将 2026-02 在 Baseten 发表的《The Michael Scott Paper Company of AI》推进为更精细的经济分工模型：对任何具经济价值的白领或代码任务，存在一条明确的智能及格线，越过该门槛后，通用智能继续拔高的边际收益迅速递减。在 80% 人类专家质量但成本低 200 倍、耗时数秒即可交付的领域，企业早期会先用闭源前沿模型快速验证 PMF，随后在成熟高频工作流上切回可定制开源模型。
   - 针对闭源巨头压低价格抢占低端流量的反制（Cat Tang 引用 Artificial Analysis 指数指出，GPT Sol-lite 与小米开源模型 MiMo-V2.6-Pro 在智能指数同等位次均报价每百万级任务口径 \$0.13；OpenAI 推出廉价档、Anthropic 保留 Haiku / Luna / Terra 系列，而中国与美国开源实验室亦开始训出类似 Kimi K3 达 2.8 万亿参数的超大开源模型以打破「开源只能做小模型」的偏见），O'Neill 指出闭源 API 仍是「一刀切（one-size-fits-all）」架构，无法针对单个客户工作负载执行专属量化、专用并行拓扑及私域数据闭环。
2. **6–9 个月代差的安全缓冲功能**（Mythos 与 Project Glasswing 案例）：
   - Cat Tang 追问网络攻防与生物风险是否会迫使开源权重收紧。O'Neill 反共识地主张==开源模型永远不必追平闭源前沿，维持 6–9 个月滞后期反而是最安全的均衡态==：闭源实验室先在内部及头部客户（如 Anthropic 围绕 Mythos 推出的 Project Glasswing 与 OpenAI Astra-style 模型防御项目）提前 6–9 个月暴露高阶网络攻防边界并加固防御工具，待 GLM-5.3 等开源模型在数月后触及同级攻防能力时，社会基础设施已完成第一轮免疫接种；若领先拉大至 2–5 年将导致智能与权力过度集中，若缩至 0 个月则防御方失去先发窗口。

---

### 二、后训练壁垒、RL 飞轮与算力采购博弈（DevDay OpenAI 合作对账）

| 核心议题 | Charlie O'Neill 访谈主张与一线披露 | 一手文献与跨库证据核查（✅ / ⚠️ / ❌） | 投资与产业边界判断 |
| --- | --- | --- | --- |
| 后训练成本 vs 推理占比 | 对已达 PMF 且具规模客户的企业，从预训练、后训练到部署全周期 FLOPs 中训练只是「舍入误差」，真正稀缺的是构建高质量 RL 环境与持续课程 | ✅ 内部实证与同行互证：Baseten《Michael Scott Paper Company》实证 sub-80B 领域精调模型在理赔工作流击败 GPT-5.2；与 [Trajectory 持续后训练闭环](Trajectory%20%E8%8E%B7%20Sequoia%20Capital%20%E9%A2%86%E6%8A%95%E3%80%81NVIDIA%20%E4%B8%8E%20Bessemer%20%E5%8F%82%E6%8A%95%20%244%2C500%20%E4%B8%87%20Series%20A%EF%BC%88%E6%8A%95%E5%90%8E%E4%BC%B0%E5%80%BC%20%243%20%E4%BA%BF%EF%BC%89%EF%BC%9A%E5%88%87%E5%85%A5%E9%A2%86%E5%9F%9F%E4%B8%93%E5%AE%B6%E5%8F%8D%E9%A6%88%E9%A9%B1%E5%8A%A8%E7%9A%84%E6%8C%81%E7%BB%AD%E5%90%8E%E8%AE%AD%E7%BB%83%E9%97%AD%E7%8E%AF.md) 一致 | RL 环境数据集具有跨基模复用性（非针对单代 GLM 或 Kimi K3.1 一次性消费），但企业若无真实用户轨迹自动转信号管道仍面临极大组织惯性 |
| 垂类客户 vs 大模型厂数据归属 | 反驳「OpenAI 合作 Harvey 就等于吸干 Kirkland & Ellis 律所数据并吞并垂类」的担忧，称巨头严格受合同条款与隐私边界约束，主要靠 X/Twitter 等公开反馈定位缺陷 | ⚠️ 口径博弈尚未定型：本轮核查 Baseten 官方 DevDay 合作通稿确认 OpenAI 允许企业用既有信用额度在 Codex 与 Responses API 原生调用 Baseten 开源模型（配 ZDR 零留存），但大厂仍可通过廉价推理置换显性数据合作 | 「不吞并用户数据」成立的前提是企业付得起全额商业推理费或强制锁死 ZDR；一旦进入低价换数据交易，垂类壁垒仍取决于独占工作流而非模型参数 |
| 算力采购与每 GW 变现效率 | OpenAI 与 Anthropic 当前约占美国 56 GW 电力中不足 20%（约 10 GW），将拿走未来几年约 50% 增量算力；但非自研模型推理商（无万亿级 R&D 负担）每 GW 净利润反而可能更高，且 NVIDIA 有明确动机扶持开源与多云 | ⚠️ 产能锁单高度不对称（本工作台核查）：Cat Tang 追问巨头若拿下 50%–60%–70% 乃至 90% 增量算力的规模碾压效应，对照 [Anthropic S-1/A](../../AI%E4%BA%A7%E4%B8%9A%E4%B8%8E%E5%95%86%E4%B8%9A/blogs/Anthropic%2C%20PBC%20%C2%B7%20SEC%20Form%20S-1_A%20%282026-11-17%29.md)，Anthropic 账外算力承诺高达 \$895.4B | 推理云（Baseten 宣称运行于 20+ 云的 90+ 集群、对接 200+ 算力商并整合 Blaxel 沙盒）虽避开了基础预训练研发沉没成本，但面对 OpenAI/Anthropic 准备 IPO 后的主权级算力直采与超低价策略，仍受制于电力与上游 GPU 配额 |

- ✅ **本工作台核查**（Baseten 工程能力与 OpenAI DevDay 合作的真实商业含义）：核对 Baseten 官方通稿（2026-09-29 / 2026-11-02）与 2026-11-06 Delta 权重同步技术博客可见，Baseten 正在把推理平台与 RL 训练基础设施打通为一体——770 GB GLM-5.3 检查点增量同步耗时从 36 秒（6 秒请求暂停）压降至 15 秒（0.8 秒暂停），并将权重驻留 GPU 原地更新从而腾出主机内存给 KV Cache、解锁 8×GB300 上的 Kimi K3 RL Rollout。OpenAI 将 Baseten 拉入 Codex 的本质，是承认企业已进入静态/自适应多模型路由时代，与其任由预算流向外部推理云，不如允许大客户在 OpenAI 既定消费承诺框内消耗开源推理 Token。

---

### 三、持续学习困局：为什么权重写入会「烤坏」ICL，而神经 KV Cache 压缩成中间解

1. **物理存储尺度的两极撕裂**（O'Neill 一手个人博客定量核对）：
   - O'Neill 用 Llama 3.1 70B（bf16）给出了精准的内存临界点测算：模型权重恒定占用 141 GB，而每增加 1 个上下文 Token 的 KV Cache（80 层、8 个 KV 头、128 维、2 字节）消耗 320 KiB 显存——当上下文达到约 431,000 个 Token 时，KV Cache 体积就正式反超整个 70B 模型本身。
   - 由此形成当前大模型的记忆两极：一端是高度有损压缩、推理极廉价却极难增量改写的「权重长期记忆」；另一端是完全无损但随序列线性爆炸、突破百万 Token 便受阻的「KV Cache 上下文工作记忆」。当前 Claude Code 或 Codex 依赖的对话摘要（Compaction）与 Markdown 记忆文件，类似 Dwarkesh Patel 所比喻的「每 15 分钟换一名没摸过小号的新实习生，只能靠前任留下的字条重新摸索」，O'Neill 估算当前前沿 Agent 高达约 95% 的 Token 都耗费在重新检索和重建已知背景上。
2. ✅ **本工作台核查**（权重写入遗忘实证 arXiv:2607.11020 vs 神经 KV 压缩 arXiv:2606.07878）：
   - 面对「为什么不能直接靠 SFT、蒸馏或 RL 把新知识写进权重」的追问，O'Neill 提出核心假说：预训练与 RL 消耗海量算力锤炼出模型的上下文学习（ICL）机制，而后续高频写入权重会破坏性干扰这套自适应底座。其团队在 `arXiv:2607.11020`（2026-10-05 更新）对 Qwen3 横跨 SFT、离线/在线策略蒸馏、LoRA 与全量微调的迭代写入测试显示：经历 20 轮连续写入并合并后，用固定句式重复灌输事实的模型对早期事实的问答准确率暴跌至仅 1%，即便每轮改用 24 种多样化改写训练也仅留存 46%（且行为遗忘并未抹除 log-probability 中的痕迹，证明问题在提取通路受损）。
   - 针对自然语言摘要压缩不可避免遭遇符号表达不可压缩上限的瓶颈，O'Neill 主张直接对数值形式的 KV Cache 做潜空间神经压缩（点名 Stanford Hazy Research 的 Cartridges、条件神经记忆 Engram 与自家 `arXiv:2606.07878` Still）：Still 通过在冻结基座上训练轻量级每层 Perceiver，仅需单次前向传播即可将 8k–128k 上下文的 KV Cache 压缩 8 倍至 200 倍，在长上下文 RULER 基准领先最强基线 8–22 分，等价于在无损上下文与高度压缩权重之间提供一条可滑动的「情景记忆滑块」，让模型在不修改权重的前提下将有效上下文学习推向十亿 Token 级生态记忆库。
   - ⚠️ **本工作台推断**（与 Yann LeCun 表征路线的跨流派收敛）：O'Neill 的「神经 KV 压缩避开自然语言摘要符号瓶颈」与本赛道已归档的 [Yann LeCun 与 Balestriero 柏拉图表征定理](Yann%20LeCun%E6%96%B0%E8%AE%BA%E6%96%87%EF%BC%8C1.09%E4%BA%BFJEPA%E5%9C%A8%E5%9B%BE%E6%96%87%E5%AF%B9%E9%BD%90%E4%B8%8A%E8%B5%A2%E4%BA%86720%E4%BA%BFQwen%EF%BC%81.md) 形成了跨架构共振——两者均指向「文本/Token 空间存在高维语义表达损耗，必须把长程记忆与跨视角对齐下沉到连续潜空间（Latent Space）」；但 Still 论文当前公开验证尺度仅止步于 Qwen 与 Gemma 系列的 128k 窗口，十亿 Token 级外部压缩 KV Cache 检索（HNSW/向量路由）在多跳推理精度与幻觉控制上尚未经历大规模生产验证。

### 观点与可反驳条件

- ==观点==：开源模型无需在通用预训练前沿追平闭源双雄，只要稳定卡住 6–9 个月代差并跨过特定任务的经济及格线，价值捕获重心就会从通用基模 API 转向「私域 RL 环境语料 + 低延迟训练/推理融合底座（如 Baseten Delta Sync + Loops）」；同时在持续学习尚未攻克「20 轮迭代写入即大面积遗忘」的约束下，潜空间神经 KV Cache 压缩（Still / Cartridges / Engram）比频繁微调权重或纯 Markdown 文本摘要更具工程落地可行性。
- ==推翻条件==：
  1. 若截至 2027-12-31，OpenAI、Anthropic 等闭源前沿实验室通过下一代架构与成本降维（例如将等价智能调用单价压低至开源模型本地集群自建 TCO 以下 30% 以上，同时在 OpenRouter 等中立聚合平台重夺 >60% 开源可替代工作流 Token 份额，令开源模型 Token 占比回落至 45% 以下），且企业普遍放弃独立 RL 后训练而直接订阅闭源通用 Agent，则「绝对智能门槛将把多数商业负载永久留给开源定制生态」的判断将被推翻。
  2. 若截至 2027 年底，闭源巨头（OpenAI/Anthropic）凭借 >60% 全球新增智算电力与芯片锁单（如 Anthropic 约 \$895.4B 承诺规模）形成算力挤压，导致 Baseten、Fireworks 等独立推理与微调云面临长期卡荒或每 GW 毛利率跌破独立生存盈亏线并被迫并入超大规模云厂，则「非模型研发商可凭借免除预训练 R&D 负担获取更高每 GW 回报」的商业逻辑将被证伪。
  3. 若在未来 12–18 个月内出现可在不损伤基座推理能力前提下完成 >100 轮连续事实写入且早期记忆保留率 >90% 的原生权重持续学习算法，或在 1M+ 窗口实际生产中证实压缩 KV Cache 检索相比直接长上下文或 RAG 准确率折损超过 15 个百分点，则「潜空间 KV 压缩作为持续学习主桥接层」的技术路线判断将被修正。

---

## 原文摘录与一手信源存证

> Last week on OpenRouter, open source token share crossed 75% of total volume, up from 21% last year.
> — 原文摘录，文字段落 1；证据 `digest-material-bcf456f1d2f3920cb6b85f3f997fb6f2868fdd2d9214276a36c81dd4bcd29aa2-excerpt-1@2`

> I think the most valuable thing in the world and the exogenous factor or input to how good any given startup or any given model or whatever will be is purely data.
> — 原文摘录，文字段落 2；证据 `digest-material-bcf456f1d2f3920cb6b85f3f997fb6f2868fdd2d9214276a36c81dd4bcd29aa2-excerpt-2@2`

> Like, in-context learning is continual learning. If you are able to do that over a few orders of magnitude larger scale, there are probably jobs that you could get away with continually learning for a billion tokens.
> — 原文摘录，文字段落 3；证据 `digest-material-bcf456f1d2f3920cb6b85f3f997fb6f2868fdd2d9214276a36c81dd4bcd29aa2-excerpt-3@2`

一手材料：

- Open Source AI with Baseten's Co-Head of Research Charlie O'Neill · Substrate Magazine (Cat Tang) · [原站](https://read.substratemag.com/p/open-source-ai-with-basetens-co-head-4a9306ca) · [主体档案：Substrate Magazine (Cat Tang)](../entities/companies/Substrate%20Magazine%20%28Cat%20Tang%29.md) / [主体档案：Substrate Magazine (Cat Tang) YouTube](../entities/companies/Substrate%20Magazine%20%28Cat%20Tang%29%20YouTube.md) · [本地原件](../../../raw/bcf456f1d2f3920cb6b85f3f997fb6f2868fdd2d9214276a36c81dd4bcd29aa2)
  材料版本 `digest-material-bcf456f1d2f3920cb6b85f3f997fb6f2868fdd2d9214276a36c81dd4bcd29aa2@1`；获取方式 `tg_approved_full_text`。
  > Last week on OpenRouter, open source token share crossed 75% of total volume, up from 21% last year. — 原文提取
  > I think the most valuable thing in the world and the exogenous factor or input to how good any given startup or any given model or whatever will be is purely data. — 原文提取
- The Michael Scott Paper Company of AI · Baseten / Base Labs (Charlie O'Neill) · [原站](https://www.baseten.co/blog/the-michael-scott-paper-company-of-ai/) · [主体档案：Baseten](../entities/companies/Baseten.md) / [主体档案：Baseten (X)](../entities/companies/Baseten%20%28X%29.md) · [本地原件](../../../raw/efa0854d80b079cb7c176b4f6a0ea92a4f8cabdffaff901e87f85f54e348e889)
  材料版本 `digest-material-efa0854d80b079cb7c176b4f6a0ea92a4f8cabdffaff901e87f85f54e348e889@1`；获取方式 `http_full_text`。
  > Open-source doesn't need to wait out the frontier labs. It just has to wait out the gap. — 原文提取
  > Opus 4.6 and GPT-5.3-Codex were both released last week. — 原文提取
- Announcing our partnership with OpenAI · Baseten (Dannie Herzberg) · [原站](https://www.baseten.co/blog/baseten-openai-partnership/) · [主体档案：Baseten](../entities/companies/Baseten.md) · [本地原件](../../../raw/0f206880bf70926fbb2ff46f0594b822323aeb412a384adf4fd8951af76acb85)
  材料版本 `digest-material-0f206880bf70926fbb2ff46f0594b822323aeb412a384adf4fd8951af76acb85@1`；获取方式 `http_full_text`。
  > Baseten is partnering with OpenAI to serve open models natively via Codex and the Responses API. — 原文提取
  > We’re excited to partner with OpenAI as one of the first open-model inference providers in the OpenAI B2B Marketplace, including a native integration within Codex. — 原文提取
- Trying to actually define continual learning · Charlie O'Neill · [原站](https://charlesponeill.com/posts/defining-continual-learning/) · [主体档案：Charlie O'Neill](../entities/people/Charlie%20O%27Neill.md) / [主体档案：Charlie O'Neill (X)](../entities/people/Charlie%20O%27Neill%20%28X%29.md) / [主体档案：Charlie O'Neill (arXiv)](../entities/people/Charlie%20O%27Neill%20%28arXiv%29.md) · [本地原件](../../../raw/831560f4f09f10fcc8d4855dd7a524462c934920412e91243ba43fdad92de612)
  材料版本 `digest-material-831560f4f09f10fcc8d4855dd7a524462c934920412e91243ba43fdad92de612@1`；获取方式 `http_full_text`。
  > Every AI agent today is an amnesiac intern. You can teach it an astonishing amount inside one context window. Then the context window ends, a new intern arrives, and all it has are the notes the previous one left behind. — 原文提取
  > This is why continual learning feels like the holy grail of AI research. We have a recipe for creating intelligent machines. — 原文提取
- Can a Language Model Learn Facts Continually in Its Weights? (arXiv:2607.11020v3) · Charles O'Neill, Max Kirkby, Jonathon Liu & Michael Psenka (Base Labs) · [原站](https://arxiv.org/abs/2607.11020) · [主体档案：Charlie O'Neill (arXiv)](../entities/people/Charlie%20O%27Neill%20%28arXiv%29.md) · [本地原件](../../../raw/5563f6864b4117f5d25988857f53a1ff0bee90510ea82ff008157e86d872dc0b)
  材料版本 `digest-material-5563f6864b4117f5d25988857f53a1ff0bee90510ea82ff008157e86d872dc0b@1`；获取方式 `http_full_text`。
  > Title:Can a Language Model Learn Facts Continually in Its Weights? — 原文提取
  > Abstract:Continual learning is a long-standing capability gap between LLMs and humans. Writing new knowledge into a model's weights routinely causes it to forget old knowledge, commonly denoted as "catastrophic forgetting". — 原文提取
- Still: Amortized KV Cache Compaction in a Single Forward Pass (arXiv:2606.07878) · Charles O'Neill, Alex Sandomirsky, Harry Partridge, Mudith Jayasekara & Max Kirkby · [原站](https://arxiv.org/abs/2606.07878) · [主体档案：Charlie O'Neill (arXiv)](../entities/people/Charlie%20O%27Neill%20%28arXiv%29.md) · [本地原件](../../../raw/d47e954f15cd713a4820aac415f1aa1562b39f6f7c7af11ec4702fe907aaffde)
  材料版本 `digest-material-d47e954f15cd713a4820aac415f1aa1562b39f6f7c7af11ec4702fe907aaffde@1`；获取方式 `http_full_text`。
  > Abstract:The KV cache is the memory bottleneck of long-horizon language model deployment. — 原文提取
  > arXivLabs is a framework that allows collaborators to develop and share new arXiv features directly on our website. — 原文提取

归属与范围：全库查重确认无既有重复建档（仅存本条目日推初始占位，Baseten 仅在 Fal 与 AWS Matt Garman 导读被旁及，Charlie O'Neill 仅于 podcast-source-discovery 登记过 2026-09 Dwarkesh 联播线索）。本轮拉通 Substrate Magazine 39,755 字符访谈全文（付费墙截取前约 45 分钟，覆盖至 KV Cache 压缩处）及 Charlie O'Neill / Baseten 五份一手原件：1) Baseten 观点长文《The Michael Scott Paper Company of AI》（18,306 字符，提出「绝对智能门槛」与时间不对称）；2) Baseten 官方公告《Announcing our partnership with OpenAI》（4,884 字符，证实 OpenAI B2B Marketplace 与 Codex 原生接入 Baseten 开源推理及 90+ 集群/20+ 云/200+ 算力商与 Blaxel 沙盒）；3) 个人技术长文《Trying to actually define continual learning》（14,158 字符，量化 Llama 3.1 70B 权重 141 GB vs KV Cache 320 KiB/token 于 431,000 tokens 反超）；4) 预印本 arXiv:2607.11020（Qwen3 经 20 轮连续写入合并后，重复陈述旧事实准确率跌至 1%，24 种改写样本留存 46%）；5) 预印本 arXiv:2606.07878（Still 单次前向传播 KV 压缩 8x–200x，8k–128k RULER 领先强基线 8–22 分）。

来源缺口：

- `unavailable`：Substrate Magazine 原文页面在 39,755 字符处（第 45 分钟前后「Compressing the KV cache — Cat: Do you find that there are interesting ways to build a hybrid in between?」）触发 Substack 付费订阅墙截断，55 分钟音频最后约 10 分钟逐字稿未完全暴露；伴随 YouTube 视频（https://www.youtube.com/watch?v=B-mX7R6dB\_0）在 ingest.fetch 非浏览器环境下仅返回 157 字节无字幕外壳，混合内存架构后端细节暂以 Charlie O'Neill 同题个人长文及 arXiv:2606.07878（Still）补全。 [线索](https://www.youtube.com/watch?v=B-mX7R6dB_0)
- `not_disclosed`：访谈引用 OpenRouter 开源模型占比 75%（一年前 21%）及约 70% token 量 / 30% 收入拆解，但未披露样本内部中美开源权重分布、企业生产调用 vs 个人开发者长尾对话占比；Baseten 亦未公开其每 GW 算力单位毛利、Loops 训练收入占比及与 OpenAI B2B Marketplace 分成比例。 [线索](https://read.substratemag.com/p/open-source-ai-with-basetens-co-head-4a9306ca)

[返回赛道总览](../赛道总览.md#digest-bcf456f1d2f3920c) · [返回导读索引](README.md) · [主体档案库](../entities/README.md)
