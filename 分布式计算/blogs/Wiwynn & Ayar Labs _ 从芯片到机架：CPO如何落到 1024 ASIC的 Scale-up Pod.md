---
title: "Wiwynn & Ayar Labs | 从芯片到机架：CPO如何落到 1024 ASIC的 Scale-up Pod"
type: blog_digest
sector: "分布式计算"
source: "Wiwynn & Ayar Labs (OCP 2026)"
published_at: "2026-11-04"
raw_sha256: "c7c238b9948643d2780fbe54aeb566d13d84ba2b0e9f0386866455dc7efb0327"
material_version: "digest-material-c7c238b9948643d2780fbe54aeb566d13d84ba2b0e9f0386866455dc7efb0327@1"
origin_url: "https://www.wiwynn.com/news/wiwynn-ayar-labs-and-guc-advance-co-packaged-optics-with-live-demonstration-of-integrated-optical-compute-system-at-ocp-global-summit-2026"
trigger_source: "光芯纪"
trigger_url: ""
user_comments: ""
status: "processed_with_gaps"
---

<a id="digest-c7c238b9948643d2"></a>
# Wiwynn & Ayar Labs | 从芯片到机架：CPO如何落到 1024 ASIC的 Scale-up Pod

2026-11-04 · Wiwynn & Ayar Labs (OCP 2026) · 有来源缺口

[本地原件归档](../../../raw/c7c238b9948643d2780fbe54aeb566d13d84ba2b0e9f0386866455dc7efb0327) · 固定材料版本 `digest-material-c7c238b9948643d2780fbe54aeb566d13d84ba2b0e9f0386866455dc7efb0327@1` · [一手原站](https://www.wiwynn.com/news/wiwynn-ayar-labs-and-guc-advance-co-packaged-optics-with-live-demonstration-of-integrated-optical-compute-system-at-ocp-global-summit-2026)

> 光电共封装（CPO）过去几年已经从实验室逐步走进算力集群应用，但真正把它装进机架、跑起训练集群的工程验证仍是少数。
> — 原文摘录，PDF p.1；证据 `digest-material-c7c238b9948643d2780fbe54aeb566d13d84ba2b0e9f0386866455dc7efb0327-excerpt-1@1`

> 更大的模型需要更大的 Scale-up 域才能维持效率，例如 1024 ASIC 的 Scale-up Pod 相比所评估的最小配置 （32 ASIC），可实现约 10 倍的系统性能提升。对算力集群真正有意义的指标是每集群每秒 token 数（tokens/sec/cluster），Scale-up 域的大小直接决定这个数值。
> — 原文摘录，PDF p.1；证据 `digest-material-c7c238b9948643d2780fbe54aeb566d13d84ba2b0e9f0386866455dc7efb0327-excerpt-2@1`

> Level 1 要解决的问题是，随着AI集群规模扩大，需要把芯片层面超高密度的 CPO 光口连接，通过合理的工程设计，转化为物理层面上可管理、标准化的机柜间布线系统。拓扑选择是单级 Scale-up，即 ASIC-交换机-ASIC。随之而来的关键约束是：Scale-up 交换机必须在与计算节点相同的光 I/O 规格内提供 1024 个双向信号。让计算侧与交换侧共用同一套光 I/O 规格，避免规格分裂带来的互连复杂度。
> — 原文摘录，PDF p.2；证据 `digest-material-c7c238b9948643d2780fbe54aeb566d13d84ba2b0e9f0386866455dc7efb0327-excerpt-3@1`

一手材料：

- Wiwynn, Ayar Labs, and GUC Advance Co-Packaged Optics with Live Demonstration of Integrated Optical Compute System at OCP Global Summit 2026 · 纬颖科技 (Wiwynn) · [原站](https://www.wiwynn.com/news/wiwynn-ayar-labs-and-guc-advance-co-packaged-optics-with-live-demonstration-of-integrated-optical-compute-system-at-ocp-global-summit-2026) · [主体档案：纬颖科技](../entities/companies/%E7%BA%AC%E9%A2%96%E7%A7%91%E6%8A%80.md) / [主体档案：Ayar Labs](../entities/companies/Ayar%20Labs.md) · [NotebookLM](https://notebook.google.com/notebook/dcc9527e-5187-42d3-b3cf-5574086349ce) · [Drive](https://drive.google.com/file/d/1x89PMxij0lztLWL-oXuPlSWlemIFLC0j/view?usp=drivesdk)
  材料版本 `digest-material-d1ae5546d114a001d27928d26ee247a35eef1dd931faff2aadaf800b34aefe02@1`；获取方式 `http_html`。
  > San Jose, CA — October 13, 2026— Wiwynn, an innovative cloud IT infrastructure provider for data centers, Ayar Labs, the leader in co-packaged optics (CPO) solutions for AI scale-up, and Global Unichip Corp. — 原文提取
  > This demonstration marks a significant step forward from the companies' previous rack-level architecture collaboration, advancing to platform integration and functional validation. — 原文提取

归属与范围：完成来源分诊并归档Wiwynn官方发布的OCP 2026 CPO计算系统实物展示与实时遥测联合新闻通稿；核对单级Scale-up拓扑、机架内shuffle box布线与托盘液冷集成；现场完整演讲幻灯片与仿真散热指标保留缺口。

来源缺口：

- `unavailable`：Kinny Chen与Vishal Chandrasekar在OCP Global Summit 2026短距离光互连研讨会现场完整演讲幻灯片（slides）未公开发布下载全文，保留技术幻灯片原件缺口。
- `pending_verification`：仿真显示的25°C环境、4.5 LPM流量下对流式冷板可忽略光引擎热串扰结论，以及1024 ASIC相比32 ASIC实现10倍系统性能提升，保留为研制单位披露指标，尚未独立工程复核。

[返回赛道总览](../赛道总览.md#digest-c7c238b9948643d2) · [返回导读索引](README.md) · [主体档案库](../entities/README.md)
