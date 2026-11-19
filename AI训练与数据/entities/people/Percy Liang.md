# Percy Liang

[返回主体档案库](../README.md) · [返回赛道总览](../../赛道总览.md) · [单篇导读索引](../../blogs/README.md)

- 主体类别：👤 个人与学者 (People)
- 核心定位与说明：Stanford University / CRFM（arXiv 作者索引）
- 关联账号与官方入口：
  - arxiv（Percy Liang）：[作者索引](https://arxiv.org/search/?searchtype=author&query=Liang%2C+Percy) · 登记对象 `digest-publisher-6c3395edb2f2775365b23692` — Stanford University / CRFM（arXiv 作者索引）

## 1. 核心研究问题与待核查争议（Questions & Open Debates）

### 🔍 待核查缺口与证据边界（Open Gaps）

- `unavailable`：受工作区沙箱出站限制，未能直拉 https://arxiv.org/pdf/2610.31867 原文 PDF；已通过检索交叉核验完整作者、核心缩放变量、3e18/1e22 FLOPs 改写比例、22B 模型 33 倍外推 1.1% 误差及 3B 自改写边界，但具体回归系数与分域 BPB 全量表格待离线补抓 PDF 复核。 [线索](https://arxiv.org/abs/2610.31867)（关联：[《Rewriting Scaling Laws for Synthetic Data with Compute and Data Constraints》](../../blogs/Rewriting%20Scaling%20Laws%20for%20Synthetic%20Data%20with%20Compute%20and%20Data%20Constraints.md)）
- `not_disclosed`：已检索到的一手摘要未披露生成端改写器与目标学生模型之间在 KV Cache 内存带宽受限推理（低 Arithmetic Intensity）与 6ND 密集训练 FLOPs 之间的真实美元成本换算系数，亦未公开各网页子域（如 FineWeb/DCLM 细分域）的逐项 BPB 对照明细与全量超参表。（关联：[《Rewriting Scaling Laws for Synthetic Data with Compute and Data Constraints》](../../blogs/Rewriting%20Scaling%20Laws%20for%20Synthetic%20Data%20with%20Compute%20and%20Data%20Constraints.md)）

- [《Rewriting Scaling Laws for Synthetic Data with Compute and Data Constraints》](../../blogs/Rewriting%20Scaling%20Laws%20for%20Synthetic%20Data%20with%20Compute%20and%20Data%20Constraints.md)：已穿透核验 arXiv:2610.31867（2026-10-22，Nicholas Roberts、Ahmed Ahmed、Suhas Kotha、Percy Liang、Yu Wang、Alex Renda、Nitya Mani；Princeton / Stanford / Jane Street）。论文首次将生成合成改写数据的 FLOPs 显式计入总算力预算，联合参数规模 N、训练 token D、改写比例 R 与自然数据轮次预测验证损失：算力受限下最优改写比例随算力从 3e18 FLOPs 的不足 10% 升至 1e22 FLOPs 的 32%，外推 33 倍算力训练 22B 模型误差仅 1.1% 且仅耗改写器 1/10 训练算力即在多项网页域超越原改写器；数据受限下同规模自改写至 3B 仍优于纯自然数据基线。受沙箱限制未能直拉 PDF 全文（已登记 unavailable 与成本口径 not\_disclosed 缺口）。

## 2. 收录文章与一手材料（Ingested Articles & Primary Sources）

### [Rewriting Scaling Laws for Synthetic Data with Compute and Data Constraints](../../blogs/Rewriting%20Scaling%20Laws%20for%20Synthetic%20Data%20with%20Compute%20and%20Data%20Constraints.md)

2026-10-22 · 来源：arXiv:2610.31867 · Rewriting Scaling Laws · 状态：有来源缺口

[单篇导读（blogs/）](../../blogs/Rewriting%20Scaling%20Laws%20for%20Synthetic%20Data%20with%20Compute%20and%20Data%20Constraints.md) · [微信原件](../../../../raw/8570d4959f933bccde1e1b73c6c430d08f2c77a517b74ff89bc31b66a6ad83fc) · 固定版本 `digest-material-8570d4959f933bccde1e1b73c6c430d08f2c77a517b74ff89bc31b66a6ad83fc@1`

> 【信源巡检核心摘要】 Nicholas Roberts、Percy Liang 等人于 2026 年 10 月 22 日发表的研究，首次将生成合成改写数据的算力成本正式计入总训练算力预算，并提出联合建模模型规模、训练 token、改写比例与自然数据轮次的缩放律。

关联一手材料：

- Rewriting Scaling Laws for Synthetic Data with Compute and Data Constraints（Stanford University / arXiv）· [原站](https://arxiv.org/abs/2610.31867) · [本地原件](../../../../raw/aa85d70cf13bc39963cf356da635102b657623ad3c69c8c9fc25c491aec6eedd) · 版本 `digest-material-aa85d70cf13bc39963cf356da635102b657623ad3c69c8c9fc25c491aec6eedd@1`
  > ## Verified Abstract & Core Findings (via search\_web against arxiv.org/abs/2610.31867 & author/index summaries) 1. — 原文提取
