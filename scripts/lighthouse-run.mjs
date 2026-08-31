// Lighthouse Performance + Accessibility for all four routes.
// Runs against the production static export served on :4321.
import lighthouse from "lighthouse";
import * as chromeLauncher from "chrome-launcher";

const BASE = "http://127.0.0.1:4321";
const ROUTES = ["/", "/app/", "/for-retailers/", "/for-corporates/"];

const chrome = await chromeLauncher.launch({
  chromeFlags: ["--headless=new", "--no-sandbox", "--disable-gpu"],
});

const rows = [];
for (const route of ROUTES) {
  const result = await lighthouse(
    BASE + route,
    {
      port: chrome.port,
      output: "json",
      logLevel: "error",
      onlyCategories: ["performance", "accessibility"],
      // Desktop-ish run, matching how the site is primarily reviewed.
      formFactor: "desktop",
      screenEmulation: { mobile: false, width: 1440, height: 900, deviceScaleFactor: 1, disabled: false },
      throttling: { rttMs: 40, throughputKbps: 10240, cpuSlowdownMultiplier: 1 },
    },
    undefined
  );

  const lhr = result.lhr;
  const perf = Math.round(lhr.categories.performance.score * 100);
  const a11y = Math.round(lhr.categories.accessibility.score * 100);

  // Any failing audits worth naming.
  const failing = Object.values(lhr.audits)
    .filter(
      (a) =>
        a.score !== null &&
        a.score < 1 &&
        a.scoreDisplayMode !== "informative" &&
        a.scoreDisplayMode !== "notApplicable"
    )
    .map((a) => ({ id: a.id, title: a.title, score: a.score }));

  rows.push({ route, perf, a11y, failing });
}

await chrome.kill();

console.log("\n================ LIGHTHOUSE ================");
console.log("route                Performance  Accessibility");
for (const r of rows) {
  console.log(
    `${r.route.padEnd(20)} ${String(r.perf).padStart(6)}       ${String(r.a11y).padStart(6)}`
  );
}
console.log("\n---- failing / imperfect audits ----");
for (const r of rows) {
  console.log(`\n${r.route}`);
  if (!r.failing.length) {
    console.log("  (none)");
    continue;
  }
  for (const f of r.failing) {
    console.log(`  [${f.score}] ${f.id} — ${f.title}`);
  }
}

const bad = rows.filter((r) => r.perf < 95 || r.a11y < 95);
console.log(
  `\n${bad.length === 0 ? "PASS — all routes ≥95 on both" : "BELOW TARGET: " + bad.map((b) => b.route).join(", ")}`
);
