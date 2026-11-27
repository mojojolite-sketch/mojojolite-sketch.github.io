# Cadence Design Systems

[返回主体档案库](../README.md) · [返回赛道总览](../../赛道总览.md) · [单篇导读索引](../../blogs/README.md)

- 主体类别：🏢 公司与产业主体 (Companies)
- 核心定位与说明：全球 EDA 与半导体接口 IP（MIPI/PCIe/CXL/UCIe/TSN/1.6T Ethernet/UALink 200G）核心供应商。
- 关联账号与官方入口：
  - Official Website（Cadence Design Systems）：[机构／作者主页](https://www.cadence.com/) · 登记对象 `digest-publisher-9147379edce13e52e2f1e878` — 全球 EDA 与半导体接口 IP（MIPI/PCIe/CXL/UCIe/TSN/1.6T Ethernet/UALink 200G）核心供应商。

## 1. 核心研究问题与待核查争议（Questions & Open Debates）

### 🔍 待核查缺口与证据边界（Open Gaps）

- `unavailable`：Cadence 官网同源主站链接（cadence.com/en\_US/home/blogs/soc-ip/data-movement-enabling-physical-ai.html）与文末引用的两本白皮书（Designing Physical AI Systems Under Real-World Constraints、Building AI Factories With IP Solutions）对非交互式抓取返回 403 拦截，已通过 Semi IP Hub（semiiphub.com）留存同日 22,596 字符完全一致正文并通过检索核验。 [线索](https://www.cadence.com/en_US/home/blogs/soc-ip/data-movement-enabling-physical-ai.html)（关联：[《数据移动赋能物理AI》](../../blogs/%E6%95%B0%E6%8D%AE%E7%A7%BB%E5%8A%A8%E8%B5%8B%E8%83%BD%E7%89%A9%E7%90%86AI.md)）
- `not_disclosed`：本文未公开 Ray Davtyan 在 Cadence Design Systems 的具体行政职衔、Cadence 3nm UALink 200G 与 ESUN IP 的流片量产客户名单及授权收入占比，亦未给出机内片间延迟纳秒级实测基准表。 [线索](https://semiiphub.com/pulse/expert-perspectives/data-movement-enabling-physical-ai)（关联：[《数据移动赋能物理AI》](../../blogs/%E6%95%B0%E6%8D%AE%E7%A7%BB%E5%8A%A8%E8%B5%8B%E8%83%BD%E7%89%A9%E7%90%86AI.md)）

- [《数据移动赋能物理AI》](../../blogs/%E6%95%B0%E6%8D%AE%E7%A7%BB%E5%8A%A8%E8%B5%8B%E8%83%BD%E7%89%A9%E7%90%86AI.md)：已穿透核查 AISilicon（2026-10-28）全译文的真正上游源头：Ray Davtyan 于 2026-10-22 在 Cadence 官方 SoC & IP 博客（cadence.com，原始站点返回 403）与半导体 IP 门户 Semi IP Hub（semiiphub.com，完整保留 22,596 字符全文）同步发表的第一方专家文章，补齐原为空白的 Cadence Design Systems 与 Semi IP Hub 主体入口建档；逐项核对 MIPI CSI-2、SerDes、LPDDR、UCIe、PCIe/CXL、TSN/EtherCAT/CAN、ISO 26262 ASIL / IEC 61508 SIL、UN R156 / ISO 24089 及 UALink 200G (3nm) / Ultra Ethernet / ESUN 1.6T 互连架构，并对比机器人现场数据吞吐（约 16 GB/h）与自动驾驶 4–5 TB/h 原始流及控制回路 NVLink 生态竞争摩擦；Ray Davtyan 确切内部职衔及 Cadence 物理 AI IP 分部收入保留未披露缺口。

## 2. 收录文章与一手材料（Ingested Articles & Primary Sources）

### [数据移动赋能物理AI](../../blogs/%E6%95%B0%E6%8D%AE%E7%A7%BB%E5%8A%A8%E8%B5%8B%E8%83%BD%E7%89%A9%E7%90%86AI.md)

2026-10-28 · 来源：Cadence Design Systems (Ray Davtyan) · Semi IP Hub · 状态：有来源缺口

[单篇导读（blogs/）](../../blogs/%E6%95%B0%E6%8D%AE%E7%A7%BB%E5%8A%A8%E8%B5%8B%E8%83%BD%E7%89%A9%E7%90%86AI.md) · [微信原件](../../../../raw/a7a696529d4ac8807ab806a81c72adf7d6d82be02af7dce97171507461de7170) · 固定版本 `digest-material-a7a696529d4ac8807ab806a81c72adf7d6d82be02af7dce97171507461de7170@1`

> 大多数关于物理AI的讨论都集中在使机器人、车辆、无人机及其他自主机器能够在物理世界中感知、推理和行动的模型与计算上。这两者都很重要，但这些机器不仅仅是其内部的模型和计算。每台机器都依赖一个由传感器、计算和执行器组成的链条，这些部件通过一系列链路连接。数据必须按时且无错误地在该链条中传输，机器才能正确行动。

> 物理AI 必须在本地运行，无需依赖与数据中心的连接。但AI工厂对于仿真、训练、测试和重新训练仍然至关重要，之后更新的模型才会被部署回机器。

关联一手材料：

- Data Movement Enabling Physical AI（Ray Davtyan）· [原站](https://semiiphub.com/pulse/expert-perspectives/data-movement-enabling-physical-ai) · [NotebookLM](https://notebook.google.com/notebook/cac99041-d3b9-449e-a192-12bb4b1ad391) · [Drive](https://drive.google.com/file/d/1reyoGymxGADbAqGj4tntAvcTywWWhjgN/view?usp=drivesdk) · 版本 `digest-material-8388fc924ee0716b39c2baecc2712610635a0db22a7c2883ac4d85c5c768f4cd@5`
  > Most discussions around physical AI center on the models and compute that enable robots, vehicles, drones, and other autonomous machines to see, reason, and act in the physical world. — 原文提取
