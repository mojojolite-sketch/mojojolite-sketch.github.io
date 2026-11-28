---
title: "具身基模之上，还有应用层｜Scale VP合伙人：部署公司将分走模型公司的蛋糕"
type: blog_digest
sector: "具身智能"
source: "Scale Venture Partners (Siddharth Ramakrishnan)"
published_at: "2026-10-28"
raw_sha256: "a910bfc982e0d464b5a9e05ffc6c21d8eb05030441d6c34564ebe20cc3c5269b"
material_version: "digest-material-a910bfc982e0d464b5a9e05ffc6c21d8eb05030441d6c34564ebe20cc3c5269b@1"
origin_url: "https://www.scalevp.com/blog/what-it-will-take-to-win-in-robotics"
trigger_source: "SourceMind"
trigger_url: ""
user_comments: ""
status: "processed_with_gaps"
primary_topic: "工业落地与商业模式"
topic_confidence: 0.8866
stack_claims: [{"layer_id": "training_infra_deploy", "pattern_id": "raas_industrial_cell", "system": "Locus Robotics AMR仓储系统", "entity": "Locus Robotics", "mechanism": "用LiDAR导航AMR直接接入客户既有WMS系统，免改货架并通过按月订阅替代临时工预算，在存量仓储流程中叠加安全论证与现场维保实现放量。", "metric_or_tradeoff": "在DHL站点将拣选效率从78件/小时提至约150件/小时，累计完成10亿次拣选；非标柔性拆零抓取能力受限。", "source_url": "https://www.scalevp.com/blog/what-it-will-take-to-win-in-robotics"}]
---

<a id="digest-a910bfc982e0d464"></a>
# 具身基模之上，还有应用层｜Scale VP合伙人：部署公司将分走模型公司的蛋糕

2026-10-28 · Scale Venture Partners (Siddharth Ramakrishnan) · 有来源缺口

[本地原件归档](../../../raw/a910bfc982e0d464b5a9e05ffc6c21d8eb05030441d6c34564ebe20cc3c5269b) · 固定材料版本 `digest-material-a910bfc982e0d464b5a9e05ffc6c21d8eb05030441d6c34564ebe20cc3c5269b@1` · [一手原站](https://www.scalevp.com/blog/what-it-will-take-to-win-in-robotics)

## 深度拆解与复核

- ==核心结论==：[Scale Venture Partners](../entities/funds/Scale%20Venture%20Partners.md) 合伙人 Siddharth Ramakrishnan（2026-10-23 一手长文，SourceMind 编译）提出具身智能最反直觉的产业分配命题：即使机械臂 20 年降价超 80%（4.6 万美元降至 1 万美元）、LiDAR 由 7.5 万美元降至数百美元、GEN-1.5 凭 5 分钟微调将成功率从 60% 拉升至 80% 以上，软件式 API 分发也无法在物理现场成立（在 LLM 赛道，OpenAI 与 Anthropic 的模型到客户之间仅隔着 API、提示词与 UI，而物理世界必须跨过现场接入、安全论证与维保）；==模型提升至 95% 可靠性之后通往「五个九」的工程整合、现场异常数据与 24 小时维保，将使拥有客户工作流的「新一代系统集成商」分走比纯基础模型实验室（已吸金 600 亿美元、估值 50 亿至 300 亿美元以上）更大份额的行业蛋糕==。但本工作台核查指出，Jetson「每 FLOP 便宜 25 倍」混用了 FP16 与稀疏 INT8 TOPS 量纲，且部署商能否沉淀超额利润仍受限于远程人工兜底比例与跨场地定制工时是否真正压零。

#### 一、业务切口与核心机制

1. 采购经济学硬约束（CFO 账本）：物流主管通常只看演示视频 5 秒，随后直接核对单次拣选成本（cost per pick）降幅、兑现周期与峰值负荷失灵风险。客户只为「撤走人类兜底后仍算得过账的结果」签多年合同——当年 GM（通用汽车）与 Ford（福特）在 1970–1980 年代购入 5 万美元机械臂，底线是小时运行成本仅为熟练工三分之一且 3 年回本。若某任务可靠性只有 90%，剩下 10% 仍需一名人类驻场接管；若速度只有人工一半，同样无法通过首封推销邮件。
2. 帕累托（Pareto）前沿双轮外推：传统自动化长期死于两侧夹击——为长尾边缘场景（如退货箱内同时出现毛衣、搅拌机或缠绕在搅拌机上的毛衣）造全能系统的成本过高，或收窄任务到丧失部署经济性。当前硬件降价压低试错门槛（2010 年工业臂均价 4.6 万美元 → 2017 年 2.7 万美元 → 今日 1 万美元，等效时薪 20 美元员工 3 个月工资，相对 15 万美元工作单元可撬动每日上料 40 次的低吞吐工位），叠加大模型压缩集成周期（Generalist GEN-1.5 单次人类演示零样本约 60% 成功率、5 分钟微调超 80%，Skild S1 单视频连续作业 10 分钟冲泡手冲咖啡与栽种盆栽，Physical Intelligence π0.7 跨本体操作未见过咖啡机，Astra 控制完整人形机器人），使原本需 6 个月集成的工作有望缩至一个下午。
3. 三大阵营分流与历史镜像：
   - 第一阵营（模型实验室 + 数据军火商）：2023 年以来吸纳约 600 亿美元融资，押注数据与算力扩张线性拉升可靠性（Generalist 数据在不到 1 年从 27 万小时扩至 50 万小时以上；数据商 Mecka、XDOF 大额融资，Micro1、Mercor、Scale AI 扩编机器人部门）。
   - 第二阵营（垂直部署应用层）：默认第一天落场模型仅达 95% 可靠性，亲自掌握客户工作流、安全论证与现场遥操作数据爬升至「五个九」——如 Watney（数据中心换盘插线）、Bedrock（挖掘机改装，安全员随车一年后于 2026 年 8 月实现首次无驾驶员部署）、Ultra（包装线自主率从 70% 爬升至 90% 以上）、Foundry（干脆自建围绕机器人的工厂控制全变量）。
   - 第三阵营（传统自动化借势升级）：先按现有预算卖明确刚需设备，待基模成熟再无缝加挂——如 Scale VP 组合公司 Locus Robotics 仅靠 LiDAR 导航小车接入客户原有仓库管理系统（WMS），在 DHL 站点把拣选效率从 78 件/小时提至约 150 件/小时（临时工的 2 到 3 倍）并累计完成 10 亿次拣选。
   - 流程胜于单纯技术投入：GM 1980 年代砸约 400 亿美元买自动化却反降效率；Toyota（丰田）接管 GM 弗里蒙特（Fremont）最差工厂并沿用原批工人，1 年内把质量拉平日本本土。在需要围绕机器人重塑流程的新任务（数据中心、无人工厂、Kiva 移动货架）中，新公司胜出；在流程已跑通的存量场景（现有仓储加装拣选臂），拥有 WMS 接口、安全论证与凌晨两点上门维修车的既有部署商具备压倒性优势。

#### 二、核心数据核查、口径纠偏与工程边界

场景与利益披露：作者 Siddharth Ramakrishnan 任职于风险投资机构 Scale Venture Partners，英文原文（scalevp.com，2026-10-23）在案例中显式披露 Locus Robotics 为其投资组合，但未在正文中标注另一已投企业 [Generalist AI](../entities/companies/Generalist%20AI.md)（见官网组合页及中文触发稿 SourceMind 补充披露）。作者立场带有明显「抑制纯基模 50 亿至 300 亿美元高估值溢价、抬升应用与部署集成层估值捕获」的投资视角。

- ✅ 核查一（三阵营代表公司 2026 年最新进度与融资体量核实，本工作台核查）：检索核验原文点名的多家未展开细节公司——阵营一数据端，Mecka 已获红杉领投 6,000 万美元 B 轮（NVIDIA、M12 参投），UC Berkeley 衍生的 XDOF 年化收入逼近 5,000 万美元并传出 12 亿美元估值融资洽谈；阵营二部署端，Watney 于 2026 年 9 月完成 8,000 万美元 A 轮并在超大规模数据中心测试双臂维护，Bedrock Robotics 凭重型工程机械无人化于 2026 年完成 6 亿美元 C 轮（估值 41 亿美元）并在 8 月落地无驾驶室商用挖掘机，Ultra 获 5,000 万美元 A 轮（累计 6,200 万美元）并与 [Physical Intelligence](../entities/companies/Physical%20Intelligence.md) 深度合作，Foundry Robotics 完成 1 亿美元 A 轮并于加州 Emeryville 落地 13 万平方英尺自主工厂；阵营三 Locus Robotics 获 Scale VP、Tiger Global 与高盛参与的 4,160 万美元 G 轮。上述主体进度与原文分阵营定性高度吻合。
- ⚠️ 核查二（Jetson「每 FLOP 便宜 25 倍」存在 FP16 与稀疏 INT8 TOPS 量纲混淆，本工作台核查）：原文将 2019 年 99 美元 Jetson（初代 Jetson Nano，约 0.472 TFLOPS FP16，即文中约 0.5T 次/秒）与 249 美元后继版（Jetson Orin Nano Super，标称 67 TOPS）直接相除得出每 FLOP 便宜 25 倍（按 67 / 0.5 = 134 倍算力除以 2.52 倍价格实得约 53 倍稀疏 INT8 TOPS/美元，若折半换算稠密 INT8 约 26.6 倍，接近作者口径）。但必须纠偏：67 TOPS 系启用 2:4 结构化稀疏后的 INT8 整数算力，并非同等精度的 FP16/BF16 浮点 FLOP；端侧 VLA（尤其扩散策略与高精度空间编码器）对低比特量化敏感，实际可用端侧推理吞吐降本幅度小于名义 25 倍；此外 1 万美元机械臂降本并未覆盖工业安全光栅、定制工装与现场维保人工成本。
- ⚠️ 核查三（新系统集成商能否独吞蛋糕取决于两道隐性分母，本工作台推断）：对比本库已拆解的 [Path Robotics](../entities/companies/Path%20Robotics.md)（累计融资超 6.1 亿美元、自建 18 万平方英尺厂房以交钥匙 RaaS 交付焊接结果）与 [Tutor Intelligence](../entities/companies/Tutor%20Intelligence.md)（7,500 万美元 B 轮、8 小时快速进驻、按 14–18 美元/小时收费加远程导师兜底），部署公司真正锁住高毛利的前提是把「远程人工托管比 1:N」与「单新站点集成调试工时」同步压低。反之，一旦基础模型商通过云端微调平台（如 Physical Intelligence 的 Pi API Beta 或 GEN-1.5 5 分钟适配）把新站点适应成本压成标准化配置，且传统集成商（如 Locus 自身）具备现成客户渠道，夹在基模平台与传统头部部署商之间的薄层创业公司仍面临利润双向挤压；至于高盛（Goldman Sachs）预测 2035 年 650 万台人形机器人与埃隆·马斯克（Elon Musk）预测十年内 10 亿台的巨大剪刀差，本质反映的正是「部署现场复制速度」而非模型本身参数瓶颈。

| 核查项目 | 原文口径（Scale VP / SourceMind） | 本工作台核查与工程纠偏 | 核验状态 |
| :--- | :--- | :--- | :--- |
| 算力降本锚点 | 2019 年 \$99 Jetson（0.5T）至 \$249（67T），每 FLOP 便宜 25 倍 | 0.5T 为 Nano FP16，67T 为 Orin Nano Super 稀疏 INT8 TOPS（稠密折半约 26.6 倍名义比），不可与浮点 FLOP 混算 VLA 推理成本 | ⚠️ 口径需纠偏 |
| 组合利益边界 | 英文原文披露 Locus Robotics 为组合；SourceMind 补出 Generalist | 核实 Scale VP 参与 Locus G 轮且官网 Portfolio 列示 Generalist，两家分属阵营三与阵营一 | ✅ 利益已厘清 |
| 阵营二代表体量 | Watney / Bedrock / Ultra / Foundry 以重运营换数据与可靠性 | 核实四家 2026 年分别对应 \$80M A 轮、\$600M C 轮（8 月无驾驶室上线）、\$50M A 轮与 \$100M A 轮 | ✅ 事实吻合 |
| 阵营三标的绩效 | Locus 在 DHL 将拣选从 78 提至 150 件/小时（2–3 倍），累计 10 亿次 | 对接存量 WMS 免改货架，用按月租赁置换临时工预算，未等待通用机械臂手爪突破即已放量 | ✅ 商业逻辑自洽 |

#### 三、赛道横向对比与定位

把 Scale VP 提出的「模型层—部署应用层—存量升级层」三维划分放回本工作台具身智能已有产业图谱，不同商业载体在「数据控制回路自主性、跨场地复制边际成本与毛利归属」上呈现截然不同的风险收益结构：

| 阵营与代表主体 | 核心商业载体与定价单位 | 现场数据来源与自研边界 | 主要护城河与核心脆弱点 |
| :--- | :--- | :--- | :--- |
| 阵营一：模型与数据底座（Physical Intelligence / [Generalist AI](../entities/companies/Generalist%20AI.md) / Skild / [Maxinsights](../entities/companies/Maxinsights.md)） | 模型 API / 授权与百万小时数采交付（自 2023 年吸金 600 亿美元） | 大规模第一视角视频与多本体预训练（Generalist 27 万→50 万+ 小时；Maxinsights 预期 2026 ARR 2.5 亿美元） | 享受跨行业规模缩放与高毛利软件估值；但易遭遇客户现场 95%→99.999% 最后一公里与 [Eidon AI](../entities/companies/Eidon%20AI.md) 式买方自采替代压力 |
| 阵营二（重工业/基建部署）：[Path Robotics](../entities/companies/Path%20Robotics.md) / Bedrock / Watney / Foundry | 按结果或产出计费（RaaS / 造船与基建承包 / 机器人代工制造） | 自控全流程现场遥测、抗弧光传感与异常干预轨迹，不依赖外部零散买方数据 | 规避既有客户低效流程拖累、毛利归属清晰（Path 估值 24.5 亿美元）；代价是极重资产 CapEx（13 万–18 万平方英尺厂房）与长认证周期 |
| 阵营二（轻工/敏捷部署）：[Tutor Intelligence](../entities/companies/Tutor%20Intelligence.md) / Ultra / [Dyna Robotics](../entities/companies/Dyna%20Robotics.md) | 按小时/按件租用（Tutor 约 \$14–\$18/小时，8 小时上线） | 边收费边采集同构型在岗纠偏与长程操作轨迹，逐步抬升自主占比（Ultra 70%→90%+） | 把遥操人力成本嵌入付费工位现金流；脆弱点在远程人工托管比 1:N 若无法突破，高增长伴随低毛利 |
| 阵营三（存量系统升级）：Locus Robotics / [Geek+](../entities/companies/Geek%2B%20%28%E6%9E%81%E6%99%BA%E5%98%89%29.md) | 接入既有 WMS 的 AMR 按月订阅租用（置换临时工 OpEx） | 仓储系统任务调度与导航流数据，未来可横向叠加成熟机械臂或分拣模型 | 已占住客户调度系统、安全论证与维保网络，DHL 等大客户黏性高；风险在于非标柔性拆零与抓取升级节奏受限 |

### 观点与可反驳条件

- ==观点==：==Scale VP 关于「物理世界集成层不会随模型变强而消失、反而因承担从 95% 爬坡至五个九而升值」的判断在 B2B 工业与基建场景成立，但真正能分走模型公司蛋糕的主体并非轻资产普通第三方系统集成商；只有掌握垂直场景专有物理传感与自有交付 SLA 的「全栈部署商」（如 Path Robotics、Bedrock Robotics、Locus Robotics）才具备持续定价权==；纯靠调用第三方基础模型 API 做轻资产现场整合的公司，最终仍会被上游模型平台（如 Pi API）和已占住 WMS 接口的存量自动化巨头双向压扁毛利。
- ==推翻条件==：
  1. ① 若至 2027 年 Q4，以 Physical Intelligence Pi API Beta 或 Generalist GEN-1.5 为代表的纯基础模型层通过云端微调与零样本泛化，使独立外部集成商或客户自有 IT 团队在无需原厂 FDE 驻场的前提下，即可在 72 小时内完成新仓库/工厂工位上线并实现连续 30 天 >99.5% 无人干预作业（且部署层企业平均毛利率跌破 35%），则「部署整合层长期拿走比模型层更大价值份额」的判断须向纯模型平台一侧大幅修正。
  2. ② 若在 2028 年前，未掌握任何存量客户 WMS 入口或自建产线的轻资产独立部署初创公司（不含 Locus 式存量 AMR 龙头及 Foundry/Path 式重资产厂），在商业签约规模前十的具身应用公司中占据半数以上并实现经审计 SaaS/RaaS 综合毛利率 >=55% 且单机远程人工托管比突破 1:15，则本文关于「薄层新集成商将被模型厂与存量硬件商双向压缩」的约束判断将被推翻。

---

## 原文摘录与一手信源存证

> 风投机构 Scale Venture Partners 合伙人 Siddharth Ramakrishnan 在 10 月 23 日的文章中判断，随着机器人基础模型变强，掌握客户、工作流程和现场数据的部署公司，有望在产业中分到更大的收益份额。
> — 原文摘录，PDF p.1；证据 `digest-material-a910bfc982e0d464b5a9e05ffc6c21d8eb05030441d6c34564ebe20cc3c5269b-excerpt-1@1`

> 为什么重要： 模型能力提升正在扩大机器人能做的任务范围，但客户签下长期合同，还要看每次作业的总成本、速度，以及出错时需要多少人工接手。谁能持续满足这些要求，关系到技术进步最终变成谁的生意。
> — 原文摘录，PDF p.1；证据 `digest-material-a910bfc982e0d464b5a9e05ffc6c21d8eb05030441d6c34564ebe20cc3c5269b-excerpt-2@1`

> 快速跟上： 和处在上游的纯大脑公司不同，下游的部署公司负责把机器人接进客户的实际业务：选择任务、适配现场、接入系统，并承担持续运营和维护。它们也可能自研模型。
> — 原文摘录，PDF p.1；证据 `digest-material-a910bfc982e0d464b5a9e05ffc6c21d8eb05030441d6c34564ebe20cc3c5269b-excerpt-3@1`

一手材料：

- What it will take to win in robotics | Insights | Scale · Scale Venture Partners · [原站](https://www.scalevp.com/blog/what-it-will-take-to-win-in-robotics) · [主体档案：Scale Venture Partners](../entities/funds/Scale%20Venture%20Partners.md) · [NotebookLM](https://notebook.google.com/notebook/cac99041-d3b9-449e-a192-12bb4b1ad391) · [Drive](https://drive.google.com/file/d/1NGK2HKLSt6Bx_C_HtBkgwT1zu4A536om/view?usp=drivesdk)
  材料版本 `digest-material-9e1a661eae9a38ec5b30bda40e3f26d5894e5b84f2e3d1abc238937ccbd0e18b@5`；获取方式 `notebooklm_indexed_text`。
  > We've never seen anything like this before, and so when robotics companies are raising at \$5B, \$15B, \$30B+ valuations, it's hard to argue the money is wrong. — 原文提取
  > But talk to anyone actually putting robots into a customer's building and the picture changes fast. Businesses buy outcomes, not robots. — 原文提取

归属与范围：已穿透核验 Scale Venture Partners 合伙人 Siddharth Ramakrishnan 2026-10-23 一手英文原文（19,518 字符，scalevp.com）及旗下组合公司披露（Locus Robotics 公开披露于原文、Generalist 列示于官网组合页并与 SourceMind 译稿互证）；同步交叉核查 Watney（\$80M A 轮）、Bedrock Robotics（2026-08 无驾驶员施工部署 / \$600M C 轮）、Ultra（\$50M A 轮 / PI 合作）、Foundry Robotics（13 万平方英尺自建工厂 / \$100M A 轮）、Mecka（\$60M B 轮）与 XDOF，并纠正 Jetson FLOP/TOPS 算力精度量纲混淆；各部署商经审计单店贡献毛利与人工接管比保留未披露缺口。

来源缺口：

- `not_disclosed`：Scale VP 原文与代表案例（Watney、Bedrock、Ultra、Foundry、Locus Robotics）未披露各部署站点经审计的单小时贡献毛利率、远程人工兜底与机器人托管配比（1:N），以及从试点（pilot）爬升至多年期全额合同的周期与留存分母。 [线索](https://www.scalevp.com/blog/what-it-will-take-to-win-in-robotics)
- `not_disclosed`：Scale VP 英文原博客仅在正文中显式标注 Locus Robotics 为其投资组合，未在文中同步标注同为官网组合页成员的 Generalist AI（系中文触发稿 SourceMind 补充披露）。 [线索](https://www.scalevp.com/portfolio)

[返回赛道总览](../赛道总览.md#digest-a910bfc982e0d464) · [返回导读索引](README.md) · [主体档案库](../entities/README.md)
