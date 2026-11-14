---
title: "使用Pico 4 Ultra采集Egocentric Data：规格、对比与Workflow"
type: blog_digest
sector: "具身智能"
source: "Unidata"
published_at: "2026-09-14"
raw_sha256: "11321de331892daf77b4a57c3b843e745f411f0f96235835315444d9de21061c"
material_version: "digest-material-11321de331892daf77b4a57c3b843e745f411f0f96235835315444d9de21061c@1"
origin_url: "https://unidata.pro/blog/pico-4-ultra-for-egocentric-data-collection/"
trigger_source: "human five"
trigger_url: ""
user_comments: ""
status: "processed_with_gaps"
---

<a id="digest-11321de331892daf"></a>
# 使用Pico 4 Ultra采集Egocentric Data：规格、对比与Workflow

2026-09-14 · Unidata · 有来源缺口

[本地原件归档](../../../raw/11321de331892daf77b4a57c3b843e745f411f0f96235835315444d9de21061c) · 固定材料版本 `digest-material-11321de331892daf77b4a57c3b843e745f411f0f96235835315444d9de21061c@1` · [一手原站](https://unidata.pro/blog/pico-4-ultra-for-egocentric-data-collection/)

> 你可以在 Pico 4 Ultra上部署自己的录制服务，并直接从头显读取其摄像头、手部追踪和全身姿态数据。并非每款头显都允许你触达这些数据，正是这种访问权限让egocentric 数据采集在此变得切实可行。
> — 原文摘录，PDF p.1；证据 `digest-material-11321de331892daf77b4a57c3b843e745f411f0f96235835315444d9de21061c-excerpt-1@1`

> 不过，仅靠头显无法覆盖fine manipulation。这需要腕部摄像头，而随之而来的是需要对齐的第二个时钟，以及每个 episode 都要通过的一次检查。这就是我们运行的两套setup ，在采集项目中，选择其中一套是第一个真正的决策。
> — 原文摘录，PDF p.1；证据 `digest-material-11321de331892daf77b4a57c3b843e745f411f0f96235835315444d9de21061c-excerpt-2@1`

> 一个经过训练的 policy—— 即把机器人看到的内容转化为其运动方式的模型—— 能否迁移，取决于egocentric 与外部视角（exocentric ）数据之间的区别。俯视摄像头记录的是任务本身；头戴式或腕戴式摄像头记录的才是机器人将要看到的内容。对manipulation 最重要的信号只有从任务内部才能看到：手相对于物体的位置、grasp closure 的几何形态、接触发生的精确时刻。
> — 原文摘录，PDF p.2；证据 `digest-material-11321de331892daf77b4a57c3b843e745f411f0f96235835315444d9de21061c-excerpt-3@1`

一手材料：

- Pico 4 Ultra for Egocentric Data Collection: Specs and Production Workflow — Unidata · Unidata · [原站](https://unidata.pro/blog/pico-4-ultra-for-egocentric-data-collection/) · [主体档案：Unidata](../entities/companies/Unidata.md) · [NotebookLM](https://notebook.google.com/notebook/cac99041-d3b9-449e-a192-12bb4b1ad391) · [Drive](https://drive.google.com/file/d/16qN7xlt9NROFJg6E7OQBFHUJtfbEw6Sh/view?usp=drivesdk)
  材料版本 `digest-material-2f958e380bd7c8819eea008eb9a9caa2596a5c5a5ab2518e25abda3c55f92919@2`；获取方式 `http_full_text`。
  > You can put your own recording service on a Pico 4 Ultra and read its cameras, its hand tracking and full-body pose straight off the headset. — 原文提取
  > The headset alone will not cover fine manipulation, though. That takes wrist cameras, and with them come a second clock to reconcile and a per-episode check to pass. — 原文提取
- EgoMimic: Scaling Imitation Learning via Egocentric Video · 论文作者 · [原站](https://arxiv.org/abs/2410.24221) · [主体档案：Simar Kareer](../entities/people/Simar%20Kareer.md) · [NotebookLM](https://notebook.google.com/notebook/cac99041-d3b9-449e-a192-12bb4b1ad391) · [Drive](https://drive.google.com/file/d/13hhjhZ5rc8Ha4TwcYSEvrpySle0Rdzix/view?usp=drivesdk)
  材料版本 `digest-material-227fe304bd198d2c54242ec3aaf5c7eaa78579059820228f46005734a3784c85@1`；获取方式 `http_pdf`。
  > Fig. 1: EgoMimic unlocks human embodiment data—egocentric videos paired with 3D hand tracks—as a new scalable data source for imitation learning. — PDF p.1
  > Abstract— The scale and diversity of demonstration data required for imitation learning is a significant challenge. — PDF p.1
- EgoScale: Scaling Dexterous Manipulation with Diverse Egocentric Human Data · 论文作者 · [原站](https://arxiv.org/abs/2602.16710) · [主体档案：Danfei Xu](../entities/people/Danfei%20Xu.md) / [主体档案：NVIDIA GEAR Lab](../entities/labs/NVIDIA%20GEAR%20Lab.md) / [主体档案：Ruijie Zheng](../entities/people/Ruijie%20Zheng.md) · [NotebookLM](https://notebook.google.com/notebook/cac99041-d3b9-449e-a192-12bb4b1ad391) · [Drive](https://drive.google.com/file/d/1CUTnSUejWUAe8aHEIJZunMgoxTmzCkL1/view?usp=drivesdk)
  材料版本 `digest-material-39c691baf374a154e26ffc0098b97037875909495013d4017d97761716ff2735@1`；获取方式 `http_pdf`。
  > Human behavior is among the most scalable sources of data for learning physical intelligence, yet how to effectively leverage it for dexterous manipulation remains unclear. — PDF p.1
  > Human behavior is one of the most scalable sources of data for learning physical intelligence. — PDF p.1
- EgoKit: Towards Unified Low-Cost Egocentric Data Collection with Heterogeneous Devices · 论文作者 · [原站](https://arxiv.org/abs/2605.16797) · [主体档案：Liuchuan Yu](../entities/people/Liuchuan%20Yu.md) · [NotebookLM](https://notebook.google.com/notebook/cac99041-d3b9-449e-a192-12bb4b1ad391) · [Drive](https://drive.google.com/file/d/1VMmLsUHRpkg-5S9VRYjVyLLs48NxubEP/view?usp=drivesdk)
  材料版本 `digest-material-f48ae57d9f085844bfce681aec7c375e7712e4652ccf5710e552891631fc1738@1`；获取方式 `http_pdf`。
  > to any supported host without custom hardware fabrication. EgoKit is available at https://egokit.chuange.org/. — PDF p.1
  > Scaling data has become a central driver of progress in robot learning, but collecting demonstrations directly on robots through teleoperation is expensive, hardware-dependent, and difficult to scale beyond a single lab. — PDF p.1
- TWIST2: Scalable, Portable, and Holistic Humanoid Data Collection System · 论文作者 · [原站](https://arxiv.org/abs/2511.02832) · [主体档案：Yanjie Ze](../entities/people/Yanjie%20Ze.md) · [NotebookLM](https://notebook.google.com/notebook/cac99041-d3b9-449e-a192-12bb4b1ad391) · [Drive](https://drive.google.com/file/d/1IziIPgRcalKMCiu5ls2imcYWzroYlSl_/view?usp=drivesdk)
  材料版本 `digest-material-7c627455b7b8d4a86c321002c757150f36a6de5fccda7f4d3a017df18352dd11@1`；获取方式 `http_pdf`。
  > Fig. 1: We introduce TWIST2, a holistic humanoid data collection system designed with scalability and portability. — PDF p.1
  > Abstract— Large-scale data has driven breakthroughs in robotics, from language models to vision-language-action mod- els in bimanual manipulation. However, humanoid robotics lacks equally effective data collection frameworks. — PDF p.1
- EgoHumanoid: Unlocking In-the-Wild Loco-Manipulation with Robot-Free Egocentric Demonstration · 论文作者 · [原站](https://arxiv.org/abs/2602.10106) · [主体档案：Modi Shi](../entities/people/Modi%20Shi.md) · [NotebookLM](https://notebook.google.com/notebook/cac99041-d3b9-449e-a192-12bb4b1ad391) · [Drive](https://drive.google.com/file/d/1N4_hrRJ5hV40OgfCL8XwTBzpaoLQNBck/view?usp=drivesdk)
  材料版本 `digest-material-73ed9bfc11c60c12fd8eb2652f47a0b64d423d7f266b6d81f8023ca47fa0b5e2@1`；获取方式 `http_pdf`。
  > Fig. 1: Introducing EGOHUMANOID, the first investigation on human-to-humanoid transfer for whole-body loco-manipulation. — PDF p.1
  > alignment pipeline lies two key components. The view alignment reduces visual domain discrepancies caused by camera height and perspective variation. — PDF p.1
- Retargeting Matters: General Motion Retargeting for Humanoid Motion Tracking · 论文作者 · [原站](https://arxiv.org/abs/2510.02252) · [主体档案：Joao Pedro Araujo](../entities/people/Joao%20Pedro%20Araujo.md) · [NotebookLM](https://notebook.google.com/notebook/cac99041-d3b9-449e-a192-12bb4b1ad391) · [Drive](https://drive.google.com/file/d/1eivKlvu0CVc4zHTj8XVSOuIxzO6PXU_1/view?usp=drivesdk)
  材料版本 `digest-material-cc910a8606c2de1d87c5f34a9e1753165f3cdbefe2b1d61f1bf608dbd419f0a5@1`；获取方式 `http_pdf`。
  > Abstract— Humanoid motion tracking policies are central to building teleoperation pipelines and hierarchical controllers, yet they face a fundamental challenge: the embodiment gap between humans and humanoid robots. — PDF p.1
  > Developing humanoid policies that truly generalize to real-world environments requires learning from data that captures physical interaction with the world. — PDF p.1
- Data Scaling Laws in Imitation Learning for Robotic Manipulation · 论文作者 · [原站](https://arxiv.org/abs/2410.18647) · [主体档案：Fanqi Lin](../entities/people/Fanqi%20Lin.md) · [NotebookLM](https://notebook.google.com/notebook/cac99041-d3b9-449e-a192-12bb4b1ad391) · [Drive](https://drive.google.com/file/d/1GGJSlUeP_nHDFCezx-SWpZ1A8DjBKJCo/view?usp=drivesdk)
  材料版本 `digest-material-e3ee296bdf1b34dde4816d36207a0b2b496c66ab352299702e9efc8187e7ec07@1`；获取方式 `http_pdf`。
  > Data scaling has revolutionized fields like natural language processing and com- puter vision, providing models with remarkable generalization capabilities. — PDF p.1
  > Scaling has been a key driver behind the rapid advancements in deep learning (Brown et al., 2020; Radford et al., 2021). — PDF p.1

归属与范围：本轮完成引用与归属分诊、可访问原件获取及摘录索引；来源未得与事实待核验分别保留，不视为完整行业研究结论。

来源缺口：

- `pending_verification`：已取得Unidata原文及七篇被引论文；厂商对照规格、法规适用性与跨设备采集成本未逐项复核。Unidata的500小时×20地经验法则不是对照实测结论。

[返回赛道总览](../赛道总览.md#digest-11321de331892daf) · [返回导读索引](README.md) · [主体档案库](../entities/README.md)
