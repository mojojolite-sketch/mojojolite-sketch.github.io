---
title: "🚨 2)Tesla FSD V15 ,不仅仅是画质升级：从 3DGS 到生成式世界模型，Tesla 究竟在做什么？"
type: blog_digest
sector: "具身智能"
source: "@David_yc607（X 原创深度拆解 · 穿透核查 Tesla AI / 3DGS 一手披露）"
published_at: "2026-11-23"
raw_sha256: "a6b129b09caef4aebedcfbcde8c1a924bb8f040bac1dcc7bdba8bb8bb3879879"
material_version: "digest-material-a6b129b09caef4aebedcfbcde8c1a924bb8f040bac1dcc7bdba8bb8bb3879879@1"
origin_url: "https://x.com/David_yc607/status/2124806306762563629"
trigger_source: "X (@David_yc607)"
trigger_url: "https://x.com/David_yc607/status/2124806306762563629"
user_comments: "这篇文章好好"
status: "processed_with_gaps"
primary_topic: "模型与策略架构"
topic_confidence: 0.8826
---

<a id="digest-a6b129b09caef4ae"></a>
# 🚨 2)Tesla FSD V15 ,不仅仅是画质升级：从 3DGS 到生成式世界模型，Tesla 究竟在做什么？

2026-11-23 · @David\_yc607（X 原创深度拆解 · 穿透核查 Tesla AI / 3DGS 一手披露） · 有来源缺口

[本地原件归档](../../../raw/a6b129b09caef4aebedcfbcde8c1a924bb8f040bac1dcc7bdba8bb8bb3879879) · 固定材料版本 `digest-material-a6b129b09caef4aebedcfbcde8c1a924bb8f040bac1dcc7bdba8bb8bb3879879@1` · [一手原站](https://x.com/David_yc607/status/2124806306762563629)

> [!IMPORTANT]
> 用户关注点（TG）：这篇文章好好

## 针对性追查与回应

### 1. 口径与利益披露、以及为什么用户评价「这篇文章好好」

- 口径与利益披露：原件为 X 账号 `@David_yc607`（David Chang，主页简介 `In God we Trust!`，10,736 粉丝）于 2026-11-23 发布的原创中文技术评述（`https://x.com/David_yc607/status/2124806306762563629`），并非对单篇外部论文的 1:1 翻译；文中提及“长期从事自动驾驶和机器人研发”及自制 iPhone 3DGS 小样属作者个人自述，未附机构背书。上游核查覆盖三份一手原始材料：Elon Musk 于 2026-11-22 发布的 Reality View 技术说明（`https://x.com/elonmusk/status/2124458557525397780`）、Tesla AI 副总裁 Ashok Elluswamy 于 2025-10-24 发布的 ICCV 2025 演讲长文《Tesla's approach to Autonomy》（`https://x.com/aelluswamy/article/1981644831790379245`），以及 Bernhard Kerbl 等人发表于 SIGGRAPH 2023 的原始 3DGS 论文（`https://arxiv.org/abs/2308.04079`）。Elon Musk 与 Ashok Elluswamy 分别代表 Tesla 产品叙事与 AI 团队招聘口径（文末附 `tesla.com/AI`），Kerbl et al. 为 Inria 同行评审学术论文。
- ==直接回应「这篇文章好好」：作者在技术传播最容易混为一谈的节点上做对了三次关键切割，但正文漏引了 Musk 原帖已披露的车端算力与参数账本，并在历史车机渲染引擎表述上存在事实偏差==。
  1. 拒绝把视觉外观等同于底层实现：2026 年 11 月 FSD V15 推出车机实景画面（Reality View）后，外界普遍直觉将其等同于 Tesla 2025 年展示的 3D Gaussian Splatting（3DGS / GGS）。作者明确将 Generative 3DGS（重建）、Neural World Simulator（预测）、End-to-End Driving Model（行动）与 Reality View（实时视频呈现）拆成四套目标不同的系统，并判断两者不能直接画等号。
  2. 精准区分 Rendering 实时与 Reconstruction 实时：作者没有停留在“3DGS 渲染很快”的科普表层，而是抓住了自动驾驶沿直线前进导致基线视差不足、动态交通遮挡与传统逐场景迭代优化耗时过长的矛盾，解释 Tesla 为何转向神经网络前馈预测（Generative Reconstruction）。
  3. 守住 Perceptual Realism 与 Geometric / Physical Accuracy 的安全红线：生成模型可以依靠统计先验把货车遮挡后的路面补全为光滑道路，但现实遮挡后可能站着行人；视觉逼真不自动等于物理几何可靠。

---

### 2. Tesla 四套世界技术全貌还原与一手参数补全

综合 `@David_yc607` 的四分法梳理与本工作台穿透提取的三份一手文献、FSD v15.0.1（软件版本 2026.38.6.11，2026-11-21 起向早期 HW4 / AI4 车队推送）发行说明，各技术线的真实定位与参数口径对照如下：

| 技术模块 | 核心目标（Reconstruct / Predict / Act / Visualize） | 原 X 长文表述 | 本工作台一手核查与补全参数 |
| :--- | :--- | :--- | :--- |
| 传统 3DGS（Kerbl et al., SIGGRAPH 2023） | 从多视角静态图像重建 Radiance Field 并实时 Novel View Synthesis | 概括提及 1080p 实时新视角渲染，单场景重建需数分钟甚至更久 | ✅ 核查确认（`arXiv:2308.04079`）：以 SfM/COLMAP 稀疏点云初始化，优化各 Gaussian 的 Position、各向异性 Covariance、球谐 Color 与 Opacity，tile-based 光栅化可在 1080p 达到 >=30 fps 乃至 >=100 fps 渲染；Tesla 在 ICCV 2025 原文中指出传统 3DGS 优化耗时常达 10s of minutes |
| Generative Gaussian Splatting（GGS, ICCV 2025） | 从量产车相机视频前馈预测显式三维 Gaussian Scene，支持动态物体与联合训练 | 提及无需逐场景初始化与迭代优化，单次生成约 220 ms，可算术折算约 4.5 Hz 但不等于全系统更新率 | ✅ 核查确认（Ashok ICCV 2025）：原文确认 GGS 无需外部初始化、支持动态目标并与端到端模型联合训练，耗时约 220 ms；⚠️ 硬件平台与测试时算力口径未披露，无法直接视为车端部署频率 |
| Neural World Simulator（ICCV 2025） | 输入当前状态与候选动作，因果预测多视角未来传感器画面，用于闭环评测与 RL | 提及 6 分钟以上、8 路摄像头、24 fps 连续模拟，强调不能混同为 V15 帧率 | ✅ 核查确认（Ashok ICCV 2025）：通过调整 test-time compute，模型可实时生成超过 6 分钟的 8 路摄像头 24 fps 交互驾驶场景，并展示迁移至 Optimus 在 Gigafactory 内导航；同时披露端到端驾驶输入约 2 billion tokens（7 路相机 × 36 FPS × 5 Megapixels × 30 s 历史按 5×5 patch 切分 + 100 Hz 运动学 + 48 KHz 音频），车队日均等价 500 年驾驶数据 |
| End-to-End Driving + UVE（FSD v15.0.1 / 2026.38.6.11） | 利用升级版 Universal Vision Encoder（UVE）特征直接输出驾驶控制动作 | 提及 UVE 面向 FSD、Robotaxi 与 Optimus 共享使用，输出驾驶与视觉特征 | ✅ + ⚠️ 核查补全：Musk 2026-11-22 原帖披露驾驶动作由接入 UVE 特征的 3B 编码器模型输出；FSD v15.0.1（2026.38.6.11）发行说明宣称百万级互联网视频训练的共享视觉编码器带来 critical intervention rate（关键接管率）提升 25x，但官方未公开测试总里程、对比基线子版本及分母口径 |
| Reality View（FSD v15.0.1, November 2026） | 基于近期 UVE 特征实时生成无人机/俯视虚拟视角车载连续视频 | 仅定性判断其为基于 UVE 特征的条件生成式视频模型，未引用具体参数 | ✅ + ⚠️ 原文关键漏引补全（Musk `2124458557525397780`）：Reality View 实为车端缩小版条件均值流模型（conditional mean-flow model），从 3B 驾驶网络共享的 UVE 特征分支出一个独立约 1B（~1B）参数扩散模型，对上一帧加噪再按当前视觉条件去噪，每次生成 8 帧 @ 36 fps（UI 屏幕分辨率）视频块，仅占用 1/2 颗 AI4 TRIP 加速引擎，按 18 Hz UVE 帧率分摊 4 个周期运行；当前端到端存在显著滞后（实测约 ~0.5 s），Tesla 计划将新 UVE 特征交错注入扩散 Transformer（DiT）各层以削减约 35% 延迟 |

---

### 3. 原位核查与工程纠偏（✅ / ⚠️ / ❌）

- ✅ 为什么作者对「Reality View ≠ 3DGS」的架构直觉高度准确（本工作台核查）：对照 Elon Musk 的 Technical Explanation 原帖可见，Tesla 确实在 2025 年已拥有云端近似像素级世界模型（~pixel-perfect world model）用于合成数据生成，但量产车端 Reality View 落地时并没有选择先重建显式 Gaussian 椭球体再做 Splatting，而是直接以条件均值流 + 1B 扩散视频模型从 UVE 隐特征流式生成 8 帧 @ 36 fps 画面块。换言之，Reality View 在工程上更接近「条件视频世界模型蒸馏上车」，而非 3DGS 显式几何重建管线。
- ❌ 历史车机渲染引擎事实纠偏：「类似网页端轻量化可视化」不准确（本工作台核查）：作者在第一节括号内称 Tesla 过去没有使用 Unity 或其他引擎，而是用类似网页端写了一个预装三维素材的轻量化可视化。经核查固件逆向研究（greentheonly 对 2025.20 等版本的分析与公开披露），Tesla 历史 Autopilot/FSD 车机三维可视化长期运行在开源轻量级 3D 游戏引擎 Godot 之上，并在 AMD Ryzen MCU3 平台固件中打包过 Unreal Engine 二进制组件；直到 2026-11-21 推送的 FSD v15.0.1 Reality View，Tesla 才真正首次彻底弃用游戏引擎与预置 3D Mesh 资产。
- ⚠️ 3DGS 机制与「4.5 Hz」算术陷阱核查（本工作台核查）：传统 3DGS 对汽车前向行驶的难点如作者所述——小基线视差（small baseline）、动态刚体/行人运动（需 4DGS 扩展）、货车后盲区遮挡与逐场景 10s of minutes 优化开销；Tesla GGS 靠大量实车时序数据学到统计先验，才能把 Reconstruction 压缩至约 220 ms。但正如作者警示，1 / 0.22 ≈ 4.5 Hz 只是纯算术倒数，与车端 Reality View 实际运行的 18 Hz UVE 采样 / 4 周期流水线 / 36 fps 8 帧分块输出属两套完全不同的计算管线。
- ⚠️ UVE「FSD / Robotaxi / Optimus 三端共享」的具身迁移边界（本工作台推断）：对比本工作台具身智能已有研究（[GR00T 2](GR00T%202_%20World-Action%20Model%20for%20Physical%20AI%20and%20Agentic%20Robotics.md)、[Where Physical AI Is Heading](Where%20Physical%20AI%20Is%20Heading.md) 与 [Robot Policies：从 Imitation Learning 到 Token VLA](Robot%20Policies%EF%BC%9A%E4%BB%8E%20Imitation%20Learning%20%E5%88%B0%20Token%20VLA.md)），UVE 依托百万级互联网视频学到跨本体空间语义表征，能够像 Ashok 展示的 Neural World Simulator 一样迁移至 Optimus 导航；但汽车端到端模型仅输出转向与加减速 2 维控制 Token，而人形灵巧操作受制于单目人手追踪 25–31 mm 误差、1–14 mm 指尖重定向误差与 1–10 ms 刚性接触力控盲区。==共享前端 UVE 视觉编码器只能统一“看见世界”的语义底座，远不代表 FSD 驾驶策略权重能零成本解决 Optimus 手部接触操作问题==。
- ⚠️ 生成式视觉“脑补”在车端 UI 与驾驶决策间的隔离前提（本工作台推断）：Reality View 仅消耗 1/2 颗 AI4 TRIP 引擎，把原本 3B 驾驶网络前端特征分叉给用户可视化（含点击导航、路线箭头等交互）。只要 1B 扩散生成器严格停留在下游 UI 展示分支（只读 UVE 特征，不反向喂给 3B 驾驶决策头），生成的“视觉幻觉”（例如把被大货车挡住的路段脑补为空旷路面）就不会直接污染刹车与转向控制；一旦未来为了节省算力或做像素级世界模型规划而让生成画面反哺控制决策，缺少严格物理与几何约束的 Perceptual Realism 将直接放大长尾安全风险。

### 观点与可反驳条件

- ==观点==：==Tesla FSD v15（2026.38.6.11）的工程分水岭不在“车机画面像 GTA”，而在用共享 Universal Vision Encoder（UVE）把感知主干与下游分支解耦——3B 动作模型负责物理驾驶、1B 条件均值流扩散模型以 1/2 颗 AI4 TRIP 引擎在 18 Hz 节拍下分 4 周期流式合成 Reality View 视频块==；`@David_yc607` 的长文敏锐抓住了 Generative 3DGS、Neural World Simulator 与 Reality View 的职责边界，但车端当前落地的并非 2025 年展示的显式 3DGS，而是隐特征条件视频生成，且跨向 Optimus 仍受制于连续力控而非纯视觉表征。
- ==推翻条件==：
  1. 若 Tesla 工程师公开披露或固件逆向证实 FSD v15.0.1（2026.38.6.11）车端 Reality View 在 1B 扩散去噪前仍先显式重构三维 Gaussian 椭球场并执行 Splatting 栅格化，而非由 UVE 特征直接条件生成 8 帧 @ 36 fps 屏幕像素视频块，则本文关于“Reality View 属于条件视频生成而非 3DGS 显式渲染”的判断被推翻。
  2. 若 Tesla 在 2027 年上半年披露的 Optimus 灵巧手工业工位部署数据证明，仅靠与 FSD 共享同一套互联网视频预训练 UVE 视觉编码器加少量遥操微调（无需额外毫秒级触觉/力控传感器与物理接触专项模型），即可在紧密装配或线束插接任务中跑通 >=95% 连续良率且无 1–10 ms 接触过载损伤，则本文关于“UVE 共享视觉表征无法直接跨越手部力控瓶颈”的判断被推翻。

---

## 原文摘录与一手信源存证

> 早在 2025 年，Tesla 就公开展示了 Generative Gaussian Splatting（生成式高斯泼溅）和 Neural World Simulator（神经世界模拟器）。见下图
> — 原文摘录，文字段落 1；证据 `digest-material-a6b129b09caef4aebedcfbcde8c1a924bb8f040bac1dcc7bdba8bb8bb3879879-excerpt-1@2`

> 传统 3DGS 的“实时”，首先是 Rendering 实时，而不是必然能够 Reconstruction 实时。
> — 原文摘录，文字段落 2；证据 `digest-material-a6b129b09caef4aebedcfbcde8c1a924bb8f040bac1dcc7bdba8bb8bb3879879-excerpt-2@2`

> 但目前没有充分的公开资料证明，Tesla 的 Generative 3DGS、Neural World Simulator 和 Reality View 已经完全共享同一个三维世界表示，或者共用一整套相同的模型权重。
> — 原文摘录，文字段落 3；证据 `digest-material-a6b129b09caef4aebedcfbcde8c1a924bb8f040bac1dcc7bdba8bb8bb3879879-excerpt-3@2`

一手材料：

- Elon Musk on FSD v15 Reality View, Universal Vision Encoder & Conditional Mean-Flow Diffusion Architecture · Elon Musk (@elonmusk) / Tesla · [原站](https://x.com/elonmusk/status/2124458557525397780) · [主体档案：Elon Musk](../entities/people/Elon%20Musk.md) / [主体档案：Tesla](../entities/companies/Tesla.md) · [本地原件](../../../raw/36e2e2e676a9a17426de0627c6f341ce52ca197d499c786161828af061d11fec)
  材料版本 `digest-material-36e2e2e676a9a17426de0627c6f341ce52ca197d499c786161828af061d11fec@1`；获取方式 `fxtwitter_api`。
  > We’ve had a ~pixel-perfect world model since last year, which is critical for synthetic data generation. — 原文提取
  > The (much) smaller version of that in the car is a conditional mean-flow model, based on the recent sequence of Tesla Universal Vision Encoder features, which are the same ones that are plugged into the 3B encoder model that produces the driving actions. — 原文提取
- Tesla's approach to Autonomy (ICCV 2025 WDFM-AD Keynote Companion Article) · Ashok Elluswamy (@aelluswamy) / Tesla AI · [原站](https://x.com/aelluswamy/article/1981644831790379245) · [主体档案：Tesla](../entities/companies/Tesla.md) / [主体档案：Ashok Elluswamy](../entities/people/Ashok%20Elluswamy.md) · [本地原件](../../../raw/2a63360ad2b6d15608ba74d1241527e4b7a739002ce6534ee7cf8ecb2fd1c443)
  材料版本 `digest-material-2a63360ad2b6d15608ba74d1241527e4b7a739002ce6534ee7cf8ecb2fd1c443@1`；获取方式 `http_micromessenger`。
  > I had the pleasure of presenting some of the recent work on behalf of the @Tesla\_AI team at the International Conference of Computer Vision this week. — 原文提取
  > Such simulation can be used to validate newer driving models against historical d. — 原文提取
- 3D Gaussian Splatting for Real-Time Radiance Field Rendering (SIGGRAPH 2023) · Inria (GraphDeco) · Bernhard Kerbl et al. · [原站](https://arxiv.org/abs/2308.04079) · [主体档案：Bernhard Kerbl](../entities/people/Bernhard%20Kerbl.md) / [主体档案：Inria](../entities/labs/Inria.md) · [本地原件](../../../raw/48882a8a2030ded10937b2aea534536f461829d6518b281d3afb2adb9787b611)
  材料版本 `digest-material-48882a8a2030ded10937b2aea534536f461829d6518b281d3afb2adb9787b611@1`；获取方式 `http_full_text`。
  > Abstract:Radiance Field methods have recently revolutionized novel-view synthesis of scenes captured with multiple photos or videos. — 原文提取
  > arXivLabs is a framework that allows collaborators to develop and share new arXiv features directly on our website. — 原文提取

归属与范围：完成 @David\_yc607 原创 X 长文《Tesla FSD V15 ,不仅仅是画质升级：从 3DGS 到生成式世界模型，Tesla 究竟在做什么？》的深度核查与一级信源建档：（1）如实将该长文定性为 @David\_yc607 原创技术评述并保持 display\_source / display\_url / 正文开篇完全一致，同时穿透抓取并存证其引用的全部三份一手材料——Elon Musk 2026-11-22 X 原帖（status/2124458557525397780）、Ashok Elluswamy 2025-10-24 ICCV 2025 长文（article/1981644831790379245）及 Kerbl et al. SIGGRAPH 2023 3DGS 论文（arXiv:2308.04079），配齐 Elon Musk、Tesla、Ashok Elluswamy、Bernhard Kerbl 与 Inria 账户/机构级入口及本体关系；（2）正面回应「这篇文章好好」：肯定其准确切分 Generative 3DGS（重建）、Neural World Simulator（预测）、End-to-End Driving（行动）与 Reality View（视觉呈现），并抓住 Rendering 实时 ≠ Reconstruction 实时与感知真实感 ≠ 几何准确性的核心边界；（3）补全原文遗漏的 Musk 一手车端算力与参数账本（云端 ~pixel-perfect 世界模型、车端 1B 条件均值流扩散模型、3B 驾驶模型共享 UVE、8 帧 @ 36 fps、1/2 颗 AI4 TRIP 引擎 18 Hz 分 4 周期、DiT 层交错降延迟 ~35%），并纠偏历史车机使用 Godot / Unreal 而非「类似网页端可视化」的事实偏差。

来源缺口：

- `not_disclosed`：Tesla 未公开 Generative Gaussian Splatting（~220 ms）与 Neural World Simulator 的完整网络结构、损失函数及权重共享比例，亦未披露 FSD v15.0.1（2026.38.6.11）宣称关键接管率提升 25x 的测试总里程、对比基准子版本及 Reality View 车端实测几何一致性/幻觉率基准。
- `unavailable`：原帖作者 @David\_yc607（David Chang）自述的自动驾驶/机器人研发履历、自制 iPhone 3DGS 小样工程细节，以及文首提及的「第一篇Post」及末尾独立链接 https://x.com/i/article/2124785181194391552（需登录态且返回空壳）缺乏可独立核查的一手记录。

[返回赛道总览](../赛道总览.md#digest-a6b129b09caef4ae) · [返回导读索引](README.md) · [主体档案库](../entities/README.md)
