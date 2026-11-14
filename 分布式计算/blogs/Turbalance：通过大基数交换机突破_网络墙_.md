---
title: "Turbalance：通过大基数交换机突破\"网络墙\""
type: blog_digest
sector: "分布式计算"
source: "IEEE HotI 2026 · Turbalance × LBNL"
published_at: "2026-11-09"
raw_sha256: "b7fc26f540dd2d257cd92a5e0dcf41d861232510403437d685e70fe87d460999"
material_version: "digest-material-b7fc26f540dd2d257cd92a5e0dcf41d861232510403437d685e70fe87d460999@1"
origin_url: "https://hoti.org/"
trigger_source: "光芯纪"
trigger_url: "https://mp.weixin.qq.com/s/_GfTg0tcixNFBofGPwCZhQ"
user_comments: "有趣有趣，意思是说交换机的代际升级可以有两个方向：单接口速率和更多的接口，这两个方向的技术瓶颈分别在哪里呢？有哪些供应商在比较领先的位置？"
status: "needs_cloud"
---

<a id="digest-b7fc26f540dd2d25"></a>
# Turbalance：通过大基数交换机突破"网络墙"

2026-11-09 · IEEE HotI 2026 · Turbalance × LBNL · 待云端同步

[本地原件归档](../../../raw/b7fc26f540dd2d257cd92a5e0dcf41d861232510403437d685e70fe87d460999) · 固定材料版本 `digest-material-b7fc26f540dd2d257cd92a5e0dcf41d861232510403437d685e70fe87d460999@1` · [一手原站](https://hoti.org/) · [触发线索（光芯纪）](https://mp.weixin.qq.com/s/_GfTg0tcixNFBofGPwCZhQ)

> [!IMPORTANT]
> 用户关注点（TG）：有趣有趣，意思是说交换机的代际升级可以有两个方向：单接口速率和更多的接口，这两个方向的技术瓶颈分别在哪里呢？有哪些供应商在比较领先的位置？

## 针对性追查与回应

- 来源：[IEEE Hot Interconnects 33 (HotI 2026) · P. Berdesinski, L. Montigny (Turbalance) & J. Shalf, G. Michelogiannakis (LBNL)：*Breaking Through the Network Wall: Petabit-Class Switching for Single-Hop MoE Training at Scale*](https://hoti.org/)（2026-08）；对照一手：Broadcom Tomahawk 6 / Taurus、NVIDIA Spectrum-6 SN6800、Cisco Silicon One G300、IEEE P802.3dj / 400G-per-lane（P802.3dv）、OIF CEI-448G。
- ==核心结论==：交换芯片容量 = 单 lane SerDes 速率 × lane 数（radix）。业界下一代（204.8T / 230.4T）仍走"速率翻倍"（200G→400G/448G，lane 数停在 512–1024），因为速率是可以沿既有封装/PCB/光模块生态推进的路径；radix 才决定单跳域大小（多平面单跳域 ≈ 每芯片 lane 数），但 10× radix 撞上 die 边缘 SerDes 密度、封装与功耗墙，大概率要靠光 I/O（CPO/光引擎）才可能实现。Turbalance（AI 基础设施仿真软件公司，非芯片商）与 LBNL 的论文是对第二条路的仿真论证，1 Pbps 交换机并无硅片；其 All-to-All 加速 4.50× 恰等于每 GPU 跨机架带宽之比 28.8T/6.4T=4.5，收益中"带宽增加"与"单跳拓扑"尚未拆开。
- 关联主体档案：[Turbalance](../entities/companies/Turbalance.md) · [Lawrence Berkeley National Laboratory](../entities/labs/Lawrence%20Berkeley%20National%20Laboratory.md)

---

### 一、一手出处与可核事实

- 论文：HotI 2026（IEEE Hot Interconnects 第 33 届，2026 年 8 月，线上）。作者 Philipp Berdesinski、Laurent Montigny（Turbalance），John Shalf、George Michelogiannakis（劳伦斯伯克利国家实验室）。会议摘要确认：~1 Pbps、单 ASIC 5,120 × 200G lane、约 10× 现有 radix、单跳全对分、交换机数量约少 80%、GPU 利用率 64%→88%。
- 取证限制：工作区网络策略拒绝直连 hoti.org 与论文 PDF（HTTP 403），以上经多条检索摘要交叉印证；模型配置、场景 A/B 细节数字仍来自中文编译稿，`verification=pending`。
- 主体纠正与激励标注：Turbalance, Inc.（商号 Turba Labs，帕洛阿尔托 / 海德堡）公开定位是 AI 基础设施性能仿真与优化软件公司（数字孪生、GPU 吞吐与路由调优），不是交换芯片厂商；论文里的 1 Pbps / 5,120 lane 交换机是假设性设计点，不是 Turbalance 的产品，也没有已知硅片。微信标题《Turbalance：通过大基数交换机突破》容易让人误以为 Turbalance 在做交换机。其商业激励在于证明"网络拓扑决定 GPU 利用率"从而需要仿真/调优工具；结果为仿真，非实测（公司定位来自官网 turbalabs.com 的检索摘要，待直连核对）。

### 二、对文章数字的复核与纠正

| 主张 | 复核 | 结论 |
| --- | --- | --- |
| 最先进交换芯片 512 × 200G，2026H2 出货 TH6 / G300 / Spectrum-6 均 102.4T | Broadcom TH6：102.4T，512×200G 或 1,024×100G PAM4，已量产出货；Cisco G300：102.4T、3nm、64×1.6T；NVIDIA Spectrum-6 单芯片 102.4T | ✅ 成立。注意 TH6 也可配成 1,024×100G——同一容量下 radix 可以拿速率换 |
| SN6800 四芯片 409.6T，网络看到的仍是每芯片 512 | NVIDIA：SN6800 = 4 颗 Spectrum-6，512×800G 端口，CPO + 液冷 | ✅ 容量成立；"盒内多芯片不改变 radix"是作者论点（盒内仍有芯片间转发层级），合理 |
| 下一代落在 204.8 或 230.4T | 204.8T = 512×400G 或 1,024×200G；230.4T = 512×450G（448G 级 lane） | ⚠️ 隐含结论：下一代主要靠单 lane 提速，lane 数不变——正是 radix 停滞的证据 |
| 2017→2026 交换机带宽只增长约 14× | 2017 年 12 月发布的 TH3 为 12.8T → 102.4T 是 8×；若以 TH2（6.4T）计为 16× | ⚠️ 基准口径未披露，14× 无法复现 |
| 72 台取代 352 台，交换机"少 80% 以上" | 1 − 72/352 = 79.5%；若把 16 架 × 36 颗 NVSwitch 也计入（928 颗）则少 92% | ⚠️ 对 352 口径为"约 80%"，不是"80% 以上" |
| "Colossus 1 规模（约 20,000 GPU）"年省约 13 亿美元 | Colossus 1 公开报道约 200,000 颗 H100/H200（首期 10 万）。按 20 万卡反推：\$1.3B ÷ (200k × 8,760h × 24pp) ≈ \$3.1/GPU·h，与 H100 市场租价同量级；按 2 万卡则需约 \$31/GPU·h | ❌ 大概率漏了一个 0；"20,000"应为"200,000" |
| All-to-All 加速 4.50× | 基线每 GPU 跨机架 scale-out 6.4T，Petabit 方案每 GPU 到全网 28.8T：28.8/6.4 = 4.5 | ⚠️ 加速几乎完全等于带宽比，说明收益主要来自"每 GPU 跨机架带宽放大 4.5×"，而非单跳本身；公平对照应是同样 28.8T/GPU 的多层 CLOS |

推算（本工作台推断）：72 台 × 5,120 lane = 368,640 lane；2,304 GPU 每卡对每台交换机接 2 条 200G = 144 lane = 28.8 Tbps（正好等于 NVLink 6 单卡 3.6 TB/s），每台用 4,608/5,120 条（90%）。若每卡对每台只接 1 条，单跳域上限 = 5,120 卡——这就是"单跳域 ≈ 每芯片 lane 数"的来源。

### 三、两条升级路径的瓶颈

A. 单 lane 提速（100G → 200G → 400/448G）
1. 信道损耗：PAM4 下 448G 需约 224 GBd，Nyquist 约 112 GHz，而连接器限制的信道带宽约 90 GHz；PCB/铜缆可达距离急剧缩短。标准层仍在争论 PAM4 vs PAM6/PAM8（降波特率但 SNR 惩罚更大）——IEEE 400G/lane 工作组（P802.3dv）与 OIF CEI-448G 尚在定义中，200G/lane 的 P802.3dj 才刚定稿。
2. DSP / 均衡 / FEC 的功耗与时延：更重的 FFE/DFE/MLSD 与更强 FEC 抬高 pJ/bit 与尾时延，对 AI 集合通信不友好。
3. 封装到面板的走线：die→基板→PCB→连接器的寄生效应逐级累积，推动 LPO（线性直驱）/ NPO / CPO 把光电转换挪近芯片（Broadcom TH6-Davisson、NVIDIA Spectrum-X Photonics）。
4. 热密度：102.4T 整机已普遍出液冷版本（Cisco G300 系统、SN6800）。
- 评价：A 路线难，但有清晰路线图和标准组织托底，代际节奏约 2 年；它提升每端口带宽、减少线缆/光模块数量，但不扩大单跳域。

B. 增加 lane 数 / radix（512 → 5,120）
1. SerDes 排布与芯片边缘（beachfront/shoreline）：电 SerDes 只能沿 die 边缘排布，lane 数受周长×密度限制；10× lane 需要 10× 边缘长度或换 I/O 方式（光引擎、2.5D/3D 封装）。
2. reticle 与封装尺寸：单 die 面积受光罩上限约束；拆成多 die 又引入片间互连——片内交换要么变成"多跳"，要么需要超高带宽 D2D。
3. 交换核心：crossbar 复杂度约 ∝ N²；共享缓存要承担 N 个端口同时读写，存储带宽与调度器（仲裁、负载均衡）复杂度随 radix 陡增。
4. 功耗与散热：1 Pbps 的 I/O 本身即为千瓦级（本工作台推断，按每比特几 pJ 的量级估算），单芯片供电与冷却极具挑战。
5. 布线与光纤数量：单跳 72 平面意味着每卡 144 条链路扇出到 72 台交换机，光纤管理与可维护性是系统级难题。
- 评价：B 路线收益更大（少层级、少交换机/光模块、时延均匀），但目前只有仿真论证，没有公开的 ≥2,048 lane 单芯片硅片；现实做法是用多平面 + CPO 把"等效 radix"做大。

### 四、领先供应商（按层；标注证据强度）

| 层 | 领先者 | 证据 |
| --- | --- | --- |
| 商用以太网交换 ASIC | Broadcom（Tomahawk 6 102.4T 已量产；TH6-Davisson CPO；Jericho 系列做跨数据中心） · NVIDIA（Spectrum-6 / SN6800 409.6T CPO；Quantum-X InfiniBand；NVLink Switch 为私有 scale-up） · Cisco（Silicon One G300 102.4T、3nm） | 厂商一手发布 ✅ |
| 同上（追赶者） | Marvell（Teralynx 10 51.2T 量产；102.4T 产品见报道，未取得一手稿） | ⚠️ 待核 |
| 国内 | 华为（自研 51.2T 用于自家 CloudEngine/昇腾集群，不外售） · 中兴（自研 51.2T） · 盛科通信（12.8T/25.6T 量产，51.2T 预计 2026 年底前后回片） | 二手报道 ⚠️，代差约 1 代 |
| SerDes / 光 DSP | Broadcom（Taurus 3nm 400G/lane 光 DSP，OFC 2026） · Marvell（Ara 1.6T DSP；参与 OIF 448G 互通演示） · Credo（AEC 有源铜缆） | Broadcom/Marvell 一手 ✅；Credo 未单独核 |
| 光模块 / CPO | 中际旭创、新易盛、Coherent（可插拔 800G/1.6T）；CPO：Broadcom、NVIDIA、Ayar Labs（光 I/O，见本赛道 Wiwynn × Ayar Labs 1024 ASIC Pod） | 部分已入库；份额数据未在本次核查 |

### 五、观点与可反驳条件

- ==观点==：2027–2028 年商用交换芯片仍以 512–1,024 lane 为主，代际容量增长约 80% 以上来自单 lane 提速；radix 10× 的单芯片在 2028 年前不会量产，"扁平单跳"更可能以多平面 + CPO 的系统方案出现。
- ==推翻条件==：① 任何厂商（含初创）在 2028 年前公布 ≥2,048 条 200G lane（约 4× 现有）的单芯片交换 ASIC 实硅与功耗数据；② 204.8T 代产品以 1,024×200G 而非 512×400G 为主流配置出货（说明业界转向 radix 路线）；③ 若论文 PDF 给出"同带宽多层 CLOS"对照，且单跳仍有 ≥10% JCT 优势（这将证明拓扑本身而非带宽是主要收益来源）。

---

## 原文摘录与一手信源存证

> 训练一个 20T 参数、2304 个专家的混合专家模型，卡脖子的究竟是 GPU 还是网络？Turbalance 与劳伦斯伯克利国家实验室的团队用仿真给出答案：把传统多层网络换成 72 台 1Pbps 交换机构成的扁平单跳网络，作业完成时间快27.5%，GPU利用率从 64% 升到 88%。同样的模型、同样的GPU，唯一的变量是网络。
> — 原文摘录，文字段落 1；证据 `digest-material-b7fc26f540dd2d257cd92a5e0dcf41d861232510403437d685e70fe87d460999-excerpt-1@1`

> 以 2017 年为基准，到 2026 年，GPU算力（FP16）增长约 80 倍，交换机带宽只增长约 14 倍。今天限制大模型训练的不再是 GPU，而是互连网络。而混合专家（MoE）让问题更尖锐：专家路由把每一步训练都变成一次 All-to-All 通信。
> — 原文摘录，文字段落 2；证据 `digest-material-b7fc26f540dd2d257cd92a5e0dcf41d861232510403437d685e70fe87d460999-excerpt-2@1`

> 目前最先进交换芯片为 512 条 200G 通道，512 的基数把单跳域上限压在几百个 XPU。2026 年下半年出货的 ASIC（Tomahawk 6、Silicon One G300、Spectrum-6）容量上限 102.4 Tbps， 而下一代ASIC 基数预计只翻约 2 倍，落在 204.8 或 230.4 Tbps。虽有多芯片装箱封装的方案，但这不改变基数。
> — 原文摘录，文字段落 3；证据 `digest-material-b7fc26f540dd2d257cd92a5e0dcf41d861232510403437d685e70fe87d460999-excerpt-3@1`

一手材料：

- Breaking Through the Network Wall: Petabit-Class Switching for Single-Hop MoE Training at Scale (IEEE Hot Interconnects 2026) · IEEE HotI 2026 · Turbalance × LBNL · [原站](https://hoti.org/) · [主体档案：Turbalance](../entities/companies/Turbalance.md) / [主体档案：Lawrence Berkeley National Laboratory](../entities/labs/Lawrence%20Berkeley%20National%20Laboratory.md) · [待上传原件](../../../raw/3882b0119199a37a7d67e44417364f9c846a68340fc1d785b0e6d7324407fbc3)
  材料版本 `digest-material-3882b0119199a37a7d67e44417364f9c846a68340fc1d785b0e6d7324407fbc3@1`；获取方式 `web_search_grounded_dossier`。
  > Venue: IEEE Hot Interconnects 33 (HotI 2026), symposium held August 2026 (virtual). — 原文提取
  > Capture method and limits (read first): - Compiled 2026-11-10 from web-search grounding results that cite hoti.org program/abstract pages. — 原文提取

归属与范围：穿透光芯纪编译稿，定位上游一手为 IEEE Hot Interconnects 2026 论文（Turbalance × LBNL，Berdesinski/Montigny/Shalf/Michelogiannakis）；纠正 Turbalance 为 AI 基础设施仿真软件公司而非交换芯片商；对照 Broadcom TH6、NVIDIA SN6800、Cisco G300、IEEE P802.3dj/400G-per-lane、OIF CEI-448G 复核文中芯片数字，指出 Colossus 规模疑似漏 0、交换机减少为 79.5%、4.5× All-to-All 加速等于带宽比；回答单 lane 速率与 radix 两条路线的瓶颈与领先供应商。论文 PDF 因网络策略未取得。

来源缺口：

- `unavailable`：HotI 2026 论文 PDF 与演讲幻灯片未能直连获取（工作区网络策略拒绝 hoti.org，HTTP 403）；场景 A/B 具体数字与仿真器设定仍以微信编译稿为准，待读原文复核。
- `pending_verification`：文中“Colossus 1 规模（约 20,000 GPU）年省约 13 亿美元”与公开报道约 200,000 颗 GPU 不符；按 20 万卡反推约 \$3.1/GPU·h 才合理，疑为漏写一个 0，待论文原文核对。
- `pending_verification`：All-to-All 加速 4.50× 恰等于每 GPU 跨机架带宽之比 28.8T/6.4T；论文是否提供同带宽多层 CLOS 对照以拆分“带宽增加”与“单跳拓扑”的贡献，尚未确认。
- `pending_verification`：“2017→2026 交换机带宽增长约 14×、GPU FP16 增长约 80×”的基准芯片与口径未披露（TH3 12.8T 基准为 8×，TH2 6.4T 基准为 16×）。

[返回赛道总览](../赛道总览.md#digest-b7fc26f540dd2d25) · [返回导读索引](README.md) · [主体档案库](../entities/README.md)
