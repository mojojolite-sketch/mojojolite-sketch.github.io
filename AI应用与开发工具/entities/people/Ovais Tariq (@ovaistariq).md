# Ovais Tariq (@ovaistariq)

[返回主体档案库](../README.md) · [返回赛道总览](../../赛道总览.md) · [单篇导读索引](../../blogs/README.md)

- 主体类别：👤 个人与学者 (People)
- 核心定位与说明：• Tigris Data联合创始人兼CEO，前Uber存储平台工程负责人。 • 主导研发基于FoundationDB与不可变日志的全球分布式S3存储与Bucket Forking。
- 关联账号与官方入口：
  - X（Ovais Tariq (@ovaistariq)）：[账号主页](https://x.com/ovaistariq) · 登记对象 `digest-publisher-9fcd5f0ef28b7db316fd7459` — • Tigris Data联合创始人兼CEO，前Uber存储平台工程负责人。 • 主导研发基于FoundationDB与不可变日志的全球分布式S3存储与Bucket Forking。

## 1. 核心研究问题与待核查争议（Questions & Open Debates）

### 💬 追问与核查：《一家只融了 2500 万美元的公司，为什么被 Dropbox 3.5 亿美元…》

- 追问1：技术我没懂，可能需要更多存储background
- 追问2：对于这些痛点，aws/gcp/azure/cloudflare是怎么解决的？tigris降低的成本转换成了自己的盈利or只是让利给客户
- 追问3：跨云调度费用发生在哪个环节？客户调用claude访问自己存在gcp的数据，费用归属是谁

关联文章：[《一家只融了 2500 万美元的公司，为什么被 Dropbox 3.5 亿美元买走？Tigris 到底值什么？》](../../blogs/%E4%B8%80%E5%AE%B6%E5%8F%AA%E8%9E%8D%E4%BA%86%202500%20%E4%B8%87%E7%BE%8E%E5%85%83%E7%9A%84%E5%85%AC%E5%8F%B8%EF%BC%8C%E4%B8%BA%E4%BB%80%E4%B9%88%E8%A2%AB%20Dropbox%203.5%20%E4%BA%BF%E7%BE%8E%E5%85%83%E4%B9%B0%E8%B5%B0%EF%BC%9FTigris%20%E5%88%B0%E5%BA%95%E5%80%BC%E4%BB%80%E4%B9%88%EF%BC%9F.md)

> 追查结论摘要：如果把计算机里的“存数据”比作现实世界里的存放物品，云计算里有且仅有三种基本形态：

- [《一家只融了 2500 万美元的公司，为什么被 Dropbox 3.5 亿美元买走？Tigris 到底值什么？》](../../blogs/%E4%B8%80%E5%AE%B6%E5%8F%AA%E8%9E%8D%E4%BA%86%202500%20%E4%B8%87%E7%BE%8E%E5%85%83%E7%9A%84%E5%85%AC%E5%8F%B8%EF%BC%8C%E4%B8%BA%E4%BB%80%E4%B9%88%E8%A2%AB%20Dropbox%203.5%20%E4%BA%BF%E7%BE%8E%E5%85%83%E4%B9%B0%E8%B5%B0%EF%BC%9FTigris%20%E5%88%B0%E5%BA%95%E5%80%BC%E4%BB%80%E4%B9%88%EF%BC%9F.md)：完成一手信源追溯、存储背景 Storage 101 科普、四大云巨头（AWS/GCP/Azure/Cloudflare）竞品对比、单位经济模型（Unit Economics）、认知闭环复盘及跨云流量费（Egress Fee）扣费环节与账单归属拆解：核实 Dropbox（NASDAQ: DBX）于 2026 年 11 月 5 日宣布以约 3.5 亿美元全现金收购 Tigris Data 并推出 DBX Agent Cloud；明确云厂商“谁是存储桶户主（Bucket Owner）谁为出大门流量买单”的计费铁律，拆解企业客户自带 GCP 桶（客户买单）、AI 推理/Agent 托管平台跨云调卡（Fal.ai/Railway 平台买单）与大模型厂多云同步（模型厂买单）三类场景的成本归属。

## 2. 阅读笔记与原文 Highlight（Reading Highlights & Marginalia）

### 🖍️ 摘录与批注：《一家只融了 2500 万美元的公司，为什么被 Dropbox 3.5 亿美元…》（1 条）

关联文章：[《一家只融了 2500 万美元的公司，为什么被 Dropbox 3.5 亿美元买走？Tigris 到底值什么？》](../../blogs/%E4%B8%80%E5%AE%B6%E5%8F%AA%E8%9E%8D%E4%BA%86%202500%20%E4%B8%87%E7%BE%8E%E5%85%83%E7%9A%84%E5%85%AC%E5%8F%B8%EF%BC%8C%E4%B8%BA%E4%BB%80%E4%B9%88%E8%A2%AB%20Dropbox%203.5%20%E4%BA%BF%E7%BE%8E%E5%85%83%E4%B9%B0%E8%B5%B0%EF%BC%9FTigris%20%E5%88%B0%E5%BA%95%E5%80%BC%E4%BB%80%E4%B9%88%EF%BC%9F.md)

- 复盘：跨云算存割裂与hidden搬运费下，Tigris做近机房免运费存储池与优化，结合Dropbox庞大自有存储硬件形成极佳AI-native Infra


## 3. 收录文章与一手材料（Ingested Articles & Primary Sources）

### [一家只融了 2500 万美元的公司，为什么被 Dropbox 3.5 亿美元买走？Tigris 到底值什么？](../../blogs/%E4%B8%80%E5%AE%B6%E5%8F%AA%E8%9E%8D%E4%BA%86%202500%20%E4%B8%87%E7%BE%8E%E5%85%83%E7%9A%84%E5%85%AC%E5%8F%B8%EF%BC%8C%E4%B8%BA%E4%BB%80%E4%B9%88%E8%A2%AB%20Dropbox%203.5%20%E4%BA%BF%E7%BE%8E%E5%85%83%E4%B9%B0%E8%B5%B0%EF%BC%9FTigris%20%E5%88%B0%E5%BA%95%E5%80%BC%E4%BB%80%E4%B9%88%EF%BC%9F.md)

2026-11-06 · 来源：Dropbox & Tigris 官方博客 · 状态：已整理

[单篇导读（blogs/）](../../blogs/%E4%B8%80%E5%AE%B6%E5%8F%AA%E8%9E%8D%E4%BA%86%202500%20%E4%B8%87%E7%BE%8E%E5%85%83%E7%9A%84%E5%85%AC%E5%8F%B8%EF%BC%8C%E4%B8%BA%E4%BB%80%E4%B9%88%E8%A2%AB%20Dropbox%203.5%20%E4%BA%BF%E7%BE%8E%E5%85%83%E4%B9%B0%E8%B5%B0%EF%BC%9FTigris%20%E5%88%B0%E5%BA%95%E5%80%BC%E4%BB%80%E4%B9%88%EF%BC%9F.md) · [微信原件](../../../../raw/acdd5dcbbdb362f731a2e59883887737da139bddad1c0d60540b841f7eab1863) · 固定版本 `digest-material-acdd5dcbbdb362f731a2e59883887737da139bddad1c0d60540b841f7eab1863@1`

> 11 月 5 日， Dropbox 宣布以约 3.5 亿美元现金收购 Tigris Data ，并同步推出 DBX Agent Cloud。这是 Dropbox 成立以来金额最大的一笔收购，也意味着这家以云存储起家的公司，正式把业务边界从“保存和共享文件”推进到 AI 应用背后的基础设施。交易预计于 2026 年第四季度完成。

> 这笔交易真正值得关注的，不是 Dropbox 又收购了一家 AI 公司，而是它押注的方向发生了变化： 当 AI 从模型调用进入 Agent 时代，Infrastructure 的核心问题正在从“哪里获得更多算力”，逐渐扩展到“数据如何被存储、调用、迁移，并在不同任务之间保持状态”。

关联一手材料：

- Dropbox \$350M Acquisition of Tigris Data, DBX Agent Cloud Launch & Q3 2026 Financial Results Dossier（Dropbox, Inc. / Tigris Data, Inc. Official Announcements & Technical Architecture Compilation）· [原站](https://www.tigrisdata.com/blog/dropbox-acquires-tigris/) · [本地原件](../../../../raw/ae03ff3eb7f8e45837fc0f1b2f3763bea6f942acbdeed352530576dc07f2346d) · 版本 `digest-material-ae03ff3eb7f8e45837fc0f1b2f3763bea6f942acbdeed352530576dc07f2346d@1`
  > Dropbox \$350M Acquisition of Tigris Data, DBX Agent Cloud Launch & Q3 2026 Financial Results Primary Source Dossier Dropbox, Inc. / Tigris Data, Inc. — 原文提取
