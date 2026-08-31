// Extracts every user-visible string from the built pages and checks each one
// appears in docs/content-brief.md. Catches paraphrase introduced during build.
import { chromium } from "playwright";
import { readFileSync } from "node:fs";

const brief = readFileSync("docs/content-brief.md", "utf8");
// normalise: collapse whitespace, strip markdown emphasis, unify dashes/quotes
const norm = (s) => s
  .replace(/[*_`>#]/g, "")
  .replace(/[‘’]/g, "'")
  .replace(/[“”]/g, '"')
  .replace(/\s+/g, " ")
  .trim()
  .toLowerCase();
const briefN = norm(brief);

const b = await chromium.launch();
const ROUTES = ["/","/app/","/for-retailers/","/for-corporates/"];
// Chrome/nav/legal strings that are structural, not brief prose.
const IGNORE = new Set(["en","ar","|","skip to content","log in","sign up","menu",
  "close menu","rasheed home","ios","android","→","1","2","3","4"]);

let missing = 0;
for (const r of ROUTES) {
  const p = await b.newPage({viewport:{width:1440,height:900}});
  await p.goto("http://127.0.0.1:4321"+r,{waitUntil:"networkidle"});
  await p.evaluate(()=>{for(const e of document.querySelectorAll(".ui-reveal")) e.dataset.revealed="true";});
  const strings = await p.evaluate(()=>{
    const out=[];
    const walk=(node)=>{
      for(const c of node.childNodes){
        if(c.nodeType===3){const t=c.textContent.trim(); if(t) out.push(t);}
        else if(c.nodeType===1){
          const cs=getComputedStyle(c);
          if(cs.display==="none"||cs.visibility==="hidden") continue;
          walk(c);
        }
      }
    };
    walk(document.querySelector("main"));
    return out;
  });

  const uniq=[...new Set(strings)].filter(s=>!IGNORE.has(s.toLowerCase()) && s.length>3);
  const notInBrief=uniq.filter(s=>!briefN.includes(norm(s)));
  console.log(`\n=== ${r} — ${uniq.length} visible strings, ${notInBrief.length} not found verbatim in brief`);
  for(const s of notInBrief){ missing++; console.log(`   • "${s.slice(0,90)}"`); }
  await p.close();
}
await b.close();
console.log(`\n${missing===0?"PASS — every visible string traces to the brief":`${missing} string(s) need review`}`);
