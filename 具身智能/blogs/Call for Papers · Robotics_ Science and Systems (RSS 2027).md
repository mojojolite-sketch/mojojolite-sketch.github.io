---
title: "Call for Papers · Robotics: Science and Systems (RSS 2027)"
type: blog_digest
sector: "具身智能"
source: "RSS (Robotics Science and Systems)"
published_at: "2026-11-28"
raw_sha256: "ca7210b4c51c26edb708f495a41535b76e032c470e0266887e212b5869eee7ef"
material_version: "digest-material-ca7210b4c51c26edb708f495a41535b76e032c470e0266887e212b5869eee7ef@1"
origin_url: "https://roboticsconference.org/information/cfp/"
trigger_source: "RSS"
trigger_url: "https://roboticsconference.org/information/cfp/"
user_comments: ""
status: "processed"
primary_topic: "仿真与评测基准"
topic_confidence: 0.87
---

<a id="digest-ca7210b4c51c26ed"></a>
# Call for Papers · Robotics: Science and Systems (RSS 2027)

2026-11-28 · RSS (Robotics Science and Systems) · 已整理

[本地原件归档](../../../raw/ca7210b4c51c26edb708f495a41535b76e032c470e0266887e212b5869eee7ef) · 固定材料版本 `digest-material-ca7210b4c51c26edb708f495a41535b76e032c470e0266887e212b5869eee7ef@1` · [一手原站](https://roboticsconference.org/information/cfp/)

## 深度拆解与复核

## 深度拆解与复核

==场景与利益披露==：本文为 Robotics: Science and Systems（RSS 2027，将于 2027 年 7 月 6–11 日在希腊雅典 Athens, Greece 举办）Program Committee 与 Organizing Committee 发布的官方 Call for Papers（Role=Data）。RSS 与 CoRL 并列具身智能与机器人系统领域审稿门槛最高的顶级会议，本次规则大改针对的是 LLM 普及带来的投稿洪峰（unprecedented volume of submissions）与单轮截稿下「重刷榜、轻实验设计」的行业通病。

### 一、 两阶段导师制（Two-Stage Shepherding Process）与时间轴拆解

1. 级联过滤与契约式实验设计（本工作台梳理）：RSS 2027 废除传统的「一次性交齐全部实验 + 单轮 Rebuttal」模式，改用两阶段开发周期（two-stage development cycle），将「方法论立项评审」与「终局实验验证」拆分：
   - Stage 1（Extended Abstract，2026-12-04 11:59pm AoE 截稿）：严格限长 6 pages（最多 5 页正文 + 1 页参考文献，不收附录、网站或任何补充材料）。稿件被明确允许处于「半成品」状态——问题定义、核心假设（hypotheses）与方法论须完整成型，但允许实验或实证验证缺失或仅具初步结果；Related Work 仅需引用与中心问题直接相关的文献，不考察综述全面性。
   - Shepherding、Metareview 与 Extension Charter（2027-02-05 至 02-26）：2027-02-05 AoE 公布 Stage 1 裁决（拒稿或进入 Rebuttal）；作者于 02-05 至 02-12 AoE 提交 Rebuttal；Reviewers 与 Area Chairs（ACs）据此在 2027-02-26 AoE 签发定稿版《Extension Charter》，逐项写明终稿必须补充的澄清、评测与方法扩展。
   - Stage 2（Final Submissions，2027-04-16 AoE 截稿）：正文扩展至最多 8 pages（不含参考文献），2027-04-19 AoE 截止提交 Supplementary Material（`.zip` 上限 100 MB），04-30 发出录用通知，05-14 提交 Camera-ready。Program Committee 终审核心检查稿件是否严格履约 Extension Charter 并产出有科学价值的洞察。
2. 严谨阴性结果免拒稿机制（本工作台核查）：==CfP 白纸黑字规定「不会仅因实验得出阴性结果（negative experimental results）而拒稿；只要作者提炼出有价值的科学洞察，严谨地证伪一个假设同样被视为重要科学贡献」==。在学术界长期存在选择性汇报与事后改写指标（p-hacking）的背景下，这相当于把实验评价从「结果是否漂亮」部分迁移到「验证设计是否经得起事先锁定」。

### 二、 实名审稿、AI 幻觉桌拒与工程合规硬边界

1. Signed Reviews（录用论文公开审稿人姓名）：所有最终被录用的论文，其 Reviewer 与 Area Chair 姓名将随论文一并公开，旨在强化评审责任感并为高质量同行评议提供学术归属激励；未录用稿件不在此列。
2. 严格 Author Anonymity 与作者锁定（CoIs 防控）：
   - 盲审禁用一切外部链接（含匿名化 YouTube/GitHub/机构页，仅 Camera-ready 阶段开放），禁止出现如「The University of XYZ's Robby the Robot」等可反推实验室的器材描述及图片 Logo，自引须与他引完全不可区分；允许提交此前发在 arXiv 的技术报告（且无需在盲审稿中引用），但明确警示预印本传播有去匿名化风险。
   - Stage 1 提交的作者名单原则上锁定，以防止审稿期间人为变动 Conflicts of Interest（CoIs）；Stage 1 至 Stage 2 之间若确需增删或调整作者顺序，必须向 Program Chairs 申请批准且须与 Extension Charter 新增工作直接相关。
3. AI 辅助规则与自动化防伪检查（Desk Rejection 红线）：允许作者与审稿人使用 LLMs（鼓励自愿披露但不强制），但对「幻觉引文/虚假参考文献（hallucinated citations or references）」实施自动化脚本校验，一旦查实立即 Desk Rejection；抄袭与学术不端由 Program Chair 按 IEEE Section 8.2.4 Allegations of Misconduct 处置。
4. OpenReview 账号与 PDF 字体合规：所有投稿与审稿在 OpenReview 进行，无机构邮箱的新账号须经历最高长达 2 周的人工审核；LaTeX 或 Word 模板严禁微调字号、页边距与行距，禁加 Draft/页码标记，并明确要求提交前用 Acrobat Reader 的 Document Properties 核验全文仅含 Type-1 或嵌入式 True Type 字体（Embedded True Type）。

### 三、 围绕 REPLAY 与可复现评测链路的制度意义

- ✅ 对可复现性与「先立契约再跑真机」（REPLAY / T3 独立验证）的回应（本工作台核查）：结合本库重点追踪的具身策略回放与评测可信度问题（如仿真自检误报与真实硬件长程验证难题），RSS 2027 的「6 页立项 + Extension Charter + 容忍阴性结果」本质上是一套学术界的预注册验证协议（pre-registered evaluation contract）——审稿人在不知晓最终刷榜数字前先锁死评测协议与消融矩阵，压低了「先射箭再画靶」的空间，也让实证失败的基线对比得以保留在公共文献中。
- ⚠️ 4.5 个月长链条对系统类研究与小团队的现实摩擦（本工作台推断）：Stage 1（12-04）到 Stage 2（04-16）横跨逾四个月且仅有 2 月下旬至 4 月中旬约 7 周窗口来执行 Extension Charter；对依赖大规模真机集群或 100 MB 级日志/视频补充材料的系统工程团队，若 Charter 要求新增跨本体真机测试，7 周极易引发仓促补实验与算力资源向大实验室进一步倾斜，同时 OpenReview 2 周无机构邮箱审核对独立研究者形成实际时间壁垒。
- ✅ Signed Reviews 对审稿保守度的潜在双刃剑（本工作台推断）：录用后公开 Reviewer 与 Chair 姓名虽能遏制敷衍评审、提升建设性意见质量，但也可能使审稿人对有争议或非共识创新架构更趋谨慎，或在拒绝高风险跨界论文时倾向依赖更安全但平庸的基线完备度评分。

### 观点与可反驳条件

- ==观点==：RSS 2027 引入的 Two-Stage Shepherding Process 与 Extension Charter，标志着顶会评审从「单点结果筛选」转向「两阶段实验契约与可证伪性审计」，有望显著抑制 LLM 辅助量产论文下的表面刷榜与阴性结果隐匿；但 7 周 Charter 执行窗口与 Signed Reviews 机制也将抬高无大集群支撑团队的履约摩擦。
- ==推翻条件==：
  1. 两阶段筛选未见真降噪反而拉长内耗：若 RSS 2027 最终公布的 Stage 1 投稿量仍同比暴涨超过 30%、且进入 Stage 2 后因未能完成 Extension Charter 而被最终拒稿的比例超过 40%，说明级联机制未能缓解审稿超载而仅制造了双倍评审负担。
  2. 阴性结果容忍与实名激励停留在纸面：若 2027 年 7 月 RSS 正式录用论文中，明确以「证伪核心假设 / 阴性实验结论」为主体贡献的占比低于 3%，且 Signed Reviews 仅呈现公式化礼貌评语而无实质技术增量，则该轮审稿结构改革对可复现科学产出的实质撬动将被证伪。

---

## 原文摘录与一手信源存证

> 【信源巡检核心摘要】 RSS 2027 (July 6-11, 2027, Athens) Call for Papers introducing a Two-Stage Shepherding Process with a Stage 1 Extended Abstract deadline of December 4, 2026.
> — 原文摘录，文字段落 1；证据 `digest-material-ca7210b4c51c26edb708f495a41535b76e032c470e0266887e212b5869eee7ef-excerpt-1@1`

一手材料：

- Call for Papers · Robotics: Science and Systems (RSS 2027) · RSS (Robotics Science and Systems) · [原站](https://roboticsconference.org/information/cfp/) · [主体档案：RSS (Robotics Science and Systems)](../entities/labs/RSS%20%28Robotics%20Science%20and%20Systems%29.md) · [本地原件](../../../raw/f8aea12a9ede49287e36c3b73474e122b18521b4fc83ebe0daec78811446325e)
  材料版本 `digest-material-f8aea12a9ede49287e36c3b73474e122b18521b4fc83ebe0daec78811446325e@1`；获取方式 `http_full_text`。
  > welcomes Science and Systems papers that report on novel scientific and systems contributions. As always, we solicit your best work. This year, we are introducing new elements to the review and publication process. — 原文提取
  > RSS 2027 replaces the traditional single-deadline submission and rebuttal process with a two-stage development cycle to encourage engaged research shaping. — 原文提取

归属与范围：已抓取 roboticsconference.org/information/cfp/ 完整一手征稿正文（11,845 字符），完整还原 RSS 2027（雅典，2027-07-06 至 07-11）两阶段导师制审稿（Stage 1 扩展摘要 2026-12-04 截稿 → Extension Charter 2027-02-26 签发 → Stage 2 终稿 2027-04-16 截稿）、Signed Reviews、阴性结果容忍、作者匿名与幻觉引用自动化桌拒等细则，并与聚焦可复现基准与独立验证（T3/T4）的研究框架完成对齐。

[返回赛道总览](../赛道总览.md#digest-ca7210b4c51c26ed) · [返回导读索引](README.md) · [主体档案库](../entities/README.md)
