# Maxinsights

[返回主体档案库](../README.md) · [返回赛道总览](../../赛道总览.md) · [单篇导读索引](../../blogs/README.md)

- 主体类别：🏢 公司与产业主体 (Companies)
- 核心定位与说明：硅谷/中国物理AI数据与评测基础设施商（海宇数维，CEO 袁宇光 × CTO 汪堃）；Peak XV 领投 \$30M 种子轮（Tola Capital / SPC / INCE / Alumni 参投），2026 预计 ARR 达 \$250M（前三大客户占 30%）；在 8 国运营 3,500–5,000+ 采集员，累计实采 200 万+ 小时、模型就绪 150 万小时（峰值 45 万小时/月，曾 1.5 周交付 30 万+ 小时）；自研双目硬同步 MaxSLAM（ATE 4.24 mm / 完整率 99.90%）、MaxLoop 当日流式质检（降本 80%）与 MaxGlove 轻标定触觉力手套，为 Dyna Robotics (Dyna-2) 与 Genesis AI (GENE-26.5) 核心第一视角数据供应商，并向 Train→Evaluate→Deploy 全栈延伸。
- 关联账号与官方入口：
  - LinkedIn (Maxinsights)（Maxinsights）：[账号主页](https://www.linkedin.com/company/maxinsights-ai/) · 登记对象 `digest-publisher-539fbfafe05d60808873f77e` — Maxinsights 官方 LinkedIn 专栏与技术动态入口
  - Maxinsights Official Website & Engineering Blog（Maxinsights）：[机构／作者主页](https://www.maxinsights.ai/) · 登记对象 `digest-publisher-0119e3c0582045cad3b4a0e1` — 硅谷/中国物理AI数据与评测基础设施商（海宇数维，CEO 袁宇光 × CTO 汪堃）；Peak XV 领投 \$30M 种子轮（Tola Capital / SPC / INCE / Alumni 参投），2026 预计 ARR 达 \$250M（前三大客户占 30%）；在 8 国运营 3,500–5,000+ 采集员，累计实采 200 万+ 小时、模型就绪 150 万小时（峰值 45 万小时/月，曾 1.5 周交付 30 万+ 小时）；自研双目硬同步 MaxSLAM（ATE 4.24 mm / 完整率 99.90%）、MaxLoop 当日流式质检（降本 80%）与 MaxGlove 轻标定触觉力手套，为 Dyna Robotics (Dyna-2) 与 Genesis AI (GENE-26.5) 核心第一视角数据供应商，并向 Train→Evaluate→Deploy 全栈延伸。
  - X / Twitter (@MaxinsightsAI)（Maxinsights）：[账号主页](https://x.com/MaxinsightsAI) · 登记对象 `digest-publisher-861590d67bba620e17e4051d` — Maxinsights 官方社交媒体发布通道

<!-- curated-profile:begin -->
## 0. 核心商业模式、经营账本与官方文献目录（Curated Dossier）

> [!IMPORTANT]
> - ==商业模式与爆发杠杆==：把具身数据采集从作坊式众包改造为丰田生产方式（TPS）工业流水线，以「第一视角人手操作视频 + 自研硬件位姿/触觉真值」绕开昂贵慢速的真机遥操作瓶颈；仅融 \$30M 种子轮（Peak XV 领投）即跑出 2026 预计 \$250M ARR（服务 30+ 客户、前三大占 30%，具名供应 Dyna-2 与 Genesis AI `GENE-26.5` 20 万小时，曾 1.5 周闪付 30 万+ 小时现货）。
> - ==三层自研壁垒与制造良率定律==：确立「可用训练工时单价」与「单位新增物理信息成本」双标尺——`MaxSLAM` 硬同步双目+IMU 将空间轨迹误差压至 4.24 mm / 99.90% 完整率；`MaxLoop` 当日质检砍掉 90% 审校人力与 80% QC 成本，将四道门连乘良率从 $(95\%)^4=81\%$ 拉升至 $(99\%)^4=96\%$（月吞吐 45 万小时）；`MaxGlove` 触觉手套切入接触力模态（目标 2027 采 100 万小时力数据）。
> - ==核心多空分水岭==：\$250M 预计运行率中「现货库集中脉冲交付 vs 8 份长期经常性合同续约留存」的真实成色，以及下游基模向自建真机闭环演进（对照 Eidon AI 停摆复盘）时，公司向 `Train → Evaluate → Deploy` 评测部署层转型的兑现度。

### 📚 官方工程研究与核心披露目录

| # | 发布日期 | 栏目与编号 | 官方标题与核心干货 | 一手原站 | 深度导读 |
| :---: | :---: | :--- | :--- | :--- | :--- |
| 1 | 2026-09-09 | MI-RSCH-001<br/>Official Research | 《Beyond 1M Hours: The Data Scaling Laws of Physical AI》<br/>确立百万小时后 Scale (Breadth) × Density (Depth) 正交双轴、五元物理状态转移 $S_t=(H_t,B_t,O_t,C_t,E_t)$、四道门连乘制造良率（$(95\%)^4=81\% \to (99\%)^4=96\%$）与千万小时主动状态引擎；实锤供应 Dyna-2 与 GENE-26.5。 | [beyond-1m-hours.html](https://www.maxinsights.ai/beyond-1m-hours.html)<br/>[field-notes.html](https://www.maxinsights.ai/field-notes.html) | [阅读导读 →](../../blogs/Beyond%201M%20Hours_%20The%20Data%20Scaling%20Laws%20of%20Physical%20AI.md) |
| 2 | 2026-08-20 | Tech Blog<br/>Spatial Engine | 《MaxSLAM: Millimeter-Level Spatial Trajectories for Egocentric Embodied AI Data》<br/>五级软硬协同双目+IMU 空间轨迹引擎；20 序列 58.37 min 光学动捕对账实现 ATE RMSE = 4.24 mm、P95 = 8.63 mm、0.57°、99.90% 帧完整率，较 Basalt (80.12 mm) 降错 94.7% 并消除 ORB-SLAM3 (74.3%) 丢帧碎裂。 | [maxslam.html](https://www.maxinsights.ai/maxslam.html) | [阅读导读 →](../../blogs/MaxSLAM_%20Millimeter-Level%20Spatial%20Trajectories%20for%20Egocentric%20Embodied%20AI%20Data.md) |
| 3 | 2026-05-18 | Collaboration<br/>Research Hub #3 | 《Maxinsights Egocentric Data Now Embedded in the Training of Leading Robotic Foundation Models》<br/>隐身期首篇官方合作宣言：披露 Tola Capital 早期支持、六大洲工程化采集网嵌入硅谷主流基模与 Genesis AI (GENE-26.5)；本篇同步全量拆解官网 09 大结构化物理模态 与 Easy/Medium/Hard 三级复杂度规范。 | [LinkedIn Pulse 原文](https://www.linkedin.com/pulse/maxinsights-egocentric-data-now-embedded-training-leading-myp4c) | [阅读导读 →](../../blogs/Maxinsights%20Egocentric%20Data%20Now%20Embedded%20in%20the%20Training%20of%20Leading%20Robotic%20Foundation%20Models.md) |
| 4 | 2026-10-29<br>2026-11-09 | Product Launch<br/>& Newsroom | 《\$30M 种子轮暨 MaxLoop / MaxGlove 首发 + PitchBook \$250M ARR 专访全账本》<br/>拆解丰田生产方式（TPS）五步闭环、MaxLoop 当日质检（审校团队 -90%、成本 -80%、月吞吐 45 万h）、MaxGlove（破除市售手套 10–20 min/天瓶颈，目标 2027 采 100 万h 力数据），以及 \$250M 预计年化运行率、1.5 周闪付 30 万+h、Top-3 占 30% 与 Train→Evaluate→Deploy 17 岗位转型验真。 | [Business Wire 更正稿](https://www.businesswire.com/news/home/20261022672609/en/)<br/>[PitchBook 专访](https://pitchbook.com/news/articles/physical-ais-data-boom-is-a-race-to-get-out-of-the-data-business) | [阅读导读 →](../../blogs/%E5%8D%8E%E4%BA%BA%E7%89%A9%E7%90%86AI%E5%85%AC%E5%8F%B8%E5%AE%8C%E6%88%903000%E4%B8%87%E7%BE%8E%E5%85%83%E7%A7%8D%E5%AD%90%E8%BD%AE.md) |

### 📊 核心经营、产能与自研软硬件参数总表

| 维度 | 核心指标与核验口径 | 一手出处锚点 |
| :--- | :--- | :--- |
| 创始团队 | CEO 袁宇光（YG Yuan）：上海交大 / UC Berkeley MBA，前 Mega Gear Robotics 联创（并购退出）、前 Eaton 最年轻高管团队负责人（管 \$150M 业务线 / 1,500+ 人）；CTO 汪堃（Kun Wang）：北大，前 Google X / Waymo 早期工程师、轻舟智航 QCraft 联创（1,000+ 人 / 量产超 100 万辆） | Business Wire (2026-10-29) |
| 融资与估值坐标 | \$30M 种子轮（Peak XV Partners 领投，Tola Capital、South Park Commons、INCE Capital 渶策资本、Alumni Ventures 参投） | Business Wire (2026-10-29) |
| 营收与客户结构 | 2026 预计年化运行率 \$250M ARR（2025 几近 \$0）；服务 30+ 家客户（含 8 份经常性年框），前三大客户占总营收 30%；具名标杆含 Dyna Robotics (Dyna-2)、Genesis AI (GENE-26.5, 20万h) | PitchBook (2026-11-09) & BW |
| 全球采集与库存 | 横跨 8 国（美/墨/土/中/泰/越/印尼/南非）直管 4,000–5,000+ 名采集员、覆盖 50,000+ 真实场景；累计实采 >200 万小时，模型就绪现货 150 万小时，月吞吐 45 万小时/月（曾 1.5 周交付 30 万+h） | BW (2026-10-29) & PitchBook |
| 三件套与战略延伸 | ① MaxSLAM（4.24 mm ATE / 0.57° / 99.90% 完整率）；② MaxLoop（当日反馈，审校人力 -90% / 质检成本 -80%）；③ MaxGlove（Genesis AI 共测，目标 2027 采 100 万h 力数据）；向 Train → Evaluate → Deploy 延伸（Ashby 在招 17 岗含仿真评测与 FDE） | `maxslam.html` / maxinsights.ai / Ashby |
<!-- curated-profile:end -->

## 1. 核心研究问题与待核查争议（Questions & Open Debates）

### 🔍 待核查缺口与证据边界（Open Gaps）

- `pending_verification`：\$250M 为管理层披露的 2026 预计年化营收运行率（Projected Annualized Revenue Run Rate），包含大额现货库集中交付脉冲（如 1.5 周交付 30 万+ 小时），目前明确签署长期经常性合同（recurring contracts）的客户为 8 家，2027 年经常性续约留存率与经审计净收入待跟踪核实。（关联：[《华人物理AI公司完成3000万美元种子轮》](../../blogs/%E5%8D%8E%E4%BA%BA%E7%89%A9%E7%90%86AI%E5%85%AC%E5%8F%B8%E5%AE%8C%E6%88%903000%E4%B8%87%E7%BE%8E%E5%85%83%E7%A7%8D%E5%AD%90%E8%BD%AE.md)）
- `pending_verification`：MaxGlove 触觉力传感手套目前处于与 Genesis AI 联合实测阶段，其跨手型免标定精度、柔性力敏元件在数千名合同工高频佩戴下的耐用寿命及 2027 年 100 万小时力数据交付进度尚待独立硬件评测验证。（关联：[《华人物理AI公司完成3000万美元种子轮》](../../blogs/%E5%8D%8E%E4%BA%BA%E7%89%A9%E7%90%86AI%E5%85%AC%E5%8F%B8%E5%AE%8C%E6%88%903000%E4%B8%87%E7%BE%8E%E5%85%83%E7%A7%8D%E5%AD%90%E8%BD%AE.md)）
- `not_disclosed`：虽已结合 2026-11-09 PitchBook 专访补齐 2026 预计年化运行率（\$250M ARR）与前三大客户收入占比（30%），但 Maxinsights 向 Dyna Robotics 与 Genesis AI 交付可用训练工时的具体阶梯单价（\$/hour）与经审计毛利率明细仍未公开。（关联：[《Beyond 1M Hours: The Data Scaling Laws of Physical AI》](../../blogs/Beyond%201M%20Hours_%20The%20Data%20Scaling%20Laws%20of%20Physical%20AI.md)）
- `pending_verification`：主体消歧与一线交叉线索边界：公开一手材料已 100% 证实美国/法国 Genesis AI（GENE-26.5）采购 Maxinsights 20 万小时数据并共测 MaxGlove；而同名谐音的国内智元机器人 AgiBot（Genie-1 / AgiBot World）公开主打上海自建百台真机遥操作数采厂，其是否另行外采第三方第一视角人手视频仍属待独立核实的行业非公开线索。（关联：[《Beyond 1M Hours: The Data Scaling Laws of Physical AI》](../../blogs/Beyond%201M%20Hours_%20The%20Data%20Scaling%20Laws%20of%20Physical%20AI.md)）
- `not_disclosed`：MaxSLAM 官方博客未公开自研双目头戴相机的具体基线间距（mm）、全局快门 CMOS 型号、帧率（Hz）、IMU 型号及单台硬件 BOM 成本，亦未开源该 20 段动捕评测序列供外部独立复现。（关联：[《MaxSLAM: Millimeter-Level Spatial Trajectories for Egocentric Embodied AI Data》](../../blogs/MaxSLAM_%20Millimeter-Level%20Spatial%20Trajectories%20for%20Egocentric%20Embodied%20AI%20Data.md)）
- `not_disclosed`：文中称其数据已支撑硅谷湾区大多数基模开发团队（majority of foundation model developers in the Bay Area），除已公开具名的 Dyna Robotics 与 Genesis AI 外，其余北美头部客户名单受保密协议约束未予公开。（关联：[《Maxinsights Egocentric Data Now Embedded in the Training of Leading Robotic Foundation Models》](../../blogs/Maxinsights%20Egocentric%20Data%20Now%20Embedded%20in%20the%20Training%20of%20Leading%20Robotic%20Foundation%20Models.md)）

- [《华人物理AI公司完成3000万美元种子轮》](../../blogs/%E5%8D%8E%E4%BA%BA%E7%89%A9%E7%90%86AI%E5%85%AC%E5%8F%B8%E5%AE%8C%E6%88%903000%E4%B8%87%E7%BE%8E%E5%85%83%E7%A7%8D%E5%AD%90%E8%BD%AE.md)：穿透整合 Business Wire 官方更正版 \$30M 融资暨 MaxLoop/MaxGlove 发布通稿、2026-11-09 PitchBook 专访（\$250M 预计 ARR、1.5 周交付 30 万+ 小时、前三大客户占 30%）及 Ashby 17 个在招研发岗位；勘误二手微信稿『头/腕/胸三路相机、6国』失真，完成单位经济学与 Eidon AI 停摆判词的正反对账。
- [《Beyond 1M Hours: The Data Scaling Laws of Physical AI》](../../blogs/Beyond%201M%20Hours_%20The%20Data%20Scaling%20Laws%20of%20Physical%20AI.md)：完整归档 Maxinsights《Beyond 1M Hours》（MI-RSCH-001）与《MaxSLAM》两篇官方工程原文，关联其 \$30M 种子轮更正版官方通稿与 Dyna-2.1 官方技术页；实锤核验 Dyna Robotics（Dyna-2 最大第一视角数据供应商）与 Genesis AI（GENE-26.5 20万小时第一视角数据供应 + MaxGlove 触觉手套联合测试），严格消歧同音主体智元机器人 AgiBot Genie，并与本库 Eidon AI 停摆复盘、NVIDIA GR00T 2 Human-1M、通研院/Sharpa UVTA 及狮子山 Lion-ER / Re-Mix 完成全维度对账。
- [《MaxSLAM: Millimeter-Level Spatial Trajectories for Egocentric Embodied AI Data》](../../blogs/MaxSLAM_%20Millimeter-Level%20Spatial%20Trajectories%20for%20Egocentric%20Embodied%20AI%20Data.md)：完整归档 MaxSLAM 官方英文全文与两张原始基准配图（maxslam-training-trends.png、maxslam-accuracy-comparison.png），严格区分官方图 1 的概念示意曲线（Illustrative trends）与第 2–4 节的 58.37 分钟光学动捕实测数据，并补充头显至指尖 0.5m 杠杆臂误差传播预算与 ORB-SLAM3/OKVIS2 丢帧幸存者偏差校核。
- [《Maxinsights Egocentric Data Now Embedded in the Training of Leading Robotic Foundation Models》](../../blogs/Maxinsights%20Egocentric%20Data%20Now%20Embedded%20in%20the%20Training%20of%20Leading%20Robotic%20Foundation%20Models.md)：完整归档 Maxinsights 2026-05-18 LinkedIn Pulse 首发原文及 HTML 快照（官网 research.html 第三篇），纵向拉通 2026-05 至 2026-10 与 Genesis AI (GENE-26.5) 合作的定量演进（200,000 小时交付 + MaxGlove 共测），并全量拆解官网 09 大物理模态与传感器真值/伪标签边界。

## 2. 阅读笔记与原文 Highlight（Reading Highlights & Marginalia）

### 🖍️ 摘录与批注：《Beyond 1M Hours: The Data Scaling Laws…》（6 条）

关联文章：[《Beyond 1M Hours: The Data Scaling Laws of Physical AI》](../../blogs/Beyond%201M%20Hours_%20The%20Data%20Scaling%20Laws%20of%20Physical%20AI.md)

- [TG#245] dyna和genie的数据都是用max insight的，这篇博客很有参考价值

> “GENE's data engine combines these sources rather than choosing one: third-person video for breadth, egocentric video for natural interaction, and instrumented gloves for high-fidelity hand motion and tactile signals.”
> — 摘录（TG#246）

> “So the scaling law is also a manufacturing law, and that changes which metric the business runs on. Cost per recorded hour is easy to measure and is what procurement asks for. What governs the business is cost per usable training hour — one that cleared calibration, sync, annotation, and QC for the supervision actually being bought. What governs the model is one step further out: cost per unit of new physical information — the measure that tells you whether each additional decade of hours is still buying capability.”
> — 批注（TG#247）：这段真是太好了

> “One clarification, since this is where the framework is easiest to attack: Axis I coverage is breadth — more environments, people, and objects across the same kind of recording. Axis II is depth — how much of each interaction the recording preserves. Adding a thousand new kitchens is Axis I; capturing contact and object states inside the kitchens you already have is Axis II.”
> — 批注（TG#248）：tech details with clear definition，这篇文章竟然是免费的。

> “It should know what it already holds, at the level of state coverage rather than hours and task labels. It should estimate where that coverage is thin. It should acquire against that estimate alongside its volume targets, seeking new states as well as new hours — rare interactions, difficult geometries, underrepresented object classes. And it should route each hour to the level of supervision its expected value justifies, since full geometric annotation is worth paying for on some recordings and wasted on others.”
> — 批注（TG#249）：我太同意了

> “Three numbers make that measurable: end-to-end pipeline yield, marginal information gain per delivered hour, and coverage against a declared state taxonomy. Only the first is well-defined today. The second and third are open problems, and whoever defines them first will set the standard the market prices against.”
> — 摘录（TG#250）

> 导读核心结论：核心结论与六脉络总纲：硅谷/中国具身数据基础设施商 Maxinsights（海宇数维）发布的官方工程研究《Beyond 1M Hours: The Data Scaling Laws of Physical AI》（文档编号 MI-RSCH-001，2026-09-09），不仅从官方一手披露层面实锤了用户给出的一线供应链情报——Maxinsights 同时充当 Dyna Robotics 百万小时世界—动作模型 Dyna-2 的最大第一视角人类数据供应商，以及 Genesis…


## 3. 收录文章与一手材料（Ingested Articles & Primary Sources）

### [华人物理AI公司完成3000万美元种子轮](../../blogs/%E5%8D%8E%E4%BA%BA%E7%89%A9%E7%90%86AI%E5%85%AC%E5%8F%B8%E5%AE%8C%E6%88%903000%E4%B8%87%E7%BE%8E%E5%85%83%E7%A7%8D%E5%AD%90%E8%BD%AE.md)

2026-10-29 · 来源：Maxinsights · Official Engineering Blog & Release · 状态：待云端同步

[单篇导读（blogs/）](../../blogs/%E5%8D%8E%E4%BA%BA%E7%89%A9%E7%90%86AI%E5%85%AC%E5%8F%B8%E5%AE%8C%E6%88%903000%E4%B8%87%E7%BE%8E%E5%85%83%E7%A7%8D%E5%AD%90%E8%BD%AE.md) · [微信原件](../../../../raw/75d06cb5e5936f22f9e5b8ec45d724d7aab35f54cbe811789e95ffd4c46bf76d) · 固定版本 `digest-material-75d06cb5e5936f22f9e5b8ec45d724d7aab35f54cbe811789e95ffd4c46bf76d@1`

> 近日，总部位于硅谷的 Maxinsights （中国实体为“海宇数维”）宣布完成 3000 万美元种子轮融资。本轮由 Peak XV （原红杉印度/ 东南亚）领投，Tola Capital 、South Park Commons、渶策资本与 Alumni Ventures 跟投。

> 两位创始人都是华人。 CEO 袁宇光毕业于上海交通大学，曾联合创办工业机器人公司 Mega Gear Robotics，后该公司被收购，他还曾在全球动力管理巨头 Eaton 担任管理职务。CTO汪堃毕业于北京大学，曾在 Google 自动驾驶项目担任工程师，后回国联合创办轻舟智航（QCraft），其自动驾驶技术已落地超百万辆。

关联一手材料：

- CORRECTING and REPLACING Waymo, Google and Microsoft Alums Raise \$30M to Build the Data Layer for Physical AI（Maxinsights（公司更正新闻稿，Business Wire分发））· [原站](https://www.businesswire.com/news/home/20261022672609/en/) · [NotebookLM](https://notebook.google.com/notebook/cac99041-d3b9-449e-a192-12bb4b1ad391) · [Drive](https://drive.google.com/file/d/1Xonxn_FFjceKhKst7wQ9j_XCtTCsQMOX/view?usp=drivesdk) · 版本 `digest-material-205fe390ebab7205efa6a019de548b78d5f1ce3b5a6f423c2a349f1083c19f8c@1`
  > Maxinsights, the company building the data layer for physical AI, today announced \$30 million in seed funding led by PeakXV, with participation from Tola Capital, South Park Commons, INCE Capital, and Alumni Ventures. — 原文提取
- Physical AI's data boom is a race to get out of the data business (Maxinsights \$250M Projected ARR Interview)（PitchBook News (Maxinsights Official Newsroom)）· [原站](https://pitchbook.com/news/articles/physical-ais-data-boom-is-a-race-to-get-out-of-the-data-business) · [本地原件](../../../../raw/d7ea0d69619184e366eb173c81df72deb3aa34602ced5321b4069fa7fd5455e1) · 版本 `digest-material-d7ea0d69619184e366eb173c81df72deb3aa34602ced5321b4069fa7fd5455e1@1`
  > Right now, 4,000 people across eight countries are wearing cameras and gloves while they cook, clean, and fold laundry, recording every move. — 原文提取
- Maxinsights Official Platform Architecture: 9 Physical Modalities, Field Notes & Train-Evaluate-Deploy Roadmap（Maxinsights · Official Engineering Blog）· [原站](https://www.maxinsights.ai/research.html) · [本地原件](../../../../raw/bb6000ec713b79c33af09c48eea1db60db506852554be19664c378f0ad9ab3d0) · 版本 `digest-material-bb6000ec713b79c33af09c48eea1db60db506852554be19664c378f0ad9ab3d0@1`
  > ## 2. Nine Structured Physical Modalities (09 Modalities) 01. Video Understanding: Dense multi-level temporal captions from environment and task down to atomic instructions. 02. — 原文提取

### [Beyond 1M Hours: The Data Scaling Laws of Physical AI](../../blogs/Beyond%201M%20Hours_%20The%20Data%20Scaling%20Laws%20of%20Physical%20AI.md)

2026-09-09 · 来源：Maxinsights · Official Engineering Blog · 状态：待云端同步

[单篇导读（blogs/）](../../blogs/Beyond%201M%20Hours_%20The%20Data%20Scaling%20Laws%20of%20Physical%20AI.md) · [微信原件](../../../../raw/7cd8c0adb7118dba4b0d396babe2d976c18bcccde2eea617d5da32bb6529592a) · 固定版本 `digest-material-7cd8c0adb7118dba4b0d396babe2d976c18bcccde2eea617d5da32bb6529592a@2`

> The first million hours showed that human experience can scale physical intelligence. The next frontier is to scale not only how many hours we collect, but how much learnable physical information each hour contains.

> For years, one of the central questions in robotics has been whether Physical AI can follow a scaling path similar to language and vision.

关联一手材料：

- Beyond 1M Hours: The Data Scaling Laws of Physical AI (MI-RSCH-001)（Maxinsights · Official Engineering Blog）· [原站](https://www.maxinsights.ai/beyond-1m-hours.html) · [本地原件](../../../../raw/7cd8c0adb7118dba4b0d396babe2d976c18bcccde2eea617d5da32bb6529592a) · 版本 `digest-material-7cd8c0adb7118dba4b0d396babe2d976c18bcccde2eea617d5da32bb6529592a@2`
  > The first million hours showed that human experience can scale physical intelligence. The next frontier is to scale not only how many hours we collect, but how much learnable physical information each hour contains. — 原文提取
- MaxSLAM: Millimeter-Level Spatial Trajectories for Egocentric Embodied AI Data（Maxinsights · Official Engineering Blog）· [原站](https://www.maxinsights.ai/maxslam.html) · [本地原件](../../../../raw/fd804bdd429c3add170c3cce93a167e2525a3cb9e44d5d9361e4888e620030dd) · 版本 `digest-material-fd804bdd429c3add170c3cce93a167e2525a3cb9e44d5d9361e4888e620030dd@1`
  > Enabling robots to learn from human actions requires accurately capturing spatial changes throughout task execution. MaxSLAM is our spatial trajectory engine built for egocentric manipulation scenarios. — 原文提取
- CORRECTING and REPLACING Waymo, Google and Microsoft Alums Raise \$30M to Build the Data Layer for Physical AI（Maxinsights（公司更正新闻稿，Business Wire分发））· [原站](https://www.businesswire.com/news/home/20261022672609/en/) · [NotebookLM](https://notebook.google.com/notebook/cac99041-d3b9-449e-a192-12bb4b1ad391) · [Drive](https://drive.google.com/file/d/1Xonxn_FFjceKhKst7wQ9j_XCtTCsQMOX/view?usp=drivesdk) · 版本 `digest-material-205fe390ebab7205efa6a019de548b78d5f1ce3b5a6f423c2a349f1083c19f8c@1`
  > Maxinsights, the company building the data layer for physical AI, today announced \$30 million in seed funding led by PeakXV, with participation from Tola Capital, South Park Commons, INCE Capital, and Alumni Ventures. — 原文提取

### [MaxSLAM: Millimeter-Level Spatial Trajectories for Egocentric Embodied AI Data](../../blogs/MaxSLAM_%20Millimeter-Level%20Spatial%20Trajectories%20for%20Egocentric%20Embodied%20AI%20Data.md)

2026-08-20 · 来源：Maxinsights · Official Engineering Blog · 状态：待云端同步

[单篇导读（blogs/）](../../blogs/MaxSLAM_%20Millimeter-Level%20Spatial%20Trajectories%20for%20Egocentric%20Embodied%20AI%20Data.md) · [微信原件](../../../../raw/fd804bdd429c3add170c3cce93a167e2525a3cb9e44d5d9361e4888e620030dd) · 固定版本 `digest-material-fd804bdd429c3add170c3cce93a167e2525a3cb9e44d5d9361e4888e620030dd@1`

> Enabling robots to learn from human actions requires accurately capturing spatial changes throughout task execution. MaxSLAM is our spatial trajectory engine built for egocentric manipulation scenarios.

> The camera trajectories recovered by MaxSLAM achieved millimeter-level positional agreement with motion-capture reference trajectories, with sub-degree orientation error.

关联一手材料：

- MaxSLAM: Millimeter-Level Spatial Trajectories for Egocentric Embodied AI Data（Maxinsights · Official Engineering Blog）· [原站](https://www.maxinsights.ai/maxslam.html) · [本地原件](../../../../raw/fd804bdd429c3add170c3cce93a167e2525a3cb9e44d5d9361e4888e620030dd) · 版本 `digest-material-fd804bdd429c3add170c3cce93a167e2525a3cb9e44d5d9361e4888e620030dd@1`
  > Enabling robots to learn from human actions requires accurately capturing spatial changes throughout task execution. MaxSLAM is our spatial trajectory engine built for egocentric manipulation scenarios. — 原文提取

### [Maxinsights Egocentric Data Now Embedded in the Training of Leading Robotic Foundation Models](../../blogs/Maxinsights%20Egocentric%20Data%20Now%20Embedded%20in%20the%20Training%20of%20Leading%20Robotic%20Foundation%20Models.md)

2026-05-18 · 来源：Maxinsights · Official Engineering Blog · 状态：待云端同步

[单篇导读（blogs/）](../../blogs/Maxinsights%20Egocentric%20Data%20Now%20Embedded%20in%20the%20Training%20of%20Leading%20Robotic%20Foundation%20Models.md) · [微信原件](../../../../raw/227c1724da57a7f3e5888e5d1fa96a76699a53c7809f1e936615c99ae5ab09bd) · 固定版本 `digest-material-227c1724da57a7f3e5888e5d1fa96a76699a53c7809f1e936615c99ae5ab09bd@1`

> Title: Maxinsights Egocentric Data Now Embedded in the Training of Leading Robotic Foundation Models Subtitle: Datasets collected across six continents and powered by Maxinsights' engineering-led pipeline are helping train next-generation embodied AI systems, including Genesis AI's newly unveiled GENE-26.5.

> Maxinsights, a Silicon Valley data infrastructure company backed by Tola Capital, today shared that its globally distributed egocentric datasets are now a foundational input for the leading robotic foundation models in development today.

关联一手材料：

- Maxinsights Egocentric Data Now Embedded in the Training of Leading Robotic Foundation Models（Maxinsights · Official Engineering Blog）· [原站](https://www.linkedin.com/pulse/maxinsights-egocentric-data-now-embedded-training-leading-myp4c) · [本地原件](../../../../raw/227c1724da57a7f3e5888e5d1fa96a76699a53c7809f1e936615c99ae5ab09bd) · 版本 `digest-material-227c1724da57a7f3e5888e5d1fa96a76699a53c7809f1e936615c99ae5ab09bd@1`
  > Title: Maxinsights Egocentric Data Now Embedded in the Training of Leading Robotic Foundation Models Subtitle: Datasets collected across six continents and powered by Maxinsights' engineering-led pipeline are helping train next-generation embodied AI systems, including Genesis AI's newly unveiled GENE-26.5. — 原文提取
- Maxinsights Official Platform Architecture: 9 Physical Modalities, Field Notes & Train-Evaluate-Deploy Roadmap（Maxinsights · Official Engineering Blog）· [原站](https://www.maxinsights.ai/research.html) · [本地原件](../../../../raw/bb6000ec713b79c33af09c48eea1db60db506852554be19664c378f0ad9ab3d0) · 版本 `digest-material-bb6000ec713b79c33af09c48eea1db60db506852554be19664c378f0ad9ab3d0@1`
  > ## 2. Nine Structured Physical Modalities (09 Modalities) 01. Video Understanding: Dense multi-level temporal captions from environment and task down to atomic instructions. 02. — 原文提取
