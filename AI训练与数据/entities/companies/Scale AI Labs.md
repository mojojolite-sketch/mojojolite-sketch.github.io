# Scale AI Labs

[返回主体档案库](../README.md) · [返回赛道总览](../../赛道总览.md) · [单篇导读索引](../../blogs/README.md)

- 主体类别：🏢 公司与产业主体 (Companies)
- 核心定位与说明：Scale AI 旗下前沿评测与领域安全研究机构（SEAL），联合顶尖医学院发布 CliniCARE-Bench（arXiv:2608.07796）等真实世界受控环境智能体评测基准。 Scale AI 官方 Hugging Face 组织账号。
- 关联账号与官方入口：
  - Hugging Face（ScaleAI (Hugging Face)）：[账号主页](https://huggingface.co/ScaleAI) · 登记对象 `digest-publisher-ab5ec3c3c0cebbf67d459ce1` — Scale AI 官方 Hugging Face 组织账号。
  - 机构官网（Scale AI Labs）：[机构／作者主页](https://labs.scale.com/) · 登记对象 `digest-publisher-11ab626d68d50461e40c8045` — Scale AI 旗下前沿评测与领域安全研究机构（SEAL），联合顶尖医学院发布 CliniCARE-Bench（arXiv:2608.07796）等真实世界受控环境智能体评测基准。

## 1. 核心研究问题与待核查争议（Questions & Open Debates）

### 🔍 待核查缺口与证据边界（Open Gaps）

- `not_disclosed`：ScaleAI/HSS 已将全部 522 道公开题目与 723 条原子评分细则全量开源于 Hugging Face，论文未披露单独隔离的私有留存测试集（private held-out split），无法直接观测各厂商后续合成数据微调是否存在题型过拟合。 [线索](https://huggingface.co/datasets/ScaleAI/HSS)（关联：[《Humanity's Sixth Sense (HSS): Benchmarking Intuitive Visual and Temporal Scene Reasoning in Multimodal Models (arXiv:2610.08966)》](../../blogs/Humanity%27s%20Sixth%20Sense%20%28HSS%29_%20Benchmarking%20Intuitive%20Visual%20and%20Temporal%20Scene%20Reasoning%20in%20Multimodal%20Models%20.md)）
- `not_disclosed`：Table 1 中各闭源商业 API 在 234 段长尾视频（中位 76 秒、最长 28 分钟）上实际生效的内部帧采样数与视觉 Token 压缩率未逐模型完全对齐披露，部分模型视频分大幅低于图像分混杂了 API 帧窗口配额限制。 [线索](https://arxiv.org/abs/2610.08966)（关联：[《Humanity's Sixth Sense (HSS): Benchmarking Intuitive Visual and Temporal Scene Reasoning in Multimodal Models (arXiv:2610.08966)》](../../blogs/Humanity%27s%20Sixth%20Sense%20%28HSS%29_%20Benchmarking%20Intuitive%20Visual%20and%20Temporal%20Scene%20Reasoning%20in%20Multimodal%20Models%20.md)）

- [《Humanity's Sixth Sense (HSS): Benchmarking Intuitive Visual and Temporal Scene Reasoning in Multimodal Models (arXiv:2610.08966)》](../../blogs/Humanity%27s%20Sixth%20Sense%20%28HSS%29_%20Benchmarking%20Intuitive%20Visual%20and%20Temporal%20Scene%20Reasoning%20in%20Multimodal%20Models%20.md)：核心结论：Scale AI（SEAL 实验室）联合原生视觉推理实验室 Elorian 与 UC Santa Cruz 发布 Humanity's Sixth Sense (HSS, arXiv:2610.08966)，从 3,466 道原始命题中以 15.1% 录取率严筛出 522 道开放式任务（288 图 + 234 段共 17.6 小时无声视频）及 723 条原子评分细则；实测 25 款前沿多模态模型中位数仅 30.9%、榜首 GPT-6-astra 单通仅 53.6%（远低于人类 93.1%），8,573 次失败中 94% 源于感知与潜空间推断失明而非逻辑不足，证明纯文本 CoT 扩展无法代偿底层视觉世界表征缺失。

## 2. 收录文章与一手材料（Ingested Articles & Primary Sources）

### [Humanity's Sixth Sense (HSS): Benchmarking Intuitive Visual and Temporal Scene Reasoning in Multimodal Models (arXiv:2610.08966)](../../blogs/Humanity%27s%20Sixth%20Sense%20%28HSS%29_%20Benchmarking%20Intuitive%20Visual%20and%20Temporal%20Scene%20Reasoning%20in%20Multimodal%20Models%20.md)

2026-10-14 · 来源：Scale AI SEAL × Elorian × UCSC (Guo et al.) · arXiv:2610.08966 · 状态：有来源缺口

[单篇导读（blogs/）](../../blogs/Humanity%27s%20Sixth%20Sense%20%28HSS%29_%20Benchmarking%20Intuitive%20Visual%20and%20Temporal%20Scene%20Reasoning%20in%20Multimodal%20Models%20.md) · [微信原件](../../../../raw/570606646688fb30e274946f14a66defe942430b647f37b8190e77ce69bf21f9) · 固定版本 `digest-material-570606646688fb30e274946f14a66defe942430b647f37b8190e77ce69bf21f9@1`

> 【信源巡检核心摘要】 Scale AI Labs 联合 Elorian 与 UC Santa Cruz 发布直觉视觉与时空推理基准 Humanity's Sixth Sense (HSS, https://arxiv.org/abs/2610.08966 ，开源评测集托管于 https://huggingface.co/ScaleAI )。

关联一手材料：

- Humanity's Sixth Sense (HSS): Benchmarking Intuitive Visual and Temporal Scene Reasoning in Multimodal Models (arXiv:2610.08966)（Scale AI SEAL × Elorian × UC Santa Cruz）· [原站](https://arxiv.org/abs/2610.08966) · [本地原件](../../../../raw/570606646688fb30e274946f14a66defe942430b647f37b8190e77ce69bf21f9) · 版本 `digest-material-570606646688fb30e274946f14a66defe942430b647f37b8190e77ce69bf21f9@1`
  > 【信源巡检核心摘要】 Scale AI Labs 联合 Elorian 与 UC Santa Cruz 发布直觉视觉与时空推理基准 Humanity's Sixth Sense (HSS, https://arxiv.org/abs/2610.08966 ，开源评测集托管于 https://huggingface.co/ScaleAI )。 — 原文提取
