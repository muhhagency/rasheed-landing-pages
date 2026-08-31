import { chromium } from "playwright";
const b=await chromium.launch();
for (const r of ["/","/app/","/for-retailers/","/for-corporates/"]) {
  const p=await b.newPage({viewport:{width:1440,height:900}});
  const fonts=[];
  p.on("response",res=>{const u=res.url(); if(/\.woff2?$/.test(u)) fonts.push({u:u.split("/").pop(),status:res.status()});});
  await p.goto("http://127.0.0.1:4321"+r,{waitUntil:"networkidle"});
  const info=await p.evaluate(async()=>{
    await document.fonts.ready;
    const fam=new Set(); document.fonts.forEach(f=>fam.add(f.family+":"+f.status));
    // is Michroma actually used on this page?
    const usesMichroma=[...document.querySelectorAll(".tapceipt")].length;
    const paint=performance.getEntriesByType("paint").map(e=>({n:e.name,t:Math.round(e.startTime)}));
    return {fam:[...fam],usesMichroma,paint};
  });
  console.log(`${r.padEnd(18)} fontFiles=${fonts.length} tapceiptNodes=${info.usesMichroma}`);
  console.log(`   loaded: ${info.fam.join(", ")}`);
  console.log(`   paint: ${info.paint.map(x=>x.n+"="+x.t+"ms").join(" ")}`);
  await p.close();
}
await b.close();
