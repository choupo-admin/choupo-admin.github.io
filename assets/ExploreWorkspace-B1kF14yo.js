import{ae as Ye,bc as Qe,aS as Ze,bp as Se,aJ as e,aK as tn,aQ as cn,bf as Aa,b9 as gn,b2 as d,a as qn,W as vn,G as N,B as bn,at as se,Z as S,a_ as fn,V as Ue,a0 as en,d as En,q as ia,_ as Ha,f as de,U as yt,c as nn,a3 as ra,g as Tt,i as vt,y as Pt,Q as R,A as Pe,L as ze,X as D,al as St,o as Ot,b5 as _a,b8 as At,av as Ht,aW as Gn,aU as Le,R as ce,p as _t,h as Et,bn as wt,l as xt,m as Nt,k as Rt}from"./index-D9GLqEZJ.js";import{b as kt,d as Mt}from"./CsvAutoPlot-IHv23Qzz.js";import{G as Kt}from"./GibbsMapPanel-D-aTUXXN.js";import{P as J,e as rn,c as Xe,a as no}from"./plotly-DxdviHXi.js";import{S as sa,p as qt,M as It}from"./exploreMccabePopOut-DlAf8iGE.js";import{S as Ao}from"./Slider-DbHEsEiL.js";import{S as Tn}from"./Select-LdEg7Oax.js";import{C as Eo}from"./Collapse-B_X0AGgI.js";import{D as la}from"./Divider-DjSpx6cP.js";import{C as Jt}from"./CopyButton-Bh_chEGc.js";import"./InputsGroupFieldset-DjCCBSB4.js";/**
 * @license @tabler/icons-react v3.44.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vt=[["path",{d:"M12 6a2 2 0 1 0 4 0a2 2 0 1 0 -4 0",key:"svg-0"}],["path",{d:"M4 6l8 0",key:"svg-1"}],["path",{d:"M16 6l4 0",key:"svg-2"}],["path",{d:"M6 12a2 2 0 1 0 4 0a2 2 0 1 0 -4 0",key:"svg-3"}],["path",{d:"M4 12l2 0",key:"svg-4"}],["path",{d:"M10 12l10 0",key:"svg-5"}],["path",{d:"M15 18a2 2 0 1 0 4 0a2 2 0 1 0 -4 0",key:"svg-6"}],["path",{d:"M4 18l11 0",key:"svg-7"}],["path",{d:"M19 18l1 0",key:"svg-8"}]],Dt=Ye("outline","adjustments-horizontal","AdjustmentsHorizontal",Vt);/**
 * @license @tabler/icons-react v3.44.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ft=[["path",{d:"M3 19a9 9 0 0 1 9 0a9 9 0 0 1 9 0",key:"svg-0"}],["path",{d:"M3 6a9 9 0 0 1 9 0a9 9 0 0 1 9 0",key:"svg-1"}],["path",{d:"M3 6l0 13",key:"svg-2"}],["path",{d:"M12 6l0 13",key:"svg-3"}],["path",{d:"M21 6l0 13",key:"svg-4"}]],Gt=Ye("outline","book","Book",Ft);/**
 * @license @tabler/icons-react v3.44.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lt=[["path",{d:"M12 5l0 14",key:"svg-0"}],["path",{d:"M5 12l14 0",key:"svg-1"}]],jt=Ye("outline","plus","Plus",Lt);/**
 * @license @tabler/icons-react v3.44.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bt=[["path",{d:"M4 7l16 0",key:"svg-0"}],["path",{d:"M10 11l0 6",key:"svg-1"}],["path",{d:"M14 11l0 6",key:"svg-2"}],["path",{d:"M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12",key:"svg-3"}],["path",{d:"M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3",key:"svg-4"}]],Wt=Ye("outline","trash","Trash",Bt),On="explore.csv";function ve(n){if(n.estimate){const p=n.estimate;return{propsDict:{operations:[{name:"estimate",type:"estimateComponent",component:p.component,model:p.estimator??"Joback",groups:p.groups.map(q=>({group:q.group,count:q.count})),...p.reference&&Object.keys(p.reference).length>0?{reference:{...p.reference}}:{},...p.polymer&&(p.polymer.packing!==void 0||p.polymer.state!==void 0)?{polymer:{...p.polymer.packing!==void 0?{packing:p.polymer.packing}:{},...p.polymer.state!==void 0?{state:p.polymer.state}:{}}}:{},output:{proposal:"auto"}}]},thermoPackage:{recordType:"thermophysicalPropertySystem",schemaVersion:2,components:["water"],equilibrium:{formulation:"gammaPhi",liquid:{activityModel:{model:"ideal"},standardState:"pureLiquid"},vapour:{fugacityModel:"idealGas"}}},controlDict:{application:"choupoProps",description:"Property Explorer -- estimate a new component (ephemeral)",verbosity:2}}}const t={composition:{...n.state.composition}};n.state.P!==void 0&&(t.P=n.state.P),n.state.T!==void 0&&(t.T=n.state.T);const o={};n.state.P!==void 0&&(o.P=n.state.P),n.state.T!==void 0&&(o.T=n.state.T);const i=n.ternary?{name:"explore",type:"propertyScanTernary",mode:n.ternary.mode,state:o,grid:{n:n.ternary.n},...n.ternary.tieStride!==void 0?{tieStride:n.ternary.tieStride}:{},...n.ternary.shard?{shard:{k:n.ternary.shard.k,n:n.ternary.shard.n}}:{},output:{file:On}}:null,r=n.binaryLle?{name:"explore",type:"propertyScanBinary",state:o,grid:{n:n.binaryLle.n},output:{file:On}}:null,s=n.phaseDiagram?{name:"explore",type:"purePhaseDiagram",grid:{n:n.phaseDiagram.grid},...n.phaseDiagram.solid?{solid:{...n.phaseDiagram.solid}}:{},output:{file:On}}:null,m=n.psychrometry?{name:"explore",type:"psychrometricChart",carrier:n.psychrometry.carrier,condensable:n.psychrometry.condensable,P:n.psychrometry.P,TminC:n.psychrometry.TminC,TmaxC:n.psychrometry.TmaxC,grid:{n:n.psychrometry.gridN},relativeHumidity:[...n.psychrometry.rh],wetBulb:[...n.psychrometry.wetBulb],output:{file:On}}:null,l=n.scaling?{name:"explore",type:"scalingScan",...n.scaling.activityModel==="pitzer"?{activityModel:"pitzer"}:{},totals:Object.fromEntries(Object.entries(n.scaling.totals).map(([p,O])=>[p,`${O} mol/kg`])),pH:n.scaling.pH,...n.scaling.pCO2atm!==void 0?{atmosphere:{pCO2:`${n.scaling.pCO2atm} atm`}}:{},...n.scaling.T!==void 0?{temperature:n.scaling.T}:{},...n.scaling.equilibrate&&n.scaling.equilibrate.length>0?{equilibrate:{minerals:[...n.scaling.equilibrate]}}:{},...n.scaling.equilibrate&&n.scaling.equilibrate.length>0&&n.scaling.feedFlowM3h!==void 0?{feedFlow:`${n.scaling.feedFlowM3h} m3/h`}:{},recovery:{from:n.scaling.from,to:n.scaling.to,n:n.scaling.n},output:{file:On}}:null,f=n.gibbsmap?{name:"explore",type:"gibbsMap",elements:[...n.gibbsmap.elements],species:n.gibbsmap.species.map(p=>({name:p.name,atoms:[...p.atoms]})),feed:{...n.gibbsmap.feed},Tgrid:{from:n.gibbsmap.Tfrom,to:n.gibbsmap.Tto,n:n.gibbsmap.nT},Pgrid:{from:n.gibbsmap.Pfrom,to:n.gibbsmap.Pto,n:n.gibbsmap.nP,...n.gibbsmap.logP?{log:"true"}:{}},...n.gibbsmap.deltaT?{temperatureApproach:n.gibbsmap.deltaT}:{},metric:{...n.gibbsmap.metric},output:{file:On}}:null,c=n.steam?{name:"explore",type:"steamTables",...n.steam.mode==="saturation"?{saturation:{from:n.steam.from,to:n.steam.to,n:n.steam.n}}:{isobar:{P:n.steam.P??1e5,from:n.steam.from,to:n.steam.to,n:n.steam.n}},output:{file:On}}:null,C={operations:[s??m??i??r??l??f??c??{name:"explore",type:"propertyScan1D",vary:{variable:n.axis.variable,from:n.axis.from,to:n.axis.to,n:n.axis.n},state:t,properties:[...n.properties],output:{file:On}}]},y=()=>n.binaryLle!==void 0||n.ternary?.mode==="lle"||n.activityModel?.model==="UNIFAC"?{model:"UNIFAC"}:n.activityModel??{model:"ideal"},g=(()=>{const p=n.transport;if(!p)return null;const O={};p.model&&(O.viscosity={model:p.model}),p.thermalConductivity&&(O.thermalConductivity={model:p.thermalConductivity}),p.diffusivity&&(O.diffusivity={model:p.diffusivity});const x={};p.liquidViscosity&&(x.viscosity={model:p.liquidViscosity}),p.liquidConductivity&&(x.thermalConductivity={model:p.liquidConductivity});const W={};return Object.keys(O).length&&(W.vapour=O),Object.keys(x).length&&(W.liquid=x),Object.keys(W).length?W:null})(),v=n.ternary?.mode==="lle"||n.binaryLle||n.vleTwoLiquid?{recordType:"thermophysicalPropertySystem",schemaVersion:2,components:[...n.components],equilibrium:{formulation:"gammaGamma",liquidPhases:[{name:"liquid1",activityModel:y()},{name:"liquid2",activityModel:y()}],vapour:{fugacityModel:"idealGas"}}}:n.scaling?{recordType:"thermophysicalPropertySystem",schemaVersion:2,components:[...n.components],aqueousProperties:{solvent:"water",activityCoefficients:{model:"Davies",referenceBasis:"aqueousMolality"}}}:{recordType:"thermophysicalPropertySystem",schemaVersion:2,components:[...n.components],equilibrium:{formulation:"gammaPhi",liquid:{activityModel:n.activityModel??{model:"ideal"},standardState:"pureLiquid"},vapour:{fugacityModel:String((n.equationOfState??{model:"idealGas"}).model)}},...g?{transport:g}:{}},H={application:"choupoProps",description:`Property Explorer (interactive; ephemeral -- never written to disk)${n.mode==="pure"?" -- pure-component curves (composition has no effect)":n.mode==="mixture"?" -- mixture property at the stated composition":""}`,verbosity:2},E={propsDict:C,thermoPackage:v,controlDict:H};return n.componentFiles&&Object.keys(n.componentFiles).length>0&&(E.extraFiles={...n.componentFiles}),E}const Ut=`/*--------------------------------*- Choupo -*-----------------------*\\
  Component: 1Butene  (C4H8, CAS 106-98-9)
  PROPOSAL TIER -- UNVERIFIED.  Imported from CoolProp 7.2.0 (MIT);
  pure-fluid properties from the published reference EOS below.
  Reference EOS: Lemmon-FPE-2005
  NOTE: formation properties (dHf, s_298) and group decompositions
  are NOT provided by CoolProp -> omitted here (a gap, not fabricated).
\\*---------------------------------------------------------------------------*/

name        1Butene;

//  Review state, MACHINE-READABLE (AP2, 2026-08-05).  This used to
//  live only in the banner above, which the parser discards -- so the
//  engine could not announce it and a run said nothing.
reviewStatus   interim;
reviewReason   importedFromCoolProp720_notCheckedAgainstPrimaries;
formula     C4H8;
CAS         106-98-9;

MW          56.1063;        // kg/kmol  [CoolProp]
Tc          419.2902;        // K        [CoolProp EOS]
Pc          40.05724;        // bar      [CoolProp EOS]
omega       0.19186;        // [-]      [CoolProp EOS]
Tb          266.8440;        // K  normal boiling [CoolProp]
HvapTb      22006.1;        // J/mol  at Tb     [CoolProp]
Vliq        9.5390e-05;        // m3/mol @298K     [CoolProp]

vaporPressure
{
    model         Antoine;
    // log10(Psat [bar]) = A - B / (T[K] + C)   -- fitted to CoolProp EOS
    coefficients  (4.05923   966.729   -28.4931);
    Trange        (188.68  410.90);
}

idealGasHeatCapacity
{
    model         polynomial;
    // Cp [J/(mol.K)] = a0 + a1 T + a2 T^2 + a3 T^3   -- fitted to CoolProp cp0
    coefficients  (14.4217  0.249192  -1.57119e-05  -5.24389e-08);
    Trange        (200  1000);
}

liquidHeatCapacity
{
    model         polynomial;
    // Cp_liq [J/(mol.K)]   -- fitted to CoolProp saturated-liquid cp
    coefficients  (103.465  -0.0137289  3.21038e-05  1.02473e-06);
    Trange        (210  267);
}

triplePoint
{
    T   87.8000;
    P   0.0000;
}

standardThermochemistry
{
    dHf_298   -540.0;        // J/mol  ideal-gas [origin=measured method=NASA-TM4513]
    s_298     307.86;        // J/(mol.K) third-law absolute [NASA-TM4513]
}

provenance
{
    constants      "CoolProp 7.2.0 -- Lemmon-FPE-2005";
    vaporPressure  "Antoine fitted to CoolProp EOS saturation, AAD 0.69%";
    idealGasCp     "polynomial fitted to CoolProp cp0, maxerr 2.22%";
    liquidCp       "polynomial fitted to CoolProp sat-liquid cp, maxerr 0.00%";
    triplePoint    "CoolProp reference EOS triple-point T,P";
    standardThermochemistry "NASA TM-4513 (McBride-Gordon-Reno 1993), H0/S0(298.15) from NASA-7 poly";
}

groups
{
    unifac ( { group CH3; count 1; } { group CH2; count 1; } { group CH2=CH; count 1; } );   // added from data/groupEstimative (UNIFAC decomposition; vocab-checked vs groups.dat)
}

cosmo
{
    VT2005
    {
        model       COSMOSAC;
        variant     "2002";
        source      "VT-2005 sigma-profile database (Mullins et al., Ind. Eng. Chem. Res. 45 (2006) 4389; DFT-COSMO), file VT2005-0126-PROF.txt bundled in usnistgov/COSMOSAC; CAS 106-98-9";
        licence     externalRestricted;   // VT-2005: redistribution NOT confirmed -- values NOT shipped
        installed   false;                 // install your own copy: bin/choupo-import-cosmo (-> data/local/cosmo/VT2005/)
    }
}
`,zt=`/*--------------------------------*- Choupo -*-----------------------*\\
  Component: Argon  (Ar, CAS 7440-37-1)

  Monatomic noble gas; ~0.93 % of air by mole.  Inert dilutent in
  high-T combustion experiments (replacing N2 when one wants to remove
  NOx formation) and a common shielding gas in welding / metallurgy.
  Cp_p = 5/2 R is exact for any T (no internal degrees of freedom).
  Sources: constants (Tc/Pc/omega/MW/Tb) cross-checked vs CoolProp 7.2.0
  reference EOS; standardThermochemistry cross-checked vs NASA TM-4513
  (McBride-Gordon-Reno 1993); idealGasHeatCapacity -- individual
  literature value, primary re-citation pending (IST review).
\\*---------------------------------------------------------------------------*/

name        Ar;
formula     Ar;
CAS         7440-37-1;

MW          39.948;            // kg/kmol
Tc          150.86;             // K
Pc          48.98;              // bar
omega       -0.002;             // [-]  (essentially zero by IUPAC convention)
Tb          87.30;              // K
HvapTb      6447;               // J/mol
Vliq        2.86e-5;            // m^3/mol

standardThermochemistry
{
    dHf_298    0.0;             // J/mol  -- element in its standard state
    s_298      154.84;          // J/(mol·K)
}

vaporPressure
{
    model         Antoine;
    coefficients  (3.92474   304.227   -8.250);
    Trange        (84  150);
}

idealGasHeatCapacity
{
    model         polynomial;
    // Monatomic: Cp = 5/2 R = 20.79 J/(mol·K) independent of T.
    coefficients  (20.79   0.0   0.0   0.0);
    Trange        (250  6000);
}
`,$t=`/*--------------------------------*- Choupo -*-----------------------*\\
  Component: Atomic carbon (gas phase; relevant in very high-T sooting flames)
  Generated by bin/import_nasa.py from NASA-7 polynomial data
  (Burcat 2005 / JANAF).  No liquid phase at process conditions ---
  the entry is tagged \`role nonvolatile;\` so vapour-pressure routines
  never get called.  dHf_298 and s_298 from NASA-7 integration
  constants at T = 298.15 K.
\\*---------------------------------------------------------------------------*/

name           C;
formula        C;
CAS            7440-44-0;

MW             12.011;       // kg/kmol
role        nonvolatile;
tags           ( radical gasPhase combustion );

standardThermochemistry
{
    dHf_298    716665.9199;            // J/mol  -- ideal-gas reference
    s_298      158.1007;           // J/(mol·K)  -- third-law absolute
}

idealGasHeatCapacity
{
    model         polynomial;
    coefficients  (2.087274e+01   -1.512880e-04   5.778594e-08   1.026483e-13);
    Trange        (250  3000);
}
`,Yt=`/*--------------------------------*- Choupo -*-----------------------*\\
  Component: Ethynyl radical (acetylene chain; soot-precursor chemistry)
  Generated by bin/import_nasa.py from NASA-7 polynomial data
  (GRI-Mech Version 3.0 Thermodynamics released 7/30/99).  No liquid phase at process conditions ---
  the entry is tagged \`role nonvolatile;\` so vapour-pressure routines
  never get called.  dHf_298 and s_298 from NASA-7 integration
  constants at T = 298.15 K.
\\*---------------------------------------------------------------------------*/

name           C2H;
formula        C2H;
CAS            n/a;        // radical registry number: pending curation

MW             25.03;       // kg/kmol
role        nonvolatile;
tags           ( radical gasPhase combustion );

standardThermochemistry
{
    dHf_298    566202.2453;            // J/mol  -- ideal-gas reference
    s_298      213.3356;           // J/(mol·K)  -- third-law absolute
}

idealGasHeatCapacity
{
    model         polynomial;
    coefficients  (3.736422e+01   1.550725e-02   1.779219e-06   -1.627248e-09);
    Trange        (250  3000);
}
`,Qt=`/*--------------------------------*- Choupo -*-----------------------*\\
  Component: Vinyl radical (ethylene oxidation; C2 chain carrier)
  Generated by bin/import_nasa.py from NASA-7 polynomial data
  (GRI-Mech Version 3.0 Thermodynamics released 7/30/99).  No liquid phase at process conditions ---
  the entry is tagged \`role nonvolatile;\` so vapour-pressure routines
  never get called.  dHf_298 and s_298 from NASA-7 integration
  constants at T = 298.15 K.
\\*---------------------------------------------------------------------------*/

name           C2H3;
formula        C2H3;
CAS            n/a;        // radical registry number: pending curation

MW             27.046;       // kg/kmol
role        nonvolatile;
tags           ( radical gasPhase combustion );

standardThermochemistry
{
    dHf_298    299738.4429;            // J/mol  -- ideal-gas reference
    s_298      233.8917;           // J/(mol·K)  -- third-law absolute
}

idealGasHeatCapacity
{
    model         polynomial;
    coefficients  (1.334361e+01   1.166587e-01   -6.461380e-05   1.438098e-08);
    Trange        (250  3000);
}
`,Zt=`/*--------------------------------*- Choupo -*-----------------------*\\
  Component: Ethyl radical (ethane/LPG oxidation entry channel)
  Generated by bin/import_nasa.py from NASA-7 polynomial data
  (GRI-Mech Version 3.0 Thermodynamics released 7/30/99).  No liquid phase at process conditions ---
  the entry is tagged \`role nonvolatile;\` so vapour-pressure routines
  never get called.  dHf_298 and s_298 from NASA-7 integration
  constants at T = 298.15 K.
\\*---------------------------------------------------------------------------*/

name           C2H5;
formula        C2H5;
CAS            n/a;        // radical registry number: pending curation

MW             29.062;       // kg/kmol
role        nonvolatile;
tags           ( radical gasPhase combustion );

standardThermochemistry
{
    dHf_298    118657.5639;            // J/mol  -- ideal-gas reference
    s_298      247.1171;           // J/(mol·K)  -- third-law absolute
}

idealGasHeatCapacity
{
    model         polynomial;
    coefficients  (1.018531e+01   1.538585e-01   -6.726510e-05   1.097442e-08);
    Trange        (250  3000);
}
`,Xt=`/*--------------------------------*- Choupo -*-----------------------*\\
  Component: Dicarbon monoxide radical (ketenyl decomposition)
  Generated by bin/import_nasa.py from NASA-7 polynomial data
  (BURCAT.THR).  No liquid phase at process conditions ---
  the entry is tagged \`role nonvolatile;\` so vapour-pressure routines
  never get called.  dHf_298 and s_298 from NASA-7 integration
  constants at T = 298.15 K.
\\*---------------------------------------------------------------------------*/

name           C2O;
formula        C2O;
CAS            n/a;        // radical registry number: pending curation

MW             40.021;       // kg/kmol
role        nonvolatile;
tags           ( radical gasPhase combustion );

standardThermochemistry
{
    dHf_298    378857.8412;            // J/mol  -- ideal-gas reference
    s_298      233.6225;           // J/(mol·K)  -- third-law absolute
}

idealGasHeatCapacity
{
    model         polynomial;
    coefficients  (3.011259e+01   5.401806e-02   -3.704679e-05   9.667082e-09);
    Trange        (250  3000);
}
`,ni=`/*--------------------------------*- Choupo -*-----------------------*\\
  Component: PROPARGYL radical -- THE soot gateway (C3H3 + C3H3 -> benzene ring)
  Generated by bin/import_nasa.py from NASA-7 polynomial data
  (BURCAT.THR).  No liquid phase at process conditions ---
  the entry is tagged \`role nonvolatile;\` so vapour-pressure routines
  never get called.  dHf_298 and s_298 from NASA-7 integration
  constants at T = 298.15 K.
\\*---------------------------------------------------------------------------*/

name           C3H3;
formula        C3H3;
CAS            n/a;        // radical registry number: pending curation

MW             39.057;       // kg/kmol
role        nonvolatile;
tags           ( radical gasPhase combustion soot );

standardThermochemistry
{
    dHf_298    523961.0141;            // J/mol  -- ideal-gas reference
    s_298      253.1007;           // J/(mol·K)  -- third-law absolute
}

idealGasHeatCapacity
{
    model         polynomial;
    coefficients  (4.835286e+00   1.871185e-01   -1.227798e-04   3.093975e-08);
    Trange        (250  3000);
}
`,ei=`/*--------------------------------*- Choupo -*-----------------------*\\
  Component: ALLYL radical (resonance-stabilised; propene oxidation)
  Generated by bin/import_nasa.py from NASA-7 polynomial data
  (BURCAT.THR).  No liquid phase at process conditions ---
  the entry is tagged \`role nonvolatile;\` so vapour-pressure routines
  never get called.  dHf_298 and s_298 from NASA-7 integration
  constants at T = 298.15 K.
\\*---------------------------------------------------------------------------*/

name           C3H5;
formula        C3H5;
CAS            n/a;        // radical registry number: pending curation

MW             41.073;       // kg/kmol
role        nonvolatile;
tags           ( radical gasPhase combustion soot );

standardThermochemistry
{
    dHf_298    279908.0048;            // J/mol  -- ideal-gas reference
    s_298      251.4845;           // J/(mol·K)  -- third-law absolute
}

idealGasHeatCapacity
{
    model         polynomial;
    coefficients  (-1.516251e+01   2.897404e-01   -1.868262e-04   4.603796e-08);
    Trange        (250  3000);
}
`,oi=`/*--------------------------------*- Choupo -*-----------------------*\\
  Component: n-Propyl radical (propane oxidation entry; GRI-Mech C3H7)
  Generated by bin/import_nasa.py from NASA-7 polynomial data
  (GRI-Mech Version 3.0 Thermodynamics released 7/30/99).  No liquid phase at process conditions ---
  the entry is tagged \`role nonvolatile;\` so vapour-pressure routines
  never get called.  dHf_298 and s_298 from NASA-7 integration
  constants at T = 298.15 K.
\\*---------------------------------------------------------------------------*/

name           C3H7;
formula        C3H7;
CAS            n/a;        // radical registry number: pending curation

MW             43.089;       // kg/kmol
role        nonvolatile;
tags           ( radical gasPhase combustion );

standardThermochemistry
{
    dHf_298    100499.7832;            // J/mol  -- ideal-gas reference
    s_298      289.4634;           // J/(mol·K)  -- third-law absolute
}

idealGasHeatCapacity
{
    model         polynomial;
    coefficients  (-4.231040e-01   2.851245e-01   -1.612818e-04   3.576627e-08);
    Trange        (250  3000);
}
`,ai=`/*--------------------------------*- Choupo -*-----------------------*\\
  Component: Diacetylene (polyyne soot precursor)
  Generated by bin/import_nasa.py from NASA-7 polynomial data
  (BURCAT.THR).  No liquid phase at process conditions ---
  the entry is tagged \`role nonvolatile;\` so vapour-pressure routines
  never get called.  dHf_298 and s_298 from NASA-7 integration
  constants at T = 298.15 K.
\\*---------------------------------------------------------------------------*/

name           C4H2;
formula        C4H2;
CAS            460-12-8;

MW             50.06;       // kg/kmol
role        nonvolatile;
tags           ( gasPhase combustion soot );

standardThermochemistry
{
    dHf_298    460362.3761;            // J/mol  -- ideal-gas reference
    s_298      249.5007;           // J/(mol·K)  -- third-law absolute
}

idealGasHeatCapacity
{
    model         polynomial;
    coefficients  (3.535365e+01   1.623116e-01   -1.197469e-04   3.346349e-08);
    Trange        (250  3000);
}
`,ti=`/*--------------------------------*- Choupo -*-----------------------*\\
  Component: Vinylacetylene (C4 soot-growth intermediate)
  Generated by bin/import_nasa.py from NASA-7 polynomial data
  (BURCAT.THR).  No liquid phase at process conditions ---
  the entry is tagged \`role nonvolatile;\` so vapour-pressure routines
  never get called.  dHf_298 and s_298 from NASA-7 integration
  constants at T = 298.15 K.
\\*---------------------------------------------------------------------------*/

name           C4H4;
formula        C4H4;
CAS            689-97-4;

MW             52.076;       // kg/kmol
role        nonvolatile;
tags           ( gasPhase combustion soot );

standardThermochemistry
{
    dHf_298    431719.5396;            // J/mol  -- ideal-gas reference
    s_298      251.0727;           // J/(mol·K)  -- third-law absolute
}

idealGasHeatCapacity
{
    model         polynomial;
    coefficients  (-4.611098e+00   2.542045e-01   -1.557073e-04   3.731179e-08);
    Trange        (250  3000);
}

cosmo
{
    VT2005
    {
        model       COSMOSAC;
        variant     "2002";
        source      "VT-2005 sigma-profile database (Mullins et al., Ind. Eng. Chem. Res. 45 (2006) 4389; DFT-COSMO), file VT2005-0235-PROF.txt bundled in usnistgov/COSMOSAC; CAS 689-97-4";
        licence     externalRestricted;   // VT-2005: redistribution NOT confirmed -- values NOT shipped
        installed   false;                 // install your own copy: bin/choupo-import-cosmo (-> data/local/cosmo/VT2005/)
    }
}
`,ii=`/*--------------------------------*- Choupo -*-----------------------*\\
  Component: CYCLOPENTADIENYL radical (aromatic-ring chemistry; Burcat cyPentadiene card -- the file's first C5H5 card is the LINEAR isomer)
  Generated by bin/import_nasa.py from NASA-7 polynomial data
  (CYCLOPENTADIENYL card (cyPentadiene, T05/10) hand-selected from).  No liquid phase at process conditions ---
  the entry is tagged \`role nonvolatile;\` so vapour-pressure routines
  never get called.  dHf_298 and s_298 from NASA-7 integration
  constants at T = 298.15 K.
\\*---------------------------------------------------------------------------*/

name           C5H5;
formula        C5H5;
CAS            n/a;        // radical registry number: pending curation

MW             65.095;       // kg/kmol
role        nonvolatile;
tags           ( radical gasPhase combustion soot );

standardThermochemistry
{
    dHf_298    263967.0560;            // J/mol  -- ideal-gas reference
    s_298      300.4046;           // J/(mol·K)  -- third-law absolute
}

idealGasHeatCapacity
{
    model         polynomial;
    coefficients  (-1.789062e+01   3.969983e-01   -2.751466e-04   7.140120e-08);
    Trange        (250  3000);
}
`,ri=`/*--------------------------------*- Choupo -*-----------------------*\\
  Component: PHENYL radical -- the aromatic growth radical (HACA); Burcat phenyl card, not the chain isomer
  Generated by bin/import_nasa.py from NASA-7 polynomial data
  (Cards hand-selected from BURCAT.THR (Goos, Burcat & Ruscic, ReSpecTh).  No liquid phase at process conditions ---
  the entry is tagged \`role nonvolatile;\` so vapour-pressure routines
  never get called.  dHf_298 and s_298 from NASA-7 integration
  constants at T = 298.15 K.
\\*---------------------------------------------------------------------------*/

name           C6H5;
formula        C6H5;
CAS            2396-01-2;

MW             77.106;       // kg/kmol
role        nonvolatile;
tags           ( radical gasPhase combustion soot );

standardThermochemistry
{
    dHf_298    337298.0774;            // J/mol  -- ideal-gas reference
    s_298      286.1329;           // J/(mol·K)  -- third-law absolute
}

idealGasHeatCapacity
{
    model         polynomial;
    coefficients  (-3.855596e+01   4.790385e-01   -3.286651e-04   8.359505e-08);
    Trange        (250  3000);
}
`,si=`/*--------------------------------*- Choupo -*-----------------------*\\
  Component: Methylidyne radical (prompt-NOx initiator CH + N2; C1 chain)
  Generated by bin/import_nasa.py from NASA-7 polynomial data
  (GRI-Mech Version 3.0 Thermodynamics released 7/30/99).  No liquid phase at process conditions ---
  the entry is tagged \`role nonvolatile;\` so vapour-pressure routines
  never get called.  dHf_298 and s_298 from NASA-7 integration
  constants at T = 298.15 K.
\\*---------------------------------------------------------------------------*/

name           CH;
formula        CH;
CAS            n/a;        // radical registry number: pending curation

MW             13.019;       // kg/kmol
role        nonvolatile;
tags           ( radical gasPhase combustion );

standardThermochemistry
{
    dHf_298    597334.5958;            // J/mol  -- ideal-gas reference
    s_298      183.0364;           // J/(mol·K)  -- third-law absolute
}

idealGasHeatCapacity
{
    model         polynomial;
    coefficients  (3.047126e+01   -8.260186e-03   1.443093e-05   -4.376441e-09);
    Trange        (250  3000);
}
`,li=`/*--------------------------------*- Choupo -*-----------------------*\\
  Component: Triplet methylene (ground state; C1 combustion intermediate)
  Generated by bin/import_nasa.py from NASA-7 polynomial data
  (GRI-Mech Version 3.0 Thermodynamics released 7/30/99).  No liquid phase at process conditions ---
  the entry is tagged \`role nonvolatile;\` so vapour-pressure routines
  never get called.  dHf_298 and s_298 from NASA-7 integration
  constants at T = 298.15 K.
\\*---------------------------------------------------------------------------*/

name           CH2;
formula        CH2;
CAS            n/a;        // radical registry number: pending curation

MW             14.027;       // kg/kmol
role        nonvolatile;
tags           ( radical gasPhase combustion );

standardThermochemistry
{
    dHf_298    392333.0935;            // J/mol  -- ideal-gas reference
    s_298      194.4184;           // J/(mol·K)  -- third-law absolute
}

idealGasHeatCapacity
{
    model         polynomial;
    coefficients  (3.085175e+01   1.385332e-02   1.326322e-06   -1.456827e-09);
    Trange        (250  3000);
}
`,di=`/*--------------------------------*- Choupo -*-----------------------*\\
  Component: Ketene (stable C2 intermediate of acetylene/acetyl chemistry)
  Generated by bin/import_nasa.py from NASA-7 polynomial data
  (GRI-Mech Version 3.0 Thermodynamics released 7/30/99).  No liquid phase at process conditions ---
  the entry is tagged \`role nonvolatile;\` so vapour-pressure routines
  never get called.  dHf_298 and s_298 from NASA-7 integration
  constants at T = 298.15 K.
\\*---------------------------------------------------------------------------*/

name           CH2CO;
formula        CH2CO;
CAS            463-51-4;

MW             42.037;       // kg/kmol
role        nonvolatile;
tags           ( gasPhase combustion );

standardThermochemistry
{
    dHf_298    -47699.7282;            // J/mol  -- ideal-gas reference
    s_298      241.8873;           // J/(mol·K)  -- third-law absolute
}

idealGasHeatCapacity
{
    model         polynomial;
    coefficients  (2.357584e+01   1.145252e-01   -7.056796e-05   1.722609e-08);
    Trange        (250  3000);
}

cosmo
{
    VT2005
    {
        model       COSMOSAC;
        variant     "2002";
        source      "VT-2005 sigma-profile database (Mullins et al., Ind. Eng. Chem. Res. 45 (2006) 4389; DFT-COSMO), file VT2005-0476-PROF.txt bundled in usnistgov/COSMOSAC; CAS 463-51-4";
        licence     externalRestricted;   // VT-2005: redistribution NOT confirmed -- values NOT shipped
        installed   false;                 // install your own copy: bin/choupo-import-cosmo (-> data/local/cosmo/VT2005/)
    }
}
`,ci=`/*--------------------------------*- Choupo -*-----------------------*\\
  Component: Hydroxymethyl radical (methanol oxidation, H-abstraction at C)
  Generated by bin/import_nasa.py from NASA-7 polynomial data
  (GRI-Mech Version 3.0 Thermodynamics released 7/30/99).  No liquid phase at process conditions ---
  the entry is tagged \`role nonvolatile;\` so vapour-pressure routines
  never get called.  dHf_298 and s_298 from NASA-7 integration
  constants at T = 298.15 K.
\\*---------------------------------------------------------------------------*/

name           CH2OH;
formula        CH2OH;
CAS            n/a;        // radical registry number: pending curation

MW             31.034;       // kg/kmol
role        nonvolatile;
tags           ( radical gasPhase combustion );

standardThermochemistry
{
    dHf_298    -14627.7826;            // J/mol  -- ideal-gas reference
    s_298      243.9176;           // J/(mol·K)  -- third-law absolute
}

idealGasHeatCapacity
{
    model         polynomial;
    coefficients  (2.795417e+01   7.857906e-02   -3.578698e-05   6.658555e-09);
    Trange        (250  3000);
}
`,pi=`/*--------------------------------*- Choupo -*-----------------------*\\
  Component: SINGLET methylene, GRI-Mech name CH2(S) -- an excited electronic state of CH2, kept as a separate kinetic species (fast insertion chemistry); no own CAS (electronic state)
  Generated by bin/import_nasa.py from NASA-7 polynomial data
  (GRI-Mech Version 3.0 Thermodynamics released 7/30/99).  No liquid phase at process conditions ---
  the entry is tagged \`role nonvolatile;\` so vapour-pressure routines
  never get called.  dHf_298 and s_298 from NASA-7 integration
  constants at T = 298.15 K.
\\*---------------------------------------------------------------------------*/

name           CH2_S;
formula        CH2;   // singlet state of CH2
CAS            n/a;        // radical registry number: pending curation

MW             14.027;       // kg/kmol
role        nonvolatile;
tags           ( radical gasPhase combustion );

standardThermochemistry
{
    dHf_298    429889.9715;            // J/mol  -- ideal-gas reference
    s_298      189.2198;           // J/(mol·K)  -- third-law absolute
}

idealGasHeatCapacity
{
    model         polynomial;
    coefficients  (3.139709e+01   3.511753e-03   1.631868e-05   -7.054022e-09);
    Trange        (250  3000);
}
`,mi=`/*--------------------------------*- Choupo -*-----------------------*\\
  Component: Methyl radical (dominant intermediate in CH4 / CH3OH oxidation)
  Generated by bin/import_nasa.py from NASA-7 polynomial data
  (Burcat 2005 / JANAF).  No liquid phase at process conditions ---
  the entry is tagged \`role nonvolatile;\` so vapour-pressure routines
  never get called.  dHf_298 and s_298 from NASA-7 integration
  constants at T = 298.15 K.
\\*---------------------------------------------------------------------------*/

name           CH3;
formula        CH3;
CAS            2229-07-4;

MW             15.0345;       // kg/kmol
role        nonvolatile;
tags           ( radical gasPhase combustion );

standardThermochemistry
{
    dHf_298    146699.8329;            // J/mol  -- ideal-gas reference
    s_298      194.0074;           // J/(mol·K)  -- third-law absolute
}

idealGasHeatCapacity
{
    model         polynomial;
    coefficients  (2.773898e+01   3.717719e-02   -4.310241e-06   -1.759106e-09);
    Trange        (250  3000);
}
`,ui=`/*--------------------------------*- Choupo -*-----------------------*\\
  Component: Acetyl radical (acetaldehyde oxidation)
  Generated by bin/import_nasa.py from NASA-7 polynomial data
  (BURCAT.THR).  No liquid phase at process conditions ---
  the entry is tagged \`role nonvolatile;\` so vapour-pressure routines
  never get called.  dHf_298 and s_298 from NASA-7 integration
  constants at T = 298.15 K.
\\*---------------------------------------------------------------------------*/

name           CH3CO;
formula        CH3CO;
CAS            n/a;        // radical registry number: pending curation

MW             43.045;       // kg/kmol
role        nonvolatile;
tags           ( radical gasPhase combustion lowT );

standardThermochemistry
{
    dHf_298    -10299.9887;            // J/mol  -- ideal-gas reference
    s_298      267.4475;           // J/(mol·K)  -- third-law absolute
}

idealGasHeatCapacity
{
    model         polynomial;
    coefficients  (1.592709e+01   1.352284e-01   -6.657100e-05   1.214190e-08);
    Trange        (250  3000);
}
`,hi=`/*--------------------------------*- Choupo -*-----------------------*\\
  Component: Methoxy radical (methanol oxidation, H-abstraction at O; CH3O/CH2OH branching)
  Generated by bin/import_nasa.py from NASA-7 polynomial data
  (GRI-Mech Version 3.0 Thermodynamics released 7/30/99).  No liquid phase at process conditions ---
  the entry is tagged \`role nonvolatile;\` so vapour-pressure routines
  never get called.  dHf_298 and s_298 from NASA-7 integration
  constants at T = 298.15 K.
\\*---------------------------------------------------------------------------*/

name           CH3O;
formula        CH3O;
CAS            n/a;        // radical registry number: pending curation

MW             31.034;       // kg/kmol
role        nonvolatile;
tags           ( radical gasPhase combustion );

standardThermochemistry
{
    dHf_298    16303.7136;            // J/mol  -- ideal-gas reference
    s_298      228.4840;           // J/(mol·K)  -- third-law absolute
}

idealGasHeatCapacity
{
    model         polynomial;
    coefficients  (1.024754e+01   1.036636e-01   -4.129684e-05   4.945472e-09);
    Trange        (250  3000);
}
`,Ci=`/*--------------------------------*- Choupo -*-----------------------*\\
  Component: Methylperoxy radical (LOW-T autoignition chain; RO2 chemistry entry)
  Generated by bin/import_nasa.py from NASA-7 polynomial data
  (BURCAT.THR).  No liquid phase at process conditions ---
  the entry is tagged \`role nonvolatile;\` so vapour-pressure routines
  never get called.  dHf_298 and s_298 from NASA-7 integration
  constants at T = 298.15 K.
\\*---------------------------------------------------------------------------*/

name           CH3O2;
formula        CH3O2;
CAS            n/a;        // radical registry number: pending curation

MW             47.033;       // kg/kmol
role        nonvolatile;
tags           ( radical gasPhase combustion lowT );

standardThermochemistry
{
    dHf_298    11941.0679;            // J/mol  -- ideal-gas reference
    s_298      259.5703;           // J/(mol·K)  -- third-law absolute
}

idealGasHeatCapacity
{
    model         polynomial;
    coefficients  (1.553443e+01   1.436627e-01   -7.533988e-05   1.509157e-08);
    Trange        (250  3000);
}
`,fi=`/*--------------------------------*- Choupo -*-----------------------*\\
  Component: Methane  (CH4, CAS 74-82-8)
  Permanent gas at process temperatures (Tc = 190.56 K).  The Antoine
  block is carried for schema compliance; in practice CH4 only ever
  appears as a vapour-phase species in v0.15 unit ops.
  Sources: constants (Tc/Pc/omega/MW/Tb) cross-checked vs CoolProp 7.2.0
  reference EOS; standardThermochemistry cross-checked vs NASA TM-4513
  (McBride-Gordon-Reno 1993); idealGasHeatCapacity -- individual
  literature value, primary re-citation pending (IST review).
\\*---------------------------------------------------------------------------*/

name        CH4;
formula     CH4;
CAS         74-82-8;

// role solute (v0.28+): in a water solvent the K-value comes from
// HenrysLaw/CH4-water.dat instead of Antoine/Raoult.
role        solute;

MW          16.043;       // kg/kmol
Tc          190.56;       // K
Pc          45.99;        // bar
omega       0.011;        // [-]
Tb          111.66;       // K
HvapTb      8180;         // J/mol
Vliq        3.74e-5;      // m^3/mol  (37.4 cm^3/mol at Tb)
diffusionVolume  25.14;          // Fuller diffusion volume [-]

standardThermochemistry
{
    dHf_298   -74520.0;           // J/mol  -- ideal-gas reference
    s_298     186.270;            // J/(mol·K)  -- third-law absolute
}

vaporPressure
{
    model         Antoine;
    coefficients  (3.9895   443.028   -0.49);
    Trange        (91  190);
}

idealGasHeatCapacity
{
    model         polynomial;
    // Cp [J/(mol·K)] = a0 + a1*T + a2*T^2 + a3*T^3
    coefficients  (19.25   5.213e-2   1.197e-5   -1.132e-8);
    Trange        (250  1500);
}

// Friendly-name aliases (resolved to this file via the generated ALIASES index).
aliases ( methane );

cosmo
{
    VT2005
    {
        model       COSMOSAC;
        variant     "2002";
        source      "VT-2005 sigma-profile database (Mullins et al., Ind. Eng. Chem. Res. 45 (2006) 4389; DFT-COSMO), file VT2005-0001-PROF.txt bundled in usnistgov/COSMOSAC; CAS 74-82-8";
        licence     externalRestricted;   // VT-2005: redistribution NOT confirmed -- values NOT shipped
        installed   false;                 // install your own copy: bin/choupo-import-cosmo (-> data/local/cosmo/VT2005/)
    }
}

// PC-SAFT non-associating segment parameters (Gross & Sadowski, IECR 40
// (2001) 1244, Table 1 -- the pure n-alkane fit to vapour pressure + liquid
// density).  m segments, sigma [Angstrom], epsilon/k [K].
pcsaft
{
    m        1.0000;
    sigma    3.7039;
    epsilonK 150.03;
    source   "Gross & Sadowski, Ind. Eng. Chem. Res. 40 (2001) 1244, Table 1";
}

// ---- Aqueous-speciation FACT (substance-level, classifier-read) ----
// dissolved methane is a NEUTRAL master (no aqueous
// equilibria beyond dissolution); role solute carries the Henry route.
aqueousSpeciation  none;
`,gi=`/*--------------------------------*- Choupo -*-----------------------*\\
  Component: Cyano radical (fuel-N and prompt-NOx chemistry)
  Generated by bin/import_nasa.py from NASA-7 polynomial data
  (GRI-Mech Version 3.0 Thermodynamics released 7/30/99).  No liquid phase at process conditions ---
  the entry is tagged \`role nonvolatile;\` so vapour-pressure routines
  never get called.  dHf_298 and s_298 from NASA-7 integration
  constants at T = 298.15 K.
\\*---------------------------------------------------------------------------*/

name           CN;
formula        CN;
CAS            n/a;        // radical registry number: pending curation

MW             26.018;       // kg/kmol
role        nonvolatile;
tags           ( radical gasPhase combustion );

standardThermochemistry
{
    dHf_298    438680.7727;            // J/mol  -- ideal-gas reference
    s_298      202.6423;           // J/(mol·K)  -- third-law absolute
}

idealGasHeatCapacity
{
    model         polynomial;
    coefficients  (2.823603e+01   6.730521e-04   7.892078e-06   -3.486907e-09);
    Trange        (250  3000);
}
`,bi=`/*--------------------------------*- Choupo -*-----------------------*\\
  Component: Carbon monoxide  (CO, CAS 630-08-0)
  Permanent gas at any process-relevant temperature.  Antoine and Vliq
  carried for schema compliance only; Tc=132.85 K means we never see
  a liquid in v0.15 process conditions.
  Sources: constants (Tc, Pc, omega, MW, Tb) cross-checked against the
  CoolProp 7.2.0 reference equation of state (MIT-licensed); ideal-gas
  formation properties (dHf_298, s_298) from NASA TM-4513 (McBride-
  Gordon-Reno 1993).
\\*---------------------------------------------------------------------------*/

name        CO;
formula     CO;
CAS         630-08-0;

MW          28.010;       // kg/kmol
Tc          132.85;       // K
Pc          34.94;        // bar
omega       0.045;        // [-]
Tb          81.65;        // K
HvapTb      6042;         // J/mol
Vliq        3.55e-5;      // m^3/mol  (35.5 cm^3/mol at Tb)
diffusionVolume  18.0;          // Fuller diffusion volume [-]

standardThermochemistry
{
    dHf_298   -110530.0;          // J/mol  -- ideal-gas reference
    s_298     197.660;            // J/(mol·K)  -- third-law absolute
}

vaporPressure
{
    model         Antoine;
    coefficients  (3.81912   291.743   -5.151);
    Trange        (68  132);
}

idealGasHeatCapacity
{
    model         polynomial;
    // Cp [J/(mol·K)] = a0 + a1*T + a2*T^2 + a3*T^3  (ideal-gas Cp
    // polynomial -- individual literature value, primary re-citation pending)
    coefficients  (30.87   -1.285e-2   2.789e-5   -1.272e-8);
    Trange        (250  1500);
}

// Friendly-name aliases (resolved to this file via the generated ALIASES index).
aliases ( carbonMonoxide );

cosmo
{
    VT2005
    {
        model       COSMOSAC;
        variant     "2002";
        source      "VT-2005 sigma-profile database (Mullins et al., Ind. Eng. Chem. Res. 45 (2006) 4389; DFT-COSMO), file VT2005-0387-PROF.txt bundled in usnistgov/COSMOSAC; CAS 630-08-0";
        licence     externalRestricted;   // VT-2005: redistribution NOT confirmed -- values NOT shipped
        installed   false;                 // install your own copy: bin/choupo-import-cosmo (-> data/local/cosmo/VT2005/)
    }
}
`,yi=`/*--------------------------------*- Choupo -*-----------------------*\\
  Component: Carbon dioxide  (CO2, CAS 124-38-9)
  Above its triple point (216.55 K, 5.18 bar) CO2 has a normal liquid
  range only up to Tc = 304.13 K.  In process work above ambient T it
  is permanently gaseous.
  Sources: constants (Tc, Pc, omega, MW, Tb) cross-checked against the
  CoolProp 7.2.0 reference equation of state (MIT-licensed); ideal-gas
  formation properties (dHf_298, s_298) from NASA TM-4513 (McBride-
  Gordon-Reno 1993).
\\*---------------------------------------------------------------------------*/

name        CO2;
formula     CO2;
noncondensable true;     // permanent carrier gas (psychrometric carrier)
CAS         124-38-9;

// role solute (v0.28+): when the thermo package declares a solvent
// for which a HenrysLaw/CO2-<solvent>.dat entry exists (water,
// MEA, ...), the K-value comes from Henry's law instead of the
// Raoult/γ-φ form.  Falls back to Raoult/γ-φ when no Henry entry
// is available --- backwards-compatible with existing CO2-bearing
// tutorials (gibbs cases use GibbsReactor, which does not call Kvec).
role        solute;

MW          44.010;       // kg/kmol
Tc          304.13;       // K
Pc          73.83;        // bar
omega       0.225;        // [-]
Tb          194.65;       // K  (sublimation point at 1 atm)
HvapTb      25230;        // J/mol  (estimate at triple-point T)
Vliq        4.70e-5;      // m^3/mol  (47.0 cm^3/mol at 273 K)
diffusionVolume  26.9;          // Fuller diffusion volume [-]

standardThermochemistry
{
    dHf_298   -393520.0;          // J/mol  -- ideal-gas reference
    s_298     213.790;            // J/(mol·K)  -- third-law absolute
}

vaporPressure
{
    model         Antoine;
    coefficients  (6.81228   1301.679   -3.494);
    Trange        (154  204);
}

idealGasHeatCapacity
{
    model         polynomial;
    // Cp [J/(mol·K)] = a0 + a1*T + a2*T^2 + a3*T^3  (ideal-gas Cp
    // polynomial -- individual literature value, primary re-citation pending)
    coefficients  (19.80   7.344e-2   -5.602e-5   1.715e-8);
    Trange        (250  1500);
}

// Liquid Cp -- physically extrapolated stub (CO2 is gas or solid at
// normal P; liquid only above 5.18 bar).  Same purpose as the N2 stub.
liquidHeatCapacity
{
    model         polynomial;
    coefficients  (90.0);          // J/(mol·K), constant approximation
}

// Friendly-name aliases (resolved to this file via the generated ALIASES index).
aliases ( carbonDioxide );

// ---- Aqueous-speciation FACT (substance-level, classifier-read) ----
// CO2 + H2O = HCO3- + H+ (CO2aq-formation): the carbonate
// set, master HCO3.
aqueousSpeciation  carbonate;
aqueousMapping ( { species HCO3; nu 1; } { species H; nu 1; } );
`,Ti=`/*--------------------------------*- Choupo -*-----------------------*\\
  Component: Carbon monosulfide (CS2 oxidation intermediate)
  Generated by bin/import_nasa.py from NASA-7 polynomial data
  (BURCAT.THR).  No liquid phase at process conditions ---
  the entry is tagged \`role nonvolatile;\` so vapour-pressure routines
  never get called.  dHf_298 and s_298 from NASA-7 integration
  constants at T = 298.15 K.
\\*---------------------------------------------------------------------------*/

name           CS;
formula        CS;
CAS            2944-05-0;

MW             44.071;       // kg/kmol
role        nonvolatile;
tags           ( radical gasPhase combustion sulfur );

standardThermochemistry
{
    dHf_298    278548.4900;            // J/mol  -- ideal-gas reference
    s_298      210.5575;           // J/(mol·K)  -- third-law absolute
}

idealGasHeatCapacity
{
    model         polynomial;
    coefficients  (2.447785e+01   2.127918e-02   -1.292525e-05   2.770169e-09);
    Trange        (250  3000);
}
`,vi=`/*--------------------------------*- Choupo -*-----------------------*\\
  Component: Carbon disulfide (viscose/xanthate solvent; sulfur combustion fuel)
  Generated by bin/import_nasa.py from NASA-7 polynomial data
  (BURCAT.THR).  No liquid phase at process conditions ---
  the entry is tagged \`role nonvolatile;\` so vapour-pressure routines
  never get called.  dHf_298 and s_298 from NASA-7 integration
  constants at T = 298.15 K.
\\*---------------------------------------------------------------------------*/

name           CS2;
formula        CS2;
CAS            75-15-0;

MW             76.131;       // kg/kmol
role        nonvolatile;
tags           ( gasPhase combustion sulfur );

standardThermochemistry
{
    dHf_298    116699.3346;            // J/mol  -- ideal-gas reference
    s_298      237.8876;           // J/(mol·K)  -- third-law absolute
}

idealGasHeatCapacity
{
    model         polynomial;
    coefficients  (2.991058e+01   6.705347e-02   -5.267427e-05   1.459771e-08);
    Trange        (250  3000);
}

groups
{
    unifac ( { group CS2; count 1; } );   // added from data/groupEstimative (UNIFAC decomposition; vocab-checked vs groups.dat)
}

cosmo
{
    VT2005
    {
        model       COSMOSAC;
        variant     "2002";
        source      "VT-2005 sigma-profile database (Mullins et al., Ind. Eng. Chem. Res. 45 (2006) 4389; DFT-COSMO), file VT2005-1093-PROF.txt bundled in usnistgov/COSMOSAC; CAS 75-15-0";
        licence     externalRestricted;   // VT-2005: redistribution NOT confirmed -- values NOT shipped
        installed   false;                 // install your own copy: bin/choupo-import-cosmo (-> data/local/cosmo/VT2005/)
    }
}
`,Pi=`/*--------------------------------*- Choupo -*-----------------------*\\
  Component: Calcium carbonate (CaCO3), CALCITE polymorph.  CAS 471-34-1.

  A NON-VOLATILE crystalline mineral solid: it never enters the vapour
  (K = 0) and carries no Antoine / liquid-Cp blocks.  The canonical solid
  for limestone / precipitated-CaCO3 (PCC) exercises -- a scaling / anti-
  scaling species in membrane and evaporator cases, and a feed solid for
  calcination (CaCO3 -> CaO + CO2) Gibbs-reactor exercises.

  Carries a REAL solid heat capacity (solidHeatCapacity{}) and the solid-
  phase formation datum, so its sensible heat and its reaction heat both
  emerge from the elements reference like any other species.

  rho_p for calcite ~ 2710 kg/m^3.
  Sources: solid formation datum from CODATA Key Values (Cox, Wagman &
           Medvedev 1989), cross-checked vs Robie & Hemingway, USGS Bull.
           2131 (1995); solidHeatCapacity fitted to Robie & Hemingway 1995
           (public domain); rho_p 2710 kg/m^3 = calcite crystallographic
           density (public).
\\*---------------------------------------------------------------------------*/

name        CaCO3;
formula     CaCO3;
CAS         471-34-1;

MW          100.0869;          // kg/kmol  (calcite)

role        nonvolatile;       // never goes to the vapour (K = 0)

solid
{
    rho_p   2710.0;            // calcite particle density [kg/m^3]
}

// Solid-phase formation datum (calcite).  PRIMARY: CODATA Key Values for
// Thermodynamics (Cox, Wagman & Medvedev 1989); cross-checked vs Robie &
// Hemingway, USGS Bull. 2131 (1995).  Both are open / public-domain sources.
standardThermochemistry
{
    dHf_298   -1207600;        // J/mol  calcite [CODATA Key Values 1989; xcheck Robie-Hemingway 1995]
    s_298     91.7;            // J/(mol*K) third-law absolute [CODATA Key Values 1989]
    referenceState     pureSolid;
}

// REAL solid heat capacity of calcite.  Cp(298.15) ~ 83.5 J/(mol*K), rising
// to ~110.9 at 600 K.  PRIMARY: Robie & Hemingway, "Thermodynamic Properties
// of Minerals and Related Substances ...", U.S. Geological Survey Bulletin
// 2131 (1995) -- a U.S. Government work, PUBLIC DOMAIN.  Quadratic least-
// squares fit to their tabulated Cp at 298.15/400/500/600 K (AAD < 0.3 %).
solidHeatCapacity
{
    model         polynomial;          // Cp = a0 + a1*T + a2*T^2  [J/(mol*K)]
    coefficients  ( 29.8993   0.224617   -1.49637e-04 );
    Trange        ( 298  600 );        // [Robie-Hemingway 1995, USGS Bull. 2131]
}

// Solid phase(s) of this component (roadmap Phase D fold-in):
solidPhases
{
    aragonite
    {
        dissolutionReaction { masters ( { ion Ca; nu 1; } { ion HCO3; nu 1; } { ion H; nu -1; } ); }
        equilibrium { logK25 1.993; dH -25731.6; analytic ( -64.0902 -0.04546451 -2248.497 32.66939 563713.9 ); source "USGS PHREEQC phreeqc.dat (public domain)"; }
    }
    calcite
    {
        dissolutionReaction { masters ( { ion Ca; nu 1; } { ion HCO3; nu 1; } { ion H; nu -1; } ); }
        equilibrium { logK25 1.879; dH -28078.8; analytic ( 40.0171 -0.01928451 -5151.79 -8.66815 563713.9 ); validC ( 0 300 ); source "USGS PHREEQC phreeqc.dat (public domain); lit: 0 - 300 C, Ellis, 1959, Plummer and Busenberg, 1982"; }
    }
}
`,Si=`/*--------------------------------*- Choupo -*--------------------------------*\\
  Component: Calcium chloride (CaCl2, CAS 10043-52-4)

  Reference-state-layout native #2 (forum 2026-06-11).  Strong 2:1 electrolyte
  (Ca++ + 2 Cl-): nonvolatile, dissolved-only; exercises the Pitzer 2:1 charge
  asymmetry.  REPAIRED from a headless fragment that carried only the
  electrolyte block (no identity -> the loader's MW lookup threw at load).

  CURATION STATUS: the solubility anchor is an individual literature value --
  primary re-citation pending (IST review).  The VALUE is kept (physically
  plausible, ~7.3 mol/kg at 25 C) but flagged: re-source from a public-domain
  primary before any result hinges on it.  At
  25 C the stable solid is a HYDRATE (CaCl2.6H2O up to ~30 C) -- the \`forms\`
  slot is its future home.
\\*-----------------------------------------------------------------------------*/

name        CaCl2;
formula     CaCl2;
CAS         10043-52-4;
MW          110.98;             // g/mol


role        nonvolatile;                // never in the vapour (K = 0)
dissociation   3;                   // van't Hoff factor (2:1 strong electrolyte)

// FORMATION DATUM lives PER ION in species/aqueous/ (Ca+2, Cl-; H+(aq)=0
// convention, Wagman 1982), referenced BY NAME via the electrolyte{} block --
// CaCl2 carries no component-level standardThermochemistry block (arity-2; see
// docs/ai/data-doctrine.md).  NOTE: in ions.dat Ca+2 carries hfAq + sAq but
// its cpAq is still PENDING (flagged in ions.dat); Cl- is complete.  Source
// Ca+2 cpAq from Wagman 1982 before a CaCl2 heat-of-solution balance is run.

dissociatesTo  { Ca 1; Cl 2; }   // ion stoichiometry (formula-like identity)

// solid                            // SLOT: rho_p / k_v / Hf_298(s) + the
// {                                //   hydrate \`forms\` (CaCl2.6H2O) -- fill
// }                                //   with open primary data when needed.
`,Oi=`/*--------------------------------*- Choupo -*-----------------------*\\
  Component: Calcium oxide (CaO), LIME.  CAS 1305-78-8.

  A NON-VOLATILE refractory crystalline oxide: never enters the vapour
  (K = 0).  The quicklime product of limestone calcination
  (CaCO3 -> CaO + CO2) and the feed for slaking (CaO + H2O -> Ca(OH)2) --
  the partner species to CaCO3 / Ca(OH)2 for Gibbs-reactor and lime-cycle
  exercises.

  Carries a REAL solid heat capacity and the solid-phase formation datum.

  PRIMARY: Wagman et al., NBS Tables of Chemical Thermodynamic Properties,
  J. Phys. Chem. Ref. Data 11, Suppl. 2 (1982) -- PUBLIC DOMAIN.
  NOTE on S_298: Wagman lists 39.75 J/(mol*K); CODATA / Robie & Hemingway
  (USGS Bull. 2131, 1995) give ~38.1 -- a genuine literature spread of ~1.6
  J/(mol*K).  The NBS value is kept for batch-internal consistency; flag
  before a Gibbs equilibrium hinges on the CaO entropy.
\\*---------------------------------------------------------------------------*/

name        CaO;
formula     CaO;
CAS         1305-78-8;

MW          56.077;            // kg/kmol

role        nonvolatile;       // never goes to the vapour (K = 0)

solid
{
    rho_p   3340.0;            // lime particle density [kg/m^3]
}

standardThermochemistry
{
    dHf_298   -635090;         // J/mol  [Wagman et al. NBS Tables 1982]
    s_298     39.75;           // J/(mol*K) [Wagman 1982; CODATA ~38.1, see header]
    referenceState     pureSolid;
}

solidHeatCapacity
{
    model         polynomial;          // Cp = a0  [J/(mol*K)], constant
    coefficients  ( 42.0 );            // Cp(298) [Wagman et al. NBS Tables 1982]
    Trange        ( 298  800 );        // constant-Cp validity flag (near ambient)
}

provenance
{
    standardThermochemistry { origin literature; method "Wagman et al. NBS Tables 1982 (S_298: NBS 39.75; CODATA/Robie-Hemingway ~38.1)"; }
    solidHeatCapacity { origin literature; method "Wagman et al. NBS Tables 1982 (Cp298, carried constant)"; }
    rho_p { origin literature; method "lime crystal density ~3.34 g/cm3"; }
}
`,Ai=`/*--------------------------------*- Choupo -*-----------------------*\\
  Component: Calcium sulfate (CaSO4), ANHYDRITE.  CAS 7778-18-9.

  A NON-VOLATILE crystalline mineral salt: never enters the vapour (K = 0).
  THE canonical scaling species in membrane (NF/RO) and evaporator cases, the
  precipitate of sulfuric-acid neutralisation with lime, and a gypsum / FGD
  product.  Carries the solid-phase formation datum and a real solid heat
  capacity.

  This entry is the ANHYDRITE (anhydrous CaSO4) polymorph.  The dihydrate
  GYPSUM (CaSO4.2H2O) and hemihydrate (plaster) are DISTINCT phases with their
  own Hf -- add them as separate files when a hydrate yield is claimed.

  PRIMARY: Wagman et al., NBS Tables of Chemical Thermodynamic Properties,
  J. Phys. Chem. Ref. Data 11, Suppl. 2 (1982) -- PUBLIC DOMAIN.
\\*---------------------------------------------------------------------------*/

name        CaSO4;
formula     CaSO4;
CAS         7778-18-9;

MW          136.141;           // kg/kmol  (anhydrite)

role        nonvolatile;       // never goes to the vapour (K = 0)

solid
{
    rho_p   2960.0;            // anhydrite particle density [kg/m^3]
}

standardThermochemistry
{
    dHf_298   -1434110;        // J/mol  anhydrite [Wagman et al. NBS Tables 1982]
    s_298     106.7;           // J/(mol*K) [Wagman 1982]
    referenceState     pureSolid;
}

solidHeatCapacity
{
    model         polynomial;          // Cp = a0  [J/(mol*K)], constant
    coefficients  ( 99.66 );           // Cp(298) [Wagman et al. NBS Tables 1982]
    Trange        ( 298  600 );        // constant-Cp validity flag (near ambient)
}

// liquid/dissolved Cp -- the solid Cp as a FLAGGED proxy, so the slurried/
// dissolved solid carries sensible heat in an aqueous process stream.
liquidHeatCapacity
{
    model         polynomial;          // Cp = a0  [J/(mol*K)], constant
    coefficients  ( 99.66 );           // Cp(298) [Wagman et al. NBS Tables 1982]
    Trange        ( 298  600 );        // constant-Cp validity flag (near ambient)
}

provenance
{
    standardThermochemistry { origin literature; method "Wagman et al. NBS Tables 1982 (anhydrite)"; }
    solidHeatCapacity { origin literature; method "Wagman et al. NBS Tables 1982 (Cp298, carried constant)"; }
    rho_p { origin literature; method "anhydrite mineralogical density ~2.96 g/cm3"; }
}

// Solid phase(s) of this component (roadmap Phase D fold-in):
solidPhases
{
    anhydrite
    {
        dissolutionReaction { masters ( { ion Ca; nu 1; } { ion SO4; nu 1; } ); }
        equilibrium { logK25 -4.25; dH -22400; analytic ( 5.725 -0.02478 -790.4 ); validC ( 50 160 ); source "USGS PHREEQC phreeqc.dat (public domain); lit: 50 - 160oC, 1 - 1e3 atm, anhydrite dissolution, Blount and Dickson, 1973, Am. Mineral. 58, 323"; }
    }
}
`,Hi=`/*--------------------------------*- Choupo -*-----------------------*\\
  Component: Atomic chlorine (chlorination chain carrier)
  Generated by bin/import_nasa.py from NASA-7 polynomial data
  (BURCAT.THR).  No liquid phase at process conditions ---
  the entry is tagged \`role nonvolatile;\` so vapour-pressure routines
  never get called.  dHf_298 and s_298 from NASA-7 integration
  constants at T = 298.15 K.
\\*---------------------------------------------------------------------------*/

name           Cl;
formula        CL;
CAS            22537-15-1;

MW             35.45;       // kg/kmol
role        nonvolatile;
tags           ( radical gasPhase combustion chlorine );

standardThermochemistry
{
    dHf_298    121301.3083;            // J/mol  -- ideal-gas reference
    s_298      165.1906;           // J/(mol·K)  -- third-law absolute
}

idealGasHeatCapacity
{
    model         polynomial;
    coefficients  (1.917217e+01   1.321756e-02   -1.507334e-05   4.965445e-09);
    Trange        (250  3000);
}
`,_i=`/*--------------------------------*- Choupo -*-----------------------*\\
  Component: Chlorine  (Cl2, CAS 7782-50-5)

  Chlor-alkali product; widely used as a water-disinfection oxidiser
  and as a feedstock for chlorinated hydrocarbons.  At ambient T
  liquefies under modest pressure (Pc = 79.9 bar, Tc = 416.9 K).
  When dissolved in water the Deacon hydrolysis equilibrium
  Cl2 + H2O <-> HClO + HCl shifts the effective solubility; the
  pure-physical Henry baseline lives in henrysLaw/Cl2-water.dat.
  Sources: ideal-gas formation properties (dHf_298, s_298) cross-checked
  against NASA TM-4513 (McBride-Gordon-Reno 1993); constants (Tc, Pc,
  omega, Tb, Antoine) are individual literature values -- primary
  re-citation pending (IST review).
\\*---------------------------------------------------------------------------*/

name        Cl2;
formula     Cl2;
CAS         7782-50-5;

// role solute (v0.28+): when the thermo package declares water as
// solvent, K_Cl2 = H_Cl2(T) / P via the Henry's-law registry.
role        solute;

MW          70.906;       // kg/kmol
Tc          416.90;        // K
Pc          79.91;         // bar
omega       0.090;         // [-]
Tb          239.18;        // K  (-34 °C at 1 atm)
HvapTb      20410;         // J/mol
Vliq        4.50e-5;       // m^3/mol

standardThermochemistry
{
    dHf_298    0.0;             // J/mol  -- element in its standard state
    s_298      223.08;          // J/(mol·K)
}

vaporPressure
{
    model         Antoine;
    coefficients  (4.13030   905.000   -25.000);
    Trange        (200  300);
}

idealGasHeatCapacity
{
    model         polynomial;
    coefficients  (33.49   1.86e-2   -1.69e-5   5.9e-9);
    Trange        (250  1500);
}

// Friendly-name aliases (resolved to this file via the generated ALIASES index).
aliases ( chlorine );

cosmo
{
    VT2005
    {
        model       COSMOSAC;
        variant     "2002";
        source      "VT-2005 sigma-profile database (Mullins et al., Ind. Eng. Chem. Res. 45 (2006) 4389; DFT-COSMO), file VT2005-0396-PROF.txt bundled in usnistgov/COSMOSAC; CAS 7782-50-5";
        licence     externalRestricted;   // VT-2005: redistribution NOT confirmed -- values NOT shipped
        installed   false;                 // install your own copy: bin/choupo-import-cosmo (-> data/local/cosmo/VT2005/)
    }
}
`,Ei=`/*--------------------------------*- Choupo -*-----------------------*\\
  Component: Chlorine monoxide radical (Deacon/chlorination chemistry)
  Generated by bin/import_nasa.py from NASA-7 polynomial data
  (BURCAT.THR).  No liquid phase at process conditions ---
  the entry is tagged \`role nonvolatile;\` so vapour-pressure routines
  never get called.  dHf_298 and s_298 from NASA-7 integration
  constants at T = 298.15 K.
\\*---------------------------------------------------------------------------*/

name           ClO;
formula        ClO;
CAS            n/a;        // radical registry number: pending curation

MW             51.449;       // kg/kmol
role        nonvolatile;
tags           ( radical gasPhase combustion chlorine );

standardThermochemistry
{
    dHf_298    101699.4201;            // J/mol  -- ideal-gas reference
    s_298      233.4193;           // J/(mol·K)  -- third-law absolute
}

idealGasHeatCapacity
{
    model         polynomial;
    coefficients  (2.885581e+01   2.187232e-02   -1.863745e-05   5.524575e-09);
    Trange        (250  3000);
}
`,wi=`/*--------------------------------*- Choupo -*-----------------------*\\
  Component: D2  (D2, CAS 7782-39-0)
  PROPOSAL TIER -- UNVERIFIED.  Imported from CoolProp 7.2.0 (MIT);
  pure-fluid properties from the published reference EOS below.
  Reference EOS: Richardson-JPCRD-2013
  NOTE: formation properties (dHf, s_298) and group decompositions
  are NOT provided by CoolProp -> omitted here (a gap, not fabricated).
\\*---------------------------------------------------------------------------*/

name        D2;

//  Review state, MACHINE-READABLE (AP2, 2026-08-05).  This used to
//  live only in the banner above, which the parser discards -- so the
//  engine could not announce it and a run said nothing.
reviewStatus   interim;
reviewReason   importedFromCoolProp720_notCheckedAgainstPrimaries;
formula     D2;
CAS         7782-39-0;

MW          4.0282;        // kg/kmol  [CoolProp]
Tc          38.3400;        // K        [CoolProp EOS]
Pc          16.79550;        // bar      [CoolProp EOS]
omega       -0.13629;        // [-]      [CoolProp EOS]
Tb          23.6613;        // K  normal boiling [CoolProp]
HvapTb      1225.5;        // J/mol  at Tb     [CoolProp]

vaporPressure
{
    model         Antoine;
    // log10(Psat [bar]) = A - B / (T[K] + C)   -- fitted to CoolProp EOS
    coefficients  (3.49557   96.8631   4.06705);
    Trange        (19.22  37.57);
}

idealGasHeatCapacity
{
    model         polynomial;
    // Cp [J/(mol.K)] = a0 + a1 T + a2 T^2 + a3 T^3   -- fitted to CoolProp cp0
    coefficients  (29.7809  -0.00405074  7.03947e-06  -1.05765e-09);
    Trange        (200  1000);
}

liquidHeatCapacity
{
    model         polynomial;
    // Cp_liq [J/(mol.K)]   -- fitted to CoolProp saturated-liquid cp
    coefficients  (-9.84095  3.74245  -0.162912  0.00296184);
    Trange        (24  24);
}

triplePoint
{
    T   18.7240;
    P   17189.1020;
}

standardThermochemistry
{
    dHf_298   0.0;        // J/mol  ideal-gas [origin=measured method=NASA-TM4513]
    s_298     144.96;        // J/(mol.K) third-law absolute [NASA-TM4513]
}

provenance
{
    constants      "CoolProp 7.2.0 -- Richardson-JPCRD-2013";
    vaporPressure  "Antoine fitted to CoolProp EOS saturation, AAD 0.63%";
    idealGasCp     "polynomial fitted to CoolProp cp0, maxerr 0.15%";
    liquidCp       "polynomial fitted to CoolProp sat-liquid cp, maxerr 0.00%";
    triplePoint    "CoolProp reference EOS triple-point T,P";
    standardThermochemistry "NASA TM-4513 (McBride-Gordon-Reno 1993), H0/S0(298.15) from NASA-7 poly";
}
`,xi=`/*--------------------------------*- Choupo -*-----------------------*\\
  Component: Dichloroethane  (C2Cl2H4, CAS 107-06-2)
  PROPOSAL TIER -- UNVERIFIED.  Imported from CoolProp 7.2.0 (MIT);
  pure-fluid properties from the published reference EOS below.
  Reference EOS: Thol-THESIS-2015
  NOTE: formation properties (dHf, s_298) and group decompositions
  are NOT provided by CoolProp -> omitted here (a gap, not fabricated).
\\*---------------------------------------------------------------------------*/

name        Dichloroethane;

//  Review state, MACHINE-READABLE (AP2, 2026-08-05).  This used to
//  live only in the banner above, which the parser discards -- so the
//  engine could not announce it and a run said nothing.
reviewStatus   interim;
reviewReason   importedFromCoolProp720_notCheckedAgainstPrimaries;
formula     C2Cl2H4;
CAS         107-06-2;

MW          98.9590;        // kg/kmol  [CoolProp]
Tc          561.5800;        // K        [CoolProp EOS]
Pc          52.26121;        // bar      [CoolProp EOS]
omega       0.26858;        // [-]      [CoolProp EOS]
Tb          356.6496;        // K  normal boiling [CoolProp]
HvapTb      32090.3;        // J/mol  at Tb     [CoolProp]
Vliq        7.9463e-05;        // m3/mol @298K     [CoolProp]

vaporPressure
{
    model         Antoine;
    // log10(Psat [bar]) = A - B / (T[K] + C)   -- fitted to CoolProp EOS
    coefficients  (4.2921   1345.78   -42.854);
    Trange        (252.71  550.35);
}

idealGasHeatCapacity
{
    model         polynomial;
    // Cp [J/(mol.K)] = a0 + a1 T + a2 T^2 + a3 T^3   -- fitted to CoolProp cp0
    coefficients  (70.2963  -0.00637583  0.000207322  -1.34632e-07);
    Trange        (200  1000);
}

liquidHeatCapacity
{
    model         polynomial;
    // Cp_liq [J/(mol.K)]   -- fitted to CoolProp saturated-liquid cp
    coefficients  (194  -0.618063  0.00170318  -1.21592e-06);
    Trange        (281  357);
}

triplePoint
{
    T   237.5200;
    P   239.8683;
}

provenance
{
    constants      "CoolProp 7.2.0 -- Thol-THESIS-2015";
    vaporPressure  "Antoine fitted to CoolProp EOS saturation, AAD 0.63%";
    idealGasCp     "polynomial fitted to CoolProp cp0, maxerr 2.32%";
    liquidCp       "polynomial fitted to CoolProp sat-liquid cp, maxerr 0.00%";
    triplePoint    "CoolProp reference EOS triple-point T,P";
}

cosmo
{
    VT2005
    {
        model       COSMOSAC;
        variant     "2002";
        source      "VT-2005 sigma-profile database (Mullins et al., Ind. Eng. Chem. Res. 45 (2006) 4389; DFT-COSMO), file VT2005-0788-PROF.txt bundled in usnistgov/COSMOSAC; CAS 107-06-2";
        licence     externalRestricted;   // VT-2005: redistribution NOT confirmed -- values NOT shipped
        installed   false;                 // install your own copy: bin/choupo-import-cosmo (-> data/local/cosmo/VT2005/)
    }
}
`,Ni=`/*--------------------------------*- Choupo -*-----------------------*\\
  Component: Atomic hydrogen radical (combustion chain carrier)
  Generated by bin/import_nasa.py from NASA-7 polynomial data
  (Burcat 2005 / JANAF).  No liquid phase at process conditions ---
  the entry is tagged \`role nonvolatile;\` so vapour-pressure routines
  never get called.  dHf_298 and s_298 from NASA-7 integration
  constants at T = 298.15 K.
\\*---------------------------------------------------------------------------*/

name           H;
formula        H;
CAS            12385-13-6;

MW             1.008;       // kg/kmol
role        nonvolatile;
tags           ( radical gasPhase combustion );

standardThermochemistry
{
    dHf_298    217997.1864;            // J/mol  -- ideal-gas reference
    s_298      114.7172;           // J/(mol·K)  -- third-law absolute
}

idealGasHeatCapacity
{
    model         polynomial;
    coefficients  (2.078616e+01   -6.555412e-14   8.098801e-17   -3.010227e-20);
    Trange        (250  3000);
}
`,Ri=`/*--------------------------------*- Choupo -*-----------------------*\\
  Component: Hydrogen  (H2, CAS 1333-74-0)
  Element in its standard state -- by convention dHf_298 = 0 and the
  third-law entropy s_298 is the only absolute thermodynamic anchor.
  Permanent gas at any process-relevant temperature (Tc = 33.18 K).
  Sources: constants (Tc/Pc/omega/MW/Tb) + vapour pressure cross-checked
  against CoolProp 7.2.0 (MIT); ideal-gas formation enthalpy/entropy
  against the NASA polynomial database (NASA TM-4513, public domain).
\\*---------------------------------------------------------------------------*/

name        H2;
formula     H2;
CAS         1333-74-0;

MW          2.016;        // kg/kmol
Tc          33.18;        // K
Pc          13.13;        // bar
omega       -0.220;       // [-]   (anomalously negative for H2)
Tb          20.39;        // K
HvapTb      904;          // J/mol
Vliq        2.84e-5;      // m^3/mol  (28.4 cm^3/mol at Tb)
diffusionVolume  6.12;          // Fuller diffusion volume [-]

standardThermochemistry
{
    dHf_298   0.0;                // J/mol  -- element in standard state
    s_298     130.680;            // J/(mol·K)  -- third-law absolute
}

vaporPressure
{
    model         Antoine;
    coefficients  (3.54314   99.395   7.726);
    Trange        (14  25);
}

idealGasHeatCapacity
{
    model         polynomial;
    // Cp [J/(mol·K)] = a0 + a1*T + a2*T^2 + a3*T^3   (Reid 4th ed. Table A.1)
    coefficients  (27.14   9.274e-3   -1.381e-5   7.645e-9);
    Trange        (250  1500);
}

// Friendly-name aliases (resolved to this file via the generated ALIASES index).
aliases ( hydrogen );

cosmo
{
    VT2005
    {
        model       COSMOSAC;
        variant     "2002";
        source      "VT-2005 sigma-profile database (Mullins et al., Ind. Eng. Chem. Res. 45 (2006) 4389; DFT-COSMO), file VT2005-0383-PROF.txt bundled in usnistgov/COSMOSAC; CAS 1333-74-0";
        licence     externalRestricted;   // VT-2005: redistribution NOT confirmed -- values NOT shipped
        installed   false;                 // install your own copy: bin/choupo-import-cosmo (-> data/local/cosmo/VT2005/)
    }
}

// ---- Aqueous-speciation FACT (substance-level, classifier-read) ----
// dissolved hydrogen: neutral master, no aqueous equilibria.
aqueousSpeciation  none;
`,ki=`/*--------------------------------*- Choupo -*-----------------------*\\
  Component: Hydrogen peroxide (oxidant; thermal decomposition product H2O2 -> 2 OH governs LT ignition delay)
  Generated by bin/import_nasa.py from NASA-7 polynomial data
  (Burcat 2005 / JANAF, public domain); dHf_298 and s_298 computed
  from the NASA-7 integration constants a6/a7 evaluated at T = 298.15 K
  and cross-checked against the NASA polynomial database (NASA TM-4513).
  Critical properties are individual literature values -- primary
  re-citation pending (IST review).
\\*---------------------------------------------------------------------------*/

name        H2O2;
formula     H2O2;
CAS         7722-84-1;

MW          34.0147;       // kg/kmol
tags           ( radical gasPhase combustion );
Tc          730.15;         // K
Pc          220.0;         // bar
omega       0.358;      // [-]
Tb          423.35;         // K
HvapTb      51600;      // J/mol
Vliq        4e-05;       // m^3/mol

standardThermochemistry
{
    dHf_298   -135879.2256;            // J/mol  -- ideal-gas reference
    s_298     234.5407;           // J/(mol·K)  -- third-law absolute
}

vaporPressure
{
    model         Antoine;
    coefficients  (4.9412   1763.3   -39.14);
    Trange        (270  425);
}

idealGasHeatCapacity
{
    model         polynomial;
    coefficients  (2.676906e+01   6.189904e-02   -3.394423e-05   7.776981e-09);
    Trange        (250  1500);
}

// Friendly-name aliases (resolved to this file via the generated ALIASES index).
aliases ( hydrogenPeroxide );

cosmo
{
    VT2005
    {
        model       COSMOSAC;
        variant     "2002";
        source      "VT-2005 sigma-profile database (Mullins et al., Ind. Eng. Chem. Res. 45 (2006) 4389; DFT-COSMO), file VT2005-1142-PROF.txt bundled in usnistgov/COSMOSAC; CAS 7722-84-1";
        licence     externalRestricted;   // VT-2005: redistribution NOT confirmed -- values NOT shipped
        installed   false;                 // install your own copy: bin/choupo-import-cosmo (-> data/local/cosmo/VT2005/)
    }
}
`,Mi=`/*--------------------------------*- Choupo -*-----------------------*\\
  Component: Hydrogen sulfide  (H2S, CAS 7783-06-4)

  Sour-gas contaminant in natural gas and biogas.  Removed by amine
  scrubbing; recovered as elemental S via the Claus process
  (2 H2S + SO2 -> 3 S + 2 H2O at 1000-1500 K) --- another good
  GibbsReactor target with strong T sensitivity.
  Sources: constants (Tc/Pc/omega/MW/Tb) cross-checked vs CoolProp 7.2.0
  reference EOS; standardThermochemistry cross-checked vs NASA TM-4513
  (McBride-Gordon-Reno 1993); idealGasHeatCapacity -- individual
  literature value, primary re-citation pending (IST review).
\\*---------------------------------------------------------------------------*/

name        H2S;
formula     H2S;
CAS         7783-06-4;

// role solute (v0.28+): in a water solvent the K-value comes from
// HenrysLaw/H2S-water.dat instead of Antoine/Raoult.
role        solute;

MW          34.082;            // kg/kmol
Tc          373.40;             // K
Pc          89.63;              // bar
omega       0.090;              // [-]
Tb          213.60;             // K
HvapTb      18670;              // J/mol
Vliq        3.49e-5;            // m^3/mol

standardThermochemistry
{
    dHf_298    -20630.0;        // J/mol  -- ideal-gas reference
    s_298      205.79;          // J/(mol·K)
}

vaporPressure
{
    model         Antoine;
    coefficients  (4.22883   806.62   -25.770);
    Trange        (188  340);
}

idealGasHeatCapacity
{
    model         polynomial;
    coefficients  (31.94   1.436e-3   2.432e-5   -1.176e-8);
    Trange        (250  1500);
}

// ---- Aqueous-speciation FACT (substance-level, classifier-read) ----
// H2S(aq) = HS- + H+: the sulfide set, master HS.
aqueousSpeciation  sulfide;
aqueousMapping ( { species HS; nu 1; } { species H; nu 1; } );
`,Ki=`/*--------------------------------*- Choupo -*-----------------------*\\
  Component: Sulfuric acid (H2SO4), pure liquid.  CAS 7664-93-9.

  THE archetypal strong mineral acid.  This is the MOLECULAR component
  (pure-liquid formation datum).  It carries NO \`role nonvolatile\`: a case
  that treats it as a dissolved acid (neutralisation duty, sulfate-salt
  precipitation, pickling, acid balances) declares nonvolatility locally, and
  the dissociation (H2SO4 -> H+ + HSO4- -> H+ + SO4--) is electrolyte
  chemistry -- not a universal component role.

  Carries the LIQUID-phase formation datum and a real liquid heat capacity,
  so its heat of neutralisation closes from the elements reference.

  PRIMARY: Wagman et al., NBS Tables of Chemical Thermodynamic Properties,
  J. Phys. Chem. Ref. Data 11, Suppl. 2 (1982) -- PUBLIC DOMAIN.
  Density: ~1.830 g/cm^3 (pure liquid, 25 C) -> Vliq below.
\\*---------------------------------------------------------------------------*/

name        H2SO4;
formula     H2SO4;
CAS         7664-93-9;

MW          98.079;            // kg/kmol


Vliq        5.360e-5;          // m^3/mol  (= MW / 1830 kg/m^3)

standardThermochemistry
{
    dHf_298   -813989;         // J/mol  liquid H2SO4 [Wagman et al. NBS Tables 1982]
    s_298     156.90;          // J/(mol*K) [Wagman 1982]
    referenceState     pureLiquid;
}

liquidHeatCapacity
{
    model         polynomial;          // Cp = a0  [J/(mol*K)], constant
    coefficients  ( 138.91 );          // Cp(298) [Wagman et al. NBS Tables 1982]
    Trange        ( 283  330 );        // constant-Cp validity flag (liquid, near ambient)
}

provenance
{
    standardThermochemistry { origin literature; method "Wagman et al. NBS Tables 1982 (liquid H2SO4)"; }
    liquidHeatCapacity { origin literature; method "Wagman et al. NBS Tables 1982 (Cp298, carried constant)"; }
    Vliq { origin literature; method "pure-liquid density ~1.830 g/cm3 at 25 C"; }
}
`,qi=`/*--------------------------------*- Choupo -*-----------------------*\\
  Component: Phosphoric acid (H3PO4, orthophosphoric).  CAS 7664-38-2.

  A triprotic mineral acid.  Pure H3PO4 MELTS at ~42 C, so at the 25 C
  reference the pure compound is a CRYSTALLINE SOLID -- this entry carries the
  SOLID-phase formation datum (referenceState pureSolid) + a real solid heat
  capacity.  It carries NO \`role nonvolatile\`: a case that dissolves the acid
  declares nonvolatility locally, and its dissociation (H3PO4 -> H+ + H2PO4- ->
  ...) is electrolyte chemistry, not a universal component role.

  PRIMARY: Wagman et al., NBS Tables of Chemical Thermodynamic Properties,
  J. Phys. Chem. Ref. Data 11, Suppl. 2 (1982) -- PUBLIC DOMAIN.
  NOTE on dHf_298: the crystalline-H3PO4 formation enthalpy is tabulated as
  -1284.4 kJ/mol (CRC / commonly tabulated; used here); some NBS printings
  list -1279.0 -- a ~5 kJ/mol spread.  Flag before a precise heat-of-reaction
  hinges on it.
\\*---------------------------------------------------------------------------*/

name        H3PO4;
formula     H3PO4;
CAS         7664-38-2;

MW          97.995;            // kg/kmol


solid
{
    rho_p   1834.0;            // crystalline H3PO4 density [kg/m^3]
}

standardThermochemistry
{
    dHf_298   -1284400;        // J/mol  crystalline [CRC; NBS printings -1279.0, see header]
    s_298     110.5;           // J/(mol*K) [Wagman et al. NBS Tables 1982]
    referenceState     pureSolid;
}

solidHeatCapacity
{
    model         polynomial;          // Cp = a0  [J/(mol*K)], constant
    coefficients  ( 106.06 );          // Cp(298) [Wagman et al. NBS Tables 1982]
    Trange        ( 298  315 );        // constant-Cp validity flag (solid; melts ~315 K)
}

provenance
{
    standardThermochemistry { origin literature; method "dHf_298: CRC Handbook (crystalline H3PO4, -1284.4 kJ/mol; NBS printings -1279.0); s_298: Wagman et al. NBS Tables 1982"; }
    solidHeatCapacity { origin literature; method "Wagman et al. NBS Tables 1982 (Cp298, carried constant)"; }
    rho_p { origin literature; method "crystalline H3PO4 density ~1.834 g/cm3"; }
}

cosmo
{
    VT2005
    {
        model       COSMOSAC;
        variant     "2002";
        source      "VT-2005 sigma-profile database (Mullins et al., Ind. Eng. Chem. Res. 45 (2006) 4389; DFT-COSMO), file VT2005-1062-PROF.txt bundled in usnistgov/COSMOSAC; CAS 7664-38-2";
        licence     externalRestricted;   // VT-2005: redistribution NOT confirmed -- values NOT shipped
        installed   false;                 // install your own copy: bin/choupo-import-cosmo (-> data/local/cosmo/VT2005/)
    }
}
`,Ii=`/*--------------------------------*- Choupo -*-----------------------*\\
  Component: Ketenyl radical (acetylene oxidation backbone)
  Generated by bin/import_nasa.py from NASA-7 polynomial data
  (GRI-Mech Version 3.0 Thermodynamics released 7/30/99).  No liquid phase at process conditions ---
  the entry is tagged \`role nonvolatile;\` so vapour-pressure routines
  never get called.  dHf_298 and s_298 from NASA-7 integration
  constants at T = 298.15 K.
\\*---------------------------------------------------------------------------*/

name           HCCO;
formula        HCCO;
CAS            n/a;        // radical registry number: pending curation

MW             41.029;       // kg/kmol
role        nonvolatile;
tags           ( radical gasPhase combustion );

standardThermochemistry
{
    dHf_298    177410.7869;            // J/mol  -- ideal-gas reference
    s_298      246.7034;           // J/(mol·K)  -- third-law absolute
}

idealGasHeatCapacity
{
    model         polynomial;
    coefficients  (2.779499e+01   8.633596e-02   -6.044055e-05   1.605766e-08);
    Trange        (250  3000);
}
`,Ji=`/*--------------------------------*- Choupo -*-----------------------*\\
  Component: Formaldehyde  (HCHO / methanal, CAS 50-00-0)

  Largest-volume C1 oxygenate after methanol; intermediate in partial
  oxidation of CH3OH and in the cool-flame chemistry of CH4 combustion.
  Polymerises readily in the condensed phase; sold commercially as the
  37 wt% aqueous "formalin" solution.
  Sources: individual literature values -- primary re-citation pending
  (IST review).
\\*---------------------------------------------------------------------------*/

name        HCHO;
formula     CH2O;
CAS         50-00-0;

MW          30.026;            // kg/kmol
Tc          408.00;             // K
Pc          65.90;              // bar
omega       0.282;              // [-]
Tb          254.05;             // K
HvapTb      23300;              // J/mol
Vliq        3.50e-5;            // m^3/mol

standardThermochemistry
{
    dHf_298    -108700.0;       // J/mol  -- ideal-gas reference
    s_298      218.95;          // J/(mol·K)
}

vaporPressure
{
    model         Antoine;
    coefficients  (5.06430   1502.000   -16.500);
    Trange        (254  280);
}

idealGasHeatCapacity
{
    model         polynomial;
    coefficients  (23.48   3.157e-2   2.985e-5   -2.300e-8);
    Trange        (250  1500);
}

cosmo
{
    VT2005
    {
        model       COSMOSAC;
        variant     "2002";
        source      "VT-2005 sigma-profile database (Mullins et al., Ind. Eng. Chem. Res. 45 (2006) 4389; DFT-COSMO), file VT2005-0405-PROF.txt bundled in usnistgov/COSMOSAC; CAS 50-00-0";
        licence     externalRestricted;   // VT-2005: redistribution NOT confirmed -- values NOT shipped
        installed   false;                 // install your own copy: bin/choupo-import-cosmo (-> data/local/cosmo/VT2005/)
    }
}
`,Vi=`/*--------------------------------*- Choupo -*-----------------------*\\
  Component: Hydrogen cyanide  (HCN, CAS 74-90-8)

  Produced industrially by the Andrussow process (CH4 + NH3 + 3/2 O2 ->
  HCN + 3 H2O over Pt-Rh gauze).  Also a fuel-NOx side-product in
  combustion of N-bearing fuels (coal char).  Highly polar, strongly
  associated in the liquid phase.
  Sources: standardThermochemistry cross-checked vs NASA TM-4513
  (McBride-Gordon-Reno 1993); constants and idealGasHeatCapacity --
  individual literature values, primary re-citation pending (IST review).
\\*---------------------------------------------------------------------------*/

name        HCN;
formula     HCN;
CAS         74-90-8;

MW          27.026;            // kg/kmol
Tc          456.65;             // K
Pc          53.90;              // bar
omega       0.388;              // [-]
Tb          298.85;             // K
HvapTb      25220;              // J/mol
Vliq        3.91e-5;            // m^3/mol

standardThermochemistry
{
    dHf_298    135140.0;        // J/mol  -- ideal-gas reference
    s_298      201.83;          // J/(mol·K)
}

vaporPressure
{
    model         Antoine;
    coefficients  (5.06280   1340.530   -29.510);
    Trange        (257  306);
}

idealGasHeatCapacity
{
    model         polynomial;
    coefficients  (21.86   6.062e-2   -4.961e-5   1.815e-8);
    Trange        (250  1500);
}

cosmo
{
    VT2005
    {
        model       COSMOSAC;
        variant     "2002";
        source      "VT-2005 sigma-profile database (Mullins et al., Ind. Eng. Chem. Res. 45 (2006) 4389; DFT-COSMO), file VT2005-0944-PROF.txt bundled in usnistgov/COSMOSAC; CAS 74-90-8";
        licence     externalRestricted;   // VT-2005: redistribution NOT confirmed -- values NOT shipped
        installed   false;                 // install your own copy: bin/choupo-import-cosmo (-> data/local/cosmo/VT2005/)
    }
}
`,Di=`/*--------------------------------*- Choupo -*-----------------------*\\
  Component: Formyl radical (the CO-formation gateway in all hydrocarbon flames)
  Generated by bin/import_nasa.py from NASA-7 polynomial data
  (GRI-Mech Version 3.0 Thermodynamics released 7/30/99).  No liquid phase at process conditions ---
  the entry is tagged \`role nonvolatile;\` so vapour-pressure routines
  never get called.  dHf_298 and s_298 from NASA-7 integration
  constants at T = 298.15 K.
\\*---------------------------------------------------------------------------*/

name           HCO;
formula        HCO;
CAS            n/a;        // radical registry number: pending curation

MW             29.018;       // kg/kmol
role        nonvolatile;
tags           ( radical gasPhase combustion );

standardThermochemistry
{
    dHf_298    41999.7607;            // J/mol  -- ideal-gas reference
    s_298      224.3344;           // J/(mol·K)  -- third-law absolute
}

idealGasHeatCapacity
{
    model         polynomial;
    coefficients  (2.762661e+01   2.297074e-02   7.647011e-07   -3.379524e-09);
    Trange        (250  3000);
}
`,Fi=`/*--------------------------------*- Choupo -*-----------------------*\\
  Component: Hydrogen chloride  (HCl, CAS 7647-01-0)

  Combustion product of Cl-bearing fuels (PVC, etc.); waste-incinerator
  flue gas.  Strong acid in aqueous absorption.  The HCl + 1/2 O2 ->
  1/2 Cl2 + H2O Deacon process is a Gibbs-equilibrium pedagogical case
  (mildly exothermic, equilibrium-limited at high T).
  Sources: constants cross-checked vs CoolProp 7.2.0 reference EOS (MIT);
           standardThermochemistry vs NASA TM-4513 (McBride-Gordon-Reno 1993).
\\*---------------------------------------------------------------------------*/

name        HCl;
formula     HCl;
CAS         7647-01-0;

// role solute (v0.28+): in a water solvent the K-value comes from
// HenrysLaw/HCl-water.dat instead of Antoine/Raoult.
role        solute;

MW          36.461;            // kg/kmol
Tc          324.55;             // K
Pc          83.10;              // bar
omega       0.133;              // [-]
Tb          188.00;             // K
HvapTb      16100;              // J/mol
Vliq        3.05e-5;            // m^3/mol

standardThermochemistry
{
    dHf_298    -92310.0;        // J/mol  -- ideal-gas reference
    s_298      186.90;          // J/(mol·K)
}

vaporPressure
{
    model         Antoine;
    coefficients  (4.55090   905.530   -8.380);
    Trange        (137  189);
}

idealGasHeatCapacity
{
    model         polynomial;
    coefficients  (30.67   -7.201e-3   1.246e-5   -3.898e-9);
    Trange        (250  1500);
}

cosmo
{
    VT2005
    {
        model       COSMOSAC;
        variant     "2002";
        source      "VT-2005 sigma-profile database (Mullins et al., Ind. Eng. Chem. Res. 45 (2006) 4389; DFT-COSMO), file VT2005-1064-PROF.txt bundled in usnistgov/COSMOSAC; CAS 7647-01-0";
        licence     externalRestricted;   // VT-2005: redistribution NOT confirmed -- values NOT shipped
        installed   false;                 // install your own copy: bin/choupo-import-cosmo (-> data/local/cosmo/VT2005/)
    }
}
`,Gi=`/*--------------------------------*- Choupo -*-----------------------*\\
  Component: Nitroxyl (HNO; NOx recombination chemistry)
  Generated by bin/import_nasa.py from NASA-7 polynomial data
  (GRI-Mech Version 3.0 Thermodynamics released 7/30/99).  No liquid phase at process conditions ---
  the entry is tagged \`role nonvolatile;\` so vapour-pressure routines
  never get called.  dHf_298 and s_298 from NASA-7 integration
  constants at T = 298.15 K.
\\*---------------------------------------------------------------------------*/

name           HNO;
formula        HNO;
CAS            n/a;        // radical registry number: pending curation

MW             31.014;       // kg/kmol
role        nonvolatile;
tags           ( radical gasPhase combustion );

standardThermochemistry
{
    dHf_298    106258.1854;            // J/mol  -- ideal-gas reference
    s_298      220.9160;           // J/(mol·K)  -- third-law absolute
}

idealGasHeatCapacity
{
    model         polynomial;
    coefficients  (2.811561e+01   1.726685e-02   6.345158e-06   -3.928920e-09);
    Trange        (250  3000);
}
`,Li=`/*--------------------------------*- Choupo -*-----------------------*\\
  Component: Nitric acid (HNO3), pure liquid.  CAS 7697-37-2.

  A strong mineral acid.  This is the MOLECULAR component -- pure-liquid
  formation datum + a real liquid heat capacity.  It carries NO \`role
  nonvolatile\`: molecular HNO3 IS volatile (bp ~83 C), so nonvolatility is not
  a universal property of the compound.  A case that treats it as a dissolved
  acid declares that locally (a case-local \`role nonvolatile\` overlay), and its
  dissociation (HNO3 -> H+ + NO3-) is electrolyte chemistry, not a component
  role.  A molecular VLE case still needs a vaporPressure block (a gap here).

  PRIMARY: Wagman et al., NBS Tables of Chemical Thermodynamic Properties,
  J. Phys. Chem. Ref. Data 11, Suppl. 2 (1982) -- PUBLIC DOMAIN.
  Density: ~1.513 g/cm^3 (pure liquid, 25 C) -> Vliq below.
\\*---------------------------------------------------------------------------*/

name        HNO3;
formula     HNO3;
CAS         7697-37-2;

MW          63.013;            // kg/kmol


Vliq        4.165e-5;          // m^3/mol  (= MW / 1513 kg/m^3)

standardThermochemistry
{
    dHf_298   -174100;         // J/mol  liquid HNO3 [Wagman et al. NBS Tables 1982]
    s_298     155.6;           // J/(mol*K) [Wagman 1982]
    referenceState     pureLiquid;
}

liquidHeatCapacity
{
    model         polynomial;          // Cp = a0  [J/(mol*K)], constant
    coefficients  ( 109.87 );          // Cp(298) [Wagman et al. NBS Tables 1982]
    Trange        ( 232  350 );        // constant-Cp validity flag (liquid range)
}

provenance
{
    standardThermochemistry { origin literature; method "Wagman et al. NBS Tables 1982 (liquid HNO3)"; }
    liquidHeatCapacity { origin literature; method "Wagman et al. NBS Tables 1982 (Cp298, carried constant)"; }
    Vliq { origin literature; method "pure-liquid density ~1.513 g/cm3 at 25 C"; }
}

cosmo
{
    VT2005
    {
        model       COSMOSAC;
        variant     "2002";
        source      "VT-2005 sigma-profile database (Mullins et al., Ind. Eng. Chem. Res. 45 (2006) 4389; DFT-COSMO), file VT2005-1063-PROF.txt bundled in usnistgov/COSMOSAC; CAS 7697-37-2";
        licence     externalRestricted;   // VT-2005: redistribution NOT confirmed -- values NOT shipped
        installed   false;                 // install your own copy: bin/choupo-import-cosmo (-> data/local/cosmo/VT2005/)
    }
}
`,ji=`/*--------------------------------*- Choupo -*-----------------------*\\
  Component: Hydroperoxyl radical (key chain carrier in low- and intermediate-T oxidation)
  Generated by bin/import_nasa.py from NASA-7 polynomial data
  (Burcat 2005 / JANAF).  No liquid phase at process conditions ---
  the entry is tagged \`role nonvolatile;\` so vapour-pressure routines
  never get called.  dHf_298 and s_298 from NASA-7 integration
  constants at T = 298.15 K.
\\*---------------------------------------------------------------------------*/

name           HO2;
formula        HO2;
CAS            3170-83-0;

MW             33.0067;       // kg/kmol
role        nonvolatile;
tags           ( radical gasPhase combustion );

standardThermochemistry
{
    dHf_298    12295.9299;            // J/mol  -- ideal-gas reference
    s_298      229.1044;           // J/(mol·K)  -- third-law absolute
}

idealGasHeatCapacity
{
    model         polynomial;
    coefficients  (2.521790e+01   3.782100e-02   -1.994109e-05   4.480144e-09);
    Trange        (250  3000);
}
`,Bi=`/*--------------------------------*- Choupo -*-----------------------*\\
  Component: Hypochlorous acid, gas (chlorine hydrolysis)
  Generated by bin/import_nasa.py from NASA-7 polynomial data
  (BURCAT.THR).  No liquid phase at process conditions ---
  the entry is tagged \`role nonvolatile;\` so vapour-pressure routines
  never get called.  dHf_298 and s_298 from NASA-7 integration
  constants at T = 298.15 K.
\\*---------------------------------------------------------------------------*/

name           HOCl;
formula        HOCL;
CAS            7790-92-3;

MW             52.457;       // kg/kmol
role        nonvolatile;
tags           ( gasPhase combustion chlorine );

standardThermochemistry
{
    dHf_298    -76148.3657;            // J/mol  -- ideal-gas reference
    s_298      236.9692;           // J/(mol·K)  -- third-law absolute
}

idealGasHeatCapacity
{
    model         polynomial;
    coefficients  (2.663726e+01   4.422482e-02   -3.046322e-05   8.219116e-09);
    Trange        (250  3000);
}
`,Wi=`/*--------------------------------*- Choupo -*-----------------------*\\
  Component: Nitrous acid, gas (NOx reservoir; deNOx chemistry)
  Generated by bin/import_nasa.py from NASA-7 polynomial data
  (BURCAT.THR).  No liquid phase at process conditions ---
  the entry is tagged \`role nonvolatile;\` so vapour-pressure routines
  never get called.  dHf_298 and s_298 from NASA-7 integration
  constants at T = 298.15 K.
\\*---------------------------------------------------------------------------*/

name           HONO;
formula        HONO;
CAS            7782-77-6;

MW             47.013;       // kg/kmol
role        nonvolatile;
tags           ( gasPhase combustion nox );

standardThermochemistry
{
    dHf_298    -79189.5483;            // J/mol  -- ideal-gas reference
    s_298      248.0852;           // J/(mol·K)  -- third-law absolute
}

idealGasHeatCapacity
{
    model         polynomial;
    coefficients  (2.131731e+01   9.723497e-02   -6.786569e-05   1.775672e-08);
    Trange        (250  3000);
}
`,Ui=`/*--------------------------------*- Choupo -*-----------------------*\\
  Component: HSO radical (H2S oxidation intermediate)
  Generated by bin/import_nasa.py from NASA-7 polynomial data
  (BURCAT.THR).  No liquid phase at process conditions ---
  the entry is tagged \`role nonvolatile;\` so vapour-pressure routines
  never get called.  dHf_298 and s_298 from NASA-7 integration
  constants at T = 298.15 K.
\\*---------------------------------------------------------------------------*/

name           HSO;
formula        HSO;
CAS            n/a;        // radical registry number: pending curation

MW             49.067;       // kg/kmol
role        nonvolatile;
tags           ( radical gasPhase combustion sulfur );

standardThermochemistry
{
    dHf_298    -21756.6761;            // J/mol  -- ideal-gas reference
    s_298      241.6815;           // J/(mol·K)  -- third-law absolute
}

idealGasHeatCapacity
{
    model         polynomial;
    coefficients  (2.348997e+01   4.804606e-02   -2.627570e-05   5.161921e-09);
    Trange        (250  3000);
}
`,zi=`/*--------------------------------*- Choupo -*-----------------------*\\
  Component: HO-SO2 radical (SO3 hydration path)
  Generated by bin/import_nasa.py from NASA-7 polynomial data
  (BURCAT.THR).  No liquid phase at process conditions ---
  the entry is tagged \`role nonvolatile;\` so vapour-pressure routines
  never get called.  dHf_298 and s_298 from NASA-7 integration
  constants at T = 298.15 K.
\\*---------------------------------------------------------------------------*/

name           HSO3;
formula        HSO3;
CAS            n/a;        // radical registry number: pending curation

MW             81.065;       // kg/kmol
role        nonvolatile;
tags           ( radical gasPhase combustion sulfur );

standardThermochemistry
{
    dHf_298    -353868.1511;            // J/mol  -- ideal-gas reference
    s_298      300.7297;           // J/(mol·K)  -- third-law absolute
}

idealGasHeatCapacity
{
    model         polynomial;
    coefficients  (3.173142e+01   1.291033e-01   -9.736731e-05   2.659097e-08);
    Trange        (250  3000);
}
`,$i=`/*--------------------------------*- Choupo -*-----------------------*\\
  Component: Helium  (He, CAS 7440-59-7)

  Monatomic noble gas; the lowest-Tc substance on the periodic table
  (Tc = 5.19 K).  Used as a tracer gas, a low-temperature refrigerant,
  and a process inert in semiconductor manufacturing.  In Choupo,
  most relevant as a true inert in high-T GibbsReactor cases.
  Sources: constants (Tc, Pc, omega, MW, Tb) cross-checked against the
  CoolProp 7.2.0 reference equation of state (MIT-licensed); ideal-gas
  formation properties (dHf_298, s_298) from NASA TM-4513 (McBride-
  Gordon-Reno 1993).
\\*---------------------------------------------------------------------------*/

name        He;
formula     He;
CAS         7440-59-7;

MW          4.0026;            // kg/kmol
Tc          5.19;               // K
Pc          2.27;               // bar
omega       -0.390;             // [-]  (the most negative omega in the periodic table)
Tb          4.22;               // K
HvapTb      83;                 // J/mol
Vliq        3.20e-5;            // m^3/mol

standardThermochemistry
{
    dHf_298    0.0;             // J/mol  -- element in its standard state
    s_298      126.15;          // J/(mol·K)
}

vaporPressure
{
    model         Antoine;
    coefficients  (1.5982   8.595   1.000);
    Trange        (1  5);
}

idealGasHeatCapacity
{
    model         polynomial;
    // Monatomic: Cp = 5/2 R = 20.79 J/(mol·K) independent of T.
    coefficients  (20.79   0.0   0.0   0.0);
    Trange        (250  6000);
}
`,Yi=`/*--------------------------------*- Choupo -*-----------------------*\\
  Component: Potassium sulfate (K2SO4), ARCANITE.  CAS 7778-80-5.

  A NON-VOLATILE crystalline salt: never enters the vapour (K = 0).
  Potash-fertiliser (SOP) production, Mannheim-process and sulfate
  crystallisation exercises.  Carries the solid-phase formation datum and a
  real solid heat capacity.

  PRIMARY: Wagman et al., NBS Tables of Chemical Thermodynamic Properties,
  J. Phys. Chem. Ref. Data 11, Suppl. 2 (1982) -- PUBLIC DOMAIN.
\\*---------------------------------------------------------------------------*/

name        K2SO4;
formula     K2SO4;
CAS         7778-80-5;

MW          174.259;           // kg/kmol

role        nonvolatile;       // never goes to the vapour (K = 0)

solid
{
    rho_p   2660.0;            // arcanite particle density [kg/m^3]
}

standardThermochemistry
{
    dHf_298   -1437790;        // J/mol  [Wagman et al. NBS Tables 1982]
    s_298     175.56;          // J/(mol*K) [Wagman 1982]
    referenceState     pureSolid;
}

solidHeatCapacity
{
    model         polynomial;          // Cp = a0  [J/(mol*K)], constant
    coefficients  ( 131.46 );          // Cp(298) [Wagman et al. NBS Tables 1982]
    Trange        ( 298  600 );        // constant-Cp validity flag (near ambient)
}

provenance
{
    standardThermochemistry { origin literature; method "Wagman et al. NBS Tables 1982"; }
    solidHeatCapacity { origin literature; method "Wagman et al. NBS Tables 1982 (Cp298, carried constant)"; }
    rho_p { origin literature; method "arcanite mineralogical density ~2.66 g/cm3"; }
}

// Solid phase(s) of this component (roadmap Phase D fold-in):
solidPhases
{
    arcanite
    {
        dissolutionReaction { masters ( { ion K; nu 2; } { ion SO4; nu 1; } ); }
        equilibrium { logK25 -1.776; dH 20920; analytic ( 674.142 0.30423 -18037 -280.236 0 -0.000144055 ); source "USGS PHREEQC phreeqc.dat (public domain); lit: ref. 3"; }
    }
}
`,Qi=`/*--------------------------------*- Choupo -*-----------------------*\\
  Component: Potassium chloride (KCl, CAS 7447-40-7)

  A non-volatile, fully-dissociating 1-1 salt (K+ + Cl-).  Highly soluble
  (~4.76 mol/kg at 25 C) and only mildly temperature-sensitive, so KCl is
  recovered by EVAPORATION or by ANTISOLVENT (drowning-out with ethanol),
  not by cooling.  Pairs with the eNRTL/Pitzer activity models exactly as
  NaCl does; the ions K+/Cl- live in species/aqueous/.
  Sources: formation data live PER ION (K+, Cl-; H+(aq) = 0 convention) --
           Wagman et al., NBS Tables (1982) -- cross-checked by
           bin/curate/check_ion_pins.  Solid rho_p 1988 kg/m^3 = sylvite
           crystallographic density (public domain).  The ~4.76 mol/kg
           (25 C) solubility quoted above and the Dulong-Petit liquid-Cp
           proxy: primary re-citation pending (IST review).
\\*---------------------------------------------------------------------------*/

name           KCl;
formula        KCl;
CAS            7447-40-7;

MW             74.551;         // g/mol
role        nonvolatile;
dissociation   2;              // K+ + Cl-
dissociatesTo  { K 1; Cl 1; }   // ion stoichiometry (formula-like identity; the package activates it)



// FORMATION DATUM lives PER ION in species/aqueous/ (K+, Cl-; H+(aq)=0
// convention, Wagman 1982), referenced BY NAME via the electrolyte{} block --
// KCl carries no component-level standardThermochemistry block (arity-2; see
// docs/ai/data-doctrine.md).  Both K+ and Cl- carry the full hfAq/sAq/cpAq
// enthalpy tier in ions.dat.


// Crystal properties for the population-balance crystalliser (MSMPR/FVM).
// PRIMARY: sylvite density 1.988 g/cm^3 (crystallographic, public); k_v = 1.0 (cube).
solid
{
    rho_p   1988.0;     // crystalline KCl (sylvite) density [kg/m^3]
    k_v     1.0;        // volume shape factor (cube)
}

// Liquid heat capacity -- a CLOSURE proxy (energy-balance units: mixer, column).
// ~50 J/(mol.K) = Dulong-Petit 6R (two-atom KCl); the right order at 298 K.  In solution the salt is a minor, nonvolatile component; water/ethanol
// dominate Cp, so the exact value is immaterial -- it only lets the balance close.
liquidHeatCapacity
{
    model         polynomial;
    coefficients  (50.0);      // J/(mol.K), constant
    Trange        (270  400);
}

// Solid phase(s) of this component (roadmap Phase D fold-in):
solidPhases
{
    sylvite
    {
        dissolutionReaction { masters ( { ion K; nu 1; } { ion Cl; nu 1; } ); }
        equilibrium { logK25 0.9; dH 8500; source "USGS PHREEQC phreeqc.dat (public domain)"; }
        calorimetric
        {
            solubility          { value 4.76;  unit mol/kgWater; T 298.15; source "Pinho & Macedo, J. Chem. Eng. Data 50 (2005) 29 (aqueous, 25 C; primary)"; }
            dissolutionEnthalpy { value 17200; unit J/mol; basis "KCl(s) -> K+(aq) + Cl-(aq), infinite dilution (endothermic)"; }
        }
        crystal { rho_p 1988.0; k_v 1.0; habit cube; }
    }
}
`,Zi=`/*--------------------------------*- Choupo -*-----------------------*\\
  Component: Potassium hydroxide (KOH), CAUSTIC POTASH.  CAS 1310-58-3.

  A NON-VOLATILE strong base (the potassium analogue of NaOH): never enters
  the vapour (K = 0).  Strong-base neutralisation, saponification and CO2
  scrubbing exercises.  Carries the solid-phase formation datum and a real
  solid heat capacity.

  PRIMARY: Wagman et al., NBS Tables of Chemical Thermodynamic Properties,
  J. Phys. Chem. Ref. Data 11, Suppl. 2 (1982) -- PUBLIC DOMAIN.
\\*---------------------------------------------------------------------------*/

name        KOH;
formula     KOH;
CAS         1310-58-3;

MW          56.105;            // kg/kmol

role        nonvolatile;       // never goes to the vapour (K = 0)

solid
{
    rho_p   2044.0;            // crystal density [kg/m^3]
}

standardThermochemistry
{
    dHf_298   -424764;         // J/mol  [Wagman et al. NBS Tables 1982]
    s_298     78.9;            // J/(mol*K) [Wagman 1982]
    referenceState     pureSolid;
}

solidHeatCapacity
{
    model         polynomial;          // Cp = a0  [J/(mol*K)], constant
    coefficients  ( 64.9 );            // Cp(298) [Wagman et al. NBS Tables 1982]
    Trange        ( 298  500 );        // constant-Cp validity flag (near ambient)
}

// liquid/dissolved Cp -- the solid Cp as a FLAGGED proxy, so the slurried/
// dissolved solid carries sensible heat in an aqueous process stream.
liquidHeatCapacity
{
    model         polynomial;          // Cp = a0  [J/(mol*K)], constant
    coefficients  ( 64.9 );            // Cp(298) [Wagman et al. NBS Tables 1982]
    Trange        ( 298  500 );        // constant-Cp validity flag (near ambient)
}

provenance
{
    standardThermochemistry { origin literature; method "Wagman et al. NBS Tables 1982"; }
    solidHeatCapacity { origin literature; method "Wagman et al. NBS Tables 1982 (Cp298, carried constant)"; }
    rho_p { origin literature; method "KOH crystal density ~2.04 g/cm3"; }
}
`,Xi=`/*--------------------------------*- Choupo -*-----------------------*\\
  Substance: Lithium chloride (LiCl, CAS 7447-41-8)

  UNIFIED substance file.  A non-volatile, fully-dissociating 1-1 salt
  (Li+ + Cl-), the most soluble common chloride (~19.9 mol/kg at 25 C) --
  which is WHY the salar/brine route works (Li stays in the mother liquor while
  NaCl/KCl crystallise out).  The Li+/Cl- ions live in species/aqueous/; the
  Li-Cl Pitzer pair is curated in parameters/Pitzer/pairs/.
  Promoted to the standard catalogue (was case-local in lithiumBrinePlant).

  Sources: MW from atomic weights (IUPAC); solid rho_p 2068 kg/m^3
  (crystallographic, public domain); solubility 19.9 mol/kg (25 C) -- primary
  re-citation pending (candidate: Linke & Seidell, Solubilities, 4th ed.);
  liquid-Cp an ASSERTED energy-closure proxy (see the block).
\\*---------------------------------------------------------------------------*/

name           LiCl;
formula        LiCl;
CAS            7447-41-8;

MW             42.394;         // g/mol
role        nonvolatile;

// APPARENT COMPONENT view -- the balance/representation map (apparent -> ions).
dissociatesTo  { Li 1; Cl 1; }   // ion stoichiometry (formula-like identity)

// Anhydrous LiCl crystal (the LiCl.H2O hydrate is a separate mineral phase).
rho_p   2068.0;     // crystalline LiCl density [kg/m^3]
k_v     1.0;        // volume shape factor (cube)


liquidHeatCapacity
{
    model         polynomial;
    coefficients  (50.0);      // J/(mol.K), constant
    Trange        (270  400);
    origin        asserted;
    why           "temporary energy-closure proxy; solid-lattice Dulong-Petit 6R value reused; not a physical liquid-LiCl Cp model";
}
`,nr=`/*--------------------------------*- Choupo -*-----------------------*\\
  Component: MD3M  (C12H36O4Si5, CAS 141-63-9)
  PROPOSAL TIER -- UNVERIFIED.  Imported from CoolProp 7.2.0 (MIT);
  pure-fluid properties from the published reference EOS below.
  Reference EOS: Thol-FPE-2019-siloxanes
  NOTE: formation properties (dHf, s_298) and group decompositions
  are NOT provided by CoolProp -> omitted here (a gap, not fabricated).
\\*---------------------------------------------------------------------------*/

name        MD3M;

//  Review state, MACHINE-READABLE (AP2, 2026-08-05).  This used to
//  live only in the banner above, which the parser discards -- so the
//  engine could not announce it and a run said nothing.
reviewStatus   interim;
reviewReason   importedFromCoolProp720_notCheckedAgainstPrimaries;
formula     C12H36O4Si5;
CAS         141-63-9;

MW          384.8390;        // kg/kmol  [CoolProp]
Tc          628.0000;        // K        [CoolProp EOS]
Pc          9.53951;        // bar      [CoolProp EOS]
omega       0.72963;        // [-]      [CoolProp EOS]
Tb          503.0215;        // K  normal boiling [CoolProp]
HvapTb      42489.0;        // J/mol  at Tb     [CoolProp]
Vliq        4.4242e-04;        // m3/mol @298K     [CoolProp]

vaporPressure
{
    model         Antoine;
    // log10(Psat [bar]) = A - B / (T[K] + C)   -- fitted to CoolProp EOS
    coefficients  (4.13617   1682.32   -95.9311);
    Trange        (282.60  615.44);
}

idealGasHeatCapacity
{
    model         polynomial;
    // Cp [J/(mol.K)] = a0 + a1 T + a2 T^2 + a3 T^3   -- fitted to CoolProp cp0
    coefficients  (9.05753  2.19179  -0.00187561  6.90841e-07);
    Trange        (200  1000);
}

liquidHeatCapacity
{
    model         polynomial;
    // Cp_liq [J/(mol.K)]   -- fitted to CoolProp saturated-liquid cp
    coefficients  (169.881  2.63591  -0.00442348  3.56932e-06);
    Trange        (314  503);
}

triplePoint
{
    T   192.0000;
    P   0.0000;
}

provenance
{
    constants      "CoolProp 7.2.0 -- Thol-FPE-2019-siloxanes";
    vaporPressure  "Antoine fitted to CoolProp EOS saturation, AAD 1.40%";
    idealGasCp     "polynomial fitted to CoolProp cp0, maxerr 4.56%";
    liquidCp       "polynomial fitted to CoolProp sat-liquid cp, maxerr 0.01%";
    triplePoint    "CoolProp reference EOS triple-point T,P";
}
`,er=`/*--------------------------------*- Choupo -*-----------------------*\\
  Component: MD4M  (C14H42O5Si6, CAS 107-52-8)
  PROPOSAL TIER -- UNVERIFIED.  Imported from CoolProp 7.2.0 (MIT);
  pure-fluid properties from the published reference EOS below.
  Reference EOS: Thol-FPE-2019-siloxanes
  NOTE: formation properties (dHf, s_298) and group decompositions
  are NOT provided by CoolProp -> omitted here (a gap, not fabricated).
\\*---------------------------------------------------------------------------*/

name        MD4M;

//  Review state, MACHINE-READABLE (AP2, 2026-08-05).  This used to
//  live only in the banner above, which the parser discards -- so the
//  engine could not announce it and a run said nothing.
reviewStatus   interim;
reviewReason   importedFromCoolProp720_notCheckedAgainstPrimaries;
formula     C14H42O5Si6;
CAS         107-52-8;

MW          458.9933;        // kg/kmol  [CoolProp]
Tc          653.2000;        // K        [CoolProp EOS]
Pc          8.28559;        // bar      [CoolProp EOS]
omega       0.80006;        // [-]      [CoolProp EOS]
Tb          532.8454;        // K  normal boiling [CoolProp]
HvapTb      44650.5;        // J/mol  at Tb     [CoolProp]
Vliq        5.1772e-04;        // m3/mol @298K     [CoolProp]

vaporPressure
{
    model         Antoine;
    // log10(Psat [bar]) = A - B / (T[K] + C)   -- fitted to CoolProp EOS
    coefficients  (4.10604   1726.74   -111.924);
    Trange        (293.94  640.14);
}

idealGasHeatCapacity
{
    model         polynomial;
    // Cp [J/(mol.K)] = a0 + a1 T + a2 T^2 + a3 T^3   -- fitted to CoolProp cp0
    coefficients  (0.583551  2.65619  -0.0023324  8.75995e-07);
    Trange        (200  1000);
}

liquidHeatCapacity
{
    model         polynomial;
    // Cp_liq [J/(mol.K)]   -- fitted to CoolProp saturated-liquid cp
    coefficients  (240.728  2.76997  -0.00402363  2.87943e-06);
    Trange        (327  533);
}

triplePoint
{
    T   214.1500;
    P   0.0000;
}

provenance
{
    constants      "CoolProp 7.2.0 -- Thol-FPE-2019-siloxanes";
    vaporPressure  "Antoine fitted to CoolProp EOS saturation, AAD 2.07%";
    idealGasCp     "polynomial fitted to CoolProp cp0, maxerr 4.64%";
    liquidCp       "polynomial fitted to CoolProp sat-liquid cp, maxerr 0.02%";
    triplePoint    "CoolProp reference EOS triple-point T,P";
}
`,or=`/*--------------------------------*- Choupo -*-----------------------*\\
  Component: MDM  (C8H24O2Si3, CAS 107-51-7)
  PROPOSAL TIER -- UNVERIFIED.  Imported from CoolProp 7.2.0 (MIT);
  pure-fluid properties from the published reference EOS below.
  Reference EOS: Thol-JCED-2017-siloxanes
  NOTE: formation properties (dHf, s_298) and group decompositions
  are NOT provided by CoolProp -> omitted here (a gap, not fabricated).
\\*---------------------------------------------------------------------------*/

name        MDM;

//  Review state, MACHINE-READABLE (AP2, 2026-08-05).  This used to
//  live only in the banner above, which the parser discards -- so the
//  engine could not announce it and a run said nothing.
reviewStatus   interim;
reviewReason   importedFromCoolProp720_notCheckedAgainstPrimaries;
formula     C8H24O2Si3;
CAS         107-51-7;

MW          236.5315;        // kg/kmol  [CoolProp]
Tc          565.3609;        // K        [CoolProp EOS]
Pc          14.37538;        // bar      [CoolProp EOS]
omega       0.52807;        // [-]      [CoolProp EOS]
Tb          425.6305;        // K  normal boiling [CoolProp]
HvapTb      36088.3;        // J/mol  at Tb     [CoolProp]
Vliq        2.9014e-04;        // m3/mol @298K     [CoolProp]

vaporPressure
{
    model         Antoine;
    // log10(Psat [bar]) = A - B / (T[K] + C)   -- fitted to CoolProp EOS
    coefficients  (4.01587   1405.36   -75.4406);
    Trange        (254.41  554.05);
}

idealGasHeatCapacity
{
    model         polynomial;
    // Cp [J/(mol.K)] = a0 + a1 T + a2 T^2 + a3 T^3   -- fitted to CoolProp cp0
    coefficients  (129.912  0.740555  -0.000145705  -8.34761e-08);
    Trange        (200  1000);
}

liquidHeatCapacity
{
    model         polynomial;
    // Cp_liq [J/(mol.K)]   -- fitted to CoolProp saturated-liquid cp
    coefficients  (377.951  -0.411316  0.00242459  -1.85024e-06);
    Trange        (283  426);
}

triplePoint
{
    T   187.2000;
    P   0.0011;
}

provenance
{
    constants      "CoolProp 7.2.0 -- Thol-JCED-2017-siloxanes";
    vaporPressure  "Antoine fitted to CoolProp EOS saturation, AAD 0.83%";
    idealGasCp     "polynomial fitted to CoolProp cp0, maxerr 3.73%";
    liquidCp       "polynomial fitted to CoolProp sat-liquid cp, maxerr 0.03%";
    triplePoint    "CoolProp reference EOS triple-point T,P";
}
`,ar=`/*--------------------------------*- Choupo -*-----------------------*\\
  Component: Magnesium sulphate (MgSO4, CAS 7487-88-9)

  Divalent 1-1 electrolyte (Mg²⁺ + SO₄²⁻) --- a useful contrast to
  NaCl for NF-membrane screening, since NF preferentially rejects
  divalent ions over monovalent ones.  The ideal van't Hoff factor
  is 2 (one cation + one anion), the same as NaCl, but NF rejection
  is substantially higher because of the divalent charge --- a
  point membrane data captures through the per-component
  permeability B_s rather than through bulk thermo.
  Sources: only MW (standard atomic weights) and the dissociation
           stoichiometry are stored here.  The per-ion formation tier
           (Mg+2, SO4-2) is to be sourced from Wagman et al., NBS Tables
           (1982) -- flagged follow-up in the body; until curated, MgSO4
           stays dissolved-only (NF rejection via the membrane B_s).
\\*---------------------------------------------------------------------------*/

name           MgSO4;
formula        MgSO4;
CAS            7487-88-9;

MW             120.37;         // g/mol
role        nonvolatile;
dissociation   2;              // fully dissociated 1-1 (one Mg²⁺ + one SO₄²⁻)

// FORMATION DATUM -- NOT in this file by design (arity-2 electrolyte).
// MgSO4 is a strong electrolyte: its thermodynamics live PER ION in the
// aqueous infinite-dilution tier, species/aqueous/ (H+(aq)=0 convention),
// referenced BY NAME -- the salt is never given a component-level
// standardThermochemistry block (see docs/ai/data-doctrine.md sec.2).
//   cation Mg   -> species/aqueous/ (z = +2)
//   anion  SO4  -> species/aqueous/ (z = -2)
// FLAGGED follow-up (do NOT fabricate): in ions.dat both Mg+2 and SO4-2
// currently carry the ION-TRANSPORT tier (radius, D0) but NOT the aqueous
// infinite-dilution ENTHALPY tier (hfAq/sAq/cpAq).  Source those from
// Wagman et al. NBS Tables (1982) -- Mg+2 ~ -466.85, SO4-2 ~ -909.27 kJ/mol --
// before any MgSO4 energy/heat-of-solution balance is run.  Until then this
// solute is dissolved-only for NF rejection (captured via the membrane B_s,
// not bulk thermo), and no energy balance consumes a MgSO4 formation number.
`,tr=`/*--------------------------------*- Choupo -*-----------------------*\\
  Component: Atomic nitrogen radical (Zeldovich chain carrier for thermal NOx)
  Generated by bin/import_nasa.py from NASA-7 polynomial data
  (Burcat 2005 / JANAF).  No liquid phase at process conditions ---
  the entry is tagged \`role nonvolatile;\` so vapour-pressure routines
  never get called.  dHf_298 and s_298 from NASA-7 integration
  constants at T = 298.15 K.
\\*---------------------------------------------------------------------------*/

name           N;
formula        N;
CAS            17778-88-0;

MW             14.007;       // kg/kmol
role        nonvolatile;
tags           ( radical gasPhase combustion );

standardThermochemistry
{
    dHf_298    472677.3079;            // J/mol  -- ideal-gas reference
    s_298      153.3012;           // J/(mol·K)  -- third-law absolute
}

idealGasHeatCapacity
{
    model         polynomial;
    coefficients  (2.081025e+01   -1.107112e-04   1.354367e-07   -4.105201e-11);
    Trange        (250  3000);
}
`,ir=`/*--------------------------------*- Choupo -*-----------------------*\\
  Component: Nitrogen  (N2, CAS 7727-37-9)
  Element in its standard state -- dHf_298 = 0; s_298 is the only
  thermodynamic anchor.  Carries over as the (nearly) inert diluent in
  air-fed combustion.
  Sources: constants (Tc, Pc, omega, MW, Tb) cross-checked against the
  CoolProp 7.2.0 reference equation of state (MIT-licensed); ideal-gas
  formation properties (dHf_298, s_298) from NASA TM-4513 (McBride-
  Gordon-Reno 1993).
\\*---------------------------------------------------------------------------*/

name        N2;
formula     N2;
noncondensable true;     // permanent carrier gas (psychrometric carrier)
CAS         7727-37-9;

MW          28.013;       // kg/kmol
Tc          126.20;       // K
Pc          33.98;        // bar
omega       0.039;        // [-]
Tb          77.35;        // K
HvapTb      5577;         // J/mol
Vliq        3.46e-5;      // m^3/mol  (34.6 cm^3/mol at Tb)
diffusionVolume  18.5;          // Fuller diffusion volume [-]

standardThermochemistry
{
    dHf_298   0.0;                // J/mol  -- element in standard state
    s_298     191.610;            // J/(mol·K)  -- third-law absolute
}

vaporPressure
{
    model         Antoine;
    coefficients  (3.7362   264.651   -6.788);
    Trange        (50  126);
}

idealGasHeatCapacity
{
    model         polynomial;
    // Cp [J/(mol·K)] = a0 + a1*T + a2*T^2 + a3*T^3  (ideal-gas Cp
    // polynomial -- individual literature value, primary re-citation pending)
    coefficients  (31.15   -1.357e-2   2.680e-5   -1.168e-8);
    Trange        (250  1500);
}

// Liquid Cp -- physically extrapolated stub (N2 is gas at any normal
// process temperature).  Required so the engine's enthalpy iteration
// can read a Cp_L for every component in a stream, even when x_N2 = 0
// in that stream (the multiplication still zeroes the contribution but
// the lookup must succeed).  Value ~ Cp_L at boiling point 77 K.
liquidHeatCapacity
{
    model         polynomial;
    coefficients  (56.0);          // J/(mol·K), constant approximation
}

// Friendly-name aliases (resolved to this file via the generated ALIASES index).
aliases ( nitrogen );

// ---- Aqueous-speciation FACT (substance-level, classifier-read) ----
// dissolved nitrogen: neutral master, no aqueous equilibria.
aqueousSpeciation  none;
`,rr=`/*--------------------------------*- Choupo -*-----------------------*\\
  Component: Diazene/diimide (NH2 recombination; DeNOx ladder)
  Generated by bin/import_nasa.py from NASA-7 polynomial data
  (BURCAT.THR).  No liquid phase at process conditions ---
  the entry is tagged \`role nonvolatile;\` so vapour-pressure routines
  never get called.  dHf_298 and s_298 from NASA-7 integration
  constants at T = 298.15 K.
\\*---------------------------------------------------------------------------*/

name           N2H2;
formula        N2H2;
CAS            n/a;        // radical registry number: pending curation

MW             30.03;       // kg/kmol
role        nonvolatile;
tags           ( radical gasPhase combustion nox );

standardThermochemistry
{
    dHf_298    300936.2849;            // J/mol  -- ideal-gas reference
    s_298      218.1537;           // J/(mol·K)  -- third-law absolute
}

idealGasHeatCapacity
{
    model         polynomial;
    coefficients  (2.188419e+01   4.722296e-02   -3.956598e-06   -4.199167e-09);
    Trange        (250  3000);
}
`,sr=`/*--------------------------------*- Choupo -*-----------------------*\\
  Component: Hydrazyl radical (hydrazine decomposition chain)
  Generated by bin/import_nasa.py from NASA-7 polynomial data
  (BURCAT.THR).  No liquid phase at process conditions ---
  the entry is tagged \`role nonvolatile;\` so vapour-pressure routines
  never get called.  dHf_298 and s_298 from NASA-7 integration
  constants at T = 298.15 K.
\\*---------------------------------------------------------------------------*/

name           N2H3;
formula        N2H3;
CAS            n/a;        // radical registry number: pending curation

MW             31.038;       // kg/kmol
role        nonvolatile;
tags           ( radical gasPhase combustion nox );

standardThermochemistry
{
    dHf_298    224854.7188;            // J/mol  -- ideal-gas reference
    s_298      236.7893;           // J/(mol·K)  -- third-law absolute
}

idealGasHeatCapacity
{
    model         polynomial;
    coefficients  (1.633106e+01   1.028363e-01   -5.416946e-05   1.175937e-08);
    Trange        (250  3000);
}
`,lr=`/*--------------------------------*- Choupo -*-----------------------*\\
  Component: Hydrazine, GAS phase (monopropellant; Burcat gas card -- the file's first N2H4 cards are the liquid)
  Generated by bin/import_nasa.py from NASA-7 polynomial data
  (Cards hand-selected from BURCAT.THR (Goos, Burcat & Ruscic, ReSpecTh).  No liquid phase at process conditions ---
  the entry is tagged \`role nonvolatile;\` so vapour-pressure routines
  never get called.  dHf_298 and s_298 from NASA-7 integration
  constants at T = 298.15 K.
\\*---------------------------------------------------------------------------*/

name           N2H4;
formula        N2H4;
CAS            302-01-2;

MW             32.046;       // kg/kmol
role        nonvolatile;
tags           ( gasPhase combustion nox );

standardThermochemistry
{
    dHf_298    95179.4577;            // J/mol  -- ideal-gas reference
    s_298      238.4643;           // J/(mol·K)  -- third-law absolute
}

idealGasHeatCapacity
{
    model         polynomial;
    coefficients  (1.213981e+01   1.453087e-01   -8.486214e-05   1.990881e-08);
    Trange        (250  3000);
}

cosmo
{
    VT2005
    {
        model       COSMOSAC;
        variant     "2002";
        source      "VT-2005 sigma-profile database (Mullins et al., Ind. Eng. Chem. Res. 45 (2006) 4389; DFT-COSMO), file VT2005-0892-PROF.txt bundled in usnistgov/COSMOSAC; CAS 302-01-2";
        licence     externalRestricted;   // VT-2005: redistribution NOT confirmed -- values NOT shipped
        installed   false;                 // install your own copy: bin/choupo-import-cosmo (-> data/local/cosmo/VT2005/)
    }
}
`,dr=`/*--------------------------------*- Choupo -*-----------------------*\\
  Component: Nitrous oxide  (N2O, CAS 10024-97-2)

  Greenhouse gas; emitted from agriculture (denitrification) and from
  adipic-acid plants.  Also the "laughing gas" anaesthetic.  Forms
  thermally from N2 + O2 + O3 at intermediate temperatures.  Useful
  in flue-gas equilibrium screening.
  Sources: constants (Tc/Pc/omega/MW/Tb) cross-checked vs CoolProp 7.2.0
  reference EOS; standardThermochemistry cross-checked vs NASA TM-4513
  (McBride-Gordon-Reno 1993); idealGasHeatCapacity -- individual
  literature value, primary re-citation pending (IST review).
\\*---------------------------------------------------------------------------*/

name        N2O;
formula     N2O;
CAS         10024-97-2;

MW          44.013;            // kg/kmol
Tc          309.57;             // K
Pc          72.55;              // bar
omega       0.142;              // [-]
Tb          184.67;             // K
HvapTb      16550;              // J/mol
Vliq        3.62e-5;            // m^3/mol

standardThermochemistry
{
    dHf_298    82050.0;         // J/mol  -- ideal-gas reference
    s_298      219.96;          // J/(mol·K)
}

vaporPressure
{
    model         Antoine;
    coefficients  (3.92962   657.130   -23.350);
    Trange        (168  310);
}

idealGasHeatCapacity
{
    model         polynomial;
    coefficients  (21.62   7.281e-2   -5.778e-5   1.830e-8);
    Trange        (250  1500);
}
`,cr=`/*--------------------------------*- Choupo -*-----------------------*\\
  Component: Isocyanato radical (fuel-N to NO conversion)
  Generated by bin/import_nasa.py from NASA-7 polynomial data
  (GRI-Mech Version 3.0 Thermodynamics released 7/30/99).  No liquid phase at process conditions ---
  the entry is tagged \`role nonvolatile;\` so vapour-pressure routines
  never get called.  dHf_298 and s_298 from NASA-7 integration
  constants at T = 298.15 K.
\\*---------------------------------------------------------------------------*/

name           NCO;
formula        NCO;
CAS            n/a;        // radical registry number: pending curation

MW             42.017;       // kg/kmol
role        nonvolatile;
tags           ( radical gasPhase combustion );

standardThermochemistry
{
    dHf_298    131796.3212;            // J/mol  -- ideal-gas reference
    s_298      232.3848;           // J/(mol·K)  -- third-law absolute
}

idealGasHeatCapacity
{
    model         polynomial;
    coefficients  (2.499436e+01   6.210755e-02   -4.130526e-05   9.984720e-09);
    Trange        (250  3000);
}
`,pr=`/*--------------------------------*- Choupo -*-----------------------*\\
  Component: Imidogen radical (chain carrier in NH3 oxidation; intermediate in thermal-NOx chemistry)
  Generated by bin/import_nasa.py from NASA-7 polynomial data
  (Burcat 2005 / JANAF).  No liquid phase at process conditions ---
  the entry is tagged \`role nonvolatile;\` so vapour-pressure routines
  never get called.  dHf_298 and s_298 from NASA-7 integration
  constants at T = 298.15 K.
\\*---------------------------------------------------------------------------*/

name           NH;
formula        NH;
CAS            13774-92-0;

MW             15.0146;       // kg/kmol
role        nonvolatile;
tags           ( radical gasPhase combustion );

standardThermochemistry
{
    dHf_298    356916.2396;            // J/mol  -- ideal-gas reference
    s_298      181.2234;           // J/(mol·K)  -- third-law absolute
}

idealGasHeatCapacity
{
    model         polynomial;
    coefficients  (3.046565e+01   -7.456692e-03   1.192632e-05   -3.670636e-09);
    Trange        (250  3000);
}
`,mr=`/*--------------------------------*- Choupo -*-----------------------*\\
  Component: Amidogen radical (intermediate in fuel-NOx and SCR pathways)
  Generated by bin/import_nasa.py from NASA-7 polynomial data
  (Burcat 2005 / JANAF).  No liquid phase at process conditions ---
  the entry is tagged \`role nonvolatile;\` so vapour-pressure routines
  never get called.  dHf_298 and s_298 from NASA-7 integration
  constants at T = 298.15 K.
\\*---------------------------------------------------------------------------*/

name           NH2;
formula        NH2;
CAS            13770-40-6;

MW             16.0226;       // kg/kmol
role        nonvolatile;
tags           ( radical gasPhase combustion );

standardThermochemistry
{
    dHf_298    192049.0965;            // J/mol  -- ideal-gas reference
    s_298      194.9947;           // J/(mol·K)  -- third-law absolute
}

idealGasHeatCapacity
{
    model         polynomial;
    coefficients  (3.212948e+01   1.216084e-03   1.661541e-05   -6.493001e-09);
    Trange        (250  3000);
}
`,ur=`/*--------------------------------*- Choupo -*-----------------------*\\
  Component: Ammonia  (NH3, CAS 7664-41-7)

  The Haber-Bosch product (N2 + 3 H2 -> 2 NH3); a Choupo GibbsReactor
  with NH3 + N2 + H2 at 400-500 K, 200 bar is the textbook synthesis
  case.  Also relevant for thermal-NOx (Zeldovich) and SCR flue-gas
  chemistries, and as a refrigerant (R-717).

  CANONICAL FILE.  2026-06-06: the duplicate-CAS twin \`ammonia.dat\`
  (same CAS 7664-41-7, divergent constants) was merged into this file
  and removed -- one molecule, one file, one set of numbers.
  Sources: constants (Tc/Pc/omega/MW/Tb) cross-checked vs CoolProp 7.2.0
           reference EOS; standardThermochemistry cross-checked vs NASA TM-4513
           (McBride-Gordon-Reno 1993); vaporPressure -- individual
           literature value, primary re-citation pending (IST review);
           liquidViscosity -- Engineering Toolbox saturated-liquid table.
\\*---------------------------------------------------------------------------*/

name        NH3;
formula     NH3;
CAS         7664-41-7;

MW          17.030;            // kg/kmol
Tc          405.40;             // K
Pc          113.59;             // bar
omega       0.252;              // [-]
Tb          239.82;             // K
HvapTb      23330;              // J/mol
Vliq        2.50e-5;            // m^3/mol
role        solute;        // soluble gas: Henry K = H(T)/P (solvent water)

standardThermochemistry
{
    dHf_298    -45940.0;        // J/mol  -- ideal-gas reference
    s_298      192.77;          // J/(mol·K)
}

vaporPressure
{
    model         Antoine;
    // log10(Psat[bar]) = A - B/(T[K]+C).  Coefficients valid ~195-371 K
    // (Psat(Tb=239.82 K) = 1.03 bar; Psat(300 K) = 10.5 bar -- both check).
    coefficients  (4.86886   1113.928   -10.409);
    Trange        (195  371);
}

idealGasHeatCapacity
{
    model         polynomial;
    coefficients  (27.31   0.02383   1.707e-5   -1.185e-8);
    Trange        (250  1500);
}

liquidHeatCapacity
{
    model         polynomial;
    // approximate constant ~80 J/(mol·K) for liquid NH3 (Cp ~ 4.7 J/g·K x MW);
    // merged from the former ammonia.dat twin.
    coefficients  (80.0);
    Trange        (200  350);
}

// Liquid transport.  liquidViscosity: ln(mu/Pa.s) = A + B/T (Andrade).
// Andrade A,B = least-squares fit to the Engineering Toolbox saturated-liquid
// ammonia table:  mu = 0.306 / 0.239 / 0.186 mPa.s  @ 223 / 273 / 323 K
// (AAD ~2% over 223-323 K).  Cross-check: mu(239.85 K, b.p.) = 0.277 mPa.s
// (literature scatter 0.26-0.28; a calorimetric/JPCRD viscosity ref would
// be needed for tighter work).
liquidViscosity
{
    andrade { A -9.665; B 353.6; }
}

provenance
{
    vaporPressure  "individual literature value -- primary re-citation pending (IST review)";
    constants      "cross-checked vs CoolProp 7.2.0 reference EOS";
    standardThermochemistry "NASA TM-4513 (McBride-Gordon-Reno 1993), ideal-gas, 298 K";
    liquidViscosity
    {
        origin       regressed;
        method       "Andrade least-squares fit to Engineering Toolbox saturated-liquid mu(T) (3 pts, 223-323 K)";
        validity     (223 323);
        uncertainty  "~2% AAD vs the ET table";
    }
}

cosmo
{
    VT2005
    {
        model       COSMOSAC;
        variant     "2002";
        source      "VT-2005 sigma-profile database (Mullins et al., Ind. Eng. Chem. Res. 45 (2006) 4389; DFT-COSMO), file VT2005-1070-PROF.txt bundled in usnistgov/COSMOSAC; CAS 7664-41-7";
        licence     externalRestricted;   // VT-2005: redistribution NOT confirmed -- values NOT shipped
        installed   false;                 // install your own copy: bin/choupo-import-cosmo (-> data/local/cosmo/VT2005/)
    }
}

// ---- Aqueous-speciation FACTS (substance-level, classifier-read) ----
// The canonical set of aqueous speciation equilibria this component
// participates in (NH3 + H2O = NH4+ + OH-); vapour-phase reactions are
// NOT part of this fact.  The typed component->species bridge delivers
// the family total in the PHREEQC master convention, NH3 = NH4+ - H+.
aqueousSpeciation  ammonia;
aqueousMapping ( { species NH4; nu 1; } { species H; nu -1; } );
`,hr=`/*--------------------------------*- Choupo -*-----------------------*\\
  Component: Ammonium chloride (NH4Cl), SAL AMMONIAC.  CAS 12125-02-9.

  A NON-VOLATILE crystalline salt at ambient conditions: never enters the
  vapour by the VLE machinery (K = 0).  Solvay-process by-product, ammonia
  recovery and double-decomposition crystallisation exercises.  Carries the
  solid-phase formation datum and a real solid heat capacity.

  NOTE: NH4Cl SUBLIMES / dissociates to NH3 + HCl above ~340 C; that is a
  reaction, not a phase equilibrium, and is left to a reactor block.  The
  nonvolatile flag is correct for the condensed-phase regime of these cases.

  PRIMARY: Wagman et al., NBS Tables of Chemical Thermodynamic Properties,
  J. Phys. Chem. Ref. Data 11, Suppl. 2 (1982) -- PUBLIC DOMAIN.
\\*---------------------------------------------------------------------------*/

name        NH4Cl;
formula     NH4Cl;
CAS         12125-02-9;

MW          53.491;            // kg/kmol

role        nonvolatile;       // condensed-phase regime (K = 0); see header note

solid
{
    rho_p   1530.0;            // particle density [kg/m^3]
}

standardThermochemistry
{
    dHf_298   -314430;         // J/mol  [Wagman et al. NBS Tables 1982]
    s_298     94.56;           // J/(mol*K) [Wagman 1982]
    referenceState     pureSolid;
}

solidHeatCapacity
{
    model         polynomial;          // Cp = a0  [J/(mol*K)], constant
    coefficients  ( 84.1 );            // Cp(298) [Wagman et al. NBS Tables 1982]
    Trange        ( 298  450 );        // constant-Cp validity flag (near ambient)
}

provenance
{
    standardThermochemistry { origin literature; method "Wagman et al. NBS Tables 1982"; }
    solidHeatCapacity { origin literature; method "Wagman et al. NBS Tables 1982 (Cp298, carried constant)"; }
    rho_p { origin literature; method "NH4Cl crystal density ~1.53 g/cm3"; }
}

// Solid phase(s) of this component (roadmap Phase D fold-in):
solidPhases
{
    salammoniac
    {
        dissolutionReaction { masters ( { ion NH4; nu 1; } { ion Cl; nu 1; } ); }
        equilibrium { logK25 1.2364; dH 14800; source "logK25 CALIBRATED to the measured pure-NH4Cl solubility 7.35 mol/kg at 298.15 K (Farelo, Fernandes & Avelino, J. Chem. Eng. Data 50 (2005) 1470) via Pitzer-HMW gamma_pm=0.565 at saturation; dH=+14.8 kJ/mol dissolution enthalpy (NH4Cl.dat solid datum vs ions.dat hfAq)"; }
    }
}
`,Cr=`/*--------------------------------*- Choupo -*-----------------------*\\
  Component: NNH radical (the NNH thermal-NOx route, N2 + H)
  Generated by bin/import_nasa.py from NASA-7 polynomial data
  (GRI-Mech Version 3.0 Thermodynamics released 7/30/99).  No liquid phase at process conditions ---
  the entry is tagged \`role nonvolatile;\` so vapour-pressure routines
  never get called.  dHf_298 and s_298 from NASA-7 integration
  constants at T = 298.15 K.
\\*---------------------------------------------------------------------------*/

name           NNH;
formula        NNH;
CAS            n/a;        // radical registry number: pending curation

MW             29.022;       // kg/kmol
role        nonvolatile;
tags           ( radical gasPhase combustion );

standardThermochemistry
{
    dHf_298    249515.6024;            // J/mol  -- ideal-gas reference
    s_298      224.5041;           // J/(mol·K)  -- third-law absolute
}

idealGasHeatCapacity
{
    model         polynomial;
    coefficients  (2.588183e+01   3.230527e-02   -1.097568e-05   7.006435e-10);
    Trange        (250  3000);
}
`,fr=`/*--------------------------------*- Choupo -*-----------------------*\\
  Component: Nitric oxide  (NO, CAS 10102-43-9)
  The principal thermal-NOx pollutant from high-temperature combustion.
  Formed via the Zeldovich mechanism (N2 + O <-> NO + N, then
  N + O2 <-> NO + O), reaching equilibrium populations ~ 100-1000 ppm
  at typical adiabatic flame temperatures.
  Sources: standardThermochemistry cross-checked vs NASA TM-4513
  (McBride-Gordon-Reno 1993); constants and idealGasHeatCapacity --
  individual literature values, primary re-citation pending (IST review).
\\*---------------------------------------------------------------------------*/

name        NO;
formula     NO;
CAS         10102-43-9;

MW          30.006;       // kg/kmol
Tc          180.00;       // K
Pc          64.85;        // bar
omega       0.583;        // [-]   (NO is polar -- high omega)
Tb          121.40;       // K
HvapTb      13830;        // J/mol
Vliq        2.30e-5;      // m^3/mol  (23 cm^3/mol at Tb)

standardThermochemistry
{
    dHf_298   +90250.0;           // J/mol  -- positive: endothermic formation
    s_298     210.760;            // J/(mol·K)
}

vaporPressure
{
    model         Antoine;
    coefficients  (4.0   400.0   -30.0);
    Trange        (90  180);
}

idealGasHeatCapacity
{
    model         polynomial;
    // Cp [J/(mol·K)] = a0 + a1*T + a2*T^2 + a3*T^3
    coefficients  (29.35   -9.378e-4   9.747e-6   -4.187e-9);
    Trange        (250  1500);
}
`,gr=`/*--------------------------------*- Choupo -*-----------------------*\\
  Component: Nitrogen dioxide  (NO2, CAS 10102-44-0)

  Combustion-NOx tail end (NO is the kinetic product of the Zeldovich
  chain; NO2 forms downstream by NO + O / NO + HO2).  The
  NO + 1/2 O2 <-> NO2 equilibrium peaks at low T --- a GibbsReactor
  cooled from 1500 K to 800 K traces the NO -> NO2 conversion neatly.
  Sources: ideal-gas formation enthalpy/entropy cross-checked against the
  NASA polynomial database (NASA TM-4513, public domain).  Critical
  constants are individual literature values -- primary re-citation
  pending (IST review).
\\*---------------------------------------------------------------------------*/

name        NO2;
formula     NO2;
CAS         10102-44-0;

MW          46.006;            // kg/kmol
Tc          431.00;             // K
Pc          101.00;             // bar
omega       0.834;              // [-]   (very polar; dimerizes to N2O4)
Tb          294.30;             // K
HvapTb      14730;              // J/mol
Vliq        3.79e-5;            // m^3/mol

standardThermochemistry
{
    dHf_298    33180.0;         // J/mol  -- ideal-gas reference
    s_298      240.06;          // J/(mol·K)
}

vaporPressure
{
    model         Antoine;
    coefficients  (4.04275   1099.500   -34.000);
    Trange        (250  294);
}

idealGasHeatCapacity
{
    model         polynomial;
    coefficients  (24.23   0.04836   -2.080e-5   -1.000e-9);
    Trange        (250  1500);
}
`,br=`/*--------------------------------*- Choupo -*-----------------------*\\
  Component: Nitrate radical (night-time NOx; N2O5 chemistry)
  Generated by bin/import_nasa.py from NASA-7 polynomial data
  (BURCAT.THR).  No liquid phase at process conditions ---
  the entry is tagged \`role nonvolatile;\` so vapour-pressure routines
  never get called.  dHf_298 and s_298 from NASA-7 integration
  constants at T = 298.15 K.
\\*---------------------------------------------------------------------------*/

name           NO3;
formula        NO3;
CAS            12033-49-7;

MW             62.004;       // kg/kmol
role        nonvolatile;
tags           ( radical gasPhase combustion nox );

standardThermochemistry
{
    dHf_298    74627.5747;            // J/mol  -- ideal-gas reference
    s_298      252.6216;           // J/(mol·K)  -- third-law absolute
}

idealGasHeatCapacity
{
    model         polynomial;
    coefficients  (9.808650e+00   1.610657e-01   -1.309750e-04   3.669168e-08);
    Trange        (250  3000);
}
`,yr=`/*--------------------------------*- Choupo -*-----------------------*\\
  Component: Sodium carbonate (Na2CO3), SODA ASH (anhydrous).  CAS 497-19-8.

  A NON-VOLATILE crystalline salt: never enters the vapour (K = 0).  Soda-ash
  causticising, water softening, glass-batch and CO2-capture (carbonate loop)
  exercises; the carbonate partner to NaHCO3.  Carries the solid-phase
  formation datum and a real solid heat capacity.

  PRIMARY: Wagman et al., NBS Tables of Chemical Thermodynamic Properties,
  J. Phys. Chem. Ref. Data 11, Suppl. 2 (1982) -- PUBLIC DOMAIN.
\\*---------------------------------------------------------------------------*/

name        Na2CO3;
formula     Na2CO3;
CAS         497-19-8;

MW          105.988;           // kg/kmol  (anhydrous)

role        nonvolatile;       // never goes to the vapour (K = 0)

solid
{
    rho_p   2540.0;            // anhydrous soda-ash particle density [kg/m^3]
}

standardThermochemistry
{
    dHf_298   -1130680;        // J/mol  [Wagman et al. NBS Tables 1982]
    s_298     134.98;          // J/(mol*K) [Wagman 1982]
    referenceState     pureSolid;
}

solidHeatCapacity
{
    model         polynomial;          // Cp = a0  [J/(mol*K)], constant
    coefficients  ( 112.3 );           // Cp(298) [Wagman et al. NBS Tables 1982]
    Trange        ( 298  600 );        // constant-Cp validity flag (near ambient)
}

provenance
{
    standardThermochemistry { origin literature; method "Wagman et al. NBS Tables 1982 (anhydrous)"; }
    solidHeatCapacity { origin literature; method "Wagman et al. NBS Tables 1982 (Cp298, carried constant)"; }
    rho_p { origin literature; method "anhydrous Na2CO3 density ~2.54 g/cm3"; }
}
`,Tr=`/*--------------------------------*- Choupo -*-----------------------*\\
  Component: Sodium sulfate (Na2SO4), THENARDITE (anhydrous).  CAS 7757-82-6.

  A NON-VOLATILE crystalline salt: never enters the vapour (K = 0).  Kraft
  make-up chemical, Glauber-salt crystallisation and sulfate-scaling
  exercises; the sodium-sulfate product of sulfuric-acid + caustic-soda
  neutralisation.  Carries the solid-phase formation datum and a real solid
  heat capacity.

  This entry is the anhydrous THENARDITE; the decahydrate Glauber's salt
  (Na2SO4.10H2O) is a distinct phase -- add it separately when needed.

  PRIMARY: Wagman et al., NBS Tables of Chemical Thermodynamic Properties,
  J. Phys. Chem. Ref. Data 11, Suppl. 2 (1982) -- PUBLIC DOMAIN.
\\*---------------------------------------------------------------------------*/

name        Na2SO4;
formula     Na2SO4;
CAS         7757-82-6;

MW          142.036;           // kg/kmol  (anhydrous)

role        nonvolatile;       // never goes to the vapour (K = 0)

solid
{
    rho_p   2680.0;            // thenardite particle density [kg/m^3]
}

standardThermochemistry
{
    dHf_298   -1387080;        // J/mol  [Wagman et al. NBS Tables 1982]
    s_298     149.58;          // J/(mol*K) [Wagman 1982]
    referenceState     pureSolid;
}

solidHeatCapacity
{
    model         polynomial;          // Cp = a0  [J/(mol*K)], constant
    coefficients  ( 128.2 );           // Cp(298) [Wagman et al. NBS Tables 1982]
    Trange        ( 298  600 );        // constant-Cp validity flag (near ambient)
}

provenance
{
    standardThermochemistry { origin literature; method "Wagman et al. NBS Tables 1982 (anhydrous thenardite)"; }
    solidHeatCapacity { origin literature; method "Wagman et al. NBS Tables 1982 (Cp298, carried constant)"; }
    rho_p { origin literature; method "thenardite mineralogical density ~2.68 g/cm3"; }
}

// Solid phase(s) of this component (roadmap Phase D fold-in):
solidPhases
{
    thenardite
    {
        dissolutionReaction { masters ( { ion Na; nu 2; } { ion SO4; nu 1; } ); }
        equilibrium { logK25 0.65; dH -23100; analytic ( 159.849 0.01699 -5000 -59.6073 ); source "USGS PHREEQC phreeqc.dat (public domain); lit: ref. 3"; }
    }
}
`,vr=`/*--------------------------------*- Choupo -*-----------------------*\\
  Substance: Sodium chloride (NaCl, CAS 7647-14-5)

  UNIFIED substance file (proposal docs/architecture/proposals/
  unified-mineral-record.md, ratified 2026-07-14).  ONE authoring file per
  chemical identity; the parser normalises it into coexisting TYPED views:
    - molecular constants (MW etc. -- the identity/critical/... plane);
    - the apparent component's \`dissociatesTo\` (apparent -> ions,
      a BALANCE map, general stoichiometry);
    - one or more \`solidPhases{}\` (here: halite), each a concrete solid phase
      with its own dissolution reaction, equilibrium (Ksp), calorimetric
      anchor and crystal properties.
  These coexist; the property package activates the applicable ones.
  Replaces the 3-way split mineralSolubility/halite + salts/halite + phases/solid/halite;
  each value keeps its per-datum provenance below.

  NaCl carries NO standardThermochemistry (arity-2): the salt solid enthalpy is
  ion-derived at build time (Hf_solid = Sum nu.hfAq - dH_soln), ions in species/aqueous/.
\\*---------------------------------------------------------------------------*/

name           NaCl;
formula        NaCl;
CAS            7647-14-5;

MW             58.44;          // g/mol
role        nonvolatile;
dissociation   2;              // van't Hoff factor for pi = nu R T c

// APPARENT COMPONENT view -- balance/representation map (apparent -> ions).
// General stoichiometry; the 1-cation-1-anion limit is the single-salt ADAPTER's.
// Distinct from solidPhase.dissolutionReaction (a thermodynamic reaction).
dissociatesTo  { Na 1; Cl 1; }   // ion stoichiometry (formula-like identity)

// SOLID PHASE view(s) -- 1..N concrete phases.  NaCl has one: halite.
solidPhases
{
    halite
    {
        // (1) thermodynamic dissolution reaction, in Choupo master ions
        dissolutionReaction { masters ( { ion Na; nu 1; } { ion Cl; nu 1; } ); }

        // (2) EQUILIBRIUM -- mass-action Ksp (van't Hoff MODEL param), NOT calorimetric.
        //     May COEXIST with a solubilityCurve{}; the active model picks one.
        equilibrium
        {
            logK25 1.57;
            dH     3841;        // J/mol; MODEL van't Hoff slope paired with logK25
            source "USGS PHREEQC phreeqc.dat (public domain; Halite delta_h 0.918 kcal/mol = 3841 J/mol)";
        }

        // (3) CALORIMETRIC -- measured property, the crystalliser reads for the heat duty.
        calorimetric
        {
            solubility
            {
                value 6.144;
                unit  mol/kgWater;
                T     298.15;
                origin "data/standards/components/NaCl.dat electrolyte block";
                source "Pinho & Macedo, J. Chem. Eng. Data 50 (2005) 29 (aqueous, 25 C; primary)";
            }
            dissolutionEnthalpy
            {
                value 3880;
                unit  J/mol;
                basis "NaCl(s) -> Na+(aq) + Cl-(aq)";
                origin "data/standards/components/NaCl.dat electrolyte block";
            }
        }

        // (4) CRYSTAL -- particle density + volume shape factor for the PBE crystalliser.
        //     NaCl grows as CUBES.  rho_p/k_v flat (scalar readers); provenance below.
        crystal
        {
            rho_p 2165.0;       // kg/m3
            k_v   1.0;          // volume shape factor
            habit cube;
            provenance
            {
                rho_p
                {
                    basis  "halite crystallographic density 2.165 g/cm3 (NaCl rock-salt unit cell, a = 5.640 A)";
                    source "public domain crystallographic density; primary re-citation pending (IST review)";
                }
                k_v { basis "cube, V = k_v L^3 (no external source needed)"; }
            }
        }
    }
}
`,Pr=`/*--------------------------------*- Choupo -*-----------------------*\\
  Component: Sodium bicarbonate (NaHCO3), BAKING SODA.  CAS 144-55-8.

  A NON-VOLATILE crystalline salt: never enters the vapour (K = 0).
  Bicarbonate buffering, dry-sorbent flue-gas treatment and thermal-
  decomposition (2 NaHCO3 -> Na2CO3 + H2O + CO2) exercises; the bicarbonate
  partner to Na2CO3.  Carries the solid-phase formation datum and a real
  solid heat capacity.

  PRIMARY: Wagman et al., NBS Tables of Chemical Thermodynamic Properties,
  J. Phys. Chem. Ref. Data 11, Suppl. 2 (1982) -- PUBLIC DOMAIN.
\\*---------------------------------------------------------------------------*/

name        NaHCO3;
formula     NaHCO3;
CAS         144-55-8;

MW          84.007;            // kg/kmol

role        nonvolatile;       // never goes to the vapour (K = 0)

solid
{
    rho_p   2200.0;            // particle density [kg/m^3]
}

standardThermochemistry
{
    dHf_298   -950810;         // J/mol  [Wagman et al. NBS Tables 1982]
    s_298     101.7;           // J/(mol*K) [Wagman 1982]
    referenceState     pureSolid;
}

solidHeatCapacity
{
    model         polynomial;          // Cp = a0  [J/(mol*K)], constant
    coefficients  ( 87.61 );           // Cp(298) [Wagman et al. NBS Tables 1982]
    Trange        ( 298  400 );        // constant-Cp validity flag (decomposes >~370 K)
}

provenance
{
    standardThermochemistry { origin literature; method "Wagman et al. NBS Tables 1982"; }
    solidHeatCapacity { origin literature; method "Wagman et al. NBS Tables 1982 (Cp298, carried constant)"; }
    rho_p { origin literature; method "NaHCO3 crystal density ~2.20 g/cm3"; }
}

// Solid phase(s) of this component (roadmap Phase D fold-in):
solidPhases
{
    nahcolite
    {
        dissolutionReaction { masters ( { ion HCO3; nu 1; } { ion Na; nu 1; } ); }
        equilibrium { logK25 -0.413; dH -14899.2; source "USGS PHREEQC pitzer.dat/phreeqc.dat (public domain); reaction re-expressed to Choupo master basis from Nahcolite"; }
    }
}
`,Sr=`/*--------------------------------*- Choupo -*--------------------------------*\\
  Component: Sodium hydroxide (NaOH, CAS 1310-73-2)

  THE FIRST reference-state-layout native (forum 2026-06-11): data grouped by
  DECLARED REFERENCE STATE -- read docs/thermo-hierarchy.md plane A.  NaOH is
  a strong 1:1 electrolyte: nonvolatile, fully dissociated to Na+ + OH-, the
  acceptance-case solute (NaOH-water crystallisation + ethanol antisolvent).

  CURATION STATUS: identity + dissolution enthalpy are NBS-anchored; the
  solubility anchor and solid density carry a VERIFY flag -- check the primary
  before promoting results that hinge on them.  At 25 C the STABLE solid in
  contact with saturated solution is the MONOHYDRATE NaOH.H2O (anhydrous NaOH
  is the stable form only above ~65 C) -- the \`forms\` slot below is the
  hydrate's home when slice 2 of the electrolyte-enthalpy build lands.
\\*-----------------------------------------------------------------------------*/

name        NaOH;
formula     NaOH;
CAS         1310-73-2;
MW          39.997;             // g/mol


role        nonvolatile;                // never in the vapour (K = 0)
dissociation   2;                   // van't Hoff factor (1:1 strong electrolyte)
dissociatesTo  { Na 1; OH 1; }   // ion stoichiometry (formula-like identity; the package activates it)


// ---- solid anhydrous NaOH(s) -- the solid-tabulated formation datum ----
Hf_298     -425600;             // J/mol   NaOH(s), Wagman et al. (1982)
S_298       64.46;              // J/(mol K), third-law, Wagman et al. (1982)
rho_p       2130;               // kg/m3 crystal density -- VERIFY (public compound summary 2.13 g/cm3)
// k_v      0.5235987756;       // sphere default; set when PSD shape data lands

// forms ( ... );               // SLOT (electrolyte-enthalpy slice 2): the
//   MONOHYDRATE NaOH.H2O is a DISTINCT solid phase with its own Hf_298 --
//   it, not anhydrous NaOH, crystallises below ~65 C.  Source its
//   formation data (NBS) before the crystalliser claims hydrate yields.


// aqueousInfDil                    // SLOT (electrolyte-enthalpy slice 2): the
// {                                //   asymmetric infinite-dilution ion tier
//     Hf_298   ?;                  //   lives per-ION in species/aqueous/
//     Gf_298   ?;                  //   (Na+ ~ -240.12 kJ/mol, OH- ~ -229.99
//     Cp_298   ?;                  //   kJ/mol, Wagman 1982, H+(aq)=0 conv.) --
// }                                //   filled by the gated build, cited per value.

// Dissolved-only solute: liquid-phase transport is solvent-dominated;
// no gas-phase correlations apply.  (Empty by design, not by neglect.)


// Solid phase of NaOH (roadmap Phase D fold-in from salts/ + phases/solid/):
solidPhases
{
    sodiumHydroxide
    {
        calorimetric
        {
            solubility          { value 28.5;   unit mol/kgWater; T 298.15; }
            dissolutionEnthalpy { value -44510; unit J/mol; basis "NaOH(s) -> Na+(aq) + OH-(aq) (exothermic)"; }
        }
        crystal { rho_p 2130.0; k_v 0.5235987756; habit sphere; }
    }
}
`,Or=`/*--------------------------------*- Choupo -*-----------------------*\\
  Component: Atomic oxygen radical (combustion chain carrier; reaches ~5% in stoichiometric flames near 2400 K)
  Generated by bin/import_nasa.py from NASA-7 polynomial data
  (Burcat 2005 / JANAF).  No liquid phase at process conditions ---
  the entry is tagged \`role nonvolatile;\` so vapour-pressure routines
  never get called.  dHf_298 and s_298 from NASA-7 integration
  constants at T = 298.15 K.
\\*---------------------------------------------------------------------------*/

name           O;
formula        O;
CAS            17778-80-2;

MW             15.999;       // kg/kmol
role        nonvolatile;
tags           ( radical gasPhase combustion );

standardThermochemistry
{
    dHf_298    249173.6428;            // J/mol  -- ideal-gas reference
    s_298      161.0595;           // J/(mol·K)  -- third-law absolute
}

idealGasHeatCapacity
{
    model         polynomial;
    coefficients  (2.349486e+01   -7.234569e-03   6.712592e-06   -2.062152e-09);
    Trange        (250  3000);
}
`,Ar=`/*--------------------------------*- Choupo -*-----------------------*\\
  Component: Oxygen  (O2, CAS 7782-44-7)
  Element in its standard state -- dHf_298 = 0 by definition; the
  third-law absolute entropy is the only thermodynamic anchor.
  Permanent gas at all process temperatures (Tc = 154.58 K).
  Sources: constants (Tc/Pc/omega/MW/Tb) cross-checked vs CoolProp 7.2.0
  reference EOS; standardThermochemistry cross-checked vs NASA TM-4513
  (McBride-Gordon-Reno 1993); idealGasHeatCapacity -- individual
  literature value, primary re-citation pending (IST review).
\\*---------------------------------------------------------------------------*/

name        O2;
formula     O2;
noncondensable true;     // permanent carrier gas (psychrometric carrier)
CAS         7782-44-7;

MW          31.999;       // kg/kmol
Tc          154.58;       // K
Pc          50.43;        // bar
omega       0.022;        // [-]
Tb          90.17;        // K
HvapTb      6820;         // J/mol
Vliq        2.80e-5;      // m^3/mol  (28.0 cm^3/mol at Tb)
diffusionVolume  16.3;          // Fuller diffusion volume [-]

standardThermochemistry
{
    dHf_298   0.0;                // J/mol  -- element in standard state
    s_298     205.150;            // J/(mol·K)  -- third-law absolute
}

vaporPressure
{
    model         Antoine;
    coefficients  (3.9523   340.024   -4.144);
    Trange        (54  154);
}

idealGasHeatCapacity
{
    model         polynomial;
    // Cp [J/(mol·K)] = a0 + a1*T + a2*T^2 + a3*T^3
    coefficients  (28.11   -3.680e-6   1.746e-5   -1.065e-8);
    Trange        (250  1500);
}

// Friendly-name aliases (resolved to this file via the generated ALIASES index).
aliases ( oxygen );

// ---- Aqueous-speciation FACT (substance-level, classifier-read) ----
// dissolved oxygen: neutral master, no aqueous equilibria
// in the standard network.
aqueousSpeciation  none;
`,Hr=`/*--------------------------------*- Choupo -*-----------------------*\\
  Component: Ozone (atmospheric oxidant; also used as a strong industrial oxidiser in cold-flame chemistry)
  Generated by bin/import_nasa.py from NASA-7 polynomial data
  (Burcat 2005 / JANAF; NASA TM-4513, McBride-Gordon-Reno 1993).
  dHf_298 and s_298 cross-checked vs NASA TM-4513 at T = 298.15 K.
  Critical properties: individual literature values -- primary
  re-citation pending (IST review).
\\*---------------------------------------------------------------------------*/

name        O3;
formula     O3;
CAS         10028-15-6;

MW          47.9982;       // kg/kmol
tags           ( radical gasPhase combustion );
Tc          261.1;         // K
Pc          55.73;         // bar
omega       0.227;      // [-]
Tb          161.5;         // K
HvapTb      12000;      // J/mol
Vliq        3.6e-05;       // m^3/mol

standardThermochemistry
{
    dHf_298   141795.7103;            // J/mol  -- ideal-gas reference
    s_298     239.0094;           // J/(mol·K)  -- third-law absolute
}

vaporPressure
{
    model         Antoine;
    coefficients  (3.7125   466.62   -9.45);
    Trange        (80  161);
}

idealGasHeatCapacity
{
    model         polynomial;
    coefficients  (1.766102e+01   9.422683e-02   -8.017863e-05   2.365359e-08);
    Trange        (250  1500);
}
`,_r=`/*--------------------------------*- Choupo -*-----------------------*\\
  Component: Hydroxyl radical  (OH, CAS 3352-57-6)

  The dominant chain-carrier in any high-temperature combustion;
  abundance peaks just behind the flame front (2000-2400 K).
  Including OH in a GibbsReactor that contains H2 / H2O / O2 lifts
  the equilibrium prediction of adiabatic flame temperatures by
  50-150 K because the equilibrium pool steals enthalpy from the
  products.  Pedagogically: with OH the textbook "stoichiometric
  CH4-air flame at 2225 K" is recovered; without it the model
  predicts ~2330 K, the well-known too-high closed-system answer.

  No vapour pressure: OH is a transient gas-phase species and never
  appears as a condensed liquid.  We tag it \`role nonvolatile;\` to
  tell the rest of the package not to call Antoine on it (Antoine
  is left empty for schema compliance and never read).
  Sources: JANAF / NASA TM-4513 (McBride-Gordon-Reno 1993);
  cross-checked with Burcat's thermodynamic database (TAE Report 867)
  and vs cantera's NASA-polynomial standardThermochemistry at 298.15 K.
\\*---------------------------------------------------------------------------*/

name           OH;
formula        OH;
CAS            3352-57-6;

MW             17.008;       // kg/kmol
role        nonvolatile;         // never a liquid in any process context

standardThermochemistry
{
    dHf_298    39000.0;      // J/mol  -- ideal-gas reference
    s_298      183.74;       // J/(mol·K)
}

idealGasHeatCapacity
{
    model         polynomial;
    // Cp fitted from JANAF tables 300-3000 K (RMS error < 0.4 J/mol/K)
    coefficients  (30.05   -1.124e-2   1.793e-5   -7.000e-9);
    Trange        (250  3000);
}
`,Er=`/*--------------------------------*- Choupo -*-----------------------*\\
  Component: OrthoDeuterium  (N/A, CAS 7782-39-0o)
  PROPOSAL TIER -- UNVERIFIED.  Imported from CoolProp 7.2.0 (MIT);
  pure-fluid properties from the published reference EOS below.
  Reference EOS: Richardson-JPCRD-2013
  NOTE: formation properties (dHf, s_298) and group decompositions
  are NOT provided by CoolProp -> omitted here (a gap, not fabricated).
\\*---------------------------------------------------------------------------*/

name        OrthoDeuterium;

//  Review state, MACHINE-READABLE (AP2, 2026-08-05).  This used to
//  live only in the banner above, which the parser discards -- so the
//  engine could not announce it and a run said nothing.
reviewStatus   interim;
reviewReason   importedFromCoolProp720_notCheckedAgainstPrimaries;
formula     N/A;
CAS         7782-39-0o;

MW          4.0282;        // kg/kmol  [CoolProp]
Tc          38.3400;        // K        [CoolProp EOS]
Pc          16.79550;        // bar      [CoolProp EOS]
omega       -0.13629;        // [-]      [CoolProp EOS]
Tb          23.6613;        // K  normal boiling [CoolProp]
HvapTb      1225.5;        // J/mol  at Tb     [CoolProp]

vaporPressure
{
    model         Antoine;
    // log10(Psat [bar]) = A - B / (T[K] + C)   -- fitted to CoolProp EOS
    coefficients  (3.49557   96.8631   4.06705);
    Trange        (19.22  37.57);
}

idealGasHeatCapacity
{
    model         polynomial;
    // Cp [J/(mol.K)] = a0 + a1 T + a2 T^2 + a3 T^3   -- fitted to CoolProp cp0
    coefficients  (30.1937  -0.00656189  1.15056e-05  -3.49042e-09);
    Trange        (200  1000);
}

liquidHeatCapacity
{
    model         polynomial;
    // Cp_liq [J/(mol.K)]   -- fitted to CoolProp saturated-liquid cp
    coefficients  (-10.4615  3.84138  -0.168247  0.00305982);
    Trange        (24  24);
}

triplePoint
{
    T   18.7240;
    P   17189.1020;
}

provenance
{
    constants      "CoolProp 7.2.0 -- Richardson-JPCRD-2013";
    vaporPressure  "Antoine fitted to CoolProp EOS saturation, AAD 0.63%";
    idealGasCp     "polynomial fitted to CoolProp cp0, maxerr 0.20%";
    liquidCp       "polynomial fitted to CoolProp sat-liquid cp, maxerr 0.00%";
    triplePoint    "CoolProp reference EOS triple-point T,P";
}
`,wr=`/*--------------------------------*- Choupo -*-----------------------*\\
  Component: OrthoHydrogen  (N/A, CAS 1333-74-0o)
  PROPOSAL TIER -- UNVERIFIED.  Imported from CoolProp 7.2.0 (MIT);
  pure-fluid properties from the published reference EOS below.
  Reference EOS: Leachman-JPCRD-2009
  NOTE: formation properties (dHf, s_298) and group decompositions
  are NOT provided by CoolProp -> omitted here (a gap, not fabricated).
\\*---------------------------------------------------------------------------*/

name        OrthoHydrogen;

//  Review state, MACHINE-READABLE (AP2, 2026-08-05).  This used to
//  live only in the banner above, which the parser discards -- so the
//  engine could not announce it and a run said nothing.
reviewStatus   interim;
reviewReason   importedFromCoolProp720_notCheckedAgainstPrimaries;
formula     N/A;
CAS         1333-74-0o;

MW          2.0159;        // kg/kmol  [CoolProp]
Tc          33.2198;        // K        [CoolProp EOS]
Pc          13.09792;        // bar      [CoolProp EOS]
omega       -0.21859;        // [-]      [CoolProp EOS]
Tb          20.3801;        // K  normal boiling [CoolProp]
HvapTb      908.1;        // J/mol  at Tb     [CoolProp]

vaporPressure
{
    model         Antoine;
    // log10(Psat [bar]) = A - B / (T[K] + C)   -- fitted to CoolProp EOS
    coefficients  (3.2779   82.7701   4.89495);
    Trange        (14.95  32.56);
}

idealGasHeatCapacity
{
    model         polynomial;
    // Cp [J/(mol.K)] = a0 + a1 T + a2 T^2 + a3 T^3   -- fitted to CoolProp cp0
    coefficients  (19.5827  0.0462832  -7.0788e-05  3.54785e-08);
    Trange        (200  1000);
}

liquidHeatCapacity
{
    model         polynomial;
    // Cp_liq [J/(mol.K)]   -- fitted to CoolProp saturated-liquid cp
    coefficients  (-3.36096  2.37197  -0.122042  0.00299753);
    Trange        (19  20);
}

triplePoint
{
    T   14.0080;
    P   7559.8823;
}

provenance
{
    constants      "CoolProp 7.2.0 -- Leachman-JPCRD-2009";
    vaporPressure  "Antoine fitted to CoolProp EOS saturation, AAD 0.68%";
    idealGasCp     "polynomial fitted to CoolProp cp0, maxerr 2.86%";
    liquidCp       "polynomial fitted to CoolProp sat-liquid cp, maxerr 0.00%";
    triplePoint    "CoolProp reference EOS triple-point T,P";
}

cosmo
{
    VT2005
    {
        model       COSMOSAC;
        variant     "2002";
        source      "VT-2005 sigma-profile database (Mullins et al., Ind. Eng. Chem. Res. 45 (2006) 4389; DFT-COSMO), file VT2005-0383-PROF.txt bundled in usnistgov/COSMOSAC; CAS 1333-74-0";
        licence     externalRestricted;   // VT-2005: redistribution NOT confirmed -- values NOT shipped
        installed   false;                 // install your own copy: bin/choupo-import-cosmo (-> data/local/cosmo/VT2005/)
    }
}
`,xr=`/*--------------------------------*- Choupo -*--------------------------------*\\
  Component: Poly(ethylene terephthalate)

  A commodity polymer as a NONVOLATILE pseudo-component (Pareto over the Polymer
  Handbook): one repeat-unit molar mass + the handful of properties conceptual
  design actually uses, NOT a molecular-weight distribution and NOT segment-based
  PC-SAFT (the commercial polymer-simulator 95%, deliberately skipped).

  CURATION: representative grade values from group-contribution tables; many are
  GRADE-dependent -- amorphous (quenched) density ~1335; semicrystalline (bottle/fibre) ~1400 kg/m3, k up to 0.24. RECORD the grade. Re-source the primary for a design number.
\\*-----------------------------------------------------------------------------*/

name        PET;
formula     "C10H8O4 (-[OC-C6H4-CO-O-CH2CH2-O]-)";
MW          192.17;            // g/mol of the REPEAT UNIT (not the chain)


role        nonvolatile;             // a solid polymer: never in the vapour (K = 0)

polymer        // polymer-specific reference properties (glass-box; not VLE data)
{
    Tg            348;          // K, glass-transition temperature
    Tm            528;          // K, crystalline melting point
    Cp_solid      1130;          // J/(kg K) at 298 K, solid
    k_thermal     0.15;          // W/(m K)
    crystallinity 0.00-0.40;       // typical mass fraction (grade-dependent)
    provenance
    {
        Tg            { origin literature; method "Brandrup, Immergut & Grulke, Polymer Handbook, 4th ed. (Wiley, 1999)"; }
        Cp_solid      { origin literature; method "Van Krevelen & Te Nijenhuis, Properties of Polymers, 4th ed. (Elsevier, 2009)"; }
        k_thermal     { origin literature; method "Van Krevelen & Te Nijenhuis, Properties of Polymers, 4th ed. (Elsevier, 2009)"; }
        crystallinity { origin literature; method "Brandrup, Immergut & Grulke, Polymer Handbook, 4th ed. (Wiley, 1999)"; }
    }
}

// ---- solid the engine's solid slot (density feeds sizing / hold-up) ----
rho_p       1335;           // kg/m3, bulk density (see grade note)
provenance
{
    rho_p { origin literature; method "Van Krevelen & Te Nijenhuis, Properties of Polymers, 4th ed. (Elsevier, 2009) (amorphous) + handbook bulk value for the named grade"; }
}


// Solid polymer: no gas/liquid transport correlations apply (empty by design).

`,Nr=`/*--------------------------------*- Choupo -*--------------------------------*\\
  Component: Poly(methyl methacrylate)

  A commodity polymer as a NONVOLATILE pseudo-component (Pareto over the Polymer
  Handbook): one repeat-unit molar mass + the handful of properties conceptual
  design actually uses, NOT a molecular-weight distribution and NOT segment-based
  PC-SAFT (the commercial polymer-simulator 95%, deliberately skipped).

  CURATION: representative grade values from group-contribution tables; many are
  GRADE-dependent -- atactic commercial = amorphous (no Tm); syndiotactic Tg ~393-403 K, isotactic ~318 K. Re-source the primary for a design number.
\\*-----------------------------------------------------------------------------*/

name        PMMA;
formula     "C5H8O2 (-[CH2-C(CH3)(COOCH3)]-)";
MW          100.12;            // g/mol of the REPEAT UNIT (not the chain)


role        nonvolatile;             // a solid polymer: never in the vapour (K = 0)

polymer        // polymer-specific reference properties (glass-box; not VLE data)
{
    Tg            378;          // K, glass-transition temperature
    // Tm         (amorphous polymer -- no crystalline melting point)
    Cp_solid      1450;          // J/(kg K) at 298 K, solid
    k_thermal     0.19;          // W/(m K)
    crystallinity 0.00;       // typical mass fraction (grade-dependent)
    provenance
    {
        Tg            { origin literature; method "Brandrup, Immergut & Grulke, Polymer Handbook, 4th ed. (Wiley, 1999)"; }
        Cp_solid      { origin literature; method "Van Krevelen & Te Nijenhuis, Properties of Polymers, 4th ed. (Elsevier, 2009)"; }
        k_thermal     { origin literature; method "Van Krevelen & Te Nijenhuis, Properties of Polymers, 4th ed. (Elsevier, 2009)"; }
        crystallinity { origin literature; method "Brandrup, Immergut & Grulke, Polymer Handbook, 4th ed. (Wiley, 1999)"; }
    }
}

// ---- solid the engine's solid slot (density feeds sizing / hold-up) ----
rho_p       1170;           // kg/m3, bulk density (see grade note)
provenance
{
    rho_p { origin literature; method "Van Krevelen & Te Nijenhuis, Properties of Polymers, 4th ed. (Elsevier, 2009) (amorphous) + handbook bulk value for the named grade"; }
}


// Solid polymer: no gas/liquid transport correlations apply (empty by design).

`,Rr=`/*--------------------------------*- Choupo -*--------------------------------*\\
  Component: Poly(vinyl chloride), rigid

  A commodity polymer as a NONVOLATILE pseudo-component (Pareto over the Polymer
  Handbook): one repeat-unit molar mass + the handful of properties conceptual
  design actually uses, NOT a molecular-weight distribution and NOT segment-based
  PC-SAFT (the commercial polymer-simulator 95%, deliberately skipped).

  CURATION: representative grade values from group-contribution tables; many are
  GRADE-dependent -- rigid/unplasticized; Tg drops strongly with plasticizer. Essentially amorphous (no practical Tm). Re-source the primary for a design number.
\\*-----------------------------------------------------------------------------*/

name        PVC;
formula     "C2H3Cl (-[CH2-CHCl]-)";
MW          62.5;            // g/mol of the REPEAT UNIT (not the chain)


role        nonvolatile;             // a solid polymer: never in the vapour (K = 0)

polymer        // polymer-specific reference properties (glass-box; not VLE data)
{
    Tg            353;          // K, glass-transition temperature
    // Tm         (amorphous polymer -- no crystalline melting point)
    Cp_solid      900;          // J/(kg K) at 298 K, solid
    k_thermal     0.17;          // W/(m K)
    crystallinity 0.00-0.10;       // typical mass fraction (grade-dependent)
    provenance
    {
        Tg            { origin literature; method "Brandrup, Immergut & Grulke, Polymer Handbook, 4th ed. (Wiley, 1999)"; }
        Cp_solid      { origin literature; method "Van Krevelen & Te Nijenhuis, Properties of Polymers, 4th ed. (Elsevier, 2009)"; }
        k_thermal     { origin literature; method "Van Krevelen & Te Nijenhuis, Properties of Polymers, 4th ed. (Elsevier, 2009)"; }
        crystallinity { origin literature; method "Brandrup, Immergut & Grulke, Polymer Handbook, 4th ed. (Wiley, 1999)"; }
    }
}

// ---- solid the engine's solid slot (density feeds sizing / hold-up) ----
rho_p       1385;           // kg/m3, bulk density (see grade note)
provenance
{
    rho_p { origin literature; method "Van Krevelen & Te Nijenhuis, Properties of Polymers, 4th ed. (Elsevier, 2009) (amorphous) + handbook bulk value for the named grade"; }
}


// Solid polymer: no gas/liquid transport correlations apply (empty by design).

`,kr=`/*--------------------------------*- Choupo -*-----------------------*\\
  Component: ParaDeuterium  (N/A, CAS 7782-39-0p)
  PROPOSAL TIER -- UNVERIFIED.  Imported from CoolProp 7.2.0 (MIT);
  pure-fluid properties from the published reference EOS below.
  Reference EOS: Richardson-JPCRD-2013
  NOTE: formation properties (dHf, s_298) and group decompositions
  are NOT provided by CoolProp -> omitted here (a gap, not fabricated).
\\*---------------------------------------------------------------------------*/

name        ParaDeuterium;

//  Review state, MACHINE-READABLE (AP2, 2026-08-05).  This used to
//  live only in the banner above, which the parser discards -- so the
//  engine could not announce it and a run said nothing.
reviewStatus   interim;
reviewReason   importedFromCoolProp720_notCheckedAgainstPrimaries;
formula     N/A;
CAS         7782-39-0p;

MW          4.0282;        // kg/kmol  [CoolProp]
Tc          38.3400;        // K        [CoolProp EOS]
Pc          16.79550;        // bar      [CoolProp EOS]
omega       -0.13629;        // [-]      [CoolProp EOS]
Tb          23.6613;        // K  normal boiling [CoolProp]
HvapTb      1225.5;        // J/mol  at Tb     [CoolProp]

vaporPressure
{
    model         Antoine;
    // log10(Psat [bar]) = A - B / (T[K] + C)   -- fitted to CoolProp EOS
    coefficients  (3.49557   96.8631   4.06705);
    Trange        (19.22  37.57);
}

idealGasHeatCapacity
{
    model         polynomial;
    // Cp [J/(mol.K)] = a0 + a1 T + a2 T^2 + a3 T^3   -- fitted to CoolProp cp0
    coefficients  (29.0377  0.000158372  6.3249e-07  1.72565e-09);
    Trange        (200  1000);
}

liquidHeatCapacity
{
    model         polynomial;
    // Cp_liq [J/(mol.K)]   -- fitted to CoolProp saturated-liquid cp
    coefficients  (-8.93587  3.59119  -0.154304  0.0027952);
    Trange        (24  24);
}

triplePoint
{
    T   18.7240;
    P   17189.1020;
}

provenance
{
    constants      "CoolProp 7.2.0 -- Richardson-JPCRD-2013";
    vaporPressure  "Antoine fitted to CoolProp EOS saturation, AAD 0.63%";
    idealGasCp     "polynomial fitted to CoolProp cp0, maxerr 0.13%";
    liquidCp       "polynomial fitted to CoolProp sat-liquid cp, maxerr 0.00%";
    triplePoint    "CoolProp reference EOS triple-point T,P";
}
`,Mr=`/*--------------------------------*- Choupo -*-----------------------*\\
  Component: ParaHydrogen  (N/A, CAS 1333-74-0p)
  PROPOSAL TIER -- UNVERIFIED.  Imported from CoolProp 7.2.0 (MIT);
  pure-fluid properties from the published reference EOS below.
  Reference EOS: Leachman-JPCRD-2009
  NOTE: formation properties (dHf, s_298) and group decompositions
  are NOT provided by CoolProp -> omitted here (a gap, not fabricated).
\\*---------------------------------------------------------------------------*/

name        ParaHydrogen;

//  Review state, MACHINE-READABLE (AP2, 2026-08-05).  This used to
//  live only in the banner above, which the parser discards -- so the
//  engine could not announce it and a run said nothing.
reviewStatus   interim;
reviewReason   importedFromCoolProp720_notCheckedAgainstPrimaries;
formula     N/A;
CAS         1333-74-0p;

MW          2.0159;        // kg/kmol  [CoolProp]
Tc          32.9379;        // K        [CoolProp EOS]
Pc          12.85776;        // bar      [CoolProp EOS]
omega       -0.21900;        // [-]      [CoolProp EOS]
Tb          20.2713;        // K  normal boiling [CoolProp]
HvapTb      899.2;        // J/mol  at Tb     [CoolProp]

vaporPressure
{
    model         Antoine;
    // log10(Psat [bar]) = A - B / (T[K] + C)   -- fitted to CoolProp EOS
    coefficients  (3.25908   81.4505   4.74717);
    Trange        (14.82  32.28);
}

idealGasHeatCapacity
{
    model         polynomial;
    // Cp [J/(mol.K)] = a0 + a1 T + a2 T^2 + a3 T^3   -- fitted to CoolProp cp0
    coefficients  (37.8385  -0.0408139  6.03233e-05  -2.73762e-08);
    Trange        (200  1000);
}

liquidHeatCapacity
{
    model         polynomial;
    // Cp_liq [J/(mol.K)]   -- fitted to CoolProp saturated-liquid cp
    coefficients  (3.38086  1.21262  -0.0606504  0.00198956);
    Trange        (19  20);
}

triplePoint
{
    T   13.8033;
    P   7041.0868;
}

provenance
{
    constants      "CoolProp 7.2.0 -- Leachman-JPCRD-2009";
    vaporPressure  "Antoine fitted to CoolProp EOS saturation, AAD 0.67%";
    idealGasCp     "polynomial fitted to CoolProp cp0, maxerr 1.62%";
    liquidCp       "polynomial fitted to CoolProp sat-liquid cp, maxerr 0.00%";
    triplePoint    "CoolProp reference EOS triple-point T,P";
}

cosmo
{
    VT2005
    {
        model       COSMOSAC;
        variant     "2002";
        source      "VT-2005 sigma-profile database (Mullins et al., Ind. Eng. Chem. Res. 45 (2006) 4389; DFT-COSMO), file VT2005-0383-PROF.txt bundled in usnistgov/COSMOSAC; CAS 1333-74-0";
        licence     externalRestricted;   // VT-2005: redistribution NOT confirmed -- values NOT shipped
        installed   false;                 // install your own copy: bin/choupo-import-cosmo (-> data/local/cosmo/VT2005/)
    }
}
`,Kr=`/*--------------------------------*- Choupo -*-----------------------*\\
  Component: R11  (C1Cl3F1, CAS 75-69-4)
  PROPOSAL TIER -- UNVERIFIED.  Imported from CoolProp 7.2.0 (MIT);
  pure-fluid properties from the published reference EOS below.
  Reference EOS: Jacobsen-FPE-1992
  NOTE: formation properties (dHf, s_298) and group decompositions
  are NOT provided by CoolProp -> omitted here (a gap, not fabricated).
\\*---------------------------------------------------------------------------*/

name        R11;

//  Review state, MACHINE-READABLE (AP2, 2026-08-05).  This used to
//  live only in the banner above, which the parser discards -- so the
//  engine could not announce it and a run said nothing.
reviewStatus   interim;
reviewReason   importedFromCoolProp720_notCheckedAgainstPrimaries;
formula     C1Cl3F1;
CAS         75-69-4;

MW          137.3680;        // kg/kmol  [CoolProp]
Tc          471.1100;        // K        [CoolProp EOS]
Pc          44.07638;        // bar      [CoolProp EOS]
omega       0.18875;        // [-]      [CoolProp EOS]
Tb          296.8581;        // K  normal boiling [CoolProp]
HvapTb      24912.9;        // J/mol  at Tb     [CoolProp]
Vliq        9.3051e-05;        // m3/mol @298K     [CoolProp]

vaporPressure
{
    model         Antoine;
    // log10(Psat [bar]) = A - B / (T[K] + C)   -- fitted to CoolProp EOS
    coefficients  (4.09943   1084.63   -32.0318);
    Trange        (212.00  461.69);
}

idealGasHeatCapacity
{
    model         polynomial;
    // Cp [J/(mol.K)] = a0 + a1 T + a2 T^2 + a3 T^3   -- fitted to CoolProp cp0
    coefficients  (26.1756  0.248772  -0.000282638  1.13601e-07);
    Trange        (200  1000);
}

liquidHeatCapacity
{
    model         polynomial;
    // Cp_liq [J/(mol.K)]   -- fitted to CoolProp saturated-liquid cp
    coefficients  (71.5727  0.424946  -0.00163438  2.56608e-06);
    Trange        (236  297);
}

triplePoint
{
    T   162.6800;
    P   6.5101;
}

standardThermochemistry
{
    dHf_298   -316050;      // J/mol ideal-gas -- provenance: see the structured dHf_298 block below
    dGf_298   -270220;      // J/mol  ideal-gas [Joback]
    s_298     288.045;      // J/(mol*K) third-law [DERIVED: (dHf-dGf)/T + CODATA element S]
}

groups { joback ( { group C; count 1; } { group F; count 1; } { group Cl; count 3; } ); }

provenance
{
    dHf_298
    {
        origin           estimated;
        method           "Joback";
        methodVersion    "joback-poling5e-table2-2";
        input            joback;
        inputFingerprint "C:1,Cl:3,F:1";
        uncertainty      { status unquantified; reason "bulk-import band ~9 kJ/mol, primary basis not verified"; }
    }

    constants      "CoolProp 7.2.0 -- Jacobsen-FPE-1992";
    vaporPressure  "Antoine fitted to CoolProp EOS saturation, AAD 0.61%";
    idealGasCp     "polynomial fitted to CoolProp cp0, maxerr 1.08%";
    liquidCp       "polynomial fitted to CoolProp sat-liquid cp, maxerr 0.00%";
    triplePoint    "CoolProp reference EOS triple-point T,P";
    preserved      "from prior proposal (NOT CoolProp): standardThermochemistry, groups";
}

cosmo
{
    VT2005
    {
        model       COSMOSAC;
        variant     "2002";
        source      "VT-2005 sigma-profile database (Mullins et al., Ind. Eng. Chem. Res. 45 (2006) 4389; DFT-COSMO), file VT2005-0837-PROF.txt bundled in usnistgov/COSMOSAC; CAS 75-69-4";
        licence     externalRestricted;   // VT-2005: redistribution NOT confirmed -- values NOT shipped
        installed   false;                 // install your own copy: bin/choupo-import-cosmo (-> data/local/cosmo/VT2005/)
    }
}
`,qr=`/*--------------------------------*- Choupo -*-----------------------*\\
  Component: R113  (C2Cl3F3, CAS 76-13-1)
  PROPOSAL TIER -- UNVERIFIED.  Imported from CoolProp 7.2.0 (MIT);
  pure-fluid properties from the published reference EOS below.
  Reference EOS: Marx-BOOK-1992
  NOTE: formation properties (dHf, s_298) and group decompositions
  are NOT provided by CoolProp -> omitted here (a gap, not fabricated).
\\*---------------------------------------------------------------------------*/

name        R113;

//  Review state, MACHINE-READABLE (AP2, 2026-08-05).  This used to
//  live only in the banner above, which the parser discards -- so the
//  engine could not announce it and a run said nothing.
reviewStatus   interim;
reviewReason   importedFromCoolProp720_notCheckedAgainstPrimaries;
formula     C2Cl3F3;
CAS         76-13-1;

MW          187.3750;        // kg/kmol  [CoolProp]
Tc          487.2100;        // K        [CoolProp EOS]
Pc          33.92266;        // bar      [CoolProp EOS]
omega       0.25254;        // [-]      [CoolProp EOS]
Tb          320.7352;        // K  normal boiling [CoolProp]
HvapTb      27042.1;        // J/mol  at Tb     [CoolProp]
Vliq        1.1988e-04;        // m3/mol @298K     [CoolProp]

vaporPressure
{
    model         Antoine;
    // log10(Psat [bar]) = A - B / (T[K] + C)   -- fitted to CoolProp EOS
    coefficients  (4.0698   1143.04   -39.6176);
    Trange        (237.43  477.47);
}

idealGasHeatCapacity
{
    model         polynomial;
    // Cp [J/(mol.K)] = a0 + a1 T + a2 T^2 + a3 T^3   -- fitted to CoolProp cp0
    coefficients  (31.6285  0.41423  -0.000432688  1.64221e-07);
    Trange        (228  1000);
}

liquidHeatCapacity
{
    model         polynomial;
    // Cp_liq [J/(mol.K)]   -- fitted to CoolProp saturated-liquid cp
    coefficients  (239.648  -0.917689  0.00327364  -3.20943e-06);
    Trange        (244  321);
}

triplePoint
{
    T   236.9300;
    P   1871.4275;
}

standardThermochemistry
{
    dHf_298   -737660;      // J/mol ideal-gas -- provenance: see the structured dHf_298 block below
    dGf_298   -648580;      // J/mol  ideal-gas [Joback]
    s_298     351.524;      // J/(mol*K) third-law [DERIVED: (dHf-dGf)/T + CODATA element S]
}

groups { joback ( { group C; count 2; } { group F; count 3; } { group Cl; count 3; } ); }

provenance
{
    dHf_298
    {
        origin           estimated;
        method           "Joback";
        methodVersion    "joback-poling5e-table2-2";
        input            joback;
        inputFingerprint "C:2,Cl:3,F:3";
        uncertainty      { status unquantified; reason "bulk-import band ~9 kJ/mol, primary basis not verified"; }
    }

    constants      "CoolProp 7.2.0 -- Marx-BOOK-1992";
    vaporPressure  "Antoine fitted to CoolProp EOS saturation, AAD 0.58%";
    idealGasCp     "polynomial fitted to CoolProp cp0, maxerr 0.91%";
    liquidCp       "polynomial fitted to CoolProp sat-liquid cp, maxerr 0.01%";
    triplePoint    "CoolProp reference EOS triple-point T,P";
    preserved      "from prior proposal (NOT CoolProp): standardThermochemistry, groups";
}

cosmo
{
    VT2005
    {
        model       COSMOSAC;
        variant     "2002";
        source      "VT-2005 sigma-profile database (Mullins et al., Ind. Eng. Chem. Res. 45 (2006) 4389; DFT-COSMO), file VT2005-1286-PROF.txt bundled in usnistgov/COSMOSAC; CAS 76-13-1";
        licence     externalRestricted;   // VT-2005: redistribution NOT confirmed -- values NOT shipped
        installed   false;                 // install your own copy: bin/choupo-import-cosmo (-> data/local/cosmo/VT2005/)
    }
}
`,Ir=`/*--------------------------------*- Choupo -*-----------------------*\\
  Component: R12  (C1Cl2F2, CAS 75-71-8)
  PROPOSAL TIER -- UNVERIFIED.  Imported from CoolProp 7.2.0 (MIT);
  pure-fluid properties from the published reference EOS below.
  Reference EOS: Marx-BOOK-1992
  NOTE: formation properties (dHf, s_298) and group decompositions
  are NOT provided by CoolProp -> omitted here (a gap, not fabricated).
\\*---------------------------------------------------------------------------*/

name        R12;

//  Review state, MACHINE-READABLE (AP2, 2026-08-05).  This used to
//  live only in the banner above, which the parser discards -- so the
//  engine could not announce it and a run said nothing.
reviewStatus   interim;
reviewReason   importedFromCoolProp720_notCheckedAgainstPrimaries;
formula     C1Cl2F2;
CAS         75-71-8;

MW          120.9130;        // kg/kmol  [CoolProp]
Tc          385.1200;        // K        [CoolProp EOS]
Pc          41.36166;        // bar      [CoolProp EOS]
omega       0.17948;        // [-]      [CoolProp EOS]
Tb          243.3977;        // K  normal boiling [CoolProp]
HvapTb      20092.4;        // J/mol  at Tb     [CoolProp]
Vliq        9.2227e-05;        // m3/mol @298K     [CoolProp]

vaporPressure
{
    model         Antoine;
    // log10(Psat [bar]) = A - B / (T[K] + C)   -- fitted to CoolProp EOS
    coefficients  (4.06124   886.092   -25.0186);
    Trange        (173.30  377.42);
}

idealGasHeatCapacity
{
    model         polynomial;
    // Cp [J/(mol.K)] = a0 + a1 T + a2 T^2 + a3 T^3   -- fitted to CoolProp cp0
    coefficients  (19.553  0.248547  -0.00026738  1.02978e-07);
    Trange        (200  1000);
}

liquidHeatCapacity
{
    model         polynomial;
    // Cp_liq [J/(mol.K)]   -- fitted to CoolProp saturated-liquid cp
    coefficients  (115.392  -0.282924  0.00122679  -8.32474e-07);
    Trange        (193  243);
}

triplePoint
{
    T   116.0990;
    P   0.2426;
}

standardThermochemistry
{
    dHf_298   -496420;      // J/mol ideal-gas -- provenance: see the structured dHf_298 block below
    dGf_298   -453100;      // J/mol  ideal-gas [Joback]
    s_298     286.324;      // J/(mol*K) third-law [DERIVED: (dHf-dGf)/T + CODATA element S]
}

groups { joback ( { group C; count 1; } { group F; count 2; } { group Cl; count 2; } ); }

provenance
{
    dHf_298
    {
        origin           estimated;
        method           "Joback";
        methodVersion    "joback-poling5e-table2-2";
        input            joback;
        inputFingerprint "C:1,Cl:2,F:2";
        uncertainty      { status unquantified; reason "bulk-import band ~9 kJ/mol, primary basis not verified"; }
    }

    constants      "CoolProp 7.2.0 -- Marx-BOOK-1992";
    vaporPressure  "Antoine fitted to CoolProp EOS saturation, AAD 0.64%";
    idealGasCp     "polynomial fitted to CoolProp cp0, maxerr 0.80%";
    liquidCp       "polynomial fitted to CoolProp sat-liquid cp, maxerr 0.00%";
    triplePoint    "CoolProp reference EOS triple-point T,P";
    preserved      "from prior proposal (NOT CoolProp): standardThermochemistry, groups";
}

cosmo
{
    VT2005
    {
        model       COSMOSAC;
        variant     "2002";
        source      "VT-2005 sigma-profile database (Mullins et al., Ind. Eng. Chem. Res. 45 (2006) 4389; DFT-COSMO), file VT2005-0836-PROF.txt bundled in usnistgov/COSMOSAC; CAS 75-71-8";
        licence     externalRestricted;   // VT-2005: redistribution NOT confirmed -- values NOT shipped
        installed   false;                 // install your own copy: bin/choupo-import-cosmo (-> data/local/cosmo/VT2005/)
    }
}
`,Jr=`/*--------------------------------*- Choupo -*-----------------------*\\
  Component: R1234yf  (C3F4H2, CAS 754-12-1)
  PROPOSAL TIER -- UNVERIFIED.  Imported from CoolProp 7.2.0 (MIT);
  pure-fluid properties from the published reference EOS below.
  Reference EOS: Richter-JCED-2011
  NOTE: formation properties (dHf, s_298) and group decompositions
  are NOT provided by CoolProp -> omitted here (a gap, not fabricated).
\\*---------------------------------------------------------------------------*/

name        R1234yf;

//  Review state, MACHINE-READABLE (AP2, 2026-08-05).  This used to
//  live only in the banner above, which the parser discards -- so the
//  engine could not announce it and a run said nothing.
reviewStatus   interim;
reviewReason   importedFromCoolProp720_notCheckedAgainstPrimaries;
formula     C3F4H2;
CAS         754-12-1;

MW          114.0416;        // kg/kmol  [CoolProp]
Tc          367.8500;        // K        [CoolProp EOS]
Pc          33.82245;        // bar      [CoolProp EOS]
omega       0.27600;        // [-]      [CoolProp EOS]
Tb          243.6649;        // K  normal boiling [CoolProp]
HvapTb      20555.5;        // J/mol  at Tb     [CoolProp]
Vliq        1.0444e-04;        // m3/mol @298K     [CoolProp]

vaporPressure
{
    model         Antoine;
    // log10(Psat [bar]) = A - B / (T[K] + C)   -- fitted to CoolProp EOS
    coefficients  (4.25047   950.406   -19.8477);
    Trange        (220.50  360.49);
}

idealGasHeatCapacity
{
    model         polynomial;
    // Cp [J/(mol.K)] = a0 + a1 T + a2 T^2 + a3 T^3   -- fitted to CoolProp cp0
    coefficients  (8.29896  0.414089  -0.000380043  1.3169e-07);
    Trange        (200  1000);
}

liquidHeatCapacity
{
    model         polynomial;
    // Cp_liq [J/(mol.K)]   -- fitted to CoolProp saturated-liquid cp
    coefficients  (75.3607  0.18895  2.54385e-05  8.84061e-07);
    Trange        (225  244);
}

triplePoint
{
    T   220.0000;
    P   31507.5588;
}

standardThermochemistry
{
    dHf_298   -782800;      // J/mol ideal-gas -- provenance: see the structured dHf_298 block below
    dGf_298   -722730;      // J/mol  ideal-gas [Joback]
    s_298     352.024;      // J/(mol*K) third-law [DERIVED: (dHf-dGf)/T + CODATA element S]
}

groups { joback ( { group C; count 1; } { group eCH2; count 1; } { group eC; count 1; } { group F; count 4; } ); }

provenance
{
    dHf_298
    {
        origin           estimated;
        method           "Joback";
        methodVersion    "joback-poling5e-table2-2";
        input            joback;
        inputFingerprint "C:1,F:4,eC:1,eCH2:1";
        uncertainty      { status unquantified; reason "bulk-import band ~9 kJ/mol, primary basis not verified"; }
    }

    constants      "CoolProp 7.2.0 -- Richter-JCED-2011";
    vaporPressure  "Antoine fitted to CoolProp EOS saturation, AAD 0.36%";
    idealGasCp     "polynomial fitted to CoolProp cp0, maxerr 0.15%";
    liquidCp       "polynomial fitted to CoolProp sat-liquid cp, maxerr 0.00%";
    triplePoint    "CoolProp reference EOS triple-point T,P";
    preserved      "from prior proposal (NOT CoolProp): standardThermochemistry, groups";
}
`,Vr=`/*--------------------------------*- Choupo -*-----------------------*\\
  Component: R1234zeE  (C3F4H2, CAS 29118-24-9)
  PROPOSAL TIER -- UNVERIFIED.  Imported from CoolProp 7.2.0 (MIT);
  pure-fluid properties from the published reference EOS below.
  Reference EOS: Thol-IJT-2016-R1234zeE
  NOTE: formation properties (dHf, s_298) and group decompositions
  are NOT provided by CoolProp -> omitted here (a gap, not fabricated).
\\*---------------------------------------------------------------------------*/

name        R1234zeE;

//  Review state, MACHINE-READABLE (AP2, 2026-08-05).  This used to
//  live only in the banner above, which the parser discards -- so the
//  engine could not announce it and a run said nothing.
reviewStatus   interim;
reviewReason   importedFromCoolProp720_notCheckedAgainstPrimaries;
formula     C3F4H2;
CAS         29118-24-9;

MW          114.0416;        // kg/kmol  [CoolProp]
Tc          382.5130;        // K        [CoolProp EOS]
Pc          36.34871;        // bar      [CoolProp EOS]
omega       0.31312;        // [-]      [CoolProp EOS]
Tb          254.1775;        // K  normal boiling [CoolProp]
HvapTb      22308.9;        // J/mol  at Tb     [CoolProp]
Vliq        9.8050e-05;        // m3/mol @298K     [CoolProp]

vaporPressure
{
    model         Antoine;
    // log10(Psat [bar]) = A - B / (T[K] + C)   -- fitted to CoolProp EOS
    coefficients  (4.1866   919.964   -34.2106);
    Trange        (172.13  374.86);
}

idealGasHeatCapacity
{
    model         polynomial;
    // Cp [J/(mol.K)] = a0 + a1 T + a2 T^2 + a3 T^3   -- fitted to CoolProp cp0
    coefficients  (32.023  0.268223  -0.000143674  1.75124e-08);
    Trange        (200  1000);
}

liquidHeatCapacity
{
    model         polynomial;
    // Cp_liq [J/(mol.K)]   -- fitted to CoolProp saturated-liquid cp
    coefficients  (179.097  -0.469055  0.00141385  -3.05374e-07);
    Trange        (191  254);
}

triplePoint
{
    T   168.6200;
    P   218.6549;
}

standardThermochemistry
{
    dHf_298   -781220;      // J/mol ideal-gas -- provenance: see the structured dHf_298 block below
    dGf_298   -721800;      // J/mol  ideal-gas [Joback]
    s_298     354.204;      // J/(mol*K) third-law [DERIVED: (dHf-dGf)/T + CODATA element S]
}

groups { joback ( { group C; count 1; } { group eCH; count 2; } { group F; count 4; } ); }

provenance
{
    dHf_298
    {
        origin           estimated;
        method           "Joback";
        methodVersion    "joback-poling5e-table2-2";
        input            joback;
        inputFingerprint "C:1,F:4,eCH:2";
        uncertainty      { status unquantified; reason "bulk-import band ~9 kJ/mol, primary basis not verified"; }
    }

    constants      "CoolProp 7.2.0 -- Thol-IJT-2016-R1234zeE";
    vaporPressure  "Antoine fitted to CoolProp EOS saturation, AAD 0.59%";
    idealGasCp     "polynomial fitted to CoolProp cp0, maxerr 0.44%";
    liquidCp       "polynomial fitted to CoolProp sat-liquid cp, maxerr 0.00%";
    triplePoint    "CoolProp reference EOS triple-point T,P";
    preserved      "from prior proposal (NOT CoolProp): standardThermochemistry, groups";
}
`,Dr=`/*--------------------------------*- Choupo -*-----------------------*\\
  Component: R1234zeZ  (C3F4H2, CAS 29118-25-0)
  PROPOSAL TIER -- UNVERIFIED.  Imported from CoolProp 7.2.0 (MIT);
  pure-fluid properties from the published reference EOS below.
  Reference EOS: Akasaka-JCED-2019
  NOTE: formation properties (dHf, s_298) and group decompositions
  are NOT provided by CoolProp -> omitted here (a gap, not fabricated).
\\*---------------------------------------------------------------------------*/

name        R1234zeZ;

//  Review state, MACHINE-READABLE (AP2, 2026-08-05).  This used to
//  live only in the banner above, which the parser discards -- so the
//  engine could not announce it and a run said nothing.
reviewStatus   interim;
reviewReason   importedFromCoolProp720_notCheckedAgainstPrimaries;
formula     C3F4H2;
CAS         29118-25-0;

MW          114.0416;        // kg/kmol  [CoolProp]
Tc          423.2704;        // K        [CoolProp EOS]
Pc          35.30643;        // bar      [CoolProp EOS]
omega       0.32684;        // [-]      [CoolProp EOS]
Tb          282.8778;        // K  normal boiling [CoolProp]
HvapTb      24532.8;        // J/mol  at Tb     [CoolProp]
Vliq        9.3128e-05;        // m3/mol @298K     [CoolProp]

vaporPressure
{
    model         Antoine;
    // log10(Psat [bar]) = A - B / (T[K] + C)   -- fitted to CoolProp EOS
    coefficients  (4.4183   1162.66   -19.3617);
    Trange        (273.50  414.80);
}

idealGasHeatCapacity
{
    model         polynomial;
    // Cp [J/(mol.K)] = a0 + a1 T + a2 T^2 + a3 T^3   -- fitted to CoolProp cp0
    coefficients  (-3.16717  0.434795  -0.000403531  1.3423e-07);
    Trange        (255  1000);
}

liquidHeatCapacity
{
    model         polynomial;
    // Cp_liq [J/(mol.K)]   -- fitted to CoolProp saturated-liquid cp
    coefficients  (98.2638  0.102644  -0.000205973  1.31313e-06);
    Trange        (278  283);
}

triplePoint
{
    T   273.0000;
    P   67849.1859;
}

standardThermochemistry
{
    dHf_298   -781220;      // J/mol ideal-gas -- provenance: see the structured dHf_298 block below
    dGf_298   -721800;      // J/mol  ideal-gas [Joback]
    s_298     354.204;      // J/(mol*K) third-law [DERIVED: (dHf-dGf)/T + CODATA element S]
}

groups { joback ( { group C; count 1; } { group eCH; count 2; } { group F; count 4; } ); }

provenance
{
    dHf_298
    {
        origin           estimated;
        method           "Joback";
        methodVersion    "joback-poling5e-table2-2";
        input            joback;
        inputFingerprint "C:1,F:4,eCH:2";
        uncertainty      { status unquantified; reason "bulk-import band ~9 kJ/mol, primary basis not verified"; }
    }

    constants      "CoolProp 7.2.0 -- Akasaka-JCED-2019";
    vaporPressure  "Antoine fitted to CoolProp EOS saturation, AAD 0.27%";
    idealGasCp     "polynomial fitted to CoolProp cp0, maxerr 0.93%";
    liquidCp       "polynomial fitted to CoolProp sat-liquid cp, maxerr 0.00%";
    triplePoint    "CoolProp reference EOS triple-point T,P";
    preserved      "from prior proposal (NOT CoolProp): standardThermochemistry, groups";
}
`,Fr=`/*--------------------------------*- Choupo -*-----------------------*\\
  Component: R134a  (C2F4H2, CAS 811-97-2)
  PROPOSAL TIER -- UNVERIFIED.  Imported from CoolProp 7.2.0 (MIT);
  pure-fluid properties from the published reference EOS below.
  Reference EOS: TillnerRoth-JPCRD-1994
  NOTE: formation properties (dHf, s_298) and group decompositions
  are NOT provided by CoolProp -> omitted here (a gap, not fabricated).
\\*---------------------------------------------------------------------------*/

name        R134a;

//  Review state, MACHINE-READABLE (AP2, 2026-08-05).  This used to
//  live only in the banner above, which the parser discards -- so the
//  engine could not announce it and a run said nothing.
reviewStatus   interim;
reviewReason   importedFromCoolProp720_notCheckedAgainstPrimaries;
formula     C2F4H2;
CAS         811-97-2;

MW          102.0320;        // kg/kmol  [CoolProp]
Tc          374.2120;        // K        [CoolProp EOS]
Pc          40.59276;        // bar      [CoolProp EOS]
omega       0.32684;        // [-]      [CoolProp EOS]
Tb          247.0762;        // K  normal boiling [CoolProp]
HvapTb      22137.7;        // J/mol  at Tb     [CoolProp]
Vliq        8.4554e-05;        // m3/mol @298K     [CoolProp]

vaporPressure
{
    model         Antoine;
    // log10(Psat [bar]) = A - B / (T[K] + C)   -- fitted to CoolProp EOS
    coefficients  (4.26937   912.074   -33.2541);
    Trange        (170.35  366.73);
}

idealGasHeatCapacity
{
    model         polynomial;
    // Cp [J/(mol.K)] = a0 + a1 T + a2 T^2 + a3 T^3   -- fitted to CoolProp cp0
    coefficients  (21.9021  0.245025  -0.00012639  4.31199e-08);
    Trange        (200  1000);
}

liquidHeatCapacity
{
    model         polynomial;
    // Cp_liq [J/(mol.K)]   -- fitted to CoolProp saturated-liquid cp
    coefficients  (153.125  -0.49993  0.00213914  -1.95897e-06);
    Trange        (187  247);
}

triplePoint
{
    T   169.8500;
    P   389.5638;
}

standardThermochemistry
{
    dHf_298   -877800;      // J/mol ideal-gas -- provenance: see the structured dHf_298 block below
    dGf_298   -810440;      // J/mol  ideal-gas [Joback]
    s_298     321.833;      // J/(mol*K) third-law [DERIVED: (dHf-dGf)/T + CODATA element S]
}

groups { joback ( { group CH2; count 1; } { group C; count 1; } { group F; count 4; } ); }

provenance
{
    dHf_298
    {
        origin           estimated;
        method           "Joback";
        methodVersion    "joback-poling5e-table2-2";
        input            joback;
        inputFingerprint "C:1,CH2:1,F:4";
        uncertainty      { status unquantified; reason "bulk-import band ~9 kJ/mol, primary basis not verified"; }
    }

    constants      "CoolProp 7.2.0 -- TillnerRoth-JPCRD-1994";
    vaporPressure  "Antoine fitted to CoolProp EOS saturation, AAD 0.52%";
    idealGasCp     "polynomial fitted to CoolProp cp0, maxerr 0.47%";
    liquidCp       "polynomial fitted to CoolProp sat-liquid cp, maxerr 0.01%";
    triplePoint    "CoolProp reference EOS triple-point T,P";
    preserved      "from prior proposal (NOT CoolProp): standardThermochemistry, groups";
}

cosmo
{
    VT2005
    {
        model       COSMOSAC;
        variant     "2002";
        source      "VT-2005 sigma-profile database (Mullins et al., Ind. Eng. Chem. Res. 45 (2006) 4389; DFT-COSMO), file VT2005-1281-PROF.txt bundled in usnistgov/COSMOSAC; CAS 811-97-2";
        licence     externalRestricted;   // VT-2005: redistribution NOT confirmed -- values NOT shipped
        installed   false;                 // install your own copy: bin/choupo-import-cosmo (-> data/local/cosmo/VT2005/)
    }
}
`,Gr=`/*--------------------------------*- Choupo -*-----------------------*\\
  Component: R13I1  (C1F3I1, CAS 2314-97-8)
  PROPOSAL TIER -- UNVERIFIED.  Imported from CoolProp 7.2.0 (MIT);
  pure-fluid properties from the published reference EOS below.
  Reference EOS: Lemmon-JCED-2016-365227
  NOTE: formation properties (dHf, s_298) and group decompositions
  are NOT provided by CoolProp -> omitted here (a gap, not fabricated).
\\*---------------------------------------------------------------------------*/

name        R13I1;

//  Review state, MACHINE-READABLE (AP2, 2026-08-05).  This used to
//  live only in the banner above, which the parser discards -- so the
//  engine could not announce it and a run said nothing.
reviewStatus   interim;
reviewReason   importedFromCoolProp720_notCheckedAgainstPrimaries;
formula     C1F3I1;
CAS         2314-97-8;

MW          195.9104;        // kg/kmol  [CoolProp]
Tc          396.4397;        // K        [CoolProp EOS]
Pc          39.52545;        // bar      [CoolProp EOS]
omega       0.17618;        // [-]      [CoolProp EOS]
Tb          251.2906;        // K  normal boiling [CoolProp]
HvapTb      20367.7;        // J/mol  at Tb     [CoolProp]
Vliq        9.6331e-05;        // m3/mol @298K     [CoolProp]

vaporPressure
{
    model         Antoine;
    // log10(Psat [bar]) = A - B / (T[K] + C)   -- fitted to CoolProp EOS
    coefficients  (4.09441   943.915   -20.5252);
    Trange        (178.40  388.51);
}

idealGasHeatCapacity
{
    model         polynomial;
    // Cp [J/(mol.K)] = a0 + a1 T + a2 T^2 + a3 T^3   -- fitted to CoolProp cp0
    coefficients  (19.1563  0.236651  -0.000303061  1.31368e-07);
    Trange        (200  1000);
}

liquidHeatCapacity
{
    model         polynomial;
    // Cp_liq [J/(mol.K)]   -- fitted to CoolProp saturated-liquid cp
    coefficients  (13.1839  0.629561  -0.00184193  2.69878e-06);
    Trange        (198  251);
}

triplePoint
{
    T   120.0000;
    P   0.4624;
}

standardThermochemistry
{
    dHf_298   -584180;      // J/mol ideal-gas -- provenance: see the structured dHf_298 block below
    dGf_298   -565930;      // J/mol  ideal-gas [Joback]
    s_298     306.799;      // J/(mol*K) third-law [DERIVED: (dHf-dGf)/T + CODATA element S]
}

groups { unifac ( { group I; count 1; } { group CF3; count 1; } ); joback ( { group C; count 1; } { group F; count 3; } { group I; count 1; } ); }

provenance
{
    dHf_298
    {
        origin           estimated;
        method           "Joback";
        methodVersion    "joback-poling5e-table2-2";
        input            joback;
        inputFingerprint "C:1,F:3,I:1";
        uncertainty      { status unquantified; reason "bulk-import band ~9 kJ/mol, primary basis not verified"; }
    }

    constants      "CoolProp 7.2.0 -- Lemmon-JCED-2016-365227";
    vaporPressure  "Antoine fitted to CoolProp EOS saturation, AAD 0.51%";
    idealGasCp     "polynomial fitted to CoolProp cp0, maxerr 2.53%";
    liquidCp       "polynomial fitted to CoolProp sat-liquid cp, maxerr 0.00%";
    triplePoint    "CoolProp reference EOS triple-point T,P";
    preserved      "from prior proposal (NOT CoolProp): standardThermochemistry, groups";
}
`,Lr=`/*--------------------------------*- Choupo -*-----------------------*\\
  Component: R143a  (C2F3H3, CAS 420-46-2)
  PROPOSAL TIER -- UNVERIFIED.  Imported from CoolProp 7.2.0 (MIT);
  pure-fluid properties from the published reference EOS below.
  Reference EOS: LemmonJacobsen-JPCRD-2000
  NOTE: formation properties (dHf, s_298) and group decompositions
  are NOT provided by CoolProp -> omitted here (a gap, not fabricated).
\\*---------------------------------------------------------------------------*/

name        R143a;

//  Review state, MACHINE-READABLE (AP2, 2026-08-05).  This used to
//  live only in the banner above, which the parser discards -- so the
//  engine could not announce it and a run said nothing.
reviewStatus   interim;
reviewReason   importedFromCoolProp720_notCheckedAgainstPrimaries;
formula     C2F3H3;
CAS         420-46-2;

MW          84.0410;        // kg/kmol  [CoolProp]
Tc          345.8570;        // K        [CoolProp EOS]
Pc          37.61818;        // bar      [CoolProp EOS]
omega       0.26149;        // [-]      [CoolProp EOS]
Tb          225.9094;        // K  normal boiling [CoolProp]
HvapTb      19046.0;        // J/mol  at Tb     [CoolProp]
Vliq        9.0345e-05;        // m3/mol @298K     [CoolProp]

vaporPressure
{
    model         Antoine;
    // log10(Psat [bar]) = A - B / (T[K] + C)   -- fitted to CoolProp EOS
    coefficients  (4.1673   837.268   -24.8001);
    Trange        (161.84  338.94);
}

idealGasHeatCapacity
{
    model         polynomial;
    // Cp [J/(mol.K)] = a0 + a1 T + a2 T^2 + a3 T^3   -- fitted to CoolProp cp0
    coefficients  (10.326  0.288079  -0.000222561  6.80349e-08);
    Trange        (200  1000);
}

liquidHeatCapacity
{
    model         polynomial;
    // Cp_liq [J/(mol.K)]   -- fitted to CoolProp saturated-liquid cp
    coefficients  (162.731  -0.966324  0.00456312  -5.72301e-06);
    Trange        (173  226);
}

triplePoint
{
    T   161.3400;
    P   1074.9454;
}

standardThermochemistry
{
    dHf_298   -681690;      // J/mol ideal-gas -- provenance: see the structured dHf_298 block below
    dGf_298   -615630;      // J/mol  ideal-gas [Joback]
    s_298     290.134;      // J/(mol*K) third-law [DERIVED: (dHf-dGf)/T + CODATA element S]
}

groups { unifac ( { group CH3; count 1; } { group CF3; count 1; } ); joback ( { group CH3; count 1; } { group C; count 1; } { group F; count 3; } ); }

provenance
{
    dHf_298
    {
        origin           estimated;
        method           "Joback";
        methodVersion    "joback-poling5e-table2-2";
        input            joback;
        inputFingerprint "C:1,CH3:1,F:3";
        uncertainty      { status unquantified; reason "bulk-import band ~9 kJ/mol, primary basis not verified"; }
    }

    constants      "CoolProp 7.2.0 -- LemmonJacobsen-JPCRD-2000";
    vaporPressure  "Antoine fitted to CoolProp EOS saturation, AAD 0.62%";
    idealGasCp     "polynomial fitted to CoolProp cp0, maxerr 0.41%";
    liquidCp       "polynomial fitted to CoolProp sat-liquid cp, maxerr 0.01%";
    triplePoint    "CoolProp reference EOS triple-point T,P";
    preserved      "from prior proposal (NOT CoolProp): standardThermochemistry, groups";
}

cosmo
{
    VT2005
    {
        model       COSMOSAC;
        variant     "2002";
        source      "VT-2005 sigma-profile database (Mullins et al., Ind. Eng. Chem. Res. 45 (2006) 4389; DFT-COSMO), file VT2005-0849-PROF.txt bundled in usnistgov/COSMOSAC; CAS 420-46-2";
        licence     externalRestricted;   // VT-2005: redistribution NOT confirmed -- values NOT shipped
        installed   false;                 // install your own copy: bin/choupo-import-cosmo (-> data/local/cosmo/VT2005/)
    }
}
`,jr=`/*--------------------------------*- Choupo -*-----------------------*\\
  Component: R21  (C1Cl2F1H1, CAS 75-43-4)
  PROPOSAL TIER -- UNVERIFIED.  Imported from CoolProp 7.2.0 (MIT);
  pure-fluid properties from the published reference EOS below.
  Reference EOS: Platzer-BOOK-1990
  NOTE: formation properties (dHf, s_298) and group decompositions
  are NOT provided by CoolProp -> omitted here (a gap, not fabricated).
\\*---------------------------------------------------------------------------*/

name        R21;

//  Review state, MACHINE-READABLE (AP2, 2026-08-05).  This used to
//  live only in the banner above, which the parser discards -- so the
//  engine could not announce it and a run said nothing.
reviewStatus   interim;
reviewReason   importedFromCoolProp720_notCheckedAgainstPrimaries;
formula     C1Cl2F1H1;
CAS         75-43-4;

MW          102.9227;        // kg/kmol  [CoolProp]
Tc          452.7202;        // K        [CoolProp EOS]
Pc          52.88505;        // bar      [CoolProp EOS]
omega       0.20610;        // [-]      [CoolProp EOS]
Tb          282.0119;        // K  normal boiling [CoolProp]
HvapTb      24644.6;        // J/mol  at Tb     [CoolProp]
Vliq        7.5261e-05;        // m3/mol @298K     [CoolProp]

vaporPressure
{
    model         Antoine;
    // log10(Psat [bar]) = A - B / (T[K] + C)   -- fitted to CoolProp EOS
    coefficients  (4.19296   1042.05   -33.2941);
    Trange        (203.72  443.67);
}

idealGasHeatCapacity
{
    model         polynomial;
    // Cp [J/(mol.K)] = a0 + a1 T + a2 T^2 + a3 T^3   -- fitted to CoolProp cp0
    coefficients  (10.4088  0.252585  -0.000322583  1.67648e-07);
    Trange        (200  1000);
}

liquidHeatCapacity
{
    model         polynomial;
    // Cp_liq [J/(mol.K)]   -- fitted to CoolProp saturated-liquid cp
    coefficients  (1612.18  -18.0567  0.0707596  -9.10403e-05);
    Trange        (226  282);
}

triplePoint
{
    T   200.0000;
    P   872.8350;
}

standardThermochemistry
{
    dHf_298   -296840;      // J/mol ideal-gas -- provenance: see the structured dHf_298 block below
    dGf_298   -263570;      // J/mol  ideal-gas [Joback]
    s_298     283.972;      // J/(mol*K) third-law [DERIVED: (dHf-dGf)/T + CODATA element S]
}

groups { joback ( { group CH; count 1; } { group F; count 1; } { group Cl; count 2; } ); }

provenance
{
    dHf_298
    {
        origin           estimated;
        method           "Joback";
        methodVersion    "joback-poling5e-table2-2";
        input            joback;
        inputFingerprint "CH:1,Cl:2,F:1";
        uncertainty      { status unquantified; reason "bulk-import band ~9 kJ/mol, primary basis not verified"; }
    }

    constants      "CoolProp 7.2.0 -- Platzer-BOOK-1990";
    vaporPressure  "Antoine fitted to CoolProp EOS saturation, AAD 0.46%";
    idealGasCp     "polynomial fitted to CoolProp cp0, maxerr 1.66%";
    liquidCp       "polynomial fitted to CoolProp sat-liquid cp, maxerr 0.24%";
    triplePoint    "CoolProp reference EOS triple-point T,P";
    preserved      "from prior proposal (NOT CoolProp): standardThermochemistry, groups";
}

cosmo
{
    VT2005
    {
        model       COSMOSAC;
        variant     "2002";
        source      "VT-2005 sigma-profile database (Mullins et al., Ind. Eng. Chem. Res. 45 (2006) 4389; DFT-COSMO), file VT2005-0876-PROF.txt bundled in usnistgov/COSMOSAC; CAS 75-43-4";
        licence     externalRestricted;   // VT-2005: redistribution NOT confirmed -- values NOT shipped
        installed   false;                 // install your own copy: bin/choupo-import-cosmo (-> data/local/cosmo/VT2005/)
    }
}
`,Br=`/*--------------------------------*- Choupo -*-----------------------*\\
  Component: R218  (C3F8, CAS 76-19-7)
  PROPOSAL TIER -- UNVERIFIED.  Imported from CoolProp 7.2.0 (MIT);
  pure-fluid properties from the published reference EOS below.
  Reference EOS: Lemmon-JCED-2006
  NOTE: formation properties (dHf, s_298) and group decompositions
  are NOT provided by CoolProp -> omitted here (a gap, not fabricated).
\\*---------------------------------------------------------------------------*/

name        R218;

//  Review state, MACHINE-READABLE (AP2, 2026-08-05).  This used to
//  live only in the banner above, which the parser discards -- so the
//  engine could not announce it and a run said nothing.
reviewStatus   interim;
reviewReason   importedFromCoolProp720_notCheckedAgainstPrimaries;
formula     C3F8;
CAS         76-19-7;

MW          188.0193;        // kg/kmol  [CoolProp]
Tc          345.0200;        // K        [CoolProp EOS]
Pc          26.40206;        // bar      [CoolProp EOS]
omega       0.31720;        // [-]      [CoolProp EOS]
Tb          236.3611;        // K  normal boiling [CoolProp]
HvapTb      19769.2;        // J/mol  at Tb     [CoolProp]
Vliq        1.4207e-04;        // m3/mol @298K     [CoolProp]

vaporPressure
{
    model         Antoine;
    // log10(Psat [bar]) = A - B / (T[K] + C)   -- fitted to CoolProp EOS
    coefficients  (4.05567   831.586   -31.1067);
    Trange        (155.26  338.12);
}

idealGasHeatCapacity
{
    model         polynomial;
    // Cp [J/(mol.K)] = a0 + a1 T + a2 T^2 + a3 T^3   -- fitted to CoolProp cp0
    coefficients  (19.5705  0.585203  -0.000578931  2.06451e-07);
    Trange        (200  1000);
}

liquidHeatCapacity
{
    model         polynomial;
    // Cp_liq [J/(mol.K)]   -- fitted to CoolProp saturated-liquid cp
    coefficients  (105.289  0.425762  -0.00118795  3.31429e-06);
    Trange        (173  236);
}

triplePoint
{
    T   125.4500;
    P   2.0186;
}

standardThermochemistry
{
    dHf_298   -1.70038e+06;      // J/mol ideal-gas -- provenance: see the structured dHf_298 block below
    dGf_298   -1.57558e+06;      // J/mol  ideal-gas [Joback]
    s_298     409.839;      // J/(mol*K) third-law [DERIVED: (dHf-dGf)/T + CODATA element S]
}

groups { unifac ( { group CF3; count 2; } { group CF2; count 1; } ); joback ( { group C; count 3; } { group F; count 8; } ); }

provenance
{
    dHf_298
    {
        origin           estimated;
        method           "Joback";
        methodVersion    "joback-poling5e-table2-2";
        input            joback;
        inputFingerprint "C:3,F:8";
        uncertainty      { status unquantified; reason "bulk-import band ~9 kJ/mol, primary basis not verified"; }
    }

    constants      "CoolProp 7.2.0 -- Lemmon-JCED-2006";
    vaporPressure  "Antoine fitted to CoolProp EOS saturation, AAD 0.47%";
    idealGasCp     "polynomial fitted to CoolProp cp0, maxerr 0.18%";
    liquidCp       "polynomial fitted to CoolProp sat-liquid cp, maxerr 0.01%";
    triplePoint    "CoolProp reference EOS triple-point T,P";
    preserved      "from prior proposal (NOT CoolProp): standardThermochemistry, groups";
}

cosmo
{
    VT2005
    {
        model       COSMOSAC;
        variant     "2002";
        source      "VT-2005 sigma-profile database (Mullins et al., Ind. Eng. Chem. Res. 45 (2006) 4389; DFT-COSMO), file VT2005-1283-PROF.txt bundled in usnistgov/COSMOSAC; CAS 76-19-7";
        licence     externalRestricted;   // VT-2005: redistribution NOT confirmed -- values NOT shipped
        installed   false;                 // install your own copy: bin/choupo-import-cosmo (-> data/local/cosmo/VT2005/)
    }
}
`,Wr=`/*--------------------------------*- Choupo -*-----------------------*\\
  Component: R22  (C1Cl1F2H1, CAS 75-45-6)
  PROPOSAL TIER -- UNVERIFIED.  Imported from CoolProp 7.2.0 (MIT);
  pure-fluid properties from the published reference EOS below.
  Reference EOS: Kamei-IJT-1995
  NOTE: formation properties (dHf, s_298) and group decompositions
  are NOT provided by CoolProp -> omitted here (a gap, not fabricated).
\\*---------------------------------------------------------------------------*/

name        R22;

//  Review state, MACHINE-READABLE (AP2, 2026-08-05).  This used to
//  live only in the banner above, which the parser discards -- so the
//  engine could not announce it and a run said nothing.
reviewStatus   interim;
reviewReason   importedFromCoolProp720_notCheckedAgainstPrimaries;
formula     C1Cl1F2H1;
CAS         75-45-6;

MW          86.4680;        // kg/kmol  [CoolProp]
Tc          369.2950;        // K        [CoolProp EOS]
Pc          49.90000;        // bar      [CoolProp EOS]
omega       0.22082;        // [-]      [CoolProp EOS]
Tb          232.3395;        // K  normal boiling [CoolProp]
HvapTb      20211.9;        // J/mol  at Tb     [CoolProp]
Vliq        7.2622e-05;        // m3/mol @298K     [CoolProp]

vaporPressure
{
    model         Antoine;
    // log10(Psat [bar]) = A - B / (T[K] + C)   -- fitted to CoolProp EOS
    coefficients  (4.20966   865.775   -26.508);
    Trange        (166.18  361.91);
}

idealGasHeatCapacity
{
    model         polynomial;
    // Cp [J/(mol.K)] = a0 + a1 T + a2 T^2 + a3 T^3   -- fitted to CoolProp cp0
    coefficients  (16.3758  0.169445  -0.000129038  3.6655e-08);
    Trange        (200  1000);
}

liquidHeatCapacity
{
    model         polynomial;
    // Cp_liq [J/(mol.K)]   -- fitted to CoolProp saturated-liquid cp
    coefficients  (84.6139  0.246636  -0.00206312  5.07605e-06);
    Trange        (185  232);
}

triplePoint
{
    T   115.7300;
    P   0.3795;
}

standardThermochemistry
{
    dHf_298   -477210;      // J/mol ideal-gas -- provenance: see the structured dHf_298 block below
    dGf_298   -446450;      // J/mol  ideal-gas [Joback]
    s_298     282.25;      // J/(mol*K) third-law [DERIVED: (dHf-dGf)/T + CODATA element S]
}

groups { joback ( { group CH; count 1; } { group F; count 2; } { group Cl; count 1; } ); }

provenance
{
    dHf_298
    {
        origin           estimated;
        method           "Joback";
        methodVersion    "joback-poling5e-table2-2";
        input            joback;
        inputFingerprint "CH:1,Cl:1,F:2";
        uncertainty      { status unquantified; reason "bulk-import band ~9 kJ/mol, primary basis not verified"; }
    }

    constants      "CoolProp 7.2.0 -- Kamei-IJT-1995";
    vaporPressure  "Antoine fitted to CoolProp EOS saturation, AAD 0.59%";
    idealGasCp     "polynomial fitted to CoolProp cp0, maxerr 0.78%";
    liquidCp       "polynomial fitted to CoolProp sat-liquid cp, maxerr 0.00%";
    triplePoint    "CoolProp reference EOS triple-point T,P";
    preserved      "from prior proposal (NOT CoolProp): standardThermochemistry, groups";
}

cosmo
{
    VT2005
    {
        model       COSMOSAC;
        variant     "2002";
        source      "VT-2005 sigma-profile database (Mullins et al., Ind. Eng. Chem. Res. 45 (2006) 4389; DFT-COSMO), file VT2005-0838-PROF.txt bundled in usnistgov/COSMOSAC; CAS 75-45-6";
        licence     externalRestricted;   // VT-2005: redistribution NOT confirmed -- values NOT shipped
        installed   false;                 // install your own copy: bin/choupo-import-cosmo (-> data/local/cosmo/VT2005/)
    }
}
`,Ur=`/*--------------------------------*- Choupo -*-----------------------*\\
  Component: R236EA  (C3F6H2, CAS 431-63-0)
  PROPOSAL TIER -- UNVERIFIED.  Imported from CoolProp 7.2.0 (MIT);
  pure-fluid properties from the published reference EOS below.
  Reference EOS: Rui-FPE-2013
  NOTE: formation properties (dHf, s_298) and group decompositions
  are NOT provided by CoolProp -> omitted here (a gap, not fabricated).
\\*---------------------------------------------------------------------------*/

name        R236EA;

//  Review state, MACHINE-READABLE (AP2, 2026-08-05).  This used to
//  live only in the banner above, which the parser discards -- so the
//  engine could not announce it and a run said nothing.
reviewStatus   interim;
reviewReason   importedFromCoolProp720_notCheckedAgainstPrimaries;
formula     C3F6H2;
CAS         431-63-0;

MW          152.0384;        // kg/kmol  [CoolProp]
Tc          412.4090;        // K        [CoolProp EOS]
Pc          34.13693;        // bar      [CoolProp EOS]
omega       0.36822;        // [-]      [CoolProp EOS]
Tb          279.3222;        // K  normal boiling [CoolProp]
HvapTb      25138.6;        // J/mol  at Tb     [CoolProp]
Vliq        1.0659e-04;        // m3/mol @298K     [CoolProp]

vaporPressure
{
    model         Antoine;
    // log10(Psat [bar]) = A - B / (T[K] + C)   -- fitted to CoolProp EOS
    coefficients  (4.2829   1035.61   -37.3377);
    Trange        (243.50  404.16);
}

idealGasHeatCapacity
{
    model         polynomial;
    // Cp [J/(mol.K)] = a0 + a1 T + a2 T^2 + a3 T^3   -- fitted to CoolProp cp0
    coefficients  (31.7178  0.425355  -0.000358817  1.09316e-07);
    Trange        (200  1000);
}

liquidHeatCapacity
{
    model         polynomial;
    // Cp_liq [J/(mol.K)]   -- fitted to CoolProp saturated-liquid cp
    coefficients  (274.864  -0.747751  0.00141386  5.16062e-07);
    Trange        (248  279);
}

triplePoint
{
    T   243.0000;
    P   17498.9722;
}

standardThermochemistry
{
    dHf_298   -1.30122e+06;      // J/mol ideal-gas -- provenance: see the structured dHf_298 block below
    dGf_298   -1.19652e+06;      // J/mol  ideal-gas [Joback]
    s_298     405.134;      // J/(mol*K) third-law [DERIVED: (dHf-dGf)/T + CODATA element S]
}

groups { joback ( { group CH; count 2; } { group C; count 1; } { group F; count 6; } ); }

provenance
{
    dHf_298
    {
        origin           estimated;
        method           "Joback";
        methodVersion    "joback-poling5e-table2-2";
        input            joback;
        inputFingerprint "C:1,CH:2,F:6";
        uncertainty      { status unquantified; reason "bulk-import band ~9 kJ/mol, primary basis not verified"; }
    }

    constants      "CoolProp 7.2.0 -- Rui-FPE-2013";
    vaporPressure  "Antoine fitted to CoolProp EOS saturation, AAD 0.45%";
    idealGasCp     "polynomial fitted to CoolProp cp0, maxerr 1.00%";
    liquidCp       "polynomial fitted to CoolProp sat-liquid cp, maxerr 0.00%";
    triplePoint    "CoolProp reference EOS triple-point T,P";
    preserved      "from prior proposal (NOT CoolProp): standardThermochemistry, groups";
}

cosmo
{
    VT2005
    {
        model       COSMOSAC;
        variant     "2002";
        source      "VT-2005 sigma-profile database (Mullins et al., Ind. Eng. Chem. Res. 45 (2006) 4389; DFT-COSMO), file VT2005-1268-PROF.txt bundled in usnistgov/COSMOSAC; CAS 431-63-0";
        licence     externalRestricted;   // VT-2005: redistribution NOT confirmed -- values NOT shipped
        installed   false;                 // install your own copy: bin/choupo-import-cosmo (-> data/local/cosmo/VT2005/)
    }
}
`,zr=`/*--------------------------------*- Choupo -*-----------------------*\\
  Component: R245fa  (C3F5H3, CAS 460-73-1)
  PROPOSAL TIER -- UNVERIFIED.  Imported from CoolProp 7.2.0 (MIT);
  pure-fluid properties from the published reference EOS below.
  Reference EOS: Akasaka-JPCRD-2015-R245fa
  NOTE: formation properties (dHf, s_298) and group decompositions
  are NOT provided by CoolProp -> omitted here (a gap, not fabricated).
\\*---------------------------------------------------------------------------*/

name        R245fa;

//  Review state, MACHINE-READABLE (AP2, 2026-08-05).  This used to
//  live only in the banner above, which the parser discards -- so the
//  engine could not announce it and a run said nothing.
reviewStatus   interim;
reviewReason   importedFromCoolProp720_notCheckedAgainstPrimaries;
formula     C3F5H3;
CAS         460-73-1;

MW          134.0479;        // kg/kmol  [CoolProp]
Tc          427.0100;        // K        [CoolProp EOS]
Pc          36.50995;        // bar      [CoolProp EOS]
omega       0.37760;        // [-]      [CoolProp EOS]
Tb          288.1983;        // K  normal boiling [CoolProp]
HvapTb      26376.8;        // J/mol  at Tb     [CoolProp]
Vliq        1.0015e-04;        // m3/mol @298K     [CoolProp]

vaporPressure
{
    model         Antoine;
    // log10(Psat [bar]) = A - B / (T[K] + C)   -- fitted to CoolProp EOS
    coefficients  (4.29868   1057.97   -41.887);
    Trange        (192.15  418.47);
}

idealGasHeatCapacity
{
    model         polynomial;
    // Cp [J/(mol.K)] = a0 + a1 T + a2 T^2 + a3 T^3   -- fitted to CoolProp cp0
    coefficients  (27.2198  0.342031  -0.000160361  1.43699e-08);
    Trange        (200  1000);
}

liquidHeatCapacity
{
    model         polynomial;
    // Cp_liq [J/(mol.K)]   -- fitted to CoolProp saturated-liquid cp
    coefficients  (173.036  -0.324462  0.00122419  -3.25512e-07);
    Trange        (214  288);
}

triplePoint
{
    T   171.0500;
    P   13.7574;
}

standardThermochemistry
{
    dHf_298   -1.09983e+06;      // J/mol ideal-gas -- provenance: see the structured dHf_298 block below
    dGf_298   -999270;      // J/mol  ideal-gas [Joback]
    s_298     382.96;      // J/(mol*K) third-law [DERIVED: (dHf-dGf)/T + CODATA element S]
}

groups { joback ( { group CH2; count 1; } { group CH; count 1; } { group C; count 1; } { group F; count 5; } ); }

provenance
{
    dHf_298
    {
        origin           estimated;
        method           "Joback";
        methodVersion    "joback-poling5e-table2-2";
        input            joback;
        inputFingerprint "C:1,CH:1,CH2:1,F:5";
        uncertainty      { status unquantified; reason "bulk-import band ~9 kJ/mol, primary basis not verified"; }
    }

    constants      "CoolProp 7.2.0 -- Akasaka-JPCRD-2015-R245fa";
    vaporPressure  "Antoine fitted to CoolProp EOS saturation, AAD 0.43%";
    idealGasCp     "polynomial fitted to CoolProp cp0, maxerr 0.20%";
    liquidCp       "polynomial fitted to CoolProp sat-liquid cp, maxerr 0.00%";
    triplePoint    "CoolProp reference EOS triple-point T,P";
    preserved      "from prior proposal (NOT CoolProp): standardThermochemistry, groups";
}
`,$r=`/*--------------------------------*- Choupo -*-----------------------*\\
  Component: R32  (C1F2H2, CAS 75-10-5)
  PROPOSAL TIER -- UNVERIFIED.  Imported from CoolProp 7.2.0 (MIT);
  pure-fluid properties from the published reference EOS below.
  Reference EOS: TillnerRoth-JPCRD-1997
  NOTE: formation properties (dHf, s_298) and group decompositions
  are NOT provided by CoolProp -> omitted here (a gap, not fabricated).
\\*---------------------------------------------------------------------------*/

name        R32;

//  Review state, MACHINE-READABLE (AP2, 2026-08-05).  This used to
//  live only in the banner above, which the parser discards -- so the
//  engine could not announce it and a run said nothing.
reviewStatus   interim;
reviewReason   importedFromCoolProp720_notCheckedAgainstPrimaries;
formula     C1F2H2;
CAS         75-10-5;

MW          52.0240;        // kg/kmol  [CoolProp]
Tc          351.2550;        // K        [CoolProp EOS]
Pc          57.82645;        // bar      [CoolProp EOS]
omega       0.27690;        // [-]      [CoolProp EOS]
Tb          221.4987;        // K  normal boiling [CoolProp]
HvapTb      19865.8;        // J/mol  at Tb     [CoolProp]
Vliq        5.4135e-05;        // m3/mol @298K     [CoolProp]

vaporPressure
{
    model         Antoine;
    // log10(Psat [bar]) = A - B / (T[K] + C)   -- fitted to CoolProp EOS
    coefficients  (4.40711   872.515   -23.3727);
    Trange        (158.06  344.23);
}

idealGasHeatCapacity
{
    model         polynomial;
    // Cp [J/(mol.K)] = a0 + a1 T + a2 T^2 + a3 T^3   -- fitted to CoolProp cp0
    coefficients  (20.223  0.0740064  2.40949e-05  -3.33526e-08);
    Trange        (200  1000);
}

liquidHeatCapacity
{
    model         polynomial;
    // Cp_liq [J/(mol.K)]   -- fitted to CoolProp saturated-liquid cp
    coefficients  (98.5624  -0.127588  -0.000178984  1.93582e-06);
    Trange        (176  221);
}

triplePoint
{
    T   136.3400;
    P   47.9999;
}

standardThermochemistry
{
    dHf_298   -456190;      // J/mol ideal-gas -- provenance: see the structured dHf_298 block below
    dGf_298   -432080;      // J/mol  ideal-gas [Joback]
    s_298     258.355;      // J/(mol*K) third-law [DERIVED: (dHf-dGf)/T + CODATA element S]
}

groups { joback ( { group CH2; count 1; } { group F; count 2; } ); }

provenance
{
    dHf_298
    {
        origin           estimated;
        method           "Joback";
        methodVersion    "joback-poling5e-table2-2";
        input            joback;
        inputFingerprint "CH2:1,F:2";
        uncertainty      { status unquantified; reason "bulk-import band ~9 kJ/mol, primary basis not verified"; }
    }

    constants      "CoolProp 7.2.0 -- TillnerRoth-JPCRD-1997";
    vaporPressure  "Antoine fitted to CoolProp EOS saturation, AAD 0.65%";
    idealGasCp     "polynomial fitted to CoolProp cp0, maxerr 2.71%";
    liquidCp       "polynomial fitted to CoolProp sat-liquid cp, maxerr 0.00%";
    triplePoint    "CoolProp reference EOS triple-point T,P";
    preserved      "from prior proposal (NOT CoolProp): standardThermochemistry, groups";
}

cosmo
{
    VT2005
    {
        model       COSMOSAC;
        variant     "2002";
        source      "VT-2005 sigma-profile database (Mullins et al., Ind. Eng. Chem. Res. 45 (2006) 4389; DFT-COSMO), file VT2005-0845-PROF.txt bundled in usnistgov/COSMOSAC; CAS 75-10-5";
        licence     externalRestricted;   // VT-2005: redistribution NOT confirmed -- values NOT shipped
        installed   false;                 // install your own copy: bin/choupo-import-cosmo (-> data/local/cosmo/VT2005/)
    }
}
`,Yr=`/*--------------------------------*- Choupo -*-----------------------*\\
  Component: R365MFC  (C4F5H5, CAS 406-58-6)
  PROPOSAL TIER -- UNVERIFIED.  Imported from CoolProp 7.2.0 (MIT);
  pure-fluid properties from the published reference EOS below.
  Reference EOS: Lemmon-JCED-2016-365227
  NOTE: formation properties (dHf, s_298) and group decompositions
  are NOT provided by CoolProp -> omitted here (a gap, not fabricated).
\\*---------------------------------------------------------------------------*/

name        R365MFC;

//  Review state, MACHINE-READABLE (AP2, 2026-08-05).  This used to
//  live only in the banner above, which the parser discards -- so the
//  engine could not announce it and a run said nothing.
reviewStatus   interim;
reviewReason   importedFromCoolProp720_notCheckedAgainstPrimaries;
formula     C4F5H5;
CAS         406-58-6;

MW          148.0745;        // kg/kmol  [CoolProp]
Tc          460.0032;        // K        [CoolProp EOS]
Pc          32.66392;        // bar      [CoolProp EOS]
omega       0.37745;        // [-]      [CoolProp EOS]
Tb          313.3431;        // K  normal boiling [CoolProp]
HvapTb      27865.4;        // J/mol  at Tb     [CoolProp]
Vliq        1.1780e-04;        // m3/mol @298K     [CoolProp]

vaporPressure
{
    model         Antoine;
    // log10(Psat [bar]) = A - B / (T[K] + C)   -- fitted to CoolProp EOS
    coefficients  (4.25882   1154.69   -41.976);
    Trange        (239.50  450.80);
}

idealGasHeatCapacity
{
    model         polynomial;
    // Cp [J/(mol.K)] = a0 + a1 T + a2 T^2 + a3 T^3   -- fitted to CoolProp cp0
    coefficients  (33.2  0.453273  -0.000288752  6.80129e-08);
    Trange        (200  1000);
}

liquidHeatCapacity
{
    model         polynomial;
    // Cp_liq [J/(mol.K)]   -- fitted to CoolProp saturated-liquid cp
    coefficients  (183.294  -0.157346  0.000772277  -4.36639e-08);
    Trange        (244  313);
}

triplePoint
{
    T   239.0000;
    P   2478.4153;
}

standardThermochemistry
{
    dHf_298   -1.12394e+06;      // J/mol ideal-gas -- provenance: see the structured dHf_298 block below
    dGf_298   -985570;      // J/mol  ideal-gas [Joback]
    s_298     392.565;      // J/(mol*K) third-law [DERIVED: (dHf-dGf)/T + CODATA element S]
}

groups { unifac ( { group CH3; count 1; } { group CH2; count 1; } { group CF3; count 1; } { group CF2; count 1; } ); joback ( { group CH3; count 1; } { group CH2; count 1; } { group C; count 2; } { group F; count 5; } ); }

provenance
{
    dHf_298
    {
        origin           estimated;
        method           "Joback";
        methodVersion    "joback-poling5e-table2-2";
        input            joback;
        inputFingerprint "C:2,CH2:1,CH3:1,F:5";
        uncertainty      { status unquantified; reason "bulk-import band ~9 kJ/mol, primary basis not verified"; }
    }

    constants      "CoolProp 7.2.0 -- Lemmon-JCED-2016-365227";
    vaporPressure  "Antoine fitted to CoolProp EOS saturation, AAD 0.60%";
    idealGasCp     "polynomial fitted to CoolProp cp0, maxerr 2.09%";
    liquidCp       "polynomial fitted to CoolProp sat-liquid cp, maxerr 0.00%";
    triplePoint    "CoolProp reference EOS triple-point T,P";
    preserved      "from prior proposal (NOT CoolProp): standardThermochemistry, groups";
}
`,Qr=`/*--------------------------------*- Choupo -*-----------------------*\\
  Component: RC318  (C4F8, CAS 115-25-3)
  PROPOSAL TIER -- UNVERIFIED.  Imported from CoolProp 7.2.0 (MIT);
  pure-fluid properties from the published reference EOS below.
  Reference EOS: Platzer-BOOK-1990
  NOTE: formation properties (dHf, s_298) and group decompositions
  are NOT provided by CoolProp -> omitted here (a gap, not fabricated).
\\*---------------------------------------------------------------------------*/

name        RC318;

//  Review state, MACHINE-READABLE (AP2, 2026-08-05).  This used to
//  live only in the banner above, which the parser discards -- so the
//  engine could not announce it and a run said nothing.
reviewStatus   interim;
reviewReason   importedFromCoolProp720_notCheckedAgainstPrimaries;
formula     C4F8;
CAS         115-25-3;

MW          200.0312;        // kg/kmol  [CoolProp]
Tc          388.3710;        // K        [CoolProp EOS]
Pc          27.77531;        // bar      [CoolProp EOS]
omega       0.35535;        // [-]      [CoolProp EOS]
Tb          267.1753;        // K  normal boiling [CoolProp]
HvapTb      23355.0;        // J/mol  at Tb     [CoolProp]
Vliq        1.3351e-04;        // m3/mol @298K     [CoolProp]

vaporPressure
{
    model         Antoine;
    // log10(Psat [bar]) = A - B / (T[K] + C)   -- fitted to CoolProp EOS
    coefficients  (4.15866   960.896   -35.8989);
    Trange        (233.85  380.60);
}

idealGasHeatCapacity
{
    model         polynomial;
    // Cp [J/(mol.K)] = a0 + a1 T + a2 T^2 + a3 T^3   -- fitted to CoolProp cp0
    coefficients  (24.2038  0.580691  -0.000506619  1.54406e-07);
    Trange        (200  1000);
}

liquidHeatCapacity
{
    model         polynomial;
    // Cp_liq [J/(mol.K)]   -- fitted to CoolProp saturated-liquid cp
    coefficients  (663.434  -6.06492  0.0245878  -3.09384e-05);
    Trange        (238  267);
}

triplePoint
{
    T   233.3500;
    P   19461.0561;
}

standardThermochemistry
{
    dHf_298   -1.62819e+06;      // J/mol ideal-gas -- provenance: see the structured dHf_298 block below
    dGf_298   -1.57212e+06;      // J/mol  ideal-gas [Joback]
    s_298     646.1;      // J/(mol*K) third-law [DERIVED: (dHf-dGf)/T + CODATA element S]
}

groups { unifac ( { group CF2; count 4; } ); joback ( { group rC; count 4; } { group F; count 8; } ); }

provenance
{
    dHf_298
    {
        origin           estimated;
        method           "Joback";
        methodVersion    "joback-poling5e-table2-2";
        input            joback;
        inputFingerprint "F:8,rC:4";
        uncertainty      { status unquantified; reason "bulk-import band ~9 kJ/mol, primary basis not verified -- AND the 4-ring strain the method cannot see: the compiled literature sits ~85 kJ/mol away (see bestCompiledValue)"; }
        //  Ring-class ruling 2026-08-03: the best available COMPILED value is
        //  recorded here for the curator, but it is NOT promoted -- fluorine
        //  thermochemistry compilations disagree at the ~10 kJ level and the
        //  primary-source-per-value rule is not broken for a plausible number
        //  (zero corpus consumers today, so nothing is waiting on it).
        bestCompiledValue
        {
            value              -1543000;      // J/mol, JANAF-class compilations
            status             compiled;
            source             "JANAF-class thermochemical tables (c-C4F8, gas)";
            uncertainty        "~10 kJ/mol spread between compilations";
            promotionBlockedBy primarySourceUnresolved;
        }
    }

    constants      "CoolProp 7.2.0 -- Platzer-BOOK-1990";
    vaporPressure  "Antoine fitted to CoolProp EOS saturation, AAD 0.36%";
    idealGasCp     "polynomial fitted to CoolProp cp0, maxerr 0.00%";
    liquidCp       "polynomial fitted to CoolProp sat-liquid cp, maxerr 0.00%";
    triplePoint    "CoolProp reference EOS triple-point T,P";
    preserved      "from prior proposal (NOT CoolProp): standardThermochemistry, groups";
}

cosmo
{
    VT2005
    {
        model       COSMOSAC;
        variant     "2002";
        source      "VT-2005 sigma-profile database (Mullins et al., Ind. Eng. Chem. Res. 45 (2006) 4389; DFT-COSMO), file VT2005-1285-PROF.txt bundled in usnistgov/COSMOSAC; CAS 115-25-3";
        licence     externalRestricted;   // VT-2005: redistribution NOT confirmed -- values NOT shipped
        installed   false;                 // install your own copy: bin/choupo-import-cosmo (-> data/local/cosmo/VT2005/)
    }
}
`,Zr=`/*--------------------------------*- Choupo -*-----------------------*\\
  Component: Atomic sulfur (H2S/Claus combustion chain)
  Generated by bin/import_nasa.py from NASA-7 polynomial data
  (BURCAT.THR).  No liquid phase at process conditions ---
  the entry is tagged \`role nonvolatile;\` so vapour-pressure routines
  never get called.  dHf_298 and s_298 from NASA-7 integration
  constants at T = 298.15 K.
\\*---------------------------------------------------------------------------*/

name           S;
formula        S;
CAS            n/a;        // radical registry number: pending curation

MW             32.06;       // kg/kmol
role        nonvolatile;
tags           ( radical gasPhase combustion sulfur );

standardThermochemistry
{
    dHf_298    276978.4213;            // J/mol  -- ideal-gas reference
    s_298      167.8312;           // J/(mol·K)  -- third-law absolute
}

idealGasHeatCapacity
{
    model         polynomial;
    coefficients  (2.575614e+01   -8.338141e-03   5.098220e-06   -1.047269e-09);
    Trange        (250  3000);
}
`,Xr=`/*--------------------------------*- Choupo -*-----------------------*\\
  Component: Disulfur (sulfur vapour dimer; Claus furnace)
  Generated by bin/import_nasa.py from NASA-7 polynomial data
  (BURCAT.THR).  No liquid phase at process conditions ---
  the entry is tagged \`role nonvolatile;\` so vapour-pressure routines
  never get called.  dHf_298 and s_298 from NASA-7 integration
  constants at T = 298.15 K.
\\*---------------------------------------------------------------------------*/

name           S2;
formula        S2;
CAS            23550-45-0;

MW             64.12;       // kg/kmol
role        nonvolatile;
tags           ( gasPhase combustion sulfur );

standardThermochemistry
{
    dHf_298    128599.2669;            // J/mol  -- ideal-gas reference
    s_298      228.1654;           // J/(mol·K)  -- third-law absolute
}

idealGasHeatCapacity
{
    model         polynomial;
    coefficients  (2.668876e+01   2.577297e-02   -2.184278e-05   6.847438e-09);
    Trange        (250  3000);
}
`,ns=`/*--------------------------------*- Choupo -*-----------------------*\\
  Component: SF6  (F6S1, CAS 2551-62-4)
  PROPOSAL TIER -- UNVERIFIED.  Imported from CoolProp 7.2.0 (MIT);
  pure-fluid properties from the published reference EOS below.
  Reference EOS: Guder-JPCRD-2009
  NOTE: formation properties (dHf, s_298) and group decompositions
  are NOT provided by CoolProp -> omitted here (a gap, not fabricated).
\\*---------------------------------------------------------------------------*/

name        SF6;

//  Review state, MACHINE-READABLE (AP2, 2026-08-05).  This used to
//  live only in the banner above, which the parser discards -- so the
//  engine could not announce it and a run said nothing.
reviewStatus   interim;
reviewReason   importedFromCoolProp720_notCheckedAgainstPrimaries;
formula     F6S1;
CAS         2551-62-4;

MW          146.0554;        // kg/kmol  [CoolProp]
Tc          318.7232;        // K        [CoolProp EOS]
Pc          37.54983;        // bar      [CoolProp EOS]
omega       0.21000;        // [-]      [CoolProp EOS]
Vliq        1.0898e-04;        // m3/mol @298K     [CoolProp]

vaporPressure
{
    model         Antoine;
    // log10(Psat [bar]) = A - B / (T[K] + C)   -- fitted to CoolProp EOS
    coefficients  (4.3727   889.144   -1.62494);
    Trange        (224.06  312.35);
}

idealGasHeatCapacity
{
    model         polynomial;
    // Cp [J/(mol.K)] = a0 + a1 T + a2 T^2 + a3 T^3   -- fitted to CoolProp cp0
    coefficients  (-9.80176  0.510177  -0.000583118  2.32976e-07);
    Trange        (228  1000);
}

liquidHeatCapacity
{
    model         polynomial;
    // Cp_liq [J/(mol.K)]   -- fitted to CoolProp saturated-liquid cp
    coefficients  (-891.48  12.2908  -0.0512894  7.42171e-05);
    Trange        (229  271);
}

triplePoint
{
    T   223.5550;
    P   231424.4740;
}

provenance
{
    constants      "CoolProp 7.2.0 -- Guder-JPCRD-2009";
    vaporPressure  "Antoine fitted to CoolProp EOS saturation, AAD 0.18%";
    idealGasCp     "polynomial fitted to CoolProp cp0, maxerr 1.41%";
    liquidCp       "polynomial fitted to CoolProp sat-liquid cp, maxerr 0.03%";
    triplePoint    "CoolProp reference EOS triple-point T,P";
}
`,es=`/*--------------------------------*- Choupo -*-----------------------*\\
  Component: Mercapto radical (H2S oxidation chain carrier)
  Generated by bin/import_nasa.py from NASA-7 polynomial data
  (BURCAT.THR).  No liquid phase at process conditions ---
  the entry is tagged \`role nonvolatile;\` so vapour-pressure routines
  never get called.  dHf_298 and s_298 from NASA-7 integration
  constants at T = 298.15 K.
\\*---------------------------------------------------------------------------*/

name           SH;
formula        SH;
CAS            n/a;        // radical registry number: pending curation

MW             33.068;       // kg/kmol
role        nonvolatile;
tags           ( radical gasPhase combustion sulfur );

standardThermochemistry
{
    dHf_298    141869.8402;            // J/mol  -- ideal-gas reference
    s_298      195.7510;           // J/(mol·K)  -- third-law absolute
}

idealGasHeatCapacity
{
    model         polynomial;
    coefficients  (3.681202e+01   -2.181727e-02   2.603521e-05   -8.282050e-09);
    Trange        (250  3000);
}
`,os=`/*--------------------------------*- Choupo -*-----------------------*\\
  Component: Sulfur monoxide radical (SO2 formation gateway)
  Generated by bin/import_nasa.py from NASA-7 polynomial data
  (BURCAT.THR).  No liquid phase at process conditions ---
  the entry is tagged \`role nonvolatile;\` so vapour-pressure routines
  never get called.  dHf_298 and s_298 from NASA-7 integration
  constants at T = 298.15 K.
\\*---------------------------------------------------------------------------*/

name           SO;
formula        SO;
CAS            n/a;        // radical registry number: pending curation

MW             48.059;       // kg/kmol
role        nonvolatile;
tags           ( radical gasPhase combustion sulfur );

standardThermochemistry
{
    dHf_298    4760.2787;            // J/mol  -- ideal-gas reference
    s_298      221.9404;           // J/(mol·K)  -- third-law absolute
}

idealGasHeatCapacity
{
    model         polynomial;
    coefficients  (2.406302e+01   2.550582e-02   -1.842887e-05   4.948120e-09);
    Trange        (250  3000);
}
`,as=`/*--------------------------------*- Choupo -*-----------------------*\\
  Component: Sulfur dioxide  (SO2, CAS 7446-09-5)

  Primary product of combusting S-bearing fuels; feedstock for
  sulfuric-acid manufacture (contact process: SO2 + 1/2 O2 -> SO3,
  then SO3 + H2O -> H2SO4).  The SO2 / SO3 equilibrium at 600-800 K
  with V2O5 catalyst is the canonical exothermic-equilibrium teaching
  example.
  Sources: constants (Tc, Pc, omega, MW, Tb) cross-checked against the
  CoolProp 7.2.0 reference equation of state (MIT-licensed); ideal-gas
  formation properties (dHf_298, s_298) from NASA TM-4513 (McBride-
  Gordon-Reno 1993).
\\*---------------------------------------------------------------------------*/

name        SO2;
formula     SO2;
CAS         7446-09-5;

// role solute (v0.28+): in a water solvent the K-value comes from
// HenrysLaw/SO2-water.dat instead of Antoine/Raoult.
role        solute;

MW          64.065;            // kg/kmol
Tc          430.75;             // K
Pc          78.84;              // bar
omega       0.245;              // [-]
Tb          263.13;             // K
HvapTb      24940;              // J/mol
Vliq        4.39e-5;            // m^3/mol

standardThermochemistry
{
    dHf_298    -296830.0;       // J/mol  -- ideal-gas reference
    s_298      248.22;          // J/(mol·K)
}

vaporPressure
{
    model         Antoine;
    coefficients  (4.40718   999.900   -35.960);
    Trange        (199  263);
}

idealGasHeatCapacity
{
    model         polynomial;
    coefficients  (23.85   6.699e-2   -4.961e-5   1.328e-8);
    Trange        (250  1500);
}

cosmo
{
    VT2005
    {
        model       COSMOSAC;
        variant     "2002";
        source      "VT-2005 sigma-profile database (Mullins et al., Ind. Eng. Chem. Res. 45 (2006) 4389; DFT-COSMO), file VT2005-0389-PROF.txt bundled in usnistgov/COSMOSAC; CAS 7446-09-5";
        licence     externalRestricted;   // VT-2005: redistribution NOT confirmed -- values NOT shipped
        installed   false;                 // install your own copy: bin/choupo-import-cosmo (-> data/local/cosmo/VT2005/)
    }
}
`,ts=`/*--------------------------------*- Choupo -*-----------------------*\\
  Component: Sulfur trioxide (SO2 oxidation; acid dew point)
  Generated by bin/import_nasa.py from NASA-7 polynomial data
  (BURCAT.THR).  No liquid phase at process conditions ---
  the entry is tagged \`role nonvolatile;\` so vapour-pressure routines
  never get called.  dHf_298 and s_298 from NASA-7 integration
  constants at T = 298.15 K.
\\*---------------------------------------------------------------------------*/

name           SO3;
formula        SO3;
CAS            7446-11-9;

MW             80.057;       // kg/kmol
role        nonvolatile;
tags           ( gasPhase combustion sulfur );

standardThermochemistry
{
    dHf_298    -395897.7436;            // J/mol  -- ideal-gas reference
    s_298      256.5455;           // J/(mol·K)  -- third-law absolute
}

idealGasHeatCapacity
{
    model         polynomial;
    coefficients  (2.165909e+01   1.233941e-01   -9.445575e-05   2.536505e-08);
    Trange        (250  3000);
}
`,is=`/*--------------------------------*- Choupo -*-----------------------*\\
  Component: Xe  (Xe1, CAS 7440-63-3)
  PROPOSAL TIER -- UNVERIFIED.  Imported from CoolProp 7.2.0 (MIT);
  pure-fluid properties from the published reference EOS below.
  Reference EOS: Lemmon-JCED-2006
  NOTE: formation properties (dHf, s_298) and group decompositions
  are NOT provided by CoolProp -> omitted here (a gap, not fabricated).
\\*---------------------------------------------------------------------------*/

name        Xe;

//  Review state, MACHINE-READABLE (AP2, 2026-08-05).  This used to
//  live only in the banner above, which the parser discards -- so the
//  engine could not announce it and a run said nothing.
reviewStatus   interim;
reviewReason   importedFromCoolProp720_notCheckedAgainstPrimaries;
formula     Xe1;
CAS         7440-63-3;

MW          131.2930;        // kg/kmol  [CoolProp]
Tc          289.7326;        // K        [CoolProp EOS]
Pc          58.41914;        // bar      [CoolProp EOS]
omega       0.00363;        // [-]      [CoolProp EOS]
Tb          165.0513;        // K  normal boiling [CoolProp]
HvapTb      12549.8;        // J/mol  at Tb     [CoolProp]

vaporPressure
{
    model         Antoine;
    // log10(Psat [bar]) = A - B / (T[K] + C)   -- fitted to CoolProp EOS
    coefficients  (4.11264   689.416   2.91403);
    Trange        (161.90  283.94);
}

idealGasHeatCapacity
{
    model         polynomial;
    // Cp [J/(mol.K)] = a0 + a1 T + a2 T^2 + a3 T^3   -- fitted to CoolProp cp0
    coefficients  (20.7862  1.60711e-17  -5.10219e-21  1.15543e-23);
    Trange        (200  1000);
}

liquidHeatCapacity
{
    model         polynomial;
    // Cp_liq [J/(mol.K)]   -- fitted to CoolProp saturated-liquid cp
    coefficients  (60.8815  -0.177491  0.000160726  1.9086e-06);
    Trange        (166  165);
}

triplePoint
{
    T   161.4000;
    P   81747.7991;
}

provenance
{
    constants      "CoolProp 7.2.0 -- Lemmon-JCED-2006";
    vaporPressure  "Antoine fitted to CoolProp EOS saturation, AAD 0.41%";
    idealGasCp     "polynomial fitted to CoolProp cp0, maxerr 0.00%";
    liquidCp       "polynomial fitted to CoolProp sat-liquid cp, maxerr 0.00%";
    triplePoint    "CoolProp reference EOS triple-point T,P";
}
`,rs=`/*--------------------------------*- Choupo -*-----------------------*\\
  Component: Acetaldehyde CH3CHO (partial-oxidation intermediate; GAS-PHASE combustion entry -- liquid/Psat blocks pending curation for process use)
  Generated by bin/import_nasa.py from NASA-7 polynomial data
  (GRI-Mech Version 3.0 Thermodynamics released 7/30/99).  No liquid phase at process conditions ---
  the entry is tagged \`role nonvolatile;\` so vapour-pressure routines
  never get called.  dHf_298 and s_298 from NASA-7 integration
  constants at T = 298.15 K.
\\*---------------------------------------------------------------------------*/

name           acetaldehyde;
formula        C2H4O;
CAS            75-07-0;

MW             44.053;       // kg/kmol
role        nonvolatile;
tags           ( gasPhase combustion );

standardThermochemistry
{
    dHf_298    -166189.0500;            // J/mol  -- ideal-gas reference
    s_298      263.9507;           // J/(mol·K)  -- third-law absolute
}

idealGasHeatCapacity
{
    model         polynomial;
    coefficients  (1.297940e+01   1.631205e-01   -7.730506e-05   1.346679e-08);
    Trange        (250  3000);
}

groups
{
    unifac ( { group CH3; count 1; } { group CHO; count 1; } );   // added from data/groupEstimative (UNIFAC decomposition; vocab-checked vs groups.dat)
}

cosmo
{
    VT2005
    {
        model       COSMOSAC;
        variant     "2002";
        source      "VT-2005 sigma-profile database (Mullins et al., Ind. Eng. Chem. Res. 45 (2006) 4389; DFT-COSMO), file VT2005-0406-PROF.txt bundled in usnistgov/COSMOSAC; CAS 75-07-0";
        licence     externalRestricted;   // VT-2005: redistribution NOT confirmed -- values NOT shipped
        installed   false;                 // install your own copy: bin/choupo-import-cosmo (-> data/local/cosmo/VT2005/)
    }
}
`,ss=`/*--------------------------------*- Choupo -*-----------------------*\\
  Component: Acetic Acid  (CH3COOH, C2H4O2, CAS 64-19-7)
  Note: vapour-phase dimerisation is not a pure-component property and is
        therefore not declared in this component record.  Reactive VLE
        formulations may activate the curated vapour-association
        equilibrium from chemistry/ (aceticAcid-dissolution.dat's
        vapourDimerisation block).
  Sources: critical constants (Tc/Pc/omega/Tb/HvapTb/Vliq), Antoine
           coefficients (marked 'individual literature value' at the block),
           Cp polynomials and the ideal-gas formation datum -- primary
           re-citation pending (IST review).  UNIQUAC r,q are the van der
           Waals values (Abrams-Prausnitz) as used by Popken 2000, Table 2.
\\*---------------------------------------------------------------------------*/

name        aceticAcid;
formula     C2H4O2;
CAS         64-19-7;

MW          60.052;
Tc          591.95;
Pc          57.86;
omega       0.4665;
Tb          391.05;
HvapTb      24390;
Vliq        5.752e-5;          // 57.52 cm³/mol at 25°C


standardThermochemistry
{
    dHf_298   -432250.0;        // J/mol  -- ideal-gas reference
    s_298     282.500;         // J/(mol·K)  -- third-law absolute
}
vaporPressure
{
    model         Antoine;
    // log10(Psat [bar]) = A - B / (T[K] + C)   (individual literature value)
    coefficients  (4.68206   1642.540   -39.764);
    Trange        (290  392);
}

idealGasHeatCapacity
{
    model         polynomial;
    coefficients  (4.840   0.2549   -1.753e-4   4.949e-8);
    Trange        (200  1500);
}

liquidHeatCapacity
{
    model         polynomial;
    coefficients  (123.1);          // ~ 123 J/(mol·K) average
    Trange        (290  390);
}

groups
{
    unifac ( { group CH3; count 1; } { group COOH; count 1; } );
    joback ( { group CH3; count 1; } { group acid; count 1; } );
}

uniquac
{
    r   2.2024;
    q   2.0720;     // van der Waals (Abrams-Prausnitz), as used by Popken 2000 Table 2
}

cosmo
{
    VT2005
    {
        model       COSMOSAC;
        variant     "2002";
        source      "VT-2005 sigma-profile database (Mullins et al., Ind. Eng. Chem. Res. 45 (2006) 4389; DFT-COSMO), file VT2005-0583-PROF.txt bundled in usnistgov/COSMOSAC; CAS 64-19-7";
        licence     externalRestricted;   // VT-2005: redistribution NOT confirmed -- values NOT shipped
        installed   false;                 // install your own copy: bin/choupo-import-cosmo (-> data/local/cosmo/VT2005/)
    }
}

// ---- Aqueous-speciation FACTS (substance-level, classifier-read) ----
// The canonical set of aqueous speciation equilibria this component
// participates in (HAc = Ac- + H+, pKa 4.756).  The VAPOUR dimerisation
// 2 HAc(g) = (HAc)2(g) is a vapour-phase reaction and deliberately NOT
// part of this fact (it lives on the gas-liquid record).  The typed
// bridge delivers the acetate family total, HAc = Acetate- + H+.
aqueousSpeciation  aceticAcid;
aqueousMapping ( { species Acetate; nu 1; } { species H; nu 1; } );
`,ls=`/*--------------------------------*- Choupo -*-----------------------*\\
  Component: Acetone  (C3H6O, CAS 67-64-1)
  Sources:   constants + vapour pressure cross-checked against CoolProp
             7.2.0 (MIT) within ~1%.  Ideal-gas formation properties and
             liquid Cp are individual literature values -- primary
             re-citation pending (IST review).
\\*---------------------------------------------------------------------------*/

name        acetone;
formula     C3H6O;
CAS         67-64-1;



MW          58.080;        // kg/kmol
Tc          508.10;        // K
Pc          47.01;         // bar
omega       0.3070;        // [-]   acentric factor
Tb          329.22;        // K     normal boiling point
HvapTb      29100;         // J/mol latent heat at Tb
Vliq        7.35e-5;       // m³/mol liquid molar volume at 25 °C (73.5 cm³/mol)

standardThermochemistry
{
    dHf_298   -217100.0;      // J/mol  -- ideal-gas reference
    s_298     295.30;         // J/(mol·K) -- third-law absolute
}
vaporPressure
{
    model         Antoine;
    // log10(Psat [bar]) = A - B / (T[K] + C)   -- Psat(Tb) = 1.009 bar (check)
    coefficients  (4.42448   1312.253   -32.445);
    Trange        (259.16  507.60);
}

idealGasHeatCapacity
{
    model         polynomial;
    // Cp [J/(mol·K)] = a0 + a1*T + a2*T^2 + a3*T^3   -- Cp(298) = 73.4
    coefficients  (6.301   0.2606   -1.253e-4   2.038e-8);
    Trange        (200  1500);
}

liquidHeatCapacity
{
    model         polynomial;
    // approximate constant ~125 J/(mol·K) over 250-330 K
    coefficients  (125.0);
    Trange        (250  330);
}

provenance
{
    vaporPressure  "cross-checked against CoolProp 7.2.0 (MIT) within ~1%";
    constants      "cross-checked against CoolProp 7.2.0 (MIT) within ~1%";
    standardThermochemistry "individual literature value -- primary re-citation pending (IST review)";
}

// Molecular group decomposition, per method (the curation RECIPE: a group-
// contribution estimator / UNIFAC reads it from HERE instead of re-typed per
// case).  Method-keyed because Joback groups != UNIFAC groups.  Acetone = CH3-CO-CH3.
groups
{
    joback ( { group CH3; count 2; } { group ketone; count 1; } );
    unifac ( { group CH3; count 1; } { group CH3CO; count 1; } );
}

diffusionVolume  67.7;   // Fuller (FSG revised: 3C+6H+O) -- enables Lewis-number wet-bulb

cosmo
{
    VT2005
    {
        model       COSMOSAC;
        variant     "2002";
        source      "VT-2005 sigma-profile database (Mullins et al., Ind. Eng. Chem. Res. 45 (2006) 4389; DFT-COSMO), file VT2005-0438-PROF.txt bundled in usnistgov/COSMOSAC; CAS 67-64-1";
        licence     externalRestricted;   // VT-2005: redistribution NOT confirmed -- values NOT shipped
        installed   false;                 // install your own copy: bin/choupo-import-cosmo (-> data/local/cosmo/VT2005/)
    }
}
`,ds=`/*--------------------------------*- Choupo -*-----------------------*\\
  Component: Acetylene  (C2H2, CAS 74-86-2)

  Triple bond C=C; the lightest endothermic hydrocarbon
  (dHf_298 = +228 kJ/mol).  Burns with a sooty oxy-acetylene flame
  near 3100 K --- the textbook high-T combustion species.
  Sources: ideal-gas formation properties (dHf_298, s_298) cross-checked
  against NASA TM-4513 (McBride-Gordon-Reno 1993); constants (Tc, Pc,
  omega, Tb, Antoine) are individual literature values -- primary
  re-citation pending (IST review).
\\*---------------------------------------------------------------------------*/

name        acetylene;
formula     C2H2;
CAS         74-86-2;

MW          26.038;           // kg/kmol
Tc          308.30;            // K
Pc          61.40;             // bar
omega       0.190;             // [-]
Tb          188.40;            // K  (sublimation point at 1 atm; metastable liquid above 192 K)
HvapTb      16700;             // J/mol
Vliq        4.20e-5;           // m^3/mol

standardThermochemistry
{
    dHf_298    228200.0;       // J/mol  -- ideal-gas reference
    s_298      200.93;         // J/(mol·K)  -- third-law absolute
}

vaporPressure
{
    model         Antoine;
    coefficients  (4.66248   909.79   -7.947);
    Trange        (192  308);
}

idealGasHeatCapacity
{
    model         polynomial;
    coefficients  (26.82   7.578e-2   -5.007e-5   1.412e-8);
    Trange        (250  1500);
}

groups
{
    joback ( { group yneCH; count 2; } );
}

// Friendly-name aliases -- resolved to this file via the generated ALIASES index.
aliases ( ethyne C2H2 );

cosmo
{
    VT2005
    {
        model       COSMOSAC;
        variant     "2002";
        source      "VT-2005 sigma-profile database (Mullins et al., Ind. Eng. Chem. Res. 45 (2006) 4389; DFT-COSMO), file VT2005-0224-PROF.txt bundled in usnistgov/COSMOSAC; CAS 74-86-2";
        licence     externalRestricted;   // VT-2005: redistribution NOT confirmed -- values NOT shipped
        installed   false;                 // install your own copy: bin/choupo-import-cosmo (-> data/local/cosmo/VT2005/)
    }
}
`,cs=`/*--------------------------------*- Choupo -*-----------------------*\\
  Mineral: akermanite (Ca2MgSi2O7) -- unified substance file.
  One canonical record per chemical identity; the solid-phase dissolution
  equilibrium (Ksp) lives here as a typed solidPhase (roadmap Phase D).
  Migrated from chemistry/mineralSolubility/ with values preserved verbatim.
\\*---------------------------------------------------------------------------*/
name akermanite;
formula "Ca2MgSi2O7";

solidPhases
{
    akermanite
    {
        dissolutionReaction { masters ( { ion Mg; nu 1; } { ion Ca; nu 2; } { ion H4SiO4; nu 2; } { ion H; nu -6; } ); nuWater -1; }
        equilibrium { logK25 45.23; dH -289000; source "USGS PHREEQC pitzer.dat/phreeqc.dat (public domain); reaction re-expressed to Choupo master basis from Akermanite"; }
    }
}
`,ps=`/*--------------------------------*- Choupo -*-----------------------*\\
  Mineral: anthophyllite (Mg7Si8O22(OH)2) -- unified substance file.
  One canonical record per chemical identity; the solid-phase dissolution
  equilibrium (Ksp) lives here as a typed solidPhase (roadmap Phase D).
  Migrated from chemistry/mineralSolubility/ with values preserved verbatim.
\\*---------------------------------------------------------------------------*/
name anthophyllite;
formula "Mg7Si8O22(OH)2";

solidPhases
{
    anthophyllite
    {
        dissolutionReaction { masters ( { ion Mg; nu 7; } { ion H4SiO4; nu 8; } { ion H; nu -14; } ); nuWater -8; }
        equilibrium { logK25 66.8; dH -483000; source "USGS PHREEQC pitzer.dat/phreeqc.dat (public domain); reaction re-expressed to Choupo master basis from Anthophyllite"; }
    }
}
`,ms=`/*--------------------------------*- Choupo -*-----------------------*\\
  Mineral: artinite (Mg2CO3(OH)2:3H2O) -- unified substance file.
  One canonical record per chemical identity; the solid-phase dissolution
  equilibrium (Ksp) lives here as a typed solidPhase (roadmap Phase D).
  Migrated from chemistry/mineralSolubility/ with values preserved verbatim.
\\*---------------------------------------------------------------------------*/
name artinite;
formula "Mg2CO3(OH)2:3H2O";

solidPhases
{
    artinite
    {
        dissolutionReaction { masters ( { ion HCO3; nu 1; } { ion Mg; nu 2; } { ion H; nu -3; } ); nuWater 5; }
        equilibrium { logK25 19.66; dH -130000; source "USGS PHREEQC pitzer.dat/phreeqc.dat (public domain); reaction re-expressed to Choupo master basis from Artinite"; }
    }
}
`,us=`/*--------------------------------*- Choupo -*-----------------------*\\
  Mineral: barite (BaSO4) -- unified substance file.
  One canonical record per chemical identity; the solid-phase dissolution
  equilibrium (Ksp) lives here as a typed solidPhase (roadmap Phase D).
  Migrated from chemistry/mineralSolubility/ with values preserved verbatim.
\\*---------------------------------------------------------------------------*/
name barite;
formula "BaSO4";

solidPhases
{
    barite
    {
        dissolutionReaction { masters ( { ion Ba; nu 1; } { ion SO4; nu 1; } ); }
        equilibrium { logK25 -9.88; dH 19300; analytic ( -49.595 -0.03913 -1530 22.836 ); source "USGS PHREEQC phreeqc.dat (public domain); lit: Blount 1977; Templeton, 1960"; }
        thermochemistry
        {
            Hf298 -1.47319e+06;   // J/mol   (formation enthalpy of the solid)
            S298  132.214;   // J/(mol.K)
            Cp298 101.741;   // J/(mol.K) at 298.15 K (Maier-Kelley a+bT+c/T^2)
            source "Helgeson, Delany, Nesbitt & Bird 1978, Am. J. Sci. 278-A -- via CHNOSZ OBIGT (open compilation)";
        }
    }
}
`,hs=`/*--------------------------------*- Choupo -*-----------------------*\\
  Component: Benzene  (C6H6, CAS 71-43-2)
  Sources:   constants (Tc/Pc/omega/MW/Tb) + vapour pressure cross-checked
             against CoolProp 7.2.0 (MIT); ideal-gas formation enthalpy/
             entropy against the NASA polynomial database (NASA TM-4513).
             Latent heat at Tb is an individual literature value --
             primary re-citation pending (IST review).
\\*---------------------------------------------------------------------------*/

name        benzene;
formula     C6H6;
CAS         71-43-2;



MW          78.114;        // kg/kmol
Tc          562.05;        // K
Pc          48.95;         // bar
omega       0.2103;        // [-]   acentric factor
Tb          353.24;        // K     normal boiling point
HvapTb      30720;         // J/mol latent heat at Tb
Vliq        8.943e-5;      // m³/mol liquid molar volume at 25 °C  (= 89.43 cm³/mol)


standardThermochemistry
{
    dHf_298   82930.0;        // J/mol  -- ideal-gas reference
    s_298     269.310;         // J/(mol·K)  -- third-law absolute
}
vaporPressure
{
    model         Antoine;
    // log10(Psat [bar]) = A - B / (T[K] + C)
    coefficients  (4.01814   1203.835   -53.226);
    Trange        (287.7  354.07);
}

idealGasHeatCapacity
{
    model         polynomial;
    // Cp [J/(mol·K)] = a0 + a1*T + a2*T^2 + a3*T^3
    coefficients  (-31.368   0.4746   -3.117e-4   8.523e-8);
    Trange        (200  1500);
}

liquidHeatCapacity
{
    model         polynomial;
    // Approximate average over 280–370 K  (individual literature value)
    coefficients  (135.4);
    Trange        (278  350);
}

// Liquid transport (v0.62+).  associationFactor = Wilke-Chang phi (solvent).
// liquidViscosity: ln(mu/Pa.s) = A + B/T (Andrade) or A + B/(T-C) (Vogel),
// fitted to literature mu(T) over ~10-100 degC.
associationFactor  1.0;
liquidViscosity
{
    andrade { A -11.5804; B 1243.3; }
    vogel   { A -10.7929; B 794.4; C 63.0; }
}

groups
{
    joback ( { group arCH; count 6; } );
    unifac ( { group ACH; count 6; } );
}

// ---- Aqueous-speciation FACTS (substance-level, classifier-read) ----
// Curated fact: benzene does NOT participate in the aqueous speciation
// network.  An aromatic hydrocarbon has no ionisable proton in water at
// any pH the network describes.  It says nothing about benzene's aqueous
// behaviour in general -- its solubility is tiny and its activity
// coefficient enormous, which is why it forms a SECOND LIQUID rather than
// dissolving; that is phase behaviour, not speciation.
aqueousSpeciation  none;

cosmo
{
    VT2005
    {
        model       COSMOSAC;
        variant     "2002";
        source      "VT-2005 sigma-profile database (Mullins et al., Ind. Eng. Chem. Res. 45 (2006) 4389; DFT-COSMO), file VT2005-0242-PROF.txt bundled in usnistgov/COSMOSAC; CAS 71-43-2";
        licence     externalRestricted;   // VT-2005: redistribution NOT confirmed -- values NOT shipped
        installed   false;                 // install your own copy: bin/choupo-import-cosmo (-> data/local/cosmo/VT2005/)
    }
}
`,Cs=`/*--------------------------------*- Choupo -*-----------------------*\\
  Mineral: bischofite (MgCl2:6H2O) -- unified substance file.
  One canonical record per chemical identity; the solid-phase dissolution
  equilibrium (Ksp) lives here as a typed solidPhase (roadmap Phase D).
  Migrated from chemistry/mineralSolubility/ with values preserved verbatim.
\\*---------------------------------------------------------------------------*/
name bischofite;
formula "MgCl2:6H2O";

solidPhases
{
    bischofite
    {
        dissolutionReaction { masters ( { ion Mg; nu 1; } { ion Cl; nu 2; } ); nuWater 6; }
        equilibrium { logK25 4.455; dH 0; analytic ( 7.526 -0.01114 115.7 0 0 0 ); validC ( 0 200 ); source "USGS PHREEQC pitzer.dat/phreeqc.dat (public domain); reaction re-expressed to Choupo master basis from Bischofite"; }
    }
}
`,fs=`/*--------------------------------*- Choupo -*-----------------------*\\
  Mineral: bloedite (Na2Mg(SO4)2:4H2O) -- unified substance file.
  One canonical record per chemical identity; the solid-phase dissolution
  equilibrium (Ksp) lives here as a typed solidPhase (roadmap Phase D).
  Migrated from chemistry/mineralSolubility/ with values preserved verbatim.
\\*---------------------------------------------------------------------------*/
name bloedite;
formula "Na2Mg(SO4)2:4H2O";

solidPhases
{
    bloedite
    {
        dissolutionReaction { masters ( { ion Mg; nu 1; } { ion Na; nu 2; } { ion SO4; nu 2; } ); nuWater 4; }
        equilibrium { logK25 -2.347; dH 0; source "USGS PHREEQC pitzer.dat/phreeqc.dat (public domain); reaction re-expressed to Choupo master basis from Bloedite"; }
    }
}
`,gs=`/*--------------------------------*- Choupo -*-----------------------*\\
  Mineral: burkeite (Na6CO3(SO4)2) -- unified substance file.
  One canonical record per chemical identity; the solid-phase dissolution
  equilibrium (Ksp) lives here as a typed solidPhase (roadmap Phase D).
  Migrated from chemistry/mineralSolubility/ with values preserved verbatim.
\\*---------------------------------------------------------------------------*/
name burkeite;
formula "Na6CO3(SO4)2";

solidPhases
{
    burkeite
    {
        dissolutionReaction { masters ( { ion HCO3; nu 1; } { ion H; nu -1; } { ion SO4; nu 2; } { ion Na; nu 6; } ); }
        equilibrium { logK25 9.557; dH -14899.2; source "USGS PHREEQC pitzer.dat/phreeqc.dat (public domain); reaction re-expressed to Choupo master basis from Burkeite"; }
    }
}
`,bs=`/*--------------------------------*- Choupo -*-----------------------*\\
  Component: Calcium hydroxide (Ca(OH)2), PORTLANDITE.  CAS 1305-62-0.

  A NON-VOLATILE crystalline base: it never enters the vapour (K = 0) and
  carries no Antoine / liquid-Cp blocks.  The canonical strong base for
  lime / milk-of-lime neutralisation, tartaric-acid precipitation (calcium
  tartrate), water softening and flue-gas desulphurisation exercises -- the
  catalogue gap that previously forced cases to bend to CaCO3.

  Carries a REAL solid heat capacity (solidHeatCapacity{}) and the solid-
  phase formation datum, so its sensible heat and its reaction heat both
  emerge from the elements reference like any other species.

  PRIMARY: Wagman et al., NBS Tables of Chemical Thermodynamic Properties,
  J. Phys. Chem. Ref. Data 11, Suppl. 2 (1982) -- a U.S. Government work,
  PUBLIC DOMAIN.  Density: portlandite ~ 2.21 g/cm^3 (mineralogical).
\\*---------------------------------------------------------------------------*/

name        calciumHydroxide;
formula     "Ca(OH)2";
CAS         1305-62-0;

MW          74.093;            // kg/kmol

role        nonvolatile;       // never goes to the vapour (K = 0)

solid
{
    rho_p   2211.0;            // portlandite particle density [kg/m^3]
}

// Solid-phase formation datum (portlandite).
standardThermochemistry
{
    dHf_298   -986090;         // J/mol  [Wagman et al. NBS Tables 1982]
    s_298     83.39;           // J/(mol*K) third-law absolute [Wagman 1982]
    referenceState     pureSolid;
}

// Solid heat capacity, NBS 298 K value carried as a CONSTANT (single
// coefficient) -- a deliberate near-ambient approximation; refit to a real
// T-polynomial before high-T calcination duty is claimed.
solidHeatCapacity
{
    model         polynomial;          // Cp = a0  [J/(mol*K)], constant
    coefficients  ( 87.49 );           // Cp(298) [Wagman et al. NBS Tables 1982]
    Trange        ( 298  600 );        // constant-Cp validity flag (near ambient)
}

// liquid/dissolved Cp -- the solid Cp as a FLAGGED proxy, so the slurried/
// dissolved solid carries sensible heat in an aqueous process stream.
liquidHeatCapacity
{
    model         polynomial;          // Cp = a0  [J/(mol*K)], constant
    coefficients  ( 87.49 );           // Cp(298) [Wagman et al. NBS Tables 1982]
    Trange        ( 298  600 );        // constant-Cp validity flag (near ambient)
}

provenance
{
    standardThermochemistry { origin literature; method "Wagman et al. NBS Tables 1982"; }
    solidHeatCapacity { origin literature; method "Wagman et al. NBS Tables 1982 (Cp298, carried constant)"; }
    rho_p { origin literature; method "portlandite mineralogical density ~2.21 g/cm3"; }
}

// Solid phase(s) of this component (roadmap Phase D fold-in):
solidPhases
{
    portlandite
    {
        dissolutionReaction { masters ( { ion Ca; nu 1; } { ion H; nu -2; } ); nuWater 2; }
        equilibrium { logK25 22.81; dH -112800; source "USGS PHREEQC pitzer.dat/phreeqc.dat (public domain); reaction re-expressed to Choupo master basis from Portlandite"; }
    }
}
`,ys=`/*--------------------------------*- Choupo -*--------------------------------*\\
  Component: Calcium tartrate (CaC4H4O6).  CAS 3164-34-9.  MW 188.15 g/mol.

  The SPARINGLY-SOLUBLE calcium salt of the natural (wine) route to tartaric
  acid: bitartrate paste + milk of lime + CaCl2 precipitate it, then sulfuric
  acid acidulates it back to tartaric acid + gypsum.  A non-volatile solid.

  ENTHALPY -- the DISSOLVED salt derives its formation enthalpy from its IONS
  (Ca2+ and tartrate C4H4O6-2, both in data/standards/species/aqueous/ with
  hfAq), via the electrolyte{} block below -- so an aqueous tartrate balance
  closes on the elements datum without a molecular dHf.

  The SOLID datum is OMITTED on purpose: deriving dHf(CaC4H4O6, s) needs a
  measured DISSOLUTION enthalpy (dHf_s = hfAq(Ca2+) + hfAq(Tart2-) - dH_diss),
  and no defensible dH_diss / calorimetric value is curated yet (the solubility
  papers give Ksp, i.e. dG_diss, not dH_diss without solubility-vs-T).  So a
  PRECIPITATED solid calcium tartrate will make an energy balance REFUSE (by
  design, honestly) until a dissolution enthalpy is curated -- the dissolved
  form via the ions is unaffected.
  Sources: ion hfAq (Ca2+, tartrate C4H4O6-2) from Kochergina et al. 2006
           via the data/standards/species/aqueous/ files (cited there);
           rho_p ~1900 kg/m^3 approximate (VERIFY flag) and the ~210
           J/(mol K) liquid-Cp estimate -- primary re-citation pending
           (IST review).  Solid formation datum omitted ON PURPOSE (needs
           a measured dH_diss; the solubility literature gives only Ksp).
\\*---------------------------------------------------------------------------*/

name        calciumTartrate;
formula     CaC4H4O6;
CAS         3164-34-9;
MW          188.15;             // kg/kmol  (anhydrous)

role        nonvolatile;               // sparingly-soluble crystalline salt; never to the vapour (K = 0)

solid
{
    rho_p   1900.0;             // crystal density [kg/m^3] (anhydrous, approximate -- VERIFY)
}

// Dissolved form: a 1:1 strong-electrolyte salt -> the aqueous enthalpy comes
// from the ions (ionAqReference), both carrying hfAq from Kochergina et al. 2006.
dissociatesTo  { Ca 1; Tart 1; }   // ion stoichiometry (formula-like identity)

// standardThermochemistry OMITTED on purpose (see header): the SOLID datum needs a
// measured dissolution enthalpy.  Until then, the dissolved salt works via the
// ion tier; a precipitated solid honestly REFUSES the energy balance.

// liquid/dissolved heat capacity -- ESTIMATE (~210 J/mol/K, organic-salt class),
// FLAGGED; lets the precipitated/slurried solid carry sensible heat in a stream.
// (Its FORMATION datum stays omitted -> an energy balance refuses on the solid.)
liquidHeatCapacity
{
    model         polynomial;
    coefficients  ( 210.0  0.0  0.0 );
    Trange        ( 298  400 );
}
`,Ts=`/*--------------------------------*- Choupo -*-----------------------*\\
  Component: carbonylSulfide  (C1O1S1, CAS 463-58-1)
  PROPOSAL TIER -- UNVERIFIED.  Imported from CoolProp 7.2.0 (MIT);
  pure-fluid properties from the published reference EOS below.
  Reference EOS: Lemmon-JCED-2006
  NOTE: formation properties (dHf, s_298) and group decompositions
  are NOT provided by CoolProp -> omitted here (a gap, not fabricated).
\\*---------------------------------------------------------------------------*/

name        carbonylSulfide;

//  Review state, MACHINE-READABLE (AP2, 2026-08-05).  This used to
//  live only in the banner above, which the parser discards -- so the
//  engine could not announce it and a run said nothing.
reviewStatus   interim;
reviewReason   importedFromCoolProp720_notCheckedAgainstPrimaries;
formula     C1O1S1;
CAS         463-58-1;

MW          60.0751;        // kg/kmol  [CoolProp]
Tc          378.7703;        // K        [CoolProp EOS]
Pc          63.68800;        // bar      [CoolProp EOS]
omega       0.09780;        // [-]      [CoolProp EOS]
Tb          222.9886;        // K  normal boiling [CoolProp]
HvapTb      18558.3;        // J/mol  at Tb     [CoolProp]
Vliq        6.0663e-05;        // m3/mol @298K     [CoolProp]

vaporPressure
{
    model         Antoine;
    // log10(Psat [bar]) = A - B / (T[K] + C)   -- fitted to CoolProp EOS
    coefficients  (4.13179   844.694   -18.433);
    Trange        (170.45  371.19);
}

idealGasHeatCapacity
{
    model         polynomial;
    // Cp [J/(mol.K)] = a0 + a1 T + a2 T^2 + a3 T^3   -- fitted to CoolProp cp0
    coefficients  (19.3425  0.101022  -0.000103704  4.05263e-08);
    Trange        (200  1000);
}

liquidHeatCapacity
{
    model         polynomial;
    // Cp_liq [J/(mol.K)]   -- fitted to CoolProp saturated-liquid cp
    coefficients  (124.908  -0.66629  0.00243768  -2.39516e-06);
    Trange        (189  223);
}

triplePoint
{
    T   134.3000;
    P   64.4346;
}

provenance
{
    constants      "CoolProp 7.2.0 -- Lemmon-JCED-2006";
    vaporPressure  "Antoine fitted to CoolProp EOS saturation, AAD 0.70%";
    idealGasCp     "polynomial fitted to CoolProp cp0, maxerr 0.75%";
    liquidCp       "polynomial fitted to CoolProp sat-liquid cp, maxerr 0.00%";
    triplePoint    "CoolProp reference EOS triple-point T,P";
}

cosmo
{
    VT2005
    {
        model       COSMOSAC;
        variant     "2002";
        source      "VT-2005 sigma-profile database (Mullins et al., Ind. Eng. Chem. Res. 45 (2006) 4389; DFT-COSMO), file VT2005-1054-PROF.txt bundled in usnistgov/COSMOSAC; CAS 463-58-1";
        licence     externalRestricted;   // VT-2005: redistribution NOT confirmed -- values NOT shipped
        installed   false;                 // install your own copy: bin/choupo-import-cosmo (-> data/local/cosmo/VT2005/)
    }
}
`,vs=`/*--------------------------------*- Choupo -*-----------------------*\\
  Mineral: carnallite (KMgCl3:6H2O) -- unified substance file.
  One canonical record per chemical identity; the solid-phase dissolution
  equilibrium (Ksp) lives here as a typed solidPhase (roadmap Phase D).
  Migrated from chemistry/mineralSolubility/ with values preserved verbatim.
\\*---------------------------------------------------------------------------*/
name carnallite;
formula "KMgCl3:6H2O";

solidPhases
{
    carnallite
    {
        dissolutionReaction { masters ( { ion K; nu 1; } { ion Mg; nu 1; } { ion Cl; nu 3; } ); nuWater 6; }
        equilibrium { logK25 4.35; dH 1170; analytic ( 24.06 -0.0311 -3090 0 0 0 ); validC ( 0 200 ); source "USGS PHREEQC pitzer.dat/phreeqc.dat (public domain); reaction re-expressed to Choupo master basis from Carnallite"; }
    }
}
`,Ps=`/*--------------------------------*- Choupo -*-----------------------*\\
  Mineral: celestite (SrSO4) -- unified substance file.
  One canonical record per chemical identity; the solid-phase dissolution
  equilibrium (Ksp) lives here as a typed solidPhase (roadmap Phase D).
  Migrated from chemistry/mineralSolubility/ with values preserved verbatim.
\\*---------------------------------------------------------------------------*/
name celestite;
formula "SrSO4";

solidPhases
{
    celestite
    {
        dissolutionReaction { masters ( { ion Sr; nu 1; } { ion SO4; nu 1; } ); }
        equilibrium { logK25 -6.63; dH -16890.8; analytic ( -7.14 0.00611 75 0 0 -1.79e-05 ); source "USGS PHREEQC phreeqc.dat (public domain); lit: Howell et al., 1992, JCED 37, 464"; }
        thermochemistry
        {
            Hf298 -1.45884e+06;   // J/mol   (formation enthalpy of the solid)
            S298  119.922;   // J/(mol.K)
            Cp298 107.802;   // J/(mol.K) at 298.15 K (Maier-Kelley a+bT+c/T^2)
            source "Robie & Hemingway (celestite), USGS 1987 compilation -- via CHNOSZ OBIGT (open compilation)";
        }
    }
}
`,Ss=`/*--------------------------------*- Choupo -*-----------------------*\\
  Mineral: chrysotile (Mg3Si2O5(OH)4) -- unified substance file.
  One canonical record per chemical identity; the solid-phase dissolution
  equilibrium (Ksp) lives here as a typed solidPhase (roadmap Phase D).
  Migrated from chemistry/mineralSolubility/ with values preserved verbatim.
\\*---------------------------------------------------------------------------*/
name chrysotile;
formula "Mg3Si2O5(OH)4";

solidPhases
{
    chrysotile
    {
        dissolutionReaction { masters ( { ion H4SiO4; nu 2; } { ion Mg; nu 3; } { ion H; nu -6; } ); nuWater 1; }
        equilibrium { logK25 32.2; dH -195811; analytic ( 13.248 0 10217.1 -6.1894 0 0 ); validC ( 0 200 ); source "USGS PHREEQC pitzer.dat/phreeqc.dat (public domain); reaction re-expressed to Choupo master basis from Chrysotile"; }
    }
}
`,Os=`/*--------------------------------*- Choupo -*-----------------------*\\
  Component: cis2Butene  (C4H8, CAS 590-18-1)
  PROPOSAL TIER -- UNVERIFIED.  Imported from CoolProp 7.2.0 (MIT);
  pure-fluid properties from the published reference EOS below.
  Reference EOS: Lemmon-FPE-2005
  NOTE: formation properties (dHf, s_298) and group decompositions
  are NOT provided by CoolProp -> omitted here (a gap, not fabricated).
\\*---------------------------------------------------------------------------*/

name        cis2Butene;

//  Review state, MACHINE-READABLE (AP2, 2026-08-05).  This used to
//  live only in the banner above, which the parser discards -- so the
//  engine could not announce it and a run said nothing.
reviewStatus   interim;
reviewReason   importedFromCoolProp720_notCheckedAgainstPrimaries;
formula     C4H8;
CAS         590-18-1;

MW          56.1063;        // kg/kmol  [CoolProp]
Tc          435.7501;        // K        [CoolProp EOS]
Pc          42.36038;        // bar      [CoolProp EOS]
omega       0.20236;        // [-]      [CoolProp EOS]
Tb          276.8735;        // K  normal boiling [CoolProp]
HvapTb      23239.1;        // J/mol  at Tb     [CoolProp]
Vliq        9.1165e-05;        // m3/mol @298K     [CoolProp]

vaporPressure
{
    model         Antoine;
    // log10(Psat [bar]) = A - B / (T[K] + C)   -- fitted to CoolProp EOS
    coefficients  (4.09107   1002.97   -31.4915);
    Trange        (196.09  427.04);
}

idealGasHeatCapacity
{
    model         polynomial;
    // Cp [J/(mol.K)] = a0 + a1 T + a2 T^2 + a3 T^3   -- fitted to CoolProp cp0
    coefficients  (16.4825  0.219574  1.74894e-05  -6.08809e-08);
    Trange        (200  1000);
}

liquidHeatCapacity
{
    model         polynomial;
    // Cp_liq [J/(mol.K)]   -- fitted to CoolProp saturated-liquid cp
    coefficients  (147.419  -0.4253  0.00130433  -4.01765e-07);
    Trange        (218  277);
}

triplePoint
{
    T   134.3000;
    P   0.2636;
}

standardThermochemistry
{
    dHf_298   -8670;      // J/mol ideal-gas -- provenance: see the structured dHf_298 block below
    dGf_298   63020;      // J/mol  ideal-gas [Joback]
    s_298     305.231;      // J/(mol*K) third-law [DERIVED: (dHf-dGf)/T + CODATA element S]
}

groups { unifac ( { group CH3; count 2; } { group CH=CH; count 1; } ); joback ( { group CH3; count 2; } { group eCH; count 2; } ); }

provenance
{
    dHf_298
    {
        origin           estimated;
        method           "Joback";
        methodVersion    "joback-poling5e-table2-2";
        input            joback;
        inputFingerprint "CH3:2,eCH:2";
        uncertainty      { status unquantified; reason "bulk-import band ~9 kJ/mol, primary basis not verified"; }
    }

    constants      "CoolProp 7.2.0 -- Lemmon-FPE-2005";
    vaporPressure  "Antoine fitted to CoolProp EOS saturation, AAD 0.65%";
    idealGasCp     "polynomial fitted to CoolProp cp0, maxerr 3.14%";
    liquidCp       "polynomial fitted to CoolProp sat-liquid cp, maxerr 0.00%";
    triplePoint    "CoolProp reference EOS triple-point T,P";
    preserved      "from prior proposal (NOT CoolProp): standardThermochemistry, groups";
}

cosmo
{
    VT2005
    {
        model       COSMOSAC;
        variant     "2002";
        source      "VT-2005 sigma-profile database (Mullins et al., Ind. Eng. Chem. Res. 45 (2006) 4389; DFT-COSMO), file VT2005-0127-PROF.txt bundled in usnistgov/COSMOSAC; CAS 590-18-1";
        licence     externalRestricted;   // VT-2005: redistribution NOT confirmed -- values NOT shipped
        installed   false;                 // install your own copy: bin/choupo-import-cosmo (-> data/local/cosmo/VT2005/)
    }
}
`,As=`/*---------------------------------------------------------------------------*\\
  Component: compA  -- synthetic PSEUDO-component for VLLE algorithm audit.
  Antoine tuned so Psat ≈ 5 bar at 350 K (the "very volatile" component
  that will preferentially go to vapour in the audit test).

  NOT A REAL SUBSTANCE -- a numerical test stand-in (formula "A", CAS 00-00-0).
  It carries NO standardThermochemistry block ON PURPOSE: a fictitious species has no
  elements and no real heat of formation, so the elements datum is undefined
  for it.  This is a deliberate, correct absence (the VLLE audit runs no
  reactor and no elements-datum energy balance), NOT a curation oversight.
  Sources: none -- a synthetic audit species: the Antoine coefficients
  (Psat ~5 bar at 350 K) and the flat Cp values are TUNED for the VLLE
  algorithm test; no physical primary exists (not a real substance).
\\*---------------------------------------------------------------------------*/

name        compA;
formula     A;
CAS         00-00-0;

MW          30.0;
Tc          500.0;
Pc          50.0;
omega       0.10;
Tb          320.0;
HvapTb      28000;
Vliq        8.0e-5;

vaporPressure
{
    model         Antoine;
    coefficients  (4.0   1700.0   -30.0);   // log10 P_bar = A - B/(T + C); Psat(350) ≈ 5 bar
    Trange        (300  400);
}

idealGasHeatCapacity
{
    model         polynomial;
    coefficients  (80.0   0.0   0.0   0.0);
    Trange        (200  500);
}

liquidHeatCapacity
{
    model         polynomial;
    coefficients  (120.0);
    Trange        (300  400);
}
`,Hs=`/*---------------------------------------------------------------------------*\\
  Component: compB  -- synthetic PSEUDO-component for VLLE algorithm audit.
  Antoine giving Psat ≈ 0.5 bar at 350 K (the less-volatile audit partner).
  Pedagogically only --- NOT A REAL SUBSTANCE (formula "B", CAS 00-00-0).

  Carries NO standardThermochemistry block ON PURPOSE: a fictitious species has no
  elements and no real heat of formation -- the elements datum is undefined
  for it.  A deliberate, correct absence (the VLLE audit runs no reactor),
  NOT a curation oversight.
  Sources: none -- a synthetic audit species: the Antoine coefficients
  (Psat ~0.5 bar at 350 K) and the flat Cp values are TUNED for the VLLE
  algorithm test; no physical primary exists (not a real substance).
\\*---------------------------------------------------------------------------*/

name        compB;
formula     B;
CAS         00-00-0;

MW          50.0;
Tc          550.0;
Pc          40.0;
omega       0.20;
Tb          355.0;
HvapTb      35000;
Vliq        1.0e-4;

vaporPressure
{
    model         Antoine;
    coefficients  (4.0   1700.0   -30.0);   // log10 P_bar = A - B/(T + C)
    Trange        (300  400);
}

idealGasHeatCapacity
{
    model         polynomial;
    coefficients  (80.0   0.0   0.0   0.0);
    Trange        (200  500);
}

liquidHeatCapacity
{
    model         polynomial;
    coefficients  (120.0);
    Trange        (300  400);
}
`,_s=`/*---------------------------------------------------------------------------*\\
  Component: compC  -- synthetic PSEUDO-component for VLLE algorithm audit.
  Antoine giving Psat ≈ 0.5 bar at 350 K but with a smaller B-coefficient
  than compB (a third audit partner, distinct from compA/compB).
  Pedagogically only --- NOT A REAL SUBSTANCE (formula "C", CAS 00-00-0).

  Carries NO standardThermochemistry block ON PURPOSE: a fictitious species has no
  elements and no real heat of formation -- the elements datum is undefined
  for it.  A deliberate, correct absence (the VLLE audit runs no reactor),
  NOT a curation oversight.
  Sources: none -- a synthetic audit species: the Antoine coefficients
  (smaller B than compB) and the flat Cp values are TUNED for the VLLE
  algorithm test; no physical primary exists (not a real substance).
\\*---------------------------------------------------------------------------*/

name        compC;
formula     C;
CAS         00-00-0;

MW          50.0;
Tc          550.0;
Pc          40.0;
omega       0.20;
Tb          355.0;
HvapTb      35000;
Vliq        1.0e-4;

vaporPressure
{
    model         Antoine;
    coefficients  (4.0   1056.0   -30.0);   // log10 P_bar = A - B/(T + C)
    Trange        (300  400);
}

idealGasHeatCapacity
{
    model         polynomial;
    coefficients  (80.0   0.0   0.0   0.0);
    Trange        (200  500);
}

liquidHeatCapacity
{
    model         polynomial;
    coefficients  (120.0);
    Trange        (300  400);
}
`,Es=`/*--------------------------------*- Choupo -*-----------------------*\\
  Component: cyclohexane  (C6H12, CAS 110-82-7)
  PROPOSAL TIER -- UNVERIFIED.  Imported from CoolProp 7.2.0 (MIT);
  pure-fluid properties from the published reference EOS below.
  Reference EOS: Zhou-JPCRD-2014
  NOTE: formation properties (dHf, s_298) and group decompositions
  are NOT provided by CoolProp -> omitted here (a gap, not fabricated).
\\*---------------------------------------------------------------------------*/

name        cyclohexane;

//  Review state, MACHINE-READABLE (AP2, 2026-08-05).  This used to
//  live only in the banner above, which the parser discards -- so the
//  engine could not announce it and a run said nothing.
reviewStatus   interim;
reviewReason   importedFromCoolProp720_notCheckedAgainstPrimaries;
formula     C6H12;
CAS         110-82-7;

MW          84.1595;        // kg/kmol  [CoolProp]
Tc          553.6000;        // K        [CoolProp EOS]
Pc          40.80526;        // bar      [CoolProp EOS]
omega       0.20926;        // [-]      [CoolProp EOS]
Tb          353.8649;        // K  normal boiling [CoolProp]
HvapTb      29991.3;        // J/mol  at Tb     [CoolProp]
Vliq        1.0875e-04;        // m3/mol @298K     [CoolProp]

vaporPressure
{
    model         Antoine;
    // log10(Psat [bar]) = A - B / (T[K] + C)   -- fitted to CoolProp EOS
    coefficients  (4.08223   1271.07   -42.2622);
    Trange        (279.97  542.53);
}

idealGasHeatCapacity
{
    model         polynomial;
    // Cp [J/(mol.K)] = a0 + a1 T + a2 T^2 + a3 T^3   -- fitted to CoolProp cp0
    coefficients  (-42.4685  0.551959  -0.000155651  -3.78747e-08);
    Trange        (200  1000);
}

liquidHeatCapacity
{
    model         polynomial;
    // Cp_liq [J/(mol.K)]   -- fitted to CoolProp saturated-liquid cp
    coefficients  (45.0758  0.385964  -0.000153114  3.74301e-07);
    Trange        (284  354);
}

triplePoint
{
    T   279.4700;
    P   5240.2044;
}

standardThermochemistry
{
    dHf_298   -123299.3;        // J/mol  ideal-gas [origin=measured method=NASA-TM4513]
    s_298     297.39;        // J/(mol.K) third-law absolute [NASA-TM4513]
}

groups
{
    joback ( { group rCH2; count 6; } );
    unifac ( { group CH2; count 6; } );
}
provenance
{
    constants      "CoolProp 7.2.0 -- Zhou-JPCRD-2014";
    vaporPressure  "Antoine fitted to CoolProp EOS saturation, AAD 0.56%";
    idealGasCp     "polynomial fitted to CoolProp cp0, maxerr 2.82%";
    liquidCp       "polynomial fitted to CoolProp sat-liquid cp, maxerr 0.00%";
    triplePoint    "CoolProp reference EOS triple-point T,P";
    preserved      "from prior proposal (NOT CoolProp): standardThermochemistry, groups";
    standardThermochemistry "NASA TM-4513 (McBride-Gordon-Reno 1993), H0/S0(298.15) from NASA-7 poly";
}
cosmo
{
    VT2005
    {
        model       COSMOSAC;
        variant     "2002";
        source      "VT-2005 sigma-profile database (Mullins et al., Ind. Eng. Chem. Res. 45 (2006) 4389; DFT-COSMO), file VT2005-0099-PROF.txt bundled in usnistgov/COSMOSAC; CAS 110-82-7";
        licence     externalRestricted;   // VT-2005: redistribution NOT confirmed -- values NOT shipped
        installed   false;                 // install your own copy: bin/choupo-import-cosmo (-> data/local/cosmo/VT2005/)
    }
}
`,ws=`/*--------------------------------*- Choupo -*-----------------------*\\
  Component: cyclopentane  (C5H10, CAS 287-92-3)
  PROPOSAL TIER -- UNVERIFIED.  Imported from CoolProp 7.2.0 (MIT);
  pure-fluid properties from the published reference EOS below.
  Reference EOS: Gedanitz-JCED-2015
  NOTE: formation properties (dHf, s_298) and group decompositions
  are NOT provided by CoolProp -> omitted here (a gap, not fabricated).
\\*---------------------------------------------------------------------------*/

name        cyclopentane;

//  Review state, MACHINE-READABLE (AP2, 2026-08-05).  This used to
//  live only in the banner above, which the parser discards -- so the
//  engine could not announce it and a run said nothing.
reviewStatus   interim;
reviewReason   importedFromCoolProp720_notCheckedAgainstPrimaries;
formula     C5H10;
CAS         287-92-3;

MW          70.1329;        // kg/kmol  [CoolProp]
Tc          511.7201;        // K        [CoolProp EOS]
Pc          45.82766;        // bar      [CoolProp EOS]
omega       0.20193;        // [-]      [CoolProp EOS]
Tb          322.3998;        // K  normal boiling [CoolProp]
HvapTb      27304.6;        // J/mol  at Tb     [CoolProp]
Vliq        9.4722e-05;        // m3/mol @298K     [CoolProp]

vaporPressure
{
    model         Antoine;
    // log10(Psat [bar]) = A - B / (T[K] + C)   -- fitted to CoolProp EOS
    coefficients  (4.12653   1185.01   -34.9928);
    Trange        (230.27  501.49);
}

idealGasHeatCapacity
{
    model         polynomial;
    // Cp [J/(mol.K)] = a0 + a1 T + a2 T^2 + a3 T^3   -- fitted to CoolProp cp0
    coefficients  (-24.4185  0.385733  -3.47046e-05  -7.82194e-08);
    Trange        (200  1000);
}

liquidHeatCapacity
{
    model         polynomial;
    // Cp_liq [J/(mol.K)]   -- fitted to CoolProp saturated-liquid cp
    coefficients  (144.436  -0.653607  0.00265086  -2.1962e-06);
    Trange        (256  322);
}

triplePoint
{
    T   179.7000;
    P   8.9164;
}

standardThermochemistry
{
    dHf_298   -76400;      // J/mol ideal-gas, MEASURED -- see the structured dHf_298 block below
    dGf_298   39640;      // J/mol  [DERIVED: dHf - 298.15*(s_298 - Sum S_elements), CODATA element S]
    s_298     292.9;      // J/(mol*K) third-law absolute (TRC class; primary re-citation pending IST review)
}

groups { unifac ( { group CH2; count 5; } ); joback ( { group rCH2; count 5; } ); }

provenance
{
    dHf_298
    {
        origin           measured;
        method           "combustion calorimetry";
        citation         "Prosen & Rossini (NBS heats of combustion of cyclopentane series), via NIST WebBook (gas-phase dHf = -76.4 kJ/mol); s_298 third-law, TRC class";
        note             "PROMOTED 2026-08-03 from the Joback estimate (-65,710 -- the ~11 kJ/mol residual 5-ring strain) under the ratified ring-class ruling (docs/design/curation-backlog-estimated-records.md, ring section).  dGf derived from the measured dHf + third-law S + CODATA element entropies (literature tabulations sit ~38.8-39.6 kJ/mol; the derived value is inside that band).  FOR REVIEW.";
    }

    constants      "CoolProp 7.2.0 -- Gedanitz-JCED-2015";
    vaporPressure  "Antoine fitted to CoolProp EOS saturation, AAD 0.71%";
    idealGasCp     "polynomial fitted to CoolProp cp0, maxerr 6.47%";
    liquidCp       "polynomial fitted to CoolProp sat-liquid cp, maxerr 0.00%";
    triplePoint    "CoolProp reference EOS triple-point T,P";
    preserved      "from prior proposal (NOT CoolProp): standardThermochemistry, groups";
}

cosmo
{
    VT2005
    {
        model       COSMOSAC;
        variant     "2002";
        source      "VT-2005 sigma-profile database (Mullins et al., Ind. Eng. Chem. Res. 45 (2006) 4389; DFT-COSMO), file VT2005-0087-PROF.txt bundled in usnistgov/COSMOSAC; CAS 287-92-3";
        licence     externalRestricted;   // VT-2005: redistribution NOT confirmed -- values NOT shipped
        installed   false;                 // install your own copy: bin/choupo-import-cosmo (-> data/local/cosmo/VT2005/)
    }
}
`,xs=`/*--------------------------------*- Choupo -*-----------------------*\\
  Component: cyclopropane  (C3H6, CAS 75-19-4)
  PROPOSAL TIER -- UNVERIFIED.  Imported from CoolProp 7.2.0 (MIT);
  pure-fluid properties from the published reference EOS below.
  Reference EOS: Polt-CT-1992
  NOTE: formation properties (dHf, s_298) and group decompositions
  are NOT provided by CoolProp -> omitted here (a gap, not fabricated).
\\*---------------------------------------------------------------------------*/

name        cyclopropane;

//  Review state, MACHINE-READABLE (AP2, 2026-08-05).  This used to
//  live only in the banner above, which the parser discards -- so the
//  engine could not announce it and a run said nothing.
reviewStatus   interim;
reviewReason   importedFromCoolProp720_notCheckedAgainstPrimaries;
formula     C3H6;
CAS         75-19-4;

MW          42.0810;        // kg/kmol  [CoolProp]
Tc          398.6921;        // K        [CoolProp EOS]
Pc          56.05283;        // bar      [CoolProp EOS]
omega       0.13055;        // [-]      [CoolProp EOS]
Vliq        6.7975e-05;        // m3/mol @298K     [CoolProp]

vaporPressure
{
    model         Antoine;
    // log10(Psat [bar]) = A - B / (T[K] + C)   -- fitted to CoolProp EOS
    coefficients  (4.40678   1074.75   4.77355);
    Trange        (273.50  390.72);
}

idealGasHeatCapacity
{
    model         polynomial;
    // Cp [J/(mol.K)] = a0 + a1 T + a2 T^2 + a3 T^3   -- fitted to CoolProp cp0
    coefficients  (-155.493  1.16079  -0.00188167  1.12682e-06);
    Trange        (283  1000);
}

liquidHeatCapacity
{
    model         polynomial;
    // Cp_liq [J/(mol.K)]   -- fitted to CoolProp saturated-liquid cp
    coefficients  (3198.46  -27.3281  0.0786978  -7.35498e-05);
    Trange        (278  339);
}

triplePoint
{
    T   273.0000;
    P   342702.2037;
}

standardThermochemistry
{
    dHf_298   53300;      // J/mol ideal-gas, MEASURED -- see the structured dHf_298 block below
    dGf_298   104530;      // J/mol  [DERIVED: dHf - 298.15*(s_298 - Sum S_elements), CODATA element S]
    s_298     237.45;      // J/(mol*K) third-law absolute (TRC class; primary re-citation pending IST review)
}

groups { unifac ( { group CH2; count 3; } ); joback ( { group rCH2; count 3; } ); }

provenance
{
    dHf_298
    {
        origin           measured;
        method           "combustion calorimetry";
        citation         "Knowlton & Rossini, J. Res. Natl. Bur. Stand. 43 (1949) 113 (heat of combustion of cyclopropane); s_298 third-law, TRC class";
        note             "PROMOTED 2026-08-03 from the Joback estimate (-12,110 -- a ~65 kJ/mol error with the WRONG SIGN: ring strain is the method's textbook failure) under the ratified ring-class ruling (docs/design/curation-backlog-estimated-records.md, ring section).  dGf derived from the measured dHf + third-law S + CODATA element entropies; cross-checks the literature dGf ~104.5 kJ/mol.  FOR REVIEW.";
    }

    constants      "CoolProp 7.2.0 -- Polt-CT-1992";
    vaporPressure  "Antoine fitted to CoolProp EOS saturation, AAD 0.20%";
    idealGasCp     "polynomial fitted to CoolProp cp0, maxerr 9.59%";
    liquidCp       "polynomial fitted to CoolProp sat-liquid cp, maxerr 0.19%";
    triplePoint    "CoolProp reference EOS triple-point T,P";
    preserved      "from prior proposal (NOT CoolProp): standardThermochemistry, groups";
}
`,Ns=`/*--------------------------------*- Choupo -*-----------------------*\\
  Component: diethylEther  (C4H10O1, CAS 60-29-7)
  PROPOSAL TIER -- UNVERIFIED.  Imported from CoolProp 7.2.0 (MIT);
  pure-fluid properties from the published reference EOS below.
  Reference EOS: Thol-IJT-2014
  NOTE: formation properties (dHf, s_298) and group decompositions
  are NOT provided by CoolProp -> omitted here (a gap, not fabricated).
\\*---------------------------------------------------------------------------*/

name        diethylEther;

//  Review state, MACHINE-READABLE (AP2, 2026-08-05).  This used to
//  live only in the banner above, which the parser discards -- so the
//  engine could not announce it and a run said nothing.
reviewStatus   interim;
reviewReason   importedFromCoolProp720_notCheckedAgainstPrimaries;
formula     C4H10O1;
CAS         60-29-7;

MW          74.1216;        // kg/kmol  [CoolProp]
Tc          467.8996;        // K        [CoolProp EOS]
Pc          37.17321;        // bar      [CoolProp EOS]
omega       0.28164;        // [-]      [CoolProp EOS]
Tb          307.6044;        // K  normal boiling [CoolProp]
HvapTb      26547.8;        // J/mol  at Tb     [CoolProp]
Vliq        1.0472e-04;        // m3/mol @298K     [CoolProp]

vaporPressure
{
    model         Antoine;
    // log10(Psat [bar]) = A - B / (T[K] + C)   -- fitted to CoolProp EOS
    coefficients  (4.20699   1147.95   -34.509);
    Trange        (270.50  458.54);
}

idealGasHeatCapacity
{
    model         polynomial;
    // Cp [J/(mol.K)] = a0 + a1 T + a2 T^2 + a3 T^3   -- fitted to CoolProp cp0
    coefficients  (36.2745  0.318676  -0.000125104  1.62973e-08);
    Trange        (200  1000);
}

liquidHeatCapacity
{
    model         polynomial;
    // Cp_liq [J/(mol.K)]   -- fitted to CoolProp saturated-liquid cp
    coefficients  (167.17  -0.224496  0.000848035  -9.83713e-08);
    Trange        (275  308);
}

triplePoint
{
    T   270.0000;
    P   21283.8110;
}

standardThermochemistry
{
    dHf_298   -258110;      // J/mol ideal-gas -- provenance: see the structured dHf_298 block below
    dGf_298   -122200;      // J/mol  ideal-gas [Joback]
    s_298     323.091;      // J/(mol*K) third-law [DERIVED: (dHf-dGf)/T + CODATA element S]
}

groups
{
    joback ( { group CH3; count 2; } { group CH2; count 2; } { group ether; count 1; } );
    unifac ( { group CH3; count 2; } { group CH2; count 1; } { group CH2O; count 1; } );
}
provenance
{
    dHf_298
    {
        origin           estimated;
        method           "Joback";
        methodVersion    "joback-poling5e-table2-2";
        input            joback;
        inputFingerprint "CH2:2,CH3:2,ether:1";
        uncertainty      { status unquantified; reason "bulk-import band ~9 kJ/mol, primary basis not verified"; }
    }

    constants      "CoolProp 7.2.0 -- Thol-IJT-2014";
    vaporPressure  "Antoine fitted to CoolProp EOS saturation, AAD 0.45%";
    idealGasCp     "polynomial fitted to CoolProp cp0, maxerr 0.00%";
    liquidCp       "polynomial fitted to CoolProp sat-liquid cp, maxerr 0.00%";
    triplePoint    "CoolProp reference EOS triple-point T,P";
    preserved      "from prior proposal (NOT CoolProp): standardThermochemistry, groups";
}
cosmo
{
    VT2005
    {
        model       COSMOSAC;
        variant     "2002";
        source      "VT-2005 sigma-profile database (Mullins et al., Ind. Eng. Chem. Res. 45 (2006) 4389; DFT-COSMO), file VT2005-0712-PROF.txt bundled in usnistgov/COSMOSAC; CAS 60-29-7";
        licence     externalRestricted;   // VT-2005: redistribution NOT confirmed -- values NOT shipped
        installed   false;                 // install your own copy: bin/choupo-import-cosmo (-> data/local/cosmo/VT2005/)
    }
}
`,Rs=`/*--------------------------------*- Choupo -*-----------------------*\\
  Component: dimethylCarbonate  (C3H6O3, CAS 616-38-6)
  PROPOSAL TIER -- UNVERIFIED.  Imported from CoolProp 7.2.0 (MIT);
  pure-fluid properties from the published reference EOS below.
  Reference EOS: Zhou-JPCRD-2011
  NOTE: formation properties (dHf, s_298) and group decompositions
  are NOT provided by CoolProp -> omitted here (a gap, not fabricated).
\\*---------------------------------------------------------------------------*/

name        dimethylCarbonate;

//  Review state, MACHINE-READABLE (AP2, 2026-08-05).  This used to
//  live only in the banner above, which the parser discards -- so the
//  engine could not announce it and a run said nothing.
reviewStatus   interim;
reviewReason   importedFromCoolProp720_notCheckedAgainstPrimaries;
formula     C3H6O3;
CAS         616-38-6;

MW          90.0779;        // kg/kmol  [CoolProp]
Tc          557.0000;        // K        [CoolProp EOS]
Pc          49.08755;        // bar      [CoolProp EOS]
omega       0.34600;        // [-]      [CoolProp EOS]
Tb          363.2561;        // K  normal boiling [CoolProp]
HvapTb      33837.6;        // J/mol  at Tb     [CoolProp]
Vliq        8.4724e-05;        // m3/mol @298K     [CoolProp]

vaporPressure
{
    model         Antoine;
    // log10(Psat [bar]) = A - B / (T[K] + C)   -- fitted to CoolProp EOS
    coefficients  (4.37803   1377.92   -48.3524);
    Trange        (277.56  545.86);
}

idealGasHeatCapacity
{
    model         polynomial;
    // Cp [J/(mol.K)] = a0 + a1 T + a2 T^2 + a3 T^3   -- fitted to CoolProp cp0
    coefficients  (43.1336  0.223015  2.24364e-05  -8.72193e-08);
    Trange        (200  1000);
}

liquidHeatCapacity
{
    model         polynomial;
    // Cp_liq [J/(mol.K)]   -- fitted to CoolProp saturated-liquid cp
    coefficients  (248.999  -0.802948  0.00215613  -1.36547e-06);
    Trange        (282  363);
}

triplePoint
{
    T   277.0600;
    P   2226.5237;
}

provenance
{
    constants      "CoolProp 7.2.0 -- Zhou-JPCRD-2011";
    vaporPressure  "Antoine fitted to CoolProp EOS saturation, AAD 0.78%";
    idealGasCp     "polynomial fitted to CoolProp cp0, maxerr 4.54%";
    liquidCp       "polynomial fitted to CoolProp sat-liquid cp, maxerr 0.00%";
    triplePoint    "CoolProp reference EOS triple-point T,P";
}

cosmo
{
    VT2005
    {
        model       COSMOSAC;
        variant     "2002";
        source      "VT-2005 sigma-profile database (Mullins et al., Ind. Eng. Chem. Res. 45 (2006) 4389; DFT-COSMO), file VT2005-1242-PROF.txt bundled in usnistgov/COSMOSAC; CAS 616-38-6";
        licence     externalRestricted;   // VT-2005: redistribution NOT confirmed -- values NOT shipped
        installed   false;                 // install your own copy: bin/choupo-import-cosmo (-> data/local/cosmo/VT2005/)
    }
}
`,ks=`/*--------------------------------*- Choupo -*-----------------------*\\
  Component: dimethylEther  (C2H6O1, CAS 115-10-6)
  PROPOSAL TIER -- UNVERIFIED.  Imported from CoolProp 7.2.0 (MIT);
  pure-fluid properties from the published reference EOS below.
  Reference EOS: Wu-JPCRD-2011
  NOTE: formation properties (dHf, s_298) and group decompositions
  are NOT provided by CoolProp -> omitted here (a gap, not fabricated).
\\*---------------------------------------------------------------------------*/

name        dimethylEther;

//  Review state, MACHINE-READABLE (AP2, 2026-08-05).  This used to
//  live only in the banner above, which the parser discards -- so the
//  engine could not announce it and a run said nothing.
reviewStatus   interim;
reviewReason   importedFromCoolProp720_notCheckedAgainstPrimaries;
formula     C2H6O1;
CAS         115-10-6;

MW          46.0684;        // kg/kmol  [CoolProp]
Tc          400.3780;        // K        [CoolProp EOS]
Pc          53.36665;        // bar      [CoolProp EOS]
omega       0.19600;        // [-]      [CoolProp EOS]
Tb          248.3678;        // K  normal boiling [CoolProp]
HvapTb      21429.5;        // J/mol  at Tb     [CoolProp]
Vliq        6.9650e-05;        // m3/mol @298K     [CoolProp]

vaporPressure
{
    model         Antoine;
    // log10(Psat [bar]) = A - B / (T[K] + C)   -- fitted to CoolProp EOS
    coefficients  (4.18572   922.144   -27.8808);
    Trange        (180.17  392.37);
}

idealGasHeatCapacity
{
    model         polynomial;
    // Cp [J/(mol.K)] = a0 + a1 T + a2 T^2 + a3 T^3   -- fitted to CoolProp cp0
    coefficients  (26.9683  0.125739  3.68148e-05  -4.85109e-08);
    Trange        (200  1000);
}

liquidHeatCapacity
{
    model         polynomial;
    // Cp_liq [J/(mol.K)]   -- fitted to CoolProp saturated-liquid cp
    coefficients  (122.865  -0.285667  0.000828117  8.08457e-09);
    Trange        (200  248);
}

triplePoint
{
    T   131.6600;
    P   2.2107;
}

standardThermochemistry
{
    dHf_298   -216830;      // J/mol ideal-gas -- provenance: see the structured dHf_298 block below
    dGf_298   -139040;      // J/mol  ideal-gas [Joback]
    s_298     245.186;      // J/(mol*K) third-law [DERIVED: (dHf-dGf)/T + CODATA element S]
}

groups { unifac ( { group CH3; count 1; } { group CH3O; count 1; } ); joback ( { group CH3; count 2; } { group ether; count 1; } ); }

provenance
{
    dHf_298
    {
        origin           estimated;
        method           "Joback";
        methodVersion    "joback-poling5e-table2-2";
        input            joback;
        inputFingerprint "CH3:2,ether:1";
        uncertainty      { status unquantified; reason "bulk-import band ~9 kJ/mol, primary basis not verified"; }
    }

    constants      "CoolProp 7.2.0 -- Wu-JPCRD-2011";
    vaporPressure  "Antoine fitted to CoolProp EOS saturation, AAD 0.62%";
    idealGasCp     "polynomial fitted to CoolProp cp0, maxerr 1.80%";
    liquidCp       "polynomial fitted to CoolProp sat-liquid cp, maxerr 0.00%";
    triplePoint    "CoolProp reference EOS triple-point T,P";
    preserved      "from prior proposal (NOT CoolProp): standardThermochemistry, groups";
}

cosmo
{
    VT2005
    {
        model       COSMOSAC;
        variant     "2002";
        source      "VT-2005 sigma-profile database (Mullins et al., Ind. Eng. Chem. Res. 45 (2006) 4389; DFT-COSMO), file VT2005-0711-PROF.txt bundled in usnistgov/COSMOSAC; CAS 115-10-6";
        licence     externalRestricted;   // VT-2005: redistribution NOT confirmed -- values NOT shipped
        installed   false;                 // install your own copy: bin/choupo-import-cosmo (-> data/local/cosmo/VT2005/)
    }
}
`,Ms=`/*--------------------------------*- Choupo -*-----------------------*\\
  Mineral: diopside (CaMgSi2O6) -- unified substance file.
  One canonical record per chemical identity; the solid-phase dissolution
  equilibrium (Ksp) lives here as a typed solidPhase (roadmap Phase D).
  Migrated from chemistry/mineralSolubility/ with values preserved verbatim.
\\*---------------------------------------------------------------------------*/
name diopside;
formula "CaMgSi2O6";

solidPhases
{
    diopside
    {
        dissolutionReaction { masters ( { ion Ca; nu 1; } { ion Mg; nu 1; } { ion H4SiO4; nu 2; } { ion H; nu -4; } ); nuWater -2; }
        equilibrium { logK25 20.96; dH -134000; source "USGS PHREEQC pitzer.dat/phreeqc.dat (public domain); reaction re-expressed to Choupo master basis from Diopside"; }
    }
}
`,Ks=`/*--------------------------------*- Choupo -*-----------------------*\\
  Substance: Dolomite (CaMg(CO3)2)

  UNIFIED substance file -- the MULTI-ION proof case (ratified 2026-07-14).

  Demonstrates general (>1 cation) stoichiometry. The apparent-component
  dissociatesTo uses the Ca/Mg/CO3 basis and is distinct from the solid
  phase dissolutionReaction, which is written in the HCO3/H+ basis.

  This record currently supplies equilibrium data only. It carries no
  calorimetric or crystal block because no current consumer requires
  those data.

  Replaces chemistry/mineralSolubility/dolomite.dat.
\\*---------------------------------------------------------------------------*/

name           dolomite;
formula        "CaMg(CO3)2";
MW             184.40;         // g/mol

// APPARENT COMPONENT VIEW
//
// Stoichiometric balance/representation map from the apparent component
// to aqueous species. General stoichiometry is legal here; only the
// legacy single-salt adapter is restricted to one cation + one anion.
dissociatesTo  { Ca 1; Mg 1; CO3 2; }   // ion stoichiometry (formula-like identity)

// SOLID-PHASE VIEW
solidPhases
{
    dolomite
    {
        // Thermodynamic dissolution reaction in the HCO3/H+ basis:
        //
        // CaMg(CO3)2(s) + 2 H+
        //     <=> Ca2+ + Mg2+ + 2 HCO3-
        //
        // Coefficients follow the Choupo convention:
        // products positive, reactants negative.
        dissolutionReaction
        {
            masters
            (
                { ion Ca;    nu  1; }
                { ion Mg;    nu  1; }
                { ion HCO3;  nu  2; }
                { ion H;     nu -2; }
            );
        }

        equilibrium
        {
            logK25  3.568;

            // J/mol: reaction enthalpy for the exact HCO3/H+ reaction
            // written above. This is not a calorimetric crystalliser-duty
            // dissolutionEnthalpy.
            dH      -69278.7;

            analytic
            (
                 247.0572
                  -0.02474302
              -16741.58
                 -77.85122
             1127427.8
            );

            source "Derived by exact reaction-basis transformation from USGS PHREEQC phreeqc.dat: Dolomite = Ca+2 + Mg+2 + 2 CO3-2, combined with twice CO3-2 + H+ = HCO3-. Original dolomite data reference: Hemingway & Robie 1994; Benezeth et al. 2018, GCA 224, 262-275.";
        }
    }
}
`,qs=`/*--------------------------------*- Choupo -*-----------------------*\\
  Component: Dowtherm A  (eutectic of 73.5 wt% diphenyl oxide + 26.5 wt% biphenyl)
  Pseudo-component for use as a high-temperature liquid heat-transfer fluid.

  Sources:
    Dow Chemical Technical Data Sheet, "Dowtherm A Heat Transfer Fluid",
      Doc 176-01463-01 (saturated liquid property tables at 100/200/300/400 C
      were extracted, then linear/quadratic fits below).
    Tc, Pc, omega are eutectic-mixture estimates (pseudo-component); these
      are individual literature/estimated values -- primary re-citation
      pending (IST review).

  Use:
    Pseudo-fluid for the \`dowthermA\` utility (closed-loop sensible heat carrier
    in the 285-650 K range, ~13 to ~377 C).  Do NOT put in a reactor or any
    case where you actually need ΔHrxn — this entry has NO standardThermochemistry
    block on purpose (the heat-carrier never reacts in normal use).

  Limits:
    Cp polynomial good to ~5 % across 373-673 K (the Dow TDS range).
    No Antoine block — Dowtherm A may be vaporised at high T but
    the typical utility loop runs liquid-phase only; if you need
    vapour-phase data, add it case-locally.
\\*---------------------------------------------------------------------------*/

name        dowthermA;
formula     "(C6H5)2O + C6H5C6H5 eutectic";
CAS         8004-13-5;          // pseudo-mixture CAS for Dowtherm A

MW          165.8;               // g/mol  (mass-weighted: 0.735*170 + 0.265*154)
Tc          770.0;               // K   (mixture estimate)
Pc          31.0;                // bar (mixture estimate)
omega       0.40;                // acentric factor (mixture estimate)
Tb          530.15;              // K   (257 C, normal boiling point)
HvapTb      39000.0;             // J/mol at Tb (Dow TDS)
Vliq        1.55e-4;             // m^3/mol at 298 K (MW / ρ(298))

role        nonvolatile;         // MODELLING class: how a case treats it (K = 0)

//  The SUBSTANCE's physics, orthogonal to the modelling class above.  Dowtherm
//  A is sold as a VAPOUR-PHASE heat-transfer fluid -- boiling is its industrial
//  purpose -- so \`role nonvolatile\` is a case-scoped simplification for the
//  closed-loop sensible-heat service, never a claim about the fluid.  The
//  engine now ANNOUNCES that contradiction instead of obeying it in silence
//  (it used to live only in the comment on the line above, where no machine
//  could read it).  The falsifying datum is the canonical \`Tb\` at the top of
//  this record -- one number, one home; this block must not restate it.
//  Forum: docs/design/role-vocabulary-forum-2026-08-02.md.
volatility
{
    class       volatile;
    provenance  { citation "Dow Chemical TDS 176-01463-01: normal boiling point 257 C; the fluid's vapour-phase service is its documented use"; status accepted; }
}

liquidHeatCapacity
{
    // Linear fit of Dow TDS Cp data at 100, 200, 300, 400 C:
    //   Cp [J/kg·K] = 681 + 3.04 * T[K]
    // Converted to molar: multiply by MW/1000 = 0.1658 kg/mol
    model         polynomial;
    coefficients  (112.9   0.5036);
    //  NARROWED to the fit this record documents (AP7, 2026-08-05).  The
    //  header states "Cp polynomial good to ~5 % across 373-673 K (the Dow
    //  TDS range)" while the field claimed (285 670) -- over-claiming 88 K
    //  at the bottom.
    //
    //  A CATEGORY CONFUSION, not a typo: line 15 gives the fluid's usable
    //  LIQUID range as 285-650 K, and 285 leaked from there into the Cp
    //  VALIDITY field.  Two different properties, one number.  Being liquid
    //  at 285 K says nothing about whether a Cp fitted from 373 K upward
    //  describes it there.
    Trange        (373  673);
}
`,Is=`/*--------------------------------*- Choupo -*-----------------------*\\
  Mineral: enstatite (MgSiO3) -- unified substance file.
  One canonical record per chemical identity; the solid-phase dissolution
  equilibrium (Ksp) lives here as a typed solidPhase (roadmap Phase D).
  Migrated from chemistry/mineralSolubility/ with values preserved verbatim.
\\*---------------------------------------------------------------------------*/
name enstatite;
formula "MgSiO3";

solidPhases
{
    enstatite
    {
        dissolutionReaction { masters ( { ion Mg; nu 1; } { ion H4SiO4; nu 1; } { ion H; nu -2; } ); nuWater -1; }
        equilibrium { logK25 11.33; dH -83000; source "USGS PHREEQC pitzer.dat/phreeqc.dat (public domain); reaction re-expressed to Choupo master basis from Enstatite"; }
    }
}
`,Js=`/*--------------------------------*- Choupo -*-----------------------*\\
  Mineral: epsomite (MgSO4:7H2O) -- unified substance file.
  One canonical record per chemical identity; the solid-phase dissolution
  equilibrium (Ksp) lives here as a typed solidPhase (roadmap Phase D).
  Migrated from chemistry/mineralSolubility/ with values preserved verbatim.
\\*---------------------------------------------------------------------------*/
name epsomite;
formula "MgSO4:7H2O";

solidPhases
{
    epsomite
    {
        dissolutionReaction { masters ( { ion Mg; nu 1; } { ion SO4; nu 1; } ); nuWater 7; }
        equilibrium { logK25 -1.74; dH 10570; analytic ( -3.59 0.00621 ); source "USGS PHREEQC phreeqc.dat (public domain)"; }
        thermochemistry
        {
            Hf298 -3.38871e+06;   // J/mol   (formation enthalpy of the solid)
            S298  371.288;   // J/(mol.K)
            Cp298 166.074;   // J/(mol.K) at 298.15 K (Maier-Kelley a+bT+c/T^2)
            source "Grevel & Majzlan 2009, Geochim. Cosmochim. Acta 73 -- via CHNOSZ OBIGT (open compilation)";
        }
    }
}
`,Vs=`/*--------------------------------*- Choupo -*-----------------------*\\
  Component: Ethane  (C2H6, CAS 74-84-0)

  Second-largest component of natural gas after methane.  The classic
  feedstock for the steam cracker; the C2H6 / C2H4 / H2 / C / CO2 /
  H2O equilibrium at ~1100 K is a standard GibbsReactor exercise.
  Sources: constants (Tc/Pc/omega/MW/Tb) cross-checked vs CoolProp 7.2.0
  reference EOS; standardThermochemistry cross-checked vs NASA TM-4513
  (McBride-Gordon-Reno 1993); idealGasHeatCapacity -- individual
  literature value, primary re-citation pending (IST review).
\\*---------------------------------------------------------------------------*/

name        ethane;
formula     C2H6;
CAS         74-84-0;

MW          30.070;            // kg/kmol
Tc          305.32;             // K
Pc          48.72;              // bar
omega       0.099;              // [-]
Tb          184.55;             // K
HvapTb      14690;              // J/mol
Vliq        5.51e-5;            // m^3/mol

standardThermochemistry
{
    dHf_298    -84680.0;        // J/mol  -- ideal-gas reference
    s_298      229.16;          // J/(mol·K)
}

vaporPressure
{
    model         Antoine;
    coefficients  (3.93835   659.739   -16.719);
    Trange        (168  305);
}

idealGasHeatCapacity
{
    model         polynomial;
    coefficients  (5.409   0.1781   -6.938e-5   8.713e-9);
    Trange        (250  1500);
}

groups
{
    unifac ( { group CH3; count 2; } );
    joback ( { group CH3; count 2; } );
}

// Friendly-name aliases -- resolved to this file via the generated ALIASES index.
aliases ( C2H6 );

cosmo
{
    VT2005
    {
        model       COSMOSAC;
        variant     "2002";
        source      "VT-2005 sigma-profile database (Mullins et al., Ind. Eng. Chem. Res. 45 (2006) 4389; DFT-COSMO), file VT2005-0002-PROF.txt bundled in usnistgov/COSMOSAC; CAS 74-84-0";
        licence     externalRestricted;   // VT-2005: redistribution NOT confirmed -- values NOT shipped
        installed   false;                 // install your own copy: bin/choupo-import-cosmo (-> data/local/cosmo/VT2005/)
    }
}
`,Ds=`/*--------------------------------*- Choupo -*-----------------------*\\
  Component: Ethanol  (C2H6O, CAS 64-17-5)
  Sources: critical constants (Tc/Pc/omega/Tb/HvapTb/Vliq), Antoine
           coefficients, Cp polynomials and the ideal-gas formation datum
           (dHf_298/s_298, JANAF convention) are individual literature
           values -- primary re-citation pending (IST review).  The
           Andrade/Vogel viscosity fits are least-squares over literature
           mu(T), ~10-100 degC (see block comment); relativePermittivity
           24.3 (25 degC) carries the same pending re-citation.
\\*---------------------------------------------------------------------------*/

name        ethanol;
formula     C2H6O;
CAS         64-17-5;



MW          46.069;
Tc          513.92;
Pc          61.48;
omega       0.6490;
Tb          351.44;
HvapTb      38560;
Vliq        5.850e-5;


standardThermochemistry
{
    dHf_298   -234950.0;        // J/mol  -- ideal-gas reference
    s_298     281.620;         // J/(mol·K)  -- third-law absolute
}
vaporPressure
{
    model         Antoine;
    coefficients  (5.37229   1670.409   -40.191);
    Trange        (273  369);
}

idealGasHeatCapacity
{
    model         polynomial;
    coefficients  (9.014   0.2141   -8.39e-5   1.373e-9);
    Trange        (200  1500);
}

liquidHeatCapacity
{
    model         polynomial;
    coefficients  (112.3);
    Trange        (280  351);
}

// Liquid transport (v0.62+).  associationFactor = Wilke-Chang phi (solvent).
// liquidViscosity: ln(mu/Pa.s) = A + B/T (Andrade) or A + B/(T-C) (Vogel),
// fitted to literature mu(T) over ~10-100 degC.
associationFactor  1.5;
liquidViscosity
{
    andrade { A -12.6467; B 1736.8; }
    vogel   { A -10.8798; B 796.9; C 101.5; }
}

relativePermittivity 24.3;   // dielectric constant, 25 C (for mixed-solvent eNRTL / drowning-out)

uniquac
{
    r   2.1055;
    q   1.9720;     // van der Waals structural constants (Abrams & Prausnitz,
                    // AIChE J. 21 (1975) 116; tabulated in Poling, Prausnitz &
                    // O'Connell, 5th ed., UNIQUAC r,q)
}

pcsaft
{
    // Associating (2B: one donor + one acceptor, the alcohol OH) -- the
    // ethanol set of Gross & Sadowski 2002, fitted WITH the association
    // term; the segment trio below is meaningless without assocScheme 2B.
    m           2.3827;
    sigma       3.1771;
    epsilonK    198.24;
    assocScheme 2B;
    epsAB_K     2653.4;
    kappaAB     0.032384;
    source      "Gross & Sadowski, Ind. Eng. Chem. Res. 41 (2002) 5510, Table 1 (2B ethanol)";
}

groups
{
    joback ( { group CH3; count 1; } { group CH2; count 1; } { group OH; count 1; } );
    unifac ( { group CH3; count 1; } { group CH2; count 1; } { group OH; count 1; } );
}

cosmo
{
    VT2005
    {
        model       COSMOSAC;
        variant     "2002";
        source      "VT-2005 sigma-profile database (Mullins et al., Ind. Eng. Chem. Res. 45 (2006) 4389; DFT-COSMO), file VT2005-0478-PROF.txt bundled in usnistgov/COSMOSAC; CAS 64-17-5";
        licence     externalRestricted;   // VT-2005: redistribution NOT confirmed -- values NOT shipped
        installed   false;                 // install your own copy: bin/choupo-import-cosmo (-> data/local/cosmo/VT2005/)
    }
}

// ---- Aqueous-speciation FACTS (substance-level, classifier-read) ----
// Curated fact: ethanol does NOT participate in the aqueous speciation
// network at this thermodynamic level (pKa ~ 15.9 -- negligible).  This
// says nothing about aqueous reactions in general (esterification etc.
// belong to reaction sets, not to equilibrium speciation).
aqueousSpeciation  none;
`,Fs=`/*--------------------------------*- Choupo -*-----------------------*\\
  Component: Ethyl Acetate  (C4H8O2, CAS 141-78-6)
  Sources: critical constants (Tc/Pc/omega/Tb/HvapTb/Vliq), Antoine
           coefficients, Cp polynomials and the ideal-gas formation datum
           (dHf_298/s_298, JANAF convention) are individual literature
           values -- primary re-citation pending (IST review).
\\*---------------------------------------------------------------------------*/

name        ethylAcetate;
formula     C4H8O2;
CAS         141-78-6;

MW          88.106;
Tc          523.20;
Pc          38.30;
omega       0.3664;
Tb          350.21;
HvapTb      31940;
Vliq        9.819e-5;       // 98.19 cm³/mol at 25 °C


standardThermochemistry
{
    dHf_298   -442920.0;        // J/mol  -- ideal-gas reference
    s_298     359.710;         // J/(mol·K)  -- third-law absolute
}
vaporPressure
{
    model         Antoine;
    coefficients  (4.13361   1195.130   -53.118);
    Trange        (290  370);
}

idealGasHeatCapacity
{
    model         polynomial;
    coefficients  (7.235   0.4072   -2.092e-4   2.855e-8);
    Trange        (200  1500);
}

liquidHeatCapacity
{
    model         polynomial;
    coefficients  (170.7);
    Trange        (280  350);
}

groups
{
    unifac ( { group CH3; count 1; } { group CH2; count 1; } { group CH3COO; count 1; } );
    joback ( { group CH3; count 2; } { group CH2; count 1; } { group ester; count 1; } );
}

cosmo
{
    VT2005
    {
        model       COSMOSAC;
        variant     "2002";
        source      "VT-2005 sigma-profile database (Mullins et al., Ind. Eng. Chem. Res. 45 (2006) 4389; DFT-COSMO), file VT2005-0639-PROF.txt bundled in usnistgov/COSMOSAC; CAS 141-78-6";
        licence     externalRestricted;   // VT-2005: redistribution NOT confirmed -- values NOT shipped
        installed   false;                 // install your own copy: bin/choupo-import-cosmo (-> data/local/cosmo/VT2005/)
    }
}
`,Gs=`/*--------------------------------*- Choupo -*-----------------------*\\
  Component: ethylBenzene  (C8H10, CAS 100-41-4)
  PROPOSAL TIER -- UNVERIFIED.  Imported from CoolProp 7.2.0 (MIT);
  pure-fluid properties from the published reference EOS below.
  Reference EOS: Zhou-JPCRD-2012
  NOTE: formation properties (dHf, s_298) and group decompositions
  are NOT provided by CoolProp -> omitted here (a gap, not fabricated).
\\*---------------------------------------------------------------------------*/

name        ethylBenzene;

//  Review state, MACHINE-READABLE (AP2, 2026-08-05).  This used to
//  live only in the banner above, which the parser discards -- so the
//  engine could not announce it and a run said nothing.
reviewStatus   interim;
reviewReason   importedFromCoolProp720_notCheckedAgainstPrimaries;
formula     C8H10;
CAS         100-41-4;

MW          106.1650;        // kg/kmol  [CoolProp]
Tc          617.1200;        // K        [CoolProp EOS]
Pc          36.22442;        // bar      [CoolProp EOS]
omega       0.30400;        // [-]      [CoolProp EOS]
Tb          409.3142;        // K  normal boiling [CoolProp]
HvapTb      35597.1;        // J/mol  at Tb     [CoolProp]
Vliq        1.2310e-04;        // m3/mol @298K     [CoolProp]

vaporPressure
{
    model         Antoine;
    // log10(Psat [bar]) = A - B / (T[K] + C)   -- fitted to CoolProp EOS
    coefficients  (4.16834   1479.99   -53.923);
    Trange        (277.70  604.78);
}

idealGasHeatCapacity
{
    model         polynomial;
    // Cp [J/(mol.K)] = a0 + a1 T + a2 T^2 + a3 T^3   -- fitted to CoolProp cp0
    coefficients  (-21.7637  0.591983  -0.000291878  3.35208e-08);
    Trange        (200  1000);
}

liquidHeatCapacity
{
    model         polynomial;
    // Cp_liq [J/(mol.K)]   -- fitted to CoolProp saturated-liquid cp
    coefficients  (152.521  -0.214832  0.00140671  -1.06367e-06);
    Trange        (309  409);
}

triplePoint
{
    T   178.2000;
    P   0.0040;
}

standardThermochemistry
{
    dHf_298   28080;      // J/mol ideal-gas -- provenance: see the structured dHf_298 block below
    dGf_298   128890;      // J/mol  ideal-gas [Joback]
    s_298     361.202;      // J/(mol*K) third-law [DERIVED: (dHf-dGf)/T + CODATA element S]
}

groups { unifac ( { group CH3; count 1; } { group ACH; count 5; } { group ACCH2; count 1; } ); joback ( { group CH3; count 1; } { group CH2; count 1; } { group arCH; count 5; } { group arC; count 1; } ); }

provenance
{
    dHf_298
    {
        origin           estimated;
        method           "Joback";
        methodVersion    "joback-poling5e-table2-2";
        input            joback;
        inputFingerprint "CH2:1,CH3:1,arC:1,arCH:5";
        uncertainty      { status unquantified; reason "bulk-import band ~9 kJ/mol, primary basis not verified"; }
    }

    constants      "CoolProp 7.2.0 -- Zhou-JPCRD-2012";
    vaporPressure  "Antoine fitted to CoolProp EOS saturation, AAD 0.58%";
    idealGasCp     "polynomial fitted to CoolProp cp0, maxerr 3.85%";
    liquidCp       "polynomial fitted to CoolProp sat-liquid cp, maxerr 0.00%";
    triplePoint    "CoolProp reference EOS triple-point T,P";
    preserved      "from prior proposal (NOT CoolProp): standardThermochemistry, groups";
}

cosmo
{
    VT2005
    {
        model       COSMOSAC;
        variant     "2002";
        source      "VT-2005 sigma-profile database (Mullins et al., Ind. Eng. Chem. Res. 45 (2006) 4389; DFT-COSMO), file VT2005-0244-PROF.txt bundled in usnistgov/COSMOSAC; CAS 100-41-4";
        licence     externalRestricted;   // VT-2005: redistribution NOT confirmed -- values NOT shipped
        installed   false;                 // install your own copy: bin/choupo-import-cosmo (-> data/local/cosmo/VT2005/)
    }
}
`,Ls=`/*--------------------------------*- Choupo -*-----------------------*\\
  Component: Ethylene  (C2H4, CAS 74-85-1)

  Largest-volume organic feedstock worldwide --- the building block of
  polyethylene, ethylene oxide, ethylbenzene.  Produced by steam
  cracking of ethane/naphtha; an obvious target for the Choupo
  GibbsReactor when modelling thermal cracking equilibria.
  Sources: constants (Tc/Pc/omega/MW/Tb) cross-checked vs CoolProp 7.2.0
  reference EOS; standardThermochemistry cross-checked vs NASA TM-4513
  (McBride-Gordon-Reno 1993); idealGasHeatCapacity -- individual
  literature value, primary re-citation pending (IST review).
\\*---------------------------------------------------------------------------*/

name        ethylene;
formula     C2H4;
CAS         74-85-1;

MW          28.054;            // kg/kmol
Tc          282.34;             // K
Pc          50.41;              // bar
omega       0.087;              // [-]
Tb          169.42;             // K
HvapTb      13530;              // J/mol
Vliq        4.91e-5;            // m^3/mol

standardThermochemistry
{
    dHf_298    52280.0;         // J/mol  -- ideal-gas reference
    s_298      219.32;          // J/(mol·K)
}

vaporPressure
{
    model         Antoine;
    coefficients  (3.91382   596.526   -16.844);
    Trange        (150  283);
}

idealGasHeatCapacity
{
    model         polynomial;
    coefficients  (3.806   0.1566   -8.348e-5   1.755e-8);
    Trange        (250  1500);
}

groups
{
    joback ( { group eCH2; count 2; } );
}

// Friendly-name aliases -- resolved to this file via the generated ALIASES index.
aliases ( ethene C2H4 );

cosmo
{
    VT2005
    {
        model       COSMOSAC;
        variant     "2002";
        source      "VT-2005 sigma-profile database (Mullins et al., Ind. Eng. Chem. Res. 45 (2006) 4389; DFT-COSMO), file VT2005-0124-PROF.txt bundled in usnistgov/COSMOSAC; CAS 74-85-1";
        licence     externalRestricted;   // VT-2005: redistribution NOT confirmed -- values NOT shipped
        installed   false;                 // install your own copy: bin/choupo-import-cosmo (-> data/local/cosmo/VT2005/)
    }
}
`,js=`/*--------------------------------*- Choupo -*-----------------------*\\
  Component: ethyleneOxide  (C2H4O1, CAS 75-21-8)
  PROPOSAL TIER -- UNVERIFIED.  Imported from CoolProp 7.2.0 (MIT);
  pure-fluid properties from the published reference EOS below.
  Reference EOS: Thol-CES-2015,Thol-CES-2015-CORR,Thol-THESIS-2015
  NOTE: formation properties (dHf, s_298) and group decompositions
  are NOT provided by CoolProp -> omitted here (a gap, not fabricated).
\\*---------------------------------------------------------------------------*/

name        ethyleneOxide;

//  Review state, MACHINE-READABLE (AP2, 2026-08-05).  This used to
//  live only in the banner above, which the parser discards -- so the
//  engine could not announce it and a run said nothing.
reviewStatus   interim;
reviewReason   importedFromCoolProp720_notCheckedAgainstPrimaries;
formula     C2H4O1;
CAS         75-21-8;

MW          44.0526;        // kg/kmol  [CoolProp]
Tc          468.9200;        // K        [CoolProp EOS]
Pc          73.04687;        // bar      [CoolProp EOS]
omega       0.21020;        // [-]      [CoolProp EOS]
Tb          283.6595;        // K  normal boiling [CoolProp]
HvapTb      25465.2;        // J/mol  at Tb     [CoolProp]
Vliq        5.1053e-05;        // m3/mol @298K     [CoolProp]

vaporPressure
{
    model         Antoine;
    // log10(Psat [bar]) = A - B / (T[K] + C)   -- fitted to CoolProp EOS
    coefficients  (4.39002   1120.41   -28.307);
    Trange        (211.01  459.54);
}

idealGasHeatCapacity
{
    model         polynomial;
    // Cp [J/(mol.K)] = a0 + a1 T + a2 T^2 + a3 T^3   -- fitted to CoolProp cp0
    coefficients  (3.64139  0.16258  -2.88989e-05  -2.29628e-08);
    Trange        (200  1000);
}

liquidHeatCapacity
{
    model         polynomial;
    // Cp_liq [J/(mol.K)]   -- fitted to CoolProp saturated-liquid cp
    coefficients  (123.101  -0.465884  0.00150236  -1.08187e-06);
    Trange        (234  284);
}

triplePoint
{
    T   160.6500;
    P   8.2516;
}

standardThermochemistry
{
    dHf_298   -52630;      // J/mol ideal-gas, MEASURED -- see the structured dHf_298 block below
    dGf_298   -13150;      // J/mol  [DERIVED: dHf - 298.15*(s_298 - Sum S_elements), CODATA element S]
    s_298     243.0;      // J/(mol*K) third-law absolute (TRC class; primary re-citation pending IST review)
}

groups { joback ( { group rCH2; count 2; } { group etherRing; count 1; } ); }

provenance
{
    dHf_298
    {
        origin           measured;
        method           "combustion calorimetry";
        citation         "Pell & Pilcher, Trans. Faraday Soc. 61 (1965) 71, via NIST WebBook (gas-phase dHf = -52.63 kJ/mol); s_298 third-law, TRC class";
        note             "PROMOTED 2026-08-03 from the Joback estimate (-123,470 -- a ~71 kJ/mol ring-strain error) under the ratified ring-class ruling (docs/design/curation-backlog-estimated-records.md, ring section).  dGf derived from the measured dHf + third-law S + CODATA element entropies; cross-checks the literature dGf ~ -13.1 kJ/mol.  FOR REVIEW.";
    }

    constants      "CoolProp 7.2.0 -- Thol-CES-2015,Thol-CES-2015-CORR,Thol-THESIS-2015";
    vaporPressure  "Antoine fitted to CoolProp EOS saturation, AAD 0.75%";
    idealGasCp     "polynomial fitted to CoolProp cp0, maxerr 4.83%";
    liquidCp       "polynomial fitted to CoolProp sat-liquid cp, maxerr 0.00%";
    triplePoint    "CoolProp reference EOS triple-point T,P";
    preserved      "from prior proposal (NOT CoolProp): standardThermochemistry, groups";
}

cosmo
{
    VT2005
    {
        model       COSMOSAC;
        variant     "2002";
        source      "VT-2005 sigma-profile database (Mullins et al., Ind. Eng. Chem. Res. 45 (2006) 4389; DFT-COSMO), file VT2005-0742-PROF.txt bundled in usnistgov/COSMOSAC; CAS 75-21-8";
        licence     externalRestricted;   // VT-2005: redistribution NOT confirmed -- values NOT shipped
        installed   false;                 // install your own copy: bin/choupo-import-cosmo (-> data/local/cosmo/VT2005/)
    }
}
`,Bs=`/*--------------------------------*- Choupo -*-----------------------*\\
  Component: fluorine  (F2, CAS 7782-41-4)
  PROPOSAL TIER -- UNVERIFIED.  Imported from CoolProp 7.2.0 (MIT);
  pure-fluid properties from the published reference EOS below.
  Reference EOS: deReuck-BOOK-1990
  NOTE: formation properties (dHf, s_298) and group decompositions
  are NOT provided by CoolProp -> omitted here (a gap, not fabricated).
\\*---------------------------------------------------------------------------*/

name        fluorine;

//  Review state, MACHINE-READABLE (AP2, 2026-08-05).  This used to
//  live only in the banner above, which the parser discards -- so the
//  engine could not announce it and a run said nothing.
reviewStatus   interim;
reviewReason   importedFromCoolProp720_notCheckedAgainstPrimaries;
formula     F2;
CAS         7782-41-4;

MW          37.9968;        // kg/kmol  [CoolProp]
Tc          144.4144;        // K        [CoolProp EOS]
Pc          52.39517;        // bar      [CoolProp EOS]
omega       0.04490;        // [-]      [CoolProp EOS]
Tb          85.0368;        // K  normal boiling [CoolProp]
HvapTb      6625.4;        // J/mol  at Tb     [CoolProp]

vaporPressure
{
    model         Antoine;
    // log10(Psat [bar]) = A - B / (T[K] + C)   -- fitted to CoolProp EOS
    coefficients  (4.00545   321.194   -4.80025);
    Trange        (64.99  141.53);
}

idealGasHeatCapacity
{
    model         polynomial;
    // Cp [J/(mol.K)] = a0 + a1 T + a2 T^2 + a3 T^3   -- fitted to CoolProp cp0
    coefficients  (24.4083  0.0302421  -2.50371e-05  7.4068e-09);
    Trange        (200  1000);
}

liquidHeatCapacity
{
    model         polynomial;
    // Cp_liq [J/(mol.K)]   -- fitted to CoolProp saturated-liquid cp
    coefficients  (55.697  0.138976  -0.00404293  3.10927e-05);
    Trange        (72  85);
}

triplePoint
{
    T   53.4811;
    P   238.8103;
}

standardThermochemistry
{
    dHf_298   0;            // J/mol -- F2 is an ELEMENT in its standard state: 0 BY DEFINITION
    dGf_298   0;            // J/mol -- same definition
    s_298     202.791;      // J/(mol*K) third-law absolute [CODATA key values, F2(g)]
}

groups { joback ( { group F; count 2; } ); }

provenance
{
    dHf_298
    {
        origin           definition;
        method           "element standard state";
        citation         "IUPAC convention: an element in its reference state has dHf = dGf = 0 at 298.15 K; s_298 from CODATA Key Values for Thermodynamics (Cox, Wagman & Medvedev 1989), F2(g) S = 202.791 J/(mol K)";
        note             "CATEGORY-ERROR correction 2026-08-02: the record carried a Joback ESTIMATE (-435,550 J/mol) for an element -- a definition violation, not an estimation choice; corrected under Vitor's ruling that definition errors are correctable with a logged review trail (docs/design/curation-backlog-estimated-records.md P0).  FOR REVIEW.";
    }

    constants      "CoolProp 7.2.0 -- deReuck-BOOK-1990";
    vaporPressure  "Antoine fitted to CoolProp EOS saturation, AAD 0.66%";
    idealGasCp     "polynomial fitted to CoolProp cp0, maxerr 0.57%";
    liquidCp       "polynomial fitted to CoolProp sat-liquid cp, maxerr 0.00%";
    triplePoint    "CoolProp reference EOS triple-point T,P";
    preserved      "from prior proposal (NOT CoolProp): standardThermochemistry, groups";
}

cosmo
{
    VT2005
    {
        model       COSMOSAC;
        variant     "2002";
        source      "VT-2005 sigma-profile database (Mullins et al., Ind. Eng. Chem. Res. 45 (2006) 4389; DFT-COSMO), file VT2005-0395-PROF.txt bundled in usnistgov/COSMOSAC; CAS 7782-41-4";
        licence     externalRestricted;   // VT-2005: redistribution NOT confirmed -- values NOT shipped
        installed   false;                 // install your own copy: bin/choupo-import-cosmo (-> data/local/cosmo/VT2005/)
    }
}
`,Ws=`/*--------------------------------*- Choupo -*-----------------------*\\
  Mineral: fluorite (CaF2) -- unified substance file.
  One canonical record per chemical identity; the solid-phase dissolution
  equilibrium (Ksp) lives here as a typed solidPhase (roadmap Phase D).
  Migrated from chemistry/mineralSolubility/ with values preserved verbatim.
\\*---------------------------------------------------------------------------*/
name fluorite;
formula "CaF2";

solidPhases
{
    fluorite
    {
        dissolutionReaction { masters ( { ion Ca; nu 1; } { ion F; nu 2; } ); }
        equilibrium { logK25 -10.61; dH 10600; analytic ( 57.313 0 -3495 -22.714 ); source "USGS PHREEQC phreeqc.dat (public domain); lit: Strubel, 1965, NJbM,M 83-95; Henry, 2018, PhD, Colorado School of Mines."; }
        thermochemistry
        {
            Hf298 -1.22591e+06;   // J/mol   (formation enthalpy of the solid)
            S298  68.5758;   // J/(mol.K)
            Cp298 71.1249;   // J/(mol.K) at 298.15 K (Maier-Kelley a+bT+c/T^2)
            source "Helgeson, Delany, Nesbitt & Bird 1978, Am. J. Sci. 278-A -- via CHNOSZ OBIGT (open compilation)";
        }
    }
}
`,Us=`/*--------------------------------*- Choupo -*-----------------------*\\
  Mineral: forsterite (Mg2SiO4) -- unified substance file.
  One canonical record per chemical identity; the solid-phase dissolution
  equilibrium (Ksp) lives here as a typed solidPhase (roadmap Phase D).
  Migrated from chemistry/mineralSolubility/ with values preserved verbatim.
\\*---------------------------------------------------------------------------*/
name forsterite;
formula "Mg2SiO4";

solidPhases
{
    forsterite
    {
        dissolutionReaction { masters ( { ion H4SiO4; nu 1; } { ion Mg; nu 2; } { ion H; nu -4; } ); }
        equilibrium { logK25 27.86; dH -206000; source "USGS PHREEQC pitzer.dat/phreeqc.dat (public domain); reaction re-expressed to Choupo master basis from Forsterite"; }
    }
}
`,zs=`/*--------------------------------*- Choupo -*-----------------------*\\
  Mineral: gaylussite (CaNa2(CO3)2:5H2O) -- unified substance file.
  One canonical record per chemical identity; the solid-phase dissolution
  equilibrium (Ksp) lives here as a typed solidPhase (roadmap Phase D).
  Migrated from chemistry/mineralSolubility/ with values preserved verbatim.
\\*---------------------------------------------------------------------------*/
name gaylussite;
formula "CaNa2(CO3)2:5H2O";

solidPhases
{
    gaylussite
    {
        dissolutionReaction { masters ( { ion Ca; nu 1; } { ion HCO3; nu 2; } { ion H; nu -2; } { ion Na; nu 2; } ); nuWater 5; }
        equilibrium { logK25 11.237; dH -29798.4; source "USGS PHREEQC pitzer.dat/phreeqc.dat (public domain); reaction re-expressed to Choupo master basis from Gaylussite"; }
    }
}
`,$s=`/*--------------------------------*- Choupo -*-----------------------*\\
  Mineral: glaserite (NaK3(SO4)2) -- unified substance file.
  One canonical record per chemical identity; the solid-phase dissolution
  equilibrium (Ksp) lives here as a typed solidPhase (roadmap Phase D).
  Migrated from chemistry/mineralSolubility/ with values preserved verbatim.
\\*---------------------------------------------------------------------------*/
name glaserite;
formula "NaK3(SO4)2";

solidPhases
{
    glaserite
    {
        dissolutionReaction { masters ( { ion Na; nu 1; } { ion K; nu 3; } { ion SO4; nu 2; } ); }
        equilibrium { logK25 -3.803; dH 25000; source "USGS PHREEQC pitzer.dat/phreeqc.dat (public domain); reaction re-expressed to Choupo master basis from Glaserite"; }
    }
}
`,Ys=`/*--------------------------------*- Choupo -*-----------------------*\\
  Mineral: glauberite (Na2Ca(SO4)2) -- unified substance file.
  One canonical record per chemical identity; the solid-phase dissolution
  equilibrium (Ksp) lives here as a typed solidPhase (roadmap Phase D).
  Migrated from chemistry/mineralSolubility/ with values preserved verbatim.
\\*---------------------------------------------------------------------------*/
name glauberite;
formula "Na2Ca(SO4)2";

solidPhases
{
    glauberite
    {
        dissolutionReaction { masters ( { ion Ca; nu 1; } { ion Na; nu 2; } { ion SO4; nu 2; } ); }
        equilibrium { logK25 -5.31; dH 0; analytic ( 218.142 0 -9285 -77.735 0 0 ); validC ( 0 200 ); source "USGS PHREEQC pitzer.dat/phreeqc.dat (public domain); reaction re-expressed to Choupo master basis from Glauberite"; }
    }
}
`,Qs=`/*--------------------------------*- Choupo -*-----------------------*\\
  Component: D-Glucose (C6H12O6, CAS 50-99-7)

  A non-volatile non-electrolyte solute --- a canonical NF tutorial
  case (sugar separation from water).  Glucose does not dissociate
  in water; the van't Hoff factor is 1.

  Typical industrial concentrations: <100 g/L for food / pharma
  separations.  NF membranes partially reject glucose
  (MW 180 ≈ NF270 cutoff of 200 Da), giving the partial-rejection
  curve that pedagogically distinguishes NF from RO.
  Sources: dHf_298 from Ponomarev & Migarskaya, Russ. J. Phys. Chem. 34
           (1960) -- combustion calorimetry; s_298 from Boerio-Goates,
           J. Chem. Thermodyn. 23 (1991) -- adiabatic calorimetry (full
           citations at the standardThermochemistry block).  MW from standard
           atomic weights; solid Cp deliberately absent (flagged, not
           fabricated -- see body).
\\*---------------------------------------------------------------------------*/

name           glucose;
formula        C6H12O6;
CAS            50-99-7;

MW             180.16;         // g/mol
role        nonvolatile;
dissociation   1;              // non-electrolyte


// ---------------------------------------------------------------------------
// Standard enthalpy + entropy of formation of CRYSTALLINE alpha-D-glucose.
// ARITY-1 INTRINSIC (the molecule + its elements): lives here in the
// component .dat, NOT in a solvent tier (see docs/ai/data-doctrine.md).
// phase = solid: glucose decomposes before it vaporises, so NIST/primary
// tables give the SOLID datum -- the energy ladder never integrates a
// glucose vapour leg (the phase keyword routes it on the solid line, exactly
// as for sucrose; see theoryGuide.tex sec:gibbs-phase).
//
// PRIMARY (dHf_298): Ponomarev & Migarskaya, "Heats of combustion of some
//   monosaccharides", Russ. J. Phys. Chem. 34 (1960) 1182-1183 -- combustion
//   calorimetry, dHc = -(2801.5 +/- 0.5) kJ/mol => dHf(cr) = -(1274.6 +/- 0.6)
//   kJ/mol.  (The rounded -1273.3 kJ/mol seen in textbooks traces to the same
//   combustion lineage; the calorimetric primary value is kept.)
// PRIMARY (s_298): Boerio-Goates, "Heat-capacity measurements and
//   thermodynamic functions of crystalline alpha-D-glucose at temperatures
//   from 10 K to 340 K", J. Chem. Thermodyn. 23 (1991) 403-409 -- adiabatic
//   calorimetry; S(298.15 K) = (209.2 +/- 0.4) J/(mol K).
standardThermochemistry
{
    dHf_298    -1274600.0;   // J/mol  (-1274.6 kJ/mol, crystalline alpha-D-glucose)
                             //   [Ponomarev & Migarskaya 1960, combustion]
    s_298      209.2;        // J/(mol K), third-law absolute
                             //   [Boerio-Goates 1991, adiabatic calorimetry]
    referenceState      pureSolid;
}

// solidHeatCapacity -- the SOLID crystal Cp.  PRIMARY would be Boerio-Goates
// 1991 (same adiabatic-calorimetry study, Cp tabulated 10-340 K).  FLAGGED,
// NOT FABRICATED: the exact Cp(298.15 K) value was not transcribable from a
// clean primary at curation time, and glucose is dissolved-only in every
// shipped case (NF separation: no energy balance runs on the solute, water
// dominates Cp by orders of magnitude -- the same closure rationale as NaCl).
// Fill \`coefficients\` from Boerio-Goates 1991 Table before any case runs a
// solid-glucose energy balance.  Do NOT invent a number.

groups
{
    unifac ( { group CH2; count 1; } { group CH; count 4; } { group OH; count 5; } { group CHO; count 1; } );   // added from data/groupEstimative (UNIFAC decomposition; vocab-checked vs groups.dat)
}
`,Zs=`/*--------------------------------*- Choupo -*-----------------------*\\
  Mineral: goergeyite (K2Ca5(SO4)6H2O) -- unified substance file.
  One canonical record per chemical identity; the solid-phase dissolution
  equilibrium (Ksp) lives here as a typed solidPhase (roadmap Phase D).
  Migrated from chemistry/mineralSolubility/ with values preserved verbatim.
\\*---------------------------------------------------------------------------*/
name goergeyite;
formula "K2Ca5(SO4)6H2O";

solidPhases
{
    goergeyite
    {
        dissolutionReaction { masters ( { ion K; nu 2; } { ion Ca; nu 5; } { ion SO4; nu 6; } ); nuWater 1; }
        equilibrium { logK25 -29.5; dH 0; analytic ( 1056.787 0 -52300 -368.06 0 0 ); validC ( 0 200 ); source "USGS PHREEQC pitzer.dat/phreeqc.dat (public domain); reaction re-expressed to Choupo master basis from Goergeyite"; }
    }
}
`,Xs=`/*--------------------------------*- Choupo -*-----------------------*\\
  Mineral: gypsum (CaSO4:2H2O) -- unified substance file.
  One canonical record per chemical identity; the solid-phase dissolution
  equilibrium (Ksp) lives here as a typed solidPhase (roadmap Phase D).
  Migrated from chemistry/mineralSolubility/ with values preserved verbatim.
\\*---------------------------------------------------------------------------*/
name gypsum;
formula "CaSO4:2H2O";

solidPhases
{
    gypsum
    {
        dissolutionReaction { masters ( { ion Ca; nu 1; } { ion SO4; nu 1; } ); nuWater 2; }
        equilibrium { logK25 -4.55; dH -6700; analytic ( 72.244 -0.01474 -4040 -23.7823 ); source "USGS PHREEQC phreeqc.dat (public domain); lit: fits the appendix data of Appelo, 2015, AG 55, 62"; }
        thermochemistry
        {
            Hf298 -2.023e+06;   // J/mol   (formation enthalpy of the solid)
            S298  193.803;   // J/(mol.K)
            Cp298 186.185;   // J/(mol.K) at 298.15 K (Maier-Kelley a+bT+c/T^2)
            source "Robie & Hemingway 1995, USGS Bulletin 2131 (public domain; Literature/report.pdf) -- via CHNOSZ OBIGT (open compilation)";
        }
    }
}
`,nl=`/*--------------------------------*- Choupo -*-----------------------*\\
  Component: heavyWater  (D2O1, CAS 7789-20-0)
  PROPOSAL TIER -- UNVERIFIED.  Imported from CoolProp 7.2.0 (MIT);
  pure-fluid properties from the published reference EOS below.
  Reference EOS: Herrig-JPCRD-2019
  NOTE: formation properties (dHf, s_298) and group decompositions
  are NOT provided by CoolProp -> omitted here (a gap, not fabricated).
\\*---------------------------------------------------------------------------*/

name        heavyWater;

//  Review state, MACHINE-READABLE (AP2, 2026-08-05).  This used to
//  live only in the banner above, which the parser discards -- so the
//  engine could not announce it and a run said nothing.
reviewStatus   interim;
reviewReason   importedFromCoolProp720_notCheckedAgainstPrimaries;
formula     D2O1;
CAS         7789-20-0;

MW          20.0275;        // kg/kmol  [CoolProp]
Tc          643.8470;        // K        [CoolProp EOS]
Pc          216.61831;        // bar      [CoolProp EOS]
omega       0.36422;        // [-]      [CoolProp EOS]
Tb          374.5488;        // K  normal boiling [CoolProp]
HvapTb      41495.5;        // J/mol  at Tb     [CoolProp]
Vliq        1.8134e-05;        // m3/mol @298K     [CoolProp]

vaporPressure
{
    model         Antoine;
    // log10(Psat [bar]) = A - B / (T[K] + C)   -- fitted to CoolProp EOS
    coefficients  (5.12849   1674.18   -47.8945);
    Trange        (289.73  630.97);
}

idealGasHeatCapacity
{
    model         polynomial;
    // Cp [J/(mol.K)] = a0 + a1 T + a2 T^2 + a3 T^3   -- fitted to CoolProp cp0
    coefficients  (32.0172  0.00194035  2.20869e-05  -1.05514e-08);
    Trange        (255  1000);
}

liquidHeatCapacity
{
    model         polynomial;
    // Cp_liq [J/(mol.K)]   -- fitted to CoolProp saturated-liquid cp
    coefficients  (94.2836  -0.0501526  2.80529e-05  7.5157e-08);
    Trange        (322  375);
}

triplePoint
{
    T   276.9690;
    P   661.5871;
}

provenance
{
    constants      "CoolProp 7.2.0 -- Herrig-JPCRD-2019";
    vaporPressure  "Antoine fitted to CoolProp EOS saturation, AAD 0.55%";
    idealGasCp     "polynomial fitted to CoolProp cp0, maxerr 0.12%";
    liquidCp       "polynomial fitted to CoolProp sat-liquid cp, maxerr 0.00%";
    triplePoint    "CoolProp reference EOS triple-point T,P";
}

groups
{
    unifac ( { group H2O; count 1; } );   // added from data/groupEstimative (UNIFAC decomposition; vocab-checked vs groups.dat)
}
`,el=`/*--------------------------------*- Choupo -*-----------------------*\\
  Mineral: hexahydrite (MgSO4:6H2O) -- unified substance file.
  One canonical record per chemical identity; the solid-phase dissolution
  equilibrium (Ksp) lives here as a typed solidPhase (roadmap Phase D).
  Migrated from chemistry/mineralSolubility/ with values preserved verbatim.
\\*---------------------------------------------------------------------------*/
name hexahydrite;
formula "MgSO4:6H2O";

solidPhases
{
    hexahydrite
    {
        dissolutionReaction { masters ( { ion Mg; nu 1; } { ion SO4; nu 1; } ); nuWater 6; }
        equilibrium { logK25 -1.57; dH 2350; analytic ( -1.978 0.00138 ); source "USGS PHREEQC phreeqc.dat (public domain)"; }
        thermochemistry
        {
            Hf298 -3.08729e+06;   // J/mol   (formation enthalpy of the solid)
            S298  348.485;   // J/(mol.K)
            Cp298 154.903;   // J/(mol.K) at 298.15 K (Maier-Kelley a+bT+c/T^2)
            source "Grevel & Majzlan 2009, Geochim. Cosmochim. Acta 73 -- via CHNOSZ OBIGT (open compilation)";
        }
    }
}
`,ol=`/*--------------------------------*- Choupo -*-----------------------*\\
  Component: hexamethyldisiloxane  (C6H18O1Si2, CAS 107-46-0)
  PROPOSAL TIER -- UNVERIFIED.  Imported from CoolProp 7.2.0 (MIT);
  pure-fluid properties from the published reference EOS below.
  Reference EOS: Thol-FPE-2016-MM,Thol-THESIS-2015
  NOTE: formation properties (dHf, s_298) and group decompositions
  are NOT provided by CoolProp -> omitted here (a gap, not fabricated).
\\*---------------------------------------------------------------------------*/

name        hexamethyldisiloxane;

//  Review state, MACHINE-READABLE (AP2, 2026-08-05).  This used to
//  live only in the banner above, which the parser discards -- so the
//  engine could not announce it and a run said nothing.
reviewStatus   interim;
reviewReason   importedFromCoolProp720_notCheckedAgainstPrimaries;
formula     C6H18O1Si2;
CAS         107-46-0;

MW          162.3775;        // kg/kmol  [CoolProp]
Tc          518.7001;        // K        [CoolProp EOS]
Pc          19.31134;        // bar      [CoolProp EOS]
omega       0.41800;        // [-]      [CoolProp EOS]
Tb          373.6579;        // K  normal boiling [CoolProp]
HvapTb      31292.1;        // J/mol  at Tb     [CoolProp]
Vliq        2.1379e-04;        // m3/mol @298K     [CoolProp]

vaporPressure
{
    model         Antoine;
    // log10(Psat [bar]) = A - B / (T[K] + C)   -- fitted to CoolProp EOS
    coefficients  (4.02081   1270.26   -57.3495);
    Trange        (233.42  508.33);
}

idealGasHeatCapacity
{
    model         polynomial;
    // Cp [J/(mol.K)] = a0 + a1 T + a2 T^2 + a3 T^3   -- fitted to CoolProp cp0
    coefficients  (83.5045  0.595638  -0.00022602  7.29414e-09);
    Trange        (200  1000);
}

liquidHeatCapacity
{
    model         polynomial;
    // Cp_liq [J/(mol.K)]   -- fitted to CoolProp saturated-liquid cp
    coefficients  (308.947  -0.613459  0.0026954  -2.15793e-06);
    Trange        (259  374);
}

triplePoint
{
    T   204.9300;
    P   2.9538;
}

provenance
{
    constants      "CoolProp 7.2.0 -- Thol-FPE-2016-MM,Thol-THESIS-2015";
    vaporPressure  "Antoine fitted to CoolProp EOS saturation, AAD 0.60%";
    idealGasCp     "polynomial fitted to CoolProp cp0, maxerr 2.54%";
    liquidCp       "polynomial fitted to CoolProp sat-liquid cp, maxerr 0.01%";
    triplePoint    "CoolProp reference EOS triple-point T,P";
}
`,al=`/*--------------------------------*- Choupo -*-----------------------*\\
  Component: hfe143m  (C2F3H3O1, CAS 421-14-7)
  PROPOSAL TIER -- UNVERIFIED.  Imported from CoolProp 7.2.0 (MIT);
  pure-fluid properties from the published reference EOS below.
  Reference EOS: Akasaka-IJR-2012
  NOTE: formation properties (dHf, s_298) and group decompositions
  are NOT provided by CoolProp -> omitted here (a gap, not fabricated).
\\*---------------------------------------------------------------------------*/

name        hfe143m;

//  Review state, MACHINE-READABLE (AP2, 2026-08-05).  This used to
//  live only in the banner above, which the parser discards -- so the
//  engine could not announce it and a run said nothing.
reviewStatus   interim;
reviewReason   importedFromCoolProp720_notCheckedAgainstPrimaries;
formula     C2F3H3O1;
CAS         421-14-7;

MW          100.0400;        // kg/kmol  [CoolProp]
Tc          377.9176;        // K        [CoolProp EOS]
Pc          36.44942;        // bar      [CoolProp EOS]
omega       0.28887;        // [-]      [CoolProp EOS]
Tb          249.5706;        // K  normal boiling [CoolProp]
HvapTb      21441.9;        // J/mol  at Tb     [CoolProp]
Vliq        9.1621e-05;        // m3/mol @298K     [CoolProp]

vaporPressure
{
    model         Antoine;
    // log10(Psat [bar]) = A - B / (T[K] + C)   -- fitted to CoolProp EOS
    coefficients  (4.31227   987.088   -20.3477);
    Trange        (240.50  370.36);
}

idealGasHeatCapacity
{
    model         polynomial;
    // Cp [J/(mol.K)] = a0 + a1 T + a2 T^2 + a3 T^3   -- fitted to CoolProp cp0
    coefficients  (20.37  0.2918  -0.000195  4.65e-08);
    Trange        (255  1000);
}

liquidHeatCapacity
{
    model         polynomial;
    // Cp_liq [J/(mol.K)]   -- fitted to CoolProp saturated-liquid cp
    coefficients  (110.611  0.204039  -0.00125203  3.27109e-06);
    Trange        (245  250);
}

triplePoint
{
    T   240.0000;
    P   65359.3930;
}

standardThermochemistry
{
    dHf_298   -813910;      // J/mol ideal-gas -- provenance: see the structured dHf_298 block below
    dGf_298   -720630;      // J/mol  ideal-gas [Joback]
    s_298     301.412;      // J/(mol*K) third-law [DERIVED: (dHf-dGf)/T + CODATA element S]
}

groups { unifac ( { group CH3O; count 1; } { group CF3; count 1; } ); joback ( { group CH3; count 1; } { group C; count 1; } { group F; count 3; } { group ether; count 1; } ); }

provenance
{
    dHf_298
    {
        origin           estimated;
        method           "Joback";
        methodVersion    "joback-poling5e-table2-2";
        input            joback;
        inputFingerprint "C:1,CH3:1,F:3,ether:1";
        uncertainty      { status unquantified; reason "bulk-import band ~9 kJ/mol, primary basis not verified"; }
    }

    constants      "CoolProp 7.2.0 -- Akasaka-IJR-2012";
    vaporPressure  "Antoine fitted to CoolProp EOS saturation, AAD 0.31%";
    idealGasCp     "polynomial fitted to CoolProp cp0, maxerr 0.00%";
    liquidCp       "polynomial fitted to CoolProp sat-liquid cp, maxerr 0.00%";
    triplePoint    "CoolProp reference EOS triple-point T,P";
    preserved      "from prior proposal (NOT CoolProp): standardThermochemistry, groups";
}
`,tl=`/*--------------------------------*- Choupo -*-----------------------*\\
  Component: HITEC molten salt  (7-49-44 mol% NaNO3-NaNO2-KNO3,
                                  equivalent to 7-40-53 wt%)
  Pseudo-component for use as a high-temperature molten-salt heat carrier.

  Sources:
    Sohal et al., "Engineering Database of Liquid Salt Thermophysical
      and Thermochemical Properties", INL/EXT-10-18297 Rev. 1, June 2013,
      Idaho National Laboratory.  §2.1.4 NaNO3-NaNO2-KNO3.
      Original correlations from Janz et al. 1981.

  Use:
    Pseudo-fluid for the \`hitecSalt\` utility (closed-loop sensible heat
    carrier in the 142-535 C range; melts at 415 K, thermally unstable above
    ~538 C).  Choose HITEC over Dowtherm A when service temperature exceeds
    ~400 C.  Do NOT put in a reactor or any case where you actually need
    ΔHrxn — this entry has NO standardThermochemistry block on purpose.

  Limits:
    ρ:  range 470-870 K, ±2 %     (Janz 1981 linear)
    μ:  range 420-710 K, ±16 %    (Janz 1981 cubic)
    Cp: range 426-776 K, ±5 %     (Janz 1981 quadratic)
    k:  no reliable T-correlation; treat as ≈ 0.55 W/(m·K) constant.
\\*---------------------------------------------------------------------------*/

name        hitecSalt;
formula     "(NaNO3)_{0.07}(NaNO2)_{0.49}(KNO3)_{0.44}";
CAS         "n/a";              // mixture, no single CAS

// Mass-weighted MW: 0.07*85 + 0.40*69 + 0.53*101 = 87.4 g/mol
MW          87.4;
Tb          0;                   // does not boil (decomposes above ~538 C)
Vliq        4.50e-5;             // m^3/mol at 465 K (MW / ρ(465))

role        nonvolatile;         // molten salt, never enters VLE

liquidHeatCapacity
{
    // Janz et al. 1981, via Sohal et al. 2013 eq. (2.34):
    //   Cp [J/kg·K] = 5806 - 10.833*T[K] + 7.2413e-3*T[K]^2
    // Converted to molar (× MW/1000 = 0.0874 kg/mol):
    //   Cp [J/mol·K] = 507.4 - 0.9468*T + 6.33e-4*T^2
    model         polynomial;
    coefficients  (507.4   -0.9468   6.33e-4);
    //  NARROWED to the fit this record documents (AP7, 2026-08-05).  The
    //  field claimed (415 810) while the header above states the Cp fit as
    //  "range 426-776 K, +/-5 % (Janz 1981 quadratic)" -- a validity claim
    //  WIDER than the regression that supports it, at both ends.
    //
    //  This was inert until the engine began READING the window the same
    //  day (PolynomialCp had parsed and discarded it), and then it became
    //  worse than the original defect: a too-wide window keeps the
    //  extrapolation announcement SILENT exactly where it should fire.
    //
    //  Not a new number -- the record's own documented range.  You cannot be
    //  valid outside your fit, so narrowing is the conservative direction.
    Trange        (426  776);
}
`,il=`/*--------------------------------*- Choupo -*-----------------------*\\
  Mineral: huntite (CaMg3(CO3)4) -- unified substance file.
  One canonical record per chemical identity; the solid-phase dissolution
  equilibrium (Ksp) lives here as a typed solidPhase (roadmap Phase D).
  Migrated from chemistry/mineralSolubility/ with values preserved verbatim.
\\*---------------------------------------------------------------------------*/
name huntite;
formula "CaMg3(CO3)4";

solidPhases
{
    huntite
    {
        dissolutionReaction { masters ( { ion Ca; nu 1; } { ion Mg; nu 3; } { ion HCO3; nu 4; } { ion H; nu -4; } ); }
        equilibrium { logK25 10.3; dH 0; analytic ( -1145 -0.3249 39410 452.6 0 0 ); validC ( 0 200 ); source "USGS PHREEQC pitzer.dat/phreeqc.dat (public domain); reaction re-expressed to Choupo master basis from Huntite"; }
        thermochemistry
        {
            Hf298 -4.5296e+06;   // J/mol   (formation enthalpy of the solid)
            S298  299.533;   // J/(mol.K)
            Cp298 309.427;   // J/(mol.K) at 298.15 K (Maier-Kelley a+bT+c/T^2)
            source "Helgeson, Delany, Nesbitt & Bird 1978, Am. J. Sci. 278-A -- via CHNOSZ OBIGT (open compilation)";
        }
    }
}
`,rl=`/*--------------------------------*- Choupo -*-----------------------*\\
  Mineral: hydroxyapatite (Ca5(PO4)3OH) -- unified substance file.
  One canonical record per chemical identity; the solid-phase dissolution
  equilibrium (Ksp) lives here as a typed solidPhase (roadmap Phase D).
  Migrated from chemistry/mineralSolubility/ with values preserved verbatim.
\\*---------------------------------------------------------------------------*/
name hydroxyapatite;
formula "Ca5(PO4)3OH";

solidPhases
{
    hydroxyapatite
    {
        dissolutionReaction { masters ( { ion PO4; nu 3; } { ion H; nu -1; } { ion Ca; nu 5; } ); nuWater 1; }
        equilibrium { logK25 -40.459; dH -106964; source "USGS PHREEQC pitzer.dat/phreeqc.dat (public domain); reaction re-expressed to Choupo master basis from Hydroxyapatite"; }
    }
}
`,sl=`/*--------------------------------*- Choupo -*-----------------------*\\
  Component: isoButane  (C4H10, CAS 75-28-5)
  PROPOSAL TIER -- UNVERIFIED.  Imported from CoolProp 7.2.0 (MIT);
  pure-fluid properties from the published reference EOS below.
  Reference EOS: Buecker-JPCRD-2006B
  NOTE: formation properties (dHf, s_298) and group decompositions
  are NOT provided by CoolProp -> omitted here (a gap, not fabricated).
\\*---------------------------------------------------------------------------*/

name        isoButane;

//  Review state, MACHINE-READABLE (AP2, 2026-08-05).  This used to
//  live only in the banner above, which the parser discards -- so the
//  engine could not announce it and a run said nothing.
reviewStatus   interim;
reviewReason   importedFromCoolProp720_notCheckedAgainstPrimaries;
formula     C4H10;
CAS         75-28-5;

MW          58.1222;        // kg/kmol  [CoolProp]
Tc          407.8100;        // K        [CoolProp EOS]
Pc          36.29000;        // bar      [CoolProp EOS]
omega       0.18353;        // [-]      [CoolProp EOS]
Tb          261.4010;        // K  normal boiling [CoolProp]
HvapTb      21220.4;        // J/mol  at Tb     [CoolProp]
Vliq        1.0555e-04;        // m3/mol @298K     [CoolProp]

vaporPressure
{
    model         Antoine;
    // log10(Psat [bar]) = A - B / (T[K] + C)   -- fitted to CoolProp EOS
    coefficients  (4.00881   938.027   -27.1635);
    Trange        (183.51  399.65);
}

idealGasHeatCapacity
{
    model         polynomial;
    // Cp [J/(mol.K)] = a0 + a1 T + a2 T^2 + a3 T^3   -- fitted to CoolProp cp0
    coefficients  (5.31529  0.344842  -0.000111199  -1.13682e-08);
    Trange        (200  1000);
}

liquidHeatCapacity
{
    model         polynomial;
    // Cp_liq [J/(mol.K)]   -- fitted to CoolProp saturated-liquid cp
    coefficients  (71.5285  0.325149  -0.00105707  2.51186e-06);
    Trange        (204  261);
}

triplePoint
{
    T   113.7300;
    P   0.0229;
}

standardThermochemistry
{
    dHf_298   -131170;      // J/mol ideal-gas -- provenance: see the structured dHf_298 block below
    dGf_298   -19640;      // J/mol  ideal-gas [Joback]
    s_298     302.287;      // J/(mol*K) third-law [DERIVED: (dHf-dGf)/T + CODATA element S]
}

groups { unifac ( { group CH3; count 3; } { group CH; count 1; } ); joback ( { group CH3; count 3; } { group CH; count 1; } ); }

provenance
{
    dHf_298
    {
        origin           estimated;
        method           "Joback";
        methodVersion    "joback-poling5e-table2-2";
        input            joback;
        inputFingerprint "CH:1,CH3:3";
        uncertainty      { status unquantified; reason "bulk-import band ~9 kJ/mol, primary basis not verified"; }
    }

    constants      "CoolProp 7.2.0 -- Buecker-JPCRD-2006B";
    vaporPressure  "Antoine fitted to CoolProp EOS saturation, AAD 0.61%";
    idealGasCp     "polynomial fitted to CoolProp cp0, maxerr 2.91%";
    liquidCp       "polynomial fitted to CoolProp sat-liquid cp, maxerr 0.00%";
    triplePoint    "CoolProp reference EOS triple-point T,P";
    preserved      "from prior proposal (NOT CoolProp): standardThermochemistry, groups";
}

cosmo
{
    VT2005
    {
        model       COSMOSAC;
        variant     "2002";
        source      "VT-2005 sigma-profile database (Mullins et al., Ind. Eng. Chem. Res. 45 (2006) 4389; DFT-COSMO), file VT2005-0004-PROF.txt bundled in usnistgov/COSMOSAC; CAS 75-28-5";
        licence     externalRestricted;   // VT-2005: redistribution NOT confirmed -- values NOT shipped
        installed   false;                 // install your own copy: bin/choupo-import-cosmo (-> data/local/cosmo/VT2005/)
    }
}
`,ll=`/*--------------------------------*- Choupo -*-----------------------*\\
  Component: isoButene  (C4H8, CAS 115-11-7)
  PROPOSAL TIER -- UNVERIFIED.  Imported from CoolProp 7.2.0 (MIT);
  pure-fluid properties from the published reference EOS below.
  Reference EOS: Lemmon-FPE-2005
  NOTE: formation properties (dHf, s_298) and group decompositions
  are NOT provided by CoolProp -> omitted here (a gap, not fabricated).
\\*---------------------------------------------------------------------------*/

name        isoButene;

//  Review state, MACHINE-READABLE (AP2, 2026-08-05).  This used to
//  live only in the banner above, which the parser discards -- so the
//  engine could not announce it and a run said nothing.
reviewStatus   interim;
reviewReason   importedFromCoolProp720_notCheckedAgainstPrimaries;
formula     C4H8;
CAS         115-11-7;

MW          56.1063;        // kg/kmol  [CoolProp]
Tc          418.0898;        // K        [CoolProp EOS]
Pc          40.15707;        // bar      [CoolProp EOS]
omega       0.19259;        // [-]      [CoolProp EOS]
Tb          266.1458;        // K  normal boiling [CoolProp]
HvapTb      21973.4;        // J/mol  at Tb     [CoolProp]
Vliq        9.5351e-05;        // m3/mol @298K     [CoolProp]

vaporPressure
{
    model         Antoine;
    // log10(Psat [bar]) = A - B / (T[K] + C)   -- fitted to CoolProp EOS
    coefficients  (4.06902   967.282   -28.229);
    Trange        (188.14  409.73);
}

idealGasHeatCapacity
{
    model         polynomial;
    // Cp [J/(mol.K)] = a0 + a1 T + a2 T^2 + a3 T^3   -- fitted to CoolProp cp0
    coefficients  (12.5882  0.293076  -0.000120145  1.02185e-08);
    Trange        (200  1000);
}

liquidHeatCapacity
{
    model         polynomial;
    // Cp_liq [J/(mol.K)]   -- fitted to CoolProp saturated-liquid cp
    coefficients  (106.495  -0.0358866  0.000155193  8.93052e-07);
    Trange        (209  266);
}

triplePoint
{
    T   132.4000;
    P   0.6762;
}

standardThermochemistry
{
    dHf_298   -10250;      // J/mol ideal-gas -- provenance: see the structured dHf_298 block below
    dGf_298   62090;      // J/mol  ideal-gas [Joback]
    s_298     303.05;      // J/(mol*K) third-law [DERIVED: (dHf-dGf)/T + CODATA element S]
}

groups { unifac ( { group CH3; count 2; } { group CH2=C; count 1; } ); joback ( { group CH3; count 2; } { group eCH2; count 1; } { group eC; count 1; } ); }

provenance
{
    dHf_298
    {
        origin           estimated;
        method           "Joback";
        methodVersion    "joback-poling5e-table2-2";
        input            joback;
        inputFingerprint "CH3:2,eC:1,eCH2:1";
        uncertainty      { status unquantified; reason "bulk-import band ~9 kJ/mol, primary basis not verified"; }
    }

    constants      "CoolProp 7.2.0 -- Lemmon-FPE-2005";
    vaporPressure  "Antoine fitted to CoolProp EOS saturation, AAD 0.66%";
    idealGasCp     "polynomial fitted to CoolProp cp0, maxerr 1.70%";
    liquidCp       "polynomial fitted to CoolProp sat-liquid cp, maxerr 0.00%";
    triplePoint    "CoolProp reference EOS triple-point T,P";
    preserved      "from prior proposal (NOT CoolProp): standardThermochemistry, groups";
}

cosmo
{
    VT2005
    {
        model       COSMOSAC;
        variant     "2002";
        source      "VT-2005 sigma-profile database (Mullins et al., Ind. Eng. Chem. Res. 45 (2006) 4389; DFT-COSMO), file VT2005-0129-PROF.txt bundled in usnistgov/COSMOSAC; CAS 115-11-7";
        licence     externalRestricted;   // VT-2005: redistribution NOT confirmed -- values NOT shipped
        installed   false;                 // install your own copy: bin/choupo-import-cosmo (-> data/local/cosmo/VT2005/)
    }
}
`,dl=`/*--------------------------------*- Choupo -*-----------------------*\\
  Component: isohexane  (C6H14, CAS 107-83-5)
  PROPOSAL TIER -- UNVERIFIED.  Imported from CoolProp 7.2.0 (MIT);
  pure-fluid properties from the published reference EOS below.
  Reference EOS: Lemmon-JCED-2006
  NOTE: formation properties (dHf, s_298) and group decompositions
  are NOT provided by CoolProp -> omitted here (a gap, not fabricated).
\\*---------------------------------------------------------------------------*/

name        isohexane;

//  Review state, MACHINE-READABLE (AP2, 2026-08-05).  This used to
//  live only in the banner above, which the parser discards -- so the
//  engine could not announce it and a run said nothing.
reviewStatus   interim;
reviewReason   importedFromCoolProp720_notCheckedAgainstPrimaries;
formula     C6H14;
CAS         107-83-5;

MW          86.1754;        // kg/kmol  [CoolProp]
Tc          497.7009;        // K        [CoolProp EOS]
Pc          30.42659;        // bar      [CoolProp EOS]
omega       0.27970;        // [-]      [CoolProp EOS]
Tb          333.3621;        // K  normal boiling [CoolProp]
HvapTb      27840.2;        // J/mol  at Tb     [CoolProp]
Vliq        1.3288e-04;        // m3/mol @298K     [CoolProp]

vaporPressure
{
    model         Antoine;
    // log10(Psat [bar]) = A - B / (T[K] + C)   -- fitted to CoolProp EOS
    coefficients  (4.06854   1188.14   -40.9916);
    Trange        (223.97  487.75);
}

idealGasHeatCapacity
{
    model         polynomial;
    // Cp [J/(mol.K)] = a0 + a1 T + a2 T^2 + a3 T^3   -- fitted to CoolProp cp0
    coefficients  (-3.68584  0.565774  -0.000253366  2.72101e-08);
    Trange        (200  1000);
}

liquidHeatCapacity
{
    model         polynomial;
    // Cp_liq [J/(mol.K)]   -- fitted to CoolProp saturated-liquid cp
    coefficients  (130.883  -0.0458741  0.00100991  -5.40672e-07);
    Trange        (249  333);
}

triplePoint
{
    T   119.6000;
    P   0.0000;
}

standardThermochemistry
{
    dHf_298   -172450;      // J/mol ideal-gas -- provenance: see the structured dHf_298 block below
    dGf_298   -2800;      // J/mol  ideal-gas [Joback]
    s_298     380.191;      // J/(mol*K) third-law [DERIVED: (dHf-dGf)/T + CODATA element S]
}

groups
{
    joback ( { group CH3; count 3; } { group CH2; count 2; } { group CH; count 1; } );
    unifac ( { group CH3; count 3; } { group CH2; count 2; } { group CH; count 1; } );
}
provenance
{
    dHf_298
    {
        origin           estimated;
        method           "Joback";
        methodVersion    "joback-poling5e-table2-2";
        input            joback;
        inputFingerprint "CH:1,CH2:2,CH3:3";
        uncertainty      { status unquantified; reason "bulk-import band ~9 kJ/mol, primary basis not verified"; }
    }

    constants      "CoolProp 7.2.0 -- Lemmon-JCED-2006";
    vaporPressure  "Antoine fitted to CoolProp EOS saturation, AAD 0.54%";
    idealGasCp     "polynomial fitted to CoolProp cp0, maxerr 1.72%";
    liquidCp       "polynomial fitted to CoolProp sat-liquid cp, maxerr 0.01%";
    triplePoint    "CoolProp reference EOS triple-point T,P";
    preserved      "from prior proposal (NOT CoolProp): standardThermochemistry, groups";
}
cosmo
{
    VT2005
    {
        model       COSMOSAC;
        variant     "2002";
        source      "VT-2005 sigma-profile database (Mullins et al., Ind. Eng. Chem. Res. 45 (2006) 4389; DFT-COSMO), file VT2005-0010-PROF.txt bundled in usnistgov/COSMOSAC; CAS 107-83-5";
        licence     externalRestricted;   // VT-2005: redistribution NOT confirmed -- values NOT shipped
        installed   false;                 // install your own copy: bin/choupo-import-cosmo (-> data/local/cosmo/VT2005/)
    }
}
`,cl=`/*--------------------------------*- Choupo -*-----------------------*\\
  Component: isopentane  (C5H12, CAS 78-78-4)
  PROPOSAL TIER -- UNVERIFIED.  Imported from CoolProp 7.2.0 (MIT);
  pure-fluid properties from the published reference EOS below.
  Reference EOS: Lemmon-JCED-2006
  NOTE: formation properties (dHf, s_298) and group decompositions
  are NOT provided by CoolProp -> omitted here (a gap, not fabricated).
\\*---------------------------------------------------------------------------*/

name        isopentane;

//  Review state, MACHINE-READABLE (AP2, 2026-08-05).  This used to
//  live only in the banner above, which the parser discards -- so the
//  engine could not announce it and a run said nothing.
reviewStatus   interim;
reviewReason   importedFromCoolProp720_notCheckedAgainstPrimaries;
formula     C5H12;
CAS         78-78-4;

MW          72.1488;        // kg/kmol  [CoolProp]
Tc          460.3498;        // K        [CoolProp EOS]
Pc          33.78217;        // bar      [CoolProp EOS]
omega       0.22740;        // [-]      [CoolProp EOS]
Tb          300.9763;        // K  normal boiling [CoolProp]
HvapTb      24767.7;        // J/mol  at Tb     [CoolProp]
Vliq        1.1732e-04;        // m3/mol @298K     [CoolProp]

vaporPressure
{
    model         Antoine;
    // log10(Psat [bar]) = A - B / (T[K] + C)   -- fitted to CoolProp EOS
    coefficients  (4.05002   1084.16   -33.0086);
    Trange        (207.16  451.14);
}

idealGasHeatCapacity
{
    model         polynomial;
    // Cp [J/(mol.K)] = a0 + a1 T + a2 T^2 + a3 T^3   -- fitted to CoolProp cp0
    coefficients  (1.83706  0.44384  -0.000167017  7.05093e-09);
    Trange        (200  1000);
}

liquidHeatCapacity
{
    model         polynomial;
    // Cp_liq [J/(mol.K)]   -- fitted to CoolProp saturated-liquid cp
    coefficients  (110.736  -0.0231064  0.000692185  -4.9663e-08);
    Trange        (230  301);
}

triplePoint
{
    T   112.6500;
    P   0.0001;
}

standardThermochemistry
{
    dHf_298   -153758.9;        // J/mol  ideal-gas [origin=measured method=NASA-TM4513]
    s_298     343.74;        // J/(mol.K) third-law absolute [NASA-TM4513]
}

groups
{
    joback ( { group CH3; count 3; } { group CH2; count 1; } { group CH; count 1; } );
    unifac ( { group CH3; count 3; } { group CH2; count 1; } { group CH; count 1; } );
}
provenance
{
    constants      "CoolProp 7.2.0 -- Lemmon-JCED-2006";
    vaporPressure  "Antoine fitted to CoolProp EOS saturation, AAD 0.60%";
    idealGasCp     "polynomial fitted to CoolProp cp0, maxerr 1.17%";
    liquidCp       "polynomial fitted to CoolProp sat-liquid cp, maxerr 0.00%";
    triplePoint    "CoolProp reference EOS triple-point T,P";
    preserved      "from prior proposal (NOT CoolProp): standardThermochemistry, groups";
    standardThermochemistry "NASA TM-4513 (McBride-Gordon-Reno 1993), H0/S0(298.15) from NASA-7 poly";
}
cosmo
{
    VT2005
    {
        model       COSMOSAC;
        variant     "2002";
        source      "VT-2005 sigma-profile database (Mullins et al., Ind. Eng. Chem. Res. 45 (2006) 4389; DFT-COSMO), file VT2005-0007-PROF.txt bundled in usnistgov/COSMOSAC; CAS 78-78-4";
        licence     externalRestricted;   // VT-2005: redistribution NOT confirmed -- values NOT shipped
        installed   false;                 // install your own copy: bin/choupo-import-cosmo (-> data/local/cosmo/VT2005/)
    }
}
`,pl=`/*--------------------------------*- Choupo -*-----------------------*\\
  Mineral: kainite (KMgClSO4:3H2O) -- unified substance file.
  One canonical record per chemical identity; the solid-phase dissolution
  equilibrium (Ksp) lives here as a typed solidPhase (roadmap Phase D).
  Migrated from chemistry/mineralSolubility/ with values preserved verbatim.
\\*---------------------------------------------------------------------------*/
name kainite;
formula "KMgClSO4:3H2O";

solidPhases
{
    kainite
    {
        dissolutionReaction { masters ( { ion Cl; nu 1; } { ion K; nu 1; } { ion Mg; nu 1; } { ion SO4; nu 1; } ); nuWater 3; }
        equilibrium { logK25 -0.193; dH 0; source "USGS PHREEQC pitzer.dat/phreeqc.dat (public domain); reaction re-expressed to Choupo master basis from Kainite"; }
    }
}
`,ml=`/*--------------------------------*- Choupo -*-----------------------*\\
  Mineral: kalicinite (KHCO3) -- unified substance file.
  One canonical record per chemical identity; the solid-phase dissolution
  equilibrium (Ksp) lives here as a typed solidPhase (roadmap Phase D).
  Migrated from chemistry/mineralSolubility/ with values preserved verbatim.
\\*---------------------------------------------------------------------------*/
name kalicinite;
formula "KHCO3";

solidPhases
{
    kalicinite
    {
        dissolutionReaction { masters ( { ion K; nu 1; } { ion HCO3; nu 1; } ); }
        equilibrium { logK25 0.389; dH -14899.2; source "USGS PHREEQC pitzer.dat/phreeqc.dat (public domain); reaction re-expressed to Choupo master basis from Kalicinite"; }
    }
}
`,ul=`/*--------------------------------*- Choupo -*-----------------------*\\
  Mineral: kieserite (MgSO4:H2O) -- unified substance file.
  One canonical record per chemical identity; the solid-phase dissolution
  equilibrium (Ksp) lives here as a typed solidPhase (roadmap Phase D).
  Migrated from chemistry/mineralSolubility/ with values preserved verbatim.
\\*---------------------------------------------------------------------------*/
name kieserite;
formula "MgSO4:H2O";

solidPhases
{
    kieserite
    {
        dissolutionReaction { masters ( { ion Mg; nu 1; } { ion SO4; nu 1; } ); nuWater 1; }
        equilibrium { logK25 -1.16; dH 9220; analytic ( 29.485 -0.0507 0 -2.662 -795000 ); source "USGS PHREEQC phreeqc.dat (public domain)"; }
    }
}
`,hl=`/*--------------------------------*- Choupo -*-----------------------*\\
  Component: krypton  (Kr1, CAS 7439-90-9)
  PROPOSAL TIER -- UNVERIFIED.  Imported from CoolProp 7.2.0 (MIT);
  pure-fluid properties from the published reference EOS below.
  Reference EOS: Lemmon-JCED-2006
  NOTE: formation properties (dHf, s_298) and group decompositions
  are NOT provided by CoolProp -> omitted here (a gap, not fabricated).
\\*---------------------------------------------------------------------------*/

name        krypton;

//  Review state, MACHINE-READABLE (AP2, 2026-08-05).  This used to
//  live only in the banner above, which the parser discards -- so the
//  engine could not announce it and a run said nothing.
reviewStatus   interim;
reviewReason   importedFromCoolProp720_notCheckedAgainstPrimaries;
formula     Kr1;
CAS         7439-90-9;

MW          83.7980;        // kg/kmol  [CoolProp]
Tc          209.4796;        // K        [CoolProp EOS]
Pc          55.25432;        // bar      [CoolProp EOS]
omega       -0.00089;        // [-]      [CoolProp EOS]
Tb          119.7349;        // K  normal boiling [CoolProp]
HvapTb      8971.0;        // J/mol  at Tb     [CoolProp]

vaporPressure
{
    model         Antoine;
    // log10(Psat [bar]) = A - B / (T[K] + C)   -- fitted to CoolProp EOS
    coefficients  (4.09613   502.638   3.20633);
    Trange        (116.27  205.29);
}

idealGasHeatCapacity
{
    model         polynomial;
    // Cp [J/(mol.K)] = a0 + a1 T + a2 T^2 + a3 T^3   -- fitted to CoolProp cp0
    coefficients  (20.7862  1.60711e-17  -5.10219e-21  1.15543e-23);
    Trange        (200  1000);
}

liquidHeatCapacity
{
    model         polynomial;
    // Cp_liq [J/(mol.K)]   -- fitted to CoolProp saturated-liquid cp
    coefficients  (49.8025  -0.0579953  -0.000875149  7.71766e-06);
    Trange        (121  120);
}

triplePoint
{
    T   115.7700;
    P   73502.8375;
}

provenance
{
    constants      "CoolProp 7.2.0 -- Lemmon-JCED-2006";
    vaporPressure  "Antoine fitted to CoolProp EOS saturation, AAD 0.43%";
    idealGasCp     "polynomial fitted to CoolProp cp0, maxerr 0.00%";
    liquidCp       "polynomial fitted to CoolProp sat-liquid cp, maxerr 0.00%";
    triplePoint    "CoolProp reference EOS triple-point T,P";
}
`,Cl=`/*--------------------------------*- Choupo -*-----------------------*\\
  Mineral: labile_S (Na4Ca(SO4)3:2H2O) -- unified substance file.
  One canonical record per chemical identity; the solid-phase dissolution
  equilibrium (Ksp) lives here as a typed solidPhase (roadmap Phase D).
  Migrated from chemistry/mineralSolubility/ with values preserved verbatim.
\\*---------------------------------------------------------------------------*/
name labile_S;
formula "Na4Ca(SO4)3:2H2O";

solidPhases
{
    labile_S
    {
        dissolutionReaction { masters ( { ion Na; nu 4; } { ion Ca; nu 1; } { ion SO4; nu 3; } ); nuWater 2; }
        equilibrium { logK25 -5.672; dH 0; source "USGS PHREEQC pitzer.dat/phreeqc.dat (public domain); reaction re-expressed to Choupo master basis from Labile_S"; }
    }
}
`,fl=`/*--------------------------------*- Choupo -*-----------------------*\\
  Mineral: leonhardite (MgSO4:4H2O) -- unified substance file.
  One canonical record per chemical identity; the solid-phase dissolution
  equilibrium (Ksp) lives here as a typed solidPhase (roadmap Phase D).
  Migrated from chemistry/mineralSolubility/ with values preserved verbatim.
\\*---------------------------------------------------------------------------*/
name leonhardite;
formula "MgSO4:4H2O";

solidPhases
{
    leonhardite
    {
        dissolutionReaction { masters ( { ion Mg; nu 1; } { ion SO4; nu 1; } ); nuWater 4; }
        equilibrium { logK25 -0.887; dH 0; source "USGS PHREEQC pitzer.dat/phreeqc.dat (public domain); reaction re-expressed to Choupo master basis from Leonhardite"; }
        thermochemistry
        {
            Hf298 -2.49609e+06;   // J/mol   (formation enthalpy of the solid)
            S298  259.91;   // J/(mol.K)
            Cp298 0;   // J/(mol.K) at 298.15 K (Maier-Kelley a+bT+c/T^2)
            source "Grevel & Majzlan 2009, Geochim. Cosmochim. Acta 73 -- via CHNOSZ OBIGT (open compilation)";
        }
    }
}
`,gl=`/*--------------------------------*- Choupo -*-----------------------*\\
  Mineral: leonite (K2Mg(SO4)2:4H2O) -- unified substance file.
  One canonical record per chemical identity; the solid-phase dissolution
  equilibrium (Ksp) lives here as a typed solidPhase (roadmap Phase D).
  Migrated from chemistry/mineralSolubility/ with values preserved verbatim.
\\*---------------------------------------------------------------------------*/
name leonite;
formula "K2Mg(SO4)2:4H2O";

solidPhases
{
    leonite
    {
        dissolutionReaction { masters ( { ion Mg; nu 1; } { ion K; nu 2; } { ion SO4; nu 2; } ); nuWater 4; }
        equilibrium { logK25 -3.979; dH 0; source "USGS PHREEQC pitzer.dat/phreeqc.dat (public domain); reaction re-expressed to Choupo master basis from Leonite"; }
    }
}
`,bl=`/*--------------------------------*- Choupo -*-----------------------*\\
  Mineral: lithiumChlorideH2O (LiCl:H2O) -- unified substance file.
  One canonical record per chemical identity; the solid-phase dissolution
  equilibrium (Ksp) lives here as a typed solidPhase (roadmap Phase D).
  Migrated from chemistry/mineralSolubility/ with values preserved verbatim.
\\*---------------------------------------------------------------------------*/
name lithiumChlorideH2O;
formula "LiCl:H2O";

solidPhases
{
    lithiumChlorideH2O
    {
        dissolutionReaction { masters ( { ion Li; nu 1; } { ion Cl; nu 1; } ); nuWater 1; }
        equilibrium { logK25 4.9841; source "logK25 CALIBRATED to Farelo (JCED 50, 2005, 1470) LiCl saturation 19.7 mol/kg, 298 K, via the refitted Pitzer gamma_pm + the HMW osmotic-coefficient water activity a_w (the hydrate water leg; a_w at I~20 is what makes the hydrate equilibrium work)"; }
    }
}
`,yl=`/*--------------------------------*- Choupo -*-----------------------*\\
  Component: mXylene  (C8H10, CAS 108-38-3)
  PROPOSAL TIER -- UNVERIFIED.  Imported from CoolProp 7.2.0 (MIT);
  pure-fluid properties from the published reference EOS below.
  Reference EOS: Zhou-JPCRD-2012
  NOTE: formation properties (dHf, s_298) and group decompositions
  are NOT provided by CoolProp -> omitted here (a gap, not fabricated).
\\*---------------------------------------------------------------------------*/

name        mXylene;

//  Review state, MACHINE-READABLE (AP2, 2026-08-05).  This used to
//  live only in the banner above, which the parser discards -- so the
//  engine could not announce it and a run said nothing.
reviewStatus   interim;
reviewReason   importedFromCoolProp720_notCheckedAgainstPrimaries;
formula     C8H10;
CAS         108-38-3;

MW          106.1650;        // kg/kmol  [CoolProp]
Tc          616.8900;        // K        [CoolProp EOS]
Pc          35.34599;        // bar      [CoolProp EOS]
omega       0.32600;        // [-]      [CoolProp EOS]
Tb          412.2139;        // K  normal boiling [CoolProp]
HvapTb      36111.5;        // J/mol  at Tb     [CoolProp]
Vliq        1.2347e-04;        // m3/mol @298K     [CoolProp]

vaporPressure
{
    model         Antoine;
    // log10(Psat [bar]) = A - B / (T[K] + C)   -- fitted to CoolProp EOS
    coefficients  (4.21943   1516.92   -52.3036);
    Trange        (277.60  604.55);
}

idealGasHeatCapacity
{
    model         polynomial;
    // Cp [J/(mol.K)] = a0 + a1 T + a2 T^2 + a3 T^3   -- fitted to CoolProp cp0
    coefficients  (-23.5846  0.599955  -0.000334221  6.76921e-08);
    Trange        (200  1000);
}

liquidHeatCapacity
{
    model         polynomial;
    // Cp_liq [J/(mol.K)]   -- fitted to CoolProp saturated-liquid cp
    coefficients  (129.241  -0.0369133  0.00087575  -5.44265e-07);
    Trange        (308  412);
}

triplePoint
{
    T   225.3000;
    P   3.1233;
}

standardThermochemistry
{
    dHf_298   16610;      // J/mol ideal-gas -- provenance: see the structured dHf_298 block below
    dGf_298   119260;      // J/mol  ideal-gas [Joback]
    s_298     355.03;      // J/(mol*K) third-law [DERIVED: (dHf-dGf)/T + CODATA element S]
}

groups
{
    joback ( { group CH3; count 2; } { group arCH; count 4; } { group arC; count 2; } );
    unifac ( { group ACH; count 4; } { group ACCH3; count 2; } );
}
provenance
{
    dHf_298
    {
        origin           estimated;
        method           "Joback";
        methodVersion    "joback-poling5e-table2-2";
        input            joback;
        inputFingerprint "CH3:2,arC:2,arCH:4";
        uncertainty      { status unquantified; reason "bulk-import band ~9 kJ/mol, primary basis not verified"; }
    }

    constants      "CoolProp 7.2.0 -- Zhou-JPCRD-2012";
    vaporPressure  "Antoine fitted to CoolProp EOS saturation, AAD 0.53%";
    idealGasCp     "polynomial fitted to CoolProp cp0, maxerr 3.81%";
    liquidCp       "polynomial fitted to CoolProp sat-liquid cp, maxerr 0.00%";
    triplePoint    "CoolProp reference EOS triple-point T,P";
    preserved      "from prior proposal (NOT CoolProp): standardThermochemistry, groups";
}
cosmo
{
    VT2005
    {
        model       COSMOSAC;
        variant     "2002";
        source      "VT-2005 sigma-profile database (Mullins et al., Ind. Eng. Chem. Res. 45 (2006) 4389; DFT-COSMO), file VT2005-0246-PROF.txt bundled in usnistgov/COSMOSAC; CAS 108-38-3";
        licence     externalRestricted;   // VT-2005: redistribution NOT confirmed -- values NOT shipped
        installed   false;                 // install your own copy: bin/choupo-import-cosmo (-> data/local/cosmo/VT2005/)
    }
}
`,Tl=`/*--------------------------------*- Choupo -*-----------------------*\\
  Mineral: magnesite (MgCO3) -- unified substance file.
  One canonical record per chemical identity; the solid-phase dissolution
  equilibrium (Ksp) lives here as a typed solidPhase (roadmap Phase D).
  Migrated from chemistry/mineralSolubility/ with values preserved verbatim.
\\*---------------------------------------------------------------------------*/
name magnesite;
formula "MgCO3";

solidPhases
{
    magnesite
    {
        dissolutionReaction { masters ( { ion HCO3; nu 1; } { ion H; nu -1; } { ion Mg; nu 1; } ); }
        equilibrium { logK25 2.495; dH -21068.2; source "USGS PHREEQC pitzer.dat/phreeqc.dat (public domain); reaction re-expressed to Choupo master basis from Magnesite"; }
    }
}
`,vl=`/*--------------------------------*- Choupo -*-----------------------*\\
  Component: Magnesium hydroxide (Mg(OH)2), BRUCITE.  CAS 1309-42-8.

  A NON-VOLATILE sparingly-soluble base: never enters the vapour (K = 0).
  Milk-of-magnesia neutralisation, seawater-Mg recovery and flue-gas
  scrubbing exercises; thermal-decomposition feed (Mg(OH)2 -> MgO + H2O).
  Carries the solid-phase formation datum and a real solid heat capacity.

  PRIMARY: Wagman et al., NBS Tables of Chemical Thermodynamic Properties,
  J. Phys. Chem. Ref. Data 11, Suppl. 2 (1982) -- PUBLIC DOMAIN.
  Density: brucite ~ 2.34-2.36 g/cm^3 (mineralogical).
\\*---------------------------------------------------------------------------*/

name        magnesiumHydroxide;
formula     "Mg(OH)2";
CAS         1309-42-8;

MW          58.320;            // kg/kmol

role        nonvolatile;       // never goes to the vapour (K = 0)

solid
{
    rho_p   2345.0;            // brucite particle density [kg/m^3]
}

standardThermochemistry
{
    dHf_298   -924540;         // J/mol  [Wagman et al. NBS Tables 1982]
    s_298     63.18;           // J/(mol*K) [Wagman 1982]
    referenceState     pureSolid;
}

solidHeatCapacity
{
    model         polynomial;          // Cp = a0  [J/(mol*K)], constant
    coefficients  ( 77.03 );           // Cp(298) [Wagman et al. NBS Tables 1982]
    Trange        ( 298  600 );        // constant-Cp validity flag (near ambient)
}

provenance
{
    standardThermochemistry { origin literature; method "Wagman et al. NBS Tables 1982"; }
    solidHeatCapacity { origin literature; method "Wagman et al. NBS Tables 1982 (Cp298, carried constant)"; }
    rho_p { origin literature; method "brucite mineralogical density ~2.34 g/cm3"; }
}

// Solid phase(s) of this component (roadmap Phase D fold-in):
solidPhases
{
    brucite
    {
        dissolutionReaction { masters ( { ion Mg; nu 1; } { ion H; nu -2; } ); nuWater 2; }
        equilibrium { logK25 17.12; dH -92507.6; source "USGS PHREEQC pitzer.dat/phreeqc.dat (public domain); reaction re-expressed to Choupo master basis from Brucite"; }
    }
}
`,Pl=`/*--------------------------------*- Choupo -*-----------------------*\\
  Mineral: melanterite (FeSO4:7H2O) -- unified substance file.
  One canonical record per chemical identity; the solid-phase dissolution
  equilibrium (Ksp) lives here as a typed solidPhase (roadmap Phase D).
  Migrated from chemistry/mineralSolubility/ with values preserved verbatim.
\\*---------------------------------------------------------------------------*/
name melanterite;
formula "FeSO4:7H2O";

solidPhases
{
    melanterite
    {
        dissolutionReaction { masters ( { ion Fe; nu 1; } { ion SO4; nu 1; } ); nuWater 7; }
        equilibrium { logK25 -2.209; dH 20543.4; analytic ( 1.447 -0.004153 0 0 -214949 0 ); validC ( 0 200 ); source "USGS PHREEQC pitzer.dat/phreeqc.dat (public domain); reaction re-expressed to Choupo master basis from Melanterite"; }
        thermochemistry
        {
            Hf298 -3.0126e+06;   // J/mol   (formation enthalpy of the solid)
            S298  409.199;   // J/(mol.K)
            Cp298 0;   // J/(mol.K) at 298.15 K (Maier-Kelley a+bT+c/T^2)
            source "Parkhurst 1995 (USGS PHREEQC compilation) -- via CHNOSZ OBIGT (open compilation)";
        }
    }
}
`,Sl=`/*--------------------------------*- Choupo -*-----------------------*\\
  Component: Methanol  (CH4O, CAS 67-56-1)
  Sources: critical constants (Tc/Pc/omega/Tb/HvapTb/Vliq), Antoine
           coefficients, Cp polynomials and the ideal-gas formation datum
           (dHf_298/s_298, JANAF convention) are individual literature
           values -- primary re-citation pending (IST review).  Viscosity:
           Andrade/Vogel fits to literature mu(T); UNIQUAC r,q are the van
           der Waals values (Abrams-Prausnitz) as used by Popken 2000.
\\*---------------------------------------------------------------------------*/

name        methanol;
formula     CH4O;
CAS         67-56-1;



MW          32.042;
Tc          512.64;
Pc          80.97;
omega       0.5650;
Tb          337.85;
HvapTb      35210;
Vliq        4.070e-5;


standardThermochemistry
{
    dHf_298   -200940.0;        // J/mol  -- ideal-gas reference
    s_298     239.880;         // J/(mol·K)  -- third-law absolute
}
vaporPressure
{
    model         Antoine;
    coefficients  (5.20409   1581.341   -33.50);
    Trange        (288  356);
}

idealGasHeatCapacity
{
    model         polynomial;
    coefficients  (21.152   0.07092   2.587e-5   -2.852e-8);
    Trange        (200  1500);
}

liquidHeatCapacity
{
    model         polynomial;
    coefficients  (81.0);
    Trange        (280  340);
}

// Liquid transport (v0.62+).  associationFactor = Wilke-Chang phi (solvent).
// liquidViscosity: ln(mu/Pa.s) = A + B/T (Andrade) or A + B/(T-C) (Vogel),
// fitted to literature mu(T) over ~10-100 degC.
associationFactor  1.9;
liquidViscosity
{
    andrade { A -11.5712; B 1207.4; }
    vogel   { A -11.5712; B 1207.4; C 0.0; }
}

groups
{
    unifac ( { group CH3OH; count 1; } );
    joback ( { group CH3; count 1; } { group OH; count 1; } );
}

uniquac
{
    r   1.4311;
    q   1.4320;     // van der Waals (Abrams-Prausnitz), as used by Popken 2000 Table 2
}

cosmo
{
    VT2005
    {
        model       COSMOSAC;
        variant     "2002";
        source      "VT-2005 sigma-profile database (Mullins et al., Ind. Eng. Chem. Res. 45 (2006) 4389; DFT-COSMO), file VT2005-0477-PROF.txt bundled in usnistgov/COSMOSAC; CAS 67-56-1";
        licence     externalRestricted;   // VT-2005: redistribution NOT confirmed -- values NOT shipped
        installed   false;                 // install your own copy: bin/choupo-import-cosmo (-> data/local/cosmo/VT2005/)
    }
}

// ---- Aqueous-speciation FACTS (substance-level, classifier-read) ----
// Curated fact: methanol does NOT participate in the aqueous speciation
// network at this thermodynamic level (pKa ~ 15.5 -- negligible).
aqueousSpeciation  none;
`,Ol=`/*--------------------------------*- Choupo -*-----------------------*\\
  Component: Methyl acetate  (C3H6O2, CAS 79-20-9)

  Added 2026-06-28 to support the reactive-distillation validation against
  Pöpken, Steinigeweg & Gmehling, Ind. Eng. Chem. Res. 40 (2001) 1566
  (methanol + acetic acid <=> methyl acetate + water).

  Primary data: NIST WebBook / DIPPR-class compilations (critical constants,
  Tb, Hvap); Antoine from Ambrose, Sprake & Townsend, J. Chem. Thermodyn.
  (P in bar, T in K, log10 form).  UNIFAC decomposition 1 CH3 + 1 CH3COO
  (Poling, Prausnitz & O'Connell, "The Properties of Gases and Liquids", 5th ed.,
  Table 8-23 example).
\\*---------------------------------------------------------------------------*/

name        methylAcetate;
formula     C3H6O2;
CAS         79-20-9;

MW          74.079;
Tc          506.55;
Pc          47.50;
omega       0.3310;
Tb          330.02;
HvapTb      30320;
Vliq        7.984e-5;

standardThermochemistry
{
    dHf_298   -411900.0;       // J/mol  ideal-gas reference (NIST)
    s_298      324.40;         // J/(mol·K)  third-law absolute (gas)
}

vaporPressure
{
    model         Antoine;     // log10(P/bar) = A - B/(T/K + C)
    coefficients  (4.18621   1156.43   -53.461);
    Trange        (260  380);
}

idealGasHeatCapacity
{
    model         polynomial;
    coefficients  (20.0   0.2550   -8.00e-5);
    Trange        (200  1000);
}

liquidHeatCapacity
{
    model         polynomial;
    coefficients  (140.0);
    Trange        (290  360);
}

groups
{
    unifac ( { group CH3; count 1; } { group CH3COO; count 1; } );
    joback ( { group CH3; count 2; } { group COO; count 1; } );
}

uniquac
{
    r   2.8042;
    q   2.5760;     // van der Waals (Abrams-Prausnitz), as used by Popken 2000 Table 2
}

cosmo
{
    VT2005
    {
        model       COSMOSAC;
        variant     "2002";
        source      "VT-2005 sigma-profile database (Mullins et al., Ind. Eng. Chem. Res. 45 (2006) 4389; DFT-COSMO), file VT2005-0638-PROF.txt bundled in usnistgov/COSMOSAC; CAS 79-20-9";
        licence     externalRestricted;   // VT-2005: redistribution NOT confirmed -- values NOT shipped
        installed   false;                 // install your own copy: bin/choupo-import-cosmo (-> data/local/cosmo/VT2005/)
    }
}
`,Al=`/*--------------------------------*- Choupo -*-----------------------*\\
  Component: methylLinoleate  (C19H34O2, CAS 112-63-0)
  PROPOSAL TIER -- UNVERIFIED.  Imported from CoolProp 7.2.0 (MIT);
  pure-fluid properties from the published reference EOS below.
  Reference EOS: Huber-EF-2009
  NOTE: formation properties (dHf, s_298) and group decompositions
  are NOT provided by CoolProp -> omitted here (a gap, not fabricated).
\\*---------------------------------------------------------------------------*/

name        methylLinoleate;

//  Review state, MACHINE-READABLE (AP2, 2026-08-05).  This used to
//  live only in the banner above, which the parser discards -- so the
//  engine could not announce it and a run said nothing.
reviewStatus   interim;
reviewReason   importedFromCoolProp720_notCheckedAgainstPrimaries;
formula     C19H34O2;
CAS         112-63-0;

MW          294.4721;        // kg/kmol  [CoolProp]
Tc          799.0002;        // K        [CoolProp EOS]
Pc          13.40821;        // bar      [CoolProp EOS]
omega       0.80541;        // [-]      [CoolProp EOS]
Tb          628.8406;        // K  normal boiling [CoolProp]
HvapTb      58182.9;        // J/mol  at Tb     [CoolProp]
Vliq        3.3399e-04;        // m3/mol @298K     [CoolProp]

vaporPressure
{
    model         Antoine;
    // log10(Psat [bar]) = A - B / (T[K] + C)   -- fitted to CoolProp EOS
    coefficients  (4.33167   2180.75   -124.408);
    Trange        (359.55  783.02);
}

idealGasHeatCapacity
{
    model         polynomial;
    // Cp [J/(mol.K)] = a0 + a1 T + a2 T^2 + a3 T^3   -- fitted to CoolProp cp0
    coefficients  (61.5399  1.37894  -0.000449531  -2.61431e-08);
    Trange        (200  1000);
}

liquidHeatCapacity
{
    model         polynomial;
    // Cp_liq [J/(mol.K)]   -- fitted to CoolProp saturated-liquid cp
    coefficients  (743.3  -0.855342  0.00222448  -9.28286e-07);
    Trange        (400  629);
}

triplePoint
{
    T   260.0000;
    P   0.0000;
}

standardThermochemistry
{
    dHf_298   -518330;      // J/mol ideal-gas -- provenance: see the structured dHf_298 block below
    dGf_298   -40830;      // J/mol  ideal-gas [Joback]
    s_298     934.227;      // J/(mol*K) third-law [DERIVED: (dHf-dGf)/T + CODATA element S]
}

groups { joback ( { group CH3; count 2; } { group CH2; count 12; } { group eCH; count 4; } { group ester; count 1; } ); }

provenance
{
    dHf_298
    {
        origin           estimated;
        method           "Joback";
        methodVersion    "joback-poling5e-table2-2";
        input            joback;
        inputFingerprint "CH2:12,CH3:2,eCH:4,ester:1";
        uncertainty      { status unquantified; reason "bulk-import band ~9 kJ/mol, primary basis not verified"; }
    }

    constants      "CoolProp 7.2.0 -- Huber-EF-2009";
    vaporPressure  "Antoine fitted to CoolProp EOS saturation, AAD 1.14%";
    idealGasCp     "polynomial fitted to CoolProp cp0, maxerr 0.08%";
    liquidCp       "polynomial fitted to CoolProp sat-liquid cp, maxerr 0.04%";
    triplePoint    "CoolProp reference EOS triple-point T,P";
    preserved      "from prior proposal (NOT CoolProp): standardThermochemistry, groups";
}
`,Hl=`/*--------------------------------*- Choupo -*-----------------------*\\
  Component: methylLinolenate  (C19H32O2, CAS 301-00-8)
  PROPOSAL TIER -- UNVERIFIED.  Imported from CoolProp 7.2.0 (MIT);
  pure-fluid properties from the published reference EOS below.
  Reference EOS: Huber-EF-2009
  NOTE: formation properties (dHf, s_298) and group decompositions
  are NOT provided by CoolProp -> omitted here (a gap, not fabricated).
\\*---------------------------------------------------------------------------*/

name        methylLinolenate;

//  Review state, MACHINE-READABLE (AP2, 2026-08-05).  This used to
//  live only in the banner above, which the parser discards -- so the
//  engine could not announce it and a run said nothing.
reviewStatus   interim;
reviewReason   importedFromCoolProp720_notCheckedAgainstPrimaries;
formula     C19H32O2;
CAS         301-00-8;

MW          292.4562;        // kg/kmol  [CoolProp]
Tc          772.0000;        // K        [CoolProp EOS]
Pc          13.68997;        // bar      [CoolProp EOS]
omega       1.14261;        // [-]      [CoolProp EOS]
Tb          629.1291;        // K  normal boiling [CoolProp]
HvapTb      64940.4;        // J/mol  at Tb     [CoolProp]
Vliq        3.2660e-04;        // m3/mol @298K     [CoolProp]

vaporPressure
{
    model         Antoine;
    // log10(Psat [bar]) = A - B / (T[K] + C)   -- fitted to CoolProp EOS
    coefficients  (5.04003   2634.16   -105.177);
    Trange        (347.40  756.56);
}

idealGasHeatCapacity
{
    model         polynomial;
    // Cp [J/(mol.K)] = a0 + a1 T + a2 T^2 + a3 T^3   -- fitted to CoolProp cp0
    coefficients  (87.091  1.18643  -0.000211176  -1.19686e-07);
    Trange        (200  1000);
}

liquidHeatCapacity
{
    model         polynomial;
    // Cp_liq [J/(mol.K)]   -- fitted to CoolProp saturated-liquid cp
    coefficients  (545.692  -0.00244011  0.000651761  1.31907e-07);
    Trange        (386  629);
}

triplePoint
{
    T   260.0000;
    P   0.0000;
}

standardThermochemistry
{
    dHf_298   -401110;      // J/mol ideal-gas -- provenance: see the structured dHf_298 block below
    dGf_298   39390;      // J/mol  ideal-gas [Joback]
    s_298     927.646;      // J/(mol*K) third-law [DERIVED: (dHf-dGf)/T + CODATA element S]
}

groups { joback ( { group CH3; count 2; } { group CH2; count 10; } { group eCH; count 6; } { group ester; count 1; } ); }

provenance
{
    dHf_298
    {
        origin           estimated;
        method           "Joback";
        methodVersion    "joback-poling5e-table2-2";
        input            joback;
        inputFingerprint "CH2:10,CH3:2,eCH:6,ester:1";
        uncertainty      { status unquantified; reason "bulk-import band ~9 kJ/mol, primary basis not verified"; }
    }

    constants      "CoolProp 7.2.0 -- Huber-EF-2009";
    vaporPressure  "Antoine fitted to CoolProp EOS saturation, AAD 1.46%";
    idealGasCp     "polynomial fitted to CoolProp cp0, maxerr 0.16%";
    liquidCp       "polynomial fitted to CoolProp sat-liquid cp, maxerr 0.06%";
    triplePoint    "CoolProp reference EOS triple-point T,P";
    preserved      "from prior proposal (NOT CoolProp): standardThermochemistry, groups";
}
`,_l=`/*--------------------------------*- Choupo -*-----------------------*\\
  Component: methylOleate  (C19H36O2, CAS 112-62-9)
  PROPOSAL TIER -- UNVERIFIED.  Imported from CoolProp 7.2.0 (MIT);
  pure-fluid properties from the published reference EOS below.
  Reference EOS: Huber-EF-2009
  NOTE: formation properties (dHf, s_298) and group decompositions
  are NOT provided by CoolProp -> omitted here (a gap, not fabricated).
\\*---------------------------------------------------------------------------*/

name        methylOleate;

//  Review state, MACHINE-READABLE (AP2, 2026-08-05).  This used to
//  live only in the banner above, which the parser discards -- so the
//  engine could not announce it and a run said nothing.
reviewStatus   interim;
reviewReason   importedFromCoolProp720_notCheckedAgainstPrimaries;
formula     C19H36O2;
CAS         112-62-9;

MW          296.4879;        // kg/kmol  [CoolProp]
Tc          782.0001;        // K        [CoolProp EOS]
Pc          12.46001;        // bar      [CoolProp EOS]
omega       0.90585;        // [-]      [CoolProp EOS]
Tb          627.1760;        // K  normal boiling [CoolProp]
HvapTb      58428.7;        // J/mol  at Tb     [CoolProp]
Vliq        3.4075e-04;        // m3/mol @298K     [CoolProp]

vaporPressure
{
    model         Antoine;
    // log10(Psat [bar]) = A - B / (T[K] + C)   -- fitted to CoolProp EOS
    coefficients  (4.43997   2244.29   -120.468);
    Trange        (351.90  766.36);
}

idealGasHeatCapacity
{
    model         polynomial;
    // Cp [J/(mol.K)] = a0 + a1 T + a2 T^2 + a3 T^3   -- fitted to CoolProp cp0
    coefficients  (36.609  1.56747  -0.000680206  6.2997e-08);
    Trange        (200  1000);
}

liquidHeatCapacity
{
    model         polynomial;
    // Cp_liq [J/(mol.K)]   -- fitted to CoolProp saturated-liquid cp
    coefficients  (621.646  -0.301172  0.0016511  -8.32461e-07);
    Trange        (391  627);
}

triplePoint
{
    T   253.4700;
    P   0.0000;
}

standardThermochemistry
{
    dHf_298   -635550;      // J/mol ideal-gas -- provenance: see the structured dHf_298 block below
    dGf_298   -121050;      // J/mol  ideal-gas [Joback]
    s_298     940.809;      // J/(mol*K) third-law [DERIVED: (dHf-dGf)/T + CODATA element S]
}

groups { unifac ( { group CH3; count 2; } { group CH2; count 13; } { group CH=CH; count 1; } { group CH2COO; count 1; } ); joback ( { group CH3; count 2; } { group CH2; count 14; } { group eCH; count 2; } { group ester; count 1; } ); }

provenance
{
    dHf_298
    {
        origin           estimated;
        method           "Joback";
        methodVersion    "joback-poling5e-table2-2";
        input            joback;
        inputFingerprint "CH2:14,CH3:2,eCH:2,ester:1";
        uncertainty      { status unquantified; reason "bulk-import band ~9 kJ/mol, primary basis not verified"; }
    }

    constants      "CoolProp 7.2.0 -- Huber-EF-2009";
    vaporPressure  "Antoine fitted to CoolProp EOS saturation, AAD 1.49%";
    idealGasCp     "polynomial fitted to CoolProp cp0, maxerr 0.06%";
    liquidCp       "polynomial fitted to CoolProp sat-liquid cp, maxerr 0.02%";
    triplePoint    "CoolProp reference EOS triple-point T,P";
    preserved      "from prior proposal (NOT CoolProp): standardThermochemistry, groups";
}

cosmo
{
    VT2005
    {
        model       COSMOSAC;
        variant     "2002";
        source      "VT-2005 sigma-profile database (Mullins et al., Ind. Eng. Chem. Res. 45 (2006) 4389; DFT-COSMO), file VT2005-0674-PROF.txt bundled in usnistgov/COSMOSAC; CAS 112-62-9";
        licence     externalRestricted;   // VT-2005: redistribution NOT confirmed -- values NOT shipped
        installed   false;                 // install your own copy: bin/choupo-import-cosmo (-> data/local/cosmo/VT2005/)
    }
}
`,El=`/*--------------------------------*- Choupo -*-----------------------*\\
  Component: methylPalmitate  (C17H34O2, CAS 112-39-0)
  PROPOSAL TIER -- UNVERIFIED.  Imported from CoolProp 7.2.0 (MIT);
  pure-fluid properties from the published reference EOS below.
  Reference EOS: Huber-EF-2009
  NOTE: formation properties (dHf, s_298) and group decompositions
  are NOT provided by CoolProp -> omitted here (a gap, not fabricated).
\\*---------------------------------------------------------------------------*/

name        methylPalmitate;

//  Review state, MACHINE-READABLE (AP2, 2026-08-05).  This used to
//  live only in the banner above, which the parser discards -- so the
//  engine could not announce it and a run said nothing.
reviewStatus   interim;
reviewReason   importedFromCoolProp720_notCheckedAgainstPrimaries;
formula     C17H34O2;
CAS         112-39-0;

MW          270.4507;        // kg/kmol  [CoolProp]
Tc          755.0001;        // K        [CoolProp EOS]
Pc          13.49958;        // bar      [CoolProp EOS]
omega       0.91032;        // [-]      [CoolProp EOS]
Tb          602.2689;        // K  normal boiling [CoolProp]
HvapTb      56786.6;        // J/mol  at Tb     [CoolProp]

vaporPressure
{
    model         Antoine;
    // log10(Psat [bar]) = A - B / (T[K] + C)   -- fitted to CoolProp EOS
    coefficients  (4.59981   2289.97   -103.274);
    Trange        (339.75  739.90);
}

idealGasHeatCapacity
{
    model         polynomial;
    // Cp [J/(mol.K)] = a0 + a1 T + a2 T^2 + a3 T^3   -- fitted to CoolProp cp0
    coefficients  (12.853  1.56707  -0.000806508  1.32508e-07);
    Trange        (200  1000);
}

liquidHeatCapacity
{
    model         polynomial;
    // Cp_liq [J/(mol.K)]   -- fitted to CoolProp saturated-liquid cp
    coefficients  (376.654  0.639981  -1.43446e-05  1.79158e-07);
    Trange        (378  602);
}

triplePoint
{
    T   302.7100;
    P   0.0164;
}

standardThermochemistry
{
    dHf_298   -711490;      // J/mol ideal-gas -- provenance: see the structured dHf_298 block below
    dGf_298   -218110;      // J/mol  ideal-gas [Joback]
    s_298     869.485;      // J/(mol*K) third-law [DERIVED: (dHf-dGf)/T + CODATA element S]
}

groups { unifac ( { group CH3; count 2; } { group CH2; count 13; } { group CH2COO; count 1; } ); joback ( { group CH3; count 2; } { group CH2; count 14; } { group ester; count 1; } ); }

provenance
{
    dHf_298
    {
        origin           estimated;
        method           "Joback";
        methodVersion    "joback-poling5e-table2-2";
        input            joback;
        inputFingerprint "CH2:14,CH3:2,ester:1";
        uncertainty      { status unquantified; reason "bulk-import band ~9 kJ/mol, primary basis not verified"; }
    }

    constants      "CoolProp 7.2.0 -- Huber-EF-2009";
    vaporPressure  "Antoine fitted to CoolProp EOS saturation, AAD 1.34%";
    idealGasCp     "polynomial fitted to CoolProp cp0, maxerr 0.06%";
    liquidCp       "polynomial fitted to CoolProp sat-liquid cp, maxerr 0.02%";
    triplePoint    "CoolProp reference EOS triple-point T,P";
    preserved      "from prior proposal (NOT CoolProp): standardThermochemistry, groups";
}
`,wl=`/*--------------------------------*- Choupo -*-----------------------*\\
  Component: methylStearate  (C19H38O2, CAS 112-61-8)
  PROPOSAL TIER -- UNVERIFIED.  Imported from CoolProp 7.2.0 (MIT);
  pure-fluid properties from the published reference EOS below.
  Reference EOS: Huber-EF-2009
  NOTE: formation properties (dHf, s_298) and group decompositions
  are NOT provided by CoolProp -> omitted here (a gap, not fabricated).
\\*---------------------------------------------------------------------------*/

name        methylStearate;

//  Review state, MACHINE-READABLE (AP2, 2026-08-05).  This used to
//  live only in the banner above, which the parser discards -- so the
//  engine could not announce it and a run said nothing.
reviewStatus   interim;
reviewReason   importedFromCoolProp720_notCheckedAgainstPrimaries;
formula     C19H38O2;
CAS         112-61-8;

MW          298.5038;        // kg/kmol  [CoolProp]
Tc          775.0000;        // K        [CoolProp EOS]
Pc          12.38999;        // bar      [CoolProp EOS]
omega       1.01756;        // [-]      [CoolProp EOS]
Tb          629.5570;        // K  normal boiling [CoolProp]
HvapTb      60799.7;        // J/mol  at Tb     [CoolProp]

vaporPressure
{
    model         Antoine;
    // log10(Psat [bar]) = A - B / (T[K] + C)   -- fitted to CoolProp EOS
    coefficients  (4.72754   2460.38   -107.693);
    Trange        (348.75  759.50);
}

idealGasHeatCapacity
{
    model         polynomial;
    // Cp [J/(mol.K)] = a0 + a1 T + a2 T^2 + a3 T^3   -- fitted to CoolProp cp0
    coefficients  (11.8332  1.75382  -0.000905291  1.48269e-07);
    Trange        (228  1000);
}

liquidHeatCapacity
{
    model         polynomial;
    // Cp_liq [J/(mol.K)]   -- fitted to CoolProp saturated-liquid cp
    coefficients  (434.856  0.626678  0.00013583  7.68591e-08);
    Trange        (387  630);
}

triplePoint
{
    T   311.8400;
    P   0.0060;
}

standardThermochemistry
{
    dHf_298   -752770;      // J/mol ideal-gas -- provenance: see the structured dHf_298 block below
    dGf_298   -201270;      // J/mol  ideal-gas [Joback]
    s_298     947.39;      // J/(mol*K) third-law [DERIVED: (dHf-dGf)/T + CODATA element S]
}

groups { unifac ( { group CH3; count 2; } { group CH2; count 15; } { group CH2COO; count 1; } ); joback ( { group CH3; count 2; } { group CH2; count 16; } { group ester; count 1; } ); }

provenance
{
    dHf_298
    {
        origin           estimated;
        method           "Joback";
        methodVersion    "joback-poling5e-table2-2";
        input            joback;
        inputFingerprint "CH2:16,CH3:2,ester:1";
        uncertainty      { status unquantified; reason "bulk-import band ~9 kJ/mol, primary basis not verified"; }
    }

    constants      "CoolProp 7.2.0 -- Huber-EF-2009";
    vaporPressure  "Antoine fitted to CoolProp EOS saturation, AAD 1.54%";
    idealGasCp     "polynomial fitted to CoolProp cp0, maxerr 0.06%";
    liquidCp       "polynomial fitted to CoolProp sat-liquid cp, maxerr 0.03%";
    triplePoint    "CoolProp reference EOS triple-point T,P";
    preserved      "from prior proposal (NOT CoolProp): standardThermochemistry, groups";
}
`,xl=`/*--------------------------------*- Choupo -*-----------------------*\\
  Mineral: mirabilite (Na2SO4:10H2O) -- unified substance file.
  One canonical record per chemical identity; the solid-phase dissolution
  equilibrium (Ksp) lives here as a typed solidPhase (roadmap Phase D).
  Migrated from chemistry/mineralSolubility/ with values preserved verbatim.
\\*---------------------------------------------------------------------------*/
name mirabilite;
formula "Na2SO4:10H2O";

solidPhases
{
    mirabilite
    {
        dissolutionReaction { masters ( { ion Na; nu 2; } { ion SO4; nu 1; } ); nuWater 10; }
        equilibrium { logK25 -0.706; dH 124000; analytic ( -53.037 0.1242 4562 ); source "USGS PHREEQC phreeqc.dat (public domain); lit: ref. 3"; }
    }
}
`,Nl=`/*--------------------------------*- Choupo -*-----------------------*\\
  Mineral: misenite (K8H6(SO4)7) -- unified substance file.
  One canonical record per chemical identity; the solid-phase dissolution
  equilibrium (Ksp) lives here as a typed solidPhase (roadmap Phase D).
  Migrated from chemistry/mineralSolubility/ with values preserved verbatim.
\\*---------------------------------------------------------------------------*/
name misenite;
formula "K8H6(SO4)7";

solidPhases
{
    misenite
    {
        dissolutionReaction { masters ( { ion H; nu 6; } { ion SO4; nu 7; } { ion K; nu 8; } ); }
        equilibrium { logK25 -10.806; dH 0; source "USGS PHREEQC pitzer.dat/phreeqc.dat (public domain); reaction re-expressed to Choupo master basis from Misenite"; }
    }
}
`,Rl=`/*--------------------------------*- Choupo -*-----------------------*\\
  Component: n-Butane  (C4H10, CAS 106-97-8)

  The other half of LPG; refinery alkylation feedstock; aerosol
  propellant.  Tc = 425 K means it is liquefiable at room temperature
  under modest pressure (~3 bar).  iso-Butane has Tc ~408 K and
  similar Cp --- close enough that this entry doubles as a rough
  surrogate when the isomer is not separated.
  Sources: constants (Tc, Pc, omega, MW, Tb) cross-checked against the
  CoolProp 7.2.0 reference equation of state (MIT-licensed); ideal-gas
  formation properties (dHf_298, s_298) from NASA TM-4513 (McBride-
  Gordon-Reno 1993).
\\*---------------------------------------------------------------------------*/

name        nButane;
formula     C4H10;
CAS         106-97-8;

MW          58.123;            // kg/kmol
Tc          425.12;             // K
Pc          37.96;              // bar
omega       0.200;              // [-]
Tb          272.65;             // K
HvapTb      22440;              // J/mol
Vliq        9.62e-5;            // m^3/mol

standardThermochemistry
{
    dHf_298    -125790.0;       // J/mol  -- ideal-gas reference
    s_298      310.12;          // J/(mol·K)
}

vaporPressure
{
    model         Antoine;
    coefficients  (3.93266   935.773   -34.361);
    Trange        (273  425);
}

idealGasHeatCapacity
{
    model         polynomial;
    coefficients  (9.487   0.3313   -1.108e-4   -2.822e-9);
    Trange        (250  1500);
}

groups
{
    joback ( { group CH3; count 2; } { group CH2; count 2; } );
    unifac ( { group CH3; count 2; } { group CH2; count 2; } );
}

liquidHeatCapacity
{
    model         polynomial;
    // Cp_liq [J/(mol.K)] -- fitted to CoolProp 7.2.0 saturated-liquid cp (maxerr 0.00%)
    coefficients  (127.406  -0.185729  0.000648415  4.57156e-07);
    Trange        (213  273);
}

// Friendly-name aliases (resolved to this file via the generated ALIASES index).
aliases ( n-butane butane C4H10 );

cosmo
{
    VT2005
    {
        model       COSMOSAC;
        variant     "2002";
        source      "VT-2005 sigma-profile database (Mullins et al., Ind. Eng. Chem. Res. 45 (2006) 4389; DFT-COSMO), file VT2005-0005-PROF.txt bundled in usnistgov/COSMOSAC; CAS 106-97-8";
        licence     externalRestricted;   // VT-2005: redistribution NOT confirmed -- values NOT shipped
        installed   false;                 // install your own copy: bin/choupo-import-cosmo (-> data/local/cosmo/VT2005/)
    }
}

// PC-SAFT non-associating segment parameters (Gross & Sadowski, IECR 40
// (2001) 1244, Table 1 -- the pure n-alkane fit to vapour pressure + liquid
// density).  m segments, sigma [Angstrom], epsilon/k [K].
pcsaft
{
    m        2.3316;
    sigma    3.7086;
    epsilonK 222.88;
    source   "Gross & Sadowski, Ind. Eng. Chem. Res. 40 (2001) 1244, Table 1";
}
`,kl=`/*--------------------------------*- Choupo -*-----------------------*\\
  Component: 1-Butanol  (C4H10O, CAS 71-36-3)
  Notable LLE: partially miscible with water below 125.5 °C (UCST).
  Sources: critical constants (Tc/Pc/omega/Tb/HvapTb/Vliq), Antoine
           coefficients, Cp polynomials and the ideal-gas formation datum
           (JANAF convention) are individual literature values -- primary
           re-citation pending (IST review); the 125.5 degC water/1-butanol
           UCST above is the textbook figure, same pending re-citation.
\\*---------------------------------------------------------------------------*/

name        nButanol;
formula     C4H10O;
CAS         71-36-3;

MW          74.122;
Tc          563.05;
Pc          44.14;
omega       0.5897;
Tb          390.81;
HvapTb      43130;
Vliq        9.190e-5;


standardThermochemistry
{
    dHf_298   -274600.0;        // J/mol  -- ideal-gas reference
    s_298     363.620;         // J/(mol·K)  -- third-law absolute
}
vaporPressure
{
    model         Antoine;
    coefficients  (4.54607   1351.555   -93.34);
    Trange        (295  392);
}

idealGasHeatCapacity
{
    model         polynomial;
    coefficients  (3.266   0.4180   -2.242e-4   4.685e-8);
    Trange        (200  1500);
}

liquidHeatCapacity
{
    model         polynomial;
    coefficients  (177.0);          // ~177 J/(mol·K) average near 25 °C
    Trange        (280  390);
}

uniquac
{
    r   3.9243;
    q   3.668;      // van der Waals structural constants (Bondi group sums;
                    // as tabulated by Winkelman et al., Ind. Eng. Chem. Res.
                    // 48 (2009), Table 1 -- the cited LLE regression set)
}

groups
{
    joback ( { group CH3; count 1; } { group CH2; count 3; } { group OH; count 1; } );
    unifac ( { group CH3; count 1; } { group CH2; count 3; } { group OH; count 1; } );
}

cosmo
{
    VT2005
    {
        model       COSMOSAC;
        variant     "2002";
        source      "VT-2005 sigma-profile database (Mullins et al., Ind. Eng. Chem. Res. 45 (2006) 4389; DFT-COSMO), file VT2005-0481-PROF.txt bundled in usnistgov/COSMOSAC; CAS 71-36-3";
        licence     externalRestricted;   // VT-2005: redistribution NOT confirmed -- values NOT shipped
        installed   false;                 // install your own copy: bin/choupo-import-cosmo (-> data/local/cosmo/VT2005/)
    }
}
`,Ml=`/*--------------------------------*- Choupo -*-----------------------*\\
  Component: nDecane  (C10H22, CAS 124-18-5)
  PROPOSAL TIER -- UNVERIFIED.  Imported from CoolProp 7.2.0 (MIT);
  pure-fluid properties from the published reference EOS below.
  Reference EOS: Lemmon-JCED-2006
  NOTE: formation properties (dHf, s_298) and group decompositions
  are NOT provided by CoolProp -> omitted here (a gap, not fabricated).
\\*---------------------------------------------------------------------------*/

name        nDecane;

//  Review state, MACHINE-READABLE (AP2, 2026-08-05).  This used to
//  live only in the banner above, which the parser discards -- so the
//  engine could not announce it and a run said nothing.
reviewStatus   interim;
reviewReason   importedFromCoolProp720_notCheckedAgainstPrimaries;
formula     C10H22;
CAS         124-18-5;

MW          142.2817;        // kg/kmol  [CoolProp]
Tc          617.6988;        // K        [CoolProp EOS]
Pc          21.01337;        // bar      [CoolProp EOS]
omega       0.48840;        // [-]      [CoolProp EOS]
Tb          447.2702;        // K  normal boiling [CoolProp]
HvapTb      39325.8;        // J/mol  at Tb     [CoolProp]
Vliq        1.9586e-04;        // m3/mol @298K     [CoolProp]

vaporPressure
{
    model         Antoine;
    // log10(Psat [bar]) = A - B / (T[K] + C)   -- fitted to CoolProp EOS
    coefficients  (4.18804   1575.96   -70.576);
    Trange        (277.96  605.34);
}

idealGasHeatCapacity
{
    model         polynomial;
    // Cp [J/(mol.K)] = a0 + a1 T + a2 T^2 + a3 T^3   -- fitted to CoolProp cp0
    coefficients  (28.0461  0.757235  -0.000162103  -9.4378e-08);
    Trange        (200  1000);
}

liquidHeatCapacity
{
    model         polynomial;
    // Cp_liq [J/(mol.K)]   -- fitted to CoolProp saturated-liquid cp
    coefficients  (220.811  -0.0169941  0.00137459  -9.85251e-07);
    Trange        (309  447);
}

triplePoint
{
    T   243.5000;
    P   1.4042;
}

standardThermochemistry
{
    dHf_298   -249730;      // J/mol ideal-gas -- provenance: see the structured dHf_298 block below
    dGf_298   33320;      // J/mol  ideal-gas [Joback]
    s_298     545.526;      // J/(mol*K) third-law [DERIVED: (dHf-dGf)/T + CODATA element S]
}

groups
{
    joback ( { group CH3; count 2; } { group CH2; count 8; } );
    unifac ( { group CH3; count 2; } { group CH2; count 8; } );
}
provenance
{
    dHf_298
    {
        origin           estimated;
        method           "Joback";
        methodVersion    "joback-poling5e-table2-2";
        input            joback;
        inputFingerprint "CH2:8,CH3:2";
        uncertainty      { status unquantified; reason "bulk-import band ~9 kJ/mol, primary basis not verified"; }
    }

    constants      "CoolProp 7.2.0 -- Lemmon-JCED-2006";
    vaporPressure  "Antoine fitted to CoolProp EOS saturation, AAD 0.57%";
    idealGasCp     "polynomial fitted to CoolProp cp0, maxerr 3.82%";
    liquidCp       "polynomial fitted to CoolProp sat-liquid cp, maxerr 0.01%";
    triplePoint    "CoolProp reference EOS triple-point T,P";
    preserved      "from prior proposal (NOT CoolProp): standardThermochemistry, groups";
}
cosmo
{
    VT2005
    {
        model       COSMOSAC;
        variant     "2002";
        source      "VT-2005 sigma-profile database (Mullins et al., Ind. Eng. Chem. Res. 45 (2006) 4389; DFT-COSMO), file VT2005-0051-PROF.txt bundled in usnistgov/COSMOSAC; CAS 124-18-5";
        licence     externalRestricted;   // VT-2005: redistribution NOT confirmed -- values NOT shipped
        installed   false;                 // install your own copy: bin/choupo-import-cosmo (-> data/local/cosmo/VT2005/)
    }
}
`,Kl=`/*--------------------------------*- Choupo -*-----------------------*\\
  Component: nDodecane  (C12H26, CAS 112-40-3)
  PROPOSAL TIER -- UNVERIFIED.  Imported from CoolProp 7.2.0 (MIT);
  pure-fluid properties from the published reference EOS below.
  Reference EOS: Lemmon-EF-2004
  NOTE: formation properties (dHf, s_298) and group decompositions
  are NOT provided by CoolProp -> omitted here (a gap, not fabricated).
\\*---------------------------------------------------------------------------*/

name        nDodecane;

//  Review state, MACHINE-READABLE (AP2, 2026-08-05).  This used to
//  live only in the banner above, which the parser discards -- so the
//  engine could not announce it and a run said nothing.
reviewStatus   interim;
reviewReason   importedFromCoolProp720_notCheckedAgainstPrimaries;
formula     C12H26;
CAS         112-40-3;

MW          170.3348;        // kg/kmol  [CoolProp]
Tc          658.1000;        // K        [CoolProp EOS]
Pc          18.17570;        // bar      [CoolProp EOS]
omega       0.57418;        // [-]      [CoolProp EOS]
Tb          489.4415;        // K  normal boiling [CoolProp]
HvapTb      43632.6;        // J/mol  at Tb     [CoolProp]
Vliq        2.2844e-04;        // m3/mol @298K     [CoolProp]

vaporPressure
{
    model         Antoine;
    // log10(Psat [bar]) = A - B / (T[K] + C)   -- fitted to CoolProp EOS
    coefficients  (4.23947   1722.69   -82.6887);
    Trange        (296.15  644.94);
}

idealGasHeatCapacity
{
    model         polynomial;
    // Cp [J/(mol.K)] = a0 + a1 T + a2 T^2 + a3 T^3   -- fitted to CoolProp cp0
    coefficients  (30.6502  0.919182  -0.000211344  -1.09975e-07);
    Trange        (200  1000);
}

liquidHeatCapacity
{
    model         polynomial;
    // Cp_liq [J/(mol.K)]   -- fitted to CoolProp saturated-liquid cp
    coefficients  (275.672  -0.0127602  0.0014634  -9.82347e-07);
    Trange        (329  489);
}

triplePoint
{
    T   263.6000;
    P   0.6262;
}

standardThermochemistry
{
    dHf_298   -291010;      // J/mol ideal-gas -- provenance: see the structured dHf_298 block below
    dGf_298   50160;      // J/mol  ideal-gas [Joback]
    s_298     623.43;      // J/(mol*K) third-law [DERIVED: (dHf-dGf)/T + CODATA element S]
}

groups { unifac ( { group CH3; count 2; } { group CH2; count 10; } ); joback ( { group CH3; count 2; } { group CH2; count 10; } ); }

provenance
{
    dHf_298
    {
        origin           estimated;
        method           "Joback";
        methodVersion    "joback-poling5e-table2-2";
        input            joback;
        inputFingerprint "CH2:10,CH3:2";
        uncertainty      { status unquantified; reason "bulk-import band ~9 kJ/mol, primary basis not verified"; }
    }

    constants      "CoolProp 7.2.0 -- Lemmon-EF-2004";
    vaporPressure  "Antoine fitted to CoolProp EOS saturation, AAD 0.68%";
    idealGasCp     "polynomial fitted to CoolProp cp0, maxerr 3.96%";
    liquidCp       "polynomial fitted to CoolProp sat-liquid cp, maxerr 0.02%";
    triplePoint    "CoolProp reference EOS triple-point T,P";
    preserved      "from prior proposal (NOT CoolProp): standardThermochemistry, groups";
}

cosmo
{
    VT2005
    {
        model       COSMOSAC;
        variant     "2002";
        source      "VT-2005 sigma-profile database (Mullins et al., Ind. Eng. Chem. Res. 45 (2006) 4389; DFT-COSMO), file VT2005-0055-PROF.txt bundled in usnistgov/COSMOSAC; CAS 112-40-3";
        licence     externalRestricted;   // VT-2005: redistribution NOT confirmed -- values NOT shipped
        installed   false;                 // install your own copy: bin/choupo-import-cosmo (-> data/local/cosmo/VT2005/)
    }
}
`,ql=`/*--------------------------------*- Choupo -*-----------------------*\\
  Component: nHeptane  (C7H16, CAS 142-82-5)
  PROPOSAL TIER -- UNVERIFIED.  Imported from CoolProp 7.2.0 (MIT);
  pure-fluid properties from the published reference EOS below.
  Reference EOS: Span-IJT-2003B
  NOTE: formation properties (dHf, s_298) and group decompositions
  are NOT provided by CoolProp -> omitted here (a gap, not fabricated).
\\*---------------------------------------------------------------------------*/

name        nHeptane;

//  Review state, MACHINE-READABLE (AP2, 2026-08-05).  This used to
//  live only in the banner above, which the parser discards -- so the
//  engine could not announce it and a run said nothing.
reviewStatus   interim;
reviewReason   importedFromCoolProp720_notCheckedAgainstPrimaries;
formula     C7H16;
CAS         142-82-5;

MW          100.2020;        // kg/kmol  [CoolProp]
Tc          541.2259;        // K        [CoolProp EOS]
Pc          27.73824;        // bar      [CoolProp EOS]
omega       0.34900;        // [-]      [CoolProp EOS]
Tb          371.5333;        // K  normal boiling [CoolProp]
HvapTb      31752.5;        // J/mol  at Tb     [CoolProp]
Vliq        1.4746e-04;        // m3/mol @298K     [CoolProp]

vaporPressure
{
    model         Antoine;
    // log10(Psat [bar]) = A - B / (T[K] + C)   -- fitted to CoolProp EOS
    coefficients  (4.11662   1317.92   -51.0126);
    Trange        (243.55  530.40);
}

idealGasHeatCapacity
{
    model         polynomial;
    // Cp [J/(mol.K)] = a0 + a1 T + a2 T^2 + a3 T^3   -- fitted to CoolProp cp0
    coefficients  (26.0212  0.503085  -6.62609e-05  -8.32332e-08);
    Trange        (200  1000);
}

liquidHeatCapacity
{
    model         polynomial;
    // Cp_liq [J/(mol.K)]   -- fitted to CoolProp saturated-liquid cp
    coefficients  (243.596  -0.676376  0.0026287  -1.92749e-06);
    Trange        (271  372);
}

triplePoint
{
    T   182.5500;
    P   0.1755;
}

standardThermochemistry
{
    dHf_298   -187798.9;        // J/mol  ideal-gas [origin=measured method=NASA-TM4513]
    s_298     428.09;        // J/(mol.K) third-law absolute [NASA-TM4513]
}

groups
{
    joback ( { group CH3; count 2; } { group CH2; count 5; } );
    unifac ( { group CH3; count 2; } { group CH2; count 5; } );
}
provenance
{
    constants      "CoolProp 7.2.0 -- Span-IJT-2003B";
    vaporPressure  "Antoine fitted to CoolProp EOS saturation, AAD 0.51%";
    idealGasCp     "polynomial fitted to CoolProp cp0, maxerr 3.39%";
    liquidCp       "polynomial fitted to CoolProp sat-liquid cp, maxerr 0.01%";
    triplePoint    "CoolProp reference EOS triple-point T,P";
    preserved      "from prior proposal (NOT CoolProp): standardThermochemistry, groups";
    standardThermochemistry "NASA TM-4513 (McBride-Gordon-Reno 1993), H0/S0(298.15) from NASA-7 poly";
}
cosmo
{
    VT2005
    {
        model       COSMOSAC;
        variant     "2002";
        source      "VT-2005 sigma-profile database (Mullins et al., Ind. Eng. Chem. Res. 45 (2006) 4389; DFT-COSMO), file VT2005-0014-PROF.txt bundled in usnistgov/COSMOSAC; CAS 142-82-5";
        licence     externalRestricted;   // VT-2005: redistribution NOT confirmed -- values NOT shipped
        installed   false;                 // install your own copy: bin/choupo-import-cosmo (-> data/local/cosmo/VT2005/)
    }
}
`,Il=`/*--------------------------------*- Choupo -*-----------------------*\\
  Component: n-Hexane  (C6H14, CAS 110-54-3)
  Sources: critical constants (Tc/Pc/omega/Tb/HvapTb/Vliq), Antoine
           coefficients, Cp polynomials and the ideal-gas formation datum
           (dHf_298/s_298, JANAF convention) are individual literature
           values -- primary re-citation pending (IST review).
\\*---------------------------------------------------------------------------*/

name        nHexane;
formula     C6H14;
CAS         110-54-3;

MW          86.178;
Tc          507.60;
Pc          30.25;
omega       0.3013;
Tb          341.88;
HvapTb      28850;
Vliq        1.316e-4;


standardThermochemistry
{
    dHf_298   -167200.0;        // J/mol  -- ideal-gas reference
    s_298     388.510;         // J/(mol·K)  -- third-law absolute
}
vaporPressure
{
    model         Antoine;
    coefficients  (4.00266   1171.530   -48.784);
    Trange        (286  343);
}

idealGasHeatCapacity
{
    model         polynomial;
    coefficients  (-4.413   0.582   -3.119e-4   6.494e-8);
    Trange        (200  1500);
}

liquidHeatCapacity
{
    model         polynomial;
    coefficients  (196.0);
    Trange        (280  340);
}

groups
{
    joback ( { group CH3; count 2; } { group CH2; count 4; } );
    unifac ( { group CH3; count 2; } { group CH2; count 4; } );
}

cosmo
{
    VT2005
    {
        model       COSMOSAC;
        variant     "2002";
        source      "VT-2005 sigma-profile database (Mullins et al., Ind. Eng. Chem. Res. 45 (2006) 4389; DFT-COSMO), file VT2005-0009-PROF.txt bundled in usnistgov/COSMOSAC; CAS 110-54-3";
        licence     externalRestricted;   // VT-2005: redistribution NOT confirmed -- values NOT shipped
        installed   false;                 // install your own copy: bin/choupo-import-cosmo (-> data/local/cosmo/VT2005/)
    }
}

// PC-SAFT non-associating segment parameters (Gross & Sadowski, IECR 40
// (2001) 1244, Table 1 -- the pure n-alkane fit to vapour pressure + liquid
// density).  m segments, sigma [Angstrom], epsilon/k [K].
pcsaft
{
    m        3.0576;
    sigma    3.7983;
    epsilonK 236.77;
    source   "Gross & Sadowski, Ind. Eng. Chem. Res. 40 (2001) 1244, Table 1";
}
`,Jl=`/*--------------------------------*- Choupo -*-----------------------*\\
  Component: nNonane  (C9H20, CAS 111-84-2)
  PROPOSAL TIER -- UNVERIFIED.  Imported from CoolProp 7.2.0 (MIT);
  pure-fluid properties from the published reference EOS below.
  Reference EOS: Lemmon-JCED-2006
  NOTE: formation properties (dHf, s_298) and group decompositions
  are NOT provided by CoolProp -> omitted here (a gap, not fabricated).
\\*---------------------------------------------------------------------------*/

name        nNonane;

//  Review state, MACHINE-READABLE (AP2, 2026-08-05).  This used to
//  live only in the banner above, which the parser discards -- so the
//  engine could not announce it and a run said nothing.
reviewStatus   interim;
reviewReason   importedFromCoolProp720_notCheckedAgainstPrimaries;
formula     C9H20;
CAS         111-84-2;

MW          128.2551;        // kg/kmol  [CoolProp]
Tc          594.5478;        // K        [CoolProp EOS]
Pc          22.81911;        // bar      [CoolProp EOS]
omega       0.44330;        // [-]      [CoolProp EOS]
Tb          423.9130;        // K  normal boiling [CoolProp]
HvapTb      37012.4;        // J/mol  at Tb     [CoolProp]
Vliq        1.7963e-04;        // m3/mol @298K     [CoolProp]

vaporPressure
{
    model         Antoine;
    // log10(Psat [bar]) = A - B / (T[K] + C)   -- fitted to CoolProp EOS
    coefficients  (4.15684   1491.35   -64.7569);
    Trange        (267.55  582.66);
}

idealGasHeatCapacity
{
    model         polynomial;
    // Cp [J/(mol.K)] = a0 + a1 T + a2 T^2 + a3 T^3   -- fitted to CoolProp cp0
    coefficients  (27.4044  0.671596  -0.000128166  -9.20168e-08);
    Trange        (200  1000);
}

liquidHeatCapacity
{
    model         polynomial;
    // Cp_liq [J/(mol.K)]   -- fitted to CoolProp saturated-liquid cp
    coefficients  (233.466  -0.253686  0.00178859  -1.27148e-06);
    Trange        (297  424);
}

triplePoint
{
    T   219.7000;
    P   0.4445;
}

standardThermochemistry
{
    dHf_298   -229090;      // J/mol ideal-gas -- provenance: see the structured dHf_298 block below
    dGf_298   24900;      // J/mol  ideal-gas [Joback]
    s_298     506.573;      // J/(mol*K) third-law [DERIVED: (dHf-dGf)/T + CODATA element S]
}

groups
{
    joback ( { group CH3; count 2; } { group CH2; count 7; } );
    unifac ( { group CH3; count 2; } { group CH2; count 7; } );
}
provenance
{
    dHf_298
    {
        origin           estimated;
        method           "Joback";
        methodVersion    "joback-poling5e-table2-2";
        input            joback;
        inputFingerprint "CH2:7,CH3:2";
        uncertainty      { status unquantified; reason "bulk-import band ~9 kJ/mol, primary basis not verified"; }
    }

    constants      "CoolProp 7.2.0 -- Lemmon-JCED-2006";
    vaporPressure  "Antoine fitted to CoolProp EOS saturation, AAD 0.54%";
    idealGasCp     "polynomial fitted to CoolProp cp0, maxerr 3.74%";
    liquidCp       "polynomial fitted to CoolProp sat-liquid cp, maxerr 0.01%";
    triplePoint    "CoolProp reference EOS triple-point T,P";
    preserved      "from prior proposal (NOT CoolProp): standardThermochemistry, groups";
}
cosmo
{
    VT2005
    {
        model       COSMOSAC;
        variant     "2002";
        source      "VT-2005 sigma-profile database (Mullins et al., Ind. Eng. Chem. Res. 45 (2006) 4389; DFT-COSMO), file VT2005-0041-PROF.txt bundled in usnistgov/COSMOSAC; CAS 111-84-2";
        licence     externalRestricted;   // VT-2005: redistribution NOT confirmed -- values NOT shipped
        installed   false;                 // install your own copy: bin/choupo-import-cosmo (-> data/local/cosmo/VT2005/)
    }
}
`,Vl=`/*--------------------------------*- Choupo -*-----------------------*\\
  Component: n-Octane  (C8H18, CAS 111-65-9)

  Reference compound for the gasoline RON / MON scale (iso-octane =
  2,2,4-trimethylpentane has the same Tc within ~5 K so this entry
  doubles as a surrogate when the isomer is not resolved).  Useful
  for combustion equilibria in IC engines.
  Sources: constants (Tc, Pc, omega, MW, Tb) cross-checked against the
  CoolProp 7.2.0 reference equation of state (MIT-licensed); ideal-gas
  formation properties (dHf_298, s_298) from NASA TM-4513 (McBride-
  Gordon-Reno 1993).
\\*---------------------------------------------------------------------------*/

name        nOctane;
formula     C8H18;
CAS         111-65-9;

MW          114.231;           // kg/kmol
Tc          568.70;             // K
Pc          24.86;              // bar
omega       0.398;              // [-]
Tb          398.83;             // K
HvapTb      34410;              // J/mol
Vliq        1.638e-4;           // m^3/mol

standardThermochemistry
{
    dHf_298    -208447.0;       // J/mol  -- ideal-gas reference
    s_298      466.73;          // J/(mol·K)
}

vaporPressure
{
    model         Antoine;
    coefficients  (4.04867   1351.94   -64.030);
    Trange        (326  399);
}

idealGasHeatCapacity
{
    model         polynomial;
    coefficients  (-6.096   0.7712   -4.195e-4   8.855e-8);
    Trange        (250  1500);
}

groups
{
    joback ( { group CH3; count 2; } { group CH2; count 6; } );
    unifac ( { group CH3; count 2; } { group CH2; count 6; } );
}

// Friendly-name aliases -- resolved to this file via the generated ALIASES index.
aliases ( n-octane octane C8H18 );

cosmo
{
    VT2005
    {
        model       COSMOSAC;
        variant     "2002";
        source      "VT-2005 sigma-profile database (Mullins et al., Ind. Eng. Chem. Res. 45 (2006) 4389; DFT-COSMO), file VT2005-0023-PROF.txt bundled in usnistgov/COSMOSAC; CAS 111-65-9";
        licence     externalRestricted;   // VT-2005: redistribution NOT confirmed -- values NOT shipped
        installed   false;                 // install your own copy: bin/choupo-import-cosmo (-> data/local/cosmo/VT2005/)
    }
}
`,Dl=`/*--------------------------------*- Choupo -*-----------------------*\\
  Component: nPentane  (C5H12, CAS 109-66-0)
  PROPOSAL TIER -- UNVERIFIED.  Imported from CoolProp 7.2.0 (MIT);
  pure-fluid properties from the published reference EOS below.
  Reference EOS: Thol-FPE-2019-alkanes-pentane
  NOTE: formation properties (dHf, s_298) and group decompositions
  are NOT provided by CoolProp -> omitted here (a gap, not fabricated).
\\*---------------------------------------------------------------------------*/

name        nPentane;

//  Review state, MACHINE-READABLE (AP2, 2026-08-05).  This used to
//  live only in the banner above, which the parser discards -- so the
//  engine could not announce it and a run said nothing.
reviewStatus   interim;
reviewReason   importedFromCoolProp720_notCheckedAgainstPrimaries;
formula     C5H12;
CAS         109-66-0;

MW          72.1488;        // kg/kmol  [CoolProp]
Tc          469.7000;        // K        [CoolProp EOS]
Pc          33.67519;        // bar      [CoolProp EOS]
omega       0.25103;        // [-]      [CoolProp EOS]
Tb          309.2093;        // K  normal boiling [CoolProp]
HvapTb      25807.9;        // J/mol  at Tb     [CoolProp]
Vliq        1.1615e-04;        // m3/mol @298K     [CoolProp]

vaporPressure
{
    model         Antoine;
    // log10(Psat [bar]) = A - B / (T[K] + C)   -- fitted to CoolProp EOS
    coefficients  (4.08016   1114.85   -35.6611);
    Trange        (211.36  460.31);
}

idealGasHeatCapacity
{
    model         polynomial;
    // Cp [J/(mol.K)] = a0 + a1 T + a2 T^2 + a3 T^3   -- fitted to CoolProp cp0
    coefficients  (25.6181  0.321682  3.44374e-05  -1.06665e-07);
    Trange        (200  1000);
}

liquidHeatCapacity
{
    model         polynomial;
    // Cp_liq [J/(mol.K)]   -- fitted to CoolProp saturated-liquid cp
    coefficients  (175.563  -0.504999  0.00199831  -1.33961e-06);
    Trange        (235  309);
}

triplePoint
{
    T   143.4700;
    P   0.0780;
}

standardThermochemistry
{
    dHf_298   -146755.1;        // J/mol  ideal-gas [origin=measured method=NASA-TM4513]
    s_298     349.49;        // J/(mol.K) third-law absolute [NASA-TM4513]
}

groups
{
    joback ( { group CH3; count 2; } { group CH2; count 3; } );
    unifac ( { group CH3; count 2; } { group CH2; count 3; } );
}
provenance
{
    constants      "CoolProp 7.2.0 -- Thol-FPE-2019-alkanes-pentane";
    vaporPressure  "Antoine fitted to CoolProp EOS saturation, AAD 0.55%";
    idealGasCp     "polynomial fitted to CoolProp cp0, maxerr 3.20%";
    liquidCp       "polynomial fitted to CoolProp sat-liquid cp, maxerr 0.00%";
    triplePoint    "CoolProp reference EOS triple-point T,P";
    preserved      "from prior proposal (NOT CoolProp): standardThermochemistry, groups";
    standardThermochemistry "NASA TM-4513 (McBride-Gordon-Reno 1993), H0/S0(298.15) from NASA-7 poly";
}
cosmo
{
    VT2005
    {
        model       COSMOSAC;
        variant     "2002";
        source      "VT-2005 sigma-profile database (Mullins et al., Ind. Eng. Chem. Res. 45 (2006) 4389; DFT-COSMO), file VT2005-0006-PROF.txt bundled in usnistgov/COSMOSAC; CAS 109-66-0";
        licence     externalRestricted;   // VT-2005: redistribution NOT confirmed -- values NOT shipped
        installed   false;                 // install your own copy: bin/choupo-import-cosmo (-> data/local/cosmo/VT2005/)
    }
}
`,Fl=`/*--------------------------------*- Choupo -*-----------------------*\\
  Component: nUndecane  (C11H24, CAS 1120-21-4)
  PROPOSAL TIER -- UNVERIFIED.  Imported from CoolProp 7.2.0 (MIT);
  pure-fluid properties from the published reference EOS below.
  Reference EOS: Aleksandrov-TE-2011
  NOTE: formation properties (dHf, s_298) and group decompositions
  are NOT provided by CoolProp -> omitted here (a gap, not fabricated).
\\*---------------------------------------------------------------------------*/

name        nUndecane;

//  Review state, MACHINE-READABLE (AP2, 2026-08-05).  This used to
//  live only in the banner above, which the parser discards -- so the
//  engine could not announce it and a run said nothing.
reviewStatus   interim;
reviewReason   importedFromCoolProp720_notCheckedAgainstPrimaries;
formula     C11H24;
CAS         1120-21-4;

MW          156.3083;        // kg/kmol  [CoolProp]
Tc          638.8000;        // K        [CoolProp EOS]
Pc          19.90452;        // bar      [CoolProp EOS]
omega       0.53904;        // [-]      [CoolProp EOS]
Tb          468.9337;        // K  normal boiling [CoolProp]
HvapTb      41429.4;        // J/mol  at Tb     [CoolProp]
Vliq        2.1226e-04;        // m3/mol @298K     [CoolProp]

vaporPressure
{
    model         Antoine;
    // log10(Psat [bar]) = A - B / (T[K] + C)   -- fitted to CoolProp EOS
    coefficients  (4.22411   1658   -75.9875);
    Trange        (287.46  626.02);
}

idealGasHeatCapacity
{
    model         polynomial;
    // Cp [J/(mol.K)] = a0 + a1 T + a2 T^2 + a3 T^3   -- fitted to CoolProp cp0
    coefficients  (4.21104  1.02709  -0.00061247  1.92157e-07);
    Trange        (200  1000);
}

liquidHeatCapacity
{
    model         polynomial;
    // Cp_liq [J/(mol.K)]   -- fitted to CoolProp saturated-liquid cp
    coefficients  (286.333  -0.251214  0.00190987  -1.33859e-06);
    Trange        (319  469);
}

triplePoint
{
    T   247.5410;
    P   0.4461;
}

standardThermochemistry
{
    dHf_298   -270370;      // J/mol ideal-gas -- provenance: see the structured dHf_298 block below
    dGf_298   41740;      // J/mol  ideal-gas [Joback]
    s_298     584.478;      // J/(mol*K) third-law [DERIVED: (dHf-dGf)/T + CODATA element S]
}

groups { unifac ( { group CH3; count 2; } { group CH2; count 9; } ); joback ( { group CH3; count 2; } { group CH2; count 9; } ); }

provenance
{
    dHf_298
    {
        origin           estimated;
        method           "Joback";
        methodVersion    "joback-poling5e-table2-2";
        input            joback;
        inputFingerprint "CH2:9,CH3:2";
        uncertainty      { status unquantified; reason "bulk-import band ~9 kJ/mol, primary basis not verified"; }
    }

    constants      "CoolProp 7.2.0 -- Aleksandrov-TE-2011";
    vaporPressure  "Antoine fitted to CoolProp EOS saturation, AAD 0.71%";
    idealGasCp     "polynomial fitted to CoolProp cp0, maxerr 4.70%";
    liquidCp       "polynomial fitted to CoolProp sat-liquid cp, maxerr 0.02%";
    triplePoint    "CoolProp reference EOS triple-point T,P";
    preserved      "from prior proposal (NOT CoolProp): standardThermochemistry, groups";
}

cosmo
{
    VT2005
    {
        model       COSMOSAC;
        variant     "2002";
        source      "VT-2005 sigma-profile database (Mullins et al., Ind. Eng. Chem. Res. 45 (2006) 4389; DFT-COSMO), file VT2005-0054-PROF.txt bundled in usnistgov/COSMOSAC; CAS 1120-21-4";
        licence     externalRestricted;   // VT-2005: redistribution NOT confirmed -- values NOT shipped
        installed   false;                 // install your own copy: bin/choupo-import-cosmo (-> data/local/cosmo/VT2005/)
    }
}
`,Gl=`/*--------------------------------*- Choupo -*-----------------------*\\
  Mineral: natron (Na2CO3:10H2O) -- unified substance file.
  One canonical record per chemical identity; the solid-phase dissolution
  equilibrium (Ksp) lives here as a typed solidPhase (roadmap Phase D).
  Migrated from chemistry/mineralSolubility/ with values preserved verbatim.
\\*---------------------------------------------------------------------------*/
name natron;
formula "Na2CO3:10H2O";

solidPhases
{
    natron
    {
        dissolutionReaction { masters ( { ion HCO3; nu 1; } { ion H; nu -1; } { ion Na; nu 2; } ); nuWater 10; }
        equilibrium { logK25 9.504; dH -14899.2; source "USGS PHREEQC pitzer.dat/phreeqc.dat (public domain); reaction re-expressed to Choupo master basis from Natron"; }
    }
}
`,Ll=`/*--------------------------------*- Choupo -*-----------------------*\\
  Component: neon  (Ne1, CAS 7440-01-9)
  PROPOSAL TIER -- UNVERIFIED.  Imported from CoolProp 7.2.0 (MIT);
  pure-fluid properties from the published reference EOS below.
  Reference EOS: Thol-JPCRD-2019-Neon
  NOTE: formation properties (dHf, s_298) and group decompositions
  are NOT provided by CoolProp -> omitted here (a gap, not fabricated).
\\*---------------------------------------------------------------------------*/

name        neon;

//  Review state, MACHINE-READABLE (AP2, 2026-08-05).  This used to
//  live only in the banner above, which the parser discards -- so the
//  engine could not announce it and a run said nothing.
reviewStatus   interim;
reviewReason   importedFromCoolProp720_notCheckedAgainstPrimaries;
formula     Ne1;
CAS         7440-01-9;

MW          20.1790;        // kg/kmol  [CoolProp]
Tc          44.4000;        // K        [CoolProp EOS]
Pc          26.61631;        // bar      [CoolProp EOS]
omega       -0.03549;        // [-]      [CoolProp EOS]
Tb          27.1000;        // K  normal boiling [CoolProp]
HvapTb      1731.1;        // J/mol  at Tb     [CoolProp]

vaporPressure
{
    model         Antoine;
    // log10(Psat [bar]) = A - B / (T[K] + C)   -- fitted to CoolProp EOS
    coefficients  (3.82512   112.681   2.39451);
    Trange        (25.06  43.51);
}

idealGasHeatCapacity
{
    model         polynomial;
    // Cp [J/(mol.K)] = a0 + a1 T + a2 T^2 + a3 T^3   -- fitted to CoolProp cp0
    coefficients  (20.7861  -6.42844e-17  1.65821e-19  -1.0409e-22);
    Trange        (200  1000);
}

liquidHeatCapacity
{
    model         polynomial;
    // Cp_liq [J/(mol.K)]   -- fitted to CoolProp saturated-liquid cp
    coefficients  (3.84893  4.09926  -0.181721  0.00284984);
    Trange        (30  27);
}

triplePoint
{
    T   24.5600;
    P   43417.2325;
}

standardThermochemistry
{
    dHf_298   -0.0;        // J/mol  ideal-gas [origin=measured method=NASA-TM4513]
    s_298     146.33;        // J/(mol.K) third-law absolute [NASA-TM4513]
}

provenance
{
    constants      "CoolProp 7.2.0 -- Thol-JPCRD-2019-Neon";
    vaporPressure  "Antoine fitted to CoolProp EOS saturation, AAD 0.39%";
    idealGasCp     "polynomial fitted to CoolProp cp0, maxerr 0.00%";
    liquidCp       "polynomial fitted to CoolProp sat-liquid cp, maxerr 0.00%";
    triplePoint    "CoolProp reference EOS triple-point T,P";
    standardThermochemistry "NASA TM-4513 (McBride-Gordon-Reno 1993), H0/S0(298.15) from NASA-7 poly";
}
`,jl=`/*--------------------------------*- Choupo -*-----------------------*\\
  Component: neopentane  (C5H12, CAS 463-82-1)
  PROPOSAL TIER -- UNVERIFIED.  Imported from CoolProp 7.2.0 (MIT);
  pure-fluid properties from the published reference EOS below.
  Reference EOS: Lemmon-JCED-2006
  NOTE: formation properties (dHf, s_298) and group decompositions
  are NOT provided by CoolProp -> omitted here (a gap, not fabricated).
\\*---------------------------------------------------------------------------*/

name        neopentane;

//  Review state, MACHINE-READABLE (AP2, 2026-08-05).  This used to
//  live only in the banner above, which the parser discards -- so the
//  engine could not announce it and a run said nothing.
reviewStatus   interim;
reviewReason   importedFromCoolProp720_notCheckedAgainstPrimaries;
formula     C5H12;
CAS         463-82-1;

MW          72.1488;        // kg/kmol  [CoolProp]
Tc          433.7396;        // K        [CoolProp EOS]
Pc          31.96297;        // bar      [CoolProp EOS]
omega       0.19610;        // [-]      [CoolProp EOS]
Tb          282.6550;        // K  normal boiling [CoolProp]
HvapTb      22776.5;        // J/mol  at Tb     [CoolProp]
Vliq        1.2346e-04;        // m3/mol @298K     [CoolProp]

vaporPressure
{
    model         Antoine;
    // log10(Psat [bar]) = A - B / (T[K] + C)   -- fitted to CoolProp EOS
    coefficients  (4.06146   1055.82   -22.4271);
    Trange        (257.10  425.06);
}

idealGasHeatCapacity
{
    model         polynomial;
    // Cp [J/(mol.K)] = a0 + a1 T + a2 T^2 + a3 T^3   -- fitted to CoolProp cp0
    coefficients  (-6.3604  0.492194  -0.000234339  4.6163e-08);
    Trange        (255  1000);
}

liquidHeatCapacity
{
    model         polynomial;
    // Cp_liq [J/(mol.K)]   -- fitted to CoolProp saturated-liquid cp
    coefficients  (53.4291  0.500409  -0.000981391  1.93265e-06);
    Trange        (262  283);
}

triplePoint
{
    T   256.6000;
    P   35400.9473;
}

standardThermochemistry
{
    dHf_298   -168050;      // J/mol ideal-gas, MEASURED -- see the structured dHf_298 block below
    dGf_298   -17070;       // J/mol  [DERIVED: dHf - 298.15*(s_298 - Sum S_elements), CODATA element S]
    s_298     306.390;      // J/(mol*K) third-law absolute (matches the process05 case overlay)
}

groups
{
    joback ( { group CH3; count 4; } { group C; count 1; } );
    unifac ( { group CH3; count 4; } { group C; count 1; } );
}
provenance
{
    dHf_298
    {
        origin           measured;
        method           "combustion calorimetry";
        citation         "Prosen & Rossini, J. Res. Natl. Bur. Stand. 34 (1945) 263 (heats of formation of the paraffins); s_298 third-law, TRC/Scott 1974";
        note             "PROMOTED 2026-08-02 from the Joback estimate (-155,280; ~13 kJ/mol off) under Vitor's ruling: a good measured value prevails over a group estimate (docs/design/curation-backlog-estimated-records.md P2).  Values mirror the human-reviewed process05 case overlay.  FOR REVIEW.";
    }

    constants      "CoolProp 7.2.0 -- Lemmon-JCED-2006";
    vaporPressure  "Antoine fitted to CoolProp EOS saturation, AAD 0.37%";
    idealGasCp     "polynomial fitted to CoolProp cp0, maxerr 0.44%";
    liquidCp       "polynomial fitted to CoolProp sat-liquid cp, maxerr 0.00%";
    triplePoint    "CoolProp reference EOS triple-point T,P";
    preserved      "from prior proposal (NOT CoolProp): standardThermochemistry, groups";
}
cosmo
{
    VT2005
    {
        model       COSMOSAC;
        variant     "2002";
        source      "VT-2005 sigma-profile database (Mullins et al., Ind. Eng. Chem. Res. 45 (2006) 4389; DFT-COSMO), file VT2005-0008-PROF.txt bundled in usnistgov/COSMOSAC; CAS 463-82-1";
        licence     externalRestricted;   // VT-2005: redistribution NOT confirmed -- values NOT shipped
        installed   false;                 // install your own copy: bin/choupo-import-cosmo (-> data/local/cosmo/VT2005/)
    }
}
`,Bl=`/*--------------------------------*- Choupo -*-----------------------*\\
  Mineral: nesquehonite (MgCO3:3H2O) -- unified substance file.
  One canonical record per chemical identity; the solid-phase dissolution
  equilibrium (Ksp) lives here as a typed solidPhase (roadmap Phase D).
  Migrated from chemistry/mineralSolubility/ with values preserved verbatim.
\\*---------------------------------------------------------------------------*/
name nesquehonite;
formula "MgCO3:3H2O";

solidPhases
{
    nesquehonite
    {
        dissolutionReaction { masters ( { ion HCO3; nu 1; } { ion H; nu -1; } { ion Mg; nu 1; } ); nuWater 3; }
        equilibrium { logK25 5.162; dH -14899.2; source "USGS PHREEQC pitzer.dat/phreeqc.dat (public domain); reaction re-expressed to Choupo master basis from Nesquehonite"; }
        thermochemistry
        {
            Hf298 -1.97726e+06;   // J/mol   (formation enthalpy of the solid)
            S298  195.644;   // J/(mol.K)
            Cp298 239.329;   // J/(mol.K) at 298.15 K (Maier-Kelley a+bT+c/T^2)
            source "Helgeson, Delany, Nesbitt & Bird 1978, Am. J. Sci. 278-A -- via CHNOSZ OBIGT (open compilation)";
        }
    }
}
`,Wl=`/*--------------------------------*- Choupo -*-----------------------*\\
  Component: novec649  (C6F12O1, CAS 756-13-8)
  PROPOSAL TIER -- UNVERIFIED.  Imported from CoolProp 7.2.0 (MIT);
  pure-fluid properties from the published reference EOS below.
  Reference EOS: McLinden-JCED-2015-Novec649
  NOTE: formation properties (dHf, s_298) and group decompositions
  are NOT provided by CoolProp -> omitted here (a gap, not fabricated).
\\*---------------------------------------------------------------------------*/

name        novec649;

//  Review state, MACHINE-READABLE (AP2, 2026-08-05).  This used to
//  live only in the banner above, which the parser discards -- so the
//  engine could not announce it and a run said nothing.
reviewStatus   interim;
reviewReason   importedFromCoolProp720_notCheckedAgainstPrimaries;
formula     C6F12O1;
CAS         756-13-8;

MW          316.0438;        // kg/kmol  [CoolProp]
Tc          441.8100;        // K        [CoolProp EOS]
Pc          18.69027;        // bar      [CoolProp EOS]
omega       0.47102;        // [-]      [CoolProp EOS]
Tb          322.2016;        // K  normal boiling [CoolProp]
HvapTb      27795.3;        // J/mol  at Tb     [CoolProp]
Vliq        1.9725e-04;        // m3/mol @298K     [CoolProp]

vaporPressure
{
    model         Antoine;
    // log10(Psat [bar]) = A - B / (T[K] + C)   -- fitted to CoolProp EOS
    coefficients  (4.07064   1089.82   -54.2016);
    Trange        (198.81  432.97);
}

idealGasHeatCapacity
{
    model         polynomial;
    // Cp [J/(mol.K)] = a0 + a1 T + a2 T^2 + a3 T^3   -- fitted to CoolProp cp0
    coefficients  (223.375  0.0501874  0.000525795  -3.6455e-07);
    Trange        (200  1000);
}

liquidHeatCapacity
{
    model         polynomial;
    // Cp_liq [J/(mol.K)]   -- fitted to CoolProp saturated-liquid cp
    coefficients  (555.313  -1.79707  0.00440247  -2.35774e-06);
    Trange        (221  322);
}

triplePoint
{
    T   165.0000;
    P   0.2315;
}

standardThermochemistry
{
    dHf_298   -2.67682e+06;      // J/mol ideal-gas -- provenance: see the structured dHf_298 block below
    dGf_298   -2.4528e+06;      // J/mol  ideal-gas [Joback]
    s_298     602.448;      // J/(mol*K) third-law [DERIVED: (dHf-dGf)/T + CODATA element S]
}

groups { joback ( { group C; count 5; } { group F; count 12; } { group ketone; count 1; } ); }

provenance
{
    dHf_298
    {
        origin           estimated;
        method           "Joback";
        methodVersion    "joback-poling5e-table2-2";
        input            joback;
        inputFingerprint "C:5,F:12,ketone:1";
        uncertainty      { status unquantified; reason "bulk-import band ~9 kJ/mol, primary basis not verified"; }
    }

    constants      "CoolProp 7.2.0 -- McLinden-JCED-2015-Novec649";
    vaporPressure  "Antoine fitted to CoolProp EOS saturation, AAD 0.56%";
    idealGasCp     "polynomial fitted to CoolProp cp0, maxerr 2.32%";
    liquidCp       "polynomial fitted to CoolProp sat-liquid cp, maxerr 0.01%";
    triplePoint    "CoolProp reference EOS triple-point T,P";
    preserved      "from prior proposal (NOT CoolProp): standardThermochemistry, groups";
}
`,Ul=`/*--------------------------------*- Choupo -*-----------------------*\\
  Component: oXylene  (C8H10, CAS 95-47-6)
  PROPOSAL TIER -- UNVERIFIED.  Imported from CoolProp 7.2.0 (MIT);
  pure-fluid properties from the published reference EOS below.
  Reference EOS: Zhou-JPCRD-2012
  NOTE: formation properties (dHf, s_298) and group decompositions
  are NOT provided by CoolProp -> omitted here (a gap, not fabricated).
\\*---------------------------------------------------------------------------*/

name        oXylene;

//  Review state, MACHINE-READABLE (AP2, 2026-08-05).  This used to
//  live only in the banner above, which the parser discards -- so the
//  engine could not announce it and a run said nothing.
reviewStatus   interim;
reviewReason   importedFromCoolProp720_notCheckedAgainstPrimaries;
formula     C8H10;
CAS         95-47-6;

MW          106.1650;        // kg/kmol  [CoolProp]
Tc          630.2590;        // K        [CoolProp EOS]
Pc          37.37460;        // bar      [CoolProp EOS]
omega       0.31200;        // [-]      [CoolProp EOS]
Tb          417.5210;        // K  normal boiling [CoolProp]
HvapTb      36383.9;        // J/mol  at Tb     [CoolProp]
Vliq        1.2120e-04;        // m3/mol @298K     [CoolProp]

vaporPressure
{
    model         Antoine;
    // log10(Psat [bar]) = A - B / (T[K] + C)   -- fitted to CoolProp EOS
    coefficients  (4.22028   1538.93   -52.5474);
    Trange        (283.62  617.65);
}

idealGasHeatCapacity
{
    model         polynomial;
    // Cp [J/(mol.K)] = a0 + a1 T + a2 T^2 + a3 T^3   -- fitted to CoolProp cp0
    coefficients  (-3.37066  0.51896  -0.000193422  -1.30232e-08);
    Trange        (200  1000);
}

liquidHeatCapacity
{
    model         polynomial;
    // Cp_liq [J/(mol.K)]   -- fitted to CoolProp saturated-liquid cp
    coefficients  (159.089  -0.213632  0.00130891  -9.22123e-07);
    Trange        (315  418);
}

triplePoint
{
    T   247.9850;
    P   22.8058;
}

standardThermochemistry
{
    dHf_298   16610;      // J/mol ideal-gas -- provenance: see the structured dHf_298 block below
    dGf_298   119260;      // J/mol  ideal-gas [Joback]
    s_298     355.03;      // J/(mol*K) third-law [DERIVED: (dHf-dGf)/T + CODATA element S]
}

groups
{
    joback ( { group CH3; count 2; } { group arCH; count 4; } { group arC; count 2; } );
    unifac ( { group ACH; count 4; } { group ACCH3; count 2; } );
}
provenance
{
    dHf_298
    {
        origin           estimated;
        method           "Joback";
        methodVersion    "joback-poling5e-table2-2";
        input            joback;
        inputFingerprint "CH3:2,arC:2,arCH:4";
        uncertainty      { status unquantified; reason "bulk-import band ~9 kJ/mol, primary basis not verified"; }
    }

    constants      "CoolProp 7.2.0 -- Zhou-JPCRD-2012";
    vaporPressure  "Antoine fitted to CoolProp EOS saturation, AAD 0.63%";
    idealGasCp     "polynomial fitted to CoolProp cp0, maxerr 4.07%";
    liquidCp       "polynomial fitted to CoolProp sat-liquid cp, maxerr 0.00%";
    triplePoint    "CoolProp reference EOS triple-point T,P";
    preserved      "from prior proposal (NOT CoolProp): standardThermochemistry, groups";
}
cosmo
{
    VT2005
    {
        model       COSMOSAC;
        variant     "2002";
        source      "VT-2005 sigma-profile database (Mullins et al., Ind. Eng. Chem. Res. 45 (2006) 4389; DFT-COSMO), file VT2005-0245-PROF.txt bundled in usnistgov/COSMOSAC; CAS 95-47-6";
        licence     externalRestricted;   // VT-2005: redistribution NOT confirmed -- values NOT shipped
        installed   false;                 // install your own copy: bin/choupo-import-cosmo (-> data/local/cosmo/VT2005/)
    }
}
`,zl=`/*--------------------------------*- Choupo -*-----------------------*\\
  Component: pXylene  (C8H10, CAS 106-42-3)
  PROPOSAL TIER -- UNVERIFIED.  Imported from CoolProp 7.2.0 (MIT);
  pure-fluid properties from the published reference EOS below.
  Reference EOS: Zhou-JPCRD-2012
  NOTE: formation properties (dHf, s_298) and group decompositions
  are NOT provided by CoolProp -> omitted here (a gap, not fabricated).
\\*---------------------------------------------------------------------------*/

name        pXylene;

//  Review state, MACHINE-READABLE (AP2, 2026-08-05).  This used to
//  live only in the banner above, which the parser discards -- so the
//  engine could not announce it and a run said nothing.
reviewStatus   interim;
reviewReason   importedFromCoolProp720_notCheckedAgainstPrimaries;
formula     C8H10;
CAS         106-42-3;

MW          106.1650;        // kg/kmol  [CoolProp]
Tc          616.1680;        // K        [CoolProp EOS]
Pc          35.31521;        // bar      [CoolProp EOS]
omega       0.32400;        // [-]      [CoolProp EOS]
Tb          411.4704;        // K  normal boiling [CoolProp]
HvapTb      35709.5;        // J/mol  at Tb     [CoolProp]
Vliq        1.2393e-04;        // m3/mol @298K     [CoolProp]

vaporPressure
{
    model         Antoine;
    // log10(Psat [bar]) = A - B / (T[K] + C)   -- fitted to CoolProp EOS
    coefficients  (4.21832   1520.25   -50.7471);
    Trange        (286.90  603.84);
}

idealGasHeatCapacity
{
    model         polynomial;
    // Cp [J/(mol.K)] = a0 + a1 T + a2 T^2 + a3 T^3   -- fitted to CoolProp cp0
    coefficients  (-18.0317  0.559799  -0.000245673  1.4527e-08);
    Trange        (200  1000);
}

liquidHeatCapacity
{
    model         polynomial;
    // Cp_liq [J/(mol.K)]   -- fitted to CoolProp saturated-liquid cp
    coefficients  (93.4139  0.254247  0.000122303  8.04919e-08);
    Trange        (308  411);
}

triplePoint
{
    T   286.4000;
    P   580.0850;
}

standardThermochemistry
{
    dHf_298   16610;      // J/mol ideal-gas -- provenance: see the structured dHf_298 block below
    dGf_298   119260;      // J/mol  ideal-gas [Joback]
    s_298     355.03;      // J/(mol*K) third-law [DERIVED: (dHf-dGf)/T + CODATA element S]
}

groups
{
    joback ( { group CH3; count 2; } { group arCH; count 4; } { group arC; count 2; } );
    unifac ( { group ACH; count 4; } { group ACCH3; count 2; } );
}
provenance
{
    dHf_298
    {
        origin           estimated;
        method           "Joback";
        methodVersion    "joback-poling5e-table2-2";
        input            joback;
        inputFingerprint "CH3:2,arC:2,arCH:4";
        uncertainty      { status unquantified; reason "bulk-import band ~9 kJ/mol, primary basis not verified"; }
    }

    constants      "CoolProp 7.2.0 -- Zhou-JPCRD-2012";
    vaporPressure  "Antoine fitted to CoolProp EOS saturation, AAD 0.70%";
    idealGasCp     "polynomial fitted to CoolProp cp0, maxerr 2.61%";
    liquidCp       "polynomial fitted to CoolProp sat-liquid cp, maxerr 0.00%";
    triplePoint    "CoolProp reference EOS triple-point T,P";
    preserved      "from prior proposal (NOT CoolProp): standardThermochemistry, groups";
}
cosmo
{
    VT2005
    {
        model       COSMOSAC;
        variant     "2002";
        source      "VT-2005 sigma-profile database (Mullins et al., Ind. Eng. Chem. Res. 45 (2006) 4389; DFT-COSMO), file VT2005-0247-PROF.txt bundled in usnistgov/COSMOSAC; CAS 106-42-3";
        licence     externalRestricted;   // VT-2005: redistribution NOT confirmed -- values NOT shipped
        installed   false;                 // install your own copy: bin/choupo-import-cosmo (-> data/local/cosmo/VT2005/)
    }
}
`,$l=`/*--------------------------------*- Choupo -*-----------------------*\\
  Mineral: pentahydrite (MgSO4:5H2O) -- unified substance file.
  One canonical record per chemical identity; the solid-phase dissolution
  equilibrium (Ksp) lives here as a typed solidPhase (roadmap Phase D).
  Migrated from chemistry/mineralSolubility/ with values preserved verbatim.
\\*---------------------------------------------------------------------------*/
name pentahydrite;
formula "MgSO4:5H2O";

solidPhases
{
    pentahydrite
    {
        dissolutionReaction { masters ( { ion Mg; nu 1; } { ion SO4; nu 1; } ); nuWater 5; }
        equilibrium { logK25 -1.285; dH 0; source "USGS PHREEQC pitzer.dat/phreeqc.dat (public domain); reaction re-expressed to Choupo master basis from Pentahydrite"; }
    }
}
`,Yl=`/*--------------------------------*- Choupo -*-----------------------*\\
  Mineral: pirssonite (Na2Ca(CO3)2:2H2O) -- unified substance file.
  One canonical record per chemical identity; the solid-phase dissolution
  equilibrium (Ksp) lives here as a typed solidPhase (roadmap Phase D).
  Migrated from chemistry/mineralSolubility/ with values preserved verbatim.
\\*---------------------------------------------------------------------------*/
name pirssonite;
formula "Na2Ca(CO3)2:2H2O";

solidPhases
{
    pirssonite
    {
        dissolutionReaction { masters ( { ion Na; nu 2; } { ion Ca; nu 1; } { ion HCO3; nu 2; } { ion H; nu -2; } ); nuWater 2; }
        equilibrium { logK25 11.424; dH -29798.4; source "USGS PHREEQC pitzer.dat/phreeqc.dat (public domain); reaction re-expressed to Choupo master basis from Pirssonite"; }
    }
}
`,Ql=`/*--------------------------------*- Choupo -*--------------------------------*\\
  Component: Polyethylene (HDPE)

  A commodity polymer as a NONVOLATILE pseudo-component (Pareto over the Polymer
  Handbook): one repeat-unit molar mass + the handful of properties conceptual
  design actually uses, NOT a molecular-weight distribution and NOT segment-based
  PC-SAFT (the commercial polymer-simulator 95%, deliberately skipped).

  CURATION: representative grade values from group-contribution tables; many are
  GRADE-dependent -- high-density grade; LDPE drops Tm to ~383 K and crystallinity to 0.35-0.55; amorphous density ~853 kg/m3. Re-source the primary for a design number.
\\*-----------------------------------------------------------------------------*/

name        polyethylene;
formula     "C2H4 (-[CH2-CH2]-)";
MW          28.05;            // g/mol of the REPEAT UNIT (not the chain)


role        nonvolatile;             // a solid polymer: never in the vapour (K = 0)

polymer        // polymer-specific reference properties (glass-box; not VLE data)
{
    Tg            153;          // K, glass-transition temperature
    Tm            410;          // K, crystalline melting point
    Cp_solid      1900;          // J/(kg K) at 298 K, solid
    k_thermal     0.48;          // W/(m K)
    crystallinity 0.60-0.80;       // typical mass fraction (grade-dependent)
    provenance
    {
        Tg            { origin literature; method "Brandrup, Immergut & Grulke, Polymer Handbook, 4th ed. (Wiley, 1999)"; }
        Cp_solid      { origin literature; method "Van Krevelen & Te Nijenhuis, Properties of Polymers, 4th ed. (Elsevier, 2009)"; }
        k_thermal     { origin literature; method "Van Krevelen & Te Nijenhuis, Properties of Polymers, 4th ed. (Elsevier, 2009)"; }
        crystallinity { origin literature; method "Brandrup, Immergut & Grulke, Polymer Handbook, 4th ed. (Wiley, 1999)"; }
    }
}

// ---- solid the engine's solid slot (density feeds sizing / hold-up) ----
rho_p       950;           // kg/m3, bulk density (see grade note)
provenance
{
    rho_p { origin literature; method "Van Krevelen & Te Nijenhuis, Properties of Polymers, 4th ed. (Elsevier, 2009) (amorphous) + handbook bulk value for the named grade"; }
}


// Solid polymer: no gas/liquid transport correlations apply (empty by design).

`,Zl=`/*--------------------------------*- Choupo -*-----------------------*\\
  Mineral: polyhalite (K2MgCa2(SO4)4:2H2O) -- unified substance file.
  One canonical record per chemical identity; the solid-phase dissolution
  equilibrium (Ksp) lives here as a typed solidPhase (roadmap Phase D).
  Migrated from chemistry/mineralSolubility/ with values preserved verbatim.
\\*---------------------------------------------------------------------------*/
name polyhalite;
formula "K2MgCa2(SO4)4:2H2O";

solidPhases
{
    polyhalite
    {
        dissolutionReaction { masters ( { ion K; nu 2; } { ion Mg; nu 1; } { ion Ca; nu 2; } { ion SO4; nu 4; } ); nuWater 2; }
        equilibrium { logK25 -13.744; dH 0; source "USGS PHREEQC pitzer.dat/phreeqc.dat (public domain); reaction re-expressed to Choupo master basis from Polyhalite"; }
    }
}
`,Xl=`/*--------------------------------*- Choupo -*--------------------------------*\\
  Component: Polypropylene (isotactic)

  A commodity polymer as a NONVOLATILE pseudo-component (Pareto over the Polymer
  Handbook): one repeat-unit molar mass + the handful of properties conceptual
  design actually uses, NOT a molecular-weight distribution and NOT segment-based
  PC-SAFT (the commercial polymer-simulator 95%, deliberately skipped).

  CURATION: representative grade values from group-contribution tables; many are
  GRADE-dependent -- isotactic; Tg spans -20..0 C with tacticity; amorphous density ~852 kg/m3. Re-source the primary for a design number.
\\*-----------------------------------------------------------------------------*/

name        polypropylene;
formula     "C3H6 (-[CH2-CH(CH3)]-)";
MW          42.08;            // g/mol of the REPEAT UNIT (not the chain)


role        nonvolatile;             // a solid polymer: never in the vapour (K = 0)

polymer        // polymer-specific reference properties (glass-box; not VLE data)
{
    Tg            263;          // K, glass-transition temperature
    Tm            440;          // K, crystalline melting point
    Cp_solid      1800;          // J/(kg K) at 298 K, solid
    k_thermal     0.2;          // W/(m K)
    crystallinity 0.50-0.65;       // typical mass fraction (grade-dependent)
    provenance
    {
        Tg            { origin literature; method "Brandrup, Immergut & Grulke, Polymer Handbook, 4th ed. (Wiley, 1999)"; }
        Cp_solid      { origin literature; method "Van Krevelen & Te Nijenhuis, Properties of Polymers, 4th ed. (Elsevier, 2009)"; }
        k_thermal     { origin literature; method "Van Krevelen & Te Nijenhuis, Properties of Polymers, 4th ed. (Elsevier, 2009)"; }
        crystallinity { origin literature; method "Brandrup, Immergut & Grulke, Polymer Handbook, 4th ed. (Wiley, 1999)"; }
    }
}

// ---- solid the engine's solid slot (density feeds sizing / hold-up) ----
rho_p       905;           // kg/m3, bulk density (see grade note)
provenance
{
    rho_p { origin literature; method "Van Krevelen & Te Nijenhuis, Properties of Polymers, 4th ed. (Elsevier, 2009) (amorphous) + handbook bulk value for the named grade"; }
}


// Solid polymer: no gas/liquid transport correlations apply (empty by design).

`,nd=`/*--------------------------------*- Choupo -*--------------------------------*\\
  Component: Polystyrene (atactic)

  A commodity polymer as a NONVOLATILE pseudo-component (Pareto over the Polymer
  Handbook): one repeat-unit molar mass + the handful of properties conceptual
  design actually uses, NOT a molecular-weight distribution and NOT segment-based
  PC-SAFT (the commercial polymer-simulator 95%, deliberately skipped).

  CURATION: representative grade values from group-contribution tables; many are
  GRADE-dependent -- atactic = fully amorphous (no Tm); Tg is Mw-dependent (Fox-Flory). Isotactic PS would melt ~513 K but is not commodity. Re-source the primary for a design number.
\\*-----------------------------------------------------------------------------*/

name        polystyrene;
formula     "C8H8 (-[CH2-CH(C6H5)]-)";
MW          104.15;            // g/mol of the REPEAT UNIT (not the chain)


role        nonvolatile;             // a solid polymer: never in the vapour (K = 0)

polymer        // polymer-specific reference properties (glass-box; not VLE data)
{
    Tg            373;          // K, glass-transition temperature
    // Tm         (amorphous polymer -- no crystalline melting point)
    Cp_solid      1220;          // J/(kg K) at 298 K, solid
    k_thermal     0.15;          // W/(m K)
    crystallinity 0.00;       // typical mass fraction (grade-dependent)
    provenance
    {
        Tg            { origin literature; method "Brandrup, Immergut & Grulke, Polymer Handbook, 4th ed. (Wiley, 1999)"; }
        Cp_solid      { origin literature; method "Van Krevelen & Te Nijenhuis, Properties of Polymers, 4th ed. (Elsevier, 2009)"; }
        k_thermal     { origin literature; method "Van Krevelen & Te Nijenhuis, Properties of Polymers, 4th ed. (Elsevier, 2009)"; }
        crystallinity { origin literature; method "Brandrup, Immergut & Grulke, Polymer Handbook, 4th ed. (Wiley, 1999)"; }
    }
}

// ---- solid the engine's solid slot (density feeds sizing / hold-up) ----
rho_p       1050;           // kg/m3, bulk density (see grade note)
provenance
{
    rho_p { origin literature; method "Van Krevelen & Te Nijenhuis, Properties of Polymers, 4th ed. (Elsevier, 2009) (amorphous) + handbook bulk value for the named grade"; }
}


// Solid polymer: no gas/liquid transport correlations apply (empty by design).

`,ed=`/*--------------------------------*- Choupo -*-----------------------*\\
  Component: Potassium bitartrate / potassium hydrogen tartrate
             (KHC4H4O6, "cream of tartar", KHT; CAS 868-14-4)

  A SPARINGLY soluble 1-1 salt (K+ + bitartrate HC4H4O6-).  Its hallmark:
  solubility is LOW (~0.006 kg/kg water at 25 C) and rises STEEPLY with
  temperature (~10x over 0-80 C) and falls with ethanol -- which is exactly
  why KHT crystallises out of wine on cooling / fortification.  COOLING is
  therefore its natural recovery lever.

  Saturation is carried as a measured SOLUBILITY CURVE c_sat(T), not as an
  ion-activity product: the bitartrate anion has no published Pitzer/eNRTL
  interaction parameters, and the curve is the honest, data-anchored route
  (the curve already embeds the dissociation).  c_sat(T) [kg KHT / kg water],
  polynomial in T[degC]; illustrative wine-chemistry order of magnitude.
  Sources: the c_sat(T) coefficients are an illustrative wine-chemistry
           order of magnitude -- primary re-citation pending (IST review:
           a measured KHT solubility-vs-T study should replace them).
           rho_p 1980 kg/m^3 = KHT crystal density (public); liquid Cp is
           a Dulong-Petit-order closure proxy (see block comment).  K+
           ion tier: Wagman et al., NBS Tables (1982).
\\*---------------------------------------------------------------------------*/

name           potassiumBitartrate;
formula        KHC4H4O6;
CAS            868-14-4;

MW             188.177;        // g/mol
role        nonvolatile;
dissociation   2;              // K+ + HC4H4O6-

// FORMATION DATUM -- NOT a component-level standardThermochemistry block by design.
// KHT is a sparingly-soluble electrolyte (K+ + bitartrate HC4H4O6-).  Its
// cation's aqueous thermodynamics live in the ion tier, species/aqueous/
// (K+, z = +1), referenced BY NAME.  The bitartrate anion HC4H4O6- has NO
// published Pitzer/eNRTL parameters and is INTENTIONALLY absent from the ion
// tier (a deliberate gap, not an oversight) -- saturation is therefore carried
// as the measured SLE solubility CURVE below, which already embeds the
// dissociation.  See docs/ai/data-doctrine.md sec.2 (arity-2 lives in a tier;
// where no tier datum exists the honest route is the measured curve).

solubility
{
    // SOLVENT = water, DECLARED (sucrose-water / KHT-water SLE; never "implied").
    //   This block is strictly arity-2 (solute + water); it is a tolerated
    //   pre-tier legacy living in the component (no-forced-mass-migration).
    //   New KHT-water solution thermo lands in data/standards/solution/.
    // c_sat(T) = a0 + a1 t + a2 t^2,  t in degC, kg KHT / kg water.
    // ~0.0034 at 5 C, ~0.0063 at 25 C, ~0.0147 at 50 C (rises ~10x over 0-80 C).
    coefficients ( 0.00321429  1.60714e-05  4.26786e-06 );
    dHcryst      0.0;     // crystallisation heat neglected (sensible cooling dominates)
}

// PRIMARY: KHT crystal density ~1.98 g/cm^3 (public); k_v = 0.5236 (rounded grains).
solid
{
    rho_p   1980.0;     // crystalline KHT density [kg/m^3]
    k_v     0.5235987756;
}

// Liquid heat capacity -- a CLOSURE proxy (energy-balance units: mixer, column).
// ~300 J/(mol.K), Dulong-Petit order for the 16-atom KHC4H4O6 unit (partially excited).  In solution the salt is a minor, nonvolatile component; water/ethanol
// dominate Cp, so the exact value is immaterial -- it only lets the balance close.
liquidHeatCapacity
{
    model         polynomial;
    coefficients  (300.0);      // J/(mol.K), constant
    Trange        (270  400);
}
`,od=`/*--------------------------------*- Choupo -*-----------------------*\\
  Component: Propane  (C3H8, CAS 74-98-6)
  Sources:   vaporPressure  -- Rips 1963 (primary measured set)
             constants  -- cross-checked vs CoolProp 7.2.0 reference EOS;
                           Cp -- individual literature value, primary
                           re-citation pending (IST review)
             standardThermochemistry  -- NASA TM-4513 (McBride-Gordon-Reno 1993),
                                ideal-gas, 298 K
\\*---------------------------------------------------------------------------*/

name        propane;
formula     C3H8;
CAS         74-98-6;

MW          44.096;        // kg/kmol
Tc          369.83;        // K
Pc          42.48;         // bar
omega       0.1520;        // [-]
Tb          231.02;        // K     normal boiling point
HvapTb      19040;         // J/mol latent heat at Tb
Vliq        8.42e-5;       // m³/mol saturated-liquid molar volume (84.2 cm³/mol)

standardThermochemistry
{
    dHf_298   -104700.0;      // J/mol  -- ideal-gas reference
    s_298     270.30;         // J/(mol·K)
}
vaporPressure
{
    model         Antoine;
    // log10(Psat [bar]) = A - B / (T[K] + C)   -- Psat(Tb) ~ 1.04 bar (3% at the
    // lower range edge; the Rips set covers the practical 231-321 K window)
    coefficients  (3.98292   819.296   -24.417);
    Trange        (230.6  320.7);
}

idealGasHeatCapacity
{
    model         polynomial;
    // Cp [J/(mol·K)] = a0 + a1*T + a2*T^2 + a3*T^3   -- Cp(298) = 73.8
    coefficients  (-4.224   0.3063   -1.586e-4   3.215e-8);
    Trange        (200  1500);
}

liquidHeatCapacity
{
    model         polynomial;
    // approximate constant ~100 J/(mol·K); a real liquid only below ~231 K (1 atm)
    // or under pressure (refrigerant duty)
    coefficients  (100.0);
    Trange        (170  300);
}

provenance
{
    vaporPressure  "Rips 1963 (primary measured set)";
    constants      "cross-checked vs CoolProp 7.2.0 reference EOS";
    standardThermochemistry "NASA TM-4513 (McBride-Gordon-Reno 1993), ideal-gas, 298 K";
}

groups
{
    unifac ( { group CH3; count 2; } { group CH2; count 1; } );
    joback ( { group CH3; count 2; } { group CH2; count 1; } );
}

cosmo
{
    VT2005
    {
        model       COSMOSAC;
        variant     "2002";
        source      "VT-2005 sigma-profile database (Mullins et al., Ind. Eng. Chem. Res. 45 (2006) 4389; DFT-COSMO), file VT2005-0003-PROF.txt bundled in usnistgov/COSMOSAC; CAS 74-98-6";
        licence     externalRestricted;   // VT-2005: redistribution NOT confirmed -- values NOT shipped
        installed   false;                 // install your own copy: bin/choupo-import-cosmo (-> data/local/cosmo/VT2005/)
    }
}

// PC-SAFT non-associating segment parameters (Gross & Sadowski, IECR 40
// (2001) 1244, Table 1 -- the pure n-alkane fit to vapour pressure + liquid
// density).  m segments, sigma [Angstrom], epsilon/k [K].
pcsaft
{
    m        2.0020;
    sigma    3.6184;
    epsilonK 208.11;
    source   "Gross & Sadowski, Ind. Eng. Chem. Res. 40 (2001) 1244, Table 1";
}
`,ad=`/*--------------------------------*- Choupo -*-----------------------*\\
  Component: Propene / Propylene  (C3H6, CAS 115-07-1)

  Second-largest petrochemical building block (polypropylene,
  propylene oxide, cumene).  Co-product of steam cracking and
  catalytic cracking.
  Sources: constants (Tc/Pc/omega/MW/Tb) cross-checked vs CoolProp 7.2.0
  reference EOS; standardThermochemistry cross-checked vs NASA TM-4513
  (McBride-Gordon-Reno 1993); idealGasHeatCapacity -- individual
  literature value, primary re-citation pending (IST review).
\\*---------------------------------------------------------------------------*/

name        propylene;
formula     C3H6;
CAS         115-07-1;

MW          42.081;            // kg/kmol
Tc          365.57;             // K
Pc          46.65;              // bar
omega       0.142;              // [-]
Tb          225.46;             // K
HvapTb      18420;              // J/mol
Vliq        6.81e-5;            // m^3/mol

standardThermochemistry
{
    dHf_298    20410.0;         // J/mol  -- ideal-gas reference
    s_298      266.94;          // J/(mol·K)
}

vaporPressure
{
    model         Antoine;
    coefficients  (3.94560   829.51   -22.658);
    Trange        (225  366);
}

idealGasHeatCapacity
{
    model         polynomial;
    coefficients  (3.710   0.2345   -1.160e-4   2.205e-8);
    Trange        (250  1500);
}

groups
{
    unifac ( { group CH3; count 1; } { group CH2=CH; count 1; } );
    joback ( { group CH3; count 1; } { group eCH; count 1; } { group eCH2; count 1; } );
}

// Friendly-name aliases -- resolved to this file via the generated ALIASES index.
aliases ( propene C3H6 );

cosmo
{
    VT2005
    {
        model       COSMOSAC;
        variant     "2002";
        source      "VT-2005 sigma-profile database (Mullins et al., Ind. Eng. Chem. Res. 45 (2006) 4389; DFT-COSMO), file VT2005-0125-PROF.txt bundled in usnistgov/COSMOSAC; CAS 115-07-1";
        licence     externalRestricted;   // VT-2005: redistribution NOT confirmed -- values NOT shipped
        installed   false;                 // install your own copy: bin/choupo-import-cosmo (-> data/local/cosmo/VT2005/)
    }
}
`,td=`/*--------------------------------*- Choupo -*-----------------------*\\
  Component: Propylene Glycol 30 vol % brine  (DOWFROST / GlycoChill class)
  Pseudo-component for use as a low-temperature secondary-loop refrigerant
  (chilled glycol / cooling brine for HVAC + sub-ambient process duty).

  Sources:
    Mokon "Heat Transfer Fluid - Propylene Glycol" Technical & Engineering
      Data (Buffalo, NY).  Read directly from the datasheet PDF: 30 % by
      volume concentration table, 5 data points -1 to 110 C.

  Use:
    Pseudo-fluid for the \`refrigerationPG\` utility (closed-loop chilled brine
    in the -10 to +50 C range; freeze point -12.8 C protects sub-zero coils).
    Choose over \`chilledWater\` whenever the process T < 7 C (below the safe
    freezing margin of plain chilled water).  Do NOT put in a reactor.

  Limits:
    Cp fit good to ~1 %, 272-383 K.
    A real glycol brine has inhibitor + corrosion package; properties shift
    by 1-3 % across vendors.  Vendor datasheet wins for engineering design.
\\*---------------------------------------------------------------------------*/

name        propyleneGlycol30;
formula     "C3H8O2 (30 vol %) + H2O (70 vol %)";
CAS         "n/a";              // pseudo-mixture

// SPECIAL STATUS: this is NOT a pure compound -- it is a fixed-composition
// 30 vol % propylene-glycol / 70 vol % water BRINE, lumped into one
// pseudo-component for the closed secondary-refrigerant loop.  It carries NO
// standardThermochemistry block ON PURPOSE: a fixed mixture has no single heat of
// formation and never reacts (utility heat-carrier only -- "Do NOT put in a
// reactor", above).  The deliberate absence is correct, not a curation gap;
// a real glycol study would model PG and water as two SEPARATE components with
// a Hᴱ mixing term, never one lumped brine.  (Pseudo-component policy:
// docs/ai/components.md "Pseudo-components".)

// Pseudo-MW for a 30 vol % (≈ 32 wt %) PG-in-water brine:
// 0.32 * 76.09 + 0.68 * 18.02 = 36.6 g/mol
MW          36.6;
Tb          375.4;               // K  (102.2 C, vendor datasheet)
Vliq        3.56e-5;             // m^3/mol at 298 K (MW / ρ(298))

role        nonvolatile;         // brine, treated as a single-phase liquid carrier

liquidHeatCapacity
{
    // Linear fit of Mokon Cp data at 5 temperatures, 30 vol % PG:
    //   Cp [J/kg·K] = 3000 + 2.84 * T[K]
    // Converted to molar (× MW/1000 = 0.0366 kg/mol):
    //   Cp [J/mol·K] = 109.8 + 0.1040*T
    model         polynomial;
    coefficients  (109.8   0.1040);
    Trange        (260  385);
}
`,id=`/*--------------------------------*- Choupo -*-----------------------*\\
  Component: propyne  (C3H4, CAS 74-99-7)
  PROPOSAL TIER -- UNVERIFIED.  Imported from CoolProp 7.2.0 (MIT);
  pure-fluid properties from the published reference EOS below.
  Reference EOS: Polt-CT-1992
  NOTE: formation properties (dHf, s_298) and group decompositions
  are NOT provided by CoolProp -> omitted here (a gap, not fabricated).
\\*---------------------------------------------------------------------------*/

name        propyne;

//  Review state, MACHINE-READABLE (AP2, 2026-08-05).  This used to
//  live only in the banner above, which the parser discards -- so the
//  engine could not announce it and a run said nothing.
reviewStatus   interim;
reviewReason   importedFromCoolProp720_notCheckedAgainstPrimaries;
formula     C3H4;
CAS         74-99-7;

MW          40.0600;        // kg/kmol  [CoolProp]
Tc          402.7011;        // K        [CoolProp EOS]
Pc          56.57503;        // bar      [CoolProp EOS]
omega       0.20400;        // [-]      [CoolProp EOS]
Vliq        6.5524e-05;        // m3/mol @298K     [CoolProp]

vaporPressure
{
    model         Antoine;
    // log10(Psat [bar]) = A - B / (T[K] + C)   -- fitted to CoolProp EOS
    coefficients  (4.72629   1252.52   18.009);
    Trange        (273.50  394.65);
}

idealGasHeatCapacity
{
    model         polynomial;
    // Cp [J/(mol.K)] = a0 + a1 T + a2 T^2 + a3 T^3   -- fitted to CoolProp cp0
    coefficients  (15.0303  0.184343  -0.00011393  3.04827e-08);
    Trange        (283  1000);
}

liquidHeatCapacity
{
    model         polynomial;
    // Cp_liq [J/(mol.K)]   -- fitted to CoolProp saturated-liquid cp
    coefficients  (830.523  -6.5142  0.0175188  -1.33227e-05);
    Trange        (278  342);
}

triplePoint
{
    T   273.0000;
    P   263566.9060;
}

standardThermochemistry
{
    dHf_298   186650;      // J/mol ideal-gas -- provenance: see the structured dHf_298 block below
    dGf_298   197450;      // J/mol  ideal-gas [Joback]
    s_298     242.357;      // J/(mol*K) third-law [DERIVED: (dHf-dGf)/T + CODATA element S]
}

groups { joback ( { group CH3; count 1; } { group yneCH; count 1; } { group yneC; count 1; } ); }

provenance
{
    dHf_298
    {
        origin           estimated;
        method           "Joback";
        methodVersion    "joback-poling5e-table2-2";
        input            joback;
        inputFingerprint "CH3:1,yneC:1,yneCH:1";
        uncertainty      { status unquantified; reason "bulk-import band ~9 kJ/mol, primary basis not verified"; }
    }

    constants      "CoolProp 7.2.0 -- Polt-CT-1992";
    vaporPressure  "Antoine fitted to CoolProp EOS saturation, AAD 0.11%";
    idealGasCp     "polynomial fitted to CoolProp cp0, maxerr 0.05%";
    liquidCp       "polynomial fitted to CoolProp sat-liquid cp, maxerr 0.14%";
    triplePoint    "CoolProp reference EOS triple-point T,P";
    preserved      "from prior proposal (NOT CoolProp): standardThermochemistry, groups";
}

cosmo
{
    VT2005
    {
        model       COSMOSAC;
        variant     "2002";
        source      "VT-2005 sigma-profile database (Mullins et al., Ind. Eng. Chem. Res. 45 (2006) 4389; DFT-COSMO), file VT2005-0225-PROF.txt bundled in usnistgov/COSMOSAC; CAS 74-99-7";
        licence     externalRestricted;   // VT-2005: redistribution NOT confirmed -- values NOT shipped
        installed   false;                 // install your own copy: bin/choupo-import-cosmo (-> data/local/cosmo/VT2005/)
    }
}
`,rd=`/*--------------------------------*- Choupo -*-----------------------*\\
  Mineral: pyrochroite (Mn(OH)2) -- unified substance file.
  One canonical record per chemical identity; the solid-phase dissolution
  equilibrium (Ksp) lives here as a typed solidPhase (roadmap Phase D).
  Migrated from chemistry/mineralSolubility/ with values preserved verbatim.
\\*---------------------------------------------------------------------------*/
name pyrochroite;
formula "Mn(OH)2";

solidPhases
{
    pyrochroite
    {
        dissolutionReaction { masters ( { ion Mn; nu 1; } { ion H; nu -2; } ); nuWater 2; }
        equilibrium { logK25 15.2; dH 0; source "USGS PHREEQC pitzer.dat/phreeqc.dat (public domain); reaction re-expressed to Choupo master basis from Pyrochroite"; }
        thermochemistry
        {
            Hf298 -2.90955e+06;   // J/mol   (formation enthalpy of the solid)
            S298  415.053;   // J/(mol.K)
            Cp298 477.782;   // J/(mol.K) at 298.15 K (Maier-Kelley a+bT+c/T^2)
            source "Wagman et al. 1982, NBS Tables -- via CHNOSZ OBIGT (open compilation)";
        }
    }
}
`,sd=`/*--------------------------------*- Choupo -*-----------------------*\\
  Mineral: rhodochrosite (MnCO3) -- unified substance file.
  One canonical record per chemical identity; the solid-phase dissolution
  equilibrium (Ksp) lives here as a typed solidPhase (roadmap Phase D).
  Migrated from chemistry/mineralSolubility/ with values preserved verbatim.
\\*---------------------------------------------------------------------------*/
name rhodochrosite;
formula "MnCO3";

solidPhases
{
    rhodochrosite
    {
        dissolutionReaction { masters ( { ion Mn; nu 1; } { ion HCO3; nu 1; } { ion H; nu -1; } ); }
        equilibrium { logK25 -0.801; dH -20882.3; source "USGS PHREEQC phreeqc.dat (public domain)"; }
        thermochemistry
        {
            Hf298 -889188;   // J/mol   (formation enthalpy of the solid)
            S298  99.9976;   // J/(mol.K)
            Cp298 81.5328;   // J/(mol.K) at 298.15 K (Maier-Kelley a+bT+c/T^2)
            source "Helgeson, Delany, Nesbitt & Bird 1978, Am. J. Sci. 278-A -- via CHNOSZ OBIGT (open compilation)";
        }
    }
}
`,ld=`/*--------------------------------*- Choupo -*-----------------------*\\
  Mineral: schoenite (K2Mg(SO4)2:6H2O) -- unified substance file.
  One canonical record per chemical identity; the solid-phase dissolution
  equilibrium (Ksp) lives here as a typed solidPhase (roadmap Phase D).
  Migrated from chemistry/mineralSolubility/ with values preserved verbatim.
\\*---------------------------------------------------------------------------*/
name schoenite;
formula "K2Mg(SO4)2:6H2O";

solidPhases
{
    schoenite
    {
        dissolutionReaction { masters ( { ion K; nu 2; } { ion Mg; nu 1; } { ion SO4; nu 2; } ); nuWater 6; }
        equilibrium { logK25 -4.328; dH 0; source "USGS PHREEQC pitzer.dat/phreeqc.dat (public domain); reaction re-expressed to Choupo master basis from Schoenite"; }
    }
}
`,dd=`/*--------------------------------*- Choupo -*-----------------------*\\
  Mineral: sepiolite (Mg2Si3O7.5OH:3H2O) -- unified substance file.
  One canonical record per chemical identity; the solid-phase dissolution
  equilibrium (Ksp) lives here as a typed solidPhase (roadmap Phase D).
  Migrated from chemistry/mineralSolubility/ with values preserved verbatim.
\\*---------------------------------------------------------------------------*/
name sepiolite;
formula "Mg2Si3O7.5OH:3H2O";

solidPhases
{
    sepiolite
    {
        dissolutionReaction { masters ( { ion Mg; nu 2; } { ion H4SiO4; nu 3; } { ion H; nu -4; } ); nuWater -0.5; }
        equilibrium { logK25 15.76; dH -44768.8; source "USGS PHREEQC pitzer.dat/phreeqc.dat (public domain); reaction re-expressed to Choupo master basis from Sepiolite"; }
    }
}
`,cd=`/*--------------------------------*- Choupo -*-----------------------*\\
  Mineral: sepiolite_d (Mg2Si3O7.5OH:3H2O) -- unified substance file.
  One canonical record per chemical identity; the solid-phase dissolution
  equilibrium (Ksp) lives here as a typed solidPhase (roadmap Phase D).
  Migrated from chemistry/mineralSolubility/ with values preserved verbatim.
\\*---------------------------------------------------------------------------*/
name sepiolite_d;
formula "Mg2Si3O7.5OH:3H2O";

solidPhases
{
    sepiolite_d
    {
        dissolutionReaction { masters ( { ion Mg; nu 2; } { ion H4SiO4; nu 3; } { ion H; nu -4; } ); nuWater -0.5; }
        equilibrium { logK25 18.66; dH 0; source "USGS PHREEQC pitzer.dat/phreeqc.dat (public domain); reaction re-expressed to Choupo master basis from Sepiolite(d)"; }
    }
}
`,pd=`/*--------------------------------*- Choupo -*-----------------------*\\
  Mineral: siderite (FeCO3) -- unified substance file.
  One canonical record per chemical identity; the solid-phase dissolution
  equilibrium (Ksp) lives here as a typed solidPhase (roadmap Phase D).
  Migrated from chemistry/mineralSolubility/ with values preserved verbatim.
\\*---------------------------------------------------------------------------*/
name siderite;
formula "FeCO3";

solidPhases
{
    siderite
    {
        dissolutionReaction { masters ( { ion Fe; nu 1; } { ion HCO3; nu 1; } { ion H; nu -1; } ); }
        equilibrium { logK25 -0.561; dH -25275.5; source "USGS PHREEQC phreeqc.dat (public domain)"; }
        thermochemistry
        {
            Hf298 -749660;   // J/mol   (formation enthalpy of the solid)
            S298  105.018;   // J/(mol.K)
            Cp298 82.0918;   // J/(mol.K) at 298.15 K (Maier-Kelley a+bT+c/T^2)
            source "Helgeson, Delany, Nesbitt & Bird 1978, Am. J. Sci. 278-A -- via CHNOSZ OBIGT (open compilation)";
        }
    }
}
`,md=`/*--------------------------------*- Choupo -*-----------------------*\\
  Component: Silica  (SiO2) --- a generic mineral particulate / dust.

  A NON-VOLATILE solid: it never enters the vapour (K = 0) and carries
  no Antoine / ideal-gas Cp blocks.  The \`solid { rho_p; }\` block gives
  the particle density used by gas-solid separation (the cyclone d50);
  \`k_v\` defaults to a sphere.  Silica IS a real solid (enriched
  2026-06-07): \`standardThermochemistry\` (dHf_298 / s_298, solid phase) puts it
  on the elements/formation datum and \`solidHeatCapacity\` carries its
  sensible heat, so it can react / appear in energy balances --- it is
  NOT a mere pseudo-solid that is only physically separated.

  rho_p for amorphous silica / sand ~ 2650 kg/m^3.
  Sources: dHf_298/s_298 from CODATA Key Values (Cox, Wagman & Medvedev
           1989); solidHeatCapacity fitted to Robie & Hemingway, USGS
           Bull. 2131 (1995, public domain); rho_p ~2650 kg/m^3 (amorphous
           silica / sand) -- primary re-citation pending (IST review).
\\*---------------------------------------------------------------------------*/

name        silica;
formula     SiO2;
CAS         7631-86-9;

MW          60.08;            // kg/kmol

role        nonvolatile;      // never goes to the vapour (K = 0)

solid
{
    rho_p   2650.0;           // particle density [kg/m^3]
}

// --- enriched 2026-06-07: silica IS a real solid with formation + Cp (Vitor's point) ---
standardThermochemistry
{
    dHf_298   -910700;        // J/mol  alpha-quartz [CODATA Key Values, Cox-Wagman-Medvedev 1989]
    s_298     41.46;          // J/(mol*K) [CODATA Key Values]
    referenceState     pureSolid;
}
// Solid heat capacity of alpha-quartz, restored from an OPEN primary source
// (the earlier no-grant compilation fit was EXCLUDED by the licence policy and was
// removed).  Cp(298.15) ~ 44.6 J/(mol*K), rising to ~64.6 at 600 K.
// PRIMARY: Robie & Hemingway, "Thermodynamic Properties of Minerals and
// Related Substances ...", U.S. Geological Survey Bulletin 2131 (1995) --
// a U.S. Government work, PUBLIC DOMAIN (no copyright).  Quadratic least-
// squares fit to their tabulated Cp at 298.15/400/500/600 K (AAD < 0.5 %).
solidHeatCapacity
{
    model         polynomial;          // Cp = a0 + a1*T + a2*T^2  [J/(mol*K)]
    coefficients  ( 8.24309   0.149929   -9.34656e-05 );
    Trange        ( 298  600 );        // [Robie-Hemingway 1995, USGS Bull. 2131]
}

// Solid phase(s) of this component (roadmap Phase D fold-in):
solidPhases
{
    SiO2a
    {
        dissolutionReaction { masters ( { ion H4SiO4; nu 1; } ); nuWater -2; }
        equilibrium { logK25 -2.71; dH 13974.6; analytic ( -0.26 0 -731 ); source "USGS PHREEQC phreeqc.dat (public domain)"; }
    }
    chalcedony
    {
        dissolutionReaction { masters ( { ion H4SiO4; nu 1; } ); nuWater -2; }
        equilibrium { logK25 -3.55; dH 19748.5; analytic ( -0.09 0 -1032 ); source "USGS PHREEQC phreeqc.dat (public domain)"; }
    }
    quartz
    {
        dissolutionReaction { masters ( { ion H4SiO4; nu 1; } ); nuWater -2; }
        equilibrium { logK25 -3.98; dH 25062.2; analytic ( 0.41 0 -1309 ); source "USGS PHREEQC phreeqc.dat (public domain)"; }
    }
}
`,ud=`/*--------------------------------*- Choupo -*-----------------------*\\
  Mineral: strontianite (SrCO3) -- unified substance file.
  One canonical record per chemical identity; the solid-phase dissolution
  equilibrium (Ksp) lives here as a typed solidPhase (roadmap Phase D).
  Migrated from chemistry/mineralSolubility/ with values preserved verbatim.
\\*---------------------------------------------------------------------------*/
name strontianite;
formula "SrCO3";

solidPhases
{
    strontianite
    {
        dissolutionReaction { masters ( { ion Sr; nu 1; } { ion HCO3; nu 1; } { ion H; nu -1; } ); }
        equilibrium { logK25 1.058; dH -16572.8; analytic ( 262.9176 0.03252849 -12391.384 -95.51199 563713.9 ); source "USGS PHREEQC phreeqc.dat (public domain)"; }
        thermochemistry
        {
            Hf298 -1.23261e+06;   // J/mol   (formation enthalpy of the solid)
            S298  97.0688;   // J/(mol.K)
            Cp298 82.3813;   // J/(mol.K) at 298.15 K (Maier-Kelley a+bT+c/T^2)
            source "Helgeson, Delany, Nesbitt & Bird 1978, Am. J. Sci. 278-A -- via CHNOSZ OBIGT (open compilation)";
        }
    }
}
`,hd=`/*--------------------------------*- Choupo -*-----------------------*\\
  Component: Sucrose (C12H22O11, CAS 57-50-1)

  Non-volatile crystalline disaccharide; the canonical solute for
  sugar-industry evaporator and crystalliser exercises.  In the
  Choupo catalogue we ship sucrose with the minimum metadata
  needed for a non-volatile solute in a single-effect or
  multi-effect evaporator: MW, role, dissociation = 1, and a
  liquid Cp tuned so that the mixture Cp(x) reproduces the
  Honig-style sugar-industry correlation

      Cp(x)  ≈  4.19  -  2.35 · x    [kJ/(kg·K)]

  used in standard MCFT exercises (e.g. Coulson & Richardson 6th
  ed. Example 14.4; the same coefficients appear in the course
  notes Exemplo 10.4 for the triple-effect cocurrent evaporator).

  With Cp_liq(sucrose) = 630 J/(mol·K)  and  Cp_liq(water) =
  75.5 J/(mol·K), the mass-basis mixture Cp computed by
  thermo.Hliquid recovers 4.07 kJ/(kg·K) at x = 0.05, matching the
  4.19 - 2.35*0.05 = 4.07 of the correlation to three sig. figs.

  No Antoine block (\`role nonvolatile;\`); the solute never enters
  the vapour phase in flash or evaporator routines.
\\*---------------------------------------------------------------------------*/

name           sucrose;
formula        C12H22O11;
CAS            57-50-1;

role           nonvolatile;
MW             342.297;       // kg/kmol  (= g/mol)
dissociation   1;              // non-electrolyte
Vliq           2.115e-4;      // apparent molar volume in aqueous solution [m^3/mol]

solid
{
    rho_p   1590.0;     // crystalline sucrose density [kg/m^3]
    k_v     0.5235987756;
}

solubility
{
    // Solid-liquid equilibrium: c_sat(T) in kg sucrose / kg water,
    // polynomial in T[degC].  ~2.0 kg/kg at 20C, ~3.8 at 80C (literature order).
    //
    // SOLVENT = water, DECLARED (NOT "implied").  This block is strictly
    // arity-2 (sucrose + water): it is sucrose-water SLE sitting in the
    // component, a TOLERATED pre-tier legacy (no-forced-mass-migration credo),
    // NOT a counterexample to the arity rule.  Going forward, new sucrose-water
    // SOLUTION thermo (e.g. dHsoln) lands in data/standards/solution/
    // sucrose-water.dat, referenced by name -- see docs/ai/data-doctrine.md
    // sec.2.5.  The second species is NAMED here; nothing is implied.
    coefficients ( 1.79  0.0074  0.00022 );
    dHcryst      0.0;     // small for sucrose; neglected here
}


// standardThermochemistry kept for Gibbs-reactor consumers that might
// want to model sugar decomposition (Maillard, caramelisation).
// Individual literature values for crystalline sucrose -- primary
// re-citation pending (IST review).
standardThermochemistry
{
    dHf_298    -2226100.0;    // J/mol  (-2226.1 kJ/mol, crystalline)
    s_298      392.4;          // J/(mol·K)
    referenceState      pureSolid;
}

liquidHeatCapacity
{
    model         polynomial;
    // Constant Cp = 630 J/(mol·K)  ~= 1.84 kJ/(kg·K) for pure sucrose;
    // mixing with water's 75.5 J/(mol·K) reproduces Cp(x) = 4.19 -
    // 2.35 x kJ/(kg·K) to better than 1 % over x = [0, 0.4].
    coefficients  (630.0);
    Trange        (270  400);
}

// REAL crystalline-sucrose solid heat capacity (used by the solid-phase
// enthalpy leg; the dissolved-solute path keeps Cp_liquid above).  This does
// NOT change the liquid/solution Cp the evaporator and crystalliser read, so
// those balances are unaffected -- it is the honest Cp of the SOLID crystal.
// PRIMARY: Putnam & Kilday, "Heat Capacities ... of crystalline sucrose",
// J. Research NBS 91(4) 219-222 (1986) -- a U.S. Government (NBS) work,
// PUBLIC DOMAIN.  Cp(298.15 K, crystalline) = 425.5 J/(mol*K).  Held constant
// over the narrow stable-crystal window (sucrose decomposes near 459 K, so no
// fusion enthalpy is declared -- it never melts cleanly, hence no Hfus block).
solidHeatCapacity
{
    model         polynomial;          // Cp = 425.5 J/(mol*K)  (crystalline)
    coefficients  ( 425.5 );
    Trange        ( 280  330 );        // [Putnam & Kilday 1986, J. Res. NBS 91]
}
`,Cd=`/*--------------------------------*- Choupo -*-----------------------*\\
  Mineral: syngenite (K2Ca(SO4)2:H2O) -- unified substance file.
  One canonical record per chemical identity; the solid-phase dissolution
  equilibrium (Ksp) lives here as a typed solidPhase (roadmap Phase D).
  Migrated from chemistry/mineralSolubility/ with values preserved verbatim.
\\*---------------------------------------------------------------------------*/
name syngenite;
formula "K2Ca(SO4)2:H2O";

solidPhases
{
    syngenite
    {
        dissolutionReaction { masters ( { ion K; nu 2; } { ion Ca; nu 1; } { ion SO4; nu 2; } ); nuWater 1; }
        equilibrium { logK25 -6.43; dH -32650; source "USGS PHREEQC pitzer.dat/phreeqc.dat (public domain); reaction re-expressed to Choupo master basis from Syngenite"; }
    }
}
`,fd=`/*--------------------------------*- Choupo -*-----------------------*\\
  Mineral: talc (Mg3Si4O10(OH)2) -- unified substance file.
  One canonical record per chemical identity; the solid-phase dissolution
  equilibrium (Ksp) lives here as a typed solidPhase (roadmap Phase D).
  Migrated from chemistry/mineralSolubility/ with values preserved verbatim.
\\*---------------------------------------------------------------------------*/
name talc;
formula "Mg3Si4O10(OH)2";

solidPhases
{
    talc
    {
        dissolutionReaction { masters ( { ion Mg; nu 3; } { ion H4SiO4; nu 4; } { ion H; nu -6; } ); nuWater -4; }
        equilibrium { logK25 21.399; dH -193937; source "USGS PHREEQC pitzer.dat/phreeqc.dat (public domain); reaction re-expressed to Choupo master basis from Talc"; }
    }
}
`,gd=`/*--------------------------------*- Choupo -*--------------------------------*\\
  Component: L-(+)-Tartaric acid (C4H6O6), the wine-industry organic diacid.
  CAS 87-69-4.  MW 150.087 g/mol.

  A NON-VOLATILE crystalline organic solid at ambient (mp ~171 C): never enters
  the vapour (K = 0), no Antoine block.  The product of the natural (wine) route
  to tartaric acid and a feed acid in food / pharma exercises.

  CURATION NOTE -- the formation datum was REVISED.  An older value of
  -1272.2 kJ/mol (Swietoslawski, 1928, pre-war bomb calorimetry) is ~39 kJ/mol
  too low; it is SUPERSEDED here by the modern calorimetric value of Kochergina,
  Volkov, Krutov & Krutova (2006).  The dissociated ions (HC4H4O6-, C4H4O6-2)
  live in the electrolyte catalogue (data/standards/species/aqueous/, same
  Kochergina source), so a DISSOLVED tartrate derives its enthalpy from the ions;
  this molecular crystal is the SOLID datum.
\\*---------------------------------------------------------------------------*/

name        tartaricAcid;
formula     C4H6O6;
CAS         87-69-4;
MW          150.087;            // kg/kmol  (L-(+)-tartaric acid)

role        nonvolatile;               // crystalline organic acid; never to the vapour (K = 0) --
                                //   the \`phase solid\` datum routes it on the solid line in
                                //   liquid streams too (same as glucose/sucrose), no gas leg
dissociation 1;                 // molecular (the dissociated HTart-/Tart2- ions live in ions.dat)

solid
{
    rho_p   1788.0;             // crystal density [kg/m^3] (L-(+)-tartaric acid)
}

// Solid-phase formation datum (crystalline H2Tart).  PRIMARY: Kochergina,
// Volkov, Krutov & Krutova, "The Standard Enthalpies of Formation of Citric and
// Tartaric Acids and Their Dissociation Products in Aqueous Solutions",
// Russ. J. Phys. Chem. 80 (2006) 899-903, Table 5 (combustion + solution
// calorimetry, mean of two methods).  Supersedes Swietoslawski 1928 (-1272.2).
standardThermochemistry
{
    dHf_298   -1311200;        // J/mol  crystalline [Kochergina et al. 2006, Tab.5: -1311.2 +/- 1.1 kJ/mol]
    s_298     204.3;           // J/(mol*K) third-law -- LITERATURE estimate (Domalski-Hearing class), VERIFY;
                               //   the HEAT OF REACTION uses only dHf + Cp, so s_298 enters only K_eq / Gibbs.
    referenceState     pureSolid;
}

// REAL solid heat capacity.  PRIMARY: Satoh & Sogabe, Sci. Pap. Inst. Phys.
// Chem. Res. (Tokyo) 1939 -- Cp(s) ~ 184.5 J/(mol*K) near 323 K.  Held constant
// (single-coefficient) as a near-ambient approximation; refit before high-T duty.
solidHeatCapacity
{
    model         polynomial;          // Cp = a0 + a1*T + a2*T^2  [J/(mol*K)]
    coefficients  ( 184.5  0.0  0.0 );
    Trange        ( 298  350 );        // [Satoh & Sogabe 1939; constant approximation -- FLAGGED]
}

// Liquid / dissolved Cp -- the SENSIBLE heat when the solute travels in an aqueous
// (liquid) stream (the datum stays the solid line via \`role nonvolatile;\`).  PROXY:
// the solid Cp held constant -- FLAGGED; Apelblat & Manzurola 2001 carry the
// aqueous apparent molar Cp to refit against before a Cp-sensitive duty.
liquidHeatCapacity
{
    model         polynomial;
    coefficients  ( 184.5  0.0  0.0 );
    Trange        ( 298  400 );        // [Satoh 1939 solid Cp used as a liquid/aqueous PROXY -- FLAGGED]
}

// ENERGY-BALANCE SCOPE.  Tartaric acid closes an energy balance on THREE rungs,
// all on the same elements floor:
//   (1) SOLID crystal     -- standardThermochemistry (above) + solidHeatCapacity;
//   (2) DISSOLVED NEUTRAL  -- the aqueous rung via solution/tartaricAcid-water.dat
//       (dHsoln +15.3 kJ/mol, Kochergina) => h_aq = Hf_crystal + dHsoln = -1295.9
//       kJ/mol, with NO ideal-gas/Watson vapour leg (a decomposing solid has none);
//   (3) DISSOCIATED        -- the HTart-/Tart2- ions in species/aqueous/.
// The crystallisation heat emerges as h_solid - h_aq ~ -dHsoln from one number.

groups
{
    unifac ( { group CH; count 2; } { group OH; count 2; } { group COOH; count 2; } );   // added from data/groupEstimative (UNIFAC decomposition; vocab-checked vs groups.dat)
}
`,bd=`/*--------------------------------*- Choupo -*-----------------------*\\
  Component: Toluene  (C7H8, CAS 108-88-3)
  Sources: critical constants (Tc/Pc/omega/Tb/HvapTb/Vliq), Antoine
           coefficients, Cp polynomials and the ideal-gas formation datum
           (dHf_298/s_298, JANAF convention) are individual literature
           values -- primary re-citation pending (IST review).  Viscosity:
           Andrade/Vogel fits to literature mu(T); diffusionVolume 111.5
           from the revised Fuller-Schettler-Giddings increments.
\\*---------------------------------------------------------------------------*/

name        toluene;
formula     C7H8;
CAS         108-88-3;



MW          92.141;
Tc          591.75;
Pc          41.08;
omega       0.2640;
Tb          383.78;
HvapTb      33180;
Vliq        1.069e-4;


standardThermochemistry
{
    dHf_298   50170.0;        // J/mol  -- ideal-gas reference
    s_298     320.740;         // J/(mol·K)  -- third-law absolute
}
vaporPressure
{
    model         Antoine;
    coefficients  (4.07827   1343.943   -53.773);
    Trange        (273  380);
}

idealGasHeatCapacity
{
    model         polynomial;
    coefficients  (-24.355   0.5125   -2.765e-4   4.911e-8);
    Trange        (200  1500);
}

liquidHeatCapacity
{
    model         polynomial;
    coefficients  (157.0);
    Trange        (280  380);
}

// Liquid transport (v0.62+).  associationFactor = Wilke-Chang phi (solvent).
// liquidViscosity: ln(mu/Pa.s) = A + B/T (Andrade) or A + B/(T-C) (Vogel),
// fitted to literature mu(T) over ~10-100 degC.
associationFactor  1.0;
liquidViscosity
{
    andrade { A -11.0586; B 1062.3; }
    vogel   { A -11.0586; B 1062.3; C 0.0; }
}

diffusionVolume  111.5;  // Fuller (FSG revised: 7C+8H - aromatic ring)

groups
{
    unifac ( { group ACH; count 5; } { group ACCH3; count 1; } );
    joback ( { group arCH; count 5; } { group arC; count 1; } { group CH3; count 1; } );
}

cosmo
{
    VT2005
    {
        model       COSMOSAC;
        variant     "2002";
        source      "VT-2005 sigma-profile database (Mullins et al., Ind. Eng. Chem. Res. 45 (2006) 4389; DFT-COSMO), file VT2005-0243-PROF.txt bundled in usnistgov/COSMOSAC; CAS 108-88-3";
        licence     externalRestricted;   // VT-2005: redistribution NOT confirmed -- values NOT shipped
        installed   false;                 // install your own copy: bin/choupo-import-cosmo (-> data/local/cosmo/VT2005/)
    }
}
`,yd=`/*--------------------------------*- Choupo -*-----------------------*\\
  Component: trans2Butene  (C4H8, CAS 624-64-6)
  PROPOSAL TIER -- UNVERIFIED.  Imported from CoolProp 7.2.0 (MIT);
  pure-fluid properties from the published reference EOS below.
  Reference EOS: Lemmon-FPE-2005
  NOTE: formation properties (dHf, s_298) and group decompositions
  are NOT provided by CoolProp -> omitted here (a gap, not fabricated).
\\*---------------------------------------------------------------------------*/

name        trans2Butene;

//  Review state, MACHINE-READABLE (AP2, 2026-08-05).  This used to
//  live only in the banner above, which the parser discards -- so the
//  engine could not announce it and a run said nothing.
reviewStatus   interim;
reviewReason   importedFromCoolProp720_notCheckedAgainstPrimaries;
formula     C4H8;
CAS         624-64-6;

MW          56.1063;        // kg/kmol  [CoolProp]
Tc          428.6105;        // K        [CoolProp EOS]
Pc          40.19095;        // bar      [CoolProp EOS]
omega       0.21008;        // [-]      [CoolProp EOS]
Tb          274.0299;        // K  normal boiling [CoolProp]
HvapTb      22733.8;        // J/mol  at Tb     [CoolProp]
Vliq        9.3737e-05;        // m3/mol @298K     [CoolProp]

vaporPressure
{
    model         Antoine;
    // log10(Psat [bar]) = A - B / (T[K] + C)   -- fitted to CoolProp EOS
    coefficients  (4.10375   1008.38   -28.076);
    Trange        (192.87  420.04);
}

idealGasHeatCapacity
{
    model         polynomial;
    // Cp [J/(mol.K)] = a0 + a1 T + a2 T^2 + a3 T^3   -- fitted to CoolProp cp0
    coefficients  (23.7403  0.224988  -1.44296e-05  -3.93722e-08);
    Trange        (200  1000);
}

liquidHeatCapacity
{
    model         polynomial;
    // Cp_liq [J/(mol.K)]   -- fitted to CoolProp saturated-liquid cp
    coefficients  (100.104  0.0769478  -0.000401261  1.63432e-06);
    Trange        (214  274);
}

triplePoint
{
    T   167.6000;
    P   74.8167;
}

standardThermochemistry
{
    dHf_298   -8670;      // J/mol ideal-gas -- provenance: see the structured dHf_298 block below
    dGf_298   63020;      // J/mol  ideal-gas [Joback]
    s_298     305.231;      // J/(mol*K) third-law [DERIVED: (dHf-dGf)/T + CODATA element S]
}

groups { unifac ( { group CH3; count 2; } { group CH=CH; count 1; } ); joback ( { group CH3; count 2; } { group eCH; count 2; } ); }

provenance
{
    dHf_298
    {
        origin           estimated;
        method           "Joback";
        methodVersion    "joback-poling5e-table2-2";
        input            joback;
        inputFingerprint "CH3:2,eCH:2";
        uncertainty      { status unquantified; reason "bulk-import band ~9 kJ/mol, primary basis not verified"; }
    }

    constants      "CoolProp 7.2.0 -- Lemmon-FPE-2005";
    vaporPressure  "Antoine fitted to CoolProp EOS saturation, AAD 0.65%";
    idealGasCp     "polynomial fitted to CoolProp cp0, maxerr 2.45%";
    liquidCp       "polynomial fitted to CoolProp sat-liquid cp, maxerr 0.00%";
    triplePoint    "CoolProp reference EOS triple-point T,P";
    preserved      "from prior proposal (NOT CoolProp): standardThermochemistry, groups";
}

cosmo
{
    VT2005
    {
        model       COSMOSAC;
        variant     "2002";
        source      "VT-2005 sigma-profile database (Mullins et al., Ind. Eng. Chem. Res. 45 (2006) 4389; DFT-COSMO), file VT2005-0128-PROF.txt bundled in usnistgov/COSMOSAC; CAS 624-64-6";
        licence     externalRestricted;   // VT-2005: redistribution NOT confirmed -- values NOT shipped
        installed   false;                 // install your own copy: bin/choupo-import-cosmo (-> data/local/cosmo/VT2005/)
    }
}
`,Td=`/*--------------------------------*- Choupo -*-----------------------*\\
  Mineral: trona (Na3H(CO3)2:2H2O) -- unified substance file.
  One canonical record per chemical identity; the solid-phase dissolution
  equilibrium (Ksp) lives here as a typed solidPhase (roadmap Phase D).
  Migrated from chemistry/mineralSolubility/ with values preserved verbatim.
\\*---------------------------------------------------------------------------*/
name trona;
formula "Na3H(CO3)2:2H2O";

solidPhases
{
    trona
    {
        dissolutionReaction { masters ( { ion Na; nu 3; } { ion H; nu -1; } { ion HCO3; nu 2; } ); nuWater 2; }
        equilibrium { logK25 9.274; dH -29798.4; source "USGS PHREEQC pitzer.dat/phreeqc.dat (public domain); reaction re-expressed to Choupo master basis from Trona"; }
    }
}
`,vd=`/*--------------------------------*- Choupo -*-----------------------*\\
  Mineral: vivianite (Fe3(PO4)2:8H2O) -- unified substance file.
  One canonical record per chemical identity; the solid-phase dissolution
  equilibrium (Ksp) lives here as a typed solidPhase (roadmap Phase D).
  Migrated from chemistry/mineralSolubility/ with values preserved verbatim.
\\*---------------------------------------------------------------------------*/
name vivianite;
formula "Fe3(PO4)2:8H2O";

solidPhases
{
    vivianite
    {
        dissolutionReaction { masters ( { ion Fe; nu 3; } { ion PO4; nu 2; } ); nuWater 8; }
        equilibrium { logK25 -36; dH 0; source "USGS PHREEQC pitzer.dat/phreeqc.dat (public domain); reaction re-expressed to Choupo master basis from Vivianite"; }
    }
}
`,Pd=`/*--------------------------------*- Choupo -*-----------------------*\\
  Component: Water  (H2O, CAS 7732-18-5)
  Warning: Antoine fit accurate for 273-373 K only.
           Above ~373 K use steam tables or a proper EoS (IAPWS).
  Sources: critical constants (Tc/Pc/omega/Tb/HvapTb/Vliq), the Antoine
           fit, the Cp polynomials and the ideal-gas formation datum
           (dHf_298/s_298, JANAF convention) are individual literature
           values -- primary re-citation pending (IST review).  K_b/K_f
           and the Andrade/Vogel viscosity fits repeat the same pending
           re-citation at their blocks; UNIQUAC r,q are the van der Waals
           values (Abrams-Prausnitz) as used by Popken 2000, Table 2.
\\*---------------------------------------------------------------------------*/

name        water;
formula     H2O;
CAS         7732-18-5;

//  The substance-level fact the SystemClassifier contract requires of every
//  component inside an electrolyte system (settled 2026-07-26; ABSENT is
//  UNKNOWN and is refused there, with the curation remedy named).  The
//  solvent takes no part in the speciation NETWORK as a solute: it IS the
//  medium.  Its autoprotolysis is a network reaction with its own record,
//  and its VLE is the Raoult leg (p_w = a_w * psat) declared by the phase's
//  property method -- not an equilibrium constant.
//  PROMOTED from the flashComplex case 2026-08-02: it was the ONE genuinely
//  case-carried fact among ten records, and its absence here is why that
//  case had to mirror water at all.
aqueousSpeciation  none;

MW          18.015;
Tc          647.14;
Pc          220.64;
omega       0.3449;
Tb          373.15;
HvapTb      40660;
Vliq        1.807e-5;
diffusionVolume  13.1;          // Fuller diffusion volume [-]


standardThermochemistry
{
    dHf_298   -241826.0;        // J/mol  -- ideal-gas reference
    s_298     188.834;         // J/(mol·K)  -- third-law absolute
}
vaporPressure
{
    model         Antoine;
    coefficients  (5.40221   1838.675   -31.737);
    Trange        (273  373);
}

idealGasHeatCapacity
{
    model         polynomial;
    coefficients  (32.243   1.924e-3   1.0555e-5   -3.596e-9);
    Trange        (200  1500);
}

liquidHeatCapacity
{
    model         polynomial;
    coefficients  (75.5);
    Trange        (273  373);
}

// Ebulioscopic / cryoscopic constants for water (v0.28+):
//   K_b = 0.512 K * kg / mol  (boiling-point elevation, ΔT = K_b · m)
//   K_f = 1.853 K * kg / mol  (freezing-point depression, ΔT = K_f · m)
// Reference: individual literature values -- primary re-citation pending (IST review).
ebulioscopic
{
    K_b   0.512;
    K_f   1.853;
}

// Liquid transport (v0.62+).  associationFactor = Wilke-Chang phi (solvent).
// liquidViscosity: ln(mu/Pa.s) = A + B/T (Andrade) or A + B/(T-C) (Vogel),
// fitted to literature mu(T) over ~10-100 degC.
associationFactor  2.6;
liquidViscosity
{
    andrade { A -13.03; B 1796.1; }
    vogel   { A -10.5366; B 541.4; C 144.0; }
}

groups
{
    unifac ( { group H2O; count 1; } );
}

uniquac
{
    r   0.9200;
    q   1.4000;     // van der Waals (Abrams-Prausnitz), as used by Popken 2000 Table 2
}

pcsaft
{
    // Associating (2B: one donor + one acceptor) -- the water set of
    // Gross & Sadowski 2002, whose Table 1 lists water with TWO
    // association sites: this parameter set was FITTED AS 2B and is
    // meaningless under any other scheme (curated first as 4C, which
    // over-associated so strongly the ethanol/water flash collapsed --
    // the scheme is part of the fit, not a free choice).  A 4C water
    // from later literature is a DIFFERENT parameter set; curate it as
    // its own trio if ever needed.  Known published trade-off of this
    // set: Psat accurate (about -0.2% at 358 K, +4% at 298 K) while the
    // ambient liquid density reads about -7.5% (922 kg/m3 vs 997).
    m           1.0656;
    sigma       3.0007;
    epsilonK    366.51;
    assocScheme 2B;
    epsAB_K     2500.7;
    kappaAB     0.034868;
    source      "Gross & Sadowski, Ind. Eng. Chem. Res. 41 (2002) 5510, Table 1 (water, 2 sites)";
}

cosmo
{
    VT2005
    {
        model       COSMOSAC;
        variant     "2002";
        source      "VT-2005 sigma-profile database (Mullins et al., Ind. Eng. Chem. Res. 45 (2006) 4389; DFT-COSMO), file VT2005-1076-PROF.txt bundled in usnistgov/COSMOSAC; CAS 7732-18-5";
        licence     externalRestricted;   // VT-2005: redistribution NOT confirmed -- values NOT shipped
        installed   false;                 // install your own copy: bin/choupo-import-cosmo (-> data/local/cosmo/VT2005/)
    }
}
`,Sd=`/*--------------------------------*- Choupo -*-----------------------*\\
  Mineral: witherite (BaCO3) -- unified substance file.
  One canonical record per chemical identity; the solid-phase dissolution
  equilibrium (Ksp) lives here as a typed solidPhase (roadmap Phase D).
  Migrated from chemistry/mineralSolubility/ with values preserved verbatim.
\\*---------------------------------------------------------------------------*/
name witherite;
formula "BaCO3";

solidPhases
{
    witherite
    {
        dissolutionReaction { masters ( { ion Ba; nu 1; } { ion HCO3; nu 1; } { ion H; nu -1; } ); }
        equilibrium { logK25 1.767; dH -11957.9; analytic ( 715.5291 0.15362649 -25163.04 -275.42041 563713.9 ); source "USGS PHREEQC phreeqc.dat (public domain)"; }
    }
}
`,Od=[],Ad=Object.assign({"../../../data/standards/components/1Butene.dat":Ut,"../../../data/standards/components/Ar.dat":zt,"../../../data/standards/components/C.dat":$t,"../../../data/standards/components/C2H.dat":Yt,"../../../data/standards/components/C2H3.dat":Qt,"../../../data/standards/components/C2H5.dat":Zt,"../../../data/standards/components/C2O.dat":Xt,"../../../data/standards/components/C3H3.dat":ni,"../../../data/standards/components/C3H5.dat":ei,"../../../data/standards/components/C3H7.dat":oi,"../../../data/standards/components/C4H2.dat":ai,"../../../data/standards/components/C4H4.dat":ti,"../../../data/standards/components/C5H5.dat":ii,"../../../data/standards/components/C6H5.dat":ri,"../../../data/standards/components/CH.dat":si,"../../../data/standards/components/CH2.dat":li,"../../../data/standards/components/CH2CO.dat":di,"../../../data/standards/components/CH2OH.dat":ci,"../../../data/standards/components/CH2_S.dat":pi,"../../../data/standards/components/CH3.dat":mi,"../../../data/standards/components/CH3CO.dat":ui,"../../../data/standards/components/CH3O.dat":hi,"../../../data/standards/components/CH3O2.dat":Ci,"../../../data/standards/components/CH4.dat":fi,"../../../data/standards/components/CN.dat":gi,"../../../data/standards/components/CO.dat":bi,"../../../data/standards/components/CO2.dat":yi,"../../../data/standards/components/CS.dat":Ti,"../../../data/standards/components/CS2.dat":vi,"../../../data/standards/components/CaCO3.dat":Pi,"../../../data/standards/components/CaCl2.dat":Si,"../../../data/standards/components/CaO.dat":Oi,"../../../data/standards/components/CaSO4.dat":Ai,"../../../data/standards/components/Cl.dat":Hi,"../../../data/standards/components/Cl2.dat":_i,"../../../data/standards/components/ClO.dat":Ei,"../../../data/standards/components/D2.dat":wi,"../../../data/standards/components/Dichloroethane.dat":xi,"../../../data/standards/components/H.dat":Ni,"../../../data/standards/components/H2.dat":Ri,"../../../data/standards/components/H2O2.dat":ki,"../../../data/standards/components/H2S.dat":Mi,"../../../data/standards/components/H2SO4.dat":Ki,"../../../data/standards/components/H3PO4.dat":qi,"../../../data/standards/components/HCCO.dat":Ii,"../../../data/standards/components/HCHO.dat":Ji,"../../../data/standards/components/HCN.dat":Vi,"../../../data/standards/components/HCO.dat":Di,"../../../data/standards/components/HCl.dat":Fi,"../../../data/standards/components/HNO.dat":Gi,"../../../data/standards/components/HNO3.dat":Li,"../../../data/standards/components/HO2.dat":ji,"../../../data/standards/components/HOCl.dat":Bi,"../../../data/standards/components/HONO.dat":Wi,"../../../data/standards/components/HSO.dat":Ui,"../../../data/standards/components/HSO3.dat":zi,"../../../data/standards/components/He.dat":$i,"../../../data/standards/components/K2SO4.dat":Yi,"../../../data/standards/components/KCl.dat":Qi,"../../../data/standards/components/KOH.dat":Zi,"../../../data/standards/components/LiCl.dat":Xi,"../../../data/standards/components/MD3M.dat":nr,"../../../data/standards/components/MD4M.dat":er,"../../../data/standards/components/MDM.dat":or,"../../../data/standards/components/MgSO4.dat":ar,"../../../data/standards/components/N.dat":tr,"../../../data/standards/components/N2.dat":ir,"../../../data/standards/components/N2H2.dat":rr,"../../../data/standards/components/N2H3.dat":sr,"../../../data/standards/components/N2H4.dat":lr,"../../../data/standards/components/N2O.dat":dr,"../../../data/standards/components/NCO.dat":cr,"../../../data/standards/components/NH.dat":pr,"../../../data/standards/components/NH2.dat":mr,"../../../data/standards/components/NH3.dat":ur,"../../../data/standards/components/NH4Cl.dat":hr,"../../../data/standards/components/NNH.dat":Cr,"../../../data/standards/components/NO.dat":fr,"../../../data/standards/components/NO2.dat":gr,"../../../data/standards/components/NO3.dat":br,"../../../data/standards/components/Na2CO3.dat":yr,"../../../data/standards/components/Na2SO4.dat":Tr,"../../../data/standards/components/NaCl.dat":vr,"../../../data/standards/components/NaHCO3.dat":Pr,"../../../data/standards/components/NaOH.dat":Sr,"../../../data/standards/components/O.dat":Or,"../../../data/standards/components/O2.dat":Ar,"../../../data/standards/components/O3.dat":Hr,"../../../data/standards/components/OH.dat":_r,"../../../data/standards/components/OrthoDeuterium.dat":Er,"../../../data/standards/components/OrthoHydrogen.dat":wr,"../../../data/standards/components/PET.dat":xr,"../../../data/standards/components/PMMA.dat":Nr,"../../../data/standards/components/PVC.dat":Rr,"../../../data/standards/components/ParaDeuterium.dat":kr,"../../../data/standards/components/ParaHydrogen.dat":Mr,"../../../data/standards/components/R11.dat":Kr,"../../../data/standards/components/R113.dat":qr,"../../../data/standards/components/R12.dat":Ir,"../../../data/standards/components/R1234yf.dat":Jr,"../../../data/standards/components/R1234zeE.dat":Vr,"../../../data/standards/components/R1234zeZ.dat":Dr,"../../../data/standards/components/R134a.dat":Fr,"../../../data/standards/components/R13I1.dat":Gr,"../../../data/standards/components/R143a.dat":Lr,"../../../data/standards/components/R21.dat":jr,"../../../data/standards/components/R218.dat":Br,"../../../data/standards/components/R22.dat":Wr,"../../../data/standards/components/R236EA.dat":Ur,"../../../data/standards/components/R245fa.dat":zr,"../../../data/standards/components/R32.dat":$r,"../../../data/standards/components/R365MFC.dat":Yr,"../../../data/standards/components/RC318.dat":Qr,"../../../data/standards/components/S.dat":Zr,"../../../data/standards/components/S2.dat":Xr,"../../../data/standards/components/SF6.dat":ns,"../../../data/standards/components/SH.dat":es,"../../../data/standards/components/SO.dat":os,"../../../data/standards/components/SO2.dat":as,"../../../data/standards/components/SO3.dat":ts,"../../../data/standards/components/Xe.dat":is,"../../../data/standards/components/acetaldehyde.dat":rs,"../../../data/standards/components/aceticAcid.dat":ss,"../../../data/standards/components/acetone.dat":ls,"../../../data/standards/components/acetylene.dat":ds,"../../../data/standards/components/akermanite.dat":cs,"../../../data/standards/components/anthophyllite.dat":ps,"../../../data/standards/components/artinite.dat":ms,"../../../data/standards/components/barite.dat":us,"../../../data/standards/components/benzene.dat":hs,"../../../data/standards/components/bischofite.dat":Cs,"../../../data/standards/components/bloedite.dat":fs,"../../../data/standards/components/burkeite.dat":gs,"../../../data/standards/components/calciumHydroxide.dat":bs,"../../../data/standards/components/calciumTartrate.dat":ys,"../../../data/standards/components/carbonylSulfide.dat":Ts,"../../../data/standards/components/carnallite.dat":vs,"../../../data/standards/components/celestite.dat":Ps,"../../../data/standards/components/chrysotile.dat":Ss,"../../../data/standards/components/cis2Butene.dat":Os,"../../../data/standards/components/compA.dat":As,"../../../data/standards/components/compB.dat":Hs,"../../../data/standards/components/compC.dat":_s,"../../../data/standards/components/cyclohexane.dat":Es,"../../../data/standards/components/cyclopentane.dat":ws,"../../../data/standards/components/cyclopropane.dat":xs,"../../../data/standards/components/diethylEther.dat":Ns,"../../../data/standards/components/dimethylCarbonate.dat":Rs,"../../../data/standards/components/dimethylEther.dat":ks,"../../../data/standards/components/diopside.dat":Ms,"../../../data/standards/components/dolomite.dat":Ks,"../../../data/standards/components/dowthermA.dat":qs,"../../../data/standards/components/enstatite.dat":Is,"../../../data/standards/components/epsomite.dat":Js,"../../../data/standards/components/ethane.dat":Vs,"../../../data/standards/components/ethanol.dat":Ds,"../../../data/standards/components/ethylAcetate.dat":Fs,"../../../data/standards/components/ethylBenzene.dat":Gs,"../../../data/standards/components/ethylene.dat":Ls,"../../../data/standards/components/ethyleneOxide.dat":js,"../../../data/standards/components/fluorine.dat":Bs,"../../../data/standards/components/fluorite.dat":Ws,"../../../data/standards/components/forsterite.dat":Us,"../../../data/standards/components/gaylussite.dat":zs,"../../../data/standards/components/glaserite.dat":$s,"../../../data/standards/components/glauberite.dat":Ys,"../../../data/standards/components/glucose.dat":Qs,"../../../data/standards/components/goergeyite.dat":Zs,"../../../data/standards/components/gypsum.dat":Xs,"../../../data/standards/components/heavyWater.dat":nl,"../../../data/standards/components/hexahydrite.dat":el,"../../../data/standards/components/hexamethyldisiloxane.dat":ol,"../../../data/standards/components/hfe143m.dat":al,"../../../data/standards/components/hitecSalt.dat":tl,"../../../data/standards/components/huntite.dat":il,"../../../data/standards/components/hydroxyapatite.dat":rl,"../../../data/standards/components/isoButane.dat":sl,"../../../data/standards/components/isoButene.dat":ll,"../../../data/standards/components/isohexane.dat":dl,"../../../data/standards/components/isopentane.dat":cl,"../../../data/standards/components/kainite.dat":pl,"../../../data/standards/components/kalicinite.dat":ml,"../../../data/standards/components/kieserite.dat":ul,"../../../data/standards/components/krypton.dat":hl,"../../../data/standards/components/labile_S.dat":Cl,"../../../data/standards/components/leonhardite.dat":fl,"../../../data/standards/components/leonite.dat":gl,"../../../data/standards/components/lithiumChlorideH2O.dat":bl,"../../../data/standards/components/mXylene.dat":yl,"../../../data/standards/components/magnesite.dat":Tl,"../../../data/standards/components/magnesiumHydroxide.dat":vl,"../../../data/standards/components/melanterite.dat":Pl,"../../../data/standards/components/methanol.dat":Sl,"../../../data/standards/components/methylAcetate.dat":Ol,"../../../data/standards/components/methylLinoleate.dat":Al,"../../../data/standards/components/methylLinolenate.dat":Hl,"../../../data/standards/components/methylOleate.dat":_l,"../../../data/standards/components/methylPalmitate.dat":El,"../../../data/standards/components/methylStearate.dat":wl,"../../../data/standards/components/mirabilite.dat":xl,"../../../data/standards/components/misenite.dat":Nl,"../../../data/standards/components/nButane.dat":Rl,"../../../data/standards/components/nButanol.dat":kl,"../../../data/standards/components/nDecane.dat":Ml,"../../../data/standards/components/nDodecane.dat":Kl,"../../../data/standards/components/nHeptane.dat":ql,"../../../data/standards/components/nHexane.dat":Il,"../../../data/standards/components/nNonane.dat":Jl,"../../../data/standards/components/nOctane.dat":Vl,"../../../data/standards/components/nPentane.dat":Dl,"../../../data/standards/components/nUndecane.dat":Fl,"../../../data/standards/components/natron.dat":Gl,"../../../data/standards/components/neon.dat":Ll,"../../../data/standards/components/neopentane.dat":jl,"../../../data/standards/components/nesquehonite.dat":Bl,"../../../data/standards/components/novec649.dat":Wl,"../../../data/standards/components/oXylene.dat":Ul,"../../../data/standards/components/pXylene.dat":zl,"../../../data/standards/components/pentahydrite.dat":$l,"../../../data/standards/components/pirssonite.dat":Yl,"../../../data/standards/components/polyethylene.dat":Ql,"../../../data/standards/components/polyhalite.dat":Zl,"../../../data/standards/components/polypropylene.dat":Xl,"../../../data/standards/components/polystyrene.dat":nd,"../../../data/standards/components/potassiumBitartrate.dat":ed,"../../../data/standards/components/propane.dat":od,"../../../data/standards/components/propylene.dat":ad,"../../../data/standards/components/propyleneGlycol30.dat":td,"../../../data/standards/components/propyne.dat":id,"../../../data/standards/components/pyrochroite.dat":rd,"../../../data/standards/components/rhodochrosite.dat":sd,"../../../data/standards/components/schoenite.dat":ld,"../../../data/standards/components/sepiolite.dat":dd,"../../../data/standards/components/sepiolite_d.dat":cd,"../../../data/standards/components/siderite.dat":pd,"../../../data/standards/components/silica.dat":md,"../../../data/standards/components/strontianite.dat":ud,"../../../data/standards/components/sucrose.dat":hd,"../../../data/standards/components/syngenite.dat":Cd,"../../../data/standards/components/talc.dat":fd,"../../../data/standards/components/tartaricAcid.dat":gd,"../../../data/standards/components/toluene.dat":bd,"../../../data/standards/components/trans2Butene.dat":yd,"../../../data/standards/components/trona.dat":Td,"../../../data/standards/components/vivianite.dat":vd,"../../../data/standards/components/water.dat":Pd,"../../../data/standards/components/witherite.dat":Sd});function xo(n,t="standard"){let o;try{o=Qe(Ze(n))}catch{return null}const i=typeof o.name=="string"?o.name:"";if(!i)return null;const r=typeof o.formula=="string"?o.formula:"",s=o.role==="nonvolatile",m=typeof o.Tc=="number"&&o.Tc>0,f=o.vaporPressure!==void 0&&o.vaporPressure!==null&&m&&!s,c=s?"nonvolatile":f?"volatile":"fragment",C=typeof o.standardThermochemistry=="object"&&o.standardThermochemistry!==null&&o.standardThermochemistry.phase==="solid",y=typeof o.dissociation=="number"?o.dissociation:1,g=o.electrolyte!==void 0&&o.electrolyte!==null||y>1&&!C,v=o.noncondensable==="true"||o.noncondensable===!0,P=o.groups,H=!!P&&P.unifac!==void 0&&P.unifac!==null,E=p=>typeof p=="number"&&p>0?p:void 0;return{name:i,formula:r,kind:c,vleAble:f,isElectrolyte:g,isPermanentGas:v,hasUnifac:H,origin:t,tc:E(o.Tc),pc:E(o.Pc),tb:E(o.Tb)}}const Xn=Object.values(Ad).map(n=>xo(n)).filter(n=>n!==null).sort((n,t)=>n.name.localeCompare(t.name)),Hd=Od.map(n=>xo(n,"proposed")).filter(n=>n!==null).sort((n,t)=>n.name.localeCompare(t.name)),_d=/(?:^|\/)constant\/components\/([^/]+)\.dat$/;function Ea(n){const t=n.match(_d);if(!t)return null;const o=t[1];return o.includes(".estimate-")?null:o}function wa(n){if(!n)return[];const t=new Set(Xn.map(i=>i.name)),o=new Map;for(const[i,r]of Object.entries(n)){const s=Ea(i);if(!s)continue;const m=xo(r,t.has(s)?"local-shadow":"local");if(!m)continue;const l={...m,name:s},f=i.split("/").length,c=o.get(s);(!c||f<c.depth)&&o.set(s,{meta:l,depth:f})}return[...o.values()].map(i=>i.meta).sort((i,r)=>i.name.localeCompare(r.name))}function Ed(n){if(!n)return{};const t=new Map;for(const[i,r]of Object.entries(n)){const s=Ea(i);if(!s)continue;const m=i.split("/").length,l=t.get(s);(!l||m<l.depth)&&t.set(s,{body:r,depth:m})}const o={};for(const[i,r]of t)o[`constant/components/${i}.dat`]=r.body;return o}function wd(n){const t=wa(n);if(t.length===0)return Xn;const o=new Map;for(const i of Xn)o.set(i.name,i);for(const i of t)o.set(i.name,i);return[...o.values()].sort((i,r)=>i.name.localeCompare(r.name))}function da(n,t=Xn){const o=n.trim().toLowerCase();return o?t.filter(i=>i.name.toLowerCase().includes(o)||i.formula.toLowerCase().includes(o)):t}function un(n,t=Xn){return t.find(o=>o.name===n)}function ca(n){if(!n.formula)return null;const t=o=>o.toLowerCase().replace(/\s/g,"");return t(n.formula)!==t(n.name)?n.formula:null}function xd(n){const t=n.trim().split(/\r?\n/),o=[];for(let i=1;i<t.length;++i){const r=t[i].split(","),s=Number(r[0]),m=Number(r[1]);Number.isFinite(s)&&Number.isFinite(m)&&o.push({T:s,P:m,curve:(r[2]??"").trim()})}return o}function Nd({csv:n,comp:t,tb:o}){const i=Se(L=>L.displayPrefs),r=i.temperature==="degC"?"°C":"K",s=i.pressure,m=L=>tn(L,i.temperature),l=L=>cn(L,i.pressure),f=xd(n);if(f.length===0)return null;const c=L=>f.filter(k=>k.curve===L),C=c("saturation"),y=c("sublimation"),g=c("fusion"),v=f.find(L=>L.curve==="critical"),P=f.find(L=>L.curve==="triple"),H=y.length>0&&g.length>0,E=(L,k,pn,u)=>({type:"scatter",mode:"lines",name:k,x:L.map(I=>m(I.T)),y:L.map(I=>l(I.P)),line:{color:pn,width:2.4},hovertemplate:`T=%{x:.1f} ${r}<br>P=%{y:.4g} ${s}<extra>${k}</extra>`}),p=[E(C,"saturation (L–V)",J.accent)];y.length&&p.push(E(y,"sublimation (S–V)","#64b5f6")),g.length&&p.push(E(g,"fusion (S–L)","#9ccc65")),v&&p.push({type:"scatter",mode:"markers",name:"critical point",x:[m(v.T)],y:[l(v.P)],marker:{color:J.warm,size:11},hovertemplate:`Tc=${m(v.T).toFixed(1)} ${r}<br>Pc=${l(v.P).toFixed(2)} ${s}<extra>critical</extra>`}),P&&p.push({type:"scatter",mode:"markers",name:"triple point",x:[m(P.T)],y:[l(P.P)],marker:{color:J.text,size:9,symbol:"square"},hovertemplate:`Tt=${m(P.T).toFixed(2)} ${r}<br>Pt=${l(P.P).toPrecision(3)} ${s}<extra>triple point</extra>`}),o&&p.push({type:"scatter",mode:"markers",name:"normal b.p. (1 atm)",x:[m(o)],y:[l(101325)],marker:{color:J.text,size:8,symbol:"diamond"},hovertemplate:`Tb=${m(o).toFixed(1)} ${r} @ 1 atm<extra>normal b.p.</extra>`});const O=f.map(L=>l(L.P)).filter(L=>L>0),x=f.map(L=>L.T),W=v?.T??Math.max(...x),q=Math.min(...O,l(101325))*.4,w=Math.max(...O)*2,G=m(Math.min(...x)*.98),Cn=m(W*1.06),an=[{xref:"paper",yref:"paper",x:.42,y:.72,text:"liquid",showarrow:!1,font:{...rn.font,color:J.text}},{xref:"paper",yref:"paper",x:.72,y:.14,text:"vapour",showarrow:!1,font:{...rn.font,color:J.text}}];return v&&an.push({xref:"paper",yref:"paper",x:.82,y:.965,text:"supercritical fluid",showarrow:!1,font:{...rn.font,color:J.text}}),H&&an.push({xref:"paper",yref:"paper",x:.08,y:.7,text:"solid",showarrow:!1,font:{...rn.font,color:J.text}}),e.jsx(Xe,{data:p,layout:{...rn,title:{text:`P–T phase diagram  ·  ${t}${H?"":"  (liquid–vapour)"}`,font:{...rn.font,size:14}},xaxis:{...rn.xaxis,title:{text:`temperature   T   [${r}]`},range:[G,Cn]},yaxis:{...rn.yaxis,title:{text:`pressure   P   [${s}]`},type:"log",range:[Math.log10(q),Math.log10(w)]},legend:{...rn.legend,x:.02,y:.98},annotations:an},config:no,style:{width:"100%",height:"100%"},useResizeHandler:!0})}const Rd={sat:J.accent,rh:J.accent2,adia:J.warm,wb:J.warm2},kd={sat:"#00838f",rh:"#0097a7",adia:"#ef6c00",wb:"#c62828"};function Md({csv:n,yMax:t=0}){const o=Se(p=>p.displayPrefs.temperature),i=Aa("dark"),r=i==="dark"?Rd:kd,s=p=>tn(p+273.15,o),m=n.trim().split(`
`);if((m[0]??"").trim()!=="T_C,Y,curve")return e.jsx("div",{style:{padding:16,color:"#888",fontSize:12},children:"Computing psychrometric chart…"});const l=new Map;for(let p=1;p<m.length;p++){const O=m[p].split(",");if(O.length<3)continue;const x=Number(O[0]),W=Number(O[1]),q=O[2];if(!Number.isFinite(x)||!Number.isFinite(W))continue;l.has(q)||l.set(q,{x:[],y:[]});const w=l.get(q);w.x.push(x),w.y.push(W)}const f=n.trim().split(`
`).length-1;if([...l.values()].reduce((p,O)=>p+O.x.length,0)===0)return e.jsx("div",{style:{padding:16,fontFamily:"monospace",fontSize:12,color:"#ffb74d",whiteSpace:"pre-wrap"},children:`Psychrometric chart — no plottable points.
csv length: ${n.length} chars, ${f} data row(s).
--- first 400 chars of what the engine returned: ---
${n.slice(0,400)}`});const C=p=>p==="saturation"?3:p.startsWith("wetbulb:")?2:p.startsWith("adiabatic:")?1:0,y=[...l.keys()].sort((p,O)=>C(p)-C(O)),g=y.map(p=>{const O=l.get(p);let x=p,W=r.rh,q="solid",w=1,G=!0;return p==="saturation"?(x="saturation (100% RH)",W=r.sat,w=3):p.startsWith("rh:")?(x=`RH ${p.slice(3)}%`,W=r.rh,w=1,G=!1):p.startsWith("adiabatic:")?(x=`adiabatic sat. ${p.slice(10)}°C`,W=r.adia,q="dash",w=1,G=!1):p.startsWith("wetbulb:")&&(x=`wet-bulb ${p.slice(8)}°C`,W=r.wb,q="dot",w=1,G=!1),{type:"scattergl",mode:"lines",name:x,x:O.x.map(s),y:O.y,legendgroup:p==="saturation"?"sat":p.startsWith("wetbulb:")?"twb":p.startsWith("adiabatic:")?"wb":"rh",showlegend:G,line:{color:W,width:w,dash:q},hovertemplate:`${x}<br>T = %{x:.1f} ${gn(o)}   Y = %{y:.4f} kg/kg<extra></extra>`}}),v=(p,O,x,W)=>({type:"scattergl",mode:"lines",name:p,x:[NaN],y:[NaN],legendgroup:W,showlegend:!0,line:{color:O,width:x==="dash"?1:2,dash:x},hoverinfo:"skip"});y.some(p=>p.startsWith("rh:"))&&g.push(v("relative humidity",r.rh,"solid","rh")),y.some(p=>p.startsWith("adiabatic:"))&&g.push(v("adiabatic saturation",r.adia,"dash","wb")),y.some(p=>p.startsWith("wetbulb:"))&&g.push(v("wet-bulb (via Lewis nº)",r.wb,"dot","twb"));const P=(l.get("saturation")?.y??[]).slice().sort((p,O)=>p-O),H=P.length>2?Math.max(.05,P[Math.floor(P.length*.5)]*1.3):void 0,E=t>0?t:H;return e.jsx(Xe,{data:g,layout:{...rn,autosize:!0,showlegend:!0,legend:{x:.02,y:.98,bgcolor:i==="dark"?"rgba(31,31,31,0.6)":"rgba(255,255,255,0.85)",bordercolor:i==="dark"?"#3b3b3b":"#ced4da",borderwidth:1},xaxis:{...rn.xaxis,title:{text:`Dry-bulb temperature (${gn(o)})`},dtick:20,minor:{dtick:5,showgrid:!0,gridcolor:J.grid}},yaxis:{...rn.yaxis,title:{text:"Humidity ratio  Y  (kg vapour / kg dry gas)"},minor:{dtick:(E??.1)/10,showgrid:!0,gridcolor:J.grid},...E?{range:[0,E]}:{rangemode:"tozero"}}},config:no,style:{width:"100%",height:"100%"},useResizeHandler:!0})}function Kd({csv:n,compA:t,compB:o}){const i=Aa("dark"),r=n.trim().split(`
`);if((r[0]??"").trim()!=="x1,gmix_J_per_mol,role,beta")return e.jsx("div",{style:{padding:16,color:"#888",fontSize:12},children:"Computing binary LLE diagram…"});const s={x:[],y:[]},m=[];for(let P=1;P<r.length;P++){const H=r[P].split(",");if(H.length<3)continue;const E=Number(H[0]),p=Number(H[1]),O=(H[2]??"").trim();!Number.isFinite(E)||!Number.isFinite(p)||(O==="curve"?(s.x.push(E),s.y.push(p)):O==="binodal"&&m.push({x:E,g:p,beta:Number(H[3])}))}const l=s.x.map((P,H)=>H).sort((P,H)=>s.x[P]-s.x[H]),f=l.map(P=>s.x[P]),c=l.map(P=>s.y[P]),C=i==="dark"?"#4dabf7":"#1c7ed6",y=i==="dark"?"#ffa94d":"#e8590c",g=[{type:"scattergl",mode:"lines",name:"g_mix",x:f,y:c,line:{color:C,width:2},hovertemplate:`x(${t}) = %{x:.4f}<br>g_mix = %{y:.1f} J/mol<extra></extra>`}];if(m.length===2){const P=m[0],H=m[1];g.push({type:"scattergl",mode:"lines",name:"common tangent (tie-line)",x:[P.x,H.x],y:[P.g,H.g],line:{color:y,width:2,dash:"dash"},hovertemplate:"common tangent<extra></extra>"}),g.push({type:"scattergl",mode:"markers+text",name:"coexisting liquids",x:[P.x,H.x],y:[P.g,H.g],text:[`x=${P.x.toFixed(4)}
β=${P.beta.toFixed(3)}`,`x=${H.x.toFixed(4)}
β=${H.beta.toFixed(3)}`],textposition:"bottom center",textfont:{size:10,color:y},marker:{color:y,size:11,symbol:"circle",line:{color:"#fff",width:1}},hovertemplate:`coexisting liquid: x(${t}) = %{x:.4f}<extra></extra>`})}const v=m.length===2?`${t}/${o} — two liquid phases: x(${t}) = ${m[0].x.toFixed(4)} ⇄ ${m[1].x.toFixed(4)}`:`${t}/${o} — single liquid (miscible: g_mix stays convex)`;return e.jsx(Xe,{data:g,layout:{...rn,autosize:!0,title:{text:v,font:{size:13}},showlegend:!0,legend:{x:.5,y:.02,xanchor:"center",orientation:"h",bgcolor:i==="dark"?"rgba(31,31,31,0.6)":"rgba(255,255,255,0.85)",bordercolor:i==="dark"?"#3b3b3b":"#ced4da",borderwidth:1},xaxis:{...rn.xaxis,title:{text:`mole fraction x(${t})`},range:[0,1]},yaxis:{...rn.yaxis,title:{text:"molar Gibbs energy of mixing  g_mix  (J/mol)"},zeroline:!0,zerolinecolor:J.grid}},config:no,style:{width:"100%",height:"100%"},useResizeHandler:!0})}function qd(n){const t=n.trim().split(/\r?\n/);if(t.length<3)return null;const o=t[0].split(",").map(c=>c.trim()),i=/^x\[([^\]]+)\]$/.exec(o[0]??"");if(!i)return null;const r=i[1],s=0,m=o.indexOf("T_bubble"),l=o.indexOf("y_eq_"+r);if(m<0||l<0)return null;const f=[];for(let c=1;c<t.length;c++){const C=t[c].split(","),y=Number(C[s]),g=Number(C[l]),v=Number(C[m]);Number.isFinite(y)&&Number.isFinite(g)&&Number.isFinite(v)&&f.push({x:y,y:g,T:v})}return f.length<2?null:(f.sort((c,C)=>c.x-C.x),{comp:r,x:f.map(c=>c.x),yEq:f.map(c=>c.y),Tbub:f.map(c=>c.T)})}function No(n,t,o){const i=n.length;if(i===0)return NaN;if(o<=n[0])return t[0];if(o>=n[i-1])return t[i-1];let r=0,s=i-1;for(;s-r>1;){const c=r+s>>1;n[c]<=o?r=c:s=c}const m=n[r],l=n[s],f=l===m?0:(o-m)/(l-m);return t[r]+f*(t[s]-t[r])}function Oe(n,t){return No(n.x,n.yEq,t)}function wo(n,t){return No(n.x,n.Tbub,t)}function $e(n,t,o){const i=n.length;if(i===0)return NaN;const r=t[i-1]>=t[0],s=r?t[0]:t[i-1],m=r?t[i-1]:t[0];if(o<=s)return r?n[0]:n[i-1];if(o>=m)return r?n[i-1]:n[0];let l=n[0],f=n[i-1];const c=y=>No(n,t,y)-o;let C=c(l);for(let y=0;y<80;y++){const g=.5*(l+f),v=c(g);if(Math.abs(v)<1e-12||f-l<1e-10)return g;C<0==v<0?(l=g,C=v):f=g}return .5*(l+f)}function Ro(n,t){const o=wo(n,t),i=$e(n.x,n.yEq,t),r=wo(n,i);return{Tbubble:o,Tdew:r}}function xa(n,t,o){const r=Oe(n,o)-o;return Math.abs(r)<1e-12?NaN:(t-o)/r}function Id(n,t,o){const{Tbubble:i,Tdew:r}=Ro(n,t),s={z:t,T:o,Tbubble:i,Tdew:r},m=Math.min(i,r),l=Math.max(i,r);if(o<=m+1e-9)return{...s,VF:0,xLiq:t,yVap:Oe(n,t),regime:"all-liquid",note:o<m-1e-6?"below the bubble point — subcooled liquid; the tie-line collapses (V/F = 0)":void 0};if(o>=l-1e-9)return{...s,VF:1,xLiq:$e(n.x,n.yEq,t),yVap:t,regime:"all-vapour",note:o>l+1e-6?"above the dew point — superheated vapour; the tie-line collapses (V/F = 1)":void 0};const f=$e(n.x,n.Tbub,o),c=Oe(n,f);let C=xa(n,t,f);return C=Math.min(1,Math.max(0,C)),{...s,VF:C,xLiq:f,yVap:c,regime:"two-phase"}}function Jd(n,t,o){const{Tbubble:i,Tdew:r}=Ro(n,t),s={z:t,Tbubble:i,Tdew:r},m=Math.min(1,Math.max(0,o)),l=t,f=$e(n.x,n.yEq,t);if(m<=1e-9)return{...s,VF:0,xLiq:t,yVap:Oe(n,t),T:i,regime:"all-liquid"};if(m>=1-1e-9)return{...s,VF:1,xLiq:f,yVap:t,T:r,regime:"all-vapour"};let c=Math.min(l,f),C=Math.max(l,f);const y=E=>{const p=xa(n,t,E);return Number.isFinite(p)?p-m:0};let g=y(c),v=.5*(c+C);for(let E=0;E<80;E++){v=.5*(c+C);const p=y(v);if(Math.abs(p)<1e-12||C-c<1e-12)break;g<0==p<0?(c=v,g=p):C=v}const P=Oe(n,v),H=wo(n,v);return{...s,VF:m,xLiq:v,yVap:P,T:H,regime:"two-phase"}}function Vd(n){const t=Math.abs(n.z-n.xLiq),o=Math.abs(n.yVap-n.z),i=t+o,r=i>1e-15?t/i:NaN;return{liquidArm:t,vapourArm:o,total:i,vfFromArms:r}}function Dd({csv:n,compA:t,compB:o,P:i}){const r=Se(u=>u.displayPrefs),s=r.temperature,m=r.pressure,l=gn(s),f=u=>tn(u,s),c=d.useMemo(()=>qd(n),[n]),[C,y]=d.useState(.5),[g,v]=d.useState("T"),[P,H]=d.useState(.5),[E,p]=d.useState(.5),O=d.useMemo(()=>c?Ro(c,C):null,[c,C]);if(!c||!O)return e.jsx(qn,{color:"yellow",variant:"light",title:"No equilibrium curve",children:"The binary T-x-y curve could not be read — pick exactly two VLE-able components."});const x=Math.min(O.Tbubble,O.Tdew),W=Math.max(O.Tbubble,O.Tdew),q=x+(W-x)*P,w=g==="T"?Id(c,C,q):Jd(c,C,E),G=Vd(w),Cn=w.regime==="two-phase",an={x:[0,1],y:[0,1]},L=[{type:"scatter",mode:"lines",name:"y = x",x:an.x,y:an.y,line:{color:J.accent2,width:1,dash:"dot"},hoverinfo:"skip"},{type:"scatter",mode:"lines",name:"equilibrium y*(x)",x:c.x,y:c.yEq,line:{color:J.accent,width:2.5},hovertemplate:"x=%{x:.3f}<br>y*=%{y:.3f}<extra>equilibrium</extra>"},{type:"scatter",mode:"lines",name:`feed z (${t})`,x:[C,C],y:[0,C],line:{color:J.warm2,width:1,dash:"dash"},hoverinfo:"skip"},{type:"scatter",mode:"markers+text",name:"feed z",x:[C],y:[C],text:[`z=${C.toFixed(3)}`],textposition:"bottom right",marker:{color:J.warm2,size:9,symbol:"diamond"},textfont:{color:J.warm2,size:11},hovertemplate:"feed z=%{x:.3f}<extra></extra>"}];if(Cn){const u=w.yVap;L.push({type:"scatter",mode:"lines",name:"tie-line",x:[w.xLiq,w.yVap],y:[u,u],line:{color:J.warm,width:2},hovertemplate:"tie-line<extra></extra>"},{type:"scatter",mode:"lines",name:"liquid arm (∝ V)",x:[w.xLiq,C],y:[u,u],line:{color:J.series[4],width:6},opacity:.7,hoverinfo:"skip"},{type:"scatter",mode:"lines",name:"vapour arm (∝ L)",x:[C,w.yVap],y:[u,u],line:{color:J.series[5],width:6},opacity:.7,hoverinfo:"skip"},{type:"scatter",mode:"markers+text",x:[w.xLiq,C,w.yVap],y:[u,u,u],text:[`x=${w.xLiq.toFixed(3)}`,"",`y=${w.yVap.toFixed(3)}`],textposition:"top center",marker:{color:[J.accent,J.warm2,J.warm],size:[9,7,9],symbol:["circle","x","square"]},textfont:{size:11},showlegend:!1,hovertemplate:"%{x:.3f}<extra></extra>"},{type:"scatter",mode:"lines",x:[w.xLiq,w.xLiq],y:[0,u],line:{color:J.accent,width:1,dash:"dot"},showlegend:!1,hoverinfo:"skip"})}const k=Cn?"teal":"orange",pn=w.regime==="two-phase"?"two-phase (V + L)":w.regime==="all-liquid"?"single phase — all liquid (V/F = 0)":"single phase — all vapour (V/F = 1)";return e.jsxs(vn,{gap:"xs",style:{height:"100%"},children:[e.jsxs(N,{gap:"xs",wrap:"wrap",children:[e.jsxs(bn,{size:"lg",variant:"filled",color:"accent",tt:"none",children:["V/F = ",w.VF.toFixed(3)]}),e.jsxs(bn,{size:"lg",variant:"light",color:"cyan",tt:"none",children:["x (",t,") = ",w.xLiq.toFixed(3)]}),e.jsxs(bn,{size:"lg",variant:"light",color:"orange",tt:"none",children:["y (",t,") = ",w.yVap.toFixed(3)]}),e.jsxs(bn,{size:"lg",variant:"light",color:"grape",tt:"none",children:["T = ",se(f(w.T))," ",l,g==="VF"?" (result)":""]}),e.jsx(bn,{size:"lg",variant:"outline",color:k,tt:"none",children:pn})]}),e.jsxs(S,{size:"xs",c:"dimmed",children:["A binary isothermal flash is fixed by 2 numbers (Duhem): P = ",se(cn(i,m))," ",fn(m)," ","and the γ-model are frozen in the curve below — turn ",g==="T"?"T":"V/F"," and read the split. The curve is the REAL model curve (the engine's y*(x), not a sketch). Lever rule:"," ","V/F = (z − x)/(y − x) = ",G.liquidArm.toFixed(3)," / ",G.total.toFixed(3)," = ",Number.isFinite(G.vfFromArms)?G.vfFromArms.toFixed(3):"—","."]}),w.note&&e.jsx(qn,{color:"orange",variant:"light",py:6,children:e.jsxs(S,{size:"xs",children:[w.note," — at this condition the feed does not split, so there is no tie-line to draw."]})}),e.jsxs(N,{gap:"lg",align:"center",wrap:"wrap",children:[e.jsxs(N,{gap:6,align:"center",children:[e.jsx(S,{size:"xs",c:"dimmed",w:64,children:"feed z"}),e.jsx(Ao,{w:170,min:.01,max:.99,step:.01,value:C,onChange:y,label:u=>u.toFixed(2),color:"orange"})]}),e.jsx(Ue,{size:"xs",value:g,onChange:u=>v(u),data:[{label:"spec T",value:"T"},{label:"spec V/F",value:"VF"}]}),g==="T"?e.jsxs(N,{gap:6,align:"center",children:[e.jsx(S,{size:"xs",c:"dimmed",w:64,children:"T (flash)"}),e.jsx(Ao,{w:210,min:0,max:1,step:.005,value:P,onChange:H,label:()=>`${se(f(q))} ${l}`,color:"grape",marks:[{value:0,label:"bubble"},{value:1,label:"dew"}]})]}):e.jsxs(N,{gap:6,align:"center",children:[e.jsx(S,{size:"xs",c:"dimmed",w:64,children:"V/F"}),e.jsx(Ao,{w:210,min:0,max:1,step:.005,value:E,onChange:p,label:u=>u.toFixed(3),color:"accent",marks:[{value:0,label:"bubble"},{value:1,label:"dew"}]})]})]}),e.jsxs(S,{size:"xs",c:"dimmed",children:["feed bubble point ",se(f(O.Tbubble))," ",l," (V/F → 0) · feed dew point ",se(f(O.Tdew))," ",l," (V/F → 1)"]}),e.jsx(Xe,{data:L,layout:{...rn,title:{text:`Binary flash  ·  ${t} / ${o}  ·  P = ${se(cn(i,m))} ${fn(m)}`,font:{...rn.font,size:14}},xaxis:{...rn.xaxis,title:{text:`x of ${t} (liquid)`},range:[0,1]},yaxis:{...rn.yaxis,title:{text:`y of ${t} (vapour)`},range:[0,1],scaleanchor:"x",scaleratio:1},legend:{...rn.legend,x:.02,y:.98},showlegend:!0},config:no,style:{width:"100%",flex:1,minHeight:0},useResizeHandler:!0})]})}const Na="choupo.explore.recentComponents",Ra=6;function ka(){if(typeof window>"u")return[];try{const n=JSON.parse(window.localStorage.getItem(Na)??"[]");return Array.isArray(n)?n.filter(t=>typeof t=="string").slice(0,Ra):[]}catch{return[]}}function Fd(n){const t=[n,...ka().filter(o=>o!==n)].slice(0,Ra);try{window.localStorage.setItem(Na,JSON.stringify(t))}catch{}return t}const Gd={volatiles:"Volatiles (VLE-able)",electrolytes:"Electrolytes / ions",gases:"Permanent gases",nonvolatile:"Non-volatile / fragments"},Ld=["volatiles","electrolytes","gases","nonvolatile"];function jd(n){return n.isElectrolyte?"electrolytes":n.isPermanentGas?"gases":n.vleAble?"volatiles":"nonvolatile"}function Bd({selected:n,onAdd:t,onRemove:o,vleContext:i=!1,caseComponents:r,onEstimate:s,unlockLine:m}){const[l,f]=d.useState(""),[c,C]=d.useState("all"),[y,g]=d.useState(ka),[v,P]=d.useState(!1),H=d.useCallback(u=>{g(Fd(u)),t(u)},[t]),E=u=>c==="vle"?u.vleAble:c==="solute"?u.kind==="nonvolatile":!0,p=d.useMemo(()=>r.filter(u=>{const I=l.trim().toLowerCase();return(!I||u.name.toLowerCase().includes(I)||u.formula.toLowerCase().includes(I))&&E(u)}),[r,l,c]),O=d.useMemo(()=>new Set(r.map(u=>u.name)),[r]),x=d.useMemo(()=>da(l,Xn).filter(u=>!O.has(u.name)&&E(u)),[l,c,O]),W=d.useMemo(()=>new Set(Xn.map(u=>u.name)),[]),q=d.useMemo(()=>da(l,Hd).filter(u=>!O.has(u.name)&&!W.has(u.name)&&E(u)),[l,c,O]),w=p.length===0&&x.length===0&&q.length===0,G=new Set(n),Cn=l.trim().length===0,an=d.useMemo(()=>{if(!Cn)return[];const u=new Map(x.map(I=>[I.name,I]));return y.map(I=>u.get(I)).filter(I=>!!I)},[Cn,x,y]),L=d.useMemo(()=>new Set(an.map(u=>u.name)),[an]),k=d.useMemo(()=>{const u={volatiles:[],electrolytes:[],gases:[],nonvolatile:[]};for(const I of x)Cn&&L.has(I.name)||u[jd(I)].push(I);return u},[x,Cn,L]),pn=(u,I="")=>{const yn=G.has(u.name);return e.jsx(ra,{onClick:()=>yn?o(u.name):H(u.name),className:"choupo-compound-row","data-on":yn?"true":void 0,style:{padding:"3px 6px",borderRadius:4,background:yn?"var(--mantine-color-accent-light)":void 0,opacity:i&&!u.vleAble?.45:1},children:e.jsxs(N,{justify:"space-between",gap:6,wrap:"nowrap",children:[e.jsxs(S,{size:"xs",fw:yn?600:400,truncate:!0,children:[u.name,ca(u)&&e.jsxs(S,{span:!0,c:"dimmed",size:"xs",children:[" ",ca(u)]})]}),e.jsxs(N,{gap:3,wrap:"nowrap",children:[u.origin==="proposed"&&e.jsx(en,{withArrow:!0,multiline:!0,w:250,label:"Extended-tier component (data/proposed/) — machine-ingested / estimated, USABLE but not yet hand-curated. The solver prints a [proposed] notice; review its gaps (esp. Cp / formation) before relying on it, then promote it to the verified catalogue.",children:e.jsx(bn,{size:"xs",variant:"light",color:"orange",children:"proposed"})}),(u.origin==="local"||u.origin==="local-shadow")&&e.jsx(en,{withArrow:!0,multiline:!0,w:230,label:u.origin==="local-shadow"?"case-local .dat — overrides the standard component of the same name (shipped to the solver)":"case-local component — shipped to the solver as a raw .dat",children:e.jsx(bn,{size:"xs",variant:"light",color:"teal",children:u.origin==="local-shadow"?"override":"local"})}),!u.vleAble&&e.jsx(en,{withArrow:!0,multiline:!0,w:220,label:u.kind==="nonvolatile"?"no vapour pressure — cannot appear in VLE / ternary plots":"no Tc / no Antoine — cannot appear in VLE / ternary plots",children:e.jsx(bn,{size:"xs",variant:"light",color:"gray",children:u.kind==="nonvolatile"?"nonvol":"frag"})})]})]})},I+u.name)};return e.jsxs(vn,{gap:6,style:{height:"100%",minHeight:0},children:[e.jsxs(N,{justify:"space-between",align:"center",gap:4,wrap:"nowrap",children:[e.jsx(S,{size:"xs",fw:700,c:"dimmed",children:"COMPONENTS"}),e.jsx(en,{label:"Estimate a component the catalogue lacks, by Joback groups",withArrow:!0,multiline:!0,w:220,children:e.jsx(En,{size:"compact-xs",variant:"subtle",color:"accent",leftSection:e.jsx(ia,{size:13}),onClick:()=>s(l.trim()),children:"estimate"})})]}),e.jsx(Ha,{size:"xs",placeholder:"search name / formula",value:l,onChange:u=>f(u.currentTarget.value)}),e.jsx(de.Group,{value:c,onChange:u=>C(u||"all"),children:e.jsxs(N,{gap:4,children:[e.jsx(de,{size:"xs",value:"all",color:"accent",children:"all"}),e.jsx(de,{size:"xs",value:"vle",color:"accent",children:"VLE"}),e.jsx(de,{size:"xs",value:"solute",color:"accent",children:"nonvolatile"})]})}),e.jsx(yt,{style:{flex:1,minHeight:0},children:e.jsxs(vn,{gap:1,children:[p.length>0&&e.jsx(je,{label:"CASE COMPONENTS",c:"teal.6"}),p.map(u=>pn(u,"case-")),Cn?e.jsxs(e.Fragment,{children:[an.length>0&&e.jsx(je,{label:"Recently used"}),an.map(u=>pn(u,"recent-")),Ld.map(u=>k[u].length>0?e.jsxs(nn,{children:[e.jsx(je,{label:Gd[u]}),k[u].map(I=>pn(I,`${u}-`))]},u):null)]}):e.jsxs(e.Fragment,{children:[p.length>0&&x.length>0&&e.jsx(je,{label:"STANDARD CATALOGUE"}),x.map(u=>pn(u))]}),q.length>0&&e.jsx(en,{withArrow:!0,multiline:!0,w:260,label:"data/proposed/ — extended catalogue (bulk-ingested / estimated). Usable for screening, but not yet hand-curated: the solver flags it, and you should review its gaps (esp. Cp / formation) before relying on it.",children:e.jsx(ra,{mt:8,onClick:()=>P(u=>!u),"aria-expanded":l.trim().length>0||v,children:e.jsxs(S,{size:"xs",fw:700,c:"orange.6",children:["PROPOSED — review before relying (",q.length,") · ",l.trim().length>0||v?"hide":"show"]})})}),(l.trim().length>0||v)&&q.map(u=>pn(u,"proposed-")),w&&e.jsxs(vn,{gap:6,align:"center",mt:"sm",children:[e.jsx(S,{size:"xs",c:"dimmed",ta:"center",children:"no match"}),l.trim()&&e.jsxs(En,{size:"compact-xs",variant:"light",color:"accent",leftSection:e.jsx(ia,{size:13}),onClick:()=>s(l.trim()),children:["estimate “",l.trim(),"” by groups"]})]})]})}),n.length>0&&e.jsxs(nn,{children:[e.jsxs(S,{size:"xs",c:"dimmed",mb:3,children:["SET (",n.length,")"]}),e.jsx(N,{gap:4,children:n.map(u=>e.jsx(bn,{size:"sm",variant:"filled",color:"accent",tt:"none",rightSection:e.jsx(Tt,{size:12,onClick:()=>o(u),"aria-label":`remove ${u}`,style:{color:"inherit"}}),children:u},u))}),m&&e.jsxs(N,{gap:4,mt:6,wrap:"nowrap",align:"flex-start",children:[e.jsx(vt,{size:13,style:{marginTop:2,flexShrink:0,opacity:.7}}),e.jsx(S,{size:"xs",c:"dimmed",style:{lineHeight:1.3},children:m})]})]})]})}function je({label:n,c:t="dimmed"}){return e.jsx(S,{size:"xs",fw:700,c:t,mt:6,pb:1,style:{position:"sticky",top:0,zIndex:2,letterSpacing:.3,background:"light-dark(var(--mantine-color-body), var(--mantine-color-dark-7))"},children:n})}const pa=[{name:"CH3",mw:15.035,contrib:13.67,label:"CH3 (methyl)"},{name:"CH2",mw:14.027,contrib:10.231,label:"CH2 (methylene)"},{name:"CH",mw:13.019,contrib:6.78,label:"CH (methine)"},{name:"C",mw:12.011,contrib:3.33,label:"C (quaternary)"},{name:"ACH",mw:13.019,contrib:8.06,label:"ACH (aromatic =CH–)"},{name:"AC",mw:12.011,contrib:5.54,label:"AC (aromatic =C<, substituted)"},{name:"CHCl",mw:48.472,contrib:18.781,label:"CHCl (>CHCl)"},{name:"CH2Cl",mw:49.48,contrib:22.23,label:"CH2Cl (–CH2Cl)"}],ma=[{name:"CH2",mw:14,contrib:4.026,label:"CH2  –CH2–"},{name:"CHCH3",mw:28,contrib:8.222,label:"CHCH3  –CH(CH3)– (propylene)"},{name:"CHOCH3",mw:44,contrib:10.611,label:"CHOCH3  –CH(OCH3)–"},{name:"CHCOOH",mw:58,contrib:18.82,label:"CHCOOH  –CH(COOH)–"},{name:"CHOH",mw:30,contrib:4.697,label:"CHOH  –CH(OH)– (vinyl alcohol)"},{name:"CHCONH2",mw:57,contrib:29.918,label:"CHCONH2  –CH(CONH2)–"},{name:"CHcyclopentyl",mw:82,contrib:29.607,label:"CHcyclopentyl"},{name:"CHcyclohexyl",mw:96,contrib:38.934,label:"CHcyclohexyl"},{name:"CHphenyl",mw:90,contrib:42.153,label:"CHphenyl  –CH(C6H5)– (styrene)"},{name:"CHCl",mw:48.5,contrib:17.911,label:"CHCl  –CHCl– (vinyl chloride)"},{name:"CHvinyl",mw:40,contrib:10.77,label:"CHvinyl"},{name:"CHeqCH",mw:26,contrib:1.344,label:"CHeqCH  –CH=CH–"},{name:"CCH3eqCH",mw:40,contrib:6.228,label:"CCH3eqCH"},{name:"CCleqCH",mw:60.5,contrib:13.807,label:"CCleqCH"},{name:"CH4pyridyl",mw:91,contrib:40.704,label:"CH4pyridyl  (4-vinylpyridine)"},{name:"CH2pyrrolidinone",mw:97,contrib:46.146,label:"CH2pyrrolidinone  (NVP)"},{name:"CHCN",mw:39,contrib:15.637,label:"CHCN  –CH(CN)– (acrylonitrile)"},{name:"CHcarbazolyl",mw:179,contrib:93.246,label:"CHcarbazolyl  (NVC)"},{name:"CCH3CH3",mw:42,contrib:18.234,label:"CCH3CH3  –C(CH3)2– (isobutylene)"},{name:"CCH3COOCH3",mw:86,contrib:37.503,label:"CCH3COOCH3  (MMA)"},{name:"CCOOCH3COOCH3",mw:130,contrib:57.666,label:"CCOOCH3COOCH3"},{name:"CCH3phenyl",mw:104,contrib:54.475,label:"CCH3phenyl  (α-methylstyrene)"},{name:"CClCOOCH3",mw:106.5,contrib:43.597,label:"CClCOOCH3"},{name:"CFF",mw:50,contrib:17.503,label:"CFF  –CF2– (TFE)"},{name:"CClCl",mw:83,contrib:23.91,label:"CClCl  –CCl2–"},{name:"CFCl",mw:66.5,contrib:26.884,label:"CFCl"},{name:"CFCF3",mw:100,contrib:32.682,label:"CFCF3"},{name:"CHCF3",mw:82,contrib:25.254,label:"CHCF3"},{name:"CCF3CF3",mw:150,contrib:80.103,label:"CCF3CF3"},{name:"NCOCH3",mw:57,contrib:23.331,label:"NCOCH3"},{name:"O",mw:16,contrib:-14.718,label:"O  –O– (ether linker)"},{name:"Oend",mw:16,contrib:12.011,label:"Oend"},{name:"Ooxide",mw:16,contrib:4.989,label:"Ooxide"},{name:"S",mw:32,contrib:-2.887,label:"S  –S– (thioether linker)"},{name:"CO",mw:28,contrib:4.37,label:"CO  >C=O"},{name:"SO2",mw:64,contrib:15.373,label:"SO2  –SO2–"},{name:"OCSO",mw:76,contrib:14.676,label:"OCSO"},{name:"COO",mw:44,contrib:7.025,label:"COO  ester linker"},{name:"CONH",mw:43,contrib:19.247,label:"CONH  amide linker"},{name:"OCOO",mw:60,contrib:13.663,label:"OCOO  carbonate linker"},{name:"OCONH",mw:59,contrib:16.108,label:"OCONH  urethane linker"},{name:"pPhenylene",mw:76,contrib:42.182,label:"pPhenylene  –C6H4–"},{name:"methylPhenylene",mw:90,contrib:43.893,label:"methylPhenylene"},{name:"dimethylPhenylene",mw:104,contrib:68.975,label:"dimethylPhenylene"},{name:"cyclohexylene",mw:82,contrib:36.274,label:"cyclohexylene"},{name:"naphthylene",mw:126,contrib:111.805,label:"naphthylene"},{name:"pyromelliticDiimide",mw:214,contrib:187.952,label:"pyromelliticDiimide"},{name:"glutarimide",mw:111,contrib:44.226,label:"glutarimide"},{name:"phthalimide",mw:145,contrib:103.18,label:"phthalimide"},{name:"quinoxaline",mw:128,contrib:112.517,label:"quinoxaline"},{name:"phenylQuinoxaline",mw:204,contrib:141.851,label:"phenylQuinoxaline"},{name:"benzoxazole",mw:117,contrib:88.241,label:"benzoxazole"},{name:"thiophene",mw:82,contrib:35.372,label:"thiophene"},{name:"dioxane",mw:86,contrib:33.723,label:"dioxane"},{name:"SiCH3CH3",mw:58,contrib:-1.059,label:"SiCH3CH3  –Si(CH3)2– (PDMS)"},{name:"SiCH3phenyl",mw:120,contrib:21.853,label:"SiCH3phenyl"},{name:"CH2oxide",mw:14,contrib:3.412,label:"CH2oxide"},{name:"backboneSideChain",mw:0,contrib:2.771,label:"backboneSideChain  (Nb term)"}];function Wd(n){return n.map(t=>({value:t.name,label:t.label??t.name}))}function Ud(n){return Object.fromEntries(n.map(t=>[t.name,t]))}const zd=[{name:"polystyrene",label:"Polystyrene  –[CH2–CH(C6H5)]–",rows:[{group:"CH2",count:1},{group:"CH",count:1},{group:"ACH",count:5},{group:"AC",count:1}]},{name:"pvc",label:"PVC  –[CH2–CHCl]–",rows:[{group:"CH2",count:1},{group:"CHCl",count:1}]},{name:"polyethylene",label:"Polyethylene  –[CH2–CH2]–",rows:[{group:"CH2",count:2}]}],$d=[{name:"pvc",label:"PVC  –[CH2–CHCl]–  (≈351 K)",rows:[{group:"CH2",count:1},{group:"CHCl",count:1}]},{name:"polystyrene",label:"Polystyrene  –[CH2–CH(phenyl)]–  (≈444 K)",rows:[{group:"CH2",count:1},{group:"CHphenyl",count:1}]},{name:"pmma",label:"PMMA  –[CH2–C(CH3)(COOCH3)]–  (≈378 K)",rows:[{group:"CH2",count:1},{group:"CCH3COOCH3",count:1}]}],Yd=[{value:"CH3",label:"CH3 (methyl)"},{value:"CH2",label:"CH2 (methylene)"},{value:"CH",label:"CH (methine)"},{value:"C",label:"C (quaternary)"},{value:"eCH2",label:"=CH2 (alkene, terminal)"},{value:"eCH",label:"=CH– (alkene)"},{value:"eC",label:"=C< (alkene)"},{value:"OH",label:"OH (alcohol)"},{value:"ether",label:"–O– (ether)"},{value:"ketone",label:">C=O (ketone)"},{value:"aldehyde",label:"–CHO (aldehyde)"},{value:"acid",label:"–COOH (acid)"},{value:"ester",label:"–COO– (ester)"},{value:"arCH",label:"=CH– (aromatic)"},{value:"arC",label:"=C< (aromatic)"}],Qd=[{value:"Joback",label:"Small molecule — Joback (Tc, Pc, ω, Psat)"},{value:"VanKrevelen",label:"Polymer density — Van Krevelen (ρ)"},{value:"Yang2020",label:"Polymer Tg — Yang 2020 (Tg∞)"}];function le(n,t){const o=typeof n=="number"?n:parseFloat(n);return Number.isFinite(o)?o:t}function ua({opened:n,onClose:t,prefillName:o}){const[i,r]=d.useState("Joback"),[s,m]=d.useState(o),[l,f]=d.useState([{group:"CH3",count:1}]),[c,C]=d.useState("1.60"),y=i==="VanKrevelen"||i==="Yang2020",g=i==="VanKrevelen"?pa:i==="Yang2020"?ma:null,v=i==="Joback"?Yd:Wd(g),P=g?Ud(g):null,H=i==="VanKrevelen"?zd:i==="Yang2020"?$d:[],E=()=>v[0]?.value??"CH2",[p,O]=d.useState(!1),[x,W]=d.useState(""),[q,w]=d.useState(""),[G,Cn]=d.useState(""),[an,L]=d.useState(""),[k,pn]=d.useState(!1),[u,I]=d.useState(null),[yn,jn]=d.useState(null);d.useEffect(()=>{n&&(m(o),jn(null),I(null))},[n,o]);const In=h=>{r(h);const on=h==="Joback"?"CH3":(h==="VanKrevelen"?pa:ma)[0]?.name??"CH2";f([{group:on,count:1}]),jn(null),I(null)},Ae=(h,_)=>f(on=>on.map((mn,ae)=>ae===h?{...mn,..._}:mn)),pe=()=>f(h=>[...h,{group:E(),count:1}]),He=h=>f(_=>_.filter((on,mn)=>mn!==h)),Bn=h=>{m(h.name),f(h.rows.map(_=>({..._}))),jn(null),I(null)},Jn=()=>({...x?{Tb:le(x,NaN)}:{},...q?{Tc:le(q,NaN)}:{},...G?{Pc_bar:le(G,NaN)}:{},...an?{omega:le(an,NaN)}:{}}),Q=s.trim().length>0&&l.length>0&&l.every(h=>h.group&&h.count>0),_e=async()=>{if(Q){pn(!0),I(null),jn(null);try{const h=Jn(),_={...h.Tb!==void 0&&Number.isFinite(h.Tb)?{Tb:h.Tb}:{},...h.Tc!==void 0&&Number.isFinite(h.Tc)?{Tc:h.Tc}:{},...h.Pc_bar!==void 0&&Number.isFinite(h.Pc_bar)?{Pc:h.Pc_bar*1e5}:{},...h.omega!==void 0&&Number.isFinite(h.omega)?{omega:h.omega}:{}},on=ve({components:[],properties:[],axis:{variable:"T",from:0,to:1,n:2},state:{composition:{}},estimate:{component:s.trim(),groups:l.map(Vn=>({group:Vn.group,count:Math.round(Vn.count)})),estimator:i,...i==="Joback"&&Object.keys(_).length>0?{reference:_}:{},...i==="VanKrevelen"?{polymer:{packing:le(c,1.6),state:"amorphous"}}:{}}}),mn=await _a("wasm");if(mn.kind==="unavailable"){I(mn.fallbackReason??"The solver (WASM) could not be loaded."),pn(!1);return}const ae=await mn.adapter.run(on,()=>{},void 0,"choupoProps");ae.status!=="done"&&I(`estimateComponent did not finish — check the groups (every group must be a known ${i} key).`),jn(ae)}catch(h){I(h instanceof Error?h.message:String(h))}finally{pn(!1)}}},Wn=yn?.operationResults?.find(h=>h.type==="estimateComponent"),sn=Wn?.diagnostics??{},Rn=Object.entries(yn?.proposals??{}).find(([h])=>h.includes(`${s.trim()}.estimate`)),Ee=Rn?Rn[0].split("/").pop():null,kn=Rn?Rn[1]:null,ne=Jn(),ee=(h,_)=>{if(h===void 0||_===void 0||!Number.isFinite(_)||_===0)return"";const on=(h-_)/_*100;return`${on>=0?"+":""}${on.toFixed(2)}%`},eo=[[sn.Tb_K,"Tb (normal b.p.)","K",ne.Tb],[sn.Tc_K,"Tc (critical)","K",ne.Tc],[sn.Pc_bar,"Pc (critical)","bar",ne.Pc_bar],[sn.omega,"ω (acentric)","—",ne.omega],[sn.Vliq298_cm3mol,"Vliq(298 K)","cm³/mol",void 0],[sn.dHf_kJmol,"ΔHf°(298, gas)","kJ/mol",void 0],[sn.Cp298,"Cp_ig(298 K)","J/mol·K",void 0],[sn.Psat_298_bar,"Psat(298 K)","bar",void 0]],me=[[sn.M0_g_per_mol,"M0 (repeat-unit mass)","g/mol",void 0],[sn.Vw_cm3_per_mol,"Vw (van der Waals vol.)","cm³/mol",void 0],[sn.packing_k,"k (packing factor)","—",void 0],[sn.V_cm3_per_mol,"V = k·Vw (molar vol.)","cm³/mol",void 0],[sn.density_g_cm3,"ρ (density)","g/cm³",void 0]],oo=[[sn.M0_g_per_mol,"M0 (repeat-unit mass)","g/mol",void 0],[sn.YgSum_1e3gKmol,"ΣYg (Tg function)","10³ g·K/mol",void 0],[sn.Tg_K,"Tg∞ (glass transition)","K",void 0]],ue=i==="VanKrevelen"?me:i==="Yang2020"?oo:eo,oe=y&&P?l.map(h=>{const _=P[h.group],on=Math.round(h.count);return{group:h.group,count:on,mw:_?_.mw*on:void 0,contrib:_?_.contrib*on:void 0}}):[],Un=i==="VanKrevelen"?"n·Vw (cm³/mol)":"n·Yg (10³ g·K/mol)",ao=i==="VanKrevelen"?"Estimate a polymer density — Van Krevelen group contribution":i==="Yang2020"?"Estimate a polymer Tg — Yang 2020 group contribution":"Estimate a new component — Joback group contribution",zn=i==="Joback"?e.jsxs(S,{size:"xs",c:"dimmed",children:["Declare the molecular groups; the engine estimates the pure-component constants (+ Psat by Ambrose-Walton, Vliq by Rackett). The result is an",e.jsx("b",{children:" ESTIMATE"})," you DOWNLOAD as a reviewable proposal — rename it to",e.jsxs("code",{children:[" constant/components/",s.trim()||"<name>",".dat"]})," on disk to promote."]}):i==="VanKrevelen"?e.jsxs(S,{size:"xs",c:"dimmed",children:["Decompose the polymer's ",e.jsx("b",{children:"repeat unit"})," into Van Krevelen groups; the engine sums M0 = Σn·MW and Vw = Σn·Vw (Bondi 1964) and returns",e.jsx("b",{children:" ρ = M0 / (k·Vw)"}),". k is the packing factor (≈1.60 amorphous, ≈1.43 crystalline) — yours to set, and shown, never hidden."]}):e.jsxs(S,{size:"xs",c:"dimmed",children:["Decompose the polymer's ",e.jsx("b",{children:"repeat unit"})," into Yang 2020 groups; the engine sums M0 = Σn·MW and Yg = Σn·Yg (ACS Omega 2020, CC-BY) and returns the infinite-Mw glass transition ",e.jsx("b",{children:"Tg∞ = ΣYg·10³ / M0"}),". For most vinyl polymers Nb (backbone-in-side-chain) = 0; add the ",e.jsx("code",{children:"backboneSideChain"}),"group only when a backbone atom sits in a side chain."]});return e.jsx(Pt,{opened:n,onClose:t,size:"lg",title:e.jsx(S,{fw:600,children:ao}),children:e.jsxs(vn,{gap:"sm",children:[e.jsx(Tn,{label:"What to estimate",data:Qd,value:i,allowDeselect:!1,onChange:h=>h&&In(h)}),zn,e.jsx(Ha,{label:y?"Polymer name (the filename stem you will type in cases)":"Component name (the filename stem you will type in cases)",placeholder:y?"polystyrene":"pentadiene",value:s,onChange:h=>m(h.currentTarget.value)}),H.length>0&&e.jsxs(N,{gap:"xs",align:"center",children:[e.jsx(S,{size:"xs",c:"dimmed",children:"Quick-pick repeat unit:"}),H.map(h=>e.jsx(En,{variant:"light",size:"compact-xs",onClick:()=>Bn(h),children:h.label},h.name))]}),e.jsxs("div",{children:[e.jsx(S,{size:"sm",fw:500,mb:4,children:y?`Repeat-unit groups (${i})`:"Molecular groups (Joback)"}),e.jsx(vn,{gap:6,children:l.map((h,_)=>e.jsxs(N,{gap:"xs",wrap:"nowrap",children:[e.jsx(Tn,{data:v,value:h.group,searchable:!0,onChange:on=>Ae(_,{group:on??E()}),w:320,allowDeselect:!1}),e.jsx(R,{value:h.count,min:1,w:90,onChange:on=>Ae(_,{count:Math.max(1,Math.round(le(on,1)))})}),e.jsx(Pe,{variant:"subtle",color:"gray","aria-label":"remove group",onClick:()=>He(_),disabled:l.length<=1,children:e.jsx(Wt,{size:16})})]},_))}),e.jsx(En,{variant:"subtle",size:"compact-xs",leftSection:e.jsx(jt,{size:14}),onClick:pe,mt:6,children:"add group"})]}),i==="VanKrevelen"&&e.jsx(R,{label:"Packing factor k  (V = k·Vw; ≈1.60 amorphous, ≈1.43 crystalline)",value:c,min:1,max:2,step:.01,decimalScale:2,w:360,onChange:h=>C(String(h??"1.60"))}),i==="Joback"&&e.jsxs(e.Fragment,{children:[e.jsx(En,{variant:"subtle",size:"compact-xs",onClick:()=>O(h=>!h),w:"fit-content",children:p?"Hide reference (validation)":"Reference values (optional — see the deviation)"}),e.jsx(Eo,{in:p,children:e.jsxs(N,{gap:"xs",wrap:"wrap",children:[e.jsx(R,{label:"Tb (K)",value:x,onChange:h=>W(String(h??"")),w:110}),e.jsx(R,{label:"Tc (K)",value:q,onChange:h=>w(String(h??"")),w:110}),e.jsx(R,{label:"Pc (bar)",value:G,onChange:h=>Cn(String(h??"")),w:110}),e.jsx(R,{label:"ω (-)",value:an,onChange:h=>L(String(h??"")),w:110})]})})]}),e.jsxs(N,{children:[e.jsx(En,{color:"accent",onClick:()=>void _e(),disabled:!Q||k,leftSection:k?e.jsx(ze,{size:14}):void 0,children:k?"Estimating…":"Estimate"}),!Q&&e.jsx(S,{size:"xs",c:"dimmed",children:"name + at least one group required"})]}),u&&e.jsx(qn,{color:"red",variant:"light",children:u}),Wn&&e.jsxs(e.Fragment,{children:[y&&oe.length>0&&e.jsxs(e.Fragment,{children:[e.jsx(la,{label:"Additive group sum (glass-box — redo it by hand)",labelPosition:"center"}),e.jsxs(D,{withRowBorders:!1,verticalSpacing:2,fz:"xs",children:[e.jsx(D.Thead,{children:e.jsxs(D.Tr,{children:[e.jsx(D.Th,{children:"group"}),e.jsx(D.Th,{ta:"right",children:"count"}),e.jsx(D.Th,{ta:"right",children:"n·MW (g/mol)"}),e.jsx(D.Th,{ta:"right",children:Un})]})}),e.jsxs(D.Tbody,{children:[oe.map((h,_)=>e.jsxs(D.Tr,{children:[e.jsx(D.Td,{ff:"monospace",children:h.group}),e.jsx(D.Td,{ta:"right",children:h.count}),e.jsx(D.Td,{ta:"right",ff:"monospace",children:h.mw!==void 0?h.mw.toFixed(3):"—"}),e.jsx(D.Td,{ta:"right",ff:"monospace",children:h.contrib!==void 0?h.contrib.toFixed(3):"—"})]},_)),e.jsxs(D.Tr,{children:[e.jsxs(D.Td,{fw:600,children:["Σ (M0, ",i==="VanKrevelen"?"Vw":"Yg",")"]}),e.jsx(D.Td,{}),e.jsx(D.Td,{ta:"right",fw:600,ff:"monospace",children:oe.reduce((h,_)=>h+(_.mw??0),0).toFixed(3)}),e.jsx(D.Td,{ta:"right",fw:600,ff:"monospace",children:oe.reduce((h,_)=>h+(_.contrib??0),0).toFixed(3)})]})]})]})]}),e.jsx(la,{label:"Estimated properties (ESTIMATE — review before trusting)",labelPosition:"center"}),e.jsxs(D,{withRowBorders:!1,verticalSpacing:2,fz:"xs",children:[e.jsx(D.Thead,{children:e.jsxs(D.Tr,{children:[e.jsx(D.Th,{children:"property"}),e.jsx(D.Th,{ta:"right",children:"value"}),e.jsx(D.Th,{children:"unit"}),e.jsx(D.Th,{ta:"right",children:"vs ref"})]})}),e.jsx(D.Tbody,{children:ue.filter(([h])=>h!==void 0).map(([h,_,on,mn])=>e.jsxs(D.Tr,{children:[e.jsx(D.Td,{children:_}),e.jsx(D.Td,{ta:"right",ff:"monospace",children:h.toPrecision(5)}),e.jsx(D.Td,{c:"dimmed",children:on}),e.jsx(D.Td,{ta:"right",c:"dimmed",children:ee(h,mn)})]},_))})]}),i==="Yang2020"&&sn.Tg_K!==void 0&&e.jsxs(S,{size:"xs",c:"dimmed",children:["Tg∞ is the ",e.jsx("b",{children:"infinite-molecular-weight limit"}),"; a real sample's Tg(Mn) = Tg∞ − K/Mn sits a little below it."]}),e.jsxs(N,{gap:6,children:[e.jsx(bn,{size:"sm",variant:"light",color:"orange",children:"origin: estimate"}),e.jsx(S,{size:"xs",c:"dimmed",children:i==="VanKrevelen"?"Van Krevelen / Bondi 1964 Vw — ρ carries the packing-factor k uncertainty (try crystalline k≈1.43).":i==="Yang2020"?"Yang 2020 (ACS Omega, CC-BY) — additive main-chain Tg∞; over-predicts bulky pendants (e.g. polystyrene +19%).":"Joback + Lee-Kesler ω + Ambrose-Walton Psat + Rackett Vliq — corresponding states, a few % error (worse for polar species)."})]}),e.jsxs(N,{justify:"space-between",align:"center",mt:4,children:[e.jsxs(S,{size:"xs",c:"dimmed",children:["Downloads a dated proposal; review its gaps, then rename to",e.jsxs("code",{children:[" ",s.trim(),".dat"]})," to promote (the GUI never writes it in place)."]}),e.jsx(en,{label:kn?"Save the dated .estimate-DATE.dat proposal (Save-As lets you pick the folder)":"no proposal produced",withArrow:!0,multiline:!0,w:240,children:e.jsx(En,{leftSection:e.jsx(Ot,{size:16}),disabled:!kn,onClick:()=>kn&&Ee&&void St(Ee,kn),children:"Download proposal"})})]})]})]})})}const Zd=200,Xd=460,Ln=240,Ma="choupo.explore.railWidth",Ka="choupo.explore.railCollapsed";function ko(n){return Number.isFinite(n)?Math.min(Xd,Math.max(Zd,Math.round(n))):Ln}function nc(){if(typeof window>"u")return Ln;try{const n=window.localStorage.getItem(Ma);if(n===null)return Ln;const t=parseFloat(n);return Number.isFinite(t)?ko(t):Ln}catch{return Ln}}function ha(n){if(!(typeof window>"u"))try{window.localStorage.setItem(Ma,String(ko(n)))}catch{}}function ec(){if(typeof window>"u")return!1;try{return window.localStorage.getItem(Ka)==="1"}catch{return!1}}function oc(n){if(!(typeof window>"u"))try{window.localStorage.setItem(Ka,n?"1":"0")}catch{}}function ac(){const[n,t]=d.useState(nc),[o,i]=d.useState(ec),r=d.useRef(null),s=d.useRef(n),m=d.useCallback(()=>{i(c=>{const C=!c;return oc(C),C})},[]),l=d.useCallback(()=>{s.current=Ln,t(Ln),ha(Ln)},[]),f=d.useCallback(c=>{c.preventDefault();const C=c.clientX,y=s.current,g=c.currentTarget;try{g.setPointerCapture(c.pointerId)}catch{}const v=document.body.style.userSelect;document.body.style.userSelect="none";const P=E=>{const p=ko(y+(E.clientX-C));s.current=p,r.current===null&&(r.current=window.requestAnimationFrame(()=>{r.current=null,t(s.current)}))},H=E=>{g.removeEventListener("pointermove",P),g.removeEventListener("pointerup",H),g.removeEventListener("pointercancel",H);try{g.releasePointerCapture(E.pointerId)}catch{}r.current!==null&&(window.cancelAnimationFrame(r.current),r.current=null),document.body.style.userSelect=v,t(s.current),ha(s.current)};g.addEventListener("pointermove",P),g.addEventListener("pointerup",H),g.addEventListener("pointercancel",H)},[]);return{width:n,collapsed:o,toggleCollapsed:m,onPointerDown:f,reset:l}}const qa={water:[{group:"H2O",count:1}],ethanol:[{group:"CH3",count:1},{group:"CH2",count:1},{group:"OH",count:1}],nButanol:[{group:"CH3",count:1},{group:"CH2",count:3},{group:"OH",count:1}],nHexane:[{group:"CH3",count:2},{group:"CH2",count:4}],benzene:[{group:"ACH",count:6}],C4H10:[{group:"CH3",count:2},{group:"CH2",count:2}],nPentane:[{group:"CH3",count:2},{group:"CH2",count:3}],isopentane:[{group:"CH3",count:3},{group:"CH2",count:1},{group:"CH",count:1}],nHeptane:[{group:"CH3",count:2},{group:"CH2",count:5}],C8H18:[{group:"CH3",count:2},{group:"CH2",count:6}],cyclohexane:[{group:"CH2",count:6}]};function tc(n){let t;try{t=Qe(Ze(n))}catch{return null}const o=t.unifac;if(!o||typeof o!="object")return null;const i=o.groups;if(!Array.isArray(i))return null;const r=[];for(const s of i)s&&typeof s=="object"&&typeof s.group=="string"&&typeof s.count=="number"&&r.push({group:s.group,count:s.count});return r.length?r:null}function ic(n){const t={};if(!n)return t;for(const[o,i]of Object.entries(n)){if(!/(^|\/)constant\/components\/[^/]+\.dat$/.test(o))continue;let r;try{r=Qe(Ze(i))}catch{continue}const s=typeof r.name=="string"?r.name:"";if(!s)continue;const m=tc(i);m&&(t[s]=m)}return t}function Ia(n,t={}){return Object.prototype.hasOwnProperty.call(t,n)||Object.prototype.hasOwnProperty.call(qa,n)}function Be(n,t={}){const o={};for(const i of n){const r=t[i]??qa[i];r&&(o[i]=r.map(s=>({group:s.group,count:s.count})))}return o}function rc(n,t){if(n.length===0)return"mixed";if(n.length===1)return"pure";const o=n.map(l=>un(l,t)),i=n.includes("water"),r=o.some(l=>l?.isElectrolyte),s=o.some(l=>l?.isPermanentGas),m=o.some(l=>(l?.vleAble??!1)&&!(l?.isPermanentGas??!1));return s&&m?"humid-gas":i&&r?"aqueous-electrolyte":o.every(l=>l?.vleAble)?i?"aqueous-organic":"organic-mixture":"mixed"}function Ca(n,t,o){const i=new Set(["scan"]),r=n.length;if(r>=2&&i.add("gibbsmap"),r===0)return i;const s=n.map(C=>un(C,t)),m=rc(n,t),l=s.every(C=>C?.vleAble??!1),f=n.every((C,y)=>(s[y]?.hasUnifac??!1)||Ia(C,o)),c=m==="aqueous-organic"||m==="organic-mixture";return r===1&&(s[0]?.vleAble&&i.add("phase"),n[0]==="water"&&i.add("steam")),r===2&&c&&l&&(i.add("txy"),i.add("flash"),i.add("gamma"),i.add("mccabe")),r===2&&f&&i.add("binaryLle"),r===3&&c&&l&&i.add("ternary"),r===3&&c&&l&&f&&i.add("ternaryLle"),m==="humid-gas"&&r===2&&i.add("psychro"),m==="aqueous-electrolyte"&&i.add("scaling"),i}const sc=Object.assign({}),lc=Object.assign({});function fa(n,t){const o=[];for(const i of Object.values(n))try{const s=Qe(Ze(i)).components;Array.isArray(s)&&s.length===2&&o.push({model:t,a:String(s[0]),b:String(s[1])})}catch{}return o}const dc=[...fa(sc,"NRTL"),...fa(lc,"Wilson")];function Ho(n,t,o){return dc.some(i=>i.model===n&&(i.a===t&&i.b===o||i.a===o&&i.b===t))}const cc={water:{tripleT:273.16,tripleP:611.657,Hfus:6010,Hsub:51059,deltaVfus:-163e-8}};function pc(n){return cc[n]}function mc(n,t=12){const o=typeof navigator<"u"&&navigator.hardwareConcurrency||4;return Math.max(1,Math.min(o-2,t,Math.max(1,n)))}function uc(n){const t=n.filter(l=>l&&l.trim().length>0);if(t.length===0)return"";const o=t[0].trim().split(/\r?\n/)[0],i=o.split(","),r=i.indexOf("tieline_id"),s=i.indexOf("kind"),m=[o];return t.forEach((l,f)=>{const c=l.trim().split(/\r?\n/);for(let C=1;C<c.length;++C){let y=c[C];if(r>=0&&s>=0){const g=y.split(",");if(g[s]==="tie"){const v=Number(g[r]);Number.isFinite(v)&&v>=0&&(g[r]=String(f*1e6+v),y=g.join(","))}}m.push(y)}}),m.join(`
`)+`
`}function hc(n){return n==="Psat"?{family:"vaporPressure",models:["Antoine","AmbroseWalton"]}:["Z","v_molar","H_real","S_real"].includes(n)?{family:"equationOfState",models:["idealGas","SRK","PR"]}:n==="viscosity_liquid"?{family:"transportLiquidVisc",models:["Andrade","Vogel"]}:n==="thermal_conductivity_liquid"?{family:"transportLiquidCond",models:["SatoRiedel","Latini"]}:null}function Cc(n,t,o,i){switch(t){case"equationOfState":return{...n,equationOfState:{model:o}};case"transportLiquidVisc":return{...n,transport:{...n.transport??{},liquidViscosity:o}};case"transportLiquidCond":return{...n,transport:{...n.transport??{},liquidConductivity:o}};case"vaporPressure":{if(o==="Antoine")return n;const r={...n.componentFiles??{}};for(const s of i)r[`constant/components/${s}.dat`]=`name ${s};
vaporPressure { model ${o}; }
`;return{...n,componentFiles:r}}}}function fc(n){const t=(c,C)=>Math.abs(c-C)<=1e-9*Math.max(1,Math.abs(c),Math.abs(C)),o=n.map(c=>{const C=c.csv.trim().split(/\r?\n/),y=C[0]?.split(",")[1]?.trim()||"value",g=[];for(let v=1;v<C.length;++v){const P=C[v].split(",");if(P.length<2)continue;const H=Number(P[0]);Number.isFinite(H)&&g.push({x:H,xs:P[0].trim(),v:P[1].trim()})}return{model:c.model,prop:y,pts:g}}).filter(c=>c.pts.length>0);if(o.length===0)return"";const i=n[0].csv.split(/\r?\n/)[0]?.split(",")[0]?.trim()||"x",r=o[0].prop,s=[],m=o.flatMap(c=>c.pts).sort((c,C)=>c.x-C.x);for(const c of m)(s.length===0||!t(s[s.length-1].x,c.x))&&s.push(c);const l=[i,...o.map(c=>`${r}__${c.model}`)].join(","),f=[];for(const c of s){const C=o.map(y=>y.pts.find(g=>t(g.x,c.x))?.v??"");f.push([c.xs,...C].join(","))}return[l,...f].join(`
`)}function gc(n){const t=n.trim().split(/\r?\n/);let o=0,i=0;for(let r=1;r<t.length;++r){const s=t[r].split(",").slice(1).map(c=>c.trim()===""?NaN:Number(c)).filter(Number.isFinite);if(s.length<2)continue;const m=Math.min(...s),l=Math.max(...s),f=l-m;o=Math.max(o,f),i=Math.max(i,f/Math.max(Math.abs(m),Math.abs(l),1e-30)*100)}return{absMax:o,relMaxPct:i}}const _o=[{id:"scan",label:"Property vs T/P",min:1,max:99,vle:!1,why:"pick at least one component"},{id:"phase",label:"Pure phase diagram (P-T)",min:1,max:1,vle:!0,why:"needs exactly 1 VLE-able component (Tc + vapour pressure)"},{id:"txy",label:"Binary boiling envelope (T-x-y)",min:2,max:2,vle:!0,why:"needs exactly 2 VLE-able components"},{id:"gamma",label:"γ(x)",min:2,max:2,vle:!0,why:"needs exactly 2 VLE-able components"},{id:"mccabe",label:"McCabe-Thiele (distillation)",min:2,max:2,vle:!0,why:"needs exactly 2 VLE-able components"},{id:"flash",label:"Binary flash (x-y + lever rule)",min:2,max:2,vle:!0,why:"needs exactly 2 VLE-able components"},{id:"binaryLle",label:"Binary LLE (g_mix + tangent)",min:2,max:2,vle:!1,needsUnifac:!0,why:"needs exactly 2 components with UNIFAC groups (e.g. water + nButanol)"},{id:"ternary",label:"Ternary boiling surface (T_bubble)",min:3,max:3,vle:!0,why:"needs exactly 3 VLE-able components"},{id:"ternaryLle",label:"Ternary solubility (LLE)",min:3,max:3,vle:!0,needsUnifac:!0,why:"needs exactly 3 components with UNIFAC groups (e.g. water, ethanol, benzene)"},{id:"psychro",label:"Psychrometric chart",min:2,max:2,vle:!1,why:"pick a carrier gas + a condensable (the condensable needs a vapour-pressure model)"},{id:"scaling",label:"Scaling (SI vs recovery)",min:1,max:99,vle:!1,why:"select water + a dissolved electrolyte (e.g. NaCl) — RO-scaling needs ions"},{id:"gibbsmap",label:"Equilibrium map (Gibbs)",min:2,max:12,vle:!1,why:"pick 2+ gas-phase species with parseable formulas (e.g. N2 + H2 + NH3)"},{id:"steam",label:"Steam tables (IF97)",min:1,max:1,vle:!1,why:"IF97 is the water formulation — select water alone"}],bc={scan:"scan",phase:"P-T",txy:"T-x-y",flash:"flash",gamma:"γ(x)",mccabe:"McCabe",binaryLle:"LLE",ternary:"ternary",ternaryLle:"tern.LLE",psychro:"psychro",scaling:"scaling",steam:"steam",gibbsmap:"gibbsmap"},Ja=["Psat","Cp_liquid"],yc=["Z","v_molar","Cp_ig","H_real","S_real"],Va=["viscosity_liquid","viscosity_gas","thermal_conductivity_liquid","thermal_conductivity"],ga=["Z","v_molar","H_real","S_real"],ba=n=>Ja.includes(n),Tc=n=>Va.includes(n),ya={viscosity_liquid:"μ liquid",viscosity_gas:"μ gas",thermal_conductivity_liquid:"k liquid",thermal_conductivity:"k gas"};function Ta(n){return n==="viscosity_liquid"?["Andrade","Vogel"]:n==="thermal_conductivity_liquid"?["SatoRiedel","Latini"]:[]}const va=[{ion:"Ca",mw:40.078},{ion:"Mg",mw:24.305},{ion:"Na",mw:22.99},{ion:"K",mw:39.098},{ion:"Cl",mw:35.453},{ion:"SO4",mw:96.06},{ion:"HCO3",mw:61.02}],vc={Ca:.0021,Mg:.0011,Na:.0158,K:3e-4,Cl:.0124,SO4:.0026,HCO3:.003},Pa=["calcite","gypsum"],Pc=[{y:0,label:"saturation — above this line the mineral precipitates"}];function We(n){if(!n||/[^A-Za-z0-9()]/.test(n))return{};let t=n;t=t.replace(/\(([A-Za-z0-9]+)\)(\d+)/g,(m,l,f)=>l.repeat(parseInt(f,10)));const o={},i=/([A-Z][a-z]?)(\d*)/g;let r,s=0;for(;(r=i.exec(t))!==null;){if(r.index!==s)return{};s=r.index+r[0].length;const m=r[1],l=r[2]?parseInt(r[2],10):1;o[m]=(o[m]??0)+l}return s===t.length?o:{}}function Te(n,t){const o=n.trim().split(/\r?\n/);if(o.length===0)return n;const i=o[0].split(",").map(r=>r.trim()).indexOf(t);return i<0?n:o.map(r=>{const s=r.split(",");return s.splice(i,1),s.join(",")}).join(`
`)}const Da={h:{label:"h (h_f, h_g, h_fg)",keep:["h_f","h_g","h_fg"],rename:{h_f:"hf",h_g:"hg",h_fg:"hfg"}},s:{label:"s (s_f, s_g)",keep:["s_f","s_g"],rename:{s_f:"sf",s_g:"sg"}},v:{label:"v (v_f, v_g)",keep:["v_f","v_g"],rename:{v_f:"vf",v_g:"vg"}},psat:{label:"psat",keep:["psat"],rename:{}}},Fa={h:{label:"h",keep:["h"],rename:{h:"hmass"}},s:{label:"s",keep:["s"],rename:{s:"smass"}},v:{label:"v",keep:["v"],rename:{v:"vmass"}},cp:{label:"cp",keep:["cp"],rename:{cp:"cpmass"}}};function Sc(n,t,o){const i=(t==="saturation"?Da:Fa)[o];if(!i)return n;const r=n.trim().split(/\r?\n/);if(r.length===0)return n;const m=r[0].split(",").map(l=>l.trim()).map((l,f)=>({h:l,i:f})).filter(({h:l})=>l==="T"||i.keep.includes(l));return m.length<2?n:[m.map(({h:l})=>i.rename[l]??l).join(","),...r.slice(1).map(l=>{const f=l.split(",");return m.map(({i:c})=>f[c]??"").join(",")})].join(`
`)}function Oc(n,t){const o=n.trim().split(/\r?\n/);if(o.length<2)return null;const i=o[0].split(",").map(m=>m.trim()).indexOf(t);if(i<0)return null;const r=parseFloat(o[1].split(",")[i]??""),s=parseFloat(o[o.length-1].split(",")[i]??"");return Number.isFinite(r)&&Number.isFinite(s)?{first:r,last:s}:null}function Ac(n,t){switch(n){case"txy":return"ch:flash";case"mccabe":return"sec:mccabe-tray-efficiency";case"flash":return"ch:flash";case"gamma":return"ch:activity";case"ternary":return"sec:ternary";case"ternaryLle":return"ch:lle-gibbs";case"phase":return"ch:vap";case"psychro":return"ch:drying";case"scaling":return"ch:electrolytes";case"gibbsmap":return"ch:gibbs";case"steam":return"ch:vap";default:return t==="Psat"?"ch:vap":t==="Cp_liquid"||t==="Cp_ig"?"ch:heat":t==="viscosity_liquid"||t==="viscosity_gas"?"ch:viscosity":t==="thermal_conductivity_liquid"||t==="thermal_conductivity"?"ch:thermal-cond":"ch:fugacity"}}const Hc=(n,t)=>`/docs/theoryGuide.pdf#nameddest=${Ac(n,t)}`;function F(n,t){const o=typeof n=="number"?n:parseFloat(n);return Number.isFinite(o)?o:t}function Jc(){const[n,t]=d.useState([]),[o,i]=d.useState("scan"),r=ac(),[s,m]=d.useState("Psat"),[l,f]=d.useState("T"),[c,C]=d.useState(290),[y,g]=d.useState(380),[v,P]=d.useState(5e4),[H,E]=d.useState(5e5),p=l==="T"?c:v,O=l==="T"?y:H,x=l==="T"?C:P,W=l==="T"?g:E,[q,w]=d.useState(298.15),[G,Cn]=d.useState(60),[an,L]=d.useState(4),[k,pn]=d.useState(101325),[u,I]=d.useState("idealGas"),[yn,jn]=d.useState("Andrade"),[In,Ae]=d.useState(!1),[pe,He]=d.useState([]),[Bn,Jn]=d.useState(null),[Q,_e]=d.useState("NRTL"),[Wn,sn]=d.useState(10),[Rn,Ee]=d.useState(90),[kn,ne]=d.useState(20),[ee,eo]=d.useState(10),[me,oo]=d.useState(0),[ue,oe]=d.useState({...vc}),[Un,ao]=d.useState("mg/L"),[zn,h]=d.useState("solve"),[_,on]=d.useState(7.8),[mn,ae]=d.useState("closed"),[Vn,Ga]=d.useState(42e-5),[we,La]=d.useState(298.15),[he,ja]=d.useState("davies"),[Ce,Ba]=d.useState(!1),[te,Wa]=d.useState(10),[ie,Ua]=d.useState({}),[xe,za]=d.useState(573.15),[Ne,$a]=d.useState(973.15),[Re,Ya]=d.useState(1e5),[ke,Qa]=d.useState(3e7),[wn,Za]=d.useState(null),[$n,Mo]=d.useState(0),[Ko,Xa]=d.useState(!1),[Me,nt]=d.useState(0),[Ke,et]=d.useState(.85),[Pn,ot]=d.useState("saturation"),[to,at]=d.useState("h"),[io,tt]=d.useState(273.16),[ro,it]=d.useState(623.15),[so,rt]=d.useState(293.15),[lo,st]=d.useState(573.15),[fe,lt]=d.useState(1e5),[dn,qe]=d.useState(null),[co,Ie]=d.useState(!1),[po,Mn]=d.useState(null),[mo,Je]=d.useState([]),[qo,dt]=d.useState(!1),[uo,Io]=d.useState(!0),ho=Se(a=>a.displayPrefs),M=ho.temperature,V=ho.pressure,Ve=a=>l==="T"?tn(a,M):cn(a,V),Jo=a=>l==="T"?Gn(a,M):Le(a,V),Vo=l==="T"?gn(M):fn(V),Do=(a,b)=>Un==="mg/L"?Number((a*b*1e3).toFixed(2)):a,ct=(a,b)=>Un==="mg/L"?a/(b*1e3):a,Dn=Se(a=>a.caseFiles.rawFiles),Z=d.useMemo(()=>wd(Dn),[Dn]),Co=d.useMemo(()=>{let a=n[n.length-1]??null,b=-1;for(const T of n){const A=Object.keys(We(un(T,Z)?.formula??"")).length;A>b&&(b=A,a=T)}return a},[n,Z]),Fo=d.useMemo(()=>wa(Dn),[Dn]),An=d.useMemo(()=>ic(Dn),[Dn]),Sn=d.useMemo(()=>Ed(Dn),[Dn]),Kn=Object.keys(Sn).length>0,De=d.useCallback(a=>(un(a,Z)?.hasUnifac??!1)||Ia(a,An),[Z,An]);d.useEffect(()=>{if(n.length!==2)return;const a=n[0],b=n[1];!De(a)||!De(b)||_e(T=>(T==="NRTL"||T==="Wilson")&&!Ho(T,a,b)?"UNIFAC":T)},[n,De]);const Go=d.useCallback(a=>t(b=>b.includes(a)?b:[...b,a]),[]),Lo=d.useCallback(a=>t(b=>b.filter(T=>T!==a)),[]),[jo,fo]=d.useState(!1),[Bo,pt]=d.useState(""),Wo=d.useCallback(a=>{pt(a),fo(!0)},[]),Hn=o==="txy"||o==="gamma"||o==="mccabe"||o==="flash",Fn=o==="ternary"||o==="ternaryLle",go=ba(s)?"pure":"mixture",Uo=d.useCallback(a=>a.comingSoon?a.comingSoon:Ca(n,Z,An).has(a.id)?null:(n.length<a.min||n.length>a.max,a.why),[n,Z,An]),mt=_o.find(a=>a.id===o)??_o[0],ge=Uo(mt),Yn=d.useMemo(()=>Ca(n,Z,An),[n,Z,An]),zo=d.useRef(Yn),[ut,$o]=d.useState(new Set);d.useEffect(()=>{const a=zo.current,b=new Set;if(Yn.forEach(A=>{a.has(A)||b.add(A)}),zo.current=Yn,b.size===0)return;$o(b);const T=setTimeout(()=>$o(new Set),650);return()=>clearTimeout(T)},[Yn]);const Yo=d.useMemo(()=>{if(n.length===0)return null;const a=U=>un(U,Z),b=n.filter(U=>a(U)?.vleAble).length,T=n.every(U=>a(U)?.vleAble),A=n.includes("water"),$=n.some(U=>a(U)?.isElectrolyte);return n.length===1&&b===1?"+1 VLE compound → boiling envelope, γ(x), McCabe-Thiele":n.length===2&&T&&!Yn.has("ternary")?"+1 VLE compound → ternary boiling surface":A&&!$&&!Yn.has("scaling")?"+ a dissolved salt (e.g. NaCl) → RO-scaling audit":null},[n,Z,Yn]),hn=d.useMemo(()=>{const a={};if(n.forEach(K=>{a[K]=1/Math.max(n.length,1)}),o==="phase"){const K=n[0]??"";return{components:[K],properties:[],axis:{variable:"T",from:0,to:1,n:2},state:{composition:{[K]:1}},phaseDiagram:{grid:Math.max(20,Math.round(G)),solid:pc(K)},componentFiles:{...Sn,[`constant/components/${K}.dat`]:`name ${K};
vaporPressure { model AmbroseWalton; }
`}}}if(o==="psychro"){const K=[...n].sort((Nn,bt)=>(un(Nn,Z)?.tb??0)-(un(bt,Z)?.tb??0)),j=K[0]??"",B=K[K.length-1]??"",Y=c-273.15,ln=y-273.15,X=[];for(let Nn=Wn;Nn<=Rn+1e-9&&Nn<100;Nn+=Math.max(1,kn))X.push(Math.round(Nn));const re=[],Oo=Math.max(5,ee);for(let Nn=Math.ceil(Y/Oo)*Oo;Nn<=Math.min(ln,95);Nn+=Oo)re.push(Nn);return{components:[j,B],properties:[],axis:{variable:"T",from:0,to:1,n:2},state:{composition:{[j]:.5,[B]:.5}},psychrometry:{carrier:j,condensable:B,P:k,TminC:Y,TmaxC:ln,gridN:Math.max(20,Math.round(G)),rh:X,wetBulb:re},transport:{model:"Chung",thermalConductivity:"Eucken",diffusivity:"Fuller"},componentFiles:{...Sn}}}if(o==="gibbsmap"){const K=n.map(X=>({name:X,atoms:We(un(X,Z)?.formula??"")})),j=[...new Set(K.flatMap(X=>Object.keys(X.atoms)))].sort(),B=K.map(X=>({name:X.name,atoms:j.map(re=>X.atoms[re]??0)})),Y={};for(const X of n)Y[X]=ie[X]??1;const ln=wn&&n.includes(wn)?wn:Co??n[n.length-1];return{components:[...n],properties:[],axis:{variable:"T",from:0,to:1,n:2},state:{composition:Object.fromEntries(n.map(X=>[X,1/n.length]))},gibbsmap:{elements:j,species:B,feed:Y,Tfrom:xe,Tto:Ne,nT:25,Pfrom:Re,Pto:ke,nP:25,logP:!0,metric:{type:"moleFraction",species:ln},...$n!==0?{deltaT:$n}:{}},...Kn?{componentFiles:Sn}:{}}}if(o==="scaling"){const K={};for(const{ion:j}of va){const B=ue[j]??0;B>0&&(K[j]=B)}return{components:["water"],properties:[],axis:{variable:"T",from:0,to:1,n:2},state:{composition:{water:1}},scaling:{totals:K,pH:zn==="solve"?"solve":_,...mn==="open"?{pCO2atm:Vn}:{},T:we,activityModel:he,...Ce?{equilibrate:[...Pa],...te>0?{feedFlowM3h:te}:{}}:{},from:Me,to:Ke,n:Math.max(2,Math.round(G))},...Kn?{componentFiles:Sn}:{}}}if(o==="steam")return{components:["water"],properties:[],axis:{variable:"T",from:0,to:1,n:2},state:{composition:{water:1}},steam:Pn==="saturation"?{mode:"saturation",from:io,to:ro,n:Math.max(2,Math.round(G))}:{mode:"isobar",P:fe,from:so,to:lo,n:Math.max(2,Math.round(G))},...Kn?{componentFiles:Sn}:{}};if(o==="ternary"||o==="ternaryLle"){const K=Math.max(8,Math.min(28,Math.round(G))),j={variable:"T",from:0,to:1,n:2};return o==="ternaryLle"?{components:n,properties:[],axis:j,state:{T:q,P:k,composition:a},ternary:{mode:"lle",n:K,tieStride:Math.max(1,Math.round(an))},unifacGroups:Be(n,An),...Kn?{componentFiles:Sn}:{}}:{components:n,properties:[],axis:j,state:{P:k,composition:a},ternary:{mode:"bubbleT",n:K},activityModel:{model:Q},equationOfState:{model:u},...Q==="UNIFAC"?{unifacGroups:Be(n,An)}:{},...Kn?{componentFiles:Sn}:{}}}if(o==="binaryLle")return{components:n,properties:[],axis:{variable:"x",from:0,to:1,n:2},state:{T:q,P:k,composition:a},binaryLle:{n:Math.max(11,Math.round(G))},unifacGroups:Be(n,An),...Kn?{componentFiles:Sn}:{}};if(o==="txy"||o==="gamma"||o==="mccabe"||o==="flash"){const K=un(n[0]??"",Z)?.tb,j=un(n[1]??"",Z)?.tb,B=typeof K=="number"&&typeof j=="number"&&j<K?[n[1],n[0]]:n,Y=B[0]??"",ln=B[1]??"",X=o==="txy"||o==="mccabe"||o==="flash",re=X?["T_bubble",`y_eq_${Y}`,"liquid_stable"]:[`gamma_${Y}`,`gamma_${ln}`];return{components:B,properties:re,axis:{variable:`x[${Y}]`,from:0,to:1,n:Math.max(2,Math.round(G))},state:{P:k,composition:a},activityModel:{model:Q},equationOfState:{model:u},...X?{vleTwoLiquid:!0}:{},...Q==="UNIFAC"?{unifacGroups:Be(B,An)}:{},...Kn?{componentFiles:Sn}:{}}}const b=ba(s),T=b?n.map(K=>`${s}_${K}`):[s],A={composition:a};l==="T"?A.P=k:A.T=q;const $=Ta(s),U=$.includes(yn)?yn:$[0]??"",z=s==="viscosity_liquid"?{liquidViscosity:U}:s==="thermal_conductivity_liquid"?{liquidConductivity:U}:s==="viscosity_gas"?{model:"Chung"}:s==="thermal_conductivity"?{model:"Chung",thermalConductivity:"Eucken"}:void 0;return{components:n,properties:T,axis:{variable:l,from:p,to:O,n:Math.max(2,Math.round(G))},state:A,mode:b?"pure":"mixture",activityModel:{model:"ideal"},...ga.includes(s)?{equationOfState:{model:u}}:{},...z?{transport:z}:{},...Kn?{componentFiles:Sn}:{}}},[n,o,s,l,c,y,v,H,G,an,k,q,u,yn,Q,Wn,Rn,kn,ee,ue,zn,_,mn,Vn,we,he,Ce,te,Me,Ke,Pn,io,ro,so,lo,fe,An,Sn,Kn,ie,xe,Ne,Re,ke,wn,Co,$n,Z]),Qo=d.useMemo(()=>{try{return At(Ht(ve(hn).propsDict))}catch{return"(invalid spec)"}},[hn]),xn=o==="scan"&&n.length===1?hc(s):null,Zo=pe.filter(a=>xn?.models.includes(a)),Xo=In&&!!xn&&Zo.length>=2,be=xn?.family,Qn=d.useRef(0),bo=d.useRef(null),na=d.useCallback(async()=>{if(ge){bo.current?.abort(),qe(null),Mn(null),Jn(null),Je([]),Ie(!1);return}bo.current?.abort();const a=new AbortController;bo.current=a;const b=++Qn.current;Ie(!0),Mn(null);try{const T=await _a("wasm");if(b!==Qn.current)return;if(T.kind==="unavailable"){Mn(T.fallbackReason??"The real solver could not be loaded (build the WASM)."),Ie(!1);return}if(Xo&&xn){Je([]);const j=pe.filter(ln=>xn.models.includes(ln)),B=await Promise.all(j.map(ln=>T.adapter.run(ve(Cc(hn,xn.family,ln,n)),()=>{},a.signal,"choupoProps")));if(b!==Qn.current)return;const Y=B.map((ln,X)=>({model:j[X],csv:ln.csvFiles?.[On]??""})).filter(ln=>ln.csv.length>0);if(Y.length>=2){const ln=fc(Y);qe(ln),Mn(null),Jn({models:Y.map(X=>X.model),spread:gc(ln),property:s})}else Jn(null),Mn("multi-method: too few curves returned — a model may lack data for this compound.");return}Jn(null);let A,$=!1,U,z=[];const K=Fn&&hn.ternary?mc(hn.ternary.n):1;if(Fn&&hn.ternary&&K>1){const j=await Promise.all(Array.from({length:K},(Y,ln)=>T.adapter.run(ve({...hn,ternary:{...hn.ternary,shard:{k:ln,n:K}}}),()=>{},a.signal,"choupoProps")));if(b!==Qn.current)return;const B=j.map(Y=>Y.csvFiles?.[On]).filter(Y=>typeof Y=="string"&&Y.length>0);B.length===K?A=uc(B):$=j.some(Y=>Y.status!=="done")}else{const j=await T.adapter.run(ve(hn),()=>{},a.signal,"choupoProps");if(b!==Qn.current)return;A=j.csvFiles?.[On],$=j.status!=="done",U=j.log.split(`
`).map(B=>B.trim()).reverse().find(B=>/(?:error|fatal|refused|failed)/i.test(B)),z=(j.log.match(/^\s*(\[advisory\]|speciation: feed charge imbalance|steamTables: the .* isobar crosses|EQUILIBRATE allowed|.*precipitation CEILING).*$/gm)??[]).map(B=>B.trim())}Je(z),A?(qe(A),Mn(null)):Mn($?`choupoProps did not finish${U?`: ${U}`:". Try a narrower range or a curated compound."}`:`No data — ${s} may not be defined for the selected compound(s) over this range.`)}catch(T){b===Qn.current&&!a.signal.aborted&&(Mn(T instanceof Error?T.message:String(T)),Jn(null))}finally{b===Qn.current&&Ie(!1)}},[hn,ge,s,Xo,In,pe,be]);d.useEffect(()=>{qe(null),Mn(null),Je([])},[o,Pn]),d.useEffect(()=>{const a=setTimeout(()=>{na()},300);return()=>clearTimeout(a)},[na]),d.useEffect(()=>{He(xn?xn.models.slice(0,2):[])},[be]);const yo=Hc(o,s),ea=r.toggleCollapsed;d.useEffect(()=>{const a=b=>{if(b.key==="F1"){b.preventDefault(),window.open(yo,"_blank");return}if(b.key==="["&&!b.ctrlKey&&!b.metaKey&&!b.altKey){const T=b.target,A=T?.tagName;if(A==="INPUT"||A==="TEXTAREA"||T?.isContentEditable)return;b.preventDefault(),ea()}};return window.addEventListener("keydown",a),()=>window.removeEventListener("keydown",a)},[yo,ea]);const oa=!Hn&&o!=="scaling"&&s==="Psat"?n.filter(a=>!(un(a,Z)?.vleAble??!1)):[],To=o==="scaling"&&dn?Oc(dn,"I"):null,aa=(()=>{if(Hn===!1&&o!=="ternary"||Q==="ideal")return null;if(Q==="UNIFAC"){const T=n.filter(A=>!De(A));return T.length?`UNIFAC groups — missing for ${T.join(", ")} (treated as ideal); try water, ethanol, benzene, nHexane, nButanol…`:`UNIFAC groups — all ${n.length} components covered ✓ (predictive, no fitted pairs)`}const a=[];return n.length===2?a.push([n[0],n[1]]):n.length===3&&a.push([n[0],n[1]],[n[0],n[2]],[n[1],n[2]]),a.length?`pairs — ${a.map(([T,A])=>`${T}–${A}: ${Ho(Q,T,A)?`${Q} ✓`:"absent → ideal"}`).join("  ·  ")}`:null})(),vo=(()=>{if(!Hn||n.length!==2||Q!=="NRTL"&&Q!=="Wilson")return null;const a=n[0],b=n[1];return Ho(Q,a,b)?null:`No curated ${Q} pair covers ${a}–${b}, so this diagram assumes IDEAL mixing — it cannot show an azeotrope or a liquid-liquid split. Switch γ to UNIFAC (predictive, from the components' groups), or curate a ${Q} pair for this system.`})(),Po=(()=>{if(o!=="txy"||!dn)return null;const a=dn.trim().split(`
`),b=(a[0]??"").split(",").indexOf("liquid_stable");if(b<0)return null;let T=0,A=0;for(let $=1;$<a.length;$++){const U=Number(a[$].split(",")[b]);Number.isFinite(U)&&(A++,U===0&&T++)}return T>0?`${Q} predicts a liquid-liquid split over ${T} of ${A} compositions — the FLAT segment is the heteroazeotrope (the three-phase L-L-V line: constant boiling T and a fixed vapour, the same across the gap). Open “Binary LLE (g_mix + tangent)” to read the two coexisting liquid compositions.`:null})(),ta=!!po||!!ge||mo.length>0||!!vo||!!Po||o==="gibbsmap";d.useEffect(()=>{ta&&Io(!0)},[ta]);const ht=Hn||o==="ternary",Ct=(Hn||o==="ternary"||o==="scan"&&ga.includes(s))&&!(In&&be==="equationOfState"),ye=Ta(s),Fe=ye.includes(yn)?yn:ye[0]??"",ft=o==="scan"&&ye.length>1&&!(In&&(be==="transportLiquidVisc"||be==="transportLiquidCond")),Ge=l==="T"?"T":"P",So=o==="gibbsmap"?`Equilibrium map — iso-lines of ${wn&&n.includes(wn)?wn:n[n.length-1]??"product"} mole fraction over T × log-P by Gibbs-energy minimisation (the ATOMS you fed, redistributed to minimum G at each cell). Labelled industrial window + a user-declared kinetic band; unconverged cells marked, never interpolated. Click any cell for its full composition + the gibbsReactor dict.${$n!==0?` ΔT approach = ${$n} K: reaction equilibrium at T+ΔT, physical state at T (empirical; ghost ΔT=0 contours underneath).`:""}`:o==="phase"?"Pure-compound P–T phase diagram — liquid–vapour saturation curve to the critical point (AmbroseWalton corresponding states; marks Tc, Pc, normal b.p.). Solid region omitted — needs triple-point / ΔHfus data.":o==="psychro"?`Psychrometric chart at ${cn(k,V)} ${fn(V)} — humidity ratio Y vs dry-bulb T (carrier = lower-Tb, condensable = higher-Tb). Saturation + relative-humidity + adiabatic-saturation + true wet-bulb (via the Lewis number) curves.`:o==="scaling"?`Membrane-scaling audit — SI = log₁₀(IAP/K) per mineral vs water recovery; concentrate totals = feed/(1−r) (pure water removal), ${zn==="solve"?"pH solved from electroneutrality per point (the dashed pH curve rides the right axis)":`pH held at ${_} across the scan`}, ${mn==="open"?`open to CO₂(g) at pCO₂ = ${Vn} atm — DIC set by gas–liquid equilibrium (degassing allowed)`:"closed system — DIC concentrates with the water"}. ${he==="pitzer"?"Pitzer-HMW activity (validated vs HMW-1984 seawater) — quantitative to I ≈ 6 mol/kg in brines":"Davies activity — quantitative to I ≈ 0.5 mol/kg, indicative beyond"}. SI > 0 ⇒ the mineral precipitates.${Ce?` Equilibrium ON: ${Pa.join(", ")} driven to SI = 0 — plot SIeq_<m> (clamped) or scale_<m> (the deposit curve${te>0?", kgday_<m> rated by feed flow":""}). EQUILIBRIUM CEILING — the thermodynamic maximum, NOT a kinetic deposit prediction.`:""}`:o==="steam"?Pn==="saturation"?"Saturated-steam table — IAPWS-IF97 (R7-97(2012)), the industrial water formulation; regions 1/2 evaluated ON the region-4 saturation line (valid 0.01–350 °C). Mass-basis SI columns; pick the property family above.":`Steam isobar at ${cn(fe,V)} ${fn(V)} — IAPWS-IF97 (R7-97(2012)), the industrial water formulation; h, s, v, cp vs T (mass-basis SI). A subcritical isobar jumps at the Tsat crossing — the engine announces it.`:o==="ternaryLle"?`Ternary solubility (LLE) at ${tn(q,M).toFixed(1)} ${gn(M)}, ${cn(k,V)} ${fn(V)} — miscibility regions + tie-lines; activity from UNIFAC (group contribution, no fitted pairs)`:Fn?`Ternary boiling-temperature SURFACE at P = ${cn(k,V)} ${fn(V)} — colour = T_bubble at each composition (a continuous surface, not contours or phase regions)`:Hn?o==="txy"?`Binary VLE — liquid composition swept 0→1 at ${cn(k,V)} ${fn(V)}`:o==="mccabe"?`McCabe-Thiele binary distillation at ${cn(k,V)} ${fn(V)} — the real y*(x) curve (engine) + the interactive staircase; turn R and q (pure-TS redraw, no re-solve)`:o==="flash"?`Binary flash at ${cn(k,V)} ${fn(V)} — the real y*(x) curve + the tie-line through the feed z; the lever rule gives V/F (pure-TS redraw, no re-solve)`:"Activity coefficients γ(x) — composition swept 0→1":Tc(s)?`${ya[s]??s} — transport correlation${Fe?` (${Fe})`:""}, computed from (T, x) only — independent of the equation of state · ${n.length>=2?`mixture xᵢ = 1/${n.length}`:"pure"} vs ${Ge}`:go==="pure"?`Pure-component ${s} vs ${Ge} — composition has no effect`:n.length>=2?`Equimolar mixture (xᵢ = 1/${n.length}) — ${s} vs ${Ge}`:`${s} vs ${Ge}`;if(n.length===0)return e.jsxs(nn,{style:{position:"absolute",inset:0,display:"flex",minHeight:0},children:[e.jsx(Sa,{selected:n,onAdd:Go,onRemove:Lo,vleContext:Hn||Fn,caseComponents:Fo,onEstimate:Wo,rail:r,unlockLine:Yo}),r.collapsed&&e.jsx(Oa,{count:n.length,onExpand:r.toggleCollapsed}),e.jsx(ua,{opened:jo,onClose:()=>fo(!1),prefillName:Bo}),e.jsx(nn,{style:{flex:1,minWidth:0,height:"100%",display:"flex",alignItems:"center",justifyContent:"center",padding:24},children:e.jsxs(vn,{gap:"xs",align:"center",maw:420,style:{textAlign:"center"},children:[e.jsx(S,{fw:600,size:"lg",children:"Property Explorer"}),e.jsxs(S,{size:"sm",c:"dimmed",children:["Pick one or more compounds from the browser on the left to compare their ",e.jsx("b",{children:"pure-component"})," properties (Psat, Cp, …) or a",e.jsx("b",{children:" mixture"})," scalar (Z, v_molar, …).  Pick exactly two VLE-able compounds for a binary ",e.jsx("b",{children:"T-x-y"})," diagram."]}),e.jsx(S,{size:"xs",c:"dimmed",children:"Tip: try benzene + toluene, or ethanol + water."})]})})]});const gt=o==="scan"?e.jsx(bn,{size:"sm",variant:"light",tt:"none",color:go==="pure"?"teal":"accent",children:go==="pure"?"PURE · one curve per compound · composition ignored":n.length>=2?`MIXTURE · equimolar (xᵢ = 1/${n.length})`:"MIXTURE · single component (x = 1.0)"}):null;return e.jsxs(nn,{style:{position:"absolute",inset:0,display:"flex",minHeight:0},children:[e.jsx(Sa,{selected:n,onAdd:Go,onRemove:Lo,vleContext:Hn||Fn,caseComponents:Fo,onEstimate:Wo,rail:r,unlockLine:Yo}),r.collapsed&&e.jsx(Oa,{count:n.length,onExpand:r.toggleCollapsed}),e.jsx(ua,{opened:jo,onClose:()=>fo(!1),prefillName:Bo}),e.jsxs(nn,{style:{flex:1,minWidth:0,height:"100%",display:"flex",flexDirection:"column",overflow:"hidden"},children:[e.jsx(nn,{style:{flexShrink:0,minHeight:44,padding:"6px 12px",overflowX:"auto",overflowY:"hidden",borderBottom:"1px solid light-dark(var(--mantine-color-gray-3), var(--mantine-color-dark-4))"},children:e.jsxs(N,{gap:"sm",wrap:"nowrap",align:"center",style:{minWidth:"fit-content"},children:[(()=>{const a=_o.filter(T=>Uo(T)===null||T.id===o),b=a.some(T=>ut.has(T.id));return e.jsx(nn,{className:b?"choupo-lens-pulse":void 0,style:{borderRadius:6},children:e.jsx(Ue,{size:"xs",color:"accent",value:o,onChange:T=>i(T),data:a.map(T=>({value:T.id,label:e.jsx(en,{label:T.label,withArrow:!0,openDelay:400,children:e.jsx("span",{children:bc[T.id]??T.label})})}))})})})(),o==="scan"&&e.jsxs(e.Fragment,{children:[e.jsx(_n,{label:"Property",children:e.jsx(Tn,{size:"xs",data:[{group:"pure component",items:Ja},{group:"mixture scalar",items:yc},{group:"transport (no EOS)",items:Va.map(a=>({value:a,label:ya[a]??a}))}],value:s,onChange:a=>m(a??"Psat"),w:170,allowDeselect:!1})}),e.jsx(_n,{label:"Axis",children:e.jsx(Tn,{size:"xs",data:["T","P"],value:l,onChange:a=>f(a??"T"),w:64,allowDeselect:!1})}),e.jsx(_n,{label:`from (${Vo})`,children:e.jsx(R,{size:"xs",value:Ve(p),onChange:a=>x(Jo(F(a,Ve(p)))),w:96})}),e.jsx(_n,{label:`to (${Vo})`,children:e.jsx(R,{size:"xs",value:Ve(O),onChange:a=>W(Jo(F(a,Ve(O)))),w:96})}),l==="P"&&e.jsx(_n,{label:`T (${gn(M)})`,children:e.jsx(R,{size:"xs",value:tn(q,M),onChange:a=>w(Gn(F(a,tn(q,M)),M)),w:90})})]}),o==="gibbsmap"&&e.jsxs(e.Fragment,{children:[n.map(a=>e.jsx(_n,{label:`feed ${a} [mol]`,children:e.jsx(R,{size:"xs",w:80,min:0,step:.5,value:ie[a]??1,onChange:b=>Ua({...ie,[a]:F(b,ie[a]??1)})})},a)),e.jsx(_n,{label:"T range [°C]",children:e.jsxs(N,{gap:4,wrap:"nowrap",children:[e.jsx(R,{size:"xs",w:72,value:Math.round(xe-273.15),onChange:a=>za(F(a,xe-273.15)+273.15)}),e.jsx(S,{size:"xs",c:"dimmed",children:"–"}),e.jsx(R,{size:"xs",w:72,value:Math.round(Ne-273.15),onChange:a=>$a(F(a,Ne-273.15)+273.15)})]})}),e.jsx(_n,{label:"P range [bar]",children:e.jsxs(N,{gap:4,wrap:"nowrap",children:[e.jsx(R,{size:"xs",w:72,value:Re/1e5,onChange:a=>Ya(F(a,Re/1e5)*1e5)}),e.jsx(S,{size:"xs",c:"dimmed",children:"–"}),e.jsx(R,{size:"xs",w:72,value:ke/1e5,onChange:a=>Qa(F(a,ke/1e5)*1e5)})]})}),e.jsx(_n,{label:"map of",children:e.jsx(Tn,{size:"xs",w:110,data:n,value:wn&&n.includes(wn)?wn:Co,onChange:a=>Za(a)})}),e.jsx(_n,{label:"advanced",children:e.jsx(sa,{size:"xs",checked:Ko,onChange:a=>{Xa(a.currentTarget.checked),a.currentTarget.checked||Mo(0)}})}),Ko&&e.jsx(_n,{label:"ΔT approach [K]",children:e.jsx(R,{size:"xs",w:80,min:-100,max:100,step:5,value:$n,onChange:a=>Mo(F(a,$n))})})]}),o==="scaling"&&e.jsxs(e.Fragment,{children:[e.jsx(en,{label:"Davies (extended Debye-Hückel): single I-controlled curve, quantitative to I ≈ 0.5 mol/kg, indicative beyond.  Pitzer HMW: ion-specific virial interactions (e.g. the Ca-SO4 2:2 pairing), validated vs HMW-1984 seawater to I ≈ 6 mol/kg.  The SI curves track at low I and FORK in brine — the recovery decision flips on the model.",multiline:!0,w:320,withArrow:!0,children:e.jsx(nn,{children:e.jsx(Ue,{size:"xs",color:"accent",value:he,onChange:a=>ja(a??"davies"),data:[{value:"davies",label:"Davies"},{value:"pitzer",label:"Pitzer"}]})})}),e.jsx(Zn,{label:"Water analysis",value:"",wide:!0,children:e.jsxs(vn,{gap:"xs",style:{width:320},children:[e.jsx(en,{label:"analysis units — mg/L converts to molality at ρ ≈ 1 kg/L (dilute); the synthesized dict always carries mol/kg water",multiline:!0,w:260,withArrow:!0,children:e.jsx(Tn,{label:"analysis",data:["mg/L","mol/kg"],value:Un,onChange:a=>ao(a??"mg/L"),allowDeselect:!1})}),e.jsx(N,{gap:"xs",grow:!0,children:va.map(({ion:a,mw:b})=>e.jsx(R,{label:a,min:0,value:Do(ue[a]??0,b),step:Un==="mg/L"?10:.001,decimalScale:Un==="mg/L"?2:6,onChange:T=>oe(A=>({...A,[a]:Math.max(0,ct(F(T,Do(A[a]??0,b)),b))}))},a))}),e.jsxs(N,{gap:"xs",grow:!0,children:[e.jsx(en,{label:"solved (electroneutrality): H+ joins the unknowns, charge balance closes the system per point — the engine announces the feed charge imbalance the solved pH absorbs.  given: the numeric pH is held across the scan (no degassing / alkalinity shift).",multiline:!0,w:300,withArrow:!0,children:e.jsx(Tn,{label:"pH",allowDeselect:!1,data:[{value:"solve",label:"solved (electroneutrality)"},{value:"given",label:"given"}],value:zn,onChange:a=>h(a??"solve")})}),e.jsx(R,{label:"pH value",value:_,min:0,max:14,step:.1,disabled:zn==="solve",onChange:a=>on(F(a,_))})]}),e.jsxs(N,{gap:"xs",grow:!0,children:[e.jsx(en,{label:"closed: every total (DIC included) concentrates as feed/(1−r).  open (CO₂): the concentrate equilibrates with the atmosphere — a(CO2aq) pinned by Henry, DIC a solved outcome (degassing / invasion allowed).",multiline:!0,w:300,withArrow:!0,children:e.jsx(Tn,{label:"system",allowDeselect:!1,data:[{value:"closed",label:"closed"},{value:"open",label:"open (CO₂)"}],value:mn,onChange:a=>ae(a??"closed")})}),mn==="open"&&e.jsx(R,{label:"pCO₂ (atm)",value:Vn,min:0,step:1e-4,decimalScale:6,onChange:a=>Ga(Math.max(0,F(a,Vn)))}),e.jsx(R,{label:`T (${gn(M)})`,value:Number(tn(we,M).toFixed(2)),onChange:a=>La(Gn(F(a,tn(we,M)),M))})]}),e.jsx(en,{label:"off: SI only — how supersaturated each mineral is vs recovery (the propensity curve).  on: let the scaling minerals (calcite, gypsum) precipitate to SI = 0 — the engine reports SIeq_<m> (clamped at 0), n_<m> and scale_<m> (the deposit curve).  EQUILIBRIUM CEILING: the thermodynamic maximum (SI→0, infinite time, no nucleation barrier), NOT a kinetic deposit prediction — real scale ≤ ceiling, antiscalants act on kinetics this cannot see.",multiline:!0,w:320,withArrow:!0,children:e.jsx(Tn,{label:"equilibrium",allowDeselect:!1,data:[{value:"off",label:"off — SI only (propensity)"},{value:"on",label:"on — precipitate to SI = 0"}],value:Ce?"on":"off",onChange:a=>Ba(a==="on")})}),Ce&&e.jsx(en,{label:"feed volumetric flow — enables the kg/day scale-rate column (kgday_<m>).  Optional even with equilibrium on: without it the engine still gives the precipitated amount in mol/kg.",multiline:!0,w:280,withArrow:!0,children:e.jsx(R,{label:"feed flow (m³/h)",value:te,min:0,step:1,onChange:a=>Wa(Math.max(0,F(a,te)))})}),e.jsxs(N,{gap:"xs",grow:!0,children:[e.jsx(R,{label:"recovery from",value:Me,min:0,max:.98,step:.05,onChange:a=>nt(F(a,Me))}),e.jsx(R,{label:"to",value:Ke,min:.01,max:.99,step:.05,onChange:a=>et(F(a,Ke))})]})]})})]}),o==="steam"&&(()=>{const a=Pn==="saturation"?io:so,b=Pn==="saturation"?ro:lo,T=Pn==="saturation"?tt:rt,A=Pn==="saturation"?it:st,$=Pn==="saturation"?Da:Fa,U=$[to]?to:"h";return e.jsxs(e.Fragment,{children:[e.jsx(en,{label:"saturation curve: the region-4 line with the f/g property pairs (regions 1/2 evaluated on the line, valid 0.01–350 °C).  isobar: h, s, v, cp vs T at fixed P — crossing Tsat jumps the properties.",multiline:!0,w:280,withArrow:!0,children:e.jsx(nn,{children:e.jsx(Ue,{size:"xs",color:"accent",value:Pn,onChange:z=>ot(z??"saturation"),data:[{value:"saturation",label:"saturation"},{value:"isobar",label:"isobar"}]})})}),e.jsx(Zn,{label:"Steam",value:$[U]?.label??U,children:e.jsxs(vn,{gap:"xs",style:{width:240},children:[Pn==="isobar"&&e.jsx(R,{label:`P (${fn(V)})`,value:cn(fe,V),onChange:z=>lt(Le(F(z,cn(fe,V)),V))}),e.jsxs(N,{gap:"xs",grow:!0,children:[e.jsx(R,{label:`from (${gn(M)})`,value:Number(tn(a,M).toFixed(2)),onChange:z=>T(Gn(F(z,tn(a,M)),M))}),e.jsx(R,{label:`to (${gn(M)})`,value:Number(tn(b,M).toFixed(2)),onChange:z=>A(Gn(F(z,tn(b,M)),M))})]}),e.jsx(en,{label:"one property family at a time — the full table mixes magnitudes (psat ~10⁷ Pa beside v_f ~10⁻³ m³/kg) that flatten each other on a shared axis",multiline:!0,w:260,withArrow:!0,children:e.jsx(Tn,{label:"property",allowDeselect:!1,data:Object.entries($).map(([z,K])=>({value:z,label:K.label})),value:U,onChange:z=>at(z??"h")})})]})})]})})(),o==="ternaryLle"&&e.jsx(Zn,{label:"T",value:`${tn(q,M).toFixed(1)} ${gn(M)}`,children:e.jsx(R,{size:"xs",label:`T (${gn(M)})`,value:tn(q,M),w:130,onChange:a=>w(Gn(F(a,tn(q,M)),M))})}),(Hn||Fn||o==="scan"&&l==="T")&&e.jsx(Zn,{label:"P",value:`${cn(k,V)} ${fn(V)}`,children:e.jsx(R,{size:"xs",label:`P (${fn(V)})`,value:cn(k,V),w:130,onChange:a=>pn(Le(F(a,cn(k,V)),V))})}),ht&&e.jsx(Zn,{label:"γ",value:Q,tip:"liquid activity model: ideal = Raoult (no azeotrope); NRTL/Wilson auto-resolve curated binary pairs by name, else that pair is ideal; UNIFAC is PREDICTIVE (γ from molecular groups, no fitted pairs) — a component without a group decomposition is treated as ideal",children:e.jsx(Tn,{size:"xs",label:"γ model",data:["ideal","NRTL","Wilson","UNIFAC"],value:Q,onChange:a=>_e(a??"NRTL"),w:150,allowDeselect:!1})}),Ct&&e.jsx(Zn,{label:"EoS",value:u,tip:"vapour equation of state: idealGas ⇒ Z = 1; SRK/PR are cubic real-gas models",children:e.jsx(Tn,{size:"xs",label:"EoS",data:["idealGas","SRK","PR"],value:u,onChange:a=>I(a??"idealGas"),w:150,allowDeselect:!1})}),ft&&e.jsx(Zn,{label:"model",value:Fe,tip:"transport correlation, chosen WITHIN a family (e.g. Andrade vs Vogel) — a sibling of the EOS, never driven by it; both move the curve, so you SEE which you commit to",children:e.jsx(Tn,{size:"xs",label:"model",data:ye,value:Fe,onChange:a=>jn(a??ye[0]),w:150,allowDeselect:!1})}),xn&&e.jsxs(N,{gap:8,align:"center",wrap:"nowrap",children:[e.jsx(en,{label:"overlay several models of the same family and SEE the spread (≤3)",withArrow:!0,multiline:!0,w:240,children:e.jsx(sa,{size:"xs",checked:In,onChange:a=>Ae(a.currentTarget.checked),label:"compare",styles:{label:{fontSize:11}}})}),In&&e.jsx(de.Group,{multiple:!0,value:Zo,onChange:a=>He(a.slice(0,3)),children:e.jsx(N,{gap:4,wrap:"nowrap",children:xn.models.map(a=>e.jsx(de,{size:"xs",value:a,color:"accent",children:a},a))})})]}),e.jsxs(ce,{position:"bottom-end",withArrow:!0,shadow:"md",children:[e.jsx(ce.Target,{children:e.jsx(en,{label:o==="psychro"?"chart options":"resolution & display options",withArrow:!0,children:e.jsx(Pe,{variant:"default",size:"md","aria-label":"options",children:e.jsx(Dt,{size:16})})})}),e.jsx(ce.Dropdown,{children:e.jsxs(vn,{gap:"xs",children:[o==="psychro"&&e.jsxs(e.Fragment,{children:[e.jsxs(N,{gap:"xs",grow:!0,children:[e.jsx(R,{label:`T from (${gn(M)})`,value:Number(tn(c,M).toFixed(1)),step:5,decimalScale:1,onChange:a=>C(Gn(F(a,tn(c,M)),M))}),e.jsx(R,{label:`T to (${gn(M)})`,value:Number(tn(y,M).toFixed(1)),step:5,decimalScale:1,onChange:a=>g(Gn(F(a,tn(y,M)),M))})]}),e.jsx(R,{label:`P (${fn(V)})`,value:cn(k,V),onChange:a=>pn(Le(F(a,cn(k,V)),V)),w:260}),e.jsxs(N,{gap:"xs",grow:!0,children:[e.jsx(R,{label:"RH from (%)",value:Wn,min:0,max:99,onChange:a=>sn(F(a,Wn))}),e.jsx(R,{label:"RH to (%)",value:Rn,min:1,max:99,onChange:a=>Ee(F(a,Rn))}),e.jsx(R,{label:"RH step (%)",value:kn,min:1,max:50,onChange:a=>ne(F(a,kn))})]}),e.jsx(R,{label:`ΔT between sat. lines (${gn(M)})`,value:ee,min:5,max:50,step:5,onChange:a=>eo(F(a,ee)),w:260,description:"spacing of the wet-bulb / adiabatic-saturation anchor lines"}),e.jsx(R,{label:"Y max (0=auto)",value:me,min:0,step:.05,decimalScale:3,onChange:a=>oo(F(a,me)),w:260,description:"auto = drying band; raise to see full saturation"})]}),e.jsx(R,{label:Fn?"grid (intervals per edge)":"points",value:G,onChange:a=>Cn(F(a,G)),w:260,min:2,description:Fn?"more = finer triangle, slower":o==="scaling"?"recovery points across the scan":"samples along the axis"}),o==="ternaryLle"&&e.jsx(R,{label:"tie-line stride",value:an,onChange:a=>L(F(a,an)),w:260,min:1,description:"draw a tie-line every Nth split node (higher = fewer lines)"})]})})]}),co&&e.jsxs(N,{gap:6,wrap:"nowrap",children:[e.jsx(ze,{size:"xs"}),e.jsx(S,{size:"xs",c:"dimmed",children:"computing…"})]}),e.jsx(nn,{style:{flex:1,minWidth:8}}),o==="mccabe"&&dn&&e.jsx(en,{label:"Open the McCabe-Thiele analyzer full-window in a new tab",withArrow:!0,children:e.jsx(Pe,{variant:"subtle",size:"md",color:"accent","aria-label":"pop out McCabe analyzer",onClick:()=>qt({csv:Te(dn,"liquid_stable"),compA:n[0]??"",compB:n[1]??"",P:k,model:Q}),children:e.jsx(_t,{size:16})})}),e.jsx(en,{label:"Open the matching section of the Theory Guide (or press F1)",withArrow:!0,children:e.jsx(Pe,{component:"a",href:yo,target:"_blank",rel:"noopener noreferrer",variant:"subtle",size:"md",color:"gray","aria-label":"open the Theory Guide",children:e.jsx(Gt,{size:16})})})]})}),e.jsx(nn,{style:{flex:1,minWidth:0,overflow:"hidden",padding:16,paddingTop:12,display:"flex",flexDirection:"column"},children:e.jsxs(vn,{gap:"sm",style:{flex:1,minHeight:0},children:[dn?e.jsxs(nn,{style:{flex:1,minHeight:360,position:"relative"},children:[e.jsxs(nn,{style:{position:"absolute",top:4,left:8,zIndex:4,display:"flex",flexDirection:"column",gap:4,alignItems:"flex-start",pointerEvents:"none",maxWidth:"70%"},children:[e.jsxs(N,{gap:6,align:"center",style:{pointerEvents:"auto"},children:[e.jsx(bn,{size:"sm",variant:"outline",color:"gray",tt:"none",style:{background:"light-dark(rgba(255,255,255,0.7), rgba(0,0,0,0.5))"},children:n.join(" · ")}),gt]}),e.jsx(S,{size:"xs",c:"dimmed",style:{background:"light-dark(rgba(255,255,255,0.6), rgba(0,0,0,0.45))",borderRadius:4,padding:"1px 4px",lineHeight:1.3},children:So})]}),o==="phase"?e.jsx(Nd,{csv:dn,comp:n[0]??"",tc:un(n[0]??"",Z)?.tc,pc:un(n[0]??"",Z)?.pc,tb:un(n[0]??"",Z)?.tb}):o==="psychro"?e.jsx(Md,{csv:dn,yMax:me}):o==="binaryLle"?e.jsx(Kd,{csv:dn,compA:n[0]??"",compB:n[1]??""}):o==="mccabe"?e.jsx(It,{csv:Te(dn,"liquid_stable"),compA:n[0]??"",compB:n[1]??"",P:k}):o==="flash"?e.jsx(Dd,{csv:Te(dn,"liquid_stable"),compA:n[0]??"",compB:n[1]??"",P:k}):o==="gibbsmap"&&hn.gibbsmap?e.jsx(Kt,{op:{elements:hn.gibbsmap.elements,species:hn.gibbsmap.species.map(a=>({name:a.name,atoms:a.atoms})),feed:hn.gibbsmap.feed,metric:hn.gibbsmap.metric},csv:dn}):e.jsx(kt,{csv:o==="scaling"?Te(dn,"I"):o==="txy"?Te(dn,"liquid_stable"):o==="steam"?Sc(dn,Pn,to):dn,filename:On,referenceLines:o==="scaling"?Pc:void 0,secondaryColumn:o==="scaling"?"pH":void 0,txyPartner:o==="txy"?n[1]:void 0,txyP:o==="txy"?k:void 0,ternaryLabels:n.length===3?[n[0],n[1],n[2]]:void 0}),co&&e.jsx(nn,{style:{position:"absolute",inset:0,display:"flex",alignItems:"center",justifyContent:"center",background:"light-dark(rgba(255,255,255,0.45), rgba(0,0,0,0.45))"},children:e.jsxs(N,{gap:8,children:[e.jsx(ze,{size:"sm"}),e.jsx(S,{size:"sm",c:"dimmed",children:"recomputing…"})]})})]}):co?e.jsx(nn,{style:{flex:1,minHeight:200,display:"flex",alignItems:"center",justifyContent:"center"},children:e.jsxs(N,{gap:8,children:[e.jsx(ze,{size:"sm"}),e.jsxs(S,{size:"sm",c:"dimmed",children:["computing — ",So]})]})}):e.jsx(nn,{style:{flex:1,minHeight:200,display:"flex",alignItems:"center",justifyContent:"center"},children:e.jsx(S,{size:"sm",c:"dimmed",ta:"center",maw:460,children:So})}),Bn&&dn&&(()=>{const a=Mt(Bn.property,ho),b=a.conv(Bn.spread.absMax)-a.conv(0),T=a.unit&&a.unit!=="—"?` ${a.unit}`:"";return e.jsxs(N,{gap:8,align:"center",wrap:"wrap",children:[Bn.models.map((A,$)=>e.jsx(bn,{size:"sm",variant:"light",tt:"none",styles:{root:{color:J.series[$%J.series.length],borderColor:J.series[$%J.series.length],border:"1px solid"}},children:A},A)),e.jsxs(S,{size:"xs",c:"dimmed",children:["spread: max Δ ",b.toPrecision(3),T," (",Bn.spread.relMaxPct.toFixed(1),"%)"]})]})})()]})}),(()=>{const a=[];if(po&&a.push(e.jsx(qn,{color:"red",variant:"light",children:po},"err")),ge&&a.push(e.jsx(qn,{color:"yellow",variant:"light",title:"Cannot plot",children:ge},"reason")),mo.length>0&&a.push(e.jsx(qn,{color:"yellow",variant:"light",title:"Solver advisory",children:mo.map(A=>e.jsx(S,{size:"xs",children:A},A))},"adv")),vo&&a.push(e.jsx(qn,{color:"orange",variant:"light",title:"Assuming ideal mixing — not your real system",children:e.jsx(S,{size:"xs",children:vo})},"ideal")),Po&&a.push(e.jsx(qn,{color:"orange",variant:"light",title:"Heteroazeotrope — flat three-phase line",children:e.jsx(S,{size:"xs",children:Po})},"lle")),o==="gibbsmap"){const A={};for(const z of n){const K=We(un(z,Z)?.formula??""),j=ie[z]??1;for(const[B,Y]of Object.entries(K))A[B]=(A[B]??0)+Y*j}const $=Object.entries(A).map(([z,K])=>`${z}: ${K.toPrecision(3)}`).join(" · "),U=n.filter(z=>Object.keys(We(un(z,Z)?.formula??"")).length===0);a.push(e.jsxs(qn,{color:"blue",variant:"light",title:"A Gibbs map needs no reaction — it redistributes atoms",children:[e.jsxs(S,{size:"xs",children:["Equilibrium finds the composition of minimum Gibbs energy given the atoms you fed; no reaction is written.  Fed atoms (mol): ",e.jsx("b",{children:$||"—"}),". Each map cell holds those totals fixed and solves for the composition that minimises G at that (T, P); click any cell for its full answer."]}),U.length>0&&e.jsxs(S,{size:"xs",c:"orange",mt:4,children:["Formula not parseable for: ",U.join(", ")," — the atom matrix will be wrong.  Pick species with plain formulas (e.g. N2, H2, NH3)."]})]},"gm-explain"))}const b=[];aa&&b.push(e.jsx(S,{size:"xs",c:"dimmed",children:aa},"pair")),oa.length>0&&b.push(e.jsxs(S,{size:"xs",c:"dimmed",children:["No vapour pressure (curve not shown): ",oa.join(", ")]},"skip")),To&&b.push(e.jsxs(S,{size:"xs",c:"dimmed",children:["ionic strength I = ",To.first.toPrecision(3)," → ",To.last.toPrecision(3)," mol/kg across the scan — ",he==="pitzer"?"Pitzer-HMW activity is quantitative to I ≈ 6 mol/kg (brine-grade)":"Davies activity is quantitative to I ≈ 0.5 mol/kg"]},"i"));const T=a.length;return e.jsxs(nn,{style:{flexShrink:0,padding:"4px 12px 8px",borderTop:"1px solid light-dark(var(--mantine-color-gray-3), var(--mantine-color-dark-4))"},children:[e.jsxs(N,{gap:"xs",wrap:"nowrap",align:"center",children:[e.jsx(En,{variant:"subtle",size:"compact-xs",color:"gray",onClick:()=>Io(A=>!A),leftSection:T>0?e.jsx(bn,{size:"xs",circle:!0,color:"orange",variant:"filled",children:T}):void 0,children:uo?"Hide details":T>0?"Honesty & details":"Details"}),e.jsx(En,{variant:"subtle",size:"compact-xs",onClick:()=>dt(A=>!A),children:qo?"Hide propsDict":"Author → copy propsDict"}),!uo&&T===0&&Hn&&e.jsx(S,{size:"xs",c:"dimmed",style:{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:"NRTL/Wilson pairs auto-resolve by name; absent → ideal (no azeotrope)."})]}),e.jsx(Eo,{in:uo,children:e.jsxs(vn,{gap:6,mt:6,children:[a,b,Hn&&e.jsx(S,{size:"xs",c:"dimmed",children:"NRTL/Wilson pairs auto-resolve by name; absent → ideal (no azeotrope)."})]})}),e.jsx(Eo,{in:qo,children:e.jsxs(vn,{gap:4,mt:6,children:[e.jsxs(S,{size:"xs",c:"dimmed",children:["Create or open a case, then put this block in ",e.jsx("code",{children:"system/propsDict"})," under",e.jsx("code",{children:" operations ( … )"}),"; keep ",e.jsx("code",{children:"constant/propertyDict"})," in sync with the components/models above, and ",e.jsx("code",{children:"runCase"}),"."]}),e.jsx(N,{gap:"xs",children:e.jsx(Jt,{value:Qo,children:({copied:A,copy:$})=>e.jsx(En,{size:"xs",variant:A?"filled":"light",color:"accent",onClick:$,children:A?"Copied ✓":"Copy propsDict"})})}),e.jsx(Et,{block:!0,style:{fontSize:11,maxHeight:200,overflow:"auto"},children:Qo})]})})]})})()]})]})}function Sa({selected:n,onAdd:t,onRemove:o,vleContext:i=!1,caseComponents:r,onEstimate:s,rail:m,unlockLine:l}){const[f,c]=d.useState(!1),C=m.collapsed,y=wt();return d.useEffect(()=>{if(typeof window>"u"||!y)return;const g=window.requestAnimationFrame(()=>window.dispatchEvent(new Event("resize")));return()=>window.cancelAnimationFrame(g)},[C,y]),e.jsxs(nn,{onTransitionEnd:g=>{g.propertyName==="width"&&window.dispatchEvent(new Event("resize"))},style:{width:C?0:m.width,flexShrink:0,height:"100%",padding:C?0:12,overflow:"hidden",position:"relative",transition:y?"none":"width 180ms ease, padding 180ms ease",borderRight:C?"none":"1px solid light-dark(var(--mantine-color-gray-3), var(--mantine-color-dark-4))"},children:[e.jsxs(N,{justify:"space-between",align:"center",mb:6,wrap:"nowrap",gap:4,children:[e.jsx(S,{size:"xs",fw:700,c:"dimmed",style:{letterSpacing:.5},children:"SET"}),e.jsx(en,{label:"Collapse the component browser (shortcut: [ )",withArrow:!0,children:e.jsx(Pe,{variant:"subtle",size:"sm",color:"gray","aria-label":"collapse component browser",onClick:m.toggleCollapsed,children:e.jsx(xt,{size:15})})})]}),e.jsx(nn,{style:{height:"calc(100% - 28px)"},children:e.jsx(Bd,{selected:n,onAdd:t,onRemove:o,vleContext:i,caseComponents:r,onEstimate:s,unlockLine:l})}),!C&&e.jsx(nn,{onPointerDown:m.onPointerDown,onDoubleClick:m.reset,onPointerEnter:()=>c(!0),onPointerLeave:()=>c(!1),title:"drag to resize · double-click to reset",style:{position:"absolute",top:0,right:-3,width:6,height:"100%",cursor:"ew-resize",zIndex:5,background:f?`color-mix(in srgb, ${J.accent} 30%, transparent)`:"transparent",transition:"background 120ms"}})]})}function _n({label:n,children:t}){return e.jsxs(N,{gap:4,wrap:"nowrap",align:"center",style:{flexShrink:0},children:[e.jsx(S,{size:"xs",c:"dimmed",style:{whiteSpace:"nowrap"},children:n}),t]})}function Zn({label:n,value:t,tip:o,wide:i=!1,children:r}){const s=e.jsxs(En,{size:"xs",variant:"default",rightSection:e.jsx(Rt,{size:13}),style:{flexShrink:0},children:[e.jsx(S,{span:!0,size:"xs",c:"dimmed",mr:t?4:0,children:n}),t&&e.jsx(S,{span:!0,size:"xs",fw:600,children:t})]});return e.jsxs(ce,{position:"bottom-start",withArrow:!0,shadow:"md",width:i?void 0:220,children:[e.jsx(ce.Target,{children:o?e.jsx(en,{label:o,multiline:!0,w:280,withArrow:!0,openDelay:300,children:s}):s}),e.jsx(ce.Dropdown,{children:r})]})}function Oa({count:n,onExpand:t}){const[o,i]=d.useState(!1);return e.jsx(en,{label:"Show the component browser (shortcut: [ )",withArrow:!0,position:"right",children:e.jsxs(nn,{onClick:t,onPointerEnter:()=>i(!0),onPointerLeave:()=>i(!1),role:"button","aria-label":"show component browser",tabIndex:0,onKeyDown:r=>{(r.key==="Enter"||r.key===" ")&&(r.preventDefault(),t())},style:{width:28,flexShrink:0,height:"100%",cursor:"pointer",display:"flex",flexDirection:"column",alignItems:"center",gap:8,paddingTop:10,borderRight:"1px solid light-dark(var(--mantine-color-gray-3), var(--mantine-color-dark-4))",background:o?"light-dark(var(--mantine-color-gray-1), var(--mantine-color-dark-6))":"transparent",transition:"background 120ms"},children:[e.jsx(Nt,{size:15,color:"var(--mantine-color-dimmed)"}),e.jsxs(S,{size:"xs",fw:700,c:"dimmed",style:{writingMode:"vertical-rl",letterSpacing:.5,userSelect:"none"},children:["SET · ",n]})]})})}export{Jc as ExploreWorkspace};
