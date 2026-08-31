import { chromium } from "playwright";
const BASE="http://127.0.0.1:4321";
const b = await chromium.launch();
for (const route of ["/","/app/","/for-retailers/","/for-corporates/"]) {
  const p = await b.newPage({viewport:{width:768,height:1000}});
  await p.goto(BASE+route,{waitUntil:"networkidle"});
  const bad = await p.evaluate(()=>{
    const out=[];
    for (const h of document.querySelectorAll("h1,h2,h3")) {
      const txt=(h.textContent||"").trim();
      if(!txt) continue;
      // Measure line breaks via Range rects
      const r=document.createRange(); r.selectNodeContents(h);
      const rects=[...r.getClientRects()].filter(x=>x.width>1);
      if(rects.length<2) continue;
      const lastTop=Math.round(rects[rects.length-1].top);
      const lastLine=rects.filter(x=>Math.round(x.top)===lastTop);
      const lastW=lastLine.reduce((a,x)=>a+x.width,0);
      const maxW=Math.max(...rects.map(x=>x.width));
      // orphan: final line is a small fraction of the widest line
      if(lastW < maxW*0.22) out.push({tag:h.tagName,txt:txt.slice(0,60),lines:rects.length,lastW:Math.round(lastW),maxW:Math.round(maxW)});
    }
    return out;
  });
  console.log(`${route.padEnd(18)} ${bad.length?"ORPHANS":"ok"}`);
  bad.forEach(o=>console.log(`   ↳ <${o.tag}> "${o.txt}" lastLine=${o.lastW}px vs ${o.maxW}px`));
  await p.close();
}
await b.close();
