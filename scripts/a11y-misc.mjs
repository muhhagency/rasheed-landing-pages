import { chromium } from "playwright";
const BASE="http://127.0.0.1:4321";
const b=await chromium.launch();

console.log("=== SKIP LINK moves focus to main ===");
for (const r of ["/","/app/","/for-retailers/","/for-corporates/"]) {
  const p=await b.newPage({viewport:{width:1440,height:900}});
  await p.goto(BASE+r,{waitUntil:"networkidle"});
  await p.keyboard.press("Tab");
  const first=await p.evaluate(()=>document.activeElement?.className);
  await p.keyboard.press("Enter");
  await p.waitForTimeout(200);
  const after=await p.evaluate(()=>{
    const m=document.getElementById("main");
    return {hash:location.hash, mainExists:!!m,
      focusIsMainOrInside: document.activeElement===m || !!m?.contains(document.activeElement),
      activeTag: document.activeElement?.tagName,
      mainTabindex: m?.getAttribute("tabindex")};
  });
  console.log(`  ${r.padEnd(18)} first="${first}" → hash=${after.hash} mainExists=${after.mainExists} focusInMain=${after.focusIsMainOrInside} active=${after.activeTag} tabindex=${after.mainTabindex}`);
  await p.close();
}

console.log("\n=== IMAGES / PLACEHOLDERS alt ===");
for (const r of ["/","/app/","/for-retailers/","/for-corporates/"]) {
  const p=await b.newPage({viewport:{width:1440,height:900}});
  await p.goto(BASE+r,{waitUntil:"networkidle"});
  const res=await p.evaluate(()=>{
    const imgs=[...document.querySelectorAll("img")].map(i=>({src:i.getAttribute("src"),alt:i.getAttribute("alt")}));
    const missing=imgs.filter(i=>i.alt===null);
    const roleImgs=[...document.querySelectorAll('[role="img"]')].map(e=>({label:e.getAttribute("aria-label")}));
    const roleMissing=roleImgs.filter(e=>!e.label);
    const svgs=[...document.querySelectorAll("svg")];
    const svgNoLabel=svgs.filter(s=>!s.hasAttribute("aria-hidden") && !s.getAttribute("aria-label") && !s.querySelector("title"));
    return {imgs:imgs.length,missingAlt:missing.length,roleImgs:roleImgs.length,roleMissing:roleMissing.length,
            svgs:svgs.length,svgNoLabel:svgNoLabel.length,
            svgSample:svgNoLabel.slice(0,3).map(s=>s.parentElement?.className||"?")};
  });
  console.log(`  ${r.padEnd(18)} img=${res.imgs}(missingAlt=${res.missingAlt}) role=img:${res.roleImgs}(noLabel=${res.roleMissing}) svg=${res.svgs}(unlabelled=${res.svgNoLabel}) ${res.svgNoLabel?JSON.stringify(res.svgSample):""}`);
  await p.close();
}

console.log("\n=== NAV DROPDOWN keyboard (hub) ===");
{
  const p=await b.newPage({viewport:{width:1440,height:900}});
  await p.goto(BASE+"/",{waitUntil:"networkidle"});
  const trig=p.locator(".site-header__dropdown-trigger");
  const before=await trig.getAttribute("aria-expanded");
  await trig.focus();
  await p.keyboard.press("Enter");
  await p.waitForTimeout(150);
  const after=await trig.getAttribute("aria-expanded");
  const menuVisible=await p.locator(".site-header__dropdown-menu").count();
  // can we tab into items?
  await p.keyboard.press("Tab");
  const inMenu=await p.evaluate(()=>!!document.querySelector(".site-header__dropdown-menu")?.contains(document.activeElement));
  await p.keyboard.press("Escape");
  await p.waitForTimeout(150);
  const afterEsc=await trig.getAttribute("aria-expanded");
  const closedAfterEsc=await p.locator(".site-header__dropdown-menu").count();
  console.log(`  aria-expanded: ${before} → Enter → ${after} → Esc → ${afterEsc}`);
  console.log(`  menu opens=${menuVisible>0} tab-reaches-items=${inMenu} closes-on-Escape=${closedAfterEsc===0}`);
  await p.close();
}
await b.close();
