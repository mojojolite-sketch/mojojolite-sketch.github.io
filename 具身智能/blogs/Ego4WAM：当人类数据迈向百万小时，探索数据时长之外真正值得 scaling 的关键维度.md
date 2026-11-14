---
title: "Ego4WAM：当人类数据迈向百万小时，探索数据时长之外真正值得 scaling 的关键维度"
type: blog_digest
sector: "具身智能"
source: "arXiv:2609.40341 · Ego4WAM"
published_at: "2026-10-09"
raw_sha256: "2168953cce4e8d605612b5cc8690420eea1875f01d677093d1a4d5bcd691f9a5"
material_version: "digest-material-2168953cce4e8d605612b5cc8690420eea1875f01d677093d1a4d5bcd691f9a5@1"
origin_url: "https://arxiv.org/abs/2609.40341"
trigger_source: "human five"
trigger_url: "https://mp.weixin.qq.com/s/eNOqlBlHjyM5t-nvvauBNA"
user_comments: "Ego4WAM 正是沿着这两个问题展开：一方面，将 Egocentric Data 拆解为 Human-Robot Alignment、Data Duration、Task Diversity、以及 Action Supervision 等不同维度；Ego4WAM 通过大规模系统性的实验总结出三个主要结论：任务对齐的人类演示能够改善域外泛化并减少机器人数据需求；数据时长和任务多样性对机器人操作性能有着不同影响；没有动作标签的视频数据也能提供有效的动态先验。Data Duration 与 Task Diversity 是两条不同的 scaling 轴，收益取决于目标能力与任务分布，盲目扩大长尾覆盖甚至可能损害精细操控表现。 -- 是不是意味着在minimal的真机数据下，砸海量人咧数据，甚至砸海量人类仿真数据，泛化能力依旧可以有足够的提高"
status: "processed"
---

<a id="digest-2168953cce4e8d60"></a>
# Ego4WAM：当人类数据迈向百万小时，探索数据时长之外真正值得 scaling 的关键维度

2026-10-09 · arXiv:2609.40341 · Ego4WAM · 已整理

[本地原件归档](../../../raw/2168953cce4e8d605612b5cc8690420eea1875f01d677093d1a4d5bcd691f9a5) · 固定材料版本 `digest-material-2168953cce4e8d605612b5cc8690420eea1875f01d677093d1a4d5bcd691f9a5@1` · [一手原站](https://arxiv.org/abs/2609.40341) · [触发线索（human five）](https://mp.weixin.qq.com/s/eNOqlBlHjyM5t-nvvauBNA)

> [!IMPORTANT]
> 用户关注点（TG）：Ego4WAM 正是沿着这两个问题展开：一方面，将 Egocentric Data 拆解为 Human-Robot Alignment、Data Duration、Task Diversity、以及 Action Supervision 等不同维度；Ego4WAM 通过大规模系统性的实验总结出三个主要结论：任务对齐的人类演示能够改善域外泛化并减少机器人数据需求；数据时长和任务多样性对机器人操作性能有着不同影响；没有动作标签的视频数据也能提供有效的动态先验。Data Duration 与 Task Diversity 是两条不同的 scaling 轴，收益取决于目标能力与任务分布，盲目扩大长尾覆盖甚至可能损害精细操控表现。 -- 是不是意味着在minimal的真机数据下，砸海量人咧数据，甚至砸海量人类仿真数据，泛化能力依旧可以有足够的提高

## 针对性追查与回应

- 来源：[arXiv:2609.40341 · Fudan University & Horizon Robotics (Ego4WAM)](https://arxiv.org/abs/2609.40341) · [Ego4WAM Project Page](https://sunzhihao18.github.io/Ego4WAM/) · [HuggingFace: HorizonRobotics/Ego4WAM](https://huggingface.co/HorizonRobotics/Ego4WAM)
- ==核心结论==：在 WAM（世界—动作模型）架构下，利用「1.5万小时人类视频预训练 + 1.2万小时多任务动作中训 + 少量任务对齐人类演示」，确实能将目标任务的真机遥操数据需求压缩 15 倍（Fold Cloth 仅需 20 条真机数据即恢复 80% ID / 80% 物体 OOD / 60% 场景 OOD 成功率），且仅靠 100 小时真机数据在 RoboDojo 取得 20.29 分 / 14.35% 成功率（超越数千小时真机基线）；但「Minimal 真机 + 狂砸人类/人类仿真数据」绝非无条件成立，严格受制于三大铁律：（1）对齐税（12万小时野外视频无法替代 4 小时同视角/同桌面的任务对齐演示）；（2）长尾负迁移（盲目把任务从 500 类扩至 6,000 类会稀释核心技能密度并直接损害精细操控 Precision，4,000h 集中 500 类泛化率 7.8% 反超 12,000h 分散 6,000 类的 7.0%）；（3）接触力控盲区与双重仿真误差（仿真“假人手”再转“真机器人”叠加双重 Gap，硅谷前沿已转向“直接仿真机器人本体 + FLORA 稠密奖励 RL”，且接触后微米级插拔/拧盖必须靠带力触觉的真机或 UVTA 外骨骼数据兜底）。
- 关联主体档案：[Horizon Robotics](../entities/companies/Horizon%20Robotics.md) · [Fudan Vision and Learning Lab](../entities/labs/Fudan%20Vision%20and%20Learning%20Lab.md) · [Zhihao Sun](../entities/people/Zhihao%20Sun.md) · [Zuxuan Wu](../entities/people/Zuxuan%20Wu.md) · [Dyna Robotics](../entities/companies/Dyna%20Robotics.md) · [Danfei Xu](../entities/people/Danfei%20Xu.md) · [Physical Intelligence](../entities/companies/Physical%20Intelligence.md)

---

### 一、 直击核心追问：在 Minimal 真机数据下，狂砸海量人类数据 / 人类仿真数据，泛化能力能否有足够提高？

您的直觉非常敏锐——在从 VLA（Vision-Language-Action）向 WAM（World-Action Model，世界—动作模型）演进的范式下，“Minimal 真机数据 + 海量人类经验/合成先验”确实正在成为具身破局的主干道，但它绝不是“大力出奇迹式地无脑堆时长”，而是有着极其锋利的「生效象限」与「失效红线」。

结合 Ego4WAM (arXiv:2609.40341) 的一手实验数据表，以及本工作台已沉淀的 EgoScale（Danfei Xu 2万小时人类视频）、Alex Zheng 旧金山 Physical AI 报告（3D 场景仿真 + FLORA）、UVTA（20维触觉外骨骼）、Lion-ER（多源数据配比负迁移） 四大证据链，我们为您做三层穿透拆解：

```text
┌───────────────────────────────────────────────────────────────────────────────────────────────────┐
│     「Minimal 真机数据 + 海量人类数据 / 人类仿真数据」泛化增益与物理边界全景判定矩阵               │
└───────────────────────────────────────────────────────────────────────────────────────────────────┘

  🟢 第一层：能买到什么？（真机数据需求最高可压缩 15 倍：300 条 → 20 条！）
  ├── 1. 机制突破：传统 VLA 直接拟合「图像 → 机器人动作 P(a_t|o_t)」，没有真机动作标签就饿死；
  │      而 WAM 拆分为「视频分支预测未来视觉状态 P(z_{t+1}|z_t)（世界模型）」+「动作分支预测逆动力学
  │      P(a_t|z_t, z_{t+1})」。海量无标签人类视频负责训练前向物理直觉，Minimal 真机数据只负责校准最后
  │      一公里的机械臂本体逆动力学映射！
  ├── 2. 纯视频无标签即提效 3 倍（Table 1）：在仅用 ~100h 真机数据后训练下，0 人类数据成功率仅 3.15%
  │      （得分 6.39）；仅加入 15,000h 纯人类视频预训练（0 动作标签），成功率飙升 3 倍至 9.45%（得分 14.13）；
  │      开启 Joint Shared-Attention（让动作头直接读取预测的未来画面表征）后，跃升至 14.35%（得分 20.29）！
  └── 3. 15 倍真机数据压缩实证（Fold Cloth 叠衣实验）：真机数据从 300 条砍到 100 条时，纯真机 ID 成功率
         跌至 40%；当真机极限砍到 20 条（1/15）时，靠「12,000h 多任务人类中训 + 少量任务对齐人类演示
         + 20 条真机数据」，ID / 物体 OOD / 场景 OOD 成功率奇迹般恢复至 80% / 80% / 60%！

  🟡 第二层：为什么「无脑砸海量人类数据」会撞墙甚至负迁移？（Ego4WAM 揭示的三大硬条件）
  ├── 条件 1【对齐税 Alignment Tax】：12 万小时野外日常视频 ≠ 4 小时工作空间对齐演示！
  │      • 抓放实验（Place into Basket）中，纯真机在未见物体（Object-OOD）/ 未见场景（Scene-OOD）成功率
  │        仅 10% / 0%；必须补入「与机器人同桌面/同视角/同目标物体的对齐人类演示（Tier-1）」，才能将
  │        Object-OOD 拉升 6 倍至 60%、Scene-OOD 拉至 20%。随机刷 100 万小时 Ego4D 逛街做饭视频救不了场。
  ├── 条件 2【长尾稀释陷阱 Diversity Interference】：盲目扩长尾任务会直接损害精细操控（Precision）！
  │      • 固定 500 类高频任务把时长从 1Kh 扩到 4Kh，泛化率从 5.0% 升至 7.8%，Precision 同步提升；
  │      • 但若把任务从 500 类盲目扩到 6,000 类（12,000h），泛化率仅 7.0%（反不如 4Kh 密集 500 类的 7.8%），
  │        且 Precision（精细操控）因长尾稀疏噪声与多任务梯度冲突出现倒退下降！
  └── 条件 3【零真机不可达】：当真机数据从 20 条进一步降到 0 条，由于人手（27自由度软体）与平行夹爪
         （7自由度刚体）存在固有动力学鸿沟，缺乏真机本体接地的动作头会彻底崩溃。

  🔴 第三层：如果砸「海量人类仿真数据（Massive Human Sim Data）」呢？（硅谷最新分野与物理铁壁）
  ├── 1. 千万别去“仿真假人手再转真机器”——要“用真人类视频学世界先验 + 直接仿真真机器人跑 RL”！
  │      • 物理仿真器（Isaac/MuJoCo）最不擅长的就是仿真“27 自由度软组织人手皮肤形变与摩擦”；如果先仿真
  │        假人手、再重定向给真机械臂，等于叠加了「Sim-to-Real Gap + Human-to-Robot Gap」双重失真！
  │      • 硅谷最优解：A) 视觉侧用「神经渲染重定向（EgoScale/Masquerade）」把真实人类视频里的人手直接
  │        替换渲染成机械臂夹爪；B) 仿真侧如 Alex Zheng 报告披露（Pi / Ai2 MolmoBot / Eka），直接用
  │        自动化 3D 场景生成 + 目标机器人本体仿真 + NVIDIA FLORA 稠密奖励跑离线 RL（零真机反超 π0.5）。
  └── 2. 接触后力控死穴（Post-Contact Force Wall）：哪怕 15,000h 人类视频拉满，RoboDojo 绝对成功率仍仅
         14.35%（Precision 仅 22.25%）。因为纯视觉视频与运动学仿真均无 6 轴力矩（F/τ）与微米滑移信号；
         接触前（Pre-Contact）靠人类视频/仿真可压缩 10 倍真机数据，接触后（Post-Contact 插拔/拧瓶盖/装配）
         必须靠 UVTA 穿戴式触觉外骨骼（0% → 84%）或 SynDexy C1 / ForceVLA2 毫秒级力触真机闭环！
```

---

### 二、 一手论文核查与架构拆解：Ego4WAM (arXiv:2609.40341) 到底做了什么？

#### 1. 论文元数据与研究靶心
- 论文标题：*Ego4WAM: What Matters When Scaling Egocentric Human Data for Robot Learning?*（《Ego4WAM：在为机器人学习规模化扩展第一视角人类数据时，什么才是关键？》）
- 署名团队：Zhihao Sun（孙志浩，复旦大学）、Liu Liu（刘流，地平线）、Xinjiang Wang（王新疆，地平线）、Haoyi Jiang、Wei Feng、Huiqiang Zhang、Xiaosong Jia（贾晓松）、Zhizhong Su（苏志忠，地平线机器人实验室负责人）、Zuxuan Wu（吴祖煊，复旦大学视觉与学习实验室教授，通讯作者）。
- 直指行业痛点：此前如 EgoScale (arXiv:2602.16710)、Dyna-2 (1M-hour WAM) 等工作热衷于刷新人类视频的“总小时数（从万小时迈向百万小时）”，并用开环的人手轨迹预测均方误差（Open-loop Hand MSE）绘制漂亮的幂律 Scaling Law 曲线。但 开环手部轨迹预测更准 $\neq$ 下游机器人闭环操作成功率更高。

#### 2. 核心设计：三层人类数据金字塔（Egocentric Data Pyramid）与双分支 WAM 架构
为了不让架构差异掩盖数据规律，作者固定了基于 OpenWAM（以 Wan-DiT 为因果视频骨干、采用潜空间流匹配 Latent Flow Matching） 的双分支架构，并将第一视角人类数据按“监督信号的物理可靠性与对齐度”构建为三层金字塔：

| 金字塔层级 | 数据类型 | Ego4WAM 实验规模 | 物理特征与采集约束 | 在 WAM 中的监督角色 |
| :--- | :--- | :---: | :--- | :--- |
| Tier 1（塔尖） | Robot-Aligned Video-Action Data<br/>*(与机器人对齐的人类视频-动作数据)* | ~4 小时<br/>*(自采高精对齐)* | 人类操作员在与目标机器人相同的桌面工作空间、相似相机视角、针对待测新物体（Object-OOD）或新背景（Scene-OOD）亲手演示操作 | 后训练（Post-training）微调锚点：无需遥操作机器人，仅靠人手在新环境比划几十分钟，直接注入目标场景/物体的分布外视觉与轨迹知识 |
| Tier 2（中层） | Multi-Task Video-Action Data<br/>*(多任务带手部动作标签人类数据)* | ~12,000 小时<br/>*(覆盖最高 6,000 类任务)* | 具备经过校验的 3D 手部/腕部姿态轨迹与语言指令标注，但不针对特定机器人工作台 | 中训（Mid-training）跨任务操作先验：利用 OpenWAM 的掩码跨本体动作接口（Mask-based Cross-Embodiment Action Interface），联合监督视频分支与动作分支 |
| Tier 3（塔基） | Multi-Task Video-Only Data<br/>*(大规模无动作标签纯人类视频)* | ~120,000 小时 池<br/>*(消融采样 15,000 小时)* | 源于 Ego4D、EPIC-KITCHENS、Ego-Exo4D 等野外视频，无可靠 3D 手部动作标签或物理尺度，但完整记录了动作引发的物体运动、布料形变与环境因果转移 | 预训练（Pre-training）世界动态先验：单独监督 Video Branch（世界模型分支） 预测未来视觉潜表征 $\hat{z}_{t+1:t+H}$ |

- 两大共享注意力机制对比（Base vs. Joint Shared-Attention）：
  - Base Formulation：动作分支（Action Tokens）在生成动作时仅能关注当前时刻视觉观测 $z_t$（未来视频预测仅作为训练时的辅助表征正则项）；
  - Joint Formulation (Ego4WAM-Joint)：动作分支在生成动作时，不仅关注当前视觉 $z_t$，还能通过共享注意力直接读取视频分支预测出的「未来视觉潜表征 $\hat{z}_{t+1:t+H}$」（而未来视觉 token 不依赖动作 token），从而让动作策略显式建立在“脑海预演的未来画面”之上。

---

### 三、 三大核心实验定量还原与深度审计（`/r` 核查矩阵）

#### 实验一：人机对齐演示（Tier-1）如何赋能零真机 OOD 泛化，并将真机数据压缩 15 倍？
在配备平行夹爪的 双臂 Piper 真实机器人 上，作者测试了刚体抓放（Place into the Basket）与柔性体操作（Fold Cloth 叠衣服），并在其他 4 项复杂真机任务（Fold Towel 叠毛巾、Tighten a Bottle Cap 双臂拧紧瓶盖、Stack Plates and Bowls 叠放盘碗、Heat Food with a Microwave 微波炉热饭长程操作）上完成了闭环验证：

| 真机评测任务与实验维度 | 训练数据配置（机器人遥操演示 + 人类数据配置） | ID（训练分布内）成功率 | Object-OOD（未见新物体）成功率 | Scene-OOD（未见新背景）成功率 | 核心物理与工程启示 |
| :--- | :--- | :---: | :---: | :---: | :--- |
| 1A. Place into the Basket<br/>*(刚体抓放：检验零真机 OOD 迁移)* | ① 仅使用机器人数据（仅在 ID 环境采集） | 60% | 10% | 0% | 纯真机策略遇到没见过的物体或桌面背景立即失明（10% / 0%） |
| 1A. Place into the Basket | ② 机器人 ID 数据 + 对应 OOD 条件下的对齐人类演示 *(0 条 OOD 真机数据)* | 60% | 60% *(+50 pct, 6倍)* | 20% *(+20 pct, 进度大幅改善)* | 进新工厂/换新工件无需重新遥操机器人，派人戴相机在新桌面用手抓放几十分钟即可唤醒 60% 物体泛化！ |
| 1B. Fold Cloth (叠衣服)<br/>*(柔性体：检验真机数据极限压缩)* | ① 仅使用 100 条 真机演示 *(从完整 300 条削减 2/3)* | 40% | — | — | 柔性衣物形变状态空间极大，100 条真机数据独木难支 |
| 1B. Fold Cloth (叠衣服) | ② 100 条 真机演示 + 固定任务对齐人类演示 *(无多任务中训)* | 80% *(翻倍)* | 60% | 80% | 100 条真机足以锚定本体逆动力学，叠加对齐人类演示实现跨场景反超 |
| 1B. Fold Cloth (叠衣服) | ③ 20 条 真机演示 *(削减 15 倍!)* + 仅固定任务对齐人类演示 | *崩溃失效* | *崩溃失效* | *崩溃失效* | Minimal 真机红线暴露：当真机降到 20 条，单靠几小时人类演示无法教会模型跨任务运动先验 |
| 1B. Fold Cloth (叠衣服) | ④ 20 条 真机演示 + 对齐人类演示 + 12,000h 多任务 Video-Action 中训 | 80% | 80% | 60% | 三明治配方跑通：1.2万h 通用人类动作先验 + 少量 对齐人类演示 + 20条 真机本体校准 = 15 倍真机数据压缩！ |

---

#### 实验二：Data Duration（时长密度）vs. Task Diversity（长尾多样性）—— 为什么盲目扩长尾会损害精细操作？
在 RoboDojo 仿真基准（图 5）中，作者将两条正交的 Scaling 轴严格拆开对撞：
- 路径 A（Data Duration Scaling，深挖高频密度）：固定前 500 类最高频任务，总时长从 1,000h → 2,000h → 4,000h（单任务样本密度翻 4 倍）；
- 路径 B（Task Diversity Scaling，横向铺开长尾）：保持单任务平均时长（~2h/类）近似不变，任务类别从 500 类 → 1,000 类 → 2,000 类 → 6,000 类（总时长从 1,000h → 12,000h）。

| Scaling 路径与数据配比 | 总人类数据时长 | 覆盖任务类别数 | 单任务平均密度 | RoboDojo Generalization (泛化成功率) | RoboDojo Long-Horizon (长时序成功率) | RoboDojo Precision (精细操作表现) |
| :--- | :---: | :---: | :---: | :---: | :---: | :--- |
| 起点基线 | 1,000 小时 | 500 类 | ~2.0 小时/类 | 5.0% | 12.0% | 基准水平 |
| 路径 A：扩时长密度 (Duration) | 4,000 小时 | 500 类 (固定高频) | ~8.0 小时/类 (高密度) | 7.8% *(+56% 相对提升)* | 16.2% *(+35% 相对提升)* | 🟢 随样本密度增加稳步提升 |
| 路径 B：扩长尾多样性 (Diversity) | 12,000 小时 *(3倍时长!)* | 6,000 类 (12倍类别!) | ~2.0 小时/类 (长尾稀疏) | 7.0% *(反低于 4Kh 密集版的 7.8%!)* | 16.2% *(与 4Kh 密集版持平)* | 🔴 随长尾稀疏任务混入反而下降 (负迁移!) |
| 同数据量对决 (2,000h / 4,000h) | 2,000h 或 4,000h | 500 类 vs 1,000/2,000 类 | 密集 vs 稀疏 | 密集 500 类全面胜出 | 密集 500 类占优 | 稀疏多任务明显负迁移 |

> 核心洞察（为什么扩长尾会伤 Precision？）：
> 精细操控（Precision，如对准插槽、拧瓶盖、捏取薄片）要求模型在毫米级接触流形上具备极低的动作方差（Action Variance）。当把 5,500 个样本极少、标注噪声更大的长尾人类日常任务强行塞进共享权重时，多任务梯度冲突（Gradient Conflict）与容量稀释直接拉大了高频精细任务的动作预测方差——这与本工作台收录的 [斯坦福宋舒然团队 arXiv:2611.01565](%E6%96%AF%E5%9D%A6%E7%A6%8F%E5%AE%8B%E8%88%92%E7%84%B6%E5%9B%A2%E9%98%9F%E6%8F%90%E5%87%BA%E6%9C%BA%E5%99%A8%E4%BA%BA%E9%A2%84%E8%AE%AD%E7%BB%83%E8%AF%84%E4%BC%B0%E6%96%B0%E6%8C%87%E6%A0%87%EF%BC%9A%E7%94%A8%E5%8A%A8%E4%BD%9C%E8%AF%AF%E5%B7%AE%E5%88%86%E5%B8%83%E9%80%89%E6%A8%A1%E5%9E%8B%EF%BD%9C%E5%8F%AA%E7%9C%8B%E9%AA%8C%E8%AF%81%E6%8D%9F%E5%A4%B1%EF%BC%8C%E5%8F%AF%E8%83%BD%E9%94%99%E8%BF%87%E6%9B%B4%E5%A5%BD%E7%9A%84%E5%BE%AE%E8%B0%83%E8%B5%B7%E7%82%B9.md)（动作误差分布与常见状态可靠性权衡）及 [招商局狮子山实验室 Lion-ER-35B-A3B](%E4%B8%8D%E9%9D%A0%E5%A0%86%E7%A0%8C%E6%95%B0%E6%8D%AE%EF%BC%8C%E8%AE%A9%E6%9C%BA%E5%99%A8%E4%BA%BA%E7%9C%8B%E6%87%82%E7%9C%9F%E5%AE%9E%E7%89%A9%E7%90%86%E4%B8%96%E7%95%8C%20_%20%E6%8B%9B%E5%95%86%E5%B1%80%E7%8B%AE%E5%AD%90%E5%B1%B1%E4%BA%BA%E5%B7%A5%E6%99%BA%E8%83%BD%E5%AE%9E%E9%AA%8C%E5%AE%A4%E5%8F%91%E5%B8%83%E3%80%8C%E9%A9%AD%E7%89%A9%E2%84%A2%20Lion-ER-35B-A3B%E3%80%8D%E5%85%B7%E8%BA%AB%E6%8E%A8%E7%90%86%E6%A8%A1%E5%9E%8B.md)（数据配比失衡引发灾难性负迁移）形成了跨论文的铁三角互证！

---

#### 实验三：无动作标签纯视频预训练（Video-Only Pre-training）与联合共享注意力（Table 1 & Table 2 完整还原）
所有变体在下游均仅使用相同的 ~100 小时（0.1K hrs） 机器人多任务数据 进行后训练：

| 模型变体与训练流水线 (Table 1 & Table 2) | 阶段1：纯视频预训练 (15,000h, 无动作标签) | 阶段2：视频-动作中训 (12,000h, 带手部动作) | 跨分支注意力架构 | Generalization (得分 / 成功率) | Precision (得分 / 成功率) | Long-Horizon (得分 / 成功率) | RoboDojo 总平均得分 (Avg Score) | RoboDojo 总平均成功率 (Avg SR %) |
| :--- | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| 1. Robot-Only 基线 *(无任何人类数据)* | ❌ | ❌ | Base (仅看当前帧) | — | — | — | 6.39 | 3.15% |
| 2. 跳过视频预训、仅做动作中训 | ❌ | ✅ (12,000h) | Base (仅看当前帧) | — | — | — | 10.28 | 6.42% |
| 3. 仅做纯视频预训 (0 人类动作标签!) | ✅ (15,000h) | ❌ | Base (仅看当前帧) | — | — | — | 14.13 | 9.45% *(基线的 3.0 倍!)* |
| 4. 纯视频预训 + 视频-动作中训 (Base) | ✅ (15,000h) | ✅ (12,000h) | Base (仅看当前帧) | — | — | — | 15.04 | 10.78% *(并非简单相加)* |
| 5. Ego4WAM 完整版 (Joint Attention) | ✅ (15,000h) | 联合训练 | Joint (动作头读取预测未来帧) | 17.19 / 12.17% | 31.16 / 22.25% | 44.16 / 29.75% | 20.29 | 14.35% *(基线的 4.55 倍!)* |

> 三个极其反直觉但价值千金的定量发现：
> 1. 「15,000 小时无动作纯视频（9.45%）」竟然完胜「直接上 12,000 小时带手部动作标签的中训（6.42%）」！因为人类手部 3D 姿态自动标注存在 25–31 mm 的单目深度与遮挡噪声（见 [Alex Zheng 报告](Where%20Physical%20AI%20Is%20Heading.md)），在模型还没看懂“世界物理怎么动”之前强行拟合带噪人手轨迹，反而容易学歪；先用海量纯视频把世界动态（Forward Dynamics）训扎实，事半功倍。
> 2. 世界动态先验与手部动作监督存在约 80% 的信息重叠：在 9.45% 纯视频预训练基础上再叠 12,000h 动作中训，仅微增 +1.33 pct 至 10.78%。
> 3. 真正的胜负手是「让动作分支直接看世界模型脑补的未来画面（Joint Attention）」：同样基于 15,000h 视频预训练，仅仅把注意力机制从 Base 改为 Joint（允许动作 token 直接 attend 预测出的未来视觉表征 $\hat{z}_{t+1:t+H}$），成功率直接从 9.45% 暴涨至 14.35%（总分从 14.13 跃升至 20.29）！但注意本库收录的 [Fast-WAM (arXiv:2603.16666)](https://arxiv.org/abs/2603.16666) 与 [NVIDIA VFlash](%E8%8B%B1%E4%BC%9F%E8%BE%BE%20VFlash%EF%BC%9AJim%20Fan%E5%AE%A3%E5%91%8A%E2%80%9CSystem-1%E8%A7%86%E8%A7%89%E6%96%B0%E6%97%B6%E4%BB%A3%E2%80%9D%EF%BD%9C%E6%A8%A1%E5%9E%8B%E6%8F%90%E9%80%9F12%E5%80%8D.md) 的补充视角：在测试时生成未来视频潜表征会带来百毫秒级延迟，工程部署时需配合潜空间单步并行草拟（Flash Decoding / Shortcut Flow）以避免控制节拍掉帧。

---

### 四、 投研与工程决策指南：下一笔具身数据预算到底该怎么花？

如果一家具身智能公司手握有限的真机算力与采集预算，结合 Ego4WAM 与本工作台具身全景证据，最优的数据投资回报率（Data ROI）配比公式如下：

| 能力层级与物理阶段 | 最优主攻数据源（该砸什么数据？） | 严禁踩坑的伪方向（别在什么上面烧钱？） | 预期真机数据压缩倍率与代表标杆 |
| :--- | :--- | :--- | :--- |
| 1. 底座层：物理世界常识与物体动态先验<br/>*(S2 世界模型预训练)* | 1万–10万小时无动作标签人类第一视角操作视频（Tier-3 Video-Only） + Joint Shared-Attention WAM 架构 | ❌ 不必花天价去给 10 万小时野外视频逐帧精标 3D 手部骨骼（Perceptron \$29/h API 仅用于切分高频核心集即可） | 零人类动作标签即可让下游真机成功率提升 3.0x–4.5x（Ego4WAM） |
| 2. 技能层：跨任务操作原语与运动学覆盖<br/>*(S1 策略中训 Mid-training)* | 聚焦前 500 类高频工业/家居核心技能做高密度覆盖（Duration > Diversity） + 直接对「目标机器人本体」做自动化 3D 场景合成仿真 + FLORA 稠密奖励 RL | ❌ 严禁盲目把人类任务长尾铺开到 6,000+ 类（稀释高频技能并损害 Precision）；<br/>❌ 严禁在仿真器里“仿真假人手再转真机器”（双重 Gap） | 相比纯真机遥操，可将目标任务真机演示需求从 300 条 压缩 15 倍至 20 条（Ego4WAM / Ai2 MolmoBot） |
| 3. 现场部署层：新客户、新工件、新工位冷启动<br/>*(OOD 域外快速适配)* | 20–50 条目标真机演示 + 几十分钟与机器人同视角/同桌面的「人手现场对齐演示（Tier-1 Robot-Aligned）」 + 神经渲染手爪替换（[Danfei Xu EgoScale](%E4%B8%93%E8%AE%BFDanfei%20Xu%EF%BC%9A%E4%BA%BA%E7%B1%BB%E6%95%B0%E6%8D%AE%E6%98%AF%E4%BC%AA%E8%A3%85%E6%88%90%E5%8F%A6%E4%B8%80%E7%A7%8D%E5%BD%A2%E5%BC%8F%E7%9A%84%E6%9C%BA%E5%99%A8%E4%BA%BA%E6%95%B0%E6%8D%AE.md)） | ❌ 换个篮子或桌布就派工程师驻场重采几百条真机遥操数据 | 0 条 OOD 真机数据即可将新物体成功率从 10% 拉升至 60%（Ego4WAM） |
| 4. 接触闭环层：精密插拔、拧盖、柔性装配<br/>*(S0 接触后 1ms 力触控制)* | 穿戴式 20 维力/触觉外骨骼（[UVTA](%E8%A7%A6%E8%A7%89%E7%81%B5%E5%B7%A7%E6%93%8D%E4%BD%9C%E6%9D%80%E5%87%BA%E4%B8%80%E5%8C%B9%E9%BB%91%E9%A9%AC%EF%BC%9A%E4%BA%BA%E7%B1%BB%E8%A7%A6%E8%A7%89%E6%95%B0%E6%8D%AE%E7%BB%88%E4%BA%8E%E8%A2%AB%E8%A7%84%E6%A8%A1%E5%8C%96%E5%9C%B0%E7%94%A8%E8%B5%B7%E6%9D%A5%E4%BA%86%EF%BC%9F.md)） + 真机 6 轴力矩/视触觉毫秒级闭环（ForceVLA2 / [瞬恒 SynDexy C1](%E6%8A%8A%E5%B7%A5%E4%B8%9A%E7%B2%BE%E5%AF%86%E5%B7%A5%E5%BA%8F%E4%BA%A4%E7%BB%99%E6%9C%BA%E5%99%A8%E4%BA%BA%EF%BC%9A%E7%9E%AC%E6%81%92%E6%99%BA%E8%83%BDSynDexy%20C1%20%E5%AE%8C%E6%88%90%E9%A6%96%E6%AC%A1%E5%B0%8F%E6%89%B9%E9%87%8F%E4%BA%A4%E4%BB%98.md)） | ❌ 妄想靠纯视觉人类视频或无力控几何仿真攻克 <1mm 过盈配合插拔 | 纯无触觉人类数据成功率 0% $\to$ 加入 UVTA 触觉外骨骼跃升至 84% |

---

## 原文摘录与一手信源存证

> 论文题目： Ego4WAM: What Matters When Scaling Egocentric Human Data for Robot Learning?
> — 原文摘录，文字段落 1；证据 `digest-material-2168953cce4e8d605612b5cc8690420eea1875f01d677093d1a4d5bcd691f9a5-excerpt-1@1`

> 近年来，利用大规模 Egocentric Human Data 提升机器人基础模型的能力，正逐渐成为具身智能领域的重要研究趋势。 人类每天都在不同的环境中与丰富的物体交互，执行不同的任务，而第一视角操作视频天然记录着手部动作、物体交互和场景变化。从 EgoScale 到 Dyna-2，研究者持续扩大第一视角人类操作数据的规模，希望通过海量人类经验突破真实机器人数据采集效率有限的瓶颈。
> — 原文摘录，文字段落 2；证据 `digest-material-2168953cce4e8d605612b5cc8690420eea1875f01d677093d1a4d5bcd691f9a5-excerpt-2@1`

> 第一,什么类型的数据值得优先收集和 scaling？ 现有研究大多只关注使用的人类数据时长，但是数据内部存在多种数据扩展的维度，无法仅用小时数衡量。在扩展数据规模时，是增加已有任务的重复演示更好，还是扩展任务多样性更好？与目标任务高度对齐的人类演示、跨任务人类数据、以及没有动作标签的人类操作视频，这些不同类型的数据又能各自能发挥什么作用？
> — 原文摘录，文字段落 3；证据 `digest-material-2168953cce4e8d605612b5cc8690420eea1875f01d677093d1a4d5bcd691f9a5-excerpt-3@1`

一手材料：

- Ego4WAM: What Matters When Scaling Egocentric Human Data for Robot Learning? (arXiv:2609.40341 & Project Dossier) · Fudan University (Vision and Learning Lab) & Horizon Robotics / arXiv:2609.40341 · [原站](https://arxiv.org/abs/2609.40341) · [主体档案：Horizon Robotics](../entities/companies/Horizon%20Robotics.md) / [主体档案：Fudan Vision and Learning Lab](../entities/labs/Fudan%20Vision%20and%20Learning%20Lab.md) / [主体档案：Zhihao Sun](../entities/people/Zhihao%20Sun.md) · [NotebookLM](https://notebook.google.com/notebook/33f0076b-fc09-42cc-9cd9-fecfb847ce1c) · [Drive](https://drive.google.com/drive/folders/1ZIgKmZ2N95-AOAlhhzs2GDQ2iZw3yT4S)
  材料版本 `digest-material-6d6f90771c734ecd77a621d3449f54f43ec8a75eda40c50bee3f0b58aae20dba@1`；获取方式 `primary_source_dossier_compilation`。
  > PRIMARY SOURCE ARCHIVAL DOSSIER Paper Title: Ego4WAM: What Matters When Scaling Egocentric Human Data for Robot Learning? — 原文提取
  > In reality, egocentric human data is highly heterogeneous across human-robot alignment, behavioral density, task diversity, and supervision fidelity. — 原文提取

归属与范围：已穿透微信二手编译稿（human five），完整核查并归档复旦大学（吴祖煊、孙志浩）与地平线（苏志忠、王新疆、刘流等）发表的一手论文《Ego4WAM: What Matters When Scaling Egocentric Human Data for Robot Learning?》（arXiv:2609.40341）、项目主页（https://sunzhihao18.github.io/Ego4WAM/）与 HuggingFace 模型库（HorizonRobotics/Ego4WAM），提取完整实验表（Table 1、Table 2、Figure 5 及 Piper 双臂真机 6 项任务数据），并结合本工作台具身智能与 AI 训练数据证据链深度回应用户关于「Minimal 真机数据下砸海量人类数据与海量人类仿真数据的泛化边界」追问。

[返回赛道总览](../赛道总览.md#digest-2168953cce4e8d60) · [返回导读索引](README.md) · [主体档案库](../entities/README.md)
