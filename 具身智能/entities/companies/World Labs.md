# World Labs

[返回主体档案库](../README.md) · [返回赛道总览](../../赛道总览.md) · [单篇导读索引](../../blogs/README.md)

- 主体类别：🏢 公司与产业主体 (Companies)
- 核心定位与说明：聚焦从单图/稀疏多视图生成持久化三维几何场景与可导出 GLB/OpenUSD 碰撞网格，不做柔性体接触动力学求解器。
- 关联账号与官方入口：
  - World Labs 官网（World Labs）：[机构／作者主页](https://www.worldlabs.ai/) · 登记对象 `digest-publisher-5dfa745dbb897ab763f77b57` — 聚焦从单图/稀疏多视图生成持久化三维几何场景与可导出 GLB/OpenUSD 碰撞网格，不做柔性体接触动力学求解器。

## 1. 核心研究问题与待核查争议（Questions & Open Debates）

### 💬 追问与核查：《现场｜CoRL现场李飞飞 × 苏姿丰：世界模型、算力与机器人的下一步》

- corl是啥，含金量高吗，我们有没有收录类似的大会？

关联文章：[《现场｜CoRL现场李飞飞 × 苏姿丰：世界模型、算力与机器人的下一步》](../../blogs/%E7%8E%B0%E5%9C%BA%EF%BD%9CCoRL%E7%8E%B0%E5%9C%BA%E6%9D%8E%E9%A3%9E%E9%A3%9E%20%C3%97%20%E8%8B%8F%E5%A7%BF%E4%B8%B0%EF%BC%9A%E4%B8%96%E7%95%8C%E6%A8%A1%E5%9E%8B%E3%80%81%E7%AE%97%E5%8A%9B%E4%B8%8E%E6%9C%BA%E5%99%A8%E4%BA%BA%E7%9A%84%E4%B8%8B%E4%B8%80%E6%AD%A5.md)

> 追查结论摘要：三句话直答核心追问：① CoRL（Conference on Robot Learning，机器人学习国际会议） 是 2017 年创刊的机器学习 × 机器人学单轨制顶级会议（OpenReview 双盲公开审稿、PMLR 出版）；② 论文审稿含金量极高（与 RSS 并列具身智能算法/VLA 首发第一梯队，区别于 ICRA/IROS 万人工程硬件展），但本篇李飞飞 × 苏姿丰属于无同行评议的大会炉边谈话，本质是 AMD 宣布 \$8.2B 收购 World Labs（2026-09…

### 💬 追问与核查：《机器人接管酒店洗衣！双脑协同+RSI，顶级Astra驾驶员来了》

- 我怎么不相信呢？ 一个国内新出来的机器人团队，就把world lab + 光轮 + Dyna的活都干了然后还跑通了？

关联文章：[《机器人接管酒店洗衣！双脑协同+RSI，顶级Astra驾驶员来了》](../../blogs/%E6%9C%BA%E5%99%A8%E4%BA%BA%E6%8E%A5%E7%AE%A1%E9%85%92%E5%BA%97%E6%B4%97%E8%A1%A3%EF%BC%81%E5%8F%8C%E8%84%91%E5%8D%8F%E5%90%8C%2BRSI%EF%BC%8C%E9%A1%B6%E7%BA%A7Astra%E9%A9%BE%E9%A9%B6%E5%91%98%E6%9D%A5%E4%BA%86.md)

> 追查结论摘要：你的直觉完全准确：大晓机器人既不是“突然冒出来的草根新团队”，也根本没有把 World Labs + 光轮智能（Lightwheel）+ Dyna Robotics 三家的硬骨头干完跑通。 穿透上游一手档案后可以看到，这是一场由商汤拆分嫡系军团操盘的商业公关秀——用“MuJoCo 刚体脚本代理（只解决走廊/门/硬塑料筐冷启动）+ OpenAI 云端 API 动作固化（把单子动作耗时伪装成全流程提速）+ 绕开叠衣与湿布草的自助洗衣房代跑腿 + 烘干机平均漏掏 32% 牛仔裤的实…

### 🔍 待核查缺口与证据边界（Open Gaps）

- `not_disclosed`：CoRL 2026 官方尚未公开李飞飞 × 苏姿丰炉边对谈的完整官方视频录像与逐字英文速记稿；World Labs Atlas 官方技术博客虽给出 Rapidata 1469 Elo 与 15 FPS 指标，但尚未放出完整 arXiv 论文权重及 7 个深度数据集 / 6 个 3DGS 数据集的逐表数值明细。 [线索](https://www.corl.org/program)（关联：[《现场｜CoRL现场李飞飞 × 苏姿丰：世界模型、算力与机器人的下一步》](../../blogs/%E7%8E%B0%E5%9C%BA%EF%BD%9CCoRL%E7%8E%B0%E5%9C%BA%E6%9D%8E%E9%A3%9E%E9%A3%9E%20%C3%97%20%E8%8B%8F%E5%A7%BF%E4%B8%B0%EF%BC%9A%E4%B8%96%E7%95%8C%E6%A8%A1%E5%9E%8B%E3%80%81%E7%AE%97%E5%8A%9B%E4%B8%8E%E6%9C%BA%E5%99%A8%E4%BA%BA%E7%9A%84%E4%B8%8B%E4%B8%80%E6%AD%A5.md)）
- `not_disclosed`：AMD 82 亿美元收购 World Labs 预计 2026 年底交割，双方尚未披露 Atlas 世界模型与 AMD ROCm / Ryzen AI / Versal FPGA 在机器人实时控制中间件上的具体软件栈整合时间表与端侧实测功耗延迟参数。 [线索](https://ir.amd.com/news-events/press-releases)（关联：[《现场｜CoRL现场李飞飞 × 苏姿丰：世界模型、算力与机器人的下一步》](../../blogs/%E7%8E%B0%E5%9C%BA%EF%BD%9CCoRL%E7%8E%B0%E5%9C%BA%E6%9D%8E%E9%A3%9E%E9%A3%9E%20%C3%97%20%E8%8B%8F%E5%A7%BF%E4%B8%B0%EF%BC%9A%E4%B8%96%E7%95%8C%E6%A8%A1%E5%9E%8B%E3%80%81%E7%AE%97%E5%8A%9B%E4%B8%8E%E6%9C%BA%E5%99%A8%E4%BA%BA%E7%9A%84%E4%B8%8B%E4%B8%80%E6%AD%A5.md)）
- `unavailable`：大晓机器人 2026-11-10 发布的酒店洗衣“晓新”方案仅为同步媒体公关通稿与专访，未公开任何 arXiv 技术报告、评测基准代码或一镜到底无剪辑连续长视频（微信原件仅含 4 段 400x225 至 506x285 分辨率的局部剪辑 GIF 动图）。 [线索](https://www.acerobotics.com/)（关联：[《机器人接管酒店洗衣！双脑协同+RSI，顶级Astra驾驶员来了》](../../blogs/%E6%9C%BA%E5%99%A8%E4%BA%BA%E6%8E%A5%E7%AE%A1%E9%85%92%E5%BA%97%E6%B4%97%E8%A1%A3%EF%BC%81%E5%8F%8C%E8%84%91%E5%8D%8F%E5%90%8C%2BRSI%EF%BC%8C%E9%A1%B6%E7%BA%A7Astra%E9%A9%BE%E9%A9%B6%E5%91%98%E6%9D%A5%E4%BA%86.md)）
- `not_disclosed`：官方未披露住客洗衣单笔端到端总周转耗时、每小时吞吐量（UPH）、连续多小时无人干预平均无故障时间（MTBF）、工业湿重床单被套拆解能力及任何衣物展平折叠良率。 [线索](https://www.acerobotics.com/)（关联：[《机器人接管酒店洗衣！双脑协同+RSI，顶级Astra驾驶员来了》](../../blogs/%E6%9C%BA%E5%99%A8%E4%BA%BA%E6%8E%A5%E7%AE%A1%E9%85%92%E5%BA%97%E6%B4%97%E8%A1%A3%EF%BC%81%E5%8F%8C%E8%84%91%E5%8D%8F%E5%90%8C%2BRSI%EF%BC%8C%E9%A1%B6%E7%BA%A7Astra%E9%A9%BE%E9%A9%B6%E5%91%98%E6%9D%A5%E4%BA%86.md)）

- [《现场｜CoRL现场李飞飞 × 苏姿丰：世界模型、算力与机器人的下一步》](../../blogs/%E7%8E%B0%E5%9C%BA%EF%BD%9CCoRL%E7%8E%B0%E5%9C%BA%E6%9D%8E%E9%A3%9E%E9%A3%9E%20%C3%97%20%E8%8B%8F%E5%A7%BF%E4%B8%B0%EF%BC%9A%E4%B8%96%E7%95%8C%E6%A8%A1%E5%9E%8B%E3%80%81%E7%AE%97%E5%8A%9B%E4%B8%8E%E6%9C%BA%E5%99%A8%E4%BA%BA%E7%9A%84%E4%B8%8B%E4%B8%80%E6%AD%A5.md)：微信原文为公众号「具身纪元」作者 Marilyn Liu 在奥斯汀 CoRL 2026 Day 3 现场的一手旁听速记；本工作台已穿透核实上游 CoRL 2026 官方议程（Yuke Zhu 介绍、李飞飞 Keynote、苏姿丰炉边对谈、Peter Stone 主持）、World Labs 官方 Atlas 技术报告（2026-09-01）及 AMD 约 82 亿美元全股票收购 World Labs 官方交易公告（2026-09-28），并将 CoRL、RSS、ICRA、IROS、Hot Chips、CVF 六大同行评议顶会论文集（role=data）结构化补齐至工作台信源库。
- [《机器人接管酒店洗衣！双脑协同+RSI，顶级Astra驾驶员来了》](../../blogs/%E6%9C%BA%E5%99%A8%E4%BA%BA%E6%8E%A5%E7%AE%A1%E9%85%92%E5%BA%97%E6%B4%97%E8%A1%A3%EF%BC%81%E5%8F%8C%E8%84%91%E5%8D%8F%E5%90%8C%2BRSI%EF%BC%8C%E9%A1%B6%E7%BA%A7Astra%E9%A9%BE%E9%A9%B6%E5%91%98%E6%9D%A5%E4%BA%86.md)：已穿透量子位二道公号报道，核实真实发布主体为商汤科技“1+X”拆分具身子公司大晓机器人（ACE Robotics，王晓刚任董事长、陶大程任首席科学家），绑定其与南洋理工大学 MMLab@NTU（S-Lab）联合开源的 Mundo 世界模型一手技术档案，并拉通 Dyna Robotics（Dyna-2.1 商用洗衣房 1 小时一镜到底）、World Labs（Marble / Atlas）及光轮智能（Lightwheel / Newton GPU 物理引擎）完成逐维工程对账。

## 2. 收录文章与一手材料（Ingested Articles & Primary Sources）

### [现场｜CoRL现场李飞飞 × 苏姿丰：世界模型、算力与机器人的下一步](../../blogs/%E7%8E%B0%E5%9C%BA%EF%BD%9CCoRL%E7%8E%B0%E5%9C%BA%E6%9D%8E%E9%A3%9E%E9%A3%9E%20%C3%97%20%E8%8B%8F%E5%A7%BF%E4%B8%B0%EF%BC%9A%E4%B8%96%E7%95%8C%E6%A8%A1%E5%9E%8B%E3%80%81%E7%AE%97%E5%8A%9B%E4%B8%8E%E6%9C%BA%E5%99%A8%E4%BA%BA%E7%9A%84%E4%B8%8B%E4%B8%80%E6%AD%A5.md)

2026-11-12 · 来源：CoRL 2026 · Fei-Fei Li × Lisa Su 对谈 · 状态：待云端同步

[单篇导读（blogs/）](../../blogs/%E7%8E%B0%E5%9C%BA%EF%BD%9CCoRL%E7%8E%B0%E5%9C%BA%E6%9D%8E%E9%A3%9E%E9%A3%9E%20%C3%97%20%E8%8B%8F%E5%A7%BF%E4%B8%B0%EF%BC%9A%E4%B8%96%E7%95%8C%E6%A8%A1%E5%9E%8B%E3%80%81%E7%AE%97%E5%8A%9B%E4%B8%8E%E6%9C%BA%E5%99%A8%E4%BA%BA%E7%9A%84%E4%B8%8B%E4%B8%80%E6%AD%A5.md) · [微信原件](../../../../raw/fcb359fd7cfec452d4817188a39ad2e0cce3c1304c4fc26c5af2871d80b1da96) · 固定版本 `digest-material-fcb359fd7cfec452d4817188a39ad2e0cce3c1304c4fc26c5af2871d80b1da96@1`

> 讲者： 李飞飞 、 苏姿丰 （ Lisa Su ）。开场介绍人： Yuke Zhu ；对谈主持人： Peter Stone 。

> 机器人有三个核心问题，对应世界模型的渲染、规划和仿真。 李飞飞 从“给定世界状态、目标和机器人，此刻应该做什么”出发，提出理解并表示环境、预测动作后果并规划动作，以及补足长尾场景数据三个问题。它们分别联系到 rendering、planning、simulation；三者彼此关联，可以走向统一。

关联一手材料：

- World Labs: Atlas & Marble 3D Spatial Intelligence Models（World Labs）· [原站](https://www.worldlabs.ai/blog/atlas-generate-and-interact-with-worlds) · [本地原件](../../../../raw/920e4e0c1b2308feba34936504e8d763deeab490fd901181c0495e2390320e7f) · 版本 `digest-material-920e4e0c1b2308feba34936504e8d763deeab490fd901181c0495e2390320e7f@1`
  > - Organization: World Labs (https://www.worldlabs.ai/), co-founded by Fei-Fei Li, Justin Johnson, Christoph Lassner, and Ben Mildenhall. — 原文提取

### [机器人接管酒店洗衣！双脑协同+RSI，顶级Astra驾驶员来了](../../blogs/%E6%9C%BA%E5%99%A8%E4%BA%BA%E6%8E%A5%E7%AE%A1%E9%85%92%E5%BA%97%E6%B4%97%E8%A1%A3%EF%BC%81%E5%8F%8C%E8%84%91%E5%8D%8F%E5%90%8C%2BRSI%EF%BC%8C%E9%A1%B6%E7%BA%A7Astra%E9%A9%BE%E9%A9%B6%E5%91%98%E6%9D%A5%E4%BA%86.md)

2026-11-11 · 来源：大晓机器人 (ACE Robotics) · Mundo与官方通稿 · 状态：待云端同步

[单篇导读（blogs/）](../../blogs/%E6%9C%BA%E5%99%A8%E4%BA%BA%E6%8E%A5%E7%AE%A1%E9%85%92%E5%BA%97%E6%B4%97%E8%A1%A3%EF%BC%81%E5%8F%8C%E8%84%91%E5%8D%8F%E5%90%8C%2BRSI%EF%BC%8C%E9%A1%B6%E7%BA%A7Astra%E9%A9%BE%E9%A9%B6%E5%91%98%E6%9D%A5%E4%BA%86.md) · [微信原件](../../../../raw/efe724a47e704a8d4292b62741c99b96e38fb8baeea8c63954563c70816bc595) · 固定版本 `digest-material-efe724a47e704a8d4292b62741c99b96e38fb8baeea8c63954563c70816bc595@1`

> 但你相信我，处理柔性物体、在真实、动态、非标准化的环境里完成一整套长链条任务，这事儿的技术难度，在机器人圈里绝对是地狱级的。

> 洗衣服务涉及取衣、搬运、设备操作、洗涤烘干、送回客房等多个环节，对机器人的空间理解、精细操作和长流程任务规划都有很高要求。

关联一手材料：

- World Labs: Atlas & Marble 3D Spatial Intelligence Models（World Labs）· [原站](https://www.worldlabs.ai/blog/atlas-generate-and-interact-with-worlds) · [本地原件](../../../../raw/920e4e0c1b2308feba34936504e8d763deeab490fd901181c0495e2390320e7f) · 版本 `digest-material-920e4e0c1b2308feba34936504e8d763deeab490fd901181c0495e2390320e7f@1`
  > - Organization: World Labs (https://www.worldlabs.ai/), co-founded by Fei-Fei Li, Justin Johnson, Christoph Lassner, and Ben Mildenhall. — 原文提取
