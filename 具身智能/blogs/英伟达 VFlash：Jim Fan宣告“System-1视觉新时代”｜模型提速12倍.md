---
title: "英伟达 VFlash：Jim Fan宣告“System-1视觉新时代”｜模型提速12倍"
type: blog_digest
sector: "具身智能"
source: "SourceMind"
published_at: "2026-11-06"
raw_sha256: "eb02a2476c3b0673ddb832d42bce73edafc6a2f38e22b56235a8412a06f461e0"
material_version: "digest-material-eb02a2476c3b0673ddb832d42bce73edafc6a2f38e22b56235a8412a06f461e0@1"
origin_url: "https://mp.weixin.qq.com/s/a_j25nEgDcX-MTTjG9ELkA"
user_comments: "这个蛮有趣的，实现约 12 倍的视觉规划解码加速，我感觉是不是比VFA和VLM快了，怎么做到进步这么快的"
status: "processed_with_gaps"
---

<a id="digest-eb02a2476c3b0673"></a>
# 英伟达 VFlash：Jim Fan宣告“System-1视觉新时代”｜模型提速12倍

2026-11-06 · SourceMind · 有来源缺口

[微信原文件](../../../raw/eb02a2476c3b0673ddb832d42bce73edafc6a2f38e22b56235a8412a06f461e0) · 固定材料版本 `digest-material-eb02a2476c3b0673ddb832d42bce73edafc6a2f38e22b56235a8412a06f461e0@1` · [原始链接](https://mp.weixin.qq.com/s/a_j25nEgDcX-MTTjG9ELkA)

> [!IMPORTANT]
> **用户关注点（TG）**：这个蛮有趣的，实现约 12 倍的视觉规划解码加速，我感觉是不是比VFA和VLM快了，怎么做到进步这么快的

## 针对性追查与回应

### 1. 定位与横向对比：它快在哪？跟 VLM / VLA / WAM 是什么关系？

在具身智能控制链路中，先区分三类角色：
- **VLM（视觉语言大模型，如 Qwen3-VL、Molmo）**：高层推理大脑，接收图像与指令生成子任务或空间几何规划；传统自回归（AR）逐 token 生成坐标，占端到端总延迟的 **75%–87%**。
- **VLA（端到端视觉-语言-动作模型，如 π0、π0.5、OpenVLA、Qwen-Drive）**：直接将视觉/语言映射到低层连续动作或轨迹。
- **WAM（世界动作模型，如 Cosmos-Predict2.5）/ 动作扩散头（如 PIv3 DiT）**：高频底层控制器（一次生成 20 步动作块，每 3 个动作块即 60 步向高层请求一次重规划）。

**VFlash 并非替代底层控制器（VLA / WAM）**，而是面向高层具身 VLM 的**通用并行解码加速框架（Flash Primitive Decoding, FPD）**，打通 `ViT 视觉编码 → VLM Prefill → VLM + VFlash 并行视觉规划解码 → 下游 WAM/DiT 动作控制` 中最慢的一环（[论文 PDF](../../../raw/4850e501621a8d3c5d234dacad88a714335f51f887decb795af7616286387b95) p.8–9 §3.2–3.3, p.26 Table 11）：

#### （1）机器人操作：与端到端 VLA、自回归 VLM 及世界模型（WAM）横向对比（MolmoSpaces）

| 模型架构类别 | 代表模型 / 配置 | 解码与推理机制 | Jetson Thor 规划解码耗时 | Thor 全流水线总耗时（频率） | MolmoSpaces 平均成功率 | 抓取并放置 (Pick & Place) | 关门 (Close) |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **纯端到端 VLA** | π0 DROID (Physical Intelligence) | 连续动作流匹配 / 扩散 | — | 高频执行 | 23.2% | 12.5% | 53.1% |
| **纯端到端 VLA** | π0-FAST DROID | 自回归离散动作 token | — | 高频执行 | 20.7% | 11.0% | 38.6% |
| **升级版 VLA** | π0.5 DROID | 视觉-语言-动作联合表征 | — | 高频执行 | 34.5% | 13.6% | 65.1% |
| **强化学习 VLA** | PrimeR0 (Lumos Robotics) | 强化学习后训练策略 | — | — | 60.3% | 54.6% | 81.3% |
| **纯世界动作模型** | Cosmos-Predict2.5 WAM (Baseline) | 仅靠原生语言编码器条件化 | — (无视觉规划) | 339.8 ms (仅动作) | 62.6% | 55.7% | 64.2% |
| **AR VLM + WAM** | Qwen3-4B (自回归) + WAM | 逐 Token 自回归生成 2D+3D 轨迹 | 3,107.6 ms | 3,552.7 ms (0.28 Hz) | **61.0% (负优化)** | 50.4% | 82.4% |
| **投机解码 + WAM** | DFlash (Token 级校验) + WAM | 块扩散投机解码（逐 token 强校验） | 1,383.3 ms | 1,828.5 ms (0.55 Hz) | 61.0% | 50.4% | 82.4% |
| **VFlash + WAM (本文)** | **Qwen3-4B (VFlash FPD) + WAM** | **几何图元单步无验证并行生成** | **258.2 ms (12.0×)** | **703.3 ms (5.1×, 1.42 Hz)** | **70.2% (+7.6%)** | **67.3% (+11.6%)** | **77.0% (+12.8%)** |

> **关键发现**：① 纯端到端 VLA（如 π0.5 仅 `34.5%`）在长程复合任务（Pick & Place `13.6%`）中缺乏高层空间轨迹指引；② 给 WAM 喂入**传统自回归 VLM** 生成的轨迹，成功率反而从 `62.6%` 倒退至 `61.0%`（自回归首点偏差引发连锁几何漂移，“毒化”了底层动作模型）；③ 换用 **VFlash** 后，不仅 Thor 解码提速 **12.0×**、整机流水线提速 **5.1×（3.55s → 0.70s）**，还因轨迹更准把 WAM 成功率拉升至 **70.2%**（超越开源 SOTA PrimeR0 达 9.9 个百分点）。

#### （2）自动驾驶与 3D 稠密运动：对比推理型驾驶 VLA 与块扩散模型

| 评测基准与硬件 | 对比基线（AR VLM / 推理型 VLA / 块扩散） | VFlash 表现 | 加速比与指标对比（出处） |
| :--- | :--- | :--- | :--- |
| **自动驾驶端到端规划**<br/>（NAVSIM 36 tokens / Waymo 84 tokens, **Jetson Thor & H100**） | • **AR VLM 解码**（Thor Waymo）：3,254.0 ms<br/>• **Qwen-Drive-1.0**（Qwen3.5-4B + 1.04B Flow-Matching 规划头，Thor 端到端）：1,310.6 ms / 1,381.3 ms<br/>• **Fast-dDrive**（块扩散 VLM，H100 Waymo 端到端）：665.0 ms | • **VFlash 解码**（Thor Waymo）：**78.3 ms**<br/>• **Thor 端到端总延迟**：**534.4 ms**（NAVSIM）/ **774.0 ms**（Waymo）<br/>• **H100 Waymo 端到端**：**136.6 ms** | • 解码阶段比 AR 快 **19–49×**（Thor 41.6×，Spark 48.8×）<br/>• 端到端比 **Qwen-Drive-1.0** 快 **1.8–2.5×**，比 **Fast-dDrive** 快 **4.9×**<br/>• NAVSIM PDMS **90.7**（持平 Qwen-Drive-1.0-RL），Waymo RFS **7.86**（优于 Fast-dDrive 7.82，p.9 Table 8, p.24 Fig.5） |
| **3D 稠密点运动预测**<br/>（PointMotionBench, **H100**） | • **MolmoMotion-AR 4B**：单次 rollout 79.8–99.6 s | • **VFlash**：单次 rollout **3.21–3.86 s** | • 提速 **23.5–26.4×**（p.7 Table 5, p.27 App.F.3） |

---

### 2. 机制拆解：怎么做到进步这么快，且 3D 轨迹误差反而比原模型降了 42.6%？

核心是 **Flash Primitive Decoding（FPD）** 架构（PDF p.3–5 §2, p.18–21 App.A–C），将视觉规划从“用钢笔逐字写坐标、落笔无悔（System-2 串行自回归）”改造为“按固定几何模板一次并行落盘（System-1 空间直觉）”：

```text
[任务指令与多目图像]
         │
         ▼
[目标 VLM: 冻结 Qwen3-4B] ─── (提取第 1, 9, 17, 25, 33 层特征拼接 → 降维至 2,560 维 + RMSNorm)
         │                                               │
         ▼                                               ▼
[结构化工具调用 Tool Calling]                   [浅层非因果双向草稿器 Drafter]
 声明图元类型与块长度 B(s) (如 54 tokens)          (5 层全宽双向 Transformer, 537M 参数)
 提前锁定槽位角色 (边界对齐 + 位置对齐)                    │
         │                                               │
         └───────────────────────┬───────────────────────┘
                                 ▼
                      【单次双向并行前向预测】
                      1 次 Drafter 前向 (12.9 ms) 填满整条轨迹 B(s) 个坐标槽位
                                 │
                                 ▼
                      【零开销合法词表掩码 + Schema 几何校验】
                                 │
                    ┌────────────┴────────────┐
              [校验通过]                 [极罕见异常/密集框低置信]
                    │                         │
                    ▼                         ▼
          【直接整块接受 Commit】         【回退受限 AR 生成】
          (跳过目标模型逐 token 比对!)
                    │
                    ▼
      [目标 VLM 1 次前向 (68.4 ms) 更新 KV 缓存并提取规划隐状态]
                    │
                    ▼
      [下游策略 WAM / PIv3 DiT 通过交叉注意力读取规划特征生成动作]
```

1. **打破投机解码在连续几何空间的「验证坍塌（Verification Collapse）」死结 —— 免逐 Token 比对、单次整块接受**：
   - 为什么之前的投机解码（如 DFlash，或专门针对 OpenVLA 的 Spec-VLA）提速有限？因为标准投机解码要求草稿 token 与 AR 目标模型输出逐 token 一致。但在连续坐标空间里，哪怕第 1 个路径点坐标只差了 1 个量化 bin（例如 `<523>` vs `<524>`，物理上仅 **1 cm** 偏差，对机器人完全可用），验证公式（Eq.2）也会判定 mismatch 并直接作废后面所有预测出的轨迹点！结果 DFlash 在轨迹段每轮只能接受 **2.2 个 token**、被迫跑 29.5 轮（Spec-VLA 也只有 2.10–2.94 个，见 p.10 §3.3, p.26 Table 12）。
   - VFlash 提出核心洞见：**空间几何准确性根本不需要复现 AR 模型的逐 token 序列**。它对文本子任务仍保留 16-token 块投机验证，但对视觉图元**直接跳过逐 token 验证**，只要满足语法和几何范围合法（Eq.5），**1 次前向直接整块提交全部 53 个轨迹 token**（仅需 1 次 Drafter 前向 `12.9 ms` + 1 次 Target 预填充 `68.4 ms`，将 $O(B(s))$ 次串行解码压成 $O(1)$ 次）。
2. **边界对齐（Boundary Alignment）+ 结构化 Tool Call 预先声明长度**：
   - 解码前先通过工具调用（如 `{"name":"atomic_decoding","arguments":{"block_size":54}}`）显式声明完整几何图元的 token 长度（p.18 Table 9：单臂 10 个 2D+3D 路径点固定为 $5P+4=54$ tokens，双臂为 $10P+8$），避免固定窗口把一条轨迹拦腰切断，让草稿器在单个块内看到整条轨迹的首尾物理约束。
3. **位置对齐（Position Alignment）与零开销词表掩码**：
   - 引入 1,001 个专用坐标 token（`<0>..<1000>`，将相机系 $[-5,5]\times[-5,5]\times[0,10]\text{ m}$ 量化为 1 cm 网格）及 `<oof>` 标记；对纯文本模型则用「符号+5位定宽数字+mask补齐」。解码前每个槽位是第几个点的 $x/y/z$ 还是分隔符完全锁死，推理时直接在 logits 上掩码非法词表（零额外神经计算开销）。
4. **537M 双向非因果草稿器（Drafter）直接拟合真实几何标注（为什么精度反超 4B AR 底座）**：
   - 底座是冻结的 MoonViT-SO-400M + Qwen3-4B（36层），草稿器是一个 **5 层双向注意力 Transformer（537M 参数，读取底座第 1/9/17/25/33 层特征）**。
   - 关键在于：它**不用知识蒸馏去模仿 4B AR 模型的输出**，而是**直接用 Ground-Truth 真实几何标注训练（Eq.4）**！自回归模型生成 2D+3D 联合轨迹时，先生成的 2D 坐标误差会污染上下文，导致 3D 误差比纯 3D 模式恶化 15%–51%；而 VFlash 的双向注意力草稿器同时联合优化整条轨迹的所有路径点，因此在 InternA1 / AgiBot / MolmoBot 9 组实验上，**3D 轨迹平均位移误差（ADE）比原 4B AR 模型平均降低 42.6%（最高在 AgiBot 上从 10.5 cm 降至 4.1 cm，降幅 61.0%，5 cm 内达标率从 39.8% 跃升至 73.9%，p.6 Table 4）**。

---

### 3. 假设边界与你需要注意的局限

- **阿姆达尔定律约束**：`12×–49×` 是 **VLM 解码子阶段** 的提速；算上 ViT 编码和下游动作模型（Thor 上 Cosmos WAM 本身耗时 `339.8 ms`），**全模型流水线端到端提速是 2.6×–5.7×**（且论文评测中声明长度的 Tool-Call JSON 为预置输入，未计入相机 I/O 与反 token 化耗时，见 p.24–25 App.E.1）。
- **分辨率与密集框回退**：3D 空间是 `1 cm` 粗网格，适合 System-1 视觉粗轨迹引导，毫米级插拔/力控仍靠下游动作头；且在 2D 密集框检测（Dense200）中，若关掉置信度守卫与 AR 回退，F1 会从 `61.78%` 跌到 `39.09%`，高精 `F1@0.95` 仍低于纯 AR（`12.11%` vs `16.95%`，p.6 Table 3）。
- **代码尚未真正开源、真机闭环待核**：论文指向的 GitHub（`NVlabs/Eagle/tree/main/Embodied`）经核查目前只有前序工作 LocateAnything，VFlash 的模型权重和定制 `TensorRT-Edge-LLM` C++ 插件尚未上传；下游控制实验均为仿真/离线基准。

---

## 原文摘录与一手信源存证

> 为什么重要 ： 机器人抓取物体、汽车规划行驶路线，都需要随着环境变化不断更新计划。视觉语言模型逐个生成坐标，会让更细致的规划伴随更长的等待。VFlash 压缩了感知与行动之间的这段计算时间，也回应了 Jim Fan 强调的方向：自主机器需要在自己的芯片上完成思考，让视觉能力跟上行动的节奏。
> — 原文摘录，文字段落 1；证据 `digest-material-eb02a2476c3b0673ddb832d42bce73edafc6a2f38e22b56235a8412a06f461e0-excerpt-1@1`

> 快速跟上 ： VFlash 利用的是几何输出已有的结构。Jim Fan 举例，在相应编码方式下，一个边界框占 6 个 token，一条包含 10 个路径点的机械臂轨迹占 54 个，输出格式可以提前确定。VFlash 先按任务指定长度和坐标布局，再让一个轻量模型一次并行预测完整结构。轨迹需要多少个点可以变化，确定结构后就能整体生成。
> — 原文摘录，文字段落 2；证据 `digest-material-eb02a2476c3b0673ddb832d42bce73edafc6a2f38e22b56235a8412a06f461e0-excerpt-2@1`

> 看结果 ： 在 Jetson Thor 上的 MolmoSpaces 机器人测试中，模型推理流水线耗时从约 3.55 秒降至 0.70 秒，速度达到原来的约 5.1 倍。精度也有所提升：在三套机器人数据、三种目标模型配置上，3D 轨迹平均位移误差平均降低 42.6%，最高降幅达到 61%。
> — 原文摘录，文字段落 3；证据 `digest-material-eb02a2476c3b0673ddb832d42bce73edafc6a2f38e22b56235a8412a06f461e0-excerpt-3@1`

一手材料：

- **VFlash: Fast, Accurate Visual Planning via Flash Primitive Decoding** · Yu-Cheng Chou, Shihao Wang, Jin Huang, Linxi "Jim" Fan, Jan Kautz, Zhiding Yu et al. / NVIDIA, Johns Hopkins University, HKPolyU, Purdue, HKU · [原站](https://research.nvidia.com/labs/lpr/vflash/) · [主体档案：NVIDIA GEAR Lab](../entities/labs/NVIDIA%20GEAR%20Lab.md) / [主体档案：NVIDIA LPR Lab](../entities/labs/NVIDIA%20LPR%20Lab.md) / [主体档案：NVlabs](../entities/labs/NVlabs.md) · [NotebookLM](https://notebook.google.com/notebook/33f0076b-fc09-42cc-9cd9-fecfb847ce1c) · [Drive](https://drive.google.com/file/d/1E-b3yha4VNic3TjQprqkAr_OKWb7Rzdu/view?usp=drivesdk)
  材料版本 `digest-material-4850e501621a8d3c5d234dacad88a714335f51f887decb795af7616286387b95@1`；获取方式 `http_pdf_download`。
  > Figure 1: VFlash is a generalist decoding framework for fast, accurate visual planning across Physical AI tasks such as robotics and autonomous driving. — PDF p.1
  > Models for physical AI tasks, such as robotics and autonomous driving, need not reason solely in language. They can use visual plans—points, bounding boxes, and trajectories—to represent spatial goals and anticipate motion. — PDF p.1

归属与范围：完成一手信源追溯与深度分诊：获取 NVIDIA LPR / GEAR 实验室发布的《VFlash: Fast, Accurate Visual Planning via Flash Primitive Decoding》28页完整技术报告 PDF 与官方项目页，核查 NVlabs/Eagle GitHub 仓库开源状态；围绕用户关于“12倍视觉规划解码加速机制及与 VLA/VLM 对比”的提问完成逐页逐表拆解（明确 12x 解码加速 vs 5.1x 全流水线加速口径、对比 Qwen-Drive-1.0 与 Fast-dDrive 的端到端优势、以及免逐 token 验证整块接受+边界/位置对齐+537M 双向草稿器直接拟合真实几何标注超越 AR 底座 42.6% 的四大机制）；登记 NVIDIA GEAR Lab、NVIDIA LPR Lab、NVlabs、Jim Fan、Yu-Cheng Chou、Zhiding Yu 6 个发布主体入口并完成向上分组。

来源缺口：

- `unavailable`：论文与项目页指向的 GitHub 代码入口（https://github.com/NVlabs/Eagle/tree/main/Embodied）经核查目前仅包含前序工作 LocateAnything（ECCV 2026）及 nvidia/LocateAnything-3B 权重，VFlash 的 4B 具身底座权重、537M 扩散草稿器（Drafter）权重、训练配方脚本以及定制修改的 TensorRT-Edge-LLM 0.9.0/0.10.1 C++ 运行时插件尚未正式上传开源。 [线索](https://github.com/NVlabs/Eagle/tree/main/Embodied)
- `pending_verification`：VFlash 报告的 12–49 倍加速仅针对 VLM 解码子阶段（计入 ViT、Prefill 与下游动作头后模型流水线整体提速为 2.6–5.7 倍，且评测中声明长度的 Tool-Call JSON 为预置提供、不含相机 I/O 与反 token 化耗时）；同时其 1 cm 空间量化网格（\[-5,5\]×\[-5,5\]×\[0,10\] m 内 1,001 个 bin）下的下游控制实验（MolmoSpaces、LIBERO-PRO、NAVSIM、Waymo）均在仿真器或离线数据集上完成，在真实物理机器人接触密集型任务与实车闭环控制中的鲁棒性有待跨本体真机独立验证。

[返回赛道总览](../赛道总览.md#digest-eb02a2476c3b0673) · [返回导读索引](README.md) · [主体档案库](../entities/README.md)
