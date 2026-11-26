# Cloudflare

[返回主体档案库](../README.md) · [返回赛道总览](../../赛道总览.md) · [单篇导读索引](../../blogs/README.md)

- 主体类别：🏢 公司与产业主体 (Companies)
- 核心定位与说明：全球边缘网络与 Serverless 执行云平台，旗下 Cloudflare R2 主打 \$0.015/GB/月零出口费对象存储。
- 关联账号与官方入口：
  - Official Site（Cloudflare）：[机构／作者主页](https://www.cloudflare.com/) · 登记对象 `digest-publisher-a6ad87b96b6f44b6b903d3db` — 全球边缘网络与 Serverless 执行云平台，旗下 Cloudflare R2 主打 \$0.015/GB/月零出口费对象存储。

## 1. 核心研究问题与待核查争议（Questions & Open Debates）

### 💬 追问与核查：《一家只融了 2500 万美元的公司，为什么被 Dropbox 3.5 亿美元…》

- 追问1：技术我没懂，可能需要更多存储background
- 追问2：对于这些痛点，aws/gcp/azure/cloudflare是怎么解决的？tigris降低的成本转换成了自己的盈利or只是让利给客户
- 追问3：跨云调度费用发生在哪个环节？客户调用claude访问自己存在gcp的数据，费用归属是谁

关联文章：[《一家只融了 2500 万美元的公司，为什么被 Dropbox 3.5 亿美元买走？Tigris 到底值什么？》](../../blogs/%E4%B8%80%E5%AE%B6%E5%8F%AA%E8%9E%8D%E4%BA%86%202500%20%E4%B8%87%E7%BE%8E%E5%85%83%E7%9A%84%E5%85%AC%E5%8F%B8%EF%BC%8C%E4%B8%BA%E4%BB%80%E4%B9%88%E8%A2%AB%20Dropbox%203.5%20%E4%BA%BF%E7%BE%8E%E5%85%83%E4%B9%B0%E8%B5%B0%EF%BC%9FTigris%20%E5%88%B0%E5%BA%95%E5%80%BC%E4%BB%80%E4%B9%88%EF%BC%9F.md)

> 追查结论摘要：口径与利益：触发线索为自媒体「Vibehood」（2026-11-06）编译稿；本篇在完整保留用户追问（存储基础背景、AWS/GCP/Azure/Cloudflare 对比、单位经济让利vs盈利及跨云流量账单归属）的全部技术科普与实答基础上，已穿透核对 Dropbox 下一步战略公告（2026-11-05）、Dropbox 正式完成收购 Tigris 公告（2026-11-17）、Tigris 官方并购声明、Bucket Forking 架构深拆、10M 小文件 YCSB 基…

### 💬 追问与核查：《Meta收购Conductor：AI编程的下一场竞争，是让多个Agent一起…》

- 所以是个沙盒？类似mersor之前也收购了一个多并发沙盒，沙盒/虚拟机技术的需求好像浮现了出来，i.e. Agent越多对CPU的需求越高，CPU的线程依赖沙盒拆分，不然就会导致之前Muse的用户访问到了别人的数据，所以沙盒技术也变得重要，但是我之前看沙盒/虚拟机，好像只有Broadcom收购了VMware这个消息（当然我很看好broadcom，但是虚拟机业务对broadcom来说太小了），还有别的相关公司吗？

关联文章：[《Meta收购Conductor：AI编程的下一场竞争，是让多个Agent一起干活》](../../blogs/Meta%E6%94%B6%E8%B4%ADConductor%EF%BC%9AAI%E7%BC%96%E7%A8%8B%E7%9A%84%E4%B8%8B%E4%B8%80%E5%9C%BA%E7%AB%9E%E4%BA%89%EF%BC%8C%E6%98%AF%E8%AE%A9%E5%A4%9A%E4%B8%AAAgent%E4%B8%80%E8%B5%B7%E5%B9%B2%E6%B4%BB.md)

> 追查结论摘要：口径与利益：本拆解汇总 Conductor 官方停服与并购公告（2026-11-04）、TechCrunch/Axios 并购报道、Mercor Deeptune 公告、Together AI CodeSandbox 公告、Nutanix FY2026 10-K、Cloudflare 财报、Akamai 披露、AMD EPYC、E2B、Modal 与 Daytona 一手材料，交叉关联 Conductor 档案、Meta 档案、Cursor 档案、Nutanix 档案、Clo…

### 🔍 待核查缺口与证据边界（Open Gaps）

- `not_disclosed`：Dropbox 管理层截至交割完成尚未公开披露 Tigris Data 的具体独立年化经常性收入（ARR）、净留存率及 DBX Agent Cloud 初期对公司整体 GAAP 毛利率（当前 80.6%）的稀释幅度，预计将在 2027 年 2 月财报窗口首次披露。 [线索](https://blog.dropbox.com/topics/company/dropbox-completes-acquisition-of-tigris-data)（关联：[《一家只融了 2500 万美元的公司，为什么被 Dropbox 3.5 亿美元买走？Tigris 到底值什么？》](../../blogs/%E4%B8%80%E5%AE%B6%E5%8F%AA%E8%9E%8D%E4%BA%86%202500%20%E4%B8%87%E7%BE%8E%E5%85%83%E7%9A%84%E5%85%AC%E5%8F%B8%EF%BC%8C%E4%B8%BA%E4%BB%80%E4%B9%88%E8%A2%AB%20Dropbox%203.5%20%E4%BA%BF%E7%BE%8E%E5%85%83%E4%B9%B0%E8%B5%B0%EF%BC%9FTigris%20%E5%88%B0%E5%BA%95%E5%80%BC%E4%BB%80%E4%B9%88%EF%BC%9F.md)）
- `pending_verification`：Tigris 披露的 Fal.ai 节省 85% 综合存储成本案例与 1,000 万 1KB 小文件 YCSB 基准测试（P90 读延迟 \<8ms）均系 Tigris 官方或联合客户发布口径，尚缺独立第三方长期多云大负载审计对比。 [线索](https://www.tigrisdata.com/blog/benchmark-small-objects/)（关联：[《一家只融了 2500 万美元的公司，为什么被 Dropbox 3.5 亿美元买走？Tigris 到底值什么？》](../../blogs/%E4%B8%80%E5%AE%B6%E5%8F%AA%E8%9E%8D%E4%BA%86%202500%20%E4%B8%87%E7%BE%8E%E5%85%83%E7%9A%84%E5%85%AC%E5%8F%B8%EF%BC%8C%E4%B8%BA%E4%BB%80%E4%B9%88%E8%A2%AB%20Dropbox%203.5%20%E4%BA%BF%E7%BE%8E%E5%85%83%E4%B9%B0%E8%B5%B0%EF%BC%9FTigris%20%E5%88%B0%E5%BA%95%E5%80%BC%E4%BB%80%E4%B9%88%EF%BC%9F.md)）
- `unverified_claim`：实体关系入库跳过 (Dropbox --acquired--\> Tigris Data)：human\_certified 边受只补不盖锁保护，自动流程不得覆盖（关联：[《一家只融了 2500 万美元的公司，为什么被 Dropbox 3.5 亿美元买走？Tigris 到底值什么？》](../../blogs/%E4%B8%80%E5%AE%B6%E5%8F%AA%E8%9E%8D%E4%BA%86%202500%20%E4%B8%87%E7%BE%8E%E5%85%83%E7%9A%84%E5%85%AC%E5%8F%B8%EF%BC%8C%E4%B8%BA%E4%BB%80%E4%B9%88%E8%A2%AB%20Dropbox%203.5%20%E4%BA%BF%E7%BE%8E%E5%85%83%E4%B9%B0%E8%B5%B0%EF%BC%9FTigris%20%E5%88%B0%E5%BA%95%E5%80%BC%E4%BB%80%E4%B9%88%EF%BC%9F.md)）
- `unverified_claim`：实体关系入库跳过 (Ovais Tariq (@ovaistariq) --founded--\> Tigris Data)：human\_certified 边受只补不盖锁保护，自动流程不得覆盖（关联：[《一家只融了 2500 万美元的公司，为什么被 Dropbox 3.5 亿美元买走？Tigris 到底值什么？》](../../blogs/%E4%B8%80%E5%AE%B6%E5%8F%AA%E8%9E%8D%E4%BA%86%202500%20%E4%B8%87%E7%BE%8E%E5%85%83%E7%9A%84%E5%85%AC%E5%8F%B8%EF%BC%8C%E4%B8%BA%E4%BB%80%E4%B9%88%E8%A2%AB%20Dropbox%203.5%20%E4%BA%BF%E7%BE%8E%E5%85%83%E4%B9%B0%E8%B5%B0%EF%BC%9FTigris%20%E5%88%B0%E5%BA%95%E5%80%BC%E4%BB%80%E4%B9%88%EF%BC%9F.md)）
- `unverified_claim`：实体关系入库跳过 (a16z --invested\_in--\> Tigris Data)：human\_certified 边受只补不盖锁保护，自动流程不得覆盖（关联：[《一家只融了 2500 万美元的公司，为什么被 Dropbox 3.5 亿美元买走？Tigris 到底值什么？》](../../blogs/%E4%B8%80%E5%AE%B6%E5%8F%AA%E8%9E%8D%E4%BA%86%202500%20%E4%B8%87%E7%BE%8E%E5%85%83%E7%9A%84%E5%85%AC%E5%8F%B8%EF%BC%8C%E4%B8%BA%E4%BB%80%E4%B9%88%E8%A2%AB%20Dropbox%203.5%20%E4%BA%BF%E7%BE%8E%E5%85%83%E4%B9%B0%E8%B5%B0%EF%BC%9FTigris%20%E5%88%B0%E5%BA%95%E5%80%BC%E4%BB%80%E4%B9%88%EF%BC%9F.md)）
- `not_disclosed`：Meta 收购 Conductor (Melty Labs) 的具体交易对价（现金与股票配比）、留任期激励（Earn-out）条款，以及 Conductor 在被收购前夕的精确付费席位数与月度经常性收入（MRR）均未由双方公开披露。 [线索](https://conductor.build/)（关联：[《Meta收购Conductor：AI编程的下一场竞争，是让多个Agent一起干活》](../../blogs/Meta%E6%94%B6%E8%B4%ADConductor%EF%BC%9AAI%E7%BC%96%E7%A8%8B%E7%9A%84%E4%B8%8B%E4%B8%80%E5%9C%BA%E7%AB%9E%E4%BA%89%EF%BC%8C%E6%98%AF%E8%AE%A9%E5%A4%9A%E4%B8%AAAgent%E4%B8%80%E8%B5%B7%E5%B9%B2%E6%B4%BB.md)）
- `not_disclosed`：Cloudflare (NYSE: NET) 2026Q3 财报（总营收 USD 782.5M）与 Akamai (NASDAQ: AKAM) 2026Q2 财报（CIS 营收 USD 99.3M）均未单独拆分披露其 Agent Sandbox / Containers / Workers AI 子产品线的独立收入金额与分项毛利率。 [线索](https://www.cloudflare.com/)（关联：[《Meta收购Conductor：AI编程的下一场竞争，是让多个Agent一起干活》](../../blogs/Meta%E6%94%B6%E8%B4%ADConductor%EF%BC%9AAI%E7%BC%96%E7%A8%8B%E7%9A%84%E4%B8%8B%E4%B8%80%E5%9C%BA%E7%AB%9E%E4%BA%89%EF%BC%8C%E6%98%AF%E8%AE%A9%E5%A4%9A%E4%B8%AAAgent%E4%B8%80%E8%B5%B7%E5%B9%B2%E6%B4%BB.md)）
- `unverified_claim`：实体关系入库跳过 (Meta --acquired--\> Conductor (Melty Labs))：human\_certified 边受只补不盖锁保护，自动流程不得覆盖（关联：[《Meta收购Conductor：AI编程的下一场竞争，是让多个Agent一起干活》](../../blogs/Meta%E6%94%B6%E8%B4%ADConductor%EF%BC%9AAI%E7%BC%96%E7%A8%8B%E7%9A%84%E4%B8%8B%E4%B8%80%E5%9C%BA%E7%AB%9E%E4%BA%89%EF%BC%8C%E6%98%AF%E8%AE%A9%E5%A4%9A%E4%B8%AAAgent%E4%B8%80%E8%B5%B7%E5%B9%B2%E6%B4%BB.md)）
- `unverified_claim`：实体关系入库跳过 (Charlie Holtz --founded--\> Conductor (Melty Labs))：human\_certified 边受只补不盖锁保护，自动流程不得覆盖（关联：[《Meta收购Conductor：AI编程的下一场竞争，是让多个Agent一起干活》](../../blogs/Meta%E6%94%B6%E8%B4%ADConductor%EF%BC%9AAI%E7%BC%96%E7%A8%8B%E7%9A%84%E4%B8%8B%E4%B8%80%E5%9C%BA%E7%AB%9E%E4%BA%89%EF%BC%8C%E6%98%AF%E8%AE%A9%E5%A4%9A%E4%B8%AAAgent%E4%B8%80%E8%B5%B7%E5%B9%B2%E6%B4%BB.md)）

- [《一家只融了 2500 万美元的公司，为什么被 Dropbox 3.5 亿美元买走？Tigris 到底值什么？》](../../blogs/%E4%B8%80%E5%AE%B6%E5%8F%AA%E8%9E%8D%E4%BA%86%202500%20%E4%B8%87%E7%BE%8E%E5%85%83%E7%9A%84%E5%85%AC%E5%8F%B8%EF%BC%8C%E4%B8%BA%E4%BB%80%E4%B9%88%E8%A2%AB%20Dropbox%203.5%20%E4%BA%BF%E7%BE%8E%E5%85%83%E4%B9%B0%E8%B5%B0%EF%BC%9FTigris%20%E5%88%B0%E5%BA%95%E5%80%BC%E4%BB%80%E4%B9%88%EF%BC%9F.md)：完成 gstack v2 升级、多源官方链接实证穿透与全部已有存储背景 Storage 101 科普、四大云巨头（AWS/GCP/Azure/Cloudflare）竞品对比、单位经济模型（Unit Economics）、认知复盘及跨云流量费（Egress Fee）扣费环节与账单归属拆解：核实 Dropbox（NASDAQ: DBX）于 2026-11-05 宣布并以约 3.5 亿美元全现金在 2026-11-17 正式完成对 Tigris Data 的收购并推出 DBX Agent Cloud；对照核验 Tigris 公开定价页（\$0.02/GB/月标准存储、免费额度后收 Class A \$0.005/千次与 Class B \$0.0005/千次，纠偏早先“完全免除请求费”口语表述）、YCSB 10M 1KB 小文件自测基准（P90 读延迟 7.867 ms vs S3 42.047 ms vs R2 680.959 ms）、Fal.ai 节省 85% 官方案例、Shadow Bucket 迁移机制（含 --write-through 模式与 Azure Blob 需 s3proxy 垫片）及 Cloudflare R2 定价（\$0.015/GB/月）；补充 Spark Capital、Basis Set Ventures、Himank Chaudhary、Cloudflare 与 AWS 本体关系边，并在 gaps 中显式记录 Tigris 独立 ARR 与毛利稀释指标待 2027 年 2 月披露缺口。
- [《Meta收购Conductor：AI编程的下一场竞争，是让多个Agent一起干活》](../../blogs/Meta%E6%94%B6%E8%B4%ADConductor%EF%BC%9AAI%E7%BC%96%E7%A8%8B%E7%9A%84%E4%B8%8B%E4%B8%80%E5%9C%BA%E7%AB%9E%E4%BA%89%EF%BC%8C%E6%98%AF%E8%AE%A9%E5%A4%9A%E4%B8%AAAgent%E4%B8%80%E8%B5%B7%E5%B9%B2%E6%B4%BB.md)：完成《Meta收购Conductor：AI编程的下一场竞争，是让多个Agent一起干活》的一手穿透复核与 Agent 沙盒/虚拟化/Server CPU 一二级市场全景研究：（1）核实 Melty Labs (Conductor, YC S24, Charlie Holtz & Jackson de Campos) 2026年3月 \$22M A轮（Spark/Matrix）及 2026年11月4日被 Meta Superintelligence Labs（Alexandr Wang / Nat Friedman）收购、11月13日只读、11月20日关停 Conductor Cloud 的完整时间线，厘清其本地 macOS 客户端基于 git worktree 目录隔离而非内核虚拟机的架构本质；（2）还原 Mercor 2026年7月收购多并发 RL 仿真软件沙盒 Deeptune（及 CEO 参投 Daytona \$60M B轮）、Together AI 收购 CodeSandbox（Firecracker 毫秒级内存快照分叉）、SpaceX/xAI \$60B 收购 Cursor (Anysphere) 及 Meta Muse 2026年8–10月三连安全事故（KVM 逃逸漏洞 CVE-2026-53359 Januscape、macOS 端点劫持、10月子域名被动 DNS 会话泄露导致用户访问他人数据）；（3）从 GPU 毫秒级脉冲 vs CPU 秒/分钟级编译测试占空比剪刀差拆解为何并发 Agent 推爆 Server CPU 与 MicroVM 沙盒，并构建涵盖 Nutanix (NTNX)、Cloudflare (NET)、Akamai (AKAM)、AMD (AMD EPYC Turin SEV-SNP) 及 Modal (\$15.75B)、Daytona (\$1.0B)、E2B 的一二级市场全景投资地图。

## 2. 阅读笔记与原文 Highlight（Reading Highlights & Marginalia）

### 🖍️ 摘录与批注：《一家只融了 2500 万美元的公司，为什么被 Dropbox 3.5 亿美元…》（1 条）

关联文章：[《一家只融了 2500 万美元的公司，为什么被 Dropbox 3.5 亿美元买走？Tigris 到底值什么？》](../../blogs/%E4%B8%80%E5%AE%B6%E5%8F%AA%E8%9E%8D%E4%BA%86%202500%20%E4%B8%87%E7%BE%8E%E5%85%83%E7%9A%84%E5%85%AC%E5%8F%B8%EF%BC%8C%E4%B8%BA%E4%BB%80%E4%B9%88%E8%A2%AB%20Dropbox%203.5%20%E4%BA%BF%E7%BE%8E%E5%85%83%E4%B9%B0%E8%B5%B0%EF%BC%9FTigris%20%E5%88%B0%E5%BA%95%E5%80%BC%E4%BB%80%E4%B9%88%EF%BC%9F.md)

- 复盘：跨云算存割裂与hidden搬运费下，Tigris做近机房免运费存储池与优化，结合Dropbox庞大自有存储硬件形成极佳AI-native Infra


## 3. 收录文章与一手材料（Ingested Articles & Primary Sources）

### [一家只融了 2500 万美元的公司，为什么被 Dropbox 3.5 亿美元买走？Tigris 到底值什么？](../../blogs/%E4%B8%80%E5%AE%B6%E5%8F%AA%E8%9E%8D%E4%BA%86%202500%20%E4%B8%87%E7%BE%8E%E5%85%83%E7%9A%84%E5%85%AC%E5%8F%B8%EF%BC%8C%E4%B8%BA%E4%BB%80%E4%B9%88%E8%A2%AB%20Dropbox%203.5%20%E4%BA%BF%E7%BE%8E%E5%85%83%E4%B9%B0%E8%B5%B0%EF%BC%9FTigris%20%E5%88%B0%E5%BA%95%E5%80%BC%E4%BB%80%E4%B9%88%EF%BC%9F.md)

2026-11-06 · 来源：Dropbox & Tigris 官方博客 · 状态：有来源缺口

[单篇导读（blogs/）](../../blogs/%E4%B8%80%E5%AE%B6%E5%8F%AA%E8%9E%8D%E4%BA%86%202500%20%E4%B8%87%E7%BE%8E%E5%85%83%E7%9A%84%E5%85%AC%E5%8F%B8%EF%BC%8C%E4%B8%BA%E4%BB%80%E4%B9%88%E8%A2%AB%20Dropbox%203.5%20%E4%BA%BF%E7%BE%8E%E5%85%83%E4%B9%B0%E8%B5%B0%EF%BC%9FTigris%20%E5%88%B0%E5%BA%95%E5%80%BC%E4%BB%80%E4%B9%88%EF%BC%9F.md) · [微信原件](../../../../raw/acdd5dcbbdb362f731a2e59883887737da139bddad1c0d60540b841f7eab1863) · 固定版本 `digest-material-acdd5dcbbdb362f731a2e59883887737da139bddad1c0d60540b841f7eab1863@1`

> 11 月 5 日， Dropbox 宣布以约 3.5 亿美元现金收购 Tigris Data ，并同步推出 DBX Agent Cloud。这是 Dropbox 成立以来金额最大的一笔收购，也意味着这家以云存储起家的公司，正式把业务边界从“保存和共享文件”推进到 AI 应用背后的基础设施。交易预计于 2026 年第四季度完成。

> 这笔交易真正值得关注的，不是 Dropbox 又收购了一家 AI 公司，而是它押注的方向发生了变化： 当 AI 从模型调用进入 Agent 时代，Infrastructure 的核心问题正在从“哪里获得更多算力”，逐渐扩展到“数据如何被存储、调用、迁移，并在不同任务之间保持状态”。

关联一手材料：

- Pricing · Cloudflare R2 docs（Cloudflare）· [原站](https://developers.cloudflare.com/r2/pricing/) · [本地原件](../../../../raw/f6e3d68e62fe6d734e529269404d2e3afa0a4575afac4716c2381d60ee212fac) · 版本 `digest-material-f6e3d68e62fe6d734e529269404d2e3afa0a4575afac4716c2381d60ee212fac@1`
  > Use this file to discover all available pages before exploring further. — 原文提取

### [Meta收购Conductor：AI编程的下一场竞争，是让多个Agent一起干活](../../blogs/Meta%E6%94%B6%E8%B4%ADConductor%EF%BC%9AAI%E7%BC%96%E7%A8%8B%E7%9A%84%E4%B8%8B%E4%B8%80%E5%9C%BA%E7%AB%9E%E4%BA%89%EF%BC%8C%E6%98%AF%E8%AE%A9%E5%A4%9A%E4%B8%AAAgent%E4%B8%80%E8%B5%B7%E5%B9%B2%E6%B4%BB.md)

2026-11-05 · 来源：Conductor (Melty Labs) · Meta · Nutanix · Cloudflare · Akamai · AMD · 状态：已整理

[单篇导读（blogs/）](../../blogs/Meta%E6%94%B6%E8%B4%ADConductor%EF%BC%9AAI%E7%BC%96%E7%A8%8B%E7%9A%84%E4%B8%8B%E4%B8%80%E5%9C%BA%E7%AB%9E%E4%BA%89%EF%BC%8C%E6%98%AF%E8%AE%A9%E5%A4%9A%E4%B8%AAAgent%E4%B8%80%E8%B5%B7%E5%B9%B2%E6%B4%BB.md) · [微信原件](../../../../raw/41f4e81b9b058fbe2a476d37c1d7f8fea1f6a2824a916d935a568ef83699a7c9) · 固定版本 `digest-material-41f4e81b9b058fbe2a476d37c1d7f8fea1f6a2824a916d935a568ef83699a7c9@1`

> 开发者可以为同一个代码库创建多个相互隔离的工作空间，同时启动多个AI编程Agent，让它们并行处理不同任务，最后由人来审查、合并代码。Conductor自己不做Agent，它调用的Agent来自Anthropic、OpenAI等头部实验室。

> 一个项目有前端、后端、测试、文档、基础设施配置。让人一个一个和Agent对话，效率还是被人的注意力限制住。Conductor的思路是：为同一个代码库创建多个隔离副本，让Agent并行处理不同任务，人从“写代码”变成“审代码”。

关联一手材料：

- Meta Acquisition of Conductor (Melty Labs), Multi-Agent Sandbox Architecture (Git Worktree vs. Firecracker MicroVM), Meta Muse Isolation Vulnerabilities & Public/Private Virtualization Investment Dossier（Conductor (Melty Labs) · Nutanix / Cloudflare / Akamai / AMD / E2B / Modal 一手披露与本工作台核查档案）· [原站](https://conductor.build/) · [本地原件](../../../../raw/bebb215d4b2860668c5d05a7f83025efbf2f250fe2875be3420b749860326716) · 版本 `digest-material-bebb215d4b2860668c5d05a7f83025efbf2f250fe2875be3420b749860326716@1`
  > # Primary Source Dossier: Meta's Acquisition of Conductor (Melty Labs), Multi-Agent Sandbox Architecture (Git Worktree vs. — 原文提取


## 4. 关联实体网络（Verified Entity Ontology）

- ← [AMD](../companies/AMD.md) · EPYC Turin + SEV-SNP 支撑高密沙盒（human_certified/verified）
- ← Joshua Motta · 任职 / 隶属 · Early Employee / Special Projects（曾任） [已离任/曾任]（rule_verified/verified）
