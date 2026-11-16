---
title: "The State of Robotics Data In 2027"
type: blog_digest
sector: "具身智能"
source: "Sam Padilla (@theSamPadilla) · By Crux"
published_at: "2026-11-09"
raw_sha256: "c1a1f9ee9130812018fc4f5a3137209517f3dfdc4e7d51d0a751300a7892adb3"
material_version: "digest-material-c1a1f9ee9130812018fc4f5a3137209517f3dfdc4e7d51d0a751300a7892adb3@1"
origin_url: "https://x.com/theSamPadilla/status/2119497107446878510"
trigger_source: "Sam Padilla · By Crux"
trigger_url: "https://x.com/theSamPadilla/status/2119497107446878510"
user_comments: "这是Eidon AI的CEO在破产之后进行大量访谈，汇总的新文章；结合他之前的破产总结文章https://x.com/eidon_ai/status/2102153839616926175，两者可以看出对于模型能力快速迭代，推进数据类型迭代更新，对中小数采公司的生存挤压，最终回到maxinsight提出的两个基座：1. 如何提高per hour marginal data information; 2. pipeline良率如何把控；同时可以结合我们已经收录的Generalist自采百万小时的那篇文章，是否我们可以稍微窥探到数采行业的真实瓶颈在哪、i.e.哪些环节才是不会被大厂自建替代的"
status: "processed_with_gaps"
---

<a id="digest-c1a1f9ee91308120"></a>
# The State of Robotics Data In 2027

2026-11-09 · Sam Padilla (@theSamPadilla) · By Crux · 有来源缺口

[本地原件归档](../../../raw/c1a1f9ee9130812018fc4f5a3137209517f3dfdc4e7d51d0a751300a7892adb3) · 固定材料版本 `digest-material-c1a1f9ee9130812018fc4f5a3137209517f3dfdc4e7d51d0a751300a7892adb3@1` · [一手原站](https://x.com/theSamPadilla/status/2119497107446878510)

> [!IMPORTANT]
> 用户关注点（TG）：这是Eidon AI的CEO在破产之后进行大量访谈，汇总的新文章；结合他之前的破产总结文章https://x.com/eidon\_ai/status/2102153839616926175，两者可以看出对于模型能力快速迭代，推进数据类型迭代更新，对中小数采公司的生存挤压，最终回到maxinsight提出的两个基座：1. 如何提高per hour marginal data information; 2. pipeline良率如何把控；同时可以结合我们已经收录的Generalist自采百万小时的那篇文章，是否我们可以稍微窥探到数采行业的真实瓶颈在哪、i.e.哪些环节才是不会被大厂自建替代的

## 针对性追查与回应

- ==核心结论与两问直答==：Eidon AI 联合创始人兼前产品负责人 Sam Padilla（`@theSamPadilla`）在宣布关停 Eidon AI 后历时 46 天完成 180 场访谈并审查 47 家数据供应商规格，于 2026-11-09 发布的《The State of Robotics Data In 2027》揭示了具身智能数据层残酷的供需分层：==单目（mono）第一视角视频已商品化死去（\$5/h 过剩），双目（stereo）成为新基线但现货几近售罄（47 家仅约四分之一提供、仅 2 家有共计约 1,750h 现货），触觉（tactile）则是报价高达 \$100–\$120/h 却尚未解决硬件耐久与跨传感器迁移的下一代前沿==。结合其此前复盘《[Robotics Data is a Broken Business](Robotics%20Data%20is%20a%20Broken%20Business%20%26%20Robot%20Training%20Data%20Guide_%20Eidon%20AI%20Post-Mortem%20and%201%2C270%2B%20Hours%20Open%20Ego.md)》与本库收录的 [Maxinsights《Beyond 1M Hours》](Beyond%201M%20Hours_%20The%20Data%20Scaling%20Laws%20of%20Physical%20AI.md)、[Generalist AI 百万小时基建](Generalist%EF%BC%9A%E7%99%BE%E4%B8%87%E5%B0%8F%E6%97%B6%E6%95%B0%E6%8D%AE%E7%9A%84infra.md)，模型能力快速迭代引发的数据规格淘汰正沿两道硬约束挤压中小数采商——回到 Maxinsights 提出的两大基座，一是单位小时边际信息增益决定溢价上限，二是管线良率决定工厂盈亏底线；而大厂自建仍无法替代的真正环节，收缩在「专用传感硬件共研、非住宅商业现场准入网络、中立真机评测基建」三处。
- 场景与利益标注（主体纠正与立场校准）：需先纠正口语混淆——Eidon AI 法定 CEO 为前 DeepMind 研究员 Peter Toth，Sam Padilla（Padilla）实为 Eidon AI（Solidic Labs Inc.）联合创始人兼 Head of Product，停摆后联合创立具身数据撮合与顾问平台 By Crux（`ByCrux` / `data.bycrux.com`）并与 Varun Nair 共建 `roboticsmap.org`。文中「仅存两道护城河为硬件与关系（aggregation/relationships）」直接契合 By Crux 自身的数据掮客撮合定位，且文中 \$5–\$120/h 报价源自双边私下询价估算（作者明确标注市场价格高度不透明），阅读时须剥离其对纯采集/质检中游软件层的看空偏置。

### 一、 2027 具身数据市场全景：五维定价、模态迁移与 47 家供应商实盘

1. 单位小时定价五因子（How Much is 1 Hour Worth?）：单小时具身训练数据报价横跨约 \$5/h 至 \$120/h，由五个核心变量决定：
   - Modality / Sensor Stack（模态与传感器栈，决定价格区间主轴）：底层为单目（mono）头戴视频；中层（middle）为双目（stereo）、腕部相机（wrist cams）、手持夹爪（UMI）、全身运动学（full-body kinematics，即 Eidon 曾采路线）与遥操作（teleop）；顶端为触觉（tactile）与多维接触力信号。
   - Geographic Origin（地理来源 Geos）：美国（US）商业与家庭环境居各区间价格顶端（匹配北美本体公司目标部署场景）；印度（India）、中国（China）、菲律宾（Philippines）、巴基斯坦（Pakistan）及东南亚（Southeast Asia / SE）纯第一视角单目供给已严重过剩，多家前沿实验室（Robotics Labs）已停止采购。
   - Environment & Task（环境与任务 Environments）：商业（Commercial）场景显著贵于住宅（residential）——家庭易众包，而进入真实商超、车间、暖通空调（HVAC）或电工现场难度极高。
   - Exclusivity（独占性）：买方不仅为数据付费，更为竞争对手无法获得该数据付费，目前大量采集产线在独占协议下运行。
   - Annotation（标注 Annotations）：有标注数据虽高于裸片，但 Padilla 根据 180 场访谈指出，标注对单价的拉动幅度远低于多数创始人预期，远不如模态与地理独占决定性强。
2. 三代模态供需断层与 \$1M 营收所需工时账本：
   - Mono is Dead（单目已死）：2024 年 Eidon 起步时，把手机绑在头上录家务仍属稀缺；仅两年后，US-focused 大规模独占单目外包外，其余纯单目已成为按 \$5/h 血拼微薄毛利的红海（实现 \$1M 营收需交付 200,000 小时）。App Store 上架众包 App 即可开采的低门槛窗口已彻底关闭。
   - Stereo is Sold Out（双目成新基线且现货售罄）：双目相机（Stereo camera）可通过双镜头视差解算物体深度（参见文中援引 `arXiv:2608.08285` 等 BOM 测算），低端 BOM-only 成本即达 \$200，高质量商用现货超 \$1,000；给 100 名采集员配齐双目设备需约 \$50k 前置硬件投入。在 By Crux 审查的 47 家供应商中，仅约四分之一（~25%）列出双目能力，且仅 2 家拥有现货库存、合计仅约 1,750 小时，其余几乎全部被买方以收入分成（rev-share）或独占按单定采包圆。
   - Tactile, the Next Frontier（触觉前沿与工程硬伤）：Eidon 团队年初筹备 Eidon Gloves 时曾收到高达 \$120/h 的触觉数据报价；以 \$100/h 计，仅需 10,000 小时即可撬动 \$1M 营收。但触觉手套硬件尚未收敛：佩戴笨重损害操作灵巧度、耐用性缺乏独立验证、单副高达 \$4,500–\$8,000（部署 100 名采集员硬件 CapEx 达 \$450k–\$800k，约为双目方案的 10 倍，按 \$100/h 算需卖出 45–80 小时才刚刚回本手套硬件，尚未计入人工、拒收废片、清洗与维护）。此外，触觉信号高度绑定特定传感器物理结构，跨传感器迁移仍是未解学术难题（文中援引 NVIDIA 与 Berkeley 联合发布的 T-Rex: Tactile-Reactive Dexterous Manipulation `arXiv:2606.17055`，含 50h / ~5,500 条 22-DoF 触觉机械手数据与 4 倍于视觉帧率的触觉时钟，仍仅够微调而非百万小时预训练）。
   - Middle 折中甜点区：双目、腕部相机、UMI 与全身动捕追踪达到 \$1M 营收所需工时比纯单目少 4–12 倍，硬件已可相对低成本现货出货，是当前单位经济性最务实的押注区间。
   - ✅ 硬件回本与跨模态账本核查（本工作台测算）：按文中中层区间「4–12x 更少工时达成 \$1M 营收」倒推，对应单价约 \$20–\$60/h（需交付 16,667–50,000 小时）；若以双目单套 \$500 硬件、单月有效产出 80 小时计，单台设备月营收 \$1,600–\$4,800，确实可在首月覆盖 \$50k/百台硬件成本，远优于触觉手套 \$450k–\$800k 压占资金且面临损坏折旧的风险结构（本工作台核查 ✅）。
3. 市场成熟与资本涌入（The Market is Maturing）：
   - 传统 AI/LLM 数据与非机器人巨头大举跨界：Defined.ai 于 2026 年 1 月 CES 宣布切入物理 AI 数据（并随后代理销售 Eidon 身体动捕库）；DoorDash 于 3 月推出 Tasks 应用，付钱给外卖员录制叠衣等家务视频；Micro1（最大 LLM 数据商之一）披露其机器人数据业务年化运行率（run rate）已超 \$100M，持有超 100,000 小时第一视角视频并在 Malibu 建设真机硬件安全评测实验室；Polyshares 通过与 Amelia Robotics 合作（付给美国企业 \$10/h、推荐经纪人 \$1/h）把 CAD/运营数据经纪网络切入美国商业工位采集。
   - 后段大额融资拉高门槛：XDOF 于 6 月完成 \$70M 融资并据报道接洽 \$1.2B 估值新轮次；Mecka AI 于 10 月完成 Sequoia 领投 \$60M B 轮；Data services 已成为 `roboticsmap.org` 行业图谱中仅次于本体制造商与部署商的第三大板块。

### 二、 回答用户追问（1）：模型快速迭代如何迫使数据类型升级，并挤压至 Maxinsights 两大基座？

将 Sam Padilla 的 2026-09 停摆复盘、2026-11 市场调研与本库归档的 [Maxinsights《Beyond 1M Hours》](Beyond%201M%20Hours_%20The%20Data%20Scaling%20Laws%20of%20Physical%20AI.md) 对账，可见基模能力跃迁如何直接淘汰旧数据类型，并将中小数采商逼入「单位小时边际信息」与「管线良率」双基座：

1. 基模迭代触发的数据规格淘汰机制：2024 年前沿模型（如早期 VLA/WAM 冷启动期）尚处于「有没有真实人类交互先验」的饥渴期，任何视角的第一视角单目视频都具备边际训练价值；当 Dyna-2（100 万小时人类视频预训练）、NVIDIA GR00T 2（402,730h Human-1M）与 Lightwheel（10 万小时开源 Ego）把纯视觉动作先验喂饱至百万小时量级后，模型在常见家居桌面抓放的视觉泛化瓶颈快速消退，真机失误集中暴露在「三维深度遮挡、末端接触几何（$O_t$）、接触力突变（$C_t$）与非结构化商业现场长尾」。这直接导致买方采购标尺从「小时数」瞬间跃迁至「深度标定双目 → 刚性 UMI/腕部协同 → 触觉接触力」，把缺乏硬件研发与重资产融资能力的小厂（如仅筹得 \$3.5M 种子轮、靠家用穿戴众包的 Eidon AI）直接甩出采购白名单。
2. 回归 Maxinsights 第一基座 —— 提高每小时边际物理信息（Cost per Unit of New Physical Information）：
   - Maxinsights 定义物理经验公式为 $\text{Effective experience} \approx \text{hours} \times \text{information per hour}$，最小数据单元为五元状态转移 $S_t=(H_t,B_t,O_t,C_t,E_t)$。
   - 本工作台核查（✅）：Padilla 调研出的五维定价梯度，本质上正是市场用真金白银为 $S_t$ 各分量的信息密度定价：纯单目仅隐含模糊 $H_t$ 像素投影（$O_t, C_t, E_t$ 缺失，边际信息接近归零，跌成 \$5/h）；双目显式补齐 $E_t$ 三维深度与相机位姿（MaxSLAM 实现 4.24 mm 精度），单价即跳升至中层 sweet spot；UMI 与全身运动学锁定 $H_t/B_t$ 精确 6-DoF 末端动作；而触觉手套直接攻克单比特信息密度最高但最稀缺的接触态 $C_t$（报价飙至 \$100–\$120/h）。同时，从印度/东南亚家庭转往美国商业维修现场（HVAC/电工），实质是以「状态空间覆盖稀缺度」对抗 Axis I 重复采集的边际收益递减。
3. 回归 Maxinsights 第二基座 —— 管线良率决定工厂生死线（$Y_{\text{e2e}} = \prod_{i=1}^4 y_i$）：
   - ⚠️ 口径纠偏（本工作台核查）：Sam Padilla 在文中将「processing, QC, ops, annotation, sim tooling」归为不构成独立护城河的 table stakes（标配），这一判断对纯卖 QC 工具软件给买方成立，但对数采供应商自身的单位经济模型却构成误导性轻描淡写。在 Maxinsights 的制造定律下，标定、同步、标注、质检四关串联良率哪怕各从 99% 掉到 95%，总良率即从 96% 跌至 81%；若像 Eidon 散户家庭众包在 IMU 漂移、白墙 SLAM 丢帧与人工复核中单关跌至 ~70%，总良率将坍塌至 $(0.70)^4 = 24\%$（使名义 \$10/h 采集成本暴涨 4.16 倍至 >\$41/h 尚不含损耗）。Maxinsights 之所以能在一年内从近 \$0 冲至 \$250M 预计运行率（1.5 周交付 30 万+ 小时），正是靠 MaxSLAM（99.90% 帧完整率）+ MaxLoop 当日反馈（砍掉 90% 人工审校团队、降本 80%）先把工厂内部良率拉到 96%，才接得住下游 4–12x 规格升级与独占交付账期。

### 三、 回答用户追问（2）：结合 Generalist 百万小时自建 Infra，数采行业真实瓶颈在哪？哪些环节不会被大厂自建替代？

将 Generalist AI 自建百万小时（100 PB）体系（[《Generalist：百万小时数据的infra》](Generalist%EF%BC%9A%E7%99%BE%E4%B8%87%E5%B0%8F%E6%97%B6%E6%95%B0%E6%8D%AE%E7%9A%84infra.md)）与 Eidon AI / Maxinsights / micro1 交叉对照，可把整条具身数据价值链拆成「必然被大厂自建吞并的环节」与「大厂难以替代的真实瓶颈」两张清单（本工作台推断）：

| 产业链环节 | 大厂自建意愿与可替代性 | 代表案例与真实瓶颈机制 |
| :--- | :--- | :--- |
| 1. 常规家庭单目与同构单臂 UMI 采集+传输清洗流 | ❌ 极易被替代（大厂自建 + 车队回流终局） | Generalist 用无源注塑 1-DoF UMI + SD 卡快递 + 300 槽 Mega Uploader + Airflow 4 + AV1 10:1 字节直读证明：只要任务/硬件架构与自家模型紧耦合，\$2B 级实验室完全能自建百万小时管线以消灭跨客户 URDF/Spec 摩擦与中间商抽成；后期真机车队（Dyna 洗衣房等）更会以同分布失败恢复轨迹替代外包家庭采集。 |
| 2. 纯软件层通用质检、标注、回放工具（QC / Ops / Viz） | ❌ 被视作标配（Table Stakes），难独撑商业模式 | Padilla 180 场访谈证实独立卖标注或 QC 难以支撑高估值；通用标注正被 Micro1/Defined.ai 等 LLM 外包巨头用低成本人力与多模态 Agent 迅速平权化。 |
| 3. 下一代多模态传感硬件与标定工程（Stereo / Tactile Capture Hardware） | ✅ 极难被单家大厂完全自建替代（高 CapEx + 制造良率 + 供应链周期） | 本工作台推断：Generalist 的自建壁垒建立在「无源单自由度纯视觉」这一极简假设上，一碰多指协同与触觉力控立即撞墙；而双目高性价比模组、低漂移穿戴动捕、耐用免标定触觉手套（单副 \$4,500–\$8,000，如 MaxGlove / Eidon 手套）涉及光学/柔性电子制造、良率爬坡与 10 倍硬件资本开支，单家 AI 实验室难以反复养硬件工厂，只能向专业传感硬件或重资产数采基建商外采或共建。 |
| 4. 非住宅商业/工业现场准入网络（Commercial Site Access & Broker Relationships） | ✅ 大厂极难在短期内自建替代（高商务合规摩擦 + 长尾碎片化场地） | 家庭录叠衣可靠众包或 DoorDash 外卖员平推，但进入美国本土成千上万家独立 HVAC 维修商、汽修厂、商超后厨、农场与医院（Commercial > Residential），需要跨越保险合规、B2B 客户关系与利润分成体系（如 Polyshares × Amelia Robotics 与 Maxinsights 8 国 5 万场景网），纯模型研究团队几乎不具备这类线下蓝领商务地推基因。 |
| 5. 中立跨模型真机评测与安全基准（Physical Eval & Safety Benchmarks） | ✅ 绝不会被大厂自建替代（裁判与运动员不可合一） | 下游工业买方与保险监管不会轻信模型厂商自报的「99% 成功率」（如 Generalist GEN-1.5 亦存在未披露评测标准的分母漂移争议）；micro1 在 Malibu 建设真机硬件安全评测实验室、Maxinsights 向 Train→Evaluate→Deploy 转型，正是因为中立第三方物理世界评测与奖励模型具有天然的「双边公信力」不可替代性。 |

- ⚠️ 行业真瓶颈总判（本工作台推断）：具身数据行业真正的瓶颈从来不是「找人戴相机录视频」（单目已在 \$5/h 过剩），而是物理交互的最后 1 厘米不可观测性（接触力 $C_t$ 与毫米级相对位姿）、异构商业场景的合规现场准入，以及在规格快速更迭下把端到端良率锁死在 95%+ 的重资产硬件周转能力。对于无硬件差异化、无 B2B 现场准入壁垒的中小数采作坊，Eidon AI 的停摆不是个案，而是行业出清的基准剧本。

### 观点与可反驳条件

- ==观点==：2027 年具身数据市场已完成从「按原始时长（Recorded Hours）计价」向「按硬件传感密度（Stereo/Tactile）、B2B 现场稀缺性与端到端良率（MaxLoop 级 96% 交付）计价」的残酷切换。Sam Padilla 归纳的「硬件与关系双护城河」准确命中了外部定价表象，但唯有叠加 Maxinsights 的「高良率工业化交付底座」与 Generalist AI 的「高耦合规格自建替代边界」才能看清终局——中小外包商将被模型快速淘汰单目、重资产硬件 CapEx 门槛（\$50k 双目至 \$800k 触觉）以及头部实验室在标准化纯视觉场景的自建/车队回流彻底夹杀；独立第三方长期不被替代的生态位，最终仅收敛至高壁垒专用传感硬件（触觉/精密双目）、跨行业商业现场准入网络与中立真机评测基准三大环节。
- ==推翻条件==：
  1. 若 2027 年底前开源世界模型（如无触觉、无深度图、仅用单目互联网/众包视频训练的 WAM）在真实商业工位盲插、柔性装配与多指操作基准上，仅用 <1 小时真机微调即可打平依赖双目深度与触觉手套方案（成功率差距 <5%），则硬件传感器门槛与触觉高溢价逻辑将被推翻（单目不会消亡）；
  2. 若触觉手套在 2027 年实现 BOM 降至 <\$300/副、耐用超 500 小时且跨传感器信号零样本通用，使得数十家中小工作室无需重资产融资即可低门槛大规模供货，则「硬件高壁垒护城河」将被迅速商品化拉平；
  3. 若 Generalist AI、Physical Intelligence 或 Tesla 等头部实验室在 2027–2028 年直接通过商业部署机器人客户协议（自带传感器回流商业现场操作）自行覆盖 80% 以上商业工业场景（HVAC/维修/商超）长尾数据，且下游客户直接采信大厂自建仿真/真机评测而不再采购第三方评测，则商业准入网络与中立评测两大防线亦将被全栈本体巨头内部化吞并。

---

## 原文摘录与一手信源存证

> I had 180 meetings in the last 46 days. Since posting my @Eidon\_AI post-mortem, I have spoken with dozens of investors, researchers, and founders across robotics. And since posting @ByCrux's intro form, we vetted 47 data producers and collected their detailed data specs.
> — 原文摘录，文字段落 1；证据 `digest-material-c1a1f9ee9130812018fc4f5a3137209517f3dfdc4e7d51d0a751300a7892adb3-excerpt-1@3`

> The value of one hour of robotics data varies based on five primary factors: Modality, Geos, Environment, Exclusivity, and Annotations.
> — 原文摘录，文字段落 2；证据 `digest-material-c1a1f9ee9130812018fc4f5a3137209517f3dfdc4e7d51d0a751300a7892adb3-excerpt-2@3`

> This is a new baseline for what kind of data is useful in the industry. And one that significantly raises the barrier to entry. Stereo cameras go for \$200 BOM-only on the low end, up to over \$1,000 for high-quality off-the-shelf stereo cams.
> — 原文摘录，文字段落 3；证据 `digest-material-c1a1f9ee9130812018fc4f5a3137209517f3dfdc4e7d51d0a751300a7892adb3-excerpt-3@3`

> At \$4,500 to \$8,000 a pair, deploying 100 collectors costs you \$450k to \$800k, roughly ten times the stereo bill. At \$100 an hour, 45–80 hours of sales would cover the glove hardware alone.
> — 原文摘录，文字段落 4；证据 `digest-material-c1a1f9ee9130812018fc4f5a3137209517f3dfdc4e7d51d0a751300a7892adb3-excerpt-4@1`

> This trend keeps pointing back to a core realization of these 180 meetings: The two remaining moats of robotics data are hardware and relationships. Everything in between, like processing, QC, ops, annotation, data visualization, and even sim tooling, is valuable but table stakes.
> — 原文摘录，文字段落 5；证据 `digest-material-c1a1f9ee9130812018fc4f5a3137209517f3dfdc4e7d51d0a751300a7892adb3-excerpt-5@1`

> At \$5 an hour, \$1M of mono takes 200,000 hours. That’s a volume game on extremely thin and dwindling margins. At \$100 an hour, tactile takes only 10,000 hours, but the hardware isn’t solved, is expensive, and data usage is still an open research question.
> — 原文摘录，文字段落 6；证据 `digest-material-c1a1f9ee9130812018fc4f5a3137209517f3dfdc4e7d51d0a751300a7892adb3-excerpt-6@1`

一手材料：

- The State of Robotics Data In 2027 · Sam Padilla · By Crux · [原站](https://x.com/theSamPadilla/status/2119497107446878510) · [主体档案：Sam Padilla (@theSamPadilla)](../entities/people/Sam%20Padilla%20%28%40theSamPadilla%29.md) / [主体档案：By Crux](../entities/companies/By%20Crux.md) / [主体档案：Eidon AI](../entities/companies/Eidon%20AI.md) · [本地原件](../../../raw/c1a1f9ee9130812018fc4f5a3137209517f3dfdc4e7d51d0a751300a7892adb3)
  材料版本 `digest-material-c1a1f9ee9130812018fc4f5a3137209517f3dfdc4e7d51d0a751300a7892adb3@2`；获取方式 `x_article_full_text`。
  > I had 180 meetings in the last 46 days. Since posting my @Eidon\_AI post-mortem, I have spoken with dozens of investors, researchers, and founders across robotics. And since posting @ByCrux's intro form, we vetted 47 data producers and collected their detailed data specs. — 原文提取
  > The value of one hour of robotics data varies based on five primary factors: Modality, Geos, Environment, Exclusivity, and Annotations. — 原文提取

归属与范围：完整归档 Sam Padilla (@theSamPadilla) 2026-11-09 X Article《The State of Robotics Data In 2027》全文，修正主体职务口径（CEO 为 Peter Toth，Sam Padilla 为前联合创始人兼产品负责人、现 By Crux 联合创始人），交叉核验内嵌引用推文（micro1 \\\$100M+ run rate / Malibu 真机评测实验室、NVIDIA × Berkeley T-Rex \`arXiv:2606.17055\`、Lightwheel 100K 小时开源 Ego、Polyshares × Amelia Robotics \\\$10/h+\\\$1/h 经纪模式），并系统回答模型迭代对中小数采商的挤压机制（映射至 Maxinsights 双基座）与结合 Generalist 百万小时自建 Infra 后大厂无法替代的三类行业真瓶颈。

来源缺口：

- `not_disclosed`：文中引用的 \\\$5/h（单目）、中层硬件组合及 \\\$100–\\\$120/h（触觉）单小时报价为作者基于 180 场访谈的主观区间估算，未附具体买卖双方合约样本或各区域分项毛利率审计明细。
- `unavailable`：文章内嵌链接 https://arxiv.org/html/2608.08285v1（用于佐证 \\\$200 BOM-only 双目相机成本）与 https://data.bycrux.com/ 及 https://roboticsmap.org/ 在采集期受 Cloudflare/403 拦截，未取回对应原始页面快照，后续按需补抓。

[返回赛道总览](../赛道总览.md#digest-c1a1f9ee91308120) · [返回导读索引](README.md) · [主体档案库](../entities/README.md)
