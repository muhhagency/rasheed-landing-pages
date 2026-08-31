import { chromium } from "playwright";
const b=await chromium.launch();
for (const r of ["/","/app/","/for-retailers/","/for-corporates/"]) {
  const p=await b.newPage({viewport:{width:1440,height:900}});
  const reqs=[];
  p.on("request",q=>{const u=q.url(); if(/\.(webp|jpg|png)$/.test(u)) reqs.push(u.split("/").pop());});
  await p.goto("http://127.0.0.1:4321"+r,{waitUntil:"networkidle"});
  await p.evaluate(()=>window.scrollTo(0,document.body.scrollHeight));
  await p.waitForTimeout(1200);
  const chosen=await p.evaluate(()=>[...document.querySelectorAll("img.ui-image__img")].map(i=>({
    current:i.currentSrc.split("/").pop(), natural:i.naturalWidth+"x"+i.naturalHeight,
    box:Math.round(i.getBoundingClientRect().width)+"x"+Math.round(i.getBoundingClientRect().height)})));
  console.log(`\n${r}`);
  chosen.forEach(c=>console.log(`   served=${c.current.padEnd(32)} natural=${c.natural.padEnd(11)} box=${c.box}`));
  const webp=reqs.filter(x=>x.endsWith(".webp")).length, jpg=reqs.filter(x=>x.endsWith(".jpg")).length;
  console.log(`   network: ${webp} webp, ${jpg} jpg`);
  await p.close();
}
await b.close();
