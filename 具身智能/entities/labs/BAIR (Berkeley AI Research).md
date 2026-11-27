# BAIR (Berkeley AI Research)

[返回主体档案库](../README.md) · [返回赛道总览](../../赛道总览.md) · [单篇导读索引](../../blogs/README.md)

- 主体类别：🏛️ 实验室、高校与机构平台 (Labs & Institutions)
- 核心定位与说明：与 arXiv 论文同源归属 UC Berkeley BAIR。
- 关联账号与官方入口：
  - Official Research Lab（BAIR (Berkeley AI Research)）：[机构／作者主页](https://bair.berkeley.edu/) · 登记对象 `digest-publisher-9d9768d843fcee3c11b4f1fd` — 与 arXiv 论文同源归属 UC Berkeley BAIR。

## 1. 核心研究问题与待核查争议（Questions & Open Debates）

### 🔍 待核查缺口与证据边界（Open Gaps）

- `unavailable`：原课程授课讲师、所属高校课程编号及英文原版 PPT / 课堂录音 URL 未在微信转载稿（human five）中披露，公网检索亦未定位到可直采的原始课程页面；文中提到的 GPT-5 / GPT-5.4 多机器人协作演示与 PPT 中 Gemini Robotics 2 作为 Planner 的案例缺完整课程视频与实验配置日志。（关联：[《Robot Policies：从 Imitation Learning 到 Token VLA》](../../blogs/Robot%20Policies%EF%BC%9A%E4%BB%8E%20Imitation%20Learning%20%E5%88%B0%20Token%20VLA.md)）
- `not_disclosed`：微信正文多处以定性示例替代原始论文量化基准（如未披露 ACT 实际动作块长 K=100、OpenVLA-OFT 在 LIBERO 76.5% 至 97.1% 与 26 倍吞吐提升、FAST 5 倍训练加速与 10k 小时扩展曲线），且原稿因 HTML 转写丢失全部行内 LaTeX 公式。（关联：[《Robot Policies：从 Imitation Learning 到 Token VLA》](../../blogs/Robot%20Policies%EF%BC%9A%E4%BB%8E%20Imitation%20Learning%20%E5%88%B0%20Token%20VLA.md)）
- `unavailable`：原巡检短链 https://bair.berkeley.edu/blog/2026/11/09/corl/ 返回 HTTP 404，已定位替换为实际官方博客 https://bair.berkeley.edu/blog/2026/11/09/bair-at-corl-2026/；CoRL 官网 \`/program/awards\` 页静态提取未加载奖项列表，Best Conference Paper Award 由会议获奖公告与 SuperMimic 相关报道互证。 [线索](https://bair.berkeley.edu/blog/2026/11/09/bair-at-corl-2026/)（关联：[《BAIR at CoRL 2026：33 篇主会论文、10 项 Oral/Spotlight 与最佳论文奖全览》](../../blogs/BAIR%20at%20CoRL%202026%EF%BC%9A33%20%E7%AF%87%E4%B8%BB%E4%BC%9A%E8%AE%BA%E6%96%87%E3%80%8110%20%E9%A1%B9%20Oral_Spotlight%20%E4%B8%8E%E6%9C%80%E4%BD%B3%E8%AE%BA%E6%96%87%E5%A5%96%E5%85%A8%E8%A7%88.md)）
- `not_disclosed`：BAIR 日程总览截至 2026-11-08 统计范围不含主会 Demo 赛道，且未列出各篇论文的原始定量基准表，具体算法消融与真机成功率需下钻对应单篇论文导读。 [线索](https://bair.berkeley.edu/blog/2026/11/09/bair-at-corl-2026/)（关联：[《BAIR at CoRL 2026：33 篇主会论文、10 项 Oral/Spotlight 与最佳论文奖全览》](../../blogs/BAIR%20at%20CoRL%202026%EF%BC%9A33%20%E7%AF%87%E4%B8%BB%E4%BC%9A%E8%AE%BA%E6%96%87%E3%80%8110%20%E9%A1%B9%20Oral_Spotlight%20%E4%B8%8E%E6%9C%80%E4%BD%B3%E8%AE%BA%E6%96%87%E5%A5%96%E5%85%A8%E8%A7%88.md)）
- `pending_verification`：129,514 段动作（BONES-SEED 264.56 小时）上对比 SONIC 的 0 失败（vs 179 失败）测试均为两者的训练集动作且锁定了确定性仿真环境（摩擦 1.0、无观测噪声与域随机化），仅证明动作库记忆覆盖能力而非未见动作泛化能力；另官方尚未开放可复现的完整训练代码仓与多随机种子真机连续稳定性日志。 [线索](https://arxiv.org/abs/2610.28480)（关联：[《SuperMimic（BAIR / CoRL 2026 最佳论文）：单个可微世界模型将人形全身控制算力降低超 1,000 倍》](../../blogs/SuperMimic%EF%BC%88BAIR%20_%20CoRL%202026%20%E6%9C%80%E4%BD%B3%E8%AE%BA%E6%96%87%EF%BC%89%EF%BC%9A%E5%8D%95%E4%B8%AA%E5%8F%AF%E5%BE%AE%E4%B8%96%E7%95%8C%E6%A8%A1%E5%9E%8B%E5%B0%86%E4%BA%BA%E5%BD%A2%E5%85%A8%E8%BA%AB%E6%8E%A7%E5%88%B6%E7%AE%97%E5%8A%9B%E9%99%8D%E4%BD%8E%E8%B6%85%201%2C000%20%E5%80%8D.md)）
- `unverified_claim`：实体关系入库跳过 (Qiayuan Liao --affiliated\_with--\> BAIR)：谓词 'affiliated\_with' 不允许 from 实体类型 'company'（仅允许 \['person', 'organization'\]）（关联：[《SuperMimic（BAIR / CoRL 2026 最佳论文）：单个可微世界模型将人形全身控制算力降低超 1,000 倍》](../../blogs/SuperMimic%EF%BC%88BAIR%20_%20CoRL%202026%20%E6%9C%80%E4%BD%B3%E8%AE%BA%E6%96%87%EF%BC%89%EF%BC%9A%E5%8D%95%E4%B8%AA%E5%8F%AF%E5%BE%AE%E4%B8%96%E7%95%8C%E6%A8%A1%E5%9E%8B%E5%B0%86%E4%BA%BA%E5%BD%A2%E5%85%A8%E8%BA%AB%E6%8E%A7%E5%88%B6%E7%AE%97%E5%8A%9B%E9%99%8D%E4%BD%8E%E8%B6%85%201%2C000%20%E5%80%8D.md)）
- `unverified_claim`：实体关系入库跳过 (BAIR --produces--\> SuperMimic)：谓词 'produces' 不允许 to 实体类型 'company'（仅允许 \['product'\]）（关联：[《SuperMimic（BAIR / CoRL 2026 最佳论文）：单个可微世界模型将人形全身控制算力降低超 1,000 倍》](../../blogs/SuperMimic%EF%BC%88BAIR%20_%20CoRL%202026%20%E6%9C%80%E4%BD%B3%E8%AE%BA%E6%96%87%EF%BC%89%EF%BC%9A%E5%8D%95%E4%B8%AA%E5%8F%AF%E5%BE%AE%E4%B8%96%E7%95%8C%E6%A8%A1%E5%9E%8B%E5%B0%86%E4%BA%BA%E5%BD%A2%E5%85%A8%E8%BA%AB%E6%8E%A7%E5%88%B6%E7%AE%97%E5%8A%9B%E9%99%8D%E4%BD%8E%E8%B6%85%201%2C000%20%E5%80%8D.md)）
- `unavailable`：VideoMimic项目主页（videomimic.net）展示的多地形高分辨率真机测试原片及分场景完整试错日志未作结构化开放归档，保留原始视频素材缺口。（关联：[《Human Data EP04—Video：VideoMimic》](../../blogs/Human%20Data%20EP04%E2%80%94Video%EF%BC%9AVideoMimic.md)）
- `pending_verification`：论文（arXiv:2505.03729v5）未报告Unitree G1真机在非结构化楼梯、座椅与障碍物上的百次级量化成功率统计，且步态存在高频微幅碎步，真机长期零样本迁移稳定性尚未获第三方实验室独立复测。（关联：[《Human Data EP04—Video：VideoMimic》](../../blogs/Human%20Data%20EP04%E2%80%94Video%EF%BC%9AVideoMimic.md)）

- [《Robot Policies：从 Imitation Learning 到 Token VLA》](../../blogs/Robot%20Policies%EF%BC%9A%E4%BB%8E%20Imitation%20Learning%20%E5%88%B0%20Token%20VLA.md)：触发线索为微信公众号 human five 于 2026-11-24 发布的《Robot Policies：从 Imitation Learning 到 Token VLA》（未披露原英文课程编号、讲师及原始 PPT/录音链接，且因微信 HTML 转写丢失行内 LaTeX 数学符号）。本工作台穿透核查并归档讲授脉络中 8 篇一手核心论文（ACT arXiv:2304.13705、DAgger arXiv:1011.0686、HG-DAgger arXiv:1810.02890、AMP arXiv:2104.02180、RT-2 arXiv:2307.15818、FAST arXiv:2501.09747、OpenVLA-OFT arXiv:2502.19645、MolmoAct arXiv:2508.07917），为各发布机构与代码仓补齐主页级 publisher\_accounts，补全缺失数学公式并联动站内 VLA 简史、RT-H、π0.5、MDP 五步闭环与 VLA 内部物理表征等已有导读；未公开的原始课堂录音/PPT 及定性省略的超参实验表保留规范缺口。
- [《BAIR at CoRL 2026：33 篇主会论文、10 项 Oral/Spotlight 与最佳论文奖全览》](../../blogs/BAIR%20at%20CoRL%202026%EF%BC%9A33%20%E7%AF%87%E4%B8%BB%E4%BC%9A%E8%AE%BA%E6%96%87%E3%80%8110%20%E9%A1%B9%20Oral_Spotlight%20%E4%B8%8E%E6%9C%80%E4%BD%B3%E8%AE%BA%E6%96%87%E5%A5%96%E5%85%A8%E8%A7%88.md)：已纠正原巡检 404 链接并抓取 BAIR 官方博客全文（bair.berkeley.edu/blog/2026/11/09/bair-at-corl-2026/）与 CoRL 2026 官方 Early Career Keynote 页面（corl.org/program/early-career-keynotes）；逐篇核对 33 篇主会论文（周一 10 篇、周二 11 篇、周三 12 篇）、3 篇 Oral（FPO++、EgoScale、SuperMimic）、7 篇 Spotlight（MEM、Diagnosing Compositional Generalization、Playful Agentic Robot Learning、GaP、LadderMan、ResSafe、TANGO）与 4 篇 LBR 海报及周四 Workshop 布局，揭示 BAIR 论文与 NVIDIA GEAR、Physical Intelligence、Amazon FAR 的高比例联合署名结构。
- [《SuperMimic（BAIR / CoRL 2026 最佳论文）：单个可微世界模型将人形全身控制算力降低超 1,000 倍》](../../blogs/SuperMimic%EF%BC%88BAIR%20_%20CoRL%202026%20%E6%9C%80%E4%BD%B3%E8%AE%BA%E6%96%87%EF%BC%89%EF%BC%9A%E5%8D%95%E4%B8%AA%E5%8F%AF%E5%BE%AE%E4%B8%96%E7%95%8C%E6%A8%A1%E5%9E%8B%E5%B0%86%E4%BA%BA%E5%BD%A2%E5%85%A8%E8%BA%AB%E6%8E%A7%E5%88%B6%E7%AE%97%E5%8A%9B%E9%99%8D%E4%BD%8E%E8%B6%85%201%2C000%20%E5%80%8D.md)：已抓取并归档 SuperMimic 19 页 arXiv:2610.28480v3 论文 PDF 全文及官方项目页 supermimic.github.io；穿透核查 SONIC（128 张 L40 GPU 训练 168 小时、约 21,000 GPU-h、611 小时数据）与 SuperMimic（1 张 H100 训练 3 小时超越 0.90 归一化回报，2 张 H100 训练 9.8 小时在 129,514 段 BONES-SEED 264.56 小时动作实现 0 失败）的硬件与数据口径折算，拆解 0.007–0.011 动力学误差稳定性、\>10 倍至 62 倍想象吞吐加速与 ~64 倍步数降幅，并标注仅平地无地形物体交互、129,514 片段仅测训练集覆盖率与省略外力冲击扰动等边界。
- [《Human Data EP04—Video：VideoMimic》](../../blogs/Human%20Data%20EP04%E2%80%94Video%EF%BC%9AVideoMimic.md)：完成来源核查与一手PDF精读核对：VideoMimic（arXiv:2505.03729v5，CoRL 2025 Best Student Paper，项目页 videomimic.net 验证）证实了基于MonST3R/MegaSaM+NKSR的real-to-sim-to-real框架可行性（SLOPER4D WA-MPJPE 112.13），但论文Table 6与Fig 6实证揭示其全集仅123段自拍+10段LaFAN（90%/10%配比），且剥离Stage 1 MoCap预训练后成功率剧降至约0.1，访谈所述视频替代动捕存在明确工程前提；缺口留存真机量化统计与第三方复现。

## 2. 收录文章与一手材料（Ingested Articles & Primary Sources）

### [Robot Policies：从 Imitation Learning 到 Token VLA](../../blogs/Robot%20Policies%EF%BC%9A%E4%BB%8E%20Imitation%20Learning%20%E5%88%B0%20Token%20VLA.md)

2026-11-24 · 来源：human five（Physical AI 课程实录整理 · 穿透 ACT / DAgger / RT-2 / FAST / OpenVLA-OFT / MolmoAct 八篇原论文） · 状态：有来源缺口

[单篇导读（blogs/）](../../blogs/Robot%20Policies%EF%BC%9A%E4%BB%8E%20Imitation%20Learning%20%E5%88%B0%20Token%20VLA.md) · [微信原件](../../../../raw/67f2fa935195a16e5c94011ab4725501f78d42d6438377a308a1e67019492a70) · 固定版本 `digest-material-67f2fa935195a16e5c94011ab4725501f78d42d6438377a308a1e67019492a70@1`

> 今天我想介绍一下 Physical AI，主要讨论如何将你们已经学过的 Vision-Language Model（VLM）、Reinforcement Learning（RL）等技术与机器人结合起来，以及这些技术究竟是如何控制机器人的。

> Policy 输出目标 Action 的频率，通常远低于底层 Controller 实际运行的频率。

关联一手材料：

- AMP: Adversarial Motion Priors for Stylized Physics-Based Character Control（BAIR）· [原站](https://arxiv.org/abs/2104.02180) · [本地原件](../../../../raw/d0cbed5110a8e3439af506e75899e408ab84d85917cce544add880dc93015d57) · 版本 `digest-material-d0cbed5110a8e3439af506e75899e408ab84d85917cce544add880dc93015d57@1`
  > Abstract:Synthesizing graceful and life-like behaviors for physically simulated characters has been a fundamental challenge in computer animation. — 原文提取

### [BAIR at CoRL 2026：33 篇主会论文、10 项 Oral/Spotlight 与最佳论文奖全览](../../blogs/BAIR%20at%20CoRL%202026%EF%BC%9A33%20%E7%AF%87%E4%B8%BB%E4%BC%9A%E8%AE%BA%E6%96%87%E3%80%8110%20%E9%A1%B9%20Oral_Spotlight%20%E4%B8%8E%E6%9C%80%E4%BD%B3%E8%AE%BA%E6%96%87%E5%A5%96%E5%85%A8%E8%A7%88.md)

2026-11-09 · 来源：BAIR (UC Berkeley) · CoRL 2026 · 状态：有来源缺口

[单篇导读（blogs/）](../../blogs/BAIR%20at%20CoRL%202026%EF%BC%9A33%20%E7%AF%87%E4%B8%BB%E4%BC%9A%E8%AE%BA%E6%96%87%E3%80%8110%20%E9%A1%B9%20Oral_Spotlight%20%E4%B8%8E%E6%9C%80%E4%BD%B3%E8%AE%BA%E6%96%87%E5%A5%96%E5%85%A8%E8%A7%88.md) · [微信原件](../../../../raw/deabeaa6585d5c7b7c628e093dbdb1940ead91d5a8456c0bed39906f87b92c4f) · 固定版本 `digest-material-deabeaa6585d5c7b7c628e093dbdb1940ead91d5a8456c0bed39906f87b92c4f@1`

> 【信源巡检核心摘要】 伯克利人工智能研究院（BAIR）于 2026 年 11 月 9 日发布 CoRL 2026（奥斯汀）研究总览：共入选 33 篇主会论文、10 项高光报告（3 篇 Oral 与 7 篇 Spotlight）及 4 篇 Late-Breaking Results 海报；包含 Negar Mehr 教授的 Early Career Keynote，以及斩获大会最佳论文奖（Best Conference Paper Award）的人形全身控制研究 SuperMimic。

关联一手材料：

- BAIR at CoRL 2026（BAIR (UC Berkeley)）· [原站](https://bair.berkeley.edu/blog/2026/11/09/bair-at-corl-2026/) · [本地原件](../../../../raw/80bdccc6a9e25ff613f8376d0fde5f9f83c7731e7afb5b945459032d28e45281) · 版本 `digest-material-80bdccc6a9e25ff613f8376d0fde5f9f83c7731e7afb5b945459032d28e45281@1`
  > The Conference on Robot Learning (CoRL) takes place November 9–12, 2026, in Austin, Texas. — 原文提取

### [SuperMimic（BAIR / CoRL 2026 最佳论文）：单个可微世界模型将人形全身控制算力降低超 1,000 倍](../../blogs/SuperMimic%EF%BC%88BAIR%20_%20CoRL%202026%20%E6%9C%80%E4%BD%B3%E8%AE%BA%E6%96%87%EF%BC%89%EF%BC%9A%E5%8D%95%E4%B8%AA%E5%8F%AF%E5%BE%AE%E4%B8%96%E7%95%8C%E6%A8%A1%E5%9E%8B%E5%B0%86%E4%BA%BA%E5%BD%A2%E5%85%A8%E8%BA%AB%E6%8E%A7%E5%88%B6%E7%AE%97%E5%8A%9B%E9%99%8D%E4%BD%8E%E8%B6%85%201%2C000%20%E5%80%8D.md)

2026-10-20 · 来源：BAIR (UC Berkeley) · SuperMimic (arXiv:2610.28480) · 状态：有来源缺口

[单篇导读（blogs/）](../../blogs/SuperMimic%EF%BC%88BAIR%20_%20CoRL%202026%20%E6%9C%80%E4%BD%B3%E8%AE%BA%E6%96%87%EF%BC%89%EF%BC%9A%E5%8D%95%E4%B8%AA%E5%8F%AF%E5%BE%AE%E4%B8%96%E7%95%8C%E6%A8%A1%E5%9E%8B%E5%B0%86%E4%BA%BA%E5%BD%A2%E5%85%A8%E8%BA%AB%E6%8E%A7%E5%88%B6%E7%AE%97%E5%8A%9B%E9%99%8D%E4%BD%8E%E8%B6%85%201%2C000%20%E5%80%8D.md) · [微信原件](../../../../raw/86303046c579baa2c856313033eb30cbc922926d21f7b38de72fcc37b8d75207) · 固定版本 `digest-material-86303046c579baa2c856313033eb30cbc922926d21f7b38de72fcc37b8d75207@1`

> SuperMimic（BAIR / CoRL 2026 最佳论文）：单个可微世界模型将人形全身控制算力降低超 1,000 倍 一手发布主体：BAIR 原始链接：https://arxiv.org/abs/2610.28480 发布日期：2026-10-20 归属赛道：具身智能 【信源巡检核心摘要】 BAIR（Qiayuan Liao、Pieter Abbeel、Koushil Sreenath 等）提出基于单个可微世界模型的人形机器人全身动作跟踪框架

> Liao、Pieter Abbeel、Koushil Sreenath 等）提出基于单个可微世界模型的人形机器人全身动作跟踪框架 SuperMimic：通过对短时域想象轨迹进行时间反向传播（BPTT）获取解析梯度，仅在 1 张 GPU 上训练 3 小时即可超越需 128 张 GPU 训练 7 天的 SOTA 无模型 PPO 基线（GPU 小时算力消耗减少超 1,000 倍）；在 129,514 段动捕动作基准上经 2 张 GPU 训练 9.8 小时实现

关联一手材料：

- SuperMimic: Scaling Humanoid Whole-Body Control with One Differentiable World Model（Qiayuan Liao, Pieter Abbeel, Koushil Sreenath et al. (UC Berkeley BAIR)）· [原站](https://arxiv.org/abs/2610.28480) · [本地原件](../../../../raw/beba569fed61f92d6d54d6581c4fc0701862da6416310218f3ab26c831fd4e92) · 版本 `digest-material-beba569fed61f92d6d54d6581c4fc0701862da6416310218f3ab26c831fd4e92@1`
  > \[Page 2\] policies to track reference motion clips \[2\] drawn from large motion-capture (mocap) datasets \[1\]. — 原文提取
- SuperMimic Official Project Page & Compute Accounting FAQ（UC Berkeley BAIR · SuperMimic）· [原站](https://supermimic.github.io/) · [本地原件](../../../../raw/d95d63b22d9af08a30b5df05b9fc034d1399a561036bcd73298b7c142c1b4fd0) · 版本 `digest-material-d95d63b22d9af08a30b5df05b9fc034d1399a561036bcd73298b7c142c1b4fd0@1`
  > Humanoid whole-body control, trained with one differentiable world model. — 原文提取

### [Human Data EP04—Video：VideoMimic](../../blogs/Human%20Data%20EP04%E2%80%94Video%EF%BC%9AVideoMimic.md)

2025-11-04 · 来源：UC Berkeley BAIR · VideoMimic (arXiv:2505.03729) · 状态：有来源缺口

[单篇导读（blogs/）](../../blogs/Human%20Data%20EP04%E2%80%94Video%EF%BC%9AVideoMimic.md) · [微信原件](../../../../raw/d79294879f3062ac0397fb10c26a1be860663775947b03995411b5dce85aa472) · 固定版本 `digest-material-d79294879f3062ac0397fb10c26a1be860663775947b03995411b5dce85aa472@1`

> Human Data系列前三期我们都聚焦于利用人体动捕数据做人形机器人控制数据源的工作，分别是Human Data EP01-MoCap：TWIST，Human Data EP02—MoCap：GMT和Human Data EP03—MoCap：Exbody2。

> VideoMimic是一个可以让人形机器人通过用手机随手拍摄的人体视频学习动作的方法。这篇工作的一作之一是章俊一，他目前是UC Berkeley在读博士，导师是 Trevor Darrell教授，本科毕业于上海交通大学。这篇访谈有关于基于2D视频重建三维人体动态点云方法的介绍，有关于人体视频数据和高精度动捕数据金字塔的思考，也有关于人形机器人全身运动控制在RL还是IL方法选择上的探讨，非常有启发，推荐阅读。

关联一手材料：

- Visual Imitation Enables Contextual Humanoid Control（Arthur Allshire, Hongsuk Choi, Junyi Zhang et al. / arXiv）· [原站](https://arxiv.org/abs/2505.03729) · [NotebookLM](https://notebook.google.com/notebook/33f0076b-fc09-42cc-9cd9-fecfb847ce1c) · [Drive](https://drive.google.com/file/d/1ojQZE3P4uXIb-JsyuSyz_zqB1oLtJCdW/view?usp=drivesdk) · 版本 `digest-material-58d5d1eee387976024b9dcf19ee455ad1ba7150e47ed3284067df00ff4181230@1`
  > Figure 1: VIDEOMIMIC is a real-to-sim-to-real pipeline that converts monocular videos into transferable humanoid skills, letting robots learn context-aware behaviors (terrain-traversing, stairs-climbing, sitting) in a single policy. — PDF p.1


## 3. 关联实体网络（Verified Entity Ontology）

- ← [Sergey Levine](../people/Sergey%20Levine.md) · UC Berkeley 强化学习领军（human_certified/verified）
- ← [Trevor Darrell](../people/Trevor%20Darrell.md) · BAIR 联合主任 (ARM4R/VideoMimic)（human_certified/verified）
