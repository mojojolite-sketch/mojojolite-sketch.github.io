# Machenta

[返回主体档案库](../README.md) · [返回赛道总览](../../赛道总览.md) · [单篇导读索引](../../blogs/README.md)

- 主体类别：🏢 公司与产业主体 (Companies)
- 核心定位与说明：英国伦敦机器人基础模型公司（帝国理工学院 Edward Johns 与 Vitalis Vosylius 创立），主打全仿真元学习 VDA 架构与单次示范即时学习；2026-10 获 Creandum 与 USV 联合领投 \$40M 种子轮。 Machenta 官方 X (@Machenta\_) 发布账号。
- 关联账号与官方入口：
  - website（Machenta）：[机构／作者主页](https://machenta.com/) · 登记对象 `digest-publisher-2e5fbc5eebbb62645c3e507e` — 英国伦敦机器人基础模型公司（帝国理工学院 Edward Johns 与 Vitalis Vosylius 创立），主打全仿真元学习 VDA 架构与单次示范即时学习；2026-10 获 Creandum 与 USV 联合领投 \$40M 种子轮。
  - x（Machenta）：[账号主页](https://x.com/Machenta_) · 登记对象 `digest-publisher-03ba3e07635afddfa4d90068` — Machenta 官方 X (@Machenta\_) 发布账号。

## 1. 核心研究问题与待核查争议（Questions & Open Debates）

### 🔍 待核查缺口与证据边界（Open Gaps）

- `not_disclosed`：商业版 VDA 未公开网络主干架构、参数规模、控制频率（Hz）、动作空间定义，以及是否仍像前作 Instant Policy（arXiv:2411.12633）一样存在接触动力学与高精度公差限制。 [线索](https://machenta.com/blog/instant-robot-learning)（关联：[《Machenta发布即时机器人学习模型：只需一次示范，无需微调｜全仿真训练学习真实任务》](../../blogs/Machenta%E5%8F%91%E5%B8%83%E5%8D%B3%E6%97%B6%E6%9C%BA%E5%99%A8%E4%BA%BA%E5%AD%A6%E4%B9%A0%E6%A8%A1%E5%9E%8B%EF%BC%9A%E5%8F%AA%E9%9C%80%E4%B8%80%E6%AC%A1%E7%A4%BA%E8%8C%83%EF%BC%8C%E6%97%A0%E9%9C%80%E5%BE%AE%E8%B0%83%EF%BD%9C%E5%85%A8%E4%BB%BF%E7%9C%9F%E8%AE%AD%E7%BB%83%E5%AD%A6%E4%B9%A0%E7%9C%9F%E5%AE%9E%E4%BB%BB%E5%8A%A1.md)）
- `pending_verification`：28 段未剪辑演示及 1 小时自复位压力测试均由团队自测发布，尚无第三方独立基准对比（与 Rhoda AI、Generalist GEN-1.5、Skild AI S1 同台评测数据缺失）。 [线索](https://machenta.com/blog/instant-robot-learning)（关联：[《Machenta发布即时机器人学习模型：只需一次示范，无需微调｜全仿真训练学习真实任务》](../../blogs/Machenta%E5%8F%91%E5%B8%83%E5%8D%B3%E6%97%B6%E6%9C%BA%E5%99%A8%E4%BA%BA%E5%AD%A6%E4%B9%A0%E6%A8%A1%E5%9E%8B%EF%BC%9A%E5%8F%AA%E9%9C%80%E4%B8%80%E6%AC%A1%E7%A4%BA%E8%8C%83%EF%BC%8C%E6%97%A0%E9%9C%80%E5%BE%AE%E8%B0%83%EF%BD%9C%E5%85%A8%E4%BB%BF%E7%9C%9F%E8%AE%AD%E7%BB%83%E5%AD%A6%E4%B9%A0%E7%9C%9F%E5%AE%9E%E4%BB%BB%E5%8A%A1.md)）

- [《Machenta发布即时机器人学习模型：只需一次示范，无需微调｜全仿真训练学习真实任务》](../../blogs/Machenta%E5%8F%91%E5%B8%83%E5%8D%B3%E6%97%B6%E6%9C%BA%E5%99%A8%E4%BA%BA%E5%AD%A6%E4%B9%A0%E6%A8%A1%E5%9E%8B%EF%BC%9A%E5%8F%AA%E9%9C%80%E4%B8%80%E6%AC%A1%E7%A4%BA%E8%8C%83%EF%BC%8C%E6%97%A0%E9%9C%80%E5%BE%AE%E8%B0%83%EF%BD%9C%E5%85%A8%E4%BB%BF%E7%9C%9F%E8%AE%AD%E7%BB%83%E5%AD%A6%E4%B9%A0%E7%9C%9F%E5%AE%9E%E4%BB%BB%E5%8A%A1.md)：SourceMind（https://mp.weixin.qq.com/s/CPkD7U0MBilKkL6lkKIWpg）完整编译自 Machenta 首发博客 Introducing Instant Robot Learning（Machenta Blog）。已穿透核验 Machenta 团队页（machenta.com/team）、USV 投资备忘录、Creandum 投资笔记（creandum.com/stories/backing-machenta/），以及直系学术前作 Instant Policy（arXiv:2411.12633v2, ICLR 2025 Oral）与 Learning a Thousand Tasks in a Day（MT3, Science Robotics）原文，纠正转述稿中的地理错误并补全底层技术机制与工程边界核查。

## 2. 阅读笔记与原文 Highlight（Reading Highlights & Marginalia）

### 🖍️ 摘录与批注：《Machenta发布即时机器人学习模型：只需一次示范，无需微调｜全仿真训练学…》（1 条）

关联文章：[《Machenta发布即时机器人学习模型：只需一次示范，无需微调｜全仿真训练学习真实任务》](../../blogs/Machenta%E5%8F%91%E5%B8%83%E5%8D%B3%E6%97%B6%E6%9C%BA%E5%99%A8%E4%BA%BA%E5%AD%A6%E4%B9%A0%E6%A8%A1%E5%9E%8B%EF%BC%9A%E5%8F%AA%E9%9C%80%E4%B8%80%E6%AC%A1%E7%A4%BA%E8%8C%83%EF%BC%8C%E6%97%A0%E9%9C%80%E5%BE%AE%E8%B0%83%EF%BD%9C%E5%85%A8%E4%BB%BF%E7%9C%9F%E8%AE%AD%E7%BB%83%E5%AD%A6%E4%B9%A0%E7%9C%9F%E5%AE%9E%E4%BB%BB%E5%8A%A1.md)

- 这篇mechenta的工程文不错哦

> 导读核心结论：本工作台核查一手来源（Machenta Blog 原文 Introducing Instant Robot Learning、Team 页面、Creandum 投资笔记及 USV 投资备忘录）：这篇由 SourceMind 转述的发布文属于 Machenta 结束隐身期配合 \$40M 种子轮官宣的技术公关稿，立场核心是为「全仿真元学习」路线确立差异化并吸引算力/人才与客户关注（Creandum 与 USV 为本轮联合领投方，存在直接利益绑定）。


## 3. 收录文章与一手材料（Ingested Articles & Primary Sources）

### [Machenta发布即时机器人学习模型：只需一次示范，无需微调｜全仿真训练学习真实任务](../../blogs/Machenta%E5%8F%91%E5%B8%83%E5%8D%B3%E6%97%B6%E6%9C%BA%E5%99%A8%E4%BA%BA%E5%AD%A6%E4%B9%A0%E6%A8%A1%E5%9E%8B%EF%BC%9A%E5%8F%AA%E9%9C%80%E4%B8%80%E6%AC%A1%E7%A4%BA%E8%8C%83%EF%BC%8C%E6%97%A0%E9%9C%80%E5%BE%AE%E8%B0%83%EF%BD%9C%E5%85%A8%E4%BB%BF%E7%9C%9F%E8%AE%AD%E7%BB%83%E5%AD%A6%E4%B9%A0%E7%9C%9F%E5%AE%9E%E4%BB%BB%E5%8A%A1.md)

2026-10-27 · 来源：Machenta · 状态：有来源缺口

[单篇导读（blogs/）](../../blogs/Machenta%E5%8F%91%E5%B8%83%E5%8D%B3%E6%97%B6%E6%9C%BA%E5%99%A8%E4%BA%BA%E5%AD%A6%E4%B9%A0%E6%A8%A1%E5%9E%8B%EF%BC%9A%E5%8F%AA%E9%9C%80%E4%B8%80%E6%AC%A1%E7%A4%BA%E8%8C%83%EF%BC%8C%E6%97%A0%E9%9C%80%E5%BE%AE%E8%B0%83%EF%BD%9C%E5%85%A8%E4%BB%BF%E7%9C%9F%E8%AE%AD%E7%BB%83%E5%AD%A6%E4%B9%A0%E7%9C%9F%E5%AE%9E%E4%BB%BB%E5%8A%A1.md) · [微信原件](../../../../raw/92862c9a2f7a80672429208c4878de5a06c72ef76e794e61901f0a05f840f9d5) · 固定版本 `digest-material-92862c9a2f7a80672429208c4878de5a06c72ef76e794e61901f0a05f840f9d5@1`

> 刚刚，美国机器人公司 Machenta 结束隐身研发，公布全新的完全用仿真数据训练的基础模型。团队称，机器人只需接收一次任务示范，就能立即执行新任务，无需进一步微调模型。

> 为什么重要： Machenta 同时宣布完成 4000 万美元种子轮融资，由 Creandum 与 USV联合领投。这家公司瞄准的是机器人部署中反复采集数据、训练模型的时间与成本：如果换任务只需重新示范，频繁调整作业流程的自动化就有望更划算。

关联一手材料：

- Introducing Instant Robot Learning | Machenta（Machenta）· [原站](https://machenta.com/blog/instant-robot-learning) · [NotebookLM](https://notebook.google.com/notebook/cac99041-d3b9-449e-a192-12bb4b1ad391) · [Drive](https://drive.google.com/file/d/1b8Q5zc_YQQFAQDmF3FThj4mcv1ZOMWqZ/view?usp=drivesdk) · 版本 `digest-material-80508e12068285913bd81f99bd4cc99d50a141517eaf28cd88795c629747ea45@5`
  > without a single pixel of real-world training data. — 原文提取
