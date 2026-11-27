# perceptron-ai-inc

[返回主体档案库](../README.md) · [返回赛道总览](../../赛道总览.md) · [单篇导读索引](../../blogs/README.md)

- 主体类别：🏢 公司与产业主体 (Companies)
- 核心定位与说明：Perceptron 官方开源代码与工具仓库入口。
- 关联账号与官方入口：
  - GitHub（perceptron-ai-inc）：[账号主页](https://github.com/perceptron-ai-inc) · 登记对象 `digest-publisher-4bade97287f8ff43747d556a` — Perceptron 官方开源代码与工具仓库入口。

## 1. 核心研究问题与待核查争议（Questions & Open Debates）

### 🔍 待核查缺口与证据边界（Open Gaps）

- `unavailable`：Perceptron 官方未披露 3D 手部重建底座 Mk1.5 的模型权重、训练语料配比以及企业私有化部署授权费率，且 EgoHome 基准代码与完整标注集尚未在博客发布当日公开下载。（关联：[《每小时29美元，egocentric video转为机器人训练数据》](../../blogs/%E6%AF%8F%E5%B0%8F%E6%97%B629%E7%BE%8E%E5%85%83%EF%BC%8Cegocentric%20video%E8%BD%AC%E4%B8%BA%E6%9C%BA%E5%99%A8%E4%BA%BA%E8%AE%AD%E7%BB%83%E6%95%B0%E6%8D%AE.md)）
- `pending_verification`：Egocentric 1.0 在 EgoHome（自建 137 片段）与 HOT3D/ARCTIC 上的分数均为厂商报告结果（且 ACE-Ego-Hand 片段列表未公开导致测试切片存在差异）；该 API 标注对下游真机模仿学习策略（如 VLA/WAM）实际成功率的增益及严重遮挡工业装配工况鲁棒性待第三方实测复核。（关联：[《每小时29美元，egocentric video转为机器人训练数据》](../../blogs/%E6%AF%8F%E5%B0%8F%E6%97%B629%E7%BE%8E%E5%85%83%EF%BC%8Cegocentric%20video%E8%BD%AC%E4%B8%BA%E6%9C%BA%E5%99%A8%E4%BA%BA%E8%AE%AD%E7%BB%83%E6%95%B0%E6%8D%AE.md)）

- [《每小时29美元，egocentric video转为机器人训练数据》](../../blogs/%E6%AF%8F%E5%B0%8F%E6%97%B629%E7%BE%8E%E5%85%83%EF%BC%8Cegocentric%20video%E8%BD%AC%E4%B8%BA%E6%9C%BA%E5%99%A8%E4%BA%BA%E8%AE%AD%E7%BB%83%E6%95%B0%E6%8D%AE.md)：完成一手信源核验与分诊：复用 Perceptron 官方博客《Introducing Perceptron Egocentric 1.0》(2026-11-04) 完整正文，核对 WGO-Bench、EgoHome、HOT3D 与 ARCTIC 各项基准口径、API 7 个端点及按输出拆分的 \$9–\$29/h 定价结构；识别单目无标定方案在手腕对齐绝对姿态 MPJPE 上仍逊于 ACE-Ego-Hand 的几何约束，模型权重与下游真机策略微调增益保留为缺口。

## 2. 收录文章与一手材料（Ingested Articles & Primary Sources）

### [每小时29美元，egocentric video转为机器人训练数据](../../blogs/%E6%AF%8F%E5%B0%8F%E6%97%B629%E7%BE%8E%E5%85%83%EF%BC%8Cegocentric%20video%E8%BD%AC%E4%B8%BA%E6%9C%BA%E5%99%A8%E4%BA%BA%E8%AE%AD%E7%BB%83%E6%95%B0%E6%8D%AE.md)

2026-11-05 · 来源：Perceptron Inc. · Egocentric 1.0 · 状态：有来源缺口

[单篇导读（blogs/）](../../blogs/%E6%AF%8F%E5%B0%8F%E6%97%B629%E7%BE%8E%E5%85%83%EF%BC%8Cegocentric%20video%E8%BD%AC%E4%B8%BA%E6%9C%BA%E5%99%A8%E4%BA%BA%E8%AE%AD%E7%BB%83%E6%95%B0%E6%8D%AE.md) · [微信原件](../../../../raw/05032fcf70d9374308f50313ccb8d2332cfe3d1b1d546a488fb2362c9f278093) · 固定版本 `digest-material-05032fcf70d9374308f50313ccb8d2332cfe3d1b1d546a488fb2362c9f278093@1`

> 今天，我们发布 Perceptron Egocentric 1.0 。这是一款自助式 API ，可将人类和机器人的第一视角视频转化为机器人训练所需的结构化数据。它提供具有前沿水平的子任务时间线、每只手的连续活动标签，以及最先进的 3D 手部重建，每小时视频收费 29 美元，不到 GPT- 6 Astra仅生成子任务时间线费用的一半，后者约为 76 美元。

> 按手分别提供结构化标注。 很少有 pipeline 能够同时提供每只手的连续活动标签、一致的动作分类体系、精确的 2D 关键点和 3D 手部重建。我们提供上述全部功能，其中包括一个新的 3D 手部重建模型，其手部形状精度在 HOT3D 和 ARCTIC 上达到最先进水平。

关联一手材料：

- Introducing Perceptron Egocentric 1.0（Perceptron AI）· [原站](https://perceptron.inc/blog/introducing-perceptron-egocentric-1-0) · [NotebookLM](https://notebook.google.com/notebook/33f0076b-fc09-42cc-9cd9-fecfb847ce1c) · [Drive](https://drive.google.com/file/d/1G5dJo66Oc3eUUX2eTCnu4HZx8eiLPIGp/view?usp=drivesdk) · 版本 `digest-material-d30c8a2328407de82a32187a2df30a4343b5e55b8bf34e890407e9ae2c40b63c@1`
  > Today we're releasing Perceptron Egocentric 1.0, a self-service API that turns first-person human and robot video into structured training data for robotics. — 原文提取
