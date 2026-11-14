# Harvard Kempner Institute

[返回主体档案库](../README.md) · [返回赛道总览](../../赛道总览.md) · [单篇导读索引](../../blogs/README.md)

- 主体类别：🏛️ 实验室、高校与机构平台 (Labs & Institutions)
- 核心定位与说明：哈佛大学自然与人工智能研究肯普纳研究所（Kempner Institute for the Study of Natural and Artificial Intelligence），聚焦生物神经科学与人工神经网络表征几何交叉研究。
- 关联账号与官方入口：
  - 研究机构官网（Harvard Kempner Institute）：[机构／作者主页](https://kempnerinstitute.harvard.edu/) · 登记对象 `digest-publisher-f57112806998042f398f4cb9` — 哈佛大学自然与人工智能研究肯普纳研究所（Kempner Institute for the Study of Natural and Artificial Intelligence），聚焦生物神经科学与人工神经网络表征几何交叉研究。

## 1. 核心研究问题与待核查争议（Questions & Open Debates）

### 💬 追问与核查：《【慢科研】VLA如何在内部表示物理世界？》

- 看不懂...

关联文章：[《【慢科研】VLA如何在内部表示物理世界？》](../../blogs/%E3%80%90%E6%85%A2%E7%A7%91%E7%A0%94%E3%80%91VLA%E5%A6%82%E4%BD%95%E5%9C%A8%E5%86%85%E9%83%A8%E8%A1%A8%E7%A4%BA%E7%89%A9%E7%90%86%E4%B8%96%E7%95%8C%EF%BC%9F.md)

> 追查结论摘要：具象比喻（考场学霸 vs 背题机器）：

### 🔍 待核查缺口与证据边界（Open Gaps）

- `not_disclosed`：arXiv:2610.20840主要在MolmoSpaces仿真器与离线DROID真实世界轨迹上完成了表征几何测绘与开环/仿真闭环干预，尚未披露在真实物理机械臂硬件（如Franka/UR5）上实时注入拉回引导向量（Pullback Steering）或状态信念编辑时的闭环控制频率开销、端到端抓取成功率变化及碰撞安全边界数据。（关联：[《【慢科研】VLA如何在内部表示物理世界？》](../../blogs/%E3%80%90%E6%85%A2%E7%A7%91%E7%A0%94%E3%80%91VLA%E5%A6%82%E4%BD%95%E5%9C%A8%E5%86%85%E9%83%A8%E8%A1%A8%E7%A4%BA%E7%89%A9%E7%90%86%E4%B8%96%E7%95%8C%EF%BC%9F.md)）

- [《【慢科研】VLA如何在内部表示物理世界？》](../../blogs/%E3%80%90%E6%85%A2%E7%A7%91%E7%A0%94%E3%80%91VLA%E5%A6%82%E4%BD%95%E5%9C%A8%E5%86%85%E9%83%A8%E8%A1%A8%E7%A4%BA%E7%89%A9%E7%90%86%E4%B8%96%E7%95%8C%EF%BC%9F.md)：触发线索为微信公众号「human five」2026-10-16发布的编译长文《【慢科研】VLA如何在内部表示物理世界？》，直接对应Mozes Jacobs\*（哈佛/Goodfire AI）、Aiden Swann\*（斯坦福/Goodfire AI）、Mathilde Papillon\*（UCSB/Goodfire AI）、Thomas McGrath、Matthew Kowal†、Thomas Fel†等人于2026年10月14日发表的一手论文《A Phenomenology of Neural Geometry in Vision-Language-Action Models》（arXiv:2610.20840v3）及同批发布的姊妹篇arXiv:2610.20767、arXiv:2610.20750。已完整提取论文8张核心实验图表落盘至work/views/具身智能/blogs/assets/vla\_internal\_physics\_representation/fig1.png至fig8.png，并在导读最前端提供零门槛直觉降维翻译与逐图读图指南。

## 2. 收录文章与一手材料（Ingested Articles & Primary Sources）

### [【慢科研】VLA如何在内部表示物理世界？](../../blogs/%E3%80%90%E6%85%A2%E7%A7%91%E7%A0%94%E3%80%91VLA%E5%A6%82%E4%BD%95%E5%9C%A8%E5%86%85%E9%83%A8%E8%A1%A8%E7%A4%BA%E7%89%A9%E7%90%86%E4%B8%96%E7%95%8C%EF%BC%9F.md)

2026-10-16 · 来源：arXiv:2610.20840 · Goodfire AI & Harvard/Stanford · 状态：已整理

[单篇导读（blogs/）](../../blogs/%E3%80%90%E6%85%A2%E7%A7%91%E7%A0%94%E3%80%91VLA%E5%A6%82%E4%BD%95%E5%9C%A8%E5%86%85%E9%83%A8%E8%A1%A8%E7%A4%BA%E7%89%A9%E7%90%86%E4%B8%96%E7%95%8C%EF%BC%9F.md) · [微信原件](../../../../raw/7a8f304705ef4aa6fe127da3930a592bc15a055c9eb3cb84d3705e30a2a229aa) · 固定版本 `digest-material-7a8f304705ef4aa6fe127da3930a592bc15a055c9eb3cb84d3705e30a2a229aa@1`

> 既有关于 VLA 策略的研究已经证明，可以从激活中线性读取任务相关变量。然而，可读性只能证明某个变量存在，并不能说明其取值所描绘出的形状，而这种形状可能是弯曲的、多维的。

> 通过结合受控扫描、自然 rollout、线性探针和激活干预，我们构建了 VLA 模型中七种任务相关概念的分类体系。我们发现，这些概念所实现的几何结构主要是多维的，并受到策略执行动作时所面临约束的塑造。

关联一手材料：

- A Phenomenology of Neural Geometry in Vision-Language-Action Models (arXiv:2610.20840)（Goodfire AI · Harvard University · Stanford University · UC Santa Barbara (arXiv:2610.20840)）· [原站](https://arxiv.org/abs/2610.20840) · [本地原件](../../../../raw/c258bb5cca57be1832c362a8399b5b2974e4e34f5917a8dc2c6feb64fd7aec52) · 版本 `digest-material-c258bb5cca57be1832c362a8399b5b2974e4e34f5917a8dc2c6feb64fd7aec52@1`
  > Robotic manipulation is inherently geometric, involving multi-joint kinematic chains operating in 3D Euclidean and \$SO(3)\$ configuration spaces under physical contact constraints and multi-stage task horizons. — 原文提取
