---
title: "Investing in Eka Robotics"
type: blog_digest
sector: "具身智能"
source: "Andreessen Horowitz (a16z)"
published_at: "2026-10-20"
raw_sha256: "72f6e21a179dcdbb9e32e3def7f66cba65c57c0cf232935d8802f4e52a989b81"
material_version: "digest-material-72f6e21a179dcdbb9e32e3def7f66cba65c57c0cf232935d8802f4e52a989b81@1"
origin_url: "https://a16z.com/investing-in-eka-robotics/"
trigger_source: "Andreessen Horowitz (a16z)"
trigger_url: "https://a16z.com/investing-in-eka-robotics/"
user_comments: ""
status: "processed_with_gaps"
primary_topic: "模型与策略架构"
secondary_topics: ["工业落地与商业模式"]
topic_confidence: 0.3922
---

<a id="digest-72f6e21a179dcdbb"></a>
# Investing in Eka Robotics

2026-10-20 · Andreessen Horowitz (a16z) · 有来源缺口

[本地原件归档](../../../raw/72f6e21a179dcdbb9e32e3def7f66cba65c57c0cf232935d8802f4e52a989b81) · 固定材料版本 `digest-material-72f6e21a179dcdbb9e32e3def7f66cba65c57c0cf232935d8802f4e52a989b81@1` · [一手原站](https://a16z.com/investing-in-eka-robotics/)

## 深度拆解与复核

==口径与利益披露==：本文《Investing in Eka Robotics》（2026-10-20，Andreessen Horowitz (a16z) 官网与 Substack 同步发布）由 Raghu Raghuram 与 Yoko Li 联合署名。作为 Eka Robotics 本轮 A 轮领投方与股东，a16z 具有明确激励将「触力协同设计 + 仿真强化学习」塑造为超越纯视觉 VLA 的下一代物理 AI 主流范式；本工作台将原文技术论证、第三方媒体融资口径与实验室节拍指标拆开核查。

### 一、 9,518 字英文备忘录一级深度拆解：VFA 软硬协同与仿真 RL 路线

1. 纯视觉/语言 VLA 在接触富集场景的结构性失效：a16z 原文指出，现代视觉、语言与世界模型已大幅提升机器人判断「应该做什么（what to do）」的能力，但「知道该做什么」并不等于物理世界能完成动作。在制造业、电子装配、物流与食品加工等非结构化场景中，零件移位、材料形变、打滑及连接器公差偏差是常态；一旦爪尖进入接触阶段（如抓取树莓或鸡蛋不捏碎、玻璃杯微滑瞬间加力、盲拧寻找螺纹、插拔连接器时判断边缘是否卡滞或咬死并决定加压、微旋还是回撤），核心物理信息不再来自摄像头像素，而来自接触力、剪切滑移、高频振动与本体关节感知。
2. 拒绝生物像素级复刻，转向 Vision-Force-Action (VFA) 协同设计：人手拥有约 24 个自由度以及分布于指尖和掌心的数千个特化感受器，但原文明确判断无法在机械手中逐一重建数千颗生物传感器，否则会引爆布线复杂度、BOM 成本、板载算力与故障率。Eka Robotics 的解法是打造专有 Vision-Force-Action（VFA）模型，并将模型、力传感器、控制器与机械手硬件联合设计，使物理接触本身成为直接进入策略回路的原生信号——打滑可瞬时闭环纠偏，表面接触可用于辅助定位，插接阻力直接调节运动轨迹而非触发停机报错，目标是跨材料、物体与配合公差免工程师重调。
3. 仿真 RL 替代人类遥操示范（算力换经验）：Raghu Raghuram 与 Yoko Li 点破当前机器人模仿学习依赖人类遥操的两大死穴：第一，耗时随规模线性膨胀，无法让人类演示 100 万次抓鸡蛋的微差边界；第二，人类极难有效示范「如何失败并从失败中恢复」。Eka 在物理仿真器中通过强化学习让虚拟机器人练习数百万次物体位姿、摩擦系数与接触失效变体，使物理操作经验随算力而非人类工时扩张。为攻克摩擦与执行器建模误差引发的 sim-to-real 鸿沟，Eka 依赖两位创始人过去十年的互补积累：MIT CSAIL Improbable AI Lab 副教授 Pulkit Agrawal 深耕计算感官运动学习、力感知灵巧操作及策略仿真迁移；前 Google DeepMind 研究员 Tuomas Haarnoja 曾在 UC Berkeley 联合提出现代强化学习核心算法 Soft Actor-Critic（SAC），并在 DeepMind 主导仿真训练复杂人形动作并成功部署至真机。

### 二、 一手备忘录 vs 二手转述口径隔离与工程复核

- ✅ 一手原文直接披露口径（本工作台核查）：通读库内完整归档的 9,518 字符英文备忘录（a16z.news/p/investing-in-eka-robotics），原文直接证实的核心事实仅为：a16z 领投 Eka Robotics 的 Series A（未在正文写明具体美元金额或估值），以及 Eka 在实验室上料与料箱拣选（induction and bin-picking）测试中达到最高 1,500 次/小时（1,500 picks per hour），相当于人类速度的 2.5 倍，并展示了易碎物、光滑工业件及高接触插接任务能力（检索核验第三方通稿另提及 1 kg 以内多物体抓取成功率 >95%）。
- ⚠️ 融资额与 14.5 亿美元估值属二手媒体转述口径（本工作台核查）：本次巡检摘要与站内兄弟中文编译导读 [Eka Robotics 估值 14.5 亿美元：机器人苦练‘手感’，a16z 押注下一代 Physical AI](Eka%20Robotics%20%E4%BC%B0%E5%80%BC%2014.5%20%E4%BA%BF%E7%BE%8E%E5%85%83%EF%BC%9A%E6%9C%BA%E5%99%A8%E4%BA%BA%E8%8B%A6%E7%BB%83%E2%80%98%E6%89%8B%E6%84%9F%E2%80%99%EF%BC%8Ca16z%20%E6%8A%BC%E6%B3%A8%E4%B8%8B%E4%B8%80%E4%BB%A3%20Physical%20AI.md) 所载「1.5 亿美元（\$150M）A 轮、F-Prime 联合领投、投后 14.5 亿美元（\$1.45B）估值」，以及检索核验补充的此前约 \$11M 种子轮（Obvious Ventures 与 E14 Fund 领投，A 轮跟投方含 Samsung Next、Glasswing Ventures、MFV Partners、Bison Ventures），均源自 TechCrunch、PitchBook 等二手科技媒体与数据库，并未直接写进 a16z 英文备忘录正文。在核得公司官网成交声明或 SEC Form D 文件前，本工作台严格保留「二手多源转述」隔离标签。
- ⚠️ 实验室 1,500 次/小时峰值与产线全班次兑现边界（本工作台推断）：==1,500 次/小时（约 2.4 秒/次周期含运动与释放，折合人类约 600 次/小时的 2.5 倍）是特定分拣工况的实验室峰值，a16z 原文亦坦承「在完整生产班次中持续维持该性能是下一道测试」==；真实电子装配插接涉及柔性线束、接触器磨损、温度导致的力传感器零点漂移及长达数千小时的 MTBF 要求，若无法将现场集成调参工时压至接近零，单项目交付毛利仍会被长尾非标工程吞噬。

| 对比维度 | a16z 一手英文备忘录直接披露 | 第三方媒体 / 数据库补充口径（TechCrunch / PitchBook / Vibehood） |
| :--- | :--- | :--- |
| 投资与估值 | 确认 Andreessen Horowitz (a16z) 领投 Series A，未列具体金额与估值 | 1.5 亿美元（\$150M）A 轮（a16z 与 F-Prime 联合领投）；投后 14.5 亿美元（\$1.45B）；前期约 \$11M 种子轮 |
| 创始人与技术 | MIT CSAIL Pulkit Agrawal + Tuomas Haarnoja（SAC 共同发明人 / DeepMind）；VFA 软硬协同 + 物理仿真 RL | 总部剑桥市（2025 年创立）；Samsung Next、Obvious Ventures、E14 Fund 等参投 |
| 实测指标 | 实验室分拣最高 1,500 次/小时（2.5 倍人类速度）；覆盖易碎物、光滑件及接触插接 | 报道补充 1 kg 以内物体抓取成功率超 95% |

### 观点与可反驳条件

- ==观点==：==Eka Robotics 把接触力设为与视觉平级的一等原生模态，并通过 VFA 软硬协同与仿真 RL 绕开人类遥操数据天花板，精准命中了当前纯视觉 VLA 在电子插接与精密装配的物理短板==；但仅凭实验室 1,500 次/小时峰值尚无法支撑 \$1.45B（14.5 亿美元）投后估值对工业级稳定交付的提前定价，真正决定估值兑现的是真实产线全班次稼动率与零集成成本。
- ==推翻条件==：
  1. 真实产线全班次稼动率与节拍兑现度：若至 2027 年底 Eka Robotics 在外部付费工厂连续 8 小时以上完整生产班次中，插接/装配有效节拍仍无法达到 >=1,200 次/小时且班次无故障稼动率低于 99%（或每切换一类新部件仍需工程师现场重调超过 24 小时），则「仿真 RL 跨越 sim-to-real 并打破集成项目经济瓶颈」的判断将被证伪。
  2. 无专有力控协同的通用 VLA 追平或商业复购乏力：若 2027 年前主流通用 VLA 模型仅靠腕部外购标准传感器即可在电子精密插接与易碎物操作基准上以 >=95% 成功率跑出 >=1,200 次/小时，或 Eka 首批试点客户商业复购转化率低于 30%，则「VFA 软硬协同构筑不可替代护城河」的立论将被推翻。

---

## 原文摘录与一手信源存证

> 【信源巡检核心摘要】 Yoko Li 与 Raghu Raghuram 于 2026 年 10 月 20 日联合署名的 a16z 官方投资备忘录（同步分发于 a16z Substack），宣布与 F-Prime 联合领投物理 AI 初创公司 Eka Robotics 1.5 亿美元 A 轮融资（投后估值约 14.5 亿美元）。
> — 原文摘录，文字段落 1；证据 `digest-material-72f6e21a179dcdbb9e32e3def7f66cba65c57c0cf232935d8802f4e52a989b81-excerpt-1@1`

一手材料：

- Investing in Eka Robotics · Andreessen Horowitz (a16z) · [原站](https://a16z.com/investing-in-eka-robotics/) · [主体档案库](../entities/README.md) · [本地原件](../../../raw/75d7c5af64e42053c08c099956c32d1da576f23a083ce04d94202c16889b889f)
  材料版本 `digest-material-75d7c5af64e42053c08c099956c32d1da576f23a083ce04d94202c16889b889f@1`；获取方式 `web_search_verified_primary`。
  > While modern vision, language, and world models help robots understand what to do, knowing what should happen is not physically making it happen. — 原文提取
  > Eka builds a proprietary Vision-Force-Action (VFA) model co-designed with force-sensing grippers, controllers, and hardware so physical contact itself serves as a native feedback signal—allowing real-time slip correction, surface contact localization, and resistance-adaptive insertion without per-part engineering retuning. — 原文提取
- Investing in Eka Robotics - by Raghu Raghuram and Yoko Li · Raghu Raghuram and Yoko Li / a16z · [原站](https://www.a16z.news/p/investing-in-eka-robotics) · [主体档案：Raghu Raghuram](../entities/people/Raghu%20Raghuram.md) / [主体档案：Yoko Li](../entities/people/Yoko%20Li.md) / [主体档案：a16z Newsletter](../entities/funds/a16z%20Newsletter.md) · [NotebookLM](https://notebook.google.com/notebook/cac99041-d3b9-449e-a192-12bb4b1ad391) · [Drive](https://drive.google.com/file/d/1Fx0X4AXLBg8IWvFcgCz_ViM-vn4YUxoo/view?usp=drivesdk)
  材料版本 `digest-material-abf1a732f8eb96b73c0a6a30868178b61623684472c4aaf0afc9c9bcca8f9d8f@1`；获取方式 `http_full_text`。
  > The human hand may be the most economically important machine ever built. — 原文提取
  > Much of the world’s physical economy—from manufacturing and electronics assembly to logistics and food production—still depends on people using their hands. — 原文提取
- Eka Robotics Official Website · Eka Robotics · [原站](https://www.ekarobotics.com/) · [主体档案：Eka Robotics](../entities/companies/Eka%20Robotics.md) · [本地原件](../../../raw/ceff44d3d1b018dbd234faba5b14c76dd598283b5d6904bd5b18708ca761f4d7)
  材料版本 `digest-material-ceff44d3d1b018dbd234faba5b14c76dd598283b5d6904bd5b18708ca761f4d7@1`；获取方式 `web_search_verified_primary`。
  > - Mission: Bridging the generality-performance gap in robotics to deploy scalable, general-purpose dexterous physical intelligence for contact-rich industrial manufacturing, electronics assembly, and logistics tasks traditionally restricted to human hands. — 原文提取
  > - Core Model (Vision-Force-Action, VFA): Proprietary VFA foundation model pairing visual perception with high-frequency real-time tactile and force feedback from custom force-sensing robotic hands/grippers. — 原文提取

归属与范围：基于库内完整归档的 Raghu Raghuram 与 Yoko Li 9,518 字符英文备忘录（a16z.news/p/investing-in-eka-robotics）及检索核验：a16z 官方正文确认领投 Eka Robotics A 轮并系统拆解了 Vision-Force-Action (VFA) 软硬协同、物理仿真 RL 经验随算力扩展路线及实验室最高 1,500 次/小时（2.5 倍人工）操作节拍，同时明确其尚未跨过完整生产班次验证；而 \$150M A 轮规模、F-Prime 联合领投、\$1.45B 投后估值与此前 ~\$11M 种子轮属于 TechCrunch/PitchBook 等第三方媒体转述口径，已做分层隔离并与站内中文编译导读互链，同时补充登记 Eka Robotics 官网入口（https://www.ekarobotics.com/）。

来源缺口：

- `pending_verification`：a16z 官方 Substack 9,518 字符英文原文（a16z.news/p/investing-in-eka-robotics）确认领投 Eka Robotics A 轮，但正文本身未披露 \$150M 融资金额、F-Prime 联合领投、\$1.45B 投后估值及此前约 \$11M 种子轮；上述数字源自 TechCrunch、PitchBook 等第三方转述与投融资数据库，仍待公司官方成交公告或 SEC Form D 核验。 [线索](https://www.a16z.news/p/investing-in-eka-robotics)
- `not_disclosed`：Eka Robotics 尚未公开定制力感知机械手传感器构成与单套硬件 BOM 成本、真实制造与电子装配产线连续 8 小时以上完整生产班次的无故障稼动率及报错率，以及跨 SKU 换型的工程集成周期。 [线索](https://www.ekarobotics.com/)

[返回赛道总览](../赛道总览.md#digest-72f6e21a179dcdbb) · [返回导读索引](README.md) · [主体档案库](../entities/README.md)
