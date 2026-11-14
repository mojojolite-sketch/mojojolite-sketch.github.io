# NVIDIA GEAR Lab

[返回主体档案库](../README.md) · [返回赛道总览](../../赛道总览.md) · [单篇导读索引](../../blogs/README.md)

- 主体类别：🏛️ 实验室、高校与机构平台 (Labs & Institutions)
- 核心定位与说明：—
- 关联账号与官方入口：
  - NVIDIA Research Lab Site（NVIDIA GEAR Lab）：[机构／作者主页](https://research.nvidia.com/labs/gear/) · 登记对象 `digest-publisher-747090f4953209bb0660aa06`

## 1. 核心研究问题与待核查争议（Questions & Open Debates）

### 💬 追问与核查：《英伟达 VFlash：Jim Fan宣告“System-1视觉新时代”｜模型…》

- 这个蛮有趣的，实现约 12 倍的视觉规划解码加速，我感觉是不是比VFA和VLM快了，怎么做到进步这么快的

关联文章：[《英伟达 VFlash：Jim Fan宣告“System-1视觉新时代”｜模型提速12倍》](../../blogs/%E8%8B%B1%E4%BC%9F%E8%BE%BE%20VFlash%EF%BC%9AJim%20Fan%E5%AE%A3%E5%91%8A%E2%80%9CSystem-1%E8%A7%86%E8%A7%89%E6%96%B0%E6%97%B6%E4%BB%A3%E2%80%9D%EF%BD%9C%E6%A8%A1%E5%9E%8B%E6%8F%90%E9%80%9F12%E5%80%8D.md)

> 追查结论摘要：在具身智能控制链路中，先区分三类角色：

### 🔍 待核查缺口与证据边界（Open Gaps）

- `pending_verification`：在最复杂的 5 分钟十阶段装配 Gear Bot 上完整成功率仍仅 2/10，且 8K（~4–5 分钟）之后若继续扩展至半小时级跨任务长视野，快权重遗忘边界尚待评估 [线索](https://arxiv.org/abs/2607.15275)（关联：[《RoboTTT: Context Scaling for Robot Policies — 8,000-Timestep Test-Time Training Without Latency Inflation (CoRL 2026 Best Paper Finalist · arXiv:2607.15275)》](../../blogs/RoboTTT_%20Context%20Scaling%20for%20Robot%20Policies%20%E2%80%94%208%2C000-Timestep%20Test-Time%20Training%20Without%20Latency%20Inflation%20%28CoR.md)）
- `not_disclosed`：GR00T 2 与 Turbo 在 Cross-Adapt 基准测试中“取得两位数提升”的具体测试任务集、分项成功率绝对值，以及 SimFoundry 2.0 粒子物理仿真的具体求解器参数，需待 2026 年 12 月权重与完整技术报告正式开源后核对。（关联：[《现场｜Jim Fan CoRL演讲全文：这不是寒冬，这是机器人的夏天》](../../blogs/%E7%8E%B0%E5%9C%BA%EF%BD%9CJim%20Fan%20CoRL%E6%BC%94%E8%AE%B2%E5%85%A8%E6%96%87%EF%BC%9A%E8%BF%99%E4%B8%8D%E6%98%AF%E5%AF%92%E5%86%AC%EF%BC%8C%E8%BF%99%E6%98%AF%E6%9C%BA%E5%99%A8%E4%BA%BA%E7%9A%84%E5%A4%8F%E5%A4%A9.md)）
- `unavailable`：论文与项目页指向的 GitHub 代码入口（https://github.com/NVlabs/Eagle/tree/main/Embodied）经核查目前仅包含前序工作 LocateAnything（ECCV 2026）及 nvidia/LocateAnything-3B 权重，VFlash 的 4B 具身底座权重、537M 扩散草稿器（Drafter）权重、训练配方脚本以及定制修改的 TensorRT-Edge-LLM 0.9.0/0.10.1 C++ 运行时插件尚未正式上传开源。 [线索](https://github.com/NVlabs/Eagle/tree/main/Embodied)（关联：[《英伟达 VFlash：Jim Fan宣告“System-1视觉新时代”｜模型提速12倍》](../../blogs/%E8%8B%B1%E4%BC%9F%E8%BE%BE%20VFlash%EF%BC%9AJim%20Fan%E5%AE%A3%E5%91%8A%E2%80%9CSystem-1%E8%A7%86%E8%A7%89%E6%96%B0%E6%97%B6%E4%BB%A3%E2%80%9D%EF%BD%9C%E6%A8%A1%E5%9E%8B%E6%8F%90%E9%80%9F12%E5%80%8D.md)）
- `pending_verification`：VFlash 报告的 12–49 倍加速仅针对 VLM 解码子阶段（计入 ViT、Prefill 与下游动作头后模型流水线整体提速为 2.6–5.7 倍，且评测中声明长度的 Tool-Call JSON 为预置提供、不含相机 I/O 与反 token 化耗时）；同时其 1 cm 空间量化网格（\[-5,5\]×\[-5,5\]×\[0,10\] m 内 1,001 个 bin）下的下游控制实验（MolmoSpaces、LIBERO-PRO、NAVSIM、Waymo）均在仿真器或离线数据集上完成，在真实物理机器人接触密集型任务与实车闭环控制中的鲁棒性有待跨本体真机独立验证。（关联：[《英伟达 VFlash：Jim Fan宣告“System-1视觉新时代”｜模型提速12倍》](../../blogs/%E8%8B%B1%E4%BC%9F%E8%BE%BE%20VFlash%EF%BC%9AJim%20Fan%E5%AE%A3%E5%91%8A%E2%80%9CSystem-1%E8%A7%86%E8%A7%89%E6%96%B0%E6%97%B6%E4%BB%A3%E2%80%9D%EF%BD%9C%E6%A8%A1%E5%9E%8B%E6%8F%90%E9%80%9F12%E5%80%8D.md)）
- `not_disclosed`：GR00T 2 白皮书披露 50 项评测任务系从「5 条演示微调可达 ≥80% 成功率」的可学池中预筛选得出，未披露未筛选全量工业长尾任务分母得分、DexBench/VABAR 分项绝对分值及连续 8 小时无剪辑运行 MTBF；核心模型权重与 X-Adapt 代码需待 2026 年 12 月正式开源后独立复现。 [线索](https://research.nvidia.com/labs/gear/gr00t-2/)（关联：[《GR00T 2 Official Technical Release: Scaling World-Action Models on 402,000 Hours of Human Video with X-Adapt & Jetson Thor 2B Turbo》](../../blogs/GR00T%202%20Official%20Technical%20Release_%20Scaling%20World-Action%20Models%20on%20402%2C000%20Hours%20of%20Human%20Video%20with%20X-Adapt%20%26.md)）
- `pending_verification`：已取得Unidata原文及七篇被引论文；厂商对照规格、法规适用性与跨设备采集成本未逐项复核。Unidata的500小时×20地经验法则不是对照实测结论。（关联：[《使用Pico 4 Ultra采集Egocentric Data：规格、对比与Workflow》](../../blogs/%E4%BD%BF%E7%94%A8Pico%204%20Ultra%E9%87%87%E9%9B%86Egocentric%20Data%EF%BC%9A%E8%A7%84%E6%A0%BC%E3%80%81%E5%AF%B9%E6%AF%94%E4%B8%8EWorkflow.md)）
- `pending_verification`：论文展示的零样本泛化至未见动作、实时运动学规划与VLA移动操作指标保留为论文实验报告口径，未在第三方物理硬件环境中独立验证。（关联：[《专访罗正宜：关于SONIC全身控制框架的访谈》](../../blogs/%E4%B8%93%E8%AE%BF%E7%BD%97%E6%AD%A3%E5%AE%9C%EF%BC%9A%E5%85%B3%E4%BA%8ESONIC%E5%85%A8%E8%BA%AB%E6%8E%A7%E5%88%B6%E6%A1%86%E6%9E%B6%E7%9A%84%E8%AE%BF%E8%B0%88.md)）
- `unavailable`：700小时高精度商业光学动捕原始数据集与Unitree G1真机强化学习环境闭源细节未完全公开，保留数据源缺口。（关联：[《专访罗正宜：关于SONIC全身控制框架的访谈》](../../blogs/%E4%B8%93%E8%AE%BF%E7%BD%97%E6%AD%A3%E5%AE%9C%EF%BC%9A%E5%85%B3%E4%BA%8ESONIC%E5%85%A8%E8%BA%AB%E6%8E%A7%E5%88%B6%E6%A1%86%E6%9E%B6%E7%9A%84%E8%AE%BF%E8%B0%88.md)）
- `unavailable`：Danfei Xu发表于X平台的博文长文《To Summon a Sensorimotor Ghost》（2026-02-26）因X平台登录墙限制无法直接通过开放HTTP获取完整正文，访谈正文引述了该博文核心章节，保留该独立博文原文缺口。（关联：[《专访Danfei Xu：人类数据是伪装成另一种形式的机器人数据》](../../blogs/%E4%B8%93%E8%AE%BFDanfei%20Xu%EF%BC%9A%E4%BA%BA%E7%B1%BB%E6%95%B0%E6%8D%AE%E6%98%AF%E4%BC%AA%E8%A3%85%E6%88%90%E5%8F%A6%E4%B8%80%E7%A7%8D%E5%BD%A2%E5%BC%8F%E7%9A%84%E6%9C%BA%E5%99%A8%E4%BA%BA%E6%95%B0%E6%8D%AE.md)）
- `pending_verification`：访谈中讨论的EgoScale在22自由度灵巧手上的对数线性Scaling规律、真实环境单次学习新任务（one-shot adaptation）能力以及从人类感觉运动预测到机器人物理控制的逆动力学迁移效果，保留为学术论文与研究者个人观点，尚未经第三方独立实验室重现。（关联：[《专访Danfei Xu：人类数据是伪装成另一种形式的机器人数据》](../../blogs/%E4%B8%93%E8%AE%BFDanfei%20Xu%EF%BC%9A%E4%BA%BA%E7%B1%BB%E6%95%B0%E6%8D%AE%E6%98%AF%E4%BC%AA%E8%A3%85%E6%88%90%E5%8F%A6%E4%B8%80%E7%A7%8D%E5%BD%A2%E5%BC%8F%E7%9A%84%E6%9C%BA%E5%99%A8%E4%BA%BA%E6%95%B0%E6%8D%AE.md)）

- [《RoboTTT: Context Scaling for Robot Policies — 8,000-Timestep Test-Time Training Without Latency Inflation (CoRL 2026 Best Paper Finalist · arXiv:2607.15275)》](../../blogs/RoboTTT_%20Context%20Scaling%20for%20Robot%20Policies%20%E2%80%94%208%2C000-Timestep%20Test-Time%20Training%20Without%20Latency%20Inflation%20%28CoR.md)：已用 arXiv:2607.15275v1 完整 PDF 替换原占位摘要：完整还原 RoboTTT 在 GR00T-N1.7 上引入 16 层 TTT 快权重至 8K 时间步（79% 总完成分、Gear Bot 唯一成功 2/10、One-Shot 65%），并澄清 8K 相对 1K 的 62%/63% 为相对增长率（71.5% vs 43.9%）。
- [《英伟达 VFlash：Jim Fan宣告“System-1视觉新时代”｜模型提速12倍》](../../blogs/%E8%8B%B1%E4%BC%9F%E8%BE%BE%20VFlash%EF%BC%9AJim%20Fan%E5%AE%A3%E5%91%8A%E2%80%9CSystem-1%E8%A7%86%E8%A7%89%E6%96%B0%E6%97%B6%E4%BB%A3%E2%80%9D%EF%BD%9C%E6%A8%A1%E5%9E%8B%E6%8F%90%E9%80%9F12%E5%80%8D.md)：完成一手信源追溯与深度分诊：获取 NVIDIA LPR / GEAR 实验室发布的《VFlash: Fast, Accurate Visual Planning via Flash Primitive Decoding》28页完整技术报告 PDF 与官方项目页，核查 NVlabs/Eagle GitHub 仓库开源状态；围绕用户关于“12倍视觉规划解码加速机制及与 VLA/VLM 对比”的提问完成逐页逐表拆解（明确 12x 解码加速 vs 5.1x 全流水线加速口径、对比 Qwen-Drive-1.0 与 Fast-dDrive 的端到端优势、以及免逐 token 验证整块接受+边界/位置对齐+537M 双向草稿器直接拟合真实几何标注超越 AR 底座 42.6% 的四大机制）；登记 NVIDIA GEAR Lab、NVIDIA LPR Lab、NVlabs、Jim Fan、Yu-Cheng Chou、Zhiding Yu 6 个发布主体入口并完成向上分组。
- [《GR00T 2 Official Technical Release: Scaling World-Action Models on 402,000 Hours of Human Video with X-Adapt & Jetson Thor 2B Turbo》](../../blogs/GR00T%202%20Official%20Technical%20Release_%20Scaling%20World-Action%20Models%20on%20402%2C000%20Hours%20of%20Human%20Video%20with%20X-Adapt%20%26.md)：完成 NVIDIA GEAR Lab（Jim Fan / Yuke Zhu 团队）GR00T 2 与 GR00T 2 Turbo 官方项目页及技术白皮书穿透核查：拆解 436,414 小时三源异构数据（402,730h 第一视角人类无标签视频 + 23,500h 真机遥操作 + 10,184h/2,897 任务手持 UMI，含 Hugging Face 开源 100,000h Human-1M 子集与 1/125 标注成本 FLORA 套件）、Cosmos-Predict2.5-2B 统一序列掩码流匹配机制（与 GR00T N1/N1.5、DreamZero 14B、VFlash、Ego4WAM、π0.5 横向对账）、Wan 2.2 VAE 1/4 视觉压缩在机载 Jetson Thor 上的 124 ms 实时闭环（驱动 Jetson Orin 50Hz SONIC 全身控制及 Astra WAM API/Edit/ASPIRE 协同），并复核 5-Shot 95% 成功率背后的 ≥80% 可学任务预筛选口径偏差与接触力控盲区。
- [《使用Pico 4 Ultra采集Egocentric Data：规格、对比与Workflow》](../../blogs/%E4%BD%BF%E7%94%A8Pico%204%20Ultra%E9%87%87%E9%9B%86Egocentric%20Data%EF%BC%9A%E8%A7%84%E6%A0%BC%E3%80%81%E5%AF%B9%E6%AF%94%E4%B8%8EWorkflow.md)：本轮完成引用与归属分诊、可访问原件获取及摘录索引；来源未得与事实待核验分别保留，不视为完整行业研究结论。
- [《GR00T N1 & N1.5: An Open Foundation Model for Generalist Humanoid Robots (arXiv:2503.14734)》](../../blogs/GR00T%20N1%20%26%20N1.5_%20An%20Open%20Foundation%20Model%20for%20Generalist%20Humanoid%20Robots%20%28arXiv_2503.14734%29.md)：NVIDIA GEAR Lab 发布通用人形机器人开源基础模型 GR00T N1 与 N1.5 技术报告（https://arxiv.org/abs/2503.14734）及官方代码库 https://github.com/NVIDIA/Isaac-GR00T 与全身控制框架 https://github.com/NVlabs/GR00T-WholeBodyControl 。架构采用 Eagle VLM (System 2) + Diffusion Transformer (System 1) 双系统设计，融合真机…
- [《专访罗正宜：关于SONIC全身控制框架的访谈》](../../blogs/%E4%B8%93%E8%AE%BF%E7%BD%97%E6%AD%A3%E5%AE%9C%EF%BC%9A%E5%85%B3%E4%BA%8ESONIC%E5%85%A8%E8%BA%AB%E6%8E%A7%E5%88%B6%E6%A1%86%E6%9E%B6%E7%9A%84%E8%AE%BF%E8%B0%88.md)：完成来源分诊并归档发表于Science Robotics的SONIC论文完整PDF原件；核对第一作者罗正宜、英伟达GEAR实验室、700小时人类动捕数据配对、三encoder潜空间对齐架构与G1真机部署；闭源数据集与未见动作零样本泛化指标保留缺口。
- [《专访Danfei Xu：人类数据是伪装成另一种形式的机器人数据》](../../blogs/%E4%B8%93%E8%AE%BFDanfei%20Xu%EF%BC%9A%E4%BA%BA%E7%B1%BB%E6%95%B0%E6%8D%AE%E6%98%AF%E4%BC%AA%E8%A3%85%E6%88%90%E5%8F%A6%E4%B8%80%E7%A7%8D%E5%BD%A2%E5%BC%8F%E7%9A%84%E6%9C%BA%E5%99%A8%E4%BA%BA%E6%95%B0%E6%8D%AE.md)：完成来源分诊并关联已归档之EgoScale论文PDF原件（arXiv:2602.16710）；核对佐治亚理工学院Danfei Xu受访观点、第一视角人类数据规模化（2万+小时）、感觉运动灵魂行为克隆（Sensorimotor Ghost）与人机效果驱动重定向；X平台博文原文与第三方实测复现保留缺口。

## 2. 阅读笔记与原文 Highlight（Reading Highlights & Marginalia）

### 🖍️ 摘录与批注：《现场｜Jim Fan CoRL演讲全文：这不是寒冬，这是机器人的夏天》（1 条）

关联文章：[《现场｜Jim Fan CoRL演讲全文：这不是寒冬，这是机器人的夏天》](../../blogs/%E7%8E%B0%E5%9C%BA%EF%BD%9CJim%20Fan%20CoRL%E6%BC%94%E8%AE%B2%E5%85%A8%E6%96%87%EF%BC%9A%E8%BF%99%E4%B8%8D%E6%98%AF%E5%AF%92%E5%86%AC%EF%BC%8C%E8%BF%99%E6%98%AF%E6%9C%BA%E5%99%A8%E4%BA%BA%E7%9A%84%E5%A4%8F%E5%A4%A9.md)

> “下来，GR00T 2 不只是一个模型检查点。我们正在模糊 System 1 和 System 2 的边界，我们把这称为“统一认知”。看一个指令的例子：按可回收物、厨余垃圾，以及其他复杂标准，对垃圾进行分类。Astra 理解场景中的语义，并直接在画面上绘制引导信息。我们把这个新接口称为 WAM API。GR00T 原生支持这种视觉引导。这样一来，我们就能把推理部分分离出来。”
> — 批注：有趣有趣，Jim fan的露面频率越来越高了

> 导读核心结论：你敏锐抓到的这段话——“Astra 理解场景中的语义，并直接在画面上绘制引导信息（WAM API），GR00T 原生支持这种视觉引导，从而把推理部分分离出来”——其实是整场演讲在架构设计上最值得深挖的拐点：


## 3. 收录文章与一手材料（Ingested Articles & Primary Sources）

### [RoboTTT: Context Scaling for Robot Policies — 8,000-Timestep Test-Time Training Without Latency Inflation (CoRL 2026 Best Paper Finalist · arXiv:2607.15275)](../../blogs/RoboTTT_%20Context%20Scaling%20for%20Robot%20Policies%20%E2%80%94%208%2C000-Timestep%20Test-Time%20Training%20Without%20Latency%20Inflation%20%28CoR.md)

2026-11-12 · 来源：arXiv:2607.15275 · RoboTTT · 状态：有来源缺口

[单篇导读（blogs/）](../../blogs/RoboTTT_%20Context%20Scaling%20for%20Robot%20Policies%20%E2%80%94%208%2C000-Timestep%20Test-Time%20Training%20Without%20Latency%20Inflation%20%28CoR.md) · [微信原件](../../../../raw/2ddf7493c342156f9c48f4f735c8bfc85072b83235b225bb2e2ef2dd6e9c8c31) · 固定版本 `digest-material-2ddf7493c342156f9c48f4f735c8bfc85072b83235b225bb2e2ef2dd6e9c8c31@1`

> 【信源巡检核心摘要】 CoRL 2026（Austin，2,094 投 687 中）最佳论文决选（Best Paper Finalist）。

关联一手材料：

- RoboTTT: Context Scaling for Robot Policies — 8,000-Timestep Test-Time Training Without Latency Inflation (arXiv:2607.15275)（NVIDIA GEAR Lab / Stanford / UT Austin）· [原站](https://arxiv.org/abs/2607.15275) · [本地原件](../../../../raw/6e3cbcbc0ab4db0c20e693c905c9ff4e7f7afe726b15f8fb6dc3a6d7415e4ca0) · 版本 `digest-material-6e3cbcbc0ab4db0c20e693c905c9ff4e7f7afe726b15f8fb6dc3a6d7415e4ca0@1`
  > Figure 1: RoboTTT, a long-context visuomotor policy that integrates Test-Time Training (TTT) into robot foundation models, with context scaled to 8K timesteps. — PDF p.1

### [现场｜Jim Fan CoRL演讲全文：这不是寒冬，这是机器人的夏天](../../blogs/%E7%8E%B0%E5%9C%BA%EF%BD%9CJim%20Fan%20CoRL%E6%BC%94%E8%AE%B2%E5%85%A8%E6%96%87%EF%BC%9A%E8%BF%99%E4%B8%8D%E6%98%AF%E5%AF%92%E5%86%AC%EF%BC%8C%E8%BF%99%E6%98%AF%E6%9C%BA%E5%99%A8%E4%BA%BA%E7%9A%84%E5%A4%8F%E5%A4%A9.md)

2026-11-10 · 来源：NVIDIA GEAR Lab · 状态：有来源缺口

[单篇导读（blogs/）](../../blogs/%E7%8E%B0%E5%9C%BA%EF%BD%9CJim%20Fan%20CoRL%E6%BC%94%E8%AE%B2%E5%85%A8%E6%96%87%EF%BC%9A%E8%BF%99%E4%B8%8D%E6%98%AF%E5%AF%92%E5%86%AC%EF%BC%8C%E8%BF%99%E6%98%AF%E6%9C%BA%E5%99%A8%E4%BA%BA%E7%9A%84%E5%A4%8F%E5%A4%A9.md) · [微信原件](../../../../raw/dcf1a61cf276bc59592930e8e352624dce835424bae4b997eaf1bba2f31a463e) · 固定版本 `digest-material-dcf1a61cf276bc59592930e8e352624dce835424bae4b997eaf1bba2f31a463e@1`

> Jim Fan宣布新模型发布，GR00T 2 是面向通用机器人的世界—动作模型（World-Action Model，WAM）。 它接收语言指令、多视角相机画面和机器人状态，通过同一个扩散 Transformer 联合预测未来画面与动作序列，把“世界将如何变化”和“机器人应如何行动”一起学习。

> Jim 用“悲伤的五个阶段”回应 Astra 对机器人研究的冲击，最后转向“庆祝”：前沿推理模型提高了机器人理解任务、编写程序、监督执行和处理失败的能力，也降低了开发门槛。这让 System 1 的要求更明确： 快速、反应敏捷、能够本地运行；通过演示容易教会，通过推理容易引导。 GR00T 2 要成为这样的物理技能模型。Astra 可以通过视觉目标引导它，通过 WAM Edit 介入执行，再借助 ASPIRE 组合技能与恢复错误。

关联一手材料：

- NVIDIA GEAR Lab Official Site & GR00T / Flora / SimFoundry Research Releases（NVIDIA GEAR Lab / Jim Fan）· [原站](https://research.nvidia.com/labs/gear/gr00t-2) · [本地原件](../../../../raw/e8b71a3de7c7aa50d6c424f4d6c54b0560e7f6855fd52d651c51aab56435f417) · 版本 `digest-material-e8b71a3de7c7aa50d6c424f4d6c54b0560e7f6855fd52d651c51aab56435f417@1`
  > Jim Fan宣布新模型发布，GR00T 2 是面向通用机器人的世界—动作模型（World-Action Model，WAM）。 它接收语言指令、多视角相机画面和机器人状态，通过同一个扩散 Transformer 联合预测未来画面与动作序列，把“世界将如何变化”和“机器人应如何行动”一起学习。 — 原文提取

### [英伟达 VFlash：Jim Fan宣告“System-1视觉新时代”｜模型提速12倍](../../blogs/%E8%8B%B1%E4%BC%9F%E8%BE%BE%20VFlash%EF%BC%9AJim%20Fan%E5%AE%A3%E5%91%8A%E2%80%9CSystem-1%E8%A7%86%E8%A7%89%E6%96%B0%E6%97%B6%E4%BB%A3%E2%80%9D%EF%BD%9C%E6%A8%A1%E5%9E%8B%E6%8F%90%E9%80%9F12%E5%80%8D.md)

2026-11-06 · 来源：NVIDIA LPR Lab · VFlash (Jim Fan) · 状态：有来源缺口

[单篇导读（blogs/）](../../blogs/%E8%8B%B1%E4%BC%9F%E8%BE%BE%20VFlash%EF%BC%9AJim%20Fan%E5%AE%A3%E5%91%8A%E2%80%9CSystem-1%E8%A7%86%E8%A7%89%E6%96%B0%E6%97%B6%E4%BB%A3%E2%80%9D%EF%BD%9C%E6%A8%A1%E5%9E%8B%E6%8F%90%E9%80%9F12%E5%80%8D.md) · [微信原件](../../../../raw/eb02a2476c3b0673ddb832d42bce73edafc6a2f38e22b56235a8412a06f461e0) · 固定版本 `digest-material-eb02a2476c3b0673ddb832d42bce73edafc6a2f38e22b56235a8412a06f461e0@1`

> 为什么重要 ： 机器人抓取物体、汽车规划行驶路线，都需要随着环境变化不断更新计划。视觉语言模型逐个生成坐标，会让更细致的规划伴随更长的等待。VFlash 压缩了感知与行动之间的这段计算时间，也回应了 Jim Fan 强调的方向：自主机器需要在自己的芯片上完成思考，让视觉能力跟上行动的节奏。

> 快速跟上 ： VFlash 利用的是几何输出已有的结构。Jim Fan 举例，在相应编码方式下，一个边界框占 6 个 token，一条包含 10 个路径点的机械臂轨迹占 54 个，输出格式可以提前确定。VFlash 先按任务指定长度和坐标布局，再让一个轻量模型一次并行预测完整结构。轨迹需要多少个点可以变化，确定结构后就能整体生成。

关联一手材料：

- VFlash: Fast, Accurate Visual Planning via Flash Primitive Decoding（Yu-Cheng Chou, Shihao Wang, Jin Huang, Linxi "Jim" Fan, Jan Kautz, Zhiding Yu et al. / NVIDIA, Johns Hopkins University, HKPolyU, Purdue, HKU）· [原站](https://research.nvidia.com/labs/lpr/vflash/) · [NotebookLM](https://notebook.google.com/notebook/33f0076b-fc09-42cc-9cd9-fecfb847ce1c) · [Drive](https://drive.google.com/file/d/1E-b3yha4VNic3TjQprqkAr_OKWb7Rzdu/view?usp=drivesdk) · 版本 `digest-material-4850e501621a8d3c5d234dacad88a714335f51f887decb795af7616286387b95@1`
  > Figure 1: VFlash is a generalist decoding framework for fast, accurate visual planning across Physical AI tasks such as robotics and autonomous driving. — PDF p.1

### [GR00T 2 Official Technical Release: Scaling World-Action Models on 402,000 Hours of Human Video with X-Adapt & Jetson Thor 2B Turbo](../../blogs/GR00T%202%20Official%20Technical%20Release_%20Scaling%20World-Action%20Models%20on%20402%2C000%20Hours%20of%20Human%20Video%20with%20X-Adapt%20%26.md)

2026-11-04 · 来源：NVIDIA GEAR Lab · GR00T 2 Technical Release · 状态：有来源缺口

[单篇导读（blogs/）](../../blogs/GR00T%202%20Official%20Technical%20Release_%20Scaling%20World-Action%20Models%20on%20402%2C000%20Hours%20of%20Human%20Video%20with%20X-Adapt%20%26.md) · [微信原件](../../../../raw/c6f1bcb6d99d80a10ee03de0b047c533b6a55b761aecc635d5dd8bdad433f654) · 固定版本 `digest-material-c6f1bcb6d99d80a10ee03de0b047c533b6a55b761aecc635d5dd8bdad433f654@1`

> 【信源巡检核心摘要】 NVIDIA GEAR Lab 在 CoRL 2026 正式上线下一代机器人基础模型 GR00T 2 官方技术页与白皮书（https://research.nvidia.com/labs/gear/gr00t-2/ ，代码栈关联 https://github.com/NVIDIA/Isaac-GR00T ）。

关联一手材料：

- GR00T 2 Official Technical Release: Scaling World-Action Models on 402,000 Hours of Human Video with X-Adapt & Jetson Thor 2B Turbo（NVIDIA GEAR Lab）· [原站](https://research.nvidia.com/labs/gear/gr00t-2/) · [本地原件](../../../../raw/c6f1bcb6d99d80a10ee03de0b047c533b6a55b761aecc635d5dd8bdad433f654) · 版本 `digest-material-c6f1bcb6d99d80a10ee03de0b047c533b6a55b761aecc635d5dd8bdad433f654@1`
  > 【信源巡检核心摘要】 NVIDIA GEAR Lab 在 CoRL 2026 正式上线下一代机器人基础模型 GR00T 2 官方技术页与白皮书（https://research.nvidia.com/labs/gear/gr00t-2/ ，代码栈关联 https://github.com/NVIDIA/Isaac-GR00T ）。 — 原文提取

### [使用Pico 4 Ultra采集Egocentric Data：规格、对比与Workflow](../../blogs/%E4%BD%BF%E7%94%A8Pico%204%20Ultra%E9%87%87%E9%9B%86Egocentric%20Data%EF%BC%9A%E8%A7%84%E6%A0%BC%E3%80%81%E5%AF%B9%E6%AF%94%E4%B8%8EWorkflow.md)

2026-09-14 · 来源：Unidata · 状态：有来源缺口

[单篇导读（blogs/）](../../blogs/%E4%BD%BF%E7%94%A8Pico%204%20Ultra%E9%87%87%E9%9B%86Egocentric%20Data%EF%BC%9A%E8%A7%84%E6%A0%BC%E3%80%81%E5%AF%B9%E6%AF%94%E4%B8%8EWorkflow.md) · [微信原件](../../../../raw/11321de331892daf77b4a57c3b843e745f411f0f96235835315444d9de21061c) · 固定版本 `digest-material-11321de331892daf77b4a57c3b843e745f411f0f96235835315444d9de21061c@1`

> 你可以在 Pico 4 Ultra上部署自己的录制服务，并直接从头显读取其摄像头、手部追踪和全身姿态数据。并非每款头显都允许你触达这些数据，正是这种访问权限让egocentric 数据采集在此变得切实可行。

> 不过，仅靠头显无法覆盖fine manipulation。这需要腕部摄像头，而随之而来的是需要对齐的第二个时钟，以及每个 episode 都要通过的一次检查。这就是我们运行的两套setup ，在采集项目中，选择其中一套是第一个真正的决策。

关联一手材料：

- EgoScale: Scaling Dexterous Manipulation with Diverse Egocentric Human Data（论文作者）· [原站](https://arxiv.org/abs/2602.16710) · [NotebookLM](https://notebook.google.com/notebook/cac99041-d3b9-449e-a192-12bb4b1ad391) · [Drive](https://drive.google.com/file/d/1CUTnSUejWUAe8aHEIJZunMgoxTmzCkL1/view?usp=drivesdk) · 版本 `digest-material-39c691baf374a154e26ffc0098b97037875909495013d4017d97761716ff2735@1`
  > Human behavior is among the most scalable sources of data for learning physical intelligence, yet how to effectively leverage it for dexterous manipulation remains unclear. — PDF p.1

### [GR00T N1 & N1.5: An Open Foundation Model for Generalist Humanoid Robots (arXiv:2503.14734)](../../blogs/GR00T%20N1%20%26%20N1.5_%20An%20Open%20Foundation%20Model%20for%20Generalist%20Humanoid%20Robots%20%28arXiv_2503.14734%29.md)

2026-06-15 · 来源：arXiv:2503.14734 · GR00T N1 & N1.5 · 状态：已整理

[单篇导读（blogs/）](../../blogs/GR00T%20N1%20%26%20N1.5_%20An%20Open%20Foundation%20Model%20for%20Generalist%20Humanoid%20Robots%20%28arXiv_2503.14734%29.md) · [微信原件](../../../../raw/c9a0741e776758e779354cc88a1fd8559e8046bff55f8b58cd12e7937629373e) · 固定版本 `digest-material-c9a0741e776758e779354cc88a1fd8559e8046bff55f8b58cd12e7937629373e@2`

> 【信源巡检核心摘要】 NVIDIA GEAR Lab 发布通用人形机器人开源基础模型 GR00T N1 与 N1.5 技术报告（https://arxiv.org/abs/2503.14734）及官方代码库 https://github.com/NVIDIA/Isaac-GR00T 与全身控制框架 https://github.com/NVlabs/GR00T-WholeBodyControl 。

关联一手材料：

- GR00T N1 & N1.5: An Open Foundation Model for Generalist Humanoid Robots (arXiv:2503.14734)（NVIDIA GEAR Lab）· [原站](https://arxiv.org/abs/2503.14734) · [本地原件](../../../../raw/c9a0741e776758e779354cc88a1fd8559e8046bff55f8b58cd12e7937629373e) · 版本 `digest-material-c9a0741e776758e779354cc88a1fd8559e8046bff55f8b58cd12e7937629373e@2`
  > 【信源巡检核心摘要】 NVIDIA GEAR Lab 发布通用人形机器人开源基础模型 GR00T N1 与 N1.5 技术报告（https://arxiv.org/abs/2503.14734）及官方代码库 https://github.com/NVIDIA/Isaac-GR00T 与全身控制框架 https://github.com/NVlabs/GR00T-WholeBodyControl 。 — 原文提取

### [专访罗正宜：关于SONIC全身控制框架的访谈](../../blogs/%E4%B8%93%E8%AE%BF%E7%BD%97%E6%AD%A3%E5%AE%9C%EF%BC%9A%E5%85%B3%E4%BA%8ESONIC%E5%85%A8%E8%BA%AB%E6%8E%A7%E5%88%B6%E6%A1%86%E6%9E%B6%E7%9A%84%E8%AE%BF%E8%B0%88.md)

2026-04-16 · 来源：arXiv:2511.07820 · SONIC · 状态：有来源缺口

[单篇导读（blogs/）](../../blogs/%E4%B8%93%E8%AE%BF%E7%BD%97%E6%AD%A3%E5%AE%9C%EF%BC%9A%E5%85%B3%E4%BA%8ESONIC%E5%85%A8%E8%BA%AB%E6%8E%A7%E5%88%B6%E6%A1%86%E6%9E%B6%E7%9A%84%E8%AE%BF%E8%B0%88.md) · [微信原件](../../../../raw/78635547d80283dd65b7330031ae1e0473bddd3885101ebf5b26a24cb5bc858e) · 固定版本 `digest-material-78635547d80283dd65b7330031ae1e0473bddd3885101ebf5b26a24cb5bc858e@1`

> 人形机器人通用控制器系列，我们在专访Xue Bin(Jason) Peng：探索人形机器人全身运控的通用控制器，专访罗正宜：解密PHC——人形机器人通用控制器，以及2025年的Human Data系列总结篇：Human Data— The “Key” to Robot Data的一系列采访都有涉及。这期文章，我再次邀请到了罗正宜博士，来聊一聊在人形机器人全身运控领域家喻户晓的工作SONIC。

> 罗正宜（Zhengyi Luo）是英伟达GEAR实验室的一名研究科学家，博士毕业于CMU，他的导师是 Kris Kitani 教授。在此之前，他于2019年在宾夕法尼亚大学获得了本科学位，并曾在 Kostas Daniilidis 教授的指导下开展研究工作。罗正宜博士的的研究兴趣主要集中在视觉、学习与机器人技术的交叉领域。主要研究方向包括人体姿态估计、人-物交互建模、人类运动建模等。

关联一手材料：

- SONIC: Supersizing Motion Tracking for Natural Humanoid Whole-Body Control（Zhengyi Luo et al. / Science Robotics）· [原站](https://arxiv.org/abs/2511.07820) · [NotebookLM](https://notebook.google.com/notebook/33f0076b-fc09-42cc-9cd9-fecfb847ce1c) · [Drive](https://drive.google.com/file/d/1lh1mp-C2npU2dCE7foHM62SXcgfw0R-T/view?usp=drivesdk) · 版本 `digest-material-6580f9223b504c6420eb409bca849bdd968cec17af5c2e7e3c395bb9e1df4267@1`
  > Despite the rise of billion-parameter foundation models trained across thousands of graphical processing units (GPUs), similar scaling gains have not been shown for humanoid control. — PDF p.1

### [专访Danfei Xu：人类数据是伪装成另一种形式的机器人数据](../../blogs/%E4%B8%93%E8%AE%BFDanfei%20Xu%EF%BC%9A%E4%BA%BA%E7%B1%BB%E6%95%B0%E6%8D%AE%E6%98%AF%E4%BC%AA%E8%A3%85%E6%88%90%E5%8F%A6%E4%B8%80%E7%A7%8D%E5%BD%A2%E5%BC%8F%E7%9A%84%E6%9C%BA%E5%99%A8%E4%BA%BA%E6%95%B0%E6%8D%AE.md)

2026-03-23 · 来源：arXiv:2602.16710 · EgoScale · 状态：有来源缺口

[单篇导读（blogs/）](../../blogs/%E4%B8%93%E8%AE%BFDanfei%20Xu%EF%BC%9A%E4%BA%BA%E7%B1%BB%E6%95%B0%E6%8D%AE%E6%98%AF%E4%BC%AA%E8%A3%85%E6%88%90%E5%8F%A6%E4%B8%80%E7%A7%8D%E5%BD%A2%E5%BC%8F%E7%9A%84%E6%9C%BA%E5%99%A8%E4%BA%BA%E6%95%B0%E6%8D%AE.md) · [微信原件](../../../../raw/6b994c422a6b5ed6332abda16ec1d5b63ec609df2cc1b637063d998161f90937) · 固定版本 `digest-material-6b994c422a6b5ed6332abda16ec1d5b63ec609df2cc1b637063d998161f90937@1`

> 关于Human Data，我们在2025年用了大半年的时间去展现以及科普一些最前沿的学术工作，集锦可以参考总结篇：Human Data—The “Key” to Robot Data。去年的工作汇总更多的是在全身运动控制，在进入2026年，随着EgoScale等工作发布，我们看到了人类数据在机器人操作上的可能性。

> Danfei Xu是Georgia Tech的助理教授，同时也参与NVIDIA Research的部分研究工作。他于 2021 年在斯坦福大学获得计算机科学博士学位，师从李飞飞（Fei-Fei Li）和 Silvio Savarese，本科毕业于哥伦比亚大学工程与应用科学学院。

关联一手材料：

- EgoScale: Scaling Dexterous Manipulation with Diverse Egocentric Human Data（论文作者）· [原站](https://arxiv.org/abs/2602.16710) · [NotebookLM](https://notebook.google.com/notebook/cac99041-d3b9-449e-a192-12bb4b1ad391) · [Drive](https://drive.google.com/file/d/1CUTnSUejWUAe8aHEIJZunMgoxTmzCkL1/view?usp=drivesdk) · 版本 `digest-material-39c691baf374a154e26ffc0098b97037875909495013d4017d97761716ff2735@1`
  > Human behavior is among the most scalable sources of data for learning physical intelligence, yet how to effectively leverage it for dexterous manipulation remains unclear. — PDF p.1
