# The University of Hong Kong

[返回主体档案库](../README.md) · [返回赛道总览](../../赛道总览.md) · [单篇导读索引](../../blogs/README.md)

- 主体类别：🏛️ 实验室、高校与机构平台 (Labs & Institutions)
- 核心定位与说明：MAWAM 高校联合研发单位。
- 关联账号与官方入口：
  - Official Website（The University of Hong Kong）：[机构／作者主页](https://mmlab.hk/) · 登记对象 `digest-publisher-4b8840bcb5a95a637fdcda73` — MAWAM 高校联合研发单位。

## 1. 核心研究问题与待核查争议（Questions & Open Debates）

### 🔍 待核查缺口与证据边界（Open Gaps）

- `not_disclosed`：NVIDIA LPR Lab 项目页与 arXiv:2611.25105v2 均未开放 MAWAM 的训练/推理代码仓、2.76B 团队微调权重及 Galaxea R1 Pro 双机同步遥操作数据集，且其底座 GR00T 2 权重在官方页亦标示预计 2026 年 12 月开源，外部团队暂无法独立复现真机 67.8% 与仿真 90.3% 指标。 [线索](https://research.nvidia.com/labs/lpr/mawam/)（关联：[《MAWAM: A Multi-Agent World-Action Model for Coordinated Manipulation》](../../blogs/MAWAM_%20A%20Multi-Agent%20World-Action%20Model%20for%20Coordinated%20Manipulation.md)）
- `pending_verification`：MAWAM 真机实验仅在两台锁死底盘与躯干的同构 Galaxea R1 Pro 上各测 30 次、无指尖触觉或腕部力矩传感，且依赖单卡 H100 集中式推理（0.32 s 模型耗时未含网络往返）与固定 \<= 4 台智能体的正则单形池；端侧 Jetson Thor 部署、异构多机及动态编队尚未经真机验证。 [线索](https://arxiv.org/html/2611.25105v2)（关联：[《MAWAM: A Multi-Agent World-Action Model for Coordinated Manipulation》](../../blogs/MAWAM_%20A%20Multi-Agent%20World-Action%20Model%20for%20Coordinated%20Manipulation.md)）

- [《MAWAM: A Multi-Agent World-Action Model for Coordinated Manipulation》](../../blogs/MAWAM_%20A%20Multi-Agent%20World-Action%20Model%20for%20Coordinated%20Manipulation.md)：已通过 ingest.fetch 抓回 arXiv:2611.25105v2 HTML 全文（83,418 字符）及 PDF 首页（23 页）、NVIDIA LPR Lab 官方项目页（research.nvidia.com/labs/lpr/mawam/，10,340 字符）完成全量穿透核查：13 位作者中 11 位署名 NVIDIA（横跨 Jan Kautz / Zhiding Yu 的 LPR Lab 与 Jim Fan / Johan Bjorck 的 GEAR Lab），仅 Xianzhe Fan / Hengshuang Zhao 兼署或署名香港大学（HKU）、Yecheng Wu 兼署 MIT，确认为 NVIDIA 主导的工业实验室联合成果而非纯高校学术论文；拆解了 4D RoPE 正单形身份编码、Action-to-Video Bias、两阶段训练、Table 1/2/3/7/8/9/11 全量定量消融，并定位出「推理期冻结未来帧几乎不损性能但删去未来 token 即归零」的共享工作区机理与 0.32 s H100 集中式推理边界；训练/部署代码与团队权重尚未开源及异构/触觉局限保留规范缺口。

## 2. 收录文章与一手材料（Ingested Articles & Primary Sources）

### [MAWAM: A Multi-Agent World-Action Model for Coordinated Manipulation](../../blogs/MAWAM_%20A%20Multi-Agent%20World-Action%20Model%20for%20Coordinated%20Manipulation.md)

2026-11-18 · 来源：NVIDIA LPR Lab · NVIDIA GEAR Lab · HKU · MIT (arXiv:2611.25105v2) · 状态：有来源缺口

[单篇导读（blogs/）](../../blogs/MAWAM_%20A%20Multi-Agent%20World-Action%20Model%20for%20Coordinated%20Manipulation.md) · [微信原件](../../../../raw/8f1cb39900b03eb9c40d6b280d45b04215ada8fa19eb4759d907fc176ee5b4af) · 固定版本 `digest-material-8f1cb39900b03eb9c40d6b280d45b04215ada8fa19eb4759d907fc176ee5b4af@1`

> Every move in a robot team changes the world in which its teammates must act. Coordinated manipulation therefore calls for predicting the team's actions together with the physical future they jointly create.

> We introduce MAWAM, a multi-agent world-action model that jointly generates each robot's future views and executable action chunks in a single sample. Built from a pretrained single-robot world-action backbone, MAWAM jointly denoises all robots' action and future-view tokens through cross-agent attention, while preserving a separate control interface for each robot.

关联一手材料：

- MAWAM: A Multi-Agent World-Action Model for Coordinated Manipulation (arXiv:2611.25105v2 Full Paper)（NVIDIA LPR Lab · NVIDIA GEAR Lab · HKU · MIT）· [原站](https://arxiv.org/abs/2611.25105v2) · [本地原件](../../../../raw/385309e9c3c241bde580b041e37a9e84963f13a5ada1b77ea36563a156151813) · 版本 `digest-material-385309e9c3c241bde580b041e37a9e84963f13a5ada1b77ea36563a156151813@1`
  > Every move in a robot team changes the world in which its teammates must act. Coordinated manipulation therefore calls for predicting the team’s actions together with the physical future they jointly create. — 原文提取


## 3. 关联实体网络（Verified Entity Ontology）

- ← Xianzhe Fan · 任职 / 隶属（rule_verified/verified）
- ← [NVIDIA LPR Lab](../labs/NVIDIA%20LPR%20Lab.md) · 合作 / 联合研发（rule_verified/verified）
- ← Hengshuang Zhao · 任职 / 隶属（rule_verified/verified）
