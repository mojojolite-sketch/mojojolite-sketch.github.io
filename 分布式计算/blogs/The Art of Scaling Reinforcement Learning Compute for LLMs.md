---
title: "The Art of Scaling Reinforcement Learning Compute for LLMs"
type: blog_digest
sector: "分布式计算"
source: "arXiv:2510.13786 · The Art of Scaling Rei"
published_at: "2025-10-15"
raw_sha256: "dac6bf1d5815041f29a42158638e66268ca9d7f2395600045528cd18782e5f68"
material_version: "digest-material-dac6bf1d5815041f29a42158638e66268ca9d7f2395600045528cd18782e5f68@1"
origin_url: "https://arxiv.org/abs/2510.13786"
trigger_source: "arXiv / ICLR 2026 (Khatri et al.)"
trigger_url: "https://arxiv.org/abs/2510.13786"
user_comments: ""
status: "processed_with_gaps"
---

<a id="digest-dac6bf1d5815041f"></a>
# The Art of Scaling Reinforcement Learning Compute for LLMs

2025-10-15 · arXiv:2510.13786 · The Art of Scaling Rei · 有来源缺口

[本地原件归档](../../../raw/dac6bf1d5815041f29a42158638e66268ca9d7f2395600045528cd18782e5f68) · 固定材料版本 `digest-material-dac6bf1d5815041f29a42158638e66268ca9d7f2395600045528cd18782e5f68@1` · [一手原站](https://arxiv.org/abs/2510.13786)

## 深度拆解与复核

### 一、场景与利益披露及研究边界

- 论文全称：The Art of Scaling Reinforcement Learning Compute for LLMs（arXiv:2510.13786，2025-10-15 发布，入选 ICLR 2026）。
- 作者与机构核实：Devvrit Khatri（一作，UT Austin，研究完成于 Meta）、Lovish Madaan（Meta / UCL）、Rishabh Tiwari（UT Austin / UC Berkeley）、Rachit Bansal（Harvard / UT Austin / Meta）、Sai Surya Duvvuri（UT Austin / Google）、Manzil Zaheer（Google DeepMind / Meta FAIR）、Inderjit S. Dhillon（UT Austin / Google）、David Brandfonbrener（Meta）、Rishabh Agarwal（Periodic Labs / Meta）。
- 场景与利益披露：核心 40 万 GPU 小时级消融与 10 万 GPU 小时外推全部依托 Meta / Meta Superintelligence Labs 集群与 Llama 系列底座（含 8B 稠密与 17Bx16 Llama-4-Scout MoE）完成，存在一定内部架构与自研管线（ScaleRL）适配倾向；实验任务集中于数学/代码等可验证推理奖励（RLVR），结论不可无条件外推至非可验证长程开放智能体。

### 二、Sigmoid 缩放定律与两类工程杠杆的严格剥离

与预训练交叉熵损失遵循无界幂律不同，RL 后训练的准确率/通过率天然受限于 0 到 1 有界区间，因此 ScaleRL 采用四参数 Sigmoid 计算缩放曲线刻画计算预算 C 与期望奖励的关系：

  R_C - R_0 = (A - R_0) / (1 + (C_mid / C)^B)
  其中 A 为无限算力下的渐近性能上限，R_0 为基线初始分，C_mid 为取得一半增益的算力中点，B 为算力爬坡指数

基于 16,000–50,000 GPU 小时级小规模试跑拟合曲线后，作者成功预测并稳健跑通 10 万 GPU 小时（100,000 GPU-hours）8B 稠密模型与 50,000 GPU 小时 17Bx16 Llama-4-Scout MoE 单次长训。==论文最核心的工程贡献，是把「决定上限 A」与「仅改善效率 C_mid / B」彻底拆成两张互不混用的清单==：

| 设计维度 | 归属机制与具体做法 | 作用靶点与本工作台复核 |
| --- | --- | --- | --- |
| RL 损失目标：CISPO vs GRPO / DAPO | CISPO 对重要性采样权重截断并加 stop-gradient，避免 PPO/GRPO/DAPO 式硬比率裁剪把低概率探索 token 梯度彻底置零 | ✅ 决定渐近上限 A（复核成立）。早期爬坡相近的配方在万卡长训后期会出现显著天花板分化；低上限配方靠堆 40 万 GPU 小时也追不上高上限配方 |
| 输出头数值精度：FP32 Logits | 强制 LM 输出头 logits 保持 FP32 而非 BF16 混合精度 | ✅ 决定渐近上限 A（复核成立）。长链采样中 logits 微小舍入误差会在策略比值（importance ratio）指数项上逐轮放大，诱发策略漂移并压死上限 |
| 生成长度窗口（14k→32k tokens） | 放宽单条轨迹最大生成长度上限 | ✅ 抬高上限 A 但推高 C_mid。长思考初期算力转化慢，但足够算力到位后解锁更高解题上限 |
| PipelineRL 流式异步离策略 | 在线生成 rollout 与梯度训练流水线重叠，允许有限步数滞后（如 k=8 步）的在途权重热更新 | ✅ 主要调节效率（C_mid / 集群 Goodput），不压低上限 A（复核成立）。消除同步屏障导致的长尾气泡 |
| Prompt 级损失聚合、批级优势归一化、零方差 Prompt 过滤、No-Positive-Resampling 课程 | 对全对/全错零方差组直接缩批剔除；历史通过率 >=0.9 题永久移出重采样队列；批维度统一归一化优势 | ✅ 主要改善算力效率（加快爬坡、削减无效采样），但不直接抬高最终极限 A |

### 三、与本工作台【分布式计算】/【AI训练与数据】基础设施瓶颈的工程对账

本工作台核查认为，ScaleRL 把算法公式与集群基础设施账本直接打通，回应了本库三条已有主线问题：

1. 与 Amin Vahdat（Google）集群 Goodput 及 QwenGyre（arXiv:2609.33848）长程瓶颈对账：本工作台已记录 Google 10 万卡集群故障频发必须看 Goodput，且 QwenGyre 指出 61.1% 的超长程任务耗时 >=4 小时、38.2% 出现整体超时导致大量 GPU 空转气泡。PipelineRL 证明了一个关键系统事实：==只要把离策略滞后步数锁在可控边界（如 k=8）并配合 CISPO 与 FP32 输出头稳住梯度，异步流式架构几乎白捡回同步等待浪费的硬件利用率，而不会损伤模型最终天花板==。
2. 与 Akamai × Anthropic 算力占空比剪刀差及推理负载对账：本库 AWS CEO Matt Garman 访谈确认推理已占云端 AI 负载过半，而 Akamai 测算显示多并发 Agent 存在 GPU 毫秒级推理与 CPU 秒/分钟级沙盒验证的 1:20 占空比剪刀差。ScaleRL 把该矛盾映射进后训练内部：后训练算力大头早已不是反向传播，而是长链 rollout 生成与验证器反馈。零方差过滤与 No-Positive-Resampling 本质上是把最昂贵的推理采样槽位留给仍有信息熵的中间难度样本。
3. 算力资本开支（CapEx）反脆弱检验（本工作台推断）：在单次 RL 试验动辄消耗 10 万 GPU 小时（按市场 H100/B200 综合全口径租约 \$2–\$3/GPU·h 测算，单次运行即烧掉 \$20 万–\$30 万，整套 40 万 GPU 小时消融矩阵超 \$100 万）的体量下，盲目把万卡集群砸进 GRPO 低上限配方或保留 BF16 输出头，等同于在系统到达平坦饱和区后继续空烧电力与折旧；而 ==17Bx16 MoE 实测证明高激活稀疏架构与流式热更新（All-to-All 通信与权重同步叠加）才是后续分布式 RL 集群真正的互联压力点==。

⚠️ 边界核查提示：ScaleRL 实验中的单题推理步长虽已扩至 14k–32k tokens，但仍属于单轮数学/代码可验证任务（RLVR），与 QwenGyre 面对的数百轮、数小时工具沙盒交互（需 CPU/IO 状态回滚）在通信拓扑与滞后容忍度上存在数量级差异，PipelineRL 在分钟级或小时级外置沙盒长尾下能否守住 k 步滞后上限尚待实测。

### 观点与可反驳条件

- ==观点==：千卡至万卡级 RL 后训练的资本效率取决于先用 <=16,000–50,000 GPU 小时标定 Sigmoid 上限 A，再用 CISPO + FP32 输出头保住上限、用 PipelineRL 与课程过滤把集群 Goodput 榨干；把低上限配方直接放大到 10 万 GPU 小时无法买到性能突破。
- ==推翻条件==：① 在公开可复现实验（>=50,000 GPU 小时）中，若启用 FP32 输出头与相同课程过滤后的 GRPO/DAPO 能追平 CISPO 的渐近上限 A（差距 <0.5 个百分点），则说明上限分化主要源于工程实现而非损失目标本身；② 在 17Bx16 及更大规模 MoE 或数百轮长程沙盒任务下，若 PipelineRL 为追平权重同步延迟导致的通信开销或过时策略分布偏移使实际端到端 Wall-clock 加速比跌破 1.15 倍或引发训练发散，则异步流式架构需退回同步分批；③ 若超过 100,000 GPU 小时后验证指标出现脱离 Sigmoid 饱和区的二次阶跃（如突破 2.0 个百分点以上），则四参数 Sigmoid 拟合不可再用于万卡超大规模 RL 预算封顶预测。

---

## 原文摘录与一手信源存证

> 【信源巡检核心摘要】 ICLR 2026 论文基于超 40 万 GPU 小时的系统性 RL 实验，证明大语言模型 RL 计算缩放遵循可预测的 S 型曲线，可由小规模试验外推至 10 万 GPU 小时级单次运行。消融实验明确区分了两类因素的作用边界：损失目标（CISPO 优于 GRPO/DAPO）与 FP32 输出头数值精度直接决定性能渐近上限，而损失聚合、优势归一化、课程学习与异步离策略（如 PipelineRL）主要调节算力效率而非上限本身。
> — 原文摘录，文字段落 1；证据 `digest-material-dac6bf1d5815041f29a42158638e66268ca9d7f2395600045528cd18782e5f68-excerpt-1@1`

一手材料：

- The Art of Scaling Reinforcement Learning Compute for LLMs · UT Austin & Meta / arXiv (ICLR 2026) · [原站](https://arxiv.org/abs/2510.13786) · [主体档案：Meta](../entities/companies/Meta.md) / [主体档案：Devvrit Khatri](../entities/people/Devvrit%20Khatri.md) · [本地原件](../../../raw/81912eff1aaa21366271677cf9d4ee6d670d22d878d3358e3c9620a6e589a8e1)
  材料版本 `digest-material-81912eff1aaa21366271677cf9d4ee6d670d22d878d3358e3c9620a6e589a8e1@1`；获取方式 `web_search_verified_primary`。
  > ## Verified Abstract & Core Findings (via search\_web against arxiv.org/abs/2510.13786 & iclr.cc/openreview) 1. — 原文提取
  > ## Capture Limitations - Workspace sandbox restricts direct outbound HTTP/PDF download from arxiv.org; full-text PDF per-ablation exact AIME/LiveCodeBench pass-rate tables and exact hardware cluster interconnect specs could not be fetched directly and are registered as unavailable/not\_disclosed gaps pending offline PDF ingestion. — 原文提取

归属与范围：已穿透核验 arXiv:2510.13786（2025-10-15，ICLR 2026 Oral；Devvrit Khatri、Lovish Madaan、Rishabh Tiwari、Rachit Bansal、Sai Surya Duvvuri、Manzil Zaheer、Inderjit S. Dhillon、David Brandfonbrener、Rishabh Agarwal；UT Austin & Meta 等）。论文累计消耗超 40 万 GPU 小时建立 Sigmoid RL 计算缩放定律，并外推至 10 万 GPU 小时 8B 稠密模型与 5 万 GPU 小时 17Bx16 Llama-4-Scout MoE 单次运行。消融严格区分「决定渐近上限」与「调节算力效率」两类机制：CISPO 损失与 FP32 输出头精度、长生成上下文共同抬高上限，而 PipelineRL 异步流式更新、Prompt 级损失聚合、批级优势归一化、零方差 Prompt 过滤与 No-Positive-Resampling 课程主要压缩达成曲线所需算力成本。受沙箱限制未能直拉 PDF 全文（已登记 unavailable 与集群拓扑细节 not\_disclosed 缺口）。

来源缺口：

- `unavailable`：受工作区沙箱出站限制，未能直拉 https://arxiv.org/pdf/2510.13786 原文 PDF；已通过检索交叉核验 Sigmoid 公式、40 万/10 万/5 万 GPU 小时实验规模、CISPO/FP32/PipelineRL 消融分工及全部作者机构，但各基准（如 AIME 24/25、LiveCodeBench）逐曲线准确率表格待离线补抓 PDF 复核。 [线索](https://arxiv.org/abs/2510.13786)
- `not_disclosed`：已检索到的一手摘要未披露 10 万 GPU 小时运行中采样推理集群与梯度训练集群的物理 GPU 配比、PipelineRL 在 17Bx16 MoE Expert Parallelism All-to-All 权重热更新下的网络带宽占用上限，以及千卡/万卡节点故障重算对有效 Goodput 的扣减细节。

[返回赛道总览](../赛道总览.md#digest-dac6bf1d5815041f) · [返回导读索引](README.md) · [主体档案库](../entities/README.md)
