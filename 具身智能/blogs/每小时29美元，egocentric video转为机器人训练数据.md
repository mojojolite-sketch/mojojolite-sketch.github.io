---
title: "每小时29美元，egocentric video转为机器人训练数据"
type: blog_digest
sector: "具身智能"
source: "human five"
published_at: "2026-11-05"
raw_sha256: "05032fcf70d9374308f50313ccb8d2332cfe3d1b1d546a488fb2362c9f278093"
material_version: "digest-material-05032fcf70d9374308f50313ccb8d2332cfe3d1b1d546a488fb2362c9f278093@1"
origin_url: ""
user_comments: ""
status: "processed_with_gaps"
---

<a id="digest-05032fcf70d93743"></a>
# 每小时29美元，egocentric video转为机器人训练数据

2026-11-05 · human five · 有来源缺口

[微信原文件](../../../raw/05032fcf70d9374308f50313ccb8d2332cfe3d1b1d546a488fb2362c9f278093) · 固定材料版本 `digest-material-05032fcf70d9374308f50313ccb8d2332cfe3d1b1d546a488fb2362c9f278093@1`

> 今天，我们发布 Perceptron Egocentric 1.0 。这是一款自助式 API ，可将人类和机器人的第一视角视频转化为机器人训练所需的结构化数据。它提供具有前沿水平的子任务时间线、每只手的连续活动标签，以及最先进的 3D 手部重建，每小时视频收费 29 美元，不到 GPT- 6 Astra仅生成子任务时间线费用的一半，后者约为 76 美元。
> — 原文摘录，PDF p.1；证据 `digest-material-05032fcf70d9374308f50313ccb8d2332cfe3d1b1d546a488fb2362c9f278093-excerpt-1@1`

> 按手分别提供结构化标注。 很少有 pipeline 能够同时提供每只手的连续活动标签、一致的动作分类体系、精确的 2D 关键点和 3D 手部重建。我们提供上述全部功能，其中包括一个新的 3D 手部重建模型，其手部形状精度在 HOT3D 和 ARCTIC 上达到最先进水平。
> — 原文摘录，PDF p.3；证据 `digest-material-05032fcf70d9374308f50313ccb8d2332cfe3d1b1d546a488fb2362c9f278093-excerpt-2@1`

> 简单、自助式的接入。 开源工具将计算、扩展和部署工作留给你的工程师，而托管服务提供商通常需要定制化合作。通过我们的 API ，你可以提交视频、跟踪作业并下载结构化标注，价格透明，无需人工协助开通。
> — 原文摘录，PDF p.3；证据 `digest-material-05032fcf70d9374308f50313ccb8d2332cfe3d1b1d546a488fb2362c9f278093-excerpt-3@1`

一手材料：

- **Introducing Perceptron Egocentric 1.0** · Perceptron AI · [原站](https://perceptron.inc/blog/introducing-perceptron-egocentric-1-0) · [主体档案：Perceptron](../entities/companies/Perceptron.md) · [NotebookLM](https://notebook.google.com/notebook/33f0076b-fc09-42cc-9cd9-fecfb847ce1c) · [Drive](https://drive.google.com/file/d/1G5dJo66Oc3eUUX2eTCnu4HZx8eiLPIGp/view?usp=drivesdk)
  材料版本 `digest-material-d30c8a2328407de82a32187a2df30a4343b5e55b8bf34e890407e9ae2c40b63c@1`；获取方式 `http_full_text_snapshot`。
  > Today we're releasing Perceptron Egocentric 1.0, a self-service API that turns first-person human and robot video into structured training data for robotics. — 原文提取
  > Dish washing, bare hands (phone video, no calibration): rinsing a frying pan while the other hand works the faucet with a sponge. — 原文提取

归属与范围：完成一手信源追溯与分诊：获取Perceptron AI官方发布的《Introducing Perceptron Egocentric 1.0》完整长文（2026-11-04）；登记Perceptron机构官网与官方X账号；核实其亚秒级子任务分割指标（EgoHome 0.787 vs GPT-6 Astra 0.797）、HOT3D手部形状误差5.21mm与29美元/小时定价模型；模型私有化部署权重与下游真机策略增益保留缺口。

来源缺口：

- `unavailable`：Perceptron 官方博客未披露其 3D 手部重建模型 Mk1.5 的完整权重、训练集混合比例以及企业客户私有化部署的具体商业授权费用，保留模型权重开放性与商业合作细节的数据缺口。
- `pending_verification`：Perceptron Egocentric 宣称的 29 美元/小时低成本端到端 API 在真实复杂光照、严重手部自遮挡或高动态工业组装场景下的标注鲁棒性与机器人下游模仿学习策略成功率增益，仍属于厂商自行报告与基准评测主张，尚未经第三方硬件与策略独立真机实测复核。

[返回赛道总览](../赛道总览.md#digest-05032fcf70d93743) · [返回导读索引](README.md) · [主体档案库](../entities/README.md)
