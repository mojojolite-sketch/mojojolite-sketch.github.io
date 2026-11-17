# Tony Tao

[返回主体档案库](../README.md) · [返回赛道总览](../../赛道总览.md) · [单篇导读索引](../../blogs/README.md)

- 主体类别：👤 个人与学者 (People)
- 核心定位与说明：CMU 具身机器人研究员，共同发布 Pixel 与 Pixel-UMI 系统。
- 关联账号与官方入口：
  - 个人学术主页（Tony Tao）：[账号主页](https://tony-tao.com/) · 登记对象 `digest-publisher-5fd637b9e2c11ccb2e5c64bb` — CMU 具身机器人研究员，共同发布 Pixel 与 Pixel-UMI 系统。

## 1. 核心研究问题与待核查争议（Questions & Open Debates）

### 🔍 待核查缺口与证据边界（Open Gaps）

- `unavailable`：受沙箱无外网直连约束，未能下载 arXiv:2611.03647 PDF 全文；5 类实机任务各自单项进度、w/o EAR 与 w/o REAM 消融百分点降幅、人类示范采集总条数/小时数以及伴随硬件 Pixel（arXiv:2611.03648）逐关节自由度与相机 BOM 未能直接核查。 [线索](https://arxiv.org/abs/2611.03647)（关联：[《Pixel-UMI: Learning Environment-Aware Whole-Body Manipulation from Sensorized Human Demonstrations》](../../blogs/Pixel-UMI_%20Learning%20Environment-Aware%20Whole-Body%20Manipulation%20from%20Sensorized%20Human%20Demonstrations.md)）
- `not_disclosed`：当前公开摘要与技术拆解未披露在线 DAgger 阶段人类实时干预步数占比与单任务平均纠偏工时，尚无法量化核算相对于纯真机遥操作的端到端采集降本倍率。 [线索](https://arxiv.org/abs/2611.03647)（关联：[《Pixel-UMI: Learning Environment-Aware Whole-Body Manipulation from Sensorized Human Demonstrations》](../../blogs/Pixel-UMI_%20Learning%20Environment-Aware%20Whole-Body%20Manipulation%20from%20Sensorized%20Human%20Demonstrations.md)）

- [《Pixel-UMI: Learning Environment-Aware Whole-Body Manipulation from Sensorized Human Demonstrations》](../../blogs/Pixel-UMI_%20Learning%20Environment-Aware%20Whole-Body%20Manipulation%20from%20Sensorized%20Human%20Demonstrations.md)：已通过 search\_web 核验 arXiv:2611.03647《Pixel-UMI: Learning Environment-Aware Whole-Body Manipulation from Sensorized Human Demonstrations》核心机制（EAR、延迟校准动作分配、REAM 与在线 DAgger）、5 类任务 87.0% 平均任务进度及伴随平台 Pixel（arXiv:2611.03648，\<\\\$15,000 轮式双臂硬件），并与库内 Ropedia Xperience 2（arXiv:2611.17060）、Maxinsights 与 UMI-Live（arXiv:2610.39385）完成四方路线横比。

## 2. 收录文章与一手材料（Ingested Articles & Primary Sources）

### [Pixel-UMI: Learning Environment-Aware Whole-Body Manipulation from Sensorized Human Demonstrations](../../blogs/Pixel-UMI_%20Learning%20Environment-Aware%20Whole-Body%20Manipulation%20from%20Sensorized%20Human%20Demonstrations.md)

2026-11-06 · 来源：arXiv:2611.03647 · Pixel-UMI · 状态：有来源缺口

[单篇导读（blogs/）](../../blogs/Pixel-UMI_%20Learning%20Environment-Aware%20Whole-Body%20Manipulation%20from%20Sensorized%20Human%20Demonstrations.md) · [微信原件](../../../../raw/f17a7d8598a711d597a3078df971f99229bc66bcec6bbddb929da1c674c71efb) · 固定版本 `digest-material-f17a7d8598a711d597a3078df971f99229bc66bcec6bbddb929da1c674c71efb@1`

> 【信源巡检核心摘要】 卡内基梅隆大学（CMU）Deepak Pathak 与 Ruslan Salakhutdinov 团队提出 Pixel-UMI 全身移动操作学习管线：通过环境感知重定向（EAR）结合重建场景几何生成无碰撞全身与底盘目标，引入重定向误差感知掩码（REAM）缓解人机视角错配，并配合在线 DAgger 人类纠偏应对富接触交互，在铰接物体、柔性物体、受限空间伸展、全身避障与双臂协同 5 类全身移动操作任务上取得 87.0% 平均任务进度。

关联一手材料：

- Pixel-UMI: Learning Environment-Aware Whole-Body Manipulation from Sensorized Human Demonstrations（CMU (Jason Jingzhou Liu, Tony Tao, Deepak Pathak, Ruslan Salakhutdinov)）· [原站](https://arxiv.org/abs/2611.03647) · [本地原件](../../../../raw/4d69cb9cdff3f2c0c103dda14de565be8b914eb974180845c32d47fc019aa636) · 版本 `digest-material-4d69cb9cdff3f2c0c103dda14de565be8b914eb974180845c32d47fc019aa636@1`
  > 2. Three Core Algorithmic Modules: - Environment-Aware Retargeting (EAR): Combines offline 3D scene geometry reconstructed from human-worn depth/camera recordings with demonstrated human head and gripper trajectories. — 原文提取
