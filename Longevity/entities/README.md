# Longevity · 主体档案库（Entities）

按「个人 / 公司 / 基金 / 机构」四类主体聚合本赛道收录的微信文章、一手论文/报告（含 NotebookLM 与 Google Drive 归档）、用户追问及待核查缺口。账号、作者与机构身份在底层 `registry.sqlite3` 中严格分开。

[返回赛道总览](../赛道总览.md) · [单篇导读索引](../blogs/README.md) · [交互式逻辑演变图谱](https://mojojolite-sketch.github.io/Longevity/index.html)

| 主体分类 | 主体数量 | 覆盖一手材料数 | 关联文章数 | 说明 |
| --- | --- | --- | --- | --- |
| [👤 个人与学者 (People)](#people) | 3 | 2 | 2 | 学者、创始人、工程师与独立研究者档案；同名 arXiv 作者索引仅作论文署名聚合，不自动合并社交账号身份。 |
| [🏢 公司与产业主体 (Companies)](#companies) | 9 | 13 | 4 | 机器人本体、模型算法、传感器、自动化与算力基础设施公司档案。 |
| [💰 基金与投资机构 (Funds)](#funds) | 1 | 2 | 1 | 风险投资机构、产业基金与二级市场投资载体档案。 |
| [🏛️ 实验室、高校与机构平台 (Labs & Institutions)](#labs) | 7 | 11 | 5 | 高校实验室、企业研究院、开源合作组织、政府与行业研究机构档案。 |

## ⚠️ 未分组待审（Unassigned Audit Bucket）

新入口先显式挂起，必须先核实母体/平台关系并写入 `state/publisher_groups.json` 后移入正式组，不得凭名称猜测合并。

| 主体名称 | 平台与入口 | 档案入口 |
| --- | --- | --- |
| @julesyoo (X) | [X](https://x.com/julesyoo) | [查看档案](companies/%40julesyoo%20%28X%29.md) |
| Community Servings | [Official Site](https://www.servings.org/) | [查看档案](companies/Community%20Servings.md) |
| Geisinger Health | [Official Site](https://www.geisinger.org/) | [查看档案](companies/Geisinger%20Health.md) |
| Huberman Lab Official Website | [website](https://www.hubermanlab.com/) | [查看档案](companies/Huberman%20Lab%20Official%20Website.md) |
| Huberman Lab YouTube Channel | [youtube](https://www.youtube.com/@hubermanlab) | [查看档案](companies/Huberman%20Lab%20YouTube%20Channel.md) |
| International Journal of Obesity | [journal](https://www.nature.com/ijo/) | [查看档案](companies/International%20Journal%20of%20Obesity.md) |
| PubMed (NCBI) | [PubMed](https://pubmed.ncbi.nlm.nih.gov/) | [查看档案](companies/PubMed%20%28NCBI%29.md) |
| Robert Lustig UCSF Academic Profile | [university](https://profiles.ucsf.edu/robert.lustig) | [查看档案](companies/Robert%20Lustig%20UCSF%20Academic%20Profile.md) |
| The American Journal of Clinical Nutrition | [journal](https://www.sciencedirect.com/journal/the-american-journal-of-clinical-nutrition) | [查看档案](companies/The%20American%20Journal%20of%20Clinical%20Nutrition.md) |

<a id="people"></a>
## 👤 个人与学者 (People)

学者、创始人、工程师与独立研究者档案；同名 arXiv 作者索引仅作论文署名聚合，不自动合并社交账号身份。

| 主体名称 | 平台与入口 | 关注来源 | 收录文章 | 一手材料 | 问题/缺口 | 核心定位与说明 | 档案入口 |
| --- | --- | --- | --- | --- | --- | --- | --- |
| @eriktorenberg (X) | [X](https://x.com/eriktorenberg) | [Replay: On Food as Medicine (2020)](https://a16z.simplecast.com/episodes/replay-on-food-as-medicine-2020-6pgEsA1X) | 1 | 1 | 2 | a16z Show 节目简介列示的 host 账号 | [查看档案](people/%40eriktorenberg%20%28X%29.md) |
| @joshhix (X) | [X](https://x.com/joshhix) | [Replay: On Food as Medicine (2020)](https://a16z.simplecast.com/episodes/replay-on-food-as-medicine-2020-6pgEsA1X) | 1 | 1 | 2 | — | [查看档案](people/%40joshhix%20%28X%29.md) |
| Huberman Lab Podcast RSS | [rss](https://feeds.megaphone.fm/hubermanlab) | [How Sugar & Processed Foods Impact Your Healt…](https://www.hubermanlab.com/episode/dr-robert-lustig-how-sugar-processed-foods-impact-your-health) | 1 | 1 | 2 | Canonical audio feed (copyright Scicomm Media LLC) | [查看档案](people/Huberman%20Lab%20Podcast%20RSS.md) |

<a id="companies"></a>
## 🏢 公司与产业主体 (Companies)

机器人本体、模型算法、传感器、自动化与算力基础设施公司档案。

| 主体名称 | 平台与入口 | 关注来源 | 收录文章 | 一手材料 | 问题/缺口 | 核心定位与说明 | 档案入口 |
| --- | --- | --- | --- | --- | --- | --- | --- |
| @julesyoo (X) | [X](https://x.com/julesyoo) | [Replay: On Food as Medicine (2020)](https://a16z.simplecast.com/episodes/replay-on-food-as-medicine-2020-6pgEsA1X) | 1 | 1 | 2 | — | [查看档案](companies/%40julesyoo%20%28X%29.md) |
| Community Servings | [Official Site](https://www.servings.org/) | [Association Between Receipt of a Medically Ta…](https://pubmed.ncbi.nlm.nih.gov/31009050/) | 1 | 1 | 2 | Community Servings 官网 | [查看档案](companies/Community%20Servings.md) |
| Geisinger Health | [Official Site](https://www.geisinger.org/) | [Effect of an Intensive Food-as-Medicine Progr…](https://pubmed.ncbi.nlm.nih.gov/38147326/) | 1 | 1 | 2 | Geisinger 医疗系统官网 | [查看档案](companies/Geisinger%20Health.md) |
| Huberman Lab Official Website | [website](https://www.hubermanlab.com/) | [How Sugar & Processed Foods Impact Your Healt…](https://www.hubermanlab.com/episode/dr-robert-lustig-how-sugar-processed-foods-impact-your-health) | 1 | 1 | 2 | Primary web home for Huberman Lab (Scicomm Media LLC) | [查看档案](companies/Huberman%20Lab%20Official%20Website.md) |
| Huberman Lab YouTube Channel | [youtube](https://www.youtube.com/@hubermanlab) | [How Sugar & Processed Foods Impact Your Healt…](https://www.hubermanlab.com/episode/dr-robert-lustig-how-sugar-processed-foods-impact-your-health) | 1 | 1 | 2 | Canonical YouTube video portal for Huberman Lab | [查看档案](companies/Huberman%20Lab%20YouTube%20Channel.md) |
| International Journal of Obesity | [journal](https://www.nature.com/ijo/) | [Effects of aspartame-, monk fruit-, stevia- a…](https://pubmed.ncbi.nlm.nih.gov/27956737/) | 1 | 1 | 2 | Peer-reviewed obesity research journal | [查看档案](companies/International%20Journal%20of%20Obesity.md) |
| PubMed (NCBI) | [PubMed](https://pubmed.ncbi.nlm.nih.gov/) | [Ascorbic acid supplementation improves skelet…](https://pubmed.ncbi.nlm.nih.gov/26774673/) +7 | 3 | 8 | 8 | NCBI PubMed | [查看档案](companies/PubMed%20%28NCBI%29.md) |
| Robert Lustig UCSF Academic Profile | [university](https://profiles.ucsf.edu/robert.lustig) | [The Metabolic Matrix: Re-engineering ultrapro…](https://pubmed.ncbi.nlm.nih.gov/37063330/) | 1 | 1 | 2 | UCSF institutional verification for Dr. Robert Lustig | [查看档案](companies/Robert%20Lustig%20UCSF%20Academic%20Profile.md) |
| The American Journal of Clinical Nutrition | [journal](https://www.sciencedirect.com/journal/the-american-journal-of-clinical-nutrition) | [Sucrose-sweetened beverages increase fat stor…](https://pubmed.ncbi.nlm.nih.gov/22205311/) | 1 | 1 | 2 | Peer-reviewed nutrition journal | [查看档案](companies/The%20American%20Journal%20of%20Clinical%20Nutrition.md) |

<a id="funds"></a>
## 💰 基金与投资机构 (Funds)

风险投资机构、产业基金与二级市场投资载体档案。

| 主体名称 | 平台与入口 | 关注来源 | 收录文章 | 一手材料 | 问题/缺口 | 核心定位与说明 | 档案入口 |
| --- | --- | --- | --- | --- | --- | --- | --- |
| a16z | [Podcast](https://feeds.simplecast.com/JGE3yC0V)、[Official Site](https://a16z.com/) | [Replay: On Food as Medicine (2020)](https://a16z.simplecast.com/episodes/replay-on-food-as-medicine-2020-6pgEsA1X) +1 | 1 | 2 | 2 | The a16z Show 官方音频分发源 a16z 官网 | [查看档案](funds/a16z.md) |

<a id="labs"></a>
## 🏛️ 实验室、高校与机构平台 (Labs & Institutions)

高校实验室、企业研究院、开源合作组织、政府与行业研究机构档案。

| 主体名称 | 平台与入口 | 关注来源 | 收录文章 | 一手材料 | 问题/缺口 | 核心定位与说明 | 档案入口 |
| --- | --- | --- | --- | --- | --- | --- | --- |
| BMC Primary Care | [BioMed Central](https://bmcprimcare.biomedcentral.com/) | [Sedentary behavior, physical activity, and ca…](https://bmcprimcare.biomedcentral.com/articles/10.1186/s12875-026-03652-4) | 1 | 1 | 2 | Springer Nature 旗下 BioMed Central 开放获取全科医学期刊 | [查看档案](labs/BMC%20Primary%20Care.md) |
| Deakin University IPAN | [deakin.edu.au](https://www.deakin.edu.au/ipan) | [Ascorbic acid supplementation improves skelet…](https://pubmed.ncbi.nlm.nih.gov/26774673/) +3 | 1 | 4 | 3 | — | [查看档案](labs/Deakin%20University%20IPAN.md) |
| Frontiers in Nutrition | [journal](https://www.frontiersin.org/journals/nutrition) | [The Metabolic Matrix: Re-engineering ultrapro…](https://pubmed.ncbi.nlm.nih.gov/37063330/) | 1 | 1 | 2 | Open-access peer-reviewed nutrition journal | [查看档案](labs/Frontiers%20in%20Nutrition.md) |
| Lund University | [Research Portal](https://portal.research.lu.se/) | [Sedentary behavior, physical activity, and ca…](https://bmcprimcare.biomedcentral.com/articles/10.1186/s12875-026-03652-4) | 1 | 1 | 2 | Scania Targeted Health Dialogues 研究主力机构仓储 | [查看档案](labs/Lund%20University.md) |
| Maastricht University CRIS | [maastrichtuniversity.nl](https://cris.maastrichtuniversity.nl/) | [Sedentary behaviour and cardiometabolic healt…](https://pubmed.ncbi.nlm.nih.gov/40483777/) +1 | 1 | 2 | 3 | — | [查看档案](labs/Maastricht%20University%20CRIS.md) |
| Tufts Food is Medicine Institute | [Official Site](https://tuftsfoodismedicine.org/) | [Medically tailored meals receipt and healthca…](https://pubmed.ncbi.nlm.nih.gov/42230753/) +1 | 1 | 2 | 2 | Tufts Food is Medicine Institute | [查看档案](labs/Tufts%20Food%20is%20Medicine%20Institute.md) |
| World Health Organization | [who.int](https://www.who.int/) | [Physical activity & sedentary behaviour recom…](https://www.who.int/news-room/fact-sheets/detail/physical-activity) | 1 | 1 | 3 | — | [查看档案](labs/World%20Health%20Organization.md) |
