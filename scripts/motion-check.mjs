import { chromium } from "playwright";
const BASE="http://127.0.0.1:4321";
const b=await chromium.launch();

for (const motion of ["no-preference","reduce"]) {
  console.log(`\n=== prefers-reduced-motion: ${motion} ===`);
  for (const route of ["/","/app/","/for-retailers/","/for-corporates/"]) {
    const ctx=await b.newContext({viewport:{width:1280,height:900},reducedMotion:motion});
    const p=await ctx.newPage();
    await p.goto(BASE+route,{waitUntil:"networkidle"});
    await p.waitForTimeout(300);

    const before=await p.evaluate(()=>{
      const els=[...document.querySelectorAll(".ui-reveal")];
      const armed=els.filter(e=>e.dataset.revealArmed==="true");
      // any armed element currently invisible
      const hidden=armed.filter(e=>parseFloat(getComputedStyle(e).opacity)<0.5).length;
      return {total:els.length,armed:armed.length,hidden};
    });

    // scroll to bottom, let reveals fire
    await p.evaluate(()=>window.scrollTo(0,document.body.scrollHeight));
    await p.waitForTimeout(900);
    const after=await p.evaluate(()=>{
      const els=[...document.querySelectorAll(".ui-reveal")];
      const stillHidden=els.filter(e=>parseFloat(getComputedStyle(e).opacity)<0.99).length;
      return {stillHidden,total:els.length};
    });
    console.log(`  ${route.padEnd(18)} reveals=${before.total} armed=${before.armed} hiddenAtLoad=${before.hidden} → afterScroll stillFaded=${after.stillHidden}`);
    await ctx.close();
  }
}
await b.close();
