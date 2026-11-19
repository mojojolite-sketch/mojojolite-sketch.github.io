# Jiawei Jing

[返回主体档案库](../README.md) · [返回赛道总览](../../赛道总览.md) · [单篇导读索引](../../blogs/README.md)

- 主体类别：👤 个人与学者 (People)
- 核心定位与说明：围绕轨道 AI 数据中心热物理、太空碎片避让（DOI 10.21203/rs.3.rs-11500348/v1）及发射生命周期评估发表多项预印本。
- 关联账号与官方入口：
  - ResearchGate（Jiawei Jing）：[机构入口](https://www.researchgate.net/search/publication?q=Jiawei+Jing+Makuhari+Development+Corporation) · 登记对象 `digest-publisher-07b6f09096c7408e00308ed8` — 围绕轨道 AI 数据中心热物理、太空碎片避让（DOI 10.21203/rs.3.rs-11500348/v1）及发射生命周期评估发表多项预印本。

## 1. 核心研究问题与待核查争议（Questions & Open Debates）

### 🔍 待核查缺口与证据边界（Open Gaps）

- `unavailable`：受沙箱无外网直连及 ResearchGate / Research Square 全文抓取限制，未能下载 DOI 10.21203/rs.3.rs-11473415 完整 PDF；模型中太阳翼比功率（W/kg）、辐射器面密度（kg/m^2）及具体半导体工艺节点（FinFET/GAA 漏电拟合系数）逐式参数尚未核对。 [线索](https://www.researchgate.net/publication/406874564)（关联：[《Running orbital AI data centers hot: chip leakage matters as much as temperature tolerance》](../../blogs/Running%20orbital%20AI%20data%20centers%20hot_%20chip%20leakage%20matters%20as%20much%20as%20temperature%20tolerance.md)）
- `not_disclosed`：公开摘要未拆分逻辑芯片与 HBM 各自独立的静态漏电功率占比，亦未给出极端高漏电工艺下高温运行反转为「在轨总质量净增重」的临界拐点温度。 [线索](https://www.researchgate.net/publication/406874564)（关联：[《Running orbital AI data centers hot: chip leakage matters as much as temperature tolerance》](../../blogs/Running%20orbital%20AI%20data%20centers%20hot_%20chip%20leakage%20matters%20as%20much%20as%20temperature%20tolerance.md)）

- [《Running orbital AI data centers hot: chip leakage matters as much as temperature tolerance》](../../blogs/Running%20orbital%20AI%20data%20centers%20hot_%20chip%20leakage%20matters%20as%20much%20as%20temperature%20tolerance.md)：已通过 search\_web 核验 ResearchGate 406874564 / Research Square DOI 10.21203/rs.3.rs-11473415 论文主体归属（Jiawei Jing，Makuhari Development Corporation，日本千叶）与全套核心定量指标（350–385 K 辐射面对应 117–174 °C 结温需求、85 °C 附近每 22 K 漏电翻倍、150 °C 理想零漏电减重 23.5% vs 现实漏电抵消 90% 后仅剩 2.6%、冷却温差 40 K 压缩至 25 K 净减重 8.0%），并与本库三篇太空算力档案交叉对账。

## 2. 收录文章与一手材料（Ingested Articles & Primary Sources）

### [Running orbital AI data centers hot: chip leakage matters as much as temperature tolerance](../../blogs/Running%20orbital%20AI%20data%20centers%20hot_%20chip%20leakage%20matters%20as%20much%20as%20temperature%20tolerance.md)

2026-11-15 · 来源：Jiawei Jing (Makuhari Development Corporation) · 状态：有来源缺口

[单篇导读（blogs/）](../../blogs/Running%20orbital%20AI%20data%20centers%20hot_%20chip%20leakage%20matters%20as%20much%20as%20temperature%20tolerance.md) · [微信原件](../../../../raw/e3bd3a924f5a667c26f8f6b4e55f54bbec4b620f179d019b4a5592921feb3ba6) · 固定版本 `digest-material-e3bd3a924f5a667c26f8f6b4e55f54bbec4b620f179d019b4a5592921feb3ba6@1`

> 【信源巡检核心摘要】 2026年10月研究论文。构建耦合芯片结温、冷却回路、辐射器与光伏阵列的闭合在轨质量模型，指出尽管将辐射器工作温度升至350–385 K可依Stefan-Boltzmann T^4定律缩小散热面积与质量，但半导体芯片漏电功耗随温度指数上升，会大幅抵消高温散热减重收益。

关联一手材料：

- Running orbital AI data centers hot: chip leakage matters as much as temperature tolerance（Jiawei Jing (Makuhari Development Corporation)）· [原站](https://www.researchgate.net/publication/406874564) · [本地原件](../../../../raw/4f16432e5656295c62e186035d48d1d535625f7f586fb0712e6be7dbfccaaffb) · 版本 `digest-material-4f16432e5656295c62e186035d48d1d535625f7f586fb0712e6be7dbfccaaffb@1`
  > 2. Transistor Leakage Penalty vs. Thermal Tolerance: - Static transistor leakage power grows exponentially with rising silicon junction temperature: near 85 °C (median baseline), leakage power doubles roughly every 22 K. — 原文提取
