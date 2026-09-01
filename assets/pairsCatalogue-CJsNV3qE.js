import{ao as U,bv as j,b6 as _}from"./index-jf2RX2Xd.js";import{d as A,b as g}from"./catalogue-DdkstPf1.js";/**
 * @license @tabler/icons-react v3.44.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */const q=[["path",{d:"M3 19a9 9 0 0 1 9 0a9 9 0 0 1 9 0",key:"svg-0"}],["path",{d:"M3 6a9 9 0 0 1 9 0a9 9 0 0 1 9 0",key:"svg-1"}],["path",{d:"M3 6l0 13",key:"svg-2"}],["path",{d:"M12 6l0 13",key:"svg-3"}],["path",{d:"M21 6l0 13",key:"svg-4"}]],tt=U("outline","book","Book",q),M=[{id:"carbonate",label:"carbonate (CO₂ / HCO₃⁻ / CO₃²⁻)",master:"HCO3",total:.002,gas:"CO2",counter:{species:"Na",perMaster:1,salt:"NaHCO₃"},note:"the classical Bjerrum system; open it to the atmosphere and the total carbonate stops being an input"},{id:"ammonia",label:"ammonia (NH₄⁺ / NH₃)",master:"NH4",total:.002,gas:"NH3",counter:{species:"Cl",perMaster:1,salt:"NH₄Cl"},note:"the sour-water base; one crossing, at the pKa"},{id:"phosphate",label:"phosphate (H₃PO₄ / H₂PO₄⁻ / HPO₄²⁻ / PO₄³⁻)",master:"PO4",total:.002,counter:{species:"Na",perMaster:3,salt:"Na₃PO₄"},note:"triprotic — three crossings, and the buffer plateaux between them"},{id:"sulfide",label:"sulfide (H₂S / HS⁻)",master:"HS",total:.002,gas:"H2S",counter:{species:"Na",perMaster:1,salt:"NaHS"},note:"the other sour-water family"},{id:"acetate",label:"acetate (CH₃COOH / CH₃COO⁻)",master:"Acetate",total:.002,counter:{species:"Na",perMaster:1,salt:"CH₃COONa"},note:"the textbook weak acid, pKa 4.756"}],et=t=>M.find(e=>e.id===t)??M[0];function E(t,e,n){const o=Math.max(2,Math.round(n)),r=[];for(let i=0;i<o;++i)r.push(t+(e-t)*i/(o-1));return r}const I=t=>`bjerrum-${String(t).padStart(3,"0")}.csv`;function nt(t,e=4,n=4){const o=Math.max(2,Math.round(t)),r=Math.max(1,Math.min(e,Math.floor(o/n))),i=Math.floor(o/r),l=o%r,c=[];let m=0;for(let s=0;s<r;++s){const u=i+(s<l?1:0);c.push({lo:m,hi:m+u}),m+=u}return c}function ot(t){const e=[],n=[];for(const l of t){const c=new Map,m=l.csv.trim().split(/\r?\n/).filter(s=>s.length>0);for(let s=1;s<m.length;++s){const u=m[s].split(","),d=(u[0]??"").trim(),f=(u[1]??"").trim();!d||!f||(e.includes(d)||e.push(d),c.set(d,f))}n.push({pH:l.pH,m:c,q:l.netCharge})}if(e.length===0)return"";const o=n.length>0&&n.every(l=>l.q!==null),i=[["pH",...e,...o?["netCharge"]:[]].join(",")];for(const l of n)i.push([String(l.pH),...e.map(c=>l.m.get(c)??""),...o?[String(l.q)]:[]].join(","));return i.join(`
`)+`
`}function at(t){const e=t.match(/^.*(?:fatal error|\*\*\*).*$/gm),n=[...t.matchAll(/pH\s+(-?[\d.]+)\s+\(given\)/g)];if(!e||e.length===0||n.length===0)return null;const o=Number(n[n.length-1][1]);return Number.isFinite(o)?{pH:o,message:e[e.length-1].trim()}:null}function it(t,e){const n=new Array(e).fill(null),o=/^>>>\s+Operation\s+\[(\d+)\]/gm,r=[];let i;for(;(i=o.exec(t))!==null;)r.push({index:Number(i[1]),at:i.index});const l=/charge balance on the answer:[^\n]*?=\s*(-?[\d.]+(?:[eE][-+]?\d+)?)\s+\(pH GIVEN/;for(let c=0;c<r.length;++c){const s=t.slice(r[c].at,r[c+1]?.at??t.length).match(l),u=r[c].index;if(s&&u>=0&&u<e){const d=Number(s[1]);Number.isFinite(d)&&(n[u]=d)}}return n}function rt(t){const e=new RegExp("^\\s*(?:\\[advisory\\][^\\n]*|\\[chemistry\\] closure[^\\n]*|speciation: pH scale[^\\n]*|aqueous activity:[^\\n]*|K\\(T\\)[^\\n]*|OPEN to [^\\n]*|--\\s+the .*REPLACED by the pin[^\\n]*)$","gm"),n=new Set,o=[];for(const r of t.match(e)??[]){const i=r.trim();n.has(i)||(n.add(i),o.push(i))}return o}const h="explore.csv";function st(t){if(t.estimate){const a=t.estimate;return{propsDict:{operations:[{name:"estimate",type:"estimateComponent",component:a.component,model:a.estimator??"Joback",groups:a.groups.map(v=>({group:v.group,count:v.count})),...a.reference&&Object.keys(a.reference).length>0?{reference:{...a.reference}}:{},...a.polymer&&(a.polymer.packing!==void 0||a.polymer.state!==void 0)?{polymer:{...a.polymer.packing!==void 0?{packing:a.polymer.packing}:{},...a.polymer.state!==void 0?{state:a.polymer.state}:{}}}:{},output:{proposal:"auto"}}]},thermoPackage:{recordType:"thermophysicalPropertySystem",schemaVersion:2,components:["water"],equilibrium:{formulation:"gammaPhi",liquid:{activityModel:{model:"ideal"},standardState:"pureLiquid"},vapour:{fugacityModel:"idealGas"}}},controlDict:{application:"choupoProps",description:"Property Explorer -- estimate a new component (ephemeral)",verbosity:2}}}if(t.bjerrum){const a=t.bjerrum,p=a.indexFrom??0,y={operations:E(a.pHfrom,a.pHto,a.n).map((S,N)=>({name:`pt${String(p+N).padStart(3,"0")}`,type:"speciate",totals:{[a.master]:`${a.total} mol/kg`,...a.counter&&a.counter.total>0?{[a.counter.species]:`${a.counter.total} mol/kg`}:{}},pH:S,...a.atmosphere?{atmosphere:{[a.atmosphere.gas]:`${a.atmosphere.pAtm} atm`}}:{},temperature:a.T,output:{file:I(p+N)}}))},b={recordType:"thermophysicalPropertySystem",schemaVersion:2,components:[...t.components],aqueousProperties:{solvent:"water",activityCoefficients:{model:"Davies",referenceBasis:"aqueousMolality"}}},O={propsDict:y,thermoPackage:b,controlDict:{application:"choupoProps",description:"Property Explorer -- species distribution vs pH (ephemeral)",verbosity:2}},x={...A(t.components),...t.componentFiles??{}};return Object.keys(x).length>0&&(O.extraFiles=x),O}const e={composition:{...t.state.composition}};t.state.P!==void 0&&(e.P=t.state.P),t.state.T!==void 0&&(e.T=t.state.T);const n={};t.state.P!==void 0&&(n.P=t.state.P),t.state.T!==void 0&&(n.T=t.state.T);const o=t.ternary?{name:"explore",type:"propertyScanTernary",mode:t.ternary.mode,state:n,grid:{n:t.ternary.n},...t.ternary.tieStride!==void 0?{tieStride:t.ternary.tieStride}:{},...t.ternary.shard?{shard:{k:t.ternary.shard.k,n:t.ternary.shard.n}}:{},output:{file:h}}:null,r=t.binaryLle?{name:"explore",type:"propertyScanBinary",state:n,grid:{n:t.binaryLle.n},output:{file:h}}:null,i=t.phaseDiagram?{name:"explore",type:"purePhaseDiagram",grid:{n:t.phaseDiagram.grid},...t.phaseDiagram.solid?{solid:{...t.phaseDiagram.solid}}:{},output:{file:h}}:null,l=t.psychrometry?{name:"explore",type:"psychrometricChart",carrier:t.psychrometry.carrier,condensable:t.psychrometry.condensable,P:t.psychrometry.P,TminC:t.psychrometry.TminC,TmaxC:t.psychrometry.TmaxC,grid:{n:t.psychrometry.gridN},relativeHumidity:[...t.psychrometry.rh],wetBulb:[...t.psychrometry.wetBulb],output:{file:h}}:null,c=t.scaling?{name:"explore",type:"scalingScan",...t.scaling.activityModel==="pitzer"?{activityModel:"pitzer"}:{},totals:Object.fromEntries(Object.entries(t.scaling.totals).map(([a,p])=>[a,`${p} mol/kg`])),pH:t.scaling.pH,...t.scaling.pCO2atm!==void 0?{atmosphere:{pCO2:`${t.scaling.pCO2atm} atm`}}:{},...t.scaling.T!==void 0?{temperature:t.scaling.T}:{},...t.scaling.equilibrate&&t.scaling.equilibrate.length>0?{equilibrate:{minerals:[...t.scaling.equilibrate]}}:{},...t.scaling.equilibrate&&t.scaling.equilibrate.length>0&&t.scaling.feedFlowM3h!==void 0?{feedFlow:`${t.scaling.feedFlowM3h} m3/h`}:{},recovery:{from:t.scaling.from,to:t.scaling.to,n:t.scaling.n},output:{file:h}}:null,m=t.gibbsmap?{name:"explore",type:"gibbsMap",elements:[...t.gibbsmap.elements],species:t.gibbsmap.species.map(a=>({name:a.name,atoms:[...a.atoms]})),feed:{...t.gibbsmap.feed},Tgrid:{from:t.gibbsmap.Tfrom,to:t.gibbsmap.Tto,n:t.gibbsmap.nT},Pgrid:{from:t.gibbsmap.Pfrom,to:t.gibbsmap.Pto,n:t.gibbsmap.nP,...t.gibbsmap.logP?{log:"true"}:{}},...t.gibbsmap.deltaT?{temperatureApproach:t.gibbsmap.deltaT}:{},metric:{...t.gibbsmap.metric},output:{file:h}}:null,s=t.steam?{name:"explore",type:"steamTables",...t.steam.mode==="saturation"?{saturation:{from:t.steam.from,to:t.steam.to,n:t.steam.n}}:{isobar:{P:t.steam.P??1e5,from:t.steam.from,to:t.steam.to,n:t.steam.n}},output:{file:h}}:null,u=t.solubility?{name:"explore",type:"solubilityParameter",T:t.solubility.T,output:{file:h}}:null,d={operations:[i??l??o??r??c??m??s??u??{name:"explore",type:"propertyScan1D",vary:{variable:t.axis.variable,from:t.axis.from,to:t.axis.to,n:t.axis.n},state:e,properties:[...t.properties],output:{file:h}}]},f=()=>t.binaryLle!==void 0||t.ternary?.mode==="lle"||t.activityModel?.model==="UNIFAC"?{model:"UNIFAC"}:t.activityModel??{model:"ideal"},T=(()=>{const a=t.transport;if(!a)return null;const p={};a.model&&(p.viscosity={model:a.model}),a.thermalConductivity&&(p.thermalConductivity={model:a.thermalConductivity}),a.diffusivity&&(p.diffusivity={model:a.diffusivity});const y={};a.liquidViscosity&&(y.viscosity={model:a.liquidViscosity}),a.liquidConductivity&&(y.thermalConductivity={model:a.liquidConductivity});const b={};return Object.keys(p).length&&(b.vapour=p),Object.keys(y).length&&(b.liquid=y),Object.keys(b).length?b:null})(),k=t.ternary?.mode==="lle"||t.binaryLle||t.vleTwoLiquid?{recordType:"thermophysicalPropertySystem",schemaVersion:2,components:[...t.components],equilibrium:{formulation:"gammaGamma",liquidPhases:[{name:"liquid1",activityModel:f()},{name:"liquid2",activityModel:f()}],vapour:{fugacityModel:"idealGas"}}}:t.scaling?{recordType:"thermophysicalPropertySystem",schemaVersion:2,components:[...t.components],aqueousProperties:{solvent:"water",activityCoefficients:{model:"Davies",referenceBasis:"aqueousMolality"}}}:{recordType:"thermophysicalPropertySystem",schemaVersion:2,components:[...t.components],equilibrium:{formulation:"gammaPhi",liquid:{activityModel:t.activityModel??{model:"ideal"},standardState:"pureLiquid"},vapour:{fugacityModel:String((t.equationOfState??{model:"idealGas"}).model)}},...T?{transport:T}:{}},D={application:"choupoProps",description:`Property Explorer (interactive; ephemeral -- never written to disk)${t.mode==="pure"?" -- pure-component curves (composition has no effect)":t.mode==="mixture"?" -- mixture property at the stated composition":""}`,verbosity:2},P={propsDict:d,thermoPackage:k,controlDict:D},H={...A(t.components),...t.componentFiles??{}};return Object.keys(H).length>0&&(P.extraFiles=H),P}const w={water:[{group:"H2O",count:1}],ethanol:[{group:"CH3",count:1},{group:"CH2",count:1},{group:"OH",count:1}],nButanol:[{group:"CH3",count:1},{group:"CH2",count:3},{group:"OH",count:1}],nHexane:[{group:"CH3",count:2},{group:"CH2",count:4}],benzene:[{group:"ACH",count:6}],C4H10:[{group:"CH3",count:2},{group:"CH2",count:2}],nPentane:[{group:"CH3",count:2},{group:"CH2",count:3}],isopentane:[{group:"CH3",count:3},{group:"CH2",count:1},{group:"CH",count:1}],nHeptane:[{group:"CH3",count:2},{group:"CH2",count:5}],C8H18:[{group:"CH3",count:2},{group:"CH2",count:6}],cyclohexane:[{group:"CH2",count:6}]};function L(t){let e;try{e=j(_(t))}catch{return null}const n=e.unifac;if(!n||typeof n!="object")return null;const o=n.groups;if(!Array.isArray(o))return null;const r=[];for(const i of o)i&&typeof i=="object"&&typeof i.group=="string"&&typeof i.count=="number"&&r.push({group:i.group,count:i.count});return r.length?r:null}function lt(t){const e={};if(!t)return e;for(const[n,o]of Object.entries(t)){if(!/(^|\/)constant\/components\/[^/]+\.dat$/.test(n))continue;let r;try{r=j(_(o))}catch{continue}const i=typeof r.name=="string"?r.name:"";if(!i)continue;const l=L(o);l&&(e[i]=l)}return e}function ct(t,e={}){return Object.prototype.hasOwnProperty.call(e,t)||Object.prototype.hasOwnProperty.call(w,t)}function R(t,e={}){const n={};for(const o of t){const r=e[o]??w[o];r&&(n[o]=r.map(i=>({group:i.group,count:i.count})))}return n}function B(t,e){const n=g(t[0],e)?.tb,o=g(t[1],e)?.tb;return typeof n=="number"&&typeof o=="number"&&o<n?[t[1],t[0]]:t}function mt(t){const e=B(t.pair,t.catalogue),n=e[0],o=e[1],r=t.kind!=="gamma",i=r?["T_bubble",`y_eq_${n}`,"liquid_stable"]:[`gamma_${n}`,`gamma_${o}`];return{components:[...e],properties:i,axis:{variable:`x[${n}]`,from:0,to:1,n:Math.max(2,Math.round(t.n))},state:{P:t.P,composition:{[n]:.5,[o]:.5}},activityModel:{model:t.activity},equationOfState:{model:t.eos},...r?{vleTwoLiquid:!0}:{},...t.activity==="UNIFAC"?{unifacGroups:R(e,t.localUnifac)}:{},...t.componentFiles&&Object.keys(t.componentFiles).length>0?{componentFiles:t.componentFiles}:{}}}function ut(t){const e=[...t.pair].sort((s,u)=>(g(s,t.catalogue)?.tb??0)-(g(u,t.catalogue)?.tb??0)),n=e[0]??"",o=e[e.length-1]??"",r=t.TminK-273.15,i=t.TmaxK-273.15,l=[];for(let s=t.rhFrom;s<=t.rhTo+1e-9&&s<100;s+=Math.max(1,t.rhStep))l.push(Math.round(s));const c=[],m=Math.max(5,t.wbStepC);for(let s=Math.ceil(r/m)*m;s<=Math.min(i,95);s+=m)c.push(s);return{components:[n,o],properties:[],axis:{variable:"T",from:0,to:1,n:2},state:{composition:{[n]:.5,[o]:.5}},psychrometry:{carrier:n,condensable:o,P:t.P,TminC:r,TmaxC:i,gridN:Math.max(20,Math.round(t.gridN)),rh:l,wetBulb:c},transport:{model:"Chung",thermalConductivity:"Eucken",diffusivity:"Fuller"},...t.componentFiles&&Object.keys(t.componentFiles).length>0?{componentFiles:{...t.componentFiles}}:{}}}const F=`/*---------------------------------------------------------------------------*\\
  NRTL binary interaction parameters --- benzene(1) + toluene(2)

  Benzene-toluene is the classic "ideal" binary in chemical engineering
  teaching: the two species are chemically and dimensionally similar,
  so the activity coefficients are very close to unity over the entire
  composition range.  We carry the NRTL set with zero binary energies
  as a convenience --- the result is identical to Raoult's law.
\\*---------------------------------------------------------------------------*/

components  ( benzene  toluene );
model       NRTL;

parameters
{
    i           benzene;
    j           toluene;
    a_ij        0.0;
    b_ij        0.0;
    a_ji        0.0;
    b_ji        0.0;
    alpha       0.30;
}

provenance
{
    origin        assumed;   // null coefficients = the IDEALITY ASSUMPTION (see notes), not an estimate
    citation      "Ideal-mixture assumption; well-supported by VLE data for benzene-toluene at 1 atm";
    fitData       "<not refit>";
    fitDate       "<n/a>";
    algorithm     "<n/a>";
    chi2          "<n/a>";
    nDataPoints   0;
    validity { temperature { min 353.0 K; max 384.0 K; } }
    author        "V. Geraldes, 2026";
    notes         "Equivalent to Raoult's law. Use the simpler activityModel { model ideal; } in most cases; this NRTL set is provided for studies that want NRTL machinery active with a known trivial case.";
}
`,V=`/*---------------------------------------------------------------------------*\\
  NRTL binary interaction parameters --- ethanol(1) + water(2)
\\*---------------------------------------------------------------------------*/

recordType binaryInteractionParameters;
schemaVersion 1;

components  ( ethanol  water );
model       NRTL;

pair { i ethanol; j water; }

parameters
{
    i           ethanol;
    j           water;
    a_ij       -0.8009;
    b_ij        246.18;             // K
    a_ji        3.4578;
    b_ji       -586.0809;            // K
    alpha       0.30;
}

provenance
{
    origin        literature;
    citation      "Gmehling & Onken, DECHEMA Chemistry Data Series Vol. I Part 1, ethanol-water VLE-IG bank";
    fitData       "<not refit>";
    fitDate       "<literature, regressed ca. 1977>";
    algorithm     "<not reported in source>";
    chi2          "<not reported>";
    nDataPoints   0;
    validity { temperature { min 298.0 K; max 373.0 K; } }
    author        "Curated from DECHEMA by V. Geraldes, 2026";
    notes         "Widely used reference set for ethanol-water VLE at atmospheric pressure. Predicts the minimum-boiling azeotrope at x_ethanol ~ 0.894 (T_b ~ 351.4 K).";
}
`,G=`/*---------------------------------------------------------------------------*\\
  UNIQUAC binary interaction parameters --- aceticAcid-methylAcetate
  Delta u_ij(T) = a_ij + b_ij*T + c_ij*T^2  [a in K, b dimensionless, c in K^-1];
  tau_ij = exp(-Delta u_ij / T).
\\*---------------------------------------------------------------------------*/

components ( aceticAcid methylAcetate );
model       UNIQUAC;

parameters
{
    i      aceticAcid;
    j      methylAcetate;
    a_ij   -62.186;    a_ji   81.848;     // K
    b_ij   -0.43637;    b_ji   1.1162;
    c_ij   2.7235e-3;    c_ji   -1.3309e-3;
}

provenance
{
    origin     literature;
    citation   "Popken, Gotze & Gmehling, Ind. Eng. Chem. Res. 39 (2000) 2601, Table 3 (UNIQUAC Delta u = a + b T + c T^2; fitted simultaneously to DDB VLE + gamma-infinity + h^E, 1998)";
}
`,K=`/*---------------------------------------------------------------------------*\\
  UNIQUAC binary interaction parameters --- methanol-methylAcetate
  Delta u_ij(T) = a_ij + b_ij*T + c_ij*T^2  [a in K, b dimensionless, c in K^-1];
  tau_ij = exp(-Delta u_ij / T).
\\*---------------------------------------------------------------------------*/

components ( methanol methylAcetate );
model       UNIQUAC;

parameters
{
    i      methanol;
    j      methylAcetate;
    a_ij   62.972;    a_ji   326.20;     // K
    b_ij   -0.71011;    b_ji   0.72476;
    c_ij   1.1670e-3;    c_ji   -2.3547e-3;
}

provenance
{
    origin     literature;
    citation   "Popken, Gotze & Gmehling, Ind. Eng. Chem. Res. 39 (2000) 2601, Table 3 (UNIQUAC Delta u = a + b T + c T^2; fitted simultaneously to DDB VLE + gamma-infinity + h^E, 1998)";
}
`,z=`/*---------------------------------------------------------------------------*\\
  UNIQUAC binary interaction parameters --- methylAcetate-water
  Delta u_ij(T) = a_ij + b_ij*T + c_ij*T^2  [a in K, b dimensionless, c in K^-1];
  tau_ij = exp(-Delta u_ij / T).
\\*---------------------------------------------------------------------------*/

components ( methylAcetate water );
model       UNIQUAC;

parameters
{
    i      methylAcetate;
    j      water;
    a_ij   593.70;    a_ji   -265.83;     // K
    b_ij   0.010143;    b_ji   0.96295;
    c_ij   -2.1609e-3;    c_ji   2.0113e-4;
}

provenance
{
    origin     literature;
    citation   "Popken, Gotze & Gmehling, Ind. Eng. Chem. Res. 39 (2000) 2601, Table 3 (UNIQUAC Delta u = a + b T + c T^2; fitted simultaneously to DDB VLE + gamma-infinity + h^E, 1998)";
}
`,$=Object.assign({"../../../data/standards/parameters/NRTL/benzene-toluene.dat":F,"../../../data/standards/parameters/NRTL/ethanol-water.dat":V}),Q=Object.assign({}),W=Object.assign({"../../../data/standards/parameters/UNIQUAC/aceticAcid-methylAcetate.dat":G,"../../../data/standards/parameters/UNIQUAC/methanol-methylAcetate.dat":K,"../../../data/standards/parameters/UNIQUAC/methylAcetate-water.dat":z});function C(t,e){const n=[];for(const o of Object.values(t))try{const i=j(_(o)).components;Array.isArray(i)&&i.length===2&&n.push({model:e,a:String(i[0]),b:String(i[1])})}catch{}return n}const J=[...C($,"NRTL"),...C(Q,"Wilson"),...C(W,"UNIQUAC")];function pt(t,e,n){return J.some(o=>o.model===t&&(o.a===e&&o.b===n||o.a===n&&o.b===e))}export{M as B,h as E,tt as I,nt as a,mt as b,rt as c,I as d,E as e,lt as f,et as g,pt as h,ct as i,at as j,ut as k,ot as m,B as o,it as p,st as s,R as u};
