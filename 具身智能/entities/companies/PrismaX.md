# PrismaX

[返回主体档案库](../README.md) · [返回赛道总览](../../赛道总览.md) · [单篇导读索引](../../blogs/README.md)

- 主体类别：🏢 公司与产业主体 (Companies)
- 核心定位与说明：由 Bayley Wang 联合创立并获 a16z CSX 领投 \$11M 种子轮的具身数据与 VLA 部署基础设施公司。 机器人数据采集与部署服务商 PrismaX 官方开源账号。 PrismaX 官方技术动态发布账号。
- 关联账号与官方入口：
  - GitHub（PrismaX）：[账号主页](https://github.com/PrismaXAI) · 登记对象 `digest-publisher-8cbf3ff6c44a43fb681b3f3c` — 机器人数据采集与部署服务商 PrismaX 官方开源账号。
  - Official（PrismaX）：[机构／作者主页](https://www.prismax.ai/) · 登记对象 `digest-publisher-0be3dc07c09102a7770fe299` — 由 Bayley Wang 联合创立并获 a16z CSX 领投 \$11M 种子轮的具身数据与 VLA 部署基础设施公司。
  - X（PrismaX）：[账号主页](https://x.com/PrismaXai) · 登记对象 `digest-publisher-8c6d62ea945ceb8a773befcb` — PrismaX 官方技术动态发布账号。

## 1. 核心研究问题与待核查争议（Questions & Open Debates）

### 🔍 待核查缺口与证据边界（Open Gaps）

- `pending_verification`：PrismaX 官方博客对 RTX 5080 Mobile（约 100 ms/步、端到端总延迟约 10% 变化）、桌面版 RTX 5080 速度快于 RTX 5090 Mobile 以及适配 RTX 5070 的说法均为作者在尚未运行目标硬件实测基准前的工程估算（博客原文明确标注 we haven't benchmarked this configuration yet）。（关联：[《a16z支持的机器人公司，让一张16GB显卡也能跑π0.5｜代码已公开》](../../blogs/a16z%E6%94%AF%E6%8C%81%E7%9A%84%E6%9C%BA%E5%99%A8%E4%BA%BA%E5%85%AC%E5%8F%B8%EF%BC%8C%E8%AE%A9%E4%B8%80%E5%BC%A016GB%E6%98%BE%E5%8D%A1%E4%B9%9F%E8%83%BD%E8%B7%91%CF%800.5%EF%BD%9C%E4%BB%A3%E7%A0%81%E5%B7%B2%E5%85%AC%E5%BC%80.md)）
- `not_disclosed`：prism-pi 仅面向 π0.5 部署端推理（rollout）显存与延迟压缩，未披露在真实客户或跨任务长程序列上相较原版 LeRobot 250+ ms 代码的定量任务成功率对比基准表。（关联：[《a16z支持的机器人公司，让一张16GB显卡也能跑π0.5｜代码已公开》](../../blogs/a16z%E6%94%AF%E6%8C%81%E7%9A%84%E6%9C%BA%E5%99%A8%E4%BA%BA%E5%85%AC%E5%8F%B8%EF%BC%8C%E8%AE%A9%E4%B8%80%E5%BC%A016GB%E6%98%BE%E5%8D%A1%E4%B9%9F%E8%83%BD%E8%B7%91%CF%800.5%EF%BD%9C%E4%BB%A3%E7%A0%81%E5%B7%B2%E5%85%AC%E5%BC%80.md)）

- [《a16z支持的机器人公司，让一张16GB显卡也能跑π0.5｜代码已公开》](../../blogs/a16z%E6%94%AF%E6%8C%81%E7%9A%84%E6%9C%BA%E5%99%A8%E4%BA%BA%E5%85%AC%E5%8F%B8%EF%BC%8C%E8%AE%A9%E4%B8%80%E5%BC%A016GB%E6%98%BE%E5%8D%A1%E4%B9%9F%E8%83%BD%E8%B7%91%CF%800.5%EF%BD%9C%E4%BB%A3%E7%A0%81%E5%B7%B2%E5%85%AC%E5%BC%80.md)：已定位并抓取微信稿对应的 PrismaX 官方博客原文（https://www.prismax.ai/blog/pi05-inference-in-16gb，2026-10-28 发布）及前序延迟优化原文（https://www.prismax.ai/blog/latency-vs-pi05-rollout-performance，2026-10-21），并核查 GitHub 仓库 PrismaXAI/prism-pi 提交记录 b26e70b（作者 bayleyw，确认 15.5 GiB 受限显存实测 21.3 -\> 11.2 GiB 峰值、稳态 14.2 -\> 6.8 GiB 与 82 ms 延迟等价性）；RTX 5080 推理时长（~100 ms）明确保留为作者未跑基准的估算口径。

## 2. 收录文章与一手材料（Ingested Articles & Primary Sources）

### [a16z支持的机器人公司，让一张16GB显卡也能跑π0.5｜代码已公开](../../blogs/a16z%E6%94%AF%E6%8C%81%E7%9A%84%E6%9C%BA%E5%99%A8%E4%BA%BA%E5%85%AC%E5%8F%B8%EF%BC%8C%E8%AE%A9%E4%B8%80%E5%BC%A016GB%E6%98%BE%E5%8D%A1%E4%B9%9F%E8%83%BD%E8%B7%91%CF%800.5%EF%BD%9C%E4%BB%A3%E7%A0%81%E5%B7%B2%E5%85%AC%E5%BC%80.md)

2026-10-29 · 来源：PrismaX (Bayley Wang · prism-pi) · 状态：有来源缺口

[单篇导读（blogs/）](../../blogs/a16z%E6%94%AF%E6%8C%81%E7%9A%84%E6%9C%BA%E5%99%A8%E4%BA%BA%E5%85%AC%E5%8F%B8%EF%BC%8C%E8%AE%A9%E4%B8%80%E5%BC%A016GB%E6%98%BE%E5%8D%A1%E4%B9%9F%E8%83%BD%E8%B7%91%CF%800.5%EF%BD%9C%E4%BB%A3%E7%A0%81%E5%B7%B2%E5%85%AC%E5%BC%80.md) · [微信原件](../../../../raw/3f851ce569924d3412d071049eecd3c781afcaf57f5716abe737ffda81ed3f73) · 固定版本 `digest-material-3f851ce569924d3412d071049eecd3c781afcaf57f5716abe737ffda81ed3f73@1`

> PrismaX 10 月 28 日披露，团队在 16 GB 显卡中装下了 π0.5 推理栈，将显存占用从原先加载时的约 22 GB 降至 11.2 GB。

> 他们的做法是修正两处额外占用：加载真实模型前先初始化随机 fp32 主干，以及编译后让 PyTorch 模型与 TensorRT 引擎同时留在显存。

关联一手材料：

- Quick Note: π0.5 Inference in 16 GB（PrismaX (Bayley Wang)）· [原站](https://www.prismax.ai/blog/pi05-inference-in-16gb) · [本地原件](../../../../raw/ea7a40a6cbc1e16d4e8af1c08c7805c4ba84a7975600112e20b4f82459f13800) · 版本 `digest-material-ea7a40a6cbc1e16d4e8af1c08c7805c4ba84a7975600112e20b4f82459f13800@1`
  > Description: Two fixes cut our π0.5 rollout stack from about 22 GB to 11.2 GB of VRAM, so it now fits 16 GB cards like the RTX 5080 and 5070 Ti. — 原文提取
- PrismaX prism-pi official repository（PrismaX）· [原站](https://github.com/PrismaXAI/prism-pi) · [NotebookLM](https://notebook.google.com/notebook/cac99041-d3b9-449e-a192-12bb4b1ad391) · [Drive](https://drive.google.com/file/d/1db_mIdxDrkH0U-D-IESToGFUiXeKhDhS/view?usp=drivesdk) · 版本 `digest-material-5f11a439a65ab8dd0fbff79a2193e3bb07824088c5cd327825f2a0baf0cd4113@3`
  > This is the rollout code for our IROS pi-0.5 demo. Its claim to fame is achieving real-time (80 ms for 3x 224x224 images with 10 denoising steps) performance on a mobile RTX 5090. — 原文提取


## 3. 关联实体网络（Verified Entity Ontology）

- ← Bayley Wang · 创立 · Co-Founder & CEO（rule_verified/verified）
- ← [a16z](../funds/a16z.md) · 投资 / 领投 · \$11M · Seed Lead（rule_verified/verified）
