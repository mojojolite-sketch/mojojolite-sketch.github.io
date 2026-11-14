---
title: "不靠堆砌数据，让机器人看懂真实物理世界 | 招商局狮子山人工智能实验室发布「驭物™ Lion-ER-35B-A3B」具身推理模型"
type: blog_digest
sector: "具身智能"
source: "招商局狮子山实验室 · HuggingFace Lion-ER"
published_at: "2026-11-04"
raw_sha256: "37c78e5bb251da44a5c5206d08753f6d0d21e6c6e7f1ffd8d8ba3efd83bda85f"
material_version: "digest-material-37c78e5bb251da44a5c5206d08753f6d0d21e6c6e7f1ffd8d8ba3efd83bda85f@1"
origin_url: "https://huggingface.co/cmriat/lion-ER-35B-A3B"
trigger_source: "量子位"
trigger_url: "https://mp.weixin.qq.com/s/CcjW1ex5OUFP9X2yVPSQxQ"
user_comments: "已有研究表明，在既有机器人数据集内，仅调整不同数据域的训练权重，就能明显影响下游任务表现。围绕模型需要掌握的能力做正向设计，再依靠评测发现短板，闭环迭代优化数据。听起来有点太理想了，是真的吗？"
status: "processed_with_gaps"
---

<a id="digest-37c78e5bb251da44"></a>
# 不靠堆砌数据，让机器人看懂真实物理世界 | 招商局狮子山人工智能实验室发布「驭物™ Lion-ER-35B-A3B」具身推理模型

2026-11-04 · 招商局狮子山实验室 · HuggingFace Lion-ER · 有来源缺口

[本地原件归档](../../../raw/37c78e5bb251da44a5c5206d08753f6d0d21e6c6e7f1ffd8d8ba3efd83bda85f) · 固定材料版本 `digest-material-37c78e5bb251da44a5c5206d08753f6d0d21e6c6e7f1ffd8d8ba3efd83bda85f@1` · [一手原站](https://huggingface.co/cmriat/lion-ER-35B-A3B) · [触发线索（量子位）](https://mp.weixin.qq.com/s/CcjW1ex5OUFP9X2yVPSQxQ)

> [!IMPORTANT]
> 用户关注点（TG）：已有研究表明，在既有机器人数据集内，仅调整不同数据域的训练权重，就能明显影响下游任务表现。围绕模型需要掌握的能力做正向设计，再依靠评测发现短板，闭环迭代优化数据。听起来有点太理想了，是真的吗？

## 针对性追查与回应

### 一句话核心结论（先给底牌）

- 前半句（「在既有机器人数据集内，仅调整不同数据域的训练权重，就能明显影响下游任务表现」）——100% 是真的！ 斯坦福 Dorsa Sadigh 团队的 Re-Mix (arXiv:2408.14037)、UC Berkeley 的 Octo (arXiv:2405.12213) 与 OpenVLA (arXiv:2406.09246) 均有硬核真机实证：在不增加一条新轨迹的前提下，仅靠重调不同子数据集的采样权重，真机操作成功率就能拉开 +23% 至 +40% 的巨大差距。
- 后半句（「围绕能力做正向设计 $\rightarrow$ 依靠评测发现短板 $\rightarrow$ 闭环迭代优化数据」）——你的直觉极其毒辣！ 这套闭环在「离线看图做题（Embodied VQA，即本文 Lion-ER-35B-A3B 所在的视觉语言感知推理层）」里确实跑得通（本质是面向评测集的数据配比与错题本工程）；但一旦跨入「真机物理控制层（Motor Policy / VLA 动作控制）」，就会立刻撞上「离线评测失真、零支撑集死穴（$0 \times w = 0$）、小参数能力跷跷板」三堵铁墙，绝不像宣传稿写得那样丝滑理想！

---

### 一、前半句核查：为什么「不加新数据、只调数据域权重」真能大幅改变机器人表现？（附四大一手论文实证）

文中写到：“已有研究表明，在既有机器人数据集内，仅调整不同数据域的训练权重，就能明显影响下游任务表现。” 这句话在学术界有扎实的一手文献支撑：

| 一手文献与机构 | 实验数据集与配比调整方法 | 真机 / 下游评测定量提升幅度 | 核心发现与物理机制 |
| :--- | :--- | :--- | :--- |
| 1. Re-Mix<br/>([arXiv:2408.14037](https://arxiv.org/abs/2408.14037), CoRL 2024)<br/>Stanford ILIAD (Joey Hejna, Karl Pertsch, Dorsa Sadigh) & UC Berkeley | 在 BridgeData V2 与 Open X-Embodiment (OXE / RT-X) 上，用分布鲁棒优化（Group DRO + 动作归一化/离散化/早停）自动优化各数据域采样权重 | • 比均匀采样权重（Uniform）真机成功率平均提升 +38%–40%<br/>• 比人类专家手调权重提升 +32%<br/>• 裁剪至 25% 数据量时：Re-Mix 成功率 82.5% vs 人类专家权重 52.5% vs 均匀权重 37.5% | 证明开源机器人数据集内部质量与信息密度极度不均，通过 minimax 优化抬高高信息域权重，仅用 1/4 数据就能保住 97.5% 性能 |
| 2. Octo<br/>([arXiv:2405.12213](https://arxiv.org/abs/2405.12213), RSS 2024)<br/>UC Berkeley / Stanford / CMU 等（本库已归档） | 从 OXE 筛选 25 个子数据集（80万轨迹），剔除高重复/低清数据后，手工将“高多样性域”采样权重翻倍（$2\times$）并压低重复域（Fractal/Kuka/Bridge 各占 17.0%，BC-Z 9.1% 等） | WidowX 40 次真机测试（Table II & VI）：<br/>• 25 数据集加权配比：83%<br/>• 未精细配比的 RT-X 11 数据集混合：60%（仅靠筛选与配比提升 +23 pct）<br/>• 单机 Bridge 数据集：43% | 证明如不人工下调重复桌面抓放数据的权重，Transformer 策略的梯度会被低熵高频动作完全统治 |
| 3. OpenVLA<br/>([arXiv:2406.09246](https://arxiv.org/abs/2406.09246), CoRL 2024)<br/>Stanford / Berkeley / TRI（本库已归档） | 在 97 万条 OXE 27 数据集配比（Table 3）中，初始给明星数据集 DROID 分配 10.0% 权重；但在训练最后 1/3 阶段直接将 DROID 权重砍为 0% 并重分配给其余数据集 | • WidowX 8 任务 80 次测试（Table 9）：完整加权 OpenX 配比成功率 76.3% vs 仅用 BridgeData V2 45.6%（+30.7 pct）<br/>• 砍掉拖慢收敛的 DROID 后策略精度显著恢复 | 揭示了异构本体数据之间存在强烈的负迁移（Negative Transfer）：哪怕是高质量大数据集（DROID），配比不当也会拖垮目标本体收敛 |
| 4. Cambrian-1<br/>([arXiv:2406.16860](https://arxiv.org/abs/2406.16860), NeurIPS 2024)<br/>NYU VisionX (Yann LeCun, Saining Xie 等) | 从 1,000 万条多模态指令池（Cambrian-10M）出发，重调通用 VQA、OCR、空间感知配比并过滤至 700 万条（Cambrian-7M） | 700 万条精选均衡配比（Cambrian-7M）全面击败 1,000 万条原始池（Cambrian-10M），尤其在 2D/3D 空间基准 CV-Bench 上显著领先 | 证明无约束堆砌高频数据（如 OCR）会严重挤压 3D 空间几何表征容量，“少而均衡”胜过“多而偏科” |

💡 第一性原理：为什么调权重这么管用？
因为真实采集的开源具身/视觉数据集存在严重的*“长尾偏科与梯度霸权（Gradient Dominance）”*——80% 以上的样本是极其简单的静态识别或重复桌面平推，真正包含跨视角相机旋转、遮挡深度排序、任务失败边界的高信息量样本不足 5%。如果按原始数据量自然采样，梯度更新方向会被简单多数派完全绑架；拉高稀缺能力域的采样权重，本质上是在不增加硬件采集成本的前提下，强行重塑经验风险最小化（ERM）的目标分布，把存量数据长尾里的边际信息榨干。

---

### 二、后半句深度解剖：为什么你觉得「正向设计能力 $\rightarrow$ 评测找短板 $\rightarrow$ 闭环补数据」“听起来太理想了”？（3 个核心真相与断裂点）

既然调权重真有用，为什么文中描绘的这套「第1步画 8 大域 39 项能力蓝图 $\rightarrow$ 第2步能力编译出题 $\rightarrow$ 第3步提纯/几何构题 $\rightarrow$ 第4步 Eval-Driven Data Harness 评测找错题回流数据」听起来这么像理想化的“永动机”？

因为这里藏着一个极其关键的概念偷换和三道物理鸿沟：

```text
┌───────────────────────────────────────────────────────────────────────────────────────────┐
│        【理想闭环成立区：离线视觉问答 Embodied VQA】 vs 【理想闭环失效区：真机物理控制 VLA】       │
├───────────────────────────────────────────────┬───────────────────────────────────────────┤
│ 🟢 狮子山 Lion-ER-35B-A3B 实际干的事 (System 2)  │ 🔴 真实机器人闭环干活面临的残酷现实 (System 1) │
├───────────────────────────────────────────────┼───────────────────────────────────────────┤
│ • 输入：静态图片 / 多视角照片 / 短视频切片 + 考题 │ • 输入：实时多路视频流 + 关节力矩/触觉/本体感觉  │
│ • 输出：ABCD 选项 / 文本判断 / 2D 像素点坐标      │ • 输出：50Hz–500Hz 连续电机控制指令 (Δx,Δy,Δz) │
│ • 评测成本：跑 10 个 Benchmark 仅需几十分钟 GPU   │ • 评测成本：真机跑几百次实测需数天，且离线 Loss  │
│ • 错题归因：题库标签清晰，错哪类题直接查表可得    │   与真机成功率严重脱钩（Sim/Offline-to-Real Gap）│
│ • 补数方式：从 430 万存量图文池捞同题型重采样     │ • 致命死穴：接触力学/打滑恢复不在池中 → 0 × w = 0 │
└───────────────────────────────────────────────┴───────────────────────────────────────────┘
```

#### 真相 1：先看清 Lion-ER-35B-A3B 的真实身份 —— 它是「看图做题的具身 VLM（System 2）」，不是「下场干活的电机控制策略（System 1）」！
查阅 Hugging Face 官方模型卡（[cmriat/lion-ER-35B-A3B](https://huggingface.co/cmriat/lion-ER-35B-A3B)）可知：
- 该模型基于阿里 Qwen3.6-35B-A3B 微调，任务类型是标准的 image-text-to-text（图文生成文本）；
- 文中引以为傲的 10 项基准（等权均分 65.29：Where2Place 空间点选 64.28、ERQA 具身问答 64.38、SAT 空间推理 89.33） 以及展示的 4 道公开基准题（看两帧图猜相机往哪转、从图上画好的红紫黄橙四条线里选出橙色线、看三张图判断蝴蝶挂画在拍摄者后方、看视频判断机械臂碰到寿司卷没有），100% 全部是离线的视觉问答（VQA）或 2D 像素点选考题，没有任何一行代码直接输出机械臂关节角度或末端执行器控制量！
- 在「离线看图做选择题」的封闭世界里，这套闭环当然跑得通！ 因为公开 Benchmark（如 ERQA、SAT、Where2Place）考什么题型是完全透明的：你先把考纲拆成 8 大域 39 个考点，跑一遍分发现模型老把“画面靠上（2D Y轴）”当成“空间更高（3D Z轴）”，于是立刻写个脚本去 31 个开源库（430 万条存量记录）里专门捞“多层货架 + 遮挡透视”的图来出题加权训练——这在行业内部有一个更接地气的名字：「面向评测集的数据配比与错题本工程（Benchmark-Targeted Data Curation）」。当考卷题型固定且题库现成时，定向刷错题本提分是确定性极高的工程。

#### 真相 2：一旦从「看懂图片答对题」跨向「真机物理世界干成活」，这套理想闭环会撞上三堵铁墙！
为什么机器人行业不能单靠这套“画蓝图 $\rightarrow$ 跑评测 $\rightarrow$ 调存量数据权重”解决真机操作难题？

1. 第一堵墙：评测失真与归因黑盒（The Evaluation & Attribution Bottleneck）
   - 在 VQA 里，跑一次评测只需几十分钟，错题归因是离散、确定性的；
   - 而在真机闭环控制（VLA / Visuomotor Policy）中，离线验证集 Loss 与真机物理成功率几乎不相关。例如 OpenVLA 论文（第 6 页及附录 D.4）明确发现：模型在离线训练数据上的动作 Token 准确率早就超过 95%，或者量化前后离线准确率完全一致，但一上真机，仅仅因为推理延迟带来微小的运动停顿（动力学改变）或累积误差（Compounding Error），真机成功率就会大幅跳水。
   - 更关键的是物理失败无法自动映射回“静态能力标签”：当机械臂拔充电器卡死或把寿司夹烂时，到底是空间高度算错了、手腕相机标定漂了、还是插头摩擦力过大触发了非线性接触打滑？在连续动力学的耦合系统里，你根本没法像批改选择题那样自动生成一张“去捞哪一类静态图片”的检索单。
2. 第二堵墙：零支撑集死穴（The Zero-Support Ceiling —— $0 \times w = 0$）
   - 调整数据域权重（Reweighting）和从 430 万存量池里检索素材（Retrieval），都有一个不可逾越的数学边界：目标能力的数据必须已经存在于你的候选池支撑集（Support）内，即 $p_{\text{pool}}(x) > 0$。
   - 翻开本库归档的 Octo 原论文第 17 页 Table VII（WidowX 零样本泛化实测），可以看到一组极具警示意义的数据：
     * 分布内任务（In-distribution，夹胡萝卜/茄子）：平均成功率 85%；
     * 新物体（Novel objects，夹面包/勺子）：平均成功率 80%；
     * 新环境（Novel environment）：平均成功率跌至 40%；
     * 新物理技能（Novel skill：把杯子翻倒 10%、把木块插进窄槽 0%）：平均成功率直接归零至 5%！
   - 这就是 $0 \times w = 0$ 定律：如果存量数据集里根本没有“灵巧手盲摸插拔紧配合插头时的力觉打滑恢复”或“柔性衣物双臂协同折叠的接触动力学轨迹”，哪怕你的评测把短板分析得再透彻、把权重调到无穷大，也绝不可能从静态视觉问答池里“炼”出未见的物理接触技能。
3. 第三堵墙：固定小激活参数下的能力跷跷板与古德哈特定律（Capability Seesaw & Goodhart's Law）
   - Lion-ER-35B-A3B 每个 Token 仅激活 3B 参数（训练集共 312,380 条样本）。在有限的激活容量与训练预算下，针对评测暴露的错题强行拉高某一细分能力域的采样权重，极易引发能力跷跷板（Negative Transfer / Catastrophic Forgetting）——正如 Cambrian-1 发现拉高 OCR 权重会损害空间感知、OpenVLA 发现混入 10% DROID 反而拖累收敛一样。
   - 同时，根据古德哈特定律（“当一个指标变成目标时，它就不再是一个好指标”），当评测集直接驱动数据检索与合成（Eval-Driven Data Harness）时，若缺乏严格的分布外（OOD）真机盲测隔离，数据引擎很容易演化成“专门针对这 10 个公开 Benchmark 题型分布的过拟合器”。

---

### 三、客观评估：「驭物™ Lion-ER-35B-A3B」到底有什么真实工程价值与未证实缺口？

剥离掉“不靠堆数据让机器人看懂物理世界”的宣传修辞后，我们对招商局狮子山人工智能实验室这项工作给出客观的投研定性：

#### ✅ 它真正做对了的 3 件事（工程实绩）
1. 架构选型极其务实（35B-A3B MoE 卡位机载/近端低延迟推理）：
   具身大脑如果用 27B/72B 稠密模型，单次视觉问答推理就要数秒，机器人动作会严重卡顿；采用 Qwen3.6-35B-A3B 混合专家底座，每次前向仅激活 3B 参数，在保持 35B 知识容量的同时大幅降低了推理延迟与显存带宽开销（支持 vLLM / SGLang BF16 部署），非常适合作为快慢双系统（System 2 高层规划 + System 1 高频控制）中的 System 2 慢系统大脑。
2. 数据清洗抓住了开源 VQA 的最大痛点（几何真值先行 + 剔除无证据伪难题）：
   目前开源界大量空间 VQA 数据是用 GPT-4V 看单张 2D 图片强行“脑补”生成的，充满空间幻觉与缺视角瞎猜题。狮子山团队坚持*“几何构题（先由可靠位姿、深度图和 3D 分割算出几何真值，再约束模型出题）”*以及*“剔除关键视角缺失、只能靠猜的伪难题 + 人工可视化平台复核高难错题”*，这使其筛选出的 312,380 条样本信噪比显著高于粗放合成数据集。
3. 精准切中机器人工程急需的「任务进度监控器（Success Detector）与高层规划器」生态位：
   文中题目 2（排查无效碰撞轨迹）和题目 4（区分机械臂“正在靠近寿司卷”与“已经移动到位”）在实际机器人系统中非常关键——真机强化学习（RL）和长程自主作业最缺的就是一个能准确判断“当前子步骤到底做完没有、有没有抓空”的视觉状态监控器（Visual Success Detector / Critic）。在这类任务上超越 Qwen3.6-35B-A3B 基座（ERQA 轨迹理解 +12.12 分至 68.18，Where2Place +9.30 分至 64.28），具备直接的工程实用价值。

#### ⚠️ 必须警惕的 3 项未证实缺口（Gaps）
1. 零真机闭环实测验证（No Real-Robot Closed-Loop Rollouts）：
   全文及 Hugging Face 模型卡仅展示了 10 项离线图文基准得分（等权均分 65.29），尚未公布任何将该模型接入真实机械臂（如挂载底层 Diffusion Policy / VLA 小脑）执行物理抓取、放置或长程失败恢复的真机闭环成功率对照。
2. 31.2 万条能力训练集与完整 10 项基准细项未完全公开：
   目前仅在 Hugging Face 开源了模型权重（cmriat/lion-ER-35B-A3B），其核心资产——31.2 万条监督样本配方、8 大域 39 项能力编译规范及全部 10 个评测集（除 Where2Place、ERQA、SAT 外的其余 7 项）的完整分值表尚未开源披露。
3. 静态空间问答 $\neq$ 物理世界因果力学理解：
   模型能答对“图像中瓶子上移 = 相机向下转”，说明它学会了多视角射影几何与运动视差（Projective Geometry & Parallax）；但真正的“物理世界理解”还包含质量分布、摩擦系数、刚柔体形变、流体与接触力矩——这些动力学（Dynamics）信息在纯视觉静态问答中是不可观测的，必须依赖真实物理交互与本体力觉数据闭环。

---

## 原文摘录与一手信源存证

> 视频画面中物体位置看上去更高，并不等同于它在真实三维空间里处于更高位置；更换拍摄角度，家具外观发生改变，但它仍是同一个物体；画面内物体发生位移，有可能是物体本身发生移动，也可能仅仅是相机镜头产生转动......
> — 原文摘录，文字段落 1；证据 `digest-material-37c78e5bb251da44a5c5206d08753f6d0d21e6c6e7f1ffd8d8ba3efd83bda85f-excerpt-1@1`

> 想要机器人可靠完成现实任务，模型不能仅仅做到“看见物体”，更要 读懂三维空间关系 、 捕捉物体状态变化 、 研判任务所处阶段 。
> — 原文摘录，文字段落 2；证据 `digest-material-37c78e5bb251da44a5c5206d08753f6d0d21e6c6e7f1ffd8d8ba3efd83bda85f-excerpt-2@1`

> 近日，招商局先进技术研究院下属狮子山人工智能实验室发布具身推理视觉语言模型 「驭物™ Lion-ER-35B-A3B」 。该模型采用MoE混合专家模型架构， 总参数约35B，每个Token仅激活约3B参数。
> — 原文摘录，文字段落 3；证据 `digest-material-37c78e5bb251da44a5c5206d08753f6d0d21e6c6e7f1ffd8d8ba3efd83bda85f-excerpt-3@1`

一手材料：

- cmriat/lion-ER-35B-A3B (驭物™ Lion-ER-35B-A3B — LionRock Embodied Reasoner Model Card & Release Specification) · 招商局先进技术研究院狮子山人工智能实验室 (China Merchants Research Institute of Advanced Technology / LionRock AI Lab) · [原站](https://huggingface.co/cmriat/lion-ER-35B-A3B) · [主体档案：招商局狮子山人工智能实验室 (LionRock AI Lab)](../entities/labs/%E6%8B%9B%E5%95%86%E5%B1%80%E7%8B%AE%E5%AD%90%E5%B1%B1%E4%BA%BA%E5%B7%A5%E6%99%BA%E8%83%BD%E5%AE%9E%E9%AA%8C%E5%AE%A4%20%28LionRock%20AI%20Lab%29.md) / [主体档案：招商局集团 (China Merchants Group)](../entities/companies/%E6%8B%9B%E5%95%86%E5%B1%80%E9%9B%86%E5%9B%A2%20%28China%20Merchants%20Group%29.md) · [NotebookLM](https://notebook.google.com/notebook/33f0076b-fc09-42cc-9cd9-fecfb847ce1c) · [Drive](https://drive.google.com/file/d/1iXIx93psFiM2r5t72SchzC_VPTvXwDav/view?usp=drivesdk)
  材料版本 `digest-material-8add2770c48924595bc085e93d1050621ad0eee4df44abaeecf6df6ad7de7d6c@1`；获取方式 `primary_source_dossier_compilation`。
  > -------------------------------------------------------------------------------- 1. — 原文提取
  > -------------------------------------------------------------------------------- 2. — 原文提取
- Re-Mix: Optimizing Data Mixtures for Large Scale Imitation Learning (with Cross-Referenced OXE Mixture Ablations from Octo & OpenVLA) · Joey Hejna, Chethan Bhateja, Yichen Jiang, Karl Pertsch, Dorsa Sadigh / Stanford University (ILIAD Lab) & UC Berkeley · [原站](https://arxiv.org/abs/2408.14037) · [主体档案：Stanford ILIAD Lab (Dorsa Sadigh)](../entities/labs/Stanford%20ILIAD%20Lab%20%28Dorsa%20Sadigh%29.md) / [主体档案：Joey Hejna](../entities/people/Joey%20Hejna.md) · [NotebookLM](https://notebook.google.com/notebook/33f0076b-fc09-42cc-9cd9-fecfb847ce1c) · [Drive](https://drive.google.com/file/d/14GawASFIdDJO5efpQI3AvtCos6Msa9ac/view?usp=drivesdk)
  材料版本 `digest-material-d314cf998f457681794e647127516bd4f6a8822b42495ea32b8e53a99af9c107@1`；获取方式 `primary_source_dossier_compilation`。
  > Cross-Referenced Primary Robotics & VLM Data Mixture Papers in Workbench: 1. — 原文提取
  > -------------------------------------------------------------------------------- 1. DIRECT VERIFICATION OF THE ARTICLE CLAIM: "已有研究表明，在既有机器人数据集内，仅调整不同数据域的训练权重，就能明显影响下游任务表现。 — 原文提取

归属与范围：完成招商局狮子山人工智能实验室「驭物™ Lion-ER-35B-A3B」具身推理模型一手信源归档与用户核心方法论追问深度复核：（1）核实 Hugging Face 开源仓库 cmriat/lion-ER-35B-A3B（基于 Qwen3.6-35B-A3B 的 MoE 架构，35B 总参数/3B 激活参数，312,380 条精选样本，10 项具身推理基准等权均分 65.29）；（2）追溯并核实文中“仅调整不同数据域训练权重即可明显影响下游表现”的三大一手学术实证——Stanford ILIAD 团队 Re-Mix（arXiv:2408.14037，Group DRO 重调 OXE/Bridge 权重提升真机成功率 +38%–40%，25% 裁剪数据下达 82.5% vs 均匀权重 37.5%）、Octo（arXiv:2405.12213，25 数据集加权 83% vs RT-X 混合 60%）与 OpenVLA（arXiv:2406.09246，训练后 1/3 阶段动态砍掉 10% DROID 权重以消除负迁移）；（3）从第一性原理拆解为什么“正向设计能力→评测找短板→闭环补数据”在离线视觉问答（System 2 VQA，即 Lion-ER-35B-A3B 的真实身份）中可行（面向 Benchmark 的错题本配比工程），但在真机闭环控制（System 1 VLA）中面临离线评测失真与归因黑盒、零支撑集天花板（0×w=0，如 Octo Table VII 新物理技能成功率仅 5%）及 3B 激活参数下的能力跷跷板三道刚性边界。

来源缺口：

- `not_disclosed`：「驭物™ Lion-ER-35B-A3B」目前仅开源披露了离线具身视觉语言问答与空间点选基准成绩（10 项基准等权 avg@4 均分 65.29），尚未披露任何将该模型接入真实机器人底层控制器（如 VLA 或扩散策略小脑）后的真机闭环物理操作成功率、推理控制频率及长程失败恢复实测数据。
- `unavailable`：狮子山人工智能实验室构建的 312,380 条监督训练样本集本体、8 大一级领域 39 项二级能力的完整「能力编译」细则文档，以及除 Where2Place（64.28）、ERQA（64.38）、SAT（89.33）之外其余 7 项公开评测基准的逐项对比分值表，目前尚未在 Hugging Face 仓库中完整公开。

[返回赛道总览](../赛道总览.md#digest-37c78e5bb251da44) · [返回导读索引](README.md) · [主体档案库](../entities/README.md)
