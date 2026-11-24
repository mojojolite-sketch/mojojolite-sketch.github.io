# NVIDIA LPR Lab

[返回主体档案库](../README.md) · [返回赛道总览](../../赛道总览.md) · [单篇导读索引](../../blogs/README.md)

- 主体类别：🏛️ 实验室、高校与机构平台 (Labs & Institutions)
- 核心定位与说明：英伟达学习与感知研究实验室。
- 关联账号与官方入口：
  - Official Website（NVIDIA LPR Lab）：[机构／作者主页](https://research.nvidia.com/labs/lpr/) · 登记对象 `digest-publisher-a5a267cde230d776653ed4a1` — 英伟达学习与感知研究实验室。

<!-- curated-profile:begin -->
## 0. 组织层级定位与关联入口

- **所属母体**：[NVIDIA](../companies/NVIDIA.md) → Research · 视觉感知与加速分支（`research.nvidia.com/labs/lpr/`），信源库已晋入 `probation`（`lens`）。
- **核心负责人**：[Jan Kautz](https://research.nvidia.com/person/jan-kautz)（VP of Learning and Perception Research），同步关联 [NVlabs](./NVlabs.md) 代码仓发布底座模型与推理优化代码。
- **与他组边界**：主攻多模态 VLM（Eagle / NVILA）、视觉解码加速（VFlash）与系统 1 视觉规划；面向通用人形动作主干与全身控制问题时，与 [NVIDIA GEAR Lab](./NVIDIA%20GEAR%20Lab.md)（[Jim Fan](../people/Jim%20Fan.md) / [Yuke Zhu](../people/Yuke%20Zhu.md)）形成上层感知—底层动作协同。
<!-- curated-profile:end -->

## 1. 核心研究问题与待核查争议（Questions & Open Debates）

### 💬 追问与核查：《英伟达 VFlash：Jim Fan宣告“System-1视觉新时代”｜模型…》

- 这个蛮有趣的，实现约 12 倍的视觉规划解码加速，我感觉是不是比VFA和VLM快了，怎么做到进步这么快的

关联文章：[《英伟达 VFlash：Jim Fan宣告“System-1视觉新时代”｜模型提速12倍》](../../blogs/%E8%8B%B1%E4%BC%9F%E8%BE%BE%20VFlash%EF%BC%9AJim%20Fan%E5%AE%A3%E5%91%8A%E2%80%9CSystem-1%E8%A7%86%E8%A7%89%E6%96%B0%E6%97%B6%E4%BB%A3%E2%80%9D%EF%BD%9C%E6%A8%A1%E5%9E%8B%E6%8F%90%E9%80%9F12%E5%80%8D.md)

> 追查结论摘要：在具身智能控制链路中，先区分三类角色：

### 🔍 待核查缺口与证据边界（Open Gaps）

- `not_disclosed`：NVIDIA LPR Lab 项目页与 arXiv:2611.25105v2 均未开放 MAWAM 的训练/推理代码仓、2.76B 团队微调权重及 Galaxea R1 Pro 双机同步遥操作数据集，且其底座 GR00T 2 权重在官方页亦标示预计 2026 年 12 月开源，外部团队暂无法独立复现真机 67.8% 与仿真 90.3% 指标。 [线索](https://research.nvidia.com/labs/lpr/mawam/)（关联：[《MAWAM: A Multi-Agent World-Action Model for Coordinated Manipulation》](../../blogs/MAWAM_%20A%20Multi-Agent%20World-Action%20Model%20for%20Coordinated%20Manipulation.md)）
- `pending_verification`：MAWAM 真机实验仅在两台锁死底盘与躯干的同构 Galaxea R1 Pro 上各测 30 次、无指尖触觉或腕部力矩传感，且依赖单卡 H100 集中式推理（0.32 s 模型耗时未含网络往返）与固定 \<= 4 台智能体的正则单形池；端侧 Jetson Thor 部署、异构多机及动态编队尚未经真机验证。 [线索](https://arxiv.org/html/2611.25105v2)（关联：[《MAWAM: A Multi-Agent World-Action Model for Coordinated Manipulation》](../../blogs/MAWAM_%20A%20Multi-Agent%20World-Action%20Model%20for%20Coordinated%20Manipulation.md)）
- `unavailable`：论文与项目页指向的 GitHub 代码入口（https://github.com/NVlabs/Eagle/tree/main/Embodied）经核查目前仅包含前序工作 LocateAnything（ECCV 2026）及 nvidia/LocateAnything-3B 权重，VFlash 的 4B 具身底座权重、537M 扩散草稿器（Drafter）权重、训练配方脚本以及定制修改的 TensorRT-Edge-LLM 0.9.0/0.10.1 C++ 运行时插件尚未正式上传开源。 [线索](https://github.com/NVlabs/Eagle/tree/main/Embodied)（关联：[《英伟达 VFlash：Jim Fan宣告“System-1视觉新时代”｜模型提速12倍》](../../blogs/%E8%8B%B1%E4%BC%9F%E8%BE%BE%20VFlash%EF%BC%9AJim%20Fan%E5%AE%A3%E5%91%8A%E2%80%9CSystem-1%E8%A7%86%E8%A7%89%E6%96%B0%E6%97%B6%E4%BB%A3%E2%80%9D%EF%BD%9C%E6%A8%A1%E5%9E%8B%E6%8F%90%E9%80%9F12%E5%80%8D.md)）
- `pending_verification`：VFlash 报告的 12–49 倍加速仅针对 VLM 解码子阶段（计入 ViT、Prefill 与下游动作头后模型流水线整体提速为 2.6–5.7 倍，且评测中声明长度的 Tool-Call JSON 为预置提供、不含相机 I/O 与反 token 化耗时）；同时其 1 cm 空间量化网格（\[-5,5\]×\[-5,5\]×\[0,10\] m 内 1,001 个 bin）下的下游控制实验（MolmoSpaces、LIBERO-PRO、NAVSIM、Waymo）均在仿真器或离线数据集上完成，在真实物理机器人接触密集型任务与实车闭环控制中的鲁棒性有待跨本体真机独立验证。（关联：[《英伟达 VFlash：Jim Fan宣告“System-1视觉新时代”｜模型提速12倍》](../../blogs/%E8%8B%B1%E4%BC%9F%E8%BE%BE%20VFlash%EF%BC%9AJim%20Fan%E5%AE%A3%E5%91%8A%E2%80%9CSystem-1%E8%A7%86%E8%A7%89%E6%96%B0%E6%97%B6%E4%BB%A3%E2%80%9D%EF%BD%9C%E6%A8%A1%E5%9E%8B%E6%8F%90%E9%80%9F12%E5%80%8D.md)）

- [《MAWAM: A Multi-Agent World-Action Model for Coordinated Manipulation》](../../blogs/MAWAM_%20A%20Multi-Agent%20World-Action%20Model%20for%20Coordinated%20Manipulation.md)：已通过 ingest.fetch 抓回 arXiv:2611.25105v2 HTML 全文（83,418 字符）及 PDF 首页（23 页）、NVIDIA LPR Lab 官方项目页（research.nvidia.com/labs/lpr/mawam/，10,340 字符）完成全量穿透核查：13 位作者中 11 位署名 NVIDIA（横跨 Jan Kautz / Zhiding Yu 的 LPR Lab 与 Jim Fan / Johan Bjorck 的 GEAR Lab），仅 Xianzhe Fan / Hengshuang Zhao 兼署或署名香港大学（HKU）、Yecheng Wu 兼署 MIT，确认为 NVIDIA 主导的工业实验室联合成果而非纯高校学术论文；拆解了 4D RoPE 正单形身份编码、Action-to-Video Bias、两阶段训练、Table 1/2/3/7/8/9/11 全量定量消融，并定位出「推理期冻结未来帧几乎不损性能但删去未来 token 即归零」的共享工作区机理与 0.32 s H100 集中式推理边界；训练/部署代码与团队权重尚未开源及异构/触觉局限保留规范缺口。
- [《英伟达 VFlash：Jim Fan宣告“System-1视觉新时代”｜模型提速12倍》](../../blogs/%E8%8B%B1%E4%BC%9F%E8%BE%BE%20VFlash%EF%BC%9AJim%20Fan%E5%AE%A3%E5%91%8A%E2%80%9CSystem-1%E8%A7%86%E8%A7%89%E6%96%B0%E6%97%B6%E4%BB%A3%E2%80%9D%EF%BD%9C%E6%A8%A1%E5%9E%8B%E6%8F%90%E9%80%9F12%E5%80%8D.md)：完成一手信源追溯与深度分诊：获取 NVIDIA LPR / GEAR 实验室发布的《VFlash: Fast, Accurate Visual Planning via Flash Primitive Decoding》28页完整技术报告 PDF 与官方项目页，核查 NVlabs/Eagle GitHub 仓库开源状态；围绕用户关于“12倍视觉规划解码加速机制及与 VLA/VLM 对比”的提问完成逐页逐表拆解（明确 12x 解码加速 vs 5.1x 全流水线加速口径、对比 Qwen-Drive-1.0 与 Fast-dDrive 的端到端优势、以及免逐 token 验证整块接受+边界/位置对齐+537M 双向草稿器直接拟合真实几何标注超越 AR 底座 42.6% 的四大机制）；登记 NVIDIA GEAR Lab、NVIDIA LPR Lab、NVlabs、Jim Fan、Yu-Cheng Chou、Zhiding Yu 6 个发布主体入口并完成向上分组。

## 2. 收录文章与一手材料（Ingested Articles & Primary Sources）

### [MAWAM: A Multi-Agent World-Action Model for Coordinated Manipulation](../../blogs/MAWAM_%20A%20Multi-Agent%20World-Action%20Model%20for%20Coordinated%20Manipulation.md)

2026-11-18 · 来源：NVIDIA LPR Lab · NVIDIA GEAR Lab · HKU · MIT (arXiv:2611.25105v2) · 状态：有来源缺口

[单篇导读（blogs/）](../../blogs/MAWAM_%20A%20Multi-Agent%20World-Action%20Model%20for%20Coordinated%20Manipulation.md) · [微信原件](../../../../raw/8f1cb39900b03eb9c40d6b280d45b04215ada8fa19eb4759d907fc176ee5b4af) · 固定版本 `digest-material-8f1cb39900b03eb9c40d6b280d45b04215ada8fa19eb4759d907fc176ee5b4af@1`

> Every move in a robot team changes the world in which its teammates must act. Coordinated manipulation therefore calls for predicting the team's actions together with the physical future they jointly create.

> We introduce MAWAM, a multi-agent world-action model that jointly generates each robot's future views and executable action chunks in a single sample. Built from a pretrained single-robot world-action backbone, MAWAM jointly denoises all robots' action and future-view tokens through cross-agent attention, while preserving a separate control interface for each robot.

关联一手材料：

- MAWAM: A Multi-Agent World-Action Model for Coordinated Manipulation (arXiv:2611.25105v2 Full Paper)（NVIDIA LPR Lab · NVIDIA GEAR Lab · HKU · MIT）· [原站](https://arxiv.org/abs/2611.25105v2) · [本地原件](../../../../raw/385309e9c3c241bde580b041e37a9e84963f13a5ada1b77ea36563a156151813) · 版本 `digest-material-385309e9c3c241bde580b041e37a9e84963f13a5ada1b77ea36563a156151813@1`
  > Every move in a robot team changes the world in which its teammates must act. Coordinated manipulation therefore calls for predicting the team’s actions together with the physical future they jointly create. — 原文提取
- MAWAM Project Page — NVIDIA Learning and Perception Research（NVIDIA LPR Lab）· [原站](https://research.nvidia.com/labs/lpr/mawam/) · [本地原件](../../../../raw/7cffee416e66b435eb2aa788483d9b423cdfd05c0e4c37c9fac5d751b9e7bbd5) · 版本 `digest-material-7cffee416e66b435eb2aa788483d9b423cdfd05c0e4c37c9fac5d751b9e7bbd5@1`
  > From a pair of robots in the lab to teams in factories and homes. — 原文提取

### [英伟达 VFlash：Jim Fan宣告“System-1视觉新时代”｜模型提速12倍](../../blogs/%E8%8B%B1%E4%BC%9F%E8%BE%BE%20VFlash%EF%BC%9AJim%20Fan%E5%AE%A3%E5%91%8A%E2%80%9CSystem-1%E8%A7%86%E8%A7%89%E6%96%B0%E6%97%B6%E4%BB%A3%E2%80%9D%EF%BD%9C%E6%A8%A1%E5%9E%8B%E6%8F%90%E9%80%9F12%E5%80%8D.md)

2026-11-06 · 来源：NVIDIA LPR Lab · VFlash (Jim Fan) · 状态：有来源缺口

[单篇导读（blogs/）](../../blogs/%E8%8B%B1%E4%BC%9F%E8%BE%BE%20VFlash%EF%BC%9AJim%20Fan%E5%AE%A3%E5%91%8A%E2%80%9CSystem-1%E8%A7%86%E8%A7%89%E6%96%B0%E6%97%B6%E4%BB%A3%E2%80%9D%EF%BD%9C%E6%A8%A1%E5%9E%8B%E6%8F%90%E9%80%9F12%E5%80%8D.md) · [微信原件](../../../../raw/eb02a2476c3b0673ddb832d42bce73edafc6a2f38e22b56235a8412a06f461e0) · 固定版本 `digest-material-eb02a2476c3b0673ddb832d42bce73edafc6a2f38e22b56235a8412a06f461e0@1`

> 为什么重要 ： 机器人抓取物体、汽车规划行驶路线，都需要随着环境变化不断更新计划。视觉语言模型逐个生成坐标，会让更细致的规划伴随更长的等待。VFlash 压缩了感知与行动之间的这段计算时间，也回应了 Jim Fan 强调的方向：自主机器需要在自己的芯片上完成思考，让视觉能力跟上行动的节奏。

> 快速跟上 ： VFlash 利用的是几何输出已有的结构。Jim Fan 举例，在相应编码方式下，一个边界框占 6 个 token，一条包含 10 个路径点的机械臂轨迹占 54 个，输出格式可以提前确定。VFlash 先按任务指定长度和坐标布局，再让一个轻量模型一次并行预测完整结构。轨迹需要多少个点可以变化，确定结构后就能整体生成。

关联一手材料：

- VFlash: Fast, Accurate Visual Planning via Flash Primitive Decoding（Yu-Cheng Chou, Shihao Wang, Jin Huang, Linxi "Jim" Fan, Jan Kautz, Zhiding Yu et al. / NVIDIA, Johns Hopkins University, HKPolyU, Purdue, HKU）· [原站](https://research.nvidia.com/labs/lpr/vflash/) · [NotebookLM](https://notebook.google.com/notebook/33f0076b-fc09-42cc-9cd9-fecfb847ce1c) · [Drive](https://drive.google.com/file/d/1E-b3yha4VNic3TjQprqkAr_OKWb7Rzdu/view?usp=drivesdk) · 版本 `digest-material-4850e501621a8d3c5d234dacad88a714335f51f887decb795af7616286387b95@1`
  > Figure 1: VFlash is a generalist decoding framework for fast, accurate visual planning across Physical AI tasks such as robotics and autonomous driving. — PDF p.1


## 3. 关联实体网络（Verified Entity Ontology）

- ← [Zhiding Yu](../people/Zhiding%20Yu.md) · VFlash 视觉并行解码领衔（human_certified/verified）
- ← Xianzhe Fan · 任职 / 隶属（rule_verified/verified）
- → [The University of Hong Kong](../labs/The%20University%20of%20Hong%20Kong.md) · 合作 / 联合研发（rule_verified/verified）
- → [MIT](../labs/MIT.md) · 合作 / 联合研发（rule_verified/verified）
- → [NVIDIA GEAR Lab](../labs/NVIDIA%20GEAR%20Lab.md) · 合作 / 联合研发（rule_verified/verified）
