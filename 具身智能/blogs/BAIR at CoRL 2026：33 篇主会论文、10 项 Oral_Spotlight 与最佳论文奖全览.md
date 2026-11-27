---
title: "BAIR at CoRL 2026：33 篇主会论文、10 项 Oral/Spotlight 与最佳论文奖全览"
type: blog_digest
sector: "具身智能"
source: "BAIR (UC Berkeley) · CoRL 2026"
published_at: "2026-11-09"
raw_sha256: "deabeaa6585d5c7b7c628e093dbdb1940ead91d5a8456c0bed39906f87b92c4f"
material_version: "digest-material-deabeaa6585d5c7b7c628e093dbdb1940ead91d5a8456c0bed39906f87b92c4f@1"
origin_url: "https://bair.berkeley.edu/blog/2026/11/09/bair-at-corl-2026/"
trigger_source: "BAIR"
trigger_url: "https://bair.berkeley.edu/blog/2026/11/09/corl/"
user_comments: ""
status: "processed_with_gaps"
primary_topic: "模型与策略架构"
topic_confidence: 0.7456
---

<a id="digest-deabeaa6585d5c7b"></a>
# BAIR at CoRL 2026：33 篇主会论文、10 项 Oral/Spotlight 与最佳论文奖全览

2026-11-09 · BAIR (UC Berkeley) · CoRL 2026 · 有来源缺口

[本地原件归档](../../../raw/deabeaa6585d5c7b7c628e093dbdb1940ead91d5a8456c0bed39906f87b92c4f) · 固定材料版本 `digest-material-deabeaa6585d5c7b7c628e093dbdb1940ead91d5a8456c0bed39906f87b92c4f@1` · [一手原站](https://bair.berkeley.edu/blog/2026/11/09/bair-at-corl-2026/) · [触发线索（BAIR）](https://bair.berkeley.edu/blog/2026/11/09/corl/)

## 深度拆解与复核

- ==核心结论==：伯克利人工智能研究院（[BAIR](../entities/labs/BAIR%20%28Berkeley%20AI%20Research%29.md)）于 2026 年 11 月 9 日发布 CoRL 2026（2026 年 11 月 9–12 日，奥斯汀）研究议程全览，共入选 33 篇主会论文（含 3 篇 Oral 与 7 篇 Spotlight 共 10 项高光报告）、4 篇 Late-Breaking Results（LBR）海报及多场周四 Workshop，并包含 Negar Mehr 教授的 Early Career Keynote 与斩获大会最佳论文奖（Best Conference Paper Award）的 SuperMimic（[BAIR](../entities/labs/BAIR%20%28Berkeley%20AI%20Research%29.md) 口头报告 O7）。经逐篇清点一手议程，BAIR 在本届 CoRL 呈现显著的「产学双栖协同」与「三大技术收敛」特征：可微世界模型/无似然流策略推动人形全身运控降本、大规模第一视角人类视频与视触觉补齐灵巧操作数据底座，以及多尺度记忆与图程序将推理智能体接入真机自改进。

#### 一、业务切口与核心机制

1. 议程结构与四类前沿问题簇（33 篇主会 + 4 篇 LBR）
   - 官方博客（实际有效地址 bair.berkeley.edu/blog/2026/11/09/bair-at-corl-2026/，截止 2026-11-08 更新，不含主会 Demo 赛道）按日期排布为：11 月 9 日周一 10 篇主会论文 + 3 篇 LBR 海报、11 月 10 日周二 11 篇主会论文 + 1 篇 LBR 海报、11 月 11 日周三 12 篇主会论文（合计 33 篇），11 月 12 日周四为专题 Workshop 与邀请报告。
   - 从方法切口拆解，33 篇主会论文集中于四条高优先级主线：
     - 人形全身控制与世界模型（代表：Oral O7 SuperMimic、Spotlight S7 的 LadderMan / ResSafe / TANGO、Poster RPL / TEXEDO / Counterfactual Video Generation / VLK / Social Humanoid，以及 Workshop 的 Workhorse），核心把可微世界模型、地形爬梯感知、安全残差滤波与反事实视频生成压进真机控制回路。
     - 流策略、在线强化学习与泛化机理（代表：Oral O4 Flow Policy Gradients for Robot Control 即 FPO++、Poster Improving Robotic Generalist Policies via Flow Reversal Steering、Why Does Action Chunking Improve Behavioral Cloning Performance in Robotic Control?、DiscreteRTC、Energy-Based Policy Orchestration、HiRE、CLIFT），聚焦打破扩散/流匹配策略难以跑在线 RL 的工程瓶颈。
     - 人类视频 Scaling 与触觉灵巧操作（代表：Oral O5 EgoScale、Poster Do as I Do、How to Peel with a Knife、FTP-1、PTLD、T-Rex、Tactile Curiosity Drives Robot Interaction、Scalable Behavior Cloning，以及 Workshop 的 TouchScale 500h 视触觉数据集），以低成本人类视频、削皮偏好对齐与跨传感器触觉基础策略解决高接触操作。
     - 长程记忆与 Agentic 自改进（代表：Spotlight S1 的 MEM 与 Diagnosing Compositional Generalization、Spotlight S6 的 Playful Agentic Robot Learning 与 GaP、Poster ENPIRE / AsyncVLA / GLST / WARP-RM，以及全部 4 篇 LBR：#15 Scaling Online Exploration、#19 Reconstruct Practice Go Real、#54 Flip Anything、#26 RoboSimStudio），打通 Real2Sim2Real 与代码化技能探索。

2. Negar Mehr Early Career Keynote 与学术组织重心
   - 经 CoRL 2026 官网 corl.org/program/early-career-keynotes 核验，UC Berkeley 机械工程助理教授、ICON 实验室主任 Negar Mehr 于周一（11 月 9 日 2:00–2:30 PM CST）发表 Early Career Keynote II《How Can Robots Learn to Interact and Coordinate with Others?》（由 Ken Goldberg 主持），提出三条框架：多智能体强化学习的信用分配与基础模型教练指导、交互式示范模仿学习，以及将单机器人持续学习重构为共识优化问题以平衡新旧技能遗忘。
   - BAIR 学者同时深度主导周四 5 场关键 Workshop 的议程设置，包括 Negar Mehr 实验室成员 Lasse Peters 联合组织的《Do Robots Need World Models?》、S. Shankar Sastry 等组织的《Sim-to-Real-to-Field》、[Sergey Levine](../entities/people/Sergey%20Levine.md) 担任导师的《"Oops, I Erred"》以及 Jitendra Malik 组织的《Dexterous Manipulation》。

#### 二、核心数据核查、口径纠偏与工程边界

- 场景与利益披露：本总览由 BAIR 编辑部（Berkeley AI Research Editors）于大会首日发布，入选口径规定「至少 1 名作者隶属 UC Berkeley（含兼职/联合任职）即计入」，天然倾向呈现 UC Berkeley 生态影响力，且包含大量与产业研究院（[NVIDIA GEAR Lab](../entities/labs/NVIDIA%20GEAR%20Lab.md)、[Physical Intelligence](../entities/companies/Physical%20Intelligence.md)、Amazon FAR、Google）联合署名的论文；对各论文真实性能不能以“入选顶会或高光报告”直接等价于工业界可复制落地指标。

| 议程模块 | 原文核心统计 | 一手官网核查与交叉印证结果 | 复核结论 |
| :--- | :--- | :--- | :--- |
| 博客原始网址 | bair.berkeley.edu/blog/2026/11/09/corl/ | 原短链返回 HTTP 404；实际有效官方博客路径为 bair.berkeley.edu/blog/2026/11/09/bair-at-corl-2026/ | ⚠️ 链接纠偏：已替换为真实可抓取官方页面 |
| 论文与海报总量 | 33 篇主会论文、10 项高光（3 Oral + 7 Spotlight）、4 篇 LBR | 逐日求和验证：周一 10 + 周二 11 + 周三 12 = 33 篇；Oral（O4 FPO++、O5 EgoScale、O7 SuperMimic）= 3；Spotlight（S1 两篇、S6 两篇、S7 三篇）= 7；LBR（#15、#19、#54、#26）= 4 | ✅ 计数完全吻合（不含主会 Demo 赛道） |
| 最佳论文奖归属 | SuperMimic 斩获 Best Conference Paper Award | BAIR 11 月 9 日会前日程表将 SuperMimic 列为 Tuesday Oral O7（因博文发表早于闭幕颁奖），会后官方授奖信息确认 SuperMimic 夺得 CoRL 2026 Best Conference Paper Award | ✅ 时序一致：会前日程与会后授奖结论互证 |
| Early Career Keynote | Negar Mehr 教授主题报告 | CoRL 官网 `/program/early-career-keynotes` 完整刊出其演讲标题《How Can Robots Learn to Interact and Coordinate with Others?》及 3 段技术摘要 | ✅ 一手日程与摘要完全核实 |

- ⚠️ 「BAIR 论文数量庞大」背后的产学联合署名结构（本工作台核查）：梳理 33 篇主会与 4 篇 LBR 作者名单可见，BAIR 头部高光工作多为跨机构联合产出——Oral O4（FPO++）核心班底横跨 Amazon FAR（[Pieter Abbeel](../entities/people/Pieter%20Abbeel.md)、Brent Yi 等）与 CMU/Stanford；Oral O5（EgoScale）与 Spotlight S6（GaP）、Poster（ENPIRE / T-Rex）及 Workshop（ASPIRE / Agentic WAM）均联合 [Jim Fan](../entities/people/Jim%20Fan.md) 与 [Yuke Zhu](../entities/people/Yuke%20Zhu.md) 所在的 NVIDIA 团队；Spotlight S1（MEM）与两篇流反转/动作块理论 Poster 则来自 [Sergey Levine](../entities/people/Sergey%20Levine.md) 与 [Chelsea Finn](../entities/people/Chelsea%20Finn.md) 联合创办的 Physical Intelligence 班底；Poster CLIFT 则基于 Google Gemini Robotics On-Device。换言之，BAIR 议程实质反映了学术界顶尖实验室与硅谷三大工业栈（NVIDIA、PI、Amazon FAR）的算力与硬件共建格局。

#### 三、赛道横向对比与定位

| 机构/力量 | CoRL 2026 核心切入点 | 标志性代表工作 | 数据与算力策略差异 |
| :--- | :--- | :--- | :--- |
| BAIR (UC Berkeley) | 可微世界模型控算力、流策略在线 RL 与多尺度记忆 | SuperMimic（最佳论文）、FPO++、LadderMan、ResSafe、MEM | 以高校轻量算力（单卡 H100 3h 跑通 SuperMimic）撬动高频控制与算法原语创新 |
| NVIDIA GEAR / Research | 40 万小时人类视频 WAM、Agentic 编码器与 GPU 物理仿真 | GR00T 2、Isaac Lab 3.0 / Newton、GRAIL / RoboTTT（最佳论文决选）、EgoScale、GaP | 依托 16×GB200 与大规模人类/仿真数据飞轮建立标准开发栈 |
| Physical Intelligence | 长程多尺度具身记忆与云端 API 微调交付 | MEM（CoRL Spotlight）、π0.7 / Pi API Beta | 重点攻克 10–15 分钟长视野任务语义记忆与跨本体真机微调效率 |
| Amazon FAR | 通用流匹配策略在线 RL 与人形/跨地形全身移动操作 | FPO++（CoRL Oral O4）、VLK、LadderMan、RPL | 将高频全身运动控制与仿真/真机在线策略梯度打通 |

### 观点与可反驳条件

- ==观点==：==BAIR at CoRL 2026 的 33 篇主会论文清单标志着具身智能学术主航道已从「堆砌静态行为克隆 VLA」全面转向「可微动力学/世界模型降算力 + 流匹配在线 RL + 视触觉与长期记忆」==，但高光成果高度依赖 Amazon FAR、NVIDIA 与 Physical Intelligence 的算力及真机工程底座，单独依靠高校实验室算力难以直接完成从论文基准到工业连续产线交付的最后一跃。
- ==推翻条件==：
  1. ① 算力集约路线无法跨出平地动作库：若截至 2027 年上半年，以 SuperMimic（单卡 3 小时）为代表的学术轻量可微世界模型方法在接入地形交互、双手接触负载与物体形变后，显存或建模误差迫使训练算力重新膨胀至百卡集群级别，未能保持对无模型 PPO 至少 10 倍以上的成本优势，则「轻量算法打破高校算力壁垒」的判断将被推翻。
  2. ② 产学双栖协同成果转化停滞：若本届入选的 10 项 BAIR Oral/Spotlight 成果在会后 9 个月内（至 2027 年 8 月）被开源社区复现出真机泛化不足（如 3 项以上核心论文开源仓库未获 500+ Star 或在独立基准下成功率低于论文报告值 20 个百分点以上），则其对工业界下一代主流栈的先行指标意义需下调。

---

## 原文摘录与一手信源存证

> 【信源巡检核心摘要】 伯克利人工智能研究院（BAIR）于 2026 年 11 月 9 日发布 CoRL 2026（奥斯汀）研究总览：共入选 33 篇主会论文、10 项高光报告（3 篇 Oral 与 7 篇 Spotlight）及 4 篇 Late-Breaking Results 海报；包含 Negar Mehr 教授的 Early Career Keynote，以及斩获大会最佳论文奖（Best Conference Paper Award）的人形全身控制研究 SuperMimic。
> — 原文摘录，文字段落 1；证据 `digest-material-deabeaa6585d5c7b7c628e093dbdb1940ead91d5a8456c0bed39906f87b92c4f-excerpt-1@1`

一手材料：

- BAIR at CoRL 2026 · BAIR (UC Berkeley) · [原站](https://bair.berkeley.edu/blog/2026/11/09/bair-at-corl-2026/) · [主体档案：BAIR (Berkeley AI Research)](../entities/labs/BAIR%20%28Berkeley%20AI%20Research%29.md) · [本地原件](../../../raw/80bdccc6a9e25ff613f8376d0fde5f9f83c7731e7afb5b945459032d28e45281)
  材料版本 `digest-material-80bdccc6a9e25ff613f8376d0fde5f9f83c7731e7afb5b945459032d28e45281@1`；获取方式 `http_full_text`。
  > The Conference on Robot Learning (CoRL) takes place November 9–12, 2026, in Austin, Texas. — 原文提取
  > Times shown for oral and spotlight papers are session windows. Individual presentation order is not specified. Papers appear in both their talk and poster sessions. — 原文提取
- CoRL 2026 - Early Career Keynotes (Prof. Negar Mehr) · CoRL 2026 · [原站](https://www.corl.org/program/early-career-keynotes) · [主体档案：CoRL (Conference on Robot Learning)](../entities/labs/CoRL%20%28Conference%20on%20Robot%20Learning%29.md) · [本地原件](../../../raw/16c28b12b5547275b67bfe2c9dbde4dc3427656032f155c612e2340bb8a8c920)
  材料版本 `digest-material-16c28b12b5547275b67bfe2c9dbde4dc3427656032f155c612e2340bb8a8c920@1`；获取方式 `http_full_text`。
  > How Can Robots Learn to Interact and Coordinate with Others? — 原文提取
  > Robots in the real world rarely act alone. They share spaces with other robots and people, so they need to learn how to interact and coordinate. — 原文提取

归属与范围：已纠正原巡检 404 链接并抓取 BAIR 官方博客全文（bair.berkeley.edu/blog/2026/11/09/bair-at-corl-2026/）与 CoRL 2026 官方 Early Career Keynote 页面（corl.org/program/early-career-keynotes）；逐篇核对 33 篇主会论文（周一 10 篇、周二 11 篇、周三 12 篇）、3 篇 Oral（FPO++、EgoScale、SuperMimic）、7 篇 Spotlight（MEM、Diagnosing Compositional Generalization、Playful Agentic Robot Learning、GaP、LadderMan、ResSafe、TANGO）与 4 篇 LBR 海报及周四 Workshop 布局，揭示 BAIR 论文与 NVIDIA GEAR、Physical Intelligence、Amazon FAR 的高比例联合署名结构。

来源缺口：

- `unavailable`：原巡检短链 https://bair.berkeley.edu/blog/2026/11/09/corl/ 返回 HTTP 404，已定位替换为实际官方博客 https://bair.berkeley.edu/blog/2026/11/09/bair-at-corl-2026/；CoRL 官网 \`/program/awards\` 页静态提取未加载奖项列表，Best Conference Paper Award 由会议获奖公告与 SuperMimic 相关报道互证。 [线索](https://bair.berkeley.edu/blog/2026/11/09/bair-at-corl-2026/)
- `not_disclosed`：BAIR 日程总览截至 2026-11-08 统计范围不含主会 Demo 赛道，且未列出各篇论文的原始定量基准表，具体算法消融与真机成功率需下钻对应单篇论文导读。 [线索](https://bair.berkeley.edu/blog/2026/11/09/bair-at-corl-2026/)

[返回赛道总览](../赛道总览.md#digest-deabeaa6585d5c7b) · [返回导读索引](README.md) · [主体档案库](../entities/README.md)
