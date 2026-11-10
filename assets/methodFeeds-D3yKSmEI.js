import{ec as L,ge as w,fu as E}from"./index-Ul4uEI_D.js";import{d as N,b as _}from"./catalogue-CNOk2a73.js";/**
 * @license @tabler/icons-react v3.44.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */const F=[["path",{d:"M3 19a9 9 0 0 1 9 0a9 9 0 0 1 9 0",key:"svg-0"}],["path",{d:"M3 6a9 9 0 0 1 9 0a9 9 0 0 1 9 0",key:"svg-1"}],["path",{d:"M3 6l0 13",key:"svg-2"}],["path",{d:"M12 6l0 13",key:"svg-3"}],["path",{d:"M21 6l0 13",key:"svg-4"}]],Ue=L("outline","book","Book",F);/**
 * @license @tabler/icons-react v3.44.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */const V=[["path",{d:"M13 5h8",key:"svg-0"}],["path",{d:"M13 9h5",key:"svg-1"}],["path",{d:"M13 15h8",key:"svg-2"}],["path",{d:"M13 19h5",key:"svg-3"}],["path",{d:"M3 5a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1l0 -4",key:"svg-4"}],["path",{d:"M3 15a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1l0 -4",key:"svg-5"}]],He=L("outline","list-details","ListDetails",V),S=[{id:"carbonate",label:"carbonate (CO₂ / HCO₃⁻ / CO₃²⁻)",master:"HCO3",total:.002,gas:"CO2",counter:{species:"Na",perMaster:1,salt:"NaHCO₃"},note:"the classical Bjerrum system; open it to the atmosphere and the total carbonate stops being an input"},{id:"ammonia",label:"ammonia (NH₄⁺ / NH₃)",master:"NH4",total:.002,gas:"NH3",counter:{species:"Cl",perMaster:1,salt:"NH₄Cl"},note:"the sour-water base; one crossing, at the pKa"},{id:"phosphate",label:"phosphate (H₃PO₄ / H₂PO₄⁻ / HPO₄²⁻ / PO₄³⁻)",master:"PO4",total:.002,counter:{species:"Na",perMaster:3,salt:"Na₃PO₄"},note:"triprotic — three crossings, and the buffer plateaux between them"},{id:"sulfide",label:"sulfide (H₂S / HS⁻)",master:"HS",total:.002,gas:"H2S",counter:{species:"Na",perMaster:1,salt:"NaHS"},note:"the other sour-water family"},{id:"acetate",label:"acetate (CH₃COOH / CH₃COO⁻)",master:"Acetate",total:.002,counter:{species:"Na",perMaster:1,salt:"CH₃COONa"},note:"the textbook weak acid, pKa 4.756"}],Be=e=>S.find(n=>n.id===e)??S[0];function q(e,n,t){const a=Math.max(2,Math.round(t)),i=[];for(let r=0;r<a;++r)i.push(e+(n-e)*r/(a-1));return i}const G=e=>`bjerrum-${String(e).padStart(3,"0")}.csv`;function Fe(e,n=4,t=4){const a=Math.max(2,Math.round(e)),i=Math.max(1,Math.min(n,Math.floor(a/t))),r=Math.floor(a/i),s=a%i,c=[];let l=0;for(let d=0;d<i;++d){const h=r+(d<s?1:0);c.push({lo:l,hi:l+h}),l+=h}return c}function Ve(e){const n=[],t=[];for(const s of e){const c=new Map,l=s.csv.trim().split(/\r?\n/).filter(d=>d.length>0);for(let d=1;d<l.length;++d){const h=l[d].split(","),m=(h[0]??"").trim(),y=(h[1]??"").trim();!m||!y||(n.includes(m)||n.push(m),c.set(m,y))}t.push({pH:s.pH,m:c,q:s.netCharge})}if(n.length===0)return"";const a=t.length>0&&t.every(s=>s.q!==null),r=[["pH",...n,...a?["netCharge"]:[]].join(",")];for(const s of t)r.push([String(s.pH),...n.map(c=>s.m.get(c)??""),...a?[String(s.q)]:[]].join(","));return r.join(`
`)+`
`}function qe(e){const n=e.match(/^.*(?:fatal error|\*\*\*).*$/gm),t=[...e.matchAll(/pH\s+(-?[\d.]+)\s+\(given\)/g)];if(!n||n.length===0||t.length===0)return null;const a=Number(t[t.length-1][1]);return Number.isFinite(a)?{pH:a,message:n[n.length-1].trim()}:null}function Ge(e,n){const t=new Array(n).fill(null),a=/^>>>\s+Operation\s+\[(\d+)\]/gm,i=[];let r;for(;(r=a.exec(e))!==null;)i.push({index:Number(r[1]),at:r.index});const s=/charge balance on the answer:[^\n]*?=\s*(-?[\d.]+(?:[eE][-+]?\d+)?)\s+\(pH GIVEN/;for(let c=0;c<i.length;++c){const d=e.slice(i[c].at,i[c+1]?.at??e.length).match(s),h=i[c].index;if(d&&h>=0&&h<n){const m=Number(d[1]);Number.isFinite(m)&&(t[h]=m)}}return t}function ze(e){const n=new RegExp("^\\s*(?:\\[advisory\\][^\\n]*|\\[chemistry\\] closure[^\\n]*|speciation: pH scale[^\\n]*|aqueous activity:[^\\n]*|K\\(T\\)[^\\n]*|OPEN to [^\\n]*|--\\s+the .*REPLACED by the pin[^\\n]*)$","gm"),t=new Set,a=[];for(const i of e.match(n)??[]){const r=i.trim();t.has(r)||(t.add(r),a.push(r))}return a}const D=/^\[advisory\] pH was GIVEN, so electroneutrality was not imposed .*?net charge of\s*([\d.]+)\s*%/;function Ye(e){const n=[];for(const c of e){const l=D.exec(c);if(l){const d=Number(l[1]);Number.isFinite(d)&&n.push(d)}}if(n.length<2)return e;const t=Math.min(...n),a=Math.max(...n),i=`[advisory] pH was GIVEN at every one of the ${n.length} points, so electroneutrality was not imposed: the answers carry a net charge of ${t.toFixed(1)}–${a.toFixed(1)} % of their total ionic content (the dashed titrant curve on the right-hand axis is that residual, point by point). A measured laboratory pH makes this legitimate — the unmeasured counter-ions carry the difference — but no physical beaker holds these compositions as written; \`pH solve;\` closes the balance instead.`,r=[];let s=!1;for(const c of e){if(!D.test(c)){r.push(c);continue}s||(r.push(i),s=!0)}return r}const p="explore.csv";function Xe(e){if(e.estimate){const o=e.estimate;return{propsDict:{operations:[{name:"estimate",type:"estimateComponent",component:o.component,model:o.estimator??"Joback",groups:o.groups.map(T=>({group:T.group,count:T.count})),...o.reference&&Object.keys(o.reference).length>0?{reference:{...o.reference}}:{},...o.polymer&&(o.polymer.packing!==void 0||o.polymer.state!==void 0)?{polymer:{...o.polymer.packing!==void 0?{packing:o.polymer.packing}:{},...o.polymer.state!==void 0?{state:o.polymer.state}:{}}}:{},output:{proposal:"auto"}}]},thermoPackage:{recordType:"thermophysicalPropertySystem",schemaVersion:2,components:["water"],equilibrium:{formulation:"gammaPhi",liquid:{activityModel:{model:"ideal"},standardState:"pureLiquid"},vapour:{fugacityModel:"idealGas"}}},controlDict:{application:"choupoProps",description:"Property Explorer -- estimate a new component (ephemeral)",verbosity:2}}}if(e.bjerrum){const o=e.bjerrum,u=o.indexFrom??0,b={operations:q(o.pHfrom,o.pHto,o.n).map((B,O)=>({name:`pt${String(u+O).padStart(3,"0")}`,type:"speciate",totals:{[o.master]:`${o.total} mol/kg`,...o.counter&&o.counter.total>0?{[o.counter.species]:`${o.counter.total} mol/kg`}:{}},pH:B,...o.atmosphere?{atmosphere:{[o.atmosphere.gas]:`${o.atmosphere.pAtm} atm`}}:{},temperature:o.T,output:{file:G(u+O)}}))},f={recordType:"thermophysicalPropertySystem",schemaVersion:2,components:[...e.components],aqueousProperties:{solvent:"water",activityCoefficients:{model:"Davies",referenceBasis:"aqueousMolality"}}},x={propsDict:b,thermoPackage:f,controlDict:{application:"choupoProps",description:"Property Explorer -- species distribution vs pH (ephemeral)",verbosity:2}},I={...N(e.components),...e.componentFiles??{}};return Object.keys(I).length>0&&(x.extraFiles=I),x}const n={composition:{...e.state.composition}};e.state.P!==void 0&&(n.P=e.state.P),e.state.T!==void 0&&(n.T=e.state.T);const t={};e.state.P!==void 0&&(t.P=e.state.P),e.state.T!==void 0&&(t.T=e.state.T);const a=e.ternary?{name:"explore",type:"propertyScanTernary",mode:e.ternary.mode,state:t,grid:{n:e.ternary.n},...e.ternary.tieStride!==void 0?{tieStride:e.ternary.tieStride}:{},...e.ternary.shard?{shard:{k:e.ternary.shard.k,n:e.ternary.shard.n}}:{},output:{file:p}}:null,i=e.binaryLle?{name:"explore",type:"propertyScanBinary",state:t,grid:{n:e.binaryLle.n},output:{file:p}}:null,r=e.phaseDiagram?{name:"explore",type:"purePhaseDiagram",grid:{n:e.phaseDiagram.grid},...e.phaseDiagram.solid?{solid:{...e.phaseDiagram.solid}}:{},output:{file:p}}:null,s=e.psychrometry?{name:"explore",type:"psychrometricChart",carrier:e.psychrometry.carrier,condensable:e.psychrometry.condensable,P:e.psychrometry.P,TminC:e.psychrometry.TminC,TmaxC:e.psychrometry.TmaxC,grid:{n:e.psychrometry.gridN},relativeHumidity:[...e.psychrometry.rh],wetBulb:[...e.psychrometry.wetBulb],output:{file:p}}:null,c=e.scaling?{name:"explore",type:"scalingScan",...e.scaling.activityModel==="pitzer"?{activityModel:"pitzer"}:{},totals:Object.fromEntries(Object.entries(e.scaling.totals).map(([o,u])=>[o,`${u} mol/kg`])),pH:e.scaling.pH,...e.scaling.pCO2atm!==void 0?{atmosphere:{pCO2:`${e.scaling.pCO2atm} atm`}}:{},...e.scaling.T!==void 0?{temperature:e.scaling.T}:{},...e.scaling.equilibrate&&e.scaling.equilibrate.length>0?{equilibrate:{minerals:[...e.scaling.equilibrate]}}:{},...e.scaling.equilibrate&&e.scaling.equilibrate.length>0&&e.scaling.feedFlowM3h!==void 0?{feedFlow:`${e.scaling.feedFlowM3h} m3/h`}:{},recovery:{from:e.scaling.from,to:e.scaling.to,n:e.scaling.n},output:{file:p}}:null,l=e.gibbsmap?{name:"explore",type:"gibbsMap",elements:[...e.gibbsmap.elements],species:e.gibbsmap.species.map(o=>({name:o.name,atoms:[...o.atoms]})),feed:{...e.gibbsmap.feed},Tgrid:{from:e.gibbsmap.Tfrom,to:e.gibbsmap.Tto,n:e.gibbsmap.nT},Pgrid:{from:e.gibbsmap.Pfrom,to:e.gibbsmap.Pto,n:e.gibbsmap.nP,...e.gibbsmap.logP?{log:"true"}:{}},...e.gibbsmap.deltaT?{temperatureApproach:e.gibbsmap.deltaT}:{},metric:{...e.gibbsmap.metric},output:{file:p}}:null,d=e.steam?{name:"explore",type:"steamTables",...e.steam.mode==="saturation"?{saturation:{from:e.steam.from,to:e.steam.to,n:e.steam.n}}:{isobar:{P:e.steam.P??1e5,from:e.steam.from,to:e.steam.to,n:e.steam.n}},output:{file:p}}:null,h=e.solubility?{name:"explore",type:"solubilityParameter",T:e.solubility.T,output:{file:p}}:null,m={operations:[r??s??a??i??c??l??d??h??{name:"explore",type:"propertyScan1D",vary:{variable:e.axis.variable,from:e.axis.from,to:e.axis.to,n:e.axis.n},state:n,properties:[...e.properties],output:{file:p}}]},y=()=>e.binaryLle!==void 0||e.ternary?.mode==="lle"||e.activityModel?.model==="UNIFAC"?{model:"UNIFAC"}:e.activityModel??{model:"ideal"},P=(()=>{const o=e.transport;if(!o)return null;const u={};o.model&&(u.viscosity={model:o.model}),o.thermalConductivity&&(u.thermalConductivity={model:o.thermalConductivity}),o.diffusivity&&(u.diffusivity={model:o.diffusivity});const b={};o.liquidViscosity&&(b.viscosity={model:o.liquidViscosity}),o.liquidConductivity&&(b.thermalConductivity={model:o.liquidConductivity});const f={};return Object.keys(u).length&&(f.vapour=u),Object.keys(b).length&&(f.liquid=b),Object.keys(f).length?f:null})(),U=e.ternary?.mode==="lle"||e.binaryLle||e.vleTwoLiquid?{recordType:"thermophysicalPropertySystem",schemaVersion:2,components:[...e.components],equilibrium:{formulation:"gammaGamma",liquidPhases:[{name:"liquid1",activityModel:y()},{name:"liquid2",activityModel:y()}],vapour:{fugacityModel:"idealGas"}}}:e.scaling?{recordType:"thermophysicalPropertySystem",schemaVersion:2,components:[...e.components],aqueousProperties:{solvent:"water",activityCoefficients:{model:"Davies",referenceBasis:"aqueousMolality"}}}:{recordType:"thermophysicalPropertySystem",schemaVersion:2,components:[...e.components],equilibrium:{formulation:"gammaPhi",liquid:{activityModel:e.activityModel??{model:"ideal"},standardState:"pureLiquid"},vapour:{fugacityModel:String((e.equationOfState??{model:"idealGas"}).model)}},...P?{transport:P}:{}},H={application:"choupoProps",description:`Property Explorer (interactive; ephemeral -- never written to disk)${e.mode==="pure"?" -- pure-component curves (composition has no effect)":e.mode==="mixture"?" -- mixture property at the stated composition":""}`,verbosity:2},A={propsDict:m,thermoPackage:U,controlDict:H},C={...N(e.components),...e.componentFiles??{}};return Object.keys(C).length>0&&(A.extraFiles=C),A}const z=`/*---------------------------------------------------------------------------*\\
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
  discarded by name, max |T_model - T| over the kept points below 1 K --
  DEV.md 4c C283 amended; one liquid across its validity span), and NO
  HUMAN HAS REVIEWED IT.  The engine says so on every run that reads it.
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
    rule            "DEV.md 4c C283 (amended) + C284";
    evidence        allLaboratories;   // every study fitted, none held out
    objective       twoStage;
    outlierLimit    3 K;   // |T_model - T| after the least-squares stage
    outliersDropped 0;
    pointsKept      27;
    noBubblePoint   0;
    maxAbsError     0.4977 K;
    meanAbsError    0.1909 K;
    acceptance      1 K;   // max |T_model - T| over the kept points
    verdict         accepted;
}
`,Y=`/*---------------------------------------------------------------------------*\\
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
  discarded by name, max |T_model - T| over the kept points below 1 K --
  DEV.md 4c C283 amended; one liquid across its validity span), and NO
  HUMAN HAS REVIEWED IT.  The engine says so on every run that reads it.
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
    rule            "DEV.md 4c C283 (amended) + C284";
    evidence        allLaboratories;   // every study fitted, none held out
    objective       twoStage;
    outlierLimit    3 K;   // |T_model - T| after the least-squares stage
    outliersDropped 0;
    pointsKept      68;
    noBubblePoint   0;
    maxAbsError     0.8840 K;
    meanAbsError    0.1973 K;
    acceptance      1 K;   // max |T_model - T| over the kept points
    verdict         accepted;
}
`,X=`/*---------------------------------------------------------------------------*\\
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
  discarded by name, max |T_model - T| over the kept points below 1 K --
  DEV.md 4c C283 amended; one liquid across its validity span), and NO
  HUMAN HAS REVIEWED IT.  The engine says so on every run that reads it.
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
    rule            "DEV.md 4c C283 (amended) + C284";
    evidence        allLaboratories;   // every study fitted, none held out
    objective       twoStage;
    outlierLimit    3 K;   // |T_model - T| after the least-squares stage
    outliersDropped 0;
    pointsKept      38;
    noBubblePoint   0;
    maxAbsError     0.5067 K;
    meanAbsError    0.1743 K;
    acceptance      1 K;   // max |T_model - T| over the kept points
    verdict         accepted;
}
`,W=`/*---------------------------------------------------------------------------*\\
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
  discarded by name, max |T_model - T| over the kept points below 1 K --
  DEV.md 4c C283 amended; one liquid across its validity span), and NO
  HUMAN HAS REVIEWED IT.  The engine says so on every run that reads it.
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
    rule            "DEV.md 4c C283 (amended) + C284";
    evidence        allLaboratories;   // every study fitted, none held out
    objective       twoStage;
    outlierLimit    3 K;   // |T_model - T| after the least-squares stage
    outliersDropped 0;
    pointsKept      59;
    noBubblePoint   0;
    maxAbsError     0.7187 K;
    meanAbsError    0.2636 K;
    acceptance      1 K;   // max |T_model - T| over the kept points
    verdict         accepted;
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
`,J=`/*---------------------------------------------------------------------------*\\
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
  discarded by name, max |T_model - T| over the kept points below 1 K --
  DEV.md 4c C283 amended; one liquid across its validity span), and NO
  HUMAN HAS REVIEWED IT.  The engine says so on every run that reads it.
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
    rule            "DEV.md 4c C283 (amended) + C284";
    evidence        allLaboratories;   // every study fitted, none held out
    objective       twoStage;
    outlierLimit    3 K;   // |T_model - T| after the least-squares stage
    outliersDropped 0;
    pointsKept      156;
    noBubblePoint   0;
    maxAbsError     0.6221 K;
    meanAbsError    0.1633 K;
    acceptance      1 K;   // max |T_model - T| over the kept points
    verdict         accepted;
}
`,Z=`/*---------------------------------------------------------------------------*\\
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
  discarded by name, max |T_model - T| over the kept points below 1 K --
  DEV.md 4c C283 amended; one liquid across its validity span), and NO
  HUMAN HAS REVIEWED IT.  The engine says so on every run that reads it.
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
    rule            "DEV.md 4c C283 (amended) + C284";
    evidence        allLaboratories;   // every study fitted, none held out
    objective       twoStage;
    outlierLimit    3 K;   // |T_model - T| after the least-squares stage
    outliersDropped 0;
    pointsKept      30;
    noBubblePoint   0;
    maxAbsError     0.3040 K;
    meanAbsError    0.1524 K;
    acceptance      1 K;   // max |T_model - T| over the kept points
    verdict         accepted;
}
`,ee=`/*---------------------------------------------------------------------------*\\
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
  discarded by name, max |T_model - T| over the kept points below 1 K --
  DEV.md 4c C283 amended; one liquid across its validity span), and NO
  HUMAN HAS REVIEWED IT.  The engine says so on every run that reads it.
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
    rule            "DEV.md 4c C283 (amended) + C284";
    evidence        allLaboratories;   // every study fitted, none held out
    objective       twoStage;
    outlierLimit    3 K;   // |T_model - T| after the least-squares stage
    outliersDropped 0;
    pointsKept      51;
    noBubblePoint   0;
    maxAbsError     0.9910 K;
    meanAbsError    0.4523 K;
    acceptance      1 K;   // max |T_model - T| over the kept points
    verdict         accepted;
}
`,ne=`/*---------------------------------------------------------------------------*\\
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
`,te=`/*---------------------------------------------------------------------------*\\
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
`,ae=`/*---------------------------------------------------------------------------*\\
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
  discarded by name, max |T_model - T| over the kept points below 1 K --
  DEV.md 4c C283 amended; one liquid across its validity span), and NO
  HUMAN HAS REVIEWED IT.  The engine says so on every run that reads it.
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
    rule            "DEV.md 4c C283 (amended) + C284";
    evidence        allLaboratories;   // every study fitted, none held out
    objective       twoStage;
    outlierLimit    3 K;   // |T_model - T| after the least-squares stage
    outliersDropped 0;
    pointsKept      19;
    noBubblePoint   0;
    maxAbsError     0.6512 K;
    meanAbsError    0.3082 K;
    acceptance      1 K;   // max |T_model - T| over the kept points
    verdict         accepted;
}
`,re=`/*---------------------------------------------------------------------------*\\
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
  discarded by name, max |T_model - T| over the kept points below 1 K --
  DEV.md 4c C283 amended; one liquid across its validity span), and NO
  HUMAN HAS REVIEWED IT.  The engine says so on every run that reads it.
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
    rule            "DEV.md 4c C283 (amended) + C284";
    evidence        allLaboratories;   // every study fitted, none held out
    objective       twoStage;
    outlierLimit    3 K;   // |T_model - T| after the least-squares stage
    outliersDropped 0;
    pointsKept      20;
    noBubblePoint   0;
    maxAbsError     0.3343 K;
    meanAbsError    0.1356 K;
    acceptance      1 K;   // max |T_model - T| over the kept points
    verdict         accepted;
}
`,oe=`/*---------------------------------------------------------------------------*\\
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
`,ie=`/*---------------------------------------------------------------------------*\\
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
`,se=`/*---------------------------------------------------------------------------*\\
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
`,de=`/*---------------------------------------------------------------------------*\\
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
  discarded by name, max |T_model - T| over the kept points below 1 K --
  DEV.md 4c C283 amended; one liquid across its validity span), and NO
  HUMAN HAS REVIEWED IT.  The engine says so on every run that reads it.
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
    rule            "DEV.md 4c C283 (amended) + C284";
    evidence        allLaboratories;   // every study fitted, none held out
    objective       twoStage;
    outlierLimit    3 K;   // |T_model - T| after the least-squares stage
    outliersDropped 0;
    pointsKept      53;
    noBubblePoint   0;
    maxAbsError     0.1546 K;
    meanAbsError    0.0558 K;
    acceptance      1 K;   // max |T_model - T| over the kept points
    verdict         accepted;
}
`,ce=`/*---------------------------------------------------------------------------*\\
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
`,le=`/*---------------------------------------------------------------------------*\\
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
  discarded by name, max |T_model - T| over the kept points below 1 K --
  DEV.md 4c C283 amended; one liquid across its validity span), and NO
  HUMAN HAS REVIEWED IT.  The engine says so on every run that reads it.
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
    rule            "DEV.md 4c C283 (amended) + C284";
    evidence        allLaboratories;   // every study fitted, none held out
    objective       twoStage;
    outlierLimit    3 K;   // |T_model - T| after the least-squares stage
    outliersDropped 0;
    pointsKept      32;
    noBubblePoint   0;
    maxAbsError     0.4976 K;
    meanAbsError    0.1105 K;
    acceptance      1 K;   // max |T_model - T| over the kept points
    verdict         accepted;
}
`,he=`/*---------------------------------------------------------------------------*\\
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
  discarded by name, max |T_model - T| over the kept points below 1 K --
  DEV.md 4c C283 amended; one liquid across its validity span), and NO
  HUMAN HAS REVIEWED IT.  The engine says so on every run that reads it.
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
    rule            "DEV.md 4c C283 (amended) + C284";
    evidence        allLaboratories;   // every study fitted, none held out
    objective       twoStage;
    outlierLimit    3 K;   // |T_model - T| after the least-squares stage
    outliersDropped 0;
    pointsKept      26;
    noBubblePoint   0;
    maxAbsError     0.3774 K;
    meanAbsError    0.1307 K;
    acceptance      1 K;   // max |T_model - T| over the kept points
    verdict         accepted;
}
`,ue=`/*---------------------------------------------------------------------------*\\
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
  discarded by name, max |T_model - T| over the kept points below 1 K --
  DEV.md 4c C283 amended; one liquid across its validity span), and NO
  HUMAN HAS REVIEWED IT.  The engine says so on every run that reads it.
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
    rule            "DEV.md 4c C283 (amended) + C284";
    evidence        allLaboratories;   // every study fitted, none held out
    objective       twoStage;
    outlierLimit    3 K;   // |T_model - T| after the least-squares stage
    outliersDropped 0;
    pointsKept      57;
    noBubblePoint   0;
    maxAbsError     0.4552 K;
    meanAbsError    0.1098 K;
    acceptance      1 K;   // max |T_model - T| over the kept points
    verdict         accepted;
}
`,me=`/*---------------------------------------------------------------------------*\\
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
`,pe=`/*---------------------------------------------------------------------------*\\
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
  discarded by name, max |T_model - T| over the kept points below 1 K --
  DEV.md 4c C283 amended; one liquid across its validity span), and NO
  HUMAN HAS REVIEWED IT.  The engine says so on every run that reads it.
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
    rule            "DEV.md 4c C283 (amended) + C284";
    evidence        allLaboratories;   // every study fitted, none held out
    objective       twoStage;
    outlierLimit    3 K;   // |T_model - T| after the least-squares stage
    outliersDropped 5;
    pointsKept      12;
    noBubblePoint   0;
    maxAbsError     0.1070 K;
    meanAbsError    0.0642 K;
    acceptance      1 K;   // max |T_model - T| over the kept points
    verdict         accepted;
}
`,be=`/*---------------------------------------------------------------------------*\\
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
  discarded by name, max |T_model - T| over the kept points below 1 K --
  DEV.md 4c C283 amended; one liquid across its validity span), and NO
  HUMAN HAS REVIEWED IT.  The engine says so on every run that reads it.
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
    rule            "DEV.md 4c C283 (amended) + C284";
    evidence        allLaboratories;   // every study fitted, none held out
    objective       twoStage;
    outlierLimit    3 K;   // |T_model - T| after the least-squares stage
    outliersDropped 0;
    pointsKept      24;
    noBubblePoint   0;
    maxAbsError     0.6349 K;
    meanAbsError    0.2000 K;
    acceptance      1 K;   // max |T_model - T| over the kept points
    verdict         accepted;
}
`,fe=`/*---------------------------------------------------------------------------*\\
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
`,ve=`/*---------------------------------------------------------------------------*\\
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
  discarded by name, max |T_model - T| over the kept points below 1 K --
  DEV.md 4c C283 amended; one liquid across its validity span), and NO
  HUMAN HAS REVIEWED IT.  The engine says so on every run that reads it.
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
    rule            "DEV.md 4c C283 (amended) + C284";
    evidence        allLaboratories;   // every study fitted, none held out
    objective       twoStage;
    outlierLimit    3 K;   // |T_model - T| after the least-squares stage
    outliersDropped 0;
    pointsKept      36;
    noBubblePoint   0;
    maxAbsError     0.6592 K;
    meanAbsError    0.2972 K;
    acceptance      1 K;   // max |T_model - T| over the kept points
    verdict         accepted;
}
`,ye=`/*---------------------------------------------------------------------------*\\
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
  discarded by name, max |T_model - T| over the kept points below 1 K --
  DEV.md 4c C283 amended; one liquid across its validity span), and NO
  HUMAN HAS REVIEWED IT.  The engine says so on every run that reads it.
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
    rule            "DEV.md 4c C283 (amended) + C284";
    evidence        allLaboratories;   // every study fitted, none held out
    objective       twoStage;
    outlierLimit    3 K;   // |T_model - T| after the least-squares stage
    outliersDropped 0;
    pointsKept      29;
    noBubblePoint   0;
    maxAbsError     0.4962 K;
    meanAbsError    0.2074 K;
    acceptance      1 K;   // max |T_model - T| over the kept points
    verdict         accepted;
}
`,_e=`/*---------------------------------------------------------------------------*\\
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
`,Te=`/*---------------------------------------------------------------------------*\\
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
  discarded by name, max |T_model - T| over the kept points below 1 K --
  DEV.md 4c C283 amended; one liquid across its validity span), and NO
  HUMAN HAS REVIEWED IT.  The engine says so on every run that reads it.
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
    rule            "DEV.md 4c C283 (amended) + C284";
    evidence        allLaboratories;   // every study fitted, none held out
    objective       twoStage;
    outlierLimit    3 K;   // |T_model - T| after the least-squares stage
    outliersDropped 0;
    pointsKept      28;
    noBubblePoint   0;
    maxAbsError     0.5811 K;
    meanAbsError    0.2348 K;
    acceptance      1 K;   // max |T_model - T| over the kept points
    verdict         accepted;
}
`,ge=`/*---------------------------------------------------------------------------*\\
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
`,je=`/*---------------------------------------------------------------------------*\\
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
  discarded by name, max |T_model - T| over the kept points below 1 K --
  DEV.md 4c C283 amended; one liquid across its validity span), and NO
  HUMAN HAS REVIEWED IT.  The engine says so on every run that reads it.
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
    rule            "DEV.md 4c C283 (amended) + C284";
    evidence        allLaboratories;   // every study fitted, none held out
    objective       twoStage;
    outlierLimit    3 K;   // |T_model - T| after the least-squares stage
    outliersDropped 0;
    pointsKept      18;
    noBubblePoint   0;
    maxAbsError     0.3944 K;
    meanAbsError    0.2392 K;
    acceptance      1 K;   // max |T_model - T| over the kept points
    verdict         accepted;
}
`,we=`/*---------------------------------------------------------------------------*\\
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
`,Ee=`/*---------------------------------------------------------------------------*\\
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
`,Re=`/*---------------------------------------------------------------------------*\\
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
`,Pe=[],Ae=Object.assign({"../../../data/standards/parameters/NRTL/1Pentanol-2Hexanone.dat":z,"../../../data/standards/parameters/NRTL/1Pentanol-anisole.dat":Y,"../../../data/standards/parameters/NRTL/1Propanol-water.dat":X,"../../../data/standards/parameters/NRTL/224Trimethylpentane-isopropanol.dat":Q,"../../../data/standards/parameters/NRTL/2Methyl1Butanol-ethanol.dat":W,"../../../data/standards/parameters/NRTL/acetone-ethanol.dat":$,"../../../data/standards/parameters/NRTL/acetone-methanol.dat":J,"../../../data/standards/parameters/NRTL/acetonitrile-ethylAcetate.dat":Z,"../../../data/standards/parameters/NRTL/acetonitrile-methanol.dat":ee,"../../../data/standards/parameters/NRTL/acetonitrile-water.dat":ne,"../../../data/standards/parameters/NRTL/benzene-toluene.dat":te,"../../../data/standards/parameters/NRTL/cyclohexane-nHeptane.dat":ae,"../../../data/standards/parameters/NRTL/cyclohexane-tetrahydrofuran.dat":re,"../../../data/standards/parameters/NRTL/dimethylCarbonate-isopropanol.dat":oe,"../../../data/standards/parameters/NRTL/dimethylCarbonate-methanol.dat":ie,"../../../data/standards/parameters/NRTL/ethanol-ethylAcetate.dat":se,"../../../data/standards/parameters/NRTL/ethanol-methylEthylKetone.dat":de,"../../../data/standards/parameters/NRTL/ethanol-water.dat":ce,"../../../data/standards/parameters/NRTL/ethylAcetate-methanol.dat":le,"../../../data/standards/parameters/NRTL/ethylBenzene-monochlorobenzene.dat":he,"../../../data/standards/parameters/NRTL/isopropanol-isopropylAcetate.dat":ue,"../../../data/standards/parameters/NRTL/isopropanol-water.dat":me,"../../../data/standards/parameters/NRTL/mXylene-nDecane.dat":pe,"../../../data/standards/parameters/NRTL/mXylene-nOctane.dat":be,"../../../data/standards/parameters/NRTL/methanol-methylAcetate.dat":fe,"../../../data/standards/parameters/NRTL/methanol-methylEthylKetone.dat":ve,"../../../data/standards/parameters/NRTL/methanol-tetrahydrofuran.dat":ye,"../../../data/standards/parameters/NRTL/methanol-water.dat":_e,"../../../data/standards/parameters/NRTL/nButanol-nButylAcetate.dat":Te,"../../../data/standards/parameters/NRTL/nButanol-water.dat":ge,"../../../data/standards/parameters/NRTL/nHeptane-thiophene.dat":je}),Ce=Object.assign({}),xe=Object.assign({"../../../data/standards/parameters/UNIQUAC/aceticAcid-methylAcetate.dat":we,"../../../data/standards/parameters/UNIQUAC/methanol-methylAcetate.dat":Ee,"../../../data/standards/parameters/UNIQUAC/methylAcetate-water.dat":Re});function v(e){return typeof e=="string"?e:typeof e=="number"?String(e):""}function R(e,n){let t;try{t=w(E(e))}catch{return null}const a=t.components;if(!Array.isArray(a)||a.length!==2)return null;const i=v(t.model)||n.modelHint;if(!i)return null;const r={},s=t.parameters;if(typeof s=="object"&&s!==null&&!Array.isArray(s))for(const[d,h]of Object.entries(s))(typeof h=="number"||typeof h=="string")&&(r[d]=h);const c=t.provenance,l=typeof c=="object"&&c!==null&&!Array.isArray(c)?c:null;return{model:i,a:String(a[0]),b:String(a[1]),tier:n.tier,file:n.file,stem:n.file.split("/").pop().replace(/\.dat$/,""),parameters:r,provenance:{origin:l?v(l.origin):"",reviewStatus:l?v(l.reviewStatus):"",fittedInCase:l?v(l.fittedInCase):"",citation:l?v(l.citation)||v(l.source):""}}}function g(e,n){const t=[];for(const[a,i]of Object.entries(e)){const r=a.replace(/^.*?data\/standards\//,"data/standards/"),s=R(i,{file:r,tier:"standards",modelHint:n});s&&t.push(s)}return t}const k=[...g(Ae,"NRTL"),...g(Ce,"Wilson"),...g(xe,"UNIQUAC")];function K(e,n,t){return e.a===n&&e.b===t||e.a===t&&e.b===n}function Qe(e,n,t){return k.some(a=>a.model===e&&K(a,n,t))}let j=null;function Ie(){if(j)return j;const e=[];for(const n of Pe){const t=n.file.includes("/")?n.file.split("/")[0]:"",a=R(n.body,{file:`data/local/parameters/${n.file}`,tier:"local",modelHint:t});a&&e.push(a)}return j=e,e}const Oe=/(?:^|\/)constant\/parameters\/([^/]+)\/[^/]+\.dat$/;function Ne(e){if(!e)return[];const n=[];for(const[t,a]of Object.entries(e)){const i=Oe.exec(t);if(!i)continue;const r=R(a,{file:t,tier:"case",modelHint:i[1]});r&&n.push(r)}return n}function We(e,n,t){return[...k,...Ie(),...Ne(t)].filter(a=>K(a,e,n))}function $e(e){const n=[];e.provenance.origin&&n.push(e.provenance.origin),e.provenance.reviewStatus&&n.push(e.provenance.reviewStatus),e.provenance.fittedInCase&&n.push(`fitted in ${e.provenance.fittedInCase.split("/").pop()}`);const t=e.tier==="standards"?"standards":e.tier==="local"?"data/local":"open case";return n.length?`${t} · ${n.join(" · ")}`:t}const M={water:[{group:"H2O",count:1}],ethanol:[{group:"CH3",count:1},{group:"CH2",count:1},{group:"OH",count:1}],nButanol:[{group:"CH3",count:1},{group:"CH2",count:3},{group:"OH",count:1}],nHexane:[{group:"CH3",count:2},{group:"CH2",count:4}],benzene:[{group:"ACH",count:6}],C4H10:[{group:"CH3",count:2},{group:"CH2",count:2}],nPentane:[{group:"CH3",count:2},{group:"CH2",count:3}],isopentane:[{group:"CH3",count:3},{group:"CH2",count:1},{group:"CH",count:1}],nHeptane:[{group:"CH3",count:2},{group:"CH2",count:5}],C8H18:[{group:"CH3",count:2},{group:"CH2",count:6}],cyclohexane:[{group:"CH2",count:6}]};function Se(e){let n;try{n=w(E(e))}catch{return null}const t=n.unifac;if(!t||typeof t!="object")return null;const a=t.groups;if(!Array.isArray(a))return null;const i=[];for(const r of a)r&&typeof r=="object"&&typeof r.group=="string"&&typeof r.count=="number"&&i.push({group:r.group,count:r.count});return i.length?i:null}function Je(e){const n={};if(!e)return n;for(const[t,a]of Object.entries(e)){if(!/(^|\/)constant\/components\/[^/]+\.dat$/.test(t))continue;let i;try{i=w(E(a))}catch{continue}const r=typeof i.name=="string"?i.name:"";if(!r)continue;const s=Se(a);s&&(n[r]=s)}return n}function Ze(e,n={}){return Object.prototype.hasOwnProperty.call(n,e)||Object.prototype.hasOwnProperty.call(M,e)}function De(e,n={}){const t={};for(const a of e){const i=n[a]??M[a];i&&(t[a]=i.map(r=>({group:r.group,count:r.count})))}return t}function Le(e,n){const t=_(e[0],n)?.tb,a=_(e[1],n)?.tb;return typeof t=="number"&&typeof a=="number"&&a<t?[e[1],e[0]]:e}function en(e){const n=Le(e.pair,e.catalogue),t=n[0],a=n[1],i=e.kind!=="gamma",r=i?["T_bubble",`y_eq_${t}`,"liquid_stable"]:[`gamma_${t}`,`gamma_${a}`];return{components:[...n],properties:r,axis:{variable:`x[${t}]`,from:0,to:1,n:Math.max(2,Math.round(e.n))},state:{P:e.P,composition:{[t]:.5,[a]:.5}},activityModel:{model:e.activity},equationOfState:{model:e.eos},...i?{vleTwoLiquid:!0}:{},...e.activity==="UNIFAC"?{unifacGroups:De(n,e.localUnifac)}:{},...e.componentFiles&&Object.keys(e.componentFiles).length>0?{componentFiles:e.componentFiles}:{}}}function nn(e){const n=[...e.pair].sort((d,h)=>(_(d,e.catalogue)?.tb??0)-(_(h,e.catalogue)?.tb??0)),t=n[0]??"",a=n[n.length-1]??"",i=e.TminK-273.15,r=e.TmaxK-273.15,s=[];for(let d=e.rhFrom;d<=e.rhTo+1e-9&&d<100;d+=Math.max(1,e.rhStep))s.push(Math.round(d));const c=[],l=Math.max(5,e.wbStepC);for(let d=Math.ceil(i/l)*l;d<=Math.min(r,95);d+=l)c.push(d);return{components:[t,a],properties:[],axis:{variable:"T",from:0,to:1,n:2},state:{composition:{[t]:.5,[a]:.5}},psychrometry:{carrier:t,condensable:a,P:e.P,TminC:i,TmaxC:r,gridN:Math.max(20,Math.round(e.gridN)),rh:s,wetBulb:c},transport:{model:"Chung",thermalConductivity:"Eucken",diffusivity:"Fuller"},...e.componentFiles&&Object.keys(e.componentFiles).length>0?{componentFiles:{...e.componentFiles}}:{}}}export{S as B,p as E,Ue as I,He as a,en as b,Fe as c,ze as d,G as e,q as f,Je as g,Ye as h,Be as i,Qe as j,Ze as k,We as l,Ve as m,Ge as n,Le as o,$e as p,qe as q,nn as r,Xe as s,De as u};
