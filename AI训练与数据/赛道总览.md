> **交互式认知地图与主体档案（GitHub Pages）**：[打开网页版交互画布 ↗](https://mojojolite-sketch.github.io/AI%E8%AE%AD%E7%BB%83%E4%B8%8E%E6%95%B0%E6%8D%AE/index.html)

# AI训练与数据

面向大模型与物理 AI 后训练的能力评测基准、可交互强化学习环境、长程调度系统与跨模态表征底座。

## 当前研究重点与核心判断

静态学科问答与多选题标注红利已经见顶，赛道正沿「测什么（评测基准重构）」与「怎么训（后训练环境与表征范式重构）」双轴分化：
1. 评测端从慢思考学科极限切向职业现场与前语言直觉：在博士级学科基准趋于饱和后，[Scale AI SEAL × Elorian × UCSC 发布的 HSS 基准](blogs/Humanity%27s%20Sixth%20Sense%20%28HSS%29_%20Benchmarking%20Intuitive%20Visual%20and%20Temporal%20Scene%20Reasoning%20in%20Multimodal%20Models%20.md)（arXiv:2610.08966，522 道开放式图像/无声视频任务）测出人类直觉准确率 93.1% 而最强单通模型 GPT-6-astra 仅 53.6%（25 模型中位数 30.9%），且 8,573 次失败中 94% 源于视觉感知与潜空间推断失明而非逻辑错误，拉长纯文本 CoT 甚至诱发 -14pp 过度脑补倒退。
2. 训练与数据交付从卖工时转向三类高壁垒资产：离线可交互模拟与物理自博弈环境（[Handshake](blogs/%E3%80%8CHandshake%E5%A4%8D%E7%9B%98%E6%95%B0%E6%8D%AE%E8%A1%8C%E4%B8%9A%E3%80%8D%E6%95%B0%E6%8D%AE%E8%A1%8C%E4%B8%9A%E5%9C%A8%E5%8D%96%E4%BB%BB%E5%8A%A1%EF%BC%8C%E6%B2%A1%E4%BA%BA%E5%9C%A8%E5%BB%BA%E4%B8%96%E7%95%8C.md)、[Generalist GEN-1.5 / Skild S1](blogs/Generalist%20AI%20GEN-1.5%20One-Shot%20Physical%20Prompting%20%283%E2%80%9312s%20Demo%29%20%26%20Skild%20AI%20S1%20Video%20In-Context%20Learning%20%2B%20Physi.md)）、嵌入企业日常纠偏流的持续后训练闭环（[Trajectory](blogs/Trajectory%20%E8%8E%B7%20Sequoia%20Capital%20%E9%A2%86%E6%8A%95%E3%80%81NVIDIA%20%E4%B8%8E%20Bessemer%20%E5%8F%82%E6%8A%95%20%244%2C500%20%E4%B8%87%20Series%20A%EF%BC%88%E6%8A%95%E5%90%8E%E4%BC%B0%E5%80%BC%20%243%20%E4%BA%BF%EF%BC%89%EF%BC%9A%E5%88%87%E5%85%A5%E9%A2%86%E5%9F%9F%E4%B8%93%E5%AE%B6%E5%8F%8D%E9%A6%88%E9%A9%B1%E5%8A%A8%E7%9A%84%E6%8C%81%E7%BB%AD%E5%90%8E%E8%AE%AD%E7%BB%83%E9%97%AD%E7%8E%AF.md) \$4,500 万 A 轮），以及替代自回归「坏视角」切片的多视角潜空间预测配对配方（[LeCun & Balestriero 柏拉图表征定理](blogs/Yann%20LeCun%E6%96%B0%E8%AE%BA%E6%96%87%EF%BC%8C1.09%E4%BA%BFJEPA%E5%9C%A8%E5%9B%BE%E6%96%87%E5%AF%B9%E9%BD%90%E4%B8%8A%E8%B5%A2%E4%BA%86720%E4%BA%BFQwen%EF%BC%81.md) arXiv:2610.39302）。

## 逻辑演变图谱

![AI训练与数据逻辑演变](逻辑演变.svg)

### 节点机制与证据锚点

- P / A · 评测覆盖空白与前语言直觉鸿沟：[Mercor 职业基准映射](blogs/90%25%E7%9A%84%E7%BE%8E%E5%9B%BD%E5%B7%A5%E4%BD%9C%EF%BC%8C%E6%B2%A1%E6%9C%89%E4%BB%BB%E4%BD%95AI%E5%9F%BA%E5%87%86%E8%A6%86%E7%9B%96.md)指出大量美国真实职业任务缺乏 AI 评测覆盖；[Humanity's Sixth Sense (HSS)](blogs/Humanity%27s%20Sixth%20Sense%20%28HSS%29_%20Benchmarking%20Intuitive%20Visual%20and%20Temporal%20Scene%20Reasoning%20in%20Multimodal%20Models%20.md)（arXiv:2610.08966）进一步以 15.1% 录取率严筛 288 图 + 234 段无声视频（17.6h）与 723 条原子评分细则，揭示主流 VLM 在社会心智（均分 ~24.4%）、物理契合度与时序溯因上的系统性失明，证明 57–72 步 Agentic 裁剪套壳仅是高延迟代偿。
- B · 长时程智能体强化学习调度：[QwenGyre 论文](blogs/%E4%B8%80%E6%AC%A1%E8%B7%91%E6%95%B0%E5%B0%8F%E6%97%B6%E7%9A%84%E6%99%BA%E8%83%BD%E4%BD%93%EF%BC%8C%E6%80%8E%E4%B9%88%E8%BF%9B%E5%BC%BA%E5%8C%96%E5%AD%A6%E4%B9%A0%E5%BE%AA%E7%8E%AF.md)（arXiv:2609.33848）针对数小时长程智能体任务造成的 GPU 空闲气泡与分支轨迹冗余，提出弹性资源调度与轨迹裁剪机制。
- C / D · 离线模拟自博弈 vs. 业务现场持续学习：[Handshake 观点](blogs/%E3%80%8CHandshake%E5%A4%8D%E7%9B%98%E6%95%B0%E6%8D%AE%E8%A1%8C%E4%B8%9A%E3%80%8D%E6%95%B0%E6%8D%AE%E8%A1%8C%E4%B8%9A%E5%9C%A8%E5%8D%96%E4%BB%BB%E5%8A%A1%EF%BC%8C%E6%B2%A1%E4%BA%BA%E5%9C%A8%E5%BB%BA%E4%B8%96%E7%95%8C.md)主张用可安全试错的交互模拟世界替代静态任务标注，[GEN-1.5 与 Skild S1](blogs/Generalist%20AI%20GEN-1.5%20One-Shot%20Physical%20Prompting%20%283%E2%80%9312s%20Demo%29%20%26%20Skild%20AI%20S1%20Video%20In-Context%20Learning%20%2B%20Physi.md)验证了基于数十万小时物理预训练的零梯度 3–12s 视频上下文物理泛化；[Trajectory](blogs/Trajectory%20%E8%8E%B7%20Sequoia%20Capital%20%E9%A2%86%E6%8A%95%E3%80%81NVIDIA%20%E4%B8%8E%20Bessemer%20%E5%8F%82%E6%8A%95%20%244%2C500%20%E4%B8%87%20Series%20A%EF%BC%88%E6%8A%95%E5%90%8E%E4%BC%B0%E5%80%BC%20%243%20%E4%BA%BF%EF%BC%89%EF%BC%9A%E5%88%87%E5%85%A5%E9%A2%86%E5%9F%9F%E4%B8%93%E5%AE%B6%E5%8F%8D%E9%A6%88%E9%A9%B1%E5%8A%A8%E7%9A%84%E6%8C%81%E7%BB%AD%E5%90%8E%E8%AE%AD%E7%BB%83%E9%97%AD%E7%8E%AF.md)（Sequoia 领投、NVIDIA 参投，投后估值 \$3 亿）则通过 Continual Grading + GS1 让法务、金融等非技术专家在生产流原位构建价值函数驱动持续后训练。
- E · 表征底座重构（潜空间好视角配对 vs. 自回归语言瓶颈）：[Balestriero & Yann LeCun 论文](blogs/Yann%20LeCun%E6%96%B0%E8%AE%BA%E6%96%87%EF%BC%8C1.09%E4%BA%BFJEPA%E5%9C%A8%E5%9B%BE%E6%96%87%E5%AF%B9%E9%BD%90%E4%B8%8A%E8%B5%A2%E4%BA%86720%E4%BA%BFQwen%EF%BC%81.md)（arXiv:2610.39302）从谱理论证明 Next-Token Prediction 等价于把表征容量耗散在句法措辞干扰项上的「坏视角」，109M 文本 JEPA 凭同场景独立描述配对在跨模态对齐上超越 72B Qwen2.5（但其收益高度依赖 LLaVA 看图重标注拐杖）；这从数学底层解释了 HSS 中纯文本 CoT 无法修补视觉感知盲点的根因。
- S / Q · 研究立场与待验证项：后训练数据基础设施正分化为高保真模拟/原生视觉轨迹（C/E）与在线专家反馈闭环（D）；核心待核问题在于 ScaleAI/HSS 全量公开 522 题无私有留存集下的合成 RLVR 刷榜半衰期、API 视频抽帧配额混杂偏差，以及企业高频在线微调中的反馈信噪比与灾难性遗忘边界。

<!-- daily-digest:begin -->
归档：[交互图谱](https://mojojolite-sketch.github.io/AI%E8%AE%AD%E7%BB%83%E4%B8%8E%E6%95%B0%E6%8D%AE/index.html) · [主体档案（19）](entities/README.md) · [单篇导读（8）](blogs/README.md)
<!-- daily-digest:end -->
