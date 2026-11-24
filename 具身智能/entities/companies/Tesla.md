# Tesla

[返回主体档案库](../README.md) · [返回赛道总览](../../赛道总览.md) · [单篇导读索引](../../blogs/README.md)

- 主体类别：🏢 公司与产业主体 (Companies)
- 核心定位与说明：全球电动汽车、自动驾驶（FSD / Robotaxi）与人形机器人（Optimus）公司；2026 年 11 月推出 FSD v15.0.1（2026.38.6.11），以共享 Universal Vision Encoder（UVE）统一驾驶与视觉呈现主干。
- 关联账号与官方入口：
  - 公司官网（Tesla）：[机构／作者主页](https://www.tesla.com/) · 登记对象 `digest-publisher-596d5f8ba4114e6c6c07da9e` — 全球电动汽车、自动驾驶（FSD / Robotaxi）与人形机器人（Optimus）公司；2026 年 11 月推出 FSD v15.0.1（2026.38.6.11），以共享 Universal Vision Encoder（UVE）统一驾驶与视觉呈现主干。

## 1. 核心研究问题与待核查争议（Questions & Open Debates）

### 🔍 待核查缺口与证据边界（Open Gaps）

- `not_disclosed`：Tesla 未公开 Generative Gaussian Splatting（~220 ms）与 Neural World Simulator 的完整网络结构、损失函数及权重共享比例，亦未披露 FSD v15.0.1（2026.38.6.11）宣称关键接管率提升 25x 的测试总里程、对比基准子版本及 Reality View 车端实测几何一致性/幻觉率基准。（关联：[《🚨 2)Tesla FSD V15 ,不仅仅是画质升级：从 3DGS 到生成式世界模型，Tesla 究竟在做什么？》](../../blogs/%F0%9F%9A%A8%202%29Tesla%20FSD%20V15%20%2C%E4%B8%8D%E4%BB%85%E4%BB%85%E6%98%AF%E7%94%BB%E8%B4%A8%E5%8D%87%E7%BA%A7%EF%BC%9A%E4%BB%8E%203DGS%20%E5%88%B0%E7%94%9F%E6%88%90%E5%BC%8F%E4%B8%96%E7%95%8C%E6%A8%A1%E5%9E%8B%EF%BC%8CTesla%20%E7%A9%B6%E7%AB%9F%E5%9C%A8%E5%81%9A%E4%BB%80%E4%B9%88%EF%BC%9F.md)）
- `unavailable`：原帖作者 @David\_yc607（David Chang）自述的自动驾驶/机器人研发履历、自制 iPhone 3DGS 小样工程细节，以及文首提及的「第一篇Post」及末尾独立链接 https://x.com/i/article/2124785181194391552（需登录态且返回空壳）缺乏可独立核查的一手记录。（关联：[《🚨 2)Tesla FSD V15 ,不仅仅是画质升级：从 3DGS 到生成式世界模型，Tesla 究竟在做什么？》](../../blogs/%F0%9F%9A%A8%202%29Tesla%20FSD%20V15%20%2C%E4%B8%8D%E4%BB%85%E4%BB%85%E6%98%AF%E7%94%BB%E8%B4%A8%E5%8D%87%E7%BA%A7%EF%BC%9A%E4%BB%8E%203DGS%20%E5%88%B0%E7%94%9F%E6%88%90%E5%BC%8F%E4%B8%96%E7%95%8C%E6%A8%A1%E5%9E%8B%EF%BC%8CTesla%20%E7%A9%B6%E7%AB%9F%E5%9C%A8%E5%81%9A%E4%BB%80%E4%B9%88%EF%BC%9F.md)）

- [《🚨 2)Tesla FSD V15 ,不仅仅是画质升级：从 3DGS 到生成式世界模型，Tesla 究竟在做什么？》](../../blogs/%F0%9F%9A%A8%202%29Tesla%20FSD%20V15%20%2C%E4%B8%8D%E4%BB%85%E4%BB%85%E6%98%AF%E7%94%BB%E8%B4%A8%E5%8D%87%E7%BA%A7%EF%BC%9A%E4%BB%8E%203DGS%20%E5%88%B0%E7%94%9F%E6%88%90%E5%BC%8F%E4%B8%96%E7%95%8C%E6%A8%A1%E5%9E%8B%EF%BC%8CTesla%20%E7%A9%B6%E7%AB%9F%E5%9C%A8%E5%81%9A%E4%BB%80%E4%B9%88%EF%BC%9F.md)：完成 @David\_yc607 原创 X 长文《Tesla FSD V15 ,不仅仅是画质升级：从 3DGS 到生成式世界模型，Tesla 究竟在做什么？》的深度核查与一级信源建档：（1）如实将该长文定性为 @David\_yc607 原创技术评述并保持 display\_source / display\_url / 正文开篇完全一致，同时穿透抓取并存证其引用的全部三份一手材料——Elon Musk 2026-11-22 X 原帖（status/2124458557525397780）、Ashok Elluswamy 2025-10-24 ICCV 2025 长文（article/1981644831790379245）及 Kerbl et al. SIGGRAPH 2023 3DGS 论文（arXiv:2308.04079），配齐 Elon Musk、Tesla、Ashok Elluswamy、Bernhard Kerbl 与 Inria 账户/机构级入口及本体关系；（2）正面回应「这篇文章好好」：肯定其准确切分 Generative 3DGS（重建）、Neural World Simulator（预测）、End-to-End Driving（行动）与 Reality View（视觉呈现），并抓住 Rendering 实时 ≠ Reconstruction 实时与感知真实感 ≠ 几何准确性的核心边界；（3）补全原文遗漏的 Musk 一手车端算力与参数账本（云端 ~pixel-perfect 世界模型、车端 1B 条件均值流扩散模型、3B 驾驶模型共享 UVE、8 帧 @ 36 fps、1/2 颗 AI4 TRIP 引擎 18 Hz 分 4 周期、DiT 层交错降延迟 ~35%），并纠偏历史车机使用 Godot / Unreal 而非「类似网页端可视化」的事实偏差。

## 2. 阅读笔记与原文 Highlight（Reading Highlights & Marginalia）

### 🖍️ 摘录与批注：《🚨 2)Tesla FSD V15 ,不仅仅是画质升级：从 3DGS 到生成…》（1 条）

关联文章：[《🚨 2)Tesla FSD V15 ,不仅仅是画质升级：从 3DGS 到生成式世界模型，Tesla 究竟在做什么？》](../../blogs/%F0%9F%9A%A8%202%29Tesla%20FSD%20V15%20%2C%E4%B8%8D%E4%BB%85%E4%BB%85%E6%98%AF%E7%94%BB%E8%B4%A8%E5%8D%87%E7%BA%A7%EF%BC%9A%E4%BB%8E%203DGS%20%E5%88%B0%E7%94%9F%E6%88%90%E5%BC%8F%E4%B8%96%E7%95%8C%E6%A8%A1%E5%9E%8B%EF%BC%8CTesla%20%E7%A9%B6%E7%AB%9F%E5%9C%A8%E5%81%9A%E4%BB%80%E4%B9%88%EF%BC%9F.md)

- 这篇文章好好

> 导读核心结论：口径与利益披露：原件为 X 账号 @David\_yc607（David Chang，主页简介 In God we Trust!，10,736 粉丝）于 2026-11-23 发布的原创中文技术评述（https://x.com/David\_yc607/status/2124806306762563629），并非对单篇外部论文的 1:1 翻译；文中提及“长期从事自动驾驶和机器人研发”及自制 iPhone 3DGS 小样属作者个人自述，未附机构背书。上游核查覆盖三份一手原始材料：E…


## 3. 收录文章与一手材料（Ingested Articles & Primary Sources）

### [🚨 2)Tesla FSD V15 ,不仅仅是画质升级：从 3DGS 到生成式世界模型，Tesla 究竟在做什么？](../../blogs/%F0%9F%9A%A8%202%29Tesla%20FSD%20V15%20%2C%E4%B8%8D%E4%BB%85%E4%BB%85%E6%98%AF%E7%94%BB%E8%B4%A8%E5%8D%87%E7%BA%A7%EF%BC%9A%E4%BB%8E%203DGS%20%E5%88%B0%E7%94%9F%E6%88%90%E5%BC%8F%E4%B8%96%E7%95%8C%E6%A8%A1%E5%9E%8B%EF%BC%8CTesla%20%E7%A9%B6%E7%AB%9F%E5%9C%A8%E5%81%9A%E4%BB%80%E4%B9%88%EF%BC%9F.md)

2026-11-23 · 来源：@David\_yc607（X 原创深度拆解 · 穿透核查 Tesla AI / 3DGS 一手披露） · 状态：有来源缺口

[单篇导读（blogs/）](../../blogs/%F0%9F%9A%A8%202%29Tesla%20FSD%20V15%20%2C%E4%B8%8D%E4%BB%85%E4%BB%85%E6%98%AF%E7%94%BB%E8%B4%A8%E5%8D%87%E7%BA%A7%EF%BC%9A%E4%BB%8E%203DGS%20%E5%88%B0%E7%94%9F%E6%88%90%E5%BC%8F%E4%B8%96%E7%95%8C%E6%A8%A1%E5%9E%8B%EF%BC%8CTesla%20%E7%A9%B6%E7%AB%9F%E5%9C%A8%E5%81%9A%E4%BB%80%E4%B9%88%EF%BC%9F.md) · [微信原件](../../../../raw/a6b129b09caef4aebedcfbcde8c1a924bb8f040bac1dcc7bdba8bb8bb3879879) · 固定版本 `digest-material-a6b129b09caef4aebedcfbcde8c1a924bb8f040bac1dcc7bdba8bb8bb3879879@1`

> 早在 2025 年，Tesla 就公开展示了 Generative Gaussian Splatting（生成式高斯泼溅）和 Neural World Simulator（神经世界模拟器）。见下图

> 传统 3DGS 的“实时”，首先是 Rendering 实时，而不是必然能够 Reconstruction 实时。

关联一手材料：

- Elon Musk on FSD v15 Reality View, Universal Vision Encoder & Conditional Mean-Flow Diffusion Architecture（Elon Musk (@elonmusk) / Tesla）· [原站](https://x.com/elonmusk/status/2124458557525397780) · [本地原件](../../../../raw/36e2e2e676a9a17426de0627c6f341ce52ca197d499c786161828af061d11fec) · 版本 `digest-material-36e2e2e676a9a17426de0627c6f341ce52ca197d499c786161828af061d11fec@1`
  > We’ve had a ~pixel-perfect world model since last year, which is critical for synthetic data generation. — 原文提取
- Tesla's approach to Autonomy (ICCV 2025 WDFM-AD Keynote Companion Article)（Ashok Elluswamy (@aelluswamy) / Tesla AI）· [原站](https://x.com/aelluswamy/article/1981644831790379245) · [本地原件](../../../../raw/2a63360ad2b6d15608ba74d1241527e4b7a739002ce6534ee7cf8ecb2fd1c443) · 版本 `digest-material-2a63360ad2b6d15608ba74d1241527e4b7a739002ce6534ee7cf8ecb2fd1c443@1`
  > I had the pleasure of presenting some of the recent work on behalf of the @Tesla\_AI team at the International Conference of Computer Vision this week. — 原文提取


## 4. 关联实体网络（Verified Entity Ontology）

- ← [Ashok Elluswamy](../people/Ashok%20Elluswamy.md) · 任职 / 隶属 · VP of AI & Autopilot Software（rule_verified/verified）
- ← [Elon Musk](../people/Elon%20Musk.md) · 任职 / 隶属 · CEO（rule_verified/verified）
