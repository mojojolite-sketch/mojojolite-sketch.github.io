# Ropedia

[返回主体档案库](../README.md) · [返回赛道总览](../../赛道总览.md) · [单篇导读索引](../../blogs/README.md)

- 主体类别：🏢 公司与产业主体 (Companies)
- 核心定位与说明：Ropedia 具身智能数据与采集硬件研发主体（发布 Xperience-10M、Ropedia Xperience 2 与 HOMIE Gen2） Ropedia 官方 GitHub 组织账号 Ropedia 官方 Hugging Face 数据集发布账号
- 关联账号与官方入口：
  - GitHub（Ropedia）：[账号主页](https://github.com/Ropedia) · 登记对象 `digest-publisher-dda14b943cb48690ae23f555` — Ropedia 官方 GitHub 组织账号
  - Hugging Face（Ropedia）：[账号主页](https://huggingface.co/ropedia-ai) · 登记对象 `digest-publisher-843cff20e48c3d3853f2c329` — Ropedia 官方 Hugging Face 数据集发布账号
  - Official Website（Ropedia）：[机构／作者主页](https://ropedia.com/) · 登记对象 `digest-publisher-d11666db6bc2a41ee4ccf72c` — Ropedia 具身智能数据与采集硬件研发主体（发布 Xperience-10M、Ropedia Xperience 2 与 HOMIE Gen2）

## 1. 核心研究问题与待核查争议（Questions & Open Debates）

### 🔍 待核查缺口与证据边界（Open Gaps）

- `unavailable`：论文披露的项目主页（ropedia.com/xperience/2-research/）、GitHub 代码库（github.com/Ropedia/Ropedia-Xperience-2.git）与 Hugging Face 数据集（huggingface.co/datasets/ropedia-ai/Ropedia-Xperience-2）本次仅完成 arXiv 论文全文提取，未单独拉取项目页动态视频及数据集原始压缩包验证。 [线索](https://ropedia.com/xperience/2-research/)（关联：[《Ropedia Xperience 2: A Gold Standard for Scaling Physical AI Environments and Behaviors》](../../blogs/Ropedia%20Xperience%202_%20A%20Gold%20Standard%20for%20Scaling%20Physical%20AI%20Environments%20and%20Behaviors.md)）
- `not_disclosed`：论文未公开 Ropedia HOMIE Gen2 头戴四目系统与 HESAI KOSMO 手持扫描仪的硬件 BOM 成本、单场景平均扫描与清场耗时（分钟）、单小时可用训练数据总成本（\$/hour），亦未报告 4,230 条 HOMIE 录制经 Scan–HOMIE Registration 后的总体 PASS/WEAK/FAIL 通过率分布。 [线索](https://arxiv.org/abs/2611.17060)（关联：[《Ropedia Xperience 2: A Gold Standard for Scaling Physical AI Environments and Behaviors》](../../blogs/Ropedia%20Xperience%202_%20A%20Gold%20Standard%20for%20Scaling%20Physical%20AI%20Environments%20and%20Behaviors.md)）
- `not_disclosed`：论文 Section 5.2 展示了 Real-to-Sim、Human-Robot Retargeting、Virtual Teleoperation 与 Long-Horizon Trajectory Generation 的单场景闭环可行性，但尚未给出基于该批合成/重定向轨迹训练 VLA 或 WAM 策略在真实物理机器人上的成功率消融对比。 [线索](https://arxiv.org/abs/2611.17060)（关联：[《Ropedia Xperience 2: A Gold Standard for Scaling Physical AI Environments and Behaviors》](../../blogs/Ropedia%20Xperience%202_%20A%20Gold%20Standard%20for%20Scaling%20Physical%20AI%20Environments%20and%20Behaviors.md)）

- [《Ropedia Xperience 2: A Gold Standard for Scaling Physical AI Environments and Behaviors》](../../blogs/Ropedia%20Xperience%202_%20A%20Gold%20Standard%20for%20Scaling%20Physical%20AI%20Environments%20and%20Behaviors.md)：归属与范围：已拉取 arXiv:2611.17060（2026-11-12 提交）HTML 全文与摘要元信息并入库本地原件，完整还原双设备硬件规格、50 µs 同步与 Umeyama 场景配准流水线、1,589 个释放扫描质量分布、三大空间基准（SpatialBench 几何/3D 目标检测/MMSI-Bench 空间推理）与四条机器人复用链路（Real-to-Sim、Human-Robot Retargeting、Virtual Teleoperation、Long-Horizon Trajectory Generation），并与本库已归档 Maxinsights 工程文献（Beyond 1M Hours 与 MaxSLAM）完成第一性原理路线对照。

## 2. 阅读笔记与原文 Highlight（Reading Highlights & Marginalia）

### 🖍️ 摘录与批注：《Ropedia Xperience 2: A Gold Standard f…》（1 条）

关联文章：[《Ropedia Xperience 2: A Gold Standard for Scaling Physical AI Environments and Behaviors》](../../blogs/Ropedia%20Xperience%202_%20A%20Gold%20Standard%20for%20Scaling%20Physical%20AI%20Environments%20and%20Behaviors.md)

- 这篇感觉很吊，可以和Maxinsight的工程文做个对比，看看双方的路线定义和取舍

> 导读核心结论：核心结论与路线分野：arXiv:2611.17060《Ropedia Xperience 2: A Gold Standard for Scaling Physical AI Environments and Behaviors》（2026-11-12 提交）由 Ropedia Research Team（Project Leads：Hao Li、Zhaoxi Chen、Fangzhou Hong；Advisor：Ziwei Liu）发布，将物理 AI 扩展命题从纯人类视频推…


## 3. 收录文章与一手材料（Ingested Articles & Primary Sources）

### [Ropedia Xperience 2: A Gold Standard for Scaling Physical AI Environments and Behaviors](../../blogs/Ropedia%20Xperience%202_%20A%20Gold%20Standard%20for%20Scaling%20Physical%20AI%20Environments%20and%20Behaviors.md)

2026-11-12 · 来源：arXiv:2611.17060 · Ropedia Xperience 2 · 状态：有来源缺口

[单篇导读（blogs/）](../../blogs/Ropedia%20Xperience%202_%20A%20Gold%20Standard%20for%20Scaling%20Physical%20AI%20Environments%20and%20Behaviors.md) · [微信原件](../../../../raw/504378c6e2ed064fddeeac5b30f3574a8affa418723dcb5dc581ac8104cf7ff0) · 固定版本 `digest-material-504378c6e2ed064fddeeac5b30f3574a8affa418723dcb5dc581ac8104cf7ff0@1`

> Large foundation models such as GPT-6 Astra and Claude Fable 5.1 have recently been shown to control robots directly from visual observations. They nevertheless remain brittle on long-horizon, contact-rich tasks in real-world environments. Further progress depends on two complementary resources: demonstrations of human behavior that supervise how tasks are performed, and interactive environments in which policies can be rolled out, evaluated, and improved in closed loop.

> Ropedia Xperience 2 is collected with a two-stage protocol that requires a single operator and no robot or motion-capture infrastructure on site. Each scene is first scanned once with a handheld 3D scanner, and its assigned tasks are then recorded with the HOMIE head-mounted recorder, so that one scan provides the spatial context for multiple recordings.

关联一手材料：

- Ropedia Xperience 2: A Gold Standard for Scaling Physical AI Environments and Behaviors（Ropedia Research Team）· [原站](https://arxiv.org/abs/2611.17060) · [本地原件](../../../../raw/504378c6e2ed064fddeeac5b30f3574a8affa418723dcb5dc581ac8104cf7ff0) · 版本 `digest-material-504378c6e2ed064fddeeac5b30f3574a8affa418723dcb5dc581ac8104cf7ff0@2`
  > Large foundation models such as GPT-6 Astra and Claude Fable 5.1 have recently been shown to control robots directly from visual observations. They nevertheless remain brittle on long-horizon, contact-rich tasks in real-world environments. Further progress depends on two complementary resources: demonstrations of human behavior that supervise how tasks are performed, and interactive environments in which policies can be rolled out, evaluated, and improved in closed loop. — 原文提取
