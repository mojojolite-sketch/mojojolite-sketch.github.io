---
title: "Trajectory 获 Sequoia Capital 领投、NVIDIA 与 Bessemer 参投 $4,500 万 Series A（投后估值 $3 亿）：切入领域专家反馈驱动的持续后训练闭环"
type: blog_digest
sector: "AI训练与数据"
source: "Trajectory & Sequoia Capital"
published_at: "2026-10-15"
raw_sha256: "6a4f639d9b71a513f543f1d17a2073f1754e73341b0092a252c7c3240e11554d"
material_version: "digest-material-6a4f639d9b71a513f543f1d17a2073f1754e73341b0092a252c7c3240e11554d@1"
origin_url: "https://www.sequoiacap.com/companies/trajectory/"
trigger_source: "Sequoia Capital / Trajectory"
trigger_url: "https://www.sequoiacap.com/companies/trajectory/"
user_comments: ""
status: "needs_cloud"
---

<a id="digest-6a4f639d9b71a513"></a>
# Trajectory 获 Sequoia Capital 领投、NVIDIA 与 Bessemer 参投 \$4,500 万 Series A（投后估值 \$3 亿）：切入领域专家反馈驱动的持续后训练闭环

2026-10-15 · Trajectory & Sequoia Capital · 待云端同步

[本地原件归档](../../../raw/6a4f639d9b71a513f543f1d17a2073f1754e73341b0092a252c7c3240e11554d) · 固定材料版本 `digest-material-6a4f639d9b71a513f543f1d17a2073f1754e73341b0092a252c7c3240e11554d@1` · [一手原站](https://www.sequoiacap.com/companies/trajectory/)

## 深度拆解与复核

- ==核心结论/观点==：由前 Google DeepMind、Apple 与斯坦福校友 Ronak Malde（CEO）、Michael Elabd、Arjun Karanam 创立的旧金山后训练基础设施初创公司 Trajectory 完成 4,500 万美元 Series A 融资（累计融资达 6,000 万美元），投后估值达 3 亿美元，由 Sequoia Capital（红杉资本） 领投，NVIDIA、Bessemer Venture Partners 与 Bain Capital Ventures 参投。Trajectory 直击当前企业级大模型落地的核心痛点——「经验断层（Experience Gap）」：无论是闭源还是开源基座模型，在预训练出厂后权重即处于静态冻结，无法从日常生产环境的业务错误与人工修正中自动积累经验；公司通过自研 Continual Grading 与 GS1 持续后训练算法，让医生、律师、金融分析师等非算法背景的领域专家无需内部 ML 团队即可直接构建自定义价值函数（Value Functions），实时驱动万亿参数模型闭环进化。
- 场景与利益相关标注：原始材料来自 Sequoia Capital 与 Trajectory 官方融资披露；作为领投方与被投初创公司，双方有强烈激励将「持续后训练（Continual Post-Training）」塑造为替代传统外包数据标注与 RAG 的下一代基础设施范式，需独立核查其防止模型灾难性遗忘的工程边界。

### 一、 机制拆解与原位复核：从「静态外包刷题」走向「生产流内生持续后训练」

1. ✅ 行业痛点复核：为什么传统 RLHF / 静态数据标注在企业垂直场景失效？
   - 本工作台核查确认，传统数据标注供应商（如 Scale AI、Handshake、Mercor 早期模式）依赖外部兼职专家在脱敏沙箱中离线编写 Prompt-Response；但在真实投行建模、临床诊断或复杂法务审阅中，核心私有知识存在于企业内部每日发生的「专家修改痕迹（Diff）与退回批注」里。静态模型上线后，今天犯过的业务口径错误明天依然会重复犯，靠 Prompt Engineering 堆叠上下文既昂贵又会在长程任务中稀释注意力。
2. ⚠️ 算法与系统复核：Continual Grading + GS1 算法（本工作台推断）
   - Continual Grading（持续评分与自定义价值函数）：提供面向领域专家的自服务工作台，将专家在日常业务流中的正负向纠偏动作实时转化为高密度过程奖励信号（Process Reward / Value Function），无需算法工程师手写 Reward 代码；
   - GS1 持续后训练算法的工程挑战（本工作台推断）：本工作台推断，针对万亿参数模型在吸收小批量高频行业反馈时极易发生的「灾难性遗忘（Catastrophic Forgetting）」与奖励黑客（Reward Hacking），GS1 必须结合参数高效微调（LoRA / DoRA 路由）或 KL 散度强正则化约束，否则高频局部业务纠偏极易损伤基座模型的通用推理能力。

| 维度 | 传统离线 RLHF / 专家数据外包 | 上下文记忆堆叠（RAG / Memory Prompting） | Trajectory 持续后训练平台（Continual Grading + GS1） |
| :--- | :--- | :--- | :--- |
| 知识沉淀载体 | 离线静态微调包（按季度交付） | 塞入 System Prompt / 向量库检索 | 模型权重与自定义价值函数持续内生更新 |
| 领域专家参与方式 | 脱离真实业务的外部兼职打标 | 业务人员手动维护复杂规则库 | 业务流原位纠偏直接转化为后训练梯度信号 |
| 长程推理推理成本 | 固定，但面对新边界频繁出错 | 随规则增多 Token 消耗线性膨胀、注意力退化 | 零额外推理上下文开销，错题一次修正永久生效 |
| 代表厂商与资本押注 | Scale AI / Surge / Mercor | Mem0 / Letta | Trajectory（Sequoia 领投，NVIDIA / Bessemer / Bain 参投，估值 \$3 亿） |

### 观点与可反驳条件

- ==观点==：AI 训练与数据赛道的价值重心正在从「卖离线静态专家工时（人力密集型）」向「嵌入企业生产流的自服务奖励建模与持续后训练工具链（软件高毛利型）」迁移，Trajectory 与已闭合的该赛道未决问题印证了红杉与英伟达对这一基础设施层的重注。
- ==推翻条件==：
  1. 若闭源模型原厂（OpenAI、Anthropic）在官方企业版工作台内置零门槛的持续微调与价值函数对齐功能，独立第三方持续后训练中间层的生存空间将大幅收窄；
  2. 若企业非技术专家在使用 Continual Grading 时因评分标准前后不一致引入高噪声奖励信号，导致微调后模型在未见测试集上准确率反而低于基座模型 + 少样本 Prompt，则其「去 ML 团队化」主张将被证伪。

---

## 原文摘录与一手信源存证

> 【信源巡检核心摘要】 前 Google DeepMind、Apple 与斯坦福研究人员创立的 AI 后训练初创公司 Trajectory 完成 4,500 万美元 Series A 融资，投后估值达 3 亿美元，由红杉资本（Sequoia Capital）领投，NVIDIA、Bessemer Venture Partners 与 Bain Capital Ventures 参投。
> — 原文摘录，文字段落 1；证据 `digest-material-6a4f639d9b71a513f543f1d17a2073f1754e73341b0092a252c7c3240e11554d-excerpt-1@1`

一手材料：

- Trajectory 获 Sequoia Capital 领投、NVIDIA 与 Bessemer 参投 \$4,500 万 Series A（投后估值 \$3 亿）：切入领域专家反馈驱动的持续后训练闭环 · Sequoia Capital / Trajectory · [原站](https://www.sequoiacap.com/companies/trajectory/) · [主体档案：Trajectory](../entities/companies/Trajectory.md) / [主体档案：Sequoia Capital](../entities/funds/Sequoia%20Capital.md) / [主体档案：Ronak Malde](../entities/people/Ronak%20Malde.md) · [待上传原件](../../../raw/6a4f639d9b71a513f543f1d17a2073f1754e73341b0092a252c7c3240e11554d)
  材料版本 `digest-material-6a4f639d9b71a513f543f1d17a2073f1754e73341b0092a252c7c3240e11554d@1`；获取方式 `tg_approved_source_update`。
  > 【信源巡检核心摘要】 前 Google DeepMind、Apple 与斯坦福研究人员创立的 AI 后训练初创公司 Trajectory 完成 4,500 万美元 Series A 融资，投后估值达 3 亿美元，由红杉资本（Sequoia Capital）领投，NVIDIA、Bessemer Venture Partners 与 Bain Capital Ventures 参投。 — 原文提取

归属与范围：前 Google DeepMind、Apple 与斯坦福研究人员创立的 AI 后训练初创公司 Trajectory 完成 4,500 万美元 Series A 融资，投后估值达 3 亿美元，由红杉资本（Sequoia Capital）领投，NVIDIA、Bessemer Venture Partners 与 Bain Capital Ventures 参投。公司聚焦将非技术领域专家的真实工作流反馈实时转化为长程智能体持续后训练（Continual Post-Training）与强化学习奖励信号。

来源缺口：

- `not_disclosed`：Trajectory GS1 持续后训练算法在防止基础模型灾难性遗忘（Catastrophic Forgetting）时的梯度正则化开销与单次迭代算力成本尚未发布公开论文。

[返回赛道总览](../赛道总览.md#digest-6a4f639d9b71a513) · [返回导读索引](README.md) · [主体档案库](../entities/README.md)
