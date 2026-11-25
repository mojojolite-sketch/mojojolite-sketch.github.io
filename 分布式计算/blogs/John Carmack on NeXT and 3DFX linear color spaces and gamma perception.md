---
title: "John Carmack on NeXT and 3DFX linear color spaces and gamma perception"
type: blog_digest
sector: "分布式计算"
source: "John Carmack (@ID_AA_Carmack)"
published_at: "2026-11-16"
raw_sha256: "0b565ddf78acaccdacffec3687aed1f268afaa5b2f0ca877d8791acd07d6905f"
material_version: "digest-material-0b565ddf78acaccdacffec3687aed1f268afaa5b2f0ca877d8791acd07d6905f@1"
origin_url: "https://x.com/ID_AA_Carmack/status/2122478083319992513"
trigger_source: "John Carmack"
trigger_url: "https://x.com/ID_AA_Carmack/status/2122478083319992513"
user_comments: ""
status: "processed_with_gaps"
---

<a id="digest-0b565ddf78acaccd"></a>
# John Carmack on NeXT and 3DFX linear color spaces and gamma perception

2026-11-16 · John Carmack (@ID\_AA\_Carmack) · 有来源缺口

[本地原件归档](../../../raw/0b565ddf78acaccdacffec3687aed1f268afaa5b2f0ca877d8791acd07d6905f) · 固定材料版本 `digest-material-0b565ddf78acaccdacffec3687aed1f268afaa5b2f0ca877d8791acd07d6905f@1` · [一手原站](https://x.com/ID_AA_Carmack/status/2122478083319992513)

## 深度拆解与复核

- 口径与利益披露：本条为 John Carmack（@ID_AA_Carmack）于 2026-11-16 在 X 发布的独立历史技术复盘，直接引用图形学者 Fabien Sanglard（@fabynou）关于 1997 年 3DFX 1 输出色彩发灰原因的公开提问；Carmack 以当年 glQuake 主程亲历者身份坦承早期只顾追逐绝对帧率性能而忽略色域校正，无当期商业利益冲突。受 X 抓站限制，主帖正文与被引推文已完整落盘，154 条评论区回复仍标记为来源缺口。

### 一、硬件初衷与 4–6 bit 低位深量化陷阱

从物理辐射度学出发，若像素值 1.0 发射的光子通量是 0.5 的 2 倍，则部分像素覆盖（partial pixel occupancy）、前景/背景 Alpha 混合与纹理插值均应在线性空间完成。NeXT（源于 Pixar 的图形体系交叉）与 3DFX（源于 SGI 工程传承）正是据此有意让显示输出更接近线性：

- 专业管线门槛：当单通道达到 10+ bit（1,024 级以上）时，线性显示输出在数学与视觉上均成立。
- 低位深物理失配：NeXTStation Colors 仅提供每通道 4-bit（16 级），3DFX 的 16-bit 帧缓冲每通道仅 5 或 6 bit（32 或 64 级）。人眼并非线性光强计，而是近似按相对比例感知亮度——人眼可明显分辨 0.01 到 0.02 的倍增，而对 0.99 到 1.00 几乎无感（对应显示系统的 gamma / sRGB 非线性压缩曲线）。在仅有 16–64 个离散编码值时若在 0 到 1 区间均匀线性切分，相当于把大量编码精度浪费在高亮区，必然在暗部留下刺眼的亮度断层（intensity bands）。

### 二、内容管线错配：为何 3DFX 呈现标志性发灰

即便全部美术资产专为 3DFX 线性空间重新创作，硬件端仍无法消除暗部色阶断层，顶多换来正确的混色与滤波结果。现实雪上加霜的原因在于生产侧错配：1997 年画师全部在常规非线性显示器（近似 gamma 2.2 响应）上绘制纹理，非线性编码值未经数学逆 gamma 矫正便直接送入接近线性的 3DFX 管线渲染，使中暗部灰阶被系统性抬升，最终形成 3DFX 标志性的发灰质感（washed out color）。Carmack 直言当年在 glQuake 时代并未真正理解该机制，开发者普遍被 3DFX 的绝对算力与速度红利吸引，牺牲了色彩保真；即便是今天进入 24-bit（每通道 8-bit）与高分辨率时代，仍有大量游戏未在纹理采样与渲染目标间正确对齐 sRGB/线性空间，在高频高对比纹理与边缘处仍会诱发轻微闪烁（shimmering）。

### 三、机制核查与对【分布式计算】的工程边界映射

- 本工作台核查：
  1. ✅ 位深与感知分布的量化算术自洽：在 5-bit（32 级）线性编码下，第 1 个非零台阶已达 1/31 ≈ 0.032，远大于人眼在 0.01 附近的高敏感阈值，暗部首阶跃迁跨度天然超出非线性 sRGB（在低值端斜率高达 12.92、等效分配更多暗部码字）近 1 个数量级，必然出现 Carmack 所述的暗部断层，与硬件位宽参数完全吻合。
  2. ⚠️ 赛道边界与覆盖局限：本帖全篇属于 1990 年代单机图形显示与纹理滤波流水线复盘，对【分布式计算】T2（电力审批与项目信贷）、T3（CPO 光互连与液冷流体）与 T4（轨道散热）均无直接实证增量；其与当前赛道的实质交集在于 T1“拒绝唯名义算力论、重数值有效利用（Goodput/Effective Precision）”的底层硬件共性。
- 本工作台推断：Carmack 对 NeXT/3DFX 的事后归因揭示了一条跨代计算硬件通律——一旦进入低位宽量化区（图形侧 4–6 bit/通道之于 AI 推理侧 INT4/FP4/FP8），均匀线性切分与无校准数据格式混用都会在分布长尾处迅速失真。当前分布式推理集群若只盯着芯片名义低精度 TOPS 峰值，而忽略激活值/KV-Cache 的非均匀尺度对齐（block-scale / log-curve 匹配张量敏感区），其系统级有效精度损失与 1997 年“用 3DFX 高帧率掩盖线性发灰”属同构工程盲区。

### 观点与可反驳条件

- ==观点==：3DFX 与 NeXTStation Color 当年被市场批评的发灰与色阶断层，根因并非硬件“不够先进”，而是硬件团队在 4–6 bit 低位深下强行套用 10+ bit 才成立的线性光强假定，且未在软件管线侧补齐纹理逆 gamma 校验；在低比特计算硬件上，编码曲线对齐信息敏感分布永远优先于名义线性或绝对吞吐量。
- ==推翻条件==：
  1. 对照硬件测试证实 1997 年 Voodoo 1 驱动默认 LUT 已被设为纯 1.0 线性以外的强 gamma 曲线，且 glQuake 发灰现象主要由 16-bit 纹理压缩量化误差或双线性滤波精度截取而非线性-非线性空间错配造成；
  2. 评论区已补充的 Carmack 后续回复（当前因 X 抓站限制缺口尚未取回）若显式修正其对 NeXTStation Colors 4-bit 线性 DAC 或 3DFX 内部 LUT 默认行为的工程回忆，须按新取证更新本结论。

---

## 原文摘录与一手信源存证

> 【信源巡检核心摘要】 John Carmack 在 X 复盘 NeXT（每通道 4-bit）与 3DFX（每通道 5–6-bit）早期显示硬件采用线性色彩空间的工程教训：由于低位深条件下线性编码与人眼对光强的对数感知不匹配，导致暗部亮度出现明显断层，且在常规非线性显示器上制作的纹理显现发灰效果。
> — 原文摘录，文字段落 1；证据 `digest-material-0b565ddf78acaccdacffec3687aed1f268afaa5b2f0ca877d8791acd07d6905f-excerpt-1@1`

一手材料：

- John Carmack on NeXT and 3DFX linear color spaces and gamma perception · John Carmack (@ID\_AA\_Carmack) · [原站](https://x.com/ID_AA_Carmack/status/2122478083319992513) · [主体档案：John Carmack](../entities/people/John%20Carmack.md) · [本地原件](../../../raw/3c4c354f2547e5a0e23dad99d8ad398481eb880bc49c63fc7fdcaccb02db858c)
  材料版本 `digest-material-3c4c354f2547e5a0e23dad99d8ad398481eb880bc49c63fc7fdcaccb02db858c@1`；获取方式 `tg_approved_full_text`。
  > Both NeXT and 3DFX tried to “do the right thing” with color spaces, and it wound up generally making them look worse than competing options. I didn’t really understand it properly until years later. — 原文提取
  > It is natural to think that a pixel with a value of 1.0 is emitting twice the photons as a pixel with a value of 0.5, so you can do the obvious linear math to calculate partial pixel coverage, blending a foreground over a background, or interpolating between colors in a texture. — 原文提取

归属与范围：已拉取 John Carmack 2026-11-16 X 原帖全文（回应 Fabien Sanglard @fabynou 关于 1997 年 3DFX 1 色彩发灰的提问）：NeXT 承袭 Pixar 图形基因、3DFX 承袭 SGI 传统，均有意采用接近线性的色彩响应以保证 1.0/0.5 光子倍增及混合过滤数学正确；但 10+ bit/通道专业管线才适配线性空间，在 NeXTStation Colors（4-bit/通道）与 3DFX（5–6 bit/通道）低位深下，线性量化与人眼对暗部相对变化（0.01→0.02 极敏感、0.99→1.00 几乎无感）的对数/gamma 感知曲线冲突，引发暗部色阶断层（intensity bands），再叠加画师在常规非线性显示器上制图未经数学 gamma 校正直接进入 glQuake 渲染，造成典型发灰（washed out color）。154 条 thread 回复因 X 抓站限制未取回，已记录 unavailable 缺口。

来源缺口：

- `unavailable`：受 X 平台抓站限制，已取回 John Carmack 主帖全文与被引推文（@fabynou），但原帖下 154 条评论区回复及可能的作者追答未能抓取。 [线索](https://x.com/ID_AA_Carmack/status/2122478083319992513)

[返回赛道总览](../赛道总览.md#digest-0b565ddf78acaccd) · [返回导读索引](README.md) · [主体档案库](../entities/README.md)
