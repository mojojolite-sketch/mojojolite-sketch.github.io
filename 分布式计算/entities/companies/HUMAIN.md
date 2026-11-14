# HUMAIN

[返回主体档案库](../README.md) · [返回赛道总览](../../赛道总览.md) · [单篇导读索引](../../blogs/README.md)

- 主体类别：🏢 公司与产业主体 (Companies)
- 核心定位与说明：• 沙特主权AI全栈旗舰公司（PIF持股51% + 沙特阿美持股49%，CEO Tareq Amin）。 • 统筹沙特GW级AI数据中心（HUMAIN Core）、阿拉伯语大模型（ALLaM）与企业智能体系统（HUMAIN ONE），通过主权资本入股绑定xAI（\$3B / 500MW）与Luma AI（\$900M / 2GW），并采购高通200MW、NVIDIA 500MW、AMD/Cisco 1GW与Groq算力。
- 关联账号与官方入口：
  - 机构官网（HUMAIN）：[机构／作者主页](https://www.humain.com/) · 登记对象 `digest-publisher-dba86ca91919ee7e4cbe8dd0` — • 沙特主权AI全栈旗舰公司（PIF持股51% + 沙特阿美持股49%，CEO Tareq Amin）。 • 统筹沙特GW级AI数据中心（HUMAIN Core）、阿拉伯语大模型（ALLaM）与企业智能体系统（HUMAIN ONE），通过主权资本入股绑定xAI（\$3B / 500MW）与Luma AI（\$900M / 2GW），并采购高通200MW、NVIDIA 500MW、AMD/Cisco 1GW与Groq算力。

## 1. 核心研究问题与待核查争议（Questions & Open Debates）

### 💬 追问与核查：《高通争夺数据中心推理订单，近存计算能帮客户省钱吗？》

- 高通的芯片是自研的？有没有cross-verfification佐证HBC的18倍带宽，下游客户有谁？沙特的数据中心租给哪家模型厂？

关联文章：[《高通争夺数据中心推理订单，近存计算能帮客户省钱吗？》](../../blogs/%E9%AB%98%E9%80%9A%E4%BA%89%E5%A4%BA%E6%95%B0%E6%8D%AE%E4%B8%AD%E5%BF%83%E6%8E%A8%E7%90%86%E8%AE%A2%E5%8D%95%EF%BC%8C%E8%BF%91%E5%AD%98%E8%AE%A1%E7%AE%97%E8%83%BD%E5%B8%AE%E5%AE%A2%E6%88%B7%E7%9C%81%E9%92%B1%E5%90%97%EF%BC%9F.md)

> 追查结论摘要：1. 高通的数据中心芯片是自研的吗？——「NPU 推理核与 HBC 近存架构自研 + CPU（Nuvia）、高速互连（Alphawave）、AI 编译器（Modular）三大关键底座靠 64 亿美元并购拼齐 + 3D 堆叠 DRAM 靠三星/SK海力士与台积电联合代工」。它是典型的“自研移动 NPU 放大 + 激进外部并购补课”混血产物。

### 🔍 待核查缺口与证据边界（Open Gaps）

- `pending_verification`：高通标称的 AI250 单卡 133 TB/s（相对 AI200 的 18 倍）有效内存带宽与相对 HBM4 超过 5 倍的每瓦有效带宽，目前仅基于圣迭戈实验室自动测试设备（ATE）上 2 层堆叠 DRAM 验证样片在随机权重下的回路测试及面向 4 层堆叠目标工况的折算，尚无任何搭载完整 4 层 HBC 堆栈的 AI250 加速卡在真实生产大模型（如 Llama 3.1 70B/405B）及 MLPerf Inference 时延约束下的端到端吞吐、墙端实测功耗、晶圆间键合（W2W）量产良率与 Modular 编译器算子驻留率数据（AI250 预计 2027 年上半年才开始送样）。（关联：[《高通争夺数据中心推理订单，近存计算能帮客户省钱吗？》](../../blogs/%E9%AB%98%E9%80%9A%E4%BA%89%E5%A4%BA%E6%95%B0%E6%8D%AE%E4%B8%AD%E5%BF%83%E6%8E%A8%E7%90%86%E8%AE%A2%E5%8D%95%EF%BC%8C%E8%BF%91%E5%AD%98%E8%AE%A1%E7%AE%97%E8%83%BD%E5%B8%AE%E5%AE%A2%E6%88%B7%E7%9C%81%E9%92%B1%E5%90%97%EF%BC%9F.md)）
- `not_disclosed`：高通重申的 2027 财年 50 亿美元数据中心业务营收目标为涵盖服务器 CPU（Dragonfly C1000 / Meta 合作）、超大规模云厂商定制加速器/高速互连（AWS 等）及推理加速卡的部门合表口径，未单独披露 AI200 / AI250 的在手具备法律约束力的订单金额；同时沙特 HUMAIN 宣布的 200 MW 部署目标未拆分 AI200 与 AI250 的各自容量占比、单柜采购价格及具体交付验收时间表。（关联：[《高通争夺数据中心推理订单，近存计算能帮客户省钱吗？》](../../blogs/%E9%AB%98%E9%80%9A%E4%BA%89%E5%A4%BA%E6%95%B0%E6%8D%AE%E4%B8%AD%E5%BF%83%E6%8E%A8%E7%90%86%E8%AE%A2%E5%8D%95%EF%BC%8C%E8%BF%91%E5%AD%98%E8%AE%A1%E7%AE%97%E8%83%BD%E5%B8%AE%E5%AE%A2%E6%88%B7%E7%9C%81%E9%92%B1%E5%90%97%EF%BC%9F.md)）

- [《高通争夺数据中心推理订单，近存计算能帮客户省钱吗？》](../../blogs/%E9%AB%98%E9%80%9A%E4%BA%89%E5%A4%BA%E6%95%B0%E6%8D%AE%E4%B8%AD%E5%BF%83%E6%8E%A8%E7%90%86%E8%AE%A2%E5%8D%95%EF%BC%8C%E8%BF%91%E5%AD%98%E8%AE%A1%E7%AE%97%E8%83%BD%E5%B8%AE%E5%AE%A2%E6%88%B7%E7%9C%81%E9%92%B1%E5%90%97%EF%BC%9F.md)：完成久谦中台《高通争夺数据中心推理订单，近存计算能帮客户省钱吗？》一手信源追溯与用户四大追问深度核查：（1）穿透高通数据中心芯片五层技术血统：Hexagon NPU 张量核与 HBC 近存架构为高通圣迭戈内部自研（顶部堆叠 LPDDR5X 晶圆由三星与 SK 海力士联合开发供应，3nm 逻辑底座与晶圆级键合由台积电代工），而 Oryon 服务器 CPU（C1000）、高速 SerDes/UCIe 互连、跨硬件 AI 编译器分别源自收购 Nuvia（2021.03，\$1.4B）、Alphawave Semi（2025.12.18，\$2.4B EV）与 Modular Inc.（2026.07.28，FY26 10-K 会计购买价 \$2.6B / 头条估值 \$3.9B）；（2）交叉核验 HBC 的“18 倍带宽”：查明目前无任何独立第三方实测佐证，且 2026 年 11 月 2 日高通实验室在 ATE 上验证的仅是 2 层 DRAM 堆叠样片（商业版 AI250 需 4 层），18 倍系基于随机权重测试向 4 层目标工况折算的“堆栈内有效带宽（133 TB/s vs AI200 7.39 TB/s）”，并结合高通 7 月 30 日白皮书指出其在小 Batch 固定权重 FFN 上不如纯片上 SRAM、跨卡仅靠 PCIe 6.0 + RoCE 的物理边界；（3）核清高通下游客户结构：AI200/AI250 具名客户为沙特 HUMAIN（200 MW），而支撑 FY2027 \$5B 营收目标的主力还包括 Meta（2026.06 签署 C1000 服务器 CPU 多代际协议）与 AWS（定制加速器/互连及 DL2q）；（4）全景起底沙特 HUMAIN（PIF 51% + 沙特阿美 49%）数据中心下游租户版图：xAI（注资 \$3B 绑定 500 MW 沙特集群跑 Grok）、Luma AI（领投 \$900M C 轮绑定 2 GW Project Halo 集群）、OpenAI（经达曼 Groq 集群零日托管 gpt-oss-120B/20B）、Meta Llama / Mistral / DeepSeek / Qwen（利用 \$0.02–\$0.03/kWh 电价打造全球 Token 出口工厂）、AWS（50 MW AI Zone）及 SDAIA（ALLaM）与沙特阿美内生负载。

## 2. 收录文章与一手材料（Ingested Articles & Primary Sources）

### [高通争夺数据中心推理订单，近存计算能帮客户省钱吗？](../../blogs/%E9%AB%98%E9%80%9A%E4%BA%89%E5%A4%BA%E6%95%B0%E6%8D%AE%E4%B8%AD%E5%BF%83%E6%8E%A8%E7%90%86%E8%AE%A2%E5%8D%95%EF%BC%8C%E8%BF%91%E5%AD%98%E8%AE%A1%E7%AE%97%E8%83%BD%E5%B8%AE%E5%AE%A2%E6%88%B7%E7%9C%81%E9%92%B1%E5%90%97%EF%BC%9F.md)

2026-11-08 · 来源：Qualcomm HBC 实硅公告 · FY26 10-K · 状态：待云端同步

[单篇导读（blogs/）](../../blogs/%E9%AB%98%E9%80%9A%E4%BA%89%E5%A4%BA%E6%95%B0%E6%8D%AE%E4%B8%AD%E5%BF%83%E6%8E%A8%E7%90%86%E8%AE%A2%E5%8D%95%EF%BC%8C%E8%BF%91%E5%AD%98%E8%AE%A1%E7%AE%97%E8%83%BD%E5%B8%AE%E5%AE%A2%E6%88%B7%E7%9C%81%E9%92%B1%E5%90%97%EF%BC%9F.md) · [微信原件](../../../../raw/d773cd9467fb30671fcb6c5b71a5e1dc855aa919936c64582d2aab4c5b6e0eff) · 固定版本 `digest-material-d773cd9467fb30671fcb6c5b71a5e1dc855aa919936c64582d2aab4c5b6e0eff@1`

> 高通的AI200和AI250推理机柜都装56张加速卡，都配43 TB内存，整柜热设计功率也同为140 kW。差别最大的一栏是有效内存带宽。按高通公布的设计值，从AI200换到AI250，机柜内各卡合计的有效带宽约为上一代的18倍。同样多的卡和内存，为什么能多出这么多带宽？又有多少能变成客户愿意付钱的推理服务？

> 2026年11月2日，Jeff Burt在《The Next Platform》报道了高通首代高带宽计算（High Bandwidth Compute，HBC）硅片的进展。高通的做法是把一部分计算移到内存堆栈下方，让数据尽量在存放的地方算完，再把结果送回主芯片。公司已在实验室跑通这条路径，计划采用HBC的Dragonfly AI250预计于2027年上半年送样。

关联一手材料：

- Qualcomm Unveils AI200 and AI250 with Saudi HUMAIN 200MW Deployment & Saudi Sovereign AI Data Center Tenant Map (xAI 500MW, Luma 2GW, AWS, Groq, NVIDIA, AMD/Cisco)（Qualcomm Technologies, Inc. & HUMAIN (Public Investment Fund / Saudi Aramco Sovereign AI Company)）· [原站](https://www.qualcomm.com/news/releases/2025/10/qualcomm-unveils-ai200-and-ai250-redefining-rack-scale-data-center-inference-performance-for-the-ai-era) · [本地原件](../../../../raw/591775cc61581e54054a95caa600163c52f585c6534fbb0aacc3b3082b655540) · 版本 `digest-material-591775cc61581e54054a95caa600163c52f585c6534fbb0aacc3b3082b655540@1`
  > 3. Downstream Tenants: Which Model Labs & Workloads Actually Use Saudi Arabia's Data Centers? — 原文提取
