import{eD as C,dd as K,dJ as e,e as j,aY as ee,b5 as jt,b1 as d,aT as Q,a$ as r,c as _t,o as St,aU as Rt,f as Nt,H as ct,a as Mt,a4 as Pt}from"./index-DrC7a3wN.js";import{u as q}from"./methodRun-DyLpucpZ.js";import{a as Et,_ as zt}from"./Na-Cl-B9wDceZj.js";import{L as Dt,c as kt,e as At,l as Lt}from"./knobPanel-0tQcdEPQ.js";import{E as $t,a as Ot}from"./electrolyteModelsLesson-BT69YR24.js";import"./engineCaveats-C7zprIFw.js";import"./chapters-C2zd5dq3.js";import"./Slider-CJsUBrrM.js";const te=(t,a,n,i,c,o,l,m)=>({id:t,label:a,cation:n,anion:i,zc:c,za:o,nuC:l,nuA:m}),ae=[te("NaCl","NaCl (1-1)","Na","Cl",1,1,1,1),te("KCl","KCl (1-1)","K","Cl",1,1,1,1),te("CaCl2","CaCl2 (2-1)","Ca","Cl",2,1,1,2),te("Na2SO4","Na2SO4 (1-2)","Na","SO4",1,2,2,1)],De=te("MgSO4","MgSO4 (2-2)","Mg","SO4",2,2,1,1),Se=[.1,.5,1],Wt=t=>ae.find(a=>a.id===t)??(t==="MgSO4"?De:ae[0]),Ae=t=>t.nuC+t.nuA,A=(t,a)=>.5*a*(t.nuC*t.zc*t.zc+t.nuA*t.za*t.za),se=.3915,me=.018015,ht=1807e-8,dt=8.314462618,J=298.15,Ht=t=>t.replace(/\/\*[\s\S]*?\*\//g,"").replace(/\/\/[^\n]*/g,"");function It(t,a,n){const i=Ht(n),o=[...(/\bcolumns\s*\(([\s\S]*?)\)\s*;/.exec(i)?.[1]??"").matchAll(/name\s+(\w+)\s*;/g)].map(g=>g[1]);if(o.join(",")!=="m,gamma,phi")throw new Error(`${a}: columns are (${o.join(" ")}), the page reads (m gamma phi)`);const l=Number(/\btemperature\s+([-0-9.eE]+)\s*;/.exec(i)?.[1]);if(l!==J)throw new Error(`${a}: temperature ${l}, the page works at ${J} K`);const m=/\bdata\s*\(([\s\S]*?)\)\s*;/.exec(i)?.[1];if(!m)throw new Error(`${a}: no data ( ... ); block`);const u=m.trim().split(/\s+/).map(Number);if(u.length%3!==0||u.some(g=>!Number.isFinite(g)))throw new Error(`${a}: the data block is not rows of three numbers`);const y=[];for(let g=0;g<u.length;g+=3)y.push({m:u[g],gamma:u[g+1],phi:u[g+2],index:g/3});const w=g=>new RegExp(`\\b${g}\\s+"([^"]*)"\\s*;`).exec(n)?.[1]??"";return{salt:t,file:a,source:w("source"),doi:w("doi"),location:w("location"),rows:y}}function Gt(t,a=24){const n=t.rows[t.rows.length-1].m,i=.001,c=new Set(t.rows.map(o=>o.m));for(let o=0;o<a;o++)c.add(Number((i*Math.pow(n/i,o/(a-1))).toPrecision(4)));return[...c].sort((o,l)=>o-l)}const k="electrolyteModels",ie=(t,a)=>`${t.id}_${a}`,Le=(t,a)=>`em_${t}_${a}`,oe=(t,a)=>`em_${t}_${a}.csv`,ue=t=>t.toPrecision(10).replace(/(\.\d*?)0+$/,"$1").replace(/\.$/,"");function mt(t){return["application   choupoProps;",`description   "Choosing an electrolyte model EduTool: ${t}";`,"verbosity     0;",""].join(`
`)}function ut(t,a){return["recordType    thermophysicalPropertySystem;","schemaVersion 2;","",`components    ( water ${t.id} );`,"","equilibrium","{","    formulation electrolyteGammaPhi;",`    aqueous { activityModel { model ${a}; } compositionBasis molality; }`,"    vapour  { fugacityModel idealGas; }","}","","caloric","{","    energyBasis elementsDatum;","    aqueous { enthalpyRoute ionicReferencePlusExcess; }","    vapour  { enthalpyRoute idealGasCp; }","}",""].join(`
`)}const Kt=["recordType    thermophysicalPropertySystem;","schemaVersion 2;","","components    ( water );","","aqueousProperties","{","    activityCoefficients { model Davies; referenceBasis aqueousMolality; }","}",""].join(`
`);function ke(t,a,n){const i=ie(t,a),c=n.map((o,l)=>`    { name ${Le(i,l)}; type electrolyteActivity; temperature ${J}; molality { from ${ue(o)}; to ${ue(o)}; n 2; } output { file ${oe(i,l)}; } }`);return{[`${k}.cho`]:"","system/controlDict":mt(`${a}, ${t.id}, ${n.length} molalities at 25 C`),"system/propsDict":`operations
(
${c.join(`
`)}
);
`,"constant/thermoPhysPropDict":ut(t,a)}}const ne=2,pt=(t,a)=>a.filter(n=>A(t,n)<=ne+1e-12);function qt(t,a,n){const i=ie(t,n?"DaviesPairs":"Davies"),c=l=>`analyticalTotals { ${t.cation} ${ue(t.nuC*l)} mol/kg; ${t.anion} ${ue(t.nuA*l)} mol/kg; }`,o=a.map((l,m)=>`    { name ${Le(i,m)}; type speciate; activityModel davies; temperature ${J}; ${c(l)} pH 7.0; `+(n?"":'networkScope restricted; network ( water-dissociation ); reason "EduTool: one fully dissociated salt, no ion pair -- Davies on free ions only"; ')+`diagMeanIonic ( { cation ${t.cation}; anion ${t.anion}; } ); output { file ${oe(i,m)}; } }`);return{[`${k}.cho`]:"","system/controlDict":mt(`Davies ${n?"with the catalogue's ion pairs":"on free ions"}, ${t.id}, ${a.length} molalities at 25 C`),"system/propsDict":`operations
(
${o.join(`
`)}
);
`,"constant/thermoPhysPropDict":Kt}}function le(t,a,n){return n==="Davies"||n==="DaviesPairs"?qt(t,pt(t,a),n==="DaviesPairs"):ke(t,n,a)}function Bt(t){if(!t)return null;const a=t.trim().split(/\r?\n/);if(a.length<2)return null;const n=a[0].split(",").map(o=>o.trim()),i=a[1].split(",").map(o=>Number(o)),c={};return n.forEach((o,l)=>{c[o]=i[l]}),c}function $e(t,a){const n=t.csvFiles??{};if(n[a]!==void 0)return n[a];const i=Object.keys(n).find(c=>c===a||c.endsWith(`/${a}`));return i?n[i]:void 0}function Re(t,a,n,i){if(!t)return[];const c=ie(a,n),o=[];return i.forEach((l,m)=>{const u=Bt($e(t,oe(c,m)));if(!u)return;const y={m:l,gamma:u.gamma_pm,phi:u.phi,aw:u.a_w};[y.gamma,y.phi,y.aw].every(Number.isFinite)&&Math.abs(u.m-l)<=1e-9*Math.max(1,l)&&o.push(y)}),o}function Ze(t,a,n,i){const c=[];if(!t)return c;const o=ie(a,i?"DaviesPairs":"Davies"),l=new Map((t.operationResults??[]).map(u=>[u.name,u.diagnostics])),m=Ae(a);return n.forEach((u,y)=>{const w=l.get(Le(o,y)),g=w?.aw;if(!w||!Number.isFinite(g))return;const b=-Math.log(g)/(me*m*u);if(!i){const x=w[`gamma_pm_${a.cation}_${a.anion}`];Number.isFinite(x)&&c.push({m:u,gamma:x,aw:g,phi:b});return}const L=Vt($e(t,oe(o,y))),$=L[a.cation],I=L[a.anion];if(!Number.isFinite($)||!Number.isFinite(I))return;const S=Math.pow(Math.pow($,a.nuC)*Math.pow(I,a.nuA)/(Math.pow(a.nuC*u,a.nuC)*Math.pow(a.nuA*u,a.nuA)),1/m);c.push({m:u,gamma:S,aw:g,phi:b})}),c}function Vt(t){const a={};if(!t)return a;const n=t.trim().split(/\r?\n/),i=n[0].split(",").map(l=>l.trim()),c=i.indexOf("species"),o=i.indexOf("activity");if(c<0||o<0)return a;for(const l of n.slice(1)){const m=l.split(",");m[c]&&(a[m[c].trim()]=Number(m[o]))}return a}function Ft(t,a,n){if(!t||n.length===0)return[];const i=$e(t,oe(ie(a,"DaviesPairs"),n.length-1));if(!i)return[];const c=new Set([a.cation,a.anion,"H","OH","water","H2O"]);return i.trim().split(/\r?\n/).slice(1).map(o=>o.split(",")[0].trim()).filter(o=>o&&!c.has(o))}function Qe(t,a){const n=Math.sqrt(A(t,a)),i=t.zc*t.za;return{gamma:Math.exp(-3*se*i*n),phi:1-se*i*n}}const et=(t,a,n)=>Math.exp(-n*Ae(t)*a*me),Ne=(t,a=J,n=ht)=>-dt*a/n*Math.log(t)/1e5,ft=(t,a)=>100*(t-a)/a;function Me(t,a,n,i=()=>!0){const c=new Map(t.map(w=>[w.m,w]));let o=0,l=0,m=-1,u=NaN,y=NaN;for(const w of a.rows){if(!i(w))continue;const g=c.get(w.m);if(!g)continue;const b=ft(g[n],w[n]);o++,l+=Math.abs(b),Math.abs(b)>m&&(m=Math.abs(b),u=b,y=w.m)}return o?{n:o,aadPct:l/o,maxPct:m,worstSigned:u,worstM:y}:null}function Pe(t,a,n,i){const c=new Map(t.map(l=>[l.m,l]));let o=null;for(const l of a.rows){const m=c.get(l.m);if(!m)continue;const u=A(n,l.m);(!o||Math.abs(Math.log(u/i))<Math.abs(Math.log(o.I/i)))&&(o={m:l.m,I:u,pct:ft(m.gamma,l.gamma)})}return o}function Ut(t){return t.acidGases?{model:"edwardsPitzer",declare:"activityModel edwardsPitzer; (speciate) or model EdwardsPitzer; (aqueousProperties)",because:["NH3, CO2 and H2S dissolve partly as neutral molecules, and a neutral solute is salted out by the ions around it.  Davies gives a neutral species a coefficient of exactly 1 at every ionic strength, so it cannot express that.","The Edwards-Maurer-Newman-Prausnitz truncation of Pitzer's expansion carries molecule-ion terms and was built for these volatile weak electrolytes."],seeTool:"sour-water"}:t.otherSolvent?{model:"eNRTL",declare:"a mixed-solvent eNRTL declaration (Theory Guide, eNRTL with a second solvent)",because:["eNRTL is a local-composition model: the solvent is a species with its own interaction parameters, so a second solvent is a second set of pairs, not a new model.","Pitzer's virial coefficients are fitted in water; nothing in them says what an ethanol-water solvent does.","The mixed-solvent route is not compared with measurements on this page."]}:t.severalSalts?{model:"pitzerHMW",declare:"activityModel pitzerHMW; (speciate)",because:["With two salts the ions of one meet the ions of the other: Pitzer's mixing parameters theta and psi carry that, and the Harvie-Moller-Weare assembly sums them with the single-salt binaries.","Its binaries are the same records as single-salt Pitzer: on one salt the two agree to round-off."],seeTool:"salt-mixing"}:t.ionicStrength==="below0.1"?{model:"davies",declare:"activityModel davies; (speciate) or model Davies; (aqueousProperties)",because:["Below about I = 0.1 mol/kg the charge of an ion decides almost all of its non-ideality, and Davies needs no parameter beyond the charge.","Pitzer is equally right there; choose it instead when its pair record exists and the solution may concentrate."]}:{model:"pitzer",declare:"aqueous { activityModel { model Pitzer; } } (formulation electrolyteGammaPhi)",because:["Above I = 0.1 mol/kg the specific short-range interactions of each ion pair matter, and Davies does not carry them; Pitzer's binary coefficients do.","Its coefficients are fitted to each salt's own measurements; the catalogue holds one record per cation-anion pair (step 6 shows how to see whether yours exists).","eNRTL is the alternative where a Pitzer pair is missing and an eNRTL pair exists."]}}const Jt=`/*--------------------------------*- Choupo -*--------------------------------*\\
  Ca-Cl: mean ionic activity coefficient gamma_pm and osmotic coefficient
  phi of the salt (Ca)1(Cl)2 in water at 298.15 K -- the EVALUATED
  (recommended) values of
    R. N. Goldberg and R. L. Nuttall, Evaluated Activity and Osmotic Coefficients for Aqueous Solutions: The Alkaline Earth Metal Halides, J. Phys. Chem. Ref. Data 7 (1978) 263-310,
    doi:10.1063/1.555569, Table 20, p. 291 (m, gamma, phi, a_w), the recommended values.
  The evaluation is the primary source of these recommended values (its
  own references are the measurements behind them).
  TRANSCRIBED 2026-11-11 (DEV.md 4c C311) from the NIST reprint
  (nist-jpcrd-1.555569.pdf): every row read by eye from the page image; phi checked against the printed water activity (ln a_w = -nu m phi M_w, to 2.5e-4) and gamma against its neighbours by the Gibbs-Duhem relation.
  Rows kept: 0.1 mol/kg up to ionic strength 6 mol/kg; a row the
  source marks saturated, supersaturated or from another author is not
  here.  Every 4th row (0-based index % 4 == 3, never the first or the
  last) is HELD OUT by the case (system/propsDict), not by this file.
\\*-----------------------------------------------------------------------------*/
provenance
{
    source        "R. N. Goldberg and R. L. Nuttall, Evaluated Activity and Osmotic Coefficients for Aqueous Solutions: The Alkaline Earth Metal Halides, J. Phys. Chem. Ref. Data 7 (1978) 263-310";
    doi           "10.1063/1.555569";
    location      "Table 20, p. 291 (m, gamma, phi, a_w), the recommended values";
    reviewStatus  transcribed;
}

temperature 298.15;   // K, every row

columns
(
    { name m;     unit mol/kg; }
    { name gamma; unit -; }       // gamma_pm, molality scale
    { name phi;   unit -; }       // molal osmotic coefficient
);

data
(
    0.1     0.5171   0.8516  
    0.2     0.4692   0.8568  
    0.3     0.4508   0.8721  
    0.4     0.4442   0.8915  
    0.5     0.4442   0.9134  
    0.6     0.4486   0.937   
    0.7     0.4564   0.9621  
    0.8     0.467    0.9884  
    0.9     0.4801   1.0159  
    1       0.4956   1.0444  
    1.25    0.544    1.1198  
    1.5     0.607    1.2004  
    1.75    0.6861   1.2857  
    2       0.7842   1.3754  
);
`,Yt=`/*--------------------------------*- Choupo -*--------------------------------*\\
  K-Cl: mean ionic activity coefficient gamma_pm and osmotic coefficient
  phi of the salt (K)1(Cl)1 in water at 298.15 K -- the EVALUATED
  (recommended) values of
    W. J. Hamer and Y.-C. Wu, Osmotic Coefficients and Mean Activity Coefficients of Uni-univalent Electrolytes in Water at 25 C, J. Phys. Chem. Ref. Data 1 (1972) 1047-1100,
    doi:10.1063/1.3253108, Table 28, p. 1073 (m, phi, gamma), the recommended values.
  The evaluation is the primary source of these recommended values (its
  own references are the measurements behind them).
  TRANSCRIBED 2026-11-11 (DEV.md 4c C311) from the NIST reprint
  (nist-jpcrd-1.3253108.pdf): rows read by optical character recognition of the reprint's text layer and each row accepted only where it agrees, to 0.0012, with a smooth Gibbs-Duhem-consistent curve through the same table (the Hamer-Wu equation form with the table's printed B*); the rows that disagreed were dropped, not guessed.
  Rows kept: 0.1 mol/kg up to ionic strength 6 mol/kg; a row the
  source marks saturated, supersaturated or from another author is not
  here.  Every 4th row (0-based index % 4 == 3, never the first or the
  last) is HELD OUT by the case (system/propsDict), not by this file.
\\*-----------------------------------------------------------------------------*/
provenance
{
    source        "W. J. Hamer and Y.-C. Wu, Osmotic Coefficients and Mean Activity Coefficients of Uni-univalent Electrolytes in Water at 25 C, J. Phys. Chem. Ref. Data 1 (1972) 1047-1100";
    doi           "10.1063/1.3253108";
    location      "Table 28, p. 1073 (m, phi, gamma), the recommended values";
    reviewStatus  transcribed;
}

temperature 298.15;   // K, every row

columns
(
    { name m;     unit mol/kg; }
    { name gamma; unit -; }       // gamma_pm, molality scale
    { name phi;   unit -; }       // molal osmotic coefficient
);

data
(
    0.1     0.768    0.927   
    0.2     0.717    0.913   
    0.3     0.687    0.906   
    0.4     0.665    0.902   
    0.5     0.649    0.9     
    0.6     0.636    0.899   
    0.7     0.626    0.898   
    0.8     0.617    0.898   
    0.9     0.61     0.898   
    1       0.604    0.898   
    1.2     0.594    0.9     
    1.4     0.586    0.902   
    1.6     0.58     0.905   
    1.8     0.576    0.908   
    2       0.573    0.912   
    2.5     0.568    0.923   
    3       0.568    0.936   
    3.5     0.571    0.95    
    4       0.576    0.965   
    4.5     0.584    0.981   
);
`,Xt=`/*--------------------------------*- Choupo -*--------------------------------*\\
  Na-Cl: mean ionic activity coefficient gamma_pm and osmotic coefficient
  phi of the salt (Na)1(Cl)1 in water at 298.15 K -- the EVALUATED
  (recommended) values of
    W. J. Hamer and Y.-C. Wu, Osmotic Coefficients and Mean Activity Coefficients of Uni-univalent Electrolytes in Water at 25 C, J. Phys. Chem. Ref. Data 1 (1972) 1047-1100,
    doi:10.1063/1.3253108, Table 16, p. 1067 (m, phi, gamma), the recommended values.
  The evaluation is the primary source of these recommended values (its
  own references are the measurements behind them).
  TRANSCRIBED 2026-11-11 (DEV.md 4c C311) from the NIST reprint
  (nist-jpcrd-1.3253108.pdf): rows read by optical character recognition of the reprint's text layer and each row accepted only where it agrees, to 0.0012, with a smooth Gibbs-Duhem-consistent curve through the same table (the Hamer-Wu equation form with the table's printed B*); the rows that disagreed were dropped, not guessed.
  Rows kept: 0.1 mol/kg up to ionic strength 6 mol/kg; a row the
  source marks saturated, supersaturated or from another author is not
  here.  Every 4th row (0-based index % 4 == 3, never the first or the
  last) is HELD OUT by the case (system/propsDict), not by this file.
\\*-----------------------------------------------------------------------------*/
provenance
{
    source        "W. J. Hamer and Y.-C. Wu, Osmotic Coefficients and Mean Activity Coefficients of Uni-univalent Electrolytes in Water at 25 C, J. Phys. Chem. Ref. Data 1 (1972) 1047-1100";
    doi           "10.1063/1.3253108";
    location      "Table 16, p. 1067 (m, phi, gamma), the recommended values";
    reviewStatus  transcribed;
}

temperature 298.15;   // K, every row

columns
(
    { name m;     unit mol/kg; }
    { name gamma; unit -; }       // gamma_pm, molality scale
    { name phi;   unit -; }       // molal osmotic coefficient
);

data
(
    0.1     0.779    0.933   
    0.2     0.734    0.924   
    0.3     0.709    0.921   
    0.4     0.693    0.92    
    0.5     0.681    0.921   
    0.6     0.673    0.923   
    0.7     0.667    0.926   
    0.8     0.662    0.929   
    0.9     0.659    0.932   
    1       0.657    0.936   
    1.2     0.655    0.944   
    1.4     0.656    0.953   
    1.6     0.658    0.962   
    1.8     0.662    0.973   
    2       0.668    0.984   
    2.5     0.688    1.013   
    3       0.714    1.045   
    3.5     0.746    1.08    
    4       0.783    1.116   
    4.5     0.826    1.153   
    5       0.874    1.191   
    5.5     0.928    1.231   
    6       0.986    1.27    
);
`,Zt=`/*--------------------------------*- Choupo -*--------------------------------*\\
  Na-SO4: mean ionic activity coefficient gamma_pm and osmotic coefficient
  phi of the salt (Na)2(SO4)1 in water at 298.15 K -- the EVALUATED
  (recommended) values of
    R. N. Goldberg, Evaluated Activity and Osmotic Coefficients for Aqueous Solutions: Thirty-Six Uni-Bivalent Electrolytes, J. Phys. Chem. Ref. Data 10 (1981) 671-764,
    doi:10.1063/1.555646, the Na2SO4 table of recommended values, p. 695 (m, gamma, phi, a_w).
  The evaluation is the primary source of these recommended values (its
  own references are the measurements behind them).
  TRANSCRIBED 2026-11-11 (DEV.md 4c C311) from the NIST reprint
  (nist-jpcrd-1.555646.pdf): every row read by eye from the page image; phi checked against the printed water activity (ln a_w = -nu m phi M_w, to 2.5e-4) and gamma against its neighbours by the Gibbs-Duhem relation.
  Rows kept: 0.1 mol/kg up to ionic strength 6 mol/kg; a row the
  source marks saturated, supersaturated or from another author is not
  here.  Every 4th row (0-based index % 4 == 3, never the first or the
  last) is HELD OUT by the case (system/propsDict), not by this file.
\\*-----------------------------------------------------------------------------*/
provenance
{
    source        "R. N. Goldberg, Evaluated Activity and Osmotic Coefficients for Aqueous Solutions: Thirty-Six Uni-Bivalent Electrolytes, J. Phys. Chem. Ref. Data 10 (1981) 671-764";
    doi           "10.1063/1.555646";
    location      "the Na2SO4 table of recommended values, p. 695 (m, gamma, phi, a_w)";
    reviewStatus  transcribed;
}

temperature 298.15;   // K, every row

columns
(
    { name m;     unit mol/kg; }
    { name gamma; unit -; }       // gamma_pm, molality scale
    { name phi;   unit -; }       // molal osmotic coefficient
);

data
(
    0.1     0.4457   0.7869  
    0.2     0.3656   0.7494  
    0.3     0.3212   0.7262  
    0.4     0.291    0.7088  
    0.5     0.2684   0.6945  
    0.6     0.2506   0.6824  
    0.7     0.2359   0.672   
    0.8     0.2236   0.6629  
    0.9     0.2131   0.655   
    1       0.204    0.6481  
    1.25    0.1859   0.6351  
    1.5     0.1725   0.6273  
    1.75    0.1623   0.6243  
);
`,Qt=`/*--------------------------------*- Choupo -*--------------------------------*\\
  Electrolyte-NRTL binary energy parameters --- (Ca)1(Cl)2 in water.
  Role: the water / (Ca)(Cl) pair taus of the Chen local-composition model,
  alpha 0.2 fixed, consumed by the eNRTL activity engine.
  REGRESSED BY CHOUPO (DEV.md 4c C311) to the evaluated gamma_pm and phi
  of R. N. Goldberg and R. L. Nuttall, Evaluated Activity and Osmotic Coefficients for Aqueous Solutions: The Alkaline Earth Metal Halides, J. Phys. Chem. Ref. Data 7 (1978) 263-310, doi:10.1063/1.555569 (Table 20, p. 291 (m, gamma, phi, a_w), the recommended values) -- the evaluation is the
  primary source of those recommended values.  The PARAMETERS are
  Choupo's own work.  Window: 0.1-2 mol/kg at 298.15 K
  (11 points fitted, 3 interleaved points held out).
  Outside it the record is an extrapolation; off 25 C it carries no
  temperature extension of its own.
  GRADE: in-sample max error 4.59 % -> warning;
  the held-out points 3.4 % (warning).  No human has
  reviewed it.  REPRODUCE: run data/curation/electrolytes/Ca-Cl; its proposal is held equal to this
  record by bin/curate/check_regressed_electrolytes.py.
\\*-----------------------------------------------------------------------------*/
recordType electrolyteNRTLParameters;
schemaVersion 1;

model eNRTL;

pair { cation Ca; anion Cl; }

parameters
{
    tau_m_ca 8.949902167;
    tau_ca_m -4.724147742;
    alpha    0.2;
}

source "REGRESSED by Choupo (C311) to R. N. Goldberg and R. L. Nuttall, Evaluated Activity and Osmotic Coefficients for Aqueous Solutions: The Alkaline Earth Metal Halides, J. Phys. Chem. Ref. Data 7 (1978) 263-310, doi:10.1063/1.555569, Table 20, p. 291 (m, gamma, phi, a_w), the recommended values";

provenance
{
    origin        regressed;
    method        "electrolyteFit(eNRTL): ln gamma_pm and phi, equal weight, Levenberg-Marquardt from 4 starts";
    methodVersion "choupoProps Choupo-dev";
    fittedInCase  "data/curation/electrolytes/Ca-Cl";
    reviewStatus  autoPromoted;
    fitGrade      warning;   // DEV.md 4c C311: max relative error of gamma_pm or phi over the fitted points, graded 2 / 5 / 10 %
    fitGradeBasis inSample;   // DEV.md 4c C300 rule 1: the residual of the points it was fitted to
    fitGradeMaxRelativeError_pct 4.5898;
    promotedBy    "bin/curate/electrolytes_c311.py promote";
    promotedDate  "2026-11-11";
    reviewReason  "regressed by bin/curate/electrolytes_c311.py from a hand-checked transcription of an evaluated table; not yet read back by a human";
    reuse         "Choupo's own regression; the evaluated values belong to the cited compilation";
    fitDate       "2026-11-11";
    evidence
    (
        {
            role      fit;
            dataset   "constant/experiments/Ca-Cl.dat";
            doi       "10.1063/1.555569";
            provenance evaluated;
        }
    );
    inSample
    {
        gammaAAD_pct 2.4243;
        phiAAD_pct   2.0959;
        max_pct      4.5898;
        nPoints      11;
    }
    heldOut
    {
        kind         interleavedSameSource;   // every 4th point of the same evaluation: NOT a validation
        gammaAAD_pct 2.0436;
        phiAAD_pct   1.9454;
        max_pct      3.4047;
        nPoints      3;
        grade        warning;
    }
    validity
    {
        temperature { min 298.15 K; max 298.15 K; }
        molality    { min 0.1; max 2; }   // mol/kg
        note        "the span of the fitted evaluated values; outside it the salt is an extrapolation";
    }
    review
    {
        by none;
    }
}
`,en=`/*--------------------------------*- Choupo -*--------------------------------*\\
  Electrolyte-NRTL binary energy parameters --- water / K(+)Cl(-).
  Role: the molecule-electrolyte pair taus of the Chen local-composition
  model, tau_m_ca (water -> K+Cl- pair) and tau_ca_m (K+Cl- pair -> water)
  with nonrandomness alpha 0.2 -- the short-range half of the eNRTL excess
  Gibbs energy, consumed by the eNRTL activity engine for aqueous KCl.
  Provenance: an in-house curation REFIT to the Hamer & Wu (1972) critically
  evaluated gamma_pm of KCl(aq) at 25 C (AAD 0.27 %), landing within 0.2 %
  of the original Chen & Evans (1986) Table 1 regression -- see the refit
  note and the source entry below.
\\*-----------------------------------------------------------------------------*/
recordType electrolyteNRTLParameters;
schemaVersion 1;

model eNRTL;

pair { cation K; anion Cl; }

parameters
{
    tau_m_ca 8.1162;
    tau_ca_m -4.1275;
    alpha 0.2;
}

// REFIT (curation, 2026-07-02, bin/curate note in the multi-salt tutorial):
// 2-parameter fit of the validated ENRTLSingleSalt closed form to the NBS
// critically-evaluated gamma_pm of KCl(aq), 25 C, m = 0.1-4.5 mol/kg
// (7 points) -- AAD 0.27 %.  Replaces the earlier water-NaCl PROXY entry.
// CROSS-CHECK: Chen & Evans 1986 Table 1 (Literature/aic.690320311.pdf)
// gives 8.1354/-4.1341 -- this independent refit lands within 0.2 % of the
// original values.  Two roads, one answer.
source "REFIT to Hamer & Wu 1972, J. Phys. Chem. Ref. Data 1, 1047, Table 28 (gamma_pm, 25 C); cross-checked vs Chen & Evans 1986 Table 1";

provenance
{
    origin  regressed;
    validity
    {
        temperature { min 298.15 K; max 298.15 K; }
        note        "the temperature of the fitted values (298.15 K); off it the temperature scaling is the engine's own 298.15/T, not a fitted dependence";
    }
}

`,tn=`/*--------------------------------*- Choupo -*--------------------------------*\\
  Electrolyte-NRTL binary energy parameters --- water / Na(+)Cl(-).
  Role: the molecule-electrolyte pair taus of the Chen local-composition
  model, tau_m_ca (water -> Na+Cl- pair, 8.885) and tau_ca_m (Na+Cl- pair ->
  water, -4.549) with nonrandomness alpha 0.2 -- the short-range half of the
  eNRTL excess Gibbs energy (the long-range Pitzer-Debye-Huckel part is
  parameter-free), consumed by the eNRTL activity engine for aqueous NaCl.
  Source: Chen, Britt, Boston & Evans, AIChE J. 28 (1982) 588, Table 1
  (p. 592), the fit to the molality mean ionic activity coefficient of
  NaCl(aq) at 298.15 K -- full string in the source entry below.  (Chen &
  Evans 1986 Table 1 is the OSMOTIC-coefficient fit of the same salt and
  carries other numbers, 9.0234 / -4.5916; these are not those.)
  Temperature: the pair was fitted at 298.15 K only and the record carries no
  temperature dependence; the engine scales tau by 298.15/T off that point,
  which is its own simplification, not a fitted law (the validity block
  below; Theory Guide, eNRTL temperature statement).
\\*-----------------------------------------------------------------------------*/
recordType electrolyteNRTLParameters;
schemaVersion 1;

model eNRTL;

pair { cation Na; anion Cl; }

parameters
{
    tau_m_ca 8.885;
    tau_ca_m -4.549;
    alpha 0.2;
}

source "Chen, Britt, Boston & Evans, AIChE J. 28 (1982) 588, Table 1, p. 592 (water-NaCl, mean ionic activity coefficient fit at 298.15 K)";

provenance
{
    origin  literature;
    validity
    {
        temperature { min 298.15 K; max 298.15 K; }
        note        "the temperature of the fit (298.15 K); off it the temperature scaling is the engine's own 298.15/T, not a fitted dependence";
    }
}

`,nn=`/*--------------------------------*- Choupo -*--------------------------------*\\
  Electrolyte-NRTL binary energy parameters --- (Na)2(SO4)1 in water.
  Role: the water / (Na)(SO4) pair taus of the Chen local-composition model,
  alpha 0.2 fixed, consumed by the eNRTL activity engine.
  REGRESSED BY CHOUPO (DEV.md 4c C311) to the evaluated gamma_pm and phi
  of R. N. Goldberg, Evaluated Activity and Osmotic Coefficients for Aqueous Solutions: Thirty-Six Uni-Bivalent Electrolytes, J. Phys. Chem. Ref. Data 10 (1981) 671-764, doi:10.1063/1.555646 (the Na2SO4 table of recommended values, p. 695 (m, gamma, phi, a_w)) -- the evaluation is the
  primary source of those recommended values.  The PARAMETERS are
  Choupo's own work.  Window: 0.1-1.75 mol/kg at 298.15 K
  (10 points fitted, 3 interleaved points held out).
  Outside it the record is an extrapolation; off 25 C it carries no
  temperature extension of its own.
  GRADE: in-sample max error 0.788 % -> clean (capped at warning: one temperature, one evaluation);
  the held-out points 0.675 % (clean).  No human has
  reviewed it.  REPRODUCE: run data/curation/electrolytes/Na-SO4; its proposal is held equal to this
  record by bin/curate/check_regressed_electrolytes.py.
\\*-----------------------------------------------------------------------------*/
recordType electrolyteNRTLParameters;
schemaVersion 1;

model eNRTL;

pair { cation Na; anion SO4; }

parameters
{
    tau_m_ca 7.372993343;
    tau_ca_m -3.61147427;
    alpha    0.2;
}

source "REGRESSED by Choupo (C311) to R. N. Goldberg, Evaluated Activity and Osmotic Coefficients for Aqueous Solutions: Thirty-Six Uni-Bivalent Electrolytes, J. Phys. Chem. Ref. Data 10 (1981) 671-764, doi:10.1063/1.555646, the Na2SO4 table of recommended values, p. 695 (m, gamma, phi, a_w)";

provenance
{
    origin        regressed;
    method        "electrolyteFit(eNRTL): ln gamma_pm and phi, equal weight, Levenberg-Marquardt from 4 starts";
    methodVersion "choupoProps Choupo-dev";
    fittedInCase  "data/curation/electrolytes/Na-SO4";
    reviewStatus  autoPromoted;
    fitGrade      warning;   // DEV.md 4c C311: max relative error of gamma_pm or phi over the fitted points, graded 2 / 5 / 10 %
    fitGradeBasis inSample;   // DEV.md 4c C300 rule 1: the residual of the points it was fitted to
    fitGradeCap   ( singleTemperature singleLaboratory );   // DEV.md 4c C300 rule 2: in-sample clean, capped -- one temperature, one evaluation
    fitGradeMaxRelativeError_pct 0.7881;
    promotedBy    "bin/curate/electrolytes_c311.py promote";
    promotedDate  "2026-11-11";
    reviewReason  "regressed by bin/curate/electrolytes_c311.py from a hand-checked transcription of an evaluated table; not yet read back by a human";
    reuse         "Choupo's own regression; the evaluated values belong to the cited compilation";
    fitDate       "2026-11-11";
    evidence
    (
        {
            role      fit;
            dataset   "constant/experiments/Na-SO4.dat";
            doi       "10.1063/1.555646";
            provenance evaluated;
        }
    );
    inSample
    {
        gammaAAD_pct 0.2238;
        phiAAD_pct   0.3261;
        max_pct      0.7881;
        nPoints      10;
    }
    heldOut
    {
        kind         interleavedSameSource;   // every 4th point of the same evaluation: NOT a validation
        gammaAAD_pct 0.1165;
        phiAAD_pct   0.3765;
        max_pct      0.6747;
        nPoints      3;
        grade        clean;
    }
    validity
    {
        temperature { min 298.15 K; max 298.15 K; }
        molality    { min 0.1; max 1.75; }   // mol/kg
        note        "the span of the fitted evaluated values; outside it the salt is an extrapolation";
    }
    review
    {
        by none;
    }
}
`,an=`/*--------------------------------*- Choupo -*--------------------------------*\\
  Pitzer binary ion-interaction parameters --- Ca(2+) / Cl(-) in aqueous
  solution.
  Role: the beta0 / beta1 / Cphi set (alpha1 2.0) of the Pitzer virial
  expansion -- the cation-anion second and third virial coefficients behind
  the mean activity and osmotic coefficients of the Ca-Cl pair, consumed by
  the pitzer (single-salt VLE) and pitzerHMW (multi-ion speciation) activity
  engines.
  Carries a nonzero beta2 term (with alpha2) -- the extra short-range virial
  used for strongly associating pairs.
  Source: Appelo, Appl. Geochem. 55 (2015) 62 -- full provenance string in
  the source entry below.
\\*-----------------------------------------------------------------------------*/
recordType electrolytePairParameters;
schemaVersion 1;

model pitzer;

pair { cation Ca; anion Cl; }

parameters
{
    beta0 0.3159;
    beta1 1.614;
    beta2 -1.13;
    Cphi 0.00014;
    alpha1 2.0;
    alpha2 12.0;
}

source "Appelo, Appl. Geochem. 55 (2015) 62";
`,sn=`/*--------------------------------*- Choupo -*--------------------------------*\\
  Pitzer binary ion-interaction parameters --- Mg(2+) / SO4(2-) in aqueous
  solution.
  Role: the beta0 / beta1 / Cphi set (alpha1 2.0) of the Pitzer virial
  expansion -- the cation-anion second and third virial coefficients behind
  the mean activity and osmotic coefficients of the Mg-SO4 pair, consumed by
  the pitzer (single-salt VLE) and pitzerHMW (multi-ion speciation) activity
  engines.
  Carries a nonzero beta2 term (with alpha2) -- the extra short-range virial
  used for strongly associating pairs.
  Source: Appelo, Appl. Geochem. 55 (2015) 62 -- full provenance string in
  the source entry below.
\\*-----------------------------------------------------------------------------*/
recordType electrolytePairParameters;
schemaVersion 1;

model pitzer;

pair { cation Mg; anion SO4; }

parameters
{
    beta0 0.2135;
    beta1 3.367;
    beta2 -32.45;
    Cphi 0.02875;
    alpha1 1.4;
    alpha2 12.0;
}

source "Appelo, Appl. Geochem. 55 (2015) 62";
`,on=`/*--------------------------------*- Choupo -*--------------------------------*\\
  Pitzer binary ion-interaction parameters --- Na(+) / SO4(2-) in aqueous
  solution.
  Role: the beta0 / beta1 / Cphi set (alpha1 2.0) of the Pitzer virial
  expansion -- the cation-anion second and third virial coefficients behind
  the mean activity and osmotic coefficients of the Na-SO4 pair, consumed by
  the pitzer (single-salt VLE) and pitzerHMW (multi-ion speciation) activity
  engines.
  Source: Appelo, Appl. Geochem. 55 (2015) 62 -- full provenance string in
  the source entry below.
\\*-----------------------------------------------------------------------------*/
recordType electrolytePairParameters;
schemaVersion 1;

model pitzer;

pair { cation Na; anion SO4; }

parameters
{
    beta0 0.0273;
    beta1 0.956;
    beta2 0.0;
    Cphi 0.003418;
    alpha1 2.0;
    alpha2 12.0;
}

source "Appelo, Appl. Geochem. 55 (2015) 62";
`,tt=Object.assign({"../../../../data/curation/electrolytes/Ca-Cl/constant/experiments/Ca-Cl.dat":Jt,"../../../../data/curation/electrolytes/K-Cl/constant/experiments/K-Cl.dat":Yt,"../../../../data/curation/electrolytes/Na-Cl/constant/experiments/Na-Cl.dat":Xt,"../../../../data/curation/electrolytes/Na-SO4/constant/experiments/Na-SO4.dat":Zt}),rn=Object.assign({"../../../../data/standards/parameters/eNRTL/Ca-Cl.dat":Qt,"../../../../data/standards/parameters/eNRTL/K-Cl.dat":en,"../../../../data/standards/parameters/eNRTL/Na-Cl.dat":tn,"../../../../data/standards/parameters/eNRTL/Na-SO4.dat":nn}),ln=Object.assign({"../../../../data/standards/parameters/Pitzer/pairs/Ca-Cl.dat":an,"../../../../data/standards/parameters/Pitzer/pairs/K-Cl.dat":zt,"../../../../data/standards/parameters/Pitzer/pairs/Mg-SO4.dat":sn,"../../../../data/standards/parameters/Pitzer/pairs/Na-Cl.dat":Et,"../../../../data/standards/parameters/Pitzer/pairs/Na-SO4.dat":on}),yt=t=>t.replace(/^(\.\.\/)+/,""),pe=t=>`${t.cation}-${t.anion}`;function cn(t){const a=pe(t),n=Object.keys(tt).find(i=>i.endsWith(`/${a}/constant/experiments/${a}.dat`));if(!n)throw new Error(`electrolyteModelsData: no measured table bundled for ${a}`);return It(t.id,yt(n),tt[n])}const hn=t=>t.file.replace(/\/constant\/experiments\/[^/]+$/,"");function ce(t,a){const n=a==="eNRTL"?rn:ln,i=pe(t),c=Object.keys(n).find(m=>m.endsWith(`/${i}.dat`));if(!c)return null;const o=n[c].replace(/\/\*[\s\S]*?\*\//g,"").replace(/\/\/[^\n]*/g,""),l=m=>new RegExp(`\\b${m}\\s+"([^"]*)"\\s*;`).exec(o)?.[1]??"";return{model:a,file:yt(c),source:l("source"),fittedInCase:l("fittedInCase")}}function nt(t,a){if(!t)return{inSample:!1,heldOutRows:!1,why:"no record"};if(t.fittedInCase&&t.fittedInCase===hn(a))return{inSample:!0,heldOutRows:!0,why:`regressed in ${t.fittedInCase} to this table, every fourth row held out`};const n=/^(?:[A-Z][.-]\s*)*(?:[A-Z]\.\s*)*([A-Z][a-z]+)/.exec(a.source.replace(/^\s+/,""))?.[1]??"";return n&&new RegExp(`\\b${n}\\b`).test(t.source)?{inSample:!0,heldOutRows:!1,why:`its source line names ${n}, the author of this table: a refit to it`}:{inSample:!1,heldOutRows:!1,why:"not regressed to this table in the tree; but the source it names fitted the parameters to measurements of this salt at 25 °C, so the error is the quality of a fit, not a prediction"}}const de="var(--mantine-color-default-border)",at="var(--mantine-color-dimmed)",he="var(--mantine-color-text)",B={pitzer:{key:"pitzer",label:"Pitzer",color:"#2a78d6"},enrtl:{key:"enrtl",label:"eNRTL",color:"#1baf7a",dash:"10 4"},davies:{key:"davies",label:"Davies, free ions",color:"#c0392b"},daviesPairs:{key:"daviesPairs",label:"Davies + catalogue ion pairs",color:"#eb6834",dash:"4 3"},dh:{key:"dh",label:"Debye-Hückel limit",color:"#8a8f98",dash:"2 3"}},st={key:"dhAlone",label:"Debye-Hückel limit",color:"#5c6370"},f=(t,a=3)=>{if(!Number.isFinite(t))return"—";const n=t.toFixed(a);return/^-0\.?0*$/.test(n)?n.slice(1):n},D=(t,a=2)=>Number.isFinite(t)?`${t>0?"+":""}${f(t,a)} %`:"—";function Ee({lines:t,dots:a,xLabel:n,yLabel:i,logX:c,x0:o,x1:l,y0:m,y1:u,aria:y}){const S=h=>c?Math.log10(h):h,x=h=>64+540*(S(h)-S(o))/(S(l)-S(o)),_=h=>14+294*(1-(h-m)/(u-m)),R=[];if(c)for(let h=Math.ceil(Math.log10(o)-1e-9);h<=Math.log10(l)+1e-9;h++)R.push(10**h);else{const h=it((l-o)/6);for(let T=Math.ceil(o/h)*h;T<=l+1e-9;T+=h)R.push(T)}const N=it((u-m)/6),O=[];for(let h=Math.ceil(m/N)*N;h<=u+1e-9;h+=N)O.push(Number(h.toFixed(10)));const W=h=>h.filter(([T])=>T>=o&&T<=l).map(([T,M],fe)=>`${fe?"L":"M"}${x(T).toFixed(1)},${_(M).toFixed(1)}`).join(" "),Y=`clip-${y.replace(/\W/g,"")}`;return e.jsx(j,{style:{width:"100%",maxWidth:680,margin:"0 auto"},children:e.jsxs("svg",{viewBox:"0 0 620 360",width:"100%",role:"img","aria-label":y,style:{display:"block"},children:[e.jsx("defs",{children:e.jsx("clipPath",{id:Y,children:e.jsx("rect",{x:64,y:14,width:540,height:294})})}),e.jsx("rect",{x:64,y:14,width:540,height:294,fill:"none",stroke:de}),R.map(h=>e.jsxs("g",{children:[e.jsx("line",{x1:x(h),x2:x(h),y1:14,y2:308,stroke:de,strokeWidth:.6}),e.jsx("text",{x:x(h),y:326,fontSize:13,textAnchor:"middle",fill:at,children:ot(h)})]},`x${h}`)),O.map(h=>e.jsxs("g",{children:[e.jsx("line",{x1:64,x2:604,y1:_(h),y2:_(h),stroke:de,strokeWidth:.6}),e.jsx("text",{x:58,y:_(h)+4,fontSize:13,textAnchor:"end",fill:at,children:ot(h)})]},`y${h}`)),e.jsx("text",{x:668/2,y:352,fontSize:14,textAnchor:"middle",fill:he,children:n}),e.jsx("text",{x:16,y:322/2,fontSize:14,textAnchor:"middle",fill:he,transform:`rotate(-90 16 ${322/2})`,children:i}),e.jsxs("g",{clipPath:`url(#${Y})`,children:[t.map(h=>e.jsx("path",{d:W(h.pts),fill:"none",stroke:h.style.color,strokeWidth:2.2,strokeDasharray:h.style.dash},h.style.key)),a.pts.map(([h,T],M)=>e.jsx("circle",{cx:x(h),cy:_(T),r:4,fill:he},`d${M}`)),(a.open??[]).map(([h,T],M)=>e.jsx("circle",{cx:x(h),cy:_(T),r:5,fill:"var(--mantine-color-body)",stroke:he,strokeWidth:1.6},`o${M}`))]})]})})}function it(t){const a=10**Math.floor(Math.log10(t)),n=t/a;return(n<1.5?1:n<3?2:n<7?5:10)*a}function ot(t){return t===0?"0":Math.abs(t)>=1e3||Math.abs(t)<.01?t.toExponential(0):String(Number(t.toPrecision(3)))}function rt({items:t,dotLabel:a,openLabel:n}){return e.jsxs(ct,{gap:14,wrap:"wrap",children:[e.jsxs(d,{size:"xs",children:[e.jsx(d,{span:!0,fw:700,children:"●"})," ",a]}),n&&e.jsxs(d,{size:"xs",children:[e.jsx(d,{span:!0,fw:700,children:"○"})," ",n]}),t.map(i=>e.jsxs(d,{size:"xs",children:[e.jsx(d,{span:!0,c:i.color,fw:700,children:i.dash?"╌╌":"——"})," ",i.label]},i.key))]})}function V({title:t,origin:a,originNote:n,children:i}){return e.jsxs(j,{px:"sm",py:"sm",style:{border:`1px solid ${de}`,borderRadius:6,minWidth:0},children:[e.jsx(d,{size:"xs",c:"dimmed",fw:700,tt:"uppercase",mb:4,children:t}),e.jsx(j,{mb:8,children:e.jsx(At,{of:a,note:n})}),e.jsx(ee,{gap:10,children:i})]})}function ze({children:t}){return e.jsx(j,{style:{overflowX:"auto",maxWidth:"100%"},children:t})}function F({busy:t,err:a,what:n}){return a?e.jsx(Mt,{color:"red",variant:"light",title:"the engine run did not finish",children:e.jsx(d,{size:"sm",style:{overflowWrap:"anywhere"},children:a})}):t?e.jsxs(ct,{gap:8,wrap:"nowrap",children:[e.jsx(Pt,{size:"xs"}),e.jsx(d,{size:"sm",c:"dimmed",children:n})]}):null}const U=Lt(Ot),dn={NaCl:"NaCl",KCl:"KCl",CaCl2:"CaCl₂",Na2SO4:"Na₂SO₄"};function bn(){const[t,a]=C.useState(ae[0].id),n=Wt(t),i=C.useMemo(()=>cn(n),[n]),c=C.useMemo(()=>Gt(i),[i]),o=C.useMemo(()=>pt(n,c),[n,c]),l=q(()=>K(k,le(n,c,"Pitzer")),`P|${n.id}`,"choupoProps"),m=q(()=>K(k,le(n,c,"eNRTL")),`E|${n.id}`,"choupoProps"),u=q(()=>K(k,le(n,c,"Davies")),`D|${n.id}`,"choupoProps"),y=q(()=>K(k,le(n,c,"DaviesPairs")),`DP|${n.id}`,"choupoProps"),w=C.useMemo(()=>Re(l.result,n,"Pitzer",c),[l.result,n,c]),g=C.useMemo(()=>Re(m.result,n,"eNRTL",c),[m.result,n,c]),b=C.useMemo(()=>Ze(u.result,n,o,!1),[u.result,n,o]),L=C.useMemo(()=>Ze(y.result,n,o,!0),[y.result,n,o]),$=C.useMemo(()=>Ft(y.result,n,o),[y.result,n,o]),I=ce(n,"Pitzer"),S=ce(n,"eNRTL"),x=nt(I,i),_=nt(S,i),R=[{key:"pitzer",label:"Pitzer",style:B.pitzer,pts:w,inSample:x.inSample?`yes: ${x.why}`:`no: ${x.why}`,heldOut:x.heldOutRows},{key:"enrtl",label:"eNRTL",style:B.enrtl,pts:g,inSample:_.inSample?`yes: ${_.why}`:`no: ${_.why}`,heldOut:_.heldOutRows},{key:"davies",label:"Davies, free ions",style:B.davies,pts:b,inSample:"no: Davies has no fitted parameter",heldOut:!1},{key:"daviesPairs",label:"Davies + ion pairs",style:B.daviesPairs,pts:L,inSample:"no: the ion pairs' constants are the catalogue's",heldOut:!1}],N=C.useMemo(()=>L.some(s=>{const p=b.find(v=>v.m===s.m);return p!==void 0&&Math.abs(s.gamma/p.gamma-1)>.005}),[b,L]),O=i.rows[i.rows.length-1].m,W=A(n,O),Y=s=>s.index%4===3&&s.index!==0&&s.index!==i.rows.length-1,h=R.some(s=>s.heldOut),T=C.useMemo(()=>{const s=[];for(let p=0;p<=60;p++){const v=Math.sqrt(W)*p/60;s.push([v,-3*se*n.zc*n.za*v])}return s},[n,W]),M=i.rows.map(s=>[Math.sqrt(A(n,s.m)),Math.log(s.gamma)]),fe=Math.min(...M.map(s=>s[1])),gt=Math.max(...M.map(s=>s[1]),0),H=i.rows[0],ye=Qe(n,H.m),ge=R.filter(s=>s.key!=="daviesPairs"||N),Oe=(s,p)=>({style:s.style,pts:s.pts.map(v=>[v.m,v[p]])}),vt={style:B.dh,pts:c.map(s=>[s,Qe(n,s).gamma])},We=i.rows.map(s=>s.gamma),He=i.rows.map(s=>s.phi),Ie=Math.max(0,Math.min(...We)*.7),Ge=Math.max(1.05,Math.max(...We)*1.25),wt=Math.min(.5,Math.min(...He)-.1),bt=Math.max(1.1,Math.max(...He)+.1),Ke=s=>{const p=[],v=[];for(const E of i.rows)(h&&Y(E)?v:p).push([E.m,E[s]]);return{closed:p,open:v}},qe=Ke("gamma"),Be=Ke("phi"),ve=R.filter(s=>s.pts.some(p=>p.gamma>Ge||p.gamma<Ie)).map(s=>s.label),Ve=i.rows.map(s=>String(s.m)),[Fe,xt]=C.useState("0.5"),G=Ve.includes(Fe)?Number(Fe):i.rows[Math.min(4,i.rows.length-1)].m,Ue=i.rows.find(s=>s.m===G),Je=et(n,G,Ue.phi),X=Ne(Je),[P,re]=C.useState({ionicStrength:"0.1to0.5",severalSalts:!1,otherSolvent:!1,acidGases:!1}),z=Ut(P),we=Pe(b,i,n,.1),be=Pe(b,i,n,.5),xe=Pe(w,i,n,.5),Te=De,[Ce,Tt]=C.useState(!1),je=q(Ce?()=>K(k,ke(Te,"Pitzer",Se)):null,"R|Pitzer|MgSO4","choupoProps"),Z=q(Ce?()=>K(k,ke(Te,"eNRTL",Se)):null,"R|eNRTL|MgSO4","choupoProps"),Ye=Re(je.result,Te,"Pitzer",Se),Xe=(Z.log??"").split(`
`).map(s=>s.trim()).find(s=>/fatal error|no parameters/i.test(s))??null,Ct=l.busy||m.busy||u.busy||y.busy;return e.jsx(j,{style:{flex:1,minHeight:0,overflowY:"auto"},px:"md",py:"sm",children:e.jsxs(ee,{gap:"md",style:{maxWidth:980,margin:"0 auto"},children:[e.jsxs(j,{children:[e.jsx(jt,{order:3,children:"Choosing an electrolyte activity model"}),e.jsx(d,{size:"sm",c:"dimmed",mt:4,children:"You have a solution with salts and must declare an activity model for it. This page puts Davies, Pitzer and eNRTL side by side on one salt against its measured activity and osmotic coefficients at 25 °C, turns the difference into the osmotic pressure a membrane must overcome, and ends with the choice as four questions. The models are run by the engine in your browser; the page draws them and does only the arithmetic it prints."})]}),e.jsxs(V,{title:"your salt",origin:"assumption",originNote:"the salt is your choice; every panel below follows it",children:[e.jsx(Q,{fullWidth:!0,data:ae.map(s=>({value:s.id,label:dn[s.id]??s.id})),value:t,onChange:a}),e.jsxs(d,{size:"sm",children:[n.label,": ",n.nuC," ",n.cation,e.jsx("sup",{children:n.zc>1?`${n.zc}+`:"+"})," and ",n.nuA," ",n.anion,e.jsx("sup",{children:n.za>1?`${n.za}−`:"−"})," per formula unit, so I = ",f(A(n,1),0)," × m. Measured table: ",i.rows.length," rows from ",f(i.rows[0].m,2)," to ",f(O,2)," mol/kg (I up to ",f(W,2)," mol/kg)."]})]}),U(1),e.jsxs(V,{title:"the Debye-Hückel limit alone, against the measured table",origin:["page","reference"],originNote:"the line is this page's arithmetic with the engine's A_phi = 0.3915; the dots are the evaluated table",children:[e.jsx(Ee,{aria:"limiting law plot",logX:!1,x0:0,x1:Math.sqrt(W)*1.02,y0:Math.min(fe,-3*se*n.zc*n.za*Math.sqrt(W))*1.05-.05,y1:Math.max(.1,gt+.1),xLabel:"√I, (mol/kg)^½",yLabel:"ln γ±",lines:[{style:st,pts:T}],dots:{label:"measured",pts:M}}),e.jsx(rt,{items:[st],dotLabel:`measured: ${lt(i)}`}),e.jsxs(d,{size:"xs",c:"dimmed",children:["The line is ln γ± = −3 × ",se," × |",n.zc," × ",n.za,"| × √I. At the table's first row, m = ",f(H.m,2)," mol/kg (I = ",f(A(n,H.m),2),"), it gives γ± = ",f(ye.gamma,4)," against the measured ",f(H.gamma,4),"(",D(100*(ye.gamma-H.gamma)/H.gamma,1),"), and φ = ",f(ye.phi,4)," against"," ",f(H.phi,4),". A straight line in √I is all the limit knows."]})]}),U(2),U(3),e.jsxs(V,{title:"the four model runs, against the measured table",origin:["engine","page","reference"],originNote:"each model's γ± and φ computed by choupoProps in this browser; Davies' φ, the mean with ion pairs and every deviation are this page's arithmetic; the dots are the evaluated table",children:[e.jsxs(ee,{gap:4,children:[e.jsx(F,{busy:l.busy,err:l.err,what:"Pitzer: running choupoProps in your browser…"}),e.jsx(F,{busy:m.busy,err:m.err,what:"eNRTL: running choupoProps in your browser…"}),e.jsx(F,{busy:u.busy,err:u.err,what:"Davies, free ions: running the speciation solver…"}),e.jsx(F,{busy:y.busy,err:y.err,what:"Davies with the catalogue's ion pairs: running…"})]}),e.jsx(Ee,{aria:"mean activity coefficient plot",logX:!0,x0:.001,x1:O*1.05,y0:Ie,y1:Ge,xLabel:"m, mol/kg (log scale)",yLabel:"γ±",lines:[vt,...[...ge].reverse().map(s=>Oe(s,"gamma"))],dots:{label:"measured",pts:qe.closed,open:qe.open}}),e.jsx(Ee,{aria:"osmotic coefficient plot",logX:!0,x0:.001,x1:O*1.05,y0:wt,y1:bt,xLabel:"m, mol/kg (log scale)",yLabel:"φ",lines:[...ge].reverse().map(s=>Oe(s,"phi")),dots:{label:"measured",pts:Be.closed,open:Be.open}}),e.jsx(rt,{items:[...ge.map(s=>s.style),B.dh],dotLabel:`measured: ${lt(i)}`,openLabel:h?"a row the eNRTL regression held out":void 0}),!Ct&&ve.length>0&&e.jsxs(d,{size:"xs",c:"dimmed",children:[ve.join(" and ")," leave",ve.length===1?"s":""," the frame of the γ± plot, which is set by the measurements; the table below has the numbers. Davies is run only up to I = ",ne," mol/kg."]}),e.jsxs(d,{size:"xs",c:"dimmed",children:[N?`With the catalogue's equilibria the speciation solver forms ${$.join(", ")}: the dashed orange curve is the stoichiometric mean γ± computed by this page from the free-ion activities the engine wrote, ((a₊^ν₊ a₋^ν₋)/((ν₊m)^ν₊ (ν₋m)^ν₋))^(1/ν).`:$.length?`With the catalogue's equilibria the speciation solver forms ${$.join(", ")} only in traces: Davies with and without them agrees to 0.5 % at every molality, and only one Davies curve is drawn.`:"The catalogue holds no ion pair for these ions: one Davies curve is drawn."," ","Davies' φ is −ln a_w /(M_w ν m) with M_w = ",me," kg/mol, from the engine's a_w."]}),e.jsx(ze,{children:e.jsxs(r,{fz:"xs",striped:!0,withTableBorder:!0,style:{minWidth:720},children:[e.jsx(r.Thead,{children:e.jsxs(r.Tr,{children:[e.jsx(r.Th,{children:"model"}),e.jsx(r.Th,{children:"γ±: mean |δ|"}),e.jsx(r.Th,{children:"γ±: worst δ (at m)"}),e.jsx(r.Th,{children:"φ: mean |δ|"}),e.jsx(r.Th,{children:"φ: worst δ"}),e.jsx(r.Th,{children:"held-out rows: mean |δ γ±|"}),e.jsx(r.Th,{children:"fitted to this table?"})]})}),e.jsx(r.Tbody,{children:R.filter(s=>s.key!=="daviesPairs"||N).map(s=>{const p=Me(s.pts,i,"gamma"),v=Me(s.pts,i,"phi"),E=s.heldOut?Me(s.pts,i,"gamma",Y):null,_e=s.key==="pitzer"?I:s.key==="enrtl"?S:null;return e.jsxs(r.Tr,{children:[e.jsx(r.Td,{children:e.jsx(d,{span:!0,size:"xs",c:s.style.color,fw:700,children:s.label})}),e.jsx(r.Td,{children:p?`${f(p.aadPct,2)} % (${p.n} rows)`:"—"}),e.jsx(r.Td,{children:p?`${D(p.worstSigned)} (${f(p.worstM,2)})`:"—"}),e.jsx(r.Td,{children:v?`${f(v.aadPct,2)} %`:"—"}),e.jsx(r.Td,{children:v?`${D(v.worstSigned)} (${f(v.worstM,2)})`:"—"}),e.jsx(r.Td,{children:E?`${f(E.aadPct,2)} % (${E.n} rows)`:"—"}),e.jsxs(r.Td,{children:[e.jsx(_t,{size:"xs",variant:"light",color:s.inSample.startsWith("yes")?"yellow":"gray",children:s.inSample.startsWith("yes")?"in-sample":"not regressed in this tree"})," ",e.jsx(d,{span:!0,size:"xs",children:s.inSample.replace(/^(yes|no): /,"")}),_e&&e.jsxs(d,{size:"xs",c:"dimmed",style:{overflowWrap:"anywhere"},children:[_e.file,': source "',_e.source,'"']})]})]},s.key)})})]})}),e.jsxs(d,{size:"xs",c:"dimmed",children:["δ = 100 (model − measured)/measured, at each row of the table (every model was run at exactly those molalities). Davies is compared only on the rows with I ≤ ",ne," mol/kg. A model marked in-sample was regressed to this very table: its δ shows that the fit worked, not that the model predicts.",h?" The held-out rows were left out of that regression (every fourth row), but they are interleaved points of the same source and cannot contradict it.":""]}),e.jsxs("details",{children:[e.jsx("summary",{style:{cursor:"pointer"},children:e.jsx(d,{span:!0,size:"xs",children:"What the page declared to the engine for Pitzer and eNRTL"})}),e.jsx(St,{block:!0,fz:"xs",style:{overflowX:"auto"},children:ut(n,"Pitzer")}),e.jsxs(d,{size:"xs",mt:4,children:["eNRTL: the same file with ",e.jsx(d,{span:!0,ff:"monospace",size:"xs",children:"model eNRTL;"}),". Davies: a ",e.jsx(d,{span:!0,ff:"monospace",size:"xs",children:"speciate"})," operation with"," ",e.jsx(d,{span:!0,ff:"monospace",size:"xs",children:"activityModel davies;"})," on an aqueous surface declaring"," ",e.jsx(d,{span:!0,ff:"monospace",size:"xs",children:"model Davies;"}),"."]})]})]}),U(4),e.jsxs(V,{title:"the osmotic pressure at one molality",origin:["engine","page","assumption"],originNote:"a_w from each engine run; Π from a_w is this page's arithmetic; the molality is your choice",children:[e.jsx(Rt,{label:"molality, mol/kg (a row of the measured table)",data:Ve,value:String(G),onChange:s=>{s&&xt(s)},allowDeselect:!1,style:{maxWidth:320}}),e.jsx(ze,{children:e.jsxs(r,{fz:"xs",striped:!0,withTableBorder:!0,style:{minWidth:340},children:[e.jsx(r.Thead,{children:e.jsxs(r.Tr,{children:[e.jsx(r.Th,{children:"from"}),e.jsx(r.Th,{children:"a_w"}),e.jsx(r.Th,{children:"Π, bar"}),e.jsx(r.Th,{children:"vs measured"})]})}),e.jsxs(r.Tbody,{children:[e.jsxs(r.Tr,{children:[e.jsxs(r.Td,{children:["measured, φ = ",f(Ue.phi,4)]}),e.jsx(r.Td,{children:f(Je,6)}),e.jsx(r.Td,{children:f(X,2)}),e.jsx(r.Td,{children:"—"})]}),(()=>{const s=et(n,G,1),p=Ne(s);return e.jsxs(r.Tr,{children:[e.jsx(r.Td,{children:"ideal, φ = 1"}),e.jsx(r.Td,{children:f(s,6)}),e.jsx(r.Td,{children:f(p,2)}),e.jsx(r.Td,{children:D(100*(p-X)/X,1)})]})})(),R.filter(s=>s.key!=="daviesPairs"||N).map(s=>{const p=s.pts.find(E=>E.m===G),v=p?Ne(p.aw):NaN;return e.jsxs(r.Tr,{children:[e.jsx(r.Td,{children:e.jsx(d,{span:!0,size:"xs",c:s.style.color,fw:700,children:s.label})}),e.jsx(r.Td,{children:p?f(p.aw,6):s.key.startsWith("davies")&&A(n,G)>ne?`not run above I = ${ne}`:"—"}),e.jsx(r.Td,{children:p?f(v,2):"—"}),e.jsx(r.Td,{children:p?D(100*(v-X)/X,1):"—"})]},s.key)})]})]})}),e.jsxs(d,{size:"xs",c:"dimmed",children:["The models' a_w are the engine's; the measured row's a_w is this page's, from the table's φ by ln a_w = −ν m M_w φ with ν = ",Ae(n)," and M_w = ",me," kg/mol; the ideal row is φ = 1, van 't Hoff's law in its molality form (pure-water molar volume, not the solution's molarity). Π = −(R T / V̄_w) ln a_w with R = ",dt," J/(mol K), T = ",J," K and V̄_w = ",(ht*1e5).toFixed(3)," × 10⁻⁵ m³/mol, the engine's molar volume of water at 25 °C; 1 bar = 10⁵ Pa."]})]}),U(5),e.jsxs(V,{title:"the choice",origin:["engine","page","assumption"],originNote:"your answers are inputs; the deviations quoted are this page's arithmetic on the engine's runs above",children:[e.jsxs(ee,{gap:8,children:[e.jsxs(j,{children:[e.jsx(d,{size:"sm",fw:500,mb:4,children:"Does the solution carry dissolved NH3, CO2 or H2S?"}),e.jsx(Q,{size:"xs",data:["no","yes"],value:P.acidGases?"yes":"no",onChange:s=>re({...P,acidGases:s==="yes"})})]}),e.jsxs(j,{children:[e.jsx(d,{size:"sm",fw:500,mb:4,children:"Is there a solvent besides water (an alcohol, a glycol)?"}),e.jsx(Q,{size:"xs",data:["no","yes"],value:P.otherSolvent?"yes":"no",onChange:s=>re({...P,otherSolvent:s==="yes"})})]}),e.jsxs(j,{children:[e.jsx(d,{size:"sm",fw:500,mb:4,children:"More than one salt?"}),e.jsx(Q,{size:"xs",data:["no","yes"],value:P.severalSalts?"yes":"no",onChange:s=>re({...P,severalSalts:s==="yes"})})]}),e.jsxs(j,{children:[e.jsx(d,{size:"sm",fw:500,mb:4,children:"Highest ionic strength, mol/kg"}),e.jsx(Q,{size:"xs",data:[{value:"below0.1",label:"below 0.1"},{value:"0.1to0.5",label:"0.1 to 0.5"},{value:"above0.5",label:"above 0.5"}],value:P.ionicStrength,onChange:s=>re({...P,ionicStrength:s})})]})]}),e.jsxs(j,{px:"sm",py:"xs",style:{borderLeft:"3px solid var(--mantine-color-accent-6, #2a78d6)"},children:[e.jsxs(d,{size:"sm",fw:700,children:["Declare ",z.model==="pitzer"?"Pitzer":z.model==="davies"?"Davies":z.model==="pitzerHMW"?"pitzerHMW":z.model==="eNRTL"?"eNRTL":"edwardsPitzer"]}),e.jsx(d,{size:"xs",ff:"monospace",style:{overflowWrap:"anywhere"},children:z.declare}),e.jsx(ee,{gap:2,mt:4,children:z.because.map(s=>e.jsx(d,{size:"sm",children:s},s))}),z.seeTool&&e.jsxs(d,{size:"xs",c:"dimmed",mt:4,children:["The EduTool ",e.jsx(d,{span:!0,ff:"monospace",size:"xs",children:z.seeTool})," works with this model."]})]}),e.jsxs(d,{size:"sm",children:["Measured on ",n.label," above: Davies on free ions is"," ",we?`${D(we.pct,1)} off the table at I = ${f(we.I,2)}`:"not yet run",be?` and ${D(be.pct,1)} at I = ${f(be.I,2)} mol/kg`:"","; Pitzer is"," ",xe?`${D(xe.pct,2)} at I = ${f(xe.I,2)}`:"not yet run",".",n.id==="Na2SO4"&&N?" On this salt Davies comes within a few per cent at low ionic strength only with the NaSO4− ion pair (the dashed orange curve of step 3), which is chemistry the catalogue declares, not something Davies knows.":""]})]}),U(6),e.jsxs(V,{title:"MgSO4 under both models",origin:["engine","reference"],originNote:"two runs of choupoProps in this browser; the record list is the catalogue's files as bundled",children:[!Ce&&e.jsx(Nt,{size:"xs",variant:"default","data-engine-run":"electrolyteModels-MgSO4",onClick:()=>Tt(!0),style:{alignSelf:"flex-start"},children:"Run MgSO4 under Pitzer and under eNRTL"}),e.jsx(F,{busy:je.busy,err:null,what:"running Pitzer on MgSO4…"}),e.jsx(F,{busy:Z.busy,err:null,what:"running eNRTL on MgSO4…"}),e.jsxs(j,{children:[e.jsx(d,{size:"sm",fw:700,children:"Pitzer"}),e.jsx(d,{size:"sm",children:Ye.length?Ye.map(s=>`γ± = ${f(s.gamma,4)} at ${s.m} mol/kg`).join("; "):je.err??"—"})]}),e.jsxs(j,{children:[e.jsx(d,{size:"sm",fw:700,children:"eNRTL"}),Z.err||Xe?e.jsx(d,{size:"xs",ff:"monospace",c:"red",style:{overflowWrap:"anywhere"},children:Xe??Z.err}):e.jsx(d,{size:"sm",children:Z.result?"an answer -- the catalogue now holds an eNRTL record for Mg-SO4":"—"})]}),e.jsx(d,{size:"xs",c:"dimmed",children:"No MgSO4 table is in the tree, so the Pitzer numbers here are compared with nothing; the point is that one model answers and the other refuses, naming the file it looked for."}),e.jsx(ze,{children:e.jsxs(r,{fz:"xs",striped:!0,withTableBorder:!0,style:{minWidth:300},children:[e.jsx(r.Thead,{children:e.jsxs(r.Tr,{children:[e.jsx(r.Th,{children:"salt"}),e.jsx(r.Th,{children:"Pitzer record"}),e.jsx(r.Th,{children:"eNRTL record"})]})}),e.jsx(r.Tbody,{children:[...ae,De].map(s=>{const p=ce(s,"Pitzer"),v=ce(s,"eNRTL");return e.jsxs(r.Tr,{children:[e.jsx(r.Td,{children:s.id}),e.jsx(r.Td,{children:p?`${pe(s)}.dat`:"none"}),e.jsx(r.Td,{children:v?`${pe(s)}.dat`:e.jsx(d,{span:!0,size:"xs",c:"red",children:"none"})})]},s.id)})})]})})]}),e.jsx(Dt,{limits:$t}),e.jsx(kt,{tool:"electrolyte-models"})]})})}function lt(t){const a=(/^(.*?),\s*(?:Osmotic|Evaluated)/.exec(t.source)?.[1]??t.source).replace(/\b[A-Z]\.\s*(?:-?[A-Z]\.\s*)*/g,"").replace(/\s+/g," ").trim(),n=/\((\d{4})\)/.exec(t.source)?.[1]??"";return`${a} (${n}), ${t.location.split(",")[0]}`}export{bn as ElectrolyteModelsTool,lt as tableCite};
