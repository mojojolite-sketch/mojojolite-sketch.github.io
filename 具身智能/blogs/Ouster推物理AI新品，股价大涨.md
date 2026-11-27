---
title: "Ouster推物理AI新品，股价大涨"
type: blog_digest
sector: "具身智能"
source: "Ouster · Stereolabs 官方新闻稿"
published_at: "2026-10-28"
raw_sha256: "15b4f21c3bcf6154f8876a794e76b276bb85898d6de89e25b83d15c1a773d768"
material_version: "digest-material-15b4f21c3bcf6154f8876a794e76b276bb85898d6de89e25b83d15c1a773d768@1"
origin_url: "https://ouster.gcs-web.com/news-releases/news-release-details/stereolabs-launches-zed-box-2-series-physical-ai-and-vision"
trigger_source: "激光雷达老炮儿"
trigger_url: ""
user_comments: ""
status: "processed_with_gaps"
primary_topic: "本体、灵巧手与触觉硬件"
topic_confidence: 0.6183
---

<a id="digest-15b4f21c3bcf6154"></a>
# Ouster推物理AI新品，股价大涨

2026-10-28 · Ouster · Stereolabs 官方新闻稿 · 有来源缺口

[本地原件归档](../../../raw/15b4f21c3bcf6154f8876a794e76b276bb85898d6de89e25b83d15c1a773d768) · 固定材料版本 `digest-material-15b4f21c3bcf6154f8876a794e76b276bb85898d6de89e25b83d15c1a773d768@1` · [一手原站](https://ouster.gcs-web.com/news-releases/news-release-details/stereolabs-launches-zed-box-2-series-physical-ai-and-vision)

## 深度拆解与复核

- ==核心结论==：[Ouster (Stereolabs)](../entities/companies/Ouster%20IR.md)（Nasdaq: OUST，2026-02-04 以约 3,500 万美元现金加 180 万股完成收购）旗下 Stereolabs 于 2026-10-27 发布工业级边缘计算盒 ZED Box 2 系列，当日推动 OUST 股价实盘收涨 10.37%（32.79 美元）。==本工作台补齐官方商城定价与完整规格发现，标准款（Orin NX 8GB/16GB，117/157 TOPS）售价 1,799/2,149 美元（被动散热、80W 上限），而跑 VLA 的 Max T4000/T5000（Jetson AGX Thor 64 GB/128 GB，1,200/2,070 FP4 TFLOPS）售价跃升至 5,999/7,999 美元（250W 功耗上限且改为工业主动散热）==；产品真正差异化壁垒并非算力芯片本身，而是双四联 Fakra-Z 8 路 GMSL2 接入、SYNC+IO 硬件级帧同步及与 Ouster 激光雷达共时间轴的一站式数采/AMR 交付套件。

#### 一、业务切口与核心机制

1. 「五家供应商合一」的系统集成痛点：Stereolabs 联合创始人兼 CTO Edwin Azzam 在官方通稿中指出，随着机器人从试点转向车队规模部署，单机需同时挂接多目视觉与激光雷达；传统方案需要开发团队分别采购相机、工业载板、同步盒、线缆与多套驱动并耗费数周调试时间轴。ZED Box 2 试图在出厂前把 GMSL2 多摄、激光雷达、GNSS/IMU 与车载端侧计算压进同一硬件与 ZED SDK 工具链，实现「插上相机几分钟跑通 360° 感知」。
2. 硬件同步接口与分级产品矩阵（官方 15,926 字符新闻稿完整参数）：
   - 多摄与传感器同步总线：全系标配双路四通道 Fakra-Z 接口原生支持 8 路 GMSL2 摄像头（如 4 台 ZED X 双目 + 4 台 ZED X One S 实现 360° 全向感知或工作单元多角度去遮挡），配备 DB9 专用 SYNC+IO 硬件帧同步接口（支持内同步与外触发对齐激光雷达与多设备），另配 2 个 GbE Ethernet 千兆网口、GPIO 数字接口、2 个 HDMI 现场调试口及 USB 3 外接 GNSS 与 IMUs 传感器接口，服务多台 AMRs 与工业工作站协同。
   - 双档算力与 I/O 分化：标准款 ZED Box 2（尺寸 234.4 × 176.3 × 54.0 mm，微信稿圆整为 55 mm）可选 Jetson Orin NX 8 GB（117 TOPS）或 16 GB（157 TOPS），配 2 个 USB 3.1 Type-A、2 个 CAN（DB9）与 10–32V 供电，主打嵌入式 AMR 与工位常规深度/追踪算法（2026 年 10 月发货）；高端款 ZED Box 2 Max（尺寸扩至 261.5 × 206.5 × 84.8 mm）搭载 NVIDIA Jetson AGX Thor T4000（64 GB 内存、1,200 FP4 TFLOPS、QSFP+ 30 GbE 三路万兆）或 T5000（128 GB 内存、2,070 FP4 TFLOPS、QSFP+ 40 GbE 四路万兆、4 路 CAN FD），扩展 4 个 USB 3.2 Type-A、1 个 Type-C、双 SIM 卡槽（4G/5G）、2 个 3.5 mm 音频口、I2C、UART、4 路 PWM 执行器直控与 9–36V 供电，可选 4 路 GbE PoE+（4× 25W）与双天线 RTK GNSS，瞄准端侧本地运行生成式 VLA 大模型与人形机器人（2026 年 11 月底发货）。
   - 四类开箱即用行业套件：配合 256 GB / 1 TB / 2 TB NVMe SSD、ZED SDK、ROS 2 与 NVIDIA Isaac ROS，预打包面向 AMR 环绕安全感知、越野重工加固型 GMSL2 + 激光雷达、物理 AI 多传感器同步数采（Physical AI Data Collection），以及人形机器人头躯 360° 感知与遥操作四大套件。

#### 二、核心数据核查、口径纠偏与工程边界

场景与利益披露：触发来稿为传感器行业自媒体《激光雷达老炮儿》（2026-10-28），内容编译自美股上市公司 Ouster 全资子公司 Stereolabs 2026-10-27 官方新闻稿；文中突出「股价大涨 10%」与高算力规格，服务于上市公司向资本市场强化「激光雷达 + 3D 视觉 + 端侧计算盒」全栈 Physical AI 叙事并带动高毛利传感器/配件捆绑放量。

- ✅ 核查一（股价单日 +10.37%、并购对价与 2026Q3 财报交叉验证，本工作台核查）：经核对公开市场交易与公司披露，2026-10-27 美股交易日 OUST（挂牌交易所确认为 Nasdaq: OUST，此前局部主体文档曾误写 NYSE: OUST）开盘 \$30.72、最高 \$33.06、收报 \$32.79，单日上涨 +10.37%（成交量 308 万股），10-28 收于 \$33.61（+2.50%），直接印证「大涨 10%」并非夸大。同时核实 Ouster 于 2026-02-04 以约 \$35M 现金 + 180 万股普通股（其中 70 万股分 4 年归属）完成收购 Stereolabs SAS（2025 年未经审计营收约 \$1,600 万且 EBITDA 为正）；一周后 2026-11-03 发布的 2026Q3 财报显示 Ouster 单季营收创新高至 \$5,933 万（同比 +50%）、Non-GAAP 毛利率 47%、传感器总出货超 27,000 台套、GAAP 净亏损收窄至 \$1,416 万，表明并购协同已兑现在收入扩张中。
- ⚠️ 核查二（官方商城实价 1,799–7,999 美元补齐与「157 TOPS vs 2,070 FP4 TFLOPS」跨精度算力陷阱，本工作台核查）：新闻稿与中文微信稿均隐去了单价、功耗上限与散热机制变化。本工作台直采 Stereolabs 官方商城实时规格（[Store Snapshot](https://www.stereolabs.com/store/products/zed-box-2)）查明：ZED Box 2 8GB 起售价 US\$1,799，16GB 升级加价 US\$350 至 US\$2,149（最大功耗 80W / 典型 55W，整机重 2,278 g 含可选风扇，主打被动散热）；而 ZED Box 2 Max 基础配置直接跳涨至 US\$5,999（T4000）与 US\$7,999（T5000），若叠加 2 TB SSD（+\$960）、PoE+（+\$300）与双 RTK GNSS（+\$500），顶配单盒逼近 9,759 美元，且最大直流功耗暴增至 250W（9–36V，含 40–130W USB PD），外壳必须从无风扇被动散热转为工业主动风冷（actively cooled）（官方商城同时标明 Max 工作温度下限扩展至 -25°C，略宽于新闻稿统一的 -20°C 至 +50°C）。更核心的工程纠偏在于：Orin NX 157 TOPS 为 INT8 稀疏算力，而 Thor T5000 的 2,070 TFLOPS 为稀疏 FP4 浮点算力（稠密 FP4 减半，FP8/FP16 更低）——两者分属不同数值精度量纲，直接做 13.2 倍算力除法会高估原生 BF16/FP16 VLA 模型不经量化蒸馏时的真实端侧加速比。
- ⚠️ 核查三（载体板卡同质化竞争 vs 数采/多传感器硬件同步真壁垒，本工作台推断）：在 [NVIDIA](../entities/companies/NVIDIA.md) Jetson 生态中，研华、Connect Tech 等工业载板商同样提供 Orin/Thor 工控机，核心芯片与基础毛利主要流向 NVIDIA；Ouster/Stereolabs 的差异化切口在「数采级硬件帧同步 + ZED X/Ouster 数字雷达统一时钟线」。对照本库 [Maxinsights](../entities/companies/Maxinsights.md) 自研 MaxSLAM 硬同步（ATE 4.24 mm）与 [Eidon AI](../entities/companies/Eidon%20AI.md) 因外部采集器规格碎裂而停摆的教训，ZED Box 2 直接把「多路 GMSL2 + LiDAR 同步采集套件」产品化卖给数采厂与机器狗/人形本体原型团队，是一笔比纯算力盒子更扎实的硬件生态生意；但大批量商业化人形或 AMR 客户起量后仍倾向定制精简 PCB 域控以砍掉 5,999–7,999 美元成品箱的封装与渠道溢价。

| 机型版本与模块 | 官方商城基础售价（美元） | 算力与精度口径（官方标称） | 功耗 / 散热 / 尺寸规格 | 核心接口差异与适用场景 |
| :--- | :--- | :--- | :--- | :--- |
| ZED Box 2 8GB (Jetson Orin NX 8GB) | US\$1,799（256 GB SSD 起） | 117 TOPS（INT8 稀疏） | 80W Max / 55W 典型；被动散热（可选风扇）；234.4×176.3×54.0 mm | 8x GMSL2、2x USB 3.1、2x GbE、2x CAN（DB9）、1x SYNC+IO；轻量化 AMR 与工位常规深度视觉 |
| ZED Box 2 16GB (Jetson Orin NX 16GB) | US\$2,149（+US\$350） | 157 TOPS（INT8 稀疏） | 80W Max / 55W 典型；2,278 g；-20°C 至 +50°C | 同标准款配置（SSD 升 1TB/2TB 需加 \$580/\$880）；多摄融合、目标追踪与神经深度估计 |
| ZED Box 2 Max T4000 (AGX Thor 64 GB) | US\$5,999 | 1,200 FP4 TFLOPS（稀疏） | 250W Max（9–36V）；主动风冷；261.5×206.5×84.8 mm；-25°C 至 +50°C | 1x QSFP+ 30 GbE（3x 10GbE）、4x USB 3.2 A + Type-C、双 SIM、4x PWM；中等端侧 VLA 与激光雷达融合 |
| ZED Box 2 Max T5000 (AGX Thor 128 GB) | US\$7,999（顶配选装近 \$9,759） | 2,070 FP4 TFLOPS（稀疏） | 250W Max（主动风冷）；SSD 1TB/2TB 加 \$600/\$960；PoE+ 加 \$300；RTK 加 \$500 | 1x QSFP+ 40 GbE（4x 10GbE）、4x CAN FD；端侧本地生成式基础模型、人形遥操与多传感器数采中心 |

#### 三、赛道横向对比与定位

在具身智能端侧感知与算力集成层，Ouster（Stereolabs）与其他三类产业玩家形成清晰分工与替代张力：

| 玩家类型与代表 | 典型产品定位与核心指标 | 生态与商业变现模式 | 结构优势与长期挤压风险 |
| :--- | :--- | :--- | :--- |
| Ouster + Stereolabs（传感+算力一体盒） | ZED Box 2（\$1,799–\$7,999）；REV8 数字激光雷达 + 8 路 GMSL2 双目同步 | 卖多传感硬件套件 + ZED SDK 绑定，2026Q3 营收 \$5,933 万、47% 毛利率 | 解决「多摄+LiDAR」硬件同步与开箱调试痛点，直接承接数采套件与中小 AMR 车队 |
| NVIDIA 原厂方案与传统工控载板商（Advantech / Connect Tech） | Jetson AGX Thor 原厂开发套件 / 工业载板 | 芯片+SDK（Isaac ROS）生态分发或工控机硬件差价 | 芯片定价与底层驱动权在 NVIDIA 手中，纯载板易同质化、缺乏自有相机与 LiDAR 协同 |
| 专用数采硬件引擎（[Maxinsights](../entities/companies/Maxinsights.md) MaxSLAM / [Eidon AI](../entities/companies/Eidon%20AI.md) 开源套件） | MaxSLAM 双目+IMU（4.24 mm ATE）或 \$200 BOM 级穿戴套件 | Maxinsights 卖清洗后可用训练工时；Eidon AI 已因商业模式断裂停摆 | ZED Box 2 Max 定位高于轻量化人手采集帽，更适合车载、工位及全身机器人数采台架 |
| 头部自研域控本体厂（Tesla / Figure） | 自研车载或人形主控域板（集成视觉输入与伺服总线） | 整机量产 BOM 内部消化，跳过第三方工业外盒溢价 | 车队达万台级后必定自研精简定制 PCB，压缩通用 Box 类产品在头部整机厂的渗透空间 |

### 观点与可反驳条件

- ==观点==：==Ouster 借 Stereolabs 推出 ZED Box 2 系列并获股价单日 +10.37% 反馈，本质是把激光雷达单机硬件升级为「多路 GMSL2 立体视觉 + 数字雷达硬件同步 + Jetson Orin/Thor 载板」的标准化边缘感知底座；其在 2026–2027 年最稳健的商业落点并非替已经重度自研域控的头部人形厂供货，而是向工业 AMR、特种越野设备及具身数采实验室出售 1,799–7,999 美元的「五合一开箱同步套件」==。但从 80W 被动散热跳涨至 250W 主动散热与近万美元总配价来看，Thor Max 版在功耗、体积与成本上仍偏重研发原型与大型移动平台，且核心算力毛利与 FP4 生态适配节奏仍受制于 NVIDIA 上游模组。
- ==推翻条件==：
  1. ① 若截至 2027 年 Q3 财报，Ouster 并表 Stereolabs 后的整体传感器出货虽持续增长，但 Non-GAAP 毛利率从 2026Q3 的 47% 跌破 40% 且管理层披露嵌入式计算盒（ZED Box 系列）拉低硬件毛利、或全年边缘计算产品收入占比低于 10%，则「边缘计算盒协同抬升系统客单价与盈利弹性」的判断将被推翻。
  2. ② 若在 2027 年底前，主流中小 AMR 与具身数采客户普遍改用低价通用 Jetson 载板（<1,000 美元）搭配软件 PTP 网络时间协议或第三方低成本 GMSL2 解串卡即可完成多摄与 LiDAR 同步，而不再为 Stereolabs 的 SYNC+IO 与 ZED X 成套打包支付溢价（导致 Stereolabs 硬件增速低于 Ouster 激光雷达主业增速），则「硬件同步与多传感打包构成持续商业壁垒」的观点将被推翻。

---

## 原文摘录与一手信源存证

> Stereolabs 正式推出新一代工业级边缘 AI 计算产品 ——ZED Box 2 系列。该系列瞄准自主移动机器人（AMR ）、工业机器视觉与空间 AI 的规模化落地需求，主打高算力、多摄同步与工业级可靠性，为生产场景下的物理 AI 应用提供一体化的感知与端侧计算底座。消息公布后，Ouster股价随即大涨10%。
> — 原文摘录，PDF p.1；证据 `digest-material-15b4f21c3bcf6154f8876a794e76b276bb85898d6de89e25b83d15c1a773d768-excerpt-1@1`

> 本次发布的 ZED Box 2系列共分为标准款与 Max 款两条产品线，分别对应不同量级的物理 AI工作负载。
> — 原文摘录，PDF p.1；证据 `digest-material-15b4f21c3bcf6154f8876a794e76b276bb85898d6de89e25b83d15c1a773d768-excerpt-2@1`

> 其中标准款 ZED Box 2 搭载 NVIDIA Jetson Orin NX 芯片，最高提供 157 TOPS AI 算力，配备16GB 内存，采用 55 毫米高度的无风扇紧凑型外壳，可直接内嵌于 AMR 或工业工作站中，稳定运行神经深度估计、目标追踪、多摄像头融合等常规感知算法。
> — 原文摘录，PDF p.1；证据 `digest-material-15b4f21c3bcf6154f8876a794e76b276bb85898d6de89e25b83d15c1a773d768-excerpt-3@1`

一手材料：

- Stereolabs Launches ZED Box 2 Series for Physical AI and Vision in Production Robots | Tue, 10/27/2026 - 07:00 · Ouster / Stereolabs · [原站](https://ouster.gcs-web.com/news-releases/news-release-details/stereolabs-launches-zed-box-2-series-physical-ai-and-vision) · [主体档案：Ouster IR](../entities/companies/Ouster%20IR.md) / [主体档案：Stereolabs](../entities/companies/Stereolabs.md) · [NotebookLM](https://notebook.google.com/notebook/cac99041-d3b9-449e-a192-12bb4b1ad391) · [Drive](https://drive.google.com/file/d/1XalFyNuXucYMcpVAcx9WEWycOQ8c9X7S/view?usp=drivesdk)
  材料版本 `digest-material-67f7db6bfbe9c8fbcad00699310b69ab94167539b579e2bc7e4232c51adb46b3@4`；获取方式 `notebooklm_indexed_text`。
  > The high-performance edge AI series brings up to 2070 TFLOPS of compute, innovative cooling, and native support for up to 8 synchronized GMSL2 cameras for 360° multi-view perception. — 原文提取
  > company and leader in 3D AI vision, today introduced the ZED Box 2 Series, a new generation of industrial edge AI computers engineered for autonomous mobile robots (AMRs), robot vision, and spatial AI systems requiring high-throughput multi-camera perception and edge processing. — 原文提取
- Stereolabs Store: ZED Box 2 / Max T4000 / Max T5000 Official Pricing & Hardware Specs · Stereolabs · [原站](https://www.stereolabs.com/store/products/zed-box-2) · [主体档案：Stereolabs](../entities/companies/Stereolabs.md) · [本地原件](../../../raw/6e798a891e9019d0286d9616e8d2e6db24744358138d2ca815d5639ef67f1e5f)
  材料版本 `digest-material-6e798a891e9019d0286d9616e8d2e6db24744358138d2ca815d5639ef67f1e5f@1`；获取方式 `http_full_text`。
  > === https://www.stereolabs.com/store/products/zed-box-2 === ZED Box 2 | Embedded PC | Stereolabs Skip to content Meet the New ZED Box 2 Series – Physical AI Power for Robotics. — 原文提取
  > === https://www.stereolabs.com/store/products/zed-box-2-max-t4000 === ZED Box 2 Max | Embedded PC for Physical AI | Stereolabs Skip to content Meet the New ZED Box 2 Series – Physical AI Power for Robotics. — 原文提取

归属与范围：已核对 Ouster / Stereolabs 于 2026-10-27 07:00 通过 Business Wire 发布的 15,926 字符英文官方新闻稿，并新抓回 Stereolabs 官方商城 ZED Box 2 / Max T4000 / Max T5000 实时规格与美元标价快照（\$1,799 / \$2,149 / \$5,999 / \$7,999，补充触发稿遗漏的 80W vs 250W 功耗与主动散热边界）；独立交叉核实 Ouster (Nasdaq: OUST，同步纠偏前序档案局部 NYSE 误标) 2026-02-04 收购 Stereolabs 对价（约 \$35M 现金 + 180 万股）、2026-10-27 股价收涨 +10.37%（\$32.79）及 2026-11-03 发布的 Q3 2026 业绩（营收 \$59.33M、+50% YoY、47% Non-GAAP 毛利率、\>27,000 台套出货），并揭示 157 TOPS（INT8）与 2,070 FP4 TFLOPS 跨精度算力口径差异；ZED Box 2 系列单线毛利率与首批客户批量订单量保留未披露缺口。

来源缺口：

- `not_disclosed`：Ouster 与 Stereolabs 均未披露 ZED Box 2 系列在 Jetson 模块采购后的单台硬件毛利率、2026Q4 首批预售出货量，以及 Max T4000/T5000 机型的整机实测重量（官方商城仍标注 Coming soon）。 [线索](https://www.stereolabs.com/store/products/zed-box-2)
- `not_disclosed`：官方新闻稿未给出 ZED Box 2 Max 在 1,200/2,070 FP4 TFLOPS 标称算力下运行具身 VLA 模型的真实端侧帧率（Hz）、FP4 量化精度损失评估及 250W 满载热稳态噪音与降频阈值实测报告。 [线索](https://ouster.gcs-web.com/news-releases/news-release-details/stereolabs-launches-zed-box-2-series-physical-ai-and-vision)

[返回赛道总览](../赛道总览.md#digest-15b4f21c3bcf6154) · [返回导读索引](README.md) · [主体档案库](../entities/README.md)
