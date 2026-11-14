---
title: "Google AI 基础设施负责深度访谈：10 万卡集群故障不断，Agent推高 CPU、存储和网络需求，2036年机架，TPU 8i/8t，轨道数据中心"
type: blog_digest
sector: "分布式计算"
source: "Amin Vahdat (Google) · Sequoia 访谈"
published_at: "2026-10-31"
raw_sha256: "bebd2b5d3c9a62deb8be80e7f5258dccf12de1a8e67a86d9b087f57d2e9e6ee3"
material_version: "digest-material-bebd2b5d3c9a62deb8be80e7f5258dccf12de1a8e67a86d9b087f57d2e9e6ee3@1"
origin_url: "https://sequoiacap.com/podcast/google-s-ai-infrastructure-chief-amin-vahdat-on-the-physics-economics-of-frontier-ai"
trigger_source: "NeuralTalk"
trigger_url: ""
user_comments: ""
status: "processed"
---

<a id="digest-bebd2b5d3c9a62de"></a>
# Google AI 基础设施负责深度访谈：10 万卡集群故障不断，Agent推高 CPU、存储和网络需求，2036年机架，TPU 8i/8t，轨道数据中心

2026-10-31 · Amin Vahdat (Google) · Sequoia 访谈 · 已整理

[本地原件归档](../../../raw/bebd2b5d3c9a62deb8be80e7f5258dccf12de1a8e67a86d9b087f57d2e9e6ee3) · 固定材料版本 `digest-material-bebd2b5d3c9a62deb8be80e7f5258dccf12de1a8e67a86d9b087f57d2e9e6ee3@1` · [一手原站](https://sequoiacap.com/podcast/google-s-ai-infrastructure-chief-amin-vahdat-on-the-physics-economics-of-frontier-ai)

> Amin Vahdat 是 Google Fellow、AI 基础设施首席技术官，工作覆盖定制芯片、数据中心、网络、供应链和运营。他此前负责 Google 计算、存储与网络软硬件基础设施，加入Google 前曾任加州大学圣迭戈分校计算机科学与工程教授。他拥有加州大学伯克利分校计算机科学博士学位，是 ACM Fellow，2023 年入选美国国家工程院，入选理由涉及数据中心和全球规模网络的设计与实现。
> — 原文摘录，PDF p.1；证据 `digest-material-bebd2b5d3c9a62deb8be80e7f5258dccf12de1a8e67a86d9b087f57d2e9e6ee3-excerpt-1@1`

> 2036 年可能出现的数据中心形态：单柜功率达到数兆瓦，集中制造后运到现场，接上水、电和光纤就能运行。
> — 原文摘录，PDF p.2；证据 `digest-material-bebd2b5d3c9a62deb8be80e7f5258dccf12de1a8e67a86d9b087f57d2e9e6ee3-excerpt-2@1`

> 在红杉资本 Training Data 播客\[2\] 的这场对谈中，主持人、红杉资本合伙人 Sonya Huang 与Google AI 基础设施首席技术官 Amin Vahdat 讨论了前沿 AI 的物理条件和经济账。Amin 负责Google 的 AI 基础设施工作，参与 TPU、数据中心、网络、电力和模型之间的协同设计。他谈到的一个核心变化是，AI 基础设施的考核对象已经从单颗芯片的理论参数，转向整个系统在真实故障和真实负载下交付的结果。
> — 原文摘录，PDF p.2；证据 `digest-material-bebd2b5d3c9a62deb8be80e7f5258dccf12de1a8e67a86d9b087f57d2e9e6ee3-excerpt-3@1`

一手材料：

- Google's AI Infrastructure Chief, Amin Vahdat, on the Physics & Economics of Frontier AI | Sequoia Capital · Sequoia Training Data / Sonya Huang / Amin Vahdat · [原站](https://sequoiacap.com/podcast/google-s-ai-infrastructure-chief-amin-vahdat-on-the-physics-economics-of-frontier-ai) · [主体档案：Sequoia Capital](../entities/funds/Sequoia%20Capital.md) · [NotebookLM](https://notebook.google.com/notebook/aebbbb1d-f497-4850-ab5d-f6b2f53c5e05) · [Drive](https://drive.google.com/file/d/163xEvmxrOtwBn8lSTkc5euVPx8lyaGQD/view?usp=drivesdk)
  材料版本 `digest-material-43b55538f6196fd5efa6f7209a2d238d743626ed2677e99a36a82dacf91a53fd@1`；获取方式 `http_full_text`。
  > At 100,000-accelerator scale, something fails multiple times an hour, which is why Google's Chief Technologist for AI Infrastructure Amin Vahdat thinks FLOPS is a vanity metric. — 原文提取
  > In hardware, as you know, there is this opportunity where the more you specialize to a particular workload, the less flexible it is, but the faster and the more power-efficient the hardware is going to be. — 原文提取
- Meta Acquisition of Conductor (Melty Labs), Multi-Agent Sandbox Architecture (Git Worktree vs. Firecracker MicroVM), Meta Muse Isolation Vulnerabilities & Public/Private Virtualization Investment Dossier · Conductor (Melty Labs) · Nutanix / Cloudflare / Akamai / AMD / E2B / Modal 一手披露与本工作台核查档案 · [原站](https://conductor.build/) · [主体档案：Conductor (Melty Labs)](../entities/companies/Conductor%20%28Melty%20Labs%29.md) / [主体档案：Charlie Holtz](../entities/people/Charlie%20Holtz.md) / [主体档案：Meta](../entities/companies/Meta.md) · [本地原件](../../../raw/bebb215d4b2860668c5d05a7f83025efbf2f250fe2875be3420b749860326716)
  材料版本 `digest-material-bebb215d4b2860668c5d05a7f83025efbf2f250fe2875be3420b749860326716@1`；获取方式 `web_search_grounded_dossier`。
  > # Primary Source Dossier: Meta's Acquisition of Conductor (Melty Labs), Multi-Agent Sandbox Architecture (Git Worktree vs. — 原文提取
  > ### 1.1 Corporate & Financing Profile - \*\*Product & Domain\*\*: Conductor (\`https://conductor.build/\`), developed by \*\*Melty Labs, Inc.\*\* (originally incubated in \*\*Y Combinator S24\*\* as an open-source AI code editor Melty before pivoting in summer 2025 to multi-agent orchestration). — 原文提取

归属与范围：本轮完成引用与归属分诊、可访问原件获取及摘录索引；来源未得与事实待核验分别保留，不视为完整行业研究结论。

[返回赛道总览](../赛道总览.md#digest-bebd2b5d3c9a62de) · [返回导读索引](README.md) · [主体档案库](../entities/README.md)
