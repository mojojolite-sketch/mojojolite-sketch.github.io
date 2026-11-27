# AfterQuery-Research

[返回主体档案库](../README.md) · [返回赛道总览](../../赛道总览.md) · [单篇导读索引](../../blogs/README.md)

- 主体类别：🏢 公司与产业主体 (Companies)
- 核心定位与说明：包含数据采集脚本与LeRobot训练管线代码
- 关联账号与官方入口：
  - GitHub（AfterQuery-Research）：[账号主页](https://github.com/AfterQuery-Research) · 登记对象 `digest-publisher-d6e40c517dbb7fee5d500304` — 包含数据采集脚本与LeRobot训练管线代码

## 1. 核心研究问题与待核查争议（Questions & Open Debates）

### 🔍 待核查缺口与证据边界（Open Gaps）

- `not_disclosed`：微信摘要第10节补充提到的FlexiTac V2压阻触觉阵列加装方案未包含在arXiv:2610.39385 v1正式论文与AfterQuery-Research/umi-live主仓库README中，尚无视觉-触觉策略融合消融或公开代码规范。（关联：[《从零件组装、数据采集到模型训练，UMI-Live全流程开源｜可加装触觉》](../../blogs/%E4%BB%8E%E9%9B%B6%E4%BB%B6%E7%BB%84%E8%A3%85%E3%80%81%E6%95%B0%E6%8D%AE%E9%87%87%E9%9B%86%E5%88%B0%E6%A8%A1%E5%9E%8B%E8%AE%AD%E7%BB%83%EF%BC%8CUMI-Live%E5%85%A8%E6%B5%81%E7%A8%8B%E5%BC%80%E6%BA%90%EF%BD%9C%E5%8F%AF%E5%8A%A0%E8%A3%85%E8%A7%A6%E8%A7%89.md)）
- `pending_verification`：arXiv原文第6节局限部分明示：真机VLA评测仅覆盖单一任务(把6个橙子放入碗中)、每条件仅10次试验且仅用1个随机种子；所有成功组均混合5%-25%的UMI-Teleop遥操作示范，完全缺乏纯UMI(100%/0%)与纯遥操作对照消融。（关联：[《从零件组装、数据采集到模型训练，UMI-Live全流程开源｜可加装触觉》](../../blogs/%E4%BB%8E%E9%9B%B6%E4%BB%B6%E7%BB%84%E8%A3%85%E3%80%81%E6%95%B0%E6%8D%AE%E9%87%87%E9%9B%86%E5%88%B0%E6%A8%A1%E5%9E%8B%E8%AE%AD%E7%BB%83%EF%BC%8CUMI-Live%E5%85%A8%E6%B5%81%E7%A8%8B%E5%BC%80%E6%BA%90%EF%BD%9C%E5%8F%AF%E5%8A%A0%E8%A3%85%E8%A7%A6%E8%A7%89.md)）

- [《从零件组装、数据采集到模型训练，UMI-Live全流程开源｜可加装触觉》](../../blogs/%E4%BB%8E%E9%9B%B6%E4%BB%B6%E7%BB%84%E8%A3%85%E3%80%81%E6%95%B0%E6%8D%AE%E9%87%87%E9%9B%86%E5%88%B0%E6%A8%A1%E5%9E%8B%E8%AE%AD%E7%BB%83%EF%BC%8CUMI-Live%E5%85%A8%E6%B5%81%E7%A8%8B%E5%BC%80%E6%BA%90%EF%BD%9C%E5%8F%AF%E5%8A%A0%E8%A3%85%E8%A7%A6%E8%A7%89.md)：已完整核对arXiv:2610.39385v1正文并新抓保存项目官网+硬件组装指南(umi-live.github.io)、GitHub主仓库README(AfterQuery-Research/umi-live)与Hugging Face正式数据卡(brandonyang/umi-live-dataset)全文快照。揭示出HF合并版3,255段数据构成偏斜（折毛巾+倒水占90.8%，橙子仅298段）、action\[t\]==observation.state\[t\]接口惯例，以及微信新增第10节FlexiTac V2触觉加装目前尚未进入v1论文与GitHub主干代码的关键偏差。

## 2. 收录文章与一手材料（Ingested Articles & Primary Sources）

### [从零件组装、数据采集到模型训练，UMI-Live全流程开源｜可加装触觉](../../blogs/%E4%BB%8E%E9%9B%B6%E4%BB%B6%E7%BB%84%E8%A3%85%E3%80%81%E6%95%B0%E6%8D%AE%E9%87%87%E9%9B%86%E5%88%B0%E6%A8%A1%E5%9E%8B%E8%AE%AD%E7%BB%83%EF%BC%8CUMI-Live%E5%85%A8%E6%B5%81%E7%A8%8B%E5%BC%80%E6%BA%90%EF%BD%9C%E5%8F%AF%E5%8A%A0%E8%A3%85%E8%A7%A6%E8%A7%89.md)

2026-10-31 · 来源：UMI-Live 项目组 (AfterQuery Research / Yale / CMU / UPenn / Harvard) · 状态：有来源缺口

[单篇导读（blogs/）](../../blogs/%E4%BB%8E%E9%9B%B6%E4%BB%B6%E7%BB%84%E8%A3%85%E3%80%81%E6%95%B0%E6%8D%AE%E9%87%87%E9%9B%86%E5%88%B0%E6%A8%A1%E5%9E%8B%E8%AE%AD%E7%BB%83%EF%BC%8CUMI-Live%E5%85%A8%E6%B5%81%E7%A8%8B%E5%BC%80%E6%BA%90%EF%BD%9C%E5%8F%AF%E5%8A%A0%E8%A3%85%E8%A7%A6%E8%A7%89.md) · [微信原件](../../../../raw/9862a1bdf3e9ca8056234dc1b871ff47b704fd3411192b93cae3c655bf5ef97f) · 固定版本 `digest-material-9862a1bdf3e9ca8056234dc1b871ff47b704fd3411192b93cae3c655bf5ef97f@1`

> Amish Sethi 介绍了一套开源的双手示范采集系统 UMI-Live ：操作者手持两只夹爪，按下按钮即可同步录制动作；后台则在采集继续进行时，把已完成的示范转成可用于训练机器人的数据集。

> 为什么重要： 录下人的操作，只是机器人数据采集的第一步。视频还要与夹爪的位置、朝向和开合状态同步，才能成为训练素材。UMI-Live 把设备追踪、数据处理和格式转换接成一条流程，试图减少从“示范一次”到“拿去训练”之间的准备工作。

关联一手材料：

- GitHub - AfterQuery-Research/umi-live（AfterQuery-Research）· [原站](https://github.com/AfterQuery-Research/umi-live) · [本地原件](../../../../raw/203f0d27ff95eea2bf7e45a8e88e45465a795567d2908d7c662c066d422a940d) · 版本 `digest-material-203f0d27ff95eea2bf7e45a8e88e45465a795567d2908d7c662c066d422a940d@1`
  > The leader refuses to record unless the follower acknowledges the take. Both clients spool to their microSD cards and upload through SSH tunnels. — 原文提取
