---
title: "Generalist：百万小时数据的infra"
type: blog_digest
sector: "具身智能"
source: "Modal Runtime 2026 · Generalist AI"
published_at: "2026-11-09"
raw_sha256: "9c16ea2806ee64ff015b203930a7380a9ff5c1b0d3c5aed283aba0cfd43b3808"
material_version: "digest-material-9c16ea2806ee64ff015b203930a7380a9ff5c1b0d3c5aed283aba0cfd43b3808@1"
origin_url: "https://generalistai.com/blog/gen-1.5"
trigger_source: "human five"
trigger_url: "https://mp.weixin.qq.com/s/03BiDglxEH7b20-kC9N3tQ"
user_comments: "找一下原播客"
status: "processed_with_gaps"
---

<a id="digest-9c16ea2806ee64ff"></a>
# Generalist：百万小时数据的infra

2026-11-09 · Modal Runtime 2026 · Generalist AI · 有来源缺口

[本地原件归档](../../../raw/9c16ea2806ee64ff015b203930a7380a9ff5c1b0d3c5aed283aba0cfd43b3808) · 固定材料版本 `digest-material-9c16ea2806ee64ff015b203930a7380a9ff5c1b0d3c5aed283aba0cfd43b3808@1` · [一手原站](https://generalistai.com/blog/gen-1.5) · [触发线索（human five）](https://mp.weixin.qq.com/s/03BiDglxEH7b20-kC9N3tQ)

> [!IMPORTANT]
> 用户关注点（TG）：找一下原播客

## 针对性追查与回应

- 来源：[Modal Runtime 2026 · Kathleen Brandes (Generalist AI)：*The High-Stakes Infrastructure Problems That Are Defining Robotics*](https://modal.com/runtime)（2026-10-01，[YouTube @ModalLabs](https://www.youtube.com/results?search_query=%22The+High-Stakes+Infrastructure+Problems+That+Are+Defining+Robotics%22+Kathleen+Brandes)）；对照一手：[Generalist AI 官方博客（GEN-0 / GEN-1 / GEN-1.5）](https://generalistai.com/blog/gen-1.5) · [Automated 播客（CTO Andrew J. Barry 专访）](https://www.automate.org/podcasts/automated-podcast-episode-andrew-barry)
- ==核心结论==：微信稿并非音频播客，而是 Generalist AI 工程师 Kathleen Brandes 在云算力商 Modal 主办的 Runtime 2026 峰会上的 15 分钟演讲编译（译文“CTO Andy Berry”实为联创兼 CTO Andrew J. Barry）。Generalist 把真实操作数据推向近 100 万小时（100 PB 原片） 的核心是「端侧极简去重、中心重算」五层架构：① 注塑单自由度无源 UMI 夹爪 + 市售相机（零端侧算力，化身全球电池充电与物流公司）；② 放弃弱网家庭 Wi-Fi，改用 20 GB/卡的 SD 卡物理快递 + 单机挂载 300+ 读卡器的 Mega Uploader 并行入湖；③ 魔改内部 Airflow 4 突破开源 Airflow 在 10,000 并发任务下的控制面锁死（规模超 Reddit），离线跑多视角配对、亚帧时间同步与 6-DoF 位姿解算；④ 100 PB 原片经 AV1 + 存储布局优化 10:1 压至 10 PB，并在 DataLoader 内按固定步长（t=0s, 2s, 4s）直接通过字节偏移拉取单帧进内存（零本地落盘，消除整片下载与单视频过采样）；⑤ CTO 驻场拉通俄亥俄存储池至悉尼训练集群的 Direct Connect 跨洋专线规避 NAT 出口费，并用 Modal 按需 GPU 承接 GEN-1.5 小时级微调实验。但演讲中“1,000h → 100h → <1h 微调压缩”存在跨代任务难度不一致的分母漂移；单自由度纯视觉 UMI 仍无法单靠堆视频小时数跨过接触后力控与多指协同边界。
- 关联主体档案：[Generalist AI](../entities/companies/Generalist%20AI.md) · [Modal](../entities/companies/Modal.md) · [Kathleen Brandes](../entities/people/Kathleen%20Brandes.md) · [Andrew J. Barry](../entities/people/Andrew%20J.%20Barry.md) · [Pete Florence](../entities/people/Pete%20Florence.md) · [Andy Zeng](../entities/people/Andy%20Zeng.md)

---

### 一、一手原片、配套原播客与场景激励标注

1. 直接上游原片（视频演讲，非音频播客）：
   - 峰会与时间：Modal Runtime 2026（Modal Labs 首届生产级 AI 工程峰会，2026-10-01，旧金山）。
   - 讲者：Kathleen Brandes（Generalist AI 技术成员，MIT 毕业，前 Boston Dynamics / Optimus Ride 机器人规划工程师，前 Tesla Autopilot 自动变道与 Tesla Bot 端到端操作工程师，Adagy Robotics 联创，Forbes 30 Under 30）。
   - 原片标题与入口：*The High-Stakes Infrastructure Problems That Are Defining Robotics | Kathleen Brandes, Runtime 2026*（[Modal 峰会页](https://modal.com/runtime) · [YouTube @ModalLabs 检索直达](https://www.youtube.com/results?search_query=%22The+High-Stakes+Infrastructure+Problems+That+Are+Defining+Robotics%22+Kathleen+Brandes)）。
   - 时间轴锚点：0:00 跨夹爪迁移与扎带精密穿插 → 1:31 机器人数据三难困境（Sim / Teleop / Ego）→ 3:25 UMI 迈向 100 万小时 → 4:36 注塑单自由度夹爪与充电墙 → 6:22 SD 卡物流与 300+ 读卡器 Mega Uploader → 7:49 超越 Reddit 规模与自研 Airflow 4 → 9:04 100 PB AV1 压缩与按帧字节直读 DataLoader → 10:45 俄亥俄至悉尼 Direct Connect 专线 → 11:50 8 个月预训练与 GEN-0 → 1 → 1.5 微调演进 → 14:45 Modal 按需 GPU 并发微调。
2. 同主题一手音频/视频播客（三位联创亲述）：
   - CTO Andrew J. Barry（微信稿第 6 节误作“Andy Berry”，MIT CSAIL 博士、师从 Russ Tedrake、前波士顿动力 Spot 机械臂核心研发）：[*Automated* Podcast（A3 主编 Brian Heater 主持）：*Andrew Barry on Why Dexterity Is the Next Breakthrough in Physical AI*](https://www.automate.org/podcasts/automated-podcast-episode-andrew-barry)。
   - CEO Pete Florence（前 Google DeepMind 高级研究科学家，IBC / RT-2 / PaLM-E 一作）：[*The Generalist* Podcast：*When Robots Improvise*](https://www.listennotes.com/podcasts/the-generalist/pete-florence-when-robots-6zPZLYxUkhN/) · [*American Optimist* Ep. 161（Joe Lonsdale 主持）](https://podcasts.apple.com/us/podcast/american-optimist/id1527373809) · [*TBPN* S1 E554](https://podcasts.apple.com/us/podcast/tbpn/id1772360235)。
   - 官方技术博客：[GEN-0（2025-11，27 万h 与 7B 参数相变）](https://generalistai.com/blog/nov-04-2025-GEN-0) · [GEN-1（2026-04）](https://generalistai.com/blog/gen-1) · [Going Beyond World Models & VLAs](https://generalistai.com/blog/going-beyond-world-models-and-vlas) · [GEN-1.5（2026-08，One-Shot）](https://generalistai.com/blog/gen-1.5)。
3. 场景与利益标注：本演讲发生于云算力供应商 Modal 主办的商业峰会（第 8 节直接为 Modal On-demand GPUs 与 Modal Volumes 站台），且 Generalist AI 刚完成约 4 亿美元融资（估值约 20 亿美元）。演讲前半段披露的五层基础设施踩坑（SD 卡寄送、300 槽读卡器、Airflow 万级并发锁死、AV1 按帧直读、跨洲拉专线）属一线工程实情；后半段模型成功率与微调倍率属商业路演口径，无开源权重或独立第三方基准验证。

### 二、五层数据基础设施工程拆解与物理/系统复核

```text
[Layer 1: 采集端硬件]  注塑单自由度无源 UMI 夹爪 + 市售高分相机 + 20GB/条 SD 卡 (零端侧算力, 全球充电墙与装箱物流)
         │  (规避全球采集员家庭弱网 Wi-Fi 丢包与 20GB 大文件损坏 → 物理快递 SD 卡 "Sneakernet")
         ▼
[Layer 2: 边缘入湖机]  Mini Uploader (站点) / Mega Uploader (单台 Linux 主机并接 300+ SD 读卡器并行灌入云对象存储)
         │  (300+ 读卡器同时触发入湖 → 开源 Airflow 在 ~10,000 并发任务处控制面锁死, 规模超 Reddit)
         ▼
[Layer 3: 离线算子层]  内部魔改 Airflow 4 编排三大离线算子：①多视角视频配对 ②亚帧时间同步 ③6-DoF 位姿与夹爪宽度提取
         │  (~100万小时原片 = 100 PB → AV1 编码 + 存储布局优化 10:1 压缩至 10 PB)
         ▼
[Layer 4: 存储与流式I/O] 俄亥俄主存储池 (10 PB AV1) ──(DataLoader 帧级字节范围直读 t=0s,2s,4s → 内存/显存, 零本地落盘)──┐
         │                                                                                                     │
[Layer 5: 跨洲网络与算力] CTO 驻场拉通俄亥俄──(Direct Connect 跨洋专线, 绕开公网 NAT 出口费)──► 悉尼预训练集群 (8个月连续训练) ◄┘
                                                                                          └─► Modal 按需 GPU + Volumes (突发微调)
```

#### 1. 采集端（Layer 1）：为什么放弃 Sim / Teleop / Ego，做成“注塑单自由度 UMI + 电池物流公司”？
- 三种传统路线的死穴：① 仿真（Simulation）易靠算力扩容，但高摩擦与形变接触物理难以保真，Sim-to-Real 迁移差；② 遥操作（Teleoperation）直接记录真机动作、零迁移鸿沟，但受困于 1:1 人机绑定、真机频繁机械故障停机及实验室场景单一；③ 第一视角视频（Ego Data，头戴相机/Meta Glasses）极易全球穿戴扩容，但单目 3D 手部姿态估计噪声大、缺乏绝对空间标定，且人手 27 自由度与机器人夹爪形态失配。
- Generalist 的工程取舍（Simplicity Scales）：让人类采集员与目标机器人使用完全相同的末端执行器硬件（UMI）。硬件端砍掉一切边缘算力盒、LiDAR 与电机，做成注塑成型（Injection-molded）的单自由度无源手持夹爪，仅沿拇指与食指套在手上，搭配市售高分辨率相机。这样既无需真机即可在家庭/工厂海量采集，又能从刚性固连的相机与夹爪几何中直接提取精确的 6-DoF 末端位姿（Pose）映射到机器人空间。
- 运维副产物：硬件极简化后，瓶颈转移到物理运营——公司内部建起整面墙的摄像头电池充电墙（Camera Battery Walls）与发往全球采集员的设备周转箱，变成一家重度依赖硬件周转与充电管理的运营公司。
- 量纲核查（✅ 自洽 + 本工作台推断）：100 PB ÷ 100 万小时 = 100 GB/h ≈ 222 Mbps（单条视频约 20 GB，对应单次录制 12–15 分钟 的多路高帧率高清原始视频流，物理量纲完全自洽）。对照 GEN-0（2025-11）官宣的 27 万小时、周增 1 万小时，至 2026-10 约 47 周按原速应为 ~74 万小时；逼近 100 万小时说明 2026 年其全球采集员与夹爪并发规模较 GEN-0 时又扩充了约 1.5–2 倍（本工作台推断）。

#### 2. 数据上传入湖（Layer 2）：为什么放弃家庭 Wi-Fi，自研 300+ 槽位 Mega Uploader？
- 弱网 Wi-Fi 的工程现实：在全球不同国家/地区的采集员家中直接用 Wi-Fi 上传单个约 20 GB 的高清视频，极易出现网络中断、传输停滞，且频繁导致视频文件损坏（Corrupted Video Files）。
- SD 卡物理快递（Sneakernet）+ 专用入湖机：采集端直接写入本地 SD 卡，通过快递寄回中心设施（成为物流公司大客户），在具备企业级光纤上联的机房集中灌入云端。为此团队自研了两款硬件产品：现场站点用的 Mini Uploader，以及中心机房用的 Mega Uploader——将 300 多个 SD 卡读卡器同时连接到单台 Linux 计算机，并行读取数百张 SD 卡直传云端。
- Linux / USB 底层机制复核（✅ 工程可行，但需补全硬件前提）：Brandes 提到 Mega Uploader “对 Linux 系统提出了考验”。从系统底层看，通用 PC 主板的单颗 xHCI USB 主控芯片受硬件 Endpoint 槽位限制（每颗控制器通常仅支持 96–128 个活跃 USB 设备端点，每个读卡器需占用 Control + Bulk In/Out 多个端点），若直接用 USB Hub 级联 300 个读卡器，在 ~100 个设备处就会触发内核 Not enough host controller resources 报错，且共享单根 USB 3.0 总线会将单卡读取压低至 <3 MB/s。本工作台推断：Mega Uploader 主机内部必然插有多张独立的 PCIe 转多控制器 USB 扩展卡（Multi-Controller HBA） 以绕开单 xHCI 端点上限，并在 Linux 端配合自定义 udev 规则与异步并发对象存储上传守护进程。

#### 3. 离线清洗与任务编排（Layer 3）：为什么原片必须跑三大离线算子？Airflow 10,000 并发撞墙与 Airflow 4
- 核心认知（未经离线解算的 UMI 视频 = 普通 Ego 视频）：Brandes 明确指出，刚从 SD 卡拷出的原始视频如果直接用，和普通 Ego Data 没有本质区别；必须在线下跑通三大计算密集型算子，才能变成可训练的真机轨迹数据：
  1. 多路视频时间同步（Time Synchronization）：将不同相机的视频流做亚帧级时间对齐；
  2. 多视角视频配对（Multi-view Pairing）：将手腕第一视角与环境/双臂视角精确配对；
  3. 位姿与元数据提取（Pose & Metadata Extraction）：从视觉与几何先验中离线解算每一帧的 6-DoF 空间位姿轨迹、夹爪开合度及场景元数据。
- 10,000 并发任务撞墙与超越 Reddit：一年前（2025 年），当 Mega Uploader 的 300+ 个读卡器同时上传数据、所有请求并发涌入 Apache Airflow 管道时，并发任务数触及 ~10,000 个，Airflow 原生控制面（Control Plane / Scheduler 元数据库锁争用）彻底撞墙。团队向社区求助并联系到 Reddit 的一位工程师交流 DAG 拆分与任务协作，结果发现 Generalist 运行的并行任务计算规模已经超过了 Reddit 的 Airflow 系统。
- 自研 Airflow 4（⚠️ 内部魔改分支，非开源官方版本）：为解决海量并行任务同时运行时的 Control Plane 扩展瓶颈，Generalist 基于开源 Airflow 开发了内部扩展版 Airflow 4（注：Apache 官方主线截至 2026 年为 Airflow 2.x/3.x，并无官方 4.0，此处系公司内部代号）。

#### 4. 100 PB 存储与训练 I/O（Layer 4）：AV1 10:1 压缩 + DataLoader 帧级字节范围直读内存
- 100 PB → 10 PB 的两步降维：
  1. AV1 编码 + 存储布局优化：近 100 万小时原片总计约 100 PB，无法直接移动或塞入训练集群。管道先使用 Netflix / YouTube 同款的 AV1 视频编码算法配合自定义视频存储布局优化（Storage Layout Optimization），将数据量 10:1 压缩至约 10 PB。
  2. DataLoader 内部逐帧字节直读（Zero-Disk-Staging）：即便压到 10 PB 仍塞不进训练集群本地磁盘；若训练时下载完整视频，不仅占满本地盘、等待下载耗时，还会导致在单个视频内部反复过度采样（Over-sampling within a single video），破坏训练 Batch 的全局多样性。因此 Generalist 改写了训练 DataLoader：不下载完整视频，也不写入本地磁盘，而是直接在 DataLoader 内按时间步索引所需帧（例如只索引视频的第 0 秒、第 2 秒、第 4 秒及填充模型上下文所需的帧），只从远端拉取真正需要的帧数据字节（Byte-range fetch）并直接加载到内存中。
- 视频编码底层机制复核（⚠️ 关键工程机制补全）：AV1 是典型的帧间预测编码（Inter-frame GOP），非关键帧（P/B 帧）依赖前后参考帧，不可能在网络对象存储上对任意 P/B 帧做独立的零开销字节范围解码。要让 DataLoader 仅通过 HTTP Range Request 拉取对应字节就直接在内存解码出单帧，其前提提到的“针对视频存储布局进行优化”在工程上只有一种解法（本工作台推断）：在 AV1 转码时强制将 GOP 关键帧（Keyframe / Intra-only Chunk）间隔对齐到固定的采样步长（如每 2 秒一个关键帧），并在外部元数据表中预存每个关键帧的精确 Byte Offset 与 Byte Length——这也正好解释了为什么演讲者在台上手口一致地举例“直接索引第 1 帧（`t=0s`）、第 2 秒的帧（`t=2s`）、第 4 秒的帧（`t=4s`）”这一整 2 秒 倍数的采样步长。

#### 5. 跨洲网络与算力分层（Layer 5）：俄亥俄至悉尼 Direct Connect 专线 + Modal 按需微调
- 跨洋算存分离的代价：Generalist 的主数据存储池位于美国俄亥俄州（Ohio），而主力重型预训练集群之一位于澳大利亚悉尼（Sydney）（其余训练环境分布在世界各地，包括使用 Modal Volumes 的计算环境）。早期走公共互联网跨太平洋拉取数据，不仅传输极慢，还因云厂商 NAT Gateway 数据出口费（Egress Fee） 产生高昂账单（按 AWS 跨洲出网 \$0.05–\$0.09/GB 测算，拉取 10 PB 单轮即需 \$50万–\$90万）。
- CTO 驻场拉专线：联创兼 CTO Andrew J. Barry 花费大量时间亲自在数据中心部署和调试，在俄亥俄存储池与悉尼训练集群之间拉通了一条高度优化的 Direct Connect 专用光纤链路（与本库此前复核 Dropbox 收购 Tigris 时指出的“多云/跨洲算存分离必被 Egress 税反噬”完全印证）。
- 8 个月预训练曲线与 GEN-0 → GEN-1 → GEN-1.5 微调收敛：
  - 团队在 100 万小时序列上持续采样训练了 8 个月，横轴为模型接触的预训练数据量，纵轴为机器人空间位姿轨迹预测准确度（Pose Trajectory Prediction Accuracy），经历了三代跨越：
  - GEN-0（早期阶段）：需 ~1,000 小时任务专属数据微调，在部分任务上达到 ~80% 成功率，难以商业化规模扩充；
  - GEN-1（中段里程碑）：预训练多样性扩大并混入部分真机数据，学会动作恢复（Action Recovery）与空间运动先验，任务专属微调数据量降 10 倍至 ~100 小时，成功率跃升（官方博客披露达 99%、速度提升 3 倍）；
  - GEN-1.5（最新发布）：解锁 In-Context Learning（上下文学习 / One-Shot Prompting）——简单任务上只需给一个视频/指令 Prompt（3–12 秒示范），无需额外训练即可直接输出动作；复杂任务上仅需 ~1 小时任务专属数据做极速 Fine-tuning（演讲者称“甚至在我今天演讲期间开始采数，当天就能跑通模型部署上机”）。
- 为什么后训练切向 Modal 按需 GPU：当单任务微调数据从 1,000 小时压到 1 小时，实验瓶颈从“采数耗时数月”变成“实验室每周并发跑海量短平快微调作业”。固定预训练集群已被占满，因此团队利用 Modal On-demand GPUs + Modal Volumes 承接突发微调任务，使总任务吞吐量突破固定集群容量上限。
- 微调倍率核查（⚠️ 分母漂移警告）：官方三代博客与演讲并未锁定同一难度任务基准。GEN-0 的 1,000h 针对高难长程双臂灵巧操作，而 GEN-1.5 的 3–12s One-Shot 主要展示在分布内（In-Distribution）简单抓放与常规动作；预训练底座变强属实，但“1,000 倍数据压缩”混入了下游测试任务难度的变化。

### 三、横向对比：为什么学术开源 UMI-Live 停在百小时，而 Generalist 能铺到百万小时？

对照本库已入库的 [UMI-Live (arXiv:2610.39385)](%E4%BB%8E%E9%9B%B6%E4%BB%B6%E7%BB%84%E8%A3%85%E3%80%81%E6%95%B0%E6%8D%AE%E9%87%87%E9%9B%86%E5%88%B0%E6%A8%A1%E5%9E%8B%E8%AE%AD%E7%BB%83%EF%BC%8CUMI-Live%E5%85%A8%E6%B5%81%E7%A8%8B%E5%BC%80%E6%BA%90%EF%BD%9C%E5%8F%AF%E5%8A%A0%E8%A3%85%E8%A7%A6%E8%A7%89.md) 与 [Ego4WAM (arXiv:2609.40341)](Ego4WAM%EF%BC%9A%E5%BD%93%E4%BA%BA%E7%B1%BB%E6%95%B0%E6%8D%AE%E8%BF%88%E5%90%91%E7%99%BE%E4%B8%87%E5%B0%8F%E6%97%B6%EF%BC%8C%E6%8E%A2%E7%B4%A2%E6%95%B0%E6%8D%AE%E6%97%B6%E9%95%BF%E4%B9%8B%E5%A4%96%E7%9C%9F%E6%AD%A3%E5%80%BC%E5%BE%97%20scaling%20%E7%9A%84%E5%85%B3%E9%94%AE%E7%BB%B4%E5%BA%A6.md)，三条人类数据路线的设计取舍高度清晰：

| 维度 | 裸手第一视角视频 (Ego4WAM Tier-3 / 眼镜) | 学术开源端侧重算力夹爪 (UMI-Live) | 工业量产「端侧极简+中心重算」(Generalist UMI) | 证据状态 |
| --- | --- | --- | --- | --- |
| 端侧硬件与成本/重量 | 头戴相机（~50g，低成本） | 夹爪集成 LiDAR + 边缘算力盒 + 电池；双手 \$1,930，单手重 1.42 kg，续航仅 1.5h | 无源注塑单自由度夹爪 + 市售相机 + SD 卡（无 LiDAR、无边缘算力盒，百美元级） | 论文实测 ✅ / 厂商披露 ⚠️ |
| 位姿解算与上传链路 | 云端单目手部追踪（误差 25–31 mm）+ 27-DoF 人手重定向（误差 1–14 mm） | 端侧实时 SLAM 解算 + 现场 Wi-Fi 局域网上传 | SD 卡物理快递 + 300 槽 Mega Uploader + 云端 Airflow 4 离线批处理解算 | 论文实测 ✅ / 厂商披露 ⚠️ |
| 规模上限与核心死穴 | 10 万–100 万h 易得，但无精确末端动作标签，仅能训视觉世界模型先验 | 举 1.42 kg 半小时即肌肉疲劳，且边缘 Wi-Fi 易断，规模困在百至千小时级 | 跨过 100 万h（100 PB）；死穴是单自由度刚性夹爪缺失多指协同与六维力/触觉反馈 | 交叉验证 ✅ |

### 四、观点与可反驳条件

- ==观点==：Generalist 的「端侧无源注塑 UMI + SD 卡快递入湖 + 云端 Airflow 4 离线位姿解算 + AV1 关键帧字节偏移直读」是目前唯一跑通百万小时级（100 PB）真实操作数据闭环的工程范式，证明了把计算与网络复杂度从采集端剥离到中心机房（Edge-Zero）远优于学术界的端侧重算力方案（如 UMI-Live）。但这套基建采集的本质上是单自由度纯视觉轨迹，在刚体/半刚体抓放与视觉对准任务上能把微调需求压到小时级，却无法单靠把视频堆到 1,000 万小时来攻克依赖高频力觉闭环的工业盲操装配与多指灵巧操作。
- ==推翻条件==：
  1. 若 Generalist 在不加装力/触觉传感器的前提下，仅凭现有纯视觉 UMI 预训练模型在亚毫米级工业盲插/柔性排线插接（如 SynDexy C1 工况）独立评测中达到 ≥95% 连续成功率（将推翻“纯视觉 UMI 受限于接触后力控”的判断）；
  2. 若自动化 3D 仿真 + RL 路线（如 Ai2 MolmoBot）或裸手视频 + 极少真机路线（如 Ego4WAM）在 <5 万小时 真实数据成本下，于相同真机长尾测试集上打平 GEN-1.5 的泛化成功率（将推翻“必须建 100 PB 物理采集物流网”的重资产护城河判断）；
  3. 若 Generalist 公开 GEN-0 / 1 / 1.5 三代模型在同一高难长程基准上的同口径评测，证实 <1h 微调在复杂任务上同样达到 99% 成功率（将推翻“分母漂移”质疑）。

---

## 原文摘录与一手信源存证

> Kathleen Brandes 是 Generalist AI 的 Member of Technical Staff，毕业于 MIT，曾在 Boston Dynamics、Optimus Ride 和 Tesla 从事机器人软件、运动规划与机器学习相关工作。在 Tesla 期间，她参与开发 Tesla Bot 的端到端机器人操作策略，以及 Autopilot 自动变道算法。
> — 原文摘录，文字段落 1；证据 `digest-material-9c16ea2806ee64ff015b203930a7380a9ff5c1b0d3c5aed283aba0cfd43b3808-excerpt-1@1`

> 我是 Generalist AI 的技术团队成员。Generalist AI 正在构建机器人基础模型，我们希望打造最具灵巧操作能力的机器人基础模型，使其能够覆盖从家庭到工业领域的真实世界应用。
> — 原文摘录，文字段落 2；证据 `digest-material-9c16ea2806ee64ff015b203930a7380a9ff5c1b0d3c5aed283aba0cfd43b3808-excerpt-2@1`

> 模型还能够完成非常精确的插入操作，例如这里的扎带插入任务，也能够处理各种记忆任务和其他不同挑战。
> — 原文摘录，文字段落 3；证据 `digest-material-9c16ea2806ee64ff015b203930a7380a9ff5c1b0d3c5aed283aba0cfd43b3808-excerpt-3@1`

一手材料：

- The High-Stakes Infrastructure Problems That Are Defining Robotics (Kathleen Brandes @ Modal Runtime 2026) & Generalist AI GEN-0 / GEN-1 / GEN-1.5 Technical Dossier · Modal Runtime 2026 · Generalist AI / Generalist AI Official Blog & Automated Podcast · [原站](https://generalistai.com/blog/gen-1.5) · [主体档案：Generalist AI](../entities/companies/Generalist%20AI.md) / [主体档案：Modal](../entities/companies/Modal.md) / [主体档案：Kathleen Brandes](../entities/people/Kathleen%20Brandes.md) · [NotebookLM](https://notebook.google.com/notebook/33f0076b-fc09-42cc-9cd9-fecfb847ce1c) · [Drive](https://drive.google.com/drive/folders/1ZIgKmZ2N95-AOAlhhzs2GDQ2iZw3yT4S)
  材料版本 `digest-material-c5fce1d7c6bde31797fd9db3551c48213aababeb429efaac6f01a26de587d6f7@1`；获取方式 `primary_source_dossier_compilation`。
  > The WeChat article is a full Chinese translation of the technical conference talk given by Kathleen Brandes (Member of Technical Staff, Generalist AI) at Modal Runtime 2026 (San Francisco, October 1, 2026): "The High-Stakes Infrastructure Problems That Are Defining Robotics". — 原文提取
  > Deployed globally across diverse homes, warehouses, lighting conditions, and operators, Generalist AI has scaled its UMI corpus from 270,000+ hours (at GEN-0 launch in Nov 2025) to approaching 1,000,000 hours (~100 PB raw video, compressed 10:1 via AV1 to ~10 PB) by October 2026. — 原文提取

归属与范围：已定位微信文章《Generalist：百万小时数据的infra》的直接上游一手原片（Modal Runtime 2026 峰会演讲：Kathleen Brandes《The High-Stakes Infrastructure Problems That Are Defining Robotics》，2026-10-01）及三位联创（Pete Florence、Andrew J. Barry、Andy Zeng）配套的 4 期一手音频/视频播客与 GEN-0/1/1.5 官方技术博客；逐层保留五层数据基础设施工程细节并嵌入物理/系统量纲复核与可反驳条件。

来源缺口：

- `not_disclosed`：Generalist AI 未公开 GEN-0（1,000h 微调，80%）、GEN-1（100h，99%）与 GEN-1.5（\<1h / 3–12s One-Shot）三代模型对比所使用的具体评测任务清单、成功判定标准及失败模式分布，尚无法排除跨代评测任务难度变化导致的分母漂移。
- `not_disclosed`：内部扩展版 Airflow 4 的控制面改造细节、Mega Uploader 的 PCIe/USB 拓扑图纸及 AV1 按帧字节偏移 DataLoader 的 GOP 索引实现均未开源或发表技术白皮书。

[返回赛道总览](../赛道总览.md#digest-9c16ea2806ee64ff) · [返回导读索引](README.md) · [主体档案库](../entities/README.md)
