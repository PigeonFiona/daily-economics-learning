import { readFile, writeFile } from "node:fs/promises";

const sourcesPath = new URL("../news-sources.json", import.meta.url);
const outputPath = new URL("../latest-news.js", import.meta.url);
const maxItems = Number(process.env.MAX_NEWS_ITEMS || 8);

const conceptRules = [
  [/inflation|cpi|price|prices/i, ["Inflation", "CPI", "Price level"]],
  [/rate|interest|fed|central bank|ecb/i, ["Interest rates", "Monetary policy", "Central-bank reaction function"]],
  [/oil|energy|gasoline/i, ["Energy prices", "Supply shock", "Cost-push inflation"]],
  [/stock|market|bond|yield/i, ["Asset pricing", "Risk appetite", "Discount rate"]],
  [/currency|dollar|exchange/i, ["Exchange rate", "Capital flows", "Interest-rate differential"]],
  [/trade|export|tariff/i, ["International trade", "Comparative advantage", "Trade policy"]],
  [/employment|jobs|wage/i, ["Employment", "Wages", "Labor market"]],
];

const editorialRules = [
  /inflation|cpi|ppi|prices|energy|oil|gasoline/i,
  /fed|federal reserve|central bank|interest rate|rate cut|rate hike|yield/i,
  /stock|market|dow|s&p|nasdaq|bond|treasury|gold/i,
  /dollar|currency|exchange|yuan|renminbi|euro|yen/i,
  /trade|tariff|export|import|supply chain/i,
  /consumer|household|business|jobs|wages|employment/i,
  /china|europe|canada|japan|global/i,
];

function stripHtml(text = "") {
  return text
    .replace(/<[^>]+>/g, " ")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/\s+/g, " ")
    .trim();
}

function tagValue(block, tag) {
  const match = block.match(new RegExp(`<${tag}[^>]*>([\\s\\S]*?)<\\/${tag}>`, "i"));
  return stripHtml(match?.[1] || "");
}

function linkValue(block) {
  const atom = block.match(/<link[^>]+href=["']([^"']+)["'][^>]*>/i);
  if (atom?.[1]) return atom[1].trim();
  return tagValue(block, "link");
}

function getConcepts(text) {
  const found = [];
  for (const [pattern, concepts] of conceptRules) {
    if (!pattern.test(text)) continue;
    for (const concept of concepts) {
      if (!found.includes(concept)) found.push(concept);
    }
  }
  return found.length > 0 ? found.slice(0, 4) : ["Business cycle", "Policy expectations"];
}

function scoreItem(item) {
  const text = `${item.enTitle} ${item.enSummary}`;
  return editorialRules.reduce((score, pattern) => score + (pattern.test(text) ? 1 : 0), 0);
}

function parseFeed(xml, source) {
  const rssItems = [...xml.matchAll(/<item\b[\s\S]*?<\/item>/gi)].map((match) => match[0]);
  const atomEntries = [...xml.matchAll(/<entry\b[\s\S]*?<\/entry>/gi)].map((match) => match[0]);
  const blocks = rssItems.length > 0 ? rssItems : atomEntries;

  return blocks.map((block) => {
    const title = tagValue(block, "title");
    const summary = stripHtml(tagValue(block, "description") || tagValue(block, "summary") || tagValue(block, "content"));
    const link = linkValue(block);
    const time = tagValue(block, "pubDate") || tagValue(block, "updated") || tagValue(block, "published");
    const concepts = getConcepts(`${title} ${summary}`);
    const trimmedSummary = summary.length > 260 ? `${summary.slice(0, 257)}...` : summary;

    return {
      cnTitle: source.language === "zh" ? title : `[Chinese translation pending] ${title}`,
      enTitle: source.language === "en" ? title : `Translation pending: ${title}`,
      source: source.name,
      time,
      url: link || source.url,
      cnSummary: source.language === "zh" ? trimmedSummary : `[Chinese translation pending] ${trimmedSummary}`,
      enSummary: source.language === "en" ? trimmedSummary : `Translation pending: ${trimmedSummary}`,
      concepts,
      impact: "Add an economics note: focus on how this news changes expectations for prices, interest rates, exchange rates, employment or asset prices.",
      editorialScore: getConcepts(`${title} ${summary}`).length,
    };
  });
}

async function fetchSource(source) {
  const response = await fetch(source.url, {
    headers: {
      "user-agent": "DailyEconomicsLearning/1.0",
      accept: "application/rss+xml, application/atom+xml, application/xml, text/xml, */*",
    },
  });

  if (!response.ok) {
    throw new Error(`HTTP ${response.status}`);
  }

  const xml = await response.text();
  return parseFeed(xml, source);
}

const sources = JSON.parse(await readFile(sourcesPath, "utf8"));
const items = [];
const errors = [];

for (const source of sources) {
  try {
    const sourceItems = await fetchSource(source);
    items.push(...sourceItems);
  } catch (error) {
    errors.push({
      source: source.name,
      url: source.url,
      error: error.message,
    });
  }
}

const rankedItems = items
  .filter((item) => item.enTitle && item.url)
  .map((item) => ({
    ...item,
    editorialScore: Math.max(item.editorialScore || 0, scoreItem(item)),
  }))
  .sort((a, b) => b.editorialScore - a.editorialScore);

const selected = [];
const sourceCounts = new Map();

for (const item of rankedItems) {
  const count = sourceCounts.get(item.source) || 0;
  if (count >= 1 && selected.length < Math.ceil(maxItems / 2)) continue;
  if (count >= 2) continue;
  selected.push(item);
  sourceCounts.set(item.source, count + 1);
  if (selected.length >= maxItems) break;
}

if (selected.length === 0) {
  throw new Error(`No news items fetched. Errors: ${JSON.stringify(errors)}`);
}

const payload = {
  generatedAt: new Date().toISOString(),
  mode: "rss_generated",
  sources,
  errors,
  items: selected,
};

await writeFile(outputPath, `window.latestNewsData = ${JSON.stringify(payload, null, 2)};\n`, "utf8");
console.log(`Generated latest-news.js with ${selected.length} items.`);
