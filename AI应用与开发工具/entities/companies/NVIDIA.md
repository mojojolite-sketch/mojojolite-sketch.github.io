# NVIDIA

[返回主体档案库](../README.md) · [返回赛道总览](../../赛道总览.md) · [单篇导读索引](../../blogs/README.md)

- 主体类别：🏢 公司与产业主体 (Companies)
- 核心定位与说明：NVIDIA 开源评测工具链统一机构入口 统一归口 NVIDIA 母体公司入口
- 关联账号与官方入口：
  - Company Official Site（NVIDIA）：[机构／作者主页](https://www.nvidia.com/) · 登记对象 `digest-publisher-479f42ca565a93f3c71cd2a0` — 统一归口 NVIDIA 母体公司入口
  - GitHub（NVIDIA）：[账号主页](https://github.com/NVIDIA) · 登记对象 `digest-publisher-65ef5c23b84176ec543431db` — NVIDIA 开源评测工具链统一机构入口

## 1. 核心研究问题与待核查争议（Questions & Open Debates）

### 💬 追问与核查：《英伟达惊人论文引爆硅谷：AI推理成本暴降291倍！只靠CPU竟反超Opus》

- 真？有什么前提限制呢

关联文章：[《英伟达惊人论文引爆硅谷：AI推理成本暴降291倍！只靠CPU竟反超Opus》](../../blogs/%E8%8B%B1%E4%BC%9F%E8%BE%BE%E6%83%8A%E4%BA%BA%E8%AE%BA%E6%96%87%E5%BC%95%E7%88%86%E7%A1%85%E8%B0%B7%EF%BC%9AAI%E6%8E%A8%E7%90%86%E6%88%90%E6%9C%AC%E6%9A%B4%E9%99%8D291%E5%80%8D%EF%BC%81%E5%8F%AA%E9%9D%A0CPU%E7%AB%9F%E5%8F%8D%E8%B6%85Opus.md)

> 追查结论摘要：口径与利益：本核查穿透至上游一手论文 arXiv:2611.09891v1（作者 Peter Belcak、Pavlo Molchanov 等 5 人均隶属 NVIDIA 旗下 NVIDIA LPR Lab）与 Project Moonshot: LFI 主页，将微信公号报道降格为触发线索。作者所属机构的商业利益与研究动机在于探索「云端大模型做离线编译工厂 + 端侧低功耗 CPU 与 1B 小模型做高频执行」的混合分工，借此缓解高频 Agent 推理的边际成本瓶颈并提前卡位 …

### 🔍 待核查缺口与证据边界（Open Gaps）

- `not_disclosed`：arXiv:2611.09891v1 与 Project Moonshot: LFI 主页均未开源 CPU-ARC 运行时框架、Builder 提示词模板、微调后的 Llama 3.2 1B 权重或合成微调数据集，外部暂无法一键复现 Table 2 指标。 [线索](https://arxiv.org/abs/2611.09891)（关联：[《英伟达惊人论文引爆硅谷：AI推理成本暴降291倍！只靠CPU竟反超Opus》](../../blogs/%E8%8B%B1%E4%BC%9F%E8%BE%BE%E6%83%8A%E4%BA%BA%E8%AE%BA%E6%96%87%E5%BC%95%E7%88%86%E7%A1%85%E8%B0%B7%EF%BC%9AAI%E6%8E%A8%E7%90%86%E6%88%90%E6%9C%AC%E6%9A%B4%E9%99%8D291%E5%80%8D%EF%BC%81%E5%8F%AA%E9%9D%A0CPU%E7%AB%9F%E5%8F%8D%E8%B6%85Opus.md)）
- `not_disclosed`：论文全文未披露实际端到端推理延迟（如复杂科学题在本地 CPU 运行 EmbeddingGemma 300M 与 Llama 3.2 1B 消耗 1.8 万输入 Token 的实测耗时），亦未在低于 1,000 美元、40 瓦端侧硬件上实测能耗与吞吐，Table 2 成本按 2026 年 3 月云端 API 零售价估算。 [线索](https://arxiv.org/html/2611.09891v1)（关联：[《英伟达惊人论文引爆硅谷：AI推理成本暴降291倍！只靠CPU竟反超Opus》](../../blogs/%E8%8B%B1%E4%BC%9F%E8%BE%BE%E6%83%8A%E4%BA%BA%E8%AE%BA%E6%96%87%E5%BC%95%E7%88%86%E7%A1%85%E8%B0%B7%EF%BC%9AAI%E6%8E%A8%E7%90%86%E6%88%90%E6%9C%AC%E6%9A%B4%E9%99%8D291%E5%80%8D%EF%BC%81%E5%8F%AA%E9%9D%A0CPU%E7%AB%9F%E5%8F%8D%E8%B6%85Opus.md)）
- `pending_verification`：论文鲁棒性测试仅覆盖 8 项数学与科学问答基准中缓存已答对的样本子集，且扰动生成与结果裁判全部由 Claude Opus 4.5 担任，尚未在真实多轮企业 Agent 工具调用生产负载上做跨模型或人工盲测验证。 [线索](https://arxiv.org/html/2611.09891v1)（关联：[《英伟达惊人论文引爆硅谷：AI推理成本暴降291倍！只靠CPU竟反超Opus》](../../blogs/%E8%8B%B1%E4%BC%9F%E8%BE%BE%E6%83%8A%E4%BA%BA%E8%AE%BA%E6%96%87%E5%BC%95%E7%88%86%E7%A1%85%E8%B0%B7%EF%BC%9AAI%E6%8E%A8%E7%90%86%E6%88%90%E6%9C%AC%E6%9A%B4%E9%99%8D291%E5%80%8D%EF%BC%81%E5%8F%AA%E9%9D%A0CPU%E7%AB%9F%E5%8F%8D%E8%B6%85Opus.md)）
- `not_disclosed`：NVIDIA/auto-ontology 官方 README 展示 BEAVER #1 与 BIRD-Interact #2 榜单徽章，但 README 与 auto-ontology-eval 说明均未直接披露对照 schema\_only\_sql 与 auto\_ontology\_sql 的具体绝对得分差值。 [线索](https://github.com/NVIDIA/auto-ontology-eval)（关联：[《NVIDIA Auto Ontology 是什麼？拆解 Text-to-SQL Agent 的程式與 LLM 邊界》](../../blogs/NVIDIA%20Auto%20Ontology%20%E6%98%AF%E4%BB%80%E9%BA%BC%EF%BC%9F%E6%8B%86%E8%A7%A3%20Text-to-SQL%20Agent%20%E7%9A%84%E7%A8%8B%E5%BC%8F%E8%88%87%20LLM%20%E9%82%8A%E7%95%8C.md)）
- `unavailable`：触发文章拆解的 LangGraph 常量（MAX\_RECONSTRUCTION\_ATTEMPTS = 7、软检查 5 次放行）未在本次拉取的 v1.3.0 主 README 与 react/agent.py 首屏复现，且外部榜单实时页与 docs/architecture.md 完整图谱细节未完整抓回，保留演进版本对照缺口。 [线索](https://github.com/NVIDIA/auto-ontology/blob/main/docs/architecture.md)（关联：[《NVIDIA Auto Ontology 是什麼？拆解 Text-to-SQL Agent 的程式與 LLM 邊界》](../../blogs/NVIDIA%20Auto%20Ontology%20%E6%98%AF%E4%BB%80%E9%BA%BC%EF%BC%9F%E6%8B%86%E8%A7%A3%20Text-to-SQL%20Agent%20%E7%9A%84%E7%A8%8B%E5%BC%8F%E8%88%87%20LLM%20%E9%82%8A%E7%95%8C.md)）
- `unverified_claim`：实体关系入库跳过 (Auto Ontology --uses\_artifact--\> BEAVER)：谓词 'uses\_artifact' 不允许 to 实体类型 'concept'（仅允许 \['product'\]）（关联：[《NVIDIA Auto Ontology 是什麼？拆解 Text-to-SQL Agent 的程式與 LLM 邊界》](../../blogs/NVIDIA%20Auto%20Ontology%20%E6%98%AF%E4%BB%80%E9%BA%BC%EF%BC%9F%E6%8B%86%E8%A7%A3%20Text-to-SQL%20Agent%20%E7%9A%84%E7%A8%8B%E5%BC%8F%E8%88%87%20LLM%20%E9%82%8A%E7%95%8C.md)）
- `unverified_claim`：实体关系入库跳过 (Auto Ontology --uses\_artifact--\> BIRD-Interact)：谓词 'uses\_artifact' 不允许 to 实体类型 'concept'（仅允许 \['product'\]）（关联：[《NVIDIA Auto Ontology 是什麼？拆解 Text-to-SQL Agent 的程式與 LLM 邊界》](../../blogs/NVIDIA%20Auto%20Ontology%20%E6%98%AF%E4%BB%80%E9%BA%BC%EF%BC%9F%E6%8B%86%E8%A7%A3%20Text-to-SQL%20Agent%20%E7%9A%84%E7%A8%8B%E5%BC%8F%E8%88%87%20LLM%20%E9%82%8A%E7%95%8C.md)）
- `unverified_claim`：实体关系入库跳过 (Auto Ontology --partners\_with--\> Snowflake)：谓词 'partners\_with' 不允许 from 实体类型 'product'（仅允许 \['company', 'organization', 'business', 'person'\]）（关联：[《NVIDIA Auto Ontology 是什麼？拆解 Text-to-SQL Agent 的程式與 LLM 邊界》](../../blogs/NVIDIA%20Auto%20Ontology%20%E6%98%AF%E4%BB%80%E9%BA%BC%EF%BC%9F%E6%8B%86%E8%A7%A3%20Text-to-SQL%20Agent%20%E7%9A%84%E7%A8%8B%E5%BC%8F%E8%88%87%20LLM%20%E9%82%8A%E7%95%8C.md)）
- `unverified_claim`：实体关系入库跳过 (Auto Ontology --partners\_with--\> Databricks)：谓词 'partners\_with' 不允许 from 实体类型 'product'（仅允许 \['company', 'organization', 'business', 'person'\]）（关联：[《NVIDIA Auto Ontology 是什麼？拆解 Text-to-SQL Agent 的程式與 LLM 邊界》](../../blogs/NVIDIA%20Auto%20Ontology%20%E6%98%AF%E4%BB%80%E9%BA%BC%EF%BC%9F%E6%8B%86%E8%A7%A3%20Text-to-SQL%20Agent%20%E7%9A%84%E7%A8%8B%E5%BC%8F%E8%88%87%20LLM%20%E9%82%8A%E7%95%8C.md)）

- [《英伟达惊人论文引爆硅谷：AI推理成本暴降291倍！只靠CPU竟反超Opus》](../../blogs/%E8%8B%B1%E4%BC%9F%E8%BE%BE%E6%83%8A%E4%BA%BA%E8%AE%BA%E6%96%87%E5%BC%95%E7%88%86%E7%A1%85%E8%B0%B7%EF%BC%9AAI%E6%8E%A8%E7%90%86%E6%88%90%E6%9C%AC%E6%9A%B4%E9%99%8D291%E5%80%8D%EF%BC%81%E5%8F%AA%E9%9D%A0CPU%E7%AB%9F%E5%8F%8D%E8%B6%85Opus.md)：已穿透核查上游一手论文 arXiv:2611.09891v1（HTML 全文）及 NVIDIA LPR Lab Project Moonshot: Local Frontier Intelligence 官方项目页，逐表对照 Table 2、Appendix C 逐角色 Token 账单与 Appendix D 1B 模型微调配方，微信公号稿降格为 trigger\_source；未开源代码、未披露端到端延迟与端侧功耗实测登记为规范缺口。
- [《NVIDIA Auto Ontology 是什麼？拆解 Text-to-SQL Agent 的程式與 LLM 邊界》](../../blogs/NVIDIA%20Auto%20Ontology%20%E6%98%AF%E4%BB%80%E9%BA%BC%EF%BC%9F%E6%8B%86%E8%A7%A3%20Text-to-SQL%20Agent%20%E7%9A%84%E7%A8%8B%E5%BC%8F%E8%88%87%20LLM%20%E9%82%8A%E7%95%8C.md)：已完成一手信源穿透：将触发线索 warmwater.dev（2026-11-13 技术博客拆解）降级为 trigger\_source，穿透定位至上游官方仓库 NVIDIA/auto-ontology（Apache-2.0，v1.3.0）及配套评测库 NVIDIA/auto-ontology-eval（NeMo Gym 对照基准）。实体统一归口至母体 NVIDIA（GitHub 与官网入口），不拆分子项目壳。核查发现上游主干已由早期 LangGraph 状态机演进为 ReAct 工具循环（retrieve / run\_sql / submit / predict），并与本工作台 Entity–Edge–Entity 本体设计完成可迁移边界对照；BEAVER/BIRD-Interact 具体得分差值及历史分支常量保留来源缺口。

## 2. 收录文章与一手材料（Ingested Articles & Primary Sources）

### [英伟达惊人论文引爆硅谷：AI推理成本暴降291倍！只靠CPU竟反超Opus](../../blogs/%E8%8B%B1%E4%BC%9F%E8%BE%BE%E6%83%8A%E4%BA%BA%E8%AE%BA%E6%96%87%E5%BC%95%E7%88%86%E7%A1%85%E8%B0%B7%EF%BC%9AAI%E6%8E%A8%E7%90%86%E6%88%90%E6%9C%AC%E6%9A%B4%E9%99%8D291%E5%80%8D%EF%BC%81%E5%8F%AA%E9%9D%A0CPU%E7%AB%9F%E5%8F%8D%E8%B6%85Opus.md)

2026-11-28 · 来源：NVIDIA LPR Lab (arXiv:2611.09891) · 状态：有来源缺口

[单篇导读（blogs/）](../../blogs/%E8%8B%B1%E4%BC%9F%E8%BE%BE%E6%83%8A%E4%BA%BA%E8%AE%BA%E6%96%87%E5%BC%95%E7%88%86%E7%A1%85%E8%B0%B7%EF%BC%9AAI%E6%8E%A8%E7%90%86%E6%88%90%E6%9C%AC%E6%9A%B4%E9%99%8D291%E5%80%8D%EF%BC%81%E5%8F%AA%E9%9D%A0CPU%E7%AB%9F%E5%8F%8D%E8%B6%85Opus.md) · [微信原件](../../../../raw/be551686598537bf1885c624420a7061b189a5187e6b78e6cb516574f111ebeb) · 固定版本 `digest-material-be551686598537bf1885c624420a7061b189a5187e6b78e6cb516574f111ebeb@1`

> 在这篇编号为 arXiv:2611.09891 的论文里，Pavlo Molchanov 与 Peter Belcak 等五位研究员抛出了一套名为 CPU-ARC（智能体推理缓存） 的新架构。 结论极其反直觉：把顶级大模型昂贵的“思考过程”直接编译成普通 CPU 代码； 之后遇到同类问题，哪怕题面改了措辞、换了数字，也不再呼叫大模型，直接在 CPU 上跑代码求解。

> 但在本来就很便宜的 GSM8K 小学数学题上，单次解题才 1 美分，构建却要花掉 0.85 美元（贵了 83.7 倍），你必须把同一类题重复跑够 90 次以上才能回本！ 如果是只问一次的开放式问题，用这套方案纯粹是赔本赚吆喝。

关联一手材料：

- CPU-ARC: Agentic Reasoning Caching for on-CPU Reasoning Reuse (arXiv:2611.09891v1)（NVIDIA LPR Lab）· [原站](https://arxiv.org/abs/2611.09891) · [本地原件](../../../../raw/48a053f55cfad8f77c1dd67c130342e93d07018b69fa1c9671e2e9719ff907b7) · 版本 `digest-material-48a053f55cfad8f77c1dd67c130342e93d07018b69fa1c9671e2e9719ff907b7@1`
  > Large language models re-invent the wheel all the time. They conflate task-solving with the execution of the solutions, which forces them to solve every problem from scratch. — 原文提取

### [NVIDIA Auto Ontology 是什麼？拆解 Text-to-SQL Agent 的程式與 LLM 邊界](../../blogs/NVIDIA%20Auto%20Ontology%20%E6%98%AF%E4%BB%80%E9%BA%BC%EF%BC%9F%E6%8B%86%E8%A7%A3%20Text-to-SQL%20Agent%20%E7%9A%84%E7%A8%8B%E5%BC%8F%E8%88%87%20LLM%20%E9%82%8A%E7%95%8C.md)

2026-11-13 · 来源：NVIDIA (auto-ontology & auto-ontology-eval) · 状态：有来源缺口

[单篇导读（blogs/）](../../blogs/NVIDIA%20Auto%20Ontology%20%E6%98%AF%E4%BB%80%E9%BA%BC%EF%BC%9F%E6%8B%86%E8%A7%A3%20Text-to-SQL%20Agent%20%E7%9A%84%E7%A8%8B%E5%BC%8F%E8%88%87%20LLM%20%E9%82%8A%E7%95%8C.md) · [微信原件](../../../../raw/d57023a0925229bc822eb457ffb5a57eb21cc4549877118e7127ea7b5c5d31f4) · 固定版本 `digest-material-d57023a0925229bc822eb457ffb5a57eb21cc4549877118e7127ea7b5c5d31f4@1`

> 本文目錄這個系列如何閱讀？Auto Ontology 解決什麼問題？Auto Ontology 的架構由哪些部分組成？哪些決策交給程式，哪些交給 LLM？這條邊界為什麼需要 domain knowledge？Prompt、Context、Harness 各自如何實作？Prompt Engineering Context Engineering Harness Engineering哪些做法可以沿用到其他領域？

> 假設題目是這樣：設計一個系統，讓 agent 回答企業資料庫的問題。資料散在幾十張命名混亂的表裡，答案必須可信，無法回答時必須明確說明。

关联一手材料：

- NVIDIA/auto-ontology: Open-Source Enterprise Semantic Layer & Ontology-Grounded Text-to-SQL Framework（NVIDIA）· [原站](https://github.com/NVIDIA/auto-ontology) · [本地原件](../../../../raw/321fc0eb09d343a1319d67e96f8da96938279de32b1de7e4b4f50eaf1339142e) · 版本 `digest-material-321fc0eb09d343a1319d67e96f8da96938279de32b1de7e4b4f50eaf1339142e@1`
  > Agents can retrieve documents and query databases, but reliability gates agentic analytics: a revenue metric answered faster is worth nothing if the number is wrong. — 原文提取
- NVIDIA/auto-ontology-eval: Deterministic Text-to-SQL Ontology Evaluation Harness（NVIDIA）· [原站](https://github.com/NVIDIA/auto-ontology-eval) · [本地原件](../../../../raw/3cc59e2a68cd484573a410060a17b9364997859e3e6aab3069528c6e1f853d9d) · 版本 `digest-material-3cc59e2a68cd484573a410060a17b9364997859e3e6aab3069528c6e1f853d9d@1`
  > the ones it broke, so you can see where the difference comes from. — 原文提取


## 3. 关联实体网络（Verified Entity Ontology）

- ← Cerebras Systems Inc. · 竞争 / 对标（rule_verified/verified）
- ← [NVIDIA LPR Lab](../labs/NVIDIA%20LPR%20Lab.md) · 任职 / 隶属 · Research（rule_verified/verified）
- ← 光轮智能（Lightwheel） · 联合推进 Isaac Lab / RoboFinals 与 Newton 物理仿真生态（decision1_verified/verified）
- ← Zhiqi Li · 任职 / 隶属（rule_verified/verified）
- → [Anthropic](../companies/Anthropic.md) · 投资 / 领投 · \$10.0B [2026-11-17..至今]（rule_verified/verified）
- ← NVIDIA Seattle Robotics Lab · 任职 / 隶属 · Research Lab（rule_verified/verified）
- ← NVentures · 任职 / 隶属 · Corporate Venture Arm（rule_verified/verified）
- → [Mercor](../companies/Mercor.md) · 投资 / 领投 · Series D [2026-11-10..至今]（rule_verified/verified）
- ← Kaushil Kundalia · 任职 / 隶属 · Early Member, GR00T Team（曾任） [已离任/曾任]（rule_verified/verified）
- → [Cognition](../companies/Cognition.md) · 供应 / 服务（rule_verified/verified）
