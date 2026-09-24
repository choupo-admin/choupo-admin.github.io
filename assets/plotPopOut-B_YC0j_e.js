import{d as i}from"./plotly-BoXjxa8Y.js";import{bm as s,ba as d}from"./index-BnZett1m.js";async function u(a){const t=document.querySelector(".js-plotly-plot");if(!t){alert("No plot currently rendered.  Press Run and select a plot view first.");return}await c(t,a)}async function c(a,t){let n;try{n=await i.toImage(a,{format:"png",width:1600,height:1e3,scale:2})}catch(r){alert("Failed to render the plot to PNG: "+r.message);return}const o=p(t),e=s(),l=`<!doctype html><html lang="en"><head>
<meta charset="utf-8">
<title>Choupo — ${o}</title>
<style>
  /*  A POPPED-OUT WINDOW IS A SEPARATE DOCUMENT and does not inherit the
      app's --choupo-vh, so it declares the dynamic viewport itself -- and
      here, in a real stylesheet rather than a React style OBJECT, the
      two-declaration fallback can actually be written: a browser that does
      not know 'dvh' ignores the second line and keeps the first.  */
  body { margin: 0; background: ${e.bg}; color: ${e.text};
         font-family: system-ui, sans-serif;
         min-height: 100vh; min-height: 100dvh;
         display: flex; flex-direction: column; }
  header { padding: 10px 16px; border-bottom: 1px solid ${e.border};
           font-size: 13px; color: ${e.dim};
           display: flex; justify-content: space-between; align-items: center; }
  header b { color: ${e.accent}; }
  main { flex: 1; display: flex; align-items: center; justify-content: center;
         padding: 16px; }
  img { max-width: 100%; max-height: calc(100vh - 80px);
        max-height: calc(100dvh - 80px);
        border-radius: 4px; background: ${e.panel}; }
  a.dl { color: ${e.accent}; text-decoration: none; font-size: 12px; }
  a.dl:hover { text-decoration: underline; }
</style>
</head><body>
<header>
  <span><b>Plot</b> · ${o}</span>
  <a class="dl" href="${n}" download="${o.replace(/[^A-Za-z0-9_-]/g,"_")}.png">
    Download PNG
  </a>
</header>
<main><img src="${n}" alt="${o}"></main>
</body></html>`;d(l)}function p(a){return a.replace(/[&<>"]/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[t])}export{c as a,u as p};
