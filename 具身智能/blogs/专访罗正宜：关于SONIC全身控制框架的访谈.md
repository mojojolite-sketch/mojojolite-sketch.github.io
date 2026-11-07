---
title: "专访罗正宜：关于SONIC全身控制框架的访谈"
type: blog_digest
sector: "具身智能"
source: "石麻笔记"
published_at: "2026-04-16"
raw_sha256: "78635547d80283dd65b7330031ae1e0473bddd3885101ebf5b26a24cb5bc858e"
material_version: "digest-material-78635547d80283dd65b7330031ae1e0473bddd3885101ebf5b26a24cb5bc858e@1"
origin_url: ""
user_comments: ""
status: "processed_with_gaps"
---

<a id="digest-78635547d80283dd"></a>
# 专访罗正宜：关于SONIC全身控制框架的访谈

2026-04-16 · 石麻笔记 · 有来源缺口

[微信原文件](../../../raw/78635547d80283dd65b7330031ae1e0473bddd3885101ebf5b26a24cb5bc858e) · 固定材料版本 `digest-material-78635547d80283dd65b7330031ae1e0473bddd3885101ebf5b26a24cb5bc858e@1`

> 人形机器人通用控制器系列，我们在专访Xue Bin(Jason) Peng：探索人形机器人全身运控的通用控制器，专访罗正宜：解密PHC——人形机器人通用控制器，以及2025年的Human Data系列总结篇：Human Data— The “Key” to Robot Data的一系列采访都有涉及。这期文章，我再次邀请到了罗正宜博士，来聊一聊在人形机器人全身运控领域家喻户晓的工作SONIC。
> — 原文摘录，PDF p.1；证据 `digest-material-78635547d80283dd65b7330031ae1e0473bddd3885101ebf5b26a24cb5bc858e-excerpt-1@1`

> 罗正宜（Zhengyi Luo）是英伟达GEAR实验室的一名研究科学家，博士毕业于CMU，他的导师是 Kris Kitani 教授。在此之前，他于2019年在宾夕法尼亚大学获得了本科学位，并曾在 Kostas Daniilidis 教授的指导下开展研究工作。罗正宜博士的的研究兴趣主要集中在视觉、学习与机器人技术的交叉领域。主要研究方向包括人体姿态估计、人-物交互建模、人类运动建模等。
> — 原文摘录，PDF p.1；证据 `digest-material-78635547d80283dd65b7330031ae1e0473bddd3885101ebf5b26a24cb5bc858e-excerpt-2@1`

> 这期节目的博客可以点击下方链接进入小宇宙，或者苹果podcast搜索“ReSpark”栏目来收听。
> — 原文摘录，PDF p.1；证据 `digest-material-78635547d80283dd65b7330031ae1e0473bddd3885101ebf5b26a24cb5bc858e-excerpt-3@1`

一手材料：

- **SONIC: Supersizing Motion Tracking for Natural Humanoid Whole-Body Control** · Zhengyi Luo et al. / Science Robotics · [原站](https://arxiv.org/abs/2511.07820) · [主体档案：NVIDIA GEAR Lab](../entities/labs/NVIDIA%20GEAR%20Lab.md) / [主体档案：罗正宜](../entities/people/%E7%BD%97%E6%AD%A3%E5%AE%9C.md) · [NotebookLM](https://notebook.google.com/notebook/33f0076b-fc09-42cc-9cd9-fecfb847ce1c) · [Drive](https://drive.google.com/file/d/1lh1mp-C2npU2dCE7foHM62SXcgfw0R-T/view?usp=drivesdk)
  材料版本 `digest-material-6580f9223b504c6420eb409bca849bdd968cec17af5c2e7e3c395bb9e1df4267@1`；获取方式 `http_pdf`。
  > Despite the rise of billion-parameter foundation models trained across thousands of graphical processing units (GPUs), similar scaling gains have not been shown for humanoid control. — PDF p.1
  > Over the past decade, artificial intelligence has scaled rapidly: the generative pretrained transformer (GPT) \[1\] family of models is trained on 25,000+ graphical processing units (GPUs) with trillions of tokens; video and image-generation models \[2–6\] leverage thousands of GPUs processing billions of images. — PDF p.1

归属与范围：完成来源分诊并归档发表于Science Robotics的SONIC论文完整PDF原件；核对第一作者罗正宜、英伟达GEAR实验室、700小时人类动捕数据配对、三encoder潜空间对齐架构与G1真机部署；闭源数据集与未见动作零样本泛化指标保留缺口。

来源缺口：

- `pending_verification`：论文展示的零样本泛化至未见动作、实时运动学规划与VLA移动操作指标保留为论文实验报告口径，未在第三方物理硬件环境中独立验证。
- `unavailable`：700小时高精度商业光学动捕原始数据集与Unitree G1真机强化学习环境闭源细节未完全公开，保留数据源缺口。

[返回赛道总览](../赛道总览.md#digest-78635547d80283dd) · [返回导读索引](README.md) · [主体档案库](../entities/README.md)
