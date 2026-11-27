---
title: "别让白送的A100显卡和100美元过期，把这4个工具接进Antigravity，一个对话框榨干Google会员隐藏福利"
type: blog_digest
sector: "AI应用与开发工具"
source: "Google · Google Cloud · Google Developers"
published_at: "2026-11-26"
raw_sha256: "c94c7bfe58d37b827eff8b1829f75aa742c825cb2ccedcee0d5d75c7ed41f78d"
material_version: "digest-material-c94c7bfe58d37b827eff8b1829f75aa742c825cb2ccedcee0d5d75c7ed41f78d@1"
origin_url: "https://one.google.com/about/google-ai-plans/"
trigger_source: "大林的AI透视镜"
trigger_url: "https://mp.weixin.qq.com/s/U4EuDUJuj2erDCG5imGz2w"
user_comments: "哇，好好整理一下gemini ultra附送的权益才行"
status: "processed_with_gaps"
primary_topic: "AI编程与多Agent协作"
secondary_topics: ["沙盒、推理与状态基建"]
topic_confidence: 0.4933
---

<a id="digest-c94c7bfe58d37b82"></a>
# 别让白送的A100显卡和100美元过期，把这4个工具接进Antigravity，一个对话框榨干Google会员隐藏福利

2026-11-26 · Google · Google Cloud · Google Developers · 有来源缺口

[本地原件归档](../../../raw/c94c7bfe58d37b827eff8b1829f75aa742c825cb2ccedcee0d5d75c7ed41f78d) · 固定材料版本 `digest-material-c94c7bfe58d37b827eff8b1829f75aa742c825cb2ccedcee0d5d75c7ed41f78d@1` · [一手原站](https://one.google.com/about/google-ai-plans/) · [触发线索（大林的AI透视镜）](https://mp.weixin.qq.com/s/U4EuDUJuj2erDCG5imGz2w)

> [!IMPORTANT]
> 用户关注点（TG）：哇，好好整理一下gemini ultra附送的权益才行

## 针对性追查与回应

### 一、Google AI Ultra 权益全图谱与机制拆解

场景与利益标注：原微信文章出自《大林的AI透视镜》，属于消费级 AI 工具效率与羊毛整合教程，其核心目的是证明用 4 个 CLI/MCP 工具把网页权益收进 Google Antigravity 对话框可以避免配额过期。但该文对 Google AI Ultra 的拆解存在两类结构性偏差：一是以「每月 A100 + 10 到 100 美元 + Flow + 30TB 云盘」四件套概括全部权益，漏掉了 YouTube Premium Family、Google Home Premium Advanced、Google Flow Music 与 Project Genie 等现金等价极高的非开发者资产；二是将官方工具与社区第三方自动化脚本混讲，且未披露个人号与家庭组、地域功能的硬性隔离。

以下先按 Google One 方案页、Google AI Ultra 帮助中心、Google Developer Program 定价与 FAQ、Google Flow 积分规则及 Google Antigravity 定价五份一手文档，拉齐 Google AI 订阅全档位权益结构：

| 权益维度 | Google AI Plus | Google AI Pro | Google AI Ultra 5x（100 美元档） | Google AI Ultra 20x（200 美元档） |
|---|---|---|---|---|
| 标价口径 | 约 4.99 美元/月（第三方汇总） | 19.99 美元/月（官方页确认） | 官方标 100 美元档（约 99.99 美元/月） | 官方标 200 美元档（约 199.99 美元/月，早先首发 249.99 美元） |
| Google Drive 云盘存储 | 400 GB 或 2 TB | 5 TB（部分区 5–10 TB，可 5 人家庭共享） | 20 TB（可 5 人家庭共享） | 30 TB（可 5 人家庭共享） |
| Gemini 与 Antigravity 用量 | 基础 2 倍，含 Gemini 4 Hydrogen | 基础 4 倍，5 小时刷新，含 Gemini 4 Neon、Carbon、Argon、Orchestrator 与 Claude 5.5 | Pro 的 5 倍额度 + 优先队列与 AI Credits 超额 | Pro 的 20 倍额度 + 最高 5 小时/周上限与优先新模型 |
| Google Colab 计算单元 | 50 CU/月 | 200 CU/月（支持 T4 / L4 / A100 等加速器） | 1,000 CU/月 + 后台不间断执行与高阶 GPU | 2,000 CU/月 + 后台不间断执行与高阶 GPU |
| Google Developer Program 赠金 | 无 | 10 美元/月 Cloud 与 GenAI 赠金（不可家庭共享） | 40 美元/月 Cloud 与 GenAI 赠金（不可家庭共享） | 100 美元/月 Cloud 与 GenAI 赠金（不可家庭共享） |
| Google Flow 视频积分 | 200 点/月（全员另享 50 点/日） | 1,000 点/月 + 1080p 放大 0 点（1–10 秒） | 10,000 点/月 + 4K 视频/图片放大权限 | 25,000 点/月 + Lower Priority 模式 Veo 3.1 Lite 0 积分无限跑 |
| Google Flow Music 积分 | 3,000 点/月 | 10,000 点/月（含 Lyria 3.5） | 30,000 点/月（约 6,000 首歌，含商业授权） | 30,000 点/月（约 6,000 首歌，含商业授权） |
| YouTube Premium 权益 | 无 | YouTube Premium Lite 个人版（分地区） | YouTube Premium Family 家庭版（至多 5 名同住成员） | YouTube Premium Family 家庭版（至多 5 名同住成员） |
| Google Health 与 Home | 无 | Health Premium + Home Standard（值 10 美元/月） | Health Premium + Home Advanced（值 20 美元/月，24/7 事件历史） | Health Premium + Home Advanced（值 20 美元/月） |
| 实验室与研究独占 | Gemini Notebook 更大容量 | AI Studio / Android Studio 扩展额度 + Gemini Notebook | Gemini Notebook 最高限（单本 600 来源）+ Hypothesis Generation | 独享 Project Genie 实时交互世界模型（140+ 国家/地区） |

在开发者工作流接入层，四个命令行与 MCP 工具将上述分散网页入口收拢进 Antigravity CLI 或 IDE 对话框：
- 工具一 `google-colab-cli` 与 Colab MCP Server：Google Colab 官方开源 CLI（仅支持 macOS 与 Linux），支持 `colab usage` 查账、`colab run --gpu L4` 临时拉起并自动销毁，以及 `colab new`、`colab install`、`colab exec`、`colab download`、`colab stop` 全周期管线；浏览器交互侧另配官方 `colab-mcp`。
- 工具二 Google Developer Program 与 Google AI Studio Key：通过同一 `@gmail.com` 在 AI Studio 激活 Cloud Billing 后领取月度赠金，供本地脚本、Cline、Cursor 或 GCP `e2-micro`（配合 Standard Tier 网络）调用。
- 工具三 `gflow-cli`：社区作者 `ffroliva` 发布的 MIT 开源 CLI 与 MCP Server（含 70+ 命令与 29 个 MCP 工具，已收录于官方 MCP Registry），可通过环境变量 `GFLOW_CLI_BROWSER_PROXY` 走本地代理，调用 Veo 3.1、Omni 1.2 Flash 与 Nano Banana 2.1、Nano Banana Pro、Imagen 4 生成视频与图像，并以 `gflow mcp run --no-spend` 锁死付费工具防止 Agent 误烧积分。
- 工具四 Workspace CLI（社区 `gws` vs 官方 `gwscli`）：通过 Homebrew（`brew install googleworkspace-cli`）或 npm 安装的 `googleworkspace/cli`（`gws`）动态读取 Google Discovery Service，返回 JSON 并内置 40+ Agent Skills；Google 官方另已发布正式支持版 `gwscli`。

### 二、核心数据核查、口径纠偏与合规/工程边界

本工作台核查四组核心事实并标注对应置信度与机制边界：

1. ✅ 事实核查（Colab 并入时间线与 Developer 赠金规则）：[Google Developers 2026-09-22 官方博客](https://developers.googleblog.com/colab-is-now-part-of-your-google-ai-plan/) 确认 Colab 算力正式并入 Google AI 订阅，且 Ultra 解锁后台不间断执行；[Google Developer Program 定价页](https://developers.google.com/program/plans-and-pricing) 与 [AI Studio 计费文档](https://aistudio.google.com/docs/google-ai-plans) 确认 Pro 10 美元/月、Ultra 5x 40 美元/月、Ultra 20x 100 美元/月赠金及每笔 12 个月有效期，Prepay 预付账户首次激活需至少预存 5 美元并优先消耗赠金（但付费余额跌至 0 时赠金会暂停抵扣）。需要补充的口径偏差：据 [Developer Program 权益 FAQ](https://developers.google.com/profile/help/benefits)（2026-11-09 更新），原独立付费的 Developer Program Premium 已于 2026-09-18 停续，1 对 1 专家咨询、GCP 认证考券与无限 Google Skills 已从 AI Pro/Ultra 剥离（仅保留 35 点/月 Google Skills 学分），且月度赠金按「首次在控制台激活日期」的月度周年发放，而非自然月初；此外 `e2-micro` 免费额度与 200GB Standard Tier 出站仅限美国特定区域（`us-central1`、`us-west1`、`us-east1`），跨区部署直接扣抵赠金。

2. ⚠️ 口径纠偏（Pro 存储起点、Flow 月度不滚存与 Colab 显卡动态费率）：第一，[Google One 方案页](https://one.google.com/about/google-ai-plans/) 显示 Pro 档现行云盘为 5 TB（部分区 5–10 TB），并非公号所写的 2 TB 起步（2 TB 属 Plus 可选档）。第二，[Google Flow 积分帮助页](https://support.google.com/flow/answer/16526234?hl=en) 明确规定「月度 Flow 积分与每日 50 点均不跨月滚存」（Unused monthly Google Flow credits do not roll over to the next month），因此不会像 Colab 算力那样攒 3 个月，必须当月消耗；不过 Flow 官方确于 2026-12-05 下线 Omni 1.1 Flash、Veo 3.1 Fast 与 Veo 3.1 Quality（Veo Extend 已于 2026-11-05 下线），工作流须切至 Omni 1.2 Flash（720p 前 10 秒 3 点/秒、11–15 秒 6 点/秒，4K 放大每次 50 点且仅 Ultra 可用）或 Veo 3.1 Lite（Ultra 每次 5 点，Ultra 20x Lower Priority 模式 0 点）。第三，公号转述日本博主测得的 T4 1.15 CU/h、L4 1.94 CU/h、Blender 渲染速度提升 3.5 倍与 20 秒 A100 视频耗 5 CU 系单次负载采样，非官方固定单价表；社区多组长时监测显示 L4 实耗约 3.0–4.8 CU/h、A100 约 10.6–15.0 CU/h（随高内存与后台调度变化），且晚高峰非 Ultra 用户常被降级分配 16GB 显存卡而非 80GB A100，停机后计费结算延迟要求每次务必执行 `colab usage`、`colab sessions` 与 `colab stop`。

3. ❌ 主体与风控纠偏（社区 `gws` 冒名替代官方 `gwscli`、第三方 `gflow-cli` 及账号隔离）：第一，[googleworkspace/cli README](https://raw.githubusercontent.com/googleworkspace/cli/main/README.md) 首页明文警示 `gws` 是非官方支持的社区项目，并引导用户迁往 Google 官方支持版 `gwscli`（[Google Workspace CLI 文档](https://developers.google.com/workspace/guides/workspace-cli)）；公号把 `gws` 当作主力而仅轻描淡写提一句原生 `gwscli` 属于主体归属失准，不过公号提示的 Google OAuth 未验证 Test 模式约 25 个 Scope 限制（默认全量 85+ Scope 报 Access blocked，须用 `-s drive,gmail,sheets` 并登记 Test users）确与原文档吻合。第二，`gflow-cli` 系个人作者维护的第三方工具，因 Flow 纯 HTTP 端点受 reCAPTCHA 与 401 拦截，它必须驱动本地有头 Playwright Chrome 窗口运行，存在网页 Selector 漂移与账号风控隐患。第三，公号漏掉三条硬门槛：Google Workspace 商业/教育账号绝对不可订阅 Google AI Pro/Ultra；10/40/100 美元 Cloud 赠金严格禁止家庭组共享（Colab 亦仅限家庭组管理员与非试用付费用户）；AI Inbox、Deep Search、Google Photos Remix/Photo-to-video、Google Earth Gemini、Playground、Dreambeans 与 Google TV Create Hub 仅限美国，Chrome Auto Browse 仅限美国与印度。

4. 本工作台测算（Ultra 5x 与 20x 的单月现金等价回本线）：以 Ultra 5x（约 99.99 美元/月）计，40 美元 Cloud 赠金 + YouTube Premium Family（约 23 美元级独立售价）+ Google Home Premium Advanced（20 美元官方估值）+ 20TB 存储（约 100 美元独立原价级替代）的账面价值已覆盖月费，再叠加 1,000 Colab CU、10,000 Flow 视频积分与 30,000 Flow Music 积分，对有家庭流媒体或云盘刚需的用户接近零溢价。但对比 Ultra 20x（约 199.99 美元/月，月差价多出 100 美元），其增量仅为多 60 美元 Cloud 赠金 + 多 10TB 存储 + 多 1,000 Colab CU + 多 15,000 Flow 积分 + 0 积分 Veo 3.1 Lite LP + Project Genie + Antigravity 4 倍配额跃升（5x 升至 20x）。本工作台推断，若不包含非美区受限功能且家庭内无需 YouTube Family/20TB 存储，单纯冲着 Cloud 赠金订阅 Ultra 20x 仍存在每月 100 美元的固定沉没成本，只有重度并发驱动 Antigravity Agent 与 Colab 2,000 CU 的开发者才能吃满 20x 档位。

### 三、赛道横向对比：全栈生态捆绑 vs 垂直开发/算力工具

对比垂直编程订阅（如 Cursor 或 Claude Code 按代码生成 Token/快速请求单点收费）与专用 GPU 云（RunPod、Modal 按秒租卡），Google 通过 Google One 将基础设施级消费（YouTube 家庭版、30TB 云盘、智能家居）与开发者高毛利入口（Antigravity、Gemini API 赠金、Colab CU）绑在同一张月费账单里，形成独特的跨品类交叉补贴定价权。代价则是入口极度碎片化与账号资格硬切割：Workspace 企业域账号被完全挡在 Pro/Ultra 门外（只能转向按席位 30 美元/月起或按量付费的 Gemini Enterprise），且非美区开发者会损失 AI Inbox、Chrome 自动浏览与 Google Photos AI 等一长串本地化消费权益，从而抬高了纯开发者的实际有效单位算力成本。

### 观点与可反驳条件

- ==观点==：Google AI Ultra 已从早期单一的 249.99 美元高门槛方案重塑为 99.99 美元（5x）与 199.99 美元（20x）双档位开发者与家庭交叉补贴包；其中 Ultra 5x 凭借 40 美元可跨 12 个月累加的 Cloud 赠金、YouTube Premium Family 与 1,000 Colab CU 构成综合性价比拐点，而公号忽视 Flow 积分按月清零、社区 `gws` 非官方属性及个人 `@gmail.com`/地域/家庭组硬隔离，会让纯内地企业开发者高估实际可落袋权益。
- ==推翻条件==：① 政策收紧条件：Google 在未来 2 个季度内修改 Google Developer Program 条款，取消 40/100 美元月度 Cloud 赠金的 12 个月滚动累积期（改为当月清零），或将 Colab 附赠计算单元降权至与免费版同队列且取消 A100/L4 优先配额；② 工具链官方化条件：Google 正式推出支持本地 MCP/CLI 直连的官方 Google Flow 命令行接口或全面封杀基于 Playwright Chrome 的自动化请求（导致 `gflow-cli` 大规模触发账号验证失效），使桌面浏览器脚本路径失去工程可行性。

---

## 原文摘录与一手信源存证

> 前两天有个做短视频的朋友跟我吐槽，他一条480P的数字人口播发平台被判画质太低违规，拿本地电脑跑免费超分工具预计要卡整整6个小时，结果听劝扔给Google AI会员自带的云端L4显卡，实际开机渲染只花了153秒就拿回了1080P成片，打开后台一看，账户里居然躺着598个没用过的免费算力单元。
> — 原文摘录，文字段落 1；证据 `digest-material-c94c7bfe58d37b827eff8b1829f75aa742c825cb2ccedcee0d5d75c7ed41f78d-excerpt-1@1`

> 其实90%订了Google AI Pro或Ultra的人，都把每月白送的A100云端显卡、10到100美元真金白银、上万点Flow视频积分和30TB云盘放过期了，今天这篇就教你把4个命令行工具接进Antigravity，连浏览器网页都不用开，待在一个对话框里把这些隐藏福利彻底榨干。
> — 原文摘录，文字段落 2；证据 `digest-material-c94c7bfe58d37b827eff8b1829f75aa742c825cb2ccedcee0d5d75c7ed41f78d-excerpt-2@1`

一手材料：

- Google AI plans with cloud storage · Google · [原站](https://one.google.com/about/google-ai-plans/) · [主体档案：Google](../entities/companies/Google.md) · [本地原件](../../../raw/60c53935fa85dbe329428faa10368f4f5e77d32031aade20ad01aacbbccd904d)
  材料版本 `digest-material-60c53935fa85dbe329428faa10368f4f5e77d32031aade20ad01aacbbccd904d@1`；获取方式 `http_full_text_snapshot`。
  > Access to Gemini 4 Hydrogen and Deep Research in Gemini. — 原文提取
  > Gemini in Google apps to help you proofread in Gmail. — 原文提取
- Use Google AI Ultra benefits - Google One Help · Google · [原站](https://support.google.com/googleone/answer/16286513?hl=en) · [主体档案：Google](../entities/companies/Google.md) · [本地原件](../../../raw/366441d5c6c435d9a6b72e97dc60d40f16f1d6261ba963499cfac96981c600c8)
  材料版本 `digest-material-366441d5c6c435d9a6b72e97dc60d40f16f1d6261ba963499cfac96981c600c8@1`；获取方式 `http_full_text_snapshot`。
  > Each product has its own AI usage limits. Your usage limits depend on the features you use and your Google AI plan. — 原文提取
  > With a Google AI Ultra plan, you get the highest access to Google AI. Based on your specific Google AI Ultra plan, you get 5x or 20x usage quota in Gemini and Google Antigravity compared to the Google AI Pro plan. — 原文提取
- Google Developer Program Plans & Pricing · Google · [原站](https://developers.google.com/program/plans-and-pricing) · [主体档案：Google](../entities/companies/Google.md) · [本地原件](../../../raw/94a0506094950e1b721c8073cb48750a2df5017fa9c81e86b1ca1e31ac69026b)
  材料版本 `digest-material-94a0506094950e1b721c8073cb48750a2df5017fa9c81e86b1ca1e31ac69026b@1`；获取方式 `http_full_text_snapshot`。
  > Start building in AI Studio, Gemini platform or any Google product. — 原文提取
  > Access to the entire catalog of 700+ courses, hands-on labs, and skill badges. — 原文提取
- Google Developer Program Benefits FAQ · Google · [原站](https://developers.google.com/profile/help/benefits) · [主体档案：Google](../entities/companies/Google.md) · [本地原件](../../../raw/3807451f8fabd4db131c99561b1cfa4b76f041a493f53b99f40db42e5d3ed9aa)
  材料版本 `digest-material-3807451f8fabd4db131c99561b1cfa4b76f041a493f53b99f40db42e5d3ed9aa@1`；获取方式 `http_full_text_snapshot`。
  > Save and categorize content based on your preferences. — 原文提取
  > The Google Developer Program offers free tools, resources, and community support to aid developers in their journey. — 原文提取
- Google AI plans in Google AI Studio · Google · [原站](https://aistudio.google.com/docs/google-ai-plans) · [主体档案：Google](../entities/companies/Google.md) · [本地原件](../../../raw/8d1db2f72df8095349f311c9401fed544a3133edf20f6cbcf66ed29db7e79447)
  材料版本 `digest-material-8d1db2f72df8095349f311c9401fed544a3133edf20f6cbcf66ed29db7e79447@1`；获取方式 `http_full_text_snapshot`。
  > Use your Google AI subscription plan in Google AI Studio and claim monthly Gemini API credits without leaving the app. — 原文提取
  > Google AI Pro and Ultra plans give you higher daily usage limits, access to more models, and monthly Google Cloud credits for the Gemini API. — 原文提取
- Manage your Google Flow credits · Google · [原站](https://support.google.com/flow/answer/16526234?hl=en) · [主体档案：Google](../entities/companies/Google.md) · [本地原件](../../../raw/4b4355fad936ecf9330d670e2cd61caeb39f41a63b46790742f25afd2acb1b6e)
  材料版本 `digest-material-4b4355fad936ecf9330d670e2cd61caeb39f41a63b46790742f25afd2acb1b6e@1`；获取方式 `http_full_text_snapshot`。
  > To generate content in Google Flow, you need to use Google Flow credits or AI credits. Your Google Flow or AI credits are shared across your account, regardless of which device you use. — 原文提取
  > During peak hours, roughly 2 PM to 5 PM UTC, you may not be able to generate videos without a subscription. — 原文提取
- Google Antigravity - Pricing · Google · [原站](https://antigravity.google/pricing) · [主体档案：Google](../entities/companies/Google.md) · [本地原件](../../../raw/3d54b14900739eafb61fd50dbbfabaec97ece1879625c2e13ae17f5446c9705c)
  材料版本 `digest-material-3d54b14900739eafb61fd50dbbfabaec97ece1879625c2e13ae17f5446c9705c@1`；获取方式 `http_full_text_snapshot`。
  > Start building for free, scale daily agent workflows with Google AI Pro or Ultra, or deploy organization-wide on Google Cloud. — 原文提取
  > Scale multi-workspace agent workflows across the app, CLI, and IDE Extensions with higher 5-hour refreshed quotas. — 原文提取
- Colab is now part of your Google AI plan · Google · [原站](https://developers.googleblog.com/colab-is-now-part-of-your-google-ai-plan/) · [主体档案：Google](../entities/companies/Google.md) · [本地原件](../../../raw/b37bec2b74603c0cb5461c3f764d8b6b02d1d6e2b599b3e3c9e76c8acdf9ca5c)
  材料版本 `digest-material-b37bec2b74603c0cb5461c3f764d8b6b02d1d6e2b599b3e3c9e76c8acdf9ca5c@1`；获取方式 `http_full_text_snapshot`。
  > benefits, including priority access to faster accelerators and more powerful machines. — 原文提取
  > . If you already subscribe to Colab there are no changes to your subscription, Google AI subscription benefits can be stacked giving even more access to premium Colab features. — 原文提取
- googlecolab/google-colab-cli README · Google Colab · [原站](https://raw.githubusercontent.com/googlecolab/google-colab-cli/main/README.md) · [主体档案：Google](../entities/companies/Google.md) · [本地原件](../../../raw/e1378de8dfe326750c7d6367db6596385a2109f18a7d8a486a461fdede0bde09)
  材料版本 `digest-material-e1378de8dfe326750c7d6367db6596385a2109f18a7d8a486a461fdede0bde09@1`；获取方式 `http_full_text_snapshot`。
  > A command-line interface for Google Colab. Provision high-performance CPU, GPU, and TPU runtimes, execute local code, manage remote files, and orchestrate automated cloud pipelines — directly from your terminal. — 原文提取
  > Designed to support seamless developer productivity, headless automation, and AI agent integrations. — 原文提取
- ffroliva/gflow-cli README · ffroliva (第三方开源) · [原站](https://raw.githubusercontent.com/ffroliva/gflow-cli/main/README.md) · [主体档案：ffroliva](../entities/people/ffroliva.md) · [本地原件](../../../raw/314e90e8e61e004160e38b3e5753ccb93202578af8726693b13facfb7f38cd1e)
  材料版本 `digest-material-314e90e8e61e004160e38b3e5753ccb93202578af8726693b13facfb7f38cd1e@1`；获取方式 `http_full_text_snapshot`。
  > \> \*\*gflow-cli is an open-source MCP server and command-line tool that automates \[Google Flow\](https://labs.google/fx/tools/flow).\*\* It generates Veo 3.1 and Omni video and Nano Banana and Imagen images from Claude Code, Claude Desktop, Cursor, Codex, VS Code or your terminal, billed to your own Google account's Flow credits. — 原文提取
  > An independent project, not affiliated with Google. — 原文提取
- googleworkspace/cli (gws) README · googleworkspace/cli (社区项目) · [原站](https://raw.githubusercontent.com/googleworkspace/cli/main/README.md) · [主体档案：Google](../entities/companies/Google.md) · [本地原件](../../../raw/adfe1c02dd51ee7e99f316abf5b80b931d0780e90d9924a50eeeec83d12204c1)
  材料版本 `digest-material-adfe1c02dd51ee7e99f316abf5b80b931d0780e90d9924a50eeeec83d12204c1@1`；获取方式 `http_full_text_snapshot`。
  > \*\*One CLI for all of Google Workspace — built for humans and AI agents.\*\*\<br\> Drive, Gmail, Calendar, and every Workspace API. Zero boilerplate. Structured JSON output. 40+ agent skills included. — 原文提取
  > \> \[!NOTE\] \> The official Google Workspace CLI (\`gwscli\`) is now available. It's supported by Google and built for AI agents. Give it a try and \[tell us\](https://forms.gle/4rSpc9941Cecg1BUA) what's missing. — 原文提取
- Google Workspace CLI (gwscli) Documentation · Google · [原站](https://developers.google.com/workspace/guides/workspace-cli) · [主体档案：Google](../entities/companies/Google.md) · [本地原件](../../../raw/82760e4e0fa1be84bbc35771948e80fabcf9d624176fbf80f698487fa64ddcc0)
  材料版本 `digest-material-82760e4e0fa1be84bbc35771948e80fabcf9d624176fbf80f698487fa64ddcc0@1`；获取方式 `http_full_text_snapshot`。
  > Some Google Workspace MCP tools are currently rolling out and might be temporarily unavailable. — 原文提取
  > Save and categorize content based on your preferences. — 原文提取

归属与范围：已完成对公众号《大林的AI透视镜》所述 Google AI Pro/Ultra 权益及 4 个命令行/MCP 工具的跨一手核查，穿透至 Google One 方案页、Google AI Ultra/Pro 官方帮助中心、Google Developer Program 定价与 FAQ、Google AI Studio 计费文档、Google Flow 积分规则、Google Antigravity 定价、Google Developers 官方博客与各开源仓库 README，厘清 5x/20x 双档差异、存储与赠金口径偏差、Flow 不滚存限制、账号/家庭组/地域门槛以及社区 gws 与官方 gwscli 主体归属差异。

来源缺口：

- `not_disclosed`：one.google.com/about/google-ai-plans/ 静态网页源码未内嵌分地区月费标价（由地区结账接口动态加载），官方页面仅在 Google Developer Program 明确 Google AI Pro 为 19.99 美元/月，在 Google Flow 帮助文档标出 Google AI Ultra 100 美元与 200 美元两档，Ultra 5x 99.99 美元/月与 Ultra 20x 199.99 美元/月（早先首发 249.99 美元/月）的零头定价来自第三方追踪摘要交叉印证。 [线索](https://one.google.com/about/google-ai-plans/)
- `not_disclosed`：Google Colab 官方 FAQ 与公告未公布 T4、L4、A100 等 GPU 的固定每小时 CU 扣费标准（按实例内存配置与动态负载实时计费），也未单列 Google AI 计划附赠 CU 是否严格按 90 天（3 个月）滚动失效的公开条款页，公众号引用的 T4 1.15 CU/h、L4 1.94 CU/h 及 5 CU 跑 20 秒视频均属于外部单次实测采样。 [线索](https://research.google.com/colaboratory/faq.html)

[返回赛道总览](../赛道总览.md#digest-c94c7bfe58d37b82) · [返回导读索引](README.md) · [主体档案库](../entities/README.md)
