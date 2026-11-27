# openvla

[返回主体档案库](../README.md) · [返回赛道总览](../../赛道总览.md) · [单篇导读索引](../../blogs/README.md)

- 主体类别：🏢 公司与产业主体 (Companies)
- 核心定位与说明：开源 7B VLA 权重与 OFT 微调仓
- 关联账号与官方入口：
  - GitHub（openvla）：[账号主页](https://github.com/openvla) · 登记对象 `digest-publisher-ce65e769e02a144d1419ab1e` — 开源 7B VLA 权重与 OFT 微调仓

## 1. 核心研究问题与待核查争议（Questions & Open Debates）

### 🔍 待核查缺口与证据边界（Open Gaps）

- `unavailable`：原课程授课讲师、所属高校课程编号及英文原版 PPT / 课堂录音 URL 未在微信转载稿（human five）中披露，公网检索亦未定位到可直采的原始课程页面；文中提到的 GPT-5 / GPT-5.4 多机器人协作演示与 PPT 中 Gemini Robotics 2 作为 Planner 的案例缺完整课程视频与实验配置日志。（关联：[《Robot Policies：从 Imitation Learning 到 Token VLA》](../../blogs/Robot%20Policies%EF%BC%9A%E4%BB%8E%20Imitation%20Learning%20%E5%88%B0%20Token%20VLA.md)）
- `not_disclosed`：微信正文多处以定性示例替代原始论文量化基准（如未披露 ACT 实际动作块长 K=100、OpenVLA-OFT 在 LIBERO 76.5% 至 97.1% 与 26 倍吞吐提升、FAST 5 倍训练加速与 10k 小时扩展曲线），且原稿因 HTML 转写丢失全部行内 LaTeX 公式。（关联：[《Robot Policies：从 Imitation Learning 到 Token VLA》](../../blogs/Robot%20Policies%EF%BC%9A%E4%BB%8E%20Imitation%20Learning%20%E5%88%B0%20Token%20VLA.md)）
- `not_disclosed`：human five 个人博文提及的自测 843 条 LIBERO 轨迹离散化脚本、各 Bin 下多步漂移定量曲线及 SmolVLA Checkpoint 语言扰动测试细节尚未随本文公开，留待作者后续博文释放。（关联：[《VLA简史：从RT1到MolMoAct2》](../../blogs/VLA%E7%AE%80%E5%8F%B2%EF%BC%9A%E4%BB%8ERT1%E5%88%B0MolMoAct2.md)）

- [《Robot Policies：从 Imitation Learning 到 Token VLA》](../../blogs/Robot%20Policies%EF%BC%9A%E4%BB%8E%20Imitation%20Learning%20%E5%88%B0%20Token%20VLA.md)：触发线索为微信公众号 human five 于 2026-11-24 发布的《Robot Policies：从 Imitation Learning 到 Token VLA》（未披露原英文课程编号、讲师及原始 PPT/录音链接，且因微信 HTML 转写丢失行内 LaTeX 数学符号）。本工作台穿透核查并归档讲授脉络中 8 篇一手核心论文（ACT arXiv:2304.13705、DAgger arXiv:1011.0686、HG-DAgger arXiv:1810.02890、AMP arXiv:2104.02180、RT-2 arXiv:2307.15818、FAST arXiv:2501.09747、OpenVLA-OFT arXiv:2502.19645、MolmoAct arXiv:2508.07917），为各发布机构与代码仓补齐主页级 publisher\_accounts，补全缺失数学公式并联动站内 VLA 简史、RT-H、π0.5、MDP 五步闭环与 VLA 内部物理表征等已有导读；未公开的原始课堂录音/PPT 及定性省略的超参实验表保留规范缺口。
- [《VLA简史：从RT1到MolMoAct2》](../../blogs/VLA%E7%AE%80%E5%8F%B2%EF%BC%9A%E4%BB%8ERT1%E5%88%B0MolMoAct2.md)：逐项核验 RT-1 至 MolmoAct2 八篇 arXiv 原始论文 PDF（64K–178K 字符），精准校准参数规模、LIBERO / SO100 / 跨本体指标及 MolmoAct2 55.79 Hz 开环均摊吞吐限制；保留博主 843 条 LIBERO 离散化实验（5.5 倍 RMSE 差异）并补足离线/真机边界。

## 2. 收录文章与一手材料（Ingested Articles & Primary Sources）

### [Robot Policies：从 Imitation Learning 到 Token VLA](../../blogs/Robot%20Policies%EF%BC%9A%E4%BB%8E%20Imitation%20Learning%20%E5%88%B0%20Token%20VLA.md)

2026-11-24 · 来源：human five（Physical AI 课程实录整理 · 穿透 ACT / DAgger / RT-2 / FAST / OpenVLA-OFT / MolmoAct 八篇原论文） · 状态：有来源缺口

[单篇导读（blogs/）](../../blogs/Robot%20Policies%EF%BC%9A%E4%BB%8E%20Imitation%20Learning%20%E5%88%B0%20Token%20VLA.md) · [微信原件](../../../../raw/67f2fa935195a16e5c94011ab4725501f78d42d6438377a308a1e67019492a70) · 固定版本 `digest-material-67f2fa935195a16e5c94011ab4725501f78d42d6438377a308a1e67019492a70@1`

> 今天我想介绍一下 Physical AI，主要讨论如何将你们已经学过的 Vision-Language Model（VLM）、Reinforcement Learning（RL）等技术与机器人结合起来，以及这些技术究竟是如何控制机器人的。

> Policy 输出目标 Action 的频率，通常远低于底层 Controller 实际运行的频率。

关联一手材料：

- Fine-Tuning Vision-Language-Action Models: Optimizing Speed and Success (OpenVLA-OFT)（Stanford University）· [原站](https://arxiv.org/abs/2502.19645) · [本地原件](../../../../raw/4891d285a1d9c03837cf6d14cd08fa3bfc41bcceb89cf1d25b0800265d8febdb) · 版本 `digest-material-4891d285a1d9c03837cf6d14cd08fa3bfc41bcceb89cf1d25b0800265d8febdb@1`
  > Abstract:Recent vision-language-action models (VLAs) build upon pretrained vision-language models and leverage diverse robot datasets to demonstrate strong task execution, language following ability, and semantic generalization. — 原文提取

### [VLA简史：从RT1到MolMoAct2](../../blogs/VLA%E7%AE%80%E5%8F%B2%EF%BC%9A%E4%BB%8ERT1%E5%88%B0MolMoAct2.md)

2026-11-02 · 来源：human five（穿透 RT-1 / RT-2 / RT-X / Octo / OpenVLA / π0 / SmolVLA / MolmoAct2 八篇 arXiv 论文） · 状态：有来源缺口

[单篇导读（blogs/）](../../blogs/VLA%E7%AE%80%E5%8F%B2%EF%BC%9A%E4%BB%8ERT1%E5%88%B0MolMoAct2.md) · [微信原件](../../../../raw/337c8061044197579ff7f572a9c11aa6d2ca7b2e8d2cd1fb0e3e80ee95ddc2cc) · 固定版本 `digest-material-337c8061044197579ff7f572a9c11aa6d2ca7b2e8d2cd1fb0e3e80ee95ddc2cc@1`

> 刚开始在 Twitter 上关注机器人学习社区时，Vision-Language-Action Model （VLA ）是我经常看到的一个词。到了 2026 年，随着每一次所谓的「机器人领域 GPT 时刻」到来，我逐渐发现一件有意思的事情：机器人领域至今仍未就最值得 Scaling 的方向形成共识，不同研究者对不同技术路线有着各自坚定的判断，其中一条路线就是 VLA。

> 我想弄清楚我们是如何走到今天这一步的，从 RT-1 到 MolmoAct 2 这样的新模型，究竟发生了哪些变化？又是哪些架构设计让这些系统真正发挥作用？这篇 Blog 是我追溯这一演进过程、理解其中技术权衡，并尝试开展一些小型实验的记录。说到底，这也是我更新自己对机器人学习领域认知的一种方式。

关联一手材料：

- OpenVLA: An Open-Source Vision-Language-Action Model（Moo Jin Kim et al.）· [原站](https://arxiv.org/abs/2406.09246) · [NotebookLM](https://notebook.google.com/notebook/cac99041-d3b9-449e-a192-12bb4b1ad391) · [Drive](https://drive.google.com/file/d/1pi9i_PbPfiEjgzaKLitqQ5Vn-pCqqDz6/view?usp=drivesdk) · 版本 `digest-material-353c37df34458f12f969b14dfd8b77175b727b9cddea7bb891759beddeefe1be@1`
  > Figure 1: We present OpenVLA, a 7B-parameter open-source vision-language-action model (VLA), trained on 970k robot episodes from the Open X-Embodiment dataset \[1\]. — PDF p.1
