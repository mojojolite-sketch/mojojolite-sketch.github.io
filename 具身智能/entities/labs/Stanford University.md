# Stanford University

[返回主体档案库](../README.md) · [返回赛道总览](../../赛道总览.md) · [单篇导读索引](../../blogs/README.md)

- 主体类别：🏛️ 实验室、高校与机构平台 (Labs & Institutions)
- 核心定位与说明：论文署名所属第一研究机构（Stanford University）。
- 关联账号与官方入口：
  - Official（Stanford University）：[机构／作者主页](https://www.stanford.edu/) · 登记对象 `digest-publisher-eccb970ba1ac5bfc9cf07d2a` — 论文署名所属第一研究机构（Stanford University）。

## 1. 核心研究问题与待核查争议（Questions & Open Debates）

### 🔍 待核查缺口与证据边界（Open Gaps）

- `unavailable`：原课程授课讲师、所属高校课程编号及英文原版 PPT / 课堂录音 URL 未在微信转载稿（human five）中披露，公网检索亦未定位到可直采的原始课程页面；文中提到的 GPT-5 / GPT-5.4 多机器人协作演示与 PPT 中 Gemini Robotics 2 作为 Planner 的案例缺完整课程视频与实验配置日志。（关联：[《Robot Policies：从 Imitation Learning 到 Token VLA》](../../blogs/Robot%20Policies%EF%BC%9A%E4%BB%8E%20Imitation%20Learning%20%E5%88%B0%20Token%20VLA.md)）
- `not_disclosed`：微信正文多处以定性示例替代原始论文量化基准（如未披露 ACT 实际动作块长 K=100、OpenVLA-OFT 在 LIBERO 76.5% 至 97.1% 与 26 倍吞吐提升、FAST 5 倍训练加速与 10k 小时扩展曲线），且原稿因 HTML 转写丢失全部行内 LaTeX 公式。（关联：[《Robot Policies：从 Imitation Learning 到 Token VLA》](../../blogs/Robot%20Policies%EF%BC%9A%E4%BB%8E%20Imitation%20Learning%20%E5%88%B0%20Token%20VLA.md)）
- `pending_verification`：closed-loop pass@k、coverage–reliability tradeoff、JointAug 联合生成增强、OGPO/DICE-RL 后训练对比及真机 Push-T（62%/95% vs 52%/75%）均为论文作者实验室报告结果，尚待外部团队独立复现并在多任务长程灵巧操作（含力触觉模态）上验证。（关联：[《斯坦福宋舒然团队提出机器人预训练评估新指标：用动作误差分布选模型｜只看验证损失，可能错过更好的微调起点》](../../blogs/%E6%96%AF%E5%9D%A6%E7%A6%8F%E5%AE%8B%E8%88%92%E7%84%B6%E5%9B%A2%E9%98%9F%E6%8F%90%E5%87%BA%E6%9C%BA%E5%99%A8%E4%BA%BA%E9%A2%84%E8%AE%AD%E7%BB%83%E8%AF%84%E4%BC%B0%E6%96%B0%E6%8C%87%E6%A0%87%EF%BC%9A%E7%94%A8%E5%8A%A8%E4%BD%9C%E8%AF%AF%E5%B7%AE%E5%88%86%E5%B8%83%E9%80%89%E6%A8%A1%E5%9E%8B%EF%BD%9C%E5%8F%AA%E7%9C%8B%E9%AA%8C%E8%AF%81%E6%8D%9F%E5%A4%B1%EF%BC%8C%E5%8F%AF%E8%83%BD%E9%94%99%E8%BF%87%E6%9B%B4%E5%A5%BD%E7%9A%84%E5%BE%AE%E8%B0%83%E8%B5%B7%E7%82%B9.md)）
- `not_disclosed`：Google DeepMind 与 Stanford University 未在 arXiv:2403.01823v2 或项目主页 rt-hierarchy.github.io 开源 RT-H（PaLI-X 55B）模型权重、30K Diverse 扩充示范数据集及 9 维本体动作自动标签脚本。 [线索](https://rt-hierarchy.github.io/)（关联：[《RT-H: Action Hierarchies Using Language》](../../blogs/RT-H_%20Action%20Hierarchies%20Using%20Language.md)）
- `pending_verification`：RT-H 的 Diverse+Kitchen 真机评测仅在单一移动机械臂本体上对 8 项任务各测 10 局（每方法共 80 局），且动作仍为 256 桶离散末端增量、无触力觉闭环或长程记忆状态；其在高频接触装配与跨本体迁移上的上限相比当代 2026 WAM（GR00T 2）与 MEM（π0.7）已显落伍。 [线索](https://arxiv.org/html/2403.01823v2)（关联：[《RT-H: Action Hierarchies Using Language》](../../blogs/RT-H_%20Action%20Hierarchies%20Using%20Language.md)）

- [《Robot Policies：从 Imitation Learning 到 Token VLA》](../../blogs/Robot%20Policies%EF%BC%9A%E4%BB%8E%20Imitation%20Learning%20%E5%88%B0%20Token%20VLA.md)：触发线索为微信公众号 human five 于 2026-11-24 发布的《Robot Policies：从 Imitation Learning 到 Token VLA》（未披露原英文课程编号、讲师及原始 PPT/录音链接，且因微信 HTML 转写丢失行内 LaTeX 数学符号）。本工作台穿透核查并归档讲授脉络中 8 篇一手核心论文（ACT arXiv:2304.13705、DAgger arXiv:1011.0686、HG-DAgger arXiv:1810.02890、AMP arXiv:2104.02180、RT-2 arXiv:2307.15818、FAST arXiv:2501.09747、OpenVLA-OFT arXiv:2502.19645、MolmoAct arXiv:2508.07917），为各发布机构与代码仓补齐主页级 publisher\_accounts，补全缺失数学公式并联动站内 VLA 简史、RT-H、π0.5、MDP 五步闭环与 VLA 内部物理表征等已有导读；未公开的原始课堂录音/PPT 及定性省略的超参实验表保留规范缺口。
- [《斯坦福宋舒然团队提出机器人预训练评估新指标：用动作误差分布选模型｜只看验证损失，可能错过更好的微调起点》](../../blogs/%E6%96%AF%E5%9D%A6%E7%A6%8F%E5%AE%8B%E8%88%92%E7%84%B6%E5%9B%A2%E9%98%9F%E6%8F%90%E5%87%BA%E6%9C%BA%E5%99%A8%E4%BA%BA%E9%A2%84%E8%AE%AD%E7%BB%83%E8%AF%84%E4%BC%B0%E6%96%B0%E6%8C%87%E6%A0%87%EF%BC%9A%E7%94%A8%E5%8A%A8%E4%BD%9C%E8%AF%AF%E5%B7%AE%E5%88%86%E5%B8%83%E9%80%89%E6%A8%A1%E5%9E%8B%EF%BD%9C%E5%8F%AA%E7%9C%8B%E9%AA%8C%E8%AF%81%E6%8D%9F%E5%A4%B1%EF%BC%8C%E5%8F%AF%E8%83%BD%E9%94%99%E8%BF%87%E6%9B%B4%E5%A5%BD%E7%9A%84%E5%BE%AE%E8%B0%83%E8%B5%B7%E7%82%B9.md)：确认 PDF 第 18 页所列 arXiv:2512.16911 为参考文献 PostBC（Wagenmaker 等）而非本篇，已归档并通读正确一手论文 arXiv:2611.01565（148,596 字符全文本）及项目页 zhanyisun.github.io/robot-policy-learning-dynamics/、代码仓 real-stanford/policy-learning-dynamics；核对作者单位为 Stanford University（Zhanyi Sun, Shuran Song）与 Carnegie Mellon University（Max Simchowitz）；论文各项仿真实测与真机 Push-T 指标保持作者实验室口径待独立复核。
- [《RT-H: Action Hierarchies Using Language》](../../blogs/RT-H_%20Action%20Hierarchies%20Using%20Language.md)：已通过 ingest.fetch 抓回 arXiv:2403.01823v2 HTML 全文（100,244 字符）及 PDF 首页（23 页）、官方项目主页 rt-hierarchy.github.io（10,616 字符）完成全量穿透核查：确认作者为 Google DeepMind Robotics（Tianli Ding, Ted Xiao, Pierre Sermanet, Quan Vuong, Jonathan Tompson, Yevgen Chebotar, Debidatta Dwibedi）与 Stanford University（Suneel Belkhale, Dorsa Sadigh）；拆解了双查询语言动作层 π\_h/π\_l、9 维本体自动标注（2,500+ 词表）、异步推理缓存、Diverse+Kitchen 100K 真机量化提升（40% vs RT-2 25%）、30 条语言纠偏跃升至 63%（vs RT-2-IWR 13%）及对比 GR00T 2 / π0.7 MEM / MAWAM 的四大当代局限；未开源 55B 权重与 D+K 数据集保留规范缺口。

## 2. 收录文章与一手材料（Ingested Articles & Primary Sources）

### [Robot Policies：从 Imitation Learning 到 Token VLA](../../blogs/Robot%20Policies%EF%BC%9A%E4%BB%8E%20Imitation%20Learning%20%E5%88%B0%20Token%20VLA.md)

2026-11-24 · 来源：human five（Physical AI 课程实录整理 · 穿透 ACT / DAgger / RT-2 / FAST / OpenVLA-OFT / MolmoAct 八篇原论文） · 状态：有来源缺口

[单篇导读（blogs/）](../../blogs/Robot%20Policies%EF%BC%9A%E4%BB%8E%20Imitation%20Learning%20%E5%88%B0%20Token%20VLA.md) · [微信原件](../../../../raw/67f2fa935195a16e5c94011ab4725501f78d42d6438377a308a1e67019492a70) · 固定版本 `digest-material-67f2fa935195a16e5c94011ab4725501f78d42d6438377a308a1e67019492a70@1`

> 今天我想介绍一下 Physical AI，主要讨论如何将你们已经学过的 Vision-Language Model（VLM）、Reinforcement Learning（RL）等技术与机器人结合起来，以及这些技术究竟是如何控制机器人的。

> Policy 输出目标 Action 的频率，通常远低于底层 Controller 实际运行的频率。

关联一手材料：

- Learning Fine-Grained Bimanual Manipulation with Low-Cost Hardware (ACT)（Stanford University）· [原站](https://arxiv.org/abs/2304.13705) · [本地原件](../../../../raw/9b4e085b591222103d922dfb190ed44500c740b7f7801a422394aea47dcedac8) · 版本 `digest-material-9b4e085b591222103d922dfb190ed44500c740b7f7801a422394aea47dcedac8@1`
  > Abstract:Fine manipulation tasks, such as threading cable ties or slotting a battery, are notoriously difficult for robots because they require precision, careful coordination of contact forces, and closed-loop visual feedback. — 原文提取
- HG-DAgger: Interactive Imitation Learning with Human Experts（Stanford University）· [原站](https://arxiv.org/abs/1810.02890) · [本地原件](../../../../raw/17f98f3392f2e3c7e00653411c50737188cccb1e9c92f81e9c63c95b34c41401) · 版本 `digest-material-17f98f3392f2e3c7e00653411c50737188cccb1e9c92f81e9c63c95b34c41401@1`
  > Abstract:Imitation learning has proven to be useful for many real-world problems, but approaches such as behavioral cloning suffer from data mismatch and compounding error issues. — 原文提取
- Fine-Tuning Vision-Language-Action Models: Optimizing Speed and Success (OpenVLA-OFT)（Stanford University）· [原站](https://arxiv.org/abs/2502.19645) · [本地原件](../../../../raw/4891d285a1d9c03837cf6d14cd08fa3bfc41bcceb89cf1d25b0800265d8febdb) · 版本 `digest-material-4891d285a1d9c03837cf6d14cd08fa3bfc41bcceb89cf1d25b0800265d8febdb@1`
  > Abstract:Recent vision-language-action models (VLAs) build upon pretrained vision-language models and leverage diverse robot datasets to demonstrate strong task execution, language following ability, and semantic generalization. — 原文提取

### [斯坦福宋舒然团队提出机器人预训练评估新指标：用动作误差分布选模型｜只看验证损失，可能错过更好的微调起点](../../blogs/%E6%96%AF%E5%9D%A6%E7%A6%8F%E5%AE%8B%E8%88%92%E7%84%B6%E5%9B%A2%E9%98%9F%E6%8F%90%E5%87%BA%E6%9C%BA%E5%99%A8%E4%BA%BA%E9%A2%84%E8%AE%AD%E7%BB%83%E8%AF%84%E4%BC%B0%E6%96%B0%E6%8C%87%E6%A0%87%EF%BC%9A%E7%94%A8%E5%8A%A8%E4%BD%9C%E8%AF%AF%E5%B7%AE%E5%88%86%E5%B8%83%E9%80%89%E6%A8%A1%E5%9E%8B%EF%BD%9C%E5%8F%AA%E7%9C%8B%E9%AA%8C%E8%AF%81%E6%8D%9F%E5%A4%B1%EF%BC%8C%E5%8F%AF%E8%83%BD%E9%94%99%E8%BF%87%E6%9B%B4%E5%A5%BD%E7%9A%84%E5%BE%AE%E8%B0%83%E8%B5%B7%E7%82%B9.md)

2026-11-04 · 来源：Stanford REAL Lab · CMU (arXiv:2611.01565) · 状态：有来源缺口

[单篇导读（blogs/）](../../blogs/%E6%96%AF%E5%9D%A6%E7%A6%8F%E5%AE%8B%E8%88%92%E7%84%B6%E5%9B%A2%E9%98%9F%E6%8F%90%E5%87%BA%E6%9C%BA%E5%99%A8%E4%BA%BA%E9%A2%84%E8%AE%AD%E7%BB%83%E8%AF%84%E4%BC%B0%E6%96%B0%E6%8C%87%E6%A0%87%EF%BC%9A%E7%94%A8%E5%8A%A8%E4%BD%9C%E8%AF%AF%E5%B7%AE%E5%88%86%E5%B8%83%E9%80%89%E6%A8%A1%E5%9E%8B%EF%BD%9C%E5%8F%AA%E7%9C%8B%E9%AA%8C%E8%AF%81%E6%8D%9F%E5%A4%B1%EF%BC%8C%E5%8F%AF%E8%83%BD%E9%94%99%E8%BF%87%E6%9B%B4%E5%A5%BD%E7%9A%84%E5%BE%AE%E8%B0%83%E8%B5%B7%E7%82%B9.md) · [微信原件](../../../../raw/e3e9faee5c86f07939d2715d0e8f13c5cd54c0620274e4fc2c8784292f40c66c) · 固定版本 `digest-material-e3e9faee5c86f07939d2715d0e8f13c5cd54c0620274e4fc2c8784292f40c66c@1`

> 斯坦福大学宋舒然（Shuran Song）团队与卡内基梅隆大学的研究者发现，只看验证损失，可能选错机器人预训练模型。在同一批示范数据上继续训练，机器人可能在原本擅长的场景里做得更稳，平均成功率随之提高，却在一些原本偶尔能做成的困难场景里越来越难成功。团队据此提出一种离线评估指标，用验证集上的动作误差分布，选出既能稳定完成任务、又能应对更多起始条件的模型，作为后续微调的起点。

> 下，多次独立尝试仍有成功机会”。实验中，平均成功率相近的模型，覆盖率更高者往往能取得更好的后训练结果。选择预训练模型时，需要同时考虑它当下的表现，以及它为下一阶段学习保留了多少成功的可能性。

关联一手材料：

- Beyond Validation Loss: Coverage and Reliability Dynamics in Robot Policy Pretraining（Zhanyi Sun, Max Simchowitz, Shuran Song / arXiv）· [原站](https://arxiv.org/abs/2611.01565) · [NotebookLM](https://notebook.google.com/notebook/33f0076b-fc09-42cc-9cd9-fecfb847ce1c) · [Drive](https://drive.google.com/file/d/1CnRGrR-B-n-gvQRVcD3_TrwRCrJapoAi/view?usp=drivesdk) · 版本 `digest-material-0ba5bd855fb0f3443a271b4d8cffc02d071f3c210c5541a767386b75cfb1904a@1`
  > In modern robot learning, generative robot policies are first pretrained through su- pervised learning from demonstrations, then refined through reinforcement learn- ing, supervised finetuning, or other forms of posttraining. — PDF p.1

### [RT-H: Action Hierarchies Using Language](../../blogs/RT-H_%20Action%20Hierarchies%20Using%20Language.md)

2024-03-04 · 来源：Google DeepMind · Stanford University (arXiv:2403.01823v2) · 状态：有来源缺口

[单篇导读（blogs/）](../../blogs/RT-H_%20Action%20Hierarchies%20Using%20Language.md) · [微信原件](../../../../raw/84a5425857072cb7c09545b1a2716d8e3bb67d092b715e8c0132d1e0af551fcc) · 固定版本 `digest-material-84a5425857072cb7c09545b1a2716d8e3bb67d092b715e8c0132d1e0af551fcc@1`

> To bridge tasks and actions, our insight is to teach the robot the language of actions, describing low-level motions with more fine-grained phrases like "move arm forward". Predicting these language motions as an intermediate step between tasks and actions forces the policy to learn the shared structure of low-level motions across seemingly disparate tasks.

> Our method RT-H builds an action hierarchy using language motions: it first learns to predict language motions, and conditioned on this and the high-level task, it predicts actions, using visual context at all stages. We show that RT-H leverages this language-action hierarchy to learn policies that are more robust and flexible by effectively tapping into multi-task datasets.

关联一手材料：

- RT-H: Action Hierarchies Using Language (arXiv:2403.01823v2 Full Paper)（Google DeepMind · Stanford University）· [原站](https://arxiv.org/abs/2403.01823v2) · [本地原件](../../../../raw/9036d9d1ef8a1e9c9ccc692e65da0fec5818c832400e5081b4f61f3ae9da1e5a) · 版本 `digest-material-9036d9d1ef8a1e9c9ccc692e65da0fec5818c832400e5081b4f61f3ae9da1e5a@1`
  > Language provides a way to break down complex concepts into digestible pieces. — 原文提取


## 3. 关联实体网络（Verified Entity Ontology）

- ← Stanford CS146S · 任职 / 隶属（decision1_verified/verified）
- ← [Goodfire AI](../companies/Goodfire%20AI.md) · 联合发表 VLA 神经几何与因果干预研究 [2026-10-16..至今]（rule_verified/verified）
- → Amazon FAR · 合作 / 联合研发 · FPO++（rule_verified/verified）
- ← [Shuran Song](../people/Shuran%20Song.md) · 任职 / 隶属 · Associate Professor（rule_verified/verified）
- ← Suhas Kotha · 任职 / 隶属 · Researcher（rule_verified/verified）
- ← Dorsa Sadigh · 任职 / 隶属（rule_verified/verified）
- ← Princeton University · 合作 / 联合研发 · Rewriting Scaling Laws (arXiv:2610.31867)（rule_verified/verified）
- ← [Fei-Fei Li（李飞飞）](../people/%E6%9D%8E%E9%A3%9E%E9%A3%9E%20%28Fei-Fei%20Li%29.md) · 任职 / 隶属 · Faculty / Co-author（rule_verified/verified）
- ← Ahmed Ahmed · 任职 / 隶属 · Co-first author（rule_verified/verified）
- ← Percy Liang · 任职 / 隶属 · Professor（rule_verified/verified）
- ← [Zhanyi Sun](../people/Zhanyi%20Sun.md) · 任职 / 隶属 · PhD Student（rule_verified/verified）
- → [Carnegie Mellon University (CMU)](../labs/Carnegie%20Mellon%20University%20%28CMU%29.md) · 合作 / 联合研发 · Beyond Validation Loss (arXiv:2611.01565) · joint\_research（rule_verified/verified）
- ← [Ruohan Gao](../people/Ruohan%20Gao.md) · 任职 / 隶属（曾任） [已离任/曾任]（rule_verified/verified）
- ← [Google Research](../labs/Google%20Research.md) · 合作 / 联合研发（rule_verified/verified）
- ← Suneel Belkhale · 任职 / 隶属（rule_verified/verified）
- → Jane Street · 合作 / 联合研发 · Rewriting Scaling Laws (arXiv:2610.31867)（rule_verified/verified）
- ← [NVIDIA GEAR Lab](../labs/NVIDIA%20GEAR%20Lab.md) · 合作 / 联合研发 · RoboTTT（rule_verified/verified）
- ← [Scale AI Labs](../companies/Scale%20AI%20Labs.md) · 合作 / 联合研发 · CliniCARE-Bench（rule_verified/verified）
