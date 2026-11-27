# MIT CSAIL

[返回主体档案库](../README.md) · [返回赛道总览](../../赛道总览.md) · [单篇导读索引](../../blogs/README.md)

- 主体类别：🏛️ 实验室、高校与机构平台 (Labs & Institutions)
- 核心定位与说明：确认Victor Scheinman 1969 Stanford Arm运动学论文机构归属
- 关联账号与官方入口：
  - academic\_archive（MIT CSAIL）：[机构／作者主页](https://www.csail.mit.edu/) · 登记对象 `digest-publisher-e9e9fc88176f4432298c39ea` — 确认Victor Scheinman 1969 Stanford Arm运动学论文机构归属

## 1. 核心研究问题与待核查争议（Questions & Open Debates）

### 🔍 待核查缺口与证据边界（Open Gaps）

- `not_disclosed`：NVIDIA LPR Lab 项目页与 arXiv:2611.25105v2 均未开放 MAWAM 的训练/推理代码仓、2.76B 团队微调权重及 Galaxea R1 Pro 双机同步遥操作数据集，且其底座 GR00T 2 权重在官方页亦标示预计 2026 年 12 月开源，外部团队暂无法独立复现真机 67.8% 与仿真 90.3% 指标。 [线索](https://research.nvidia.com/labs/lpr/mawam/)（关联：[《MAWAM: A Multi-Agent World-Action Model for Coordinated Manipulation》](../../blogs/MAWAM_%20A%20Multi-Agent%20World-Action%20Model%20for%20Coordinated%20Manipulation.md)）
- `pending_verification`：MAWAM 真机实验仅在两台锁死底盘与躯干的同构 Galaxea R1 Pro 上各测 30 次、无指尖触觉或腕部力矩传感，且依赖单卡 H100 集中式推理（0.32 s 模型耗时未含网络往返）与固定 \<= 4 台智能体的正则单形池；端侧 Jetson Thor 部署、异构多机及动态编队尚未经真机验证。 [线索](https://arxiv.org/html/2611.25105v2)（关联：[《MAWAM: A Multi-Agent World-Action Model for Coordinated Manipulation》](../../blogs/MAWAM_%20A%20Multi-Agent%20World-Action%20Model%20for%20Coordinated%20Manipulation.md)）
- `unavailable`：原文参考列表所引川崎重工历史博客(kawasakirobotics.com/blog/the-story-of-the-kawasaki-unimate...)返回HTTP 403受阻，导致Kawasaki-Unimate 2000关于1.6吨体重、12公斤载荷与约9万/59.5万美元现值折算虽在外部搜索获得佐证，却未取得官方网页本机全文快照。（关联：[《机器人百年史EP01：1920s-1960s 从科幻照进现实》](../../blogs/%E6%9C%BA%E5%99%A8%E4%BA%BA%E7%99%BE%E5%B9%B4%E5%8F%B2EP01%EF%BC%9A1920s-1960s%20%E4%BB%8E%E7%A7%91%E5%B9%BB%E7%85%A7%E8%BF%9B%E7%8E%B0%E5%AE%9E.md)）
- `pending_verification`：经核查，Unimation于1983年被Westinghouse Electric（西屋电气）以1.07亿美元收购，EP01文章及所引IEEE Spectrum原文错拼为Western Electric；此外文章中MIT博士生Heinrich Ernst被拼成Ernstt，均已在分析中做显式纠偏。（关联：[《机器人百年史EP01：1920s-1960s 从科幻照进现实》](../../blogs/%E6%9C%BA%E5%99%A8%E4%BA%BA%E7%99%BE%E5%B9%B4%E5%8F%B2EP01%EF%BC%9A1920s-1960s%20%E4%BB%8E%E7%A7%91%E5%B9%BB%E7%85%A7%E8%BF%9B%E7%8E%B0%E5%AE%9E.md)）
- `not_disclosed`：CHM关于MH-1的展品页未附1961年博士论文原始PDF正文，且早期Čapek 1921剧本与Asimov 1942/1950小说原典及Devol 1954专利全文未单独抓取归档。（关联：[《机器人百年史EP01：1920s-1960s 从科幻照进现实》](../../blogs/%E6%9C%BA%E5%99%A8%E4%BA%BA%E7%99%BE%E5%B9%B4%E5%8F%B2EP01%EF%BC%9A1920s-1960s%20%E4%BB%8E%E7%A7%91%E5%B9%BB%E7%85%A7%E8%BF%9B%E7%8E%B0%E5%AE%9E.md)）

- [《MAWAM: A Multi-Agent World-Action Model for Coordinated Manipulation》](../../blogs/MAWAM_%20A%20Multi-Agent%20World-Action%20Model%20for%20Coordinated%20Manipulation.md)：已通过 ingest.fetch 抓回 arXiv:2611.25105v2 HTML 全文（83,418 字符）及 PDF 首页（23 页）、NVIDIA LPR Lab 官方项目页（research.nvidia.com/labs/lpr/mawam/，10,340 字符）完成全量穿透核查：13 位作者中 11 位署名 NVIDIA（横跨 Jan Kautz / Zhiding Yu 的 LPR Lab 与 Jim Fan / Johan Bjorck 的 GEAR Lab），仅 Xianzhe Fan / Hengshuang Zhao 兼署或署名香港大学（HKU）、Yecheng Wu 兼署 MIT，确认为 NVIDIA 主导的工业实验室联合成果而非纯高校学术论文；拆解了 4D RoPE 正单形身份编码、Action-to-Video Bias、两阶段训练、Table 1/2/3/7/8/9/11 全量定量消融，并定位出「推理期冻结未来帧几乎不损性能但删去未来 token 即归零」的共享工作区机理与 0.32 s H100 集中式推理边界；训练/部署代码与团队权重尚未开源及异构/触觉局限保留规范缺口。
- [《机器人百年史EP01：1920s-1960s 从科幻照进现实》](../../blogs/%E6%9C%BA%E5%99%A8%E4%BA%BA%E7%99%BE%E5%B9%B4%E5%8F%B2EP01%EF%BC%9A1920s-1960s%20%E4%BB%8E%E7%A7%91%E5%B9%BB%E7%85%A7%E8%BF%9B%E7%8E%B0%E5%AE%9E.md)：已完成机器人百年史EP01史料深度对账：保留CHM馆藏、IEEE Spectrum专稿与MIT Working Paper 69全文，并新抓取快照Robohub Victor Scheinman悼文及Stanford Infolab工程档案（补齐Stanford Arm五旋转+一移动副及六维腕力传感器明细）。同时发现并纠正两处重要史实失真：其一是文章直接承接IEEE Spectrum(2022)原文的著名笔误，把1983年1.07亿美元收购Unimation的买方错写成Western Electric（实为Westinghouse Electric西屋电气）；其二是MH-1作者Heinrich Ernst多写了一个t成Ernstt。此外kawasaki链接返回403保留为不可得缺口。

## 2. 收录文章与一手材料（Ingested Articles & Primary Sources）

### [MAWAM: A Multi-Agent World-Action Model for Coordinated Manipulation](../../blogs/MAWAM_%20A%20Multi-Agent%20World-Action%20Model%20for%20Coordinated%20Manipulation.md)

2026-11-18 · 来源：NVIDIA LPR Lab · NVIDIA GEAR Lab · HKU · MIT (arXiv:2611.25105v2) · 状态：有来源缺口

[单篇导读（blogs/）](../../blogs/MAWAM_%20A%20Multi-Agent%20World-Action%20Model%20for%20Coordinated%20Manipulation.md) · [微信原件](../../../../raw/8f1cb39900b03eb9c40d6b280d45b04215ada8fa19eb4759d907fc176ee5b4af) · 固定版本 `digest-material-8f1cb39900b03eb9c40d6b280d45b04215ada8fa19eb4759d907fc176ee5b4af@1`

> Every move in a robot team changes the world in which its teammates must act. Coordinated manipulation therefore calls for predicting the team's actions together with the physical future they jointly create.

> We introduce MAWAM, a multi-agent world-action model that jointly generates each robot's future views and executable action chunks in a single sample. Built from a pretrained single-robot world-action backbone, MAWAM jointly denoises all robots' action and future-view tokens through cross-agent attention, while preserving a separate control interface for each robot.

关联一手材料：

- MAWAM: A Multi-Agent World-Action Model for Coordinated Manipulation (arXiv:2611.25105v2 Full Paper)（NVIDIA LPR Lab · NVIDIA GEAR Lab · HKU · MIT）· [原站](https://arxiv.org/abs/2611.25105v2) · [本地原件](../../../../raw/385309e9c3c241bde580b041e37a9e84963f13a5ada1b77ea36563a156151813) · 版本 `digest-material-385309e9c3c241bde580b041e37a9e84963f13a5ada1b77ea36563a156151813@1`
  > Every move in a robot team changes the world in which its teammates must act. Coordinated manipulation therefore calls for predicting the team’s actions together with the physical future they jointly create. — 原文提取

### [机器人百年史EP01：1920s-1960s 从科幻照进现实](../../blogs/%E6%9C%BA%E5%99%A8%E4%BA%BA%E7%99%BE%E5%B9%B4%E5%8F%B2EP01%EF%BC%9A1920s-1960s%20%E4%BB%8E%E7%A7%91%E5%B9%BB%E7%85%A7%E8%BF%9B%E7%8E%B0%E5%AE%9E.md)

2026-09-10 · 来源：Computer History Museum / IEEE Spectrum / MIT AI Lab / Robohub (Stanford Infolab) · 状态：有来源缺口

[单篇导读（blogs/）](../../blogs/%E6%9C%BA%E5%99%A8%E4%BA%BA%E7%99%BE%E5%B9%B4%E5%8F%B2EP01%EF%BC%9A1920s-1960s%20%E4%BB%8E%E7%A7%91%E5%B9%BB%E7%85%A7%E8%BF%9B%E7%8E%B0%E5%AE%9E.md) · [微信原件](../../../../raw/d51af4ff4d06e8fc67c2f528578adfe96aad5d83103390b694764b4842b2979d) · 固定版本 `digest-material-d51af4ff4d06e8fc67c2f528578adfe96aad5d83103390b694764b4842b2979d@1`

> 在美国硅谷，有一个现代信息技术的时光穿梭机：Computer History Museum；在CHM，有一个AI机器人展区，我前段时间在这里待了几个小时，在几十年前被创造出来的各种机器人的包围下，眼前的一切让我无比震惊：近百年的机器人研究历史长河里，相似形态的机器人在不同的时间节点留下足迹，原来，人类在同样的机器人形态下有过那么多轮的尝试。

> 这些机器人的外壳，像是一次次轮回在这个地球上的我们，不同时代的科学家和梦想家一次次的试图给它们注入“灵魂”。在Robot这个词汇被创造出来的105年后，我们似乎来到了人与机器人故事的”临界点“：机器人的躯体和灵魂似乎在这一轮的尝试终于可以和我们共生在地球上。

关联一手材料：

- Kinematics of the MIT-AI-VICARM Manipulator（Berthold K. P. Horn / Hirochika Inoue, MIT）· [原站](https://people.csail.mit.edu/bkph/articles/Kinematics_Vicarm_WP_69.pdf) · [NotebookLM](https://notebook.google.com/notebook/cac99041-d3b9-449e-a192-12bb4b1ad391) · [Drive](https://drive.google.com/file/d/1De-naq71-pL2g4qUhy2ASD0jq4pMx-SQ/view?usp=drivesdk) · 版本 `digest-material-e5641012dc9ceb097cf0275c61c4cd1b677ea73d6485c000700020cf0f22b456@1`
  > This paper describes the basic geometry of the electric manipulator designed for the Artificial Intelligence Laboratory by Victor Scheinman while on leave froin Stanford University. — PDF p.1


## 3. 关联实体网络（Verified Entity Ontology）

- ← [Andrew J. Barry](../people/Andrew%20J.%20Barry.md) · 无人机高速避障博士师承（曾任） [已离任/曾任]（human_certified/pending）
- ← [Pulkit Agrawal](../companies/Pulkit%20Agrawal.md) · 任职 / 隶属 · Associate Professor（decision1_verified/verified）
- ← Josh Gruenstein · 任职 / 隶属 · Graduate（曾任） [已离任/曾任]（decision1_verified/verified）
