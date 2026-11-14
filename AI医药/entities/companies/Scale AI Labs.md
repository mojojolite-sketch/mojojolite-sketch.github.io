# Scale AI Labs

[返回主体档案库](../README.md) · [返回赛道总览](../../赛道总览.md) · [单篇导读索引](../../blogs/README.md)

- 主体类别：🏢 公司与产业主体 (Companies)
- 核心定位与说明：Scale AI 旗下前沿评测与领域安全研究机构（SEAL），联合顶尖医学院发布 CliniCARE-Bench（arXiv:2608.07796）等真实世界受控环境智能体评测基准。
- 关联账号与官方入口：
  - 机构官网（Scale AI Labs）：[机构／作者主页](https://labs.scale.com/) · 登记对象 `digest-publisher-11ab626d68d50461e40c8045` — Scale AI 旗下前沿评测与领域安全研究机构（SEAL），联合顶尖医学院发布 CliniCARE-Bench（arXiv:2608.07796）等真实世界受控环境智能体评测基准。

<!-- curated-profile:begin -->
## 0. 核心研究定位与基准实证画像（Curated Dossier）

- 机构概况与利益激励结构：Scale AI Labs（SEAL，Safety, Evaluations, and Alignment Lab）隶属于全球头部 AI 训练数据与人类专家强化学习（RLHF）服务商 Scale AI。其核心学术—商业闭环在于联合顶尖高校与专科专家构建高难度受控智能体评测基准，量化通用前沿模型在垂直高风险行业的失效模式，同时为其商业化专科专家过程监督数据（Clinician-in-the-loop Rubric Data）建立行业质量标准。
- 医疗纵向 EHR 代表作 CliniCARE-Bench（arXiv:2608.07796，2026-08）核心实证：
  - 联合团队与真实病历底座：联合斯坦福大学医学院、埃默里大学、范德堡大学医学中心与加州大学圣克鲁兹分校，基于真实重症与住院去标识化数据库 MIMIC-IV (v3.1) 构建 750 例患者纵向电子病历案例（覆盖 14 个美国医学专业委员会 ABMS 专科、25 类临床审核场景与 10 项核心推理能力）。
  - 受控工具沙箱与四元校准拒答机制：智能体必须在凭证隔离的受控工具服务器中主动检索多表纵向病历，并在 Yes / No / Indeterminate: Lack of Data（缺数待定）/ Indeterminate: Medically Ambiguous（医学模糊待定） 四元空间中作答。
  - 16 个智能体评测核心发现：四分类原始准确率仅 65.3%–76.1%（远低于静态 MedQA / USMLE 的 >90%）；按病例级加权过程量表扣除违规捷径后，无缺陷准确率（Defect-Free Accuracy）进一步暴跌 4.8–14.8 个百分点（最高约 ~20% 表面正确裁决系因错误理由蒙对）；且全部 16 个受测系统均存在系统性拒答不足（Under-Abstention），揭示了当前结果导向 RL 推理模型在证据残缺临床病历中强行臆断的系统安全隐患。
<!-- curated-profile:end -->

## 1. 核心研究问题与待核查争议（Questions & Open Debates）

### 🔍 待核查缺口与证据边界（Open Gaps）

- `not_disclosed`：CliniCARE-Bench 底层病历全部源自单中心重症与住院数据库 MIMIC-IV (v3.1)，尚未覆盖多中心社区门诊慢性病随访及多模态医学影像原片（DICOM）联合推理场景。（关联：[《CliniCARE-Bench: Clinical Calibrated Audit of Medical Reasoning in Longitudinal Electronic Health Records (arXiv:2608.07796)》](../../blogs/CliniCARE-Bench_%20Clinical%20Calibrated%20Audit%20of%20Medical%20Reasoning%20in%20Longitudinal%20Electronic%20Health%20Records%20%28arX.md)）

- [《CliniCARE-Bench: Clinical Calibrated Audit of Medical Reasoning in Longitudinal Electronic Health Records (arXiv:2608.07796)》](../../blogs/CliniCARE-Bench_%20Clinical%20Calibrated%20Audit%20of%20Medical%20Reasoning%20in%20Longitudinal%20Electronic%20Health%20Records%20%28arX.md)：一手核查锚定 arXiv:2608.07796《CliniCARE-Bench: Clinical Calibrated Audit of Medical Reasoning in EHR》（Scale AI Labs × Stanford × Emory × Vanderbilt × UCSC，2026-08），拆解受控工具环境、四元拒答机制及 16 个智能体无缺陷准确率坍塌实证，并标注 Scale AI 医疗标注商业激励。

## 2. 收录文章与一手材料（Ingested Articles & Primary Sources）

### [CliniCARE-Bench: Clinical Calibrated Audit of Medical Reasoning in Longitudinal Electronic Health Records (arXiv:2608.07796)](../../blogs/CliniCARE-Bench_%20Clinical%20Calibrated%20Audit%20of%20Medical%20Reasoning%20in%20Longitudinal%20Electronic%20Health%20Records%20%28arX.md)

2026-08-15 · 来源：Scale AI Labs · arXiv:2608.07796 · 状态：有来源缺口

[单篇导读（blogs/）](../../blogs/CliniCARE-Bench_%20Clinical%20Calibrated%20Audit%20of%20Medical%20Reasoning%20in%20Longitudinal%20Electronic%20Health%20Records%20%28arX.md) · [微信原件](../../../../raw/5eab0e1578b9b065576c1b3224c0a65fa7851c91c816911f3f2a01a2e2739b73) · 固定版本 `digest-material-5eab0e1578b9b065576c1b3224c0a65fa7851c91c816911f3f2a01a2e2739b73@1`

> 【信源巡检核心摘要】 Scale AI Labs 发布面向纵向电子健康档案（EHR）的临床医学推理校准审计基准 CliniCARE-Bench（https://arxiv.org/abs/2608.07796 ）。不同于传统多选题医学测试（如 MedQA），该基准利用真实世界纵向多模态病历结构评测大模型在鉴别诊断、检验开具与风险分层中的置信度校准（Calibration）与证据归因严谨度，量化模型在证据不完备临床场景下的过度自信幻觉率。

关联一手材料：

- CliniCARE-Bench: Clinical Calibrated Audit of Medical Reasoning in Longitudinal Electronic Health Records (arXiv:2608.07796)（Scale AI Labs）· [原站](https://arxiv.org/abs/2608.07796) · [本地原件](../../../../raw/5eab0e1578b9b065576c1b3224c0a65fa7851c91c816911f3f2a01a2e2739b73) · 版本 `digest-material-5eab0e1578b9b065576c1b3224c0a65fa7851c91c816911f3f2a01a2e2739b73@1`
  > 【信源巡检核心摘要】 Scale AI Labs 发布面向纵向电子健康档案（EHR）的临床医学推理校准审计基准 CliniCARE-Bench（https://arxiv.org/abs/2608.07796 ）。不同于传统多选题医学测试（如 MedQA），该基准利用真实世界纵向多模态病历结构评测大模型在鉴别诊断、检验开具与风险分层中的置信度校准（Calibration）与证据归因严谨度，量化模型在证据不完备临床场景下的过度自信幻觉率。 — 原文提取
