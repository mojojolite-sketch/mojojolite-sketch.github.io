# Jiatong Ye

[返回主体档案库](../README.md) · [返回赛道总览](../../赛道总览.md) · [单篇导读索引](../../blogs/README.md)

- 主体类别：👤 个人与学者 (People)
- 核心定位与说明：—
- 关联账号与官方入口：
  - arXiv Author Index（Jiatong Ye）：[作者索引](https://arxiv.org/search/?searchtype=author&query=Ye%2C+Jiatong) · 登记对象 `digest-publisher-2bdb1dfd1393bed8caaf4db0`

## 1. 核心研究问题与待核查争议（Questions & Open Debates）

### 📌 归属范围与核验边界

- [《Audio-Visual Rearrangement》](../../blogs/Audio-Visual%20Rearrangement.md)：基于 arXiv:2611.30171v1 HTML 全文核验 Audio-Visual Rearrangement (AVR)：在 Habitat 3.0 + HSSD + SoundSpaces 2.0 仿真环境中结合 Qwen3-TTS 生成 2,000 条训练验证轨迹与 400 条评测轨迹（200 seen / 200 unseen，三类八子类 4:3:3 分布）。框架基于 Qwen2.5-Omni-7B 接入 32 层 MAS Audio Encoder 与 bottleneck=128 的 Motion Adapter，经三阶段课程训练与 6 张 A100 LoRA 微调后，seen OSR 达 20.5%、unseen OSR 达 17.0%（较带真值场景图的 LLM Planner 高 8.0 / 5.5 个百分点）；但并发干扰声源下 unseen OSR 降至 6.5%，说话人相对放置子类仅 3.3%，且底层仍依赖仿真器深度图、精确位姿与 navmesh，代码尚未开源。

## 2. 收录文章与一手材料（Ingested Articles & Primary Sources）

### [Audio-Visual Rearrangement](../../blogs/Audio-Visual%20Rearrangement.md)

2026-11-23 · 来源：中国农业大学 / MBZUAI / UC Berkeley · arXiv:2611.30171v1 (Ruohao Guo, Dantong Niu 等) · 状态：已整理

[单篇导读（blogs/）](../../blogs/Audio-Visual%20Rearrangement.md) · [微信原件](../../../../raw/c8e48e375759284e4c8e4af372f9c2a00dd7445a1501c8a030f9b87f3e16a72a) · 固定版本 `digest-material-c8e48e375759284e4c8e4af372f9c2a00dd7445a1501c8a030f9b87f3e16a72a@1`

> We introduce Audio-Visual Rearrangement (AVR), a novel task in which an agent hears a spoken request, retrieves a suitable object, and delivers it to the requesting user or an instruction-specified destination.

关联一手材料：

- Audio-Visual Rearrangement（Dantong Niu）· [原站](https://arxiv.org/abs/2611.30171v1) · [本地原件](../../../../raw/c8e48e375759284e4c8e4af372f9c2a00dd7445a1501c8a030f9b87f3e16a72a) · 版本 `digest-material-c8e48e375759284e4c8e4af372f9c2a00dd7445a1501c8a030f9b87f3e16a72a@1`
  > We introduce Audio-Visual Rearrangement (AVR), a novel task in which an agent hears a spoken request, retrieves a suitable object, and delivers it to the requesting user or an instruction-specified destination. — 原文提取
