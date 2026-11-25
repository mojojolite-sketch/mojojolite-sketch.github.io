# Meta

[返回主体档案库](../README.md) · [返回赛道总览](../../赛道总览.md) · [单篇导读索引](../../blogs/README.md)

- 主体类别：🏢 公司与产业主体 (Companies)
- 核心定位与说明：Meta AI 部门与 Superintelligence Labs（由首席 AI 官 Alexandr Wang 与产品负责人 Nat Friedman 领衔），2026年8月推出 Muse Code 与 Muse Agent（超千万用户），11月收购 Conductor。
- 关联账号与官方入口：
  - Official Site（Meta）：[机构／作者主页](https://ai.meta.com/) · 登记对象 `digest-publisher-278254c1e0630e9d39c63c30` — Meta AI 部门与 Superintelligence Labs（由首席 AI 官 Alexandr Wang 与产品负责人 Nat Friedman 领衔），2026年8月推出 Muse Code 与 Muse Agent（超千万用户），11月收购 Conductor。

## 1. 核心研究问题与待核查争议（Questions & Open Debates）

### 🔍 待核查缺口与证据边界（Open Gaps）

- `unavailable`：受工作区沙箱出站限制，未能直拉 https://arxiv.org/pdf/2510.13786 原文 PDF；已通过检索交叉核验 Sigmoid 公式、40 万/10 万/5 万 GPU 小时实验规模、CISPO/FP32/PipelineRL 消融分工及全部作者机构，但各基准（如 AIME 24/25、LiveCodeBench）逐曲线准确率表格待离线补抓 PDF 复核。 [线索](https://arxiv.org/abs/2510.13786)（关联：[《The Art of Scaling Reinforcement Learning Compute for LLMs》](../../blogs/The%20Art%20of%20Scaling%20Reinforcement%20Learning%20Compute%20for%20LLMs.md)）
- `not_disclosed`：已检索到的一手摘要未披露 10 万 GPU 小时运行中采样推理集群与梯度训练集群的物理 GPU 配比、PipelineRL 在 17Bx16 MoE Expert Parallelism All-to-All 权重热更新下的网络带宽占用上限，以及千卡/万卡节点故障重算对有效 Goodput 的扣减细节。（关联：[《The Art of Scaling Reinforcement Learning Compute for LLMs》](../../blogs/The%20Art%20of%20Scaling%20Reinforcement%20Learning%20Compute%20for%20LLMs.md)）

- [《Google AI 基础设施负责深度访谈：10 万卡集群故障不断，Agent推高 CPU、存储和网络需求，2036年机架，TPU 8i/8t，轨道数据中心》](../../blogs/Google%20AI%20%E5%9F%BA%E7%A1%80%E8%AE%BE%E6%96%BD%E8%B4%9F%E8%B4%A3%E6%B7%B1%E5%BA%A6%E8%AE%BF%E8%B0%88%EF%BC%9A10%20%E4%B8%87%E5%8D%A1%E9%9B%86%E7%BE%A4%E6%95%85%E9%9A%9C%E4%B8%8D%E6%96%AD%EF%BC%8CAgent%E6%8E%A8%E9%AB%98%20CPU%E3%80%81%E5%AD%98%E5%82%A8%E5%92%8C%E7%BD%91%E7%BB%9C%E9%9C%80%E6%B1%82%EF%BC%8C2036%E5%B9%B4%E6%9C%BA%E6%9E%B6%EF%BC%8CTPU%208i_8t%EF%BC%8C%E8%BD%A8%E9%81%93%E6%95%B0%E6%8D%AE%E4%B8%AD%E5%BF%83.md)：本轮完成引用与归属分诊、可访问原件获取及摘录索引；来源未得与事实待核验分别保留，不视为完整行业研究结论。
- [《The Art of Scaling Reinforcement Learning Compute for LLMs》](../../blogs/The%20Art%20of%20Scaling%20Reinforcement%20Learning%20Compute%20for%20LLMs.md)：已穿透核验 arXiv:2510.13786（2025-10-15，ICLR 2026 Oral；Devvrit Khatri、Lovish Madaan、Rishabh Tiwari、Rachit Bansal、Sai Surya Duvvuri、Manzil Zaheer、Inderjit S. Dhillon、David Brandfonbrener、Rishabh Agarwal；UT Austin & Meta 等）。论文累计消耗超 40 万 GPU 小时建立 Sigmoid RL 计算缩放定律，并外推至 10 万 GPU 小时 8B 稠密模型与 5 万 GPU 小时 17Bx16 Llama-4-Scout MoE 单次运行。消融严格区分「决定渐近上限」与「调节算力效率」两类机制：CISPO 损失与 FP32 输出头精度、长生成上下文共同抬高上限，而 PipelineRL 异步流式更新、Prompt 级损失聚合、批级优势归一化、零方差 Prompt 过滤与 No-Positive-Resampling 课程主要压缩达成曲线所需算力成本。受沙箱限制未能直拉 PDF 全文（已登记 unavailable 与集群拓扑细节 not\_disclosed 缺口）。

## 2. 收录文章与一手材料（Ingested Articles & Primary Sources）

### [Google AI 基础设施负责深度访谈：10 万卡集群故障不断，Agent推高 CPU、存储和网络需求，2036年机架，TPU 8i/8t，轨道数据中心](../../blogs/Google%20AI%20%E5%9F%BA%E7%A1%80%E8%AE%BE%E6%96%BD%E8%B4%9F%E8%B4%A3%E6%B7%B1%E5%BA%A6%E8%AE%BF%E8%B0%88%EF%BC%9A10%20%E4%B8%87%E5%8D%A1%E9%9B%86%E7%BE%A4%E6%95%85%E9%9A%9C%E4%B8%8D%E6%96%AD%EF%BC%8CAgent%E6%8E%A8%E9%AB%98%20CPU%E3%80%81%E5%AD%98%E5%82%A8%E5%92%8C%E7%BD%91%E7%BB%9C%E9%9C%80%E6%B1%82%EF%BC%8C2036%E5%B9%B4%E6%9C%BA%E6%9E%B6%EF%BC%8CTPU%208i_8t%EF%BC%8C%E8%BD%A8%E9%81%93%E6%95%B0%E6%8D%AE%E4%B8%AD%E5%BF%83.md)

2026-10-31 · 来源：Amin Vahdat (Google) · Sequoia 访谈 · 状态：已整理

[单篇导读（blogs/）](../../blogs/Google%20AI%20%E5%9F%BA%E7%A1%80%E8%AE%BE%E6%96%BD%E8%B4%9F%E8%B4%A3%E6%B7%B1%E5%BA%A6%E8%AE%BF%E8%B0%88%EF%BC%9A10%20%E4%B8%87%E5%8D%A1%E9%9B%86%E7%BE%A4%E6%95%85%E9%9A%9C%E4%B8%8D%E6%96%AD%EF%BC%8CAgent%E6%8E%A8%E9%AB%98%20CPU%E3%80%81%E5%AD%98%E5%82%A8%E5%92%8C%E7%BD%91%E7%BB%9C%E9%9C%80%E6%B1%82%EF%BC%8C2036%E5%B9%B4%E6%9C%BA%E6%9E%B6%EF%BC%8CTPU%208i_8t%EF%BC%8C%E8%BD%A8%E9%81%93%E6%95%B0%E6%8D%AE%E4%B8%AD%E5%BF%83.md) · [微信原件](../../../../raw/bebd2b5d3c9a62deb8be80e7f5258dccf12de1a8e67a86d9b087f57d2e9e6ee3) · 固定版本 `digest-material-bebd2b5d3c9a62deb8be80e7f5258dccf12de1a8e67a86d9b087f57d2e9e6ee3@1`

> Amin Vahdat 是 Google Fellow、AI 基础设施首席技术官，工作覆盖定制芯片、数据中心、网络、供应链和运营。他此前负责 Google 计算、存储与网络软硬件基础设施，加入Google 前曾任加州大学圣迭戈分校计算机科学与工程教授。他拥有加州大学伯克利分校计算机科学博士学位，是 ACM Fellow，2023 年入选美国国家工程院，入选理由涉及数据中心和全球规模网络的设计与实现。

> 2036 年可能出现的数据中心形态：单柜功率达到数兆瓦，集中制造后运到现场，接上水、电和光纤就能运行。

关联一手材料：

- Meta Acquisition of Conductor (Melty Labs), Multi-Agent Sandbox Architecture (Git Worktree vs. Firecracker MicroVM), Meta Muse Isolation Vulnerabilities & Public/Private Virtualization Investment Dossier（Conductor (Melty Labs) · Nutanix / Cloudflare / Akamai / AMD / E2B / Modal 一手披露与本工作台核查档案）· [原站](https://conductor.build/) · [本地原件](../../../../raw/bebb215d4b2860668c5d05a7f83025efbf2f250fe2875be3420b749860326716) · 版本 `digest-material-bebb215d4b2860668c5d05a7f83025efbf2f250fe2875be3420b749860326716@1`
  > # Primary Source Dossier: Meta's Acquisition of Conductor (Melty Labs), Multi-Agent Sandbox Architecture (Git Worktree vs. — 原文提取

### [The Art of Scaling Reinforcement Learning Compute for LLMs](../../blogs/The%20Art%20of%20Scaling%20Reinforcement%20Learning%20Compute%20for%20LLMs.md)

2025-10-15 · 来源：arXiv:2510.13786 · The Art of Scaling Reinforcement · 状态：有来源缺口

[单篇导读（blogs/）](../../blogs/The%20Art%20of%20Scaling%20Reinforcement%20Learning%20Compute%20for%20LLMs.md) · [微信原件](../../../../raw/dac6bf1d5815041f29a42158638e66268ca9d7f2395600045528cd18782e5f68) · 固定版本 `digest-material-dac6bf1d5815041f29a42158638e66268ca9d7f2395600045528cd18782e5f68@1`

> 【信源巡检核心摘要】 ICLR 2026 论文基于超 40 万 GPU 小时的系统性 RL 实验，证明大语言模型 RL 计算缩放遵循可预测的 S 型曲线，可由小规模试验外推至 10 万 GPU 小时级单次运行。消融实验明确区分了两类因素的作用边界：损失目标（CISPO 优于 GRPO/DAPO）与 FP32 输出头数值精度直接决定性能渐近上限，而损失聚合、优势归一化、课程学习与异步离策略（如 PipelineRL）主要调节算力效率而非上限本身。

关联一手材料：

- The Art of Scaling Reinforcement Learning Compute for LLMs（UT Austin & Meta / arXiv (ICLR 2026)）· [原站](https://arxiv.org/abs/2510.13786) · [本地原件](../../../../raw/81912eff1aaa21366271677cf9d4ee6d670d22d878d3358e3c9620a6e589a8e1) · 版本 `digest-material-81912eff1aaa21366271677cf9d4ee6d670d22d878d3358e3c9620a6e589a8e1@1`
  > ## Verified Abstract & Core Findings (via search\_web against arxiv.org/abs/2510.13786 & iclr.cc/openreview) 1. — 原文提取


## 3. 关联实体网络（Verified Entity Ontology）

- → [Conductor (Melty Labs)](../companies/Conductor%20%28Melty%20Labs%29.md) · 2026-11-05 被并入 MSL / Muse Code (11.20 关停独立云) [2026-11-05..至今]（human_certified/verified）
- ← Wilson Yan · 任职 / 隶属 · Researcher (AI at Meta)（曾任） [已离任/曾任]（rule_verified/verified）
