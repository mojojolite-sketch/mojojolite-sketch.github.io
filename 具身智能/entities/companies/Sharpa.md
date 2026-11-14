# Sharpa

[返回主体档案库](../README.md) · [返回赛道总览](../../赛道总览.md) · [单篇导读索引](../../blogs/README.md)

- 主体类别：🏢 公司与产业主体 (Companies)
- 核心定位与说明：• 灵巧操作与具身智能机器人公司，创办于2024。 • 研发Wave高自由度触觉灵巧手与D01人形本体。 • 联合开源SharpaDex大规模触觉示教数据集。 • Sharpa官方开源组织，维护触觉与运控仓库。 • 提供Wave灵巧手SDK、强化学习环境与示例。
- 关联账号与官方入口：
  - GitHub（Sharpa）：[账号主页](https://github.com/sharpa-robotics) · 登记对象 `digest-publisher-ceadfe4677e1c3b98bff8a94` — • Sharpa官方开源组织，维护触觉与运控仓库。 • 提供Wave灵巧手SDK、强化学习环境与示例。
  - 机构官网（Sharpa）：[机构／作者主页](https://www.sharpa.com/) · 登记对象 `digest-publisher-882c6efbbab0a500c1cb2f4b` — • 灵巧操作与具身智能机器人公司，创办于2024。 • 研发Wave高自由度触觉灵巧手与D01人形本体。 • 联合开源SharpaDex大规模触觉示教数据集。

## 1. 核心研究问题与待核查争议（Questions & Open Debates）

### 🔍 待核查缺口与证据边界（Open Gaps）

- `unavailable`：UVTA 的可穿戴触觉外骨骼动捕手套的具体硬件 BOM 成本、标定公差以及工程加工图纸未在论文中完全公开，目前主要依赖自研定制套件；同时 SharpaDex 虽开源但真机长期部署中的传感器磨损与触觉漂移衰减率未披露。（关联：[《触觉灵巧操作杀出一匹黑马：人类触觉数据终于被规模化地用起来了？》](../../blogs/%E8%A7%A6%E8%A7%89%E7%81%B5%E5%B7%A7%E6%93%8D%E4%BD%9C%E6%9D%80%E5%87%BA%E4%B8%80%E5%8C%B9%E9%BB%91%E9%A9%AC%EF%BC%9A%E4%BA%BA%E7%B1%BB%E8%A7%A6%E8%A7%89%E6%95%B0%E6%8D%AE%E7%BB%88%E4%BA%8E%E8%A2%AB%E8%A7%84%E6%A8%A1%E5%8C%96%E5%9C%B0%E7%94%A8%E8%B5%B7%E6%9D%A5%E4%BA%86%EF%BC%9F.md)）
- `pending_verification`：UVTA 当前评测为5项单任务独立训练（single-task policies），在未见物体类别、跨空间光照/纹理剧烈变化或多任务连续复合场景下的泛化能力，尚未经多任务统一大模型与跨实验室独立真机部署复核。（关联：[《触觉灵巧操作杀出一匹黑马：人类触觉数据终于被规模化地用起来了？》](../../blogs/%E8%A7%A6%E8%A7%89%E7%81%B5%E5%B7%A7%E6%93%8D%E4%BD%9C%E6%9D%80%E5%87%BA%E4%B8%80%E5%8C%B9%E9%BB%91%E9%A9%AC%EF%BC%9A%E4%BA%BA%E7%B1%BB%E8%A7%A6%E8%A7%89%E6%95%B0%E6%8D%AE%E7%BB%88%E4%BA%8E%E8%A2%AB%E8%A7%84%E6%A8%A1%E5%8C%96%E5%9C%B0%E7%94%A8%E8%B5%B7%E6%9D%A5%E4%BA%86%EF%BC%9F.md)）

- [《触觉灵巧操作杀出一匹黑马：人类触觉数据终于被规模化地用起来了？》](../../blogs/%E8%A7%A6%E8%A7%89%E7%81%B5%E5%B7%A7%E6%93%8D%E4%BD%9C%E6%9D%80%E5%87%BA%E4%B8%80%E5%8C%B9%E9%BB%91%E9%A9%AC%EF%BC%9A%E4%BA%BA%E7%B1%BB%E8%A7%A6%E8%A7%89%E6%95%B0%E6%8D%AE%E7%BB%88%E4%BA%8E%E8%A2%AB%E8%A7%84%E6%A8%A1%E5%8C%96%E5%9C%B0%E7%94%A8%E8%B5%B7%E6%9D%A5%E4%BA%86%EF%BC%9F.md)：完成一手信源追溯与分诊：下载UVTA论文一手PDF（arXiv:2609.34182）；登记Sharpa机构官网、Sharpa GitHub组织、北京通用人工智能研究院官网、Wenqiao Li arXiv索引与Siyuan Huang学术主页；核实可穿戴触觉外骨骼、世界模型未来触觉预测对齐表征与84%真机成功率；定制外骨骼BOM成本与多任务统一大模型泛化保留缺口。

## 2. 收录文章与一手材料（Ingested Articles & Primary Sources）

### [触觉灵巧操作杀出一匹黑马：人类触觉数据终于被规模化地用起来了？](../../blogs/%E8%A7%A6%E8%A7%89%E7%81%B5%E5%B7%A7%E6%93%8D%E4%BD%9C%E6%9D%80%E5%87%BA%E4%B8%80%E5%8C%B9%E9%BB%91%E9%A9%AC%EF%BC%9A%E4%BA%BA%E7%B1%BB%E8%A7%A6%E8%A7%89%E6%95%B0%E6%8D%AE%E7%BB%88%E4%BA%8E%E8%A2%AB%E8%A7%84%E6%A8%A1%E5%8C%96%E5%9C%B0%E7%94%A8%E8%B5%B7%E6%9D%A5%E4%BA%86%EF%BC%9F.md)

2026-10-23 · 来源：arXiv:2609.34182 · Unified Visual-Tactile · 状态：有来源缺口

[单篇导读（blogs/）](../../blogs/%E8%A7%A6%E8%A7%89%E7%81%B5%E5%B7%A7%E6%93%8D%E4%BD%9C%E6%9D%80%E5%87%BA%E4%B8%80%E5%8C%B9%E9%BB%91%E9%A9%AC%EF%BC%9A%E4%BA%BA%E7%B1%BB%E8%A7%A6%E8%A7%89%E6%95%B0%E6%8D%AE%E7%BB%88%E4%BA%8E%E8%A2%AB%E8%A7%84%E6%A8%A1%E5%8C%96%E5%9C%B0%E7%94%A8%E8%B5%B7%E6%9D%A5%E4%BA%86%EF%BC%9F.md) · [微信原件](../../../../raw/054644410fb44adac177b061da255d86d34945f9f1797821e0650ba2cd86814d) · 固定版本 `digest-material-054644410fb44adac177b061da255d86d34945f9f1797821e0650ba2cd86814d@1`

> 例如 DexEMG：操作员佩戴表面肌电腕带和动捕手套，用肌肉活动直接预测手部运动学，从而在不操作机器人本体的情况下采集灵巧手遥操作数据。

> MoDE-VLA 也从相近的方向切入，用强化学习增强的遥操作生成更高质量的训练数据，再通过混合灵巧专家架构把力与触觉反馈融合进 VLA 主干。

关联一手材料：

- Unified Visual-Tactile-Action Modeling from Human Demonstrations for Dexterous Manipulation（Wenqiao Li, Qianyou Zhao, Jiawen Hao, Xuezhou Zhu, Tengyu Liu, Kaifeng Zhang, Chuan Wen, Siyuan Huang / BIGAI, SJTU, Sharpa Robotics）· [原站](https://arxiv.org/abs/2609.34182) · [NotebookLM](https://notebook.google.com/notebook/33f0076b-fc09-42cc-9cd9-fecfb847ce1c) · [Drive](https://drive.google.com/file/d/1scy70vkrHZIdJ4EytpWNk4jbqlKqBtMg/view?usp=drivesdk) · 版本 `digest-material-34c12da76a2bd39dfc440d0756a2228429a1a6a91de82b1a838e1dbd84bf82d4@1`
  > Fig. 1. We propose Unified Visual Tactile Action (UVTA) modeling, a framework that enables contact-aware dexterity learning from human tactile data. — PDF p.1
