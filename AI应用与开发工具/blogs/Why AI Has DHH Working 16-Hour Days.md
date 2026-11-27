---
title: "Why AI Has DHH Working 16-Hour Days"
type: blog_digest
sector: "AI应用与开发工具"
source: "The a16z Show (a16z Podcast)"
published_at: "2026-11-20"
raw_sha256: "ec09de70f42407e3d247277a84cb29cab1dfa79f9fe0d04e3e41ac29ef8a7d88"
material_version: "digest-material-ec09de70f42407e3d247277a84cb29cab1dfa79f9fe0d04e3e41ac29ef8a7d88@1"
origin_url: "https://www.youtube.com/watch?v=TtOoLanFzGw"
trigger_source: "The a16z Show (a16z Podcast)"
trigger_url: "https://www.youtube.com/watch?v=TtOoLanFzGw"
user_comments: ""
status: "processed_with_gaps"
primary_topic: "AI编程与多Agent协作"
topic_confidence: 0.5774
---

<a id="digest-ec09de70f42407e3"></a>
# Why AI Has DHH Working 16-Hour Days

2026-11-20 · The a16z Show (a16z Podcast) · 有来源缺口

[本地原件归档](../../../raw/ec09de70f42407e3d247277a84cb29cab1dfa79f9fe0d04e3e41ac29ef8a7d88) · 固定材料版本 `digest-material-ec09de70f42407e3d247277a84cb29cab1dfa79f9fe0d04e3e41ac29ef8a7d88@1` · [一手原站](https://www.youtube.com/watch?v=TtOoLanFzGw)

## 深度拆解与复核

## 深度拆解与复核

- 口径与利益：本期内容源自 [The a16z Show（YouTube 2026-11-20，《Why AI Has DHH Working 16-Hour Days》）](https://www.youtube.com/watch?v=TtOoLanFzGw)，同一期节目在 [Simplecast / Apple Podcasts / Spotify 官方音频源](https://a16z.simplecast.com/episodes/why-the-agent-era-needs-a-new-operating-system-dhh-aj7iuAnL) 标题为《Why the Agent Era Needs a New Operating System | DHH》（Intro 至 47:33 完整章节对应）。主讲嘉宾 David Heinemeier Hansson（DHH）为 Ruby on Rails 与 [Omarchy](https://omarchy.org/) 创建者、[37signals](https://37signals.com/) 联合所有人兼 CTO、Shopify 董事及 [Omacom Foundation](https://omarchy.org/foundation/) 主席；对谈方为 a16z General Partners Martin Casado 与 Anish Acharya。YouTube 端采用「16-Hour」工作时长作为传播切口（与 DHH 过往著作《It Doesn't Have to Be Crazy at Work》构成反差吸睛），而 DHH 本人亦天然具有推广 Omarchy 桌面生态、开源权重模型与反 macOS/App Store 封闭抽成的立场激励；a16z 则围绕基础设施重构与开源代理赛道输出行业议题。因完整逐字稿未公开，以下机制剖析与数据核查基于节目章节、公开音频分发源及 [omarchy.org](https://omarchy.org/news/)、[world.hey.com/dhh](https://world.hey.com/dhh) 一手文本交叉互证。

### 一、From Rails and Basecamp to Linux：Agent 时代为何重开桌面 OS 窗口

1. Linux 从桌面弱势逆转为 Agent 最优执行基底（00:48–08:17）
   - 确定性 GUI 阻力 vs 文本化系统可塑性：传统桌面系统（macOS 与 Windows）面向人类鼠标点击设计，将系统设置隐藏在多层图形面板与沙盒权限弹窗后，Agent 每次跨应用或改写系统配置均受阻于 GUI 视觉定位与签名权限墙。Linux 长期令普通消费级用户望而却步的三项特征——纯终端命令流（CLI）、纯文本配置文件（dotfiles / YAML / QML / bash）与冗长清晰的报错堆栈——恰恰构成大模型与终端 Agent 可直接读写、闭环自愈的天然接口。
   - 实体化载体 Omarchy：由 37signals 孵化、基于 Arch Linux 与平铺窗口管理器 Hyprland 构建的 [Omarchy](https://omarchy.org/)，将「可对话修改的操作系统（malleable OS for the age of agents）」设为产品核心——用户遇到桌面布局、主题、快捷键或系统故障时，不必手动查 Wiki，直接向代理发出自然语言指令即可修改系统配置并实时生效。Omarchy 4.5（2026-11-04 发布）已新增兼容 macOS/Windows 习惯的浮动窗口与程序坞（Super + L 切换平铺/滚动/浮动模式），并在 [AI 手册](https://omarchy.org/manual/ai/) 中采取「不预设单一模型赢家」策略，预置 20 余款免默认锁定的 CLI 代理启动器，涵盖 `claude`（Claude Code）、`codex`（OpenAI Codex）、`opencode`（OpenCode）、`agy`（Google Antigravity CLI）、`cursor-agent`、`devin`、`grok`（Grok Build）、`hermes`、`kimi`（Kimi Code）、`mcode`（MiniMax Code）、`muse`（Muse Code）、`dsh`（DeepSeek Harness）与 `ori`（OpenRouter Ori）。
   - 从桌面延伸至商业 SaaS 协议：DHH 在 [《Basecamp becomes agent accessible》（2026-03-25）](https://world.hey.com/dhh/basecamp-becomes-agent-accessible-3ae6b949) 中披露，37signals 实验 18 个月「应用内嵌 AI 按钮」均因体验平庸未上线，转而将 Basecamp 全量 API 重构、补齐官方 CLI 并封装为 Agent Skill（随后推进 Fizzy 与 HEY），使外部代理（如结合 Sentry MCP 自动抓错并写入 Basecamp 待办与消息）直接操作企业数据，绕开人类手工开发集成接口的高昂成本。

2. 代码供给充裕化、平台锁定松动与「最终 2%」品味壁垒（08:17–25:58，31:50–47:33）
   - 应用商店与源码护城河稀释：DHH 指出过去数十年桌面（macOS / Windows）与移动平台（iOS / Android）维持双寡头垄断的核心壁垒是应用目录锁定——用户在特定平台绑定专用商业软件。当代理编写软件的边际成本接近归零、生成速度达每秒数千 Token 时，用户或小团队可按自身精确工作流现场复刻专用工具（节目提及 Omarchy 社区成员用约两周时间依托代理重建适配个人插件的 Adobe Lightroom 替代品，DHH 本人亦不再依赖传统 Word 类富文本软件，改由代理动态生成 PDF 与合同），从而削弱「因为某款独占软件而必须留守 macOS」的迁移锁死；不过面对移动端「能否诞生第三大手机 OS（08:17）」，物理硬件供应链与通信基带壁垒依然显著高于桌面端，桌面窗口期远大于移动端。
   - 16-Hour 工作制与最终 2%（the final 2%）悖论：DHH 自嘲曾著《It Doesn't Have to Be Crazy at Work》，如今却因 AI 代理进入高强度 16 小时工作节奏。原因在于「发现问题到修复上线」的摩擦被压缩至分钟级，代理完成前 98% 的常规脚手架与 bash/QML/驱动调试后，产品能否脱颖而出完全取决于人类对最后 2% 审美、交互细节与边界打磨的执着。对应地，[《Over my dead pencil》（2026-10-06）](https://world.hey.com/dhh/over-my-dead-pencil-fb0f3647) 记录了他在 Rails World 现场的举手调研——台下已仅剩极少数工程师每周仍手写大量代码，他由此主张程序员「放下铅笔」，转向架构审查、品味把关与并发代理团队指挥。
   - Big AI labs vs 开源权重与黑客文化回归（25:58–47:33）：面对闭源前沿实验室寡头化风险，DHH 强调开源权重模型（如他在 [2026-01-07 博文](https://world.hey.com/dhh/promoting-ai-agents-3ee04945) 实测调用的 MiniMax M2.1、GLM-4.7 与后续高频使用的 Kimi K 系列）是抑制闭源巨头形成新式数字租税与审查封锁的必要制衡；同时社区氛围正回流至 1990 年代 Demo 场景与匿名/化名黑客文化（如 [Omarchy Doctrine](https://omarchy.org/doctrine/) 主张淡化身份政治与繁文缛节、以代码与作品论英雄，并在 [《Let the agents democratize open source》（2026-06-01）](https://world.hey.com/dhh/let-the-agents-democratize-open-source-9fd630a9) 中抨击部分开源项目封杀 AI 辅助提交为旧行会保护主义）。

### 二、核心数据与工程机制核查：16 小时、90% 自动化口径变迁与 $24M 资助底座（✅ / ⚠️ / ❌）

| 核查维度 | 访谈或传播表层表述 | 一手信源与本工作台核查结论（✅ / ⚠️ / ❌） |
| :--- | :--- | :--- |
| Omarchy 分发规模与增长斜率 | 「计划超越 macOS」且社区爆发增长 | ✅ / ⚠️ 口径分层（本工作台核查）：[Omarchy 官方公告](https://omarchy.org/news/2026/09/quattro-crosses-200000-iso-downloads/) 实证 Quattro 发布前 18 天完成 200,000 次完整 ISO 下载（覆盖 215 个国家/地区，均值每 8 秒 1 次、峰值每小时 1,165 次；美国占 28%、北欧人均超美国 2 倍；[2026-08-28 单周](https://omarchy.org/news/2026/08/100000-downloads-in-a-week/) 达 100,000 次下载、Cloudflare R2/CDN 承压 ~1 PB 周流量），且在 1Password 用户遥测中工作日跃居 Linux 发行版第 2（超 Fedora）、周末居第 1，Discord 约 35,000 人；但 ISO 下载量包含重装与尝鲜试验，并非 macOS 级常驻日活装机量，Apple Silicon 原生支持也刚通过 [Omarchy 4.5](https://omarchy.org/news/2026/11/omarchy-4-5/) 与 [Aurora Silicon](https://omarchy.org/news/2026/11/omacom-foundation-to-sponsor-aurora-silicon/) 完成 M1/M2/M3/Neo 初版适配（M4/M5/M6 仍在开发中）。 |
| Omacom Foundation 资助体量与金主结构 | 非营利基金池号称达 $24M | ⚠️ 资金结构与兑付口径拆解（本工作台核查）：[基金公告](https://omarchy.org/news/2026/08/omacom-foundation-launches-with-8-million/) 最初以 8 名个人 $8M 起步，至 2026-11 已扩至约 $24M 承诺，但需拆为四类口径——① 12 位个人创始赞助人各 $1M 现金（含 Shopify CEO Tobi Lütke、Stripe CEO Patrick Collison、Michael Dell、Jack Dorsey、Cloudflare CEO Matthew Prince、Dropbox 联合 CEO Drew Houston、OpenClaw 作者 Peter Steinberger、Coinbase CEO Brian Armstrong、37signals CEO Jason Fried、Brendan Iribe、Yunjie Dai 与 DHH）；② 4 家创始企业/Token 赞助方（DigitalOcean 与 Alibaba Cloud 各承诺 $1M/年×3 年=$3M；Meta Superintelligence Labs 捐赠 $1.5M Meta Muse Spark Token；SpaceXSI 捐赠 $1.5M Grok Token）；③ 杰出个人/企业赞助方（1Password、37signals、Namespace、Beelink 各 $100K/年×3 年；OpenAI、Fireworks、Greptile 各 $150K Token，及 OpenRouter/OrcaRouter/Four Technologies 等）。可见近四成至半数承诺属多年期分期或算力/Token 抵扣券，并非一次性现金实缴资产。 |
| DHH 对「代理写代码占比与纯 Vibe Coding」的态度 | 媒体转述为「一行代码不手写、全部 Vibe Coding 建成 OS」 | ⚠️ 前后时间线校准（本工作台核查）：在 [2026-01-07 博文](https://world.hey.com/dhh/promoting-ai-agents-3ee04945) 中，DHH 明确驳斥「90%+ 代码由代理生成」的行业炒作，坚持当时纯 vibe coding 无法守住专业代码库内聚性，仅认可「受监督协作（supervised collaboration）」；至 [2026-09-03 公告](https://omarchy.org/news/2026/09/omacom-foundation-secures-tokens-from-leading-labs/) 与 [2026-10-06 博文](https://world.hey.com/dhh/over-my-dead-pencil-fb0f3647)，因 Omarchy 核心栈大量由 bash/QML/Linux 配置构成且代理模型跃迁，Omarchy Quattro 已确认「几乎完全由代理编写与维护（应对 1,600+ 至近 7,000 个社区 PR 积压、550+ 贡献者）」。结论变化并非前后自相矛盾，而是任务基底差异——系统配置/外壳脚本（bash/QML）高度适配 Agent，且人类评审与 PR 门禁（如 Omabot 与 ThePrimeagen 主导的 Agentic QA）仍承担最后 2% 把关。 |
| 37signals「全员迁出 MacBook」与云下迁效率基线 | 全面抛弃 Apple 硬件与公有云 | ✅ / ⚠️ 边界核实：37signals 确已将全部技术团队迁入 Omarchy 并以 Framework 笔记本/桌面机与 Beelink 迷你主机替代 MacBook（三年换机周期），Cloud Exit（借 Kamal 从 AWS/GCP 下迁）此前已将年云账单由 $3.2M 降至 ~$1.3M（5 年预计省超 $10M 且未增运维编制）；但 [DHH 与官方披露](https://omarchy.org/news/2026/09/introducing-omarchy-m/) 仍坦承 Apple Silicon 能效比优势（Framework 13 混合续航约 6 小时，且 Omarchy 4.5 反而大力开发 Mac 原生双系统安装器与 `mlx-omarchy` 适配 M1–M3 存量苹果用户），同时 37signals 内部迁移前后具体测试耗时/人效提升数字未对外公开。 |
| 「16 小时狂热工作」作为软件行业普遍生产率模板 | AI 时代极客个人靠 16 小时超越千人团队 | ❌ 反例与约束条件提示（本工作台推断）：DHH 拥有 Rails 与 37signals 二十余年累计的架构直觉、审美品位与零官僚股权结构（与 Jason Fried 私人控股），才能将 16 小时输入稳定转化为高内聚产品；若缺乏架构判断力，盲目延长人机并发提示词时长只会呈指数级放大代码熵增与安全漏洞（参照 Omarchy 为应对 7,000 PR 仍须专门设立 $100,000 HackerOne 漏洞赏金并由专业安全团队与 Greptile/Omabot 分层审校）。 |

- ⚠️ 本工作台推断（OS 作为 Agent Harness 的结构性机会与隐性矛盾）：Alibaba Cloud 在加入 Omacom Foundation 时将 Qwen Book 核心架构明确定义为「OS as Harness（操作系统即代理驾驭框架）」，与 DHH 的 Omarchy 形成高度同构。然而，当「一切桌面系统都可被用户自然语言动态改写」时，系统稳定性、供应链投毒风险（社区插件、第三方 CLI 启动器、多模型密钥聚合）与跨硬件驱动长尾维护成本会急剧上升；Omacom Foundation 之所以在成立两个月内密集吸纳 $1.8M+ 大模型 Token（Meta $1.5M、SpaceXSI $1.5M、OpenAI $150K、Fireworks $150K）并雇佣全职内核/Shell/设计工程师，正是为了用「资本+Token 补贴开源社区 PR 审校」对抗高可变系统带来的维护复杂度爆炸。

### 三、赛道横向对比：Agent 原生本地 OS、云端 MicroVM 沙盒与开发工具控制权

1. 本地可塑桌面（Omarchy / OpenCode） vs 云端多 Agent 沙盒（Conductor / Daytona / Tigris）
   - 隔离与状态层差异：本库此前追踪的 [Meta 收购 Conductor（Melty Labs）](Meta%E6%94%B6%E8%B4%ADConductor%EF%BC%9AAI%E7%BC%96%E7%A8%8B%E7%9A%84%E4%B8%8B%E4%B8%80%E5%9C%BA%E7%AB%9E%E4%BA%89%EF%BC%8C%E6%98%AF%E8%AE%A9%E5%A4%9A%E4%B8%AAAgent%E4%B8%80%E8%B5%B7%E5%B9%B2%E6%B4%BB.md) 与 [Dropbox $350M 并购 Tigris Data](%E4%B8%80%E5%AE%B6%E5%8F%AA%E8%9E%8D%E4%BA%86%202500%20%E4%B8%87%E7%BE%8E%E5%85%83%E7%9A%84%E5%85%AC%E5%8F%B8%EF%BC%8C%E4%B8%BA%E4%BB%80%E4%B9%88%E8%A2%AB%20Dropbox%203.5%20%E4%BA%BF%E7%BE%8E%E5%85%83%E4%B9%B0%E8%B5%B0%EF%BC%9FTigris%20%E5%88%B0%E5%BA%95%E5%80%BC%E4%BB%80%E4%B9%88%EF%BC%9F.md) 证明，企业级多 Agent 并发任务在云端面临严重的多租户隔离与状态分叉难题（Meta Muse 曾出现 KVM 逃逸漏洞与被动 DNS 会话泄露，最终迫使 Meta 收购 Conductor 并加速转向 Firecracker/MicroVM 沙盒）。DHH 与 Omarchy 则代表另一条反向路径：将算力与执行环境彻底下沉至开发者个人本地 Linux 主机，凭借本地文件系统透明性、原生 Docker（避免 macOS 虚拟化损耗）与零云端延迟换取单兵极致开发体验，仅在需要跨设备协同或 24 小时后台驻留时外接 DigitalOcean 一键 OpenClaw/Hermes 实例。
   - 与库内 Tobi Lütke（Shopify）及模型厂商的微妙结盟：值得关注的是，[Shopify CEO Tobi Lütke](Tobi%20L%C3%BCtke%20on%20the%20AI%20agent%20revolution%20and%20future%20of%20Shopify.md) 既在家中酒窖自建本地 GPU 集群推崇本地 Agent 主权，又是 Omacom Foundation 首期 $1M 创始赞助人兼 Omarchy Core 核心成员；同时 Meta（Muse Code）、OpenAI（Codex）、SpaceXSI（Grok Build）、Alibaba Cloud（Qwen）与 Fireworks（Kimi K）均争相向 Omarchy 注入 Token 与现金——本质上是各大模型与云厂商将中性、不锁定默认模型的 Agent 桌面系统视为分发自有 Coding CLI 与推理 API 的战略前哨站。

2. 中性 CLI 调度器 vs 封闭 IDE/模型垂直整合
   - DHH 在 2026-01 对 Cursor / GitHub Copilot 行内补全表达疏离后，重度转向 OpenCode 类终端多模型切换底座，并将「多 Harness 无偏好并存」写入 Omarchy 产品宪法。这解释了为何多模型路由商（OpenRouter、OrcaRouter、Fireworks）与代码审查工具（Greptile）愿意集中赞助 Omarchy：当操作系统的第一公民是命令行与文件系统而非某一封闭 IDE，模型层本身就必须持续在性价比与延迟（如 Kimi K fast mode、Meta Muse Spark）上竞争，而难以靠前端编辑器入口锁定开发者。

### 观点与可反驳条件

- ==观点==：==DHH 与 Omarchy 揭示的并非“个人单靠 AI 就能普遍取代大型工程团队”，而是桌面操作系统层正在发生控制权反转——Linux 的纯文本配置与 CLI 透明度使其天然成为最强的本地 Agent Harness，在前沿模型实验室（Meta/OpenAI/SpaceXSI/Alibaba）与云基础设施商（Cloudflare/DigitalOcean）的 Token 与现金联合输血下，Omarchy 正迅速演变为多模型 Coding CLI 的中立分发入口==；但这一路径能否真正蚕食 macOS 核心开发者份额，取决于其能否在不引入桌面级安全灾难与碎片化崩溃的前提下解决「高可变配置系统的稳定维护与 Apple Silicon 全系驱动闭环」。
- ==推翻条件==：
  1. 若截至 2027-Q3，Omarchy 在 GitHub 与 1Password 公开遥测中未能在 M4/M5/M6 Apple Silicon Mac 上实现 GPU/电源管理/无线驱动的稳定商业级可用，且 1Password Linux 发行版排位跌出前 3 或月度新增活跃桌面节点连续两季度下滑超 25%，则「AI 代理消除桌面迁移摩擦、Linux 桌面迎来超越 macOS 的结构性窗口」命题将被证伪。
  2. 若截至 2027-06-30，Omarchy 生态因「代理自动改写系统配置 + 社区插件/第三方 CLI 开放生态」爆发严重桌面级远程执行或本地凭据窃取供应链漏洞（导致 Omacom Foundation 紧急引入类似 macOS Gatekeeper 的强签名与沙盒权限拦截），同时主要 Token 赞助方（Meta/SpaceXSI/OpenAI）缩减免费额度转向封闭自家桌面/IDE 客户端（如 Muse Code 或 Codex 独立桌面端）排他绑定，则「可塑开放桌面保持中立且零摩擦碾压封闭系统」的核心机制前提将被推翻。

---

## 原文摘录与一手信源存证

> David Heinemeier Hansson thinks the agent era is reopening a window in computing that has been closed for decades: the chance to build a new operating system people actually want to use.
> — 原文摘录，文字段落 1；证据 `digest-material-ec09de70f42407e3d247277a84cb29cab1dfa79f9fe0d04e3e41ac29ef8a7d88-excerpt-1@1`

> DHH joins a16z General Partners Martin Casado and Anish Acharya to explain why he’s building Omarchy, an agent-first Linux distribution designed around a computer that users can modify simply by asking.
> — 原文摘录，文字段落 2；证据 `digest-material-ec09de70f42407e3d247277a84cb29cab1dfa79f9fe0d04e3e41ac29ef8a7d88-excerpt-2@1`

> They discuss why the command lines, config files, and detailed error messages that once made Linux intimidating now make it unusually well suited to agents, and why DHH believes software development has become cheap enough to challenge decades-old platform lock-in.
> — 原文摘录，文字段落 3；证据 `digest-material-ec09de70f42407e3d247277a84cb29cab1dfa79f9fe0d04e3e41ac29ef8a7d88-excerpt-3@1`

一手材料：

- Why AI Has DHH Working 16-Hour Days · The a16z Show (a16z Podcast) · [原站](https://www.youtube.com/watch?v=TtOoLanFzGw) · [主体档案：a16z](../entities/funds/a16z.md) / [主体档案：@eriktorenberg (X)](../entities/people/%40eriktorenberg%20%28X%29.md) · [本地原件](../../../raw/ec09de70f42407e3d247277a84cb29cab1dfa79f9fe0d04e3e41ac29ef8a7d88)
  材料版本 `digest-material-ec09de70f42407e3d247277a84cb29cab1dfa79f9fe0d04e3e41ac29ef8a7d88@1`；获取方式 `tg_approved_rss_full_text`。
  > David Heinemeier Hansson thinks the agent era is reopening a window in computing that has been closed for decades: the chance to build a new operating system people actually want to use. — 原文提取
  > DHH joins a16z General Partners Martin Casado and Anish Acharya to explain why he’s building Omarchy, an agent-first Linux distribution designed around a computer that users can modify simply by asking. — 原文提取
- Omacom Foundation launches with \$24 million · Omarchy (Omacom Foundation) · [原站](https://omarchy.org/news/2026/08/omacom-foundation-launches-with-8-million/) · [主体档案：Omarchy](../entities/companies/Omarchy.md) / [主体档案：David Heinemeier Hansson (DHH)](../entities/people/David%20Heinemeier%20Hansson%20%28DHH%29.md) · [本地原件](../../../raw/9edb2ceee6a669d99f5a9e9186f24da24341d5e5c8af4c293a983a1ecb1e3cfe)
  材料版本 `digest-material-9edb2ceee6a669d99f5a9e9186f24da24341d5e5c8af4c293a983a1ecb1e3cfe@1`；获取方式 `http_full_text`。
  > It’s time to dream big. Omarchy Quattro has given people a chance to experience what the malleable computer of the future looks like, and they like it (a lot!). — 原文提取
  > To do just that, I’m incorporating the Omacom Foundation to ensure that this mission is fully funded, durable, and ready to accelerate. — 原文提取
- Omarchy Quattro crosses 200,000 ISO downloads · Omarchy (Omacom Foundation) · [原站](https://omarchy.org/news/2026/09/quattro-crosses-200000-iso-downloads/) · [主体档案：Omarchy](../entities/companies/Omarchy.md) · [本地原件](../../../raw/3074b1f73075e08610e28ee89ffe9329e6a350df061196b91b922c164242bf17)
  材料版本 `digest-material-3074b1f73075e08610e28ee89ffe9329e6a350df061196b91b922c164242bf17@1`；获取方式 `http_full_text`。
  > Two hundred thousand ISO downloads of Omarchy Quattro in just 18 days! On average, someone has pulled a fresh Omarchy every 8 seconds since Quattro shipped. At the peak, we shipped 1,165 ISOs in a single hour. — 原文提取
  > Downloads come from 215 countries and territories. That’s more places than the UN has members! Over half the downloads come from outside the top five countries. — 原文提取
- Omarchy 4.5 floats, speaks 50 languages, and runs on your Mac · Omarchy (Omacom Foundation) · [原站](https://omarchy.org/news/2026/11/omarchy-4-5/) · [主体档案：Omarchy](../entities/companies/Omarchy.md) · [本地原件](../../../raw/a0fe1e3b08a4f4ee9d95d542a4a4fc1fa2854fad14ce94fd7b03acd19e878723)
  材料版本 `digest-material-a0fe1e3b08a4f4ee9d95d542a4a4fc1fa2854fad14ce94fd7b03acd19e878723@1`；获取方式 `http_full_text`。
  > Omarchy 4.5 (aka Quattro RS!) is the first big feature release since Quattro, and it’s a whopper: over 740 pull requests merged from more than 180 contributors in just twelve weeks. — 原文提取
  > Super + L now cycles any workspace between tiling, scrolling, and floating. — 原文提取
- AI - Omarchy Manual · Omarchy (Omacom Foundation) · [原站](https://omarchy.org/manual/ai/) · [主体档案：Omarchy](../entities/companies/Omarchy.md) · [本地原件](../../../raw/ffbe3be4c303752efab6b39e7448f62fc144d32028c0937981263e1fc0aad5d6)
  材料版本 `digest-material-ffbe3be4c303752efab6b39e7448f62fc144d32028c0937981263e1fc0aad5d6@1`；获取方式 `http_full_text`。
  > Omarchy includes launchers for the coding agents below without choosing a default for you. Run a command to install its CLI on first use, then authenticate when prompted. — 原文提取
  > ori is the odd one out: it runs the other harnesses against OpenRouter’s whole model catalog, so ori claude, ori codex, or ori opencode start those agents on whichever model you point them at, and ori code is Ori’s own agent. — 原文提取
- Over my dead pencil · DHH (HEY World) · [原站](https://world.hey.com/dhh/over-my-dead-pencil-fb0f3647) · [主体档案：David Heinemeier Hansson (HEY World)](../entities/people/David%20Heinemeier%20Hansson%20%28HEY%20World%29.md) / [主体档案：37signals](../entities/companies/37signals.md) · [本地原件](../../../raw/464ba8b1ccb053c6e171145c9c282ecc710d17df751e6600d39b9d171ca07150)
  材料版本 `digest-material-464ba8b1ccb053c6e171145c9c282ecc710d17df751e6600d39b9d171ca07150@1`；获取方式 `http_full_text`。
  > . We're not going to write the vast majority of code by hand any longer. Coding agents have gotten so good that it's simply not an economically viable enterprise going forward to have humans typing out lines of Ruby, Rust, or C++. — 原文提取
  > for how many people were still writing a material amount of code by hand on a weekly basis, only a handful put up their hands. So they all knew this, but it still came as a shock to many to actually hear it. — 原文提取
- Promoting AI agents · DHH (HEY World) · [原站](https://world.hey.com/dhh/promoting-ai-agents-3ee04945) · [主体档案：David Heinemeier Hansson (HEY World)](../entities/people/David%20Heinemeier%20Hansson%20%28HEY%20World%29.md) · [本地原件](../../../raw/14fa1bf36ff8e04d45ef3d0e618bfd57d5c24745cb1592e890ddcbc9eb17a185)
  材料版本 `digest-material-14fa1bf36ff8e04d45ef3d0e618bfd57d5c24745cb1592e890ddcbc9eb17a185@1`；获取方式 `http_full_text`。
  > At the end of last year, AI agents really came alive for me. Partly because the models got better, but more so because we gave them the tools to take their capacity beyond pure reasoning. — 原文提取
  > we taught them in plain English. Reality is fast catching the hype! — 原文提取
- Basecamp becomes agent accessible · DHH (HEY World) · [原站](https://world.hey.com/dhh/basecamp-becomes-agent-accessible-3ae6b949) · [主体档案：37signals](../entities/companies/37signals.md) · [本地原件](../../../raw/cb5bdb9c1b31b6ff80bdba8b7b5bf7d927f7cec826b5cc0e105a510721f95266)
  材料版本 `digest-material-cb5bdb9c1b31b6ff80bdba8b7b5bf7d927f7cec826b5cc0e105a510721f95266@1`；获取方式 `http_full_text`。
  > In the past 18 months, we've experimented with a ton of AI-infused features at 37signals. — 原文提取
  > In the meantime, agents have emerged has the killer app for AI. — 原文提取

归属与范围：已完成对 The a16z Show《Why AI Has DHH Working 16-Hour Days》（Simplecast 标题《Why the Agent Era Needs a New Operating System | DHH》）的一手信息交叉穿透，补齐并归档 Omacom Foundation 资助清单（~\$24M 承诺、12 名 \$1M 个人赞助人与 Meta/Alibaba Cloud/SpaceXSI/DigitalOcean/OpenAI/Fireworks 等企业及 Token 赞助方）、Omarchy 4.5 与 Quattro 分发数据（单周 100,000 下载/~1 PB 流量、18 天 200,000 ISO、740+ PR）及 DHH 在 HEY World 的三篇一手长文（Over my dead pencil、Promoting AI agents、Basecamp becomes agent accessible）；保留 YouTube/Simplecast 完整逐字稿未公开及 37signals 内部迁移前后端效率对比未披露两项明确来源缺口，并建立 DHH、37signals、Omacom Foundation、Omarchy 与合作/竞争主体图谱边。

来源缺口：

- `unavailable`：YouTube 视频（TtOoLanFzGw）字幕接口受反机器人登录校验拦截，且 a16z.news/s/podcast 与 Simplecast（Why the Agent Era Needs a New Operating System | DHH，MP3 约 51.3 MB）未公开发布完整逐字稿文本，故节目中部分口语细节与社区复刻 Lightroom 等段落未能核对逐字句级时间戳，已通过 Omarchy 官方新闻、AI 手册与 DHH HEY World 一手博文交叉核验。 [线索](https://a16z.simplecast.com/episodes/why-the-agent-era-needs-a-new-operating-system-dhh-aj7iuAnL)
- `not_disclosed`：37signals 未公开披露内部员工总数、工程人员规模及技术团队从 MacBook 迁往 Framework/Beelink 与 Omarchy 后的 Rails 测试耗时对比、人均产出或 AI 生成代码占比统计；Omacom Foundation 披露的约 \$24M 资助含多年期现金与 Token 承诺，Omarchy 实际留存日活（DAU）亦未从 ISO 下载量（200,000+）中拆分公布。 [线索](https://omarchy.org/news/2026/08/omacom-foundation-launches-with-8-million/)

[返回赛道总览](../赛道总览.md#digest-ec09de70f42407e3) · [返回导读索引](README.md) · [主体档案库](../entities/README.md)
