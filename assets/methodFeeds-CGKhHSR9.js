import{bU as D,dH as T,d3 as C}from"./index-PzqdIxZl.js";import{d as S,b as y}from"./catalogue-CTTalT5T.js";/**
 * @license @tabler/icons-react v3.44.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */const V=[["path",{d:"M3 19a9 9 0 0 1 9 0a9 9 0 0 1 9 0",key:"svg-0"}],["path",{d:"M3 6a9 9 0 0 1 9 0a9 9 0 0 1 9 0",key:"svg-1"}],["path",{d:"M3 6l0 13",key:"svg-2"}],["path",{d:"M12 6l0 13",key:"svg-3"}],["path",{d:"M21 6l0 13",key:"svg-4"}]],_e=D("outline","book","Book",V);/**
 * @license @tabler/icons-react v3.44.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */const G=[["path",{d:"M13 5h8",key:"svg-0"}],["path",{d:"M13 9h5",key:"svg-1"}],["path",{d:"M13 15h8",key:"svg-2"}],["path",{d:"M13 19h5",key:"svg-3"}],["path",{d:"M3 5a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1l0 -4",key:"svg-4"}],["path",{d:"M3 15a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1l0 -4",key:"svg-5"}]],ve=D("outline","list-details","ListDetails",G),O=[{id:"carbonate",label:"carbonate (CO₂ / HCO₃⁻ / CO₃²⁻)",master:"HCO3",total:.002,gas:"CO2",counter:{species:"Na",perMaster:1,salt:"NaHCO₃"},note:"the classical Bjerrum system; open it to the atmosphere and the total carbonate stops being an input"},{id:"ammonia",label:"ammonia (NH₄⁺ / NH₃)",master:"NH4",total:.002,gas:"NH3",counter:{species:"Cl",perMaster:1,salt:"NH₄Cl"},note:"the sour-water base; one crossing, at the pKa"},{id:"phosphate",label:"phosphate (H₃PO₄ / H₂PO₄⁻ / HPO₄²⁻ / PO₄³⁻)",master:"PO4",total:.002,counter:{species:"Na",perMaster:3,salt:"Na₃PO₄"},note:"triprotic — three crossings, and the buffer plateaux between them"},{id:"sulfide",label:"sulfide (H₂S / HS⁻)",master:"HS",total:.002,gas:"H2S",counter:{species:"Na",perMaster:1,salt:"NaHS"},note:"the other sour-water family"},{id:"acetate",label:"acetate (CH₃COOH / CH₃COO⁻)",master:"Acetate",total:.002,counter:{species:"Na",perMaster:1,salt:"CH₃COONa"},note:"the textbook weak acid, pKa 4.756"}],ye=e=>O.find(t=>t.id===e)??O[0];function F(e,t,n){const a=Math.max(2,Math.round(n)),o=[];for(let r=0;r<a;++r)o.push(e+(t-e)*r/(a-1));return o}const z=e=>`bjerrum-${String(e).padStart(3,"0")}.csv`;function ge(e,t=4,n=4){const a=Math.max(2,Math.round(e)),o=Math.max(1,Math.min(t,Math.floor(a/n))),r=Math.floor(a/o),s=a%o,d=[];let l=0;for(let c=0;c<o;++c){const u=r+(c<s?1:0);d.push({lo:l,hi:l+u}),l+=u}return d}function je(e){const t=[],n=[];for(const s of e){const d=new Map,l=s.csv.trim().split(/\r?\n/).filter(c=>c.length>0);for(let c=1;c<l.length;++c){const u=l[c].split(","),h=(u[0]??"").trim(),v=(u[1]??"").trim();!h||!v||(t.includes(h)||t.push(h),d.set(h,v))}n.push({pH:s.pH,m:d,q:s.netCharge})}if(t.length===0)return"";const a=n.length>0&&n.every(s=>s.q!==null),r=[["pH",...t,...a?["netCharge"]:[]].join(",")];for(const s of n)r.push([String(s.pH),...t.map(d=>s.m.get(d)??""),...a?[String(s.q)]:[]].join(","));return r.join(`
`)+`
`}function we(e){const t=e.match(/^.*(?:fatal error|\*\*\*).*$/gm),n=[...e.matchAll(/pH\s+(-?[\d.]+)\s+\(given\)/g)];if(!t||t.length===0||n.length===0)return null;const a=Number(n[n.length-1][1]);return Number.isFinite(a)?{pH:a,message:t[t.length-1].trim()}:null}function Te(e,t){const n=new Array(t).fill(null),a=/^>>>\s+Operation\s+\[(\d+)\]/gm,o=[];let r;for(;(r=a.exec(e))!==null;)o.push({index:Number(r[1]),at:r.index});const s=/charge balance on the answer:[^\n]*?=\s*(-?[\d.]+(?:[eE][-+]?\d+)?)\s+\(pH GIVEN/;for(let d=0;d<o.length;++d){const c=e.slice(o[d].at,o[d+1]?.at??e.length).match(s),u=o[d].index;if(c&&u>=0&&u<t){const h=Number(c[1]);Number.isFinite(h)&&(n[u]=h)}}return n}function Ce(e){const t=new RegExp("^\\s*(?:\\[advisory\\][^\\n]*|\\[chemistry\\] closure[^\\n]*|speciation: pH scale[^\\n]*|aqueous activity:[^\\n]*|K\\(T\\)[^\\n]*|OPEN to [^\\n]*|--\\s+the .*REPLACED by the pin[^\\n]*)$","gm"),n=new Set,a=[];for(const o of e.match(t)??[]){const r=o.trim();n.has(r)||(n.add(r),a.push(r))}return a}const I=/^\[advisory\] pH was GIVEN, so electroneutrality was not imposed .*?net charge of\s*([\d.]+)\s*%/;function Pe(e){const t=[];for(const d of e){const l=I.exec(d);if(l){const c=Number(l[1]);Number.isFinite(c)&&t.push(c)}}if(t.length<2)return e;const n=Math.min(...t),a=Math.max(...t),o=`[advisory] pH was GIVEN at every one of the ${t.length} points, so electroneutrality was not imposed: the answers carry a net charge of ${n.toFixed(1)}–${a.toFixed(1)} % of their total ionic content (the dashed titrant curve on the right-hand axis is that residual, point by point). A measured laboratory pH makes this legitimate — the unmeasured counter-ions carry the difference — but no physical beaker holds these compositions as written; \`pH solve;\` closes the balance instead.`,r=[];let s=!1;for(const d of e){if(!I.test(d)){r.push(d);continue}s||(r.push(o),s=!0)}return r}const p="explore.csv";function Ae(e){if(e.estimate){const i=e.estimate;return{propsDict:{operations:[{name:"estimate",type:"estimateComponent",component:i.component,model:i.estimator??"Joback",groups:i.groups.map(g=>({group:g.group,count:g.count})),...i.reference&&Object.keys(i.reference).length>0?{reference:{...i.reference}}:{},...i.polymer&&(i.polymer.packing!==void 0||i.polymer.state!==void 0)?{polymer:{...i.polymer.packing!==void 0?{packing:i.polymer.packing}:{},...i.polymer.state!==void 0?{state:i.polymer.state}:{}}}:{},output:{proposal:"auto"}}]},thermoPackage:{recordType:"thermophysicalPropertySystem",schemaVersion:2,components:["water"],equilibrium:{formulation:"gammaPhi",liquid:{activityModel:{model:"ideal"},standardState:"pureLiquid"},vapour:{fugacityModel:"idealGas"}}},controlDict:{application:"choupoProps",description:"Property Explorer -- estimate a new component (ephemeral)",verbosity:2}}}if(e.bjerrum){const i=e.bjerrum,m=i.indexFrom??0,b={operations:F(i.pHfrom,i.pHto,i.n).map((q,k)=>({name:`pt${String(m+k).padStart(3,"0")}`,type:"speciate",totals:{[i.master]:`${i.total} mol/kg`,...i.counter&&i.counter.total>0?{[i.counter.species]:`${i.counter.total} mol/kg`}:{}},pH:q,...i.atmosphere?{atmosphere:{[i.atmosphere.gas]:`${i.atmosphere.pAtm} atm`}}:{},temperature:i.T,output:{file:z(m+k)}}))},f={recordType:"thermophysicalPropertySystem",schemaVersion:2,components:[...e.components],aqueousProperties:{solvent:"water",activityCoefficients:{model:"Davies",referenceBasis:"aqueousMolality"}}},E={propsDict:b,thermoPackage:f,controlDict:{application:"choupoProps",description:"Property Explorer -- species distribution vs pH (ephemeral)",verbosity:2}},R={...S(e.components),...e.componentFiles??{}};return Object.keys(R).length>0&&(E.extraFiles=R),E}const t={composition:{...e.state.composition}};e.state.P!==void 0&&(t.P=e.state.P),e.state.T!==void 0&&(t.T=e.state.T);const n={};e.state.P!==void 0&&(n.P=e.state.P),e.state.T!==void 0&&(n.T=e.state.T);const a=e.ternary?{name:"explore",type:"propertyScanTernary",mode:e.ternary.mode,state:n,grid:{n:e.ternary.n},...e.ternary.tieStride!==void 0?{tieStride:e.ternary.tieStride}:{},...e.ternary.shard?{shard:{k:e.ternary.shard.k,n:e.ternary.shard.n}}:{},output:{file:p}}:null,o=e.binaryLle?{name:"explore",type:"propertyScanBinary",state:n,grid:{n:e.binaryLle.n},output:{file:p}}:null,r=e.phaseDiagram?{name:"explore",type:"purePhaseDiagram",grid:{n:e.phaseDiagram.grid},...e.phaseDiagram.solid?{solid:{...e.phaseDiagram.solid}}:{},output:{file:p}}:null,s=e.psychrometry?{name:"explore",type:"psychrometricChart",carrier:e.psychrometry.carrier,condensable:e.psychrometry.condensable,P:e.psychrometry.P,TminC:e.psychrometry.TminC,TmaxC:e.psychrometry.TmaxC,grid:{n:e.psychrometry.gridN},relativeHumidity:[...e.psychrometry.rh],wetBulb:[...e.psychrometry.wetBulb],output:{file:p}}:null,d=e.scaling?{name:"explore",type:"scalingScan",...e.scaling.activityModel==="pitzer"?{activityModel:"pitzer"}:{},totals:Object.fromEntries(Object.entries(e.scaling.totals).map(([i,m])=>[i,`${m} mol/kg`])),pH:e.scaling.pH,...e.scaling.pCO2atm!==void 0?{atmosphere:{pCO2:`${e.scaling.pCO2atm} atm`}}:{},...e.scaling.T!==void 0?{temperature:e.scaling.T}:{},...e.scaling.equilibrate&&e.scaling.equilibrate.length>0?{equilibrate:{minerals:[...e.scaling.equilibrate]}}:{},...e.scaling.equilibrate&&e.scaling.equilibrate.length>0&&e.scaling.feedFlowM3h!==void 0?{feedFlow:`${e.scaling.feedFlowM3h} m3/h`}:{},recovery:{from:e.scaling.from,to:e.scaling.to,n:e.scaling.n},output:{file:p}}:null,l=e.gibbsmap?{name:"explore",type:"gibbsMap",elements:[...e.gibbsmap.elements],species:e.gibbsmap.species.map(i=>({name:i.name,atoms:[...i.atoms]})),feed:{...e.gibbsmap.feed},Tgrid:{from:e.gibbsmap.Tfrom,to:e.gibbsmap.Tto,n:e.gibbsmap.nT},Pgrid:{from:e.gibbsmap.Pfrom,to:e.gibbsmap.Pto,n:e.gibbsmap.nP,...e.gibbsmap.logP?{log:"true"}:{}},...e.gibbsmap.deltaT?{temperatureApproach:e.gibbsmap.deltaT}:{},metric:{...e.gibbsmap.metric},output:{file:p}}:null,c=e.steam?{name:"explore",type:"steamTables",...e.steam.mode==="saturation"?{saturation:{from:e.steam.from,to:e.steam.to,n:e.steam.n}}:{isobar:{P:e.steam.P??1e5,from:e.steam.from,to:e.steam.to,n:e.steam.n}},output:{file:p}}:null,u=e.solubility?{name:"explore",type:"solubilityParameter",T:e.solubility.T,output:{file:p}}:null,h={operations:[r??s??a??o??d??l??c??u??{name:"explore",type:"propertyScan1D",vary:{variable:e.axis.variable,from:e.axis.from,to:e.axis.to,n:e.axis.n},state:t,properties:[...e.properties],output:{file:p}}]},v=()=>e.binaryLle!==void 0||e.ternary?.mode==="lle"||e.activityModel?.model==="UNIFAC"?{model:"UNIFAC"}:e.activityModel??{model:"ideal"},A=(()=>{const i=e.transport;if(!i)return null;const m={};i.model&&(m.viscosity={model:i.model}),i.thermalConductivity&&(m.thermalConductivity={model:i.thermalConductivity}),i.diffusivity&&(m.diffusivity={model:i.diffusivity});const b={};i.liquidViscosity&&(b.viscosity={model:i.liquidViscosity}),i.liquidConductivity&&(b.thermalConductivity={model:i.liquidConductivity});const f={};return Object.keys(m).length&&(f.vapour=m),Object.keys(b).length&&(f.liquid=b),Object.keys(f).length?f:null})(),K=e.ternary?.mode==="lle"||e.binaryLle||e.vleTwoLiquid?{recordType:"thermophysicalPropertySystem",schemaVersion:2,components:[...e.components],equilibrium:{formulation:"gammaGamma",liquidPhases:[{name:"liquid1",activityModel:v()},{name:"liquid2",activityModel:v()}],vapour:{fugacityModel:"idealGas"}}}:e.scaling?{recordType:"thermophysicalPropertySystem",schemaVersion:2,components:[...e.components],aqueousProperties:{solvent:"water",activityCoefficients:{model:"Davies",referenceBasis:"aqueousMolality"}}}:{recordType:"thermophysicalPropertySystem",schemaVersion:2,components:[...e.components],equilibrium:{formulation:"gammaPhi",liquid:{activityModel:e.activityModel??{model:"ideal"},standardState:"pureLiquid"},vapour:{fugacityModel:String((e.equationOfState??{model:"idealGas"}).model)}},...A?{transport:A}:{}},H={application:"choupoProps",description:`Property Explorer (interactive; ephemeral -- never written to disk)${e.mode==="pure"?" -- pure-component curves (composition has no effect)":e.mode==="mixture"?" -- mixture property at the stated composition":""}`,verbosity:2},x={propsDict:h,thermoPackage:K,controlDict:H},N={...S(e.components),...e.componentFiles??{}};return Object.keys(N).length>0&&(x.extraFiles=N),x}const B=`/*---------------------------------------------------------------------------*\\
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
`,$=`/*---------------------------------------------------------------------------*\\
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
`,Q=`/*---------------------------------------------------------------------------*\\
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
`,Y=`/*---------------------------------------------------------------------------*\\
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
`,J=`/*---------------------------------------------------------------------------*\\
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
`,X=`/*---------------------------------------------------------------------------*\\
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
`,Z=`/*---------------------------------------------------------------------------*\\
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
`,ee=`/*---------------------------------------------------------------------------*\\
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
`,te=`/*---------------------------------------------------------------------------*\\
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
`,ne=`/*---------------------------------------------------------------------------*\\
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
`,ae=`/*---------------------------------------------------------------------------*\\
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
`,re=[],ie=Object.assign({"../../../data/standards/parameters/NRTL/1Propanol-water.dat":B,"../../../data/standards/parameters/NRTL/acetone-ethanol.dat":$,"../../../data/standards/parameters/NRTL/acetonitrile-water.dat":Q,"../../../data/standards/parameters/NRTL/benzene-toluene.dat":Y,"../../../data/standards/parameters/NRTL/ethanol-ethylAcetate.dat":W,"../../../data/standards/parameters/NRTL/ethanol-water.dat":J,"../../../data/standards/parameters/NRTL/isopropanol-water.dat":X,"../../../data/standards/parameters/NRTL/methanol-methylAcetate.dat":Z,"../../../data/standards/parameters/NRTL/methanol-water.dat":ee}),oe=Object.assign({}),se=Object.assign({"../../../data/standards/parameters/UNIQUAC/aceticAcid-methylAcetate.dat":te,"../../../data/standards/parameters/UNIQUAC/methanol-methylAcetate.dat":ne,"../../../data/standards/parameters/UNIQUAC/methylAcetate-water.dat":ae});function _(e){return typeof e=="string"?e:typeof e=="number"?String(e):""}function P(e,t){let n;try{n=T(C(e))}catch{return null}const a=n.components;if(!Array.isArray(a)||a.length!==2)return null;const o=_(n.model)||t.modelHint;if(!o)return null;const r={},s=n.parameters;if(typeof s=="object"&&s!==null&&!Array.isArray(s))for(const[c,u]of Object.entries(s))(typeof u=="number"||typeof u=="string")&&(r[c]=u);const d=n.provenance,l=typeof d=="object"&&d!==null&&!Array.isArray(d)?d:null;return{model:o,a:String(a[0]),b:String(a[1]),tier:t.tier,file:t.file,stem:t.file.split("/").pop().replace(/\.dat$/,""),parameters:r,provenance:{origin:l?_(l.origin):"",reviewStatus:l?_(l.reviewStatus):"",fittedInCase:l?_(l.fittedInCase):"",citation:l?_(l.citation)||_(l.source):""}}}function j(e,t){const n=[];for(const[a,o]of Object.entries(e)){const r=a.replace(/^.*?data\/standards\//,"data/standards/"),s=P(o,{file:r,tier:"standards",modelHint:t});s&&n.push(s)}return n}const L=[...j(ie,"NRTL"),...j(oe,"Wilson"),...j(se,"UNIQUAC")];function M(e,t,n){return e.a===t&&e.b===n||e.a===n&&e.b===t}function xe(e,t,n){return L.some(a=>a.model===e&&M(a,t,n))}let w=null;function ce(){if(w)return w;const e=[];for(const t of re){const n=t.file.includes("/")?t.file.split("/")[0]:"",a=P(t.body,{file:`data/local/parameters/${t.file}`,tier:"local",modelHint:n});a&&e.push(a)}return w=e,e}const de=/(?:^|\/)constant\/parameters\/([^/]+)\/[^/]+\.dat$/;function le(e){if(!e)return[];const t=[];for(const[n,a]of Object.entries(e)){const o=de.exec(n);if(!o)continue;const r=P(a,{file:n,tier:"case",modelHint:o[1]});r&&t.push(r)}return t}function Ne(e,t,n){return[...L,...ce(),...le(n)].filter(a=>M(a,e,t))}function Ee(e){const t=[];e.provenance.origin&&t.push(e.provenance.origin),e.provenance.reviewStatus&&t.push(e.provenance.reviewStatus),e.provenance.fittedInCase&&t.push(`fitted in ${e.provenance.fittedInCase.split("/").pop()}`);const n=e.tier==="standards"?"standards":e.tier==="local"?"data/local":"open case";return t.length?`${n} · ${t.join(" · ")}`:n}const U={water:[{group:"H2O",count:1}],ethanol:[{group:"CH3",count:1},{group:"CH2",count:1},{group:"OH",count:1}],nButanol:[{group:"CH3",count:1},{group:"CH2",count:3},{group:"OH",count:1}],nHexane:[{group:"CH3",count:2},{group:"CH2",count:4}],benzene:[{group:"ACH",count:6}],C4H10:[{group:"CH3",count:2},{group:"CH2",count:2}],nPentane:[{group:"CH3",count:2},{group:"CH2",count:3}],isopentane:[{group:"CH3",count:3},{group:"CH2",count:1},{group:"CH",count:1}],nHeptane:[{group:"CH3",count:2},{group:"CH2",count:5}],C8H18:[{group:"CH3",count:2},{group:"CH2",count:6}],cyclohexane:[{group:"CH2",count:6}]};function ue(e){let t;try{t=T(C(e))}catch{return null}const n=t.unifac;if(!n||typeof n!="object")return null;const a=n.groups;if(!Array.isArray(a))return null;const o=[];for(const r of a)r&&typeof r=="object"&&typeof r.group=="string"&&typeof r.count=="number"&&o.push({group:r.group,count:r.count});return o.length?o:null}function Re(e){const t={};if(!e)return t;for(const[n,a]of Object.entries(e)){if(!/(^|\/)constant\/components\/[^/]+\.dat$/.test(n))continue;let o;try{o=T(C(a))}catch{continue}const r=typeof o.name=="string"?o.name:"";if(!r)continue;const s=ue(a);s&&(t[r]=s)}return t}function ke(e,t={}){return Object.prototype.hasOwnProperty.call(t,e)||Object.prototype.hasOwnProperty.call(U,e)}function me(e,t={}){const n={};for(const a of e){const o=t[a]??U[a];o&&(n[a]=o.map(r=>({group:r.group,count:r.count})))}return n}function he(e,t){const n=y(e[0],t)?.tb,a=y(e[1],t)?.tb;return typeof n=="number"&&typeof a=="number"&&a<n?[e[1],e[0]]:e}function Se(e){const t=he(e.pair,e.catalogue),n=t[0],a=t[1],o=e.kind!=="gamma",r=o?["T_bubble",`y_eq_${n}`,"liquid_stable"]:[`gamma_${n}`,`gamma_${a}`];return{components:[...t],properties:r,axis:{variable:`x[${n}]`,from:0,to:1,n:Math.max(2,Math.round(e.n))},state:{P:e.P,composition:{[n]:.5,[a]:.5}},activityModel:{model:e.activity},equationOfState:{model:e.eos},...o?{vleTwoLiquid:!0}:{},...e.activity==="UNIFAC"?{unifacGroups:me(t,e.localUnifac)}:{},...e.componentFiles&&Object.keys(e.componentFiles).length>0?{componentFiles:e.componentFiles}:{}}}function Oe(e){const t=[...e.pair].sort((c,u)=>(y(c,e.catalogue)?.tb??0)-(y(u,e.catalogue)?.tb??0)),n=t[0]??"",a=t[t.length-1]??"",o=e.TminK-273.15,r=e.TmaxK-273.15,s=[];for(let c=e.rhFrom;c<=e.rhTo+1e-9&&c<100;c+=Math.max(1,e.rhStep))s.push(Math.round(c));const d=[],l=Math.max(5,e.wbStepC);for(let c=Math.ceil(o/l)*l;c<=Math.min(r,95);c+=l)d.push(c);return{components:[n,a],properties:[],axis:{variable:"T",from:0,to:1,n:2},state:{composition:{[n]:.5,[a]:.5}},psychrometry:{carrier:n,condensable:a,P:e.P,TminC:o,TmaxC:r,gridN:Math.max(20,Math.round(e.gridN)),rh:s,wetBulb:d},transport:{model:"Chung",thermalConductivity:"Eucken",diffusivity:"Fuller"},...e.componentFiles&&Object.keys(e.componentFiles).length>0?{componentFiles:{...e.componentFiles}}:{}}}export{O as B,p as E,_e as I,ve as a,Se as b,ge as c,Ce as d,z as e,F as f,Re as g,Pe as h,ye as i,xe as j,ke as k,Ne as l,je as m,Te as n,he as o,Ee as p,we as q,Oe as r,Ae as s,me as u};
