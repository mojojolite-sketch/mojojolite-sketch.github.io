# Ropedia

[返回主体档案库](../README.md) · [返回赛道总览](../../赛道总览.md) · [单篇导读索引](../../blogs/README.md)

- 主体类别：🏢 公司与产业主体 (Companies)
- 核心定位与说明：托管 Ropedia-Xperience-2 开源配准代码。 托管 Xperience 2 数据集。
- 关联账号与官方入口：
  - GitHub（Ropedia）：[账号主页](https://github.com/Ropedia) · 登记对象 `digest-publisher-dda14b943cb48690ae23f555` — 托管 Ropedia-Xperience-2 开源配准代码。
  - Hugging Face（Ropedia）：[账号主页](https://huggingface.co/ropedia-ai) · 登记对象 `digest-publisher-843cff20e48c3d3853f2c329` — 托管 Xperience 2 数据集。

## 1. 核心研究问题与待核查争议（Questions & Open Debates）

### 🔍 待核查缺口与证据边界（Open Gaps）

- `not_disclosed`：Hugging Face 首期（Batch 1）仅上线 126 / 1,589 场景（约 1.07 TB）且扫描与录制文件坐标系尚未预合并，余下约 1,463 个场景上线排期、商业授权报价及基于 Xperience 2 训练真机策略的成功率增益消融均未公开。 [线索](https://huggingface.co/datasets/ropedia-ai/Ropedia-Xperience-2)（关联：[《Ropedia Xperience 2发布：下一代具身数据金标准》](../../blogs/Ropedia%20Xperience%202%E5%8F%91%E5%B8%83%EF%BC%9A%E4%B8%8B%E4%B8%80%E4%BB%A3%E5%85%B7%E8%BA%AB%E6%95%B0%E6%8D%AE%E9%87%91%E6%A0%87%E5%87%86.md)）
- `conflict`：中文官微稿件将 500 题空间推理榜首 74.2% 写作 Gemini 3.8 Flash，与英文研究主页 ropedia.com/xperience/2-research/ 明确标注的 Gemini-2.5-Pro 存在型号不一致；且已有同题英文主稿（504378c6）在库，需避免重复建档。 [线索](https://ropedia.com/xperience/2-research/)（关联：[《Ropedia Xperience 2发布：下一代具身数据金标准》](../../blogs/Ropedia%20Xperience%202%E5%8F%91%E5%B8%83%EF%BC%9A%E4%B8%8B%E4%B8%80%E4%BB%A3%E5%85%B7%E8%BA%AB%E6%95%B0%E6%8D%AE%E9%87%91%E6%A0%87%E5%87%86.md)）

- [《Ropedia Xperience 2发布：下一代具身数据金标准》](../../blogs/Ropedia%20Xperience%202%E5%8F%91%E5%B8%83%EF%BC%9A%E4%B8%8B%E4%B8%80%E4%BB%A3%E5%85%B7%E8%BA%AB%E6%95%B0%E6%8D%AE%E9%87%91%E6%A0%87%E5%87%86.md)：已穿透并实际抓回此前 arXiv 单篇入库时缺失的三大官方一手入口：ropedia.com/xperience/2-research/ 交互研究页、github.com/Ropedia/Ropedia-Xperience-2（Apache-2.0 配准 CLI）与 huggingface.co/datasets/ropedia-ai/Ropedia-Xperience-2（Batch 1 仅上线 126 场景 / 1.07 TB、CC BY-NC 4.0 协议且扫描与录制坐标系尚未在文件层合并），同时交叉核验 arXiv:2611.17060 与库内 Maxinsights / 2027 具身数据调研，暴露中文官微把 Gemini-2.5-Pro 改写为 Gemini 3.8 Flash 等口径偏差。

## 2. 收录文章与一手材料（Ingested Articles & Primary Sources）

### [Ropedia Xperience 2发布：下一代具身数据金标准](../../blogs/Ropedia%20Xperience%202%E5%8F%91%E5%B8%83%EF%BC%9A%E4%B8%8B%E4%B8%80%E4%BB%A3%E5%85%B7%E8%BA%AB%E6%95%B0%E6%8D%AE%E9%87%91%E6%A0%87%E5%87%86.md)

2026-11-13 · 来源：Ropedia Official Release · GitHub & HuggingFace (arXiv:2611.17060) · 状态：有来源缺口

[单篇导读（blogs/）](../../blogs/Ropedia%20Xperience%202%E5%8F%91%E5%B8%83%EF%BC%9A%E4%B8%8B%E4%B8%80%E4%BB%A3%E5%85%B7%E8%BA%AB%E6%95%B0%E6%8D%AE%E9%87%91%E6%A0%87%E5%87%86.md) · [微信原件](../../../../raw/4868b8ab971fb4a3f92a278744162fbb8054fb9fa2632882c21e7399d72fd0e4) · 固定版本 `digest-material-4868b8ab971fb4a3f92a278744162fbb8054fb9fa2632882c21e7399d72fd0e4@1`

> 当前发布的1,589个场景覆盖12类真实空间，其中住宅内部场景有1,389个，占87.4%；卧室和客厅合计976个，占61.4%。整体采集共覆盖596处地点，其中443处为整户住宅（地点数量采用整体采集统计，与本次发布的场景数量分别计算）。

> 表现最好的模型Boxer，AP@0.25为24.69%，AP@0.5为6.09%。真实环境中的精确定位仍然困难，也凸显了更多开放真实场景数据的需求：让训练与评测覆盖更广泛的布局、遮挡和物体差异，并为模型提供可靠的三维标注。

关联一手材料：

- Ropedia/Ropedia-Xperience-2: Scene Registration CLI & Official Repository（Ropedia (GitHub)）· [原站](https://github.com/Ropedia/Ropedia-Xperience-2) · [本地原件](../../../../raw/e7dc2e6e0eb0393fcb57b7e8876847e8678bea06cb17ca0d65de030a98050b4f) · 版本 `digest-material-e7dc2e6e0eb0393fcb57b7e8876847e8678bea06cb17ca0d65de030a98050b4f@1`
  > Align a processed HOMIE recording → KOSMO scene and export trajectories and estimated hand/body motion in the scene frame. — 原文提取
- ropedia-ai/Ropedia-Xperience-2 Hugging Face Dataset Card（ropedia-ai (Hugging Face)）· [原站](https://huggingface.co/datasets/ropedia-ai/Ropedia-Xperience-2) · [本地原件](../../../../raw/15248c96e4fc2a3773bed0213408fe4e5283a2c459e382055e6a62b97aa435f5) · 版本 `digest-material-15248c96e4fc2a3773bed0213408fe4e5283a2c459e382055e6a62b97aa435f5@1`
  > A Gold Standard for Scaling Physical AI Environments and Behaviors. 1,500+ scanned scenes and 4,000+ egocentric recordings, registered in one metric frame. — 原文提取
