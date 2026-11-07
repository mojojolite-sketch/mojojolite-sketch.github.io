# Weiqi Wang

[返回主体档案库](../README.md) · [返回赛道总览](../../赛道总览.md) · [单篇导读索引](../../blogs/README.md)

- **主体类别**：👤 个人与学者 (People)
- **核心定位与说明**：• 论文作者，聚焦弹性RL训练长时程智能体。 • arXiv仅证明同名署名，不合并社交账号。
- **关联账号与官方入口**：
  - **arXiv**（Weiqi Wang）：[作者索引](https://arxiv.org/search/cs?searchtype=author&query=Wang%2C+W) · 登记对象 `digest-publisher-229ec70be293f0b597e7c9b8` — • 论文作者，聚焦弹性RL训练长时程智能体。 • arXiv仅证明同名署名，不合并社交账号。

## 1. 核心研究问题与待核查争议（Questions & Open Debates）

- 当前收录材料的主张与实验指标均保持 `verification=pending`，尚未发现显式冲突；待结合后续实机部署或独立复核进一步检验。

## 2. 收录文章与一手材料（Ingested Articles & Primary Sources）

### [一次跑数小时的智能体，怎么进强化学习循环](../../blogs/%E4%B8%80%E6%AC%A1%E8%B7%91%E6%95%B0%E5%B0%8F%E6%97%B6%E7%9A%84%E6%99%BA%E8%83%BD%E4%BD%93%EF%BC%8C%E6%80%8E%E4%B9%88%E8%BF%9B%E5%BC%BA%E5%8C%96%E5%AD%A6%E4%B9%A0%E5%BE%AA%E7%8E%AF.md)

2026-10-13 · 来源：无尽前沿 Endless Frontier · 状态：已整理

[单篇导读（blogs/）](../../blogs/%E4%B8%80%E6%AC%A1%E8%B7%91%E6%95%B0%E5%B0%8F%E6%97%B6%E7%9A%84%E6%99%BA%E8%83%BD%E4%BD%93%EF%BC%8C%E6%80%8E%E4%B9%88%E8%BF%9B%E5%BC%BA%E5%8C%96%E5%AD%A6%E4%B9%A0%E5%BE%AA%E7%8E%AF.md) · [微信原件](../../../../raw/3731e8debd0d6aed7a1926fd4d989ea07cab8216d07f2cd84442d15e1845e575) · 固定版本 `digest-material-3731e8debd0d6aed7a1926fd4d989ea07cab8216d07f2cd84442d15e1845e575@1`

> 通义实验室上周发布了 RL 训练框架 QwenGyre的论文（arXiv 2609.33848），要解决的问题一句话可以说清，当智能体任务的每一次执行要跑数小时、产生百万级 token 时，现有的强化学习训练框架就不够用了。

> 这篇论文值得深读，因为它是国内团队第一次把「超长程智能体任务」（xLong-horizon）作为RL 训练的一等公民来系统性处理。智能体跑几个小时的任务怎么进训练循环、分支轨迹怎么计损失、超时任务的部分成果算不算有效样本。这些问题的答案直接决定了智能体能力还能不能继续涨。

关联一手材料：

- **\[2609.33848\] QwenGyre: An Elastic Reinforcement Learning Framework for Training xLong-Horizon Agents**（QwenGyre authors）· [原站](https://arxiv.org/abs/2609.33848) · [NotebookLM](https://notebook.google.com/notebook/d14c426f-cce0-46a7-aa8e-efbe2ba1f98f) · [Drive](https://drive.google.com/file/d/1pyudhmV2xUAkUmyEFwjOEXRODbc_1p9Y/view?usp=drivesdk) · 版本 `digest-material-7e6e7f9d86729bf8b3f82b7c1b27225f0bd04ce9ab5c7c2eee0834262c8f5d9b@3`
  > Large language model (LLM) agents increasingly undertake eXtreme-long (XLong) horizon tasks, where a single execution can span hours, hundreds of model–environment interactions, and nearly 1M tokens per rollout. — PDF p.1
