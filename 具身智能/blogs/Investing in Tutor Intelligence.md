---
title: "Investing in Tutor Intelligence"
type: blog_digest
sector: "具身智能"
source: "Raghu Raghuram (a16z)"
published_at: "2026-11-02"
raw_sha256: "6ec02d035d65b8a26c1db3d8a4886a7351a33fa149a18fce25329d59fc1a39d6"
material_version: "digest-material-6ec02d035d65b8a26c1db3d8a4886a7351a33fa149a18fce25329d59fc1a39d6@1"
origin_url: "https://www.a16z.news/p/investing-in-tutor-intelligence"
trigger_source: "Raghu Raghuram"
trigger_url: "https://www.a16z.news/p/investing-in-tutor-intelligence"
user_comments: ""
status: "processed_with_gaps"
---

<a id="digest-6ec02d035d65b8a2"></a>
# Investing in Tutor Intelligence

2026-11-02 · Raghu Raghuram (a16z) · 有来源缺口

[本地原件归档](../../../raw/6ec02d035d65b8a26c1db3d8a4886a7351a33fa149a18fce25329d59fc1a39d6) · 固定材料版本 `digest-material-6ec02d035d65b8a26c1db3d8a4886a7351a33fa149a18fce25329d59fc1a39d6@1` · [一手原站](https://www.a16z.news/p/investing-in-tutor-intelligence)

## 深度拆解与复核

==场景与利益披露==：本文《Investing in Tutor Intelligence》（2026-11-02）由 a16z 合伙人 Raghu Raghuram（前 VMware CEO）与 Martin Casado、Jamie Sullivan 联名发布。作为 Tutor Intelligence 7,500 万美元（\$75M）B 轮领投方及股东，a16z 有明显动机将「先商业部署、后泛化基模」塑造成具身智能最优范式，阅读时需将投资叙事与运营经济性拆开核验。

### 一、 融资账本与「部署前置」飞轮事实拆解

1. 股本结构与创始人背景（本工作台核查）：Tutor Intelligence 于 2021 年由 MIT CSAIL 毕业生 Josh Gruenstein（CEO）与 Alon Kosowsky-Sachs 创立，总部设于马萨诸塞州 Watertown。2026 年 11 月宣布完成 7,500 万美元（\$75M）B 轮融资（前文巡检摘要将「7,500 万」截断为 500 万，此处以多源通稿纠偏），由 a16z 领投，早期股东 USV（Union Square Ventures）与 Neo 跟投。计入 2025 年 12 月 USV 领投的 3,400 万美元（\$34M）A 轮（当时累计达 4,200 万美元），公司累计融资额升至 1.17 亿美元（\$117M）。
2. 商业模式与硬件交付：Tutor 不做一次性设备卖断或长周期融资租赁，而是将自研单臂移动装箱/拆码垛机器人 Cassie 与双臂半人形机器人 Sonny 以「按小时或按抓取件数（by the hour or by the pick）」模式租给制造、物流与 CPG 客户（小时费率约 \$14–\$18/小时，早期口径为 \$14–\$16/小时），上线部署耗时低至 8 小时。当端侧策略遇到长尾异常时，由远程人工导师（tutors）联网接管完成作业，同步将真实工况交互数据回流至私有机器人基础模型训练。公司披露服务厂区数量同比近 4 倍，近三分之一（1/3）近期客户已复购增配，计划于 2027 年底前将签约规模扩至 1,000+ 台。

### 二、 原位口径核查与跨库对比（Path Robotics / Scale VP / Eidon AI）

- ✅ 融资额与部署周期数字核查（本工作台核查）：对照 Business Wire 与 Forbes 同期通稿，\$75M B 轮、\$117M 累计融资、8 小时快速部署、服务厂区同比近 4 倍及 2027 年底 1,000+ 台合同目标均得到独立信源交叉证实；但需注意「1,000+ 台」为 2027 年底前签约目标（under contract by end of 2027），并非当前已全量通电收费的在网机队规模。
- ⚠️ 按小时租用毛利率与人机比盲区（本工作台推断）：按 \$14–\$18/小时 对标美国仓储人工时薪（含社保约 \$22–\$30/小时）虽具备名义替代空间，但公开材料未披露远程人工导师对机队的 1:N 接管比例及单台 Sonny/Cassie 硬件 BOM 折旧。若 1 名远程导师仅能同时托管 2–3 台设备且自身时薪叠加设备折旧超过 \$10/小时，则当前单工位毛利仍高度依赖未来基模自主率抬升后的梯次释放。
- ✅ 对比 Path Robotics 与 Scale VP（部署层价值捕获路线分野，本工作台核查）：本库昨日归档的 [Path Robotics Series E 拆解](%E4%BC%B0%E5%80%BC%E8%B6%85170%E4%BA%BF%EF%BC%81%E5%85%84%E5%BC%9F%E4%BF%A9%E6%8A%8A%E2%80%9C%E4%B8%96%E7%95%8C%E6%A8%A1%E5%9E%8B%E2%80%9D%E5%A1%9E%E8%BF%9B%E7%84%8A%E6%9E%AA%EF%BC%8C%E5%B9%B4%E8%90%A5%E6%94%B6%E6%9A%B4%E6%B6%A817%E5%80%8D.md)（E 轮 \$300M、估值 \$2.45B、累计融资 \$610M+）验证了重工高毛利壁垒路线——依托抗弧光 Sensor Stack v5 焊头与交钥匙 RaaS 对接造船/重工无损探伤结果，代偿了自建 180,000 平方英尺厂房的重资产 CapEx；Tutor Intelligence 则面向轻工 CPG 拣选与装箱，用 8 小时极速入场与零 CapEx 小时费率换取多厂区快速横向铺量，两者共同印证了 [Scale Venture Partners 部署层分析](%E5%85%B7%E8%BA%AB%E5%9F%BA%E6%A8%A1%E4%B9%8B%E4%B8%8A%EF%BC%8C%E8%BF%98%E6%9C%89%E5%BA%94%E7%94%A8%E5%B1%82%EF%BD%9CScale%20VP%E5%90%88%E4%BC%99%E4%BA%BA%EF%BC%9A%E9%83%A8%E7%BD%B2%E5%85%AC%E5%8F%B8%E5%B0%86%E5%88%86%E8%B5%B0%E6%A8%A1%E5%9E%8B%E5%85%AC%E5%8F%B8%E7%9A%84%E8%9B%8B%E7%B3%95.md) 的核心判断——==真正锁定工业商业闭环与现场数据飞轮的，是直接对作业结果负责的部署应用层，而非纯上游基础模型==。
- ⚠️ 对比 Eidon AI 停摆复盘（本工作台推断）：本库 [Eidon AI 停摆复盘](Robotics%20Data%20is%20a%20Broken%20Business%20%26%20Robot%20Training%20Data%20Guide_%20Eidon%20AI%20Post-Mortem%20and%201%2C270%2B%20Hours%20Open%20Ego.md) 揭示纯第三方具身数据掮客死于三重死结：大客户池仅约 20 家、穿戴硬件规格碎片化吞噬毛利、以及「内置消亡期」（下游车队铺开后用现场自回流数据抛弃外部采集商）。==Tutor Intelligence 规避了 Eidon 式淘汰风险，关键在于它从不单独出售非标原始数据，而是把「远程人工导师纠偏」嵌套在自家 Cassie/Sonny 商业收费工位中==——数据采自同一构型、直接服务同一套客户 SLA 计费，并直接反哺自有基模，将数采成本中心转化为带现金流的在岗训练闭环。

| 对比维度 | Tutor Intelligence | Path Robotics | Eidon AI（2026-09 停摆样本） |
| :--- | :--- | :--- | :--- |
| 核心交付形态 | 按小时/按件数（\$14–\$18/小时）租用 Cassie/Sonny 整套作业人力 | 交钥匙工作站与 \$0 CapEx RaaS 焊接产出（\$600M+ 累计融资） | 众包家庭头戴相机 + 7 点 IMU 原始视频数据集（1,270+ 小时） |
| 上线周期与硬件依赖 | 8 小时快速进驻 CPG/仓储现场；远程导师实时兜底 | 数周→1 小时内 Scan-to-Weld；外采 6 轴工业臂+自研多激光焊头 | 需自造/寄送穿戴套件，跨实验室 URDF 格式割裂 |
| 数据闭环与淘汰风险 | 自产自销同分布工况纠偏数据，无第三方买方断单风险 | 独家掌握焊前/焊中/焊后数千万英寸工艺数据 | 一旦下游车队铺开自采即遭抛弃，买家池仅约 20 家 |

### 观点与可反驳条件

- ==观点==：Tutor Intelligence 用 \$117M 累计融资跑出的「8 小时进场 + 按小时/件数计费 + 远程人工导师实时兜底并反哺基模」路线，是比纯第三方具身数据外包（Eidon AI）更具商业生命力的现实收敛路径；其核心护城河不在单点模型参数，而在将远程遥操成本转化为客户按件付费现金流的同时沉淀同构型真实产线长尾数据。
- ==推翻条件==：
  1. 自主率停滞导致毛利塌陷：若至 2027 年底 Tutor Intelligence 机队规模接近 1,000 台时，远程人工导师与机器人的长期平均托管比仍无法突破 1:5（或人工接管时长占比仍高于 25%），导致按 \$14–\$18/小时 收费下的单工位贡献毛利持续为负，则「现场数据飞轮自动压低人力成本」假设将被推翻。
  2. 部署扩张低于预期或续约流失：若 2027 年底实际通电收费的商业机队低于 400 台（不及 1,000+ 台合同目标四成），或现有复购客户因跨厂区 SKU 切换频繁导致部署周期回弹至 >72 小时、续约率跌破 50%，则「8 小时标准化规模复制」的商业壁垒将被证伪。

---

## 原文摘录与一手信源存证

> 【信源巡检核心摘要】 Raghu Raghuram 与 Martin Casado、Jamie Sullivan 代表 a16z 领投机器人部署公司 Tutor Intelligence 7,500 万美元 B 轮融资（USV、Neo 跟投）。
> — 原文摘录，文字段落 1；证据 `digest-material-6ec02d035d65b8a26c1db3d8a4886a7351a33fa149a18fce25329d59fc1a39d6-excerpt-1@1`

一手材料：

- Investing in Tutor Intelligence · Raghu Raghuram (a16z) · [原站](https://www.a16z.news/p/investing-in-tutor-intelligence) · [主体档案：Raghu Raghuram](../entities/people/Raghu%20Raghuram.md) / [主体档案：a16z Newsletter](../entities/funds/a16z%20Newsletter.md) / [主体档案：Tutor Intelligence](../entities/companies/Tutor%20Intelligence.md) · [本地原件](../../../raw/3c27ac4d772f6cbe1a33f5e256b82f819f3de3a8fa8c05d0ad25cd3997c4de93)
  材料版本 `digest-material-3c27ac4d772f6cbe1a33f5e256b82f819f3de3a8fa8c05d0ad25cd3997c4de93@1`；获取方式 `web_search_verified_primary`。
  > 1. Financing & Company Background: - Andreessen Horowitz (a16z) led a \$75 million Series B round in Tutor Intelligence, with existing investors Union Square Ventures (USV) and Neo participating. — 原文提取

归属与范围：已通过 search\_web 穿透核验 a16z 官方发布《Investing in Tutor Intelligence》（Raghu Raghuram、Martin Casado、Jamie Sullivan）及 Business Wire、Forbes、The Robot Report 融资披露（B 轮 \$75M、累计 \$117M、8 小时部署、2027 年底前 1,000+ 台合同目标、Sonny/Cassie 按小时或按件收费），并与库内 Path Robotics、Scale VP 部署层分析及 Eidon AI 停摆复盘完成对照。

来源缺口：

- `unavailable`：受沙箱无外网直连限制，未抓回 https://www.a16z.news/p/investing-in-tutor-intelligence 页面完整 HTML 文本；正文还原基于经 search\_web 多源核验的原话引述及同期官方新闻稿。 [线索](https://www.a16z.news/p/investing-in-tutor-intelligence)
- `not_disclosed`：Tutor Intelligence 尚未公开 Cassie 与 Sonny 的单台硬件 BOM 成本、远程人工导师（tutors）的人机配比（1:N）与人工接管率、单小时交付毛利率，以及 1,000+ 台 2027 年签约目标中已实际部署收费台数。 [线索](https://www.a16z.news/p/investing-in-tutor-intelligence)

[返回赛道总览](../赛道总览.md#digest-6ec02d035d65b8a2) · [返回导读索引](README.md) · [主体档案库](../entities/README.md)
