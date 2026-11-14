# Joey Hejna

[返回主体档案库](../README.md) · [返回赛道总览](../../赛道总览.md) · [单篇导读索引](../../blogs/README.md)

- 主体类别：👤 个人与学者 (People)
- 核心定位与说明：• 斯坦福大学ILIAD实验室博士研究员（导师Dorsa Sadigh）。 • Re-Mix第一作者、Octo核心贡献者，专注于大规模机器人模仿学习数据配比优化与偏好强化学习（CPL）。
- 关联账号与官方入口：
  - 个人学术主页（Joey Hejna）：[机构／作者主页](https://jhejna.github.io/) · 登记对象 `digest-publisher-f2945a462a53f668b37cf3e7` — • 斯坦福大学ILIAD实验室博士研究员（导师Dorsa Sadigh）。 • Re-Mix第一作者、Octo核心贡献者，专注于大规模机器人模仿学习数据配比优化与偏好强化学习（CPL）。

## 1. 核心研究问题与待核查争议（Questions & Open Debates）

### 💬 追问与核查：《不靠堆砌数据，让机器人看懂真实物理世界 | 招商局狮子山人工智能实验室发布「…》

- 已有研究表明，在既有机器人数据集内，仅调整不同数据域的训练权重，就能明显影响下游任务表现。围绕模型需要掌握的能力做正向设计，再依靠评测发现短板，闭环迭代优化数据。听起来有点太理想了，是真的吗？

关联文章：[《不靠堆砌数据，让机器人看懂真实物理世界 | 招商局狮子山人工智能实验室发布「驭物™ Lion-ER-35B-A3B」具身推理模型》](../../blogs/%E4%B8%8D%E9%9D%A0%E5%A0%86%E7%A0%8C%E6%95%B0%E6%8D%AE%EF%BC%8C%E8%AE%A9%E6%9C%BA%E5%99%A8%E4%BA%BA%E7%9C%8B%E6%87%82%E7%9C%9F%E5%AE%9E%E7%89%A9%E7%90%86%E4%B8%96%E7%95%8C%20_%20%E6%8B%9B%E5%95%86%E5%B1%80%E7%8B%AE%E5%AD%90%E5%B1%B1%E4%BA%BA%E5%B7%A5%E6%99%BA%E8%83%BD%E5%AE%9E%E9%AA%8C%E5%AE%A4%E5%8F%91%E5%B8%83%E3%80%8C%E9%A9%AD%E7%89%A9%E2%84%A2%20Lion-ER-35B-A3B%E3%80%8D%E5%85%B7%E8%BA%AB%E6%8E%A8%E7%90%86%E6%A8%A1%E5%9E%8B.md)

> 追查结论摘要：前半句（「在既有机器人数据集内，仅调整不同数据域的训练权重，就能明显影响下游任务表现」）——100% 是真的！ 斯坦福 Dorsa Sadigh 团队的 Re-Mix (arXiv:2408.14037)、UC Berkeley 的 Octo (arXiv:2405.12213) 与 OpenVLA (arXiv:2406.09246) 均有硬核真机实证：在不增加一条新轨迹的前提下，仅靠重调不同子数据集的采样权重，真机操作成功率就能拉开 +23% 至 +40% 的巨大差距。

### 🔍 待核查缺口与证据边界（Open Gaps）

- `not_disclosed`：「驭物™ Lion-ER-35B-A3B」目前仅开源披露了离线具身视觉语言问答与空间点选基准成绩（10 项基准等权 avg@4 均分 65.29），尚未披露任何将该模型接入真实机器人底层控制器（如 VLA 或扩散策略小脑）后的真机闭环物理操作成功率、推理控制频率及长程失败恢复实测数据。（关联：[《不靠堆砌数据，让机器人看懂真实物理世界 | 招商局狮子山人工智能实验室发布「驭物™ Lion-ER-35B-A3B」具身推理模型》](../../blogs/%E4%B8%8D%E9%9D%A0%E5%A0%86%E7%A0%8C%E6%95%B0%E6%8D%AE%EF%BC%8C%E8%AE%A9%E6%9C%BA%E5%99%A8%E4%BA%BA%E7%9C%8B%E6%87%82%E7%9C%9F%E5%AE%9E%E7%89%A9%E7%90%86%E4%B8%96%E7%95%8C%20_%20%E6%8B%9B%E5%95%86%E5%B1%80%E7%8B%AE%E5%AD%90%E5%B1%B1%E4%BA%BA%E5%B7%A5%E6%99%BA%E8%83%BD%E5%AE%9E%E9%AA%8C%E5%AE%A4%E5%8F%91%E5%B8%83%E3%80%8C%E9%A9%AD%E7%89%A9%E2%84%A2%20Lion-ER-35B-A3B%E3%80%8D%E5%85%B7%E8%BA%AB%E6%8E%A8%E7%90%86%E6%A8%A1%E5%9E%8B.md)）
- `unavailable`：狮子山人工智能实验室构建的 312,380 条监督训练样本集本体、8 大一级领域 39 项二级能力的完整「能力编译」细则文档，以及除 Where2Place（64.28）、ERQA（64.38）、SAT（89.33）之外其余 7 项公开评测基准的逐项对比分值表，目前尚未在 Hugging Face 仓库中完整公开。（关联：[《不靠堆砌数据，让机器人看懂真实物理世界 | 招商局狮子山人工智能实验室发布「驭物™ Lion-ER-35B-A3B」具身推理模型》](../../blogs/%E4%B8%8D%E9%9D%A0%E5%A0%86%E7%A0%8C%E6%95%B0%E6%8D%AE%EF%BC%8C%E8%AE%A9%E6%9C%BA%E5%99%A8%E4%BA%BA%E7%9C%8B%E6%87%82%E7%9C%9F%E5%AE%9E%E7%89%A9%E7%90%86%E4%B8%96%E7%95%8C%20_%20%E6%8B%9B%E5%95%86%E5%B1%80%E7%8B%AE%E5%AD%90%E5%B1%B1%E4%BA%BA%E5%B7%A5%E6%99%BA%E8%83%BD%E5%AE%9E%E9%AA%8C%E5%AE%A4%E5%8F%91%E5%B8%83%E3%80%8C%E9%A9%AD%E7%89%A9%E2%84%A2%20Lion-ER-35B-A3B%E3%80%8D%E5%85%B7%E8%BA%AB%E6%8E%A8%E7%90%86%E6%A8%A1%E5%9E%8B.md)）

- [《不靠堆砌数据，让机器人看懂真实物理世界 | 招商局狮子山人工智能实验室发布「驭物™ Lion-ER-35B-A3B」具身推理模型》](../../blogs/%E4%B8%8D%E9%9D%A0%E5%A0%86%E7%A0%8C%E6%95%B0%E6%8D%AE%EF%BC%8C%E8%AE%A9%E6%9C%BA%E5%99%A8%E4%BA%BA%E7%9C%8B%E6%87%82%E7%9C%9F%E5%AE%9E%E7%89%A9%E7%90%86%E4%B8%96%E7%95%8C%20_%20%E6%8B%9B%E5%95%86%E5%B1%80%E7%8B%AE%E5%AD%90%E5%B1%B1%E4%BA%BA%E5%B7%A5%E6%99%BA%E8%83%BD%E5%AE%9E%E9%AA%8C%E5%AE%A4%E5%8F%91%E5%B8%83%E3%80%8C%E9%A9%AD%E7%89%A9%E2%84%A2%20Lion-ER-35B-A3B%E3%80%8D%E5%85%B7%E8%BA%AB%E6%8E%A8%E7%90%86%E6%A8%A1%E5%9E%8B.md)：完成招商局狮子山人工智能实验室「驭物™ Lion-ER-35B-A3B」具身推理模型一手信源归档与用户核心方法论追问深度复核：（1）核实 Hugging Face 开源仓库 cmriat/lion-ER-35B-A3B（基于 Qwen3.6-35B-A3B 的 MoE 架构，35B 总参数/3B 激活参数，312,380 条精选样本，10 项具身推理基准等权均分 65.29）；（2）追溯并核实文中“仅调整不同数据域训练权重即可明显影响下游表现”的三大一手学术实证——Stanford ILIAD 团队 Re-Mix（arXiv:2408.14037，Group DRO 重调 OXE/Bridge 权重提升真机成功率 +38%–40%，25% 裁剪数据下达 82.5% vs 均匀权重 37.5%）、Octo（arXiv:2405.12213，25 数据集加权 83% vs RT-X 混合 60%）与 OpenVLA（arXiv:2406.09246，训练后 1/3 阶段动态砍掉 10% DROID 权重以消除负迁移）；（3）从第一性原理拆解为什么“正向设计能力→评测找短板→闭环补数据”在离线视觉问答（System 2 VQA，即 Lion-ER-35B-A3B 的真实身份）中可行（面向 Benchmark 的错题本配比工程），但在真机闭环控制（System 1 VLA）中面临离线评测失真与归因黑盒、零支撑集天花板（0×w=0，如 Octo Table VII 新物理技能成功率仅 5%）及 3B 激活参数下的能力跷跷板三道刚性边界。

## 2. 收录文章与一手材料（Ingested Articles & Primary Sources）

### [不靠堆砌数据，让机器人看懂真实物理世界 | 招商局狮子山人工智能实验室发布「驭物™ Lion-ER-35B-A3B」具身推理模型](../../blogs/%E4%B8%8D%E9%9D%A0%E5%A0%86%E7%A0%8C%E6%95%B0%E6%8D%AE%EF%BC%8C%E8%AE%A9%E6%9C%BA%E5%99%A8%E4%BA%BA%E7%9C%8B%E6%87%82%E7%9C%9F%E5%AE%9E%E7%89%A9%E7%90%86%E4%B8%96%E7%95%8C%20_%20%E6%8B%9B%E5%95%86%E5%B1%80%E7%8B%AE%E5%AD%90%E5%B1%B1%E4%BA%BA%E5%B7%A5%E6%99%BA%E8%83%BD%E5%AE%9E%E9%AA%8C%E5%AE%A4%E5%8F%91%E5%B8%83%E3%80%8C%E9%A9%AD%E7%89%A9%E2%84%A2%20Lion-ER-35B-A3B%E3%80%8D%E5%85%B7%E8%BA%AB%E6%8E%A8%E7%90%86%E6%A8%A1%E5%9E%8B.md)

2026-11-04 · 来源：招商局狮子山实验室 · HuggingFace Lion-ER · 状态：有来源缺口

[单篇导读（blogs/）](../../blogs/%E4%B8%8D%E9%9D%A0%E5%A0%86%E7%A0%8C%E6%95%B0%E6%8D%AE%EF%BC%8C%E8%AE%A9%E6%9C%BA%E5%99%A8%E4%BA%BA%E7%9C%8B%E6%87%82%E7%9C%9F%E5%AE%9E%E7%89%A9%E7%90%86%E4%B8%96%E7%95%8C%20_%20%E6%8B%9B%E5%95%86%E5%B1%80%E7%8B%AE%E5%AD%90%E5%B1%B1%E4%BA%BA%E5%B7%A5%E6%99%BA%E8%83%BD%E5%AE%9E%E9%AA%8C%E5%AE%A4%E5%8F%91%E5%B8%83%E3%80%8C%E9%A9%AD%E7%89%A9%E2%84%A2%20Lion-ER-35B-A3B%E3%80%8D%E5%85%B7%E8%BA%AB%E6%8E%A8%E7%90%86%E6%A8%A1%E5%9E%8B.md) · [微信原件](../../../../raw/37c78e5bb251da44a5c5206d08753f6d0d21e6c6e7f1ffd8d8ba3efd83bda85f) · 固定版本 `digest-material-37c78e5bb251da44a5c5206d08753f6d0d21e6c6e7f1ffd8d8ba3efd83bda85f@1`

> 视频画面中物体位置看上去更高，并不等同于它在真实三维空间里处于更高位置；更换拍摄角度，家具外观发生改变，但它仍是同一个物体；画面内物体发生位移，有可能是物体本身发生移动，也可能仅仅是相机镜头产生转动......

> 想要机器人可靠完成现实任务，模型不能仅仅做到“看见物体”，更要 读懂三维空间关系 、 捕捉物体状态变化 、 研判任务所处阶段 。

关联一手材料：

- Re-Mix: Optimizing Data Mixtures for Large Scale Imitation Learning (with Cross-Referenced OXE Mixture Ablations from Octo & OpenVLA)（Joey Hejna, Chethan Bhateja, Yichen Jiang, Karl Pertsch, Dorsa Sadigh / Stanford University (ILIAD Lab) & UC Berkeley）· [原站](https://arxiv.org/abs/2408.14037) · [NotebookLM](https://notebook.google.com/notebook/33f0076b-fc09-42cc-9cd9-fecfb847ce1c) · [Drive](https://drive.google.com/file/d/14GawASFIdDJO5efpQI3AvtCos6Msa9ac/view?usp=drivesdk) · 版本 `digest-material-d314cf998f457681794e647127516bd4f6a8822b42495ea32b8e53a99af9c107@1`
  > Cross-Referenced Primary Robotics & VLM Data Mixture Papers in Workbench: 1. — 原文提取
