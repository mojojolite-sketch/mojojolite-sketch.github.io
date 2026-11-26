---
title: "英伟达机器人负责人：Agent将加速机器人开发与部署 / 世界模型与动作模型终将融合 / 系统0—3需要端侧与云端协同"
type: blog_digest
sector: "具身智能"
source: "The Information · AI Deep Dive"
published_at: "2026-11-17"
raw_sha256: "18ec3f1264a5699ad42582981f779949281357bb770979557bda3c820a7fc571"
material_version: "digest-material-18ec3f1264a5699ad42582981f779949281357bb770979557bda3c820a7fc571@1"
origin_url: "https://www.youtube.com/watch?v=rarKwkLN-Bg"
trigger_source: "SourceMind"
trigger_url: "https://mp.weixin.qq.com/s/fBpcvSwuEr9-rzAO7oSY1w"
user_comments: "nv怎么这么多机器人团队这么多负责人，还有啥比较重要的负责人吗"
status: "processed_with_gaps"
primary_topic: "其他/独立议题"
secondary_topics: ["工业落地与商业模式", "模型与策略架构"]
topic_confidence: 0.3676
---

<a id="digest-18ec3f1264a5699a"></a>
# 英伟达机器人负责人：Agent将加速机器人开发与部署 / 世界模型与动作模型终将融合 / 系统0—3需要端侧与云端协同

2026-11-17 · The Information · AI Deep Dive · 有来源缺口

[本地原件归档](../../../raw/18ec3f1264a5699ad42582981f779949281357bb770979557bda3c820a7fc571) · 固定材料版本 `digest-material-18ec3f1264a5699ad42582981f779949281357bb770979557bda3c820a7fc571@1` · [一手原站](https://www.youtube.com/watch?v=rarKwkLN-Bg) · [触发线索（SourceMind）](https://mp.weixin.qq.com/s/fBpcvSwuEr9-rzAO7oSY1w)

> [!IMPORTANT]
> 用户关注点（TG）：nv怎么这么多机器人团队这么多负责人，还有啥比较重要的负责人吗

## 针对性追查与回应

## 一、直接回答：为什么 NVIDIA 有这么多机器人团队与负责人？

之所以外界常觉得英伟达“机器人负责人满天飞”，核心原因在于两点：==第一，NVIDIA 的“三台计算机”架构天然把机器人业务切成了三个完全不同 P&L 与考核口径的部门；第二，NVIDIA Research 由首席科学家 Bill Dally 统筹 400–500 名研究员，按实验室与高校合聘制并行赛马，而中文媒体常把所有实验室主任、产品总监和事业部 VP 笼统译作“英伟达机器人负责人”。==

以下为经本工作台联网核查的 2025–2026 年英伟达机器人与物理 AI 最新组织版图与核心人物清单：

| 层级与板块 | 核心负责人 | 核实头衔（2025–2026） | 核心职责与代表项目 | 与他组边界 |
| --- | --- | --- | --- | --- |
| 商业产品与端侧生态（P&L） | Deepu Talla | VP of Robotics and Edge AI | 统筹 Jetson（Orin/Thor）、Isaac 商业软件平台与 Metropolis，主抓开发者生态与边缘芯片出货 | 管商业战略与第三台计算机生态，不直接带基础算法实验室 |
| 商业产品与端侧生态（P&L） | Murali Gopalakrishna | GM of Robotics & Autonomous Machines | 主导工业制造生态落地（如联合 FANUC 推进产线物理 AI） | 偏工业客户与系统集成交付 |
| 商业产品与端侧生态（P&L） | Spencer Huang | Director of Product Management, Robotics | 统筹机器人软件栈产品化，打通 Isaac 仿真、合成数据与 GR00T 产品路线 | 负责科研成果向商用 SDK 转化 |
| 商业产品与端侧生态（P&L） | Amit Goel | Head of Robotics Ecosystem & Edge AI Product | 负责 Jetson 产品线管理、Isaac 全球开发者社区与物理 AI 安全架构 | 聚焦硬件产品定义与开发者运营 |
| 仿真与数字孪生平台底座 | Rev Lebaredian | VP of Omniverse and Simulation Technology | 统筹 Omniverse、OpenUSD 与 Mega 蓝图，掌管第二台计算机仿真底座与 Isaac Sim 协同 | 管通用 3D 物理仿真与工业数字孪生，服务机器人也服务工厂 |
| 软件与开源大模型底座 | Kari Briski | VP of Generative AI Software & Enterprise | 统筹企业级 AI 软件栈与 Nemotron 等开源模型工具链 | 支撑上层智能体与工厂推理软件接口 |
| Research · 具身基础模型 | Jim Fan (范麟熙) / Yuke Zhu (朱玉可) | GEAR Lab 联合负责人（Director & Distinguished Scientist） | 主导 Project GR00T（GR00T N1 / 1.7 / GR00T 2 WAM）、SONIC 全身控制与 RoboTTT | 主攻通用人形/跨本体基础模型与人类视频预训练 |
| Research · 世界基础模型 | Ming-Yu Liu (刘明宇) | VP of Research | 领衔 Deep Imagination 组与 Cosmos 世界基础模型（视频预测与物理因果仿真） | 为机器人和自动驾驶提供通用世界预测底座 |
| Research · 视觉感知与加速 | Jan Kautz | VP of Learning and Perception Research (LPR) | 领衔 LPR Lab，主攻多模态 VLM（Eagle/NVILA）、感知解码加速（VFlash）与视觉规划 | 偏视觉感知、VLM 与系统 1 推理加速 |
| Research · 西雅图机器人实验室 | Yashraj Narang / Ankur Handa / Fabio Ramos / Stan Birchfield | SRL 管理与核心首席科学家团队 | 主导 Isaac Lab、Newton 神经动力学、接触丰富灵巧操作与 Sim-to-Real | 聚焦底层物理仿真器、力控装配与控制算法 |
| Research · 自主系统规划 | Marco Pavone | ASPIRE 研究组负责人 | 统筹自动驾驶、四足与人形机器人的长视野闭环推理与规划 | 偏运动规划、导航与决策安全边界 |

==2025–2026 关键人事进出核实（防按旧名单误判）==：

1. Dieter Fox（已离任）：原 NVIDIA Seattle Robotics Lab（SRL）创始主任于 2025 年 7 月离开服务近 8 年的英伟达，转任 Allen Institute for AI (Ai2) Senior Research Director 统筹开源机器人基础模型（保留 UW 教职）；SRL 实验室目前由 Yashraj Narang 等资深管理与首席团队承接。
2. Sanja Fidler 与 Zan Gojcic（已离任）：原 NVIDIA 多伦多 Spatial Intelligence Lab 负责人 Sanja Fidler（VP of AI Research，主导 3D 空间智能）与苏黎世研究总监 Zan Gojcic（主导 NuRec 神经重建）已于 2026 年 8 月离职，联合创办物理 AI 世界模型初创公司 Veeda AI（种子轮融资 \$90M）。
3. 姓名排错核查：行业对话中偶被提及的 Gerard Medioni 经核实任职于 Amazon AI 与 USC，并非 NVIDIA 机器人线负责人。

---

## 二、口径与利益披露

本件原始出处为 The Information 视频栏目 AI Deep Dive（youtube.com/watch?v=rarKwkLN-Bg），主持人 Rocket Drew 于 2026-10-21 NVIDIA GTC Berlin 主题演讲结束后访谈 Deepu Talla（2026 年 11 月上线）；转述公众号 SourceMind 退居触发线索。==Deepu Talla 代表英伟达机器人与边缘 AI 商业线立场==：其核心诉求是把“三台计算机”（DGX 训练 + Omniverse/Isaac/Cosmos/Newton 仿真 + Jetson 运行时）确立为行业不可绕开的水电煤底座。因此他高度肯定 OpenAI 的 Astra 与 Physical Intelligence 的 API——哪怕上层智能体或推理云由外部研发，只要训练数据合成、物理验证与端侧执行留在英伟达工具链与芯片内，NVIDIA 都能收税。

---

## 三、访谈核心工程与商业判断拆解

### 1. 欧洲 Mittelstand 痛点与 Astra 带来的“两端 100 倍”加速

1. 欧洲与德国中小企业（Mittelstand）的真实约束：占全球 GDP 90%–95% 的中小企业属于高精密、小批量多品种制造，既无力像汽车巨头那样耗巨资人工编写硬编码轨迹，也拒绝自行采集数千小时微调数据；机器人进厂必须满足“客户数据准备与集成工作量接近零”且能像新员工一样通过一次示范启动后台自动重训。
2. 前端仿真资产与合成数据提速 100 倍：过去利用 CAD、Blender 或三维扫描构建可用数字孪生往往耗时数月；具备时空与物理规律理解的智能体 AI（以 OpenAI 2026 年 9 月推出的 Astra 为代表）仅靠几张照片、视频或检索现有 CAD 即可自动搭出仿真环境与数据变体。GTC Berlin 上黄仁勋演示的 4 台开源 Microduck 双足小鸭子机器人（Pollen Robotics / Hugging Face，AI 大脑跑在一台 RTX Spark 电脑上），从构想到用 Isaac Sim 与 Isaac Lab 评估并落地部署花费不到一周。
3. 后端老旧工厂集成胶水代码提速 100 倍：制造现场充斥运行二三十年的 PLC（专有编程语言）以及 ERP、供应链和楼宇管理系统，甚至许多仓库没有 Wi-Fi 仍依赖传真；让 LLM 智能体直接阅读散落手册编写接口胶水代码，可将部署集成效率再拉升 100 倍。

### 2. 物理世界的“四个 9”门槛与百米“10 秒关口”

1. 数字容错与物理零容错的鸿沟：消费级数字 AI 达到 90% 或 95% 准确率即可商用，因为有用户在环路中人工兜底剩余 5% 或 10%；娱乐演示如 Microduck 达到 98% 或 99% 即足够可爱；但工业产线无人值守要求 99.99% 起步，甚至六个 9 至八个 9。单次 100 倍进步也只是从 99% 迈向 99.99% 的一次阶跃。
2. “10 秒关口”商业化排序：Deepu Talla 以男子百米先跑进 10 秒拿奥运入场券、再冲 9.6/9.7 秒金牌来划分成熟度。自动驾驶（Waymo、Tesla 及与 Uber 对比的城市出行体验）凭借带推理能力的端到端模型与边缘场景仿真已跨过 10 秒关口；下一批逼近或跨过门槛的是工厂半结构化场景中由固定路线 AGV / UGV 升级而来的自主移动机器人 AMR，以及处理刚性物体的 6 自由度工业/协作机械臂（cobot，常见 5/10/20 公斤负载，用于装箱、分拣）。
3. 灵巧手与可变形体仍需物理仿真补课：真正创造最高价值的灵巧操作（如给机械臂装上 Tacta Systems 的 Tacta Hand 五指手）涉及柔软物体、接触力矩与非结构化环境，为此 NVIDIA 联合 Google DeepMind 与 Disney Research 基于 MuJoCo 推出 GPU 加速开源物理引擎 Newton，配合 Isaac Lab 进行力控策略评估。Talla 预计通用机器人跨过“无需逐场景单独训练、可完成数百至数千种任务”的 ChatGPT 时刻还需 1–3 年；商业落地将严格按五级顺位推进：准确率 → 可靠性 → 安全性 → 经济性 → 友好不吓人的交互（因此工业先行，家庭老年照护或低扭矩宠物陪伴机器人比 5 英尺 7–10 英寸 / 160 磅全尺寸人形更早进家）。

### 3. 模型架构演进：VLA/Cosmos 融合、系统 0–3 分层与 30 倍模型压缩

1. VLA 与世界模型走向 WAM 融合：从 2022 年 LLM、2023 年 VLM 到同时处理动作的 VLA（如开源前端 VLM + 后端动作模型的 GR00T 1.7），单靠动作输出仍无法预判“移动水瓶是否会滑落”。Cosmos 世界基础模型可同时扮演仿真器、物理状态预测器与失败变体生成器（把单次现场失败扩展为上千种仿真变体），正与动作模型整合为世界动作模型（WAM）。
2. 系统 0–3 端云四层算力分工：针对机身散热与功耗边界，Talla 将智能拆为四层——系统 0（约 1000 Hz、1–2 ms 反射，置入未来多达 100 个关节执行器，单手即含 20–25 个自由度）、系统 1（30–100 Hz 感知反应，必须留本体以满足无网环境、低延迟与隐私要求）、系统 2（数毫秒至数秒任务推理，可放本体或工厂本地小型集群）、系统 3（当系统 2 多次重试无解时，通过 API 向云端或本地超大专家模型“打电话向朋友求助”，如 Physical Intelligence 为 π0.5 推出的机器人 API 服务）。
3. 30 倍参数压缩追赶本体算力天花板：受体积与功耗所限，当下端侧 VLA 通常卡在 20 亿至 40 亿参数（2B–4B），难以直接塞入 200 亿或 300 亿参数大模型；但过去一年前沿 LLM 的智力密度已发生 30 倍压缩——去年 6 月需要万亿参数级别模型（Claude 5、Kimi K2、DeepSeek V4 等）才具备的能力，如今用 100 亿、200 亿、300 亿乃至 400 亿参数即可达到。借助教师-学生蒸馏与任务范围聚焦，未来 6–12 个月 100 亿以下乃至十亿级小模型将下沉至每一代算力翻数量级提升的 Jetson 本体，同时沿用芯片行业三十多年交由 TSMC（台积电）流片前“先做百万次仿真再真机交付”的闭环方法论。

---

## 四、原位核查与工作台推断

- ✅ 本工作台核查（GR00T 2 一手路线对账）：交叉核对库内已归档的 [GR00T 2 技术白皮书](GR00T%202%20Official%20Technical%20Release_%20Scaling%20World-Action%20Models%20on%20402%2C000%20Hours%20of%20Human%20Video%20with%20X-Adapt%20%26.md) 与 [VFlash 技术报告](%E8%8B%B1%E4%BC%9F%E8%BE%BE%20VFlash%EF%BC%9AJim%20Fan%E5%AE%A3%E5%91%8A%E2%80%9CSystem-1%E8%A7%86%E8%A7%89%E6%96%B0%E6%97%B6%E4%BB%A3%E2%80%9D%EF%BD%9C%E6%A8%A1%E5%9E%8B%E6%8F%90%E9%80%9F12%E5%80%8D.md)，GEAR Lab 发布的 GR00T 2 正是基于 Cosmos-Predict2.5-2B 演进的世界动作模型（WAM），其端侧版本 2B（20 亿参数）Turbo 在 Jetson Thor 上实测闭环延迟为 124 ms，并通过 Astra WAM API 承担高层视觉引导分离推理。这从工程实测侧面印证了 Deepu Talla 对“本体算力卡在 20 亿级别”及“WAM 融合 + API 求助”的判断并非空谈。
- ⚠️ 本工作台核查（100 倍提速的工程量纲边界）：需剥离营销语境中的分母漂移。第一，Microduck 演示从构想到部署不到一周，对应的是 98%–99% 容错率的开源双足玩具且核心计算外挂于 RTX Spark 笔记本；第二，Astra 在 Blender/CAD 建库与 PLC 胶水代码上实现的 100 倍加速主要解决“前期建场景与接口编码耗时”，正如 Talla 本人承认，它只把单次可靠度从 99% 推向 99.99%，距离工业无人产线所需的 6–8 个 9 仍差 2–4 个数量级，且软件智能体无法自动消除工厂现场 IT 审批、设备维护与接触力学失效（参考本库 [Kundalia 工程变量拆解](%E7%A6%BB%E5%BC%80%E8%8B%B1%E4%BC%9F%E8%BE%BE%E5%88%B0Dream%20Labs%E5%BD%93API%E8%B4%9F%E8%B4%A3%E4%BA%BA%E5%90%8E%EF%BC%8C%E4%BB%96%E5%8F%91%E7%8E%B0%E5%86%B3%E5%AE%9A%E6%9C%BA%E5%99%A8%E4%BA%BA%E8%83%BD%E5%8A%9B%E7%9A%84%E8%AF%B8%E5%A4%9A%E5%9B%A0%E7%B4%A0%E4%B8%AD%EF%BC%8C%E6%A8%A1%E5%9E%8B%E5%8F%AA%E5%8D%A0%E5%BE%88%E5%B0%8F%E4%B8%80%E9%83%A8%E5%88%86.md)）。
- ⚠️ 本工作台推断（NVIDIA 组织多头赛马与生态收税的潜在裂缝）：==本工作台推断英伟达“三台计算机”商业闭环能否如 Talla 设想通吃全行业，取决于两个隐性博弈==：一方面，NVIDIA 内部既有 Deepu Talla 商业生态线与 Jim Fan/Yuke Zhu 的 GR00T 开源路线协同，也面临 Sanja Fidler、Dieter Fox 等核心算法掌舵人陆续外流创办或领衔独立世界模型平台（Veeda AI、Ai2）的人才稀释压力；另一方面，当 OpenAI Astra 或 Physical Intelligence 通过通用云端/本地 API 直接接管系统 2 与系统 3 决策后，若竞争对手的端侧芯片在 20 亿–100 亿参数小模型推理性价比上逼近 Jetson，NVIDIA 必须证明 Newton + Isaac Sim + Cosmos 在物理真实度（而非仅 CAD 建模便利性）上具有不可替代的 Sim-to-Real 锁定力。

### 观点与可反驳条件

- ==观点==：==英伟达在机器人领域的“多负责人表象”本质是 P&L 生态与多路基础科研赛马的制度设计，其在物理 AI 中的真正护城河已从早期“单纯卖端侧 Jetson 芯片”上移为“用 Isaac/Newton/Cosmos 绑定系统 2/3 上游智能体并下沉至 20 亿级端侧小模型闭环”；而 Astra 类智能体对前端资产与集成的百倍加速只打通了“部署前准备”，决定商业爆发的真门槛仍是工业接触场景跨越 99.99% 可靠性的真机数据闭环==。
- ==推翻条件==：
  1. ① 若 2028 年底前，OpenAI、Physical Intelligence 或头部具身公司在无重度依赖 NVIDIA Omniverse/Isaac Sim/Newton 物理仿真的条件下（例如主要依托真实工业视频微调或自研轻量仿真器），在至少 3 个细分制造/物流场景实现连续运行 99.99% 成功率与规模化商业续约，且端侧推理明显脱离 Jetson 转向替代算力，则“英伟达凭借中间层仿真基础设施锁定物理 AI 全栈价值”的判断将被推翻。
  2. ② 若至 2027 年底，以中小制造企业（Mittelstand）为主体的协作机械臂与人形机器人商业交付仍普遍需要单产线超过 4 周现场人工示教与定制集成（未能因智能体生成 CAD 与 PLC 代码而压缩至 1 周以内），且实测无故障率持续滞留 99% 以下，则“100 倍智能体工具链加速将在 1–3 年内引爆通用机器人 ChatGPT 时刻”的乐观预期将被证伪。

---

## 原文摘录与一手信源存证

> 而现在，像 Astra 这样的智能体 AI，经过针对物理世界的训练，对世界的物理规律有了不错的理解，也能很好地理解空间与时间的关系，也就是时空关系。因此，它能够研究物体的属性，上网找到可能已有的 CAD 模型，或者利用图片和视频。你并不一定要做一次完整、精确的三维扫描，只要拍一些照片和视频，它就能构建这些环境。 也就是说，过去要耗费几个月才能生成的合成素材和环境，现在一下子提速了 100 倍。
> — 原文摘录，文字段落 1；证据 `digest-material-18ec3f1264a5699ad42582981f779949281357bb770979557bda3c820a7fc571-excerpt-1@2`

> Microduck 这种情况，我觉得 99%，甚至 98%，可能就可以接受。你让它翻个跟头，它大致做出来了，毕竟它很可爱嘛。 但你说得完全对。如果是工业机器人，要执行极其重要的任务，准确率就必须非常高，比如 99.99% 这样的水平。
> — 原文摘录，文字段落 2；证据 `digest-material-18ec3f1264a5699ad42582981f779949281357bb770979557bda3c820a7fc571-excerpt-2@2`

一手材料：

- The Information AI Deep Dive: Deepu Talla (NVIDIA VP of Robotics & Edge AI) on OpenAI Astra, WAMs & System 0-3 · The Information · AI Deep Dive · [原站](https://www.youtube.com/watch?v=rarKwkLN-Bg) · [主体档案：NVIDIA](../entities/companies/NVIDIA.md) / [主体档案：The Information](../entities/labs/The%20Information.md) / [主体档案：Deepu Talla](../entities/people/Deepu%20Talla.md) · [本地原件](../../../raw/0d4741483831eaeaaaa7524e17079bfde7652a2e2fa6b67a7f8de55711e0bd38)
  材料版本 `digest-material-0d4741483831eaeaaaa7524e17079bfde7652a2e2fa6b67a7f8de55711e0bd38@1`；获取方式 `web_search_verified_primary`。
  > The Information · AI Deep Dive — Interview with Deepu Talla (VP of Robotics & Edge AI, NVIDIA) Primary Source Video URL: https://www.youtube.com/watch?v=rarKwkLN-Bg Channel: The Information (TITV / AI Deep Dive) — — 原文提取
  > Berlin 2026 Microduck demo (four 25 cm, 15-motor bipedal robots controlled via RTX Spark PC, trained with Isaac Sim / Isaac Lab / Newton): built from concept to deployment in under one week via agentic workflows. 2. Industrial — 原文提取

归属与范围：已穿透至 The Information AI Deep Dive 原视频（YouTube watch?v=rarKwkLN-Bg，主持人 Rocket Drew，受访人 Deepu Talla，2026-10-21 GTC Berlin 主题演讲后于 2026 年 11 月发布），并结合网络取证核实 2025-2026 年英伟达机器人与物理 AI 商业线、仿真底座及 Research 各实验室最新负责人与离任动态；中文转述公号 SourceMind 降级为 trigger\_source。

来源缺口：

- `unavailable`：YouTube 原视频（https://www.youtube.com/watch?v=rarKwkLN-Bg）未在本地提取英文逐字音轨字幕，仅完成 The Information 官方栏目报道、主持人 Rocket Drew 及 GTC Berlin 2026（2026-10-21）公开事实交叉核验；详细对话以触发稿件全本留存。 [线索](https://www.youtube.com/watch?v=rarKwkLN-Bg)
- `not_disclosed`：Deepu Talla 所称的 Astra 资产与胶水代码提速 100 倍、未来一至三年到达通用机器人 ChatGPT 时刻，以及 6–12 个月百亿参数以下端侧蒸馏预期，均缺乏独立基准任务分母与可审计产线对照实验数据。 [线索](https://www.youtube.com/watch?v=rarKwkLN-Bg)

[返回赛道总览](../赛道总览.md#digest-18ec3f1264a5699a) · [返回导读索引](README.md) · [主体档案库](../entities/README.md)
