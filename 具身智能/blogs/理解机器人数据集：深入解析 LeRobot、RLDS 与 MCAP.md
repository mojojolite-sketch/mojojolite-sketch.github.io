---
title: "理解机器人数据集：深入解析 LeRobot、RLDS 与 MCAP"
type: blog_digest
sector: "具身智能"
source: "human five"
published_at: "2026-10-31"
raw_sha256: "acae2ea325a86dfc43dd8d0f1a10ce54e92768473680c2711251e90c06148184"
material_version: "digest-material-acae2ea325a86dfc43dd8d0f1a10ce54e92768473680c2711251e90c06148184@1"
origin_url: ""
user_comments: ""
status: "processed"
---

<a id="digest-acae2ea325a86dfc"></a>
# 理解机器人数据集：深入解析 LeRobot、RLDS 与 MCAP

2026-10-31 · human five · 已整理

[微信原文件](../../../raw/acae2ea325a86dfc43dd8d0f1a10ce54e92768473680c2711251e90c06148184) · 固定材料版本 `digest-material-acae2ea325a86dfc43dd8d0f1a10ce54e92768473680c2711251e90c06148184@1`

> LeRobot 3将 Parquet 文件中的数据行与视频中的相机帧关联起来。Episode 元数据用于确定哪些数据行和视频片段属于同一次交互。
> — 原文摘录，PDF p.1；证据 `digest-material-acae2ea325a86dfc43dd8d0f1a10ce54e92768473680c2711251e90c06148184-excerpt-1@1`

> MCAP将带时间戳的消息存储在不同 Channel 中。它本身不规定 Episode 、Action或成功标签的定义，这些语义由生成记录的具体项目决定。
> — 原文摘录，PDF p.1；证据 `digest-material-acae2ea325a86dfc43dd8d0f1a10ce54e92768473680c2711251e90c06148184-excerpt-2@1`

> 机器人的策略（Policy ）是一种规则或模型，它根据当前 Observation 决定下一步Action 。在模仿学习中，模型通过记录下来的 Observation ，以及与这些 Observation 同时记录的示范动作进行学习。这就是为什么单独一段相机视频通常只能提供训练样本的一部分。
> — 原文摘录，PDF p.1；证据 `digest-material-acae2ea325a86dfc43dd8d0f1a10ce54e92768473680c2711251e90c06148184-excerpt-3@1`

一手材料：

- **Robotics datasets: LeRobot, RLDS and MCAP · VideoDB** · Om Gate / VideoDB · [原站](https://videodb.io/blog/understanding-robotics-datasets) · [主体档案：VideoDB](../entities/companies/VideoDB.md) · [NotebookLM](https://notebook.google.com/notebook/cac99041-d3b9-449e-a192-12bb4b1ad391) · [Drive](https://drive.google.com/file/d/19npuZBU2LqfYj1iBwamdhgnSAFJ7gE5x/view?usp=drivesdk)
  材料版本 `digest-material-c548f52fc4cc02936cf8dc1db3850eb5cd671788179b54a716a4fd3ecf289a2a@1`；获取方式 `http_full_text`。
  > connects rows in Parquet files to camera frames in videos. Episode metadata tells us which rows and video segments belong together. — 原文提取
  > organizes interactions into episodes containing steps. Its boundary flags tell us how to interpret the final observation. Many datasets store these episodes in TFRecord files. — 原文提取

归属与范围：本轮完成引用与归属分诊、可访问原件获取及摘录索引；来源未得与事实待核验分别保留，不视为完整行业研究结论。

[返回赛道总览](../赛道总览.md#digest-acae2ea325a86dfc) · [返回导读索引](README.md) · [主体档案库](../entities/README.md)
