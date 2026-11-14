---
title: "Dyna-2.1: A Physical Agent for End-to-End Workflows"
type: blog_digest
sector: "具身智能"
source: "Dyna Robotics"
published_at: "2026-09-29"
raw_sha256: "a912e3f5d3256c4fea89b39f9ea55b4bd985ce888d4f43a76eed7ca140453376"
material_version: "digest-material-a912e3f5d3256c4fea89b39f9ea55b4bd985ce888d4f43a76eed7ca140453376@1"
origin_url: "https://www.dyna.co/dyna-2.1"
trigger_source: "Dyna Robotics"
trigger_url: "https://www.dyna.co/dyna-2.1"
user_comments: ""
status: "processed_with_gaps"
---

<a id="digest-a912e3f5d3256c4f"></a>
# Dyna-2.1: A Physical Agent for End-to-End Workflows

2026-09-29 · Dyna Robotics · 有来源缺口

[本地原件归档](../../../raw/a912e3f5d3256c4fea89b39f9ea55b4bd985ce888d4f43a76eed7ca140453376) · 固定材料版本 `digest-material-a912e3f5d3256c4fea89b39f9ea55b4bd985ce888d4f43a76eed7ca140453376@1` · [一手原站](https://www.dyna.co/dyna-2.1)

## 深度拆解与复核

- ==核心结论==：Dyna-2.1 标志着 Dyna Robotics 从「固定工位单任务叠毛巾（Dyna-1 / Dyna-2）」跃迁至「多工位小时级非线性工作流（Whole Employee）」，其核心工程贡献并非继续把所有决策塞进单一端到端 VLA，而是把物理智能体拆解为==统一任务空间接口 URR + 100 Hz 过阻尼 RL 全身控制器 + Dyna-2 世界动作模型（WAM）+ 低频 VLM 文本记忆编排器==四个独立时钟层级。该设计一方面用四轮转向+折叠躯干替代双足腿部，规避了全身动态平衡与精细操作的耦合代价；另一方面让每一次人类视频（如 Egocentric-100K）与旧硬件遥操作数据通过 URR 持续沉淀到模型层，使硬件改款只需在 NVIDIA Isaac Lab 仿真中重训控制器而零消耗真机采集。
- ==场景与利益相关标注==：本文为 Dyna Robotics 官方研究发布博客（2026 年 9 月 29 日，团队成员 Ling Li、Ming Qin、Chet Bhateja 出镜访谈），紧随其 2026 年 5 月质疑双足人形工业收入泡沫的观点文（What 10 Months in Production Taught Us）以及 8 月鼎泰丰全美餐厅网络固定工位商业推广公告（Not Just a Model, But a Product，指引 2027H1 部署达数百台）之后发布。其商业诉求在于论证自家「半人形轮式本体 + WAM 分层智能体」比双足人形或纯固定臂模型更快跨过酒店洗衣、数据中心服务器维护（server servicing）等高客单价全流程 ROI 门槛；文中单段一小时录像与部分泛化数据存在口径偏优动机，需结合前作数据边界独立审视。

### 一、 为什么商业客户不买「单任务」：从保姆瓶颈到 79 步复利悬崖

1. 客户采购「岗位」而非「动作」
   Dyna-1 曾实现连续 24 小时叠餐巾无任务级失误，但在客户现场仍需要一名人工「机器人保姆（robot babysitter）」不断向料框补巾并清走成品叠堆，一旦料框空置整条产线即停摆。商用客户真正付费买单的是连续数小时异步交接的完整岗位角色（role / whole employee），对应三项缺一不可的全栈解锁：工作空间覆盖（底盘、躯干与双臂协同跨越多米工位）、可教性（快速低成本把新流程刷到高可靠度）以及非线性条件推理。
2. 串联可靠性复利与 13 个非线性格点
   一次酒店洗衣房完整循环串联约 79 个操作步骤。即使单步动作达到 95.0% 成功率，在无自主恢复的前提下整轮免干预完成率也跌至极低水平（见下文复核），因此真正决定能否无人值守的不是单步平均分，而是「把小失误压回轨道的恢复技能（recovery）」——例如视频 3.6 展示的人工故意拨乱洗衣机旋钮、拉脱夹爪及抓起双条毛巾后的自主重抓复位。此外，洗衣机、烘干机与叠毛巾工位异步到期（参考 Hietpas 2011 酒店洗衣房设备效率研究），一旦机器停转未取即浪费产能，机器人必须在叠毛巾中途被中断去转运烘干机，并在 13 个条件决策节点追踪数十分钟前看到但此刻不可见的隐状态（何机启动、哪批织物在何桶、哪层货架尚空）。

### 二、 硬件与三层时钟架构深挖：Taku、URR、过阻尼控制与记忆编排

1. Taku 半人形本体：保留人类上肢几何同构，砍掉双足腿部
   Taku（源自日语 Takumi 匠）采用「人类等身比例上半身 + 可折叠升降下身 + 四轮独立转向底盘 + 双 7-DoF 手臂」构型。在目标室内商业流程中，制约落地的是手腕触达深桶/高低温层架的包络半径与操作精度而非上下楼梯，故采用四轮高稳态移动；同时严格按成年人体尺度布置胸腔、肘部与手腕尺寸，使采集来的人类头显第一视角与动作捕捉轨迹无需剧烈尺度缩放即可映射。双臂放弃传统谐波减速器而选用低减速比行星执行器（low-ratio planetary actuators），以换取贴近人类动作的速度、加速度与耐冲击力控裕度，从深达一臂长的烘干机内胆捞取散落毛巾或俯身放置低层叠堆。
2. Unified Robot Representation (URR) 与过阻尼 100 Hz 控制闭环
   - ==统一任务空间界面 URR==：与 OmniH2O（arXiv:2406.08858）、Retargeting Matters（arXiv:2510.02252）、OmniRetarget（arXiv:2509.26633）、AMO（arXiv:2505.03738）、HOMIE（arXiv:2502.13013）、LeVERB（arXiv:2506.13751）以及 [SONIC](专访罗正宜：关于SONIC全身控制框架的访谈.md)（arXiv:2511.07820，Science Robotics 2026）主要面向双足全身关节空间运动跟踪不同，Dyna 指出把人类视频强行拟合为机器人关节角度往往会把指尖拉离实际接触物体（即视频画面与动作标签脱节）。URR 只在局部一致坐标系下编码手腕、手肘、胸腔与底盘投影（footprint）的任务空间位姿序列，兼顾跨本体通用性（兼容人类、双足、半人形与桌面双臂）与相对位姿编码无损可逆性；人类遥操作、UMI（Universal Manipulation Interface）与 UMI on Legs 手持夹爪及规模化第一视角视频（如 Build AI 开源的 Egocentric-10K 与 100,405 小时 Apache 2.0 协议 Egocentric-100K）全部以同一 URR 格式进出。
   - ==仿真优先与硬件数据解耦==：底层 100 Hz 全身控制器完全利用现有任务演示中的人类轨迹与合成目标在 NVIDIA Isaac Lab 大规模并行强化学习训得，无需额外采集控制专属动捕；奖励权重显式赋予手部精度高于胸腔位姿、容忍不可行指令并随机化连杆质量、关节摩擦、阻尼与执行器延时增益。当 Taku 发生机械改款时，团队只在仿真中重训控制器而保持上层策略 URR 动作空间不变；针对新旧硬件/逆解（IK）与 RL 控制器之间的动力学差异，上层 Dyna-2 策略同时结合「显式语言元数据提示词（controller conditioning）」与「异步推理中的未来指令序列隐式上下文」来适配不同底盘与臂控特征。
   - ==无超调硬约束（Overdamped vs. Underdamped）==：引用 Bronars、Park 与 Agrawal 的《Tune to Learn》（arXiv:2604.02523, 2026），原文在 15 cm 手部阶跃响应对比中（总跟踪误差相同）明确禁止任何超调震荡——过阻尼控制器能在误差累积前耗散策略的微小抖动，而欠阻尼震荡会被后续自回归行为克隆帧持续放大。
3. 慢时钟 VLM 编排器与长程文本记忆
   高层采用经多模态预训练、并在 13 个洗衣分支决策上后训练的视觉语言模型（VLM）充当编排器（Orchestrator）。它以远低于控制器的频率异步运行（可随大模型迭代直接热替换为更强 VLM），接收用户短口头指令并拆解为子任务目标；最关键的是它持续视觉巡检房间进度，并将其压缩为纯文本长程记忆（各步完成状态、哪台洗烘机门开/闭、当前已叠毛巾计数、何机正在运转），从而在烘干机响起中断叠巾并返回工作台后精确续接件数。

| 架构维度 | 传统关节空间全身控制（如 OmniH2O / SONIC 类） | Dyna-2.1 (Taku + URR + WAM + VLM 编排器) | Physical Intelligence π0.7 + MEM | 工程边界评价 |
| :--- | :--- | :--- | :--- | :--- |
| 底层执行硬件 | 常见双足人形（G1 等）配双腿动态平衡 | 半人形四轮独立转向底盘 + 折叠下身 + 低比行星臂 | 跨本体固定臂或商用移动底盘 API 接入 | 轮式折叠大幅降低硬件 BOM 与跌倒失效面 |
| 人-机接口层面 | 关节空间运动重定向（易造成手-物接触偏移） | URR 任务空间（腕/肘/胸/足迹投影位姿） | 机器人动作块（Action Chunk）统一微调 | URR 最大化保留了百万小时人类视频几何接触约束 |
| 长程记忆机制 | 依赖局部几秒状态观测，缺长程任务账本 | 独立慢时钟 VLM 持续视觉转译为纯文本长期状态表 | 模型内部短期视频编码 + 长期语言日志（MEM） | 两者均用百 Token 级文本摘要避开视觉历史 $O(N^2)$ 膨胀 |
| 硬件迭代代价 | 关节构型微调常迫使上游策略联动重采重训 | 仅仿真重训 100 Hz RL 控制器，叠加提示词兼容旧数据 | 需上传新本体遥操作数据走云端重新后训练 | Dyna 对自研高频改款硬件的数据复用护城河更深 |
| 当前验证跨度 | 单段高难动态动作与数分钟移动操作跟踪 | 1 小时一镜到底洗衣流程（非线性 13 决策） | 10–15 分钟厨房清理与连续备餐 | 从 15 分钟推至 60 分钟，但仍缺大样本现场通过率统计 |

### 三、 原位物理与跨源交叉核查（含与 Dyna-2 / π0.7 对账）

- ✅ 复利良率与无干预阈值核查：本工作台按独立步长复核，若一个完整循环串联 79 个子步骤，在 95.0% 单步成功率下无辅助整轮成功率为 $0.95^{79} \approx 1.74\%$（与图 2.2 对数轴展示的「80% 至 99.99% 下 95% 几乎无法完成」一致）；若按图 2.2 扫过关键档位，80% 对应 $2.2 \times 10^{-8}$，99.0% 才升至 45.2%，99.9% 达 92.4%，99.99% 达 99.21%。这意味着达到商用级 50% 以上自主时间视界，必须将每一步不可恢复故障压在千分位级别，并依靠状态检查后的闭环重抓恢复把有效步失败率吸收在步骤内部。
- ⚠️ 87% vs 46% 跨站零样本口径核查：原文 3.1.1 节将 Dyna-2 与 Dyna-1 的 87% 对 46% 验收差距表述为「仅以人类视频预训练即在未见站点零样本通过 87% 测试」，但本工作台对照一手前作 [Dyna-2 原文](https://www.dyna.co/dyna-2)（Fig. 14）核查确认，该组测试实为两模型在消耗==完全相同的室内真机后训练预算==后，部署到「未采集过现场数据的固定桌面叠巾客户工位」所得的现场验收率（41 个百分点增益来自 100 万小时人类视频预训练带来的空间泛化，而非 Taku 全身移动洗衣场景无需真机数据即可 87% 零样本落地）。
- ⚠️ 1 小时录像与 METR 时长口径核查：原文在展望部分正确引用 METR（arXiv:2503.14499, 2025）提出的「50% 任务完成时间视界（time horizon）」来替代失真的单回合 benchmark 成功率，亦与前文披露的「固定工位部署周期压缩至 3 天」相呼应；但本工作台核查确认，全文并未公布 Taku 在酒店洗衣机房连续多轮测试的实际成功分母、50% 视界实测值（例如究竟是一次性挑出的最佳 1 小时录像，还是已达到 60 分钟级别的 50% 成功视界）以及恢复重试对单位小时叠巾吞吐效率的稀释比例。
- ✅ 行业记忆与控制架构收敛核查：本工作台对照 [Physical Intelligence π0.7 + MEM 拆解](Physical%20Intelligence%20Releases%20Pi%20API%20Beta%20%26%20%CF%800.7%20with%20Multi-Scale%20Embodied%20Memory%20%28MEM%29%20for%2010%2B%20Min%20Long-Hori.md) 与 [对谈 Dyna 联合创始人 York](%E5%AF%B9%E8%B0%88%EF%BD%9CDyna%20%E8%81%94%E5%90%88%E5%88%9B%E5%A7%8B%E4%BA%BA%20York%EF%BC%9A%E4%B8%BA%E4%BB%80%E4%B9%88%E4%B8%80%E5%AE%9A%E8%A6%81%E9%9D%A2%E5%90%91%E9%83%A8%E7%BD%B2%E5%81%9A%E9%A2%84%E8%AE%AD%E7%BB%83.md) 及 [Beyond 1M Hours 数据缩放拆解](Beyond%201M%20Hours_%20The%20Data%20Scaling%20Laws%20of%20Physical%20AI.md) 推断，具身长程架构正迅速向两个工程共识收敛：其一，长程情景状态（数十分钟至数小时）必须压缩为紧凑文本账本而非保留稠密视频帧；其二，将 100 Hz 物理动力学追踪交给仿真强化学习控制器（如过阻尼增益追踪 URR），把昂贵且稀缺的真机数据严格保留给战略层决策和接触恢复，是 2026–2027 年真机工作流交付性价比最高的切分方式。

### 观点与可反驳条件

- ==观点==：对于 2026–2028 年商业室内岗位替代而言，「轮式可折叠半人形 + URR 任务空间解耦 + 过阻尼 100 Hz RL 底层控制 + VLM 文本记忆」构成比全双足端到端 VLA 显著更优的商业可行架构；其真正壁垒在于硬件改款与百万小时人类视频沉淀的双向数据复用闭环。
- ==推翻条件==：
  1. 若 Dyna Robotics 在后续客户交付季报中披露，Taku 在未见酒店洗衣房或医院被服间多机连续运行超过 100 轮次的无人工干预 50% 任务完成时间视界低于 30 分钟，或因恢复重试导致有效产能低于人工半数且 3 天现场收敛窗口退化至数周，则该三层架构的商用工作流规模化外推将被证伪；
  2. 若纯视觉任务空间 URR 缺失指尖触觉/力反馈信号导致跨柔软织物、薄金属服务器插槽拔插等精细接触场景需要巨量真机恢复样本兜底（使得 100 万小时人类视频无法替代新站点真机遥操增量），则 URR 带来的人机数据缩放红利边界将被大幅收窄；
  3. 若竞争对手以双足全端到端 VLA（配内置 MEM 多尺度记忆）在相同商用室内洗衣/餐饮后厨客户合同中实现同等连续 1 小时以上部署交付且硬件运维成本不显著劣于轮式半人形，则「砍掉双足、外挂慢时钟 VLM」的架构必要性将被削弱。

---

## 原文摘录与一手信源存证

> To be useful, a general-purpose robot needs to take over entire workflows without frequent human intervention.
> — 原文摘录，文字段落 1；证据 `digest-material-a912e3f5d3256c4fea89b39f9ea55b4bd985ce888d4f43a76eed7ca140453376-excerpt-1@2`

> Dyna-2.1: The first physical agent to automate an end-to-end workflow—one hour, uncut.
> — 原文摘录，文字段落 2；证据 `digest-material-a912e3f5d3256c4fea89b39f9ea55b4bd985ce888d4f43a76eed7ca140453376-excerpt-2@2`

> A whole-body controller, trained with reinforcement learning in simulation, turns task-space target trajectories for the wrists, elbows, chest and footprint (the Unified Robot Representation, URR; Section 3.1.1) into joint targets and wheel velocities at 100 Hz.
> — 原文摘录，文字段落 3；证据 `digest-material-a912e3f5d3256c4fea89b39f9ea55b4bd985ce888d4f43a76eed7ca140453376-excerpt-3@2`

一手材料：

- Dyna-2.1: A Physical Agent for End-to-End Workflows · Dyna Robotics · [原站](https://www.dyna.co/dyna-2.1) · [主体档案：Dyna Robotics](../entities/companies/Dyna%20Robotics.md) · [NotebookLM](https://notebook.google.com/notebook/33f0076b-fc09-42cc-9cd9-fecfb847ce1c) · [Drive](https://drive.google.com/file/d/1yrr4uJbzQbGajwvrLqGgXBpTeQKkHG2-/view?usp=drivesdk)
  材料版本 `digest-material-8402d993a095afe73cc79f2fd0bf2a3938dc04b4f8ae8adac7e8129b36bbebf5@3`；获取方式 `http_full_text_snapshot`。
  > To be useful, a general-purpose robot needs to take over entire workflows without frequent human intervention. — 原文提取
  > Dyna-2.1: The first physical agent to automate an end-to-end workflow—one hour, uncut. — 原文提取

归属与范围：完成 Dyna-2.1 官方一手技术文章与 Dyna-2/部署博客交叉取证；拆解 Taku 去双足半人形取舍、URR 任务空间界面、100 Hz 过阻尼 RL 控制（对比 SONIC 与 Tune to Learn）及 VLM 文本记忆三时钟架构（对比 Physical Intelligence π0.7+MEM），并明确标出 87% 口径边界与一小时演示分母缺失缺口。

来源缺口：

- `not_disclosed`：全文展示 Taku 完成约 79 步、耗时 1 小时的一镜到底酒店洗衣闭环及服务器维护、冰箱取饮演示，但未公开重复试跑总轮次、成功分母、METR 50% 任务完成时间视界实测值、故障恢复耗时占比及平均无故障间隔（MTBF）。
- `not_disclosed`：Taku 半人形本体与低减速比行星执行器（双 7-DoF 手臂、折叠下身、四轮可转向底盘）的单机 BOM 成本、有效载荷、峰值关节扭矩、连续作业续航及跨硬件代次微调耗时尚未公开披露。
- `pending_verification`：正文引用 87% 对 46% 客户验收零样本对比实测源自 Dyna-2 固定桌面双臂工位（等量室内真机后训练后在未见站点评测），并非 Taku 全身移动洗衣场景零样本通过率；Taku 在真实商用洗衣房跨店复制的一次交付通过率仍待独立验证。

[返回赛道总览](../赛道总览.md#digest-a912e3f5d3256c4f) · [返回导读索引](README.md) · [主体档案库](../entities/README.md)
