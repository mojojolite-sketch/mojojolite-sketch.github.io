---
title: "Machenta 完成 4000 万美元种子轮融资，押注纯仿真训练与机器人即时学习"
type: blog_digest
sector: "具身智能"
source: "Creandum · Union Square Ventures (USV) · Machenta"
published_at: "2026-10-28"
raw_sha256: "cae76cc4a9e6c8eae5da5733edb1dfce0f0781c3fc56738bf58673d8f65e5a40"
material_version: "digest-material-cae76cc4a9e6c8eae5da5733edb1dfce0f0781c3fc56738bf58673d8f65e5a40@1"
origin_url: "https://creandum.com/stories/backing-machenta/"
trigger_source: "Robot Frontline"
trigger_url: ""
user_comments: ""
status: "processed_with_gaps"
primary_topic: "模型与策略架构"
secondary_topics: ["仿真与评测基准"]
topic_confidence: 0.4925
stack_claims: [{"layer_id": "data_acquisition", "pattern_id": "sim_synthetic_rl", "system": "Machenta VDA 元学习管线", "entity": "Machenta", "mechanism": "在海量随机化仿真环境（同时随机化物体、相机视角、本体形态与示范轨迹）训练元学习策略，将真机遥操人力置换成GPU仿真算力", "metric_or_tradeoff": "获4000万美元种子轮扩展仿真算力，但纯视觉仿真难以无损覆盖接触摩擦、柔性形变与紧公差插拔", "source_url": "https://creandum.com/stories/backing-machenta/"}, {"layer_id": "sim_verification", "pattern_id": "sim2real_domain_rand", "system": "Machenta Physical Vibe Coding", "entity": "Machenta", "mechanism": "部署新任务不更新权重，依靠单次真实示范在推理上下文对齐物理环境并通过失败重做提示快速调试", "metric_or_tradeoff": "Creandum现场盲测帽子/纸卷/招财猫单次成功，但属小样本定性抽检且尚无付费客户或商业交付时间表", "source_url": "https://creandum.com/stories/backing-machenta/"}]
---

<a id="digest-cae76cc4a9e6c8ea"></a>
# Machenta 完成 4000 万美元种子轮融资，押注纯仿真训练与机器人即时学习

2026-10-28 · Creandum · Union Square Ventures (USV) · Machenta · 有来源缺口

[本地原件归档](../../../raw/cae76cc4a9e6c8eae5da5733edb1dfce0f0781c3fc56738bf58673d8f65e5a40) · 固定材料版本 `digest-material-cae76cc4a9e6c8eae5da5733edb1dfce0f0781c3fc56738bf58673d8f65e5a40@1` · [一手原站](https://creandum.com/stories/backing-machenta/)

## 深度拆解与复核

- ==核心结论==：Machenta 在 2026-10-27 宣布完成 Creandum 与 Union Square Ventures (USV) 联合领投的 $40M 种子轮融资（未披露投后估值），试图以「全仿真元学习 Vision-Demo-Action（VDA）+ 单次真实示范上下文推理」替代行业主流的逐任务遥操作采集与微调流程；资本押注的核心杠杆是把部署扩展瓶颈从真机人力转移至可缩放的仿真算力，但公司尚无近期商业化时间表，且纯仿真策略在强接触力学、精密公差与长程多步任务上仍未通过第三方独立测评。

#### 一、业务切口与核心机制

Robot Frontline（作者 Chiris，2026-10-28）从投融资与行业路线分化视角梳理了 Machenta 的商业切口（与本站已拆解工程原博客的 [《Machenta发布即时机器人学习模型：只需一次示范，无需微调｜全仿真训练学习真实任务》](Machenta%E5%8F%91%E5%B8%83%E5%8D%B3%E6%97%B6%E6%9C%BA%E5%99%A8%E4%BA%BA%E5%AD%A6%E4%B9%A0%E6%A8%A1%E5%9E%8B%EF%BC%9A%E5%8F%AA%E9%9C%80%E4%B8%80%E6%AC%A1%E7%A4%BA%E8%8C%83%EF%BC%8C%E6%97%A0%E9%9C%80%E5%BE%AE%E8%B0%83%EF%BD%9C%E5%85%A8%E4%BB%BF%E7%9C%9F%E8%AE%AD%E7%BB%83%E5%AD%A6%E4%B9%A0%E7%9C%9F%E5%AE%9E%E4%BB%BB%E5%8A%A1.md) 形成商业与技术双视角互补）。联合领投方在各自官方投资手记中把这条路线概括为两重范式反转：

1. 学习目标反转（学会如何学习，而非记住单项任务）：联合创始人兼 CEO Edward Johns（帝国理工学院 Robot Learning Lab 创始人，前 Dyson 机器人学习负责人）与 CTO Vitalis Vosylius（Instant Policy 一作）把权重优化目标设为元学习——在海量随机化仿真环境（物体、相机视角、本体形态与示范轨迹同时随机化）中训练模型从示范中即时推断任务意图，部署新任务时不更新权重，仅凭 1 次真实示范即开始执行装箱、整理等操作。
2. 成本约束反转（算力替代遥操人力与 Physical Vibe Coding）：[Creandum](../entities/funds/Creandum.md) 合伙人 [Kathi Wilhelm](../entities/people/Kathi%20Wilhelm.md) 与 USV 合伙人 Rebecca Kaden 均强调，同业大多受制于真机遥操员人天与产线停机时间，而 [Machenta](../entities/companies/Machenta.md) 的数据瓶颈落在 GPU 仿真生成算力上；当教学周期由数天压缩为现场单次示教，非机器人专家也能通过观察失败与重做提示完成调试（USV 将其称为 Physical Vibe Coding）。本轮资金将用于扩建伦敦 King's Cross 实验室与办公空间、扩大研发团队并采购仿真训练算力。

#### 二、核心数据核查、口径纠偏与工程边界

场景与利益披露：本条目触发稿件为微信公众号 Robot Frontline（作者 Chiris）的中文编译报道，其核心信源直接对应联合领投方 Creandum（[Backing Machenta](https://creandum.com/stories/backing-machenta/)）与 Union Square Ventures（[Physical Vibe Coding](https://www.usv.com/writing/physical-vibe-coding-our-investment-in-machenta)）于 2026-10-27 发布的投资手记以及 Machenta 首篇官博。Creandum 与 USV 作为本轮 $40M 种子轮领投股东，存在直接估值溢价与募资传播激励，对「单一未剪辑镜头」「现场盲测一次成功」的叙述须剥离路演滤镜并核对工程边界。

| 核查维度 | 报道与投资方手记口径 | 一手交叉核验结论 | 证据来源 |
| :--- | :--- | :--- | :--- |
| 融资金额与领投方 | $40M（4000 万美元）种子轮，Creandum 与 USV 联合领投 | ✅ 核查确认：Creandum 与 USV 官方投资备忘录及帝国理工新闻稿三方口径完全一致 | [Creandum](https://creandum.com/stories/backing-machenta/) · [USV](https://www.usv.com/writing/physical-vibe-coding-our-investment-in-machenta) |
| 本轮投后估值 | Robot Frontline 明确注明尚未披露本轮融资估值 | ✅ 核查确认：Creandum、USV 与帝国理工官稿均未给出估值，保持未知 | [Creandum](https://creandum.com/stories/backing-machenta/) |
| 实验室现场盲测 | Creandum 自带品牌帽子、纸卷与招财猫赴伦敦实验室测试 | ⚠️ 小样本定性证据：Kathi Wilhelm 确记述了未见物体单次示教且挪动物体后成功，但属访客抽检，非标准量化基准 | [Creandum](https://creandum.com/stories/backing-machenta/) |
| 团队迁出与研发焦点 | 原实验室几乎全员跟随创业，无近期商业化计划 | ⚠️ 核查提示：团队驻伦敦 King's Cross，官网明确仍以研究与算力缩放为主，尚无付费客户或产线部署合同披露 | [Machenta Blog](https://machenta.com/blog/instant-robot-learning) |

- ✅ 学术谱系与人员稳定性核查：本工作台核查 [Machenta Team](https://machenta.com/team) 与 Creandum 原文确认，Edward Johns 自 2020 年起带领帝国理工学院团队研究单次示范学习，其 5 篇核心代表作（含 ICLR 2025 Instant Policy 与 Science Robotics 封面论文 Learning a Thousand Tasks in a Day）的全体作者均整建制加入 Machenta，并吸纳了来自 DeepMind、Dyson、Huawei 与 Stability AI 的研究人员。团队从学术实验室整建制转化降低了早期磨合摩擦。
- ⚠️ Sim-to-Real 物理盲区（本工作台推断）：Robot Frontline 与投资人手记均以「在计算机仿真中无限缩放」作为核心卖点，但物理世界的接触摩擦、柔性体形变、紧公差插拔与局部力觉反馈难以靠纯视觉图像仿真无损覆盖。本工作台推断，Machenta 现阶段演示集中在刚体桌面抓放、交接与箱包整理等中低公差任务，若向工业精密装配或柔性织物迁移，纯仿真无力控范式将面临明显物理边界。

#### 三、赛道横向对比与定位

| 具身基础模型主体 | 核心数据与训练范式 | 融资阶段与代表资本 | 新任务部署路径与商业化进度 |
| :--- | :--- | :--- | :--- |
| Machenta（英国伦敦） | 100% 计算机仿真元学习训练 VDA（宣称 0 真实像素预训练） | $40M 种子轮（Creandum、USV 联合领投，估值未披露） | 部署时单次真实示范零微调推理；仍处研究期，无近期商业化计划 |
| [Generalist AI](../entities/companies/Generalist%20AI.md) | 真实物理交互大规模预训练 GEN-1.5 + 仿真/视频条件提示 | 头部风险资本支持（美国） | 依托真实交互底座做单次物理提示与高频精细操作 |
| Skild AI | 海量多本体混合数据 + NVIDIA Cosmos/Isaac Lab/Newton 仿真与 S1 单视频推理 | $14B 级估值赛道头部独角兽 | 自报首个商用 10 个月 ARR 达 $100M、60+ 部署合作（与 NVIDIA/Foxconn 推进产线验证） |
| [Physical Intelligence](../entities/companies/Physical%20Intelligence.md) | 超 10,000 小时跨本体真机数据 + 互联网多模态协同训练 VLA（π0 / π0.5 / π0.7） | 洽谈 $1B+ 新融资（传闻 ~$20B 条件估值） | 2026-10 开放 Pi API Beta 供外部团队上传遥操数据托管微调，商业收入尚未起量 |

### 观点与可反驳条件

- ==观点==：Creandum 与 USV 对 Machenta 开出 $40M 英国机器人种子轮纪录支票，交易本质是把「真机遥操采集人力成本」置换成「纯仿真数据生成器 + 元学习算力扩展」的期权定价；该方案在非精密、多SKU 切换的刚体桌面与物流拣选场景具备显著的边际部署优势，但在补齐力触觉反馈与第三方精密装配良率基准前，尚无法挑战依赖真机交互回流的重资产头部模型。
- ==推翻条件==：
  1. ① 第三方精密操作与长程基准证伪：若截至 2027-10（种子轮后 12 个月），Machenta 仍未发布公开可复现的代码/权重或独立第三方评测，或在毫米级插接、柔性物体操控及 >=5 步连续长程任务上连续 1,000 次测试成功率低于 90%，则纯仿真 VDA 的通用化商业期权需大幅下修。
  2. ② 真机微调隐性依赖证伪：若 Machenta 在后续技术论文或商业试点中承认，为达到客户验收良率仍需对特定相机/夹爪/工位采集数十至数百条真机数据做微调（类似前作 Instant Policy 在真机评测中用 5 个任务微调 100K 步），则其「零真实训练像素、免后训练」的核心差异化前提将被推翻。

---

## 原文摘录与一手信源存证

> 当地时间 10 月 27 日，英国伦敦机器人初创公司 Machenta宣布完成 4000 万美元种子轮融资，由 Creandum 和 Union Square Ventures 共同领投。本轮融资将主要用于扩大研发团队、提升算力投入，并利用更多仿真数据训练机器人基础模型。公司尚未披露本轮融资估值。
> — 原文摘录，PDF p.1；证据 `digest-material-cae76cc4a9e6c8eae5da5733edb1dfce0f0781c3fc56738bf58673d8f65e5a40-excerpt-1@1`

> Machenta 脱胎于伦敦帝国理工学院的机器人学习研究，由帝国理工学院机器人学习领域教授 Edward Johns 与其博士生 Vitalis Vosylius 等人共同创立。公司希望解决通用机器人发展中的一个关键问题：机器人能否像人类一样，通过一次示范就掌握新的物理任务，而不必针对每项任务重新收集大量数据、训练模型。
> — 原文摘录，PDF p.1；证据 `digest-material-cae76cc4a9e6c8eae5da5733edb1dfce0f0781c3fc56738bf58673d8f65e5a40-excerpt-2@1`

> 当前，机器人学习普遍依赖真实世界数据、人工遥操作或重复任务示范。尽管相关技术持续进步，但数据采集成本、训练周期以及不同场景之间的泛化能力，仍然制约着机器人向更多任务拓展。
> — 原文摘录，PDF p.2；证据 `digest-material-cae76cc4a9e6c8eae5da5733edb1dfce0f0781c3fc56738bf58673d8f65e5a40-excerpt-3@1`

一手材料：

- Backing Machenta: the era of Instant Robot Learning · Creandum · [原站](https://creandum.com/stories/backing-machenta/) · [主体档案：Creandum](../entities/funds/Creandum.md) / [主体档案：Kathi Wilhelm](../entities/people/Kathi%20Wilhelm.md) · [NotebookLM](https://notebook.google.com/notebook/cac99041-d3b9-449e-a192-12bb4b1ad391) · [Drive](https://drive.google.com/file/d/11yFF-t1QBeLzapsYKNE3SSzxIilxbvVB/view?usp=drivesdk)
  材料版本 `digest-material-4c0f11c1c2453ab272964732b066d516d7d2940c7974fee0461fb998e5ac226f@2`；获取方式 `notebooklm_indexed_text`。
  > We never expected Creandum caps to become a diligence tool. — 原文提取
  > When we visited Machenta's lab earlier this year, we got impressive demos. But the real test was bringing our own tasks to see how the robot would react to items it hadn't seen before. — 原文提取
- Physical Vibe Coding: Our Investment in Machenta · Union Square Ventures (USV) · [原站](https://www.usv.com/writing/physical-vibe-coding-our-investment-in-machenta) · [主体档案：Union Square Ventures (USV)](../entities/funds/Union%20Square%20Ventures%20%28USV%29.md) / [主体档案：Union Square Ventures (@usv)](../entities/funds/Union%20Square%20Ventures%20%28%40usv%29.md) · [本地原件](../../../raw/f704254f72029a2a25f9ef1e873d08eee0526ea7fec5f5a7222e420a55233848)
  材料版本 `digest-material-f704254f72029a2a25f9ef1e873d08eee0526ea7fec5f5a7222e420a55233848@1`；获取方式 `http_full_text`。
  > A humanoid robot holding a yellow ball above a pink cup beside a person at a workbench. — 原文提取
  > team, Ed said something that now sounds obvious but has shifted my thinking: intelligence isn't about existing scale of knowledge and capability. It's how quickly you can learn to do something new. — 原文提取
- Introducing Instant Robot Learning | Machenta · Machenta · [原站](https://machenta.com/blog/instant-robot-learning) · [主体档案：Machenta](../entities/companies/Machenta.md) · [NotebookLM](https://notebook.google.com/notebook/cac99041-d3b9-449e-a192-12bb4b1ad391) · [Drive](https://drive.google.com/file/d/1b8Q5zc_YQQFAQDmF3FThj4mcv1ZOMWqZ/view?usp=drivesdk)
  材料版本 `digest-material-80508e12068285913bd81f99bd4cc99d50a141517eaf28cd88795c629747ea45@5`；获取方式 `notebooklm_indexed_text`。
  > without a single pixel of real-world training data. — 原文提取
  > Intelligence is not about what you can already do. It's about how quickly you can learn to do something new. — 原文提取

归属与范围：Robot Frontline（Chiris，2026-10-28）转述 Machenta 融资与技术路线；已穿透核验 Creandum（Kathi Wilhelm）、USV（Rebecca Kaden）及 Machenta 官博三份一手原文，补齐投资人现场盲测边界、纯仿真算力杠杆与商业化缺口。

来源缺口：

- `pending_verification`：公司未披露本轮 \$40M 种子轮投后估值，保持未公开；Creandum 自带道具（帽子、纸卷、招财猫）现场盲测属于小样本定性验证，不等同于第三方独立定量基准测评；公司仍处纯研发期，尚无商业交付时间表。

[返回赛道总览](../赛道总览.md#digest-cae76cc4a9e6c8ea) · [返回导读索引](README.md) · [主体档案库](../entities/README.md)
