param(
  [string]$SourcesPath = ".\news-sources.json",
  [string]$OutputPath = ".\latest-news.js",
  [int]$MaxItems = 8
)

$ErrorActionPreference = "Stop"
Add-Type -AssemblyName System.Net.Http

function Strip-Html {
  param([string]$Text)
  if ([string]::IsNullOrWhiteSpace($Text)) { return "" }
  $withoutTags = [regex]::Replace($Text, "<[^>]+>", " ")
  $decoded = [System.Net.WebUtility]::HtmlDecode($withoutTags)
  return [regex]::Replace($decoded, "\s+", " ").Trim()
}

function Get-Concepts {
  param([string]$Text)
  $rules = @(
    @{ Pattern = "inflation|CPI|price|prices"; Concepts = @("Inflation", "CPI", "Price level") },
    @{ Pattern = "rate|interest|Fed|central bank|ECB"; Concepts = @("Interest rates", "Monetary policy", "Central-bank reaction function") },
    @{ Pattern = "oil|energy|gasoline"; Concepts = @("Energy prices", "Supply shock", "Cost-push inflation") },
    @{ Pattern = "stock|market|bond|yield"; Concepts = @("Asset pricing", "Risk appetite", "Discount rate") },
    @{ Pattern = "currency|dollar|exchange"; Concepts = @("Exchange rate", "Capital flows", "Interest-rate differential") },
    @{ Pattern = "trade|export|tariff"; Concepts = @("International trade", "Comparative advantage", "Trade policy") },
    @{ Pattern = "employment|jobs|wage"; Concepts = @("Employment", "Wages", "Labor market") }
  )

  $found = New-Object System.Collections.Generic.List[string]
  foreach ($rule in $rules) {
    if ($Text -match $rule.Pattern) {
      foreach ($concept in $rule.Concepts) {
        if (-not $found.Contains($concept)) { $found.Add($concept) }
      }
    }
  }

  if ($found.Count -eq 0) {
    $found.Add("Business cycle")
    $found.Add("Policy expectations")
  }

  return @($found | Select-Object -First 4)
}

function New-NewsItem {
  param(
    [string]$Title,
    [string]$Summary,
    [string]$Link,
    [string]$Source,
    [string]$Published,
    [string]$Language
  )

  $plainSummary = Strip-Html $Summary
  if ($plainSummary.Length -gt 260) {
    $plainSummary = $plainSummary.Substring(0, 257) + "..."
  }

  $concepts = Get-Concepts "$Title $plainSummary"
  $titleForCn = if ($Language -eq "zh") { $Title } else { "[Chinese translation pending] " + $Title }
  $titleForEn = if ($Language -eq "en") { $Title } else { "Translation pending: " + $Title }
  $summaryForCn = if ($Language -eq "zh") { $plainSummary } else { "[Chinese translation pending] " + $plainSummary }
  $summaryForEn = if ($Language -eq "en") { $plainSummary } else { "Translation pending: " + $plainSummary }

  [ordered]@{
    cnTitle = $titleForCn
    enTitle = $titleForEn
    source = $Source
    time = $Published
    url = $Link
    cnSummary = $summaryForCn
    enSummary = $summaryForEn
    concepts = $concepts
    impact = "Add an economics note: focus on how this news changes expectations for prices, interest rates, exchange rates, employment or asset prices."
  }
}

function Read-Feed {
  param($Source)

  $client = [System.Net.Http.HttpClient]::new()
  $client.Timeout = [TimeSpan]::FromSeconds(20)
  $client.DefaultRequestHeaders.UserAgent.ParseAdd("EconomicLearningSite/1.0")
  $xmlText = $client.GetStringAsync($Source.url).GetAwaiter().GetResult()
  [xml]$xml = $xmlText

  $items = @()
  if ($xml.rss.channel.item) {
    foreach ($item in $xml.rss.channel.item) {
      $items += New-NewsItem `
        -Title (Strip-Html $item.title) `
        -Summary ($item.description) `
        -Link ([string]$item.link) `
        -Source $Source.name `
        -Published ([string]$item.pubDate) `
        -Language $Source.language
    }
  } elseif ($xml.feed.entry) {
    foreach ($entry in $xml.feed.entry) {
      $link = ""
      if ($entry.link.href) { $link = [string]$entry.link.href }
      $summary = if ($entry.summary) { [string]$entry.summary } else { [string]$entry.content }
      $items += New-NewsItem `
        -Title (Strip-Html $entry.title) `
        -Summary $summary `
        -Link $link `
        -Source $Source.name `
        -Published ([string]$entry.updated) `
        -Language $Source.language
    }
  }

  return $items
}

$sources = Get-Content -Path $SourcesPath -Raw | ConvertFrom-Json
$allItems = New-Object System.Collections.Generic.List[object]
$errors = New-Object System.Collections.Generic.List[object]

foreach ($source in $sources) {
  try {
    $items = Read-Feed $source
    foreach ($item in $items) { $allItems.Add($item) }
  } catch {
    $errors.Add([ordered]@{
      source = $source.name
      url = $source.url
      error = $_.Exception.Message
    })
  }
}

$selected = @($allItems | Select-Object -First $MaxItems)
if ($selected.Count -eq 0) {
  foreach ($feedError in $errors) {
    Write-Output "Source failed: $($feedError.source) - $($feedError.error)"
  }
  throw "No news items were fetched. Check network access or RSS source availability."
}

$payload = [ordered]@{
  generatedAt = (Get-Date).ToString("o")
  mode = "rss_generated"
  sources = $sources
  errors = $errors
  items = $selected
}

$json = $payload | ConvertTo-Json -Depth 8
$js = "window.latestNewsData = $json;`n"
Set-Content -Path $OutputPath -Value $js -Encoding UTF8
Write-Output "Generated $OutputPath with $($selected.Count) items."
