# MMLab@NTU（S-Lab）

[返回主体档案库](../README.md) · [返回赛道总览](../../赛道总览.md) · [单篇导读索引](../../blogs/README.md)

- 主体类别：🏛️ 实验室、高校与机构平台 (Labs & Institutions)
- 核心定位与说明：南洋理工大学视觉与三维生成核心实验室，与大晓机器人联合发布基于 MuJoCo 场景程序代理的 Mundo 定制化世界模型。
- 关联账号与官方入口：
  - MMLab@NTU 官网（MMLab@NTU（S-Lab））：[机构／作者主页](https://www.mmlab-ntu.com/) · 登记对象 `digest-publisher-4d0b50c839cff52ea01467ed` — 南洋理工大学视觉与三维生成核心实验室，与大晓机器人联合发布基于 MuJoCo 场景程序代理的 Mundo 定制化世界模型。

## 1. 核心研究问题与待核查争议（Questions & Open Debates）

### 💬 追问与核查：《机器人接管酒店洗衣！双脑协同+RSI，顶级Astra驾驶员来了》

- 我怎么不相信呢？ 一个国内新出来的机器人团队，就把world lab + 光轮 + Dyna的活都干了然后还跑通了？

关联文章：[《机器人接管酒店洗衣！双脑协同+RSI，顶级Astra驾驶员来了》](../../blogs/%E6%9C%BA%E5%99%A8%E4%BA%BA%E6%8E%A5%E7%AE%A1%E9%85%92%E5%BA%97%E6%B4%97%E8%A1%A3%EF%BC%81%E5%8F%8C%E8%84%91%E5%8D%8F%E5%90%8C%2BRSI%EF%BC%8C%E9%A1%B6%E7%BA%A7Astra%E9%A9%BE%E9%A9%B6%E5%91%98%E6%9D%A5%E4%BA%86.md)

> 追查结论摘要：你的直觉完全准确：大晓机器人既不是“突然冒出来的草根新团队”，也根本没有把 World Labs + 光轮智能（Lightwheel）+ Dyna Robotics 三家的硬骨头干完跑通。 穿透上游一手档案后可以看到，这是一场由商汤拆分嫡系军团操盘的商业公关秀——用“MuJoCo 刚体脚本代理（只解决走廊/门/硬塑料筐冷启动）+ OpenAI 云端 API 动作固化（把单子动作耗时伪装成全流程提速）+ 绕开叠衣与湿布草的自助洗衣房代跑腿 + 烘干机平均漏掏 32% 牛仔裤的实…

### 🔍 待核查缺口与证据边界（Open Gaps）

- `unavailable`：大晓机器人 2026-11-10 发布的酒店洗衣“晓新”方案仅为同步媒体公关通稿与专访，未公开任何 arXiv 技术报告、评测基准代码或一镜到底无剪辑连续长视频（微信原件仅含 4 段 400x225 至 506x285 分辨率的局部剪辑 GIF 动图）。 [线索](https://www.acerobotics.com/)（关联：[《机器人接管酒店洗衣！双脑协同+RSI，顶级Astra驾驶员来了》](../../blogs/%E6%9C%BA%E5%99%A8%E4%BA%BA%E6%8E%A5%E7%AE%A1%E9%85%92%E5%BA%97%E6%B4%97%E8%A1%A3%EF%BC%81%E5%8F%8C%E8%84%91%E5%8D%8F%E5%90%8C%2BRSI%EF%BC%8C%E9%A1%B6%E7%BA%A7Astra%E9%A9%BE%E9%A9%B6%E5%91%98%E6%9D%A5%E4%BA%86.md)）
- `not_disclosed`：官方未披露住客洗衣单笔端到端总周转耗时、每小时吞吐量（UPH）、连续多小时无人干预平均无故障时间（MTBF）、工业湿重床单被套拆解能力及任何衣物展平折叠良率。 [线索](https://www.acerobotics.com/)（关联：[《机器人接管酒店洗衣！双脑协同+RSI，顶级Astra驾驶员来了》](../../blogs/%E6%9C%BA%E5%99%A8%E4%BA%BA%E6%8E%A5%E7%AE%A1%E9%85%92%E5%BA%97%E6%B4%97%E8%A1%A3%EF%BC%81%E5%8F%8C%E8%84%91%E5%8D%8F%E5%90%8C%2BRSI%EF%BC%8C%E9%A1%B6%E7%BA%A7Astra%E9%A9%BE%E9%A9%B6%E5%91%98%E6%9D%A5%E4%BA%86.md)）

- [《机器人接管酒店洗衣！双脑协同+RSI，顶级Astra驾驶员来了》](../../blogs/%E6%9C%BA%E5%99%A8%E4%BA%BA%E6%8E%A5%E7%AE%A1%E9%85%92%E5%BA%97%E6%B4%97%E8%A1%A3%EF%BC%81%E5%8F%8C%E8%84%91%E5%8D%8F%E5%90%8C%2BRSI%EF%BC%8C%E9%A1%B6%E7%BA%A7Astra%E9%A9%BE%E9%A9%B6%E5%91%98%E6%9D%A5%E4%BA%86.md)：已穿透量子位二道公号报道，核实真实发布主体为商汤科技“1+X”拆分具身子公司大晓机器人（ACE Robotics，王晓刚任董事长、陶大程任首席科学家），绑定其与南洋理工大学 MMLab@NTU（S-Lab）联合开源的 Mundo 世界模型一手技术档案，并拉通 Dyna Robotics（Dyna-2.1 商用洗衣房 1 小时一镜到底）、World Labs（Marble / Atlas）及光轮智能（Lightwheel / Newton GPU 物理引擎）完成逐维工程对账。

## 2. 收录文章与一手材料（Ingested Articles & Primary Sources）

### [机器人接管酒店洗衣！双脑协同+RSI，顶级Astra驾驶员来了](../../blogs/%E6%9C%BA%E5%99%A8%E4%BA%BA%E6%8E%A5%E7%AE%A1%E9%85%92%E5%BA%97%E6%B4%97%E8%A1%A3%EF%BC%81%E5%8F%8C%E8%84%91%E5%8D%8F%E5%90%8C%2BRSI%EF%BC%8C%E9%A1%B6%E7%BA%A7Astra%E9%A9%BE%E9%A9%B6%E5%91%98%E6%9D%A5%E4%BA%86.md)

2026-11-11 · 来源：大晓机器人 (ACE Robotics) · Mundo与官方通稿 · 状态：有来源缺口

[单篇导读（blogs/）](../../blogs/%E6%9C%BA%E5%99%A8%E4%BA%BA%E6%8E%A5%E7%AE%A1%E9%85%92%E5%BA%97%E6%B4%97%E8%A1%A3%EF%BC%81%E5%8F%8C%E8%84%91%E5%8D%8F%E5%90%8C%2BRSI%EF%BC%8C%E9%A1%B6%E7%BA%A7Astra%E9%A9%BE%E9%A9%B6%E5%91%98%E6%9D%A5%E4%BA%86.md) · [微信原件](../../../../raw/efe724a47e704a8d4292b62741c99b96e38fb8baeea8c63954563c70816bc595) · 固定版本 `digest-material-efe724a47e704a8d4292b62741c99b96e38fb8baeea8c63954563c70816bc595@1`

> 但你相信我，处理柔性物体、在真实、动态、非标准化的环境里完成一整套长链条任务，这事儿的技术难度，在机器人圈里绝对是地狱级的。

> 洗衣服务涉及取衣、搬运、设备操作、洗涤烘干、送回客房等多个环节，对机器人的空间理解、精细操作和长流程任务规划都有很高要求。

关联一手材料：

- ACE Robotics (大晓机器人) 酒店洗衣双脑协同披露 (2026-11-10) & Mundo: Customized World Model 技术档案（大晓机器人 (ACE Robotics) · Mundo与官方通稿）· [原站](https://huggingface.co/blog/Luo-Yihang/mundo-world-model) · [本地原件](../../../../raw/ff19d43cf79bf6f64d7578e0d9a0486404c356e845a1519bfec1464c987316e8) · 版本 `digest-material-ff19d43cf79bf6f64d7578e0d9a0486404c356e845a1519bfec1464c987316e8@1`
  > - \[Primary Asset B\] Kairos & ACE-Brain-0.6 \* Kairos (arXiv:2606.16533, June 2026): "Kairos: A Regret-Aware Native World-Action Model Stack for Physical AI" & Kairos 3.0 serving architecture (arXiv:2605.11381), authored by Fei Wang, ..., Dacheng Tao, Xiaogang Wang. — 原文提取
