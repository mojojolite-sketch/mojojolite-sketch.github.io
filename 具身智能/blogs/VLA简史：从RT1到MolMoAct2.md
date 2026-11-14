---
title: "VLA简史：从RT1到MolMoAct2"
type: blog_digest
sector: "具身智能"
source: "arXiv:2212.06817 · RT-1"
published_at: "2026-11-02"
raw_sha256: "337c8061044197579ff7f572a9c11aa6d2ca7b2e8d2cd1fb0e3e80ee95ddc2cc"
material_version: "digest-material-337c8061044197579ff7f572a9c11aa6d2ca7b2e8d2cd1fb0e3e80ee95ddc2cc@1"
origin_url: "https://arxiv.org/abs/2212.06817"
trigger_source: "human five"
trigger_url: ""
user_comments: ""
status: "processed"
---

<a id="digest-337c806104419757"></a>
# VLA简史：从RT1到MolMoAct2

2026-11-02 · arXiv:2212.06817 · RT-1 · 已整理

[本地原件归档](../../../raw/337c8061044197579ff7f572a9c11aa6d2ca7b2e8d2cd1fb0e3e80ee95ddc2cc) · 固定材料版本 `digest-material-337c8061044197579ff7f572a9c11aa6d2ca7b2e8d2cd1fb0e3e80ee95ddc2cc@1` · [一手原站](https://arxiv.org/abs/2212.06817)

> 刚开始在 Twitter 上关注机器人学习社区时，Vision-Language-Action Model （VLA ）是我经常看到的一个词。到了 2026 年，随着每一次所谓的「机器人领域 GPT 时刻」到来，我逐渐发现一件有意思的事情：机器人领域至今仍未就最值得 Scaling 的方向形成共识，不同研究者对不同技术路线有着各自坚定的判断，其中一条路线就是 VLA。
> — 原文摘录，PDF p.1；证据 `digest-material-337c8061044197579ff7f572a9c11aa6d2ca7b2e8d2cd1fb0e3e80ee95ddc2cc-excerpt-1@1`

> 我想弄清楚我们是如何走到今天这一步的，从 RT-1 到 MolmoAct 2 这样的新模型，究竟发生了哪些变化？又是哪些架构设计让这些系统真正发挥作用？这篇 Blog 是我追溯这一演进过程、理解其中技术权衡，并尝试开展一些小型实验的记录。说到底，这也是我更新自己对机器人学习领域认知的一种方式。
> — 原文摘录，PDF p.1；证据 `digest-material-337c8061044197579ff7f572a9c11aa6d2ca7b2e8d2cd1fb0e3e80ee95ddc2cc-excerpt-2@1`

> 设想这样一个场景：机器人手臂正在执行抓取并放置（Pick-and-Place ）任务，此时有人将目标收纳箱向左移动了几厘米。一个围绕固定位置设计的系统可能会抓空，甚至直接执行失败。
> — 原文摘录，PDF p.1；证据 `digest-material-337c8061044197579ff7f572a9c11aa6d2ca7b2e8d2cd1fb0e3e80ee95ddc2cc-excerpt-3@1`

一手材料：

- RT-1: Robotics Transformer for Real-World Control at Scale · Anthony Brohan et al. · [原站](https://arxiv.org/abs/2212.06817) · [主体档案：Anthony Brohan](../entities/people/Anthony%20Brohan.md) · [NotebookLM](https://notebook.google.com/notebook/cac99041-d3b9-449e-a192-12bb4b1ad391) · [Drive](https://drive.google.com/file/d/1Qj4ls1vFvCxpbzxQZCXf3UCNc6X8xFHf/view?usp=drivesdk)
  材料版本 `digest-material-81efe669c8fa50ffc7097886dc78a442fa7a8f7f2451684b93069cb9fbeda767@1`；获取方式 `http_pdf`。
  > By transferring knowledge from large, diverse, task-agnostic datasets, modern ma- chine learning models can solve specific downstream tasks either zero-shot or with small task-specific datasets to a high level of performance. — PDF p.1
  > End-to-end robotic learning, with either imitation or reinforcement, typically involves collecting task-specific data in either single-task (Kalashnikov et al., 2018; Zhang et al., 2018) or multi- task (Kalashnikov et al., 2021b; Jang et al., 2021) settings that are narrowly tailored to the tasks that the robot should perform. — PDF p.1
- RT-2: Vision-Language-Action Models Transfer Web Knowledge to Robotic Control · Anthony Brohan et al. · [原站](https://arxiv.org/abs/2307.15818) · [主体档案：Anthony Brohan](../entities/people/Anthony%20Brohan.md) · [NotebookLM](https://notebook.google.com/notebook/cac99041-d3b9-449e-a192-12bb4b1ad391) · [Drive](https://drive.google.com/file/d/1ENu2dfhC8NR5zA8TDpCzQrplRQIcCZco/view?usp=drivesdk)
  材料版本 `digest-material-0a62dc36bbbfdea232ad45a0ab75c82e9cf535b55333ff22c02d5da1897ccac3@1`；获取方式 `http_pdf`。
  > We study how vision-language models trained on Internet-scale data can be incorporated directly into end-to-end robotic control to boost generalization and enable emergent semantic reasoning. — PDF p.1
  > Figure 1 | RT-2 overview: we represent robot actions as another language, which can be cast into text tokens and trained together with Internet-scale vision-language datasets. — PDF p.2
- Open X-Embodiment: Robotic Learning Datasets and RT-X Models · Open X-Embodiment Collaboration · [原站](https://arxiv.org/abs/2310.08864) · [主体档案：Open X-Embodiment Collaboration](../entities/labs/Open%20X-Embodiment%20Collaboration.md) · [NotebookLM](https://notebook.google.com/notebook/cac99041-d3b9-449e-a192-12bb4b1ad391) · [Drive](https://drive.google.com/file/d/19M5icHRCE3T5KASJXMwT2m0b2eK48yp7/view?usp=drivesdk)
  材料版本 `digest-material-13f16aff5afdee583dc25b3c570e9bb0cf6baefb59b539928d919588cd8d9246@1`；获取方式 `http_pdf`。
  > Fig. 1: We propose an open, large-scale dataset for robot learning curated from 21 institutions across the globe. — PDF p.1
  > Abstract— Large, high-capacity models trained on diverse datasets have shown remarkable successes on efficiently tackling downstream applications. — PDF p.1
- Octo: An Open-Source Generalist Robot Policy · Octo Model Team · [原站](https://arxiv.org/abs/2405.12213) · [主体档案：Octo Model Team](../entities/labs/Octo%20Model%20Team.md) · [NotebookLM](https://notebook.google.com/notebook/cac99041-d3b9-449e-a192-12bb4b1ad391) · [Drive](https://drive.google.com/file/d/1IoTQKTKKSxa59p9X0XpwL5GTHjk3uIeo/view?usp=drivesdk)
  材料版本 `digest-material-73bff297cfafe523319162124e6b7f96919c0930e0a380f307255c4c7464ac93@1`；获取方式 `http_pdf`。
  > Fig. 1: We introduce Octo, an open-source, generalist policy for robotic manipulation. Octo is a transformer-based policy pretrained on 800k diverse robot episodes from the Open X-Embodiment dataset \[67\]. — PDF p.1
  > experiments across 9 robotic platforms, we demonstrate that Octo serves as a versatile policy initialization that can be effectively finetuned to new observation and action spaces. — PDF p.1
- OpenVLA: An Open-Source Vision-Language-Action Model · Moo Jin Kim et al. · [原站](https://arxiv.org/abs/2406.09246) · [主体档案：Moo Jin Kim](../entities/people/Moo%20Jin%20Kim.md) · [NotebookLM](https://notebook.google.com/notebook/cac99041-d3b9-449e-a192-12bb4b1ad391) · [Drive](https://drive.google.com/file/d/1pi9i_PbPfiEjgzaKLitqQ5Vn-pCqqDz6/view?usp=drivesdk)
  材料版本 `digest-material-353c37df34458f12f969b14dfd8b77175b727b9cddea7bb891759beddeefe1be@1`；获取方式 `http_pdf`。
  > Figure 1: We present OpenVLA, a 7B-parameter open-source vision-language-action model (VLA), trained on 970k robot episodes from the Open X-Embodiment dataset \[1\]. — PDF p.1
  > Towards this goal, existing work has explored integrating pretrained language and vision-language models for robotic representation learning \[12–14\] and as a component in modular systems for task planning and execution \[15, 16\]. — PDF p.2
- π0: A Vision-Language-Action Flow Model for General Robot Control · Kevin Black et al. · [原站](https://arxiv.org/abs/2410.24164) · [主体档案：Kevin Black](../entities/people/Kevin%20Black.md) · [NotebookLM](https://notebook.google.com/notebook/cac99041-d3b9-449e-a192-12bb4b1ad391) · [Drive](https://drive.google.com/file/d/1az7mwbOijLIvbLN0L8DCNxkA5rz3AYWE/view?usp=drivesdk)
  材料版本 `digest-material-fbdfba56258bdbd220207ba63410c6c943e43a73e97a7a5a47ca0bc74204f821@1`；获取方式 `http_pdf`。
  > Fig. 1: Our generalist robot policy uses a pre-trained vision-language model (VLM) backbone, as well as a diverse cross- embodiment dataset with a variety of dexterous manipulation tasks. — PDF p.1
  > Abstract—Robot learning holds tremendous promise to unlock the full potential of flexible, general, and dexterous robot systems, as well as to address some of the deepest questions in artificial intelligence. — PDF p.1
- SmolVLA: A vision-language-action model for affordable and efficient robotics · Mustafa Shukor et al. · [原站](https://arxiv.org/abs/2506.01844) · [主体档案：Mustafa Shukor](../entities/people/Mustafa%20Shukor.md) · [NotebookLM](https://notebook.google.com/notebook/cac99041-d3b9-449e-a192-12bb4b1ad391) · [Drive](https://drive.google.com/file/d/1db5cj0-W33lJbSc05_TdUmdy_rpjliLi/view?usp=drivesdk)
  材料版本 `digest-material-cb1bb9a8f824187fcdc32af8c290214487c524f139a3c2def1c6d97adb1fa40c@1`；获取方式 `http_pdf`。
  > Vision-language models (VLMs) pretrained on large-scale multimodal datasets encode rich visual and linguistic knowledge, making them a strong foundation for robotics. — PDF p.1
  > Figure 1 ∣SmolVLA. SmolVLA consists of a compact pretrained vision-language model, discarding the last L −N layers (scissors icon). — PDF p.1
- MolmoAct2 · Haoquan Fang et al. · [原站](https://arxiv.org/abs/2605.02881) · [主体档案：Haoquan Fang](../entities/people/Haoquan%20Fang.md) · [NotebookLM](https://notebook.google.com/notebook/cac99041-d3b9-449e-a192-12bb4b1ad391) · [Drive](https://drive.google.com/file/d/10mVTKcU5KYnggYKjEElYH4F8mT5Q0iBt/view?usp=drivesdk)
  材料版本 `digest-material-3029bc601e4d71ebc2e45ce996cbe35649b24eeb26b5925a73c83cb83e7fadad@1`；获取方式 `http_pdf`。
  > Vision-Language-Action (VLA) models aim to provide a single generalist controller for robots, but today’s systems fall short for real-world deployment. — PDF p.1
  > Figure 1 Overview of MolmoAct2. MolmoAct2 is a fully open action reasoning model for real-world deployment. — PDF p.2

归属与范围：取得八篇arXiv原始论文PDF并从首页核对标题、署名与发布日期；论文性能结论均归属作者实验，不视为独立复现。

[返回赛道总览](../赛道总览.md#digest-337c806104419757) · [返回导读索引](README.md) · [主体档案库](../entities/README.md)
