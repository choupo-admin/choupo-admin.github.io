import{d as i}from"./plotly-BF6M678o.js";import{be as s,b2 as c}from"./index-DyXulH1p.js";async function u(o){const t=document.querySelector(".js-plotly-plot");if(!t){alert("No plot currently rendered.  Press Run and select a plot view first.");return}await d(t,o)}async function d(o,t){let n;try{n=await i.toImage(o,{format:"png",width:1600,height:1e3,scale:2})}catch(r){alert("Failed to render the plot to PNG: "+r.message);return}const a=p(t),e=s(),l=`<!doctype html><html lang="en"><head>
<meta charset="utf-8">
<title>Choupo — ${a}</title>
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
  <span><b>Plot</b> · ${a}</span>
  <a class="dl" href="${n}" download="${a.replace(/[^A-Za-z0-9_-]/g,"_")}.png">
    Download PNG
  </a>
</header>
<main><img src="${n}" alt="${a}"></main>
</body></html>`;c(l)}function p(o){return o.replace(/[&<>"]/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[t])}export{d as a,u as p};
