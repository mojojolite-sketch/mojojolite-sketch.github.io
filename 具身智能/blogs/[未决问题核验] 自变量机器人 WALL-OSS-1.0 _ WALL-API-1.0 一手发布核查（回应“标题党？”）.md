---
title: "[未决问题核验] 自变量机器人 WALL-OSS-1.0 / WALL-API-1.0 一手发布核查（回应“标题党？”）"
type: blog_digest
sector: "具身智能"
source: "X Square Robot (自变量机器人) · WALL-OSS-1.0 / WALL-API-1.0"
published_at: "2026-11-23"
raw_sha256: "19b2c53e3576aef87c59e54c4e5c73c35763caa93fd543f930a561ad0094e84e"
material_version: "digest-material-19b2c53e3576aef87c59e54c4e5c73c35763caa93fd543f930a561ad0094e84e@1"
origin_url: "https://x2robot.com/en/blog/wall-oss-1"
trigger_source: "X Square Robot (自变量机器人)"
trigger_url: "https://www.streetinsider.com/Globe+Newswire/X+Square+Robot+Introduces+WALL-OSS-1.0%3A+Understand+More%2C+Act+Better+%E2%80%94+A+Native+Foundation+Model+for+the+Physical+World/27383297.html"
user_comments: ""
status: "processed_with_gaps"
primary_topic: "模型与策略架构"
topic_confidence: 0.7281
---

<a id="digest-19b2c53e3576aef8"></a>
# \[未决问题核验\] 自变量机器人 WALL-OSS-1.0 / WALL-API-1.0 一手发布核查（回应“标题党？”）

2026-11-23 · X Square Robot (自变量机器人) · WALL-OSS-1.0 / WALL-API-1.0 · 有来源缺口

[本地原件归档](../../../raw/19b2c53e3576aef87c59e54c4e5c73c35763caa93fd543f930a561ad0094e84e) · 固定材料版本 `digest-material-19b2c53e3576aef87c59e54c4e5c73c35763caa93fd543f930a561ad0094e84e@1` · [一手原站](https://x2robot.com/en/blog/wall-oss-1) · [触发线索（X Square Robot (自变量机器人)）](https://www.streetinsider.com/Globe+Newswire/X+Square+Robot+Introduces+WALL-OSS-1.0%3A+Understand+More%2C+Act+Better+%E2%80%94+A+Native+Foundation+Model+for+the+Physical+World/27383297.html)

## 深度拆解与复核

- 口径与利益披露：本卡片核查对应自变量机器人（X Square Robot，Shenzhen-based，创始人兼 CEO 王潜 Qian Wang † Project Lead、CTO 王昊 Hao Wang * Corresponding Author）于 2026-11-23 通过 GlobeNewswire 发布的英文官方通稿及同步上线的官方博客《WALL-OSS-1.0: Understand More, Act Better — A Native Foundation for the Physical World》（x2robot.com/en/blog/wall-oss-1 与中文版 /blog/wall-oss-1；StreetInsider 与 GlobeNewswire 原页面返回 Cloudflare 403 质询，通过官方博客原文、开发者文档及第三方转述交叉核验）。需重点提示两层利益口径：一是自变量自身在 ManipArena 与 X2Real 两项核心基准论文中均为联合署名机构，存在自建跑道自测激励；二是官网通稿将多款尚未开源的旗舰/轻量模型指标与未来路线图并列呈现，容易被二级媒体（如量子位）跨口径混剪。

### 一、直接回应「标题党？」：四大核心维度的实时一手验真（截至 2026-11-26）

| 核查维度 | 通稿与二级媒体核心宣称 | 一手代码仓 / 模型卡 / 官网文档实证核查（截至 2026-11-26） | 复核定性（✅ / ⚠️ / ❌） |
| :--- | :--- | :--- | :--- |
| 1. 真实参数与原生架构 | 基于 Qwen3.5 原生联合预训练（Action + VL + Action VL），保留通用能力并扩展出 Lite / Nano / Gen / AR 模型族。 | 官网博客明确披露 `WALL-OSS-1.0-Lite` 为 4B、`WALL-OSS-1.0-Nano` 为 2B（Hugging Face `wall-oss-1.0-lite-robodojo/checkpoint/config.json` 证实 `Qwen3_5ForConditionalGeneration`、`hidden_size=2560`、32 层 3:1 `linear_attention` + `full_attention` 混合骨干；`wall-wm-2.0-robodojo` 为 `qwen3.5-9B + Wan2.2`）。Stage 1 用改进版 X-Tokenizer 离散化跨本体轨迹并冻结 tokenizer，在 8 项 VLM 基准保持 79.2%（对比 Qwen3.5 基座 79.4%），10M–1B Transformers Action Modeling 验证动作交叉熵 CE 随 FLOPs 幂律缩放；Stage 2 接入 MoT 流匹配 Action Expert 与 RTC（Real-Time Chunking）；Gen 新增 Generation Expert 与仅训练期使用的 WAM；AR 用分层残差编码 + MaT 直接因果自回归解码。但旗舰版 `WALL-OSS-1.0` 参数规模与总预训练小时数官网全程未披露。 | ⚠️ 本工作台核查（架构真实但旗舰黑盒）：Lite 4B / Nano 2B 与原生 Stage 1 保留率（79.2% vs 79.4%）均有配置或数据支撑，但通稿主力跑分的旗舰模型至今未公布具体 B 数规模。 |
| 2. 实际开源范围 | 媒体广泛将 `WALL-OSS-1.0` 渲染为「开源旗舰模型」，并称已登顶 RoboDojo。 | 实时核查 `github.com/X-Square-Robot/wall-x` 仍停留在 Wall-X 1.1.0 / `WALL-OSS-0.5`（main 分支最后推送 2026-09-18，PR #128 `Qwen3.5 VLA release with RoboDojo serving` 自 2026-11-01 起仍处于 open 未合入状态，PR #131 为 11-24 Intel XPU 支持）；Hugging Face `x-square-robot` 仅挂出 `wall-oss-1.0-lite-robodojo`（2026-10-23 创建）、`lite-robodojo-base`（11-02）与 `wall-wm-2.0-robodojo`（11-21），其中 Lite 模型卡明示仅限 `arx_x5` 双臂 32 步末端位姿 + 4 轮残差精修 + 滑窗关键帧记忆，且 Limitations 直写「not validated on real robots」。旗舰 `WALL-OSS-1.0`、`2B Nano`、`Gen` 与 `AR` 权重均未开源（GlobeNewswire 报道亦注明「will be open-sourced in the future」）。开源落地较扎实的是工具链仓：`xr-harness`（11-23 推送）、`xinfer`（11-24 推送）、`x2real`（10-10 v0.9.0，44 语义任务 / 73 可运行 ID 配置，sim-to-real 相关性 0.84）及 `policy-space`（v0.3.0，11-23 推送）。 | ❌ 本工作台核查（开源口径严重超前）：「WALL-OSS-1.0 开源旗舰已释放」属于明显标题党；当前真正公开可拉取的 1.0 权重仅有 RoboDojo 仿真专用 4B Lite，旗舰与真机权重尚未向社区开放。 |
| 3. 真机与仿真表现 | 312 项开放真机零样本成功率 55.1%；ManipArena 超微调 `π0.5` 达 +70.8%；X2Real 领先并登顶 RoboDojo。 | 官网一手口径将各实验清晰拆分（并非媒体混剪的单一实验）：① ManipArena 15 项桌面真机（每项 10 次 trial）：未微调 `WALL-OSS-1.0` 得 1,101/1,500（比 `WALL-OSS-0.5` 722 高 52.5%，比多任务微调 `π0.5` 644.5 高 70.8%），完整成功率 50.67%（vs 0.5 19.33%、`π0.5` 24.0%），语义 5 项任务成功率 78%（vs 20% / 44%，其中耳机分类、物体配对与选果入篮达成 100% 完成度）；② 开放式 377 次测试归并为 312 个独立任务（47 任务簇 / 8 任务族 / 9 维度）：平均 6.45/10、零样本成功率 55.1%（多步骤 66.5%、拾放 62.2%、双臂 57.7%）；③ X2Real 微调 1 epoch 后桌面总分 67.55/100（比 `Lingbot-VLA-2.0` 40.94 高 65.0%，Pure Manipulation 32.87 比 `GPT-6-Astra` 21.48 高 53.1%），OOD 移动操作均值 44.17（比 `π0.5` 24.83 高 77.9%，其余对比含 DM0.5、DreamZero、OpenWAM-A）；④ RoboDojo Simulation Leaderboard 官网仅引用「2026-11-05 不含 Agent 系统的纯策略」快照：Lite 得 42.59 排第 1（VPP2 39.26、Awomo-0.5 35.34、Simate-beta 33.95、Rex-M1 Preview 33.79），但同期库内已核实截至 11-18 该榜已被 GO-3 Nano 等纯策略及 SOLVE 等 Agent 体系大幅反超。 | ⚠️ 本工作台核查（数据真但口径被二级媒体拼接）：官方数字在各自限定子集下均可在官网 Benchmarks 核对，但「55.1% 嫁接 +70.8%」与「11-05 非 Agent 仿真快照吹成全局登顶」属于典型传播夸大；ManipArena 仅 50.67% 完整成功率亦说明远未到「通用智能时刻」。 |
| 4. `WALL-API-1.0` 开放边界 | 同步推出面向开发者与企业的 `WALL-API-1.0`，支持 XR Harness 与多本体直连。 | `x2robot.com` 文档证实服务地址为 `wss://maas-api.x2robot.com/v1/vla/wallx`（MessagePack + WebSocket，`action_horizon=32`，`row_dt_s=0.0337 s` 约 29.7 Hz，需 `front`/`left_wrist`/`right_wrist` 三路图像、`normalization=provided` 与绝对位姿 `[x,y,z]` + `rotation_rpy`），支持 `quanta_x1_pro` 与 `teletwin_desktop`（G 夹爪 `[0, 1.526]`、H 夹爪 `[0, 4.6]`）、`yam`、`agilex` 与 `franka`，默认裸 VLA 且支持 `use_agent: true`。但 API Key 并非自助开通或商业化明码标价 SaaS，须发送邮件至 `wallxapi@x2robot.com` 提交姓名、手机、单位、学历、Google Scholar、GitHub 与实机/仿真环境进行人工审核，且未披露 SLA、并发配额与收费标准。 | ⚠️ 本工作台核查（内测申请制且非首创）：API 协议栈工程化清晰（且已接入 XR Harness `wallx-public-v2` 后端），但尚处人工白名单内测阶段，商业化成熟度落后于已上线的 Physical Intelligence Pi API Beta（10-28）与 RoboAPI（10-30）。 |

### 二、映射到具身智能 T1–T4 主线的工程含金量拆解

- ✅ T1 / T3 频率分层与代码编排互证（本工作台核查）：自变量并未押注单个端到端黑盒 VLA 独立完成长程任务，而是同期开源 `XR Harness`——System 2 `XR Brain`（明确基于 DeepSeek Harness MIT 协议构建）负责规划与重规划，System 1 `XR Cerebellum` 调度 `WALL-OSS-1.0` 动作块并由 `Watcher` 校验完成度、`Monitor` 监控环境异常，System 0 `RAP Runtime` 对接硬件执行；同时在 `XInfer` 中用 2B `WALL-OSS-1.0-Nano` 在单张 NVIDIA Blackwell RTX 5090 跑出 BF16 单请求 20.1 ms P50（进程内测 22.3 ms）、14 台机器人并发 85/107 ms（81.3 req/s）及 MXFP8 15.1 ms / 25 台 / 141.0 req/s（Ascend 950DT BF16 20.6 ms / 15 台 / 83.9 req/s，并采用周期级 GPU 仿真与 DSL-based 内核优化；NVIDIA Jetson Thor 与 NVFP4 仍为 TBD）。这种「S2 Agent 编排+校验器 + S1 轻量端侧并发快动作块」直接踩中 T1 与 T3，反而反向说明 50.67%–55.1% 零样本本体仍必须靠上层 Agent 与 Watcher 兜底。
- ✅ T2 / T4 数据链路与物流微调 ROI 锚点（本工作台核查）：通稿真实含金量在工业微调降本——数据配方汇集自研 `XRZero-G0` UMI 采集（超 20 项逆运动学/抖动/6-DoF 质检）、遥操作、开源集与智能体回退接管闭环（覆盖 15 类任务、32 类场景、110 类物体，配 L3/L2/L1/L0 四层 RL-optimized 分割标注），使头部物流客户包裹分拣（parcel sorting）任务的微调需求从无预训练 >1,000 小时降至约 10 小时，跨场地迁移保留 90% 以上速度与成功率（无预训练下降超 90%），单卡在 RTX 5090 与 Huixi ASICs 分别达到 2,231 与 2,190 parcels/h。这精准锚定 T4 中「10 小时产线微调 + 高节拍结构化工位」的商业切入口，但通稿同样回避了预训练总小时数与接管数据绝对时长。
- 本工作台推断：对「标题党？」的最终回答是「一手通稿自身构成了 60% 扎实工程进展 + 40% 选择性口径包装，而二级中文自媒体将其放大为 80% 标题党」。真正决定自变量能否跨出「单工位微调基座」走向通用商业化的，不是 11-05 仿真静态快照或 55.1% 无基线自由测试，而是三件事：① 何时真正在 Hugging Face / GitHub 释放旗舰、2B Nano 与 Gen 权重供第三方复现；② 在非自变量主导的第三方盲测真机基准（如 RoboDojo-RealWorld）能否维持领先；③ `WALL-API-1.0` 脱离人工邮件审批后在外部企业客户处的真实付费留存与并发稳定性。

### 观点与可反驳条件

- ==观点==：自变量机器人 2026-11-23 发布的核心资产并非媒体炒作的「已开源通用智能零样本旗舰」，而是一套工程耦合度很高的「10 小时低样本产线微调 VLA 底座 + XInfer 2B 多机并发推理引擎 + XR Harness 三层监督框架」；在旗舰权重尚未开源、WALL-API-1.0 仍需人工邮件审批且真机零样本完整成功率仅 50.67%–55.1% 的现状下，其生态位属于结构化工业落地底座（T4），尚未跨越具身通用智能拐点。
- ==推翻条件==：
  1. ① 若截至 2027-Q2，自变量在 Hugging Face 与 GitHub 完整释放 WALL-OSS-1.0 旗舰、2B Nano 与 Gen 权重，且在完全独立第三方主持（非自变量成员参与维护与出题）的真机盲测基准（如 RoboDojo-RealWorld 18 项任务）中，未经任务微调且不依赖外部大模型重规划的裸模型取得 >=75% 完整任务成功率，则本文对其「距离通用零样本智能尚远、存在自测与开源口径包装」的界定将被推翻。
  2. ② 若在 2027-H1 内，`WALL-API-1.0` 全面转为公开自助计费 SaaS 且有 >=5 家非关联商业客户公开披露无需采集 10 小时产线微调数据、仅通过 API 零样本调用即稳定跑通工业节拍与跨厂区 >=95% 良率，则「本质仍依赖任务微调基座与 XR Harness 兜底」的商业判断将被证伪。

---

## 原文摘录与一手信源存证

> 【信源巡检核心摘要】 一手核验结论（半标题党）：量子位2026-11-24推文《具身行业，终于等来了自己的通用智能时刻》对应自变量机器人2026-11-23 GlobeNewswire一手公告——发布基于Qwen3.5原生联合预训练的VLA模型WALL-OSS-1.0、XR Harness智能体框架及WALL-API-1.0。
> — 原文摘录，文字段落 1；证据 `digest-material-19b2c53e3576aef87c59e54c4e5c73c35763caa93fd543f930a561ad0094e84e-excerpt-1@1`

一手材料：

- WALL-OSS-1.0: Understand More, Act Better — A Native Foundation for the Physical World · X Square Robot (自变量机器人) · [原站](https://x2robot.com/en/blog/wall-oss-1) · [主体档案：X Square Robot (自变量机器人)](../entities/companies/X%20Square%20Robot%20%28%E8%87%AA%E5%8F%98%E9%87%8F%E6%9C%BA%E5%99%A8%E4%BA%BA%29.md) · [本地原件](../../../raw/f2005381f8ef083d0eb5e2be33c0f02573141c04761a3c33fca1bbe7c585c1a7)
  材料版本 `digest-material-f2005381f8ef083d0eb5e2be33c0f02573141c04761a3c33fca1bbe7c585c1a7@1`；获取方式 `http_full_text`。
  > === Official Blog Tail (Chinese Edition x2robot.com/blog/wall-oss-1: Parcel Sorting, XR Harness, Roadmap & References) === 从基准评测走向真实世界应用 迈向更强 VLA 的可扩展路径 引用本文 迈向通用具身智能 我们正在见证具身智能指数增长曲线的起点。 — 原文提取
- WALL-X API 接口使用说明 — 量子一号Pro 1.0 (X Square Robot Developer Docs) · X Square Robot (自变量机器人) · [原站](https://x2robot.com/docs/quantax1pro/v1/model-development/wallx-api/api-usage-instruction) · [主体档案：X Square Robot (自变量机器人)](../entities/companies/X%20Square%20Robot%20%28%E8%87%AA%E5%8F%98%E9%87%8F%E6%9C%BA%E5%99%A8%E4%BA%BA%29.md) · [本地原件](../../../raw/88da69fab5787b9ed63adfc8a1fdeaed4baaa6138d41d80c37f57669a0ef82c0)
  材料版本 `digest-material-88da69fab5787b9ed63adfc8a1fdeaed4baaa6138d41d80c37f57669a0ef82c0@1`；获取方式 `http_full_text`。
  > quanta\_x1\_pro 与 quanta\_x1\_pro/gripper-g 相同。夹爪后缀和实机一致。用 normalization: "provided"，三路相机都要。不传 dof\_mask、normalizer、robot\_id。 — 原文提取
  > 位置和姿态写绝对量，单位是米和弧度。相对量由服务内部计算。rotation\_rpy 是 \[roll, pitch, yaw\]，旋转矩阵是 Rz(yaw) · Ry(pitch) · Rx(roll)。画面左侧是机器人的右臂。 — 原文提取
- X-Square-Robot/xr-harness: An Open-Source Agent Harness for Robotics · X-Square-Robot · [原站](https://github.com/X-Square-Robot/xr-harness) · [主体档案：X Square Robot (自变量机器人)](../entities/companies/X%20Square%20Robot%20%28%E8%87%AA%E5%8F%98%E9%87%8F%E6%9C%BA%E5%99%A8%E4%BA%BA%29.md) · [本地原件](../../../raw/f88c928409389367669ccc776527d999712157dd456bf4d32121e84e20ee0754)
  材料版本 `digest-material-f88c928409389367669ccc776527d999712157dd456bf4d32121e84e20ee0754@2`；获取方式 `http_full_text`。
  > \*\*XR Harness is an open-source agent harness for robotics.\*\* It provides model integration, task context, robot tools, and execution feedback to connect reasoning and planning with action execution. — 原文提取
  > \*\*Developer Preview.\*\* XR Harness is currently available as an open-source developer preview. We will continue to improve its capabilities, performance, and reliability through ongoing updates. — 原文提取
- X-Square-Robot/xinfer & Scaling VLA Serving Under Robotic Execution Constraints (arXiv:2611.14969) · X-Square-Robot (GitHub) · [原站](https://github.com/X-Square-Robot/xinfer) · [主体档案：X Square Robot (自变量机器人)](../entities/companies/X%20Square%20Robot%20%28%E8%87%AA%E5%8F%98%E9%87%8F%E6%9C%BA%E5%99%A8%E4%BA%BA%29.md) · [本地原件](../../../raw/b7c45d2abdf91e416da61ecd3219582c462a5ba4204243e42b86eca41c483197)
  材料版本 `digest-material-b7c45d2abdf91e416da61ecd3219582c462a5ba4204243e42b86eca41c483197@1`；获取方式 `http_full_text`。
  > \*\*XInfer\*\* is an inference and serving framework for vision-language-action (VLA) models. — 原文提取
  > - \*\*Real-time chunking (RTC).\*\* Predict the next action chunk from a new observation while the robot executes the current one. — 原文提取
- x-square-robot/wall-oss-1.0-lite-robodojo Official Model Card · x-square-robot (Hugging Face) · [原站](https://huggingface.co/x-square-robot/wall-oss-1.0-lite-robodojo) · [主体档案：X Square Robot (自变量机器人)](../entities/companies/X%20Square%20Robot%20%28%E8%87%AA%E5%8F%98%E9%87%8F%E6%9C%BA%E5%99%A8%E4%BA%BA%29.md) · [本地原件](../../../raw/d7ed4c9dc936614059f4f218f49aa804231165228a958a932bcc7db93590c707)
  材料版本 `digest-material-d7ed4c9dc936614059f4f218f49aa804231165228a958a932bcc7db93590c707@1`；获取方式 `http_full_text`。
  > A Qwen3.5-based vision-language-action (VLA) policy from the \[WALL-OSS\](https://github.com/X-Square-Robot/wall-x) family, fine-tuned on RoboDojo demonstrations and released for evaluation on the \[RoboDojo benchmark\](https://robodojo-benchmark.com/LeaderBoard) through \[XPolicyLab\](https://github.com/XPolicyLab/XPolicyLab). — 原文提取
  > - Predicts a 32-step native end-effector-pose action chunk for the dual-arm   \`arx\_x5\` robot (EE poses + gripper states), refined by a residual refiner   (four chained passes). — 原文提取

归属与范围：已穿透 GlobeNewswire 2026-11-23 发布摘要（StreetInsider 与 GlobeNewswire 原链均遇 Cloudflare 403 反爬拦截，经 syndicated 新闻摘要 robotico.market 交叉验证）、自变量官方技术博客中英文全量正文与全部核心贡献者/参考文献（x2robot.com/en/blog/wall-oss-1 与 /blog/wall-oss-1）、WALL-API-1.0 开发者文档（wss://maas-api.x2robot.com/v1/vla/wallx）、GitHub 全部关联仓（wall-x、xr-harness、xinfer、x2real、policy-space）以及 Hugging Face 模型卡与 config.json 权重结构（wall-oss-1.0-lite-robodojo、wall-oss-1.0-lite-robodojo-base、wall-wm-2.0-robodojo），截至 2026-11-26 完成对「标题党？」的实时一手复核。

来源缺口：

- `unavailable`：原卡片链接 StreetInsider 与规范新闻稿来源 GlobeNewswire（2026-11-23）均触发 Cloudflare 403 反机器人验证未能直抓 HTML 原文；已穿透至自变量官方技术博客 x2robot.com/en/blog/wall-oss-1 与 /blog/wall-oss-1 全量原文、第三方新闻摘要 robotico.market 及全部官方 GitHub/Hugging Face/API 文档完成交叉补齐。 [线索](https://www.globenewswire.com/news-release/2026/11/23/3408046/0/en/x-square-robot-introduces-wall-oss-1-0-understand-more-act-better-a-native-foundation-model-for-the-physical-world.html)
- `not_disclosed`：官方博客与新闻通稿均未披露 WALL-OSS-1.0 旗舰模型的具体参数量（仅公开 Lite 为 4B、Nano 为 2B、WM-2.0 为 9B+Wan2.2）、总预训练与接管数据绝对小时数、WALL-API-1.0 商业化定价/配额 SLA，且截至 2026-11-26 旗舰、2B Nano、Gen 与 AR 模型权重尚未在 Hugging Face 或 wall-x 主分支开源释放。 [线索](https://huggingface.co/x-square-robot)

[返回赛道总览](../赛道总览.md#digest-19b2c53e3576aef8) · [返回导读索引](README.md) · [主体档案库](../entities/README.md)
