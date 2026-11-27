---
title: "大模型能不能吃掉具身，要先看能不能吃掉Momenta。"
type: blog_digest
sector: "具身智能"
source: "Momenta · 港交所招股章程 / NVIDIA SRL Astranomy"
published_at: "2026-11-04"
raw_sha256: "6b9138cf3ae13366f1bee01c5eabf19bdce2b27ac07abbab117885819a09b7a0"
material_version: "digest-material-6b9138cf3ae13366f1bee01c5eabf19bdce2b27ac07abbab117885819a09b7a0@1"
origin_url: "https://www.hkexnews.hk/listedco/listconews/sehk/2026/0629/2026062900057.pdf"
trigger_source: "天南具身公园"
trigger_url: ""
user_comments: ""
status: "processed_with_gaps"
primary_topic: "工业落地与商业模式"
topic_confidence: 0.801
---

<a id="digest-6b9138cf3ae13366"></a>
# 大模型能不能吃掉具身，要先看能不能吃掉Momenta。

2026-11-04 · Momenta · 港交所招股章程 / NVIDIA SRL Astranomy · 有来源缺口

[本地原件归档](../../../raw/6b9138cf3ae13366f1bee01c5eabf19bdce2b27ac07abbab117885819a09b7a0) · 固定材料版本 `digest-material-6b9138cf3ae13366f1bee01c5eabf19bdce2b27ac07abbab117885819a09b7a0@1` · [一手原站](https://www.hkexnews.hk/listedco/listconews/sehk/2026/0629/2026062900057.pdf)

## 深度拆解与复核

- ==核心结论==：用港交所首家完全摊开账本的独立智驾方案商 [Momenta](../entities/companies/Momenta.md)（6880.HK）做压力测试可以发现，真正承载软件毛利跃升（整体毛利率 2023–2025 年由 17.5% 升至 71.6%）的支柱正是占 2025 年营收 40.1%（9.68 亿）的量产许可服务，而占 59.9%（14.45 亿）的技术开发服务只是高人力成本的“入场券”；对照招股章程与 NVIDIA Astranomy 实证，通用大模型短期因 18.56 秒延迟与 36.40 美元单集算力税无法直接接管毫秒级控制（System 0），但具身场景没有汽车 Tier1/OEM 标准电子电气架构与单车起量红利，纯大脑厂商若无法把“工程适配工具链（具身版 Adaptor）”压缩到 80%–90% 可复用，甚至不等 AGI 到来就会卡死在工程交付亏损期。

#### 一、业务切口与核心机制

作者以当前“System 2（理解规划）归通用大模型、System 0（毫秒级控制）归本体、中间 System 1（技能轨迹）承压”的三层分工为前提，拆解 Momenta 招股章程中隐藏的“两家公司拼装结构”：

1. 两条收入线的利润剪刀差：第一条「技术开发服务」（Technical development service，2025 年占营收约 60%）在车企定点后完成传感器布局、SoC 与基础软件适配验证至 SOP，对应几乎全额由工程师薪酬构成、接近平走的三期营业成本（2023 年 6.13 亿、2024 年 6.75 亿、2025 年 6.86 亿）；第二条「许可服务」（Licensing service，占 2025 年营收约 40%）在量产发车后按台收取，增量边际成本极低，是拉动毛利率三年翻四倍的核心引擎。
2. 两种大模型冲击推演：
   - 情景一（通用模型直接上车/上本体）：直接冲击单车许可定价（由 2024 年约 2,480 元降至 2025 年约 1,900 元），并倒逼强势车企以“大模型+自研工程”压价，或跨过第三方；而工程适配虽然短期能守住，长期也可能被视觉泛化与工具链自动化侵蚀。
   - 情景二（大模型做教师蒸馏至车端小模型）：更符合现实物理约束，可省去部分训练和云开支（2025 年达 6.65 亿）及基座团队人力，但工程适配人力与车队运营测试（2025 年 1.64 亿）一分难减，且竞争对手（元戎、地平线、卓驭、华为等）同样能请同一个 GPT 教师模型，公司估值叙事也将从「物理 AI 第一股」滑向系统集成商。
3. 映射至具身智能的三重结构差异：具身赛道没有车企层，本体厂直接掌握 System 0 且产品出厂必带模型，纯大脑厂议价空间远弱于智驾 Tier1；同时具身硬件缺乏汽车级统一 SoC 与域控标准，使工程适配工作量更大、大模型公司绝不愿下场承担售后与现场交付；最关键的商业拷问在于——在通用模型打穿之前，具身集成商能否做出让每次进场复用率达到 80%–90% 的“具身 Adaptor”，先让工程交付自身产生正向毛利。

#### 二、核心数据核查、口径纠偏与工程边界

场景与利益披露：原文（微信公众号“天南具身公园”，作者天南，2026-11-04）系独立大模型与具身算法研究员的战略推演笔记，立场审慎且明确声明为极端假设压力测试；本工作台对照 HKEXnews 法定招股章程 PDF 全文（450 页）与 NVIDIA 实证项目页面逐项核查如下：

| 财务 / 工程指标 | 微信原文口径 | 招股章程（`2026-06-29` PDF）及一手文献原文数据 | 本工作台核查与口径纠偏 |
| --- | --- | --- | --- |
| 收入结构与营业成本（RMB） | 称 40% 为高毛利许可、60% 为接近成本价的工程，营业成本三年几乎未变 | [招股章程 p.260](https://www.hkexnews.hk/listedco/listconews/sehk/2026/0629/2026062900057.pdf)：2023–2025 总营收 7.43 亿 → 13.25 亿 → 24.13 亿；技术开发服务 7.19 亿（96.8%）→ 10.32 亿（77.9%）→ 14.45 亿（59.9%）；许可服务 0.23 亿（3.1%）→ 2.92 亿（22.1%）→ 9.68 亿（40.1%）；营业成本 6.13 亿 → 6.75 亿 → 6.86 亿，毛利率 17.5% → 49.0% → 71.6% | ✅ 全部财务数字与结构比例精确吻合招股章程；经调整非国际财务报告准则净亏损由 2023 年 10.93 亿（-147.2%）收窄至 2025 年 3.03 亿（-12.6%），现金及定期存款与理财合计逾百亿级 |
| 研发开支与单车许可估算 | 称 2025 年研发 18.69 亿（含训练云 6.65 亿、较去年 3.41 亿翻倍；车队测试 1.64 亿）；2024/2025 单车许可约 2,480 元 / 1,900 元 | [招股章程 p.263](https://www.hkexnews.hk/listedco/listconews/sehk/2026/0629/2026062900057.pdf)：2025 研发开支 18.69 亿（员工薪酬 8.43 亿占 45.1%、训练云及基建 6.65 亿占 35.6% vs 2024 年 3.41 亿、车队运营测试 1.64 亿占 8.7%）；累计装机 5.2 万 → 17 万 → 68 万台（截至最后可行日 73.3 万台，170 款定点、68 款 SOP、24 家全球车企） | ✅ 研发拆分与装机台数完全核实；⚠️ 但以「当年许可收入 ÷ 当年新增装机量」倒算的 2,480 → 1,900 元受交付确认时点与高阶 Urban NOA（>65 万台）向中低价车型下沉影响，单车降价本身即反映行业价格战现实 |
| `Momenta Adaptor` 自动化率 | 称预标准化阶段做到主线效果 80% 到 90% | 招股章程“Three Pillars”（Adaptor / Framework / Box）原文确认：预标准化阶段通常交付约 80%–90% 主线性能，再由定制对齐收齐剩余差距 | ✅ 原文口径真实；但汽车域控与 SoC 产业链高度标准化，迁移到非标具身本体会遭遇物理构型发散 |
| GPT-6 Astra 延迟与成本 | 称 NVIDIA 研究显示每次推理平均 18.56 秒、Agentic 每成功 episode 成本约 36.40 美元 | [Astranomy](https://research.nvidia.com/labs/srl/projects/astranomy/) 确认：Direct Policy EEF 平均 18.56 秒/次（成功率 66.3%、160k token / 1.96 美元）；Agentic Policy 13.37 秒/次（成功率 74.8%、3,090 万 token / 36.40 美元），且“推理期间仿真暂停” | ✅ 数值源头核实；⚠️ 关键前提是仿真时钟在推理期暂停，而物理现实世界绝不会暂停等待大模型 |
| “10 月底 Momenta 发自研芯片” | 称 10 月底 Momenta 发了自研芯片，提“大模型定义芯片” | 检索 2026-10-29 发布会及招股章程关联方信息：发布 700 TOPS `X7 Ultra` 芯片的是从 Momenta 内部孵化并于 2023 年底独立运营的兄弟公司「新芯航途（XHEART）」，Momenta CEO 曹旭东同台预告 `R7 Ultra` 世界模型 | ❌ 主体归属纠偏：芯片主体 XHEART 与港股上市公司 Momenta 属生态协同而非已核实同一并表资产，且招股书未披露该芯片流片制程与商业分成比例 |

本工作台推断，若按照本库对具身智能产业链的长期追踪（T3 工业象限护栏 × 神经物理原语与 T4 结构化工位优先级），大模型公司短期不仅无法吞并 `System 0`，甚至很难单独收取高毛利 `System 1` 许可费——因为 3C/汽车工厂客户按「工位节拍与良率 SLA」付款，不会为未经传感器/工装标定的通用 API 买单。具身创业公司要逃脱“工程纯赔钱、许可无规模”的夹击，唯有像 `Momenta Adaptor` 一样把传感器标定、异常状态机与安全联锁沉淀为跨工位复用套件（把单客户定制人天压低一个数量级）。

#### 三、赛道横向对比与定位

| 主体 | 核心商业模式（服务 vs 许可） | 标准化工程复用资产 | 对抗通用大模型（AGI）的护城河 | 核心财务 / 商业脆弱性 |
| --- | --- | --- | --- | --- |
| [Momenta](../entities/companies/Momenta.md) (`6880.HK`) | 技术开发服务（60%）导流 + 量产按台许可（40%，推升毛利率至 71.6%） | `Momenta Adaptor`（预标准化 80%–90% 主线复用）+ 68 万–73.3 万台量产数据飞轮 | 车端百万级脱敏合规数据、车企安全责任背书、联合 XHEART 的芯片协同 | 单车许可收益下行（~2,480→~1,900 元）；车企自研压价与 6.65 亿/年云训练烧钱 |
| [Horizon Robotics](../entities/companies/Horizon%20Robotics.md) | 车规级 SoC 芯片硬件放量 + 软硬协同授权 | 征程系列工具链与 BPU 编译器生态 | 芯片出货物理锚点与车规功能安全认证绑定 | 高研发投入下的高端算力迭代竞争 |
| [Dream Labs](https://dreamlabs.ai/research/dream-1/) (`Dream API`) | 公开 API 按小时计费（2–3 美元/小时）+ FaaS 微调服务 | 统一 EEF 位姿空间 + 本地 IK 客户端 | 以 30 分钟/少样本跨 27 款仿真构型降低前期工程集成成本 | 仍受限各本体 IK 精度，未切入工厂级 SLA 与安全责任签字 |
| [Tesla](../entities/companies/Tesla.md) (`FSD` / `Optimus`) | 自有车队/整机硬件自产自销 + 软件订阅 | 全栈自研芯片、Dojo/GPU 集群与一体化制造 | 无外部 Tier1 博弈损耗，端到端全栈利润独享 | 仅适用于自产硬件帝国，无法向第三方主机厂开放数据合规与适配 |

### 观点与可反驳条件

- ==观点==：用 Momenta 招股书推演具身商业化得出了一条反直觉但极具杀伤力的约束：在具身领域，「卖通用大脑许可」在未来 2–3 年内极易被开源小模型与大模型教师蒸馏双面压缩，真正具备短期现金流与壁垒的恰恰是“把非标场景工程适配压低至 10%–20% 边际工作量的工业化工具链（具身版 Adaptor）”；而在物理时钟不可暂停的限制下，18.56 秒云端大模型在可预见期内只能停留在 `System 2` 与离线蒸馏层，无法替代端侧 `System 1/0` 确定性控制。
- ==推翻条件==：
  1. ① 若未来 12–18 个月内出现不依赖每台机/每工位现场人工适配的纯云端或通用端侧 VLA（如单日零样本部署至超过 10 家独立工厂、现场工程人天趋近于零且软件纯许可毛利率稳定 >= 70% 的具身大脑独立供应商），则「具身工程适配不可被通用视觉模型快速抹平、必须依靠 Adaptor 工具链存活」的判断将被推翻；
  2. ② 若港交所后续年度财报或公开审计披露 Momenta 的研发云训练开支占营收比例不降反升至 > 40% 而单车许可 ASP 跌破 1,000 元人民币且无法通过高毛利 L4/Robotaxi 补齐，则「量产车许可规模经济足以对冲大模型蒸馏平权冲击」的基线假设将被推翻。

---

## 原文摘录与一手信源存证

> 真的很难从短中长期说服彼此 buy in自己的推演逻辑，但这些 battle 讨论肯定是非常有意义的。
> — 原文摘录，PDF p.1；证据 `digest-material-6b9138cf3ae13366f1bee01c5eabf19bdce2b27ac07abbab117885819a09b7a0-excerpt-1@1`

> 这几天我们又刷到一篇外网博客，作者说跟 50 位机器人一线的朋友聊完，他们的结论是Astra 本身就是机器人的GPT- 3 时刻，说自动驾驶或许也会被大模型吃掉等等。
> — 原文摘录，PDF p.1；证据 `digest-material-6b9138cf3ae13366f1bee01c5eabf19bdce2b27ac07abbab117885819a09b7a0-excerpt-2@1`

> System 2 大概率是大模型公司的囊中之物；System 0 或许会是本体公司的附属品；那做大脑的这些公司大概率就得卷 System 1，围绕着部署和落地方面的需求来训练模型。
> — 原文摘录，PDF p.2；证据 `digest-material-6b9138cf3ae13366f1bee01c5eabf19bdce2b27ac07abbab117885819a09b7a0-excerpt-3@1`

一手材料：

- MOMENTA GLOBAL LIMITED 全球发售招股章程 · 香港交易所披露易 · [原站](https://www.hkexnews.hk/listedco/listconews/sehk/2026/0629/2026062900057.pdf) · [主体档案：Momenta](../entities/companies/Momenta.md) · [NotebookLM](https://notebook.google.com/notebook/33f0076b-fc09-42cc-9cd9-fecfb847ce1c) · [Drive](https://drive.google.com/file/d/1sKan5WwWArn_fUdxyais9rFgrpPCXIcU/view?usp=drivesdk)
  材料版本 `digest-material-f66dff96b9e2be19e09f014b2b4784a1f30209eeb6b26a6f7a1d593cd7151a1f@2`；获取方式 `http_pdf`。
  > \* The vehicle displayed is merely an illustration, instead of a real-world vehicle or a product of our Company. Our Company is principally engaged in providing OEMs with driving automation software solutions. — PDF p.1
  > If you are in any doubt about any of the contents in this prospectus, you should obtain independent professional advice. — PDF p.2
- Astranomy: An empirical study of GPT-6 Astra as a native robot policy (NVIDIA SRL / CoRL 2026 LBR) · NVIDIA Seattle Robotics Lab · [原站](https://research.nvidia.com/labs/srl/projects/astranomy/) · [主体档案：NVIDIA Seattle Robotics Lab](../entities/labs/NVIDIA%20Seattle%20Robotics%20Lab.md) · [本地原件](../../../raw/6bb218204f03bfb47814c399be514b25959a01eebba4ccb869945cc397854ab1)
  材料版本 `digest-material-6bb218204f03bfb47814c399be514b25959a01eebba4ccb869945cc397854ab1@1`；获取方式 `web_fetch_full_text`。
  > Overview 1. Introduction 2. Study Design 2.1. Policy Configurations 2.2. Inference-time ablations 3. Results 3.1. What information and action choices affect Astra's behavior? 3.1.1. — 原文提取
  > Key takeaways A general-purpose model has the capability of operating as a native robot policy for general-purpose pick-and-place. — 原文提取

归属与范围：保留归档Momenta港交所法定全球发售招股章程PDF原件（6880.HK），逐项核对2023-2025年技术开发服务与许可服务收入、营业成本平缓带来的毛利率跃升（17.5%-\>71.6%）、研发与云/训练开支（6.65亿）及Momenta Adaptor 80%-90%主线复现率；本轮新增抓取NVIDIA Seattle Robotics Lab的Astranomy项目全文，实证核对GPT-6 Astra 18.56秒延迟与36.40美元/episode成本及其“推理期间仿真暂停”实验前提；同时纠偏文章所谓“10月底Momenta发自研芯片”实为兄弟独立芯片企业新芯航途（XHEART）发布X7 Ultra协同Momenta R7 Ultra，招股书外芯片股权边界与具身Adaptor推演仍保留缺口。

来源缺口：

- `pending_verification`：文章将Momenta在汽车电子电气架构下实现的Adaptor 80%-90%主线适配自动化率外推至非标具身集成商的复用率假设，以及Momenta 2026年7月港股上市后700亿港元以上市值与10月29日XHEART X7 Ultra/R7 Ultra生态协同成效，属推演假设与上市后媒体口径，未在2026-06-29招股章程中覆盖。
- `not_disclosed`：Momenta与孵化关联芯片公司新芯航途（XHEART）之间的交叉持股比例、知识产权切分及车规级SoC量产采购条款，以及具体单一OEM车型的单车许可阶梯降价条款，未在港交所招股章程中披露。

[返回赛道总览](../赛道总览.md#digest-6b9138cf3ae13366) · [返回导读索引](README.md) · [主体档案库](../entities/README.md)
