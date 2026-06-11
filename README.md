# 今日经济训练

一个每日 30 分钟的经济新闻学习网站原型。页面结构固定，内容每天更新，目标是在阅读财经新闻的同时理解背后的经济学原理。

## 当前包含

- 固定 30 分钟学习流程
- 今日主线、关键词、笔记区
- 真实最新财经新闻 hook
- 中英双语财经要闻、大事解析、原理拆解、概念地图、每日反思
- 每条新闻包含来源、发布时间和原文链接
- 本地注册 / 登录
- 按用户保存今日完成进度和笔记
- 完整 12 周课程内容
- 每个新用户从注册当天的第 1 周第 1 天开始计算学习进度
- 查看已经解锁的往期课程内容
- `latest-news.js` 作为新闻数据文件，页面会自动读取
- `news-sources.json` 配置 RSS/官方数据源
- `Update-LatestNews.ps1` 可从数据源生成新的 `latest-news.js`
- `scripts/update-latest-news.mjs` 可作为英文 RSS 抓取实验脚本
- `.github/workflows/update-news.yml` 部署当前已整理好的静态网站到 GitHub Pages
- 12 周课程地图
- 无需安装依赖，直接打开 `index.html` 即可使用

## 内容填充逻辑

每天内容可以按这个顺序生成：

1. 先确定当前周的课程主题
2. 从当天或近期真实财经新闻中挑选与主题最相关的一条作为深读新闻
3. 给这条新闻绑定一个核心概念、一个辅助概念和一个指标
4. 生成一个简短思考题和三句话复盘

当前版本使用的是 2026-06-10 至 2026-06-11 核验过的新闻与官方数据快照，并已经拆分到 `latest-news.js`。

## 更新 latest news

在允许访问外网的 PowerShell 环境中运行：

```powershell
powershell -ExecutionPolicy Bypass -File .\Update-LatestNews.ps1
```

脚本会读取 `news-sources.json` 中的 RSS/官方源，生成新的 `latest-news.js`。自动抓取只能保证标题、来源、时间和原文摘要是真实来源；高质量中英双语解释仍建议做一层人工或 AI 校订，避免把机器翻译当成最终知识卡。

## 部署到 GitHub Pages

1. 在 GitHub 新建一个仓库，例如 `daily-economics-learning`。
2. 把本文件夹里的全部文件上传到仓库。
3. 进入仓库的 `Settings` -> `Pages`。
4. 在 `Build and deployment` 中选择 `GitHub Actions`。
5. 进入 `Actions` 页面，手动运行 `Deploy economics learning site`。
6. 等工作流完成后，GitHub Pages 会给出网站地址。

工作流会部署仓库中现有的静态文件。当前正式页面使用人工整理过的 `latest-news.js`，避免自动 RSS 抓取把英文新闻写成 `Chinese translation pending`。

注意：若要每天自动生成高质量中英双语财经新闻，需要后续接入翻译 API、新闻 API 或人工/AI 校订流程；否则自动抓取只能保证英文来源真实，不能保证中文解释质量。

## 账户与学习记录

当前版本是 GitHub Pages 静态网站，因此账户使用浏览器本地存储：

- 同一台设备、同一个浏览器可以保留用户进度和笔记
- 不同设备之间不会自动同步
- 清除浏览器数据会清除本地账户记录
- 新用户注册当天即为第 1 周第 1 天
- 之后课程会按注册后的实际天数逐日解锁
- 未来课程会保持锁定，随着日期推进自动解锁

如果要做真正的云端注册登录和跨设备同步，下一步可以接入 Supabase、Firebase 或自建后端数据库。

## 后续可扩展

- 接入新闻来源和经济数据来源
- 保存每日笔记和完成进度
- 增加月度复盘页面
- 增加课程后台，用来编辑 12 周主题和每日内容
