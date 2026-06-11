const steps = [
  {
    title: "晨读简报 / Morning Brief",
    subtitle: "真实新闻双语速读",
    minutes: 5,
    content: "overview",
  },
  {
    title: "观点拆解 / Perspective Analysis",
    subtitle: "美国CPI与市场反应",
    minutes: 10,
    content: "deepRead",
  },
  {
    title: "原理释义 / Principles",
    subtitle: "供给冲击与实际利率",
    minutes: 8,
    content: "concept",
  },
  {
    title: "概念图谱 / Concept Map",
    subtitle: "CPI、能源与核心通胀",
    minutes: 5,
    content: "metric",
  },
  {
    title: "思辨札记 / Reflection Notes",
    subtitle: "三句话沉淀",
    minutes: 2,
    content: "reflection",
  },
];

const curriculum = [
  {
    title: "经济运行的基本框架",
    desc: "GDP、消费、投资、出口、经济周期。",
    days: [
      ["经济运行地图", "宏观经济四部门", "建立新闻阅读的基本地图：居民、企业、政府和海外部门如何通过收入、支出、税收、贸易和金融市场相互连接。", "一条经济新闻通常影响哪几个部门？"],
      ["GDP与增长", "消费、投资、政府支出、净出口", "学习GDP的支出法结构，理解消费放缓、投资收缩或出口变化为什么会改变市场对经济周期的判断。", "GDP增长高，是否一定代表居民体感更好？"],
      ["CPI、PPI与物价", "居民价格与生产者价格", "比较CPI和PPI：一个接近居民生活成本，一个接近企业生产成本。两者之间的传导决定通胀压力是否扩散。", "PPI上涨一定会传导到CPI吗？"],
      ["能源冲击与通胀", "供给冲击、核心通胀、实际利率", "用最新CPI和能源价格新闻，理解短期价格冲击如何进入通胀预期、央行政策和资产定价。", "为什么能源价格上涨会影响股票和债券？"],
      ["利率预期", "名义利率、实际利率、政策路径", "阅读央行相关新闻，学习市场如何从通胀数据推断未来降息或加息路径。", "为什么市场会在央行行动之前先波动？"],
      ["市场反应", "贴现率、风险偏好、资产价格", "观察股市、债市、汇率和商品如何同时吸收同一条宏观新闻。", "同一条新闻为什么可能利好债券却利空股票？"],
      ["一周复盘", "从新闻到经济解释", "回顾本周所有概念，形成一张从经济数据到政策预期再到市场价格的解释图。", "本周哪个概念最能解释你看到的财经新闻？"],
    ],
  },
  {
    title: "通胀与物价",
    desc: "CPI、PPI、核心通胀、通胀预期。",
    days: [
      ["通胀的定义", "价格水平、购买力", "用当日物价新闻理解通胀不是单个商品涨价，而是整体价格水平持续上升。", "为什么通胀会降低货币购买力？"],
      ["核心通胀", "食品能源、黏性价格", "区分总体通胀和核心通胀，判断央行更关注哪一种价格压力。", "为什么核心通胀更能反映中期趋势？"],
      ["需求拉动通胀", "总需求、产出缺口", "用消费和就业新闻理解需求过强如何推高价格。", "需求旺盛为什么会让企业更容易涨价？"],
      ["成本推动通胀", "原材料、工资、运输成本", "用油价、工资和供应链新闻解释成本如何传导到终端价格。", "企业成本上涨一定会转嫁给消费者吗？"],
      ["通胀预期", "工资谈判、企业定价", "学习预期如何自我实现：如果大家相信物价会涨，行为本身可能推高价格。", "央行为什么害怕通胀预期失控？"],
      ["通胀与生活", "实际收入、储蓄、债务", "把通胀新闻连接到个人预算、工资、存款和负债。", "谁会从高通胀中受损，谁可能受益？"],
      ["通胀周复盘", "来源、扩散、持续性", "用三问总结通胀新闻：来自哪里，是否扩散，能持续多久。", "判断一条通胀新闻时最重要的指标是什么？"],
    ],
  },
  {
    title: "利率与货币政策",
    desc: "加息、降息、流动性、政策传导。",
    days: [
      ["央行做什么", "价格稳定、充分就业", "理解央行如何通过利率和流动性影响经济活动。", "央行为什么不能同时追求所有目标？"],
      ["政策利率", "基准利率、短端利率", "用议息会议新闻学习政策利率如何成为市场定价锚。", "政策利率变动如何传导到贷款利率？"],
      ["货币政策传导", "银行信贷、资产价格、预期", "拆解利率从央行声明传到企业融资和居民消费的路径。", "为什么货币政策有时滞？"],
      ["降息逻辑", "刺激需求、降低融资成本", "观察市场如何判断降息是否临近，以及降息为何不一定立刻刺激经济。", "降息为什么可能对汇率有压力？"],
      ["加息逻辑", "抑制需求、压低通胀", "学习加息如何冷却需求、压缩估值并影响就业。", "加息为什么会提高债务压力？"],
      ["央行沟通", "前瞻指引、点阵图、声明措辞", "用央行声明学习市场为什么逐字分析政策语言。", "为什么“不变”也可能是强烈信号？"],
      ["政策周复盘", "数据依赖、政策路径", "把通胀、就业、增长数据放到央行反应函数里复盘。", "本周数据会让政策更偏紧还是偏松？"],
    ],
  },
  {
    title: "金融市场与资产价格",
    desc: "股票、债券、汇率、黄金与风险偏好。",
    days: [
      ["资产价格是什么", "未来现金流、折现率", "建立股票、债券和商品的共同定价语言。", "为什么预期变化会立刻影响价格？"],
      ["股票估值", "盈利、PE、成长股", "用公司和指数新闻理解盈利预期与估值倍数。", "成长股为什么更怕利率上升？"],
      ["债券价格", "收益率、久期、信用利差", "学习债券价格和收益率反向变化的机制。", "为什么收益率上升会让旧债价格下跌？"],
      ["风险偏好", "避险、风险资产", "观察市场在好消息和坏消息之间如何切换解释框架。", "为什么坏数据有时会利好股市？"],
      ["黄金与美元", "避险资产、实际利率", "用黄金和美元新闻理解避险需求与实际利率的拉扯。", "黄金为什么常和实际利率反向变动？"],
      ["市场联动", "股债汇商品", "追踪同一条宏观新闻如何同时影响多个市场。", "为什么跨市场反应能帮助验证判断？"],
      ["市场周复盘", "定价与预期", "复盘本周资产价格变化背后的共同变量。", "本周市场交易的核心叙事是什么？"],
    ],
  },
  {
    title: "就业、工资与居民收入",
    desc: "失业率、工资、消费能力、结构性失业。",
    days: [
      ["就业数据入门", "失业率、就业人数", "读懂就业报告中的核心数字，区分新增就业和失业率。", "失业率下降一定是好事吗？"],
      ["劳动力参与率", "退出劳动力市场、人口结构", "理解为什么失业率可能低估真实劳动力压力。", "为什么有人不找工作就不算失业？"],
      ["工资增长", "名义工资、实际工资", "用工资新闻判断居民购买力和服务通胀压力。", "工资上涨为什么可能推高服务通胀？"],
      ["就业与消费", "收入预期、边际消费倾向", "连接就业稳定性和居民消费意愿。", "为什么就业预期会影响大额消费？"],
      ["结构性失业", "技能错配、产业转型", "用裁员和招聘新闻理解岗位消失与岗位空缺并存。", "为什么有职位空缺仍会有人失业？"],
      ["菲利普斯曲线", "失业与通胀", "学习就业紧张和通胀之间的传统关系及其局限。", "低失业率一定会带来高通胀吗？"],
      ["就业周复盘", "收入、消费、政策", "把就业数据放入消费和央行政策框架里复盘。", "本周就业新闻对利率预期有什么影响？"],
    ],
  },
  {
    title: "财政政策与政府债务",
    desc: "赤字、国债、税收、财政乘数。",
    days: [
      ["财政政策入门", "支出、税收、赤字", "理解政府如何通过预算影响总需求和收入分配。", "财政政策和货币政策有什么不同？"],
      ["政府支出", "基建、转移支付、公共服务", "用预算新闻区分投资型支出和救助型支出。", "哪类支出更容易形成长期产出？"],
      ["税收政策", "减税、税负、激励", "学习税收变化如何影响企业投资和居民消费。", "减税为什么不一定带来同等消费增长？"],
      ["财政乘数", "边际消费倾向、闲置资源", "判断财政刺激在什么环境下更有效。", "为什么衰退期财政乘数可能更大？"],
      ["政府债务", "国债、利息支出、可持续性", "理解债务不是单看规模，还要看利率、增长率和偿债能力。", "债务/GDP上升一定危险吗？"],
      ["地方财政", "土地财政、地方债", "用地方债和基建新闻理解地方政府约束。", "地方财政压力如何影响投资和公共服务？"],
      ["财政周复盘", "刺激与约束", "总结本周财政新闻中的短期托底与长期风险。", "财政政策更像油门还是安全垫？"],
    ],
  },
  {
    title: "汇率与国际收支",
    desc: "利差、资本流动、美元周期、贸易差额。",
    days: [
      ["汇率是什么", "名义汇率、实际汇率", "建立汇率阅读框架：一国货币相对另一国货币的价格。", "汇率升值对进口和出口分别意味着什么？"],
      ["利差与汇率", "套息交易、资本流动", "用美债收益率和汇率新闻理解利差如何吸引资金。", "高利率货币为什么可能升值？"],
      ["贸易收支", "顺差、逆差、出口竞争力", "理解贸易数据如何影响外汇供需。", "贸易顺差一定会让本币升值吗？"],
      ["美元周期", "全球融资、避险需求", "观察美元强弱如何影响新兴市场和大宗商品。", "为什么全球风险上升时美元常走强？"],
      ["外汇储备", "干预、缓冲垫", "学习外汇储备在稳定汇率和应对外部冲击中的作用。", "外储越多是否一定越好？"],
      ["人民币汇率", "中间价、CFETS、预期管理", "用人民币新闻理解一篮子汇率和市场预期。", "为什么人民币不只看美元汇率？"],
      ["汇率周复盘", "利差、贸易、预期", "用三因素框架复盘本周主要汇率变化。", "本周汇率变化主要由哪个因素驱动？"],
    ],
  },
  {
    title: "国际贸易与全球化",
    desc: "比较优势、关税、供应链和产业转移。",
    days: [
      ["贸易为什么发生", "比较优势、机会成本", "用进出口新闻理解国家为何专注相对擅长的生产。", "比较优势和绝对优势有什么不同？"],
      ["关税与壁垒", "保护主义、消费者成本", "学习关税如何改变价格、企业利润和消费者福利。", "关税保护了谁，又让谁付出成本？"],
      ["出口管制", "技术限制、国家安全", "用半导体和高科技新闻理解贸易与安全政策交织。", "出口管制为什么会改变产业链布局？"],
      ["供应链", "韧性、效率、库存", "观察企业如何在低成本和稳定供应之间取舍。", "为什么企业不总是选择最低成本供应商？"],
      ["产业转移", "劳动力成本、市场接近度", "理解企业迁厂背后的工资、关税和市场因素。", "产业转移一定意味着原产地衰退吗？"],
      ["全球化收益与分配", "消费者福利、就业冲击", "讨论贸易带来的整体收益和局部损失。", "为什么贸易总收益为正仍会引发政治反弹？"],
      ["贸易周复盘", "效率、韧性、规则", "复盘本周贸易新闻如何改变产业和价格。", "本周哪条新闻最能体现全球化的取舍？"],
    ],
  },
  {
    title: "产业经济与企业行为",
    desc: "供需、价格战、规模经济和竞争格局。",
    days: [
      ["供给与需求", "价格、数量、均衡", "用行业新闻理解价格如何协调供需。", "价格上涨一定意味着需求更强吗？"],
      ["竞争与垄断", "市场势力、进入壁垒", "观察企业如何通过规模、品牌或网络效应建立优势。", "垄断为什么可能提高价格却降低创新？"],
      ["规模经济", "固定成本、边际成本", "用制造业和互联网新闻理解规模越大成本越低的行业。", "哪些行业最容易形成规模经济？"],
      ["价格战", "利润率、市场份额", "分析价格战何时是消费者福利，何时是行业风险。", "价格战为什么可能让强者更强？"],
      ["商业周期", "库存、订单、资本开支", "读懂行业周期新闻中的补库存与去库存。", "库存变化为什么会放大周期？"],
      ["监管与平台", "反垄断、数据、外部性", "用平台经济新闻理解监管如何约束企业行为。", "监管改变的是价格、竞争还是创新？"],
      ["产业周复盘", "行业结构、企业策略", "总结本周企业新闻背后的经济学机制。", "这周哪家公司新闻最能体现产业逻辑？"],
    ],
  },
  {
    title: "房地产与信贷周期",
    desc: "杠杆、房价预期、土地财政和资产负债表。",
    days: [
      ["房地产的宏观地位", "投资、消费、抵押品", "理解房地产为什么连接居民财富、银行信贷和地方财政。", "房价变化为什么会影响消费？"],
      ["信贷扩张", "按揭、开发贷、杠杆", "学习信贷如何放大购房需求和开发投资。", "为什么信贷宽松会推高资产价格？"],
      ["房价预期", "买涨不买跌、财富效应", "观察预期如何影响成交量和价格。", "为什么预期比当期收入更能影响购房？"],
      ["开发商债务", "现金流、预售、违约", "用企业债新闻理解房地产金融链条。", "预售制度为什么会放大流动性风险？"],
      ["土地财政", "土地出让、地方收入", "连接房地产市场和地方政府预算。", "土地收入下降如何影响基建和财政？"],
      ["居民资产负债表", "房贷、提前还贷、风险偏好", "分析居民债务负担如何影响消费和储蓄。", "提前还贷潮说明了什么？"],
      ["地产周复盘", "信贷、预期、财政", "复盘本周房地产新闻对宏观经济的影响。", "房地产调整主要通过哪条渠道影响经济？"],
    ],
  },
  {
    title: "危机、泡沫与金融风险",
    desc: "流动性危机、信用风险、系统性风险。",
    days: [
      ["泡沫如何形成", "叙事、杠杆、追涨", "学习资产价格如何偏离基本面。", "泡沫和合理上涨怎么区分？"],
      ["杠杆风险", "借钱投资、保证金、连锁平仓", "理解杠杆如何放大收益和亏损。", "为什么小跌幅也能引发大风险？"],
      ["流动性危机", "卖不出去、现金为王", "用市场压力新闻理解流动性突然消失的危险。", "有资产为什么还会缺现金？"],
      ["信用风险", "违约、利差、评级", "学习债务违约如何影响融资成本。", "信用利差扩大说明了什么？"],
      ["银行风险", "期限错配、挤兑", "理解银行为何天然依赖信心。", "为什么银行挤兑可以自我实现？"],
      ["系统性风险", "关联、传染、救助", "观察局部风险如何传到整个金融体系。", "什么时候政府会选择救助？"],
      ["风险周复盘", "杠杆、流动性、信心", "复盘本周风险新闻中的传导链条。", "本周最大风险来自价格、信用还是流动性？"],
    ],
  },
  {
    title: "经济判断与个人决策",
    desc: "读数据、看政策、识别短期波动和长期趋势。",
    days: [
      ["如何读经济数据", "同比、环比、预期差", "建立读数据的三步法：看水平、看变化、看预期差。", "为什么市场更在意预期差？"],
      ["如何读政策", "目标、工具、约束", "用政策新闻判断政府真正想解决的问题。", "一项政策的约束条件是什么？"],
      ["如何读市场", "价格、叙事、仓位", "理解市场价格不等于事实，而是事实与预期的合成。", "为什么市场可能过度反应？"],
      ["短期与长期", "周期、趋势、结构变化", "区分短期扰动和长期结构性改变。", "一条新闻是噪音还是趋势信号？"],
      ["个人财务视角", "收入、储蓄、风险承受", "把宏观新闻连接到个人预算、职业和资产配置。", "宏观判断如何影响个人决策？"],
      ["形成观点", "证据、反证、概率", "练习用概率而不是确定性表达经济判断。", "什么证据会推翻你的判断？"],
      ["12周总复盘", "个人经济学框架", "把12周概念整理成自己的新闻阅读框架。", "你现在会如何解释一条新的财经新闻？"],
    ],
  },
];

let program = {
  week: 1,
  day: 4,
  theme: curriculum[0].title,
  todayTitle: curriculum[0].days[3][0],
};

const courses = curriculum.map((week) => [week.title, week.desc]);

const latestNews =
  window.latestNewsData?.items?.length > 0
    ? window.latestNewsData.items
    : [
        {
          cnTitle: "暂未加载到最新财经新闻",
          enTitle: "Latest financial news has not loaded yet",
          source: "Local fallback",
          time: "N/A",
          url: "#",
          cnSummary: "请运行更新脚本生成 latest-news.js，或检查数据源连接。",
          enSummary: "Run the update script to generate latest-news.js, or check the source connection.",
          concepts: ["数据源", "更新状态"],
          impact: "页面会继续显示结构，但不会把旧新闻伪装成最新新闻。",
        },
      ];

const appState = {
  activeArchiveDay: null,
  currentUser: localStorage.getItem("eco.currentUser") || "",
  selectedLibraryWeek: 1,
};

const contentTemplates = {
  overview: `
    <div class="summary-grid">
      <article class="news-card editorial-note">
        <strong>新闻来源 / Sources</strong>
        <p>${[...new Set(latestNews.map((item) => item.source))].join(" · ")}</p>
        <p>今日简报从近期财经报道与官方数据中选取几条可互相参照的新闻。阅读时先看事实，再看变量如何变化，最后看它如何影响政策、市场与日常生活。</p>
        <p class="english">Today's brief begins with recent financial reporting and official data. Read it as a news lead: what happened, which variables moved, and why the change matters for policy, markets and everyday decisions.</p>
      </article>
      ${latestNews
        .map(
          (item) => `
            <article class="news-card bilingual-card">
              <div class="source-line">
                <span>${item.source}</span>
                <time>${item.time}</time>
              </div>
              <strong>${item.cnTitle}</strong>
              <em>${item.enTitle}</em>
              <p>${item.cnSummary}</p>
              <p class="english">${item.enSummary}</p>
              <div class="impact-row">
                ${item.concepts.map((concept) => `<span class="pill green">${concept}</span>`).join("")}
              </div>
              <a class="source-link" href="${item.url}" target="_blank" rel="noreferrer">查看来源 / Open source</a>
            </article>
          `,
        )
        .join("")}
    </div>
  `,
  deepRead: `
    <div class="deep-read">
      <div class="long-read-meta">
        <span>Long read / 深度说明</span>
        <span>约 1200 字中文说明</span>
      </div>
      <div class="article-block">
        <h3>新闻说明：能源冲击、通胀反弹与市场重新定价</h3>
        <p>这条新闻的核心并不只是“美国通胀又上升了”这么简单。根据美国劳工统计局公布的5月消费者价格指数，CPI同比升至4.2%，环比上涨0.5%；其中能源价格环比上涨3.9%，同比涨幅达到23.5%，核心CPI同比为2.9%。从经济学角度看，这组数字同时包含三层信息：第一，居民面对的总体物价压力重新变强；第二，推动本轮上涨的主要力量来自能源，而不是所有商品和服务同步全面涨价；第三，核心通胀仍然是判断通胀是否“黏住”的关键，因为它剔除了食品和能源这类短期波动较大的项目。</p>
        <p>为什么市场会对这样的数据高度敏感？原因在于金融市场交易的不是单个数字，而是数字背后的政策路径。当CPI高于市场原先预期，投资者会立刻重新思考央行是否还能按原计划降息。如果通胀压力主要来自能源，央行的处境会更复杂。加息无法直接生产更多石油，也无法立刻解决地缘冲突、航运受阻或供应链扰动；但是，如果能源价格上涨持续时间足够长，它会进入运输成本、制造成本、居民水电燃气账单，随后影响企业定价和工资谈判。到这个阶段，原本短期的供给冲击就可能变成更持久的通胀预期问题。</p>
        <p>这也是为什么要区分“总体CPI”和“核心CPI”。总体CPI更接近普通人的生活感受，因为汽油、电费、食品价格都是真实开支；核心CPI则更接近央行想观察的中期通胀趋势。如果总体CPI因为油价短期上涨而跳升，但核心CPI仍然温和，央行可能会选择观察；如果核心CPI也开始上升，说明价格压力已经扩散到住房、服务、医疗、教育、保险等更难快速回落的领域，政策就更难转向宽松。</p>
        <p>这条新闻还会通过“实际利率”影响资产价格。实际利率可以粗略理解为名义利率减去预期通胀率。假设名义利率暂时不变，而市场认为未来通胀会更高，那么实际利率可能下降；但如果央行为了压住通胀预期而维持更高利率，未来现金流的贴现率就会上升，股票尤其是成长股的估值会受到压力。债券市场的反应也很直接：如果投资者预期降息推迟，债券收益率可能上行，债券价格则承压。换句话说，一条CPI新闻会同时改变债市、股市、汇率和大宗商品的定价。</p>
        <p>美元和汇率也会受到影响。更高的美国通胀并不一定意味着美元走弱，因为市场还要判断美联储会如何回应。如果通胀上行使美联储保持更高利率，美国资产的利差优势可能增强，美元反而可能获得支撑；但如果市场认为通胀主要来自供给冲击，并担心增长受损，那么避险情绪、财政预期和实际购买力变化又会带来不同方向的力量。因此，汇率不是单纯由通胀一个变量决定，而是由通胀、利率、增长、风险偏好和资本流动共同决定。</p>
        <p>从学习角度看，今天最值得记住的是：财经新闻中的“通胀”不是一个孤立标签，而是一条传导链。能源价格上涨首先改变企业成本和居民账单；成本变化影响企业定价；价格变化影响居民和企业对未来通胀的预期；预期变化影响央行政策；政策预期再影响债券收益率、股票估值、汇率和商品价格。读懂这条链，你就不会只停留在“数据高了/低了”的表层，而能理解为什么同一条新闻会让不同市场同时波动。</p>
        <p>也要注意一个常见误区：通胀升高并不自动等于经济过热，也不自动等于央行一定会继续加息。关键要看通胀来源、持续性和扩散程度。如果是临时能源冲击，央行可能更关注它是否传导到核心通胀；如果是工资、服务价格、房租等项目同步走高，就说明经济中的价格惯性更强。政策判断往往发生在这些细节里，而不是标题数字里。</p>
        <p>因此，今天这条新闻适合作为“供给冲击如何进入宏观政策和金融市场”的案例。它连接了第二周的通胀主题，也提前接入第三周的利率与货币政策、第四周的资产价格，以及第七周的汇率与国际收支。你今天读完以后，可以尝试用一句话复述：能源价格上涨不只是让CPI变高，它真正重要的地方在于可能改变通胀预期，并迫使市场重新定价未来利率路径。</p>
        <p class="english">English abstract: the key issue is not only that U.S. inflation rose, but that the increase appears to be closely tied to energy prices. A temporary energy shock may not require the same policy response as broad-based core inflation, yet it can still matter if it changes inflation expectations. Markets therefore reprice bonds, equities, currencies and commodities through the expected path of central-bank policy and real interest rates.</p>
      </div>
      <div class="article-block">
        <h3>阅读提示</h3>
        <p>读这类新闻时，不要只问“CPI是多少”。更好的问题是：上涨来自哪里？是能源、食品，还是服务价格？它会不会影响核心通胀？市场是否因此改变降息预期？如果这四个问题能回答清楚，这条新闻背后的经济学逻辑基本就抓住了。</p>
        <p class="english">Reading guide: do not stop at the headline CPI number. Ask where the increase comes from, whether it spills into core inflation, and how it changes expectations for the central bank's next move.</p>
      </div>
      <div class="article-block">
        <h3>影响链条</h3>
        <p>能源价格上行 -> 总体CPI上升 -> 通胀预期可能抬头 -> 央行降息空间收窄 -> 债券收益率和股票贴现率重新定价 -> 汇率、大宗商品和风险资产同步波动。</p>
        <p class="english">Transmission chain: higher energy prices -> higher headline CPI -> possible rise in inflation expectations -> less room for rate cuts -> repricing of bond yields and equity discount rates -> movement in currencies, commodities and risk assets.</p>
      </div>
      <div class="data-row">
        <span class="pill green">核心概念：供给冲击</span>
        <span class="pill blue">相关指标：CPI / Core CPI</span>
        <span class="pill gold">延伸概念：实际利率</span>
      </div>
      <a class="source-link" href="https://www.bls.gov/news.release/cpi.nr0.htm" target="_blank" rel="noreferrer">数据来源：U.S. Bureau of Labor Statistics</a>
    </div>
  `,
  concept: `
    <div class="concept-layout">
      <section class="concept-box">
        <h3>供给冲击 / Supply Shock</h3>
        <p>供给冲击是生产成本或可用供给突然变化带来的价格压力。能源价格上涨就是典型例子，因为运输、制造和居民生活都会用到能源。</p>
        <p class="english">A supply shock is a sudden change in production costs or available supply. Energy price increases are a classic example because energy feeds into transport, manufacturing and household bills.</p>
        <ul>
          <li>短期会推高总体通胀。</li>
          <li>如果扩散到工资和服务价格，就会变成更持久的通胀。</li>
          <li>央行最关心的是它会不会改变通胀预期。</li>
        </ul>
      </section>
      <section class="concept-box">
        <h3>实际利率 / Real Interest Rate</h3>
        <p>实际利率大致可以理解为名义利率减去预期通胀率。它衡量扣除物价上涨后，借钱和存钱的真实成本。</p>
        <p class="english">The real interest rate is roughly the nominal interest rate minus expected inflation. It measures the true cost of borrowing and the true return on saving after inflation.</p>
        <ul>
          <li>通胀预期上升时，实际利率可能下降。</li>
          <li>央行维持高名义利率，是为了避免实际利率过低。</li>
          <li>资产价格会通过贴现率迅速反应。</li>
        </ul>
      </section>
    </div>
  `,
  metric: `
    <section class="metric-box">
      <h3>今日指标：美国CPI、能源CPI与核心CPI</h3>
      <p>今天重点比较三层价格：总体CPI看居民实际感受，能源CPI看冲击来源，核心CPI看通胀是否扩散到更持久的部分。</p>
      <p class="english">Today we compare three layers: headline CPI captures what households feel, energy CPI identifies the shock, and core CPI shows whether inflation is spreading into stickier categories.</p>
      <div class="metric-chart" aria-label="核心CPI示意图">
        <div class="bar" style="height: 50%" title="CPI month over month: 0.5%"></div>
        <div class="bar" style="height: 100%" title="CPI year over year: 4.2%"></div>
        <div class="bar" style="height: 39%" title="Energy month over month: 3.9%"></div>
        <div class="bar" style="height: 85%" title="Energy year over year: 23.5%"></div>
        <div class="bar" style="height: 20%" title="Core CPI month over month: 0.2%"></div>
        <div class="bar" style="height: 69%" title="Core CPI year over year: 2.9%"></div>
      </div>
      <ul>
        <li>总体CPI：5月环比 +0.5%，同比 +4.2%。</li>
        <li>能源：5月环比 +3.9%，同比 +23.5%。</li>
        <li>核心CPI：5月环比 +0.2%，同比 +2.9%。</li>
      </ul>
      <a class="source-link" href="https://www.bls.gov/news.release/cpi.nr0.htm" target="_blank" rel="noreferrer">查看官方数据 / Open official data</a>
    </section>
  `,
  reflection: `
    <section class="reflection-box">
      <h3>思辨札记</h3>
      <p>用三句话结束今天的训练。第一句写中文，第二句写英文，第三句写自己的判断。</p>
      <textarea placeholder="1. 中文总结：今天我理解了什么？&#10;2. English note: What is the key mechanism?&#10;3. 我的判断：这条新闻会如何影响利率、汇率或资产价格？"></textarea>
    </section>
  `,
};

function getCurrentLesson() {
  const week = curriculum[program.week - 1];
  const day = week.days[program.day - 1];
  return {
    weekNumber: program.week,
    dayNumber: program.day,
    weekTitle: week.title,
    weekDesc: week.desc,
    title: day[0],
    concept: day[1],
    summary: day[2],
    question: day[3],
    newsLead: latestNews[0],
  };
}

function getStepSubtitle(step) {
  const lesson = getCurrentLesson();
  if (step.content === "overview") return "新闻来源与当日简报";
  if (step.content === "deepRead") return lesson.title;
  if (step.content === "concept") return lesson.concept;
  if (step.content === "metric") return `${lesson.weekTitle}的知识结构`;
  if (step.content === "reflection") return lesson.question;
  return step.subtitle;
}

function paragraphForLesson(lesson) {
  return `
    <p>今天的课程主题是<strong>“${lesson.title}”</strong>，属于第 ${lesson.weekNumber} 周“${lesson.weekTitle}”。这一课不是孤立知识点，而是把今日财经新闻放入经济学框架中理解。新闻提供现实入口，课程大纲提供解释结构；你今天要训练的是：看到一条新闻时，能判断它涉及哪些经济主体、哪些变量、哪些传导机制，以及它为什么会影响政策或市场。</p>
    <p>本课的核心概念是<strong>${lesson.concept}</strong>。${lesson.summary} 如果只读新闻标题，我们很容易停留在“涨了、跌了、超预期、不及预期”这些表层判断；但系统学习经济学要求进一步追问：这个变化影响谁？通过什么渠道影响？短期影响和长期影响是否不同？有没有反向反馈？这些问题会把新闻从信息流变成知识结构。</p>
    <p>以今天的新闻引子为例：<strong>${lesson.newsLead.cnTitle}</strong>。这条新闻之所以适合进入今天的学习，不只是因为它新，而是因为它能帮助我们观察现实经济中的变量如何联动。你可以先把新闻拆成三个层次：事实层，说明发生了什么；机制层，说明为什么会发生或为什么重要；判断层，说明它可能如何影响未来的数据、政策、企业行为或资产价格。</p>
    <p>在“${lesson.title}”这个主题下，最重要的是不要把新闻当成单点事件。一个数据发布、一项政策、一家公司财报或一次市场波动，通常都会沿着某条链条传导。比如从居民收入到消费，从企业成本到价格，从利率到投资，从汇率到出口，从风险偏好到股票估值。今天的阅读目标，就是把这条链条画出来。</p>
    <p>读完后，请回到这个复习问题：<strong>${lesson.question}</strong>。如果你能用自己的话回答，并且能举出今天新闻中的一个具体例子，就说明这节课不是被动浏览，而是真正进入了你的经济学知识库。</p>
  `;
}

contentTemplates.deepRead = () => {
  const lesson = getCurrentLesson();
  return `
    <div class="deep-read">
      <div class="long-read-meta">
        <span>Long read / 观点拆解</span>
        <span>W${lesson.weekNumber}D${lesson.dayNumber} · ${lesson.title}</span>
      </div>
      <div class="article-block">
        <h3>${lesson.title}：从新闻进入经济学问题</h3>
        ${paragraphForLesson(lesson)}
        <p class="english">English abstract: today's lesson begins with a current financial news lead, but the learning target is the course concept: ${lesson.concept}. The goal is to move from headline reading to mechanism-based economic reasoning.</p>
      </div>
      <div class="article-block">
        <h3>新闻引子 / News Lead</h3>
        <p><strong>${lesson.newsLead.cnTitle}</strong></p>
        <p>${lesson.newsLead.cnSummary}</p>
        <p class="english">${lesson.newsLead.enSummary}</p>
        <a class="source-link" href="${lesson.newsLead.url}" target="_blank" rel="noreferrer">查看来源 / Open source</a>
      </div>
    </div>
  `;
};

contentTemplates.concept = () => {
  const lesson = getCurrentLesson();
  return `
    <div class="concept-layout">
      <section class="concept-box">
        <h3>${lesson.concept}</h3>
        <p>${lesson.summary}</p>
        <ul>
          <li>定义：先说明这个概念衡量什么、解释什么，避免只记名词。</li>
          <li>机制：找出它如何影响居民、企业、政府、海外部门或金融市场。</li>
          <li>新闻应用：把它放回今天的新闻引子，判断变量之间的传导方向。</li>
        </ul>
      </section>
      <section class="concept-box">
        <h3>今日判断框架</h3>
        <p>围绕“${lesson.title}”，今天请用四个问题拆解新闻：</p>
        <ul>
          <li>事实是什么：新闻中的关键数据或政策是什么？</li>
          <li>主体是谁：谁受到影响，谁在做决策？</li>
          <li>机制是什么：影响通过价格、收入、利率、汇率、预期还是资产负债表传导？</li>
          <li>后果是什么：它会改变未来的消费、投资、政策或市场定价吗？</li>
        </ul>
      </section>
    </div>
  `;
};

contentTemplates.metric = () => {
  const lesson = getCurrentLesson();
  return `
    <section class="metric-box">
      <h3>概念图谱：${lesson.title}</h3>
      <p>今天的概念图谱把“${lesson.concept}”放在中心，并连接到真实新闻、经济主体、传导机制和可能结果。</p>
      <div class="concept-map" aria-label="课程概念图谱">
        <div><strong>新闻引子</strong><span>${lesson.newsLead.cnTitle}</span></div>
        <div><strong>核心概念</strong><span>${lesson.concept}</span></div>
        <div><strong>影响主体</strong><span>居民 / 企业 / 政府 / 市场</span></div>
        <div><strong>传导变量</strong><span>价格、收入、利率、汇率、预期</span></div>
        <div><strong>学习问题</strong><span>${lesson.question}</span></div>
      </div>
      <p class="english">Concept map: connect the news lead to the central concept, affected agents, transmission variables and the question you should be able to answer today.</p>
    </section>
  `;
};

contentTemplates.reflection = () => {
  const lesson = getCurrentLesson();
  return `
    <section class="reflection-box">
      <h3>思辨札记：${lesson.title}</h3>
      <p>请围绕今天的问题写三句话：<strong>${lesson.question}</strong></p>
      <textarea placeholder="1. 今天的新闻引子是什么？&#10;2. 它如何体现“${lesson.concept}”？&#10;3. 我现在如何回答：${lesson.question}"></textarea>
    </section>
  `;
};

let activeStep = 0;
let completed = getCompletedSet();

const stepsEl = document.getElementById("steps");
const lessonTitle = document.getElementById("lessonTitle");
const lessonTime = document.getElementById("lessonTime");
const lessonContent = document.getElementById("lessonContent");
const completeStep = document.getElementById("completeStep");
const totalProgress = document.getElementById("totalProgress");
const courseGrid = document.getElementById("courseGrid");
const todayDate = document.getElementById("todayDate");
const programPosition = document.getElementById("programPosition");
const accountPanel = document.getElementById("accountPanel");
const profilePanel = document.getElementById("profilePanel");
const archivePanel = document.getElementById("archivePanel");
const noteBox = document.getElementById("noteBox");
const streakCount = document.getElementById("streakCount");
const streakNote = document.getElementById("streakNote");
const currentWeekList = document.getElementById("currentWeekList");
const weekSelect = document.getElementById("weekSelect");
const weekDayPanel = document.getElementById("weekDayPanel");

function storageKey(suffix) {
  const user = appState.currentUser || "guest";
  return `eco.${user}.${suffix}`;
}

function getUsers() {
  try {
    return JSON.parse(localStorage.getItem("eco.users") || "{}");
  } catch {
    return {};
  }
}

function saveUsers(users) {
  localStorage.setItem("eco.users", JSON.stringify(users));
}

function toDateKey(date) {
  return date.toISOString().slice(0, 10);
}

function getActiveProfile() {
  const users = getUsers();
  if (appState.currentUser && users[appState.currentUser]) {
    const profile = users[appState.currentUser];
    const programStartDate = profile.programStartDate ? new Date(`${profile.programStartDate}T00:00:00`) : null;
    if (!profile.programStartDate || Number.isNaN(programStartDate?.getTime())) {
      profile.programStartDate = toDateKey(new Date(profile.createdAt || new Date()));
      users[appState.currentUser] = profile;
      saveUsers(users);
    }
    return profile;
  }

  return {
    createdAt: new Date().toISOString(),
    programStartDate: toDateKey(new Date()),
  };
}

function refreshProgram() {
  const profile = getActiveProfile();
  let start = new Date(`${profile.programStartDate}T00:00:00`);
  if (Number.isNaN(start.getTime())) {
    start = new Date();
    start.setHours(0, 0, 0, 0);
  }
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const elapsedDays = Math.max(0, Math.floor((today - start) / 86400000));
  const week = Math.min(curriculum.length, Math.floor(elapsedDays / 7) + 1);
  const day = Math.min(7, (elapsedDays % 7) + 1);
  const weekData = curriculum[week - 1];
  const dayData = weekData.days[day - 1];

  program = {
    week,
    day,
    theme: weekData.title,
    todayTitle: dayData[0],
  };
}

function isUnlocked(week, day) {
  if (week === 1 && day === 1) return true;
  if (week < program.week) return true;
  if (week === program.week && day <= program.day) return true;
  return false;
}

function getCompletedSet() {
  try {
    return new Set(JSON.parse(localStorage.getItem(storageKey("completedSteps")) || "[]"));
  } catch {
    return new Set();
  }
}

function saveCompletedSet() {
  localStorage.setItem(storageKey("completedSteps"), JSON.stringify([...completed]));
}

function todayKey() {
  return new Date().toISOString().slice(0, 10);
}

function getStudyDays() {
  try {
    return new Set(JSON.parse(localStorage.getItem(storageKey("studyDays")) || "[]"));
  } catch {
    return new Set();
  }
}

function saveStudyDays(days) {
  localStorage.setItem(storageKey("studyDays"), JSON.stringify([...days].sort()));
}

function markTodayStudied() {
  const days = getStudyDays();
  days.add(todayKey());
  saveStudyDays(days);
}

function calculateStreak() {
  const days = getStudyDays();
  let streak = 0;
  const cursor = new Date();
  while (days.has(cursor.toISOString().slice(0, 10))) {
    streak += 1;
    cursor.setDate(cursor.getDate() - 1);
  }
  return streak;
}

function getNote() {
  return localStorage.getItem(storageKey(`note.week${program.week}.day${program.day}`)) || "";
}

function saveNote(value) {
  localStorage.setItem(storageKey(`note.week${program.week}.day${program.day}`), value);
}

function registerUser(name) {
  const cleanName = name.trim();
  if (!cleanName) return;
  const users = getUsers();
  if (!users[cleanName]) {
    const now = new Date();
    users[cleanName] = {
      createdAt: now.toISOString(),
      programStartDate: toDateKey(now),
      programStart: "Week 1 Day 1",
    };
    saveUsers(users);
  }
  appState.currentUser = cleanName;
  localStorage.setItem("eco.currentUser", cleanName);
  refreshProgram();
  completed = getCompletedSet();
  noteBox.value = getNote();
  renderAll();
}

function logoutUser() {
  appState.currentUser = "";
  localStorage.removeItem("eco.currentUser");
  refreshProgram();
  completed = getCompletedSet();
  noteBox.value = getNote();
  renderAll();
}

function renderAccount() {
  if (appState.currentUser) {
    accountPanel.innerHTML = `
      <div class="account-card">
        <strong>${appState.currentUser}</strong>
        <span>当前浏览器已保存学习记录</span>
        <button class="text-button" type="button" id="logoutButton">退出登录</button>
      </div>
    `;
    document.getElementById("logoutButton").addEventListener("click", logoutUser);
    return;
  }

  accountPanel.innerHTML = `
    <form class="account-form" id="accountForm">
      <label for="accountName">用户名</label>
      <input id="accountName" name="accountName" type="text" placeholder="例如 Fiona" autocomplete="username" />
      <button class="complete-button" type="submit">注册 / 登录</button>
      <p>当前为本地账户模式，记录会保存在这台设备的浏览器里。</p>
    </form>
  `;

  document.getElementById("accountForm").addEventListener("submit", (event) => {
    event.preventDefault();
    registerUser(new FormData(event.currentTarget).get("accountName") || "");
  });
}

function renderProfile() {
  const minutes = [...completed].reduce((sum, index) => sum + steps[index].minutes, 0);
  const noteCount = localStorage.getItem(storageKey(`note.week${program.week}.day${program.day}`)) ? 1 : 0;
  const studiedToday = getStudyDays().has(todayKey());
  profilePanel.innerHTML = `
    <dl>
      <div><dt>当前进度</dt><dd>第 ${program.week} 周 · 第 ${program.day} 天</dd></div>
      <div><dt>今日完成</dt><dd>${minutes} / 30 分钟</dd></div>
      <div><dt>笔记状态</dt><dd>${noteCount ? "已保存" : "尚未记录"}</dd></div>
      <div><dt>今日状态</dt><dd>${studiedToday ? "已计入连续学习" : "学习中"}</dd></div>
    </dl>
  `;
}

function renderStreak() {
  const streak = calculateStreak();
  const studiedToday = getStudyDays().has(todayKey());
  streakCount.textContent = `${streak} 天`;
  streakNote.textContent = studiedToday
    ? "今日已完成，学习记录已保存。"
    : "完成五个环节后，今日会计入学习连续天数。";
}

function renderArchive() {
  archivePanel.innerHTML = curriculum
    .map((week, weekIndex) => {
      const weekNumber = weekIndex + 1;
      const dayButtons = week.days
        .map((day, dayIndex) => {
          const dayNumber = dayIndex + 1;
          const unlocked = isUnlocked(weekNumber, dayNumber);
          const current = weekNumber === program.week && dayNumber === program.day;
          const state = current ? "current" : unlocked ? "available" : "locked";
          const disabled = unlocked ? "" : "disabled";
          return `
            <button class="archive-button ${state}" type="button" data-week="${weekNumber}" data-day="${dayNumber}" ${disabled}>
              <strong>W${weekNumber}D${dayNumber}</strong>
              <span>${day[0]}</span>
            </button>
          `;
        })
        .join("");
      return `
        <div class="archive-week">
          <h4>第 ${weekNumber} 周：${week.title}</h4>
          ${dayButtons}
        </div>
      `;
    })
    .join("");
}

function renderCurrentWeekList() {
  const week = curriculum[program.week - 1];
  currentWeekList.innerHTML = week.days
    .map((day, index) => {
      const dayNumber = index + 1;
      const unlocked = isUnlocked(program.week, dayNumber);
      const marker = dayNumber === program.day ? "（今日）" : "";
      const disabled = unlocked ? "" : "disabled";
      return `
        <li>
          <button class="week-day-button" type="button" data-week="${program.week}" data-day="${dayNumber}" ${disabled}>
            第${dayNumber}天：${day[0]}${marker}
          </button>
        </li>
      `;
    })
    .join("");
}

function renderCourseBrowser() {
  if (!appState.selectedLibraryWeek || appState.selectedLibraryWeek > curriculum.length) {
    appState.selectedLibraryWeek = program.week;
  }

  weekSelect.innerHTML = curriculum
    .map((week, index) => {
      const weekNumber = index + 1;
      const locked = weekNumber > program.week;
      const marker = weekNumber === program.week ? "（当前）" : locked ? "（未解锁）" : "";
      return `<option value="${weekNumber}">第 ${weekNumber} 周：${week.title}${marker}</option>`;
    })
    .join("");
  weekSelect.value = String(appState.selectedLibraryWeek);

  const week = curriculum[appState.selectedLibraryWeek - 1];
  weekDayPanel.innerHTML = week.days
    .map((day, index) => {
      const dayNumber = index + 1;
      const unlocked = isUnlocked(appState.selectedLibraryWeek, dayNumber);
      const current = appState.selectedLibraryWeek === program.week && dayNumber === program.day;
      const disabled = unlocked ? "" : "disabled";
      return `
        <button class="library-day-button ${current ? "current" : ""}" type="button" data-week="${appState.selectedLibraryWeek}" data-day="${dayNumber}" ${disabled}>
          <strong>W${appState.selectedLibraryWeek}D${dayNumber}</strong>
          <span>${day[0]}</span>
        </button>
      `;
    })
    .join("");
}

function renderArchiveLesson(weekNumber, dayNumber) {
  const week = curriculum[weekNumber - 1];
  const day = week?.days[dayNumber - 1];
  if (!week || !day || !isUnlocked(weekNumber, dayNumber)) return;
  appState.activeArchiveDay = { week: weekNumber, day: dayNumber };
  const isToday = weekNumber === program.week && dayNumber === program.day;
  lessonTitle.textContent = `第 ${weekNumber} 周第 ${dayNumber} 天：${day[0]}`;
  lessonTime.textContent = isToday ? "今日课程" : "往期课程";
  completeStep.hidden = true;
  lessonContent.innerHTML = `
    <article class="article-block archive-read">
      <h3>${day[0]}</h3>
      <p><strong>所属主题：</strong>${week.title}</p>
      <p><strong>核心概念：</strong>${day[1]}</p>
      <p>${day[2]}</p>
      <p><strong>复习问题：</strong>${day[3]}</p>
      <p class="english">Archive note: this lesson belongs to Week ${weekNumber}. Use it as a reference entry before returning to today's 30-minute workflow.</p>
    </article>
  `;
  document.querySelector(".main-panel")?.scrollIntoView({ behavior: "smooth", block: "start" });
}

function renderAll() {
  refreshProgram();
  programPosition.textContent = `第 ${program.week} 周 · 第 ${program.day} 天 · ${program.todayTitle}`;
  renderAccount();
  renderProfile();
  renderStreak();
  renderArchive();
  renderCurrentWeekList();
  renderCourseBrowser();
  renderSteps();
  if (appState.activeArchiveDay) {
    renderArchiveLesson(appState.activeArchiveDay.week, appState.activeArchiveDay.day);
  } else {
    renderLesson();
  }
}

function formatToday() {
  const date = new Date();
  return new Intl.DateTimeFormat("zh-CN", {
    year: "numeric",
    month: "long",
    day: "numeric",
    weekday: "long",
  }).format(date);
}

function renderSteps() {
  stepsEl.innerHTML = steps
    .map((step, index) => {
      const state = index === activeStep ? "active" : "";
      const done = completed.has(index) ? "done" : "";
      return `
        <button class="step-button ${state} ${done}" type="button" data-index="${index}">
          <span class="step-index">${completed.has(index) ? "✓" : index + 1}</span>
          <span class="step-copy">
            <strong>${step.title}</strong>
            <span>${getStepSubtitle(step)}</span>
          </span>
          <span class="step-minutes">${step.minutes}m</span>
        </button>
      `;
    })
    .join("");

  const minutes = [...completed].reduce((sum, index) => sum + steps[index].minutes, 0);
  totalProgress.textContent = `${minutes} / 30 分钟`;
}

function renderLesson() {
  appState.activeArchiveDay = null;
  const step = steps[activeStep];
  lessonTitle.textContent = step.title;
  lessonTime.textContent = `${step.minutes}分钟`;
  const template = contentTemplates[step.content];
  lessonContent.innerHTML = typeof template === "function" ? template() : template;
  completeStep.hidden = false;
  completeStep.textContent = completed.has(activeStep) ? "已完成" : "完成本步";
  renderSteps();
  renderProfile();
  renderStreak();
}

function renderCourses() {
  courseGrid.innerHTML = courses
    .map(
      ([title, desc], index) => `
        <article class="course-card">
          <span>第 ${index + 1} 周</span>
          <h3>${title}</h3>
          <p>${desc}</p>
        </article>
      `,
    )
    .join("");
}

stepsEl.addEventListener("click", (event) => {
  const button = event.target.closest("button[data-index]");
  if (!button) return;
  activeStep = Number(button.dataset.index);
  renderLesson();
});

archivePanel.addEventListener("click", (event) => {
  const button = event.target.closest("button[data-day]");
  if (!button || button.disabled) return;
  renderArchiveLesson(Number(button.dataset.week), Number(button.dataset.day));
});

currentWeekList.addEventListener("click", (event) => {
  const button = event.target.closest("button[data-day]");
  if (!button || button.disabled) return;
  renderArchiveLesson(Number(button.dataset.week), Number(button.dataset.day));
});

weekSelect.addEventListener("change", (event) => {
  appState.selectedLibraryWeek = Number(event.target.value);
  renderCourseBrowser();
});

weekDayPanel.addEventListener("click", (event) => {
  const button = event.target.closest("button[data-day]");
  if (!button || button.disabled) return;
  renderArchiveLesson(Number(button.dataset.week), Number(button.dataset.day));
});

completeStep.addEventListener("click", () => {
  if (appState.activeArchiveDay) {
    appState.activeArchiveDay = null;
    activeStep = 0;
    renderLesson();
    return;
  }
  completed.add(activeStep);
  saveCompletedSet();
  if (activeStep < steps.length - 1) {
    activeStep += 1;
  } else if (completed.size === steps.length) {
    markTodayStudied();
  }
  renderLesson();
});

noteBox.addEventListener("input", (event) => {
  saveNote(event.target.value);
  renderProfile();
});

todayDate.textContent = formatToday();
refreshProgram();
noteBox.value = getNote();
renderCourses();
renderAll();
