# huggingface

[返回主体档案库](../README.md) · [返回赛道总览](../../赛道总览.md) · [单篇导读索引](../../blogs/README.md)

- 主体类别：🏢 公司与产业主体 (Companies)
- 核心定位与说明：发布 SmolVLA 与 LeRobot 社区数据集生态
- 关联账号与官方入口：
  - GitHub（huggingface）：[账号主页](https://github.com/huggingface) · 登记对象 `digest-publisher-e95f6f1bdddb9f6e7b8a9e4f` — 发布 SmolVLA 与 LeRobot 社区数据集生态

## 1. 核心研究问题与待核查争议（Questions & Open Debates）

### 🔍 待核查缺口与证据边界（Open Gaps）

- `not_disclosed`：human five 个人博文提及的自测 843 条 LIBERO 轨迹离散化脚本、各 Bin 下多步漂移定量曲线及 SmolVLA Checkpoint 语言扰动测试细节尚未随本文公开，留待作者后续博文释放。（关联：[《VLA简史：从RT1到MolMoAct2》](../../blogs/VLA%E7%AE%80%E5%8F%B2%EF%BC%9A%E4%BB%8ERT1%E5%88%B0MolMoAct2.md)）

- [《VLA简史：从RT1到MolMoAct2》](../../blogs/VLA%E7%AE%80%E5%8F%B2%EF%BC%9A%E4%BB%8ERT1%E5%88%B0MolMoAct2.md)：逐项核验 RT-1 至 MolmoAct2 八篇 arXiv 原始论文 PDF（64K–178K 字符），精准校准参数规模、LIBERO / SO100 / 跨本体指标及 MolmoAct2 55.79 Hz 开环均摊吞吐限制；保留博主 843 条 LIBERO 离散化实验（5.5 倍 RMSE 差异）并补足离线/真机边界。

## 2. 收录文章与一手材料（Ingested Articles & Primary Sources）

### [VLA简史：从RT1到MolMoAct2](../../blogs/VLA%E7%AE%80%E5%8F%B2%EF%BC%9A%E4%BB%8ERT1%E5%88%B0MolMoAct2.md)

2026-11-02 · 来源：human five（穿透 RT-1 / RT-2 / RT-X / Octo / OpenVLA / π0 / SmolVLA / MolmoAct2 八篇 arXiv 论文） · 状态：有来源缺口

[单篇导读（blogs/）](../../blogs/VLA%E7%AE%80%E5%8F%B2%EF%BC%9A%E4%BB%8ERT1%E5%88%B0MolMoAct2.md) · [微信原件](../../../../raw/337c8061044197579ff7f572a9c11aa6d2ca7b2e8d2cd1fb0e3e80ee95ddc2cc) · 固定版本 `digest-material-337c8061044197579ff7f572a9c11aa6d2ca7b2e8d2cd1fb0e3e80ee95ddc2cc@1`

> 刚开始在 Twitter 上关注机器人学习社区时，Vision-Language-Action Model （VLA ）是我经常看到的一个词。到了 2026 年，随着每一次所谓的「机器人领域 GPT 时刻」到来，我逐渐发现一件有意思的事情：机器人领域至今仍未就最值得 Scaling 的方向形成共识，不同研究者对不同技术路线有着各自坚定的判断，其中一条路线就是 VLA。

> 我想弄清楚我们是如何走到今天这一步的，从 RT-1 到 MolmoAct 2 这样的新模型，究竟发生了哪些变化？又是哪些架构设计让这些系统真正发挥作用？这篇 Blog 是我追溯这一演进过程、理解其中技术权衡，并尝试开展一些小型实验的记录。说到底，这也是我更新自己对机器人学习领域认知的一种方式。

关联一手材料：

- SmolVLA: A vision-language-action model for affordable and efficient robotics（Mustafa Shukor et al.）· [原站](https://arxiv.org/abs/2506.01844) · [NotebookLM](https://notebook.google.com/notebook/cac99041-d3b9-449e-a192-12bb4b1ad391) · [Drive](https://drive.google.com/file/d/1db5cj0-W33lJbSc05_TdUmdy_rpjliLi/view?usp=drivesdk) · 版本 `digest-material-cb1bb9a8f824187fcdc32af8c290214487c524f139a3c2def1c6d97adb1fa40c@1`
  > Vision-language models (VLMs) pretrained on large-scale multimodal datasets encode rich visual and linguistic knowledge, making them a strong foundation for robotics. — PDF p.1
