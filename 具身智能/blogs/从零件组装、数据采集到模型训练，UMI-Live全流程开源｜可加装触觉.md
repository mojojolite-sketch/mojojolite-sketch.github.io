---
title: "从零件组装、数据采集到模型训练，UMI-Live全流程开源｜可加装触觉"
type: blog_digest
sector: "具身智能"
source: "SourceMind"
published_at: "2026-10-31"
raw_sha256: "9862a1bdf3e9ca8056234dc1b871ff47b704fd3411192b93cae3c655bf5ef97f"
material_version: "digest-material-9862a1bdf3e9ca8056234dc1b871ff47b704fd3411192b93cae3c655bf5ef97f@1"
origin_url: ""
user_comments: ""
status: "processed"
---

<a id="digest-9862a1bdf3e9ca80"></a>
# 从零件组装、数据采集到模型训练，UMI-Live全流程开源｜可加装触觉

2026-10-31 · SourceMind · 已整理

[微信原文件](../../../raw/9862a1bdf3e9ca8056234dc1b871ff47b704fd3411192b93cae3c655bf5ef97f) · 固定材料版本 `digest-material-9862a1bdf3e9ca8056234dc1b871ff47b704fd3411192b93cae3c655bf5ef97f@1`

> Amish Sethi 介绍了一套开源的双手示范采集系统 UMI-Live ：操作者手持两只夹爪，按下按钮即可同步录制动作；后台则在采集继续进行时，把已完成的示范转成可用于训练机器人的数据集。
> — 原文摘录，PDF p.1；证据 `digest-material-9862a1bdf3e9ca8056234dc1b871ff47b704fd3411192b93cae3c655bf5ef97f-excerpt-1@1`

> 为什么重要： 录下人的操作，只是机器人数据采集的第一步。视频还要与夹爪的位置、朝向和开合状态同步，才能成为训练素材。UMI-Live 把设备追踪、数据处理和格式转换接成一条流程，试图减少从“示范一次”到“拿去训练”之间的准备工作。
> — 原文摘录，PDF p.1；证据 `digest-material-9862a1bdf3e9ca8056234dc1b871ff47b704fd3411192b93cae3c655bf5ef97f-excerpt-2@1`

> 怎么做到的： 每只夹爪自带相机、激光雷达、计算单元和电池，无需外部追踪基站或场景标定。录制结束后，后台自动重建轨迹、校验数据，并整理为 LeRobot 格式上传至Hugging Face。一对设备成本约为 1,930 美元，单只重 1.42 千克，续航约 1.5 小时。
> — 原文摘录，PDF p.1；证据 `digest-material-9862a1bdf3e9ca8056234dc1b871ff47b704fd3411192b93cae3c655bf5ef97f-excerpt-3@1`

一手材料：

- **UMI-Live for In-The-Wild Bimanual Robotics Data Collection** · UMI-Live论文作者 · [原站](https://arxiv.org/abs/2610.39385) · [主体档案：Govind Velamoor](../entities/people/Govind%20Velamoor.md) · [NotebookLM](https://notebook.google.com/notebook/cac99041-d3b9-449e-a192-12bb4b1ad391) · [Drive](https://drive.google.com/file/d/1do8-4l3IFjwwoZ44XcMWvEhxsrnkDrAW/view?usp=drivesdk)
  材料版本 `digest-material-bc7c54e9b67ab2bdf1e01c36e5f4aa2c7323260c0e8a2c7ca44f17fffcc55ed4@1`；获取方式 `http_pdf`。
  > Abstract: Universal Manipulation Interface (UMI) devices allow human experts to demonstrate tasks for robot learning without teleoperating physical robots. — PDF p.1
  > Figure 1: UMI-Live connects in-the-wild bimanual collection and automated processing to LeRobot datasets, policy training, and physical evaluation on dual i2RT YAM arms. — PDF p.1

归属与范围：本轮完成引用与归属分诊、可访问原件获取及摘录索引；来源未得与事实待核验分别保留，不视为完整行业研究结论。

[返回赛道总览](../赛道总览.md#digest-9862a1bdf3e9ca80) · [返回导读索引](README.md) · [主体档案库](../entities/README.md)
