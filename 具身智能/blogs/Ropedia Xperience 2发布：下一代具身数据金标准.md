---
title: "Ropedia Xperience 2发布：下一代具身数据金标准"
type: blog_digest
sector: "具身智能"
source: "Ropedia Official Release · GitHub & HuggingFace (arXiv:2611.17060)"
published_at: "2026-11-13"
raw_sha256: "4868b8ab971fb4a3f92a278744162fbb8054fb9fa2632882c21e7399d72fd0e4"
material_version: "digest-material-4868b8ab971fb4a3f92a278744162fbb8054fb9fa2632882c21e7399d72fd0e4@1"
origin_url: "https://ropedia.com/xperience/2-research/"
trigger_source: "Ropedia"
trigger_url: "https://mp.weixin.qq.com/s/FZInKyb7mgFxeuDwlDwjFQ"
user_comments: ""
status: "processed_with_gaps"
---

<a id="digest-4868b8ab971fb4a3"></a>
# Ropedia Xperience 2发布：下一代具身数据金标准

2026-11-13 · Ropedia Official Release · GitHub & HuggingFace (arXiv:2611.17060) · 有来源缺口

[本地原件归档](../../../raw/4868b8ab971fb4a3f92a278744162fbb8054fb9fa2632882c21e7399d72fd0e4) · 固定材料版本 `digest-material-4868b8ab971fb4a3f92a278744162fbb8054fb9fa2632882c21e7399d72fd0e4@1` · [一手原站](https://ropedia.com/xperience/2-research/) · [触发线索（Ropedia）](https://mp.weixin.qq.com/s/FZInKyb7mgFxeuDwlDwjFQ)

## 深度拆解与复核

- 来源：[Ropedia Xperience 2 官方研究页](https://ropedia.com/xperience/2-research/) · [GitHub: Ropedia-Xperience-2](https://github.com/Ropedia/Ropedia-Xperience-2) · [Hugging Face: Ropedia-Xperience-2](https://huggingface.co/datasets/ropedia-ai/Ropedia-Xperience-2) · [arXiv:2611.17060](https://arxiv.org/abs/2611.17060)
- 口径与利益披露（含重复归档核查）：本篇（2026-11-13）系 Ropedia 官方微信公众号对已入库论文 [《Ropedia Xperience 2: A Gold Standard for Scaling Physical AI Environments and Behaviors》](Ropedia%20Xperience%202_%20A%20Gold%20Standard%20for%20Scaling%20Physical%20AI%20Environments%20and%20Behaviors.md)（arXiv:2611.17060，2026-11-12）的中文官方发布稿，属于一手本体企业对外宣发口径（非第三方媒体，但含「下一代具身数据金标准」品牌宣称）。本条目的增量研究价值在于==闭合并验证了此前 arXiv 单篇入库时登记为 `unavailable` 的三大官方工程入口（研究主页、GitHub 与 Hugging Face 首期实装数据集）==，并逐项审计中英文口径偏差。
- ==核心结论==：穿透 Ropedia 官方研究主页、GitHub（Apache-2.0 xperience-register 配准工具）与 Hugging Face 首期数据集后，发现两项公号中文推文未明示的真实工程边界：一是 Hugging Face 实际仅释出首期 126 个场景（约 1.07 TB）、采用禁止商用的 CC BY-NC 4.0 协议，且官方说明文档明确承认首期文件中的扫描坐标系与录制坐标系尚未完成合并配准，使用者须自行运行配准 CLI；二是中文推文将 500 题空间推理榜首写为「Gemini 3.8 Flash 74.2%」，而英文官网与技术报告原件白纸黑字为 Gemini-2.5-Pro 74.2%（与 GPT-6 Astra High 71.8% 并列前二）。置入本库 Maxinsights 与 2027 具身数据市场对账坐标，Ropedia Xperience 2 在「单场多任务可复位 Real-to-Sim 评测」方向有独特资产价值，但在「131 小时总体量、CC BY-NC 4.0 商用限制与无真机策略微调消融」面前，短期尚不构成商业交付层面的「数据金标准」。

---

### 一、 补齐开源实装核查：项目主页、GitHub 与 Hugging Face 首期实盘

| 工程组件与入口 | 实测开放状态与许可协议 | 技术规格与实测约束（本工作台核查） |
| :--- | :--- | :--- |
| Ropedia-Xperience-2（GitHub） | 已公开（Apache-2.0 代码许可），含 Xperience2-paper.pdf 与 xperience-register CLI | ✅ 配准工具实测（本工作台核查）：提供 Python 3.10–3.12 环境一键配准命令 xperience-register --kosmo ... --homie ...，负责把 HOMIE 录制位姿配准至 KOSMO 扫描重力对齐坐标系；开源仅限加载/配准工具，未附带真机策略训练脚本或 Real-to-Sim 自动网格物理化生成管道。 |
| ropedia-ai/Ropedia-Xperience-2（Hugging Face） | 已公开 Batch 1：仅 126 个场景（约 1.07 TB），协议为 CC BY-NC 4.0（非商业用途） | ⚠️ 首期发布落差核查（本工作台核查）：官网与公号大字宣传「1,589 个场景（住宅 87.4%、卧室与客厅 61.4%）/ 596 地点 / 4,230 段录像 / 74 任务 / 131 小时」，但 Hugging Face 当前仅上线首期 126 场景（不足宣称总盘的 8%），且 `Conventions` 章节明示首期文件中扫描坐标系与 HOMIE SLAM 坐标系尚未合并；LMM 生成的动作标注附带官方免责说明存在物体名称或数量错误。 |
| ropedia.com/xperience/2-research（官方研究页） | 已公开交互演示（含 107 物体 Real-to-Sim 与办公室接水 7 步长程生成） | ✅ 新增演示核查（本工作台核查）：主页除推文中厨房微波炉 8 步（30/30 次通过、单条 3,869–4,255 步、均长 2.2 分钟、算力生成 10–16 分钟）外，新增办公室饮水机 7 步长程任务（7/7 通过 43 项检查、2.9 分钟连续轨迹、双水龙头各注水约 10% 共 135 ml），但明确标注水流按阀门角度规则模拟、非流体物理仿真。 |

---

### 二、 中英文口径不一致审计与核心指标对账（`✅` / `⚠️` / `❌`）

| 核查项目 | 中文推文（#469）表述 | 英文官网 / arXiv:2611.17060 原件口径 | 核查定性与实质影响 |
| :--- | :--- | :--- | :--- |
| 1. 空间推理 500 题榜首模型 | 写为「Gemini 3.8 Flash 总体准确率 74.2%，GPT-6 Astra (High) 71.8%」 | ropedia.com 英文研究页与论文原文写为「Gemini-2.5-Pro 74.2%，HoliWorld-VL-4B 67.8%，GPT-5 High 65.8%」 | ❌ 翻译/本地化篡改型号（本工作台核查）：74.2% 在英文官方研究页对应 Gemini-2.5-Pro（非 Gemini 3.8 Flash），属于中文公众号编译/改写时强行替换为新版本模型名的口径漂移，高度（>90%）与相对位置表现高而距离/平移仍是硬短板。 |
| 2. Real-to-Sim 重建物体数量 | 写为「演示住宅转换 107 个物体，其中 73 个可交互」 | ropedia.com 主页写「107 objects (73 interactive)」，论文 §5.2 写「217 个独立物体」 | ⚠️ 展示样本与论文切片差异（本工作台核查）：网页端展示了 107 物体的精简可交互住宅片段（中位像素误差 2.5 cm、79% 误差 <=5 cm），而 arXiv 论文完整公寓含 217 个物体；两者均为单场景案例而非全量 1,589 场景批量化产物。 |
| 3. 几何与三维定位基线 | π³ 轨迹最优、DA3-Giant 中/稠密位姿领先；Boxer 取得 AP@0.25 24.69%、AP@0.5 6.09% | 20 个精选扫描子集（13 Perfect + 7 Usable），中等输入 11–100 帧 | ✅ 可信但偏弱的基准结论（本工作台核查）：Boxer 的 AP@0.5 仅 6.09% 真实反映了当前 3D 开放词表定位在真实凌乱家居中的脆性，但该 20 场景子集系人为筛出的高质切片（全库厨房 Reuse 缺陷率达 81.6%）。 |
| 4. Action Retargeting 与安全检查 | 4 段共 10.3 分钟（2× 降速、底盘行驶 96 m、35%–41% 移动帧），指尖中位误差 0.40–0.55 cm（P95 < 2 cm），关节速度/力矩峰值达上限 90% / 89%，ZMP 距边界 >= 0.46 cm | 同左，并明示回放发生在静态 3DGS 中，物体不随机械臂运动 | ⚠️ 运动学可行性不等于物理操作成功（本工作台核查）：所有指标均在无物理接触碰撞的 3DGS 回放中测得，「90% / 89% 峰值的零失败 PASS 门槛」仅代表动力学未超限，且虚拟遥操与长程轨迹未披露在真实物理机器人上的训练增益对比。 |

---

### 三、 与库内 Maxinsights 与 2027 具身数据经济学的定位分野

对照本库已归档的 [Maxinsights 主体档案](../entities/companies/Maxinsights.md) 及 Sam Padilla 的 [《The State of Robotics Data In 2027》](The%20State%20of%20Robotics%20Data%20In%202027.md)：
- ⚠️ **吞吐、精度与商业许可的三重落差（本工作台推断）**：Sam Padilla 调研 47 家供应商后指出，单目视频已跌至 \$5/h 红海，商业壁垒正收缩至「双目/触觉高价值模态 + B2B 现场准入 + 端到端良率」。Maxinsights 靠单趟硬同步采集（MaxSLAM 4.24 mm 精度、99.90% 完整率、MaxLoop 96% 良率）与 MaxGlove 触觉手套已做到 200 万+ 小时实采（45 万 h/月、\$250M 预计 ARR）；而 Ropedia Xperience 2 的双阶段静态清场协议（先手持 LiDAR 扫场再戴 HOMIE Headset 2 录制、配准 PASS 门槛 <= 5 cm）在规模上落后 3–4 个数量级（131 h），且首期以 CC BY-NC 4.0 开源 126 个未合并配准文件，其真正定位是==物理 AI 闭环仿真与空间评测基础设施==，而非替代高吞吐商业数采产线。

### 观点与可反驳条件

- ==观点==：Ropedia Xperience 2（配合官方新近开放的 GitHub 配准工具与 Hugging Face 126 场景 Batch 1）在「米制场景重建 + 统一坐标系行为配准 + Real-to-Sim 闭环评测」这一学术基准维度构成了重要补全，但距离标题所称「下一代具身数据金标准」仍有三大未闭合缺口：131 小时行为体量、CC BY-NC 4.0 非商用限制以及至今缺失的「该数据训练策略在真实物理机器人上的成功率增益消融」；且中文发布稿将 Gemini-2.5-Pro 改写为 Gemini 3.8 Flash 等细节漂移提示引用时必须以英文研究页与 arXiv:2611.17060 原件为准。
- ==推翻条件==：
  1. 全量合规交付与真实策略增益实证：若 Ropedia 在 2027 年中前完成全部 1,589 场景与已合并配准矩阵的商用授权释放，且独立第三方或团队补充的真机对照实验证明，用 Xperience 2 生成的 Real-to-Sim 与 Retargeting 轨迹训练的策略在真机操作任务上较同等预算纯真机/纯第一视角视频基线提升 >= 20 个百分点，则「尚不构成商业数据金标准」的限定将被推翻。
  2. 商业现场扫描效率突破：若双阶段 LiDAR + HOMIE 采集协议在非清场动态商业后厨/零售场景的可用良率突破 90%（彻底扭转当前厨房 81.6% Reuse 残缺率）并跑出 >= 50,000 小时商业交付，则其规模化瓶颈判断将被证伪。

---

## 原文摘录与一手信源存证

> 当前发布的1,589个场景覆盖12类真实空间，其中住宅内部场景有1,389个，占87.4%；卧室和客厅合计976个，占61.4%。整体采集共覆盖596处地点，其中443处为整户住宅（地点数量采用整体采集统计，与本次发布的场景数量分别计算）。
> — 原文摘录，文字段落 1；证据 `digest-material-4868b8ab971fb4a3f92a278744162fbb8054fb9fa2632882c21e7399d72fd0e4-excerpt-1@2`

> 表现最好的模型Boxer，AP@0.25为24.69%，AP@0.5为6.09%。真实环境中的精确定位仍然困难，也凸显了更多开放真实场景数据的需求：让训练与评测覆盖更广泛的布局、遮挡和物体差异，并为模型提供可靠的三维标注。
> — 原文摘录，文字段落 2；证据 `digest-material-4868b8ab971fb4a3f92a278744162fbb8054fb9fa2632882c21e7399d72fd0e4-excerpt-2@2`

> 题目覆盖平移、旋转、距离、深度、高度和相对位置六类。Gemini 3.8 Flash总体准确率74.2%，GPT-6 Astra（High）71.8%。在高度与相对位置判断上，两者的准确率都超过90%，已经能较好地回答多类空间问题。
> — 原文摘录，文字段落 3；证据 `digest-material-4868b8ab971fb4a3f92a278744162fbb8054fb9fa2632882c21e7399d72fd0e4-excerpt-3@2`

一手材料：

- Ropedia Xperience 2 — Official Interactive Research Page · Ropedia Research Team · [原站](https://ropedia.com/xperience/2-research/) · [主体档案：Ropedia](../entities/labs/Ropedia.md) · [本地原件](../../../raw/3106c503f6f51969a3ccab053ffa8996ff355bed3dcfabd519cfde5f8cb987a2)
  材料版本 `digest-material-3106c503f6f51969a3ccab053ffa8996ff355bed3dcfabd519cfde5f8cb987a2@1`；获取方式 `http_full_text`。
  > A handheld LiDAR scanner captures the whole space in one pass, in 3D and at metric scale. — 原文提取
  > Then the operator wears HOMIE Gen 2 and records every task assigned to the scene. — 原文提取
- Ropedia/Ropedia-Xperience-2: Scene Registration CLI & Official Repository · Ropedia (GitHub) · [原站](https://github.com/Ropedia/Ropedia-Xperience-2) · [主体档案：Ropedia](../entities/companies/Ropedia.md) · [本地原件](../../../raw/e7dc2e6e0eb0393fcb57b7e8876847e8678bea06cb17ca0d65de030a98050b4f)
  材料版本 `digest-material-e7dc2e6e0eb0393fcb57b7e8876847e8678bea06cb17ca0d65de030a98050b4f@1`；获取方式 `http_full_text`。
  > Align a processed \*\*HOMIE recording → KOSMO scene\*\* and export trajectories and estimated hand/body motion in the scene frame. — 原文提取
- ropedia-ai/Ropedia-Xperience-2 Hugging Face Dataset Card · ropedia-ai (Hugging Face) · [原站](https://huggingface.co/datasets/ropedia-ai/Ropedia-Xperience-2) · [主体档案：Ropedia](../entities/companies/Ropedia.md) · [本地原件](../../../raw/15248c96e4fc2a3773bed0213408fe4e5283a2c459e382055e6a62b97aa435f5)
  材料版本 `digest-material-15248c96e4fc2a3773bed0213408fe4e5283a2c459e382055e6a62b97aa435f5@1`；获取方式 `http_full_text`。
  > \*\*A Gold Standard for Scaling Physical AI Environments and Behaviors.\*\* 1,500+ scanned scenes and 4,000+ egocentric recordings, registered in one metric frame. — 原文提取
  > \> \*\*First batch online.\*\* Xperience 2 is being published in batches. The first batch (126 scenes, about 1.07 TB) is \> complete and listed in the tables below with thumbnails. — 原文提取
- Ropedia Xperience 2: A Gold Standard for Scaling Physical AI Environments and Behaviors · Ropedia Research Team · [原站](https://arxiv.org/abs/2611.17060) · [主体档案：Ropedia](../entities/labs/Ropedia.md) · [本地原件](../../../raw/504378c6e2ed064fddeeac5b30f3574a8affa418723dcb5dc581ac8104cf7ff0)
  材料版本 `digest-material-504378c6e2ed064fddeeac5b30f3574a8affa418723dcb5dc581ac8104cf7ff0@2`；获取方式 `arxiv_http_fulltext`。
  > Large foundation models such as GPT-6 Astra and Claude Fable 5.1 have recently been shown to control robots directly from visual observations. They nevertheless remain brittle on long-horizon, contact-rich tasks in real-world environments. Further progress depends on two complementary resources: demonstrations of human behavior that supervise how tasks are performed, and interactive environments in which policies can be rolled out, evaluated, and improved in closed loop. — 原文提取
  > Ropedia Xperience 2 is collected with a two-stage protocol that requires a single operator and no robot or motion-capture infrastructure on site. Each scene is first scanned once with a handheld 3D scanner, and its assigned tasks are then recorded with the HOMIE head-mounted recorder, so that one scan provides the spatial context for multiple recordings. — 原文提取

归属与范围：已穿透并实际抓回此前 arXiv 单篇入库时缺失的三大官方一手入口：ropedia.com/xperience/2-research/ 交互研究页、github.com/Ropedia/Ropedia-Xperience-2（Apache-2.0 配准 CLI）与 huggingface.co/datasets/ropedia-ai/Ropedia-Xperience-2（Batch 1 仅上线 126 场景 / 1.07 TB、CC BY-NC 4.0 协议且扫描与录制坐标系尚未在文件层合并），同时交叉核验 arXiv:2611.17060 与库内 Maxinsights / 2027 具身数据调研，暴露中文官微把 Gemini-2.5-Pro 改写为 Gemini 3.8 Flash 等口径偏差。

来源缺口：

- `not_disclosed`：Hugging Face 首期（Batch 1）仅上线 126 / 1,589 场景（约 1.07 TB）且扫描与录制文件坐标系尚未预合并，余下约 1,463 个场景上线排期、商业授权报价及基于 Xperience 2 训练真机策略的成功率增益消融均未公开。 [线索](https://huggingface.co/datasets/ropedia-ai/Ropedia-Xperience-2)
- `conflict`：中文官微稿件将 500 题空间推理榜首 74.2% 写作 Gemini 3.8 Flash，与英文研究主页 ropedia.com/xperience/2-research/ 明确标注的 Gemini-2.5-Pro 存在型号不一致；且已有同题英文主稿（504378c6）在库，需避免重复建档。 [线索](https://ropedia.com/xperience/2-research/)

[返回赛道总览](../赛道总览.md#digest-4868b8ab971fb4a3) · [返回导读索引](README.md) · [主体档案库](../entities/README.md)
