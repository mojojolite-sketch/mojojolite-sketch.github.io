# Qiayuan Liao

[返回主体档案库](../README.md) · [返回赛道总览](../../赛道总览.md) · [单篇导读索引](../../blogs/README.md)

- 主体类别：👤 个人与学者 (People)
- 核心定位与说明：UC Berkeley BAIR 核心博士研究员（SuperMimic / BeyondMimic 一作）。
- 关联账号与官方入口：
  - arXiv（Qiayuan Liao）：[作者索引](https://arxiv.org/search/?searchtype=author&query=Liao%2C+Qiayuan) · 登记对象 `digest-publisher-c9eed9779fc7753a996b9f9f` — UC Berkeley BAIR 核心博士研究员（SuperMimic / BeyondMimic 一作）。

## 1. 核心研究问题与待核查争议（Questions & Open Debates）

### 🔍 待核查缺口与证据边界（Open Gaps）

- `pending_verification`：129,514 段动作（BONES-SEED 264.56 小时）上对比 SONIC 的 0 失败（vs 179 失败）测试均为两者的训练集动作且锁定了确定性仿真环境（摩擦 1.0、无观测噪声与域随机化），仅证明动作库记忆覆盖能力而非未见动作泛化能力；另官方尚未开放可复现的完整训练代码仓与多随机种子真机连续稳定性日志。 [线索](https://arxiv.org/abs/2610.28480)（关联：[《SuperMimic（BAIR / CoRL 2026 最佳论文）：单个可微世界模型将人形全身控制算力降低超 1,000 倍》](../../blogs/SuperMimic%EF%BC%88BAIR%20_%20CoRL%202026%20%E6%9C%80%E4%BD%B3%E8%AE%BA%E6%96%87%EF%BC%89%EF%BC%9A%E5%8D%95%E4%B8%AA%E5%8F%AF%E5%BE%AE%E4%B8%96%E7%95%8C%E6%A8%A1%E5%9E%8B%E5%B0%86%E4%BA%BA%E5%BD%A2%E5%85%A8%E8%BA%AB%E6%8E%A7%E5%88%B6%E7%AE%97%E5%8A%9B%E9%99%8D%E4%BD%8E%E8%B6%85%201%2C000%20%E5%80%8D.md)）
- `unverified_claim`：实体关系入库跳过 (Qiayuan Liao --affiliated\_with--\> BAIR)：谓词 'affiliated\_with' 不允许 from 实体类型 'company'（仅允许 \['person', 'organization'\]）（关联：[《SuperMimic（BAIR / CoRL 2026 最佳论文）：单个可微世界模型将人形全身控制算力降低超 1,000 倍》](../../blogs/SuperMimic%EF%BC%88BAIR%20_%20CoRL%202026%20%E6%9C%80%E4%BD%B3%E8%AE%BA%E6%96%87%EF%BC%89%EF%BC%9A%E5%8D%95%E4%B8%AA%E5%8F%AF%E5%BE%AE%E4%B8%96%E7%95%8C%E6%A8%A1%E5%9E%8B%E5%B0%86%E4%BA%BA%E5%BD%A2%E5%85%A8%E8%BA%AB%E6%8E%A7%E5%88%B6%E7%AE%97%E5%8A%9B%E9%99%8D%E4%BD%8E%E8%B6%85%201%2C000%20%E5%80%8D.md)）
- `unverified_claim`：实体关系入库跳过 (BAIR --produces--\> SuperMimic)：谓词 'produces' 不允许 to 实体类型 'company'（仅允许 \['product'\]）（关联：[《SuperMimic（BAIR / CoRL 2026 最佳论文）：单个可微世界模型将人形全身控制算力降低超 1,000 倍》](../../blogs/SuperMimic%EF%BC%88BAIR%20_%20CoRL%202026%20%E6%9C%80%E4%BD%B3%E8%AE%BA%E6%96%87%EF%BC%89%EF%BC%9A%E5%8D%95%E4%B8%AA%E5%8F%AF%E5%BE%AE%E4%B8%96%E7%95%8C%E6%A8%A1%E5%9E%8B%E5%B0%86%E4%BA%BA%E5%BD%A2%E5%85%A8%E8%BA%AB%E6%8E%A7%E5%88%B6%E7%AE%97%E5%8A%9B%E9%99%8D%E4%BD%8E%E8%B6%85%201%2C000%20%E5%80%8D.md)）

- [《SuperMimic（BAIR / CoRL 2026 最佳论文）：单个可微世界模型将人形全身控制算力降低超 1,000 倍》](../../blogs/SuperMimic%EF%BC%88BAIR%20_%20CoRL%202026%20%E6%9C%80%E4%BD%B3%E8%AE%BA%E6%96%87%EF%BC%89%EF%BC%9A%E5%8D%95%E4%B8%AA%E5%8F%AF%E5%BE%AE%E4%B8%96%E7%95%8C%E6%A8%A1%E5%9E%8B%E5%B0%86%E4%BA%BA%E5%BD%A2%E5%85%A8%E8%BA%AB%E6%8E%A7%E5%88%B6%E7%AE%97%E5%8A%9B%E9%99%8D%E4%BD%8E%E8%B6%85%201%2C000%20%E5%80%8D.md)：已抓取并归档 SuperMimic 19 页 arXiv:2610.28480v3 论文 PDF 全文及官方项目页 supermimic.github.io；穿透核查 SONIC（128 张 L40 GPU 训练 168 小时、约 21,000 GPU-h、611 小时数据）与 SuperMimic（1 张 H100 训练 3 小时超越 0.90 归一化回报，2 张 H100 训练 9.8 小时在 129,514 段 BONES-SEED 264.56 小时动作实现 0 失败）的硬件与数据口径折算，拆解 0.007–0.011 动力学误差稳定性、\>10 倍至 62 倍想象吞吐加速与 ~64 倍步数降幅，并标注仅平地无地形物体交互、129,514 片段仅测训练集覆盖率与省略外力冲击扰动等边界。

## 2. 收录文章与一手材料（Ingested Articles & Primary Sources）

### [SuperMimic（BAIR / CoRL 2026 最佳论文）：单个可微世界模型将人形全身控制算力降低超 1,000 倍](../../blogs/SuperMimic%EF%BC%88BAIR%20_%20CoRL%202026%20%E6%9C%80%E4%BD%B3%E8%AE%BA%E6%96%87%EF%BC%89%EF%BC%9A%E5%8D%95%E4%B8%AA%E5%8F%AF%E5%BE%AE%E4%B8%96%E7%95%8C%E6%A8%A1%E5%9E%8B%E5%B0%86%E4%BA%BA%E5%BD%A2%E5%85%A8%E8%BA%AB%E6%8E%A7%E5%88%B6%E7%AE%97%E5%8A%9B%E9%99%8D%E4%BD%8E%E8%B6%85%201%2C000%20%E5%80%8D.md)

2026-10-20 · 来源：BAIR (UC Berkeley) · SuperMimic (arXiv:2610.28480) · 状态：有来源缺口

[单篇导读（blogs/）](../../blogs/SuperMimic%EF%BC%88BAIR%20_%20CoRL%202026%20%E6%9C%80%E4%BD%B3%E8%AE%BA%E6%96%87%EF%BC%89%EF%BC%9A%E5%8D%95%E4%B8%AA%E5%8F%AF%E5%BE%AE%E4%B8%96%E7%95%8C%E6%A8%A1%E5%9E%8B%E5%B0%86%E4%BA%BA%E5%BD%A2%E5%85%A8%E8%BA%AB%E6%8E%A7%E5%88%B6%E7%AE%97%E5%8A%9B%E9%99%8D%E4%BD%8E%E8%B6%85%201%2C000%20%E5%80%8D.md) · [微信原件](../../../../raw/86303046c579baa2c856313033eb30cbc922926d21f7b38de72fcc37b8d75207) · 固定版本 `digest-material-86303046c579baa2c856313033eb30cbc922926d21f7b38de72fcc37b8d75207@1`

> SuperMimic（BAIR / CoRL 2026 最佳论文）：单个可微世界模型将人形全身控制算力降低超 1,000 倍 一手发布主体：BAIR 原始链接：https://arxiv.org/abs/2610.28480 发布日期：2026-10-20 归属赛道：具身智能 【信源巡检核心摘要】 BAIR（Qiayuan Liao、Pieter Abbeel、Koushil Sreenath 等）提出基于单个可微世界模型的人形机器人全身动作跟踪框架

> Liao、Pieter Abbeel、Koushil Sreenath 等）提出基于单个可微世界模型的人形机器人全身动作跟踪框架 SuperMimic：通过对短时域想象轨迹进行时间反向传播（BPTT）获取解析梯度，仅在 1 张 GPU 上训练 3 小时即可超越需 128 张 GPU 训练 7 天的 SOTA 无模型 PPO 基线（GPU 小时算力消耗减少超 1,000 倍）；在 129,514 段动捕动作基准上经 2 张 GPU 训练 9.8 小时实现

关联一手材料：

- SuperMimic: Scaling Humanoid Whole-Body Control with One Differentiable World Model（Qiayuan Liao, Pieter Abbeel, Koushil Sreenath et al. (UC Berkeley BAIR)）· [原站](https://arxiv.org/abs/2610.28480) · [本地原件](../../../../raw/beba569fed61f92d6d54d6581c4fc0701862da6416310218f3ab26c831fd4e92) · 版本 `digest-material-beba569fed61f92d6d54d6581c4fc0701862da6416310218f3ab26c831fd4e92@1`
  > \[Page 2\] policies to track reference motion clips \[2\] drawn from large motion-capture (mocap) datasets \[1\]. — 原文提取
