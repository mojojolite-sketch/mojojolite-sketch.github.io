---
title: "Running orbital AI data centers hot: chip leakage matters as much as temperature tolerance"
type: blog_digest
sector: "分布式计算"
source: "Jiawei Jing (Makuhari Development Co"
published_at: "2026-11-15"
raw_sha256: "e3bd3a924f5a667c26f8f6b4e55f54bbec4b620f179d019b4a5592921feb3ba6"
material_version: "digest-material-e3bd3a924f5a667c26f8f6b4e55f54bbec4b620f179d019b4a5592921feb3ba6@1"
origin_url: "https://www.researchgate.net/publication/406874564"
trigger_source: "Jiawei Jing et al. (Preprint)"
trigger_url: "https://www.researchgate.net/publication/406874564"
user_comments: ""
status: "processed_with_gaps"
---

<a id="digest-e3bd3a924f5a667c"></a>
# Running orbital AI data centers hot: chip leakage matters as much as temperature tolerance

2026-11-15 · Jiawei Jing (Makuhari Development Co · 有来源缺口

[本地原件归档](../../../raw/e3bd3a924f5a667c26f8f6b4e55f54bbec4b620f179d019b4a5592921feb3ba6) · 固定材料版本 `digest-material-e3bd3a924f5a667c26f8f6b4e55f54bbec4b620f179d019b4a5592921feb3ba6@1` · [一手原站](https://www.researchgate.net/publication/406874564)

## 深度拆解与复核

==场景与利益披露==：本文《Running orbital AI data centers hot: chip leakage matters as much as temperature tolerance》（ResearchGate 406874564 / Research Square Preprint DOI 10.21203/rs.3.rs-11473415，2026 年 10 月发表、本库索引日期 2026-11-15）由独立研究者 Jiawei Jing（任职于日本千叶 Makuhari Development Corporation）撰写。相比商业航天公司或太空算力初创企业倾向展示「高工作温度按 Stefan-Boltzmann T^4 定律压缩散热翼」的理想上限，该研究以半导体器件热漏电反馈为核心约束构建闭合质量模型，视角偏向系统物理纠偏。

### 一、 闭合在轨质量模型与 90% 减重抵消机制拆解

1. 高温辐射翼诱惑与器件温度墙：在真空轨道中，高功率算力集群（地面集群已因 CPO 光互连与机柜密度推高单节点热流）只能依靠辐射排热。部分轨道算力方案主张将散热辐射面推高至 350–385 K，利用辐射通量与绝对温度四次方（T^4）成正比的物理规律压减辐射器面积与重量；但考虑到芯片封装到辐射翼之间的传热温差，350–385 K 辐射面要求逻辑芯片与 HBM 高带宽内存耐受 117–174 °C 的高结温，显著高于地面商用上限（逻辑芯片 85 °C、HBM 95 °C）。
2. 静态漏电的指数反噬（本工作台核查）：Jiawei Jing 在模型中串联了芯片结温、冷却回路、辐射器与光伏供电阵列的耦合反馈——硅基晶体管静态漏电功耗随结温升高呈指数上升，在 85 °C 基准附近大约每升高 22 K 翻倍。若假设芯片零漏电，将芯片与 HBM 耐温上限放宽至 150 °C 理论上可通过缩小辐射翼节省高达 23.5% 的在轨总质量；但计入真实芯片漏电随温度增长后，多出的静态废热与被迫扩容的光伏发电阵质量直接抵消了约 90%（九成）的散热器减重收益，在标称辐射器配置下净质量节省仅剩 2.6%。
3. 工程破局杠杆（压缩芯片至冷却液温差）：模型对比了另一条热设计路径——与其硬扛高结温触发漏电雪崩，不如通过封装与微通道液冷优化，将芯片和 HBM 到冷却液的温差（Delta-T）从 40 K 压低至 25 K。这一改进可在不进一步加热硅晶体管结温的前提下抬高冷却液与辐射面温度，从而实现约 8.0% 的在轨总质量节省，其实际减重收益大幅跑赢单纯放宽芯片耐温阈值。

### 二、 原位物理核查与库内三篇太空算力档案交叉对账

- ✅ Stefan-Boltzmann T^4 与 22 K 漏电倍增的量纲对账（本工作台核查）：若将辐射面从 300 K 抬升至 360 K（+20% 绝对温度），理论上每平米辐射功率可增至 (360/300)^4 = 2.07 倍；但若对应芯片结温同步从 85 °C（358 K）上升 65 K 至 150 °C（423 K），按每 22 K 翻倍计算，静态漏电电流将激增 2^(65/22) = 7.75 倍。当现代大芯片在高温区静态漏电占比攀升至总功耗的 20%–35% 时，光伏阵（每 1 MW 需搭配约 4–5 倍于辐射翼面积的太阳翼）与散热总载荷同步膨胀，恰好解释了为何零漏电口径 23.5% 的减重在真实芯片上被吞噬九成至 2.6%。
- ⚠️ 与《Reduced-Mass Orbital AI Inference via Integrated Solar, Compute, and Radiator Panels》（arXiv:2604.07760）对账（本工作台推断）：Gaalema、Indyk 与 Staley 提出的三合一集成面板（ISCR）选择将芯片结温压低在约 40 °C（313.15 K），靠 16,000 块面板展开 44,000 m^2 换取 150 公吨整星与 >100 kW/吨比功率。本库前序核查曾指出该方案在 40 °C 下单面净排热极紧（<491 W/m^2）；==Jiawei Jing 的漏电模型则从半导体侧反向补强了 Gaalema 低温路线的底层合理性==——40 °C 结温彻底规避了 85 °C 以上漏电指数放大区间，用面积冗余换取算力有效能效与光伏质量最小化。
- ⚠️ 与《Orbital Data Centers: Spacecraft Constraints and Economic Viability》（arXiv:2604.27197）对账（本工作台推断）：JPL 学者 Slava G. Turyshev 基于低温散热（2,500 m^2/MW，约 300 K）测算出 1 MW 节点核心三系统重 29.4 kg/kW、整星高达 34–59 kg/kW，在 \$250–\$1,000/kg 综合预算上限下已较 Falcon 9 单发低 3.4–13.5 倍。商业航天界长期寄望于「耐高温芯片+高 T^4 散热」一步把整星压进 10–13 kg/kW；Jiawei Jing 证明仅靠耐受 150 °C 高温只能削减 2.6% 质量，远不足以跨越 Turyshev 划定的数倍质量与成本鸿沟。
- ⚠️ 与《Shaun Maguire Shares SpaceX AI Compute Data Center Revenue Projections on X》对账（本工作台核查）：Maguire 模型隐含 StarMind AI1 将辐射板推高至 335–353 K（160 m^2 排 175 kW、即 1,094 W/m^2）、GPU 约 370 K（97 °C）以冲刺 10.0–13.3 kg/kW（75–100 kW/吨），并在 2028 年 250 发星舰约束下给出天基算力上限 1.9–3.75 GW。对照 Jiawei Jing 的定量结论，SpaceX 高温刀锋派已经逼近「漏电陡增区间与 HBM4 85–95 °C 热墙」的边缘：==若无低漏电定制制程（如 FD-SOI 或高阈值电压宇航芯片）以及将芯片-冷却液温差压至 <=25 K 的相变微通道封装，强行靠升温缩减辐射翼不仅无助于提高算力星比功率，反而会拖累光伏太阳翼面积与整星发数上行==。

| 轨道算力热设计流派 | 目标辐射/结温区间 | 标称整星质量比功率 | 对静态漏电惩罚的暴露度 |
| :--- | :--- | :--- | :--- |
| Turyshev 保守闭合派（arXiv:2604.27197） | 辐射 ~300 K（2,500 m^2/MW） | 34–59 kg/kW（基准 40 kg/kW） | 低（常规低温工作区，但发射质量过重难以商业闭环） |
| Gaalema ISCR 低温共面派（arXiv:2604.07760） | 芯片结温 ~40 °C（2,750 m^2/MW） | >100 kW/吨（整星约 9.4 kg/kW） | 极低（避开 85 °C 漏电倍增区，但受限于超大柔性展开与热流余量） |
| SpaceX StarMind 高温刀锋派（Maguire 案例） | 辐射 335–353 K / GPU ~97 °C（914 m^2/MW） | 目标 10.0–13.3 kg/kW（初代 22.86 kg/kW） | 高（紧贴 HBM 95 °C 与漏电 22 K 翻倍拐点，依赖 Delta-T 压缩与定制硅片） |
| Jiawei Jing 漏电警示边界（DOI 10.21203/rs.3.rs-11473415） | 若辐射推至 350–385 K 则结温需 117–174 °C | 耐温升至 150 °C 现实仅减重 2.6% | 证实高温减重九成被漏电吞噬；降 Delta-T（40 K→25 K）可减重 8.0% |

### 观点与可反驳条件

- ==观点==：Jiawei Jing 的闭合在轨质量模型戳破了太空算力投资叙事中「仅凭 T^4 辐射定律即可靠高温运行大幅减重」的物理盲区——在现行半导体静态漏电每 22 K 翻倍的约束下，把芯片和 HBM 耐温硬抬至 150 °C 仅能带来 2.6% 的净在轨减重（九成收益被光伏扩容和漏电废热吃掉）；决定轨道算力星能否逼近 10–13 kg/kW 经济线的真正抓手，是低漏电晶体管工艺与将芯片-冷却液温差从 40 K 压至 <=25 K 的封装热阻工程，而非单纯提高耐热上限。
- ==推翻条件==：
  1. 超低漏电航天计算架构商用验证：若 2028 年底前用于轨道 AI 算力星的定制宇航芯片与耐高温 HBM（如宽禁带混集成、FD-SOI 或冷端近存优化架构）在 125–150 °C 结温下的静态漏电倍增斜率被压平至每升温 >=50 K 才翻倍（或漏电占总功耗比持续低于 5%），且实测高温运行可实现 >=15% 的整星在轨减重，则「漏电吞噬九成高温减重收益」的约束将被推翻。
  2. 超低 Delta-T 封装使 350 K+ 辐射翼与 <=95 °C 结温兼得：若两相液冷微通道或直接浸没相变回路在轨实飞验证可将芯片/HBM 至辐射翼总温差稳定压低至 <=15 K，使逻辑芯片与 HBM 在 85–95 °C 常规商用漏电区即可驱动 345–360 K 高效辐射板并达成 <=12 kg/kW 整星比功率，则太空算力无需牺牲半导体漏电能效亦可通过高 T^4 路线突破发射质量壁垒。

---

## 原文摘录与一手信源存证

> 【信源巡检核心摘要】 2026年10月研究论文。构建耦合芯片结温、冷却回路、辐射器与光伏阵列的闭合在轨质量模型，指出尽管将辐射器工作温度升至350–385 K可依Stefan-Boltzmann T^4定律缩小散热面积与质量，但半导体芯片漏电功耗随温度指数上升，会大幅抵消高温散热减重收益。
> — 原文摘录，文字段落 1；证据 `digest-material-e3bd3a924f5a667c26f8f6b4e55f54bbec4b620f179d019b4a5592921feb3ba6-excerpt-1@1`

一手材料：

- Running orbital AI data centers hot: chip leakage matters as much as temperature tolerance · Jiawei Jing (Makuhari Development Corporation) · [原站](https://www.researchgate.net/publication/406874564) · [主体档案：Jiawei Jing](../entities/people/Jiawei%20Jing.md) · [本地原件](../../../raw/4f16432e5656295c62e186035d48d1d535625f7f586fb0712e6be7dbfccaaffb)
  材料版本 `digest-material-4f16432e5656295c62e186035d48d1d535625f7f586fb0712e6be7dbfccaaffb@1`；获取方式 `web_search_verified_primary`。
  > 2. Transistor Leakage Penalty vs. Thermal Tolerance: - Static transistor leakage power grows exponentially with rising silicon junction temperature: near 85 °C (median baseline), leakage power doubles roughly every 22 K. — 原文提取

归属与范围：已通过 search\_web 核验 ResearchGate 406874564 / Research Square DOI 10.21203/rs.3.rs-11473415 论文主体归属（Jiawei Jing，Makuhari Development Corporation，日本千叶）与全套核心定量指标（350–385 K 辐射面对应 117–174 °C 结温需求、85 °C 附近每 22 K 漏电翻倍、150 °C 理想零漏电减重 23.5% vs 现实漏电抵消 90% 后仅剩 2.6%、冷却温差 40 K 压缩至 25 K 净减重 8.0%），并与本库三篇太空算力档案交叉对账。

来源缺口：

- `unavailable`：受沙箱无外网直连及 ResearchGate / Research Square 全文抓取限制，未能下载 DOI 10.21203/rs.3.rs-11473415 完整 PDF；模型中太阳翼比功率（W/kg）、辐射器面密度（kg/m^2）及具体半导体工艺节点（FinFET/GAA 漏电拟合系数）逐式参数尚未核对。 [线索](https://www.researchgate.net/publication/406874564)
- `not_disclosed`：公开摘要未拆分逻辑芯片与 HBM 各自独立的静态漏电功率占比，亦未给出极端高漏电工艺下高温运行反转为「在轨总质量净增重」的临界拐点温度。 [线索](https://www.researchgate.net/publication/406874564)

[返回赛道总览](../赛道总览.md#digest-e3bd3a924f5a667c) · [返回导读索引](README.md) · [主体档案库](../entities/README.md)
