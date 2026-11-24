# zhourui9813

[返回主体档案库](../README.md) · [返回赛道总览](../../赛道总览.md) · [单篇导读索引](../../blogs/README.md)

- 主体类别：🏢 公司与产业主体 (Companies)
- 核心定位与说明：DexRoam 数据集发布入口。
- 关联账号与官方入口：
  - Hugging Face（zhourui9813）：[账号主页](https://huggingface.co/zhourui9813) · 登记对象 `digest-publisher-8331fd1ef78ba07100fd1339` — DexRoam 数据集发布入口。

## 1. 核心研究问题与待核查争议（Questions & Open Debates）

### 🔍 待核查缺口与证据边界（Open Gaps）

- `not_disclosed`：Hugging Face 仓 zhourui9813/DexRoam\_Realworld\_Data 当前仅作为格式样例公开「推椅子合电脑」单任务 50 条真机 HDF5（约 20.7 分钟 / 227.3 GiB），其余 4 项真机任务及全部人类无追踪器示范原始库尚未开放下载。 [线索](https://huggingface.co/datasets/zhourui9813/DexRoam_Realworld_Data)（关联：[《对话 DexRoam 作者周睿，谈人类示范如何变成机器人动作数据》](../../blogs/%E5%AF%B9%E8%AF%9D%20DexRoam%20%E4%BD%9C%E8%80%85%E5%91%A8%E7%9D%BF%EF%BC%8C%E8%B0%88%E4%BA%BA%E7%B1%BB%E7%A4%BA%E8%8C%83%E5%A6%82%E4%BD%95%E5%8F%98%E6%88%90%E6%9C%BA%E5%99%A8%E4%BA%BA%E5%8A%A8%E4%BD%9C%E6%95%B0%E6%8D%AE.md)）
- `not_disclosed`：论文附录 C 定性指出「因缺少力觉/触觉反馈导致未抓紧掉落」为首要真机失败原因，但未定量统计各失败模式在全部测试失败样本中的占比，亦未验证跨任务人类示范正迁移或人形机器人本体迁移。 [线索](https://arxiv.org/abs/2609.35761)（关联：[《对话 DexRoam 作者周睿，谈人类示范如何变成机器人动作数据》](../../blogs/%E5%AF%B9%E8%AF%9D%20DexRoam%20%E4%BD%9C%E8%80%85%E5%91%A8%E7%9D%BF%EF%BC%8C%E8%B0%88%E4%BA%BA%E7%B1%BB%E7%A4%BA%E8%8C%83%E5%A6%82%E4%BD%95%E5%8F%98%E6%88%90%E6%9C%BA%E5%99%A8%E4%BA%BA%E5%8A%A8%E4%BD%9C%E6%95%B0%E6%8D%AE.md)）

- [《对话 DexRoam 作者周睿，谈人类示范如何变成机器人动作数据》](../../blogs/%E5%AF%B9%E8%AF%9D%20DexRoam%20%E4%BD%9C%E8%80%85%E5%91%A8%E7%9D%BF%EF%BC%8C%E8%B0%88%E4%BA%BA%E7%B1%BB%E7%A4%BA%E8%8C%83%E5%A6%82%E4%BD%95%E5%8F%98%E6%88%90%E6%9C%BA%E5%99%A8%E4%BA%BA%E5%8A%A8%E4%BD%9C%E6%95%B0%E6%8D%AE.md)：已穿透至 CoRL 2026 录用论文全文（arXiv:2609.35761v1 HTML 全文，2026-09-28 提交）、官方项目主页（dexroam.github.io）、双开源代码仓（zhourui9813/DexRoam 与 DexRoam-Policy-Training）、HuggingFace 数据集（DexRoam\_Realworld\_Data）及一作周睿（Rui Zhou）与通讯作者韩斯睿（Sirui Han）个人学术主页；同时结合库内 Ego4WAM、OmniTacTune/MimicTouch 与 Pixel-UMI 完成边界横比。42 号电波访谈文章退居触发线索，未公开的其余 4 项任务完整训练集与触觉故障比例留作规范缺口。

## 2. 阅读笔记与原文 Highlight（Reading Highlights & Marginalia）

### 🖍️ 摘录与批注：《对话 DexRoam 作者周睿，谈人类示范如何变成机器人动作数据》（1 条）

关联文章：[《对话 DexRoam 作者周睿，谈人类示范如何变成机器人动作数据》](../../blogs/%E5%AF%B9%E8%AF%9D%20DexRoam%20%E4%BD%9C%E8%80%85%E5%91%A8%E7%9D%BF%EF%BC%8C%E8%B0%88%E4%BA%BA%E7%B1%BB%E7%A4%BA%E8%8C%83%E5%A6%82%E4%BD%95%E5%8F%98%E6%88%90%E6%9C%BA%E5%99%A8%E4%BA%BA%E5%8A%A8%E4%BD%9C%E6%95%B0%E6%8D%AE.md)

- 这个也有趣

> 导读核心结论：来源：arXiv:2609.35761 · DexRoam (CoRL 2026) · 官方项目主页 · GitHub: DexRoam · GitHub: Policy-Training


## 3. 收录文章与一手材料（Ingested Articles & Primary Sources）

### [对话 DexRoam 作者周睿，谈人类示范如何变成机器人动作数据](../../blogs/%E5%AF%B9%E8%AF%9D%20DexRoam%20%E4%BD%9C%E8%80%85%E5%91%A8%E7%9D%BF%EF%BC%8C%E8%B0%88%E4%BA%BA%E7%B1%BB%E7%A4%BA%E8%8C%83%E5%A6%82%E4%BD%95%E5%8F%98%E6%88%90%E6%9C%BA%E5%99%A8%E4%BA%BA%E5%8A%A8%E4%BD%9C%E6%95%B0%E6%8D%AE.md)

2026-11-23 · 来源：arXiv:2609.35761 · HKUST & BAAI (CoRL 2026) · 状态：有来源缺口

[单篇导读（blogs/）](../../blogs/%E5%AF%B9%E8%AF%9D%20DexRoam%20%E4%BD%9C%E8%80%85%E5%91%A8%E7%9D%BF%EF%BC%8C%E8%B0%88%E4%BA%BA%E7%B1%BB%E7%A4%BA%E8%8C%83%E5%A6%82%E4%BD%95%E5%8F%98%E6%88%90%E6%9C%BA%E5%99%A8%E4%BA%BA%E5%8A%A8%E4%BD%9C%E6%95%B0%E6%8D%AE.md) · [微信原件](../../../../raw/ab649be1995fda03fe15f85d7f196ffd9a7c7be73d49069559ebd58d87267ee7) · 固定版本 `digest-material-ab649be1995fda03fe15f85d7f196ffd9a7c7be73d49069559ebd58d87267ee7@1`

> 在大会接收的论文中，香港科技大学、北京智源人工智能研究院、北京大学、北京航空航天大学和中国科学院自动化研究所联合公开了《DexRoam: Learning Mobile Bimanual Dexterous Manipulation from Egocentric Whole-Body Human Demonstrations》（《从第一视角人类全身示范中学习移动双臂灵巧操作》）。

> 在加入人类示范数据后，团队报告了两种视觉语言动作模型（Vision-Language-Action，VLA）的性能提升：GR00T N1.7 的平均任务成功率由 29% 提高至 56%，π0.5 则由 32% 提高至 57%。在另外一组专门比较真机数据用量的实验中，部分设置用一半的真机示范就达到了纯真机训练的水平。

关联一手材料：

- DexRoam\_Realworld\_Data (Push Chair and Close Laptop 50-Episode Sample)（zhourui9813 (Hugging Face)）· [原站](https://huggingface.co/datasets/zhourui9813/DexRoam_Realworld_Data) · [本地原件](../../../../raw/0786b946076f1d440d236d9ec3617448fcc5e19128d9a58a26aebfffbe107580) · 版本 `digest-material-0786b946076f1d440d236d9ec3617448fcc5e19128d9a58a26aebfffbe107580@1`
  > This repository contains real-robot demonstrations of an Astribot robot pushing a chair and then closing a laptop. — 原文提取
