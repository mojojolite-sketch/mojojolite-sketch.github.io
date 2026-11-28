# NVIDIA GEAR Lab

[返回主体档案库](../README.md) · [返回赛道总览](../../赛道总览.md) · [单篇导读索引](../../blogs/README.md)

- 主体类别：🏛️ 实验室、高校与机构平台 (Labs & Institutions)
- 核心定位与说明：GR00T 2 与 X-Adapt 一手研发团队官网。
- 关联账号与官方入口：
  - Official Research Lab（NVIDIA GEAR Lab）：[机构／作者主页](https://research.nvidia.com/labs/gear/) · 登记对象 `digest-publisher-747090f4953209bb0660aa06` — GR00T 2 与 X-Adapt 一手研发团队官网。

<!-- curated-profile:begin -->
## 0. 组织层级定位与关联入口

- **所属母体**：[NVIDIA](../companies/NVIDIA.md) → Research · 具身基础模型分支（`research.nvidia.com/labs/gear/`），信源库状态为 `approved`（`lens`）。
- **联合负责人**：[Jim Fan (范麟熙)](../people/Jim%20Fan.md)（Director & Distinguished Scientist）与 [Yuke Zhu (朱玉可)](../people/Yuke%20Zhu.md)（Distinguished Scientist，兼 UT Austin 副教授）。
- **与他组边界**：专攻跨本体通用具身基础模型（Project GR00T N1 / 1.7 / GR00T 2 WAM）、SONIC 全身控制与 RoboTTT；不直接承担 Jetson/Isaac 商业化 P&L（由 [Deepu Talla](../people/Deepu%20Talla.md) 负责）或底层视觉解码加速（由 [NVIDIA LPR Lab](./NVIDIA%20LPR%20Lab.md) 主导）。
<!-- curated-profile:end -->

## 1. 核心研究问题与待核查争议（Questions & Open Debates）

### 💬 追问与核查：《英伟达 VFlash：Jim Fan宣告“System-1视觉新时代”｜模型…》

- 这个蛮有趣的，实现约 12 倍的视觉规划解码加速，我感觉是不是比VFA和VLM快了，怎么做到进步这么快的

关联文章：[《英伟达 VFlash：Jim Fan宣告“System-1视觉新时代”｜模型提速12倍》](../../blogs/%E8%8B%B1%E4%BC%9F%E8%BE%BE%20VFlash%EF%BC%9AJim%20Fan%E5%AE%A3%E5%91%8A%E2%80%9CSystem-1%E8%A7%86%E8%A7%89%E6%96%B0%E6%97%B6%E4%BB%A3%E2%80%9D%EF%BD%9C%E6%A8%A1%E5%9E%8B%E6%8F%90%E9%80%9F12%E5%80%8D.md)

> 追查结论摘要：在具身智能控制链路中，先区分三类角色：

### 🔍 待核查缺口与证据边界（Open Gaps）

- `not_disclosed`：NVIDIA LPR Lab 项目页与 arXiv:2611.25105v2 均未开放 MAWAM 的训练/推理代码仓、2.76B 团队微调权重及 Galaxea R1 Pro 双机同步遥操作数据集，且其底座 GR00T 2 权重在官方页亦标示预计 2026 年 12 月开源，外部团队暂无法独立复现真机 67.8% 与仿真 90.3% 指标。 [线索](https://research.nvidia.com/labs/lpr/mawam/)（关联：[《MAWAM: A Multi-Agent World-Action Model for Coordinated Manipulation》](../../blogs/MAWAM_%20A%20Multi-Agent%20World-Action%20Model%20for%20Coordinated%20Manipulation.md)）
- `pending_verification`：MAWAM 真机实验仅在两台锁死底盘与躯干的同构 Galaxea R1 Pro 上各测 30 次、无指尖触觉或腕部力矩传感，且依赖单卡 H100 集中式推理（0.32 s 模型耗时未含网络往返）与固定 \<= 4 台智能体的正则单形池；端侧 Jetson Thor 部署、异构多机及动态编队尚未经真机验证。 [线索](https://arxiv.org/html/2611.25105v2)（关联：[《MAWAM: A Multi-Agent World-Action Model for Coordinated Manipulation》](../../blogs/MAWAM_%20A%20Multi-Agent%20World-Action%20Model%20for%20Coordinated%20Manipulation.md)）
- `unavailable`：zhengyiluo.com 原始网页 HTML 及 VIRAL (arXiv:2511.15200)、Doorman (arXiv:2512.01061)、BFM-Zero (arXiv:2511.04131)、PLD (arXiv:2511.00091)、UniPhys (arXiv:2504.12540)、PDC (arXiv:2505.12278)、ASAP (arXiv:2502.01143)、HOVER (arXiv:2410.21229) 8 篇伴随论文完整 PDF 尚未本地下载全本，当前仅归档主页检索核验文本与库内既有 SONIC 完整 PDF。 [线索](https://www.zhengyiluo.com/)（关联：[《Zhengyi Luo (罗正宜) — 2025–2026 Humanoid & Embodied AI Research Profile》](../../blogs/Zhengyi%20Luo%20%28%E7%BD%97%E6%AD%A3%E5%AE%9C%29%20%E2%80%94%202025%E2%80%932026%20Humanoid%20%26%20Embodied%20AI%20Research%20Profile.md)）
- `pending_verification`：各论文报道的 Unitree G1 / H1 真机指标（Doorman 较人类遥操作快 31.7%、ASAP 追踪误差最多降 52.7%、PLD 在 LIBERO 达 99% 与真机 100%、BFM-Zero 经 InterEvolve 升至 86.5%）均源自作者团队实验条件与任务边界，尚缺独立第三方实验室硬件对照复现。（关联：[《Zhengyi Luo (罗正宜) — 2025–2026 Humanoid & Embodied AI Research Profile》](../../blogs/Zhengyi%20Luo%20%28%E7%BD%97%E6%AD%A3%E5%AE%9C%29%20%E2%80%94%202025%E2%80%932026%20Humanoid%20%26%20Embodied%20AI%20Research%20Profile.md)）
- `pending_verification`：在最复杂的 5 分钟十阶段装配 Gear Bot 上完整成功率仍仅 2/10，且 8K（~4–5 分钟）之后若继续扩展至半小时级跨任务长视野，快权重遗忘边界尚待评估 [线索](https://arxiv.org/abs/2607.15275)（关联：[《RoboTTT: Context Scaling for Robot Policies — 8,000-Timestep Test-Time Training Without Latency Inflation (CoRL 2026 Best Paper Finalist · arXiv:2607.15275)》](../../blogs/RoboTTT_%20Context%20Scaling%20for%20Robot%20Policies%20%E2%80%94%208%2C000-Timestep%20Test-Time%20Training%20Without%20Latency%20Inflation%20%28CoR.md)）
- `unavailable`：原巡检条目标注链接 https://blogs.nvidia.com/blog/2026/11/09/practice-makes-precise-corl/ 返回失效错误，已穿透定位并归档官方实际发布页 https://blogs.nvidia.com/blog/robotics-simulation-advancements-corl/ 与 GEAR Lab 项目页全文。 [线索](https://blogs.nvidia.com/blog/robotics-simulation-advancements-corl/)（关联：[《Jim Fan 与 NVIDIA 在 CoRL 2026 发布 GR00T 2 世界动作模型（WAM）及 10 万小时开源示范数据集》](../../blogs/Jim%20Fan%20%E4%B8%8E%20NVIDIA%20%E5%9C%A8%20CoRL%202026%20%E5%8F%91%E5%B8%83%20GR00T%202%20%E4%B8%96%E7%95%8C%E5%8A%A8%E4%BD%9C%E6%A8%A1%E5%9E%8B%EF%BC%88WAM%EF%BC%89%E5%8F%8A%2010%20%E4%B8%87%E5%B0%8F%E6%97%B6%E5%BC%80%E6%BA%90%E7%A4%BA%E8%8C%83%E6%95%B0%E6%8D%AE%E9%9B%86.md)）
- `not_disclosed`：GR00T 2 与 GR00T 2 Turbo 模型权重及 Cross-Adapt 代码在官网仍标示为 Available in December（预计 2026 年 12 月开源）；白皮书 50 项少样本任务来自至少达 80% 可学性的预筛选池，且合作企业 Foxconn、Siemens、Nexuni 等未披露产线良率、UPH 节拍与多小时连续运行 MTBF。 [线索](https://research.nvidia.com/labs/gear/gr00t-2/)（关联：[《Jim Fan 与 NVIDIA 在 CoRL 2026 发布 GR00T 2 世界动作模型（WAM）及 10 万小时开源示范数据集》](../../blogs/Jim%20Fan%20%E4%B8%8E%20NVIDIA%20%E5%9C%A8%20CoRL%202026%20%E5%8F%91%E5%B8%83%20GR00T%202%20%E4%B8%96%E7%95%8C%E5%8A%A8%E4%BD%9C%E6%A8%A1%E5%9E%8B%EF%BC%88WAM%EF%BC%89%E5%8F%8A%2010%20%E4%B8%87%E5%B0%8F%E6%97%B6%E5%BC%80%E6%BA%90%E7%A4%BA%E8%8C%83%E6%95%B0%E6%8D%AE%E9%9B%86.md)）
- `unavailable`：@DrJimFan 在 X 平台发布的具体 CoRL 2026 预热帖原始 status 链接、帖文全文及内嵌 1.0X 原速真机演示视频流，因 X 前端 JS 渲染与登录墙限制未在本地抓回全本（x.com/DrJimFan 仅返回 605.3K 粉丝主页外壳）；当前以 NVIDIA GEAR Lab GR00T 2 官方发布页、DreamDojo (arXiv:2602.06949) 及 DreamZero (arXiv:2602.15922) 一手资料穿透补全。 [线索](https://x.com/DrJimFan)（关联：[《Jim Fan (@DrJimFan)：CoRL 2026 主题演讲与 1.0X 原速真机自主操作预热视频澄清》](../../blogs/Jim%20Fan%20%28%40DrJimFan%29%EF%BC%9ACoRL%202026%20%E4%B8%BB%E9%A2%98%E6%BC%94%E8%AE%B2%E4%B8%8E%201.0X%20%E5%8E%9F%E9%80%9F%E7%9C%9F%E6%9C%BA%E8%87%AA%E4%B8%BB%E6%93%8D%E4%BD%9C%E9%A2%84%E7%83%AD%E8%A7%86%E9%A2%91%E6%BE%84%E6%B8%85.md)）
- `pending_verification`：1.0X 原速无剪辑真机演示虽可排除倍速剪辑疑虑，但单段演示之外的连续多小时平均故障间隔时间（MTBF）及人工接管率仍待 2026 年 12 月权重与 X-Adapt 代码正式开源后由独立第三方实验室复测验证。（关联：[《Jim Fan (@DrJimFan)：CoRL 2026 主题演讲与 1.0X 原速真机自主操作预热视频澄清》](../../blogs/Jim%20Fan%20%28%40DrJimFan%29%EF%BC%9ACoRL%202026%20%E4%B8%BB%E9%A2%98%E6%BC%94%E8%AE%B2%E4%B8%8E%201.0X%20%E5%8E%9F%E9%80%9F%E7%9C%9F%E6%9C%BA%E8%87%AA%E4%B8%BB%E6%93%8D%E4%BD%9C%E9%A2%84%E7%83%AD%E8%A7%86%E9%A2%91%E6%BE%84%E6%B8%85.md)）
- `unavailable`：论文与项目页指向的 GitHub 代码入口（https://github.com/NVlabs/Eagle/tree/main/Embodied）经核查目前仅包含前序工作 LocateAnything（ECCV 2026）及 nvidia/LocateAnything-3B 权重，VFlash 的 4B 具身底座权重、537M 扩散草稿器（Drafter）权重、训练配方脚本以及定制修改的 TensorRT-Edge-LLM 0.9.0/0.10.1 C++ 运行时插件尚未正式上传开源。 [线索](https://github.com/NVlabs/Eagle/tree/main/Embodied)（关联：[《英伟达 VFlash：Jim Fan宣告“System-1视觉新时代”｜模型提速12倍》](../../blogs/%E8%8B%B1%E4%BC%9F%E8%BE%BE%20VFlash%EF%BC%9AJim%20Fan%E5%AE%A3%E5%91%8A%E2%80%9CSystem-1%E8%A7%86%E8%A7%89%E6%96%B0%E6%97%B6%E4%BB%A3%E2%80%9D%EF%BD%9C%E6%A8%A1%E5%9E%8B%E6%8F%90%E9%80%9F12%E5%80%8D.md)）
- `pending_verification`：VFlash 报告的 12–49 倍加速仅针对 VLM 解码子阶段（计入 ViT、Prefill 与下游动作头后模型流水线整体提速为 2.6–5.7 倍，且评测中声明长度的 Tool-Call JSON 为预置提供、不含相机 I/O 与反 token 化耗时）；同时其 1 cm 空间量化网格（\[-5,5\]×\[-5,5\]×\[0,10\] m 内 1,001 个 bin）下的下游控制实验（MolmoSpaces、LIBERO-PRO、NAVSIM、Waymo）均在仿真器或离线数据集上完成，在真实物理机器人接触密集型任务与实车闭环控制中的鲁棒性有待跨本体真机独立验证。（关联：[《英伟达 VFlash：Jim Fan宣告“System-1视觉新时代”｜模型提速12倍》](../../blogs/%E8%8B%B1%E4%BC%9F%E8%BE%BE%20VFlash%EF%BC%9AJim%20Fan%E5%AE%A3%E5%91%8A%E2%80%9CSystem-1%E8%A7%86%E8%A7%89%E6%96%B0%E6%97%B6%E4%BB%A3%E2%80%9D%EF%BD%9C%E6%A8%A1%E5%9E%8B%E6%8F%90%E9%80%9F12%E5%80%8D.md)）
- `not_disclosed`：GR00T 2 白皮书披露 50 项评测任务系从「5 条演示微调可达 ≥80% 成功率」的可学池中预筛选得出，未披露未筛选全量工业长尾任务分母得分、DexBench/VABAR 分项绝对分值及连续 8 小时无剪辑运行 MTBF；核心模型权重与 X-Adapt 代码需待 2026 年 12 月正式开源后独立复现。 [线索](https://research.nvidia.com/labs/gear/gr00t-2/)（关联：[《GR00T 2 Official Technical Release: Scaling World-Action Models on 402,000 Hours of Human Video with X-Adapt & Jetson Thor 2B Turbo》](../../blogs/GR00T%202%20Official%20Technical%20Release_%20Scaling%20World-Action%20Models%20on%20402%2C000%20Hours%20of%20Human%20Video%20with%20X-Adapt%20%26.md)）
- `pending_verification`：Unidata 明确披露其仅规模化运营 Pico 4 Ultra 设备群，对 Meta Quest 3、Apple Vision Pro 与 Project Aria 的对照均基于官方开发文档与 EgoKit 论文而非同场实测；跨设备真实规模化单小时成本及“20 地点各 500 小时优于单一地点 2,000 小时”的经验法则尚缺对照消融实验。（关联：[《使用Pico 4 Ultra采集Egocentric Data：规格、对比与Workflow》](../../blogs/%E4%BD%BF%E7%94%A8Pico%204%20Ultra%E9%87%87%E9%9B%86Egocentric%20Data%EF%BC%9A%E8%A7%84%E6%A0%BC%E3%80%81%E5%AF%B9%E6%AF%94%E4%B8%8EWorkflow.md)）
- `not_disclosed`：Unidata 未公开其 4,050 小时 Egocentric Video Dataset 与 1,000 小时 Robotic Household Activities Dataset 的商业售价、每班次人工审核报废率（pass rate）以及经第三方策略训练验证的下游成功率收益。（关联：[《使用Pico 4 Ultra采集Egocentric Data：规格、对比与Workflow》](../../blogs/%E4%BD%BF%E7%94%A8Pico%204%20Ultra%E9%87%87%E9%9B%86Egocentric%20Data%EF%BC%9A%E8%A7%84%E6%A0%BC%E3%80%81%E5%AF%B9%E6%AF%94%E4%B8%8EWorkflow.md)）
- `unverified_claim`：实体关系入库跳过 (Unidata --produces--\> Egocentric Video Dataset (4,050h))：谓词 'produces' 不允许 to 实体类型 'company'（仅允许 \['product'\]）（关联：[《使用Pico 4 Ultra采集Egocentric Data：规格、对比与Workflow》](../../blogs/%E4%BD%BF%E7%94%A8Pico%204%20Ultra%E9%87%87%E9%9B%86Egocentric%20Data%EF%BC%9A%E8%A7%84%E6%A0%BC%E3%80%81%E5%AF%B9%E6%AF%94%E4%B8%8EWorkflow.md)）
- `unverified_claim`：实体关系入库跳过 (Unidata --uses\_artifact--\> ZED SDK)：谓词 'uses\_artifact' 不允许 to 实体类型 'company'（仅允许 \['product'\]）（关联：[《使用Pico 4 Ultra采集Egocentric Data：规格、对比与Workflow》](../../blogs/%E4%BD%BF%E7%94%A8Pico%204%20Ultra%E9%87%87%E9%9B%86Egocentric%20Data%EF%BC%9A%E8%A7%84%E6%A0%BC%E3%80%81%E5%AF%B9%E6%AF%94%E4%B8%8EWorkflow.md)）
- `not_disclosed`：2026-04随访谈开源的NVlabs/GR00T-WholeBodyControl仅涵盖推理部署与PICO VR遥操栈，训练代码与内部全量700小时动捕资产未开放（后续仅由合作伙伴通过BONES-SEED释放288小时子集）。（关联：[《专访罗正宜：关于SONIC全身控制框架的访谈》](../../blogs/%E4%B8%93%E8%AE%BF%E7%BD%97%E6%AD%A3%E5%AE%9C%EF%BC%9A%E5%85%B3%E4%BA%8ESONIC%E5%85%A8%E8%BA%AB%E6%8E%A7%E5%88%B6%E6%A1%86%E6%9E%B6%E7%9A%84%E8%AE%BF%E8%B0%88.md)）
- `pending_verification`：访谈与论文均确认SONIC缺乏深度/点云地形感知输入，无法上楼梯或跑酷（与Perceptive Humanoid Parkour存在接口耦合冲突），多模态地形泛化与日常居家精细杂活数据补全仍有待下一代工作验证。（关联：[《专访罗正宜：关于SONIC全身控制框架的访谈》](../../blogs/%E4%B8%93%E8%AE%BF%E7%BD%97%E6%AD%A3%E5%AE%9C%EF%BC%9A%E5%85%B3%E4%BA%8ESONIC%E5%85%A8%E8%BA%AB%E6%8E%A7%E5%88%B6%E6%A1%86%E6%9E%B6%E7%9A%84%E8%AE%BF%E8%B0%88.md)）
- `unavailable`：Danfei Xu于2026-02-26发表在X平台的长文《To Summon a Sensorimotor Ghost》受平台登录墙限制未形成开放HTTP全文存档，关键框架（Sensorimotor Ghost与makeshift System 2）系经专访引述交叉转述。（关联：[《专访Danfei Xu：人类数据是伪装成另一种形式的机器人数据》](../../blogs/%E4%B8%93%E8%AE%BFDanfei%20Xu%EF%BC%9A%E4%BA%BA%E7%B1%BB%E6%95%B0%E6%8D%AE%E6%98%AF%E4%BC%AA%E8%A3%85%E6%88%90%E5%8F%A6%E4%B8%80%E7%A7%8D%E5%BD%A2%E5%BC%8F%E7%9A%84%E6%9C%BA%E5%99%A8%E4%BA%BA%E6%95%B0%E6%8D%AE.md)）
- `pending_verification`：EgoScale（arXiv:2602.16710v1）所示对数线性Scaling规律依赖Stage II 50h对齐人手+4h真机中训（裸预训练成功率即由56%降至38%）及256 GB200高算力投入，该效应在低预算团队或纯无接触长尾工厂装配场景下的独立复现尚待验证。（关联：[《专访Danfei Xu：人类数据是伪装成另一种形式的机器人数据》](../../blogs/%E4%B8%93%E8%AE%BFDanfei%20Xu%EF%BC%9A%E4%BA%BA%E7%B1%BB%E6%95%B0%E6%8D%AE%E6%98%AF%E4%BC%AA%E8%A3%85%E6%88%90%E5%8F%A6%E4%B8%80%E7%A7%8D%E5%BD%A2%E5%BC%8F%E7%9A%84%E6%9C%BA%E5%99%A8%E4%BA%BA%E6%95%B0%E6%8D%AE.md)）

- [《MAWAM: A Multi-Agent World-Action Model for Coordinated Manipulation》](../../blogs/MAWAM_%20A%20Multi-Agent%20World-Action%20Model%20for%20Coordinated%20Manipulation.md)：已通过 ingest.fetch 抓回 arXiv:2611.25105v2 HTML 全文（83,418 字符）及 PDF 首页（23 页）、NVIDIA LPR Lab 官方项目页（research.nvidia.com/labs/lpr/mawam/，10,340 字符）完成全量穿透核查：13 位作者中 11 位署名 NVIDIA（横跨 Jan Kautz / Zhiding Yu 的 LPR Lab 与 Jim Fan / Johan Bjorck 的 GEAR Lab），仅 Xianzhe Fan / Hengshuang Zhao 兼署或署名香港大学（HKU）、Yecheng Wu 兼署 MIT，确认为 NVIDIA 主导的工业实验室联合成果而非纯高校学术论文；拆解了 4D RoPE 正单形身份编码、Action-to-Video Bias、两阶段训练、Table 1/2/3/7/8/9/11 全量定量消融，并定位出「推理期冻结未来帧几乎不损性能但删去未来 token 即归零」的共享工作区机理与 0.32 s H100 集中式推理边界；训练/部署代码与团队权重尚未开源及异构/触觉局限保留规范缺口。
- [《Zhengyi Luo (罗正宜) — 2025–2026 Humanoid & Embodied AI Research Profile》](../../blogs/Zhengyi%20Luo%20%28%E7%BD%97%E6%AD%A3%E5%AE%9C%29%20%E2%80%94%202025%E2%80%932026%20Humanoid%20%26%20Embodied%20AI%20Research%20Profile.md)：完成 zhengyiluo.com 一手主页溯源并复用库内已归档 SONIC（arXiv:2511.07820）全本 PDF；补齐罗正宜 2025–2026 年九篇核心论文（SONIC、VIRAL、Doorman、BFM-Zero、PLD、UniPhys、PDC、ASAP、HOVER）的 arXiv 出处、技术演进脉络与 Unitree G1/H1 真机关键量纲，并与库内既有 SONIC 访谈导读建立同目录相对引用；8 篇伴随论文全文 PDF 与第三方硬件独立复现保留来源缺口。
- [《RoboTTT: Context Scaling for Robot Policies — 8,000-Timestep Test-Time Training Without Latency Inflation (CoRL 2026 Best Paper Finalist · arXiv:2607.15275)》](../../blogs/RoboTTT_%20Context%20Scaling%20for%20Robot%20Policies%20%E2%80%94%208%2C000-Timestep%20Test-Time%20Training%20Without%20Latency%20Inflation%20%28CoR.md)：已用 arXiv:2607.15275v1 完整 PDF 替换原占位摘要：完整还原 RoboTTT 在 GR00T-N1.7 上引入 16 层 TTT 快权重至 8K 时间步（79% 总完成分、Gear Bot 唯一成功 2/10、One-Shot 65%），并澄清 8K 相对 1K 的 62%/63% 为相对增长率（71.5% vs 43.9%）。
- [《Jim Fan 与 NVIDIA 在 CoRL 2026 发布 GR00T 2 世界动作模型（WAM）及 10 万小时开源示范数据集》](../../blogs/Jim%20Fan%20%E4%B8%8E%20NVIDIA%20%E5%9C%A8%20CoRL%202026%20%E5%8F%91%E5%B8%83%20GR00T%202%20%E4%B8%96%E7%95%8C%E5%8A%A8%E4%BD%9C%E6%A8%A1%E5%9E%8B%EF%BC%88WAM%EF%BC%89%E5%8F%8A%2010%20%E4%B8%87%E5%B0%8F%E6%97%B6%E5%BC%80%E6%BA%90%E7%A4%BA%E8%8C%83%E6%95%B0%E6%8D%AE%E9%9B%86.md)：已穿透纠正原巡检失效链接并抓取 NVIDIA CoRL 2026 官方发布页（blogs.nvidia.com/blog/robotics-simulation-advancements-corl/）、NVIDIA GEAR Lab GR00T 2 技术发布页（research.nvidia.com/labs/gear/gr00t-2/）与 Hugging Face PhysicalAI-Human-1M-100K 数据集页面；系统梳理 100,000 小时开源子集与 402,730 小时内部全集层级、2B 参数 GR00T 2 Turbo 在 Unitree G1 机载 Jetson Thor 的 124 ms / 80 步动作块控制回路，以及 Nexuni、Foxconn、Siemens、MicroAGI、Skild AI、RLWRLD 等生态合作矩阵；权重预计 2026 年 12 月开源与 5-Shot 95% 任务池预筛选偏差保留缺口。
- [《Jim Fan (@DrJimFan)：CoRL 2026 主题演讲与 1.0X 原速真机自主操作预热视频澄清》](../../blogs/Jim%20Fan%20%28%40DrJimFan%29%EF%BC%9ACoRL%202026%20%E4%B8%BB%E9%A2%98%E6%BC%94%E8%AE%B2%E4%B8%8E%201.0X%20%E5%8E%9F%E9%80%9F%E7%9C%9F%E6%9C%BA%E8%87%AA%E4%B8%BB%E6%93%8D%E4%BD%9C%E9%A2%84%E7%83%AD%E8%A7%86%E9%A2%91%E6%BE%84%E6%B8%85.md)：替换原 vertexaisearch 重定向，复用并关联库内已归档 NVIDIA GEAR Lab GR00T 2 官方发布页（https://research.nvidia.com/labs/gear/gr00t-2/），并新抓归档 DreamDojo（arXiv:2602.06949）与 DreamZero（arXiv:2602.15922）一手网页；系统梳理 Jim Fan (@DrJimFan) 在 CoRL 2026 强调的「1.0X 原速真机自主运行透明准则」及从 44k 小时人类视频世界模型（DreamDojo）到 14B WAM（DreamZero 7 Hz）再收敛至端侧 2B GR00T 2 Turbo（System 1 执行 × System 2 Astra WAM API 规划）的技术栈跃迁，并与库内 GR00T 2 技术白皮书及 CoRL 演讲全文导读交叉链接；X 原始单条 status 链接及独立长时 MTBF 复测保留来源缺口。
- [《英伟达 VFlash：Jim Fan宣告“System-1视觉新时代”｜模型提速12倍》](../../blogs/%E8%8B%B1%E4%BC%9F%E8%BE%BE%20VFlash%EF%BC%9AJim%20Fan%E5%AE%A3%E5%91%8A%E2%80%9CSystem-1%E8%A7%86%E8%A7%89%E6%96%B0%E6%97%B6%E4%BB%A3%E2%80%9D%EF%BD%9C%E6%A8%A1%E5%9E%8B%E6%8F%90%E9%80%9F12%E5%80%8D.md)：完成一手信源追溯与深度分诊：获取 NVIDIA LPR / GEAR 实验室发布的《VFlash: Fast, Accurate Visual Planning via Flash Primitive Decoding》28页完整技术报告 PDF 与官方项目页，核查 NVlabs/Eagle GitHub 仓库开源状态；围绕用户关于“12倍视觉规划解码加速机制及与 VLA/VLM 对比”的提问完成逐页逐表拆解（明确 12x 解码加速 vs 5.1x 全流水线加速口径、对比 Qwen-Drive-1.0 与 Fast-dDrive 的端到端优势、以及免逐 token 验证整块接受+边界/位置对齐+537M 双向草稿器直接拟合真实几何标注超越 AR 底座 42.6% 的四大机制）；登记 NVIDIA GEAR Lab、NVIDIA LPR Lab、NVlabs、Jim Fan、Yu-Cheng Chou、Zhiding Yu 6 个发布主体入口并完成向上分组。
- [《GR00T 2 Official Technical Release: Scaling World-Action Models on 402,000 Hours of Human Video with X-Adapt & Jetson Thor 2B Turbo》](../../blogs/GR00T%202%20Official%20Technical%20Release_%20Scaling%20World-Action%20Models%20on%20402%2C000%20Hours%20of%20Human%20Video%20with%20X-Adapt%20%26.md)：完成 NVIDIA GEAR Lab（Jim Fan / Yuke Zhu 团队）GR00T 2 与 GR00T 2 Turbo 官方项目页及技术白皮书穿透核查：拆解 436,414 小时三源异构数据（402,730h 第一视角人类无标签视频 + 23,500h 真机遥操作 + 10,184h/2,897 任务手持 UMI，含 Hugging Face 开源 100,000h Human-1M 子集与 1/125 标注成本 FLORA 套件）、Cosmos-Predict2.5-2B 统一序列掩码流匹配机制（与 GR00T N1/N1.5、DreamZero 14B、VFlash、Ego4WAM、π0.5 横向对账）、Wan 2.2 VAE 1/4 视觉压缩在机载 Jetson Thor 上的 124 ms 实时闭环（驱动 Jetson Orin 50Hz SONIC 全身控制及 Astra WAM API/Edit/ASPIRE 协同），并复核 5-Shot 95% 成功率背后的 ≥80% 可学任务预筛选口径偏差与接触力控盲区。
- [《使用Pico 4 Ultra采集Egocentric Data：规格、对比与Workflow》](../../blogs/%E4%BD%BF%E7%94%A8Pico%204%20Ultra%E9%87%87%E9%9B%86Egocentric%20Data%EF%BC%9A%E8%A7%84%E6%A0%BC%E3%80%81%E5%AF%B9%E6%AF%94%E4%B8%8EWorkflow.md)：完成一手信源核验与分诊：复用 Unidata 官方工程博客(2026-08-21)及被引全部 7 篇 arXiv 一手论文(EgoMimic、EgoScale、EgoKit、TWIST2、EgoHumanoid、GMR、Data Scaling Laws)；核对 Pico 4 Ultra 生产参数(2,321h 仅头显 + 1,729h 多相机 = 4,050h)、软件同步阈值(2–3 ms 典型 / 11 ms P95)与 4-平台 SDK 差异，保留 Quest 3 跨设备实测成本与法规适用性待核查缺口。
- [《GR00T N1 & N1.5: An Open Foundation Model for Generalist Humanoid Robots (arXiv:2503.14734)》](../../blogs/GR00T%20N1%20%26%20N1.5_%20An%20Open%20Foundation%20Model%20for%20Generalist%20Humanoid%20Robots%20%28arXiv_2503.14734%29.md)：NVIDIA GEAR Lab 发布通用人形机器人开源基础模型 GR00T N1 与 N1.5 技术报告（https://arxiv.org/abs/2503.14734）及官方代码库 https://github.com/NVIDIA/Isaac-GR00T 与全身控制框架 https://github.com/NVlabs/GR00T-WholeBodyControl 。架构采用 Eagle VLM (System 2) + Diffusion Transformer (System 1) 双系统设计，融合真机…
- [《专访罗正宜：关于SONIC全身控制框架的访谈》](../../blogs/%E4%B8%93%E8%AE%BF%E7%BD%97%E6%AD%A3%E5%AE%9C%EF%BC%9A%E5%85%B3%E4%BA%8ESONIC%E5%85%A8%E8%BA%AB%E6%8E%A7%E5%88%B6%E6%A1%86%E6%9E%B6%E7%9A%84%E8%AE%BF%E8%B0%88.md)：完成专访（2026-04-16）与Science Robotics正刊论文（arXiv:2511.07820v4，官网验证Vol.11 Issue 117及BONES-SEED 288h子集渊源）的实证比对，并与工作台已有罗正宜人物档案建立清晰增量区隔：突出访谈独有的数字人历史资产来源、放弃在线神经Retargeting及通用vs跑酷接口冲突三大工程决策；全项核验99.2%真机124片段、1–2 ms Jetson端测与VLA 75%均分，保留训练代码闭源及三维地形能力缺失缺口。
- [《专访Danfei Xu：人类数据是伪装成另一种形式的机器人数据》](../../blogs/%E4%B8%93%E8%AE%BFDanfei%20Xu%EF%BC%9A%E4%BA%BA%E7%B1%BB%E6%95%B0%E6%8D%AE%E6%98%AF%E4%BC%AA%E8%A3%85%E6%88%90%E5%8F%A6%E4%B8%80%E7%A7%8D%E5%BD%A2%E5%BC%8F%E7%9A%84%E6%9C%BA%E5%99%A8%E4%BA%BA%E6%95%B0%E6%8D%AE.md)：完成专访（2026-03-23）与一手论文EgoScale（arXiv:2602.16710v1，官网发布2026-02-19，修正原有通用publisher字段）的全量实证比对：实测20,854h商业第一视角（零售20.1%为主导分布）+50h/4h对齐中训在Sharpa 22-DoF手拉动5项任务均值至56%（vs 2%，One-shot叠衣88%、拧瓶55%）且对数损失R^2=0.9983扎实；同步核对Aria Gen 2（96% SLAM精度）与对50–60家数采初创过剩的判断，保留X长文原生抓取及第三方低算力复现缺口。

## 2. 收录文章与一手材料（Ingested Articles & Primary Sources）

### [MAWAM: A Multi-Agent World-Action Model for Coordinated Manipulation](../../blogs/MAWAM_%20A%20Multi-Agent%20World-Action%20Model%20for%20Coordinated%20Manipulation.md)

2026-11-18 · 来源：NVIDIA LPR Lab · NVIDIA GEAR Lab · HKU · MIT (arXiv:2611.25105v2) · 状态：有来源缺口

[单篇导读（blogs/）](../../blogs/MAWAM_%20A%20Multi-Agent%20World-Action%20Model%20for%20Coordinated%20Manipulation.md) · [微信原件](../../../../raw/8f1cb39900b03eb9c40d6b280d45b04215ada8fa19eb4759d907fc176ee5b4af) · 固定版本 `digest-material-8f1cb39900b03eb9c40d6b280d45b04215ada8fa19eb4759d907fc176ee5b4af@1`

> Every move in a robot team changes the world in which its teammates must act. Coordinated manipulation therefore calls for predicting the team's actions together with the physical future they jointly create.

> We introduce MAWAM, a multi-agent world-action model that jointly generates each robot's future views and executable action chunks in a single sample. Built from a pretrained single-robot world-action backbone, MAWAM jointly denoises all robots' action and future-view tokens through cross-agent attention, while preserving a separate control interface for each robot.

关联一手材料：

- MAWAM: A Multi-Agent World-Action Model for Coordinated Manipulation (arXiv:2611.25105v2 Full Paper)（NVIDIA LPR Lab · NVIDIA GEAR Lab · HKU · MIT）· [原站](https://arxiv.org/abs/2611.25105v2) · [本地原件](../../../../raw/385309e9c3c241bde580b041e37a9e84963f13a5ada1b77ea36563a156151813) · 版本 `digest-material-385309e9c3c241bde580b041e37a9e84963f13a5ada1b77ea36563a156151813@1`
  > Every move in a robot team changes the world in which its teammates must act. Coordinated manipulation therefore calls for predicting the team’s actions together with the physical future they jointly create. — 原文提取

### [Zhengyi Luo (罗正宜) — 2025–2026 Humanoid & Embodied AI Research Profile](../../blogs/Zhengyi%20Luo%20%28%E7%BD%97%E6%AD%A3%E5%AE%9C%29%20%E2%80%94%202025%E2%80%932026%20Humanoid%20%26%20Embodied%20AI%20Research%20Profile.md)

2026-11-15 · 来源：罗正宜 (Zhengyi Luo) · NVIDIA GEAR · 状态：有来源缺口

[单篇导读（blogs/）](../../blogs/Zhengyi%20Luo%20%28%E7%BD%97%E6%AD%A3%E5%AE%9C%29%20%E2%80%94%202025%E2%80%932026%20Humanoid%20%26%20Embodied%20AI%20Research%20Profile.md) · [微信原件](../../../../raw/651099f6a9d2fce9fae2fb242e5eb1d7262dd29b5031a9bdcf3d0aedc273ba32) · 固定版本 `digest-material-651099f6a9d2fce9fae2fb242e5eb1d7262dd29b5031a9bdcf3d0aedc273ba32@1`

> 【信源巡检核心摘要】 罗正宜（NVIDIA GEAR Lab研究科学家，2025年5月加入；CMU博士）个人主页发表更新，涵盖2026年最新论文：SONIC（Science Robotics 2026年8月，超大规模全身运动跟踪控制）、VIRAL与Doorman（CVPR 2026）、PLD与BFM-Zero（ICLR 2026），以及2025年UniPhys（ICCV 2025 Highlight）、PDC（CVPR 2025 Workshop最佳论文）、ASAP（RSS 2025）和HOVER。

关联一手材料：

- Zhengyi Luo (罗正宜) — Personal Academic Homepage & 2025–2026 Publications（罗正宜 (Zhengyi Luo) · NVIDIA GEAR）· [原站](https://www.zhengyiluo.com/) · [本地原件](../../../../raw/7036a2b380a7e2882ee3943af41e2fcdcba2658795b702294783444ceb9a62d0) · 版本 `digest-material-7036a2b380a7e2882ee3943af41e2fcdcba2658795b702294783444ceb9a62d0@1`
  > Author: Zhengyi ("Zen") Luo — Senior Research Scientist at NVIDIA GEAR Lab (joined May 2025); Ph.D. from Carnegie Mellon University (CMU) Robotics Institute (advised by Prof. Kris Kitani); B.S. — 原文提取
- SONIC: Supersizing Motion Tracking for Natural Humanoid Whole-Body Control（Zhengyi Luo et al. / Science Robotics）· [原站](https://arxiv.org/abs/2511.07820) · [NotebookLM](https://notebook.google.com/notebook/33f0076b-fc09-42cc-9cd9-fecfb847ce1c) · [Drive](https://drive.google.com/file/d/1lh1mp-C2npU2dCE7foHM62SXcgfw0R-T/view?usp=drivesdk) · 版本 `digest-material-6580f9223b504c6420eb409bca849bdd968cec17af5c2e7e3c395bb9e1df4267@1`
  > Despite the rise of billion-parameter foundation models trained across thousands of graphical processing units (GPUs), similar scaling gains have not been shown for humanoid control. — PDF p.1

### [RoboTTT: Context Scaling for Robot Policies — 8,000-Timestep Test-Time Training Without Latency Inflation (CoRL 2026 Best Paper Finalist · arXiv:2607.15275)](../../blogs/RoboTTT_%20Context%20Scaling%20for%20Robot%20Policies%20%E2%80%94%208%2C000-Timestep%20Test-Time%20Training%20Without%20Latency%20Inflation%20%28CoR.md)

2026-11-12 · 来源：arXiv:2607.15275 · RoboTTT · 状态：有来源缺口

[单篇导读（blogs/）](../../blogs/RoboTTT_%20Context%20Scaling%20for%20Robot%20Policies%20%E2%80%94%208%2C000-Timestep%20Test-Time%20Training%20Without%20Latency%20Inflation%20%28CoR.md) · [微信原件](../../../../raw/2ddf7493c342156f9c48f4f735c8bfc85072b83235b225bb2e2ef2dd6e9c8c31) · 固定版本 `digest-material-2ddf7493c342156f9c48f4f735c8bfc85072b83235b225bb2e2ef2dd6e9c8c31@1`

> 【信源巡检核心摘要】 CoRL 2026（Austin，2,094 投 687 中）最佳论文决选（Best Paper Finalist）。

关联一手材料：

- RoboTTT: Context Scaling for Robot Policies — 8,000-Timestep Test-Time Training Without Latency Inflation (arXiv:2607.15275)（NVIDIA GEAR Lab / Stanford / UT Austin）· [原站](https://arxiv.org/abs/2607.15275) · [本地原件](../../../../raw/6e3cbcbc0ab4db0c20e693c905c9ff4e7f7afe726b15f8fb6dc3a6d7415e4ca0) · 版本 `digest-material-6e3cbcbc0ab4db0c20e693c905c9ff4e7f7afe726b15f8fb6dc3a6d7415e4ca0@1`
  > Figure 1: RoboTTT, a long-context visuomotor policy that integrates Test-Time Training (TTT) into robot foundation models, with context scaled to 8K timesteps. — PDF p.1

### [Jim Fan 与 NVIDIA 在 CoRL 2026 发布 GR00T 2 世界动作模型（WAM）及 10 万小时开源示范数据集](../../blogs/Jim%20Fan%20%E4%B8%8E%20NVIDIA%20%E5%9C%A8%20CoRL%202026%20%E5%8F%91%E5%B8%83%20GR00T%202%20%E4%B8%96%E7%95%8C%E5%8A%A8%E4%BD%9C%E6%A8%A1%E5%9E%8B%EF%BC%88WAM%EF%BC%89%E5%8F%8A%2010%20%E4%B8%87%E5%B0%8F%E6%97%B6%E5%BC%80%E6%BA%90%E7%A4%BA%E8%8C%83%E6%95%B0%E6%8D%AE%E9%9B%86.md)

2026-11-09 · 来源：NVIDIA · CoRL 2026 (GR00T 2 / Isaac Lab 3.0) · 状态：有来源缺口

[单篇导读（blogs/）](../../blogs/Jim%20Fan%20%E4%B8%8E%20NVIDIA%20%E5%9C%A8%20CoRL%202026%20%E5%8F%91%E5%B8%83%20GR00T%202%20%E4%B8%96%E7%95%8C%E5%8A%A8%E4%BD%9C%E6%A8%A1%E5%9E%8B%EF%BC%88WAM%EF%BC%89%E5%8F%8A%2010%20%E4%B8%87%E5%B0%8F%E6%97%B6%E5%BC%80%E6%BA%90%E7%A4%BA%E8%8C%83%E6%95%B0%E6%8D%AE%E9%9B%86.md) · [微信原件](../../../../raw/a9a0c7f0b641c24ae7d02b4233b17baaaeb6b162b4d4fb3764f4aa749fb83793) · 固定版本 `digest-material-a9a0c7f0b641c24ae7d02b4233b17baaaeb6b162b4d4fb3764f4aa749fb83793@1`

> 【信源巡检核心摘要】 NVIDIA 机器人总监 Jim Fan（@DrJimFan）于 2026 年 11 月 9–12 日 CoRL 2026 联合推出基于 Cosmos 架构的新一代世界动作模型（WAM）GR00T 2，采用单一扩散 Transformer 联合预测未来视觉帧与电机动作，支持超 20 步、5 分钟以上长程灵巧操作及 X-Adapt 跨本体迁移。

关联一手材料：

- GR00T 2: Scaling Robot Foundation Models for Generalization, Dexterity, and Adaptation（NVIDIA GEAR Lab）· [原站](https://research.nvidia.com/labs/gear/gr00t-2/) · [本地原件](../../../../raw/d59b15e263c9421ef17d0ed5a93ac42c2f6785eca4713cce122a6c04561b83a0) · 版本 `digest-material-d59b15e263c9421ef17d0ed5a93ac42c2f6785eca4713cce122a6c04561b83a0@1`
  > Scaling robot foundation models for generalization, dexterity, and adaptation. — 原文提取

### [Jim Fan (@DrJimFan)：CoRL 2026 主题演讲与 1.0X 原速真机自主操作预热视频澄清](../../blogs/Jim%20Fan%20%28%40DrJimFan%29%EF%BC%9ACoRL%202026%20%E4%B8%BB%E9%A2%98%E6%BC%94%E8%AE%B2%E4%B8%8E%201.0X%20%E5%8E%9F%E9%80%9F%E7%9C%9F%E6%9C%BA%E8%87%AA%E4%B8%BB%E6%93%8D%E4%BD%9C%E9%A2%84%E7%83%AD%E8%A7%86%E9%A2%91%E6%BE%84%E6%B8%85.md)

2026-11-09 · 来源：NVIDIA GEAR Lab · GR00T 2 Technical Release · 状态：有来源缺口

[单篇导读（blogs/）](../../blogs/Jim%20Fan%20%28%40DrJimFan%29%EF%BC%9ACoRL%202026%20%E4%B8%BB%E9%A2%98%E6%BC%94%E8%AE%B2%E4%B8%8E%201.0X%20%E5%8E%9F%E9%80%9F%E7%9C%9F%E6%9C%BA%E8%87%AA%E4%B8%BB%E6%93%8D%E4%BD%9C%E9%A2%84%E7%83%AD%E8%A7%86%E9%A2%91%E6%BE%84%E6%B8%85.md) · [微信原件](../../../../raw/0ae571b551bb31cf203097d3d7c04b9a424cb96c7ad108a27b1f0839c3bc9fe5) · 固定版本 `digest-material-0ae571b551bb31cf203097d3d7c04b9a424cb96c7ad108a27b1f0839c3bc9fe5@1`

> 【信源巡检核心摘要】 NVIDIA Project GR00T 联合负责人兼 GEAR 具身智能研究主管 Jim Fan（X 账号 @DrJimFan）在 2026-11-09 至 11-12 德州奥斯汀 CoRL 2026 大会期间及会前在 X 引发广泛传播。

关联一手材料：

- GR00T 2 Official Technical Release: Scaling World-Action Models on 402,000 Hours of Human Video with X-Adapt & Jetson Thor 2B Turbo（NVIDIA GEAR Lab）· [原站](https://research.nvidia.com/labs/gear/gr00t-2/) · [本地原件](../../../../raw/c6f1bcb6d99d80a10ee03de0b047c533b6a55b761aecc635d5dd8bdad433f654) · 版本 `digest-material-c6f1bcb6d99d80a10ee03de0b047c533b6a55b761aecc635d5dd8bdad433f654@1`
  > 【信源巡检核心摘要】 NVIDIA GEAR Lab 在 CoRL 2026 正式上线下一代机器人基础模型 GR00T 2 官方技术页与白皮书（https://research.nvidia.com/labs/gear/gr00t-2/ ，代码栈关联 https://github.com/NVIDIA/Isaac-GR00T ）。 — 原文提取

### [英伟达 VFlash：Jim Fan宣告“System-1视觉新时代”｜模型提速12倍](../../blogs/%E8%8B%B1%E4%BC%9F%E8%BE%BE%20VFlash%EF%BC%9AJim%20Fan%E5%AE%A3%E5%91%8A%E2%80%9CSystem-1%E8%A7%86%E8%A7%89%E6%96%B0%E6%97%B6%E4%BB%A3%E2%80%9D%EF%BD%9C%E6%A8%A1%E5%9E%8B%E6%8F%90%E9%80%9F12%E5%80%8D.md)

2026-11-06 · 来源：NVIDIA LPR Lab · VFlash (Jim Fan) · 状态：有来源缺口

[单篇导读（blogs/）](../../blogs/%E8%8B%B1%E4%BC%9F%E8%BE%BE%20VFlash%EF%BC%9AJim%20Fan%E5%AE%A3%E5%91%8A%E2%80%9CSystem-1%E8%A7%86%E8%A7%89%E6%96%B0%E6%97%B6%E4%BB%A3%E2%80%9D%EF%BD%9C%E6%A8%A1%E5%9E%8B%E6%8F%90%E9%80%9F12%E5%80%8D.md) · [微信原件](../../../../raw/eb02a2476c3b0673ddb832d42bce73edafc6a2f38e22b56235a8412a06f461e0) · 固定版本 `digest-material-eb02a2476c3b0673ddb832d42bce73edafc6a2f38e22b56235a8412a06f461e0@1`

> 为什么重要 ： 机器人抓取物体、汽车规划行驶路线，都需要随着环境变化不断更新计划。视觉语言模型逐个生成坐标，会让更细致的规划伴随更长的等待。VFlash 压缩了感知与行动之间的这段计算时间，也回应了 Jim Fan 强调的方向：自主机器需要在自己的芯片上完成思考，让视觉能力跟上行动的节奏。

> 快速跟上 ： VFlash 利用的是几何输出已有的结构。Jim Fan 举例，在相应编码方式下，一个边界框占 6 个 token，一条包含 10 个路径点的机械臂轨迹占 54 个，输出格式可以提前确定。VFlash 先按任务指定长度和坐标布局，再让一个轻量模型一次并行预测完整结构。轨迹需要多少个点可以变化，确定结构后就能整体生成。

关联一手材料：

- VFlash: Fast, Accurate Visual Planning via Flash Primitive Decoding（Yu-Cheng Chou, Shihao Wang, Jin Huang, Linxi "Jim" Fan, Jan Kautz, Zhiding Yu et al. / NVIDIA, Johns Hopkins University, HKPolyU, Purdue, HKU）· [原站](https://research.nvidia.com/labs/lpr/vflash/) · [NotebookLM](https://notebook.google.com/notebook/33f0076b-fc09-42cc-9cd9-fecfb847ce1c) · [Drive](https://drive.google.com/file/d/1E-b3yha4VNic3TjQprqkAr_OKWb7Rzdu/view?usp=drivesdk) · 版本 `digest-material-4850e501621a8d3c5d234dacad88a714335f51f887decb795af7616286387b95@1`
  > Figure 1: VFlash is a generalist decoding framework for fast, accurate visual planning across Physical AI tasks such as robotics and autonomous driving. — PDF p.1

### [GR00T 2 Official Technical Release: Scaling World-Action Models on 402,000 Hours of Human Video with X-Adapt & Jetson Thor 2B Turbo](../../blogs/GR00T%202%20Official%20Technical%20Release_%20Scaling%20World-Action%20Models%20on%20402%2C000%20Hours%20of%20Human%20Video%20with%20X-Adapt%20%26.md)

2026-11-04 · 来源：NVIDIA GEAR Lab · GR00T 2 Technical Release · 状态：有来源缺口

[单篇导读（blogs/）](../../blogs/GR00T%202%20Official%20Technical%20Release_%20Scaling%20World-Action%20Models%20on%20402%2C000%20Hours%20of%20Human%20Video%20with%20X-Adapt%20%26.md) · [微信原件](../../../../raw/c6f1bcb6d99d80a10ee03de0b047c533b6a55b761aecc635d5dd8bdad433f654) · 固定版本 `digest-material-c6f1bcb6d99d80a10ee03de0b047c533b6a55b761aecc635d5dd8bdad433f654@1`

> 【信源巡检核心摘要】 NVIDIA GEAR Lab 在 CoRL 2026 正式上线下一代机器人基础模型 GR00T 2 官方技术页与白皮书（https://research.nvidia.com/labs/gear/gr00t-2/ ，代码栈关联 https://github.com/NVIDIA/Isaac-GR00T ）。

关联一手材料：

- GR00T 2 Official Technical Release: Scaling World-Action Models on 402,000 Hours of Human Video with X-Adapt & Jetson Thor 2B Turbo（NVIDIA GEAR Lab）· [原站](https://research.nvidia.com/labs/gear/gr00t-2/) · [本地原件](../../../../raw/c6f1bcb6d99d80a10ee03de0b047c533b6a55b761aecc635d5dd8bdad433f654) · 版本 `digest-material-c6f1bcb6d99d80a10ee03de0b047c533b6a55b761aecc635d5dd8bdad433f654@1`
  > 【信源巡检核心摘要】 NVIDIA GEAR Lab 在 CoRL 2026 正式上线下一代机器人基础模型 GR00T 2 官方技术页与白皮书（https://research.nvidia.com/labs/gear/gr00t-2/ ，代码栈关联 https://github.com/NVIDIA/Isaac-GR00T ）。 — 原文提取

### [使用Pico 4 Ultra采集Egocentric Data：规格、对比与Workflow](../../blogs/%E4%BD%BF%E7%94%A8Pico%204%20Ultra%E9%87%87%E9%9B%86Egocentric%20Data%EF%BC%9A%E8%A7%84%E6%A0%BC%E3%80%81%E5%AF%B9%E6%AF%94%E4%B8%8EWorkflow.md)

2026-09-14 · 来源：Unidata · Production Workflow · 状态：有来源缺口

[单篇导读（blogs/）](../../blogs/%E4%BD%BF%E7%94%A8Pico%204%20Ultra%E9%87%87%E9%9B%86Egocentric%20Data%EF%BC%9A%E8%A7%84%E6%A0%BC%E3%80%81%E5%AF%B9%E6%AF%94%E4%B8%8EWorkflow.md) · [微信原件](../../../../raw/11321de331892daf77b4a57c3b843e745f411f0f96235835315444d9de21061c) · 固定版本 `digest-material-11321de331892daf77b4a57c3b843e745f411f0f96235835315444d9de21061c@1`

> 你可以在 Pico 4 Ultra上部署自己的录制服务，并直接从头显读取其摄像头、手部追踪和全身姿态数据。并非每款头显都允许你触达这些数据，正是这种访问权限让egocentric 数据采集在此变得切实可行。

> 不过，仅靠头显无法覆盖fine manipulation。这需要腕部摄像头，而随之而来的是需要对齐的第二个时钟，以及每个 episode 都要通过的一次检查。这就是我们运行的两套setup ，在采集项目中，选择其中一套是第一个真正的决策。

关联一手材料：

- EgoScale: Scaling Dexterous Manipulation with Diverse Egocentric Human Data（论文作者）· [原站](https://arxiv.org/abs/2602.16710) · [NotebookLM](https://notebook.google.com/notebook/cac99041-d3b9-449e-a192-12bb4b1ad391) · [Drive](https://drive.google.com/file/d/1CUTnSUejWUAe8aHEIJZunMgoxTmzCkL1/view?usp=drivesdk) · 版本 `digest-material-39c691baf374a154e26ffc0098b97037875909495013d4017d97761716ff2735@1`
  > Human behavior is among the most scalable sources of data for learning physical intelligence, yet how to effectively leverage it for dexterous manipulation remains unclear. — PDF p.1

### [GR00T N1 & N1.5: An Open Foundation Model for Generalist Humanoid Robots (arXiv:2503.14734)](../../blogs/GR00T%20N1%20%26%20N1.5_%20An%20Open%20Foundation%20Model%20for%20Generalist%20Humanoid%20Robots%20%28arXiv_2503.14734%29.md)

2026-06-15 · 来源：arXiv:2503.14734 · GR00T N1 & N1.5 · 状态：已整理

[单篇导读（blogs/）](../../blogs/GR00T%20N1%20%26%20N1.5_%20An%20Open%20Foundation%20Model%20for%20Generalist%20Humanoid%20Robots%20%28arXiv_2503.14734%29.md) · [微信原件](../../../../raw/c9a0741e776758e779354cc88a1fd8559e8046bff55f8b58cd12e7937629373e) · 固定版本 `digest-material-c9a0741e776758e779354cc88a1fd8559e8046bff55f8b58cd12e7937629373e@2`

> 【信源巡检核心摘要】 NVIDIA GEAR Lab 发布通用人形机器人开源基础模型 GR00T N1 与 N1.5 技术报告（https://arxiv.org/abs/2503.14734）及官方代码库 https://github.com/NVIDIA/Isaac-GR00T 与全身控制框架 https://github.com/NVlabs/GR00T-WholeBodyControl 。

关联一手材料：

- GR00T N1 & N1.5: An Open Foundation Model for Generalist Humanoid Robots (arXiv:2503.14734)（NVIDIA GEAR Lab）· [原站](https://arxiv.org/abs/2503.14734) · [本地原件](../../../../raw/c9a0741e776758e779354cc88a1fd8559e8046bff55f8b58cd12e7937629373e) · 版本 `digest-material-c9a0741e776758e779354cc88a1fd8559e8046bff55f8b58cd12e7937629373e@2`
  > 【信源巡检核心摘要】 NVIDIA GEAR Lab 发布通用人形机器人开源基础模型 GR00T N1 与 N1.5 技术报告（https://arxiv.org/abs/2503.14734）及官方代码库 https://github.com/NVIDIA/Isaac-GR00T 与全身控制框架 https://github.com/NVlabs/GR00T-WholeBodyControl 。 — 原文提取

### [专访罗正宜：关于SONIC全身控制框架的访谈](../../blogs/%E4%B8%93%E8%AE%BF%E7%BD%97%E6%AD%A3%E5%AE%9C%EF%BC%9A%E5%85%B3%E4%BA%8ESONIC%E5%85%A8%E8%BA%AB%E6%8E%A7%E5%88%B6%E6%A1%86%E6%9E%B6%E7%9A%84%E8%AE%BF%E8%B0%88.md)

2026-04-16 · 来源：NVIDIA GEAR Lab · SONIC (Science Robotics) · 状态：有来源缺口

[单篇导读（blogs/）](../../blogs/%E4%B8%93%E8%AE%BF%E7%BD%97%E6%AD%A3%E5%AE%9C%EF%BC%9A%E5%85%B3%E4%BA%8ESONIC%E5%85%A8%E8%BA%AB%E6%8E%A7%E5%88%B6%E6%A1%86%E6%9E%B6%E7%9A%84%E8%AE%BF%E8%B0%88.md) · [微信原件](../../../../raw/78635547d80283dd65b7330031ae1e0473bddd3885101ebf5b26a24cb5bc858e) · 固定版本 `digest-material-78635547d80283dd65b7330031ae1e0473bddd3885101ebf5b26a24cb5bc858e@1`

> 人形机器人通用控制器系列，我们在专访Xue Bin(Jason) Peng：探索人形机器人全身运控的通用控制器，专访罗正宜：解密PHC——人形机器人通用控制器，以及2025年的Human Data系列总结篇：Human Data— The “Key” to Robot Data的一系列采访都有涉及。这期文章，我再次邀请到了罗正宜博士，来聊一聊在人形机器人全身运控领域家喻户晓的工作SONIC。

> 罗正宜（Zhengyi Luo）是英伟达GEAR实验室的一名研究科学家，博士毕业于CMU，他的导师是 Kris Kitani 教授。在此之前，他于2019年在宾夕法尼亚大学获得了本科学位，并曾在 Kostas Daniilidis 教授的指导下开展研究工作。罗正宜博士的的研究兴趣主要集中在视觉、学习与机器人技术的交叉领域。主要研究方向包括人体姿态估计、人-物交互建模、人类运动建模等。

关联一手材料：

- SONIC: Supersizing Motion Tracking for Natural Humanoid Whole-Body Control（Zhengyi Luo et al. / Science Robotics）· [原站](https://arxiv.org/abs/2511.07820) · [NotebookLM](https://notebook.google.com/notebook/33f0076b-fc09-42cc-9cd9-fecfb847ce1c) · [Drive](https://drive.google.com/file/d/1lh1mp-C2npU2dCE7foHM62SXcgfw0R-T/view?usp=drivesdk) · 版本 `digest-material-6580f9223b504c6420eb409bca849bdd968cec17af5c2e7e3c395bb9e1df4267@1`
  > Despite the rise of billion-parameter foundation models trained across thousands of graphical processing units (GPUs), similar scaling gains have not been shown for humanoid control. — PDF p.1

### [专访Danfei Xu：人类数据是伪装成另一种形式的机器人数据](../../blogs/%E4%B8%93%E8%AE%BFDanfei%20Xu%EF%BC%9A%E4%BA%BA%E7%B1%BB%E6%95%B0%E6%8D%AE%E6%98%AF%E4%BC%AA%E8%A3%85%E6%88%90%E5%8F%A6%E4%B8%80%E7%A7%8D%E5%BD%A2%E5%BC%8F%E7%9A%84%E6%9C%BA%E5%99%A8%E4%BA%BA%E6%95%B0%E6%8D%AE.md)

2026-03-23 · 来源：NVIDIA & Georgia Tech · EgoScale (arXiv:2602.16710) · 状态：有来源缺口

[单篇导读（blogs/）](../../blogs/%E4%B8%93%E8%AE%BFDanfei%20Xu%EF%BC%9A%E4%BA%BA%E7%B1%BB%E6%95%B0%E6%8D%AE%E6%98%AF%E4%BC%AA%E8%A3%85%E6%88%90%E5%8F%A6%E4%B8%80%E7%A7%8D%E5%BD%A2%E5%BC%8F%E7%9A%84%E6%9C%BA%E5%99%A8%E4%BA%BA%E6%95%B0%E6%8D%AE.md) · [微信原件](../../../../raw/6b994c422a6b5ed6332abda16ec1d5b63ec609df2cc1b637063d998161f90937) · 固定版本 `digest-material-6b994c422a6b5ed6332abda16ec1d5b63ec609df2cc1b637063d998161f90937@1`

> 关于Human Data，我们在2025年用了大半年的时间去展现以及科普一些最前沿的学术工作，集锦可以参考总结篇：Human Data—The “Key” to Robot Data。去年的工作汇总更多的是在全身运动控制，在进入2026年，随着EgoScale等工作发布，我们看到了人类数据在机器人操作上的可能性。

> Danfei Xu是Georgia Tech的助理教授，同时也参与NVIDIA Research的部分研究工作。他于 2021 年在斯坦福大学获得计算机科学博士学位，师从李飞飞（Fei-Fei Li）和 Silvio Savarese，本科毕业于哥伦比亚大学工程与应用科学学院。

关联一手材料：

- EgoScale: Scaling Dexterous Manipulation with Diverse Egocentric Human Data（论文作者）· [原站](https://arxiv.org/abs/2602.16710) · [NotebookLM](https://notebook.google.com/notebook/cac99041-d3b9-449e-a192-12bb4b1ad391) · [Drive](https://drive.google.com/file/d/1CUTnSUejWUAe8aHEIJZunMgoxTmzCkL1/view?usp=drivesdk) · 版本 `digest-material-39c691baf374a154e26ffc0098b97037875909495013d4017d97761716ff2735@1`
  > Human behavior is among the most scalable sources of data for learning physical intelligence, yet how to effectively leverage it for dexterous manipulation remains unclear. — PDF p.1


## 3. 关联实体网络（Verified Entity Ontology）

- → [NVIDIA](../companies/NVIDIA.md) · 任职 / 隶属 · Research（decision1_verified/verified）
- ← [Jim Fan](../people/Jim%20Fan.md) · 实验室联合负责人 (GR00T/VFlash)（human_certified/verified）
- → RLWRLD · 合作 / 联合研发 · DexBench（decision1_verified/verified）
- → Bones Studio · 合作 / 联合研发 · BONES-SEED（decision1_verified/verified）
- → UT Austin · 合作 / 联合研发 · RoboTTT（rule_verified/verified）
- → UC Berkeley · 合作 / 联合研发 · VABAR（decision1_verified/verified）
- ← [罗正宜](../people/%E7%BD%97%E6%AD%A3%E5%AE%9C.md) · SONIC 42M 全身运控一作（human_certified/verified）
- ← [NVIDIA LPR Lab](../labs/NVIDIA%20LPR%20Lab.md) · 合作 / 联合研发（rule_verified/verified）
- → [Stanford University](../labs/Stanford%20University.md) · 合作 / 联合研发 · RoboTTT（rule_verified/verified）
- ← [Yuke Zhu](../people/Yuke%20Zhu.md) · 实验室联合负责人 (GR00T N1.5)（human_certified/verified）
