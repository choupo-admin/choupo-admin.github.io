import{at as y,bB as m,bc as p}from"./index-D4bTD5ca.js";import{b as s}from"./catalogue-Ceh_ZpWX.js";/**
 * @license @tabler/icons-react v3.44.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */const _=[["path",{d:"M3 19a9 9 0 0 1 9 0a9 9 0 0 1 9 0",key:"svg-0"}],["path",{d:"M3 6a9 9 0 0 1 9 0a9 9 0 0 1 9 0",key:"svg-1"}],["path",{d:"M3 6l0 13",key:"svg-2"}],["path",{d:"M12 6l0 13",key:"svg-3"}],["path",{d:"M21 6l0 13",key:"svg-4"}]],L=y("outline","book","Book",_),d={water:[{group:"H2O",count:1}],ethanol:[{group:"CH3",count:1},{group:"CH2",count:1},{group:"OH",count:1}],nButanol:[{group:"CH3",count:1},{group:"CH2",count:3},{group:"OH",count:1}],nHexane:[{group:"CH3",count:2},{group:"CH2",count:4}],benzene:[{group:"ACH",count:6}],C4H10:[{group:"CH3",count:2},{group:"CH2",count:2}],nPentane:[{group:"CH3",count:2},{group:"CH2",count:3}],isopentane:[{group:"CH3",count:3},{group:"CH2",count:1},{group:"CH",count:1}],nHeptane:[{group:"CH3",count:2},{group:"CH2",count:5}],C8H18:[{group:"CH3",count:2},{group:"CH2",count:6}],cyclohexane:[{group:"CH2",count:6}]};function f(n){let t;try{t=m(p(n))}catch{return null}const o=t.unifac;if(!o||typeof o!="object")return null;const e=o.groups;if(!Array.isArray(e))return null;const i=[];for(const a of e)a&&typeof a=="object"&&typeof a.group=="string"&&typeof a.count=="number"&&i.push({group:a.group,count:a.count});return i.length?i:null}function k(n){const t={};if(!n)return t;for(const[o,e]of Object.entries(n)){if(!/(^|\/)constant\/components\/[^/]+\.dat$/.test(o))continue;let i;try{i=m(p(e))}catch{continue}const a=typeof i.name=="string"?i.name:"";if(!a)continue;const c=f(e);c&&(t[a]=c)}return t}function x(n,t={}){return Object.prototype.hasOwnProperty.call(t,n)||Object.prototype.hasOwnProperty.call(d,n)}function j(n,t={}){const o={};for(const e of n){const i=t[e]??d[e];i&&(o[e]=i.map(a=>({group:a.group,count:a.count})))}return o}function g(n,t){const o=s(n[0],t)?.tb,e=s(n[1],t)?.tb;return typeof o=="number"&&typeof e=="number"&&e<o?[n[1],n[0]]:n}function E(n){const t=g(n.pair,n.catalogue),o=t[0],e=t[1],i=n.kind!=="gamma",a=i?["T_bubble",`y_eq_${o}`,"liquid_stable"]:[`gamma_${o}`,`gamma_${e}`];return{components:[...t],properties:a,axis:{variable:`x[${o}]`,from:0,to:1,n:Math.max(2,Math.round(n.n))},state:{P:n.P,composition:{[o]:.5,[e]:.5}},activityModel:{model:n.activity},equationOfState:{model:n.eos},...i?{vleTwoLiquid:!0}:{},...n.activity==="UNIFAC"?{unifacGroups:j(t,n.localUnifac)}:{},...n.componentFiles&&Object.keys(n.componentFiles).length>0?{componentFiles:n.componentFiles}:{}}}function M(n){const t=[...n.pair].sort((r,b)=>(s(r,n.catalogue)?.tb??0)-(s(b,n.catalogue)?.tb??0)),o=t[0]??"",e=t[t.length-1]??"",i=n.TminK-273.15,a=n.TmaxK-273.15,c=[];for(let r=n.rhFrom;r<=n.rhTo+1e-9&&r<100;r+=Math.max(1,n.rhStep))c.push(Math.round(r));const h=[],u=Math.max(5,n.wbStepC);for(let r=Math.ceil(i/u)*u;r<=Math.min(a,95);r+=u)h.push(r);return{components:[o,e],properties:[],axis:{variable:"T",from:0,to:1,n:2},state:{composition:{[o]:.5,[e]:.5}},psychrometry:{carrier:o,condensable:e,P:n.P,TminC:i,TmaxC:a,gridN:Math.max(20,Math.round(n.gridN)),rh:c,wetBulb:h},transport:{model:"Chung",thermalConductivity:"Eucken",diffusivity:"Fuller"},...n.componentFiles&&Object.keys(n.componentFiles).length>0?{componentFiles:{...n.componentFiles}}:{}}}const C=`/*---------------------------------------------------------------------------*\\
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
`,T=`/*---------------------------------------------------------------------------*\\
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
`,A=`/*---------------------------------------------------------------------------*\\
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
`,v=`/*---------------------------------------------------------------------------*\\
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
`,U=`/*---------------------------------------------------------------------------*\\
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
`,N=Object.assign({"../../../data/standards/parameters/NRTL/benzene-toluene.dat":C,"../../../data/standards/parameters/NRTL/ethanol-water.dat":T}),I=Object.assign({}),H=Object.assign({"../../../data/standards/parameters/UNIQUAC/aceticAcid-methylAcetate.dat":A,"../../../data/standards/parameters/UNIQUAC/methanol-methylAcetate.dat":v,"../../../data/standards/parameters/UNIQUAC/methylAcetate-water.dat":U});function l(n,t){const o=[];for(const e of Object.values(n))try{const a=m(p(e)).components;Array.isArray(a)&&a.length===2&&o.push({model:t,a:String(a[0]),b:String(a[1])})}catch{}return o}const D=[...l(N,"NRTL"),...l(I,"Wilson"),...l(H,"UNIQUAC")];function O(n,t,o){return D.some(e=>e.model===n&&(e.a===t&&e.b===o||e.a===o&&e.b===t))}export{L as I,k as a,E as b,x as c,O as h,g as o,M as p,j as u};
