import{d5 as k,f8 as T,eo as x}from"./index-C6rrTVFk.js";import{d as O,b as _}from"./catalogue-AF4ZoTJo.js";/**
 * @license @tabler/icons-react v3.44.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */const H=[["path",{d:"M3 19a9 9 0 0 1 9 0a9 9 0 0 1 9 0",key:"svg-0"}],["path",{d:"M3 6a9 9 0 0 1 9 0a9 9 0 0 1 9 0",key:"svg-1"}],["path",{d:"M3 6l0 13",key:"svg-2"}],["path",{d:"M12 6l0 13",key:"svg-3"}],["path",{d:"M21 6l0 13",key:"svg-4"}]],ge=k("outline","book","Book",H);/**
 * @license @tabler/icons-react v3.44.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */const q=[["path",{d:"M13 5h8",key:"svg-0"}],["path",{d:"M13 9h5",key:"svg-1"}],["path",{d:"M13 15h8",key:"svg-2"}],["path",{d:"M13 19h5",key:"svg-3"}],["path",{d:"M3 5a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1l0 -4",key:"svg-4"}],["path",{d:"M3 15a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1l0 -4",key:"svg-5"}]],je=k("outline","list-details","ListDetails",q),S=[{id:"carbonate",label:"carbonate (CO₂ / HCO₃⁻ / CO₃²⁻)",master:"HCO3",total:.002,gas:"CO2",counter:{species:"Na",perMaster:1,salt:"NaHCO₃"},note:"the classical Bjerrum system; open it to the atmosphere and the total carbonate stops being an input"},{id:"ammonia",label:"ammonia (NH₄⁺ / NH₃)",master:"NH4",total:.002,gas:"NH3",counter:{species:"Cl",perMaster:1,salt:"NH₄Cl"},note:"the sour-water base; one crossing, at the pKa"},{id:"phosphate",label:"phosphate (H₃PO₄ / H₂PO₄⁻ / HPO₄²⁻ / PO₄³⁻)",master:"PO4",total:.002,counter:{species:"Na",perMaster:3,salt:"Na₃PO₄"},note:"triprotic — three crossings, and the buffer plateaux between them"},{id:"sulfide",label:"sulfide (H₂S / HS⁻)",master:"HS",total:.002,gas:"H2S",counter:{species:"Na",perMaster:1,salt:"NaHS"},note:"the other sour-water family"},{id:"acetate",label:"acetate (CH₃COOH / CH₃COO⁻)",master:"Acetate",total:.002,counter:{species:"Na",perMaster:1,salt:"CH₃COONa"},note:"the textbook weak acid, pKa 4.756"}],we=e=>S.find(n=>n.id===e)??S[0];function V(e,n,t){const a=Math.max(2,Math.round(t)),o=[];for(let r=0;r<a;++r)o.push(e+(n-e)*r/(a-1));return o}const G=e=>`bjerrum-${String(e).padStart(3,"0")}.csv`;function Te(e,n=4,t=4){const a=Math.max(2,Math.round(e)),o=Math.max(1,Math.min(n,Math.floor(a/t))),r=Math.floor(a/o),s=a%o,c=[];let l=0;for(let d=0;d<o;++d){const u=r+(d<s?1:0);c.push({lo:l,hi:l+u}),l+=u}return c}function xe(e){const n=[],t=[];for(const s of e){const c=new Map,l=s.csv.trim().split(/\r?\n/).filter(d=>d.length>0);for(let d=1;d<l.length;++d){const u=l[d].split(","),m=(u[0]??"").trim(),y=(u[1]??"").trim();!m||!y||(n.includes(m)||n.push(m),c.set(m,y))}t.push({pH:s.pH,m:c,q:s.netCharge})}if(n.length===0)return"";const a=t.length>0&&t.every(s=>s.q!==null),r=[["pH",...n,...a?["netCharge"]:[]].join(",")];for(const s of t)r.push([String(s.pH),...n.map(c=>s.m.get(c)??""),...a?[String(s.q)]:[]].join(","));return r.join(`
`)+`
`}function Ce(e){const n=e.match(/^.*(?:fatal error|\*\*\*).*$/gm),t=[...e.matchAll(/pH\s+(-?[\d.]+)\s+\(given\)/g)];if(!n||n.length===0||t.length===0)return null;const a=Number(t[t.length-1][1]);return Number.isFinite(a)?{pH:a,message:n[n.length-1].trim()}:null}function Ee(e,n){const t=new Array(n).fill(null),a=/^>>>\s+Operation\s+\[(\d+)\]/gm,o=[];let r;for(;(r=a.exec(e))!==null;)o.push({index:Number(r[1]),at:r.index});const s=/charge balance on the answer:[^\n]*?=\s*(-?[\d.]+(?:[eE][-+]?\d+)?)\s+\(pH GIVEN/;for(let c=0;c<o.length;++c){const d=e.slice(o[c].at,o[c+1]?.at??e.length).match(s),u=o[c].index;if(d&&u>=0&&u<n){const m=Number(d[1]);Number.isFinite(m)&&(t[u]=m)}}return t}function Pe(e){const n=new RegExp("^\\s*(?:\\[advisory\\][^\\n]*|\\[chemistry\\] closure[^\\n]*|speciation: pH scale[^\\n]*|aqueous activity:[^\\n]*|K\\(T\\)[^\\n]*|OPEN to [^\\n]*|--\\s+the .*REPLACED by the pin[^\\n]*)$","gm"),t=new Set,a=[];for(const o of e.match(n)??[]){const r=o.trim();t.has(r)||(t.add(r),a.push(r))}return a}const L=/^\[advisory\] pH was GIVEN, so electroneutrality was not imposed .*?net charge of\s*([\d.]+)\s*%/;function Ae(e){const n=[];for(const c of e){const l=L.exec(c);if(l){const d=Number(l[1]);Number.isFinite(d)&&n.push(d)}}if(n.length<2)return e;const t=Math.min(...n),a=Math.max(...n),o=`[advisory] pH was GIVEN at every one of the ${n.length} points, so electroneutrality was not imposed: the answers carry a net charge of ${t.toFixed(1)}–${a.toFixed(1)} % of their total ionic content (the dashed titrant curve on the right-hand axis is that residual, point by point). A measured laboratory pH makes this legitimate — the unmeasured counter-ions carry the difference — but no physical beaker holds these compositions as written; \`pH solve;\` closes the balance instead.`,r=[];let s=!1;for(const c of e){if(!L.test(c)){r.push(c);continue}s||(r.push(o),s=!0)}return r}const p="explore.csv";function Re(e){if(e.estimate){const i=e.estimate;return{propsDict:{operations:[{name:"estimate",type:"estimateComponent",component:i.component,model:i.estimator??"Joback",groups:i.groups.map(g=>({group:g.group,count:g.count})),...i.reference&&Object.keys(i.reference).length>0?{reference:{...i.reference}}:{},...i.polymer&&(i.polymer.packing!==void 0||i.polymer.state!==void 0)?{polymer:{...i.polymer.packing!==void 0?{packing:i.polymer.packing}:{},...i.polymer.state!==void 0?{state:i.polymer.state}:{}}}:{},output:{proposal:"auto"}}]},thermoPackage:{recordType:"thermophysicalPropertySystem",schemaVersion:2,components:["water"],equilibrium:{formulation:"gammaPhi",liquid:{activityModel:{model:"ideal"},standardState:"pureLiquid"},vapour:{fugacityModel:"idealGas"}}},controlDict:{application:"choupoProps",description:"Property Explorer -- estimate a new component (ephemeral)",verbosity:2}}}if(e.bjerrum){const i=e.bjerrum,h=i.indexFrom??0,b={operations:V(i.pHfrom,i.pHto,i.n).map((B,I)=>({name:`pt${String(h+I).padStart(3,"0")}`,type:"speciate",totals:{[i.master]:`${i.total} mol/kg`,...i.counter&&i.counter.total>0?{[i.counter.species]:`${i.counter.total} mol/kg`}:{}},pH:B,...i.atmosphere?{atmosphere:{[i.atmosphere.gas]:`${i.atmosphere.pAtm} atm`}}:{},temperature:i.T,output:{file:G(h+I)}}))},f={recordType:"thermophysicalPropertySystem",schemaVersion:2,components:[...e.components],aqueousProperties:{solvent:"water",activityCoefficients:{model:"Davies",referenceBasis:"aqueousMolality"}}},R={propsDict:b,thermoPackage:f,controlDict:{application:"choupoProps",description:"Property Explorer -- species distribution vs pH (ephemeral)",verbosity:2}},N={...O(e.components),...e.componentFiles??{}};return Object.keys(N).length>0&&(R.extraFiles=N),R}const n={composition:{...e.state.composition}};e.state.P!==void 0&&(n.P=e.state.P),e.state.T!==void 0&&(n.T=e.state.T);const t={};e.state.P!==void 0&&(t.P=e.state.P),e.state.T!==void 0&&(t.T=e.state.T);const a=e.ternary?{name:"explore",type:"propertyScanTernary",mode:e.ternary.mode,state:t,grid:{n:e.ternary.n},...e.ternary.tieStride!==void 0?{tieStride:e.ternary.tieStride}:{},...e.ternary.shard?{shard:{k:e.ternary.shard.k,n:e.ternary.shard.n}}:{},output:{file:p}}:null,o=e.binaryLle?{name:"explore",type:"propertyScanBinary",state:t,grid:{n:e.binaryLle.n},output:{file:p}}:null,r=e.phaseDiagram?{name:"explore",type:"purePhaseDiagram",grid:{n:e.phaseDiagram.grid},...e.phaseDiagram.solid?{solid:{...e.phaseDiagram.solid}}:{},output:{file:p}}:null,s=e.psychrometry?{name:"explore",type:"psychrometricChart",carrier:e.psychrometry.carrier,condensable:e.psychrometry.condensable,P:e.psychrometry.P,TminC:e.psychrometry.TminC,TmaxC:e.psychrometry.TmaxC,grid:{n:e.psychrometry.gridN},relativeHumidity:[...e.psychrometry.rh],wetBulb:[...e.psychrometry.wetBulb],output:{file:p}}:null,c=e.scaling?{name:"explore",type:"scalingScan",...e.scaling.activityModel==="pitzer"?{activityModel:"pitzer"}:{},totals:Object.fromEntries(Object.entries(e.scaling.totals).map(([i,h])=>[i,`${h} mol/kg`])),pH:e.scaling.pH,...e.scaling.pCO2atm!==void 0?{atmosphere:{pCO2:`${e.scaling.pCO2atm} atm`}}:{},...e.scaling.T!==void 0?{temperature:e.scaling.T}:{},...e.scaling.equilibrate&&e.scaling.equilibrate.length>0?{equilibrate:{minerals:[...e.scaling.equilibrate]}}:{},...e.scaling.equilibrate&&e.scaling.equilibrate.length>0&&e.scaling.feedFlowM3h!==void 0?{feedFlow:`${e.scaling.feedFlowM3h} m3/h`}:{},recovery:{from:e.scaling.from,to:e.scaling.to,n:e.scaling.n},output:{file:p}}:null,l=e.gibbsmap?{name:"explore",type:"gibbsMap",elements:[...e.gibbsmap.elements],species:e.gibbsmap.species.map(i=>({name:i.name,atoms:[...i.atoms]})),feed:{...e.gibbsmap.feed},Tgrid:{from:e.gibbsmap.Tfrom,to:e.gibbsmap.Tto,n:e.gibbsmap.nT},Pgrid:{from:e.gibbsmap.Pfrom,to:e.gibbsmap.Pto,n:e.gibbsmap.nP,...e.gibbsmap.logP?{log:"true"}:{}},...e.gibbsmap.deltaT?{temperatureApproach:e.gibbsmap.deltaT}:{},metric:{...e.gibbsmap.metric},output:{file:p}}:null,d=e.steam?{name:"explore",type:"steamTables",...e.steam.mode==="saturation"?{saturation:{from:e.steam.from,to:e.steam.to,n:e.steam.n}}:{isobar:{P:e.steam.P??1e5,from:e.steam.from,to:e.steam.to,n:e.steam.n}},output:{file:p}}:null,u=e.solubility?{name:"explore",type:"solubilityParameter",T:e.solubility.T,output:{file:p}}:null,m={operations:[r??s??a??o??c??l??d??u??{name:"explore",type:"propertyScan1D",vary:{variable:e.axis.variable,from:e.axis.from,to:e.axis.to,n:e.axis.n},state:n,properties:[...e.properties],output:{file:p}}]},y=()=>e.binaryLle!==void 0||e.ternary?.mode==="lle"||e.activityModel?.model==="UNIFAC"?{model:"UNIFAC"}:e.activityModel??{model:"ideal"},E=(()=>{const i=e.transport;if(!i)return null;const h={};i.model&&(h.viscosity={model:i.model}),i.thermalConductivity&&(h.thermalConductivity={model:i.thermalConductivity}),i.diffusivity&&(h.diffusivity={model:i.diffusivity});const b={};i.liquidViscosity&&(b.viscosity={model:i.liquidViscosity}),i.liquidConductivity&&(b.thermalConductivity={model:i.liquidConductivity});const f={};return Object.keys(h).length&&(f.vapour=h),Object.keys(b).length&&(f.liquid=b),Object.keys(f).length?f:null})(),K=e.ternary?.mode==="lle"||e.binaryLle||e.vleTwoLiquid?{recordType:"thermophysicalPropertySystem",schemaVersion:2,components:[...e.components],equilibrium:{formulation:"gammaGamma",liquidPhases:[{name:"liquid1",activityModel:y()},{name:"liquid2",activityModel:y()}],vapour:{fugacityModel:"idealGas"}}}:e.scaling?{recordType:"thermophysicalPropertySystem",schemaVersion:2,components:[...e.components],aqueousProperties:{solvent:"water",activityCoefficients:{model:"Davies",referenceBasis:"aqueousMolality"}}}:{recordType:"thermophysicalPropertySystem",schemaVersion:2,components:[...e.components],equilibrium:{formulation:"gammaPhi",liquid:{activityModel:e.activityModel??{model:"ideal"},standardState:"pureLiquid"},vapour:{fugacityModel:String((e.equationOfState??{model:"idealGas"}).model)}},...E?{transport:E}:{}},F={application:"choupoProps",description:`Property Explorer (interactive; ephemeral -- never written to disk)${e.mode==="pure"?" -- pure-component curves (composition has no effect)":e.mode==="mixture"?" -- mixture property at the stated composition":""}`,verbosity:2},P={propsDict:m,thermoPackage:K,controlDict:F},A={...O(e.components),...e.componentFiles??{}};return Object.keys(A).length>0&&(P.extraFiles=A),P}const z=`/*---------------------------------------------------------------------------*\\
  NRTL binary interaction parameters --- 1Propanol(i) + water(j)

  REGRESSED BY CHOUPO to measured bubble temperatures (DEV.md C16, record
  docs/design/binary-pairs-from-open-measurements.md).  The two articles
  named under \`evidence\` are the SOURCE of the measurements; the NIST/TRC
  ThermoML Archive (ThermoML.v2020-09-30.tgz) was the finding aid that
  located them and is not reproduced.  The PARAMETERS are Choupo's own
  work, regressed and redistributed with the catalogue.

  EQUATION AND CONVENTIONS (the ones src/thermo/activityCoefficient/NRTL.cpp
  computes -- a record read under another convention is a different pair):
      tau_ij = a_ij + b_ij / T      [b in K]      G_ij = exp(-alpha tau_ij)
      ln gamma_i = sum_j tau_ji G_ji x_j / S_i
                   + sum_j (x_j G_ij / S_j)(tau_ij - sum_k tau_kj G_kj x_k / S_j),
      S_j = sum_k G_kj x_k.  Direction i->j as Renon & Prausnitz, AIChE J. 14
      (1968) 135: tau_12 = (g_12 - g_22)/RT.  a_ij = a_ji = 0 and alpha = 0.30
      were FIXED, not fitted: bubble temperatures alone do not identify them.

  FRAME: ideal-gas vapour, no Poynting term, the catalogue's own Antoine
  records for both pure components.  A different vapour or pure-component
  model changes what these numbers mean.

  VALIDITY: the span of the fit evidence (\`validity\` below).  The held-out
  test is \`validation\`.  reviewStatus interim: the measurements were
  transcribed from the archive and have NOT been read back against the
  articles; the fit has not been reviewed by a curator.  Promotion to
  \`reviewed\` is Vitor's.

  PHASE STABILITY (checked 2026-10-05 on the record's own NRTL equation,
  and held by check_regressed_pairs arm (f)): across its validity span the
  pair predicts ONE liquid, as the evidence requires.  BELOW about 355.5 K
  it predicts a liquid-liquid split that 1-propanol + water, miscible in
  all proportions, does not have -- the two-parameter b/T form grows tau
  as T falls.  A flash, decanter or cooler run with this pair below its
  validity span is an extrapolation that WILL split the liquid: the
  validity block is the guard, read it.

  REPRODUCE: run tutorials/props/curation/curate09_nrtl_propanol_water -- its fit writes
  1Propanol-water.proposal.dat; its parameters, evidence, validity and validation
  must equal this record's (bin/curate/check_regressed_pairs.py holds the
  two to each other, so the record cannot drift from its evidence).
\\*---------------------------------------------------------------------------*/

recordType binaryInteractionParameters;
schemaVersion 1;

pair { i 1Propanol; j water; }

components  ( 1Propanol  water );
model       NRTL;

parameters
{
    i           1Propanol;
    j           water;
    a_ij        0.00000000;
    b_ij        -25.09964672;
    a_ji        0.00000000;
    b_ji        979.77644383;
    alpha       0.30000000;
}

provenance
{
    origin        fitted;
    method        "fitParameters(T_bubble), Levenberg-Marquardt";
    methodVersion "choupoProps Choupo-dev";
    fittedInCase  "tutorials/props/curation/curate09_nrtl_propanol_water";
    reviewStatus  interim;
    reviewReason  "regressed by Choupo from archive-transcribed measurements; not yet read back against the articles";
    reuse         "Choupo's own regression, redistributed with the catalogue; the measured points belong to the cited articles and are not reproduced in this record";
    fitDate       "2026-10-05";

    evidence
    (
        {
            role      fit;
            dataset   "constant/experiments/1Propanol-water-bubble-je800436u.dat";
            doi       "10.1021/je800436u";
            sha256    "366c13f383188bd7e464f9e1f753bfec46ecf4390acc84a063609ea2ac53d061";
            provenance measured;
            archiveFile "je800436u.xml";
            system    "1Propanol + water";
            pressure  "100000.000000 Pa";
        }
        {
            role      validation;
            dataset   "constant/experiments/1Propanol-water-bubble-j.jct.2017.06.014.dat";
            doi       "10.1016/j.jct.2017.06.014";
            sha256    "3a875b77d80b507f0dc8a1e74cc61c4f39d7d6720c7dae79a58f0d0277719150";
            provenance measured;
            archiveFile "j.jct.2017.06.014.xml";
            system    "1Propanol + water";
            pressure  "101300.000000 Pa";
        }
    );
    fingerprint "2541ea2367c5c613";   // of the declaration, frozen before the fit

    //  IN-SAMPLE: the model reproducing the very points it was
    //  fitted to.  It is NOT a validation; see the block below.
    weighting     uncertainty;   // chi2 is sum ((T_model - T_exp)/U)^2, dimensionless
    chi2          213.20132638;
    rms_K         0.52347230;
    nDataPoints   26;
    identifiable  true;
    maxAbsCorr    0.91986419;

    validity
    {
        temperature { min 360.49 K; max 368.64 K; }
        pressure    { min 100000 Pa; max 100000 Pa; }
        note        "the span of the FIT evidence; outside it the pair is an extrapolation";
    }
}

validation
{
    verdict     validated;

    heldOut
    {
        points      19;
        aad_pct     0.056538;
        aad_K       0.205310;
        domain_x1   ( 0.058000 0.976000 );
    }

    acceptance
    {
        maxAAD      0.260000;   // per cent
        origin      "declared before the fit, by the ONE rule of C16 (slice 1, five systems; slice 2, four more): the held-out set's largest stated expanded uncertainty (U95 = 0.22 K) plus the catalogue vapour-pressure model's own error at that set's pure endpoints (water -0.703 K, 1Propanol +0.051 K; measured with no pair involved), as a percentage of the held-out mean T (362.46 K) = 0.2546 %, rounded UP to two significant figures";
    }
}
`,Q=`/*---------------------------------------------------------------------------*\\
  NRTL binary interaction parameters --- acetone(i) + ethanol(j)

  REGRESSED BY CHOUPO to measured bubble temperatures (DEV.md C16, record
  docs/design/binary-pairs-from-open-measurements.md).  The two articles
  named under \`evidence\` are the SOURCE of the measurements; the NIST/TRC
  ThermoML Archive (ThermoML.v2020-09-30.tgz) was the finding aid that
  located them and is not reproduced.  The PARAMETERS are Choupo's own
  work, regressed and redistributed with the catalogue.

  EQUATION AND CONVENTIONS (the ones src/thermo/activityCoefficient/NRTL.cpp
  computes -- a record read under another convention is a different pair):
      tau_ij = a_ij + b_ij / T      [b in K]      G_ij = exp(-alpha tau_ij)
      ln gamma_i = sum_j tau_ji G_ji x_j / S_i
                   + sum_j (x_j G_ij / S_j)(tau_ij - sum_k tau_kj G_kj x_k / S_j),
      S_j = sum_k G_kj x_k.  Direction i->j as Renon & Prausnitz, AIChE J. 14
      (1968) 135: tau_12 = (g_12 - g_22)/RT.  a_ij = a_ji = 0 and alpha = 0.30
      were FIXED, not fitted: bubble temperatures alone do not identify them.

  FRAME: ideal-gas vapour, no Poynting term, the catalogue's own Antoine
  records for both pure components.  A different vapour or pure-component
  model changes what these numbers mean.

  VALIDITY: the span of the fit evidence (\`validity\` below).  The held-out
  test is \`validation\`.  reviewStatus interim: the measurements were
  transcribed from the archive and have NOT been read back against the
  articles; the fit has not been reviewed by a curator.  Promotion to
  \`reviewed\` is Vitor's.

  PHASE STABILITY (checked 2026-10-05 on the record's own NRTL equation,
  and held by check_regressed_pairs arm (f)): the pair predicts ONE liquid
  at every temperature down to 200 K, as the evidence requires.

  REPRODUCE: run tutorials/props/curation/curate11_nrtl_acetone_ethanol -- its fit writes
  acetone-ethanol.proposal.dat; its parameters, evidence, validity and validation
  must equal this record's (bin/curate/check_regressed_pairs.py holds the
  two to each other, so the record cannot drift from its evidence).
\\*---------------------------------------------------------------------------*/

recordType binaryInteractionParameters;
schemaVersion 1;

pair { i acetone; j ethanol; }

components  ( acetone  ethanol );
model       NRTL;

parameters
{
    i           acetone;
    j           ethanol;
    a_ij        0.00000000;
    b_ij        149.76276858;
    a_ji        0.00000000;
    b_ji        68.05599781;
    alpha       0.30000000;
}

provenance
{
    origin        fitted;
    method        "fitParameters(T_bubble), Levenberg-Marquardt";
    methodVersion "choupoProps Choupo-dev";
    fittedInCase  "tutorials/props/curation/curate11_nrtl_acetone_ethanol";
    reviewStatus  interim;
    reviewReason  "regressed by Choupo from archive-transcribed measurements; not yet read back against the articles";
    reuse         "Choupo's own regression, redistributed with the catalogue; the measured points belong to the cited articles and are not reproduced in this record";
    fitDate       "2026-10-05";

    evidence
    (
        {
            role      fit;
            dataset   "constant/experiments/acetone-ethanol-bubble-j.fluid.2005.01.007.dat";
            doi       "10.1016/j.fluid.2005.01.007";
            sha256    "f1acfe9dcd9476d848a167c0a3fe983e5b719138dd99807652ad914b3f29eb62";
            provenance measured;
            archiveFile "j.fluid.2005.01.007.xml";
            system    "acetone + ethanol";
            pressure  "101320.000000 Pa";
        }
        {
            role      validation;
            dataset   "constant/experiments/acetone-ethanol-bubble-je400544h.dat";
            doi       "10.1021/je400544h";
            sha256    "42881147f0310fdf427abc4f90cad0a45409e0b47fd81f2622589104bc17d830";
            provenance measured;
            archiveFile "je400544h.xml";
            system    "acetone + ethanol";
            pressure  "101300.000000 Pa";
        }
    );
    fingerprint "7d8b3bcd6607b2a6";   // of the declaration, frozen before the fit

    //  IN-SAMPLE: the model reproducing the very points it was
    //  fitted to.  It is NOT a validation; see the block below.
    weighting     uncertainty;   // chi2 is sum ((T_model - T_exp)/U)^2, dimensionless
    chi2          1.96410744;
    rms_K         0.07174202;
    nDataPoints   19;
    identifiable  true;
    maxAbsCorr    0.99694600;

    validity
    {
        temperature { min 329.69 K; max 348.91 K; }
        pressure    { min 101320 Pa; max 101320 Pa; }
        note        "the span of the FIT evidence; outside it the pair is an extrapolation";
    }
}

validation
{
    verdict     validated;

    heldOut
    {
        points      11;
        aad_pct     0.027476;
        aad_K       0.092886;
        domain_x1   ( 0.076000 0.891000 );
    }

    acceptance
    {
        maxAAD      0.140000;   // per cent
        origin      "declared before the fit, by the ONE rule of C16 (slice 1, five systems; slice 2, four more): the held-out set's largest stated expanded uncertainty (U95 = 0.41 K) plus the catalogue vapour-pressure model's own error at that set's pure endpoints (ethanol -0.003 K, acetone +0.041 K; measured with no pair involved), as a percentage of the held-out mean T (337.79 K) = 0.1335 %, rounded UP to two significant figures";
    }
}
`,Y=`/*---------------------------------------------------------------------------*\\
  NRTL binary interaction parameters --- acetonitrile(i) + water(j)

  REGRESSED BY CHOUPO to measured bubble temperatures (DEV.md C16, record
  docs/design/binary-pairs-from-open-measurements.md).  The two articles
  named under \`evidence\` are the SOURCE of the measurements; the NIST/TRC
  ThermoML Archive (ThermoML.v2020-09-30.tgz) was the finding aid that
  located them and is not reproduced.  The PARAMETERS are Choupo's own
  work, regressed and redistributed with the catalogue.

  EQUATION AND CONVENTIONS (the ones src/thermo/activityCoefficient/NRTL.cpp
  computes -- a record read under another convention is a different pair):
      tau_ij = a_ij + b_ij / T      [b in K]      G_ij = exp(-alpha tau_ij)
      ln gamma_i = sum_j tau_ji G_ji x_j / S_i
                   + sum_j (x_j G_ij / S_j)(tau_ij - sum_k tau_kj G_kj x_k / S_j),
      S_j = sum_k G_kj x_k.  Direction i->j as Renon & Prausnitz, AIChE J. 14
      (1968) 135: tau_12 = (g_12 - g_22)/RT.  a_ij = a_ji = 0 and alpha = 0.30
      were FIXED, not fitted: bubble temperatures alone do not identify them.

  FRAME: ideal-gas vapour, no Poynting term, the catalogue's own Antoine
  records for both pure components.  A different vapour or pure-component
  model changes what these numbers mean.

  VALIDITY: the span of the fit evidence (\`validity\` below).  The held-out
  test is \`validation\`.  reviewStatus interim: the measurements were
  transcribed from the archive and have NOT been read back against the
  articles; the fit has not been reviewed by a curator.  Promotion to
  \`reviewed\` is Vitor's.

  PHASE STABILITY (checked 2026-10-05 on the record's own NRTL equation,
  and held by check_regressed_pairs arm (f)): across its validity span the
  pair predicts ONE liquid, as the evidence requires.  BELOW about 323.6 K
  it predicts a liquid-liquid split, while acetonitrile + water is
  miscible at room temperature -- the two-parameter b/T form grows tau as
  T falls.  A flash or cooler run with this pair below its validity span
  is an extrapolation that WILL split the liquid: the validity block is
  the guard, read it.

  REPRODUCE: run tutorials/props/curation/curate10_nrtl_acetonitrile_water -- its fit writes
  acetonitrile-water.proposal.dat; its parameters, evidence, validity and validation
  must equal this record's (bin/curate/check_regressed_pairs.py holds the
  two to each other, so the record cannot drift from its evidence).
\\*---------------------------------------------------------------------------*/

recordType binaryInteractionParameters;
schemaVersion 1;

pair { i acetonitrile; j water; }

components  ( acetonitrile  water );
model       NRTL;

parameters
{
    i           acetonitrile;
    j           water;
    a_ij        0.00000000;
    b_ij        218.34737078;
    a_ji        0.00000000;
    b_ji        616.29648169;
    alpha       0.30000000;
}

provenance
{
    origin        fitted;
    method        "fitParameters(T_bubble), Levenberg-Marquardt";
    methodVersion "choupoProps Choupo-dev";
    fittedInCase  "tutorials/props/curation/curate10_nrtl_acetonitrile_water";
    reviewStatus  interim;
    reviewReason  "regressed by Choupo from archive-transcribed measurements; not yet read back against the articles";
    reuse         "Choupo's own regression, redistributed with the catalogue; the measured points belong to the cited articles and are not reproduced in this record";
    fitDate       "2026-10-05";

    evidence
    (
        {
            role      fit;
            dataset   "constant/experiments/acetonitrile-water-bubble-je400531a.dat";
            doi       "10.1021/je400531a";
            sha256    "edd47a0f561183a4e83930823356df31104086f2203e1fce79bd027d5848225e";
            provenance measured;
            archiveFile "je400531a.xml";
            system    "acetonitrile + water";
            pressure  "101300.000000 Pa";
        }
        {
            role      validation;
            dataset   "constant/experiments/acetonitrile-water-bubble-j.jct.2019.07.006.dat";
            doi       "10.1016/j.jct.2019.07.006";
            sha256    "75b54b8666e19e36e7423ac7f65b794e1c21ca09607019ae5e3495c6b0e990b0";
            provenance measured;
            archiveFile "j.jct.2019.07.006.xml";
            system    "acetonitrile + water";
            pressure  "101300.000000 Pa";
        }
    );
    fingerprint "bcfb984a10389915";   // of the declaration, frozen before the fit

    //  IN-SAMPLE: the model reproducing the very points it was
    //  fitted to.  It is NOT a validation; see the block below.
    weighting     uncertainty;   // chi2 is sum ((T_model - T_exp)/U)^2, dimensionless
    chi2          27.58885486;
    rms_K         0.52278237;
    nDataPoints   19;
    identifiable  true;
    maxAbsCorr    0.94038997;

    validity
    {
        temperature { min 349.95 K; max 367.56 K; }
        pressure    { min 101300 Pa; max 101300 Pa; }
        note        "the span of the FIT evidence; outside it the pair is an extrapolation";
    }
}

validation
{
    verdict     validated;

    heldOut
    {
        points      12;
        aad_pct     0.136733;
        aad_K       0.495564;
        domain_x1   ( 0.010200 0.954900 );
    }

    acceptance
    {
        maxAAD      0.720000;   // per cent
        origin      "declared before the fit, by the ONE rule of C16 (slice 1, five systems; slice 2, four more): the held-out set's largest stated expanded uncertainty (U95 = 1.85 K) plus the catalogue vapour-pressure model's own error at that set's pure endpoints (water -0.673 K, acetonitrile +0.082 K; measured with no pair involved), as a percentage of the held-out mean T (353.83 K) = 0.7131 %, rounded UP to two significant figures";
    }
}
`,$=`/*---------------------------------------------------------------------------*\\
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
`,W=`/*---------------------------------------------------------------------------*\\
  NRTL binary interaction parameters --- isopropanol(i) + dimethylCarbonate(j)

  REGRESSED BY CHOUPO'S CURATION PIPELINE (bin/choupo-curate, DEV.md 4c C282;
  record docs/design/binary-pairs-from-open-measurements.md) to measured
  bubble temperatures.  The two articles named under \`evidence\` are the
  SOURCE of the measurements; the NIST/TRC ThermoML Archive located them.
  NO MEASURED POINT IS IN THIS RECORD OR THIS TREE: the case regenerates
  them from the DOIs and sha256 sums it declares (constant/archiveDatasets).
  The PARAMETERS are Choupo's own work.

  EQUATION: tau_ij = a_ij + b_ij / T [b in K], G_ij = exp(-alpha tau_ij),
  Renon & Prausnitz direction (src/thermo/activityCoefficient/NRTL.cpp).
  a_ij = a_ji = 0 and alpha = 0.30 FIXED, not fitted.
  FRAME: ideal-gas vapour, no Poynting term, the catalogue's own
  vapour-pressure records for both pure components.

  reviewStatus autoPromoted; humanReviewed false: PROMOTED AUTOMATICALLY by
  its fitting pipeline (verdict validated against a band declared before the
  fit, one liquid across its validity span, study triage run), and NO HUMAN
  HAS REVIEWED IT.  The engine says so on every run that reads it.  A
  curator who reads the series back against the articles marks it
  \`reviewStatus reviewed; humanReviewed true;\`.  Revert with
  \`bin/choupo-curate revert dimethylCarbonate-isopropanol\`.

  REPRODUCE: run tutorials/props/curation/curate18_nrtl_isopropanol_dimethylCarbonate (after \`bin/choupo-curate fetch\` on it); its fit
  writes dimethylCarbonate-isopropanol.proposal.dat, which bin/curate/check_regressed_pairs.py holds
  equal to this record.
\\*---------------------------------------------------------------------------*/

recordType binaryInteractionParameters;
schemaVersion 1;

pair { i isopropanol; j dimethylCarbonate; }

components  ( isopropanol  dimethylCarbonate );
model       NRTL;

parameters
{
    i           isopropanol;
    j           dimethylCarbonate;
    a_ij        0.00000000;
    b_ij        284.35589461;
    a_ji        0.00000000;
    b_ji        62.89655160;
    alpha       0.30000000;
}

provenance
{
    origin        fitted;
    method        "fitParameters(T_bubble), Levenberg-Marquardt";
    methodVersion "choupoProps Choupo-dev";
    fittedInCase  "tutorials/props/curation/curate18_nrtl_isopropanol_dimethylCarbonate";
    reviewStatus  autoPromoted;
    humanReviewed false;
    promotedBy    "bin/choupo-curate pair --promote";
    promotedDate  "2026-11-10";
    reviewReason  "regressed by bin/choupo-curate from archive-transcribed measurements; not yet read back against the articles";
    reuse         "Choupo's own regression; the measured points belong to the cited articles and are not reproduced in this record or this tree";
    fitDate       "2026-11-10";

    evidence
    (
        {
            role      fit;
            dataset   "constant/archiveExtracts/isopropanol-dimethylCarbonate-bubble-j.jct.2004.09.009.dat";
            doi       "10.1016/j.jct.2004.09.009";
            sha256    "0be6ddde75d592d26de70cdbf06411e5d0bd2c5d9c882258a0fe98754cb80be3";
            provenance measured;
            archiveFile "j.jct.2004.09.009.xml";
            system    "isopropanol + dimethylCarbonate";
            pressure  "101300.000000 Pa";
        }
        {
            role      validation;
            dataset   "constant/archiveExtracts/isopropanol-dimethylCarbonate-bubble-je030131q.dat";
            doi       "10.1021/je030131q";
            sha256    "b41bca23136ec66aba1b6984f5c0f44a5fca02ba9d89bed1e374a726fb032c08";
            provenance measured;
            archiveFile "je030131q.xml";
            system    "isopropanol + dimethylCarbonate";
            pressure  "95800.000000 Pa";
        }
    );
    fingerprint "bcd7ed778f4dc0e3";   // of the declaration, frozen before the fit

    //  IN-SAMPLE: the model reproducing the very points it was
    //  fitted to.  It is NOT a validation; see the block below.
    weighting     uncertainty;   // chi2 is sum ((T_model - T_exp)/U)^2, dimensionless
    chi2          4.57923866;
    rms_K         0.13182485;
    nDataPoints   32;
    identifiable  true;
    maxAbsCorr    0.99354796;

    validity
    {
        temperature { min 352.25 K; max 361.68 K; }
        pressure    { min 101300 Pa; max 101300 Pa; }
        note        "the span of the FIT evidence; outside it the pair is an extrapolation";
    }
}

validation
{
    verdict     validated;

    heldOut
    {
        points      9;
        aad_pct     0.052100;
        aad_K       0.183697;
        domain_x1   ( 0.180500 0.924000 );
    }

    acceptance
    {
        maxAAD      0.240000;   // per cent
        origin      "declared before the fit by bin/choupo-curate, the ONE rule of C16: the held-out set's largest stated expanded uncertainty (U95 = 0.32 K) plus the catalogue vapour-pressure model's own error at that set's pure endpoints (dimethylCarbonate +0.504 K, isopropanol -0.231 K; measured with no pair involved), as a percentage of the held-out mean T (351.83 K) = 0.2341 %, rounded UP to two significant figures";
    }
}
`,J=`/*---------------------------------------------------------------------------*\\
  NRTL binary interaction parameters --- methanol(i) + dimethylCarbonate(j)

  REGRESSED BY CHOUPO'S CURATION PIPELINE (bin/choupo-curate, DEV.md 4c C282;
  record docs/design/binary-pairs-from-open-measurements.md) to measured
  bubble temperatures.  The two articles named under \`evidence\` are the
  SOURCE of the measurements; the NIST/TRC ThermoML Archive located them.
  NO MEASURED POINT IS IN THIS RECORD OR THIS TREE: the case regenerates
  them from the DOIs and sha256 sums it declares (constant/archiveDatasets).
  The PARAMETERS are Choupo's own work.

  EQUATION: tau_ij = a_ij + b_ij / T [b in K], G_ij = exp(-alpha tau_ij),
  Renon & Prausnitz direction (src/thermo/activityCoefficient/NRTL.cpp).
  a_ij = a_ji = 0 and alpha = 0.30 FIXED, not fitted.
  FRAME: ideal-gas vapour, no Poynting term, the catalogue's own
  vapour-pressure records for both pure components.

  reviewStatus autoPromoted; humanReviewed false: PROMOTED AUTOMATICALLY by
  its fitting pipeline (verdict validated against a band declared before the
  fit, one liquid across its validity span, study triage run), and NO HUMAN
  HAS REVIEWED IT.  The engine says so on every run that reads it.  A
  curator who reads the series back against the articles marks it
  \`reviewStatus reviewed; humanReviewed true;\`.  Revert with
  \`bin/choupo-curate revert dimethylCarbonate-methanol\`.

  REPRODUCE: run tutorials/props/curation/curate15_nrtl_methanol_dimethylCarbonate (after \`bin/choupo-curate fetch\` on it); its fit
  writes dimethylCarbonate-methanol.proposal.dat, which bin/curate/check_regressed_pairs.py holds
  equal to this record.
\\*---------------------------------------------------------------------------*/

recordType binaryInteractionParameters;
schemaVersion 1;

pair { i methanol; j dimethylCarbonate; }

components  ( methanol  dimethylCarbonate );
model       NRTL;

parameters
{
    i           methanol;
    j           dimethylCarbonate;
    a_ij        0.00000000;
    b_ij        401.30292763;
    a_ji        0.00000000;
    b_ji        89.44438786;
    alpha       0.30000000;
}

provenance
{
    origin        fitted;
    method        "fitParameters(T_bubble), Levenberg-Marquardt";
    methodVersion "choupoProps Choupo-dev";
    fittedInCase  "tutorials/props/curation/curate15_nrtl_methanol_dimethylCarbonate";
    reviewStatus  autoPromoted;
    humanReviewed false;
    promotedBy    "bin/choupo-curate pair --promote";
    promotedDate  "2026-11-10";
    reviewReason  "regressed by bin/choupo-curate from archive-transcribed measurements; not yet read back against the articles";
    reuse         "Choupo's own regression; the measured points belong to the cited articles and are not reproduced in this record or this tree";
    fitDate       "2026-11-10";

    evidence
    (
        {
            role      fit;
            dataset   "constant/archiveExtracts/methanol-dimethylCarbonate-bubble-je0601309.dat";
            doi       "10.1021/je0601309";
            sha256    "6ddd13da5f82956b17e5ae2526f704058dfcbf03b90e50716fb5a7cf3d47836d";
            provenance measured;
            archiveFile "je0601309.xml";
            system    "methanol + dimethylCarbonate";
        }
        {
            role      validation;
            dataset   "constant/archiveExtracts/methanol-dimethylCarbonate-bubble-je301290c.dat";
            doi       "10.1021/je301290c";
            sha256    "d225bd23f96d879db7121212408c33e517c6ac4e5847ab9c300652e41e8fe48c";
            provenance measured;
            archiveFile "je301290c.xml";
            system    "methanol + dimethylCarbonate";
            pressure  "101300.000000 Pa";
        }
    );
    fingerprint "f5e569e3152d3e6c";   // of the declaration, frozen before the fit

    //  IN-SAMPLE: the model reproducing the very points it was
    //  fitted to.  It is NOT a validation; see the block below.
    weighting     uncertainty;   // chi2 is sum ((T_model - T_exp)/U)^2, dimensionless
    chi2          34.24285623;
    rms_K         0.17562395;
    nDataPoints   65;
    identifiable  true;
    maxAbsCorr    0.97752058;

    validity
    {
        temperature { min 314.41 K; max 348.58 K; }
        pressure    { min 40000 Pa; max 93320 Pa; }
        note        "the span of the FIT evidence; outside it the pair is an extrapolation";
    }
}

validation
{
    verdict     validated;

    heldOut
    {
        points      19;
        aad_pct     0.064080;
        aad_K       0.218818;
        domain_x1   ( 0.038000 0.947000 );
    }

    acceptance
    {
        maxAAD      0.088000;   // per cent
        origin      "declared before the fit by bin/choupo-curate, the ONE rule of C16: the held-out set's largest stated expanded uncertainty (U95 = 0.3 K) plus the catalogue vapour-pressure model's own error at that set's pure endpoints (NONE: the held-out study reports no pure-component bubble point, so the term is ZERO, the strictest reading of the rule -- the band is the measurement's own uncertainty alone; measured with no pair involved), as a percentage of the held-out mean T (341.73 K) = 0.0878 %, rounded UP to two significant figures";
    }
}
`,X=`/*---------------------------------------------------------------------------*\\
  NRTL binary interaction parameters --- ethylAcetate(i) + ethanol(j)

  REGRESSED BY CHOUPO to measured bubble temperatures (DEV.md C16, record
  docs/design/binary-pairs-from-open-measurements.md).  The two articles
  named under \`evidence\` are the SOURCE of the measurements; the NIST/TRC
  ThermoML Archive (ThermoML.v2020-09-30.tgz) was the finding aid that
  located them and is not reproduced.  The PARAMETERS are Choupo's own
  work, regressed and redistributed with the catalogue.

  EQUATION AND CONVENTIONS (the ones src/thermo/activityCoefficient/NRTL.cpp
  computes -- a record read under another convention is a different pair):
      tau_ij = a_ij + b_ij / T      [b in K]      G_ij = exp(-alpha tau_ij)
      ln gamma_i = sum_j tau_ji G_ji x_j / S_i
                   + sum_j (x_j G_ij / S_j)(tau_ij - sum_k tau_kj G_kj x_k / S_j),
      S_j = sum_k G_kj x_k.  Direction i->j as Renon & Prausnitz, AIChE J. 14
      (1968) 135: tau_12 = (g_12 - g_22)/RT.  a_ij = a_ji = 0 and alpha = 0.30
      were FIXED, not fitted: bubble temperatures alone do not identify them.

  FRAME: ideal-gas vapour, no Poynting term, the catalogue's own Antoine
  records for both pure components.  A different vapour or pure-component
  model changes what these numbers mean.

  VALIDITY: the span of the fit evidence (\`validity\` below).  The held-out
  test is \`validation\`.  reviewStatus interim: the measurements were
  transcribed from the archive and have NOT been read back against the
  articles; the fit has not been reviewed by a curator.  Promotion to
  \`reviewed\` is Vitor's.

  REPRODUCE: run tutorials/props/curation/curate07_nrtl_ethylacetate_ethanol -- its fit writes
  ethanol-ethylAcetate.proposal.dat; its parameters, evidence, validity and validation
  must equal this record's (bin/curate/check_regressed_pairs.py holds the
  two to each other, so the record cannot drift from its evidence).
\\*---------------------------------------------------------------------------*/

recordType binaryInteractionParameters;
schemaVersion 1;

pair { i ethylAcetate; j ethanol; }

components  ( ethylAcetate  ethanol );
model       NRTL;

parameters
{
    i           ethylAcetate;
    j           ethanol;
    a_ij        0.00000000;
    b_ij        95.40955096;
    a_ji        0.00000000;
    b_ji        214.77264863;
    alpha       0.30000000;
}

provenance
{
    origin        fitted;
    method        "fitParameters(T_bubble), Levenberg-Marquardt";
    methodVersion "choupoProps Choupo-dev";
    fittedInCase  "tutorials/props/curation/curate07_nrtl_ethylacetate_ethanol";
    reviewStatus  interim;
    reviewReason  "regressed by Choupo from archive-transcribed measurements; not yet read back against the articles";
    reuse         "Choupo's own regression, redistributed with the catalogue; the measured points belong to the cited articles and are not reproduced in this record";
    fitDate       "2026-09-28";

    evidence
    (
        {
            role      fit;
            dataset   "constant/experiments/ethylAcetate-ethanol-bubble-j.fluid.2005.07.010.dat";
            doi       "10.1016/j.fluid.2005.07.010";
            sha256    "23c8a585abd18c1cbce60330a71038a78a7f2e1c4a2345b84a6292781b9474ef";
            provenance measured;
            archiveFile "j.fluid.2005.07.010.xml";
            system    "ethylAcetate + ethanol";
            pressure  "101325.000000 Pa";
        }
        {
            role      validation;
            dataset   "constant/experiments/ethylAcetate-ethanol-bubble-je700322p.dat";
            doi       "10.1021/je700322p";
            sha256    "298b7d115299d4653d3bb7dd81d875afd231861d4c689f2c8eb3e3beb5460810";
            provenance measured;
            archiveFile "je700322p.xml";
            system    "ethylAcetate + ethanol";
            pressure  "100000.000000 Pa";
        }
    );
    fingerprint "2d3dba07971eb0ff";   // of the declaration, frozen before the fit

    //  IN-SAMPLE: the model reproducing the very points it was
    //  fitted to.  It is NOT a validation; see the block below.
    weighting     uncertainty;   // chi2 is sum ((T_model - T_exp)/U)^2, dimensionless
    chi2          4.34313934;
    rms_K         0.07657178;
    nDataPoints   24;
    identifiable  true;
    maxAbsCorr    0.99586528;

    validity
    {
        temperature { min 345.19 K; max 350.77 K; }
        pressure    { min 101325 Pa; max 101325 Pa; }
        note        "the span of the FIT evidence; outside it the pair is an extrapolation";
    }
}

validation
{
    verdict     validated;

    heldOut
    {
        points      28;
        aad_pct     0.032111;
        aad_K       0.110981;
        domain_x1   ( 0.021000 0.975000 );
    }

    acceptance
    {
        maxAAD      0.052000;   // per cent
        origin      "declared before the fit, by ONE rule applied to all five C16 systems: the held-out set's largest stated expanded uncertainty (U95 = 0.09 K) plus the catalogue vapour-pressure model's own error at that set's pure endpoints (ethanol -0.088 K, ethylAcetate -0.085 K; measured with no pair involved), as a percentage of the held-out mean T (346.35 K) = 0.0515 %, rounded UP to two significant figures";
    }
}
`,Z=`/*---------------------------------------------------------------------------*\\
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
`,ee=`/*---------------------------------------------------------------------------*\\
  NRTL binary interaction parameters --- isopropanol(i) + water(j)

  REGRESSED BY CHOUPO to measured bubble temperatures (DEV.md C16, record
  docs/design/binary-pairs-from-open-measurements.md).  The two articles
  named under \`evidence\` are the SOURCE of the measurements; the NIST/TRC
  ThermoML Archive (ThermoML.v2020-09-30.tgz) was the finding aid that
  located them and is not reproduced.  The PARAMETERS are Choupo's own
  work, regressed and redistributed with the catalogue.

  EQUATION AND CONVENTIONS (the ones src/thermo/activityCoefficient/NRTL.cpp
  computes -- a record read under another convention is a different pair):
      tau_ij = a_ij + b_ij / T      [b in K]      G_ij = exp(-alpha tau_ij)
      ln gamma_i = sum_j tau_ji G_ji x_j / S_i
                   + sum_j (x_j G_ij / S_j)(tau_ij - sum_k tau_kj G_kj x_k / S_j),
      S_j = sum_k G_kj x_k.  Direction i->j as Renon & Prausnitz, AIChE J. 14
      (1968) 135: tau_12 = (g_12 - g_22)/RT.  a_ij = a_ji = 0 and alpha = 0.30
      were FIXED, not fitted: bubble temperatures alone do not identify them.

  FRAME: ideal-gas vapour, no Poynting term, the catalogue's own Antoine
  records for both pure components.  A different vapour or pure-component
  model changes what these numbers mean.

  VALIDITY: the span of the fit evidence (\`validity\` below).  The held-out
  test is \`validation\`.  reviewStatus interim: the measurements were
  transcribed from the archive and have NOT been read back against the
  articles; the fit has not been reviewed by a curator.  Promotion to
  \`reviewed\` is Vitor's.

  REPRODUCE: run tutorials/props/curation/curate06_nrtl_isopropanol_water -- its fit writes
  isopropanol-water.proposal.dat; its parameters, evidence, validity and validation
  must equal this record's (bin/curate/check_regressed_pairs.py holds the
  two to each other, so the record cannot drift from its evidence).
\\*---------------------------------------------------------------------------*/

recordType binaryInteractionParameters;
schemaVersion 1;

pair { i isopropanol; j water; }

components  ( isopropanol  water );
model       NRTL;

parameters
{
    i           isopropanol;
    j           water;
    a_ij        0.00000000;
    b_ij        -69.64687747;
    a_ji        0.00000000;
    b_ji        968.22281035;
    alpha       0.30000000;
}

provenance
{
    origin        fitted;
    method        "fitParameters(T_bubble), Levenberg-Marquardt";
    methodVersion "choupoProps Choupo-dev";
    fittedInCase  "tutorials/props/curation/curate06_nrtl_isopropanol_water";
    reviewStatus  interim;
    reviewReason  "regressed by Choupo from archive-transcribed measurements; not yet read back against the articles";
    reuse         "Choupo's own regression, redistributed with the catalogue; the measured points belong to the cited articles and are not reproduced in this record";
    fitDate       "2026-09-28";

    evidence
    (
        {
            role      fit;
            dataset   "constant/experiments/isopropanol-water-bubble-j.jct.2017.02.005.dat";
            doi       "10.1016/j.jct.2017.02.005";
            sha256    "92b44d90896c814b6920d3dc41391cc18c29ecb274966b295e66d5d32758d7b5";
            provenance measured;
            archiveFile "j.jct.2017.02.005.xml";
            system    "isopropanol + water";
            pressure  "100000.000000 Pa";
        }
        {
            role      validation;
            dataset   "constant/experiments/isopropanol-water-bubble-acs.jced.7b00523.dat";
            doi       "10.1021/acs.jced.7b00523";
            sha256    "69bfa9914d8f5ad430241745a43628fc9476407e0c60a1ea50c38f700f93573b";
            provenance measured;
            archiveFile "acs.jced.7b00523.xml";
            system    "isopropanol + water";
            pressure  "101058.000000 Pa";
        }
    );
    fingerprint "75dbfc88425ad3b0";   // of the declaration, frozen before the fit

    //  IN-SAMPLE: the model reproducing the very points it was
    //  fitted to.  It is NOT a validation; see the block below.
    weighting     uncertainty;   // chi2 is sum ((T_model - T_exp)/U)^2, dimensionless
    chi2          90.12578832;
    rms_K         0.51694526;
    nDataPoints   29;
    identifiable  true;
    maxAbsCorr    0.89819127;

    validity
    {
        temperature { min 353.11 K; max 371.44 K; }
        pressure    { min 100000 Pa; max 100000 Pa; }
        note        "the span of the FIT evidence; outside it the pair is an extrapolation";
    }
}

validation
{
    verdict     validated;

    heldOut
    {
        points      16;
        aad_pct     0.234201;
        aad_K       0.841478;
        domain_x1   ( 0.017200 0.909500 );
    }

    acceptance
    {
        maxAAD      0.630000;   // per cent
        origin      "declared before the fit, by ONE rule applied to all five C16 systems: the held-out set's largest stated expanded uncertainty (U95 = 1.7 K) plus the catalogue vapour-pressure model's own error at that set's pure endpoints (water -0.519 K, isopropanol -0.246 K; measured with no pair involved), as a percentage of the held-out mean T (356.06 K) = 0.6231 %, rounded UP to two significant figures";
    }
}
`,ne=`/*---------------------------------------------------------------------------*\\
  NRTL binary interaction parameters --- methylAcetate(i) + methanol(j)

  REGRESSED BY CHOUPO to measured bubble temperatures (DEV.md C16, record
  docs/design/binary-pairs-from-open-measurements.md).  The two articles
  named under \`evidence\` are the SOURCE of the measurements; the NIST/TRC
  ThermoML Archive (ThermoML.v2020-09-30.tgz) was the finding aid that
  located them and is not reproduced.  The PARAMETERS are Choupo's own
  work, regressed and redistributed with the catalogue.

  EQUATION AND CONVENTIONS (the ones src/thermo/activityCoefficient/NRTL.cpp
  computes -- a record read under another convention is a different pair):
      tau_ij = a_ij + b_ij / T      [b in K]      G_ij = exp(-alpha tau_ij)
      ln gamma_i = sum_j tau_ji G_ji x_j / S_i
                   + sum_j (x_j G_ij / S_j)(tau_ij - sum_k tau_kj G_kj x_k / S_j),
      S_j = sum_k G_kj x_k.  Direction i->j as Renon & Prausnitz, AIChE J. 14
      (1968) 135: tau_12 = (g_12 - g_22)/RT.  a_ij = a_ji = 0 and alpha = 0.30
      were FIXED, not fitted: bubble temperatures alone do not identify them.

  FRAME: ideal-gas vapour, no Poynting term, the catalogue's own Antoine
  records for both pure components.  A different vapour or pure-component
  model changes what these numbers mean.

  VALIDITY: the span of the fit evidence (\`validity\` below).  The held-out
  test is \`validation\`.  reviewStatus interim: the measurements were
  transcribed from the archive and have NOT been read back against the
  articles; the fit has not been reviewed by a curator.  Promotion to
  \`reviewed\` is Vitor's.

  REPRODUCE: run tutorials/props/curation/curate08_nrtl_methylacetate_methanol -- its fit writes
  methanol-methylAcetate.proposal.dat; its parameters, evidence, validity and validation
  must equal this record's (bin/curate/check_regressed_pairs.py holds the
  two to each other, so the record cannot drift from its evidence).
\\*---------------------------------------------------------------------------*/

recordType binaryInteractionParameters;
schemaVersion 1;

pair { i methylAcetate; j methanol; }

components  ( methylAcetate  methanol );
model       NRTL;

parameters
{
    i           methylAcetate;
    j           methanol;
    a_ij        0.00000000;
    b_ij        182.85621460;
    a_ji        0.00000000;
    b_ji        185.62565058;
    alpha       0.30000000;
}

provenance
{
    origin        fitted;
    method        "fitParameters(T_bubble), Levenberg-Marquardt";
    methodVersion "choupoProps Choupo-dev";
    fittedInCase  "tutorials/props/curation/curate08_nrtl_methylacetate_methanol";
    reviewStatus  interim;
    reviewReason  "regressed by Choupo from archive-transcribed measurements; not yet read back against the articles";
    reuse         "Choupo's own regression, redistributed with the catalogue; the measured points belong to the cited articles and are not reproduced in this record";
    fitDate       "2026-09-28";

    evidence
    (
        {
            role      fit;
            dataset   "constant/experiments/methylAcetate-methanol-bubble-je600518s.dat";
            doi       "10.1021/je600518s";
            sha256    "b4f24cd832d654f01940355beb30f1814d3e6c7369d85faa91c3d0b1e974d798";
            provenance measured;
            archiveFile "je600518s.xml";
            system    "methylAcetate + methanol";
            pressure  "100000.000000 Pa";
        }
        {
            role      validation;
            dataset   "constant/experiments/methylAcetate-methanol-bubble-j.fluid.2015.04.018.dat";
            doi       "10.1016/j.fluid.2015.04.018";
            sha256    "c46f1a33158ddf01e5f3566d683cc19f69885b9933857fa97986c4b0d08bbcf4";
            provenance measured;
            archiveFile "j.fluid.2015.04.018.xml";
            system    "methylAcetate + methanol";
            pressure  "101300.000000 Pa";
        }
    );
    fingerprint "ca24b4e6cc9b65e8";   // of the declaration, frozen before the fit

    //  IN-SAMPLE: the model reproducing the very points it was
    //  fitted to.  It is NOT a validation; see the block below.
    weighting     uncertainty;   // chi2 is sum ((T_model - T_exp)/U)^2, dimensionless
    chi2          0.73807387;
    rms_K         0.02872998;
    nDataPoints   27;
    identifiable  true;
    maxAbsCorr    0.99168510;

    validity
    {
        temperature { min 326.32 K; max 335.44 K; }
        pressure    { min 100000 Pa; max 100000 Pa; }
        note        "the span of the FIT evidence; outside it the pair is an extrapolation";
    }
}

validation
{
    verdict     validated;

    heldOut
    {
        points      19;
        aad_pct     0.045433;
        aad_K       0.150139;
        domain_x1   ( 0.010000 0.980000 );
    }

    acceptance
    {
        maxAAD      0.089000;   // per cent
        origin      "declared before the fit, by ONE rule applied to all five C16 systems: the held-out set's largest stated expanded uncertainty (U95 = 0.17 K) plus the catalogue vapour-pressure model's own error at that set's pure endpoints (methanol +0.003 K, methylAcetate -0.121 K; measured with no pair involved), as a percentage of the held-out mean T (330.04 K) = 0.0881 %, rounded UP to two significant figures";
    }
}
`,te=`/*---------------------------------------------------------------------------*\\
  NRTL binary interaction parameters --- methanol(i) + water(j)

  REGRESSED BY CHOUPO to measured bubble temperatures (DEV.md C16, record
  docs/design/binary-pairs-from-open-measurements.md).  The two articles
  named under \`evidence\` are the SOURCE of the measurements; the NIST/TRC
  ThermoML Archive (ThermoML.v2020-09-30.tgz) was the finding aid that
  located them and is not reproduced.  The PARAMETERS are Choupo's own
  work, regressed and redistributed with the catalogue.

  EQUATION AND CONVENTIONS (the ones src/thermo/activityCoefficient/NRTL.cpp
  computes -- a record read under another convention is a different pair):
      tau_ij = a_ij + b_ij / T      [b in K]      G_ij = exp(-alpha tau_ij)
      ln gamma_i = sum_j tau_ji G_ji x_j / S_i
                   + sum_j (x_j G_ij / S_j)(tau_ij - sum_k tau_kj G_kj x_k / S_j),
      S_j = sum_k G_kj x_k.  Direction i->j as Renon & Prausnitz, AIChE J. 14
      (1968) 135: tau_12 = (g_12 - g_22)/RT.  a_ij = a_ji = 0 and alpha = 0.30
      were FIXED, not fitted: bubble temperatures alone do not identify them.

  FRAME: ideal-gas vapour, no Poynting term, the catalogue's own Antoine
  records for both pure components.  A different vapour or pure-component
  model changes what these numbers mean.

  VALIDITY: the span of the fit evidence (\`validity\` below).  The held-out
  test is \`validation\`.  reviewStatus interim: the measurements were
  transcribed from the archive and have NOT been read back against the
  articles; the fit has not been reviewed by a curator.  Promotion to
  \`reviewed\` is Vitor's.

  REPRODUCE: run tutorials/props/curation/curate04_nrtl_methanol_water -- its fit writes
  methanol-water.proposal.dat; its parameters, evidence, validity and validation
  must equal this record's (bin/curate/check_regressed_pairs.py holds the
  two to each other, so the record cannot drift from its evidence).
\\*---------------------------------------------------------------------------*/

recordType binaryInteractionParameters;
schemaVersion 1;

pair { i methanol; j water; }

components  ( methanol  water );
model       NRTL;

parameters
{
    i           methanol;
    j           water;
    a_ij        0.00000000;
    b_ij        165.00630266;
    a_ji        0.00000000;
    b_ji        41.76488968;
    alpha       0.30000000;
}

provenance
{
    origin        fitted;
    method        "fitParameters(T_bubble), Levenberg-Marquardt";
    methodVersion "choupoProps Choupo-dev";
    fittedInCase  "tutorials/props/curation/curate04_nrtl_methanol_water";
    reviewStatus  interim;
    reviewReason  "regressed by Choupo from archive-transcribed measurements; not yet read back against the articles";
    reuse         "Choupo's own regression, redistributed with the catalogue; the measured points belong to the cited articles and are not reproduced in this record";
    fitDate       "2026-09-28";

    evidence
    (
        {
            role      fit;
            dataset   "constant/experiments/methanol-water-bubble-j.jct.2009.11.020.dat";
            doi       "10.1016/j.jct.2009.11.020";
            sha256    "6a858b6788994573a11e01315b96cb3eeb42603a2e20fc7b234ddb4d04c7bbaf";
            provenance measured;
            archiveFile "j.jct.2009.11.020.xml";
            system    "methanol + water";
        }
        {
            role      validation;
            dataset   "constant/experiments/methanol-water-bubble-je200341c.dat";
            doi       "10.1021/je200341c";
            sha256    "b88f3599ac1499ff81756c347c67a3d86f679783fceeabbf2ce1a64feb5b3b84";
            provenance measured;
            archiveFile "je200341c.xml";
            system    "methanol + water";
            pressure  "101320.000000 Pa";
        }
    );
    fingerprint "8214c067c8b72061";   // of the declaration, frozen before the fit

    //  IN-SAMPLE: the model reproducing the very points it was
    //  fitted to.  It is NOT a validation; see the block below.
    weighting     uncertainty;   // chi2 is sum ((T_model - T_exp)/U)^2, dimensionless
    chi2          315.93727713;
    rms_K         0.49995444;
    nDataPoints   54;
    identifiable  true;
    maxAbsCorr    0.99575065;

    validity
    {
        temperature { min 297.40 K; max 361.20 K; }
        pressure    { min 15190 Pa; max 95300 Pa; }
        note        "the span of the FIT evidence; outside it the pair is an extrapolation";
    }
}

validation
{
    verdict     validated;

    heldOut
    {
        points      13;
        aad_pct     0.150061;
        aad_K       0.534751;
        domain_x1   ( 0.005000 0.969000 );
    }

    acceptance
    {
        maxAAD      0.330000;   // per cent
        origin      "declared before the fit, by ONE rule applied to all five C16 systems: the held-out set's largest stated expanded uncertainty (U95 = 0.46 K) plus the catalogue vapour-pressure model's own error at that set's pure endpoints (water -0.698 K, methanol -0.142 K; measured with no pair involved), as a percentage of the held-out mean T (352.05 K) = 0.3289 %, rounded UP to two significant figures";
    }
}
`,ae=`/*---------------------------------------------------------------------------*\\
  NRTL binary interaction parameters --- nButanol(i) + water(j)

  REGRESSED BY CHOUPO to MEASURED LIQUID-LIQUID TIE LINES and the
  heteroazeotrope temperature (DEV.md 4c C16, C225, C226, C280).  The
  articles named under \`evidence\` are the SOURCE of the measurements; the
  NIST/TRC ThermoML Archive (doi 10.18434/mds2-2422) was the finding aid and
  is not reproduced.  The PARAMETERS are Choupo's own work, regressed and
  redistributed with the catalogue.

  EQUATION AND CONVENTIONS (the ones src/thermo/activityCoefficient/NRTL.cpp
  computes -- a record read under another convention is a different pair):
      tau_ij = a_ij + b_ij / T      [b in K]      G_ij = exp(-alpha tau_ij)
      ln gamma_i = sum_j tau_ji G_ji x_j / S_i
                   + sum_j (x_j G_ij / S_j)(tau_ij - sum_k tau_kj G_kj x_k / S_j),
      S_j = sum_k G_kj x_k.  Direction i->j as Renon & Prausnitz, AIChE J. 14
      (1968) 135.  FIVE parameters, all fitted (a_ij, a_ji, b_ij, b_ji, alpha):
      the four tau numbers are strongly correlated (max|corr| 0.999) -- the
      pair is ONE set, to be used whole; no single number of it carries a
      meaning.

  WHAT IT IS FOR.  The liquid-liquid split of 1-butanol + water against
  temperature, and the heteroazeotrope.  Solubility of butanol in water,
  mole fraction: see the case header (flat with T, as measured).  The fit was
  by least squares with the binodal rows RELATIVE (objective, DEV.md 4c C280)
  on 14 tie lines from four laboratories plus the two heteroazeotrope bubble
  points of 10.1016/j.jct.2014.07.021; held out: 29 tie lines (21 studies)
  and the heteroazeotrope points of 10.1016/j.jct.2016.04.013.

  WHAT IT IS NOT FOR.  THE HOMOGENEOUS BUTANOL-RICH VLE AT 1 ATM.  Scored on
  the homogeneous bubble series of 10.1021/je700411p (x 0.56-0.99, 366-390 K),
  held out, the pair reads 2.18 K high on average (0.59 %, max 3.2 K) against
  the 0.23 % band of this record: that verdict is notValidated, and it is
  reported in the case (operation report_homogeneous_bubble), not hidden.  A
  column, a flash or a still at 1 atm on the butanol-rich side is NOT covered
  by this record's verdict.

  FRAME: ideal-gas vapour, no Poynting term, the catalogue's own Antoine
  records for both pure components (water's puts its normal boiling point
  0.70 K low).  A different vapour or pure-component model changes what these
  numbers mean.

  VALIDITY: the span of the fit evidence (\`validity\` below): 288.2-365.85 K at
  101.3 kPa.  reviewStatus interim: the measurements were transcribed from the
  archive and have NOT been read back against the articles; the fit has not
  been reviewed by a curator.  Promotion to \`reviewed\` is Vitor's.

  PHASE STABILITY: the pair predicts a liquid-liquid split across its validity
  span, as the evidence requires (held by check_regressed_pairs arm (f), the
  tie-line form): a flash, decanter or cooler of this mixture splits the
  liquid.

  REPRODUCE: run tutorials/props/curation/curate14_nrtl_butanol_water -- its
  fit_binodal operation writes nButanol-water.proposal.dat; parameters,
  evidence, validity and validation must equal this record's
  (bin/curate/check_regressed_pairs.py holds the two to each other).
\\*---------------------------------------------------------------------------*/

recordType binaryInteractionParameters;
schemaVersion 1;

pair { i nButanol; j water; }

components  ( nButanol  water );
model       NRTL;

parameters
{
    i           nButanol;
    j           water;
    a_ij        -4.71077589;
    b_ij        1894.04289944;
    a_ji        4.09957276;
    b_ji        -163.83640884;
    alpha       0.44592340;
}

provenance
{
    origin        fitted;
    method        "fitParameters(T_bubble+LLE), Levenberg-Marquardt, objective leastSquares, binodal rows relative";
    methodVersion "choupoProps Choupo-dev";
    fittedInCase  "tutorials/props/curation/curate14_nrtl_butanol_water";
    reviewStatus  interim;
    reviewReason  "regressed by Choupo from archive-transcribed measurements; not yet read back against the articles; NOT for the homogeneous butanol-rich VLE at 1 atm (2.18 K high on average, held out)";
    reuse         "Choupo's own regression, redistributed with the catalogue; the measured points belong to the cited articles and are not reproduced in this record";
    fitDate       "2026-11-10";

    evidence
    (
        {
            role      fit;
            dataset   "constant/experiments/nButanol-water-bubble-j.jct.2014.07.021.dat";
            doi       "10.1016/j.jct.2014.07.021";
            sha256    "bcb8c39256002005a5f71569dd23d50c496d6d2d1346e79f88376e623a075e9d";
            provenance measured;
            archiveFile "j.jct.2014.07.021.xml";
            system    "nButanol + water";
            pressure  "101300.000000 Pa";
        }
        {
            role      fit;
            dataset   "constant/experiments/nButanol-water-lle-jced.7b00302.dat";
            doi       "10.1021/acs.jced.7b00302";
            sha256    "2b041ca86f91b00e7951d1d6ae46c3bbeefd1ce19bfa296c4b14a134c4902918";
            provenance measured;
            archiveFile "acs.jced.7b00302.xml";
            system    "nButanol + water";
            property  binaryLLE.binodal;
        }
        {
            role      fit;
            dataset   "constant/experiments/nButanol-water-lle-je5007218.dat";
            doi       "10.1021/je5007218";
            sha256    "1bee430b1b42108e4cb41c02238ef25d08e9d0e82d171430c2c3feed582fdc1d";
            provenance measured;
            archiveFile "je5007218.xml";
            system    "nButanol + water";
            property  binaryLLE.binodal;
        }
        {
            role      fit;
            dataset   "constant/experiments/nButanol-water-lle-fluid.2007.12.003.dat";
            doi       "10.1016/j.fluid.2007.12.003";
            sha256    "c070e4e43ce62a513df4429493676348434a947f0ecaa958a75f0abfc8ed74bf";
            provenance measured;
            archiveFile "j.fluid.2007.12.003.xml";
            system    "nButanol + water";
            property  binaryLLE.binodal;
        }
        {
            role      fit;
            dataset   "constant/experiments/nButanol-water-lle-jced.6b00941.dat";
            doi       "10.1021/acs.jced.6b00941";
            sha256    "53461bfec35d34b294b8e558d714a11a2da32b648adeee0ca98609ebe1f6f5e2";
            provenance measured;
            archiveFile "acs.jced.6b00941.xml";
            system    "nButanol + water";
            property  binaryLLE.binodal;
        }
        {
            role      fit;
            dataset   "constant/experiments/nButanol-water-lle-jct.2014.07.021.dat";
            doi       "10.1016/j.jct.2014.07.021";
            sha256    "bcb8c39256002005a5f71569dd23d50c496d6d2d1346e79f88376e623a075e9d";
            provenance measured;
            archiveFile "j.jct.2014.07.021.xml";
            system    "nButanol + water";
            property  binaryLLE.binodal;
        }
        {
            role      validation;
            dataset   "constant/experiments/nButanol-water-bubble-j.jct.2016.04.013.dat";
            doi       "10.1016/j.jct.2016.04.013";
            sha256    "461be41d83ed04e81fe49ebec0c33d0b649f585e8a0b6739d58569b8e87085a6";
            provenance measured;
            archiveFile "j.jct.2016.04.013.xml";
            system    "nButanol + water";
            pressure  "101300.000000 Pa";
        }
        {
            role      validation;
            dataset   "constant/experiments/nButanol-water-lle-je700411p.dat";
            doi       "10.1021/je700411p";
            sha256    "32ed6e15958b58bc35d7eb647d3cb4b75e9d6232ffbe7608a87c9c4b09cc34b1";
            provenance measured;
            archiveFile "je700411p.xml";
            system    "nButanol + water";
            property  binaryLLE.binodal;
        }
        {
            role      validation;
            dataset   "constant/experiments/nButanol-water-lle-je700411p.dat";
            doi       "10.1021/je700411p";
            sha256    "32ed6e15958b58bc35d7eb647d3cb4b75e9d6232ffbe7608a87c9c4b09cc34b1";
            provenance measured;
            archiveFile "je700411p.xml";
            system    "nButanol + water";
            property  binaryLLE.binodal;
        }
        {
            role      validation;
            dataset   "constant/experiments/nButanol-water-lle-fluid.2007.07.011.dat";
            doi       "10.1016/j.fluid.2007.07.011";
            sha256    "9acb0cd3121d8f2d17610955dd10f95b4928c6099a22a81b3741b6cdfd910055";
            provenance measured;
            archiveFile "j.fluid.2007.07.011.xml";
            system    "nButanol + water";
            property  binaryLLE.binodal;
        }
        {
            role      validation;
            dataset   "constant/experiments/nButanol-water-lle-jct.2018.03.024.dat";
            doi       "10.1016/j.jct.2018.03.024";
            sha256    "bb853959cbb132a02c201262cbb0876c6ff3de85ca743676647f925280b8cccc";
            provenance measured;
            archiveFile "j.jct.2018.03.024.xml";
            system    "nButanol + water";
            property  binaryLLE.binodal;
        }
        {
            role      validation;
            dataset   "constant/experiments/nButanol-water-lle-fluid.2019.04.020.dat";
            doi       "10.1016/j.fluid.2019.04.020";
            sha256    "ddd003b56e5c63429a69bed13597556ea4398ff8ef2e33013946326be7b1b239";
            provenance measured;
            archiveFile "j.fluid.2019.04.020.xml";
            system    "nButanol + water";
            property  binaryLLE.binodal;
        }
        {
            role      validation;
            dataset   "constant/experiments/nButanol-water-lle-jct.2019.03.001.dat";
            doi       "10.1016/j.jct.2019.03.001";
            sha256    "832e23d07f4f2324ffc32b7a7ec31a476e6293e4eb6576f44876a5f9d91a65b0";
            provenance measured;
            archiveFile "j.jct.2019.03.001.xml";
            system    "nButanol + water";
            property  binaryLLE.binodal;
        }
        {
            role      validation;
            dataset   "constant/experiments/nButanol-water-lle-jct.2016.04.013.dat";
            doi       "10.1016/j.jct.2016.04.013";
            sha256    "461be41d83ed04e81fe49ebec0c33d0b649f585e8a0b6739d58569b8e87085a6";
            provenance measured;
            archiveFile "j.jct.2016.04.013.xml";
            system    "nButanol + water";
            property  binaryLLE.binodal;
        }
        {
            role      validation;
            dataset   "constant/experiments/nButanol-water-lle-jct.2016.06.010.dat";
            doi       "10.1016/j.jct.2016.06.010";
            sha256    "1909169e98f9f62433a95c28a5540d2e05a0d9905c8825d7bfea09c2b60706b9";
            provenance measured;
            archiveFile "j.jct.2016.06.010.xml";
            system    "nButanol + water";
            property  binaryLLE.binodal;
        }
        {
            role      validation;
            dataset   "constant/experiments/nButanol-water-lle-fluid.2004.12.004.dat";
            doi       "10.1016/j.fluid.2004.12.004";
            sha256    "e1b765e8957b96a697a30bcf94b7c879edec195a36cd5f1650cb01da26e9895d";
            provenance measured;
            archiveFile "j.fluid.2004.12.004.xml";
            system    "nButanol + water";
            property  binaryLLE.binodal;
        }
        {
            role      validation;
            dataset   "constant/experiments/nButanol-water-lle-jct.2015.10.003.dat";
            doi       "10.1016/j.jct.2015.10.003";
            sha256    "e185b3cb4c167b80eb62b6f02bbe34fdce0cb36fa83d1e3859aa1aef03ce7f30";
            provenance measured;
            archiveFile "j.jct.2015.10.003.xml";
            system    "nButanol + water";
            property  binaryLLE.binodal;
        }
        {
            role      validation;
            dataset   "constant/experiments/nButanol-water-lle-jct.2012.04.017.dat";
            doi       "10.1016/j.jct.2012.04.017";
            sha256    "2e030acbf4e61f905fd46893b7e0019fa31f4df70f778b4f696f9b2fcb13bf6e";
            provenance measured;
            archiveFile "j.jct.2012.04.017.xml";
            system    "nButanol + water";
            property  binaryLLE.binodal;
        }
        {
            role      validation;
            dataset   "constant/experiments/nButanol-water-lle-jct.2015.11.002.dat";
            doi       "10.1016/j.jct.2015.11.002";
            sha256    "cc433972e60e84cb2931d00e20565694e37ae03be342275e69de2a7bfcde3557";
            provenance measured;
            archiveFile "j.jct.2015.11.002.xml";
            system    "nButanol + water";
            property  binaryLLE.binodal;
        }
        {
            role      validation;
            dataset   "constant/experiments/nButanol-water-lle-fluid.2012.07.032.dat";
            doi       "10.1016/j.fluid.2012.07.032";
            sha256    "b4341f0fc6aac41b9957d885d88311ad0951062766a0b810742dce543334a072";
            provenance measured;
            archiveFile "j.fluid.2012.07.032.xml";
            system    "nButanol + water";
            property  binaryLLE.binodal;
        }
        {
            role      validation;
            dataset   "constant/experiments/nButanol-water-lle-fluid.2017.12.023.dat";
            doi       "10.1016/j.fluid.2017.12.023";
            sha256    "1e9f81dce8d9b15a4c3d619aa324730edb266f04808cf017328dffa82dec52d1";
            provenance measured;
            archiveFile "j.fluid.2017.12.023.xml";
            system    "nButanol + water";
            property  binaryLLE.binodal;
        }
        {
            role      validation;
            dataset   "constant/experiments/nButanol-water-lle-je400501z.dat";
            doi       "10.1021/je400501z";
            sha256    "5ceb58edd3227bad689191fd5b0248b59cc77784c64797cb8b26c261932fd99a";
            provenance measured;
            archiveFile "je400501z.xml";
            system    "nButanol + water";
            property  binaryLLE.binodal;
        }
        {
            role      validation;
            dataset   "constant/experiments/nButanol-water-lle-acs.jced.6b00725.dat";
            doi       "10.1021/acs.jced.6b00725";
            sha256    "53bbfeb2a1e4c37dfc8a8b9d331d3680805dff14a8ade72e712f13e824d8edbd";
            provenance measured;
            archiveFile "acs.jced.6b00725.xml";
            system    "nButanol + water";
            property  binaryLLE.binodal;
        }
        {
            role      validation;
            dataset   "constant/experiments/nButanol-water-lle-fluid.2018.10.021.dat";
            doi       "10.1016/j.fluid.2018.10.021";
            sha256    "7a5049561651bf4c700b980d8ec89447a7617761f52e20d1f467ccdc3834dd35";
            provenance measured;
            archiveFile "j.fluid.2018.10.021.xml";
            system    "nButanol + water";
            property  binaryLLE.binodal;
        }
        {
            role      validation;
            dataset   "constant/experiments/nButanol-water-lle-jct.2017.03.019.dat";
            doi       "10.1016/j.jct.2017.03.019";
            sha256    "054ed9d0d8974e38ea39a0ff37d61a52ce414d42d99d19b8d6d5808a333fff70";
            provenance measured;
            archiveFile "j.jct.2017.03.019.xml";
            system    "nButanol + water";
            property  binaryLLE.binodal;
        }
        {
            role      validation;
            dataset   "constant/experiments/nButanol-water-lle-fluid.2014.07.011.dat";
            doi       "10.1016/j.fluid.2014.07.011";
            sha256    "4f6fda3b1e15246171fa6006a550dc659c59a54652b4339151a8994895128e94";
            provenance measured;
            archiveFile "j.fluid.2014.07.011.xml";
            system    "nButanol + water";
            property  binaryLLE.binodal;
        }
    );
    fingerprint "7e55be3fa48b6ca5";   // of the declaration, frozen before the fit

    //  IN-SAMPLE: the model reproducing the very points it was
    //  fitted to.  It is NOT a validation; see the block below.
    weighting     uncertainty;   // chi2 is sum ((T_model - T_exp)/U)^2, dimensionless
    chi2          186.97483204;
    rms_K         0.27785134;
    nDataPoints   30;
    identifiable  true;
    maxAbsCorr    0.99878120;

    validity
    {
        temperature { min 288.20 K; max 365.85 K; }
        pressure    { min 101300 Pa; max 101300 Pa; }
        note        "the span of the FIT evidence; outside it the pair is an extrapolation";
    }
}

validation
{
    verdict     validated;

    heldOut
    {
        points      2;
        aad_pct     0.102898;
        aad_K       0.376320;
        domain_x1   ( 0.021000 0.362200 );
    }

    acceptance
    {
        maxAAD      0.230000;   // per cent
        origin      "the rule of C16 for bubble temperatures, with its second term read as written (REVISED after the first run, and said so): the held-out bubble sets' largest stated expanded uncertainty (U95 = 0.15 K) plus the catalogue vapour-pressure model's error at the pure endpoints at the sets' pressure -- water's Antoine record puts its normal boiling point at 372.45 K against 373.15 K (measured against IAPWS, written in water.dat), 0.70 K -- so 0.85 K = 0.23 % of the held-out mean T (365.79 K). The first reading set that term to ZERO because no held-out set reports a pure endpoint; the vapour-pressure error is in every bubble point whether or not the endpoint is reported, so a perfect pair would have missed 0.042 %. For the binodal: 0.01 in mole fraction, as declared before the first run and NOT changed";
        maxLLE      0.010000;   // mole fraction, the binodal band
    }

    //  LIQUID-LIQUID EVIDENCE (DEV.md 4c C226): this pair was regressed
    //  to measured binodal compositions as well as bubble temperatures,
    //  and DECLARES that it splits the liquid.  The band was declared
    //  before the fit; bin/curate/check_regressed_pairs.py (arm f) holds
    //  the equation to the measured tie lines of the evidence.
    liquidLiquid true;
    gap
    {
        ties         14;
        T            { min 288.20 K; max 365.85 K; }
        band_dx      0.010000;   // mole fraction, mean |dx|, declared before the fit
        sigma_dx     0.025000;   // the weight of the tie-line rows
        aad_dx       0.005625;   // HELD-OUT tie lines
        heldOutTies  29;
        basis        heldOut;
    }
}
`,re=`/*---------------------------------------------------------------------------*\\
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
`,ie=`/*---------------------------------------------------------------------------*\\
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
`,oe=`/*---------------------------------------------------------------------------*\\
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
`,se=[],de=Object.assign({"../../../data/standards/parameters/NRTL/1Propanol-water.dat":z,"../../../data/standards/parameters/NRTL/acetone-ethanol.dat":Q,"../../../data/standards/parameters/NRTL/acetonitrile-water.dat":Y,"../../../data/standards/parameters/NRTL/benzene-toluene.dat":$,"../../../data/standards/parameters/NRTL/dimethylCarbonate-isopropanol.dat":W,"../../../data/standards/parameters/NRTL/dimethylCarbonate-methanol.dat":J,"../../../data/standards/parameters/NRTL/ethanol-ethylAcetate.dat":X,"../../../data/standards/parameters/NRTL/ethanol-water.dat":Z,"../../../data/standards/parameters/NRTL/isopropanol-water.dat":ee,"../../../data/standards/parameters/NRTL/methanol-methylAcetate.dat":ne,"../../../data/standards/parameters/NRTL/methanol-water.dat":te,"../../../data/standards/parameters/NRTL/nButanol-water.dat":ae}),ce=Object.assign({}),le=Object.assign({"../../../data/standards/parameters/UNIQUAC/aceticAcid-methylAcetate.dat":re,"../../../data/standards/parameters/UNIQUAC/methanol-methylAcetate.dat":ie,"../../../data/standards/parameters/UNIQUAC/methylAcetate-water.dat":oe});function v(e){return typeof e=="string"?e:typeof e=="number"?String(e):""}function C(e,n){let t;try{t=T(x(e))}catch{return null}const a=t.components;if(!Array.isArray(a)||a.length!==2)return null;const o=v(t.model)||n.modelHint;if(!o)return null;const r={},s=t.parameters;if(typeof s=="object"&&s!==null&&!Array.isArray(s))for(const[d,u]of Object.entries(s))(typeof u=="number"||typeof u=="string")&&(r[d]=u);const c=t.provenance,l=typeof c=="object"&&c!==null&&!Array.isArray(c)?c:null;return{model:o,a:String(a[0]),b:String(a[1]),tier:n.tier,file:n.file,stem:n.file.split("/").pop().replace(/\.dat$/,""),parameters:r,provenance:{origin:l?v(l.origin):"",reviewStatus:l?v(l.reviewStatus):"",fittedInCase:l?v(l.fittedInCase):"",citation:l?v(l.citation)||v(l.source):""}}}function j(e,n){const t=[];for(const[a,o]of Object.entries(e)){const r=a.replace(/^.*?data\/standards\//,"data/standards/"),s=C(o,{file:r,tier:"standards",modelHint:n});s&&t.push(s)}return t}const D=[...j(de,"NRTL"),...j(ce,"Wilson"),...j(le,"UNIQUAC")];function M(e,n,t){return e.a===n&&e.b===t||e.a===t&&e.b===n}function Ne(e,n,t){return D.some(a=>a.model===e&&M(a,n,t))}let w=null;function ue(){if(w)return w;const e=[];for(const n of se){const t=n.file.includes("/")?n.file.split("/")[0]:"",a=C(n.body,{file:`data/local/parameters/${n.file}`,tier:"local",modelHint:t});a&&e.push(a)}return w=e,e}const he=/(?:^|\/)constant\/parameters\/([^/]+)\/[^/]+\.dat$/;function me(e){if(!e)return[];const n=[];for(const[t,a]of Object.entries(e)){const o=he.exec(t);if(!o)continue;const r=C(a,{file:t,tier:"case",modelHint:o[1]});r&&n.push(r)}return n}function Ie(e,n,t){return[...D,...ue(),...me(t)].filter(a=>M(a,e,n))}function Oe(e){const n=[];e.provenance.origin&&n.push(e.provenance.origin),e.provenance.reviewStatus&&n.push(e.provenance.reviewStatus),e.provenance.fittedInCase&&n.push(`fitted in ${e.provenance.fittedInCase.split("/").pop()}`);const t=e.tier==="standards"?"standards":e.tier==="local"?"data/local":"open case";return n.length?`${t} · ${n.join(" · ")}`:t}const U={water:[{group:"H2O",count:1}],ethanol:[{group:"CH3",count:1},{group:"CH2",count:1},{group:"OH",count:1}],nButanol:[{group:"CH3",count:1},{group:"CH2",count:3},{group:"OH",count:1}],nHexane:[{group:"CH3",count:2},{group:"CH2",count:4}],benzene:[{group:"ACH",count:6}],C4H10:[{group:"CH3",count:2},{group:"CH2",count:2}],nPentane:[{group:"CH3",count:2},{group:"CH2",count:3}],isopentane:[{group:"CH3",count:3},{group:"CH2",count:1},{group:"CH",count:1}],nHeptane:[{group:"CH3",count:2},{group:"CH2",count:5}],C8H18:[{group:"CH3",count:2},{group:"CH2",count:6}],cyclohexane:[{group:"CH2",count:6}]};function pe(e){let n;try{n=T(x(e))}catch{return null}const t=n.unifac;if(!t||typeof t!="object")return null;const a=t.groups;if(!Array.isArray(a))return null;const o=[];for(const r of a)r&&typeof r=="object"&&typeof r.group=="string"&&typeof r.count=="number"&&o.push({group:r.group,count:r.count});return o.length?o:null}function Se(e){const n={};if(!e)return n;for(const[t,a]of Object.entries(e)){if(!/(^|\/)constant\/components\/[^/]+\.dat$/.test(t))continue;let o;try{o=T(x(a))}catch{continue}const r=typeof o.name=="string"?o.name:"";if(!r)continue;const s=pe(a);s&&(n[r]=s)}return n}function Le(e,n={}){return Object.prototype.hasOwnProperty.call(n,e)||Object.prototype.hasOwnProperty.call(U,e)}function be(e,n={}){const t={};for(const a of e){const o=n[a]??U[a];o&&(t[a]=o.map(r=>({group:r.group,count:r.count})))}return t}function fe(e,n){const t=_(e[0],n)?.tb,a=_(e[1],n)?.tb;return typeof t=="number"&&typeof a=="number"&&a<t?[e[1],e[0]]:e}function ke(e){const n=fe(e.pair,e.catalogue),t=n[0],a=n[1],o=e.kind!=="gamma",r=o?["T_bubble",`y_eq_${t}`,"liquid_stable"]:[`gamma_${t}`,`gamma_${a}`];return{components:[...n],properties:r,axis:{variable:`x[${t}]`,from:0,to:1,n:Math.max(2,Math.round(e.n))},state:{P:e.P,composition:{[t]:.5,[a]:.5}},activityModel:{model:e.activity},equationOfState:{model:e.eos},...o?{vleTwoLiquid:!0}:{},...e.activity==="UNIFAC"?{unifacGroups:be(n,e.localUnifac)}:{},...e.componentFiles&&Object.keys(e.componentFiles).length>0?{componentFiles:e.componentFiles}:{}}}function De(e){const n=[...e.pair].sort((d,u)=>(_(d,e.catalogue)?.tb??0)-(_(u,e.catalogue)?.tb??0)),t=n[0]??"",a=n[n.length-1]??"",o=e.TminK-273.15,r=e.TmaxK-273.15,s=[];for(let d=e.rhFrom;d<=e.rhTo+1e-9&&d<100;d+=Math.max(1,e.rhStep))s.push(Math.round(d));const c=[],l=Math.max(5,e.wbStepC);for(let d=Math.ceil(o/l)*l;d<=Math.min(r,95);d+=l)c.push(d);return{components:[t,a],properties:[],axis:{variable:"T",from:0,to:1,n:2},state:{composition:{[t]:.5,[a]:.5}},psychrometry:{carrier:t,condensable:a,P:e.P,TminC:o,TmaxC:r,gridN:Math.max(20,Math.round(e.gridN)),rh:s,wetBulb:c},transport:{model:"Chung",thermalConductivity:"Eucken",diffusivity:"Fuller"},...e.componentFiles&&Object.keys(e.componentFiles).length>0?{componentFiles:{...e.componentFiles}}:{}}}export{S as B,p as E,ge as I,je as a,ke as b,Te as c,Pe as d,G as e,V as f,Se as g,Ae as h,we as i,Ne as j,Le as k,Ie as l,xe as m,Ee as n,fe as o,Oe as p,Ce as q,De as r,Re as s,be as u};
