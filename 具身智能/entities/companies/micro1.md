# micro1

[返回主体档案库](../README.md) · [返回赛道总览](../../赛道总览.md) · [单篇导读索引](../../blogs/README.md)

- 主体类别：🏢 公司与产业主体 (Companies)
- 核心定位与说明：• 前沿模型数据实验室与agent评测公司。 • 服务AI labs，提供专家数据、RL环境。 • Dual-Arm Sim评测精密物理任务。
- 关联账号与官方入口：
  - 机构官网（micro1）：[机构／作者主页](https://www.micro1.ai/) · 登记对象 `digest-publisher-3101364b0c6df0b3072661bd` — • 前沿模型数据实验室与agent评测公司。 • 服务AI labs，提供专家数据、RL环境。 • Dual-Arm Sim评测精密物理任务。

## 1. 核心研究问题与待核查争议（Questions & Open Debates）

- 当前收录材料的主张与实验指标均保持 `verification=pending`，尚未发现显式冲突；待结合后续实机部署或独立复核进一步检验。

## 2. 收录文章与一手材料（Ingested Articles & Primary Sources）

### [micro1 双臂仿真评测：800 次试验仅完成 11 次，213 次“完成”全是误报](../../blogs/micro1%20%E5%8F%8C%E8%87%82%E4%BB%BF%E7%9C%9F%E8%AF%84%E6%B5%8B%EF%BC%9A800%20%E6%AC%A1%E8%AF%95%E9%AA%8C%E4%BB%85%E5%AE%8C%E6%88%90%2011%20%E6%AC%A1%EF%BC%8C213%20%E6%AC%A1%E2%80%9C%E5%AE%8C%E6%88%90%E2%80%9D%E5%85%A8%E6%98%AF%E8%AF%AF%E6%8A%A5.md)

2026-10-31 · 来源：micro1 · 状态：已整理

[单篇导读（blogs/）](../../blogs/micro1%20%E5%8F%8C%E8%87%82%E4%BB%BF%E7%9C%9F%E8%AF%84%E6%B5%8B%EF%BC%9A800%20%E6%AC%A1%E8%AF%95%E9%AA%8C%E4%BB%85%E5%AE%8C%E6%88%90%2011%20%E6%AC%A1%EF%BC%8C213%20%E6%AC%A1%E2%80%9C%E5%AE%8C%E6%88%90%E2%80%9D%E5%85%A8%E6%98%AF%E8%AF%AF%E6%8A%A5.md) · [微信原件](../../../../raw/bad06ea09cfe865918bef82ae78fa4b5efe3581a90fe57cc24cd792d854cc30b) · 固定版本 `digest-material-bad06ea09cfe865918bef82ae78fa4b5efe3581a90fe57cc24cd792d854cc30b@1`

> micro1 发布的 Dual-Arm Sim，让十个通用前沿模型在同一套双臂机器人仿真环境中完成手术室物品操作。800 次试验只有 11 次完成任务，模型在 213 次试验中报告“已完成”，但这些报告全部与实际结果不符。

> 这项评测关注敏感环境中的细致操作，从认出目标到抓取、搬运，再到准确放置和确认结果。环境由物理仿真构建，成绩反映特定任务与控制接口下的表现，不能直接等同于真实手术能力。

关联一手材料：

- Dual-Arm Sim Benchmark（micro1）· [原站](https://www.micro1.ai/benchmark/dual-arm-sim) · [NotebookLM](https://notebook.google.com/notebook/cac99041-d3b9-449e-a192-12bb4b1ad391) · [Drive](https://drive.google.com/file/d/1sdzpiK9UN5oeIMbE3j_DS9JGGlz0KOqj/view?usp=drivesdk) · 版本 `digest-material-2ef4719e3f1d1c3f222da8222042281bfe982c1299a4f1e8777247b1f9641c0d@4`
  > Picking up a vial is easy. Picking up the right vial, without touching its neighbour, carrying it without letting go and placing it exactly where it belongs is not. Knowing for certain that it worked is harder still. — 原文提取
