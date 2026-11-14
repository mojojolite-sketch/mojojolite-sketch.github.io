# PrismaX

[返回主体档案库](../README.md) · [返回赛道总览](../../赛道总览.md) · [单篇导读索引](../../blogs/README.md)

- 主体类别：🏢 公司与产业主体 (Companies)
- 核心定位与说明：• 机器人数据、遥操作与VLA基础设施团队。 • 官网称提供真实操作数据与平台。 • 2025-06披露\$11m种子，a16z CSX领投；估值未披露。
- 关联账号与官方入口：
  - GitHub（PrismaX / PrismaXAI）：[账号主页](https://github.com/PrismaXAI) · 登记对象 `digest-publisher-8cbf3ff6c44a43fb681b3f3c` — • 机器人数据、遥操作与VLA基础设施团队。 • 官网称提供真实操作数据与平台。 • 2025-06披露\$11m种子，a16z CSX领投；估值未披露。

## 1. 核心研究问题与待核查争议（Questions & Open Debates）

- 当前收录材料的主张与实验指标均保持 `verification=pending`，尚未发现显式冲突；待结合后续实机部署或独立复核进一步检验。

## 2. 收录文章与一手材料（Ingested Articles & Primary Sources）

### [a16z支持的机器人公司，让一张16GB显卡也能跑π0.5｜代码已公开](../../blogs/a16z%E6%94%AF%E6%8C%81%E7%9A%84%E6%9C%BA%E5%99%A8%E4%BA%BA%E5%85%AC%E5%8F%B8%EF%BC%8C%E8%AE%A9%E4%B8%80%E5%BC%A016GB%E6%98%BE%E5%8D%A1%E4%B9%9F%E8%83%BD%E8%B7%91%CF%800.5%EF%BD%9C%E4%BB%A3%E7%A0%81%E5%B7%B2%E5%85%AC%E5%BC%80.md)

2026-10-29 · 来源：PrismaX · 状态：已整理

[单篇导读（blogs/）](../../blogs/a16z%E6%94%AF%E6%8C%81%E7%9A%84%E6%9C%BA%E5%99%A8%E4%BA%BA%E5%85%AC%E5%8F%B8%EF%BC%8C%E8%AE%A9%E4%B8%80%E5%BC%A016GB%E6%98%BE%E5%8D%A1%E4%B9%9F%E8%83%BD%E8%B7%91%CF%800.5%EF%BD%9C%E4%BB%A3%E7%A0%81%E5%B7%B2%E5%85%AC%E5%BC%80.md) · [微信原件](../../../../raw/3f851ce569924d3412d071049eecd3c781afcaf57f5716abe737ffda81ed3f73) · 固定版本 `digest-material-3f851ce569924d3412d071049eecd3c781afcaf57f5716abe737ffda81ed3f73@1`

> PrismaX 10 月 28 日披露，团队在 16 GB 显卡中装下了 π0.5 推理栈，将显存占用从原先加载时的约 22 GB 降至 11.2 GB。

> 他们的做法是修正两处额外占用：加载真实模型前先初始化随机 fp32 主干，以及编译后让 PyTorch 模型与 TensorRT 引擎同时留在显存。

关联一手材料：

- PrismaX prism-pi official repository（PrismaX）· [原站](https://github.com/PrismaXAI/prism-pi) · [NotebookLM](https://notebook.google.com/notebook/cac99041-d3b9-449e-a192-12bb4b1ad391) · [Drive](https://drive.google.com/file/d/1db_mIdxDrkH0U-D-IESToGFUiXeKhDhS/view?usp=drivesdk) · 版本 `digest-material-5f11a439a65ab8dd0fbff79a2193e3bb07824088c5cd327825f2a0baf0cd4113@3`
  > This is the rollout code for our IROS pi-0.5 demo. Its claim to fame is achieving real-time (80 ms for 3x 224x224 images with 10 denoising steps) performance on a mobile RTX 5090. — 原文提取
