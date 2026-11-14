---
title: "Flow Policy Gradients for Robot Control (FPO++): Likelihood-Free Online RL for Expressive Humanoid & Manipulation Policies (CoRL 2026 Oral · arXiv:2602.02481)"
type: blog_digest
sector: "具身智能"
source: "arXiv:2602.02481 · CoRL 2026 Oral (UC Berkeley / Amazon FAR)"
published_at: "2026-11-11"
raw_sha256: "011ae5ad5185ffad30357a307fe8d3ecd7700d214e23442b61e8de11617d7ca7"
material_version: "digest-material-011ae5ad5185ffad30357a307fe8d3ecd7700d214e23442b61e8de11617d7ca7@1"
origin_url: "https://arxiv.org/abs/2602.02481"
trigger_source: "CoRL 2026 Oral (Amazon FAR / UC Berkeley / Stanford / CMU)"
trigger_url: "https://arxiv.org/abs/2602.02481"
user_comments: ""
status: "needs_cloud"
---

<a id="digest-011ae5ad5185ffad"></a>
# Flow Policy Gradients for Robot Control (FPO++): Likelihood-Free Online RL for Expressive Humanoid & Manipulation Policies (CoRL 2026 Oral · arXiv:2602.02481)

2026-11-11 · arXiv:2602.02481 · CoRL 2026 Oral (UC Berkeley / Amazon FAR) · 待云端同步

[本地原件归档](../../../raw/011ae5ad5185ffad30357a307fe8d3ecd7700d214e23442b61e8de11617d7ca7) · 固定材料版本 `digest-material-011ae5ad5185ffad30357a307fe8d3ecd7700d214e23442b61e8de11617d7ca7@1` · [一手原站](https://arxiv.org/abs/2602.02481)

## 深度拆解与复核

- ==核心结论==：FPO++（*Flow Policy Gradients for Robot Control (FPO++): Likelihood-Free Online RL for Expressive Humanoid & Manipulation Policies*，arXiv:2602.02481，CoRL 2026 Oral，代码仓 github.com/BrentYi/fpo）打通了流匹配（Flow Matching）生成式动作策略的直接在线强化学习（Likelihood-Free Online RL）闭环。其核心不在引入更重型的世界模型，而是在数学层用条件流匹配（CFM）训练损失差值构造 ELBO 代理密度比，彻底绕开连续归一化流（CNF）求解 ODE 雅可比散度积分（Hutchinson 迹估计噪声与跨步反向传播爆炸）的工程死结；再借分样本比率裁剪（Per-Sample Ratio Clipping）与非对称信赖域 ASPO（正优势沿用 PPO 裁剪，负优势切换 SPO 二次恢复惩罚），把原本在复杂机器人任务中极易出现梯度方差爆炸与模式坍缩（Mode Collapse）的 Vanilla FPO 推向稳定收敛，实现四足/人形全身运控（Unitree Go2、Spot、Unitree H1、Unitree G1、Booster T1）从零训练与双臂灵巧操作（Robomimic / DexMimicGen）在线微调。
- 场景与利益标注：本文作者团队覆盖 Amazon FAR（Brent Yi、Hongsuk Choi、Himanshu Gaurav Singh、Xiaoyu Huang、Carmelo Sferrazza、Rocky Duan、Pieter Abbeel、Guanya Shi）、UC Berkeley（Angjoo Kanazawa、Yi Ma）、Stanford（Karen Liu、Takara E. Truong）、CMU 与 HKU，发布于同行评议顶会 CoRL 2026（Oral 口头报告）并开源代码 BrentYi/fpo。研究动机源自高校与产业界研究院共性痛点——VLA 与 Diffusion Policy 已证明流匹配/扩散头在多峰行为克隆上的优势，但业界在真机/仿真后训练环节长期被迫退回单峰对角高斯 PPO 或离线筛选；需注意论文验证集中于仿真（Isaac Lab / Robosuite / DexMimicGen）与运动控制真机零样本迁移（Unitree G1 / Booster T1），多指灵巧手高接触装配任务的真机闭环在线 RL 收敛耗时尚未在公开指标中披露。

### 一、第一性数学瓶颈：为什么 Flow Matching 策略不能直接跑标准 PPO？

1. 高斯 PPO 的表达天花板与 CNF 似然计算的工程死结
   - 标准在线策略梯度算法（如 PPO）依赖可微闭式动作对数似然 $\log \pi_\theta(a|s)$ 来计算重要性采样比率 $r_t(\theta) = \pi_\theta(a_t|s_t) / \pi_{\hat{\theta}}(a_t|s_t)$ 与策略熵正则项。为保证 $\log \pi_\theta$ 可解析求导，传统机器人 RL 几乎被锁死在对角高斯分布（Unimodal Diagonal Gaussian）上——当面对存在对称绕障、双臂协同或欠条件控制目标（Under-conditioned targets，如仅给定骨盆根节点速度而未指定四肢姿态）时，单峰高斯分布被迫在多条合法轨迹间取均值，造成动作抖动或物理失效。
   - 相对地，Flow Matching 与扩散策略通过沿学习速度场 $v_\theta$ 对高斯噪声做多步积分（如 10 步采样），天然能够表征多峰、高度非凸且跨时间步强相关的连续动作块（Action Chunk）。但要按连续归一化流（CNF）公式计算精确对数似然，必须沿整条 ODE 积分路径累计散度（Divergence）积分；工程上只能依赖 Hutchinson 迹估计器近似或穿透多步求解器反向传播，不仅带来高昂算力开销与高方差估计噪声，还极易在多步长程控制中引发梯度爆炸。
   - ✅ 物理与系统复核（本工作台核查）：本工作台核查确认，VLA / WAM 主流基座（如 [GR00T 2](GR00T%202%20Official%20Technical%20Release_%20Scaling%20World-Action%20Models%20on%20402%2C000%20Hours%20of%20Human%20Video%20with%20X-Adapt%20%26.md) 的 Cosmos-Predict2.5-2B 动作头与 π0.5/π0.7 流匹配动作专家）普遍采用 5–10 步离散流积分输出高频动作块；若强行在 RL 阶段做全 ODE 雅可比迹求解，单步更新显存与耗时将成倍放大，无法匹配 Isaac Lab 万级并行环境或真机快速后训练节奏。

### 二、FPO++ 核心机制拆解：无似然 ELBO 代理、分样本裁剪与 ASPO 非对称信赖域

1. 用 CFM 损失差值替代精确密度比（Likelihood-Free Proxy）
   - 基于扩散模型变分下界（ELBO，Kingma & Gao, 2023）与流匹配目标的等价联系，FPO / Flow Policy Optimization 放弃计算精确 $\log \pi_\theta(a|s)$，改为针对同一条采样动作轨迹与状态，分别评估新策略 $\theta$ 与旧策略 $\hat{\theta}$ 的条件流匹配（Conditional Flow Matching, CFM）回归误差 $\mathcal{L}_{\text{CFM}}$，并以指数化损失差构造密度比代理 $\hat{r}_{\theta,\hat{\theta}}$。这一步将原本耦合在多步 ODE 积分路径上的似然求导，彻底降维成无须穿透采样求解器的单步向量场回归对比。
2. 分样本比率裁剪（Per-Sample Ratio Clipping）：砍掉 Vanilla FPO 梯度方差
   - 原文机制：Vanilla FPO 在为单个动作抽取多组流时间与高斯噪声对 $(\tau_i, \epsilon_i)$（$\epsilon_i \sim \mathcal{N}(0, I)$）后，先将 CFM 损失取平均再构造单一比率。作者发现这种先均值后求比的粗糙代理在多轮梯度更新（Multi-epoch updates）后方差剧增，导致训练后期出现渐进式或突发性策略坍缩。FPO++ 在操作任务上固定为每个动作块抽取 $N = 8$ 个蒙特卡洛（Monte Carlo）噪声—时间样本对，为每一个独立样本对 $(\tau_i, \epsilon_i)$ 单独计算并裁剪比率：
     $$\hat{r}_{\theta, \hat{\theta}}^{(i)} = \exp\left(\ell_{\hat{\theta}}^{(i)} - \ell_\theta^{(i)}\right)$$
     从而在噪声—时间微观尺度上施加密集信赖域约束，大幅压低多步流策略的梯度估计方差。
3. 非对称信赖域 ASPO（Asymmetric Simple Policy Optimization）与隐式熵保持
   - 原文机制：标准 PPO 裁剪在比率越界时直接将梯度置零；在多峰流匹配空间中，负优势动作若因截断失去校正信号或被过度压低密度，极易使流场收缩到单一窄模式，丧失探索熵（Entropy Collapse）。FPO++ 提出分段非对称目标 $\psi_{\text{ASPO}}(\hat{r}, \hat{A}_t)$：
     - 正优势样本（$\hat{A}_t \ge 0$）：沿用标准 PPO 双边裁剪 $\min(\hat{r}\hat{A}_t, \text{clip}(\hat{r}, 1-\epsilon, 1+\epsilon)\hat{A}_t)$，稳健放大高回报动作流向；
     - 负优势样本（$\hat{A}_t < 0$）：切换为 SPO（Simple Policy Optimization）二次惩罚目标 $\psi_{\text{SPO}}(\hat{r}, \hat{A}_t) = \hat{r}\hat{A}_t - \frac{|\hat{A}_t|}{2\varepsilon_{\text{clip}}}(\hat{r} - 1)^2$。
   - ⚠️ 机制与口径复核（本工作台核查）：SPO 项的物理作用是提供持续的恢复性梯度（Restorative Gradient），当某条噪声—时间路径的流匹配误差因惩罚负优势而大幅偏离采样后验时，二次惩罚将 $\hat{r}$ 主动拉回 1 并抑制相对采样后验的 KL 散度过度扩张。换言之，FPO++ 并非在损失函数里外挂一个难以精确计算的微分熵 $\mathcal{H}(\pi_\theta)$，而是借由 ASPO 对负优势边界的双向约束隐式保熵。本工作台推断，这种隐式熵保持极度依赖裁剪超参 $\varepsilon_{\text{clip}}$ 与负优势缩放尺度；若切换至极稀疏奖励且正样本比例极低的开放桌面任务，仍需配合演示先验或离线数据混合以防初期探索效率退化。

### 三、定量实验基准与行业路线横向对比（含 π0.7 / GR00T 2 闭环对照）

1. 人形全身追踪与四足移动（Isaac Lab 仿真 + 真机零样本 Sim-to-Real）
   - 实验涵盖四足机器人 Unitree Go2、Boston Dynamics Spot 与人形机器人 Unitree H1、Unitree G1、Booster T1。
   - 欠条件全身追踪定量差距：在关节距离阈值判定的高难度人形全身动作追踪中，当提供全关节条件（Full joint conditioning）时，FPO（96.4%）与高斯 PPO（98.7%）打成平手；但当约束收紧为仅给骨盆指令的欠条件控制（Root-only conditioning）时，高斯 PPO 成功率暴跌至 29.8%，而 FPO 守住 54.3%（绝对高出 +24.5 个百分点，相对提升 82%），实证了多峰流策略在欠定自由度下保持物理协调性的本质优势。
   - 真机 10 步采样零样本迁移：基于仅仿真训练的 FPO++ 策略（采用 10 步流采样，适配 Isaac Lab 的 BeyondMimic 与修改版 HumanoidVerse），成功零样本实机部署到 Unitree G1 全身动作追踪与 Booster T1 速度条件行走控制，且在缩减采样步数后未出现策略退化。
2. 接触操作微调基准（Robomimic & DexMimicGen）
   - 在 Robomimic（基于 Robosuite）的稀疏奖励单臂操作任务上，1,000 回合基线评测起点为：Can 任务 FPO++/Vanilla FPO 初始 BC 成功率 73.76%（对比 DPPO 76.1%、ReinFlow 76.3%）；高精度嵌合 Square 任务初始 BC 成功率 28.62%（对比 DPPO 37.6%、ReinFlow 36.5%）。
   - 在线微调阶段，DPPO 因早期随机 rollout 极难触发稀疏成功奖励而出现明显性能回撤；FPO++（每动作块 $N=8$ 样本）不仅消除了回撤，且在更严苛的 Square 精密插入任务上收敛更快并达到高于 Vanilla FPO、DPPO 与 ReinFlow 的最终成功率，并进一步验证了在 DexMimicGen 图像输入双臂灵巧操作任务上的微调有效性。
3. ✅ 横向技术路线闭环复核（FPO++ vs Physical Intelligence π0.7 vs NVIDIA GR00T 2）

| 技术路线 | 代表工作 | 在线 RL / 后训练机制 | 解决的核心痛点 | 工程局限与与 FPO++ 的互补性 |
| :--- | :--- | :--- | :--- | :--- |
| 端到端流策略在线梯度优化 | FPO++（arXiv:2602.02481，Amazon FAR / UC Berkeley） | CFM 损失差 ELBO 代理 + 分样本裁剪（$N=8$）+ ASPO 非对称信赖域 | 无需对 ODE 求雅可比散度即可直接对多峰流匹配策略做从零训练与在线 RL 微调 | 集中于连续动作头本身优化，未自带跨分钟长程视觉记忆或大规模人类视频预训练主干 |
| 瓶颈表征抽提轻量在线 RL | Physical Intelligence π0.7 / RLT（[导读](Physical%20Intelligence%20Releases%20Pi%20API%20Beta%20%26%20%CF%800.7%20with%20Multi-Scale%20Embodied%20Memory%20%28MEM%29%20for%2010%2B%20Min%20Long-Hori.md)） | 从 Gemma-3 4B VLA 抽提紧凑 RL Token，外挂轻量 Actor-Critic 头真机分钟级微调 | 冻结庞大 VLA 主干保泛化，避开全参数 RL 高显存与遗忘风险 | 仍受限于轻量头本身的分布表达形式，若直接以 FPO++ 优化 π 的流匹配动作专家可避免高斯瓶颈 |
| 大规模人类视频 WAM + 离线奖励过滤 | NVIDIA GR00T 2 / X-Adapt（[导读](GR00T%202%20Official%20Technical%20Release_%20Scaling%20World-Action%20Models%20on%20402%2C000%20Hours%20of%20Human%20Video%20with%20X-Adapt%20%26.md)） | 402,730 小时人类视频掩码流匹配预训练 + FLORA-Rewarder-27B 离线标注 + 50 Hz SONIC 小脑 | 解决 X-Adapt / Ego4WAM 跨本体动作迁移与端侧 124 ms 闭环 | 偏重预训练与少数演示监督微调（5-Shot 95% 依赖预筛选池），S0/S1 在线对抗纠偏可接入 FPO++ 补全 |

   - 本工作台推断：在具身智能分层架构中，FPO++ 既可作为 S0 全身运控小脑（对标或升级 SONIC / BeyondMimic）的无似然多峰 RL 引擎，也能直接嵌入 S1 / S2 跨本体动作专家（如 GR00T 2 / X-Adapt / Ego4WAM 的流匹配解码头），把离线行为克隆或人类视频预训练后的“最后一公里真机/高保真仿真纠偏”变成低方差在线 RL 闭环。

### 观点与可反驳条件

- ==观点==：FPO++ 通过「CFM 损失差 ELBO 代理 + 分样本比率裁剪 + ASPO 非对称信赖域」把连续动作空间的在线强化学习从单峰高斯分布解放至多峰流匹配策略，将成为 S0 欠条件全身运控小脑与 VLA/WAM 流匹配动作头后训练的标准优化原语；其实际工业上限取决于能否与高保真接触物理仿真（或真机安全重置管线）耦合，解决复杂灵巧装配的样本重置成本。
- ==推翻条件==：
  1. 若后续大规模复现（github.com/BrentYi/fpo 及第三方基准）表明，在带真实刚柔接触与多指力控（>15 DoF）的工业插拔/叠衣真机微调中，FPO++（$N=8$）因缺少显式碰撞约束或精确密度梯度而导致真机重置次数超过 1,000 次仍无法收敛到 ≥90% 良率（逊于 π0.7 RLT 或高斯微调残差策略），则其对精细操作主航道的替代判断将被推翻；
  2. 若 1–2 步蒸馏流模型（如 MeanFlow / Consistency Policy）或确定性重参数化策略配合 Q-learning 评论家在 Robomimic Square 与 Unitree G1 欠条件追踪（>54.3%）上无需 CFM 代理比率即可达到同等或更高样本效率与稳定性，则多步 FPO++ 代理梯度框架将退化为过渡方案。

---

## 原文摘录与一手信源存证

> 【信源巡检核心摘要】 CoRL 2026 Oral 报告（Amazon FAR 联合 UC Berkeley、Stanford、CMU、HKU，项目与代码公开于 https://github.com/BrentYi/fpo）。
> — 原文摘录，文字段落 1；证据 `digest-material-011ae5ad5185ffad30357a307fe8d3ecd7700d214e23442b61e8de11617d7ca7-excerpt-1@1`

一手材料：

- Flow Policy Gradients for Robot Control (FPO++): Likelihood-Free Online RL for Expressive Humanoid & Manipulation Policies (CoRL 2026 Oral · arXiv:2602.02481) · CoRL 2026 Oral (Amazon FAR / UC Berkeley / Stanford / CMU) · [原站](https://arxiv.org/abs/2602.02481) · [主体档案：Brent Yi](../entities/people/Brent%20Yi.md) / [主体档案：Hongsuk Choi](../entities/people/Hongsuk%20Choi.md) / [主体档案：Pieter Abbeel](../entities/people/Pieter%20Abbeel.md) · [待上传原件](../../../raw/011ae5ad5185ffad30357a307fe8d3ecd7700d214e23442b61e8de11617d7ca7)
  材料版本 `digest-material-011ae5ad5185ffad30357a307fe8d3ecd7700d214e23442b61e8de11617d7ca7@1`；获取方式 `tg_approved_source_update`。
  > 【信源巡检核心摘要】 CoRL 2026 Oral 报告（Amazon FAR 联合 UC Berkeley、Stanford、CMU、HKU，项目与代码公开于 https://github.com/BrentYi/fpo）。 — 原文提取

归属与范围：CoRL 2026 Oral（arXiv:2602.02481，Amazon FAR × UC Berkeley × Stanford × CMU × HKU）提出 FPO++（Flow Policy Optimization），以条件流匹配（CFM）损失差值的 ELBO 代理绕开 Continuous Normalizing Flows 昂贵的 ODE 散度积分，结合分样本比率裁剪（N=8）与非对称信赖域 ASPO（负优势采用 SPO 惩罚）在保持探索熵的同时抑制多步采样策略坍缩，在欠条件人形全身追踪中将成功率由高斯 PPO 的 29.8% 提升至 54.3%，并在 Robomimic/DexMimicGen 微调与 Unitree G1 / Booster T1 10 步真机零样本迁移上超过 DPPO 与 ReinFlow。

[返回赛道总览](../赛道总览.md#digest-011ae5ad5185ffad) · [返回导读索引](README.md) · [主体档案库](../entities/README.md)
