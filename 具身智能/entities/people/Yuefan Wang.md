# Yuefan Wang

[返回主体档案库](../README.md) · [返回赛道总览](../../赛道总览.md) · [单篇导读索引](../../blogs/README.md)

- 主体类别：👤 个人与学者 (People)
- 核心定位与说明：• 论文第一作者，西湖大学博士生。 • 师从王东林，聚焦机器人全身遥控与基础小脑。 • arXiv仅证明同名署名，不合并社交账号。
- 关联账号与官方入口：
  - arXiv（Yuefan Wang）：[作者索引](https://arxiv.org/search/?searchtype=author&query=Wang%2C+Yuefan) · 登记对象 `digest-publisher-0e331aeed9369ce29fe2c231` — • 论文第一作者，西湖大学博士生。 • 师从王东林，聚焦机器人全身遥控与基础小脑。 • arXiv仅证明同名署名，不合并社交账号。

## 1. 核心研究问题与待核查争议（Questions & Open Debates）

### 🔍 待核查缺口与证据边界（Open Gaps）

- `not_disclosed`：GAE虽在论文公开852M MoE参数体量与100帧历史窗，但全文未披露机载Jetson端到端推理延迟（ms）、总GPU训练消耗及10,000+小时混合库中商业动捕与视频估算的具体比例拆账。（关联：[《Human Data EP06—Mocap+Video：GAE》](../../blogs/Human%20Data%20EP06%E2%80%94Mocap%2BVideo%EF%BC%9AGAE.md)）
- `pending_verification`：访谈中“上机调试从头到尾没摔过”“百万级轨迹绝对规模”及MoE对比稠密模型仅差1%–2%的说法属于团队工程口述，论文未附无MoE对照组表格及独立外部百次故障统计。（关联：[《Human Data EP06—Mocap+Video：GAE》](../../blogs/Human%20Data%20EP06%E2%80%94Mocap%2BVideo%EF%BC%9AGAE.md)）
- `pending_verification`：GAE在Hard集（93.9% vs SONIC 77.7%）对比采用了50 cm宽松关键点判据且未在对齐数据下重训基线，在真机无外置视觉（Sec V.A）下的开放环境长期抗摔率待第三方实测。（关联：[《Human Data EP06—Mocap+Video：GAE》](../../blogs/Human%20Data%20EP06%E2%80%94Mocap%2BVideo%EF%BC%9AGAE.md)）

- [《Human Data EP06—Mocap+Video：GAE》](../../blogs/Human%20Data%20EP06%E2%80%94Mocap%2BVideo%EF%BC%9AGAE.md)：完成EP06访谈（2025-11-07）与后续正式技术论文（arXiv:2609.34233v1，2026-09-28公开，项目页确认时间跨度）的跨期对齐核对：确认GAE在超万小时异构重配（Humanoid-Proportioned SMPL）与RoPE 0–100 ms延迟预测上具备工程新意，Fig 3数据扩增与G-E两阶段消融扎实（93.9% vs 85.3%）；但同时核出852M参数比SONIC大20倍却隐去机载推理耗时、测试成功率采用50 cm较宽判据以及完全缺失外置地形视觉（Sec V.A）等关键约束；口述不摔口径按受控演示边界处理。

## 2. 收录文章与一手材料（Ingested Articles & Primary Sources）

### [Human Data EP06—Mocap+Video：GAE](../../blogs/Human%20Data%20EP06%E2%80%94Mocap%2BVideo%EF%BC%9AGAE.md)

2025-11-07 · 来源：西湖大学 MiLAB & 西湖机器人 · GAE (arXiv:2609.34233) · 状态：有来源缺口

[单篇导读（blogs/）](../../blogs/Human%20Data%20EP06%E2%80%94Mocap%2BVideo%EF%BC%9AGAE.md) · [微信原件](../../../../raw/dbf0c7438df818560638b6daabc82ecce09d4f5ad21649f8f28a70df74da92b6) · 固定版本 `digest-material-dbf0c7438df818560638b6daabc82ecce09d4f5ad21649f8f28a70df74da92b6@1`

> 国庆前，具身社区都被一段真人穿戴诺亦腾惯性动捕设备来遥操人形机器人的视频惊艳到，遥操延迟很低，动作多样性丰富，完成度很高。

> GAE这篇工作的主要参与者是西湖大学博士生王悦凡博士，他目前在西湖大学王东林老师组里读博，本科毕业于哈工大。一起来来了解下他在做GAE这个工作过程中的一些心得。

关联一手材料：

- GAE: General Action Expert for Real-Time Humanoid Teleoperation（Yuefan Wang et al. / arXiv）· [原站](https://arxiv.org/abs/2609.34233) · [NotebookLM](https://notebook.google.com/notebook/33f0076b-fc09-42cc-9cd9-fecfb847ce1c) · [Drive](https://drive.google.com/file/d/1QExSXvrnpQ0BcXJO5FSGMXHGM4Hpzcyb/view?usp=drivesdk) · 版本 `digest-material-d6a0b0605bb196aab7ec539afa9f83e1d49f5494027903fd0c96df1079431064@1`
  > Fig. 1: Real-time whole-body humanoid teleoperation with GAE. GAE enables humanoid robots to act as responsive physical avatars of human users across diverse motions, tasks, and hardware. — PDF p.1
