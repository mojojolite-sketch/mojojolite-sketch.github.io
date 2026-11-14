# NVIDIA

[返回主体档案库](../README.md) · [返回赛道总览](../../赛道总览.md) · [单篇导读索引](../../blogs/README.md)

- 主体类别：🏢 公司与产业主体 (Companies)
- 核心定位与说明：—
- 关联账号与官方入口：
  - GitHub（NVIDIA (GitHub)）：[账号主页](https://github.com/NVIDIA) · 登记对象 `digest-publisher-65ef5c23b84176ec543431db`

## 1. 核心研究问题与待核查争议（Questions & Open Debates）

### 🔍 待核查缺口与证据边界（Open Gaps）

- `not_disclosed`：GR00T 2 白皮书披露 50 项评测任务系从「5 条演示微调可达 ≥80% 成功率」的可学池中预筛选得出，未披露未筛选全量工业长尾任务分母得分、DexBench/VABAR 分项绝对分值及连续 8 小时无剪辑运行 MTBF；核心模型权重与 X-Adapt 代码需待 2026 年 12 月正式开源后独立复现。 [线索](https://research.nvidia.com/labs/gear/gr00t-2/)（关联：[《GR00T 2 Official Technical Release: Scaling World-Action Models on 402,000 Hours of Human Video with X-Adapt & Jetson Thor 2B Turbo》](../../blogs/GR00T%202%20Official%20Technical%20Release_%20Scaling%20World-Action%20Models%20on%20402%2C000%20Hours%20of%20Human%20Video%20with%20X-Adapt%20%26.md)）

- [《GR00T 2 Official Technical Release: Scaling World-Action Models on 402,000 Hours of Human Video with X-Adapt & Jetson Thor 2B Turbo》](../../blogs/GR00T%202%20Official%20Technical%20Release_%20Scaling%20World-Action%20Models%20on%20402%2C000%20Hours%20of%20Human%20Video%20with%20X-Adapt%20%26.md)：完成 NVIDIA GEAR Lab（Jim Fan / Yuke Zhu 团队）GR00T 2 与 GR00T 2 Turbo 官方项目页及技术白皮书穿透核查：拆解 436,414 小时三源异构数据（402,730h 第一视角人类无标签视频 + 23,500h 真机遥操作 + 10,184h/2,897 任务手持 UMI，含 Hugging Face 开源 100,000h Human-1M 子集与 1/125 标注成本 FLORA 套件）、Cosmos-Predict2.5-2B 统一序列掩码流匹配机制（与 GR00T N1/N1.5、DreamZero 14B、VFlash、Ego4WAM、π0.5 横向对账）、Wan 2.2 VAE 1/4 视觉压缩在机载 Jetson Thor 上的 124 ms 实时闭环（驱动 Jetson Orin 50Hz SONIC 全身控制及 Astra WAM API/Edit/ASPIRE 协同），并复核 5-Shot 95% 成功率背后的 ≥80% 可学任务预筛选口径偏差与接触力控盲区。
- [《GR00T N1 & N1.5: An Open Foundation Model for Generalist Humanoid Robots (arXiv:2503.14734)》](../../blogs/GR00T%20N1%20%26%20N1.5_%20An%20Open%20Foundation%20Model%20for%20Generalist%20Humanoid%20Robots%20%28arXiv_2503.14734%29.md)：NVIDIA GEAR Lab 发布通用人形机器人开源基础模型 GR00T N1 与 N1.5 技术报告（https://arxiv.org/abs/2503.14734）及官方代码库 https://github.com/NVIDIA/Isaac-GR00T 与全身控制框架 https://github.com/NVlabs/GR00T-WholeBodyControl 。架构采用 Eagle VLM (System 2) + Diffusion Transformer (System 1) 双系统设计，融合真机…

## 2. 收录文章与一手材料（Ingested Articles & Primary Sources）

### [GR00T 2 Official Technical Release: Scaling World-Action Models on 402,000 Hours of Human Video with X-Adapt & Jetson Thor 2B Turbo](../../blogs/GR00T%202%20Official%20Technical%20Release_%20Scaling%20World-Action%20Models%20on%20402%2C000%20Hours%20of%20Human%20Video%20with%20X-Adapt%20%26.md)

2026-11-04 · 来源：NVIDIA GEAR Lab · GR00T 2 Technical Release · 状态：有来源缺口

[单篇导读（blogs/）](../../blogs/GR00T%202%20Official%20Technical%20Release_%20Scaling%20World-Action%20Models%20on%20402%2C000%20Hours%20of%20Human%20Video%20with%20X-Adapt%20%26.md) · [微信原件](../../../../raw/c6f1bcb6d99d80a10ee03de0b047c533b6a55b761aecc635d5dd8bdad433f654) · 固定版本 `digest-material-c6f1bcb6d99d80a10ee03de0b047c533b6a55b761aecc635d5dd8bdad433f654@1`

> 【信源巡检核心摘要】 NVIDIA GEAR Lab 在 CoRL 2026 正式上线下一代机器人基础模型 GR00T 2 官方技术页与白皮书（https://research.nvidia.com/labs/gear/gr00t-2/ ，代码栈关联 https://github.com/NVIDIA/Isaac-GR00T ）。

关联一手材料：

- GR00T 2 Official Technical Release: Scaling World-Action Models on 402,000 Hours of Human Video with X-Adapt & Jetson Thor 2B Turbo（NVIDIA GEAR Lab）· [原站](https://research.nvidia.com/labs/gear/gr00t-2/) · [本地原件](../../../../raw/c6f1bcb6d99d80a10ee03de0b047c533b6a55b761aecc635d5dd8bdad433f654) · 版本 `digest-material-c6f1bcb6d99d80a10ee03de0b047c533b6a55b761aecc635d5dd8bdad433f654@1`
  > 【信源巡检核心摘要】 NVIDIA GEAR Lab 在 CoRL 2026 正式上线下一代机器人基础模型 GR00T 2 官方技术页与白皮书（https://research.nvidia.com/labs/gear/gr00t-2/ ，代码栈关联 https://github.com/NVIDIA/Isaac-GR00T ）。 — 原文提取

### [GR00T N1 & N1.5: An Open Foundation Model for Generalist Humanoid Robots (arXiv:2503.14734)](../../blogs/GR00T%20N1%20%26%20N1.5_%20An%20Open%20Foundation%20Model%20for%20Generalist%20Humanoid%20Robots%20%28arXiv_2503.14734%29.md)

2026-06-15 · 来源：arXiv:2503.14734 · GR00T N1 & N1.5 · 状态：已整理

[单篇导读（blogs/）](../../blogs/GR00T%20N1%20%26%20N1.5_%20An%20Open%20Foundation%20Model%20for%20Generalist%20Humanoid%20Robots%20%28arXiv_2503.14734%29.md) · [微信原件](../../../../raw/c9a0741e776758e779354cc88a1fd8559e8046bff55f8b58cd12e7937629373e) · 固定版本 `digest-material-c9a0741e776758e779354cc88a1fd8559e8046bff55f8b58cd12e7937629373e@2`

> 【信源巡检核心摘要】 NVIDIA GEAR Lab 发布通用人形机器人开源基础模型 GR00T N1 与 N1.5 技术报告（https://arxiv.org/abs/2503.14734）及官方代码库 https://github.com/NVIDIA/Isaac-GR00T 与全身控制框架 https://github.com/NVlabs/GR00T-WholeBodyControl 。

关联一手材料：

- GR00T N1 & N1.5: An Open Foundation Model for Generalist Humanoid Robots (arXiv:2503.14734)（NVIDIA GEAR Lab）· [原站](https://arxiv.org/abs/2503.14734) · [本地原件](../../../../raw/c9a0741e776758e779354cc88a1fd8559e8046bff55f8b58cd12e7937629373e) · 版本 `digest-material-c9a0741e776758e779354cc88a1fd8559e8046bff55f8b58cd12e7937629373e@2`
  > 【信源巡检核心摘要】 NVIDIA GEAR Lab 发布通用人形机器人开源基础模型 GR00T N1 与 N1.5 技术报告（https://arxiv.org/abs/2503.14734）及官方代码库 https://github.com/NVIDIA/Isaac-GR00T 与全身控制框架 https://github.com/NVlabs/GR00T-WholeBodyControl 。 — 原文提取
