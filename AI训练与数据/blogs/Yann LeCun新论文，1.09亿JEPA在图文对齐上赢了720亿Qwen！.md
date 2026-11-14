---
title: "Yann LeCun新论文，1.09亿JEPA在图文对齐上赢了720亿Qwen！"
type: blog_digest
sector: "AI训练与数据"
source: "arXiv:2610.39302 · LeCun & Balestriero"
published_at: "2026-11-09"
raw_sha256: "07a1c4f2102ccf174458161851bf36b04ac7b64bb29b4c4c019b68fc6ce6f06c"
material_version: "digest-material-07a1c4f2102ccf174458161851bf36b04ac7b64bb29b4c4c019b68fc6ce6f06c@1"
origin_url: "https://arxiv.org/abs/2610.39302"
trigger_source: "智猩猩AI"
trigger_url: "https://mp.weixin.qq.com/s/a_tHUmotMXHllMY8KLJ3hg"
user_comments: "这篇论文在说啥？ 用/r看看和微信公众号的总结是不是对的"
status: "processed_with_gaps"
---

<a id="digest-07a1c4f2102ccf17"></a>
# Yann LeCun新论文，1.09亿JEPA在图文对齐上赢了720亿Qwen！

2026-11-09 · arXiv:2610.39302 · LeCun & Balestriero · 有来源缺口

[本地原件归档](../../../raw/07a1c4f2102ccf174458161851bf36b04ac7b64bb29b4c4c019b68fc6ce6f06c) · 固定材料版本 `digest-material-07a1c4f2102ccf174458161851bf36b04ac7b64bb29b4c4c019b68fc6ce6f06c@1` · [一手原站](https://arxiv.org/abs/2610.39302) · [触发线索（智猩猩AI）](https://mp.weixin.qq.com/s/a_tHUmotMXHllMY8KLJ3hg)

> [!IMPORTANT]
> 用户关注点（TG）：这篇论文在说啥？ 用/r看看和微信公众号的总结是不是对的

## 针对性追查与回应

### 第一部分：这篇论文到底在说啥？（基于一手论文 arXiv:2610.39302 与官方代码库 [galilai-group/prh-proof](https://github.com/galilai-group/prh-proof) 拆解）

- 论文信息：*Proving and Improving the Platonic Representation Hypothesis with JEPAs*（[arXiv:2610.39302](https://arxiv.org/abs/2610.39302)，2026 年 10 月 29 日发布）
- 作者与机构：Randall Balestriero（布朗大学助理教授、前 Meta FAIR 博士后、AMI Labs）与 Yann LeCun（纽约大学教授、前 Meta 首席 AI 科学家、巴黎世界模型独角兽 AMI Labs 联合创始人兼执行董事长）
- 开源代码与全量实验表：[github.com/galilai-group/prh-proof](https://github.com/galilai-group/prh-proof)（含 345 次训练运行注册表 `paper/runs.csv`、全部图表底层 CSV 数据及可运行定理验证 `prh/theory.py`）

---

#### 1. 核心问题（Problem Statement）：为什么大模型非要靠“暴力堆规模”才能跟视觉对齐？

2024 年 MIT Phillip Isola 团队提出著名的 柏拉图表征假说（Platonic Representation Hypothesis, PRH）：分别在图像和纯文本上独立训练的神经网络，随着参数与数据规模扩大，其内部表征空间的几何结构（用互 $k$ 近邻重合率 Mutual $k$-NN 度量）会自发趋同，似乎都在收敛向同一个客观物理世界的底层统计模型。

但 PRH 此前只是一个经验观察：
1. 缺乏数学保证：不知道什么条件下跨模态表征一定收敛、什么条件下永远无法收敛；
2. 缺乏工程配方（Recipe）：为什么自回归大语言模型（LLM）必须烧掉十几个万亿（15T–18T）Token、堆到 70B 参数，才能勉强涌现出跟视觉模型对齐的几何结构？能不能不靠暴力堆规模，直接从训练目标与正样本配对方式入手学到世界表征？

Balestriero 和 LeCun 的核心回答是：将“假说”变成可严格证明的“定理”——跨模态表征能否对齐，根本杠杆不在参数规模，而在训练时把哪两个样本配成一对：配对同一物理场景的两次独立观测（“好视角 Good Views”）就能直接对齐；而把同一篇文档切成前后片段预测下一个 Token（“坏视角 Bad Views”），则把大半表征容量浪费在了死记硬背单模态句法与措辞干扰项上。

---

#### 2. 核心数学机制与模型架构（Method & Mechanism）

```text
【底层物理世界状态 z ~ p(z)】（例如：草地上的一只黑白猫）
        │
        ├──► 视觉模态渲染 g_1(z, ν_1)（机位/光照干扰 ν_1）
        │      • 好视角 (Good Views)：同一场景的两张不同照片 / 视频不同帧
        │      • 坏视角 (Bad Views) ：同一张照片裁出两块（共享同一机位/光照 ν_1）
        │
        └──► 文本模态渲染 g_2(z, ν_2)（作者措辞/句式干扰 ν_2）
               • 好视角 (Good Views)：同一场景的两段独立描述（措辞 ν_2, ν'_2 彼此独立）
               • 坏视角 (Bad Views) ：同一句话遮盖不同词，或自回归预测下一 Token（共享同一作者措辞 ν_2）

                     ▼ 各自在单模态内独立求解 LeJEPA (拉近多视图表征 + SIGReg 防坍塌) ▼

  [视觉表征空间 f_1] ◄══════ 仅需一次正交旋转 Q ∈ O(k) 即可严格对齐 (定理 1) ══════► [文本表征空间 f_2]
```

论文在 §2–§3 建立了由 4 个核心定理 + 3 个命题 组成的完整谱图理论体系（代码实现见 [`prh/theory.py`](https://github.com/galilai-group/prh-proof/blob/main/prh/theory.py) 与 [`tests/test_theory.py`](https://github.com/galilai-group/prh-proof/blob/main/tests/test_theory.py)）：

1. 命题 1（JEPA 的谱分解最优解）：
   在零均值与白化约束（$\mathbb{E}_p[h]=0, \mathbb{E}_p[hh^\top]=I_k$）下，最小化平方预测损失 $\mathbb{E}_\pi[\|h(z)-h(z')\|^2]$ 的 JEPA 编码器，其全局最优解唯一（相差正交旋转 $Q \in O(k)$），恰好等于正样本对分布 $\pi(z,z')$ 诱导的马尔可夫转移算子 $T_\pi$（对称核 $S = D^{-1/2}\pi D^{-1/2}$）的前 $k$ 个非平凡特征函数 $\Phi_k = (\phi_1,\dots,\phi_k)$。
2. 定理 1（柏拉图表征定理，Platonic Representation Theorem）：
   任意 $M \ge 2$ 个模态各自独立训练 JEPA，只要它们的正样本对均采自同一个世界状态转移分布 $\pi(z,z')$ 的两次独立观测（好视角 Good Views），则无论各模态的渲染函数 $g_m$ 如何不同，学到的表征必然严格等距同构：$f_1(g_1(z)) = Q f_2(g_2(z))$，仅相差一个正交旋转矩阵 $Q \in O(k)$。
3. 定理 2（核失配的 Davis–Kahan 误差上界）：
   若两模态的正样本转移算子存在偏差 $E = T_{\pi_1} - T_{\pi_2}$，则旋转对齐后的距离上界为 $\frac{2\sqrt{2}}{\delta}\min(\sqrt{k}\|E\|_{\text{op}}, \|E\|_{\text{HS}})$，其中 $\delta = \mu_k - \mu_{k+1}$ 为谱间隙。
4. 命题 3 & 定理 3（为什么 Next-Token Prediction 是“坏视角”并浪费表征容量？）：
   - 命题 3：标准 LLM 的交叉熵 Next-Token Prediction（NTP）损失 $-\langle h_t, e_{y_{t+1}}\rangle + \log\sum_v e^{\langle h_t, e_v\rangle}$，在数学上严格分解为一个以同一文档相邻片段为正样本对的 JEPA 预测项 + 一个 Log-Partition 防坍塌正则项。
   - 定理 3（干扰项下界定理，Nuisance Bound）：每次真实观测 $(z, \nu)$ 都混杂了世界状态 $z$ 和模态特有的干扰项 $\nu$（如文本的句式/用词习惯）。
     - 好视角抽取同一场景 $z$ 的两段不同描述，两者的措辞干扰 $\nu_1, \nu_2$ 相互独立（算子乘积 $\pi \otimes q q^\top$ 在干扰维度的秩为 1），编码器自动滤除措辞干扰，100% 维度用于编码物理场景 $z$；
     - 坏视角（同句掩码或 Next-Token 预测）从同一段话 $(z, \nu)$ 中切出前后两半，两者共享同一个 $\nu$（句风保留率极高）。只要前 $k$ 个主特征值中有 $r$ 个来自干扰项，编码器就会把 $r$ 个维度拿去记忆句法和措辞，导致跨模态对齐误差存在不可消除的下界 $\ge 2(k - \operatorname{tr} C_f^{1/2}) \ge 2r$。
5. 定理 4（覆盖度上界与为什么暴力扩大数据能缓慢救回坏视角）：
   当语料库规模极大、每个世界状态 $z$ 被成千上万篇不同措辞的文档密集覆盖（Coverage）时，局部坏视角邻域在跨文档间发生微弱重叠，使干扰项最大特征值 $\eta$ 缓慢衰减——这从数学上解释了为什么传统 LLM 必须靠万亿级 Token 才能“硬熬”出跨模态对齐。
6. 文本 JEPA 的工程架构（LeJEPA + SIGReg）：
   - 底座：并非微调现成预训练模型，而是从零随机初始化的双向 BERT 编码器（bert-base-uncased 分词器，最大长度截断为 64 tokens，取 [CLS] 向量），测试了 BERT-T (11M)、BERT-S (33M, 12层/384维)、BERT-B (109M, 12层/768维)、BERT-L (335M)。
   - 多裁剪视图与损失：每次对同一张图的描述列表采样 2 个全局视图（截取 50%–100% 连续跨度 + 15% 掩码）+ 6 个局部视图（截取 15%–50% 连续跨度 + 15% 掩码），使用 stable-pretraining 的 LeJEPA 损失（所有视图向全局视图均值对齐 + SIGReg 谱各向同性高斯正则化）。

---

#### 3. 实验设置与核心定量结果汇总（源自官方 `paper/data/*.csv`）

评测核心指标为 PRH 原论文定义的 WIT-1024 互 10 近邻重合率（Mutual 10-NN，无需任何配对数据，直接比较文本编码器与冻结视觉编码器在 1,024 个图文样本上的局部邻域重合度） 及 Flickr30k 旋转对齐检索 R@1：

| 实验维度 | 模型 / 训练方式 | 参数量 | 训练数据规模（样本数 / Token 数） | WIT-1024 对齐 DINOv2-B | WIT-1024 对齐 CLIP ViT-H | COCO-5k 对齐 DINOv2-B | Flickr30k 旋转检索 R@1 |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| 主实验：文本好视角 JEPA | Text JEPA (BERT-B, Good Views) | 109M | 9.4亿图文本 (900M 样本 / 115.6B tokens) | 0.184 (3种子: .191/.181/.179) | 0.230 (.227–.233) | 0.161 (种子0: .169) | 0.478 (.464/.484/.485) |
| 同底座对照 1：下一词预测 | BERT-B (Next-Token Prediction) | 109M | 同上 9.4亿图 (900M 样本 / 38.5B tokens) | 0.111 (.109/.111/.112) | 0.146 (.145/.146/.147) | — | 0.335 (.346/.332/.328) |
| 同底座对照 2：同句掩码 | BERT-B (Bad-View JEPA, Masked) | 109M | 同上 9.4亿图 (900M 样本 / 38.5B tokens) | 0.087 (.088/.085/.088) | 0.114 (.116/.111/.114) | — | 0.325 (.318/.309/.348) |
| 小样本效率对照（1/42 样本） | Text JEPA (BERT-B, Good Views) | 109M | 216万图文本 (21.6M 样本 / 2.77B tokens) | 0.109 (.107/.108/.112) | — | — | 0.388 (.393/.399/.372) |
| 中型规模小模型 | Text JEPA (BERT-S, Good Views) | 33M | 5000万图文本 (40M 样本 / 5.14B tokens) | 0.125 (.129/.118/.127) | 0.151 (.156/.143/.155) | — | 0.376 (.370/.378/.381) |
| 开源自回归大模型基线 | Qwen2.5-72B | 72,000M | 预训练语料 (18,000B tokens) | 0.154 (DINOv2-g: .169) | 0.210 | 0.108 | — |
| 开源自回归大模型基线 | Llama-3-70B | 70,000M | 预训练语料 (15,000B tokens) | 0.151 (DINOv2-g: .166) | 0.206 | 0.113 | — |
| 开源自回归大模型基线 | Qwen2.5-3B / 7B / 32B | 3B–32B | 预训练语料 (18,000B tokens) | 0.125 / 0.118 / 0.128 | 0.178 / 0.169 / 0.186 | 0.099 / 0.101 / 0.104 | — |
| 原生图文对比学习基线 | CLIP Text Encoder | ~63M–123M | 4亿图文对 (400M image-text pairs) | 0.124 | 0.159 | 0.132 | 0.489 |

---

#### 4. 论文自身的核心局限性与隐含前提（Limitations）

1. “纯文本 JEPA”背后的视觉拐杖（LLaVA 重标注依赖）：
   大规模实验使用的 Recap-DataComp-1B 数据集中，每张图对应的 3 段文本里，只有 1 段是原始网页 alt-text，另外 2 段是由视觉语言大模型 LLaVA（基于 LLaMA-3-8B）看图生成的描述。当把 LLaVA 描述换成纯文本模型对 alt-text 的改写时，对齐得分从 0.107 断崖式跌至 0.060（几乎退回单句遮盖的 0.055，91% 的对齐增益消失）。
2. 几何对齐 $\neq$ 通用语言智能：
   109M 文本 JEPA 是一个最大长度仅 64 tokens 的双向编码器，它赢下的是“单句级视觉场景表征的几何同构度”，完全不具备 Qwen2.5-72B 的长文本生成、逻辑推理、代码编写与海量世界事实问答能力。
3. 训练稳定性与超参坍塌风险：
   Post-LN BERT 配合 SIGReg 正则项对超参数极为敏感，若缺少梯度裁剪或微调 SIGReg 权重 $\lambda$，模型极易发生表征坍塌（详见下文 `/r` 核查发现）。

---

### 第二部分：`/r` 事实复核 —— 微信公众号（智猩猩AI）的总结对不对？

#### 总体复核结论

- 数字准确度（高）：公众号文章（智猩猩AI，编辑：林夕）引述的 10 组核心实验数字 与论文正文及官方仓库 [`galilai-group/prh-proof/paper/data/*.csv`](https://github.com/galilai-group/prh-proof/tree/main/paper/data) 100% 吻合，没有出现抄错数字或张冠李戴；尤其值得肯定的是，公众号在第 03 节如实呈现了 Nicolas Dufour 的质疑及 0.107 → 0.060 → 0.055 的 LLaVA 消融对照。
- 口径偏差与遗漏（4 处关键隐瞒/简化 + 5 项重要一手增量）：公众号为了叙事流畅，隐去了第 4 个随机种子因正则权重翻倍而跌至 0.121（输给 Qwen）的稳定性缺陷、把依赖双巨型视觉底座 + 1.5B/3B 大模型解码器的 Captioner 包装成了轻量旋转映射，并遗漏了 AMI Labs 创企背景、定理 3 干扰项方差占比、预注册标度律公式以及真正的“零配对（Zero-Pair）”对齐实验。

---

#### 1. 公众号核心主张逐条核查表

| # | 微信公众号文章主张 / 引述 | 核查状态 | 一手论文与官方代码库（arXiv:2610.39302 / galilai-group/prh-proof）核查证据 |
| :--- | :--- | :--- | :--- |
| 1 | “10月29日，Randall Balestriero 和 Yann LeCun 在 arXiv 发布论文《Proving and Improving the Platonic Representation Hypothesis with JEPAs》” | ✅ 准确<br/>（🔍 漏机构背景） | 论文编号 arXiv:2610.39302，代码于 2026-10-30 开源（commit a2b9949fa9）。增量背景：两人署名除布朗大学与 NYU 外，均挂靠 LeCun 离职 Meta 后联合创立的巴黎世界模型独角兽 AMI Labs（Advanced Machine Intelligence Labs，种子轮融资 10.3 亿美元）。 |
| 2 | “图像模型和文本模型各自从同一场景的不同观察中学习，即使分开训练，表征也可通过一次旋转对齐” | ✅ 准确 | 对应论文 Theorem 1（Platonic Representation Theorem） 与 [`prh/theory.py`](https://github.com/galilai-group/prh-proof/blob/main/prh/theory.py) 中的 `best_rotation`（加权正交 Procrustes 变换 $Q \in O(k)$）。 |
| 3 | “1.09 亿参数的文本 JEPA，在图文表征对齐测试中超过了 720 亿参数的 Qwen2.5-72B，参数量相差约 660 倍” | ⚠️ 数字真，但隐去关键条件与失败种子 | 见 [`llm_scale.csv`](https://github.com/galilai-group/prh-proof/blob/main/paper/data/llm_scale.csv) 与 [`README.md`](https://github.com/galilai-group/prh-proof/blob/main/README.md#L39)：在 WIT-1024 对齐 DINOv2-B 测试中，109M BERT-B（3 种子均值 0.184，最高 0.191）确实超过 Qwen2.5-72B（0.154，$720/1.09 \approx 660.6$ 倍）。但公众号未提：① 第 4 个种子（rtall-b64-s1，有效 SIGReg 权重翻倍至 0.02）得分暴跌至 0.121，反而低于 Qwen2.5-3B（0.125）和 72B（0.154）；② 这里的“图文对齐”仅指 64-token 截断向量的互 10 近邻几何重合率，不代表多模态问答能力。 |
| 4 | “图像编码器处理照片，再用拟合好的旋转映射转到文本空间，最后由解码器写出描述。Isola 拿自家猫 Moxie 试了一次，写得完全准确” | ⚠️ 严重简化底层重型组件 | 见 [`docs/reproduce.md` §7](https://github.com/galilai-group/prh-proof/blob/main/docs/reproduce.md#L244-L255) 与 [`prh/models.py`](https://github.com/galilai-group/prh-proof/blob/main/prh/models.py#L208)：论文最强 Captioner（COCO CIDEr 0.838）及在线 Demo 并非只靠小模型：它串联了 两个冻结巨型视觉底座（DINOv2 ViT-g/14 + DINOv3 ViT-L） + 用 30,014 至 230,014 对图文样本拟合的旋转矩阵 + 训练时注入匹配旋转残差的高斯噪声（$\sigma \approx 1.9$） + 预训练大模型 Qwen2.5-1.5B / 3B 作为软提示解码器（LMDecoder） + 32 次核采样共识重排（Consensus Reranking）。 |
| 5 | “先在 Flickr 上比较三种做法：同一张图不同描述配对、同一句话遮掉不同部分、预测下一个 token；第一种逐渐拉开差距” | ✅ 准确<br/>（🔍 补充定量值） | 见 [`docs/reproduce.md` §3](https://github.com/galilai-group/prh-proof/blob/main/docs/reproduce.md#L78-L108) 与 [`ablations.csv`](https://github.com/galilai-group/prh-proof/blob/main/paper/data/ablations.csv)：在 Flickr30k（200 epochs, BERT-S 33M）上，对齐冻结 DINOv2 的检索 R@1（3 种子均值）分别为：好视角 JEPA 0.246（.248/.260/.230） vs 坏视角同句掩码 0.133 vs 下一 token 预测 0.118；若双端从零训（ViT-S + BERT-S），R@1 为 .044 vs .027 vs .021。 |
| 6 | “固定编码器大小、训练文本和样本量比较三种方式：同图不同描述配对得分 0.184，下一 token 预测 0.111，遮盖同一句话配对 0.088” | ✅ 精确匹配 | 见 [`scaling.csv` 第 39–51 行](https://github.com/galilai-group/prh-proof/blob/main/paper/data/scaling.csv#L39-L51) 与 [`phase_real.csv`](https://github.com/galilai-group/prh-proof/blob/main/paper/data/phase_real.csv)：固定 BERT-B (109M)、9.4 亿张图文本、9 亿训练样本，WIT-1024 对齐 DINOv2-B 的 3 种子均值为：好视角 0.1837（四舍五入 0.184）、下一 token 预测 0.1107（0.111）、坏视角同句遮盖 0.0870（种子 0 和 2 为 0.088）。 |
| 7 | “JEPA 读过 2160 万样本拿到 0.109，接近下一 token 预测读过 9 亿样本时的 0.111；样本量相差约 42 倍，按实际读入 token 计相差约 14 倍” | ⚠️ 数字真，但未解释 3 倍 Token 差从哪来 | 见 [`phase_real.csv` 第 7、15 行](https://github.com/galilai-group/prh-proof/blob/main/paper/data/phase_real.csv#L7) 与 [`tables.py` 第 46 行](https://github.com/galilai-group/prh-proof/blob/main/tables.py#L46)：BERT-B 在 216 万张图上训 10 轮（21.6M 样本，2.77B tokens）得 0.109，对比 NTP 在 9.4 亿图上训 900M 样本（38.52B tokens）得 0.111。样本比 $900/21.6 = 41.67 \approx \mathbf{42}$ 倍，Token 比 $38.52/2.773 = 13.89 \approx \mathbf{14}$ 倍。口径细节：为什么 1 个好视角样本消耗 3 倍 Token（128.4 vs 42.8 tokens/sample） 且每次迭代要做 8 次编码器前向（2 全局 + 6 局部视图）？因为好视角每次跨该图的 3 条描述抽 8 个裁剪视图，单样本计算量本身就是单句 NTP 的数倍。 |
| 8 | “训练文本来自 5000 万张网络图片时，3300 万参数的文本 JEPA 在 WIT 上拿到 0.125，与 30 亿参数的 Qwen2.5-3B 持平” | ✅ 精确匹配 | 见 [`phase_real.csv` 第 10、20 行](https://github.com/galilai-group/prh-proof/blob/main/paper/data/phase_real.csv#L10)：BERT-S（33M 参数）在 5,000 万张图文本（40M 样本，5.14B tokens）上 3 种子得分为 .129/.118/.127，均值 0.1247（0.125），持平 Qwen2.5-3B（0.125） 并反超 Qwen2.5-7B（0.118）。 |
| 9 | “在同一批 224 万张图上，用原始说明加 LLaVA 看图写的描述，得分是 0.107；换成原始说明加纯文本模型写出的改写，得分降到 0.060，仍略高于直接遮盖原文得到的 0.055” | ✅ 精确匹配<br/>（🔍 漏了第 4 组纯 LLaVA 对照） | 见 [`text_sources.csv` 第 2–13 行](https://github.com/galilai-group/prh-proof/blob/main/paper/data/text_sources.csv#L2-L13)：在 224 万张图（recaptext:11，BERT-S，3 种子均值）上：<br/>• all three（原始 alt-text + 2 条 LLaVA 描述，好视角）：.095/.112/.115 → 均值 0.1073（0.107），Flickr R@1 0.339；<br/>• alt-text + text-only paraphrase（原始说明 + 纯文本改写，好视角）：.058/.060/.061 → 均值 0.0597（0.060），Flickr R@1 0.233；<br/>• alt-text（仅原始说明，坏视角遮盖）：.056/.054/.055 → 均值 0.0550（0.055），Flickr R@1 0.180。<br/>• 公众号漏提的第 4 组：若只用 2 条 LLaVA 描述配对（去掉原始 alt-text），WIT 均值为 0.080（.082/.081/.076），但 Flickr R@1 高达 0.348（甚至超过三者混用的 0.339），证明 LLaVA 视觉重标注才是提供场景几何结构的主力！ |
| 10 | “Balestriero 回应：同一批文本换一种配对方式仍能带来收益；但也承认纯文本场景还需要更好的方法来构造样本对” | ✅ 准确客观 | 在 [`text_sources.csv` 第 14–25 行](https://github.com/galilai-group/prh-proof/blob/main/paper/data/text_sources.csv#L14-L25) 的 5,000 万图控制实验中，即便固定同样包含 LLaVA 的文本池，按好视角跨句配对（WIT 0.125 / R@1 0.376）也显著高于按坏视角单句掩码（WIT 0.063 / R@1 0.290）；但若没有图片作为跨句锚点，纯文本改写几乎无法注入新场景信息（定理 3）。 |

---

#### 2. 公众号遗漏的 5 项高价值一手增量发现（原文深挖）

1. 增量发现一：定理 3 的真实网络定量测量 —— 传统 LLM 有超过一半的表征方差被“措辞/句式干扰项”绑架（[`nuisance_fraction.csv`](https://github.com/galilai-group/prh-proof/blob/main/paper/data/nuisance_fraction.csv)）
   作者直接测量了真实编码器表征中“可由底层物理场景解释的方差占比（`scene_explained`，即 $\frac{1}{k}\operatorname{tr} C_f$）”：
   - 在前 $k=32$ 个主方向上：109M 好视角 JEPA 的场景解释率高达 83.0%（理论干扰下界仅 10.9），而 Next-Token Prediction 仅为 60.9%–61.8%（理论干扰下界恶化至 24.4–25.2）；
   - 在前 $k=128$ 个主方向上：109M 好视角 JEPA 场景解释率保持 72.2%，而 Next-Token Prediction 暴跌至 43.8%–48.3%——也就是说，自回归语言模型超过一半（52%–56%）的主特征方向都在编码与物理世界无关的句法、词汇习惯等单模态干扰项！
2. 增量发现二：训练稳定性与“不裁剪跨度（No Trimming）”消融 —— 好视角 JEPA 并非拿来就能训稳（[`ablations.csv`](https://github.com/galilai-group/prh-proof/blob/main/paper/data/ablations.csv)）
   查阅官方消融表可以发现两个公众号未提的工程真相：
   - 坍塌敏感性：在 Flickr 上，若不开启梯度裁剪（--clip 1.0），把视图数从 2+6 改为 2+2 会在 3 个种子中坍塌 2 个（last-epoch R@1 = 0.000）；把掩码率从 15% 提到 30% 会坍塌 1 个种子；把 SIGReg 权重 $\lambda$ 从默认 0.02 改为 0.005、0.05 或 0.1，模型全部坍塌至随机水平（R@1 = 0.001）。
   - 句内多粒度裁剪的隐藏贡献：哪怕用了同图不同描述配对，如果不做 2全局(50%-100%) + 6局部(15%-50%) 的连续跨度随机裁剪而直接喂整句（no trimming (whole captions)），Flickr R@1 会从 0.246 大幅跌至 0.185——说明“跨描述配对 + 多粒度子句裁剪”两者缺一不可。
3. 增量发现三：预注册的对齐标度律（Pre-registered Scaling Law，[`phase_law_fit.csv`](https://github.com/galilai-group/prh-proof/blob/main/paper/data/phase_law_fit.csv) & [`tables.py`](https://github.com/galilai-group/prh-proof/blob/main/tables.py#L82-L90)）
   作者在 0.41M–50.9M 独立图片、好视角混入比例 $q \in \{0, 0.001, 0.003, 0.01, 0.03, 0.1, 0.3, 1\}$、样本量 $M \in [5\text{M}, 320\text{M}]$ 的网格上拟合出显式标度律：
   $$\text{R@1}(q, M, N) = 0.171 + 0.029 \log M + 0.031 \log\!\left(1 + \frac{q^{1.07} M^{0.32} N^{0.19}}{0.244}\right)$$
   并在跑 85 组新实验前将预测值提前锁入 Git，实测盲测误差 RMSE 仅为 0.0093（与跑不同随机种子的固有波动 0.0096 完全一致）。更重要的是，该公式揭示：不需要 100% 的数据都是好视角，哪怕只在海量普通语料里混入 $q = 10\%\text{–}30\%$ 的好视角样本对，就能收获绝大部分跨模态对齐增益！
4. 增量发现四：真正的“零配对（Zero-Pair / Pair-Free）”对齐实验（[`pairfree_tests.csv`](https://github.com/galilai-group/prh-proof/blob/main/paper/data/pairfree_tests.csv)）
   公众号只提了用图文对拟合旋转矩阵，但论文 §4.8 进一步验证了：如果连 1 对图文配对都不给（0 pairs），直接调用 Schnaus et al. (arXiv:2610.09411) 的无监督二次指派算法去对齐 DINOv2-B 与文本 JEPA 的点云拓扑：
   - 109M 文本 JEPA 在零样本分类上拿到 CIFAR-10 86.0%、CIFAR-100 67.2%、ImageNet-100 64.4%，全面击败原论文测试的 21 组大模型（如 Qwen3-8B 生成式池化在 ImageNet-100 上仅 47.6%，$p = 0.00013$）；
   - 但客观边界在于：若对比本身用 4 亿图文对训练过的 CLIP ViT-B/32 文本塔，CLIP 在零配对 ImageNet-100 上为 68.7%（高于 109M 文本 JEPA 的 64.4%，$p = 0.0077$）。
5. 增量发现五：并非所有视觉模型都在“柏拉图空间”里 —— 视觉端自身也受定理 1–3 支配（[`vision_families.csv`](https://github.com/galilai-group/prh-proof/blob/main/paper/data/vision_families.csv) & [`image_encoders.csv`](https://github.com/galilai-group/prh-proof/blob/main/paper/data/image_encoders.csv)）
   109M 文本 JEPA 与不同视觉编码器家族的 WIT-1024 对齐度差异极大：
   - DINOv2（ViT-B 0.191 / ViT-L 0.199 / ViT-g 0.203） 与 CLIP 视觉塔（ViT-B 0.221 / ViT-L 0.224 / ViT-H 0.233）：对齐度极高；
   - MAE（掩码像素自编码器，ViT-B 0.100 / ViT-L 0.126 / ViT-H 0.125） 与 单张图内裁剪的 I-JEPA（ViT-H 0.109 / ViT-g 0.140）：对齐度低得多！
   - 原因：单图内做 patch 掩码重建（MAE）或单图内局部裁剪预测（I-JEPA）在视觉端同样属于“共享单张图光照/机位干扰项的弱视角”；而在视频不同帧间采样（MSR-VTT good image views）或融合全局+局部语义不变性的 DINOv2/v3，才真正消除了视觉端干扰项。

---

## 原文摘录与一手信源存证

> 10 月 29 日，Randall Balestriero 和Yann LeCun在 arXiv 上发布论文 《Proving and Improving the Platonic Representation Hypothesis with JEPAs》 。
> — 原文摘录，文字段落 1；证据 `digest-material-07a1c4f2102ccf174458161851bf36b04ac7b64bb29b4c4c019b68fc6ce6f06c-excerpt-1@1`

> 论文证明，在特定条件下，如果图像模型和文本模型各自从同一场景的不同观察中学习，即使分开训练，它们学到的表征也可以通过一次旋转对齐。
> — 原文摘录，文字段落 2；证据 `digest-material-07a1c4f2102ccf174458161851bf36b04ac7b64bb29b4c4c019b68fc6ce6f06c-excerpt-2@1`

> 实验中，一个 1.09 亿参数 的文本 JEPA，在图文表征对齐测试中超过了 720 亿参数的 Qwen2.5-72B ，两者的参数量相差约 660 倍。
> — 原文摘录，文字段落 3；证据 `digest-material-07a1c4f2102ccf174458161851bf36b04ac7b64bb29b4c4c019b68fc6ce6f06c-excerpt-3@1`

一手材料：

- Proving and Improving the Platonic Representation Hypothesis with JEPAs · Randall Balestriero, Yann LeCun / Brown University, New York University (NYU), AMI Labs · [原站](https://arxiv.org/abs/2610.39302) · [主体档案：Yann LeCun (@ylecun)](../entities/people/Yann%20LeCun%20%28%40ylecun%29.md) / [主体档案：Randall Balestriero](../entities/people/Randall%20Balestriero.md) / [主体档案：GalilAI Group](../entities/labs/GalilAI%20Group.md) · [NotebookLM](https://notebook.google.com/notebook/a5a6cb11-e073-464c-ae6c-a945ef70f174) · [Drive](https://drive.google.com/file/d/107bhS1-0SG3qCeGw6iuE17ZzjKh5xRZB/view?usp=drivesdk)
  材料版本 `digest-material-06a5fc823460253bd81c09437f31342c8e90c4e0220d396ef1e41f2b933d6883@1`；获取方式 `http_pdf_download`。
  > Everything is read from \`data/\<name\>\`, a folder or a symbolic link to an existing copy; \[\`docs/data.md\`\](https://github.com/galilai-group/prh-proof/blob/main/docs/data.md) gives every download command and the expected layouts. — PDF p.3

归属与范围：完成一手信源追溯与 /r 逐项事实复核：获取 Randall Balestriero 与 Yann LeCun（布朗大学 / NYU / AMI Labs）发布的《Proving and Improving the Platonic Representation Hypothesis with JEPAs》（arXiv:2610.39302）及官方开源代码与实验数据库（github.com/galilai-group/prh-proof），构建包含完整理论证明代码、复现指南、全量 CSV 实验数据表与 13 张原始矢量图的 1.62MB 归档 PDF；完成论文四大定理与实验结果拆解，并对微信公众号（智猩猩AI）总结的 10 项核心主张进行逐条核查（确认核心数字 100% 匹配，同时揭示第 4 种子退化至 0.121、训练坍塌敏感性、1样本=3倍Token/8视图计算代价、Captioner 背后挂载 DINOv2-g+DINOv3-L+Qwen2.5-1.5B/3B 重型组件等 4 处口径偏差，并补充 AMI Labs 背景、定理 3 干扰项方差占比、预注册标度律公式与零配对对齐实验等 5 项一手增量发现）。

来源缺口：

- `unavailable`：如何从无配对、无视觉锚点的纯文本语料（如 Common Crawl 原始网页文本）中自动挖掘或构造不携带单文档措辞干扰项（Nuisance）的“好视角（Good Views）”样本对，目前论文与作者团队均承认尚未解决（纯文本同义改写在 224 万图消融中仅得 0.060，相比单句遮盖 0.055 提升微弱，远低于包含 LLaVA 视觉描述的 0.107）。
- `pending_verification`：109M 文本 LeJEPA（BERT-B + SIGReg）在 9.4 亿张图规模下的训练稳定性与向超长上下文（\>64 tokens）及通用推理/指令遵循任务的迁移能力尚待验证：官方仓库披露第 4 个随机种子（有效 SIGReg 权重翻倍至 0.02）WIT 对齐得分从 0.184 骤降至 0.121，且 Flickr 消融显示调整正则权重或去掉梯度裁剪极易引发完整表征坍塌（R@1 跌至 0.000–0.001）。

[返回赛道总览](../赛道总览.md#digest-07a1c4f2102ccf17) · [返回导读索引](README.md) · [主体档案库](../entities/README.md)
