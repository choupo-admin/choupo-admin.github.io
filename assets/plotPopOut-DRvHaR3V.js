import{d as i}from"./plotly-DLE9Vx_K.js";import{aB as s,as as c}from"./index-DOAZA84G.js";async function u(a){const t=document.querySelector(".js-plotly-plot");if(!t){alert("No plot currently rendered.  Press Run and select a plot view first.");return}await d(t,a)}async function d(a,t){let n;try{n=await i.toImage(a,{format:"png",width:1600,height:1e3,scale:2})}catch(r){alert("Failed to render the plot to PNG: "+r.message);return}const o=p(t),e=s(),l=`<!doctype html><html lang="en"><head>
<meta charset="utf-8">
<title>Choupo — ${o}</title>
<style>
  body { margin: 0; background: ${e.bg}; color: ${e.text};
         font-family: system-ui, sans-serif;
         min-height: 100vh; display: flex; flex-direction: column; }
  header { padding: 10px 16px; border-bottom: 1px solid ${e.border};
           font-size: 13px; color: ${e.dim};
           display: flex; justify-content: space-between; align-items: center; }
  header b { color: ${e.accent}; }
  main { flex: 1; display: flex; align-items: center; justify-content: center;
         padding: 16px; }
  img { max-width: 100%; max-height: calc(100vh - 80px);
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
</body></html>`;c(l)}function p(a){return a.replace(/[&<>"]/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[t])}export{d as a,u as p};
//# sourceMappingURL=plotPopOut-DRvHaR3V.js.map
