# NVIDIA

[返回主体档案库](../README.md) · [返回赛道总览](../../赛道总览.md) · [单篇导读索引](../../blogs/README.md)

- 主体类别：🏢 公司与产业主体 (Companies)
- 核心定位与说明：NVIDIA 开源评测工具链统一机构入口 同主体多入口归入 NVIDIA 实体。 NVIDIA 官方 Robotics 博客专栏与 RSS 入口（blogs.nvidia.com/blog/category/robotics/feed/）。 统筹 LPR Lab 与 GEAR Lab 的工业科研主体。
- 关联账号与官方入口：
  - Company Official Site（NVIDIA）：[机构／作者主页](https://www.nvidia.com/) · 登记对象 `digest-publisher-479f42ca565a93f3c71cd2a0`
  - GitHub（NVIDIA）：[账号主页](https://github.com/NVIDIA) · 登记对象 `digest-publisher-65ef5c23b84176ec543431db` — NVIDIA 开源评测工具链统一机构入口
  - Hugging Face（NVIDIA (Hugging Face)）：[账号主页](https://huggingface.co/nvidia) · 登记对象 `digest-publisher-33b65f9e9c613e549accf638` — 同主体多入口归入 NVIDIA 实体。
  - Official Robotics Blog（NVIDIA）：[机构／作者主页](https://blogs.nvidia.com/blog/category/robotics/) · 登记对象 `digest-publisher-b580468712a3eaca824463c8` — NVIDIA 官方 Robotics 博客专栏与 RSS 入口（blogs.nvidia.com/blog/category/robotics/feed/）。
  - Official Website（NVIDIA）：[机构／作者主页](https://www.nvidia.com/en-us/research/) · 登记对象 `digest-publisher-06bf3aa080c58962a981a138` — 统筹 LPR Lab 与 GEAR Lab 的工业科研主体。

<!-- curated-profile:begin -->
## 0. 机器人与物理 AI 组织架构与信源矩阵（2025–2026 核实层级）

> [!IMPORTANT]
> **核心分权格局（三台计算机架构 × Research 并行实验室）**：NVIDIA 的物理 AI 版图按三台计算机切分为三条独立商业 P&L 线与五大研究分支——**训练与开源模型软件底座**（[Kari Briski](https://blogs.nvidia.com/blog/author/kbriski/) 主抓企业软件与 Nemotron 工具链）、**Omniverse / Cosmos 仿真与世界模型底座**（[Rev Lebaredian](https://x.com/RevLebaredian) 管第二台计算机物理仿真、[Ming-Yu Liu](https://mingyuliu.net/) 管 Cosmos 世界基础模型）、**Jetson (Orin/Thor) 端侧商业生态**（[Deepu Talla](../people/Deepu%20Talla.md) 统筹 P&L，[Murali Gopalakrishna](#0-机器人与物理-ai-组织架构与信源矩阵20252026-核实层级)、[Spencer Huang](https://developer-blogs.nvidia.com/author/shuang/)、[Amit Goel](https://blogs.nvidia.com/blog/author/agoel/) 分工推进工业客户、SDK 产品化与安全生态）；研发侧则由 NVIDIA Research 下设 [GEAR](../labs/NVIDIA%20GEAR%20Lab.md)、DIR（Cosmos）、[LPR](../labs/NVIDIA%20LPR%20Lab.md)、SRL 与 ASPIRE 五大实验室并行突破。

| 层级与板块 | 核心负责人 | 核实头衔（2025–2026） | 核心职责与代表项目 | 与他组边界及对应信源 |
| --- | --- | --- | --- | --- |
| 商业产品与端侧生态（P&L） | [Deepu Talla](../people/Deepu%20Talla.md) | VP of Robotics and Edge AI | 统筹 Jetson（Orin/Thor）、Isaac 商业软件平台与 Metropolis，主抓开发者生态与边缘芯片出货 | 管商业战略与第三台计算机生态，不直接带基础算法实验室；主源 [X @deeputalla](https://x.com/deeputalla) / [UT Austin](https://ece.utexas.edu/people/alumni/deepu-talla)（probation），协同 [Robotics Blog RSS](https://blogs.nvidia.com/blog/category/robotics/feed/) |
| 商业产品与端侧生态（P&L） | Murali Gopalakrishna | GM of Robotics & Autonomous Machines | 主导工业制造生态落地（如联合 FANUC 推进产线物理 AI） | 偏工业客户与系统集成交付；已在信源库登记（probation），经 NVIDIA 官方公告与开发者博客巡检跟踪 |
| 商业产品与端侧生态（P&L） | [Spencer Huang](https://developer-blogs.nvidia.com/author/shuang/) | Director of Product Management, Robotics | 统筹机器人软件栈产品化，打通 Isaac 仿真、合成数据与 GR00T 产品路线 | 负责科研成果向商用 SDK 转化；主源 [Developer Blog 作者页](https://developer-blogs.nvidia.com/author/shuang/)（probation）与 [Dev Blog RSS](https://devblogs.nvidia.com/feed/) |
| 商业产品与端侧生态（P&L） | [Amit Goel](https://blogs.nvidia.com/blog/author/agoel/) | Head of Robotics Ecosystem & Edge AI Product | 负责 Jetson 产品线管理、Isaac 全球开发者社区与物理 AI 安全架构 | 聚焦硬件产品定义与开发者运营；主源 [NVIDIA Blog 作者页](https://blogs.nvidia.com/blog/author/agoel/)（probation） |
| 仿真与数字孪生平台底座 | [Rev Lebaredian](https://x.com/RevLebaredian) | VP of Omniverse and Simulation Technology | 统筹 Omniverse、OpenUSD 与 Mega 蓝图，掌管第二台计算机仿真底座与 Isaac Sim 协同 | 管通用 3D 物理仿真与工业数字孪生，服务机器人也服务工厂；主源 [X @RevLebaredian](https://x.com/RevLebaredian) / [Blog 作者页](https://blogs.nvidia.com/blog/author/rlebaredian/)（probation） |
| 软件与开源大模型底座 | [Kari Briski](https://blogs.nvidia.com/blog/author/kbriski/) | VP of Generative AI Software & Enterprise | 统筹企业级 AI 软件栈与 Nemotron 等开源模型工具链 | 支撑上层智能体与工厂推理软件接口；主源 [NVIDIA Blog 作者页](https://blogs.nvidia.com/blog/author/kbriski/)（probation） |
| Research · 具身基础模型 | [Jim Fan (范麟熙)](../people/Jim%20Fan.md) / [Yuke Zhu (朱玉可)](../people/Yuke%20Zhu.md) | GEAR Lab 联合负责人（Director & Distinguished Scientist） | 主导 Project GR00T（GR00T N1 / 1.7 / GR00T 2 WAM）、SONIC 全身控制与 RoboTTT | 主攻通用人形/跨本体基础模型与人类视频预训练；主源 [NVIDIA GEAR Lab](../labs/NVIDIA%20GEAR%20Lab.md)（approved）、[X @DrJimFan](https://x.com/DrJimFan)、[yukezhu.me](https://yukezhu.me/)、[NVlabs](../labs/NVlabs.md) |
| Research · 世界基础模型 | [Ming-Yu Liu (刘明宇)](https://mingyuliu.net/) | VP of Research | 领衔 Deep Imagination 组与 Cosmos 世界基础模型（视频预测与物理因果仿真） | 为机器人和自动驾驶提供通用世界预测底座；主源 [DIR Lab](https://research.nvidia.com/labs/dir/) / [mingyuliu.net](https://mingyuliu.net/) / [GitHub @mingyuliutw](https://github.com/mingyuliutw)（probation） |
| Research · 视觉感知与加速 | [Jan Kautz](https://research.nvidia.com/person/jan-kautz) | VP of Learning and Perception Research (LPR) | 领衔 LPR Lab，主攻多模态 VLM（Eagle/NVILA）、感知解码加速（VFlash）与视觉规划 | 偏视觉感知、VLM 与系统 1 推理加速；主源 [NVIDIA LPR Lab](../labs/NVIDIA%20LPR%20Lab.md) / [Jan Kautz](https://research.nvidia.com/person/jan-kautz)（probation） |
| Research · 西雅图机器人实验室 | [Yashraj Narang](https://research.nvidia.com/person/yashraj-narang) / [Ankur Handa](https://research.nvidia.com/person/ankur-handa) / [Fabio Ramos](https://research.nvidia.com/person/fabio-ramos) / [Stan Birchfield](https://research.nvidia.com/person/stan-birchfield) | SRL 管理与核心首席科学家团队 | 主导 Isaac Lab、Newton 神经动力学、接触丰富灵巧操作与 Sim-to-Real | 聚焦底层物理仿真器、力控装配与控制算法；主源 [SRL Lab](https://research.nvidia.com/labs/srl/) 与四位核心成员官网入口（probation） |
| Research · 自主系统规划 | [Marco Pavone](https://research.nvidia.com/person/marco-pavone) | ASPIRE 研究组负责人 | 统筹自动驾驶、四足与人形机器人的长视野闭环推理与规划 | 偏运动规划、导航与决策安全边界；主源 [ASPIRE Group](https://research.nvidia.com/labs/aspire/) / [Marco Pavone](https://research.nvidia.com/person/marco-pavone)（probation） |

### 2025–2026 关键人事进出与排错核实

| 主体 / 人员 | 变动节点与现状核实 | 原 NVIDIA 关联与承接方 | 信源登记状态 |
| --- | --- | --- | --- |
| [Dieter Fox](https://allenai.org/team/dieter-fox) | 已离任：2025 年 7 月离开服务近 8 年的 NVIDIA，转任 Allen Institute for AI (Ai2) Senior Research Director 统筹开源机器人基础模型（保留 UW 教职） | 原 NVIDIA Seattle Robotics Lab（SRL）创始主任；SRL 现由 Yashraj Narang、Ankur Handa、Fabio Ramos、Stan Birchfield 团队承接 | 个人主页 `allenai.org/team/dieter-fox` 纳入 `probation` 视角跟踪 |
| [Sanja Fidler](https://www.cs.utoronto.ca/~fidler/) 与 Zan Gojcic | 已离任：2026 年 8 月离职联合创办物理 AI 世界模型初创公司 [Veeda AI](https://www.veeda.ai)（种子轮融资 \$90M） | Sanja Fidler 原任 NVIDIA VP of AI Research / 多伦多 Spatial Intelligence Lab 负责人；Zan Gojcic 原任苏黎世研究总监 | `Veeda AI`（`veeda.ai`）与 `Sanja Fidler` 均已纳入 `probation` 视角跟踪并绑定分拆关系 |
| Gerard Medioni | 排错核查：外部对话偶被误传为英伟达高管，经核实任职于 Amazon AI 与 USC，并非 NVIDIA 机器人线负责人 | 无 NVIDIA 机器人业务隶属 | 不纳入 NVIDIA 信源簇 |

### 信源分层与持续跟踪口径

- **母体公司法定与官方发布簇（`approved` / `data`）**：`NVIDIA`（CIK `0001045810`）聚合法定 SEC 披露、官方官网、`blogs.nvidia.com/blog/category/robotics/feed/`、Developer Blog RSS（`devblogs.nvidia.com/feed/`）与 GitHub `@NVIDIA`。
- **研究分支与高管视角簇（`approved` / `probation` / `lens`）**：[NVIDIA GEAR Lab](../labs/NVIDIA%20GEAR%20Lab.md) 已达 `approved`；[NVIDIA LPR Lab](../labs/NVIDIA%20LPR%20Lab.md)、[NVlabs](../labs/NVlabs.md)、DIR、SRL、ASPIRE 及上述 11 条组织板块核心负责人、离任分拆主体均已通过组织血统进入 [信源库](../../../研究工具与信源/信源库.md) `probation` 观测池，按每日巡检积累实证后晋升。
<!-- curated-profile:end -->

## 1. 核心研究问题与待核查争议（Questions & Open Debates）

### 💬 追问与核查：《英伟达机器人负责人：Agent将加速机器人开发与部署 / 世界模型与动作模型…》

- nv怎么这么多机器人团队这么多负责人，还有啥比较重要的负责人吗

关联文章：[《英伟达机器人负责人：Agent将加速机器人开发与部署 / 世界模型与动作模型终将融合 / 系统0—3需要端侧与云端协同》](../../blogs/%E8%8B%B1%E4%BC%9F%E8%BE%BE%E6%9C%BA%E5%99%A8%E4%BA%BA%E8%B4%9F%E8%B4%A3%E4%BA%BA%EF%BC%9AAgent%E5%B0%86%E5%8A%A0%E9%80%9F%E6%9C%BA%E5%99%A8%E4%BA%BA%E5%BC%80%E5%8F%91%E4%B8%8E%E9%83%A8%E7%BD%B2%20_%20%E4%B8%96%E7%95%8C%E6%A8%A1%E5%9E%8B%E4%B8%8E%E5%8A%A8%E4%BD%9C%E6%A8%A1%E5%9E%8B%E7%BB%88%E5%B0%86%E8%9E%8D%E5%90%88%20_%20%E7%B3%BB%E7%BB%9F0%E2%80%943%E9%9C%80%E8%A6%81%E7%AB%AF%E4%BE%A7%E4%B8%8E%E4%BA%91%E7%AB%AF%E5%8D%8F%E5%90%8C.md)

> 追查结论摘要：之所以外界常觉得英伟达“机器人负责人满天飞”，核心原因在于两点：第一，NVIDIA 的“三台计算机”架构天然把机器人业务切成了三个完全不同 P&L 与考核口径的部门；第二，NVIDIA Research 由首席科学家 Bill Dally 统筹 400–500 名研究员，按实验室与高校合聘制并行赛马，而中文媒体常把所有实验室主任、产品总监和事业部 VP 笼统译作“英伟达机器人负责人”。

### 🔍 待核查缺口与证据边界（Open Gaps）

- `not_disclosed`：NVIDIA LPR Lab 项目页与 arXiv:2611.25105v2 均未开放 MAWAM 的训练/推理代码仓、2.76B 团队微调权重及 Galaxea R1 Pro 双机同步遥操作数据集，且其底座 GR00T 2 权重在官方页亦标示预计 2026 年 12 月开源，外部团队暂无法独立复现真机 67.8% 与仿真 90.3% 指标。 [线索](https://research.nvidia.com/labs/lpr/mawam/)（关联：[《MAWAM: A Multi-Agent World-Action Model for Coordinated Manipulation》](../../blogs/MAWAM_%20A%20Multi-Agent%20World-Action%20Model%20for%20Coordinated%20Manipulation.md)）
- `pending_verification`：MAWAM 真机实验仅在两台锁死底盘与躯干的同构 Galaxea R1 Pro 上各测 30 次、无指尖触觉或腕部力矩传感，且依赖单卡 H100 集中式推理（0.32 s 模型耗时未含网络往返）与固定 \<= 4 台智能体的正则单形池；端侧 Jetson Thor 部署、异构多机及动态编队尚未经真机验证。 [线索](https://arxiv.org/html/2611.25105v2)（关联：[《MAWAM: A Multi-Agent World-Action Model for Coordinated Manipulation》](../../blogs/MAWAM_%20A%20Multi-Agent%20World-Action%20Model%20for%20Coordinated%20Manipulation.md)）
- `unavailable`：YouTube 原视频（https://www.youtube.com/watch?v=rarKwkLN-Bg）未在本地提取英文逐字音轨字幕，仅完成 The Information 官方栏目报道、主持人 Rocket Drew 及 GTC Berlin 2026（2026-10-21）公开事实交叉核验；详细对话以触发稿件全本留存。 [线索](https://www.youtube.com/watch?v=rarKwkLN-Bg)（关联：[《英伟达机器人负责人：Agent将加速机器人开发与部署 / 世界模型与动作模型终将融合 / 系统0—3需要端侧与云端协同》](../../blogs/%E8%8B%B1%E4%BC%9F%E8%BE%BE%E6%9C%BA%E5%99%A8%E4%BA%BA%E8%B4%9F%E8%B4%A3%E4%BA%BA%EF%BC%9AAgent%E5%B0%86%E5%8A%A0%E9%80%9F%E6%9C%BA%E5%99%A8%E4%BA%BA%E5%BC%80%E5%8F%91%E4%B8%8E%E9%83%A8%E7%BD%B2%20_%20%E4%B8%96%E7%95%8C%E6%A8%A1%E5%9E%8B%E4%B8%8E%E5%8A%A8%E4%BD%9C%E6%A8%A1%E5%9E%8B%E7%BB%88%E5%B0%86%E8%9E%8D%E5%90%88%20_%20%E7%B3%BB%E7%BB%9F0%E2%80%943%E9%9C%80%E8%A6%81%E7%AB%AF%E4%BE%A7%E4%B8%8E%E4%BA%91%E7%AB%AF%E5%8D%8F%E5%90%8C.md)）
- `not_disclosed`：Deepu Talla 所称的 Astra 资产与胶水代码提速 100 倍、未来一至三年到达通用机器人 ChatGPT 时刻，以及 6–12 个月百亿参数以下端侧蒸馏预期，均缺乏独立基准任务分母与可审计产线对照实验数据。 [线索](https://www.youtube.com/watch?v=rarKwkLN-Bg)（关联：[《英伟达机器人负责人：Agent将加速机器人开发与部署 / 世界模型与动作模型终将融合 / 系统0—3需要端侧与云端协同》](../../blogs/%E8%8B%B1%E4%BC%9F%E8%BE%BE%E6%9C%BA%E5%99%A8%E4%BA%BA%E8%B4%9F%E8%B4%A3%E4%BA%BA%EF%BC%9AAgent%E5%B0%86%E5%8A%A0%E9%80%9F%E6%9C%BA%E5%99%A8%E4%BA%BA%E5%BC%80%E5%8F%91%E4%B8%8E%E9%83%A8%E7%BD%B2%20_%20%E4%B8%96%E7%95%8C%E6%A8%A1%E5%9E%8B%E4%B8%8E%E5%8A%A8%E4%BD%9C%E6%A8%A1%E5%9E%8B%E7%BB%88%E5%B0%86%E8%9E%8D%E5%90%88%20_%20%E7%B3%BB%E7%BB%9F0%E2%80%943%E9%9C%80%E8%A6%81%E7%AB%AF%E4%BE%A7%E4%B8%8E%E4%BA%91%E7%AB%AF%E5%8D%8F%E5%90%8C.md)）
- `unavailable`：原巡检条目标注链接 https://blogs.nvidia.com/blog/2026/11/09/practice-makes-precise-corl/ 返回失效错误，已穿透定位并归档官方实际发布页 https://blogs.nvidia.com/blog/robotics-simulation-advancements-corl/ 与 GEAR Lab 项目页全文。 [线索](https://blogs.nvidia.com/blog/robotics-simulation-advancements-corl/)（关联：[《Jim Fan 与 NVIDIA 在 CoRL 2026 发布 GR00T 2 世界动作模型（WAM）及 10 万小时开源示范数据集》](../../blogs/Jim%20Fan%20%E4%B8%8E%20NVIDIA%20%E5%9C%A8%20CoRL%202026%20%E5%8F%91%E5%B8%83%20GR00T%202%20%E4%B8%96%E7%95%8C%E5%8A%A8%E4%BD%9C%E6%A8%A1%E5%9E%8B%EF%BC%88WAM%EF%BC%89%E5%8F%8A%2010%20%E4%B8%87%E5%B0%8F%E6%97%B6%E5%BC%80%E6%BA%90%E7%A4%BA%E8%8C%83%E6%95%B0%E6%8D%AE%E9%9B%86.md)）
- `not_disclosed`：GR00T 2 与 GR00T 2 Turbo 模型权重及 Cross-Adapt 代码在官网仍标示为 Available in December（预计 2026 年 12 月开源）；白皮书 50 项少样本任务来自至少达 80% 可学性的预筛选池，且合作企业 Foxconn、Siemens、Nexuni 等未披露产线良率、UPH 节拍与多小时连续运行 MTBF。 [线索](https://research.nvidia.com/labs/gear/gr00t-2/)（关联：[《Jim Fan 与 NVIDIA 在 CoRL 2026 发布 GR00T 2 世界动作模型（WAM）及 10 万小时开源示范数据集》](../../blogs/Jim%20Fan%20%E4%B8%8E%20NVIDIA%20%E5%9C%A8%20CoRL%202026%20%E5%8F%91%E5%B8%83%20GR00T%202%20%E4%B8%96%E7%95%8C%E5%8A%A8%E4%BD%9C%E6%A8%A1%E5%9E%8B%EF%BC%88WAM%EF%BC%89%E5%8F%8A%2010%20%E4%B8%87%E5%B0%8F%E6%97%B6%E5%BC%80%E6%BA%90%E7%A4%BA%E8%8C%83%E6%95%B0%E6%8D%AE%E9%9B%86.md)）
- `unavailable`：@DrJimFan 在 X 平台发布的具体 CoRL 2026 预热帖原始 status 链接、帖文全文及内嵌 1.0X 原速真机演示视频流，因 X 前端 JS 渲染与登录墙限制未在本地抓回全本（x.com/DrJimFan 仅返回 605.3K 粉丝主页外壳）；当前以 NVIDIA GEAR Lab GR00T 2 官方发布页、DreamDojo (arXiv:2602.06949) 及 DreamZero (arXiv:2602.15922) 一手资料穿透补全。 [线索](https://x.com/DrJimFan)（关联：[《Jim Fan (@DrJimFan)：CoRL 2026 主题演讲与 1.0X 原速真机自主操作预热视频澄清》](../../blogs/Jim%20Fan%20%28%40DrJimFan%29%EF%BC%9ACoRL%202026%20%E4%B8%BB%E9%A2%98%E6%BC%94%E8%AE%B2%E4%B8%8E%201.0X%20%E5%8E%9F%E9%80%9F%E7%9C%9F%E6%9C%BA%E8%87%AA%E4%B8%BB%E6%93%8D%E4%BD%9C%E9%A2%84%E7%83%AD%E8%A7%86%E9%A2%91%E6%BE%84%E6%B8%85.md)）
- `pending_verification`：1.0X 原速无剪辑真机演示虽可排除倍速剪辑疑虑，但单段演示之外的连续多小时平均故障间隔时间（MTBF）及人工接管率仍待 2026 年 12 月权重与 X-Adapt 代码正式开源后由独立第三方实验室复测验证。（关联：[《Jim Fan (@DrJimFan)：CoRL 2026 主题演讲与 1.0X 原速真机自主操作预热视频澄清》](../../blogs/Jim%20Fan%20%28%40DrJimFan%29%EF%BC%9ACoRL%202026%20%E4%B8%BB%E9%A2%98%E6%BC%94%E8%AE%B2%E4%B8%8E%201.0X%20%E5%8E%9F%E9%80%9F%E7%9C%9F%E6%9C%BA%E8%87%AA%E4%B8%BB%E6%93%8D%E4%BD%9C%E9%A2%84%E7%83%AD%E8%A7%86%E9%A2%91%E6%BE%84%E6%B8%85.md)）
- `unavailable`：NVIDIA 官方 CoRL 2026 博客文章（https://blogs.nvidia.com/blog/2026/11/09/practice-makes-precise-corl/，涵盖 Isaac Lab 3.0 + Newton 物理引擎及 DexBench / VABAR 工业基准）在直接抓取时返回 HTTP 403 Forbidden，本工作台仅通过联网检索与库内既有登记摘要核对核心事实，未获取该博文完整正文。 [线索](https://blogs.nvidia.com/blog/2026/11/09/practice-makes-precise-corl/)（关联：[《GR00T 2: World-Action Model for Physical AI and Agentic Robotics》](../../blogs/GR00T%202_%20World-Action%20Model%20for%20Physical%20AI%20and%20Agentic%20Robotics.md)）
- `not_disclosed`：GR00T 2 与 GR00T 2 Turbo 模型权重以及 Cross-Adapt（X-Adapt）完整代码在官方项目页仍标示为 Available in December（预计 2026 年 12 月开源）；同时白皮书未披露长时程连续运行（如整夜装配演示）超过 8 小时的平均故障间隔时间（MTBF）及人工接管率。 [线索](https://research.nvidia.com/labs/gear/gr00t-2/)（关联：[《GR00T 2: World-Action Model for Physical AI and Agentic Robotics》](../../blogs/GR00T%202_%20World-Action%20Model%20for%20Physical%20AI%20and%20Agentic%20Robotics.md)）
- `not_disclosed`：GR00T 2 白皮书披露 50 项评测任务系从「5 条演示微调可达 ≥80% 成功率」的可学池中预筛选得出，未披露未筛选全量工业长尾任务分母得分、DexBench/VABAR 分项绝对分值及连续 8 小时无剪辑运行 MTBF；核心模型权重与 X-Adapt 代码需待 2026 年 12 月正式开源后独立复现。 [线索](https://research.nvidia.com/labs/gear/gr00t-2/)（关联：[《GR00T 2 Official Technical Release: Scaling World-Action Models on 402,000 Hours of Human Video with X-Adapt & Jetson Thor 2B Turbo》](../../blogs/GR00T%202%20Official%20Technical%20Release_%20Scaling%20World-Action%20Models%20on%20402%2C000%20Hours%20of%20Human%20Video%20with%20X-Adapt%20%26.md)）

- [《MAWAM: A Multi-Agent World-Action Model for Coordinated Manipulation》](../../blogs/MAWAM_%20A%20Multi-Agent%20World-Action%20Model%20for%20Coordinated%20Manipulation.md)：已通过 ingest.fetch 抓回 arXiv:2611.25105v2 HTML 全文（83,418 字符）及 PDF 首页（23 页）、NVIDIA LPR Lab 官方项目页（research.nvidia.com/labs/lpr/mawam/，10,340 字符）完成全量穿透核查：13 位作者中 11 位署名 NVIDIA（横跨 Jan Kautz / Zhiding Yu 的 LPR Lab 与 Jim Fan / Johan Bjorck 的 GEAR Lab），仅 Xianzhe Fan / Hengshuang Zhao 兼署或署名香港大学（HKU）、Yecheng Wu 兼署 MIT，确认为 NVIDIA 主导的工业实验室联合成果而非纯高校学术论文；拆解了 4D RoPE 正单形身份编码、Action-to-Video Bias、两阶段训练、Table 1/2/3/7/8/9/11 全量定量消融，并定位出「推理期冻结未来帧几乎不损性能但删去未来 token 即归零」的共享工作区机理与 0.32 s H100 集中式推理边界；训练/部署代码与团队权重尚未开源及异构/触觉局限保留规范缺口。
- [《英伟达机器人负责人：Agent将加速机器人开发与部署 / 世界模型与动作模型终将融合 / 系统0—3需要端侧与云端协同》](../../blogs/%E8%8B%B1%E4%BC%9F%E8%BE%BE%E6%9C%BA%E5%99%A8%E4%BA%BA%E8%B4%9F%E8%B4%A3%E4%BA%BA%EF%BC%9AAgent%E5%B0%86%E5%8A%A0%E9%80%9F%E6%9C%BA%E5%99%A8%E4%BA%BA%E5%BC%80%E5%8F%91%E4%B8%8E%E9%83%A8%E7%BD%B2%20_%20%E4%B8%96%E7%95%8C%E6%A8%A1%E5%9E%8B%E4%B8%8E%E5%8A%A8%E4%BD%9C%E6%A8%A1%E5%9E%8B%E7%BB%88%E5%B0%86%E8%9E%8D%E5%90%88%20_%20%E7%B3%BB%E7%BB%9F0%E2%80%943%E9%9C%80%E8%A6%81%E7%AB%AF%E4%BE%A7%E4%B8%8E%E4%BA%91%E7%AB%AF%E5%8D%8F%E5%90%8C.md)：已穿透至 The Information AI Deep Dive 原视频（YouTube watch?v=rarKwkLN-Bg，主持人 Rocket Drew，受访人 Deepu Talla，2026-10-21 GTC Berlin 主题演讲后于 2026 年 11 月发布），并结合网络取证核实 2025-2026 年英伟达机器人与物理 AI 商业线、仿真底座及 Research 各实验室最新负责人与离任动态；中文转述公号 SourceMind 降级为 trigger\_source。
- [《Jim Fan 与 NVIDIA 在 CoRL 2026 发布 GR00T 2 世界动作模型（WAM）及 10 万小时开源示范数据集》](../../blogs/Jim%20Fan%20%E4%B8%8E%20NVIDIA%20%E5%9C%A8%20CoRL%202026%20%E5%8F%91%E5%B8%83%20GR00T%202%20%E4%B8%96%E7%95%8C%E5%8A%A8%E4%BD%9C%E6%A8%A1%E5%9E%8B%EF%BC%88WAM%EF%BC%89%E5%8F%8A%2010%20%E4%B8%87%E5%B0%8F%E6%97%B6%E5%BC%80%E6%BA%90%E7%A4%BA%E8%8C%83%E6%95%B0%E6%8D%AE%E9%9B%86.md)：已穿透纠正原巡检失效链接并抓取 NVIDIA CoRL 2026 官方发布页（blogs.nvidia.com/blog/robotics-simulation-advancements-corl/）、NVIDIA GEAR Lab GR00T 2 技术发布页（research.nvidia.com/labs/gear/gr00t-2/）与 Hugging Face PhysicalAI-Human-1M-100K 数据集页面；系统梳理 100,000 小时开源子集与 402,730 小时内部全集层级、2B 参数 GR00T 2 Turbo 在 Unitree G1 机载 Jetson Thor 的 124 ms / 80 步动作块控制回路，以及 Nexuni、Foxconn、Siemens、MicroAGI、Skild AI、RLWRLD 等生态合作矩阵；权重预计 2026 年 12 月开源与 5-Shot 95% 任务池预筛选偏差保留缺口。
- [《Jim Fan (@DrJimFan)：CoRL 2026 主题演讲与 1.0X 原速真机自主操作预热视频澄清》](../../blogs/Jim%20Fan%20%28%40DrJimFan%29%EF%BC%9ACoRL%202026%20%E4%B8%BB%E9%A2%98%E6%BC%94%E8%AE%B2%E4%B8%8E%201.0X%20%E5%8E%9F%E9%80%9F%E7%9C%9F%E6%9C%BA%E8%87%AA%E4%B8%BB%E6%93%8D%E4%BD%9C%E9%A2%84%E7%83%AD%E8%A7%86%E9%A2%91%E6%BE%84%E6%B8%85.md)：替换原 vertexaisearch 重定向，复用并关联库内已归档 NVIDIA GEAR Lab GR00T 2 官方发布页（https://research.nvidia.com/labs/gear/gr00t-2/），并新抓归档 DreamDojo（arXiv:2602.06949）与 DreamZero（arXiv:2602.15922）一手网页；系统梳理 Jim Fan (@DrJimFan) 在 CoRL 2026 强调的「1.0X 原速真机自主运行透明准则」及从 44k 小时人类视频世界模型（DreamDojo）到 14B WAM（DreamZero 7 Hz）再收敛至端侧 2B GR00T 2 Turbo（System 1 执行 × System 2 Astra WAM API 规划）的技术栈跃迁，并与库内 GR00T 2 技术白皮书及 CoRL 演讲全文导读交叉链接；X 原始单条 status 链接及独立长时 MTBF 复测保留来源缺口。
- [《GR00T 2: World-Action Model for Physical AI and Agentic Robotics》](../../blogs/GR00T%202_%20World-Action%20Model%20for%20Physical%20AI%20and%20Agentic%20Robotics.md)：本次核查穿透 CoRL 2026 演讲全文（6,903 字）、NVIDIA GEAR GR00T 2 官方项目页、135 页白皮书 gr00t2\_whitepaper.pdf、SimFoundry（arXiv:2606.28276）、GEAR DexUMI 硬件文档及 Hugging Face 数据集 PhysicalAI-Human-1M-100K：纠偏开源数据集正式仓名为 nvidia/PhysicalAI-Human-1M-100K（区分于 402,730 小时内部全集），核实 DexUMI 为单手 15 磁编码器+五指法向/剪切力传感+OAK 相机多协议开源，补齐 GR00T 2 Turbo 跨任务胜负分化、WAM API/ASPIRE 连续百次实测及白皮书触觉/汇率局限；blogs.nvidia.com CoRL 博客（Isaac Lab 3.0 / Newton / DexBench / VABAR）直抓遇 403，GR00T 2 权重标示 2026 年 12 月开源。
- [《GR00T 2 Official Technical Release: Scaling World-Action Models on 402,000 Hours of Human Video with X-Adapt & Jetson Thor 2B Turbo》](../../blogs/GR00T%202%20Official%20Technical%20Release_%20Scaling%20World-Action%20Models%20on%20402%2C000%20Hours%20of%20Human%20Video%20with%20X-Adapt%20%26.md)：完成 NVIDIA GEAR Lab（Jim Fan / Yuke Zhu 团队）GR00T 2 与 GR00T 2 Turbo 官方项目页及技术白皮书穿透核查：拆解 436,414 小时三源异构数据（402,730h 第一视角人类无标签视频 + 23,500h 真机遥操作 + 10,184h/2,897 任务手持 UMI，含 Hugging Face 开源 100,000h Human-1M 子集与 1/125 标注成本 FLORA 套件）、Cosmos-Predict2.5-2B 统一序列掩码流匹配机制（与 GR00T N1/N1.5、DreamZero 14B、VFlash、Ego4WAM、π0.5 横向对账）、Wan 2.2 VAE 1/4 视觉压缩在机载 Jetson Thor 上的 124 ms 实时闭环（驱动 Jetson Orin 50Hz SONIC 全身控制及 Astra WAM API/Edit/ASPIRE 协同），并复核 5-Shot 95% 成功率背后的 ≥80% 可学任务预筛选口径偏差与接触力控盲区。
- [《GR00T N1 & N1.5: An Open Foundation Model for Generalist Humanoid Robots (arXiv:2503.14734)》](../../blogs/GR00T%20N1%20%26%20N1.5_%20An%20Open%20Foundation%20Model%20for%20Generalist%20Humanoid%20Robots%20%28arXiv_2503.14734%29.md)：NVIDIA GEAR Lab 发布通用人形机器人开源基础模型 GR00T N1 与 N1.5 技术报告（https://arxiv.org/abs/2503.14734）及官方代码库 https://github.com/NVIDIA/Isaac-GR00T 与全身控制框架 https://github.com/NVlabs/GR00T-WholeBodyControl 。架构采用 Eagle VLM (System 2) + Diffusion Transformer (System 1) 双系统设计，融合真机…

## 2. 收录文章与一手材料（Ingested Articles & Primary Sources）

### [MAWAM: A Multi-Agent World-Action Model for Coordinated Manipulation](../../blogs/MAWAM_%20A%20Multi-Agent%20World-Action%20Model%20for%20Coordinated%20Manipulation.md)

2026-11-18 · 来源：NVIDIA LPR Lab · NVIDIA GEAR Lab · HKU · MIT (arXiv:2611.25105v2) · 状态：有来源缺口

[单篇导读（blogs/）](../../blogs/MAWAM_%20A%20Multi-Agent%20World-Action%20Model%20for%20Coordinated%20Manipulation.md) · [微信原件](../../../../raw/8f1cb39900b03eb9c40d6b280d45b04215ada8fa19eb4759d907fc176ee5b4af) · 固定版本 `digest-material-8f1cb39900b03eb9c40d6b280d45b04215ada8fa19eb4759d907fc176ee5b4af@1`

> Every move in a robot team changes the world in which its teammates must act. Coordinated manipulation therefore calls for predicting the team's actions together with the physical future they jointly create.

> We introduce MAWAM, a multi-agent world-action model that jointly generates each robot's future views and executable action chunks in a single sample. Built from a pretrained single-robot world-action backbone, MAWAM jointly denoises all robots' action and future-view tokens through cross-agent attention, while preserving a separate control interface for each robot.

关联一手材料：

- MAWAM: A Multi-Agent World-Action Model for Coordinated Manipulation (arXiv:2611.25105v2 Full Paper)（NVIDIA LPR Lab · NVIDIA GEAR Lab · HKU · MIT）· [原站](https://arxiv.org/abs/2611.25105v2) · [本地原件](../../../../raw/385309e9c3c241bde580b041e37a9e84963f13a5ada1b77ea36563a156151813) · 版本 `digest-material-385309e9c3c241bde580b041e37a9e84963f13a5ada1b77ea36563a156151813@1`
  > Every move in a robot team changes the world in which its teammates must act. Coordinated manipulation therefore calls for predicting the team’s actions together with the physical future they jointly create. — 原文提取

### [英伟达机器人负责人：Agent将加速机器人开发与部署 / 世界模型与动作模型终将融合 / 系统0—3需要端侧与云端协同](../../blogs/%E8%8B%B1%E4%BC%9F%E8%BE%BE%E6%9C%BA%E5%99%A8%E4%BA%BA%E8%B4%9F%E8%B4%A3%E4%BA%BA%EF%BC%9AAgent%E5%B0%86%E5%8A%A0%E9%80%9F%E6%9C%BA%E5%99%A8%E4%BA%BA%E5%BC%80%E5%8F%91%E4%B8%8E%E9%83%A8%E7%BD%B2%20_%20%E4%B8%96%E7%95%8C%E6%A8%A1%E5%9E%8B%E4%B8%8E%E5%8A%A8%E4%BD%9C%E6%A8%A1%E5%9E%8B%E7%BB%88%E5%B0%86%E8%9E%8D%E5%90%88%20_%20%E7%B3%BB%E7%BB%9F0%E2%80%943%E9%9C%80%E8%A6%81%E7%AB%AF%E4%BE%A7%E4%B8%8E%E4%BA%91%E7%AB%AF%E5%8D%8F%E5%90%8C.md)

2026-11-17 · 来源：The Information · AI Deep Dive · 状态：有来源缺口

[单篇导读（blogs/）](../../blogs/%E8%8B%B1%E4%BC%9F%E8%BE%BE%E6%9C%BA%E5%99%A8%E4%BA%BA%E8%B4%9F%E8%B4%A3%E4%BA%BA%EF%BC%9AAgent%E5%B0%86%E5%8A%A0%E9%80%9F%E6%9C%BA%E5%99%A8%E4%BA%BA%E5%BC%80%E5%8F%91%E4%B8%8E%E9%83%A8%E7%BD%B2%20_%20%E4%B8%96%E7%95%8C%E6%A8%A1%E5%9E%8B%E4%B8%8E%E5%8A%A8%E4%BD%9C%E6%A8%A1%E5%9E%8B%E7%BB%88%E5%B0%86%E8%9E%8D%E5%90%88%20_%20%E7%B3%BB%E7%BB%9F0%E2%80%943%E9%9C%80%E8%A6%81%E7%AB%AF%E4%BE%A7%E4%B8%8E%E4%BA%91%E7%AB%AF%E5%8D%8F%E5%90%8C.md) · [微信原件](../../../../raw/18ec3f1264a5699ad42582981f779949281357bb770979557bda3c820a7fc571) · 固定版本 `digest-material-18ec3f1264a5699ad42582981f779949281357bb770979557bda3c820a7fc571@1`

> 而现在，像 Astra 这样的智能体 AI，经过针对物理世界的训练，对世界的物理规律有了不错的理解，也能很好地理解空间与时间的关系，也就是时空关系。因此，它能够研究物体的属性，上网找到可能已有的 CAD 模型，或者利用图片和视频。你并不一定要做一次完整、精确的三维扫描，只要拍一些照片和视频，它就能构建这些环境。 也就是说，过去要耗费几个月才能生成的合成素材和环境，现在一下子提速了 100 倍。

> Microduck 这种情况，我觉得 99%，甚至 98%，可能就可以接受。你让它翻个跟头，它大致做出来了，毕竟它很可爱嘛。 但你说得完全对。如果是工业机器人，要执行极其重要的任务，准确率就必须非常高，比如 99.99% 这样的水平。

关联一手材料：

- The Information AI Deep Dive: Deepu Talla (NVIDIA VP of Robotics & Edge AI) on OpenAI Astra, WAMs & System 0-3（The Information · AI Deep Dive）· [原站](https://www.youtube.com/watch?v=rarKwkLN-Bg) · [本地原件](../../../../raw/0d4741483831eaeaaaa7524e17079bfde7652a2e2fa6b67a7f8de55711e0bd38) · 版本 `digest-material-0d4741483831eaeaaaa7524e17079bfde7652a2e2fa6b67a7f8de55711e0bd38@1`
  > The Information · AI Deep Dive — Interview with Deepu Talla (VP of Robotics & Edge AI, NVIDIA) Primary Source Video URL: https://www.youtube.com/watch?v=rarKwkLN-Bg Channel: The Information (TITV / AI Deep Dive) — — 原文提取

### [Jim Fan 与 NVIDIA 在 CoRL 2026 发布 GR00T 2 世界动作模型（WAM）及 10 万小时开源示范数据集](../../blogs/Jim%20Fan%20%E4%B8%8E%20NVIDIA%20%E5%9C%A8%20CoRL%202026%20%E5%8F%91%E5%B8%83%20GR00T%202%20%E4%B8%96%E7%95%8C%E5%8A%A8%E4%BD%9C%E6%A8%A1%E5%9E%8B%EF%BC%88WAM%EF%BC%89%E5%8F%8A%2010%20%E4%B8%87%E5%B0%8F%E6%97%B6%E5%BC%80%E6%BA%90%E7%A4%BA%E8%8C%83%E6%95%B0%E6%8D%AE%E9%9B%86.md)

2026-11-09 · 来源：NVIDIA · CoRL 2026 (GR00T 2 / Isaac Lab 3.0) · 状态：有来源缺口

[单篇导读（blogs/）](../../blogs/Jim%20Fan%20%E4%B8%8E%20NVIDIA%20%E5%9C%A8%20CoRL%202026%20%E5%8F%91%E5%B8%83%20GR00T%202%20%E4%B8%96%E7%95%8C%E5%8A%A8%E4%BD%9C%E6%A8%A1%E5%9E%8B%EF%BC%88WAM%EF%BC%89%E5%8F%8A%2010%20%E4%B8%87%E5%B0%8F%E6%97%B6%E5%BC%80%E6%BA%90%E7%A4%BA%E8%8C%83%E6%95%B0%E6%8D%AE%E9%9B%86.md) · [微信原件](../../../../raw/a9a0c7f0b641c24ae7d02b4233b17baaaeb6b162b4d4fb3764f4aa749fb83793) · 固定版本 `digest-material-a9a0c7f0b641c24ae7d02b4233b17baaaeb6b162b4d4fb3764f4aa749fb83793@1`

> 【信源巡检核心摘要】 NVIDIA 机器人总监 Jim Fan（@DrJimFan）于 2026 年 11 月 9–12 日 CoRL 2026 联合推出基于 Cosmos 架构的新一代世界动作模型（WAM）GR00T 2，采用单一扩散 Transformer 联合预测未来视觉帧与电机动作，支持超 20 步、5 分钟以上长程灵巧操作及 X-Adapt 跨本体迁移。

关联一手材料：

- nvidia/PhysicalAI-Human-1M-100K (Open 100K Hours Egocentric Human Video Dataset)（NVIDIA）· [原站](https://huggingface.co/datasets/nvidia/PhysicalAI-Human-1M-100K) · [本地原件](../../../../raw/bd1a468524e7ffe1837c78a141b0b23b55c0b4d3d92938fa5584fcd5f5db05b2) · 版本 `digest-material-bd1a468524e7ffe1837c78a141b0b23b55c0b4d3d92938fa5584fcd5f5db05b2@1`
  > The worker repeatedly sews white lace fabric with a sewing machine after trimming loose threads. — 原文提取

### [Jim Fan (@DrJimFan)：CoRL 2026 主题演讲与 1.0X 原速真机自主操作预热视频澄清](../../blogs/Jim%20Fan%20%28%40DrJimFan%29%EF%BC%9ACoRL%202026%20%E4%B8%BB%E9%A2%98%E6%BC%94%E8%AE%B2%E4%B8%8E%201.0X%20%E5%8E%9F%E9%80%9F%E7%9C%9F%E6%9C%BA%E8%87%AA%E4%B8%BB%E6%93%8D%E4%BD%9C%E9%A2%84%E7%83%AD%E8%A7%86%E9%A2%91%E6%BE%84%E6%B8%85.md)

2026-11-09 · 来源：NVIDIA GEAR Lab · GR00T 2 Technical Release · 状态：有来源缺口

[单篇导读（blogs/）](../../blogs/Jim%20Fan%20%28%40DrJimFan%29%EF%BC%9ACoRL%202026%20%E4%B8%BB%E9%A2%98%E6%BC%94%E8%AE%B2%E4%B8%8E%201.0X%20%E5%8E%9F%E9%80%9F%E7%9C%9F%E6%9C%BA%E8%87%AA%E4%B8%BB%E6%93%8D%E4%BD%9C%E9%A2%84%E7%83%AD%E8%A7%86%E9%A2%91%E6%BE%84%E6%B8%85.md) · [微信原件](../../../../raw/0ae571b551bb31cf203097d3d7c04b9a424cb96c7ad108a27b1f0839c3bc9fe5) · 固定版本 `digest-material-0ae571b551bb31cf203097d3d7c04b9a424cb96c7ad108a27b1f0839c3bc9fe5@1`

> 【信源巡检核心摘要】 NVIDIA Project GR00T 联合负责人兼 GEAR 具身智能研究主管 Jim Fan（X 账号 @DrJimFan）在 2026-11-09 至 11-12 德州奥斯汀 CoRL 2026 大会期间及会前在 X 引发广泛传播。

关联一手材料：

- GR00T 2 Official Technical Release: Scaling World-Action Models on 402,000 Hours of Human Video with X-Adapt & Jetson Thor 2B Turbo（NVIDIA GEAR Lab）· [原站](https://research.nvidia.com/labs/gear/gr00t-2/) · [本地原件](../../../../raw/c6f1bcb6d99d80a10ee03de0b047c533b6a55b761aecc635d5dd8bdad433f654) · 版本 `digest-material-c6f1bcb6d99d80a10ee03de0b047c533b6a55b761aecc635d5dd8bdad433f654@1`
  > 【信源巡检核心摘要】 NVIDIA GEAR Lab 在 CoRL 2026 正式上线下一代机器人基础模型 GR00T 2 官方技术页与白皮书（https://research.nvidia.com/labs/gear/gr00t-2/ ，代码栈关联 https://github.com/NVIDIA/Isaac-GR00T ）。 — 原文提取

### [GR00T 2: World-Action Model for Physical AI and Agentic Robotics](../../blogs/GR00T%202_%20World-Action%20Model%20for%20Physical%20AI%20and%20Agentic%20Robotics.md)

2026-11-09 · 来源：NVIDIA GEAR Lab · 状态：有来源缺口

[单篇导读（blogs/）](../../blogs/GR00T%202_%20World-Action%20Model%20for%20Physical%20AI%20and%20Agentic%20Robotics.md) · [微信原件](../../../../raw/e8b71a3de7c7aa50d6c424f4d6c54b0560e7f6855fd52d651c51aab56435f417) · 固定版本 `digest-material-e8b71a3de7c7aa50d6c424f4d6c54b0560e7f6855fd52d651c51aab56435f417@1`

> Jim Fan宣布新模型发布，GR00T 2 是面向通用机器人的世界—动作模型（World-Action Model，WAM）。 它接收语言指令、多视角相机画面和机器人状态，通过同一个扩散 Transformer 联合预测未来画面与动作序列，把“世界将如何变化”和“机器人应如何行动”一起学习。

> Cross-Adapt 的重点，是让机器人执行它自己没有示范过的任务。 演讲展示了人体动捕、UMI 夹爪、DexUMI 外骨骼及仿真经验向机器人的迁移。论文将其称为 X-Adapt：联合预测未来视频与动作，为不同身体的经验建立联系。这里的“零样本”针对目标机器人上的新任务；人体动捕和 UMI 路径仍使用目标机器人的其他任务数据来建立身体对应。

关联一手材料：

- nvidia/PhysicalAI-Human-1M-100K (Open 100K Hours Egocentric Human Video Dataset)（NVIDIA）· [原站](https://huggingface.co/datasets/nvidia/PhysicalAI-Human-1M-100K) · [本地原件](../../../../raw/bd1a468524e7ffe1837c78a141b0b23b55c0b4d3d92938fa5584fcd5f5db05b2) · 版本 `digest-material-bd1a468524e7ffe1837c78a141b0b23b55c0b4d3d92938fa5584fcd5f5db05b2@1`
  > The worker repeatedly sews white lace fabric with a sewing machine after trimming loose threads. — 原文提取

### [GR00T 2 Official Technical Release: Scaling World-Action Models on 402,000 Hours of Human Video with X-Adapt & Jetson Thor 2B Turbo](../../blogs/GR00T%202%20Official%20Technical%20Release_%20Scaling%20World-Action%20Models%20on%20402%2C000%20Hours%20of%20Human%20Video%20with%20X-Adapt%20%26.md)

2026-11-04 · 来源：NVIDIA GEAR Lab · GR00T 2 Technical Release · 状态：有来源缺口

[单篇导读（blogs/）](../../blogs/GR00T%202%20Official%20Technical%20Release_%20Scaling%20World-Action%20Models%20on%20402%2C000%20Hours%20of%20Human%20Video%20with%20X-Adapt%20%26.md) · [微信原件](../../../../raw/c6f1bcb6d99d80a10ee03de0b047c533b6a55b761aecc635d5dd8bdad433f654) · 固定版本 `digest-material-c6f1bcb6d99d80a10ee03de0b047c533b6a55b761aecc635d5dd8bdad433f654@1`

> 【信源巡检核心摘要】 NVIDIA GEAR Lab 在 CoRL 2026 正式上线下一代机器人基础模型 GR00T 2 官方技术页与白皮书（https://research.nvidia.com/labs/gear/gr00t-2/ ，代码栈关联 https://github.com/NVIDIA/Isaac-GR00T ）。

关联一手材料：

- GR00T 2 Official Technical Release: Scaling World-Action Models on 402,000 Hours of Human Video with X-Adapt & Jetson Thor 2B Turbo（NVIDIA GEAR Lab）· [原站](https://research.nvidia.com/labs/gear/gr00t-2/) · [本地原件](../../../../raw/c6f1bcb6d99d80a10ee03de0b047c533b6a55b761aecc635d5dd8bdad433f654) · 版本 `digest-material-c6f1bcb6d99d80a10ee03de0b047c533b6a55b761aecc635d5dd8bdad433f654@1`
  > 【信源巡检核心摘要】 NVIDIA GEAR Lab 在 CoRL 2026 正式上线下一代机器人基础模型 GR00T 2 官方技术页与白皮书（https://research.nvidia.com/labs/gear/gr00t-2/ ，代码栈关联 https://github.com/NVIDIA/Isaac-GR00T ）。 — 原文提取

### [GR00T N1 & N1.5: An Open Foundation Model for Generalist Humanoid Robots (arXiv:2503.14734)](../../blogs/GR00T%20N1%20%26%20N1.5_%20An%20Open%20Foundation%20Model%20for%20Generalist%20Humanoid%20Robots%20%28arXiv_2503.14734%29.md)

2026-06-15 · 来源：arXiv:2503.14734 · GR00T N1 & N1.5 · 状态：已整理

[单篇导读（blogs/）](../../blogs/GR00T%20N1%20%26%20N1.5_%20An%20Open%20Foundation%20Model%20for%20Generalist%20Humanoid%20Robots%20%28arXiv_2503.14734%29.md) · [微信原件](../../../../raw/c9a0741e776758e779354cc88a1fd8559e8046bff55f8b58cd12e7937629373e) · 固定版本 `digest-material-c9a0741e776758e779354cc88a1fd8559e8046bff55f8b58cd12e7937629373e@2`

> 【信源巡检核心摘要】 NVIDIA GEAR Lab 发布通用人形机器人开源基础模型 GR00T N1 与 N1.5 技术报告（https://arxiv.org/abs/2503.14734）及官方代码库 https://github.com/NVIDIA/Isaac-GR00T 与全身控制框架 https://github.com/NVlabs/GR00T-WholeBodyControl 。

关联一手材料：

- GR00T N1 & N1.5: An Open Foundation Model for Generalist Humanoid Robots (arXiv:2503.14734)（NVIDIA GEAR Lab）· [原站](https://arxiv.org/abs/2503.14734) · [本地原件](../../../../raw/c9a0741e776758e779354cc88a1fd8559e8046bff55f8b58cd12e7937629373e) · 版本 `digest-material-c9a0741e776758e779354cc88a1fd8559e8046bff55f8b58cd12e7937629373e@2`
  > 【信源巡检核心摘要】 NVIDIA GEAR Lab 发布通用人形机器人开源基础模型 GR00T N1 与 N1.5 技术报告（https://arxiv.org/abs/2503.14734）及官方代码库 https://github.com/NVIDIA/Isaac-GR00T 与全身控制框架 https://github.com/NVlabs/GR00T-WholeBodyControl 。 — 原文提取


## 3. 关联实体网络（Verified Entity Ontology）

- ← Cerebras Systems Inc. · 竞争 / 对标（rule_verified/verified）
- ← [光轮智能（Lightwheel）](../companies/%E5%85%89%E8%BD%AE%E6%99%BA%E8%83%BD%EF%BC%88Lightwheel%EF%BC%89.md) · 联合推进 Isaac Lab / RoboFinals 与 Newton 物理仿真生态（decision1_verified/verified）
- ← Zhiqi Li · 任职 / 隶属（rule_verified/verified）
- → Anthropic · 投资 / 领投 · \$10.0B [2026-11-17..至今]（rule_verified/verified）
- ← [NVIDIA Seattle Robotics Lab](../labs/NVIDIA%20Seattle%20Robotics%20Lab.md) · 任职 / 隶属 · Research Lab（rule_verified/verified）
- ← NVentures · 任职 / 隶属 · Corporate Venture Arm（rule_verified/verified）
- → Mercor · 投资 / 领投 · Series D [2026-11-10..至今]（rule_verified/verified）
- ← [Kaushil Kundalia](../people/Kaushil%20Kundalia.md) · 任职 / 隶属 · Early Member, GR00T Team（曾任） [已离任/曾任]（rule_verified/verified）
- → Cognition · 供应 / 服务（rule_verified/verified）
