> **交互式认知地图与主体档案（GitHub Pages）**：[打开网页版交互画布 ↗](https://mojojolite-sketch.github.io/AI%E8%AE%AD%E7%BB%83%E4%B8%8E%E6%95%B0%E6%8D%AE/index.html)

# AI训练与数据

面向模型后训练与能力测量的数据管线、强化学习环境、长程调度与评测基准。

## 逻辑演变图谱

![AI训练与数据逻辑演变](逻辑演变.svg)

### 节点机制与证据锚点

- **P / A · 评测覆盖空白与职业映射**：[Mercor 基准映射研究](blogs/90%25%E7%9A%84%E7%BE%8E%E5%9B%BD%E5%B7%A5%E4%BD%9C%EF%BC%8C%E6%B2%A1%E6%9C%89%E4%BB%BB%E4%BD%95AI%E5%9F%BA%E5%87%86%E8%A6%86%E7%9B%96.md)将现有 AI 评测题映射至美国职业任务，指出大量真实工作缺乏评测覆盖（选样口径与商业利益需独立审视，未被基准覆盖不等于模型无法执行）。
- **B · 长时程智能体强化学习调度**：[QwenGyre 论文](blogs/%E4%B8%80%E6%AC%A1%E8%B7%91%E6%95%B0%E5%B0%8F%E6%97%B6%E7%9A%84%E6%99%BA%E8%83%BD%E4%BD%93%EF%BC%8C%E6%80%8E%E4%B9%88%E8%BF%9B%E5%BC%BA%E5%8C%96%E5%AD%A6%E4%B9%A0%E5%BE%AA%E7%8E%AF.md)（arXiv:2609.33848）针对数小时长程任务造成的 GPU 空闲与分支轨迹冗余，提出弹性资源调度与轨迹处理机制。
- **C / D · 模拟世界构建 vs. 业务现场持续学习**：[Handshake 观点转述](blogs/%E3%80%8CHandshake%E5%A4%8D%E7%9B%98%E6%95%B0%E6%8D%AE%E8%A1%8C%E4%B8%9A%E3%80%8D%E6%95%B0%E6%8D%AE%E8%A1%8C%E4%B8%9A%E5%9C%A8%E5%8D%96%E4%BB%BB%E5%8A%A1%EF%BC%8C%E6%B2%A1%E4%BA%BA%E5%9C%A8%E5%BB%BA%E4%B8%96%E7%95%8C.md)主张用“安全试错的可交互模拟世界”替代静态任务标注；[Trajectory](blogs/%E7%BA%A2%E6%9D%89%E9%A2%86%E6%8A%954500%E4%B8%87%E7%BE%8E%E5%85%83%EF%BC%8CTrajectory%E8%A6%81%E8%AE%A9%E4%BC%81%E4%B8%9A%E8%AE%AD%E7%BB%83%E8%87%AA%E5%B7%B1%E7%9A%84AI.md)（A 轮 4500 万美元）则切入企业生产流，由法律、金融等非技术专家直接定义好结果并转化为持续学习（continual learning）更新。
- **S / Q · 研究立场与待验证项**：后训练数据行业正从“交付静态标注包”分化为**离线高保真模拟环境（C）**与**在线生产流专家反馈闭环（D）**；待验证核心在于真实工作流反馈的信噪比、灾难性遗忘控制及跨客户复用边界。

<!-- daily-digest:begin -->
归档：[交互图谱](https://mojojolite-sketch.github.io/AI%E8%AE%AD%E7%BB%83%E4%B8%8E%E6%95%B0%E6%8D%AE/index.html) · [主体档案（3）](entities/README.md) · [单篇导读（4）](blogs/README.md)
<!-- daily-digest:end -->
