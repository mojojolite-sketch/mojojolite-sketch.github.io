# Lizhi Yang

[返回主体档案库](../README.md) · [返回赛道总览](../../赛道总览.md) · [单篇导读索引](../../blogs/README.md)

- 主体类别：👤 个人与学者 (People)
- 核心定位与说明：Caltech 研究员，复用已有主体建档记录。
- 关联账号与官方入口：
  - GitHub（Lizhi Yang (GitHub)）：[账号主页](https://github.com/lzyang2000) · 登记对象 `digest-publisher-7c055f1085fb45ce5f05f1ff` — Caltech 研究员，复用已有主体建档记录。

## 1. 核心研究问题与待核查争议（Questions & Open Debates）

### 🔍 待核查缺口与证据边界（Open Gaps）

- `pending_verification`：MorphMimic 仅在真实 Unitree G1 上导出 ONNX 跑通舞蹈、行走与遥操作（且博客标注与论文 §IV-E 对 PICO 遥操作使用全动作还是五点接口存在表述差异），AgiBot X2 Ultra 与 Booster T2 真机部署显式标记为待完成（hardware pending）；同时 128,786 片段评测全为共同训练集，未对未见第 4 种人形机器人做留出零样本测试，亦缺少单独剔除 FiLM 或对齐损失的模块消融。 [线索](https://lzyang2000.github.io/morphmimic/)（关联：[《两天跟进SuperMimic：MorphMimic让三种人形机器人共用一个世界模型、一套策略》](../../blogs/%E4%B8%A4%E5%A4%A9%E8%B7%9F%E8%BF%9BSuperMimic%EF%BC%9AMorphMimic%E8%AE%A9%E4%B8%89%E7%A7%8D%E4%BA%BA%E5%BD%A2%E6%9C%BA%E5%99%A8%E4%BA%BA%E5%85%B1%E7%94%A8%E4%B8%80%E4%B8%AA%E4%B8%96%E7%95%8C%E6%A8%A1%E5%9E%8B%E3%80%81%E4%B8%80%E5%A5%97%E7%AD%96%E7%95%A5.md)）

- [《两天跟进SuperMimic：MorphMimic让三种人形机器人共用一个世界模型、一套策略》](../../blogs/%E4%B8%A4%E5%A4%A9%E8%B7%9F%E8%BF%9BSuperMimic%EF%BC%9AMorphMimic%E8%AE%A9%E4%B8%89%E7%A7%8D%E4%BA%BA%E5%BD%A2%E6%9C%BA%E5%99%A8%E4%BA%BA%E5%85%B1%E7%94%A8%E4%B8%80%E4%B8%AA%E4%B8%96%E7%95%8C%E6%A8%A1%E5%9E%8B%E3%80%81%E4%B8%80%E5%A5%97%E7%AD%96%E7%95%A5.md)：已复用已归档的 MorphMimic 官方 9 页技术报告 PDF（43,720 字符）及项目页（lzyang2000.github.io/morphmimic/），穿透核查 29 关节规范映射、125 维物理形态描述符、FiLM 调制、跨机器人均值潜变量对齐及五点接口扰动训练细节；纠偏单机零样本迁移在 Booster T2 躯干 IMU 坐标系下骤降至 1.6%–2.6% 的物理根因与重映射后恢复至 64.0%–83.4% 的诊断表，明晰 Unified 模型 16.3 GPU 小时反高于三套 Specialist 合计 13.9 GPU 小时（+17%）及仅 Unitree G1 上真机的实证边界。

## 2. 收录文章与一手材料（Ingested Articles & Primary Sources）

### [两天跟进SuperMimic：MorphMimic让三种人形机器人共用一个世界模型、一套策略](../../blogs/%E4%B8%A4%E5%A4%A9%E8%B7%9F%E8%BF%9BSuperMimic%EF%BC%9AMorphMimic%E8%AE%A9%E4%B8%89%E7%A7%8D%E4%BA%BA%E5%BD%A2%E6%9C%BA%E5%99%A8%E4%BA%BA%E5%85%B1%E7%94%A8%E4%B8%80%E4%B8%AA%E4%B8%96%E7%95%8C%E6%A8%A1%E5%9E%8B%E3%80%81%E4%B8%80%E5%A5%97%E7%AD%96%E7%95%A5.md)

2026-10-25 · 来源：Caltech & Georgia Tech · MorphMimic · 状态：有来源缺口

[单篇导读（blogs/）](../../blogs/%E4%B8%A4%E5%A4%A9%E8%B7%9F%E8%BF%9BSuperMimic%EF%BC%9AMorphMimic%E8%AE%A9%E4%B8%89%E7%A7%8D%E4%BA%BA%E5%BD%A2%E6%9C%BA%E5%99%A8%E4%BA%BA%E5%85%B1%E7%94%A8%E4%B8%80%E4%B8%AA%E4%B8%96%E7%95%8C%E6%A8%A1%E5%9E%8B%E3%80%81%E4%B8%80%E5%A5%97%E7%AD%96%E7%95%A5.md) · [微信原件](../../../../raw/99cf9ef36e1e68da7d8c5b49db3399d0f4dfdbdd41a9d7953e035bf810f20d0e) · 固定版本 `digest-material-99cf9ef36e1e68da7d8c5b49db3399d0f4dfdbdd41a9d7953e035bf810f20d0e@1`

> 加州理工学院与佐治亚理工学院团队提出 MorphMimic，让宇树 G1、智元 X2 Ultra 和Booster T2 共用一个世界模型和一套全身动作追踪策略。这套策略已在三种机器人的仿真中运行，并在真实 G1 上展示了行走、舞蹈与遥操作。

> 为什么重要： 第一作者 Lizhi Yang 用“One world, one policy”概括这项工作：三种机器人共享形态条件世界模型和策略，从仿真中跳同一段舞，走到浏览器实时演示和 G1 真机。他也特别感谢 SuperMimic 团队带来的启发。

关联一手材料：

- MorphMimic: One World, One Policy（MorphMimic authors）· [原站](https://lzyang2000.github.io/morphmimic/) · [NotebookLM](https://notebook.google.com/notebook/cac99041-d3b9-449e-a192-12bb4b1ad391) · [Drive](https://drive.google.com/file/d/1Fj0uV_IhyWbBR0lsG14cr7bd5dLLyCK6/view?usp=drivesdk) · 版本 `digest-material-b4259b6c9f569a477a65775b9fc264351ec3eb45212d13ec9eb391274f790467@2`
  > Abstract—As more humanoid platforms become available, training a separate whole-body motion tracker for each robot becomes costly. — PDF p.1
