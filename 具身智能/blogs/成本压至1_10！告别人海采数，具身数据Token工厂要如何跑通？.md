---
title: "成本压至1/10！告别人海采数，具身数据Token工厂要如何跑通？"
type: blog_digest
sector: "具身智能"
source: "InSpatio (影溯) & arXiv (cs.CV)"
published_at: "2026-11-02"
raw_sha256: "a8da6d726b085704925d10e26163961ac81e961fe062be0ba5972ea9281dfb91"
material_version: "digest-material-a8da6d726b085704925d10e26163961ac81e961fe062be0ba5972ea9281dfb91@1"
origin_url: "https://www.inspatio.com/blog/introducing-topos"
trigger_source: "智东西"
trigger_url: ""
user_comments: ""
status: "processed_with_gaps"
primary_topic: "数据采集与数据基建"
topic_confidence: 0.9549
---

<a id="digest-a8da6d726b085704"></a>
# 成本压至1/10！告别人海采数，具身数据Token工厂要如何跑通？

2026-11-02 · InSpatio (影溯) & arXiv (cs.CV) · 有来源缺口

[本地原件归档](../../../raw/a8da6d726b085704925d10e26163961ac81e961fe062be0ba5972ea9281dfb91) · 固定材料版本 `digest-material-a8da6d726b085704925d10e26163961ac81e961fe062be0ba5972ea9281dfb91@1` · [一手原站](https://www.inspatio.com/blog/introducing-topos)

## 深度拆解与复核

- ==核心结论==：空间智能公司 [InSpatio](../entities/companies/InSpatio%20%28%E5%BD%B1%E6%BA%AF%29.md)（影溯）试图绕开「纯 3D 美术手动建模高耗时」与「互联网无 3D 物理交互存量」的僵局，通过前馈 3DGS（QuerySplat）+ 实时帧生成（InSpatio-WorldFM）+ 对象级场景拆分器（Topos），搭建所谓将实景视频、多图或 LiDAR 批量转变为可碰撞具身场景的「Token 工厂」. 然而对照本轮抓回的 InSpatio 两篇完整 arXiv 论文原文与官网披露可见：==其真实科研产出专注「视觉新视角合成与几何重建」，并不包含物理接触力学标定（刚体/柔体弹性、摩擦阻尼系数与惯量实测拟合），论文甚至直白承认 WorldFM 存在「动态内容弱、运动边界受限、帧间连续交互闪烁（jitter）」三项硬缺陷；而微信报道宣称的「单月产 100 万小时仿真数据、成本压至传统真机遥操作 1/10」以及 L1/L2/L3 交付基准与 15 分钟重建指标，截至本轮核查在 InSpatio 官方及公开论文中均无任何实测验收数据背书==.

#### 一、口径与利益披露及「Topos + WorldFM + QuerySplat」全栈架构

- 口径与利益披露：触发来稿为公众号「智东西」2026-11-02 发布的杭州具身仿真数采中心落地报道，背景依托大语言模型吃光互联网文本与特斯拉依靠车端影子模式（Shadow Mode）采集百万车真实数据、对比行业过去两年真机加第一视角（EGO）累计仅数百万小时数据及调用如 GPT-6 Astra 驱动 Blender 反复渲染建模成本过高的痛点. 影溯此举商业意图明确：以「1/10 成本月产百万小时物理 Token 工厂」建立商业订单与政企数采中心标杆形象.
- 官方一手技术栈真实版图：
  - 创始团队血统（about 页面核实）：创始人章国锋（Guofeng Zhang，浙江大学 CAD&CG 国家重点实验室教授、前商汤科技首席科学家、SenseMARS 混合现实平台负责人）与联合创始人刘浩敏（Haomin Liu，浙大博士、前商汤科技研究总监、移动端 SLAM 先驱及商汤 3D 基础模型 StarGen 负责人），核心工程师集聚浙大 CAD&CG 与商汤 3D 团队，决定其底层基因长于空间计算与 3D 视觉渲染，而非机器人动力学控制.
  - 三项已开源/可验证核心引擎：
    - InSpatio-WorldFM（2026-03-04 发布 / arXiv:2603.11911v3）：抛弃自回归视频窗慢生成范式，采用实时生成式单帧模型加两步 DMD 蒸馏（t_mid = 200），在 512x512 分辨率下于 H 系列 GPU 跑出 25 FPS、RTX 4090 跑出 10 FPS 实时空间推理.
    - QuerySplat（2026-08-02 发布 / arXiv:2608.01186v1，联合北航与浙大 CAD&CG）：前馈式无位姿（pose-free）非像素对齐 3D 高斯泼溅框架，构建于 VGGT-Omega 基座之上并将几何先验与外观解耦，在 DL3DV 基准上较最优无位姿方法提高 +2.30 dB PSNR（较有位姿方法提高 +1.04 dB）；H200 上 4 视角前向重建仅耗时 0.949 秒、显存峰值 9.436 GiB（增至 300 视角时耗时 255.725 秒、显存 40.773 GiB）.
    - InSpatio-World 1.5 与 Topos（2026-06-18 宣布 Beta）：World 1.0 基座参数规模 1.3B（24 FPS 实时探索，曾列 2026-07-09 WorldScore-Dynamic 实时向榜单第一）；Topos 瞄准把单图、多图、视频、LiDAR、无人机航拍自动转成对象级分割、几何对齐并可挂载基础物理碰撞属性的可编辑世界.

#### 二、核心数据核查、口径纠偏与工程边界

- ❌ 「100 万小时/月、1/10 成本、15 分钟重建」商业宣传无一手白皮书或客户验证（本工作台核查）：本轮通检 InSpatio 中英文官网主站、Research & Insights、Topos 博客及开源页（topos-lite），==完全未见「10 月 30 日杭州数采中心」「单月 100 万小时仿真产量」「真机 1/10 单条综合成本」「15 分钟完成扫描、数小时生成 L1/L2/L3 级别场景」等核心商业宣称的公开文档或客户测算口径==. 当把物理动作空间里的单一视频轨迹在未校验材质属性的 3DGS 空间里批处理随机化扩展上百万倍时，其产物在数量上虽为「百万小时视频/仿真」，但究竟属于真实力学有效 Token 还是视觉背景增强样本，缺少可比基准验证.
- ✅ 论文原文 §4.1 亲承三大局限揭开视觉世界模型的 Real2Sim Gap 真相（本工作台核查）：抓取 arXiv:2603.11911v3 全文第 4.1 节 Limitations，作者团队主动列出了 InSpatio-WorldFM 目前无法掩盖的三大瓶颈——（1）受限于框架与多视角一致性训练样本匮乏，动态物体内容生成质量与稳定性偏弱（weak dynamic content）；（2）历史空间记忆强依赖离线高算力全景或多视角先验，在线交互推理必然产生狭窄运动边界（limited motion boundary）；（3）单帧逐生成架构因缺少跨连续帧的时序强约束，交互过程出现肉眼可见帧间抖动（noticeable frame jitter）. 更关键的是，QuerySplat（0.949 s 建出视觉与静态高斯几何）解决的是「房间和桌椅长什么样」，并不能直接给出桌面静摩擦系数、瓶中液体晃动刚度或铰链阻尼矩阵——在无真实力触测验闭合情况下强行缩小视觉 Real2Sim Gap，反而可能放大动力学接触偏差.
- ⚠️ 学术计算资源扩张曲线暴露大规模复杂现场的算力吞吐上限（本工作台推算）：QuerySplat 表 14 实测数据显示，随着输入稀疏相机视角从 4 张增至 300 张（对应大仓或复杂公寓完整扫描级别），H200 单 GPU 推理耗时从 0.949 秒非线性暴增至 255.725 秒（约 4.3 分钟），峰值显存逼近 40.773 GiB，若进一步叠加 TTO20 / TTO50 测试时优化还将成倍延长耗时；若还需给每个分离出的实体挂载刚体/柔体碰撞网格与动力学解算并行跑满百万小时月产，后端 GPU 算力消耗绝非微信稿轻描淡写的纯低成本流水线.

#### 三、赛道横向对比与定位

| 对照公司 | 核心路线与主攻环节 | 一手公开技术与物理仿真可信度 | 商业抓地力与最大技术瓶颈 |
| :--- | :--- | :--- | :--- |
| [InSpatio](../entities/companies/InSpatio%20%28%E5%BD%B1%E6%BA%AF%29.md)（影溯） | 无位姿前馈 3DGS（QuerySplat）+ 实时帧渲染（WorldFM）+ Topos 对象拆分 | 两篇公开 arXiv（+2.30 dB PSNR / 25 FPS），但 3DGS 与帧生成均缺物理接触动力学标定数据 | 强 3D 视觉出身，杭州数采百万小时及 1/10 成本尚未经公开数据/审计验证，具帧间 jitter 与弱动态短板 |
| [光轮智能（Lightwheel）](../entities/companies/光轮智能（Lightwheel）.md) | 物理优先 SimReady 资产库 + 物理实验室实测校准 + Newton 柔体引擎对接 | 自建实验室真实测算材质密度、刚度与可微摩擦，将真机校准耦合回仿真资产树 | 已被头部机器人厂作为真机合规仿真供给源采纳；相对纯视觉重建资产生产人工精修更重、单资产周期更长 |
| [World Labs](../entities/companies/World%20Labs.md) | 空间生成大模型与交互 3D 环境（Marble） | 聚焦消费内容、设计工具与大尺度一致空间生成，谨慎克制向工业精密力学做单步跨界声明 | 高估值空间生成龙头，商业转化侧重空间内容引擎而非直接兜售百万小时机器人操作合规仿真 |
| [Machenta](./Machenta%20即时机器人学习%20VDA%20架构与实测基准复核：0%20真实像素预训练，单次示范成功率%2098%25–100%25.md) | 0 真实像素纯程序化域随机化合成仿真训练，单次示范微调部署 | 直接公开了 VDA 在真机灵巧操作基准下的 98%–100% 单次示范执行表现，跳过「伪真景 3DGS」 | 无需实景扫描，直接用物理引擎保证接触几何与域泛化；挑战在于复杂长程开放世界泛化仍需真实语义 |

从本质看，光轮智能走「先把每个物体的力学属性与 Newton 物理引擎校准好再缩放资产数量」的重工业路径，Machenta 走「抛开逼真视觉像素直接用程序化刚/柔体接触碰撞做真机闭路泛化」，而 InSpatio 试图以视觉重建算法（3DGS/帧扩散）逆向攻入机器人仿真数采赛道. 如果仅提供房间级静态几何漫游背景，它对移动导航（VLN）确实大幅降低了布景成本；但若用来支撑灵巧手操作策略预训练，未经物理测定的视觉网格数量级扩张只会形成系统性动力学失真放大器.

### 观点与可反驳条件

- ==观点==：==InSpatio（影溯）凭借浙大 CAD&CG 与商汤 StarGen 背景在无位姿 3DGS（QuerySplat）与实时生成帧（WorldFM）领域交付了扎实的可复现学术基准，但将「视觉 3D 重建」等同于「真机等效具身 Token 工厂」存在根本物理维度跨越==；在论文已公开承认动态内容弱、帧间闪烁与缺乏接触力/惯量真实校准的当下，「月产 100 万小时仿真、1/10 成本」尚停留在未见白皮书与下游真机消融验证的商业口号阶段，仅靠放视觉环境规模无法替代物理交互训练的真实含金量.
- ==推翻条件==：
  1. ① 若 InSpatio 在 2027 年上半年公开发布 Topos 物理标定白皮书与可复现评测集，证明完全基于 Topos 重建场景训练的灵巧操作策略，在外部权威第三方未见物体物理操作真机实验中超越基于传统真机遥操作（在等量 GPU 训练算力预算下），且成功率跃升超 20 个百分点，则「视觉重建为主线的具身仿真可有效弥合力学 Real2Sim Gap」得以成立.
  2. ② 若杭州数采中心至 2027 年披露经 3 家以上公开具名机器人本体厂商采购并签署长期商用数据验收单据，实测证明其仿真衍生数据的真机迁移采纳率可稳定抵消至少 70% 的实体遥操开支，且单条综合账单确落于真实遥操十分之一区间内，则其「具身 Token 工厂」商业持续留存与单位经济模型将获实证确认.
  3. ③ 若 WorldFM 后续迭代版本通过引入显式时序强约束与统一隐式可微物理模拟器，彻底消除 Section 4.1 所列举的动态场景失稳与交互帧抖动，并在大尺度多视角场景下（300+ 视角）维持 10 秒级以内重建速度，则当前工程吞吐与物理表征边界需大幅上修.

---

## 原文摘录与一手信源存证

> 大语言模型可以直接利用互联网上积累多年的网页和代码数据，通过持续训练提升模型能力；自动驾驶企业则可以依靠量产车辆的影子模式（Shadow Mode），从真实道路中持续收集行驶数据和人工接管记录。
> — 原文摘录，PDF p.1；证据 `digest-material-a8da6d726b085704925d10e26163961ac81e961fe062be0ba5972ea9281dfb91-excerpt-1@1`

> 以特斯拉为例，其通过全球数百万辆量产车，将数据采集融入日常驾驶过程，不需要额外组织大规模人工采集。
> — 原文摘录，PDF p.1；证据 `digest-material-a8da6d726b085704925d10e26163961ac81e961fe062be0ba5972ea9281dfb91-excerpt-2@1`

> 过去两年，行业主要依靠真机遥操作和第一视角（EGO）可穿戴设备采集数据，累计获得的真机有效数据和EGO数据也只有数百万小时。对于已经投入大量资金的机器人公司和大模型企业来说，想要获得足够规模的高质量训练数据，依然不容易。
> — 原文摘录，PDF p.1；证据 `digest-material-a8da6d726b085704925d10e26163961ac81e961fe062be0ba5972ea9281dfb91-excerpt-3@1`

一手材料：

- InSpatio · InSpatio · [原站](https://www.inspatio.com/) · [主体档案：InSpatio (影溯)](../entities/companies/InSpatio%20%28%E5%BD%B1%E6%BA%AF%29.md) · [NotebookLM](https://notebook.google.com/notebook/cac99041-d3b9-449e-a192-12bb4b1ad391) · [Drive](https://drive.google.com/file/d/1z3ZXkMVdRzlsjkyy1GfjwZW6S0kH5gT7/view?usp=drivesdk)
  材料版本 `digest-material-ba1b4dfd51ba94af254094afa912cd69d1b21db2faf449fb656993169d547a32@2`；获取方式 `http_full_text`。
  > 一种开源实时生成帧模型，在消费级GPU上提供多视角一致的空间推理能力，将高性能世界模型从数据中心带到边缘设备。 — 原文提取
- Topos: Turning Every Space into an Interactive, Simulatable 3D World · InSpatio · [原站](https://www.inspatio.com/blog/introducing-topos) · [主体档案：InSpatio (影溯)](../entities/companies/InSpatio%20%28%E5%BD%B1%E6%BA%AF%29.md) · [本地原件](../../../raw/d9dc9ace06a5cad6550bb6cb368a299b866a9458f00d2ff0d9d78e0f704fbc6e)
  材料版本 `digest-material-d9dc9ace06a5cad6550bb6cb368a299b866a9458f00d2ff0d9d78e0f704fbc6e@1`；获取方式 `http_full_text`。
  > 我们认为，下一代世界生成模型不应该只生成视觉上好看的空间。真正有用的 3D 世界需要具备更完整的结构理解： 它应当知道场景里有哪些物体，物体如何与空间对齐，它们可以如何被编辑、交互，并最终如何在仿真环境中运行。 — 原文提取
  > Topos 正是围绕这一目标构建。它能够基于多种参考输入生成大规模 3D 环境，并进一步将场景拆解为可理解、 可编辑、支持物理属性赋予的对象级结构。 — 原文提取
- About InSpatio | Spatial Intelligence Team · InSpatio · [原站](https://www.inspatio.com/about) · [主体档案：InSpatio (影溯)](../entities/companies/InSpatio%20%28%E5%BD%B1%E6%BA%AF%29.md) · [本地原件](../../../raw/2973565d0f0447d89e39ec1a6f872c60eeac1ec721435ea1c7f623832018e35c)
  材料版本 `digest-material-2973565d0f0447d89e39ec1a6f872c60eeac1ec721435ea1c7f623832018e35c@1`；获取方式 `http_full_text`。
  > Why are 3D world models so rare while 2D models proliferate? — 原文提取
  > Building 3D world models requires a convergence of Generative AI, Infrastructure, Diffusion Models, Computer Graphics, and 3D Vision. Finding world-class talent across all these orthogonal disciplines is incredibly difficult. — 原文提取
- InSpatio-WorldFM: An Open-Source Real-Time Generative Frame Model (arXiv:2603.11911v3) · InSpatio Research (arXiv) · [原站](https://arxiv.org/abs/2603.11911) · [主体档案：InSpatio (影溯)](../entities/companies/InSpatio%20%28%E5%BD%B1%E6%BA%AF%29.md) / [主体档案：arXiv (cs.CV)](../entities/companies/arXiv%20%28cs.CV%29.md) · [本地原件](../../../raw/074aea9945376a48b765cad89bf950ce2c2c750b4ad77872df51037ed265ef4c)
  材料版本 `digest-material-074aea9945376a48b765cad89bf950ce2c2c750b4ad77872df51037ed265ef4c@1`；获取方式 `http_full_text`。
  > We present InSpatio-WorldFM, an open-source real-time frame model for spatial intelligence. — 原文提取
  > Examples of generated worlds across diverse styles, including photorealistic, science-fiction, game-like, and artistic environments. The joystick interface enables real-time interactive exploration with negligible latency. — 原文提取
- QuerySplat: Decoupling Geometry and Appearance Representations in 3DGS Prediction (arXiv:2608.01186v1) · InSpatio Research & Beihang / ZJU (arXiv) · [原站](https://arxiv.org/abs/2608.01186) · [主体档案：InSpatio (影溯)](../entities/companies/InSpatio%20%28%E5%BD%B1%E6%BA%AF%29.md) / [主体档案：arXiv (cs.CV)](../entities/companies/arXiv%20%28cs.CV%29.md) · [本地原件](../../../raw/ee06ff5600d77ae51c1aaa64522a914d790a73619d8c8261a958a175616cb362)
  材料版本 `digest-material-ee06ff5600d77ae51c1aaa64522a914d790a73619d8c8261a958a175616cb362@1`；获取方式 `http_full_text`。
  > In-the-wild comparison with a pose-required query model. — 原文提取
  > While feed-forward 3D Gaussian Splatting (3DGS) enables efficient 3D reconstruction, achieving high-fidelity rendering remains challenging. — 原文提取
- InSpatio-World 1.5: From Next-View Prediction to Spatial Intelligence · InSpatio · [原站](https://www.inspatio.com/models/world) · [主体档案：InSpatio (影溯)](../entities/companies/InSpatio%20%28%E5%BD%B1%E6%BA%AF%29.md) · [本地原件](../../../raw/89fa97d9644b254aabb92de83d45fb91ee2ec48eea8ef83e45289469203f3b81)
  材料版本 `digest-material-89fa97d9644b254aabb92de83d45fb91ee2ec48eea8ef83e45289469203f3b81@1`；获取方式 `http_full_text`。
  > Predict the next novel view from a single image, image set, panorama, or video, and explore wider, more consistent scenes across space and time. — 原文提取
  > InSpatio-World 1.5 accepts a single image, an image set, a panorama, or a video, opening more ways to explore scenes across space and time. — 原文提取
- InSpatio Topos-Lite & Open Research Portal · InSpatio · [原站](https://topos-lite.inspatio.com/opensource.html) · [主体档案：InSpatio (影溯)](../entities/companies/InSpatio%20%28%E5%BD%B1%E6%BA%AF%29.md) · [本地原件](../../../raw/cc628cf2d290d294cc5e3f4ce7a69a2abeb2c42488020f0c3770d09941c066a5)
  材料版本 `digest-material-cc628cf2d290d294cc5e3f4ce7a69a2abeb2c42488020f0c3770d09941c066a5@1`；获取方式 `http_full_text`。
  > QuerySplat 是由几何先验驱动、显式解耦外观的前馈式 3D Gaussian Splatting 框架，从少量未标定照片直接预测清晰、稳定的三维表示。 — 原文提取
  > 共享输入理解，分别预测几何属性与外观细节，再组合成可实时渲染的 3D Gaussian 表示。模型减少结构冗余，也缓解早期 query-based 方法常见的模糊与视角依赖问题。 — 原文提取

归属与范围：保留原有官网主页，并补充抓取 6 份 InSpatio 官方与 arXiv 一手全文：《Topos 公告》（2026-06-18）、《关于团队》（核实章国锋及刘浩敏履历）、《InSpatio-WorldFM》（官网及 arXiv:2603.11911v3 全文，提取 25 FPS / 10 FPS 及 §4.1 三项自认局限）、《QuerySplat》（官网及 arXiv:2608.01186v1 全文，提取 +2.30 dB PSNR 与 0.949 s→255.725 s 算力扩张曲线）、《InSpatio-World 1.5》与《Topos 开源页》。明确标记未核验/未披露项：10 月 30 日杭州数采中心月产 100 万小时仿真数据、成本压至 1/10、15 分钟扫描建模与 L1/L2/L3 交付分级在 InSpatio 官网及学术论文中均无一手技术文档与下游真机成功率对比。

来源缺口：

- `not_disclosed`：InSpatio 官网及公开 arXiv 论文均未披露 10 月 30 日杭州具身仿真数采中心的建设实况、“单月产 100 万小时、综合成本 1/10”、“15 分钟完成扫描/数小时建模”及 L1/L2/L3 分级验收细则，亦无下游本体厂商采购与真机迁移成功率对比实验。
- `pending_verification`：Topos 官网目前仅停留在对象分割与基本碰撞属性规划阶段，缺乏物体材质摩擦系数、可变形阻尼与关节惯量校准的公开物理验证报告，且 WorldFM §4.1 明确承认存在动态弱、运动边界与帧抖动限制，与“高保真可交互具身 Token 工厂”叙事尚有明显代差。

[返回赛道总览](../赛道总览.md#digest-a8da6d726b085704) · [返回导读索引](README.md) · [主体档案库](../entities/README.md)
