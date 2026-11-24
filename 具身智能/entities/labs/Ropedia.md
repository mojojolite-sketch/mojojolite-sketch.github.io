# Ropedia

[返回主体档案库](../README.md) · [返回赛道总览](../../赛道总览.md) · [单篇导读索引](../../blogs/README.md)

- 主体类别：🏛️ 实验室、高校与机构平台 (Labs & Institutions)
- 核心定位与说明：Ropedia Research Team 主体。
- 关联账号与官方入口：
  - Official Website（Ropedia）：[机构／作者主页](https://ropedia.com/) · 登记对象 `digest-publisher-d11666db6bc2a41ee4ccf72c` — Ropedia Research Team 主体。

## 1. 核心研究问题与待核查争议（Questions & Open Debates）

### 🔍 待核查缺口与证据边界（Open Gaps）

- `not_disclosed`：Hugging Face 首期（Batch 1）仅上线 126 / 1,589 场景（约 1.07 TB）且扫描与录制文件坐标系尚未预合并，余下约 1,463 个场景上线排期、商业授权报价及基于 Xperience 2 训练真机策略的成功率增益消融均未公开。 [线索](https://huggingface.co/datasets/ropedia-ai/Ropedia-Xperience-2)（关联：[《Ropedia Xperience 2发布：下一代具身数据金标准》](../../blogs/Ropedia%20Xperience%202%E5%8F%91%E5%B8%83%EF%BC%9A%E4%B8%8B%E4%B8%80%E4%BB%A3%E5%85%B7%E8%BA%AB%E6%95%B0%E6%8D%AE%E9%87%91%E6%A0%87%E5%87%86.md)）
- `conflict`：中文官微稿件将 500 题空间推理榜首 74.2% 写作 Gemini 3.8 Flash，与英文研究主页 ropedia.com/xperience/2-research/ 明确标注的 Gemini-2.5-Pro 存在型号不一致；且已有同题英文主稿（504378c6）在库，需避免重复建档。 [线索](https://ropedia.com/xperience/2-research/)（关联：[《Ropedia Xperience 2发布：下一代具身数据金标准》](../../blogs/Ropedia%20Xperience%202%E5%8F%91%E5%B8%83%EF%BC%9A%E4%B8%8B%E4%B8%80%E4%BB%A3%E5%85%B7%E8%BA%AB%E6%95%B0%E6%8D%AE%E9%87%91%E6%A0%87%E5%87%86.md)）
- `unavailable`：论文披露的项目主页（ropedia.com/xperience/2-research/）、GitHub 代码库（github.com/Ropedia/Ropedia-Xperience-2.git）与 Hugging Face 数据集（huggingface.co/datasets/ropedia-ai/Ropedia-Xperience-2）本次仅完成 arXiv 论文全文提取，未单独拉取项目页动态视频及数据集原始压缩包验证。 [线索](https://ropedia.com/xperience/2-research/)（关联：[《Ropedia Xperience 2: A Gold Standard for Scaling Physical AI Environments and Behaviors》](../../blogs/Ropedia%20Xperience%202_%20A%20Gold%20Standard%20for%20Scaling%20Physical%20AI%20Environments%20and%20Behaviors.md)）
- `not_disclosed`：论文未公开 Ropedia HOMIE Gen2 头戴四目系统与 HESAI KOSMO 手持扫描仪的硬件 BOM 成本、单场景平均扫描与清场耗时（分钟）、单小时可用训练数据总成本（\$/hour），亦未报告 4,230 条 HOMIE 录制经 Scan–HOMIE Registration 后的总体 PASS/WEAK/FAIL 通过率分布。 [线索](https://arxiv.org/abs/2611.17060)（关联：[《Ropedia Xperience 2: A Gold Standard for Scaling Physical AI Environments and Behaviors》](../../blogs/Ropedia%20Xperience%202_%20A%20Gold%20Standard%20for%20Scaling%20Physical%20AI%20Environments%20and%20Behaviors.md)）
- `not_disclosed`：论文 Section 5.2 展示了 Real-to-Sim、Human-Robot Retargeting、Virtual Teleoperation 与 Long-Horizon Trajectory Generation 的单场景闭环可行性，但尚未给出基于该批合成/重定向轨迹训练 VLA 或 WAM 策略在真实物理机器人上的成功率消融对比。 [线索](https://arxiv.org/abs/2611.17060)（关联：[《Ropedia Xperience 2: A Gold Standard for Scaling Physical AI Environments and Behaviors》](../../blogs/Ropedia%20Xperience%202_%20A%20Gold%20Standard%20for%20Scaling%20Physical%20AI%20Environments%20and%20Behaviors.md)）

- [《Ropedia Xperience 2发布：下一代具身数据金标准》](../../blogs/Ropedia%20Xperience%202%E5%8F%91%E5%B8%83%EF%BC%9A%E4%B8%8B%E4%B8%80%E4%BB%A3%E5%85%B7%E8%BA%AB%E6%95%B0%E6%8D%AE%E9%87%91%E6%A0%87%E5%87%86.md)：已穿透并实际抓回此前 arXiv 单篇入库时缺失的三大官方一手入口：ropedia.com/xperience/2-research/ 交互研究页、github.com/Ropedia/Ropedia-Xperience-2（Apache-2.0 配准 CLI）与 huggingface.co/datasets/ropedia-ai/Ropedia-Xperience-2（Batch 1 仅上线 126 场景 / 1.07 TB、CC BY-NC 4.0 协议且扫描与录制坐标系尚未在文件层合并），同时交叉核验 arXiv:2611.17060 与库内 Maxinsights / 2027 具身数据调研，暴露中文官微把 Gemini-2.5-Pro 改写为 Gemini 3.8 Flash 等口径偏差。
- [《Ropedia Xperience 2: A Gold Standard for Scaling Physical AI Environments and Behaviors》](../../blogs/Ropedia%20Xperience%202_%20A%20Gold%20Standard%20for%20Scaling%20Physical%20AI%20Environments%20and%20Behaviors.md)：归属与范围：已拉取 arXiv:2611.17060（2026-11-12 提交）HTML 全文与摘要元信息并入库本地原件，完整还原双设备硬件规格、50 µs 同步与 Umeyama 场景配准流水线、1,589 个释放扫描质量分布、三大空间基准（SpatialBench 几何/3D 目标检测/MMSI-Bench 空间推理）与四条机器人复用链路（Real-to-Sim、Human-Robot Retargeting、Virtual Teleoperation、Long-Horizon Trajectory Generation），并与本库已归档 Maxinsights 工程文献（Beyond 1M Hours 与 MaxSLAM）完成第一性原理路线对照。

## 2. 阅读笔记与原文 Highlight（Reading Highlights & Marginalia）

### 🖍️ 摘录与批注：《Ropedia Xperience 2: A Gold Standard f…》（1 条）

关联文章：[《Ropedia Xperience 2: A Gold Standard for Scaling Physical AI Environments and Behaviors》](../../blogs/Ropedia%20Xperience%202_%20A%20Gold%20Standard%20for%20Scaling%20Physical%20AI%20Environments%20and%20Behaviors.md)

- 这篇感觉很吊，可以和Maxinsight的工程文做个对比，看看双方的路线定义和取舍

> 导读核心结论：核心结论与路线分野：arXiv:2611.17060《Ropedia Xperience 2: A Gold Standard for Scaling Physical AI Environments and Behaviors》（2026-11-12 提交）由 Ropedia Research Team（Project Leads：Hao Li、Zhaoxi Chen、Fangzhou Hong；Advisor：Ziwei Liu）发布，将物理 AI 扩展命题从纯人类视频推…


## 3. 收录文章与一手材料（Ingested Articles & Primary Sources）

### [Ropedia Xperience 2发布：下一代具身数据金标准](../../blogs/Ropedia%20Xperience%202%E5%8F%91%E5%B8%83%EF%BC%9A%E4%B8%8B%E4%B8%80%E4%BB%A3%E5%85%B7%E8%BA%AB%E6%95%B0%E6%8D%AE%E9%87%91%E6%A0%87%E5%87%86.md)

2026-11-13 · 来源：Ropedia Official Release · GitHub & HuggingFace (arXiv:2611.17060) · 状态：有来源缺口

[单篇导读（blogs/）](../../blogs/Ropedia%20Xperience%202%E5%8F%91%E5%B8%83%EF%BC%9A%E4%B8%8B%E4%B8%80%E4%BB%A3%E5%85%B7%E8%BA%AB%E6%95%B0%E6%8D%AE%E9%87%91%E6%A0%87%E5%87%86.md) · [微信原件](../../../../raw/4868b8ab971fb4a3f92a278744162fbb8054fb9fa2632882c21e7399d72fd0e4) · 固定版本 `digest-material-4868b8ab971fb4a3f92a278744162fbb8054fb9fa2632882c21e7399d72fd0e4@1`

> 当前发布的1,589个场景覆盖12类真实空间，其中住宅内部场景有1,389个，占87.4%；卧室和客厅合计976个，占61.4%。整体采集共覆盖596处地点，其中443处为整户住宅（地点数量采用整体采集统计，与本次发布的场景数量分别计算）。

> 表现最好的模型Boxer，AP@0.25为24.69%，AP@0.5为6.09%。真实环境中的精确定位仍然困难，也凸显了更多开放真实场景数据的需求：让训练与评测覆盖更广泛的布局、遮挡和物体差异，并为模型提供可靠的三维标注。

关联一手材料：

- Ropedia Xperience 2 — Official Interactive Research Page（Ropedia Research Team）· [原站](https://ropedia.com/xperience/2-research/) · [本地原件](../../../../raw/3106c503f6f51969a3ccab053ffa8996ff355bed3dcfabd519cfde5f8cb987a2) · 版本 `digest-material-3106c503f6f51969a3ccab053ffa8996ff355bed3dcfabd519cfde5f8cb987a2@1`
  > A handheld LiDAR scanner captures the whole space in one pass, in 3D and at metric scale. — 原文提取
- Ropedia Xperience 2: A Gold Standard for Scaling Physical AI Environments and Behaviors（Ropedia Research Team）· [原站](https://arxiv.org/abs/2611.17060) · [本地原件](../../../../raw/504378c6e2ed064fddeeac5b30f3574a8affa418723dcb5dc581ac8104cf7ff0) · 版本 `digest-material-504378c6e2ed064fddeeac5b30f3574a8affa418723dcb5dc581ac8104cf7ff0@2`
  > Large foundation models such as GPT-6 Astra and Claude Fable 5.1 have recently been shown to control robots directly from visual observations. They nevertheless remain brittle on long-horizon, contact-rich tasks in real-world environments. Further progress depends on two complementary resources: demonstrations of human behavior that supervise how tasks are performed, and interactive environments in which policies can be rolled out, evaluated, and improved in closed loop. — 原文提取

### [Ropedia Xperience 2: A Gold Standard for Scaling Physical AI Environments and Behaviors](../../blogs/Ropedia%20Xperience%202_%20A%20Gold%20Standard%20for%20Scaling%20Physical%20AI%20Environments%20and%20Behaviors.md)

2026-11-12 · 来源：arXiv:2611.17060 · Ropedia Xperience 2 · 状态：有来源缺口

[单篇导读（blogs/）](../../blogs/Ropedia%20Xperience%202_%20A%20Gold%20Standard%20for%20Scaling%20Physical%20AI%20Environments%20and%20Behaviors.md) · [微信原件](../../../../raw/504378c6e2ed064fddeeac5b30f3574a8affa418723dcb5dc581ac8104cf7ff0) · 固定版本 `digest-material-504378c6e2ed064fddeeac5b30f3574a8affa418723dcb5dc581ac8104cf7ff0@1`

> Large foundation models such as GPT-6 Astra and Claude Fable 5.1 have recently been shown to control robots directly from visual observations. They nevertheless remain brittle on long-horizon, contact-rich tasks in real-world environments. Further progress depends on two complementary resources: demonstrations of human behavior that supervise how tasks are performed, and interactive environments in which policies can be rolled out, evaluated, and improved in closed loop.

> Ropedia Xperience 2 is collected with a two-stage protocol that requires a single operator and no robot or motion-capture infrastructure on site. Each scene is first scanned once with a handheld 3D scanner, and its assigned tasks are then recorded with the HOMIE head-mounted recorder, so that one scan provides the spatial context for multiple recordings.

关联一手材料：

- Ropedia Xperience 2: A Gold Standard for Scaling Physical AI Environments and Behaviors（Ropedia Research Team）· [原站](https://arxiv.org/abs/2611.17060) · [本地原件](../../../../raw/504378c6e2ed064fddeeac5b30f3574a8affa418723dcb5dc581ac8104cf7ff0) · 版本 `digest-material-504378c6e2ed064fddeeac5b30f3574a8affa418723dcb5dc581ac8104cf7ff0@2`
  > Large foundation models such as GPT-6 Astra and Claude Fable 5.1 have recently been shown to control robots directly from visual observations. They nevertheless remain brittle on long-horizon, contact-rich tasks in real-world environments. Further progress depends on two complementary resources: demonstrations of human behavior that supervise how tasks are performed, and interactive environments in which policies can be rolled out, evaluated, and improved in closed loop. — 原文提取
