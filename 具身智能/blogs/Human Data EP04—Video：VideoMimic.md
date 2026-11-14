---
title: "Human Data EP04—Video：VideoMimic"
type: blog_digest
sector: "具身智能"
source: "arXiv:2505.03729 · Visual Imitation Enabl"
published_at: "2025-11-04"
raw_sha256: "d79294879f3062ac0397fb10c26a1be860663775947b03995411b5dce85aa472"
material_version: "digest-material-d79294879f3062ac0397fb10c26a1be860663775947b03995411b5dce85aa472@1"
origin_url: "https://arxiv.org/abs/2505.03729"
trigger_source: "石麻笔记"
trigger_url: ""
user_comments: ""
status: "processed_with_gaps"
---

<a id="digest-d79294879f3062ac"></a>
# Human Data EP04—Video：VideoMimic

2025-11-04 · arXiv:2505.03729 · Visual Imitation Enabl · 有来源缺口

[本地原件归档](../../../raw/d79294879f3062ac0397fb10c26a1be860663775947b03995411b5dce85aa472) · 固定材料版本 `digest-material-d79294879f3062ac0397fb10c26a1be860663775947b03995411b5dce85aa472@1` · [一手原站](https://arxiv.org/abs/2505.03729)

> Human Data系列前三期我们都聚焦于利用人体动捕数据做人形机器人控制数据源的工作，分别是Human Data EP01-MoCap：TWIST，Human Data EP02—MoCap：GMT和Human Data EP03—MoCap：Exbody2。
> — 原文摘录，PDF p.1；证据 `digest-material-d79294879f3062ac0397fb10c26a1be860663775947b03995411b5dce85aa472-excerpt-1@1`

> VideoMimic是一个可以让人形机器人通过用手机随手拍摄的人体视频学习动作的方法。这篇工作的一作之一是章俊一，他目前是UC Berkeley在读博士，导师是 Trevor Darrell教授，本科毕业于上海交通大学。这篇访谈有关于基于2D视频重建三维人体动态点云方法的介绍，有关于人体视频数据和高精度动捕数据金字塔的思考，也有关于人形机器人全身运动控制在RL还是IL方法选择上的探讨，非常有启发，推荐阅读。
> — 原文摘录，PDF p.1；证据 `digest-material-d79294879f3062ac0397fb10c26a1be860663775947b03995411b5dce85aa472-excerpt-2@1`

> 我们想要解决的核心问题，其实就是实现一个具有泛化能力的全身运动控制系统。所谓泛化，一方面是方法上的泛化，也就是在网络设计、训练方式、奖励设计上都能够具备通用性；另一方面是任务上的泛化，也就是机器人能够在不同的地形和环境下实现稳定的运动，而不需要针对每一个任务单独设计。
> — 原文摘录，PDF p.1；证据 `digest-material-d79294879f3062ac0397fb10c26a1be860663775947b03995411b5dce85aa472-excerpt-3@1`

一手材料：

- Visual Imitation Enables Contextual Humanoid Control · Arthur Allshire, Hongsuk Choi, Junyi Zhang et al. / arXiv · [原站](https://arxiv.org/abs/2505.03729) · [主体档案：Junyi Zhang](../entities/people/Junyi%20Zhang.md) / [主体档案：Trevor Darrell](../entities/people/Trevor%20Darrell.md) / [主体档案：BAIR](../entities/labs/BAIR.md) · [NotebookLM](https://notebook.google.com/notebook/33f0076b-fc09-42cc-9cd9-fecfb847ce1c) · [Drive](https://drive.google.com/file/d/1ojQZE3P4uXIb-JsyuSyz_zqB1oLtJCdW/view?usp=drivesdk)
  材料版本 `digest-material-58d5d1eee387976024b9dcf19ee455ad1ba7150e47ed3284067df00ff4181230@1`；获取方式 `http_pdf`。
  > Figure 1: VIDEOMIMIC is a real-to-sim-to-real pipeline that converts monocular videos into transferable humanoid skills, letting robots learn context-aware behaviors (terrain-traversing, stairs-climbing, sitting) in a single policy. — PDF p.1
  > Abstract: How can we teach humanoids to climb staircases and sit on chairs using the surrounding environment context? Arguably, the simplest way is to just show them—casually capture a human motion video and feed it to humanoids. — PDF p.1

归属与范围：完成来源分诊并抓取归档VideoMimic论文PDF全文（arXiv:2505.03729）；登记共同一作章俊一主页、导师Trevor Darrell主页与BAIR官网；核对单目视频重建（MonST3R）、视频/动捕数据金字塔与全身运控策略；真机演示原片与独立复现保留缺口。

来源缺口：

- `unavailable`：VideoMimic项目主页（videomimic.net）上的高分辨率真机交互视频与多地形实验原文件暂未开放完整归档下载，保留项目演示原片数据缺口。
- `pending_verification`：VideoMimic所提单目视频重建结合RL策略在不同非结构化复杂地形上的真机零样本迁移成功率与长期稳定性，保留为学术论文成果，尚未经第三方独立实测检验。

[返回赛道总览](../赛道总览.md#digest-d79294879f3062ac) · [返回导读索引](README.md) · [主体档案库](../entities/README.md)
