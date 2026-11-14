# Lawrence Berkeley National Laboratory

[返回主体档案库](../README.md) · [返回赛道总览](../../赛道总览.md) · [单篇导读索引](../../blogs/README.md)

- 主体类别：🏛️ 实验室、高校与机构平台 (Labs & Institutions)
- 核心定位与说明：• 美国能源部下属国家实验室，John Shalf 长期从事超算体系结构与互连研究。 • HotI 2026 论文合作方，提供 HPC 互连建模视角。
- 关联账号与官方入口：
  - 机构官网（Lawrence Berkeley National Laboratory）：[机构／作者主页](https://www.lbl.gov/) · 登记对象 `digest-publisher-f1179d2ba56d960557974221` — • 美国能源部下属国家实验室，John Shalf 长期从事超算体系结构与互连研究。 • HotI 2026 论文合作方，提供 HPC 互连建模视角。

## 1. 核心研究问题与待核查争议（Questions & Open Debates）

### 💬 追问与核查：《Turbalance：通过大基数交换机突破"网络墙"》

- 有趣有趣，意思是说交换机的代际升级可以有两个方向：单接口速率和更多的接口，这两个方向的技术瓶颈分别在哪里呢？有哪些供应商在比较领先的位置？

关联文章：[《Turbalance：通过大基数交换机突破"网络墙"》](../../blogs/Turbalance%EF%BC%9A%E9%80%9A%E8%BF%87%E5%A4%A7%E5%9F%BA%E6%95%B0%E4%BA%A4%E6%8D%A2%E6%9C%BA%E7%AA%81%E7%A0%B4_%E7%BD%91%E7%BB%9C%E5%A2%99_.md)

> 追查结论摘要：来源：IEEE Hot Interconnects 33 (HotI 2026) · P. Berdesinski, L. Montigny (Turbalance) & J. Shalf, G. Michelogiannakis (LBNL)：Breaking Through the Network Wall: Petabit-Class Switching for Single-Hop MoE Training at Scale（2026-08）；对照一手：Broadco…

### 🔍 待核查缺口与证据边界（Open Gaps）

- `unavailable`：HotI 2026 论文 PDF 与演讲幻灯片未能直连获取（工作区网络策略拒绝 hoti.org，HTTP 403）；场景 A/B 具体数字与仿真器设定仍以微信编译稿为准，待读原文复核。（关联：[《Turbalance：通过大基数交换机突破"网络墙"》](../../blogs/Turbalance%EF%BC%9A%E9%80%9A%E8%BF%87%E5%A4%A7%E5%9F%BA%E6%95%B0%E4%BA%A4%E6%8D%A2%E6%9C%BA%E7%AA%81%E7%A0%B4_%E7%BD%91%E7%BB%9C%E5%A2%99_.md)）
- `pending_verification`：文中“Colossus 1 规模（约 20,000 GPU）年省约 13 亿美元”与公开报道约 200,000 颗 GPU 不符；按 20 万卡反推约 \$3.1/GPU·h 才合理，疑为漏写一个 0，待论文原文核对。（关联：[《Turbalance：通过大基数交换机突破"网络墙"》](../../blogs/Turbalance%EF%BC%9A%E9%80%9A%E8%BF%87%E5%A4%A7%E5%9F%BA%E6%95%B0%E4%BA%A4%E6%8D%A2%E6%9C%BA%E7%AA%81%E7%A0%B4_%E7%BD%91%E7%BB%9C%E5%A2%99_.md)）
- `pending_verification`：All-to-All 加速 4.50× 恰等于每 GPU 跨机架带宽之比 28.8T/6.4T；论文是否提供同带宽多层 CLOS 对照以拆分“带宽增加”与“单跳拓扑”的贡献，尚未确认。（关联：[《Turbalance：通过大基数交换机突破"网络墙"》](../../blogs/Turbalance%EF%BC%9A%E9%80%9A%E8%BF%87%E5%A4%A7%E5%9F%BA%E6%95%B0%E4%BA%A4%E6%8D%A2%E6%9C%BA%E7%AA%81%E7%A0%B4_%E7%BD%91%E7%BB%9C%E5%A2%99_.md)）
- `pending_verification`：“2017→2026 交换机带宽增长约 14×、GPU FP16 增长约 80×”的基准芯片与口径未披露（TH3 12.8T 基准为 8×，TH2 6.4T 基准为 16×）。（关联：[《Turbalance：通过大基数交换机突破"网络墙"》](../../blogs/Turbalance%EF%BC%9A%E9%80%9A%E8%BF%87%E5%A4%A7%E5%9F%BA%E6%95%B0%E4%BA%A4%E6%8D%A2%E6%9C%BA%E7%AA%81%E7%A0%B4_%E7%BD%91%E7%BB%9C%E5%A2%99_.md)）

- [《Turbalance：通过大基数交换机突破"网络墙"》](../../blogs/Turbalance%EF%BC%9A%E9%80%9A%E8%BF%87%E5%A4%A7%E5%9F%BA%E6%95%B0%E4%BA%A4%E6%8D%A2%E6%9C%BA%E7%AA%81%E7%A0%B4_%E7%BD%91%E7%BB%9C%E5%A2%99_.md)：穿透光芯纪编译稿，定位上游一手为 IEEE Hot Interconnects 2026 论文（Turbalance × LBNL，Berdesinski/Montigny/Shalf/Michelogiannakis）；纠正 Turbalance 为 AI 基础设施仿真软件公司而非交换芯片商；对照 Broadcom TH6、NVIDIA SN6800、Cisco G300、IEEE P802.3dj/400G-per-lane、OIF CEI-448G 复核文中芯片数字，指出 Colossus 规模疑似漏 0、交换机减少为 79.5%、4.5× All-to-All 加速等于带宽比；回答单 lane 速率与 radix 两条路线的瓶颈与领先供应商。论文 PDF 因网络策略未取得。

## 2. 收录文章与一手材料（Ingested Articles & Primary Sources）

### [Turbalance：通过大基数交换机突破"网络墙"](../../blogs/Turbalance%EF%BC%9A%E9%80%9A%E8%BF%87%E5%A4%A7%E5%9F%BA%E6%95%B0%E4%BA%A4%E6%8D%A2%E6%9C%BA%E7%AA%81%E7%A0%B4_%E7%BD%91%E7%BB%9C%E5%A2%99_.md)

2026-11-09 · 来源：IEEE HotI 2026 · Turbalance × LBNL · 状态：待云端同步

[单篇导读（blogs/）](../../blogs/Turbalance%EF%BC%9A%E9%80%9A%E8%BF%87%E5%A4%A7%E5%9F%BA%E6%95%B0%E4%BA%A4%E6%8D%A2%E6%9C%BA%E7%AA%81%E7%A0%B4_%E7%BD%91%E7%BB%9C%E5%A2%99_.md) · [微信原件](../../../../raw/b7fc26f540dd2d257cd92a5e0dcf41d861232510403437d685e70fe87d460999) · 固定版本 `digest-material-b7fc26f540dd2d257cd92a5e0dcf41d861232510403437d685e70fe87d460999@1`

> 训练一个 20T 参数、2304 个专家的混合专家模型，卡脖子的究竟是 GPU 还是网络？Turbalance 与劳伦斯伯克利国家实验室的团队用仿真给出答案：把传统多层网络换成 72 台 1Pbps 交换机构成的扁平单跳网络，作业完成时间快27.5%，GPU利用率从 64% 升到 88%。同样的模型、同样的GPU，唯一的变量是网络。

> 以 2017 年为基准，到 2026 年，GPU算力（FP16）增长约 80 倍，交换机带宽只增长约 14 倍。今天限制大模型训练的不再是 GPU，而是互连网络。而混合专家（MoE）让问题更尖锐：专家路由把每一步训练都变成一次 All-to-All 通信。

关联一手材料：

- Breaking Through the Network Wall: Petabit-Class Switching for Single-Hop MoE Training at Scale (IEEE Hot Interconnects 2026)（IEEE HotI 2026 · Turbalance × LBNL）· [原站](https://hoti.org/) · [本地原件](../../../../raw/3882b0119199a37a7d67e44417364f9c846a68340fc1d785b0e6d7324407fbc3) · 版本 `digest-material-3882b0119199a37a7d67e44417364f9c846a68340fc1d785b0e6d7324407fbc3@1`
  > Venue: IEEE Hot Interconnects 33 (HotI 2026), symposium held August 2026 (virtual). — 原文提取
