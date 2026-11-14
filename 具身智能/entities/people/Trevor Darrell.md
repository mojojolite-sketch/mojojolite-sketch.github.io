# Trevor Darrell

[返回主体档案库](../README.md) · [返回赛道总览](../../赛道总览.md) · [单篇导读索引](../../blogs/README.md)

- 主体类别：👤 个人与学者 (People)
- 核心定位与说明：—
- 关联账号与官方入口：
  - 个人学术主页（Trevor Darrell）：[机构／作者主页](https://people.eecs.berkeley.edu/~trevor/) · 登记对象 `digest-publisher-6f009a48d55a695619729ae7`

## 1. 核心研究问题与待核查争议（Questions & Open Debates）

### 🔍 待核查缺口与证据边界（Open Gaps）

- `unavailable`：VideoMimic项目主页（videomimic.net）上的高分辨率真机交互视频与多地形实验原文件暂未开放完整归档下载，保留项目演示原片数据缺口。（关联：[《Human Data EP04—Video：VideoMimic》](../../blogs/Human%20Data%20EP04%E2%80%94Video%EF%BC%9AVideoMimic.md)）
- `pending_verification`：VideoMimic所提单目视频重建结合RL策略在不同非结构化复杂地形上的真机零样本迁移成功率与长期稳定性，保留为学术论文成果，尚未经第三方独立实测检验。（关联：[《Human Data EP04—Video：VideoMimic》](../../blogs/Human%20Data%20EP04%E2%80%94Video%EF%BC%9AVideoMimic.md)）

- [《ARM4R: Pre-training Auto-regressive Robotic Models with 4D Representations (arXiv:2502.13142)》](../../blogs/ARM4R_%20Pre-training%20Auto-regressive%20Robotic%20Models%20with%204D%20Representations%20%28arXiv_2502.13142%29.md)：UC Berkeley BAIR 实验室 Trevor Darrell 团队发表 ARM4R 论文（https://arxiv.org/abs/2502.13142，配套视觉动作指令微调代码库 https://github.com/Dantong88/LLARVA ）。针对机器人真机标注数据稀缺瓶颈，提出利用单目深度估计从海量人类第一视角（egocentric）视频中提取底层 4D 时空点云轨迹表征（3D point tracks across time），利用人类手部与机械臂末端共享的 4D 几何同构性预训练自回…
- [《Human Data EP04—Video：VideoMimic》](../../blogs/Human%20Data%20EP04%E2%80%94Video%EF%BC%9AVideoMimic.md)：完成来源分诊并抓取归档VideoMimic论文PDF全文（arXiv:2505.03729）；登记共同一作章俊一主页、导师Trevor Darrell主页与BAIR官网；核对单目视频重建（MonST3R）、视频/动捕数据金字塔与全身运控策略；真机演示原片与独立复现保留缺口。

## 2. 收录文章与一手材料（Ingested Articles & Primary Sources）

### [ARM4R: Pre-training Auto-regressive Robotic Models with 4D Representations (arXiv:2502.13142)](../../blogs/ARM4R_%20Pre-training%20Auto-regressive%20Robotic%20Models%20with%204D%20Representations%20%28arXiv_2502.13142%29.md)

2026-02-19 · 来源：arXiv:2502.13142 · ARM4R · 状态：待云端同步

[单篇导读（blogs/）](../../blogs/ARM4R_%20Pre-training%20Auto-regressive%20Robotic%20Models%20with%204D%20Representations%20%28arXiv_2502.13142%29.md) · [微信原件](../../../../raw/a7a8db26ba80e8694422edea9a914657a614686601c9f65e22e71451af5c67cd) · 固定版本 `digest-material-a7a8db26ba80e8694422edea9a914657a614686601c9f65e22e71451af5c67cd@2`

> 【信源巡检核心摘要】 UC Berkeley BAIR 实验室 Trevor Darrell 团队发表 ARM4R 论文（https://arxiv.org/abs/2502.13142，配套视觉动作指令微调代码库 https://github.com/Dantong88/LLARVA ）。

关联一手材料：

- ARM4R: Pre-training Auto-regressive Robotic Models with 4D Representations (arXiv:2502.13142)（Trevor Darrell）· [原站](https://arxiv.org/abs/2502.13142) · [本地原件](../../../../raw/a7a8db26ba80e8694422edea9a914657a614686601c9f65e22e71451af5c67cd) · 版本 `digest-material-a7a8db26ba80e8694422edea9a914657a614686601c9f65e22e71451af5c67cd@2`
  > 【信源巡检核心摘要】 UC Berkeley BAIR 实验室 Trevor Darrell 团队发表 ARM4R 论文（https://arxiv.org/abs/2502.13142，配套视觉动作指令微调代码库 https://github.com/Dantong88/LLARVA ）。 — 原文提取

### [Human Data EP04—Video：VideoMimic](../../blogs/Human%20Data%20EP04%E2%80%94Video%EF%BC%9AVideoMimic.md)

2025-11-04 · 来源：arXiv:2505.03729 · Visual Imitation Enabl · 状态：有来源缺口

[单篇导读（blogs/）](../../blogs/Human%20Data%20EP04%E2%80%94Video%EF%BC%9AVideoMimic.md) · [微信原件](../../../../raw/d79294879f3062ac0397fb10c26a1be860663775947b03995411b5dce85aa472) · 固定版本 `digest-material-d79294879f3062ac0397fb10c26a1be860663775947b03995411b5dce85aa472@1`

> Human Data系列前三期我们都聚焦于利用人体动捕数据做人形机器人控制数据源的工作，分别是Human Data EP01-MoCap：TWIST，Human Data EP02—MoCap：GMT和Human Data EP03—MoCap：Exbody2。

> VideoMimic是一个可以让人形机器人通过用手机随手拍摄的人体视频学习动作的方法。这篇工作的一作之一是章俊一，他目前是UC Berkeley在读博士，导师是 Trevor Darrell教授，本科毕业于上海交通大学。这篇访谈有关于基于2D视频重建三维人体动态点云方法的介绍，有关于人体视频数据和高精度动捕数据金字塔的思考，也有关于人形机器人全身运动控制在RL还是IL方法选择上的探讨，非常有启发，推荐阅读。

关联一手材料：

- Visual Imitation Enables Contextual Humanoid Control（Arthur Allshire, Hongsuk Choi, Junyi Zhang et al. / arXiv）· [原站](https://arxiv.org/abs/2505.03729) · [NotebookLM](https://notebook.google.com/notebook/33f0076b-fc09-42cc-9cd9-fecfb847ce1c) · [Drive](https://drive.google.com/file/d/1ojQZE3P4uXIb-JsyuSyz_zqB1oLtJCdW/view?usp=drivesdk) · 版本 `digest-material-58d5d1eee387976024b9dcf19ee455ad1ba7150e47ed3284067df00ff4181230@1`
  > Figure 1: VIDEOMIMIC is a real-to-sim-to-real pipeline that converts monocular videos into transferable humanoid skills, letting robots learn context-aware behaviors (terrain-traversing, stairs-climbing, sitting) in a single policy. — PDF p.1
