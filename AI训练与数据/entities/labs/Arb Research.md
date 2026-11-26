# Arb Research

[返回主体档案库](../README.md) · [返回赛道总览](../../赛道总览.md) · [单篇导读索引](../../blogs/README.md)

- 主体类别：🏛️ 实验室、高校与机构平台 (Labs & Institutions)
- 核心定位与说明：独立机器学习泛化与 AI 评估研究机构（Gavin Leech、Tomáš Gavenčiak、Juan Vazquez 联合主导），arXiv:2602.12413 主要研究机构
- 关联账号与官方入口：
  - Official Site（Arb Research）：[机构／作者主页](https://arbresearch.com/) · 登记对象 `digest-publisher-ce9221e7395461e3476e196d` — 独立机器学习泛化与 AI 评估研究机构（Gavin Leech、Tomáš Gavenčiak、Juan Vazquez 联合主导），arXiv:2602.12413 主要研究机构

## 1. 核心研究问题与待核查争议（Questions & Open Debates）

### 🔍 待核查缺口与证据边界（Open Gaps）

- `not_disclosed`：闭源基准对比模型 Qwen3-8B-base 与 Qwen3.5-9B-base 的预训练与后训练语料未公开，无法直接审计其既有软污染基线；对 OLMo 3 预训练库（Dolma3\_6T-mix 6.0 TB 与 Dolmino-mix 250 GB）仅按 1% 分层采样嵌入且未覆盖 RL 环境生成的合成轨迹数据，所测 75.9%–100% 重复率为下界估计。 [线索](https://arxiv.org/abs/2602.12413)（关联：[《Soft Contamination Means Benchmarks Test Shallow Generalization》](../../blogs/Soft%20Contamination%20Means%20Benchmarks%20Test%20Shallow%20Generalization.md)）
- `pending_verification`：受控微调实验仅使用 LoRA（Rank 16）且控制基准存在量程与域偏差（TrueDetective 基准仅 28.3% 接近 24% 随机猜率；ARC-Challenge 属科学问答而非逻辑谜题），GitHub 仓库公开全套脚本但未附带 260 GB 语料向量与微调权重。 [线索](https://github.com/AriSpiesberger/Soft-Contamination-Prevelance)（关联：[《Soft Contamination Means Benchmarks Test Shallow Generalization》](../../blogs/Soft%20Contamination%20Means%20Benchmarks%20Test%20Shallow%20Generalization.md)）

- [《Soft Contamination Means Benchmarks Test Shallow Generalization》](../../blogs/Soft%20Contamination%20Means%20Benchmarks%20Test%20Shallow%20Generalization.md)：Arb Research（并列一作 Ari Spiesberger、Juan J. Vazquez；联合导师 Gavin Leech、Nandi Schoots \[University of Oxford\]，合作者 Nicky Pochinkov、Peli Grietzer、Tomáš Gavenčiak \[Charles University\]）发表 NeurIPS 2026 论文（arXiv:2602.12413，v1 2026-02-12，v2 2026-11-07；代码 MIT 开源于 AriSpiesberger/Soft-Contamination-Prevelance）。研究嵌入审计 OLMo 3 约 260 GB 语料（1% Dolma3/Dolmino + 100% Dolci3 SFT/DPO/RL），发现 CodeForces 75.9% 与 MBPP 100% 题目存在语义重复、ZebraLogic 存在 \>=49.5% 精确重复（OLMo 团队后续已修复）；常见 10–20-gram、MinHash 与 CodeBLEU 仅滤除 0.57%–10.87%。在 OLMo-3-7B、Qwen3-8B 与 Qwen3.5-9B 按万分之四自然密度混入语义重复可令 MuSR 保留分虚增 9.9–11.4 pp（受控组最高 +22 pp）且不迁移至弱对照基准（MBPP 向 HumanEval 除外，+11.7 pp）。

## 2. 收录文章与一手材料（Ingested Articles & Primary Sources）

### [Soft Contamination Means Benchmarks Test Shallow Generalization](../../blogs/Soft%20Contamination%20Means%20Benchmarks%20Test%20Shallow%20Generalization.md)

2026-02-12 · 来源：Arb Research (Spiesberger et al.) · arXiv:2602.12413 · 状态：有来源缺口

[单篇导读（blogs/）](../../blogs/Soft%20Contamination%20Means%20Benchmarks%20Test%20Shallow%20Generalization.md) · [微信原件](../../../../raw/e3358442675af2da4244bccc079df8b73f210be1114ef661b2268ad5b34d6311) · 固定版本 `digest-material-e3358442675af2da4244bccc079df8b73f210be1114ef661b2268ad5b34d6311@1`

> 【信源巡检核心摘要】 研究系统揭示传统 n-gram 去重无法拦截语义等价但字面改写的“软污染”（Soft Contamination）：对 OLMo 3 语料审计发现 CodeForces 存在 76%–78%、MBPP 存在 100% 语义重复，ZebraLogic 存在 50% 精确重复。

关联一手材料：

- Soft Contamination Means Benchmarks Test Shallow Generalization（Arb Research (Spiesberger et al.)）· [原站](https://arxiv.org/abs/2602.12413) · [本地原件](../../../../raw/e8a802ec719c8afc6ad5c4136796898d9be541a6a4a53d2803e54d2d2c72da54) · 版本 `digest-material-e8a802ec719c8afc6ad5c4136796898d9be541a6a4a53d2803e54d2d2c72da54@1`
  > Authors: Ari Spiesberger\* (Arb Research), Juan J. — 原文提取


## 3. 关联实体网络（Verified Entity Ontology）

- → Charles University · 合作 / 联合研发（rule_verified/verified）
- ← Juan J. Vazquez · 任职 / 隶属（rule_verified/verified）
- ← Peli Grietzer · 任职 / 隶属（rule_verified/verified）
- ← [Ari Spiesberger](../companies/Ari%20Spiesberger.md) · 任职 / 隶属（rule_verified/verified）
- ← Nicky Pochinkov · 任职 / 隶属（rule_verified/verified）
- ← Gavin Leech · 任职 / 隶属（rule_verified/verified）
- → University of Oxford · 合作 / 联合研发（rule_verified/verified）
