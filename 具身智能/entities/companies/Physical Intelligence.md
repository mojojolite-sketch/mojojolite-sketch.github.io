# Physical Intelligence

[返回主体档案库](../README.md) · [返回赛道总览](../../赛道总览.md) · [单篇导读索引](../../blogs/README.md)

- 主体类别：🏢 公司与产业主体 (Companies)
- 核心定位与说明：通用机器人基础模型机构（π 系列） openpi 代码与权重发布仓
- 关联账号与官方入口：
  - GitHub（Physical-Intelligence）：[账号主页](https://github.com/Physical-Intelligence) · 登记对象 `digest-publisher-90eb8187d515116249768155` — openpi 代码与权重发布仓
  - Official（Physical Intelligence）：[机构／作者主页](https://www.physicalintelligence.company/) · 登记对象 `digest-publisher-8a07d7056b42fd8a7627f831` — 通用机器人基础模型机构
  - Official Website（Physical Intelligence）：[机构／作者主页](https://www.pi.website/) · 登记对象 `digest-publisher-0b2ebfbead8a2a87098acbea` — 通用机器人基础模型机构（π 系列）

## 1. 核心研究问题与待核查争议（Questions & Open Debates）

### 💬 追问与核查：《Where Physical AI Is Heading》

- 这篇感觉是一手访谈之后的见解，这个账号是谁？他感觉很贴近核心圈

关联文章：[《Where Physical AI Is Heading》](../../blogs/Where%20Physical%20AI%20Is%20Heading.md)

> 追查结论摘要：经交叉比对 X（Twitter）、GitHub 与学术发表记录，该账号真实身份已完整核实：

### 💬 追问与核查：《【慢科研】VLA如何在内部表示物理世界？》

- 看不懂...

关联文章：[《【慢科研】VLA如何在内部表示物理世界？》](../../blogs/%E3%80%90%E6%85%A2%E7%A7%91%E7%A0%94%E3%80%91VLA%E5%A6%82%E4%BD%95%E5%9C%A8%E5%86%85%E9%83%A8%E8%A1%A8%E7%A4%BA%E7%89%A9%E7%90%86%E4%B8%96%E7%95%8C%EF%BC%9F.md)

> 追查结论摘要：具象比喻（考场学霸 vs 背题机器）：

### 🔍 待核查缺口与证据边界（Open Gaps）

- `unavailable`：原课程授课讲师、所属高校课程编号及英文原版 PPT / 课堂录音 URL 未在微信转载稿（human five）中披露，公网检索亦未定位到可直采的原始课程页面；文中提到的 GPT-5 / GPT-5.4 多机器人协作演示与 PPT 中 Gemini Robotics 2 作为 Planner 的案例缺完整课程视频与实验配置日志。（关联：[《Robot Policies：从 Imitation Learning 到 Token VLA》](../../blogs/Robot%20Policies%EF%BC%9A%E4%BB%8E%20Imitation%20Learning%20%E5%88%B0%20Token%20VLA.md)）
- `not_disclosed`：微信正文多处以定性示例替代原始论文量化基准（如未披露 ACT 实际动作块长 K=100、OpenVLA-OFT 在 LIBERO 76.5% 至 97.1% 与 26 倍吞吐提升、FAST 5 倍训练加速与 10k 小时扩展曲线），且原稿因 HTML 转写丢失全部行内 LaTeX 公式。（关联：[《Robot Policies：从 Imitation Learning 到 Token VLA》](../../blogs/Robot%20Policies%EF%BC%9A%E4%BB%8E%20Imitation%20Learning%20%E5%88%B0%20Token%20VLA.md)）
- `pending_verification`：灵巧手 30 万次抓握寿命瓶颈在真实连续作业环境下的磨损衰减率（如 Wuji Hand 标称 300,000 次抓握，以拣选工约 9,600 次/日计算约 1 个月损耗）、以及纯仿真零样本抓取（如 Ai2 MolmoBot 与 Eka Robotics VFA）在复杂接触装配中的力控边界与真机闭环成功率有待跨本体实测核验。 [线索](https://www.humanoidsdaily.com/news/wuji-tech-reveals-high-dexterity-robotic-hand-for-humanoid-applications)（关联：[《Where Physical AI Is Heading》](../../blogs/Where%20Physical%20AI%20Is%20Heading.md)）
- `pending_verification`：Physical Intelligence (π) 联创 Quan Vuong 披露的向“算力与模型基础设施提供商（Compute Provider of the Future）”转型战略及 API Beta 闭环商业表现尚未全面公开，其与美国公有云巨头算力开支竞赛下的长期抗衡能力与毛利结构有待跟踪验证。 [线索](https://www.pi.website/blog/api-beta)（关联：[《Where Physical AI Is Heading》](../../blogs/Where%20Physical%20AI%20Is%20Heading.md)）
- `not_disclosed`：human five 个人博文提及的自测 843 条 LIBERO 轨迹离散化脚本、各 Bin 下多步漂移定量曲线及 SmolVLA Checkpoint 语言扰动测试细节尚未随本文公开，留待作者后续博文释放。（关联：[《VLA简史：从RT1到MolMoAct2》](../../blogs/VLA%E7%AE%80%E5%8F%B2%EF%BC%9A%E4%BB%8ERT1%E5%88%B0MolMoAct2.md)）
- `not_disclosed`：Pi API Beta 的商业化按 Token/推理时长计费梯度与云端微调单任务 GPU 小时成本尚未公开披露。（关联：[《Physical Intelligence Releases Pi API Beta & π0.7 with Multi-Scale Embodied Memory (MEM) for 10+ Min Long-Horizon Manipulation》](../../blogs/Physical%20Intelligence%20Releases%20Pi%20API%20Beta%20%26%20%CF%800.7%20with%20Multi-Scale%20Embodied%20Memory%20%28MEM%29%20for%2010%2B%20Min%20Long-Hori.md)）
- `unavailable`：Bloomberg 原报道（2026-10-27）及 Physical Intelligence 自身尚未公布正式融资交割公告与经审计财务报表；\$1B 融资额、\$20B 投后估值与零营收目前仅属洽谈期媒体转述与条件估值，不能登记为已交割实际值。（关联：[《0营收估值200亿美元，具身版OpenAI又融10亿美元》](../../blogs/0%E8%90%A5%E6%94%B6%E4%BC%B0%E5%80%BC200%E4%BA%BF%E7%BE%8E%E5%85%83%EF%BC%8C%E5%85%B7%E8%BA%AB%E7%89%88OpenAI%E5%8F%88%E8%9E%8D10%E4%BA%BF%E7%BE%8E%E5%85%83.md)）
- `not_disclosed`：Pi API Beta 商业化定价梯度、内部合作伙伴所谓 96.4% 单班次自主率的具体工位样本量与硬件成本结构均未公开披露；2026-05 传闻的 \$11.5B 轮次亦未获 PI 官方公开确认。（关联：[《0营收估值200亿美元，具身版OpenAI又融10亿美元》](../../blogs/0%E8%90%A5%E6%94%B6%E4%BC%B0%E5%80%BC200%E4%BA%BF%E7%BE%8E%E5%85%83%EF%BC%8C%E5%85%B7%E8%BA%AB%E7%89%88OpenAI%E5%8F%88%E8%9E%8D10%E4%BA%BF%E7%BE%8E%E5%85%83.md)）
- `unverified_claim`：实体关系入库跳过 (Chelsea Finn --founded--\> Physical Intelligence)：human\_certified 边受只补不盖锁保护，自动流程不得覆盖（关联：[《0营收估值200亿美元，具身版OpenAI又融10亿美元》](../../blogs/0%E8%90%A5%E6%94%B6%E4%BC%B0%E5%80%BC200%E4%BA%BF%E7%BE%8E%E5%85%83%EF%BC%8C%E5%85%B7%E8%BA%AB%E7%89%88OpenAI%E5%8F%88%E8%9E%8D10%E4%BA%BF%E7%BE%8E%E5%85%83.md)）
- `unverified_claim`：实体关系入库跳过 (Sergey Levine --founded--\> Physical Intelligence)：human\_certified 边受只补不盖锁保护，自动流程不得覆盖（关联：[《0营收估值200亿美元，具身版OpenAI又融10亿美元》](../../blogs/0%E8%90%A5%E6%94%B6%E4%BC%B0%E5%80%BC200%E4%BA%BF%E7%BE%8E%E5%85%83%EF%BC%8C%E5%85%B7%E8%BA%AB%E7%89%88OpenAI%E5%8F%88%E8%9E%8D10%E4%BA%BF%E7%BE%8E%E5%85%83.md)）
- `unverified_claim`：实体关系入库跳过 (Physical Intelligence --produces--\> π0.7)：谓词 'produces' 不允许 to 实体类型 'company'（仅允许 \['product'\]）（关联：[《0营收估值200亿美元，具身版OpenAI又融10亿美元》](../../blogs/0%E8%90%A5%E6%94%B6%E4%BC%B0%E5%80%BC200%E4%BA%BF%E7%BE%8E%E5%85%83%EF%BC%8C%E5%85%B7%E8%BA%AB%E7%89%88OpenAI%E5%8F%88%E8%9E%8D10%E4%BA%BF%E7%BE%8E%E5%85%83.md)）
- `not_disclosed`：arXiv:2610.20840主要在MolmoSpaces仿真器与离线DROID真实世界轨迹上完成了表征几何测绘与开环/仿真闭环干预，尚未披露在真实物理机械臂硬件（如Franka/UR5）上实时注入拉回引导向量（Pullback Steering）或状态信念编辑时的闭环控制频率开销、端到端抓取成功率变化及碰撞安全边界数据。（关联：[《【慢科研】VLA如何在内部表示物理世界？》](../../blogs/%E3%80%90%E6%85%A2%E7%A7%91%E7%A0%94%E3%80%91VLA%E5%A6%82%E4%BD%95%E5%9C%A8%E5%86%85%E9%83%A8%E8%A1%A8%E7%A4%BA%E7%89%A9%E7%90%86%E4%B8%96%E7%95%8C%EF%BC%9F.md)）

- [《Robot Policies：从 Imitation Learning 到 Token VLA》](../../blogs/Robot%20Policies%EF%BC%9A%E4%BB%8E%20Imitation%20Learning%20%E5%88%B0%20Token%20VLA.md)：触发线索为微信公众号 human five 于 2026-11-24 发布的《Robot Policies：从 Imitation Learning 到 Token VLA》（未披露原英文课程编号、讲师及原始 PPT/录音链接，且因微信 HTML 转写丢失行内 LaTeX 数学符号）。本工作台穿透核查并归档讲授脉络中 8 篇一手核心论文（ACT arXiv:2304.13705、DAgger arXiv:1011.0686、HG-DAgger arXiv:1810.02890、AMP arXiv:2104.02180、RT-2 arXiv:2307.15818、FAST arXiv:2501.09747、OpenVLA-OFT arXiv:2502.19645、MolmoAct arXiv:2508.07917），为各发布机构与代码仓补齐主页级 publisher\_accounts，补全缺失数学公式并联动站内 VLA 简史、RT-H、π0.5、MDP 五步闭环与 VLA 内部物理表征等已有导读；未公开的原始课堂录音/PPT 及定性省略的超参实验表保留规范缺口。
- [《Where Physical AI Is Heading》](../../blogs/Where%20Physical%20AI%20Is%20Heading.md)：完成一手信源追溯与深度分诊：核实作者 Alex Zheng 真实身份（荷兰 TU Delft 具身 AI 研究者，前 DFKI 不来梅研究员，ETH HACK2026 亚军，随 Unicorn Mafia 优胜团驻留旧金山三周）；深度拆解其对话 Physical Intelligence 联创 Quan Vuong、General Intuition CEO Pim de Witte 等核心圈后提炼的四大非共识洞察（Pi 算力与 API 底座定位、合成仿真+FLORA 稠密奖励替代人手数采、灵巧手 30 万次抓握寿命瓶颈与仿真协同进化、云巨头寡头+中系开源权重+RaaS 部署护城河）；在发布主体中登记 Alex Zheng（X 与 GitHub）、Physical Intelligence、General Intuition 4 个入口并完成分组归一；归入具身智能赛道。
- [《VLA简史：从RT1到MolMoAct2》](../../blogs/VLA%E7%AE%80%E5%8F%B2%EF%BC%9A%E4%BB%8ERT1%E5%88%B0MolMoAct2.md)：逐项核验 RT-1 至 MolmoAct2 八篇 arXiv 原始论文 PDF（64K–178K 字符），精准校准参数规模、LIBERO / SO100 / 跨本体指标及 MolmoAct2 55.79 Hz 开环均摊吞吐限制；保留博主 843 条 LIBERO 离散化实验（5.5 倍 RMSE 差异）并补足离线/真机边界。
- [《Physical Intelligence Releases Pi API Beta & π0.7 with Multi-Scale Embodied Memory (MEM) for 10+ Min Long-Horizon Manipulation》](../../blogs/Physical%20Intelligence%20Releases%20Pi%20API%20Beta%20%26%20%CF%800.7%20with%20Multi-Scale%20Embodied%20Memory%20%28MEM%29%20for%2010%2B%20Min%20Long-Hori.md)：Physical Intelligence 推出托管开发者服务 Pi API Beta（2026-10），支持外部机器人团队上传自有遥操作演示数据、在云端微调 π0.7 基础模型并部署跨本体推理。架构层引入 Multi-Scale Embodied Memory (MEM) 突破 10 分钟以上长程操作记忆瓶颈，并结合在线强化学习（Online RL Extraction）快速收敛精细灵巧操作策略，标志着具身基础模型从实验室封闭权重迈向 API 平台化商业交付。
- [《0营收估值200亿美元，具身版OpenAI又融10亿美元》](../../blogs/0%E8%90%A5%E6%94%B6%E4%BC%B0%E5%80%BC200%E4%BA%BF%E7%BE%8E%E5%85%83%EF%BC%8C%E5%85%B7%E8%BA%AB%E7%89%88OpenAI%E5%8F%88%E8%9E%8D10%E4%BA%BF%E7%BE%8E%E5%85%83.md)：在无原始交割公告条件下保留 \$1B/\$20B 洽谈期缺口，同步抓取 π0.7 官方 arXiv:2604.15483 论文、Penn PAL Lab 300+ 次独立实测（平均进度 42.3%）与 HumanoidMegaHub 历次估值对照完成交叉复核。
- [《【慢科研】VLA如何在内部表示物理世界？》](../../blogs/%E3%80%90%E6%85%A2%E7%A7%91%E7%A0%94%E3%80%91VLA%E5%A6%82%E4%BD%95%E5%9C%A8%E5%86%85%E9%83%A8%E8%A1%A8%E7%A4%BA%E7%89%A9%E7%90%86%E4%B8%96%E7%95%8C%EF%BC%9F.md)：触发线索为微信公众号「human five」2026-10-16发布的编译长文《【慢科研】VLA如何在内部表示物理世界？》，直接对应Mozes Jacobs\*（哈佛/Goodfire AI）、Aiden Swann\*（斯坦福/Goodfire AI）、Mathilde Papillon\*（UCSB/Goodfire AI）、Thomas McGrath、Matthew Kowal†、Thomas Fel†等人于2026年10月14日发表的一手论文《A Phenomenology of Neural Geometry in Vision-Language-Action Models》（arXiv:2610.20840v3）及同批发布的姊妹篇arXiv:2610.20767、arXiv:2610.20750。已完整提取论文8张核心实验图表落盘至work/views/具身智能/blogs/assets/vla\_internal\_physics\_representation/fig1.png至fig8.png，并在导读最前端提供零门槛直觉降维翻译与逐图读图指南。
- [《π0.5 (pi0.5): A Vision-Language-Action Model with Open-World Generalization (arXiv:2504.16054)》](../../blogs/%CF%800.5%20%28pi0.5%29_%20A%20Vision-Language-Action%20Model%20with%20Open-World%20Generalization%20%28arXiv_2504.16054%29.md)：Physical Intelligence 发布 π0.5 (pi0.5) 开放世界泛化视觉-语言-动作 (VLA) 基础模型论文（https://arxiv.org/abs/2504.16054）并更新开源权重仓库 https://github.com/Physical-Intelligence/openpi 。模型基于超 10,000 小时跨本体真机灵巧操作数据、互联网多模态数据与高层语义子任务预测进行异构协同训练（Co-training），引入知识绝缘（Knowledge Insulation）机制阻断离散 …

## 2. 收录文章与一手材料（Ingested Articles & Primary Sources）

### [Robot Policies：从 Imitation Learning 到 Token VLA](../../blogs/Robot%20Policies%EF%BC%9A%E4%BB%8E%20Imitation%20Learning%20%E5%88%B0%20Token%20VLA.md)

2026-11-24 · 来源：human five（Physical AI 课程实录整理 · 穿透 ACT / DAgger / RT-2 / FAST / OpenVLA-OFT / MolmoAct 八篇原论文） · 状态：有来源缺口

[单篇导读（blogs/）](../../blogs/Robot%20Policies%EF%BC%9A%E4%BB%8E%20Imitation%20Learning%20%E5%88%B0%20Token%20VLA.md) · [微信原件](../../../../raw/67f2fa935195a16e5c94011ab4725501f78d42d6438377a308a1e67019492a70) · 固定版本 `digest-material-67f2fa935195a16e5c94011ab4725501f78d42d6438377a308a1e67019492a70@1`

> 今天我想介绍一下 Physical AI，主要讨论如何将你们已经学过的 Vision-Language Model（VLM）、Reinforcement Learning（RL）等技术与机器人结合起来，以及这些技术究竟是如何控制机器人的。

> Policy 输出目标 Action 的频率，通常远低于底层 Controller 实际运行的频率。

关联一手材料：

- FAST: Efficient Action Tokenization for Vision-Language-Action Models（Physical Intelligence）· [原站](https://arxiv.org/abs/2501.09747) · [本地原件](../../../../raw/0c34a1580ed63be7707ff17b36ec6245c443176e6e2b6a9d4669f9b5943b4ce7) · 版本 `digest-material-0c34a1580ed63be7707ff17b36ec6245c443176e6e2b6a9d4669f9b5943b4ce7@1`
  > Abstract:Autoregressive sequence models, such as Transformer-based vision-language action (VLA) policies, can be tremendously effective for capturing complex and generalizable robotic behaviors. — 原文提取

### [Where Physical AI Is Heading](../../blogs/Where%20Physical%20AI%20Is%20Heading.md)

2026-11-05 · 来源：Alex Zheng (@AIex\_3) · 状态：有来源缺口

[单篇导读（blogs/）](../../blogs/Where%20Physical%20AI%20Is%20Heading.md) · [微信原件](../../../../raw/ff82e5b90d315a4cbc7b4dbb52d716b5f46d6d7a2105a9eedb9f36a916473e32) · 固定版本 `digest-material-ff82e5b90d315a4cbc7b4dbb52d716b5f46d6d7a2105a9eedb9f36a916473e32@1`

> Data: Simulation, not human demonstrations, will become the main source of training data for robot foundation models.

> Hardware: Dexterous hands are the near-term winner, morphologies evolved in simulation are the long-term one.

关联一手材料：

- Where Physical AI Is Heading (SF Field Report & Thesis)（Alex Zheng (@AIex\_3)）· [原站](https://x.com/i/article/2116833690626248704) · [本地原件](../../../../raw/b2dbb8bae7c1dc50ac5949da3a85d0caa659ce846450c9f7dc77a72367d27c9d) · 版本 `digest-material-b2dbb8bae7c1dc50ac5949da3a85d0caa659ce846450c9f7dc77a72367d27c9d@2`
  > Data: Simulation, not human demonstrations, will become the main source of training data for robot foundation models. — 原文提取

### [VLA简史：从RT1到MolMoAct2](../../blogs/VLA%E7%AE%80%E5%8F%B2%EF%BC%9A%E4%BB%8ERT1%E5%88%B0MolMoAct2.md)

2026-11-02 · 来源：human five（穿透 RT-1 / RT-2 / RT-X / Octo / OpenVLA / π0 / SmolVLA / MolmoAct2 八篇 arXiv 论文） · 状态：有来源缺口

[单篇导读（blogs/）](../../blogs/VLA%E7%AE%80%E5%8F%B2%EF%BC%9A%E4%BB%8ERT1%E5%88%B0MolMoAct2.md) · [微信原件](../../../../raw/337c8061044197579ff7f572a9c11aa6d2ca7b2e8d2cd1fb0e3e80ee95ddc2cc) · 固定版本 `digest-material-337c8061044197579ff7f572a9c11aa6d2ca7b2e8d2cd1fb0e3e80ee95ddc2cc@1`

> 刚开始在 Twitter 上关注机器人学习社区时，Vision-Language-Action Model （VLA ）是我经常看到的一个词。到了 2026 年，随着每一次所谓的「机器人领域 GPT 时刻」到来，我逐渐发现一件有意思的事情：机器人领域至今仍未就最值得 Scaling 的方向形成共识，不同研究者对不同技术路线有着各自坚定的判断，其中一条路线就是 VLA。

> 我想弄清楚我们是如何走到今天这一步的，从 RT-1 到 MolmoAct 2 这样的新模型，究竟发生了哪些变化？又是哪些架构设计让这些系统真正发挥作用？这篇 Blog 是我追溯这一演进过程、理解其中技术权衡，并尝试开展一些小型实验的记录。说到底，这也是我更新自己对机器人学习领域认知的一种方式。

关联一手材料：

- π0: A Vision-Language-Action Flow Model for General Robot Control（Kevin Black et al.）· [原站](https://arxiv.org/abs/2410.24164) · [NotebookLM](https://notebook.google.com/notebook/cac99041-d3b9-449e-a192-12bb4b1ad391) · [Drive](https://drive.google.com/file/d/1az7mwbOijLIvbLN0L8DCNxkA5rz3AYWE/view?usp=drivesdk) · 版本 `digest-material-fbdfba56258bdbd220207ba63410c6c943e43a73e97a7a5a47ca0bc74204f821@1`
  > Fig. 1: Our generalist robot policy uses a pre-trained vision-language model (VLM) backbone, as well as a diverse cross- embodiment dataset with a variety of dexterous manipulation tasks. — PDF p.1

### [Physical Intelligence Releases Pi API Beta & π0.7 with Multi-Scale Embodied Memory (MEM) for 10+ Min Long-Horizon Manipulation](../../blogs/Physical%20Intelligence%20Releases%20Pi%20API%20Beta%20%26%20%CF%800.7%20with%20Multi-Scale%20Embodied%20Memory%20%28MEM%29%20for%2010%2B%20Min%20Long-Hori.md)

2026-10-28 · 来源：Physical Intelligence (π) · 状态：有来源缺口

[单篇导读（blogs/）](../../blogs/Physical%20Intelligence%20Releases%20Pi%20API%20Beta%20%26%20%CF%800.7%20with%20Multi-Scale%20Embodied%20Memory%20%28MEM%29%20for%2010%2B%20Min%20Long-Hori.md) · [微信原件](../../../../raw/ffd12c35fd7f6c24b383392feafe9574542e3e7280d033e9124d0b2519fdd0b8) · 固定版本 `digest-material-ffd12c35fd7f6c24b383392feafe9574542e3e7280d033e9124d0b2519fdd0b8@2`

> 【信源巡检核心摘要】 Physical Intelligence 推出托管开发者服务 Pi API Beta（2026-10），支持外部机器人团队上传自有遥操作演示数据、在云端微调 π0.7 基础模型并部署跨本体推理。

关联一手材料：

- Physical Intelligence Releases Pi API Beta & π0.7 with Multi-Scale Embodied Memory (MEM) for 10+ Min Long-Horizon Manipulation（Physical Intelligence (π)）· [原站](https://www.pi.website/blog/pi-api-beta) · [本地原件](../../../../raw/ffd12c35fd7f6c24b383392feafe9574542e3e7280d033e9124d0b2519fdd0b8) · 版本 `digest-material-ffd12c35fd7f6c24b383392feafe9574542e3e7280d033e9124d0b2519fdd0b8@2`
  > 【信源巡检核心摘要】 Physical Intelligence 推出托管开发者服务 Pi API Beta（2026-10），支持外部机器人团队上传自有遥操作演示数据、在云端微调 π0.7 基础模型并部署跨本体推理。 — 原文提取

### [0营收估值200亿美元，具身版OpenAI又融10亿美元](../../blogs/0%E8%90%A5%E6%94%B6%E4%BC%B0%E5%80%BC200%E4%BA%BF%E7%BE%8E%E5%85%83%EF%BC%8C%E5%85%B7%E8%BA%AB%E7%89%88OpenAI%E5%8F%88%E8%9E%8D10%E4%BA%BF%E7%BE%8E%E5%85%83.md)

2026-10-28 · 来源：Physical Intelligence (arXiv:2604.15483) · Bloomberg · Penn PAL Lab · 状态：有来源缺口

[单篇导读（blogs/）](../../blogs/0%E8%90%A5%E6%94%B6%E4%BC%B0%E5%80%BC200%E4%BA%BF%E7%BE%8E%E5%85%83%EF%BC%8C%E5%85%B7%E8%BA%AB%E7%89%88OpenAI%E5%8F%88%E8%9E%8D10%E4%BA%BF%E7%BE%8E%E5%85%83.md) · [微信原件](../../../../raw/5648b8b15d1835ddb1da78d86fae0251f7cbcdceb6dcfbcd3996448282e2aa1b) · 固定版本 `digest-material-5648b8b15d1835ddb1da78d86fae0251f7cbcdceb6dcfbcd3996448282e2aa1b@1`

> 最新消息，美国机器人AI公司Physical Intelligence（简称PI）正洽谈新一轮融资，计划募集至少10亿美元，投后估值预计达到约200亿美元，折合人民币约1333亿元。

> 据彭博社报道，知情人士透露，Physical Intelligence正在洽谈至少10亿美元的新一轮融资，现有投资方Avenir和Lux Capital考虑领投。

关联一手材料：

- π0.7: a Steerable Generalist Robotic Foundation Model with Emergent Capabilities（Physical Intelligence）· [原站](https://arxiv.org/abs/2604.15483) · [本地原件](../../../../raw/aa6935e51373f723f13cf6e819c78fc12d6b8d49fd087ab4f37d212db319ea6e) · 版本 `digest-material-aa6935e51373f723f13cf6e819c78fc12d6b8d49fd087ab4f37d212db319ea6e@1`
  > , that can enable strong out-of-the-box performance in a wide range of scenarios. — 原文提取

### [【慢科研】VLA如何在内部表示物理世界？](../../blogs/%E3%80%90%E6%85%A2%E7%A7%91%E7%A0%94%E3%80%91VLA%E5%A6%82%E4%BD%95%E5%9C%A8%E5%86%85%E9%83%A8%E8%A1%A8%E7%A4%BA%E7%89%A9%E7%90%86%E4%B8%96%E7%95%8C%EF%BC%9F.md)

2026-10-16 · 来源：arXiv:2610.20840 · Goodfire AI & Harvard/Stanford · 状态：已整理

[单篇导读（blogs/）](../../blogs/%E3%80%90%E6%85%A2%E7%A7%91%E7%A0%94%E3%80%91VLA%E5%A6%82%E4%BD%95%E5%9C%A8%E5%86%85%E9%83%A8%E8%A1%A8%E7%A4%BA%E7%89%A9%E7%90%86%E4%B8%96%E7%95%8C%EF%BC%9F.md) · [微信原件](../../../../raw/7a8f304705ef4aa6fe127da3930a592bc15a055c9eb3cb84d3705e30a2a229aa) · 固定版本 `digest-material-7a8f304705ef4aa6fe127da3930a592bc15a055c9eb3cb84d3705e30a2a229aa@1`

> 既有关于 VLA 策略的研究已经证明，可以从激活中线性读取任务相关变量。然而，可读性只能证明某个变量存在，并不能说明其取值所描绘出的形状，而这种形状可能是弯曲的、多维的。

> 通过结合受控扫描、自然 rollout、线性探针和激活干预，我们构建了 VLA 模型中七种任务相关概念的分类体系。我们发现，这些概念所实现的几何结构主要是多维的，并受到策略执行动作时所面临约束的塑造。

关联一手材料：

- A Phenomenology of Neural Geometry in Vision-Language-Action Models (arXiv:2610.20840)（Goodfire AI · Harvard University · Stanford University · UC Santa Barbara (arXiv:2610.20840)）· [原站](https://arxiv.org/abs/2610.20840) · [本地原件](../../../../raw/c258bb5cca57be1832c362a8399b5b2974e4e34f5917a8dc2c6feb64fd7aec52) · 版本 `digest-material-c258bb5cca57be1832c362a8399b5b2974e4e34f5917a8dc2c6feb64fd7aec52@1`
  > Robotic manipulation is inherently geometric, involving multi-joint kinematic chains operating in 3D Euclidean and \$SO(3)\$ configuration spaces under physical contact constraints and multi-stage task horizons. — 原文提取

### [π0.5 (pi0.5): A Vision-Language-Action Model with Open-World Generalization (arXiv:2504.16054)](../../blogs/%CF%800.5%20%28pi0.5%29_%20A%20Vision-Language-Action%20Model%20with%20Open-World%20Generalization%20%28arXiv_2504.16054%29.md)

2026-04-22 · 来源：arXiv:2504.16054 · π0.5 (pi0.5) · 状态：已整理

[单篇导读（blogs/）](../../blogs/%CF%800.5%20%28pi0.5%29_%20A%20Vision-Language-Action%20Model%20with%20Open-World%20Generalization%20%28arXiv_2504.16054%29.md) · [微信原件](../../../../raw/05c9b3f37c5fc39fb8a42a6abcd17c019fa8786b21fe196369dec1da31ae2fc4) · 固定版本 `digest-material-05c9b3f37c5fc39fb8a42a6abcd17c019fa8786b21fe196369dec1da31ae2fc4@2`

> 【信源巡检核心摘要】 Physical Intelligence 发布 π0.5 (pi0.5) 开放世界泛化视觉-语言-动作 (VLA) 基础模型论文（https://arxiv.org/abs/2504.16054）并更新开源权重仓库 https://github.com/Physical-Intelligence/openpi 。

关联一手材料：

- π0.5 (pi0.5): A Vision-Language-Action Model with Open-World Generalization (arXiv:2504.16054)（Physical Intelligence）· [原站](https://arxiv.org/abs/2504.16054) · [本地原件](../../../../raw/05c9b3f37c5fc39fb8a42a6abcd17c019fa8786b21fe196369dec1da31ae2fc4) · 版本 `digest-material-05c9b3f37c5fc39fb8a42a6abcd17c019fa8786b21fe196369dec1da31ae2fc4@2`
  > 【信源巡检核心摘要】 Physical Intelligence 发布 π0.5 (pi0.5) 开放世界泛化视觉-语言-动作 (VLA) 基础模型论文（https://arxiv.org/abs/2504.16054）并更新开源权重仓库 https://github.com/Physical-Intelligence/openpi 。 — 原文提取


## 3. 关联实体网络（Verified Entity Ontology）

- ← [Chelsea Finn](../people/Chelsea%20Finn.md) · 联合创立 (π0 / π0.5 VLA)（human_certified/verified）
- ← [Sergey Levine](../people/Sergey%20Levine.md) · 联合创立 (π0 / π0.5 VLA)（human_certified/verified）
- ← Kevin Black · openpi 核心架构作者（human_certified/verified）
