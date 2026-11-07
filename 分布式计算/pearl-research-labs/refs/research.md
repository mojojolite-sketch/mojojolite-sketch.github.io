# Pearl Research Labs：协议、算力与经济学

2026-10-28 研究工作稿。经营名称由 Together AI 合作公告确认；法律实体未核验。用户转交的 session-2026-10-28-pearl-handoff.md 是对话交接，不是证据。登记版本：pearl-research-labs@1、pearl-int-whitepaper@1、pearl-pip3@1。以下为本轮研究整理，未经独立 reviewer 复核。

## 产品与协议

Pearl 有推理 API 与 PoW 链；[API 文档](https://platform.pearlresearch.ai/docs/concepts)称预充值美元、按输入/缓存/输出 token 计费。未发现已开放的 GPU 小时撮合市场或外部 GPU 所有者接入调度的完整证据。收入、客户数量、实际付费推理量尚未披露。

[INT 白皮书](https://pearlresearch.ai/research/int-whitepaper)提出两用计算：用链状态和输入承诺生成低秩噪声 E、F；计算 (A+E)(B+F)；由结果减去 EB+AF+EF 得 AB；对计算过程分块累计摘要，满足难度条件后提交 Plonky2 零知识证明。低秩校正本身带来捷径风险，因此要求计算轨迹。此证明针对规定计算及其一致性，不证明矩阵来自付费请求。

[官方 miner README](https://github.com/pearl-research-labs/pearl/blob/master/miner/README.md)：vLLM plugin、NoisyGEMM/CUDA、miner-base、gateway、全节点；文档当前测试范围 sm90 H100/H200。不能把该限制推广到社区纯挖矿程序。

[FP8 PIP-3](https://github.com/pearl-research-labs/PIPs/blob/main/PIPS/pip-0003.md) 当前页面为 Draft，需硬分叉；与 INT 不兼容，输出不再 bit-exact，依赖架构与实现。已检索来源未证实生效高度；GPU 支持范围可能变化。新 FP8 [规格](https://pearlresearch.ai/Pearl_Whitepaper.pdf) 和用户给的 INT 白皮书不是同一版本。

## 有用性与客户

[Together 2026-05-15](https://www.together.ai/blog/together-ai-partners-with-pearl-research-labs) 宣布 Gemma endpoint 折扣超过 25%，称折扣由未来加密资产发行价值抵消；公告未说明比较基准，不能直接写作较通常定价；为合作方说法，不是已审计贡献利润，也非独立终端客户满意度。

### Together 合作：实体与关系

[Together 原公告，2026-05-15](https://www.together.ai/blog/together-ai-partners-with-pearl-research-labs) 的关键原文：“This endpoint is discounted by over 25%, offset by the future value of crypto emissions.” 公告还称如果 PRL 现货价格上涨，计划用更多发行价值进一步降低该 endpoint 的价格；未来计划让客户直接获得部分发行。超 25% 的比较基准、币的实际所有权及变现路径未披露。登记：pearl-together-announcement@1、pearl-together-discount-evidence@1、pearl-together-discount-statement@1；说法为 pending。

| 实体                   | 类型          | 与其他实体的关系                                 | 证据状态          |
| -------------------- | ----------- | ---------------------------------------- | ------------- |
| Together AI          | 推理服务商与公告作者  | 与 Pearl Research Labs 合作，提供指定模型 endpoint | 公告归属说法        |
| Pearl Research Labs  | 协议研发方       | 创建 Pearl Network，与 Together 合作           | 公告归属说法        |
| Pearl Network        | PoUW 区块链网络  | 验证并奖励符合规则的工作，发行 PRL                      | 协议设计          |
| Gemma-4-31B-it-pearl | 模型          | 通过 Together 的 endpoint 提供推理              | 公告归属说法        |
| Endpoint             | 对客户的推理接口    | 接收请求并返回输出，价格由 Together 描述为有折扣            | 公告归属说法；折扣基准未知 |
| 客户 / 矿工 / GPU 运营者    | 不同角色        | 客户使用推理服务；矿工参与证明；GPU 运营者提供硬件              | 是否同一主体未知      |
| PRL / 模型 token       | 两种不同资产或计量对象 | PRL 是区块链资产，模型 token 是推理计量单位              | 不可混同          |

推理链：客户 → Together endpoint → 模型输出。协议链：符合规则的计算 → PoUW 证明 → Pearl Network → PRL 发行。经济连接：Together 声称以未来发行价值抵消 endpoint 折扣；谁获币、谁出售、双方分成和实际补贴金额均未知。不能画成客户直接获得 PRL，或 Pearl 全网矿工都处理该 endpoint 客户请求。

### Together 同时推理与挖矿：代码路径及生产证据边界

Together 2026-05-15 公告称其合作 endpoint 在推理时同时产生 PRL；[Pearl 模型卡](https://huggingface.co/pearl-ai/Gemma-4-31B-it-pearl)说明该 checkpoint 旨在与 vLLM mining plugin、pearld 节点和 pearl-gateway 配合。官方 [miner README](https://github.com/pearl-research-labs/pearl/blob/master/miner/README.md)给出 NoisyGEMM 替换量化线性算子、从矩阵计算提取 PoW、gateway 与全节点交互的路径。它证明公开实现和部署方案，不证明 Together 实际使用相同提交、节点、显卡配置，也未看到其生产日志、被接受区块或服务统计。模型卡列的两套模型质量测试不是开关挖矿的吞吐/延迟对照。

在 2026-10-28 读取的 [master config.yaml](https://github.com/pearl-research-labs/pearl/blob/master/miner/vllm-miner/src/vllm_miner/config.yaml) 中，门槛为 m≥1024、n≥256、k≥1024；[config.py](https://github.com/pearl-research-labs/pearl/blob/master/miner/vllm-miner/src/vllm_miner/config.py) 明确任一维等于 1 时返回 false，未达到阈值则不走 noisy GEMM。维度与批次、序列长度和算子有关；不等于所有 decode 都无挖矿，也不能推广到不同提交或 Together 私有部署。GitHub commit SHA 此轮未取得。

[Issue #83](https://github.com/pearl-research-labs/pearl/issues/83) 发帖人 2026-05-05 称，在 8×H200、其配置与 26,000 多个请求下未触发 PoUW；贡献者回复称较大的 prefill 工作量更易达到门槛。这是用户自报与维护者讨论，不是对 Together 的测试，不应把推理服务 batch 与加密矿池混为一谈。

Pearl [技术文章](https://pearlresearch.ai/research/blog/proof-of-useful-work)称，在指定条件下，Llama 70B、4×H200 DP=4 的端到端开销 +5.08%；DeepSeek V3.2、8×H200 DP=8+EP 为 +3.9%。这是厂商所报的不同模型与配置，不是 Together Gemma 的实测，也没有在本轮独立复现；不支持公告的每个 GPU cycle 都无额外成本。

### 合作当前状态：双方网站发生冲突

2026-10-28 读取的一手来源：[Together 模型弃用历史](https://docs.together.ai/docs/deprecations)写明 `pearl-ai/gemma-4-31b-it` 于 2026-08-27 从 serverless 推理移除，且不支持 on-demand dedicated endpoints；[Together 型号页](https://www.together.ai/models/gemma-4-31b-it-pearl)也显示 serverless 不可用。相反，同日读取的 [Pearl network 页](https://pearlresearch.ai/network)仍声称该 endpoint 在 Together serverless 上 live，并称同一 forward pass 的 PRL 支持折扣。前者为服务提供者的具体型号产品状态，后者可能是未更新内容，更新日期未知；不能据此判定整个合作终止或继续。未找到双方解释具体下线原因的公告，也未找到直接具名终端客户反馈。第三方追踪 9月6日确认的日期是其自行核查时间，不是 Together 官方公布的移除日期。

钱包：官方 README 仅说明矿工地址可配置；没有可归属 Together 或 Pearl 合作端点的钱包、矿池账号、链上交易及真实分成。链上 coinbase 地址可定位接收输出，但没有主体自证或可信证据时不能将其标为 Together；如果走矿池，币先进入池地址也可能无法分辨末端参与者。记录 together-deprecation-doc@1、together-deprecation-pearl-evidence@1、pearl-network-marketing@1、pearl-network-together-live-evidence@1；状态冲突问题 pearl-together-status-question@1。

### PRL 到哪里、谁分配和变现？

[官方节点 README](https://github.com/pearl-research-labs/pearl#running-a-node-and-vllm-miner)要求配置矿工的 Taproot 地址，节点及 gateway 使用 mining address；[测试代码](https://github.com/pearl-research-labs/pearl/blob/master/miner/conftest.py)展示区块模板以 mining_address 构造。这表明普通自营路径可以指定奖励目标地址，不揭示 Together 的实际地址或控制权。一个有效区块的奖励归指定接收输出；矿池、托管方、合同分成与后续转账各有额外规则。

[Castle Labs 研究](https://www.castlelabs.io/research/pearl-the-missing-piece-for-ai)称 Together 自行运行挖矿基础设施并用 PRL 奖励补贴客户，这是第三方归属说法，其底层合同、钱包和卖币证据本轮未找到，不能据此确定法定所有权或实际兑现。Together 公告称以未来发行价值抵消折扣，尚未提供钱包、币量、收入分配比例、收款人、转账、销售记录或合同。将 PRL 按市价估值是潜在收入；卖币或其他结算形成可使用资金才是实际变现，不能把发行值自动视作已实现美元。

### 折扣比较与产品可用性

| Together 展示页，美元/百万 token | 输入 | 输出 | 配置 / 状态 |
|---|---:|---:|---|
| [Pearl Gemma](https://www.together.ai/models/gemma-4-31b-it-pearl) | 0.28 | 0.86 | INT8、32K、text；页面明确当前 Serverless API 不可用 |
| [标准 Gemma](https://www.together.ai/models/gemma-4-31b)规格栏 | 0.39 | 0.97 | FP8、256K、text+image；页面正文另写 0.20/0.50 且状态文字不一致，冲突未解决 |

这两个规格栏数字的直接算术差：输入 28.2%，输出 11.3%；例如输入 100 万、输出 20 万 token，分别 $0.452 与 $0.584，低约 22.6%。模型、量化、上下文、模态不同，并非完全可比；两页并非公告时点的同一份报价快照。标准型号页面正文与规格价冲突，不能认定今天可成交价格。

[ModelPriceWatch](https://modelpricewatch.com/models/gemma-4-31b-pearl/)称其 2026-08-17 的同一价目表同时出现 0.28/0.86 与 0.39/0.97，9月6日其跟踪系统将 Pearl SKU 标为退出。该历史原文快照本轮未独立获取、且晚于 5月15日合作公告；它是可能的比较线索，不能证明公告所指的 >25% 计算基准或宣布的服务下线日期。Together 型号页目前明确 Serverless 不可用；其[弃用历史](https://docs.together.ai/docs/deprecations)现列 Pearl SKU 移除日期 2026-08-27，按需 dedicated 标为 No；其他专属安排及整个合作是否终止未知，未发送 API 请求。此一手文档修正 ModelPriceWatch 的“Together 未公布移除日期”说法；9月6日是该追踪方的确认日期。

记录固定版本：pearl-gemma-model-card@1、pearl-vllm-config@1、pearl-gemma-config-evidence@1、pearl-node-readme@1、pearl-payout-mechanism-evidence@1、together-pearl-model-page@1、together-gemma-standard-page@1、pearl-gemma-price-evidence@1、pearl-gemma-availability-evidence@1、pearl-gemma-input-price@2、pearl-gemma-output-price@2。以上观察及说法未独立 reviewer 复核。


[独立预印本](https://arxiv.org/html/2606.04819)于 5 月 30–31 日从 AlphaPool 头部 15 矿工抽样 8,012 workers；矿池约占当时全网算力 21%。研究者使用矿工二进制字符串、运行画像和随机矩阵提交来论证未强制有用推理，报告 NVIDIA 3 和 AMD 41 个矿池接受 shares。硬件分类按算力推测，二进制分析不等于全网观察；CPU/Apple 为基准测试，不应称其均提交了接受份额。论文全网零有用工作的强判断超出该样本证明范围，当前真实付费推理占比未知。

[Salad 的 Sogni 案例](https://blog.salad.com/sogni-salad-gpu-scaling-340k-users/)和[Salad 自测](https://blog.salad.com/benchmarking-saladcloud/)给出客户场景和中断冗余，均为厂商发布；[Akash 的 Razer 案例](https://akash.network/use-cases/ai-inference-and-training/)给出厂商归属客户指标。都不是对 Pearl 的客户评价。

## 网络安全：GPU 准入、攻击成本与共识实现

5.08% / 3.9% 是厂商在特定模型、GPU 配置下报告的推理增加开销，不是全网安全预算、攻击者的 GPU 租金或 51% 攻击成本。BTC 的 SHA-256 主要由 ASIC 挖矿，普通 GPU 可计算 SHA-256 但难有经济竞争力；Pearl 现行 INT PoW 可用多代通用 GPU 及部分其他硬件。单机门槛低有利于参与，也让现有或可租算力更易被短期调动，是否能攻击取决于同一时段能控制的有效网络算力、价格、租赁可得性、矿池和诚实算力反应，不能只凭单卡性能判断。

Pearl 通过难度目标使矿工竞争区块，节点验证交易规则和有效 PoW 证明，采用累计工作量的分支选择；攻击者拥有多数有效算力可以提高重组、双花或审查风险，但无法使遵守规则的节点接受无效签名或凭空增发。少于 50% 也可能概率性重组浅确认，时间、确认深度和攻击者持有/新增算力口径需分别写明。[Bitcoin 节点验证](https://bitcoin.org/en/bitcoin-core/features/validation)、[Pearl INT 白皮书](https://pearlresearch.ai/research/int-whitepaper)。

[2026-10-28 Pearlchain.live 快照](https://pearlchain.live/mining)：Kryptex 244 个区块、24h coinbase 归属出块占比 50.3%，PearlHash 18.6%、PearlFortune 9.7%，4.3% 未归属；数据为第三方标签与短样本，24小时出块占比不是持续有效算力精确份额，不等于一个人持有全部硬件，也不证明攻击或串谋。池控制模板的实际范围、矿工能多快转池未核实。另一 [PearlSonar](https://www.pearlsonar.com/pools) 页面同日快照 Kryptex 报 49.39% 网络份额、24h 248 个块、总块数 487，指标和时点不同；不要把两个数字混作同一时刻。池运营者若集中模板决策会带来可执行权风险。

已发生共识规则修订的直接证据：[Pearl PR #275](https://github.com/pearl-research-labs/pearl/pull/275) 于 2026-08-05 合并，写明原有 jackpot 边界让更高噪声 rank 可能以同等工作得到更容易的门槛，修订采用最低 rank 128 和 128/rank 惩罚，mainnet 配置高度 96251；这是规则缺陷与修订证据，不单独证明实际恶意攻击、盗币或双花。另 [PR #280](https://github.com/pearl-research-labs/pearl/pull/280)引入 salted noise seed 和 V3 certificate；不能由 PR 合并本身推断链上攻击发生。

经济学反方：[Rafael Pass 预印本](https://arxiv.org/html/2606.06700)在自由进入、竞争均衡等模型条件下推导多数攻击成本与区块奖励预算相联系；作者披露研究时为 Pearl 咨询。其指标是约定的单期机会成本并对攻击期间奖励可变现比例作假设，不是现实网络实测或无条件安全保证；租赁供给、算力集中、价格冲击、串通及模型漏洞仍需验证。可把短时租用攻击的粗框架写为“算力租金 + 能耗/服务等增量成本 + 执行成本 − 可实现收益”，但没有可锁定的海量同配置现货价格、时长和供给曲线，不估计具体攻击价。

安全与有用性是两道题：随机矩阵也可能构成有效计算，不证明有效工作来自真实客户；但随机工作仍可能消耗算力并提供 PoW 安全。反过来，零知识证明确认协议规定的计算，不能保证实际经济价值、代码没有漏洞或网络不被多数算力攻击。Bitcoin 与 Pearl 虽都常用 EH/s 标注，分别是 SHA-256 和 Pearl 专属工作估算，不能直接相除或用作安全倍数。

记录：pearl-rank-softfork-pr275@1、pearl-rank-penalty-evidence@1、pearlchain-pool-20261028@1、pearlchain-kryptex-24h-evidence@1；数据和结论 pending，无独立 reviewer，未自行运行节点复验。

## 发行、算力和收益

总供应上限 21 亿，194 秒目标出块，发行平滑衰减，H=650226 区块时累计约 50%，非比特币阶梯式减半。矿工期望收益约为有效算力占比×单位时间发行加手续费×币价×(1-矿池费)，之后减电费、维护、折旧和交易摩擦。不是 PRL 与 GPU 小时的固定兑换。

[Minerstat](https://minerstat.com/coin/prl) 的一次网页读取显示 81.63 EH/s、难度 49.30M、区块奖励 2.22k PRL；其页面币价 $0.10 与同页历史区间 $1.04–2.34 以及其他服务报价不一致，身份/数据冲突，不能直接采用。另一 [MiningBoard](https://miningboard.com/en/mining/pearl) 摘录 90.18 EH/s 与 $1.75；快照非同步。5 月论文 24 EH/s，2026-10-23 [浏览器](https://explorer.pearlified.com/) 73.87 EH/s；不同来源与窗口仅可表明数量级变化，不构成同源历史曲线或 GPU 台数。

情景计算：81.63 EH/s、2220 PRL/块、194 秒、$1.75/PRL（假设，非核实成交价）、1% pool fee；24 小时运行，不含交易费。年化或未来盈利不能由该静态截面推断。GPU功耗仅卡功率，$0.15/kWh；整机和制冷另算。RTX 4090 330 TH/s、370 W，RTX 5090 400 TH/s、520 W，RTX 5080 210 TH/s、220 W，5070 Ti 175 TH/s、200 W，取 [WhatToMine](https://www.whattomine.com/coins/469-prl-pearl/gpus) 输入；H100 743 TH/s、698W 取 [Linkrra](https://pool.linkrra.com/mining-cost)，不同测试工具故不可精确横比。出租方案的成交率、净分成和墙上功耗必须实测；[Vast FAQ](https://console.vast.ai/faq/)称 host 得成功任务收入 75%，报价与 host 设定价格存在差异，不可直接以客户最低报价作为 host payout。

## 挖矿与出租情景比较

下表为同一静态情景：网络 81.63 EH/s、奖励 2,220 PRL/块、目标 194 秒、PRL 价格 **假设** $1.75、矿池费 1%、全天运行、电价 $0.15/kWh。不能视为实时可成交收益；仅减显卡电费。来源与各矿工硬件输入见上节。

| GPU | TH/s | GPU W | PRL/日 | 美元/日，扣矿池费 | 美元/日，再扣显卡电费 |
|---|---:|---:|---:|---:|---:|
| RTX 5070 Ti | 175 | 200 | 2.10 | 3.67 | 2.95 |
| RTX 5080 | 210 | 220 | 2.52 | 4.41 | 3.61 |
| RTX 4090 | 330 | 370 | 3.96 | 6.92 | 5.59 |
| RTX 5090 | 400 | 520 | 4.80 | 8.39 | 6.52 |
| H100 | 743 | 698 | 8.91 | 15.59 | 13.08 |

出租比较：Vast 价格指南搜索索引显示 RTX 4090 最低/中位数 $0.14/$0.54 每小时、5090 $0.45/$0.77、H100 SXM $1.73/$2.40；索引显示更新于约 86 小时前，实时组件读取失败，不是实时可成交报价。[来源](https://vast.ai/article/how-much-does-it-cost-to-rent-a-gpu-in-the-cloud-live-pricing-guide)。假设 5090 客户价 $0.60/小时、出租率 70%、host 分成 75%，则日收入 $7.56；扣 520W 的出租期间 GPU 电费 $1.31 后约 $6.25，未扣其他成本。分成基数及具体设备可实现出租率未验证，不能把客户报价直接等同 host 到手。

## 部署线索

纯挖矿：准备 Pearl 主网公开收款地址，确认显卡、驱动、矿工与矿池版本，参考 [Pearl Fortune 的第三方指南](https://github.com/pearlfortune/pearl-miner)选择相符的 GPU / CUDA / 端口；启动后核查 accepted/rejected shares、矿池记账、到账及墙上功耗。官方推理兼挖路径见 [miner README](https://github.com/pearl-research-labs/pearl/blob/master/miner/README.md)，其测试支持范围写为 H100/H200。未安装、未运行、未验证特定设备。

## 分布式算力竞对：业务先于估值

2026-10-28 比较范围：外部 GPU/算力提供者参与供给、向客户交付推理、训练、渲染或租赁；Pearl 是 PoW 与推理结合，直接完成 GPU 市场撮合的程度待证。选 Render、Akash、Aethir、io.net、Nosana、Golem；去掉以存储为主和泛 AI 模型网络。Runpod / Vast.ai 列为中心化平台对照。网络之间存在供应商和集成关系，不能加总当作独立市场份额。

| 网络 | 客户获得的交付 | token 与需求的联系 | 核查边界 |
|---|---|---|---|
| Pearl | 推理 API；PoUW 链 | PRL 激励 PoW；推理 API 用美元 credits；用途与收入归属尚待证 | 真实付费推理占挖矿比例、网络营收未知；Together 的原 endpoint 已从 serverless 移除 |
| Render | GPU 图像渲染及扩展计算 | [BME](https://know.rendernetwork.com/basics/burn-mint-equilibrium)：任务付费与 burn，节点有 emissions | 渲染与 AI 两种任务不同；burn 不等于净利润 |
| Akash | GPU/CPU 计算租赁及部署 | 客户可 AKT/USDC 支付，AKT 用于 PoS | network spend 不等于协议收入或 token 持有人现金流 |
| Aethir | 企业 GPU、云游戏及推理 | [ATH](https://docs.aethir.com/aethir-tokenomics/ath-tokens-utility-and-purpose)支付、质押和奖励 | GPU containers 不是物理 GPU；营业及 token 权利口径待核 |
| io.net | 异构 GPU 资源/集群、推理服务 | [IDE](https://io.net/tokenomics) 声称向供应商付款后将剩余收入至少 50% burn；执行和费用口径待核 | 企业 GPU、在线卡、已租 GPU 分开 |
| Nosana | GPU 节点执行容器化推理任务 | [任务及节点](https://learn.nosana.com/deployments/jobs/job_execution_flow)，节点可获 NOS | 任务数和 job hours 非付费客户数或销售额 |
| Golem | 分布式 CPU / GPU 运算平台 | GLM 作为网络服务支付工具 | 广义 compute 对照，任务构成与利用率待核 |

### 可观察的业务规模（各自原口径）

[Render Foundation dashboard](https://stats.renderfoundation.com/)显示累计约 8,256 万 rendered frames、5,600 个历史节点；累计 frames 不等于收入、付费 GPU 小时或当前活跃节点。

[Akash 2025 年度回顾](https://akash.network/blog/akash-2025-year-in-review/)称全年 network USD spent $3.155M、126,025 新 lease、年末 active deployments 1,330；金额为网络支出，含 AKT 与 USDC，非该公司收入或持有人分红。其 [Razer 案例](https://akash.network/use-cases/ai-inference-and-training/)来自网络方发布，不作独立审计。

[Aethir 2025 回顾](https://aethir.com/blog-posts/aethirs-2025-wrap-up-decentralized-gpu-cloud-milestones)称 2025 network revenue $127.8M+、Q3 ARR $166M、累计 1.5B+ compute hours、440K+ GPU containers；均为项目方指标，统计实体、客户支付与代币激励拆分、审计及物理显卡数不明。不要把 ARR 与已实现年收入混同。其[后续说明](https://aethir.com/blog-posts/axe-compute-taps-penguin-solutions)称累计 network revenue $166M+，累计数与年度数和 ARR 不是同一分母。

[io.net 2024 state of network](https://io.net/stateofthenetwork)称累计交付 100 万小时、56 deals；这是较旧项目方数据，不作为当前销售规模。[Nosana 2026-01-30](https://nosana.com/blog/january-on-nosana-milestones-momentum-whats-next/)称累计 300 万 jobs、300 万 job hours；是否付费及收入未知。

[Runpod](https://www.runpod.io/press/runpod-raises-100m-summit-partners)于 2026-06-24 宣布 1B 美元融资估值及超 100 万开发者；这是公司股权融资估值、注册/使用口径依公司说法，不是 token FDV。Vast.ai 是相关 GPU 市场，未找到有可靠归属且可确认的融资估值；VAST Data 是另一家数据基础设施公司，不能混同。

### Token 估值快照：估值 reference

2026-10-28 CMC 页面抓取快照，非同秒，USD 百万美元，币价波动；引用固定登记记录 `depin-<名称>-mcap-20261028@1` 与 `depin-<名称>-fdv-20261028@1`。股权与币权不同，不直接合并。

| 网络 / token | 流通市值 M | FDV M | 流通比例 | Pearl FDV / 同列 FDV |
|---|---:|---:|---:|---:|
| [Pearl](https://coinmarketcap.com/currencies/pearlresearch/) PEARL | 593.88 | 3450 | 17.17% | 1.0x |
| [Render](https://coinmarketcap.com/currencies/render/) RENDER | 881.79 | 1090 | 80.53% | 3.2x |
| [Akash](https://coinmarketcap.com/currencies/akash-network/) AKT | 203.36 | 264.03 | 77.02% | 13.1x |
| [Aethir](https://coinmarketcap.com/currencies/aethir/) ATH | 117.53 | 245.25 | 47.93% | 14.1x |
| [io.net](https://coinmarketcap.com/currencies/io-net/) IO | 61.91 | 119.83 | 51.67% | 28.8x |
| [Golem](https://coinmarketcap.com/currencies/golem-network-tokens/) GLM | 110.33 | 110.33 | 100% | 31.3x |
| [Nosana](https://coinmarketcap.com/currencies/nosana/) NOS | 33.77 | 45.77 | 最大供应未给 | 75.4x |

CMC Pearl 页面显示总供应 225.82M 却显示流通 360.62M，存在供给字段冲突；FDV 使用价格乘 2.1B 上限，流通值待与链上同时间复核。CMC 对 Nosana 最大供应标为未知，FDV 反映其当前供应口径，并非已证明的协议最大供给上限。Render Foundation 页面报告不同流通数，跨链升级/桥接和第三方口径须勾稽。PRL ticker 与 [Perle](https://coinmarketcap.com/currencies/perle/) 同名冲突：此前 Minerstat 的 $0.10 与其交易对和市值同 Perle 接近，极可能混入 Perle 价格；原页面取价链未完全核验，不能用作 Pearl 价格，标为身份冲突。

FDV 是假定所有代币都以现价计价的静态乘法，不是销售公司股权所得，不是资产净值；PRL 未发行部分需要未来发行，且不断流入可能影响价格。Pearl 的币价也可能反映 PoW 货币属性、稀缺性、流动性和交易预期，不能归因全部来自算力业务。估值、流通率、客户实付、平台抽成和币持有人权利分别研究，不做 PE/PS 混算。

## 接续缺口

1. Pearl 按模型与地区的真实延迟、token 价格、用户与客户独立反馈。
2. 同款硬件同模型同 batch 同输入，vLLM 开关挖矿的吞吐、延迟、质量、增量功耗、实际有效份额与净收益。
3. FP8 官方最终激活高度、版本、每代 GPU 确切支持；主网实际硬分叉状态。
4. 按小时区间、同链同交易所的有效币价、可成交深度，链上发行与实时网络序列。
5. 外部 GPU host 的真实上架规则、利用率及净收入；完整电力和设备成本。

## NotebookLM 召回

[数据中心与算力基础设施 notebook](https://notebook.google.com/notebook/aebbbb1d-f497-4850-ab5d-f6b2f53c5e05)，问题：现有来源是否覆盖 Pearl Research、去中心化 GPU 计算平台及其客户反馈？请给原始出处与引用，区分同名项目，不推测。调用 2026-10-28，conversation 8c830db0-b958-4116-aba9-9a0f4dbe7bdc。原答称未覆盖 Pearl 与 Web3 GPU 平台，Pearl 一处为 Pearl River Delta，另论 GPUaaS 与边缘推理。此为模型检索结果，不能证明资料全无覆盖。原引用映射：1=1590d0c0-1d62-4568-ae96-76bbaeba589a；2–4=8e61d51f-8a93-4382-aec9-bec1cb410f0f；5=3aaf3e7e-7808-4c26-a300-1fafafa54c64；6–7=6c0b74fc-a6a5-495b-9836-7f5aed183053；8–9=ec475fe8-7257-4baa-acd7-ebeab28da1e1。返回的 citation 1 片段并未支持珠三角说法；原始 references 全文与网页会话持久性未保存/验证，不据此宣称引用核实。
