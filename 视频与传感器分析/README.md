> **交互式认知地图与主体档案（GitHub Pages）**：[打开网页版交互画布 ↗](https://mojojolite-sketch.github.io/%E8%A7%86%E9%A2%91%E4%B8%8E%E4%BC%A0%E6%84%9F%E5%99%A8%E5%88%86%E6%9E%90/index.html)

# 视频与传感器分析

本页是既有研究的导航入口；分类依据当前研究问题，可随证据调整。研究主稿和页面已迁入本分类；旧路径保留兼容入口。

- Airship AI (NASDAQ: AISP)：[研究主稿](airship-ai/refs/research.md) · [阅读页面](https://mojojolite-sketch.github.io/%E8%A7%86%E9%A2%91%E4%B8%8E%E4%BC%A0%E6%84%9F%E5%99%A8%E5%88%86%E6%9E%90/airship-ai/refs/index.html)
- Ouster (NYSE: OUST) / Stereolabs：[主体档案](entities/companies/Ouster%20%28Stereolabs%29.md) · [2026Q3 10-Q 深度导读](blogs/Ouster%20Q3%202026%20Form%2010-Q_%20Revenue%20%2B50%25%20YoY%20to%20%2459.33M%2C%20_27%2C000%20Physical%20AI%20LiDAR%20%26%20Stereolabs%20Camera%20Sensors%20S.md)

## 当前研究重点与核心判断

- ==核心问题演化==：视频与物理传感器赛道的重心正从单纯的「后端视频监控管理（VMS）与边缘检索」，扩展至面向机器人、仓储自动化（AMR）与智慧交通（ITS）的「Physical AI 多模态感知底座（数字 LiDAR + 双目深度视觉 + 端侧 AI 推理 + 空间软件栈）」。
- ==核心分化==：在西方主机厂 L3 前装推迟与破产出清（Luminar Chapter 11 重组、Aeva 产品毛利率仅 4.4%）背景下，独立传感器厂商正沿两条路分化——中系龙头（禾赛、速腾聚创）依靠超大规模车规芯片制造摊薄成本并向机器人降维放量；西方代表 Ouster + Stereolabs 则锚定非车规高毛利工业、机器人与智慧基础设施，凭 27% 数字 LiDAR + 73% 双目视觉相机 的组合出货在 2026Q3 实现 \$59.33M（+50.1% YoY）营收与 47% Non-GAAP 毛利率。

## 逻辑演变图谱

![视频与传感器分析逻辑演变](逻辑演变.svg)

### 节点机制与证据锚点

- P · 问题定义（研究视角）：视频和多模态传感器产生的原始数据如何在延迟、隐私、带宽、精度与整机 TCO 约束下，被实时处理、融合并交付为可执行的检索指令或物理控制决策？不同客户对各约束的权重仍需按场景实证。
- M0 · Physical AI 多模态感知前端（数字 LiDAR + 双目深度视觉融合）：[Ouster 2026Q3 Form 10-Q 深度导读](blogs/Ouster%20Q3%202026%20Form%2010-Q_%20Revenue%20%2B50%25%20YoY%20to%20%2459.33M%2C%20_27%2C000%20Physical%20AI%20LiDAR%20%26%20Stereolabs%20Camera%20Sensors%20S.md)（`digest-material-f0cb95e7958902a5f5b0001a63005a4b7470c23246ec12b8b8204dd0580ba7d5@1`）揭示多模态传感组合的商业化落地——Ouster 于 2026-02-04 以 \$55.2M 并购法国 Stereolabs 后，26Q3 确认收入出货量跃升至 >27,000 台套，其中高单价数字 LiDAR（REV7/OS/DF/爬坡中的原生彩色 REV8）约 27%（>7,000 台）、低单价高精度 ZED 双目深度视觉相机占 73%（>20,000 台，较 Q1 35%、Q2 47% 连续跳升）；两类传感器在三维几何测距精度与高密度纹理/语义感知上互补，并借 10,000+ 历史 ZED 开发者基盘打开 LiDAR 交叉销售漏斗。
- M1 · 边缘计算与同步摄取（Outpost AI & ZED Box 2）：在公共安全与联邦边缘视频侧，[Airship AI 2025 年 10-K](https://www.sec.gov/Archives/edgar/data/1842566/000165495426001280/airsp_10k.htm)（[既有公司研究](airship-ai/refs/research.md)）披露 Outpost AI 在边缘端负责多源视频摄取、结构化与推理，缓解回传带宽瓶颈；在工业机器人与移动空间 AI 侧，Stereolabs 于 2026 年 10 月推出基于 NVIDIA Jetson 的 ZED Box 2 / Max（最高 2070 TFLOPS，原生同步 8 路 GMSL2 相机），将多摄同步与神经深度估计下沉至工业端侧硬件。
- M2 · 感知软件、多传感融合与数据管理（Acropolis / Ouster Gemini / ZED SDK）：Airship AI 通过 Acropolis 管理后端结构化元数据并与客户专有数据库比对；Ouster 则依托 Ouster Gemini（最新单服务器可实时融合多达 100 颗 LiDAR）与 ZED SDK（SLAM、神经深度与 3D 检测）建立跨模态软件与开发者黏性，并辅以单季 \$3.29M 专利许可及使用费形成高毛利软件/IP 底座。
- M3 · 终端交付与行业部署（Airship Command / BlueCity / 仓储 AMR）：面向政府/安防客户，Airship Command 提供检索与事件响应界面（2026 年获 DHS 大额固定价格合同，backlog 达 \$30.6M）；面向智慧交通与工业物流，Ouster BlueCity 在北美多州交通部斩获数百万美元路口监控与 Indra 电子收费订单，而 ZED 相机与数字 LiDAR 组合正快速渗透仓库移动机器人（AMR）、测绘与国防巡检。
- M4 · 商业模式与全球竞争分化（非车规高毛利 vs 车载前装出清）：2026Q3 全球同业横比确认行业结构性分化——Luminar 于 2025 年 12 月申请破产重组（核心硬件 \$33M 售予 MicroVision）、Aeva 产品毛利率仅 ~4.4% 并转向工业检测与光互连，证明西方纯车载长距硬件路线的资本效率瓶颈；Mobileye（\$492M，53% GM）面临中国 OEM 占比上升带来的 EyeQ 单车 ASP 稀释；而中系双雄 禾赛（\$159.3M，41.0% GM，729,673 台 LiDAR 且非车/机器人首超 50% 营收）与 速腾聚创（595,600 台含机器人 145,200 台）正把高性价比 LiDAR 从车载外溢至机器人赛道，正面考验 Ouster 依托多模态视觉与软件维持的 47% Non-GAAP 毛利率防线。
- S · 研究立场与可反驳条件（agent 推断）：视频与传感器分析赛道的超额毛利正从“单一车载长距硬件”向*“非车规多模态硬件组合（数字 LiDAR + 双目深度视觉）+ 边缘算力与融合软件栈”*迁移。反证条件：若纯视觉端到端 VLA 模型直接满足工业 AMR 避障与测距精度从而压缩 LiDAR 刚需，或中系机器人 LiDAR 出海价格战击穿 Ouster 42% 合并 Non-GAAP 毛利率底线，则该多模态高毛利判断需修正。
- Q · 演变与反证缺口：仍缺实际工作负载下的跨路线 TCO 对比（纯视觉 vs 双目+LiDAR 融合）、Stereolabs 独立营收/毛利分部拆分（Form 10-Q 未单独披露），以及 Airship AI 在高毛利软件/边缘节点上的规模化交付确认节奏（q-thesis-ouster-stereolabs-asp-margin-floor）。

<!-- daily-digest:begin -->
归档：[交互图谱](https://mojojolite-sketch.github.io/%E8%A7%86%E9%A2%91%E4%B8%8E%E4%BC%A0%E6%84%9F%E5%99%A8%E5%88%86%E6%9E%90/index.html) · [主体档案（1）](entities/README.md) · [单篇导读（1）](blogs/README.md)
<!-- daily-digest:end -->
