import { chromium } from "playwright";

const BASE = "http://127.0.0.1:4321";
const browser = await chromium.launch();
const log = (...a) => console.log(...a);

// ---- 1. Pillar grid collapse: 2x2 -> 1 column ----
log("=== PILLAR GRID COLLAPSE ===");
for (const route of ["/for-retailers/", "/for-corporates/"]) {
  for (const width of [1440, 768, 390]) {
    const page = await browser.newPage({ viewport: { width, height: 900 } });
    await page.goto(BASE + route, { waitUntil: "networkidle" });
    const cols = await page.evaluate(() => {
      const g = document.querySelector(".pillar-grid");
      if (!g) return null;
      const tops = [...g.children].map((c) => Math.round(c.getBoundingClientRect().top));
      const firstRow = tops.filter((t) => t === tops[0]).length;
      return { perRow: firstRow, total: g.children.length };
    });
    log(`  ${route.padEnd(18)} ${String(width).padEnd(5)} ${cols.perRow} per row of ${cols.total}`);
    await page.close();
  }
}

// ---- 2. Hero media dominance above the fold at 390 ----
log("\n=== HERO ABOVE-THE-FOLD (390x844, iPhone-ish) ===");
for (const route of ["/app/", "/for-retailers/", "/for-corporates/"]) {
  const page = await browser.newPage({ viewport: { width: 390, height: 844 } });
  await page.goto(BASE + route, { waitUntil: "networkidle" });
  const r = await page.evaluate(() => {
    const cta =
      document.querySelector(".hero__actions") ||
      document.querySelector(".b2b-hero__actions");
    const media =
      document.querySelector(".hero__media") ||
      document.querySelector(".b2b-hero__media");
    const h1 = document.querySelector("h1");
    return {
      ctaTop: cta ? Math.round(cta.getBoundingClientRect().top) : null,
      ctaBottom: cta ? Math.round(cta.getBoundingClientRect().bottom) : null,
      mediaTop: media ? Math.round(media.getBoundingClientRect().top) : null,
      h1Top: h1 ? Math.round(h1.getBoundingClientRect().top) : null,
      vh: window.innerHeight,
    };
  });
  const reachable = r.ctaBottom !== null && r.ctaBottom <= r.vh;
  log(
    `  ${route.padEnd(18)} h1@${r.h1Top} cta@${r.ctaTop}-${r.ctaBottom} media@${r.mediaTop} vh=${r.vh} → CTA ${reachable ? "REACHABLE without scroll" : "BELOW FOLD"}`
  );
  await page.close();
}

// ---- 3. Mobile menu behaviour ----
log("\n=== MOBILE MENU (390) ===");
for (const route of ["/", "/app/", "/for-retailers/", "/for-corporates/"]) {
  const page = await browser.newPage({ viewport: { width: 390, height: 844 } });
  await page.goto(BASE + route, { waitUntil: "networkidle" });

  const burger = page.locator(".site-header__hamburger");
  if ((await burger.count()) === 0) {
    log(`  ${route.padEnd(18)} (no hamburger)`);
    await page.close();
    continue;
  }
  await burger.click();
  await page.waitForSelector(".mobile-menu", { state: "visible" });

  const opened = await page.evaluate(() => ({
    bodyLocked: getComputedStyle(document.body).overflow === "hidden",
    focusInMenu: !!document.querySelector(".mobile-menu")?.contains(document.activeElement),
    ariaExpanded: document
      .querySelector(".site-header__hamburger")
      ?.getAttribute("aria-expanded"),
  }));

  // Focus trap: Tab through more elements than exist, ensure focus stays inside.
  let escaped = false;
  for (let i = 0; i < 25; i++) {
    await page.keyboard.press("Tab");
    const inside = await page.evaluate(
      () => !!document.querySelector(".mobile-menu")?.contains(document.activeElement)
    );
    if (!inside) {
      escaped = true;
      break;
    }
  }

  await page.keyboard.press("Escape");
  await page.waitForTimeout(150);
  const afterEsc = await page.evaluate(() => ({
    closed: !document.querySelector(".mobile-menu"),
    bodyUnlocked: getComputedStyle(document.body).overflow !== "hidden",
    focusReturned:
      document.activeElement === document.querySelector(".site-header__hamburger"),
  }));

  log(
    `  ${route.padEnd(18)} lock=${opened.bodyLocked} autofocus=${opened.focusInMenu} aria=${opened.ariaExpanded} trap=${!escaped} esc-close=${afterEsc.closed} unlock=${afterEsc.bodyUnlocked} focus-return=${afterEsc.focusReturned}`
  );
  await page.close();
}

await browser.close();
