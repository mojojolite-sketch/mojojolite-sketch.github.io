---
title: "源荷协同：重构 AIDC 冗余体系，降低建设成本"
type: blog_digest
sector: "分布式计算"
source: "WNT Energy Inc. (Tony Hwong) · 加村Energy这些事"
published_at: "2026-11-28"
raw_sha256: "bb4328eb3d9f4a23e20f53b033784dc6bf2f66df66a1f41ff022a2422b52243b"
material_version: "digest-material-bb4328eb3d9f4a23e20f53b033784dc6bf2f66df66a1f41ff022a2422b52243b@1"
origin_url: "https://www.wntenergy.ca/"
trigger_source: "加村Energy这些事"
trigger_url: "https://mp.weixin.qq.com/s/exslglukrcJZ44YCpEo4UA"
user_comments: ""
status: "processed_with_gaps"
primary_topic: "供电、燃机与并网基建"
secondary_topics: ["液冷、水务与机房落地"]
topic_confidence: 0.6442
---

<a id="digest-bb4328eb3d9f4a23"></a>
# 源荷协同：重构 AIDC 冗余体系，降低建设成本

2026-11-28 · WNT Energy Inc. (Tony Hwong) · 加村Energy这些事 · 有来源缺口

[本地原件归档](../../../raw/bb4328eb3d9f4a23e20f53b033784dc6bf2f66df66a1f41ff022a2422b52243b) · 固定材料版本 `digest-material-bb4328eb3d9f4a23e20f53b033784dc6bf2f66df66a1f41ff022a2422b52243b@1` · [一手原站](https://www.wntenergy.ca/) · [触发线索（加村Energy这些事）](https://mp.weixin.qq.com/s/exslglukrcJZ44YCpEo4UA)

## 深度拆解与复核

### 口径与利益披露：BTM 能源开发商兼 50 Hz 燃机推广方的工程降本模型

本文作者 Tony老师傅（本名 Tony Hwong / Tony Huang）系加拿大温哥华能源开发与工程咨询机构 [WNT Energy Inc.](https://www.wntenergy.ca/) 首席技术官（CTO），其深化版报告基于 WNT Energy 2026 年 11 月《北美 AIDC 造价解构与系统级降本路径深度分析》扩写，底层 50 MW Critical IT 算例为 Pre-FEED Class 4+（精度带 -20% / +30%）工程经济模型，不含具体供应商非公开底价，亦非已签约固定报价或 Uptime Institute 官方认证承诺。

- ✅ 本工作台核查（商业激励与 50 Hz 燃机立场关联）：核验 [WNT Energy Inc. 官方网站](https://www.wntenergy.ca/) 发现，WNT Energy 已于 2026-09-15 与东方汽轮机（Dongfang Turbine Co., Ltd.）正式签署合作协议，在加拿大市场推广现货交付窗口较充裕的 50 Hz Dongfang G50 燃气轮机（官网披露已签合同、预计 2027 年首批交付）。因此本文第 3.4 节专门论证「50 Hz 机组增量残余成本仅 0–90 US$/kW」以及第 4–5 章主张「中国合规预制撬块 + 上游燃机替代机房柴发」，与作者及 WNT Energy 的商业推广路线高度一致，阅读时须将供应链价差与 50 Hz 适配成本剥离重估。

---

### 一、全球单瓦造价坐标系与北美基准 WBS 拆解

#### 1.1 全球造价边界：为什么 \$8/W 与 \$16/W 不可直接对比

- ✅ 本工作台核查（Turner & Townsend 2026–27 指数核心锚点）：对照已归档的 [Turner & Townsend《2026–27 全球数据中心建设成本指数》（2026-10-22 发布）](https://www.turnerandtownsend.com/insights/data-centre-construction-cost-index-2026-27/)，该指数确为第 10 版，覆盖全球 62 个市场（新增 12 个）、500+ 项目与 401 位行业受访者，以 60 MW 风冷超大规模项目纯建安口径为基准：全球均值 11.70 US$/W（中位数 11.57 US$/W），上海 5.79 US$/W 为最低（60 MW 约 3.47 亿美元），东京 18.28 US$/W 为最高（约 10.97 亿美元），极差 3.16 倍；2026 年全球建安通胀 +6%，北美与欧洲同比上涨 +13%（51.1% 受访者所在区年涨超 6%，16.5% 超 15%）。美国风冷均值 12.08 US$/W（达拉斯 10.51、塔尔萨 10.57、北弗吉尼亚 11.80、芝加哥 13.28、新泽西 14.22、硅谷 15.01），多伦多 11.76 US$/W；升级至 140 kW+/柜 AI-Ready 液冷（对比美国存量新建均值 27 kW/柜）需在风冷上净增 +7%–10%，美国 AI-Ready 区间落于 14.00–16.00 US$/W（已含液冷溢价，不可二次叠加）。
- 决定单瓦造价的五项边界条件与修正幅度：
  1. Scope Boundary（统计范围）：T&T 指数仅含 Shell and core、Architectural fit-out、M&E fit-out、GC preliminaries、GC margin、GC contingency 与 M&E equipment 七项总包建安；补齐土地、高压外线、深基础、双路由暗光纤、A/E 与 APEGA P.Eng. 签章、环评、CxA 调试、10% 业主预备费及 L3.5 机柜分液歧管/rPDU/BBU 等至全口径总投入（TOC）需增加 +\$2.0–\$3.5/W；若再计入上游 BTM 燃气发电岛与构网储能，全园口径另增 +\$2.4–\$3.1/W。
  2. Redundancy Tier（冗余等级）：容忍 Checkpoint 中断的预训练集群可用单母线轻备电（Tier I/II），而商业推理/多租户 AIDC 需并发可维护（Concurrently Maintainable，对标 Tier III），双路径配电、2N 中央 UPS、全额柴发与双冷源使机电装机达 IT 铭牌的 1.8–2.4 倍，产生 +25%–40% 机电与空间溢价。
  3. Cooling & Density（散热体制）：从 10–15 kW/柜（或 10–30 kW/柜）风冷升至 60–140+ kW/柜冷板液冷（DLC），新增列级 CDU、SS316L 洁净焊管、盲插快接头 UQD、化学钝化冲洗与高流母线。
  4. Site & Nonlinearity（选址气候与规模反经济）：北美仅 18.5% 受访者认为总包产能充足（北美 26%，77.8% 认为总包产能紧张或不足），导致 >250 MW 超大园区出现反规模经济——异地 Per diem、FIFO 营地与抢工推升 +\$0.1–\$0.8/W+；加拿大寒区 5 个月封冻期带来抗冻桩基与冬施附加费 +8%–12%。
  5. Supply Chain & Contracting（供应链与发包）：西方短名单 OEM 散件与 Tier-1 EPC 大包一口价（Lump-Sum / GMP）叠利，比「跨国合规预制撬块 + 本地土建 + 业主 CM-at-Risk 分包直管」高出 +50%–85%（设施侧）。

#### 1.2 阿尔伯塔 50 MW 传统并网 Tier III 基准（\$750.00M / \$15,000/kW-IT）与四大病灶

基准设定为 50 MW Critical IT（800 台 60 kW 液冷算力柜 + 100 台 20 kW 网络柜 = 900 柜）。以多伦多 11.76 US$/W × 阿省寒区冬施 1.10 × 液冷 1.10 = 14.1 US$/W 纯建安子集为锚，补足排除项与 10% 预备费后全口径 TOC 为 \$750.00M（15,000 US$/kW-IT）：

| WBS 编码 | 核心工程范围与传统配置 | 基准金额 (USD M) | 占基数比 | 单位造价 (US$/kW-IT) |
| :--- | :--- | :---: | :---: | :---: |
| WBS-00 | 土地、抗冻深桩基与约 16,500 m² 厂房外壳（含 ~2,500 m² 锂电间） | 76.50 | 11.2% | 1,530 |
| WBS-01 | 60 MW+ Tier 4F 柴油备发群、SCR 脱硝与双壁伴热油罐区 | 106.34 | 15.6% | 2,127 |
| WBS-02 | 西方 OEM 变配电、80–115 MW 2N 中央 UPS 与锂电室（~29 万电工工时） | 188.50 | 27.6% | 3,770 |
| WBS-03 | 60 MW 磁悬浮冷机/冷却塔、蓄冷罐、西方 CDU（~18.5 万管工工时） | 116.80 | 17.1% | 2,336 |
| WBS-04 | 机柜、智能三相 rPDU、双路由暗光纤与双 MMR | 19.20 | 2.8% | 384 |
| WBS-05 | 专有 BMS/EPMS、安防与多分区消防气灭（NFPA 855） | 22.80 | 3.3% | 456 |
| WBS-06 | 重载架空地板、抗震支吊架网格与室内精装 | 15.20 | 2.2% | 304 |
| WBS-07 | 24–30 个月 Preliminaries、跨双冬措施与 Tier-1 总包毛利 | 100.48 | 14.7% | 2,010 |
| WBS-08 | 全西方 A/E、环评审批、PM 保险与复杂 2N 联调 CxA | 36.00 | 5.3% | 720 |
| Base Subtotal | 不含预备费基数小计（可比纯建安约 14.1 US$/W-IT） | 681.82 | 100.0% | 13,636 |
| WBS-09 | 业主预备费（Owner Contingency，10%） | 68.18 | — | 1,364 |
| 总计 | 传统并网基准全口径总投资（L2+L3+L3.5） | 750.00 | — | 15,000 |

四大成本推高机制集中在 WBS-02、03、01、07 四大板块（合计 \$512.12M，占基数 75.1%、总投资 68.3%）：
1. 孤立围墙下的跨层重复冗余：全球 76% 项目沿用「公网接入 + 柴油备电」，为防公网停电配 60 MW+ 柴发，为跨柴发 15–60 秒启动死区叠加 2N UPS 与 15 分钟防爆锂电间，7/12°C 冷冻水配磁悬浮冷机与大型蓄冷罐，多占约 3,300 m² 建筑外壳。
2. 卖方寡头与长交期溢价：58.4% 受访者视主设备长交期为第一风险（电力可用性 56.1%、液冷受限 64%、成本上涨仅 18.5%），西方短名单 OEM 供货价达合规跨国预制到岸价的 2.0–2.8 倍；且北美 Tier 4F SCR、UL 2085 双壁油罐、NFPA 30 围堰与并机吊装占柴发总造价 55%–67%。
3. 熟练工紧缺与 6.0 倍全负担时薪差：81.3% 市场面临技工短缺（中度 43.4%、高度 37.9%，MEP 薪资年涨 7%）。阿省 2.5 倍全负担费率下（含 8% 紧缺溢价），IBEW 电工达 101.70 US$/h（142.38 CAD/h），UA 管工达 103.06 US$/h（144.28 CAD/h），钳工 98.61 US$/h，重机手与普工 56.45–72.57 US$/h，对比国内安装公司全成本 15.2–16.9 US$/h（1.8 万–2.0 万元/月、176 工时/月）相差约 6.0 倍；47.5 万现场核心技工工时在精细作业上导致单道人工费达工厂预制的 8–12 倍。
4. 24–30 个月串行工期横跨两个阿省严冬（11 月至次年 3 月封冻期），叠加 Preliminaries（占建安 10%–12%）与多层总包风险金。

---

### 二、阿尔伯塔 BTM 源荷协同：监管实证、PACM 容量矩阵与五级能量接力

#### 2.1 为什么选阿尔伯塔 BTM：气价、噪声与法案监管实证

全球采用现场自备电源的数据中心占比已从 2025 年 14% 升至 2026 年 42%（85% 项目面临 1 年以上并网排队，32% 超 2 年）。阿尔伯塔优势在于：① WCSB 低价气源（AECO 长期折价）与工业棕地绕开 3–5 年主网排队；② AUC Rule 012 夜间 40–45 dBA 噪声红线惩罚脉冲柴油机，连续燃烧 + SCR 燃机环评确定性更高；③ 物理离网（Zero-Export）依法豁免阿省 Bill 12 Data Centre Levy 针对并网算力征收的 2.0% 硬件资产税（联邦 15% + 阿省 8% 合计 23.0% 企业所得税仍照章缴纳）。

- ✅ 本工作台核查（AUC 两起标志性案例与拟议 Bill 42 核验）：
  1. Synapse Olds 园区驳回案（2026-08-17）：CBC 与 AUC 记录确认，Synapse 拟在 Olds 镇建 1 GW 数据中心、1.4 GW 燃气电厂并叠加 600 台（约 1,800 MW）应急柴油发电机，于 2026-08-17 被 AUC 以距离居民社区过近、选址不适正式驳回。
  2. Greenlight / Meta Sturgeon County 案（AUC Proceeding 30261）：AUC 于 2026 年 6 月批准 Greenlight 1,864 MW（一期 932 MW）单轴 H 级联合循环电厂，配套邻近 Meta 约 1,750 英亩园区（AESO P2936 GLDC Load，含 970 MW Rate DTS 网供与 Alta Reg 117/2026 桥接限电约束）；但因沿用传统 Tier III 与单气源考量仍规划 848 台备发柴机（1.7–2.1 GW），触发 LPRT 116 起居民上诉。
  3. 拟议 Bill 42（2026 年 11 月提交）：强制 >=10 MW 数据中心由 AUC 统管、执行近零冷却水消耗标准、强制余热回收对接及距最近住宅 >=600 m 退距（且限制占用 Class 1/2 农地）。
- ✅ 本工作台核查（2024 年 1 月阿省极寒断气实证与燃机双燃料冷启对比）：对照已归档的 [AESO 2024-01-13 Grid Alert 公告](https://www.aeso.ca/aeso/newsroom/albertans-asked-to-conserve-power-to-minimize-potential-for-rotating-outages/) 与 [MSA《2024 年 1 月与 4 月电力事件审查报告》（2024-08-06）](https://www.albertamsa.ca/assets/Documents/January-and-April-2024-Event-Report.pdf)，2024-01-11 阿省极寒（<-40°C）创下 12,384 MW 全省负荷峰值，01-13 15:30 AESO 宣布 EEA 3（旋转备用逼近 10 MW，省应急局 18:44 推手机节电警报靠公众削减 200–350 MW 避险），主因 WCSB 集输冻堵、焦耳-汤姆逊（JT 效应每 1 MPa 降温 4–5°C、NGTL 干线 6–10 MPa）诱发重烃反凝析（HDP）与水合物冰堵，叠加多座煤/气机组跳机（如 H.R. Milner、Sundance 6）与风电趋零。对比得州 Abilene（Lancium / Crusoe Stargate 一期）去大柴发路线，阿省寒区 BTM 必须用「双燃料燃气轮机（日常管道气 + dP/dt 与低压双判据在线切 #1/#2 ULSD 或 Jet-A，配 48–96 h 伴热油库）+ 站级 GFM BESS」或「双物理独立气源（上游造价仅为下游大柴发的 1/8）」闭环断气风险；在 -40°C 下，燃机电火花点火 + MIL-PRF-23699 合成滑油（倾点 <-50°C）+ 无水冷缸套冷启可靠性远优于须维持 15°C（快启 30–40°C）缸套水加热的压燃柴油机与纯火花点火单燃料中高速 SI RICE（仅瓦锡兰 31DF/34DF/50DF 等少数中速机具备成熟双燃料切油能力）。

#### 2.2 PACM 可靠容量判据、五级能量接力链与配电演进边界

在 50 MW Critical IT（夏季设计峰值 PUE = 1.15，园区净电力需求 57.5 MW）下，须按电力可用容量矩阵（PACM）最不利场景净出力校核后，方可将机房 60 MW 柴发群减至仅留 2×1,000 kW（1+1 冗余、\$1.80M / 36 US$/kW-IT）极寒静音生保黑启动撬块：
- PACM 四项硬约束：① 最热夏季干球保证净出力（若 8×10 MW 燃机按高温 85% 折算，N-1 仅 59.5 MW 毛出力、扣厂用电与衰减后仅余 2.0 MW 紧平衡，须增配机组或加装 >15°C 湿膜蒸发冷却挽回 8%–12% 夏季出力）；② 在线热力维护（联合循环设 35–45 m 旁路烟囱或单循环热备燃机带可中断负荷，大修锁定 <=4°C 占全年 >70% 时段）；③ 13.8/34.5 kV 闭环分段 DBDB 双母线双断路器（摒弃单母线分段），28×2.5 MVA（70 MVA）干变逐柜 A/B 通道平衡校核；④ 20%–30%（大型园区 80–90 MW 级）可中断计算负荷配 20–500 ms DTT 快切，机端设 IEEE C37.013 GCB、<=40.5 kV 母联设 Is-limiter、Yg/Δ + Z 型接地变 + 200–400 A LRG，并按 NEC 110.16 校核 GFM 逆变器 1.1–2.0 倍限流孤岛弧闪保护。
- 五级时间尺度无盲区接力：第 1 级（10 µs–20 ms）服务器 PSU 电容（保持 16–20 ms）+ 2–3 ms STS；第 2 级（2 ms–4 min）机柜内嵌 48 V LFP BBU 钳位直流母排；第 3 级（<5 ms–100 ms）站级 GFM BESS 构网稳频（响应 <=50 ms、主流 <10 ms，RoCoF <= ±1 Hz/s，低频谷值距减载线 >=0.3 Hz，燃机轴系功率斜率 <=2–5 MW/s）；第 4 级（0.5 s–25 min）DTT 快切 + 燃机一次调频/切油 + 快启燃机并车 + 专用 3×600 kVA（2+1、10 min 锂电、\$0.73M）高频 SiC 小 UPS 专保全部 36 台 CDU 水泵与 VESDA；第 5 级（>=12 h 底线至 48–96 h）双燃料伴热储油或双独立气源。取消 2N 中央双变换 UPS 与 ~2,500 m² 防爆锂电室后，配电效率由 94.6%（损耗 2.85 MW）升至 97.6%（损耗 1.23 MW，节电 1.62 MW），净减 -\$82.0M（-\$1,640/kW-IT；若租户自带 NVL72 BBU Shelf 可再扣 \$6.75M）。
- ⚠️ 本工作台推断（50 Hz 机组增量残余成本与 800 VDC / MVDC 演进边界）：针对作者提出的 50 Hz 燃机适配路线，机械减速齿轮箱（3,000→1,800 rpm）确已超出商用极限近 3 倍而不可行；若租户接受 47–63 Hz 宽频服务器 PSU 经加厚防磁饱和铁芯 CSA C88 变压器直供，50 Hz 增量成本最低；若租户强制 60 Hz 母线，则须在源侧加装全功率「AFE 整流 + ±1,500 V DC 母线 + 60 Hz PCS」，在交流园区中该全功率换流链路的 CAPEX 增量与效率损失（约 1.5%–2.5%）远高于作者按「未来直流园区共享 PCS+BESS」假设折算的 0–90 US$/kW。当前工程稳健边界仍是「一期落地 415/480 V + 48 V BBU，空间预留二期 ±400 V / 800 VDC 与 MVDC（待 SSCB 10–100 µs 开断与 CPL 负阻抗阻尼 EMT 成熟）」。同时对外合同须严格隔离口径 A（园区供电与 DBDB 网可用性）与口径 B（租户机房 SLA），不得将口径 B 混同为 Uptime Tier III 认证。

---

### 三、寒区高温 DLC 去冷机化与中美加工序边界切分

#### 3.1 高温冷板 DLC 耦合阿省闭式绝热干冷（减 -\$760/kW-IT）

核心物理机制是单相冷板式液冷（DLC）将芯片排热温位较 7/12°C（ASHRAE CHWS 名义 10°C）冷冻水整体抬升 15–25°C：二次侧 TCS 供液提至 25–32°C、回液 35–45°C（ΔT = 8–12°C），带走 ~82% 显热（41.0 MW_th），剩余 ~18%（14.5–15.3 MW_th）由 CRAH 处理。50 MW 算例配置 16×4.2 MW 极寒型（-45°C）EC 变频绝热闭式干冷器（14+2）、12 台 ASME U-Stamp / ABSA CRN 认证 SS316L 隔离板换与 36 台 1.35 MW 液-液 CDU。
- 极端夏况四步闭环校核：57.50 MW 总输入电功率对应峰值净排热 55.5–56.3 MW_th；扣除两级板换合计 ~4.5°C（各 2.0–2.5°C）逼近温差与 35% 乙二醇/丙二醇物性折减（比热降 11%–15% 至 3.70 vs 4.18 kJ/[kg·K]、-40°C 粘度 >2.5 mPa·s 限干管流速 <=2.1 m/s），一次侧进干冷器 <=37.5°C、回液须 <=27.5°C。阿省年均干球 3.5°C、全年 8,760 h 中 >85%（~7,500 h）纯干式自然排热，~12% 过渡季 EC 满风运行，仅 0.4% 极端夏况（30–33°C、极值 35°C）利用内陆低湿（RH 20%–30%、湿球 17–19°C、干湿球差 12–16°C）启动高压软水绝热微喷雾，将进风拉低 7–10°C 至 22–24°C，锁定单台实测保证净排热 >=4.05 MW_th（14 台 >=56.7 MW_th）。模型年均冷却电耗压至 3.27 MW，年均 PUE 1.08–1.10（基准 1.097，峰值 1.15），WUE < 0.15 m³/MWh（较开式塔 1.0–1.8 m³/MWh 下降逾九成，契合拟议 Bill 42），WBS-03 总投由 \$116.80M 降至 \$44.45M（-61.9%）。配套六道极寒防线涵盖 10 月前 Auto Purge 吹扫、1.2 倍管容化学钝化冲洗（ASHRAE TCS TSS < 3 ppm、硬度 < 20 ppm）、17°C 露点闭环（供液高于露点 2–3°C）及 ANSI/ISA-71.04 G1 化学过滤。

#### 3.2 分工序工效比切分与五步互斥降本瀑布（\$15,000 → \$5,938/kW-IT；全园 \$8,340–\$9,040/kW-IT）

基于 2026 年 11 月汇率（USD/CAD = 1.40、USD/CNY = 6.71）、北美 RSMeans 与中国《电力建设工程预算定额（2025 年版）》工时矩阵（如干变 YD2-4 74.77 工时、10 kV 柜 YD3-171 29.34 工时、继保屏 YD5-1 10.32 工时、调试单列 YS 册备自投 15.9–31.8 工时与微机监控 292.1 工时），叠加阿省系数（撬装 1.15、复杂系统 1.60）：
- 阿省本地最优工序（北美/中国工效比 0.07–0.76）：机械土方（0.07–0.26）、钻孔桩（0.38）、本地重钢构吊装（0.22）与成型钢筋（0.76）留在本地，规避体积重海运倒挂与加拿大 25% 钢铝附加税。
- 中国工厂预制最优工序（工效比 0.80–2.03）：配电与二次接线（0.80–0.90）、SS316L 轨焊（1.20）、管道绝热（1.90）与设备承台（2.03）移入车间完成带电 FAT（中压柜在加本地持牌 CSA Panel Shop 终装或 CSA SPE-1000 验贴，APEGA P.Eng. 与 CSA Z462 弧闪签章）；白区取消架空地板改环氧素地 + 顶置支吊架网格，仍按实保留 IBEW 18.5 万工时与 UA 11.5 万工时，通过 7.5% CM-at-Risk 直管将工期由 24–30 个月压至 12–15 个月。

五步互斥瀑布汇总如下（含 10% 预备费同口径）：
1. 第 1 步（去机房 60 MW+ 柴发归位上游电站）：-\$115.00M（-\$2,300/kW-IT），WBS-01 仅留 2×1 MW 生保撬块（\$1.80M）；
2. 第 2 步（415/480 V 直供 + 机柜 48 V BBU 替 2N 大 UPS）：-\$82.00M（-\$1,640/kW-IT），厂房缩至 13,200 m²；
3. 第 3 步（高温 DLC + 寒区闭式干冷替冷机蓄冷）：-\$38.00M（-\$760/kW-IT）。前三步纯物理架构减法累计 -\$235.0M（-\$4,700/kW-IT，占总降幅 51.9%），纯西方 OEM 可比中间锚点降至 \$515.00M（\$10,300/kW-IT）；
4. 第 4 步（剩余主设备合规跨境预制净价差）：-\$128.00M（-\$2,560/kW-IT），已足额倒扣 WBS-06 专列 \$10.40M 认证、CBSA 关税预留与海铁重吊；
5. 第 5 步（厂内 FAT、减 35% 现场装配工时与 CM 去叠利）：-\$90.09M（-\$1,802/kW-IT）。
终点设施侧总投资收敛至 \$296.91M（\$5,938/kW-IT；纯建安子集 \$4.90/W-IT；若租户自带 NVL72 整机柜再扣 \$11.17M 至 \$285.74M / \$5,715/kW-IT），其中中国产值占不含预备费基数 \$269.92M 的 22.1%（\$59.63M），阿省本地留存 77.9%（\$210.29M，对齐 Altus 2026 C\$130–\$175/sf 厂房造价）。叠加配套 57.5 MW 上游燃气+30 MW/30 MWh BESS 发电岛（L1：\$120.0–\$155.0M / \$2,400–\$3,100/kW-IT），==全园合并总投资为 \$417.0–\$452.0M（\$8,340–\$9,040/kW-IT），即使全额计入自备电站仍比不含电厂的北美传统并网基准低 40%–44%==。

- ⚠️ 本工作台推断（落地四大敏感性与 Gate A–D 实操风险）：
  1. 选址一旦脱离埃德蒙顿/卡尔加里免津贴通勤圈，IBEW Local 424 强制每日免税食宿津贴（全省默认 C\$150/日，大草原城 C\$205/日）或 FIFO 营地将推高 +\$44–\$90/kW（+\$3.5M–\$6.0M）；首期缩至 10–20 MW 时固定成本摊薄使单耗回升 12%–18% 至 \$6,600–\$7,000/kW-IT。
  2. CBSA 海关对碳钢外壳撬块存在拆分触发 25% 钢铝附加税风险，须在 Gate B 取得 HS 8537/8504/8419 约束性预裁定（Advance Ruling）或改为「机电内撬出口 + 本地外壳总装」。
  3. 三大 FEED 闸门（PACM 最热净出力、EMT 10–30 MW/ms 阶跃仿真、干冷器极端夏况实测曲线）及 Gate D 50 MW 假负载 72 小时 IST（\$5.20M 硬投入）决定降本是否牺牲可用性；其中第 4–5 步省下的 \$218.09M 若在多标段 CM 模式下发生海关滞留或现场返工（6 个月跨冬延误即可增加逾千万美元措施费与租约违约损失），实际交付净降幅将明显收窄。

---

### 观点与可反驳条件

- ==观点==：北美高密 AIDC 造价高企（\$15,000/kW-IT）的首要根因是「公网不受控导致的跨层重复冗余」，而非单纯西方设备贵——仅通过阿尔伯塔 BTM 源荷协同将备电归位上游双燃料燃机、用机柜 48 V BBU 替代 2N 中央大 UPS、并用 25–32°C 高温 DLC 配合阿省干冷气候取消冷机群，即可在全西方供应链口径下净削减 \$4,700/kW-IT（降至 \$10,300/kW-IT，贡献总降幅的 51.9%）；叠加合规跨国预制撬块与 CM-at-Risk 错峰直管后，即使全额并入上游 57.5 MW 自备电站，全园合并造价仍可压至 \$8,340–\$9,040/kW-IT（较不含电厂的传统并网基准低 40%–44%），并在 -40°C 极寒与 Bill 42 近零水耗约束下兼顾环评通过率。但对于必须接入 60 Hz 交流租户的 50 Hz 燃机方案，全功率变频换流链路与多标段跨境接口摩擦（CBSA 关税归类 + CSA 现场整改）是最易侵蚀纸面降本空间的隐性风险点。
- ==推翻条件==：
  1. ① 全园合并 CAPEX 突破 \$10,500/kW-IT：若阿尔伯塔省 2027 年前获批开工并完成 72 小时 IST 移交的 30–100 MW 级 BTM 源荷协同 AIDC（含上游燃机+BESS 发电岛与 L2–L3.5 设施），经审计全口径合并总投资普遍高于 \$10,500/kW-IT（较传统并网基准降幅不足 30%），则「源荷协同+跨境预制可净省 40%–44%」的工程经济模型被证伪；
  2. ② CBSA 关税或 CSA/ABSA 合规返工吞噬第 4–5 步净节省：若中国出口北美预制电气撬块（E-House / Power Skid）与液冷泵阀撬在加拿大清关与 CSA SPE-1000 / ABSA CRN 现场验收中普遍触发 25% 钢铝附加税或导致总工期超过 20 个月、跨境摩擦与整改成本占第 4–5 步名义价差（\$218M / 50 MW）比例超过 50%，则「保留 77.9% 本地产值即可规避贸易与合规摩擦实现 \$5,938/kW-IT 设施造价」的路径不成立；
  3. ③ 极端寒潮或夏热工况下无冷机/无大柴发架构出现系统性失守：若采用「无 2N 中央 UPS + 仅 2×1 MW 生保柴发 + 无机械冷机干冷器」的商业智算中心在投产后 24 个月内因极寒断气切油失败、CDU 断流跳机或夏季高温微喷雾降额导致园区实际年化可用率低于 99.9%（或触发租户 SLA 重大违约索赔），则 WNT 架构用系统边界重构替代传统物理冗余的安全性前提被推翻。

---

## 原文摘录与一手信源存证

> 评估任何数据中心降本方案之前，首先需要在全球造价坐标系中确立客观锚点。根据 Turner & Townsend 发布的《2026–27 全球数据中心建设成本指数》（覆盖全球 62 个市场、500 余个真实交付项目与 401 位行业受访者，以 60 MW 风冷超大规模项目纯建安口径为基准）\[1\]，全球 62 个市场的平均建造单价已达11.70 US\$/W（中位数11.57 US\$/W），但区域分化极为显著：最低的上海为5.79 US\$/W，最高的东京达18.28 US\$/W，极差高达3.16 倍——这意味着同一座 60 MW设施仅建造端投资便相差约 7.50 亿美元（上海约 3.47 亿美元，东京约 10.97 亿美元）。
> — 原文摘录，文字段落 1；证据 `digest-material-bb4328eb3d9f4a23e20f53b033784dc6bf2f66df66a1f41ff022a2422b52243b-excerpt-1@2`

> 上述四大病灶清晰表明：要在北美实现大幅度降本，须依次精简跨层重复冗余设备（改架构）、打破西方单一硬件溢价（改供应链）、把高工时精细配线焊接移出北美寒区现场（改制造边界），并压缩总包层级与工期（改组织模式）。
> — 原文摘录，文字段落 2；证据 `digest-material-bb4328eb3d9f4a23e20f53b033784dc6bf2f66df66a1f41ff022a2422b52243b-excerpt-2@2`

一手材料：

- WNT Energy Inc. Corporate Profile & Dongfang G50 Canada Cooperation Disclosure · WNT Energy Inc. · [原站](https://www.wntenergy.ca/) · [主体档案：WNT Energy Inc.](../entities/companies/WNT%20Energy%20Inc..md) / [主体档案：WNT Energy Research Catalog](../entities/people/WNT%20Energy%20Research%20Catalog.md) · [本地原件](../../../raw/12772fe8988b87130b18b4d84042930e28b0e96f36508855713b3f4cf9a89271)
  材料版本 `digest-material-12772fe8988b87130b18b4d84042930e28b0e96f36508855713b3f4cf9a89271@1`；获取方式 `curl_verified_primary`。
  > Practical power solutions for data centers, computing loads, and industrial users. — 原文提取
  > On 15 September 2026, WNT Energy Inc. and Dongfang Turbine Co., Ltd. signed a cooperation agreement to promote the Dongfang G50 gas turbine in Canada. — 原文提取
- Turner & Townsend Data Centre Construction Cost Index 2026-27 · Turner & Townsend · [原站](https://www.turnerandtownsend.com/insights/data-centre-construction-cost-index-2026-27/) · [主体档案：Turner & Townsend](../entities/companies/Turner%20%26%20Townsend.md) · [本地原件](../../../raw/6638a367a6b468ecfeaa13ce9d71fec4d0834d495a4601ddc72845d1ac03c836)
  材料版本 `digest-material-6638a367a6b468ecfeaa13ce9d71fec4d0834d495a4601ddc72845d1ac03c836@1`；获取方式 `curl_verified_primary`。
  > Our tenth annual index is here and it's the broadest view of the global data centre market we've ever produced. — 原文提取
  > The global data centre sector has moved from a niche part of commercial real estate to a major driver of construction activity and the wider economy. — 原文提取
- AESO Newsroom: Albertans Asked to Conserve Power to Minimize Potential for Rotating Outages (January 13, 2024) · Alberta Electric System Operator (AESO) · [原站](https://www.aeso.ca/aeso/newsroom/albertans-asked-to-conserve-power-to-minimize-potential-for-rotating-outages/) · [主体档案：Alberta Electric System Operator (AESO)](../entities/companies/Alberta%20Electric%20System%20Operator%20%28AESO%29.md) · [本地原件](../../../raw/b4475583239db97a88809c40674970ea1f1ebb0baf5f9d9a2c89dac1e930e955)
  材料版本 `digest-material-b4475583239db97a88809c40674970ea1f1ebb0baf5f9d9a2c89dac1e930e955@1`；获取方式 `curl_verified_primary`。
  > CALGARY, ALBERTA, January 13, 2024—The AESO declared a Grid Alert today at 3:30 p.m. in response to ongoing extreme cold temperatures across western Canada, restricted imports and very high demand. — 原文提取
  > Albertans are asked to immediately reduce their electricity use to essential needs only. Reducing peak electricity demand through province-wide conservation will minimize the high potential for rotating outages this evening. — 原文提取
- Alberta Electricity System Events on January 13 and April 5, 2024: MSA Review and Recommendations · Alberta Market Surveillance Administrator (MSA) · [原站](https://www.albertamsa.ca/assets/Documents/January-and-April-2024-Event-Report.pdf) · [主体档案：Alberta Market Surveillance Administrator (MSA)](../entities/companies/Alberta%20Market%20Surveillance%20Administrator%20%28MSA%29.md) · [本地原件](../../../raw/25f96d5bd98af9ee84b152cb2c15bb14afcc31d4da24224921e754fb218bb927)
  材料版本 `digest-material-25f96d5bd98af9ee84b152cb2c15bb14afcc31d4da24224921e754fb218bb927@1`；获取方式 `curl_verified_primary`。
  > EXECUTIVE SUMMARY ........................................................................................................... — PDF p.2
  > 1.1 Event summary ........................................................................................................... — PDF p.2

归属与范围：确认为 WNT Energy Inc. CTO Tony Hwong（Tony老师傅）于微信公众号「加村Energy这些事」发布的原创工程经济研究深化版（基于 WNT Energy 2026-11《北美 AIDC 造价解构与系统级降本路径深度分析》）。已抓站核验并归档 4 份上游一手/参照来源（WNT Energy 官网含 2026-09-15 东方汽轮机 G50 加拿大合作披露、Turner & Townsend 2026–27 全球数据中心建设成本指数、AESO 2024-01-13 Grid Alert 公告、Alberta MSA 2024 年 1 月与 4 月电力事件审查报告 PDF），并锚定 Tony Hwong、WNT Energy Inc. 与 Dongfang Turbine Co., Ltd. 实体关系；AUC Proceeding 30261 / Synapse Olds 裁决与阿省拟议 Bill 42/Bill 12 原卷因目标站点 403/SSL 超时以第三方权威检索交叉核验并显式登记 unavailable 缺口。

来源缺口：

- `unavailable`：AUC Proceeding 30261（Greenlight Electricity Centre 1,864 MW 联合循环电厂及邻近 Meta Sturgeon County 园区）与 2026-08-17 AUC 驳回 Synapse Olds 园区（1.4 GW 燃气 + 600 台/1,800 MW 应急柴油机）裁决原卷，以及阿尔伯塔省 2026 年 11 月拟议 Bill 42（近零冷却水消耗、余热回收与 600 m 住宅退距）与 Bill 12 立法文本，因目标监管站点返回 403 或 SSL 超时未直拉全本，已通过 CBC、Blakes、WaterTechOnline 与 RMA Alberta 公开检索交叉核验核心裁决结论与条款。 [线索](https://www.auc.ab.ca/)
- `not_disclosed`：文中阿尔伯塔 50 MW Critical IT 算例的 WBS-00 至 WBS-09 预算属于 Pre-FEED Class 4+（精度带 -20% / +30%）工程经济模型，未披露具体供应商非公开报价底价与已签约商业项目主体；中国预制设备关税归类须在锁定订单前取得 CBSA 约束性预裁定（Advance Ruling），50 Hz 燃机在线切油时间窗与干式 DLE 免注水能力须由 OEM 技术协议实测锁定，且阿省 Bill 42 截至 2026-11-28 仍为拟议立法状态。

[返回赛道总览](../赛道总览.md#digest-bb4328eb3d9f4a23) · [返回导读索引](README.md) · [主体档案库](../entities/README.md)
