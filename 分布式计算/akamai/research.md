# Akamai 初始研究：分布式推理与 Anthropic 合同

研究时点：2026 年 10 月 28 日。金额为美元，除特别注明。最新已核实季度为 2026 年第二季度。


gt：Akamai 是个有趣的研究分布式计算集群entry，研究的起因是：1. 计算越来越注重 latency，2. agent对 CPU 的任务编排依赖；两者 crossing很容易会发现Akam 站在两个需求的交叉处：在全球有 4000 多个 PoPs（Points of Present, 即分布式的网络接入口，CDN节点），PoP 的主要构成为 CPU和内存

（大概？）因此 Anthropics 和 Akam 签订了 7 年 $11.6B 的CPU 集群租赁协议，潜在 upside $20B，即rampup 后 ARR 贡献～$1.7-2.8B，按照 CPU 集群 20% 的净利率，EPS 贡献～$2-4；目前 **Diluted EPS (TTM):** $2.76 – $2.85 = 再造一个 AKAM 的新生态；

Risk 也很明显：
1. Capex 要求26-27 年投入 1.7B 和 3.1B，AKAM 现金为 3.1B，至少需要举债 1B，目前Credit market 极度紧张下，难以筹资，合约难以履行
2. Revenue 在 27 年只会确认 150-300M，fully ramp-up 需要28 年 -> 26- 27年的确认期会强依赖工程进度而面临大波动，并且 净利将在 27 年 capex 大投入下转负

-> 适合节点应该是 26 capex 投入之后，观察节点确认；
-> 如果有新订单，市场对股价做出什么反应，代表了市场对 AKAM 是否能履行的期望

### 对 gt 结论的事实复核（2026-10-28）

以下为复核意见，保留上方原观点不改写；评价对象为开头的 gt 投资结论，不代表全文或模型已完成独立审查。

1. **PoP 与 CPU 订单：机制成立，订单因果尚未证明。** 普通 CDN PoP 有 CPU、内存和网络设备，但 4,000 多个网络位置不能视为 4,000 多个能承载 Anthropic 专用 CPU 集群的机房。Anthropic 宣布的是 CPU 工作负载，具体任务、部署位置和选择 Akamai 的原因未披露；代码执行/agent 沙箱是有产品事实支撑的可能用途，并非该合同已证用途。Akamai Inference 和 Agent Sandbox 2026-10-27 发布时为 beta，亦无证据证明 Anthropic 使用。[SEC 合同](https://www.sec.gov/Archives/edgar/data/1086222/000119312526401048/d288154d8k.htm)；[Anthropic 沙箱](https://www.anthropic.com/research/claude-code-sandboxing)；[Akamai 产品](https://www.akamai.com/newsroom/press-release/akamai-launches-ai-inference-service-and-agent-execution-environment)。
2. **订单与上行情景**：116 亿是两个项目计划的条件性承诺，分别自服务开始起计七年；额外约 90 亿是潜在未来商业机会，不是已签收入或已获批新增算力。管理层给已有项目 2028 年末约 17 亿年化运行率；20 亿总潜力除以七年约 28.6 亿，仅是额外订单同期限、同步爬坡的算术情景，非公司指引。新增项目需要额外 CapEx，不可沿用现有 55 亿并假设免费增收。[SEC 公告](https://www.sec.gov/Archives/edgar/data/1086222/000119312526401048/d288154dex991.htm)；[管理层电话会](https://earningscalls.dev/transcripts/akamai-technologies-inc_akam_earnings_call_transcript_2026-09-24)。
3. **20% 净利率/EPS：算术成立但缺项目成本证据，且与现有基准模型不一致。** 若成熟收入 17 亿、净利率 20%、稀释股数 1.51854 亿，EPS 约 2.24 美元；28 亿对应约 3.69 美元。但公司没有披露该合同净利率；当前模型假设现金经营利润率 60%、55 亿按七年折旧、55 亿占用资金按年化 4.25% 计算机会成本，稳态净利约 40 万美元，而非 20%。在该例其他条件不变、25% 税率下，达到 20% 净利率需要约 86.6% 的现金经营利润率。融资取代现金时必须重估机会成本和债务利息、不能重复扣；股数也要考虑权证、转债及回购。2028 年末 17 亿为考虑权证公允价值冲减后的收入预测，不宜再按同一会计项重复扣收入。[电话会](https://earningscalls.dev/transcripts/akamai-technologies-inc_akam_earnings_call_transcript_2026-09-24)。
4. **现金与融资：3.1 亿美元是模型余额，不是实报。** 2026-06-30 公司现金及有价证券合计 46.16 亿美元，其中现金及等价物 14.80 亿、流动有价证券 18.75 亿、非流动有价证券 12.61 亿；不应把它们全部等同于现钞。模型在自设原业务现金流、CapEx、停回购并偿付 2027 到期 11.5 亿本金后，模拟 2026 年末余额 31.03 亿、2027 年末为保留 5 亿现金需新增约 12.24 亿；两者均为情景，不证明至少举债 10 亿。管理层称有 10 亿循环额度，实际可用额及契约约束待核。公司 2026 年 5 月已发行 35 亿美元可转债，6 月末可转债本金合计 76.4 亿；2033 年债券在 Q3 触发持有人转股权，实际行权和现金结算需后续核实。2026 年信贷合同暂时将最高杠杆比率从 3.50 提至 4.75，2026 年末起恢复至 3.50，按合同定义与例外计算；不等同以财报总债务/普通 EBITDA 机械判定违约。[Q2 10-Q](https://www.sec.gov/Archives/edgar/data/1086222/000108622226000086/akam-20260630.htm)；[授信修订](https://www.sec.gov/Archives/edgar/data/1086222/000119312526228949/d123781dex101.htm)。
5. **信贷环境和 2027 利润**：AI 基础设施融资成本与资金供给值得跟踪，但目前无足够针对 Akamai 的融资报价或近期债券利差，不能下“信用市场极度紧张、公司难以筹资、合同难以履行”的确定结论。公司 2026 年 5 月完成可转债发行是历史证据，不保证未来仍能按同等条件融资。[Q2 10-Q](https://www.sec.gov/Archives/edgar/data/1086222/000108622226000086/akam-20260630.htm)。原模型 2027 年 **新合同增量净利**为 −0.80 亿，**公司整体模拟净利**仍为正 4.52 亿；两者不得混同。项目负贡献来自具体折旧、现金利润率及利息假设，CapEx 本身不直接等于当年净利费用。项目交付和验收有条件，2026 年不预计确认该合同收入，2027 年预测 1.5–3 亿；收入确认进度有风险，但不能据此认定必然大幅波动。[项目演示](https://www.ir.akamai.com/static-files/59654fd2-bd7c-4090-9ded-737b72ab2bb7)；[SEC 合同](https://www.sec.gov/Archives/edgar/data/1086222/000119312526401048/d288154d8k.htm)。
6. **跟踪指标**：把 2026 实际采购/付款与预算、Jabil 内存回购及资产科目、2027 服务验收与收入/现金回款、净杠杆和授信契约、到期与提前转股、实际毛利和客户集中度作为可核查节点。新增订单后的股价反应还会受到合同利润率、所需新增投入、估值和市场环境影响，不能单独等同于履约概率。

**信用压力的补充证据，限于同行且未独立核验行情**：NotebookLM 中摩根士丹利 2026-10-23 CoreWeave 报告的索引原文称其无担保债券信用利差较 8 月末平均走阔约 300bp，并提示融资成本及可得性不确定；高盛 2026-10-19 报告索引称其无担保债券到期收益率约 13.5%–15%，同时明确表示这不代表以资产抵押融资为主的新债成本。这支持关注 AI 算力同行的信用压力，但公司、债券担保、报告日期与融资方式不同，不能套用为 Akamai 的融资价格或判定其无法融资。原始研报 PDF 与第三方债券逐笔行情未获得，Notebook 索引内容在原始答复引用映射中保留。[查看原笔记本](https://notebook.google.com/notebook/aebbbb1d-f497-4850-ab5d-f6b2f53c5e05)。



## 结论

Akamai 正从内容分发与网络安全，向云基础设施延伸。在 AI 价值链里，它同时具备三个位置：分布式网络入口与安全服务、提供 CPU/GPU 算力的云基础设施，以及刚进入测试阶段的托管模型推理与 agent 执行服务。这些能力有协同，但不能把它们视为同一业务或同一合同。

Anthropic 合同推进的是在 Akamai 云上建设并交付大规模、专用的 **CPU 计算容量**，服务 Anthropic 增长中的 CPU 工作负载。它验证了 AI 客户对 Akamai 基础设施的需求，却不能单凭合同证明 Claude 的 GPU 推理、模型训练或 agent 执行已落在 Akamai 的分布式节点。新发布的推理服务是另一项产品，公开资料未证明 Anthropic 使用它。

![[Pasted image 20261028163820.png]]
https://www.ir.akamai.com/static-files/59654fd2-bd7c-4090-9ded-737b72ab2bb7

![[Pasted image 20261028163952.png]]


| 2027E 新项目净利计算            | 百万美元       |          |          |
| ------------------------ | ---------- | -------- | -------- |
| 预计收入                     | **225.0**  |          |          |
| 假设现金经营利润率 60%，得到现金经营利润   | **+135.0** |          |          |
| 减：预计折旧                   | **−104.0** |          |          |
| 减：动用现金后减少的利息收入           | **−138.1** |          |          |
| **税前利润影响**               | **−107.1** |          |          |
| 按 25% 假设税率计算税收影响         | **+26.8**  |          |          |
| **税后净利润影响**              | **−80.3**  | ##       |          |
|                          | 2025A      | 2026E    | 2027E    |
| 稀释加权平均股数，百万股             | 147.023    | 151.854  | 151.854  |
| 模拟净利润，百万美元               | 452.0      | 475.2    | 452.1    |
| **GAAP 稀释 EPS，美元/股**     | **3.07**   | **3.13** | **2.98** |
| Anthropic 项目 EPS 影响，美元/股 | —          | −0.09    | −0.53    |

边缘计算和推理：市场规模及实现方式

### 先定义：我们在数哪一个市场？

边缘计算是将计算放到比集中式云更接近用户或数据的地方；“边缘”是相对位置，不是一种芯片、固定距离或某个公司的产品。边缘推理是其中运行已训练 AI 模型的子集。手机和汽车里的模型、工厂现场服务器、运营商节点、区域云均可能被不同研究纳入；它们的硬件采购与云服务收入不能混为一谈。

| 市场估计 | 当前/基期 | 预测 | 实际覆盖与局限 |
|---|---:|---:|---|
| IDC：广义边缘计算支出，2026 年 2 月预测 | 2025 年约 2,650 亿美元，IDC 估计 | 2029 年接近 4,500 亿；标题称增长约 15% | 包含企业及服务商多种技术支出，涵盖 AI、IoT、AR/VR、无人机和机器人等，不等于 AI 或 Akamai 可获收入；按两个约数计算 2025–2029 CAGR 约 14.2%，IDC 标题 15% 的精确起止口径未说明。[IDC 原文](https://www.idc.com/resource-center/press-releases/edgecomputingforecast/) |
| Grand View Research：广义 Edge AI | 2025 年 249 亿美元估计；2026 年 300 亿美元预测 | 2033 年 1,187 亿，2026–2033 CAGR 21.7% | 含硬件、软件、边缘云基础设施和服务；2025 硬件占 51.8%，消费电子为最大终端行业。不能把它全部当网络侧推理服务；方法和边界详度有限。[研究机构](https://www.grandviewresearch.com/industry-analysis/edge-ai-market-report) |
| Gartner：终端侧 AI 处理芯片 | 不提供可比基期 | 2030 年约 946 亿美元机会（标题） | 只针对终端 AI 处理器，和云推理服务的营收不同，不能与广义 Edge AI 直接相加；公开摘要没有可复算 CAGR。[Gartner 摘要](https://www.gartner.com/en/documents/7849481) |
| 网络侧分布式推理云服务 | 未找到可信、统一公开基期 | 未找到可核查的独立市场预测 | 区域 GPU 租赁、托管推理及相关软件的狭义市场，排除终端设备与厂商自建，不可用上述数字替代。 |

IDC 预计 2029 年服务提供商边缘投资（包括 MEC、CDN、网络功能虚拟化）接近总市场的三分之一；这是服务商**投资支出**，不等于服务商收入，更不全是 AI，不宜再与总量相加。Grand View 和 IDC 来源、范围、预测时点不同，不可据此把 300 亿除以 2,650 亿来求 AI 渗透率。原始用户提供图片中“2030 年约 20 GW 分布式算力”属于未标明作者和模型的行业渠道判断，研究样本、地理范围、负荷和电力口径未核实；GW 是功率容量，不是年度收入、发电量或已经建设的能力。

### 技术路径：数据在哪里，模型在哪运行？

1. **终端侧**：手机、摄像头、车辆或机器上的 CPU/NPU/GPU 直接执行模型；无需每次把数据传给远端，适合离线、实时和隐私敏感的局部任务，但受设备功耗、散热和内存限制。
2. **企业现场边缘**：工厂或门店部署本地服务器，汇总多台摄像头、传感器的数据并运行模型；可共享硬件、减少原始数据外传，但企业需承担硬件、运维和故障恢复。
3. **网络/区域边缘**：在运营商机房、第三方托管机房或区域云部署 CPU/GPU 集群，向多个客户提供算力或推理 API；要同时考虑用户、数据和后端系统的距离。Akamai/Cloudflare 在此有不同产品方案，但不同 PoP 不意味着均有 GPU。
4. **中心云**：大型训练集群或数据中心运行复杂模型，适合高度集中、需求大且可批处理的任务；可能面临用户到算力或私有数据的网络往返。

常见混合链路：终端采集 → 本地预处理或初筛 → 网络节点认证与路由 → 就近或中心区域模型推理 → 结果返回 → 中心云记录、治理和更新。也可以直接在本地完成全部推理；推理的“位置”由模型、数据、规则和客户部署决定，不是所有请求都经过所有层。

**延迟示例，非实测**：如果中心云网络往返 100 毫秒、近端 20 毫秒，且排队和模型计算均为 200 毫秒，则首个结果从 300 降到 220 毫秒，改善约 27%，不是 5 倍。若近端服务器排队更长，或应用要频繁跨地区读取数据库，结果可能反转。测量应分用户到入口、入口到模型、排队、模型首 token、后续输出、工具与数据库调用；并记录 P50/P95 与峰值负载。Cloudflare 文档也明确应用靠近数据库可能比靠近用户更快。[Cloudflare 工作负载选址](https://developers.cloudflare.com/workers/configuration/placement/)。

**带宽示例**：假设 100 台摄像头各传 4 Mbps，向远端持续发送原始视频合计 400 Mbps；本地识别后只上传告警可能减少广域数据，但仍需视频回放、模型校验和告警传输，实际节省须测量。4 Mbps/摄像头仅为例子，不代表所有设备或项目。[NVIDIA 视频分析示例](https://developer.nvidia.com/blog/accelerating-iva-using-ultra-efficient-5g-core-with-mavenir-and-nvidia-edge-ai/)。

### 硬件与软件依赖：哪一环成为瓶颈？

| 要素 | 在做什么 | 应关注的约束 |
|---|---|---|
| CPU | 网络接入、数据预处理、代码执行、系统调度，也能运行部分模型 | 单核/多核能力、内存带宽、并发与成本；Anthropic 合同仅确认 CPU，具体任务未知 |
| GPU / NPU / ASIC / FPGA | 加速模型计算；GPU 通用，NPU/专用芯片可面向特定功耗和模型优化 | 算子支持、算力、精度、可编程性、生态、功耗与价格；边缘推理不是一定依赖 NVIDIA GPU |
| 显存/内存 | 放模型权重与运行中状态，尤其长上下文 KV 缓存 | 容量、带宽、并发；模型放不下可能拆分或卸载至主机内存，性能和成本会变化 |
| 网络/互联 | 传输请求、数据、结果；多卡/多机协作还要交换中间状态 | 端到端延迟、带宽、路由、网络稳定性；多个分散点不天然等于一个低延迟 GPU 集群 |
| 存储 | 保存模型权重、日志、容器和必要数据 | 模型载入时间、版本同步、更新和数据治理 |
| 电力、机房和散热 | 为服务器持续供电、冷却和提供物理空间 | 可用 MW、每机柜功率密度、供电可靠性、并网、UPS、散热；小站点电源更易找只是可能性，不保证已接入 |
| 软件控制面 | 模型格式/量化、推理引擎、容器、调度、监测、扩缩容及安全 | 精度下降、冷启动、模型版本同步、重试和故障转移、空闲率；重复部署增加运行复杂度 |

**内存直观例子**：70 亿参数模型若以 16 位精度保存权重，理论约 14 GB；四位量化的纯权重理论约 3.5 GB。但实际还要 KV 缓存、运行时和量化元数据；量化可损害精度，能否装进设备与吞吐必须实测。[NVIDIA 模型显存说明](https://developer.nvidia.com/blog/mastering-llm-techniques-inference-optimization/)。

**部署步骤**：确定应用的准确率、隐私、延迟和吞吐目标 → 测出用户和数据位置 → 选择终端、本地、区域或中心运行 → 确定模型及 CPU/GPU/NPU → 配置推理引擎和多实例调度 → 比较含硬件折旧、电力、网络、机房、软件和人力的每任务总成本 → 小范围验证并监控故障和模型质量。推理成本由需求、并发、单位计算价格、利用率、冗余和模型大小共同决定；分布式节点更靠近用户，但在低负载时可能因算力碎片化和冗余提高单位成本。

### Akamai 对应的环节

Akamai 将边缘 PoP 用于交付、安全、路由和轻量函数，在部分区域提供 CPU/GPU 云实例，以及测试中的托管推理/Agent 服务。2026 年 3 月公告称采购数千块 NVIDIA Blackwell GPU，并采用 RTX PRO 6000 Blackwell 与 BlueField-3 DPU 的方案；这是公司公布的硬件路线和采购计划，不能推断所有节点都装有 GPU，也不能和 Anthropic 的 CPU 合同混同。[Akamai 采购公告](https://www.akamai.com/newsroom/press-release/akamai-to-deploy-thousands-of-nvidia-blackwell-gpus-to-create-one-of-the-worlds-most-widely-distributed-ai-platforms)；[GPU 实例](https://techdocs.akamai.com/cloud-computing/docs/gpu-compute-instances)。

**投资问题**：应该跟踪狭义网络边缘推理的付费需求、部署可用 GPU 数量/上架速度、时延和数据位置要求、算力利用率、每任务价格与每点电力机房成本；CIS 收入包含非推理工作负载，不能把其全部当作边缘推理市场份额。IDC 和 GVR 数字分别为第三方预测，不能直接转换为 Akamai 收入预测。

## 追问：PoP 实物、具体客户订单与 NVIDIA 合作

### PoP 是什么：一个放在机房里的网络服务点

PoP（point of presence）是网络服务商在某个位置提供接入和服务的节点，通常部署在运营商机房、互联网交换点附近或第三方托管数据中心。想象机房里有机柜、交换机、光纤和若干服务器：服务器有 CPU、内存、硬盘和网卡，装有缓存、网络安全和计算软件；部分计算站点还配置 GPU。机房提供供电、冷却、物理安全和网络连接。不同节点的规模、服务能力、资产归属和部署协议都可能不同，并非每个点都是独立数据中心，也并非每个点都有 GPU。[Akamai 边缘服务器](https://www.akamai.com/glossary/what-is-an-edge-server)；[Cloudflare 第 12 代服务器](https://blog.cloudflare.com/gen-12-servers/)。

与手机基站的相同点是两者都分布在许多地点，让服务离用户更近；区别是基站靠天线和无线电把手机接入运营商网络，PoP 是通过有线网络相连的计算和网络设备。一个请求示意：手机 → 基站或 Wi-Fi → 运营商网络 → Akamai PoP；如缓存命中就返回内容，否则可能回源站。PoP 的功能不是提供移动无线覆盖。

**怎么维护？** 设备投运前需要选址、托管合同、上架、供电、联网、软件部署；运行中由集中运维监控设备和网络状态，远程配置、升级和流量调度；故障时可将流量切到其他可用设备或节点，硬件损坏则需现场人员处理。实际分工取决于协议。Akamai 2019 年 IP Application Accelerator 条款提供一个具体例子：客户提供场地、连接及现场基础协助；Akamai 提供并监控、维护、运营设备和软件。该条款只证明特定产品的合同模式，不能概括所有 PoP。[Akamai 服务条款](https://www.akamai.com/content/dam/sdl-content/us/en/multimedia/documents/akamai/akamai-services-oct-2019.pdf)；[故障与流量切换](https://www.akamai.com/glossary/what-is-an-edge-server)。

### 谁购买了什么：收入、订单和案例分别看

| 公司 / 客户 | 交付与用途 | 合同或营收证据 | 分类边界 |
|---|---|---|---|
| Akamai / Anthropic | 专用云计算容量；管理层说新协议为 CPU 工作负载 | 2026 年 9 月新增 116 亿美元多年协议，服务预计 2027 年开始；按合同交付及可用性等条件执行 | 合同总额不等于已确认营收；不能证明 Claude GPU 推理在 Akamai 运行，也不能确定具体 CPU 任务或部署点。[公告](https://www.akamai.com/newsroom/press-release/2026/akamai-announces-11-6-billion-multi-year-agreement-with-anthropic-to-support-growing-demand) |
| Akamai / 未具名美国科技公司 | 在高密度数据中心提供数千块 NVIDIA Blackwell GPU 专用集群及其他云服务 | 四年 2 亿美元承诺 | 公告证明专用 GPU 集群订单，不披露客户名、已确认收入或具体工作负载，不能把全部解释为分散 PoP 的推理收入。[技术公告](https://www.ir.akamai.com/news-releases/news-release-details/akamai-discloses-technical-details-ai-cluster-deal) |
| Akamai / 另一未具名美国科技客户 | 云基础设施支持机器人开发 | 2026 年 Q2 宣布四年超过 6 亿美元；包含在当年截至 Q2 签约合计超过 28 亿美元中 | 金额为未来多年合同，不是当季收入；客户身份、GPU 型号、生产部署以及全部 28 亿订单明细未披露。[Q2 业绩](https://www.sec.gov/Archives/edgar/data/1086222/000108622226000083/exhibit991-q22026.htm) |
| Akamai / IRIAM | 视频分发服务器，使用 Akamai 云服务 | 公司案例披露迁移和出站流量成本动机，金额未披露 | 具体云计算客户，但不是已证实 AI 推理订单。[客户案例](https://www.akamai.com/site/en/documents/customer-story/2025/iriam.pdf) |
| Cloudflare / Cyndx | 用 Workers AI 进行摘要，并使用 AI Gateway 管理调用 | 公司案例列有客户与使用场景，合同金额及实际收入未披露 | Gateway 可路由第三方模型，经过 Gateway 不代表模型一定在 Cloudflare 上运行。[公司案例](https://www.cloudflare.com/vi-vn/ai-solution/) |
| Cloudflare / Suki-Desu | 使用 Workers AI 翻译多个 WordPress 网站的文本 | 公司案例列有客户与用途，金额及已确认收入未披露 | 证明产品使用案例，不足以判断客户规模和单位经济性。[公司案例](https://www.cloudflare.com/vi-vn/ai-solution/) |
| Cloudflare / LunarCrush | 使用 Workers AI 支持 AI 应用 | 公司材料列有案例和客户陈述，金额、工作负载与独立营收未披露 | 客户引用来自供应商营销材料，并非独立验证的经营回报。[公司材料](https://cf-assets.www.cloudflare.com/slt3lc6tev37/6pP4VPmRupF19XYxmJlHNZ/2a724dcb60962596948ff127c3dd5a82/Connectivity-cloud-AI-ebook.pdf) |

**已实现收入**：Akamai 2026 Q2 CIS 为 9,930 万美元，同比增长 39%；包括计算、存储和其他基础设施，不是边缘 AI 推理收入。Cloudflare Q2 总收入 6.961 亿美元，同比增长 36%；公司未在该财报单列 Workers、Workers AI 或边缘推理收入，不能把总收入或客户案例当作这项业务营收。[Akamai Q2](https://www.sec.gov/Archives/edgar/data/1086222/000108622226000083/exhibit991-q22026.htm)；[Cloudflare Q2](https://www.sec.gov/Archives/edgar/data/1477333/000147733326000053/q226exhibit991.htm)。Anthropic 新增 116 亿和先前超过 28 亿属于公司描述的不同签约范围，但没有必要将其他具体客户订单加总：个别订单可能已包含在 28 亿中。

### NVIDIA、Akamai / Cloudflare 和大型云：合作内容

| 合作 | 实际内容 | 证据边界 |
|---|---|---|
| NVIDIA × Akamai | Akamai 计划部署数千块 RTX PRO 6000 Blackwell Server GPU，并采用 BlueField-3；2026 年推出基于 NVIDIA AI Grid 参考设计的分布式推理编排。2 亿美元客户项目也是 Blackwell GPU 专用集群 | 硬件供给、架构与软件合作；4,400 个网络位置不等于 4,400 个 GPU 推理点；未披露 NVIDIA 销售金额、单点配置或项目利润。[GPU 公告](https://www.akamai.com/newsroom/press-release/akamai-to-deploy-thousands-of-nvidia-blackwell-gpus-to-create-one-of-the-worlds-most-widely-distributed-ai-platforms)；[AI Grid](https://www.ir.akamai.com/news-releases/news-release-details/akamai-launches-ai-grid-intelligent-orchestration-distributed) |
| NVIDIA × Cloudflare | 2023 年双方宣布 Workers AI 在 Cloudflare 网络上使用 NVIDIA GPU；2026 年 Workers AI 上线 NVIDIA Nemotron 3 Super 模型 | 既有 GPU/软件合作，也有模型分发。2023 年 GPU 覆盖说法是当时目标，不能当作目前每个站点的实际部署；未披露采购金额。[2023 公告](https://www.cloudflare.com/en-gb/press/press-releases/2023/cloudflare-powers-hyper-local-ai-inference-with-nvidia/)；[模型文档](https://developers.cloudflare.com/changelog/product/workers-ai/) |
| NVIDIA × Google Cloud | G4 云实例搭载 RTX PRO 6000，面向推理等任务；Google Distributed Cloud 可把 NVIDIA Blackwell 系统及 Gemini 部署到客户现场 | 一个是 Google 公有云实例，另一个是客户现场托管，均不等于所有 Google AI 运行在 NVIDIA 上；Google 也有自研 TPU。[G4](https://cloud.google.com/blog/products/compute/google-cloud-ai-infrastructure-at-nvidia-gtc-2026/)；[客户现场](https://cloud.google.com/blog/products/ai-machine-learning/run-gemini-and-ai-on-prem-with-google-distributed-cloud) |
| NVIDIA × AWS | AWS 2026 年公布从当年起在全球区域部署超过 100 万块 NVIDIA GPU 的计划，并提供搭载 RTX PRO 4500 的 EC2 G7；支持 NVIDIA NIXL 与 AWS EFA、Trainium 的软件协同 | 这是计划和已发布实例，不代表 100 万块全部已交付，也不是边缘部署数量或合同金额。[合作公告](https://aws.amazon.com/blogs/machine-learning/aws-and-nvidia-deepen-strategic-collaboration-to-accelerate-ai-from-pilot-to-production/)；[G7 上市](https://aws.amazon.com/blogs/aws/announcing-amazon-ec2-g7-instances-accelerated-by-nvidia-rtx-pro-4500-blackwell-server-edition-gpus/) |

供应链上，NVIDIA 提供 GPU、网络/系统或软件，Akamai、Cloudflare 和云厂商组合自身机房、网络和运维，对开发者或企业销售租赁算力及托管服务。NVIDIA 的模型也可通过平台提供给开发者。设备购买、合同承诺、已确认服务收入和股权投资是不同经济关系，公开的上述合作公告没有给出足以计算各方毛利或交易金额的合同明细。

## 财务比较：2023—2025 年及 2026 年最新季度

截至 2026 年 10 月 28 日，最新确认的完整季度为 2026 Q2。金额除注明外为百万美元。同比使用报告汇率；净利率为 GAAP 净利润除以收入。业务收入类别不自动等于会计报告分部，两家公司均没有披露业务线的独立净利润和净利率。

### Akamai：按 2025 年报的历史收入分类

| 收入类别 | 2023 收入 / 同比 | 2024 收入 / 同比 | 2025 收入 / 同比 | 各业务净利率 |
|---|---|---|---|---|
| 安全 | 1,765.3 / +14% | 2,042.7 / +16% | 2,243.4 / +10% | 未披露 |
| 内容交付 Delivery | 1,542.4 / −8% | 1,318.1 / −15% | 1,256.7 / −5% | 未披露 |
| 云计算 Cloud computing | 504.2 / +24% | 630.4 / +25% | 708.1 / +12% | 未披露 |
| 其中：云基础设施 CIS | 174.4 / 未核实 | 230.0 / +31.9% | 313.9 / +36.5% | 未披露；是云计算的子集，不可再次加总 |
| 合计 | 3,811.9 / +5% | 3,991.2 / +5% | 4,208.2 / +5% | 公司整体分别 14.4%、12.7%、10.7% |

按财报公布的四舍五入同比；CIS 同比由披露的金额计算。2023 CIS 同比尚未核实，不按零处理。[Akamai 2025 年报](https://www.sec.gov/Archives/edgar/data/1086222/000108622226000022/akam-20251231.htm)；[2023 财报](https://www.sec.gov/Archives/edgar/data/1086222/000108622224000013/exhibit991-q42023.htm)。

2026 年调整分类，其他云应用从云计算类别转入“交付及其他云应用”。**2026 Q2 的新分类与上表旧分类不能直接拼接**；同期数由公司重列。

| 2026 Q2 新分类 | 收入 | 同比 | 净利率 |
|---|---:|---:|---|
| 安全 | 604.4 | +10% | 未披露 |
| 交付及其他云应用 | 395.9 | −6% | 未披露 |
| 云基础设施 CIS | 99.3 | +39% | 未披露 |
| 公司合计 | 1,099.7 | +5% | 7.2%，公司整体 |

[2026 Q2 财报及重列](https://www.sec.gov/Archives/edgar/data/1086222/000108622226000083/exhibit991-q22026.htm)。公司称历史 Delivery 有盈利能力并产生现金流，但未量化其单独净利率，不可将公司整体利润分摊。[公司 2025 年致股东信](https://www.sec.gov/Archives/edgar/data/1086222/000108622226000029/akam-20260305.htm)。

### Cloudflare：财报没有按产品线单列收入和净利率

| 期间 | 公司总收入 | 同比 | GAAP 净利润/亏损 | 公司整体净利率 |
|---|---:|---:|---:|---:|
| 2023 | 1,296.7 | +33.0% | −183.9 | −14.2% |
| 2024 | 1,669.6 | +28.8% | −78.8 | −4.7% |
| 2025 | 2,167.9 | +29.8% | −102.3 | −4.7% |
| 2026 Q2 | 696.1 | +36% | −170.0 | −24.4% |

安全、应用交付、Workers、Workers AI、R2 等产品的独立收入、增速、净利率均未单独披露。整体净利率不能用作各业务净利率。公司报告一个业务分部；2026 Q2 包含 1.507 亿美元重组及其他费用，且股权报酬及相关雇主税费为 1.406 亿美元，两者核算范围可能有交叉，不应直接加总。季度利润率不能简单代表全年。[2025 年报](https://www.sec.gov/Archives/edgar/data/1477333/000147733326000016/cloud-20251231.htm)；[2026 Q2](https://www.sec.gov/Archives/edgar/data/1477333/000147733326000053/q226exhibit991.htm)。

### 估值：年度截面与当前

| 截面 | Akamai GAAP PE | Cloudflare GAAP PE | 方法 |
|---|---:|---:|---|
| 2023 年末 | 33.62x | 不适用：全年亏损 | Akamai 年末价 118.35 / 2023 稀释 EPS 3.52 |
| 2024 年末 | 29.25x | 不适用：全年亏损 | 年末价 95.65 / 2024 稀释 EPS 3.27 |
| 2025 年末 | 28.42x | 不适用：全年亏损 | 年末价 87.25 / 2025 稀释 EPS 3.07 |
| 2026-10-27 收盘 | 约 36.1x | 不适用：最近 12 个月亏损 | Akamai 股价 99.59 / 估算 TTM 稀释 EPS 2.76 |

前三年是年末股价除以随后披露的该年度全年 EPS 的**事后回算**，不能作为年末当时可交易的信息；不是完整三年每日 PE 范围。2026 TTM EPS 以 2025 年全年 EPS 3.07 − 2025 上半年 EPS 1.53 + 2026 上半年 EPS 1.22 近似；不同时段加权稀释股数和四舍五入导致误差。其他平台因股本、EPS 及时间口径可能不同。[Akamai 历史价格与 EPS](https://www.macrotrends.net/stocks/charts/AKAM/akamai-technologies/pe-ratio)；[最近收盘价](https://stockanalysis.com/stocks/akam/history/)；[2026 Q2 EPS](https://www.sec.gov/Archives/edgar/data/1086222/000108622226000083/exhibit991-q22026.htm)。

Cloudflare 2026-10-27 收盘 327.80 美元；按管理层 2026 全年 non-GAAP EPS 指引 1.25–1.26 美元作静态计算约 260–262x。该数是以**管理层预测的调整后 EPS**计算，不是 GAAP TTM PE，也不是滚动未来 12 个月一致预期，不能与上表 Akamai GAAP 倍数直接比。实际结果可能偏离指引。[收盘价](https://stockanalysis.com/stocks/net/history/)；[2026 Q2 指引](https://www.sec.gov/Archives/edgar/data/1477333/000147733326000053/q226exhibit991.htm)。

## 业务从哪里赚钱

| 2026 年第二季度 | 营收 | 占总营收 | 同比 | 客户购买的主要能力 |
|---|---:|---:|---:|---|
| 安全 | 6.04 亿 | 54.9% | +10% | 应用、API、DDoS、机器人与网络安全 |
| 交付及其他云应用 | 3.96 亿 | 36.0% | −6% | 内容及应用交付等 |
| 云基础设施服务 CIS | 0.99 亿 | 9.0% | +39% | 云计算、存储与相关基础设施 |
| 合计 | 11.00 亿 | 100% | +5% | 分类四舍五入，分项之和有误差 |

安全仍是收入支柱，云基数小但增长快，交付业务拖累增长。公司 2026 年调整了报告分类，长期比较需使用重列口径，不能直接把旧分类与新分类拼接。[公司第二季度业绩](https://www.sec.gov/Archives/edgar/data/1086222/000108622226000083/exhibit991-q22026.htm)；[2025 年报](https://www.sec.gov/Archives/edgar/data/0001086222/000108622226000046/akam2025annualreport.pdf)。

## 先从一条网络请求理解 Akamai

**例子：人在香港打开一家美国电商网站。** 手机通过运营商或 Wi-Fi 接入互联网；输入网址后，域名解析（DNS）帮助设备找到应连接的网络地址；手机发出请求，网站的服务器处理后返回网页、商品图片和账户信息。真实路径取决于网站配置和网络状况，不一定是地理上最短的路线。[Akamai 内容交付说明](https://techdocs.akamai.com/start/docs/how-akamai-works)。

- **源站**：商家运行应用和保存原始数据的服务器，可由商家自己管理，也可租用 AWS 等云厂商的服务器。
- **CDN 和缓存**：对可以共享和缓存的图片、视频或软件包，商家允许 Akamai 在靠近用户的边缘服务器保存副本；香港用户请求时，如副本命中且仍有效，可由边缘服务器返回，减少源站跨境传输及负载。缓存未命中或过期时，需要回源获取。银行卡余额等私人、动态信息通常不能当作人人共用的静态文件缓存；策略由应用配置决定。[CDN 工作原理](https://www.akamai.com/glossary/what-is-a-cdn)；[动态登录示例](https://www.cloudflare.com/learning/cdn/glossary/origin-server/)。
- **PoP、带宽和时延**：PoP 是网络服务位置；带宽是单位时间可传的数据量，时延是请求和响应耗时。它们不是同一指标。边缘节点可减少部分网络距离和源站压力，但性能还取决于路径、拥塞、缓存命中、后端处理和用户接入网络。
- **入口安全**：请求途经 Akamai 时，WAF 可检查针对网站/API 的恶意请求，DDoS 防护吸收或过滤大规模攻击，Bot 管理区分自动化流量；具体识别和保护效果依赖配置。客户端没有购买商品也可能制造网络流量，流量不等于真实交易量。
- **内部安全**：Guardicore 微隔离管理企业内部服务器之间哪些通信被允许，用来限制入侵后的横向移动；它可以部署在本地或云环境，并不要求每一条内部通信都绕行 Akamai CDN。[客户案例](https://www.akamai.com/resources/customer-story/sbi-shinsei-bank)。
- **云计算和推理**：如果商家需要运行软件，可以向 Akamai 或其他云公司租用 CPU、GPU、内存与存储。CDN 主要解决“把内容送到用户”；云计算主要解决“在哪里运行程序”；GPU 推理是用已训练模型处理请求。两者可由同一供应商组合提供，也可由不同供应商分别提供。

**谁付款？** 通常是网站、应用、媒体公司或企业采购 Akamai 的服务，终端用户从企业消费产品；具体交易可能通过运营商、集成商或转售伙伴完成。Akamai 年报称大多数安全、交付和云服务按持续提供服务确认收入，常有月度使用承诺，超额使用在发生期间确认；产品价格、客户协议和核算方式并不完全相同。[2025 年报](https://www.sec.gov/Archives/edgar/data/1086222/000108622226000022/akam-20251231.htm)。

## 业务线：客户、产品和竞争机制

| 业务 | 客户任务及主要产品 | 收费及增长机制 | 竞争与边界 |
|---|---|---|---|
| 安全 | 企业保护网站、API 与应用：WAF/WAAP、DDoS、防机器人；Guardicore 为内网应用做微隔离，减少横向移动 | 平台服务和持续安全防护；2025 年 Guardicore 与 API 安全合计收入 2.93 亿、同比 +43%，但该数字并非完整安全业务 | 分布式网络同时承载流量与防护，有利组合销售；需要对比 Cloudflare、云厂商及专门安全厂商的功能和价格，未证明全面领先 |
| 交付及其他云应用 | CDN 缓存、流媒体交付、网站和应用加速、流量管理；其他云应用也归入此类 | 流量和服务需求驱动；2026 Q2 营收同比 −6%，反映成熟业务承压 | 客户可比较其他 CDN、云厂商交付与自建；该分类并非纯 CDN |
| 云基础设施 CIS | Linode 扩展而来的计算、存储、网络、云原生；包括专用计算和边缘函数 | 按资源或合同采购；2025 全年 CIS 3.14 亿、同比 +36%，2026 Q2 0.993 亿、同比 +39% | 与 AWS、Google Cloud、Azure 等争夺计算需求；分布式覆盖不等于产品广度或价格一定胜出 |
| 托管推理与 agent 执行 | 通过 API 使用模型推理，或为 agent 提供隔离执行环境 | 测试中的 serverless 按 token 计费与专用 GPU；不单列收入 | 平台可能提高开发者易用性，但 beta、商用化程度和利润率尚未验证；不可将 Anthropic 专用 CPU 合同自动归入此项 |

Akamai 2022 年完成约 9 亿美元的 Linode 收购，标志其向云基础设施扩张；2025 年 Guardicore 与 API 安全和 CIS 具体数字来自公司披露，产品并不对应独立可加总的报告分部。[2025 年报](https://www.sec.gov/Archives/edgar/data/1086222/000108622226000022/akam-20251231.htm)；[2025 业绩](https://www.ir.akamai.com/news-releases/news-release-details/akamai-reports-fourth-quarter-2025-and-full-year-2025-financial)；[Linode 收购](https://www.ir.akamai.com/news-releases/news-release-details/akamai-technologies-completes-acquisition-linode-provide)。

### 按下游客户拆开：客户为何付款、实际收到什么

| 下游客户及任务 | Akamai 的交付内容 | 可观察的购买机制 / 风险 | 客户实例与出处 |
|---|---|---|---|
| 媒体、视频网站：同时给大量观众播放 | 视频缓存与分发、直播适配、边缘 DNS；可加防护 | 网络流量、峰值、地区和服务组合影响采购；续约单价下降或客户自建会压收入 | [DPG Media](https://www.akamai.com/resources/customer-story/dpg-media) 使用下载、媒体交付和安全；[爱奇艺](https://www.akamai.com/site/en/documents/customer-story/2022/iqiyi-edgeworkers-customer-story.pdf) 使用 CDN 支持海外视频。案例为公司披露，非全行业份额 |
| 零售、电商和数字平台：购物网站不能慢或被攻击 | 网站加速、WAF/API 防护、Bot 管理与 DNS 等组合 | 客户购买可用性、响应速度和攻击防护，常同时购买多种产品；不能将一名案例客户对应某项收入金额 | [DPG Media](https://www.akamai.com/resources/customer-story/dpg-media) 同时使用交付和 App & API Protector；[Cloudflare 的 Canva 案例](https://www.cloudflare.com/case-studies/canva/)体现同类采购可替代 |
| 银行及大型企业：防止入侵横向扩散 | Guardicore 可视化服务器通信、设定微隔离策略，覆盖内部及云环境 | 关注资产覆盖、部署难度、误拦截、合规、与旧系统兼容；许可与服务条款需逐合同确认 | [SBI Shinsei Bank](https://www.akamai.com/resources/customer-story/sbi-shinsei-bank) 选择 Guardicore；[欧洲银行案例](https://www.akamai.com/resources/customer-story/segmentation-case-study-large-european-bank) 描述环境隔离和跨云部署 |
| 开发者、视频应用和中型企业：租服务器运行软件 | Linode CPU/GPU 实例、内存、存储、网络及云原生服务 | 按实例配置、时间、存储及传输等计价，实际方案和地区不同；不能用零售价推算 Anthropic 合同价 | [IRIAM 公开案例](https://www.akamai.com/site/en/documents/customer-story/2025/iriam.pdf) 介绍将视频分发服务器从超大规模云转向 Akamai，动机是出站流量成本；这是个案而非普遍价格结论 |
| AI 模型公司：需要专用计算容量 | Anthropic 合同约定专用云计算容量及支持，管理层称本次合同全部 CPU | 多年承诺与交付挂钩，交付后使用或付款的说法来自管理层电话会转录；项目资本开支及客户集中度高 | [Akamai 合同公告](https://www.akamai.com/newsroom/press-release/2026/akamai-announces-11-6-billion-multi-year-agreement-with-anthropic-to-support-growing-demand)；[SEC 8-K](https://www.sec.gov/Archives/edgar/data/1086222/000119312526401048/d288154d8k.htm) |
| 企业或开发者：通过 API 调用模型 | Akamai Inference 和 Agent Sandbox，公开时处于 beta | 可按 token 或专用 GPU 等方式采购，真实收入和客户尚不清楚 | [2026 年产品公告](https://www.akamai.com/newsroom/press-release/akamai-launches-ai-inference-service-and-agent-execution-environment)；不能把 Anthropic 合同直接归入该产品 |

**渠道与客户集中度**：公司通过直销、系统集成商和转售伙伴销售；客户案例不能代替各行业收入分布。2023–2025 年，Akamai 称没有单一客户占当年总收入 10% 或以上；这一历史事实不能推断 Anthropic 投产后集中度。[2025 年报](https://www.sec.gov/Archives/edgar/data/1086222/000108622226000022/akam-20251231.htm)。

### 业务如何演变：从 CDN 到安全，再到云计算

| 时期 | 发生了什么 | 业务意义 |
|---|---|---|
| 早期–2014 | 以分布式 CDN 交付网页与媒体；2014 年收购 Prolexic | 从加速交付扩展到 DDoS 防护；网络节点可同时承担交付和安全任务。[2014 年报](https://www.akamai.com/content/dam/sdl-content/us/en/multimedia/documents/akamai/akamai-annual-report-2014.pdf) |
| 2021 | 约 6 亿美元收购 Guardicore | 进入企业内部微隔离，安全范围从网站入口延伸到服务器之间的通信。[公司公告](https://www.ir.akamai.com/node/27446) |
| 2022 | 约 9 亿美元完成 Linode 收购 | 获得云主机、开发者工具和计算能力，开始扩展基础设施服务。[公司公告](https://www.ir.akamai.com/news-releases/news-release-details/akamai-technologies-completes-acquisition-linode-provide) |
| 2024 | 约 4.5 亿美元收购 Noname Security | 扩大 API 安全能力。[公司公告](https://www.akamai.com/newsroom/press-release/akamai-completes-acquisition-of-api-security-company-noname) |
| 2025–2026 | 扩展云基础设施、GPU 与边缘功能；2026 年签 Anthropic 合同，推出推理和 Agent beta | 从安全和交付延伸到更重资本的计算容量，以及更高层的模型服务；订单、容量交付和实际收入各有时间差 |

**收入历史：2020–2025 年公司当时的分类，单位：亿美元。** 这些数不是 2026 新分类；2020–2024 为公司投资者资料中的百万美元四舍五入数，2025 为年报数；合计按实际总收入四舍五入，可能不等于分项之和。

| 年度 | 安全 | 传统交付 | 云计算（旧口径） | 总收入 |
|---|---:|---:|---:|---:|
| 2020 | 10.62 | 19.30 | 2.07 | 31.98 |
| 2021 | 13.35 | 18.73 | 2.53 | 34.61 |
| 2022 | 15.42 | 16.69 | 4.05 | 36.17 |
| 2023 | 17.65 | 15.42 | 5.04 | 38.12 |
| 2024 | 20.43 | 13.18 | 6.30 | 39.91 |
| 2025 | 22.43 | 12.57 | 7.08 | 42.08 |

2020–2025 年，安全约增加 11.81 亿美元、交付减少 6.73 亿美元、旧口径云计算增加 5.01 亿美元；并购与内部增长同时存在，不能将增长全部归为内生。公司解释交付下降涉及续约价格下行和部分客户成本优化、自己建设能力。[2020–2024 投资者资料](https://www.sec.gov/Archives/edgar/data/1086222/000108622225000007/akamaiinvestoroverviewfe.htm)；[2025 年报](https://www.sec.gov/Archives/edgar/data/1086222/000108622226000022/akam-20251231.htm)。

**2026 重分类桥接**：此前“云计算”包含 CIS 与其他云应用。2026 起公司改为“安全 / 交付及其他云应用 / CIS”。以 2025 年为例，旧交付 12.567 亿 + 旧云计算中的其他云应用 3.941 亿 = 新口径交付及其他云应用 16.509 亿；CIS 单列 3.139 亿。上述是四舍五入计算，不能拿 2025 旧交付直接与 2026 新交付合计比较。[2026 Q2 重列补充表](https://www.ir.akamai.com/static-files/6b47a3ae-7484-4682-b959-73a68a8842b5)。

### 同行业：按客户要完成的任务比较

| 客户要解决的问题 | Akamai | 主要替代者 | 对比应看什么 |
|---|---|---|---|
| 快速交付网页、软件和视频 | CDN、媒体交付、DNS 与边缘网络 | Cloudflare、Fastly、AWS CloudFront；部分客户自建或多 CDN | 缓存命中、地区/运营商网络、流量成本、峰值能力、可用性与合约；PoP 数不能单独代表效果。[AWS CloudFront](https://aws.amazon.com/documentation-overview/cloudfront/) |
| 防护网站和 API | WAF、DDoS、Bot、API 安全 | Cloudflare、Fastly、AWS WAF / Shield 等 | 误拦截、发现攻击能力、部署/运维与总报价；不同服务组合需同场景测试。[AWS WAF](https://aws.amazon.com/waf/faqs/) |
| 防止内部系统横向扩散 | Guardicore 微隔离 | Illumio、云与企业安全厂商的相关产品 | 能否跨本地和多云、资产可视化、策略精细度及生产系统影响。Akamai 自有案例称某银行曾试用 Illumio，但为单一客户披露，不能外推总体优劣。[案例](https://www.akamai.com/resources/customer-story/asian-banking-leader) |
| 租用 CPU/GPU、运行应用 | Linode/Akamai Cloud、专用容量 | AWS、Azure、Google Cloud；DigitalOcean 等云提供商 | CPU/GPU 类型、所在地区、带宽和出站费用、产品生态、迁移成本、服务等级；具体工作负载才能判断成本 |
| 编写边缘程序、调用推理服务 | EdgeWorkers、容器与新推理服务 | Cloudflare Workers/Workers AI、Fastly Compute 等 | 运行限制、模型与硬件覆盖、开发体验、可观测性、数据位置和单位成本；beta 和已商用服务需分开 |

**公司层面对照，2026 年第二季度**：Akamai 收入 11.00 亿美元、同比 +5%；Cloudflare 收入 6.96 亿美元、同比 +36%；Fastly 收入 1.83 亿美元、同比 +23%。Fastly 披露网络服务 1.339 亿、安全 0.417 亿、其他 0.077 亿。三者产品组合、客户结构及会计分类不同：**总收入和增速不是同一细分市场份额，也不是各业务增速的直接对比**。[Akamai](https://www.sec.gov/Archives/edgar/data/1086222/000108622226000083/exhibit991-q22026.htm)；[Cloudflare](https://www.sec.gov/Archives/edgar/data/1477333/000147733326000053/q226exhibit991.htm)；[Fastly](https://www.sec.gov/Archives/edgar/data/1517413/000151741326000212/ex991-fslypressrelease63026.htm)。

**竞争机制举例**：IRIAM 案例显示 Akamai 可用含传输额度的云实例争取对出站流量敏感的应用，但当前 Akamai 不同代际和地区套餐的传输政策并不一样；Cloudflare R2 的直接数据出站目前不收费，但存储和操作仍收费，且 R2 是对象存储，与 CPU 实例不是同一产品。不能仅凭单项免费费用判断总成本。[Akamai 实例套餐](https://techdocs.akamai.com/cloud-computing/docs/dedicated-cpu-compute-instances)；[Cloudflare R2](https://developers.cloudflare.com/r2/pricing/)。

### 渠道调查：边缘推理的竞争与客户选择

Morgan Stanley Research《Edge AI Survey: As Inference Expands Beyond the Hyperscalers, New Leaders Begin to Emerge》，2026-07-16。以下是**渠道合作伙伴/转售商的调查与观点**：总体问题 n=38，Cloudflare 专项 n=23，Akamai 专项 n=15，不是市场交易额、收入、算力或用户数量的份额。每题的百分比加总超过 100%，应理解为选项被提及或选择的比例；具体选择规则和样本结构还需查看原始问卷，不能强推为全市场。[查看 Notebook 原始报告与引用](https://notebook.google.com/notebook/aebbbb1d-f497-4850-ab5d-f6b2f53c5e05)。

**总体 AI 推理：渠道对客户群的判断**（图 1，n=38）。索引正文明确提及 AWS 68%、Azure 37%、Cloudflare 29%、Google Cloud 21%；NotebookLM 原答还列出 DigitalOcean 13%、Vercel 11%、Akamai 8%、Fastly 5%，但本次索引中图 1 的图形数字没有完整提取，后四项保留为**模型提取、待核原图**。这些是调查中的厂商选择/观点，不是厂商营收或计算量市场份额，也不能证明 Cloudflare 在全部 AI 推理市场超过 Google。

**边缘计算 / 边缘推理**：调查问题是受访伙伴认为在其客户群中，哪家厂商执行边缘计算或推理的份额最大。图 3 的索引列出 Cloudflare 63%、Akamai 26%、Vercel 24%、Fastly 13%（n=38）。图 4 问过去三个月哪家份额提升最大，分别为 Cloudflare 55%、Akamai 34%、Vercel 24%、Fastly 13%。数值是回答选择比例，不是这些厂商各自的业务量份额或份额提升的百分点；时间是调查时点之前三个月，不是目前的实时数据。

| 渠道问题 | Cloudflare | Akamai | Vercel | Fastly |
|---|---:|---:|---:|---:|
| 哪家在受访者客户群的边缘计算/推理中份额最大？ | 63% | 26% | 24% | 13% |
| 哪家在过去三个月份额增长最大？ | 55% | 34% | 24% | 13% |

**Cloudflare 为什么赢单？** 图 14 为 Cloudflare 开发者平台业务问题，n=23：性能/延迟 74%，开发者体验 39%，价格/成本 35%，计算、存储与网络的整合平台 35%，AI 能力 30%。这是被调查伙伴的判断，不是同一工作负载的客观性能测试，也不表示所有 Cloudflare 产品的赢单原因。

**Akamai 的差异化在哪里？** 图 25 为 Akamai 专项，n=15：应用/API/Bot/DDoS 安全效能 60%，分布式负载性能/延迟 40%，全球边缘覆盖/分布式架构 27%，API 安全与更广泛应用安全集成 20%。图 27 的 47% 成本优化/云回迁、33% 开发测试、20% 生产推理同样是受访伙伴对客户用途的选择，不能当成 Akamai 客户数或收入拆分。

**Cloudflare 输单后流向——数字待核**：NotebookLM 提取的图 17 为 AWS 33%、Akamai 18%、Google Cloud 18%、Azure 15%、Fastly 5%。但本次取到的原始索引只保留图表标题：大型云合计 66%、Akamai 18%；图形中的其余数据与统计方法未提取，暂只作为待复核线索，不能把 33% 等视为 n=23 中的受访人数比例或真实输单流向。图标题把 Akamai 称为领先的非大型云替代项，属于研报作者的归属判断。

**综合解读**：样本中 Cloudflare 的边缘推理渠道提及更高，Akamai 是受到部分伙伴关注的替代者，其差异化更多被指向安全和分布式能力；因为样本小、合作伙伴客户群不同、问卷和原图尚未全部核实，不据此判定全球份额、产品优劣或 Anthropic 的采购原因。完整原文图形、抽样方式、是否多选、加权方法与图 1 / 17 缺失数字需继续核验。

### 网络规模：Akamai 与 Cloudflare、Fastly 的同类披露

**结论**：Akamai 自报边缘点位多、总容量也大，但其“unmatched”并不能仅凭公开宣传数字独立证实。各公司在位置、城市、网络、容量上使用不同定义，不能把一项指标直接变成速度或防护能力排名。

| 指标 | Akamai | Cloudflare | Fastly |
|---|---|---|---|
| 位置或城市 | 4,400+ 边缘 PoP，官方网页读取 2026-10-28，未写统计日期 | 340+ 城市，2026-10-20 | 166 PoP，2026-06-30 |
| 宣传网络容量 | 1+ Pbps，即 1,000+ Tbps，来自公司 CDN 和 Prolexic 材料；统计日期未明确 | 590 Tbps 外部网络容量，2026-10-20 | 622 Tbps 已连接全球容量，2026-06-30 |
| 接入网络 | 1,200+ networks，官方网页读取 2026-10-28 | 13,888 networks，2026-10-20 | 未找到同口径公司数字 |

来源：[Akamai 全球基础设施](https://www.akamai.com/why-akamai/global-infrastructure)、[Akamai Prolexic 手册](https://www.akamai.com/site/en/documents/product-brief/akamai-prolexic-product-brief.pdf)、[Cloudflare 2026-10-20 公告](https://www.cloudflare.com/press/press-releases/2026/more-than-10-million-developers-are-building-on-cloudflare/)、[Fastly 投资者演示](https://investors.fastly.com/static-files/46598fce-dccb-4e84-96ac-80a4472d5426)、[Fastly 网络图](https://quic.fastly.com/network-map)。数值是各公司自报，跨公司口径和时间不完全一致；Akamai 的 1,000+ 数值除以 590 为约 1.7，仅是展示量级的下界算术，不代表真实交付能力或性能为 1.7 倍。

**单位冲突**：Akamai 全球基础设施网页写的是“1+ PBps”，而 CDN 词条及 Prolexic 手册写“1+ Pbps”，手册明确等于 1,000+ Tbps。按照通常单位大小写，PBps 是字节/秒、Pbps 是比特/秒，相差 8 倍。公司网页未解释该矛盾，因此不能把大写 PBps 自动换算成 8,000+ Tbps，也不能断言网页必然笔误；上表采用有明确换算的一份手册口径并保留冲突。[全球页面](https://www.akamai.com/why-akamai/global-infrastructure)；[CDN 词条](https://www.akamai.com/glossary/what-is-a-cdn)；[产品手册](https://www.akamai.com/site/en/documents/product-brief/akamai-prolexic-product-brief.pdf)。

**容量不是已交付流量**：Akamai 披露 2024 年最高流量事件为 339 Tbps；这与 1,000+ Tbps 容量口径及日期不同，不能据此计算准确利用率。Fastly 的 5 万亿以上每日请求是请求次数，也不能直接换算为带宽。大总量不保证某一城市、运营商网络或峰值时有足够可用余量。[Akamai 2024 影响报告](https://www.akamai.com/site/en/documents/corporate/2025/akamai-2024-esg-impact-report.pdf)；[Fastly 2026 资料](https://investors.fastly.com/node/13861/pdf)。

**网络互联有更可比但不完整的独立数据**：互联网基础设施顾问 Gael Hernandez 以 PeeringDB 数据比较公共互联网交换中心（IXP）端口，2026 年 6 月报告显示 Akamai 248 个 IXP、79.0 Tbps，Cloudflare 352 个 IXP、47.2 Tbps，Fastly 150 个 IXP、46.2 Tbps。这个样本中 Akamai 公共 IXP 端口容量较高，而 Cloudflare 参与交换中心数量较多；仅覆盖公共 IXP，不含完整私人互联、网络全貌或实际流量，且数据可能陈旧。研究原文中 Akamai ASN 表格及其他位置标记存在不一致，转引表格需保留该瑕疵。[作者原始研究](https://labs.ripe.net/author/gael-hernandez/peering-capacity-at-public-internet-exchanges-what-the-data-reveals/)；[APNIC 转载表格](https://blog.apnic.net/2026/06/26/peering-capacity-at-public-internet-exchanges-what-the-data-reveals/)。

**防护不能把总带宽当专用清洗能力**：Akamai Prolexic 披露 32 个清洗中心和 20+ Tbps 专用防护容量，与其 1+ Pbps 总网络容量不同；Cloudflare 与 Fastly 宣传的是各自更大范围的网络能力及其分布式防护方式，架构和使用条件不同。Cloudflare 披露曾缓解一次 31.4 Tbps 的 35 秒攻击，这是该次观测，不是其在任意区域、任何攻击类型下的保证；不能据此断言某一产品全面领先。[Akamai](https://www.akamai.com/products/prolexic-solutions)；[Cloudflare 攻击报告](https://blog.cloudflare.com/ddos-threat-report-2025-q4)；[Fastly 网络防护](https://quic.fastly.com/blog/defense-without-detours-introducing-fastly-network-protect)。

**真实用户体验仍要看实测**：地理接近不是网络路径更短的保证，且 ISP、缓存命中、动态回源和应用配置都会影响。CDNPerf 根据真实用户下载 500 字节图片的耗时比较，适合参考边缘请求，却不等同长视频或全部网页体验。Fastly 自己使用 2023 年真实浏览器资料声称其样本首字节耗时更低，但不是随机分配同一客户同一配置的对照实验，也不能外推所有地区。[CDNPerf 方法](https://www.cdnperf.com/)；[Fastly 测试方法](https://quic.fastly.com/blog/fastly-is-faster-at-time-to-first-byte)。

## Anthropic 的 CPU 用在何处？

**直接披露**：Akamai 的合同公告只说支持 CPU 工作负载；9 月 24 日电话会的文字转录中 CFO 表示本次 Anthropic 协议“全部是 CPU”，没有点名 Claude Code、Cowork、沙箱或某种具体任务。[公告](https://www.akamai.com/newsroom/press-release/2026/akamai-announces-11-6-billion-multi-year-agreement-with-anthropic-to-support-growing-demand)；[电话会转录](https://earningscalls.dev/transcripts/akamai-technologies-inc_akam_earnings_call_transcript_2026-09-24)。

**有产品事实支撑的候选，但尚非合同归因**：Anthropic 解释 claude.ai 的代码执行使用服务端隔离容器；Claude Code 网页版在云端隔离环境运行；云端 Cowork 会话的 agent 循环与代码执行也在 Anthropic 管理的临时沙箱中。这些环境需要通用计算、内存和存储，因而是 CPU 需求的合理候选，尤其编译、测试、文件处理和工具执行。但本地 Claude Code 或本地 Cowork 的执行位置并不因此变成 Anthropic 云端，也无证据证明上述任何产品使用此合同的 Akamai 容量。[Anthropic 容器说明](https://www.anthropic.com/research/how-we-contain-claude)；[Claude Code 沙箱](https://www.anthropic.com/research/claude-code-sandboxing)；[Cowork 架构](https://support.claude.com/en/articles/14479288-claude-cowork-architecture-overview)。

**其他可能性**：请求路由、数据处理、检索、服务编排和 AI 集群管理也可能需要 CPU，但暂无该客户合同的任务分配、CPU 型号、用量或比例。CPU 配比的行业专家估计不是 Anthropic 的实际架构数据。Anthropic 最新 S-1 未通过文本检索识别到 Akamai 名称或 CPU 具体分配，不能据此推断不存在。[Anthropic S-1](https://www.sec.gov/Archives/edgar/data/2130357/000162828026067168/anthropicpbc-sx1.htm)。

## 为什么采购 Akamai？

Anthropic 没有公开披露该合同的中标评分、对比报价或其选择原因。Akamai 管理层列举低延迟、分布式系统运维、安全与获取硬件和机房能力，是**卖方说法**，不是 Anthropic 已确认的采购决策。[电话会转录](https://earningscalls.dev/transcripts/akamai-technologies-inc_akam_earnings_call_transcript_2026-09-24)。

可检验的机制包括：① 专用容量和交付时点：管理层称会向多家机房运营商采购，某些地点每处约 10–30 MW 或更少，部分容量已锁定；实际站点数、Anthropic 单独用电量和交付电力均未披露。② 多供应商分散：Anthropic 在官方公告中同时维持 AWS、Google Cloud 和 Azure 的渠道，并与 AWS 扩大算力合作，所以这不是公有云的全面替代。③ 商业条款：七年专用容量和权证可能有助供需匹配，但没有合同单位价格和公有云同配置的实际报价，无法证明 Akamai 更便宜。④ 分布式与安全能力可能有价值，但尚无证据证明其为本单决定性原因。[电话会转录](https://earningscalls.dev/transcripts/akamai-technologies-inc_akam_earnings_call_transcript_2026-09-24)；[Anthropic 与 AWS](https://www.anthropic.com/news/anthropic-amazon-compute)。

## 合同回报：把资本与成本分开

以下为稳态敏感性演示，不是项目预测。管理层预计 2028 年末年化收入约 17 亿；电话会称硬件无需合同期内刷新，可按七年折旧思考，并给出美国机房托管成本约每 MW 每年 300–400 万美元的组合参考。将全部 55 亿假设为七年直线折旧，年度折旧约 7.86 亿；实际可折旧资产构成、残值和各资产投产时间未知。管理层公布的 17 亿收入预测已考虑权证价值冲减和价格递增的会计处理，不应再机械扣一次权证成本。[管理层演示](https://www.ir.akamai.com/static-files/59654fd2-bd7c-4090-9ded-737b72ab2bb7)；[电话会转录](https://earningscalls.dev/transcripts/akamai-technologies-inc_akam_earnings_call_transcript_2026-09-24)。

| 假设 Anthropic 单独负载 | 假设机房成本 350 万/MW/年 | 年化收入 − 机房 − 假设折旧 | 占年化收入 |
|---:|---:|---:|---:|
| 60 MW | 2.10 亿 | 7.04 亿 | 41.4% |
| 80 MW | 2.80 亿 | 6.34 亿 | 37.3% |
| 100 MW | 3.50 亿 | 5.64 亿 | 33.2% |

上述是**扣除所列两项后的余额**，还未扣除人员、网络、保修、运维、税费、融资和其他开支，不是实际营业利润率、现金回报或 IRR。60/80/100 MW 只是压力测试输入，不是已披露的 Anthropic 规模。公司 95–105 MW、每 MW 约 2,200 万美元年化收入均为此前大型项目加 Anthropic 的组合，不能直接套用到单项合同。若稳态收入、假设 MW 和 55 亿都视为不变，每 MW 成本每年上升 100 万美元，在 80 MW 假设下减少年度余额 0.8 亿美元。

**现金回收**：2026 年资本支出 17 亿先于收入，2027 年支出 31 亿、预测收入仅 1.5–3 亿，2028 年还有 7 亿支出；收入确认不等于当期回款。全年无其他因素的情况下，55 亿资本占用对应管理层提示的 4%–4.5% 现金收益率，机会成本约每年 2.20–2.48 亿；这是满额静态演示，现金投入逐步发生，且不能与真实借款利息重复计入。完整税前税后项目 IRR 仍需要实际每年现金收款、机房成本、其他支出、残值与合同现金流期表。[管理层演示](https://www.ir.akamai.com/static-files/59654fd2-bd7c-4090-9ded-737b72ab2bb7)；[电话会转录](https://earningscalls.dev/transcripts/akamai-technologies-inc_akam_earnings_call_transcript_2026-09-24)。

**合同付款结构**：第三方电话会转录记录 CFO 将合同描述为交付后 take-or-pay（按约交付后，即使使用量变化仍有付款承诺）；具体计费、容量交付验收和例外以完整合同为准。公司 IR 提供[电话会入口](https://www.ir.akamai.com/node/5821)，本次未逐字核听。此结构降低交付后的使用量风险，但不能消除交付、停机、信用和终止风险。[转录](https://earningscalls.dev/transcripts/akamai-technologies-inc_akam_earnings_call_transcript_2026-09-24)。

**合同风险机制**：Anthropic 可在 Akamai 未补救重大违约、特定重大停机或 Akamai 被其直接竞争者收购等条件下终止；双方亦有破产等终止权。未违约的其他项目计划在某些主协议终止情形下仍可作为独立协议延续，不能把任何终止都简化为所有项目自动终止。具体停机条件、赔偿上限、交付前付款和终止后设备损失分担须核查完整合同。9 月 8-K 同时披露 Jabil 采购约 17 亿美元存储器组件、Akamai 按供货商发票支付，以及 Lenovo 硬件和服务协议，显示前期供应链采购敞口；不能仅凭同步披露断言每笔采购全部专属于本合同。[SEC 8-K](https://www.sec.gov/Archives/edgar/data/1086222/000119312526401048/d288154d8k.htm)。

管理层表示潜在新增 90 亿美元订单将需要**额外**资本开支，而非在现有 55 亿投入上免费获得；具体金额未知。Anthropic 自身 S-1 显示 2026 年上半年算力与基础设施费用 89.45 亿美元，且对 AWS 签有未来最低采购义务，显示其算力支出规模和财务承诺；这不等于其一定无法履行 Akamai 合同。[电话会转录](https://earningscalls.dev/transcripts/akamai-technologies-inc_akam_earnings_call_transcript_2026-09-24)；[Anthropic S-1](https://www.sec.gov/Archives/edgar/data/2130357/000162828026067168/anthropicpbc-sx1.htm)。

## 在分布式推理链条中的位置

1. **入口、交付和安全**：请求先通过分布式网络，Akamai 可提供流量管理、内容交付及安全防护。接近终端可降低部分网络时延，但模型实际在哪里运行要逐案确认。
2. **算力与基础设施**：客户可租用云端 CPU、GPU 等基础设施，自行部署工作负载。Anthropic 已披露的合同处于这一层的 CPU 容量，而不是已证实的模型 GPU 推理层。
3. **托管推理和 agent 环境**：10 月 27 日公布的 Akamai Inference 与 Agent Sandbox 均处于 beta。前者提供开放权重或客户自带模型的托管推理，包括按 token 计费的 serverless 与专用 GPU；后者提供隔离的 agent 代码执行环境。它们将 Akamai 从“出租基础设施”向“提供可直接调用的服务”延伸，但客户采用、收入及利润率尚待验证。[产品发布](https://www.akamai.com/newsroom/press-release/akamai-launches-ai-inference-service-and-agent-execution-environment)；[产品页面](https://www.akamai.com/products/akamai-inference)。

### 4,400 多个位置到底是什么？

**修正原表述**：Akamai 全球基础设施页面在 2026 年 10 月 28 日读取时写的是 **4,400+ edge PoPs（边缘接入点）**，而不是 4,350 多个 GPU 算力中心。PoP 指提供网络接入和服务的部署位置，是网络覆盖口径，不等于城市、机房、数据中心园区或 GPU 节点。先前“主要反映网络覆盖”是简写，容易让人误以为 PoP 只能转发流量：部分边缘位置还能执行轻量函数，容器服务也可利用更广的边缘网络。[Akamai 全球基础设施](https://www.akamai.com/why-akamai/global-infrastructure)。

| 层次 | 主要作用与可运行能力 | 数量和范围：来源及时间口径 | 不能推断什么 |
|---|---|---|---|
| 边缘 PoP / Edge Sites | 靠近用户或网络接入位置，承接 CDN 缓存、交付、安全和轻量程序；EdgeWorkers 等可执行请求处理、路由、认证、内容修改 | 全球基础设施页面列 4,400+ edge PoPs、130+ 国家、1,200+ 网络；页面无明确统计日期，2026-10-28 读取 | 不等于 4,400+ 数据中心或 GPU 地点；每个位置产品、资源和可用性不一定相同 |
| 边缘托管容器 / MCS | 将客户程序及依赖打包，交给 Akamai 分发和运行；比单次函数适合更多应用逻辑 | 公司 2025-02-25 称服务可利用 700+ 城市、4,300+ PoP，并在 100 多座城市测试客户应用；这是发布时口径 | 不能把可覆盖范围视为当时所有位置都已商用、已有 GPU 或当前客户实际使用量 |
| 分布式计算区域 / Distributed Compute Regions | 靠近用户部署专用 CPU 虚拟机；适合区域性低延迟应用 | 官方文档 2026-10-28 读取列出 11 个可部署的城市，且注明 limited availability | 只是该产品文档列出的区域，不是 Akamai 所有分布式算力、所有 GPU 部署或 Anthropic 专用站点的总数 |
| 核心计算区域 / Core Compute Regions | 较完整的计算、存储和云服务，可承载数据库、后端及计算密集型工作 | Akamai 自身把核心区域、分布式区域和边缘 PoP 分开展示；不同资源依地区开放 | 不能将核心区域数直接换成数据中心数量或机柜、电力和 GPU 容量 |
| GPU 实例区域 | 承载 GPU 推理、图形及其他并行计算任务 | 官方 GPU Linode 页面于 2026-10-28 列 Blackwell RTX PRO 6000 的 20 个城市，部署 availability 有限；其他 GPU 型号地区另列 | 城市清单不是 GPU 数量、物理机房数、已售容量或托管推理 API 的全部位置清单 |

**边缘也有计算，但计算能力不同。** EdgeWorkers 是由请求触发的 JavaScript 函数，存在 CPU 时间、内存及执行时间限制，适用于轻量业务逻辑，不等于一台可以长期运行大型模型的 GPU 服务器。Akamai 的 2025 年 MCS 发布也称容器服务可结合全栈云基础设施（包括 GPU），但这不意味着所有边缘节点本地都有 GPU。[EdgeWorkers 资源说明](https://techdocs.akamai.com/edgeworkers/docs/select-a-resource-tier)；[2025 年容器服务公告](https://www.ir.akamai.com/news-releases/news-release-details/akamai-introduces-managed-container-service-enterprises)。

**可核对的分布式 CPU 样本**：文档当前列奥克兰、柏林、波哥大、丹佛、汉堡、休斯敦、约翰内斯堡、吉隆坡、马赛、克雷塔罗、圣地亚哥 11 地。其专用 CPU Linode 提供有限功能；块存储、对象存储和备份不能直接在该类区域使用，可连接核心区域服务。这反映的是具体产品和文档范围，其他专用部署不必受此清单覆盖。[分布式计算区域文档](https://techdocs.akamai.com/cloud-computing/docs/distributed-compute-regions)。

**可核对的 GPU 样本**：GPU Linode 文档将 RTX PRO 6000 Blackwell 标为有限部署，列举阿姆斯特丹、钦奈、芝加哥、法兰克福、雅加达、伦敦、洛杉矶、马德里、迈阿密、孟买、米兰、纽瓦克、大阪、巴黎、西雅图、新加坡、斯德哥尔摩、东京、多伦多和华盛顿特区，共 20 个城市；其他型号覆盖不同城市。此为公开租用产品的城市列表，不能推定每城实际可售卡数，也不能与 11 个 CPU 分布式区域加总成独立站点总数。[GPU Linode 产品文档](https://techdocs.akamai.com/cloud-computing/docs/gpu-compute-instances)。

**一个推理请求可能怎样走？** 用户 → 就近 PoP 做接入、安全、路由或轻量逻辑 → 根据应用配置转到有模型资源的区域 → CPU 或 GPU 执行模型及相关任务 → 返回结果。缓存命中、模型位置、路由策略和具体产品不同，实际链路会变化；这只是架构示意，非 Akamai 披露的 Anthropic 链路。PoP 更近只减少路径中部分网络耗时，端到端速度还取决于回源路径、排队、模型计算及输出 token。

**和 Anthropic 合同的关系**：管理层称本次新合同为 CPU，计划利用多家托管机房，部分地点规模参考 10–30 MW 或更少；具体站点数和 Anthropic 的电力规模未披露。既有 PoP 提供分布式网络与运营经验，不代表能直接腾出 4,400 个位置承载该专用 CPU 集群，也不能用 PoP 数证明其都属于小于 50 MW 的推理数据中心。[电话会第三方转录](https://earningscalls.dev/transcripts/akamai-technologies-inc_akam_earnings_call_transcript_2026-09-24)；[SEC 8-K](https://www.sec.gov/Archives/edgar/data/1086222/000119312526401048/d288154d8k.htm)。

## CIS 增长与 Anthropic 项目模型

可修改假设的 [财务模型 Excel](refs/akamai_cis_anthropic_model.xlsx) 与 [收入瀑布图](https://mojojolite-sketch.github.io/%E5%88%86%E5%B8%83%E5%BC%8F%E8%AE%A1%E7%AE%97/akamai/refs/akamai_waterfall.html)。两份工具初始假设一致，但输入独立，不会互相同步。模型单位为百万美元，假设不代表公司指引。

以 2025 年为基期，假设 2026–2027 年安全增长 10%、交付及其他云应用下降 5%、存量 CIS 增长 30%，新增 Anthropic 合同 2027 年贡献 225。2026 收入 4,444.1、同比 5.6%；2027 收入 4,959.9、同比 11.6%。因新合同单独增加，2027 总 CIS 增速为 85.1%，而不是 30%。若要求 30% 指包含新合同的全部 CIS，则 2027 收入为 4,734.9、同比 6.5%，隐含其他 CIS 收入下降；不能重复加算合同收入。2025 年交付及其他云应用按旧分类差额重组，并非公司单独提供全年重列数字。

分部净利润未披露：模型对各业务收入变化使用可调的增量税前利润率，只是情景。新项目以 2027 年收入为 225、现金经营利润率 60%、25% 税率、55 亿按七年折旧并按收入爬坡比例估算投产折旧；占用现金利息收益率 4.25%。税后净利增量 2026 约 −13.5、2027 约 −80.3；项目 FCF 增量分别约 −1,713.5、−3,076.3。上述均为假设，不是公司预测。FCF 假设预算等于现金资本支出、收入与经营现金流即时匹配；Jabil 内存回购、客户付款、营运资金和税收影响尚待验证。公司预算 CapEx 的权责发生制口径不必然等于当期现金支出。

**EPS 和模型修正**：模型加入可调 GAAP 稀释加权平均股数，2025 实际 147.023 百万股；2026 和 2027 暂以 2026 上半年实际 151.854 百万股作为假设，并未完整预测新权证或可转债的稀释。模拟 2026 EPS 为 3.13 美元、2027 为 2.98 美元；项目单独 EPS 影响分别为 −0.09 和 −0.53 美元。修正此前 2027 年净利公式：项目 2026、2027 影响均为对无项目情景的年度影响，因此在 2026 净利基础上应加上“2027 项目影响减 2026 项目影响”，而不是把 2027 影响再次全部扣除。修正后 2027 公司模拟净利润为 452.1，而非先前的 438.6，2027 单年项目影响 −80.3 及项目 FCF 不变。[2025 年报](https://www.sec.gov/Archives/edgar/data/1086222/000108622226000022/akam-20251231.htm)；[2026 Q2 稀释股数](https://www.sec.gov/Archives/edgar/data/1086222/000108622226000083/exhibit991-q22026.htm)。

**至 2030 年的基准情景**：截至 2026 Q2，GAAP TTM 稀释 EPS 简化估算为 2.76 美元（2025 全年 3.07 − 2025 上半年 1.53 + 2026 上半年 1.22），不同期间稀释股数及四舍五入产生近似误差；最新 Q2 单季为 0.52。假设安全每年 +10%、交付及其他云应用 −5%、不含新增合同的 CIS +30%；Anthropic 2027 收入 225、2028 收入 850、2029 和 2030 分别 1,700（百万美元）。2028 的 850 是模型假设，公司仅预计 2028 年末达到年化 1,700，不能把年末运行率视为当年实际收入。稀释股数每年固定为 151.854 百万股，未完整模拟权证、可转债、回购。模型净利润/EPS 2026 为 475.2/3.13、2027 为 452.1/2.98、2028 为 507.8/3.34、2029 为 645.4/4.25、2030 为 717.1/4.72，皆为假设情景而非公司预测。后期假设全部 55 亿现金持续占用且计算机会成本，但实际 2027 资金缺口可能触发融资，因此 2028–2030 必须以融资方式重新计算利息，当前模型不是融资后的完整 EPS。公司整体现金滚动只做到 2027 年，后续债务到期和融资未建模。[Q2 EPS](https://www.sec.gov/Archives/edgar/data/1086222/000108622226000083/exhibit991-q22026.htm)；[项目演示](https://www.ir.akamai.com/static-files/59654fd2-bd7c-4090-9ded-737b72ab2bb7)。

流动性情景从 2026 年 6 月末现金及有价证券 4,616.3 出发，假设 2026 H2/2027 原有业务经营现金流分别 650/1,300，原有现金 CapEx 分别 450/900，不计回购、并购和其他现金流，并考虑 2027 到期债本金 1,150。情景推算 2027 年末融资前余额 −723.6；若保留 500 最低现金，需要约 1,223.6 新增资金。它不是融资计划或实际缺口预测：新增融资利息和费用、期内低点、债权条件及 2033 年可转债可能提前转换的现金支付均未建模。公司称有 10 亿循环额度，实际可动用额与契约约束需另核。[Q2 10-Q](https://www.sec.gov/Archives/edgar/data/1086222/000108622226000086/akam-20260630.htm)；[9 月电话会](https://earningscalls.dev/transcripts/akamai-technologies-inc_akam_earnings_call_transcript_2026-09-24)。

## Anthropic 协议：进度与经济含义

- 2026 年 9 月 18 日，双方在 5 月主服务协议下签署两份计划，约定专用云计算容量和管理支持；两份计划合计约 116 亿，**各自服务开始后期限七年**。合同收入以容量交付、服务可用等条件为前提，不能当成已实现收入或全部无条件锁定现金流。[SEC 8-K](https://www.sec.gov/Archives/edgar/data/1086222/000119312526401048/d288154d8k.htm)
- Akamai 称这项新协议支持 Anthropic 的 CPU 工作负载，并提到潜在额外约 90 亿业务机会；额外机会并非已签约收入。[公司公告](https://www.akamai.com/newsroom/press-release/2026/akamai-announces-11-6-billion-multi-year-agreement-with-anthropic-to-support-growing-demand)
- 管理层预计相关投资约 55 亿：2026 年 17 亿、2027 年 31 亿、2028 年 7 亿；预计首批服务于 2027 年第二季度末开始，2027 年贡献收入 1.5–3 亿，至 2028 年末年化收入运行率约 17 亿。这些均为预测，年化运行率不是当期已确认收入。资本开支也不是合同的全部成本，不能简单用合同金额减资本开支计算利润。[公司投资者演示](https://www.ir.akamai.com/static-files/59654fd2-bd7c-4090-9ded-737b72ab2bb7)
- **投入用途细节**：公司称 2026 年第四季度约 17 亿为锁定和预购包括内存在内的关键供应链组件；2027 年约 31 亿属于项目建设和资本部署阶段，未公布服务器、CPU、网络设备等金额拆分，也未说明各年已经实际支付多少。同期 8-K 另称 Akamai 授权代工商 Jabil 购买约 17 亿美元内存组件：Jabil 收货后 Akamai 支付相应供应商发票，Jabil 代为保管并在使用时按成本回购。8-K 未逐项将这份采购与 Anthropic 2026 年资本开支核对；金额和时间相同并不足以断定完全对应，更不能将两项 17 亿再相加。回购后整机价格、重复支付抵扣和实际财务列报须等待完整协议与后续财报。Lenovo 同期协议涉及硬件、软件及服务，但其具体价值、型号和对 Anthropic 的专属归属未披露。[公告](https://www.akamai.com/newsroom/press-release/2026/akamai-announces-11-6-billion-multi-year-agreement-with-anthropic-to-support-growing-demand)；[SEC 8-K](https://www.sec.gov/Archives/edgar/data/1086222/000119312526401048/d288154d8k.htm)。
- 同一演示中 95–105 MW 是此前大型 CIS 合同与 Anthropic 的合计，不能归为 Anthropic 单独电力规模。
- Akamai 因 Anthropic 签署 Project Plan 3 发行权证；归属和行权条件详见下文。此前“可转换为普通股”表述不够完整：行权得到的是无投票权 B 类可转换优先股，Anthropic 持有期间不能自行选择转为普通股。[SEC 8-K](https://www.sec.gov/Archives/edgar/data/1086222/000119312526401048/d288154d8k.htm)

**分析判断**：这笔合同从客户、规模和资本投入三个维度，加速 Akamai 成为大型 AI 客户的算力基础设施供应商；但它也将公司推向更重资本开支、更高客户集中度和交付执行风险。实际投资回报取决于容量爬坡、功耗与运营成本、融资成本、权证会计影响，以及合同服务期内的客户履约。公开资料目前不足以计算合同净利润率和项目 IRR。

## 客户订单与权证：什么时候成为股东？

Akamai 向 Anthropic 提供云算力；Anthropic 按合同向 Akamai 支付服务费。作为签署 Project Plan 3 的交易对价，Akamai 另向 Anthropic 发行权证：权证让 Anthropic 在符合条件后，有权按约定价格现金买入 Akamai 股份。签署订单、获得权证、权证归属、付钱行权是不同事件；**拿到权证不等于已经行权，也不证明 Anthropic 已经成为 Akamai 股东**。[SEC 8-K](https://www.sec.gov/Archives/edgar/data/1086222/000119312526401048/d288154d8k.htm)

| 发生的商业事件 | 权证变化 | 对应普通股经济权益的上限 |
|---|---|---:|
| Anthropic 或关联方就 Project Plan 3 首次付款 | 40% 权证归属，可行权，仍须满足其他条件 | 约 309.64 万股 |
| 此后每新增 30 亿美元合同承诺 | 额外 20% 权证归属，分三批 | 每批约 154.82 万股 |
| 三批全部达成 | 合计 100% 归属 | 合计约 774.10 万股，约为发行时公司已发行普通股的 5% |

新增 90 亿美元尚非已签收入；首次付款条件也不等同于签署 116 亿美元订单即刻自动归属。其他条件包括主协议仍然有效。已归属权证原则上可在 2026 年 9 月 18 日发行日起第七周年之前行权；实际是否归属和行权须以后续披露为准。

**准确的股权形式**：完整权证对应最多 387,051 股无投票权 B 类可转换优先股，每股行权价 2,226.60 美元；每股优先股初始经济权益相当于 20 股普通股，因此常简写为最多 774.102 万股普通股经济权益、每普通股等价行权价 111.33 美元。Anthropic 行权后先持有优先股，通常无投票权（法律要求除外）；公司普通股若分红，该优先股按转换比例参与。Anthropic 及其全资子公司持有期间不能自行要求转换普通股；转给外部主体或持有者不再属于该范围时，按条款自动转换，并受转让限制。[SEC 8-K](https://www.sec.gov/Archives/edgar/data/1086222/000119312526401048/d288154d8k.htm)

**例子，仅作算术演示**：假设首批 40% 已归属且 Anthropic 全部行权，按普通股等价口径相当于支付约 3.45 亿美元，取得相当于约 309.64 万股普通股的优先股经济权益。若当时普通股价格为 150 美元，按普通股等价价差计算，税前理论内在价值约 1.20 亿美元；不是已实现收益，实际变现还受转让和转换限制。若股价低于 111.33 美元，按这一简单比较立刻行权通常缺乏经济吸引力，权证仍可能在到期前保有时间价值。

管理层称权证旨在激励后续合作并使双方利益一致。权证的公允价值按会计规则冲减收入；公司表示其收入预测已考虑这项影响。股东还需关注潜在稀释及 EPS 计算，不能把会计上的收入冲减与未来行权现金流当成同一笔费用，也不能在已包含权证影响的收入预测中再机械扣一次。[电话会第三方转录](https://earningscalls.dev/transcripts/akamai-technologies-inc_akam_earnings_call_transcript_2026-09-24)。

## 验证路径与未解问题

- Anthropic 的 CPU 用于哪些具体任务、部署在哪里、是否与 Akamai 新推理或 sandbox 产品相关：未披露。
- 55 亿资本开支中设备、土地/机房和电力接入分别多少；合同成本、利用率、现金回收曲线及净现值：未披露。
- 开放模型推理 beta 的 GPU 布点、性能、客户、价格与单位经济性；4,400 多 PoP 中具备各类推理计算的数量：需后续验证。
- Akamai 与公有云、其他云计算或推理提供商的性能和总成本比较：缺少可比实测，不作领先结论。

## 内部资料的适用范围

NotebookLM 检索到的 Morgan Stanley Edge AI 渠道伙伴调查提到分布式推理需求，但样本是渠道伙伴而非 Akamai 收入或终端市场统计，且这份资料没有证明 Anthropic 合同细节。各次完整原始回复及引文对应关系见同目录网页附录；原始回复中的占比不能解释成市场份额。本次网络查询答复将 Cloudflare 335+ 城市表述为 PoP，口径不正确；将渠道调查回答占比称为市场份额也未经证明，均以正文一手来源与限制说明为准。

边缘市场 NotebookLM 原答将跨地域分布式部署与 prefill/decode 解耦混为一谈，并给出 CPU:GPU 固定比例和 BBU 必选等泛化说法；这些不能作为普遍架构结论。原答的服务器市场和电力预测也并非网络侧边缘推理收入，未经原报告图表逐项核验。

PoP 与订单查询的 NotebookLM 原答称其检索的资料没有客户和 NVIDIA 合作等细节，这仅代表该笔记本检索范围；本稿新增的一手公告和具名客户案例已补充实际证据。原答渠道调查百分比仍需核查原图的题目和分母，不作为厂商实际收入或市场份额。

gt 结论复核的 NotebookLM 原答称资料中没有 Akamai 与 Anthropic 合同，并将“资料未覆盖”扩大为“确认无交易”，后者错误：SEC 8-K 已证明合同存在。原答其他厂商融资、利差、预付款和 EPS 数字尚未逐项验证，不能直接套用于 Akamai 或视为对整体信用市场的证明。

研究记录状态：初始研究，已使用原始公告核对关键数字，尚未完成独立复核及五年完整财务建模。
