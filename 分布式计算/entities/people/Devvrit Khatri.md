# Devvrit Khatri

[返回主体档案库](../README.md) · [返回赛道总览](../../赛道总览.md) · [单篇导读索引](../../blogs/README.md)

- 主体类别：👤 个人与学者 (People)
- 核心定位与说明：UT Austin / Meta；ScaleRL (arXiv:2510.13786) 第一作者
- 关联账号与官方入口：
  - arxiv（Devvrit Khatri）：[作者索引](https://arxiv.org/search/?searchtype=author&query=Khatri%2C+Devvrit) · 登记对象 `digest-publisher-89a3bfe6c1575cb4e6400824` — UT Austin / Meta；ScaleRL (arXiv:2510.13786) 第一作者

## 1. 核心研究问题与待核查争议（Questions & Open Debates）

### 🔍 待核查缺口与证据边界（Open Gaps）

- `unavailable`：受工作区沙箱出站限制，未能直拉 https://arxiv.org/pdf/2510.13786 原文 PDF；已通过检索交叉核验 Sigmoid 公式、40 万/10 万/5 万 GPU 小时实验规模、CISPO/FP32/PipelineRL 消融分工及全部作者机构，但各基准（如 AIME 24/25、LiveCodeBench）逐曲线准确率表格待离线补抓 PDF 复核。 [线索](https://arxiv.org/abs/2510.13786)（关联：[《The Art of Scaling Reinforcement Learning Compute for LLMs》](../../blogs/The%20Art%20of%20Scaling%20Reinforcement%20Learning%20Compute%20for%20LLMs.md)）
- `not_disclosed`：已检索到的一手摘要未披露 10 万 GPU 小时运行中采样推理集群与梯度训练集群的物理 GPU 配比、PipelineRL 在 17Bx16 MoE Expert Parallelism All-to-All 权重热更新下的网络带宽占用上限，以及千卡/万卡节点故障重算对有效 Goodput 的扣减细节。（关联：[《The Art of Scaling Reinforcement Learning Compute for LLMs》](../../blogs/The%20Art%20of%20Scaling%20Reinforcement%20Learning%20Compute%20for%20LLMs.md)）

- [《The Art of Scaling Reinforcement Learning Compute for LLMs》](../../blogs/The%20Art%20of%20Scaling%20Reinforcement%20Learning%20Compute%20for%20LLMs.md)：已穿透核验 arXiv:2510.13786（2025-10-15，ICLR 2026 Oral；Devvrit Khatri、Lovish Madaan、Rishabh Tiwari、Rachit Bansal、Sai Surya Duvvuri、Manzil Zaheer、Inderjit S. Dhillon、David Brandfonbrener、Rishabh Agarwal；UT Austin & Meta 等）。论文累计消耗超 40 万 GPU 小时建立 Sigmoid RL 计算缩放定律，并外推至 10 万 GPU 小时 8B 稠密模型与 5 万 GPU 小时 17Bx16 Llama-4-Scout MoE 单次运行。消融严格区分「决定渐近上限」与「调节算力效率」两类机制：CISPO 损失与 FP32 输出头精度、长生成上下文共同抬高上限，而 PipelineRL 异步流式更新、Prompt 级损失聚合、批级优势归一化、零方差 Prompt 过滤与 No-Positive-Resampling 课程主要压缩达成曲线所需算力成本。受沙箱限制未能直拉 PDF 全文（已登记 unavailable 与集群拓扑细节 not\_disclosed 缺口）。

## 2. 收录文章与一手材料（Ingested Articles & Primary Sources）

### [The Art of Scaling Reinforcement Learning Compute for LLMs](../../blogs/The%20Art%20of%20Scaling%20Reinforcement%20Learning%20Compute%20for%20LLMs.md)

2025-10-15 · 来源：arXiv:2510.13786 · The Art of Scaling Reinforcement · 状态：有来源缺口

[单篇导读（blogs/）](../../blogs/The%20Art%20of%20Scaling%20Reinforcement%20Learning%20Compute%20for%20LLMs.md) · [微信原件](../../../../raw/dac6bf1d5815041f29a42158638e66268ca9d7f2395600045528cd18782e5f68) · 固定版本 `digest-material-dac6bf1d5815041f29a42158638e66268ca9d7f2395600045528cd18782e5f68@1`

> 【信源巡检核心摘要】 ICLR 2026 论文基于超 40 万 GPU 小时的系统性 RL 实验，证明大语言模型 RL 计算缩放遵循可预测的 S 型曲线，可由小规模试验外推至 10 万 GPU 小时级单次运行。消融实验明确区分了两类因素的作用边界：损失目标（CISPO 优于 GRPO/DAPO）与 FP32 输出头数值精度直接决定性能渐近上限，而损失聚合、优势归一化、课程学习与异步离策略（如 PipelineRL）主要调节算力效率而非上限本身。

关联一手材料：

- The Art of Scaling Reinforcement Learning Compute for LLMs（UT Austin & Meta / arXiv (ICLR 2026)）· [原站](https://arxiv.org/abs/2510.13786) · [本地原件](../../../../raw/81912eff1aaa21366271677cf9d4ee6d670d22d878d3358e3c9620a6e589a8e1) · 版本 `digest-material-81912eff1aaa21366271677cf9d4ee6d670d22d878d3358e3c9620a6e589a8e1@1`
  > ## Verified Abstract & Core Findings (via search\_web against arxiv.org/abs/2510.13786 & iclr.cc/openreview) 1. — 原文提取


## 3. 关联实体网络（Verified Entity Ontology）

- → UT Austin · 任职 / 隶属 · researcher（rule_verified/verified）
