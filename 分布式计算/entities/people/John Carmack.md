# John Carmack

[返回主体档案库](../README.md) · [返回赛道总览](../../赛道总览.md) · [单篇导读索引](../../blogs/README.md)

- 主体类别：👤 个人与学者 (People)
- 核心定位与说明：—
- 关联账号与官方入口：
  - X（John Carmack）：[账号主页](https://x.com/ID_AA_Carmack) · 登记对象 `digest-publisher-98f6f9ff2c3af0eca83cb297`

## 1. 核心研究问题与待核查争议（Questions & Open Debates）

### 💬 追问与核查：《算力暴砍90%！东京大学用200米光纤跑通深度学习，硬件缺陷竟让AI更聪明》

- 我记得elon也有过类似的讨论，即数据不保存在硬盘里而是持续流通在光纤里

关联文章：[《算力暴砍90%！东京大学用200米光纤跑通深度学习，硬件缺陷竟让AI更聪明》](../../blogs/%E7%AE%97%E5%8A%9B%E6%9A%B4%E7%A0%8D90%25%EF%BC%81%E4%B8%9C%E4%BA%AC%E5%A4%A7%E5%AD%A6%E7%94%A8200%E7%B1%B3%E5%85%89%E7%BA%A4%E8%B7%91%E9%80%9A%E6%B7%B1%E5%BA%A6%E5%AD%A6%E4%B9%A0%EF%BC%8C%E7%A1%AC%E4%BB%B6%E7%BC%BA%E9%99%B7%E7%AB%9F%E8%AE%A9AI%E6%9B%B4%E8%81%AA%E6%98%8E.md)

> 追查结论摘要：核心结论：东京大学与 NTT 论文（Nature Computational Science, 10.1038/s43588-026-01075-w）是用 200 m 光纤延迟环做模拟非线性特征映射计算（靠器件正弦失真与制造公差升维，仅在小规模基准省去最高 90% 数字矩阵乘加 FLOPs，墙插电费仍受 60 Gbaud 光电转换与 4-bit 有效精度锁死）；而用户记忆中 John Carmack 与 Elon Musk（2026-02-07） 讨论并由乌普萨拉大学（arX…

### 🔍 待核查缺口与证据边界（Open Gaps）

- `unavailable`：受 X 平台抓站限制，已取回 John Carmack 主帖全文与被引推文（@fabynou），但原帖下 154 条评论区回复及可能的作者追答未能抓取。 [线索](https://x.com/ID_AA_Carmack/status/2122478083319992513)（关联：[《John Carmack on NeXT and 3DFX linear color spaces and gamma perception》](../../blogs/John%20Carmack%20on%20NeXT%20and%203DFX%20linear%20color%20spaces%20and%20gamma%20perception.md)）
- `not_disclosed`：东京大学与 NTT 在 Nature Computational Science（10.1038/s43588-026-01075-w）中未披露 200 米光纤光电延迟环实验台架（含连续波激光器、TEC 温控、60 Gbaud 任意波形发生器 AWG、射频驱动放大器与实时示波器 ADC）的端到端整机墙插能耗（Joules/sample），无法直接与现代 CMOS GPU 实测单样本推理/训练电表能耗做同口径对比。 [线索](https://doi.org/10.1038/s43588-026-01075-w)（关联：[《算力暴砍90%！东京大学用200米光纤跑通深度学习，硬件缺陷竟让AI更聪明》](../../blogs/%E7%AE%97%E5%8A%9B%E6%9A%B4%E7%A0%8D90%25%EF%BC%81%E4%B8%9C%E4%BA%AC%E5%A4%A7%E5%AD%A6%E7%94%A8200%E7%B1%B3%E5%85%89%E7%BA%A4%E8%B7%91%E9%80%9A%E6%B7%B1%E5%BA%A6%E5%AD%A6%E4%B9%A0%EF%BC%8C%E7%A1%AC%E4%BB%B6%E7%BC%BA%E9%99%B7%E7%AB%9F%E8%AE%A9AI%E6%9B%B4%E8%81%AA%E6%98%8E.md)）
- `not_disclosed`：乌普萨拉大学 Fiber Memory 架构（arXiv:2607.08407）的 1,000 km 多芯光纤循环回路与 0.7 pJ/bit 直检 CPO 分光接收机目前停留在系统级解析建模阶段，尚无千公里级多芯光纤闭环长期循环误码率（BER）与全光 3R 再生器实硅硬件流片数据。 [线索](https://arxiv.org/abs/2607.08407)（关联：[《算力暴砍90%！东京大学用200米光纤跑通深度学习，硬件缺陷竟让AI更聪明》](../../blogs/%E7%AE%97%E5%8A%9B%E6%9A%B4%E7%A0%8D90%25%EF%BC%81%E4%B8%9C%E4%BA%AC%E5%A4%A7%E5%AD%A6%E7%94%A8200%E7%B1%B3%E5%85%89%E7%BA%A4%E8%B7%91%E9%80%9A%E6%B7%B1%E5%BA%A6%E5%AD%A6%E4%B9%A0%EF%BC%8C%E7%A1%AC%E4%BB%B6%E7%BC%BA%E9%99%B7%E7%AB%9F%E8%AE%A9AI%E6%9B%B4%E8%81%AA%E6%98%8E.md)）

- [《John Carmack on NeXT and 3DFX linear color spaces and gamma perception》](../../blogs/John%20Carmack%20on%20NeXT%20and%203DFX%20linear%20color%20spaces%20and%20gamma%20perception.md)：已拉取 John Carmack 2026-11-16 X 原帖全文（回应 Fabien Sanglard @fabynou 关于 1997 年 3DFX 1 色彩发灰的提问）：NeXT 承袭 Pixar 图形基因、3DFX 承袭 SGI 传统，均有意采用接近线性的色彩响应以保证 1.0/0.5 光子倍增及混合过滤数学正确；但 10+ bit/通道专业管线才适配线性空间，在 NeXTStation Colors（4-bit/通道）与 3DFX（5–6 bit/通道）低位深下，线性量化与人眼对暗部相对变化（0.01→0.02 极敏感、0.99→1.00 几乎无感）的对数/gamma 感知曲线冲突，引发暗部色阶断层（intensity bands），再叠加画师在常规非线性显示器上制图未经数学 gamma 校正直接进入 glQuake 渲染，造成典型发灰（washed out color）。154 条 thread 回复因 X 抓站限制未取回，已记录 unavailable 缺口。
- [《算力暴砍90%！东京大学用200米光纤跑通深度学习，硬件缺陷竟让AI更聪明》](../../blogs/%E7%AE%97%E5%8A%9B%E6%9A%B4%E7%A0%8D90%25%EF%BC%81%E4%B8%9C%E4%BA%AC%E5%A4%A7%E5%AD%A6%E7%94%A8200%E7%B1%B3%E5%85%89%E7%BA%A4%E8%B7%91%E9%80%9A%E6%B7%B1%E5%BA%A6%E5%AD%A6%E4%B9%A0%EF%BC%8C%E7%A1%AC%E4%BB%B6%E7%BC%BA%E9%99%B7%E7%AB%9F%E8%AE%A9AI%E6%9B%B4%E8%81%AA%E6%98%8E.md)：微信原文为公众号「算子宇宙」（作者 Modulo）对东京大学与 NTT 光计算论文的二手中文编译稿（作为底层 trigger\_source 归档）；本工作台已穿透绑定上游一手论文（Nature Computational Science DOI 10.1038/s43588-026-01075-w 及 Research Square 预印本 10.21203/rs.3.rs-8145052/v1）、东京大学官方新闻稿（Let there be light, 2026-11-05），同时溯源核实了 2026-02-07 John Carmack 与 Elon Musk 关于 200 km / 256 Tbps 光纤在途延迟线缓存与真空激光存储的一手讨论、SpaceX 收购 1.6T 光模块商 Mesh Optical Technologies（2026-07-06）及乌普萨拉大学 Fiber Memory 论文（arXiv:2607.08407）。

## 2. 收录文章与一手材料（Ingested Articles & Primary Sources）

### [John Carmack on NeXT and 3DFX linear color spaces and gamma perception](../../blogs/John%20Carmack%20on%20NeXT%20and%203DFX%20linear%20color%20spaces%20and%20gamma%20perception.md)

2026-11-16 · 来源：John Carmack (@ID\_AA\_Carmack) · 状态：有来源缺口

[单篇导读（blogs/）](../../blogs/John%20Carmack%20on%20NeXT%20and%203DFX%20linear%20color%20spaces%20and%20gamma%20perception.md) · [微信原件](../../../../raw/0b565ddf78acaccdacffec3687aed1f268afaa5b2f0ca877d8791acd07d6905f) · 固定版本 `digest-material-0b565ddf78acaccdacffec3687aed1f268afaa5b2f0ca877d8791acd07d6905f@1`

> 【信源巡检核心摘要】 John Carmack 在 X 复盘 NeXT（每通道 4-bit）与 3DFX（每通道 5–6-bit）早期显示硬件采用线性色彩空间的工程教训：由于低位深条件下线性编码与人眼对光强的对数感知不匹配，导致暗部亮度出现明显断层，且在常规非线性显示器上制作的纹理显现发灰效果。

关联一手材料：

- John Carmack on NeXT and 3DFX linear color spaces and gamma perception（John Carmack (@ID\_AA\_Carmack)）· [原站](https://x.com/ID_AA_Carmack/status/2122478083319992513) · [本地原件](../../../../raw/3c4c354f2547e5a0e23dad99d8ad398481eb880bc49c63fc7fdcaccb02db858c) · 版本 `digest-material-3c4c354f2547e5a0e23dad99d8ad398481eb880bc49c63fc7fdcaccb02db858c@1`
  > Both NeXT and 3DFX tried to “do the right thing” with color spaces, and it wound up generally making them look worse than competing options. I didn’t really understand it properly until years later. — 原文提取

### [算力暴砍90%！东京大学用200米光纤跑通深度学习，硬件缺陷竟让AI更聪明](../../blogs/%E7%AE%97%E5%8A%9B%E6%9A%B4%E7%A0%8D90%25%EF%BC%81%E4%B8%9C%E4%BA%AC%E5%A4%A7%E5%AD%A6%E7%94%A8200%E7%B1%B3%E5%85%89%E7%BA%A4%E8%B7%91%E9%80%9A%E6%B7%B1%E5%BA%A6%E5%AD%A6%E4%B9%A0%EF%BC%8C%E7%A1%AC%E4%BB%B6%E7%BC%BA%E9%99%B7%E7%AB%9F%E8%AE%A9AI%E6%9B%B4%E8%81%AA%E6%98%8E.md)

2026-11-11 · 来源：东京大学中嶋实验室 & NTT · Nat. Comput. Sci. · 状态：有来源缺口

[单篇导读（blogs/）](../../blogs/%E7%AE%97%E5%8A%9B%E6%9A%B4%E7%A0%8D90%25%EF%BC%81%E4%B8%9C%E4%BA%AC%E5%A4%A7%E5%AD%A6%E7%94%A8200%E7%B1%B3%E5%85%89%E7%BA%A4%E8%B7%91%E9%80%9A%E6%B7%B1%E5%BA%A6%E5%AD%A6%E4%B9%A0%EF%BC%8C%E7%A1%AC%E4%BB%B6%E7%BC%BA%E9%99%B7%E7%AB%9F%E8%AE%A9AI%E6%9B%B4%E8%81%AA%E6%98%8E.md) · [微信原件](../../../../raw/4160969ca9c0def5e0d8d6984d52377c8bf88464dcc7174ca2bd946017ea04d5) · 固定版本 `digest-material-4160969ca9c0def5e0d8d6984d52377c8bf88464dcc7174ca2bd946017ea04d5@1`

> 2026年11月5日，东京大学在官网头条写下这句带着创世纪意味的标题。 他们联合日本电信电话巨头NTT，在《Nature Computational Science》抛出了一项颠覆性成果： 不需要堆叠成千上万颗发烫的硅基晶体管，仅靠一卷200米长的普通光纤环，就能让光子在狂奔中完成深度学习。

> 实测表现令人惊叹 在同等网络规模下， 单轮训练的浮点运算量（FLOPs）最高暴砍90%，可训练参数量削减高达75% 。 如果把这个光学模块像乐高一样插进现代残差网络（ResMLP）， 在分类准确率不降反升的前提下，直接省掉约40%的计算资源 ，正面硬刚“参数越多、算力越贵”的传统缩放定律（Scaling Laws）。

关联一手材料：

- John Carmack & Elon Musk X Technical Thread on 200km/256Tbps In-Flight Fiber Delay-Line Memory & Vacuum Optical Storage (Feb 2026) + SpaceX Mesh Optical Acquisition（John Carmack × Elon Musk 技术讨论存证）· [原站](https://www.techspot.com/news/111952-john-carmack-proposes-fiber-optic-loops-high-speed.html) · [本地原件](../../../../raw/71ed856255fad5379aa5d5526fb07feee5a6dc8c312add9e12c1d9dfdea056a0) · 版本 `digest-material-71ed856255fad5379aa5d5526fb07feee5a6dc8c312add9e12c1d9dfdea056a0@1`
  > Primary Source Dossier 3: John Carmack (@ID\_AA\_Carmack) × Elon Musk (@elonmusk) X Thread on Fiber-Optic Delay-Line Cache & Vacuum Optical Memory (Feb 7, 2026) + SpaceX Acquisition of Mesh Optical Technologies (July 6, 2026) 1. — 原文提取
