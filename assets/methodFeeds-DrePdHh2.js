import{fW as L,hY as P,hc as R}from"./index-CeoZGPVk.js";import{d as S,b as E}from"./catalogue-CvezytOU.js";/**
 * @license @tabler/icons-react v3.44.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */const B=[["path",{d:"M3 19a9 9 0 0 1 9 0a9 9 0 0 1 9 0",key:"svg-0"}],["path",{d:"M3 6a9 9 0 0 1 9 0a9 9 0 0 1 9 0",key:"svg-1"}],["path",{d:"M3 6l0 13",key:"svg-2"}],["path",{d:"M12 6l0 13",key:"svg-3"}],["path",{d:"M21 6l0 13",key:"svg-4"}]],xt=L("outline","book","Book",B);/**
 * @license @tabler/icons-react v3.44.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */const q=[["path",{d:"M13 5h8",key:"svg-0"}],["path",{d:"M13 9h5",key:"svg-1"}],["path",{d:"M13 15h8",key:"svg-2"}],["path",{d:"M13 19h5",key:"svg-3"}],["path",{d:"M3 5a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1l0 -4",key:"svg-4"}],["path",{d:"M3 15a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1l0 -4",key:"svg-5"}]],At=L("outline","list-details","ListDetails",q),x=[{id:"carbonate",label:"carbonate (CO₂ / HCO₃⁻ / CO₃²⁻)",master:"HCO3",total:.002,gas:"CO2",counter:{species:"Na",perMaster:1,salt:"NaHCO₃"},note:"the classical Bjerrum system; open it to the atmosphere and the total carbonate stops being an input"},{id:"ammonia",label:"ammonia (NH₄⁺ / NH₃)",master:"NH4",total:.002,gas:"NH3",counter:{species:"Cl",perMaster:1,salt:"NH₄Cl"},note:"the sour-water base; one crossing, at the pKa"},{id:"phosphate",label:"phosphate (H₃PO₄ / H₂PO₄⁻ / HPO₄²⁻ / PO₄³⁻)",master:"PO4",total:.002,counter:{species:"Na",perMaster:3,salt:"Na₃PO₄"},note:"triprotic — three crossings, and the buffer plateaux between them"},{id:"sulfide",label:"sulfide (H₂S / HS⁻)",master:"HS",total:.002,gas:"H2S",counter:{species:"Na",perMaster:1,salt:"NaHS"},note:"the other sour-water family"},{id:"acetate",label:"acetate (CH₃COOH / CH₃COO⁻)",master:"Acetate",total:.002,counter:{species:"Na",perMaster:1,salt:"CH₃COONa"},note:"the textbook weak acid, pKa 4.756"}],Lt=e=>x.find(n=>n.id===e)??x[0];function G(e,n,t){const a=Math.max(2,Math.round(t)),o=[];for(let r=0;r<a;++r)o.push(e+(n-e)*r/(a-1));return o}const F=e=>`bjerrum-${String(e).padStart(3,"0")}.csv`;function kt(e,n=4,t=4){const a=Math.max(2,Math.round(e)),o=Math.max(1,Math.min(n,Math.floor(a/t))),r=Math.floor(a/o),s=a%o,c=[];let l=0;for(let d=0;d<o;++d){const u=r+(d<s?1:0);c.push({lo:l,hi:l+u}),l+=u}return c}function Mt(e){const n=[],t=[];for(const s of e){const c=new Map,l=s.csv.trim().split(/\r?\n/).filter(d=>d.length>0);for(let d=1;d<l.length;++d){const u=l[d].split(","),p=(u[0]??"").trim(),y=(u[1]??"").trim();!p||!y||(n.includes(p)||n.push(p),c.set(p,y))}t.push({pH:s.pH,m:c,q:s.netCharge})}if(n.length===0)return"";const a=t.length>0&&t.every(s=>s.q!==null),r=[["pH",...n,...a?["netCharge"]:[]].join(",")];for(const s of t)r.push([String(s.pH),...n.map(c=>s.m.get(c)??""),...a?[String(s.q)]:[]].join(","));return r.join(`
`)+`
`}function Ut(e){const n=e.match(/^.*(?:fatal error|\*\*\*).*$/gm),t=[...e.matchAll(/pH\s+(-?[\d.]+)\s+\(given\)/g)];if(!n||n.length===0||t.length===0)return null;const a=Number(t[t.length-1][1]);return Number.isFinite(a)?{pH:a,message:n[n.length-1].trim()}:null}function Kt(e,n){const t=new Array(n).fill(null),a=/^>>>\s+Operation\s+\[(\d+)\]/gm,o=[];let r;for(;(r=a.exec(e))!==null;)o.push({index:Number(r[1]),at:r.index});const s=/charge balance on the answer:[^\n]*?=\s*(-?[\d.]+(?:[eE][-+]?\d+)?)\s+\(pH GIVEN/;for(let c=0;c<o.length;++c){const d=e.slice(o[c].at,o[c+1]?.at??e.length).match(s),u=o[c].index;if(d&&u>=0&&u<n){const p=Number(d[1]);Number.isFinite(p)&&(t[u]=p)}}return t}function Vt(e){const n=new RegExp("^\\s*(?:\\[advisory\\][^\\n]*|\\[chemistry\\] closure[^\\n]*|speciation: pH scale[^\\n]*|aqueous activity:[^\\n]*|K\\(T\\)[^\\n]*|OPEN to [^\\n]*|--\\s+the .*REPLACED by the pin[^\\n]*)$","gm"),t=new Set,a=[];for(const o of e.match(n)??[]){const r=o.trim();t.has(r)||(t.add(r),a.push(r))}return a}const A=/^\[advisory\] pH was GIVEN, so electroneutrality was not imposed .*?net charge of\s*([\d.]+)\s*%/;function Ht(e){const n=[];for(const c of e){const l=A.exec(c);if(l){const d=Number(l[1]);Number.isFinite(d)&&n.push(d)}}if(n.length<2)return e;const t=Math.min(...n),a=Math.max(...n),o=`[advisory] pH was GIVEN at every one of the ${n.length} points, so electroneutrality was not imposed: the answers carry a net charge of ${t.toFixed(1)}–${a.toFixed(1)} % of their total ionic content (the dashed titrant curve on the right-hand axis is that residual, point by point). A measured laboratory pH makes this legitimate — the unmeasured counter-ions carry the difference — but no physical beaker holds these compositions as written; \`pH solve;\` closes the balance instead.`,r=[];let s=!1;for(const c of e){if(!A.test(c)){r.push(c);continue}s||(r.push(o),s=!0)}return r}const m="explore.csv";function Bt(e){if(e.estimate){const i=e.estimate;return{propsDict:{operations:[{name:"estimate",type:"estimateComponent",component:i.component,model:i.estimator??"Joback",groups:i.groups.map(_=>({group:_.group,count:_.count})),...i.reference&&Object.keys(i.reference).length>0?{reference:{...i.reference}}:{},...i.polymer&&(i.polymer.packing!==void 0||i.polymer.state!==void 0)?{polymer:{...i.polymer.packing!==void 0?{packing:i.polymer.packing}:{},...i.polymer.state!==void 0?{state:i.polymer.state}:{}}}:{},output:{proposal:"auto"}}]},thermoPackage:{recordType:"thermophysicalPropertySystem",schemaVersion:2,components:["water"],equilibrium:{formulation:"gammaPhi",liquid:{activityModel:{model:"ideal"},standardState:"pureLiquid"},vapour:{fugacityModel:"idealGas"}}},controlDict:{application:"choupoProps",description:"Property Explorer -- estimate a new component (ephemeral)",verbosity:2}}}if(e.bjerrum){const i=e.bjerrum,h=i.indexFrom??0,b={operations:G(i.pHfrom,i.pHto,i.n).map((H,O)=>({name:`pt${String(h+O).padStart(3,"0")}`,type:"speciate",totals:{[i.master]:`${i.total} mol/kg`,...i.counter&&i.counter.total>0?{[i.counter.species]:`${i.counter.total} mol/kg`}:{}},pH:H,...i.atmosphere?{atmosphere:{[i.atmosphere.gas]:`${i.atmosphere.pAtm} atm`}}:{},temperature:i.T,output:{file:F(h+O)}}))},v={recordType:"thermophysicalPropertySystem",schemaVersion:2,components:[...e.components],aqueousProperties:{solvent:"water",activityCoefficients:{model:"Davies",referenceBasis:"aqueousMolality"}}},I={propsDict:b,thermoPackage:v,controlDict:{application:"choupoProps",description:"Property Explorer -- species distribution vs pH (ephemeral)",verbosity:2}},N={...S(e.components),...e.componentFiles??{}};return Object.keys(N).length>0&&(I.extraFiles=N),I}const n={composition:{...e.state.composition}};e.state.P!==void 0&&(n.P=e.state.P),e.state.T!==void 0&&(n.T=e.state.T);const t={};e.state.P!==void 0&&(t.P=e.state.P),e.state.T!==void 0&&(t.T=e.state.T);const a=e.ternary?{name:"explore",type:"propertyScanTernary",mode:e.ternary.mode,state:t,grid:{n:e.ternary.n},...e.ternary.tieStride!==void 0?{tieStride:e.ternary.tieStride}:{},...e.ternary.shard?{shard:{k:e.ternary.shard.k,n:e.ternary.shard.n}}:{},output:{file:m}}:null,o=e.binaryLle?{name:"explore",type:"propertyScanBinary",state:t,grid:{n:e.binaryLle.n},output:{file:m}}:null,r=e.phaseDiagram?{name:"explore",type:"purePhaseDiagram",grid:{n:e.phaseDiagram.grid},...e.phaseDiagram.solid?{solid:{...e.phaseDiagram.solid}}:{},output:{file:m}}:null,s=e.psychrometry?{name:"explore",type:"psychrometricChart",carrier:e.psychrometry.carrier,condensable:e.psychrometry.condensable,P:e.psychrometry.P,TminC:e.psychrometry.TminC,TmaxC:e.psychrometry.TmaxC,grid:{n:e.psychrometry.gridN},relativeHumidity:[...e.psychrometry.rh],wetBulb:[...e.psychrometry.wetBulb],output:{file:m}}:null,c=e.scaling?{name:"explore",type:"scalingScan",...e.scaling.activityModel==="pitzer"?{activityModel:"pitzer"}:{},totals:Object.fromEntries(Object.entries(e.scaling.totals).map(([i,h])=>[i,`${h} mol/kg`])),pH:e.scaling.pH,...e.scaling.pCO2atm!==void 0?{atmosphere:{pCO2:`${e.scaling.pCO2atm} atm`}}:{},...e.scaling.T!==void 0?{temperature:e.scaling.T}:{},...e.scaling.equilibrate&&e.scaling.equilibrate.length>0?{equilibrate:{minerals:[...e.scaling.equilibrate]}}:{},...e.scaling.equilibrate&&e.scaling.equilibrate.length>0&&e.scaling.feedFlowM3h!==void 0?{feedFlow:`${e.scaling.feedFlowM3h} m3/h`}:{},recovery:{from:e.scaling.from,to:e.scaling.to,n:e.scaling.n},output:{file:m}}:null,l=e.gibbsmap?{name:"explore",type:"gibbsMap",elements:[...e.gibbsmap.elements],species:e.gibbsmap.species.map(i=>({name:i.name,atoms:[...i.atoms]})),feed:{...e.gibbsmap.feed},Tgrid:{from:e.gibbsmap.Tfrom,to:e.gibbsmap.Tto,n:e.gibbsmap.nT},Pgrid:{from:e.gibbsmap.Pfrom,to:e.gibbsmap.Pto,n:e.gibbsmap.nP,...e.gibbsmap.logP?{log:"true"}:{}},...e.gibbsmap.deltaT?{temperatureApproach:e.gibbsmap.deltaT}:{},metric:{...e.gibbsmap.metric},output:{file:m}}:null,d=e.steam?{name:"explore",type:"steamTables",...e.steam.mode==="saturation"?{saturation:{from:e.steam.from,to:e.steam.to,n:e.steam.n}}:{isobar:{P:e.steam.P??1e5,from:e.steam.from,to:e.steam.to,n:e.steam.n}},output:{file:m}}:null,u=e.solubility?{name:"explore",type:"solubilityParameter",T:e.solubility.T,output:{file:m}}:null,p={operations:[r??s??a??o??c??l??d??u??{name:"explore",type:"propertyScan1D",vary:{variable:e.axis.variable,from:e.axis.from,to:e.axis.to,n:e.axis.n},state:n,properties:[...e.properties],output:{file:m}}]},y=()=>e.binaryLle!==void 0||e.ternary?.mode==="lle"||e.activityModel?.model==="UNIFAC"?{model:"UNIFAC"}:e.activityModel??{model:"ideal"},C=(()=>{const i=e.transport;if(!i)return null;const h={};i.model&&(h.viscosity={model:i.model}),i.thermalConductivity&&(h.thermalConductivity={model:i.thermalConductivity}),i.diffusivity&&(h.diffusivity={model:i.diffusivity});const b={};i.liquidViscosity&&(b.viscosity={model:i.liquidViscosity}),i.liquidConductivity&&(b.thermalConductivity={model:i.liquidConductivity});const v={};return Object.keys(h).length&&(v.vapour=h),Object.keys(b).length&&(v.liquid=b),Object.keys(v).length?v:null})(),K=e.ternary?.mode==="lle"||e.binaryLle||e.vleTwoLiquid?{recordType:"thermophysicalPropertySystem",schemaVersion:2,components:[...e.components],equilibrium:{formulation:"gammaGamma",liquidPhases:[{name:"liquid1",activityModel:y()},{name:"liquid2",activityModel:y()}],vapour:{fugacityModel:"idealGas"}}}:e.scaling?{recordType:"thermophysicalPropertySystem",schemaVersion:2,components:[...e.components],aqueousProperties:{solvent:"water",activityCoefficients:{model:"Davies",referenceBasis:"aqueousMolality"}}}:{recordType:"thermophysicalPropertySystem",schemaVersion:2,components:[...e.components],equilibrium:{formulation:"gammaPhi",liquid:{activityModel:e.activityModel??{model:"ideal"},standardState:"pureLiquid"},vapour:{fugacityModel:String((e.equationOfState??{model:"idealGas"}).model)}},...C?{transport:C}:{}},V={application:"choupoProps",description:`Property Explorer (interactive; ephemeral -- never written to disk)${e.mode==="pure"?" -- pure-component curves (composition has no effect)":e.mode==="mixture"?" -- mixture property at the stated composition":""}`,verbosity:2},j={propsDict:p,thermoPackage:K,controlDict:V},D={...S(e.components),...e.componentFiles??{}};return Object.keys(D).length>0&&(j.extraFiles=D),j}const z=`/*---------------------------------------------------------------------------*\\
  NRTL binary interaction parameters --- 2Pentanol(i) + 124Trimethylbenzene(j)

  REGRESSED BY CHOUPO'S CURATION PIPELINE (bin/choupo-curate, DEV.md 4c C282;
  record docs/design/binary-pairs-from-open-measurements.md) to measured
  bubble PRESSURES at stated temperatures (P-x, DEV.md 4c C291).  The articles named under \`evidence\` are the
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
  its fitting pipeline (every laboratory fitted to the bubble pressure, outliers beyond
  20 % discarded by name, max |P_model - P|/P over the kept points GRADED
  clean / warning / severe at 5 / 10 / 20 % -- DEV.md 4c C283 amended, C285, C291;
  THIS fit: clean, 1.1843 %; one liquid across its validity span), and NO
  HUMAN HAS REVIEWED IT.  The engine says so on every run that reads it, and
  voices a warning or a severe grade beside it.
  CAUTION: this record rests on ONE temperature and ONE laboratory.
  Nothing was held out: the \`validation {}\` block says so, and the acceptance
  is the \`curation {}\` block.  A curator who reads the series back against the
  articles marks it \`reviewStatus reviewed; humanReviewed true;\`.  Revert with
  \`bin/choupo-curate revert 124Trimethylbenzene-2Pentanol\`.

  REPRODUCE: run tutorials/props/curation/curate523_nrtl_2Pentanol_124Trimethylbenzene (after \`bin/choupo-curate fetch\` on it); its fit
  writes 124Trimethylbenzene-2Pentanol.proposal.dat, which bin/curate/check_regressed_pairs.py holds
  equal to this record.
\\*---------------------------------------------------------------------------*/

recordType binaryInteractionParameters;
schemaVersion 1;

pair { i 2Pentanol; j 124Trimethylbenzene; }

components  ( 2Pentanol  124Trimethylbenzene );
model       NRTL;

parameters
{
    i           2Pentanol;
    j           124Trimethylbenzene;
    a_ij        0.00000000;
    b_ij        -4.32372424;
    a_ji        0.00000000;
    b_ji        454.49359909;
    alpha       0.30000000;
}

provenance
{
    origin        fitted;
    method        "fitParameters(P_bubble), Levenberg-Marquardt";
    methodVersion "choupoProps Choupo-dev";
    fittedInCase  "tutorials/props/curation/curate523_nrtl_2Pentanol_124Trimethylbenzene";
    reviewStatus  autoPromoted;
    humanReviewed false;
    fitGrade      clean;   // DEV.md 4c C285 (C291): max |P_model - P|/P over the kept points, graded 5 / 10 / 20 %
    fitGradeMaxRelativeError_pct 1.1843;
    promotedBy    "bin/curate/pairs_px.py promote";
    promotedDate  "2026-11-10";
    reviewReason  "regressed by bin/choupo-curate from archive-transcribed measurements; not yet read back against the articles";
    reuse         "Choupo's own regression; the measured points belong to the cited articles and are not reproduced in this record or this tree";
    fitDate       "2026-11-10";

    evidence
    (
        {
            role      fit;
            dataset   "constant/archiveExtracts/2Pentanol-124Trimethylbenzene-bubbleP-j.fluid.2017.12.031-b13.dat";
            doi       "10.1016/j.fluid.2017.12.031";
            sha256    "b7862c82eecf3591e4b347ced684a9c611c41ac5508fdb32a44c133e211c61f3";
            provenance measured;
            archiveFile "j.fluid.2017.12.031.xml";
            system    "2Pentanol + 124Trimethylbenzene";
        }
    );
    fingerprint "1ce059994d055571";   // of the declaration, frozen before the fit

    //  IN-SAMPLE: the model reproducing the very points it was
    //  fitted to.  It is NOT a validation; see the block below.
    weighting     equal;   // chi2 is sum ((P_model - P_exp)/P_exp)^2, dimensionless
    chi2          0.00116159;
    rms_rel       0.00695699;
    nDataPoints   24;
    identifiable  true;
    maxAbsCorr    0.97385488;

    validity
    {
        temperature { min 313.15 K; max 313.15 K; }
        pressure    { min 1227 Pa; max 2283 Pa; }
        note        "the span of the FIT evidence; outside it the pair is an extrapolation";
    }
}

validation
{
    verdict     validationRefused;

    heldOut     none;   // every declared dataset carried \`role fit\`

    acceptance  none;   // no band was declared before the fit, so no
                        // pass/fail may be read out of the residual above
}

curation
{
    rule            "DEV.md 4c C291 (bubble-pressure pairs; every laboratory, graded by C285)";
    evidence        allLaboratories;   // every block fitted, none held out
    objective       twoStage;
    residual        P_bubble;
    residualScale   relative;   // (P_model - P)/P at each point's stated T
    outlierLimit_pct 20;   // |P_model - P|/P after the least-squares stage
    outliersDropped 0;
    pointsKept      24;
    noBubblePoint   0;
    maxRelError_pct 1.1843;
    meanRelError_pct 0.5952;
    acceptance      graded;   // max relative pressure error over the kept points, DEV.md 4c C285 (C291)
    gradeLimits_pct (5 10 20);   // upper limits of clean / warning / severe; above, refused
    grade           clean;
    oneLiquid       true;   // arm (f) over the validity span; a pair that splits ONE liquid is never promoted
    temperatures    1;   // distinct stated temperatures in the evidence
    laboratories    1;   // distinct articles in the evidence
    singleTemperature true;   // true: b/T was fitted at ONE temperature
    singleLaboratory  true;   // true: ONE laboratory's data, nothing to cross-check it
    verdict         accepted;
}
`,Y=`/*---------------------------------------------------------------------------*\\
  NRTL binary interaction parameters --- 2Methyl2Propanol(i) + 14Dioxane(j)

  REGRESSED BY CHOUPO'S CURATION PIPELINE (bin/choupo-curate, DEV.md 4c C282;
  record docs/design/binary-pairs-from-open-measurements.md) to measured
  bubble temperatures.  The articles named under \`evidence\` are the
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
  its fitting pipeline (every laboratory fitted, outliers beyond 3 K
  discarded by name, max |T_model - T| over the kept points GRADED
  clean / warning / severe at 1 / 2 / 4 K -- DEV.md 4c C283
  amended, C285, C286; THIS fit: warning, 1.9869 K; one liquid
  across its validity span), and NO HUMAN HAS REVIEWED IT.  The
  engine says so on every run that reads it, and voices a warning
  or a severe grade beside it.
  Nothing was held out: the \`validation {}\` block says so, and the
  acceptance is the \`curation {}\` block.  A curator who reads the series
  back against the articles marks it \`reviewStatus reviewed; humanReviewed
  true;\`.  Revert with \`bin/choupo-curate revert 14Dioxane-2Methyl2Propanol\`.

  REPRODUCE: run tutorials/props/curation/curate118_nrtl_2Methyl2Propanol_14Dioxane (after \`bin/choupo-curate fetch\` on it); its fit
  writes 14Dioxane-2Methyl2Propanol.proposal.dat, which bin/curate/check_regressed_pairs.py holds
  equal to this record.
\\*---------------------------------------------------------------------------*/

recordType binaryInteractionParameters;
schemaVersion 1;

pair { i 2Methyl2Propanol; j 14Dioxane; }

components  ( 2Methyl2Propanol  14Dioxane );
model       NRTL;

parameters
{
    i           2Methyl2Propanol;
    j           14Dioxane;
    a_ij        0.00000000;
    b_ij        299.40076399;
    a_ji        0.00000000;
    b_ji        -98.19028671;
    alpha       0.30000000;
}

provenance
{
    origin        fitted;
    method        "fitParameters(T_bubble), Levenberg-Marquardt";
    methodVersion "choupoProps Choupo-dev";
    fittedInCase  "tutorials/props/curation/curate118_nrtl_2Methyl2Propanol_14Dioxane";
    reviewStatus  autoPromoted;
    humanReviewed false;
    fitGrade      warning;   // DEV.md 4c C285 (C286): max |T_model - T| over the kept points, graded 1 / 2 / 4 K
    fitGradeMaxTemperatureError_K 1.9869;
    promotedBy    "bin/choupo-curate pair --promote";
    promotedDate  "2026-11-10";
    reviewReason  "regressed by bin/choupo-curate from archive-transcribed measurements; not yet read back against the articles";
    reuse         "Choupo's own regression; the measured points belong to the cited articles and are not reproduced in this record or this tree";
    fitDate       "2026-11-10";

    evidence
    (
        {
            role      fit;
            dataset   "constant/archiveExtracts/2Methyl2Propanol-14Dioxane-bubble-j.fluid.2007.11.002.dat";
            doi       "10.1016/j.fluid.2007.11.002";
            sha256    "e1ebbb51f39a93296942c8d2a2ae3922399f87905cae3aa2734926e550d31c9a";
            provenance measured;
            archiveFile "j.fluid.2007.11.002.xml";
            system    "2Methyl2Propanol + 14Dioxane";
        }
        {
            role      fit;
            dataset   "constant/archiveExtracts/2Methyl2Propanol-14Dioxane-bubble-j.jct.2003.09.001.dat";
            doi       "10.1016/j.jct.2003.09.001";
            sha256    "ed6d3c6e4b418beca21d9e9824b60a7dfd25c43695095885dd7f6bc8ef14dc91";
            provenance measured;
            archiveFile "j.jct.2003.09.001.xml";
            system    "2Methyl2Propanol + 14Dioxane";
        }
    );
    fingerprint "095c435c3c38bfd5";   // of the declaration, frozen before the fit

    //  IN-SAMPLE: the model reproducing the very points it was
    //  fitted to.  It is NOT a validation; see the block below.
    weighting     uncertainty;   // chi2 is sum ((T_model - T_exp)/U)^2, dimensionless
    chi2          375.89221835;
    rms_K         0.84525748;
    nDataPoints   100;
    identifiable  true;
    maxAbsCorr    0.99672530;

    validity
    {
        temperature { min 324.45 K; max 372.55 K; }
        pressure    { min 26660 Pa; max 101325 Pa; }
        note        "the span of the FIT evidence; outside it the pair is an extrapolation";
    }
}

validation
{
    verdict     validationRefused;

    heldOut     none;   // every declared dataset carried \`role fit\`

    acceptance  none;   // no band was declared before the fit, so no
                        // pass/fail may be read out of the residual above
}

curation
{
    rule            "DEV.md 4c C283 (amended) + C284, graded by C285 (C286)";
    evidence        allLaboratories;   // every study fitted, none held out
    objective       twoStage;
    outlierLimit    3 K;   // |T_model - T| after the least-squares stage
    outliersDropped 0;
    pointsKept      100;
    noBubblePoint   0;
    maxAbsError     1.9869 K;
    meanAbsError    0.6989 K;
    acceptance      graded;   // max |T_model - T| over the kept points, DEV.md 4c C285 (C286)
    gradeLimits_K   (1 2 4);   // upper limits of clean / warning / severe; above, refused
    grade           warning;
    oneLiquid       true;   // arm (f) over the validity span; a pair that splits ONE liquid is never promoted, whatever its grade
    verdict         accepted;
}
`,X=`/*---------------------------------------------------------------------------*\\
  NRTL binary interaction parameters --- 14Dioxane(i) + cyclohexane(j)

  REGRESSED BY CHOUPO'S CURATION PIPELINE (bin/choupo-curate, DEV.md 4c C282;
  record docs/design/binary-pairs-from-open-measurements.md) to measured
  bubble temperatures.  The articles named under \`evidence\` are the
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
  its fitting pipeline (every laboratory fitted, outliers beyond 3 K
  discarded by name, max |T_model - T| over the kept points GRADED
  clean / warning / severe at 1 / 2 / 4 K -- DEV.md 4c C283
  amended, C285, C286; THIS fit: severe, 2.0159 K; one liquid
  across its validity span), and NO HUMAN HAS REVIEWED IT.  The
  engine says so on every run that reads it, and voices a warning
  or a severe grade beside it.
  Nothing was held out: the \`validation {}\` block says so, and the
  acceptance is the \`curation {}\` block.  A curator who reads the series
  back against the articles marks it \`reviewStatus reviewed; humanReviewed
  true;\`.  Revert with \`bin/choupo-curate revert 14Dioxane-cyclohexane\`.

  REPRODUCE: run tutorials/props/curation/curate130_nrtl_14Dioxane_cyclohexane (after \`bin/choupo-curate fetch\` on it); its fit
  writes 14Dioxane-cyclohexane.proposal.dat, which bin/curate/check_regressed_pairs.py holds
  equal to this record.
\\*---------------------------------------------------------------------------*/

recordType binaryInteractionParameters;
schemaVersion 1;

pair { i 14Dioxane; j cyclohexane; }

components  ( 14Dioxane  cyclohexane );
model       NRTL;

parameters
{
    i           14Dioxane;
    j           cyclohexane;
    a_ij        0.00000000;
    b_ij        306.68991273;
    a_ji        0.00000000;
    b_ji        144.31085100;
    alpha       0.30000000;
}

provenance
{
    origin        fitted;
    method        "fitParameters(T_bubble), Levenberg-Marquardt";
    methodVersion "choupoProps Choupo-dev";
    fittedInCase  "tutorials/props/curation/curate130_nrtl_14Dioxane_cyclohexane";
    reviewStatus  autoPromoted;
    humanReviewed false;
    fitGrade      severe;   // DEV.md 4c C285 (C286): max |T_model - T| over the kept points, graded 1 / 2 / 4 K
    fitGradeMaxTemperatureError_K 2.0159;
    promotedBy    "bin/choupo-curate pair --promote";
    promotedDate  "2026-11-10";
    reviewReason  "regressed by bin/choupo-curate from archive-transcribed measurements; not yet read back against the articles";
    reuse         "Choupo's own regression; the measured points belong to the cited articles and are not reproduced in this record or this tree";
    fitDate       "2026-11-10";

    evidence
    (
        {
            role      fit;
            dataset   "constant/archiveExtracts/14Dioxane-cyclohexane-bubble-j.fluid.2005.09.010.dat";
            doi       "10.1016/j.fluid.2005.09.010";
            sha256    "3d608029b54f529f68fad74ed0fbf641e57ee081fd948e7d76ada2ff2a97c02b";
            provenance measured;
            archiveFile "j.fluid.2005.09.010.xml";
            system    "14Dioxane + cyclohexane";
        }
        {
            role      fit;
            dataset   "constant/archiveExtracts/14Dioxane-cyclohexane-bubble-je020148t.dat";
            doi       "10.1021/je020148t";
            sha256    "d050eca5b9e079c12efbc563ccbe13ba0767c44a1d625df7ba1b8c73d98b46fa";
            provenance measured;
            archiveFile "je020148t.xml";
            system    "14Dioxane + cyclohexane";
            pressure  "94700.000000 Pa";
        }
    );
    fingerprint "f607cd5a70c65101";   // of the declaration, frozen before the fit

    //  IN-SAMPLE: the model reproducing the very points it was
    //  fitted to.  It is NOT a validation; see the block below.
    weighting     uncertainty;   // chi2 is sum ((T_model - T_exp)/U)^2, dimensionless
    chi2          40.28630516;
    rms_K         0.58757465;
    nDataPoints   49;
    identifiable  true;
    maxAbsCorr    0.98083590;

    validity
    {
        temperature { min 325.16 K; max 369.18 K; }
        pressure    { min 40000 Pa; max 101300 Pa; }
        note        "the span of the FIT evidence; outside it the pair is an extrapolation";
    }
}

validation
{
    verdict     validationRefused;

    heldOut     none;   // every declared dataset carried \`role fit\`

    acceptance  none;   // no band was declared before the fit, so no
                        // pass/fail may be read out of the residual above
}

curation
{
    rule            "DEV.md 4c C283 (amended) + C284, graded by C285 (C286)";
    evidence        allLaboratories;   // every study fitted, none held out
    objective       twoStage;
    outlierLimit    3 K;   // |T_model - T| after the least-squares stage
    outliersDropped 1;
    pointsKept      49;
    noBubblePoint   0;
    maxAbsError     2.0159 K;
    meanAbsError    0.4113 K;
    acceptance      graded;   // max |T_model - T| over the kept points, DEV.md 4c C285 (C286)
    gradeLimits_K   (1 2 4);   // upper limits of clean / warning / severe; above, refused
    grade           severe;
    oneLiquid       true;   // arm (f) over the validity span; a pair that splits ONE liquid is never promoted, whatever its grade
    verdict         accepted;
}
`,Q=`/*---------------------------------------------------------------------------*\\
  NRTL binary interaction parameters --- 14Dioxane(i) + nButanol(j)

  REGRESSED BY CHOUPO'S CURATION PIPELINE (bin/choupo-curate, DEV.md 4c C282;
  record docs/design/binary-pairs-from-open-measurements.md) to measured
  bubble PRESSURES at stated temperatures (P-x, DEV.md 4c C291).  The articles named under \`evidence\` are the
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
  its fitting pipeline (every laboratory fitted to the bubble pressure, outliers beyond
  20 % discarded by name, max |P_model - P|/P over the kept points GRADED
  clean / warning / severe at 5 / 10 / 20 % -- DEV.md 4c C283 amended, C285, C291;
  THIS fit: clean, 0.7137 %; one liquid across its validity span), and NO
  HUMAN HAS REVIEWED IT.  The engine says so on every run that reads it, and
  voices a warning or a severe grade beside it.
  CAUTION: this record rests on ONE temperature and ONE laboratory.
  Nothing was held out: the \`validation {}\` block says so, and the acceptance
  is the \`curation {}\` block.  A curator who reads the series back against the
  articles marks it \`reviewStatus reviewed; humanReviewed true;\`.  Revert with
  \`bin/choupo-curate revert 14Dioxane-nButanol\`.

  REPRODUCE: run tutorials/props/curation/curate559_nrtl_14Dioxane_nButanol (after \`bin/choupo-curate fetch\` on it); its fit
  writes 14Dioxane-nButanol.proposal.dat, which bin/curate/check_regressed_pairs.py holds
  equal to this record.
\\*---------------------------------------------------------------------------*/

recordType binaryInteractionParameters;
schemaVersion 1;

pair { i 14Dioxane; j nButanol; }

components  ( 14Dioxane  nButanol );
model       NRTL;

parameters
{
    i           14Dioxane;
    j           nButanol;
    a_ij        0.00000000;
    b_ij        237.41274260;
    a_ji        0.00000000;
    b_ji        -88.59047717;
    alpha       0.30000000;
}

provenance
{
    origin        fitted;
    method        "fitParameters(P_bubble), Levenberg-Marquardt";
    methodVersion "choupoProps Choupo-dev";
    fittedInCase  "tutorials/props/curation/curate559_nrtl_14Dioxane_nButanol";
    reviewStatus  autoPromoted;
    humanReviewed false;
    fitGrade      clean;   // DEV.md 4c C285 (C291): max |P_model - P|/P over the kept points, graded 5 / 10 / 20 %
    fitGradeMaxRelativeError_pct 0.7137;
    promotedBy    "bin/curate/pairs_px.py promote";
    promotedDate  "2026-11-10";
    reviewReason  "regressed by bin/choupo-curate from archive-transcribed measurements; not yet read back against the articles";
    reuse         "Choupo's own regression; the measured points belong to the cited articles and are not reproduced in this record or this tree";
    fitDate       "2026-11-10";

    evidence
    (
        {
            role      fit;
            dataset   "constant/archiveExtracts/14Dioxane-nButanol-bubbleP-j.fluid.2007.11.002-b22.dat";
            doi       "10.1016/j.fluid.2007.11.002";
            sha256    "e1ebbb51f39a93296942c8d2a2ae3922399f87905cae3aa2734926e550d31c9a";
            provenance measured;
            archiveFile "j.fluid.2007.11.002.xml";
            system    "14Dioxane + nButanol";
        }
    );
    fingerprint "654b563921504d3e";   // of the declaration, frozen before the fit

    //  IN-SAMPLE: the model reproducing the very points it was
    //  fitted to.  It is NOT a validation; see the block below.
    weighting     equal;   // chi2 is sum ((P_model - P_exp)/P_exp)^2, dimensionless
    chi2          0.00032641;
    rms_rel       0.00466484;
    nDataPoints   15;
    identifiable  true;
    maxAbsCorr    0.99870965;

    validity
    {
        temperature { min 363.15 K; max 363.15 K; }
        pressure    { min 35720 Pa; max 69850 Pa; }
        note        "the span of the FIT evidence; outside it the pair is an extrapolation";
    }
}

validation
{
    verdict     validationRefused;

    heldOut     none;   // every declared dataset carried \`role fit\`

    acceptance  none;   // no band was declared before the fit, so no
                        // pass/fail may be read out of the residual above
}

curation
{
    rule            "DEV.md 4c C291 (bubble-pressure pairs; every laboratory, graded by C285)";
    evidence        allLaboratories;   // every block fitted, none held out
    objective       twoStage;
    residual        P_bubble;
    residualScale   relative;   // (P_model - P)/P at each point's stated T
    outlierLimit_pct 20;   // |P_model - P|/P after the least-squares stage
    outliersDropped 0;
    pointsKept      15;
    noBubblePoint   0;
    maxRelError_pct 0.7137;
    meanRelError_pct 0.3824;
    acceptance      graded;   // max relative pressure error over the kept points, DEV.md 4c C285 (C291)
    gradeLimits_pct (5 10 20);   // upper limits of clean / warning / severe; above, refused
    grade           clean;
    oneLiquid       true;   // arm (f) over the validity span; a pair that splits ONE liquid is never promoted
    temperatures    1;   // distinct stated temperatures in the evidence
    laboratories    1;   // distinct articles in the evidence
    singleTemperature true;   // true: b/T was fitted at ONE temperature
    singleLaboratory  true;   // true: ONE laboratory's data, nothing to cross-check it
    verdict         accepted;
}
`,W=`/*---------------------------------------------------------------------------*\\
  NRTL binary interaction parameters --- nButanol(i) + 1Hexanol(j)

  REGRESSED BY CHOUPO'S CURATION PIPELINE (bin/choupo-curate, DEV.md 4c C282;
  record docs/design/binary-pairs-from-open-measurements.md) to measured
  bubble PRESSURES at stated temperatures (P-x, DEV.md 4c C291).  The articles named under \`evidence\` are the
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
  its fitting pipeline (every laboratory fitted to the bubble pressure, outliers beyond
  20 % discarded by name, max |P_model - P|/P over the kept points GRADED
  clean / warning / severe at 5 / 10 / 20 % -- DEV.md 4c C283 amended, C285, C291;
  THIS fit: clean, 4.5573 %; one liquid across its validity span), and NO
  HUMAN HAS REVIEWED IT.  The engine says so on every run that reads it, and
  voices a warning or a severe grade beside it.
  CAUTION: this record rests on ONE temperature and ONE laboratory.
  Nothing was held out: the \`validation {}\` block says so, and the acceptance
  is the \`curation {}\` block.  A curator who reads the series back against the
  articles marks it \`reviewStatus reviewed; humanReviewed true;\`.  Revert with
  \`bin/choupo-curate revert 1Hexanol-nButanol\`.

  REPRODUCE: run tutorials/props/curation/curate554_nrtl_nButanol_1Hexanol (after \`bin/choupo-curate fetch\` on it); its fit
  writes 1Hexanol-nButanol.proposal.dat, which bin/curate/check_regressed_pairs.py holds
  equal to this record.
\\*---------------------------------------------------------------------------*/

recordType binaryInteractionParameters;
schemaVersion 1;

pair { i nButanol; j 1Hexanol; }

components  ( nButanol  1Hexanol );
model       NRTL;

parameters
{
    i           nButanol;
    j           1Hexanol;
    a_ij        0.00000000;
    b_ij        183.02743458;
    a_ji        0.00000000;
    b_ji        -201.15706284;
    alpha       0.30000000;
}

provenance
{
    origin        fitted;
    method        "fitParameters(P_bubble), Levenberg-Marquardt";
    methodVersion "choupoProps Choupo-dev";
    fittedInCase  "tutorials/props/curation/curate554_nrtl_nButanol_1Hexanol";
    reviewStatus  autoPromoted;
    humanReviewed false;
    fitGrade      clean;   // DEV.md 4c C285 (C291): max |P_model - P|/P over the kept points, graded 5 / 10 / 20 %
    fitGradeMaxRelativeError_pct 4.5573;
    promotedBy    "bin/curate/pairs_px.py promote";
    promotedDate  "2026-11-10";
    reviewReason  "regressed by bin/choupo-curate from archive-transcribed measurements; not yet read back against the articles";
    reuse         "Choupo's own regression; the measured points belong to the cited articles and are not reproduced in this record or this tree";
    fitDate       "2026-11-10";

    evidence
    (
        {
            role      fit;
            dataset   "constant/archiveExtracts/nButanol-1Hexanol-bubbleP-j.fluid.2016.12.025-b13.dat";
            doi       "10.1016/j.fluid.2016.12.025";
            sha256    "b7b44ef1dde09c34c2e3e1ffd9878ca557df3bab0170d2c49b61296c03be2e26";
            provenance measured;
            archiveFile "j.fluid.2016.12.025.xml";
            system    "nButanol + 1Hexanol";
        }
    );
    fingerprint "9664f12584abf0bd";   // of the declaration, frozen before the fit

    //  IN-SAMPLE: the model reproducing the very points it was
    //  fitted to.  It is NOT a validation; see the block below.
    weighting     equal;   // chi2 is sum ((P_model - P_exp)/P_exp)^2, dimensionless
    chi2          0.00802889;
    rms_rel       0.02055658;
    nDataPoints   19;
    identifiable  false;
    maxAbsCorr    0.99999956;

    validity
    {
        temperature { min 343.20 K; max 343.20 K; }
        pressure    { min 3000 Pa; max 13000 Pa; }
        note        "the span of the FIT evidence; outside it the pair is an extrapolation";
    }
}

validation
{
    verdict     validationRefused;

    heldOut     none;   // every declared dataset carried \`role fit\`

    acceptance  none;   // no band was declared before the fit, so no
                        // pass/fail may be read out of the residual above
}

curation
{
    rule            "DEV.md 4c C291 (bubble-pressure pairs; every laboratory, graded by C285)";
    evidence        allLaboratories;   // every block fitted, none held out
    objective       twoStage;
    residual        P_bubble;
    residualScale   relative;   // (P_model - P)/P at each point's stated T
    outlierLimit_pct 20;   // |P_model - P|/P after the least-squares stage
    outliersDropped 0;
    pointsKept      19;
    noBubblePoint   0;
    maxRelError_pct 4.5573;
    meanRelError_pct 1.5040;
    acceptance      graded;   // max relative pressure error over the kept points, DEV.md 4c C285 (C291)
    gradeLimits_pct (5 10 20);   // upper limits of clean / warning / severe; above, refused
    grade           clean;
    oneLiquid       true;   // arm (f) over the validity span; a pair that splits ONE liquid is never promoted
    temperatures    1;   // distinct stated temperatures in the evidence
    laboratories    1;   // distinct articles in the evidence
    singleTemperature true;   // true: b/T was fitted at ONE temperature
    singleLaboratory  true;   // true: ONE laboratory's data, nothing to cross-check it
    verdict         accepted;
}
`,$=`/*---------------------------------------------------------------------------*\\
  NRTL binary interaction parameters --- nButylAcetate(i) + 1Hexanol(j)

  REGRESSED BY CHOUPO'S CURATION PIPELINE (bin/choupo-curate, DEV.md 4c C282;
  record docs/design/binary-pairs-from-open-measurements.md) to measured
  bubble PRESSURES at stated temperatures (P-x, DEV.md 4c C291).  The articles named under \`evidence\` are the
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
  its fitting pipeline (every laboratory fitted to the bubble pressure, outliers beyond
  20 % discarded by name, max |P_model - P|/P over the kept points GRADED
  clean / warning / severe at 5 / 10 / 20 % -- DEV.md 4c C283 amended, C285, C291;
  THIS fit: warning, 5.3942 %; one liquid across its validity span), and NO
  HUMAN HAS REVIEWED IT.  The engine says so on every run that reads it, and
  voices a warning or a severe grade beside it.
  CAUTION: this record rests on ONE temperature and ONE laboratory.
  Nothing was held out: the \`validation {}\` block says so, and the acceptance
  is the \`curation {}\` block.  A curator who reads the series back against the
  articles marks it \`reviewStatus reviewed; humanReviewed true;\`.  Revert with
  \`bin/choupo-curate revert 1Hexanol-nButylAcetate\`.

  REPRODUCE: run tutorials/props/curation/curate552_nrtl_nButylAcetate_1Hexanol (after \`bin/choupo-curate fetch\` on it); its fit
  writes 1Hexanol-nButylAcetate.proposal.dat, which bin/curate/check_regressed_pairs.py holds
  equal to this record.
\\*---------------------------------------------------------------------------*/

recordType binaryInteractionParameters;
schemaVersion 1;

pair { i nButylAcetate; j 1Hexanol; }

components  ( nButylAcetate  1Hexanol );
model       NRTL;

parameters
{
    i           nButylAcetate;
    j           1Hexanol;
    a_ij        0.00000000;
    b_ij        863.60586135;
    a_ji        0.00000000;
    b_ji        -101.05856091;
    alpha       0.30000000;
}

provenance
{
    origin        fitted;
    method        "fitParameters(P_bubble), Levenberg-Marquardt";
    methodVersion "choupoProps Choupo-dev";
    fittedInCase  "tutorials/props/curation/curate552_nrtl_nButylAcetate_1Hexanol";
    reviewStatus  autoPromoted;
    humanReviewed false;
    fitGrade      warning;   // DEV.md 4c C285 (C291): max |P_model - P|/P over the kept points, graded 5 / 10 / 20 %
    fitGradeMaxRelativeError_pct 5.3942;
    promotedBy    "bin/curate/pairs_px.py promote";
    promotedDate  "2026-11-10";
    reviewReason  "regressed by bin/choupo-curate from archive-transcribed measurements; not yet read back against the articles";
    reuse         "Choupo's own regression; the measured points belong to the cited articles and are not reproduced in this record or this tree";
    fitDate       "2026-11-10";

    evidence
    (
        {
            role      fit;
            dataset   "constant/archiveExtracts/nButylAcetate-1Hexanol-bubbleP-j.fluid.2016.12.025-b23.dat";
            doi       "10.1016/j.fluid.2016.12.025";
            sha256    "b7b44ef1dde09c34c2e3e1ffd9878ca557df3bab0170d2c49b61296c03be2e26";
            provenance measured;
            archiveFile "j.fluid.2016.12.025.xml";
            system    "nButylAcetate + 1Hexanol";
        }
    );
    fingerprint "da9041ee8b8a63c6";   // of the declaration, frozen before the fit

    //  IN-SAMPLE: the model reproducing the very points it was
    //  fitted to.  It is NOT a validation; see the block below.
    weighting     equal;   // chi2 is sum ((P_model - P_exp)/P_exp)^2, dimensionless
    chi2          0.03047561;
    rms_rel       0.03809487;
    nDataPoints   21;
    identifiable  true;
    maxAbsCorr    0.89572335;

    validity
    {
        temperature { min 343.20 K; max 343.20 K; }
        pressure    { min 3400 Pa; max 15200 Pa; }
        note        "the span of the FIT evidence; outside it the pair is an extrapolation";
    }
}

validation
{
    verdict     validationRefused;

    heldOut     none;   // every declared dataset carried \`role fit\`

    acceptance  none;   // no band was declared before the fit, so no
                        // pass/fail may be read out of the residual above
}

curation
{
    rule            "DEV.md 4c C291 (bubble-pressure pairs; every laboratory, graded by C285)";
    evidence        allLaboratories;   // every block fitted, none held out
    objective       twoStage;
    residual        P_bubble;
    residualScale   relative;   // (P_model - P)/P at each point's stated T
    outlierLimit_pct 20;   // |P_model - P|/P after the least-squares stage
    outliersDropped 0;
    pointsKept      21;
    noBubblePoint   0;
    maxRelError_pct 5.3942;
    meanRelError_pct 3.4593;
    acceptance      graded;   // max relative pressure error over the kept points, DEV.md 4c C285 (C291)
    gradeLimits_pct (5 10 20);   // upper limits of clean / warning / severe; above, refused
    grade           warning;
    oneLiquid       true;   // arm (f) over the validity span; a pair that splits ONE liquid is never promoted
    temperatures    1;   // distinct stated temperatures in the evidence
    laboratories    1;   // distinct articles in the evidence
    singleTemperature true;   // true: b/T was fitted at ONE temperature
    singleLaboratory  true;   // true: ONE laboratory's data, nothing to cross-check it
    verdict         accepted;
}
`,J=`/*---------------------------------------------------------------------------*\\
  NRTL binary interaction parameters --- 1Pentanol(i) + 1Hexene(j)

  REGRESSED BY CHOUPO'S CURATION PIPELINE (bin/choupo-curate, DEV.md 4c C282;
  record docs/design/binary-pairs-from-open-measurements.md) to measured
  bubble PRESSURES at stated temperatures (P-x, DEV.md 4c C291).  The articles named under \`evidence\` are the
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
  its fitting pipeline (every laboratory fitted to the bubble pressure, outliers beyond
  20 % discarded by name, max |P_model - P|/P over the kept points GRADED
  clean / warning / severe at 5 / 10 / 20 % -- DEV.md 4c C283 amended, C285, C291;
  THIS fit: clean, 2.4921 %; one liquid across its validity span), and NO
  HUMAN HAS REVIEWED IT.  The engine says so on every run that reads it, and
  voices a warning or a severe grade beside it.
  CAUTION: this record rests on ONE temperature and ONE laboratory.
  Nothing was held out: the \`validation {}\` block says so, and the acceptance
  is the \`curation {}\` block.  A curator who reads the series back against the
  articles marks it \`reviewStatus reviewed; humanReviewed true;\`.  Revert with
  \`bin/choupo-curate revert 1Hexene-1Pentanol\`.

  REPRODUCE: run tutorials/props/curation/curate524_nrtl_1Pentanol_1Hexene (after \`bin/choupo-curate fetch\` on it); its fit
  writes 1Hexene-1Pentanol.proposal.dat, which bin/curate/check_regressed_pairs.py holds
  equal to this record.
\\*---------------------------------------------------------------------------*/

recordType binaryInteractionParameters;
schemaVersion 1;

pair { i 1Pentanol; j 1Hexene; }

components  ( 1Pentanol  1Hexene );
model       NRTL;

parameters
{
    i           1Pentanol;
    j           1Hexene;
    a_ij        0.00000000;
    b_ij        21.44086784;
    a_ji        0.00000000;
    b_ji        644.90663498;
    alpha       0.30000000;
}

provenance
{
    origin        fitted;
    method        "fitParameters(P_bubble), Levenberg-Marquardt";
    methodVersion "choupoProps Choupo-dev";
    fittedInCase  "tutorials/props/curation/curate524_nrtl_1Pentanol_1Hexene";
    reviewStatus  autoPromoted;
    humanReviewed false;
    fitGrade      clean;   // DEV.md 4c C285 (C291): max |P_model - P|/P over the kept points, graded 5 / 10 / 20 %
    fitGradeMaxRelativeError_pct 2.4921;
    promotedBy    "bin/curate/pairs_px.py promote";
    promotedDate  "2026-11-10";
    reviewReason  "regressed by bin/choupo-curate from archive-transcribed measurements; not yet read back against the articles";
    reuse         "Choupo's own regression; the measured points belong to the cited articles and are not reproduced in this record or this tree";
    fitDate       "2026-11-10";

    evidence
    (
        {
            role      fit;
            dataset   "constant/archiveExtracts/1Pentanol-1Hexene-bubbleP-j.fluid.2017.12.031-b5.dat";
            doi       "10.1016/j.fluid.2017.12.031";
            sha256    "b7862c82eecf3591e4b347ced684a9c611c41ac5508fdb32a44c133e211c61f3";
            provenance measured;
            archiveFile "j.fluid.2017.12.031.xml";
            system    "1Pentanol + 1Hexene";
        }
    );
    fingerprint "3abb9741515f2cf5";   // of the declaration, frozen before the fit

    //  IN-SAMPLE: the model reproducing the very points it was
    //  fitted to.  It is NOT a validation; see the block below.
    weighting     equal;   // chi2 is sum ((P_model - P_exp)/P_exp)^2, dimensionless
    chi2          0.00746711;
    rms_rel       0.01763887;
    nDataPoints   24;
    identifiable  true;
    maxAbsCorr    0.90545418;

    validity
    {
        temperature { min 313.15 K; max 313.15 K; }
        pressure    { min 8159 Pa; max 43855 Pa; }
        note        "the span of the FIT evidence; outside it the pair is an extrapolation";
    }
}

validation
{
    verdict     validationRefused;

    heldOut     none;   // every declared dataset carried \`role fit\`

    acceptance  none;   // no band was declared before the fit, so no
                        // pass/fail may be read out of the residual above
}

curation
{
    rule            "DEV.md 4c C291 (bubble-pressure pairs; every laboratory, graded by C285)";
    evidence        allLaboratories;   // every block fitted, none held out
    objective       twoStage;
    residual        P_bubble;
    residualScale   relative;   // (P_model - P)/P at each point's stated T
    outlierLimit_pct 20;   // |P_model - P|/P after the least-squares stage
    outliersDropped 0;
    pointsKept      24;
    noBubblePoint   0;
    maxRelError_pct 2.4921;
    meanRelError_pct 1.6015;
    acceptance      graded;   // max relative pressure error over the kept points, DEV.md 4c C285 (C291)
    gradeLimits_pct (5 10 20);   // upper limits of clean / warning / severe; above, refused
    grade           clean;
    oneLiquid       true;   // arm (f) over the validity span; a pair that splits ONE liquid is never promoted
    temperatures    1;   // distinct stated temperatures in the evidence
    laboratories    1;   // distinct articles in the evidence
    singleTemperature true;   // true: b/T was fitted at ONE temperature
    singleLaboratory  true;   // true: ONE laboratory's data, nothing to cross-check it
    verdict         accepted;
}
`,Z=`/*---------------------------------------------------------------------------*\\
  NRTL binary interaction parameters --- 2Butanol(i) + 1Hexene(j)

  REGRESSED BY CHOUPO'S CURATION PIPELINE (bin/choupo-curate, DEV.md 4c C282;
  record docs/design/binary-pairs-from-open-measurements.md) to measured
  bubble PRESSURES at stated temperatures (P-x, DEV.md 4c C291).  The articles named under \`evidence\` are the
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
  its fitting pipeline (every laboratory fitted to the bubble pressure, outliers beyond
  20 % discarded by name, max |P_model - P|/P over the kept points GRADED
  clean / warning / severe at 5 / 10 / 20 % -- DEV.md 4c C283 amended, C285, C291;
  THIS fit: clean, 2.4248 %; one liquid across its validity span), and NO
  HUMAN HAS REVIEWED IT.  The engine says so on every run that reads it, and
  voices a warning or a severe grade beside it.
  CAUTION: this record rests on ONE temperature and ONE laboratory.
  Nothing was held out: the \`validation {}\` block says so, and the acceptance
  is the \`curation {}\` block.  A curator who reads the series back against the
  articles marks it \`reviewStatus reviewed; humanReviewed true;\`.  Revert with
  \`bin/choupo-curate revert 1Hexene-2Butanol\`.

  REPRODUCE: run tutorials/props/curation/curate525_nrtl_2Butanol_1Hexene (after \`bin/choupo-curate fetch\` on it); its fit
  writes 1Hexene-2Butanol.proposal.dat, which bin/curate/check_regressed_pairs.py holds
  equal to this record.
\\*---------------------------------------------------------------------------*/

recordType binaryInteractionParameters;
schemaVersion 1;

pair { i 2Butanol; j 1Hexene; }

components  ( 2Butanol  1Hexene );
model       NRTL;

parameters
{
    i           2Butanol;
    j           1Hexene;
    a_ij        0.00000000;
    b_ij        87.72164510;
    a_ji        0.00000000;
    b_ji        527.96414801;
    alpha       0.30000000;
}

provenance
{
    origin        fitted;
    method        "fitParameters(P_bubble), Levenberg-Marquardt";
    methodVersion "choupoProps Choupo-dev";
    fittedInCase  "tutorials/props/curation/curate525_nrtl_2Butanol_1Hexene";
    reviewStatus  autoPromoted;
    humanReviewed false;
    fitGrade      clean;   // DEV.md 4c C285 (C291): max |P_model - P|/P over the kept points, graded 5 / 10 / 20 %
    fitGradeMaxRelativeError_pct 2.4248;
    promotedBy    "bin/curate/pairs_px.py promote";
    promotedDate  "2026-11-10";
    reviewReason  "regressed by bin/choupo-curate from archive-transcribed measurements; not yet read back against the articles";
    reuse         "Choupo's own regression; the measured points belong to the cited articles and are not reproduced in this record or this tree";
    fitDate       "2026-11-10";

    evidence
    (
        {
            role      fit;
            dataset   "constant/archiveExtracts/2Butanol-1Hexene-bubbleP-j.fluid.2014.02.018-b3.dat";
            doi       "10.1016/j.fluid.2014.02.018";
            sha256    "a417c27644b052380d7ca60abe749fd99f6916aec42a0e12b3abf0493c25f636";
            provenance measured;
            archiveFile "j.fluid.2014.02.018.xml";
            system    "2Butanol + 1Hexene";
        }
    );
    fingerprint "4e35b3924c7fe3f6";   // of the declaration, frozen before the fit

    //  IN-SAMPLE: the model reproducing the very points it was
    //  fitted to.  It is NOT a validation; see the block below.
    weighting     equal;   // chi2 is sum ((P_model - P_exp)/P_exp)^2, dimensionless
    chi2          0.00712868;
    rms_rel       0.01723451;
    nDataPoints   24;
    identifiable  true;
    maxAbsCorr    0.93924975;

    validity
    {
        temperature { min 313.15 K; max 313.15 K; }
        pressure    { min 14604 Pa; max 45335 Pa; }
        note        "the span of the FIT evidence; outside it the pair is an extrapolation";
    }
}

validation
{
    verdict     validationRefused;

    heldOut     none;   // every declared dataset carried \`role fit\`

    acceptance  none;   // no band was declared before the fit, so no
                        // pass/fail may be read out of the residual above
}

curation
{
    rule            "DEV.md 4c C291 (bubble-pressure pairs; every laboratory, graded by C285)";
    evidence        allLaboratories;   // every block fitted, none held out
    objective       twoStage;
    residual        P_bubble;
    residualScale   relative;   // (P_model - P)/P at each point's stated T
    outlierLimit_pct 20;   // |P_model - P|/P after the least-squares stage
    outliersDropped 0;
    pointsKept      24;
    noBubblePoint   0;
    maxRelError_pct 2.4248;
    meanRelError_pct 1.5696;
    acceptance      graded;   // max relative pressure error over the kept points, DEV.md 4c C285 (C291)
    gradeLimits_pct (5 10 20);   // upper limits of clean / warning / severe; above, refused
    grade           clean;
    oneLiquid       true;   // arm (f) over the validity span; a pair that splits ONE liquid is never promoted
    temperatures    1;   // distinct stated temperatures in the evidence
    laboratories    1;   // distinct articles in the evidence
    singleTemperature true;   // true: b/T was fitted at ONE temperature
    singleLaboratory  true;   // true: ONE laboratory's data, nothing to cross-check it
    verdict         accepted;
}
`,ee=`/*---------------------------------------------------------------------------*\\
  NRTL binary interaction parameters --- diNButylEther(i) + 1Hexene(j)

  REGRESSED BY CHOUPO'S CURATION PIPELINE (bin/choupo-curate, DEV.md 4c C282;
  record docs/design/binary-pairs-from-open-measurements.md) to measured
  bubble PRESSURES at stated temperatures (P-x, DEV.md 4c C291).  The articles named under \`evidence\` are the
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
  its fitting pipeline (every laboratory fitted to the bubble pressure, outliers beyond
  20 % discarded by name, max |P_model - P|/P over the kept points GRADED
  clean / warning / severe at 5 / 10 / 20 % -- DEV.md 4c C283 amended, C285, C291;
  THIS fit: clean, 0.3668 %; one liquid across its validity span), and NO
  HUMAN HAS REVIEWED IT.  The engine says so on every run that reads it, and
  voices a warning or a severe grade beside it.
  CAUTION: this record rests on ONE temperature and ONE laboratory.
  Nothing was held out: the \`validation {}\` block says so, and the acceptance
  is the \`curation {}\` block.  A curator who reads the series back against the
  articles marks it \`reviewStatus reviewed; humanReviewed true;\`.  Revert with
  \`bin/choupo-curate revert 1Hexene-diNButylEther\`.

  REPRODUCE: run tutorials/props/curation/curate511_nrtl_diNButylEther_1Hexene (after \`bin/choupo-curate fetch\` on it); its fit
  writes 1Hexene-diNButylEther.proposal.dat, which bin/curate/check_regressed_pairs.py holds
  equal to this record.
\\*---------------------------------------------------------------------------*/

recordType binaryInteractionParameters;
schemaVersion 1;

pair { i diNButylEther; j 1Hexene; }

components  ( diNButylEther  1Hexene );
model       NRTL;

parameters
{
    i           diNButylEther;
    j           1Hexene;
    a_ij        0.00000000;
    b_ij        116.64467001;
    a_ji        0.00000000;
    b_ji        -123.12260388;
    alpha       0.30000000;
}

provenance
{
    origin        fitted;
    method        "fitParameters(P_bubble), Levenberg-Marquardt";
    methodVersion "choupoProps Choupo-dev";
    fittedInCase  "tutorials/props/curation/curate511_nrtl_diNButylEther_1Hexene";
    reviewStatus  autoPromoted;
    humanReviewed false;
    fitGrade      clean;   // DEV.md 4c C285 (C291): max |P_model - P|/P over the kept points, graded 5 / 10 / 20 %
    fitGradeMaxRelativeError_pct 0.3668;
    promotedBy    "bin/curate/pairs_px.py promote";
    promotedDate  "2026-11-10";
    reviewReason  "regressed by bin/choupo-curate from archive-transcribed measurements; not yet read back against the articles";
    reuse         "Choupo's own regression; the measured points belong to the cited articles and are not reproduced in this record or this tree";
    fitDate       "2026-11-10";

    evidence
    (
        {
            role      fit;
            dataset   "constant/archiveExtracts/diNButylEther-1Hexene-bubbleP-je7007523-b5.dat";
            doi       "10.1021/je7007523";
            sha256    "c9b5b693d7e2459732b084f6fdb52e9529dbcdb0cdedc23dccfe2307e37dc22c";
            provenance measured;
            archiveFile "je7007523.xml";
            system    "diNButylEther + 1Hexene";
        }
    );
    fingerprint "45141da7bfb1240a";   // of the declaration, frozen before the fit

    //  IN-SAMPLE: the model reproducing the very points it was
    //  fitted to.  It is NOT a validation; see the block below.
    weighting     equal;   // chi2 is sum ((P_model - P_exp)/P_exp)^2, dimensionless
    chi2          0.00008616;
    rms_rel       0.00182037;
    nDataPoints   26;
    identifiable  false;
    maxAbsCorr    0.99999997;

    validity
    {
        temperature { min 313.15 K; max 313.15 K; }
        pressure    { min 4446 Pa; max 42795 Pa; }
        note        "the span of the FIT evidence; outside it the pair is an extrapolation";
    }
}

validation
{
    verdict     validationRefused;

    heldOut     none;   // every declared dataset carried \`role fit\`

    acceptance  none;   // no band was declared before the fit, so no
                        // pass/fail may be read out of the residual above
}

curation
{
    rule            "DEV.md 4c C291 (bubble-pressure pairs; every laboratory, graded by C285)";
    evidence        allLaboratories;   // every block fitted, none held out
    objective       twoStage;
    residual        P_bubble;
    residualScale   relative;   // (P_model - P)/P at each point's stated T
    outlierLimit_pct 20;   // |P_model - P|/P after the least-squares stage
    outliersDropped 0;
    pointsKept      26;
    noBubblePoint   0;
    maxRelError_pct 0.3668;
    meanRelError_pct 0.1478;
    acceptance      graded;   // max relative pressure error over the kept points, DEV.md 4c C285 (C291)
    gradeLimits_pct (5 10 20);   // upper limits of clean / warning / severe; above, refused
    grade           clean;
    oneLiquid       true;   // arm (f) over the validity span; a pair that splits ONE liquid is never promoted
    temperatures    1;   // distinct stated temperatures in the evidence
    laboratories    1;   // distinct articles in the evidence
    singleTemperature true;   // true: b/T was fitted at ONE temperature
    singleLaboratory  true;   // true: ONE laboratory's data, nothing to cross-check it
    verdict         accepted;
}
`,ne=`/*---------------------------------------------------------------------------*\\
  NRTL binary interaction parameters --- nButanol(i) + 1Hexene(j)

  REGRESSED BY CHOUPO'S CURATION PIPELINE (bin/choupo-curate, DEV.md 4c C282;
  record docs/design/binary-pairs-from-open-measurements.md) to measured
  bubble PRESSURES at stated temperatures (P-x, DEV.md 4c C291).  The articles named under \`evidence\` are the
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
  its fitting pipeline (every laboratory fitted to the bubble pressure, outliers beyond
  20 % discarded by name, max |P_model - P|/P over the kept points GRADED
  clean / warning / severe at 5 / 10 / 20 % -- DEV.md 4c C283 amended, C285, C291;
  THIS fit: clean, 2.7856 %; one liquid across its validity span), and NO
  HUMAN HAS REVIEWED IT.  The engine says so on every run that reads it, and
  voices a warning or a severe grade beside it.
  CAUTION: this record rests on ONE temperature and ONE laboratory.
  Nothing was held out: the \`validation {}\` block says so, and the acceptance
  is the \`curation {}\` block.  A curator who reads the series back against the
  articles marks it \`reviewStatus reviewed; humanReviewed true;\`.  Revert with
  \`bin/choupo-curate revert 1Hexene-nButanol\`.

  REPRODUCE: run tutorials/props/curation/curate512_nrtl_nButanol_1Hexene (after \`bin/choupo-curate fetch\` on it); its fit
  writes 1Hexene-nButanol.proposal.dat, which bin/curate/check_regressed_pairs.py holds
  equal to this record.
\\*---------------------------------------------------------------------------*/

recordType binaryInteractionParameters;
schemaVersion 1;

pair { i nButanol; j 1Hexene; }

components  ( nButanol  1Hexene );
model       NRTL;

parameters
{
    i           nButanol;
    j           1Hexene;
    a_ij        0.00000000;
    b_ij        75.00748003;
    a_ji        0.00000000;
    b_ji        643.17920020;
    alpha       0.30000000;
}

provenance
{
    origin        fitted;
    method        "fitParameters(P_bubble), Levenberg-Marquardt";
    methodVersion "choupoProps Choupo-dev";
    fittedInCase  "tutorials/props/curation/curate512_nrtl_nButanol_1Hexene";
    reviewStatus  autoPromoted;
    humanReviewed false;
    fitGrade      clean;   // DEV.md 4c C285 (C291): max |P_model - P|/P over the kept points, graded 5 / 10 / 20 %
    fitGradeMaxRelativeError_pct 2.7856;
    promotedBy    "bin/curate/pairs_px.py promote";
    promotedDate  "2026-11-10";
    reviewReason  "regressed by bin/choupo-curate from archive-transcribed measurements; not yet read back against the articles";
    reuse         "Choupo's own regression; the measured points belong to the cited articles and are not reproduced in this record or this tree";
    fitDate       "2026-11-10";

    evidence
    (
        {
            role      fit;
            dataset   "constant/archiveExtracts/nButanol-1Hexene-bubbleP-j.jct.2013.04.003-b3.dat";
            doi       "10.1016/j.jct.2013.04.003";
            sha256    "a19e126042dda33cba21623bb33be22d7dd264e84747e9b9cbf862676b355d3b";
            provenance measured;
            archiveFile "j.jct.2013.04.003.xml";
            system    "nButanol + 1Hexene";
        }
    );
    fingerprint "b3924952bbe6f81b";   // of the declaration, frozen before the fit

    //  IN-SAMPLE: the model reproducing the very points it was
    //  fitted to.  It is NOT a validation; see the block below.
    weighting     equal;   // chi2 is sum ((P_model - P_exp)/P_exp)^2, dimensionless
    chi2          0.01034477;
    rms_rel       0.01994682;
    nDataPoints   26;
    identifiable  true;
    maxAbsCorr    0.90238941;

    validity
    {
        temperature { min 313.15 K; max 313.15 K; }
        pressure    { min 9351 Pa; max 44518 Pa; }
        note        "the span of the FIT evidence; outside it the pair is an extrapolation";
    }
}

validation
{
    verdict     validationRefused;

    heldOut     none;   // every declared dataset carried \`role fit\`

    acceptance  none;   // no band was declared before the fit, so no
                        // pass/fail may be read out of the residual above
}

curation
{
    rule            "DEV.md 4c C291 (bubble-pressure pairs; every laboratory, graded by C285)";
    evidence        allLaboratories;   // every block fitted, none held out
    objective       twoStage;
    residual        P_bubble;
    residualScale   relative;   // (P_model - P)/P at each point's stated T
    outlierLimit_pct 20;   // |P_model - P|/P after the least-squares stage
    outliersDropped 0;
    pointsKept      26;
    noBubblePoint   0;
    maxRelError_pct 2.7856;
    meanRelError_pct 1.8358;
    acceptance      graded;   // max relative pressure error over the kept points, DEV.md 4c C285 (C291)
    gradeLimits_pct (5 10 20);   // upper limits of clean / warning / severe; above, refused
    grade           clean;
    oneLiquid       true;   // arm (f) over the validity span; a pair that splits ONE liquid is never promoted
    temperatures    1;   // distinct stated temperatures in the evidence
    laboratories    1;   // distinct articles in the evidence
    singleTemperature true;   // true: b/T was fitted at ONE temperature
    singleLaboratory  true;   // true: ONE laboratory's data, nothing to cross-check it
    verdict         accepted;
}
`,te=`/*---------------------------------------------------------------------------*\\
  NRTL binary interaction parameters --- tertButylEthylEther(i) + 1Hexene(j)

  REGRESSED BY CHOUPO'S CURATION PIPELINE (bin/choupo-curate, DEV.md 4c C282;
  record docs/design/binary-pairs-from-open-measurements.md) to measured
  bubble PRESSURES at stated temperatures (P-x, DEV.md 4c C291).  The articles named under \`evidence\` are the
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
  its fitting pipeline (every laboratory fitted to the bubble pressure, outliers beyond
  20 % discarded by name, max |P_model - P|/P over the kept points GRADED
  clean / warning / severe at 5 / 10 / 20 % -- DEV.md 4c C283 amended, C285, C291;
  THIS fit: clean, 0.7259 %; one liquid across its validity span), and NO
  HUMAN HAS REVIEWED IT.  The engine says so on every run that reads it, and
  voices a warning or a severe grade beside it.
  CAUTION: this record rests on ONE temperature and ONE laboratory.
  Nothing was held out: the \`validation {}\` block says so, and the acceptance
  is the \`curation {}\` block.  A curator who reads the series back against the
  articles marks it \`reviewStatus reviewed; humanReviewed true;\`.  Revert with
  \`bin/choupo-curate revert 1Hexene-tertButylEthylEther\`.

  REPRODUCE: run tutorials/props/curation/curate547_nrtl_tertButylEthylEther_1Hexene (after \`bin/choupo-curate fetch\` on it); its fit
  writes 1Hexene-tertButylEthylEther.proposal.dat, which bin/curate/check_regressed_pairs.py holds
  equal to this record.
\\*---------------------------------------------------------------------------*/

recordType binaryInteractionParameters;
schemaVersion 1;

pair { i tertButylEthylEther; j 1Hexene; }

components  ( tertButylEthylEther  1Hexene );
model       NRTL;

parameters
{
    i           tertButylEthylEther;
    j           1Hexene;
    a_ij        0.00000000;
    b_ij        526.21824492;
    a_ji        0.00000000;
    b_ji        -318.22901985;
    alpha       0.30000000;
}

provenance
{
    origin        fitted;
    method        "fitParameters(P_bubble), Levenberg-Marquardt";
    methodVersion "choupoProps Choupo-dev";
    fittedInCase  "tutorials/props/curation/curate547_nrtl_tertButylEthylEther_1Hexene";
    reviewStatus  autoPromoted;
    humanReviewed false;
    fitGrade      clean;   // DEV.md 4c C285 (C291): max |P_model - P|/P over the kept points, graded 5 / 10 / 20 %
    fitGradeMaxRelativeError_pct 0.7259;
    promotedBy    "bin/curate/pairs_px.py promote";
    promotedDate  "2026-11-10";
    reviewReason  "regressed by bin/choupo-curate from archive-transcribed measurements; not yet read back against the articles";
    reuse         "Choupo's own regression; the measured points belong to the cited articles and are not reproduced in this record or this tree";
    fitDate       "2026-11-10";

    evidence
    (
        {
            role      fit;
            dataset   "constant/archiveExtracts/tertButylEthylEther-1Hexene-bubbleP-je7005488-b0.dat";
            doi       "10.1021/je7005488";
            sha256    "23d58dc843e58ce6af6710a64af0de287f68052b10597899afb467540de55661";
            provenance measured;
            archiveFile "je7005488.xml";
            system    "tertButylEthylEther + 1Hexene";
        }
    );
    fingerprint "d5f2da8369c9b611";   // of the declaration, frozen before the fit

    //  IN-SAMPLE: the model reproducing the very points it was
    //  fitted to.  It is NOT a validation; see the block below.
    weighting     equal;   // chi2 is sum ((P_model - P_exp)/P_exp)^2, dimensionless
    chi2          0.00056701;
    rms_rel       0.00507673;
    nDataPoints   22;
    identifiable  true;
    maxAbsCorr    0.99326351;

    validity
    {
        temperature { min 313.15 K; max 313.15 K; }
        pressure    { min 32445 Pa; max 44359 Pa; }
        note        "the span of the FIT evidence; outside it the pair is an extrapolation";
    }
}

validation
{
    verdict     validationRefused;

    heldOut     none;   // every declared dataset carried \`role fit\`

    acceptance  none;   // no band was declared before the fit, so no
                        // pass/fail may be read out of the residual above
}

curation
{
    rule            "DEV.md 4c C291 (bubble-pressure pairs; every laboratory, graded by C285)";
    evidence        allLaboratories;   // every block fitted, none held out
    objective       twoStage;
    residual        P_bubble;
    residualScale   relative;   // (P_model - P)/P at each point's stated T
    outlierLimit_pct 20;   // |P_model - P|/P after the least-squares stage
    outliersDropped 0;
    pointsKept      22;
    noBubblePoint   0;
    maxRelError_pct 0.7259;
    meanRelError_pct 0.4587;
    acceptance      graded;   // max relative pressure error over the kept points, DEV.md 4c C285 (C291)
    gradeLimits_pct (5 10 20);   // upper limits of clean / warning / severe; above, refused
    grade           clean;
    oneLiquid       true;   // arm (f) over the validity span; a pair that splits ONE liquid is never promoted
    temperatures    1;   // distinct stated temperatures in the evidence
    laboratories    1;   // distinct articles in the evidence
    singleTemperature true;   // true: b/T was fitted at ONE temperature
    singleLaboratory  true;   // true: ONE laboratory's data, nothing to cross-check it
    verdict         accepted;
}
`,ae=`/*---------------------------------------------------------------------------*\\
  NRTL binary interaction parameters --- 1Pentanol(i) + 224Trimethylpentane(j)

  REGRESSED BY CHOUPO'S CURATION PIPELINE (bin/choupo-curate, DEV.md 4c C282;
  record docs/design/binary-pairs-from-open-measurements.md) to measured
  bubble PRESSURES at stated temperatures (P-x, DEV.md 4c C291).  The articles named under \`evidence\` are the
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
  its fitting pipeline (every laboratory fitted to the bubble pressure, outliers beyond
  20 % discarded by name, max |P_model - P|/P over the kept points GRADED
  clean / warning / severe at 5 / 10 / 20 % -- DEV.md 4c C283 amended, C285, C291;
  THIS fit: clean, 2.2708 %; one liquid across its validity span), and NO
  HUMAN HAS REVIEWED IT.  The engine says so on every run that reads it, and
  voices a warning or a severe grade beside it.
  CAUTION: this record rests on ONE temperature and ONE laboratory.
  Nothing was held out: the \`validation {}\` block says so, and the acceptance
  is the \`curation {}\` block.  A curator who reads the series back against the
  articles marks it \`reviewStatus reviewed; humanReviewed true;\`.  Revert with
  \`bin/choupo-curate revert 1Pentanol-224Trimethylpentane\`.

  REPRODUCE: run tutorials/props/curation/curate526_nrtl_1Pentanol_224Trimethylpentane (after \`bin/choupo-curate fetch\` on it); its fit
  writes 1Pentanol-224Trimethylpentane.proposal.dat, which bin/curate/check_regressed_pairs.py holds
  equal to this record.
\\*---------------------------------------------------------------------------*/

recordType binaryInteractionParameters;
schemaVersion 1;

pair { i 1Pentanol; j 224Trimethylpentane; }

components  ( 1Pentanol  224Trimethylpentane );
model       NRTL;

parameters
{
    i           1Pentanol;
    j           224Trimethylpentane;
    a_ij        0.00000000;
    b_ij        82.54398830;
    a_ji        0.00000000;
    b_ji        619.16463709;
    alpha       0.30000000;
}

provenance
{
    origin        fitted;
    method        "fitParameters(P_bubble), Levenberg-Marquardt";
    methodVersion "choupoProps Choupo-dev";
    fittedInCase  "tutorials/props/curation/curate526_nrtl_1Pentanol_224Trimethylpentane";
    reviewStatus  autoPromoted;
    humanReviewed false;
    fitGrade      clean;   // DEV.md 4c C285 (C291): max |P_model - P|/P over the kept points, graded 5 / 10 / 20 %
    fitGradeMaxRelativeError_pct 2.2708;
    promotedBy    "bin/curate/pairs_px.py promote";
    promotedDate  "2026-11-10";
    reviewReason  "regressed by bin/choupo-curate from archive-transcribed measurements; not yet read back against the articles";
    reuse         "Choupo's own regression; the measured points belong to the cited articles and are not reproduced in this record or this tree";
    fitDate       "2026-11-10";

    evidence
    (
        {
            role      fit;
            dataset   "constant/archiveExtracts/1Pentanol-224Trimethylpentane-bubbleP-j.fluid.2012.11.005-b1.dat";
            doi       "10.1016/j.fluid.2012.11.005";
            sha256    "a8dab5732976e7628025167b9eaae498bb4b9a2d978210a7503d97234be6fd9f";
            provenance measured;
            archiveFile "j.fluid.2012.11.005.xml";
            system    "1Pentanol + 224Trimethylpentane";
        }
    );
    fingerprint "8376986cd6557bff";   // of the declaration, frozen before the fit

    //  IN-SAMPLE: the model reproducing the very points it was
    //  fitted to.  It is NOT a validation; see the block below.
    weighting     equal;   // chi2 is sum ((P_model - P_exp)/P_exp)^2, dimensionless
    chi2          0.00639859;
    rms_rel       0.01632813;
    nDataPoints   24;
    identifiable  true;
    maxAbsCorr    0.90806634;

    validity
    {
        temperature { min 313.15 K; max 313.15 K; }
        pressure    { min 3355 Pa; max 12987 Pa; }
        note        "the span of the FIT evidence; outside it the pair is an extrapolation";
    }
}

validation
{
    verdict     validationRefused;

    heldOut     none;   // every declared dataset carried \`role fit\`

    acceptance  none;   // no band was declared before the fit, so no
                        // pass/fail may be read out of the residual above
}

curation
{
    rule            "DEV.md 4c C291 (bubble-pressure pairs; every laboratory, graded by C285)";
    evidence        allLaboratories;   // every block fitted, none held out
    objective       twoStage;
    residual        P_bubble;
    residualScale   relative;   // (P_model - P)/P at each point's stated T
    outlierLimit_pct 20;   // |P_model - P|/P after the least-squares stage
    outliersDropped 0;
    pointsKept      24;
    noBubblePoint   0;
    maxRelError_pct 2.2708;
    meanRelError_pct 1.5009;
    acceptance      graded;   // max relative pressure error over the kept points, DEV.md 4c C285 (C291)
    gradeLimits_pct (5 10 20);   // upper limits of clean / warning / severe; above, refused
    grade           clean;
    oneLiquid       true;   // arm (f) over the validity span; a pair that splits ONE liquid is never promoted
    temperatures    1;   // distinct stated temperatures in the evidence
    laboratories    1;   // distinct articles in the evidence
    singleTemperature true;   // true: b/T was fitted at ONE temperature
    singleLaboratory  true;   // true: ONE laboratory's data, nothing to cross-check it
    verdict         accepted;
}
`,re=`/*---------------------------------------------------------------------------*\\
  NRTL binary interaction parameters --- 2Hexanone(i) + 1Pentanol(j)

  REGRESSED BY CHOUPO'S CURATION PIPELINE (bin/choupo-curate, DEV.md 4c C282;
  record docs/design/binary-pairs-from-open-measurements.md) to measured
  bubble temperatures.  The articles named under \`evidence\` are the
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
  its fitting pipeline (every laboratory fitted, outliers beyond 3 K
  discarded by name, max |T_model - T| over the kept points GRADED
  clean / warning / severe at 1 / 2 / 4 K -- DEV.md 4c C283
  amended, C285, C286; THIS fit: clean, 0.4977 K; one liquid
  across its validity span), and NO HUMAN HAS REVIEWED IT.  The
  engine says so on every run that reads it, and voices a warning
  or a severe grade beside it.
  Nothing was held out: the \`validation {}\` block says so, and the
  acceptance is the \`curation {}\` block.  A curator who reads the series
  back against the articles marks it \`reviewStatus reviewed; humanReviewed
  true;\`.  Revert with \`bin/choupo-curate revert 1Pentanol-2Hexanone\`.

  REPRODUCE: run tutorials/props/curation/curate144_nrtl_2Hexanone_1Pentanol (after \`bin/choupo-curate fetch\` on it); its fit
  writes 1Pentanol-2Hexanone.proposal.dat, which bin/curate/check_regressed_pairs.py holds
  equal to this record.
\\*---------------------------------------------------------------------------*/

recordType binaryInteractionParameters;
schemaVersion 1;

pair { i 2Hexanone; j 1Pentanol; }

components  ( 2Hexanone  1Pentanol );
model       NRTL;

parameters
{
    i           2Hexanone;
    j           1Pentanol;
    a_ij        0.00000000;
    b_ij        268.12183869;
    a_ji        0.00000000;
    b_ji        -141.60328904;
    alpha       0.30000000;
}

provenance
{
    origin        fitted;
    method        "fitParameters(T_bubble), Levenberg-Marquardt";
    methodVersion "choupoProps Choupo-dev";
    fittedInCase  "tutorials/props/curation/curate144_nrtl_2Hexanone_1Pentanol";
    reviewStatus  autoPromoted;
    humanReviewed false;
    fitGrade      clean;   // DEV.md 4c C285 (C286): max |T_model - T| over the kept points, graded 1 / 2 / 4 K
    fitGradeMaxTemperatureError_K 0.4977;
    promotedBy    "bin/choupo-curate pair --promote";
    promotedDate  "2026-11-10";
    reviewReason  "regressed by bin/choupo-curate from archive-transcribed measurements; not yet read back against the articles";
    reuse         "Choupo's own regression; the measured points belong to the cited articles and are not reproduced in this record or this tree";
    fitDate       "2026-11-10";

    evidence
    (
        {
            role      fit;
            dataset   "constant/archiveExtracts/2Hexanone-1Pentanol-bubble-je0502905.dat";
            doi       "10.1021/je0502905";
            sha256    "e0f66d8a57bd22c3405c111e448b7e3752f0731d0f6cc122669b916fe93ac206";
            provenance measured;
            archiveFile "je0502905.xml";
            system    "2Hexanone + 1Pentanol";
        }
        {
            role      fit;
            dataset   "constant/archiveExtracts/2Hexanone-1Pentanol-bubble-je900058p.dat";
            doi       "10.1021/je900058p";
            sha256    "60ee278277a3b7dc9d96214f7d63ff569e6663b61875855e60bc38fea824b588";
            provenance measured;
            archiveFile "je900058p.xml";
            system    "2Hexanone + 1Pentanol";
            pressure  "101320.000000 Pa";
        }
    );
    fingerprint "0e6c1b4e5e6483d5";   // of the declaration, frozen before the fit

    //  IN-SAMPLE: the model reproducing the very points it was
    //  fitted to.  It is NOT a validation; see the block below.
    weighting     uncertainty;   // chi2 is sum ((T_model - T_exp)/U)^2, dimensionless
    chi2          22.80181230;
    rms_K         0.24289052;
    nDataPoints   27;
    identifiable  false;
    maxAbsCorr    0.99914254;

    validity
    {
        temperature { min 360.11 K; max 408.31 K; }
        pressure    { min 26660 Pa; max 101320 Pa; }
        note        "the span of the FIT evidence; outside it the pair is an extrapolation";
    }
}

validation
{
    verdict     validationRefused;

    heldOut     none;   // every declared dataset carried \`role fit\`

    acceptance  none;   // no band was declared before the fit, so no
                        // pass/fail may be read out of the residual above
}

curation
{
    rule            "DEV.md 4c C283 (amended) + C284, graded by C285 (C286)";
    evidence        allLaboratories;   // every study fitted, none held out
    objective       twoStage;
    outlierLimit    3 K;   // |T_model - T| after the least-squares stage
    outliersDropped 0;
    pointsKept      27;
    noBubblePoint   0;
    maxAbsError     0.4977 K;
    meanAbsError    0.1909 K;
    acceptance      graded;   // max |T_model - T| over the kept points, DEV.md 4c C285 (C286)
    gradeLimits_K   (1 2 4);   // upper limits of clean / warning / severe; above, refused
    grade           clean;
    oneLiquid       true;   // arm (f) over the validity span; a pair that splits ONE liquid is never promoted, whatever its grade
    verdict         accepted;
}
`,ie=`/*---------------------------------------------------------------------------*\\
  NRTL binary interaction parameters --- 1Pentanol(i) + anisole(j)

  REGRESSED BY CHOUPO'S CURATION PIPELINE (bin/choupo-curate, DEV.md 4c C282;
  record docs/design/binary-pairs-from-open-measurements.md) to measured
  bubble temperatures.  The articles named under \`evidence\` are the
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
  its fitting pipeline (every laboratory fitted, outliers beyond 3 K
  discarded by name, max |T_model - T| over the kept points GRADED
  clean / warning / severe at 1 / 2 / 4 K -- DEV.md 4c C283
  amended, C285, C286; THIS fit: clean, 0.8840 K; one liquid
  across its validity span), and NO HUMAN HAS REVIEWED IT.  The
  engine says so on every run that reads it, and voices a warning
  or a severe grade beside it.
  Nothing was held out: the \`validation {}\` block says so, and the
  acceptance is the \`curation {}\` block.  A curator who reads the series
  back against the articles marks it \`reviewStatus reviewed; humanReviewed
  true;\`.  Revert with \`bin/choupo-curate revert 1Pentanol-anisole\`.

  REPRODUCE: run tutorials/props/curation/curate122_nrtl_1Pentanol_anisole (after \`bin/choupo-curate fetch\` on it); its fit
  writes 1Pentanol-anisole.proposal.dat, which bin/curate/check_regressed_pairs.py holds
  equal to this record.
\\*---------------------------------------------------------------------------*/

recordType binaryInteractionParameters;
schemaVersion 1;

pair { i 1Pentanol; j anisole; }

components  ( 1Pentanol  anisole );
model       NRTL;

parameters
{
    i           1Pentanol;
    j           anisole;
    a_ij        0.00000000;
    b_ij        143.64068180;
    a_ji        0.00000000;
    b_ji        178.75542362;
    alpha       0.30000000;
}

provenance
{
    origin        fitted;
    method        "fitParameters(T_bubble), Levenberg-Marquardt";
    methodVersion "choupoProps Choupo-dev";
    fittedInCase  "tutorials/props/curation/curate122_nrtl_1Pentanol_anisole";
    reviewStatus  autoPromoted;
    humanReviewed false;
    fitGrade      clean;   // DEV.md 4c C285 (C286): max |T_model - T| over the kept points, graded 1 / 2 / 4 K
    fitGradeMaxTemperatureError_K 0.8840;
    promotedBy    "bin/choupo-curate pair --promote";
    promotedDate  "2026-11-10";
    reviewReason  "regressed by bin/choupo-curate from archive-transcribed measurements; not yet read back against the articles";
    reuse         "Choupo's own regression; the measured points belong to the cited articles and are not reproduced in this record or this tree";
    fitDate       "2026-11-10";

    evidence
    (
        {
            role      fit;
            dataset   "constant/archiveExtracts/1Pentanol-anisole-bubble-je700594n.dat";
            doi       "10.1021/je700594n";
            sha256    "7b512b206820a896626fa4fe3bfac6be1fa539588544d4b1f7b0f59a43b30844";
            provenance measured;
            archiveFile "je700594n.xml";
            system    "1Pentanol + anisole";
        }
        {
            role      fit;
            dataset   "constant/archiveExtracts/1Pentanol-anisole-bubble-je034189g.dat";
            doi       "10.1021/je034189g";
            sha256    "461b5fb8c3a3954232444ec96e9f1d3955834cebe55eaeb73453fa187e3b670a";
            provenance measured;
            archiveFile "je034189g.xml";
            system    "1Pentanol + anisole";
            pressure  "101320.000000 Pa";
        }
    );
    fingerprint "bcba90c591cc9401";   // of the declaration, frozen before the fit

    //  IN-SAMPLE: the model reproducing the very points it was
    //  fitted to.  It is NOT a validation; see the block below.
    weighting     uncertainty;   // chi2 is sum ((T_model - T_exp)/U)^2, dimensionless
    chi2          193.93535519;
    rms_K         0.27783532;
    nDataPoints   68;
    identifiable  true;
    maxAbsCorr    0.99631756;

    validity
    {
        temperature { min 372.65 K; max 422.80 K; }
        pressure    { min 26660 Pa; max 101320 Pa; }
        note        "the span of the FIT evidence; outside it the pair is an extrapolation";
    }
}

validation
{
    verdict     validationRefused;

    heldOut     none;   // every declared dataset carried \`role fit\`

    acceptance  none;   // no band was declared before the fit, so no
                        // pass/fail may be read out of the residual above
}

curation
{
    rule            "DEV.md 4c C283 (amended) + C284, graded by C285 (C286)";
    evidence        allLaboratories;   // every study fitted, none held out
    objective       twoStage;
    outlierLimit    3 K;   // |T_model - T| after the least-squares stage
    outliersDropped 0;
    pointsKept      68;
    noBubblePoint   0;
    maxAbsError     0.8840 K;
    meanAbsError    0.1973 K;
    acceptance      graded;   // max |T_model - T| over the kept points, DEV.md 4c C285 (C286)
    gradeLimits_K   (1 2 4);   // upper limits of clean / warning / severe; above, refused
    grade           clean;
    oneLiquid       true;   // arm (f) over the validity span; a pair that splits ONE liquid is never promoted, whatever its grade
    verdict         accepted;
}
`,oe=`/*---------------------------------------------------------------------------*\\
  NRTL binary interaction parameters --- 1Pentanol(i) + cyclohexane(j)

  REGRESSED BY CHOUPO'S CURATION PIPELINE (bin/choupo-curate, DEV.md 4c C282;
  record docs/design/binary-pairs-from-open-measurements.md) to measured
  bubble PRESSURES at stated temperatures (P-x, DEV.md 4c C291).  The articles named under \`evidence\` are the
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
  its fitting pipeline (every laboratory fitted to the bubble pressure, outliers beyond
  20 % discarded by name, max |P_model - P|/P over the kept points GRADED
  clean / warning / severe at 5 / 10 / 20 % -- DEV.md 4c C283 amended, C285, C291;
  THIS fit: clean, 2.5906 %; one liquid across its validity span), and NO
  HUMAN HAS REVIEWED IT.  The engine says so on every run that reads it, and
  voices a warning or a severe grade beside it.
  CAUTION: this record rests on ONE temperature and ONE laboratory.
  Nothing was held out: the \`validation {}\` block says so, and the acceptance
  is the \`curation {}\` block.  A curator who reads the series back against the
  articles marks it \`reviewStatus reviewed; humanReviewed true;\`.  Revert with
  \`bin/choupo-curate revert 1Pentanol-cyclohexane\`.

  REPRODUCE: run tutorials/props/curation/curate527_nrtl_1Pentanol_cyclohexane (after \`bin/choupo-curate fetch\` on it); its fit
  writes 1Pentanol-cyclohexane.proposal.dat, which bin/curate/check_regressed_pairs.py holds
  equal to this record.
\\*---------------------------------------------------------------------------*/

recordType binaryInteractionParameters;
schemaVersion 1;

pair { i 1Pentanol; j cyclohexane; }

components  ( 1Pentanol  cyclohexane );
model       NRTL;

parameters
{
    i           1Pentanol;
    j           cyclohexane;
    a_ij        0.00000000;
    b_ij        -19.83438397;
    a_ji        0.00000000;
    b_ji        743.88871862;
    alpha       0.30000000;
}

provenance
{
    origin        fitted;
    method        "fitParameters(P_bubble), Levenberg-Marquardt";
    methodVersion "choupoProps Choupo-dev";
    fittedInCase  "tutorials/props/curation/curate527_nrtl_1Pentanol_cyclohexane";
    reviewStatus  autoPromoted;
    humanReviewed false;
    fitGrade      clean;   // DEV.md 4c C285 (C291): max |P_model - P|/P over the kept points, graded 5 / 10 / 20 %
    fitGradeMaxRelativeError_pct 2.5906;
    promotedBy    "bin/curate/pairs_px.py promote";
    promotedDate  "2026-11-10";
    reviewReason  "regressed by bin/choupo-curate from archive-transcribed measurements; not yet read back against the articles";
    reuse         "Choupo's own regression; the measured points belong to the cited articles and are not reproduced in this record or this tree";
    fitDate       "2026-11-10";

    evidence
    (
        {
            role      fit;
            dataset   "constant/archiveExtracts/1Pentanol-cyclohexane-bubbleP-j.fluid.2012.01.007-b0.dat";
            doi       "10.1016/j.fluid.2012.01.007";
            sha256    "bb4607d50418aedd060930c3ec15f72df01529360c9e458c4bd0ec24cf61471f";
            provenance measured;
            archiveFile "j.fluid.2012.01.007.xml";
            system    "1Pentanol + cyclohexane";
        }
    );
    fingerprint "d057058ed50cd50b";   // of the declaration, frozen before the fit

    //  IN-SAMPLE: the model reproducing the very points it was
    //  fitted to.  It is NOT a validation; see the block below.
    weighting     equal;   // chi2 is sum ((P_model - P_exp)/P_exp)^2, dimensionless
    chi2          0.00872532;
    rms_rel       0.01906712;
    nDataPoints   24;
    identifiable  true;
    maxAbsCorr    0.88138897;

    validity
    {
        temperature { min 313.15 K; max 313.15 K; }
        pressure    { min 4560 Pa; max 24329 Pa; }
        note        "the span of the FIT evidence; outside it the pair is an extrapolation";
    }
}

validation
{
    verdict     validationRefused;

    heldOut     none;   // every declared dataset carried \`role fit\`

    acceptance  none;   // no band was declared before the fit, so no
                        // pass/fail may be read out of the residual above
}

curation
{
    rule            "DEV.md 4c C291 (bubble-pressure pairs; every laboratory, graded by C285)";
    evidence        allLaboratories;   // every block fitted, none held out
    objective       twoStage;
    residual        P_bubble;
    residualScale   relative;   // (P_model - P)/P at each point's stated T
    outlierLimit_pct 20;   // |P_model - P|/P after the least-squares stage
    outliersDropped 0;
    pointsKept      24;
    noBubblePoint   0;
    maxRelError_pct 2.5906;
    meanRelError_pct 1.7703;
    acceptance      graded;   // max relative pressure error over the kept points, DEV.md 4c C285 (C291)
    gradeLimits_pct (5 10 20);   // upper limits of clean / warning / severe; above, refused
    grade           clean;
    oneLiquid       true;   // arm (f) over the validity span; a pair that splits ONE liquid is never promoted
    temperatures    1;   // distinct stated temperatures in the evidence
    laboratories    1;   // distinct articles in the evidence
    singleTemperature true;   // true: b/T was fitted at ONE temperature
    singleLaboratory  true;   // true: ONE laboratory's data, nothing to cross-check it
    verdict         accepted;
}
`,se=`/*---------------------------------------------------------------------------*\\
  NRTL binary interaction parameters --- 1Pentanol(i) + nHexane(j)

  REGRESSED BY CHOUPO'S CURATION PIPELINE (bin/choupo-curate, DEV.md 4c C282;
  record docs/design/binary-pairs-from-open-measurements.md) to measured
  bubble PRESSURES at stated temperatures (P-x, DEV.md 4c C291).  The articles named under \`evidence\` are the
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
  its fitting pipeline (every laboratory fitted to the bubble pressure, outliers beyond
  20 % discarded by name, max |P_model - P|/P over the kept points GRADED
  clean / warning / severe at 5 / 10 / 20 % -- DEV.md 4c C283 amended, C285, C291;
  THIS fit: clean, 2.6390 %; one liquid across its validity span), and NO
  HUMAN HAS REVIEWED IT.  The engine says so on every run that reads it, and
  voices a warning or a severe grade beside it.
  CAUTION: this record rests on ONE temperature and ONE laboratory.
  Nothing was held out: the \`validation {}\` block says so, and the acceptance
  is the \`curation {}\` block.  A curator who reads the series back against the
  articles marks it \`reviewStatus reviewed; humanReviewed true;\`.  Revert with
  \`bin/choupo-curate revert 1Pentanol-nHexane\`.

  REPRODUCE: run tutorials/props/curation/curate528_nrtl_1Pentanol_nHexane (after \`bin/choupo-curate fetch\` on it); its fit
  writes 1Pentanol-nHexane.proposal.dat, which bin/curate/check_regressed_pairs.py holds
  equal to this record.
\\*---------------------------------------------------------------------------*/

recordType binaryInteractionParameters;
schemaVersion 1;

pair { i 1Pentanol; j nHexane; }

components  ( 1Pentanol  nHexane );
model       NRTL;

parameters
{
    i           1Pentanol;
    j           nHexane;
    a_ij        0.00000000;
    b_ij        53.15030152;
    a_ji        0.00000000;
    b_ji        660.36427091;
    alpha       0.30000000;
}

provenance
{
    origin        fitted;
    method        "fitParameters(P_bubble), Levenberg-Marquardt";
    methodVersion "choupoProps Choupo-dev";
    fittedInCase  "tutorials/props/curation/curate528_nrtl_1Pentanol_nHexane";
    reviewStatus  autoPromoted;
    humanReviewed false;
    fitGrade      clean;   // DEV.md 4c C285 (C291): max |P_model - P|/P over the kept points, graded 5 / 10 / 20 %
    fitGradeMaxRelativeError_pct 2.6390;
    promotedBy    "bin/curate/pairs_px.py promote";
    promotedDate  "2026-11-10";
    reviewReason  "regressed by bin/choupo-curate from archive-transcribed measurements; not yet read back against the articles";
    reuse         "Choupo's own regression; the measured points belong to the cited articles and are not reproduced in this record or this tree";
    fitDate       "2026-11-10";

    evidence
    (
        {
            role      fit;
            dataset   "constant/archiveExtracts/1Pentanol-nHexane-bubbleP-j.fluid.2016.05.031-b4.dat";
            doi       "10.1016/j.fluid.2016.05.031";
            sha256    "b881692f8c394565784e487706d24274b0017ab22a2defb6a2db53f38d261087";
            provenance measured;
            archiveFile "j.fluid.2016.05.031.xml";
            system    "1Pentanol + nHexane";
        }
    );
    fingerprint "5441074d4ca4ad39";   // of the declaration, frozen before the fit

    //  IN-SAMPLE: the model reproducing the very points it was
    //  fitted to.  It is NOT a validation; see the block below.
    weighting     equal;   // chi2 is sum ((P_model - P_exp)/P_exp)^2, dimensionless
    chi2          0.00782792;
    rms_rel       0.01806000;
    nDataPoints   24;
    identifiable  true;
    maxAbsCorr    0.89251092;

    validity
    {
        temperature { min 313.15 K; max 313.15 K; }
        pressure    { min 7474 Pa; max 36627 Pa; }
        note        "the span of the FIT evidence; outside it the pair is an extrapolation";
    }
}

validation
{
    verdict     validationRefused;

    heldOut     none;   // every declared dataset carried \`role fit\`

    acceptance  none;   // no band was declared before the fit, so no
                        // pass/fail may be read out of the residual above
}

curation
{
    rule            "DEV.md 4c C291 (bubble-pressure pairs; every laboratory, graded by C285)";
    evidence        allLaboratories;   // every block fitted, none held out
    objective       twoStage;
    residual        P_bubble;
    residualScale   relative;   // (P_model - P)/P at each point's stated T
    outlierLimit_pct 20;   // |P_model - P|/P after the least-squares stage
    outliersDropped 0;
    pointsKept      24;
    noBubblePoint   0;
    maxRelError_pct 2.6390;
    meanRelError_pct 1.6101;
    acceptance      graded;   // max relative pressure error over the kept points, DEV.md 4c C285 (C291)
    gradeLimits_pct (5 10 20);   // upper limits of clean / warning / severe; above, refused
    grade           clean;
    oneLiquid       true;   // arm (f) over the validity span; a pair that splits ONE liquid is never promoted
    temperatures    1;   // distinct stated temperatures in the evidence
    laboratories    1;   // distinct articles in the evidence
    singleTemperature true;   // true: b/T was fitted at ONE temperature
    singleLaboratory  true;   // true: ONE laboratory's data, nothing to cross-check it
    verdict         accepted;
}
`,de=`/*---------------------------------------------------------------------------*\\
  NRTL binary interaction parameters --- 1Pentanol(i) + nNonane(j)

  REGRESSED BY CHOUPO'S CURATION PIPELINE (bin/choupo-curate, DEV.md 4c C282;
  record docs/design/binary-pairs-from-open-measurements.md) to measured
  bubble temperatures.  The articles named under \`evidence\` are the
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
  its fitting pipeline (every laboratory fitted, outliers beyond 3 K
  discarded by name, max |T_model - T| over the kept points GRADED
  clean / warning / severe at 1 / 2 / 4 K -- DEV.md 4c C283
  amended, C285, C286; THIS fit: severe, 2.1216 K; one liquid
  across its validity span), and NO HUMAN HAS REVIEWED IT.  The
  engine says so on every run that reads it, and voices a warning
  or a severe grade beside it.
  Nothing was held out: the \`validation {}\` block says so, and the
  acceptance is the \`curation {}\` block.  A curator who reads the series
  back against the articles marks it \`reviewStatus reviewed; humanReviewed
  true;\`.  Revert with \`bin/choupo-curate revert 1Pentanol-nNonane\`.

  REPRODUCE: run tutorials/props/curation/curate108_nrtl_1Pentanol_nNonane (after \`bin/choupo-curate fetch\` on it); its fit
  writes 1Pentanol-nNonane.proposal.dat, which bin/curate/check_regressed_pairs.py holds
  equal to this record.
\\*---------------------------------------------------------------------------*/

recordType binaryInteractionParameters;
schemaVersion 1;

pair { i 1Pentanol; j nNonane; }

components  ( 1Pentanol  nNonane );
model       NRTL;

parameters
{
    i           1Pentanol;
    j           nNonane;
    a_ij        0.00000000;
    b_ij        261.35793789;
    a_ji        0.00000000;
    b_ji        282.73402567;
    alpha       0.30000000;
}

provenance
{
    origin        fitted;
    method        "fitParameters(T_bubble), Levenberg-Marquardt";
    methodVersion "choupoProps Choupo-dev";
    fittedInCase  "tutorials/props/curation/curate108_nrtl_1Pentanol_nNonane";
    reviewStatus  autoPromoted;
    humanReviewed false;
    fitGrade      severe;   // DEV.md 4c C285 (C286): max |T_model - T| over the kept points, graded 1 / 2 / 4 K
    fitGradeMaxTemperatureError_K 2.1216;
    promotedBy    "bin/choupo-curate pair --promote";
    promotedDate  "2026-11-10";
    reviewReason  "regressed by bin/choupo-curate from archive-transcribed measurements; not yet read back against the articles";
    reuse         "Choupo's own regression; the measured points belong to the cited articles and are not reproduced in this record or this tree";
    fitDate       "2026-11-10";

    evidence
    (
        {
            role      fit;
            dataset   "constant/archiveExtracts/1Pentanol-nNonane-bubble-acs.jced.8b00680.dat";
            doi       "10.1021/acs.jced.8b00680";
            sha256    "24e5d0a547f0ece199cef88e38a33059d446a79066ec16e532dde61242113b94";
            provenance measured;
            archiveFile "acs.jced.8b00680.xml";
            system    "1Pentanol + nNonane";
            pressure  "40000.000000 Pa";
        }
        {
            role      fit;
            dataset   "constant/archiveExtracts/1Pentanol-nNonane-bubble-je0502905.dat";
            doi       "10.1021/je0502905";
            sha256    "e0f66d8a57bd22c3405c111e448b7e3752f0731d0f6cc122669b916fe93ac206";
            provenance measured;
            archiveFile "je0502905.xml";
            system    "1Pentanol + nNonane";
        }
        {
            role      fit;
            dataset   "constant/archiveExtracts/1Pentanol-nNonane-bubble-je060237w.dat";
            doi       "10.1021/je060237w";
            sha256    "4080a9f392ed4ae1e0490702cfa32bae591f933e126e9704a5aec21edf9b01f1";
            provenance measured;
            archiveFile "je060237w.xml";
            system    "1Pentanol + nNonane";
            pressure  "101320.000000 Pa";
        }
    );
    fingerprint "ddefd34b623e7be0";   // of the declaration, frozen before the fit

    //  IN-SAMPLE: the model reproducing the very points it was
    //  fitted to.  It is NOT a validation; see the block below.
    weighting     uncertainty;   // chi2 is sum ((T_model - T_exp)/U)^2, dimensionless
    chi2          202.22211373;
    rms_K         0.94369673;
    nDataPoints   75;
    identifiable  true;
    maxAbsCorr    0.98908264;

    validity
    {
        temperature { min 368.52 K; max 412.69 K; }
        pressure    { min 26660 Pa; max 101320 Pa; }
        note        "the span of the FIT evidence; outside it the pair is an extrapolation";
    }
}

validation
{
    verdict     validationRefused;

    heldOut     none;   // every declared dataset carried \`role fit\`

    acceptance  none;   // no band was declared before the fit, so no
                        // pass/fail may be read out of the residual above
}

curation
{
    rule            "DEV.md 4c C283 (amended) + C284, graded by C285 (C286)";
    evidence        allLaboratories;   // every study fitted, none held out
    objective       twoStage;
    outlierLimit    3 K;   // |T_model - T| after the least-squares stage
    outliersDropped 0;
    pointsKept      75;
    noBubblePoint   0;
    maxAbsError     2.1216 K;
    meanAbsError    0.7545 K;
    acceptance      graded;   // max |T_model - T| over the kept points, DEV.md 4c C285 (C286)
    gradeLimits_K   (1 2 4);   // upper limits of clean / warning / severe; above, refused
    grade           severe;
    oneLiquid       true;   // arm (f) over the validity span; a pair that splits ONE liquid is never promoted, whatever its grade
    verdict         accepted;
}
`,ce=`/*---------------------------------------------------------------------------*\\
  NRTL binary interaction parameters --- 1Pentanol(i) + toluene(j)

  REGRESSED BY CHOUPO'S CURATION PIPELINE (bin/choupo-curate, DEV.md 4c C282;
  record docs/design/binary-pairs-from-open-measurements.md) to measured
  bubble PRESSURES at stated temperatures (P-x, DEV.md 4c C291).  The articles named under \`evidence\` are the
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
  its fitting pipeline (every laboratory fitted to the bubble pressure, outliers beyond
  20 % discarded by name, max |P_model - P|/P over the kept points GRADED
  clean / warning / severe at 5 / 10 / 20 % -- DEV.md 4c C283 amended, C285, C291;
  THIS fit: clean, 1.9967 %; one liquid across its validity span), and NO
  HUMAN HAS REVIEWED IT.  The engine says so on every run that reads it, and
  voices a warning or a severe grade beside it.
  CAUTION: this record rests on ONE temperature and ONE laboratory.
  Nothing was held out: the \`validation {}\` block says so, and the acceptance
  is the \`curation {}\` block.  A curator who reads the series back against the
  articles marks it \`reviewStatus reviewed; humanReviewed true;\`.  Revert with
  \`bin/choupo-curate revert 1Pentanol-toluene\`.

  REPRODUCE: run tutorials/props/curation/curate529_nrtl_1Pentanol_toluene (after \`bin/choupo-curate fetch\` on it); its fit
  writes 1Pentanol-toluene.proposal.dat, which bin/curate/check_regressed_pairs.py holds
  equal to this record.
\\*---------------------------------------------------------------------------*/

recordType binaryInteractionParameters;
schemaVersion 1;

pair { i 1Pentanol; j toluene; }

components  ( 1Pentanol  toluene );
model       NRTL;

parameters
{
    i           1Pentanol;
    j           toluene;
    a_ij        0.00000000;
    b_ij        -57.17467104;
    a_ji        0.00000000;
    b_ji        634.32301156;
    alpha       0.30000000;
}

provenance
{
    origin        fitted;
    method        "fitParameters(P_bubble), Levenberg-Marquardt";
    methodVersion "choupoProps Choupo-dev";
    fittedInCase  "tutorials/props/curation/curate529_nrtl_1Pentanol_toluene";
    reviewStatus  autoPromoted;
    humanReviewed false;
    fitGrade      clean;   // DEV.md 4c C285 (C291): max |P_model - P|/P over the kept points, graded 5 / 10 / 20 %
    fitGradeMaxRelativeError_pct 1.9967;
    promotedBy    "bin/curate/pairs_px.py promote";
    promotedDate  "2026-11-10";
    reviewReason  "regressed by bin/choupo-curate from archive-transcribed measurements; not yet read back against the articles";
    reuse         "Choupo's own regression; the measured points belong to the cited articles and are not reproduced in this record or this tree";
    fitDate       "2026-11-10";

    evidence
    (
        {
            role      fit;
            dataset   "constant/archiveExtracts/1Pentanol-toluene-bubbleP-j.fluid.2012.01.007-b3.dat";
            doi       "10.1016/j.fluid.2012.01.007";
            sha256    "bb4607d50418aedd060930c3ec15f72df01529360c9e458c4bd0ec24cf61471f";
            provenance measured;
            archiveFile "j.fluid.2012.01.007.xml";
            system    "1Pentanol + toluene";
        }
    );
    fingerprint "7df747a7943b5ae5";   // of the declaration, frozen before the fit

    //  IN-SAMPLE: the model reproducing the very points it was
    //  fitted to.  It is NOT a validation; see the block below.
    weighting     equal;   // chi2 is sum ((P_model - P_exp)/P_exp)^2, dimensionless
    chi2          0.00400878;
    rms_rel       0.01292411;
    nDataPoints   24;
    identifiable  true;
    maxAbsCorr    0.94031795;

    validity
    {
        temperature { min 313.15 K; max 313.15 K; }
        pressure    { min 1917 Pa; max 7789 Pa; }
        note        "the span of the FIT evidence; outside it the pair is an extrapolation";
    }
}

validation
{
    verdict     validationRefused;

    heldOut     none;   // every declared dataset carried \`role fit\`

    acceptance  none;   // no band was declared before the fit, so no
                        // pass/fail may be read out of the residual above
}

curation
{
    rule            "DEV.md 4c C291 (bubble-pressure pairs; every laboratory, graded by C285)";
    evidence        allLaboratories;   // every block fitted, none held out
    objective       twoStage;
    residual        P_bubble;
    residualScale   relative;   // (P_model - P)/P at each point's stated T
    outlierLimit_pct 20;   // |P_model - P|/P after the least-squares stage
    outliersDropped 0;
    pointsKept      24;
    noBubblePoint   0;
    maxRelError_pct 1.9967;
    meanRelError_pct 1.1029;
    acceptance      graded;   // max relative pressure error over the kept points, DEV.md 4c C285 (C291)
    gradeLimits_pct (5 10 20);   // upper limits of clean / warning / severe; above, refused
    grade           clean;
    oneLiquid       true;   // arm (f) over the validity span; a pair that splits ONE liquid is never promoted
    temperatures    1;   // distinct stated temperatures in the evidence
    laboratories    1;   // distinct articles in the evidence
    singleTemperature true;   // true: b/T was fitted at ONE temperature
    singleLaboratory  true;   // true: ONE laboratory's data, nothing to cross-check it
    verdict         accepted;
}
`,le=`/*---------------------------------------------------------------------------*\\
  NRTL binary interaction parameters --- 1Propanol(i) + 224Trimethylpentane(j)

  REGRESSED BY CHOUPO'S CURATION PIPELINE (bin/choupo-curate, DEV.md 4c C282;
  record docs/design/binary-pairs-from-open-measurements.md) to measured
  bubble PRESSURES at stated temperatures (P-x, DEV.md 4c C291).  The articles named under \`evidence\` are the
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
  its fitting pipeline (every laboratory fitted to the bubble pressure, outliers beyond
  20 % discarded by name, max |P_model - P|/P over the kept points GRADED
  clean / warning / severe at 5 / 10 / 20 % -- DEV.md 4c C283 amended, C285, C291;
  THIS fit: clean, 2.4131 %; one liquid across its validity span), and NO
  HUMAN HAS REVIEWED IT.  The engine says so on every run that reads it, and
  voices a warning or a severe grade beside it.
  CAUTION: this record rests on ONE temperature and ONE laboratory.
  Nothing was held out: the \`validation {}\` block says so, and the acceptance
  is the \`curation {}\` block.  A curator who reads the series back against the
  articles marks it \`reviewStatus reviewed; humanReviewed true;\`.  Revert with
  \`bin/choupo-curate revert 1Propanol-224Trimethylpentane\`.

  REPRODUCE: run tutorials/props/curation/curate548_nrtl_1Propanol_224Trimethylpentane (after \`bin/choupo-curate fetch\` on it); its fit
  writes 1Propanol-224Trimethylpentane.proposal.dat, which bin/curate/check_regressed_pairs.py holds
  equal to this record.
\\*---------------------------------------------------------------------------*/

recordType binaryInteractionParameters;
schemaVersion 1;

pair { i 1Propanol; j 224Trimethylpentane; }

components  ( 1Propanol  224Trimethylpentane );
model       NRTL;

parameters
{
    i           1Propanol;
    j           224Trimethylpentane;
    a_ij        0.00000000;
    b_ij        299.78849342;
    a_ji        0.00000000;
    b_ji        505.07171630;
    alpha       0.30000000;
}

provenance
{
    origin        fitted;
    method        "fitParameters(P_bubble), Levenberg-Marquardt";
    methodVersion "choupoProps Choupo-dev";
    fittedInCase  "tutorials/props/curation/curate548_nrtl_1Propanol_224Trimethylpentane";
    reviewStatus  autoPromoted;
    humanReviewed false;
    fitGrade      clean;   // DEV.md 4c C285 (C291): max |P_model - P|/P over the kept points, graded 5 / 10 / 20 %
    fitGradeMaxRelativeError_pct 2.4131;
    promotedBy    "bin/curate/pairs_px.py promote";
    promotedDate  "2026-11-10";
    reviewReason  "regressed by bin/choupo-curate from archive-transcribed measurements; not yet read back against the articles";
    reuse         "Choupo's own regression; the measured points belong to the cited articles and are not reproduced in this record or this tree";
    fitDate       "2026-11-10";

    evidence
    (
        {
            role      fit;
            dataset   "constant/archiveExtracts/1Propanol-224Trimethylpentane-bubbleP-je200279q-b6.dat";
            doi       "10.1021/je200279q";
            sha256    "55b99b218f4d48bc2036ebb36b6a030828720cf6f3ae1a190a3a2ad084b18b73";
            provenance measured;
            archiveFile "je200279q.xml";
            system    "1Propanol + 224Trimethylpentane";
        }
    );
    fingerprint "f2954d9611f5876d";   // of the declaration, frozen before the fit

    //  IN-SAMPLE: the model reproducing the very points it was
    //  fitted to.  It is NOT a validation; see the block below.
    weighting     equal;   // chi2 is sum ((P_model - P_exp)/P_exp)^2, dimensionless
    chi2          0.00284528;
    rms_rel       0.01163999;
    nDataPoints   21;
    identifiable  true;
    maxAbsCorr    0.95171075;

    validity
    {
        temperature { min 318.15 K; max 318.15 K; }
        pressure    { min 15470 Pa; max 21130 Pa; }
        note        "the span of the FIT evidence; outside it the pair is an extrapolation";
    }
}

validation
{
    verdict     validationRefused;

    heldOut     none;   // every declared dataset carried \`role fit\`

    acceptance  none;   // no band was declared before the fit, so no
                        // pass/fail may be read out of the residual above
}

curation
{
    rule            "DEV.md 4c C291 (bubble-pressure pairs; every laboratory, graded by C285)";
    evidence        allLaboratories;   // every block fitted, none held out
    objective       twoStage;
    residual        P_bubble;
    residualScale   relative;   // (P_model - P)/P at each point's stated T
    outlierLimit_pct 20;   // |P_model - P|/P after the least-squares stage
    outliersDropped 1;
    pointsKept      21;
    noBubblePoint   0;
    maxRelError_pct 2.4131;
    meanRelError_pct 0.8662;
    acceptance      graded;   // max relative pressure error over the kept points, DEV.md 4c C285 (C291)
    gradeLimits_pct (5 10 20);   // upper limits of clean / warning / severe; above, refused
    grade           clean;
    oneLiquid       true;   // arm (f) over the validity span; a pair that splits ONE liquid is never promoted
    temperatures    1;   // distinct stated temperatures in the evidence
    laboratories    1;   // distinct articles in the evidence
    singleTemperature true;   // true: b/T was fitted at ONE temperature
    singleLaboratory  true;   // true: ONE laboratory's data, nothing to cross-check it
    verdict         accepted;
}
`,ue=`/*---------------------------------------------------------------------------*\\
  NRTL binary interaction parameters --- Dichloroethane(i) + 1Propanol(j)

  REGRESSED BY CHOUPO'S CURATION PIPELINE (bin/choupo-curate, DEV.md 4c C282;
  record docs/design/binary-pairs-from-open-measurements.md) to measured
  bubble PRESSURES at stated temperatures (P-x, DEV.md 4c C291).  The articles named under \`evidence\` are the
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
  its fitting pipeline (every laboratory fitted to the bubble pressure, outliers beyond
  20 % discarded by name, max |P_model - P|/P over the kept points GRADED
  clean / warning / severe at 5 / 10 / 20 % -- DEV.md 4c C283 amended, C285, C291;
  THIS fit: clean, 0.9966 %; one liquid across its validity span), and NO
  HUMAN HAS REVIEWED IT.  The engine says so on every run that reads it, and
  voices a warning or a severe grade beside it.
  CAUTION: this record rests on ONE temperature and ONE laboratory.
  Nothing was held out: the \`validation {}\` block says so, and the acceptance
  is the \`curation {}\` block.  A curator who reads the series back against the
  articles marks it \`reviewStatus reviewed; humanReviewed true;\`.  Revert with
  \`bin/choupo-curate revert 1Propanol-Dichloroethane\`.

  REPRODUCE: run tutorials/props/curation/curate562_nrtl_Dichloroethane_1Propanol (after \`bin/choupo-curate fetch\` on it); its fit
  writes 1Propanol-Dichloroethane.proposal.dat, which bin/curate/check_regressed_pairs.py holds
  equal to this record.
\\*---------------------------------------------------------------------------*/

recordType binaryInteractionParameters;
schemaVersion 1;

pair { i Dichloroethane; j 1Propanol; }

components  ( Dichloroethane  1Propanol );
model       NRTL;

parameters
{
    i           Dichloroethane;
    j           1Propanol;
    a_ij        0.00000000;
    b_ij        569.30423417;
    a_ji        0.00000000;
    b_ji        80.18302315;
    alpha       0.30000000;
}

provenance
{
    origin        fitted;
    method        "fitParameters(P_bubble), Levenberg-Marquardt";
    methodVersion "choupoProps Choupo-dev";
    fittedInCase  "tutorials/props/curation/curate562_nrtl_Dichloroethane_1Propanol";
    reviewStatus  autoPromoted;
    humanReviewed false;
    fitGrade      clean;   // DEV.md 4c C285 (C291): max |P_model - P|/P over the kept points, graded 5 / 10 / 20 %
    fitGradeMaxRelativeError_pct 0.9966;
    promotedBy    "bin/curate/pairs_px.py promote";
    promotedDate  "2026-11-10";
    reviewReason  "regressed by bin/choupo-curate from archive-transcribed measurements; not yet read back against the articles";
    reuse         "Choupo's own regression; the measured points belong to the cited articles and are not reproduced in this record or this tree";
    fitDate       "2026-11-10";

    evidence
    (
        {
            role      fit;
            dataset   "constant/archiveExtracts/Dichloroethane-1Propanol-bubbleP-j.jct.2004.07.012-b9.dat";
            doi       "10.1016/j.jct.2004.07.012";
            sha256    "d655668fb23354b679cc69140855a56ccba1f64dd7e05a4408d4f990dcdb905d";
            provenance measured;
            archiveFile "j.jct.2004.07.012.xml";
            system    "Dichloroethane + 1Propanol";
        }
    );
    fingerprint "fe1d936afdfc51b5";   // of the declaration, frozen before the fit

    //  IN-SAMPLE: the model reproducing the very points it was
    //  fitted to.  It is NOT a validation; see the block below.
    weighting     equal;   // chi2 is sum ((P_model - P_exp)/P_exp)^2, dimensionless
    chi2          0.00058908;
    rms_rel       0.00731795;
    nDataPoints   11;
    identifiable  true;
    maxAbsCorr    0.94620856;

    validity
    {
        temperature { min 313.15 K; max 313.15 K; }
        pressure    { min 12619 Pa; max 22304 Pa; }
        note        "the span of the FIT evidence; outside it the pair is an extrapolation";
    }
}

validation
{
    verdict     validationRefused;

    heldOut     none;   // every declared dataset carried \`role fit\`

    acceptance  none;   // no band was declared before the fit, so no
                        // pass/fail may be read out of the residual above
}

curation
{
    rule            "DEV.md 4c C291 (bubble-pressure pairs; every laboratory, graded by C285)";
    evidence        allLaboratories;   // every block fitted, none held out
    objective       twoStage;
    residual        P_bubble;
    residualScale   relative;   // (P_model - P)/P at each point's stated T
    outlierLimit_pct 20;   // |P_model - P|/P after the least-squares stage
    outliersDropped 0;
    pointsKept      11;
    noBubblePoint   0;
    maxRelError_pct 0.9966;
    meanRelError_pct 0.6578;
    acceptance      graded;   // max relative pressure error over the kept points, DEV.md 4c C285 (C291)
    gradeLimits_pct (5 10 20);   // upper limits of clean / warning / severe; above, refused
    grade           clean;
    oneLiquid       true;   // arm (f) over the validity span; a pair that splits ONE liquid is never promoted
    temperatures    1;   // distinct stated temperatures in the evidence
    laboratories    1;   // distinct articles in the evidence
    singleTemperature true;   // true: b/T was fitted at ONE temperature
    singleLaboratory  true;   // true: ONE laboratory's data, nothing to cross-check it
    verdict         accepted;
}
`,he=`/*---------------------------------------------------------------------------*\\
  NRTL binary interaction parameters --- acetonitrile(i) + 1Propanol(j)

  REGRESSED BY CHOUPO'S CURATION PIPELINE (bin/choupo-curate, DEV.md 4c C282;
  record docs/design/binary-pairs-from-open-measurements.md) to measured
  bubble temperatures.  The articles named under \`evidence\` are the
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
  its fitting pipeline (every laboratory fitted, outliers beyond 3 K
  discarded by name, max |T_model - T| over the kept points GRADED
  clean / warning / severe at 1 / 2 / 4 K -- DEV.md 4c C283
  amended, C285, C286; THIS fit: warning, 1.3204 K; one liquid
  across its validity span), and NO HUMAN HAS REVIEWED IT.  The
  engine says so on every run that reads it, and voices a warning
  or a severe grade beside it.
  Nothing was held out: the \`validation {}\` block says so, and the
  acceptance is the \`curation {}\` block.  A curator who reads the series
  back against the articles marks it \`reviewStatus reviewed; humanReviewed
  true;\`.  Revert with \`bin/choupo-curate revert 1Propanol-acetonitrile\`.

  REPRODUCE: run tutorials/props/curation/curate111_nrtl_acetonitrile_1Propanol (after \`bin/choupo-curate fetch\` on it); its fit
  writes 1Propanol-acetonitrile.proposal.dat, which bin/curate/check_regressed_pairs.py holds
  equal to this record.
\\*---------------------------------------------------------------------------*/

recordType binaryInteractionParameters;
schemaVersion 1;

pair { i acetonitrile; j 1Propanol; }

components  ( acetonitrile  1Propanol );
model       NRTL;

parameters
{
    i           acetonitrile;
    j           1Propanol;
    a_ij        0.00000000;
    b_ij        191.68397918;
    a_ji        0.00000000;
    b_ji        249.33659861;
    alpha       0.30000000;
}

provenance
{
    origin        fitted;
    method        "fitParameters(T_bubble), Levenberg-Marquardt";
    methodVersion "choupoProps Choupo-dev";
    fittedInCase  "tutorials/props/curation/curate111_nrtl_acetonitrile_1Propanol";
    reviewStatus  autoPromoted;
    humanReviewed false;
    fitGrade      warning;   // DEV.md 4c C285 (C286): max |T_model - T| over the kept points, graded 1 / 2 / 4 K
    fitGradeMaxTemperatureError_K 1.3204;
    promotedBy    "bin/choupo-curate pair --promote";
    promotedDate  "2026-11-10";
    reviewReason  "regressed by bin/choupo-curate from archive-transcribed measurements; not yet read back against the articles";
    reuse         "Choupo's own regression; the measured points belong to the cited articles and are not reproduced in this record or this tree";
    fitDate       "2026-11-10";

    evidence
    (
        {
            role      fit;
            dataset   "constant/archiveExtracts/acetonitrile-1Propanol-bubble-je100033s.dat";
            doi       "10.1021/je100033s";
            sha256    "63d0af97a2dfe7caf79d808b7e73911ea1011fdd1db317ad05e24ef2f49d86ae";
            provenance measured;
            archiveFile "je100033s.xml";
            system    "acetonitrile + 1Propanol";
            pressure  "101300.000000 Pa";
        }
        {
            role      fit;
            dataset   "constant/archiveExtracts/acetonitrile-1Propanol-bubble-j.jct.2013.08.011.dat";
            doi       "10.1016/j.jct.2013.08.011";
            sha256    "7e75eb47bc1acd43d33e038fb95c22ce1f360a62f152e49b288ceaa937404a21";
            provenance measured;
            archiveFile "j.jct.2013.08.011.xml";
            system    "acetonitrile + 1Propanol";
            pressure  "101300.000000 Pa";
        }
        {
            role      fit;
            dataset   "constant/archiveExtracts/acetonitrile-1Propanol-bubble-acs.jced.9b00015.dat";
            doi       "10.1021/acs.jced.9b00015";
            sha256    "9d88c47491adc0eb0b078348e4aff7d78fc0abd52fb2d48ef31246072b3d4941";
            provenance measured;
            archiveFile "acs.jced.9b00015.xml";
            system    "acetonitrile + 1Propanol";
            pressure  "101300.000000 Pa";
        }
    );
    fingerprint "e6bfaf3c7d1fa8af";   // of the declaration, frozen before the fit

    //  IN-SAMPLE: the model reproducing the very points it was
    //  fitted to.  It is NOT a validation; see the block below.
    weighting     uncertainty;   // chi2 is sum ((T_model - T_exp)/U)^2, dimensionless
    chi2          223.42483913;
    rms_K         0.42227054;
    nDataPoints   58;
    identifiable  true;
    maxAbsCorr    0.98995975;

    validity
    {
        temperature { min 352.91 K; max 366.05 K; }
        pressure    { min 101300 Pa; max 101300 Pa; }
        note        "the span of the FIT evidence; outside it the pair is an extrapolation";
    }
}

validation
{
    verdict     validationRefused;

    heldOut     none;   // every declared dataset carried \`role fit\`

    acceptance  none;   // no band was declared before the fit, so no
                        // pass/fail may be read out of the residual above
}

curation
{
    rule            "DEV.md 4c C283 (amended) + C284, graded by C285 (C286)";
    evidence        allLaboratories;   // every study fitted, none held out
    objective       twoStage;
    outlierLimit    3 K;   // |T_model - T| after the least-squares stage
    outliersDropped 0;
    pointsKept      58;
    noBubblePoint   0;
    maxAbsError     1.3204 K;
    meanAbsError    0.2833 K;
    acceptance      graded;   // max |T_model - T| over the kept points, DEV.md 4c C285 (C286)
    gradeLimits_K   (1 2 4);   // upper limits of clean / warning / severe; above, refused
    grade           warning;
    oneLiquid       true;   // arm (f) over the validity span; a pair that splits ONE liquid is never promoted, whatever its grade
    verdict         accepted;
}
`,pe=`/*---------------------------------------------------------------------------*\\
  NRTL binary interaction parameters --- benzene(i) + 1Propanol(j)

  REGRESSED BY CHOUPO'S CURATION PIPELINE (bin/choupo-curate, DEV.md 4c C282;
  record docs/design/binary-pairs-from-open-measurements.md) to measured
  bubble PRESSURES at stated temperatures (P-x, DEV.md 4c C291).  The articles named under \`evidence\` are the
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
  its fitting pipeline (every laboratory fitted to the bubble pressure, outliers beyond
  20 % discarded by name, max |P_model - P|/P over the kept points GRADED
  clean / warning / severe at 5 / 10 / 20 % -- DEV.md 4c C283 amended, C285, C291;
  THIS fit: clean, 1.4725 %; one liquid across its validity span), and NO
  HUMAN HAS REVIEWED IT.  The engine says so on every run that reads it, and
  voices a warning or a severe grade beside it.
  CAUTION: this record rests on ONE temperature and ONE laboratory.
  Nothing was held out: the \`validation {}\` block says so, and the acceptance
  is the \`curation {}\` block.  A curator who reads the series back against the
  articles marks it \`reviewStatus reviewed; humanReviewed true;\`.  Revert with
  \`bin/choupo-curate revert 1Propanol-benzene\`.

  REPRODUCE: run tutorials/props/curation/curate530_nrtl_benzene_1Propanol (after \`bin/choupo-curate fetch\` on it); its fit
  writes 1Propanol-benzene.proposal.dat, which bin/curate/check_regressed_pairs.py holds
  equal to this record.
\\*---------------------------------------------------------------------------*/

recordType binaryInteractionParameters;
schemaVersion 1;

pair { i benzene; j 1Propanol; }

components  ( benzene  1Propanol );
model       NRTL;

parameters
{
    i           benzene;
    j           1Propanol;
    a_ij        0.00000000;
    b_ij        563.12645716;
    a_ji        0.00000000;
    b_ji        84.95899754;
    alpha       0.30000000;
}

provenance
{
    origin        fitted;
    method        "fitParameters(P_bubble), Levenberg-Marquardt";
    methodVersion "choupoProps Choupo-dev";
    fittedInCase  "tutorials/props/curation/curate530_nrtl_benzene_1Propanol";
    reviewStatus  autoPromoted;
    humanReviewed false;
    fitGrade      clean;   // DEV.md 4c C285 (C291): max |P_model - P|/P over the kept points, graded 5 / 10 / 20 %
    fitGradeMaxRelativeError_pct 1.4725;
    promotedBy    "bin/curate/pairs_px.py promote";
    promotedDate  "2026-11-10";
    reviewReason  "regressed by bin/choupo-curate from archive-transcribed measurements; not yet read back against the articles";
    reuse         "Choupo's own regression; the measured points belong to the cited articles and are not reproduced in this record or this tree";
    fitDate       "2026-11-10";

    evidence
    (
        {
            role      fit;
            dataset   "constant/archiveExtracts/benzene-1Propanol-bubbleP-j.fluid.2005.11.014-b4.dat";
            doi       "10.1016/j.fluid.2005.11.014";
            sha256    "53353a15c05af54b0c02000f5ec5341942b11fcd2549f51cdb888dbb1aae3b79";
            provenance measured;
            archiveFile "j.fluid.2005.11.014.xml";
            system    "benzene + 1Propanol";
        }
    );
    fingerprint "aa0bfd5f8da1dd51";   // of the declaration, frozen before the fit

    //  IN-SAMPLE: the model reproducing the very points it was
    //  fitted to.  It is NOT a validation; see the block below.
    weighting     equal;   // chi2 is sum ((P_model - P_exp)/P_exp)^2, dimensionless
    chi2          0.00275226;
    rms_rel       0.01070876;
    nDataPoints   24;
    identifiable  true;
    maxAbsCorr    0.94625101;

    validity
    {
        temperature { min 313.15 K; max 313.15 K; }
        pressure    { min 10778 Pa; max 25910 Pa; }
        note        "the span of the FIT evidence; outside it the pair is an extrapolation";
    }
}

validation
{
    verdict     validationRefused;

    heldOut     none;   // every declared dataset carried \`role fit\`

    acceptance  none;   // no band was declared before the fit, so no
                        // pass/fail may be read out of the residual above
}

curation
{
    rule            "DEV.md 4c C291 (bubble-pressure pairs; every laboratory, graded by C285)";
    evidence        allLaboratories;   // every block fitted, none held out
    objective       twoStage;
    residual        P_bubble;
    residualScale   relative;   // (P_model - P)/P at each point's stated T
    outlierLimit_pct 20;   // |P_model - P|/P after the least-squares stage
    outliersDropped 0;
    pointsKept      24;
    noBubblePoint   0;
    maxRelError_pct 1.4725;
    meanRelError_pct 0.9638;
    acceptance      graded;   // max relative pressure error over the kept points, DEV.md 4c C285 (C291)
    gradeLimits_pct (5 10 20);   // upper limits of clean / warning / severe; above, refused
    grade           clean;
    oneLiquid       true;   // arm (f) over the validity span; a pair that splits ONE liquid is never promoted
    temperatures    1;   // distinct stated temperatures in the evidence
    laboratories    1;   // distinct articles in the evidence
    singleTemperature true;   // true: b/T was fitted at ONE temperature
    singleLaboratory  true;   // true: ONE laboratory's data, nothing to cross-check it
    verdict         accepted;
}
`,me=`/*---------------------------------------------------------------------------*\\
  NRTL binary interaction parameters --- diethylSulfide(i) + 1Propanol(j)

  REGRESSED BY CHOUPO'S CURATION PIPELINE (bin/choupo-curate, DEV.md 4c C282;
  record docs/design/binary-pairs-from-open-measurements.md) to measured
  bubble PRESSURES at stated temperatures (P-x, DEV.md 4c C291).  The articles named under \`evidence\` are the
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
  its fitting pipeline (every laboratory fitted to the bubble pressure, outliers beyond
  20 % discarded by name, max |P_model - P|/P over the kept points GRADED
  clean / warning / severe at 5 / 10 / 20 % -- DEV.md 4c C283 amended, C285, C291;
  THIS fit: clean, 0.3180 %; one liquid across its validity span), and NO
  HUMAN HAS REVIEWED IT.  The engine says so on every run that reads it, and
  voices a warning or a severe grade beside it.
  CAUTION: this record rests on ONE temperature and ONE laboratory.
  Nothing was held out: the \`validation {}\` block says so, and the acceptance
  is the \`curation {}\` block.  A curator who reads the series back against the
  articles marks it \`reviewStatus reviewed; humanReviewed true;\`.  Revert with
  \`bin/choupo-curate revert 1Propanol-diethylSulfide\`.

  REPRODUCE: run tutorials/props/curation/curate563_nrtl_diethylSulfide_1Propanol (after \`bin/choupo-curate fetch\` on it); its fit
  writes 1Propanol-diethylSulfide.proposal.dat, which bin/curate/check_regressed_pairs.py holds
  equal to this record.
\\*---------------------------------------------------------------------------*/

recordType binaryInteractionParameters;
schemaVersion 1;

pair { i diethylSulfide; j 1Propanol; }

components  ( diethylSulfide  1Propanol );
model       NRTL;

parameters
{
    i           diethylSulfide;
    j           1Propanol;
    a_ij        0.00000000;
    b_ij        262.02134082;
    a_ji        0.00000000;
    b_ji        171.48816118;
    alpha       0.30000000;
}

provenance
{
    origin        fitted;
    method        "fitParameters(P_bubble), Levenberg-Marquardt";
    methodVersion "choupoProps Choupo-dev";
    fittedInCase  "tutorials/props/curation/curate563_nrtl_diethylSulfide_1Propanol";
    reviewStatus  autoPromoted;
    humanReviewed false;
    fitGrade      clean;   // DEV.md 4c C285 (C291): max |P_model - P|/P over the kept points, graded 5 / 10 / 20 %
    fitGradeMaxRelativeError_pct 0.3180;
    promotedBy    "bin/curate/pairs_px.py promote";
    promotedDate  "2026-11-10";
    reviewReason  "regressed by bin/choupo-curate from archive-transcribed measurements; not yet read back against the articles";
    reuse         "Choupo's own regression; the measured points belong to the cited articles and are not reproduced in this record or this tree";
    fitDate       "2026-11-10";

    evidence
    (
        {
            role      fit;
            dataset   "constant/archiveExtracts/diethylSulfide-1Propanol-bubbleP-j.fluid.2010.11.026-b9.dat";
            doi       "10.1016/j.fluid.2010.11.026";
            sha256    "eb52ee2098f75e25e57b87634501a20a630bb76b623e66c3b284e8e8e0dcabb2";
            provenance measured;
            archiveFile "j.fluid.2010.11.026.xml";
            system    "diethylSulfide + 1Propanol";
        }
    );
    fingerprint "ca23d63a0fc2a2b4";   // of the declaration, frozen before the fit

    //  IN-SAMPLE: the model reproducing the very points it was
    //  fitted to.  It is NOT a validation; see the block below.
    weighting     equal;   // chi2 is sum ((P_model - P_exp)/P_exp)^2, dimensionless
    chi2          0.00005817;
    rms_rel       0.00229962;
    nDataPoints   11;
    identifiable  true;
    maxAbsCorr    0.98670898;

    validity
    {
        temperature { min 358.15 K; max 358.15 K; }
        pressure    { min 65900 Pa; max 96700 Pa; }
        note        "the span of the FIT evidence; outside it the pair is an extrapolation";
    }
}

validation
{
    verdict     validationRefused;

    heldOut     none;   // every declared dataset carried \`role fit\`

    acceptance  none;   // no band was declared before the fit, so no
                        // pass/fail may be read out of the residual above
}

curation
{
    rule            "DEV.md 4c C291 (bubble-pressure pairs; every laboratory, graded by C285)";
    evidence        allLaboratories;   // every block fitted, none held out
    objective       twoStage;
    residual        P_bubble;
    residualScale   relative;   // (P_model - P)/P at each point's stated T
    outlierLimit_pct 20;   // |P_model - P|/P after the least-squares stage
    outliersDropped 0;
    pointsKept      11;
    noBubblePoint   0;
    maxRelError_pct 0.3180;
    meanRelError_pct 0.2096;
    acceptance      graded;   // max relative pressure error over the kept points, DEV.md 4c C285 (C291)
    gradeLimits_pct (5 10 20);   // upper limits of clean / warning / severe; above, refused
    grade           clean;
    oneLiquid       true;   // arm (f) over the validity span; a pair that splits ONE liquid is never promoted
    temperatures    1;   // distinct stated temperatures in the evidence
    laboratories    1;   // distinct articles in the evidence
    singleTemperature true;   // true: b/T was fitted at ONE temperature
    singleLaboratory  true;   // true: ONE laboratory's data, nothing to cross-check it
    verdict         accepted;
}
`,be=`/*---------------------------------------------------------------------------*\\
  NRTL binary interaction parameters --- diisopropylEther(i) + 1Propanol(j)

  REGRESSED BY CHOUPO'S CURATION PIPELINE (bin/choupo-curate, DEV.md 4c C282;
  record docs/design/binary-pairs-from-open-measurements.md) to measured
  bubble PRESSURES at stated temperatures (P-x, DEV.md 4c C291).  The articles named under \`evidence\` are the
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
  its fitting pipeline (every laboratory fitted to the bubble pressure, outliers beyond
  20 % discarded by name, max |P_model - P|/P over the kept points GRADED
  clean / warning / severe at 5 / 10 / 20 % -- DEV.md 4c C283 amended, C285, C291;
  THIS fit: clean, 0.5284 %; one liquid across its validity span), and NO
  HUMAN HAS REVIEWED IT.  The engine says so on every run that reads it, and
  voices a warning or a severe grade beside it.
  CAUTION: this record rests on ONE temperature and ONE laboratory.
  Nothing was held out: the \`validation {}\` block says so, and the acceptance
  is the \`curation {}\` block.  A curator who reads the series back against the
  articles marks it \`reviewStatus reviewed; humanReviewed true;\`.  Revert with
  \`bin/choupo-curate revert 1Propanol-diisopropylEther\`.

  REPRODUCE: run tutorials/props/curation/curate549_nrtl_diisopropylEther_1Propanol (after \`bin/choupo-curate fetch\` on it); its fit
  writes 1Propanol-diisopropylEther.proposal.dat, which bin/curate/check_regressed_pairs.py holds
  equal to this record.
\\*---------------------------------------------------------------------------*/

recordType binaryInteractionParameters;
schemaVersion 1;

pair { i diisopropylEther; j 1Propanol; }

components  ( diisopropylEther  1Propanol );
model       NRTL;

parameters
{
    i           diisopropylEther;
    j           1Propanol;
    a_ij        0.00000000;
    b_ij        275.69366582;
    a_ji        0.00000000;
    b_ji        109.27732333;
    alpha       0.30000000;
}

provenance
{
    origin        fitted;
    method        "fitParameters(P_bubble), Levenberg-Marquardt";
    methodVersion "choupoProps Choupo-dev";
    fittedInCase  "tutorials/props/curation/curate549_nrtl_diisopropylEther_1Propanol";
    reviewStatus  autoPromoted;
    humanReviewed false;
    fitGrade      clean;   // DEV.md 4c C285 (C291): max |P_model - P|/P over the kept points, graded 5 / 10 / 20 %
    fitGradeMaxRelativeError_pct 0.5284;
    promotedBy    "bin/curate/pairs_px.py promote";
    promotedDate  "2026-11-10";
    reviewReason  "regressed by bin/choupo-curate from archive-transcribed measurements; not yet read back against the articles";
    reuse         "Choupo's own regression; the measured points belong to the cited articles and are not reproduced in this record or this tree";
    fitDate       "2026-11-10";

    evidence
    (
        {
            role      fit;
            dataset   "constant/archiveExtracts/diisopropylEther-1Propanol-bubbleP-j.fluid.2005.11.014-b3.dat";
            doi       "10.1016/j.fluid.2005.11.014";
            sha256    "53353a15c05af54b0c02000f5ec5341942b11fcd2549f51cdb888dbb1aae3b79";
            provenance measured;
            archiveFile "j.fluid.2005.11.014.xml";
            system    "diisopropylEther + 1Propanol";
        }
    );
    fingerprint "57499844fa366f8f";   // of the declaration, frozen before the fit

    //  IN-SAMPLE: the model reproducing the very points it was
    //  fitted to.  It is NOT a validation; see the block below.
    weighting     equal;   // chi2 is sum ((P_model - P_exp)/P_exp)^2, dimensionless
    chi2          0.00027991;
    rms_rel       0.00356697;
    nDataPoints   22;
    identifiable  true;
    maxAbsCorr    0.98112624;

    validity
    {
        temperature { min 313.15 K; max 313.15 K; }
        pressure    { min 11275 Pa; max 36540 Pa; }
        note        "the span of the FIT evidence; outside it the pair is an extrapolation";
    }
}

validation
{
    verdict     validationRefused;

    heldOut     none;   // every declared dataset carried \`role fit\`

    acceptance  none;   // no band was declared before the fit, so no
                        // pass/fail may be read out of the residual above
}

curation
{
    rule            "DEV.md 4c C291 (bubble-pressure pairs; every laboratory, graded by C285)";
    evidence        allLaboratories;   // every block fitted, none held out
    objective       twoStage;
    residual        P_bubble;
    residualScale   relative;   // (P_model - P)/P at each point's stated T
    outlierLimit_pct 20;   // |P_model - P|/P after the least-squares stage
    outliersDropped 0;
    pointsKept      22;
    noBubblePoint   0;
    maxRelError_pct 0.5284;
    meanRelError_pct 0.3164;
    acceptance      graded;   // max relative pressure error over the kept points, DEV.md 4c C285 (C291)
    gradeLimits_pct (5 10 20);   // upper limits of clean / warning / severe; above, refused
    grade           clean;
    oneLiquid       true;   // arm (f) over the validity span; a pair that splits ONE liquid is never promoted
    temperatures    1;   // distinct stated temperatures in the evidence
    laboratories    1;   // distinct articles in the evidence
    singleTemperature true;   // true: b/T was fitted at ONE temperature
    singleLaboratory  true;   // true: ONE laboratory's data, nothing to cross-check it
    verdict         accepted;
}
`,ve=`/*---------------------------------------------------------------------------*\\
  NRTL binary interaction parameters --- 1Propanol(i) + dimethylCarbonate(j)

  REGRESSED BY CHOUPO'S CURATION PIPELINE (bin/choupo-curate, DEV.md 4c C282;
  record docs/design/binary-pairs-from-open-measurements.md) to measured
  bubble temperatures.  The articles named under \`evidence\` are the
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
  its fitting pipeline (every laboratory fitted, outliers beyond 3 K
  discarded by name, max |T_model - T| over the kept points GRADED
  clean / warning / severe at 1 / 2 / 4 K -- DEV.md 4c C283
  amended, C285, C286; THIS fit: warning, 1.9546 K; one liquid
  across its validity span), and NO HUMAN HAS REVIEWED IT.  The
  engine says so on every run that reads it, and voices a warning
  or a severe grade beside it.
  Nothing was held out: the \`validation {}\` block says so, and the
  acceptance is the \`curation {}\` block.  A curator who reads the series
  back against the articles marks it \`reviewStatus reviewed; humanReviewed
  true;\`.  Revert with \`bin/choupo-curate revert 1Propanol-dimethylCarbonate\`.

  REPRODUCE: run tutorials/props/curation/curate119_nrtl_1Propanol_dimethylCarbonate (after \`bin/choupo-curate fetch\` on it); its fit
  writes 1Propanol-dimethylCarbonate.proposal.dat, which bin/curate/check_regressed_pairs.py holds
  equal to this record.
\\*---------------------------------------------------------------------------*/

recordType binaryInteractionParameters;
schemaVersion 1;

pair { i 1Propanol; j dimethylCarbonate; }

components  ( 1Propanol  dimethylCarbonate );
model       NRTL;

parameters
{
    i           1Propanol;
    j           dimethylCarbonate;
    a_ij        0.00000000;
    b_ij        240.63711180;
    a_ji        0.00000000;
    b_ji        163.87630107;
    alpha       0.30000000;
}

provenance
{
    origin        fitted;
    method        "fitParameters(T_bubble), Levenberg-Marquardt";
    methodVersion "choupoProps Choupo-dev";
    fittedInCase  "tutorials/props/curation/curate119_nrtl_1Propanol_dimethylCarbonate";
    reviewStatus  autoPromoted;
    humanReviewed false;
    fitGrade      warning;   // DEV.md 4c C285 (C286): max |T_model - T| over the kept points, graded 1 / 2 / 4 K
    fitGradeMaxTemperatureError_K 1.9546;
    promotedBy    "bin/choupo-curate pair --promote";
    promotedDate  "2026-11-10";
    reviewReason  "regressed by bin/choupo-curate from archive-transcribed measurements; not yet read back against the articles";
    reuse         "Choupo's own regression; the measured points belong to the cited articles and are not reproduced in this record or this tree";
    fitDate       "2026-11-10";

    evidence
    (
        {
            role      fit;
            dataset   "constant/archiveExtracts/1Propanol-dimethylCarbonate-bubble-j.jct.2011.08.006.dat";
            doi       "10.1016/j.jct.2011.08.006";
            sha256    "682a55d05fe8902bbf42f1d947981fa35b0d90029fa727758bcfb6519f239cc6";
            provenance measured;
            archiveFile "j.jct.2011.08.006.xml";
            system    "1Propanol + dimethylCarbonate";
        }
        {
            role      fit;
            dataset   "constant/archiveExtracts/1Propanol-dimethylCarbonate-bubble-je030131q.dat";
            doi       "10.1021/je030131q";
            sha256    "b41bca23136ec66aba1b6984f5c0f44a5fca02ba9d89bed1e374a726fb032c08";
            provenance measured;
            archiveFile "je030131q.xml";
            system    "1Propanol + dimethylCarbonate";
            pressure  "95800.000000 Pa";
        }
    );
    fingerprint "27c97b2ac62eb05e";   // of the declaration, frozen before the fit

    //  IN-SAMPLE: the model reproducing the very points it was
    //  fitted to.  It is NOT a validation; see the block below.
    weighting     uncertainty;   // chi2 is sum ((T_model - T_exp)/U)^2, dimensionless
    chi2          740.74156869;
    rms_K         0.57210117;
    nDataPoints   84;
    identifiable  true;
    maxAbsCorr    0.99192301;

    validity
    {
        temperature { min 334.45 K; max 364.05 K; }
        pressure    { min 40000 Pa; max 95800 Pa; }
        note        "the span of the FIT evidence; outside it the pair is an extrapolation";
    }
}

validation
{
    verdict     validationRefused;

    heldOut     none;   // every declared dataset carried \`role fit\`

    acceptance  none;   // no band was declared before the fit, so no
                        // pass/fail may be read out of the residual above
}

curation
{
    rule            "DEV.md 4c C283 (amended) + C284, graded by C285 (C286)";
    evidence        allLaboratories;   // every study fitted, none held out
    objective       twoStage;
    outlierLimit    3 K;   // |T_model - T| after the least-squares stage
    outliersDropped 0;
    pointsKept      84;
    noBubblePoint   0;
    maxAbsError     1.9546 K;
    meanAbsError    0.3769 K;
    acceptance      graded;   // max |T_model - T| over the kept points, DEV.md 4c C285 (C286)
    gradeLimits_K   (1 2 4);   // upper limits of clean / warning / severe; above, refused
    grade           warning;
    oneLiquid       true;   // arm (f) over the validity span; a pair that splits ONE liquid is never promoted, whatever its grade
    verdict         accepted;
}
`,fe=`/*---------------------------------------------------------------------------*\\
  NRTL binary interaction parameters --- 1Propanol(i) + propionicAcid(j)

  REGRESSED BY CHOUPO'S CURATION PIPELINE (bin/choupo-curate, DEV.md 4c C282;
  record docs/design/binary-pairs-from-open-measurements.md) to measured
  bubble temperatures.  The articles named under \`evidence\` are the
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
  its fitting pipeline (every laboratory fitted, outliers beyond 3 K
  discarded by name, max |T_model - T| over the kept points GRADED
  clean / warning / severe at 1 / 2 / 4 K -- DEV.md 4c C283
  amended, C285, C286; THIS fit: severe, 2.9158 K; one liquid
  across its validity span), and NO HUMAN HAS REVIEWED IT.  The
  engine says so on every run that reads it, and voices a warning
  or a severe grade beside it.
  Nothing was held out: the \`validation {}\` block says so, and the
  acceptance is the \`curation {}\` block.  A curator who reads the series
  back against the articles marks it \`reviewStatus reviewed; humanReviewed
  true;\`.  Revert with \`bin/choupo-curate revert 1Propanol-propionicAcid\`.

  REPRODUCE: run tutorials/props/curation/curate132_nrtl_1Propanol_propionicAcid (after \`bin/choupo-curate fetch\` on it); its fit
  writes 1Propanol-propionicAcid.proposal.dat, which bin/curate/check_regressed_pairs.py holds
  equal to this record.
\\*---------------------------------------------------------------------------*/

recordType binaryInteractionParameters;
schemaVersion 1;

pair { i 1Propanol; j propionicAcid; }

components  ( 1Propanol  propionicAcid );
model       NRTL;

parameters
{
    i           1Propanol;
    j           propionicAcid;
    a_ij        0.00000000;
    b_ij        -384.77274357;
    a_ji        0.00000000;
    b_ji        632.43369032;
    alpha       0.30000000;
}

provenance
{
    origin        fitted;
    method        "fitParameters(T_bubble), Levenberg-Marquardt";
    methodVersion "choupoProps Choupo-dev";
    fittedInCase  "tutorials/props/curation/curate132_nrtl_1Propanol_propionicAcid";
    reviewStatus  autoPromoted;
    humanReviewed false;
    fitGrade      severe;   // DEV.md 4c C285 (C286): max |T_model - T| over the kept points, graded 1 / 2 / 4 K
    fitGradeMaxTemperatureError_K 2.9158;
    promotedBy    "bin/choupo-curate pair --promote";
    promotedDate  "2026-11-10";
    reviewReason  "regressed by bin/choupo-curate from archive-transcribed measurements; not yet read back against the articles";
    reuse         "Choupo's own regression; the measured points belong to the cited articles and are not reproduced in this record or this tree";
    fitDate       "2026-11-10";

    evidence
    (
        {
            role      fit;
            dataset   "constant/archiveExtracts/1Propanol-propionicAcid-bubble-je100912t.dat";
            doi       "10.1021/je100912t";
            sha256    "9dd0d7c46ce840db7866a192b89ba927de74d3c18a20ff4b5353030aafa66d1b";
            provenance measured;
            archiveFile "je100912t.xml";
            system    "1Propanol + propionicAcid";
            pressure  "101325.000000 Pa";
        }
        {
            role      fit;
            dataset   "constant/archiveExtracts/1Propanol-propionicAcid-bubble-je101302p.dat";
            doi       "10.1021/je101302p";
            sha256    "bdc86ef24b356f9bfdd0ea861f4f3c7cabdceddf281b88c512e7e37c3758e967";
            provenance measured;
            archiveFile "je101302p.xml";
            system    "1Propanol + propionicAcid";
            pressure  "101300.000000 Pa";
        }
    );
    fingerprint "b5b29d5ad8bba770";   // of the declaration, frozen before the fit

    //  IN-SAMPLE: the model reproducing the very points it was
    //  fitted to.  It is NOT a validation; see the block below.
    weighting     uncertainty;   // chi2 is sum ((T_model - T_exp)/U)^2, dimensionless
    chi2          131.37785174;
    rms_K         0.89317714;
    nDataPoints   42;
    identifiable  true;
    maxAbsCorr    0.98472064;

    validity
    {
        temperature { min 371.27 K; max 413.55 K; }
        pressure    { min 101300 Pa; max 101325 Pa; }
        note        "the span of the FIT evidence; outside it the pair is an extrapolation";
    }
}

validation
{
    verdict     validationRefused;

    heldOut     none;   // every declared dataset carried \`role fit\`

    acceptance  none;   // no band was declared before the fit, so no
                        // pass/fail may be read out of the residual above
}

curation
{
    rule            "DEV.md 4c C283 (amended) + C284, graded by C285 (C286)";
    evidence        allLaboratories;   // every study fitted, none held out
    objective       twoStage;
    outlierLimit    3 K;   // |T_model - T| after the least-squares stage
    outliersDropped 5;
    pointsKept      42;
    noBubblePoint   0;
    maxAbsError     2.9158 K;
    meanAbsError    0.5574 K;
    acceptance      graded;   // max |T_model - T| over the kept points, DEV.md 4c C285 (C286)
    gradeLimits_K   (1 2 4);   // upper limits of clean / warning / severe; above, refused
    grade           severe;
    oneLiquid       true;   // arm (f) over the validity span; a pair that splits ONE liquid is never promoted, whatever its grade
    verdict         accepted;
}
`,ye=`/*---------------------------------------------------------------------------*\\
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
`,Ee=`/*---------------------------------------------------------------------------*\\
  NRTL binary interaction parameters --- 2Butanol(i) + 224Trimethylpentane(j)

  REGRESSED BY CHOUPO'S CURATION PIPELINE (bin/choupo-curate, DEV.md 4c C282;
  record docs/design/binary-pairs-from-open-measurements.md) to measured
  bubble PRESSURES at stated temperatures (P-x, DEV.md 4c C291).  The articles named under \`evidence\` are the
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
  its fitting pipeline (every laboratory fitted to the bubble pressure, outliers beyond
  20 % discarded by name, max |P_model - P|/P over the kept points GRADED
  clean / warning / severe at 5 / 10 / 20 % -- DEV.md 4c C283 amended, C285, C291;
  THIS fit: clean, 2.3825 %; one liquid across its validity span), and NO
  HUMAN HAS REVIEWED IT.  The engine says so on every run that reads it, and
  voices a warning or a severe grade beside it.
  CAUTION: this record rests on ONE temperature and ONE laboratory.
  Nothing was held out: the \`validation {}\` block says so, and the acceptance
  is the \`curation {}\` block.  A curator who reads the series back against the
  articles marks it \`reviewStatus reviewed; humanReviewed true;\`.  Revert with
  \`bin/choupo-curate revert 224Trimethylpentane-2Butanol\`.

  REPRODUCE: run tutorials/props/curation/curate531_nrtl_2Butanol_224Trimethylpentane (after \`bin/choupo-curate fetch\` on it); its fit
  writes 224Trimethylpentane-2Butanol.proposal.dat, which bin/curate/check_regressed_pairs.py holds
  equal to this record.
\\*---------------------------------------------------------------------------*/

recordType binaryInteractionParameters;
schemaVersion 1;

pair { i 2Butanol; j 224Trimethylpentane; }

components  ( 2Butanol  224Trimethylpentane );
model       NRTL;

parameters
{
    i           2Butanol;
    j           224Trimethylpentane;
    a_ij        0.00000000;
    b_ij        138.97630238;
    a_ji        0.00000000;
    b_ji        547.64881685;
    alpha       0.30000000;
}

provenance
{
    origin        fitted;
    method        "fitParameters(P_bubble), Levenberg-Marquardt";
    methodVersion "choupoProps Choupo-dev";
    fittedInCase  "tutorials/props/curation/curate531_nrtl_2Butanol_224Trimethylpentane";
    reviewStatus  autoPromoted;
    humanReviewed false;
    fitGrade      clean;   // DEV.md 4c C285 (C291): max |P_model - P|/P over the kept points, graded 5 / 10 / 20 %
    fitGradeMaxRelativeError_pct 2.3825;
    promotedBy    "bin/curate/pairs_px.py promote";
    promotedDate  "2026-11-10";
    reviewReason  "regressed by bin/choupo-curate from archive-transcribed measurements; not yet read back against the articles";
    reuse         "Choupo's own regression; the measured points belong to the cited articles and are not reproduced in this record or this tree";
    fitDate       "2026-11-10";

    evidence
    (
        {
            role      fit;
            dataset   "constant/archiveExtracts/2Butanol-224Trimethylpentane-bubbleP-je201284y-b9.dat";
            doi       "10.1021/je201284y";
            sha256    "ef1706a2a3cd9237639a842b124b07d2059f542451ca22f861316c8d74a0f062";
            provenance measured;
            archiveFile "je201284y.xml";
            system    "2Butanol + 224Trimethylpentane";
        }
    );
    fingerprint "1e6fb96ad732b98a";   // of the declaration, frozen before the fit

    //  IN-SAMPLE: the model reproducing the very points it was
    //  fitted to.  It is NOT a validation; see the block below.
    weighting     equal;   // chi2 is sum ((P_model - P_exp)/P_exp)^2, dimensionless
    chi2          0.00664698;
    rms_rel       0.01664204;
    nDataPoints   24;
    identifiable  true;
    maxAbsCorr    0.95738220;

    validity
    {
        temperature { min 313.15 K; max 313.15 K; }
        pressure    { min 8669 Pa; max 15384 Pa; }
        note        "the span of the FIT evidence; outside it the pair is an extrapolation";
    }
}

validation
{
    verdict     validationRefused;

    heldOut     none;   // every declared dataset carried \`role fit\`

    acceptance  none;   // no band was declared before the fit, so no
                        // pass/fail may be read out of the residual above
}

curation
{
    rule            "DEV.md 4c C291 (bubble-pressure pairs; every laboratory, graded by C285)";
    evidence        allLaboratories;   // every block fitted, none held out
    objective       twoStage;
    residual        P_bubble;
    residualScale   relative;   // (P_model - P)/P at each point's stated T
    outlierLimit_pct 20;   // |P_model - P|/P after the least-squares stage
    outliersDropped 0;
    pointsKept      24;
    noBubblePoint   0;
    maxRelError_pct 2.3825;
    meanRelError_pct 1.4646;
    acceptance      graded;   // max relative pressure error over the kept points, DEV.md 4c C285 (C291)
    gradeLimits_pct (5 10 20);   // upper limits of clean / warning / severe; above, refused
    grade           clean;
    oneLiquid       true;   // arm (f) over the validity span; a pair that splits ONE liquid is never promoted
    temperatures    1;   // distinct stated temperatures in the evidence
    laboratories    1;   // distinct articles in the evidence
    singleTemperature true;   // true: b/T was fitted at ONE temperature
    singleLaboratory  true;   // true: ONE laboratory's data, nothing to cross-check it
    verdict         accepted;
}
`,_e=`/*---------------------------------------------------------------------------*\\
  NRTL binary interaction parameters --- 2Pentanol(i) + 224Trimethylpentane(j)

  REGRESSED BY CHOUPO'S CURATION PIPELINE (bin/choupo-curate, DEV.md 4c C282;
  record docs/design/binary-pairs-from-open-measurements.md) to measured
  bubble PRESSURES at stated temperatures (P-x, DEV.md 4c C291).  The articles named under \`evidence\` are the
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
  its fitting pipeline (every laboratory fitted to the bubble pressure, outliers beyond
  20 % discarded by name, max |P_model - P|/P over the kept points GRADED
  clean / warning / severe at 5 / 10 / 20 % -- DEV.md 4c C283 amended, C285, C291;
  THIS fit: clean, 2.3999 %; one liquid across its validity span), and NO
  HUMAN HAS REVIEWED IT.  The engine says so on every run that reads it, and
  voices a warning or a severe grade beside it.
  CAUTION: this record rests on ONE temperature and ONE laboratory.
  Nothing was held out: the \`validation {}\` block says so, and the acceptance
  is the \`curation {}\` block.  A curator who reads the series back against the
  articles marks it \`reviewStatus reviewed; humanReviewed true;\`.  Revert with
  \`bin/choupo-curate revert 224Trimethylpentane-2Pentanol\`.

  REPRODUCE: run tutorials/props/curation/curate532_nrtl_2Pentanol_224Trimethylpentane (after \`bin/choupo-curate fetch\` on it); its fit
  writes 224Trimethylpentane-2Pentanol.proposal.dat, which bin/curate/check_regressed_pairs.py holds
  equal to this record.
\\*---------------------------------------------------------------------------*/

recordType binaryInteractionParameters;
schemaVersion 1;

pair { i 2Pentanol; j 224Trimethylpentane; }

components  ( 2Pentanol  224Trimethylpentane );
model       NRTL;

parameters
{
    i           2Pentanol;
    j           224Trimethylpentane;
    a_ij        0.00000000;
    b_ij        117.21057253;
    a_ji        0.00000000;
    b_ji        495.62566950;
    alpha       0.30000000;
}

provenance
{
    origin        fitted;
    method        "fitParameters(P_bubble), Levenberg-Marquardt";
    methodVersion "choupoProps Choupo-dev";
    fittedInCase  "tutorials/props/curation/curate532_nrtl_2Pentanol_224Trimethylpentane";
    reviewStatus  autoPromoted;
    humanReviewed false;
    fitGrade      clean;   // DEV.md 4c C285 (C291): max |P_model - P|/P over the kept points, graded 5 / 10 / 20 %
    fitGradeMaxRelativeError_pct 2.3999;
    promotedBy    "bin/curate/pairs_px.py promote";
    promotedDate  "2026-11-10";
    reviewReason  "regressed by bin/choupo-curate from archive-transcribed measurements; not yet read back against the articles";
    reuse         "Choupo's own regression; the measured points belong to the cited articles and are not reproduced in this record or this tree";
    fitDate       "2026-11-10";

    evidence
    (
        {
            role      fit;
            dataset   "constant/archiveExtracts/2Pentanol-224Trimethylpentane-bubbleP-j.fluid.2014.10.016-b4.dat";
            doi       "10.1016/j.fluid.2014.10.016";
            sha256    "423b56a4060dac86cb6c1e7f4afe2331ad90310481e33cdb2ff4f5569d97d1c3";
            provenance measured;
            archiveFile "j.fluid.2014.10.016.xml";
            system    "2Pentanol + 224Trimethylpentane";
        }
    );
    fingerprint "7179bc693060cda3";   // of the declaration, frozen before the fit

    //  IN-SAMPLE: the model reproducing the very points it was
    //  fitted to.  It is NOT a validation; see the block below.
    weighting     equal;   // chi2 is sum ((P_model - P_exp)/P_exp)^2, dimensionless
    chi2          0.00681050;
    rms_rel       0.01684550;
    nDataPoints   24;
    identifiable  true;
    maxAbsCorr    0.94450871;

    validity
    {
        temperature { min 313.15 K; max 313.15 K; }
        pressure    { min 4596 Pa; max 13256 Pa; }
        note        "the span of the FIT evidence; outside it the pair is an extrapolation";
    }
}

validation
{
    verdict     validationRefused;

    heldOut     none;   // every declared dataset carried \`role fit\`

    acceptance  none;   // no band was declared before the fit, so no
                        // pass/fail may be read out of the residual above
}

curation
{
    rule            "DEV.md 4c C291 (bubble-pressure pairs; every laboratory, graded by C285)";
    evidence        allLaboratories;   // every block fitted, none held out
    objective       twoStage;
    residual        P_bubble;
    residualScale   relative;   // (P_model - P)/P at each point's stated T
    outlierLimit_pct 20;   // |P_model - P|/P after the least-squares stage
    outliersDropped 0;
    pointsKept      24;
    noBubblePoint   0;
    maxRelError_pct 2.3999;
    meanRelError_pct 1.4989;
    acceptance      graded;   // max relative pressure error over the kept points, DEV.md 4c C285 (C291)
    gradeLimits_pct (5 10 20);   // upper limits of clean / warning / severe; above, refused
    grade           clean;
    oneLiquid       true;   // arm (f) over the validity span; a pair that splits ONE liquid is never promoted
    temperatures    1;   // distinct stated temperatures in the evidence
    laboratories    1;   // distinct articles in the evidence
    singleTemperature true;   // true: b/T was fitted at ONE temperature
    singleLaboratory  true;   // true: ONE laboratory's data, nothing to cross-check it
    verdict         accepted;
}
`,ge=`/*---------------------------------------------------------------------------*\\
  NRTL binary interaction parameters --- diethylDisulfide(i) + 224Trimethylpentane(j)

  REGRESSED BY CHOUPO'S CURATION PIPELINE (bin/choupo-curate, DEV.md 4c C282;
  record docs/design/binary-pairs-from-open-measurements.md) to measured
  bubble PRESSURES at stated temperatures (P-x, DEV.md 4c C291).  The articles named under \`evidence\` are the
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
  its fitting pipeline (every laboratory fitted to the bubble pressure, outliers beyond
  20 % discarded by name, max |P_model - P|/P over the kept points GRADED
  clean / warning / severe at 5 / 10 / 20 % -- DEV.md 4c C283 amended, C285, C291;
  THIS fit: clean, 0.4370 %; one liquid across its validity span), and NO
  HUMAN HAS REVIEWED IT.  The engine says so on every run that reads it, and
  voices a warning or a severe grade beside it.
  CAUTION: this record rests on ONE temperature and ONE laboratory.
  Nothing was held out: the \`validation {}\` block says so, and the acceptance
  is the \`curation {}\` block.  A curator who reads the series back against the
  articles marks it \`reviewStatus reviewed; humanReviewed true;\`.  Revert with
  \`bin/choupo-curate revert 224Trimethylpentane-diethylDisulfide\`.

  REPRODUCE: run tutorials/props/curation/curate568_nrtl_diethylDisulfide_224Trimethylpentane (after \`bin/choupo-curate fetch\` on it); its fit
  writes 224Trimethylpentane-diethylDisulfide.proposal.dat, which bin/curate/check_regressed_pairs.py holds
  equal to this record.
\\*---------------------------------------------------------------------------*/

recordType binaryInteractionParameters;
schemaVersion 1;

pair { i diethylDisulfide; j 224Trimethylpentane; }

components  ( diethylDisulfide  224Trimethylpentane );
model       NRTL;

parameters
{
    i           diethylDisulfide;
    j           224Trimethylpentane;
    a_ij        0.00000000;
    b_ij        63.06433559;
    a_ji        0.00000000;
    b_ji        171.71536055;
    alpha       0.30000000;
}

provenance
{
    origin        fitted;
    method        "fitParameters(P_bubble), Levenberg-Marquardt";
    methodVersion "choupoProps Choupo-dev";
    fittedInCase  "tutorials/props/curation/curate568_nrtl_diethylDisulfide_224Trimethylpentane";
    reviewStatus  autoPromoted;
    humanReviewed false;
    fitGrade      clean;   // DEV.md 4c C285 (C291): max |P_model - P|/P over the kept points, graded 5 / 10 / 20 %
    fitGradeMaxRelativeError_pct 0.4370;
    promotedBy    "bin/curate/pairs_px.py promote";
    promotedDate  "2026-11-10";
    reviewReason  "regressed by bin/choupo-curate from archive-transcribed measurements; not yet read back against the articles";
    reuse         "Choupo's own regression; the measured points belong to the cited articles and are not reproduced in this record or this tree";
    fitDate       "2026-11-10";

    evidence
    (
        {
            role      fit;
            dataset   "constant/archiveExtracts/diethylDisulfide-224Trimethylpentane-bubbleP-j.fluid.2010.02.043-b14.dat";
            doi       "10.1016/j.fluid.2010.02.043";
            sha256    "5be56e39820f0cc4910d3dcbfcdb5e4a54f65227a1dbd768d2229cc9a5768918";
            provenance measured;
            archiveFile "j.fluid.2010.02.043.xml";
            system    "diethylDisulfide + 224Trimethylpentane";
        }
    );
    fingerprint "c806e3a929653bbc";   // of the declaration, frozen before the fit

    //  IN-SAMPLE: the model reproducing the very points it was
    //  fitted to.  It is NOT a validation; see the block below.
    weighting     equal;   // chi2 is sum ((P_model - P_exp)/P_exp)^2, dimensionless
    chi2          0.00007957;
    rms_rel       0.00315370;
    nDataPoints   8;
    identifiable  true;
    maxAbsCorr    0.99451684;

    validity
    {
        temperature { min 368.15 K; max 368.15 K; }
        pressure    { min 24700 Pa; max 87400 Pa; }
        note        "the span of the FIT evidence; outside it the pair is an extrapolation";
    }
}

validation
{
    verdict     validationRefused;

    heldOut     none;   // every declared dataset carried \`role fit\`

    acceptance  none;   // no band was declared before the fit, so no
                        // pass/fail may be read out of the residual above
}

curation
{
    rule            "DEV.md 4c C291 (bubble-pressure pairs; every laboratory, graded by C285)";
    evidence        allLaboratories;   // every block fitted, none held out
    objective       twoStage;
    residual        P_bubble;
    residualScale   relative;   // (P_model - P)/P at each point's stated T
    outlierLimit_pct 20;   // |P_model - P|/P after the least-squares stage
    outliersDropped 0;
    pointsKept      8;
    noBubblePoint   0;
    maxRelError_pct 0.4370;
    meanRelError_pct 0.2818;
    acceptance      graded;   // max relative pressure error over the kept points, DEV.md 4c C285 (C291)
    gradeLimits_pct (5 10 20);   // upper limits of clean / warning / severe; above, refused
    grade           clean;
    oneLiquid       true;   // arm (f) over the validity span; a pair that splits ONE liquid is never promoted
    temperatures    1;   // distinct stated temperatures in the evidence
    laboratories    1;   // distinct articles in the evidence
    singleTemperature true;   // true: b/T was fitted at ONE temperature
    singleLaboratory  true;   // true: ONE laboratory's data, nothing to cross-check it
    verdict         accepted;
}
`,Te=`/*---------------------------------------------------------------------------*\\
  NRTL binary interaction parameters --- diisopropylEther(i) + 224Trimethylpentane(j)

  REGRESSED BY CHOUPO'S CURATION PIPELINE (bin/choupo-curate, DEV.md 4c C282;
  record docs/design/binary-pairs-from-open-measurements.md) to measured
  bubble temperatures.  The articles named under \`evidence\` are the
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
  its fitting pipeline (every laboratory fitted, outliers beyond 3 K
  discarded by name, max |T_model - T| over the kept points GRADED
  clean / warning / severe at 1 / 2 / 4 K -- DEV.md 4c C283
  amended, C285, C286; THIS fit: warning, 1.7143 K; one liquid
  across its validity span), and NO HUMAN HAS REVIEWED IT.  The
  engine says so on every run that reads it, and voices a warning
  or a severe grade beside it.
  Nothing was held out: the \`validation {}\` block says so, and the
  acceptance is the \`curation {}\` block.  A curator who reads the series
  back against the articles marks it \`reviewStatus reviewed; humanReviewed
  true;\`.  Revert with \`bin/choupo-curate revert 224Trimethylpentane-diisopropylEther\`.

  REPRODUCE: run tutorials/props/curation/curate153_nrtl_diisopropylEther_224Trimethylpentane (after \`bin/choupo-curate fetch\` on it); its fit
  writes 224Trimethylpentane-diisopropylEther.proposal.dat, which bin/curate/check_regressed_pairs.py holds
  equal to this record.
\\*---------------------------------------------------------------------------*/

recordType binaryInteractionParameters;
schemaVersion 1;

pair { i diisopropylEther; j 224Trimethylpentane; }

components  ( diisopropylEther  224Trimethylpentane );
model       NRTL;

parameters
{
    i           diisopropylEther;
    j           224Trimethylpentane;
    a_ij        0.00000000;
    b_ij        289.90066895;
    a_ji        0.00000000;
    b_ji        -186.26193989;
    alpha       0.30000000;
}

provenance
{
    origin        fitted;
    method        "fitParameters(T_bubble), Levenberg-Marquardt";
    methodVersion "choupoProps Choupo-dev";
    fittedInCase  "tutorials/props/curation/curate153_nrtl_diisopropylEther_224Trimethylpentane";
    reviewStatus  autoPromoted;
    humanReviewed false;
    fitGrade      warning;   // DEV.md 4c C285 (C286): max |T_model - T| over the kept points, graded 1 / 2 / 4 K
    fitGradeMaxTemperatureError_K 1.7143;
    promotedBy    "bin/choupo-curate pair --promote";
    promotedDate  "2026-11-10";
    reviewReason  "regressed by bin/choupo-curate from archive-transcribed measurements; not yet read back against the articles";
    reuse         "Choupo's own regression; the measured points belong to the cited articles and are not reproduced in this record or this tree";
    fitDate       "2026-11-10";

    evidence
    (
        {
            role      fit;
            dataset   "constant/archiveExtracts/diisopropylEther-224Trimethylpentane-bubble-j.fluid.2006.08.004.dat";
            doi       "10.1016/j.fluid.2006.08.004";
            sha256    "c3a918b682ac27088acb3ef773ba0203a90a86bccf99acb83efd395479ed77cd";
            provenance measured;
            archiveFile "j.fluid.2006.08.004.xml";
            system    "diisopropylEther + 224Trimethylpentane";
            pressure  "101300.000000 Pa";
        }
        {
            role      fit;
            dataset   "constant/archiveExtracts/diisopropylEther-224Trimethylpentane-bubble-j.fluid.2004.12.007.dat";
            doi       "10.1016/j.fluid.2004.12.007";
            sha256    "a400ca4b40655a0e0fbe85130779f864000e7cd037fd9603de36c033b476ba53";
            provenance measured;
            archiveFile "j.fluid.2004.12.007.xml";
            system    "diisopropylEther + 224Trimethylpentane";
            pressure  "95960.000000 Pa";
        }
    );
    fingerprint "299bf31cc54ebeca";   // of the declaration, frozen before the fit

    //  IN-SAMPLE: the model reproducing the very points it was
    //  fitted to.  It is NOT a validation; see the block below.
    weighting     uncertainty;   // chi2 is sum ((T_model - T_exp)/U)^2, dimensionless
    chi2          443.42242959;
    rms_K         1.04876876;
    nDataPoints   28;
    identifiable  false;
    maxAbsCorr    0.99910481;

    validity
    {
        temperature { min 340.85 K; max 368.15 K; }
        pressure    { min 95960 Pa; max 101300 Pa; }
        note        "the span of the FIT evidence; outside it the pair is an extrapolation";
    }
}

validation
{
    verdict     validationRefused;

    heldOut     none;   // every declared dataset carried \`role fit\`

    acceptance  none;   // no band was declared before the fit, so no
                        // pass/fail may be read out of the residual above
}

curation
{
    rule            "DEV.md 4c C283 (amended) + C284, graded by C285 (C286)";
    evidence        allLaboratories;   // every study fitted, none held out
    objective       twoStage;
    outlierLimit    3 K;   // |T_model - T| after the least-squares stage
    outliersDropped 0;
    pointsKept      28;
    noBubblePoint   0;
    maxAbsError     1.7143 K;
    meanAbsError    0.9498 K;
    acceptance      graded;   // max |T_model - T| over the kept points, DEV.md 4c C285 (C286)
    gradeLimits_K   (1 2 4);   // upper limits of clean / warning / severe; above, refused
    grade           warning;
    oneLiquid       true;   // arm (f) over the validity span; a pair that splits ONE liquid is never promoted, whatever its grade
    verdict         accepted;
}
`,Pe=`/*---------------------------------------------------------------------------*\\
  NRTL binary interaction parameters --- dimethylDisulfide(i) + 224Trimethylpentane(j)

  REGRESSED BY CHOUPO'S CURATION PIPELINE (bin/choupo-curate, DEV.md 4c C282;
  record docs/design/binary-pairs-from-open-measurements.md) to measured
  bubble PRESSURES at stated temperatures (P-x, DEV.md 4c C291).  The articles named under \`evidence\` are the
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
  its fitting pipeline (every laboratory fitted to the bubble pressure, outliers beyond
  20 % discarded by name, max |P_model - P|/P over the kept points GRADED
  clean / warning / severe at 5 / 10 / 20 % -- DEV.md 4c C283 amended, C285, C291;
  THIS fit: clean, 0.2527 %; one liquid across its validity span), and NO
  HUMAN HAS REVIEWED IT.  The engine says so on every run that reads it, and
  voices a warning or a severe grade beside it.
  CAUTION: this record rests on ONE temperature and ONE laboratory.
  Nothing was held out: the \`validation {}\` block says so, and the acceptance
  is the \`curation {}\` block.  A curator who reads the series back against the
  articles marks it \`reviewStatus reviewed; humanReviewed true;\`.  Revert with
  \`bin/choupo-curate revert 224Trimethylpentane-dimethylDisulfide\`.

  REPRODUCE: run tutorials/props/curation/curate566_nrtl_dimethylDisulfide_224Trimethylpentane (after \`bin/choupo-curate fetch\` on it); its fit
  writes 224Trimethylpentane-dimethylDisulfide.proposal.dat, which bin/curate/check_regressed_pairs.py holds
  equal to this record.
\\*---------------------------------------------------------------------------*/

recordType binaryInteractionParameters;
schemaVersion 1;

pair { i dimethylDisulfide; j 224Trimethylpentane; }

components  ( dimethylDisulfide  224Trimethylpentane );
model       NRTL;

parameters
{
    i           dimethylDisulfide;
    j           224Trimethylpentane;
    a_ij        0.00000000;
    b_ij        334.62143717;
    a_ji        0.00000000;
    b_ji        6.97415427;
    alpha       0.30000000;
}

provenance
{
    origin        fitted;
    method        "fitParameters(P_bubble), Levenberg-Marquardt";
    methodVersion "choupoProps Choupo-dev";
    fittedInCase  "tutorials/props/curation/curate566_nrtl_dimethylDisulfide_224Trimethylpentane";
    reviewStatus  autoPromoted;
    humanReviewed false;
    fitGrade      clean;   // DEV.md 4c C285 (C291): max |P_model - P|/P over the kept points, graded 5 / 10 / 20 %
    fitGradeMaxRelativeError_pct 0.2527;
    promotedBy    "bin/curate/pairs_px.py promote";
    promotedDate  "2026-11-10";
    reviewReason  "regressed by bin/choupo-curate from archive-transcribed measurements; not yet read back against the articles";
    reuse         "Choupo's own regression; the measured points belong to the cited articles and are not reproduced in this record or this tree";
    fitDate       "2026-11-10";

    evidence
    (
        {
            role      fit;
            dataset   "constant/archiveExtracts/dimethylDisulfide-224Trimethylpentane-bubbleP-j.fluid.2010.02.043-b6.dat";
            doi       "10.1016/j.fluid.2010.02.043";
            sha256    "5be56e39820f0cc4910d3dcbfcdb5e4a54f65227a1dbd768d2229cc9a5768918";
            provenance measured;
            archiveFile "j.fluid.2010.02.043.xml";
            system    "dimethylDisulfide + 224Trimethylpentane";
        }
    );
    fingerprint "2f41fb0cfd404c8a";   // of the declaration, frozen before the fit

    //  IN-SAMPLE: the model reproducing the very points it was
    //  fitted to.  It is NOT a validation; see the block below.
    weighting     equal;   // chi2 is sum ((P_model - P_exp)/P_exp)^2, dimensionless
    chi2          0.00002279;
    rms_rel       0.00159122;
    nDataPoints   9;
    identifiable  true;
    maxAbsCorr    0.99276918;

    validity
    {
        temperature { min 368.15 K; max 368.15 K; }
        pressure    { min 72700 Pa; max 95700 Pa; }
        note        "the span of the FIT evidence; outside it the pair is an extrapolation";
    }
}

validation
{
    verdict     validationRefused;

    heldOut     none;   // every declared dataset carried \`role fit\`

    acceptance  none;   // no band was declared before the fit, so no
                        // pass/fail may be read out of the residual above
}

curation
{
    rule            "DEV.md 4c C291 (bubble-pressure pairs; every laboratory, graded by C285)";
    evidence        allLaboratories;   // every block fitted, none held out
    objective       twoStage;
    residual        P_bubble;
    residualScale   relative;   // (P_model - P)/P at each point's stated T
    outlierLimit_pct 20;   // |P_model - P|/P after the least-squares stage
    outliersDropped 0;
    pointsKept      9;
    noBubblePoint   0;
    maxRelError_pct 0.2527;
    meanRelError_pct 0.1275;
    acceptance      graded;   // max relative pressure error over the kept points, DEV.md 4c C285 (C291)
    gradeLimits_pct (5 10 20);   // upper limits of clean / warning / severe; above, refused
    grade           clean;
    oneLiquid       true;   // arm (f) over the validity span; a pair that splits ONE liquid is never promoted
    temperatures    1;   // distinct stated temperatures in the evidence
    laboratories    1;   // distinct articles in the evidence
    singleTemperature true;   // true: b/T was fitted at ONE temperature
    singleLaboratory  true;   // true: ONE laboratory's data, nothing to cross-check it
    verdict         accepted;
}
`,Re=`/*---------------------------------------------------------------------------*\\
  NRTL binary interaction parameters --- isopropanol(i) + 224Trimethylpentane(j)

  REGRESSED BY CHOUPO'S CURATION PIPELINE (bin/choupo-curate, DEV.md 4c C282;
  record docs/design/binary-pairs-from-open-measurements.md) to measured
  bubble temperatures.  The articles named under \`evidence\` are the
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
  its fitting pipeline (every laboratory fitted, outliers beyond 3 K
  discarded by name, max |T_model - T| over the kept points GRADED
  clean / warning / severe at 1 / 2 / 4 K -- DEV.md 4c C283
  amended, C285, C286; THIS fit: clean, 0.5067 K; one liquid
  across its validity span), and NO HUMAN HAS REVIEWED IT.  The
  engine says so on every run that reads it, and voices a warning
  or a severe grade beside it.
  Nothing was held out: the \`validation {}\` block says so, and the
  acceptance is the \`curation {}\` block.  A curator who reads the series
  back against the articles marks it \`reviewStatus reviewed; humanReviewed
  true;\`.  Revert with \`bin/choupo-curate revert 224Trimethylpentane-isopropanol\`.

  REPRODUCE: run tutorials/props/curation/curate134_nrtl_isopropanol_224Trimethylpentane (after \`bin/choupo-curate fetch\` on it); its fit
  writes 224Trimethylpentane-isopropanol.proposal.dat, which bin/curate/check_regressed_pairs.py holds
  equal to this record.
\\*---------------------------------------------------------------------------*/

recordType binaryInteractionParameters;
schemaVersion 1;

pair { i isopropanol; j 224Trimethylpentane; }

components  ( isopropanol  224Trimethylpentane );
model       NRTL;

parameters
{
    i           isopropanol;
    j           224Trimethylpentane;
    a_ij        0.00000000;
    b_ij        346.25156426;
    a_ji        0.00000000;
    b_ji        347.01706733;
    alpha       0.30000000;
}

provenance
{
    origin        fitted;
    method        "fitParameters(T_bubble), Levenberg-Marquardt";
    methodVersion "choupoProps Choupo-dev";
    fittedInCase  "tutorials/props/curation/curate134_nrtl_isopropanol_224Trimethylpentane";
    reviewStatus  autoPromoted;
    humanReviewed false;
    fitGrade      clean;   // DEV.md 4c C285 (C286): max |T_model - T| over the kept points, graded 1 / 2 / 4 K
    fitGradeMaxTemperatureError_K 0.5067;
    promotedBy    "bin/choupo-curate pair --promote";
    promotedDate  "2026-11-10";
    reviewReason  "regressed by bin/choupo-curate from archive-transcribed measurements; not yet read back against the articles";
    reuse         "Choupo's own regression; the measured points belong to the cited articles and are not reproduced in this record or this tree";
    fitDate       "2026-11-10";

    evidence
    (
        {
            role      fit;
            dataset   "constant/archiveExtracts/isopropanol-224Trimethylpentane-bubble-j.jct.2011.10.025.dat";
            doi       "10.1016/j.jct.2011.10.025";
            sha256    "d9f6a88060615631fce71b3187a31ace470278da59c293d2e62e44120e446882";
            provenance measured;
            archiveFile "j.jct.2011.10.025.xml";
            system    "isopropanol + 224Trimethylpentane";
            pressure  "101300.000000 Pa";
        }
        {
            role      fit;
            dataset   "constant/archiveExtracts/isopropanol-224Trimethylpentane-bubble-je900327x.dat";
            doi       "10.1021/je900327x";
            sha256    "0821e94892b4b81c7a0e22171dff181e25ad8678046614261975be7679bfab7c";
            provenance measured;
            archiveFile "je900327x.xml";
            system    "isopropanol + 224Trimethylpentane";
            pressure  "101300.000000 Pa";
        }
    );
    fingerprint "5f9ed70bb2e90c6e";   // of the declaration, frozen before the fit

    //  IN-SAMPLE: the model reproducing the very points it was
    //  fitted to.  It is NOT a validation; see the block below.
    weighting     uncertainty;   // chi2 is sum ((T_model - T_exp)/U)^2, dimensionless
    chi2          22.14154381;
    rms_K         0.22492029;
    nDataPoints   38;
    identifiable  true;
    maxAbsCorr    0.97905544;

    validity
    {
        temperature { min 349.47 K; max 361.23 K; }
        pressure    { min 101300 Pa; max 101300 Pa; }
        note        "the span of the FIT evidence; outside it the pair is an extrapolation";
    }
}

validation
{
    verdict     validationRefused;

    heldOut     none;   // every declared dataset carried \`role fit\`

    acceptance  none;   // no band was declared before the fit, so no
                        // pass/fail may be read out of the residual above
}

curation
{
    rule            "DEV.md 4c C283 (amended) + C284, graded by C285 (C286)";
    evidence        allLaboratories;   // every study fitted, none held out
    objective       twoStage;
    outlierLimit    3 K;   // |T_model - T| after the least-squares stage
    outliersDropped 0;
    pointsKept      38;
    noBubblePoint   0;
    maxAbsError     0.5067 K;
    meanAbsError    0.1743 K;
    acceptance      graded;   // max |T_model - T| over the kept points, DEV.md 4c C285 (C286)
    gradeLimits_K   (1 2 4);   // upper limits of clean / warning / severe; above, refused
    grade           clean;
    oneLiquid       true;   // arm (f) over the validity span; a pair that splits ONE liquid is never promoted, whatever its grade
    verdict         accepted;
}
`,we=`/*---------------------------------------------------------------------------*\\
  NRTL binary interaction parameters --- methylTertPentylEther(i) + 224Trimethylpentane(j)

  REGRESSED BY CHOUPO'S CURATION PIPELINE (bin/choupo-curate, DEV.md 4c C282;
  record docs/design/binary-pairs-from-open-measurements.md) to measured
  bubble PRESSURES at stated temperatures (P-x, DEV.md 4c C291).  The articles named under \`evidence\` are the
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
  its fitting pipeline (every laboratory fitted to the bubble pressure, outliers beyond
  20 % discarded by name, max |P_model - P|/P over the kept points GRADED
  clean / warning / severe at 5 / 10 / 20 % -- DEV.md 4c C283 amended, C285, C291;
  THIS fit: clean, 1.2002 %; one liquid across its validity span), and NO
  HUMAN HAS REVIEWED IT.  The engine says so on every run that reads it, and
  voices a warning or a severe grade beside it.
  CAUTION: this record rests on ONE temperature and ONE laboratory.
  Nothing was held out: the \`validation {}\` block says so, and the acceptance
  is the \`curation {}\` block.  A curator who reads the series back against the
  articles marks it \`reviewStatus reviewed; humanReviewed true;\`.  Revert with
  \`bin/choupo-curate revert 224Trimethylpentane-methylTertPentylEther\`.

  REPRODUCE: run tutorials/props/curation/curate550_nrtl_methylTertPentylEther_224Trimethylpentane (after \`bin/choupo-curate fetch\` on it); its fit
  writes 224Trimethylpentane-methylTertPentylEther.proposal.dat, which bin/curate/check_regressed_pairs.py holds
  equal to this record.
\\*---------------------------------------------------------------------------*/

recordType binaryInteractionParameters;
schemaVersion 1;

pair { i methylTertPentylEther; j 224Trimethylpentane; }

components  ( methylTertPentylEther  224Trimethylpentane );
model       NRTL;

parameters
{
    i           methylTertPentylEther;
    j           224Trimethylpentane;
    a_ij        0.00000000;
    b_ij        575.65339444;
    a_ji        0.00000000;
    b_ji        -317.42632600;
    alpha       0.30000000;
}

provenance
{
    origin        fitted;
    method        "fitParameters(P_bubble), Levenberg-Marquardt";
    methodVersion "choupoProps Choupo-dev";
    fittedInCase  "tutorials/props/curation/curate550_nrtl_methylTertPentylEther_224Trimethylpentane";
    reviewStatus  autoPromoted;
    humanReviewed false;
    fitGrade      clean;   // DEV.md 4c C285 (C291): max |P_model - P|/P over the kept points, graded 5 / 10 / 20 %
    fitGradeMaxRelativeError_pct 1.2002;
    promotedBy    "bin/curate/pairs_px.py promote";
    promotedDate  "2026-11-10";
    reviewReason  "regressed by bin/choupo-curate from archive-transcribed measurements; not yet read back against the articles";
    reuse         "Choupo's own regression; the measured points belong to the cited articles and are not reproduced in this record or this tree";
    fitDate       "2026-11-10";

    evidence
    (
        {
            role      fit;
            dataset   "constant/archiveExtracts/methylTertPentylEther-224Trimethylpentane-bubbleP-j.fluid.2009.03.026-b2.dat";
            doi       "10.1016/j.fluid.2009.03.026";
            sha256    "3acf659991a9818fba6ee5464d5875422c7070a75c372b71daabb6482fbf10d9";
            provenance measured;
            archiveFile "j.fluid.2009.03.026.xml";
            system    "methylTertPentylEther + 224Trimethylpentane";
        }
    );
    fingerprint "5042acc985f7997b";   // of the declaration, frozen before the fit

    //  IN-SAMPLE: the model reproducing the very points it was
    //  fitted to.  It is NOT a validation; see the block below.
    weighting     equal;   // chi2 is sum ((P_model - P_exp)/P_exp)^2, dimensionless
    chi2          0.00157836;
    rms_rel       0.00847016;
    nDataPoints   22;
    identifiable  true;
    maxAbsCorr    0.98978256;

    validity
    {
        temperature { min 333.15 K; max 333.15 K; }
        pressure    { min 29030 Pa; max 42410 Pa; }
        note        "the span of the FIT evidence; outside it the pair is an extrapolation";
    }
}

validation
{
    verdict     validationRefused;

    heldOut     none;   // every declared dataset carried \`role fit\`

    acceptance  none;   // no band was declared before the fit, so no
                        // pass/fail may be read out of the residual above
}

curation
{
    rule            "DEV.md 4c C291 (bubble-pressure pairs; every laboratory, graded by C285)";
    evidence        allLaboratories;   // every block fitted, none held out
    objective       twoStage;
    residual        P_bubble;
    residualScale   relative;   // (P_model - P)/P at each point's stated T
    outlierLimit_pct 20;   // |P_model - P|/P after the least-squares stage
    outliersDropped 0;
    pointsKept      22;
    noBubblePoint   0;
    maxRelError_pct 1.2002;
    meanRelError_pct 0.7718;
    acceptance      graded;   // max relative pressure error over the kept points, DEV.md 4c C285 (C291)
    gradeLimits_pct (5 10 20);   // upper limits of clean / warning / severe; above, refused
    grade           clean;
    oneLiquid       true;   // arm (f) over the validity span; a pair that splits ONE liquid is never promoted
    temperatures    1;   // distinct stated temperatures in the evidence
    laboratories    1;   // distinct articles in the evidence
    singleTemperature true;   // true: b/T was fitted at ONE temperature
    singleLaboratory  true;   // true: ONE laboratory's data, nothing to cross-check it
    verdict         accepted;
}
`,Ce=`/*---------------------------------------------------------------------------*\\
  NRTL binary interaction parameters --- 224Trimethylpentane(i) + nHeptane(j)

  REGRESSED BY CHOUPO'S CURATION PIPELINE (bin/choupo-curate, DEV.md 4c C282;
  record docs/design/binary-pairs-from-open-measurements.md) to measured
  bubble PRESSURES at stated temperatures (P-x, DEV.md 4c C291).  The articles named under \`evidence\` are the
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
  its fitting pipeline (every laboratory fitted to the bubble pressure, outliers beyond
  20 % discarded by name, max |P_model - P|/P over the kept points GRADED
  clean / warning / severe at 5 / 10 / 20 % -- DEV.md 4c C283 amended, C285, C291;
  THIS fit: clean, 0.4411 %; one liquid across its validity span), and NO
  HUMAN HAS REVIEWED IT.  The engine says so on every run that reads it, and
  voices a warning or a severe grade beside it.
  CAUTION: this record rests on ONE temperature and ONE laboratory.
  Nothing was held out: the \`validation {}\` block says so, and the acceptance
  is the \`curation {}\` block.  A curator who reads the series back against the
  articles marks it \`reviewStatus reviewed; humanReviewed true;\`.  Revert with
  \`bin/choupo-curate revert 224Trimethylpentane-nHeptane\`.

  REPRODUCE: run tutorials/props/curation/curate551_nrtl_224Trimethylpentane_nHeptane (after \`bin/choupo-curate fetch\` on it); its fit
  writes 224Trimethylpentane-nHeptane.proposal.dat, which bin/curate/check_regressed_pairs.py holds
  equal to this record.
\\*---------------------------------------------------------------------------*/

recordType binaryInteractionParameters;
schemaVersion 1;

pair { i 224Trimethylpentane; j nHeptane; }

components  ( 224Trimethylpentane  nHeptane );
model       NRTL;

parameters
{
    i           224Trimethylpentane;
    j           nHeptane;
    a_ij        0.00000000;
    b_ij        58.92282753;
    a_ji        0.00000000;
    b_ji        -60.65863669;
    alpha       0.30000000;
}

provenance
{
    origin        fitted;
    method        "fitParameters(P_bubble), Levenberg-Marquardt";
    methodVersion "choupoProps Choupo-dev";
    fittedInCase  "tutorials/props/curation/curate551_nrtl_224Trimethylpentane_nHeptane";
    reviewStatus  autoPromoted;
    humanReviewed false;
    fitGrade      clean;   // DEV.md 4c C285 (C291): max |P_model - P|/P over the kept points, graded 5 / 10 / 20 %
    fitGradeMaxRelativeError_pct 0.4411;
    promotedBy    "bin/curate/pairs_px.py promote";
    promotedDate  "2026-11-10";
    reviewReason  "regressed by bin/choupo-curate from archive-transcribed measurements; not yet read back against the articles";
    reuse         "Choupo's own regression; the measured points belong to the cited articles and are not reproduced in this record or this tree";
    fitDate       "2026-11-10";

    evidence
    (
        {
            role      fit;
            dataset   "constant/archiveExtracts/224Trimethylpentane-nHeptane-bubbleP-j.fluid.2015.07.049-b3.dat";
            doi       "10.1016/j.fluid.2015.07.049";
            sha256    "211f510a7abf36ba65db341672543cc1a5e28136c68c8b5dce97f72bfdd672a3";
            provenance measured;
            archiveFile "j.fluid.2015.07.049.xml";
            system    "224Trimethylpentane + nHeptane";
        }
    );
    fingerprint "3dc4e6410383a090";   // of the declaration, frozen before the fit

    //  IN-SAMPLE: the model reproducing the very points it was
    //  fitted to.  It is NOT a validation; see the block below.
    weighting     equal;   // chi2 is sum ((P_model - P_exp)/P_exp)^2, dimensionless
    chi2          0.00021245;
    rms_rel       0.00310753;
    nDataPoints   22;
    identifiable  false;
    maxAbsCorr    1.00000000;

    validity
    {
        temperature { min 313.15 K; max 313.15 K; }
        pressure    { min 12347 Pa; max 12914 Pa; }
        note        "the span of the FIT evidence; outside it the pair is an extrapolation";
    }
}

validation
{
    verdict     validationRefused;

    heldOut     none;   // every declared dataset carried \`role fit\`

    acceptance  none;   // no band was declared before the fit, so no
                        // pass/fail may be read out of the residual above
}

curation
{
    rule            "DEV.md 4c C291 (bubble-pressure pairs; every laboratory, graded by C285)";
    evidence        allLaboratories;   // every block fitted, none held out
    objective       twoStage;
    residual        P_bubble;
    residualScale   relative;   // (P_model - P)/P at each point's stated T
    outlierLimit_pct 20;   // |P_model - P|/P after the least-squares stage
    outliersDropped 0;
    pointsKept      22;
    noBubblePoint   0;
    maxRelError_pct 0.4411;
    meanRelError_pct 0.2800;
    acceptance      graded;   // max relative pressure error over the kept points, DEV.md 4c C285 (C291)
    gradeLimits_pct (5 10 20);   // upper limits of clean / warning / severe; above, refused
    grade           clean;
    oneLiquid       true;   // arm (f) over the validity span; a pair that splits ONE liquid is never promoted
    temperatures    1;   // distinct stated temperatures in the evidence
    laboratories    1;   // distinct articles in the evidence
    singleTemperature true;   // true: b/T was fitted at ONE temperature
    singleLaboratory  true;   // true: ONE laboratory's data, nothing to cross-check it
    verdict         accepted;
}
`,je=`/*---------------------------------------------------------------------------*\\
  NRTL binary interaction parameters --- benzene(i) + 2Butanol(j)

  REGRESSED BY CHOUPO'S CURATION PIPELINE (bin/choupo-curate, DEV.md 4c C282;
  record docs/design/binary-pairs-from-open-measurements.md) to measured
  bubble PRESSURES at stated temperatures (P-x, DEV.md 4c C291).  The articles named under \`evidence\` are the
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
  its fitting pipeline (every laboratory fitted to the bubble pressure, outliers beyond
  20 % discarded by name, max |P_model - P|/P over the kept points GRADED
  clean / warning / severe at 5 / 10 / 20 % -- DEV.md 4c C283 amended, C285, C291;
  THIS fit: clean, 1.1595 %; one liquid across its validity span), and NO
  HUMAN HAS REVIEWED IT.  The engine says so on every run that reads it, and
  voices a warning or a severe grade beside it.
  CAUTION: this record rests on ONE temperature and ONE laboratory.
  Nothing was held out: the \`validation {}\` block says so, and the acceptance
  is the \`curation {}\` block.  A curator who reads the series back against the
  articles marks it \`reviewStatus reviewed; humanReviewed true;\`.  Revert with
  \`bin/choupo-curate revert 2Butanol-benzene\`.

  REPRODUCE: run tutorials/props/curation/curate533_nrtl_benzene_2Butanol (after \`bin/choupo-curate fetch\` on it); its fit
  writes 2Butanol-benzene.proposal.dat, which bin/curate/check_regressed_pairs.py holds
  equal to this record.
\\*---------------------------------------------------------------------------*/

recordType binaryInteractionParameters;
schemaVersion 1;

pair { i benzene; j 2Butanol; }

components  ( benzene  2Butanol );
model       NRTL;

parameters
{
    i           benzene;
    j           2Butanol;
    a_ij        0.00000000;
    b_ij        487.20380130;
    a_ji        0.00000000;
    b_ji        43.57520329;
    alpha       0.30000000;
}

provenance
{
    origin        fitted;
    method        "fitParameters(P_bubble), Levenberg-Marquardt";
    methodVersion "choupoProps Choupo-dev";
    fittedInCase  "tutorials/props/curation/curate533_nrtl_benzene_2Butanol";
    reviewStatus  autoPromoted;
    humanReviewed false;
    fitGrade      clean;   // DEV.md 4c C285 (C291): max |P_model - P|/P over the kept points, graded 5 / 10 / 20 %
    fitGradeMaxRelativeError_pct 1.1595;
    promotedBy    "bin/curate/pairs_px.py promote";
    promotedDate  "2026-11-10";
    reviewReason  "regressed by bin/choupo-curate from archive-transcribed measurements; not yet read back against the articles";
    reuse         "Choupo's own regression; the measured points belong to the cited articles and are not reproduced in this record or this tree";
    fitDate       "2026-11-10";

    evidence
    (
        {
            role      fit;
            dataset   "constant/archiveExtracts/benzene-2Butanol-bubbleP-je0502896-b4.dat";
            doi       "10.1021/je0502896";
            sha256    "b2135ef6887f98e20d44c0241320ee16c9f7b30fce76774f0bed2d0d89760318";
            provenance measured;
            archiveFile "je0502896.xml";
            system    "benzene + 2Butanol";
        }
    );
    fingerprint "9543ce1adc59844e";   // of the declaration, frozen before the fit

    //  IN-SAMPLE: the model reproducing the very points it was
    //  fitted to.  It is NOT a validation; see the block below.
    weighting     equal;   // chi2 is sum ((P_model - P_exp)/P_exp)^2, dimensionless
    chi2          0.00174789;
    rms_rel       0.00853397;
    nDataPoints   24;
    identifiable  true;
    maxAbsCorr    0.96396668;

    validity
    {
        temperature { min 313.15 K; max 313.15 K; }
        pressure    { min 10024 Pa; max 24855 Pa; }
        note        "the span of the FIT evidence; outside it the pair is an extrapolation";
    }
}

validation
{
    verdict     validationRefused;

    heldOut     none;   // every declared dataset carried \`role fit\`

    acceptance  none;   // no band was declared before the fit, so no
                        // pass/fail may be read out of the residual above
}

curation
{
    rule            "DEV.md 4c C291 (bubble-pressure pairs; every laboratory, graded by C285)";
    evidence        allLaboratories;   // every block fitted, none held out
    objective       twoStage;
    residual        P_bubble;
    residualScale   relative;   // (P_model - P)/P at each point's stated T
    outlierLimit_pct 20;   // |P_model - P|/P after the least-squares stage
    outliersDropped 0;
    pointsKept      24;
    noBubblePoint   0;
    maxRelError_pct 1.1595;
    meanRelError_pct 0.7665;
    acceptance      graded;   // max relative pressure error over the kept points, DEV.md 4c C285 (C291)
    gradeLimits_pct (5 10 20);   // upper limits of clean / warning / severe; above, refused
    grade           clean;
    oneLiquid       true;   // arm (f) over the validity span; a pair that splits ONE liquid is never promoted
    temperatures    1;   // distinct stated temperatures in the evidence
    laboratories    1;   // distinct articles in the evidence
    singleTemperature true;   // true: b/T was fitted at ONE temperature
    singleLaboratory  true;   // true: ONE laboratory's data, nothing to cross-check it
    verdict         accepted;
}
`,De=`/*---------------------------------------------------------------------------*\\
  NRTL binary interaction parameters --- 2Butanol(i) + cyclohexane(j)

  REGRESSED BY CHOUPO'S CURATION PIPELINE (bin/choupo-curate, DEV.md 4c C282;
  record docs/design/binary-pairs-from-open-measurements.md) to measured
  bubble PRESSURES at stated temperatures (P-x, DEV.md 4c C291).  The articles named under \`evidence\` are the
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
  its fitting pipeline (every laboratory fitted to the bubble pressure, outliers beyond
  20 % discarded by name, max |P_model - P|/P over the kept points GRADED
  clean / warning / severe at 5 / 10 / 20 % -- DEV.md 4c C283 amended, C285, C291;
  THIS fit: clean, 2.0580 %; one liquid across its validity span), and NO
  HUMAN HAS REVIEWED IT.  The engine says so on every run that reads it, and
  voices a warning or a severe grade beside it.
  CAUTION: this record rests on ONE temperature and ONE laboratory.
  Nothing was held out: the \`validation {}\` block says so, and the acceptance
  is the \`curation {}\` block.  A curator who reads the series back against the
  articles marks it \`reviewStatus reviewed; humanReviewed true;\`.  Revert with
  \`bin/choupo-curate revert 2Butanol-cyclohexane\`.

  REPRODUCE: run tutorials/props/curation/curate534_nrtl_2Butanol_cyclohexane (after \`bin/choupo-curate fetch\` on it); its fit
  writes 2Butanol-cyclohexane.proposal.dat, which bin/curate/check_regressed_pairs.py holds
  equal to this record.
\\*---------------------------------------------------------------------------*/

recordType binaryInteractionParameters;
schemaVersion 1;

pair { i 2Butanol; j cyclohexane; }

components  ( 2Butanol  cyclohexane );
model       NRTL;

parameters
{
    i           2Butanol;
    j           cyclohexane;
    a_ij        0.00000000;
    b_ij        58.57648561;
    a_ji        0.00000000;
    b_ji        628.58428389;
    alpha       0.30000000;
}

provenance
{
    origin        fitted;
    method        "fitParameters(P_bubble), Levenberg-Marquardt";
    methodVersion "choupoProps Choupo-dev";
    fittedInCase  "tutorials/props/curation/curate534_nrtl_2Butanol_cyclohexane";
    reviewStatus  autoPromoted;
    humanReviewed false;
    fitGrade      clean;   // DEV.md 4c C285 (C291): max |P_model - P|/P over the kept points, graded 5 / 10 / 20 %
    fitGradeMaxRelativeError_pct 2.0580;
    promotedBy    "bin/curate/pairs_px.py promote";
    promotedDate  "2026-11-10";
    reviewReason  "regressed by bin/choupo-curate from archive-transcribed measurements; not yet read back against the articles";
    reuse         "Choupo's own regression; the measured points belong to the cited articles and are not reproduced in this record or this tree";
    fitDate       "2026-11-10";

    evidence
    (
        {
            role      fit;
            dataset   "constant/archiveExtracts/2Butanol-cyclohexane-bubbleP-je201284y-b7.dat";
            doi       "10.1021/je201284y";
            sha256    "ef1706a2a3cd9237639a842b124b07d2059f542451ca22f861316c8d74a0f062";
            provenance measured;
            archiveFile "je201284y.xml";
            system    "2Butanol + cyclohexane";
        }
    );
    fingerprint "5dcd2f1d7a7393b2";   // of the declaration, frozen before the fit

    //  IN-SAMPLE: the model reproducing the very points it was
    //  fitted to.  It is NOT a validation; see the block below.
    weighting     equal;   // chi2 is sum ((P_model - P_exp)/P_exp)^2, dimensionless
    chi2          0.00541268;
    rms_rel       0.01501760;
    nDataPoints   24;
    identifiable  true;
    maxAbsCorr    0.93492789;

    validity
    {
        temperature { min 313.15 K; max 313.15 K; }
        pressure    { min 10221 Pa; max 26172 Pa; }
        note        "the span of the FIT evidence; outside it the pair is an extrapolation";
    }
}

validation
{
    verdict     validationRefused;

    heldOut     none;   // every declared dataset carried \`role fit\`

    acceptance  none;   // no band was declared before the fit, so no
                        // pass/fail may be read out of the residual above
}

curation
{
    rule            "DEV.md 4c C291 (bubble-pressure pairs; every laboratory, graded by C285)";
    evidence        allLaboratories;   // every block fitted, none held out
    objective       twoStage;
    residual        P_bubble;
    residualScale   relative;   // (P_model - P)/P at each point's stated T
    outlierLimit_pct 20;   // |P_model - P|/P after the least-squares stage
    outliersDropped 0;
    pointsKept      24;
    noBubblePoint   0;
    maxRelError_pct 2.0580;
    meanRelError_pct 1.3808;
    acceptance      graded;   // max relative pressure error over the kept points, DEV.md 4c C285 (C291)
    gradeLimits_pct (5 10 20);   // upper limits of clean / warning / severe; above, refused
    grade           clean;
    oneLiquid       true;   // arm (f) over the validity span; a pair that splits ONE liquid is never promoted
    temperatures    1;   // distinct stated temperatures in the evidence
    laboratories    1;   // distinct articles in the evidence
    singleTemperature true;   // true: b/T was fitted at ONE temperature
    singleLaboratory  true;   // true: ONE laboratory's data, nothing to cross-check it
    verdict         accepted;
}
`,Ie=`/*---------------------------------------------------------------------------*\\
  NRTL binary interaction parameters --- diisopropylEther(i) + 2Butanol(j)

  REGRESSED BY CHOUPO'S CURATION PIPELINE (bin/choupo-curate, DEV.md 4c C282;
  record docs/design/binary-pairs-from-open-measurements.md) to measured
  bubble PRESSURES at stated temperatures (P-x, DEV.md 4c C291).  The articles named under \`evidence\` are the
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
  its fitting pipeline (every laboratory fitted to the bubble pressure, outliers beyond
  20 % discarded by name, max |P_model - P|/P over the kept points GRADED
  clean / warning / severe at 5 / 10 / 20 % -- DEV.md 4c C283 amended, C285, C291;
  THIS fit: clean, 0.6399 %; one liquid across its validity span), and NO
  HUMAN HAS REVIEWED IT.  The engine says so on every run that reads it, and
  voices a warning or a severe grade beside it.
  CAUTION: this record rests on ONE temperature and ONE laboratory.
  Nothing was held out: the \`validation {}\` block says so, and the acceptance
  is the \`curation {}\` block.  A curator who reads the series back against the
  articles marks it \`reviewStatus reviewed; humanReviewed true;\`.  Revert with
  \`bin/choupo-curate revert 2Butanol-diisopropylEther\`.

  REPRODUCE: run tutorials/props/curation/curate513_nrtl_diisopropylEther_2Butanol (after \`bin/choupo-curate fetch\` on it); its fit
  writes 2Butanol-diisopropylEther.proposal.dat, which bin/curate/check_regressed_pairs.py holds
  equal to this record.
\\*---------------------------------------------------------------------------*/

recordType binaryInteractionParameters;
schemaVersion 1;

pair { i diisopropylEther; j 2Butanol; }

components  ( diisopropylEther  2Butanol );
model       NRTL;

parameters
{
    i           diisopropylEther;
    j           2Butanol;
    a_ij        0.00000000;
    b_ij        283.46793349;
    a_ji        0.00000000;
    b_ji        46.98716976;
    alpha       0.30000000;
}

provenance
{
    origin        fitted;
    method        "fitParameters(P_bubble), Levenberg-Marquardt";
    methodVersion "choupoProps Choupo-dev";
    fittedInCase  "tutorials/props/curation/curate513_nrtl_diisopropylEther_2Butanol";
    reviewStatus  autoPromoted;
    humanReviewed false;
    fitGrade      clean;   // DEV.md 4c C285 (C291): max |P_model - P|/P over the kept points, graded 5 / 10 / 20 %
    fitGradeMaxRelativeError_pct 0.6399;
    promotedBy    "bin/curate/pairs_px.py promote";
    promotedDate  "2026-11-10";
    reviewReason  "regressed by bin/choupo-curate from archive-transcribed measurements; not yet read back against the articles";
    reuse         "Choupo's own regression; the measured points belong to the cited articles and are not reproduced in this record or this tree";
    fitDate       "2026-11-10";

    evidence
    (
        {
            role      fit;
            dataset   "constant/archiveExtracts/diisopropylEther-2Butanol-bubbleP-je0502896-b3.dat";
            doi       "10.1021/je0502896";
            sha256    "b2135ef6887f98e20d44c0241320ee16c9f7b30fce76774f0bed2d0d89760318";
            provenance measured;
            archiveFile "je0502896.xml";
            system    "diisopropylEther + 2Butanol";
        }
    );
    fingerprint "2daec1890d865a8e";   // of the declaration, frozen before the fit

    //  IN-SAMPLE: the model reproducing the very points it was
    //  fitted to.  It is NOT a validation; see the block below.
    weighting     equal;   // chi2 is sum ((P_model - P_exp)/P_exp)^2, dimensionless
    chi2          0.00071455;
    rms_rel       0.00524240;
    nDataPoints   26;
    identifiable  true;
    maxAbsCorr    0.98533507;

    validity
    {
        temperature { min 313.15 K; max 313.15 K; }
        pressure    { min 10314 Pa; max 36275 Pa; }
        note        "the span of the FIT evidence; outside it the pair is an extrapolation";
    }
}

validation
{
    verdict     validationRefused;

    heldOut     none;   // every declared dataset carried \`role fit\`

    acceptance  none;   // no band was declared before the fit, so no
                        // pass/fail may be read out of the residual above
}

curation
{
    rule            "DEV.md 4c C291 (bubble-pressure pairs; every laboratory, graded by C285)";
    evidence        allLaboratories;   // every block fitted, none held out
    objective       twoStage;
    residual        P_bubble;
    residualScale   relative;   // (P_model - P)/P at each point's stated T
    outlierLimit_pct 20;   // |P_model - P|/P after the least-squares stage
    outliersDropped 0;
    pointsKept      26;
    noBubblePoint   0;
    maxRelError_pct 0.6399;
    meanRelError_pct 0.4994;
    acceptance      graded;   // max relative pressure error over the kept points, DEV.md 4c C285 (C291)
    gradeLimits_pct (5 10 20);   // upper limits of clean / warning / severe; above, refused
    grade           clean;
    oneLiquid       true;   // arm (f) over the validity span; a pair that splits ONE liquid is never promoted
    temperatures    1;   // distinct stated temperatures in the evidence
    laboratories    1;   // distinct articles in the evidence
    singleTemperature true;   // true: b/T was fitted at ONE temperature
    singleLaboratory  true;   // true: ONE laboratory's data, nothing to cross-check it
    verdict         accepted;
}
`,Ne=`/*---------------------------------------------------------------------------*\\
  NRTL binary interaction parameters --- 2Butanol(i) + dimethylCarbonate(j)

  REGRESSED BY CHOUPO'S CURATION PIPELINE (bin/choupo-curate, DEV.md 4c C282;
  record docs/design/binary-pairs-from-open-measurements.md) to measured
  bubble temperatures.  The articles named under \`evidence\` are the
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
  its fitting pipeline (every laboratory fitted, outliers beyond 3 K
  discarded by name, max |T_model - T| over the kept points GRADED
  clean / warning / severe at 1 / 2 / 4 K -- DEV.md 4c C283
  amended, C285, C286; THIS fit: warning, 1.3770 K; one liquid
  across its validity span), and NO HUMAN HAS REVIEWED IT.  The
  engine says so on every run that reads it, and voices a warning
  or a severe grade beside it.
  Nothing was held out: the \`validation {}\` block says so, and the
  acceptance is the \`curation {}\` block.  A curator who reads the series
  back against the articles marks it \`reviewStatus reviewed; humanReviewed
  true;\`.  Revert with \`bin/choupo-curate revert 2Butanol-dimethylCarbonate\`.

  REPRODUCE: run tutorials/props/curation/curate106_nrtl_2Butanol_dimethylCarbonate (after \`bin/choupo-curate fetch\` on it); its fit
  writes 2Butanol-dimethylCarbonate.proposal.dat, which bin/curate/check_regressed_pairs.py holds
  equal to this record.
\\*---------------------------------------------------------------------------*/

recordType binaryInteractionParameters;
schemaVersion 1;

pair { i 2Butanol; j dimethylCarbonate; }

components  ( 2Butanol  dimethylCarbonate );
model       NRTL;

parameters
{
    i           2Butanol;
    j           dimethylCarbonate;
    a_ij        0.00000000;
    b_ij        169.80595451;
    a_ji        0.00000000;
    b_ji        144.11844210;
    alpha       0.30000000;
}

provenance
{
    origin        fitted;
    method        "fitParameters(T_bubble), Levenberg-Marquardt";
    methodVersion "choupoProps Choupo-dev";
    fittedInCase  "tutorials/props/curation/curate106_nrtl_2Butanol_dimethylCarbonate";
    reviewStatus  autoPromoted;
    humanReviewed false;
    fitGrade      warning;   // DEV.md 4c C285 (C286): max |T_model - T| over the kept points, graded 1 / 2 / 4 K
    fitGradeMaxTemperatureError_K 1.3770;
    promotedBy    "bin/choupo-curate pair --promote";
    promotedDate  "2026-11-10";
    reviewReason  "regressed by bin/choupo-curate from archive-transcribed measurements; not yet read back against the articles";
    reuse         "Choupo's own regression; the measured points belong to the cited articles and are not reproduced in this record or this tree";
    fitDate       "2026-11-10";

    evidence
    (
        {
            role      fit;
            dataset   "constant/archiveExtracts/2Butanol-dimethylCarbonate-bubble-j.jct.2011.08.006.dat";
            doi       "10.1016/j.jct.2011.08.006";
            sha256    "682a55d05fe8902bbf42f1d947981fa35b0d90029fa727758bcfb6519f239cc6";
            provenance measured;
            archiveFile "j.jct.2011.08.006.xml";
            system    "2Butanol + dimethylCarbonate";
        }
        {
            role      fit;
            dataset   "constant/archiveExtracts/2Butanol-dimethylCarbonate-bubble-j.jct.2004.09.009.dat";
            doi       "10.1016/j.jct.2004.09.009";
            sha256    "0be6ddde75d592d26de70cdbf06411e5d0bd2c5d9c882258a0fe98754cb80be3";
            provenance measured;
            archiveFile "j.jct.2004.09.009.xml";
            system    "2Butanol + dimethylCarbonate";
            pressure  "101300.000000 Pa";
        }
        {
            role      fit;
            dataset   "constant/archiveExtracts/2Butanol-dimethylCarbonate-bubble-je030131q.dat";
            doi       "10.1021/je030131q";
            sha256    "b41bca23136ec66aba1b6984f5c0f44a5fca02ba9d89bed1e374a726fb032c08";
            provenance measured;
            archiveFile "je030131q.xml";
            system    "2Butanol + dimethylCarbonate";
            pressure  "95800.000000 Pa";
        }
    );
    fingerprint "0d44971a22334799";   // of the declaration, frozen before the fit

    //  IN-SAMPLE: the model reproducing the very points it was
    //  fitted to.  It is NOT a validation; see the block below.
    weighting     uncertainty;   // chi2 is sum ((T_model - T_exp)/U)^2, dimensionless
    chi2          471.77603335;
    rms_K         0.44253085;
    nDataPoints   111;
    identifiable  true;
    maxAbsCorr    0.99470754;

    validity
    {
        temperature { min 335.83 K; max 371.33 K; }
        pressure    { min 40000 Pa; max 101300 Pa; }
        note        "the span of the FIT evidence; outside it the pair is an extrapolation";
    }
}

validation
{
    verdict     validationRefused;

    heldOut     none;   // every declared dataset carried \`role fit\`

    acceptance  none;   // no band was declared before the fit, so no
                        // pass/fail may be read out of the residual above
}

curation
{
    rule            "DEV.md 4c C283 (amended) + C284, graded by C285 (C286)";
    evidence        allLaboratories;   // every study fitted, none held out
    objective       twoStage;
    outlierLimit    3 K;   // |T_model - T| after the least-squares stage
    outliersDropped 0;
    pointsKept      111;
    noBubblePoint   0;
    maxAbsError     1.3770 K;
    meanAbsError    0.3682 K;
    acceptance      graded;   // max |T_model - T| over the kept points, DEV.md 4c C285 (C286)
    gradeLimits_K   (1 2 4);   // upper limits of clean / warning / severe; above, refused
    grade           warning;
    oneLiquid       true;   // arm (f) over the validity span; a pair that splits ONE liquid is never promoted, whatever its grade
    verdict         accepted;
}
`,Oe=`/*---------------------------------------------------------------------------*\\
  NRTL binary interaction parameters --- methanol(i) + 2Butanol(j)

  REGRESSED BY CHOUPO'S CURATION PIPELINE (bin/choupo-curate, DEV.md 4c C282;
  record docs/design/binary-pairs-from-open-measurements.md) to measured
  bubble temperatures.  The articles named under \`evidence\` are the
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
  its fitting pipeline (every laboratory fitted, outliers beyond 3 K
  discarded by name, max |T_model - T| over the kept points GRADED
  clean / warning / severe at 1 / 2 / 4 K -- DEV.md 4c C283
  amended, C285, C286; THIS fit: warning, 1.0867 K; one liquid
  across its validity span), and NO HUMAN HAS REVIEWED IT.  The
  engine says so on every run that reads it, and voices a warning
  or a severe grade beside it.
  Nothing was held out: the \`validation {}\` block says so, and the
  acceptance is the \`curation {}\` block.  A curator who reads the series
  back against the articles marks it \`reviewStatus reviewed; humanReviewed
  true;\`.  Revert with \`bin/choupo-curate revert 2Butanol-methanol\`.

  REPRODUCE: run tutorials/props/curation/curate133_nrtl_methanol_2Butanol (after \`bin/choupo-curate fetch\` on it); its fit
  writes 2Butanol-methanol.proposal.dat, which bin/curate/check_regressed_pairs.py holds
  equal to this record.
\\*---------------------------------------------------------------------------*/

recordType binaryInteractionParameters;
schemaVersion 1;

pair { i methanol; j 2Butanol; }

components  ( methanol  2Butanol );
model       NRTL;

parameters
{
    i           methanol;
    j           2Butanol;
    a_ij        0.00000000;
    b_ij        149.25467491;
    a_ji        0.00000000;
    b_ji        -147.95171669;
    alpha       0.30000000;
}

provenance
{
    origin        fitted;
    method        "fitParameters(T_bubble), Levenberg-Marquardt";
    methodVersion "choupoProps Choupo-dev";
    fittedInCase  "tutorials/props/curation/curate133_nrtl_methanol_2Butanol";
    reviewStatus  autoPromoted;
    humanReviewed false;
    fitGrade      warning;   // DEV.md 4c C285 (C286): max |T_model - T| over the kept points, graded 1 / 2 / 4 K
    fitGradeMaxTemperatureError_K 1.0867;
    promotedBy    "bin/choupo-curate pair --promote";
    promotedDate  "2026-11-10";
    reviewReason  "regressed by bin/choupo-curate from archive-transcribed measurements; not yet read back against the articles";
    reuse         "Choupo's own regression; the measured points belong to the cited articles and are not reproduced in this record or this tree";
    fitDate       "2026-11-10";

    evidence
    (
        {
            role      fit;
            dataset   "constant/archiveExtracts/methanol-2Butanol-bubble-j.jct.2013.12.021.dat";
            doi       "10.1016/j.jct.2013.12.021";
            sha256    "ff7d8a50395b4b907d9a299bb4508a614304b7d903c0307a56d01efc6a650370";
            provenance measured;
            archiveFile "j.jct.2013.12.021.xml";
            system    "methanol + 2Butanol";
            pressure  "101330.000000 Pa";
        }
        {
            role      fit;
            dataset   "constant/archiveExtracts/methanol-2Butanol-bubble-acs.jced.8b00499.dat";
            doi       "10.1021/acs.jced.8b00499";
            sha256    "7c8ad5774fc5451236ce514876303010a98893ffd65bf223164ceeffbe3d9b78";
            provenance measured;
            archiveFile "acs.jced.8b00499.xml";
            system    "methanol + 2Butanol";
            pressure  "101300.000000 Pa";
        }
    );
    fingerprint "1008118377732559";   // of the declaration, frozen before the fit

    //  IN-SAMPLE: the model reproducing the very points it was
    //  fitted to.  It is NOT a validation; see the block below.
    weighting     uncertainty;   // chi2 is sum ((T_model - T_exp)/U)^2, dimensionless
    chi2          48.84514240;
    rms_K         0.34289405;
    nDataPoints   40;
    identifiable  false;
    maxAbsCorr    0.99999996;

    validity
    {
        temperature { min 337.95 K; max 368.15 K; }
        pressure    { min 101300 Pa; max 101330 Pa; }
        note        "the span of the FIT evidence; outside it the pair is an extrapolation";
    }
}

validation
{
    verdict     validationRefused;

    heldOut     none;   // every declared dataset carried \`role fit\`

    acceptance  none;   // no band was declared before the fit, so no
                        // pass/fail may be read out of the residual above
}

curation
{
    rule            "DEV.md 4c C283 (amended) + C284, graded by C285 (C286)";
    evidence        allLaboratories;   // every study fitted, none held out
    objective       twoStage;
    outlierLimit    3 K;   // |T_model - T| after the least-squares stage
    outliersDropped 0;
    pointsKept      40;
    noBubblePoint   0;
    maxAbsError     1.0867 K;
    meanAbsError    0.2336 K;
    acceptance      graded;   // max |T_model - T| over the kept points, DEV.md 4c C285 (C286)
    gradeLimits_K   (1 2 4);   // upper limits of clean / warning / severe; above, refused
    grade           warning;
    oneLiquid       true;   // arm (f) over the validity span; a pair that splits ONE liquid is never promoted, whatever its grade
    verdict         accepted;
}
`,Se=`/*---------------------------------------------------------------------------*\\
  NRTL binary interaction parameters --- 2Butanol(i) + nDodecane(j)

  REGRESSED BY CHOUPO'S CURATION PIPELINE (bin/choupo-curate, DEV.md 4c C282;
  record docs/design/binary-pairs-from-open-measurements.md) to measured
  bubble PRESSURES at stated temperatures (P-x, DEV.md 4c C291).  The articles named under \`evidence\` are the
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
  its fitting pipeline (every laboratory fitted to the bubble pressure, outliers beyond
  20 % discarded by name, max |P_model - P|/P over the kept points GRADED
  clean / warning / severe at 5 / 10 / 20 % -- DEV.md 4c C283 amended, C285, C291;
  THIS fit: warning, 7.4124 %; one liquid across its validity span), and NO
  HUMAN HAS REVIEWED IT.  The engine says so on every run that reads it, and
  voices a warning or a severe grade beside it.
  CAUTION: this record rests on ONE temperature and ONE laboratory.
  Nothing was held out: the \`validation {}\` block says so, and the acceptance
  is the \`curation {}\` block.  A curator who reads the series back against the
  articles marks it \`reviewStatus reviewed; humanReviewed true;\`.  Revert with
  \`bin/choupo-curate revert 2Butanol-nDodecane\`.

  REPRODUCE: run tutorials/props/curation/curate535_nrtl_2Butanol_nDodecane (after \`bin/choupo-curate fetch\` on it); its fit
  writes 2Butanol-nDodecane.proposal.dat, which bin/curate/check_regressed_pairs.py holds
  equal to this record.
\\*---------------------------------------------------------------------------*/

recordType binaryInteractionParameters;
schemaVersion 1;

pair { i 2Butanol; j nDodecane; }

components  ( 2Butanol  nDodecane );
model       NRTL;

parameters
{
    i           2Butanol;
    j           nDodecane;
    a_ij        0.00000000;
    b_ij        147.18964138;
    a_ji        0.00000000;
    b_ji        593.69347729;
    alpha       0.30000000;
}

provenance
{
    origin        fitted;
    method        "fitParameters(P_bubble), Levenberg-Marquardt";
    methodVersion "choupoProps Choupo-dev";
    fittedInCase  "tutorials/props/curation/curate535_nrtl_2Butanol_nDodecane";
    reviewStatus  autoPromoted;
    humanReviewed false;
    fitGrade      warning;   // DEV.md 4c C285 (C291): max |P_model - P|/P over the kept points, graded 5 / 10 / 20 %
    fitGradeMaxRelativeError_pct 7.4124;
    promotedBy    "bin/curate/pairs_px.py promote";
    promotedDate  "2026-11-10";
    reviewReason  "regressed by bin/choupo-curate from archive-transcribed measurements; not yet read back against the articles";
    reuse         "Choupo's own regression; the measured points belong to the cited articles and are not reproduced in this record or this tree";
    fitDate       "2026-11-10";

    evidence
    (
        {
            role      fit;
            dataset   "constant/archiveExtracts/2Butanol-nDodecane-bubbleP-je201284y-b10.dat";
            doi       "10.1021/je201284y";
            sha256    "ef1706a2a3cd9237639a842b124b07d2059f542451ca22f861316c8d74a0f062";
            provenance measured;
            archiveFile "je201284y.xml";
            system    "2Butanol + nDodecane";
        }
    );
    fingerprint "e4ad34787c040498";   // of the declaration, frozen before the fit

    //  IN-SAMPLE: the model reproducing the very points it was
    //  fitted to.  It is NOT a validation; see the block below.
    weighting     equal;   // chi2 is sum ((P_model - P_exp)/P_exp)^2, dimensionless
    chi2          0.07043382;
    rms_rel       0.05417326;
    nDataPoints   24;
    identifiable  true;
    maxAbsCorr    0.88443200;

    validity
    {
        temperature { min 313.15 K; max 313.15 K; }
        pressure    { min 2449 Pa; max 5837 Pa; }
        note        "the span of the FIT evidence; outside it the pair is an extrapolation";
    }
}

validation
{
    verdict     validationRefused;

    heldOut     none;   // every declared dataset carried \`role fit\`

    acceptance  none;   // no band was declared before the fit, so no
                        // pass/fail may be read out of the residual above
}

curation
{
    rule            "DEV.md 4c C291 (bubble-pressure pairs; every laboratory, graded by C285)";
    evidence        allLaboratories;   // every block fitted, none held out
    objective       twoStage;
    residual        P_bubble;
    residualScale   relative;   // (P_model - P)/P at each point's stated T
    outlierLimit_pct 20;   // |P_model - P|/P after the least-squares stage
    outliersDropped 0;
    pointsKept      24;
    noBubblePoint   0;
    maxRelError_pct 7.4124;
    meanRelError_pct 4.8978;
    acceptance      graded;   // max relative pressure error over the kept points, DEV.md 4c C285 (C291)
    gradeLimits_pct (5 10 20);   // upper limits of clean / warning / severe; above, refused
    grade           warning;
    oneLiquid       true;   // arm (f) over the validity span; a pair that splits ONE liquid is never promoted
    temperatures    1;   // distinct stated temperatures in the evidence
    laboratories    1;   // distinct articles in the evidence
    singleTemperature true;   // true: b/T was fitted at ONE temperature
    singleLaboratory  true;   // true: ONE laboratory's data, nothing to cross-check it
    verdict         accepted;
}
`,xe=`/*---------------------------------------------------------------------------*\\
  NRTL binary interaction parameters --- nHexane(i) + 2Butanol(j)

  REGRESSED BY CHOUPO'S CURATION PIPELINE (bin/choupo-curate, DEV.md 4c C282;
  record docs/design/binary-pairs-from-open-measurements.md) to measured
  bubble PRESSURES at stated temperatures (P-x, DEV.md 4c C291).  The articles named under \`evidence\` are the
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
  its fitting pipeline (every laboratory fitted to the bubble pressure, outliers beyond
  20 % discarded by name, max |P_model - P|/P over the kept points GRADED
  clean / warning / severe at 5 / 10 / 20 % -- DEV.md 4c C283 amended, C285, C291;
  THIS fit: clean, 4.8999 %; one liquid across its validity span), and NO
  HUMAN HAS REVIEWED IT.  The engine says so on every run that reads it, and
  voices a warning or a severe grade beside it.
  CAUTION: this record rests on ONE temperature and ONE laboratory.
  Nothing was held out: the \`validation {}\` block says so, and the acceptance
  is the \`curation {}\` block.  A curator who reads the series back against the
  articles marks it \`reviewStatus reviewed; humanReviewed true;\`.  Revert with
  \`bin/choupo-curate revert 2Butanol-nHexane\`.

  REPRODUCE: run tutorials/props/curation/curate500_nrtl_nHexane_2Butanol (after \`bin/choupo-curate fetch\` on it); its fit
  writes 2Butanol-nHexane.proposal.dat, which bin/curate/check_regressed_pairs.py holds
  equal to this record.
\\*---------------------------------------------------------------------------*/

recordType binaryInteractionParameters;
schemaVersion 1;

pair { i nHexane; j 2Butanol; }

components  ( nHexane  2Butanol );
model       NRTL;

parameters
{
    i           nHexane;
    j           2Butanol;
    a_ij        0.00000000;
    b_ij        736.48311521;
    a_ji        0.00000000;
    b_ji        38.91387499;
    alpha       0.30000000;
}

provenance
{
    origin        fitted;
    method        "fitParameters(P_bubble), Levenberg-Marquardt";
    methodVersion "choupoProps Choupo-dev";
    fittedInCase  "tutorials/props/curation/curate500_nrtl_nHexane_2Butanol";
    reviewStatus  autoPromoted;
    humanReviewed false;
    fitGrade      clean;   // DEV.md 4c C285 (C291): max |P_model - P|/P over the kept points, graded 5 / 10 / 20 %
    fitGradeMaxRelativeError_pct 4.8999;
    promotedBy    "bin/curate/pairs_px.py promote";
    promotedDate  "2026-11-10";
    reviewReason  "regressed by bin/choupo-curate from archive-transcribed measurements; not yet read back against the articles";
    reuse         "Choupo's own regression; the measured points belong to the cited articles and are not reproduced in this record or this tree";
    fitDate       "2026-11-10";

    evidence
    (
        {
            role      fit;
            dataset   "constant/archiveExtracts/nHexane-2Butanol-bubbleP-acs.jced.9b00102-b15.dat";
            doi       "10.1021/acs.jced.9b00102";
            sha256    "487db9b9cafb1b083818b96a38d6740ad07d81e1e79f1365575fa2907f10f157";
            provenance measured;
            archiveFile "acs.jced.9b00102.xml";
            system    "nHexane + 2Butanol";
        }
        {
            role      fit;
            dataset   "constant/archiveExtracts/nHexane-2Butanol-bubbleP-j.fluid.2011.08.009-b6.dat";
            doi       "10.1016/j.fluid.2011.08.009";
            sha256    "22f5851c0d467d9f2c31bf010aa1b3e6352d65d7f37f2814a7cff0135b55a3ef";
            provenance measured;
            archiveFile "j.fluid.2011.08.009.xml";
            system    "nHexane + 2Butanol";
        }
    );
    fingerprint "fff91d54220c2290";   // of the declaration, frozen before the fit

    //  IN-SAMPLE: the model reproducing the very points it was
    //  fitted to.  It is NOT a validation; see the block below.
    weighting     equal;   // chi2 is sum ((P_model - P_exp)/P_exp)^2, dimensionless
    chi2          0.07366542;
    rms_rel       0.03563837;
    nDataPoints   58;
    identifiable  true;
    maxAbsCorr    0.88311001;

    validity
    {
        temperature { min 329.15 K; max 329.15 K; }
        pressure    { min 14560 Pa; max 68680 Pa; }
        note        "the span of the FIT evidence; outside it the pair is an extrapolation";
    }
}

validation
{
    verdict     validationRefused;

    heldOut     none;   // every declared dataset carried \`role fit\`

    acceptance  none;   // no band was declared before the fit, so no
                        // pass/fail may be read out of the residual above
}

curation
{
    rule            "DEV.md 4c C291 (bubble-pressure pairs; every laboratory, graded by C285)";
    evidence        allLaboratories;   // every block fitted, none held out
    objective       twoStage;
    residual        P_bubble;
    residualScale   relative;   // (P_model - P)/P at each point's stated T
    outlierLimit_pct 20;   // |P_model - P|/P after the least-squares stage
    outliersDropped 26;
    pointsKept      58;
    noBubblePoint   0;
    maxRelError_pct 4.8999;
    meanRelError_pct 3.1714;
    acceptance      graded;   // max relative pressure error over the kept points, DEV.md 4c C285 (C291)
    gradeLimits_pct (5 10 20);   // upper limits of clean / warning / severe; above, refused
    grade           clean;
    oneLiquid       true;   // arm (f) over the validity span; a pair that splits ONE liquid is never promoted
    temperatures    1;   // distinct stated temperatures in the evidence
    laboratories    1;   // distinct articles in the evidence
    singleTemperature true;   // true: b/T was fitted at ONE temperature
    singleLaboratory  true;   // true: ONE laboratory's data, nothing to cross-check it
    verdict         accepted;
}
`,Ae=`/*---------------------------------------------------------------------------*\\
  NRTL binary interaction parameters --- 2Butanol(i) + nNDimethylformamide(j)

  REGRESSED BY CHOUPO'S CURATION PIPELINE (bin/choupo-curate, DEV.md 4c C282;
  record docs/design/binary-pairs-from-open-measurements.md) to measured
  bubble temperatures.  The articles named under \`evidence\` are the
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
  its fitting pipeline (every laboratory fitted, outliers beyond 3 K
  discarded by name, max |T_model - T| over the kept points GRADED
  clean / warning / severe at 1 / 2 / 4 K -- DEV.md 4c C283
  amended, C285, C286; THIS fit: severe, 2.5659 K; one liquid
  across its validity span), and NO HUMAN HAS REVIEWED IT.  The
  engine says so on every run that reads it, and voices a warning
  or a severe grade beside it.
  Nothing was held out: the \`validation {}\` block says so, and the
  acceptance is the \`curation {}\` block.  A curator who reads the series
  back against the articles marks it \`reviewStatus reviewed; humanReviewed
  true;\`.  Revert with \`bin/choupo-curate revert 2Butanol-nNDimethylformamide\`.

  REPRODUCE: run tutorials/props/curation/curate135_nrtl_2Butanol_nNDimethylformamide (after \`bin/choupo-curate fetch\` on it); its fit
  writes 2Butanol-nNDimethylformamide.proposal.dat, which bin/curate/check_regressed_pairs.py holds
  equal to this record.
\\*---------------------------------------------------------------------------*/

recordType binaryInteractionParameters;
schemaVersion 1;

pair { i 2Butanol; j nNDimethylformamide; }

components  ( 2Butanol  nNDimethylformamide );
model       NRTL;

parameters
{
    i           2Butanol;
    j           nNDimethylformamide;
    a_ij        0.00000000;
    b_ij        348.61756060;
    a_ji        0.00000000;
    b_ji        -368.32636803;
    alpha       0.30000000;
}

provenance
{
    origin        fitted;
    method        "fitParameters(T_bubble), Levenberg-Marquardt";
    methodVersion "choupoProps Choupo-dev";
    fittedInCase  "tutorials/props/curation/curate135_nrtl_2Butanol_nNDimethylformamide";
    reviewStatus  autoPromoted;
    humanReviewed false;
    fitGrade      severe;   // DEV.md 4c C285 (C286): max |T_model - T| over the kept points, graded 1 / 2 / 4 K
    fitGradeMaxTemperatureError_K 2.5659;
    promotedBy    "bin/choupo-curate pair --promote";
    promotedDate  "2026-11-10";
    reviewReason  "regressed by bin/choupo-curate from archive-transcribed measurements; not yet read back against the articles";
    reuse         "Choupo's own regression; the measured points belong to the cited articles and are not reproduced in this record or this tree";
    fitDate       "2026-11-10";

    evidence
    (
        {
            role      fit;
            dataset   "constant/archiveExtracts/2Butanol-nNDimethylformamide-bubble-j.fluid.2014.09.021.dat";
            doi       "10.1016/j.fluid.2014.09.021";
            sha256    "7d5e913c8e5e2fab06c7c0f21aaa052c92e42fe000524d1b2ef7b2cc1a191cfc";
            provenance measured;
            archiveFile "j.fluid.2014.09.021.xml";
            system    "2Butanol + nNDimethylformamide";
            pressure  "101300.000000 Pa";
        }
        {
            role      fit;
            dataset   "constant/archiveExtracts/2Butanol-nNDimethylformamide-bubble-j.fluid.2006.08.018.dat";
            doi       "10.1016/j.fluid.2006.08.018";
            sha256    "efd075a1a7973909792b56e5f48979fc69b4de7609c3c07c261b8ab7be59e044";
            provenance measured;
            archiveFile "j.fluid.2006.08.018.xml";
            system    "2Butanol + nNDimethylformamide";
            pressure  "95500.000000 Pa";
        }
    );
    fingerprint "7b5df2c87399a732";   // of the declaration, frozen before the fit

    //  IN-SAMPLE: the model reproducing the very points it was
    //  fitted to.  It is NOT a validation; see the block below.
    weighting     uncertainty;   // chi2 is sum ((T_model - T_exp)/U)^2, dimensionless
    chi2          255.98093608;
    rms_K         1.46539903;
    nDataPoints   40;
    identifiable  false;
    maxAbsCorr    0.99999698;

    validity
    {
        temperature { min 372.35 K; max 424.08 K; }
        pressure    { min 95500 Pa; max 101300 Pa; }
        note        "the span of the FIT evidence; outside it the pair is an extrapolation";
    }
}

validation
{
    verdict     validationRefused;

    heldOut     none;   // every declared dataset carried \`role fit\`

    acceptance  none;   // no band was declared before the fit, so no
                        // pass/fail may be read out of the residual above
}

curation
{
    rule            "DEV.md 4c C283 (amended) + C284, graded by C285 (C286)";
    evidence        allLaboratories;   // every study fitted, none held out
    objective       twoStage;
    outlierLimit    3 K;   // |T_model - T| after the least-squares stage
    outliersDropped 0;
    pointsKept      40;
    noBubblePoint   0;
    maxAbsError     2.5659 K;
    meanAbsError    1.2906 K;
    acceptance      graded;   // max |T_model - T| over the kept points, DEV.md 4c C285 (C286)
    gradeLimits_K   (1 2 4);   // upper limits of clean / warning / severe; above, refused
    grade           severe;
    oneLiquid       true;   // arm (f) over the validity span; a pair that splits ONE liquid is never promoted, whatever its grade
    verdict         accepted;
}
`,Le=`/*---------------------------------------------------------------------------*\\
  NRTL binary interaction parameters --- 2Butanol(i) + toluene(j)

  REGRESSED BY CHOUPO'S CURATION PIPELINE (bin/choupo-curate, DEV.md 4c C282;
  record docs/design/binary-pairs-from-open-measurements.md) to measured
  bubble PRESSURES at stated temperatures (P-x, DEV.md 4c C291).  The articles named under \`evidence\` are the
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
  its fitting pipeline (every laboratory fitted to the bubble pressure, outliers beyond
  20 % discarded by name, max |P_model - P|/P over the kept points GRADED
  clean / warning / severe at 5 / 10 / 20 % -- DEV.md 4c C283 amended, C285, C291;
  THIS fit: clean, 1.9172 %; one liquid across its validity span), and NO
  HUMAN HAS REVIEWED IT.  The engine says so on every run that reads it, and
  voices a warning or a severe grade beside it.
  CAUTION: this record rests on ONE temperature and ONE laboratory.
  Nothing was held out: the \`validation {}\` block says so, and the acceptance
  is the \`curation {}\` block.  A curator who reads the series back against the
  articles marks it \`reviewStatus reviewed; humanReviewed true;\`.  Revert with
  \`bin/choupo-curate revert 2Butanol-toluene\`.

  REPRODUCE: run tutorials/props/curation/curate536_nrtl_2Butanol_toluene (after \`bin/choupo-curate fetch\` on it); its fit
  writes 2Butanol-toluene.proposal.dat, which bin/curate/check_regressed_pairs.py holds
  equal to this record.
\\*---------------------------------------------------------------------------*/

recordType binaryInteractionParameters;
schemaVersion 1;

pair { i 2Butanol; j toluene; }

components  ( 2Butanol  toluene );
model       NRTL;

parameters
{
    i           2Butanol;
    j           toluene;
    a_ij        0.00000000;
    b_ij        150.57289302;
    a_ji        0.00000000;
    b_ji        380.05286146;
    alpha       0.30000000;
}

provenance
{
    origin        fitted;
    method        "fitParameters(P_bubble), Levenberg-Marquardt";
    methodVersion "choupoProps Choupo-dev";
    fittedInCase  "tutorials/props/curation/curate536_nrtl_2Butanol_toluene";
    reviewStatus  autoPromoted;
    humanReviewed false;
    fitGrade      clean;   // DEV.md 4c C285 (C291): max |P_model - P|/P over the kept points, graded 5 / 10 / 20 %
    fitGradeMaxRelativeError_pct 1.9172;
    promotedBy    "bin/curate/pairs_px.py promote";
    promotedDate  "2026-11-10";
    reviewReason  "regressed by bin/choupo-curate from archive-transcribed measurements; not yet read back against the articles";
    reuse         "Choupo's own regression; the measured points belong to the cited articles and are not reproduced in this record or this tree";
    fitDate       "2026-11-10";

    evidence
    (
        {
            role      fit;
            dataset   "constant/archiveExtracts/2Butanol-toluene-bubbleP-je201284y-b8.dat";
            doi       "10.1021/je201284y";
            sha256    "ef1706a2a3cd9237639a842b124b07d2059f542451ca22f861316c8d74a0f062";
            provenance measured;
            archiveFile "je201284y.xml";
            system    "2Butanol + toluene";
        }
    );
    fingerprint "d9b41022b0c9e364";   // of the declaration, frozen before the fit

    //  IN-SAMPLE: the model reproducing the very points it was
    //  fitted to.  It is NOT a validation; see the block below.
    weighting     equal;   // chi2 is sum ((P_model - P_exp)/P_exp)^2, dimensionless
    chi2          0.00480596;
    rms_rel       0.01415092;
    nDataPoints   24;
    identifiable  true;
    maxAbsCorr    0.98389650;

    validity
    {
        temperature { min 313.15 K; max 313.15 K; }
        pressure    { min 7399 Pa; max 10104 Pa; }
        note        "the span of the FIT evidence; outside it the pair is an extrapolation";
    }
}

validation
{
    verdict     validationRefused;

    heldOut     none;   // every declared dataset carried \`role fit\`

    acceptance  none;   // no band was declared before the fit, so no
                        // pass/fail may be read out of the residual above
}

curation
{
    rule            "DEV.md 4c C291 (bubble-pressure pairs; every laboratory, graded by C285)";
    evidence        allLaboratories;   // every block fitted, none held out
    objective       twoStage;
    residual        P_bubble;
    residualScale   relative;   // (P_model - P)/P at each point's stated T
    outlierLimit_pct 20;   // |P_model - P|/P after the least-squares stage
    outliersDropped 0;
    pointsKept      24;
    noBubblePoint   0;
    maxRelError_pct 1.9172;
    meanRelError_pct 1.3184;
    acceptance      graded;   // max relative pressure error over the kept points, DEV.md 4c C285 (C291)
    gradeLimits_pct (5 10 20);   // upper limits of clean / warning / severe; above, refused
    grade           clean;
    oneLiquid       true;   // arm (f) over the validity span; a pair that splits ONE liquid is never promoted
    temperatures    1;   // distinct stated temperatures in the evidence
    laboratories    1;   // distinct articles in the evidence
    singleTemperature true;   // true: b/T was fitted at ONE temperature
    singleLaboratory  true;   // true: ONE laboratory's data, nothing to cross-check it
    verdict         accepted;
}
`,ke=`/*---------------------------------------------------------------------------*\\
  NRTL binary interaction parameters --- ethanol(i) + 2Methyl1Butanol(j)

  REGRESSED BY CHOUPO'S CURATION PIPELINE (bin/choupo-curate, DEV.md 4c C282;
  record docs/design/binary-pairs-from-open-measurements.md) to measured
  bubble temperatures.  The articles named under \`evidence\` are the
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
  its fitting pipeline (every laboratory fitted, outliers beyond 3 K
  discarded by name, max |T_model - T| over the kept points GRADED
  clean / warning / severe at 1 / 2 / 4 K -- DEV.md 4c C283
  amended, C285, C286; THIS fit: clean, 0.7187 K; one liquid
  across its validity span), and NO HUMAN HAS REVIEWED IT.  The
  engine says so on every run that reads it, and voices a warning
  or a severe grade beside it.
  Nothing was held out: the \`validation {}\` block says so, and the
  acceptance is the \`curation {}\` block.  A curator who reads the series
  back against the articles marks it \`reviewStatus reviewed; humanReviewed
  true;\`.  Revert with \`bin/choupo-curate revert 2Methyl1Butanol-ethanol\`.

  REPRODUCE: run tutorials/props/curation/curate125_nrtl_ethanol_2Methyl1Butanol (after \`bin/choupo-curate fetch\` on it); its fit
  writes 2Methyl1Butanol-ethanol.proposal.dat, which bin/curate/check_regressed_pairs.py holds
  equal to this record.
\\*---------------------------------------------------------------------------*/

recordType binaryInteractionParameters;
schemaVersion 1;

pair { i ethanol; j 2Methyl1Butanol; }

components  ( ethanol  2Methyl1Butanol );
model       NRTL;

parameters
{
    i           ethanol;
    j           2Methyl1Butanol;
    a_ij        0.00000000;
    b_ij        444.70971100;
    a_ji        0.00000000;
    b_ji        -300.10787539;
    alpha       0.30000000;
}

provenance
{
    origin        fitted;
    method        "fitParameters(T_bubble), Levenberg-Marquardt";
    methodVersion "choupoProps Choupo-dev";
    fittedInCase  "tutorials/props/curation/curate125_nrtl_ethanol_2Methyl1Butanol";
    reviewStatus  autoPromoted;
    humanReviewed false;
    fitGrade      clean;   // DEV.md 4c C285 (C286): max |T_model - T| over the kept points, graded 1 / 2 / 4 K
    fitGradeMaxTemperatureError_K 0.7187;
    promotedBy    "bin/choupo-curate pair --promote";
    promotedDate  "2026-11-10";
    reviewReason  "regressed by bin/choupo-curate from archive-transcribed measurements; not yet read back against the articles";
    reuse         "Choupo's own regression; the measured points belong to the cited articles and are not reproduced in this record or this tree";
    fitDate       "2026-11-10";

    evidence
    (
        {
            role      fit;
            dataset   "constant/archiveExtracts/ethanol-2Methyl1Butanol-bubble-je010272x.dat";
            doi       "10.1021/je010272x";
            sha256    "18c319646239d2662c4491d30ebfe17e6263c2751e6a5e918d90ba8e708694d0";
            provenance measured;
            archiveFile "je010272x.xml";
            system    "ethanol + 2Methyl1Butanol";
        }
        {
            role      fit;
            dataset   "constant/archiveExtracts/ethanol-2Methyl1Butanol-bubble-je0500330.dat";
            doi       "10.1021/je0500330";
            sha256    "e9ceb5fe6add7aeefb10d4f77b71534f2d6302a1546bbb80bfa449693c3f8864";
            provenance measured;
            archiveFile "je0500330.xml";
            system    "ethanol + 2Methyl1Butanol";
            pressure  "101300.000000 Pa";
        }
    );
    fingerprint "b57a90fff9971061";   // of the declaration, frozen before the fit

    //  IN-SAMPLE: the model reproducing the very points it was
    //  fitted to.  It is NOT a validation; see the block below.
    weighting     uncertainty;   // chi2 is sum ((T_model - T_exp)/U)^2, dimensionless
    chi2          44.30928184;
    rms_K         0.31433057;
    nDataPoints   59;
    identifiable  true;
    maxAbsCorr    0.99732398;

    validity
    {
        temperature { min 327.65 K; max 398.77 K; }
        pressure    { min 33300 Pa; max 101300 Pa; }
        note        "the span of the FIT evidence; outside it the pair is an extrapolation";
    }
}

validation
{
    verdict     validationRefused;

    heldOut     none;   // every declared dataset carried \`role fit\`

    acceptance  none;   // no band was declared before the fit, so no
                        // pass/fail may be read out of the residual above
}

curation
{
    rule            "DEV.md 4c C283 (amended) + C284, graded by C285 (C286)";
    evidence        allLaboratories;   // every study fitted, none held out
    objective       twoStage;
    outlierLimit    3 K;   // |T_model - T| after the least-squares stage
    outliersDropped 0;
    pointsKept      59;
    noBubblePoint   0;
    maxAbsError     0.7187 K;
    meanAbsError    0.2636 K;
    acceptance      graded;   // max |T_model - T| over the kept points, DEV.md 4c C285 (C286)
    gradeLimits_K   (1 2 4);   // upper limits of clean / warning / severe; above, refused
    grade           clean;
    oneLiquid       true;   // arm (f) over the validity span; a pair that splits ONE liquid is never promoted, whatever its grade
    verdict         accepted;
}
`,Me=`/*---------------------------------------------------------------------------*\\
  NRTL binary interaction parameters --- benzene(i) + 2Methyl1Propanol(j)

  REGRESSED BY CHOUPO'S CURATION PIPELINE (bin/choupo-curate, DEV.md 4c C282;
  record docs/design/binary-pairs-from-open-measurements.md) to measured
  bubble PRESSURES at stated temperatures (P-x, DEV.md 4c C291).  The articles named under \`evidence\` are the
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
  its fitting pipeline (every laboratory fitted to the bubble pressure, outliers beyond
  20 % discarded by name, max |P_model - P|/P over the kept points GRADED
  clean / warning / severe at 5 / 10 / 20 % -- DEV.md 4c C283 amended, C285, C291;
  THIS fit: clean, 1.5457 %; one liquid across its validity span), and NO
  HUMAN HAS REVIEWED IT.  The engine says so on every run that reads it, and
  voices a warning or a severe grade beside it.
  CAUTION: this record rests on ONE temperature and ONE laboratory.
  Nothing was held out: the \`validation {}\` block says so, and the acceptance
  is the \`curation {}\` block.  A curator who reads the series back against the
  articles marks it \`reviewStatus reviewed; humanReviewed true;\`.  Revert with
  \`bin/choupo-curate revert 2Methyl1Propanol-benzene\`.

  REPRODUCE: run tutorials/props/curation/curate537_nrtl_benzene_2Methyl1Propanol (after \`bin/choupo-curate fetch\` on it); its fit
  writes 2Methyl1Propanol-benzene.proposal.dat, which bin/curate/check_regressed_pairs.py holds
  equal to this record.
\\*---------------------------------------------------------------------------*/

recordType binaryInteractionParameters;
schemaVersion 1;

pair { i benzene; j 2Methyl1Propanol; }

components  ( benzene  2Methyl1Propanol );
model       NRTL;

parameters
{
    i           benzene;
    j           2Methyl1Propanol;
    a_ij        0.00000000;
    b_ij        535.30988910;
    a_ji        0.00000000;
    b_ji        62.83343306;
    alpha       0.30000000;
}

provenance
{
    origin        fitted;
    method        "fitParameters(P_bubble), Levenberg-Marquardt";
    methodVersion "choupoProps Choupo-dev";
    fittedInCase  "tutorials/props/curation/curate537_nrtl_benzene_2Methyl1Propanol";
    reviewStatus  autoPromoted;
    humanReviewed false;
    fitGrade      clean;   // DEV.md 4c C285 (C291): max |P_model - P|/P over the kept points, graded 5 / 10 / 20 %
    fitGradeMaxRelativeError_pct 1.5457;
    promotedBy    "bin/curate/pairs_px.py promote";
    promotedDate  "2026-11-10";
    reviewReason  "regressed by bin/choupo-curate from archive-transcribed measurements; not yet read back against the articles";
    reuse         "Choupo's own regression; the measured points belong to the cited articles and are not reproduced in this record or this tree";
    fitDate       "2026-11-10";

    evidence
    (
        {
            role      fit;
            dataset   "constant/archiveExtracts/benzene-2Methyl1Propanol-bubbleP-j.fluid.2005.11.017-b4.dat";
            doi       "10.1016/j.fluid.2005.11.017";
            sha256    "bdd27e2405e1e270a7e173d7d14fefbc5cd0ac0bf877faac4fac8fd7614d13a5";
            provenance measured;
            archiveFile "j.fluid.2005.11.017.xml";
            system    "benzene + 2Methyl1Propanol";
        }
    );
    fingerprint "971ed41bcd1e9e87";   // of the declaration, frozen before the fit

    //  IN-SAMPLE: the model reproducing the very points it was
    //  fitted to.  It is NOT a validation; see the block below.
    weighting     equal;   // chi2 is sum ((P_model - P_exp)/P_exp)^2, dimensionless
    chi2          0.00281156;
    rms_rel       0.01082351;
    nDataPoints   24;
    identifiable  true;
    maxAbsCorr    0.94429626;

    validity
    {
        temperature { min 313.15 K; max 313.15 K; }
        pressure    { min 8181 Pa; max 24518 Pa; }
        note        "the span of the FIT evidence; outside it the pair is an extrapolation";
    }
}

validation
{
    verdict     validationRefused;

    heldOut     none;   // every declared dataset carried \`role fit\`

    acceptance  none;   // no band was declared before the fit, so no
                        // pass/fail may be read out of the residual above
}

curation
{
    rule            "DEV.md 4c C291 (bubble-pressure pairs; every laboratory, graded by C285)";
    evidence        allLaboratories;   // every block fitted, none held out
    objective       twoStage;
    residual        P_bubble;
    residualScale   relative;   // (P_model - P)/P at each point's stated T
    outlierLimit_pct 20;   // |P_model - P|/P after the least-squares stage
    outliersDropped 0;
    pointsKept      24;
    noBubblePoint   0;
    maxRelError_pct 1.5457;
    meanRelError_pct 0.9727;
    acceptance      graded;   // max relative pressure error over the kept points, DEV.md 4c C285 (C291)
    gradeLimits_pct (5 10 20);   // upper limits of clean / warning / severe; above, refused
    grade           clean;
    oneLiquid       true;   // arm (f) over the validity span; a pair that splits ONE liquid is never promoted
    temperatures    1;   // distinct stated temperatures in the evidence
    laboratories    1;   // distinct articles in the evidence
    singleTemperature true;   // true: b/T was fitted at ONE temperature
    singleLaboratory  true;   // true: ONE laboratory's data, nothing to cross-check it
    verdict         accepted;
}
`,Ue=`/*---------------------------------------------------------------------------*\\
  NRTL binary interaction parameters --- diisopropylEther(i) + 2Methyl1Propanol(j)

  REGRESSED BY CHOUPO'S CURATION PIPELINE (bin/choupo-curate, DEV.md 4c C282;
  record docs/design/binary-pairs-from-open-measurements.md) to measured
  bubble PRESSURES at stated temperatures (P-x, DEV.md 4c C291).  The articles named under \`evidence\` are the
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
  its fitting pipeline (every laboratory fitted to the bubble pressure, outliers beyond
  20 % discarded by name, max |P_model - P|/P over the kept points GRADED
  clean / warning / severe at 5 / 10 / 20 % -- DEV.md 4c C283 amended, C285, C291;
  THIS fit: clean, 0.7601 %; one liquid across its validity span), and NO
  HUMAN HAS REVIEWED IT.  The engine says so on every run that reads it, and
  voices a warning or a severe grade beside it.
  CAUTION: this record rests on ONE temperature and ONE laboratory.
  Nothing was held out: the \`validation {}\` block says so, and the acceptance
  is the \`curation {}\` block.  A curator who reads the series back against the
  articles marks it \`reviewStatus reviewed; humanReviewed true;\`.  Revert with
  \`bin/choupo-curate revert 2Methyl1Propanol-diisopropylEther\`.

  REPRODUCE: run tutorials/props/curation/curate514_nrtl_diisopropylEther_2Methyl1Propanol (after \`bin/choupo-curate fetch\` on it); its fit
  writes 2Methyl1Propanol-diisopropylEther.proposal.dat, which bin/curate/check_regressed_pairs.py holds
  equal to this record.
\\*---------------------------------------------------------------------------*/

recordType binaryInteractionParameters;
schemaVersion 1;

pair { i diisopropylEther; j 2Methyl1Propanol; }

components  ( diisopropylEther  2Methyl1Propanol );
model       NRTL;

parameters
{
    i           diisopropylEther;
    j           2Methyl1Propanol;
    a_ij        0.00000000;
    b_ij        261.42517740;
    a_ji        0.00000000;
    b_ji        43.72275569;
    alpha       0.30000000;
}

provenance
{
    origin        fitted;
    method        "fitParameters(P_bubble), Levenberg-Marquardt";
    methodVersion "choupoProps Choupo-dev";
    fittedInCase  "tutorials/props/curation/curate514_nrtl_diisopropylEther_2Methyl1Propanol";
    reviewStatus  autoPromoted;
    humanReviewed false;
    fitGrade      clean;   // DEV.md 4c C285 (C291): max |P_model - P|/P over the kept points, graded 5 / 10 / 20 %
    fitGradeMaxRelativeError_pct 0.7601;
    promotedBy    "bin/curate/pairs_px.py promote";
    promotedDate  "2026-11-10";
    reviewReason  "regressed by bin/choupo-curate from archive-transcribed measurements; not yet read back against the articles";
    reuse         "Choupo's own regression; the measured points belong to the cited articles and are not reproduced in this record or this tree";
    fitDate       "2026-11-10";

    evidence
    (
        {
            role      fit;
            dataset   "constant/archiveExtracts/diisopropylEther-2Methyl1Propanol-bubbleP-j.fluid.2005.11.017-b3.dat";
            doi       "10.1016/j.fluid.2005.11.017";
            sha256    "bdd27e2405e1e270a7e173d7d14fefbc5cd0ac0bf877faac4fac8fd7614d13a5";
            provenance measured;
            archiveFile "j.fluid.2005.11.017.xml";
            system    "diisopropylEther + 2Methyl1Propanol";
        }
    );
    fingerprint "2f9ed79b2cc1f5ab";   // of the declaration, frozen before the fit

    //  IN-SAMPLE: the model reproducing the very points it was
    //  fitted to.  It is NOT a validation; see the block below.
    weighting     equal;   // chi2 is sum ((P_model - P_exp)/P_exp)^2, dimensionless
    chi2          0.00076698;
    rms_rel       0.00543133;
    nDataPoints   26;
    identifiable  true;
    maxAbsCorr    0.98606731;

    validity
    {
        temperature { min 313.15 K; max 313.15 K; }
        pressure    { min 8047 Pa; max 35849 Pa; }
        note        "the span of the FIT evidence; outside it the pair is an extrapolation";
    }
}

validation
{
    verdict     validationRefused;

    heldOut     none;   // every declared dataset carried \`role fit\`

    acceptance  none;   // no band was declared before the fit, so no
                        // pass/fail may be read out of the residual above
}

curation
{
    rule            "DEV.md 4c C291 (bubble-pressure pairs; every laboratory, graded by C285)";
    evidence        allLaboratories;   // every block fitted, none held out
    objective       twoStage;
    residual        P_bubble;
    residualScale   relative;   // (P_model - P)/P at each point's stated T
    outlierLimit_pct 20;   // |P_model - P|/P after the least-squares stage
    outliersDropped 0;
    pointsKept      26;
    noBubblePoint   0;
    maxRelError_pct 0.7601;
    meanRelError_pct 0.4960;
    acceptance      graded;   // max relative pressure error over the kept points, DEV.md 4c C285 (C291)
    gradeLimits_pct (5 10 20);   // upper limits of clean / warning / severe; above, refused
    grade           clean;
    oneLiquid       true;   // arm (f) over the validity span; a pair that splits ONE liquid is never promoted
    temperatures    1;   // distinct stated temperatures in the evidence
    laboratories    1;   // distinct articles in the evidence
    singleTemperature true;   // true: b/T was fitted at ONE temperature
    singleLaboratory  true;   // true: ONE laboratory's data, nothing to cross-check it
    verdict         accepted;
}
`,Ke=`/*---------------------------------------------------------------------------*\\
  NRTL binary interaction parameters --- 2Methyl1Propanol(i) + isobutylAcetate(j)

  REGRESSED BY CHOUPO'S CURATION PIPELINE (bin/choupo-curate, DEV.md 4c C282;
  record docs/design/binary-pairs-from-open-measurements.md) to measured
  bubble temperatures.  The articles named under \`evidence\` are the
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
  its fitting pipeline (every laboratory fitted, outliers beyond 3 K
  discarded by name, max |T_model - T| over the kept points GRADED
  clean / warning / severe at 1 / 2 / 4 K -- DEV.md 4c C283
  amended, C285, C286; THIS fit: warning, 1.3168 K; one liquid
  across its validity span), and NO HUMAN HAS REVIEWED IT.  The
  engine says so on every run that reads it, and voices a warning
  or a severe grade beside it.
  Nothing was held out: the \`validation {}\` block says so, and the
  acceptance is the \`curation {}\` block.  A curator who reads the series
  back against the articles marks it \`reviewStatus reviewed; humanReviewed
  true;\`.  Revert with \`bin/choupo-curate revert 2Methyl1Propanol-isobutylAcetate\`.

  REPRODUCE: run tutorials/props/curation/curate128_nrtl_2Methyl1Propanol_isobutylAcetate (after \`bin/choupo-curate fetch\` on it); its fit
  writes 2Methyl1Propanol-isobutylAcetate.proposal.dat, which bin/curate/check_regressed_pairs.py holds
  equal to this record.
\\*---------------------------------------------------------------------------*/

recordType binaryInteractionParameters;
schemaVersion 1;

pair { i 2Methyl1Propanol; j isobutylAcetate; }

components  ( 2Methyl1Propanol  isobutylAcetate );
model       NRTL;

parameters
{
    i           2Methyl1Propanol;
    j           isobutylAcetate;
    a_ij        0.00000000;
    b_ij        170.44353623;
    a_ji        0.00000000;
    b_ji        5.65749387;
    alpha       0.30000000;
}

provenance
{
    origin        fitted;
    method        "fitParameters(T_bubble), Levenberg-Marquardt";
    methodVersion "choupoProps Choupo-dev";
    fittedInCase  "tutorials/props/curation/curate128_nrtl_2Methyl1Propanol_isobutylAcetate";
    reviewStatus  autoPromoted;
    humanReviewed false;
    fitGrade      warning;   // DEV.md 4c C285 (C286): max |T_model - T| over the kept points, graded 1 / 2 / 4 K
    fitGradeMaxTemperatureError_K 1.3168;
    promotedBy    "bin/choupo-curate pair --promote";
    promotedDate  "2026-11-10";
    reviewReason  "regressed by bin/choupo-curate from archive-transcribed measurements; not yet read back against the articles";
    reuse         "Choupo's own regression; the measured points belong to the cited articles and are not reproduced in this record or this tree";
    fitDate       "2026-11-10";

    evidence
    (
        {
            role      fit;
            dataset   "constant/archiveExtracts/2Methyl1Propanol-isobutylAcetate-bubble-j.fluid.2004.10.022.dat";
            doi       "10.1016/j.fluid.2004.10.022";
            sha256    "66776edd2f4be0c51cea9244299aad699241123fcba5ddc312b65355020e886d";
            provenance measured;
            archiveFile "j.fluid.2004.10.022.xml";
            system    "2Methyl1Propanol + isobutylAcetate";
        }
        {
            role      fit;
            dataset   "constant/archiveExtracts/2Methyl1Propanol-isobutylAcetate-bubble-acs.jced.7b00241.dat";
            doi       "10.1021/acs.jced.7b00241";
            sha256    "d4970a98abac735a96c0733db4da2b98ca1e61da48c74afb9930e58460b465e6";
            provenance measured;
            archiveFile "acs.jced.7b00241.xml";
            system    "2Methyl1Propanol + isobutylAcetate";
            pressure  "101300.000000 Pa";
        }
    );
    fingerprint "5521d4e9bdc32784";   // of the declaration, frozen before the fit

    //  IN-SAMPLE: the model reproducing the very points it was
    //  fitted to.  It is NOT a validation; see the block below.
    weighting     uncertainty;   // chi2 is sum ((T_model - T_exp)/U)^2, dimensionless
    chi2          1970.65303473;
    rms_K         0.77359340;
    nDataPoints   58;
    identifiable  true;
    maxAbsCorr    0.99844884;

    validity
    {
        temperature { min 339.13 K; max 388.55 K; }
        pressure    { min 20000 Pa; max 101300 Pa; }
        note        "the span of the FIT evidence; outside it the pair is an extrapolation";
    }
}

validation
{
    verdict     validationRefused;

    heldOut     none;   // every declared dataset carried \`role fit\`

    acceptance  none;   // no band was declared before the fit, so no
                        // pass/fail may be read out of the residual above
}

curation
{
    rule            "DEV.md 4c C283 (amended) + C284, graded by C285 (C286)";
    evidence        allLaboratories;   // every study fitted, none held out
    objective       twoStage;
    outlierLimit    3 K;   // |T_model - T| after the least-squares stage
    outliersDropped 0;
    pointsKept      58;
    noBubblePoint   0;
    maxAbsError     1.3168 K;
    meanAbsError    0.7060 K;
    acceptance      graded;   // max |T_model - T| over the kept points, DEV.md 4c C285 (C286)
    gradeLimits_K   (1 2 4);   // upper limits of clean / warning / severe; above, refused
    grade           warning;
    oneLiquid       true;   // arm (f) over the validity span; a pair that splits ONE liquid is never promoted, whatever its grade
    verdict         accepted;
}
`,Ve=`/*---------------------------------------------------------------------------*\\
  NRTL binary interaction parameters --- 2Methyl1Propanol(i) + nNDimethylformamide(j)

  REGRESSED BY CHOUPO'S CURATION PIPELINE (bin/choupo-curate, DEV.md 4c C282;
  record docs/design/binary-pairs-from-open-measurements.md) to measured
  bubble temperatures.  The articles named under \`evidence\` are the
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
  its fitting pipeline (every laboratory fitted, outliers beyond 3 K
  discarded by name, max |T_model - T| over the kept points GRADED
  clean / warning / severe at 1 / 2 / 4 K -- DEV.md 4c C283
  amended, C285, C286; THIS fit: severe, 2.0430 K; one liquid
  across its validity span), and NO HUMAN HAS REVIEWED IT.  The
  engine says so on every run that reads it, and voices a warning
  or a severe grade beside it.
  Nothing was held out: the \`validation {}\` block says so, and the
  acceptance is the \`curation {}\` block.  A curator who reads the series
  back against the articles marks it \`reviewStatus reviewed; humanReviewed
  true;\`.  Revert with \`bin/choupo-curate revert 2Methyl1Propanol-nNDimethylformamide\`.

  REPRODUCE: run tutorials/props/curation/curate137_nrtl_2Methyl1Propanol_nNDimethylformamide (after \`bin/choupo-curate fetch\` on it); its fit
  writes 2Methyl1Propanol-nNDimethylformamide.proposal.dat, which bin/curate/check_regressed_pairs.py holds
  equal to this record.
\\*---------------------------------------------------------------------------*/

recordType binaryInteractionParameters;
schemaVersion 1;

pair { i 2Methyl1Propanol; j nNDimethylformamide; }

components  ( 2Methyl1Propanol  nNDimethylformamide );
model       NRTL;

parameters
{
    i           2Methyl1Propanol;
    j           nNDimethylformamide;
    a_ij        0.00000000;
    b_ij        311.54065600;
    a_ji        0.00000000;
    b_ji        -366.48597232;
    alpha       0.30000000;
}

provenance
{
    origin        fitted;
    method        "fitParameters(T_bubble), Levenberg-Marquardt";
    methodVersion "choupoProps Choupo-dev";
    fittedInCase  "tutorials/props/curation/curate137_nrtl_2Methyl1Propanol_nNDimethylformamide";
    reviewStatus  autoPromoted;
    humanReviewed false;
    fitGrade      severe;   // DEV.md 4c C285 (C286): max |T_model - T| over the kept points, graded 1 / 2 / 4 K
    fitGradeMaxTemperatureError_K 2.0430;
    promotedBy    "bin/choupo-curate pair --promote";
    promotedDate  "2026-11-10";
    reviewReason  "regressed by bin/choupo-curate from archive-transcribed measurements; not yet read back against the articles";
    reuse         "Choupo's own regression; the measured points belong to the cited articles and are not reproduced in this record or this tree";
    fitDate       "2026-11-10";

    evidence
    (
        {
            role      fit;
            dataset   "constant/archiveExtracts/2Methyl1Propanol-nNDimethylformamide-bubble-j.fluid.2006.08.018.dat";
            doi       "10.1016/j.fluid.2006.08.018";
            sha256    "efd075a1a7973909792b56e5f48979fc69b4de7609c3c07c261b8ab7be59e044";
            provenance measured;
            archiveFile "j.fluid.2006.08.018.xml";
            system    "2Methyl1Propanol + nNDimethylformamide";
            pressure  "95500.000000 Pa";
        }
        {
            role      fit;
            dataset   "constant/archiveExtracts/2Methyl1Propanol-nNDimethylformamide-bubble-j.fluid.2005.03.014.dat";
            doi       "10.1016/j.fluid.2005.03.014";
            sha256    "f84756a5bf562e4d953f894e39cd860626ffd864af890e9733349d917e934c5f";
            provenance measured;
            archiveFile "j.fluid.2005.03.014.xml";
            system    "2Methyl1Propanol + nNDimethylformamide";
            pressure  "101300.000000 Pa";
        }
    );
    fingerprint "8c3a9d6877242515";   // of the declaration, frozen before the fit

    //  IN-SAMPLE: the model reproducing the very points it was
    //  fitted to.  It is NOT a validation; see the block below.
    weighting     uncertainty;   // chi2 is sum ((T_model - T_exp)/U)^2, dimensionless
    chi2          59.89657047;
    rms_K         1.07781255;
    nDataPoints   37;
    identifiable  false;
    maxAbsCorr    0.99989448;

    validity
    {
        temperature { min 380.75 K; max 421.95 K; }
        pressure    { min 95500 Pa; max 101300 Pa; }
        note        "the span of the FIT evidence; outside it the pair is an extrapolation";
    }
}

validation
{
    verdict     validationRefused;

    heldOut     none;   // every declared dataset carried \`role fit\`

    acceptance  none;   // no band was declared before the fit, so no
                        // pass/fail may be read out of the residual above
}

curation
{
    rule            "DEV.md 4c C283 (amended) + C284, graded by C285 (C286)";
    evidence        allLaboratories;   // every study fitted, none held out
    objective       twoStage;
    outlierLimit    3 K;   // |T_model - T| after the least-squares stage
    outliersDropped 0;
    pointsKept      37;
    noBubblePoint   0;
    maxAbsError     2.0430 K;
    meanAbsError    0.8792 K;
    acceptance      graded;   // max |T_model - T| over the kept points, DEV.md 4c C285 (C286)
    gradeLimits_K   (1 2 4);   // upper limits of clean / warning / severe; above, refused
    grade           severe;
    oneLiquid       true;   // arm (f) over the validity span; a pair that splits ONE liquid is never promoted, whatever its grade
    verdict         accepted;
}
`,He=`/*---------------------------------------------------------------------------*\\
  NRTL binary interaction parameters --- 2Methyl2Propanol(i) + nNDimethylformamide(j)

  REGRESSED BY CHOUPO'S CURATION PIPELINE (bin/choupo-curate, DEV.md 4c C282;
  record docs/design/binary-pairs-from-open-measurements.md) to measured
  bubble temperatures.  The articles named under \`evidence\` are the
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
  its fitting pipeline (every laboratory fitted, outliers beyond 3 K
  discarded by name, max |T_model - T| over the kept points GRADED
  clean / warning / severe at 1 / 2 / 4 K -- DEV.md 4c C283
  amended, C285, C286; THIS fit: severe, 2.5702 K; one liquid
  across its validity span), and NO HUMAN HAS REVIEWED IT.  The
  engine says so on every run that reads it, and voices a warning
  or a severe grade beside it.
  Nothing was held out: the \`validation {}\` block says so, and the
  acceptance is the \`curation {}\` block.  A curator who reads the series
  back against the articles marks it \`reviewStatus reviewed; humanReviewed
  true;\`.  Revert with \`bin/choupo-curate revert 2Methyl2Propanol-nNDimethylformamide\`.

  REPRODUCE: run tutorials/props/curation/curate146_nrtl_2Methyl2Propanol_nNDimethylformamide (after \`bin/choupo-curate fetch\` on it); its fit
  writes 2Methyl2Propanol-nNDimethylformamide.proposal.dat, which bin/curate/check_regressed_pairs.py holds
  equal to this record.
\\*---------------------------------------------------------------------------*/

recordType binaryInteractionParameters;
schemaVersion 1;

pair { i 2Methyl2Propanol; j nNDimethylformamide; }

components  ( 2Methyl2Propanol  nNDimethylformamide );
model       NRTL;

parameters
{
    i           2Methyl2Propanol;
    j           nNDimethylformamide;
    a_ij        0.00000000;
    b_ij        418.34205776;
    a_ji        0.00000000;
    b_ji        -300.51632556;
    alpha       0.30000000;
}

provenance
{
    origin        fitted;
    method        "fitParameters(T_bubble), Levenberg-Marquardt";
    methodVersion "choupoProps Choupo-dev";
    fittedInCase  "tutorials/props/curation/curate146_nrtl_2Methyl2Propanol_nNDimethylformamide";
    reviewStatus  autoPromoted;
    humanReviewed false;
    fitGrade      severe;   // DEV.md 4c C285 (C286): max |T_model - T| over the kept points, graded 1 / 2 / 4 K
    fitGradeMaxTemperatureError_K 2.5702;
    promotedBy    "bin/choupo-curate pair --promote";
    promotedDate  "2026-11-10";
    reviewReason  "regressed by bin/choupo-curate from archive-transcribed measurements; not yet read back against the articles";
    reuse         "Choupo's own regression; the measured points belong to the cited articles and are not reproduced in this record or this tree";
    fitDate       "2026-11-10";

    evidence
    (
        {
            role      fit;
            dataset   "constant/archiveExtracts/2Methyl2Propanol-nNDimethylformamide-bubble-j.fluid.2006.08.018.dat";
            doi       "10.1016/j.fluid.2006.08.018";
            sha256    "efd075a1a7973909792b56e5f48979fc69b4de7609c3c07c261b8ab7be59e044";
            provenance measured;
            archiveFile "j.fluid.2006.08.018.xml";
            system    "2Methyl2Propanol + nNDimethylformamide";
            pressure  "95500.000000 Pa";
        }
        {
            role      fit;
            dataset   "constant/archiveExtracts/2Methyl2Propanol-nNDimethylformamide-bubble-je7001336.dat";
            doi       "10.1021/je7001336";
            sha256    "e5b4a5a0d0cff415699f9598464bb6018560c185e8d911108843c4bc344a2a77";
            provenance measured;
            archiveFile "je7001336.xml";
            system    "2Methyl2Propanol + nNDimethylformamide";
            pressure  "94400.000000 Pa";
        }
    );
    fingerprint "17e04b8d2e5f0e5e";   // of the declaration, frozen before the fit

    //  IN-SAMPLE: the model reproducing the very points it was
    //  fitted to.  It is NOT a validation; see the block below.
    weighting     uncertainty;   // chi2 is sum ((T_model - T_exp)/U)^2, dimensionless
    chi2          128.53516295;
    rms_K         1.60597425;
    nDataPoints   24;
    identifiable  true;
    maxAbsCorr    0.99839136;

    validity
    {
        temperature { min 355.35 K; max 411.55 K; }
        pressure    { min 94400 Pa; max 95500 Pa; }
        note        "the span of the FIT evidence; outside it the pair is an extrapolation";
    }
}

validation
{
    verdict     validationRefused;

    heldOut     none;   // every declared dataset carried \`role fit\`

    acceptance  none;   // no band was declared before the fit, so no
                        // pass/fail may be read out of the residual above
}

curation
{
    rule            "DEV.md 4c C283 (amended) + C284, graded by C285 (C286)";
    evidence        allLaboratories;   // every study fitted, none held out
    objective       twoStage;
    outlierLimit    3 K;   // |T_model - T| after the least-squares stage
    outliersDropped 5;
    pointsKept      24;
    noBubblePoint   0;
    maxAbsError     2.5702 K;
    meanAbsError    1.3804 K;
    acceptance      graded;   // max |T_model - T| over the kept points, DEV.md 4c C285 (C286)
    gradeLimits_K   (1 2 4);   // upper limits of clean / warning / severe; above, refused
    grade           severe;
    oneLiquid       true;   // arm (f) over the validity span; a pair that splits ONE liquid is never promoted, whatever its grade
    verdict         accepted;
}
`,Be=`/*---------------------------------------------------------------------------*\\
  NRTL binary interaction parameters --- 2Pentanol(i) + cyclohexane(j)

  REGRESSED BY CHOUPO'S CURATION PIPELINE (bin/choupo-curate, DEV.md 4c C282;
  record docs/design/binary-pairs-from-open-measurements.md) to measured
  bubble PRESSURES at stated temperatures (P-x, DEV.md 4c C291).  The articles named under \`evidence\` are the
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
  its fitting pipeline (every laboratory fitted to the bubble pressure, outliers beyond
  20 % discarded by name, max |P_model - P|/P over the kept points GRADED
  clean / warning / severe at 5 / 10 / 20 % -- DEV.md 4c C283 amended, C285, C291;
  THIS fit: clean, 2.6708 %; one liquid across its validity span), and NO
  HUMAN HAS REVIEWED IT.  The engine says so on every run that reads it, and
  voices a warning or a severe grade beside it.
  CAUTION: this record rests on ONE temperature and ONE laboratory.
  Nothing was held out: the \`validation {}\` block says so, and the acceptance
  is the \`curation {}\` block.  A curator who reads the series back against the
  articles marks it \`reviewStatus reviewed; humanReviewed true;\`.  Revert with
  \`bin/choupo-curate revert 2Pentanol-cyclohexane\`.

  REPRODUCE: run tutorials/props/curation/curate538_nrtl_2Pentanol_cyclohexane (after \`bin/choupo-curate fetch\` on it); its fit
  writes 2Pentanol-cyclohexane.proposal.dat, which bin/curate/check_regressed_pairs.py holds
  equal to this record.
\\*---------------------------------------------------------------------------*/

recordType binaryInteractionParameters;
schemaVersion 1;

pair { i 2Pentanol; j cyclohexane; }

components  ( 2Pentanol  cyclohexane );
model       NRTL;

parameters
{
    i           2Pentanol;
    j           cyclohexane;
    a_ij        0.00000000;
    b_ij        -4.05261250;
    a_ji        0.00000000;
    b_ji        639.05019966;
    alpha       0.30000000;
}

provenance
{
    origin        fitted;
    method        "fitParameters(P_bubble), Levenberg-Marquardt";
    methodVersion "choupoProps Choupo-dev";
    fittedInCase  "tutorials/props/curation/curate538_nrtl_2Pentanol_cyclohexane";
    reviewStatus  autoPromoted;
    humanReviewed false;
    fitGrade      clean;   // DEV.md 4c C285 (C291): max |P_model - P|/P over the kept points, graded 5 / 10 / 20 %
    fitGradeMaxRelativeError_pct 2.6708;
    promotedBy    "bin/curate/pairs_px.py promote";
    promotedDate  "2026-11-10";
    reviewReason  "regressed by bin/choupo-curate from archive-transcribed measurements; not yet read back against the articles";
    reuse         "Choupo's own regression; the measured points belong to the cited articles and are not reproduced in this record or this tree";
    fitDate       "2026-11-10";

    evidence
    (
        {
            role      fit;
            dataset   "constant/archiveExtracts/2Pentanol-cyclohexane-bubbleP-j.fluid.2015.09.035-b0.dat";
            doi       "10.1016/j.fluid.2015.09.035";
            sha256    "55f9784585f45bef19f4c53cb07c052923ba5e2f59837f1b83ca861a0fca60c6";
            provenance measured;
            archiveFile "j.fluid.2015.09.035.xml";
            system    "2Pentanol + cyclohexane";
        }
    );
    fingerprint "550e04fc5e961122";   // of the declaration, frozen before the fit

    //  IN-SAMPLE: the model reproducing the very points it was
    //  fitted to.  It is NOT a validation; see the block below.
    weighting     equal;   // chi2 is sum ((P_model - P_exp)/P_exp)^2, dimensionless
    chi2          0.00876645;
    rms_rel       0.01911201;
    nDataPoints   24;
    identifiable  true;
    maxAbsCorr    0.92431285;

    validity
    {
        temperature { min 313.15 K; max 313.15 K; }
        pressure    { min 5820 Pa; max 24563 Pa; }
        note        "the span of the FIT evidence; outside it the pair is an extrapolation";
    }
}

validation
{
    verdict     validationRefused;

    heldOut     none;   // every declared dataset carried \`role fit\`

    acceptance  none;   // no band was declared before the fit, so no
                        // pass/fail may be read out of the residual above
}

curation
{
    rule            "DEV.md 4c C291 (bubble-pressure pairs; every laboratory, graded by C285)";
    evidence        allLaboratories;   // every block fitted, none held out
    objective       twoStage;
    residual        P_bubble;
    residualScale   relative;   // (P_model - P)/P at each point's stated T
    outlierLimit_pct 20;   // |P_model - P|/P after the least-squares stage
    outliersDropped 0;
    pointsKept      24;
    noBubblePoint   0;
    maxRelError_pct 2.6708;
    meanRelError_pct 1.7312;
    acceptance      graded;   // max relative pressure error over the kept points, DEV.md 4c C285 (C291)
    gradeLimits_pct (5 10 20);   // upper limits of clean / warning / severe; above, refused
    grade           clean;
    oneLiquid       true;   // arm (f) over the validity span; a pair that splits ONE liquid is never promoted
    temperatures    1;   // distinct stated temperatures in the evidence
    laboratories    1;   // distinct articles in the evidence
    singleTemperature true;   // true: b/T was fitted at ONE temperature
    singleLaboratory  true;   // true: ONE laboratory's data, nothing to cross-check it
    verdict         accepted;
}
`,qe=`/*---------------------------------------------------------------------------*\\
  NRTL binary interaction parameters --- 2Pentanol(i) + nHeptane(j)

  REGRESSED BY CHOUPO'S CURATION PIPELINE (bin/choupo-curate, DEV.md 4c C282;
  record docs/design/binary-pairs-from-open-measurements.md) to measured
  bubble PRESSURES at stated temperatures (P-x, DEV.md 4c C291).  The articles named under \`evidence\` are the
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
  its fitting pipeline (every laboratory fitted to the bubble pressure, outliers beyond
  20 % discarded by name, max |P_model - P|/P over the kept points GRADED
  clean / warning / severe at 5 / 10 / 20 % -- DEV.md 4c C283 amended, C285, C291;
  THIS fit: clean, 2.4776 %; one liquid across its validity span), and NO
  HUMAN HAS REVIEWED IT.  The engine says so on every run that reads it, and
  voices a warning or a severe grade beside it.
  CAUTION: this record rests on ONE temperature and ONE laboratory.
  Nothing was held out: the \`validation {}\` block says so, and the acceptance
  is the \`curation {}\` block.  A curator who reads the series back against the
  articles marks it \`reviewStatus reviewed; humanReviewed true;\`.  Revert with
  \`bin/choupo-curate revert 2Pentanol-nHeptane\`.

  REPRODUCE: run tutorials/props/curation/curate539_nrtl_2Pentanol_nHeptane (after \`bin/choupo-curate fetch\` on it); its fit
  writes 2Pentanol-nHeptane.proposal.dat, which bin/curate/check_regressed_pairs.py holds
  equal to this record.
\\*---------------------------------------------------------------------------*/

recordType binaryInteractionParameters;
schemaVersion 1;

pair { i 2Pentanol; j nHeptane; }

components  ( 2Pentanol  nHeptane );
model       NRTL;

parameters
{
    i           2Pentanol;
    j           nHeptane;
    a_ij        0.00000000;
    b_ij        90.54578420;
    a_ji        0.00000000;
    b_ji        543.44933148;
    alpha       0.30000000;
}

provenance
{
    origin        fitted;
    method        "fitParameters(P_bubble), Levenberg-Marquardt";
    methodVersion "choupoProps Choupo-dev";
    fittedInCase  "tutorials/props/curation/curate539_nrtl_2Pentanol_nHeptane";
    reviewStatus  autoPromoted;
    humanReviewed false;
    fitGrade      clean;   // DEV.md 4c C285 (C291): max |P_model - P|/P over the kept points, graded 5 / 10 / 20 %
    fitGradeMaxRelativeError_pct 2.4776;
    promotedBy    "bin/curate/pairs_px.py promote";
    promotedDate  "2026-11-10";
    reviewReason  "regressed by bin/choupo-curate from archive-transcribed measurements; not yet read back against the articles";
    reuse         "Choupo's own regression; the measured points belong to the cited articles and are not reproduced in this record or this tree";
    fitDate       "2026-11-10";

    evidence
    (
        {
            role      fit;
            dataset   "constant/archiveExtracts/2Pentanol-nHeptane-bubbleP-j.fluid.2014.10.016-b7.dat";
            doi       "10.1016/j.fluid.2014.10.016";
            sha256    "423b56a4060dac86cb6c1e7f4afe2331ad90310481e33cdb2ff4f5569d97d1c3";
            provenance measured;
            archiveFile "j.fluid.2014.10.016.xml";
            system    "2Pentanol + nHeptane";
        }
    );
    fingerprint "f138f74412381bca";   // of the declaration, frozen before the fit

    //  IN-SAMPLE: the model reproducing the very points it was
    //  fitted to.  It is NOT a validation; see the block below.
    weighting     equal;   // chi2 is sum ((P_model - P_exp)/P_exp)^2, dimensionless
    chi2          0.00808439;
    rms_rel       0.01835347;
    nDataPoints   24;
    identifiable  true;
    maxAbsCorr    0.94067531;

    validity
    {
        temperature { min 313.15 K; max 313.15 K; }
        pressure    { min 4392 Pa; max 12656 Pa; }
        note        "the span of the FIT evidence; outside it the pair is an extrapolation";
    }
}

validation
{
    verdict     validationRefused;

    heldOut     none;   // every declared dataset carried \`role fit\`

    acceptance  none;   // no band was declared before the fit, so no
                        // pass/fail may be read out of the residual above
}

curation
{
    rule            "DEV.md 4c C291 (bubble-pressure pairs; every laboratory, graded by C285)";
    evidence        allLaboratories;   // every block fitted, none held out
    objective       twoStage;
    residual        P_bubble;
    residualScale   relative;   // (P_model - P)/P at each point's stated T
    outlierLimit_pct 20;   // |P_model - P|/P after the least-squares stage
    outliersDropped 0;
    pointsKept      24;
    noBubblePoint   0;
    maxRelError_pct 2.4776;
    meanRelError_pct 1.6626;
    acceptance      graded;   // max relative pressure error over the kept points, DEV.md 4c C285 (C291)
    gradeLimits_pct (5 10 20);   // upper limits of clean / warning / severe; above, refused
    grade           clean;
    oneLiquid       true;   // arm (f) over the validity span; a pair that splits ONE liquid is never promoted
    temperatures    1;   // distinct stated temperatures in the evidence
    laboratories    1;   // distinct articles in the evidence
    singleTemperature true;   // true: b/T was fitted at ONE temperature
    singleLaboratory  true;   // true: ONE laboratory's data, nothing to cross-check it
    verdict         accepted;
}
`,Ge=`/*---------------------------------------------------------------------------*\\
  NRTL binary interaction parameters --- 2Pentanol(i) + nHexane(j)

  REGRESSED BY CHOUPO'S CURATION PIPELINE (bin/choupo-curate, DEV.md 4c C282;
  record docs/design/binary-pairs-from-open-measurements.md) to measured
  bubble PRESSURES at stated temperatures (P-x, DEV.md 4c C291).  The articles named under \`evidence\` are the
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
  its fitting pipeline (every laboratory fitted to the bubble pressure, outliers beyond
  20 % discarded by name, max |P_model - P|/P over the kept points GRADED
  clean / warning / severe at 5 / 10 / 20 % -- DEV.md 4c C283 amended, C285, C291;
  THIS fit: clean, 3.0412 %; one liquid across its validity span), and NO
  HUMAN HAS REVIEWED IT.  The engine says so on every run that reads it, and
  voices a warning or a severe grade beside it.
  CAUTION: this record rests on ONE temperature and ONE laboratory.
  Nothing was held out: the \`validation {}\` block says so, and the acceptance
  is the \`curation {}\` block.  A curator who reads the series back against the
  articles marks it \`reviewStatus reviewed; humanReviewed true;\`.  Revert with
  \`bin/choupo-curate revert 2Pentanol-nHexane\`.

  REPRODUCE: run tutorials/props/curation/curate540_nrtl_2Pentanol_nHexane (after \`bin/choupo-curate fetch\` on it); its fit
  writes 2Pentanol-nHexane.proposal.dat, which bin/curate/check_regressed_pairs.py holds
  equal to this record.
\\*---------------------------------------------------------------------------*/

recordType binaryInteractionParameters;
schemaVersion 1;

pair { i 2Pentanol; j nHexane; }

components  ( 2Pentanol  nHexane );
model       NRTL;

parameters
{
    i           2Pentanol;
    j           nHexane;
    a_ij        0.00000000;
    b_ij        63.82163836;
    a_ji        0.00000000;
    b_ji        554.40373090;
    alpha       0.30000000;
}

provenance
{
    origin        fitted;
    method        "fitParameters(P_bubble), Levenberg-Marquardt";
    methodVersion "choupoProps Choupo-dev";
    fittedInCase  "tutorials/props/curation/curate540_nrtl_2Pentanol_nHexane";
    reviewStatus  autoPromoted;
    humanReviewed false;
    fitGrade      clean;   // DEV.md 4c C285 (C291): max |P_model - P|/P over the kept points, graded 5 / 10 / 20 %
    fitGradeMaxRelativeError_pct 3.0412;
    promotedBy    "bin/curate/pairs_px.py promote";
    promotedDate  "2026-11-10";
    reviewReason  "regressed by bin/choupo-curate from archive-transcribed measurements; not yet read back against the articles";
    reuse         "Choupo's own regression; the measured points belong to the cited articles and are not reproduced in this record or this tree";
    fitDate       "2026-11-10";

    evidence
    (
        {
            role      fit;
            dataset   "constant/archiveExtracts/2Pentanol-nHexane-bubbleP-j.fluid.2016.05.031-b6.dat";
            doi       "10.1016/j.fluid.2016.05.031";
            sha256    "b881692f8c394565784e487706d24274b0017ab22a2defb6a2db53f38d261087";
            provenance measured;
            archiveFile "j.fluid.2016.05.031.xml";
            system    "2Pentanol + nHexane";
        }
    );
    fingerprint "48bfe9bad1d62056";   // of the declaration, frozen before the fit

    //  IN-SAMPLE: the model reproducing the very points it was
    //  fitted to.  It is NOT a validation; see the block below.
    weighting     equal;   // chi2 is sum ((P_model - P_exp)/P_exp)^2, dimensionless
    chi2          0.01099495;
    rms_rel       0.02140380;
    nDataPoints   24;
    identifiable  true;
    maxAbsCorr    0.92896665;

    validity
    {
        temperature { min 313.15 K; max 313.15 K; }
        pressure    { min 8456 Pa; max 36773 Pa; }
        note        "the span of the FIT evidence; outside it the pair is an extrapolation";
    }
}

validation
{
    verdict     validationRefused;

    heldOut     none;   // every declared dataset carried \`role fit\`

    acceptance  none;   // no band was declared before the fit, so no
                        // pass/fail may be read out of the residual above
}

curation
{
    rule            "DEV.md 4c C291 (bubble-pressure pairs; every laboratory, graded by C285)";
    evidence        allLaboratories;   // every block fitted, none held out
    objective       twoStage;
    residual        P_bubble;
    residualScale   relative;   // (P_model - P)/P at each point's stated T
    outlierLimit_pct 20;   // |P_model - P|/P after the least-squares stage
    outliersDropped 0;
    pointsKept      24;
    noBubblePoint   0;
    maxRelError_pct 3.0412;
    meanRelError_pct 1.9099;
    acceptance      graded;   // max relative pressure error over the kept points, DEV.md 4c C285 (C291)
    gradeLimits_pct (5 10 20);   // upper limits of clean / warning / severe; above, refused
    grade           clean;
    oneLiquid       true;   // arm (f) over the validity span; a pair that splits ONE liquid is never promoted
    temperatures    1;   // distinct stated temperatures in the evidence
    laboratories    1;   // distinct articles in the evidence
    singleTemperature true;   // true: b/T was fitted at ONE temperature
    singleLaboratory  true;   // true: ONE laboratory's data, nothing to cross-check it
    verdict         accepted;
}
`,Fe=`/*---------------------------------------------------------------------------*\\
  NRTL binary interaction parameters --- 2Pentanol(i) + toluene(j)

  REGRESSED BY CHOUPO'S CURATION PIPELINE (bin/choupo-curate, DEV.md 4c C282;
  record docs/design/binary-pairs-from-open-measurements.md) to measured
  bubble PRESSURES at stated temperatures (P-x, DEV.md 4c C291).  The articles named under \`evidence\` are the
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
  its fitting pipeline (every laboratory fitted to the bubble pressure, outliers beyond
  20 % discarded by name, max |P_model - P|/P over the kept points GRADED
  clean / warning / severe at 5 / 10 / 20 % -- DEV.md 4c C283 amended, C285, C291;
  THIS fit: clean, 1.3531 %; one liquid across its validity span), and NO
  HUMAN HAS REVIEWED IT.  The engine says so on every run that reads it, and
  voices a warning or a severe grade beside it.
  CAUTION: this record rests on ONE temperature and ONE laboratory.
  Nothing was held out: the \`validation {}\` block says so, and the acceptance
  is the \`curation {}\` block.  A curator who reads the series back against the
  articles marks it \`reviewStatus reviewed; humanReviewed true;\`.  Revert with
  \`bin/choupo-curate revert 2Pentanol-toluene\`.

  REPRODUCE: run tutorials/props/curation/curate541_nrtl_2Pentanol_toluene (after \`bin/choupo-curate fetch\` on it); its fit
  writes 2Pentanol-toluene.proposal.dat, which bin/curate/check_regressed_pairs.py holds
  equal to this record.
\\*---------------------------------------------------------------------------*/

recordType binaryInteractionParameters;
schemaVersion 1;

pair { i 2Pentanol; j toluene; }

components  ( 2Pentanol  toluene );
model       NRTL;

parameters
{
    i           2Pentanol;
    j           toluene;
    a_ij        0.00000000;
    b_ij        34.29286435;
    a_ji        0.00000000;
    b_ji        447.49098297;
    alpha       0.30000000;
}

provenance
{
    origin        fitted;
    method        "fitParameters(P_bubble), Levenberg-Marquardt";
    methodVersion "choupoProps Choupo-dev";
    fittedInCase  "tutorials/props/curation/curate541_nrtl_2Pentanol_toluene";
    reviewStatus  autoPromoted;
    humanReviewed false;
    fitGrade      clean;   // DEV.md 4c C285 (C291): max |P_model - P|/P over the kept points, graded 5 / 10 / 20 %
    fitGradeMaxRelativeError_pct 1.3531;
    promotedBy    "bin/curate/pairs_px.py promote";
    promotedDate  "2026-11-10";
    reviewReason  "regressed by bin/choupo-curate from archive-transcribed measurements; not yet read back against the articles";
    reuse         "Choupo's own regression; the measured points belong to the cited articles and are not reproduced in this record or this tree";
    fitDate       "2026-11-10";

    evidence
    (
        {
            role      fit;
            dataset   "constant/archiveExtracts/2Pentanol-toluene-bubbleP-j.fluid.2015.09.035-b3.dat";
            doi       "10.1016/j.fluid.2015.09.035";
            sha256    "55f9784585f45bef19f4c53cb07c052923ba5e2f59837f1b83ca861a0fca60c6";
            provenance measured;
            archiveFile "j.fluid.2015.09.035.xml";
            system    "2Pentanol + toluene";
        }
    );
    fingerprint "1c7e1fbe4ffa908c";   // of the declaration, frozen before the fit

    //  IN-SAMPLE: the model reproducing the very points it was
    //  fitted to.  It is NOT a validation; see the block below.
    weighting     equal;   // chi2 is sum ((P_model - P_exp)/P_exp)^2, dimensionless
    chi2          0.00171283;
    rms_rel       0.00844794;
    nDataPoints   24;
    identifiable  true;
    maxAbsCorr    0.97290420;

    validity
    {
        temperature { min 313.15 K; max 313.15 K; }
        pressure    { min 3268 Pa; max 8055 Pa; }
        note        "the span of the FIT evidence; outside it the pair is an extrapolation";
    }
}

validation
{
    verdict     validationRefused;

    heldOut     none;   // every declared dataset carried \`role fit\`

    acceptance  none;   // no band was declared before the fit, so no
                        // pass/fail may be read out of the residual above
}

curation
{
    rule            "DEV.md 4c C291 (bubble-pressure pairs; every laboratory, graded by C285)";
    evidence        allLaboratories;   // every block fitted, none held out
    objective       twoStage;
    residual        P_bubble;
    residualScale   relative;   // (P_model - P)/P at each point's stated T
    outlierLimit_pct 20;   // |P_model - P|/P after the least-squares stage
    outliersDropped 0;
    pointsKept      24;
    noBubblePoint   0;
    maxRelError_pct 1.3531;
    meanRelError_pct 0.7108;
    acceptance      graded;   // max relative pressure error over the kept points, DEV.md 4c C285 (C291)
    gradeLimits_pct (5 10 20);   // upper limits of clean / warning / severe; above, refused
    grade           clean;
    oneLiquid       true;   // arm (f) over the validity span; a pair that splits ONE liquid is never promoted
    temperatures    1;   // distinct stated temperatures in the evidence
    laboratories    1;   // distinct articles in the evidence
    singleTemperature true;   // true: b/T was fitted at ONE temperature
    singleLaboratory  true;   // true: ONE laboratory's data, nothing to cross-check it
    verdict         accepted;
}
`,ze=`/*---------------------------------------------------------------------------*\\
  NRTL binary interaction parameters --- Dichloroethane(i) + ethylAcetate(j)

  REGRESSED BY CHOUPO'S CURATION PIPELINE (bin/choupo-curate, DEV.md 4c C282;
  record docs/design/binary-pairs-from-open-measurements.md) to measured
  bubble PRESSURES at stated temperatures (P-x, DEV.md 4c C291).  The articles named under \`evidence\` are the
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
  its fitting pipeline (every laboratory fitted to the bubble pressure, outliers beyond
  20 % discarded by name, max |P_model - P|/P over the kept points GRADED
  clean / warning / severe at 5 / 10 / 20 % -- DEV.md 4c C283 amended, C285, C291;
  THIS fit: clean, 1.1094 %; one liquid across its validity span), and NO
  HUMAN HAS REVIEWED IT.  The engine says so on every run that reads it, and
  voices a warning or a severe grade beside it.
  CAUTION: this record rests on ONE temperature and ONE laboratory.
  Nothing was held out: the \`validation {}\` block says so, and the acceptance
  is the \`curation {}\` block.  A curator who reads the series back against the
  articles marks it \`reviewStatus reviewed; humanReviewed true;\`.  Revert with
  \`bin/choupo-curate revert Dichloroethane-ethylAcetate\`.

  REPRODUCE: run tutorials/props/curation/curate556_nrtl_Dichloroethane_ethylAcetate (after \`bin/choupo-curate fetch\` on it); its fit
  writes Dichloroethane-ethylAcetate.proposal.dat, which bin/curate/check_regressed_pairs.py holds
  equal to this record.
\\*---------------------------------------------------------------------------*/

recordType binaryInteractionParameters;
schemaVersion 1;

pair { i Dichloroethane; j ethylAcetate; }

components  ( Dichloroethane  ethylAcetate );
model       NRTL;

parameters
{
    i           Dichloroethane;
    j           ethylAcetate;
    a_ij        0.00000000;
    b_ij        -100.64427944;
    a_ji        0.00000000;
    b_ji        43.92993104;
    alpha       0.30000000;
}

provenance
{
    origin        fitted;
    method        "fitParameters(P_bubble), Levenberg-Marquardt";
    methodVersion "choupoProps Choupo-dev";
    fittedInCase  "tutorials/props/curation/curate556_nrtl_Dichloroethane_ethylAcetate";
    reviewStatus  autoPromoted;
    humanReviewed false;
    fitGrade      clean;   // DEV.md 4c C285 (C291): max |P_model - P|/P over the kept points, graded 5 / 10 / 20 %
    fitGradeMaxRelativeError_pct 1.1094;
    promotedBy    "bin/curate/pairs_px.py promote";
    promotedDate  "2026-11-10";
    reviewReason  "regressed by bin/choupo-curate from archive-transcribed measurements; not yet read back against the articles";
    reuse         "Choupo's own regression; the measured points belong to the cited articles and are not reproduced in this record or this tree";
    fitDate       "2026-11-10";

    evidence
    (
        {
            role      fit;
            dataset   "constant/archiveExtracts/Dichloroethane-ethylAcetate-bubbleP-je034259j-b19.dat";
            doi       "10.1021/je034259j";
            sha256    "9b097498da26d2f8dc0af2df64c2c5af9fbf9b7fd1aa4150a8a9b4bb774027f0";
            provenance measured;
            archiveFile "je034259j.xml";
            system    "Dichloroethane + ethylAcetate";
        }
    );
    fingerprint "371671498ac1a0aa";   // of the declaration, frozen before the fit

    //  IN-SAMPLE: the model reproducing the very points it was
    //  fitted to.  It is NOT a validation; see the block below.
    weighting     equal;   // chi2 is sum ((P_model - P_exp)/P_exp)^2, dimensionless
    chi2          0.00113972;
    rms_rel       0.00795725;
    nDataPoints   18;
    identifiable  false;
    maxAbsCorr    0.99982607;

    validity
    {
        temperature { min 313.15 K; max 313.15 K; }
        pressure    { min 20706 Pa; max 24143 Pa; }
        note        "the span of the FIT evidence; outside it the pair is an extrapolation";
    }
}

validation
{
    verdict     validationRefused;

    heldOut     none;   // every declared dataset carried \`role fit\`

    acceptance  none;   // no band was declared before the fit, so no
                        // pass/fail may be read out of the residual above
}

curation
{
    rule            "DEV.md 4c C291 (bubble-pressure pairs; every laboratory, graded by C285)";
    evidence        allLaboratories;   // every block fitted, none held out
    objective       twoStage;
    residual        P_bubble;
    residualScale   relative;   // (P_model - P)/P at each point's stated T
    outlierLimit_pct 20;   // |P_model - P|/P after the least-squares stage
    outliersDropped 0;
    pointsKept      18;
    noBubblePoint   0;
    maxRelError_pct 1.1094;
    meanRelError_pct 0.7001;
    acceptance      graded;   // max relative pressure error over the kept points, DEV.md 4c C285 (C291)
    gradeLimits_pct (5 10 20);   // upper limits of clean / warning / severe; above, refused
    grade           clean;
    oneLiquid       true;   // arm (f) over the validity span; a pair that splits ONE liquid is never promoted
    temperatures    1;   // distinct stated temperatures in the evidence
    laboratories    1;   // distinct articles in the evidence
    singleTemperature true;   // true: b/T was fitted at ONE temperature
    singleLaboratory  true;   // true: ONE laboratory's data, nothing to cross-check it
    verdict         accepted;
}
`,Ye=`/*---------------------------------------------------------------------------*\\
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
`,Xe=`/*---------------------------------------------------------------------------*\\
  NRTL binary interaction parameters --- acetone(i) + methanol(j)

  REGRESSED BY CHOUPO'S CURATION PIPELINE (bin/choupo-curate, DEV.md 4c C282;
  record docs/design/binary-pairs-from-open-measurements.md) to measured
  bubble temperatures.  The articles named under \`evidence\` are the
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
  its fitting pipeline (every laboratory fitted, outliers beyond 3 K
  discarded by name, max |T_model - T| over the kept points GRADED
  clean / warning / severe at 1 / 2 / 4 K -- DEV.md 4c C283
  amended, C285, C286; THIS fit: clean, 0.6221 K; one liquid
  across its validity span), and NO HUMAN HAS REVIEWED IT.  The
  engine says so on every run that reads it, and voices a warning
  or a severe grade beside it.
  Nothing was held out: the \`validation {}\` block says so, and the
  acceptance is the \`curation {}\` block.  A curator who reads the series
  back against the articles marks it \`reviewStatus reviewed; humanReviewed
  true;\`.  Revert with \`bin/choupo-curate revert acetone-methanol\`.

  REPRODUCE: run tutorials/props/curation/curate100_nrtl_acetone_methanol (after \`bin/choupo-curate fetch\` on it); its fit
  writes acetone-methanol.proposal.dat, which bin/curate/check_regressed_pairs.py holds
  equal to this record.
\\*---------------------------------------------------------------------------*/

recordType binaryInteractionParameters;
schemaVersion 1;

pair { i acetone; j methanol; }

components  ( acetone  methanol );
model       NRTL;

parameters
{
    i           acetone;
    j           methanol;
    a_ij        0.00000000;
    b_ij        103.58615288;
    a_ji        0.00000000;
    b_ji        112.54970592;
    alpha       0.30000000;
}

provenance
{
    origin        fitted;
    method        "fitParameters(T_bubble), Levenberg-Marquardt";
    methodVersion "choupoProps Choupo-dev";
    fittedInCase  "tutorials/props/curation/curate100_nrtl_acetone_methanol";
    reviewStatus  autoPromoted;
    humanReviewed false;
    fitGrade      clean;   // DEV.md 4c C285 (C286): max |T_model - T| over the kept points, graded 1 / 2 / 4 K
    fitGradeMaxTemperatureError_K 0.6221;
    promotedBy    "bin/choupo-curate pair --promote";
    promotedDate  "2026-11-10";
    reviewReason  "regressed by bin/choupo-curate from archive-transcribed measurements; not yet read back against the articles";
    reuse         "Choupo's own regression; the measured points belong to the cited articles and are not reproduced in this record or this tree";
    fitDate       "2026-11-10";

    evidence
    (
        {
            role      fit;
            dataset   "constant/archiveExtracts/acetone-methanol-bubble-je5007373.dat";
            doi       "10.1021/je5007373";
            sha256    "79535f504457aabf09e5c9df149e586cf96d04212b422eb7813ac641cdbadfd1";
            provenance measured;
            archiveFile "je5007373.xml";
            system    "acetone + methanol";
            pressure  "101300.000000 Pa";
        }
        {
            role      fit;
            dataset   "constant/archiveExtracts/acetone-methanol-bubble-j.fluid.2006.09.007.dat";
            doi       "10.1016/j.fluid.2006.09.007";
            sha256    "d4601d0e519b650f37ea06b2410d2508cfa49ed4478f0750bd757caa9be18c03";
            provenance measured;
            archiveFile "j.fluid.2006.09.007.xml";
            system    "acetone + methanol";
            pressure  "100000.000000 Pa";
        }
        {
            role      fit;
            dataset   "constant/archiveExtracts/acetone-methanol-bubble-je0603170.dat";
            doi       "10.1021/je0603170";
            sha256    "3922e66535572b611e70b08d8c1c6e9b640065e32f6ebbbe4acfa7f12271398d";
            provenance measured;
            archiveFile "je0603170.xml";
            system    "acetone + methanol";
            pressure  "100000.000000 Pa";
        }
        {
            role      fit;
            dataset   "constant/archiveExtracts/acetone-methanol-bubble-j.fluid.2017.03.014.dat";
            doi       "10.1016/j.fluid.2017.03.014";
            sha256    "a4c89e4f7c5200bcfbab6dc436eb169b8098dfcc679b700f36306283e75616ee";
            provenance measured;
            archiveFile "j.fluid.2017.03.014.xml";
            system    "acetone + methanol";
            pressure  "101300.000000 Pa";
        }
        {
            role      fit;
            dataset   "constant/archiveExtracts/acetone-methanol-bubble-j.fluid.2017.11.035.dat";
            doi       "10.1016/j.fluid.2017.11.035";
            sha256    "3de59f3824e25a5583a4fb1bfd35fbb3a66f50f4c1b179697988efe47a023537";
            provenance measured;
            archiveFile "j.fluid.2017.11.035.xml";
            system    "acetone + methanol";
            pressure  "101000.000000 Pa";
        }
        {
            role      fit;
            dataset   "constant/archiveExtracts/acetone-methanol-bubble-j.fluid.2014.10.011.dat";
            doi       "10.1016/j.fluid.2014.10.011";
            sha256    "aa1b9032227ac9876f1f5b9e3774b050d028d005290353c55dd5de7a07c30c37";
            provenance measured;
            archiveFile "j.fluid.2014.10.011.xml";
            system    "acetone + methanol";
            pressure  "101300.000000 Pa";
        }
        {
            role      fit;
            dataset   "constant/archiveExtracts/acetone-methanol-bubble-je049688b.dat";
            doi       "10.1021/je049688b";
            sha256    "8e1f96a5d0f31e4488639bf19bc96dd3ebbb9f9fd65d03d41ab20f6be37af1ea";
            provenance measured;
            archiveFile "je049688b.xml";
            system    "acetone + methanol";
            pressure  "101000.000000 Pa";
        }
    );
    fingerprint "482058beda317298";   // of the declaration, frozen before the fit

    //  IN-SAMPLE: the model reproducing the very points it was
    //  fitted to.  It is NOT a validation; see the block below.
    weighting     uncertainty;   // chi2 is sum ((T_model - T_exp)/U)^2, dimensionless
    chi2          408.26744690;
    rms_K         0.22467652;
    nDataPoints   156;
    identifiable  true;
    maxAbsCorr    0.99722744;

    validity
    {
        temperature { min 327.96 K; max 337.05 K; }
        pressure    { min 100000 Pa; max 101300 Pa; }
        note        "the span of the FIT evidence; outside it the pair is an extrapolation";
    }
}

validation
{
    verdict     validationRefused;

    heldOut     none;   // every declared dataset carried \`role fit\`

    acceptance  none;   // no band was declared before the fit, so no
                        // pass/fail may be read out of the residual above
}

curation
{
    rule            "DEV.md 4c C283 (amended) + C284, graded by C285 (C286)";
    evidence        allLaboratories;   // every study fitted, none held out
    objective       twoStage;
    outlierLimit    3 K;   // |T_model - T| after the least-squares stage
    outliersDropped 0;
    pointsKept      156;
    noBubblePoint   0;
    maxAbsError     0.6221 K;
    meanAbsError    0.1633 K;
    acceptance      graded;   // max |T_model - T| over the kept points, DEV.md 4c C285 (C286)
    gradeLimits_K   (1 2 4);   // upper limits of clean / warning / severe; above, refused
    grade           clean;
    oneLiquid       true;   // arm (f) over the validity span; a pair that splits ONE liquid is never promoted, whatever its grade
    verdict         accepted;
}
`,Qe=`/*---------------------------------------------------------------------------*\\
  NRTL binary interaction parameters --- ethanol(i) + acetonitrile(j)

  REGRESSED BY CHOUPO'S CURATION PIPELINE (bin/choupo-curate, DEV.md 4c C282;
  record docs/design/binary-pairs-from-open-measurements.md) to measured
  bubble PRESSURES at stated temperatures (P-x, DEV.md 4c C291).  The articles named under \`evidence\` are the
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
  its fitting pipeline (every laboratory fitted to the bubble pressure, outliers beyond
  20 % discarded by name, max |P_model - P|/P over the kept points GRADED
  clean / warning / severe at 5 / 10 / 20 % -- DEV.md 4c C283 amended, C285, C291;
  THIS fit: clean, 0.8869 %; one liquid across its validity span), and NO
  HUMAN HAS REVIEWED IT.  The engine says so on every run that reads it, and
  voices a warning or a severe grade beside it.
  CAUTION: this record rests on ONE temperature and ONE laboratory.
  Nothing was held out: the \`validation {}\` block says so, and the acceptance
  is the \`curation {}\` block.  A curator who reads the series back against the
  articles marks it \`reviewStatus reviewed; humanReviewed true;\`.  Revert with
  \`bin/choupo-curate revert acetonitrile-ethanol\`.

  REPRODUCE: run tutorials/props/curation/curate509_nrtl_ethanol_acetonitrile (after \`bin/choupo-curate fetch\` on it); its fit
  writes acetonitrile-ethanol.proposal.dat, which bin/curate/check_regressed_pairs.py holds
  equal to this record.
\\*---------------------------------------------------------------------------*/

recordType binaryInteractionParameters;
schemaVersion 1;

pair { i ethanol; j acetonitrile; }

components  ( ethanol  acetonitrile );
model       NRTL;

parameters
{
    i           ethanol;
    j           acetonitrile;
    a_ij        0.00000000;
    b_ij        504.91631402;
    a_ji        0.00000000;
    b_ji        -34.32032207;
    alpha       0.30000000;
}

provenance
{
    origin        fitted;
    method        "fitParameters(P_bubble), Levenberg-Marquardt";
    methodVersion "choupoProps Choupo-dev";
    fittedInCase  "tutorials/props/curation/curate509_nrtl_ethanol_acetonitrile";
    reviewStatus  autoPromoted;
    humanReviewed false;
    fitGrade      clean;   // DEV.md 4c C285 (C291): max |P_model - P|/P over the kept points, graded 5 / 10 / 20 %
    fitGradeMaxRelativeError_pct 0.8869;
    promotedBy    "bin/curate/pairs_px.py promote";
    promotedDate  "2026-11-10";
    reviewReason  "regressed by bin/choupo-curate from archive-transcribed measurements; not yet read back against the articles";
    reuse         "Choupo's own regression; the measured points belong to the cited articles and are not reproduced in this record or this tree";
    fitDate       "2026-11-10";

    evidence
    (
        {
            role      fit;
            dataset   "constant/archiveExtracts/ethanol-acetonitrile-bubbleP-je800535c-b13.dat";
            doi       "10.1021/je800535c";
            sha256    "b936ec60ecb4d987ff9b9ae630c23851eb127999e550127382ca762a4e9b3be6";
            provenance measured;
            archiveFile "je800535c.xml";
            system    "ethanol + acetonitrile";
        }
    );
    fingerprint "563279132b3faee8";   // of the declaration, frozen before the fit

    //  IN-SAMPLE: the model reproducing the very points it was
    //  fitted to.  It is NOT a validation; see the block below.
    weighting     equal;   // chi2 is sum ((P_model - P_exp)/P_exp)^2, dimensionless
    chi2          0.00111424;
    rms_rel       0.00572466;
    nDataPoints   34;
    identifiable  true;
    maxAbsCorr    0.98654969;

    validity
    {
        temperature { min 333.15 K; max 333.15 K; }
        pressure    { min 53786 Pa; max 63019 Pa; }
        note        "the span of the FIT evidence; outside it the pair is an extrapolation";
    }
}

validation
{
    verdict     validationRefused;

    heldOut     none;   // every declared dataset carried \`role fit\`

    acceptance  none;   // no band was declared before the fit, so no
                        // pass/fail may be read out of the residual above
}

curation
{
    rule            "DEV.md 4c C291 (bubble-pressure pairs; every laboratory, graded by C285)";
    evidence        allLaboratories;   // every block fitted, none held out
    objective       twoStage;
    residual        P_bubble;
    residualScale   relative;   // (P_model - P)/P at each point's stated T
    outlierLimit_pct 20;   // |P_model - P|/P after the least-squares stage
    outliersDropped 0;
    pointsKept      34;
    noBubblePoint   0;
    maxRelError_pct 0.8869;
    meanRelError_pct 0.4925;
    acceptance      graded;   // max relative pressure error over the kept points, DEV.md 4c C285 (C291)
    gradeLimits_pct (5 10 20);   // upper limits of clean / warning / severe; above, refused
    grade           clean;
    oneLiquid       true;   // arm (f) over the validity span; a pair that splits ONE liquid is never promoted
    temperatures    1;   // distinct stated temperatures in the evidence
    laboratories    1;   // distinct articles in the evidence
    singleTemperature true;   // true: b/T was fitted at ONE temperature
    singleLaboratory  true;   // true: ONE laboratory's data, nothing to cross-check it
    verdict         accepted;
}
`,We=`/*---------------------------------------------------------------------------*\\
  NRTL binary interaction parameters --- ethylAcetate(i) + acetonitrile(j)

  REGRESSED BY CHOUPO'S CURATION PIPELINE (bin/choupo-curate, DEV.md 4c C282;
  record docs/design/binary-pairs-from-open-measurements.md) to measured
  bubble temperatures.  The articles named under \`evidence\` are the
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
  its fitting pipeline (every laboratory fitted, outliers beyond 3 K
  discarded by name, max |T_model - T| over the kept points GRADED
  clean / warning / severe at 1 / 2 / 4 K -- DEV.md 4c C283
  amended, C285, C286; THIS fit: clean, 0.3040 K; one liquid
  across its validity span), and NO HUMAN HAS REVIEWED IT.  The
  engine says so on every run that reads it, and voices a warning
  or a severe grade beside it.
  Nothing was held out: the \`validation {}\` block says so, and the
  acceptance is the \`curation {}\` block.  A curator who reads the series
  back against the articles marks it \`reviewStatus reviewed; humanReviewed
  true;\`.  Revert with \`bin/choupo-curate revert acetonitrile-ethylAcetate\`.

  REPRODUCE: run tutorials/props/curation/curate115_nrtl_ethylAcetate_acetonitrile (after \`bin/choupo-curate fetch\` on it); its fit
  writes acetonitrile-ethylAcetate.proposal.dat, which bin/curate/check_regressed_pairs.py holds
  equal to this record.
\\*---------------------------------------------------------------------------*/

recordType binaryInteractionParameters;
schemaVersion 1;

pair { i ethylAcetate; j acetonitrile; }

components  ( ethylAcetate  acetonitrile );
model       NRTL;

parameters
{
    i           ethylAcetate;
    j           acetonitrile;
    a_ij        0.00000000;
    b_ij        -23.85965300;
    a_ji        0.00000000;
    b_ji        215.21115125;
    alpha       0.30000000;
}

provenance
{
    origin        fitted;
    method        "fitParameters(T_bubble), Levenberg-Marquardt";
    methodVersion "choupoProps Choupo-dev";
    fittedInCase  "tutorials/props/curation/curate115_nrtl_ethylAcetate_acetonitrile";
    reviewStatus  autoPromoted;
    humanReviewed false;
    fitGrade      clean;   // DEV.md 4c C285 (C286): max |T_model - T| over the kept points, graded 1 / 2 / 4 K
    fitGradeMaxTemperatureError_K 0.3040;
    promotedBy    "bin/choupo-curate pair --promote";
    promotedDate  "2026-11-10";
    reviewReason  "regressed by bin/choupo-curate from archive-transcribed measurements; not yet read back against the articles";
    reuse         "Choupo's own regression; the measured points belong to the cited articles and are not reproduced in this record or this tree";
    fitDate       "2026-11-10";

    evidence
    (
        {
            role      fit;
            dataset   "constant/archiveExtracts/ethylAcetate-acetonitrile-bubble-j.fluid.2016.06.022.dat";
            doi       "10.1016/j.fluid.2016.06.022";
            sha256    "34707ecbb46cdab3ae31c6ce7b36f315eaa43d153d51976f5c09e13cbe775cca";
            provenance measured;
            archiveFile "j.fluid.2016.06.022.xml";
            system    "ethylAcetate + acetonitrile";
            pressure  "101300.000000 Pa";
        }
        {
            role      fit;
            dataset   "constant/archiveExtracts/ethylAcetate-acetonitrile-bubble-acs.jced.5b00995.dat";
            doi       "10.1021/acs.jced.5b00995";
            sha256    "35504cd3f6cdb9660d146e081fe6d6e41e62dff766441c6a7301b2f72a477ffc";
            provenance measured;
            archiveFile "acs.jced.5b00995.xml";
            system    "ethylAcetate + acetonitrile";
            pressure  "101300.000000 Pa";
        }
        {
            role      fit;
            dataset   "constant/archiveExtracts/ethylAcetate-acetonitrile-bubble-je301204w.dat";
            doi       "10.1021/je301204w";
            sha256    "fde6d0595613726eba337f33b2091df9dfd668c1f26878081f66de66d8a8ceb3";
            provenance measured;
            archiveFile "je301204w.xml";
            system    "ethylAcetate + acetonitrile";
            pressure  "101300.000000 Pa";
        }
    );
    fingerprint "ca94d65a80010b2d";   // of the declaration, frozen before the fit

    //  IN-SAMPLE: the model reproducing the very points it was
    //  fitted to.  It is NOT a validation; see the block below.
    weighting     uncertainty;   // chi2 is sum ((T_model - T_exp)/U)^2, dimensionless
    chi2          13.21922514;
    rms_K         0.17373903;
    nDataPoints   30;
    identifiable  true;
    maxAbsCorr    0.99819971;

    validity
    {
        temperature { min 348.45 K; max 353.20 K; }
        pressure    { min 101300 Pa; max 101300 Pa; }
        note        "the span of the FIT evidence; outside it the pair is an extrapolation";
    }
}

validation
{
    verdict     validationRefused;

    heldOut     none;   // every declared dataset carried \`role fit\`

    acceptance  none;   // no band was declared before the fit, so no
                        // pass/fail may be read out of the residual above
}

curation
{
    rule            "DEV.md 4c C283 (amended) + C284, graded by C285 (C286)";
    evidence        allLaboratories;   // every study fitted, none held out
    objective       twoStage;
    outlierLimit    3 K;   // |T_model - T| after the least-squares stage
    outliersDropped 0;
    pointsKept      30;
    noBubblePoint   0;
    maxAbsError     0.3040 K;
    meanAbsError    0.1524 K;
    acceptance      graded;   // max |T_model - T| over the kept points, DEV.md 4c C285 (C286)
    gradeLimits_K   (1 2 4);   // upper limits of clean / warning / severe; above, refused
    grade           clean;
    oneLiquid       true;   // arm (f) over the validity span; a pair that splits ONE liquid is never promoted, whatever its grade
    verdict         accepted;
}
`,$e=`/*---------------------------------------------------------------------------*\\
  NRTL binary interaction parameters --- acetonitrile(i) + isopropanol(j)

  REGRESSED BY CHOUPO'S CURATION PIPELINE (bin/choupo-curate, DEV.md 4c C282;
  record docs/design/binary-pairs-from-open-measurements.md) to measured
  bubble temperatures.  The articles named under \`evidence\` are the
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
  its fitting pipeline (every laboratory fitted, outliers beyond 3 K
  discarded by name, max |T_model - T| over the kept points GRADED
  clean / warning / severe at 1 / 2 / 4 K -- DEV.md 4c C283
  amended, C285, C286; THIS fit: severe, 2.5969 K; one liquid
  across its validity span), and NO HUMAN HAS REVIEWED IT.  The
  engine says so on every run that reads it, and voices a warning
  or a severe grade beside it.
  Nothing was held out: the \`validation {}\` block says so, and the
  acceptance is the \`curation {}\` block.  A curator who reads the series
  back against the articles marks it \`reviewStatus reviewed; humanReviewed
  true;\`.  Revert with \`bin/choupo-curate revert acetonitrile-isopropanol\`.

  REPRODUCE: run tutorials/props/curation/curate150_nrtl_acetonitrile_isopropanol (after \`bin/choupo-curate fetch\` on it); its fit
  writes acetonitrile-isopropanol.proposal.dat, which bin/curate/check_regressed_pairs.py holds
  equal to this record.
\\*---------------------------------------------------------------------------*/

recordType binaryInteractionParameters;
schemaVersion 1;

pair { i acetonitrile; j isopropanol; }

components  ( acetonitrile  isopropanol );
model       NRTL;

parameters
{
    i           acetonitrile;
    j           isopropanol;
    a_ij        0.00000000;
    b_ij        1.55992990;
    a_ji        0.00000000;
    b_ji        378.94717866;
    alpha       0.30000000;
}

provenance
{
    origin        fitted;
    method        "fitParameters(T_bubble), Levenberg-Marquardt";
    methodVersion "choupoProps Choupo-dev";
    fittedInCase  "tutorials/props/curation/curate150_nrtl_acetonitrile_isopropanol";
    reviewStatus  autoPromoted;
    humanReviewed false;
    fitGrade      severe;   // DEV.md 4c C285 (C286): max |T_model - T| over the kept points, graded 1 / 2 / 4 K
    fitGradeMaxTemperatureError_K 2.5969;
    promotedBy    "bin/choupo-curate pair --promote";
    promotedDate  "2026-11-10";
    reviewReason  "regressed by bin/choupo-curate from archive-transcribed measurements; not yet read back against the articles";
    reuse         "Choupo's own regression; the measured points belong to the cited articles and are not reproduced in this record or this tree";
    fitDate       "2026-11-10";

    evidence
    (
        {
            role      fit;
            dataset   "constant/archiveExtracts/acetonitrile-isopropanol-bubble-j.jct.2007.03.007.dat";
            doi       "10.1016/j.jct.2007.03.007";
            sha256    "1e51e148a411dd6d0f92e2bdb90371ad41472fab6ab57c1c895e50f71d8517c5";
            provenance measured;
            archiveFile "j.jct.2007.03.007.xml";
            system    "acetonitrile + isopropanol";
            pressure  "95500.000000 Pa";
        }
        {
            role      fit;
            dataset   "constant/archiveExtracts/acetonitrile-isopropanol-bubble-j.fluid.2015.10.035.dat";
            doi       "10.1016/j.fluid.2015.10.035";
            sha256    "5617d2a65b872b8e2bd91b07ea48975117a45969d783db1032ea446760f93d6b";
            provenance measured;
            archiveFile "j.fluid.2015.10.035.xml";
            system    "acetonitrile + isopropanol";
            pressure  "101300.000000 Pa";
        }
    );
    fingerprint "e01593cb2bb85f6d";   // of the declaration, frozen before the fit

    //  IN-SAMPLE: the model reproducing the very points it was
    //  fitted to.  It is NOT a validation; see the block below.
    weighting     uncertainty;   // chi2 is sum ((T_model - T_exp)/U)^2, dimensionless
    chi2          133.00846312;
    rms_K         1.15104812;
    nDataPoints   20;
    identifiable  true;
    maxAbsCorr    0.99329248;

    validity
    {
        temperature { min 348.40 K; max 353.15 K; }
        pressure    { min 95500 Pa; max 101300 Pa; }
        note        "the span of the FIT evidence; outside it the pair is an extrapolation";
    }
}

validation
{
    verdict     validationRefused;

    heldOut     none;   // every declared dataset carried \`role fit\`

    acceptance  none;   // no band was declared before the fit, so no
                        // pass/fail may be read out of the residual above
}

curation
{
    rule            "DEV.md 4c C283 (amended) + C284, graded by C285 (C286)";
    evidence        allLaboratories;   // every study fitted, none held out
    objective       twoStage;
    outlierLimit    3 K;   // |T_model - T| after the least-squares stage
    outliersDropped 7;
    pointsKept      20;
    noBubblePoint   0;
    maxAbsError     2.5969 K;
    meanAbsError    0.8115 K;
    acceptance      graded;   // max |T_model - T| over the kept points, DEV.md 4c C285 (C286)
    gradeLimits_K   (1 2 4);   // upper limits of clean / warning / severe; above, refused
    grade           severe;
    oneLiquid       true;   // arm (f) over the validity span; a pair that splits ONE liquid is never promoted, whatever its grade
    verdict         accepted;
}
`,Je=`/*---------------------------------------------------------------------------*\\
  NRTL binary interaction parameters --- acetonitrile(i) + methanol(j)

  REGRESSED BY CHOUPO'S CURATION PIPELINE (bin/choupo-curate, DEV.md 4c C282;
  record docs/design/binary-pairs-from-open-measurements.md) to measured
  bubble temperatures.  The articles named under \`evidence\` are the
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
  its fitting pipeline (every laboratory fitted, outliers beyond 3 K
  discarded by name, max |T_model - T| over the kept points GRADED
  clean / warning / severe at 1 / 2 / 4 K -- DEV.md 4c C283
  amended, C285, C286; THIS fit: clean, 0.9910 K; one liquid
  across its validity span), and NO HUMAN HAS REVIEWED IT.  The
  engine says so on every run that reads it, and voices a warning
  or a severe grade beside it.
  Nothing was held out: the \`validation {}\` block says so, and the
  acceptance is the \`curation {}\` block.  A curator who reads the series
  back against the articles marks it \`reviewStatus reviewed; humanReviewed
  true;\`.  Revert with \`bin/choupo-curate revert acetonitrile-methanol\`.

  REPRODUCE: run tutorials/props/curation/curate104_nrtl_acetonitrile_methanol (after \`bin/choupo-curate fetch\` on it); its fit
  writes acetonitrile-methanol.proposal.dat, which bin/curate/check_regressed_pairs.py holds
  equal to this record.
\\*---------------------------------------------------------------------------*/

recordType binaryInteractionParameters;
schemaVersion 1;

pair { i acetonitrile; j methanol; }

components  ( acetonitrile  methanol );
model       NRTL;

parameters
{
    i           acetonitrile;
    j           methanol;
    a_ij        0.00000000;
    b_ij        351.45055604;
    a_ji        0.00000000;
    b_ji        -20.05158185;
    alpha       0.30000000;
}

provenance
{
    origin        fitted;
    method        "fitParameters(T_bubble), Levenberg-Marquardt";
    methodVersion "choupoProps Choupo-dev";
    fittedInCase  "tutorials/props/curation/curate104_nrtl_acetonitrile_methanol";
    reviewStatus  autoPromoted;
    humanReviewed false;
    fitGrade      clean;   // DEV.md 4c C285 (C286): max |T_model - T| over the kept points, graded 1 / 2 / 4 K
    fitGradeMaxTemperatureError_K 0.9910;
    promotedBy    "bin/choupo-curate pair --promote";
    promotedDate  "2026-11-10";
    reviewReason  "regressed by bin/choupo-curate from archive-transcribed measurements; not yet read back against the articles";
    reuse         "Choupo's own regression; the measured points belong to the cited articles and are not reproduced in this record or this tree";
    fitDate       "2026-11-10";

    evidence
    (
        {
            role      fit;
            dataset   "constant/archiveExtracts/acetonitrile-methanol-bubble-j.fluid.2018.08.009.dat";
            doi       "10.1016/j.fluid.2018.08.009";
            sha256    "81899196e15a4ee4622f443aa983636a215e5cb860e7e3fcb5e5d8edcdd831b8";
            provenance measured;
            archiveFile "j.fluid.2018.08.009.xml";
            system    "acetonitrile + methanol";
            pressure  "101300.000000 Pa";
        }
        {
            role      fit;
            dataset   "constant/archiveExtracts/acetonitrile-methanol-bubble-acs.jced.5b00796.dat";
            doi       "10.1021/acs.jced.5b00796";
            sha256    "dc72e7585c0d97de54ad97529963dccb6cfaf69cd94622cbe4d30c3bdf368478";
            provenance measured;
            archiveFile "acs.jced.5b00796.xml";
            system    "acetonitrile + methanol";
            pressure  "101320.000000 Pa";
        }
        {
            role      fit;
            dataset   "constant/archiveExtracts/acetonitrile-methanol-bubble-j.jct.2016.05.011.dat";
            doi       "10.1016/j.jct.2016.05.011";
            sha256    "f784f031b2ff87e3e3033753568ee52ad0953bd8de44ebd5ece08e7c937d8859";
            provenance measured;
            archiveFile "j.jct.2016.05.011.xml";
            system    "acetonitrile + methanol";
            pressure  "101300.000000 Pa";
        }
        {
            role      fit;
            dataset   "constant/archiveExtracts/acetonitrile-methanol-bubble-j.fluid.2012.12.003.dat";
            doi       "10.1016/j.fluid.2012.12.003";
            sha256    "b684fe66f9eccc75253eb910e6cbfdc7cc241bc943f6a82105408eb8d9ba7dc2";
            provenance measured;
            archiveFile "j.fluid.2012.12.003.xml";
            system    "acetonitrile + methanol";
            pressure  "101300.000000 Pa";
        }
    );
    fingerprint "bbbe9eec64c2c576";   // of the declaration, frozen before the fit

    //  IN-SAMPLE: the model reproducing the very points it was
    //  fitted to.  It is NOT a validation; see the block below.
    weighting     uncertainty;   // chi2 is sum ((T_model - T_exp)/U)^2, dimensionless
    chi2          481.71612965;
    rms_K         0.52660091;
    nDataPoints   51;
    identifiable  true;
    maxAbsCorr    0.98999223;

    validity
    {
        temperature { min 336.55 K; max 351.02 K; }
        pressure    { min 101300 Pa; max 101320 Pa; }
        note        "the span of the FIT evidence; outside it the pair is an extrapolation";
    }
}

validation
{
    verdict     validationRefused;

    heldOut     none;   // every declared dataset carried \`role fit\`

    acceptance  none;   // no band was declared before the fit, so no
                        // pass/fail may be read out of the residual above
}

curation
{
    rule            "DEV.md 4c C283 (amended) + C284, graded by C285 (C286)";
    evidence        allLaboratories;   // every study fitted, none held out
    objective       twoStage;
    outlierLimit    3 K;   // |T_model - T| after the least-squares stage
    outliersDropped 0;
    pointsKept      51;
    noBubblePoint   0;
    maxAbsError     0.9910 K;
    meanAbsError    0.4523 K;
    acceptance      graded;   // max |T_model - T| over the kept points, DEV.md 4c C285 (C286)
    gradeLimits_K   (1 2 4);   // upper limits of clean / warning / severe; above, refused
    grade           clean;
    oneLiquid       true;   // arm (f) over the validity span; a pair that splits ONE liquid is never promoted, whatever its grade
    verdict         accepted;
}
`,Ze=`/*---------------------------------------------------------------------------*\\
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
`,en=`/*---------------------------------------------------------------------------*\\
  NRTL binary interaction parameters --- nNDimethylformamide(i) + aniline(j)

  REGRESSED BY CHOUPO'S CURATION PIPELINE (bin/choupo-curate, DEV.md 4c C282;
  record docs/design/binary-pairs-from-open-measurements.md) to measured
  bubble temperatures.  The articles named under \`evidence\` are the
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
  its fitting pipeline (every laboratory fitted, outliers beyond 3 K
  discarded by name, max |T_model - T| over the kept points GRADED
  clean / warning / severe at 1 / 2 / 4 K -- DEV.md 4c C283
  amended, C285, C286; THIS fit: warning, 1.9931 K; one liquid
  across its validity span), and NO HUMAN HAS REVIEWED IT.  The
  engine says so on every run that reads it, and voices a warning
  or a severe grade beside it.
  Nothing was held out: the \`validation {}\` block says so, and the
  acceptance is the \`curation {}\` block.  A curator who reads the series
  back against the articles marks it \`reviewStatus reviewed; humanReviewed
  true;\`.  Revert with \`bin/choupo-curate revert aniline-nNDimethylformamide\`.

  REPRODUCE: run tutorials/props/curation/curate151_nrtl_nNDimethylformamide_aniline (after \`bin/choupo-curate fetch\` on it); its fit
  writes aniline-nNDimethylformamide.proposal.dat, which bin/curate/check_regressed_pairs.py holds
  equal to this record.
\\*---------------------------------------------------------------------------*/

recordType binaryInteractionParameters;
schemaVersion 1;

pair { i nNDimethylformamide; j aniline; }

components  ( nNDimethylformamide  aniline );
model       NRTL;

parameters
{
    i           nNDimethylformamide;
    j           aniline;
    a_ij        0.00000000;
    b_ij        580.18217679;
    a_ji        0.00000000;
    b_ji        -629.64914747;
    alpha       0.30000000;
}

provenance
{
    origin        fitted;
    method        "fitParameters(T_bubble), Levenberg-Marquardt";
    methodVersion "choupoProps Choupo-dev";
    fittedInCase  "tutorials/props/curation/curate151_nrtl_nNDimethylformamide_aniline";
    reviewStatus  autoPromoted;
    humanReviewed false;
    fitGrade      warning;   // DEV.md 4c C285 (C286): max |T_model - T| over the kept points, graded 1 / 2 / 4 K
    fitGradeMaxTemperatureError_K 1.9931;
    promotedBy    "bin/choupo-curate pair --promote";
    promotedDate  "2026-11-10";
    reviewReason  "regressed by bin/choupo-curate from archive-transcribed measurements; not yet read back against the articles";
    reuse         "Choupo's own regression; the measured points belong to the cited articles and are not reproduced in this record or this tree";
    fitDate       "2026-11-10";

    evidence
    (
        {
            role      fit;
            dataset   "constant/archiveExtracts/nNDimethylformamide-aniline-bubble-j.fluid.2008.07.018.dat";
            doi       "10.1016/j.fluid.2008.07.018";
            sha256    "0aa99bef5ae1fa822f00ccf8f91676bd925a3498107e880eec2f684f33d877a4";
            provenance measured;
            archiveFile "j.fluid.2008.07.018.xml";
            system    "nNDimethylformamide + aniline";
            pressure  "95500.000000 Pa";
        }
        {
            role      fit;
            dataset   "constant/archiveExtracts/nNDimethylformamide-aniline-bubble-acs.jced.6b00700.dat";
            doi       "10.1021/acs.jced.6b00700";
            sha256    "31517b08cb872c8b527209366d2cf3086d5f9373e37022a9af029a3c14686672";
            provenance measured;
            archiveFile "acs.jced.6b00700.xml";
            system    "nNDimethylformamide + aniline";
            pressure  "96150.000000 Pa";
        }
    );
    fingerprint "29d21dabb52ec059";   // of the declaration, frozen before the fit

    //  IN-SAMPLE: the model reproducing the very points it was
    //  fitted to.  It is NOT a validation; see the block below.
    weighting     uncertainty;   // chi2 is sum ((T_model - T_exp)/U)^2, dimensionless
    chi2          251.14183507;
    rms_K         1.15003793;
    nDataPoints   27;
    identifiable  false;
    maxAbsCorr    0.99992153;

    validity
    {
        temperature { min 425.50 K; max 454.60 K; }
        pressure    { min 95500 Pa; max 96150 Pa; }
        note        "the span of the FIT evidence; outside it the pair is an extrapolation";
    }
}

validation
{
    verdict     validationRefused;

    heldOut     none;   // every declared dataset carried \`role fit\`

    acceptance  none;   // no band was declared before the fit, so no
                        // pass/fail may be read out of the residual above
}

curation
{
    rule            "DEV.md 4c C283 (amended) + C284, graded by C285 (C286)";
    evidence        allLaboratories;   // every study fitted, none held out
    objective       twoStage;
    outlierLimit    3 K;   // |T_model - T| after the least-squares stage
    outliersDropped 0;
    pointsKept      27;
    noBubblePoint   0;
    maxAbsError     1.9931 K;
    meanAbsError    0.9603 K;
    acceptance      graded;   // max |T_model - T| over the kept points, DEV.md 4c C285 (C286)
    gradeLimits_K   (1 2 4);   // upper limits of clean / warning / severe; above, refused
    grade           warning;
    oneLiquid       true;   // arm (f) over the validity span; a pair that splits ONE liquid is never promoted, whatever its grade
    verdict         accepted;
}
`,nn=`/*---------------------------------------------------------------------------*\\
  NRTL binary interaction parameters --- nOctane(i) + aniline(j)

  REGRESSED BY CHOUPO'S CURATION PIPELINE (bin/choupo-curate, DEV.md 4c C282;
  record docs/design/binary-pairs-from-open-measurements.md) to measured
  bubble PRESSURES at stated temperatures (P-x, DEV.md 4c C291).  The articles named under \`evidence\` are the
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
  its fitting pipeline (every laboratory fitted to the bubble pressure, outliers beyond
  20 % discarded by name, max |P_model - P|/P over the kept points GRADED
  clean / warning / severe at 5 / 10 / 20 % -- DEV.md 4c C283 amended, C285, C291;
  THIS fit: clean, 0.9076 %; one liquid across its validity span), and NO
  HUMAN HAS REVIEWED IT.  The engine says so on every run that reads it, and
  voices a warning or a severe grade beside it.
  CAUTION: this record rests on ONE temperature and ONE laboratory.
  Nothing was held out: the \`validation {}\` block says so, and the acceptance
  is the \`curation {}\` block.  A curator who reads the series back against the
  articles marks it \`reviewStatus reviewed; humanReviewed true;\`.  Revert with
  \`bin/choupo-curate revert aniline-nOctane\`.

  REPRODUCE: run tutorials/props/curation/curate555_nrtl_nOctane_aniline (after \`bin/choupo-curate fetch\` on it); its fit
  writes aniline-nOctane.proposal.dat, which bin/curate/check_regressed_pairs.py holds
  equal to this record.
\\*---------------------------------------------------------------------------*/

recordType binaryInteractionParameters;
schemaVersion 1;

pair { i nOctane; j aniline; }

components  ( nOctane  aniline );
model       NRTL;

parameters
{
    i           nOctane;
    j           aniline;
    a_ij        0.00000000;
    b_ij        259.74301004;
    a_ji        0.00000000;
    b_ji        679.23137166;
    alpha       0.30000000;
}

provenance
{
    origin        fitted;
    method        "fitParameters(P_bubble), Levenberg-Marquardt";
    methodVersion "choupoProps Choupo-dev";
    fittedInCase  "tutorials/props/curation/curate555_nrtl_nOctane_aniline";
    reviewStatus  autoPromoted;
    humanReviewed false;
    fitGrade      clean;   // DEV.md 4c C285 (C291): max |P_model - P|/P over the kept points, graded 5 / 10 / 20 %
    fitGradeMaxRelativeError_pct 0.9076;
    promotedBy    "bin/curate/pairs_px.py promote";
    promotedDate  "2026-11-10";
    reviewReason  "regressed by bin/choupo-curate from archive-transcribed measurements; not yet read back against the articles";
    reuse         "Choupo's own regression; the measured points belong to the cited articles and are not reproduced in this record or this tree";
    fitDate       "2026-11-10";

    evidence
    (
        {
            role      fit;
            dataset   "constant/archiveExtracts/nOctane-aniline-bubbleP-je0505366-b12.dat";
            doi       "10.1021/je0505366";
            sha256    "fa9f20bc7b2549171a81ef7af4bceae9819a3e74b5345879182570777b656f76";
            provenance measured;
            archiveFile "je0505366.xml";
            system    "nOctane + aniline";
        }
    );
    fingerprint "5d96066705b656fe";   // of the declaration, frozen before the fit

    //  IN-SAMPLE: the model reproducing the very points it was
    //  fitted to.  It is NOT a validation; see the block below.
    weighting     equal;   // chi2 is sum ((P_model - P_exp)/P_exp)^2, dimensionless
    chi2          0.00055739;
    rms_rel       0.00541632;
    nDataPoints   19;
    identifiable  true;
    maxAbsCorr    0.87643299;

    validity
    {
        temperature { min 383.15 K; max 383.15 K; }
        pressure    { min 42590 Pa; max 63600 Pa; }
        note        "the span of the FIT evidence; outside it the pair is an extrapolation";
    }
}

validation
{
    verdict     validationRefused;

    heldOut     none;   // every declared dataset carried \`role fit\`

    acceptance  none;   // no band was declared before the fit, so no
                        // pass/fail may be read out of the residual above
}

curation
{
    rule            "DEV.md 4c C291 (bubble-pressure pairs; every laboratory, graded by C285)";
    evidence        allLaboratories;   // every block fitted, none held out
    objective       twoStage;
    residual        P_bubble;
    residualScale   relative;   // (P_model - P)/P at each point's stated T
    outlierLimit_pct 20;   // |P_model - P|/P after the least-squares stage
    outliersDropped 0;
    pointsKept      19;
    noBubblePoint   0;
    maxRelError_pct 0.9076;
    meanRelError_pct 0.4848;
    acceptance      graded;   // max relative pressure error over the kept points, DEV.md 4c C285 (C291)
    gradeLimits_pct (5 10 20);   // upper limits of clean / warning / severe; above, refused
    grade           clean;
    oneLiquid       true;   // arm (f) over the validity span; a pair that splits ONE liquid is never promoted
    temperatures    1;   // distinct stated temperatures in the evidence
    laboratories    1;   // distinct articles in the evidence
    singleTemperature true;   // true: b/T was fitted at ONE temperature
    singleLaboratory  true;   // true: ONE laboratory's data, nothing to cross-check it
    verdict         accepted;
}
`,tn=`/*---------------------------------------------------------------------------*\\
  NRTL binary interaction parameters --- nHexane(i) + anisole(j)

  REGRESSED BY CHOUPO'S CURATION PIPELINE (bin/choupo-curate, DEV.md 4c C282;
  record docs/design/binary-pairs-from-open-measurements.md) to measured
  bubble PRESSURES at stated temperatures (P-x, DEV.md 4c C291).  The articles named under \`evidence\` are the
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
  its fitting pipeline (every laboratory fitted to the bubble pressure, outliers beyond
  20 % discarded by name, max |P_model - P|/P over the kept points GRADED
  clean / warning / severe at 5 / 10 / 20 % -- DEV.md 4c C283 amended, C285, C291;
  THIS fit: clean, 4.6012 %; one liquid across its validity span), and NO
  HUMAN HAS REVIEWED IT.  The engine says so on every run that reads it, and
  voices a warning or a severe grade beside it.
  CAUTION: this record rests on ONE temperature and ONE laboratory.
  Nothing was held out: the \`validation {}\` block says so, and the acceptance
  is the \`curation {}\` block.  A curator who reads the series back against the
  articles marks it \`reviewStatus reviewed; humanReviewed true;\`.  Revert with
  \`bin/choupo-curate revert anisole-nHexane\`.

  REPRODUCE: run tutorials/props/curation/curate558_nrtl_nHexane_anisole (after \`bin/choupo-curate fetch\` on it); its fit
  writes anisole-nHexane.proposal.dat, which bin/curate/check_regressed_pairs.py holds
  equal to this record.
\\*---------------------------------------------------------------------------*/

recordType binaryInteractionParameters;
schemaVersion 1;

pair { i nHexane; j anisole; }

components  ( nHexane  anisole );
model       NRTL;

parameters
{
    i           nHexane;
    j           anisole;
    a_ij        0.00000000;
    b_ij        1017.04314971;
    a_ji        0.00000000;
    b_ji        -324.50044627;
    alpha       0.30000000;
}

provenance
{
    origin        fitted;
    method        "fitParameters(P_bubble), Levenberg-Marquardt";
    methodVersion "choupoProps Choupo-dev";
    fittedInCase  "tutorials/props/curation/curate558_nrtl_nHexane_anisole";
    reviewStatus  autoPromoted;
    humanReviewed false;
    fitGrade      clean;   // DEV.md 4c C285 (C291): max |P_model - P|/P over the kept points, graded 5 / 10 / 20 %
    fitGradeMaxRelativeError_pct 4.6012;
    promotedBy    "bin/curate/pairs_px.py promote";
    promotedDate  "2026-11-10";
    reviewReason  "regressed by bin/choupo-curate from archive-transcribed measurements; not yet read back against the articles";
    reuse         "Choupo's own regression; the measured points belong to the cited articles and are not reproduced in this record or this tree";
    fitDate       "2026-11-10";

    evidence
    (
        {
            role      fit;
            dataset   "constant/archiveExtracts/nHexane-anisole-bubbleP-j.tca.2019.178413-b4.dat";
            doi       "10.1016/j.tca.2019.178413";
            sha256    "3d6ee0e865534950e10a465f6dbb477ecba29456f1479f663b526dc0fa08c8af";
            provenance measured;
            archiveFile "j.tca.2019.178413.xml";
            system    "nHexane + anisole";
        }
    );
    fingerprint "76d0bde3e895b500";   // of the declaration, frozen before the fit

    //  IN-SAMPLE: the model reproducing the very points it was
    //  fitted to.  It is NOT a validation; see the block below.
    weighting     equal;   // chi2 is sum ((P_model - P_exp)/P_exp)^2, dimensionless
    chi2          0.01687464;
    rms_rel       0.03247561;
    nDataPoints   16;
    identifiable  true;
    maxAbsCorr    0.77712400;

    validity
    {
        temperature { min 313.20 K; max 313.20 K; }
        pressure    { min 4400 Pa; max 37600 Pa; }
        note        "the span of the FIT evidence; outside it the pair is an extrapolation";
    }
}

validation
{
    verdict     validationRefused;

    heldOut     none;   // every declared dataset carried \`role fit\`

    acceptance  none;   // no band was declared before the fit, so no
                        // pass/fail may be read out of the residual above
}

curation
{
    rule            "DEV.md 4c C291 (bubble-pressure pairs; every laboratory, graded by C285)";
    evidence        allLaboratories;   // every block fitted, none held out
    objective       twoStage;
    residual        P_bubble;
    residualScale   relative;   // (P_model - P)/P at each point's stated T
    outlierLimit_pct 20;   // |P_model - P|/P after the least-squares stage
    outliersDropped 0;
    pointsKept      16;
    noBubblePoint   0;
    maxRelError_pct 4.6012;
    meanRelError_pct 2.9570;
    acceptance      graded;   // max relative pressure error over the kept points, DEV.md 4c C285 (C291)
    gradeLimits_pct (5 10 20);   // upper limits of clean / warning / severe; above, refused
    grade           clean;
    oneLiquid       true;   // arm (f) over the validity span; a pair that splits ONE liquid is never promoted
    temperatures    1;   // distinct stated temperatures in the evidence
    laboratories    1;   // distinct articles in the evidence
    singleTemperature true;   // true: b/T was fitted at ONE temperature
    singleLaboratory  true;   // true: ONE laboratory's data, nothing to cross-check it
    verdict         accepted;
}
`,an=`/*---------------------------------------------------------------------------*\\
  NRTL binary interaction parameters --- diisopropylEther(i) + benzene(j)

  REGRESSED BY CHOUPO'S CURATION PIPELINE (bin/choupo-curate, DEV.md 4c C282;
  record docs/design/binary-pairs-from-open-measurements.md) to measured
  bubble PRESSURES at stated temperatures (P-x, DEV.md 4c C291).  The articles named under \`evidence\` are the
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
  its fitting pipeline (every laboratory fitted to the bubble pressure, outliers beyond
  20 % discarded by name, max |P_model - P|/P over the kept points GRADED
  clean / warning / severe at 5 / 10 / 20 % -- DEV.md 4c C283 amended, C285, C291;
  THIS fit: clean, 0.7769 %; one liquid across its validity span), and NO
  HUMAN HAS REVIEWED IT.  The engine says so on every run that reads it, and
  voices a warning or a severe grade beside it.
  CAUTION: this record rests on ONE temperature and ONE laboratory.
  Nothing was held out: the \`validation {}\` block says so, and the acceptance
  is the \`curation {}\` block.  A curator who reads the series back against the
  articles marks it \`reviewStatus reviewed; humanReviewed true;\`.  Revert with
  \`bin/choupo-curate revert benzene-diisopropylEther\`.

  REPRODUCE: run tutorials/props/curation/curate510_nrtl_diisopropylEther_benzene (after \`bin/choupo-curate fetch\` on it); its fit
  writes benzene-diisopropylEther.proposal.dat, which bin/curate/check_regressed_pairs.py holds
  equal to this record.
\\*---------------------------------------------------------------------------*/

recordType binaryInteractionParameters;
schemaVersion 1;

pair { i diisopropylEther; j benzene; }

components  ( diisopropylEther  benzene );
model       NRTL;

parameters
{
    i           diisopropylEther;
    j           benzene;
    a_ij        0.00000000;
    b_ij        -289.92170080;
    a_ji        0.00000000;
    b_ji        483.01043328;
    alpha       0.30000000;
}

provenance
{
    origin        fitted;
    method        "fitParameters(P_bubble), Levenberg-Marquardt";
    methodVersion "choupoProps Choupo-dev";
    fittedInCase  "tutorials/props/curation/curate510_nrtl_diisopropylEther_benzene";
    reviewStatus  autoPromoted;
    humanReviewed false;
    fitGrade      clean;   // DEV.md 4c C285 (C291): max |P_model - P|/P over the kept points, graded 5 / 10 / 20 %
    fitGradeMaxRelativeError_pct 0.7769;
    promotedBy    "bin/curate/pairs_px.py promote";
    promotedDate  "2026-11-10";
    reviewReason  "regressed by bin/choupo-curate from archive-transcribed measurements; not yet read back against the articles";
    reuse         "Choupo's own regression; the measured points belong to the cited articles and are not reproduced in this record or this tree";
    fitDate       "2026-11-10";

    evidence
    (
        {
            role      fit;
            dataset   "constant/archiveExtracts/diisopropylEther-benzene-bubbleP-j.jct.2005.07.004-b6.dat";
            doi       "10.1016/j.jct.2005.07.004";
            sha256    "2a1993b096a24879ffe37939a4b0df227a87217f5ee55caf7b37f1f753b56527";
            provenance measured;
            archiveFile "j.jct.2005.07.004.xml";
            system    "diisopropylEther + benzene";
        }
    );
    fingerprint "2a274ac4bc9c09ce";   // of the declaration, frozen before the fit

    //  IN-SAMPLE: the model reproducing the very points it was
    //  fitted to.  It is NOT a validation; see the block below.
    weighting     equal;   // chi2 is sum ((P_model - P_exp)/P_exp)^2, dimensionless
    chi2          0.00088034;
    rms_rel       0.00571010;
    nDataPoints   27;
    identifiable  true;
    maxAbsCorr    0.99503660;

    validity
    {
        temperature { min 313.15 K; max 313.15 K; }
        pressure    { min 25442 Pa; max 37131 Pa; }
        note        "the span of the FIT evidence; outside it the pair is an extrapolation";
    }
}

validation
{
    verdict     validationRefused;

    heldOut     none;   // every declared dataset carried \`role fit\`

    acceptance  none;   // no band was declared before the fit, so no
                        // pass/fail may be read out of the residual above
}

curation
{
    rule            "DEV.md 4c C291 (bubble-pressure pairs; every laboratory, graded by C285)";
    evidence        allLaboratories;   // every block fitted, none held out
    objective       twoStage;
    residual        P_bubble;
    residualScale   relative;   // (P_model - P)/P at each point's stated T
    outlierLimit_pct 20;   // |P_model - P|/P after the least-squares stage
    outliersDropped 0;
    pointsKept      27;
    noBubblePoint   0;
    maxRelError_pct 0.7769;
    meanRelError_pct 0.5216;
    acceptance      graded;   // max relative pressure error over the kept points, DEV.md 4c C285 (C291)
    gradeLimits_pct (5 10 20);   // upper limits of clean / warning / severe; above, refused
    grade           clean;
    oneLiquid       true;   // arm (f) over the validity span; a pair that splits ONE liquid is never promoted
    temperatures    1;   // distinct stated temperatures in the evidence
    laboratories    1;   // distinct articles in the evidence
    singleTemperature true;   // true: b/T was fitted at ONE temperature
    singleLaboratory  true;   // true: ONE laboratory's data, nothing to cross-check it
    verdict         accepted;
}
`,rn=`/*---------------------------------------------------------------------------*\\
  NRTL binary interaction parameters --- benzene(i) + isopropanol(j)

  REGRESSED BY CHOUPO'S CURATION PIPELINE (bin/choupo-curate, DEV.md 4c C282;
  record docs/design/binary-pairs-from-open-measurements.md) to measured
  bubble PRESSURES at stated temperatures (P-x, DEV.md 4c C291).  The articles named under \`evidence\` are the
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
  its fitting pipeline (every laboratory fitted to the bubble pressure, outliers beyond
  20 % discarded by name, max |P_model - P|/P over the kept points GRADED
  clean / warning / severe at 5 / 10 / 20 % -- DEV.md 4c C283 amended, C285, C291;
  THIS fit: clean, 1.3271 %; one liquid across its validity span), and NO
  HUMAN HAS REVIEWED IT.  The engine says so on every run that reads it, and
  voices a warning or a severe grade beside it.
  CAUTION: this record rests on ONE temperature and ONE laboratory.
  Nothing was held out: the \`validation {}\` block says so, and the acceptance
  is the \`curation {}\` block.  A curator who reads the series back against the
  articles marks it \`reviewStatus reviewed; humanReviewed true;\`.  Revert with
  \`bin/choupo-curate revert benzene-isopropanol\`.

  REPRODUCE: run tutorials/props/curation/curate542_nrtl_benzene_isopropanol (after \`bin/choupo-curate fetch\` on it); its fit
  writes benzene-isopropanol.proposal.dat, which bin/curate/check_regressed_pairs.py holds
  equal to this record.
\\*---------------------------------------------------------------------------*/

recordType binaryInteractionParameters;
schemaVersion 1;

pair { i benzene; j isopropanol; }

components  ( benzene  isopropanol );
model       NRTL;

parameters
{
    i           benzene;
    j           isopropanol;
    a_ij        0.00000000;
    b_ij        536.35965818;
    a_ji        0.00000000;
    b_ji        103.80915544;
    alpha       0.30000000;
}

provenance
{
    origin        fitted;
    method        "fitParameters(P_bubble), Levenberg-Marquardt";
    methodVersion "choupoProps Choupo-dev";
    fittedInCase  "tutorials/props/curation/curate542_nrtl_benzene_isopropanol";
    reviewStatus  autoPromoted;
    humanReviewed false;
    fitGrade      clean;   // DEV.md 4c C285 (C291): max |P_model - P|/P over the kept points, graded 5 / 10 / 20 %
    fitGradeMaxRelativeError_pct 1.3271;
    promotedBy    "bin/curate/pairs_px.py promote";
    promotedDate  "2026-11-10";
    reviewReason  "regressed by bin/choupo-curate from archive-transcribed measurements; not yet read back against the articles";
    reuse         "Choupo's own regression; the measured points belong to the cited articles and are not reproduced in this record or this tree";
    fitDate       "2026-11-10";

    evidence
    (
        {
            role      fit;
            dataset   "constant/archiveExtracts/benzene-isopropanol-bubbleP-je900977e-b5.dat";
            doi       "10.1021/je900977e";
            sha256    "e345ae2afc5b436b3200f0bc963c7850395416aef3ff772d7f02e35e054b3605";
            provenance measured;
            archiveFile "je900977e.xml";
            system    "benzene + isopropanol";
        }
    );
    fingerprint "d8dd674659e6ee32";   // of the declaration, frozen before the fit

    //  IN-SAMPLE: the model reproducing the very points it was
    //  fitted to.  It is NOT a validation; see the block below.
    weighting     equal;   // chi2 is sum ((P_model - P_exp)/P_exp)^2, dimensionless
    chi2          0.00199589;
    rms_rel       0.00911933;
    nDataPoints   24;
    identifiable  true;
    maxAbsCorr    0.96685537;

    validity
    {
        temperature { min 313.15 K; max 313.15 K; }
        pressure    { min 18356 Pa; max 29529 Pa; }
        note        "the span of the FIT evidence; outside it the pair is an extrapolation";
    }
}

validation
{
    verdict     validationRefused;

    heldOut     none;   // every declared dataset carried \`role fit\`

    acceptance  none;   // no band was declared before the fit, so no
                        // pass/fail may be read out of the residual above
}

curation
{
    rule            "DEV.md 4c C291 (bubble-pressure pairs; every laboratory, graded by C285)";
    evidence        allLaboratories;   // every block fitted, none held out
    objective       twoStage;
    residual        P_bubble;
    residualScale   relative;   // (P_model - P)/P at each point's stated T
    outlierLimit_pct 20;   // |P_model - P|/P after the least-squares stage
    outliersDropped 0;
    pointsKept      24;
    noBubblePoint   0;
    maxRelError_pct 1.3271;
    meanRelError_pct 0.8081;
    acceptance      graded;   // max relative pressure error over the kept points, DEV.md 4c C285 (C291)
    gradeLimits_pct (5 10 20);   // upper limits of clean / warning / severe; above, refused
    grade           clean;
    oneLiquid       true;   // arm (f) over the validity span; a pair that splits ONE liquid is never promoted
    temperatures    1;   // distinct stated temperatures in the evidence
    laboratories    1;   // distinct articles in the evidence
    singleTemperature true;   // true: b/T was fitted at ONE temperature
    singleLaboratory  true;   // true: ONE laboratory's data, nothing to cross-check it
    verdict         accepted;
}
`,on=`/*---------------------------------------------------------------------------*\\
  NRTL binary interaction parameters --- benzene(i) + methanol(j)

  REGRESSED BY CHOUPO'S CURATION PIPELINE (bin/choupo-curate, DEV.md 4c C282;
  record docs/design/binary-pairs-from-open-measurements.md) to measured
  bubble temperatures.  The articles named under \`evidence\` are the
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
  its fitting pipeline (every laboratory fitted, outliers beyond 3 K
  discarded by name, max |T_model - T| over the kept points GRADED
  clean / warning / severe at 1 / 2 / 4 K -- DEV.md 4c C283
  amended, C285, C286; THIS fit: warning, 1.3053 K; one liquid
  across its validity span), and NO HUMAN HAS REVIEWED IT.  The
  engine says so on every run that reads it, and voices a warning
  or a severe grade beside it.
  Nothing was held out: the \`validation {}\` block says so, and the
  acceptance is the \`curation {}\` block.  A curator who reads the series
  back against the articles marks it \`reviewStatus reviewed; humanReviewed
  true;\`.  Revert with \`bin/choupo-curate revert benzene-methanol\`.

  REPRODUCE: run tutorials/props/curation/curate159_nrtl_benzene_methanol (after \`bin/choupo-curate fetch\` on it); its fit
  writes benzene-methanol.proposal.dat, which bin/curate/check_regressed_pairs.py holds
  equal to this record.
\\*---------------------------------------------------------------------------*/

recordType binaryInteractionParameters;
schemaVersion 1;

pair { i benzene; j methanol; }

components  ( benzene  methanol );
model       NRTL;

parameters
{
    i           benzene;
    j           methanol;
    a_ij        0.00000000;
    b_ij        520.19926889;
    a_ji        0.00000000;
    b_ji        239.38121075;
    alpha       0.30000000;
}

provenance
{
    origin        fitted;
    method        "fitParameters(T_bubble), Levenberg-Marquardt";
    methodVersion "choupoProps Choupo-dev";
    fittedInCase  "tutorials/props/curation/curate159_nrtl_benzene_methanol";
    reviewStatus  autoPromoted;
    humanReviewed false;
    fitGrade      warning;   // DEV.md 4c C285 (C286): max |T_model - T| over the kept points, graded 1 / 2 / 4 K
    fitGradeMaxTemperatureError_K 1.3053;
    promotedBy    "bin/choupo-curate pair --promote";
    promotedDate  "2026-11-10";
    reviewReason  "regressed by bin/choupo-curate from archive-transcribed measurements; not yet read back against the articles";
    reuse         "Choupo's own regression; the measured points belong to the cited articles and are not reproduced in this record or this tree";
    fitDate       "2026-11-10";

    evidence
    (
        {
            role      fit;
            dataset   "constant/archiveExtracts/benzene-methanol-bubble-j.fluid.2019.03.022.dat";
            doi       "10.1016/j.fluid.2019.03.022";
            sha256    "403cce80c8f10e5b36634d0f14afdbfaaf79df47733366051304441025e32dc0";
            provenance measured;
            archiveFile "j.fluid.2019.03.022.xml";
            system    "benzene + methanol";
            pressure  "101300.000000 Pa";
        }
        {
            role      fit;
            dataset   "constant/archiveExtracts/benzene-methanol-bubble-j.jct.2006.06.002.dat";
            doi       "10.1016/j.jct.2006.06.002";
            sha256    "07a8e406199bcaeb30b2a918bd5f38a9c8373e5ca928c93aff166a9c3f4f131f";
            provenance measured;
            archiveFile "j.jct.2006.06.002.xml";
            system    "benzene + methanol";
        }
    );
    fingerprint "528077f305f8cdda";   // of the declaration, frozen before the fit

    //  IN-SAMPLE: the model reproducing the very points it was
    //  fitted to.  It is NOT a validation; see the block below.
    weighting     uncertainty;   // chi2 is sum ((T_model - T_exp)/U)^2, dimensionless
    chi2          81.10672423;
    rms_K         0.55580453;
    nDataPoints   23;
    identifiable  true;
    maxAbsCorr    0.95645676;

    validity
    {
        temperature { min 331.56 K; max 343.83 K; }
        pressure    { min 99500 Pa; max 101300 Pa; }
        note        "the span of the FIT evidence; outside it the pair is an extrapolation";
    }
}

validation
{
    verdict     validationRefused;

    heldOut     none;   // every declared dataset carried \`role fit\`

    acceptance  none;   // no band was declared before the fit, so no
                        // pass/fail may be read out of the residual above
}

curation
{
    rule            "DEV.md 4c C283 (amended) + C284, graded by C285 (C286)";
    evidence        allLaboratories;   // every study fitted, none held out
    objective       twoStage;
    outlierLimit    3 K;   // |T_model - T| after the least-squares stage
    outliersDropped 0;
    pointsKept      23;
    noBubblePoint   0;
    maxAbsError     1.3053 K;
    meanAbsError    0.4292 K;
    acceptance      graded;   // max |T_model - T| over the kept points, DEV.md 4c C285 (C286)
    gradeLimits_K   (1 2 4);   // upper limits of clean / warning / severe; above, refused
    grade           warning;
    oneLiquid       true;   // arm (f) over the validity span; a pair that splits ONE liquid is never promoted, whatever its grade
    verdict         accepted;
}
`,sn=`/*---------------------------------------------------------------------------*\\
  NRTL binary interaction parameters --- benzene(i) + nButanol(j)

  REGRESSED BY CHOUPO'S CURATION PIPELINE (bin/choupo-curate, DEV.md 4c C282;
  record docs/design/binary-pairs-from-open-measurements.md) to measured
  bubble PRESSURES at stated temperatures (P-x, DEV.md 4c C291).  The articles named under \`evidence\` are the
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
  its fitting pipeline (every laboratory fitted to the bubble pressure, outliers beyond
  20 % discarded by name, max |P_model - P|/P over the kept points GRADED
  clean / warning / severe at 5 / 10 / 20 % -- DEV.md 4c C283 amended, C285, C291;
  THIS fit: severe, 11.2471 %; one liquid across its validity span), and NO
  HUMAN HAS REVIEWED IT.  The engine says so on every run that reads it, and
  voices a warning or a severe grade beside it.
  Nothing was held out: the \`validation {}\` block says so, and the acceptance
  is the \`curation {}\` block.  A curator who reads the series back against the
  articles marks it \`reviewStatus reviewed; humanReviewed true;\`.  Revert with
  \`bin/choupo-curate revert benzene-nButanol\`.

  REPRODUCE: run tutorials/props/curation/curate507_nrtl_benzene_nButanol (after \`bin/choupo-curate fetch\` on it); its fit
  writes benzene-nButanol.proposal.dat, which bin/curate/check_regressed_pairs.py holds
  equal to this record.
\\*---------------------------------------------------------------------------*/

recordType binaryInteractionParameters;
schemaVersion 1;

pair { i benzene; j nButanol; }

components  ( benzene  nButanol );
model       NRTL;

parameters
{
    i           benzene;
    j           nButanol;
    a_ij        0.00000000;
    b_ij        466.28568722;
    a_ji        0.00000000;
    b_ji        115.34228618;
    alpha       0.30000000;
}

provenance
{
    origin        fitted;
    method        "fitParameters(P_bubble), Levenberg-Marquardt";
    methodVersion "choupoProps Choupo-dev";
    fittedInCase  "tutorials/props/curation/curate507_nrtl_benzene_nButanol";
    reviewStatus  autoPromoted;
    humanReviewed false;
    fitGrade      severe;   // DEV.md 4c C285 (C291): max |P_model - P|/P over the kept points, graded 5 / 10 / 20 %
    fitGradeMaxRelativeError_pct 11.2471;
    promotedBy    "bin/curate/pairs_px.py promote";
    promotedDate  "2026-11-10";
    reviewReason  "regressed by bin/choupo-curate from archive-transcribed measurements; not yet read back against the articles";
    reuse         "Choupo's own regression; the measured points belong to the cited articles and are not reproduced in this record or this tree";
    fitDate       "2026-11-10";

    evidence
    (
        {
            role      fit;
            dataset   "constant/archiveExtracts/benzene-nButanol-bubbleP-j.jct.2005.07.004-b4.dat";
            doi       "10.1016/j.jct.2005.07.004";
            sha256    "2a1993b096a24879ffe37939a4b0df227a87217f5ee55caf7b37f1f753b56527";
            provenance measured;
            archiveFile "j.jct.2005.07.004.xml";
            system    "benzene + nButanol";
        }
        {
            role      fit;
            dataset   "constant/archiveExtracts/benzene-nButanol-bubbleP-j.jct.2004.01.001-b18.dat";
            doi       "10.1016/j.jct.2004.01.001";
            sha256    "c36869b5255205e6fc68ce6d0363667c9aa8b7994ca9e1040ea169089fe65a21";
            provenance measured;
            archiveFile "j.jct.2004.01.001.xml";
            system    "benzene + nButanol";
        }
    );
    fingerprint "286b7b533a89656b";   // of the declaration, frozen before the fit

    //  IN-SAMPLE: the model reproducing the very points it was
    //  fitted to.  It is NOT a validation; see the block below.
    weighting     equal;   // chi2 is sum ((P_model - P_exp)/P_exp)^2, dimensionless
    chi2          0.14203665;
    rms_rel       0.06195828;
    nDataPoints   37;
    identifiable  true;
    maxAbsCorr    0.94700963;

    validity
    {
        temperature { min 308.15 K; max 313.15 K; }
        pressure    { min 6418 Pa; max 24138 Pa; }
        note        "the span of the FIT evidence; outside it the pair is an extrapolation";
    }
}

validation
{
    verdict     validationRefused;

    heldOut     none;   // every declared dataset carried \`role fit\`

    acceptance  none;   // no band was declared before the fit, so no
                        // pass/fail may be read out of the residual above
}

curation
{
    rule            "DEV.md 4c C291 (bubble-pressure pairs; every laboratory, graded by C285)";
    evidence        allLaboratories;   // every block fitted, none held out
    objective       twoStage;
    residual        P_bubble;
    residualScale   relative;   // (P_model - P)/P at each point's stated T
    outlierLimit_pct 20;   // |P_model - P|/P after the least-squares stage
    outliersDropped 1;
    pointsKept      37;
    noBubblePoint   0;
    maxRelError_pct 11.2471;
    meanRelError_pct 4.9307;
    acceptance      graded;   // max relative pressure error over the kept points, DEV.md 4c C285 (C291)
    gradeLimits_pct (5 10 20);   // upper limits of clean / warning / severe; above, refused
    grade           severe;
    oneLiquid       true;   // arm (f) over the validity span; a pair that splits ONE liquid is never promoted
    temperatures    2;   // distinct stated temperatures in the evidence
    laboratories    2;   // distinct articles in the evidence
    singleTemperature false;   // true: b/T was fitted at ONE temperature
    singleLaboratory  false;   // true: ONE laboratory's data, nothing to cross-check it
    verdict         accepted;
}
`,dn=`/*---------------------------------------------------------------------------*\\
  NRTL binary interaction parameters --- benzene(i) + nNDimethylacetamide(j)

  REGRESSED BY CHOUPO'S CURATION PIPELINE (bin/choupo-curate, DEV.md 4c C282;
  record docs/design/binary-pairs-from-open-measurements.md) to measured
  bubble PRESSURES at stated temperatures (P-x, DEV.md 4c C291).  The articles named under \`evidence\` are the
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
  its fitting pipeline (every laboratory fitted to the bubble pressure, outliers beyond
  20 % discarded by name, max |P_model - P|/P over the kept points GRADED
  clean / warning / severe at 5 / 10 / 20 % -- DEV.md 4c C283 amended, C285, C291;
  THIS fit: clean, 3.3731 %; one liquid across its validity span), and NO
  HUMAN HAS REVIEWED IT.  The engine says so on every run that reads it, and
  voices a warning or a severe grade beside it.
  CAUTION: this record rests on ONE temperature and ONE laboratory.
  Nothing was held out: the \`validation {}\` block says so, and the acceptance
  is the \`curation {}\` block.  A curator who reads the series back against the
  articles marks it \`reviewStatus reviewed; humanReviewed true;\`.  Revert with
  \`bin/choupo-curate revert benzene-nNDimethylacetamide\`.

  REPRODUCE: run tutorials/props/curation/curate503_nrtl_benzene_nNDimethylacetamide (after \`bin/choupo-curate fetch\` on it); its fit
  writes benzene-nNDimethylacetamide.proposal.dat, which bin/curate/check_regressed_pairs.py holds
  equal to this record.
\\*---------------------------------------------------------------------------*/

recordType binaryInteractionParameters;
schemaVersion 1;

pair { i benzene; j nNDimethylacetamide; }

components  ( benzene  nNDimethylacetamide );
model       NRTL;

parameters
{
    i           benzene;
    j           nNDimethylacetamide;
    a_ij        0.00000000;
    b_ij        622.46119902;
    a_ji        0.00000000;
    b_ji        -350.04143764;
    alpha       0.30000000;
}

provenance
{
    origin        fitted;
    method        "fitParameters(P_bubble), Levenberg-Marquardt";
    methodVersion "choupoProps Choupo-dev";
    fittedInCase  "tutorials/props/curation/curate503_nrtl_benzene_nNDimethylacetamide";
    reviewStatus  autoPromoted;
    humanReviewed false;
    fitGrade      clean;   // DEV.md 4c C285 (C291): max |P_model - P|/P over the kept points, graded 5 / 10 / 20 %
    fitGradeMaxRelativeError_pct 3.3731;
    promotedBy    "bin/curate/pairs_px.py promote";
    promotedDate  "2026-11-10";
    reviewReason  "regressed by bin/choupo-curate from archive-transcribed measurements; not yet read back against the articles";
    reuse         "Choupo's own regression; the measured points belong to the cited articles and are not reproduced in this record or this tree";
    fitDate       "2026-11-10";

    evidence
    (
        {
            role      fit;
            dataset   "constant/archiveExtracts/benzene-nNDimethylacetamide-bubbleP-acs.jced.7b00119-b17.dat";
            doi       "10.1021/acs.jced.7b00119";
            sha256    "c57dbb0a0bf3405a8a631fa0f45bc2682f03b5dd1ee020e8b3f07b3a0dafe997";
            provenance measured;
            archiveFile "acs.jced.7b00119.xml";
            system    "benzene + nNDimethylacetamide";
        }
    );
    fingerprint "84935a94a4188c61";   // of the declaration, frozen before the fit

    //  IN-SAMPLE: the model reproducing the very points it was
    //  fitted to.  It is NOT a validation; see the block below.
    weighting     equal;   // chi2 is sum ((P_model - P_exp)/P_exp)^2, dimensionless
    chi2          0.02185443;
    rms_rel       0.02111892;
    nDataPoints   49;
    identifiable  true;
    maxAbsCorr    0.97438003;

    validity
    {
        temperature { min 328.15 K; max 328.15 K; }
        pressure    { min 1710 Pa; max 43620 Pa; }
        note        "the span of the FIT evidence; outside it the pair is an extrapolation";
    }
}

validation
{
    verdict     validationRefused;

    heldOut     none;   // every declared dataset carried \`role fit\`

    acceptance  none;   // no band was declared before the fit, so no
                        // pass/fail may be read out of the residual above
}

curation
{
    rule            "DEV.md 4c C291 (bubble-pressure pairs; every laboratory, graded by C285)";
    evidence        allLaboratories;   // every block fitted, none held out
    objective       twoStage;
    residual        P_bubble;
    residualScale   relative;   // (P_model - P)/P at each point's stated T
    outlierLimit_pct 20;   // |P_model - P|/P after the least-squares stage
    outliersDropped 0;
    pointsKept      49;
    noBubblePoint   0;
    maxRelError_pct 3.3731;
    meanRelError_pct 1.7300;
    acceptance      graded;   // max relative pressure error over the kept points, DEV.md 4c C285 (C291)
    gradeLimits_pct (5 10 20);   // upper limits of clean / warning / severe; above, refused
    grade           clean;
    oneLiquid       true;   // arm (f) over the validity span; a pair that splits ONE liquid is never promoted
    temperatures    1;   // distinct stated temperatures in the evidence
    laboratories    1;   // distinct articles in the evidence
    singleTemperature true;   // true: b/T was fitted at ONE temperature
    singleLaboratory  true;   // true: ONE laboratory's data, nothing to cross-check it
    verdict         accepted;
}
`,cn=`/*---------------------------------------------------------------------------*\\
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
`,ln=`/*---------------------------------------------------------------------------*\\
  NRTL binary interaction parameters --- chloroform(i) + methylEthylKetone(j)

  REGRESSED BY CHOUPO'S CURATION PIPELINE (bin/choupo-curate, DEV.md 4c C282;
  record docs/design/binary-pairs-from-open-measurements.md) to measured
  bubble PRESSURES at stated temperatures (P-x, DEV.md 4c C291).  The articles named under \`evidence\` are the
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
  its fitting pipeline (every laboratory fitted to the bubble pressure, outliers beyond
  20 % discarded by name, max |P_model - P|/P over the kept points GRADED
  clean / warning / severe at 5 / 10 / 20 % -- DEV.md 4c C283 amended, C285, C291;
  THIS fit: clean, 2.0248 %; one liquid across its validity span), and NO
  HUMAN HAS REVIEWED IT.  The engine says so on every run that reads it, and
  voices a warning or a severe grade beside it.
  CAUTION: this record rests on ONE temperature and ONE laboratory.
  Nothing was held out: the \`validation {}\` block says so, and the acceptance
  is the \`curation {}\` block.  A curator who reads the series back against the
  articles marks it \`reviewStatus reviewed; humanReviewed true;\`.  Revert with
  \`bin/choupo-curate revert chloroform-methylEthylKetone\`.

  REPRODUCE: run tutorials/props/curation/curate553_nrtl_chloroform_methylEthylKetone (after \`bin/choupo-curate fetch\` on it); its fit
  writes chloroform-methylEthylKetone.proposal.dat, which bin/curate/check_regressed_pairs.py holds
  equal to this record.
\\*---------------------------------------------------------------------------*/

recordType binaryInteractionParameters;
schemaVersion 1;

pair { i chloroform; j methylEthylKetone; }

components  ( chloroform  methylEthylKetone );
model       NRTL;

parameters
{
    i           chloroform;
    j           methylEthylKetone;
    a_ij        0.00000000;
    b_ij        80.88438966;
    a_ji        0.00000000;
    b_ji        -356.52913850;
    alpha       0.30000000;
}

provenance
{
    origin        fitted;
    method        "fitParameters(P_bubble), Levenberg-Marquardt";
    methodVersion "choupoProps Choupo-dev";
    fittedInCase  "tutorials/props/curation/curate553_nrtl_chloroform_methylEthylKetone";
    reviewStatus  autoPromoted;
    humanReviewed false;
    fitGrade      clean;   // DEV.md 4c C285 (C291): max |P_model - P|/P over the kept points, graded 5 / 10 / 20 %
    fitGradeMaxRelativeError_pct 2.0248;
    promotedBy    "bin/curate/pairs_px.py promote";
    promotedDate  "2026-11-10";
    reviewReason  "regressed by bin/choupo-curate from archive-transcribed measurements; not yet read back against the articles";
    reuse         "Choupo's own regression; the measured points belong to the cited articles and are not reproduced in this record or this tree";
    fitDate       "2026-11-10";

    evidence
    (
        {
            role      fit;
            dataset   "constant/archiveExtracts/chloroform-methylEthylKetone-bubbleP-je060150a-b8.dat";
            doi       "10.1021/je060150a";
            sha256    "c2cc118039454344624b1fa589162c1e1603e2579b52d63093e4dd8d3d3cada2";
            provenance measured;
            archiveFile "je060150a.xml";
            system    "chloroform + methylEthylKetone";
        }
    );
    fingerprint "4824d651c139622a";   // of the declaration, frozen before the fit

    //  IN-SAMPLE: the model reproducing the very points it was
    //  fitted to.  It is NOT a validation; see the block below.
    weighting     equal;   // chi2 is sum ((P_model - P_exp)/P_exp)^2, dimensionless
    chi2          0.00334871;
    rms_rel       0.01293968;
    nDataPoints   20;
    identifiable  true;
    maxAbsCorr    0.99453716;

    validity
    {
        temperature { min 303.15 K; max 303.15 K; }
        pressure    { min 15330 Pa; max 30000 Pa; }
        note        "the span of the FIT evidence; outside it the pair is an extrapolation";
    }
}

validation
{
    verdict     validationRefused;

    heldOut     none;   // every declared dataset carried \`role fit\`

    acceptance  none;   // no band was declared before the fit, so no
                        // pass/fail may be read out of the residual above
}

curation
{
    rule            "DEV.md 4c C291 (bubble-pressure pairs; every laboratory, graded by C285)";
    evidence        allLaboratories;   // every block fitted, none held out
    objective       twoStage;
    residual        P_bubble;
    residualScale   relative;   // (P_model - P)/P at each point's stated T
    outlierLimit_pct 20;   // |P_model - P|/P after the least-squares stage
    outliersDropped 0;
    pointsKept      20;
    noBubblePoint   0;
    maxRelError_pct 2.0248;
    meanRelError_pct 1.1634;
    acceptance      graded;   // max relative pressure error over the kept points, DEV.md 4c C285 (C291)
    gradeLimits_pct (5 10 20);   // upper limits of clean / warning / severe; above, refused
    grade           clean;
    oneLiquid       true;   // arm (f) over the validity span; a pair that splits ONE liquid is never promoted
    temperatures    1;   // distinct stated temperatures in the evidence
    laboratories    1;   // distinct articles in the evidence
    singleTemperature true;   // true: b/T was fitted at ONE temperature
    singleLaboratory  true;   // true: ONE laboratory's data, nothing to cross-check it
    verdict         accepted;
}
`,un=`/*---------------------------------------------------------------------------*\\
  NRTL binary interaction parameters --- chloroform(i) + methylIsobutylKetone(j)

  REGRESSED BY CHOUPO'S CURATION PIPELINE (bin/choupo-curate, DEV.md 4c C282;
  record docs/design/binary-pairs-from-open-measurements.md) to measured
  bubble PRESSURES at stated temperatures (P-x, DEV.md 4c C291).  The articles named under \`evidence\` are the
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
  its fitting pipeline (every laboratory fitted to the bubble pressure, outliers beyond
  20 % discarded by name, max |P_model - P|/P over the kept points GRADED
  clean / warning / severe at 5 / 10 / 20 % -- DEV.md 4c C283 amended, C285, C291;
  THIS fit: clean, 1.4194 %; one liquid across its validity span), and NO
  HUMAN HAS REVIEWED IT.  The engine says so on every run that reads it, and
  voices a warning or a severe grade beside it.
  CAUTION: this record rests on ONE temperature and ONE laboratory.
  Nothing was held out: the \`validation {}\` block says so, and the acceptance
  is the \`curation {}\` block.  A curator who reads the series back against the
  articles marks it \`reviewStatus reviewed; humanReviewed true;\`.  Revert with
  \`bin/choupo-curate revert chloroform-methylIsobutylKetone\`.

  REPRODUCE: run tutorials/props/curation/curate560_nrtl_chloroform_methylIsobutylKetone (after \`bin/choupo-curate fetch\` on it); its fit
  writes chloroform-methylIsobutylKetone.proposal.dat, which bin/curate/check_regressed_pairs.py holds
  equal to this record.
\\*---------------------------------------------------------------------------*/

recordType binaryInteractionParameters;
schemaVersion 1;

pair { i chloroform; j methylIsobutylKetone; }

components  ( chloroform  methylIsobutylKetone );
model       NRTL;

parameters
{
    i           chloroform;
    j           methylIsobutylKetone;
    a_ij        0.00000000;
    b_ij        -127.50095067;
    a_ji        0.00000000;
    b_ji        -249.46809930;
    alpha       0.30000000;
}

provenance
{
    origin        fitted;
    method        "fitParameters(P_bubble), Levenberg-Marquardt";
    methodVersion "choupoProps Choupo-dev";
    fittedInCase  "tutorials/props/curation/curate560_nrtl_chloroform_methylIsobutylKetone";
    reviewStatus  autoPromoted;
    humanReviewed false;
    fitGrade      clean;   // DEV.md 4c C285 (C291): max |P_model - P|/P over the kept points, graded 5 / 10 / 20 %
    fitGradeMaxRelativeError_pct 1.4194;
    promotedBy    "bin/curate/pairs_px.py promote";
    promotedDate  "2026-11-10";
    reviewReason  "regressed by bin/choupo-curate from archive-transcribed measurements; not yet read back against the articles";
    reuse         "Choupo's own regression; the measured points belong to the cited articles and are not reproduced in this record or this tree";
    fitDate       "2026-11-10";

    evidence
    (
        {
            role      fit;
            dataset   "constant/archiveExtracts/chloroform-methylIsobutylKetone-bubbleP-j.jct.2006.07.004-b6.dat";
            doi       "10.1016/j.jct.2006.07.004";
            sha256    "6e389c68f6ed17a8021f5b5c59e0c403ad4f1eaf9bc78c5e79bab8201aaf312b";
            provenance measured;
            archiveFile "j.jct.2006.07.004.xml";
            system    "chloroform + methylIsobutylKetone";
        }
    );
    fingerprint "44bb2422d46e13a3";   // of the declaration, frozen before the fit

    //  IN-SAMPLE: the model reproducing the very points it was
    //  fitted to.  It is NOT a validation; see the block below.
    weighting     equal;   // chi2 is sum ((P_model - P_exp)/P_exp)^2, dimensionless
    chi2          0.00126977;
    rms_rel       0.00952354;
    nDataPoints   14;
    identifiable  true;
    maxAbsCorr    0.97581044;

    validity
    {
        temperature { min 303.15 K; max 303.15 K; }
        pressure    { min 4680 Pa; max 30870 Pa; }
        note        "the span of the FIT evidence; outside it the pair is an extrapolation";
    }
}

validation
{
    verdict     validationRefused;

    heldOut     none;   // every declared dataset carried \`role fit\`

    acceptance  none;   // no band was declared before the fit, so no
                        // pass/fail may be read out of the residual above
}

curation
{
    rule            "DEV.md 4c C291 (bubble-pressure pairs; every laboratory, graded by C285)";
    evidence        allLaboratories;   // every block fitted, none held out
    objective       twoStage;
    residual        P_bubble;
    residualScale   relative;   // (P_model - P)/P at each point's stated T
    outlierLimit_pct 20;   // |P_model - P|/P after the least-squares stage
    outliersDropped 0;
    pointsKept      14;
    noBubblePoint   0;
    maxRelError_pct 1.4194;
    meanRelError_pct 0.8226;
    acceptance      graded;   // max relative pressure error over the kept points, DEV.md 4c C285 (C291)
    gradeLimits_pct (5 10 20);   // upper limits of clean / warning / severe; above, refused
    grade           clean;
    oneLiquid       true;   // arm (f) over the validity span; a pair that splits ONE liquid is never promoted
    temperatures    1;   // distinct stated temperatures in the evidence
    laboratories    1;   // distinct articles in the evidence
    singleTemperature true;   // true: b/T was fitted at ONE temperature
    singleLaboratory  true;   // true: ONE laboratory's data, nothing to cross-check it
    verdict         accepted;
}
`,hn=`/*---------------------------------------------------------------------------*\\
  NRTL binary interaction parameters --- chloroform(i) + methylTertButylEther(j)

  REGRESSED BY CHOUPO'S CURATION PIPELINE (bin/choupo-curate, DEV.md 4c C282;
  record docs/design/binary-pairs-from-open-measurements.md) to measured
  bubble PRESSURES at stated temperatures (P-x, DEV.md 4c C291).  The articles named under \`evidence\` are the
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
  its fitting pipeline (every laboratory fitted to the bubble pressure, outliers beyond
  20 % discarded by name, max |P_model - P|/P over the kept points GRADED
  clean / warning / severe at 5 / 10 / 20 % -- DEV.md 4c C283 amended, C285, C291;
  THIS fit: clean, 1.8850 %; one liquid across its validity span), and NO
  HUMAN HAS REVIEWED IT.  The engine says so on every run that reads it, and
  voices a warning or a severe grade beside it.
  CAUTION: this record rests on ONE temperature and ONE laboratory.
  Nothing was held out: the \`validation {}\` block says so, and the acceptance
  is the \`curation {}\` block.  A curator who reads the series back against the
  articles marks it \`reviewStatus reviewed; humanReviewed true;\`.  Revert with
  \`bin/choupo-curate revert chloroform-methylTertButylEther\`.

  REPRODUCE: run tutorials/props/curation/curate504_nrtl_chloroform_methylTertButylEther (after \`bin/choupo-curate fetch\` on it); its fit
  writes chloroform-methylTertButylEther.proposal.dat, which bin/curate/check_regressed_pairs.py holds
  equal to this record.
\\*---------------------------------------------------------------------------*/

recordType binaryInteractionParameters;
schemaVersion 1;

pair { i chloroform; j methylTertButylEther; }

components  ( chloroform  methylTertButylEther );
model       NRTL;

parameters
{
    i           chloroform;
    j           methylTertButylEther;
    a_ij        0.00000000;
    b_ij        51.29606915;
    a_ji        0.00000000;
    b_ji        -360.18684891;
    alpha       0.30000000;
}

provenance
{
    origin        fitted;
    method        "fitParameters(P_bubble), Levenberg-Marquardt";
    methodVersion "choupoProps Choupo-dev";
    fittedInCase  "tutorials/props/curation/curate504_nrtl_chloroform_methylTertButylEther";
    reviewStatus  autoPromoted;
    humanReviewed false;
    fitGrade      clean;   // DEV.md 4c C285 (C291): max |P_model - P|/P over the kept points, graded 5 / 10 / 20 %
    fitGradeMaxRelativeError_pct 1.8850;
    promotedBy    "bin/curate/pairs_px.py promote";
    promotedDate  "2026-11-10";
    reviewReason  "regressed by bin/choupo-curate from archive-transcribed measurements; not yet read back against the articles";
    reuse         "Choupo's own regression; the measured points belong to the cited articles and are not reproduced in this record or this tree";
    fitDate       "2026-11-10";

    evidence
    (
        {
            role      fit;
            dataset   "constant/archiveExtracts/chloroform-methylTertButylEther-bubbleP-je100821g-b11.dat";
            doi       "10.1021/je100821g";
            sha256    "dde12749754a2af3b6a4dc07f0dbdd2ca9f4dbdf613ad8d7ec7dec6f03a227cd";
            provenance measured;
            archiveFile "je100821g.xml";
            system    "chloroform + methylTertButylEther";
        }
    );
    fingerprint "eb3ea95196419fdc";   // of the declaration, frozen before the fit

    //  IN-SAMPLE: the model reproducing the very points it was
    //  fitted to.  It is NOT a validation; see the block below.
    weighting     equal;   // chi2 is sum ((P_model - P_exp)/P_exp)^2, dimensionless
    chi2          0.00737789;
    rms_rel       0.01239783;
    nDataPoints   48;
    identifiable  true;
    maxAbsCorr    0.99292875;

    validity
    {
        temperature { min 303.15 K; max 303.15 K; }
        pressure    { min 26200 Pa; max 38800 Pa; }
        note        "the span of the FIT evidence; outside it the pair is an extrapolation";
    }
}

validation
{
    verdict     validationRefused;

    heldOut     none;   // every declared dataset carried \`role fit\`

    acceptance  none;   // no band was declared before the fit, so no
                        // pass/fail may be read out of the residual above
}

curation
{
    rule            "DEV.md 4c C291 (bubble-pressure pairs; every laboratory, graded by C285)";
    evidence        allLaboratories;   // every block fitted, none held out
    objective       twoStage;
    residual        P_bubble;
    residualScale   relative;   // (P_model - P)/P at each point's stated T
    outlierLimit_pct 20;   // |P_model - P|/P after the least-squares stage
    outliersDropped 0;
    pointsKept      48;
    noBubblePoint   0;
    maxRelError_pct 1.8850;
    meanRelError_pct 1.1399;
    acceptance      graded;   // max relative pressure error over the kept points, DEV.md 4c C285 (C291)
    gradeLimits_pct (5 10 20);   // upper limits of clean / warning / severe; above, refused
    grade           clean;
    oneLiquid       true;   // arm (f) over the validity span; a pair that splits ONE liquid is never promoted
    temperatures    1;   // distinct stated temperatures in the evidence
    laboratories    1;   // distinct articles in the evidence
    singleTemperature true;   // true: b/T was fitted at ONE temperature
    singleLaboratory  true;   // true: ONE laboratory's data, nothing to cross-check it
    verdict         accepted;
}
`,pn=`/*---------------------------------------------------------------------------*\\
  NRTL binary interaction parameters --- cyclohexane(i) + cyclohexene(j)

  REGRESSED BY CHOUPO'S CURATION PIPELINE (bin/choupo-curate, DEV.md 4c C282;
  record docs/design/binary-pairs-from-open-measurements.md) to measured
  bubble temperatures.  The articles named under \`evidence\` are the
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
  its fitting pipeline (every laboratory fitted, outliers beyond 3 K
  discarded by name, max |T_model - T| over the kept points GRADED
  clean / warning / severe at 1 / 2 / 4 K -- DEV.md 4c C283
  amended, C285, C286; THIS fit: warning, 1.6242 K; one liquid
  across its validity span), and NO HUMAN HAS REVIEWED IT.  The
  engine says so on every run that reads it, and voices a warning
  or a severe grade beside it.
  Nothing was held out: the \`validation {}\` block says so, and the
  acceptance is the \`curation {}\` block.  A curator who reads the series
  back against the articles marks it \`reviewStatus reviewed; humanReviewed
  true;\`.  Revert with \`bin/choupo-curate revert cyclohexane-cyclohexene\`.

  REPRODUCE: run tutorials/props/curation/curate121_nrtl_cyclohexane_cyclohexene (after \`bin/choupo-curate fetch\` on it); its fit
  writes cyclohexane-cyclohexene.proposal.dat, which bin/curate/check_regressed_pairs.py holds
  equal to this record.
\\*---------------------------------------------------------------------------*/

recordType binaryInteractionParameters;
schemaVersion 1;

pair { i cyclohexane; j cyclohexene; }

components  ( cyclohexane  cyclohexene );
model       NRTL;

parameters
{
    i           cyclohexane;
    j           cyclohexene;
    a_ij        0.00000000;
    b_ij        601.46608857;
    a_ji        0.00000000;
    b_ji        -370.86601673;
    alpha       0.30000000;
}

provenance
{
    origin        fitted;
    method        "fitParameters(T_bubble), Levenberg-Marquardt";
    methodVersion "choupoProps Choupo-dev";
    fittedInCase  "tutorials/props/curation/curate121_nrtl_cyclohexane_cyclohexene";
    reviewStatus  autoPromoted;
    humanReviewed false;
    fitGrade      warning;   // DEV.md 4c C285 (C286): max |T_model - T| over the kept points, graded 1 / 2 / 4 K
    fitGradeMaxTemperatureError_K 1.6242;
    promotedBy    "bin/choupo-curate pair --promote";
    promotedDate  "2026-11-10";
    reviewReason  "regressed by bin/choupo-curate from archive-transcribed measurements; not yet read back against the articles";
    reuse         "Choupo's own regression; the measured points belong to the cited articles and are not reproduced in this record or this tree";
    fitDate       "2026-11-10";

    evidence
    (
        {
            role      fit;
            dataset   "constant/archiveExtracts/cyclohexane-cyclohexene-bubble-j.fluid.2008.12.007.dat";
            doi       "10.1016/j.fluid.2008.12.007";
            sha256    "cf0d793affc5b6352afbf58c0a1c72440497104374abf390356e141c4c39b01b";
            provenance measured;
            archiveFile "j.fluid.2008.12.007.xml";
            system    "cyclohexane + cyclohexene";
        }
        {
            role      fit;
            dataset   "constant/archiveExtracts/cyclohexane-cyclohexene-bubble-je049902w.dat";
            doi       "10.1021/je049902w";
            sha256    "700ed9dde1b67bc4ae2b590616c2c068f2048c8536f0b054e43cff33e7458379";
            provenance measured;
            archiveFile "je049902w.xml";
            system    "cyclohexane + cyclohexene";
        }
    );
    fingerprint "dc212783b0ded590";   // of the declaration, frozen before the fit

    //  IN-SAMPLE: the model reproducing the very points it was
    //  fitted to.  It is NOT a validation; see the block below.
    weighting     uncertainty;   // chi2 is sum ((T_model - T_exp)/U)^2, dimensionless
    chi2          193.24861840;
    rms_K         0.32720525;
    nDataPoints   81;
    identifiable  true;
    maxAbsCorr    0.99060278;

    validity
    {
        temperature { min 318.11 K; max 356.10 K; }
        pressure    { min 30000 Pa; max 101300 Pa; }
        note        "the span of the FIT evidence; outside it the pair is an extrapolation";
    }
}

validation
{
    verdict     validationRefused;

    heldOut     none;   // every declared dataset carried \`role fit\`

    acceptance  none;   // no band was declared before the fit, so no
                        // pass/fail may be read out of the residual above
}

curation
{
    rule            "DEV.md 4c C283 (amended) + C284, graded by C285 (C286)";
    evidence        allLaboratories;   // every study fitted, none held out
    objective       twoStage;
    outlierLimit    3 K;   // |T_model - T| after the least-squares stage
    outliersDropped 0;
    pointsKept      81;
    noBubblePoint   0;
    maxAbsError     1.6242 K;
    meanAbsError    0.2478 K;
    acceptance      graded;   // max |T_model - T| over the kept points, DEV.md 4c C285 (C286)
    gradeLimits_K   (1 2 4);   // upper limits of clean / warning / severe; above, refused
    grade           warning;
    oneLiquid       true;   // arm (f) over the validity span; a pair that splits ONE liquid is never promoted, whatever its grade
    verdict         accepted;
}
`,mn=`/*---------------------------------------------------------------------------*\\
  NRTL binary interaction parameters --- diNButylEther(i) + cyclohexane(j)

  REGRESSED BY CHOUPO'S CURATION PIPELINE (bin/choupo-curate, DEV.md 4c C282;
  record docs/design/binary-pairs-from-open-measurements.md) to measured
  bubble PRESSURES at stated temperatures (P-x, DEV.md 4c C291).  The articles named under \`evidence\` are the
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
  its fitting pipeline (every laboratory fitted to the bubble pressure, outliers beyond
  20 % discarded by name, max |P_model - P|/P over the kept points GRADED
  clean / warning / severe at 5 / 10 / 20 % -- DEV.md 4c C283 amended, C285, C291;
  THIS fit: clean, 1.0049 %; one liquid across its validity span), and NO
  HUMAN HAS REVIEWED IT.  The engine says so on every run that reads it, and
  voices a warning or a severe grade beside it.
  CAUTION: this record rests on ONE temperature and ONE laboratory.
  Nothing was held out: the \`validation {}\` block says so, and the acceptance
  is the \`curation {}\` block.  A curator who reads the series back against the
  articles marks it \`reviewStatus reviewed; humanReviewed true;\`.  Revert with
  \`bin/choupo-curate revert cyclohexane-diNButylEther\`.

  REPRODUCE: run tutorials/props/curation/curate515_nrtl_diNButylEther_cyclohexane (after \`bin/choupo-curate fetch\` on it); its fit
  writes cyclohexane-diNButylEther.proposal.dat, which bin/curate/check_regressed_pairs.py holds
  equal to this record.
\\*---------------------------------------------------------------------------*/

recordType binaryInteractionParameters;
schemaVersion 1;

pair { i diNButylEther; j cyclohexane; }

components  ( diNButylEther  cyclohexane );
model       NRTL;

parameters
{
    i           diNButylEther;
    j           cyclohexane;
    a_ij        0.00000000;
    b_ij        89.79696886;
    a_ji        0.00000000;
    b_ji        -93.71656375;
    alpha       0.30000000;
}

provenance
{
    origin        fitted;
    method        "fitParameters(P_bubble), Levenberg-Marquardt";
    methodVersion "choupoProps Choupo-dev";
    fittedInCase  "tutorials/props/curation/curate515_nrtl_diNButylEther_cyclohexane";
    reviewStatus  autoPromoted;
    humanReviewed false;
    fitGrade      clean;   // DEV.md 4c C285 (C291): max |P_model - P|/P over the kept points, graded 5 / 10 / 20 %
    fitGradeMaxRelativeError_pct 1.0049;
    promotedBy    "bin/curate/pairs_px.py promote";
    promotedDate  "2026-11-10";
    reviewReason  "regressed by bin/choupo-curate from archive-transcribed measurements; not yet read back against the articles";
    reuse         "Choupo's own regression; the measured points belong to the cited articles and are not reproduced in this record or this tree";
    fitDate       "2026-11-10";

    evidence
    (
        {
            role      fit;
            dataset   "constant/archiveExtracts/diNButylEther-cyclohexane-bubbleP-j.fluid.2005.11.026-b4.dat";
            doi       "10.1016/j.fluid.2005.11.026";
            sha256    "eca275a8ecb0a7b11e2fd48632a1865670266d1d7e61205967301f167fcb25a5";
            provenance measured;
            archiveFile "j.fluid.2005.11.026.xml";
            system    "diNButylEther + cyclohexane";
        }
    );
    fingerprint "ca3ef93f8ee160a6";   // of the declaration, frozen before the fit

    //  IN-SAMPLE: the model reproducing the very points it was
    //  fitted to.  It is NOT a validation; see the block below.
    weighting     equal;   // chi2 is sum ((P_model - P_exp)/P_exp)^2, dimensionless
    chi2          0.00127283;
    rms_rel       0.00699678;
    nDataPoints   26;
    identifiable  false;
    maxAbsCorr    1.00000000;

    validity
    {
        temperature { min 313.15 K; max 313.15 K; }
        pressure    { min 3055 Pa; max 23565 Pa; }
        note        "the span of the FIT evidence; outside it the pair is an extrapolation";
    }
}

validation
{
    verdict     validationRefused;

    heldOut     none;   // every declared dataset carried \`role fit\`

    acceptance  none;   // no band was declared before the fit, so no
                        // pass/fail may be read out of the residual above
}

curation
{
    rule            "DEV.md 4c C291 (bubble-pressure pairs; every laboratory, graded by C285)";
    evidence        allLaboratories;   // every block fitted, none held out
    objective       twoStage;
    residual        P_bubble;
    residualScale   relative;   // (P_model - P)/P at each point's stated T
    outlierLimit_pct 20;   // |P_model - P|/P after the least-squares stage
    outliersDropped 0;
    pointsKept      26;
    noBubblePoint   0;
    maxRelError_pct 1.0049;
    meanRelError_pct 0.6616;
    acceptance      graded;   // max relative pressure error over the kept points, DEV.md 4c C285 (C291)
    gradeLimits_pct (5 10 20);   // upper limits of clean / warning / severe; above, refused
    grade           clean;
    oneLiquid       true;   // arm (f) over the validity span; a pair that splits ONE liquid is never promoted
    temperatures    1;   // distinct stated temperatures in the evidence
    laboratories    1;   // distinct articles in the evidence
    singleTemperature true;   // true: b/T was fitted at ONE temperature
    singleLaboratory  true;   // true: ONE laboratory's data, nothing to cross-check it
    verdict         accepted;
}
`,bn=`/*---------------------------------------------------------------------------*\\
  NRTL binary interaction parameters --- nButanol(i) + cyclohexane(j)

  REGRESSED BY CHOUPO'S CURATION PIPELINE (bin/choupo-curate, DEV.md 4c C282;
  record docs/design/binary-pairs-from-open-measurements.md) to measured
  bubble PRESSURES at stated temperatures (P-x, DEV.md 4c C291).  The articles named under \`evidence\` are the
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
  its fitting pipeline (every laboratory fitted to the bubble pressure, outliers beyond
  20 % discarded by name, max |P_model - P|/P over the kept points GRADED
  clean / warning / severe at 5 / 10 / 20 % -- DEV.md 4c C283 amended, C285, C291;
  THIS fit: clean, 3.2144 %; one liquid across its validity span), and NO
  HUMAN HAS REVIEWED IT.  The engine says so on every run that reads it, and
  voices a warning or a severe grade beside it.
  CAUTION: this record rests on ONE temperature and ONE laboratory.
  Nothing was held out: the \`validation {}\` block says so, and the acceptance
  is the \`curation {}\` block.  A curator who reads the series back against the
  articles marks it \`reviewStatus reviewed; humanReviewed true;\`.  Revert with
  \`bin/choupo-curate revert cyclohexane-nButanol\`.

  REPRODUCE: run tutorials/props/curation/curate543_nrtl_nButanol_cyclohexane (after \`bin/choupo-curate fetch\` on it); its fit
  writes cyclohexane-nButanol.proposal.dat, which bin/curate/check_regressed_pairs.py holds
  equal to this record.
\\*---------------------------------------------------------------------------*/

recordType binaryInteractionParameters;
schemaVersion 1;

pair { i nButanol; j cyclohexane; }

components  ( nButanol  cyclohexane );
model       NRTL;

parameters
{
    i           nButanol;
    j           cyclohexane;
    a_ij        0.00000000;
    b_ij        68.12134560;
    a_ji        0.00000000;
    b_ji        628.75692447;
    alpha       0.30000000;
}

provenance
{
    origin        fitted;
    method        "fitParameters(P_bubble), Levenberg-Marquardt";
    methodVersion "choupoProps Choupo-dev";
    fittedInCase  "tutorials/props/curation/curate543_nrtl_nButanol_cyclohexane";
    reviewStatus  autoPromoted;
    humanReviewed false;
    fitGrade      clean;   // DEV.md 4c C285 (C291): max |P_model - P|/P over the kept points, graded 5 / 10 / 20 %
    fitGradeMaxRelativeError_pct 3.2144;
    promotedBy    "bin/curate/pairs_px.py promote";
    promotedDate  "2026-11-10";
    reviewReason  "regressed by bin/choupo-curate from archive-transcribed measurements; not yet read back against the articles";
    reuse         "Choupo's own regression; the measured points belong to the cited articles and are not reproduced in this record or this tree";
    fitDate       "2026-11-10";

    evidence
    (
        {
            role      fit;
            dataset   "constant/archiveExtracts/nButanol-cyclohexane-bubbleP-je200840e-b9.dat";
            doi       "10.1021/je200840e";
            sha256    "2426b562d0d40fb4f309ec00281df6ba258d2ddf7e75d7e4616c16757f76bbba";
            provenance measured;
            archiveFile "je200840e.xml";
            system    "nButanol + cyclohexane";
        }
    );
    fingerprint "11f73ee633f40956";   // of the declaration, frozen before the fit

    //  IN-SAMPLE: the model reproducing the very points it was
    //  fitted to.  It is NOT a validation; see the block below.
    weighting     equal;   // chi2 is sum ((P_model - P_exp)/P_exp)^2, dimensionless
    chi2          0.01209070;
    rms_rel       0.02244502;
    nDataPoints   24;
    identifiable  true;
    maxAbsCorr    0.91284517;

    validity
    {
        temperature { min 313.15 K; max 313.15 K; }
        pressure    { min 6539 Pa; max 24833 Pa; }
        note        "the span of the FIT evidence; outside it the pair is an extrapolation";
    }
}

validation
{
    verdict     validationRefused;

    heldOut     none;   // every declared dataset carried \`role fit\`

    acceptance  none;   // no band was declared before the fit, so no
                        // pass/fail may be read out of the residual above
}

curation
{
    rule            "DEV.md 4c C291 (bubble-pressure pairs; every laboratory, graded by C285)";
    evidence        allLaboratories;   // every block fitted, none held out
    objective       twoStage;
    residual        P_bubble;
    residualScale   relative;   // (P_model - P)/P at each point's stated T
    outlierLimit_pct 20;   // |P_model - P|/P after the least-squares stage
    outliersDropped 0;
    pointsKept      24;
    noBubblePoint   0;
    maxRelError_pct 3.2144;
    meanRelError_pct 2.0111;
    acceptance      graded;   // max relative pressure error over the kept points, DEV.md 4c C285 (C291)
    gradeLimits_pct (5 10 20);   // upper limits of clean / warning / severe; above, refused
    grade           clean;
    oneLiquid       true;   // arm (f) over the validity span; a pair that splits ONE liquid is never promoted
    temperatures    1;   // distinct stated temperatures in the evidence
    laboratories    1;   // distinct articles in the evidence
    singleTemperature true;   // true: b/T was fitted at ONE temperature
    singleLaboratory  true;   // true: ONE laboratory's data, nothing to cross-check it
    verdict         accepted;
}
`,vn=`/*---------------------------------------------------------------------------*\\
  NRTL binary interaction parameters --- cyclohexane(i) + nHeptane(j)

  REGRESSED BY CHOUPO'S CURATION PIPELINE (bin/choupo-curate, DEV.md 4c C282;
  record docs/design/binary-pairs-from-open-measurements.md) to measured
  bubble temperatures.  The articles named under \`evidence\` are the
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
  its fitting pipeline (every laboratory fitted, outliers beyond 3 K
  discarded by name, max |T_model - T| over the kept points GRADED
  clean / warning / severe at 1 / 2 / 4 K -- DEV.md 4c C283
  amended, C285, C286; THIS fit: clean, 0.6512 K; one liquid
  across its validity span), and NO HUMAN HAS REVIEWED IT.  The
  engine says so on every run that reads it, and voices a warning
  or a severe grade beside it.
  Nothing was held out: the \`validation {}\` block says so, and the
  acceptance is the \`curation {}\` block.  A curator who reads the series
  back against the articles marks it \`reviewStatus reviewed; humanReviewed
  true;\`.  Revert with \`bin/choupo-curate revert cyclohexane-nHeptane\`.

  REPRODUCE: run tutorials/props/curation/curate160_nrtl_cyclohexane_nHeptane (after \`bin/choupo-curate fetch\` on it); its fit
  writes cyclohexane-nHeptane.proposal.dat, which bin/curate/check_regressed_pairs.py holds
  equal to this record.
\\*---------------------------------------------------------------------------*/

recordType binaryInteractionParameters;
schemaVersion 1;

pair { i cyclohexane; j nHeptane; }

components  ( cyclohexane  nHeptane );
model       NRTL;

parameters
{
    i           cyclohexane;
    j           nHeptane;
    a_ij        0.00000000;
    b_ij        278.45926613;
    a_ji        0.00000000;
    b_ji        -197.55390280;
    alpha       0.30000000;
}

provenance
{
    origin        fitted;
    method        "fitParameters(T_bubble), Levenberg-Marquardt";
    methodVersion "choupoProps Choupo-dev";
    fittedInCase  "tutorials/props/curation/curate160_nrtl_cyclohexane_nHeptane";
    reviewStatus  autoPromoted;
    humanReviewed false;
    fitGrade      clean;   // DEV.md 4c C285 (C286): max |T_model - T| over the kept points, graded 1 / 2 / 4 K
    fitGradeMaxTemperatureError_K 0.6512;
    promotedBy    "bin/choupo-curate pair --promote";
    promotedDate  "2026-11-10";
    reviewReason  "regressed by bin/choupo-curate from archive-transcribed measurements; not yet read back against the articles";
    reuse         "Choupo's own regression; the measured points belong to the cited articles and are not reproduced in this record or this tree";
    fitDate       "2026-11-10";

    evidence
    (
        {
            role      fit;
            dataset   "constant/archiveExtracts/cyclohexane-nHeptane-bubble-j.jct.2019.02.006.dat";
            doi       "10.1016/j.jct.2019.02.006";
            sha256    "72f7ae0785c91359f67bf47297e034f09bb1a0adbaa6cf54b2ddf8f91a628f38";
            provenance measured;
            archiveFile "j.jct.2019.02.006.xml";
            system    "cyclohexane + nHeptane";
            pressure  "101300.000000 Pa";
        }
        {
            role      fit;
            dataset   "constant/archiveExtracts/cyclohexane-nHeptane-bubble-acs.jced.8b00929.dat";
            doi       "10.1021/acs.jced.8b00929";
            sha256    "bd35ac362a39f6c424a08b5ae248462f92c9bdcf8a79d243ec6ec3f36e1eb08d";
            provenance measured;
            archiveFile "acs.jced.8b00929.xml";
            system    "cyclohexane + nHeptane";
            pressure  "101300.000000 Pa";
        }
    );
    fingerprint "a5c017788e4cabcf";   // of the declaration, frozen before the fit

    //  IN-SAMPLE: the model reproducing the very points it was
    //  fitted to.  It is NOT a validation; see the block below.
    weighting     uncertainty;   // chi2 is sum ((T_model - T_exp)/U)^2, dimensionless
    chi2          4.07878508;
    rms_K         0.35733320;
    nDataPoints   19;
    identifiable  false;
    maxAbsCorr    0.99953962;

    validity
    {
        temperature { min 355.19 K; max 369.87 K; }
        pressure    { min 101300 Pa; max 101300 Pa; }
        note        "the span of the FIT evidence; outside it the pair is an extrapolation";
    }
}

validation
{
    verdict     validationRefused;

    heldOut     none;   // every declared dataset carried \`role fit\`

    acceptance  none;   // no band was declared before the fit, so no
                        // pass/fail may be read out of the residual above
}

curation
{
    rule            "DEV.md 4c C283 (amended) + C284, graded by C285 (C286)";
    evidence        allLaboratories;   // every study fitted, none held out
    objective       twoStage;
    outlierLimit    3 K;   // |T_model - T| after the least-squares stage
    outliersDropped 0;
    pointsKept      19;
    noBubblePoint   0;
    maxAbsError     0.6512 K;
    meanAbsError    0.3082 K;
    acceptance      graded;   // max |T_model - T| over the kept points, DEV.md 4c C285 (C286)
    gradeLimits_K   (1 2 4);   // upper limits of clean / warning / severe; above, refused
    grade           clean;
    oneLiquid       true;   // arm (f) over the validity span; a pair that splits ONE liquid is never promoted, whatever its grade
    verdict         accepted;
}
`,fn=`/*---------------------------------------------------------------------------*\\
  NRTL binary interaction parameters --- tertButylEthylEther(i) + cyclohexane(j)

  REGRESSED BY CHOUPO'S CURATION PIPELINE (bin/choupo-curate, DEV.md 4c C282;
  record docs/design/binary-pairs-from-open-measurements.md) to measured
  bubble PRESSURES at stated temperatures (P-x, DEV.md 4c C291).  The articles named under \`evidence\` are the
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
  its fitting pipeline (every laboratory fitted to the bubble pressure, outliers beyond
  20 % discarded by name, max |P_model - P|/P over the kept points GRADED
  clean / warning / severe at 5 / 10 / 20 % -- DEV.md 4c C283 amended, C285, C291;
  THIS fit: clean, 1.2560 %; one liquid across its validity span), and NO
  HUMAN HAS REVIEWED IT.  The engine says so on every run that reads it, and
  voices a warning or a severe grade beside it.
  CAUTION: this record rests on ONE temperature and ONE laboratory.
  Nothing was held out: the \`validation {}\` block says so, and the acceptance
  is the \`curation {}\` block.  A curator who reads the series back against the
  articles marks it \`reviewStatus reviewed; humanReviewed true;\`.  Revert with
  \`bin/choupo-curate revert cyclohexane-tertButylEthylEther\`.

  REPRODUCE: run tutorials/props/curation/curate544_nrtl_tertButylEthylEther_cyclohexane (after \`bin/choupo-curate fetch\` on it); its fit
  writes cyclohexane-tertButylEthylEther.proposal.dat, which bin/curate/check_regressed_pairs.py holds
  equal to this record.
\\*---------------------------------------------------------------------------*/

recordType binaryInteractionParameters;
schemaVersion 1;

pair { i tertButylEthylEther; j cyclohexane; }

components  ( tertButylEthylEther  cyclohexane );
model       NRTL;

parameters
{
    i           tertButylEthylEther;
    j           cyclohexane;
    a_ij        0.00000000;
    b_ij        470.04108355;
    a_ji        0.00000000;
    b_ji        -255.38367679;
    alpha       0.30000000;
}

provenance
{
    origin        fitted;
    method        "fitParameters(P_bubble), Levenberg-Marquardt";
    methodVersion "choupoProps Choupo-dev";
    fittedInCase  "tutorials/props/curation/curate544_nrtl_tertButylEthylEther_cyclohexane";
    reviewStatus  autoPromoted;
    humanReviewed false;
    fitGrade      clean;   // DEV.md 4c C285 (C291): max |P_model - P|/P over the kept points, graded 5 / 10 / 20 %
    fitGradeMaxRelativeError_pct 1.2560;
    promotedBy    "bin/curate/pairs_px.py promote";
    promotedDate  "2026-11-10";
    reviewReason  "regressed by bin/choupo-curate from archive-transcribed measurements; not yet read back against the articles";
    reuse         "Choupo's own regression; the measured points belong to the cited articles and are not reproduced in this record or this tree";
    fitDate       "2026-11-10";

    evidence
    (
        {
            role      fit;
            dataset   "constant/archiveExtracts/tertButylEthylEther-cyclohexane-bubbleP-je7005488-b1.dat";
            doi       "10.1021/je7005488";
            sha256    "23d58dc843e58ce6af6710a64af0de287f68052b10597899afb467540de55661";
            provenance measured;
            archiveFile "je7005488.xml";
            system    "tertButylEthylEther + cyclohexane";
        }
    );
    fingerprint "6a845af810601c1f";   // of the declaration, frozen before the fit

    //  IN-SAMPLE: the model reproducing the very points it was
    //  fitted to.  It is NOT a validation; see the block below.
    weighting     equal;   // chi2 is sum ((P_model - P_exp)/P_exp)^2, dimensionless
    chi2          0.00189950;
    rms_rel       0.00889638;
    nDataPoints   24;
    identifiable  true;
    maxAbsCorr    0.99575808;

    validity
    {
        temperature { min 313.15 K; max 313.15 K; }
        pressure    { min 25453 Pa; max 31465 Pa; }
        note        "the span of the FIT evidence; outside it the pair is an extrapolation";
    }
}

validation
{
    verdict     validationRefused;

    heldOut     none;   // every declared dataset carried \`role fit\`

    acceptance  none;   // no band was declared before the fit, so no
                        // pass/fail may be read out of the residual above
}

curation
{
    rule            "DEV.md 4c C291 (bubble-pressure pairs; every laboratory, graded by C285)";
    evidence        allLaboratories;   // every block fitted, none held out
    objective       twoStage;
    residual        P_bubble;
    residualScale   relative;   // (P_model - P)/P at each point's stated T
    outlierLimit_pct 20;   // |P_model - P|/P after the least-squares stage
    outliersDropped 0;
    pointsKept      24;
    noBubblePoint   0;
    maxRelError_pct 1.2560;
    meanRelError_pct 0.8032;
    acceptance      graded;   // max relative pressure error over the kept points, DEV.md 4c C285 (C291)
    gradeLimits_pct (5 10 20);   // upper limits of clean / warning / severe; above, refused
    grade           clean;
    oneLiquid       true;   // arm (f) over the validity span; a pair that splits ONE liquid is never promoted
    temperatures    1;   // distinct stated temperatures in the evidence
    laboratories    1;   // distinct articles in the evidence
    singleTemperature true;   // true: b/T was fitted at ONE temperature
    singleLaboratory  true;   // true: ONE laboratory's data, nothing to cross-check it
    verdict         accepted;
}
`,yn=`/*---------------------------------------------------------------------------*\\
  NRTL binary interaction parameters --- cyclohexane(i) + tetrahydrofuran(j)

  REGRESSED BY CHOUPO'S CURATION PIPELINE (bin/choupo-curate, DEV.md 4c C282;
  record docs/design/binary-pairs-from-open-measurements.md) to measured
  bubble temperatures.  The articles named under \`evidence\` are the
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
  its fitting pipeline (every laboratory fitted, outliers beyond 3 K
  discarded by name, max |T_model - T| over the kept points GRADED
  clean / warning / severe at 1 / 2 / 4 K -- DEV.md 4c C283
  amended, C285, C286; THIS fit: clean, 0.3343 K; one liquid
  across its validity span), and NO HUMAN HAS REVIEWED IT.  The
  engine says so on every run that reads it, and voices a warning
  or a severe grade beside it.
  Nothing was held out: the \`validation {}\` block says so, and the
  acceptance is the \`curation {}\` block.  A curator who reads the series
  back against the articles marks it \`reviewStatus reviewed; humanReviewed
  true;\`.  Revert with \`bin/choupo-curate revert cyclohexane-tetrahydrofuran\`.

  REPRODUCE: run tutorials/props/curation/curate156_nrtl_cyclohexane_tetrahydrofuran (after \`bin/choupo-curate fetch\` on it); its fit
  writes cyclohexane-tetrahydrofuran.proposal.dat, which bin/curate/check_regressed_pairs.py holds
  equal to this record.
\\*---------------------------------------------------------------------------*/

recordType binaryInteractionParameters;
schemaVersion 1;

pair { i cyclohexane; j tetrahydrofuran; }

components  ( cyclohexane  tetrahydrofuran );
model       NRTL;

parameters
{
    i           cyclohexane;
    j           tetrahydrofuran;
    a_ij        0.00000000;
    b_ij        71.97284626;
    a_ji        0.00000000;
    b_ji        106.16022018;
    alpha       0.30000000;
}

provenance
{
    origin        fitted;
    method        "fitParameters(T_bubble), Levenberg-Marquardt";
    methodVersion "choupoProps Choupo-dev";
    fittedInCase  "tutorials/props/curation/curate156_nrtl_cyclohexane_tetrahydrofuran";
    reviewStatus  autoPromoted;
    humanReviewed false;
    fitGrade      clean;   // DEV.md 4c C285 (C286): max |T_model - T| over the kept points, graded 1 / 2 / 4 K
    fitGradeMaxTemperatureError_K 0.3343;
    promotedBy    "bin/choupo-curate pair --promote";
    promotedDate  "2026-11-10";
    reviewReason  "regressed by bin/choupo-curate from archive-transcribed measurements; not yet read back against the articles";
    reuse         "Choupo's own regression; the measured points belong to the cited articles and are not reproduced in this record or this tree";
    fitDate       "2026-11-10";

    evidence
    (
        {
            role      fit;
            dataset   "constant/archiveExtracts/cyclohexane-tetrahydrofuran-bubble-je4004993.dat";
            doi       "10.1021/je4004993";
            sha256    "7815d74f34d9dd83acd32741c64e67fdafac5a7ce9f7933d781c46d6f048e9a9";
            provenance measured;
            archiveFile "je4004993.xml";
            system    "cyclohexane + tetrahydrofuran";
            pressure  "101300.000000 Pa";
        }
    );
    fingerprint "bae0d4e3256df57c";   // of the declaration, frozen before the fit

    //  IN-SAMPLE: the model reproducing the very points it was
    //  fitted to.  It is NOT a validation; see the block below.
    weighting     uncertainty;   // chi2 is sum ((T_model - T_exp)/U)^2, dimensionless
    chi2          9.14674367;
    rms_K         0.16428537;
    nDataPoints   20;
    identifiable  true;
    maxAbsCorr    0.99819775;

    validity
    {
        temperature { min 339.04 K; max 351.31 K; }
        pressure    { min 101300 Pa; max 101300 Pa; }
        note        "the span of the FIT evidence; outside it the pair is an extrapolation";
    }
}

validation
{
    verdict     validationRefused;

    heldOut     none;   // every declared dataset carried \`role fit\`

    acceptance  none;   // no band was declared before the fit, so no
                        // pass/fail may be read out of the residual above
}

curation
{
    rule            "DEV.md 4c C283 (amended) + C284, graded by C285 (C286)";
    evidence        allLaboratories;   // every study fitted, none held out
    objective       twoStage;
    outlierLimit    3 K;   // |T_model - T| after the least-squares stage
    outliersDropped 0;
    pointsKept      20;
    noBubblePoint   0;
    maxAbsError     0.3343 K;
    meanAbsError    0.1356 K;
    acceptance      graded;   // max |T_model - T| over the kept points, DEV.md 4c C285 (C286)
    gradeLimits_K   (1 2 4);   // upper limits of clean / warning / severe; above, refused
    grade           clean;
    oneLiquid       true;   // arm (f) over the validity span; a pair that splits ONE liquid is never promoted, whatever its grade
    verdict         accepted;
}
`,En=`/*---------------------------------------------------------------------------*\\
  NRTL binary interaction parameters --- diNButylEther(i) + nHeptane(j)

  REGRESSED BY CHOUPO'S CURATION PIPELINE (bin/choupo-curate, DEV.md 4c C282;
  record docs/design/binary-pairs-from-open-measurements.md) to measured
  bubble PRESSURES at stated temperatures (P-x, DEV.md 4c C291).  The articles named under \`evidence\` are the
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
  its fitting pipeline (every laboratory fitted to the bubble pressure, outliers beyond
  20 % discarded by name, max |P_model - P|/P over the kept points GRADED
  clean / warning / severe at 5 / 10 / 20 % -- DEV.md 4c C283 amended, C285, C291;
  THIS fit: clean, 0.5272 %; one liquid across its validity span), and NO
  HUMAN HAS REVIEWED IT.  The engine says so on every run that reads it, and
  voices a warning or a severe grade beside it.
  CAUTION: this record rests on ONE temperature and ONE laboratory.
  Nothing was held out: the \`validation {}\` block says so, and the acceptance
  is the \`curation {}\` block.  A curator who reads the series back against the
  articles marks it \`reviewStatus reviewed; humanReviewed true;\`.  Revert with
  \`bin/choupo-curate revert diNButylEther-nHeptane\`.

  REPRODUCE: run tutorials/props/curation/curate545_nrtl_diNButylEther_nHeptane (after \`bin/choupo-curate fetch\` on it); its fit
  writes diNButylEther-nHeptane.proposal.dat, which bin/curate/check_regressed_pairs.py holds
  equal to this record.
\\*---------------------------------------------------------------------------*/

recordType binaryInteractionParameters;
schemaVersion 1;

pair { i diNButylEther; j nHeptane; }

components  ( diNButylEther  nHeptane );
model       NRTL;

parameters
{
    i           diNButylEther;
    j           nHeptane;
    a_ij        0.00000000;
    b_ij        -174.77399503;
    a_ji        0.00000000;
    b_ji        233.35896347;
    alpha       0.30000000;
}

provenance
{
    origin        fitted;
    method        "fitParameters(P_bubble), Levenberg-Marquardt";
    methodVersion "choupoProps Choupo-dev";
    fittedInCase  "tutorials/props/curation/curate545_nrtl_diNButylEther_nHeptane";
    reviewStatus  autoPromoted;
    humanReviewed false;
    fitGrade      clean;   // DEV.md 4c C285 (C291): max |P_model - P|/P over the kept points, graded 5 / 10 / 20 %
    fitGradeMaxRelativeError_pct 0.5272;
    promotedBy    "bin/curate/pairs_px.py promote";
    promotedDate  "2026-11-10";
    reviewReason  "regressed by bin/choupo-curate from archive-transcribed measurements; not yet read back against the articles";
    reuse         "Choupo's own regression; the measured points belong to the cited articles and are not reproduced in this record or this tree";
    fitDate       "2026-11-10";

    evidence
    (
        {
            role      fit;
            dataset   "constant/archiveExtracts/diNButylEther-nHeptane-bubbleP-je7007523-b4.dat";
            doi       "10.1021/je7007523";
            sha256    "c9b5b693d7e2459732b084f6fdb52e9529dbcdb0cdedc23dccfe2307e37dc22c";
            provenance measured;
            archiveFile "je7007523.xml";
            system    "diNButylEther + nHeptane";
        }
    );
    fingerprint "ed0223d9f0a5905c";   // of the declaration, frozen before the fit

    //  IN-SAMPLE: the model reproducing the very points it was
    //  fitted to.  It is NOT a validation; see the block below.
    weighting     equal;   // chi2 is sum ((P_model - P_exp)/P_exp)^2, dimensionless
    chi2          0.00036389;
    rms_rel       0.00389385;
    nDataPoints   24;
    identifiable  false;
    maxAbsCorr    0.99924652;

    validity
    {
        temperature { min 313.15 K; max 313.15 K; }
        pressure    { min 2723 Pa; max 11806 Pa; }
        note        "the span of the FIT evidence; outside it the pair is an extrapolation";
    }
}

validation
{
    verdict     validationRefused;

    heldOut     none;   // every declared dataset carried \`role fit\`

    acceptance  none;   // no band was declared before the fit, so no
                        // pass/fail may be read out of the residual above
}

curation
{
    rule            "DEV.md 4c C291 (bubble-pressure pairs; every laboratory, graded by C285)";
    evidence        allLaboratories;   // every block fitted, none held out
    objective       twoStage;
    residual        P_bubble;
    residualScale   relative;   // (P_model - P)/P at each point's stated T
    outlierLimit_pct 20;   // |P_model - P|/P after the least-squares stage
    outliersDropped 0;
    pointsKept      24;
    noBubblePoint   0;
    maxRelError_pct 0.5272;
    meanRelError_pct 0.3662;
    acceptance      graded;   // max relative pressure error over the kept points, DEV.md 4c C285 (C291)
    gradeLimits_pct (5 10 20);   // upper limits of clean / warning / severe; above, refused
    grade           clean;
    oneLiquid       true;   // arm (f) over the validity span; a pair that splits ONE liquid is never promoted
    temperatures    1;   // distinct stated temperatures in the evidence
    laboratories    1;   // distinct articles in the evidence
    singleTemperature true;   // true: b/T was fitted at ONE temperature
    singleLaboratory  true;   // true: ONE laboratory's data, nothing to cross-check it
    verdict         accepted;
}
`,_n=`/*---------------------------------------------------------------------------*\\
  NRTL binary interaction parameters --- diNButylEther(i) + nNDimethylacetamide(j)

  REGRESSED BY CHOUPO'S CURATION PIPELINE (bin/choupo-curate, DEV.md 4c C282;
  record docs/design/binary-pairs-from-open-measurements.md) to measured
  bubble PRESSURES at stated temperatures (P-x, DEV.md 4c C291).  The articles named under \`evidence\` are the
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
  its fitting pipeline (every laboratory fitted to the bubble pressure, outliers beyond
  20 % discarded by name, max |P_model - P|/P over the kept points GRADED
  clean / warning / severe at 5 / 10 / 20 % -- DEV.md 4c C283 amended, C285, C291;
  THIS fit: clean, 2.4476 %; one liquid across its validity span), and NO
  HUMAN HAS REVIEWED IT.  The engine says so on every run that reads it, and
  voices a warning or a severe grade beside it.
  CAUTION: this record rests on ONE temperature and ONE laboratory.
  Nothing was held out: the \`validation {}\` block says so, and the acceptance
  is the \`curation {}\` block.  A curator who reads the series back against the
  articles marks it \`reviewStatus reviewed; humanReviewed true;\`.  Revert with
  \`bin/choupo-curate revert diNButylEther-nNDimethylacetamide\`.

  REPRODUCE: run tutorials/props/curation/curate502_nrtl_diNButylEther_nNDimethylacetamide (after \`bin/choupo-curate fetch\` on it); its fit
  writes diNButylEther-nNDimethylacetamide.proposal.dat, which bin/curate/check_regressed_pairs.py holds
  equal to this record.
\\*---------------------------------------------------------------------------*/

recordType binaryInteractionParameters;
schemaVersion 1;

pair { i diNButylEther; j nNDimethylacetamide; }

components  ( diNButylEther  nNDimethylacetamide );
model       NRTL;

parameters
{
    i           diNButylEther;
    j           nNDimethylacetamide;
    a_ij        0.00000000;
    b_ij        341.68058455;
    a_ji        0.00000000;
    b_ji        250.73954655;
    alpha       0.30000000;
}

provenance
{
    origin        fitted;
    method        "fitParameters(P_bubble), Levenberg-Marquardt";
    methodVersion "choupoProps Choupo-dev";
    fittedInCase  "tutorials/props/curation/curate502_nrtl_diNButylEther_nNDimethylacetamide";
    reviewStatus  autoPromoted;
    humanReviewed false;
    fitGrade      clean;   // DEV.md 4c C285 (C291): max |P_model - P|/P over the kept points, graded 5 / 10 / 20 %
    fitGradeMaxRelativeError_pct 2.4476;
    promotedBy    "bin/curate/pairs_px.py promote";
    promotedDate  "2026-11-10";
    reviewReason  "regressed by bin/choupo-curate from archive-transcribed measurements; not yet read back against the articles";
    reuse         "Choupo's own regression; the measured points belong to the cited articles and are not reproduced in this record or this tree";
    fitDate       "2026-11-10";

    evidence
    (
        {
            role      fit;
            dataset   "constant/archiveExtracts/diNButylEther-nNDimethylacetamide-bubbleP-acs.jced.7b00119-b27.dat";
            doi       "10.1021/acs.jced.7b00119";
            sha256    "c57dbb0a0bf3405a8a631fa0f45bc2682f03b5dd1ee020e8b3f07b3a0dafe997";
            provenance measured;
            archiveFile "acs.jced.7b00119.xml";
            system    "diNButylEther + nNDimethylacetamide";
        }
    );
    fingerprint "5348cb4cccf8a9aa";   // of the declaration, frozen before the fit

    //  IN-SAMPLE: the model reproducing the very points it was
    //  fitted to.  It is NOT a validation; see the block below.
    weighting     equal;   // chi2 is sum ((P_model - P_exp)/P_exp)^2, dimensionless
    chi2          0.01584581;
    rms_rel       0.01745644;
    nDataPoints   52;
    identifiable  true;
    maxAbsCorr    0.97306284;

    validity
    {
        temperature { min 353.15 K; max 353.15 K; }
        pressure    { min 5460 Pa; max 14370 Pa; }
        note        "the span of the FIT evidence; outside it the pair is an extrapolation";
    }
}

validation
{
    verdict     validationRefused;

    heldOut     none;   // every declared dataset carried \`role fit\`

    acceptance  none;   // no band was declared before the fit, so no
                        // pass/fail may be read out of the residual above
}

curation
{
    rule            "DEV.md 4c C291 (bubble-pressure pairs; every laboratory, graded by C285)";
    evidence        allLaboratories;   // every block fitted, none held out
    objective       twoStage;
    residual        P_bubble;
    residualScale   relative;   // (P_model - P)/P at each point's stated T
    outlierLimit_pct 20;   // |P_model - P|/P after the least-squares stage
    outliersDropped 0;
    pointsKept      52;
    noBubblePoint   0;
    maxRelError_pct 2.4476;
    meanRelError_pct 1.5443;
    acceptance      graded;   // max relative pressure error over the kept points, DEV.md 4c C285 (C291)
    gradeLimits_pct (5 10 20);   // upper limits of clean / warning / severe; above, refused
    grade           clean;
    oneLiquid       true;   // arm (f) over the validity span; a pair that splits ONE liquid is never promoted
    temperatures    1;   // distinct stated temperatures in the evidence
    laboratories    1;   // distinct articles in the evidence
    singleTemperature true;   // true: b/T was fitted at ONE temperature
    singleLaboratory  true;   // true: ONE laboratory's data, nothing to cross-check it
    verdict         accepted;
}
`,gn=`/*---------------------------------------------------------------------------*\\
  NRTL binary interaction parameters --- diNButylEther(i) + toluene(j)

  REGRESSED BY CHOUPO'S CURATION PIPELINE (bin/choupo-curate, DEV.md 4c C282;
  record docs/design/binary-pairs-from-open-measurements.md) to measured
  bubble PRESSURES at stated temperatures (P-x, DEV.md 4c C291).  The articles named under \`evidence\` are the
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
  its fitting pipeline (every laboratory fitted to the bubble pressure, outliers beyond
  20 % discarded by name, max |P_model - P|/P over the kept points GRADED
  clean / warning / severe at 5 / 10 / 20 % -- DEV.md 4c C283 amended, C285, C291;
  THIS fit: clean, 0.8211 %; one liquid across its validity span), and NO
  HUMAN HAS REVIEWED IT.  The engine says so on every run that reads it, and
  voices a warning or a severe grade beside it.
  CAUTION: this record rests on ONE temperature and ONE laboratory.
  Nothing was held out: the \`validation {}\` block says so, and the acceptance
  is the \`curation {}\` block.  A curator who reads the series back against the
  articles marks it \`reviewStatus reviewed; humanReviewed true;\`.  Revert with
  \`bin/choupo-curate revert diNButylEther-toluene\`.

  REPRODUCE: run tutorials/props/curation/curate516_nrtl_diNButylEther_toluene (after \`bin/choupo-curate fetch\` on it); its fit
  writes diNButylEther-toluene.proposal.dat, which bin/curate/check_regressed_pairs.py holds
  equal to this record.
\\*---------------------------------------------------------------------------*/

recordType binaryInteractionParameters;
schemaVersion 1;

pair { i diNButylEther; j toluene; }

components  ( diNButylEther  toluene );
model       NRTL;

parameters
{
    i           diNButylEther;
    j           toluene;
    a_ij        0.00000000;
    b_ij        -303.50247330;
    a_ji        0.00000000;
    b_ji        434.00952208;
    alpha       0.30000000;
}

provenance
{
    origin        fitted;
    method        "fitParameters(P_bubble), Levenberg-Marquardt";
    methodVersion "choupoProps Choupo-dev";
    fittedInCase  "tutorials/props/curation/curate516_nrtl_diNButylEther_toluene";
    reviewStatus  autoPromoted;
    humanReviewed false;
    fitGrade      clean;   // DEV.md 4c C285 (C291): max |P_model - P|/P over the kept points, graded 5 / 10 / 20 %
    fitGradeMaxRelativeError_pct 0.8211;
    promotedBy    "bin/curate/pairs_px.py promote";
    promotedDate  "2026-11-10";
    reviewReason  "regressed by bin/choupo-curate from archive-transcribed measurements; not yet read back against the articles";
    reuse         "Choupo's own regression; the measured points belong to the cited articles and are not reproduced in this record or this tree";
    fitDate       "2026-11-10";

    evidence
    (
        {
            role      fit;
            dataset   "constant/archiveExtracts/diNButylEther-toluene-bubbleP-j.fluid.2005.11.026-b3.dat";
            doi       "10.1016/j.fluid.2005.11.026";
            sha256    "eca275a8ecb0a7b11e2fd48632a1865670266d1d7e61205967301f167fcb25a5";
            provenance measured;
            archiveFile "j.fluid.2005.11.026.xml";
            system    "diNButylEther + toluene";
        }
    );
    fingerprint "cc42622b278c30a0";   // of the declaration, frozen before the fit

    //  IN-SAMPLE: the model reproducing the very points it was
    //  fitted to.  It is NOT a validation; see the block below.
    weighting     equal;   // chi2 is sum ((P_model - P_exp)/P_exp)^2, dimensionless
    chi2          0.00079569;
    rms_rel       0.00553204;
    nDataPoints   26;
    identifiable  true;
    maxAbsCorr    0.99649986;

    validity
    {
        temperature { min 313.15 K; max 313.15 K; }
        pressure    { min 2355 Pa; max 7622 Pa; }
        note        "the span of the FIT evidence; outside it the pair is an extrapolation";
    }
}

validation
{
    verdict     validationRefused;

    heldOut     none;   // every declared dataset carried \`role fit\`

    acceptance  none;   // no band was declared before the fit, so no
                        // pass/fail may be read out of the residual above
}

curation
{
    rule            "DEV.md 4c C291 (bubble-pressure pairs; every laboratory, graded by C285)";
    evidence        allLaboratories;   // every block fitted, none held out
    objective       twoStage;
    residual        P_bubble;
    residualScale   relative;   // (P_model - P)/P at each point's stated T
    outlierLimit_pct 20;   // |P_model - P|/P after the least-squares stage
    outliersDropped 0;
    pointsKept      26;
    noBubblePoint   0;
    maxRelError_pct 0.8211;
    meanRelError_pct 0.4984;
    acceptance      graded;   // max relative pressure error over the kept points, DEV.md 4c C285 (C291)
    gradeLimits_pct (5 10 20);   // upper limits of clean / warning / severe; above, refused
    grade           clean;
    oneLiquid       true;   // arm (f) over the validity span; a pair that splits ONE liquid is never promoted
    temperatures    1;   // distinct stated temperatures in the evidence
    laboratories    1;   // distinct articles in the evidence
    singleTemperature true;   // true: b/T was fitted at ONE temperature
    singleLaboratory  true;   // true: ONE laboratory's data, nothing to cross-check it
    verdict         accepted;
}
`,Tn=`/*---------------------------------------------------------------------------*\\
  NRTL binary interaction parameters --- diethylSulfide(i) + ethanol(j)

  REGRESSED BY CHOUPO'S CURATION PIPELINE (bin/choupo-curate, DEV.md 4c C282;
  record docs/design/binary-pairs-from-open-measurements.md) to measured
  bubble PRESSURES at stated temperatures (P-x, DEV.md 4c C291).  The articles named under \`evidence\` are the
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
  its fitting pipeline (every laboratory fitted to the bubble pressure, outliers beyond
  20 % discarded by name, max |P_model - P|/P over the kept points GRADED
  clean / warning / severe at 5 / 10 / 20 % -- DEV.md 4c C283 amended, C285, C291;
  THIS fit: clean, 1.6073 %; one liquid across its validity span), and NO
  HUMAN HAS REVIEWED IT.  The engine says so on every run that reads it, and
  voices a warning or a severe grade beside it.
  Nothing was held out: the \`validation {}\` block says so, and the acceptance
  is the \`curation {}\` block.  A curator who reads the series back against the
  articles marks it \`reviewStatus reviewed; humanReviewed true;\`.  Revert with
  \`bin/choupo-curate revert diethylSulfide-ethanol\`.

  REPRODUCE: run tutorials/props/curation/curate521_nrtl_diethylSulfide_ethanol (after \`bin/choupo-curate fetch\` on it); its fit
  writes diethylSulfide-ethanol.proposal.dat, which bin/curate/check_regressed_pairs.py holds
  equal to this record.
\\*---------------------------------------------------------------------------*/

recordType binaryInteractionParameters;
schemaVersion 1;

pair { i diethylSulfide; j ethanol; }

components  ( diethylSulfide  ethanol );
model       NRTL;

parameters
{
    i           diethylSulfide;
    j           ethanol;
    a_ij        0.00000000;
    b_ij        385.59534527;
    a_ji        0.00000000;
    b_ji        188.96293054;
    alpha       0.30000000;
}

provenance
{
    origin        fitted;
    method        "fitParameters(P_bubble), Levenberg-Marquardt";
    methodVersion "choupoProps Choupo-dev";
    fittedInCase  "tutorials/props/curation/curate521_nrtl_diethylSulfide_ethanol";
    reviewStatus  autoPromoted;
    humanReviewed false;
    fitGrade      clean;   // DEV.md 4c C285 (C291): max |P_model - P|/P over the kept points, graded 5 / 10 / 20 %
    fitGradeMaxRelativeError_pct 1.6073;
    promotedBy    "bin/curate/pairs_px.py promote";
    promotedDate  "2026-11-10";
    reviewReason  "regressed by bin/choupo-curate from archive-transcribed measurements; not yet read back against the articles";
    reuse         "Choupo's own regression; the measured points belong to the cited articles and are not reproduced in this record or this tree";
    fitDate       "2026-11-10";

    evidence
    (
        {
            role      fit;
            dataset   "constant/archiveExtracts/diethylSulfide-ethanol-bubbleP-j.fluid.2015.10.041-b3.dat";
            doi       "10.1016/j.fluid.2015.10.041";
            sha256    "acb1b5e336311344ac044b8a5c190b805532fa909ae5db83ad7fbdbc8e0bf081";
            provenance measured;
            archiveFile "j.fluid.2015.10.041.xml";
            system    "diethylSulfide + ethanol";
        }
        {
            role      fit;
            dataset   "constant/archiveExtracts/diethylSulfide-ethanol-bubbleP-j.fluid.2010.11.026-b5.dat";
            doi       "10.1016/j.fluid.2010.11.026";
            sha256    "eb52ee2098f75e25e57b87634501a20a630bb76b623e66c3b284e8e8e0dcabb2";
            provenance measured;
            archiveFile "j.fluid.2010.11.026.xml";
            system    "diethylSulfide + ethanol";
        }
    );
    fingerprint "66b3cc1213704e07";   // of the declaration, frozen before the fit

    //  IN-SAMPLE: the model reproducing the very points it was
    //  fitted to.  It is NOT a validation; see the block below.
    weighting     equal;   // chi2 is sum ((P_model - P_exp)/P_exp)^2, dimensionless
    chi2          0.00242812;
    rms_rel       0.00985519;
    nDataPoints   25;
    identifiable  true;
    maxAbsCorr    0.96913166;

    validity
    {
        temperature { min 343.13 K; max 343.15 K; }
        pressure    { min 52700 Pa; max 88500 Pa; }
        note        "the span of the FIT evidence; outside it the pair is an extrapolation";
    }
}

validation
{
    verdict     validationRefused;

    heldOut     none;   // every declared dataset carried \`role fit\`

    acceptance  none;   // no band was declared before the fit, so no
                        // pass/fail may be read out of the residual above
}

curation
{
    rule            "DEV.md 4c C291 (bubble-pressure pairs; every laboratory, graded by C285)";
    evidence        allLaboratories;   // every block fitted, none held out
    objective       twoStage;
    residual        P_bubble;
    residualScale   relative;   // (P_model - P)/P at each point's stated T
    outlierLimit_pct 20;   // |P_model - P|/P after the least-squares stage
    outliersDropped 0;
    pointsKept      25;
    noBubblePoint   0;
    maxRelError_pct 1.6073;
    meanRelError_pct 0.8388;
    acceptance      graded;   // max relative pressure error over the kept points, DEV.md 4c C285 (C291)
    gradeLimits_pct (5 10 20);   // upper limits of clean / warning / severe; above, refused
    grade           clean;
    oneLiquid       true;   // arm (f) over the validity span; a pair that splits ONE liquid is never promoted
    temperatures    2;   // distinct stated temperatures in the evidence
    laboratories    2;   // distinct articles in the evidence
    singleTemperature false;   // true: b/T was fitted at ONE temperature
    singleLaboratory  false;   // true: ONE laboratory's data, nothing to cross-check it
    verdict         accepted;
}
`,Pn=`/*---------------------------------------------------------------------------*\\
  NRTL binary interaction parameters --- diethylSulfide(i) + nPropylAcetate(j)

  REGRESSED BY CHOUPO'S CURATION PIPELINE (bin/choupo-curate, DEV.md 4c C282;
  record docs/design/binary-pairs-from-open-measurements.md) to measured
  bubble PRESSURES at stated temperatures (P-x, DEV.md 4c C291).  The articles named under \`evidence\` are the
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
  its fitting pipeline (every laboratory fitted to the bubble pressure, outliers beyond
  20 % discarded by name, max |P_model - P|/P over the kept points GRADED
  clean / warning / severe at 5 / 10 / 20 % -- DEV.md 4c C283 amended, C285, C291;
  THIS fit: clean, 0.1908 %; one liquid across its validity span), and NO
  HUMAN HAS REVIEWED IT.  The engine says so on every run that reads it, and
  voices a warning or a severe grade beside it.
  CAUTION: this record rests on ONE temperature and ONE laboratory.
  Nothing was held out: the \`validation {}\` block says so, and the acceptance
  is the \`curation {}\` block.  A curator who reads the series back against the
  articles marks it \`reviewStatus reviewed; humanReviewed true;\`.  Revert with
  \`bin/choupo-curate revert diethylSulfide-nPropylAcetate\`.

  REPRODUCE: run tutorials/props/curation/curate567_nrtl_diethylSulfide_nPropylAcetate (after \`bin/choupo-curate fetch\` on it); its fit
  writes diethylSulfide-nPropylAcetate.proposal.dat, which bin/curate/check_regressed_pairs.py holds
  equal to this record.
\\*---------------------------------------------------------------------------*/

recordType binaryInteractionParameters;
schemaVersion 1;

pair { i diethylSulfide; j nPropylAcetate; }

components  ( diethylSulfide  nPropylAcetate );
model       NRTL;

parameters
{
    i           diethylSulfide;
    j           nPropylAcetate;
    a_ij        0.00000000;
    b_ij        -127.11060800;
    a_ji        0.00000000;
    b_ji        216.36536696;
    alpha       0.30000000;
}

provenance
{
    origin        fitted;
    method        "fitParameters(P_bubble), Levenberg-Marquardt";
    methodVersion "choupoProps Choupo-dev";
    fittedInCase  "tutorials/props/curation/curate567_nrtl_diethylSulfide_nPropylAcetate";
    reviewStatus  autoPromoted;
    humanReviewed false;
    fitGrade      clean;   // DEV.md 4c C285 (C291): max |P_model - P|/P over the kept points, graded 5 / 10 / 20 %
    fitGradeMaxRelativeError_pct 0.1908;
    promotedBy    "bin/curate/pairs_px.py promote";
    promotedDate  "2026-11-10";
    reviewReason  "regressed by bin/choupo-curate from archive-transcribed measurements; not yet read back against the articles";
    reuse         "Choupo's own regression; the measured points belong to the cited articles and are not reproduced in this record or this tree";
    fitDate       "2026-11-10";

    evidence
    (
        {
            role      fit;
            dataset   "constant/archiveExtracts/diethylSulfide-nPropylAcetate-bubbleP-j.fluid.2010.11.026-b11.dat";
            doi       "10.1016/j.fluid.2010.11.026";
            sha256    "eb52ee2098f75e25e57b87634501a20a630bb76b623e66c3b284e8e8e0dcabb2";
            provenance measured;
            archiveFile "j.fluid.2010.11.026.xml";
            system    "diethylSulfide + nPropylAcetate";
        }
    );
    fingerprint "113259cfb31b14c2";   // of the declaration, frozen before the fit

    //  IN-SAMPLE: the model reproducing the very points it was
    //  fitted to.  It is NOT a validation; see the block below.
    weighting     equal;   // chi2 is sum ((P_model - P_exp)/P_exp)^2, dimensionless
    chi2          0.00001561;
    rms_rel       0.00131696;
    nDataPoints   9;
    identifiable  false;
    maxAbsCorr    0.99946494;

    validity
    {
        temperature { min 363.15 K; max 363.15 K; }
        pressure    { min 76100 Pa; max 94800 Pa; }
        note        "the span of the FIT evidence; outside it the pair is an extrapolation";
    }
}

validation
{
    verdict     validationRefused;

    heldOut     none;   // every declared dataset carried \`role fit\`

    acceptance  none;   // no band was declared before the fit, so no
                        // pass/fail may be read out of the residual above
}

curation
{
    rule            "DEV.md 4c C291 (bubble-pressure pairs; every laboratory, graded by C285)";
    evidence        allLaboratories;   // every block fitted, none held out
    objective       twoStage;
    residual        P_bubble;
    residualScale   relative;   // (P_model - P)/P at each point's stated T
    outlierLimit_pct 20;   // |P_model - P|/P after the least-squares stage
    outliersDropped 0;
    pointsKept      9;
    noBubblePoint   0;
    maxRelError_pct 0.1908;
    meanRelError_pct 0.1107;
    acceptance      graded;   // max relative pressure error over the kept points, DEV.md 4c C285 (C291)
    gradeLimits_pct (5 10 20);   // upper limits of clean / warning / severe; above, refused
    grade           clean;
    oneLiquid       true;   // arm (f) over the validity span; a pair that splits ONE liquid is never promoted
    temperatures    1;   // distinct stated temperatures in the evidence
    laboratories    1;   // distinct articles in the evidence
    singleTemperature true;   // true: b/T was fitted at ONE temperature
    singleLaboratory  true;   // true: ONE laboratory's data, nothing to cross-check it
    verdict         accepted;
}
`,Rn=`/*---------------------------------------------------------------------------*\\
  NRTL binary interaction parameters --- diisopropylEther(i) + isopropanol(j)

  REGRESSED BY CHOUPO'S CURATION PIPELINE (bin/choupo-curate, DEV.md 4c C282;
  record docs/design/binary-pairs-from-open-measurements.md) to measured
  bubble temperatures.  The articles named under \`evidence\` are the
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
  its fitting pipeline (every laboratory fitted, outliers beyond 3 K
  discarded by name, max |T_model - T| over the kept points GRADED
  clean / warning / severe at 1 / 2 / 4 K -- DEV.md 4c C283
  amended, C285, C286; THIS fit: severe, 2.3372 K; one liquid
  across its validity span), and NO HUMAN HAS REVIEWED IT.  The
  engine says so on every run that reads it, and voices a warning
  or a severe grade beside it.
  Nothing was held out: the \`validation {}\` block says so, and the
  acceptance is the \`curation {}\` block.  A curator who reads the series
  back against the articles marks it \`reviewStatus reviewed; humanReviewed
  true;\`.  Revert with \`bin/choupo-curate revert diisopropylEther-isopropanol\`.

  REPRODUCE: run tutorials/props/curation/curate103_nrtl_diisopropylEther_isopropanol (after \`bin/choupo-curate fetch\` on it); its fit
  writes diisopropylEther-isopropanol.proposal.dat, which bin/curate/check_regressed_pairs.py holds
  equal to this record.
\\*---------------------------------------------------------------------------*/

recordType binaryInteractionParameters;
schemaVersion 1;

pair { i diisopropylEther; j isopropanol; }

components  ( diisopropylEther  isopropanol );
model       NRTL;

parameters
{
    i           diisopropylEther;
    j           isopropanol;
    a_ij        0.00000000;
    b_ij        250.50308773;
    a_ji        0.00000000;
    b_ji        207.59427219;
    alpha       0.30000000;
}

provenance
{
    origin        fitted;
    method        "fitParameters(T_bubble), Levenberg-Marquardt";
    methodVersion "choupoProps Choupo-dev";
    fittedInCase  "tutorials/props/curation/curate103_nrtl_diisopropylEther_isopropanol";
    reviewStatus  autoPromoted;
    humanReviewed false;
    fitGrade      severe;   // DEV.md 4c C285 (C286): max |T_model - T| over the kept points, graded 1 / 2 / 4 K
    fitGradeMaxTemperatureError_K 2.3372;
    promotedBy    "bin/choupo-curate pair --promote";
    promotedDate  "2026-11-10";
    reviewReason  "regressed by bin/choupo-curate from archive-transcribed measurements; not yet read back against the articles";
    reuse         "Choupo's own regression; the measured points belong to the cited articles and are not reproduced in this record or this tree";
    fitDate       "2026-11-10";

    evidence
    (
        {
            role      fit;
            dataset   "constant/archiveExtracts/diisopropylEther-isopropanol-bubble-j.fluid.2014.09.014.dat";
            doi       "10.1016/j.fluid.2014.09.014";
            sha256    "d41cda01c43a3cc76aeaf4a625ed8e978cc642c74d02ad242d7a042b8a1ec367";
            provenance measured;
            archiveFile "j.fluid.2014.09.014.xml";
            system    "diisopropylEther + isopropanol";
        }
        {
            role      fit;
            dataset   "constant/archiveExtracts/diisopropylEther-isopropanol-bubble-j.fluid.2007.09.014.dat";
            doi       "10.1016/j.fluid.2007.09.014";
            sha256    "1a941fcef044b10b910fb6eb431a005076144b4b9414d6581ff49e84e1c6dcdb";
            provenance measured;
            archiveFile "j.fluid.2007.09.014.xml";
            system    "diisopropylEther + isopropanol";
        }
        {
            role      fit;
            dataset   "constant/archiveExtracts/diisopropylEther-isopropanol-bubble-je300994y.dat";
            doi       "10.1021/je300994y";
            sha256    "8c1682c6dd6f8ff2d44ad5b8ab25cc70777931d2f330498695f7f60ee0cc160a";
            provenance measured;
            archiveFile "je300994y.xml";
            system    "diisopropylEther + isopropanol";
            pressure  "101300.000000 Pa";
        }
        {
            role      fit;
            dataset   "constant/archiveExtracts/diisopropylEther-isopropanol-bubble-j.jct.2018.11.013.dat";
            doi       "10.1016/j.jct.2018.11.013";
            sha256    "41b94834e8edd281aecb470938028a5bb98300047fb3a2b701378f79c20f955c";
            provenance measured;
            archiveFile "j.jct.2018.11.013.xml";
            system    "diisopropylEther + isopropanol";
            pressure  "101300.000000 Pa";
        }
    );
    fingerprint "55fdc48e7191b791";   // of the declaration, frozen before the fit

    //  IN-SAMPLE: the model reproducing the very points it was
    //  fitted to.  It is NOT a validation; see the block below.
    weighting     uncertainty;   // chi2 is sum ((T_model - T_exp)/U)^2, dimensionless
    chi2          934.64373148;
    rms_K         0.94280357;
    nDataPoints   126;
    identifiable  true;
    maxAbsCorr    0.98624028;

    validity
    {
        temperature { min 307.18 K; max 352.94 K; }
        pressure    { min 30000 Pa; max 101300 Pa; }
        note        "the span of the FIT evidence; outside it the pair is an extrapolation";
    }
}

validation
{
    verdict     validationRefused;

    heldOut     none;   // every declared dataset carried \`role fit\`

    acceptance  none;   // no band was declared before the fit, so no
                        // pass/fail may be read out of the residual above
}

curation
{
    rule            "DEV.md 4c C283 (amended) + C284, graded by C285 (C286)";
    evidence        allLaboratories;   // every study fitted, none held out
    objective       twoStage;
    outlierLimit    3 K;   // |T_model - T| after the least-squares stage
    outliersDropped 10;
    pointsKept      126;
    noBubblePoint   0;
    maxAbsError     2.3372 K;
    meanAbsError    0.7175 K;
    acceptance      graded;   // max |T_model - T| over the kept points, DEV.md 4c C285 (C286)
    gradeLimits_K   (1 2 4);   // upper limits of clean / warning / severe; above, refused
    grade           severe;
    oneLiquid       true;   // arm (f) over the validity span; a pair that splits ONE liquid is never promoted, whatever its grade
    verdict         accepted;
}
`,wn=`/*---------------------------------------------------------------------------*\\
  NRTL binary interaction parameters --- diisopropylEther(i) + nButanol(j)

  REGRESSED BY CHOUPO'S CURATION PIPELINE (bin/choupo-curate, DEV.md 4c C282;
  record docs/design/binary-pairs-from-open-measurements.md) to measured
  bubble PRESSURES at stated temperatures (P-x, DEV.md 4c C291).  The articles named under \`evidence\` are the
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
  its fitting pipeline (every laboratory fitted to the bubble pressure, outliers beyond
  20 % discarded by name, max |P_model - P|/P over the kept points GRADED
  clean / warning / severe at 5 / 10 / 20 % -- DEV.md 4c C283 amended, C285, C291;
  THIS fit: clean, 0.7759 %; one liquid across its validity span), and NO
  HUMAN HAS REVIEWED IT.  The engine says so on every run that reads it, and
  voices a warning or a severe grade beside it.
  CAUTION: this record rests on ONE temperature and ONE laboratory.
  Nothing was held out: the \`validation {}\` block says so, and the acceptance
  is the \`curation {}\` block.  A curator who reads the series back against the
  articles marks it \`reviewStatus reviewed; humanReviewed true;\`.  Revert with
  \`bin/choupo-curate revert diisopropylEther-nButanol\`.

  REPRODUCE: run tutorials/props/curation/curate517_nrtl_diisopropylEther_nButanol (after \`bin/choupo-curate fetch\` on it); its fit
  writes diisopropylEther-nButanol.proposal.dat, which bin/curate/check_regressed_pairs.py holds
  equal to this record.
\\*---------------------------------------------------------------------------*/

recordType binaryInteractionParameters;
schemaVersion 1;

pair { i diisopropylEther; j nButanol; }

components  ( diisopropylEther  nButanol );
model       NRTL;

parameters
{
    i           diisopropylEther;
    j           nButanol;
    a_ij        0.00000000;
    b_ij        316.14498244;
    a_ji        0.00000000;
    b_ji        23.75812190;
    alpha       0.30000000;
}

provenance
{
    origin        fitted;
    method        "fitParameters(P_bubble), Levenberg-Marquardt";
    methodVersion "choupoProps Choupo-dev";
    fittedInCase  "tutorials/props/curation/curate517_nrtl_diisopropylEther_nButanol";
    reviewStatus  autoPromoted;
    humanReviewed false;
    fitGrade      clean;   // DEV.md 4c C285 (C291): max |P_model - P|/P over the kept points, graded 5 / 10 / 20 %
    fitGradeMaxRelativeError_pct 0.7759;
    promotedBy    "bin/curate/pairs_px.py promote";
    promotedDate  "2026-11-10";
    reviewReason  "regressed by bin/choupo-curate from archive-transcribed measurements; not yet read back against the articles";
    reuse         "Choupo's own regression; the measured points belong to the cited articles and are not reproduced in this record or this tree";
    fitDate       "2026-11-10";

    evidence
    (
        {
            role      fit;
            dataset   "constant/archiveExtracts/diisopropylEther-nButanol-bubbleP-j.jct.2005.07.004-b3.dat";
            doi       "10.1016/j.jct.2005.07.004";
            sha256    "2a1993b096a24879ffe37939a4b0df227a87217f5ee55caf7b37f1f753b56527";
            provenance measured;
            archiveFile "j.jct.2005.07.004.xml";
            system    "diisopropylEther + nButanol";
        }
    );
    fingerprint "05f85871b69220dd";   // of the declaration, frozen before the fit

    //  IN-SAMPLE: the model reproducing the very points it was
    //  fitted to.  It is NOT a validation; see the block below.
    weighting     equal;   // chi2 is sum ((P_model - P_exp)/P_exp)^2, dimensionless
    chi2          0.00088115;
    rms_rel       0.00582156;
    nDataPoints   26;
    identifiable  true;
    maxAbsCorr    0.98094062;

    validity
    {
        temperature { min 313.15 K; max 313.15 K; }
        pressure    { min 6973 Pa; max 35772 Pa; }
        note        "the span of the FIT evidence; outside it the pair is an extrapolation";
    }
}

validation
{
    verdict     validationRefused;

    heldOut     none;   // every declared dataset carried \`role fit\`

    acceptance  none;   // no band was declared before the fit, so no
                        // pass/fail may be read out of the residual above
}

curation
{
    rule            "DEV.md 4c C291 (bubble-pressure pairs; every laboratory, graded by C285)";
    evidence        allLaboratories;   // every block fitted, none held out
    objective       twoStage;
    residual        P_bubble;
    residualScale   relative;   // (P_model - P)/P at each point's stated T
    outlierLimit_pct 20;   // |P_model - P|/P after the least-squares stage
    outliersDropped 0;
    pointsKept      26;
    noBubblePoint   0;
    maxRelError_pct 0.7759;
    meanRelError_pct 0.5422;
    acceptance      graded;   // max relative pressure error over the kept points, DEV.md 4c C285 (C291)
    gradeLimits_pct (5 10 20);   // upper limits of clean / warning / severe; above, refused
    grade           clean;
    oneLiquid       true;   // arm (f) over the validity span; a pair that splits ONE liquid is never promoted
    temperatures    1;   // distinct stated temperatures in the evidence
    laboratories    1;   // distinct articles in the evidence
    singleTemperature true;   // true: b/T was fitted at ONE temperature
    singleLaboratory  true;   // true: ONE laboratory's data, nothing to cross-check it
    verdict         accepted;
}
`,Cn=`/*---------------------------------------------------------------------------*\\
  NRTL binary interaction parameters --- ethanol(i) + dimethylCarbonate(j)

  REGRESSED BY CHOUPO'S CURATION PIPELINE (bin/choupo-curate, DEV.md 4c C282;
  record docs/design/binary-pairs-from-open-measurements.md) to measured
  bubble temperatures.  The articles named under \`evidence\` are the
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
  its fitting pipeline (every laboratory fitted, outliers beyond 3 K
  discarded by name, max |T_model - T| over the kept points GRADED
  clean / warning / severe at 1 / 2 / 4 K -- DEV.md 4c C283
  amended, C285, C286; THIS fit: severe, 2.5998 K; one liquid
  across its validity span), and NO HUMAN HAS REVIEWED IT.  The
  engine says so on every run that reads it, and voices a warning
  or a severe grade beside it.
  Nothing was held out: the \`validation {}\` block says so, and the
  acceptance is the \`curation {}\` block.  A curator who reads the series
  back against the articles marks it \`reviewStatus reviewed; humanReviewed
  true;\`.  Revert with \`bin/choupo-curate revert dimethylCarbonate-ethanol\`.

  REPRODUCE: run tutorials/props/curation/curate102_nrtl_ethanol_dimethylCarbonate (after \`bin/choupo-curate fetch\` on it); its fit
  writes dimethylCarbonate-ethanol.proposal.dat, which bin/curate/check_regressed_pairs.py holds
  equal to this record.
\\*---------------------------------------------------------------------------*/

recordType binaryInteractionParameters;
schemaVersion 1;

pair { i ethanol; j dimethylCarbonate; }

components  ( ethanol  dimethylCarbonate );
model       NRTL;

parameters
{
    i           ethanol;
    j           dimethylCarbonate;
    a_ij        0.00000000;
    b_ij        507.92051422;
    a_ji        0.00000000;
    b_ji        12.13928892;
    alpha       0.30000000;
}

provenance
{
    origin        fitted;
    method        "fitParameters(T_bubble), Levenberg-Marquardt";
    methodVersion "choupoProps Choupo-dev";
    fittedInCase  "tutorials/props/curation/curate102_nrtl_ethanol_dimethylCarbonate";
    reviewStatus  autoPromoted;
    humanReviewed false;
    fitGrade      severe;   // DEV.md 4c C285 (C286): max |T_model - T| over the kept points, graded 1 / 2 / 4 K
    fitGradeMaxTemperatureError_K 2.5998;
    promotedBy    "bin/choupo-curate pair --promote";
    promotedDate  "2026-11-10";
    reviewReason  "regressed by bin/choupo-curate from archive-transcribed measurements; not yet read back against the articles";
    reuse         "Choupo's own regression; the measured points belong to the cited articles and are not reproduced in this record or this tree";
    fitDate       "2026-11-10";

    evidence
    (
        {
            role      fit;
            dataset   "constant/archiveExtracts/ethanol-dimethylCarbonate-bubble-je0601309.dat";
            doi       "10.1021/je0601309";
            sha256    "6ddd13da5f82956b17e5ae2526f704058dfcbf03b90e50716fb5a7cf3d47836d";
            provenance measured;
            archiveFile "je0601309.xml";
            system    "ethanol + dimethylCarbonate";
        }
        {
            role      fit;
            dataset   "constant/archiveExtracts/ethanol-dimethylCarbonate-bubble-acs.jced.9b00414.dat";
            doi       "10.1021/acs.jced.9b00414";
            sha256    "08859773e230d7e51409d5d329c037ea6ec178042d4602aca05aa5470b4ea6d5";
            provenance measured;
            archiveFile "acs.jced.9b00414.xml";
            system    "ethanol + dimethylCarbonate";
            pressure  "101300.000000 Pa";
        }
        {
            role      fit;
            dataset   "constant/archiveExtracts/ethanol-dimethylCarbonate-bubble-j.fluid.2018.05.024.dat";
            doi       "10.1016/j.fluid.2018.05.024";
            sha256    "16d4428bfd82ab793c8e229158e9d3e9effbd6d8616d5dd8a40105149b2fe254";
            provenance measured;
            archiveFile "j.fluid.2018.05.024.xml";
            system    "ethanol + dimethylCarbonate";
            pressure  "101300.000000 Pa";
        }
        {
            role      fit;
            dataset   "constant/archiveExtracts/ethanol-dimethylCarbonate-bubble-je030131q.dat";
            doi       "10.1021/je030131q";
            sha256    "b41bca23136ec66aba1b6984f5c0f44a5fca02ba9d89bed1e374a726fb032c08";
            provenance measured;
            archiveFile "je030131q.xml";
            system    "ethanol + dimethylCarbonate";
            pressure  "95800.000000 Pa";
        }
    );
    fingerprint "fdea915719c7b2a4";   // of the declaration, frozen before the fit

    //  IN-SAMPLE: the model reproducing the very points it was
    //  fitted to.  It is NOT a validation; see the block below.
    weighting     uncertainty;   // chi2 is sum ((T_model - T_exp)/U)^2, dimensionless
    chi2          1196.93830259;
    rms_K         0.71198309;
    nDataPoints   143;
    identifiable  true;
    maxAbsCorr    0.98202451;

    validity
    {
        temperature { min 324.96 K; max 362.31 K; }
        pressure    { min 40000 Pa; max 101300 Pa; }
        note        "the span of the FIT evidence; outside it the pair is an extrapolation";
    }
}

validation
{
    verdict     validationRefused;

    heldOut     none;   // every declared dataset carried \`role fit\`

    acceptance  none;   // no band was declared before the fit, so no
                        // pass/fail may be read out of the residual above
}

curation
{
    rule            "DEV.md 4c C283 (amended) + C284, graded by C285 (C286)";
    evidence        allLaboratories;   // every study fitted, none held out
    objective       twoStage;
    outlierLimit    3 K;   // |T_model - T| after the least-squares stage
    outliersDropped 0;
    pointsKept      143;
    noBubblePoint   0;
    maxAbsError     2.5998 K;
    meanAbsError    0.5444 K;
    acceptance      graded;   // max |T_model - T| over the kept points, DEV.md 4c C285 (C286)
    gradeLimits_K   (1 2 4);   // upper limits of clean / warning / severe; above, refused
    grade           severe;
    oneLiquid       true;   // arm (f) over the validity span; a pair that splits ONE liquid is never promoted, whatever its grade
    verdict         accepted;
}
`,jn=`/*---------------------------------------------------------------------------*\\
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
`,Dn=`/*---------------------------------------------------------------------------*\\
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
`,In=`/*---------------------------------------------------------------------------*\\
  NRTL binary interaction parameters --- nButanol(i) + dimethylCarbonate(j)

  REGRESSED BY CHOUPO'S CURATION PIPELINE (bin/choupo-curate, DEV.md 4c C282;
  record docs/design/binary-pairs-from-open-measurements.md) to measured
  bubble temperatures.  The articles named under \`evidence\` are the
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
  its fitting pipeline (every laboratory fitted, outliers beyond 3 K
  discarded by name, max |T_model - T| over the kept points GRADED
  clean / warning / severe at 1 / 2 / 4 K -- DEV.md 4c C283
  amended, C285, C286; THIS fit: severe, 2.1507 K; one liquid
  across its validity span), and NO HUMAN HAS REVIEWED IT.  The
  engine says so on every run that reads it, and voices a warning
  or a severe grade beside it.
  Nothing was held out: the \`validation {}\` block says so, and the
  acceptance is the \`curation {}\` block.  A curator who reads the series
  back against the articles marks it \`reviewStatus reviewed; humanReviewed
  true;\`.  Revert with \`bin/choupo-curate revert dimethylCarbonate-nButanol\`.

  REPRODUCE: run tutorials/props/curation/curate126_nrtl_nButanol_dimethylCarbonate (after \`bin/choupo-curate fetch\` on it); its fit
  writes dimethylCarbonate-nButanol.proposal.dat, which bin/curate/check_regressed_pairs.py holds
  equal to this record.
\\*---------------------------------------------------------------------------*/

recordType binaryInteractionParameters;
schemaVersion 1;

pair { i nButanol; j dimethylCarbonate; }

components  ( nButanol  dimethylCarbonate );
model       NRTL;

parameters
{
    i           nButanol;
    j           dimethylCarbonate;
    a_ij        0.00000000;
    b_ij        75.86106483;
    a_ji        0.00000000;
    b_ji        309.06998957;
    alpha       0.30000000;
}

provenance
{
    origin        fitted;
    method        "fitParameters(T_bubble), Levenberg-Marquardt";
    methodVersion "choupoProps Choupo-dev";
    fittedInCase  "tutorials/props/curation/curate126_nrtl_nButanol_dimethylCarbonate";
    reviewStatus  autoPromoted;
    humanReviewed false;
    fitGrade      severe;   // DEV.md 4c C285 (C286): max |T_model - T| over the kept points, graded 1 / 2 / 4 K
    fitGradeMaxTemperatureError_K 2.1507;
    promotedBy    "bin/choupo-curate pair --promote";
    promotedDate  "2026-11-10";
    reviewReason  "regressed by bin/choupo-curate from archive-transcribed measurements; not yet read back against the articles";
    reuse         "Choupo's own regression; the measured points belong to the cited articles and are not reproduced in this record or this tree";
    fitDate       "2026-11-10";

    evidence
    (
        {
            role      fit;
            dataset   "constant/archiveExtracts/nButanol-dimethylCarbonate-bubble-j.jct.2011.08.006.dat";
            doi       "10.1016/j.jct.2011.08.006";
            sha256    "682a55d05fe8902bbf42f1d947981fa35b0d90029fa727758bcfb6519f239cc6";
            provenance measured;
            archiveFile "j.jct.2011.08.006.xml";
            system    "nButanol + dimethylCarbonate";
        }
        {
            role      fit;
            dataset   "constant/archiveExtracts/nButanol-dimethylCarbonate-bubble-je030131q.dat";
            doi       "10.1021/je030131q";
            sha256    "b41bca23136ec66aba1b6984f5c0f44a5fca02ba9d89bed1e374a726fb032c08";
            provenance measured;
            archiveFile "je030131q.xml";
            system    "nButanol + dimethylCarbonate";
            pressure  "95800.000000 Pa";
        }
    );
    fingerprint "94abe7c6e0655885";   // of the declaration, frozen before the fit

    //  IN-SAMPLE: the model reproducing the very points it was
    //  fitted to.  It is NOT a validation; see the block below.
    weighting     uncertainty;   // chi2 is sum ((T_model - T_exp)/U)^2, dimensionless
    chi2          405.01095110;
    rms_K         0.52824463;
    nDataPoints   52;
    identifiable  true;
    maxAbsCorr    0.98979490;

    validity
    {
        temperature { min 337.45 K; max 378.75 K; }
        pressure    { min 40000 Pa; max 95800 Pa; }
        note        "the span of the FIT evidence; outside it the pair is an extrapolation";
    }
}

validation
{
    verdict     validationRefused;

    heldOut     none;   // every declared dataset carried \`role fit\`

    acceptance  none;   // no band was declared before the fit, so no
                        // pass/fail may be read out of the residual above
}

curation
{
    rule            "DEV.md 4c C283 (amended) + C284, graded by C285 (C286)";
    evidence        allLaboratories;   // every study fitted, none held out
    objective       twoStage;
    outlierLimit    3 K;   // |T_model - T| after the least-squares stage
    outliersDropped 2;
    pointsKept      52;
    noBubblePoint   0;
    maxAbsError     2.1507 K;
    meanAbsError    0.3732 K;
    acceptance      graded;   // max |T_model - T| over the kept points, DEV.md 4c C285 (C286)
    gradeLimits_K   (1 2 4);   // upper limits of clean / warning / severe; above, refused
    grade           severe;
    oneLiquid       true;   // arm (f) over the validity span; a pair that splits ONE liquid is never promoted, whatever its grade
    verdict         accepted;
}
`,Nn=`/*---------------------------------------------------------------------------*\\
  NRTL binary interaction parameters --- dimethylCarbonate(i) + pXylene(j)

  REGRESSED BY CHOUPO'S CURATION PIPELINE (bin/choupo-curate, DEV.md 4c C282;
  record docs/design/binary-pairs-from-open-measurements.md) to measured
  bubble temperatures.  The articles named under \`evidence\` are the
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
  its fitting pipeline (every laboratory fitted, outliers beyond 3 K
  discarded by name, max |T_model - T| over the kept points GRADED
  clean / warning / severe at 1 / 2 / 4 K -- DEV.md 4c C283
  amended, C285, C286; THIS fit: severe, 3.0930 K; one liquid
  across its validity span), and NO HUMAN HAS REVIEWED IT.  The
  engine says so on every run that reads it, and voices a warning
  or a severe grade beside it.
  Nothing was held out: the \`validation {}\` block says so, and the
  acceptance is the \`curation {}\` block.  A curator who reads the series
  back against the articles marks it \`reviewStatus reviewed; humanReviewed
  true;\`.  Revert with \`bin/choupo-curate revert dimethylCarbonate-pXylene\`.

  REPRODUCE: run tutorials/props/curation/curate155_nrtl_dimethylCarbonate_pXylene (after \`bin/choupo-curate fetch\` on it); its fit
  writes dimethylCarbonate-pXylene.proposal.dat, which bin/curate/check_regressed_pairs.py holds
  equal to this record.
\\*---------------------------------------------------------------------------*/

recordType binaryInteractionParameters;
schemaVersion 1;

pair { i dimethylCarbonate; j pXylene; }

components  ( dimethylCarbonate  pXylene );
model       NRTL;

parameters
{
    i           dimethylCarbonate;
    j           pXylene;
    a_ij        0.00000000;
    b_ij        666.12735413;
    a_ji        0.00000000;
    b_ji        -266.77171452;
    alpha       0.30000000;
}

provenance
{
    origin        fitted;
    method        "fitParameters(T_bubble), Levenberg-Marquardt";
    methodVersion "choupoProps Choupo-dev";
    fittedInCase  "tutorials/props/curation/curate155_nrtl_dimethylCarbonate_pXylene";
    reviewStatus  autoPromoted;
    humanReviewed false;
    fitGrade      severe;   // DEV.md 4c C285 (C286): max |T_model - T| over the kept points, graded 1 / 2 / 4 K
    fitGradeMaxTemperatureError_K 3.0930;
    promotedBy    "bin/choupo-curate pair --promote";
    promotedDate  "2026-11-10";
    reviewReason  "regressed by bin/choupo-curate from archive-transcribed measurements; not yet read back against the articles";
    reuse         "Choupo's own regression; the measured points belong to the cited articles and are not reproduced in this record or this tree";
    fitDate       "2026-11-10";

    evidence
    (
        {
            role      fit;
            dataset   "constant/archiveExtracts/dimethylCarbonate-pXylene-bubble-j.jct.2019.01.027.dat";
            doi       "10.1016/j.jct.2019.01.027";
            sha256    "b483671263a2fbe218a2721e05d40244c97b9d191d1fcbd6def03d55233c3bc7";
            provenance measured;
            archiveFile "j.jct.2019.01.027.xml";
            system    "dimethylCarbonate + pXylene";
            pressure  "101300.000000 Pa";
        }
        {
            role      fit;
            dataset   "constant/archiveExtracts/dimethylCarbonate-pXylene-bubble-acs.jced.7b00372.dat";
            doi       "10.1021/acs.jced.7b00372";
            sha256    "d7db373526dce14490ebc7cd7c42f771c4b2aae1013b5b3e8a930cd4d5a5a0a5";
            provenance measured;
            archiveFile "acs.jced.7b00372.xml";
            system    "dimethylCarbonate + pXylene";
            pressure  "93130.000000 Pa";
        }
    );
    fingerprint "e12b8d008fe40f7a";   // of the declaration, frozen before the fit

    //  IN-SAMPLE: the model reproducing the very points it was
    //  fitted to.  It is NOT a validation; see the block below.
    weighting     uncertainty;   // chi2 is sum ((T_model - T_exp)/U)^2, dimensionless
    chi2          453.07720966;
    rms_K         1.76153367;
    nDataPoints   19;
    identifiable  true;
    maxAbsCorr    0.97654701;

    validity
    {
        temperature { min 361.49 K; max 407.95 K; }
        pressure    { min 93130 Pa; max 101300 Pa; }
        note        "the span of the FIT evidence; outside it the pair is an extrapolation";
    }
}

validation
{
    verdict     validationRefused;

    heldOut     none;   // every declared dataset carried \`role fit\`

    acceptance  none;   // no band was declared before the fit, so no
                        // pass/fail may be read out of the residual above
}

curation
{
    rule            "DEV.md 4c C283 (amended) + C284, graded by C285 (C286)";
    evidence        allLaboratories;   // every study fitted, none held out
    objective       twoStage;
    outlierLimit    3 K;   // |T_model - T| after the least-squares stage
    outliersDropped 6;
    pointsKept      19;
    noBubblePoint   0;
    maxAbsError     3.0930 K;
    meanAbsError    1.4972 K;
    acceptance      graded;   // max |T_model - T| over the kept points, DEV.md 4c C285 (C286)
    gradeLimits_K   (1 2 4);   // upper limits of clean / warning / severe; above, refused
    grade           severe;
    oneLiquid       true;   // arm (f) over the validity span; a pair that splits ONE liquid is never promoted, whatever its grade
    verdict         accepted;
}
`,On=`/*---------------------------------------------------------------------------*\\
  NRTL binary interaction parameters --- dimethylDisulfide(i) + tertButylEthylEther(j)

  REGRESSED BY CHOUPO'S CURATION PIPELINE (bin/choupo-curate, DEV.md 4c C282;
  record docs/design/binary-pairs-from-open-measurements.md) to measured
  bubble PRESSURES at stated temperatures (P-x, DEV.md 4c C291).  The articles named under \`evidence\` are the
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
  its fitting pipeline (every laboratory fitted to the bubble pressure, outliers beyond
  20 % discarded by name, max |P_model - P|/P over the kept points GRADED
  clean / warning / severe at 5 / 10 / 20 % -- DEV.md 4c C283 amended, C285, C291;
  THIS fit: clean, 0.4439 %; one liquid across its validity span), and NO
  HUMAN HAS REVIEWED IT.  The engine says so on every run that reads it, and
  voices a warning or a severe grade beside it.
  CAUTION: this record rests on ONE temperature and ONE laboratory.
  Nothing was held out: the \`validation {}\` block says so, and the acceptance
  is the \`curation {}\` block.  A curator who reads the series back against the
  articles marks it \`reviewStatus reviewed; humanReviewed true;\`.  Revert with
  \`bin/choupo-curate revert dimethylDisulfide-tertButylEthylEther\`.

  REPRODUCE: run tutorials/props/curation/curate565_nrtl_dimethylDisulfide_tertButylEthylEther (after \`bin/choupo-curate fetch\` on it); its fit
  writes dimethylDisulfide-tertButylEthylEther.proposal.dat, which bin/curate/check_regressed_pairs.py holds
  equal to this record.
\\*---------------------------------------------------------------------------*/

recordType binaryInteractionParameters;
schemaVersion 1;

pair { i dimethylDisulfide; j tertButylEthylEther; }

components  ( dimethylDisulfide  tertButylEthylEther );
model       NRTL;

parameters
{
    i           dimethylDisulfide;
    j           tertButylEthylEther;
    a_ij        0.00000000;
    b_ij        209.89062727;
    a_ji        0.00000000;
    b_ji        -36.79330449;
    alpha       0.30000000;
}

provenance
{
    origin        fitted;
    method        "fitParameters(P_bubble), Levenberg-Marquardt";
    methodVersion "choupoProps Choupo-dev";
    fittedInCase  "tutorials/props/curation/curate565_nrtl_dimethylDisulfide_tertButylEthylEther";
    reviewStatus  autoPromoted;
    humanReviewed false;
    fitGrade      clean;   // DEV.md 4c C285 (C291): max |P_model - P|/P over the kept points, graded 5 / 10 / 20 %
    fitGradeMaxRelativeError_pct 0.4439;
    promotedBy    "bin/curate/pairs_px.py promote";
    promotedDate  "2026-11-10";
    reviewReason  "regressed by bin/choupo-curate from archive-transcribed measurements; not yet read back against the articles";
    reuse         "Choupo's own regression; the measured points belong to the cited articles and are not reproduced in this record or this tree";
    fitDate       "2026-11-10";

    evidence
    (
        {
            role      fit;
            dataset   "constant/archiveExtracts/dimethylDisulfide-tertButylEthylEther-bubbleP-je200039y-b17.dat";
            doi       "10.1021/je200039y";
            sha256    "d53ef5347311d14b7e319ad0c343bd39a3e9eba3bc73ef931739278ba89120e8";
            provenance measured;
            archiveFile "je200039y.xml";
            system    "dimethylDisulfide + tertButylEthylEther";
        }
    );
    fingerprint "2b612179215e857c";   // of the declaration, frozen before the fit

    //  IN-SAMPLE: the model reproducing the very points it was
    //  fitted to.  It is NOT a validation; see the block below.
    weighting     equal;   // chi2 is sum ((P_model - P_exp)/P_exp)^2, dimensionless
    chi2          0.00012639;
    rms_rel       0.00355519;
    nDataPoints   10;
    identifiable  true;
    maxAbsCorr    0.99659370;

    validity
    {
        temperature { min 343.15 K; max 343.15 K; }
        pressure    { min 31000 Pa; max 88200 Pa; }
        note        "the span of the FIT evidence; outside it the pair is an extrapolation";
    }
}

validation
{
    verdict     validationRefused;

    heldOut     none;   // every declared dataset carried \`role fit\`

    acceptance  none;   // no band was declared before the fit, so no
                        // pass/fail may be read out of the residual above
}

curation
{
    rule            "DEV.md 4c C291 (bubble-pressure pairs; every laboratory, graded by C285)";
    evidence        allLaboratories;   // every block fitted, none held out
    objective       twoStage;
    residual        P_bubble;
    residualScale   relative;   // (P_model - P)/P at each point's stated T
    outlierLimit_pct 20;   // |P_model - P|/P after the least-squares stage
    outliersDropped 0;
    pointsKept      10;
    noBubblePoint   0;
    maxRelError_pct 0.4439;
    meanRelError_pct 0.3298;
    acceptance      graded;   // max relative pressure error over the kept points, DEV.md 4c C285 (C291)
    gradeLimits_pct (5 10 20);   // upper limits of clean / warning / severe; above, refused
    grade           clean;
    oneLiquid       true;   // arm (f) over the validity span; a pair that splits ONE liquid is never promoted
    temperatures    1;   // distinct stated temperatures in the evidence
    laboratories    1;   // distinct articles in the evidence
    singleTemperature true;   // true: b/T was fitted at ONE temperature
    singleLaboratory  true;   // true: ONE laboratory's data, nothing to cross-check it
    verdict         accepted;
}
`,Sn=`/*---------------------------------------------------------------------------*\\
  NRTL binary interaction parameters --- dimethylDisulfide(i) + toluene(j)

  REGRESSED BY CHOUPO'S CURATION PIPELINE (bin/choupo-curate, DEV.md 4c C282;
  record docs/design/binary-pairs-from-open-measurements.md) to measured
  bubble PRESSURES at stated temperatures (P-x, DEV.md 4c C291).  The articles named under \`evidence\` are the
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
  its fitting pipeline (every laboratory fitted to the bubble pressure, outliers beyond
  20 % discarded by name, max |P_model - P|/P over the kept points GRADED
  clean / warning / severe at 5 / 10 / 20 % -- DEV.md 4c C283 amended, C285, C291;
  THIS fit: clean, 0.4339 %; one liquid across its validity span), and NO
  HUMAN HAS REVIEWED IT.  The engine says so on every run that reads it, and
  voices a warning or a severe grade beside it.
  CAUTION: this record rests on ONE temperature and ONE laboratory.
  Nothing was held out: the \`validation {}\` block says so, and the acceptance
  is the \`curation {}\` block.  A curator who reads the series back against the
  articles marks it \`reviewStatus reviewed; humanReviewed true;\`.  Revert with
  \`bin/choupo-curate revert dimethylDisulfide-toluene\`.

  REPRODUCE: run tutorials/props/curation/curate561_nrtl_dimethylDisulfide_toluene (after \`bin/choupo-curate fetch\` on it); its fit
  writes dimethylDisulfide-toluene.proposal.dat, which bin/curate/check_regressed_pairs.py holds
  equal to this record.
\\*---------------------------------------------------------------------------*/

recordType binaryInteractionParameters;
schemaVersion 1;

pair { i dimethylDisulfide; j toluene; }

components  ( dimethylDisulfide  toluene );
model       NRTL;

parameters
{
    i           dimethylDisulfide;
    j           toluene;
    a_ij        0.00000000;
    b_ij        252.15282859;
    a_ji        0.00000000;
    b_ji        -166.12012345;
    alpha       0.30000000;
}

provenance
{
    origin        fitted;
    method        "fitParameters(P_bubble), Levenberg-Marquardt";
    methodVersion "choupoProps Choupo-dev";
    fittedInCase  "tutorials/props/curation/curate561_nrtl_dimethylDisulfide_toluene";
    reviewStatus  autoPromoted;
    humanReviewed false;
    fitGrade      clean;   // DEV.md 4c C285 (C291): max |P_model - P|/P over the kept points, graded 5 / 10 / 20 %
    fitGradeMaxRelativeError_pct 0.4339;
    promotedBy    "bin/curate/pairs_px.py promote";
    promotedDate  "2026-11-10";
    reviewReason  "regressed by bin/choupo-curate from archive-transcribed measurements; not yet read back against the articles";
    reuse         "Choupo's own regression; the measured points belong to the cited articles and are not reproduced in this record or this tree";
    fitDate       "2026-11-10";

    evidence
    (
        {
            role      fit;
            dataset   "constant/archiveExtracts/dimethylDisulfide-toluene-bubbleP-j.fluid.2010.02.043-b2.dat";
            doi       "10.1016/j.fluid.2010.02.043";
            sha256    "5be56e39820f0cc4910d3dcbfcdb5e4a54f65227a1dbd768d2229cc9a5768918";
            provenance measured;
            archiveFile "j.fluid.2010.02.043.xml";
            system    "dimethylDisulfide + toluene";
        }
    );
    fingerprint "50d36772b5822165";   // of the declaration, frozen before the fit

    //  IN-SAMPLE: the model reproducing the very points it was
    //  fitted to.  It is NOT a validation; see the block below.
    weighting     equal;   // chi2 is sum ((P_model - P_exp)/P_exp)^2, dimensionless
    chi2          0.00012113;
    rms_rel       0.00317712;
    nDataPoints   12;
    identifiable  false;
    maxAbsCorr    0.99939481;

    validity
    {
        temperature { min 368.15 K; max 368.15 K; }
        pressure    { min 64600 Pa; max 66400 Pa; }
        note        "the span of the FIT evidence; outside it the pair is an extrapolation";
    }
}

validation
{
    verdict     validationRefused;

    heldOut     none;   // every declared dataset carried \`role fit\`

    acceptance  none;   // no band was declared before the fit, so no
                        // pass/fail may be read out of the residual above
}

curation
{
    rule            "DEV.md 4c C291 (bubble-pressure pairs; every laboratory, graded by C285)";
    evidence        allLaboratories;   // every block fitted, none held out
    objective       twoStage;
    residual        P_bubble;
    residualScale   relative;   // (P_model - P)/P at each point's stated T
    outlierLimit_pct 20;   // |P_model - P|/P after the least-squares stage
    outliersDropped 0;
    pointsKept      12;
    noBubblePoint   0;
    maxRelError_pct 0.4339;
    meanRelError_pct 0.2922;
    acceptance      graded;   // max relative pressure error over the kept points, DEV.md 4c C285 (C291)
    gradeLimits_pct (5 10 20);   // upper limits of clean / warning / severe; above, refused
    grade           clean;
    oneLiquid       true;   // arm (f) over the validity span; a pair that splits ONE liquid is never promoted
    temperatures    1;   // distinct stated temperatures in the evidence
    laboratories    1;   // distinct articles in the evidence
    singleTemperature true;   // true: b/T was fitted at ONE temperature
    singleLaboratory  true;   // true: ONE laboratory's data, nothing to cross-check it
    verdict         accepted;
}
`,xn=`/*---------------------------------------------------------------------------*\\
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
`,An=`/*---------------------------------------------------------------------------*\\
  NRTL binary interaction parameters --- ethanol(i) + ethyleneGlycol(j)

  REGRESSED BY CHOUPO'S CURATION PIPELINE (bin/choupo-curate, DEV.md 4c C282;
  record docs/design/binary-pairs-from-open-measurements.md) to measured
  bubble temperatures.  The articles named under \`evidence\` are the
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
  its fitting pipeline (every laboratory fitted, outliers beyond 3 K
  discarded by name, max |T_model - T| over the kept points GRADED
  clean / warning / severe at 1 / 2 / 4 K -- DEV.md 4c C283
  amended, C285, C286; THIS fit: warning, 1.4336 K; one liquid
  across its validity span), and NO HUMAN HAS REVIEWED IT.  The
  engine says so on every run that reads it, and voices a warning
  or a severe grade beside it.
  Nothing was held out: the \`validation {}\` block says so, and the
  acceptance is the \`curation {}\` block.  A curator who reads the series
  back against the articles marks it \`reviewStatus reviewed; humanReviewed
  true;\`.  Revert with \`bin/choupo-curate revert ethanol-ethyleneGlycol\`.

  REPRODUCE: run tutorials/props/curation/curate145_nrtl_ethanol_ethyleneGlycol (after \`bin/choupo-curate fetch\` on it); its fit
  writes ethanol-ethyleneGlycol.proposal.dat, which bin/curate/check_regressed_pairs.py holds
  equal to this record.
\\*---------------------------------------------------------------------------*/

recordType binaryInteractionParameters;
schemaVersion 1;

pair { i ethanol; j ethyleneGlycol; }

components  ( ethanol  ethyleneGlycol );
model       NRTL;

parameters
{
    i           ethanol;
    j           ethyleneGlycol;
    a_ij        0.00000000;
    b_ij        12.28232008;
    a_ji        0.00000000;
    b_ji        221.78021494;
    alpha       0.30000000;
}

provenance
{
    origin        fitted;
    method        "fitParameters(T_bubble), Levenberg-Marquardt";
    methodVersion "choupoProps Choupo-dev";
    fittedInCase  "tutorials/props/curation/curate145_nrtl_ethanol_ethyleneGlycol";
    reviewStatus  autoPromoted;
    humanReviewed false;
    fitGrade      warning;   // DEV.md 4c C285 (C286): max |T_model - T| over the kept points, graded 1 / 2 / 4 K
    fitGradeMaxTemperatureError_K 1.4336;
    promotedBy    "bin/choupo-curate pair --promote";
    promotedDate  "2026-11-10";
    reviewReason  "regressed by bin/choupo-curate from archive-transcribed measurements; not yet read back against the articles";
    reuse         "Choupo's own regression; the measured points belong to the cited articles and are not reproduced in this record or this tree";
    fitDate       "2026-11-10";

    evidence
    (
        {
            role      fit;
            dataset   "constant/archiveExtracts/ethanol-ethyleneGlycol-bubble-acs.jced.6b00384.dat";
            doi       "10.1021/acs.jced.6b00384";
            sha256    "013420b4ac9ade5e7aa11e3508fb6ebfaf8dad602cee350988986840b7736d26";
            provenance measured;
            archiveFile "acs.jced.6b00384.xml";
            system    "ethanol + ethyleneGlycol";
            pressure  "101000.000000 Pa";
        }
        {
            role      fit;
            dataset   "constant/archiveExtracts/ethanol-ethyleneGlycol-bubble-je2008704.dat";
            doi       "10.1021/je2008704";
            sha256    "f24eca1286fb3d1fc4611eaf05bc771813d0dc41e81cf37c0c49b3ea9b871758";
            provenance measured;
            archiveFile "je2008704.xml";
            system    "ethanol + ethyleneGlycol";
            pressure  "101300.000000 Pa";
        }
    );
    fingerprint "38a1765573116961";   // of the declaration, frozen before the fit

    //  IN-SAMPLE: the model reproducing the very points it was
    //  fitted to.  It is NOT a validation; see the block below.
    weighting     uncertainty;   // chi2 is sum ((T_model - T_exp)/U)^2, dimensionless
    chi2          4.35228034;
    rms_K         0.38304068;
    nDataPoints   34;
    identifiable  true;
    maxAbsCorr    0.99448066;

    validity
    {
        temperature { min 352.50 K; max 389.79 K; }
        pressure    { min 101000 Pa; max 101300 Pa; }
        note        "the span of the FIT evidence; outside it the pair is an extrapolation";
    }
}

validation
{
    verdict     validationRefused;

    heldOut     none;   // every declared dataset carried \`role fit\`

    acceptance  none;   // no band was declared before the fit, so no
                        // pass/fail may be read out of the residual above
}

curation
{
    rule            "DEV.md 4c C283 (amended) + C284, graded by C285 (C286)";
    evidence        allLaboratories;   // every study fitted, none held out
    objective       twoStage;
    outlierLimit    3 K;   // |T_model - T| after the least-squares stage
    outliersDropped 0;
    pointsKept      34;
    noBubblePoint   0;
    maxAbsError     1.4336 K;
    meanAbsError    0.2566 K;
    acceptance      graded;   // max |T_model - T| over the kept points, DEV.md 4c C285 (C286)
    gradeLimits_K   (1 2 4);   // upper limits of clean / warning / severe; above, refused
    grade           warning;
    oneLiquid       true;   // arm (f) over the validity span; a pair that splits ONE liquid is never promoted, whatever its grade
    verdict         accepted;
}
`,Ln=`/*---------------------------------------------------------------------------*\\
  NRTL binary interaction parameters --- ethanol(i) + methylEthylKetone(j)

  REGRESSED BY CHOUPO'S CURATION PIPELINE (bin/choupo-curate, DEV.md 4c C282;
  record docs/design/binary-pairs-from-open-measurements.md) to measured
  bubble temperatures.  The articles named under \`evidence\` are the
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
  its fitting pipeline (every laboratory fitted, outliers beyond 3 K
  discarded by name, max |T_model - T| over the kept points GRADED
  clean / warning / severe at 1 / 2 / 4 K -- DEV.md 4c C283
  amended, C285, C286; THIS fit: clean, 0.1546 K; one liquid
  across its validity span), and NO HUMAN HAS REVIEWED IT.  The
  engine says so on every run that reads it, and voices a warning
  or a severe grade beside it.
  Nothing was held out: the \`validation {}\` block says so, and the
  acceptance is the \`curation {}\` block.  A curator who reads the series
  back against the articles marks it \`reviewStatus reviewed; humanReviewed
  true;\`.  Revert with \`bin/choupo-curate revert ethanol-methylEthylKetone\`.

  REPRODUCE: run tutorials/props/curation/curate112_nrtl_ethanol_methylEthylKetone (after \`bin/choupo-curate fetch\` on it); its fit
  writes ethanol-methylEthylKetone.proposal.dat, which bin/curate/check_regressed_pairs.py holds
  equal to this record.
\\*---------------------------------------------------------------------------*/

recordType binaryInteractionParameters;
schemaVersion 1;

pair { i ethanol; j methylEthylKetone; }

components  ( ethanol  methylEthylKetone );
model       NRTL;

parameters
{
    i           ethanol;
    j           methylEthylKetone;
    a_ij        0.00000000;
    b_ij        159.61199755;
    a_ji        0.00000000;
    b_ji        82.47025313;
    alpha       0.30000000;
}

provenance
{
    origin        fitted;
    method        "fitParameters(T_bubble), Levenberg-Marquardt";
    methodVersion "choupoProps Choupo-dev";
    fittedInCase  "tutorials/props/curation/curate112_nrtl_ethanol_methylEthylKetone";
    reviewStatus  autoPromoted;
    humanReviewed false;
    fitGrade      clean;   // DEV.md 4c C285 (C286): max |T_model - T| over the kept points, graded 1 / 2 / 4 K
    fitGradeMaxTemperatureError_K 0.1546;
    promotedBy    "bin/choupo-curate pair --promote";
    promotedDate  "2026-11-10";
    reviewReason  "regressed by bin/choupo-curate from archive-transcribed measurements; not yet read back against the articles";
    reuse         "Choupo's own regression; the measured points belong to the cited articles and are not reproduced in this record or this tree";
    fitDate       "2026-11-10";

    evidence
    (
        {
            role      fit;
            dataset   "constant/archiveExtracts/ethanol-methylEthylKetone-bubble-j.fluid.2007.06.005.dat";
            doi       "10.1016/j.fluid.2007.06.005";
            sha256    "cc1f8832b57e5d44a79b79cda3c9425b77c19b96e2e6f4f9996363ea7de6f6fa";
            provenance measured;
            archiveFile "j.fluid.2007.06.005.xml";
            system    "ethanol + methylEthylKetone";
            pressure  "101300.000000 Pa";
        }
        {
            role      fit;
            dataset   "constant/archiveExtracts/ethanol-methylEthylKetone-bubble-j.fluid.2017.10.001.dat";
            doi       "10.1016/j.fluid.2017.10.001";
            sha256    "15a710a02ece8eeef43695f6a8e25a46514a741c0de795fc37172f2a0f9a104a";
            provenance measured;
            archiveFile "j.fluid.2017.10.001.xml";
            system    "ethanol + methylEthylKetone";
            pressure  "101300.000000 Pa";
        }
        {
            role      fit;
            dataset   "constant/archiveExtracts/ethanol-methylEthylKetone-bubble-acs.jced.7b00783.dat";
            doi       "10.1021/acs.jced.7b00783";
            sha256    "1788a3c6b6c6fe91233f67f68ec347cd7b141656cdb42879eb33133dc7b70ebc";
            provenance measured;
            archiveFile "acs.jced.7b00783.xml";
            system    "ethanol + methylEthylKetone";
            pressure  "101300.000000 Pa";
        }
    );
    fingerprint "9ddb9620522830a9";   // of the declaration, frozen before the fit

    //  IN-SAMPLE: the model reproducing the very points it was
    //  fitted to.  It is NOT a validation; see the block below.
    weighting     uncertainty;   // chi2 is sum ((T_model - T_exp)/U)^2, dimensionless
    chi2          20.61445301;
    rms_K         0.06867826;
    nDataPoints   53;
    identifiable  true;
    maxAbsCorr    0.99652937;

    validity
    {
        temperature { min 347.48 K; max 351.89 K; }
        pressure    { min 101300 Pa; max 101300 Pa; }
        note        "the span of the FIT evidence; outside it the pair is an extrapolation";
    }
}

validation
{
    verdict     validationRefused;

    heldOut     none;   // every declared dataset carried \`role fit\`

    acceptance  none;   // no band was declared before the fit, so no
                        // pass/fail may be read out of the residual above
}

curation
{
    rule            "DEV.md 4c C283 (amended) + C284, graded by C285 (C286)";
    evidence        allLaboratories;   // every study fitted, none held out
    objective       twoStage;
    outlierLimit    3 K;   // |T_model - T| after the least-squares stage
    outliersDropped 0;
    pointsKept      53;
    noBubblePoint   0;
    maxAbsError     0.1546 K;
    meanAbsError    0.0558 K;
    acceptance      graded;   // max |T_model - T| over the kept points, DEV.md 4c C285 (C286)
    gradeLimits_K   (1 2 4);   // upper limits of clean / warning / severe; above, refused
    grade           clean;
    oneLiquid       true;   // arm (f) over the validity span; a pair that splits ONE liquid is never promoted, whatever its grade
    verdict         accepted;
}
`,kn=`/*---------------------------------------------------------------------------*\\
  NRTL binary interaction parameters --- ethanol(i) + nNDimethylacetamide(j)

  REGRESSED BY CHOUPO'S CURATION PIPELINE (bin/choupo-curate, DEV.md 4c C282;
  record docs/design/binary-pairs-from-open-measurements.md) to measured
  bubble PRESSURES at stated temperatures (P-x, DEV.md 4c C291).  The articles named under \`evidence\` are the
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
  its fitting pipeline (every laboratory fitted to the bubble pressure, outliers beyond
  20 % discarded by name, max |P_model - P|/P over the kept points GRADED
  clean / warning / severe at 5 / 10 / 20 % -- DEV.md 4c C283 amended, C285, C291;
  THIS fit: clean, 2.7431 %; one liquid across its validity span), and NO
  HUMAN HAS REVIEWED IT.  The engine says so on every run that reads it, and
  voices a warning or a severe grade beside it.
  Nothing was held out: the \`validation {}\` block says so, and the acceptance
  is the \`curation {}\` block.  A curator who reads the series back against the
  articles marks it \`reviewStatus reviewed; humanReviewed true;\`.  Revert with
  \`bin/choupo-curate revert ethanol-nNDimethylacetamide\`.

  REPRODUCE: run tutorials/props/curation/curate501_nrtl_ethanol_nNDimethylacetamide (after \`bin/choupo-curate fetch\` on it); its fit
  writes ethanol-nNDimethylacetamide.proposal.dat, which bin/curate/check_regressed_pairs.py holds
  equal to this record.
\\*---------------------------------------------------------------------------*/

recordType binaryInteractionParameters;
schemaVersion 1;

pair { i ethanol; j nNDimethylacetamide; }

components  ( ethanol  nNDimethylacetamide );
model       NRTL;

parameters
{
    i           ethanol;
    j           nNDimethylacetamide;
    a_ij        0.00000000;
    b_ij        -24.71636416;
    a_ji        0.00000000;
    b_ji        -223.58435379;
    alpha       0.30000000;
}

provenance
{
    origin        fitted;
    method        "fitParameters(P_bubble), Levenberg-Marquardt";
    methodVersion "choupoProps Choupo-dev";
    fittedInCase  "tutorials/props/curation/curate501_nrtl_ethanol_nNDimethylacetamide";
    reviewStatus  autoPromoted;
    humanReviewed false;
    fitGrade      clean;   // DEV.md 4c C285 (C291): max |P_model - P|/P over the kept points, graded 5 / 10 / 20 %
    fitGradeMaxRelativeError_pct 2.7431;
    promotedBy    "bin/curate/pairs_px.py promote";
    promotedDate  "2026-11-10";
    reviewReason  "regressed by bin/choupo-curate from archive-transcribed measurements; not yet read back against the articles";
    reuse         "Choupo's own regression; the measured points belong to the cited articles and are not reproduced in this record or this tree";
    fitDate       "2026-11-10";

    evidence
    (
        {
            role      fit;
            dataset   "constant/archiveExtracts/ethanol-nNDimethylacetamide-bubbleP-acs.jced.7b00119-b21.dat";
            doi       "10.1021/acs.jced.7b00119";
            sha256    "c57dbb0a0bf3405a8a631fa0f45bc2682f03b5dd1ee020e8b3f07b3a0dafe997";
            provenance measured;
            archiveFile "acs.jced.7b00119.xml";
            system    "ethanol + nNDimethylacetamide";
        }
        {
            role      fit;
            dataset   "constant/archiveExtracts/ethanol-nNDimethylacetamide-bubbleP-j.jct.2005.08.001-b7.dat";
            doi       "10.1016/j.jct.2005.08.001";
            sha256    "5de52fee95970543a46d21a2ef0bb6beea7c54542637858dfcc7a5bebdd8252e";
            provenance measured;
            archiveFile "j.jct.2005.08.001.xml";
            system    "ethanol + nNDimethylacetamide";
        }
    );
    fingerprint "7b4908c619e0ebfa";   // of the declaration, frozen before the fit

    //  IN-SAMPLE: the model reproducing the very points it was
    //  fitted to.  It is NOT a validation; see the block below.
    weighting     equal;   // chi2 is sum ((P_model - P_exp)/P_exp)^2, dimensionless
    chi2          0.01280722;
    rms_rel       0.01473335;
    nDataPoints   59;
    identifiable  true;
    maxAbsCorr    0.99127935;

    validity
    {
        temperature { min 313.15 K; max 353.15 K; }
        pressure    { min 1314 Pa; max 108320 Pa; }
        note        "the span of the FIT evidence; outside it the pair is an extrapolation";
    }
}

validation
{
    verdict     validationRefused;

    heldOut     none;   // every declared dataset carried \`role fit\`

    acceptance  none;   // no band was declared before the fit, so no
                        // pass/fail may be read out of the residual above
}

curation
{
    rule            "DEV.md 4c C291 (bubble-pressure pairs; every laboratory, graded by C285)";
    evidence        allLaboratories;   // every block fitted, none held out
    objective       twoStage;
    residual        P_bubble;
    residualScale   relative;   // (P_model - P)/P at each point's stated T
    outlierLimit_pct 20;   // |P_model - P|/P after the least-squares stage
    outliersDropped 0;
    pointsKept      59;
    noBubblePoint   0;
    maxRelError_pct 2.7431;
    meanRelError_pct 1.1434;
    acceptance      graded;   // max relative pressure error over the kept points, DEV.md 4c C285 (C291)
    gradeLimits_pct (5 10 20);   // upper limits of clean / warning / severe; above, refused
    grade           clean;
    oneLiquid       true;   // arm (f) over the validity span; a pair that splits ONE liquid is never promoted
    temperatures    2;   // distinct stated temperatures in the evidence
    laboratories    2;   // distinct articles in the evidence
    singleTemperature false;   // true: b/T was fitted at ONE temperature
    singleLaboratory  false;   // true: ONE laboratory's data, nothing to cross-check it
    verdict         accepted;
}
`,Mn=`/*---------------------------------------------------------------------------*\\
  NRTL binary interaction parameters --- ethanol(i) + pXylene(j)

  REGRESSED BY CHOUPO'S CURATION PIPELINE (bin/choupo-curate, DEV.md 4c C282;
  record docs/design/binary-pairs-from-open-measurements.md) to measured
  bubble temperatures.  The articles named under \`evidence\` are the
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
  its fitting pipeline (every laboratory fitted, outliers beyond 3 K
  discarded by name, max |T_model - T| over the kept points GRADED
  clean / warning / severe at 1 / 2 / 4 K -- DEV.md 4c C283
  amended, C285, C286; THIS fit: severe, 3.0796 K; one liquid
  across its validity span), and NO HUMAN HAS REVIEWED IT.  The
  engine says so on every run that reads it, and voices a warning
  or a severe grade beside it.
  Nothing was held out: the \`validation {}\` block says so, and the
  acceptance is the \`curation {}\` block.  A curator who reads the series
  back against the articles marks it \`reviewStatus reviewed; humanReviewed
  true;\`.  Revert with \`bin/choupo-curate revert ethanol-pXylene\`.

  REPRODUCE: run tutorials/props/curation/curate120_nrtl_ethanol_pXylene (after \`bin/choupo-curate fetch\` on it); its fit
  writes ethanol-pXylene.proposal.dat, which bin/curate/check_regressed_pairs.py holds
  equal to this record.
\\*---------------------------------------------------------------------------*/

recordType binaryInteractionParameters;
schemaVersion 1;

pair { i ethanol; j pXylene; }

components  ( ethanol  pXylene );
model       NRTL;

parameters
{
    i           ethanol;
    j           pXylene;
    a_ij        0.00000000;
    b_ij        209.48004908;
    a_ji        0.00000000;
    b_ji        514.17808931;
    alpha       0.30000000;
}

provenance
{
    origin        fitted;
    method        "fitParameters(T_bubble), Levenberg-Marquardt";
    methodVersion "choupoProps Choupo-dev";
    fittedInCase  "tutorials/props/curation/curate120_nrtl_ethanol_pXylene";
    reviewStatus  autoPromoted;
    humanReviewed false;
    fitGrade      severe;   // DEV.md 4c C285 (C286): max |T_model - T| over the kept points, graded 1 / 2 / 4 K
    fitGradeMaxTemperatureError_K 3.0796;
    promotedBy    "bin/choupo-curate pair --promote";
    promotedDate  "2026-11-10";
    reviewReason  "regressed by bin/choupo-curate from archive-transcribed measurements; not yet read back against the articles";
    reuse         "Choupo's own regression; the measured points belong to the cited articles and are not reproduced in this record or this tree";
    fitDate       "2026-11-10";

    evidence
    (
        {
            role      fit;
            dataset   "constant/archiveExtracts/ethanol-pXylene-bubble-je200868y.dat";
            doi       "10.1021/je200868y";
            sha256    "c8eb85482568bab9e54c9789e8acb353dcc7cb3c8820474c24b5f0bd6528dab4";
            provenance measured;
            archiveFile "je200868y.xml";
            system    "ethanol + pXylene";
        }
        {
            role      fit;
            dataset   "constant/archiveExtracts/ethanol-pXylene-bubble-je0342318.dat";
            doi       "10.1021/je0342318";
            sha256    "0492f83334fe3a1cc389cb995b0f7bdc5bd5685169051b34899c5c379d63324e";
            provenance measured;
            archiveFile "je0342318.xml";
            system    "ethanol + pXylene";
            pressure  "101300.000000 Pa";
        }
    );
    fingerprint "904f923cfbd52c74";   // of the declaration, frozen before the fit

    //  IN-SAMPLE: the model reproducing the very points it was
    //  fitted to.  It is NOT a validation; see the block below.
    weighting     uncertainty;   // chi2 is sum ((T_model - T_exp)/U)^2, dimensionless
    chi2          122.54657753;
    rms_K         0.93160592;
    nDataPoints   81;
    identifiable  true;
    maxAbsCorr    0.95247137;

    validity
    {
        temperature { min 329.95 K; max 404.93 K; }
        pressure    { min 40000 Pa; max 101300 Pa; }
        note        "the span of the FIT evidence; outside it the pair is an extrapolation";
    }
}

validation
{
    verdict     validationRefused;

    heldOut     none;   // every declared dataset carried \`role fit\`

    acceptance  none;   // no band was declared before the fit, so no
                        // pass/fail may be read out of the residual above
}

curation
{
    rule            "DEV.md 4c C283 (amended) + C284, graded by C285 (C286)";
    evidence        allLaboratories;   // every study fitted, none held out
    objective       twoStage;
    outlierLimit    3 K;   // |T_model - T| after the least-squares stage
    outliersDropped 1;
    pointsKept      81;
    noBubblePoint   0;
    maxAbsError     3.0796 K;
    meanAbsError    0.7715 K;
    acceptance      graded;   // max |T_model - T| over the kept points, DEV.md 4c C285 (C286)
    gradeLimits_K   (1 2 4);   // upper limits of clean / warning / severe; above, refused
    grade           severe;
    oneLiquid       true;   // arm (f) over the validity span; a pair that splits ONE liquid is never promoted, whatever its grade
    verdict         accepted;
}
`,Un=`/*---------------------------------------------------------------------------*\\
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
`,Kn=`/*---------------------------------------------------------------------------*\\
  NRTL binary interaction parameters --- ethylAcetate(i) + methanol(j)

  REGRESSED BY CHOUPO'S CURATION PIPELINE (bin/choupo-curate, DEV.md 4c C282;
  record docs/design/binary-pairs-from-open-measurements.md) to measured
  bubble temperatures.  The articles named under \`evidence\` are the
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
  its fitting pipeline (every laboratory fitted, outliers beyond 3 K
  discarded by name, max |T_model - T| over the kept points GRADED
  clean / warning / severe at 1 / 2 / 4 K -- DEV.md 4c C283
  amended, C285, C286; THIS fit: clean, 0.4976 K; one liquid
  across its validity span), and NO HUMAN HAS REVIEWED IT.  The
  engine says so on every run that reads it, and voices a warning
  or a severe grade beside it.
  Nothing was held out: the \`validation {}\` block says so, and the
  acceptance is the \`curation {}\` block.  A curator who reads the series
  back against the articles marks it \`reviewStatus reviewed; humanReviewed
  true;\`.  Revert with \`bin/choupo-curate revert ethylAcetate-methanol\`.

  REPRODUCE: run tutorials/props/curation/curate142_nrtl_ethylAcetate_methanol (after \`bin/choupo-curate fetch\` on it); its fit
  writes ethylAcetate-methanol.proposal.dat, which bin/curate/check_regressed_pairs.py holds
  equal to this record.
\\*---------------------------------------------------------------------------*/

recordType binaryInteractionParameters;
schemaVersion 1;

pair { i ethylAcetate; j methanol; }

components  ( ethylAcetate  methanol );
model       NRTL;

parameters
{
    i           ethylAcetate;
    j           methanol;
    a_ij        0.00000000;
    b_ij        202.46691506;
    a_ji        0.00000000;
    b_ji        173.64294531;
    alpha       0.30000000;
}

provenance
{
    origin        fitted;
    method        "fitParameters(T_bubble), Levenberg-Marquardt";
    methodVersion "choupoProps Choupo-dev";
    fittedInCase  "tutorials/props/curation/curate142_nrtl_ethylAcetate_methanol";
    reviewStatus  autoPromoted;
    humanReviewed false;
    fitGrade      clean;   // DEV.md 4c C285 (C286): max |T_model - T| over the kept points, graded 1 / 2 / 4 K
    fitGradeMaxTemperatureError_K 0.4976;
    promotedBy    "bin/choupo-curate pair --promote";
    promotedDate  "2026-11-10";
    reviewReason  "regressed by bin/choupo-curate from archive-transcribed measurements; not yet read back against the articles";
    reuse         "Choupo's own regression; the measured points belong to the cited articles and are not reproduced in this record or this tree";
    fitDate       "2026-11-10";

    evidence
    (
        {
            role      fit;
            dataset   "constant/archiveExtracts/ethylAcetate-methanol-bubble-acs.jced.5b00546.dat";
            doi       "10.1021/acs.jced.5b00546";
            sha256    "8014bd04306585333ad1df1105db6259e912c154174273839cb8fc72ee6e81a9";
            provenance measured;
            archiveFile "acs.jced.5b00546.xml";
            system    "ethylAcetate + methanol";
            pressure  "101300.000000 Pa";
        }
        {
            role      fit;
            dataset   "constant/archiveExtracts/ethylAcetate-methanol-bubble-acs.jced.8b00424.dat";
            doi       "10.1021/acs.jced.8b00424";
            sha256    "f8ab869ed3da4aa35bb7b069679db785340acd27df292872eb430fc150633e94";
            provenance measured;
            archiveFile "acs.jced.8b00424.xml";
            system    "ethylAcetate + methanol";
            pressure  "101300.000000 Pa";
        }
    );
    fingerprint "60e301c3e8c4c390";   // of the declaration, frozen before the fit

    //  IN-SAMPLE: the model reproducing the very points it was
    //  fitted to.  It is NOT a validation; see the block below.
    weighting     uncertainty;   // chi2 is sum ((T_model - T_exp)/U)^2, dimensionless
    chi2          0.52331862;
    rms_K         0.18123318;
    nDataPoints   32;
    identifiable  true;
    maxAbsCorr    0.98982738;

    validity
    {
        temperature { min 335.45 K; max 348.74 K; }
        pressure    { min 101300 Pa; max 101300 Pa; }
        note        "the span of the FIT evidence; outside it the pair is an extrapolation";
    }
}

validation
{
    verdict     validationRefused;

    heldOut     none;   // every declared dataset carried \`role fit\`

    acceptance  none;   // no band was declared before the fit, so no
                        // pass/fail may be read out of the residual above
}

curation
{
    rule            "DEV.md 4c C283 (amended) + C284, graded by C285 (C286)";
    evidence        allLaboratories;   // every study fitted, none held out
    objective       twoStage;
    outlierLimit    3 K;   // |T_model - T| after the least-squares stage
    outliersDropped 0;
    pointsKept      32;
    noBubblePoint   0;
    maxAbsError     0.4976 K;
    meanAbsError    0.1105 K;
    acceptance      graded;   // max |T_model - T| over the kept points, DEV.md 4c C285 (C286)
    gradeLimits_K   (1 2 4);   // upper limits of clean / warning / severe; above, refused
    grade           clean;
    oneLiquid       true;   // arm (f) over the validity span; a pair that splits ONE liquid is never promoted, whatever its grade
    verdict         accepted;
}
`,Vn=`/*---------------------------------------------------------------------------*\\
  NRTL binary interaction parameters --- ethylBenzene(i) + monochlorobenzene(j)

  REGRESSED BY CHOUPO'S CURATION PIPELINE (bin/choupo-curate, DEV.md 4c C282;
  record docs/design/binary-pairs-from-open-measurements.md) to measured
  bubble temperatures.  The articles named under \`evidence\` are the
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
  its fitting pipeline (every laboratory fitted, outliers beyond 3 K
  discarded by name, max |T_model - T| over the kept points GRADED
  clean / warning / severe at 1 / 2 / 4 K -- DEV.md 4c C283
  amended, C285, C286; THIS fit: clean, 0.3774 K; one liquid
  across its validity span), and NO HUMAN HAS REVIEWED IT.  The
  engine says so on every run that reads it, and voices a warning
  or a severe grade beside it.
  Nothing was held out: the \`validation {}\` block says so, and the
  acceptance is the \`curation {}\` block.  A curator who reads the series
  back against the articles marks it \`reviewStatus reviewed; humanReviewed
  true;\`.  Revert with \`bin/choupo-curate revert ethylBenzene-monochlorobenzene\`.

  REPRODUCE: run tutorials/props/curation/curate143_nrtl_ethylBenzene_monochlorobenzene (after \`bin/choupo-curate fetch\` on it); its fit
  writes ethylBenzene-monochlorobenzene.proposal.dat, which bin/curate/check_regressed_pairs.py holds
  equal to this record.
\\*---------------------------------------------------------------------------*/

recordType binaryInteractionParameters;
schemaVersion 1;

pair { i ethylBenzene; j monochlorobenzene; }

components  ( ethylBenzene  monochlorobenzene );
model       NRTL;

parameters
{
    i           ethylBenzene;
    j           monochlorobenzene;
    a_ij        0.00000000;
    b_ij        319.82293101;
    a_ji        0.00000000;
    b_ji        -258.85701941;
    alpha       0.30000000;
}

provenance
{
    origin        fitted;
    method        "fitParameters(T_bubble), Levenberg-Marquardt";
    methodVersion "choupoProps Choupo-dev";
    fittedInCase  "tutorials/props/curation/curate143_nrtl_ethylBenzene_monochlorobenzene";
    reviewStatus  autoPromoted;
    humanReviewed false;
    fitGrade      clean;   // DEV.md 4c C285 (C286): max |T_model - T| over the kept points, graded 1 / 2 / 4 K
    fitGradeMaxTemperatureError_K 0.3774;
    promotedBy    "bin/choupo-curate pair --promote";
    promotedDate  "2026-11-10";
    reviewReason  "regressed by bin/choupo-curate from archive-transcribed measurements; not yet read back against the articles";
    reuse         "Choupo's own regression; the measured points belong to the cited articles and are not reproduced in this record or this tree";
    fitDate       "2026-11-10";

    evidence
    (
        {
            role      fit;
            dataset   "constant/archiveExtracts/ethylBenzene-monochlorobenzene-bubble-je020186c.dat";
            doi       "10.1021/je020186c";
            sha256    "42c372b090af0eedd09839822f60e727cbd35e444ec214ef4d1075f266e2aa46";
            provenance measured;
            archiveFile "je020186c.xml";
            system    "ethylBenzene + monochlorobenzene";
        }
        {
            role      fit;
            dataset   "constant/archiveExtracts/ethylBenzene-monochlorobenzene-bubble-j.jct.2005.12.009.dat";
            doi       "10.1016/j.jct.2005.12.009";
            sha256    "a98a2ed0d0a1d32edfbf57f888957a2e25b672502200eb2d43ea3e01fb0a596f";
            provenance measured;
            archiveFile "j.jct.2005.12.009.xml";
            system    "ethylBenzene + monochlorobenzene";
            pressure  "94700.000000 Pa";
        }
    );
    fingerprint "4f48655e2f6409fe";   // of the declaration, frozen before the fit

    //  IN-SAMPLE: the model reproducing the very points it was
    //  fitted to.  It is NOT a validation; see the block below.
    weighting     uncertainty;   // chi2 is sum ((T_model - T_exp)/U)^2, dimensionless
    chi2          3.83323492;
    rms_K         0.15529815;
    nDataPoints   26;
    identifiable  false;
    maxAbsCorr    0.99938051;

    validity
    {
        temperature { min 362.12 K; max 408.76 K; }
        pressure    { min 26660 Pa; max 101320 Pa; }
        note        "the span of the FIT evidence; outside it the pair is an extrapolation";
    }
}

validation
{
    verdict     validationRefused;

    heldOut     none;   // every declared dataset carried \`role fit\`

    acceptance  none;   // no band was declared before the fit, so no
                        // pass/fail may be read out of the residual above
}

curation
{
    rule            "DEV.md 4c C283 (amended) + C284, graded by C285 (C286)";
    evidence        allLaboratories;   // every study fitted, none held out
    objective       twoStage;
    outlierLimit    3 K;   // |T_model - T| after the least-squares stage
    outliersDropped 0;
    pointsKept      26;
    noBubblePoint   0;
    maxAbsError     0.3774 K;
    meanAbsError    0.1307 K;
    acceptance      graded;   // max |T_model - T| over the kept points, DEV.md 4c C285 (C286)
    gradeLimits_K   (1 2 4);   // upper limits of clean / warning / severe; above, refused
    grade           clean;
    oneLiquid       true;   // arm (f) over the validity span; a pair that splits ONE liquid is never promoted, whatever its grade
    verdict         accepted;
}
`,Hn=`/*---------------------------------------------------------------------------*\\
  NRTL binary interaction parameters --- ethylBenzene(i) + styrene(j)

  REGRESSED BY CHOUPO'S CURATION PIPELINE (bin/choupo-curate, DEV.md 4c C282;
  record docs/design/binary-pairs-from-open-measurements.md) to measured
  bubble temperatures.  The articles named under \`evidence\` are the
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
  its fitting pipeline (every laboratory fitted, outliers beyond 3 K
  discarded by name, max |T_model - T| over the kept points GRADED
  clean / warning / severe at 1 / 2 / 4 K -- DEV.md 4c C283
  amended, C285, C286; THIS fit: warning, 1.9192 K; one liquid
  across its validity span), and NO HUMAN HAS REVIEWED IT.  The
  engine says so on every run that reads it, and voices a warning
  or a severe grade beside it.
  Nothing was held out: the \`validation {}\` block says so, and the
  acceptance is the \`curation {}\` block.  A curator who reads the series
  back against the articles marks it \`reviewStatus reviewed; humanReviewed
  true;\`.  Revert with \`bin/choupo-curate revert ethylBenzene-styrene\`.

  REPRODUCE: run tutorials/props/curation/curate123_nrtl_ethylBenzene_styrene (after \`bin/choupo-curate fetch\` on it); its fit
  writes ethylBenzene-styrene.proposal.dat, which bin/curate/check_regressed_pairs.py holds
  equal to this record.
\\*---------------------------------------------------------------------------*/

recordType binaryInteractionParameters;
schemaVersion 1;

pair { i ethylBenzene; j styrene; }

components  ( ethylBenzene  styrene );
model       NRTL;

parameters
{
    i           ethylBenzene;
    j           styrene;
    a_ij        0.00000000;
    b_ij        -292.42563762;
    a_ji        0.00000000;
    b_ji        258.33904283;
    alpha       0.30000000;
}

provenance
{
    origin        fitted;
    method        "fitParameters(T_bubble), Levenberg-Marquardt";
    methodVersion "choupoProps Choupo-dev";
    fittedInCase  "tutorials/props/curation/curate123_nrtl_ethylBenzene_styrene";
    reviewStatus  autoPromoted;
    humanReviewed false;
    fitGrade      warning;   // DEV.md 4c C285 (C286): max |T_model - T| over the kept points, graded 1 / 2 / 4 K
    fitGradeMaxTemperatureError_K 1.9192;
    promotedBy    "bin/choupo-curate pair --promote";
    promotedDate  "2026-11-10";
    reviewReason  "regressed by bin/choupo-curate from archive-transcribed measurements; not yet read back against the articles";
    reuse         "Choupo's own regression; the measured points belong to the cited articles and are not reproduced in this record or this tree";
    fitDate       "2026-11-10";

    evidence
    (
        {
            role      fit;
            dataset   "constant/archiveExtracts/ethylBenzene-styrene-bubble-je200098d.dat";
            doi       "10.1021/je200098d";
            sha256    "97dcfdc89bc224473ec4eda70c0b694993ef025bd398181a5f734c77e767e829";
            provenance measured;
            archiveFile "je200098d.xml";
            system    "ethylBenzene + styrene";
        }
        {
            role      fit;
            dataset   "constant/archiveExtracts/ethylBenzene-styrene-bubble-je050523s.dat";
            doi       "10.1021/je050523s";
            sha256    "77750542f622a743df24a092c8974c7815eaff06331052039c056f802d75e527";
            provenance measured;
            archiveFile "je050523s.xml";
            system    "ethylBenzene + styrene";
        }
    );
    fingerprint "5f9c810ca1807d11";   // of the declaration, frozen before the fit

    //  IN-SAMPLE: the model reproducing the very points it was
    //  fitted to.  It is NOT a validation; see the block below.
    weighting     uncertainty;   // chi2 is sum ((T_model - T_exp)/U)^2, dimensionless
    chi2          1204.20954194;
    rms_K         1.19442993;
    nDataPoints   71;
    identifiable  false;
    maxAbsCorr    0.99981356;

    validity
    {
        temperature { min 324.38 K; max 366.00 K; }
        pressure    { min 5000 Pa; max 20000 Pa; }
        note        "the span of the FIT evidence; outside it the pair is an extrapolation";
    }
}

validation
{
    verdict     validationRefused;

    heldOut     none;   // every declared dataset carried \`role fit\`

    acceptance  none;   // no band was declared before the fit, so no
                        // pass/fail may be read out of the residual above
}

curation
{
    rule            "DEV.md 4c C283 (amended) + C284, graded by C285 (C286)";
    evidence        allLaboratories;   // every study fitted, none held out
    objective       twoStage;
    outlierLimit    3 K;   // |T_model - T| after the least-squares stage
    outliersDropped 0;
    pointsKept      71;
    noBubblePoint   0;
    maxAbsError     1.9192 K;
    meanAbsError    1.0751 K;
    acceptance      graded;   // max |T_model - T| over the kept points, DEV.md 4c C285 (C286)
    gradeLimits_K   (1 2 4);   // upper limits of clean / warning / severe; above, refused
    grade           warning;
    oneLiquid       true;   // arm (f) over the validity span; a pair that splits ONE liquid is never promoted, whatever its grade
    verdict         accepted;
}
`,Bn=`/*---------------------------------------------------------------------------*\\
  NRTL binary interaction parameters --- water(i) + ethyleneGlycol(j)

  REGRESSED BY CHOUPO'S CURATION PIPELINE (bin/choupo-curate, DEV.md 4c C282;
  record docs/design/binary-pairs-from-open-measurements.md) to measured
  bubble temperatures.  The articles named under \`evidence\` are the
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
  its fitting pipeline (every laboratory fitted, outliers beyond 3 K
  discarded by name, max |T_model - T| over the kept points GRADED
  clean / warning / severe at 1 / 2 / 4 K -- DEV.md 4c C283
  amended, C285, C286; THIS fit: severe, 2.5842 K; one liquid
  across its validity span), and NO HUMAN HAS REVIEWED IT.  The
  engine says so on every run that reads it, and voices a warning
  or a severe grade beside it.
  Nothing was held out: the \`validation {}\` block says so, and the
  acceptance is the \`curation {}\` block.  A curator who reads the series
  back against the articles marks it \`reviewStatus reviewed; humanReviewed
  true;\`.  Revert with \`bin/choupo-curate revert ethyleneGlycol-water\`.

  REPRODUCE: run tutorials/props/curation/curate109_nrtl_water_ethyleneGlycol (after \`bin/choupo-curate fetch\` on it); its fit
  writes ethyleneGlycol-water.proposal.dat, which bin/curate/check_regressed_pairs.py holds
  equal to this record.
\\*---------------------------------------------------------------------------*/

recordType binaryInteractionParameters;
schemaVersion 1;

pair { i water; j ethyleneGlycol; }

components  ( water  ethyleneGlycol );
model       NRTL;

parameters
{
    i           water;
    j           ethyleneGlycol;
    a_ij        0.00000000;
    b_ij        349.98390173;
    a_ji        0.00000000;
    b_ji        -358.93949479;
    alpha       0.30000000;
}

provenance
{
    origin        fitted;
    method        "fitParameters(T_bubble), Levenberg-Marquardt";
    methodVersion "choupoProps Choupo-dev";
    fittedInCase  "tutorials/props/curation/curate109_nrtl_water_ethyleneGlycol";
    reviewStatus  autoPromoted;
    humanReviewed false;
    fitGrade      severe;   // DEV.md 4c C285 (C286): max |T_model - T| over the kept points, graded 1 / 2 / 4 K
    fitGradeMaxTemperatureError_K 2.5842;
    promotedBy    "bin/choupo-curate pair --promote";
    promotedDate  "2026-11-10";
    reviewReason  "regressed by bin/choupo-curate from archive-transcribed measurements; not yet read back against the articles";
    reuse         "Choupo's own regression; the measured points belong to the cited articles and are not reproduced in this record or this tree";
    fitDate       "2026-11-10";

    evidence
    (
        {
            role      fit;
            dataset   "constant/archiveExtracts/water-ethyleneGlycol-bubble-acs.jced.7b00945.dat";
            doi       "10.1021/acs.jced.7b00945";
            sha256    "7a094d2fcbf64ff45ed75e2fb055cd819d00874e7fa16d6e6ff8eadce98e8526";
            provenance measured;
            archiveFile "acs.jced.7b00945.xml";
            system    "water + ethyleneGlycol";
        }
        {
            role      fit;
            dataset   "constant/archiveExtracts/water-ethyleneGlycol-bubble-je2008704.dat";
            doi       "10.1021/je2008704";
            sha256    "f24eca1286fb3d1fc4611eaf05bc771813d0dc41e81cf37c0c49b3ea9b871758";
            provenance measured;
            archiveFile "je2008704.xml";
            system    "water + ethyleneGlycol";
            pressure  "101300.000000 Pa";
        }
        {
            role      fit;
            dataset   "constant/archiveExtracts/water-ethyleneGlycol-bubble-acs.jced.6b00264.dat";
            doi       "10.1021/acs.jced.6b00264";
            sha256    "4f9d0dc0ecb5375f341dae495d5b01abdd1a0b783288839e298f3597fd195101";
            provenance measured;
            archiveFile "acs.jced.6b00264.xml";
            system    "water + ethyleneGlycol";
            pressure  "101300.000000 Pa";
        }
    );
    fingerprint "d185cc264c30fd5e";   // of the declaration, frozen before the fit

    //  IN-SAMPLE: the model reproducing the very points it was
    //  fitted to.  It is NOT a validation; see the block below.
    weighting     uncertainty;   // chi2 is sum ((T_model - T_exp)/U)^2, dimensionless
    chi2          23.08919586;
    rms_K         0.90350189;
    nDataPoints   73;
    identifiable  false;
    maxAbsCorr    0.99996775;

    validity
    {
        temperature { min 353.64 K; max 462.57 K; }
        pressure    { min 50000 Pa; max 101300 Pa; }
        note        "the span of the FIT evidence; outside it the pair is an extrapolation";
    }
}

validation
{
    verdict     validationRefused;

    heldOut     none;   // every declared dataset carried \`role fit\`

    acceptance  none;   // no band was declared before the fit, so no
                        // pass/fail may be read out of the residual above
}

curation
{
    rule            "DEV.md 4c C283 (amended) + C284, graded by C285 (C286)";
    evidence        allLaboratories;   // every study fitted, none held out
    objective       twoStage;
    outlierLimit    3 K;   // |T_model - T| after the least-squares stage
    outliersDropped 1;
    pointsKept      73;
    noBubblePoint   0;
    maxAbsError     2.5842 K;
    meanAbsError    0.7137 K;
    acceptance      graded;   // max |T_model - T| over the kept points, DEV.md 4c C285 (C286)
    gradeLimits_K   (1 2 4);   // upper limits of clean / warning / severe; above, refused
    grade           severe;
    oneLiquid       true;   // arm (f) over the validity span; a pair that splits ONE liquid is never promoted, whatever its grade
    verdict         accepted;
}
`,qn=`/*---------------------------------------------------------------------------*\\
  NRTL binary interaction parameters --- isopropylAcetate(i) + isopropanol(j)

  REGRESSED BY CHOUPO'S CURATION PIPELINE (bin/choupo-curate, DEV.md 4c C282;
  record docs/design/binary-pairs-from-open-measurements.md) to measured
  bubble temperatures.  The articles named under \`evidence\` are the
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
  its fitting pipeline (every laboratory fitted, outliers beyond 3 K
  discarded by name, max |T_model - T| over the kept points GRADED
  clean / warning / severe at 1 / 2 / 4 K -- DEV.md 4c C283
  amended, C285, C286; THIS fit: clean, 0.4552 K; one liquid
  across its validity span), and NO HUMAN HAS REVIEWED IT.  The
  engine says so on every run that reads it, and voices a warning
  or a severe grade beside it.
  Nothing was held out: the \`validation {}\` block says so, and the
  acceptance is the \`curation {}\` block.  A curator who reads the series
  back against the articles marks it \`reviewStatus reviewed; humanReviewed
  true;\`.  Revert with \`bin/choupo-curate revert isopropanol-isopropylAcetate\`.

  REPRODUCE: run tutorials/props/curation/curate113_nrtl_isopropylAcetate_isopropanol (after \`bin/choupo-curate fetch\` on it); its fit
  writes isopropanol-isopropylAcetate.proposal.dat, which bin/curate/check_regressed_pairs.py holds
  equal to this record.
\\*---------------------------------------------------------------------------*/

recordType binaryInteractionParameters;
schemaVersion 1;

pair { i isopropylAcetate; j isopropanol; }

components  ( isopropylAcetate  isopropanol );
model       NRTL;

parameters
{
    i           isopropylAcetate;
    j           isopropanol;
    a_ij        0.00000000;
    b_ij        177.67057078;
    a_ji        0.00000000;
    b_ji        37.35237782;
    alpha       0.30000000;
}

provenance
{
    origin        fitted;
    method        "fitParameters(T_bubble), Levenberg-Marquardt";
    methodVersion "choupoProps Choupo-dev";
    fittedInCase  "tutorials/props/curation/curate113_nrtl_isopropylAcetate_isopropanol";
    reviewStatus  autoPromoted;
    humanReviewed false;
    fitGrade      clean;   // DEV.md 4c C285 (C286): max |T_model - T| over the kept points, graded 1 / 2 / 4 K
    fitGradeMaxTemperatureError_K 0.4552;
    promotedBy    "bin/choupo-curate pair --promote";
    promotedDate  "2026-11-10";
    reviewReason  "regressed by bin/choupo-curate from archive-transcribed measurements; not yet read back against the articles";
    reuse         "Choupo's own regression; the measured points belong to the cited articles and are not reproduced in this record or this tree";
    fitDate       "2026-11-10";

    evidence
    (
        {
            role      fit;
            dataset   "constant/archiveExtracts/isopropylAcetate-isopropanol-bubble-acs.jced.5b00360.dat";
            doi       "10.1021/acs.jced.5b00360";
            sha256    "1feaca9b8a3aad5801d03ff44aeecb00582e5be4cce0a18be278f29873b04693";
            provenance measured;
            archiveFile "acs.jced.5b00360.xml";
            system    "isopropylAcetate + isopropanol";
            pressure  "101320.000000 Pa";
        }
        {
            role      fit;
            dataset   "constant/archiveExtracts/isopropylAcetate-isopropanol-bubble-j.fluid.2017.09.010.dat";
            doi       "10.1016/j.fluid.2017.09.010";
            sha256    "e12e54388a1268364dfb145ddf9626100861bc28435021b4a16ba05426b5abb3";
            provenance measured;
            archiveFile "j.fluid.2017.09.010.xml";
            system    "isopropylAcetate + isopropanol";
            pressure  "101000.000000 Pa";
        }
        {
            role      fit;
            dataset   "constant/archiveExtracts/isopropylAcetate-isopropanol-bubble-j.fluid.2019.06.016.dat";
            doi       "10.1016/j.fluid.2019.06.016";
            sha256    "4bf2aa39304b0c188de7b0bdb7c03f4667201c2cddc0770e69e89654781b4ea2";
            provenance measured;
            archiveFile "j.fluid.2019.06.016.xml";
            system    "isopropylAcetate + isopropanol";
            pressure  "101300.000000 Pa";
        }
    );
    fingerprint "6aa03f25f3b40f7b";   // of the declaration, frozen before the fit

    //  IN-SAMPLE: the model reproducing the very points it was
    //  fitted to.  It is NOT a validation; see the block below.
    weighting     uncertainty;   // chi2 is sum ((T_model - T_exp)/U)^2, dimensionless
    chi2          22.48599400;
    rms_K         0.14414745;
    nDataPoints   57;
    identifiable  true;
    maxAbsCorr    0.99703605;

    validity
    {
        temperature { min 353.51 K; max 361.31 K; }
        pressure    { min 101000 Pa; max 101320 Pa; }
        note        "the span of the FIT evidence; outside it the pair is an extrapolation";
    }
}

validation
{
    verdict     validationRefused;

    heldOut     none;   // every declared dataset carried \`role fit\`

    acceptance  none;   // no band was declared before the fit, so no
                        // pass/fail may be read out of the residual above
}

curation
{
    rule            "DEV.md 4c C283 (amended) + C284, graded by C285 (C286)";
    evidence        allLaboratories;   // every study fitted, none held out
    objective       twoStage;
    outlierLimit    3 K;   // |T_model - T| after the least-squares stage
    outliersDropped 0;
    pointsKept      57;
    noBubblePoint   0;
    maxAbsError     0.4552 K;
    meanAbsError    0.1098 K;
    acceptance      graded;   // max |T_model - T| over the kept points, DEV.md 4c C285 (C286)
    gradeLimits_K   (1 2 4);   // upper limits of clean / warning / severe; above, refused
    grade           clean;
    oneLiquid       true;   // arm (f) over the validity span; a pair that splits ONE liquid is never promoted, whatever its grade
    verdict         accepted;
}
`,Gn=`/*---------------------------------------------------------------------------*\\
  NRTL binary interaction parameters --- methanol(i) + isopropanol(j)

  REGRESSED BY CHOUPO'S CURATION PIPELINE (bin/choupo-curate, DEV.md 4c C282;
  record docs/design/binary-pairs-from-open-measurements.md) to measured
  bubble temperatures.  The articles named under \`evidence\` are the
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
  its fitting pipeline (every laboratory fitted, outliers beyond 3 K
  discarded by name, max |T_model - T| over the kept points GRADED
  clean / warning / severe at 1 / 2 / 4 K -- DEV.md 4c C283
  amended, C285, C286; THIS fit: warning, 1.7364 K; one liquid
  across its validity span), and NO HUMAN HAS REVIEWED IT.  The
  engine says so on every run that reads it, and voices a warning
  or a severe grade beside it.
  Nothing was held out: the \`validation {}\` block says so, and the
  acceptance is the \`curation {}\` block.  A curator who reads the series
  back against the articles marks it \`reviewStatus reviewed; humanReviewed
  true;\`.  Revert with \`bin/choupo-curate revert isopropanol-methanol\`.

  REPRODUCE: run tutorials/props/curation/curate107_nrtl_methanol_isopropanol (after \`bin/choupo-curate fetch\` on it); its fit
  writes isopropanol-methanol.proposal.dat, which bin/curate/check_regressed_pairs.py holds
  equal to this record.
\\*---------------------------------------------------------------------------*/

recordType binaryInteractionParameters;
schemaVersion 1;

pair { i methanol; j isopropanol; }

components  ( methanol  isopropanol );
model       NRTL;

parameters
{
    i           methanol;
    j           isopropanol;
    a_ij        0.00000000;
    b_ij        82.73932607;
    a_ji        0.00000000;
    b_ji        -60.65329885;
    alpha       0.30000000;
}

provenance
{
    origin        fitted;
    method        "fitParameters(T_bubble), Levenberg-Marquardt";
    methodVersion "choupoProps Choupo-dev";
    fittedInCase  "tutorials/props/curation/curate107_nrtl_methanol_isopropanol";
    reviewStatus  autoPromoted;
    humanReviewed false;
    fitGrade      warning;   // DEV.md 4c C285 (C286): max |T_model - T| over the kept points, graded 1 / 2 / 4 K
    fitGradeMaxTemperatureError_K 1.7364;
    promotedBy    "bin/choupo-curate pair --promote";
    promotedDate  "2026-11-10";
    reviewReason  "regressed by bin/choupo-curate from archive-transcribed measurements; not yet read back against the articles";
    reuse         "Choupo's own regression; the measured points belong to the cited articles and are not reproduced in this record or this tree";
    fitDate       "2026-11-10";

    evidence
    (
        {
            role      fit;
            dataset   "constant/archiveExtracts/methanol-isopropanol-bubble-j.fluid.2015.07.023.dat";
            doi       "10.1016/j.fluid.2015.07.023";
            sha256    "241c2c7e53a29b4972e294043e0a89673c820bb9875cb14b3e4c5d8e9afb7244";
            provenance measured;
            archiveFile "j.fluid.2015.07.023.xml";
            system    "methanol + isopropanol";
        }
        {
            role      fit;
            dataset   "constant/archiveExtracts/methanol-isopropanol-bubble-je060476j.dat";
            doi       "10.1021/je060476j";
            sha256    "4bb52f5283cbac4a6f7d53ddd7f7cedcc7567a92dfeb8d5d3727be049e59d735";
            provenance measured;
            archiveFile "je060476j.xml";
            system    "methanol + isopropanol";
            pressure  "101300.000000 Pa";
        }
        {
            role      fit;
            dataset   "constant/archiveExtracts/methanol-isopropanol-bubble-je201349k.dat";
            doi       "10.1021/je201349k";
            sha256    "7a865cc45d28094238d0deefd283f8c23f1a13678e113236a797fccae946f2c9";
            provenance measured;
            archiveFile "je201349k.xml";
            system    "methanol + isopropanol";
            pressure  "101000.000000 Pa";
        }
    );
    fingerprint "b1766cc71ab2cf49";   // of the declaration, frozen before the fit

    //  IN-SAMPLE: the model reproducing the very points it was
    //  fitted to.  It is NOT a validation; see the block below.
    weighting     uncertainty;   // chi2 is sum ((T_model - T_exp)/U)^2, dimensionless
    chi2          2132.77523556;
    rms_K         0.77252015;
    nDataPoints   111;
    identifiable  false;
    maxAbsCorr    0.99996620;

    validity
    {
        temperature { min 322.45 K; max 354.69 K; }
        pressure    { min 53330 Pa; max 101300 Pa; }
        note        "the span of the FIT evidence; outside it the pair is an extrapolation";
    }
}

validation
{
    verdict     validationRefused;

    heldOut     none;   // every declared dataset carried \`role fit\`

    acceptance  none;   // no band was declared before the fit, so no
                        // pass/fail may be read out of the residual above
}

curation
{
    rule            "DEV.md 4c C283 (amended) + C284, graded by C285 (C286)";
    evidence        allLaboratories;   // every study fitted, none held out
    objective       twoStage;
    outlierLimit    3 K;   // |T_model - T| after the least-squares stage
    outliersDropped 0;
    pointsKept      111;
    noBubblePoint   0;
    maxAbsError     1.7364 K;
    meanAbsError    0.6311 K;
    acceptance      graded;   // max |T_model - T| over the kept points, DEV.md 4c C285 (C286)
    gradeLimits_K   (1 2 4);   // upper limits of clean / warning / severe; above, refused
    grade           warning;
    oneLiquid       true;   // arm (f) over the validity span; a pair that splits ONE liquid is never promoted, whatever its grade
    verdict         accepted;
}
`,Fn=`/*---------------------------------------------------------------------------*\\
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
`,zn=`/*---------------------------------------------------------------------------*\\
  NRTL binary interaction parameters --- nDecane(i) + mXylene(j)

  REGRESSED BY CHOUPO'S CURATION PIPELINE (bin/choupo-curate, DEV.md 4c C282;
  record docs/design/binary-pairs-from-open-measurements.md) to measured
  bubble temperatures.  The articles named under \`evidence\` are the
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
  its fitting pipeline (every laboratory fitted, outliers beyond 3 K
  discarded by name, max |T_model - T| over the kept points GRADED
  clean / warning / severe at 1 / 2 / 4 K -- DEV.md 4c C283
  amended, C285, C286; THIS fit: clean, 0.1070 K; one liquid
  across its validity span), and NO HUMAN HAS REVIEWED IT.  The
  engine says so on every run that reads it, and voices a warning
  or a severe grade beside it.
  Nothing was held out: the \`validation {}\` block says so, and the
  acceptance is the \`curation {}\` block.  A curator who reads the series
  back against the articles marks it \`reviewStatus reviewed; humanReviewed
  true;\`.  Revert with \`bin/choupo-curate revert mXylene-nDecane\`.

  REPRODUCE: run tutorials/props/curation/curate161_nrtl_nDecane_mXylene (after \`bin/choupo-curate fetch\` on it); its fit
  writes mXylene-nDecane.proposal.dat, which bin/curate/check_regressed_pairs.py holds
  equal to this record.
\\*---------------------------------------------------------------------------*/

recordType binaryInteractionParameters;
schemaVersion 1;

pair { i nDecane; j mXylene; }

components  ( nDecane  mXylene );
model       NRTL;

parameters
{
    i           nDecane;
    j           mXylene;
    a_ij        0.00000000;
    b_ij        -262.97137386;
    a_ji        0.00000000;
    b_ji        429.45914243;
    alpha       0.30000000;
}

provenance
{
    origin        fitted;
    method        "fitParameters(T_bubble), Levenberg-Marquardt";
    methodVersion "choupoProps Choupo-dev";
    fittedInCase  "tutorials/props/curation/curate161_nrtl_nDecane_mXylene";
    reviewStatus  autoPromoted;
    humanReviewed false;
    fitGrade      clean;   // DEV.md 4c C285 (C286): max |T_model - T| over the kept points, graded 1 / 2 / 4 K
    fitGradeMaxTemperatureError_K 0.1070;
    promotedBy    "bin/choupo-curate pair --promote";
    promotedDate  "2026-11-10";
    reviewReason  "regressed by bin/choupo-curate from archive-transcribed measurements; not yet read back against the articles";
    reuse         "Choupo's own regression; the measured points belong to the cited articles and are not reproduced in this record or this tree";
    fitDate       "2026-11-10";

    evidence
    (
        {
            role      fit;
            dataset   "constant/archiveExtracts/nDecane-mXylene-bubble-j.fluid.2012.09.019.dat";
            doi       "10.1016/j.fluid.2012.09.019";
            sha256    "7ab32e1e73d47ffb72cce97fbd8aed01dd70cc88c73c7e45957aadf589cfd90b";
            provenance measured;
            archiveFile "j.fluid.2012.09.019.xml";
            system    "nDecane + mXylene";
            pressure  "20000.000000 Pa";
        }
        {
            role      fit;
            dataset   "constant/archiveExtracts/nDecane-mXylene-bubble-j.fluid.2004.10.027.dat";
            doi       "10.1016/j.fluid.2004.10.027";
            sha256    "dedfec1f89c424222eb64267c206a4a687646def0a2f935f68318ea9398d71d6";
            provenance measured;
            archiveFile "j.fluid.2004.10.027.xml";
            system    "nDecane + mXylene";
            pressure  "95800.000000 Pa";
        }
    );
    fingerprint "ebe037a62baf7110";   // of the declaration, frozen before the fit

    //  IN-SAMPLE: the model reproducing the very points it was
    //  fitted to.  It is NOT a validation; see the block below.
    weighting     uncertainty;   // chi2 is sum ((T_model - T_exp)/U)^2, dimensionless
    chi2          3.32846711;
    rms_K         0.07116778;
    nDataPoints   12;
    identifiable  true;
    maxAbsCorr    0.99713377;

    validity
    {
        temperature { min 361.71 K; max 391.29 K; }
        pressure    { min 20000 Pa; max 20000 Pa; }
        note        "the span of the FIT evidence; outside it the pair is an extrapolation";
    }
}

validation
{
    verdict     validationRefused;

    heldOut     none;   // every declared dataset carried \`role fit\`

    acceptance  none;   // no band was declared before the fit, so no
                        // pass/fail may be read out of the residual above
}

curation
{
    rule            "DEV.md 4c C283 (amended) + C284, graded by C285 (C286)";
    evidence        allLaboratories;   // every study fitted, none held out
    objective       twoStage;
    outlierLimit    3 K;   // |T_model - T| after the least-squares stage
    outliersDropped 5;
    pointsKept      12;
    noBubblePoint   0;
    maxAbsError     0.1070 K;
    meanAbsError    0.0642 K;
    acceptance      graded;   // max |T_model - T| over the kept points, DEV.md 4c C285 (C286)
    gradeLimits_K   (1 2 4);   // upper limits of clean / warning / severe; above, refused
    grade           clean;
    oneLiquid       true;   // arm (f) over the validity span; a pair that splits ONE liquid is never promoted, whatever its grade
    verdict         accepted;
}
`,Yn=`/*---------------------------------------------------------------------------*\\
  NRTL binary interaction parameters --- nOctane(i) + mXylene(j)

  REGRESSED BY CHOUPO'S CURATION PIPELINE (bin/choupo-curate, DEV.md 4c C282;
  record docs/design/binary-pairs-from-open-measurements.md) to measured
  bubble temperatures.  The articles named under \`evidence\` are the
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
  its fitting pipeline (every laboratory fitted, outliers beyond 3 K
  discarded by name, max |T_model - T| over the kept points GRADED
  clean / warning / severe at 1 / 2 / 4 K -- DEV.md 4c C283
  amended, C285, C286; THIS fit: clean, 0.6349 K; one liquid
  across its validity span), and NO HUMAN HAS REVIEWED IT.  The
  engine says so on every run that reads it, and voices a warning
  or a severe grade beside it.
  Nothing was held out: the \`validation {}\` block says so, and the
  acceptance is the \`curation {}\` block.  A curator who reads the series
  back against the articles marks it \`reviewStatus reviewed; humanReviewed
  true;\`.  Revert with \`bin/choupo-curate revert mXylene-nOctane\`.

  REPRODUCE: run tutorials/props/curation/curate157_nrtl_nOctane_mXylene (after \`bin/choupo-curate fetch\` on it); its fit
  writes mXylene-nOctane.proposal.dat, which bin/curate/check_regressed_pairs.py holds
  equal to this record.
\\*---------------------------------------------------------------------------*/

recordType binaryInteractionParameters;
schemaVersion 1;

pair { i nOctane; j mXylene; }

components  ( nOctane  mXylene );
model       NRTL;

parameters
{
    i           nOctane;
    j           mXylene;
    a_ij        0.00000000;
    b_ij        -311.21685975;
    a_ji        0.00000000;
    b_ji        477.80363257;
    alpha       0.30000000;
}

provenance
{
    origin        fitted;
    method        "fitParameters(T_bubble), Levenberg-Marquardt";
    methodVersion "choupoProps Choupo-dev";
    fittedInCase  "tutorials/props/curation/curate157_nrtl_nOctane_mXylene";
    reviewStatus  autoPromoted;
    humanReviewed false;
    fitGrade      clean;   // DEV.md 4c C285 (C286): max |T_model - T| over the kept points, graded 1 / 2 / 4 K
    fitGradeMaxTemperatureError_K 0.6349;
    promotedBy    "bin/choupo-curate pair --promote";
    promotedDate  "2026-11-10";
    reviewReason  "regressed by bin/choupo-curate from archive-transcribed measurements; not yet read back against the articles";
    reuse         "Choupo's own regression; the measured points belong to the cited articles and are not reproduced in this record or this tree";
    fitDate       "2026-11-10";

    evidence
    (
        {
            role      fit;
            dataset   "constant/archiveExtracts/nOctane-mXylene-bubble-j.fluid.2013.01.015.dat";
            doi       "10.1016/j.fluid.2013.01.015";
            sha256    "ea4a823b5e6d896b5e973eb5b31e45cd12636e65619bce99573a67b1b68fa599";
            provenance measured;
            archiveFile "j.fluid.2013.01.015.xml";
            system    "nOctane + mXylene";
            pressure  "20000.000000 Pa";
        }
        {
            role      fit;
            dataset   "constant/archiveExtracts/nOctane-mXylene-bubble-je3002283.dat";
            doi       "10.1021/je3002283";
            sha256    "669a2ea51c95ff219445e0a725011171e341f9a32d84b182aac7fa86da272e2f";
            provenance measured;
            archiveFile "je3002283.xml";
            system    "nOctane + mXylene";
            pressure  "101300.000000 Pa";
        }
    );
    fingerprint "841956cf10271d58";   // of the declaration, frozen before the fit

    //  IN-SAMPLE: the model reproducing the very points it was
    //  fitted to.  It is NOT a validation; see the block below.
    weighting     uncertainty;   // chi2 is sum ((T_model - T_exp)/U)^2, dimensionless
    chi2          33.37130264;
    rms_K         0.26221318;
    nDataPoints   24;
    identifiable  true;
    maxAbsCorr    0.99568115;

    validity
    {
        temperature { min 349.55 K; max 411.40 K; }
        pressure    { min 20000 Pa; max 101300 Pa; }
        note        "the span of the FIT evidence; outside it the pair is an extrapolation";
    }
}

validation
{
    verdict     validationRefused;

    heldOut     none;   // every declared dataset carried \`role fit\`

    acceptance  none;   // no band was declared before the fit, so no
                        // pass/fail may be read out of the residual above
}

curation
{
    rule            "DEV.md 4c C283 (amended) + C284, graded by C285 (C286)";
    evidence        allLaboratories;   // every study fitted, none held out
    objective       twoStage;
    outlierLimit    3 K;   // |T_model - T| after the least-squares stage
    outliersDropped 0;
    pointsKept      24;
    noBubblePoint   0;
    maxAbsError     0.6349 K;
    meanAbsError    0.2000 K;
    acceptance      graded;   // max |T_model - T| over the kept points, DEV.md 4c C285 (C286)
    gradeLimits_K   (1 2 4);   // upper limits of clean / warning / severe; above, refused
    grade           clean;
    oneLiquid       true;   // arm (f) over the validity span; a pair that splits ONE liquid is never promoted, whatever its grade
    verdict         accepted;
}
`,Xn=`/*---------------------------------------------------------------------------*\\
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
`,Qn=`/*---------------------------------------------------------------------------*\\
  NRTL binary interaction parameters --- methanol(i) + methylEthylKetone(j)

  REGRESSED BY CHOUPO'S CURATION PIPELINE (bin/choupo-curate, DEV.md 4c C282;
  record docs/design/binary-pairs-from-open-measurements.md) to measured
  bubble temperatures.  The articles named under \`evidence\` are the
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
  its fitting pipeline (every laboratory fitted, outliers beyond 3 K
  discarded by name, max |T_model - T| over the kept points GRADED
  clean / warning / severe at 1 / 2 / 4 K -- DEV.md 4c C283
  amended, C285, C286; THIS fit: clean, 0.6592 K; one liquid
  across its validity span), and NO HUMAN HAS REVIEWED IT.  The
  engine says so on every run that reads it, and voices a warning
  or a severe grade beside it.
  Nothing was held out: the \`validation {}\` block says so, and the
  acceptance is the \`curation {}\` block.  A curator who reads the series
  back against the articles marks it \`reviewStatus reviewed; humanReviewed
  true;\`.  Revert with \`bin/choupo-curate revert methanol-methylEthylKetone\`.

  REPRODUCE: run tutorials/props/curation/curate139_nrtl_methanol_methylEthylKetone (after \`bin/choupo-curate fetch\` on it); its fit
  writes methanol-methylEthylKetone.proposal.dat, which bin/curate/check_regressed_pairs.py holds
  equal to this record.
\\*---------------------------------------------------------------------------*/

recordType binaryInteractionParameters;
schemaVersion 1;

pair { i methanol; j methylEthylKetone; }

components  ( methanol  methylEthylKetone );
model       NRTL;

parameters
{
    i           methanol;
    j           methylEthylKetone;
    a_ij        0.00000000;
    b_ij        242.97893880;
    a_ji        0.00000000;
    b_ji        22.79095714;
    alpha       0.30000000;
}

provenance
{
    origin        fitted;
    method        "fitParameters(T_bubble), Levenberg-Marquardt";
    methodVersion "choupoProps Choupo-dev";
    fittedInCase  "tutorials/props/curation/curate139_nrtl_methanol_methylEthylKetone";
    reviewStatus  autoPromoted;
    humanReviewed false;
    fitGrade      clean;   // DEV.md 4c C285 (C286): max |T_model - T| over the kept points, graded 1 / 2 / 4 K
    fitGradeMaxTemperatureError_K 0.6592;
    promotedBy    "bin/choupo-curate pair --promote";
    promotedDate  "2026-11-10";
    reviewReason  "regressed by bin/choupo-curate from archive-transcribed measurements; not yet read back against the articles";
    reuse         "Choupo's own regression; the measured points belong to the cited articles and are not reproduced in this record or this tree";
    fitDate       "2026-11-10";

    evidence
    (
        {
            role      fit;
            dataset   "constant/archiveExtracts/methanol-methylEthylKetone-bubble-j.fluid.2016.06.048.dat";
            doi       "10.1016/j.fluid.2016.06.048";
            sha256    "768dc654eeac83aed73676cd997961779eb0ac24ba6649a41d71f68786548cce";
            provenance measured;
            archiveFile "j.fluid.2016.06.048.xml";
            system    "methanol + methylEthylKetone";
            pressure  "101300.000000 Pa";
        }
        {
            role      fit;
            dataset   "constant/archiveExtracts/methanol-methylEthylKetone-bubble-je301062g.dat";
            doi       "10.1021/je301062g";
            sha256    "e0dea04b2db6beb771543d99889945bc491afd7e8f2fba306d132c79cc206b0b";
            provenance measured;
            archiveFile "je301062g.xml";
            system    "methanol + methylEthylKetone";
            pressure  "101320.000000 Pa";
        }
    );
    fingerprint "1eafc143f4186fb2";   // of the declaration, frozen before the fit

    //  IN-SAMPLE: the model reproducing the very points it was
    //  fitted to.  It is NOT a validation; see the block below.
    weighting     uncertainty;   // chi2 is sum ((T_model - T_exp)/U)^2, dimensionless
    chi2          76.95268530;
    rms_K         0.32933051;
    nDataPoints   36;
    identifiable  true;
    maxAbsCorr    0.99608871;

    validity
    {
        temperature { min 337.40 K; max 349.80 K; }
        pressure    { min 101300 Pa; max 101320 Pa; }
        note        "the span of the FIT evidence; outside it the pair is an extrapolation";
    }
}

validation
{
    verdict     validationRefused;

    heldOut     none;   // every declared dataset carried \`role fit\`

    acceptance  none;   // no band was declared before the fit, so no
                        // pass/fail may be read out of the residual above
}

curation
{
    rule            "DEV.md 4c C283 (amended) + C284, graded by C285 (C286)";
    evidence        allLaboratories;   // every study fitted, none held out
    objective       twoStage;
    outlierLimit    3 K;   // |T_model - T| after the least-squares stage
    outliersDropped 0;
    pointsKept      36;
    noBubblePoint   0;
    maxAbsError     0.6592 K;
    meanAbsError    0.2972 K;
    acceptance      graded;   // max |T_model - T| over the kept points, DEV.md 4c C285 (C286)
    gradeLimits_K   (1 2 4);   // upper limits of clean / warning / severe; above, refused
    grade           clean;
    oneLiquid       true;   // arm (f) over the validity span; a pair that splits ONE liquid is never promoted, whatever its grade
    verdict         accepted;
}
`,Wn=`/*---------------------------------------------------------------------------*\\
  NRTL binary interaction parameters --- tetrahydrofuran(i) + methanol(j)

  REGRESSED BY CHOUPO'S CURATION PIPELINE (bin/choupo-curate, DEV.md 4c C282;
  record docs/design/binary-pairs-from-open-measurements.md) to measured
  bubble temperatures.  The articles named under \`evidence\` are the
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
  its fitting pipeline (every laboratory fitted, outliers beyond 3 K
  discarded by name, max |T_model - T| over the kept points GRADED
  clean / warning / severe at 1 / 2 / 4 K -- DEV.md 4c C283
  amended, C285, C286; THIS fit: clean, 0.4962 K; one liquid
  across its validity span), and NO HUMAN HAS REVIEWED IT.  The
  engine says so on every run that reads it, and voices a warning
  or a severe grade beside it.
  Nothing was held out: the \`validation {}\` block says so, and the
  acceptance is the \`curation {}\` block.  A curator who reads the series
  back against the articles marks it \`reviewStatus reviewed; humanReviewed
  true;\`.  Revert with \`bin/choupo-curate revert methanol-tetrahydrofuran\`.

  REPRODUCE: run tutorials/props/curation/curate152_nrtl_tetrahydrofuran_methanol (after \`bin/choupo-curate fetch\` on it); its fit
  writes methanol-tetrahydrofuran.proposal.dat, which bin/curate/check_regressed_pairs.py holds
  equal to this record.
\\*---------------------------------------------------------------------------*/

recordType binaryInteractionParameters;
schemaVersion 1;

pair { i tetrahydrofuran; j methanol; }

components  ( tetrahydrofuran  methanol );
model       NRTL;

parameters
{
    i           tetrahydrofuran;
    j           methanol;
    a_ij        0.00000000;
    b_ij        241.37505076;
    a_ji        0.00000000;
    b_ji        61.39439941;
    alpha       0.30000000;
}

provenance
{
    origin        fitted;
    method        "fitParameters(T_bubble), Levenberg-Marquardt";
    methodVersion "choupoProps Choupo-dev";
    fittedInCase  "tutorials/props/curation/curate152_nrtl_tetrahydrofuran_methanol";
    reviewStatus  autoPromoted;
    humanReviewed false;
    fitGrade      clean;   // DEV.md 4c C285 (C286): max |T_model - T| over the kept points, graded 1 / 2 / 4 K
    fitGradeMaxTemperatureError_K 0.4962;
    promotedBy    "bin/choupo-curate pair --promote";
    promotedDate  "2026-11-10";
    reviewReason  "regressed by bin/choupo-curate from archive-transcribed measurements; not yet read back against the articles";
    reuse         "Choupo's own regression; the measured points belong to the cited articles and are not reproduced in this record or this tree";
    fitDate       "2026-11-10";

    evidence
    (
        {
            role      fit;
            dataset   "constant/archiveExtracts/tetrahydrofuran-methanol-bubble-j.fluid.2013.09.060.dat";
            doi       "10.1016/j.fluid.2013.09.060";
            sha256    "86eedad221ccc76daeaed0595a91c36fe93380c2c035db33023e9fb2b65ac956";
            provenance measured;
            archiveFile "j.fluid.2013.09.060.xml";
            system    "tetrahydrofuran + methanol";
            pressure  "101300.000000 Pa";
        }
        {
            role      fit;
            dataset   "constant/archiveExtracts/tetrahydrofuran-methanol-bubble-j.fluid.2016.04.012.dat";
            doi       "10.1016/j.fluid.2016.04.012";
            sha256    "9ed14db306dd7673b49a48a3fa564d3faeb4a04ab6c4ea8eefa897ed3069e015";
            provenance measured;
            archiveFile "j.fluid.2016.04.012.xml";
            system    "tetrahydrofuran + methanol";
            pressure  "101300.000000 Pa";
        }
    );
    fingerprint "45bb871e7ac16355";   // of the declaration, frozen before the fit

    //  IN-SAMPLE: the model reproducing the very points it was
    //  fitted to.  It is NOT a validation; see the block below.
    weighting     uncertainty;   // chi2 is sum ((T_model - T_exp)/U)^2, dimensionless
    chi2          41.27439833;
    rms_K         0.25382216;
    nDataPoints   29;
    identifiable  true;
    maxAbsCorr    0.99491923;

    validity
    {
        temperature { min 332.40 K; max 336.40 K; }
        pressure    { min 101300 Pa; max 101300 Pa; }
        note        "the span of the FIT evidence; outside it the pair is an extrapolation";
    }
}

validation
{
    verdict     validationRefused;

    heldOut     none;   // every declared dataset carried \`role fit\`

    acceptance  none;   // no band was declared before the fit, so no
                        // pass/fail may be read out of the residual above
}

curation
{
    rule            "DEV.md 4c C283 (amended) + C284, graded by C285 (C286)";
    evidence        allLaboratories;   // every study fitted, none held out
    objective       twoStage;
    outlierLimit    3 K;   // |T_model - T| after the least-squares stage
    outliersDropped 0;
    pointsKept      29;
    noBubblePoint   0;
    maxAbsError     0.4962 K;
    meanAbsError    0.2074 K;
    acceptance      graded;   // max |T_model - T| over the kept points, DEV.md 4c C285 (C286)
    gradeLimits_K   (1 2 4);   // upper limits of clean / warning / severe; above, refused
    grade           clean;
    oneLiquid       true;   // arm (f) over the validity span; a pair that splits ONE liquid is never promoted, whatever its grade
    verdict         accepted;
}
`,$n=`/*---------------------------------------------------------------------------*\\
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
`,Jn=`/*---------------------------------------------------------------------------*\\
  NRTL binary interaction parameters --- methylPropionate(i) + nHeptane(j)

  REGRESSED BY CHOUPO'S CURATION PIPELINE (bin/choupo-curate, DEV.md 4c C282;
  record docs/design/binary-pairs-from-open-measurements.md) to measured
  bubble temperatures.  The articles named under \`evidence\` are the
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
  its fitting pipeline (every laboratory fitted, outliers beyond 3 K
  discarded by name, max |T_model - T| over the kept points GRADED
  clean / warning / severe at 1 / 2 / 4 K -- DEV.md 4c C283
  amended, C285, C286; THIS fit: warning, 1.8493 K; one liquid
  across its validity span), and NO HUMAN HAS REVIEWED IT.  The
  engine says so on every run that reads it, and voices a warning
  or a severe grade beside it.
  Nothing was held out: the \`validation {}\` block says so, and the
  acceptance is the \`curation {}\` block.  A curator who reads the series
  back against the articles marks it \`reviewStatus reviewed; humanReviewed
  true;\`.  Revert with \`bin/choupo-curate revert methylPropionate-nHeptane\`.

  REPRODUCE: run tutorials/props/curation/curate127_nrtl_methylPropionate_nHeptane (after \`bin/choupo-curate fetch\` on it); its fit
  writes methylPropionate-nHeptane.proposal.dat, which bin/curate/check_regressed_pairs.py holds
  equal to this record.
\\*---------------------------------------------------------------------------*/

recordType binaryInteractionParameters;
schemaVersion 1;

pair { i methylPropionate; j nHeptane; }

components  ( methylPropionate  nHeptane );
model       NRTL;

parameters
{
    i           methylPropionate;
    j           nHeptane;
    a_ij        0.00000000;
    b_ij        381.21030806;
    a_ji        0.00000000;
    b_ji        -0.54261251;
    alpha       0.30000000;
}

provenance
{
    origin        fitted;
    method        "fitParameters(T_bubble), Levenberg-Marquardt";
    methodVersion "choupoProps Choupo-dev";
    fittedInCase  "tutorials/props/curation/curate127_nrtl_methylPropionate_nHeptane";
    reviewStatus  autoPromoted;
    humanReviewed false;
    fitGrade      warning;   // DEV.md 4c C285 (C286): max |T_model - T| over the kept points, graded 1 / 2 / 4 K
    fitGradeMaxTemperatureError_K 1.8493;
    promotedBy    "bin/choupo-curate pair --promote";
    promotedDate  "2026-11-10";
    reviewReason  "regressed by bin/choupo-curate from archive-transcribed measurements; not yet read back against the articles";
    reuse         "Choupo's own regression; the measured points belong to the cited articles and are not reproduced in this record or this tree";
    fitDate       "2026-11-10";

    evidence
    (
        {
            role      fit;
            dataset   "constant/archiveExtracts/methylPropionate-nHeptane-bubble-je4009415.dat";
            doi       "10.1021/je4009415";
            sha256    "c7eb83e2dc95e5a893713ee18fede2761c1385cf1fb4f90cc1cb6bfd32c3c0ac";
            provenance measured;
            archiveFile "je4009415.xml";
            system    "methylPropionate + nHeptane";
            pressure  "101320.000000 Pa";
        }
        {
            role      fit;
            dataset   "constant/archiveExtracts/methylPropionate-nHeptane-bubble-je030117d.dat";
            doi       "10.1021/je030117d";
            sha256    "6a61bbeb74a4593cd945e8c9a97315a44ceea57c18c715f6a034e2403bca3f09";
            provenance measured;
            archiveFile "je030117d.xml";
            system    "methylPropionate + nHeptane";
            pressure  "101325.000000 Pa";
        }
    );
    fingerprint "c756cc0f5ff1272c";   // of the declaration, frozen before the fit

    //  IN-SAMPLE: the model reproducing the very points it was
    //  fitted to.  It is NOT a validation; see the block below.
    weighting     uncertainty;   // chi2 is sum ((T_model - T_exp)/U)^2, dimensionless
    chi2          450.35905939;
    rms_K         0.67119151;
    nDataPoints   64;
    identifiable  true;
    maxAbsCorr    0.99433329;

    validity
    {
        temperature { min 350.54 K; max 370.26 K; }
        pressure    { min 101320 Pa; max 101325 Pa; }
        note        "the span of the FIT evidence; outside it the pair is an extrapolation";
    }
}

validation
{
    verdict     validationRefused;

    heldOut     none;   // every declared dataset carried \`role fit\`

    acceptance  none;   // no band was declared before the fit, so no
                        // pass/fail may be read out of the residual above
}

curation
{
    rule            "DEV.md 4c C283 (amended) + C284, graded by C285 (C286)";
    evidence        allLaboratories;   // every study fitted, none held out
    objective       twoStage;
    outlierLimit    3 K;   // |T_model - T| after the least-squares stage
    outliersDropped 0;
    pointsKept      64;
    noBubblePoint   0;
    maxAbsError     1.8493 K;
    meanAbsError    0.5087 K;
    acceptance      graded;   // max |T_model - T| over the kept points, DEV.md 4c C285 (C286)
    gradeLimits_K   (1 2 4);   // upper limits of clean / warning / severe; above, refused
    grade           warning;
    oneLiquid       true;   // arm (f) over the validity span; a pair that splits ONE liquid is never promoted, whatever its grade
    verdict         accepted;
}
`,Zn=`/*---------------------------------------------------------------------------*\\
  NRTL binary interaction parameters --- methylTertPentylEther(i) + toluene(j)

  REGRESSED BY CHOUPO'S CURATION PIPELINE (bin/choupo-curate, DEV.md 4c C282;
  record docs/design/binary-pairs-from-open-measurements.md) to measured
  bubble PRESSURES at stated temperatures (P-x, DEV.md 4c C291).  The articles named under \`evidence\` are the
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
  its fitting pipeline (every laboratory fitted to the bubble pressure, outliers beyond
  20 % discarded by name, max |P_model - P|/P over the kept points GRADED
  clean / warning / severe at 5 / 10 / 20 % -- DEV.md 4c C283 amended, C285, C291;
  THIS fit: clean, 1.6894 %; one liquid across its validity span), and NO
  HUMAN HAS REVIEWED IT.  The engine says so on every run that reads it, and
  voices a warning or a severe grade beside it.
  CAUTION: this record rests on ONE temperature and ONE laboratory.
  Nothing was held out: the \`validation {}\` block says so, and the acceptance
  is the \`curation {}\` block.  A curator who reads the series back against the
  articles marks it \`reviewStatus reviewed; humanReviewed true;\`.  Revert with
  \`bin/choupo-curate revert methylTertPentylEther-toluene\`.

  REPRODUCE: run tutorials/props/curation/curate564_nrtl_methylTertPentylEther_toluene (after \`bin/choupo-curate fetch\` on it); its fit
  writes methylTertPentylEther-toluene.proposal.dat, which bin/curate/check_regressed_pairs.py holds
  equal to this record.
\\*---------------------------------------------------------------------------*/

recordType binaryInteractionParameters;
schemaVersion 1;

pair { i methylTertPentylEther; j toluene; }

components  ( methylTertPentylEther  toluene );
model       NRTL;

parameters
{
    i           methylTertPentylEther;
    j           toluene;
    a_ij        0.00000000;
    b_ij        577.13652625;
    a_ji        0.00000000;
    b_ji        -321.54488325;
    alpha       0.30000000;
}

provenance
{
    origin        fitted;
    method        "fitParameters(P_bubble), Levenberg-Marquardt";
    methodVersion "choupoProps Choupo-dev";
    fittedInCase  "tutorials/props/curation/curate564_nrtl_methylTertPentylEther_toluene";
    reviewStatus  autoPromoted;
    humanReviewed false;
    fitGrade      clean;   // DEV.md 4c C285 (C291): max |P_model - P|/P over the kept points, graded 5 / 10 / 20 %
    fitGradeMaxRelativeError_pct 1.6894;
    promotedBy    "bin/curate/pairs_px.py promote";
    promotedDate  "2026-11-10";
    reviewReason  "regressed by bin/choupo-curate from archive-transcribed measurements; not yet read back against the articles";
    reuse         "Choupo's own regression; the measured points belong to the cited articles and are not reproduced in this record or this tree";
    fitDate       "2026-11-10";

    evidence
    (
        {
            role      fit;
            dataset   "constant/archiveExtracts/methylTertPentylEther-toluene-bubbleP-je049867t-b8.dat";
            doi       "10.1021/je049867t";
            sha256    "f2d0b00f3253e92e83c431ab1312c345acac156cdb8de31cc2dcad573cf25bc2";
            provenance measured;
            archiveFile "je049867t.xml";
            system    "methylTertPentylEther + toluene";
        }
    );
    fingerprint "8895f4d7f25f3060";   // of the declaration, frozen before the fit

    //  IN-SAMPLE: the model reproducing the very points it was
    //  fitted to.  It is NOT a validation; see the block below.
    weighting     equal;   // chi2 is sum ((P_model - P_exp)/P_exp)^2, dimensionless
    chi2          0.00149997;
    rms_rel       0.01167737;
    nDataPoints   11;
    identifiable  true;
    maxAbsCorr    0.98485123;

    validity
    {
        temperature { min 318.15 K; max 318.15 K; }
        pressure    { min 10270 Pa; max 23740 Pa; }
        note        "the span of the FIT evidence; outside it the pair is an extrapolation";
    }
}

validation
{
    verdict     validationRefused;

    heldOut     none;   // every declared dataset carried \`role fit\`

    acceptance  none;   // no band was declared before the fit, so no
                        // pass/fail may be read out of the residual above
}

curation
{
    rule            "DEV.md 4c C291 (bubble-pressure pairs; every laboratory, graded by C285)";
    evidence        allLaboratories;   // every block fitted, none held out
    objective       twoStage;
    residual        P_bubble;
    residualScale   relative;   // (P_model - P)/P at each point's stated T
    outlierLimit_pct 20;   // |P_model - P|/P after the least-squares stage
    outliersDropped 0;
    pointsKept      11;
    noBubblePoint   0;
    maxRelError_pct 1.6894;
    meanRelError_pct 1.0286;
    acceptance      graded;   // max relative pressure error over the kept points, DEV.md 4c C285 (C291)
    gradeLimits_pct (5 10 20);   // upper limits of clean / warning / severe; above, refused
    grade           clean;
    oneLiquid       true;   // arm (f) over the validity span; a pair that splits ONE liquid is never promoted
    temperatures    1;   // distinct stated temperatures in the evidence
    laboratories    1;   // distinct articles in the evidence
    singleTemperature true;   // true: b/T was fitted at ONE temperature
    singleLaboratory  true;   // true: ONE laboratory's data, nothing to cross-check it
    verdict         accepted;
}
`,et=`/*---------------------------------------------------------------------------*\\
  NRTL binary interaction parameters --- nButanol(i) + nButylAcetate(j)

  REGRESSED BY CHOUPO'S CURATION PIPELINE (bin/choupo-curate, DEV.md 4c C282;
  record docs/design/binary-pairs-from-open-measurements.md) to measured
  bubble temperatures.  The articles named under \`evidence\` are the
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
  its fitting pipeline (every laboratory fitted, outliers beyond 3 K
  discarded by name, max |T_model - T| over the kept points GRADED
  clean / warning / severe at 1 / 2 / 4 K -- DEV.md 4c C283
  amended, C285, C286; THIS fit: clean, 0.5811 K; one liquid
  across its validity span), and NO HUMAN HAS REVIEWED IT.  The
  engine says so on every run that reads it, and voices a warning
  or a severe grade beside it.
  Nothing was held out: the \`validation {}\` block says so, and the
  acceptance is the \`curation {}\` block.  A curator who reads the series
  back against the articles marks it \`reviewStatus reviewed; humanReviewed
  true;\`.  Revert with \`bin/choupo-curate revert nButanol-nButylAcetate\`.

  REPRODUCE: run tutorials/props/curation/curate148_nrtl_nButanol_nButylAcetate (after \`bin/choupo-curate fetch\` on it); its fit
  writes nButanol-nButylAcetate.proposal.dat, which bin/curate/check_regressed_pairs.py holds
  equal to this record.
\\*---------------------------------------------------------------------------*/

recordType binaryInteractionParameters;
schemaVersion 1;

pair { i nButanol; j nButylAcetate; }

components  ( nButanol  nButylAcetate );
model       NRTL;

parameters
{
    i           nButanol;
    j           nButylAcetate;
    a_ij        0.00000000;
    b_ij        535.92551717;
    a_ji        0.00000000;
    b_ji        -226.74673571;
    alpha       0.30000000;
}

provenance
{
    origin        fitted;
    method        "fitParameters(T_bubble), Levenberg-Marquardt";
    methodVersion "choupoProps Choupo-dev";
    fittedInCase  "tutorials/props/curation/curate148_nrtl_nButanol_nButylAcetate";
    reviewStatus  autoPromoted;
    humanReviewed false;
    fitGrade      clean;   // DEV.md 4c C285 (C286): max |T_model - T| over the kept points, graded 1 / 2 / 4 K
    fitGradeMaxTemperatureError_K 0.5811;
    promotedBy    "bin/choupo-curate pair --promote";
    promotedDate  "2026-11-10";
    reviewReason  "regressed by bin/choupo-curate from archive-transcribed measurements; not yet read back against the articles";
    reuse         "Choupo's own regression; the measured points belong to the cited articles and are not reproduced in this record or this tree";
    fitDate       "2026-11-10";

    evidence
    (
        {
            role      fit;
            dataset   "constant/archiveExtracts/nButanol-nButylAcetate-bubble-je700411p.dat";
            doi       "10.1021/je700411p";
            sha256    "32ed6e15958b58bc35d7eb647d3cb4b75e9d6232ffbe7608a87c9c4b09cc34b1";
            provenance measured;
            archiveFile "je700411p.xml";
            system    "nButanol + nButylAcetate";
            pressure  "101300.000000 Pa";
        }
        {
            role      fit;
            dataset   "constant/archiveExtracts/nButanol-nButylAcetate-bubble-je5000296.dat";
            doi       "10.1021/je5000296";
            sha256    "953de8b43e0b465c895e462df1b46a6644280c4b11a771b572581ae0065757da";
            provenance measured;
            archiveFile "je5000296.xml";
            system    "nButanol + nButylAcetate";
            pressure  "101300.000000 Pa";
        }
    );
    fingerprint "3e01896e52b58c85";   // of the declaration, frozen before the fit

    //  IN-SAMPLE: the model reproducing the very points it was
    //  fitted to.  It is NOT a validation; see the block below.
    weighting     uncertainty;   // chi2 is sum ((T_model - T_exp)/U)^2, dimensionless
    chi2          66.09605344;
    rms_K         0.28619752;
    nDataPoints   28;
    identifiable  true;
    maxAbsCorr    0.99414010;

    validity
    {
        temperature { min 389.54 K; max 397.48 K; }
        pressure    { min 101300 Pa; max 101300 Pa; }
        note        "the span of the FIT evidence; outside it the pair is an extrapolation";
    }
}

validation
{
    verdict     validationRefused;

    heldOut     none;   // every declared dataset carried \`role fit\`

    acceptance  none;   // no band was declared before the fit, so no
                        // pass/fail may be read out of the residual above
}

curation
{
    rule            "DEV.md 4c C283 (amended) + C284, graded by C285 (C286)";
    evidence        allLaboratories;   // every study fitted, none held out
    objective       twoStage;
    outlierLimit    3 K;   // |T_model - T| after the least-squares stage
    outliersDropped 0;
    pointsKept      28;
    noBubblePoint   0;
    maxAbsError     0.5811 K;
    meanAbsError    0.2348 K;
    acceptance      graded;   // max |T_model - T| over the kept points, DEV.md 4c C285 (C286)
    gradeLimits_K   (1 2 4);   // upper limits of clean / warning / severe; above, refused
    grade           clean;
    oneLiquid       true;   // arm (f) over the validity span; a pair that splits ONE liquid is never promoted, whatever its grade
    verdict         accepted;
}
`,nt=`/*---------------------------------------------------------------------------*\\
  NRTL binary interaction parameters --- nButanol(i) + nDodecane(j)

  REGRESSED BY CHOUPO'S CURATION PIPELINE (bin/choupo-curate, DEV.md 4c C282;
  record docs/design/binary-pairs-from-open-measurements.md) to measured
  bubble PRESSURES at stated temperatures (P-x, DEV.md 4c C291).  The articles named under \`evidence\` are the
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
  its fitting pipeline (every laboratory fitted to the bubble pressure, outliers beyond
  20 % discarded by name, max |P_model - P|/P over the kept points GRADED
  clean / warning / severe at 5 / 10 / 20 % -- DEV.md 4c C283 amended, C285, C291;
  THIS fit: clean, 4.1678 %; one liquid across its validity span), and NO
  HUMAN HAS REVIEWED IT.  The engine says so on every run that reads it, and
  voices a warning or a severe grade beside it.
  CAUTION: this record rests on ONE temperature and ONE laboratory.
  Nothing was held out: the \`validation {}\` block says so, and the acceptance
  is the \`curation {}\` block.  A curator who reads the series back against the
  articles marks it \`reviewStatus reviewed; humanReviewed true;\`.  Revert with
  \`bin/choupo-curate revert nButanol-nDodecane\`.

  REPRODUCE: run tutorials/props/curation/curate546_nrtl_nButanol_nDodecane (after \`bin/choupo-curate fetch\` on it); its fit
  writes nButanol-nDodecane.proposal.dat, which bin/curate/check_regressed_pairs.py holds
  equal to this record.
\\*---------------------------------------------------------------------------*/

recordType binaryInteractionParameters;
schemaVersion 1;

pair { i nButanol; j nDodecane; }

components  ( nButanol  nDodecane );
model       NRTL;

parameters
{
    i           nButanol;
    j           nDodecane;
    a_ij        0.00000000;
    b_ij        308.23761450;
    a_ji        0.00000000;
    b_ji        477.22950728;
    alpha       0.30000000;
}

provenance
{
    origin        fitted;
    method        "fitParameters(P_bubble), Levenberg-Marquardt";
    methodVersion "choupoProps Choupo-dev";
    fittedInCase  "tutorials/props/curation/curate546_nrtl_nButanol_nDodecane";
    reviewStatus  autoPromoted;
    humanReviewed false;
    fitGrade      clean;   // DEV.md 4c C285 (C291): max |P_model - P|/P over the kept points, graded 5 / 10 / 20 %
    fitGradeMaxRelativeError_pct 4.1678;
    promotedBy    "bin/curate/pairs_px.py promote";
    promotedDate  "2026-11-10";
    reviewReason  "regressed by bin/choupo-curate from archive-transcribed measurements; not yet read back against the articles";
    reuse         "Choupo's own regression; the measured points belong to the cited articles and are not reproduced in this record or this tree";
    fitDate       "2026-11-10";

    evidence
    (
        {
            role      fit;
            dataset   "constant/archiveExtracts/nButanol-nDodecane-bubbleP-je200840e-b8.dat";
            doi       "10.1021/je200840e";
            sha256    "2426b562d0d40fb4f309ec00281df6ba258d2ddf7e75d7e4616c16757f76bbba";
            provenance measured;
            archiveFile "je200840e.xml";
            system    "nButanol + nDodecane";
        }
    );
    fingerprint "93cda8589d0be2af";   // of the declaration, frozen before the fit

    //  IN-SAMPLE: the model reproducing the very points it was
    //  fitted to.  It is NOT a validation; see the block below.
    weighting     equal;   // chi2 is sum ((P_model - P_exp)/P_exp)^2, dimensionless
    chi2          0.02069515;
    rms_rel       0.02936491;
    nDataPoints   24;
    identifiable  true;
    maxAbsCorr    0.90161381;

    validity
    {
        temperature { min 313.15 K; max 313.15 K; }
        pressure    { min 1612 Pa; max 2415 Pa; }
        note        "the span of the FIT evidence; outside it the pair is an extrapolation";
    }
}

validation
{
    verdict     validationRefused;

    heldOut     none;   // every declared dataset carried \`role fit\`

    acceptance  none;   // no band was declared before the fit, so no
                        // pass/fail may be read out of the residual above
}

curation
{
    rule            "DEV.md 4c C291 (bubble-pressure pairs; every laboratory, graded by C285)";
    evidence        allLaboratories;   // every block fitted, none held out
    objective       twoStage;
    residual        P_bubble;
    residualScale   relative;   // (P_model - P)/P at each point's stated T
    outlierLimit_pct 20;   // |P_model - P|/P after the least-squares stage
    outliersDropped 0;
    pointsKept      24;
    noBubblePoint   0;
    maxRelError_pct 4.1678;
    meanRelError_pct 2.6200;
    acceptance      graded;   // max relative pressure error over the kept points, DEV.md 4c C285 (C291)
    gradeLimits_pct (5 10 20);   // upper limits of clean / warning / severe; above, refused
    grade           clean;
    oneLiquid       true;   // arm (f) over the validity span; a pair that splits ONE liquid is never promoted
    temperatures    1;   // distinct stated temperatures in the evidence
    laboratories    1;   // distinct articles in the evidence
    singleTemperature true;   // true: b/T was fitted at ONE temperature
    singleLaboratory  true;   // true: ONE laboratory's data, nothing to cross-check it
    verdict         accepted;
}
`,tt=`/*---------------------------------------------------------------------------*\\
  NRTL binary interaction parameters --- nButanol(i) + pXylene(j)

  REGRESSED BY CHOUPO'S CURATION PIPELINE (bin/choupo-curate, DEV.md 4c C282;
  record docs/design/binary-pairs-from-open-measurements.md) to measured
  bubble temperatures.  The articles named under \`evidence\` are the
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
  its fitting pipeline (every laboratory fitted, outliers beyond 3 K
  discarded by name, max |T_model - T| over the kept points GRADED
  clean / warning / severe at 1 / 2 / 4 K -- DEV.md 4c C283
  amended, C285, C286; THIS fit: severe, 2.0599 K; one liquid
  across its validity span), and NO HUMAN HAS REVIEWED IT.  The
  engine says so on every run that reads it, and voices a warning
  or a severe grade beside it.
  Nothing was held out: the \`validation {}\` block says so, and the
  acceptance is the \`curation {}\` block.  A curator who reads the series
  back against the articles marks it \`reviewStatus reviewed; humanReviewed
  true;\`.  Revert with \`bin/choupo-curate revert nButanol-pXylene\`.

  REPRODUCE: run tutorials/props/curation/curate140_nrtl_nButanol_pXylene (after \`bin/choupo-curate fetch\` on it); its fit
  writes nButanol-pXylene.proposal.dat, which bin/curate/check_regressed_pairs.py holds
  equal to this record.
\\*---------------------------------------------------------------------------*/

recordType binaryInteractionParameters;
schemaVersion 1;

pair { i nButanol; j pXylene; }

components  ( nButanol  pXylene );
model       NRTL;

parameters
{
    i           nButanol;
    j           pXylene;
    a_ij        0.00000000;
    b_ij        248.22630535;
    a_ji        0.00000000;
    b_ji        191.82566272;
    alpha       0.30000000;
}

provenance
{
    origin        fitted;
    method        "fitParameters(T_bubble), Levenberg-Marquardt";
    methodVersion "choupoProps Choupo-dev";
    fittedInCase  "tutorials/props/curation/curate140_nrtl_nButanol_pXylene";
    reviewStatus  autoPromoted;
    humanReviewed false;
    fitGrade      severe;   // DEV.md 4c C285 (C286): max |T_model - T| over the kept points, graded 1 / 2 / 4 K
    fitGradeMaxTemperatureError_K 2.0599;
    promotedBy    "bin/choupo-curate pair --promote";
    promotedDate  "2026-11-10";
    reviewReason  "regressed by bin/choupo-curate from archive-transcribed measurements; not yet read back against the articles";
    reuse         "Choupo's own regression; the measured points belong to the cited articles and are not reproduced in this record or this tree";
    fitDate       "2026-11-10";

    evidence
    (
        {
            role      fit;
            dataset   "constant/archiveExtracts/nButanol-pXylene-bubble-je201053v.dat";
            doi       "10.1021/je201053v";
            sha256    "0ff44efea037860210a7db02c91a41dfe92cd2753e01c3cb56a73c4948c2684c";
            provenance measured;
            archiveFile "je201053v.xml";
            system    "nButanol + pXylene";
            pressure  "101330.000000 Pa";
        }
        {
            role      fit;
            dataset   "constant/archiveExtracts/nButanol-pXylene-bubble-s10765-006-0018-5.dat";
            doi       "10.1007/s10765-006-0018-5";
            sha256    "efe81b3dc411b2289f7d7f8f92efab145ff8222321ef98910e86cce2d4e8c02c";
            provenance measured;
            archiveFile "s10765-006-0018-5.xml";
            system    "nButanol + pXylene";
            pressure  "97300.000000 Pa";
        }
    );
    fingerprint "a3955337076e6895";   // of the declaration, frozen before the fit

    //  IN-SAMPLE: the model reproducing the very points it was
    //  fitted to.  It is NOT a validation; see the block below.
    weighting     uncertainty;   // chi2 is sum ((T_model - T_exp)/U)^2, dimensionless
    chi2          85.42765507;
    rms_K         0.86938675;
    nDataPoints   34;
    identifiable  true;
    maxAbsCorr    0.99269992;

    validity
    {
        temperature { min 388.94 K; max 407.14 K; }
        pressure    { min 97300 Pa; max 101330 Pa; }
        note        "the span of the FIT evidence; outside it the pair is an extrapolation";
    }
}

validation
{
    verdict     validationRefused;

    heldOut     none;   // every declared dataset carried \`role fit\`

    acceptance  none;   // no band was declared before the fit, so no
                        // pass/fail may be read out of the residual above
}

curation
{
    rule            "DEV.md 4c C283 (amended) + C284, graded by C285 (C286)";
    evidence        allLaboratories;   // every study fitted, none held out
    objective       twoStage;
    outlierLimit    3 K;   // |T_model - T| after the least-squares stage
    outliersDropped 0;
    pointsKept      34;
    noBubblePoint   0;
    maxAbsError     2.0599 K;
    meanAbsError    0.7094 K;
    acceptance      graded;   // max |T_model - T| over the kept points, DEV.md 4c C285 (C286)
    gradeLimits_K   (1 2 4);   // upper limits of clean / warning / severe; above, refused
    grade           severe;
    oneLiquid       true;   // arm (f) over the validity span; a pair that splits ONE liquid is never promoted, whatever its grade
    verdict         accepted;
}
`,at=`/*---------------------------------------------------------------------------*\\
  NRTL binary interaction parameters --- nButanol(i) + toluene(j)

  REGRESSED BY CHOUPO'S CURATION PIPELINE (bin/choupo-curate, DEV.md 4c C282;
  record docs/design/binary-pairs-from-open-measurements.md) to measured
  bubble PRESSURES at stated temperatures (P-x, DEV.md 4c C291).  The articles named under \`evidence\` are the
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
  its fitting pipeline (every laboratory fitted to the bubble pressure, outliers beyond
  20 % discarded by name, max |P_model - P|/P over the kept points GRADED
  clean / warning / severe at 5 / 10 / 20 % -- DEV.md 4c C283 amended, C285, C291;
  THIS fit: clean, 2.6086 %; one liquid across its validity span), and NO
  HUMAN HAS REVIEWED IT.  The engine says so on every run that reads it, and
  voices a warning or a severe grade beside it.
  Nothing was held out: the \`validation {}\` block says so, and the acceptance
  is the \`curation {}\` block.  A curator who reads the series back against the
  articles marks it \`reviewStatus reviewed; humanReviewed true;\`.  Revert with
  \`bin/choupo-curate revert nButanol-toluene\`.

  REPRODUCE: run tutorials/props/curation/curate508_nrtl_nButanol_toluene (after \`bin/choupo-curate fetch\` on it); its fit
  writes nButanol-toluene.proposal.dat, which bin/curate/check_regressed_pairs.py holds
  equal to this record.
\\*---------------------------------------------------------------------------*/

recordType binaryInteractionParameters;
schemaVersion 1;

pair { i nButanol; j toluene; }

components  ( nButanol  toluene );
model       NRTL;

parameters
{
    i           nButanol;
    j           toluene;
    a_ij        0.00000000;
    b_ij        43.15752391;
    a_ji        0.00000000;
    b_ji        567.11675283;
    alpha       0.30000000;
}

provenance
{
    origin        fitted;
    method        "fitParameters(P_bubble), Levenberg-Marquardt";
    methodVersion "choupoProps Choupo-dev";
    fittedInCase  "tutorials/props/curation/curate508_nrtl_nButanol_toluene";
    reviewStatus  autoPromoted;
    humanReviewed false;
    fitGrade      clean;   // DEV.md 4c C285 (C291): max |P_model - P|/P over the kept points, graded 5 / 10 / 20 %
    fitGradeMaxRelativeError_pct 2.6086;
    promotedBy    "bin/curate/pairs_px.py promote";
    promotedDate  "2026-11-10";
    reviewReason  "regressed by bin/choupo-curate from archive-transcribed measurements; not yet read back against the articles";
    reuse         "Choupo's own regression; the measured points belong to the cited articles and are not reproduced in this record or this tree";
    fitDate       "2026-11-10";

    evidence
    (
        {
            role      fit;
            dataset   "constant/archiveExtracts/nButanol-toluene-bubbleP-je200840e-b10.dat";
            doi       "10.1021/je200840e";
            sha256    "2426b562d0d40fb4f309ec00281df6ba258d2ddf7e75d7e4616c16757f76bbba";
            provenance measured;
            archiveFile "je200840e.xml";
            system    "nButanol + toluene";
        }
        {
            role      fit;
            dataset   "constant/archiveExtracts/nButanol-toluene-bubbleP-j.jct.2004.01.001-b19.dat";
            doi       "10.1016/j.jct.2004.01.001";
            sha256    "c36869b5255205e6fc68ce6d0363667c9aa8b7994ca9e1040ea169089fe65a21";
            provenance measured;
            archiveFile "j.jct.2004.01.001.xml";
            system    "nButanol + toluene";
        }
    );
    fingerprint "be9a959db361e005";   // of the declaration, frozen before the fit

    //  IN-SAMPLE: the model reproducing the very points it was
    //  fitted to.  It is NOT a validation; see the block below.
    weighting     equal;   // chi2 is sum ((P_model - P_exp)/P_exp)^2, dimensionless
    chi2          0.00693592;
    rms_rel       0.01351015;
    nDataPoints   38;
    identifiable  true;
    maxAbsCorr    0.95166563;

    validity
    {
        temperature { min 308.15 K; max 313.15 K; }
        pressure    { min 2490 Pa; max 8394 Pa; }
        note        "the span of the FIT evidence; outside it the pair is an extrapolation";
    }
}

validation
{
    verdict     validationRefused;

    heldOut     none;   // every declared dataset carried \`role fit\`

    acceptance  none;   // no band was declared before the fit, so no
                        // pass/fail may be read out of the residual above
}

curation
{
    rule            "DEV.md 4c C291 (bubble-pressure pairs; every laboratory, graded by C285)";
    evidence        allLaboratories;   // every block fitted, none held out
    objective       twoStage;
    residual        P_bubble;
    residualScale   relative;   // (P_model - P)/P at each point's stated T
    outlierLimit_pct 20;   // |P_model - P|/P after the least-squares stage
    outliersDropped 0;
    pointsKept      38;
    noBubblePoint   0;
    maxRelError_pct 2.6086;
    meanRelError_pct 1.1280;
    acceptance      graded;   // max relative pressure error over the kept points, DEV.md 4c C285 (C291)
    gradeLimits_pct (5 10 20);   // upper limits of clean / warning / severe; above, refused
    grade           clean;
    oneLiquid       true;   // arm (f) over the validity span; a pair that splits ONE liquid is never promoted
    temperatures    2;   // distinct stated temperatures in the evidence
    laboratories    2;   // distinct articles in the evidence
    singleTemperature false;   // true: b/T was fitted at ONE temperature
    singleLaboratory  false;   // true: ONE laboratory's data, nothing to cross-check it
    verdict         accepted;
}
`,rt=`/*---------------------------------------------------------------------------*\\
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
`,it=`/*---------------------------------------------------------------------------*\\
  NRTL binary interaction parameters --- nDecane(i) + oXylene(j)

  REGRESSED BY CHOUPO'S CURATION PIPELINE (bin/choupo-curate, DEV.md 4c C282;
  record docs/design/binary-pairs-from-open-measurements.md) to measured
  bubble temperatures.  The articles named under \`evidence\` are the
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
  its fitting pipeline (every laboratory fitted, outliers beyond 3 K
  discarded by name, max |T_model - T| over the kept points GRADED
  clean / warning / severe at 1 / 2 / 4 K -- DEV.md 4c C283
  amended, C285, C286; THIS fit: severe, 2.6988 K; one liquid
  across its validity span), and NO HUMAN HAS REVIEWED IT.  The
  engine says so on every run that reads it, and voices a warning
  or a severe grade beside it.
  Nothing was held out: the \`validation {}\` block says so, and the
  acceptance is the \`curation {}\` block.  A curator who reads the series
  back against the articles marks it \`reviewStatus reviewed; humanReviewed
  true;\`.  Revert with \`bin/choupo-curate revert nDecane-oXylene\`.

  REPRODUCE: run tutorials/props/curation/curate162_nrtl_nDecane_oXylene (after \`bin/choupo-curate fetch\` on it); its fit
  writes nDecane-oXylene.proposal.dat, which bin/curate/check_regressed_pairs.py holds
  equal to this record.
\\*---------------------------------------------------------------------------*/

recordType binaryInteractionParameters;
schemaVersion 1;

pair { i nDecane; j oXylene; }

components  ( nDecane  oXylene );
model       NRTL;

parameters
{
    i           nDecane;
    j           oXylene;
    a_ij        0.00000000;
    b_ij        -292.96356947;
    a_ji        0.00000000;
    b_ji        408.00042142;
    alpha       0.30000000;
}

provenance
{
    origin        fitted;
    method        "fitParameters(T_bubble), Levenberg-Marquardt";
    methodVersion "choupoProps Choupo-dev";
    fittedInCase  "tutorials/props/curation/curate162_nrtl_nDecane_oXylene";
    reviewStatus  autoPromoted;
    humanReviewed false;
    fitGrade      severe;   // DEV.md 4c C285 (C286): max |T_model - T| over the kept points, graded 1 / 2 / 4 K
    fitGradeMaxTemperatureError_K 2.6988;
    promotedBy    "bin/choupo-curate pair --promote";
    promotedDate  "2026-11-10";
    reviewReason  "regressed by bin/choupo-curate from archive-transcribed measurements; not yet read back against the articles";
    reuse         "Choupo's own regression; the measured points belong to the cited articles and are not reproduced in this record or this tree";
    fitDate       "2026-11-10";

    evidence
    (
        {
            role      fit;
            dataset   "constant/archiveExtracts/nDecane-oXylene-bubble-j.fluid.2012.09.019.dat";
            doi       "10.1016/j.fluid.2012.09.019";
            sha256    "7ab32e1e73d47ffb72cce97fbd8aed01dd70cc88c73c7e45957aadf589cfd90b";
            provenance measured;
            archiveFile "j.fluid.2012.09.019.xml";
            system    "nDecane + oXylene";
            pressure  "20000.000000 Pa";
        }
        {
            role      fit;
            dataset   "constant/archiveExtracts/nDecane-oXylene-bubble-j.fluid.2004.10.027.dat";
            doi       "10.1016/j.fluid.2004.10.027";
            sha256    "dedfec1f89c424222eb64267c206a4a687646def0a2f935f68318ea9398d71d6";
            provenance measured;
            archiveFile "j.fluid.2004.10.027.xml";
            system    "nDecane + oXylene";
            pressure  "95800.000000 Pa";
        }
    );
    fingerprint "924eceb6d619b44f";   // of the declaration, frozen before the fit

    //  IN-SAMPLE: the model reproducing the very points it was
    //  fitted to.  It is NOT a validation; see the block below.
    weighting     uncertainty;   // chi2 is sum ((T_model - T_exp)/U)^2, dimensionless
    chi2          41.63596600;
    rms_K         0.79819178;
    nDataPoints   15;
    identifiable  true;
    maxAbsCorr    0.99858148;

    validity
    {
        temperature { min 366.11 K; max 434.95 K; }
        pressure    { min 20000 Pa; max 95800 Pa; }
        note        "the span of the FIT evidence; outside it the pair is an extrapolation";
    }
}

validation
{
    verdict     validationRefused;

    heldOut     none;   // every declared dataset carried \`role fit\`

    acceptance  none;   // no band was declared before the fit, so no
                        // pass/fail may be read out of the residual above
}

curation
{
    rule            "DEV.md 4c C283 (amended) + C284, graded by C285 (C286)";
    evidence        allLaboratories;   // every study fitted, none held out
    objective       twoStage;
    outlierLimit    3 K;   // |T_model - T| after the least-squares stage
    outliersDropped 1;
    pointsKept      15;
    noBubblePoint   0;
    maxAbsError     2.6988 K;
    meanAbsError    0.4164 K;
    acceptance      graded;   // max |T_model - T| over the kept points, DEV.md 4c C285 (C286)
    gradeLimits_K   (1 2 4);   // upper limits of clean / warning / severe; above, refused
    grade           severe;
    oneLiquid       true;   // arm (f) over the validity span; a pair that splits ONE liquid is never promoted, whatever its grade
    verdict         accepted;
}
`,ot=`/*---------------------------------------------------------------------------*\\
  NRTL binary interaction parameters --- pXylene(i) + nDecane(j)

  REGRESSED BY CHOUPO'S CURATION PIPELINE (bin/choupo-curate, DEV.md 4c C282;
  record docs/design/binary-pairs-from-open-measurements.md) to measured
  bubble temperatures.  The articles named under \`evidence\` are the
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
  its fitting pipeline (every laboratory fitted, outliers beyond 3 K
  discarded by name, max |T_model - T| over the kept points GRADED
  clean / warning / severe at 1 / 2 / 4 K -- DEV.md 4c C283
  amended, C285, C286; THIS fit: warning, 1.4237 K; one liquid
  across its validity span), and NO HUMAN HAS REVIEWED IT.  The
  engine says so on every run that reads it, and voices a warning
  or a severe grade beside it.
  Nothing was held out: the \`validation {}\` block says so, and the
  acceptance is the \`curation {}\` block.  A curator who reads the series
  back against the articles marks it \`reviewStatus reviewed; humanReviewed
  true;\`.  Revert with \`bin/choupo-curate revert nDecane-pXylene\`.

  REPRODUCE: run tutorials/props/curation/curate114_nrtl_pXylene_nDecane (after \`bin/choupo-curate fetch\` on it); its fit
  writes nDecane-pXylene.proposal.dat, which bin/curate/check_regressed_pairs.py holds
  equal to this record.
\\*---------------------------------------------------------------------------*/

recordType binaryInteractionParameters;
schemaVersion 1;

pair { i pXylene; j nDecane; }

components  ( pXylene  nDecane );
model       NRTL;

parameters
{
    i           pXylene;
    j           nDecane;
    a_ij        0.00000000;
    b_ij        550.58091561;
    a_ji        0.00000000;
    b_ji        -378.91607431;
    alpha       0.30000000;
}

provenance
{
    origin        fitted;
    method        "fitParameters(T_bubble), Levenberg-Marquardt";
    methodVersion "choupoProps Choupo-dev";
    fittedInCase  "tutorials/props/curation/curate114_nrtl_pXylene_nDecane";
    reviewStatus  autoPromoted;
    humanReviewed false;
    fitGrade      warning;   // DEV.md 4c C285 (C286): max |T_model - T| over the kept points, graded 1 / 2 / 4 K
    fitGradeMaxTemperatureError_K 1.4237;
    promotedBy    "bin/choupo-curate pair --promote";
    promotedDate  "2026-11-10";
    reviewReason  "regressed by bin/choupo-curate from archive-transcribed measurements; not yet read back against the articles";
    reuse         "Choupo's own regression; the measured points belong to the cited articles and are not reproduced in this record or this tree";
    fitDate       "2026-11-10";

    evidence
    (
        {
            role      fit;
            dataset   "constant/archiveExtracts/pXylene-nDecane-bubble-je0501585.dat";
            doi       "10.1021/je0501585";
            sha256    "c8f3887eb200b38ce0f63cff8de869e3c46f9f60f088b9e18b2805b1196cffd0";
            provenance measured;
            archiveFile "je0501585.xml";
            system    "pXylene + nDecane";
            pressure  "97300.000000 Pa";
        }
        {
            role      fit;
            dataset   "constant/archiveExtracts/pXylene-nDecane-bubble-j.fluid.2012.09.019.dat";
            doi       "10.1016/j.fluid.2012.09.019";
            sha256    "7ab32e1e73d47ffb72cce97fbd8aed01dd70cc88c73c7e45957aadf589cfd90b";
            provenance measured;
            archiveFile "j.fluid.2012.09.019.xml";
            system    "pXylene + nDecane";
            pressure  "20000.000000 Pa";
        }
        {
            role      fit;
            dataset   "constant/archiveExtracts/pXylene-nDecane-bubble-j.fluid.2004.10.027.dat";
            doi       "10.1016/j.fluid.2004.10.027";
            sha256    "dedfec1f89c424222eb64267c206a4a687646def0a2f935f68318ea9398d71d6";
            provenance measured;
            archiveFile "j.fluid.2004.10.027.xml";
            system    "pXylene + nDecane";
            pressure  "95800.000000 Pa";
        }
    );
    fingerprint "5153c4c1bcab46ec";   // of the declaration, frozen before the fit

    //  IN-SAMPLE: the model reproducing the very points it was
    //  fitted to.  It is NOT a validation; see the block below.
    weighting     uncertainty;   // chi2 is sum ((T_model - T_exp)/U)^2, dimensionless
    chi2          17.62329186;
    rms_K         0.48805788;
    nDataPoints   28;
    identifiable  true;
    maxAbsCorr    0.99570325;

    validity
    {
        temperature { min 360.62 K; max 436.35 K; }
        pressure    { min 20000 Pa; max 97300 Pa; }
        note        "the span of the FIT evidence; outside it the pair is an extrapolation";
    }
}

validation
{
    verdict     validationRefused;

    heldOut     none;   // every declared dataset carried \`role fit\`

    acceptance  none;   // no band was declared before the fit, so no
                        // pass/fail may be read out of the residual above
}

curation
{
    rule            "DEV.md 4c C283 (amended) + C284, graded by C285 (C286)";
    evidence        allLaboratories;   // every study fitted, none held out
    objective       twoStage;
    outlierLimit    3 K;   // |T_model - T| after the least-squares stage
    outliersDropped 7;
    pointsKept      28;
    noBubblePoint   0;
    maxAbsError     1.4237 K;
    meanAbsError    0.3336 K;
    acceptance      graded;   // max |T_model - T| over the kept points, DEV.md 4c C285 (C286)
    gradeLimits_K   (1 2 4);   // upper limits of clean / warning / severe; above, refused
    grade           warning;
    oneLiquid       true;   // arm (f) over the validity span; a pair that splits ONE liquid is never promoted, whatever its grade
    verdict         accepted;
}
`,st=`/*---------------------------------------------------------------------------*\\
  NRTL binary interaction parameters --- nHeptane(i) + nNDimethylacetamide(j)

  REGRESSED BY CHOUPO'S CURATION PIPELINE (bin/choupo-curate, DEV.md 4c C282;
  record docs/design/binary-pairs-from-open-measurements.md) to measured
  bubble PRESSURES at stated temperatures (P-x, DEV.md 4c C291).  The articles named under \`evidence\` are the
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
  its fitting pipeline (every laboratory fitted to the bubble pressure, outliers beyond
  20 % discarded by name, max |P_model - P|/P over the kept points GRADED
  clean / warning / severe at 5 / 10 / 20 % -- DEV.md 4c C283 amended, C285, C291;
  THIS fit: clean, 2.1537 %; one liquid across its validity span), and NO
  HUMAN HAS REVIEWED IT.  The engine says so on every run that reads it, and
  voices a warning or a severe grade beside it.
  CAUTION: this record rests on ONE temperature and ONE laboratory.
  Nothing was held out: the \`validation {}\` block says so, and the acceptance
  is the \`curation {}\` block.  A curator who reads the series back against the
  articles marks it \`reviewStatus reviewed; humanReviewed true;\`.  Revert with
  \`bin/choupo-curate revert nHeptane-nNDimethylacetamide\`.

  REPRODUCE: run tutorials/props/curation/curate506_nrtl_nHeptane_nNDimethylacetamide (after \`bin/choupo-curate fetch\` on it); its fit
  writes nHeptane-nNDimethylacetamide.proposal.dat, which bin/curate/check_regressed_pairs.py holds
  equal to this record.
\\*---------------------------------------------------------------------------*/

recordType binaryInteractionParameters;
schemaVersion 1;

pair { i nHeptane; j nNDimethylacetamide; }

components  ( nHeptane  nNDimethylacetamide );
model       NRTL;

parameters
{
    i           nHeptane;
    j           nNDimethylacetamide;
    a_ij        0.00000000;
    b_ij        449.19170991;
    a_ji        0.00000000;
    b_ji        415.54207583;
    alpha       0.30000000;
}

provenance
{
    origin        fitted;
    method        "fitParameters(P_bubble), Levenberg-Marquardt";
    methodVersion "choupoProps Choupo-dev";
    fittedInCase  "tutorials/props/curation/curate506_nrtl_nHeptane_nNDimethylacetamide";
    reviewStatus  autoPromoted;
    humanReviewed false;
    fitGrade      clean;   // DEV.md 4c C285 (C291): max |P_model - P|/P over the kept points, graded 5 / 10 / 20 %
    fitGradeMaxRelativeError_pct 2.1537;
    promotedBy    "bin/curate/pairs_px.py promote";
    promotedDate  "2026-11-10";
    reviewReason  "regressed by bin/choupo-curate from archive-transcribed measurements; not yet read back against the articles";
    reuse         "Choupo's own regression; the measured points belong to the cited articles and are not reproduced in this record or this tree";
    fitDate       "2026-11-10";

    evidence
    (
        {
            role      fit;
            dataset   "constant/archiveExtracts/nHeptane-nNDimethylacetamide-bubbleP-acs.jced.7b00119-b13.dat";
            doi       "10.1021/acs.jced.7b00119";
            sha256    "c57dbb0a0bf3405a8a631fa0f45bc2682f03b5dd1ee020e8b3f07b3a0dafe997";
            provenance measured;
            archiveFile "acs.jced.7b00119.xml";
            system    "nHeptane + nNDimethylacetamide";
        }
    );
    fingerprint "b880afe9fb617505";   // of the declaration, frozen before the fit

    //  IN-SAMPLE: the model reproducing the very points it was
    //  fitted to.  It is NOT a validation; see the block below.
    weighting     equal;   // chi2 is sum ((P_model - P_exp)/P_exp)^2, dimensionless
    chi2          0.00785214;
    rms_rel       0.01401084;
    nDataPoints   40;
    identifiable  true;
    maxAbsCorr    0.91399645;

    validity
    {
        temperature { min 353.15 K; max 353.15 K; }
        pressure    { min 6240 Pa; max 57080 Pa; }
        note        "the span of the FIT evidence; outside it the pair is an extrapolation";
    }
}

validation
{
    verdict     validationRefused;

    heldOut     none;   // every declared dataset carried \`role fit\`

    acceptance  none;   // no band was declared before the fit, so no
                        // pass/fail may be read out of the residual above
}

curation
{
    rule            "DEV.md 4c C291 (bubble-pressure pairs; every laboratory, graded by C285)";
    evidence        allLaboratories;   // every block fitted, none held out
    objective       twoStage;
    residual        P_bubble;
    residualScale   relative;   // (P_model - P)/P at each point's stated T
    outlierLimit_pct 20;   // |P_model - P|/P after the least-squares stage
    outliersDropped 0;
    pointsKept      40;
    noBubblePoint   0;
    maxRelError_pct 2.1537;
    meanRelError_pct 1.2460;
    acceptance      graded;   // max relative pressure error over the kept points, DEV.md 4c C285 (C291)
    gradeLimits_pct (5 10 20);   // upper limits of clean / warning / severe; above, refused
    grade           clean;
    oneLiquid       true;   // arm (f) over the validity span; a pair that splits ONE liquid is never promoted
    temperatures    1;   // distinct stated temperatures in the evidence
    laboratories    1;   // distinct articles in the evidence
    singleTemperature true;   // true: b/T was fitted at ONE temperature
    singleLaboratory  true;   // true: ONE laboratory's data, nothing to cross-check it
    verdict         accepted;
}
`,dt=`/*---------------------------------------------------------------------------*\\
  NRTL binary interaction parameters --- tertButylEthylEther(i) + nHeptane(j)

  REGRESSED BY CHOUPO'S CURATION PIPELINE (bin/choupo-curate, DEV.md 4c C282;
  record docs/design/binary-pairs-from-open-measurements.md) to measured
  bubble PRESSURES at stated temperatures (P-x, DEV.md 4c C291).  The articles named under \`evidence\` are the
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
  its fitting pipeline (every laboratory fitted to the bubble pressure, outliers beyond
  20 % discarded by name, max |P_model - P|/P over the kept points GRADED
  clean / warning / severe at 5 / 10 / 20 % -- DEV.md 4c C283 amended, C285, C291;
  THIS fit: clean, 1.6922 %; one liquid across its validity span), and NO
  HUMAN HAS REVIEWED IT.  The engine says so on every run that reads it, and
  voices a warning or a severe grade beside it.
  CAUTION: this record rests on ONE temperature and ONE laboratory.
  Nothing was held out: the \`validation {}\` block says so, and the acceptance
  is the \`curation {}\` block.  A curator who reads the series back against the
  articles marks it \`reviewStatus reviewed; humanReviewed true;\`.  Revert with
  \`bin/choupo-curate revert nHeptane-tertButylEthylEther\`.

  REPRODUCE: run tutorials/props/curation/curate518_nrtl_tertButylEthylEther_nHeptane (after \`bin/choupo-curate fetch\` on it); its fit
  writes nHeptane-tertButylEthylEther.proposal.dat, which bin/curate/check_regressed_pairs.py holds
  equal to this record.
\\*---------------------------------------------------------------------------*/

recordType binaryInteractionParameters;
schemaVersion 1;

pair { i tertButylEthylEther; j nHeptane; }

components  ( tertButylEthylEther  nHeptane );
model       NRTL;

parameters
{
    i           tertButylEthylEther;
    j           nHeptane;
    a_ij        0.00000000;
    b_ij        543.56851072;
    a_ji        0.00000000;
    b_ji        -294.80251062;
    alpha       0.30000000;
}

provenance
{
    origin        fitted;
    method        "fitParameters(P_bubble), Levenberg-Marquardt";
    methodVersion "choupoProps Choupo-dev";
    fittedInCase  "tutorials/props/curation/curate518_nrtl_tertButylEthylEther_nHeptane";
    reviewStatus  autoPromoted;
    humanReviewed false;
    fitGrade      clean;   // DEV.md 4c C285 (C291): max |P_model - P|/P over the kept points, graded 5 / 10 / 20 %
    fitGradeMaxRelativeError_pct 1.6922;
    promotedBy    "bin/curate/pairs_px.py promote";
    promotedDate  "2026-11-10";
    reviewReason  "regressed by bin/choupo-curate from archive-transcribed measurements; not yet read back against the articles";
    reuse         "Choupo's own regression; the measured points belong to the cited articles and are not reproduced in this record or this tree";
    fitDate       "2026-11-10";

    evidence
    (
        {
            role      fit;
            dataset   "constant/archiveExtracts/tertButylEthylEther-nHeptane-bubbleP-je0602115-b3.dat";
            doi       "10.1021/je0602115";
            sha256    "e6eee84cb361b42d6436453158c10f621ec2b02a5177cd1641dcfef311875b7d";
            provenance measured;
            archiveFile "je0602115.xml";
            system    "tertButylEthylEther + nHeptane";
        }
    );
    fingerprint "1962c00b74016193";   // of the declaration, frozen before the fit

    //  IN-SAMPLE: the model reproducing the very points it was
    //  fitted to.  It is NOT a validation; see the block below.
    weighting     equal;   // chi2 is sum ((P_model - P_exp)/P_exp)^2, dimensionless
    chi2          0.00391576;
    rms_rel       0.01227218;
    nDataPoints   26;
    identifiable  true;
    maxAbsCorr    0.99095969;

    validity
    {
        temperature { min 313.15 K; max 313.15 K; }
        pressure    { min 13602 Pa; max 30695 Pa; }
        note        "the span of the FIT evidence; outside it the pair is an extrapolation";
    }
}

validation
{
    verdict     validationRefused;

    heldOut     none;   // every declared dataset carried \`role fit\`

    acceptance  none;   // no band was declared before the fit, so no
                        // pass/fail may be read out of the residual above
}

curation
{
    rule            "DEV.md 4c C291 (bubble-pressure pairs; every laboratory, graded by C285)";
    evidence        allLaboratories;   // every block fitted, none held out
    objective       twoStage;
    residual        P_bubble;
    residualScale   relative;   // (P_model - P)/P at each point's stated T
    outlierLimit_pct 20;   // |P_model - P|/P after the least-squares stage
    outliersDropped 0;
    pointsKept      26;
    noBubblePoint   0;
    maxRelError_pct 1.6922;
    meanRelError_pct 1.1115;
    acceptance      graded;   // max relative pressure error over the kept points, DEV.md 4c C285 (C291)
    gradeLimits_pct (5 10 20);   // upper limits of clean / warning / severe; above, refused
    grade           clean;
    oneLiquid       true;   // arm (f) over the validity span; a pair that splits ONE liquid is never promoted
    temperatures    1;   // distinct stated temperatures in the evidence
    laboratories    1;   // distinct articles in the evidence
    singleTemperature true;   // true: b/T was fitted at ONE temperature
    singleLaboratory  true;   // true: ONE laboratory's data, nothing to cross-check it
    verdict         accepted;
}
`,ct=`/*---------------------------------------------------------------------------*\\
  NRTL binary interaction parameters --- thiophene(i) + nHeptane(j)

  REGRESSED BY CHOUPO'S CURATION PIPELINE (bin/choupo-curate, DEV.md 4c C282;
  record docs/design/binary-pairs-from-open-measurements.md) to measured
  bubble temperatures.  The articles named under \`evidence\` are the
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
  its fitting pipeline (every laboratory fitted, outliers beyond 3 K
  discarded by name, max |T_model - T| over the kept points GRADED
  clean / warning / severe at 1 / 2 / 4 K -- DEV.md 4c C283
  amended, C285, C286; THIS fit: clean, 0.3944 K; one liquid
  across its validity span), and NO HUMAN HAS REVIEWED IT.  The
  engine says so on every run that reads it, and voices a warning
  or a severe grade beside it.
  Nothing was held out: the \`validation {}\` block says so, and the
  acceptance is the \`curation {}\` block.  A curator who reads the series
  back against the articles marks it \`reviewStatus reviewed; humanReviewed
  true;\`.  Revert with \`bin/choupo-curate revert nHeptane-thiophene\`.

  REPRODUCE: run tutorials/props/curation/curate131_nrtl_thiophene_nHeptane (after \`bin/choupo-curate fetch\` on it); its fit
  writes nHeptane-thiophene.proposal.dat, which bin/curate/check_regressed_pairs.py holds
  equal to this record.
\\*---------------------------------------------------------------------------*/

recordType binaryInteractionParameters;
schemaVersion 1;

pair { i thiophene; j nHeptane; }

components  ( thiophene  nHeptane );
model       NRTL;

parameters
{
    i           thiophene;
    j           nHeptane;
    a_ij        0.00000000;
    b_ij        675.15385554;
    a_ji        0.00000000;
    b_ji        -252.30338276;
    alpha       0.30000000;
}

provenance
{
    origin        fitted;
    method        "fitParameters(T_bubble), Levenberg-Marquardt";
    methodVersion "choupoProps Choupo-dev";
    fittedInCase  "tutorials/props/curation/curate131_nrtl_thiophene_nHeptane";
    reviewStatus  autoPromoted;
    humanReviewed false;
    fitGrade      clean;   // DEV.md 4c C285 (C286): max |T_model - T| over the kept points, graded 1 / 2 / 4 K
    fitGradeMaxTemperatureError_K 0.3944;
    promotedBy    "bin/choupo-curate pair --promote";
    promotedDate  "2026-11-10";
    reviewReason  "regressed by bin/choupo-curate from archive-transcribed measurements; not yet read back against the articles";
    reuse         "Choupo's own regression; the measured points belong to the cited articles and are not reproduced in this record or this tree";
    fitDate       "2026-11-10";

    evidence
    (
        {
            role      fit;
            dataset   "constant/archiveExtracts/thiophene-nHeptane-bubble-j.fluid.2011.11.020.dat";
            doi       "10.1016/j.fluid.2011.11.020";
            sha256    "6301bf2dc394444fec040ca5b2ecc6ae0c1d1bddc20b3f56df5beb070505b34e";
            provenance measured;
            archiveFile "j.fluid.2011.11.020.xml";
            system    "thiophene + nHeptane";
            pressure  "101330.000000 Pa";
        }
    );
    fingerprint "fde22c8320b01453";   // of the declaration, frozen before the fit

    //  IN-SAMPLE: the model reproducing the very points it was
    //  fitted to.  It is NOT a validation; see the block below.
    weighting     uncertainty;   // chi2 is sum ((T_model - T_exp)/U)^2, dimensionless
    chi2          129.34431174;
    rms_K         0.26127074;
    nDataPoints   18;
    identifiable  true;
    maxAbsCorr    0.98250319;

    validity
    {
        temperature { min 356.34 K; max 368.69 K; }
        pressure    { min 101330 Pa; max 101330 Pa; }
        note        "the span of the FIT evidence; outside it the pair is an extrapolation";
    }
}

validation
{
    verdict     validationRefused;

    heldOut     none;   // every declared dataset carried \`role fit\`

    acceptance  none;   // no band was declared before the fit, so no
                        // pass/fail may be read out of the residual above
}

curation
{
    rule            "DEV.md 4c C283 (amended) + C284, graded by C285 (C286)";
    evidence        allLaboratories;   // every study fitted, none held out
    objective       twoStage;
    outlierLimit    3 K;   // |T_model - T| after the least-squares stage
    outliersDropped 0;
    pointsKept      18;
    noBubblePoint   0;
    maxAbsError     0.3944 K;
    meanAbsError    0.2392 K;
    acceptance      graded;   // max |T_model - T| over the kept points, DEV.md 4c C285 (C286)
    gradeLimits_K   (1 2 4);   // upper limits of clean / warning / severe; above, refused
    grade           clean;
    oneLiquid       true;   // arm (f) over the validity span; a pair that splits ONE liquid is never promoted, whatever its grade
    verdict         accepted;
}
`,lt=`/*---------------------------------------------------------------------------*\\
  NRTL binary interaction parameters --- nHeptane(i) + toluene(j)

  REGRESSED BY CHOUPO'S CURATION PIPELINE (bin/choupo-curate, DEV.md 4c C282;
  record docs/design/binary-pairs-from-open-measurements.md) to measured
  bubble PRESSURES at stated temperatures (P-x, DEV.md 4c C291).  The articles named under \`evidence\` are the
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
  its fitting pipeline (every laboratory fitted to the bubble pressure, outliers beyond
  20 % discarded by name, max |P_model - P|/P over the kept points GRADED
  clean / warning / severe at 5 / 10 / 20 % -- DEV.md 4c C283 amended, C285, C291;
  THIS fit: clean, 0.2774 %; one liquid across its validity span), and NO
  HUMAN HAS REVIEWED IT.  The engine says so on every run that reads it, and
  voices a warning or a severe grade beside it.
  CAUTION: this record rests on ONE temperature and ONE laboratory.
  Nothing was held out: the \`validation {}\` block says so, and the acceptance
  is the \`curation {}\` block.  A curator who reads the series back against the
  articles marks it \`reviewStatus reviewed; humanReviewed true;\`.  Revert with
  \`bin/choupo-curate revert nHeptane-toluene\`.

  REPRODUCE: run tutorials/props/curation/curate519_nrtl_nHeptane_toluene (after \`bin/choupo-curate fetch\` on it); its fit
  writes nHeptane-toluene.proposal.dat, which bin/curate/check_regressed_pairs.py holds
  equal to this record.
\\*---------------------------------------------------------------------------*/

recordType binaryInteractionParameters;
schemaVersion 1;

pair { i nHeptane; j toluene; }

components  ( nHeptane  toluene );
model       NRTL;

parameters
{
    i           nHeptane;
    j           toluene;
    a_ij        0.00000000;
    b_ij        -3.49448103;
    a_ji        0.00000000;
    b_ji        147.66206363;
    alpha       0.30000000;
}

provenance
{
    origin        fitted;
    method        "fitParameters(P_bubble), Levenberg-Marquardt";
    methodVersion "choupoProps Choupo-dev";
    fittedInCase  "tutorials/props/curation/curate519_nrtl_nHeptane_toluene";
    reviewStatus  autoPromoted;
    humanReviewed false;
    fitGrade      clean;   // DEV.md 4c C285 (C291): max |P_model - P|/P over the kept points, graded 5 / 10 / 20 %
    fitGradeMaxRelativeError_pct 0.2774;
    promotedBy    "bin/curate/pairs_px.py promote";
    promotedDate  "2026-11-10";
    reviewReason  "regressed by bin/choupo-curate from archive-transcribed measurements; not yet read back against the articles";
    reuse         "Choupo's own regression; the measured points belong to the cited articles and are not reproduced in this record or this tree";
    fitDate       "2026-11-10";

    evidence
    (
        {
            role      fit;
            dataset   "constant/archiveExtracts/nHeptane-toluene-bubbleP-je0602115-b4.dat";
            doi       "10.1021/je0602115";
            sha256    "e6eee84cb361b42d6436453158c10f621ec2b02a5177cd1641dcfef311875b7d";
            provenance measured;
            archiveFile "je0602115.xml";
            system    "nHeptane + toluene";
        }
    );
    fingerprint "c7cd8b470cdf37bb";   // of the declaration, frozen before the fit

    //  IN-SAMPLE: the model reproducing the very points it was
    //  fitted to.  It is NOT a validation; see the block below.
    weighting     equal;   // chi2 is sum ((P_model - P_exp)/P_exp)^2, dimensionless
    chi2          0.00009956;
    rms_rel       0.00195680;
    nDataPoints   26;
    identifiable  true;
    maxAbsCorr    0.99871754;

    validity
    {
        temperature { min 313.15 K; max 313.15 K; }
        pressure    { min 8322 Pa; max 12275 Pa; }
        note        "the span of the FIT evidence; outside it the pair is an extrapolation";
    }
}

validation
{
    verdict     validationRefused;

    heldOut     none;   // every declared dataset carried \`role fit\`

    acceptance  none;   // no band was declared before the fit, so no
                        // pass/fail may be read out of the residual above
}

curation
{
    rule            "DEV.md 4c C291 (bubble-pressure pairs; every laboratory, graded by C285)";
    evidence        allLaboratories;   // every block fitted, none held out
    objective       twoStage;
    residual        P_bubble;
    residualScale   relative;   // (P_model - P)/P at each point's stated T
    outlierLimit_pct 20;   // |P_model - P|/P after the least-squares stage
    outliersDropped 0;
    pointsKept      26;
    noBubblePoint   0;
    maxRelError_pct 0.2774;
    meanRelError_pct 0.1774;
    acceptance      graded;   // max relative pressure error over the kept points, DEV.md 4c C285 (C291)
    gradeLimits_pct (5 10 20);   // upper limits of clean / warning / severe; above, refused
    grade           clean;
    oneLiquid       true;   // arm (f) over the validity span; a pair that splits ONE liquid is never promoted
    temperatures    1;   // distinct stated temperatures in the evidence
    laboratories    1;   // distinct articles in the evidence
    singleTemperature true;   // true: b/T was fitted at ONE temperature
    singleLaboratory  true;   // true: ONE laboratory's data, nothing to cross-check it
    verdict         accepted;
}
`,ut=`/*---------------------------------------------------------------------------*\\
  NRTL binary interaction parameters --- nHexane(i) + toluene(j)

  REGRESSED BY CHOUPO'S CURATION PIPELINE (bin/choupo-curate, DEV.md 4c C282;
  record docs/design/binary-pairs-from-open-measurements.md) to measured
  bubble PRESSURES at stated temperatures (P-x, DEV.md 4c C291).  The articles named under \`evidence\` are the
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
  its fitting pipeline (every laboratory fitted to the bubble pressure, outliers beyond
  20 % discarded by name, max |P_model - P|/P over the kept points GRADED
  clean / warning / severe at 5 / 10 / 20 % -- DEV.md 4c C283 amended, C285, C291;
  THIS fit: clean, 3.1535 %; one liquid across its validity span), and NO
  HUMAN HAS REVIEWED IT.  The engine says so on every run that reads it, and
  voices a warning or a severe grade beside it.
  CAUTION: this record rests on ONE temperature and ONE laboratory.
  Nothing was held out: the \`validation {}\` block says so, and the acceptance
  is the \`curation {}\` block.  A curator who reads the series back against the
  articles marks it \`reviewStatus reviewed; humanReviewed true;\`.  Revert with
  \`bin/choupo-curate revert nHexane-toluene\`.

  REPRODUCE: run tutorials/props/curation/curate557_nrtl_nHexane_toluene (after \`bin/choupo-curate fetch\` on it); its fit
  writes nHexane-toluene.proposal.dat, which bin/curate/check_regressed_pairs.py holds
  equal to this record.
\\*---------------------------------------------------------------------------*/

recordType binaryInteractionParameters;
schemaVersion 1;

pair { i nHexane; j toluene; }

components  ( nHexane  toluene );
model       NRTL;

parameters
{
    i           nHexane;
    j           toluene;
    a_ij        0.00000000;
    b_ij        821.21561791;
    a_ji        0.00000000;
    b_ji        -240.29141539;
    alpha       0.30000000;
}

provenance
{
    origin        fitted;
    method        "fitParameters(P_bubble), Levenberg-Marquardt";
    methodVersion "choupoProps Choupo-dev";
    fittedInCase  "tutorials/props/curation/curate557_nrtl_nHexane_toluene";
    reviewStatus  autoPromoted;
    humanReviewed false;
    fitGrade      clean;   // DEV.md 4c C285 (C291): max |P_model - P|/P over the kept points, graded 5 / 10 / 20 %
    fitGradeMaxRelativeError_pct 3.1535;
    promotedBy    "bin/curate/pairs_px.py promote";
    promotedDate  "2026-11-10";
    reviewReason  "regressed by bin/choupo-curate from archive-transcribed measurements; not yet read back against the articles";
    reuse         "Choupo's own regression; the measured points belong to the cited articles and are not reproduced in this record or this tree";
    fitDate       "2026-11-10";

    evidence
    (
        {
            role      fit;
            dataset   "constant/archiveExtracts/nHexane-toluene-bubbleP-j.tca.2019.178413-b8.dat";
            doi       "10.1016/j.tca.2019.178413";
            sha256    "3d6ee0e865534950e10a465f6dbb477ecba29456f1479f663b526dc0fa08c8af";
            provenance measured;
            archiveFile "j.tca.2019.178413.xml";
            system    "nHexane + toluene";
        }
    );
    fingerprint "ba751470eb832e1f";   // of the declaration, frozen before the fit

    //  IN-SAMPLE: the model reproducing the very points it was
    //  fitted to.  It is NOT a validation; see the block below.
    weighting     equal;   // chi2 is sum ((P_model - P_exp)/P_exp)^2, dimensionless
    chi2          0.00720117;
    rms_rel       0.02000162;
    nDataPoints   18;
    identifiable  true;
    maxAbsCorr    0.89430744;

    validity
    {
        temperature { min 313.20 K; max 313.20 K; }
        pressure    { min 8300 Pa; max 38000 Pa; }
        note        "the span of the FIT evidence; outside it the pair is an extrapolation";
    }
}

validation
{
    verdict     validationRefused;

    heldOut     none;   // every declared dataset carried \`role fit\`

    acceptance  none;   // no band was declared before the fit, so no
                        // pass/fail may be read out of the residual above
}

curation
{
    rule            "DEV.md 4c C291 (bubble-pressure pairs; every laboratory, graded by C285)";
    evidence        allLaboratories;   // every block fitted, none held out
    objective       twoStage;
    residual        P_bubble;
    residualScale   relative;   // (P_model - P)/P at each point's stated T
    outlierLimit_pct 20;   // |P_model - P|/P after the least-squares stage
    outliersDropped 0;
    pointsKept      18;
    noBubblePoint   0;
    maxRelError_pct 3.1535;
    meanRelError_pct 1.8255;
    acceptance      graded;   // max relative pressure error over the kept points, DEV.md 4c C285 (C291)
    gradeLimits_pct (5 10 20);   // upper limits of clean / warning / severe; above, refused
    grade           clean;
    oneLiquid       true;   // arm (f) over the validity span; a pair that splits ONE liquid is never promoted
    temperatures    1;   // distinct stated temperatures in the evidence
    laboratories    1;   // distinct articles in the evidence
    singleTemperature true;   // true: b/T was fitted at ONE temperature
    singleLaboratory  true;   // true: ONE laboratory's data, nothing to cross-check it
    verdict         accepted;
}
`,ht=`/*---------------------------------------------------------------------------*\\
  NRTL binary interaction parameters --- nNDimethylformamide(i) + nNDimethylacetamide(j)

  REGRESSED BY CHOUPO'S CURATION PIPELINE (bin/choupo-curate, DEV.md 4c C282;
  record docs/design/binary-pairs-from-open-measurements.md) to measured
  bubble temperatures.  The articles named under \`evidence\` are the
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
  its fitting pipeline (every laboratory fitted, outliers beyond 3 K
  discarded by name, max |T_model - T| over the kept points GRADED
  clean / warning / severe at 1 / 2 / 4 K -- DEV.md 4c C283
  amended, C285, C286; THIS fit: warning, 1.4373 K; one liquid
  across its validity span), and NO HUMAN HAS REVIEWED IT.  The
  engine says so on every run that reads it, and voices a warning
  or a severe grade beside it.
  Nothing was held out: the \`validation {}\` block says so, and the
  acceptance is the \`curation {}\` block.  A curator who reads the series
  back against the articles marks it \`reviewStatus reviewed; humanReviewed
  true;\`.  Revert with \`bin/choupo-curate revert nNDimethylacetamide-nNDimethylformamide\`.

  REPRODUCE: run tutorials/props/curation/curate141_nrtl_nNDimethylformamide_nNDimethylacetamide (after \`bin/choupo-curate fetch\` on it); its fit
  writes nNDimethylacetamide-nNDimethylformamide.proposal.dat, which bin/curate/check_regressed_pairs.py holds
  equal to this record.
\\*---------------------------------------------------------------------------*/

recordType binaryInteractionParameters;
schemaVersion 1;

pair { i nNDimethylformamide; j nNDimethylacetamide; }

components  ( nNDimethylformamide  nNDimethylacetamide );
model       NRTL;

parameters
{
    i           nNDimethylformamide;
    j           nNDimethylacetamide;
    a_ij        0.00000000;
    b_ij        742.20107363;
    a_ji        0.00000000;
    b_ji        -361.31202053;
    alpha       0.30000000;
}

provenance
{
    origin        fitted;
    method        "fitParameters(T_bubble), Levenberg-Marquardt";
    methodVersion "choupoProps Choupo-dev";
    fittedInCase  "tutorials/props/curation/curate141_nrtl_nNDimethylformamide_nNDimethylacetamide";
    reviewStatus  autoPromoted;
    humanReviewed false;
    fitGrade      warning;   // DEV.md 4c C285 (C286): max |T_model - T| over the kept points, graded 1 / 2 / 4 K
    fitGradeMaxTemperatureError_K 1.4373;
    promotedBy    "bin/choupo-curate pair --promote";
    promotedDate  "2026-11-10";
    reviewReason  "regressed by bin/choupo-curate from archive-transcribed measurements; not yet read back against the articles";
    reuse         "Choupo's own regression; the measured points belong to the cited articles and are not reproduced in this record or this tree";
    fitDate       "2026-11-10";

    evidence
    (
        {
            role      fit;
            dataset   "constant/archiveExtracts/nNDimethylformamide-nNDimethylacetamide-bubble-j.fluid.2015.12.052.dat";
            doi       "10.1016/j.fluid.2015.12.052";
            sha256    "7607619b6f52ea233488aaacf7ab3c17855785dba96bbaecb13982cb7a6ccfdf";
            provenance measured;
            archiveFile "j.fluid.2015.12.052.xml";
            system    "nNDimethylformamide + nNDimethylacetamide";
            pressure  "101300.000000 Pa";
        }
        {
            role      fit;
            dataset   "constant/archiveExtracts/nNDimethylformamide-nNDimethylacetamide-bubble-j.fluid.2008.07.018.dat";
            doi       "10.1016/j.fluid.2008.07.018";
            sha256    "0aa99bef5ae1fa822f00ccf8f91676bd925a3498107e880eec2f684f33d877a4";
            provenance measured;
            archiveFile "j.fluid.2008.07.018.xml";
            system    "nNDimethylformamide + nNDimethylacetamide";
            pressure  "95500.000000 Pa";
        }
    );
    fingerprint "12f77ea557dd0a43";   // of the declaration, frozen before the fit

    //  IN-SAMPLE: the model reproducing the very points it was
    //  fitted to.  It is NOT a validation; see the block below.
    weighting     uncertainty;   // chi2 is sum ((T_model - T_exp)/U)^2, dimensionless
    chi2          984.47224792;
    rms_K         0.94614854;
    nDataPoints   19;
    identifiable  true;
    maxAbsCorr    0.99069762;

    validity
    {
        temperature { min 421.15 K; max 437.59 K; }
        pressure    { min 95500 Pa; max 101300 Pa; }
        note        "the span of the FIT evidence; outside it the pair is an extrapolation";
    }
}

validation
{
    verdict     validationRefused;

    heldOut     none;   // every declared dataset carried \`role fit\`

    acceptance  none;   // no band was declared before the fit, so no
                        // pass/fail may be read out of the residual above
}

curation
{
    rule            "DEV.md 4c C283 (amended) + C284, graded by C285 (C286)";
    evidence        allLaboratories;   // every study fitted, none held out
    objective       twoStage;
    outlierLimit    3 K;   // |T_model - T| after the least-squares stage
    outliersDropped 15;
    pointsKept      19;
    noBubblePoint   0;
    maxAbsError     1.4373 K;
    meanAbsError    0.8617 K;
    acceptance      graded;   // max |T_model - T| over the kept points, DEV.md 4c C285 (C286)
    gradeLimits_K   (1 2 4);   // upper limits of clean / warning / severe; above, refused
    grade           warning;
    oneLiquid       true;   // arm (f) over the validity span; a pair that splits ONE liquid is never promoted, whatever its grade
    verdict         accepted;
}
`,pt=`/*---------------------------------------------------------------------------*\\
  NRTL binary interaction parameters --- toluene(i) + nNDimethylacetamide(j)

  REGRESSED BY CHOUPO'S CURATION PIPELINE (bin/choupo-curate, DEV.md 4c C282;
  record docs/design/binary-pairs-from-open-measurements.md) to measured
  bubble PRESSURES at stated temperatures (P-x, DEV.md 4c C291).  The articles named under \`evidence\` are the
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
  its fitting pipeline (every laboratory fitted to the bubble pressure, outliers beyond
  20 % discarded by name, max |P_model - P|/P over the kept points GRADED
  clean / warning / severe at 5 / 10 / 20 % -- DEV.md 4c C283 amended, C285, C291;
  THIS fit: clean, 1.7065 %; one liquid across its validity span), and NO
  HUMAN HAS REVIEWED IT.  The engine says so on every run that reads it, and
  voices a warning or a severe grade beside it.
  CAUTION: this record rests on ONE temperature and ONE laboratory.
  Nothing was held out: the \`validation {}\` block says so, and the acceptance
  is the \`curation {}\` block.  A curator who reads the series back against the
  articles marks it \`reviewStatus reviewed; humanReviewed true;\`.  Revert with
  \`bin/choupo-curate revert nNDimethylacetamide-toluene\`.

  REPRODUCE: run tutorials/props/curation/curate505_nrtl_toluene_nNDimethylacetamide (after \`bin/choupo-curate fetch\` on it); its fit
  writes nNDimethylacetamide-toluene.proposal.dat, which bin/curate/check_regressed_pairs.py holds
  equal to this record.
\\*---------------------------------------------------------------------------*/

recordType binaryInteractionParameters;
schemaVersion 1;

pair { i toluene; j nNDimethylacetamide; }

components  ( toluene  nNDimethylacetamide );
model       NRTL;

parameters
{
    i           toluene;
    j           nNDimethylacetamide;
    a_ij        0.00000000;
    b_ij        561.25021157;
    a_ji        0.00000000;
    b_ji        -223.41643414;
    alpha       0.30000000;
}

provenance
{
    origin        fitted;
    method        "fitParameters(P_bubble), Levenberg-Marquardt";
    methodVersion "choupoProps Choupo-dev";
    fittedInCase  "tutorials/props/curation/curate505_nrtl_toluene_nNDimethylacetamide";
    reviewStatus  autoPromoted;
    humanReviewed false;
    fitGrade      clean;   // DEV.md 4c C285 (C291): max |P_model - P|/P over the kept points, graded 5 / 10 / 20 %
    fitGradeMaxRelativeError_pct 1.7065;
    promotedBy    "bin/curate/pairs_px.py promote";
    promotedDate  "2026-11-10";
    reviewReason  "regressed by bin/choupo-curate from archive-transcribed measurements; not yet read back against the articles";
    reuse         "Choupo's own regression; the measured points belong to the cited articles and are not reproduced in this record or this tree";
    fitDate       "2026-11-10";

    evidence
    (
        {
            role      fit;
            dataset   "constant/archiveExtracts/toluene-nNDimethylacetamide-bubbleP-acs.jced.7b00119-b19.dat";
            doi       "10.1021/acs.jced.7b00119";
            sha256    "c57dbb0a0bf3405a8a631fa0f45bc2682f03b5dd1ee020e8b3f07b3a0dafe997";
            provenance measured;
            archiveFile "acs.jced.7b00119.xml";
            system    "toluene + nNDimethylacetamide";
        }
    );
    fingerprint "86cde0bb48c448ac";   // of the declaration, frozen before the fit

    //  IN-SAMPLE: the model reproducing the very points it was
    //  fitted to.  It is NOT a validation; see the block below.
    weighting     equal;   // chi2 is sum ((P_model - P_exp)/P_exp)^2, dimensionless
    chi2          0.00456669;
    rms_rel       0.01042740;
    nDataPoints   42;
    identifiable  true;
    maxAbsCorr    0.98089543;

    validity
    {
        temperature { min 353.15 K; max 353.15 K; }
        pressure    { min 5380 Pa; max 38850 Pa; }
        note        "the span of the FIT evidence; outside it the pair is an extrapolation";
    }
}

validation
{
    verdict     validationRefused;

    heldOut     none;   // every declared dataset carried \`role fit\`

    acceptance  none;   // no band was declared before the fit, so no
                        // pass/fail may be read out of the residual above
}

curation
{
    rule            "DEV.md 4c C291 (bubble-pressure pairs; every laboratory, graded by C285)";
    evidence        allLaboratories;   // every block fitted, none held out
    objective       twoStage;
    residual        P_bubble;
    residualScale   relative;   // (P_model - P)/P at each point's stated T
    outlierLimit_pct 20;   // |P_model - P|/P after the least-squares stage
    outliersDropped 0;
    pointsKept      42;
    noBubblePoint   0;
    maxRelError_pct 1.7065;
    meanRelError_pct 0.8420;
    acceptance      graded;   // max relative pressure error over the kept points, DEV.md 4c C285 (C291)
    gradeLimits_pct (5 10 20);   // upper limits of clean / warning / severe; above, refused
    grade           clean;
    oneLiquid       true;   // arm (f) over the validity span; a pair that splits ONE liquid is never promoted
    temperatures    1;   // distinct stated temperatures in the evidence
    laboratories    1;   // distinct articles in the evidence
    singleTemperature true;   // true: b/T was fitted at ONE temperature
    singleLaboratory  true;   // true: ONE laboratory's data, nothing to cross-check it
    verdict         accepted;
}
`,mt=`/*---------------------------------------------------------------------------*\\
  NRTL binary interaction parameters --- nOctane(i) + oXylene(j)

  REGRESSED BY CHOUPO'S CURATION PIPELINE (bin/choupo-curate, DEV.md 4c C282;
  record docs/design/binary-pairs-from-open-measurements.md) to measured
  bubble temperatures.  The articles named under \`evidence\` are the
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
  its fitting pipeline (every laboratory fitted, outliers beyond 3 K
  discarded by name, max |T_model - T| over the kept points GRADED
  clean / warning / severe at 1 / 2 / 4 K -- DEV.md 4c C283
  amended, C285, C286; THIS fit: warning, 1.1297 K; one liquid
  across its validity span), and NO HUMAN HAS REVIEWED IT.  The
  engine says so on every run that reads it, and voices a warning
  or a severe grade beside it.
  Nothing was held out: the \`validation {}\` block says so, and the
  acceptance is the \`curation {}\` block.  A curator who reads the series
  back against the articles marks it \`reviewStatus reviewed; humanReviewed
  true;\`.  Revert with \`bin/choupo-curate revert nOctane-oXylene\`.

  REPRODUCE: run tutorials/props/curation/curate158_nrtl_nOctane_oXylene (after \`bin/choupo-curate fetch\` on it); its fit
  writes nOctane-oXylene.proposal.dat, which bin/curate/check_regressed_pairs.py holds
  equal to this record.
\\*---------------------------------------------------------------------------*/

recordType binaryInteractionParameters;
schemaVersion 1;

pair { i nOctane; j oXylene; }

components  ( nOctane  oXylene );
model       NRTL;

parameters
{
    i           nOctane;
    j           oXylene;
    a_ij        0.00000000;
    b_ij        -334.57828639;
    a_ji        0.00000000;
    b_ji        516.36341502;
    alpha       0.30000000;
}

provenance
{
    origin        fitted;
    method        "fitParameters(T_bubble), Levenberg-Marquardt";
    methodVersion "choupoProps Choupo-dev";
    fittedInCase  "tutorials/props/curation/curate158_nrtl_nOctane_oXylene";
    reviewStatus  autoPromoted;
    humanReviewed false;
    fitGrade      warning;   // DEV.md 4c C285 (C286): max |T_model - T| over the kept points, graded 1 / 2 / 4 K
    fitGradeMaxTemperatureError_K 1.1297;
    promotedBy    "bin/choupo-curate pair --promote";
    promotedDate  "2026-11-10";
    reviewReason  "regressed by bin/choupo-curate from archive-transcribed measurements; not yet read back against the articles";
    reuse         "Choupo's own regression; the measured points belong to the cited articles and are not reproduced in this record or this tree";
    fitDate       "2026-11-10";

    evidence
    (
        {
            role      fit;
            dataset   "constant/archiveExtracts/nOctane-oXylene-bubble-j.fluid.2013.01.015.dat";
            doi       "10.1016/j.fluid.2013.01.015";
            sha256    "ea4a823b5e6d896b5e973eb5b31e45cd12636e65619bce99573a67b1b68fa599";
            provenance measured;
            archiveFile "j.fluid.2013.01.015.xml";
            system    "nOctane + oXylene";
            pressure  "20000.000000 Pa";
        }
        {
            role      fit;
            dataset   "constant/archiveExtracts/nOctane-oXylene-bubble-je3002283.dat";
            doi       "10.1021/je3002283";
            sha256    "669a2ea51c95ff219445e0a725011171e341f9a32d84b182aac7fa86da272e2f";
            provenance measured;
            archiveFile "je3002283.xml";
            system    "nOctane + oXylene";
            pressure  "101300.000000 Pa";
        }
    );
    fingerprint "db209d16f201e5ac";   // of the declaration, frozen before the fit

    //  IN-SAMPLE: the model reproducing the very points it was
    //  fitted to.  It is NOT a validation; see the block below.
    weighting     uncertainty;   // chi2 is sum ((T_model - T_exp)/U)^2, dimensionless
    chi2          110.64837487;
    rms_K         0.48228732;
    nDataPoints   23;
    identifiable  true;
    maxAbsCorr    0.99373537;

    validity
    {
        temperature { min 349.54 K; max 415.70 K; }
        pressure    { min 20000 Pa; max 101300 Pa; }
        note        "the span of the FIT evidence; outside it the pair is an extrapolation";
    }
}

validation
{
    verdict     validationRefused;

    heldOut     none;   // every declared dataset carried \`role fit\`

    acceptance  none;   // no band was declared before the fit, so no
                        // pass/fail may be read out of the residual above
}

curation
{
    rule            "DEV.md 4c C283 (amended) + C284, graded by C285 (C286)";
    evidence        allLaboratories;   // every study fitted, none held out
    objective       twoStage;
    outlierLimit    3 K;   // |T_model - T| after the least-squares stage
    outliersDropped 0;
    pointsKept      23;
    noBubblePoint   0;
    maxAbsError     1.1297 K;
    meanAbsError    0.4100 K;
    acceptance      graded;   // max |T_model - T| over the kept points, DEV.md 4c C285 (C286)
    gradeLimits_K   (1 2 4);   // upper limits of clean / warning / severe; above, refused
    grade           warning;
    oneLiquid       true;   // arm (f) over the validity span; a pair that splits ONE liquid is never promoted, whatever its grade
    verdict         accepted;
}
`,bt=`/*---------------------------------------------------------------------------*\\
  NRTL binary interaction parameters --- tertButylEthylEther(i) + toluene(j)

  REGRESSED BY CHOUPO'S CURATION PIPELINE (bin/choupo-curate, DEV.md 4c C282;
  record docs/design/binary-pairs-from-open-measurements.md) to measured
  bubble PRESSURES at stated temperatures (P-x, DEV.md 4c C291).  The articles named under \`evidence\` are the
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
  its fitting pipeline (every laboratory fitted to the bubble pressure, outliers beyond
  20 % discarded by name, max |P_model - P|/P over the kept points GRADED
  clean / warning / severe at 5 / 10 / 20 % -- DEV.md 4c C283 amended, C285, C291;
  THIS fit: clean, 2.0867 %; one liquid across its validity span), and NO
  HUMAN HAS REVIEWED IT.  The engine says so on every run that reads it, and
  voices a warning or a severe grade beside it.
  CAUTION: this record rests on ONE temperature and ONE laboratory.
  Nothing was held out: the \`validation {}\` block says so, and the acceptance
  is the \`curation {}\` block.  A curator who reads the series back against the
  articles marks it \`reviewStatus reviewed; humanReviewed true;\`.  Revert with
  \`bin/choupo-curate revert tertButylEthylEther-toluene\`.

  REPRODUCE: run tutorials/props/curation/curate520_nrtl_tertButylEthylEther_toluene (after \`bin/choupo-curate fetch\` on it); its fit
  writes tertButylEthylEther-toluene.proposal.dat, which bin/curate/check_regressed_pairs.py holds
  equal to this record.
\\*---------------------------------------------------------------------------*/

recordType binaryInteractionParameters;
schemaVersion 1;

pair { i tertButylEthylEther; j toluene; }

components  ( tertButylEthylEther  toluene );
model       NRTL;

parameters
{
    i           tertButylEthylEther;
    j           toluene;
    a_ij        0.00000000;
    b_ij        539.32983391;
    a_ji        0.00000000;
    b_ji        -300.53607445;
    alpha       0.30000000;
}

provenance
{
    origin        fitted;
    method        "fitParameters(P_bubble), Levenberg-Marquardt";
    methodVersion "choupoProps Choupo-dev";
    fittedInCase  "tutorials/props/curation/curate520_nrtl_tertButylEthylEther_toluene";
    reviewStatus  autoPromoted;
    humanReviewed false;
    fitGrade      clean;   // DEV.md 4c C285 (C291): max |P_model - P|/P over the kept points, graded 5 / 10 / 20 %
    fitGradeMaxRelativeError_pct 2.0867;
    promotedBy    "bin/curate/pairs_px.py promote";
    promotedDate  "2026-11-10";
    reviewReason  "regressed by bin/choupo-curate from archive-transcribed measurements; not yet read back against the articles";
    reuse         "Choupo's own regression; the measured points belong to the cited articles and are not reproduced in this record or this tree";
    fitDate       "2026-11-10";

    evidence
    (
        {
            role      fit;
            dataset   "constant/archiveExtracts/tertButylEthylEther-toluene-bubbleP-je0602115-b5.dat";
            doi       "10.1021/je0602115";
            sha256    "e6eee84cb361b42d6436453158c10f621ec2b02a5177cd1641dcfef311875b7d";
            provenance measured;
            archiveFile "je0602115.xml";
            system    "tertButylEthylEther + toluene";
        }
    );
    fingerprint "d506773cc3278a18";   // of the declaration, frozen before the fit

    //  IN-SAMPLE: the model reproducing the very points it was
    //  fitted to.  It is NOT a validation; see the block below.
    weighting     equal;   // chi2 is sum ((P_model - P_exp)/P_exp)^2, dimensionless
    chi2          0.00621945;
    rms_rel       0.01546640;
    nDataPoints   26;
    identifiable  true;
    maxAbsCorr    0.98964055;

    validity
    {
        temperature { min 313.15 K; max 313.15 K; }
        pressure    { min 9495 Pa; max 30514 Pa; }
        note        "the span of the FIT evidence; outside it the pair is an extrapolation";
    }
}

validation
{
    verdict     validationRefused;

    heldOut     none;   // every declared dataset carried \`role fit\`

    acceptance  none;   // no band was declared before the fit, so no
                        // pass/fail may be read out of the residual above
}

curation
{
    rule            "DEV.md 4c C291 (bubble-pressure pairs; every laboratory, graded by C285)";
    evidence        allLaboratories;   // every block fitted, none held out
    objective       twoStage;
    residual        P_bubble;
    residualScale   relative;   // (P_model - P)/P at each point's stated T
    outlierLimit_pct 20;   // |P_model - P|/P after the least-squares stage
    outliersDropped 0;
    pointsKept      26;
    noBubblePoint   0;
    maxRelError_pct 2.0867;
    meanRelError_pct 1.4040;
    acceptance      graded;   // max relative pressure error over the kept points, DEV.md 4c C285 (C291)
    gradeLimits_pct (5 10 20);   // upper limits of clean / warning / severe; above, refused
    grade           clean;
    oneLiquid       true;   // arm (f) over the validity span; a pair that splits ONE liquid is never promoted
    temperatures    1;   // distinct stated temperatures in the evidence
    laboratories    1;   // distinct articles in the evidence
    singleTemperature true;   // true: b/T was fitted at ONE temperature
    singleLaboratory  true;   // true: ONE laboratory's data, nothing to cross-check it
    verdict         accepted;
}
`,vt=`/*---------------------------------------------------------------------------*\\
  NRTL binary interaction parameters --- water(i) + triethyleneGlycol(j)

  REGRESSED BY CHOUPO'S CURATION PIPELINE (bin/choupo-curate, DEV.md 4c C282;
  record docs/design/binary-pairs-from-open-measurements.md) to measured
  bubble temperatures.  The articles named under \`evidence\` are the
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
  its fitting pipeline (every laboratory fitted, outliers beyond 3 K
  discarded by name, max |T_model - T| over the kept points GRADED
  clean / warning / severe at 1 / 2 / 4 K -- DEV.md 4c C283
  amended, C285, C286; THIS fit: severe, 3.8325 K; one liquid
  across its validity span), and NO HUMAN HAS REVIEWED IT.  The
  engine says so on every run that reads it, and voices a warning
  or a severe grade beside it.
  Nothing was held out: the \`validation {}\` block says so, and the
  acceptance is the \`curation {}\` block.  A curator who reads the series
  back against the articles marks it \`reviewStatus reviewed; humanReviewed
  true;\`.  Revert with \`bin/choupo-curate revert triethyleneGlycol-water\`.

  REPRODUCE: run tutorials/props/curation/curate105_nrtl_water_triethyleneGlycol (after \`bin/choupo-curate fetch\` on it); its fit
  writes triethyleneGlycol-water.proposal.dat, which bin/curate/check_regressed_pairs.py holds
  equal to this record.
\\*---------------------------------------------------------------------------*/

recordType binaryInteractionParameters;
schemaVersion 1;

pair { i water; j triethyleneGlycol; }

components  ( water  triethyleneGlycol );
model       NRTL;

parameters
{
    i           water;
    j           triethyleneGlycol;
    a_ij        0.00000000;
    b_ij        -928.55114382;
    a_ji        0.00000000;
    b_ji        609.02733226;
    alpha       0.30000000;
}

provenance
{
    origin        fitted;
    method        "fitParameters(T_bubble), Levenberg-Marquardt";
    methodVersion "choupoProps Choupo-dev";
    fittedInCase  "tutorials/props/curation/curate105_nrtl_water_triethyleneGlycol";
    reviewStatus  autoPromoted;
    humanReviewed false;
    fitGrade      severe;   // DEV.md 4c C285 (C286): max |T_model - T| over the kept points, graded 1 / 2 / 4 K
    fitGradeMaxTemperatureError_K 3.8325;
    promotedBy    "bin/choupo-curate pair --promote";
    promotedDate  "2026-11-10";
    reviewReason  "regressed by bin/choupo-curate from archive-transcribed measurements; not yet read back against the articles";
    reuse         "Choupo's own regression; the measured points belong to the cited articles and are not reproduced in this record or this tree";
    fitDate       "2026-11-10";

    evidence
    (
        {
            role      fit;
            dataset   "constant/archiveExtracts/water-triethyleneGlycol-bubble-j.fluid.2015.07.030.dat";
            doi       "10.1016/j.fluid.2015.07.030";
            sha256    "3c39e5f5d25ad4b398dc7527e15f6577b93a3d6ee322809bb0ba9a6a3edc6ac1";
            provenance measured;
            archiveFile "j.fluid.2015.07.030.xml";
            system    "water + triethyleneGlycol";
        }
        {
            role      fit;
            dataset   "constant/archiveExtracts/water-triethyleneGlycol-bubble-acs.jced.7b00945.dat";
            doi       "10.1021/acs.jced.7b00945";
            sha256    "7a094d2fcbf64ff45ed75e2fb055cd819d00874e7fa16d6e6ff8eadce98e8526";
            provenance measured;
            archiveFile "acs.jced.7b00945.xml";
            system    "water + triethyleneGlycol";
        }
        {
            role      fit;
            dataset   "constant/archiveExtracts/water-triethyleneGlycol-bubble-je800675u.dat";
            doi       "10.1021/je800675u";
            sha256    "e72d83523617f26bbb451945faa3c5b81253daf69988572eda61974efe64d028";
            provenance measured;
            archiveFile "je800675u.xml";
            system    "water + triethyleneGlycol";
            pressure  "85000.000000 Pa";
        }
    );
    fingerprint "fd80b6078779bf2e";   // of the declaration, frozen before the fit

    //  IN-SAMPLE: the model reproducing the very points it was
    //  fitted to.  It is NOT a validation; see the block below.
    weighting     uncertainty;   // chi2 is sum ((T_model - T_exp)/U)^2, dimensionless
    chi2          2608.16411374;
    rms_K         1.26875380;
    nDataPoints   96;
    identifiable  false;
    maxAbsCorr    0.99992202;

    validity
    {
        temperature { min 355.04 K; max 497.35 K; }
        pressure    { min 50000 Pa; max 100000 Pa; }
        note        "the span of the FIT evidence; outside it the pair is an extrapolation";
    }
}

validation
{
    verdict     validationRefused;

    heldOut     none;   // every declared dataset carried \`role fit\`

    acceptance  none;   // no band was declared before the fit, so no
                        // pass/fail may be read out of the residual above
}

curation
{
    rule            "DEV.md 4c C283 (amended) + C284, graded by C285 (C286)";
    evidence        allLaboratories;   // every study fitted, none held out
    objective       twoStage;
    outlierLimit    3 K;   // |T_model - T| after the least-squares stage
    outliersDropped 25;
    pointsKept      96;
    noBubblePoint   0;
    maxAbsError     3.8325 K;
    meanAbsError    1.0691 K;
    acceptance      graded;   // max |T_model - T| over the kept points, DEV.md 4c C285 (C286)
    gradeLimits_K   (1 2 4);   // upper limits of clean / warning / severe; above, refused
    grade           severe;
    oneLiquid       true;   // arm (f) over the validity span; a pair that splits ONE liquid is never promoted, whatever its grade
    verdict         accepted;
}
`,ft=`/*---------------------------------------------------------------------------*\\
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
`,yt=`/*---------------------------------------------------------------------------*\\
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
`,Et=`/*---------------------------------------------------------------------------*\\
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
`,_t=[],gt=Object.assign({"../../../data/standards/parameters/NRTL/124Trimethylbenzene-2Pentanol.dat":z,"../../../data/standards/parameters/NRTL/14Dioxane-2Methyl2Propanol.dat":Y,"../../../data/standards/parameters/NRTL/14Dioxane-cyclohexane.dat":X,"../../../data/standards/parameters/NRTL/14Dioxane-nButanol.dat":Q,"../../../data/standards/parameters/NRTL/1Hexanol-nButanol.dat":W,"../../../data/standards/parameters/NRTL/1Hexanol-nButylAcetate.dat":$,"../../../data/standards/parameters/NRTL/1Hexene-1Pentanol.dat":J,"../../../data/standards/parameters/NRTL/1Hexene-2Butanol.dat":Z,"../../../data/standards/parameters/NRTL/1Hexene-diNButylEther.dat":ee,"../../../data/standards/parameters/NRTL/1Hexene-nButanol.dat":ne,"../../../data/standards/parameters/NRTL/1Hexene-tertButylEthylEther.dat":te,"../../../data/standards/parameters/NRTL/1Pentanol-224Trimethylpentane.dat":ae,"../../../data/standards/parameters/NRTL/1Pentanol-2Hexanone.dat":re,"../../../data/standards/parameters/NRTL/1Pentanol-anisole.dat":ie,"../../../data/standards/parameters/NRTL/1Pentanol-cyclohexane.dat":oe,"../../../data/standards/parameters/NRTL/1Pentanol-nHexane.dat":se,"../../../data/standards/parameters/NRTL/1Pentanol-nNonane.dat":de,"../../../data/standards/parameters/NRTL/1Pentanol-toluene.dat":ce,"../../../data/standards/parameters/NRTL/1Propanol-224Trimethylpentane.dat":le,"../../../data/standards/parameters/NRTL/1Propanol-Dichloroethane.dat":ue,"../../../data/standards/parameters/NRTL/1Propanol-acetonitrile.dat":he,"../../../data/standards/parameters/NRTL/1Propanol-benzene.dat":pe,"../../../data/standards/parameters/NRTL/1Propanol-diethylSulfide.dat":me,"../../../data/standards/parameters/NRTL/1Propanol-diisopropylEther.dat":be,"../../../data/standards/parameters/NRTL/1Propanol-dimethylCarbonate.dat":ve,"../../../data/standards/parameters/NRTL/1Propanol-propionicAcid.dat":fe,"../../../data/standards/parameters/NRTL/1Propanol-water.dat":ye,"../../../data/standards/parameters/NRTL/224Trimethylpentane-2Butanol.dat":Ee,"../../../data/standards/parameters/NRTL/224Trimethylpentane-2Pentanol.dat":_e,"../../../data/standards/parameters/NRTL/224Trimethylpentane-diethylDisulfide.dat":ge,"../../../data/standards/parameters/NRTL/224Trimethylpentane-diisopropylEther.dat":Te,"../../../data/standards/parameters/NRTL/224Trimethylpentane-dimethylDisulfide.dat":Pe,"../../../data/standards/parameters/NRTL/224Trimethylpentane-isopropanol.dat":Re,"../../../data/standards/parameters/NRTL/224Trimethylpentane-methylTertPentylEther.dat":we,"../../../data/standards/parameters/NRTL/224Trimethylpentane-nHeptane.dat":Ce,"../../../data/standards/parameters/NRTL/2Butanol-benzene.dat":je,"../../../data/standards/parameters/NRTL/2Butanol-cyclohexane.dat":De,"../../../data/standards/parameters/NRTL/2Butanol-diisopropylEther.dat":Ie,"../../../data/standards/parameters/NRTL/2Butanol-dimethylCarbonate.dat":Ne,"../../../data/standards/parameters/NRTL/2Butanol-methanol.dat":Oe,"../../../data/standards/parameters/NRTL/2Butanol-nDodecane.dat":Se,"../../../data/standards/parameters/NRTL/2Butanol-nHexane.dat":xe,"../../../data/standards/parameters/NRTL/2Butanol-nNDimethylformamide.dat":Ae,"../../../data/standards/parameters/NRTL/2Butanol-toluene.dat":Le,"../../../data/standards/parameters/NRTL/2Methyl1Butanol-ethanol.dat":ke,"../../../data/standards/parameters/NRTL/2Methyl1Propanol-benzene.dat":Me,"../../../data/standards/parameters/NRTL/2Methyl1Propanol-diisopropylEther.dat":Ue,"../../../data/standards/parameters/NRTL/2Methyl1Propanol-isobutylAcetate.dat":Ke,"../../../data/standards/parameters/NRTL/2Methyl1Propanol-nNDimethylformamide.dat":Ve,"../../../data/standards/parameters/NRTL/2Methyl2Propanol-nNDimethylformamide.dat":He,"../../../data/standards/parameters/NRTL/2Pentanol-cyclohexane.dat":Be,"../../../data/standards/parameters/NRTL/2Pentanol-nHeptane.dat":qe,"../../../data/standards/parameters/NRTL/2Pentanol-nHexane.dat":Ge,"../../../data/standards/parameters/NRTL/2Pentanol-toluene.dat":Fe,"../../../data/standards/parameters/NRTL/Dichloroethane-ethylAcetate.dat":ze,"../../../data/standards/parameters/NRTL/acetone-ethanol.dat":Ye,"../../../data/standards/parameters/NRTL/acetone-methanol.dat":Xe,"../../../data/standards/parameters/NRTL/acetonitrile-ethanol.dat":Qe,"../../../data/standards/parameters/NRTL/acetonitrile-ethylAcetate.dat":We,"../../../data/standards/parameters/NRTL/acetonitrile-isopropanol.dat":$e,"../../../data/standards/parameters/NRTL/acetonitrile-methanol.dat":Je,"../../../data/standards/parameters/NRTL/acetonitrile-water.dat":Ze,"../../../data/standards/parameters/NRTL/aniline-nNDimethylformamide.dat":en,"../../../data/standards/parameters/NRTL/aniline-nOctane.dat":nn,"../../../data/standards/parameters/NRTL/anisole-nHexane.dat":tn,"../../../data/standards/parameters/NRTL/benzene-diisopropylEther.dat":an,"../../../data/standards/parameters/NRTL/benzene-isopropanol.dat":rn,"../../../data/standards/parameters/NRTL/benzene-methanol.dat":on,"../../../data/standards/parameters/NRTL/benzene-nButanol.dat":sn,"../../../data/standards/parameters/NRTL/benzene-nNDimethylacetamide.dat":dn,"../../../data/standards/parameters/NRTL/benzene-toluene.dat":cn,"../../../data/standards/parameters/NRTL/chloroform-methylEthylKetone.dat":ln,"../../../data/standards/parameters/NRTL/chloroform-methylIsobutylKetone.dat":un,"../../../data/standards/parameters/NRTL/chloroform-methylTertButylEther.dat":hn,"../../../data/standards/parameters/NRTL/cyclohexane-cyclohexene.dat":pn,"../../../data/standards/parameters/NRTL/cyclohexane-diNButylEther.dat":mn,"../../../data/standards/parameters/NRTL/cyclohexane-nButanol.dat":bn,"../../../data/standards/parameters/NRTL/cyclohexane-nHeptane.dat":vn,"../../../data/standards/parameters/NRTL/cyclohexane-tertButylEthylEther.dat":fn,"../../../data/standards/parameters/NRTL/cyclohexane-tetrahydrofuran.dat":yn,"../../../data/standards/parameters/NRTL/diNButylEther-nHeptane.dat":En,"../../../data/standards/parameters/NRTL/diNButylEther-nNDimethylacetamide.dat":_n,"../../../data/standards/parameters/NRTL/diNButylEther-toluene.dat":gn,"../../../data/standards/parameters/NRTL/diethylSulfide-ethanol.dat":Tn,"../../../data/standards/parameters/NRTL/diethylSulfide-nPropylAcetate.dat":Pn,"../../../data/standards/parameters/NRTL/diisopropylEther-isopropanol.dat":Rn,"../../../data/standards/parameters/NRTL/diisopropylEther-nButanol.dat":wn,"../../../data/standards/parameters/NRTL/dimethylCarbonate-ethanol.dat":Cn,"../../../data/standards/parameters/NRTL/dimethylCarbonate-isopropanol.dat":jn,"../../../data/standards/parameters/NRTL/dimethylCarbonate-methanol.dat":Dn,"../../../data/standards/parameters/NRTL/dimethylCarbonate-nButanol.dat":In,"../../../data/standards/parameters/NRTL/dimethylCarbonate-pXylene.dat":Nn,"../../../data/standards/parameters/NRTL/dimethylDisulfide-tertButylEthylEther.dat":On,"../../../data/standards/parameters/NRTL/dimethylDisulfide-toluene.dat":Sn,"../../../data/standards/parameters/NRTL/ethanol-ethylAcetate.dat":xn,"../../../data/standards/parameters/NRTL/ethanol-ethyleneGlycol.dat":An,"../../../data/standards/parameters/NRTL/ethanol-methylEthylKetone.dat":Ln,"../../../data/standards/parameters/NRTL/ethanol-nNDimethylacetamide.dat":kn,"../../../data/standards/parameters/NRTL/ethanol-pXylene.dat":Mn,"../../../data/standards/parameters/NRTL/ethanol-water.dat":Un,"../../../data/standards/parameters/NRTL/ethylAcetate-methanol.dat":Kn,"../../../data/standards/parameters/NRTL/ethylBenzene-monochlorobenzene.dat":Vn,"../../../data/standards/parameters/NRTL/ethylBenzene-styrene.dat":Hn,"../../../data/standards/parameters/NRTL/ethyleneGlycol-water.dat":Bn,"../../../data/standards/parameters/NRTL/isopropanol-isopropylAcetate.dat":qn,"../../../data/standards/parameters/NRTL/isopropanol-methanol.dat":Gn,"../../../data/standards/parameters/NRTL/isopropanol-water.dat":Fn,"../../../data/standards/parameters/NRTL/mXylene-nDecane.dat":zn,"../../../data/standards/parameters/NRTL/mXylene-nOctane.dat":Yn,"../../../data/standards/parameters/NRTL/methanol-methylAcetate.dat":Xn,"../../../data/standards/parameters/NRTL/methanol-methylEthylKetone.dat":Qn,"../../../data/standards/parameters/NRTL/methanol-tetrahydrofuran.dat":Wn,"../../../data/standards/parameters/NRTL/methanol-water.dat":$n,"../../../data/standards/parameters/NRTL/methylPropionate-nHeptane.dat":Jn,"../../../data/standards/parameters/NRTL/methylTertPentylEther-toluene.dat":Zn,"../../../data/standards/parameters/NRTL/nButanol-nButylAcetate.dat":et,"../../../data/standards/parameters/NRTL/nButanol-nDodecane.dat":nt,"../../../data/standards/parameters/NRTL/nButanol-pXylene.dat":tt,"../../../data/standards/parameters/NRTL/nButanol-toluene.dat":at,"../../../data/standards/parameters/NRTL/nButanol-water.dat":rt,"../../../data/standards/parameters/NRTL/nDecane-oXylene.dat":it,"../../../data/standards/parameters/NRTL/nDecane-pXylene.dat":ot,"../../../data/standards/parameters/NRTL/nHeptane-nNDimethylacetamide.dat":st,"../../../data/standards/parameters/NRTL/nHeptane-tertButylEthylEther.dat":dt,"../../../data/standards/parameters/NRTL/nHeptane-thiophene.dat":ct,"../../../data/standards/parameters/NRTL/nHeptane-toluene.dat":lt,"../../../data/standards/parameters/NRTL/nHexane-toluene.dat":ut,"../../../data/standards/parameters/NRTL/nNDimethylacetamide-nNDimethylformamide.dat":ht,"../../../data/standards/parameters/NRTL/nNDimethylacetamide-toluene.dat":pt,"../../../data/standards/parameters/NRTL/nOctane-oXylene.dat":mt,"../../../data/standards/parameters/NRTL/tertButylEthylEther-toluene.dat":bt,"../../../data/standards/parameters/NRTL/triethyleneGlycol-water.dat":vt}),Tt=Object.assign({}),Pt=Object.assign({"../../../data/standards/parameters/UNIQUAC/aceticAcid-methylAcetate.dat":ft,"../../../data/standards/parameters/UNIQUAC/methanol-methylAcetate.dat":yt,"../../../data/standards/parameters/UNIQUAC/methylAcetate-water.dat":Et});function f(e){return typeof e=="string"?e:typeof e=="number"?String(e):""}function w(e,n){let t;try{t=P(R(e))}catch{return null}const a=t.components;if(!Array.isArray(a)||a.length!==2)return null;const o=f(t.model)||n.modelHint;if(!o)return null;const r={},s=t.parameters;if(typeof s=="object"&&s!==null&&!Array.isArray(s))for(const[d,u]of Object.entries(s))(typeof u=="number"||typeof u=="string")&&(r[d]=u);const c=t.provenance,l=typeof c=="object"&&c!==null&&!Array.isArray(c)?c:null;return{model:o,a:String(a[0]),b:String(a[1]),tier:n.tier,file:n.file,stem:n.file.split("/").pop().replace(/\.dat$/,""),parameters:r,provenance:{origin:l?f(l.origin):"",reviewStatus:l?f(l.reviewStatus):"",fittedInCase:l?f(l.fittedInCase):"",citation:l?f(l.citation)||f(l.source):""}}}function g(e,n){const t=[];for(const[a,o]of Object.entries(e)){const r=a.replace(/^.*?data\/standards\//,"data/standards/"),s=w(o,{file:r,tier:"standards",modelHint:n});s&&t.push(s)}return t}const k=[...g(gt,"NRTL"),...g(Tt,"Wilson"),...g(Pt,"UNIQUAC")];function M(e,n,t){return e.a===n&&e.b===t||e.a===t&&e.b===n}function qt(e,n,t){return k.some(a=>a.model===e&&M(a,n,t))}let T=null;function Rt(){if(T)return T;const e=[];for(const n of _t){const t=n.file.includes("/")?n.file.split("/")[0]:"",a=w(n.body,{file:`data/local/parameters/${n.file}`,tier:"local",modelHint:t});a&&e.push(a)}return T=e,e}const wt=/(?:^|\/)constant\/parameters\/([^/]+)\/[^/]+\.dat$/;function Ct(e){if(!e)return[];const n=[];for(const[t,a]of Object.entries(e)){const o=wt.exec(t);if(!o)continue;const r=w(a,{file:t,tier:"case",modelHint:o[1]});r&&n.push(r)}return n}function Gt(e,n,t){return[...k,...Rt(),...Ct(t)].filter(a=>M(a,e,n))}function Ft(e){const n=[];e.provenance.origin&&n.push(e.provenance.origin),e.provenance.reviewStatus&&n.push(e.provenance.reviewStatus),e.provenance.fittedInCase&&n.push(`fitted in ${e.provenance.fittedInCase.split("/").pop()}`);const t=e.tier==="standards"?"standards":e.tier==="local"?"data/local":"open case";return n.length?`${t} · ${n.join(" · ")}`:t}const U={water:[{group:"H2O",count:1}],ethanol:[{group:"CH3",count:1},{group:"CH2",count:1},{group:"OH",count:1}],nButanol:[{group:"CH3",count:1},{group:"CH2",count:3},{group:"OH",count:1}],nHexane:[{group:"CH3",count:2},{group:"CH2",count:4}],benzene:[{group:"ACH",count:6}],C4H10:[{group:"CH3",count:2},{group:"CH2",count:2}],nPentane:[{group:"CH3",count:2},{group:"CH2",count:3}],isopentane:[{group:"CH3",count:3},{group:"CH2",count:1},{group:"CH",count:1}],nHeptane:[{group:"CH3",count:2},{group:"CH2",count:5}],C8H18:[{group:"CH3",count:2},{group:"CH2",count:6}],cyclohexane:[{group:"CH2",count:6}]};function jt(e){let n;try{n=P(R(e))}catch{return null}const t=n.unifac;if(!t||typeof t!="object")return null;const a=t.groups;if(!Array.isArray(a))return null;const o=[];for(const r of a)r&&typeof r=="object"&&typeof r.group=="string"&&typeof r.count=="number"&&o.push({group:r.group,count:r.count});return o.length?o:null}function zt(e){const n={};if(!e)return n;for(const[t,a]of Object.entries(e)){if(!/(^|\/)constant\/components\/[^/]+\.dat$/.test(t))continue;let o;try{o=P(R(a))}catch{continue}const r=typeof o.name=="string"?o.name:"";if(!r)continue;const s=jt(a);s&&(n[r]=s)}return n}function Yt(e,n={}){return Object.prototype.hasOwnProperty.call(n,e)||Object.prototype.hasOwnProperty.call(U,e)}function Dt(e,n={}){const t={};for(const a of e){const o=n[a]??U[a];o&&(t[a]=o.map(r=>({group:r.group,count:r.count})))}return t}function It(e,n){const t=E(e[0],n)?.tb,a=E(e[1],n)?.tb;return typeof t=="number"&&typeof a=="number"&&a<t?[e[1],e[0]]:e}function Xt(e){const n=It(e.pair,e.catalogue),t=n[0],a=n[1],o=e.kind!=="gamma",r=o?["T_bubble",`y_eq_${t}`,"liquid_stable"]:[`gamma_${t}`,`gamma_${a}`];return{components:[...n],properties:r,axis:{variable:`x[${t}]`,from:0,to:1,n:Math.max(2,Math.round(e.n))},state:{P:e.P,composition:{[t]:.5,[a]:.5}},activityModel:{model:e.activity},equationOfState:{model:e.eos},...o?{vleTwoLiquid:!0}:{},...e.activity==="UNIFAC"?{unifacGroups:Dt(n,e.localUnifac)}:{},...e.componentFiles&&Object.keys(e.componentFiles).length>0?{componentFiles:e.componentFiles}:{}}}function Qt(e){const n=[...e.pair].sort((d,u)=>(E(d,e.catalogue)?.tb??0)-(E(u,e.catalogue)?.tb??0)),t=n[0]??"",a=n[n.length-1]??"",o=e.TminK-273.15,r=e.TmaxK-273.15,s=[];for(let d=e.rhFrom;d<=e.rhTo+1e-9&&d<100;d+=Math.max(1,e.rhStep))s.push(Math.round(d));const c=[],l=Math.max(5,e.wbStepC);for(let d=Math.ceil(o/l)*l;d<=Math.min(r,95);d+=l)c.push(d);return{components:[t,a],properties:[],axis:{variable:"T",from:0,to:1,n:2},state:{composition:{[t]:.5,[a]:.5}},psychrometry:{carrier:t,condensable:a,P:e.P,TminC:o,TmaxC:r,gridN:Math.max(20,Math.round(e.gridN)),rh:s,wetBulb:c},transport:{model:"Chung",thermalConductivity:"Eucken",diffusivity:"Fuller"},...e.componentFiles&&Object.keys(e.componentFiles).length>0?{componentFiles:{...e.componentFiles}}:{}}}export{x as B,m as E,xt as I,At as a,Xt as b,kt as c,Vt as d,F as e,G as f,zt as g,Ht as h,Lt as i,qt as j,Yt as k,Gt as l,Mt as m,Kt as n,It as o,Ft as p,Ut as q,Qt as r,Bt as s,Dt as u};
