# Chroma

[返回主体档案库](../README.md) · [返回赛道总览](../../赛道总览.md) · [单篇导读索引](../../blogs/README.md)

- 主体类别：🏢 公司与产业主体 (Companies)
- 核心定位与说明：Chroma 官网主入口
- 关联账号与官方入口：
  - Official Site（Chroma）：[机构／作者主页](https://www.trychroma.com/) · 登记对象 `digest-publisher-095d2c9fb3f127bf5ce51db8` — Chroma 官网主入口

## 1. 核心研究问题与待核查争议（Questions & Open Debates）

### 🔍 待核查缺口与证据边界（Open Gaps）

- `not_disclosed`：Cognition 未披露 Devin Review「平均每个 PR 检出 2 个缺陷且约 58% 为严重缺陷」背后的 PR 抽样总量（分母）、仓库覆盖分布及多轮生成器-验证器对抗循环增加的单任务耗时与推理成本；亦未披露 SWE-1.5 / SWE-1.6 与 Sonnet 4.5 / Opus-4.5 搭配 Smart Friend 时的具体基准得分差值。 [线索](https://cognition.com/blog/multi-agents-working)（关联：[《Multi-Agents: What's Actually Working》](../../blogs/Multi-Agents_%20What%27s%20Actually%20Working.md)）
- `unavailable`：文中引用的 Anthropic 245 页《Claude Mythos Preview System Card》（2026-04-07）因 PDF 体积较大未做全篇逐页解析，文中涉及 Mythos 级模型成本上升趋势的论述按两家公司官方公告摘要核对。 [线索](https://www-cdn.anthropic.com/08ab9158070959f88f296514c21b7facce6f52bc.pdf)（关联：[《Multi-Agents: What's Actually Working》](../../blogs/Multi-Agents_%20What%27s%20Actually%20Working.md)）

- [《Multi-Agents: What's Actually Working》](../../blogs/Multi-Agents_%20What%27s%20Actually%20Working.md)：已采集 Cognition 官方工程博客原件（2026-04-22，Walden Yan），并穿透核验文中引用的 7 篇关键一级技术文献（Cognition SWE-1.5 / SWE-1.6、Anthropic The Advisor Strategy / Multi-Agent Research System / Building a C Compiler、Cursor Scaling Agents、Chroma Context Rot，连同原文共 8/14 条技术引用完成正文取证）；Devin Review 抽样 PR 分母与 Smart Friend 内部对照得分未公开，已登记 not\_disclosed 缺口。

## 2. 收录文章与一手材料（Ingested Articles & Primary Sources）

### [Multi-Agents: What's Actually Working](../../blogs/Multi-Agents_%20What%27s%20Actually%20Working.md)

2026-04-22 · 来源：Cognition · Anthropic · Cursor (Anysphere) · Chroma · 状态：有来源缺口

[单篇导读（blogs/）](../../blogs/Multi-Agents_%20What%27s%20Actually%20Working.md) · [微信原件](../../../../raw/bde0c64655f5407495829fc48be764e3ada630afce7124b54c1000a7cad10088) · 固定版本 `digest-material-bde0c64655f5407495829fc48be764e3ada630afce7124b54c1000a7cad10088@1`

> Even when we look at Devin usage in our largest enterprises segment, the segment that has traditionally been cautious toward adopting new technologies, we see an explosion over the last 6 months (~8x).

> The practical shape is map-reduce-and-manage: a manager splits work, children execute, the manager synthesizes and reports back.

关联一手材料：

- Context Rot: How Increasing Input Tokens Impacts LLM Performance（Chroma）· [原站](https://www.trychroma.com/research/context-rot) · [本地原件](../../../../raw/3850154fc226d9a7aa0067b842af75776d72e2652f0f041850ab14b327072d7a) · 版本 `digest-material-3850154fc226d9a7aa0067b842af75776d72e2652f0f041850ab14b327072d7a@1`
  > Recent developments in LLMs show a trend toward longer context windows, with the input token count of the latest models reaching the millions. — 原文提取
