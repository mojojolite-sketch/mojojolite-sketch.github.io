---
title: "Eka Robotics 估值 14.5 亿美元：机器人苦练‘手感’，a16z 押注下一代 Physical AI"
type: blog_digest
sector: "具身智能"
source: "Eka Robotics 官方公告 · a16z (Raghu Raghuram & Yoko Li)"
published_at: "2026-10-21"
raw_sha256: "d535506b9883b2f01e9ef759c05fdf2cd64fb5fee0fe9ee01cb64b6c85e4419d"
material_version: "digest-material-d535506b9883b2f01e9ef759c05fdf2cd64fb5fee0fe9ee01cb64b6c85e4419d@1"
origin_url: "https://www.ekarobotics.com/blog/eka-robotics-raises-150m-to-build-superhuman-intelligence-for-the-physical-world"
trigger_source: "Vibehood"
trigger_url: ""
user_comments: ""
status: "processed_with_gaps"
primary_topic: "本体、灵巧手与触觉硬件"
topic_confidence: 0.6004
---

<a id="digest-d535506b9883b2f0"></a>
# Eka Robotics 估值 14.5 亿美元：机器人苦练‘手感’，a16z 押注下一代 Physical AI

2026-10-21 · Eka Robotics 官方公告 · a16z (Raghu Raghuram & Yoko Li) · 有来源缺口

[本地原件归档](../../../raw/d535506b9883b2f01e9ef759c05fdf2cd64fb5fee0fe9ee01cb64b6c85e4419d) · 固定材料版本 `digest-material-d535506b9883b2f01e9ef759c05fdf2cd64fb5fee0fe9ee01cb64b6c85e4419d@1` · [一手原站](https://www.ekarobotics.com/blog/eka-robotics-raises-150m-to-build-superhuman-intelligence-for-the-physical-world)

## 深度拆解与复核

- ==核心结论==：本篇 Vibehood（2026-10-21）作为库内前序 [Investing in Eka Robotics](Investing%20in%20Eka%20Robotics.md)（2026-10-20 a16z 一手备忘录拆解）的增量补充视角，核心价值在于带入了 a16z 备忘录未载的硬件工程账本与估值数字；==本工作台新抓回 Eka Robotics 官网 A 轮公告，正式实证确认 1.5 亿美元（\$150M）A 轮融资额与 a16z、F-Prime 联合领投阵容，同时核查锁定「14.5 亿美元投后估值、低于 1,000 美元力感知夹爪、500 万次额定寿命（目标 2,000 万次）、最高 1 公斤负载与 >95% 成功率」均源自 TechCrunch 同日专访口述==。按 1,500 次/小时双班作业折算，500 万次寿命仅能支撑约 208 天，距离工业标准臂 2,000 万次尚存 4 倍耐用差距；真正决定其能否兑现 14.5 亿美元估值的，是以低自由度力控夹爪绕开人形灵巧手 30 万次磨损陷阱后，在产线整年免重调稳定运行的能力。

#### 一、业务切口与核心机制

1. 接触后「最后 1 毫米」的物理信息断层：纯视觉 VLA（视觉—语言—动作）与世界模型可识别插座坐标、树莓外观或任务规划（如通用大模型 Astra 理解洗碗后收盘子），却无法在手指接触瞬间回答边缘是否卡滞、物体是否开始剪切滑移、螺丝螺纹是否咬死，以及应当加大推力、微调角度还是立即回撤。人类手部拥有约 24 个自由度与指尖/掌心数千个感受器，结合肌肉关节本体感觉实现抓取鸡蛋不碎、玻璃杯滑脱瞬间收紧；但 Raghu Raghuram 与 Yoko Li 在 a16z 备忘录中明确指出，工程上不可能在机械手逐一重建数千颗生物受体，否则会引爆布线、算力与故障率。
2. Vision-Force-Action（VFA）软硬协同与物理自博弈：Eka Robotics（2025 年由 MIT CSAIL Improbable AI Lab 副教授 Pulkit Agrawal 与 UC Berkeley Soft Actor-Critic 算法即 SAC 共同提出者、前 Google DeepMind 研究员 Tuomas Haarnoja 创立，总部位于美国麻省剑桥）将力反馈作为与视觉并列的一等输入模态，并把模型、力传感夹爪与控制器协同设计，使接触阻力直接调节运动轨迹而非触发停机报错。训练端仿照 AlphaZero 零人类示范自博弈路线，用物理仿真强化学习在数分钟内生成数千小时接触、摩擦与滑落失败恢复经验，打破人类遥操既昂贵又极少示范「如何从失败中恢复」的数据天花板，让机器人经验随算力规模扩展。
3. 本篇独有增量披露（相比前序 a16z 备忘录）：前序 a16z 英文稿仅披露 VFA 路线及实验室 1,500 次/小时（人工对照约 600 次/小时的 2.5 倍）峰值；本篇 Vibehood 稿补充的商业与硬件参数直接指向工厂部署经济账——测试对象最高重 1 公斤、抓取成功率超 95%、演示拧入灯泡与插入电线、定制夹爪硬件成本压低至 1,000 美元以下、当前额定工作循环 500 万次并锚定工业机械臂 2,000 万次长远标准，以及 2025 年 5 月约 1,100 万美元种子轮叠加本轮 1.5 亿美元后累计融资约 1.61 亿美元。

#### 二、核心数据核查、口径纠偏与工程边界

场景与利益披露：触发来稿为行业创投媒体 Vibehood（2026-10-21）编译分析，文末附有创业融资对接引流入口；上游一手材料包括领投方 [a16z](../entities/funds/a16z.md)（Raghu Raghuram 与 Yoko Li，2026-10-20）英文备忘录，以及本工作台新抓回的 [Eka Robotics 官网 1.5 亿美元公告](https://www.ekarobotics.com/blog/eka-robotics-raises-150m-to-build-superhuman-intelligence-for-the-physical-world)（2026-10-20，完整列示领投方 a16z、F-Prime 与参投方 Obvious Ventures、E14 Fund、Fine Structure Ventures、Samsung Next、MFV Partners、Bison Ventures、Glasswing Ventures）。作为股东，领投方与公司具备放大「仿真 RL + VFA 超越模仿学习 VLA」叙事的明确动机；同时针对前序 [Investing in Eka Robotics](Investing%20in%20Eka%20Robotics.md) 导读留下的融资口径待证项，本轮完成三层信源精准分层。

- ✅ 核查一（三层信源精准切分：官网实证 1.5 亿美元，估值与硬件 BOM 仍属媒体专访口径，本工作台核查）：Eka Robotics 官网 2026-10-20 发布的一手长文正式确认了 1.5 亿美元（\$150M）A 轮金额、a16z 与富达旗下 F-Prime 联合领投、全部早期跟投方，以及 1,500 次/小时（对比人工约 600 次/小时的 2.5 倍）分布外物体分拣、拧灯泡与插线成果；至此，前序仅停留在二手口径的「1.5 亿美元」与「F-Prime 联投」已由公司官方一手文件升格证实。但 14.5 亿美元投后估值、2025 年 5 月约 1,100 万美元种子轮、测试物重上限 1 公斤、>95% 抓取成功率、低于 1,000 美元夹爪成本及 500 万次→2,000 万次寿命目标，经查实出自创始人 Pulkit Agrawal 与 Raghu Raghuram 接受 TechCrunch 记者 Tim Fernholz 采访时的口述，并未写入官方书面公告，亦未见 SEC Form D 文件。
- ⚠️ 核查二（500 万次额定寿命 vs 2,000 万次工业线与外部学界质疑，本工作台核查）：TechCrunch 同篇采访记录了两项关键冷思考——UIUC 教授 Kris Hauser 指出「从演示室跨到全年无故障配合集成商跑在真实装配线上，其鸿沟几乎等同于 sim-to-real 自身」，且高附加值工业任务远不止拾取放置（pick-and-place）；匿名一线实验室学者则直言高速重型机械臂猛冲急停触碰人臂时「不知沿途摔坏了多少台机器人」。按每小时 1,500 次、每天 16 小时双班产线测算（日均 2.4 万次动作），500 万次额定寿命仅对应约 208 天（不足 7 个月），与标准工业机械臂 2,000 万次（约 833 天）尚有 4 倍耐久差距，换爪折旧与零点漂移标定仍不可忽略。
- ⚠️ 核查三（sim-to-real 与成本结构剪刀差：以简化机械自由度换取超高循环密度，本工作台推断）：虽然 500 万次尚未追平 2,000 万次传统工业臂，但对比本库追踪的高自由度五指灵巧手行业基线（约 30 万次抓握寿命，按物流工位每日 9,600 次计算仅约 31 天损耗），Eka 通过把末端收窄为高刚度低成本（<1,000 美元）力感知夹爪，已将硬件循环寿命推高至多指灵巧手的 16.7 倍，并大幅降低摩擦与传感器形变的物理仿真建模维度——这解释了其敢于主推纯仿真 RL 跨越 sim-to-real 的底层硬件前提；但一旦进入多股柔性线束装配与非标紧固件旋拧，仿真接触动力学失真度将陡然放大。

| 证据维度 | a16z 一手备忘录（2026-10-20） | Eka 官网 A 轮公告（2026-10-20 新补） | TechCrunch 专访 / Vibehood（口述与媒体口径） |
| :--- | :--- | :--- | :--- |
| 融资与估值 | 确认 a16z 领投 Series A，未列金额与估值 | 确认 \$150M A 轮，a16z + F-Prime 联合领投及全量跟投方 | 披露 \$1.45B 投后估值、2025-05 约 \$11M 种子轮（累计 \$161M） |
| 速度与精度 | 实验室上料/料箱分拣最高 1,500 次/小时（人类 2.5 倍） | 确认 1,500 次/小时（对比人类约 600 次/小时）、拧灯泡与插线 | 补充测试物重 <=1 公斤、抓取成功率 >95% |
| 硬件与耐久 | 拒绝复刻人手数千受体，自研 VFA 协同力感知夹爪 | 未披露夹爪单价与寿命 | Agrawal 口述夹爪硬件 <\$1,000、额定 500 万次（目标 2,000 万次） |
| 外部风险提示 | 明言「在完整生产班次中持续维持性能是下一道测试」 | 正与工业客户开展抓取与线缆试点 | Kris Hauser 警示「全年产线稳定性与超 pick-and-place 任务考验」 |

#### 三、赛道横向对比与定位

把 Eka Robotics 放回本库具身智能「灵巧操作与力触觉」谱系，行业围绕「末端复杂度 × 数据生成来源 × 商业交付边界」已裂变为四条并行实验路径：

| 代表主体 | 末端硬件与感知形态 | 策略学习与数据引擎 | 已披露工程边界与商业现实检验 |
| :--- | :--- | :--- | :--- |
| [Eka Robotics](../entities/companies/Eka%20Robotics.md) | 定制低成本力感知夹爪（<\$1,000，额定 500 万次→目标 2,000 万次） | VFA 模型 + 物理仿真大规模强化学习（SAC 基因，零/低人工示范） | 实验室分拣 1,500 次/小时（<=1 公斤，>95%），正由实验室迈向全年真实产线班次验证 |
| [一目科技 (YIMU Technology)](../entities/companies/%E4%B8%80%E7%9B%AE%E7%A7%91%E6%8A%80%20%28YIMU%20Technology%29.md) | 超薄仿生视触觉 Sentra T0（<3 mm，5 mN 分辨率，8 ms，按压 >100 万次） | R-AGI / World Action Model + 触觉增强仿真与苏州数采基地 | E 轮估值破 100 亿元人民币，面临弹性体表皮剪切滑移磨损与大模型厂跳过中间层直读原始张量风险 |
| [Sharpa](../entities/companies/Sharpa.md) / 宇树 Dex5-S | 仿人多指灵巧手（如 Dex5-S 22 DoF 39,900 元无触觉，或 94 点触觉） | 遥操作外骨骼（UVTA）+ 人类手部示范对齐数据 | 适合多构型抓握与数采耗材铺量，但高自由度五指手面临约 30 万次抓握磨损寿限与高 BOM 成本 |
| [Physical Intelligence](../entities/companies/Physical%20Intelligence.md) / [Generalist AI](../entities/companies/Generalist%20AI.md) | 通用机械臂与末端夹爪（主要依靠多视角视觉 + 本体关节位置） | 百万小时跨本体真机遥操、互联网人类视频与在线 RL（π0.7 / GEN-1.5） | 语义任务泛化与跨本体迁移领先，但缺乏高频接触力一等模态，精密插拔易在最后 1 毫米卡滞 |

### 观点与可反驳条件

- ==观点==：==Eka Robotics 在工程经济学上的高明之处并不只是「给模型加上力传感」，而是主动放弃 24 自由度仿人五指手的高故障复杂度，改用 <1,000 美元高刚度力感知夹爪换取 500 万次起点寿命与可收敛的仿真 RL 接触动力学，从而把「物理接触经验」转化为算力可购买的扩展曲线==；但 14.5 亿美元估值已提前计入了向工业级 2,000 万次寿命、跨 SKU 免调试换型及全年无故障产线稼动率的全部期权，当前仍处于从实验室峰值（1,500 次/小时）向工业制造账本过关的早期验证窗口。
- ==推翻条件==：
  1. ① 若截至 2027 年底，Eka Robotics 在电子装配与工业客户真实产线连续 8 小时完整班次中，插接与非分拣任务的无故障稼动率仍低于 99%、或单次换型调参仍需工程师驻场超过 1 个工作日、或夹爪真实工况无漂移寿命跌破 200 万次，则「低成本力控夹爪 + 仿真 RL 跨过 sim-to-real 鸿沟」的工程兑现判断将被推翻。
  2. ② 若 2027 年前采用端到端通用 VLA（如 π0.7、GR00T 2 或 Rhoda DVA）仅配合市售通用腕部六维力传感器，即在公开电子线束插拔与易碎物分拣基准上以 >=95% 成功率跑出 >=1,200 次/小时节拍，且客户无需采购专有软硬一体末端夹爪，则 Eka「自研软硬协同 VFA 生态筑起不可替代护城河」的投资假设将被推翻。

---

## 原文摘录与一手信源存证

> 机器人已经能够识别物体、理解指令，甚至规划复杂任务，但要让它快速抓起一颗树莓而不将其压碎，依然不是一件容易的事。
> — 原文摘录，PDF p.1；证据 `digest-material-d535506b9883b2f01e9ef759c05fdf2cd64fb5fee0fe9ee01cb64b6c85e4419d-excerpt-1@1`

> 问题出在视觉与真实物理世界之间的距离。摄像头能够识别物体的位置，却无法单独判断夹爪是否抓稳；模型可以规划动作，却不一定知道接触发生后该增加力度、调整角度还是立即松手。精细操作需要的不只是对环境的理解，还有对接触、阻力和运动结果的持续感知。
> — 原文摘录，PDF p.1；证据 `digest-material-d535506b9883b2f01e9ef759c05fdf2cd64fb5fee0fe9ee01cb64b6c85e4419d-excerpt-2@1`

> 近日，这家由 MIT 教授 Pulkit Agrawal 与前 Google DeepMind 研究员 Tuomas Haarnoja创立的机器人公司 Eka 宣布完成 1.5 亿美元 A 轮融资，由 a16z和 F-Prime 领投，Obvious Ventures、E14 Fund 等早期投资方继续参与。TechCrunch 报道称，本轮融资后，Eka 的投后估值达到 14.5 亿美元。
> — 原文摘录，PDF p.1；证据 `digest-material-d535506b9883b2f01e9ef759c05fdf2cd64fb5fee0fe9ee01cb64b6c85e4419d-excerpt-3@1`

一手材料：

- Investing in Eka Robotics - by Raghu Raghuram and Yoko Li · Raghu Raghuram and Yoko Li / a16z · [原站](https://www.a16z.news/p/investing-in-eka-robotics) · [主体档案：Raghu Raghuram](../entities/people/Raghu%20Raghuram.md) / [主体档案：Yoko Li](../entities/people/Yoko%20Li.md) / [主体档案：a16z Newsletter](../entities/funds/a16z%20Newsletter.md) · [NotebookLM](https://notebook.google.com/notebook/cac99041-d3b9-449e-a192-12bb4b1ad391) · [Drive](https://drive.google.com/file/d/1Fx0X4AXLBg8IWvFcgCz_ViM-vn4YUxoo/view?usp=drivesdk)
  材料版本 `digest-material-abf1a732f8eb96b73c0a6a30868178b61623684472c4aaf0afc9c9bcca8f9d8f@1`；获取方式 `http_full_text`。
  > The human hand may be the most economically important machine ever built. — 原文提取
  > Much of the world’s physical economy—from manufacturing and electronics assembly to logistics and food production—still depends on people using their hands. — 原文提取
- Eka Robotics Raises \$150M to Build Superhuman Intelligence for the Physical World · Eka Robotics · [原站](https://www.ekarobotics.com/blog/eka-robotics-raises-150m-to-build-superhuman-intelligence-for-the-physical-world) · [主体档案：Eka Robotics](../entities/companies/Eka%20Robotics.md) · [本地原件](../../../raw/67235914c631bf78d128d5806178f2979cd110855e14462626251f29a00f38f2)
  材料版本 `digest-material-67235914c631bf78d128d5806178f2979cd110855e14462626251f29a00f38f2@1`；获取方式 `http_full_text`。
  > We founded Eka Robotics to make general-purpose robots that perform beyond human capabilities and work safely alongside people. Our mission is to fundamentally reimagine how physical work gets done. — 原文提取
  > Today, weâre announcing our \$150M Series A, led by Andreessen Horowitz (a16z) and F-Prime, a venture capital fund affiliated with FMR LLC, the parent company of Fidelity Investments, with continued support from our seed lead investors Obvious Ventures and E14 Fund. — 原文提取

归属与范围：本条目为 Vibehood 中文编译稿（2026-10-21），与库内已归档的英文原备忘录《Investing in Eka Robotics》（2026-10-20）形成视角互补：本轮新增抓回 Eka Robotics 官网 2026-10-20 官方博客原文，正式实证确认 \$150M A 轮融资由 a16z 与 F-Prime 联合领投及全量跟投方阵容，并将 TechCrunch 采访披露的 \$1.45B 投后估值、2025 年 5 月约 \$11M 种子轮、\<\$1,000 夹爪成本、500 万次额定寿命（目标 2,000 万次）、\<=1 公斤测试负载与 \>95% 成功率与官方书面公告严格分层隔离；真实产线连续班次稼动率及硬件 BOM 明细保留未披露缺口。

来源缺口：

- `pending_verification`：a16z 备忘录与 Eka Robotics 官网 \$150M 官方博客均未披露 \$1.45B 投后估值及 2025 年 5 月约 \$11M 种子轮金额，亦未附带 SEC Form D 备案；\$1.45B 估值、\<\$1,000 夹爪硬件成本、500 万次额定工作循环、\<=1 公斤测试负载与 \>95% 成功率出自 TechCrunch 记者 Tim Fernholz 对创始人及投资人的采访报道，仍待后续融资法定披露或第三方客户验收交叉核验。 [线索](https://www.a16z.news/p/investing-in-eka-robotics)
- `not_disclosed`：Eka Robotics 未公布定制力感知夹爪的传感模态细节与量产 BOM 拆分、1,500 次/小时测试涵盖的物体种类分母与失败恢复耗时占比，以及工业试点客户连续 8 小时完整班次的无故障稼动率（uptime）与跨 SKU 换型调试工时。 [线索](https://www.ekarobotics.com/blog/eka-robotics-raises-150m-to-build-superhuman-intelligence-for-the-physical-world)

[返回赛道总览](../赛道总览.md#digest-d535506b9883b2f0) · [返回导读索引](README.md) · [主体档案库](../entities/README.md)
