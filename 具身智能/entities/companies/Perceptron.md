# Perceptron

[返回主体档案库](../README.md) · [返回赛道总览](../../赛道总览.md) · [单篇导读索引](../../blogs/README.md)

- **主体类别**：🏢 公司与产业主体 (Companies)
- **核心定位与说明**：• 物理智能基础模型公司，由前FAIR主管创办。 • 研发第一视角视频理解与机器人训练API。 • 提供Egocentric 1.0与Mk1.5系列模型。 • Perceptron官方社交账号，发布模型与API动态。 • 关注第一视角动作标注与多模态物理世界理解。
- **关联账号与官方入口**：
  - **X**（Perceptron Inc.）：[账号主页](https://x.com/perceptroninc) · 登记对象 `digest-publisher-adfc26a1e9dd36e77f27f0c8` — • Perceptron官方社交账号，发布模型与API动态。 • 关注第一视角动作标注与多模态物理世界理解。
  - **机构官网**（Perceptron）：[机构／作者主页](https://perceptron.inc/) · 登记对象 `digest-publisher-ae82d6c798439455aaadc2cd` — • 物理智能基础模型公司，由前FAIR主管创办。 • 研发第一视角视频理解与机器人训练API。 • 提供Egocentric 1.0与Mk1.5系列模型。

## 1. 核心研究问题与待核查争议（Questions & Open Debates）

### 🔍 待核查缺口与证据边界（Open Gaps）

- `unavailable`：Perceptron 官方博客未披露其 3D 手部重建模型 Mk1.5 的完整权重、训练集混合比例以及企业客户私有化部署的具体商业授权费用，保留模型权重开放性与商业合作细节的数据缺口。（关联：[《每小时29美元，egocentric video转为机器人训练数据》](../../blogs/%E6%AF%8F%E5%B0%8F%E6%97%B629%E7%BE%8E%E5%85%83%EF%BC%8Cegocentric%20video%E8%BD%AC%E4%B8%BA%E6%9C%BA%E5%99%A8%E4%BA%BA%E8%AE%AD%E7%BB%83%E6%95%B0%E6%8D%AE.md)）
- `pending_verification`：Perceptron Egocentric 宣称的 29 美元/小时低成本端到端 API 在真实复杂光照、严重手部自遮挡或高动态工业组装场景下的标注鲁棒性与机器人下游模仿学习策略成功率增益，仍属于厂商自行报告与基准评测主张，尚未经第三方硬件与策略独立真机实测复核。（关联：[《每小时29美元，egocentric video转为机器人训练数据》](../../blogs/%E6%AF%8F%E5%B0%8F%E6%97%B629%E7%BE%8E%E5%85%83%EF%BC%8Cegocentric%20video%E8%BD%AC%E4%B8%BA%E6%9C%BA%E5%99%A8%E4%BA%BA%E8%AE%AD%E7%BB%83%E6%95%B0%E6%8D%AE.md)）

- **[《每小时29美元，egocentric video转为机器人训练数据》](../../blogs/%E6%AF%8F%E5%B0%8F%E6%97%B629%E7%BE%8E%E5%85%83%EF%BC%8Cegocentric%20video%E8%BD%AC%E4%B8%BA%E6%9C%BA%E5%99%A8%E4%BA%BA%E8%AE%AD%E7%BB%83%E6%95%B0%E6%8D%AE.md)**：完成一手信源追溯与分诊：获取Perceptron AI官方发布的《Introducing Perceptron Egocentric 1.0》完整长文（2026-11-04）；登记Perceptron机构官网与官方X账号；核实其亚秒级子任务分割指标（EgoHome 0.787 vs GPT-6 Astra 0.797）、HOT3D手部形状误差5.21mm与29美元/小时定价模型；模型私有化部署权重与下游真机策略增益保留缺口。

## 2. 收录文章与一手材料（Ingested Articles & Primary Sources）

### [每小时29美元，egocentric video转为机器人训练数据](../../blogs/%E6%AF%8F%E5%B0%8F%E6%97%B629%E7%BE%8E%E5%85%83%EF%BC%8Cegocentric%20video%E8%BD%AC%E4%B8%BA%E6%9C%BA%E5%99%A8%E4%BA%BA%E8%AE%AD%E7%BB%83%E6%95%B0%E6%8D%AE.md)

2026-11-05 · 来源：human five · 状态：有来源缺口

[单篇导读（blogs/）](../../blogs/%E6%AF%8F%E5%B0%8F%E6%97%B629%E7%BE%8E%E5%85%83%EF%BC%8Cegocentric%20video%E8%BD%AC%E4%B8%BA%E6%9C%BA%E5%99%A8%E4%BA%BA%E8%AE%AD%E7%BB%83%E6%95%B0%E6%8D%AE.md) · [微信原件](../../../../raw/05032fcf70d9374308f50313ccb8d2332cfe3d1b1d546a488fb2362c9f278093) · 固定版本 `digest-material-05032fcf70d9374308f50313ccb8d2332cfe3d1b1d546a488fb2362c9f278093@1`

> 今天，我们发布 Perceptron Egocentric 1.0 。这是一款自助式 API ，可将人类和机器人的第一视角视频转化为机器人训练所需的结构化数据。它提供具有前沿水平的子任务时间线、每只手的连续活动标签，以及最先进的 3D 手部重建，每小时视频收费 29 美元，不到 GPT- 6 Astra仅生成子任务时间线费用的一半，后者约为 76 美元。

> 按手分别提供结构化标注。 很少有 pipeline 能够同时提供每只手的连续活动标签、一致的动作分类体系、精确的 2D 关键点和 3D 手部重建。我们提供上述全部功能，其中包括一个新的 3D 手部重建模型，其手部形状精度在 HOT3D 和 ARCTIC 上达到最先进水平。

关联一手材料：

- **Introducing Perceptron Egocentric 1.0**（Perceptron AI）· [原站](https://perceptron.inc/blog/introducing-perceptron-egocentric-1-0) · [NotebookLM](https://notebook.google.com/notebook/33f0076b-fc09-42cc-9cd9-fecfb847ce1c) · [Drive](https://drive.google.com/file/d/1G5dJo66Oc3eUUX2eTCnu4HZx8eiLPIGp/view?usp=drivesdk) · 版本 `digest-material-d30c8a2328407de82a32187a2df30a4343b5e55b8bf34e890407e9ae2c40b63c@1`
  > Today we're releasing Perceptron Egocentric 1.0, a self-service API that turns first-person human and robot video into structured training data for robotics. — 原文提取
