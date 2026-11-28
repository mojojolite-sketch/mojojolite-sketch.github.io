---
title: "抢滩家庭机器人｜心言机器人说：PK的不是运动，“理解”是第一能力"
type: blog_digest
sector: "具身智能"
source: "心言机器人 (Bubbo 1 发布会 · 中国日报网 / Hugging Face Cylingo)"
published_at: "2026-11-04"
raw_sha256: "08e1374adef044440089220525e3c595d638a43a8c20465e79c176fecf9d05cb"
material_version: "digest-material-08e1374adef044440089220525e3c595d638a43a8c20465e79c176fecf9d05cb@1"
origin_url: "https://cn.chinadaily.com.cn/a/202610/30/WS6ae48b54e4b09a165c792b4d.html"
trigger_source: "十字路口Crossing"
trigger_url: ""
user_comments: ""
status: "processed_with_gaps"
primary_topic: "工业落地与商业模式"
secondary_topics: ["模型与策略架构"]
topic_confidence: 0.4506
stack_claims: [{"layer_id": "policy_architecture", "pattern_id": "hierarchical_fast_slow", "system": "Bubbo OS (S2 / S1 / S0 三层协同门控)", "entity": "心言机器人", "mechanism": "Bubbo OS 构建 S2 云端人物关系认知 + S1 端侧感知门控 + S0 本地安全执行快路，端侧 S1 同步核验信息时效、置信度与对象接受度以克制静音。", "metric_or_tradeoff": "儿童持画靠近到歪头互动数秒内完成，但 S1 门控误触发率与时延技术白皮书未公开", "source_url": "https://cn.chinadaily.com.cn/a/202610/30/WS6ae48b54e4b09a165c792b4d.html"}, {"layer_id": "dexterity_tactile", "pattern_id": "wheeled_industrial_arm", "system": "Bubbo 1 轮式毛绒交互本体", "entity": "心言机器人", "mechanism": "主动放弃高风险双足与家务抓取臂，采用 65 cm 轮式毛绒机身精简至 6 个驱动自由度，配备双 1.73 英寸眼部 AMOLED 表情屏及 13 类 26 个传感器。", "metric_or_tradeoff": "售价 9,499 元（前千名 7,999 元），规避了灵巧手磨损但无任何物理家务作业能力", "source_url": "https://cn.chinadaily.com.cn/a/202610/30/WS6ae48b54e4b09a165c792b4d.html"}, {"layer_id": "training_infra_deploy", "pattern_id": "edge_onboard_inference", "system": "Xinyuan-VL-2B / 14B 端云协同推理", "entity": "心言机器人", "mechanism": "依托测测 6,600 万用户与 6.6 亿次心理问答语料微调 Qwen2-VL-2B 端侧与 Qwen3-14B 云端基座，并打通智能戒指实时同步生理情绪指标。", "metric_or_tradeoff": "Xinyuan-VL-2B 在 MMB-EN-V11-Test 达 76.5 vs 基线 73.2，但买断价能否覆盖 24 小时云端推理 OpEx 存疑", "source_url": "https://cn.chinadaily.com.cn/a/202610/30/WS6ae48b54e4b09a165c792b4d.html"}]
---

<a id="digest-08e1374adef04444"></a>
# 抢滩家庭机器人｜心言机器人说：PK的不是运动，“理解”是第一能力

2026-11-04 · 心言机器人 (Bubbo 1 发布会 · 中国日报网 / Hugging Face Cylingo) · 有来源缺口

[本地原件归档](../../../raw/08e1374adef044440089220525e3c595d638a43a8c20465e79c176fecf9d05cb) · 固定材料版本 `digest-material-08e1374adef044440089220525e3c595d638a43a8c20465e79c176fecf9d05cb@1` · [一手原站](https://cn.chinadaily.com.cn/a/202610/30/WS6ae48b54e4b09a165c792b4d.html)

## 深度拆解与复核

- ==核心结论==：[心言机器人](../entities/companies/%E5%BF%83%E8%A8%80%E6%9C%BA%E5%99%A8%E4%BA%BA.md)（测测团队孵化，创始人任永亮）于 2026 年 10 月 29 日正式发售售价 9,499 元（前 1,000 名 7,999 元）的轮式毛绒具身智能体巴布（Bubbo 1），主动放弃双足家务抓取，把家庭场景第一壁垒定义为“在场感知与克制门控（知道什么时候不动）”；交叉核对 Hugging Face 公开仓库证实其确有 `Qwen3-14B` 与 `Qwen2-VL-2B` 泛心理/端侧多模态微调底座，但 `Bubbo OS` 端侧门控时延、`Xinyuan-VL-Emo` / `Xinyuan-LLM-Psy` 技术报告以及 `24小时` 在场推理下的云端算力分摊与复购商业模型均未公开披露。

#### 一、业务切口与核心机制

家庭场景的复杂性不来自工厂流水线般的刚性节拍，而来自多成员交互边界——同一动作在不同情绪与时间下既可能是陪伴，也可能是打扰。心言机器人的产品取舍集中在三个工程环节：

1. 物理本体做“减运动、增亲和”：巴布采用 65 厘米轮式毛绒机身（匹配三岁儿童平视高度）、GB 31701—2015 A 类亲肤纺织材质与圆润无棱角结构，精简至 6 个驱动自由度与自主回充，在眼部嵌入两块 1.73 英寸 466×466 分辨率 AMOLED 屏幕表达动态眼神；硬件上搭载 13 类共 26 个传感器及非医疗级摄像头心率检测，并与测测智能戒指打通生理情绪数据共享。
2. 无唤醒词持续在场与 S1 端侧门控：取消传统智能音箱的“唤醒词等待”，改为依靠视觉、听觉与空间距离传感器持续在场；核心难点在于端侧 S1 门控校验——当云端给出互动建议时，端侧 S1 同步核验信息时效、置信度、场景适宜度及对象当前接受度，任一项不满足即关闭门控保持静音（例如家人休息或无人时段不主动用声光刷存在感）。
3. 数据—模型—系统三层能力栈：底层依托 2013 年以来测测平台累计超 6600万 注册用户与 6.6 亿次 AI 问答形成的情感关系语料及心理学专家团队；模型层以通过国家网信办备案的心元大模型（含文章所述多智能体、语音交互、Xinyuan-VL-Emo、Xinyuan-LLM-Psy 及 2025 年基于 Qwen3 开源的泛心理基座）为内核；系统层通过 `Bubbo OS` 构建 S2 云端人物关系认知 + S1 端侧感知门控 + S0 本地安全执行快路，使儿童持画靠近到歪头对话的联动控制在数秒内完成，并在儿童场景切入“引导式追问”与疑似跌倒待核实提醒。

#### 二、核心数据核查、口径纠偏与工程边界

场景与利益披露：原触发稿（微信公众号“十字路口Crossing”，作者壹小姐 / 编辑 Koji / 排版 NCon）为巴布上市初期的深度产品专访稿，整体采信创始团队产品叙事；本工作台对照中国日报网 10 月 30 日现场报道、`xyrobot.com` 官网与 Hugging Face `Cylingo` 组织开源仓库核查如下：

| 核查项目 | 原文口径与引用来源 | 一手源交叉核对结果 | 本工作台核查与工程边界 |
| --- | --- | --- | --- |
| 硬件参数、发售价与合作生态 | 65 cm 身高、13 类 26 个传感器、6 自由度双表情屏、9,499 元（前千名 7,999 元）、测测 6600万 用户 | [中国日报网现场稿](https://cn.chinadaily.com.cn/a/202610/30/WS6ae48b54e4b09a165c792b4d.html) 与 [xyrobot.com](https://www.xyrobot.com/) 吻合；披露 8 月中旬量产下线，签约首程机器人、京东零售等伙伴；[Cylingo 官网](https://www.cylingo.com/) 确认心言集团法律主体及心理社区背景 | ✅ 上市发布、硬件规格与发售价经一手官媒及官网核实；但首批千台实际下单与交付履约率未披露 |
| 心元开源矩阵与技术命名 | 点名 `Xinyuan-VL-Emo`、`Xinyuan-LLM-Psy` 与 2025 年基于 Qwen3 优化的开源心元基座 | Hugging Face `Cylingo` 组织确已 Apache-2.0 开源 `Xinyuan-LLM-14B-0428`（基于 `Qwen3-14B-Base`）与 `Xinyuan-VL-2B`（基于 `Qwen2-VL-2B-Instruct`，500 万+多模态数据，MMB-EN-V11-Test 达 76.5 vs 基线 73.2） | ⚠️ 核心底座微调能力核实；但文中 `Xinyuan-VL-Emo`、`Xinyuan-LLM-Psy` 与 `Bubbo OS` S2/S1/S0 白皮书及门控时延未公开发布，无法复现其端侧防打扰准确率 |
| 市场空间与 `LOVOT` 对标 | 称全球家庭陪伴机器人破 480 亿美元、国内教育陪伴超 10 亿美元（同比 +89%）、双职工超 70%；引华泰证券测算 GROOVE X `LOVOT` 三年留存 90%、日均互动超 1小时 | `中国日报网`未覆盖上述行业测算数字；480 亿美元为广义家庭服务/消费机器人汇总口径，与近万元级情感陪伴单品可触达价格带存在显著分母跨度 | ⚠️ 90% 留存与 89% 增速属二手转述与券商测算；且 `24小时` 连续在场感知依赖端云协同，8999–9499 元一次性买断能否覆盖长期 S2 云端推理与维护 OpEx 仍是未解商业约束 |

本工作台推断，家庭非结构化环境中最先突破产品化门槛的确实是「低自由度、非作业型、高容错」的情感与儿童交互节点（避开抓握脆性与 30 万次灵巧手磨损陷阱）；但巴布的真正门槛在于上市后第 6–12 个月的复购与云服务续费转化——若没有类似日本 GROOVE X 的月度软件维护订阅（Care Plan）支撑云端多模态认知与毛绒外壳运维，单纯靠硬件毛利难以跑通 24小时全天候云端大模型推理的单位经济模型。

#### 三、赛道横向对比与定位

| 家庭 / 陪伴具身主体 | 形态与硬件取舍 | 核心技术重心 | 定价与商业化阶段 | 核心商业 / 工程瓶颈 |
| --- | --- | --- | --- | --- |
| [心言机器人](../entities/companies/%E5%BF%83%E8%A8%80%E6%9C%BA%E5%99%A8%E4%BA%BA.md) (`Bubbo 1`) | 65 cm 轮式毛绒、6 DOF、双表情屏、26 传感器 | `Bubbo OS`（S2/S1/S0 门控）+ 心元心理大模型与测测用户语料 | 9,499 元（优惠 7,999 元），2026-10-29 发售 | 端侧误触发门控稳定性、近万元家庭付费渗透率与云端推理 OpEx 回收 |
| OlloBot (`OlloNi SS1`) | 消费级情感陪伴机器人（IFA 柏林创新荣誉奖） | 多模态情感交互与家庭智能终端定位 | 推进 CES 2027 商业化，定价与融资未披露 | 渠道铺货与长期留存尚待公开量产验证 |
| `GROOVE X` (`LOVOT`) | 无双手家务功能的高触感轮式陪伴机身 | 传感器融合与“被爱感”生命拟态反馈 | 高硬件售价 + 强制月度软件订阅服务（日本市场已运行多年） | 中国区高客单价接受度与纯情感无工具属性天花板 |
| [Xiaomi Tech](../entities/companies/Xiaomi%20Tech.md) / 通用家庭人形 | 全尺寸双足/移动双臂操作平台 | 大规模 VLA 轨迹预训练（如 `Xiaomi-Robotics-1`）与长程家务技能 | 仍处青年公寓试运营与研发投入阶段 | 跨房间 50 项任务成功率、安全碰撞及成本远未达 C 端零售区间 |

### 观点与可反驳条件

- ==观点==：心言机器人避开高难度双足家务操作、用「6 自由度轮式毛绒 + 端侧 S1 门控克制」切入儿童与家庭情感陪伴是务实的功能减负取舍（实务减负），其差异化也不在通用硬件制造，而在测测积累的心理对话语料与 `Qwen` 微调垂类模型；但近万元零售价与 `24小时` 在场定位之间存在隐性冲突——一旦缺乏公开披露的持续订阅收费或可验证的半年以上家庭留存曲线，巴布仍可能面临消费级 AI 硬件常见的“前三个月新鲜期后吃灰”风险。
- ==推翻条件==：
  1. ① 若巴布（Bubbo 1）上市后 6 个月内公布第三方可审计的活跃设备后台统计（如活跃用户日均自主交互时长稳定 >= 45 分钟且 180 天留存率 >= 75%，并披露云端 S2 推理成本与硬件毛利足以覆盖全生命周期），则「近万元情感硬件难以跨过半年留存折旧与云算力 OpEx 压力」的判断将被推翻；
  2. ② 若心言机器人公开 `Bubbo OS` 端侧门控基准评测与 `Xinyuan-VL-Emo` / `Xinyuan-LLM-Psy` 权重，证明 S1 门控在真实多口之家噪音与遮挡环境下的误打扰率低于 2% 且带订阅服务的客单续费率高于 60%，则「系统门控工程护城河尚未经过真实家庭长尾压力验证」的保留观点将被推翻。

---

## 原文摘录与一手信源存证

> 站在2026年的今天，具身智能正在进入更多真实场景。从工厂里的分拣、搬运机械臂，到仓库里穿梭在货架间的轮式机器人，运动能力成为一个重要考量。
> — 原文摘录，PDF p.1；证据 `digest-material-08e1374adef044440089220525e3c595d638a43a8c20465e79c176fecf9d05cb-excerpt-1@1`

> 工厂的任务目标、流程标准和评价指标是清晰的，而家庭不是。家庭成员繁多、关系复杂、生活节奏多样，机器人同一个动作在不同时间、不同关系、不同状态下，可能是帮助，但也可能是打扰。
> — 原文摘录，PDF p.1；证据 `digest-material-08e1374adef044440089220525e3c595d638a43a8c20465e79c176fecf9d05cb-excerpt-2@1`

> 一台机器人想要真正走进家庭，它面对的首要难题是“理解”能力。理解眼前人的情绪，理解当下发生了什么，在理解之后做出判断：是否应该介入，以及以何种方式介入。
> — 原文摘录，PDF p.1；证据 `digest-material-08e1374adef044440089220525e3c595d638a43a8c20465e79c176fecf9d05cb-excerpt-3@1`

一手材料：

- 心言机器人基于Bubbo OS打造伙伴式交互 首次应用于具身家庭智能体“巴布” · 中国日报网 · [原站](https://cn.chinadaily.com.cn/a/202610/30/WS6ae48b54e4b09a165c792b4d.html) · [主体档案：心言机器人](../entities/companies/%E5%BF%83%E8%A8%80%E6%9C%BA%E5%99%A8%E4%BA%BA.md) / [主体档案：中国日报网](../entities/labs/%E4%B8%AD%E5%9B%BD%E6%97%A5%E6%8A%A5%E7%BD%91.md) · [NotebookLM](https://notebook.google.com/notebook/33f0076b-fc09-42cc-9cd9-fecfb847ce1c) · [Drive](https://drive.google.com/file/d/1NPl5P9N4Ft6jNvIR80L83VJjjSVlGibX/view?usp=drivesdk)
  材料版本 `digest-material-437e1b878bb7c4ef5b0eaf6b0da28c671896c74be0f56d22607076326b5f3b71@2`；获取方式 `http_html`。
  > 中国日报10月30日电（记者 程钰）10月29日，心言机器人在北京举办“神奇伙伴”新品见面会暨年度人文科技对谈，正式发布具身家庭智能体“巴布（Bubbo 1）”。来自科技界、产业界、学界及媒体界的嘉宾共同见证第一代心言机器人的亮相，产品即日起在京东等官方渠道正式发售。 — 原文提取
  > 心言机器人公司成立于2025年，专注家庭情感智能机器人的研发。本次发布会上推出的巴布（Bubbo 1），基于心言自研的Bubbo OS，实现了全新的伙伴式交互，从“外部”视角构建起一套“Family Agent”，识别家庭中的每一位成员并关注成员之间的关系。巴布既为老人提供贴心陪伴，也承接孩子的好奇心，被称为家中的“神奇伙伴”。 — 原文提取
- Bubbo - 心言机器人官方网站 · 北京心言机器人科技有限公司 · [原站](https://www.xyrobot.com/) · [主体档案：心言机器人](../entities/companies/%E5%BF%83%E8%A8%80%E6%9C%BA%E5%99%A8%E4%BA%BA.md) · [本地原件](../../../raw/cdc9c235b7bb5e0e95cce0acdf74b721ea36856231987c89dad6887f79d4324f)
  材料版本 `digest-material-cdc9c235b7bb5e0e95cce0acdf74b721ea36856231987c89dad6887f79d4324f@1`；获取方式 `http_full_text`。
  > 将触摸等互动信号与当下情境结合，以动态眼部表情传达回应。一个眼神，让家人更容易读懂这一刻的互动。 — 原文提取
- Cylingo/Xinyuan-LLM-14B-0428 模型卡 · Cylingo Group (心言集团) · [原站](https://huggingface.co/Cylingo/Xinyuan-LLM-14B-0428) · [主体档案：Cylingo (心言集团)](../entities/companies/Cylingo%20%28%E5%BF%83%E8%A8%80%E9%9B%86%E5%9B%A2%29.md) · [本地原件](../../../raw/bfe87feceab57310c43d2401cfae66c90abbf3d581f6702fdf1f3e365e0ff9d8)
  材料版本 `digest-material-bfe87feceab57310c43d2401cfae66c90abbf3d581f6702fdf1f3e365e0ff9d8@1`；获取方式 `http_full_text`。
  > ## Xinyuan-LLM-14B-0428 Highlights Xinyuan-LLM-14B-0428 is the first foundational model in the mental health industry, launched by Cylingo Group. — 原文提取
  > 1. \*\*The First All-Scenario Mental Health Support Foundation Model with 24/7 Intelligent Capabilities\*\*   2. \*\*Covering Diverse Mental Health Scenarios and Building Personalized Psychological Profiles\*\*   3. — 原文提取
- Cylingo/Xinyuan-VL-2B 端侧多模态模型卡 · Cylingo Group (心言集团) · [原站](https://huggingface.co/Cylingo/Xinyuan-VL-2B) · [主体档案：Cylingo (心言集团)](../entities/companies/Cylingo%20%28%E5%BF%83%E8%A8%80%E9%9B%86%E5%9B%A2%29.md) · [本地原件](../../../raw/5e34b086c50bd2a9d58b3c6626979268dc50c5647a9ef7194a19629468210e3d)
  材料版本 `digest-material-5e34b086c50bd2a9d58b3c6626979268dc50c5647a9ef7194a19629468210e3d@1`；获取方式 `http_full_text`。
  > \*\*Xinyuan-VL-2B\*\* is a high-performance multimodal large model for the end-side from the Cylingo Group, which is fine-tuned with \`Qwen/Qwen2-VL-2B-Instruct\`, and uses more than 5M of multimodal data as well as a small amount of plain text data. — 原文提取
  > It performs well on several authoritative Benchmarks. — 原文提取

归属与范围：完成来源分诊并保留中国日报网新品发布会一手新闻稿；新增抓取心言机器人官网（xyrobot.com）、心言集团官网（cylingo.com）及Hugging Face Cylingo组织下Xinyuan-LLM-14B-0428与Xinyuan-VL-2B模型卡快照；核对9499元/7999元定价、13类26个传感器与Qwen基座微调路径，同时标出Xinyuan-VL-Emo/LLM-Psy及Bubbo OS白皮书未公开、LOVOT留存指标与端侧门控实测待核验。

来源缺口：

- `unavailable`：心言机器人10月29日“神奇伙伴”新品见面会完整演讲幻灯片、Bubbo OS三层系统架构（S2/S1/S0）技术白皮书，以及文章点名的Xinyuan-VL-Emo、Xinyuan-LLM-Psy专用模型未在Hugging Face Cylingo组织或官网独立公开发布全文与权重报告（公开可见为Xinyuan-LLM-14B-0428、Xinyuan-VL-2B与Xinyuan-QS-72B），保留技术文档原件缺口。
- `pending_verification`：巴布S1端侧门控误触发率与响应时延、全双工自适应分级对话实测效果、非医疗级心率监测精度，以及华泰证券关于日本GROOVE X LOVOT三年留存率90%、日均互动逾1小时与国内教育陪伴机器人市场超10亿美元（+89%）的引述数据，保留为发布会披露与研报转引口径，尚未经第三方独立长周期家庭实测复核。

[返回赛道总览](../赛道总览.md#digest-08e1374adef04444) · [返回导读索引](README.md) · [主体档案库](../entities/README.md)
