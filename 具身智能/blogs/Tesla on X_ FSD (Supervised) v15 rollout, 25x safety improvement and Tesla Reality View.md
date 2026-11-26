---
title: "Tesla on X: FSD (Supervised) v15 rollout, 25x safety improvement and Tesla Reality View"
type: blog_digest
sector: "具身智能"
source: "Tesla (@Tesla)"
published_at: "2026-11-21"
raw_sha256: "6be4a7b323bbf96f602060a0721bcad901d0b3ffcfca09a0308225d912bb06f6"
material_version: "digest-material-6be4a7b323bbf96f602060a0721bcad901d0b3ffcfca09a0308225d912bb06f6@1"
origin_url: "https://x.com/Tesla/status/2124222447855743019"
trigger_source: "Tesla"
trigger_url: "https://x.com/Tesla/status/2124222447855743019"
user_comments: ""
status: "processed_with_gaps"
primary_topic: "模型与策略架构"
topic_confidence: 0.8646
---

<a id="digest-6be4a7b323bbf96f"></a>
# Tesla on X: FSD (Supervised) v15 rollout, 25x safety improvement and Tesla Reality View

2026-11-21 · Tesla (@Tesla) · 有来源缺口

[本地原件归档](../../../raw/6be4a7b323bbf96f602060a0721bcad901d0b3ffcfca09a0308225d912bb06f6) · 固定材料版本 `digest-material-6be4a7b323bbf96f602060a0721bcad901d0b3ffcfca09a0308225d912bb06f6@1` · [一手原站](https://x.com/Tesla/status/2124222447855743019)

## 深度拆解与复核

- 口径与利益披露：本条目原件为 Tesla 官方企业 X 主账号 `@Tesla`（2,489 万粉丝）于 2026-11-21 19:24 UTC 发布的 FSD (Supervised) v15 首发公告（`https://x.com/Tesla/status/2124222447855743019`，含 46.5 秒 4K 实车演示视频，截至取证累计 9,664,968 次浏览与 47,453 次点赞），代表 Tesla 官方产品发布与市场传播口径；同日补述来自 AI 副总裁 Ashok Elluswamy（`@aelluswamy`）、自动驾驶负责人 Phil Duan（`@pduan`）及 CEO Elon Musk（`@elonmusk`），均属 Tesla 内部工程与产品叙事一方。与之对应，FSD v15.0.1（软件版本 2026.38.6.11）车端用户协议明确保留 L2 监管免责条款：It does not make your vehicle autonomous。与库内已收录的第三方作者 `@David_yc607` 导读（侧重 3DGS 与车端 1B 条件均值流世界模型架构切割）相比，本篇不重复渲染底层算子拆解，聚焦补齐官方首发原帖与演示视频实证、拆解 25x 安全分母口径及 Reality View 的产品化边界。

### 1. 官方首发增量与库内已有 FSD V15 导读的交叉对照

| 核查维度 | 库内既有 `@David_yc607` 导读已覆盖 | 本篇 `@Tesla` 官方原帖及 2026.38.6.11 增量核查 |
| :--- | :--- | :--- |
| 信源性质与时间 | 2026-11-23 第三方技术评述 + Musk 11-22 架构帖 + Ashok ICCV 2025 长文 | 2026-11-21 `@Tesla` 官方首发原帖（46.5 s 演示视频）+ `@aelluswamy` / `@pduan` 同日说明 + 北美 AI4 车端发行说明 |
| 网络统一与跨端范围 | 提及 UVE 在 FSD、Robotaxi 与 Optimus 间共享，并给出车端 3B 驾驶 + 1B 扩散拆分 | 视频画面直接标出 Neural Network unified with Robotaxi 与 Human gesture recognition；发行说明确认 25 倍（25x）关键接管改善归因于百万级互联网视频预训练视觉编码器 |
| 长尾能力与外挂功能 | 未展开具体驾驶行为与车机功能更新 | 新增起终点端到端车队路线偏好学习（后续 v15 扩展全程）、个性化停车位历史与多车位可选、帽子/墨镜下 DMS 放宽、标志/小动物/碎屑/坑洼/深积水识别、学区与恶劣天气速度控制、Autoshift 档位统一、测速摄像头减速（同点位取消 2 次永久记忆跳过）及 Bike Rack Mode（目的地靠边且禁用倒车与后方雷达提示） |
| Reality View 产品定义 | 重点还原 1B 扩散、8 帧 36 fps、1/2 颗 AI4 TRIP、18 Hz 分 4 周期及 35% 降延迟 | 官方定位为替代离散显式信号、降低总算力的实时端到端可视化；Ashok 解释其用全息转向箭头与停车图钉向驾驶员传达意图，车机提供全屏、地图、分屏及 quiet mode 切换 |

### 2. 分母与商业口径核查：25x 改善与 Reality View 实证边界（✅ / ⚠️）

- ✅ 官方首发视频与首批推送规模核查（本工作台核查）：经抽帧核验 `@Tesla` 原帖附带的 46.5 秒 3840x2160 官方演示视频（无外挂字幕轨），前段实车画面明确打出 Self-Driving Engaged、Neural Network unified with Robotaxi 及夜间路口交警手势识别（Human gesture recognition）字样，后段展示车机中控屏实时生成的蓝色规划轨迹、50 限速提示与隧道/金门大桥通行视图。结合第三方车队追踪库 Teslascope 对 2026.38.6.11 的实测采样（截至 2026-11-25 录得 30 台美国 HW4 / AI4 Model Y 安装，均自 2026.38.5.13 / FSD v14.3.13 升级），68 次记录行程中 98.6% 启用 FSD、单次行程平均 FSD 占比达 94.6%，证实首批推送尚处于美国小范围早期车队灰度阶段，并非全量推送。
- ⚠️ 「25x 安全改善」的分母漂移与缺失账本核查（本工作台核查）：`@Tesla` 原帖写作「25x better handling of safety critical cases」，2026.38.6.11 发行说明进一步表述为「improving the critical intervention rate by 25x」，而 Phil Duan（`@pduan`）在 11-21 转发原帖时明确点出真实对比基准：v15 is 25x safer than v14 across the fleet，且单次行程难以感知，需聚合数百万英里（millions of miles）方能显现。→ ==该 25 倍倍率对比的是上一代 FSD v14 车队，而非“比人类驾驶安全 25 倍”==。横向对照 Tesla 官网截止 2026 年 10 月的 FSD (Supervised) Vehicle Safety Report（覆盖北美滚动 12 个月 9,483,790,215 英里实测）：v15 推送前 FSD 重大碰撞（安全气囊或不可逆约束装置触发，含碰撞前 5 秒内接管且不判责）间隔为 6,006,200 英里/次（1,579 次），约为手动驾驶开启主动安全（2,031,221 英里/次，17,775 次 / 361.05 亿英里）的 3 倍、全美平均水平（660,164 英里/次，498.97 万次 / 3.29 万亿英里）的 9 倍，轻微碰撞间隔约 1,760,823 英里/次。然而，Tesla 至今未公开 v14 车队“关键接管率（critical intervention rate）”的绝对分母基线、critical 的定量判定标准以及 v15 早期验证里程，外部无法核验 25x 是否已折算早期 EAP 路况偏差或包含内部影子模式加权。
- ⚠️ 「重点补短板清单」印证前代结构性欠账与监管压力（本工作台核查）：v15 将限速标识、学区控速、坑洼与深积水推至更新头条，恰好对应公开评测暴露的前代薄弱项——Electrek 援引比利时布鲁塞尔机构 Johanna.be 于 2026 年 9 月的实测显示，FSD 在 55% 的 30 km/h 限速区超速行驶（均速 44 km/h），且前序版本 2026.38.5.13 仍将“增加坑洼规避（Add pothole avoidance）”列在 Upcoming Improvements 中，学区违规亦正接受 NHTSA 请愿审查。将高频长尾失误与 25 倍接管改善捆绑发布，说明互联网视频预训练 UVE 主要补强了此前纯车队标注难以覆盖的稀有语义目标（小动物、道路碎屑、防滑链、积水与测速摄像头）。
- ⚠️ Reality View「同一模型渲染」的宣传简化与技术实质（本工作台核查）：`@aelluswamy` 面向车主解释称「The same end-to-end driving model also renders a realistic view」，并用全息箭头与停车图钉展示车辆意图；对照 Elon Musk 11-22 技术补述，车端实际并非同一个神经网络直接画图，而是 3B 驾驶决策模型与独立 ~1B 条件均值流扩散模型共享上游 UVE 特征并在下游分叉。==只要 1B 渲染分支保持下游单向只读，UI 美化（替换过往 Godot/Unreal 预置 3D 线框并节省几何显式信号算力）便能降低驾驶员监管疲劳；但早期用户已反馈拖拽视角与画面存在约 0.5 秒延迟，在真实前风挡外突变场景下存在“生成画面滞后于物理路况”的人机认知错位风险==。
- 本工作台推断：FSD v15 的核心商业意义不在车机画面观感升级，而在两笔账的初步跑通。第一笔是算力复用账：在 AI4 硬件锁死的前提下，以 UVE 统一 FSD、Robotaxi 与 Optimus 的视觉特征底座，并在车端用单一路线端到端流式渲染替代多路显式感知几何拼装，为无高精地图城市泛化压缩了单车推理与研发边际成本；第二笔是人机接管过渡账：在系统仍明确受限于 L2 Supervised（驾驶员担责）的阶段，通过 Reality View 直观暴露转向箭头、停车选点与起终点偏好，提升车主对系统意图的预判能力，从而维持 94% 以上的行程激活粘性。但从 25 倍“v14 相对改善”跨向 Robotaxi 商业化所需的无人监管（Unsupervised）门槛，真正决定胜负的仍是未披露的绝对关键接管里程及极端恶劣天气下的物理几何一致性，而非视觉界面逼真度。

### 观点与可反驳条件

- ==观点==：==Tesla FSD (Supervised) v15（2026.38.6.11）的 25 倍安全宣称是车队相对 FSD v14 关键接管率的倍率改善而非对比人类安全基线，且在 v14 绝对接管分母与 v15 实测里程尚未披露前，该指标不能直接外推为跨过 L4 无人驾驶门槛；Reality View 的本质是以共享 UVE 特征分叉出的 1B 扩散流替换旧有显式几何渲染，以降低总算力并提高 L2 监管意图透明度==。
- ==推翻条件==：
  1. 若 Tesla 在 2027 年 Q2 前于官网 Safety Report 或监管档案中公开经审计的 FSD v14 与 v15 绝对关键接管分母数据，证实 v15 在公开消费级车队（非影子模式加权）中实现超过 100 万英里/次关键接管且重大碰撞间隔同步跃升至接近或超过 2,500 万英里/次（相较当前 600.62 万英里基准提升 >=4 倍以上），则本文关于“25 倍相对倍率无法外推绝对无人化安全拐点”的审慎边界被推翻。
  2. 若 2027 年上半年全量推送后，第三方标准化路测（如 Johanna.be 或 IIHS/AAA 同类测试）证实 FSD v15 在 30 km/h 限速区与学区遵章率达到 >=95%、且 Reality View 经 DiT 层间交错优化后端到端延迟降至 <100 ms 并实现全行程端到端导航零路线偏离，则本文关于“长尾控速与可视化滞后仍制约 L2→L4 监管过渡”的判断被推翻。

---

## 原文摘录与一手信源存证

> 【信源巡检核心摘要】 Tesla 官方在 X 宣布 FSD v15 启动首批推送，升级端到端驾驶网络与共享视觉编码器（宣称安全关键接管场景改善 25 倍），并上线实时生成式可视化界面 Tesla Reality View 替代传统几何线框渲染。
> — 原文摘录，文字段落 1；证据 `digest-material-6be4a7b323bbf96f602060a0721bcad901d0b3ffcfca09a0308225d912bb06f6-excerpt-1@1`

一手材料：

- Tesla on X: FSD (Supervised) v15 rollout, 25x safety improvement and Tesla Reality View · Tesla (@Tesla) · [原站](https://x.com/Tesla/status/2124222447855743019) · [主体档案：Tesla](../entities/companies/Tesla.md) · [本地原件](../../../raw/8d24db6d1900f62477218318796761cb0851f032f02baebb21825f660f387dda)
  材料版本 `digest-material-8d24db6d1900f62477218318796761cb0851f032f02baebb21825f660f387dda@1`；获取方式 `tg_approved_full_text`。
  > Navigation for start & end of the trip now learns end-to-end from fleet route preferences. Later v15 releases will expand this to the entire route. — 原文提取
  > You also should notice better detection of signs, animals, debris, potholes and standing water, plus more natural speed handling in school zones and inclement weather. — 原文提取
- Elon Musk on FSD v15 Reality View, Universal Vision Encoder & Conditional Mean-Flow Diffusion Architecture · Elon Musk (@elonmusk) / Tesla · [原站](https://x.com/elonmusk/status/2124458557525397780) · [主体档案：Elon Musk](../entities/people/Elon%20Musk.md) / [主体档案：Tesla](../entities/companies/Tesla.md) · [本地原件](../../../raw/36e2e2e676a9a17426de0627c6f341ce52ca197d499c786161828af061d11fec)
  材料版本 `digest-material-36e2e2e676a9a17426de0627c6f341ce52ca197d499c786161828af061d11fec@1`；获取方式 `fxtwitter_api`。
  > We’ve had a ~pixel-perfect world model since last year, which is critical for synthetic data generation. — 原文提取
  > The (much) smaller version of that in the car is a conditional mean-flow model, based on the recent sequence of Tesla Universal Vision Encoder features, which are the same ones that are plugged into the 3B encoder model that produces the driving actions. — 原文提取

归属与范围：补全 @Tesla 官方 X 首发原帖（status/2124222447855743019）及 46.5 秒官方实车演示视频画面字幕核验，并与库内既有 @David\_yc607 第三方架构拆解形成增量分工：重点穿透核查 FSD v15.0.1（2026.38.6.11）车端发行说明、@pduan 车队统计分母口径（对标 v14 而非人类基线）、Tesla Vehicle Safety Report 历史碰撞分母以及 Tesla Reality View 在 L2 Supervised 监管边界下的产品化实质。

来源缺口：

- `not_disclosed`：Tesla 官方原帖（2124222447855743019）、Phil Duan（@pduan）补充说明及 FSD v15.0.1（2026.38.6.11）发行说明均未披露“25x 关键安全接管改善”的绝对基准值与分母细节：包括 FSD v14 车队基线关键接管里程（miles per critical intervention）、“safety critical cases / critical intervention”的精确判定阈值、v15 统计样本总里程及是否包含内部测试或影子模式权重。 [线索](https://x.com/Tesla/status/2124222447855743019)
- `not_disclosed`：Tesla Vehicle Safety Report 当前公开北美数据周期（截止 2026 年 10 月滚动 12 个月，600.62 万英里/重大碰撞）尚未单独拆分 v15 碰撞率，且 Reality View 车端实测几何幻觉率与端到端延迟分布（除 Elon Musk 提及当前偏高、拟通过 DiT 层间交错削减约 35% 外）未公布实测基准。 [线索](https://www.tesla.com/fsd/safety)

[返回赛道总览](../赛道总览.md#digest-6be4a7b323bbf96f) · [返回导读索引](README.md) · [主体档案库](../entities/README.md)
