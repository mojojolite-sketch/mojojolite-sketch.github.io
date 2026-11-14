# Ayar Labs

[返回主体档案库](../README.md) · [返回赛道总览](../../赛道总览.md) · [单篇导读索引](../../blogs/README.md)

- 主体类别：🏢 公司与产业主体 (Companies)
- 核心定位与说明：• 硅光子与光学I/O芯片企业，主研TeraPHY与SuperNova。 • 专注AI算力集群Scale-up域超低功耗高密度光互连。 • 获NVIDIA、AMD、Intel等投资，未披露最新估值。
- 关联账号与官方入口：
  - 机构官网（Ayar Labs）：[机构／作者主页](https://ayarlabs.com/) · 登记对象 `digest-publisher-22165a7b1343f2304c533a09` — • 硅光子与光学I/O芯片企业，主研TeraPHY与SuperNova。 • 专注AI算力集群Scale-up域超低功耗高密度光互连。 • 获NVIDIA、AMD、Intel等投资，未披露最新估值。

## 1. 核心研究问题与待核查争议（Questions & Open Debates）

### 🔍 待核查缺口与证据边界（Open Gaps）

- `unavailable`：Kinny Chen与Vishal Chandrasekar在OCP Global Summit 2026短距离光互连研讨会现场完整演讲幻灯片（slides）未公开发布下载全文，保留技术幻灯片原件缺口。（关联：[《Wiwynn & Ayar Labs | 从芯片到机架：CPO如何落到 1024 ASIC的 Scale-up Pod》](../../blogs/Wiwynn%20%26%20Ayar%20Labs%20_%20%E4%BB%8E%E8%8A%AF%E7%89%87%E5%88%B0%E6%9C%BA%E6%9E%B6%EF%BC%9ACPO%E5%A6%82%E4%BD%95%E8%90%BD%E5%88%B0%201024%20ASIC%E7%9A%84%20Scale-up%20Pod.md)）
- `pending_verification`：仿真显示的25°C环境、4.5 LPM流量下对流式冷板可忽略光引擎热串扰结论，以及1024 ASIC相比32 ASIC实现10倍系统性能提升，保留为研制单位披露指标，尚未独立工程复核。（关联：[《Wiwynn & Ayar Labs | 从芯片到机架：CPO如何落到 1024 ASIC的 Scale-up Pod》](../../blogs/Wiwynn%20%26%20Ayar%20Labs%20_%20%E4%BB%8E%E8%8A%AF%E7%89%87%E5%88%B0%E6%9C%BA%E6%9E%B6%EF%BC%9ACPO%E5%A6%82%E4%BD%95%E8%90%BD%E5%88%B0%201024%20ASIC%E7%9A%84%20Scale-up%20Pod.md)）

- [《Wiwynn & Ayar Labs | 从芯片到机架：CPO如何落到 1024 ASIC的 Scale-up Pod》](../../blogs/Wiwynn%20%26%20Ayar%20Labs%20_%20%E4%BB%8E%E8%8A%AF%E7%89%87%E5%88%B0%E6%9C%BA%E6%9E%B6%EF%BC%9ACPO%E5%A6%82%E4%BD%95%E8%90%BD%E5%88%B0%201024%20ASIC%E7%9A%84%20Scale-up%20Pod.md)：完成来源分诊并归档Wiwynn官方发布的OCP 2026 CPO计算系统实物展示与实时遥测联合新闻通稿；核对单级Scale-up拓扑、机架内shuffle box布线与托盘液冷集成；现场完整演讲幻灯片与仿真散热指标保留缺口。

## 2. 收录文章与一手材料（Ingested Articles & Primary Sources）

### [Wiwynn & Ayar Labs | 从芯片到机架：CPO如何落到 1024 ASIC的 Scale-up Pod](../../blogs/Wiwynn%20%26%20Ayar%20Labs%20_%20%E4%BB%8E%E8%8A%AF%E7%89%87%E5%88%B0%E6%9C%BA%E6%9E%B6%EF%BC%9ACPO%E5%A6%82%E4%BD%95%E8%90%BD%E5%88%B0%201024%20ASIC%E7%9A%84%20Scale-up%20Pod.md)

2026-11-04 · 来源：Wiwynn & Ayar Labs (OCP 2026) · 状态：有来源缺口

[单篇导读（blogs/）](../../blogs/Wiwynn%20%26%20Ayar%20Labs%20_%20%E4%BB%8E%E8%8A%AF%E7%89%87%E5%88%B0%E6%9C%BA%E6%9E%B6%EF%BC%9ACPO%E5%A6%82%E4%BD%95%E8%90%BD%E5%88%B0%201024%20ASIC%E7%9A%84%20Scale-up%20Pod.md) · [微信原件](../../../../raw/c7c238b9948643d2780fbe54aeb566d13d84ba2b0e9f0386866455dc7efb0327) · 固定版本 `digest-material-c7c238b9948643d2780fbe54aeb566d13d84ba2b0e9f0386866455dc7efb0327@1`

> 光电共封装（CPO）过去几年已经从实验室逐步走进算力集群应用，但真正把它装进机架、跑起训练集群的工程验证仍是少数。

> 更大的模型需要更大的 Scale-up 域才能维持效率，例如 1024 ASIC 的 Scale-up Pod 相比所评估的最小配置 （32 ASIC），可实现约 10 倍的系统性能提升。对算力集群真正有意义的指标是每集群每秒 token 数（tokens/sec/cluster），Scale-up 域的大小直接决定这个数值。

关联一手材料：

- Wiwynn, Ayar Labs, and GUC Advance Co-Packaged Optics with Live Demonstration of Integrated Optical Compute System at OCP Global Summit 2026（纬颖科技 (Wiwynn)）· [原站](https://www.wiwynn.com/news/wiwynn-ayar-labs-and-guc-advance-co-packaged-optics-with-live-demonstration-of-integrated-optical-compute-system-at-ocp-global-summit-2026) · [NotebookLM](https://notebook.google.com/notebook/dcc9527e-5187-42d3-b3cf-5574086349ce) · [Drive](https://drive.google.com/file/d/1x89PMxij0lztLWL-oXuPlSWlemIFLC0j/view?usp=drivesdk) · 版本 `digest-material-d1ae5546d114a001d27928d26ee247a35eef1dd931faff2aadaf800b34aefe02@1`
  > San Jose, CA — October 13, 2026— Wiwynn, an innovative cloud IT infrastructure provider for data centers, Ayar Labs, the leader in co-packaged optics (CPO) solutions for AI scale-up, and Global Unichip Corp. — 原文提取
