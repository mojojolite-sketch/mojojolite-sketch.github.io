# NVlabs

[返回主体档案库](../README.md) · [返回赛道总览](../../赛道总览.md) · [单篇导读索引](../../blogs/README.md)

- **主体类别**：🏛️ 实验室、高校与机构平台 (Labs & Institutions)
- **核心定位与说明**：• 英伟达研究院（NVIDIA Research）官方GitHub开源组织。 • 托管Eagle具身VLM、LocateAnything及视觉基础模型代码。
- **关联账号与官方入口**：
  - **GitHub**（NVlabs）：[账号主页](https://github.com/NVlabs) · 登记对象 `digest-publisher-5226ca8c51961b39af6867ab` — • 英伟达研究院（NVIDIA Research）官方GitHub开源组织。 • 托管Eagle具身VLM、LocateAnything及视觉基础模型代码。

## 1. 核心研究问题与待核查争议（Questions & Open Debates）

### 💬 追问：这个蛮有趣的，实现约 12 倍的视觉规划解码加速，我感觉是不是比VFA和VLM快了，怎么做到进步这么快的

关联文章：[《英伟达 VFlash：Jim Fan宣告“System-1视觉新时代”｜模型提速12倍》](../../blogs/%E8%8B%B1%E4%BC%9F%E8%BE%BE%20VFlash%EF%BC%9AJim%20Fan%E5%AE%A3%E5%91%8A%E2%80%9CSystem-1%E8%A7%86%E8%A7%89%E6%96%B0%E6%97%B6%E4%BB%A3%E2%80%9D%EF%BD%9C%E6%A8%A1%E5%9E%8B%E6%8F%90%E9%80%9F12%E5%80%8D.md)

> **追查结论摘要**：在具身智能控制链路中，先区分三类角色：

### 🔍 待核查缺口与证据边界（Open Gaps）

- `unavailable`：论文与项目页指向的 GitHub 代码入口（https://github.com/NVlabs/Eagle/tree/main/Embodied）经核查目前仅包含前序工作 LocateAnything（ECCV 2026）及 nvidia/LocateAnything-3B 权重，VFlash 的 4B 具身底座权重、537M 扩散草稿器（Drafter）权重、训练配方脚本以及定制修改的 TensorRT-Edge-LLM 0.9.0/0.10.1 C++ 运行时插件尚未正式上传开源。 [线索](https://github.com/NVlabs/Eagle/tree/main/Embodied)（关联：[《英伟达 VFlash：Jim Fan宣告“System-1视觉新时代”｜模型提速12倍》](../../blogs/%E8%8B%B1%E4%BC%9F%E8%BE%BE%20VFlash%EF%BC%9AJim%20Fan%E5%AE%A3%E5%91%8A%E2%80%9CSystem-1%E8%A7%86%E8%A7%89%E6%96%B0%E6%97%B6%E4%BB%A3%E2%80%9D%EF%BD%9C%E6%A8%A1%E5%9E%8B%E6%8F%90%E9%80%9F12%E5%80%8D.md)）
- `pending_verification`：VFlash 报告的 12–49 倍加速仅针对 VLM 解码子阶段（计入 ViT、Prefill 与下游动作头后模型流水线整体提速为 2.6–5.7 倍，且评测中声明长度的 Tool-Call JSON 为预置提供、不含相机 I/O 与反 token 化耗时）；同时其 1 cm 空间量化网格（\[-5,5\]×\[-5,5\]×\[0,10\] m 内 1,001 个 bin）下的下游控制实验（MolmoSpaces、LIBERO-PRO、NAVSIM、Waymo）均在仿真器或离线数据集上完成，在真实物理机器人接触密集型任务与实车闭环控制中的鲁棒性有待跨本体真机独立验证。（关联：[《英伟达 VFlash：Jim Fan宣告“System-1视觉新时代”｜模型提速12倍》](../../blogs/%E8%8B%B1%E4%BC%9F%E8%BE%BE%20VFlash%EF%BC%9AJim%20Fan%E5%AE%A3%E5%91%8A%E2%80%9CSystem-1%E8%A7%86%E8%A7%89%E6%96%B0%E6%97%B6%E4%BB%A3%E2%80%9D%EF%BD%9C%E6%A8%A1%E5%9E%8B%E6%8F%90%E9%80%9F12%E5%80%8D.md)）

- **[《英伟达 VFlash：Jim Fan宣告“System-1视觉新时代”｜模型提速12倍》](../../blogs/%E8%8B%B1%E4%BC%9F%E8%BE%BE%20VFlash%EF%BC%9AJim%20Fan%E5%AE%A3%E5%91%8A%E2%80%9CSystem-1%E8%A7%86%E8%A7%89%E6%96%B0%E6%97%B6%E4%BB%A3%E2%80%9D%EF%BD%9C%E6%A8%A1%E5%9E%8B%E6%8F%90%E9%80%9F12%E5%80%8D.md)**：完成一手信源追溯与深度分诊：获取 NVIDIA LPR / GEAR 实验室发布的《VFlash: Fast, Accurate Visual Planning via Flash Primitive Decoding》28页完整技术报告 PDF 与官方项目页，核查 NVlabs/Eagle GitHub 仓库开源状态；围绕用户关于“12倍视觉规划解码加速机制及与 VLA/VLM 对比”的提问完成逐页逐表拆解（明确 12x 解码加速 vs 5.1x 全流水线加速口径、对比 Qwen-Drive-1.0 与 Fast-dDrive 的端到端优势、以及免逐 token 验证整块接受+边界/位置对齐+537M 双向草稿器直接拟合真实几何标注超越 AR 底座 42.6% 的四大机制）；登记 NVIDIA GEAR Lab、NVIDIA LPR Lab、NVlabs、Jim Fan、Yu-Cheng Chou、Zhiding Yu 6 个发布主体入口并完成向上分组。

## 2. 收录文章与一手材料（Ingested Articles & Primary Sources）

### [英伟达 VFlash：Jim Fan宣告“System-1视觉新时代”｜模型提速12倍](../../blogs/%E8%8B%B1%E4%BC%9F%E8%BE%BE%20VFlash%EF%BC%9AJim%20Fan%E5%AE%A3%E5%91%8A%E2%80%9CSystem-1%E8%A7%86%E8%A7%89%E6%96%B0%E6%97%B6%E4%BB%A3%E2%80%9D%EF%BD%9C%E6%A8%A1%E5%9E%8B%E6%8F%90%E9%80%9F12%E5%80%8D.md)

2026-11-06 · 来源：SourceMind · 状态：有来源缺口

[单篇导读（blogs/）](../../blogs/%E8%8B%B1%E4%BC%9F%E8%BE%BE%20VFlash%EF%BC%9AJim%20Fan%E5%AE%A3%E5%91%8A%E2%80%9CSystem-1%E8%A7%86%E8%A7%89%E6%96%B0%E6%97%B6%E4%BB%A3%E2%80%9D%EF%BD%9C%E6%A8%A1%E5%9E%8B%E6%8F%90%E9%80%9F12%E5%80%8D.md) · [微信原件](../../../../raw/eb02a2476c3b0673ddb832d42bce73edafc6a2f38e22b56235a8412a06f461e0) · 固定版本 `digest-material-eb02a2476c3b0673ddb832d42bce73edafc6a2f38e22b56235a8412a06f461e0@1`

> 为什么重要 ： 机器人抓取物体、汽车规划行驶路线，都需要随着环境变化不断更新计划。视觉语言模型逐个生成坐标，会让更细致的规划伴随更长的等待。VFlash 压缩了感知与行动之间的这段计算时间，也回应了 Jim Fan 强调的方向：自主机器需要在自己的芯片上完成思考，让视觉能力跟上行动的节奏。

> 快速跟上 ： VFlash 利用的是几何输出已有的结构。Jim Fan 举例，在相应编码方式下，一个边界框占 6 个 token，一条包含 10 个路径点的机械臂轨迹占 54 个，输出格式可以提前确定。VFlash 先按任务指定长度和坐标布局，再让一个轻量模型一次并行预测完整结构。轨迹需要多少个点可以变化，确定结构后就能整体生成。

关联一手材料：

- **VFlash: Fast, Accurate Visual Planning via Flash Primitive Decoding**（Yu-Cheng Chou, Shihao Wang, Jin Huang, Linxi "Jim" Fan, Jan Kautz, Zhiding Yu et al. / NVIDIA, Johns Hopkins University, HKPolyU, Purdue, HKU）· [原站](https://research.nvidia.com/labs/lpr/vflash/) · [NotebookLM](https://notebook.google.com/notebook/33f0076b-fc09-42cc-9cd9-fecfb847ce1c) · [Drive](https://drive.google.com/file/d/1E-b3yha4VNic3TjQprqkAr_OKWb7Rzdu/view?usp=drivesdk) · 版本 `digest-material-4850e501621a8d3c5d234dacad88a714335f51f887decb795af7616286387b95@1`
  > Figure 1: VFlash is a generalist decoding framework for fast, accurate visual planning across Physical AI tasks such as robotics and autonomous driving. — PDF p.1
