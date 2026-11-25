# NVIDIA

[返回主体档案库](../README.md) · [返回赛道总览](../../赛道总览.md) · [单篇导读索引](../../blogs/README.md)

- 主体类别：🏢 公司与产业主体 (Companies)
- 核心定位与说明：NVIDIA 开源评测工具链统一机构入口
- 关联账号与官方入口：
  - Company Official Site（NVIDIA）：[机构／作者主页](https://www.nvidia.com/) · 登记对象 `digest-publisher-479f42ca565a93f3c71cd2a0`
  - GitHub（NVIDIA）：[账号主页](https://github.com/NVIDIA) · 登记对象 `digest-publisher-65ef5c23b84176ec543431db` — NVIDIA 开源评测工具链统一机构入口

## 1. 核心研究问题与待核查争议（Questions & Open Debates）

### 🔍 待核查缺口与证据边界（Open Gaps）

- `not_disclosed`：NVIDIA/auto-ontology 官方 README 展示 BEAVER #1 与 BIRD-Interact #2 榜单徽章，但 README 与 auto-ontology-eval 说明均未直接披露对照 schema\_only\_sql 与 auto\_ontology\_sql 的具体绝对得分差值。 [线索](https://github.com/NVIDIA/auto-ontology-eval)（关联：[《NVIDIA Auto Ontology 是什麼？拆解 Text-to-SQL Agent 的程式與 LLM 邊界》](../../blogs/NVIDIA%20Auto%20Ontology%20%E6%98%AF%E4%BB%80%E9%BA%BC%EF%BC%9F%E6%8B%86%E8%A7%A3%20Text-to-SQL%20Agent%20%E7%9A%84%E7%A8%8B%E5%BC%8F%E8%88%87%20LLM%20%E9%82%8A%E7%95%8C.md)）
- `unavailable`：触发文章拆解的 LangGraph 常量（MAX\_RECONSTRUCTION\_ATTEMPTS = 7、软检查 5 次放行）未在本次拉取的 v1.3.0 主 README 与 react/agent.py 首屏复现，且外部榜单实时页与 docs/architecture.md 完整图谱细节未完整抓回，保留演进版本对照缺口。 [线索](https://github.com/NVIDIA/auto-ontology/blob/main/docs/architecture.md)（关联：[《NVIDIA Auto Ontology 是什麼？拆解 Text-to-SQL Agent 的程式與 LLM 邊界》](../../blogs/NVIDIA%20Auto%20Ontology%20%E6%98%AF%E4%BB%80%E9%BA%BC%EF%BC%9F%E6%8B%86%E8%A7%A3%20Text-to-SQL%20Agent%20%E7%9A%84%E7%A8%8B%E5%BC%8F%E8%88%87%20LLM%20%E9%82%8A%E7%95%8C.md)）

- [《NVIDIA Auto Ontology 是什麼？拆解 Text-to-SQL Agent 的程式與 LLM 邊界》](../../blogs/NVIDIA%20Auto%20Ontology%20%E6%98%AF%E4%BB%80%E9%BA%BC%EF%BC%9F%E6%8B%86%E8%A7%A3%20Text-to-SQL%20Agent%20%E7%9A%84%E7%A8%8B%E5%BC%8F%E8%88%87%20LLM%20%E9%82%8A%E7%95%8C.md)：已完成一手信源穿透：将触发线索 warmwater.dev（2026-11-13 技术博客拆解）降级为 trigger\_source，穿透定位至上游官方仓库 NVIDIA/auto-ontology（Apache-2.0，v1.3.0）及配套评测库 NVIDIA/auto-ontology-eval（NeMo Gym 对照基准）。实体统一归口至母体 NVIDIA（GitHub 与官网入口），不拆分子项目壳。核查发现上游主干已由早期 LangGraph 状态机演进为 ReAct 工具循环（retrieve / run\_sql / submit / predict），并与本工作台 Entity–Edge–Entity 本体设计完成可迁移边界对照；BEAVER/BIRD-Interact 具体得分差值及历史分支常量保留来源缺口。

## 2. 收录文章与一手材料（Ingested Articles & Primary Sources）

### [NVIDIA Auto Ontology 是什麼？拆解 Text-to-SQL Agent 的程式與 LLM 邊界](../../blogs/NVIDIA%20Auto%20Ontology%20%E6%98%AF%E4%BB%80%E9%BA%BC%EF%BC%9F%E6%8B%86%E8%A7%A3%20Text-to-SQL%20Agent%20%E7%9A%84%E7%A8%8B%E5%BC%8F%E8%88%87%20LLM%20%E9%82%8A%E7%95%8C.md)

2026-11-13 · 来源：NVIDIA · 状态：有来源缺口

[单篇导读（blogs/）](../../blogs/NVIDIA%20Auto%20Ontology%20%E6%98%AF%E4%BB%80%E9%BA%BC%EF%BC%9F%E6%8B%86%E8%A7%A3%20Text-to-SQL%20Agent%20%E7%9A%84%E7%A8%8B%E5%BC%8F%E8%88%87%20LLM%20%E9%82%8A%E7%95%8C.md) · [微信原件](../../../../raw/d57023a0925229bc822eb457ffb5a57eb21cc4549877118e7127ea7b5c5d31f4) · 固定版本 `digest-material-d57023a0925229bc822eb457ffb5a57eb21cc4549877118e7127ea7b5c5d31f4@1`

> 本文目錄這個系列如何閱讀？Auto Ontology 解決什麼問題？Auto Ontology 的架構由哪些部分組成？哪些決策交給程式，哪些交給 LLM？這條邊界為什麼需要 domain knowledge？Prompt、Context、Harness 各自如何實作？Prompt Engineering Context Engineering Harness Engineering哪些做法可以沿用到其他領域？

> 假設題目是這樣：設計一個系統，讓 agent 回答企業資料庫的問題。資料散在幾十張命名混亂的表裡，答案必須可信，無法回答時必須明確說明。

关联一手材料：

- NVIDIA/auto-ontology: Open-Source Enterprise Semantic Layer & Ontology-Grounded Text-to-SQL Framework（NVIDIA）· [原站](https://github.com/NVIDIA/auto-ontology) · [本地原件](../../../../raw/321fc0eb09d343a1319d67e96f8da96938279de32b1de7e4b4f50eaf1339142e) · 版本 `digest-material-321fc0eb09d343a1319d67e96f8da96938279de32b1de7e4b4f50eaf1339142e@1`
  > Agents can retrieve documents and query databases, but reliability gates agentic analytics: a revenue metric answered faster is worth nothing if the number is wrong. — 原文提取
- NVIDIA/auto-ontology-eval: Deterministic Text-to-SQL Ontology Evaluation Harness（NVIDIA）· [原站](https://github.com/NVIDIA/auto-ontology-eval) · [本地原件](../../../../raw/3cc59e2a68cd484573a410060a17b9364997859e3e6aab3069528c6e1f853d9d) · 版本 `digest-material-3cc59e2a68cd484573a410060a17b9364997859e3e6aab3069528c6e1f853d9d@1`
  > the ones it broke, so you can see where the difference comes from. — 原文提取


## 3. 关联实体网络（Verified Entity Ontology）

- ← 光轮智能（Lightwheel） · 联合推进 Isaac Lab / RoboFinals 与 Newton 物理仿真生态（decision1_verified/verified）
- ← Zhiqi Li · 任职 / 隶属（rule_verified/verified）
- → [Anthropic](../companies/Anthropic.md) · 投资 / 领投 · \$10.0B（rule_verified/verified）
- ← NVentures · 任职 / 隶属 · Corporate Venture Arm（rule_verified/verified）
