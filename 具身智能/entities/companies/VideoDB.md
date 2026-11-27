# VideoDB

[返回主体档案库](../README.md) · [返回赛道总览](../../赛道总览.md) · [单篇导读索引](../../blogs/README.md)

- 主体类别：🏢 公司与产业主体 (Companies)
- 核心定位与说明：视频基础设施公司，让 agents 搜索、剪辑与记忆视频；推出 RoboPeek 浏览器端机器人数据集检视工具。 VideoDB 开源 SDK 与 StreamRAG/Director 等视频基础设施代码仓库。
- 关联账号与官方入口：
  - GitHub（video-db）：[账号主页](https://github.com/video-db) · 登记对象 `digest-publisher-059990f8c7d330da0ce42df6` — VideoDB 开源 SDK 与 StreamRAG/Director 等视频基础设施代码仓库。
  - 机构官网（VideoDB）：[机构／作者主页](https://videodb.io/) · 登记对象 `digest-publisher-47722a25f0a33df81f7d1c03` — 视频基础设施公司，让 agents 搜索、剪辑与记忆视频；推出 RoboPeek 浏览器端机器人数据集检视工具。

## 1. 核心研究问题与待核查争议（Questions & Open Debates）

### 🔍 待核查缺口与证据边界（Open Gaps）

- `not_disclosed`：VideoDB 原文聚焦单 Episode 检查与底层数据结构解剖，未给出三种格式在千万小时级（10–100 PB）集群顺序/随机读取吞吐量、GPU Dataloader 解码延迟或存储压缩比（对比 AV1 与 Lance/WebDataset）的规模化基准压测数据。（关联：[《理解机器人数据集：深入解析 LeRobot、RLDS 与 MCAP》](../../blogs/%E7%90%86%E8%A7%A3%E6%9C%BA%E5%99%A8%E4%BA%BA%E6%95%B0%E6%8D%AE%E9%9B%86%EF%BC%9A%E6%B7%B1%E5%85%A5%E8%A7%A3%E6%9E%90%20LeRobot%E3%80%81RLDS%20%E4%B8%8E%20MCAP.md)）
- `pending_verification`：文中附带的浏览器可视化工具 RoboPeek 对超大规模多视角高码率视频集（如百万小时远程流式加载）的实际前端解析性能与商业开放权限未附独立压测。（关联：[《理解机器人数据集：深入解析 LeRobot、RLDS 与 MCAP》](../../blogs/%E7%90%86%E8%A7%A3%E6%9C%BA%E5%99%A8%E4%BA%BA%E6%95%B0%E6%8D%AE%E9%9B%86%EF%BC%9A%E6%B7%B1%E5%85%A5%E8%A7%A3%E6%9E%90%20LeRobot%E3%80%81RLDS%20%E4%B8%8E%20MCAP.md)）

- [《理解机器人数据集：深入解析 LeRobot、RLDS 与 MCAP》](../../blogs/%E7%90%86%E8%A7%A3%E6%9C%BA%E5%99%A8%E4%BA%BA%E6%95%B0%E6%8D%AE%E9%9B%86%EF%BC%9A%E6%B7%B1%E5%85%A5%E8%A7%A3%E6%9E%90%20LeRobot%E3%80%81RLDS%20%E4%B8%8E%20MCAP.md)：完成一手信源核验与分诊：复用 VideoDB 官方工程长文《Understanding robotics datasets: inside LeRobot, RLDS and MCAP》(2026-10-26) 全文及三份可复现 Python 实测脚本与固定版本号，核实 LeRobot v3 共享 MP4 偏移公式、RLDS 末步边界标志语义及 MCAP 原始通道与转换边界；补充对接万卡/PB 级训练 I/O 与随机解码放大分析。

## 2. 收录文章与一手材料（Ingested Articles & Primary Sources）

### [理解机器人数据集：深入解析 LeRobot、RLDS 与 MCAP](../../blogs/%E7%90%86%E8%A7%A3%E6%9C%BA%E5%99%A8%E4%BA%BA%E6%95%B0%E6%8D%AE%E9%9B%86%EF%BC%9A%E6%B7%B1%E5%85%A5%E8%A7%A3%E6%9E%90%20LeRobot%E3%80%81RLDS%20%E4%B8%8E%20MCAP.md)

2026-10-31 · 来源：VideoDB · Om Gate · 状态：有来源缺口

[单篇导读（blogs/）](../../blogs/%E7%90%86%E8%A7%A3%E6%9C%BA%E5%99%A8%E4%BA%BA%E6%95%B0%E6%8D%AE%E9%9B%86%EF%BC%9A%E6%B7%B1%E5%85%A5%E8%A7%A3%E6%9E%90%20LeRobot%E3%80%81RLDS%20%E4%B8%8E%20MCAP.md) · [微信原件](../../../../raw/acae2ea325a86dfc43dd8d0f1a10ce54e92768473680c2711251e90c06148184) · 固定版本 `digest-material-acae2ea325a86dfc43dd8d0f1a10ce54e92768473680c2711251e90c06148184@1`

> LeRobot 3将 Parquet 文件中的数据行与视频中的相机帧关联起来。Episode 元数据用于确定哪些数据行和视频片段属于同一次交互。

> MCAP将带时间戳的消息存储在不同 Channel 中。它本身不规定 Episode 、Action或成功标签的定义，这些语义由生成记录的具体项目决定。

关联一手材料：

- Robotics datasets: LeRobot, RLDS and MCAP · VideoDB（Om Gate / VideoDB）· [原站](https://videodb.io/blog/understanding-robotics-datasets) · [NotebookLM](https://notebook.google.com/notebook/cac99041-d3b9-449e-a192-12bb4b1ad391) · [Drive](https://drive.google.com/file/d/19npuZBU2LqfYj1iBwamdhgnSAFJ7gE5x/view?usp=drivesdk) · 版本 `digest-material-c548f52fc4cc02936cf8dc1db3850eb5cd671788179b54a716a4fd3ecf289a2a@1`
  > connects rows in Parquet files to camera frames in videos. Episode metadata tells us which rows and video segments belong together. — 原文提取
