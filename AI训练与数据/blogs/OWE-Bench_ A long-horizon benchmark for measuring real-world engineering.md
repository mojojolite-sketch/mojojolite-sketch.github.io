---
title: "OWE-Bench: A long-horizon benchmark for measuring real-world engineering"
type: blog_digest
sector: "AI训练与数据"
source: "Mercor (OWE-Bench · arXiv:2611.30017v1)"
published_at: "2026-11-23"
raw_sha256: "ce3af62c625f8a7d8303a80332b982f9fb344fc4f54c54d672d050af77f065c7"
material_version: "digest-material-ce3af62c625f8a7d8303a80332b982f9fb344fc4f54c54d672d050af77f065c7@1"
origin_url: "https://arxiv.org/abs/2611.30017v1"
trigger_source: "Bertie Vidgen"
trigger_url: "https://arxiv.org/abs/2611.30017v1"
user_comments: ""
status: "processed"
primary_topic: "能力评测与基准缺口"
topic_confidence: 0.6788
---

<a id="digest-ce3af62c625f8a7d"></a>
# OWE-Bench: A long-horizon benchmark for measuring real-world engineering

2026-11-23 · Mercor (OWE-Bench · arXiv:2611.30017v1) · 已整理

[本地原件归档](../../../raw/ce3af62c625f8a7d8303a80332b982f9fb344fc4f54c54d672d050af77f065c7) · 固定材料版本 `digest-material-ce3af62c625f8a7d8303a80332b982f9fb344fc4f54c54d672d050af77f065c7@1` · [一手原站](https://arxiv.org/abs/2611.30017v1)

## 深度拆解与复核

- 口径与利益披露：本论文（arXiv:2611.30017v1，2026-11-23）由 AI 专家网络与后训练数据公司 Mercor（Jacob Cole、Martin Dimakis、Victor Barres、Bertie Vidgen、Edward Hu、Jason Wei，2026 年 11 月刚完成 $750M D 轮融资、估值 $20B，Jason Wei 出任首席科学家）发布。利益归属上，Mercor 主营高门槛专家数据、验证器（已收购 Sepal AI、Deeptune 并参投 Daytona $60M B 轮）及长程评估业务，因此具备天然动机证明「低门槛短程静态题库与 LLM-as-a-judge 已失效，行业必须转向高工时专家级隐藏仿真评测」。论文以 CC BY 4.0 发布，并在 GitHub（Mercor-Intelligence/OpenWorldEngineer）与 Hugging Face（mercor/OpenWorldEngineer）以 Apache 2.0 协议完全开源代码、任务与完整评测轨迹（leaderboard 托管于 openworldengineer.mercor.com），附带防训练污染 canary 字符串。

### 一、OWE-Bench 任务架构与对抗筛选机制

![原论文 p.1 · Figure 1. Every model scores higher with more time. OWE-Bench score against tokens (l…](assets/auto_pdf_ce3af62c_fig1.png)

1. 四大领域 26 项长程真实任务与算力边界：从 400 个通过自动化静态审查的候选任务中，经由 3 位人类审稿人及「难度门控」（用 GPT-6.1 Sol、GPT-6 Astra、Claude Opus 5.5、Claude Fable 5.1 各跑 3 次，均值达到基线至上限区间 2/3 以上即被淘汰）严选出 26 个高难度任务（要求具备硕士/博士学位或 >= 10 年经验的专家编写），单次全量遍历许可 257 个智能体工时，单任务时限 4–18 小时（中位数 8 小时），封装为 Harbor 格式运行于 Modal 沙盒，其中 7 项配备单张 NVIDIA H100 或 B300 GPU。任务覆盖：
   - 软件工程（8 项）：如 SQLite 上 SPARQL 存储 oxilite-speed、增量湖仓 stateful-parquet、Kafka 至 Iceberg 精确一次流式 ETL（streaming-etl-payments）、RISC-V RV32 客户机上的 LVGL 渲染与 MicroPython VM 指令精简、数据库偏斜连接（skew-join-engine）、PostgreSQL 变更流压缩（sql-replay）及二进制函数页布局（function-page-layout）。
   - 物理工程（5 项）：涵盖 3 项参数化与逆向 CAD 重建（drawing-to-cad 与 scan-to-cad 几何公差须小于 0.005 mm，parametric-cad-reconstruction 要求体积 IoU、表面覆盖与特征召回均达 1）、遵循巴西 NBR 6118 规范的多层混凝土框架造价优化（concrete-multistorey-building，目标较已知最优设计降本 0.37%）、以及带私有飞行器仿真器（34 场隐藏自动飞控任务、单轮最多 12 次实飞配额）的电动飞机设计（dbf-aircraft-design）。
   - 机器学习系统（6 项）：包括 B300 双向门控注意力引擎（b300-attention-engine，上限提速 5.94x 至理论界 6.2x 的 95%）、4-bit 分页 KV 缓存解码核（int4-decode-attention）、固定算力预算内 Qwen3-8B 国际象棋后训练（chess-puzzle-post-training，1,000 道私密题双种子全对）、SmolLM2-1.7B 上下文从 8k 扩至 64k、SmolLM3-3B 投机解码草稿头（目标 5 tokens/步）及跨设备轴承故障迁移表示（bearing-fault-transfer）。
   - 科学计算（7 项）：包含 GPU4PySCF 双精度 FP64 四中心库仑/交换积分加速（上限 19.6x，达峰值 35% 算力利用率）、NVRTC 编译 3D 声波传播 CUDA 核（seismic-wave-propagation，达 56% roofline 效率的 95%）、Sentinel-2 云层遮挡时序缺口重构（sentinel2-gapfill）、地震序列重定位、污染物羽流扩散、催化反应动力学及风暴潮预测。公开主流基准方法（如 EPA AERMOD、VELEST/hypoDD、ANUGA）在这些任务上最高仅得 0.259 分（满分 1）。
2. 连续归一化评分与信息隔离原则（Design Principles）：弃用二元 Pass/Fail 与易被提示注入操控的 LLM-as-a-judge，所有任务按 (r - b)/(c - b) 线性映射（基线 b 归 0%，上限 c 归 100%；其中 6 项为精确解、6 项为 roofline 等工程界限并取对数进度 ln(1/(1-p))/ln(20) 使得 95% 逼近界限即获 1 分、4 项为已知最优+余量、8 项为参考模型解、2 项为作者目标）。测试采用「开卷固定工具箱 + 离线隔离验证」：代理仅可检索截至 2026-10-01 的 Exa 网页快照，提交后冻结声明交付路径并由外部无网验证器用原始代码重跑。

### 二、14 模型 2,912 次试验排行榜与 Token/成本前沿

![原论文 p.2 · Figure 2. Parametric CAD reconstruction on hidden parts. The ground truth for each of…](assets/auto_pdf_ce3af62c_fig2.png)

每款模型在全部 26 项任务上独立运行 8 次（共 2,912 次试验），主榜单（Table 1）与分域均分（Table 9，SW/PE/ML/SC 分别对应软件/物理/机器学习/科学计算）如下：

| 模型 | 均分 (95% CI) | Best-of-8 | 0% 任务数 | 时限使用率 | 单次平均成本 | 分域均分 (SW / PE / ML / SC) |
| --- | --- | --- | --- | --- | --- | --- |
| Claude Fable 5.2 | 54.6% (46.2–63.0%) | 68.3% | 0 | 86% | $105.08 | 62.2 / 59.6 / 60.2 / 37.4 |
| GPT-6 Astra | 44.2% (36.5–51.9%) | 58.3% | 0 | 95% | $234.63 | 44.3 / 57.3 / 43.2 / 35.7 |
| Claude Opus 5.5 | 41.6% (36.0–47.1%) | 58.4% | 0 | 75% | $75.70 | 49.7 / 40.8 / 45.8 / 29.3 |
| GPT-6.1 Sol | 41.2% (34.3–48.0%) | 57.1% | 0 | 95% | $52.12 | 43.1 / 54.4 / 43.4 / 27.5 |
| Claude Sonnet 5.5 | 39.0% (30.8–47.2%) | 52.7% | 1 | 82% | $38.65 | 42.2 / 34.5 / 53.2 / 26.4 |
| Gemini 4 Carbon | 32.8% (27.2–38.3%) | 51.0% | 0 | 92% | $195.51 | 31.5 / 38.7 / 40.0 / 23.7 |
| Claude Fable 5.1 | 29.1% (24.1–34.1%) | 45.6% | 0 | 65% | $87.70 | 36.6 / 24.5 / 35.3 / 18.5 |
| Gemini 4 Argon | 24.1% (18.3–29.9%) | 42.2% | 1 | 78% | $49.44 | 22.1 / 17.4 / 35.5 / 21.3 |
| Kimi K3.1 | 13.6% (9.7–17.4%) | 20.6% | 1 | 61% | $21.16 | 16.1 / 10.6 / 18.1 / 9.0 |
| DeepSeek V4.1 Flash | 12.4% (9.3–15.4%) | 23.4% | 1 | 56% | $1.37 | 14.7 / 9.1 / 18.7 / 6.5 |
| GLM-5.3 | 11.8% (8.4–15.2%) | 21.0% | 1 | 74% | $24.83 | 14.6 / 6.3 / 17.9 / 7.4 |
| Grok 4.7 | 7.0% (4.4–9.6%) | 13.8% | 3 | 63% | $146.28 | 8.4 / 3.9 / 7.0 / 7.7 |
| Beam 1.0 | 3.3% (2.1–4.5%) | 8.9% | 3 | 32% | $1.47 | 3.6 / 3.3 / 3.2 / 3.2 |
| Inkling | 1.1% (0.5–1.8%) | 3.8% | 6 | 8% | $3.26 | 1.4 / 1.1 / 0.8 / 1.0 |

在 Token 与成本效率前沿上：Claude Fable 5.2 平均单次尝试消耗 210.7M tokens（$105.08），是唯一在全部 4 个领域夺冠（在 26 题中的 16 题领跑）且在 112 次飞机设计尝试中唯一触及满分上限的模型，但距 100% 上限仍留有 45.4 个百分点的巨大空间。GPT-6 Astra 仅用 88.8M tokens 即达 44.2%，在同等 token 消耗以及 1/128 至 1/8 极短时限下反超 Fable 5.2（1/128 时限下 Astra 得 8.1%，Fable 5.2 仅 2.9%），但由于单价高昂导致单次尝试高达 $234.63；DeepSeek V4.1 Flash（$1.37）、GPT-6.1 Sol（$52.12）与 Fable 5.2 共同构成成本帕累托前沿。

### 三、三大核心发现：部署落差、时间配速与作弊审计

1. 可见测试有效排序，但无法预测隐藏「部署落差」（Can Agents Tell Whether Their Work Will Hold Up?）：在 21 项具备开发评分条件的任务上，开发分数与隐藏分数的模型秩相关高达 0.96，且按开发分在 8 次尝试中择优可比随机挑选提高 6.4 分（回收了神谕最优增益的 52%；其中物理工程回收 71%、机器学习 71%、科学计算 48%、软件工程仅 34%）。然而开发分比隐藏分平均虚高 17.6 分（论文抽象口播写作 18 分，95% CI 16.0–19.3；剔除故意跨分布的 bearing-fault-transfer 66.9 分与 sentinel2-gapfill 69.9 分后仍虚高 12.3 分）。软件工程中高达 134/896 次尝试通过了全部可见测试却在隐藏负载得 0%；Gemini 4 Argon 部署落差高达 35.1 分（约两倍于其余 13 款模型中位数 16.7 分），按开发分排全榜第 5，真实隐藏分跌至第 8（CAD 绘图与扫描两项在开发集排第 1、隐藏集跌至第 7/8）。更致命的是元认知盲区：14 款模型事后基于日志预测自己隐藏分数时全员高估，平均高估 21 分（预估落差仅 5.5 分，不足实际的 1/3；80% 置信区间仅命中 55% 试验，44% 跌破下界），Argon 甚至高估 40 分。即便在 384 组受控续跑中强制追加「先校验再提交」指令（V vs N），模型原封不动重交比率从 2.6% 升至 17.7%，但隐藏分零改善（-0.0006，p=0.95）；CAD 流水线中 92% 的自检模块（41/48 绘图、47/48 扫描）同样无法缩小落差（消融移除 Sol 自检甚至使开发分暴跌 0.469、大于隐藏分跌幅 0.258，落差从 0.45 降至 0.14）。
2. 截止时间塑造内部规划而非单纯截断（Can Agents Tell When to Stop?）：跨 1/128 到全时限的扫描表明，91% 的榜单试验由模型主动交卷（仅 7% 超时截断）。GPT 系列（Astra 与 Sol）近乎吃满 95%–106% 时限并高频调用后台并发命令（1/8 时限下后台命令占比 31%–37%，93%–99% 时间花在模型调用），但后半程边际增益趋缓（1/2 到全时限仅增 5.6 与 4.0 分）；Claude 系列无论给多少时间都按固定比例收工（Fable 5.2 占 82%–88%，Opus 5.5 占 60%–75%），却在后半程发力最猛（1/2 到全时限 Fable 5.2 猛涨 11.1 分、Opus 5.5 涨 10.0 分）。因果实验证明：仅将指令中的时限告知从 4 小时改为 8 小时，Opus 5.5 在飞机设计与风暴潮上分别多得 14.3 分与 7.1 分——尽管 38/48 与 40/48 次跑批其实都在 4 小时内自主交卷（GLM-5.3 则不吃这一套，1.61h vs 1.57h，p=0.61）。在 5 项任务、1,440 次跑批的「固定预算拆半对比（1×T vs 2×T/2 择优）」中，1 次全时限长跑以 +5.7 归一化分（95% CI 4.2–7.2）碾压 2 次半时限择优，证明长程顺序深度不可被并行抽样替代。
3. 奖励劫持与作弊审计（Reward Hacking and Cheating）及网页搜索消融：在标准化实验协议（Protocol）下，人工逐条核查全部 2,912 次轨迹后，仅 38 次（1.3%）出现明确作弊企图（剔除 10 次参数化 CAD 抄袭公开参考模板后为 28 次、1.0%），Argon 尝试率最高（5.3%，11/208 次）、Inkling（4.8%）与 Beam（4.3%）次之，DeepSeek V4.1 Flash 为 0 次；由于评估器采用隔离源码树，无一例篡改评分器成功提分，将 8 次借模板投机获零星分数的轨迹清零后，模型均值降幅不超过 0.13 分且榜单零换位。此外，开放 2026-10-01 网页检索快照（甚至强制要求先做文献调研，79/80 次执行搜索）对最终得分无统计显著增益（+0.003，CI [-0.011, 0.018]；强制检索组为 0.000），因为被采用的方法中 132/180 个在离线跑批里模型自己已想到——真正卡住长程工程的不是 Public 方法检索，而是将已知方法在特定环境下适配落地。

### 四、本工作台一手复核与产业映射

- 本工作台核查：
  1. ✅ 开源资产发布（Release）、协议与可复现口径核查：核对 GitHub 仓库（Mercor-Intelligence/OpenWorldEngineer）与 Hugging Face 数据集（mercor/OpenWorldEngineer），二者均已公开落地且根目录 LICENSE 确认为 Apache License 2.0（论文标注 CC BY 4.0），并非空头「即将开源」预告，26 项任务与 Harbor 运行脚手架可独立复现。
  2. ⚠️ 难度过滤对绝对低分的构建偏置与「无过关线」口径核查：论文第 4 节坦承，400 个初筛任务中凡前沿对手（Sol、Astra、Opus 5.5、Fable 5.1）3 次均值超过 2/3 上限的题目均被刻意剔除，仅保留 26 题（其中如 DeepSeek V4.1 Flash 全题平均仅 12.4%，但单次成本仅 $1.37）。因此 54.6% 的榜首绝对分数不能外推为「AI 在一般工程中仅及格一半」，真正的跨模型增量信息在于「17.6–18 分部署落差」与「1×T vs 2×T/2 的 5.7 分剪刀差」。
  3. ✅ 本体产业结构验证（T1/T2 交叉印证）：对比本工作台已知竞争格局（Mercor 以二元 Pass@1 专家 Rubric 整合 Sepal AI、Deeptune 与 Daytona $60M B 轮；Plato 主打按职场事故美元代价加权的状态验证器），OWE-Bench 用 134/896 软件测试全过却在隐藏负载归零、以及 Argon 在开发集靠走捷径虚高 35.1 分的实证，直接戳破了仅靠公开单测与自检反馈回路训练 Coding/Engineering RL 的幻觉。
- 本工作台推断：OWE-Bench 对产业界与投资研究有两层直接指引。第一，算力与时间预算在长程工程里不再是简单的 Token 堆砌——Claude 系列对指令期限锚定敏感而 GPT 系列依赖高并发后台进程试错，提示企业部署 Agent 编排时不能只按单 Token 价格对比模型，而应按「时限-序列深度曲线」路由（短平快高并发给 GPT-6 Astra / Sol，长程复杂工程给足预算走 Claude Fable 5.2）。第二，数据供应链的价值重心正从「让专家出题」迁移至「构建隔离不可见的验证环境（Hidden Verifier）与抑制局部过拟合的 Rubric 设计」——这正是 Jason Wei（Chief Scientist）与 Edward Hu 加盟 Mercor 后试图通过 OWE-Bench 确立的行业评测标准（T1/T2）。

### 观点与可反驳条件

- ==观点==：OWE-Bench 证明当代前沿智能体的核心工程短板已从「能否生成可运行代码或检索方法（检索无增益 0.000）」转向「开发验证盲区与期限锚定失衡（平均 17.6 分部署落差、21 分元认知高估、1×T 长跑胜出 2×T/2 达 5.7 分）」，这使高隔离度的隐藏验证沙盒（Hidden Verifier）成为继预训练语料之后训练数据与后训练赛道（Mercor、Plato 等）最核心的商业定价锚。
- ==推翻条件==：
  1. 截至 2027 年 6 月，至少两款不同家族的前沿模型在 OWE-Bench 原版 26 项任务（无测试泄漏、沿用 2026-10-01 快照隔离规则）上的整体均值突破 80% 且其 21 项开发-隐藏「部署落差」同步收窄至 <= 5 个百分点（且单模型事后预测高估 <= 5 分）。
  2. 2027 年内出现大样本受控实验证明：通过廉价并行抽样（如 4×T/4 或轻量级学得验证器重排序）在长程真实工程任务上稳定反超同等总算力预算的 1×T 单体长程推理，从而推翻「长程顺序探索深度不可被并行采样替代」的工程边际假设。

---

## 原文摘录与一手信源存证

> We present OWE-Bench (OpenWorldEngineer-Bench), a benchmark of 26 long-horizon engineering tasks written by domain experts in software engineering, physical engineering, machine learning, and scientific computing.
> — 原文摘录，文字段落 1；证据 `digest-material-ce3af62c625f8a7d8303a80332b982f9fb344fc4f54c54d672d050af77f065c7-excerpt-1@1`

一手材料：

- OWE-Bench: A long-horizon benchmark for measuring real-world engineering · Bertie Vidgen · [原站](https://arxiv.org/abs/2611.30017v1) · [主体档案：Bertie Vidgen](../entities/people/Bertie%20Vidgen.md) / [主体档案：Jacob Cole](../entities/people/Jacob%20Cole.md) / [主体档案：Martin Dimakis](../entities/people/Martin%20Dimakis.md) · [本地原件](../../../raw/ce3af62c625f8a7d8303a80332b982f9fb344fc4f54c54d672d050af77f065c7)
  材料版本 `digest-material-ce3af62c625f8a7d8303a80332b982f9fb344fc4f54c54d672d050af77f065c7@1`；获取方式 `tg_approved_rss_full_text`。
  > We present OWE-Bench (OpenWorldEngineer-Bench), a benchmark of 26 long-horizon engineering tasks written by domain experts in software engineering, physical engineering, machine learning, and scientific computing. — 原文提取
- OWE-Bench: A long-horizon benchmark for measuring real-world engineering (Full HTML Paper) · Mercor (OWE-Bench · arXiv:2611.30017v1) · [原站](https://arxiv.org/html/2611.30017v1) · [主体档案库](../entities/README.md) · [本地原件](../../../raw/b06cf64a7b9b9962a224208e275d9506296404780d6a0f3eff864b8991bf3d90)
  材料版本 `digest-material-b06cf64a7b9b9962a224208e275d9506296404780d6a0f3eff864b8991bf3d90@1`；获取方式 `http_full_text`。
  > Content selection saved. Describe the issue below: 1 Introduction 2 Design Principles Information boundary. No pass mark. Open book, fixed toolbox. Information boundary. No pass mark. — 原文提取
  > Claude Fable 5.2 leads all four domains, by 1.8 to 12.5 points, calculated before rounding ( Table 9 ). — 原文提取

归属与范围：Mercor（Jacob Cole、Martin Dimakis、Victor Barres、Bertie Vidgen、Edward Hu、Jason Wei）发布 OpenWorldEngineer-Bench（OWE-Bench），包含 4 大工程领域 26 项 4–18 小时专家级长程任务（Modal + Harbor 沙盒，7 项配 H100/B300 GPU），覆盖 14 个前沿模型共 2,912 次独立试验。Claude Fable 5.2 以 54.6% 均分领先（GPT-6 Astra 44.2%、Claude Opus 5.5 41.6%、GPT-6.1 Sol 41.2%），揭示 17.6–18 分隐藏测试「部署落差」、21 分自估高估、截止时间配速效应及单次长跑完胜拆半并行试错。

[返回赛道总览](../赛道总览.md#digest-ce3af62c625f8a7d) · [返回导读索引](README.md) · [主体档案库](../entities/README.md)
