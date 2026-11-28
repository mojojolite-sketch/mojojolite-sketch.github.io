---
title: "Introducing OWE-Bench for Long-Horizon Engineering Projects"
type: blog_digest
sector: "AI训练与数据"
source: "Mercor (OpenWorldEngineer / OWE-Bench)"
published_at: "2026-11-12"
raw_sha256: "f7eb76ac04a0872aedcb053f5d6920b9dddf5d77a79bfdbe50da8c4566ec8b56"
material_version: "digest-material-f7eb76ac04a0872aedcb053f5d6920b9dddf5d77a79bfdbe50da8c4566ec8b56@1"
origin_url: "https://www.mercor.com/blog/introducing-owe-bench/"
trigger_source: "Mercor"
trigger_url: "https://www.mercor.com/blog/introducing-owe-bench/"
user_comments: ""
status: "processed_with_gaps"
primary_topic: "能力评测与基准缺口"
topic_confidence: 0.7258
---

<a id="digest-f7eb76ac04a0872a"></a>
# Introducing OWE-Bench for Long-Horizon Engineering Projects

2026-11-12 · Mercor (OpenWorldEngineer / OWE-Bench) · 有来源缺口

[本地原件归档](../../../raw/f7eb76ac04a0872aedcb053f5d6920b9dddf5d77a79bfdbe50da8c4566ec8b56) · 固定材料版本 `digest-material-f7eb76ac04a0872aedcb053f5d6920b9dddf5d77a79bfdbe50da8c4566ec8b56@1` · [一手原站](https://www.mercor.com/blog/introducing-owe-bench/)

## 深度拆解与复核

口径与利益披露：本篇为 Mercor Code Data 与 Research 团队（Jacob Cole、Cindy Yang、Aravind Selvan、Daniel Babalola、Bertie Vidgen，致谢 Chirag Mahapatra、Victor Barres、Brad Johnson、Harish Shankar）于 2026-11-12 发布的官方工程博客，对应 2026-11-23 挂网的同名学术论文 arXiv:2611.30017v1（本工作台已于同赛道收录，见 [OWE-Bench 论文导读](OWE-Bench_%20A%20long-horizon%20benchmark%20for%20measuring%20real-world%20engineering.md)）。商业激励上，Mercor 于 2026 年 11 月完成 7.5 亿美元 D 轮融资（投后估值 200 亿美元，NVIDIA、General Catalyst、Benchmark、Felicis 参投），并连续收购 Sepal AI 与 Deeptune、参投 Daytona 6,000 万美元 B 轮；该公司出售高门槛领域专家标注、交互式 RL 沙盒与连续评测环境，因此有明确动机证明静态多选基准已失效、行业必须采购具备隐藏验证器（Hidden Verifier）的长程仿真任务（直接对齐本赛道研究锚点 T1 与 T2）。

### 一、开放世界任务设计：26 项长程工程、连续评分与沙盒隔离

1. 双形态任务结构与硬件配额：针对 AI 在真实开放工程中需要查文献、核对规范与改写开源代码的特征，OWE-Bench 放弃了自包含短题，将 26 项专家实务任务拆为两类：脚手架优化类（Scaffolded tasks，从可运行代码库出发推进可量化指标如算子速度、延迟或误差）与端到端构建类（End-to-end tasks，在裸环境中交付完整训练模型、数据管线或机械设计）。单次尝试限时 4 至 18 小时（中位数 8 小时），全集单轮累计 257 个智能体工时，匹配 CPU 沙盒或 NVIDIA H100 / B300 GPU（其中 7 项任务调用 GPU）。
2. 四大领域分布与代表任务：2026-11-12 博客披露 26 项任务的初始分域为软件工程 8 项（如带故障注入告警的 Kafka 至 Iceberg 精确一次流式支付 ETL、数据库与解释器优化）、物理工程 5 项（如 CAD 重建、结构设计与参数化 Design/Build/Fly 电动飞机——在 3 个任务剖面共 34 场隐藏自动飞行测试中评分）、机器学习 7 项（如 GPU 算子与基于计费训练服务微调 Qwen3-8B 下国际象棋战术并在 1,000 道私密棋局上评估）、科学计算 6 项（如基于实测地震波形重定位地震序列及化学/地球科学建模）。每项任务均由领域专家编写提案并经 3 名人类审稿人及自动化静态检查、LM-assisted 评分标准（rubric）审查与对抗红队测试后入库。
3. 连续线性归一化与无网离线验证：摒弃 0/1 二元通过制或模型主观打分，每个任务将未改动基线映射为 0%，任务理论或参考上限映射为 100%（例如程序加速至上限一半即得 50%），取 8 次独立尝试均值；模型交付物（模型权重、数据管线、算子包、CAD 代码或飞机设计）由外部无网隔离验证器在未暴露的隐藏输入上执行仿真或几何计算打分。在全部 2,912 次试验的作弊审计中，共检出 39 次利用漏洞企图（占比 1.3%），所有试图篡改或投机的提分均被强制清零。

### 二、排行榜实证、部署落差与 Token 成本前沿

本博客重点披露的头部及尾部对照模型主榜单与分域数据如下（补全各模型 Token 与单次成本对照）：

| 模型 | 26 题总均分 | 单次平均 Token 消耗 | 单次平均成本 | 关键分域表现与效率特征 |
| --- | --- | --- | --- | --- |
| Claude Fable 5.2 | 54.6% | 2.11 亿 (211M) | $105.08 | 四大领域全线第一；软件工程 62.2%、机器学习 54.6%、物理工程 59.6%、科学计算 40.2% |
| GPT-6 Astra | 44.2% | 8,900 万 (89M) | $234.63 | 物理工程 57.3%、科学计算 39.4%（逼近 Fable 5.2 误差带内），用不足一半 Token 达成次席但单价最高 |
| Claude Opus 5.5 | 41.6% | 2.53 亿 (253M) | — | 软件工程 49.7%（落后 Fable 5.2 达 12.5 个百分点，博客文本记作 +12.2pp） |
| GPT-6.1 Sol | 41.2% | — | $52.12 | 自带样本走捷径倾向，在公开样本过拟合后隐藏集掉分 |
| Claude Sonnet 5.5 | 39.0% | — | $38.65 | 机器学习分域 47.8%（比 Fable 5.2 低 6.8 个百分点），单次成本仅为 Astra 的 1/6 |
| Beam / Inkling | 3.3% / 1.1% | — | — | 小模型与轻量模型在长程任务上几乎归零，验证基准梯度区分度 |

团队人工精读 Claude Opus 5.5、Gemini 4 Argon 与 GPT-6.1 Sol 在全部 26 题上各 8 次运行的 624 条完整轨迹后发现，大多数失败并非缺少算法思路，而是模型习惯在自己构建的缩水模拟器、小规模样本或常温常规工况上验证通过后直接交卷，一旦进入隐藏测试的真实规模、极端温度或异构输入张量形状即崩溃；Gemini 4 Argon 与 GPT-6.1 Sol 在开发集上通过硬编码捷径过拟合的现象尤其明显，导致平均约 18 个百分点的部署落差（Deployment Gap）。此外，OpenWorldEngineer 已同步启动社区共建计划 OWE-2.0（通过 openworldengineer.mercor.com/contribute 征集外部任务），全部 26 项任务的指令、起始代码、开发用例、隐藏测试集、数据生成器、随机种子与官方评分器均已公开。

### 三、赛道横向对比与本工作台复核

- 本工作台核查：
  1. ✅ 跨文档版本口径核查（11-12 博客 vs 11-23 arXiv:2611.30017v1）：对比两份一手原文可见 3 处结构性微调——(a) 博客将 ML 记为 7 项、SC 记为 6 项，而 11 日后定稿论文改为 ML 6 项、SC 7 项（推测有 1 项科学计算 GPU 算子任务从 ML 划入 SC），对应 Fable 5.2 在博客中披露的 ML 54.6% / SC 40.2% 在论文 Table 9 调整为 60.2% / 37.4%；(b) 博客称 Fable 5.2 软件工程 62.2% 领先 Opus 5.5（49.7%）「+12.2pp」，按原文表内数值直接相减实为 +12.5 个百分点，属官方博客文本笔误（论文后续已修正）；(c) 博客审计统计为 39/2,912 次（1.3%）漏洞企图，论文剔除参考模板复用后细化为 38 次核心试探（1.3%）与 28 次实质作弊（1.0%）。
  2. ⚠️ Token 经济学与单价分母核查：GPT-6 Astra 平均每任务消耗 8,900 万 tokens 却花掉 $234.63（折合每百万综合 token 约 $2.64），而 Claude Fable 5.2 消耗 2.11 亿 tokens 仅花 $105.08（约 $0.50/M tokens），Claude Sonnet 5.5 更低至 $38.65。在企业工程交付场景下，单纯比较 Benchmark 榜单分或裸上下文速度会严重误判单位算力 ROI——高思考单价模型只有在极短截断时限（如 1/8 时限并发）才具备经济学意义。
  3. ✅ 商业逻辑与赛道 T1/T2 对齐复核：与此前 Mercor 发布的「90% 美国职业缺少基准覆盖」地图（US Benchmark Map）及竞争对手 Scale AI（HSS 多模态直觉视觉基准测得前沿模型中位仅 30.9%）一致，Mercor 正在用开源评测基准反向定义市场采购标准——但 OWE-Bench 将隐藏测试集与生成器种子一并随库开源（供 OWE-2.0 复现），使这 26 题在公开发布后天然面临后续模型预训练污染风险，因此其真正的商业壁垒不在静态题库本身，而在 Mercor 面向企业闭源交付的「私有持续轮换隐藏验证器 + 专家交付管线」。
- 本工作台推断：随着 OWE-Bench 与 OWE-2.0 确立长程连续工程评分范式，模型厂与后训练数据供应商的议价焦点将从「按专家工时计费造题」转向「按验证器对部署落差（Deployment Gap）的压降幅度计费」。Claude Fable 5.2 以 54.6% 的得分和 2.11 亿 tokens / $105.08 的成本效率领先，证明多小时顺序试错与高覆盖自测回路已开始产生商业分化，但距离 100% 上限仍有 45.4 个百分点的真实交付缺口。

### 观点与可反驳条件

- ==观点==：OWE-Bench 工程博客与后续论文共同确认，长程工程智能体的核心瓶颈并非知识检索或单步代码生成，而是开发自测与真实隐藏工况之间高达 18 个百分点的部署落差，以及高达 2.5 倍的推理单位成本剪刀差（Astra $234.63 vs Fable 5.2 $105.08）；这迫使数据基础设施（Mercor、Plato、Scale AI）把护城河从静态题库升级为隔离度可控的持续轮换验证沙盒。
- ==推翻条件==：
  1. 2027 年 6 月底前，若主流闭源模型在 OWE-2.0 新征集且未公开测试集的社区长程工程任务上，无需外部隐藏验证沙盒微调即实现开发集与隐藏集分差收窄至 5 个百分点以内，说明部署落差可通过通用预训练/推理范式自愈，第三方验证环境溢价将承压。
  2. 2027 年内若单次长程任务（4–18 小时级）的推理 Token 成本通过投机解码与上下文压缩整体再降 80% 以上、且不同模型族之间成本差距收敛至 1.5 倍以内，则企业路由决策将不再受限于单位 Token 成本剪刀差，而重新由绝对准确率主导。

---

## 原文摘录与一手信源存证

> 【信源巡检核心摘要】 Mercor 发布面向长程真实工程任务的开源评测基准 OpenWorldEngineer（OWE-Bench），涵盖软件工程、物理工程、机器学习与科学计算共 26 项连续评分任务，显示 Claude Fable 5.2 以 54.6% 领跑（平均每任务尝试消耗 2.11 亿 tokens），GPT-6 Astra 为 44.2%（8900 万 tokens），体现 Mercor 将专家任务定义与连续评测环境向工程研发领域产品化的最新进展。
> — 原文摘录，文字段落 1；证据 `digest-material-f7eb76ac04a0872aedcb053f5d6920b9dddf5d77a79bfdbe50da8c4566ec8b56-excerpt-1@1`

一手材料：

- Introducing OWE-Bench for Long-Horizon Engineering Projects · Mercor · [原站](https://www.mercor.com/blog/introducing-owe-bench/) · [主体档案：Mercor Research](../entities/companies/Mercor%20Research.md) / [主体档案：Mercor](../entities/companies/Mercor.md) / [主体档案：OpenWorldEngineer Leaderboard](../entities/companies/OpenWorldEngineer%20Leaderboard.md) · [本地原件](../../../raw/e9befc1fc53a7b0edbcb24ee9ca44e22af0fc3aa9565d266ec20eaf448ff0ccc)
  材料版本 `digest-material-e9befc1fc53a7b0edbcb24ee9ca44e22af0fc3aa9565d266ec20eaf448ff0ccc@1`；获取方式 `http_full_text`。
  > , a frontier coding benchmark of 26 long-horizon engineering and research tasks across software engineering, physical engineering, machine learning, and scientific computing. — 原文提取
  > We built OWE-Bench to test whether AI agents can make real progress on long-horizon engineering projects, ranging from GPU kernels to aircraft design. Every task is graded on unseen cases and scored on a continuous scale. — 原文提取

归属与范围：Mercor 于 2026-11-12 发布面向长程真实工程与科研任务的开源基准 OpenWorldEngineer（OWE-Bench），包含软件工程（8 项）、物理工程（5 项）、机器学习（7 项）与科学计算（6 项）共 26 项连续评分任务，单任务限时 4 至 18 小时（中位 8 小时，全套单轮 257 个智能体工时）。Claude Fable 5.2 以 54.6% 均分领跑全部四大领域（单次平均 2.11 亿 tokens、\$105.08），GPT-6 Astra 为 44.2%（8,900 万 tokens、\$234.63），Claude Opus 5.5 为 41.6%（2.53 亿 tokens）。基准揭示出可见测试与隐藏真实负载之间平均 18 个百分点的部署落差（Deployment Gap），以及推理时算力与成本之间的非线性分化。

来源缺口：

- `not_disclosed`：2026-11-12 博客原文未逐题公开全部 26 项任务的单题得分方差与 624 条失败轨迹的逐类错误统计表，且 26 项任务系从候选集中过滤高分简单题后的困难子集，绝对百分比不能直接外推为通用工业工程及格率。 [线索](https://www.mercor.com/blog/introducing-owe-bench/)

[返回赛道总览](../赛道总览.md#digest-f7eb76ac04a0872a) · [返回导读索引](README.md) · [主体档案库](../entities/README.md)
