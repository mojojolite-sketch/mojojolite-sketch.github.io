# Tong Zhang

[返回主体档案库](../README.md) · [返回赛道总览](../../赛道总览.md) · [单篇导读索引](../../blogs/README.md)

- 主体类别：👤 个人与学者 (People)
- 核心定位与说明：• 论文共同一作，清华叉院博士生。 • 师从高阳，聚焦人形机器人极致平衡运控。 • arXiv仅证明同名署名，不合并社交账号。
- 关联账号与官方入口：
  - arXiv（Tong Zhang）：[作者索引](https://arxiv.org/search/?searchtype=author&query=Zhang%2C+Tong) · 登记对象 `digest-publisher-d8194bae8af2e06e777d4230` — • 论文共同一作，清华叉院博士生。 • 师从高阳，聚焦人形机器人极致平衡运控。 • arXiv仅证明同名署名，不合并社交账号。

## 1. 核心研究问题与待核查争议（Questions & Open Debates）

### 🔍 待核查缺口与证据边界（Open Gaps）

- `pending_verification`：访谈中“单腿平衡能力超过99%人类”的口头表述属于研究者主观类比修辞，论文未设置人类受试者生理对比基准。（关联：[《Human Data EP05—Video：HUB》](../../blogs/Human%20Data%20EP05%E2%80%94Video%EF%BC%9AHUB.md)）
- `pending_verification`：HuB真机评估每项动作仅汇报5次实验（Table 2）且5个展示技能分别对应独立训练的单任务策略，同一套权重统合几十种日常移动平衡动作以及高动态遮挡动作（如叶问蹲）的能力尚未得到验证。（关联：[《Human Data EP05—Video：HUB》](../../blogs/Human%20Data%20EP05%E2%80%94Video%EF%BC%9AHUB.md)）

- [《Human Data EP05—Video：HUB》](../../blogs/Human%20Data%20EP05%E2%80%94Video%EF%BC%9AHUB.md)：完成论文一手核对（arXiv:2505.07294v2，项目页 hub-robot.github.io 确认CoRL 2025 Oral）：仿真与Unitree G1真机Table 1/2实证支持HuB在燕式平衡（80%，4/5）、李小龙侧踢（100%，5/5）等准静态高质心任务上对H2O/OmniH2O的显著突破，耦合OU噪声与高频推扰消融扎实；同时核出单动作单策略分化、固定机位偏置及高遮挡动作WHAM提取失败等硬限制，“超越99%人类”按未验证修辞处理。

## 2. 收录文章与一手材料（Ingested Articles & Primary Sources）

### [Human Data EP05—Video：HUB](../../blogs/Human%20Data%20EP05%E2%80%94Video%EF%BC%9AHUB.md)

2025-11-06 · 来源：清华大学 IIIS · HuB (arXiv:2505.07294) · 状态：有来源缺口

[单篇导读（blogs/）](../../blogs/Human%20Data%20EP05%E2%80%94Video%EF%BC%9AHUB.md) · [微信原件](../../../../raw/91c9fed04a1c282cd0c8c7d536c109d5bac40519ef36678008dec7b98fdb5109) · 固定版本 `digest-material-91c9fed04a1c282cd0c8c7d536c109d5bac40519ef36678008dec7b98fdb5109@1`

> Human Data系列围绕人体数据展开，我们前四期分别采访了基于人体动捕和人体视频数据做人形机器人全身运控相关的四篇论文，人体动捕遥操Human Data EP01-MoCap：TWIST，全身运控系统Human Data EP02— MoCap：GMT和Human Data EP03—MoCap：Exbody2，基于视频的全身运控系统Human Data EP04— Video：VideoMimic。

> Human Data第五期，我们采访了一篇非常有意思的工作——HuB: Learning Extreme Humanoid Balance，这篇工作探索了现有的人形机器人可以展示什么程度的极致平衡能力。与前面四期工作不同，HUB完全依托互联网人类视频数据来获取人体SMPL数据，以此来作为人形机器人运动控制训练的起点。

关联一手材料：

- HuB: Learning Extreme Humanoid Balance（Tong Zhang et al. / arXiv）· [原站](https://arxiv.org/abs/2505.07294) · [NotebookLM](https://notebook.google.com/notebook/33f0076b-fc09-42cc-9cd9-fecfb847ce1c) · [Drive](https://drive.google.com/file/d/1lQ1T3fZEhukU-5ePWuaaVLsKZB96hkw0/view?usp=drivesdk) · 版本 `digest-material-1215f3047c36c850c33d8e4da1bf28225a0799a1a494cfa0237f9f2285611486@1`
  > Figure 1: Extreme Balance Tasks. HuB enables humanoids to perform extreme quasi-static balance tasks with high stability. — PDF p.1
