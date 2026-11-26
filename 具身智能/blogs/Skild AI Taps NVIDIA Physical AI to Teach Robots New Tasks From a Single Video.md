---
title: "Skild AI Taps NVIDIA Physical AI to Teach Robots New Tasks From a Single Video"
type: blog_digest
sector: "具身智能"
source: "NVIDIA & Skild AI"
published_at: "2026-09-10"
raw_sha256: "669a05e83a31e1feb98196ed480dab989edb34bbfbadaee3cc7b1d4d10213c50"
material_version: "digest-material-669a05e83a31e1feb98196ed480dab989edb34bbfbadaee3cc7b1d4d10213c50@1"
origin_url: "https://blogs.nvidia.com/blog/skild-ai-s1-physical-ai/"
trigger_source: "一手信源"
trigger_url: "https://blogs.nvidia.com/blog/skild-ai-s1-physical-ai/"
user_comments: ""
status: "processed_with_gaps"
primary_topic: "工业落地与商业模式"
secondary_topics: ["模型与策略架构"]
topic_confidence: 0.4123
---

<a id="digest-669a05e83a31e1fe"></a>
# Skild AI Taps NVIDIA Physical AI to Teach Robots New Tasks From a Single Video

2026-09-10 · NVIDIA & Skild AI · 有来源缺口

[本地原件归档](../../../raw/669a05e83a31e1feb98196ed480dab989edb34bbfbadaee3cc7b1d4d10213c50) · 固定材料版本 `digest-material-669a05e83a31e1feb98196ed480dab989edb34bbfbadaee3cc7b1d4d10213c50@1` · [一手原站](https://blogs.nvidia.com/blog/skild-ai-s1-physical-ai/)

## 深度拆解与复核

- ==核心结论==：NVIDIA 官方博客于 2026-09-10 披露 Skild AI 与 NVIDIA Physical AI 的全栈工程绑定细节——继 2026 年 9 月初发布支持单条视频零微调执行长达 10 分钟未见任务的 Skild AI S1 基础模型后，Skild AI 披露其首个商业部署 10 个月后年化营收运行率（ARR）已达 \$100M（1 亿美元）并积累超 60 项部署合作，且正与 NVIDIA、Foxconn 联合将 Skild Brain 部署于双臂机械臂产线，用于高难度接触感知的 NVIDIA Blackwell 系统组装（安装汇流排、限位块及拧紧 16 颗螺钉）。该文真正的新增含金量不在“单视频上下文学习”概念本身，而在于首次完整摊开 Skild AI 从合成数据（NVIDIA Cosmos / Cosmos Curator）、物理仿真与强化学习（Omniverse / Isaac Sim / Isaac Lab / Newton 物理引擎）到联合开发 GPU 加速接触求解器及边缘推理（Nsight / TensorRT）的 NVIDIA 全栈工具链依赖。
- 本工作台交叉档案：[主体档案：NVIDIA](../entities/companies/NVIDIA.md) · [主体档案：Deepak Pathak](../entities/people/Deepak%20Pathak.md) · [主体档案：NVIDIA GEAR Lab](../entities/labs/NVIDIA%20GEAR%20Lab.md) · [Generalist AI GEN-1.5 与 Skild AI S1 视频上下文学习横向复核](../../AI%E8%AE%AD%E7%BB%83%E4%B8%8E%E6%95%B0%E6%8D%AE/blogs/Generalist%20AI%20GEN-1.5%20One-Shot%20Physical%20Prompting%20%283%E2%80%9312s%20Demo%29%20%26%20Skild%20AI%20S1%20Video%20In-Context%20Learning%20%2B%20Physi.md)

#### 1. 口径与利益披露（NVIDIA 生态伙伴公关口径与指标核查边界）

- 发布身份与生态绑定位阶：本文由 NVIDIA 作者 Sasa Docca 撰写并发布于 NVIDIA 官方博客，典型属于“标杆客户背书 NVIDIA Physical AI 全栈基建”的生态宣传稿（引用 Skild AI CEO Deepak Pathak 对 Isaac Lab 与 Cosmos 的正面证言）。阅读时必须区分可独立交叉验证的工程合作事实与单方自报性能/财务口径。
- 关键数字与未决问题口径对账（本工作台核查）：⚠️ 文中“在全新多步骤任务中，S1 单步成功率约 66%（66 %），对比同类 AI 系统的 9% 提升超 7 倍”以及“1 条短视频演示等价于约 380 条人工示教（节省 50–100 小时采集）”均系 Skild 内部测试口径，原文未披露对照系统名称、测试任务全集、重复次数及多步串联后的端到端整程成功率（若单步 66% 连续执行 10 步且无高鲁棒恢复，端到端一次性通过率将显著下降）；⚠️ 文中披露的 \$100M 年化营收运行率与 60+ 合作伙伴属初创公司自报运行率（Run Rate），不同于经审计的年度 GAAP 营收与经常性纯软件订阅口径；关于本站关联未决问题「估值超 170 亿：兄弟俩把“世界模型”塞进焊枪...」所涉“170 亿”估值叙事，本篇 NVIDIA 一手原文仅实证其商业化达到 \$100M 年化运行率，并未披露任何股权估值或融资条款，不可将不同市场叙事混为同源事实。

#### 2. 相比站内既有 GEN-1.5/S1 横评的三大增量事实（Teach Robots New Tasks 工程落地线）

1. ✅ 工厂产线实景首披：Skild + NVIDIA + Foxconn 联合组装 Blackwell 系统
   - 本工作台核查：区别于站内已收录的通用模型横评中仅提及“10 分钟长程操作”，本文明确给出具体工业场景——三方正把 Skild Brain 部署到双臂机械臂上执行 NVIDIA Blackwell 算力系统精密装配，覆盖汇流排（Busbar）安装、限位块放置、16 颗螺钉紧固以及面对产线扰动的动态纠偏与接触控制。此外，在盆栽种植测试中，S1 从录制人类演示视频到在真机硬件上自主执行总耗时压缩至 11 分钟。
2. ✅ NVIDIA Physical AI 四段式底座全栈渗透（并反向反哺 Newton 开源生态）
   - 本工作台核查：Skild AI 并非仅向 NVIDIA 采购 GPU 算力，而是深度嵌入其软件栈并联合研发底层求解器：
     - 合成数据与清洗：用 NVIDIA Cosmos 开放世界基础模型扩充多形态训练数据、将视频转写为结构化描述，并通过 Cosmos Curator 做大规模过滤与标注；
     - 物理仿真与自博弈 RL：依托 NVIDIA Omniverse 与 Isaac Sim 构建物理逼真虚拟环境，在基于 Newton 物理引擎的模块化框架 Isaac Lab 中运行强化学习，专门建模接触、碰撞、压力与力控以缩小 Sim-to-Real 鸿沟；
     - 底层联合共研：Skild 与 NVIDIA 正在共同开发新型 GPU 加速物理仿真求解器（GPU-accelerated simulation solvers），精准模拟刚体接触、抓握与操作动力学，并计划随后通过 Newton 向全行业开发者开放；
     - 训练与端侧推理加速：训练瓶颈分析采用 NVIDIA Nsight，真机部署期采用 NVIDIA TensorRT SDK 压缩推理延迟以满足高频闭环响应。
3. ⚠️ 商业飞轮与数据协议隐含条款（本工作台推断）
   - 本工作台推断：原文提及“在客户协议允许的情况下，Skild 商业部署产生的真实经验会反哺通用大模型并加速后续交付”。这揭示了 \$100M 运行率背后的真实护城河争夺战——头部客户（如 Foxconn）产线授权回流的接触力控长尾失败数据，结合 Cosmos/Newton 仿真合成闭环，才是其试图将单步 66% 推向工业级可用的真正燃料，而非单纯依赖单视频 Prompt。

#### 3. Skild AI S1 商业化与 NVIDIA Physical AI 全栈对照台账

| 维度 | 一手原文披露事实（2026-09-10 NVIDIA Blog） | 本工作台核查与风险边界标注 |
| --- | --- | --- |
| 商业化规模与节奏 | 首个商业部署后 10 个月达到 \$100M 年化营收运行率；60+ 部署合作覆盖制造、物流、巡检、安防、备餐 | ⚠️ 运行率未拆解硬件集成/工程交付服务 vs 模型授权占比，亦未说明 60+ 合作中付费量产 vs POC 试点比例。 |
| S1 单视频自适应指标 | 1 条演示视频零权重更新执行最高 10 分钟任务（盆栽、煎饼、手冲咖啡、套件装配）；盆栽测试从录视频到真机运行 11 分钟；单步成功率 66% vs 9%；1 条视频约等效 380 条实操样本（省 50–100 小时） | ⚠️ 66% 为单步指标而非端到端长程成功率，且未公开基准名称、物体随机度及多传感器（力觉 vs 纯视觉）配置。 |
| 产线硬件与联合生态 | Skild + NVIDIA + Foxconn 双臂装配 Blackwell 节点（汇流排、限位块、16 颗螺钉）；联合开发 Newton GPU 接触仿真求解器 | ✅ 具象工业标杆落地可核验，且双方从“算力买家-卖家”升级为“物理引擎求解器共研伙伴”，强化 NVIDIA 在具身中间件生态中的事实标准地位。 |
| 底层基础设施链路 | Cosmos + Cosmos Curator → Omniverse + Isaac Sim + Isaac Lab (Newton) → Nsight + TensorRT | ⚠️ 全栈锁定 CUDA/Omniverse/TensorRT 体系有助于快速量产与推理提速，但也抬高了未来向非 NVIDIA 端侧推理芯片迁移的重写成本。 |

### 观点与可反驳条件

- ==观点==：这篇 NVIDIA 官宣真正揭示的行业趋势，是 2026 年头部具身大模型公司已不再单靠互联网视频或纯真机遥操作“单腿走路”，而是用 NVIDIA Cosmos/Isaac Lab/Newton 物理仿真生成海量接触动力学数据 + 单视频物理上下文学习（S1）解决长尾冷启动 + Foxconn 等工业客户部署回流数据修正 Sim-to-Real 误差 的三层混合飞轮；但目前 66% 的单步成功率与未拆解的 \$100M 年化运行率，仍不足以证明“纯靠一条视频即可在无定制工程介入下稳定接管高节拍工厂工位”。
- ==推翻条件==：
  1. ① 端到端工业可靠性实证推翻条件：若 Skild AI 或第三方在 2027H1 前公开发布面向非合作场景的独立基准评测报告（公开测试集与试验次数），证明 S1 仅靠单条 10–60 秒视频 Prompt、零权重微调即可在多步接触装配任务中取得 ≥95% 端到端整程成功率（非仅单步 66%）且连续运行 MTBF 达产线标准，则本文对单视频冷启动长程误差累积的保留态度将被推翻。
  2. ② 仿真-硬件绑定解耦推翻条件：若 Skild 与 NVIDIA 联合开发的 Newton 求解器开源后未能吸引除 NVIDIA 生态外的第三方具身团队大规模采用，或 Skild 在 2027 年内宣布核心训练/边缘推理大规模迁移至非 NVIDIA 芯片架构且未损失性能，则“NVIDIA Physical AI 全栈工具链深度锁定”的生态壁垒判断需下修。
  3. ③ 商业化含金量证伪条件：若后续融资文件或审计披露显示 Skild AI 的 \$100M 运行率中有 ≥50% 来自一次性定制系统集成/硬件转售而非可跨客户复用的高毛利模型订阅或按工时付费，且 60+ 合作方在 12 个月后的付费扩线留存率低于 40%，则其作为“通用机器人大脑平台”的商业化估值逻辑将被证伪。

---

## 原文摘录与一手信源存证

> 【信源巡检核心摘要】 Manufacturing floors, warehouses and production lines rarely stay fixed — tasks change, layouts shift and new products arrive, and most robots can’t keep up without significant reprogramming.
> — 原文摘录，文字段落 1；证据 `digest-material-669a05e83a31e1feb98196ed480dab989edb34bbfbadaee3cc7b1d4d10213c50-excerpt-1@1`

一手材料：

- Skild AI Taps NVIDIA Physical AI to Teach Robots New Tasks From a Single Video · NVIDIA & Skild AI · [原站](https://blogs.nvidia.com/blog/skild-ai-s1-physical-ai/) · [主体档案库](../entities/README.md) · [本地原件](../../../raw/d460d74c38a7a61d7e187872de6d80787e77a5139931c92a58e123f97c3f5951)
  材料版本 `digest-material-d460d74c38a7a61d7e187872de6d80787e77a5139931c92a58e123f97c3f5951@1`；获取方式 `official_blog_full_text`。
  > Skild AI’s S1 robotic foundation model harnesses NVIDIA technologies spanning synthetic data generation, model training, simulation and real-world deployment. — 原文提取
  > Manufacturing floors, warehouses and production lines rarely stay fixed — tasks change, layouts shift and new products arrive, and most robots can’t keep up without significant reprogramming. — 原文提取

归属与范围：NVIDIA 2026-09-10 官方博文披露 Skild AI 首个商业部署 10 个月达 \$100M 年化营收运行率、60+ 部署合作及 S1 新任务单步 66% 成功率，并与 NVIDIA、Foxconn 推进 Blackwell 双臂装配及共建 Newton GPU 物理仿真接触求解器。

来源缺口：

- `not_disclosed`：原文自报的 S1 单步 66% 成功率未披露对照“同类 AI 系统”（9%）的具体模型名称、任务集数量、重复试验次数与端到端长程成功率；\$100M 年化营收运行率亦未拆解软件订阅与硬件集成/工程交付占比，且未涵盖外部传闻的 170 亿级估值明细。 [线索](https://blogs.nvidia.com/blog/skild-ai-s1-physical-ai/)

[返回赛道总览](../赛道总览.md#digest-669a05e83a31e1fe) · [返回导读索引](README.md) · [主体档案库](../entities/README.md)
