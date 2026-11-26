# Longevity · 主体档案库（Entities）

按「个人 / 公司 / 基金 / 机构」四类主体聚合本赛道收录的微信文章、一手论文/报告（含 NotebookLM 与 Google Drive 归档）、用户追问及待核查缺口。账号、作者与机构身份在底层 `registry.sqlite3` 中严格分开。

[返回赛道总览](../赛道总览.md) · [单篇导读索引](../blogs/README.md) · [交互式逻辑演变图谱](https://mojojolite-sketch.github.io/Longevity/index.html)

| 主体分类 | 主体数量 | 覆盖一手材料数 | 关联文章数 | 说明 |
| --- | --- | --- | --- | --- |
| [👤 个人与学者 (People)](#people) | 0 | 0 | 0 | 学者、创始人、工程师与独立研究者档案；同名 arXiv 作者索引仅作论文署名聚合，不自动合并社交账号身份。 |
| [🏢 公司与产业主体 (Companies)](#companies) | 1 | 4 | 2 | 机器人本体、模型算法、传感器、自动化与算力基础设施公司档案。 |
| [💰 基金与投资机构 (Funds)](#funds) | 0 | 0 | 0 | 风险投资机构、产业基金与二级市场投资载体档案。 |
| [🏛️ 实验室、高校与机构平台 (Labs & Institutions)](#labs) | 3 | 7 | 2 | 高校实验室、企业研究院、开源合作组织、政府与行业研究机构档案。 |

## ⚠️ 未分组待审（Unassigned Audit Bucket）

新入口先显式挂起，必须先核实母体/平台关系并写入 `state/publisher_groups.json` 后移入正式组，不得凭名称猜测合并。

| 主体名称 | 平台与入口 | 档案入口 |
| --- | --- | --- |
| PubMed (NCBI) | [PubMed](https://pubmed.ncbi.nlm.nih.gov/) | [查看档案](companies/PubMed%20%28NCBI%29.md) |

<a id="people"></a>
## 👤 个人与学者 (People)

学者、创始人、工程师与独立研究者档案；同名 arXiv 作者索引仅作论文署名聚合，不自动合并社交账号身份。

| 主体名称 | 平台与入口 | 关注来源 | 收录文章 | 一手材料 | 问题/缺口 | 核心定位与说明 | 档案入口 |
| --- | --- | --- | --- | --- | --- | --- | --- |

<a id="companies"></a>
## 🏢 公司与产业主体 (Companies)

机器人本体、模型算法、传感器、自动化与算力基础设施公司档案。

| 主体名称 | 平台与入口 | 关注来源 | 收录文章 | 一手材料 | 问题/缺口 | 核心定位与说明 | 档案入口 |
| --- | --- | --- | --- | --- | --- | --- | --- |
| PubMed (NCBI) | [PubMed](https://pubmed.ncbi.nlm.nih.gov/) | [Ascorbic acid supplementation improves skelet…](https://pubmed.ncbi.nlm.nih.gov/26774673/) +3 | 2 | 4 | 6 | — | [查看档案](companies/PubMed%20%28NCBI%29.md) |

<a id="funds"></a>
## 💰 基金与投资机构 (Funds)

风险投资机构、产业基金与二级市场投资载体档案。

| 主体名称 | 平台与入口 | 关注来源 | 收录文章 | 一手材料 | 问题/缺口 | 核心定位与说明 | 档案入口 |
| --- | --- | --- | --- | --- | --- | --- | --- |

<a id="labs"></a>
## 🏛️ 实验室、高校与机构平台 (Labs & Institutions)

高校实验室、企业研究院、开源合作组织、政府与行业研究机构档案。

| 主体名称 | 平台与入口 | 关注来源 | 收录文章 | 一手材料 | 问题/缺口 | 核心定位与说明 | 档案入口 |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Deakin University IPAN | [deakin.edu.au](https://www.deakin.edu.au/ipan) | [Ascorbic acid supplementation improves skelet…](https://pubmed.ncbi.nlm.nih.gov/26774673/) +3 | 1 | 4 | 3 | — | [查看档案](labs/Deakin%20University%20IPAN.md) |
| Maastricht University CRIS | [maastrichtuniversity.nl](https://cris.maastrichtuniversity.nl/) | [Sedentary behaviour and cardiometabolic healt…](https://pubmed.ncbi.nlm.nih.gov/40483777/) +1 | 1 | 2 | 3 | — | [查看档案](labs/Maastricht%20University%20CRIS.md) |
| World Health Organization | [who.int](https://www.who.int/) | [Physical activity & sedentary behaviour recom…](https://www.who.int/news-room/fact-sheets/detail/physical-activity) | 1 | 1 | 3 | — | [查看档案](labs/World%20Health%20Organization.md) |
