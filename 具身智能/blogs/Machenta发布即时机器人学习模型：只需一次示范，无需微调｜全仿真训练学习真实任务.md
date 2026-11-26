---
title: "Machenta发布即时机器人学习模型：只需一次示范，无需微调｜全仿真训练学习真实任务"
type: blog_digest
sector: "具身智能"
source: "Machenta"
published_at: "2026-10-27"
raw_sha256: "92862c9a2f7a80672429208c4878de5a06c72ef76e794e61901f0a05f840f9d5"
material_version: "digest-material-92862c9a2f7a80672429208c4878de5a06c72ef76e794e61901f0a05f840f9d5@1"
origin_url: "https://machenta.com/blog/instant-robot-learning"
trigger_source: "SourceMind"
trigger_url: "https://mp.weixin.qq.com/s/CPkD7U0MBilKkL6lkKIWpg"
user_comments: "这篇mechenta的工程文不错哦"
status: "processed_with_gaps"
primary_topic: "模型与策略架构"
topic_confidence: 0.7955
---

<a id="digest-92862c9a2f7a8067"></a>
# Machenta发布即时机器人学习模型：只需一次示范，无需微调｜全仿真训练学习真实任务

2026-10-27 · Machenta · 有来源缺口

[本地原件归档](../../../raw/92862c9a2f7a80672429208c4878de5a06c72ef76e794e61901f0a05f840f9d5) · 固定材料版本 `digest-material-92862c9a2f7a80672429208c4878de5a06c72ef76e794e61901f0a05f840f9d5@1` · [一手原站](https://machenta.com/blog/instant-robot-learning) · [触发线索（SourceMind）](https://mp.weixin.qq.com/s/CPkD7U0MBilKkL6lkKIWpg)

> [!IMPORTANT]
> 用户关注点（TG）：这篇mechenta的工程文不错哦

## 针对性追查与回应

### 口径与利益披露（主体纠正）

本工作台核查一手来源（Machenta Blog 原文 Introducing Instant Robot Learning、Team 页面、Creandum 投资笔记及 USV 投资备忘录）：这篇由 SourceMind 转述的发布文属于 Machenta 结束隐身期配合 \$40M 种子轮官宣的技术公关稿，立场核心是为「全仿真元学习」路线确立差异化并吸引算力/人才与客户关注（Creandum 与 USV 为本轮联合领投方，存在直接利益绑定）。

❌ 主体国籍核查纠正：SourceMind 首段将其误写为「美国机器人公司」，经核查 Machenta Team 页与 Creandum 文本（Kathi_Wilhelm 明确提及团队驻扎在伦敦 King's Cross），Machenta 实为总部位于英国伦敦的机器人基础模型公司，由帝国理工学院 Robot Learning Lab 教授 Edward Johns（CEO，前 Dyson 机器人学习负责人）与博士生 Vitalis Vosylius（CTO，已加入 Machenta 的还有原实验室全部五篇核心论文作者及来自 DeepMind、Dyson、Huawei、Stability AI 的研究者）联合创立。

### 工程机制深度拆解：VDA 如何绕开 VLA 后训练并跨越 Sim-to-Real

1. 从「权重记忆任务」到「权重学会如何学习」（VLA vs VDA）

传统 Vision-Language-Action（VLA）模型以图像和语言指令为条件预测动作，但预训练数据在无限的物体、构型与环境空间中分布稀疏，部署新任务通常仍需耗时数天至数周采集密集真实世界示范做后训练（post-training）。

Machenta 的 VDA（Vision-Demo-Action）架构用单次任务示范替代语言作为任务描述：训练阶段构建同时覆盖跨任务（inter-task）与任务内（intra-task）变化的仿真数据集，将权重优化目标由「学会某项特定任务」切换为「学会如何从示范中学习新任务」的元学习（meta-learning）目标。测试阶段，模型只需把单次真实示范与连续实时图像流同时作为输入，以端到端闭环方式直接预测动作。与 Rhoda AI（Direct Video Action）、Generalist（GEN-1.5）、Skild AI（S1）通过扩大真实世界数据采集规模来实现上下文学习不同，Machenta 押注以纯仿真承担全部训练尺度，将真实数据压缩到测试时的那一次示教。

2. 从学术前作（CoRL 2023 / ICLR 2025 Oral / Science Robotics）到商业 VDA 的技术谱系透视

本工作台核查团队过去 6 年的帝国理工学术谱系，揭示了商业文未明说的底层工程演进：
- Implicit Graph Alignment（CoRL 2023）：将少样本模仿学习建模为物体局部点云的异构图条件对齐与能量模型推理优化。
- Instant Policy（ICLR 2025 Oral, arXiv:2411.12633）：Machenta CTO 为第一作者，提出==异构图（heterogeneous graph）+ 图扩散模型（graph diffusion）+ 程序化伪示范（pseudo-demonstrations）==三大支柱。该论文将历史示范（N=2 条示范，各 L=10 个路标点）、当前观测点云（FPS 采样 + PointNet++ Set Abstraction + 隐式占据网络局部特征）与未来 T=8 步动作（解耦平移流与旋转流的 SE(3) 夹爪位姿增量及二值开闭）统一进线性可扩展的异构图，利用 ShapeNet 物体生成约 700K 条无需严格动力学对齐的伪示范（训练 2.5M 步），经 DDIM 2–4 步去噪并用 SVD 提取 SE(3) 变换执行闭环控制。在 RLBench 24 项任务上，纯伪示范（PD only）平均成功率达到 71%（对比同参数量点云版 BC-Z* 的 36%、Vid2Robot* 的 38%、GPT2* 的 34%），实机 Sawyer 双 RealSense D415 相机 16 项日常任务平均达到 88.75%。
- Learning a Thousand Tasks in a Day（MT3，Science Robotics 2025 年 11 月封面）：以对齐-交互两阶段解耦与检索策略在 17 小时（<24 小时）内单人示教 1000 项任务（覆盖 31 类宏技能、402 件物体，累计 5650 次真机验证），并验证了「检索/上下文引导」在分布外失败时比纯行为克隆更不易失控。

⚠️ 演进黑盒与「零真实像素」口径核查：在 ICLR 2025 论文 Instant Policy 中，为处理真实相机下 SAM 与 XMem++ 分割噪声及点云残缺，实机评测模型实际上用 5 个非评测任务各 5 条真机示范共微调了 100K 步；而 Machenta 2026 年 10 月博客宣称商业版 VDA「完全在仿真中训练，没有使用哪怕一个像素的真实世界训练数据」，且观测输入从点云+分割掩码转向「直接从图像端到端预测」，跨度涵括 6 种机器人本体、4 种示教方式（主从遥操 leader-follower、VR 控制器、拖动示教、人手直接示教）。本工作台推断，团队可能用全仿真图像/多视角几何表征替代了外部 SAM/XMem++ 管道，但官博未披露 VDA 具体网络参数（论文消融从 69M 升至 117M 收益明显、178M 趋于饱和提示数据多样性瓶颈）、控制频率（Hz）、动作空间以及是否存在未披露的视觉骨干预训练（如开源 VFM 权重），该项黑盒仍待论文或技术报告证实。

3. Sim-to-Real 机制重构与 Physical Vibe Coding 工程红利

传统单任务仿真 RL/IL 易因摩擦系数、相机内参或接触刚度偏差而产生 Sim-to-Real Gap，因为策略把特定仿真器的隐含属性写进了权重。VDA 将仿真用作「任务学习函数」的采样空间，在极度随机化的物体、构型、环境、示教者与本体中训练；测试时，==上下文示范与实时视觉观测同源来自同一真实物理环境==，模型只需对齐示范与现实观测的相对变换即可，现实退化为众多待适应环境中的一个样本。

由此衍生出四种高工程价值的交互式提示用法，使现场部署从「数周集成」压缩为类似视频中「1 人 2 分钟配置 3 台异构机器人协作装配线」：
- 可引导性（Steerability）：同一组物体通过改变示范即可触发 3 种截然不同的操作行为，直接证伪模型对预训练任务过拟合。
- 提示消歧（Clarifying through Prompt Engineering）：单次示范把物体放入小黑盒存在「小 vs 黑色」语义歧义时，追加示范即可实时收窄意图边界（与 Instant Policy 跨几何泛化实验 N=1→4 成功率由 40% 升至 90% 的机制一致）。
- 分段拼接（Demo Stitching）：长时程任务拆分为子示范分段检查后拼接，降低单次完美示教难度并缓解马尔可夫短程误差。
- 物理提示迭代（Physical Vibe Coding）：如鞋盒紧密装箱案例，平行夹爪受单臂自由度限制无法直接翻转鞋子，工程人员通过「示教→观察→修改物理提示」快速迭代出双臂两次交接翻转策略。

### 实证边界、压力测试复核与三层 Bitter Lesson 赌注

✅ 1 小时压力测试与失败归因一致性核查：博客公开的 28 段演示中，周末连续 1 小时自复位压力测试结果为积木入碗 74/74（100%）、螺丝刀双臂交接 78/78（100%）、瓶子直立放置 97/99（97.98%）。团队坦承瓶子任务 0:46 与 0:52 的两次失败源于「潜在碰撞与运动学限制」。本工作台核查对照 Instant Policy 原文第 5 节 Limitations，作者曾明确列出四大物理瓶颈：短时程马尔可夫假设、对示范下采样敏感、缺乏全身碰撞避障、以及无法满足极低公差或强接触动力学（rich contact dynamics）精度要求。本次 2/99 失败原因与论文自述瓶颈完全吻合——==当前 VDA 强于刚体抓取、交接与空间重排，尚未证明能在精密插拔、高力控或形变体长程装配中达到工业级良率==。

✅ 投资方现场盲测证词核查：Creandum（Kathi_Wilhelm）披露其自带未见过的品牌帽子、纸卷与招财猫赴伦敦实验室，现场单次示教后即使挪动物体位置仍一次执行成功，USV（Rebecca Kaden）亦在投资备忘录发出公开现场测试邀请。这类一手盲测大幅降低了「视频精选剪辑」的造假概率，但仍属于小样本定性验证，不等同于跨任务标准 Benchmark 的定量胜率。

✅ 三层「苦涩的教训」（Bitter Lesson）算力杠杆：参照 Rich Sutton（IncIdeas/BitterLesson）原则，Machenta 试图同时在「用算力从数据学习智能」「用算力学习如何学习」「用算力生成无限仿真世界」三个层面做全栈扩展。相比受限于人类遥操员人力与真机折旧的竞争对手，纯仿真路线一旦突破仿真多样性瓶颈，边际数据成本将显著低于真实世界采集，但前期成败高度取决于仿真生成器能否覆盖真实世界的接触与遮挡复杂度。

### 观点与可反驳条件

- ==观点==：Machenta 的 VDA 路线是具身智能领域极少数在第一性原理上绕开「每任务采集千条真机数据」成本陷阱的方案，其以「纯仿真元学习 + 上下文一次示教对齐物理环境」的架构已在跨本体与桌面非精密操作中展现出可信的涌现泛化；但截至目前，该模型仍停留在「无力控/中低公差刚体操作 + 未知真机零微调细节」的早期实验室验证阶段，距离取代工业精密场景的传统示教编程尚有关键物理精度门槛待跨。
- ==推翻条件==：
  1. 精密接触与工业良率证伪：若 Machenta 在未来 12 个月（至 2027-10）内无法发布第三方可复现的工业基准评测，或在微米/毫米级低公差插接（如线束端子、齿轮装配）及富含接触力控任务上连续 1000 次运行成功率低于 95%，则说明纯视觉上下文模仿学习在无触觉/力反馈条件下存在结构性天花板。
  2. 真实数据零依赖证伪与竞争追平：若后续技术报告披露 VDA 实机高成功率仍强依赖特定机器人本体/相机域内的真实数据微调，或依赖真实视频大规模预训练的对手（如 Rhoda AI、Generalist、Skild AI）在未见物体单次示教泛化上以更低端到端部署成本实现反超，则 Machenta「全仿真元学习」的护城河将被明显削弱。
  3. 算力缩放饱和证伪：如同 Instant Policy 在 178M 参数量时即出现由仿真多样性不足引发的性能平台期，若 Machenta 在消耗本轮 \$40M 种子轮算力扩张仿真环境后，多阶段长时程（大于 5 个连续子任务）复杂操作的单次示教成功率仍无法突破 80%，则表明程序化伪示范分布无法充分逼近真实物理交互流形。

---

## 原文摘录与一手信源存证

> 刚刚，美国机器人公司 Machenta 结束隐身研发，公布全新的完全用仿真数据训练的基础模型。团队称，机器人只需接收一次任务示范，就能立即执行新任务，无需进一步微调模型。
> — 原文摘录，PDF p.1；证据 `digest-material-92862c9a2f7a80672429208c4878de5a06c72ef76e794e61901f0a05f840f9d5-excerpt-1@1`

> 为什么重要： Machenta 同时宣布完成 4000 万美元种子轮融资，由 Creandum 与 USV联合领投。这家公司瞄准的是机器人部署中反复采集数据、训练模型的时间与成本：如果换任务只需重新示范，频繁调整作业流程的自动化就有望更划算。
> — 原文摘录，PDF p.1；证据 `digest-material-92862c9a2f7a80672429208c4878de5a06c72ef76e794e61901f0a05f840f9d5-excerpt-2@1`

一手材料：

- Introducing Instant Robot Learning | Machenta · Machenta · [原站](https://machenta.com/blog/instant-robot-learning) · [主体档案：Machenta](../entities/companies/Machenta.md) · [NotebookLM](https://notebook.google.com/notebook/cac99041-d3b9-449e-a192-12bb4b1ad391) · [Drive](https://drive.google.com/file/d/1b8Q5zc_YQQFAQDmF3FThj4mcv1ZOMWqZ/view?usp=drivesdk)
  材料版本 `digest-material-80508e12068285913bd81f99bd4cc99d50a141517eaf28cd88795c629747ea45@5`；获取方式 `notebooklm_indexed_text`。
  > without a single pixel of real-world training data. — 原文提取
  > Intelligence is not about what you can already do. It's about how quickly you can learn to do something new. — 原文提取
- Backing Machenta: the era of Instant Robot Learning · Creandum · [原站](https://creandum.com/stories/backing-machenta/) · [主体档案：Creandum](../entities/funds/Creandum.md) / [主体档案：Kathi Wilhelm](../entities/companies/Kathi%20Wilhelm.md) · [NotebookLM](https://notebook.google.com/notebook/cac99041-d3b9-449e-a192-12bb4b1ad391) · [Drive](https://drive.google.com/file/d/11yFF-t1QBeLzapsYKNE3SSzxIilxbvVB/view?usp=drivesdk)
  材料版本 `digest-material-4c0f11c1c2453ab272964732b066d516d7d2940c7974fee0461fb998e5ac226f@2`；获取方式 `notebooklm_indexed_text`。
  > We never expected Creandum caps to become a diligence tool. — 原文提取
  > When we visited Machenta's lab earlier this year, we got impressive demos. But the real test was bringing our own tasks to see how the robot would react to items it hadn't seen before. — 原文提取

归属与范围：SourceMind（https://mp.weixin.qq.com/s/CPkD7U0MBilKkL6lkKIWpg）完整编译自 Machenta 首发博客 Introducing Instant Robot Learning（Machenta Blog）。已穿透核验 Machenta 团队页（machenta.com/team）、USV 投资备忘录、Creandum 投资笔记（creandum.com/stories/backing-machenta/），以及直系学术前作 Instant Policy（arXiv:2411.12633v2, ICLR 2025 Oral）与 Learning a Thousand Tasks in a Day（MT3, Science Robotics）原文，纠正转述稿中的地理错误并补全底层技术机制与工程边界核查。

来源缺口：

- `not_disclosed`：商业版 VDA 未公开网络主干架构、参数规模、控制频率（Hz）、动作空间定义，以及是否仍像前作 Instant Policy（arXiv:2411.12633）一样存在接触动力学与高精度公差限制。 [线索](https://machenta.com/blog/instant-robot-learning)
- `pending_verification`：28 段未剪辑演示及 1 小时自复位压力测试均由团队自测发布，尚无第三方独立基准对比（与 Rhoda AI、Generalist GEN-1.5、Skild AI S1 同台评测数据缺失）。 [线索](https://machenta.com/blog/instant-robot-learning)

[返回赛道总览](../赛道总览.md#digest-92862c9a2f7a8067) · [返回导读索引](README.md) · [主体档案库](../entities/README.md)
