# Neil Ashton

[返回主体档案库](../README.md) · [返回赛道总览](../../赛道总览.md) · [单篇导读索引](../../blogs/README.md)

- 主体类别：👤 个人与学者 (People)
- 核心定位与说明：汽车外流场高保真公开数据集 DrivAerML（arXiv:2408.11969）第一作者。
- 关联账号与官方入口：
  - arXiv Author Index（Neil Ashton）：[作者索引](https://arxiv.org/search/physics?searchtype=author&query=Ashton%2C+N) · 登记对象 `digest-publisher-ab418cec7c7c2d91929072d6` — 汽车外流场高保真公开数据集 DrivAerML（arXiv:2408.11969）第一作者。

## 1. 核心研究问题与待核查争议（Questions & Open Debates）

### 🔍 待核查缺口与证据边界（Open Gaps）

- `not_disclosed`：BeyondMath 未公开 Physics Factory（Forge 模块）基础物理 AI 组件库的具体网络结构、预训练权重规模、5 个 Agent 间的协同编排实现细节，亦未公开 DrivAerML 5 次随机划分标准差、训练 GPU 耗时与平台 Credits 收费单价表。 [线索](https://blog.beyondmath.com/posts/20260803-built-autonomously-1st-drivaerml/)（关联：[《你提供仿真数据和目标，AI自动构建最好的代理模型：BeyondMath Physics Factory》](../../blogs/%E4%BD%A0%E6%8F%90%E4%BE%9B%E4%BB%BF%E7%9C%9F%E6%95%B0%E6%8D%AE%E5%92%8C%E7%9B%AE%E6%A0%87%EF%BC%8CAI%E8%87%AA%E5%8A%A8%E6%9E%84%E5%BB%BA%E6%9C%80%E5%A5%BD%E7%9A%84%E4%BB%A3%E7%90%86%E6%A8%A1%E5%9E%8B%EF%BC%9ABeyondMath%20Physics%20Factory.md)）
- `not_disclosed`：虽已披露 \$18.5M 种子轮融资及 Honeywell 主导的三年期 STRATA 项目（英国 ATI 联合项目 £14.1M / BeyondMath 稿称 \$19M）与未具名 F1 车队合作，但公司未披露商业付费客户数、ARR 收入以及 Physics Factory 自助平台或 Cadgen2 的独立第三方工程验收 ROI 数据。 [线索](https://beyondmath.com/news/seed-round-announcement)（关联：[《你提供仿真数据和目标，AI自动构建最好的代理模型：BeyondMath Physics Factory》](../../blogs/%E4%BD%A0%E6%8F%90%E4%BE%9B%E4%BB%BF%E7%9C%9F%E6%95%B0%E6%8D%AE%E5%92%8C%E7%9B%AE%E6%A0%87%EF%BC%8CAI%E8%87%AA%E5%8A%A8%E6%9E%84%E5%BB%BA%E6%9C%80%E5%A5%BD%E7%9A%84%E4%BB%A3%E7%90%86%E6%A8%A1%E5%9E%8B%EF%BC%9ABeyondMath%20Physics%20Factory.md)）
- `unavailable`：CEO Alan Patterson 个人 Substack 长文（alpatters.substack.com/p/building-a-foundational-ai-model）与 2026-10-21 LinkedIn 全面开放公告原贴在直连 HTTP 请求下遭遇 Cloudflare 403 或登录墙拦截未取回全文；开放机制已通过 surrogatemodels.com 编目交叉核实。 [线索](https://surrogatemodels.com/news/beyondmath-physics-factory)（关联：[《你提供仿真数据和目标，AI自动构建最好的代理模型：BeyondMath Physics Factory》](../../blogs/%E4%BD%A0%E6%8F%90%E4%BE%9B%E4%BB%BF%E7%9C%9F%E6%95%B0%E6%8D%AE%E5%92%8C%E7%9B%AE%E6%A0%87%EF%BC%8CAI%E8%87%AA%E5%8A%A8%E6%9E%84%E5%BB%BA%E6%9C%80%E5%A5%BD%E7%9A%84%E4%BB%A3%E7%90%86%E6%A8%A1%E5%9E%8B%EF%BC%9ABeyondMath%20Physics%20Factory.md)）

- [《你提供仿真数据和目标，AI自动构建最好的代理模型：BeyondMath Physics Factory》](../../blogs/%E4%BD%A0%E6%8F%90%E4%BE%9B%E4%BB%BF%E7%9C%9F%E6%95%B0%E6%8D%AE%E5%92%8C%E7%9B%AE%E6%A0%87%EF%BC%8CAI%E8%87%AA%E5%8A%A8%E6%9E%84%E5%BB%BA%E6%9C%80%E5%A5%BD%E7%9A%84%E4%BB%A3%E7%90%86%E6%A8%A1%E5%9E%8B%EF%BC%9ABeyondMath%20Physics%20Factory.md)：已穿透上游一手信源并核查主体背景：(1) BeyondMath 官方开发者博客 2026-08-03《Built Autonomously, Achieves 1st Place on DrivAerML》（确认 5 个 Agent 团队架构、500 车型 / ~1.6 亿单元混合 RANS-LES、1.5 亿+ 点推理、以及被触发稿忽略的指标拆分：Physics Factory 在表面压力 3.53%、体积压力 3.83% 与阻力 Cd R2 0.985 领先，但在体积速度场 4.98% vs 4.14% 与升力 Cl R2 0.975 vs 0.985 两项仍落后于清华 Transolver-3）；(2) BeyondMath 官方技术博客 2026-09-19 两篇 Cadgen2 案例研究（平板 20 实体 / 50 变体 / 1,050 STEP 实测依赖 OpenRadioss 耗时 11h07m 求解，F1 几何 28 个 DOE 手柄 465-547 ms 实时形变）；(3) BeyondMath 2026-02-25 种子轮公告（\$18.5M 融资、CIC 领投及 Honeywell £14.1M / \$19M STRATA 项目）；(4) Surrogate Models 2026-10-21 编目确认开放注册与 Credits 收费；(5) DrivAerML 原始论文 arXiv:2408.11969。微信公众号《AIE风向标》退居触发线索，并纠正其『超过 1 亿点』缩水、『Cadgen2 无需代理模型靠世界模型直接高速出真值』误读及『尚无客户侧验证』的时间线偏差。

## 2. 收录文章与一手材料（Ingested Articles & Primary Sources）

### [你提供仿真数据和目标，AI自动构建最好的代理模型：BeyondMath Physics Factory](../../blogs/%E4%BD%A0%E6%8F%90%E4%BE%9B%E4%BB%BF%E7%9C%9F%E6%95%B0%E6%8D%AE%E5%92%8C%E7%9B%AE%E6%A0%87%EF%BC%8CAI%E8%87%AA%E5%8A%A8%E6%9E%84%E5%BB%BA%E6%9C%80%E5%A5%BD%E7%9A%84%E4%BB%A3%E7%90%86%E6%A8%A1%E5%9E%8B%EF%BC%9ABeyondMath%20Physics%20Factory.md)

2026-11-27 · 来源：BeyondMath (Physics Factory / Developer Blog) · 状态：有来源缺口

[单篇导读（blogs/）](../../blogs/%E4%BD%A0%E6%8F%90%E4%BE%9B%E4%BB%BF%E7%9C%9F%E6%95%B0%E6%8D%AE%E5%92%8C%E7%9B%AE%E6%A0%87%EF%BC%8CAI%E8%87%AA%E5%8A%A8%E6%9E%84%E5%BB%BA%E6%9C%80%E5%A5%BD%E7%9A%84%E4%BB%A3%E7%90%86%E6%A8%A1%E5%9E%8B%EF%BC%9ABeyondMath%20Physics%20Factory.md) · [微信原件](../../../../raw/acdbc955250c4bddcc2c088c19b0d93f7c857966191908ccb2728086bd2d6a4c) · 固定版本 `digest-material-acdbc955250c4bddcc2c088c19b0d93f7c857966191908ccb2728086bd2d6a4c@1`

> 在仿真领域，使用AI代理模型提升求解速度，从而在早期探索更多的方案，已经是很重要的一个发展方向。但是对大多数企业来说，构建AI代理模型这事技术门槛还是有点高（养不起AI算法专家），一些通用构建工具效果又可能不稳定。

> 为此，AI CAE创企BeyondMath给出了一个方案：你只要把数据和目标扔给Physics Factory平台，多Agent系统自己帮你找出最好的AI代理模型。

关联一手材料：

- DrivAerML: High-Fidelity Computational Fluid Dynamics Dataset for Road-Car External Aerodynamics（Neil Ashton et al. (arXiv:2408.11969)）· [原站](https://arxiv.org/abs/2408.11969) · [本地原件](../../../../raw/d3b8703fd7d025b23b5836159aeddb51c9be2f4d9de22dfdb8ba170b65debe20) · 版本 `digest-material-d3b8703fd7d025b23b5836159aeddb51c9be2f4d9de22dfdb8ba170b65debe20@1`
  > Machine Learning (ML) has the potential to revolutionise the field of automotive aerodynamics, enabling split-second flow predictions early in the design process. — 原文提取
