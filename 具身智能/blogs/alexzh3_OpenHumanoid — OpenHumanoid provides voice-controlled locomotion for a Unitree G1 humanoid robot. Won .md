---
title: "alexzh3/OpenHumanoid — OpenHumanoid provides voice-controlled locomotion for a Unitree G1 humanoid robot. Won 2nd place at ETH Robotics Club hackathon."
type: blog_digest
sector: "具身智能"
source: "GitHub · alexzh3/OpenHumanoid (Alex Zheng)"
published_at: "2026-03-24"
raw_sha256: "8f7f868c7b33d0a8574774219fb9304ee3ac1716af155bee15dbe242169e9cb3"
material_version: "digest-material-8f7f868c7b33d0a8574774219fb9304ee3ac1716af155bee15dbe242169e9cb3@1"
origin_url: "https://github.com/alexzh3/OpenHumanoid"
trigger_source: "Alex Zheng (@AIex_3) · GitHub"
trigger_url: "https://github.com/alexzh3/OpenHumanoid"
user_comments: ""
status: "processed_with_gaps"
primary_topic: "模型与策略架构"
topic_confidence: 0.8532
---

<a id="digest-8f7f868c7b33d0a8"></a>
# alexzh3/OpenHumanoid — OpenHumanoid provides voice-controlled locomotion for a Unitree G1 humanoid robot. Won 2nd place at ETH Robotics Club hackathon.

2026-03-24 · GitHub · alexzh3/OpenHumanoid (Alex Zheng) · 有来源缺口

[本地原件归档](../../../raw/8f7f868c7b33d0a8574774219fb9304ee3ac1716af155bee15dbe242169e9cb3) · 固定材料版本 `digest-material-8f7f868c7b33d0a8574774219fb9304ee3ac1716af155bee15dbe242169e9cb3@1` · [一手原站](https://github.com/alexzh3/OpenHumanoid)

## 深度拆解与复核

- 口径与利益披露：本文一手材料为 GitHub 公开 MIT 协议开源仓库 `alexzh3/OpenHumanoid`，系 Alex Zheng（`@alexzh3`）联合五位队友（`@Kotochleb`、`@RoksolanaMazurak`、`@RybOlya`、`@Simoneutili`、`@VictoriaStarynchuk`）在苏黎世联邦理工学院机器人俱乐部（ETH Robotics Club）HACK2026 黑客松期间开发的参赛项目（获第 2 名），未披露任何商业赞助或厂商绑定。作为黑客松原型封装，其定位在于快速跑通语音指令到双足步态控制的演示闭环，距离工业级户外鲁棒部署与长程自主作业存在显著工程代差。

### 一、核心架构与一手仓核查

- 本工作台核查：逐字比对 `alexzh3/OpenHumanoid` 仓库完整 `README.md`（8,516 字符）确认：
  - ✅ 运控底座与双模桥接可实证复核：项目基于 Python 3.10+（`uv` 依赖管理），底层直接挂载英伟达开源 `NVlabs/GR00T-WholeBodyControl`（运行在 `--network host` 的 `decoupled_wbc-bash-root` Docker 容器内）；真机面向宇树 `Unitree G1`（`L2+B` 阻尼状态启动，宿主机网段配置为 192.168.123.222/24 并对 `enp0s31f6` 放行 CycloneDDS UDP 组播），同时提供 MuJoCo 仿真（`start_bridge.sh`）与无硬件宿主机开发桩（`mock_bridge.py`）。两套语音模式共用 localhost:8765（`BRIDGE_PORT`）HTTP 桥接层，通过 `/move`、`/stop`、`/activate`、`/deactivate`、`/key`、`/status` 将未量化的 `[vx, vy, vyaw]` 直接写入 `policy.cmd`（slow 0.2、medium 0.4、fast 0.6 m/s，按键 9 切换保持/放松）。
  - ⚠️ 延迟标称与导航/VLA 路线图尚未闭合复核：Fast 模式（`VOICE_MODE=realtime`，OpenAI Realtime API）标称 ~500ms 延迟、Full 模式（`VOICE_MODE=openclaw`，OpenClaw Gateway 127.0.0.1:18789）标称 ~2–5s 延迟，但均仅给出标称延迟区间，缺少 p95/p99 实测与户外非平坦地形恢复率统计；Roadmap 显示 Task 1（OpenClaw + WBC）已完成，Task 2（FAST-LIO + Open3D 3D SLAM/LiDAR）仅搭建定位骨架未接入控制，Task 3（VLA 操作）尚处于规划阶段。

| 模块/模式 | 运行链路与端口 | 标称延迟与状态 | 已落地能力与真实边界 |
| --- | --- | --- | --- |
| Fast 模式 (`VOICE_MODE=realtime`) | OpenAI Realtime API -> HTTP port 8765 bridge | ~500ms 标称延迟；已可用 | 语音触发前进/转向/急停，支持定时（如 3 秒）、定距（1–2 米）与串联动作指令 |
| Full 模式 (`VOICE_MODE=openclaw`) | OpenClaw Gateway (127.0.0.1:18789) -> port 8765 bridge | ~2–5s 标称延迟；已可用 | 支持语音、文本及 WhatsApp 多渠道指令接入，带人格设定 Theo |
| 底层 WBC 与导航/VLA 路线图 | NVlabs GR00T `decoupled_wbc` (Docker) + CycloneDDS | Task 1 已完成；Task 2 搭架；Task 3 规划中 | Task 2 已建 FAST-LIO + Open3D 3D 定位骨架但尚未接入控制闭环；Task 3 视觉-语言-动作 VLA 集成尚未落地 |

- 本工作台推断：结合本工作台本体图谱中「宇树科技 --[produces]--> Unitree G1」以及 `NVIDIA` / `NVlabs` / `NVIDIA GEAR Lab`（`GR00T 2` / `SONIC` 全身运控生态）的 1–2 跳实体关联，OpenHumanoid 清晰揭示了具身智能当前的技术栈分层效应——标准化的 `Unitree G1` 硬件平台、容器化的开源 WBC 基础控制器（`GR00T-WholeBodyControl` / `SONIC`）与现成的云端语音 Agent API 结合后，使原本依赖高门槛算法团队才能演示的「语音驱动双足行走」被压缩进单一黑客松周末周期。这意味着基础平地双足运控正快速商品化，单纯依靠离散速度指令演示（`[vx, vy, vyaw]`）已难以支撑长期技术溢价，行业真正的分水岭正在后移至未连入闭环的 3D SLAM 实时建图导航（Task 2）、端到端视觉操作 VLA（Task 3）以及非平坦复杂地形下的极端抗扰可靠性。

### 观点与可反驳条件

- ==观点==：以 Unitree G1 为代表的标准化人形开发硬件、开源全身运控堆栈（NVIDIA GR00T-WholeBodyControl / SONIC）与现成语音 Agent 桥接层正在迅速平权基础双足运控，单纯「能听懂指令行走转向」的演示不再构成人形本体或运控软件公司的核心护城河，价值必须转向感知-导航-操作闭环与现场可靠性。
- ==推翻条件==：① 至 2027 年底（2027 Q4），若商业交付规模超过每年 1,000 台的主流人形厂商（如宇树科技、Figure、Agility 或优必选等在公开财报、招股文件或第三方交付审计中披露）中仍有 >70% 将底层运控锁定在封闭专有执行器 SDK 与私有控制器内，导致 NVIDIA GR00T-WholeBodyControl 等开源 WBC 架构无法跨厂商硬件移植；② 至 2027 年底，若端到端原生音频到力矩控制模型（Audio-VLA）在 Unitree G1 或同等双足真机公开基准上，可复现测得 p95 语音到关节响应延迟 <=150ms（显著领先当前 Realtime API 的 ~500ms 与 OpenClaw 的 ~2–5s），且在非平坦地面及外力推搡试验中于 >=100 次测试下取得 >=95% 的稳定恢复率，证明 `[vx, vy, vyaw]` HTTP 级联桥接范式在性能上限上被结构性淘汰；③ 未来 12 个月内（至 2027 Q4 前），若 OpenHumanoid 或同类模块化开源架构率先打通 Task 2（FAST-LIO + Open3D 导航）与 Task 3（VLA 操作）闭环，并在公开可审计的户外/非结构化环境测试中连续执行 >=50 次多步骤自主任务且无人工遥操作接管成功率 >=90%，证明松耦合 Agent + HTTP/WBC 级联路线即可直接胜任现实自主作业。

---

## 原文摘录与一手信源存证

> alexzh3/OpenHumanoid — OpenHumanoid provides voice-controlled locomotion for a Unitree G1 humanoid robot. Won 2nd place at ETH Robotics Club hackathon.
> — 原文摘录，文字段落 1；证据 `digest-material-8f7f868c7b33d0a8574774219fb9304ee3ac1716af155bee15dbe242169e9cb3-excerpt-1@1`

一手材料：

- alexzh3/OpenHumanoid — OpenHumanoid provides voice-controlled locomotion for a Unitree G1 humanoid robot. Won 2nd place at ETH Robotics Club hackathon. · Alex Zheng (@AIex\_3) · GitHub · [原站](https://github.com/alexzh3/OpenHumanoid) · [主体档案：Alex Zheng (@AIex\_3)](../entities/people/Alex%20Zheng%20%28%40AIex_3%29.md) / [主体档案：宇树科技 (Unitree Robotics)](../entities/companies/%E5%AE%87%E6%A0%91%E7%A7%91%E6%8A%80%20%28Unitree%20Robotics%29.md) · [本地原件](../../../raw/78300bed77582f4a74738bec66d65856686863ff8e59201a3a5ea8077b0175b4)
  材料版本 `digest-material-78300bed77582f4a74738bec66d65856686863ff8e59201a3a5ea8077b0175b4@1`；获取方式 `github_readme_full_text`。
  > Open-source agentic AI framework for voice-controlled humanoid robots. Currently running \*\*voice-driven locomotion\*\* on the \*\*Unitree G1\*\* via \*\*OpenClaw\*\* and \*\*GR00T Whole-Body Control\*\*. — 原文提取
  > Built during \*\*HACK2026 Hackathon\*\*, organized by the ETH Robotics Club and won the 2nd place. — 原文提取

归属与范围：MIT 开源项目 alexzh3/OpenHumanoid（ETH Robotics Club HACK2026 黑客松亚军）基于 Unitree G1，通过共享 HTTP 桥接端口 8765 将语音/Agent 指令直接写入 NVlabs/GR00T-WholeBodyControl（decoupled\_wbc Docker）速度接口：Fast 模式（OpenAI Realtime API）标称约 500ms 延迟，Full 模式（OpenClaw Gateway，端口 18789）标称 2–5s 延迟；Roadmap 显示 Task 1（OpenClaw + WBC）已完成，Task 2（FAST-LIO + Open3D 3D SLAM/LiDAR）仅搭建骨架未接闭环，Task 3（VLA 操作集成）尚在规划中。

来源缺口：

- `not_disclosed`：OpenHumanoid 仓库 README 仅给出 Fast (~500ms) 与 Full (~2-5s) 两种模式的标称延迟，未公开实测 p95/p99 端到端延迟分布、户外非平坦地形抗扰恢复率及真机连续运行成功率；Roadmap 中 Task 2（FAST-LIO + Open3D 导航）尚未接入控制闭环，Task 3（VLA 操作）尚处于规划阶段。 [线索](https://github.com/alexzh3/OpenHumanoid)

[返回赛道总览](../赛道总览.md#digest-8f7f868c7b33d0a8) · [返回导读索引](README.md) · [主体档案库](../entities/README.md)
