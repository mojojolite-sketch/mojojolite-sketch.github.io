> **交互式认知地图与主体档案（GitHub Pages）**：[打开网页版交互画布 ↗](https://mojojolite-sketch.github.io/%E5%88%86%E5%B8%83%E5%BC%8F%E8%AE%A1%E7%AE%97/index.html)

# 分布式计算

聚焦地面与轨道算力基础设施、集群光互连（CPO）、系统有效产出（Goodput）、电力微电网与项目融资信贷约束。

- **关联公司深挖**：[Akamai × Anthropic 全 CPU 算力拆解](https://mojojolite-sketch.github.io/%E5%88%86%E5%B8%83%E5%BC%8F%E8%AE%A1%E7%AE%97/akamai/refs/index.html)（[主稿](akamai/research.md)） · [Pearl Research Labs GPU 推理与 PoW 协议](https://mojojolite-sketch.github.io/%E5%88%86%E5%B8%83%E5%BC%8F%E8%AE%A1%E7%AE%97/pearl-research-labs/refs/index.html)（[主稿](pearl-research-labs/refs/research.md)）

## 逻辑演变图谱

![分布式计算逻辑演变图](逻辑演变.svg)

### 节点机制与证据锚点

- **P / A / B · 地面基础设施复用与协议算力变现**：[Akamai 研究](akamai/research.md)聚焦分布式边缘网络向 Compute 转型及 Anthropic 全 CPU 集群项目（95–105 MW），经济性取决于交付验收、折旧与融资成本；[Pearl Research Labs 研究](pearl-research-labs/refs/research.md)拆解 INT 白皮书 PoW 计算证明与按 Token 收费推理 API 的耦合关系，指出必须严格区分挖矿算力与真实外部客户付费负载。
- **C · 有效产出（Goodput）与供应链瓶颈**：[Google AI 基础设施负责人 Amin Vahdat 访谈](blogs/Google%20AI%20%E5%9F%BA%E7%A1%80%E8%AE%BE%E6%96%BD%E8%B4%9F%E8%B4%A3%E6%B7%B1%E5%BA%A6%E8%AE%BF%E8%B0%88%EF%BC%9A10%20%E4%B8%87%E5%8D%A1%E9%9B%86%E7%BE%A4%E6%95%85%E9%9A%9C%E4%B8%8D%E6%96%AD%EF%BC%8CAgent%E6%8E%A8%E9%AB%98%20CPU%E3%80%81%E5%AD%98%E5%82%A8%E5%92%8C%E7%BD%91%E7%BB%9C%E9%9C%80%E6%B1%82%EF%BC%8C2036%E5%B9%B4%E6%9C%BA%E6%9E%B6%EF%BC%8CTPU%208i_8t%EF%BC%8C%E8%BD%A8%E9%81%93%E6%95%B0%E6%8D%AE%E4%B8%AD%E5%BF%83.md)指出 10 万卡集群故障频发，衡量核心应从理论 FLOPS 转向含故障恢复的有效产出（Goodput），且 Agent 工作流正同步推高 CPU、存储与网络需求；[SemiAnalysis × 伯恩斯坦对话](blogs/SemiAnalysis%20%C3%97%20%E4%BC%AF%E6%81%A9%E6%96%AF%E5%9D%A6%E6%B7%B1%E5%BA%A6%E5%AF%B9%E8%AF%9D%EF%BC%9AAI%E6%9C%80%E7%BC%BA%E7%9A%84%E5%8F%AF%E8%83%BD%E4%B8%8D%E6%98%AF%E7%94%B5%E5%8A%9B%EF%BC%8C%E5%BD%93%E4%B8%8B%E8%AF%A5%E5%A6%82%E4%BD%95%E5%AE%A1%E8%A7%86%E8%8B%B1%E4%BC%9F%E8%BE%BE%EF%BC%9F.md)提示先进封装载板、内存与融资条件可能比电力更早构成硬约束。
- **D · 光学 Scale-up 与机架级 CPO 互连**：针对高频铜缆的距离与功耗墙，[Wiwynn、Ayar Labs 与 GUC 在 OCP 2026 的联合演示](blogs/Wiwynn%20%26%20Ayar%20Labs%20_%20%E4%BB%8E%E8%8A%AF%E7%89%87%E5%88%B0%E6%9C%BA%E6%9E%B6%EF%BC%9ACPO%E5%A6%82%E4%BD%95%E8%90%BD%E5%88%B0%201024%20ASIC%E7%9A%84%20Scale-up%20Pod.md)通过多芯片封装集成 8 颗 TeraPHY 光引擎、机架内 shuffle box 与冷板液冷，将 Scale-up 域推进至 1024 ASIC Pod。
- **F · 电力审批、燃气微电网与项目融资信贷重定价（Stargate / ING BWIC）**：[软银燃机订单违约与 ING $500M 数据中心债 BWIC 拆解](blogs/%E8%BD%AF%E9%93%B6%E7%87%83%E6%B0%94%E8%BD%AE%E6%9C%BA%E8%AE%A2%E5%8D%95%E6%AD%A3%E5%9C%A8%E8%BF%9D%E7%BA%A6%20%26%2011.19%E9%9C%80%E8%A6%81%E9%87%8D%E7%82%B9%E5%85%B3%E6%B3%A8%E8%8D%B7%E5%85%B0%E9%93%B6%E8%A1%8CING%E5%87%BA%E5%94%AE%E7%9A%84%E6%95%B0%E6%8D%AE%E4%B8%AD%E5%BF%83%E5%80%BA%E7%9A%84%E4%BB%B7%E6%A0%BC.md)揭示 GW 级算力园区从“名义规划”进入“管道/环评延期与建设贷贴现”阶段：新墨西哥州 Project Jupiter（Blue Owl/STACK 开发，改用最高 2.45 GW / 签约 1.2 GW Bloom Energy SOFC 燃料电池）因 Energy Transfer 天然气支线管道与空气许可受阻（管道推迟至 2027 年 2 月），触发主租户 Oracle 于 2026 年 9 月发出不可抗力（Force Majeure）通知以保留推迟付租权利，将每年每 $1B 建设贷约 $72M–$82M 的无预算资本化利息（IDC）推给开发商与银团；欧洲项目融资牵头行 ING 随即通过二级市场 BWIC 集中竞价抛售约 $500M（12笔，含 $25M Project Jupiter 切片，11月19日截标）纯数据中心贷款，前期二级报价已跌至 89–91 美分（隐含 1 年延期空转损耗 ~8 pts + 利差走阔 ~3 pts），叠加 Elon Musk 点名软银燃气轮机订单违约（指向俄亥俄州 10 GW PORTS-Pike 配套 9.2 GW 燃机或弃单槽位）与 INNIO 上市破发，标志数据中心基建进入信贷出清与伪在手订单检验期。
- **E · 轨道算力工程化与商业账本硬约束**：除[空间辐射散热物理约束](blogs/%E5%A4%AA%E7%A9%BA%E4%B8%AD%E4%B8%80%E9%A2%97%E8%8A%AF%E7%89%87%E7%9A%84%E7%83%AD%E9%87%8F%EF%BC%8C%E8%A6%81%E8%B5%B0%E5%A4%9A%E8%BF%9C%E6%89%8D%E8%83%BD%E7%A6%BB%E5%BC%80%E5%8D%AB%E6%98%9F%EF%BC%9F.md)与[一箭十星在轨发射](blogs/%E5%95%86%E4%B8%9A%E8%88%AA%E5%A4%A9%E5%8A%A8%E6%80%81%E7%AE%80%E8%AE%AF%EF%BC%882026%E5%B9%B410%E6%9C%88%EF%BC%89.md)外，[国星宇航港交所聆讯后资料集](blogs/%E2%80%9C%E5%A4%AA%E7%A9%BAAI%E7%AC%AC%E4%B8%80%E8%82%A1%E2%80%9D%E6%9D%A5%E4%BA%86%EF%BC%8180%E5%90%8E%E9%80%A0%E5%87%BA%E7%99%BE%E4%BA%BF%E7%8B%AC%E8%A7%92%E5%85%BD.md)揭示天基算力的真实商业边界：虽握有 34.75 亿元订单，但三年累亏 5.72 亿元，前五大客户占 91.1%（超 73% 为国企/政府），一年以上应收款达 3.05 亿元，且火箭发射失利因无法投保需自担卫星损失。
- **S / Q · 研究立场与待核问题**：评价算力项目不能只看设备规模或协议名义算力，必须穿透核查**有效产出（Goodput）、外部客户真实付费比例、CPO 热串扰与可维护性 TCO、能源管道/环评交付周期、项目 SPV 建设期利息储备（IRA）与 11 月 19 日 ING $500M BWIC 二级市场清算价**。

<!-- daily-digest:begin -->
归档：[交互图谱](https://mojojolite-sketch.github.io/%E5%88%86%E5%B8%83%E5%BC%8F%E8%AE%A1%E7%AE%97/index.html) · [主体档案（16）](entities/README.md) · [单篇导读（7）](blogs/README.md)
<!-- daily-digest:end -->
