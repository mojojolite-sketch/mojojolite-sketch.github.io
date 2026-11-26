---
title: "Discrete Diffusion Models"
type: blog_digest
sector: "AI训练与数据"
source: "arXiv:2506.02070 · An Introduction to Flow Matching"
published_at: "2026-11-16"
raw_sha256: "810d5287815cb4edfa0b8f604c2f297c8ce55c1f832f3d4f47ece01834c7d6f3"
material_version: "digest-material-810d5287815cb4edfa0b8f604c2f297c8ce55c1f832f3d4f47ece01834c7d6f3@1"
origin_url: "https://arxiv.org/abs/2506.02070"
trigger_source: "human five"
trigger_url: "https://mp.weixin.qq.com/s/Dar_x7Zf0axey1lPfjZnRw"
user_comments: "这个我看不懂，蛮适合用我们的认知演进框架去解释一遍的"
status: "processed_with_gaps"
primary_topic: "架构、表征与缩放定律"
topic_confidence: 0.9844
---

<a id="digest-810d5287815cb4ed"></a>
# Discrete Diffusion Models

2026-11-16 · arXiv:2506.02070 · An Introduction to Flow Matching · 有来源缺口

[本地原件归档](../../../raw/810d5287815cb4edfa0b8f604c2f297c8ce55c1f832f3d4f47ece01834c7d6f3) · 固定材料版本 `digest-material-810d5287815cb4edfa0b8f604c2f297c8ce55c1f832f3d4f47ece01834c7d6f3@1` · [一手原站](https://arxiv.org/abs/2506.02070) · [触发线索（human five）](https://mp.weixin.qq.com/s/Dar_x7Zf0axey1lPfjZnRw)

> [!IMPORTANT]
> 用户关注点（TG）：这个我看不懂，蛮适合用我们的认知演进框架去解释一遍的

## 针对性追查与回应

这篇中文文章之所以读起来晦涩，是因为微信转发过程把所有行内 LaTeX 公式全吞掉了，只留下干瘪的“方程 (85)–(87)”“定理 33”“例 34”等骨架。本文真正来源是 MIT 6.S184 课程讲义《An Introduction to Flow Matching and Diffusion Models》（arXiv:2506.02070，2025-06-02，共 84 页）第 7 章《Discrete Diffusion Models》。下面用本工作台的「概念历程五步（认知演进框架）」剥掉繁琐记号，从物理直觉重走一遍离散扩散与文本生成的原理。

### 口径与利益披露

上游主信源为 Peter Holderrieth 与 Ezra Erives 编写的 MIT 教学讲义（偏重教学统一视角），且 Peter Holderrieth 同时是 Generator Matching（arXiv:2410.20587）一作，因此第 7 章天然将 Discrete Diffusion Models 收束进“马尔可夫生成元统一框架”；而公众号 human five（2026-11-16）仅为未附出处的中文搬运稿，公式渲染缺失严重。下文涉及的量纲测算、架构比较与商用指标均冠以「本工作台核查」或「本工作台推断」。

### 01 · 未解决的问题

生成图像的 Flow Matching 与扩散模型依赖欧几里得空间 $\mathbb{R}^d$ 上的连续微分方程（ODE/SDE），核心工具是空间梯度 $\nabla_x \log p_t(x)$：把一张噪声像素微调 $\Delta x$，图像就会连续滑向清晰猫狗。但自然语言和 DNA 序列生活在完全不同的离散空间 $\mathcal{S} = \mathcal{V}^d$（$\mathcal{V}$ 为词表，$d$ 为序列长度，DNA 仅 4 个碱基）。

在这里，“把 token ID 从 1024 微调到 1024.01”没有任何语义，空间求导与连续位移彻底失效；而主流自回归（AR）大语言模型虽然能稳定生成文本，却被单向因果掩码锁死在从左到右逐 token 串行吐字，既无法并行批量起草，也很难像写文章一样先搭框架再回头修改局部。

- ⚠️ 原文公式丢失核查：human five 译文在微信 HTML 转换中丢掉了全文几十处行内与独立公式，导致“转移概率满足”“指数项捕捉记忆衰减”等关键句语义断层；本工作台核查通过比对 MIT 6.S184（arXiv:2506.02070 与 diffusion.csail.mit.edu）恢复了核心方程定义。

### 02 · 当前解决设想

既然状态不能在空间上连续滑动，MIT 讲义第 7.1 节给出的核心设想是：**让状态保持离散跳变，时间 $t$ 连续**，即用连续时间马尔可夫链（CTMC）替代欧几里得空间里的 ODE/SDE。

具体对应关系非常工整：

1. 连续空间的“速度向量场 $u_t(x)$”被替换为**瞬时跳变率矩阵** $Q_t(y \mid x)$，描述粒子此刻在词序列 $x$ 处，单位时间内跳往另一个词序列 $y$ 的倾向强度。
2. 连续空间的“概率流体连续性方程”被替换为 **Kolmogorov 前向方程**（KFE，命题 2），用线性 ODE $\frac{d}{dt} p_t = p_t Q_t$ 刻画词序列分布随时间流动的规律。

这意味着只要时间 $t$ 是连续实数，概率分布关于时间的导数依然可微，整个 Flow Matching 家族的无模拟（simulation-free）训练法就能无缝迁移过来。

### 03 · 主导概念的实质与演变

把文中晦涩的定理和方程翻译成人话，其实只讲清了四件事：

1. 率矩阵的两条物理底线（方程 (85)–(87) 与定理 33）：
   - 方程 (85) 规定 $Q_t(y \mid x) \ge 0\ (y \ne x)$，因为跳往别的词只有“不跳（0）”或“以正速率跳”，不可能有负的跳变速率。
   - 方程 (86) 规定对角元 $Q_t(x \mid x) = -\sum_{y \ne x} Q_t(y \mid x)$，意思是“留在原地概率的减少速率，必须精确等于跳向所有其他状态的总流出速率”，保证所有状态概率之和恒等于 1。
   - 方程 (87) $\left.\frac{d}{dh}p_{t+h\mid t}(y\mid x)\right|_{h=0} = Q_t(y\mid x)$ 与定理 33（存在唯一性）给工程吃下定心丸：只要神经网络输出满足这两条底线的合法 $Q_t$，数学上就唯一对应一条真实存在的 CTMC 生成轨迹，推理时只需按离散概率 $p_{t+h\mid t}(y\mid x) \approx \delta_x(y) + h Q_t(y\mid x)$ 迈小步采样即可（算法 7）。
2. 两状态开关的记忆衰减（例 34）：设只有两个状态 $\{a,b\}$，以恒定速率 $\lambda > 0$ 来回翻转，率矩阵为 $Q = \begin{pmatrix}-\lambda & \lambda \\ \lambda & -\lambda\end{pmatrix}$。解出时间步长 $h$ 的转移概率为留在原态 $\frac{1 + e^{-2\lambda h}}{2}$、翻到对侧 $\frac{1 - e^{-2\lambda h}}{2}$。其中的指数衰减项 $e^{-2\lambda h}$ 直观表明：跳变速率 $\lambda$ 越大，系统忘掉初始状态的速度越快，很快收敛到各占 1/2 的平稳均匀分布。
3. 稀疏因子化降维（7.1 节末，图 18）：直接预测全句率矩阵完全不可行。==因子化 CTMC 强制一步只允许最多修改 1 个位置的 token，把神经网络输出从指数爆炸直接压回序列长度线性阶==。
   - ✅ 量纲与复杂度核查：若词表大小 $|\mathcal{V}| = 50{,}000$、序列长度 $d = 1024$，完整全状态列向量维度高达 $50{,}000^{1024}$，任何硬件都无法表示；限制为单 token 邻居跳变后，神经网络仅需输出 $d \times |\mathcal{V}| \approx 5.12 \times 10^7$ 维（每位置给出 $|\mathcal{V}|$ 维 logits），与标准 Transformer 输出头量纲完全同阶（本工作台核查）。
4. 边缘化技巧与交叉熵本质（7.2 节，定理 36 与定理 38）：真实世界所有句子的边缘率矩阵 $Q_t^{\text{marg}}$ 涉及对海量未知数据积分，根本写不出解析式。Generator Matching 与离散 Flow Matching 的核心妙招在于“倒推”——假设终点干净句子 $x_1$ 已经给定，那么沿**因子化混合路径**（例 35：每个位置以概率 $\kappa_t$ 保留干净词、$1-\kappa_t$ 变成噪声）的条件率矩阵（例 37）极度简单：要么不动，要么直接跳向目标词 $x_1$。定理 38 进一步证明，把条件率矩阵按后验加权平均后，边缘率矩阵化简为：

  $$Q_t(v_{i,j} \mid x) = \frac{\dot{\kappa}_t}{1 - \kappa_t}\bigl(p_{1|t}(z_j = v_i \mid x) - \delta_{x_j}(v_i)\bigr)$$

  这意味着==训练离散扩散模型无需拟合抽象矩阵，只需让 Transformer 看一眼带噪句子 $x$，在每个位置 $i$ 用标准交叉熵损失（算法 8）预测干净词的概率分布 $p_{1|t}$ 即可==。正如连续 Flow Matching 简化为回归预测速度场，离散扩散也简化为纯粹的逐位置多分类。

### 04 · 被修正与新概念产生的原因

把离散扩散拉向实用语言模型（LLM）的路上，工程与理论经历了三次关键修正：

1. 从离散时间步连乘（D3PM）到连续时间评分（SEDD）：早期 D3PM（Austin et al., arXiv:2107.03006）按固定离散步数 $T$ 推导转移矩阵，步数和调度路径在训练时就被写死；随后 SEDD（Lou et al., arXiv:2310.16834）引入连续时间比率估计与 Score Entropy 损失，相比早期离散扩散将困惑度（Perplexity）降低 25%–75%，追平同规模 GPT-2。
2. 从“随机错别字替换”收敛到吸收态 Masked Diffusion（MDLM，例 39）：把好句子里的词随机替换成词表里的无关乱码，去噪网络得耗费大量容量去识别“哪个词被替换成了哪个错字”。Sahoo 等人提出的 MDLM（arXiv:2406.07524）发现，只要给词表多加一个特殊的吸收态 [mask]，所有干净词在加噪时只允许“变成 [mask]”而不会互相乱变（一旦遮盖就停在 [mask] 直到去噪解锁），配合 Rao-Blackwellized 混合掩码语言建模目标，不仅大幅简化训练与采样轨迹（图 20），还逼近自回归模型困惑度。
3. 向统一生成元与大规模并行推理外扩（Generator Matching、LLaDA 与 Mercury）：备注 40 指出，无论是连续空间的向量场 $u_t$，还是离散空间的率矩阵 $Q_t$，本质上都是马尔可夫过程的**无穷小生成元**（Generator）。这一统一视角（Holderrieth et al., arXiv:2410.20587）把图像扩散、文本扩散和跨模态混合状态空间融为一炉；工程侧则出现 LLaDA 8B（arXiv:2502.09992，首次从零训练 80 亿参数纯扩散语言模型）与 Inception Labs 的 Mercury 系列（arXiv:2506.17298），验证并行多 token 解码的商业潜力。

- ⚠️ 吞吐与落地口径核查：Inception Labs 披露 Mercury Coder Mini 在 H100 上通过并行解码达 1,109 tokens/sec（Small 达 737 tokens/sec）；但学术界标准双向注意力扩散模型（如 LLaDA 8B）无法原生复用传统自回归的 KV Cache，社区 INT4/INT8 量化版在单张 A100 上的实测速度仅约 3.4–9.6 tok/s（随采样步数与上下文长度浮动）。本工作台推断，当前扩散语言模型的极速表现强依赖半自回归块级调度或专用缓存近似工程，而非纯全局双向 CTMC 采样自带的免费红利。

### 05 · 逐项否定或限定边界的早期错误

对照本文与演进史，非数学背景读者最容易踩中两类认知误区，同时必须看清当前架构的两条硬边界：

1. ❌ 误区否定 1（不能把词表 ID 当浮点数强行加高斯噪声再四舍五入）：词表编号（如 token 1024 与 1025）之间没有连续几何与语义距离，高维连续嵌入加噪后投影回最近词会产生大量语义跳变与量化失真；离散空间必须老实留在 $\mathcal{V}^d$ 上用 CTMC 概率跳变。
2. ❌ 误区否定 2（“不能对空间求导”不等于“不能做 Flow Matching”）：连续扩散依赖的是空间梯度 $\nabla_x \log p_t$，而 CTMC 的 KFE（命题 2）依赖的是转移概率关于时间 $t$ 的导数 $\frac{d}{dt}p_t$。只要时间连续、路径可微，依然可以推导出无模拟条件训练目标（定理 38）。
3. 限定现实边界（**双向注意力 KV Cache 缺失**与**并行分解误差**）：一方面，标准 MDLM 与因子化 CTMC 每步去噪都需要全序列双向可见，打破了 AR 单向因果掩码，导致历史前缀 KV Cache 不能无损增量复用；另一方面，算法 7 每步按各位置独立分布同时翻转多个 token 时，隐含假设这一小步内各位置条件独立（因子化近似）。当步长 $h$ 选得过大、一次同时揭晓过多 [mask] 时，比如同时选出互相冲突的动宾搭配，就会暴露出忽略联合依赖的分解误差（Factorization Error），限制了采样步数无限制压缩的上限。

### 观点与可反驳条件

- ==观点==：离散扩散的真正工程价值不在于“把连续扩散硬套给文本”，而在于 Generator Matching 用 CTMC 率矩阵与交叉熵边缘化技巧打通了“任意离散结构（文本、DNA、代码）的非自回归并行精修范式”；但在纯长文本无块级缓存的场景下，双向注意力缺失原生 KV Cache 复用与多 token 并行采样分解误差，决定了它短期更适合代码补全、结构化编辑与固定长度填空，而非全面取代 AR 长文本对话。
- ==推翻条件==：
  ① 若公开复现的开源纯全局扩散语言模型（非半自回归块拼接）在 $\ge 8192$ 长上下文与 $\ge 8\text{B}$ 参数规模下，于标准 H100 单卡推理中在保持与同尺寸 AR 模型持平的 MMLU/HumanEval 准确率前提下，端到端输出吞吐持续超越采用投机采样的 AR 引擎 $\ge 2\times$，则本工作台关于“KV Cache 缺失压制长文本优势”的限定将被推翻。
  ② 若离散扩散在极少采样步数（如 $\le 8$ 步生成 512 token 复杂推理链）下不借助额外自回归精修器或蒸馏器，仍能通过高阶转移核消除并行分解误差并维持低重复率与逻辑连贯性，则“因子化独立假设限制步数极限压缩”的判断将被推翻。

---

## 原文摘录与一手信源存证

> 然而重要的是要记住，离散状态空间中不存在数学扩散过程（SDE 不存在于离散状态空间中）。我们不使用 ODE/SDE，而是使用连续时间马尔可夫链（CTMC）。
> — 原文摘录，文字段落 1；证据 `digest-material-810d5287815cb4edfa0b8f604c2f297c8ce55c1f832f3d4f47ece01834c7d6f3-excerpt-1@2`

> 事实证明，Flow Matching 的原理并非 flow 或甚至 CTMC 所独有。相反，这些是构建带马尔可夫过程的生成模型的一般学习原理。这引出了 Generator Matching 框架——一个扩展并统一离散和连续 flow 与扩散模型到一个框架的生成式建模框架。
> — 原文摘录，文字段落 2；证据 `digest-material-810d5287815cb4edfa0b8f604c2f297c8ce55c1f832f3d4f47ece01834c7d6f3-excerpt-2@2`

一手材料：

- An Introduction to Flow Matching and Diffusion Models (Chapter 7: Discrete Diffusion Models) · MIT CSAIL (Peter Holderrieth & Ezra Erives) · [原站](https://arxiv.org/abs/2506.02070) · [主体档案：Peter Holderrieth](../entities/people/Peter%20Holderrieth.md) / [主体档案：Ezra Erives](../entities/people/Ezra%20Erives.md) · [本地原件](../../../raw/ef0b5e9c5afb61af230e9d2affa57355c24568b49ee8492eae5d5b641e48c2f7)
  材料版本 `digest-material-ef0b5e9c5afb61af230e9d2affa57355c24568b49ee8492eae5d5b641e48c2f7@1`；获取方式 `search_web_verified_summary`。
  > - Section 7.1 Continuous-Time Markov Chain (CTMC) Models: Defines discrete state space S = V^d (vocabulary V, sequence length d, used for text or DNA). — 原文提取
  > - Equations (85)-(86): Off-diagonal transition rates Q\_t(y|x) \>= 0 for y != x; diagonal staying rate Q\_t(x|x) = -sum\_\{y != x\} Q\_t(y|x) to conserve total probability mass. — 原文提取
- Generator Matching: Generative modeling with arbitrary Markov processes · Peter Holderrieth et al. · [原站](https://arxiv.org/abs/2410.20587) · [主体档案：Peter Holderrieth](../entities/people/Peter%20Holderrieth.md) · [本地原件](../../../raw/5030e8979daf465261e212e9d7757f372a8166e1a93f87576fb2e8d9ee2550ee)
  材料版本 `digest-material-5030e8979daf465261e212e9d7757f372a8166e1a93f87576fb2e8d9ee2550ee@1`；获取方式 `search_web_verified_summary`。
  > Authors: Peter Holderrieth, Marton Havasi, Jason Yim, et al. — 原文提取
  > Introduces Generator Matching, a modality-agnostic generative modeling framework built on arbitrary Markov processes and their infinitesimal generators. — 原文提取
- Simple and Effective Masked Diffusion Language Models · Subham Sekhar Sahoo et al. · [原站](https://arxiv.org/abs/2406.07524) · [主体档案：Subham Sekhar Sahoo](../entities/people/Subham%20Sekhar%20Sahoo.md) · [本地原件](../../../raw/a718fc93f4926832fe012b0f8306870b5b2257a7c2e35366a50b394d9bea9334)
  材料版本 `digest-material-a718fc93f4926832fe012b0f8306870b5b2257a7c2e35366a50b394d9bea9334@1`；获取方式 `search_web_verified_summary`。
  > Authors: Subham Sekhar Sahoo, Marianne Arriola, Yair Schiff, et al. — 原文提取
  > Proposes Masked Diffusion Language Models (MDLM), a simplified and effective masked discrete diffusion framework for text generation. — 原文提取

归属与范围：本文（微信公众号 human five 于 2026-11-16 09:53 转载）系 MIT 6.S184 课程讲义《An Introduction to Flow Matching and Diffusion Models》（arXiv:2506.02070，Peter Holderrieth & Ezra Erives，2025-06-02，共 84 页）第 7 章《Discrete Diffusion Models》的逐节中文译文，因微信 HTML 转换丢失行内 LaTeX 公式；已穿透核验 MIT CSAIL 讲义主源及 Generator Matching（arXiv:2410.20587）、MDLM（arXiv:2406.07524）等一手文献，并通过概念历程五步框架重构原理拆解。

来源缺口：

- `unavailable`：arXiv PDF 全文未本地下载归档：arXiv:2506.02070（84 页 MIT 6.S184 讲义）、arXiv:2410.20587 与 arXiv:2406.07524 仅留存基于 search\_web 检索核实的元数据、章节摘要与核心定理公式，待联网后补抓完整 PDF 原件（含公式符号与附录 C 证明细节）。 [线索](https://arxiv.org/abs/2506.02070)

[返回赛道总览](../赛道总览.md#digest-810d5287815cb4ed) · [返回导读索引](README.md) · [主体档案库](../entities/README.md)
