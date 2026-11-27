# Cerebras Systems (NASDAQ: CBRS) 推理端研究：后训练开源模型与小批量并发下的 WSE vs NVIDIA 对比

研究时点：2026 年 11 月 27 日 · 登记主体：`entity-company-cerebras-systems@1` · 赛道：[分布式计算](../赛道总览.md) · 一手归档与版本核查：见 [work/registry.sqlite3](../../../registry.sqlite3)

## 核心判断（有归属、可被反驳）

- 核心立场（本工作台推断，基于 Cerebras Q3 2026 SEC 10-Q/8-K、Cognition 与 Fireworks AI 一手工程披露）：Cerebras 在推理端并不是 NVIDIA GPU 集群的全面替代品，而是面向「低并发（Batch Size 1–8）+ 重解码（Decode-heavy）+ 高时间价值交互」的片上 SRAM 带宽特种加速器。
- 决定后训练开源模型（Post-trained Open-Weight Models）选择 Cerebras 还是 NVIDIA GPU 的核心分水岭，体现在同一 `2.8T` 混合专家底座 `Kimi K3` 上的两组自然实验：Cognition（`SWE-2.1`）采用 NVIDIA 标准低价档（`60 tok/s`，`2 / 10 美元/百万 token`）与 Cerebras 极速溢价档（`600 tok/s`，`5 / 25 美元/百万 token`）并行的双层分发；Harvey（`Harvey Tenet`）选择 Fireworks AI + NVIDIA `B300 / GB300` 训推同栈集群，以保住 `99%` 双状态前缀缓存命中率、Batch Invariance 与多租户弹性经济性。
- 推翻条件（Falsification Criteria）：
  1. 若 Cerebras 异构分离推理（GPU Prefill + WSE Decode）结合 `CS-4 / CS-5` 量产落地后，能将 `2.8T` 私有定制权重的 Dedicated 专属托管单价压至接近 NVIDIA `B300 / GB200 NVL72` 同等水平（抹平当前 `2.5 倍` token 溢价），Cerebras 将从“极速可选档”切入主流后训练推理底座；
  2. 若 NVIDIA 下一代 Vera Rubin + NVFP4 + 投机解码把 `2.8T` MoE 的单流速度推高至 `300+ tok/s` 并稳压在 `5 秒` 交互心流窗口内，Cerebras 的单流延迟溢价将被大幅压缩；
  3. 若 Cerebras 在 2027 年 `700 MW` 签约机房交付或 Flex/Sanmina `10 倍` 整机扩产不及预期，且 OpenAI `750 MW–2.0 GW` MRA 与 AWS 排他保底产能条款挤占中小客户额度，其服务 Cognition/Harvey 类应用层的商业化通道将进一步变窄。

---

## 一、公司身份、财务结构与推理云转型（SEC 10-Q & Q3 2026 EX-99.1）

Cerebras Systems Inc.（NASDAQ: CBRS，CIK `0002021728`，总部 Sunnyvale, CA，CEO Andrew Feldman / CFO Bob Komin）于 2026 年 5 月完成 IPO（`10-Q` 披露 2026-05-13 后满足 RSU 流动性条件；公开交易代码 `CBRS`）。收入重心已从早期整机硬件交付转向推理云服务（见归档材料 `mat-cerebras-q3-2026-8k@1` 与 `mat-cerebras-q3-2026-10q@1`）：

| 指标 | Q3 2026 实绩 / 截至 2026-09-30 | 同比 / 对比基数 | 登记版本与核验 |
| --- | --- | --- | --- |
| GAAP 总营收 | 2.108 亿美元（硬件 6,888 万 + 云与服务 1.419 亿美元） | 总营收 +55% YoY；云 +265% YoY | `obs-cbrs-q3-2026-gaap-rev@2`（verified） |
| Non-GAAP Core 总营收 | 2.309 亿美元（Core 云 1.449 亿 + Core 硬件 8,600 万美元） | 总营收 +70% YoY；Core 云 +272% YoY | `obs-cbrs-q3-2026-core-rev@2`（verified） |
| 毛利率（GAAP vs Core） | GAAP 20.0%（4,209 万 / 2.108 亿）；Core 41.0%（云 46.9% / 硬件 31.0%） | Core 环比、同比均上行 | `obs-cbrs-q3-2026-gaap-gm@2`（verified） |
| 剩余履约义务 RPO | 261 亿美元 | 前 24 个月（至 2028-09-30）预计确认约 33%，第 25–48 月约 44% | `obs-cbrs-q3-2026-rpo@2`（verified） |
| 现金及短期投资 / 授信 | 78 亿美元（含受限现金及 OpenAI 约 10 亿美元营运资金贷款）+ 8.5 亿美元债务额度 | 支撑 700 MW 机房与产能垫资 | `obs-cbrs-q3-2026-liquidity@2`（verified） |
| 客户权证资产余额 | 11 亿美元（2025 年末 1.524 亿美元） | Q3 2026 摊销冲减收入 3,640 万美元，9M26 8,270 万美元 | `obs-cbrs-q3-2026-warrant-assets@2`（verified） |
| 签约数据中心总容量 | 700 MW 毛容量（2027 年底前交付，含挪威、芬兰） | Q4 Core 营收指引 3.1–3.3 亿美元，FY26 指引 9.4–9.6 亿美元 | `obs-cbrs-q3-2026-dc-capacity-mw@2`（verified） |

财务结构中的两项关键商业信号（均源自 `mat-cerebras-q3-2026-10q@1`）：

- 股权绑定获客拉低 GAAP 表观毛利：GAAP 毛利率（`20.0%`）与 Core 毛利率（`41.0%`）之间 `21` 个百分点的裂口，主要源于客户权证摊销直接作为收入抵减项（9M26 新记 OpenAI `8.229 亿美元`、G42 `1.494 亿美元`、AWS `5,000 万美元`，按收入确认进度摊销至 `2031-10`）以及无毛利的数据中心租金与电力代付成本（pass-through）。→ 高估值倍数与 `261 亿美元` RPO 建立在深度战略绑定之上，Q4 指引 Core 毛利率升至 `47%–49%` 与运营盈亏平衡（`-1%` 至 `+1%`）能否兑现是关键验证点。
- 客户高度集中且大单绑定未来产能：Q3 2026 客户 A 占营收 `38%`（去年同期 `70%`），客户 B 占 `34%`（应收账款占比高达 `64%`），客户 C（与 A 为关联方）占应收账款 `16%`。OpenAI MRA（2025-12 签署）锁定 `750 MW` 承诺推理容量（可扩展至 `2.0 GW`），Q3 2026 确认收入 `7,240 万美元`；AWS 协议则包含价格承诺、排他性与最低制造产能保证。

---

## 二、自然实验对照：同样后训练 `Kimi K3`（2.8T MoE），Cognition 与 Harvey 的基础设施分岔

Moonshot AI 的 `Kimi K3` 是典型的超大参数混合架构：`2.8T` 总参数、`1M` 上下文窗口、`69 层 Kimi Delta Attention (KDA) 线性注意力 + 24 层 Multi-head Latent Attention (MLA)`、`896` 个 `LatentMoE` 专家（`top-16` 激活，Group-32 MXFP4 权重 / Group-128 FP8 激活）（见 `mat-fireworks-kimi-k3-rl@1`）。两家头部应用厂商基于同一底座做 RL 后训练，却选择了截然不同的推理栈：

| 对比维度 | Cognition（`SWE-2.1` / `SWE-2.1 Ultrafast` / `SWE-grep`） | Harvey（`Harvey Tenet`） |
| --- | --- | --- |
| 模型与训练归属 | 基于 `Kimi K3` 纯 RL 后训练，另自研 `SWE-1.5/1.6/1.7`、`SWE-grep`、`SWE-check`（Cognition 官网与 Devin 文档） | 基于 `Kimi K3` 与 Fireworks AI 合作异步 RL 后训练，约 `150` 片 NVIDIA `B300` 训练 `2` 个月（Fireworks 披露） |
| 主力推理硬件路径 | 双轨分层：标准 `SWE-2.1` 跑在自租/GPU 集群（`60 tok/s`）；`SWE-2.1 Ultrafast` 与 `SWE-1.7 / SWE-grep` 跑在 Cerebras（Cognition 披露 + `mat-cerebras-cognition-spotlight@1`） | Fireworks AI 专属/托管 NVIDIA `GB300 / B300` 集群，采用 `TP4 / DP4 / EP16` 内联（Inline）服务架构（`mat-fireworks-kimi-k3-rl@1`） |
| 核心交互与并发形态 | 强同步 IDE 心流（`5 秒` 红线内完成多轮搜索或结构化 diff 检查）+ 突发事故下需加速 Test-Time Compute（避免 `60 tok/s` 跑 `6` 小时） | 法律尽调、合同红线比对与多文档交叉核查：`50+` 轮、超 `100,000` token 长轨迹异步/半同步运行，对首字后前缀复用极其敏感 |
| 关键系统瓶颈差异 | Decode 单流延迟（`P(breaking flow)` 每超 `1` 秒按约 `10%` 几何上升）；多轮工具调用需瞬间吐出数千隐藏推理 token | 双状态持久化与训推一致：`K3` 须同时缓存 `MLA KV` 与 `KDA` 循环卷积状态；Fireworks Inline 服务前缀缓存命中率达 `~99%` |
| 商业传递与收费方式 | 直接按 token 速度分级定价：`SWE-2.1` 牌价 `2 / 10 美元/百万`（限免促销），Cerebras `Ultrafast` 不参加限免、定价 `5 / 25 美元/百万`（`2.5 倍`） | 企业律所/法务部按律师席位年度订阅为主（官网披露累计融资 `5.5 亿美元`、估值 `155 亿美元`），单任务推理成本直接侵蚀 SaaS 毛利 |

为什么 `Kimi K3` 的混合架构放大了两者分歧？（源自 `mat-fireworks-kimi-k3-rl@1` 实证）：

- 状态耦合限制了“分离推理”对长程法律场景的适用性：Cerebras 主打的异构分离推理需要把 Prefill 生成的状态经网络传给 Decode 池，但 `Kimi K3` 不仅要传 `MLA KV cache`，还必须同步迁移 `69` 层 `KDA` 循环状态与卷积状态并保持 RL 策略版本一致。Fireworks 在 `16` 张 `GB300` 上保留 Inline 架构，虽然 `128` 并发长轨迹的聚合总吞吐为 `2,834 tok/s`（均摊单流约 `22 tok/s`、远低于 Cerebras `600 tok/s`），但靠 `~99%` 前缀复用避开了巨量重复 Prefill 和跨池状态搬运开销，并用 `ReplaySSM` 让投机解码在不破坏 `KDA` 递归状态的前提下将完整任务吞吐再提 `65.05%`。
- 训练-推理数值漂移决定生态粘性：Harvey 需要高频迭代 RL 策略并维持低 `KL` 散度（Fireworks 通过 `Batch Invariance` + `Router Replay (R3)` 将同步 LoRA 训推 `KL` 散度压到 `0.0008`，且 `XOR` 权重增量将 `1,024 GiB` 检查点压缩 `98%` 到 `20.3 GiB`）。训推共用同一套 NVIDIA `B300 / GB300` 核函数（如自研 `MoE Mega Kernel` 相比原生 `DeepEPv2` 前向提速 `1.87–2.61×`），天然消除了跨硬件重编译门槛。

---

## 三、三维硬指标对比：Cerebras（CS-3 / CS-4 Nexus）vs NVIDIA（H200 / B200 / B300 / GB200 NVL72）

### 3.1 推理速度（Speed）：小批量 Decode 碾压 vs 长上下文 Prefill 与高并发反超

物理机制分界（源自 `mat-cerebras-disaggregated-2026@1` 与 `mat-cerebras-hotchips-2026-cs4@1`）：

- 访存带宽量级差：LLM 自回归 Decode 属于低算术强度（Arithmetic Intensity）的访存受限阶段，每生成 `1` 个 token 都要搬运全部活跃权重与 KV 缓存。Cerebras `WSE-3`（CS-3）将约 `44 GB` 存储全部做在片上 SRAM，提供 `21,000 TB/s（21 PB/s）` 片上访存带宽；`CS-4` 搭载 3 颗 `WSE-3T`（`WSE-3 Turbo`），单晶圆片上互联带宽达 `53.5 PB/s`（官方口径约为 `NVIDIA Rubin NVL72` 机架 `260 TB/s` Scale-up 带宽的 `200+ 倍`）。对比之下，NVIDIA `H200`（`141 GB` HBM3e）为 `4.8 TB/s`、`B200`（`192 GB` HBM3e）为 `8 TB/s`、`B300` 为 `288 GB` HBM，`HBM4` GPU 约 `22–23.3 TB/s`。
- 实际单流与小批量速度表现：
  - 中等开源模型（`27B–120B`）：Cerebras `Shared Inference` 实测 `gpt-oss-120b` 约 `3,000 tok/s`、`qwen-3.8-27b` 约 `1,850 tok/s`（`inference-docs.cerebras.ai`）；Artificial Analysis 2026-09-10 测试 `gpt-oss-120b (high reasoning, 10k input)` 显示 Cerebras 达 `1,669 tok/s`，领先微软 Azure（`319 tok/s`）、Baseten（`293 tok/s`）`5 倍`以上。
  - 超大 `2.8T` MoE（`Kimi K3 / K3.1 / SWE-2.1`）：Cognition 官方实测 `SWE-2.1 Ultrafast` 在 Cerebras 上达 `600 tok/s`（标准 GPU 版 `60 tok/s` 的 `10 倍`）；Cerebras 在 Q3 2026 EX-99.1 披露 `Kimi K3.1` 最高可达 `2,000 tok/s`。
- 速度反脆弱与边界：
  - Prefill 算力密集型瓶颈与分离推理补短：单颗 `WSE-3` 仅约 `44 GB` 片上 SRAM，面对 `2.8T` MoE 与 `100K+` 上下文，单晶圆装不下权重，必须采用跨多片晶圆流水线（仅在晶圆间传激活值，把高频率张量/专家通信锁在晶圆内部）并配合独立 Prefill 硬件做「异构分离推理（GPU Prefill + WSE Decode）」。早期测试证明该方案在相同 WSE 数量下把有效吞吐推高 `5 倍`（`mat-cerebras-disaggregated-2026@1`）。
  - 高并发吞吐场景（High-Batch Concurrency）：当并发请求从 `B=1–8` 上升到数百并发时，GPU 能够将一次 HBM 权重读取摊销到整个 Batch 并利用 Wide EP 吃满 Tensor Core，NVIDIA `GB200 NVL72`（72 卡 NVLink 5.0 聚合带宽 `130 TB/s`）的每百万 token 聚合产出和每 MW 经济性重占上风。

### 3.2 成本与单位经济（Cost & Unit Economics）：共享 API 低价与定制权重“包机利用率陷阱”

1. 直接对比公开标价与底层算力成本：
   - Cognition 真实终端价格锚点（`docs.devin.ai/desktop/models`）：对于同一 `SWE-2.1`（`Kimi K3` 底座），GPU 标准版挂牌 `2 / 10 美元` 每百万输入/输出 token（且对 Desktop/CLI 自用套餐限时免费至 2026-12-08），Cerebras 版 `SWE-2.1 Ultrafast` 定价 `5 / 25 美元` 每百万输入/输出 token（缓存读 `0.50 美元` vs `0.20 美元`），固定维持 `2.5 倍` 溢价。
   - Cerebras Shared Inference 共享定价仅涵盖极少数标准开源模型（如 `gpt-oss-120b` 开发者档约 `0.35 / 0.75 美元`）。一旦企业（如 Harvey、Cognition）需要部署私有后训练权重（尤其 `2.8T` MoE），无法进入多租户共享池，必须签订 `Dedicated Inference` 专属容量合同。
   - NVIDIA 侧底层算力成本锚点（SemiAnalysis InferenceX 数据）：超大规模自持或云厂商测算下，`B200` 与 `GB200 NVL72` 折算单卡 TCO 分别约为 `1.73 美元/小时` 与 `1.86 美元/小时`；在如 `Kimi K3` 等大 MoE 模型上，`GB200 NVL72` 借助大域 NVLink 池化可比单节点 `B200` 再降 `35%–45%` 单 token 成本。

2. 小批量并发场景下定制后训练模型的“利用率陷阱”（本工作台推断）：
   - 对 Harvey 这种面向企业法务、流量呈工作日波峰波谷、且每请求上下文达 `100K+` 的小批量场景而言，若为了在片上 SRAM 跑私有 `2.8T` MoE 权重而包租一组多晶圆 Cerebras 流水线集群，闲时固定晶圆折旧无法拆给其他租户分摊，单并发利用率低会直接拉爆每任务有效成本。
   - 相反，NVIDIA + Fireworks / Baseten 架构允许用「共享底座 + Multi-LoRA 异步挂载（仅对 `35–70B` 或 `2.8T` 底座叠加轻量 LoRA 适配器）」或按分钟扩缩容的专属 GPU 池，把空转时间成本降到接近零。只有像 Cognition 这样同时服务数十万高频交互式编程用户（`Windsurf + Devin`）、且单次提问能通过 `2.5 倍` 速度分层直接向客户收费的场景，才跑得通 Cerebras Dedicated 专属集群的高固定摊销模型。

### 3.3 交货期与上线周期（Lead Time）：物理基建周期 vs 软件与模型适配周期

| 交货期维度 | Cerebras（CS-3 / CS-4 Nexus / Cloud） | NVIDIA（H200 / B200 / B300 / GB200 + Fireworks/Baseten） |
| --- | --- | --- |
| 硅片封装物理路径 | 整片 `300mm` 晶圆单片集成（`WSE-5` 流片到系统测试 `<5` 个月），天然绕开 TSMC `CoWoS-L` 切割中介层封装与 `HBM3e/HBM4` 堆叠排队；`CS-4` 机架把供电与液冷模块前置/背包化以加速机房现场部署（`mat-cerebras-hotchips-2026-cs4@1`） | 高度受制于 TSMC `CoWoS` 高级封装与 HBM 供给，以及 `GB200/300 NVL72` 高密液冷与 5,000 根铜缆/背板系统测试爬坡；企业采购整机 OEM 机架交货期常达数周至数月 |
| 真正的产能与机房瓶颈（SEC 10-Q 披露） | 1) 晶圆制造单一依赖 `TSMC`，且关键部件存在单源依赖；2) 整机组装由 Flex、Sanmina 爬坡（2026 年底扩产至年初 `10 倍+`）；3) 机房土建与高密供电卡脖子（签约 `700 MW` 延至 2027 年底交付）；4) 大客户挤出效应——OpenAI MRA（`750 MW–2.0 GW`）与 AWS 商业协议中的排他及最低产能承诺在 10-Q 风险因素中被明示“可能限制满足其他客户需求”；Oracle OCI 要到 `2027 年` 才正式上线 | 尽管顶级 NVL72 整机在物理交付层有排期，但全球公有云（AWS/Azure/GCP/OCI）及 Neocloud（Fireworks/Baseten/Modal/CoreWeave）现货 GPU 库存池极其庞大 → 应用公司实际采购可用算力的「体感交货期」通常为分钟至小时级 |
| 自定义后训练权重上线周期 | 消费官方已支持的标准化共享 API 仅需分钟级；但企业私有后训练新权重（尤其是 `KDA + MLA` 等新混合注意力、自定义算子或如 `SWE-1.5` 配套的专属 speculative draft model）必须与 Cerebras 编译团队协作完成 `CSoft / CSL` 图编译与多晶圆流水线切分，上线周期为数天至数周，不适合每天频繁热切换全参 RL checkpoint | 通用 CUDA + vLLM / SGLang / TensorRT-LLM / Fireworks 训练-推理统一管线生态；后训练完成的开源权重（LoRA 或全参 checkpoint）上传对象存储后通常在数分钟到数小时内自助拉起生产端点，支持极高频率的 RL 实验与灰度发布 |

---

## 四、证据缺口与下一步跟踪节点（Open Gaps & Tracking Anchors）

以下缺口已同步登记至 `work/registry.sqlite3`（`status=open`）：

- `q-cbrs-dedicated-wafer-tco`（`not_disclosed`）：Cerebras `Dedicated Inference` 面向外部 AI 实验室定制权重时的每 `CS-3 / CS-4` 晶圆月度包机价格、起订规模，以及 WSE 单晶圆良率摊销与单晶圆 BOM 成本尚未公开，尚无法与 SemiAnalysis 给出的 NVIDIA `B200 / GB200 NVL72`（`1.73–1.86 美元/卡时`）做完全同口径毛利重算。
- `q-cbrs-capacity-crowding-out`：2027 年随 `700 MW` 数据中心逐步通电、OpenAI 承诺算力上量以及 Oracle OCI / AWS 渠道上线，中小客户（Cognition、Harvey 量级）获取 Cerebras Dedicated 配额是缓解还是被排他条款进一步挤出。
- `q-harvey-tenet-serving-metrics`（`not_disclosed`）：Harvey 尚未披露 `Tenet` 在 Fireworks `B300 / GB300` 集群上生产环境的真实并发分布（Batch Size 分布）、P50/P95 首字延迟（TTFT）与解码速率（TPOT），以及按法律任务折算的底层推理美元账单。

未来 2–4 个季度核心验证锚点：

1. Cerebras `Q4 2026` 财报：检验 Core 毛利率是否如指引从 `41%` 跳升至 `47%–49%`、Core 营业利润率是否转正（验证云推理规模效应能否盖过机房折旧与代工爬坡成本）；
2. `CS-4` 全面量产与 `CS-5`（`WSE-5`）2027 年初夏落地进展，以及异构分离推理在第三方 `InferenceX` 等独立基准下的每美元/每 MW 实测榜单数据；
3. Cognition 后续 `SWE-2.x / 3.x` 是否扩大或收缩 Cerebras 比重，以及 Harvey 后续版本是否引入类似 `Ultrafast` 的极速交互档位。
