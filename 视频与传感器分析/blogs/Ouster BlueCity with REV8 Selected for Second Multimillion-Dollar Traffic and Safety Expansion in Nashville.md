---
title: "Ouster BlueCity with REV8 Selected for Second Multimillion-Dollar Traffic and Safety Expansion in Nashville"
type: blog_digest
sector: "视频与传感器分析"
source: "Ouster, Inc."
published_at: "2026-11-17"
raw_sha256: "aacfab87b88a6c0b5f2dc3890b4bf8ca60d4a613cecc50ea0614411786914e51"
material_version: "digest-material-aacfab87b88a6c0b5f2dc3890b4bf8ca60d4a613cecc50ea0614411786914e51@1"
origin_url: "https://investors.ouster.com/news-releases/news-release-details/ouster-bluecity-rev8-selected-second-multimillion-dollar-traffic"
trigger_source: "Ouster, Inc."
trigger_url: "https://investors.ouster.com/news-releases/news-release-details/ouster-bluecity-rev8-selected-second-multimillion-dollar-traffic"
user_comments: ""
status: "processed_with_gaps"
---

<a id="digest-aacfab87b88a6c0b"></a>
# Ouster BlueCity with REV8 Selected for Second Multimillion-Dollar Traffic and Safety Expansion in Nashville

2026-11-17 · Ouster, Inc. · 有来源缺口

[本地原件归档](../../../raw/aacfab87b88a6c0b5f2dc3890b4bf8ca60d4a613cecc50ea0614411786914e51) · 固定材料版本 `digest-material-aacfab87b88a6c0b5f2dc3890b4bf8ca60d4a613cecc50ea0614411786914e51@1` · [一手原站](https://investors.ouster.com/news-releases/news-release-details/ouster-bluecity-rev8-selected-second-multimillion-dollar-traffic)

## 深度拆解与复核

### 一、 场景与利益标注及项目级驱动与联邦拨款口径核查

- 场景与利益标注：本事件源自 Ouster, Inc.（NYSE: OUST）2026-11-17 发布的商业中标新闻稿，并由纳什维尔交通局（NDOT）交通助理主任 Aaron Cushman、区域合作伙伴 Southern Lighting & Traffic Systems（SLTS）及范德比尔特大学（Vanderbilt University）高级研究科学家 Dr. William Barbour 联合背书。Ouster 管理层（包括全球 ITS 副总裁 Dr. Asad Lesani）在新闻稿中着重放大「数百万美元二期扩建」与「1,000 万美元美国交通部 SMART 二期拨款（LADDMS 项目）」，需警惕将联邦拨款总额直接等同于 Ouster 自身合同收入的口径误读。
- 本工作台核查（⚠️ 拨款口径拆解与单季收入体量推算，直接回应「收入大幅波动的项目级驱动」）：
  1. 1,000 万美元并非 Ouster 独享收入：纳什维尔市政府（Metropolitan Government of Nashville）获得的 1,000 万美元是美国交通部（USDOT）SMART 计划 Phase II（继 Phase I 获 200 万美元之后）授予整个 LADDMS（Leveraging Advanced Data to Deliver Multimodal Safety）多模态安全项目的联邦拨款，涵盖 NDOT 信号机改造、系统集成商 SLTS 施工、范德比尔特大学算法验证及 Ouster 软硬件采购；Ouster 本次新闻稿标题明确限定其自身订单规模为「数百万美元（multimillion-dollar）」。
  2. 单位量纲对照 Ouster 2026Q3 10-Q 盘面：Ouster 官网技术规格表明每个十字路口或公路断面仅需 1–2 颗数字 LiDAR 即可替代多组摄像头、雷达与地感线圈；按本次新增 100 个路口（连同此前北纳什维尔 8 个试点、Broadway 旅游走廊 5 路口及 Choose How You Move 一期 100+ 路口扩建，当地累计签约超 200 个路口）测算，二期直接拉动的 REV8 OS1 Max 硬件需求约 100–200 台。对照库内 Ouster 2026Q3 Form 10-Q 单季总营收 \$59.33M、单季出货 >7,000 台 LiDAR（推算 LiDAR 综合均价约 \$5,500–\$6,500/台）的基准盘面，单个城市百路口级项目仅占其单季 LiDAR 出货量的约 1.5%–3%，且按市政安装验收节奏分批确认收入，单靠单个城市项目不足以平滑或独自驱动季度营收跃升，反而是多州交通厅（犹他州、华盛顿州、佛罗里达州、新泽西州 NJDOT 42 处点位及加拿大安大略省）交付与验收时点错配构成 ITS 板块项目级季度波动的直接原因。

### 二、 REV8 原生彩色 LiDAR 工程栈与 BABA 联邦准入壁垒

- 本工作台核查（✅ 从芯片、边缘算力到合规门禁的四层实证，紧扣本赛道 F1 与 F2）：
  1. 自研 L4 Ouster Silicon + 原生彩色探测：纳什维尔二期是 Ouster 首次在城域级交通项目引入新一代 REV8 OS1 Max 传感器。依据 Ouster 官方 REV8 硬件发布稿，其底层由自研 L4 Ouster Silicon 驱动（128 通道 L4 与 256 通道 L4 Max，片上集成 42.94 GMACs 算力、每秒探测 20 万亿光子、40 kHz 测频与皮秒级计时精度，输出最高 1,040 万点/秒及 22.4 Gbps 带宽），并嵌入 Fujifilm 色彩科学实现 48-bit 色深与 116 dB 高动态范围（1 lux 至 200 万 lux 极端光照免标定同步输出 3D 深度与 2D 彩色）。交通实测场景下，OS1 Max 提供最远 500 英尺（约 150–152 米）超前探测距离，直接减少路段中段（mid-block）补盲传感器布设数量。
  2. 边缘 AI 推理与隐私脱敏：BlueCity 边缘计算盒搭载 NVIDIA Orin AGX，运行 Ouster 自研深度神经网络（基于 800 个真实站点采集的 400 万个标注目标训练），实现 99% 停止线（stop-bar）检测精度与 20 倍加速自动化分析，同时在端侧自动模糊行人（VRU）与骑行者面部等生物识别特征，在满足交通孪生与交叉口延迟延绿（dilemma zone protection / TSP 公交优先）的同时绕开城市摄像头隐私阻力；单路口安装可在最快 3 小时内完成（免挖路埋地感线圈），并通过开放 API 接入 NDOT 既有 ATMS 平台。
  3. BABA 55% 美国本土含量合规壁垒（核心非市场护城河）：2026 年 10 月 1 日起美国联邦公路管理局（FHWA）主导的 BABA（Build America, Buy America）法案全量生效，强制要求制造类产品至少 55% 元件成本在美国本土生产组装。Ouster BlueCity + REV8 已于 2026 年 10 月官宣系统级 BABA 合规（叠加 NEMA TS2 与 ISO 27001 网络安全标准及 10 年量产周期承诺），这使 Ouster 得以直接承接 USDOT SMART 与 IIJA 联邦基建资金池，而车规成本占优的中国激光雷达龙头（禾赛、速腾聚创）在欧美联邦资助市政基建领域面临硬性准入隔离，印证本赛道核心分化判断 F2（Ouster 锚定非车规高毛利工业与智慧基建控制点）。

### 观点与可反驳条件

- ==观点==：纳什维尔二期 100 路口订单的实质意义不在于单笔数百万美元收入（仅对应约 100–200 台 OS1 Max，约占单季 LiDAR 出货 1.5%–3%），而在于首次验证了「REV8 原生彩色长距降传感器密度 + BABA 55% 本土合规解锁 USDOT 联邦资金池 + 3 小时免开挖安装 + BlueCity 边缘 SaaS 订阅」这一整套智慧交通项目从 8 点试点→100+ 路口→200+ 路口的复购飞轮；这也同时解释了 ITS 收入为什么天然受限于市政财政/联邦拨款验收节奏而呈现季度项目级脉冲波动。
- ==推翻条件==：
  1. ① 联邦拨款转化缓慢导致项目型波动拖累毛利率与营收：若 2027H1 前后 Ouster 未能在纳什维尔之外再斩获至少 2 个百路口级（>=100 intersections）BABA 合规 BlueCity + REV8 商业扩展订单，或因美国地方交通厅验收延后导致 2026Q4–2027Q1 智慧基础设施板块收入同比增速明显落后于整体产品营收增速（<30%），则「BABA 解锁联邦资金推动规模复购」逻辑将被削弱。
  2. ② REV8 良率或软件附加率不及预期：若 L4 Silicon / OS1 Max 量产爬坡延迟导致纳什维尔二期交付延至 2027H2 之后，或客户仍主要按一次性硬件买断（perpetual）而非高毛利年度 SaaS 订阅付费导致 Ouster 合并 Non-GAAP 毛利率在 2027 年跌破 43%，则「从纯硬件向空间感知软件栈升级」判断将被推翻。

---

## 原文摘录与一手信源存证

> 【信源巡检核心摘要】 Ouster 宣布纳什维尔交通局（NDOT）及合作伙伴 Southern Lighting & Traffic Systems 选定 Ouster BlueCity 智慧交通方案进行第二期数百万美元扩建，在原有基础上新增 100 个路口（当地签约总规模超 200 个路口），由美国交通部 1000 万美元 SMART 二期拨款支持，首次在该项目引入具备原生色彩探测与最远 500 英尺量程的新一代 Rev8 OS1 Max 3D 数字激光雷达与边缘 AI。
> — 原文摘录，文字段落 1；证据 `digest-material-aacfab87b88a6c0b5f2dc3890b4bf8ca60d4a613cecc50ea0614411786914e51-excerpt-1@1`

一手材料：

- Ouster BlueCity with REV8 Selected for Second Multimillion-Dollar Traffic and Safety Expansion in Nashville · Ouster, Inc. · [原站](https://investors.ouster.com/news-releases/news-release-details/ouster-bluecity-rev8-selected-second-multimillion-dollar-traffic) · [主体档案：Ouster IR](../entities/companies/Ouster%20IR.md) / [主体档案：Ouster, Inc.](../entities/companies/Ouster%2C%20Inc..md) · [本地原件](../../../raw/aacfab87b88a6c0b5f2dc3890b4bf8ca60d4a613cecc50ea0614411786914e51)
  材料版本 `digest-material-aacfab87b88a6c0b5f2dc3890b4bf8ca60d4a613cecc50ea0614411786914e51@1`；获取方式 `tg_approved_source_update`。
  > 【信源巡检核心摘要】 Ouster 宣布纳什维尔交通局（NDOT）及合作伙伴 Southern Lighting & Traffic Systems 选定 Ouster BlueCity 智慧交通方案进行第二期数百万美元扩建，在原有基础上新增 100 个路口（当地签约总规模超 200 个路口），由美国交通部 1000 万美元 SMART 二期拨款支持，首次在该项目引入具备原生色彩探测与最远 500 英尺量程的新一代 Rev8 OS1 Max 3D 数字激光雷达与边缘 AI。 — 原文提取
- Unlocking Federal Funding for Smart Infrastructure: Ouster BlueCity with Rev8 Achieves BABA Compliance · Ouster, Inc. · [原站](https://ouster.com/insights/blog/unlocking-federal-funding-for-smart-infrastructure-ouster-bluecity-with-rev8-achieves-baba-compliance) · [主体档案：Ouster, Inc.](../entities/companies/Ouster%2C%20Inc..md) · [本地原件](../../../raw/48bf3d3f28ce50c8ba8c340343d88d51ad7a2aad1a4ca4c562de09f9928b8e93)
  材料版本 `digest-material-48bf3d3f28ce50c8ba8c340343d88d51ad7a2aad1a4ca4c562de09f9928b8e93@1`；获取方式 `http_full_text`。
  > Ouster BlueCity with Rev8 has achieved system-level BABA (Build America, Buy America) Act compliance, clearing a major procurement hurdle for state and local transportation agencies pursuing federally funded ITS upgrades. — 原文提取
  > For state and local transportation agencies, the race to modernize roadways with intelligent transportation systems (ITS) can often hit a financial roadblock when procurement compliance does not align with technology needs. — 原文提取
- Privacy by Design: How Ouster BlueCity Fuses Native Color Lidar with Edge Privacy · Ouster, Inc. · [原站](https://ouster.com/insights/blog/privacy-by-design-how-ouster-bluecity-fuses-native-color-lidar-with-edge-privacy) · [主体档案：Ouster, Inc.](../entities/companies/Ouster%2C%20Inc..md) · [本地原件](../../../raw/47a44ccc6cd52bbde27c3c94d7fb018eb27e1909de2807d09cb7cfc56af2b074)
  材料版本 `digest-material-47a44ccc6cd52bbde27c3c94d7fb018eb27e1909de2807d09cb7cfc56af2b074@1`；获取方式 `http_full_text`。
  > Ouster BlueCity with Rev8 is the industry's first native color lidar detection system, giving traffic engineers up to 500 feet of advance detection and richer situational awareness at intersections. — 原文提取
  > As urban city centers grow and transportation networks become increasingly complex, modern traffic management forces a challenging compromise on smart city planners. — 原文提取
- Introducing the REV8 OS Family: The World’s First Native Color Lidar · Ouster, Inc. · [原站](https://ouster.com/insights/blog/introducing-rev8-os-family) · [主体档案：Ouster, Inc.](../entities/companies/Ouster%2C%20Inc..md) · [本地原件](../../../raw/85988b974b6ac941b3951dd70186d41982647adc16009c425691c3459eebe625)
  材料版本 `digest-material-85988b974b6ac941b3951dd70186d41982647adc16009c425691c3459eebe625@1`；获取方式 `http_full_text`。
  > A new generation of Ouster digital lidar, powered by custom L4 Ouster Silicon. — 原文提取
  > A machine's capacity to perceive is fundamentally constrained by the capability of its sensors. — 原文提取
- Nashville adds 100 lidar intersections to BlueCity traffic network · Traffic Technology Today · [原站](https://www.traffictechnologytoday.com/news/traffic-management/nashville-adds-100-lidar-intersections-to-bluecity-traffic-network.html) · [主体档案：Traffic Technology Today](../entities/labs/Traffic%20Technology%20Today.md) · [本地原件](../../../raw/823a8c4e6303d2c95ec4a0ede819cc5b64825e19367a3951c61f7a3c22db12b2)
  材料版本 `digest-material-823a8c4e6303d2c95ec4a0ede819cc5b64825e19367a3951c61f7a3c22db12b2@1`；获取方式 `http_full_text`。
  > The Nashville Department of Transportation (NDOT) is adding Ouster’s BlueCity lidar traffic management solution to 100 more intersections, taking contracted deployments in the Tennessee city to more than 200 intersections and roadway locations. — 原文提取
  > It is the second expansion of the partnership, announced on 17 November. Ouster is working on the new phase with regional partner Southern Lighting & Traffic Systems. — 原文提取

归属与范围：由于 Ouster IR 子站（investors.ouster.com）新闻稿原链接触发 Akamai EdgeSuite 403 访问限制，本工作台已穿透拉取 Ouster 官网一手产品/技术/合规发布稿（BABA 系统合规公告、Privacy by Design 边缘 AI 架构稿、REV8 L4 Silicon 芯片发布稿及纳什维尔一期项目稿）与专业 ITS 媒体 Traffic Technology Today 2026-11-18 原文报道完成多源交叉核验，补全高管、NDOT 与范德比尔特大学原话及工程参数；IR 子站 HTML 原页与精准分拆合同额已分别在 gaps 登记为 unavailable 与 not\_disclosed。

来源缺口：

- `unavailable`：Ouster IR 子站（investors.ouster.com）2026-11-17 新闻稿原页受 Akamai EdgeSuite 403 拦截未能直接抓回原始 HTML，已通过 Ouster 官网 4 篇一手技术/合规/项目公告及 Traffic Technology Today 2026-11-18 原文报道完成事实交叉还原。 [线索](https://investors.ouster.com/news-releases/news-release-details/ouster-bluecity-rev8-selected-second-multimillion-dollar-traffic)
- `not_disclosed`：公告仅披露纳什维尔二期为「数百万美元（multimillion-dollar）」合同且依托美国交通部 1,000 万美元 SMART 二期联邦拨款（LADDMS 项目），未公布 Ouster 实际分得的精确合同额、硬件与 BlueCity SaaS 授权拆分比例及 100 个新路口的季度收入确认节奏。 [线索](https://www.traffictechnologytoday.com/news/traffic-management/nashville-adds-100-lidar-intersections-to-bluecity-traffic-network.html)

[返回赛道总览](../赛道总览.md#digest-aacfab87b88a6c0b) · [返回导读索引](README.md) · [主体档案库](../entities/README.md)
