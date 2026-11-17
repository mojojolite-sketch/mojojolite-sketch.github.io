---
title: "Close the Loop：Verification是AI加速物理世界的关键"
type: blog_digest
sector: "具身智能"
source: "The Humanoid Hub · Ted Xiao"
published_at: "2026-11-11"
raw_sha256: "7a3afa8d2742aedf6b8d256fa7421d959863e2262c190d77a2592085777a063d"
material_version: "digest-material-7a3afa8d2742aedf6b8d256fa7421d959863e2262c190d77a2592085777a063d@1"
origin_url: "https://humanoidhubconference.com/"
trigger_source: "海外独角兽"
trigger_url: "https://mp.weixin.qq.com/s/q4kNPQ2n6Av88Q9zSzc-nQ"
user_comments: ""
status: "processed_with_gaps"
---

<a id="digest-7a3afa8d2742aedf"></a>
# Close the Loop：Verification是AI加速物理世界的关键

2026-11-11 · The Humanoid Hub · Ted Xiao · 有来源缺口

[本地原件归档](../../../raw/7a3afa8d2742aedf6b8d256fa7421d959863e2262c190d77a2592085777a063d) · 固定材料版本 `digest-material-7a3afa8d2742aedf6b8d256fa7421d959863e2262c190d77a2592085777a063d@1` · [一手原站](https://humanoidhubconference.com/) · [触发线索（海外独角兽）](https://mp.weixin.qq.com/s/q4kNPQ2n6Av88Q9zSzc-nQ)

## 深度拆解与复核

## 场景与利益标注

本演讲为 Ted Xiao 于 2026-10-16 在旧金山 Humanoid Hub Conference 发表的公开主题演讲（原题 What Does a Post-AGI Physical World Look Like）。==口径与利益披露==：Ted Xiao 曾在 Google DeepMind 任职 8 年（参与构建 SayCan、RT-1、RT-2 与 Open X-Embodiment），约 1 年半前参与创立由 Jeff Bezos 与 Vik Bajaj 联合担任联席 CEO 的工业物理 AI 公司 Prometheus（Project Prometheus，媒体报道首轮融资 \$6.2B、2026 年 6 月 B 轮融资 \$12B 且估值约 \$41B）。因此，其关于“即使 AGI 与通用机器人大功告成，物理世界仍因未加速验证环节而最多提速 2 倍，必须深入工业工程流建构闭环 Verifier”的核心论断，与 Prometheus 主攻航空航天、汽车、算力硬件及重工制造工程软件的商业站位高度一致；但该物理时序约束本身基于计算与实验的第一性原理，具有独立参考价值。中文公众号「海外独角兽」（编译：Haozhen）属二次编译，已降级为触发线索。

### 一、Amdahl 定律下的物理工程瓶颈与 Verification 上限

Ted Xiao 将当前硅谷与全球研发投入划分为两极：一极是数字智能（Bits），即 AGI 支持者尝试在数据中心建造“天才之国”；另一极是物理劳动（Atoms），即关注 robot learning、物体接触灵巧操作与通用机器人普及。从构想走向规模化量产须经历设计、工程开发、原型制作、投产前测试认证、生产爬坡与扩产全链条，从 GDP、劳动份额与行业利润率看，数字 AI 与机器人即便接管抽象推理和体力操作，大量系统瓶颈依然滞留在线下。

演讲直接用 Amdahl 定律刻画总加速上限：设 p 为可加速环节占原始总耗时比例，s 为该部分加速倍数，只要不可加速环节仍占 50%，哪怕其余流程速度趋于无穷大，全链条总耗时也最多减半（总体提速 2 倍）；唯有把 p 推进到 99% 乃至 99.9%，研发至投产周期才有望压缩至十分之一或百分之一。工程验证周期之所以难以压缩，根源有二：一是物理实验本身的刚性时间与低复现性，例如快充电池负载与充放电循环测试超过 1 年半，药物从立项到三期临床常逾十年，生物技术公司 Amgen 尝试复现 53 项极具影响力的癌症临床前研究时仅成功 6 项（约 11%）；二是工程诀窍与隐性经验散落在不同企业知识产权与技工手中，实体经济并不存在类似软件开源仓库 GitHub 的全量可复用工程日志。

在此框架下，Verification 反馈耗时（短至数毫秒、长至数十年）直接决定模型 post-training 能力天花板。参考 Microsoft AI 对“爬山机器”的类比与 RLVR（基于可验证奖励的强化学习）范式：当数学证明可由 Lean 校验、代码改动可由单元测试验证时，算力（GPU 与 CPU）可以直接转化为持续攀升的策略分数；然而一旦负责评判的 Verifier 存在漏洞，强化学习训练越充分，模型越会利用漏洞刷出虚高得分（Reward Hacking）而非提升现实工程表现。

### 二、机器人控制分化、自动化实验与 OOD 代理边界

1. 机器人训练的仿真与真机分化
   在运动控制领域，sim-to-real 依托 GPU 并行物理仿真已能跳过真实采集：以 Unitree G1 为例，直接复用 GitHub 开源框架搭配单张 GPU 与小型 MLP（多层感知机）训练 15 分钟，即可将控制策略零样本迁移至真机完成行走、后空翻等敏捷动作。相反，灵巧操作领域（Physical Intelligence、Generalist、Dyna 与 Google DeepMind）仍受制于人类示范数据规模远低于互联网（如 Reddit 或百科语料），依赖遥操作、第一视角视频、数据手套与 UMI 扩张离线数据集。Google 在 RT-1 与 RT-2 实验中须动用数十名外包人员、数十台机器人耗时数百小时人工完成真机 A/B 评测以比较两个 checkpoint。Ted Xiao 强调，预训练可复用历史接近理想的表现，但纠错数据必须由当前策略亲自上机执行并记录干预点与修正动作。
2. 工程设计、自动化湿实验与分布外边界
   在工业与科研端，F1 车队每年仍受严格的风洞测试与 CFD 仿真算力配额约束。虽然 Anthropic、OpenAI 与 Gemini 在数字化 CAD 与设计 demo 上改善迅速，但将其放入真实制造流时往往连基础工程检查都无法通过。在实验室自动化方向，Periodic Labs 每天可完成约 100 次 X 射线衍射真实实验（新实验室目标提高至每天 1000 次），并训练 LLM judge 判读衍射图谱，与博士专家判断一致率达 77%；Anthropic 在蛋白结合体与 CRISPR 协作中借助模型将数周数月的设计准备压缩到数天，然而湿实验自身的数周串行等待仍无法跳过。物理系统不同于围棋规则零成本确定判胜的 AlphaGo Zero：基于有限历史实验观测训练出的价值函数（value function）或代理 Verifier，在重新推导既有成熟设计（如重现 20 世纪 50 年代中期技术）时表现尚可，一旦面对偏离历史分布的全新设计（OOD），判断准确度将急剧下降。

### 三、三大研究方向、现场部署策略与工作台交叉核查

面向未来研发，Ted Xiao 总结出三项核心任务：① 建立更多贴合真实产线与工程标准的 Verifier 与 RL 环境，不能只追逐学术 benchmark 或社交媒体热度；② 进入模型真实工况审计 Verifier 的判断可靠性；③ 加大资本投入扩充稀缺实测配额，对可信仿真环节辅以合成数据，对必须执行的昂贵湿实验或样机测试做信息增益优先级排序。针对“物理离线数据稀缺分散、无法复制 OpenAI 先闭门训练多年再推 ChatGPT”的客观现实，Ted Xiao 在过去 1 年半内主张尽早将软件系统部署进工业现场（例如去金属切削车间一线观察操作员工艺卡点并用共同语言定义合格标准），在真实产出交付中滚动迭代 Verifier 与策略。

- ✅ 本工作台核查（Verifier 漏洞与假阳性实证）：对照本工作台已归档的 [micro1 双臂仿真评测导读](micro1%20%E5%8F%8C%E8%87%82%E4%BB%BF%E7%9C%9F%E8%AF%84%E6%B5%8B%EF%BC%9A800%20%E6%AC%A1%E8%AF%95%E9%AA%8C%E4%BB%85%E5%AE%8C%E6%88%90%2011%20%E6%AC%A1%EF%BC%8C213%20%E6%AC%A1%E2%80%9C%E5%AE%8C%E6%88%90%E2%80%9D%E5%85%A8%E6%98%AF%E8%AF%AF%E6%8A%A5.md)，Dual-Arm Sim 测试十个前沿模型操作双臂手术物品，800 次试验仅 11 次真正成功，系统或模型却报告了 213 次“已完成”且全数误报。该实证定量印证了 Ted Xiao 的警示：当缺乏严格物理状态校对的 Verifier 时，闭环反馈中大量假阳性会直接污染训练奖励并制造虚假能力幻觉。
- ✅ 本工作台核查（数学形式化与物理实验成本边界）：交叉比对 [Dwarkesh Patel 数学雪崩导读](../../AI%E8%AE%AD%E7%BB%83%E4%B8%8E%E6%95%B0%E6%8D%AE/blogs/The%20avalanche%20that%20hit%20math%20is%20coming%20for%20AI%20development.md)，形式数学之所以出现“雪崩”，源于 Lean 等证明助手可在低成本 CPU 沙箱以毫秒级闭环确定判定定理真伪；反观实体工程与科学研发，即使 AI 模型内部编码速度翻倍，仍须等待物理电池循环、湿实验与大型样机检验，导致验证延迟无法随算力线性归零。
- ⚠️ 本工作台推断（产线在线传感器破解 Verifier 与数据死结）：结合 [Path Robotics 焊接世界模型导读](%E4%BC%B0%E5%80%BC%E8%B6%85170%E4%BA%BF%EF%BC%81%E5%85%84%E5%BC%9F%E4%BF%A9%E6%8A%8A%E2%80%9C%E4%B8%96%E7%95%8C%E6%A8%A1%E5%9E%8B%E2%80%9D%E5%A1%9E%E8%BF%9B%E7%84%8A%E6%9E%AA%EF%BC%8C%E5%B9%B4%E8%90%A5%E6%94%B6%E6%9A%B4%E6%B6%A817%E5%80%8D.md) 拆解的重工焊接商业闭环（外采成熟六轴机械臂并配抗弧光激光传感焊头与 Obsidian 策略，经焊缝超声波/射线无损探伤验收并积累数千万焊接英寸回流），==本工作台推断 Prometheus 等工业物理 AI 团队能否跨过“离线物理数据分散且人类打分极慢”的死结，核心取决于能否把产线无损质检传感器（如切削力声发射、精密光学扫描、无损探伤仪表）直接工程化为防作弊的在线 Verifier，在交付实体产出的同时自动完成反馈闭环==；但亦须注意，对照本库已有 [Prometheus CNBC 专访档案](../../AI%E5%BA%94%E7%94%A8%E4%B8%8E%E5%BC%80%E5%8F%91%E5%B7%A5%E5%85%B7/blogs/%E5%90%8C%E6%A0%B7%E6%98%AF%E6%90%9E%E5%B7%A5%E4%B8%9AAI%E7%A0%94%E5%8F%91%E6%99%BA%E8%83%BD%E4%BD%93%EF%BC%8C%E8%B4%9D%E7%B4%A2%E6%96%AF%E7%9A%84Prometheus%E5%85%AC%E5%8F%B8%E8%9E%8D%E4%BA%86180%E4%BA%BF%E7%BE%8E%E5%85%83.md)，Prometheus 目前尚未公布任何经第三方验证的工厂现场良率提升或产线投产实绩。

### 观点与可反驳条件

- ==观点==：==即便数字 AGI 与通用机器人突破灵巧控制，物理经济研发与投产的总体提速仍受 Amdahl 定律下不可加速实测环节制约，因此物理 AI 的核心护城河不在纯虚拟生成或离线大模型推理，而在于能否在真实工业交付场景中嵌入高信度传感器在线 Verifier 并完成数据与策略闭环==。
- ==推翻条件==：
  1. ① 若 2028 年底前，纯依赖神经物理仿真或大语言模型代理判官（无需部署至真实工厂并挂接专用无损/在线质检传感器采集回流）即可让分布外全新设计（如新型电池电芯、复杂热控/气动结构件）在首次实体打样测试中实现 85% 以上工程一次通过率，且未出现显著的 Reward Hacking 偏差，则“必须嵌入产线传感器实测闭环以突破 OOD 验证边界”的判断将被推翻。
  2. ② 若至 2028 年底，已获巨额融资的 Project Prometheus 或同类工业物理 AI 平台仍未在金属切削、航空结构件或汽车制造等目标行业披露任何可审计的工厂产线良率提升、研发到量产周期缩短（例如周期压缩 30% 以上）或规模化商业付费续约证据，仅停留在内部仿真与基准测试宣传阶段，则“通过驻场嵌入式部署跑通物理 AI 商业闭环飞轮”的落地推断将被证伪。

---

## 原文摘录与一手信源存证

> 按 Amdahl 定律，如果一半时间花在无法加速的环节，其余工作再快，总耗时也最多减半。
> — 原文摘录，文字段落 1；证据 `digest-material-7a3afa8d2742aedf6b8d256fa7421d959863e2262c190d77a2592085777a063d-excerpt-1@2`

> Verification 决定模型 post-training 的上限。
> — 原文摘录，文字段落 2；证据 `digest-material-7a3afa8d2742aedf6b8d256fa7421d959863e2262c190d77a2592085777a063d-excerpt-2@2`

> 以金属切削为例，Ted Xiao 建议做软件的团队先去现场，看看操作者怎么完成工序，听他们说哪里容易出问题，再用双方都能理解的话把问题说清楚。
> — 原文摘录，文字段落 3；证据 `digest-material-7a3afa8d2742aedf6b8d256fa7421d959863e2262c190d77a2592085777a063d-excerpt-3@2`

一手材料：

- What Does a Post-AGI Physical World Look Like? (Humanoid Hub Conference Keynote) · The Humanoid Hub · Ted Xiao · [原站](https://humanoidhubconference.com/) · [主体档案：Ted Xiao](../entities/people/Ted%20Xiao.md) / [主体档案：Project Prometheus](../entities/companies/Project%20Prometheus.md) / [主体档案：The Humanoid Hub](../entities/labs/The%20Humanoid%20Hub.md) · [本地原件](../../../raw/c3102da5ef493933671e3486a699fd6b6579eeaf38be8d4c3fcbdbfa424d5225)
  材料版本 `digest-material-c3102da5ef493933671e3486a699fd6b6579eeaf38be8d4c3fcbdbfa424d5225@1`；获取方式 `web_search_verified_primary`。
  > (a) Post-AGI Physical Bottleneck & Amdahl's Law: - Even if digital AGI ("Bits", data-center "country of geniuses") and general-purpose embodied robotics ("Atoms", dexterous manipulation) both achieve full success, physical-world prosperity and technology commercialization will not automatically accelerate proportionally. — 原文提取
  > (b) Verification as the Upper Bound of Post-Training: - In math and coding, deterministic verifiers (e.g., Lean formal proof verification, unit tests) let RLVR optimize models cheaply with compute. — 原文提取

归属与范围：已穿透至 Ted Xiao 在 Humanoid Hub Conference（San Francisco, 2026-10-16）的一手演讲档案（thehumanoidhub.com / humanoidhubconference.com / tedxiao.me）与 Project Prometheus 背景，中文编译公号「海外独角兽」（编译：Haozhen）降级为 trigger\_source。

来源缺口：

- `unavailable`：公开搜索返回的重定向链路未直接露出规范 11 位字符 YouTube 视频 ID（watch?v=），且未取得大会官方完整英文逐字稿与原始演讲幻灯片 PDF；已绑定大会官网 humanoidhubconference.com 与 thehumanoidhub.com 及演讲者主页 tedxiao.me。 [线索](https://humanoidhubconference.com/)
- `not_disclosed`：Project Prometheus 处于隐身运营阶段且未设公开产品门户，未披露其在 CAD/CFD、金属切削等工业客户现场的模型准确率、产线吞吐提速及内部 Verifier 基准指标。 [线索](https://prometheus.co/)

[返回赛道总览](../赛道总览.md#digest-7a3afa8d2742aedf) · [返回导读索引](README.md) · [主体档案库](../entities/README.md)
