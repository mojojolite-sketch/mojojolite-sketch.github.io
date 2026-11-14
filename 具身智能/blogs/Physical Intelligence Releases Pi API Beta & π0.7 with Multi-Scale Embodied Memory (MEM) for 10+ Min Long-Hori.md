---
title: "Physical Intelligence Releases Pi API Beta & π0.7 with Multi-Scale Embodied Memory (MEM) for 10+ Min Long-Horizon Manipulation"
type: blog_digest
sector: "具身智能"
source: "Physical Intelligence (π)"
published_at: "2026-10-28"
raw_sha256: "ffd12c35fd7f6c24b383392feafe9574542e3e7280d033e9124d0b2519fdd0b8"
material_version: "digest-material-ffd12c35fd7f6c24b383392feafe9574542e3e7280d033e9124d0b2519fdd0b8@2"
origin_url: "https://www.pi.website/blog/pi-api-beta"
trigger_source: "Physical Intelligence (π)"
trigger_url: "https://www.pi.website/blog/pi-api-beta"
user_comments: ""
status: "processed_with_gaps"
---

<a id="digest-ffd12c35fd7f6c24"></a>
# Physical Intelligence Releases Pi API Beta & π0.7 with Multi-Scale Embodied Memory (MEM) for 10+ Min Long-Horizon Manipulation

2026-10-28 · Physical Intelligence (π) · 有来源缺口

[本地原件归档](../../../raw/ffd12c35fd7f6c24b383392feafe9574542e3e7280d033e9124d0b2519fdd0b8) · 固定材料版本 `digest-material-ffd12c35fd7f6c24b383392feafe9574542e3e7280d033e9124d0b2519fdd0b8@2` · [一手原站](https://www.pi.website/blog/pi-api-beta)

## 深度拆解与复核

- ==核心结论/观点==：Physical Intelligence（π）在发布 $\pi_{0.7}$ 与多尺度具身记忆（MEM, arXiv:2603.03596, CoRL Spotlight）的基础上，于 2026 年 10 月正式推出托管开发者服务 Pi API Beta。这一进展包含两层关键技术与商业跃迁：① 架构层解决 VLA 的「金鱼记忆」瓶颈：传统 VLA 仅处理当前帧或几秒短窗口，若直接喂入长视频历史会触发 Transformer $O(N^2)$ 算力爆炸；MEM 通过「短期高频视频编码器（处理机械臂瞬时视觉遮挡与空间动态）+ 长期文本语义记忆（用紧凑语言总结已完成步骤与食谱/工单阶段）」混合架构，将连续多步骤操作跨度推升至 15 分钟；② 商业层开启具身基模 API 化：外部机器人本体与集成商可通过 Pi API 上传自有遥操作演示数据、在云端微调 $\pi_{0.7}$ 并调用跨本体推理，试图复刻大模型时代 OpenAI API 的生态卡位。
- 场景与利益相关标注：本文发布方为 Physical Intelligence 官方团队（Karol Hausman、Sergey Levine 等），其核心商业诉求是将 $\pi$ 系列基础模型打造为跨本体机器人的通用「大脑层」平台并吸引下游本体厂接入 Pi API；对其宣传的跨本体泛化能力需结合真实工位节拍与边缘控制延迟独立审视。

### 一、 核心技术拆解与原位物理复核：为什么传统 VLA 跑不出 15 分钟长程任务？

1. 传统 VLA 的两难困境（记忆失忆 vs. 像素注意力爆炸）
   - 在厨房清理、三明治制作或跨工位分拣等 10–15 分钟长程任务中，机器人同时需要两种时间尺度的记忆：
     - 毫秒至秒级局部视觉记忆（Short-Horizon Metric-Visual Memory）：例如「机械臂抓起杯子瞬间遮挡了腕部相机，桌上的勺子在哪？」——必须保留高分辨率空间细节；
     - 分钟级语义认知记忆（Long-Horizon Semantic Memory）：例如「我已经往锅里放过盐了吗？当前处于多工序装配的第几步？」——若保留全量历史视频帧，Transformer 上下文将在数分钟内耗尽显存并拖垮实时控制频率（50Hz）。
2. MEM（Multi-Scale Embodied Memory，arXiv:2603.03596）的双层解耦机制与本工作台核查
   - ✅ 架构解耦复核（短期视频编码 + 长期语言日志）：本工作台核查确认，MEM 在 $\pi_{0.6}$ / $\pi_{0.7}$ 主干上引入短期视频编码分支（时序压缩最近数秒观测帧以解决局部视觉遮挡）与长期文本记忆分支（Mental Journals，利用离线 VLM/LLM 监督将过去数分钟的操作里程碑浓缩为百 Token 级文本摘要），使注意力计算复杂度不随任务总时长膨胀，成功支撑长达 15 分钟 的连续厨房清理与多食材制备。
   - ⚠️ 云端 API 控制频率边界复核（本工作台推断）：本工作台推断，Pi API Beta 的云端托管微调与云端推理在高层语义规划与低频子目标生成（1–5Hz）上完全可行，但 50–500Hz 的底层接触力控与高频动作块（Action Chunking）仍必须在机载边缘算力（如 Orin / Thor）本地闭环执行，纯云端流式下发关节扭矩无法满足工业安全硬实时要求。

| 维度 | 传统无状态 VLA（如早期 RT-2 / $\pi_0$） | 多尺度具身记忆 VLA（$\pi_{0.7}$ + MEM） | 工程与商业影响 |
| :--- | :--- | :--- | :--- |
| 历史观测输入 | 仅当前帧或 1–2 秒滑动窗口 | 短期高密视频编码 + 长期文本语义记忆摘要 | 彻底消除跨工序「重复操作/遗忘步骤」 |
| 注意力复杂度 | 随视频长度呈 $O(N^2)$ 暴增 | 长期历史压缩为百 Token 级文本，延迟恒定 | 满足真机高频闭环控制实时性硬约束 |
| 连续任务跨度 | 通常 < 1–2 分钟（单步原子技能） | 稳定支持 10–15 分钟多阶段复合任务 | 从实验室单动作演示迈向真实工位全流程 |
| 交付与微调方式 | 本地开源权重或封闭自用 | Pi API Beta（云端数据上传 + 托管微调 + 推理） | 降低下游本体厂后训练门槛，锁定数据回流飞轮 |

### 观点与可反驳条件

- ==观点==：MEM 的「短期视频 + 长期文本」双尺度记忆将成为长程 VLA 的标准范式；而 Pi API Beta 的商业成败取决于其能否以「云端微调训练平台 + 本地蒸馏权重部署」模式交付，而非单纯按云端实时推理 Token 收费。
- ==推翻条件==：
  1. 若第三方独立评测显示，在无人工干预的 15 分钟非结构化家庭/工厂任务中，$\pi_{0.7}$ + MEM 因语言摘要幻觉（Hallucination）导致的状态误判率超过 25%，则文本语义记忆的可靠性边界需下调；
  2. 若主流本体厂因忌惮核心工位遥操作数据通过 Pi API 回流至 Physical Intelligence 主模型而拒绝上传真实产线数据，则其 API 飞轮设想将被证伪。

---

## 原文摘录与一手信源存证

> 【信源巡检核心摘要】 Physical Intelligence 推出托管开发者服务 Pi API Beta（2026-10），支持外部机器人团队上传自有遥操作演示数据、在云端微调 π0.7 基础模型并部署跨本体推理。
> — 原文摘录，文字段落 1；证据 `digest-material-ffd12c35fd7f6c24b383392feafe9574542e3e7280d033e9124d0b2519fdd0b8-excerpt-1@1`

一手材料：

- Physical Intelligence Releases Pi API Beta & π0.7 with Multi-Scale Embodied Memory (MEM) for 10+ Min Long-Horizon Manipulation · Physical Intelligence (π) · [原站](https://www.pi.website/blog/pi-api-beta) · [主体档案：Physical Intelligence](../entities/companies/Physical%20Intelligence.md) · [本地原件](../../../raw/ffd12c35fd7f6c24b383392feafe9574542e3e7280d033e9124d0b2519fdd0b8)
  材料版本 `digest-material-ffd12c35fd7f6c24b383392feafe9574542e3e7280d033e9124d0b2519fdd0b8@2`；获取方式 `tg_approved_source_update`。
  > 【信源巡检核心摘要】 Physical Intelligence 推出托管开发者服务 Pi API Beta（2026-10），支持外部机器人团队上传自有遥操作演示数据、在云端微调 π0.7 基础模型并部署跨本体推理。 — 原文提取

归属与范围：Physical Intelligence 推出托管开发者服务 Pi API Beta（2026-10），支持外部机器人团队上传自有遥操作演示数据、在云端微调 π0.7 基础模型并部署跨本体推理。架构层引入 Multi-Scale Embodied Memory (MEM) 突破 10 分钟以上长程操作记忆瓶颈，并结合在线强化学习（Online RL Extraction）快速收敛精细灵巧操作策略，标志着具身基础模型从实验室封闭权重迈向 API 平台化商业交付。

来源缺口：

- `not_disclosed`：Pi API Beta 的商业化按 Token/推理时长计费梯度与云端微调单任务 GPU 小时成本尚未公开披露。

[返回赛道总览](../赛道总览.md#digest-ffd12c35fd7f6c24) · [返回导读索引](README.md) · [主体档案库](../entities/README.md)
