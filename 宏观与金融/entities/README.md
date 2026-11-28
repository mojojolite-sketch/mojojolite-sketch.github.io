# 宏观与金融 · 主体档案库（Entities）

按「个人 / 公司 / 基金 / 机构」四类主体聚合本赛道收录的微信文章、一手论文/报告（含 NotebookLM 与 Google Drive 归档）、用户追问及待核查缺口。账号、作者与机构身份在底层 `registry.sqlite3` 中严格分开。

[返回赛道总览](../赛道总览.md) · [单篇导读索引](../blogs/README.md) · [交互式逻辑演变图谱](https://mojojolite-sketch.github.io/%E5%AE%8F%E8%A7%82%E4%B8%8E%E9%87%91%E8%9E%8D/index.html)

| 主体分类 | 主体数量 | 覆盖一手材料数 | 关联文章数 | 说明 |
| --- | --- | --- | --- | --- |
| [👤 个人与学者 (People)](#people) | 0 | 0 | 0 | 学者、创始人、工程师与独立研究者档案；同名 arXiv 作者索引仅作论文署名聚合，不自动合并社交账号身份。 |
| [🏢 公司与产业主体 (Companies)](#companies) | 15 | 14 | 12 | 机器人本体、模型算法、传感器、自动化与算力基础设施公司档案。 |
| [💰 基金与投资机构 (Funds)](#funds) | 4 | 4 | 4 | 风险投资机构、产业基金与二级市场投资载体档案。 |
| [🏛️ 实验室、高校与机构平台 (Labs & Institutions)](#labs) | 1 | 1 | 1 | 高校实验室、企业研究院、开源合作组织、政府与行业研究机构档案。 |

## ⚠️ 未分组待审（Unassigned Audit Bucket）

新入口先显式挂起，必须先核实母体/平台关系并写入 `state/publisher_groups.json` 后移入正式组，不得凭名称猜测合并。

| 主体名称 | 平台与入口 | 档案入口 |
| --- | --- | --- |
| HSBC | [Official Site](https://www.hsbc.com/) | [查看档案](companies/HSBC.md) |
| iConnections | [website](https://www.iconnections.io/) | [查看档案](companies/iConnections.md) |
| iConnections | [youtube](https://www.youtube.com/@iconnections) | [查看档案](companies/iConnections.md) |
| Tokyo Shoko Research | [Official Site](https://www.tsr-net.co.jp/) | [查看档案](companies/Tokyo%20Shoko%20Research.md) |
| 全国保証株式会社 | [Company Official Site](https://www.zenkoku.co.jp/) | [查看档案](companies/%E5%85%A8%E5%9B%BD%E4%BF%9D%E8%A8%BC%E6%A0%AA%E5%BC%8F%E4%BC%9A%E7%A4%BE.md) |
| 厚生労働省 (MHLW) | [Official Site](https://www.mhlw.go.jp/) | [查看档案](companies/%E5%8E%9A%E7%94%9F%E5%8A%B4%E5%83%8D%E7%9C%81%20%28MHLW%29.md) |
| 日本銀行 (Bank of Japan) | [Central Bank Official Site](https://www.boj.or.jp/) | [查看档案](companies/%E6%97%A5%E6%9C%AC%E9%8A%80%E8%A1%8C%20%28Bank%20of%20Japan%29.md) |
| 株式会社高知銀行 (8416.T) | [Company IR Website](https://www.kochi-bank.co.jp/) | [查看档案](companies/%E6%A0%AA%E5%BC%8F%E4%BC%9A%E7%A4%BE%E9%AB%98%E7%9F%A5%E9%8A%80%E8%A1%8C%20%288416.T%29.md) |
| 近畿産業信用組合 | [official\_site](https://www.kinsan.co.jp/) | [查看档案](companies/%E8%BF%91%E7%95%BF%E7%94%A3%E6%A5%AD%E4%BF%A1%E7%94%A8%E7%B5%84%E5%90%88.md) |

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
| Caterpillar | [机构官网](https://www.caterpillar.com/) | [Caterpillar Financial Services Corporation Fo…](https://www.sec.gov/Archives/edgar/data/764764/000110465926126947/tm2629723d1_8k.htm) +1 | 1 | 2 | 1 | • 全球工程机械与数据中心表后供电燃机/内燃机核心制造商（NYSE: CAT）。 | [查看档案](companies/Caterpillar.md) |
| CyrusOne | [Official Site](https://www.cyrusone.com/) | [\$500M Data Center Debt Auction Fizzles, Leavi…](https://www.bisnow.com/news/national/data-center/-500m-data-center-debt-auction-fizzles-leaving-dutch-bank-to-shop-for-buyers) | 1 | 1 | 2 | CyrusOne | [查看档案](companies/CyrusOne.md) |
| HSBC | [Official Site](https://www.hsbc.com/) | [\$500M Data Center Debt Auction Fizzles, Leavi…](https://www.bisnow.com/news/national/data-center/-500m-data-center-debt-auction-fizzles-leaving-dutch-bank-to-shop-for-buyers) | 1 | 1 | 2 | HSBC Holdings plc | [查看档案](companies/HSBC.md) |
| Hyperliquid | [Official Site](https://hyperliquid.xyz/) | [Stanley Druckenmiller (@standuquesne) & ICE S…](https://hyperliquid.xyz/) | 1 | 1 | 2 | Hyperliquid Layer-1 protocol official site | [查看档案](companies/Hyperliquid.md) |
| iConnections | [youtube](https://www.youtube.com/@iconnections)、[website](https://www.iconnections.io/) | [Stan Druckenmiller: Why He's "Not Playing" Ri…](https://www.youtube.com/watch?v=6r3D-CMJkuI) | 1 | 1 | 3 | TomorrowX Summit 主办平台与官方视频频道 LP-GP 资本对接平台与 TomorrowX Summit 主办方 | [查看档案](companies/iConnections.md) |
| Intercontinental Exchange (ICE) | [Official Site](https://www.ice.com/) | [Stanley Druckenmiller (@standuquesne) & ICE S…](https://hyperliquid.xyz/) | 1 | 1 | 2 | Intercontinental Exchange official site | [查看档案](companies/Intercontinental%20Exchange%20%28ICE%29.md) |
| Solaris Energy Infrastructure | [机构官网](https://www.solaris-energy.com/) | [Solaris Energy Infrastructure, Inc. Form 10-Q…](https://www.sec.gov/Archives/edgar/data/1697500/000162828026071604/sei-20260930.htm) | 1 | 1 | 1 | — | [查看档案](companies/Solaris%20Energy%20Infrastructure.md) |
| Tokyo Shoko Research | [Official Site](https://www.tsr-net.co.jp/) | [年度上半期の「人手不足」倒産 過去最多の240件 深刻な“賃上げ疲れ”、『賃上げ倒産』が1…](https://www.tsr-net.co.jp/data/detail/1203295_1527.html) | 1 | 1 | 2 | 日本主要企业信用调查与倒产统计一手机构（TSR） | [查看档案](companies/Tokyo%20Shoko%20Research.md) |
| Trade\[XYZ\] | [Official Site](https://trade.xyz/) | [Stanley Druckenmiller (@standuquesne) & ICE S…](https://hyperliquid.xyz/) | 1 | 1 | 2 | Trade\[XYZ\] perpetuals platform | [查看档案](companies/Trade%5BXYZ%5D.md) |
| Xometry | [Official Website](https://www.xometry.com/)、[Company IR](https://investors.xometry.com/) | [Xometry, Inc. Form 10-Q for Q3 2026 (Period E…](https://www.sec.gov/Archives/edgar/data/1657573/000119312526445554/xmtr-20260930.htm) +1 | 2 | 2 | 4 | Xometry 官网主体入口 Xometry 官方 IR 门户（SEC EDGAR 仅作采集管道不单独建实体） | [查看档案](companies/Xometry.md) |
| 全国保証株式会社 | [Company Official Site](https://www.zenkoku.co.jp/) | [全国保証株式会社 2027年3月期 第2四半期（中間期）決算短信〔日本基準〕（連結）](https://www.zenkoku.co.jp/ir/library/tanshin.html) | 1 | 1 | 2 | 日本独立系住房贷款信用担保龙头，截至 2026-09 担保债务余额约 21.5 万亿–21.6 万亿日元 | [查看档案](companies/%E5%85%A8%E5%9B%BD%E4%BF%9D%E8%A8%BC%E6%A0%AA%E5%BC%8F%E4%BC%9A%E7%A4%BE.md) |
| 厚生労働省 (MHLW) | [Official Site](https://www.mhlw.go.jp/) | [全ての都道府県で地域別最低賃金の改定額が答申されました（令和8年度地域別最低賃金）](https://www.mhlw.go.jp/stf/newpage_75950.html) | 1 | 1 | 2 | 日本厚生劳动省官方发布主站 | [查看档案](companies/%E5%8E%9A%E7%94%9F%E5%8A%B4%E5%83%8D%E7%9C%81%20%28MHLW%29.md) |
| 日本銀行 (Bank of Japan) | [Central Bank Official Site](https://www.boj.or.jp/) | [Financial System Report (October 2026) — Full…](https://www.boj.or.jp/en/research/brp/fsr/data/fsr261023a.pdf) | 1 | 1 | 2 | — | [查看档案](companies/%E6%97%A5%E6%9C%AC%E9%8A%80%E8%A1%8C%20%28Bank%20of%20Japan%29.md) |
| 株式会社高知銀行 (8416.T) | [Company IR Website](https://www.kochi-bank.co.jp/) | [高知銀行 2027年3月期 第2四半期（中間期）決算短信〔日本基準〕（連結）及決算概要（I…](https://www.kochi-bank.co.jp/ir/kessan.html) | 1 | 1 | 2 | 日本高知县地方银行（第二地方银行协会成员），证券代码 8416。 | [查看档案](companies/%E6%A0%AA%E5%BC%8F%E4%BC%9A%E7%A4%BE%E9%AB%98%E7%9F%A5%E9%8A%80%E8%A1%8C%20%288416.T%29.md) |
| 近畿産業信用組合 | [official\_site](https://www.kinsan.co.jp/) | [近畿産業信用組合 2026年9月期（令和8年度中間期）仮決算速報・《きんさん新聞》第418…](https://www.kinsan.co.jp/) | 1 | 1 | 2 | 总部位于大阪市的日本大型地域信用组合（理事长：大本崇博），2026年9月末预贷和首次突破 3 兆日元。 | [查看档案](companies/%E8%BF%91%E7%95%BF%E7%94%A3%E6%A5%AD%E4%BF%A1%E7%94%A8%E7%B5%84%E5%90%88.md) |

<a id="funds"></a>
## 💰 基金与投资机构 (Funds)

风险投资机构、产业基金与二级市场投资载体档案。

| 主体名称 | 平台与入口 | 关注来源 | 收录文章 | 一手材料 | 问题/缺口 | 核心定位与说明 | 档案入口 |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Blue Owl Capital | [Official Site](https://www.blueowl.com/) | [\$500M Data Center Debt Auction Fizzles, Leavi…](https://www.bisnow.com/news/national/data-center/-500m-data-center-debt-auction-fizzles-leaving-dutch-bank-to-shop-for-buyers) | 1 | 1 | 2 | Blue Owl Capital (NYSE: OWL) | [查看档案](funds/Blue%20Owl%20Capital.md) |
| Duquesne Family Office | [x](https://x.com/standuquesne) | [Duquesne Family Office LLC — SEC Form 13F-HR …](https://www.sec.gov/edgar/browse/?CIK=0001536411) +1 | 2 | 2 | 5 | Stanley Druckenmiller 与 Duquesne 官方发声入口 | [查看档案](funds/Duquesne%20Family%20Office.md) |
| ING Groep N.V. | [Official Site](https://www.ing.com/) | [\$500M Data Center Debt Auction Fizzles, Leavi…](https://www.bisnow.com/news/national/data-center/-500m-data-center-debt-auction-fizzles-leaving-dutch-bank-to-shop-for-buyers) | 1 | 1 | 2 | ING Groep N.V. (NYSE: ING) | [查看档案](funds/ING%20Groep%20N.V..md) |
| Situational Awareness LP | [机构官网](https://situational-awareness.ai/) | [Situational Awareness LP — SEC Form 13F-HR & …](https://www.sec.gov/edgar/browse/?CIK=0002045724) | 1 | 1 | 1 | Letter 5 Q3 2026 原信发布主体 | [查看档案](funds/Situational%20Awareness%20LP.md) |

<a id="labs"></a>
## 🏛️ 实验室、高校与机构平台 (Labs & Institutions)

高校实验室、企业研究院、开源合作组织、政府与行业研究机构档案。

| 主体名称 | 平台与入口 | 关注来源 | 收录文章 | 一手材料 | 问题/缺口 | 核心定位与说明 | 档案入口 |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Bisnow | [Official Site](https://www.bisnow.com/) | [\$500M Data Center Debt Auction Fizzles, Leavi…](https://www.bisnow.com/news/national/data-center/-500m-data-center-debt-auction-fizzles-leaving-dutch-bank-to-shop-for-buyers) | 1 | 1 | 2 | Bisnow National Data Center Capital Markets | [查看档案](labs/Bisnow.md) |


待补账号入口：Bisnow (Dan Rabb)、Bisnow (Jon Banister)、Duquesne Family Office、SEC EDGAR (Duquesne Family Office LLC)、Xometry, Inc.、全国保証株式会社 (7164.T)、日本銀行 (Bank of Japan)。
