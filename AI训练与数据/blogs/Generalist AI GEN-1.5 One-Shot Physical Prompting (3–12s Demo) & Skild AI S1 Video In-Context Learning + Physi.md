---
title: "Generalist AI GEN-1.5 One-Shot Physical Prompting (3–12s Demo) & Skild AI S1 Video In-Context Learning + Physical Self-Play RL"
type: blog_digest
sector: "AI训练与数据"
source: "Generalist AI & Skild AI"
published_at: "2026-09-15"
raw_sha256: "42129386af82268ad1db86e120cd393ad13b888c4f32f6b87a576161865099d1"
material_version: "digest-material-42129386af82268ad1db86e120cd393ad13b888c4f32f6b87a576161865099d1@1"
origin_url: "https://generalistai.com/blog/gen-1-5"
trigger_source: "Generalist AI & Skild AI"
trigger_url: "https://generalistai.com/blog/gen-1-5"
user_comments: ""
status: "processed_with_gaps"
---

<a id="digest-42129386af82268a"></a>
# Generalist AI GEN-1.5 One-Shot Physical Prompting (3–12s Demo) & Skild AI S1 Video In-Context Learning + Physical Self-Play RL

2026-09-15 · Generalist AI & Skild AI · 有来源缺口

[本地原件归档](../../../raw/42129386af82268ad1db86e120cd393ad13b888c4f32f6b87a576161865099d1) · 固定材料版本 `digest-material-42129386af82268ad1db86e120cd393ad13b888c4f32f6b87a576161865099d1@1` · [一手原站](https://generalistai.com/blog/gen-1-5)

## 深度拆解与复核

- ==核心结论/观点==：2026 年下半年，硅谷两大头部具身基模独角兽 Generalist AI（Pete Florence、Andy Zeng 等创立）与 Skild AI（CMU 教授 Deepak Pathak、Abhinav Gupta 创立）同步将具身模型竞争推入 「物理上下文学习（Physical In-Context Learning, ICL）+ 仿真自博弈后训练（Physical Self-Play RL）」 新阶段：① Generalist AI 发布 GEN-1.5：在数十万小时真机物理交互预训练的 GEN-1（特定工业基准成功率达 99%）之上，GEN-1.5 仅需在上下文窗口内输入一段 3–12 秒 的单次动作演示，即可在不更新任何模型权重（零梯度微调）的前提下完成新物理技能的 One-Shot Physical Prompting；② Skild AI 发布 S1 与 Physical Self-Play：将单条人类操作视频直接作为 Prompt 驱动机器人实时执行长达 10 分钟 的未见长程操作，并引入物理自博弈强化学习突破人类遥操作数据天花板。
- 场景与利益相关标注：原始材料来自 Generalist AI 与 Skild AI 官方模型发布博客；两家公司均处于高估值一级市场商业化竞速阶段，官方演示视频与基准测试天然偏向展示成功轨迹，需对其在非结构化干扰及高精度力控公差下的零样本/单样本边界进行独立复核。

### 一、 2026 四大具身基础模型技术路线与新技能适应范式横评

| 模型与团队 | 预训练数据底座 | 适应新任务的核心机制 | 所需新任务样本量 | 是否需要梯度微调（Fine-tuning） | 长程任务跨度与代表能力 |
| :--- | :--- | :--- | :--- | :--- | :--- |
| Generalist AI GEN-1.5 | 数十万小时多形态真机物理交互数据（GEN-0 / GEN-1） | Physical Prompting（物理上下文提示学习） | 单次 3–12 秒短演示 | 零梯度更新（可选小批量微调进一步提分） | 即插即用学会新物体抓取、装配与灵巧变形操作（GEN-1 基准成功率达 99%） |
| Skild AI S1 + Self-Play | 跨本体真机轨迹 + 大规模物理仿真合成数据 | Video In-Context Learning + Physical Self-Play RL | 1 条人类演示视频作为 Prompt | 推理阶段零微调；后训练阶段仿真自博弈强化学习 | 实时执行长达 10 分钟的未见长程操作；自博弈解锁超越人类遥操作的动态灵巧行为 |
| Physical Intelligence π0.7 + MEM | 跨本体真机遥操作 + VLM 互联网先验 | Multi-Scale Embodied Memory (arXiv:2603.03596) + 在线 RL 提取 + Pi API | 数十条演示（经 Pi API 云端微调） | 支持云端托管微调与在线 RL 策略提炼 | 短期视频编码 + 长期文本记忆摘要，支持 10–15 分钟厨房清理等跨工序复合任务 |
| NVIDIA DreamZero / VFlash | 世界动作模型（WAM）视频生成底座 | 14B 自回归扩散蒸馏 + 推测解码并行验证 | 少量跨形态锚定样本 | 需蒸馏高频动作头 | 解决自回归世界模型推理慢瓶颈，赋予强开放世界物理常识先验 |

### 二、 概念演进与物理机制复盘：为什么「零微调物理上下文提示」是商业化分水岭？

1. ✅ 产线换型经济学复核：将产线换线停机时间从「数天」压缩至「数秒」
   - 本工作台核查确认，在传统 VLA 范式下，每当工厂产线更换一个新零件 SKU，部署团队就必须采集数百条遥操作轨迹、上传云端跑数小时微调、再下发权重验证——换线停机成本极高；
   - GEN-1.5 的 3–12 秒 Physical Prompting 与 Skild S1 的 单条人类视频 Prompt，本质上是把 NLP 大模型在 GPT-3 时代实现的 One-Shot In-Context Learning 第一次真正搬进了物理控制空间：产线工人只需在机器人面前示范一次 5 秒钟的插拔动作，模型在上下文窗口内即时提取接触动力学几何特征并直接复现。
2. ⚠️ 物理边界复核：视觉/运动学 Prompt 无法替代高频接触力反馈（本工作台推断）
   - 本工作台推断，单条 3–12 秒视频或轨迹 Prompt 能传递「运动学轨迹形状与抓握位姿（Kinematics）」，但对于需要毫米级盲插、过盈配合或柔性线束装配的工位，纯视觉上下文提示无法获知接触面的摩擦系数与内应力分布，仍需结合小批量真机力控梯度微调（Generalist AI 亦承认小批量梯度步可进一步显著提分）。

### 观点与可反驳条件

- ==观点==：具身基模正形成清晰的「两阶段自适应标准流」——先用 GEN-1.5 / Skild S1 的 One-Shot Physical Prompting 在 10 秒内冷启动新工位（达到 70%–85% 初始成功率），再利用在线强化学习（Online RL / Self-Play）在运行中将成功率推向工业级 >99%。
- ==推翻条件==：
  1. 若在跨本体测试中，将人类手部视频或 A 型机械臂的 10 秒演示输入给 B 型机械臂时，因运动学构型差异（Embodiment Gap）导致零梯度成功率跌破 50%，则跨形态 In-Context Learning 的通用性边界将被证伪；
  2. 若 Physical Self-Play 在仿真中习得的高动态策略因 Sim-to-Real 摩擦建模失真而在真机上引发高频振荡或硬件磨损激增，则纯仿真自博弈的实用性需打折。

---

## 原文摘录与一手信源存证

> 【信源巡检核心摘要】 Generalist AI 发布 GEN-1.5 基础模型（基于数十万小时真机物理交互预训练的 GEN-1 演进，特定基准成功率达 99%），仅需上下文窗口内单次 3–12 秒演示即可实现零梯度更新的 One-Shot 物理技能泛化（Physical Prompting）；同期 Skild AI 发布 S1 基础模型与 Physical Self-Play 强化学习后训练（2026-08/09），将单条人类演示视频作为上下文 Prompt 直接驱动长达 10 分钟的未见长程操作任务。
> — 原文摘录，文字段落 1；证据 `digest-material-42129386af82268ad1db86e120cd393ad13b888c4f32f6b87a576161865099d1-excerpt-1@1`

一手材料：

- Generalist AI GEN-1.5 One-Shot Physical Prompting (3–12s Demo) & Skild AI S1 Video In-Context Learning + Physical Self-Play RL · Generalist AI & Skild AI · [原站](https://generalistai.com/blog/gen-1-5) · [主体档案：Generalist AI](../entities/companies/Generalist%20AI.md) / [主体档案：Skild AI](../entities/companies/Skild%20AI.md) · [本地原件](../../../raw/42129386af82268ad1db86e120cd393ad13b888c4f32f6b87a576161865099d1)
  材料版本 `digest-material-42129386af82268ad1db86e120cd393ad13b888c4f32f6b87a576161865099d1@1`；获取方式 `tg_approved_source_update`。
  > 【信源巡检核心摘要】 Generalist AI 发布 GEN-1.5 基础模型（基于数十万小时真机物理交互预训练的 GEN-1 演进，特定基准成功率达 99%），仅需上下文窗口内单次 3–12 秒演示即可实现零梯度更新的 One-Shot 物理技能泛化（Physical Prompting）；同期 Skild AI 发布 S1 基础模型与 Physical Self-Play 强化学习后训练（2026-08/09），将单条人类演示视频作为上下文 Prompt 直接驱动长达 10 分钟的未见长程操作任务。 — 原文提取

归属与范围：Generalist AI 发布 GEN-1.5 基础模型（基于数十万小时真机物理交互预训练的 GEN-1 演进，特定基准成功率达 99%），仅需上下文窗口内单次 3–12 秒演示即可实现零梯度更新的 One-Shot 物理技能泛化（Physical Prompting）；同期 Skild AI 发布 S1 基础模型与 Physical Self-Play 强化学习后训练（2026-08/09），将单条人类演示视频作为上下文 Prompt 直接驱动长达 10 分钟的未见长程操作任务。

来源缺口：

- `not_disclosed`：GEN-1.5 在零梯度 Physical Prompting 模式下面对高反光/透明柔性物体或毫米级插拔公差时的失败率边界尚未公开完整评测表。

[返回赛道总览](../赛道总览.md#digest-42129386af82268a) · [返回导读索引](README.md) · [主体档案库](../entities/README.md)
