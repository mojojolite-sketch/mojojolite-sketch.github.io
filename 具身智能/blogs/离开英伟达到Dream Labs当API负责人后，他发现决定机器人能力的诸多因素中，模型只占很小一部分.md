---
title: "离开英伟达到Dream Labs当API负责人后，他发现决定机器人能力的诸多因素中，模型只占很小一部分"
type: blog_digest
sector: "具身智能"
source: "D. Sculley et al."
published_at: "2026-11-05"
raw_sha256: "aadcf0a4850a3bfd044d0d45b30a8ff50b72ce5b127bbc44856ec0da654f4701"
material_version: "digest-material-aadcf0a4850a3bfd044d0d45b30a8ff50b72ce5b127bbc44856ec0da654f4701@1"
origin_url: "https://proceedings.neurips.cc/paper/2015/file/86df7dcfd896fcaf2674f757a2463eba-Paper.pdf"
trigger_source: "SourceMind"
trigger_url: ""
user_comments: ""
status: "processed_with_gaps"
---

<a id="digest-aadcf0a4850a3bfd"></a>
# 离开英伟达到Dream Labs当API负责人后，他发现决定机器人能力的诸多因素中，模型只占很小一部分

2026-11-05 · D. Sculley et al. · 有来源缺口

[本地原件归档](../../../raw/aadcf0a4850a3bfd044d0d45b30a8ff50b72ce5b127bbc44856ec0da654f4701) · 固定材料版本 `digest-material-aadcf0a4850a3bfd044d0d45b30a8ff50b72ce5b127bbc44856ec0da654f4701@1` · [一手原站](https://proceedings.neurips.cc/paper/2015/file/86df7dcfd896fcaf2674f757a2463eba-Paper.pdf)

> Kaushil Kundalia 曾是 NVIDIA 机器人基础模型项目 GR00T 的早期成员，如今在Dream Labs 负责机器人基础模型接口 Dream API。在复盘过去两年的研发经历时，他提出一个判断：决定机器人表现的诸多因素中，模型只占很小一部分，周围的数据、控制和评估系统同样左右着实验结果。
> — 原文摘录，PDF p.1；证据 `digest-material-aadcf0a4850a3bfd044d0d45b30a8ff50b72ce5b127bbc44856ec0da654f4701-excerpt-1@1`

> 为什么重要： 即使模型权重完全相同，改变推理与控制的配合方式、每次执行动作的长度，也可能让同一套机器人测试台给出截然不同的分数。对正在搭建实验室的团队来说，控制这些变量，直接关系到能否判断一次改进究竟来自哪里，以及哪些结果值得继续投入。
> — 原文摘录，PDF p.1；证据 `digest-material-aadcf0a4850a3bfd044d0d45b30a8ff50b72ce5b127bbc44856ec0da654f4701-excerpt-2@1`

> 举个例子： Kundalia 见过语言标注只有第一个字符传进模型、RGB 颜色通道顺序颠倒，甚至整个预训练过程都在使用同一条错误指令。这些错误没有让程序崩溃，却会在机器人表现变差时才暴露，迫使研究人员从机器人端一路往回排查。
> — 原文摘录，PDF p.1；证据 `digest-material-aadcf0a4850a3bfd044d0d45b30a8ff50b72ce5b127bbc44856ec0da654f4701-excerpt-3@1`

一手材料：

- Hidden Technical Debt in Machine Learning Systems · D. Sculley et al. / Google / NeurIPS · [原站](https://proceedings.neurips.cc/paper/2015/file/86df7dcfd896fcaf2674f757a2463eba-Paper.pdf) · [主体档案：Google Research](../entities/labs/Google%20Research.md) / [主体档案：Kaushil Kundalia](../entities/people/Kaushil%20Kundalia.md) · [NotebookLM](https://notebook.google.com/notebook/33f0076b-fc09-42cc-9cd9-fecfb847ce1c) · [Drive](https://drive.google.com/file/d/1J9FSyaSh0leUyzjsdkGmfHyiOd5X39Hc/view?usp=drivesdk)
  材料版本 `digest-material-1a67da09a8bd5ba9a3577176e30aa2fbd88534e6baf0bc31522b4999f643d2a1@1`；获取方式 `http_pdf`。
  > D. Sculley, Gary Holt, Daniel Golovin, Eugene Davydov, Todd Phillips \{dsculley,gholt,dgg,edavydov,toddphillips\}@google.com Google, Inc. — PDF p.1
  > Dietmar Ebner, Vinay Chaudhary, Michael Young, Jean-Franc¸ois Crespo, Dan Dennison \{ebner,vchaudhary,mwyoung,jfcrespo,dennison\}@google.com Google, Inc. — PDF p.1

归属与范围：完成来源分诊并抓取归档NeurIPS 2015经典论文PDF全文（Hidden Technical Debt in Machine Learning Systems）；登记Google Research与Kaushil Kundalia GitHub个人主页；核对模型周边基础设施（数据版本、推理控制异步、动作长度、统一评估台）；Kaushil原始英文手记一手链接与经验结论保留缺口。

来源缺口：

- `unavailable`：Kaushil Kundalia关于Dream API与机器人研发笔记的原始英文博客手记（源自kaushil.dev或个人手记）因个人网站网络连接限制暂无直接开放一手链接，SourceMind中文完整译文已归档入库，保留英文原始手记一手链接缺口。
- `pending_verification`：Kundalia文中关于Dream API为首个面向公众开放的机器人基础模型API的主张，以及数据管道错误对机器人消融实验影响程度的经验性结论，保留为研究者手记观点，尚未经多方横向评测验证。

[返回赛道总览](../赛道总览.md#digest-aadcf0a4850a3bfd) · [返回导读索引](README.md) · [主体档案库](../entities/README.md)
