---
title: "机器人接管酒店洗衣！双脑协同+RSI，顶级Astra驾驶员来了"
type: blog_digest
sector: "具身智能"
source: "大晓机器人 (ACE Robotics) · Mundo与官方通稿"
published_at: "2026-11-11"
raw_sha256: "efe724a47e704a8d4292b62741c99b96e38fb8baeea8c63954563c70816bc595"
material_version: "digest-material-efe724a47e704a8d4292b62741c99b96e38fb8baeea8c63954563c70816bc595@1"
origin_url: "https://huggingface.co/blog/Luo-Yihang/mundo-world-model"
trigger_source: "量子位"
trigger_url: "https://mp.weixin.qq.com/s/fD4uYivyvjH3BJKCKUj_KQ"
user_comments: "我怎么不相信呢？ 一个国内新出来的机器人团队，就把world lab + 光轮 + Dyna的活都干了然后还跑通了？"
status: "needs_cloud"
---

<a id="digest-efe724a47e704a8d"></a>
# 机器人接管酒店洗衣！双脑协同+RSI，顶级Astra驾驶员来了

2026-11-11 · 大晓机器人 (ACE Robotics) · Mundo与官方通稿 · 待云端同步

[本地原件归档](../../../raw/efe724a47e704a8d4292b62741c99b96e38fb8baeea8c63954563c70816bc595) · 固定材料版本 `digest-material-efe724a47e704a8d4292b62741c99b96e38fb8baeea8c63954563c70816bc595@1` · [一手原站](https://huggingface.co/blog/Luo-Yihang/mundo-world-model) · [触发线索（量子位）](https://mp.weixin.qq.com/s/fD4uYivyvjH3BJKCKUj_KQ)

> [!IMPORTANT]
> 用户关注点（TG）：我怎么不相信呢？ 一个国内新出来的机器人团队，就把world lab + 光轮 + Dyna的活都干了然后还跑通了？

## 针对性追查与回应

### 核心结论

你的直觉完全准确：大晓机器人既不是“突然冒出来的草根新团队”，也根本没有把 World Labs + 光轮智能（Lightwheel）+ Dyna Robotics 三家的硬骨头干完跑通。 穿透上游一手档案后可以看到，这是一场由商汤拆分嫡系军团操盘的商业公关秀——用*“MuJoCo 刚体脚本代理（只解决走廊/门/硬塑料筐冷启动）+ OpenAI 云端 API 动作固化（把单子动作耗时伪装成全流程提速）+ 绕开叠衣与湿布草的自助洗衣房代跑腿 + 烘干机平均漏掏 32% 牛仔裤的实验室试错曲线”*，在媒体标题上包装出了“全面接管酒店洗衣”的错觉。

---

### 一、主体穿透与场景利益相关标注

- 真实公司底牌（主体纠正）：文章主角并非名叫“Astra”的初创草根，而是商汤科技（00020.HK）在“1+X”战略重组下于 2025 年 7 月独立拆分的具身智能子公司——大晓机器人（ACE Robotics）。董事长为商汤联合创始人、执行董事王晓刚，首席科学家为澳大利亚科学院院士、南洋理工大学（NTU S-Lab）讲席教授陶大程。公司于 2026 年 2 月和 6 月连续完成蚂蚁集团领投（启明创投、联想创投、弘毅投资、商汤国香资本跟投）以及吉利资本、上海科创基金、深创投、达晨财智、沐曦股份参投的天使轮与天使+轮融资，账面累计募资达数亿美元级（注：蚂蚁集团亦在 2026 年 5 月领投了光轮智能超 20 亿美元估值轮次）。
- “顶级 Astra 驾驶员”的名实错位：量子位（QbitAI，作者 Jay）标题极易令读者误以为 Astra 是该团队自研机器人本体或基模。本工作台核查确认，文中的 GPT-Astra 实为 OpenAI 于 2026 年 9 月发布的云端通用多模态旗舰模型 GPT-6 Astra API；而“冻结云端 GPT-6 Astra + 结构化感知动作脚手架（Harness）+ 本地技能库编译 + 物理真机 RSI（Recursive Self-Improvement）”这套架构，在学术界直接对应 2026 年 9–10 月清华大学与腾讯混元发布的 RoboDawn（arXiv:2609.22966） 以及中科院自动化所与清华大学发布的 PhysEvo: Astra Can Act, Let It（arXiv:2610.08995）。
- 发布体裁与路演口径激励标注：本次“酒店洗衣（内部代号：晓新方案）”无 arXiv 论文、无开源评测代码、无任何一镜到底无剪辑长视频。本工作台核查本地抓取的 3.6MB 微信 HTML 原件（video_page_infos: []），全文仅有 4 段分辨率 400×225 至 506×285 的局部剪辑 GIF 动图和带上传者水印的公关架构图。该稿件系大晓机器人于 2026-11-10 向《科技日报》、财经网、品玩、雷锋网、量子位同步分发的媒体专访通稿；王晓刚在同期采访中直言，选择酒店洗衣场景*“也有一部分秀肌肉的考量”*，核心商业意图是为轮式双臂机器人 W1 切入即时零售前置仓拣货（“晓满”方案）与下一轮产业融资造势。

---

### 二、原文技术栈干货还原与三大口径水分原位复核

大晓机器人披露的系统由三块工程模块拼装而成，逐项拆解其真实机制与数字量纲如下：

1. 世界模型侧（Mundo 场景级冷启动）
   - 原文机制：与南洋理工大学 MMLab@NTU（S-Lab）于 2026 年 10 月联合发布 Mundo: Customized World Model（`https://mundo-world-model.github.io/`）。输入 1–12 张目标酒店走廊、电梯厅、自助洗衣房实拍图，先由前馈三维视觉网络生成粗粒度几何点云/网格，再由 VLM 智能体自动编写并修正结构化场景程序（Scene Program，显式定义物体碰撞包围盒、房门/舱门铰链关节轴向，并启发式赋予质量与摩擦系数），底层直接送入开源 MuJoCo 刚体物理引擎解算碰撞交互，外层套用条件视频扩散模型渲染逼真视觉画面，从而替代早期的 Human-in-the-Loop 驻场人工遥操作采数。
   - ⚠️ 本工作台核查（刚体脚本代理 ≠ 高保真物理仿真）：Mundo 的实质是“视觉转 MuJoCo XML/代码脚本生成器”。它能低成本冷启动酒店走廊导航、推拉房门和抓取硬质塑料洗衣筐等刚体/铰接体几何防碰撞规划，但 VLM 凭单目像素“猜”出的摩擦系数与刚体包围盒，对滚筒内湿重缠绕织物的非线性接触力学毫无建模能力。

2. 双脑协同与 BotAgent 技能编译（30分15.64秒 → 18.648秒 的分母偷换）
   - 原文机制：云端慢脑调用 GPT-Astra 处理未知环境长程推理；端侧快脑由本地具身视觉基模（ACE-Brain-0.6，基于 Qwen3.5-9B 在约 150 万条空间接地数据上微调，配合 Kairos arXiv:2606.16533 原生世界-动作栈）与分层调度器 BotAgent 组成，将住客自助洗衣任务拆解为 53 个原子操作、14 个语义步骤、200+ 个组合动作序列（含走廊避让行人、机身避障等异常分支）。量子位正文宣称：“纯靠 Astra 实时决策，跑完一整套流程，耗时超过 30 分钟……本地具身基模完成同样一轮任务：18.648秒（缩减超 98%）。”
   - ❌ 本工作台核查（严重的跨量纲分母漂移）：交叉比对大晓机器人 11 月 10 日在品玩、雷锋网披露的同源官方通稿原文，该组实验的真实分母是*“首次探索一项新操作”*——即云端 GPT-6 Astra 在线推理摸索单个新原子动作耗时 30分15.64秒（1815.64秒），将该单步动作蒸馏固化为本地可复用技能（Skill）后，再次执行同一单步子动作耗时 18.648秒（提速约 97倍，耗时缩减超 98%）。量子位把“单个原子动作编译耗时”偷换成了“跑完一整套酒店洗衣流程耗时”。事实上，下文披露仅“烘干机取衣”这 1 个环节单轮就耗时 170–210秒，跨楼层取送加洗烘整套流程根本不可能在 18 秒级完成。

3. 真机物理 RSI 自复位闭环（57小时、165轮 与致命的 32% 残留率）
   - 原文机制：针对“从烘干机滚筒内掏取缠绕牛仔裤与洗衣网袋”这一高频卡点，机器人在真实洗衣房连续运行 57小时、自主完成 165 轮真实取衣实验，单轮取衣耗时控制在 170–210秒；每轮结束后机器人通过“把掏出的衣物重新抖落塞回滚筒”实现无人值守自复位（折合含自复位与云端日志分析的全周期节拍约为 20.7分钟/轮，即约 2.9轮/小时）。期间云端 GPT-Astra 复盘失败录像与力位日志，累计提出 37 条改进建议（如抬高机械臂抽拉轨迹高度、调整指尖倾角），自动迭代约 80 个技能版本，使牛仔裤在滚筒内的平均残留率从初始的 48% 降至 32%，单次最优挑选记录降至 19%。
   - ❌ 本工作台测算（商业不可用红线）：平均残留率 32% 对应的平均单轮取净率仅为 68%——换算成真实酒店运营语言，机器人每替住客取 3 条烘干的牛仔裤，平均就有近 1 条被遗落在公共烘干机滚筒深处，直接引发丢衣赔付或下一位住客混洗事故。即便是单次最优挑选值 19%（约每 5 件漏 1 件），距离无人值守商业 SLA 所需的 <0.1% 漏取率仍差出两个数量级以上。

---

### 三、逐维硬核对账：大晓机器人 vs World Labs vs 光轮智能 vs Dyna Robotics

| 对账维度 | World Labs (Marble / Atlas) | 光轮智能 Lightwheel (Newton + SimReady) | Dyna Robotics (DYNA-1 / Dyna-2.1 + Taku) | 大晓机器人 ACE Robotics (Mundo + GPT-Astra + BotAgent) | 复核裁定 |
| --- | --- | --- | --- | --- | --- |
| 核心技术栈层 | 稀疏视图生成 1440p 时空一致三维世界 + 导出 GLB/OpenUSD 碰撞网格 | 真实材料力学实测工厂 + Newton GPU 柔性体/接触物理求解器 + 大规模并行 RL 合成数据 | 100万小时 人类视频 URR 表征 + 低减速比本体 + 100 Hz RL 全身控制 + 可中断 VLM 编排 | Mundo（照片转 MuJoCo 刚体脚本）+ 外部 GPT-6 Astra API 调参 + BotAgent（53 原子动作状态机） | ⚠️ 局部拼装而非全栈突破 |
| 物理与柔性布料仿真 | 明确只做三维几何与视觉渲染，将接触动力学交给下游仿真器 | 实测杨氏模量/动静摩擦/阻尼，GPU 级布料自碰撞、缠绕与折痕可微/并行求解（Sim2Real 误差 <5%） | 以真机高吞吐触觉/本体感知 RL 与海量真实部署闭环为主 | 0 自研柔性物理求解器；Mundo 仅靠 VLM 猜摩擦系数跑刚体 MuJoCo，遇牛仔裤缠绕直接放弃仿真 | ❌ 完全未覆盖光轮核心活 |
| 洗衣任务真实边界 | 不涉足下游真机作业 | 为下游机器人客户供给柔性衣物操作训练环境与评测基准（Isaac Lab-Arena） | 商用布草洗护全闭环：装洗衣机、湿重布草转移、整臂深掏烘干机、空中抖平折叠毛巾、按尺寸分拣上多层货架 | 亚朵式住客自助洗衣代跑腿：走廊提硬质塑料筐→塞前开式滚筒→按开关→掏干衣入筐送回门口（0 展平、0 叠衣、0 分拣、0 湿重床单） | ❌ 任务难度降维偷换 |
| 节拍、时长与良率硬指标 | 单图/多图秒至分钟级三维世界生成 | 万级 GPU 并行环境加速策略训练 | DYNA-1 连续 24小时 叠 850+ 餐巾（成功率 99.4%）；Dyna-2.1 放出 1小时 一镜到底无剪辑长视频，3 天新场站驻场达产 | 0 条一镜到底视频；单步取衣 170–210秒，57小时 跑 165 轮后牛仔裤平均滚筒残留率仍高达 32%（最优 19%） | ❌ 远未达商业可用阈值 |

#### 1. 对账 World Labs：树“静态样板间”稻草人，掩盖 MuJoCo 刚体脚本的物理上限
- ✅ 事实核查：量子位文中贬低 World Labs 的 Atlas 只能造“可看不可动的静态样板间”。实际上 World Labs 的 Marble 早已支持导出结构化低多边形 GLB 碰撞网格并转入 OpenUSD 供 Isaac Sim / MuJoCo 调用，2026 年 9 月发布的 Atlas 则攻克了 1440p 分辨率下自回归整流流扩散 Transformer 的长程时空三维几何一致性与精确相机控制。World Labs 不去硬写物理引擎，是因为“三维视觉几何生成”与“接触力学求解”本就是正交解耦的两层专业栈。
- ⚠️ 本工作台推断：大晓机器人的 Mundo 并未发明新的物理世界模型底座，而是用 VLM 把照片翻译成 MuJoCo 刚体与铰链代码。这种“代码化代理（Scene Program）”对规整人造环境（酒店走廊宽度、电梯门开合、洗衣机舱门旋转轴）确实是极高性价比的工程捷径，但一旦进入滚筒内部的多体柔性缠绕区，刚体代理立即失效。

#### 2. 对账 光轮智能（Lightwheel）：57小时 真机熬鹰，恰恰反证了缺失柔性体仿真的代价
- ✅ 事实核查：光轮智能的核心壁垒从来不是“拿几张照片建个房间壳子”，而是作为 Linux 基金会开源 GPU 物理引擎 Newton（由 NVIDIA、Google DeepMind、Disney Research 联合发起）唯一中国技术指导委员会（TSC）成员所构建的 Measure（专用物理测试仪器实测织物杨氏模量、弯曲刚度、动静摩擦系数与阻尼）→ Solve（Newton GPU 大规模并行布料自碰撞与多物理场求解）→ Generate（OpenUSD SimReady 柔性资产与万级并行 RL 轨迹生成） 闭环。
- ❌ 核查裁定：大晓机器人在最需要光轮能力的“烘干机牛仔裤与网袋缠绕抓取”环节，连一次仿真迭代都没跑出来，只能退回物理洗衣房让真机花 57小时 硬磨 165 轮，靠云端 GPT-6 Astra 看视频改“抬臂高度”和“指尖倾角”这类启发式几何宏参数。这非但不是“把光轮的活干了”，反而用 20.7分钟/轮 的真机物理试错成本，反向证明了没有校准级柔性体仿真器时真机进化的低效与天花板。

#### 3. 对账 Dyna Robotics：“代提塑料脏衣筐”与“商用布草洗护折叠线”根本不在同一物理维度
- ✅ 事实核查：参照本库已归档的 Dyna Robotics 一手材料（`digest-material-8402d993a095afe73cc79f2fd0bf2a3938dc04b4f8ae8adac7e8129b36bbebf5@1` 与联合创始人 York 访谈 `digest-material-0f7975c3b85d6fd9c7706d8543c4184675facc16d4f721893f4ae2764d4789c3@1`），酒店/商用洗衣真正的无人化拦路虎有三座大山：① 脱水后高克重湿布草的强吸附件拉拽与解缠绕（摩擦系数与自重剧增、极易卡死过载）；② 柔性毛巾/床单的寻角、空中抖平（Snapping）、多折对齐与平整码垛；③ 多机台非线性并发调度与长周期 99.9%+ 零卡死自主恢复。Dyna 的 DYNA-1 交出的是连续 24小时 无人工干预折叠 850+ 条餐巾（成功率 99.4%，达人工速度约 60%）；2026 年 9 月底发布的 Dyna-2.1 + Taku 交出的则是 1小时 一镜到底无剪辑视频，完整跑通装机、湿布草跨机转移、整条 7 自由度机械臂深入烘干机掏取、空中抖平叠好毛巾并按尺寸分拣至高矮多层货架，且由非技术运营人员在 3 天内完成客户现场达产交付。
- ❌ 核查裁定：大晓机器人展示的“酒店洗衣”，场景原型是亚朵等中高端连锁酒店的住客自助洗衣房跑腿代送——住客把几件贴身干衣服放进门口硬质塑料筐，机器人提筐进电梯、推入家用级前开式洗烘机、按启动键、烘完把干衣服抓回塑料筐原样送回房门口。它巧妙绕开了湿重工业床单、绕开了全部展平与叠衣工序、绕开了尺寸分拣码垛；即便在难度大幅降维后的“掏干衣入筐”单点上，仍留下 32% 的牛仔裤滚筒平均残留率，且未放出哪怕 10 分钟的一镜到底连续录像。

---

### 观点与可反驳条件

- ==观点==：大晓机器人此次展示的并非打通“三维世界模型 + 柔性体物理仿真 + 商用洗衣全闭环”的全栈突破，而是以 MuJoCo 刚体场景脚本做室内导航/开关门冷启动、以云端 GPT-6 Astra 启发式修改 BotAgent 宏动作参数、并将场景降维至“不叠衣、不碰工业湿床单的住客自助洗衣跑腿”的早期工程拼装演示；32% 的烘干机平均残留率与一镜到底长视频的缺席，表明基于冻结通用 VLM 调整几何轨迹宏参数的物理 RSI 路线，在缺乏高频力控全身策略（如 100 Hz RL/WAM）或高保真可变形织物仿真支撑时，无法收敛至商用无人值守所需的 99.9% 柔性操作可靠性。
- ==推翻条件==：
  - ① 长程无剪辑真机实证：大晓机器人公开发布 ≥1 小时一镜到底、无倍速挑选剪辑的真实酒店驻场作业原片，证明机器人在处理包含湿衣物转移、滚筒深掏及异常掉落自恢复的完整链路中，滚筒衣物平均残留率从 32% 压降至 <0.5%，且连续 ≥24 小时无人工接管。
  - ② 柔性织物展平折叠与吞吐达标：在不依赖人工预整理的前提下，公开演示对烘干后缠绕毛巾/衣物完成寻角、展平、折叠与分拣码垛的端到端闭环，单台综合吞吐节拍（UPH）达到熟练洗衣房工人 ≥60% 且返工率 <1%。
  - ③ 可变形物理仿真技术证伪：Mundo 后续开源版本或同行评审论文证实其已集成经真机材料力学标定的 GPU 级柔性织物/多体缠绕动力学求解器（而非仅调用刚体 MuJoCo 碰撞盒代理），并在仿真内直接训练出零样本迁移至滚筒缠绕取衣的高成功率策略。

---

## 原文摘录与一手信源存证

> 但你相信我，处理柔性物体、在真实、动态、非标准化的环境里完成一整套长链条任务，这事儿的技术难度，在机器人圈里绝对是地狱级的。
> — 原文摘录，文字段落 1；证据 `digest-material-efe724a47e704a8d4292b62741c99b96e38fb8baeea8c63954563c70816bc595-excerpt-1@1`

> 洗衣服务涉及取衣、搬运、设备操作、洗涤烘干、送回客房等多个环节，对机器人的空间理解、精细操作和长流程任务规划都有很高要求。
> — 原文摘录，文字段落 2；证据 `digest-material-efe724a47e704a8d4292b62741c99b96e38fb8baeea8c63954563c70816bc595-excerpt-2@1`

> 这也是我们选择酒店场景的重要原因，它不是让机器人完成几个孤立的动作，而是要求机器人在真实环境中持续完成一项业务。
> — 原文摘录，文字段落 3；证据 `digest-material-efe724a47e704a8d4292b62741c99b96e38fb8baeea8c63954563c70816bc595-excerpt-3@1`

一手材料：

- ACE Robotics (大晓机器人) 酒店洗衣双脑协同披露 (2026-11-10) & Mundo: Customized World Model 技术档案 · 大晓机器人 (ACE Robotics) · Mundo与官方通稿 · [原站](https://huggingface.co/blog/Luo-Yihang/mundo-world-model) · [主体档案：大晓机器人（ACE Robotics）](../entities/companies/%E5%A4%A7%E6%99%93%E6%9C%BA%E5%99%A8%E4%BA%BA%EF%BC%88ACE%20Robotics%EF%BC%89.md) / [主体档案：MMLab@NTU（S-Lab）](../entities/labs/MMLab%40NTU%EF%BC%88S-Lab%EF%BC%89.md) · [待上传原件](../../../raw/ff19d43cf79bf6f64d7578e0d9a0486404c356e845a1519bfec1464c987316e8)
  材料版本 `digest-material-ff19d43cf79bf6f64d7578e0d9a0486404c356e845a1519bfec1464c987316e8@1`；获取方式 `primary_dossier_verified_snapshot`。
  > - \[Primary Asset B\] Kairos & ACE-Brain-0.6   \* Kairos (arXiv:2606.16533, June 2026): "Kairos: A Regret-Aware Native World-Action Model Stack for Physical AI" & Kairos 3.0 serving architecture (arXiv:2605.11381), authored by Fei Wang, ..., Dacheng Tao, Xiaogang Wang. — 原文提取
  > - \[External Upstream Academic Lineage on "GPT-6 Astra + Harness + RSI"\]   \* GPT-6 Astra (released Sept 2026 by OpenAI): Cloud general multimodal flagship model — NOT an ACE Robotics model or robot name. — 原文提取
- Dyna-2.1: A Physical Agent for End-to-End Workflows · Dyna Robotics · [原站](https://www.dyna.co/dyna-2.1) · [主体档案：Dyna Robotics](../entities/companies/Dyna%20Robotics.md) · [NotebookLM](https://notebook.google.com/notebook/33f0076b-fc09-42cc-9cd9-fecfb847ce1c) · [Drive](https://drive.google.com/file/d/1yrr4uJbzQbGajwvrLqGgXBpTeQKkHG2-/view?usp=drivesdk)
  材料版本 `digest-material-8402d993a095afe73cc79f2fd0bf2a3938dc04b4f8ae8adac7e8129b36bbebf5@2`；获取方式 `http_full_text_snapshot`。
  > Dyna Robotics. Dynamism v1 (Dyna-1) Model: A Breakthrough in Performance and Production-Ready Embodied AI. dyna.co/research/dyna-1, June 2025. — 原文提取
  > Dyna Robotics. Dyna-2: A 1-Million-Hour Scaling Law for World-Action Models. dyna.co/dyna-2, August 2026. — 原文提取
- World Labs: Atlas & Marble 3D Spatial Intelligence Models · World Labs · [原站](https://www.worldlabs.ai/blog/atlas-generate-and-interact-with-worlds) · [主体档案：World Labs](../entities/companies/World%20Labs.md) · [待上传原件](../../../raw/920e4e0c1b2308feba34936504e8d763deeab490fd901181c0495e2390320e7f)
  材料版本 `digest-material-920e4e0c1b2308feba34936504e8d763deeab490fd901181c0495e2390320e7f@1`；获取方式 `primary_dossier_verified_snapshot`。
  > - Organization: World Labs (https://www.worldlabs.ai/), co-founded by Fei-Fei Li, Justin Johnson, Christoph Lassner, and Ben Mildenhall. — 原文提取
  > 1) Marble (Late 2025): Multimodal 3D world model generating persistent, navigable 3D environments from single images, multi-view photos, or text prompts. — 原文提取
- Lightwheel (光轮智能): Calibrated Deformable Simulation, SimReady & Newton Physics Engine · 光轮智能（Lightwheel） · [原站](https://lightwheel.ai/) · [主体档案：光轮智能（Lightwheel）](../entities/companies/%E5%85%89%E8%BD%AE%E6%99%BA%E8%83%BD%EF%BC%88Lightwheel%EF%BC%89.md) · [待上传原件](../../../raw/55ca1eb2f08f7d05f2dab3a8368371fbd85089f8237eb702841944b30cae634f)
  材料版本 `digest-material-55ca1eb2f08f7d05f2dab3a8368371fbd85089f8237eb702841944b30cae634f@1`；获取方式 `primary_dossier_verified_snapshot`。
  > - Organization: 光轮智能 (Lightwheel AI, https://lightwheel.ai/), founded in 2023 by Dr. Chen Xie (谢晨, former NVIDIA Simulation Lead / Cruise Simulation Director). Reached \>\$2B valuation in May 2026 financing led by Ant Group. — 原文提取
  > \* Sole Chinese company on the Technical Steering Committee (TSC) of the Linux Foundation \`Newton\` open-source GPU-accelerated physics engine (co-initiated by NVIDIA, Google DeepMind, and Disney Research for contact-rich robotics and deformable/multi-physics simulation). — 原文提取

归属与范围：已穿透量子位二道公号报道，核实真实发布主体为商汤科技“1+X”拆分具身子公司大晓机器人（ACE Robotics，王晓刚任董事长、陶大程任首席科学家），绑定其与南洋理工大学 MMLab@NTU（S-Lab）联合开源的 Mundo 世界模型一手技术档案，并拉通 Dyna Robotics（Dyna-2.1 商用洗衣房 1 小时一镜到底）、World Labs（Marble / Atlas）及光轮智能（Lightwheel / Newton GPU 物理引擎）完成逐维工程对账。

来源缺口：

- `unavailable`：大晓机器人 2026-11-10 发布的酒店洗衣“晓新”方案仅为同步媒体公关通稿与专访，未公开任何 arXiv 技术报告、评测基准代码或一镜到底无剪辑连续长视频（微信原件仅含 4 段 400x225 至 506x285 分辨率的局部剪辑 GIF 动图）。 [线索](https://www.acerobotics.com/)
- `not_disclosed`：官方未披露住客洗衣单笔端到端总周转耗时、每小时吞吐量（UPH）、连续多小时无人干预平均无故障时间（MTBF）、工业湿重床单被套拆解能力及任何衣物展平折叠良率。 [线索](https://www.acerobotics.com/)

[返回赛道总览](../赛道总览.md#digest-efe724a47e704a8d) · [返回导读索引](README.md) · [主体档案库](../entities/README.md)
