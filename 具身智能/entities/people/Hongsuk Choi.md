# Hongsuk Choi

[返回主体档案库](../README.md) · [返回赛道总览](../../赛道总览.md) · [单篇导读索引](../../blogs/README.md)

- 主体类别：👤 个人与学者 (People)
- 核心定位与说明：UC Berkeley 研究员、Amazon FAR 研究者；三维人体动作重建与流匹配机器人控制策略研究者，FPO++（arXiv:2602.02481）共同第一作者。
- 关联账号与官方入口：
  - arXiv Author Index（Hongsuk Choi）：[作者索引](https://arxiv.org/search/?searchtype=author&query=Choi%2C+Hongsuk) · 登记对象 `digest-publisher-463d5bd00254390d193a1821` — UC Berkeley 研究员、Amazon FAR 研究者；三维人体动作重建与流匹配机器人控制策略研究者，FPO++（arXiv:2602.02481）共同第一作者。

## 1. 核心研究问题与待核查争议（Questions & Open Debates）

### 📌 归属范围与核验边界

- [《Flow Policy Gradients for Robot Control (FPO++): Likelihood-Free Online RL for Expressive Humanoid & Manipulation Policies (CoRL 2026 Oral · arXiv:2602.02481)》](../../blogs/Flow%20Policy%20Gradients%20for%20Robot%20Control%20%28FPO%2B%2B%29_%20Likelihood-Free%20Online%20RL%20for%20Expressive%20Humanoid%20%26%20Manipulat.md)：CoRL 2026 Oral（arXiv:2602.02481，Amazon FAR × UC Berkeley × Stanford × CMU × HKU）提出 FPO++（Flow Policy Optimization），以条件流匹配（CFM）损失差值的 ELBO 代理绕开 Continuous Normalizing Flows 昂贵的 ODE 散度积分，结合分样本比率裁剪（N=8）与非对称信赖域 ASPO（负优势采用 SPO 惩罚）在保持探索熵的同时抑制多步采样策略坍缩，在欠条件人形全身追踪中将成功率由高斯 PPO 的 29.8% 提升至 54.3%，并在 Robomimic/DexMimicGen 微调与 Unitree G1 / Booster T1 10 步真机零样本迁移上超过 DPPO 与 ReinFlow。

## 2. 收录文章与一手材料（Ingested Articles & Primary Sources）

### [Flow Policy Gradients for Robot Control (FPO++): Likelihood-Free Online RL for Expressive Humanoid & Manipulation Policies (CoRL 2026 Oral · arXiv:2602.02481)](../../blogs/Flow%20Policy%20Gradients%20for%20Robot%20Control%20%28FPO%2B%2B%29_%20Likelihood-Free%20Online%20RL%20for%20Expressive%20Humanoid%20%26%20Manipulat.md)

2026-11-11 · 来源：arXiv:2602.02481 · CoRL 2026 Oral (UC Berkeley / Amazon FAR) · 状态：已整理

[单篇导读（blogs/）](../../blogs/Flow%20Policy%20Gradients%20for%20Robot%20Control%20%28FPO%2B%2B%29_%20Likelihood-Free%20Online%20RL%20for%20Expressive%20Humanoid%20%26%20Manipulat.md) · [微信原件](../../../../raw/011ae5ad5185ffad30357a307fe8d3ecd7700d214e23442b61e8de11617d7ca7) · 固定版本 `digest-material-011ae5ad5185ffad30357a307fe8d3ecd7700d214e23442b61e8de11617d7ca7@1`

> 【信源巡检核心摘要】 CoRL 2026 Oral 报告（Amazon FAR 联合 UC Berkeley、Stanford、CMU、HKU，项目与代码公开于 https://github.com/BrentYi/fpo）。

关联一手材料：

- Flow Policy Gradients for Robot Control (FPO++): Likelihood-Free Online RL for Expressive Humanoid & Manipulation Policies (CoRL 2026 Oral · arXiv:2602.02481)（CoRL 2026 Oral (Amazon FAR / UC Berkeley / Stanford / CMU)）· [原站](https://arxiv.org/abs/2602.02481) · [本地原件](../../../../raw/011ae5ad5185ffad30357a307fe8d3ecd7700d214e23442b61e8de11617d7ca7) · 版本 `digest-material-011ae5ad5185ffad30357a307fe8d3ecd7700d214e23442b61e8de11617d7ca7@1`
  > 【信源巡检核心摘要】 CoRL 2026 Oral 报告（Amazon FAR 联合 UC Berkeley、Stanford、CMU、HKU，项目与代码公开于 https://github.com/BrentYi/fpo）。 — 原文提取
