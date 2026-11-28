---
title: "SuperMimic（BAIR / CoRL 2026 最佳论文）：单个可微世界模型将人形全身控制算力降低超 1,000 倍"
type: blog_digest
sector: "具身智能"
source: "BAIR (UC Berkeley) · SuperMimic (arXiv:2610.28480)"
published_at: "2026-10-20"
raw_sha256: "86303046c579baa2c856313033eb30cbc922926d21f7b38de72fcc37b8d75207"
material_version: "digest-material-86303046c579baa2c856313033eb30cbc922926d21f7b38de72fcc37b8d75207@1"
origin_url: "https://arxiv.org/abs/2610.28480"
trigger_source: "BAIR"
trigger_url: "https://arxiv.org/abs/2610.28480"
user_comments: ""
status: "processed_with_gaps"
primary_topic: "模型与策略架构"
topic_confidence: 0.9686
stack_claims: [{"layer_id": "policy_architecture", "pattern_id": "world_action_model", "system": "SuperMimic", "entity": "BAIR", "mechanism": "用单个在线同步更新的确定性可微世界模型（MLP 2048×3，k=8 步自回归）对 H=32 步想象轨迹执行 BPTT 获取一阶策略梯度，辅以软存活权重与 GAE Critic 自举。", "metric_or_tradeoff": "1 张 H100 训练 3 小时（3 GPU-h）超越 128 张 L40 训 7 天的 SONIC（算力降 >1,000 倍）；确定性模型难拟合瞬态碰撞跃变。", "source_url": "https://arxiv.org/abs/2610.28480"}, {"layer_id": "dexterity_tactile", "pattern_id": "humanoid_whole_body", "system": "SuperMimic Whole-Body Controller", "entity": "BAIR", "mechanism": "Motion Encoder 读取 K=10 未来帧输出 32 维潜变量，由 Shared Decoder 在 50 Hz 控制下输出全身关节动作并零样本部署至 Unitree G1。", "metric_or_tradeoff": "2 卡 H100 训 9.8 小时在 129,514 段动捕库达 0 失败并跑通空翻与侧滚，但限平地无物体交互且 129K 为训练集覆盖评测。", "source_url": "https://arxiv.org/abs/2610.28480"}, {"layer_id": "data_acquisition", "pattern_id": "sim_synthetic_rl", "system": "SuperMimic Dyna Loop (MuJoCo Warp)", "entity": "BAIR", "mechanism": "在 MuJoCo Warp（单卡 4,096 并行环境，50 Hz）按基于回报的重置采样（40% 聚焦低分难点）收集轨迹进池，并向世界模型输入域随机化参数以解耦随机源。", "metric_or_tradeoff": "在 2k–16k 批大小下想象推演比 MuJoCo Warp 快 10 倍以上，达最优回报所需想象步数较 PPO-WM 降约 64 倍。", "source_url": "https://arxiv.org/abs/2610.28480"}]
---

<a id="digest-86303046c579baa2"></a>
# SuperMimic（BAIR / CoRL 2026 最佳论文）：单个可微世界模型将人形全身控制算力降低超 1,000 倍

2026-10-20 · BAIR (UC Berkeley) · SuperMimic (arXiv:2610.28480) · 有来源缺口

[本地原件归档](../../../raw/86303046c579baa2c856313033eb30cbc922926d21f7b38de72fcc37b8d75207) · 固定材料版本 `digest-material-86303046c579baa2c856313033eb30cbc922926d21f7b38de72fcc37b8d75207@1` · [一手原站](https://arxiv.org/abs/2610.28480)

## 深度拆解与复核

- ==核心结论==：UC Berkeley [BAIR](../entities/labs/BAIR%20%28Berkeley%20AI%20Research%29.md)（Qiayuan Liao、Yiyang Shao、Junfeng Long、Kevin Zakka、Roberto Horowitz、[Pieter Abbeel](../entities/people/Pieter%20Abbeel.md)、Koushil Sreenath）在 CoRL 2026 斩获最佳论文奖（Oral O7）的 SuperMimic（arXiv:2610.28480v3，2026-10-20 提交，2026-11-19 修订），用单个在线同步更新的可微世界模型取代传统无模型 PPO 采样器：通过短时域（H=32 步）想象轨迹执行时间反向传播（BPTT）获取解析一阶策略梯度，不要求物理仿真器自身可微。在单张 NVIDIA H100（80 GB SXM5）上仅训练 3 小时（3 GPU-h），其归一化回报即超越需 128 张 L40 GPU 训练 7 天（168 小时、约 21,000 GPU-h）的 SOTA 基线 SONIC（壁钟时间缩减 >50 倍、GPU 小时算力降幅 >1,000 倍）；在 2 张 H100 上训练 9.8 小时后，在 129,514 段动捕动作基准上达成 0 跟踪失败（SONIC 发布权重失败 179 段），并完成 Unitree G1 真机跳过跳、侧滚翻与原地 360° 后空翻零样本部署。

#### 一、业务切口与核心机制

1. 为什么传统人形全身控制被锁在百卡集群？
   - 过去规模化动作模仿（如 BeyondMimic、PHC 及 NVIDIA GEAR Lab 的 SONIC）多采用无模型强化学习（PPO）。尽管不同人类动作片段（跑跳、舞蹈、倒地翻滚）均由同一台人形机器人的刚体动力学主导，黑盒 PPO 无法显式建模共用物理规律，只能靠成千上万并行仿真环境反复试错，用极大集群算力（SONIC 耗费约 21,000 GPU-h）暴力拟合动作库。
   - 传统可微仿真（如 SHAC、DiffMimic）虽有解析梯度，但难以直接穿过 MuJoCo 等含非光滑刚体接触的标准引擎；而既往模型强化学习（如 PWM、RWM）多依赖提前在别的策略数据上预训练离线世界模型，或仅跑 PPO 于世界模型上（PPO-WM）。

2. SuperMimic 三步一体 Dyna 循环与 Critic 自举机制
   - 第一步（仿真采样进池）：当前确定性策略在 MuJoCo Warp（50 Hz 控制频率，含四个 5 ms 子步，单卡 4,096 个并行环境）中叠加动作探索噪声 N(0, 0.1^2) 采样并写入固定大小回放缓冲区（每环境 1,000 步）。为避免简单动作刷屏，采用基于回报的重置采样（1 秒分桶，50% 均匀采样、40% 按负归一化回报 softmax(-25 G_b/G_max) 聚焦低分难点、10% 保留历史权重）。
   - 第二步（拟合确定性可微世界模型）：动力学网络（MLP 2048-2048-2048）输入当前状态、动作及该回合域随机化参数 sim context（摩擦系数 [0.3, 1.2]、关节零偏、躯干质心偏移），在 k=8 步自回归回放窗口上联合拟合状态转移、奖励与二值提前终止概率 d_hat，使模型学到修正自回归误差的能力。因已知随机源均被显式输入，动力学模型保持确定性，传感器噪声则仅在想象采样输入策略时外加。
   - 第三步（短时域 BPTT + 软存活 Critic 更新）：冻结世界模型权重，从回放池抽取起始状态展开 H=32 步（0.64 s）想象轨迹，沿世界模型雅可比矩阵用 BPTT 直接反向传播回报梯度更新 Motion Encoder（MLP 2048-1024-512-256，读取 K=10 未来帧输出 32 维 tanh 潜变量）与 Shared Decoder（MLP 2048-1024-512-256）。关键设计是以连续软存活权重 c_hat 替代 SHAC 的硬截断，并接入 GAE Critic（MLP 256-128，lambda=0.95，gamma=0.99）自举 H 步之后的长期回报——消融显示无 Critic 时在 H<=16 步直接训练失败，有 Critic 则 H=16 即可匹敌无 Critic 的 H=32；且在 0.5–4 m/s 仿真速度推搡扰动下，有 Critic 策略可在 0.5–2.4 s 内稳住站姿，无 Critic 策略在 0.5 m/s 下持续踉跄并在 4 m/s 下直接摔倒。

#### 二、核心数据核查、口径纠偏与工程边界

- 场景与利益披露：SuperMimic 由 UC Berkeley BAIR（获 Komatsu、BAIR 人形中心、Apple、RAI Institute 资助及 Lambda 算力支持，Pieter Abbeel 与 Koushil Sreenath 同时担任 Amazon Scholars）发表于顶会 CoRL 2026 并获最佳论文奖。全文算力以 Lambda 按需 H100 实例计量，实验集中于平地动捕复现与单一速度编码器初步探索，尚待第三方工业硬件长期复测。

| 对比维度 | SONIC（发布版 PPO 基线） | SuperMimic（1×H100 3 小时） | SuperMimic（2×H100 9.8 小时） | 复核口径说明 |
| :--- | :--- | :--- | :--- | :--- |
| 训练硬件与壁钟时长 | 128 张 NVIDIA L40（168 小时 / 7 天） | 1 张 NVIDIA H100（3 小时） | 2 张 NVIDIA H100（9.8 小时） | 壁钟时间缩减约 56 倍（>50 倍） |
| 累计 GPU-hours | 约 21,000 GPU-h | 3 GPU-h | 19.6 GPU-h | GPU-h 降幅约 7,200 倍（保守标注 >1,000 倍） |
| 动捕训练数据量 | 611 小时全量动捕库 | 264.56 小时 BONES-SEED 公开子集 | 264.56 小时 BONES-SEED 公开子集 | 数据差 2.3 倍、H100 vs L40 峰值算力差 0.74×FP32 / 5.5×Tensor，远不足以解释 >1,000 倍差距 |
| 129,514 片段失败总数 | 179 段（v1.1 版 239 段） | 25 段（均率 >0.90） | 0 段（全通） | 含全部 44 段翻滚/空翻（SONIC 44/44 全败）、22 段侧滚翻（SONIC 全败）、24 段跳远（SONIC 败 15）与 8 段舞蹈 |

- ✅ 控制变量复核与三大加速机理拆解（本工作台核查）：为排除“L40 vs H100 芯片代差”与“611 h vs 264.56 h 数据差”混杂，论文在相同 LAFAN1 数据集（40 片段、2.45 小时）、同一 MuJoCo Warp 仿真器与完全一致的奖励函数下对比了 PPO-Sim：SuperMimic 单卡 H100 仅用 1.2 小时即达成目标回报 0.82，而 PPO-Sim 跑满 18 小时在 1 / 4 / 8 卡上最终回报仅停留在 0.60 / 0.70 / 0.72。机理消融进一步拆分了三大来源：① 动力学泛化（数据从 1 小时扩至 264 小时，8 步状态预测误差稳定在 0.007–0.011，算力增长极其平缓）；② 想象推演速度（在 2k–16k 实用批大小下比 MuJoCo Warp 快 10 倍以上，64k 并行下达 62 倍）；③ 一阶解析梯度样本效率（达到世界模型上 PPO 即 PPO-WM 最优回报所需想象步数减少约 64 倍）。
- ⚠️ 「129,514 段 0 失败」的评测对象纠偏（本工作台核查）：论文附录 F.2 明确说明，这 129,514 段动作（从原始 142,220 段经名称过滤踢除 12,553 段、再经 MuJoCo FK 穿模/浮脚过滤踢除 153 段得到）均属于两套方法的「训练集动作」，且评估时关闭了域随机化与传感器噪声、足底摩擦锁定 1.0。因此，179 vs 25 vs 0 测量的是策略对超大规模训练动作库的拟合覆盖上限，不能直接外推为对未见动作的零样本泛化率。
- ⚠️ 下游接口训练与物理局限（本工作台推断）：在下游速度跟踪实验（672 组阶跃响应）中，通过世界模型用任务奖励直接训练 RL 速度编码器在 650/672 个指令上击败蒸馏基线（中位相对误差 0.16 vs 0.49，蒸馏在 >=2.8 rad/s 高速转弯时摔倒 7 次），但该阶段冻结了共享解码器，等价于顺序后训练；此外，论文第 6 节承认当前仅训练于平地（无楼梯/斜坡地形或物体交互），且因确定性世界模型难以拟合瞬态碰撞跃变而删去了 BeyondMimic 原有的根部速度推搡扰动，真机长程跌倒后自主起身与负重搬运仍待验证。

#### 三、赛道横向对比与定位

| 代表框架 | 核心学习范式 | 算力成本与代表规模 | 下游拓展与物理边界 |
| :--- | :--- | :--- | :--- |
| SuperMimic（本文，BAIR） | 单个在线更新确定性可微世界模型 + 短时域 BPTT + Critic | 单卡 H100 3h 超过 SONIC（降 >1,000×），2 卡 9.8h 零失败覆盖 129,514 片段 | 已在 Unitree G1 实机跑通空翻与侧滚；目前限平地无物体交互，单机体训练 |
| NVIDIA SONIC（arXiv:2511.07820） | 大规模无模型 PPO（集群采样）+ 潜空间三编码器对齐 | 128 张 L40 训 7 天（约 21,000 GPU-h），覆盖 611h 闭源+开源数据 | 已做 Unitree G1 50 Hz 全身控制并接驳 GR00T 2 Turbo，但在高动态翻滚/空翻组别失败 179 段 |
| MorphMimic（Caltech / Georgia Tech） | 复现 SuperMimic 可微世界模型 + 125 维形态描述符 + FiLM | 3×H100 NVL 训 5h26m（16.3 GPU-h）统一 G1 / X2 Ultra / Booster T2 | 128,786 共同片段回报差均 <=0.02；多加了约 17% 算力换单套权重跨三机，暂仅 G1 上真机 |
| FPO++（CoRL 2026 Oral，Amazon FAR / BAIR） | 无似然 CFM 损失差 ELBO 代理 + 分样本裁剪 + ASPO 在线 RL | 支持从零训四足/人形运控（G1 / Booster T1）与操作微调 | 在仅给骨盆欠条件控制下相对高斯 PPO 提升至 54.3%（vs 29.8%），擅长表达多峰动作分布 |

### 观点与可反驳条件

- ==观点==：==SuperMimic 的本质是将人形全身控制从「百卡集群暴力无模型 PPO 采样」拉回到「单卡 H100 数小时可微世界模型一阶梯度优化」，使高校与中小团队首次具备独立测算运动模仿 Scaling Law 的算力门槛==；但确定性世界模型对“非连续碰撞/推搡跳变”与“复杂地形接触”的拟合局限，使其短期内更适合作为平地高动态技能与高频运控小脑底座，而非直接替代带外力感知的全身作业策略。
- ==推翻条件==：
  1. ① 复杂地形与外物交互下可微模型崩溃：若将 SuperMimic 扩展至楼梯、碎石坡与双臂搬运重箱（带随机外部冲击与未知物体质量变化）时，学习型世界模型因接触与载荷不连续产生严重多步梯度漂移，迫使想象视域缩至 <=8 步或样本效率退化至低于 PPO-Sim 的 2 倍以内，则「BPTT 可微世界模型全面取代无模型 PPO」的适用边界将被收窄至平地空载动作。
  2. ② 仿真加速器与集群蒸馏成本反转：若 2027 年新一代 GPU 仿真器（如 Newton / MuJoCo Warp + STEEL 求解器）将单卡无模型 PPO / FPO++ 吞吐再拉升 20 倍以上，使得直接基于真仿真器的无模型策略在 129,514 片段上同样可在 4–6 小时内以单卡训至 0 失败，且省去世界模型拟合与误差调参，则代理世界模型路线在单机运动追踪上的效率优势将被抵消。

---

## 原文摘录与一手信源存证

> SuperMimic（BAIR / CoRL 2026 最佳论文）：单个可微世界模型将人形全身控制算力降低超 1,000 倍  一手发布主体：BAIR 原始链接：https://arxiv.org/abs/2610.28480 发布日期：2026-10-20 归属赛道：具身智能  【信源巡检核心摘要】 BAIR（Qiayuan Liao、Pieter Abbeel、Koushil Sreenath 等）提出基于单个可微世界模型的人形机器人全身动作跟踪框架
> — 原文摘录，文字段落 1；证据 `digest-material-86303046c579baa2c856313033eb30cbc922926d21f7b38de72fcc37b8d75207-excerpt-1@1`

> Liao、Pieter Abbeel、Koushil Sreenath 等）提出基于单个可微世界模型的人形机器人全身动作跟踪框架 SuperMimic：通过对短时域想象轨迹进行时间反向传播（BPTT）获取解析梯度，仅在 1 张 GPU 上训练 3 小时即可超越需 128 张 GPU 训练 7 天的 SOTA 无模型 PPO 基线（GPU 小时算力消耗减少超 1,000 倍）；在 129,514 段动捕动作基准上经 2 张 GPU 训练 9.8 小时实现
> — 原文摘录，文字段落 2；证据 `digest-material-86303046c579baa2c856313033eb30cbc922926d21f7b38de72fcc37b8d75207-excerpt-2@1`

> 无模型 PPO 基线（GPU 小时算力消耗减少超 1,000 倍）；在 129,514 段动捕动作基准上经 2 张 GPU 训练 9.8 小时实现 0 跟踪失败，并完成对 Unitre…  【分诊与中枢定位】 【具身智能】BAIR：涉及 BAIR, Pieter Abbeel；含指标 000 倍, 3 小时, 9.8
> — 原文摘录，文字段落 3；证据 `digest-material-86303046c579baa2c856313033eb30cbc922926d21f7b38de72fcc37b8d75207-excerpt-3@1`

一手材料：

- SuperMimic: Scaling Humanoid Whole-Body Control with One Differentiable World Model · Qiayuan Liao, Pieter Abbeel, Koushil Sreenath et al. (UC Berkeley BAIR) · [原站](https://arxiv.org/abs/2610.28480) · [主体档案：BAIR (Berkeley AI Research)](../entities/labs/BAIR%20%28Berkeley%20AI%20Research%29.md) / [主体档案：Qiayuan Liao](../entities/people/Qiayuan%20Liao.md) · [本地原件](../../../raw/beba569fed61f92d6d54d6581c4fc0701862da6416310218f3ab26c831fd4e92)
  材料版本 `digest-material-beba569fed61f92d6d54d6581c4fc0701862da6416310218f3ab26c831fd4e92@1`；获取方式 `http_full_text`。
  > \[Page 2\] policies to track reference motion clips \[2\] drawn from large motion-capture (mocap) datasets \[1\]. — 原文提取
  > \[Page 4\] (1)Collect data (2)Fit world model (3)Improve policy Replay bufferB Sim πθ gt at+ϵt ot+1 (st,a t+ϵt,ξ) fω LWM (Eq. 1) ˆsj sj ∇ω (s0,a 0:k−1,ξ) fω πθ gt ˆJ(θ) (Eq. — 原文提取
- SuperMimic Official Project Page & Compute Accounting FAQ · UC Berkeley BAIR · SuperMimic · [原站](https://supermimic.github.io/) · [主体档案：BAIR (Berkeley AI Research)](../entities/labs/BAIR%20%28Berkeley%20AI%20Research%29.md) · [本地原件](../../../raw/d95d63b22d9af08a30b5df05b9fc034d1399a561036bcd73298b7c142c1b4fd0)
  材料版本 `digest-material-d95d63b22d9af08a30b5df05b9fc034d1399a561036bcd73298b7c142c1b4fd0@1`；获取方式 `http_full_text`。
  > Humanoid whole-body control, trained with one differentiable world model. — 原文提取
  > SONIC, a state-of-the-art motion tracker, trains for 7 days on 128 GPUs. — 原文提取

归属与范围：已抓取并归档 SuperMimic 19 页 arXiv:2610.28480v3 论文 PDF 全文及官方项目页 supermimic.github.io；穿透核查 SONIC（128 张 L40 GPU 训练 168 小时、约 21,000 GPU-h、611 小时数据）与 SuperMimic（1 张 H100 训练 3 小时超越 0.90 归一化回报，2 张 H100 训练 9.8 小时在 129,514 段 BONES-SEED 264.56 小时动作实现 0 失败）的硬件与数据口径折算，拆解 0.007–0.011 动力学误差稳定性、\>10 倍至 62 倍想象吞吐加速与 ~64 倍步数降幅，并标注仅平地无地形物体交互、129,514 片段仅测训练集覆盖率与省略外力冲击扰动等边界。

来源缺口：

- `pending_verification`：129,514 段动作（BONES-SEED 264.56 小时）上对比 SONIC 的 0 失败（vs 179 失败）测试均为两者的训练集动作且锁定了确定性仿真环境（摩擦 1.0、无观测噪声与域随机化），仅证明动作库记忆覆盖能力而非未见动作泛化能力；另官方尚未开放可复现的完整训练代码仓与多随机种子真机连续稳定性日志。 [线索](https://arxiv.org/abs/2610.28480)
- `unverified_claim`：实体关系入库跳过 (Qiayuan Liao --affiliated\_with--\> BAIR)：谓词 'affiliated\_with' 不允许 from 实体类型 'company'（仅允许 \['person', 'organization'\]）
- `unverified_claim`：实体关系入库跳过 (BAIR --produces--\> SuperMimic)：谓词 'produces' 不允许 to 实体类型 'company'（仅允许 \['product'\]）

[返回赛道总览](../赛道总览.md#digest-86303046c579baa2) · [返回导读索引](README.md) · [主体档案库](../entities/README.md)
