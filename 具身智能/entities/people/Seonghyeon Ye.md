# Seonghyeon Ye

[返回主体档案库](../README.md) · [返回赛道总览](../../赛道总览.md) · [单篇导读索引](../../blogs/README.md)

- 主体类别：👤 个人与学者 (People)
- 核心定位与说明：—
- 关联账号与官方入口：
  - arXiv Author Index（Seonghyeon Ye）：[作者索引](https://arxiv.org/search/?searchtype=author&query=Ye%2C+Seonghyeon) · 登记对象 `digest-publisher-ca0ecfad66f3582cfcba348b`

## 1. 核心研究问题与待核查争议（Questions & Open Debates）

### 🔍 待核查缺口与证据边界（Open Gaps）

- `unavailable`：@DrJimFan 在 X 平台发布的具体 CoRL 2026 预热帖原始 status 链接、帖文全文及内嵌 1.0X 原速真机演示视频流，因 X 前端 JS 渲染与登录墙限制未在本地抓回全本（x.com/DrJimFan 仅返回 605.3K 粉丝主页外壳）；当前以 NVIDIA GEAR Lab GR00T 2 官方发布页、DreamDojo (arXiv:2602.06949) 及 DreamZero (arXiv:2602.15922) 一手资料穿透补全。 [线索](https://x.com/DrJimFan)（关联：[《Jim Fan (@DrJimFan)：CoRL 2026 主题演讲与 1.0X 原速真机自主操作预热视频澄清》](../../blogs/Jim%20Fan%20%28%40DrJimFan%29%EF%BC%9ACoRL%202026%20%E4%B8%BB%E9%A2%98%E6%BC%94%E8%AE%B2%E4%B8%8E%201.0X%20%E5%8E%9F%E9%80%9F%E7%9C%9F%E6%9C%BA%E8%87%AA%E4%B8%BB%E6%93%8D%E4%BD%9C%E9%A2%84%E7%83%AD%E8%A7%86%E9%A2%91%E6%BE%84%E6%B8%85.md)）
- `pending_verification`：1.0X 原速无剪辑真机演示虽可排除倍速剪辑疑虑，但单段演示之外的连续多小时平均故障间隔时间（MTBF）及人工接管率仍待 2026 年 12 月权重与 X-Adapt 代码正式开源后由独立第三方实验室复测验证。（关联：[《Jim Fan (@DrJimFan)：CoRL 2026 主题演讲与 1.0X 原速真机自主操作预热视频澄清》](../../blogs/Jim%20Fan%20%28%40DrJimFan%29%EF%BC%9ACoRL%202026%20%E4%B8%BB%E9%A2%98%E6%BC%94%E8%AE%B2%E4%B8%8E%201.0X%20%E5%8E%9F%E9%80%9F%E7%9C%9F%E6%9C%BA%E8%87%AA%E4%B8%BB%E6%93%8D%E4%BD%9C%E9%A2%84%E7%83%AD%E8%A7%86%E9%A2%91%E6%BE%84%E6%B8%85.md)）
- `not_disclosed`：GR00T 2 白皮书披露 50 项评测任务系从「5 条演示微调可达 ≥80% 成功率」的可学池中预筛选得出，未披露未筛选全量工业长尾任务分母得分、DexBench/VABAR 分项绝对分值及连续 8 小时无剪辑运行 MTBF；核心模型权重与 X-Adapt 代码需待 2026 年 12 月正式开源后独立复现。 [线索](https://research.nvidia.com/labs/gear/gr00t-2/)（关联：[《GR00T 2 Official Technical Release: Scaling World-Action Models on 402,000 Hours of Human Video with X-Adapt & Jetson Thor 2B Turbo》](../../blogs/GR00T%202%20Official%20Technical%20Release_%20Scaling%20World-Action%20Models%20on%20402%2C000%20Hours%20of%20Human%20Video%20with%20X-Adapt%20%26.md)）

- [《Jim Fan (@DrJimFan)：CoRL 2026 主题演讲与 1.0X 原速真机自主操作预热视频澄清》](../../blogs/Jim%20Fan%20%28%40DrJimFan%29%EF%BC%9ACoRL%202026%20%E4%B8%BB%E9%A2%98%E6%BC%94%E8%AE%B2%E4%B8%8E%201.0X%20%E5%8E%9F%E9%80%9F%E7%9C%9F%E6%9C%BA%E8%87%AA%E4%B8%BB%E6%93%8D%E4%BD%9C%E9%A2%84%E7%83%AD%E8%A7%86%E9%A2%91%E6%BE%84%E6%B8%85.md)：替换原 vertexaisearch 重定向，复用并关联库内已归档 NVIDIA GEAR Lab GR00T 2 官方发布页（https://research.nvidia.com/labs/gear/gr00t-2/），并新抓归档 DreamDojo（arXiv:2602.06949）与 DreamZero（arXiv:2602.15922）一手网页；系统梳理 Jim Fan (@DrJimFan) 在 CoRL 2026 强调的「1.0X 原速真机自主运行透明准则」及从 44k 小时人类视频世界模型（DreamDojo）到 14B WAM（DreamZero 7 Hz）再收敛至端侧 2B GR00T 2 Turbo（System 1 执行 × System 2 Astra WAM API 规划）的技术栈跃迁，并与库内 GR00T 2 技术白皮书及 CoRL 演讲全文导读交叉链接；X 原始单条 status 链接及独立长时 MTBF 复测保留来源缺口。
- [《GR00T 2 Official Technical Release: Scaling World-Action Models on 402,000 Hours of Human Video with X-Adapt & Jetson Thor 2B Turbo》](../../blogs/GR00T%202%20Official%20Technical%20Release_%20Scaling%20World-Action%20Models%20on%20402%2C000%20Hours%20of%20Human%20Video%20with%20X-Adapt%20%26.md)：完成 NVIDIA GEAR Lab（Jim Fan / Yuke Zhu 团队）GR00T 2 与 GR00T 2 Turbo 官方项目页及技术白皮书穿透核查：拆解 436,414 小时三源异构数据（402,730h 第一视角人类无标签视频 + 23,500h 真机遥操作 + 10,184h/2,897 任务手持 UMI，含 Hugging Face 开源 100,000h Human-1M 子集与 1/125 标注成本 FLORA 套件）、Cosmos-Predict2.5-2B 统一序列掩码流匹配机制（与 GR00T N1/N1.5、DreamZero 14B、VFlash、Ego4WAM、π0.5 横向对账）、Wan 2.2 VAE 1/4 视觉压缩在机载 Jetson Thor 上的 124 ms 实时闭环（驱动 Jetson Orin 50Hz SONIC 全身控制及 Astra WAM API/Edit/ASPIRE 协同），并复核 5-Shot 95% 成功率背后的 ≥80% 可学任务预筛选口径偏差与接触力控盲区。

## 2. 收录文章与一手材料（Ingested Articles & Primary Sources）

### [Jim Fan (@DrJimFan)：CoRL 2026 主题演讲与 1.0X 原速真机自主操作预热视频澄清](../../blogs/Jim%20Fan%20%28%40DrJimFan%29%EF%BC%9ACoRL%202026%20%E4%B8%BB%E9%A2%98%E6%BC%94%E8%AE%B2%E4%B8%8E%201.0X%20%E5%8E%9F%E9%80%9F%E7%9C%9F%E6%9C%BA%E8%87%AA%E4%B8%BB%E6%93%8D%E4%BD%9C%E9%A2%84%E7%83%AD%E8%A7%86%E9%A2%91%E6%BE%84%E6%B8%85.md)

2026-11-09 · 来源：NVIDIA GEAR Lab · GR00T 2 Technical Release · 状态：有来源缺口

[单篇导读（blogs/）](../../blogs/Jim%20Fan%20%28%40DrJimFan%29%EF%BC%9ACoRL%202026%20%E4%B8%BB%E9%A2%98%E6%BC%94%E8%AE%B2%E4%B8%8E%201.0X%20%E5%8E%9F%E9%80%9F%E7%9C%9F%E6%9C%BA%E8%87%AA%E4%B8%BB%E6%93%8D%E4%BD%9C%E9%A2%84%E7%83%AD%E8%A7%86%E9%A2%91%E6%BE%84%E6%B8%85.md) · [微信原件](../../../../raw/0ae571b551bb31cf203097d3d7c04b9a424cb96c7ad108a27b1f0839c3bc9fe5) · 固定版本 `digest-material-0ae571b551bb31cf203097d3d7c04b9a424cb96c7ad108a27b1f0839c3bc9fe5@1`

> 【信源巡检核心摘要】 NVIDIA Project GR00T 联合负责人兼 GEAR 具身智能研究主管 Jim Fan（X 账号 @DrJimFan）在 2026-11-09 至 11-12 德州奥斯汀 CoRL 2026 大会期间及会前在 X 引发广泛传播。

关联一手材料：

- GR00T 2 Official Technical Release: Scaling World-Action Models on 402,000 Hours of Human Video with X-Adapt & Jetson Thor 2B Turbo（NVIDIA GEAR Lab）· [原站](https://research.nvidia.com/labs/gear/gr00t-2/) · [本地原件](../../../../raw/c6f1bcb6d99d80a10ee03de0b047c533b6a55b761aecc635d5dd8bdad433f654) · 版本 `digest-material-c6f1bcb6d99d80a10ee03de0b047c533b6a55b761aecc635d5dd8bdad433f654@1`
  > 【信源巡检核心摘要】 NVIDIA GEAR Lab 在 CoRL 2026 正式上线下一代机器人基础模型 GR00T 2 官方技术页与白皮书（https://research.nvidia.com/labs/gear/gr00t-2/ ，代码栈关联 https://github.com/NVIDIA/Isaac-GR00T ）。 — 原文提取

### [GR00T 2 Official Technical Release: Scaling World-Action Models on 402,000 Hours of Human Video with X-Adapt & Jetson Thor 2B Turbo](../../blogs/GR00T%202%20Official%20Technical%20Release_%20Scaling%20World-Action%20Models%20on%20402%2C000%20Hours%20of%20Human%20Video%20with%20X-Adapt%20%26.md)

2026-11-04 · 来源：NVIDIA GEAR Lab · GR00T 2 Technical Release · 状态：有来源缺口

[单篇导读（blogs/）](../../blogs/GR00T%202%20Official%20Technical%20Release_%20Scaling%20World-Action%20Models%20on%20402%2C000%20Hours%20of%20Human%20Video%20with%20X-Adapt%20%26.md) · [微信原件](../../../../raw/c6f1bcb6d99d80a10ee03de0b047c533b6a55b761aecc635d5dd8bdad433f654) · 固定版本 `digest-material-c6f1bcb6d99d80a10ee03de0b047c533b6a55b761aecc635d5dd8bdad433f654@1`

> 【信源巡检核心摘要】 NVIDIA GEAR Lab 在 CoRL 2026 正式上线下一代机器人基础模型 GR00T 2 官方技术页与白皮书（https://research.nvidia.com/labs/gear/gr00t-2/ ，代码栈关联 https://github.com/NVIDIA/Isaac-GR00T ）。

关联一手材料：

- GR00T 2 Official Technical Release: Scaling World-Action Models on 402,000 Hours of Human Video with X-Adapt & Jetson Thor 2B Turbo（NVIDIA GEAR Lab）· [原站](https://research.nvidia.com/labs/gear/gr00t-2/) · [本地原件](../../../../raw/c6f1bcb6d99d80a10ee03de0b047c533b6a55b761aecc635d5dd8bdad433f654) · 版本 `digest-material-c6f1bcb6d99d80a10ee03de0b047c533b6a55b761aecc635d5dd8bdad433f654@1`
  > 【信源巡检核心摘要】 NVIDIA GEAR Lab 在 CoRL 2026 正式上线下一代机器人基础模型 GR00T 2 官方技术页与白皮书（https://research.nvidia.com/labs/gear/gr00t-2/ ，代码栈关联 https://github.com/NVIDIA/Isaac-GR00T ）。 — 原文提取
