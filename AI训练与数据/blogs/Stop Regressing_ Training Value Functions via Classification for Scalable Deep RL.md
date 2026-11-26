---
title: "Stop Regressing: Training Value Functions via Classification for Scalable Deep RL"
type: blog_digest
sector: "AI训练与数据"
source: "arXiv:2403.03950 · Stop Regressing"
published_at: "2024-03-06"
raw_sha256: "6541a8fc0fa3b45b66e93c25c0e5e43c4f5099f6121d7b53b471b069fe637113"
material_version: "digest-material-6541a8fc0fa3b45b66e93c25c0e5e43c4f5099f6121d7b53b471b069fe637113@1"
origin_url: "https://arxiv.org/abs/2403.03950v1"
trigger_source: "一手信源"
trigger_url: "https://arxiv.org/abs/2403.03950v1"
user_comments: ""
status: "processed"
primary_topic: "架构、表征与缩放定律"
topic_confidence: 0.9505
---

<a id="digest-6541a8fc0fa3b45b"></a>
# Stop Regressing: Training Value Functions via Classification for Scalable Deep RL

2024-03-06 · arXiv:2403.03950 · Stop Regressing · 已整理

[本地原件归档](../../../raw/6541a8fc0fa3b45b66e93c25c0e5e43c4f5099f6121d7b53b471b069fe637113) · 固定材料版本 `digest-material-6541a8fc0fa3b45b66e93c25c0e5e43c4f5099f6121d7b53b471b069fe637113@1` · [一手原站](https://arxiv.org/abs/2403.03950v1)

## 深度拆解与复核

## 核心结论

==把深度强化学习（RL）价值网络训练从均方误差（MSE）回归重写为 HL-Gauss 分类交叉熵损失（Classification），是解锁 ResNet、SoftMoE 与 Transformer 价值函数参数扩展性的低成本 drop-in 替换方案==；论文在单任务 Atari、多任务 Atari、Wordle、无搜索 Chess 与 Q-Transformer 机器人操作上全面击败 MSE 回归与 Two-Hot 编码，且核心收益源自缓解高噪目标过拟合、提升特征表示秩与对抗非平稳目标下的可塑性丧失。

> 口径与利益披露：本篇为 Google DeepMind 与 Mila 研究团队于 2024-03-06 发布的学术论文（arXiv:2403.03950v1，CC BY 4.0，算力由 Google DeepMind TPU 集群提供）。作者团队集中了 Q-Transformer（Yevgen Chebotar、Quan Vuong、Sergey Levine）与多任务离线 RL/统计评估基准（Aviral Kumar、Rishabh Agarwal、Pablo Samuel Castro）核心提出者，存在对既有自研基线方法家族的延续性偏好；全文实验覆盖游戏、棋类、Wordle 与仿真机器人，未涵盖真实物理真机部署与大语言模型 RLHF/RLVR 线上推理扩展验证。

---

## 一、论文核心事实与机制拆解

### 1. 作者署名与机构核查

✅ 本工作台核查（arXiv:2403.03950v1 首页署名与 Author Contributions）：论文共 12 位作者，共同一作为 Jesse Farebrother（Google DeepMind / Mila, McGill University）与 Rishabh Agarwal（Equal Contribution & Core Contribution，Google DeepMind / Mila, Université de Montréal），其余作者按原顺序为 Jordi Orbay、Quan Vuong、Adrien Ali Taïga、Yevgen Chebotar、Ted Xiao、Alex Irpan、Sergey Levine（以上均为 Google DeepMind）、Pablo Samuel Castro（Google DeepMind / Mila, Université de Montréal）、Aleksandra Faust、Aviral Kumar（Google DeepMind）。Marc G. Bellemare 与 Max Schwarzer 仅列于致谢，并非本论文署名作者。

### 2. Stop Regressing 核心公式：HL-Gauss 分类替代 MSE 回归

传统 DQN 与 CQL 等价值方法用 MSE 拟合标量 Bellman 目标，在扩大网络容量时普遍遭遇性能平台期甚至退化。论文采用 Classification 范式：将区间 [v_min, v_max] 均分为 m 个宽度为 varsigma = (v_max - v_min)/m 的离散中心 z_1 < ... < z_m，网络输出 m 维 logits 经 softmax 得到概率 p_hat_i(s,a;theta)，期望价值恢复为 Q(s,a;theta) = sum(p_hat_i * z_i)，并以分类交叉熵 TD_CE(theta) = E[-sum(p_i * log p_hat_i)] 训练（Scalable Deep RL）。

三种目标概率构造方案对比如下：

| 目标构造方法 | 分布构造机制 | 超参数与默认值 | 对 MSE 的实测表现 |
| --- | --- | --- | --- |
| Two-Hot (Schrittwieser et al., 2020) | 仅将标量目标线性插值至最近邻 2 个 bin | m=51 bins（无平滑） | 离线长训更稳，但在线 60 款 Atari 均值劣于 MSE |
| HL-Gauss (Imani & White, 2018) | 假设目标服从正态分布 N(mu=y, sigma^2)，用 erf 计算各 bin 区间积分概率并归一化 | 默认平滑比 sigma/varsigma = 0.75（约覆盖 6 个邻近 bin），Atari m=51、区间 [-10, 10]；Chess m=128、区间 [0, 1] | 在线、离线与大模型扩展全部最优，单专家即压倒多专家 MSE |
| C51 / CDRL (Bellemare et al., 2017) | 通过随机分布式 Bellman 算子直接对回报分布投影 | m=51 bins，区间 [-10, 10] | 显著优于 MSE，但略逊于非分布式的 HL-Gauss |

### 3. 全基准定量结果与缩放曲线

论文在 Atari 2600、SoftMoE、ResNet 多任务、Wordle、Chess 与 Q-Transformer 机器人操作给出对照实验：

| 基准任务与模型规模 | 实验设置与样本量 | HL-Gauss 相对基线增益 | 关键对照结论 |
| --- | --- | --- | --- |
| 单任务在线 Atari (60 款游戏) | DQN+Adam，200M frames，5 seeds，sticky action 0.25，gamma=0.99，batch 32，replay 1M | 约 3/4 游戏击败 MSE；1/2 游戏高出至少 10% | 即使不建模完整回报分布，HL-Gauss IQM 仍高于 C51；Two-Hot 低于 MSE |
| 单任务离线 Atari (17 款游戏) | CQL + 10% DQN 回放数据集，6.25M gradient steps，3 seeds | 稳定显著高于 MSE 与 Two-Hot，且高出 C51 | MSE 在长步数训练后发生性能衰退，交叉熵家族保持单调稳定 |
| SoftMoE 单任务 Atari (20 款游戏) | Impala-ResNet 倒数第二层替换为 SoftMoE（1/2/4/8 experts），5 seeds | 跨全部专家数对 MSE 保持约 30% IQM 增益 | 单专家 HL-Gauss 即超越 1 至 8 专家全部 MSE 配置 |
| 多任务在线 Atari IMPALA (63 变体 Asteroids / 29 变体 Space Invaders) | IMPALA Actor-Critic，15B frames，5 seeds，Impala-CNN (<=2M) 扩至 ResNet-101 (44M) | 多任务 ResNet-101 相对 MSE 达 1.8x–2.1x 提升 | 超过 ResNet-18 后 MSE 在 1300M frames 后明显崩塌，HL-Gauss 持续上升 |
| 多游戏离线 Atari (40 款游戏并行) | ResNet-34/50/101（最高 80M 参数），1 seed | 相比 ResNet-101 既有最佳 C51 基线提升约 45% IQM | MSE 在 ResNet-34 之后停滞，HL-Gauss 随参数上升速率快于 C51 |
| 语言智能体 Wordle (离线 RL) | 125M 参数 GPT 解码器 Transformer，20K gradient steps，CQL 行为正则 0.1 | 单步猜词成功率相对 MSE 提升 40% | 在多档行为正则系数下稳定压制 MSE |
| 无搜索 Chess 蒸馏 (10M 局 / 15B 样本) | Stockfish 16 Q 值蒸馏，9M/137M/270M Causal Transformer，10,000 Lichess 谜题 | 270M 模型相对 1-Hot 基线缩小与 Stockfish 差距 70% | 接近 400 次 MCTS 搜索的 AlphaZero（因 1-Hot 已胜过 MSE，基线取 1-Hot） |
| 仿真 7-DoF 机器人抓取 (17 种厨房物体) | 500,000 回合离线数据（源自 40,000 人工遥操作+噪声），60M Q-Transformer，RetinaGAN 域迁移 | 峰值成功率相对 MSE 提升 67% | 样本效率显著提高，缩短收敛步数 |

⚠️ 本工作台核查（基准边界与常见误引校正）：全文并未测试 DeepMind Control Suite（DMC）连续控制基准；Wordle（125M）与机器人操作（60M Q-Transformer）均为离线设定，且 Chess 属于监督 Q 值蒸馏而非自主闭环 TD 迭代，因此 Chess 的 70% 增益无法直接外推为在线自举稳定性证明。

---

## 二、机制归因与消融实验：为什么分类交叉熵有效？

论文在 §5 剥离了表示形式与优化目标，给出四组决定性消融证据：

1. **Softmax 参数化不是主因**：将 Value Functions 输出改为带 softmax 的期望标量但仍用 MSE 训练（MSE+Softmax），在在线与离线 Atari 上均无实质增益，证明决定性因素是交叉熵损失梯度而非输出有界性。
2. **序数几何归纳偏置**：在 13 款 Atari 游戏上交叉扫描 bin 数量 m in {21, 51, 101, 201} 与 sigma/varsigma in {0.25, 0.5, 0.75, 1.0, 2.0}，宽范围 sigma 均战胜无平滑的 Two-Hot，且最优物理尺度 sigma 独立于 bin 宽度 varsigma——说明 HL-Gauss 利用了连续标量空间的序数邻域结构，而非单纯的分类标签平滑防过拟合。
3. **随机性与高噪目标鲁棒性**：在离线奖励中加入均匀噪声 eta in {0.1, 0.3, 1.0} 时，HL-Gauss 退化幅度远缓于 MSE；一旦关闭在线 Atari 的 25% sticky actions（变为确定性环境），HL-Gauss 与 MSE 性能基本持平（均高于 C51）。这证明交叉熵在真实随机动力学或具身延迟场景下的抗噪优势。
4. **表征秩与非平稳可塑性**：在 200M 帧 Atari 冻结倒数第二层特征上做线性探测（linear probing），HL-Gauss 取得最低 optimality gap（不同于 Imani & White 2018 在纯监督回归中未发现特征增益）。在 CIFAR-10 高频合成非平稳目标 y = sin(10^5 f(x)) + b（b 依次递增为 0, 8, 16, 24, 32，每阶段 5,000 步、batch 512、Adam lr=1e-3、[-40, 40] 设 101 bins、30 seeds）上，L2 回归随目标幅值上移快速丧失可塑性，HL-Gauss 维持收敛稳定；而把离线 Q-learning 换成固定策略的离线 SARSA 后，HL-Gauss 相对 MSE 的大部分优势消失，坐实其核心增益在于缓解 TD 自举目标的非平稳漂移。

✅ 本工作台核查（与实现代码一致性）：论文附录 A 给出的 JAX 与 PyTorch 参考实现 `HLGaussLoss` 均以 `erf` 计算相邻边界 CDF 差值并除以总区间质量 z，不依赖复杂调度器，工程改造仅涉及 Critic 输出头与损失函数两处，学习率需从 MSE 的 6.25e-5 调回 C51 默认的 0.00025。

==本工作台推断==：对当前 LLM RL 后训练（PPO/Actor-Critic Critic）与 VLA 自回归价值模型（如 Q-Transformer 及连续控制离散化方案）而言，Scalable Deep RL 的瓶颈往往不在策略梯度而在 Critic 的非平稳自举与高方差奖励过拟合。将 Critic 标量回归头替换为 HL-Gauss（64–128 bins、sigma/varsigma=0.75）几乎是零额外算力成本的结构性升级；但工程落地有一个硬前置条件——训练前必须准确估计或动态重标定 [v_min, v_max] 边界，一旦实际回报越界截断，softmax 期望将引入系统性低估偏差。

---

### 观点与可反驳条件

- ==观点==：HL-Gauss 交叉熵替代 MSE 是目前可扩展价值型 RL（含 ResNet、MoE 与 Transformer Critic）性价比最高的基础损失改进，其本质是通过序数局部平滑与有界交叉熵梯度阻断 TD 非平稳自举引发的可塑性坍塌，而非依赖分布式回报建模本身。
- ==推翻条件==：
  - ① 在百亿参数级 LLM RLHF/RLVR 或真实真机 VLA 长程任务上做对照消融，若采用 HL-Gauss Critic（m=51..128, sigma/varsigma=0.75）相对带值归一化（如 PopArt/Syinh）的 Huber/MSE Critic 在策略最终通过率或成功率上提升不足 3% 且无法稳定缩放至更高参数规模，则该方案对大模型后训练的泛化价值被推翻。
  - ② 当任务回报量纲在训练中动态跨越数个数量级且预设 [v_min, v_max] 无法事先锁定（非归一化稀疏长程奖励）时，若 HL-Gauss 因边界截断或 bin 分辨率不足导致价值估计偏差大于自适应缩放回归基线，则「零成本即插即用替代」前提被推翻。
  - ③ 若在固定策略（无 argmax 策略漂移）且确定性动力学任务中，经过相同学习率与 Adam epsilon 调优的 MSE 持续追平或反超 HL-Gauss，则说明其增益边界仅限于强随机性与高非平稳 TD 场景。

---

## 原文摘录与一手信源存证

> Value functions are a central component of deep reinforcement learning (RL). These functions, parameterized by neural networks, are trained using a mean squared error regression objective to match bootstrapped target values.
> — 原文摘录，文字段落 1；证据 `digest-material-6541a8fc0fa3b45b66e93c25c0e5e43c4f5099f6121d7b53b471b069fe637113-excerpt-1@2`

一手材料：

- Stop Regressing: Training Value Functions via Classification for Scalable Deep RL · Google DeepMind & Mila (arXiv:2403.03950v1) · [原站](https://arxiv.org/abs/2403.03950v1) · [主体档案：Google DeepMind](../entities/labs/Google%20DeepMind.md) · [本地原件](../../../raw/7bf054ca1af38487fc83addc9196aad624576861c026bb418c77b6cf445de4e2)
  材料版本 `digest-material-7bf054ca1af38487fc83addc9196aad624576861c026bb418c77b6cf445de4e2@1`；获取方式 `arxiv_html_full_text`。
  > Ablation Study: What Components of Classification Losses Matter? — 原文提取
  > Are Categorical Representations More Performant? — 原文提取

归属与范围：已读取 arXiv:2403.03950v1 完整论文文本，核对 12 位署名作者与机构、HL-Gauss 公式及误差函数实现、Atari/SoftMoE/IMPALA ResNet/Wordle/Chess/Q-Transformer 全量实验数据及 §5 消融诊断；并校正了外部对作者名单与 DMC 基准的常见误引。

[返回赛道总览](../赛道总览.md#digest-6541a8fc0fa3b45b) · [返回导读索引](README.md) · [主体档案库](../entities/README.md)
