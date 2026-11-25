---
title: "The Michael Scott Paper Company of AI"
type: blog_digest
sector: "AI训练与数据"
source: "Baseten / Base Labs (Charlie O'Neill)"
published_at: "2026-11-03"
raw_sha256: "efa0854d80b079cb7c176b4f6a0ea92a4f8cabdffaff901e87f85f54e348e889"
material_version: "digest-material-efa0854d80b079cb7c176b4f6a0ea92a4f8cabdffaff901e87f85f54e348e889@1"
origin_url: "https://www.baseten.co/blog/the-michael-scott-paper-company-of-ai/"
trigger_source: "Baseten / Base Labs (Charlie O'Neill)"
trigger_url: "https://www.baseten.co/blog/the-michael-scott-paper-company-of-ai/"
user_comments: "O'Neill 将 2026-02 在 Baseten 发表的《The Michael Scott Paper Company of AI》推进为更精细的经济分工模型：对任何具经济价值的白领或代码任务，存在一条明确的智能及格线，越过该门槛后，通用智能继续拔高的边际收益迅速递减。在 80% 人类专家质量但成本低 200 倍、耗时数秒即可交付的领域，企业早期会先用闭源前沿模型快速验证 PMF，随后在成熟高频工作流上切回可定制开源模型。"
status: "processed_with_gaps"
---

<a id="digest-efa0854d80b079cb"></a>
# The Michael Scott Paper Company of AI

2026-11-03 · Baseten / Base Labs (Charlie O'Neill) · 有来源缺口

[本地原件归档](../../../raw/efa0854d80b079cb7c176b4f6a0ea92a4f8cabdffaff901e87f85f54e348e889) · 固定材料版本 `digest-material-efa0854d80b079cb7c176b4f6a0ea92a4f8cabdffaff901e87f85f54e348e889@1` · [一手原站](https://www.baseten.co/blog/the-michael-scott-paper-company-of-ai/)

> [!IMPORTANT]
> 用户关注点（TG）：O'Neill 将 2026-02 在 Baseten 发表的《The Michael Scott Paper Company of AI》推进为更精细的经济分工模型：对任何具经济价值的白领或代码任务，存在一条明确的智能及格线，越过该门槛后，通用智能继续拔高的边际收益迅速递减。在 80% 人类专家质量但成本低 200 倍、耗时数秒即可交付的领域，企业早期会先用闭源前沿模型快速验证 PMF，随后在成熟高频工作流上切回可定制开源模型。

## 针对性追查与回应

- 口径与利益披露：本文作者 Charles O'Neill（Charlie O'Neill）于 2026-02-13 在 Baseten 官方博客首次发布该文（2026-11-03 更新，全文 18,306 字符）。O'Neill 曾联合创立专注模型后训练的 Parsed（2025 年底被 Baseten 收购），现任 Baseten 联合研发负责人及旗下 Base Labs 主理人。作为开源模型推理与定制后训练基础设施商业利益方，作者具有明确激励论证「专精化开源模型将在企业高频场景胜过闭源通用 API」。下文对其核心论点逐层拆解，并对照库内一手访谈、论文与财务申报进行交叉核查。
- ==核心结论==：==O'Neill 提出开源生态无需在通用预训练基准上追平闭源前沿实验室，只需沿着「企业专精化后训练 × 推理硬件降本」两条独立坐标等待智能天花板（Intelligence Ceiling）逐步覆盖约 90% 具经济价值的工作流==；一旦基座越过特定任务的经济可行线（例如达到人类专家 80% 质量、成本低 200 倍且数秒内交付），价值重心的 70 分到 95 分来自客户私有分布数据与强化学习（RL）反馈循环，而非通用参数规模。

### 一、The Office 隐喻与时间不对称（Timing Asymmetry）

1. 场景锚点：文章写于 Opus 4.6 与 GPT-5.3-Codex 发布次周（2026-02 初版，2026-11-03 修订），借用美剧 The Office 中 Michael Scott Paper Company 对阵 Dunder Mifflin 的剧情构建双时钟对比——Michael 的新公司成立仅 4 weeks，账面结构脆弱，靠低价抢客撑不到长期稳态；但 Dunder Mifflin CFO David Wallace 面临即将到来的股东大会与利润部门失血压力，Michael 只需要在时间轴上熬过 David Wallace 的兑现期限即可谈判获胜。
2. 两条失衡的时间时钟：
   - 前沿闭源实验室（Big Labs）受制于资本依赖时钟：为支撑下一代万亿级预训练与算力采购，需要向 VCs 持续融资数十亿美元，核心前提是证明闭源与开源之间存在足够宽的付费代差。
   - 开源生态受惠于能力与成本双轴时钟：一面是基座能力随代际抬升（文章举出 GLM-4.7 演进至 GLM-5，以及同周密集发布的 Kimi K2.5、Minimax M2.5、Deepseek-V4、Qwen-3.5）；另一面是 SemiAnalysis 量化的服务算力降本（GB200 级系统持续压低单位 Token 成本，并通过 Jevon's paradox 把原本经济上不可行的任务推过盈利门槛）。

### 二、绝对智能天花板（Intelligence Ceiling）与专精化分工

1. 智能天花板的经济定义：O'Neill 将其定义为「模型在成本与质量上足以让企业理性选择自动化部署的任务比例」。这一门槛明显低于人类专家水平——只要模型能做到领域专家 80% 的质量、成本低 200 倍且数秒内完成交付，就已经跨过大量知识工作的自动化临界点。
2. 为什么价值主要落在专精化层：
   - 通用前沿 API 能够直接解决互联网分布内的通用任务，但企业真实生产位于长尾私有边缘案例、专用数据格式与生产报错模式中。文章引用 Sholto Douglas 指出，现有算法与基座已足以覆盖大量白领自动化，真正的瓶颈在于特定任务训练数据与对应的 RL 奖励循环。
   - 实战对照样本：O'Neill 在 Parsed 与 Baseten 的企业项目中观察到，基于客户私有理赔数据微调的 sub-80B 开源模型在理赔工作流上稳定优于 GPT-5.2，且速度更快、成本更低、私有数据无需出域外发第三方 API。
3. 组织形态与 Cournot 寡头分工（Innovator's Dilemma）：
   - 大实验室的组织结构围绕「单一巨大算力池 + 单一研究团队 + 单次旗舰训练 + 向全市场售卖同一模型」优化；而专精化要求上千个小团队深度嵌入不同客户工作流、理解业务失败模式并按客户节奏迭代。OpenAI 等提供微调 API 端点相对真正专精化，类似酒店礼宾代订餐厅与亲自下厨之别。
   - 结合 Sarah Guo（市场理性买方应为特定任务最高能力付至边际利润上限）与 Dario 对类似云计算的 Cournot 寡头均衡推演，O'Neill 提出分层终局：前沿实验室在预训练层保持高门槛少寡头盈利（类似早期 Intel 制造芯片），而更大的经济价值由上层碎片化、以领域深度而非单纯算力规模取胜的专精化生态捕获。

### 三、面对最强反驳的回应：RL 泛化与高难科研任务排序

1. 对「通用 RL 缩放将从上方消灭微调差距」的回应：
   - 反驳者认为，正如 GPT-2 经足够广的互联网语料预训练后实现跨分布泛化，前沿实验室把 RL 扩展到数学、代码和广义 Agent 环境后也能呈对数线性泛化，直接跨过企业部署门槛。
   - O'Neill 给出两层反驳：经验层面，保险理赔边缘案例的难点不在更高通用智商，而在特定保险公司条款措辞、具体州监管规则与历史理赔模式，通用泛化只把任务从 0 推到 70（演示可用），从 70 推到 95（无需人工介入的真实生产可用）完全依赖客户私有数据；机制层面，RL 缩放律与算法本身是公开的，开源权重针对专精任务做 RL 同样享受对数线性提升，闭源方唯一独享的只剩预训练算力规模。
2. 10% 科研前沿与 90% 存量知识工作的先后顺序：
   - 文章明确划出边界：面向需要超长上下文创造力的原创科学研究等少数难题（约占 10%），闭源前沿大模型短期仍将胜出。但医疗临床笔记（如 OpenEvidence、Abridge）、合规审查与 50,000 条级理赔记录处理，表面看似需要「通用推理」，实质是高度特异的领域知识匹配——先靠自动化占经济主体约 90% 的存量知识经济产生真实现金流，再循序反哺开源基座研发，构成了无需等待 AGI 的可行资金路径。

### 四、原位交叉核查（对照本库一手证据）

- ✅ 本工作台核查（开源份额跃迁与私有轨迹趋势印证）：对照本赛道 [Charlie O'Neill Substrate 访谈](Open%20Source%20AI%20with%20Baseten%27s%20Co-Head%20of%20Research%20Charlie%20O%27Neill.md) 及 2026-11 Baseten × OpenAI DevDay 公告，OpenRouter 开源模型 Token 份额一年内已从 21% 升至 75%（约 70% Token 量对应 30% 收入），且 OpenAI 允许企业客户直接在 Codex 与 Responses API 内消耗原有信用额度调用 Baseten 托管的开源模型（配零留存条款），印证了「成熟高频工作流向开源路由分流」的商业现实。同时，[Trajectory Series A](Trajectory%20%E8%8E%B7%20Sequoia%20Capital%20%E9%A2%86%E6%8A%95%E3%80%81NVIDIA%20%E4%B8%8E%20Bessemer%20%E5%8F%82%E6%8A%95%20%244%2C500%20%E4%B8%87%20Series%20A%EF%BC%88%E6%8A%95%E5%90%8E%E4%BC%B0%E5%80%BC%20%243%20%E4%BA%BF%EF%BC%89%EF%BC%9A%E5%88%87%E5%85%A5%E9%A2%86%E5%9F%9F%E4%B8%93%E5%AE%B6%E5%8F%8D%E9%A6%88%E9%A9%B1%E5%8A%A8%E7%9A%84%E6%8C%81%E7%BB%AD%E5%90%8E%E8%AE%AD%E7%BB%83%E9%97%AD%E7%8E%AF.md) 将领域专家日常修改痕迹（Diff）直接转化为价值函数后训练信号，也在工程上独立呼应了本文「70 到 95 必须靠业务流私有分布」的判断。
- ⚠️ 本工作台核查（闭源廉价档反攻与主权级算力锁单挤压）：本文假定闭源前沿实验室只能依靠高溢价代差维系资本叙事；但对照 Substrate 访谈引用的 Artificial Analysis 报价（GPT Sol-lite 与小米开源模型 MiMo-V2.6-Pro 在同一智能位次均报价每百万级任务 \$0.13）及 [Anthropic S-1/A](../../AI%E4%BA%A7%E4%B8%9A%E4%B8%8E%E5%95%86%E4%B8%9A/blogs/Anthropic%2C%20PBC%20%C2%B7%20SEC%20Form%20S-1_A%20%282026-11-17%29.md)（账外算力与电力承诺高达 \$895.4B），闭源巨头正通过小参数廉价档模型争夺低端 Token 流量，并借助千亿级算力电力长约构筑供给壁垒，直接挤压独立开源推理云的单位硬件回报率。
- ⚠️ 本工作台推断（企业隐性工程税与权重遗忘约束）：sub-80B 微调模型击败 GPT-5.2 的隐含前提，是企业已具备清洗后的 50,000 条级结构化轨迹与可自动化验证的奖励信号（Reward Function）；多数传统行业客户在组织上无法自行搭建这套 RL 评测基建。此外，O'Neill 团队自身在 arXiv:2607.11020（对 Qwen3 跨 SFT 与 RL 的连续写入评测）证实，模型经历 20 轮连续权重写入并合并后，重复陈述早期事实的问答准确率会跌至 1%，说明规则频繁变动的企业场景尚无法单纯靠持续微调权重完成无损更新。

### 观点与可反驳条件

- ==观点==：O'Neill 将企业 AI 竞争重心从「通用大模型参数军备」重新锚定到「绝对智能天花板覆盖度 + 私有工作流分布数据的后训练专精层」，这一判断已被 2026 年 OpenRouter 75% 开源 Token 份额与大客户多模型路由现实部分印证；但在真实商业部署中，企业能否跨过 70 到 95 分的门槛，卡点往往不在开源权重本身，而在是否具备可自动评分的业务过程反馈信号，以及能否抵御闭源巨头小模型廉价档（如 \$0.13 级）的价格挤压。
- ==推翻条件==：
  1. 若截至 2027-12-31，OpenAI、Anthropic 或 Google 通过新一代通用智能体与廉价推理档将等价任务单价压低至自建开源推理集群 TCO 以下 30% 以上，并使 OpenRouter 等中立聚合平台上的开源模型 Token 占比回落至 45% 以下，则「绝对智能天花板将把多数高频知识工作留在开源定制生态」的判断将被推翻。
  2. 若独立第三方在覆盖保险理赔、医疗病历与金融合规的跨行业公开长程基准上实测证实，闭源前沿大模型零样本或少样本在生产验收率上稳定领先同代开源领域微调模型 5 个百分点以上且全周期成本更低，则「专精化开源模型在 70 到 95 区间具备结构优势」的核心论据将被证伪。
  3. 若开源基座因主要资助实验室算力或资本收缩导致相对闭源前沿的技术滞后期由 6 至 9 个月拉大至 18 个月以上，使开源底座微调后仍长期滞后于企业生产自动化门槛，则「时间站在开源一边」的时间不对称模型将失效。

---

## 原文摘录与一手信源存证

> Every model has an intelligence ceiling: the fraction of economically valuable work it can automate at a cost and quality where you'd be irrational not to deploy it. This is a lower bar than human-level performance — a model that's 80% as good as a domain expert but 200x cheaper and runs in seconds has cleared it comfortably for an enormous category of work.
> — 原文摘录，文字段落 1；证据 `digest-material-efa0854d80b079cb7c176b4f6a0ea92a4f8cabdffaff901e87f85f54e348e889-excerpt-1@2`

> This is what I saw building specialised models at Parsed, and what I continue to see at Baseten: a sub 80B model fine-tuned on a client's claims data will outperform GPT-5.2 on that client's claims workflow, not because it's a smarter model, but because it's been trained on the actual distribution it needs to perform on.
> — 原文摘录，文字段落 2；证据 `digest-material-efa0854d80b079cb7c176b4f6a0ea92a4f8cabdffaff901e87f85f54e348e889-excerpt-2@2`

> So the frontier labs need the gap to stay wide enough to justify their capital requirements. Open-source just needs the ceiling to keep rising. These are very different pressures, and time favours the latter.
> — 原文摘录，文字段落 3；证据 `digest-material-efa0854d80b079cb7c176b4f6a0ea92a4f8cabdffaff901e87f85f54e348e889-excerpt-3@2`

一手材料：

- The Michael Scott Paper Company of AI · Baseten / Base Labs (Charlie O'Neill) · [原站](https://www.baseten.co/blog/the-michael-scott-paper-company-of-ai/) · [主体档案：Baseten](../entities/companies/Baseten.md) / [主体档案：Charlie O'Neill](../entities/people/Charlie%20O%27Neill.md) · [本地原件](../../../raw/efa0854d80b079cb7c176b4f6a0ea92a4f8cabdffaff901e87f85f54e348e889)
  材料版本 `digest-material-efa0854d80b079cb7c176b4f6a0ea92a4f8cabdffaff901e87f85f54e348e889@1`；获取方式 `http_full_text`。
  > Every model has an intelligence ceiling: the fraction of economically valuable work it can automate at a cost and quality where you'd be irrational not to deploy it. This is a lower bar than human-level performance — a model that's 80% as good as a domain expert but 200x cheaper and runs in seconds has cleared it comfortably for an enormous category of work. — 原文提取
  > This is what I saw building specialised models at Parsed, and what I continue to see at Baseten: a sub 80B model fine-tuned on a client's claims data will outperform GPT-5.2 on that client's claims workflow, not because it's a smarter model, but because it's been trained on the actual distribution it needs to perform on. — 原文提取

归属与范围：通读 Charlie O'Neill 发表于 Baseten 的原始长文《The Michael Scott Paper Company of AI》（初版 2026-02-13、2026-11-03 更新，全文 18,306 字符），系统拆解绝对智能天花板（Intelligence Ceiling）、资本时钟 vs 能力/成本时钟的时间不对称、大实验室组织形态约束、RL 泛化反驳与 90%/10% 演进顺序，并与本库 Substrate 访谈、Anthropic S-1/A、Trajectory 及 arXiv:2607.11020 交叉核查。

来源缺口：

- `not_disclosed`：文中引用在 Parsed 与 Baseten 实测 sub-80B 领域微调模型在保险理赔工作流上击败 GPT-5.2，以及 50,000 条理赔记录、0 到 70 与 70 到 95 的能力分段，但未公开具体客户样本量、基准评测明细、延迟与单次推理成本对照表。 [线索](https://www.baseten.co/blog/the-michael-scott-paper-company-of-ai/)
- `not_disclosed`：文章主张开源生态覆盖约 90% 具经济价值工作后将分流闭源实验室高毛利层，但未定量测算企业在自建私域 RL 环境、奖励函数设计与持续维护上的隐性工程人力成本。 [线索](https://www.baseten.co/blog/the-michael-scott-paper-company-of-ai/)

[返回赛道总览](../赛道总览.md#digest-efa0854d80b079cb) · [返回导读索引](README.md) · [主体档案库](../entities/README.md)
