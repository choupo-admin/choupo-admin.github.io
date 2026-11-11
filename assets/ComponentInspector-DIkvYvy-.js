import{eX as G,eb as K,bF as Q,bE as ee,bD as ne,bC as te,bA as ae,bz as re,by as ie,bx as oe,bw as de,bv as se,bu as le,bt as ce,bs as me,br as be,bo as ue,ev as pe,dF as e,aW as M,z as D,a$ as o,f as L,I as fe,aR as he,aZ as i,c as $,o as H,e as W,S as Y,R as ye,b4 as J,dN as ve,t as Ee}from"./index-DwpCMfwQ.js";import{C as Te}from"./Collapse-Dkmqtk-I.js";function d(n){return typeof n=="string"?n:typeof n=="number"?String(n):null}function T(n){return typeof n=="object"&&n!==null&&!Array.isArray(n)?n:null}function s(n){return typeof n=="number"?n:null}function B(n){if(!n)return"";const a=n.Trange;return typeof a=="string"?a==="unknown"?" · validity DECLARED UNKNOWN":` · ${a}`:Array.isArray(a)&&a.length===2&&typeof a[0]=="number"&&typeof a[1]=="number"?` · ${a[0]}–${a[1]} K`:""}function U(n,a="declared"){return n?d(n.model)??a:""}function ur(n){let a;try{a=G(K(n))}catch{return null}const l=d(a.name);if(!l)return null;const p=d(a.formula)??"",f=[{label:"name",value:l},{label:"formula",value:p||null,gap:"no molecular formula declared — the element balance refuses this component by name"},{label:"CAS",value:d(a.CAS),gap:"not declared in this record"},{label:"molar mass",value:s(a.MW)!==null?`${s(a.MW)} g/mol`:null,gap:"not declared — derivable from the formula, but the record does not state it"},{label:"InChI",value:d(a.InChI),gap:"not carried by Choupo records yet — ThermoML curation supplies it"},{label:"InChIKey",value:d(a.InChIKey),gap:"not carried by Choupo records yet — ThermoML curation supplies it"}],c=T(a.vaporPressure),t=T(a.idealGasHeatCapacity),h=T(a.liquidHeatCapacity),m=T(a.standardThermochemistry),R=T(a.liquidViscosity),j=s(a.Tc),S=s(a.Pc),N=a.role==="nonvolatile",y=(r,x,u,E,b)=>({key:r,label:x,present:u,detail:E,unlocks:b,verdict:"notClaimed"}),P=[y("criticals","Critical constants",j!==null&&S!==null,j!==null&&S!==null?`Tc ${j} K · Pc ${S} bar${s(a.omega)!==null?` · ω ${s(a.omega)}`:""}`:"","equation of state, corresponding states"),y("psat","Vapour pressure",c!==null,c!==null?`${U(c)}${B(c)}`:"",N?"not applicable — declared `role nonvolatile`":"VLE, flash, distillation"),y("vliq","Liquid molar volume",s(a.Vliq)!==null,s(a.Vliq)!==null?`${s(a.Vliq)} m³/mol`:"","pump work, liquid density"),y("cpIdealGas","Ideal-gas heat capacity",t!==null,t!==null?`${U(t)}${B(t)}`:"","energy balances, enthalpy on the gas rung"),y("gibbs","Formation datum",m!==null,m!==null?`ΔHf° ${s(m.dHf_298)??"—"} J/mol${s(m.s_298)!==null?` · s° ${s(m.s_298)} J/(mol·K)`:""} · ${d(m.referenceState)??"idealGas"} rung`:"","Gibbs reactor, heat of reaction"),y("cpLiquid","Liquid heat capacity",h!==null,h!==null?`${U(h,"polynomial")}${B(h)}`:"","sensible duty on a liquid stream"),y("viscosity","Liquid viscosity",R!==null,R!==null?Object.keys(R).join(" / "):"","pressure drop, transport")],_=[],v=(r,x,u)=>{const E=T(a[x]);E&&_.push({slot:r,model:x,detail:u(E)})};v("Activity (UNIQUAC)","uniquac",r=>`r ${s(r.r)??"—"} · q ${s(r.q)??"—"}`),v("Equation of state (PC-SAFT)","pcsaft",r=>`m ${s(r.m)??"—"} · σ ${s(r.sigma)??"—"} Å · ε/k ${s(r.epsilonK)??"—"} K`+(d(r.assocScheme)?` · assoc ${d(r.assocScheme)}`:" · non-associating")),v("Activity (COSMO-SAC)","cosmo",r=>`${Object.keys(r).length} parameter set(s): ${Object.keys(r).join(", ")}`),v("Electrolyte","electrolyte",r=>Object.keys(r).join(", ")),v("Solid phase","solidPhases",r=>Object.keys(r).join(", "));const A=T(a.groups);A&&_.push({slot:"Group contribution",model:"groups",detail:Object.keys(A).join(", ")});const g=[],k=d(a.reviewStatus);k&&g.push({kind:"reviewStatus",text:`reviewStatus ${k} — the engine announces this record [unreviewed]`,tone:"warn"}),N&&g.push({kind:"role",text:"role nonvolatile — no vapour pressure BY DESIGN; the absence above is a modelling choice, not a gap",tone:"info"});const C=T(a.provenance),w=[];if(C)for(const[r,x]of Object.entries(C)){const u=T(x),E=u?d(u.origin):null;if(!u||!E)continue;const b=T(u.uncertainty);w.push({field:r,origin:E,method:d(u.method)??"",methodVersion:d(u.methodVersion)??"",inputFingerprint:d(u.inputFingerprint)??"",uncertaintyStatus:b?d(b.status)??"":"",uncertaintyReason:b?d(b.reason)??"":""})}const O=w.filter(r=>r.origin!=="measured"&&r.origin!=="experimental"&&r.origin!=="literature");if(O.length>0){const r=[...new Set(O.map(b=>b.origin))].join(" / "),x=[...new Set(O.map(b=>b.method).filter(Boolean))].join(", "),u=O.map(b=>b.field).join(", "),E=O.filter(b=>b.uncertaintyStatus==="unquantified").length;g.push({kind:"estimate",tone:"warn",text:`origin ${r} on ${O.length} declared value(s): ${u}`+(x?` — ${x}`:"")+(E>0?`.  ${E} of them declare their uncertainty UNQUANTIFIED, which is the record's own answer and not a missing field.`:".")})}if(C&&d(C.source)==="synthetic"){const r=d(C.reason);g.push({kind:"synthetic",tone:"warn",text:"provenance source synthetic — NOT a real substance"+(r?` (${r})`:"")+".  Any number computed with it describes the algorithm, never a chemical."})}return{name:l,formula:p,identity:f,capabilities:P,models:_,valueOrigins:w,marks:g,raw:n}}const Ie=`/*--------------------------------*- Choupo -*--------------------------------*\\
  CURATION DOSSIER -- a scientific work record, NOT runtime property data.

  NOTHING IN THIS FILE IS VISIBLE TO THE SOLVER.  Record resolution looks only
  in <case>/constant/, data/standards/ and data/local/, so a file here is out
  of its reach BY CONSTRUCTION -- not by convention.

  Nothing here has been promoted.  Curation state belongs to the evidence
  process; runtime trust belongs to the numerical record actually admitted
  to data/standards/, and only an explicit human promotion moves one there
  (bin/curate/promote-from-dossier).

  MATURITY IS PER PROPERTY, not per component: the properties below may hold
  different verdicts, and any whole-component summary is DERIVED from them
  rather than stored beside them.

  Regenerated on every run.  Hand edits are lost.
\\*-----------------------------------------------------------------------------*/

component      12Butanediol;
reviewStatus   unreviewed;

properties
(
{
    property       vapourPressure;
    operation      fit_antoine;   // type vaporPressureFit
    model          "Antoine  log10(Psat[bar]) = A - B/(T + C)";
    verdict        validationRefused;
    refusal        "No independent experimental evidence remains after fitting.";

    fittedParameters
    {
        A  3.99270315729;
        B  1299.10344931;
        C  -144.779673926;
    }

    evidence
    {
        partitionFingerprint  "94e1dc304596fd11";   // frozen before the fit

        datasets
        (
        {
            role      fit;
            dataset   "constant/archiveExtracts/12Butanediol-vapourPressure-je400082c.dat";
            doi       "10.1021/je400082c";
            sha256    "45b473097c34d44a9a11577786b838439c05345f70703e65b8f716298765c316";
            provenance measured;
            archiveFile "je400082c.xml";
            system    "12Butanediol";
        }
        {
            role      fit;
            dataset   "constant/archiveExtracts/12Butanediol-vapourPressure-je5010824.dat";
            doi       "10.1021/je5010824";
            sha256    "244c7d3c2d7506d1914d46e14ff6706089ba194ab50a2f631e7cb95fbc4c9e3c";
            provenance measured;
            archiveFile "je5010824.xml";
            system    "12Butanediol";
        }
        );

        domain
        {
            coordinate  K;
            fit         { min 372.06; max 469.71; n 41; }
        }
    }

    metrics
    {
        r2InSample        0.999719120257;   // the model reproducing the points it was FITTED to
        //  NO HELD-OUT METRIC EXISTS.  r2InSample above is exactly that --
        //  in-sample -- and must not be read as an external check.
    }
}

);
`,xe=`/*--------------------------------*- Choupo -*--------------------------------*\\
  CURATION DOSSIER -- a scientific work record, NOT runtime property data.

  NOTHING IN THIS FILE IS VISIBLE TO THE SOLVER.  Record resolution looks only
  in <case>/constant/, data/standards/ and data/local/, so a file here is out
  of its reach BY CONSTRUCTION -- not by convention.

  Nothing here has been promoted.  Curation state belongs to the evidence
  process; runtime trust belongs to the numerical record actually admitted
  to data/standards/, and only an explicit human promotion moves one there
  (bin/curate/promote-from-dossier).

  MATURITY IS PER PROPERTY, not per component: the properties below may hold
  different verdicts, and any whole-component summary is DERIVED from them
  rather than stored beside them.

  Regenerated on every run.  Hand edits are lost.
\\*-----------------------------------------------------------------------------*/

component      12Propanediol;
reviewStatus   unreviewed;

properties
(
{
    property       vapourPressure;
    operation      fit_antoine;   // type vaporPressureFit
    model          "Antoine  log10(Psat[bar]) = A - B/(T + C)";
    verdict        validationRefused;
    refusal        "No independent experimental evidence remains after fitting.";

    fittedParameters
    {
        A  5.07289610269;
        B  1943.08268843;
        C  -77.5351376712;
    }

    evidence
    {
        partitionFingerprint  "32d9aca94ffe09a4";   // frozen before the fit

        datasets
        (
        {
            role      fit;
            dataset   "constant/archiveExtracts/12Propanediol-vapourPressure-je4004993.dat";
            doi       "10.1021/je4004993";
            sha256    "7815d74f34d9dd83acd32741c64e67fdafac5a7ce9f7933d781c46d6f048e9a9";
            provenance measured;
            archiveFile "je4004993.xml";
            system    "12Propanediol";
        }
        {
            role      fit;
            dataset   "constant/archiveExtracts/12Propanediol-vapourPressure-j.jct.2016.01.019.dat";
            doi       "10.1016/j.jct.2016.01.019";
            sha256    "67af4c62caba8fe9644d6ff093aebc32c6ebb933b139d8ff89e558561d21ba3a";
            provenance measured;
            archiveFile "j.jct.2016.01.019.xml";
            system    "12Propanediol";
        }
        {
            role      fit;
            dataset   "constant/archiveExtracts/12Propanediol-vapourPressure-j.fluid.2014.09.015.dat";
            doi       "10.1016/j.fluid.2014.09.015";
            sha256    "c915c8e5c543eb324df4dccdd4b61fefe8c48359a49da7b785b7fcf3f839feed";
            provenance measured;
            archiveFile "j.fluid.2014.09.015.xml";
            system    "12Propanediol";
        }
        {
            role      fit;
            dataset   "constant/archiveExtracts/12Propanediol-vapourPressure-je4009014.dat";
            doi       "10.1021/je4009014";
            sha256    "c5eac6f0f8b3da19f310f0c314d5b14644ef12d512a2a392befc5ce3d4f727af";
            provenance measured;
            archiveFile "je4009014.xml";
            system    "12Propanediol";
        }
        {
            role      fit;
            dataset   "constant/archiveExtracts/12Propanediol-vapourPressure-je100803e.dat";
            doi       "10.1021/je100803e";
            sha256    "ddf304812c4562713d4eed3173c86032fb293351f31bdf898e89a56685edaafd";
            provenance measured;
            archiveFile "je100803e.xml";
            system    "12Propanediol";
        }
        {
            role      fit;
            dataset   "constant/archiveExtracts/12Propanediol-vapourPressure-je034096z.dat";
            doi       "10.1021/je034096z";
            sha256    "e1dace98786fd0312c9b1ccef3145b20889fa12b4c6cd772be59b4f28f6fbf4f";
            provenance measured;
            archiveFile "je034096z.xml";
            system    "12Propanediol";
        }
        {
            role      fit;
            dataset   "constant/archiveExtracts/12Propanediol-vapourPressure-je5010824.dat";
            doi       "10.1021/je5010824";
            sha256    "244c7d3c2d7506d1914d46e14ff6706089ba194ab50a2f631e7cb95fbc4c9e3c";
            provenance measured;
            archiveFile "je5010824.xml";
            system    "12Propanediol";
        }
        );

        domain
        {
            coordinate  K;
            fit         { min 345.15; max 460.87; n 100; }
        }
    }

    metrics
    {
        r2InSample        0.999431134072;   // the model reproducing the points it was FITTED to
        //  NO HELD-OUT METRIC EXISTS.  r2InSample above is exactly that --
        //  in-sample -- and must not be read as an external check.
    }
}

);
`,Pe=`/*--------------------------------*- Choupo -*--------------------------------*\\
  CURATION DOSSIER -- a scientific work record, NOT runtime property data.

  NOTHING IN THIS FILE IS VISIBLE TO THE SOLVER.  Record resolution looks only
  in <case>/constant/, data/standards/ and data/local/, so a file here is out
  of its reach BY CONSTRUCTION -- not by convention.

  Nothing here has been promoted.  Curation state belongs to the evidence
  process; runtime trust belongs to the numerical record actually admitted
  to data/standards/, and only an explicit human promotion moves one there
  (bin/curate/promote-from-dossier).

  MATURITY IS PER PROPERTY, not per component: the properties below may hold
  different verdicts, and any whole-component summary is DERIVED from them
  rather than stored beside them.

  Regenerated on every run.  Hand edits are lost.
\\*-----------------------------------------------------------------------------*/

component      13Butanediol;
reviewStatus   unreviewed;

properties
(
{
    property       vapourPressure;
    operation      fit_antoine;   // type vaporPressureFit
    model          "Antoine  log10(Psat[bar]) = A - B/(T + C)";
    verdict        validationRefused;
    refusal        "No independent experimental evidence remains after fitting.";

    fittedParameters
    {
        A  5.02283492679;
        B  1987.11232708;
        C  -87.709183589;
    }

    evidence
    {
        partitionFingerprint  "ce3d3bd6bd1c4127";   // frozen before the fit

        datasets
        (
        {
            role      fit;
            dataset   "constant/archiveExtracts/13Butanediol-vapourPressure-je400082c.dat";
            doi       "10.1021/je400082c";
            sha256    "45b473097c34d44a9a11577786b838439c05345f70703e65b8f716298765c316";
            provenance measured;
            archiveFile "je400082c.xml";
            system    "13Butanediol";
        }
        {
            role      fit;
            dataset   "constant/archiveExtracts/13Butanediol-vapourPressure-je060419q.dat";
            doi       "10.1021/je060419q";
            sha256    "c791a3b4363a3e0b649cce98e59347f24487b4a1cd56a07836d1431ad241481a";
            provenance measured;
            archiveFile "je060419q.xml";
            system    "13Butanediol";
        }
        {
            role      fit;
            dataset   "constant/archiveExtracts/13Butanediol-vapourPressure-je060269j.dat";
            doi       "10.1021/je060269j";
            sha256    "02c8cb4d842126b8f3f721cab2b12b266f42b2da0534cbb9ac3acc39d86a0acf";
            provenance measured;
            archiveFile "je060269j.xml";
            system    "13Butanediol";
        }
        );

        domain
        {
            coordinate  K;
            fit         { min 288.3; max 688.2; n 44; }
        }
    }

    metrics
    {
        r2InSample        0.999850457607;   // the model reproducing the points it was FITTED to
        //  NO HELD-OUT METRIC EXISTS.  r2InSample above is exactly that --
        //  in-sample -- and must not be read as an external check.
    }
}

);
`,Se=`/*--------------------------------*- Choupo -*--------------------------------*\\
  CURATION DOSSIER -- a scientific work record, NOT runtime property data.

  NOTHING IN THIS FILE IS VISIBLE TO THE SOLVER.  Record resolution looks only
  in <case>/constant/, data/standards/ and data/local/, so a file here is out
  of its reach BY CONSTRUCTION -- not by convention.

  Nothing here has been promoted.  Curation state belongs to the evidence
  process; runtime trust belongs to the numerical record actually admitted
  to data/standards/, and only an explicit human promotion moves one there
  (bin/curate/promote-from-dossier).

  MATURITY IS PER PROPERTY, not per component: the properties below may hold
  different verdicts, and any whole-component summary is DERIVED from them
  rather than stored beside them.

  Regenerated on every run.  Hand edits are lost.
\\*-----------------------------------------------------------------------------*/

component      13Dioxolane;
reviewStatus   unreviewed;

properties
(
{
    property       vapourPressure;
    operation      fit_antoine;   // type vaporPressureFit
    model          "Antoine  log10(Psat[bar]) = A - B/(T + C)";
    verdict        validationRefused;
    refusal        "No independent experimental evidence remains after fitting.";

    fittedParameters
    {
        A  4.49674276195;
        B  1370.94467312;
        C  -42.8095391528;
    }

    evidence
    {
        partitionFingerprint  "2f9b89fdad12725c";   // frozen before the fit

        datasets
        (
        {
            role      fit;
            dataset   "constant/archiveExtracts/13Dioxolane-vapourPressure-acs.jced.6b00576.dat";
            doi       "10.1021/acs.jced.6b00576";
            sha256    "9f7efbb7dde9cf6bc27340bfd713813486a868d30ac415701e7553e8035529ec";
            provenance measured;
            archiveFile "acs.jced.6b00576.xml";
            system    "13Dioxolane";
        }
        {
            role      fit;
            dataset   "constant/archiveExtracts/13Dioxolane-vapourPressure-acs.jced.7b01091.dat";
            doi       "10.1021/acs.jced.7b01091";
            sha256    "2f400544f474c125dac0e126e44f9d88727847705fd32385bf9c21fa5860a78f";
            provenance measured;
            archiveFile "acs.jced.7b01091.xml";
            system    "13Dioxolane";
        }
        );

        domain
        {
            coordinate  K;
            fit         { min 275; max 350.77; n 22; }
        }
    }

    metrics
    {
        r2InSample        0.999872938033;   // the model reproducing the points it was FITTED to
        //  NO HELD-OUT METRIC EXISTS.  r2InSample above is exactly that --
        //  in-sample -- and must not be read as an external check.
    }
}

);
`,Re=`/*--------------------------------*- Choupo -*--------------------------------*\\
  CURATION DOSSIER -- a scientific work record, NOT runtime property data.

  NOTHING IN THIS FILE IS VISIBLE TO THE SOLVER.  Record resolution looks only
  in <case>/constant/, data/standards/ and data/local/, so a file here is out
  of its reach BY CONSTRUCTION -- not by convention.

  Nothing here has been promoted.  Curation state belongs to the evidence
  process; runtime trust belongs to the numerical record actually admitted
  to data/standards/, and only an explicit human promotion moves one there
  (bin/curate/promote-from-dossier).

  MATURITY IS PER PROPERTY, not per component: the properties below may hold
  different verdicts, and any whole-component summary is DERIVED from them
  rather than stored beside them.

  Regenerated on every run.  Hand edits are lost.
\\*-----------------------------------------------------------------------------*/

component      13Propanediol;
reviewStatus   unreviewed;

properties
(
{
    property       vapourPressure;
    operation      fit_antoine;   // type vaporPressureFit
    model          "Antoine  log10(Psat[bar]) = A - B/(T + C)";
    verdict        validationRefused;
    refusal        "No independent experimental evidence remains after fitting.";

    fittedParameters
    {
        A  6.1714490781;
        B  2687.65283506;
        C  -47.7069329261;
    }

    evidence
    {
        partitionFingerprint  "fe6d6ba3b80583da";   // frozen before the fit

        datasets
        (
        {
            role      fit;
            dataset   "constant/archiveExtracts/13Propanediol-vapourPressure-j.jct.2016.01.019.dat";
            doi       "10.1016/j.jct.2016.01.019";
            sha256    "67af4c62caba8fe9644d6ff093aebc32c6ebb933b139d8ff89e558561d21ba3a";
            provenance measured;
            archiveFile "j.jct.2016.01.019.xml";
            system    "13Propanediol";
        }
        {
            role      fit;
            dataset   "constant/archiveExtracts/13Propanediol-vapourPressure-je200766t.dat";
            doi       "10.1021/je200766t";
            sha256    "3d1646bd31387e679d96d72530e61de2b93919168e8d5b6ab8374ea28e90756a";
            provenance measured;
            archiveFile "je200766t.xml";
            system    "13Propanediol";
        }
        {
            role      fit;
            dataset   "constant/archiveExtracts/13Propanediol-vapourPressure-je060419q.dat";
            doi       "10.1021/je060419q";
            sha256    "c791a3b4363a3e0b649cce98e59347f24487b4a1cd56a07836d1431ad241481a";
            provenance measured;
            archiveFile "je060419q.xml";
            system    "13Propanediol";
        }
        {
            role      fit;
            dataset   "constant/archiveExtracts/13Propanediol-vapourPressure-j.jct.2015.01.014.dat";
            doi       "10.1016/j.jct.2015.01.014";
            sha256    "5c8580550fb1a1b95082bc597c78ea9f1c801a7cc2e58bd8d05705965ae7239c";
            provenance measured;
            archiveFile "j.jct.2015.01.014.xml";
            system    "13Propanediol";
        }
        );

        domain
        {
            coordinate  K;
            fit         { min 292.5; max 465.45; n 59; }
        }
    }

    metrics
    {
        r2InSample        0.999850829335;   // the model reproducing the points it was FITTED to
        //  NO HELD-OUT METRIC EXISTS.  r2InSample above is exactly that --
        //  in-sample -- and must not be read as an external check.
    }
}

);
`,je=`/*--------------------------------*- Choupo -*--------------------------------*\\
  CURATION DOSSIER -- a scientific work record, NOT runtime property data.

  NOTHING IN THIS FILE IS VISIBLE TO THE SOLVER.  Record resolution looks only
  in <case>/constant/, data/standards/ and data/local/, so a file here is out
  of its reach BY CONSTRUCTION -- not by convention.

  Nothing here has been promoted.  Curation state belongs to the evidence
  process; runtime trust belongs to the numerical record actually admitted
  to data/standards/, and only an explicit human promotion moves one there
  (bin/curate/promote-from-dossier).

  MATURITY IS PER PROPERTY, not per component: the properties below may hold
  different verdicts, and any whole-component summary is DERIVED from them
  rather than stored beside them.

  Regenerated on every run.  Hand edits are lost.
\\*-----------------------------------------------------------------------------*/

component      16Hexanediol;
reviewStatus   unreviewed;

properties
(
{
    property       vapourPressure;
    operation      fit_antoine;   // type vaporPressureFit
    model          "Antoine  log10(Psat[bar]) = A - B/(T + C)";
    verdict        validationRefused;
    refusal        "No independent experimental evidence remains after fitting.";

    fittedParameters
    {
        A  4.62625817626;
        B  1878.96615467;
        C  -119.142166127;
    }

    evidence
    {
        partitionFingerprint  "81213f6bd2f321cb";   // frozen before the fit

        datasets
        (
        {
            role      fit;
            dataset   "constant/archiveExtracts/16Hexanediol-vapourPressure-je0602465.dat";
            doi       "10.1021/je0602465";
            sha256    "8cb910c01f56fe689a15c7e4fc00042e55e61fac00edd3a7e8acadf9056a7e3f";
            provenance measured;
            archiveFile "je0602465.xml";
            system    "16Hexanediol";
        }
        );

        domain
        {
            coordinate  K;
            fit         { min 523.2; max 740.4; n 8; }
        }
    }

    metrics
    {
        r2InSample        0.99992757219;   // the model reproducing the points it was FITTED to
        //  NO HELD-OUT METRIC EXISTS.  r2InSample above is exactly that --
        //  in-sample -- and must not be read as an external check.
    }
}

);
`,Oe=`/*--------------------------------*- Choupo -*--------------------------------*\\
  CURATION DOSSIER -- a scientific work record, NOT runtime property data.

  NOTHING IN THIS FILE IS VISIBLE TO THE SOLVER.  Record resolution looks only
  in <case>/constant/, data/standards/ and data/local/, so a file here is out
  of its reach BY CONSTRUCTION -- not by convention.

  Nothing here has been promoted.  Curation state belongs to the evidence
  process; runtime trust belongs to the numerical record actually admitted
  to data/standards/, and only an explicit human promotion moves one there
  (bin/curate/promote-from-dossier).

  MATURITY IS PER PROPERTY, not per component: the properties below may hold
  different verdicts, and any whole-component summary is DERIVED from them
  rather than stored beside them.

  Regenerated on every run.  Hand edits are lost.
\\*-----------------------------------------------------------------------------*/

component      1Chlorobutane;
reviewStatus   unreviewed;

properties
(
{
    property       vapourPressure;
    operation      fit_antoine;   // type vaporPressureFit
    model          "Antoine  log10(Psat[bar]) = A - B/(T + C)";
    verdict        validationRefused;
    refusal        "No independent experimental evidence remains after fitting.";

    fittedParameters
    {
        A  4.05943317548;
        B  1222.5436349;
        C  -50.0646813494;
    }

    evidence
    {
        partitionFingerprint  "d3dfaf976cfc325e";   // frozen before the fit

        datasets
        (
        {
            role      fit;
            dataset   "constant/archiveExtracts/1Chlorobutane-vapourPressure-j.fluid.2006.02.009.dat";
            doi       "10.1016/j.fluid.2006.02.009";
            sha256    "294793403436783975100d8eaea9083144484e525d73d8310f0c45881e55d4a5";
            provenance measured;
            archiveFile "j.fluid.2006.02.009.xml";
            system    "1Chlorobutane";
        }
        {
            role      fit;
            dataset   "constant/archiveExtracts/1Chlorobutane-vapourPressure-j.jct.2003.09.009.dat";
            doi       "10.1016/j.jct.2003.09.009";
            sha256    "f2666d0d886d604130ea42f9b1e45049d90f2b20c516ab3851bf82ba85508acc";
            provenance measured;
            archiveFile "j.jct.2003.09.009.xml";
            system    "1Chlorobutane";
        }
        {
            role      fit;
            dataset   "constant/archiveExtracts/1Chlorobutane-vapourPressure-je800535c.dat";
            doi       "10.1021/je800535c";
            sha256    "b936ec60ecb4d987ff9b9ae630c23851eb127999e550127382ca762a4e9b3be6";
            provenance measured;
            archiveFile "je800535c.xml";
            system    "1Chlorobutane";
        }
        );

        domain
        {
            coordinate  K;
            fit         { min 278.15; max 351.61; n 34; }
        }
    }

    metrics
    {
        r2InSample        0.999986269418;   // the model reproducing the points it was FITTED to
        //  NO HELD-OUT METRIC EXISTS.  r2InSample above is exactly that --
        //  in-sample -- and must not be read as an external check.
    }
}

);
`,Ne=`/*--------------------------------*- Choupo -*--------------------------------*\\
  CURATION DOSSIER -- a scientific work record, NOT runtime property data.

  NOTHING IN THIS FILE IS VISIBLE TO THE SOLVER.  Record resolution looks only
  in <case>/constant/, data/standards/ and data/local/, so a file here is out
  of its reach BY CONSTRUCTION -- not by convention.

  Nothing here has been promoted.  Curation state belongs to the evidence
  process; runtime trust belongs to the numerical record actually admitted
  to data/standards/, and only an explicit human promotion moves one there
  (bin/curate/promote-from-dossier).

  MATURITY IS PER PROPERTY, not per component: the properties below may hold
  different verdicts, and any whole-component summary is DERIVED from them
  rather than stored beside them.

  Regenerated on every run.  Hand edits are lost.
\\*-----------------------------------------------------------------------------*/

component      1Decanol;
reviewStatus   unreviewed;

properties
(
{
    property       vapourPressure;
    operation      fit_antoine;   // type vaporPressureFit
    model          "Antoine  log10(Psat[bar]) = A - B/(T + C)";
    verdict        validationRefused;
    refusal        "No independent experimental evidence remains after fitting.";

    fittedParameters
    {
        A  2.62132060099;
        B  679.0944529;
        C  -244.597971488;
    }

    evidence
    {
        partitionFingerprint  "fd7f1aaf970487c1";   // frozen before the fit

        datasets
        (
        {
            role      fit;
            dataset   "constant/archiveExtracts/1Decanol-vapourPressure-acs.jced.8b00680.dat";
            doi       "10.1021/acs.jced.8b00680";
            sha256    "24e5d0a547f0ece199cef88e38a33059d446a79066ec16e532dde61242113b94";
            provenance measured;
            archiveFile "acs.jced.8b00680.xml";
            system    "1Decanol";
        }
        );

        domain
        {
            coordinate  K;
            fit         { min 469.23; max 496.88; n 13; }
        }
    }

    metrics
    {
        r2InSample        0.999480249483;   // the model reproducing the points it was FITTED to
        //  NO HELD-OUT METRIC EXISTS.  r2InSample above is exactly that --
        //  in-sample -- and must not be read as an external check.
    }
}

);
`,_e=`/*--------------------------------*- Choupo -*--------------------------------*\\
  CURATION DOSSIER -- a scientific work record, NOT runtime property data.

  NOTHING IN THIS FILE IS VISIBLE TO THE SOLVER.  Record resolution looks only
  in <case>/constant/, data/standards/ and data/local/, so a file here is out
  of its reach BY CONSTRUCTION -- not by convention.

  Nothing here has been promoted.  Curation state belongs to the evidence
  process; runtime trust belongs to the numerical record actually admitted
  to data/standards/, and only an explicit human promotion moves one there
  (bin/curate/promote-from-dossier).

  MATURITY IS PER PROPERTY, not per component: the properties below may hold
  different verdicts, and any whole-component summary is DERIVED from them
  rather than stored beside them.

  Regenerated on every run.  Hand edits are lost.
\\*-----------------------------------------------------------------------------*/

component      1HPerfluorooctane;
reviewStatus   unreviewed;

properties
(
{
    property       vapourPressure;
    operation      fit_antoine;   // type vaporPressureFit
    model          "Antoine  log10(Psat[bar]) = A - B/(T + C)";
    verdict        validationRefused;
    refusal        "No independent experimental evidence remains after fitting.";

    fittedParameters
    {
        A  5.01147480188;
        B  1773.6466087;
        C  -32.6227484683;
    }

    evidence
    {
        partitionFingerprint  "242986481513e147";   // frozen before the fit

        datasets
        (
        {
            role      fit;
            dataset   "constant/archiveExtracts/1HPerfluorooctane-vapourPressure-je050056e.dat";
            doi       "10.1021/je050056e";
            sha256    "dac8ea38ea8c1c85de34f3074ca3b0e7e923679796fa91160586aa7171f251d7";
            provenance measured;
            archiveFile "je050056e.xml";
            system    "1HPerfluorooctane";
        }
        );

        domain
        {
            coordinate  K;
            fit         { min 288.35; max 332.89; n 10; }
        }
    }

    metrics
    {
        r2InSample        0.999896365663;   // the model reproducing the points it was FITTED to
        //  NO HELD-OUT METRIC EXISTS.  r2InSample above is exactly that --
        //  in-sample -- and must not be read as an external check.
    }
}

);
`,ge=`/*--------------------------------*- Choupo -*--------------------------------*\\
  CURATION DOSSIER -- a scientific work record, NOT runtime property data.

  NOTHING IN THIS FILE IS VISIBLE TO THE SOLVER.  Record resolution looks only
  in <case>/constant/, data/standards/ and data/local/, so a file here is out
  of its reach BY CONSTRUCTION -- not by convention.

  Nothing here has been promoted.  Curation state belongs to the evidence
  process; runtime trust belongs to the numerical record actually admitted
  to data/standards/, and only an explicit human promotion moves one there
  (bin/curate/promote-from-dossier).

  MATURITY IS PER PROPERTY, not per component: the properties below may hold
  different verdicts, and any whole-component summary is DERIVED from them
  rather than stored beside them.

  Regenerated on every run.  Hand edits are lost.
\\*-----------------------------------------------------------------------------*/

component      1Octanol;
reviewStatus   unreviewed;

properties
(
{
    property       vapourPressure;
    operation      fit_antoine;   // type vaporPressureFit
    model          "Antoine  log10(Psat[bar]) = A - B/(T + C)";
    verdict        validationRefused;
    refusal        "No independent experimental evidence remains after fitting.";

    fittedParameters
    {
        A  4.00937961008;
        B  1350.83195851;
        C  -132.541417775;
    }

    evidence
    {
        partitionFingerprint  "b52a91c49cf1092f";   // frozen before the fit

        datasets
        (
        {
            role      fit;
            dataset   "constant/archiveExtracts/1Octanol-vapourPressure-j.tca.2013.03.018.dat";
            doi       "10.1016/j.tca.2013.03.018";
            sha256    "a2acfafefb550bb7ab462cca603bf427aea640ae4d9e8a413be28148c30c1f8c";
            provenance measured;
            archiveFile "j.tca.2013.03.018.xml";
            system    "1Octanol";
        }
        {
            role      fit;
            dataset   "constant/archiveExtracts/1Octanol-vapourPressure-je049600u.dat";
            doi       "10.1021/je049600u";
            sha256    "7308480db0c38603a6dc3431215613a89dcd469cd93d18a44f1645a63d4071d0";
            provenance measured;
            archiveFile "je049600u.xml";
            system    "1Octanol";
        }
        {
            role      fit;
            dataset   "constant/archiveExtracts/1Octanol-vapourPressure-j.fluid.2010.06.019.dat";
            doi       "10.1016/j.fluid.2010.06.019";
            sha256    "6161bfb0ad549d4a0d43df752a0c6e93411a7d3259c26035f893da46638b3534";
            provenance measured;
            archiveFile "j.fluid.2010.06.019.xml";
            system    "1Octanol";
        }
        {
            role      fit;
            dataset   "constant/archiveExtracts/1Octanol-vapourPressure-acs.jced.7b00574.dat";
            doi       "10.1021/acs.jced.7b00574";
            sha256    "a10ed94316601b1f8b223698c78b8234f18edbe637c9663236ec77b2c5adc1bb";
            provenance measured;
            archiveFile "acs.jced.7b00574.xml";
            system    "1Octanol";
        }
        {
            role      fit;
            dataset   "constant/archiveExtracts/1Octanol-vapourPressure-acs.jced.8b00680.dat";
            doi       "10.1021/acs.jced.8b00680";
            sha256    "24e5d0a547f0ece199cef88e38a33059d446a79066ec16e532dde61242113b94";
            provenance measured;
            archiveFile "acs.jced.8b00680.xml";
            system    "1Octanol";
        }
        {
            role      fit;
            dataset   "constant/archiveExtracts/1Octanol-vapourPressure-j.fluid.2011.04.024.dat";
            doi       "10.1016/j.fluid.2011.04.024";
            sha256    "f695b9de005b0fbb1168e244bcfb9665c5663e235f5586fa47cdb2ece4699899";
            provenance measured;
            archiveFile "j.fluid.2011.04.024.xml";
            system    "1Octanol";
        }
        {
            role      fit;
            dataset   "constant/archiveExtracts/1Octanol-vapourPressure-je400951k.dat";
            doi       "10.1021/je400951k";
            sha256    "49af8ac55dc52ecdc1b0c52b7ce21c5818a41758b3cdfb9aa95dc8d6dc8eb89a";
            provenance measured;
            archiveFile "je400951k.xml";
            system    "1Octanol";
        }
        {
            role      fit;
            dataset   "constant/archiveExtracts/1Octanol-vapourPressure-j.tca.2014.09.011.dat";
            doi       "10.1016/j.tca.2014.09.011";
            sha256    "00f0fd20258eb39ce4d277b77738e9b3464be2552a217982fc9155dc243be9d9";
            provenance measured;
            archiveFile "j.tca.2014.09.011.xml";
            system    "1Octanol";
        }
        {
            role      fit;
            dataset   "constant/archiveExtracts/1Octanol-vapourPressure-je030168a.dat";
            doi       "10.1021/je030168a";
            sha256    "6e36cf17003d2c130f8d65b2a43cfbc6ef8d9c7175353ddc58446fa703403831";
            provenance measured;
            archiveFile "je030168a.xml";
            system    "1Octanol";
        }
        {
            role      fit;
            dataset   "constant/archiveExtracts/1Octanol-vapourPressure-j.jct.2003.09.009.dat";
            doi       "10.1016/j.jct.2003.09.009";
            sha256    "f2666d0d886d604130ea42f9b1e45049d90f2b20c516ab3851bf82ba85508acc";
            provenance measured;
            archiveFile "j.jct.2003.09.009.xml";
            system    "1Octanol";
        }
        );

        domain
        {
            coordinate  K;
            fit         { min 298.15; max 468.47; n 153; }
        }
    }

    metrics
    {
        r2InSample        0.999498908342;   // the model reproducing the points it was FITTED to
        //  NO HELD-OUT METRIC EXISTS.  r2InSample above is exactly that --
        //  in-sample -- and must not be read as an external check.
    }
}

);
`,Ce=`/*--------------------------------*- Choupo -*--------------------------------*\\
  CURATION DOSSIER -- a scientific work record, NOT runtime property data.

  NOTHING IN THIS FILE IS VISIBLE TO THE SOLVER.  Record resolution looks only
  in <case>/constant/, data/standards/ and data/local/, so a file here is out
  of its reach BY CONSTRUCTION -- not by convention.

  Nothing here has been promoted.  Curation state belongs to the evidence
  process; runtime trust belongs to the numerical record actually admitted
  to data/standards/, and only an explicit human promotion moves one there
  (bin/curate/promote-from-dossier).

  MATURITY IS PER PROPERTY, not per component: the properties below may hold
  different verdicts, and any whole-component summary is DERIVED from them
  rather than stored beside them.

  Regenerated on every run.  Hand edits are lost.
\\*-----------------------------------------------------------------------------*/

component      1Pentanamine;
reviewStatus   unreviewed;

properties
(
{
    property       vapourPressure;
    operation      fit_antoine;   // type vaporPressureFit
    model          "Antoine  log10(Psat[bar]) = A - B/(T + C)";
    verdict        validationRefused;
    refusal        "No independent experimental evidence remains after fitting.";

    fittedParameters
    {
        A  4.02193718054;
        B  1225.82804692;
        C  -72.7167050138;
    }

    evidence
    {
        partitionFingerprint  "6ce94367da5ea1df";   // frozen before the fit

        datasets
        (
        {
            role      fit;
            dataset   "constant/archiveExtracts/1Pentanamine-vapourPressure-je025660t.dat";
            doi       "10.1021/je025660t";
            sha256    "165085286049203446a1e04f2962bae4c169a876111c2a939ed0467db4ad839d";
            provenance measured;
            archiveFile "je025660t.xml";
            system    "1Pentanamine";
        }
        );

        domain
        {
            coordinate  K;
            fit         { min 322.61; max 377.93; n 13; }
        }
    }

    metrics
    {
        r2InSample        0.999999933127;   // the model reproducing the points it was FITTED to
        //  NO HELD-OUT METRIC EXISTS.  r2InSample above is exactly that --
        //  in-sample -- and must not be read as an external check.
    }
}

);
`,He=`/*--------------------------------*- Choupo -*--------------------------------*\\
  CURATION DOSSIER -- a scientific work record, NOT runtime property data.

  NOTHING IN THIS FILE IS VISIBLE TO THE SOLVER.  Record resolution looks only
  in <case>/constant/, data/standards/ and data/local/, so a file here is out
  of its reach BY CONSTRUCTION -- not by convention.

  Nothing here has been promoted.  Curation state belongs to the evidence
  process; runtime trust belongs to the numerical record actually admitted
  to data/standards/, and only an explicit human promotion moves one there
  (bin/curate/promote-from-dossier).

  MATURITY IS PER PROPERTY, not per component: the properties below may hold
  different verdicts, and any whole-component summary is DERIVED from them
  rather than stored beside them.

  Regenerated on every run.  Hand edits are lost.
\\*-----------------------------------------------------------------------------*/

component      1Propoxy2Propanol;
reviewStatus   unreviewed;

properties
(
{
    property       vapourPressure;
    operation      fit_antoine;   // type vaporPressureFit
    model          "Antoine  log10(Psat[bar]) = A - B/(T + C)";
    verdict        validationRefused;
    refusal        "No independent experimental evidence remains after fitting.";

    fittedParameters
    {
        A  4.26607635376;
        B  1449.18745939;
        C  -82.9965162295;
    }

    evidence
    {
        partitionFingerprint  "a721ba8b39415ba3";   // frozen before the fit

        datasets
        (
        {
            role      fit;
            dataset   "constant/archiveExtracts/1Propoxy2Propanol-vapourPressure-j.fluid.2008.06.022.dat";
            doi       "10.1016/j.fluid.2008.06.022";
            sha256    "b129a7813689817cc9c0cee0ea3a23be77ff91344b51c1c988c4b4b1cecbddf5";
            provenance measured;
            archiveFile "j.fluid.2008.06.022.xml";
            system    "1Propoxy2Propanol";
        }
        );

        domain
        {
            coordinate  K;
            fit         { min 298.15; max 413.15; n 24; }
        }
    }

    metrics
    {
        r2InSample        0.999996045007;   // the model reproducing the points it was FITTED to
        //  NO HELD-OUT METRIC EXISTS.  r2InSample above is exactly that --
        //  in-sample -- and must not be read as an external check.
    }
}

);
`,qe=`/*--------------------------------*- Choupo -*--------------------------------*\\
  CURATION DOSSIER -- a scientific work record, NOT runtime property data.

  NOTHING IN THIS FILE IS VISIBLE TO THE SOLVER.  Record resolution looks only
  in <case>/constant/, data/standards/ and data/local/, so a file here is out
  of its reach BY CONSTRUCTION -- not by convention.

  Nothing here has been promoted.  Curation state belongs to the evidence
  process; runtime trust belongs to the numerical record actually admitted
  to data/standards/, and only an explicit human promotion moves one there
  (bin/curate/promote-from-dossier).

  MATURITY IS PER PROPERTY, not per component: the properties below may hold
  different verdicts, and any whole-component summary is DERIVED from them
  rather than stored beside them.

  Regenerated on every run.  Hand edits are lost.
\\*-----------------------------------------------------------------------------*/

component      2Butoxyethanol;
reviewStatus   unreviewed;

properties
(
{
    property       vapourPressure;
    operation      fit_antoine;   // type vaporPressureFit
    model          "Antoine  log10(Psat[bar]) = A - B/(T + C)";
    verdict        validationRefused;
    refusal        "No independent experimental evidence remains after fitting.";

    fittedParameters
    {
        A  5.41157009624;
        B  2180.15969858;
        C  -41.1733950336;
    }

    evidence
    {
        partitionFingerprint  "afb268361f8590dc";   // frozen before the fit

        datasets
        (
        {
            role      fit;
            dataset   "constant/archiveExtracts/2Butoxyethanol-vapourPressure-j.fluid.2012.08.030.dat";
            doi       "10.1016/j.fluid.2012.08.030";
            sha256    "6419d37a8c040cf93cb31454cedb04ddb1f440e7ccee355d910c4b6718dc9f18";
            provenance measured;
            archiveFile "j.fluid.2012.08.030.xml";
            system    "2Butoxyethanol";
        }
        );

        domain
        {
            coordinate  K;
            fit         { min 406.8; max 442.49; n 11; }
        }
    }

    metrics
    {
        r2InSample        0.999999906303;   // the model reproducing the points it was FITTED to
        //  NO HELD-OUT METRIC EXISTS.  r2InSample above is exactly that --
        //  in-sample -- and must not be read as an external check.
    }
}

);
`,De=`/*--------------------------------*- Choupo -*--------------------------------*\\
  CURATION DOSSIER -- a scientific work record, NOT runtime property data.

  NOTHING IN THIS FILE IS VISIBLE TO THE SOLVER.  Record resolution looks only
  in <case>/constant/, data/standards/ and data/local/, so a file here is out
  of its reach BY CONSTRUCTION -- not by convention.

  Nothing here has been promoted.  Curation state belongs to the evidence
  process; runtime trust belongs to the numerical record actually admitted
  to data/standards/, and only an explicit human promotion moves one there
  (bin/curate/promote-from-dossier).

  MATURITY IS PER PROPERTY, not per component: the properties below may hold
  different verdicts, and any whole-component summary is DERIVED from them
  rather than stored beside them.

  Regenerated on every run.  Hand edits are lost.
\\*-----------------------------------------------------------------------------*/

component      2Chlorotoluene;
reviewStatus   unreviewed;

properties
(
{
    property       vapourPressure;
    operation      fit_antoine;   // type vaporPressureFit
    model          "Antoine  log10(Psat[bar]) = A - B/(T + C)";
    verdict        validationRefused;
    refusal        "No independent experimental evidence remains after fitting.";

    fittedParameters
    {
        A  4.32730100161;
        B  1624.83918263;
        C  -54.7477129621;
    }

    evidence
    {
        partitionFingerprint  "27e03d85a6edee41";   // frozen before the fit

        datasets
        (
        {
            role      fit;
            dataset   "constant/archiveExtracts/2Chlorotoluene-vapourPressure-j.fluid.2014.07.029.dat";
            doi       "10.1016/j.fluid.2014.07.029";
            sha256    "ec4aea6d08881c349b9d001667c32250127ab1fc8e59e1c004ff855068f3332a";
            provenance measured;
            archiveFile "j.fluid.2014.07.029.xml";
            system    "2Chlorotoluene";
        }
        {
            role      fit;
            dataset   "constant/archiveExtracts/2Chlorotoluene-vapourPressure-j.fluid.2007.01.042.dat";
            doi       "10.1016/j.fluid.2007.01.042";
            sha256    "cedd0eb764f1427941773184d7169a274170fbb2bada7c408c98c1dea1325d0d";
            provenance measured;
            archiveFile "j.fluid.2007.01.042.xml";
            system    "2Chlorotoluene";
        }
        );

        domain
        {
            coordinate  K;
            fit         { min 274.2; max 428.76; n 19; }
        }
    }

    metrics
    {
        r2InSample        0.999928555444;   // the model reproducing the points it was FITTED to
        //  NO HELD-OUT METRIC EXISTS.  r2InSample above is exactly that --
        //  in-sample -- and must not be read as an external check.
    }
}

);
`,Le=`/*--------------------------------*- Choupo -*--------------------------------*\\
  CURATION DOSSIER -- a scientific work record, NOT runtime property data.

  NOTHING IN THIS FILE IS VISIBLE TO THE SOLVER.  Record resolution looks only
  in <case>/constant/, data/standards/ and data/local/, so a file here is out
  of its reach BY CONSTRUCTION -- not by convention.

  Nothing here has been promoted.  Curation state belongs to the evidence
  process; runtime trust belongs to the numerical record actually admitted
  to data/standards/, and only an explicit human promotion moves one there
  (bin/curate/promote-from-dossier).

  MATURITY IS PER PROPERTY, not per component: the properties below may hold
  different verdicts, and any whole-component summary is DERIVED from them
  rather than stored beside them.

  Regenerated on every run.  Hand edits are lost.
\\*-----------------------------------------------------------------------------*/

component      2Ethoxyethanol;
reviewStatus   unreviewed;

properties
(
{
    property       vapourPressure;
    operation      fit_antoine;   // type vaporPressureFit
    model          "Antoine  log10(Psat[bar]) = A - B/(T + C)";
    verdict        validationRefused;
    refusal        "No independent experimental evidence remains after fitting.";

    fittedParameters
    {
        A  54.0319756856;
        B  182574.837039;
        C  2972.88465544;
    }

    evidence
    {
        partitionFingerprint  "cecd651af38a1161";   // frozen before the fit

        datasets
        (
        {
            role      fit;
            dataset   "constant/archiveExtracts/2Ethoxyethanol-vapourPressure-j.fluid.2007.03.030.dat";
            doi       "10.1016/j.fluid.2007.03.030";
            sha256    "adb8c6f363fae91b97bb723285b49a0ec807911a84e3b2ebbd7b97eea15405b3";
            provenance measured;
            archiveFile "j.fluid.2007.03.030.xml";
            system    "2Ethoxyethanol";
        }
        {
            role      fit;
            dataset   "constant/archiveExtracts/2Ethoxyethanol-vapourPressure-j.fluid.2012.08.030.dat";
            doi       "10.1016/j.fluid.2012.08.030";
            sha256    "6419d37a8c040cf93cb31454cedb04ddb1f440e7ccee355d910c4b6718dc9f18";
            provenance measured;
            archiveFile "j.fluid.2012.08.030.xml";
            system    "2Ethoxyethanol";
        }
        {
            role      fit;
            dataset   "constant/archiveExtracts/2Ethoxyethanol-vapourPressure-je300202z.dat";
            doi       "10.1021/je300202z";
            sha256    "0de86b52e832bd7be3f606d904468235304c17843b03f9b7406c13d2dfefae64";
            provenance measured;
            archiveFile "je300202z.xml";
            system    "2Ethoxyethanol";
        }
        );

        domain
        {
            coordinate  K;
            fit         { min 345.63; max 407.95; n 44; }
        }
    }

    metrics
    {
        r2InSample        0.996203203825;   // the model reproducing the points it was FITTED to
        //  NO HELD-OUT METRIC EXISTS.  r2InSample above is exactly that --
        //  in-sample -- and must not be read as an external check.
    }
}

);
`,Fe=`/*--------------------------------*- Choupo -*--------------------------------*\\
  CURATION DOSSIER -- a scientific work record, NOT runtime property data.

  NOTHING IN THIS FILE IS VISIBLE TO THE SOLVER.  Record resolution looks only
  in <case>/constant/, data/standards/ and data/local/, so a file here is out
  of its reach BY CONSTRUCTION -- not by convention.

  Nothing here has been promoted.  Curation state belongs to the evidence
  process; runtime trust belongs to the numerical record actually admitted
  to data/standards/, and only an explicit human promotion moves one there
  (bin/curate/promote-from-dossier).

  MATURITY IS PER PROPERTY, not per component: the properties below may hold
  different verdicts, and any whole-component summary is DERIVED from them
  rather than stored beside them.

  Regenerated on every run.  Hand edits are lost.
\\*-----------------------------------------------------------------------------*/

component      2Methoxyethanol;
reviewStatus   unreviewed;

properties
(
{
    property       vapourPressure;
    operation      fit_antoine;   // type vaporPressureFit
    model          "Antoine  log10(Psat[bar]) = A - B/(T + C)";
    verdict        validationRefused;
    refusal        "No independent experimental evidence remains after fitting.";

    fittedParameters
    {
        A  8.42554150821;
        B  4809.15925241;
        C  173.23093413;
    }

    evidence
    {
        partitionFingerprint  "71c778c425379e65";   // frozen before the fit

        datasets
        (
        {
            role      fit;
            dataset   "constant/archiveExtracts/2Methoxyethanol-vapourPressure-je900259b.dat";
            doi       "10.1021/je900259b";
            sha256    "5eff5eb02f6464f15dc200659d4fdf345d289fe873535ec542bf9f0d7b46c1d5";
            provenance measured;
            archiveFile "je900259b.xml";
            system    "2Methoxyethanol";
        }
        {
            role      fit;
            dataset   "constant/archiveExtracts/2Methoxyethanol-vapourPressure-j.fluid.2007.09.014.dat";
            doi       "10.1016/j.fluid.2007.09.014";
            sha256    "1a941fcef044b10b910fb6eb431a005076144b4b9414d6581ff49e84e1c6dcdb";
            provenance measured;
            archiveFile "j.fluid.2007.09.014.xml";
            system    "2Methoxyethanol";
        }
        {
            role      fit;
            dataset   "constant/archiveExtracts/2Methoxyethanol-vapourPressure-j.jct.2012.04.029.dat";
            doi       "10.1016/j.jct.2012.04.029";
            sha256    "926cf4aeb10e62ea901738cd847eb38533807e323d6a3c9183a23ad42b39a3e6";
            provenance measured;
            archiveFile "j.jct.2012.04.029.xml";
            system    "2Methoxyethanol";
        }
        {
            role      fit;
            dataset   "constant/archiveExtracts/2Methoxyethanol-vapourPressure-j.fluid.2012.08.030.dat";
            doi       "10.1016/j.fluid.2012.08.030";
            sha256    "6419d37a8c040cf93cb31454cedb04ddb1f440e7ccee355d910c4b6718dc9f18";
            provenance measured;
            archiveFile "j.fluid.2012.08.030.xml";
            system    "2Methoxyethanol";
        }
        );

        domain
        {
            coordinate  K;
            fit         { min 336.18; max 416.6; n 93; }
        }
    }

    metrics
    {
        r2InSample        0.995349513226;   // the model reproducing the points it was FITTED to
        //  NO HELD-OUT METRIC EXISTS.  r2InSample above is exactly that --
        //  in-sample -- and must not be read as an external check.
    }
}

);
`,we=`/*--------------------------------*- Choupo -*--------------------------------*\\
  CURATION DOSSIER -- a scientific work record, NOT runtime property data.

  NOTHING IN THIS FILE IS VISIBLE TO THE SOLVER.  Record resolution looks only
  in <case>/constant/, data/standards/ and data/local/, so a file here is out
  of its reach BY CONSTRUCTION -- not by convention.

  Nothing here has been promoted.  Curation state belongs to the evidence
  process; runtime trust belongs to the numerical record actually admitted
  to data/standards/, and only an explicit human promotion moves one there
  (bin/curate/promote-from-dossier).

  MATURITY IS PER PROPERTY, not per component: the properties below may hold
  different verdicts, and any whole-component summary is DERIVED from them
  rather than stored beside them.

  Regenerated on every run.  Hand edits are lost.
\\*-----------------------------------------------------------------------------*/

component      2Methyltetrahydrofuran;
reviewStatus   unreviewed;

properties
(
{
    property       vapourPressure;
    operation      fit_antoine;   // type vaporPressureFit
    model          "Antoine  log10(Psat[bar]) = A - B/(T + C)";
    verdict        validationRefused;
    refusal        "No independent experimental evidence remains after fitting.";

    fittedParameters
    {
        A  4.17668045993;
        B  1289.16547515;
        C  -43.8140227783;
    }

    evidence
    {
        partitionFingerprint  "550b2190d18255ab";   // frozen before the fit

        datasets
        (
        {
            role      fit;
            dataset   "constant/archiveExtracts/2Methyltetrahydrofuran-vapourPressure-j.fluid.2015.05.002.dat";
            doi       "10.1016/j.fluid.2015.05.002";
            sha256    "4011ad3ec096730aca9e21dd96b2ae5e4dae45c1b9e2d4c75b480c6d85261145";
            provenance measured;
            archiveFile "j.fluid.2015.05.002.xml";
            system    "2Methyltetrahydrofuran";
        }
        {
            role      fit;
            dataset   "constant/archiveExtracts/2Methyltetrahydrofuran-vapourPressure-acs.jced.6b00576.dat";
            doi       "10.1021/acs.jced.6b00576";
            sha256    "9f7efbb7dde9cf6bc27340bfd713813486a868d30ac415701e7553e8035529ec";
            provenance measured;
            archiveFile "acs.jced.6b00576.xml";
            system    "2Methyltetrahydrofuran";
        }
        {
            role      fit;
            dataset   "constant/archiveExtracts/2Methyltetrahydrofuran-vapourPressure-j.jct.2017.12.015.dat";
            doi       "10.1016/j.jct.2017.12.015";
            sha256    "0d5e69e8d3412919195796a432f2e3e1ce6910e8fe1dabee02fd115faa8d4ce0";
            provenance measured;
            archiveFile "j.jct.2017.12.015.xml";
            system    "2Methyltetrahydrofuran";
        }
        );

        domain
        {
            coordinate  K;
            fit         { min 279; max 508.21; n 46; }
        }
    }

    metrics
    {
        r2InSample        0.999995821781;   // the model reproducing the points it was FITTED to
        //  NO HELD-OUT METRIC EXISTS.  r2InSample above is exactly that --
        //  in-sample -- and must not be read as an external check.
    }
}

);
`,Me=`/*--------------------------------*- Choupo -*--------------------------------*\\
  CURATION DOSSIER -- a scientific work record, NOT runtime property data.

  NOTHING IN THIS FILE IS VISIBLE TO THE SOLVER.  Record resolution looks only
  in <case>/constant/, data/standards/ and data/local/, so a file here is out
  of its reach BY CONSTRUCTION -- not by convention.

  Nothing here has been promoted.  Curation state belongs to the evidence
  process; runtime trust belongs to the numerical record actually admitted
  to data/standards/, and only an explicit human promotion moves one there
  (bin/curate/promote-from-dossier).

  MATURITY IS PER PROPERTY, not per component: the properties below may hold
  different verdicts, and any whole-component summary is DERIVED from them
  rather than stored beside them.

  Regenerated on every run.  Hand edits are lost.
\\*-----------------------------------------------------------------------------*/

component      2Propoxyethanol;
reviewStatus   unreviewed;

properties
(
{
    property       vapourPressure;
    operation      fit_antoine;   // type vaporPressureFit
    model          "Antoine  log10(Psat[bar]) = A - B/(T + C)";
    verdict        validationRefused;
    refusal        "No independent experimental evidence remains after fitting.";

    fittedParameters
    {
        A  4.44871023051;
        B  1546.384466;
        C  -75.4140478644;
    }

    evidence
    {
        partitionFingerprint  "90ade6473129590b";   // frozen before the fit

        datasets
        (
        {
            role      fit;
            dataset   "constant/archiveExtracts/2Propoxyethanol-vapourPressure-je3002255.dat";
            doi       "10.1021/je3002255";
            sha256    "e3a6af8e9ed8830d2c8bc638459c0d5dc7896abc726819b98f05422052b5d452";
            provenance measured;
            archiveFile "je3002255.xml";
            system    "2Propoxyethanol";
        }
        {
            role      fit;
            dataset   "constant/archiveExtracts/2Propoxyethanol-vapourPressure-j.jct.2008.07.024.dat";
            doi       "10.1016/j.jct.2008.07.024";
            sha256    "abaaa839aba5db949d7b3aecfe74e1047aabc8edfc763873b04308eafd0ed9d5";
            provenance measured;
            archiveFile "j.jct.2008.07.024.xml";
            system    "2Propoxyethanol";
        }
        );

        domain
        {
            coordinate  K;
            fit         { min 303.15; max 422.75; n 11; }
        }
    }

    metrics
    {
        r2InSample        0.999978452486;   // the model reproducing the points it was FITTED to
        //  NO HELD-OUT METRIC EXISTS.  r2InSample above is exactly that --
        //  in-sample -- and must not be read as an external check.
    }
}

);
`,Be=`/*--------------------------------*- Choupo -*--------------------------------*\\
  CURATION DOSSIER -- a scientific work record, NOT runtime property data.

  NOTHING IN THIS FILE IS VISIBLE TO THE SOLVER.  Record resolution looks only
  in <case>/constant/, data/standards/ and data/local/, so a file here is out
  of its reach BY CONSTRUCTION -- not by convention.

  Nothing here has been promoted.  Curation state belongs to the evidence
  process; runtime trust belongs to the numerical record actually admitted
  to data/standards/, and only an explicit human promotion moves one there
  (bin/curate/promote-from-dossier).

  MATURITY IS PER PROPERTY, not per component: the properties below may hold
  different verdicts, and any whole-component summary is DERIVED from them
  rather than stored beside them.

  Regenerated on every run.  Hand edits are lost.
\\*-----------------------------------------------------------------------------*/

component      33Oxydipropanol;
reviewStatus   unreviewed;

properties
(
{
    property       vapourPressure;
    operation      fit_antoine;   // type vaporPressureFit
    model          "Antoine  log10(Psat[bar]) = A - B/(T + C)";
    verdict        validationRefused;
    refusal        "No independent experimental evidence remains after fitting.";

    fittedParameters
    {
        A  4.84325496907;
        B  2057.06515624;
        C  -81.5526761907;
    }

    evidence
    {
        partitionFingerprint  "fbb361c079fbbf49";   // frozen before the fit

        datasets
        (
        {
            role      fit;
            dataset   "constant/archiveExtracts/33Oxydipropanol-vapourPressure-je4009014.dat";
            doi       "10.1021/je4009014";
            sha256    "c5eac6f0f8b3da19f310f0c314d5b14644ef12d512a2a392befc5ce3d4f727af";
            provenance measured;
            archiveFile "je4009014.xml";
            system    "33Oxydipropanol";
        }
        {
            role      fit;
            dataset   "constant/archiveExtracts/33Oxydipropanol-vapourPressure-je060269j.dat";
            doi       "10.1021/je060269j";
            sha256    "02c8cb4d842126b8f3f721cab2b12b266f42b2da0534cbb9ac3acc39d86a0acf";
            provenance measured;
            archiveFile "je060269j.xml";
            system    "33Oxydipropanol";
        }
        );

        domain
        {
            coordinate  K;
            fit         { min 365.15; max 703.4; n 21; }
        }
    }

    metrics
    {
        r2InSample        0.999922439834;   // the model reproducing the points it was FITTED to
        //  NO HELD-OUT METRIC EXISTS.  r2InSample above is exactly that --
        //  in-sample -- and must not be read as an external check.
    }
}

);
`,Ue=`/*--------------------------------*- Choupo -*--------------------------------*\\
  CURATION DOSSIER -- a scientific work record, NOT runtime property data.

  NOTHING IN THIS FILE IS VISIBLE TO THE SOLVER.  Record resolution looks only
  in <case>/constant/, data/standards/ and data/local/, so a file here is out
  of its reach BY CONSTRUCTION -- not by convention.

  Nothing here has been promoted.  Curation state belongs to the evidence
  process; runtime trust belongs to the numerical record actually admitted
  to data/standards/, and only an explicit human promotion moves one there
  (bin/curate/promote-from-dossier).

  MATURITY IS PER PROPERTY, not per component: the properties below may hold
  different verdicts, and any whole-component summary is DERIVED from them
  rather than stored beside them.

  Regenerated on every run.  Hand edits are lost.
\\*-----------------------------------------------------------------------------*/

component      3Methyl1Butanol;
reviewStatus   unreviewed;

properties
(
{
    property       vapourPressure;
    operation      fit_antoine;   // type vaporPressureFit
    model          "Antoine  log10(Psat[bar]) = A - B/(T + C)";
    verdict        validationRefused;
    refusal        "No independent experimental evidence remains after fitting.";

    fittedParameters
    {
        A  4.65382412472;
        B  1459.13613642;
        C  -90.5788636546;
    }

    evidence
    {
        partitionFingerprint  "84bb6cac9c1d152d";   // frozen before the fit

        datasets
        (
        {
            role      fit;
            dataset   "constant/archiveExtracts/3Methyl1Butanol-vapourPressure-je900812v.dat";
            doi       "10.1021/je900812v";
            sha256    "17baa5eb23d1fe8dcc8e8158f02409943c10e8c4da0395a5fb631b19bd807008";
            provenance measured;
            archiveFile "je900812v.xml";
            system    "3Methyl1Butanol";
        }
        {
            role      fit;
            dataset   "constant/archiveExtracts/3Methyl1Butanol-vapourPressure-je800298n.dat";
            doi       "10.1021/je800298n";
            sha256    "005abc28889e7df8eab6f17a818201c83126d1d427ec31f7e323342c1701db64";
            provenance measured;
            archiveFile "je800298n.xml";
            system    "3Methyl1Butanol";
        }
        {
            role      fit;
            dataset   "constant/archiveExtracts/3Methyl1Butanol-vapourPressure-j.fluid.2012.11.004.dat";
            doi       "10.1016/j.fluid.2012.11.004";
            sha256    "1bce50f23a3d220c3157b69fcdd418608fc3a50f4e050baa0b32e8e27d674918";
            provenance measured;
            archiveFile "j.fluid.2012.11.004.xml";
            system    "3Methyl1Butanol";
        }
        {
            role      fit;
            dataset   "constant/archiveExtracts/3Methyl1Butanol-vapourPressure-j.jct.2009.04.009.dat";
            doi       "10.1016/j.jct.2009.04.009";
            sha256    "17164925926c86aae894df78aaad5249cbe0a7f1092f15b56f938237ba258aa3";
            provenance measured;
            archiveFile "j.jct.2009.04.009.xml";
            system    "3Methyl1Butanol";
        }
        {
            role      fit;
            dataset   "constant/archiveExtracts/3Methyl1Butanol-vapourPressure-j.fluid.2010.06.020.dat";
            doi       "10.1016/j.fluid.2010.06.020";
            sha256    "8712869c270385cc5c173d45bf7021d373c2edac50e32903a1f874d7b8a5fa93";
            provenance measured;
            archiveFile "j.fluid.2010.06.020.xml";
            system    "3Methyl1Butanol";
        }
        {
            role      fit;
            dataset   "constant/archiveExtracts/3Methyl1Butanol-vapourPressure-acs.jced.7b01128.dat";
            doi       "10.1021/acs.jced.7b01128";
            sha256    "6745bdc0beec2fa3fa8d1493f40cfd46ffa6dea83ecb70fb52646a21d3abc433";
            provenance measured;
            archiveFile "acs.jced.7b01128.xml";
            system    "3Methyl1Butanol";
        }
        );

        domain
        {
            coordinate  K;
            fit         { min 335.85; max 445.98; n 107; }
        }
    }

    metrics
    {
        r2InSample        0.999803229435;   // the model reproducing the points it was FITTED to
        //  NO HELD-OUT METRIC EXISTS.  r2InSample above is exactly that --
        //  in-sample -- and must not be read as an external check.
    }
}

);
`,Ve=`/*--------------------------------*- Choupo -*--------------------------------*\\
  CURATION DOSSIER -- a scientific work record, NOT runtime property data.

  NOTHING IN THIS FILE IS VISIBLE TO THE SOLVER.  Record resolution looks only
  in <case>/constant/, data/standards/ and data/local/, so a file here is out
  of its reach BY CONSTRUCTION -- not by convention.

  Nothing here has been promoted.  Curation state belongs to the evidence
  process; runtime trust belongs to the numerical record actually admitted
  to data/standards/, and only an explicit human promotion moves one there
  (bin/curate/promote-from-dossier).

  MATURITY IS PER PROPERTY, not per component: the properties below may hold
  different verdicts, and any whole-component summary is DERIVED from them
  rather than stored beside them.

  Regenerated on every run.  Hand edits are lost.
\\*-----------------------------------------------------------------------------*/

component      3Methyl2Butanol;
reviewStatus   unreviewed;

properties
(
{
    property       vapourPressure;
    operation      fit_antoine;   // type vaporPressureFit
    model          "Antoine  log10(Psat[bar]) = A - B/(T + C)";
    verdict        validationRefused;
    refusal        "No independent experimental evidence remains after fitting.";

    fittedParameters
    {
        A  4.05160884058;
        B  1094.83376509;
        C  -114.501974807;
    }

    evidence
    {
        partitionFingerprint  "2116d5f0177ff51c";   // frozen before the fit

        datasets
        (
        {
            role      fit;
            dataset   "constant/archiveExtracts/3Methyl2Butanol-vapourPressure-j.fluid.2010.06.020.dat";
            doi       "10.1016/j.fluid.2010.06.020";
            sha256    "8712869c270385cc5c173d45bf7021d373c2edac50e32903a1f874d7b8a5fa93";
            provenance measured;
            archiveFile "j.fluid.2010.06.020.xml";
            system    "3Methyl2Butanol";
        }
        {
            role      fit;
            dataset   "constant/archiveExtracts/3Methyl2Butanol-vapourPressure-je050062a.dat";
            doi       "10.1021/je050062a";
            sha256    "bb7750963e7918d95ee7a4192708d80e8cd15afb9814ceaed967fee560ae3213";
            provenance measured;
            archiveFile "je050062a.xml";
            system    "3Methyl2Butanol";
        }
        );

        domain
        {
            coordinate  K;
            fit         { min 323.609; max 384.452; n 33; }
        }
    }

    metrics
    {
        r2InSample        0.999995651333;   // the model reproducing the points it was FITTED to
        //  NO HELD-OUT METRIC EXISTS.  r2InSample above is exactly that --
        //  in-sample -- and must not be read as an external check.
    }
}

);
`,Ae=`/*--------------------------------*- Choupo -*--------------------------------*\\
  CURATION DOSSIER -- a scientific work record, NOT runtime property data.

  NOTHING IN THIS FILE IS VISIBLE TO THE SOLVER.  Record resolution looks only
  in <case>/constant/, data/standards/ and data/local/, so a file here is out
  of its reach BY CONSTRUCTION -- not by convention.

  Nothing here has been promoted.  Curation state belongs to the evidence
  process; runtime trust belongs to the numerical record actually admitted
  to data/standards/, and only an explicit human promotion moves one there
  (bin/curate/promote-from-dossier).

  MATURITY IS PER PROPERTY, not per component: the properties below may hold
  different verdicts, and any whole-component summary is DERIVED from them
  rather than stored beside them.

  Regenerated on every run.  Hand edits are lost.
\\*-----------------------------------------------------------------------------*/

component      3Pentanol;
reviewStatus   unreviewed;

properties
(
{
    property       vapourPressure;
    operation      fit_antoine;   // type vaporPressureFit
    model          "Antoine  log10(Psat[bar]) = A - B/(T + C)";
    verdict        validationRefused;
    refusal        "No independent experimental evidence remains after fitting.";

    fittedParameters
    {
        A  4.52571178523;
        B  1361.12204009;
        C  -88.3290492836;
    }

    evidence
    {
        partitionFingerprint  "62883d5b48917a7a";   // frozen before the fit

        datasets
        (
        {
            role      fit;
            dataset   "constant/archiveExtracts/3Pentanol-vapourPressure-j.fluid.2010.06.020.dat";
            doi       "10.1016/j.fluid.2010.06.020";
            sha256    "8712869c270385cc5c173d45bf7021d373c2edac50e32903a1f874d7b8a5fa93";
            provenance measured;
            archiveFile "j.fluid.2010.06.020.xml";
            system    "3Pentanol";
        }
        {
            role      fit;
            dataset   "constant/archiveExtracts/3Pentanol-vapourPressure-je025651k.dat";
            doi       "10.1021/je025651k";
            sha256    "1d60378cee76d9d6293e986d25da14e2be66618b2a6f589477fe297accfa6f06";
            provenance measured;
            archiveFile "je025651k.xml";
            system    "3Pentanol";
        }
        {
            role      fit;
            dataset   "constant/archiveExtracts/3Pentanol-vapourPressure-acs.jced.6b00576.dat";
            doi       "10.1021/acs.jced.6b00576";
            sha256    "9f7efbb7dde9cf6bc27340bfd713813486a868d30ac415701e7553e8035529ec";
            provenance measured;
            archiveFile "acs.jced.6b00576.xml";
            system    "3Pentanol";
        }
        );

        domain
        {
            coordinate  K;
            fit         { min 279.05; max 388.7; n 45; }
        }
    }

    metrics
    {
        r2InSample        0.999658720158;   // the model reproducing the points it was FITTED to
        //  NO HELD-OUT METRIC EXISTS.  r2InSample above is exactly that --
        //  in-sample -- and must not be read as an external check.
    }
}

);
`,ke=`/*--------------------------------*- Choupo -*--------------------------------*\\
  CURATION DOSSIER -- a scientific work record, NOT runtime property data.

  NOTHING IN THIS FILE IS VISIBLE TO THE SOLVER.  Record resolution looks only
  in <case>/constant/, data/standards/ and data/local/, so a file here is out
  of its reach BY CONSTRUCTION -- not by convention.

  Nothing here has been promoted.  Curation state belongs to the evidence
  process; runtime trust belongs to the numerical record actually admitted
  to data/standards/, and only an explicit human promotion moves one there
  (bin/curate/promote-from-dossier).

  MATURITY IS PER PROPERTY, not per component: the properties below may hold
  different verdicts, and any whole-component summary is DERIVED from them
  rather than stored beside them.

  Regenerated on every run.  Hand edits are lost.
\\*-----------------------------------------------------------------------------*/

component      4Chlorotoluene;
reviewStatus   unreviewed;

properties
(
{
    property       vapourPressure;
    operation      fit_antoine;   // type vaporPressureFit
    model          "Antoine  log10(Psat[bar]) = A - B/(T + C)";
    verdict        validationRefused;
    refusal        "No independent experimental evidence remains after fitting.";

    fittedParameters
    {
        A  4.52410409566;
        B  1771.114168;
        C  -41.6391920573;
    }

    evidence
    {
        partitionFingerprint  "635270bdfdd7f871";   // frozen before the fit

        datasets
        (
        {
            role      fit;
            dataset   "constant/archiveExtracts/4Chlorotoluene-vapourPressure-j.fluid.2014.07.029.dat";
            doi       "10.1016/j.fluid.2014.07.029";
            sha256    "ec4aea6d08881c349b9d001667c32250127ab1fc8e59e1c004ff855068f3332a";
            provenance measured;
            archiveFile "j.fluid.2014.07.029.xml";
            system    "4Chlorotoluene";
        }
        {
            role      fit;
            dataset   "constant/archiveExtracts/4Chlorotoluene-vapourPressure-j.fluid.2007.01.042.dat";
            doi       "10.1016/j.fluid.2007.01.042";
            sha256    "cedd0eb764f1427941773184d7169a274170fbb2bada7c408c98c1dea1325d0d";
            provenance measured;
            archiveFile "j.fluid.2007.01.042.xml";
            system    "4Chlorotoluene";
        }
        );

        domain
        {
            coordinate  K;
            fit         { min 274.3; max 431.77; n 22; }
        }
    }

    metrics
    {
        r2InSample        0.999913817925;   // the model reproducing the points it was FITTED to
        //  NO HELD-OUT METRIC EXISTS.  r2InSample above is exactly that --
        //  in-sample -- and must not be read as an external check.
    }
}

);
`,Ye=`/*--------------------------------*- Choupo -*--------------------------------*\\
  CURATION DOSSIER -- a scientific work record, NOT runtime property data.

  NOTHING IN THIS FILE IS VISIBLE TO THE SOLVER.  Record resolution looks only
  in <case>/constant/, data/standards/ and data/local/, so a file here is out
  of its reach BY CONSTRUCTION -- not by convention.

  Nothing here has been promoted.  Curation state belongs to the evidence
  process; runtime trust belongs to the numerical record actually admitted
  to data/standards/, and only an explicit human promotion moves one there
  (bin/curate/promote-from-dossier).

  MATURITY IS PER PROPERTY, not per component: the properties below may hold
  different verdicts, and any whole-component summary is DERIVED from them
  rather than stored beside them.

  Regenerated on every run.  Hand edits are lost.
\\*-----------------------------------------------------------------------------*/

component      NMethyl13Diaminopropane;
reviewStatus   unreviewed;

properties
(
{
    property       vapourPressure;
    operation      fit_antoine;   // type vaporPressureFit
    model          "Antoine  log10(Psat[bar]) = A - B/(T + C)";
    verdict        validationRefused;
    refusal        "No independent experimental evidence remains after fitting.";

    fittedParameters
    {
        A  4.71672659775;
        B  1630.04709401;
        C  -64.8193859044;
    }

    evidence
    {
        partitionFingerprint  "f40f53adba131138";   // frozen before the fit

        datasets
        (
        {
            role      fit;
            dataset   "constant/archiveExtracts/NMethyl13Diaminopropane-vapourPressure-j.jct.2015.08.023.dat";
            doi       "10.1016/j.jct.2015.08.023";
            sha256    "84c2e09ed70741b2ffd3f10043c509d67a5e24f76cd866b7b592cb2d7e876c30";
            provenance measured;
            archiveFile "j.jct.2015.08.023.xml";
            system    "NMethyl13Diaminopropane";
        }
        {
            role      fit;
            dataset   "constant/archiveExtracts/NMethyl13Diaminopropane-vapourPressure-j.jct.2011.11.004.dat";
            doi       "10.1016/j.jct.2011.11.004";
            sha256    "65be29d6ba239359118c71a15106ee36b69e4fb05304221a9da395d05b8e4251";
            provenance measured;
            archiveFile "j.jct.2011.11.004.xml";
            system    "NMethyl13Diaminopropane";
        }
        {
            role      fit;
            dataset   "constant/archiveExtracts/NMethyl13Diaminopropane-vapourPressure-je800290k.dat";
            doi       "10.1021/je800290k";
            sha256    "51baf217f8b5f257b4c5c26ec4713d84bc714c8775fffbd01af931591160e9c7";
            provenance measured;
            archiveFile "je800290k.xml";
            system    "NMethyl13Diaminopropane";
        }
        );

        domain
        {
            coordinate  K;
            fit         { min 276.2; max 432.4; n 61; }
        }
    }

    metrics
    {
        r2InSample        0.998538001383;   // the model reproducing the points it was FITTED to
        //  NO HELD-OUT METRIC EXISTS.  r2InSample above is exactly that --
        //  in-sample -- and must not be read as an external check.
    }
}

);
`,ze=`/*--------------------------------*- Choupo -*--------------------------------*\\
  CURATION DOSSIER -- a scientific work record, NOT runtime property data.

  NOTHING IN THIS FILE IS VISIBLE TO THE SOLVER.  Record resolution looks only
  in <case>/constant/, data/standards/ and data/local/, so a file here is out
  of its reach BY CONSTRUCTION -- not by convention.

  Nothing here has been promoted.  Curation state belongs to the evidence
  process; runtime trust belongs to the numerical record actually admitted
  to data/standards/, and only an explicit human promotion moves one there
  (bin/curate/promote-from-dossier).

  MATURITY IS PER PROPERTY, not per component: the properties below may hold
  different verdicts, and any whole-component summary is DERIVED from them
  rather than stored beside them.

  Regenerated on every run.  Hand edits are lost.
\\*-----------------------------------------------------------------------------*/

component      allylAlcohol;
reviewStatus   unreviewed;

properties
(
{
    property       vapourPressure;
    operation      fit_antoine;   // type vaporPressureFit
    model          "Antoine  log10(Psat[bar]) = A - B/(T + C)";
    verdict        validationRefused;
    refusal        "No independent experimental evidence remains after fitting.";

    fittedParameters
    {
        A  4.70434351854;
        B  1398.82103022;
        C  -72.7854693401;
    }

    evidence
    {
        partitionFingerprint  "0a27ad837b6c4250";   // frozen before the fit

        datasets
        (
        {
            role      fit;
            dataset   "constant/archiveExtracts/allylAlcohol-vapourPressure-je0499519.dat";
            doi       "10.1021/je0499519";
            sha256    "c18c70e2c9b2192d9bc8e3aaecbd58f28488e696d68234b77615db19e48121ab";
            provenance measured;
            archiveFile "je0499519.xml";
            system    "allylAlcohol";
        }
        {
            role      fit;
            dataset   "constant/archiveExtracts/allylAlcohol-vapourPressure-je060088h.dat";
            doi       "10.1021/je060088h";
            sha256    "05351c8ef327e099415ebee17ed712adb667436548fbc031286abb4a3110d08a";
            provenance measured;
            archiveFile "je060088h.xml";
            system    "allylAlcohol";
        }
        {
            role      fit;
            dataset   "constant/archiveExtracts/allylAlcohol-vapourPressure-je400885z.dat";
            doi       "10.1021/je400885z";
            sha256    "952b467f5ae68dc2fe34f089f817c7d0b847bb356e15e4423d40a319b3965575";
            provenance measured;
            archiveFile "je400885z.xml";
            system    "allylAlcohol";
        }
        );

        domain
        {
            coordinate  K;
            fit         { min 311.42; max 546.5; n 29; }
        }
    }

    metrics
    {
        r2InSample        0.999985397148;   // the model reproducing the points it was FITTED to
        //  NO HELD-OUT METRIC EXISTS.  r2InSample above is exactly that --
        //  in-sample -- and must not be read as an external check.
    }
}

);
`,Xe=`/*--------------------------------*- Choupo -*--------------------------------*\\
  CURATION DOSSIER -- a scientific work record, NOT runtime property data.

  NOTHING IN THIS FILE IS VISIBLE TO THE SOLVER.  Record resolution looks only
  in <case>/constant/, data/standards/ and data/local/, so a file here is out
  of its reach BY CONSTRUCTION -- not by convention.

  Nothing here has been promoted.  Curation state belongs to the evidence
  process; runtime trust belongs to the numerical record actually admitted
  to data/standards/, and only an explicit human promotion moves one there
  (bin/curate/promote-from-dossier).

  MATURITY IS PER PROPERTY, not per component: the properties below may hold
  different verdicts, and any whole-component summary is DERIVED from them
  rather than stored beside them.

  Regenerated on every run.  Hand edits are lost.
\\*-----------------------------------------------------------------------------*/

component      cyclopentanol;
reviewStatus   unreviewed;

properties
(
{
    property       vapourPressure;
    operation      fit_antoine;   // type vaporPressureFit
    model          "Antoine  log10(Psat[bar]) = A - B/(T + C)";
    verdict        validationRefused;
    refusal        "No independent experimental evidence remains after fitting.";

    fittedParameters
    {
        A  5.01460307498;
        B  1711.88552824;
        C  -71.4865905951;
    }

    evidence
    {
        partitionFingerprint  "52ae169675599f75";   // frozen before the fit

        datasets
        (
        {
            role      fit;
            dataset   "constant/archiveExtracts/cyclopentanol-vapourPressure-acs.jced.6b00576.dat";
            doi       "10.1021/acs.jced.6b00576";
            sha256    "9f7efbb7dde9cf6bc27340bfd713813486a868d30ac415701e7553e8035529ec";
            provenance measured;
            archiveFile "acs.jced.6b00576.xml";
            system    "cyclopentanol";
        }
        {
            role      fit;
            dataset   "constant/archiveExtracts/cyclopentanol-vapourPressure-acs.jced.8b00855.dat";
            doi       "10.1021/acs.jced.8b00855";
            sha256    "f32170c96fccd3b4b5846fd201b1508d8c47a498a6b969b41c17619005d3cea7";
            provenance measured;
            archiveFile "acs.jced.8b00855.xml";
            system    "cyclopentanol";
        }
        );

        domain
        {
            coordinate  K;
            fit         { min 279.84; max 413.4; n 18; }
        }
    }

    metrics
    {
        r2InSample        0.999997481304;   // the model reproducing the points it was FITTED to
        //  NO HELD-OUT METRIC EXISTS.  r2InSample above is exactly that --
        //  in-sample -- and must not be read as an external check.
    }
}

);
`,Ge=`/*--------------------------------*- Choupo -*--------------------------------*\\
  CURATION DOSSIER -- a scientific work record, NOT runtime property data.

  NOTHING IN THIS FILE IS VISIBLE TO THE SOLVER.  Record resolution looks only
  in <case>/constant/, data/standards/ and data/local/, so a file here is out
  of its reach BY CONSTRUCTION -- not by convention.

  Nothing here has been promoted.  Curation state belongs to the evidence
  process; runtime trust belongs to the numerical record actually admitted
  to data/standards/, and only an explicit human promotion moves one there
  (bin/curate/promote-from-dossier).

  MATURITY IS PER PROPERTY, not per component: the properties below may hold
  different verdicts, and any whole-component summary is DERIVED from them
  rather than stored beside them.

  Regenerated on every run.  Hand edits are lost.
\\*-----------------------------------------------------------------------------*/

component      diButylCarbonate;
reviewStatus   unreviewed;

properties
(
{
    property       vapourPressure;
    operation      fit_antoine;   // type vaporPressureFit
    model          "Antoine  log10(Psat[bar]) = A - B/(T + C)";
    verdict        validationRefused;
    refusal        "No independent experimental evidence remains after fitting.";

    fittedParameters
    {
        A  4.01886992528;
        B  1504.34189732;
        C  -101.983954832;
    }

    evidence
    {
        partitionFingerprint  "038af7f1169ed078";   // frozen before the fit

        datasets
        (
        {
            role      fit;
            dataset   "constant/archiveExtracts/diButylCarbonate-vapourPressure-acs.jced.6b00517.dat";
            doi       "10.1021/acs.jced.6b00517";
            sha256    "46b268a0f01c7631c1edc996105125bbbb0a70f05ab8baa63b5601cbe38d2f5b";
            provenance measured;
            archiveFile "acs.jced.6b00517.xml";
            system    "diButylCarbonate";
        }
        {
            role      fit;
            dataset   "constant/archiveExtracts/diButylCarbonate-vapourPressure-j.jct.2008.02.012.dat";
            doi       "10.1016/j.jct.2008.02.012";
            sha256    "be53748e8b6274105a9c4cfc3e0cbd9cd338284829286478fff629568fa8cc72";
            provenance measured;
            archiveFile "j.jct.2008.02.012.xml";
            system    "diButylCarbonate";
        }
        );

        domain
        {
            coordinate  K;
            fit         { min 287.1; max 478.18; n 44; }
        }
    }

    metrics
    {
        r2InSample        0.99978907588;   // the model reproducing the points it was FITTED to
        //  NO HELD-OUT METRIC EXISTS.  r2InSample above is exactly that --
        //  in-sample -- and must not be read as an external check.
    }
}

);
`,Ke=`/*--------------------------------*- Choupo -*--------------------------------*\\
  CURATION DOSSIER -- a scientific work record, NOT runtime property data.

  NOTHING IN THIS FILE IS VISIBLE TO THE SOLVER.  Record resolution looks only
  in <case>/constant/, data/standards/ and data/local/, so a file here is out
  of its reach BY CONSTRUCTION -- not by convention.

  Nothing here has been promoted.  Curation state belongs to the evidence
  process; runtime trust belongs to the numerical record actually admitted
  to data/standards/, and only an explicit human promotion moves one there
  (bin/curate/promote-from-dossier).

  MATURITY IS PER PROPERTY, not per component: the properties below may hold
  different verdicts, and any whole-component summary is DERIVED from them
  rather than stored beside them.

  Regenerated on every run.  Hand edits are lost.
\\*-----------------------------------------------------------------------------*/

component      diEthylCarbonate;
reviewStatus   unreviewed;

properties
(
{
    property       vapourPressure;
    operation      fit_antoine;   // type vaporPressureFit
    model          "Antoine  log10(Psat[bar]) = A - B/(T + C)";
    verdict        validationRefused;
    refusal        "No independent experimental evidence remains after fitting.";

    fittedParameters
    {
        A  4.17416509512;
        B  1387.27706685;
        C  -67.090906648;
    }

    evidence
    {
        partitionFingerprint  "f0c9e05add2d9506";   // frozen before the fit

        datasets
        (
        {
            role      fit;
            dataset   "constant/archiveExtracts/diEthylCarbonate-vapourPressure-j.jct.2008.02.012.dat";
            doi       "10.1016/j.jct.2008.02.012";
            sha256    "be53748e8b6274105a9c4cfc3e0cbd9cd338284829286478fff629568fa8cc72";
            provenance measured;
            archiveFile "j.jct.2008.02.012.xml";
            system    "diEthylCarbonate";
        }
        {
            role      fit;
            dataset   "constant/archiveExtracts/diEthylCarbonate-vapourPressure-acs.jced.7b00295.dat";
            doi       "10.1021/acs.jced.7b00295";
            sha256    "3740cb0b456ec247eb321f2c8fd37427f7bddccce5e20cabf03d6a07ac6fc42a";
            provenance measured;
            archiveFile "acs.jced.7b00295.xml";
            system    "diEthylCarbonate";
        }
        {
            role      fit;
            dataset   "constant/archiveExtracts/diEthylCarbonate-vapourPressure-je200784y.dat";
            doi       "10.1021/je200784y";
            sha256    "a7695594db44f92cb072af34f2520d0f20b183d2bac95d6a6b68553b91ac8e9a";
            provenance measured;
            archiveFile "je200784y.xml";
            system    "diEthylCarbonate";
        }
        {
            role      fit;
            dataset   "constant/archiveExtracts/diEthylCarbonate-vapourPressure-je800984q.dat";
            doi       "10.1021/je800984q";
            sha256    "426f1ceda7058f05de3862b8cf2371db17f028e62a2b7e95587cd9fa5e0fab8b";
            provenance measured;
            archiveFile "je800984q.xml";
            system    "diEthylCarbonate";
        }
        {
            role      fit;
            dataset   "constant/archiveExtracts/diEthylCarbonate-vapourPressure-j.jct.2014.07.004.dat";
            doi       "10.1016/j.jct.2014.07.004";
            sha256    "cebd4567148a144cfaf01d7dbd9092730e77942aa417eb1f7e1bce0ff00d5075";
            provenance measured;
            archiveFile "j.jct.2014.07.004.xml";
            system    "diEthylCarbonate";
        }
        {
            role      fit;
            dataset   "constant/archiveExtracts/diEthylCarbonate-vapourPressure-acs.jced.7b00236.dat";
            doi       "10.1021/acs.jced.7b00236";
            sha256    "1e5e4c9d7d976906b09ca7e8bd4283f28e6358d83b65169c35fb422bc6201cdc";
            provenance measured;
            archiveFile "acs.jced.7b00236.xml";
            system    "diEthylCarbonate";
        }
        );

        domain
        {
            coordinate  K;
            fit         { min 238.15; max 399.27; n 167; }
        }
    }

    metrics
    {
        r2InSample        0.999868166659;   // the model reproducing the points it was FITTED to
        //  NO HELD-OUT METRIC EXISTS.  r2InSample above is exactly that --
        //  in-sample -- and must not be read as an external check.
    }
}

);
`,$e=`/*--------------------------------*- Choupo -*--------------------------------*\\
  CURATION DOSSIER -- a scientific work record, NOT runtime property data.

  NOTHING IN THIS FILE IS VISIBLE TO THE SOLVER.  Record resolution looks only
  in <case>/constant/, data/standards/ and data/local/, so a file here is out
  of its reach BY CONSTRUCTION -- not by convention.

  Nothing here has been promoted.  Curation state belongs to the evidence
  process; runtime trust belongs to the numerical record actually admitted
  to data/standards/, and only an explicit human promotion moves one there
  (bin/curate/promote-from-dossier).

  MATURITY IS PER PROPERTY, not per component: the properties below may hold
  different verdicts, and any whole-component summary is DERIVED from them
  rather than stored beside them.

  Regenerated on every run.  Hand edits are lost.
\\*-----------------------------------------------------------------------------*/

component      diIsobutylEther;
reviewStatus   unreviewed;

properties
(
{
    property       vapourPressure;
    operation      fit_antoine;   // type vaporPressureFit
    model          "Antoine  log10(Psat[bar]) = A - B/(T + C)";
    verdict        validationRefused;
    refusal        "No independent experimental evidence remains after fitting.";

    fittedParameters
    {
        A  4.00961226496;
        B  1329.40624807;
        C  -63.858335119;
    }

    evidence
    {
        partitionFingerprint  "fb53c85c7dfb5702";   // frozen before the fit

        datasets
        (
        {
            role      fit;
            dataset   "constant/archiveExtracts/diIsobutylEther-vapourPressure-je800998u.dat";
            doi       "10.1021/je800998u";
            sha256    "d28ffbe929d034dae410abecd0a449231f811cff47921261c2fbe1a7d091e49a";
            provenance measured;
            archiveFile "je800998u.xml";
            system    "diIsobutylEther";
        }
        );

        domain
        {
            coordinate  K;
            fit         { min 330.897; max 395.145; n 15; }
        }
    }

    metrics
    {
        r2InSample        0.999999922992;   // the model reproducing the points it was FITTED to
        //  NO HELD-OUT METRIC EXISTS.  r2InSample above is exactly that --
        //  in-sample -- and must not be read as an external check.
    }
}

);
`,We=`/*--------------------------------*- Choupo -*--------------------------------*\\
  CURATION DOSSIER -- a scientific work record, NOT runtime property data.

  NOTHING IN THIS FILE IS VISIBLE TO THE SOLVER.  Record resolution looks only
  in <case>/constant/, data/standards/ and data/local/, so a file here is out
  of its reach BY CONSTRUCTION -- not by convention.

  Nothing here has been promoted.  Curation state belongs to the evidence
  process; runtime trust belongs to the numerical record actually admitted
  to data/standards/, and only an explicit human promotion moves one there
  (bin/curate/promote-from-dossier).

  MATURITY IS PER PROPERTY, not per component: the properties below may hold
  different verdicts, and any whole-component summary is DERIVED from them
  rather than stored beside them.

  Regenerated on every run.  Hand edits are lost.
\\*-----------------------------------------------------------------------------*/

component      diNButylEther;
reviewStatus   unreviewed;

properties
(
{
    property       vapourPressure;
    operation      fit_antoine;   // type vaporPressureFit
    model          "Antoine  log10(Psat[bar]) = A - B/(T + C)";
    verdict        validationRefused;
    refusal        "No independent experimental evidence remains after fitting.";

    fittedParameters
    {
        A  4.22625991854;
        B  1490.07349279;
        C  -60.6246869427;
    }

    evidence
    {
        partitionFingerprint  "0d871ac4fd0d83e8";   // frozen before the fit

        datasets
        (
        {
            role      fit;
            dataset   "constant/archiveExtracts/diNButylEther-vapourPressure-j.fluid.2006.06.017.dat";
            doi       "10.1016/j.fluid.2006.06.017";
            sha256    "d401b8185db8ece41d83c2d7aea8b9d6e3398e5a6e065d1eea7704065e51cb2f";
            provenance measured;
            archiveFile "j.fluid.2006.06.017.xml";
            system    "diNButylEther";
        }
        {
            role      fit;
            dataset   "constant/archiveExtracts/diNButylEther-vapourPressure-j.fluid.2015.05.002.dat";
            doi       "10.1016/j.fluid.2015.05.002";
            sha256    "4011ad3ec096730aca9e21dd96b2ae5e4dae45c1b9e2d4c75b480c6d85261145";
            provenance measured;
            archiveFile "j.fluid.2015.05.002.xml";
            system    "diNButylEther";
        }
        {
            role      fit;
            dataset   "constant/archiveExtracts/diNButylEther-vapourPressure-j.fluid.2007.09.002.dat";
            doi       "10.1016/j.fluid.2007.09.002";
            sha256    "cce7a8570600ee9f4df212272220749a2dffe27a9fab8d95983e498f104300ef";
            provenance measured;
            archiveFile "j.fluid.2007.09.002.xml";
            system    "diNButylEther";
        }
        {
            role      fit;
            dataset   "constant/archiveExtracts/diNButylEther-vapourPressure-je7007523.dat";
            doi       "10.1021/je7007523";
            sha256    "c9b5b693d7e2459732b084f6fdb52e9529dbcdb0cdedc23dccfe2307e37dc22c";
            provenance measured;
            archiveFile "je7007523.xml";
            system    "diNButylEther";
        }
        );

        domain
        {
            coordinate  K;
            fit         { min 263.15; max 508.15; n 57; }
        }
    }

    metrics
    {
        r2InSample        0.999931261634;   // the model reproducing the points it was FITTED to
        //  NO HELD-OUT METRIC EXISTS.  r2InSample above is exactly that --
        //  in-sample -- and must not be read as an external check.
    }
}

);
`,Je=`/*--------------------------------*- Choupo -*--------------------------------*\\
  CURATION DOSSIER -- a scientific work record, NOT runtime property data.

  NOTHING IN THIS FILE IS VISIBLE TO THE SOLVER.  Record resolution looks only
  in <case>/constant/, data/standards/ and data/local/, so a file here is out
  of its reach BY CONSTRUCTION -- not by convention.

  Nothing here has been promoted.  Curation state belongs to the evidence
  process; runtime trust belongs to the numerical record actually admitted
  to data/standards/, and only an explicit human promotion moves one there
  (bin/curate/promote-from-dossier).

  MATURITY IS PER PROPERTY, not per component: the properties below may hold
  different verdicts, and any whole-component summary is DERIVED from them
  rather than stored beside them.

  Regenerated on every run.  Hand edits are lost.
\\*-----------------------------------------------------------------------------*/

component      diethanolamine;
reviewStatus   unreviewed;

properties
(
{
    property       vapourPressure;
    operation      fit_antoine;   // type vaporPressureFit
    model          "Antoine  log10(Psat[bar]) = A - B/(T + C)";
    verdict        validationRefused;
    refusal        "No independent experimental evidence remains after fitting.";

    fittedParameters
    {
        A  4.24656334076;
        B  1576.68827443;
        C  -168.464233131;
    }

    evidence
    {
        partitionFingerprint  "32c4bdfecb9d7f35";   // frozen before the fit

        datasets
        (
        {
            role      fit;
            dataset   "constant/archiveExtracts/diethanolamine-vapourPressure-je101259r.dat";
            doi       "10.1021/je101259r";
            sha256    "3963c4cf50d9b279a449dc923dd5a4301188be5d3ddeb2ee32ea2dd4eaecd626";
            provenance measured;
            archiveFile "je101259r.xml";
            system    "diethanolamine";
        }
        );

        domain
        {
            coordinate  K;
            fit         { min 427.5; max 452.4; n 5; }
        }
    }

    metrics
    {
        r2InSample        0.99995640559;   // the model reproducing the points it was FITTED to
        //  NO HELD-OUT METRIC EXISTS.  r2InSample above is exactly that --
        //  in-sample -- and must not be read as an external check.
    }
}

);
`,Ze=`/*--------------------------------*- Choupo -*--------------------------------*\\
  CURATION DOSSIER -- a scientific work record, NOT runtime property data.

  NOTHING IN THIS FILE IS VISIBLE TO THE SOLVER.  Record resolution looks only
  in <case>/constant/, data/standards/ and data/local/, so a file here is out
  of its reach BY CONSTRUCTION -- not by convention.

  Nothing here has been promoted.  Curation state belongs to the evidence
  process; runtime trust belongs to the numerical record actually admitted
  to data/standards/, and only an explicit human promotion moves one there
  (bin/curate/promote-from-dossier).

  MATURITY IS PER PROPERTY, not per component: the properties below may hold
  different verdicts, and any whole-component summary is DERIVED from them
  rather than stored beside them.

  Regenerated on every run.  Hand edits are lost.
\\*-----------------------------------------------------------------------------*/

component      diethyleneGlycolDibutylEther;
reviewStatus   unreviewed;

properties
(
{
    property       vapourPressure;
    operation      fit_antoine;   // type vaporPressureFit
    model          "Antoine  log10(Psat[bar]) = A - B/(T + C)";
    verdict        validationRefused;
    refusal        "No independent experimental evidence remains after fitting.";

    fittedParameters
    {
        A  5.26453317507;
        B  2768.47027506;
        C  -0.170267977003;
    }

    evidence
    {
        partitionFingerprint  "fc9a89d959f47654";   // frozen before the fit

        datasets
        (
        {
            role      fit;
            dataset   "constant/archiveExtracts/diethyleneGlycolDibutylEther-vapourPressure-je049627d.dat";
            doi       "10.1021/je049627d";
            sha256    "bb0c3de599fe62a72935f2494161a8f40de13969403005889f87880914f8e496";
            provenance measured;
            archiveFile "je049627d.xml";
            system    "diethyleneGlycolDibutylEther";
        }
        );

        domain
        {
            coordinate  K;
            fit         { min 403.15; max 473.15; n 10; }
        }
    }

    metrics
    {
        r2InSample        0.999941490403;   // the model reproducing the points it was FITTED to
        //  NO HELD-OUT METRIC EXISTS.  r2InSample above is exactly that --
        //  in-sample -- and must not be read as an external check.
    }
}

);
`,Qe=`/*--------------------------------*- Choupo -*--------------------------------*\\
  CURATION DOSSIER -- a scientific work record, NOT runtime property data.

  NOTHING IN THIS FILE IS VISIBLE TO THE SOLVER.  Record resolution looks only
  in <case>/constant/, data/standards/ and data/local/, so a file here is out
  of its reach BY CONSTRUCTION -- not by convention.

  Nothing here has been promoted.  Curation state belongs to the evidence
  process; runtime trust belongs to the numerical record actually admitted
  to data/standards/, and only an explicit human promotion moves one there
  (bin/curate/promote-from-dossier).

  MATURITY IS PER PROPERTY, not per component: the properties below may hold
  different verdicts, and any whole-component summary is DERIVED from them
  rather than stored beside them.

  Regenerated on every run.  Hand edits are lost.
\\*-----------------------------------------------------------------------------*/

component      diethyleneGlycolDiethylEther;
reviewStatus   unreviewed;

properties
(
{
    property       vapourPressure;
    operation      fit_antoine;   // type vaporPressureFit
    model          "Antoine  log10(Psat[bar]) = A - B/(T + C)";
    verdict        validationRefused;
    refusal        "No independent experimental evidence remains after fitting.";

    fittedParameters
    {
        A  5.19510428545;
        B  2142.91383939;
        C  -46.8234461208;
    }

    evidence
    {
        partitionFingerprint  "9390df72ba04dc14";   // frozen before the fit

        datasets
        (
        {
            role      fit;
            dataset   "constant/archiveExtracts/diethyleneGlycolDiethylEther-vapourPressure-je049627d.dat";
            doi       "10.1021/je049627d";
            sha256    "bb0c3de599fe62a72935f2494161a8f40de13969403005889f87880914f8e496";
            provenance measured;
            archiveFile "je049627d.xml";
            system    "diethyleneGlycolDiethylEther";
        }
        );

        domain
        {
            coordinate  K;
            fit         { min 363.15; max 453.15; n 13; }
        }
    }

    metrics
    {
        r2InSample        0.999965162478;   // the model reproducing the points it was FITTED to
        //  NO HELD-OUT METRIC EXISTS.  r2InSample above is exactly that --
        //  in-sample -- and must not be read as an external check.
    }
}

);
`,en=`/*--------------------------------*- Choupo -*--------------------------------*\\
  CURATION DOSSIER -- a scientific work record, NOT runtime property data.

  NOTHING IN THIS FILE IS VISIBLE TO THE SOLVER.  Record resolution looks only
  in <case>/constant/, data/standards/ and data/local/, so a file here is out
  of its reach BY CONSTRUCTION -- not by convention.

  Nothing here has been promoted.  Curation state belongs to the evidence
  process; runtime trust belongs to the numerical record actually admitted
  to data/standards/, and only an explicit human promotion moves one there
  (bin/curate/promote-from-dossier).

  MATURITY IS PER PROPERTY, not per component: the properties below may hold
  different verdicts, and any whole-component summary is DERIVED from them
  rather than stored beside them.

  Regenerated on every run.  Hand edits are lost.
\\*-----------------------------------------------------------------------------*/

component      diethyleneGlycolMonohexylEther;
reviewStatus   unreviewed;

properties
(
{
    property       vapourPressure;
    operation      fit_antoine;   // type vaporPressureFit
    model          "Antoine  log10(Psat[bar]) = A - B/(T + C)";
    verdict        validationRefused;
    refusal        "No independent experimental evidence remains after fitting.";

    fittedParameters
    {
        A  3.6739327728;
        B  1435.87871633;
        C  -147.08839781;
    }

    evidence
    {
        partitionFingerprint  "aa5f45e75e3a3864";   // frozen before the fit

        datasets
        (
        {
            role      fit;
            dataset   "constant/archiveExtracts/diethyleneGlycolMonohexylEther-vapourPressure-je034096z.dat";
            doi       "10.1021/je034096z";
            sha256    "e1dace98786fd0312c9b1ccef3145b20889fa12b4c6cd772be59b4f28f6fbf4f";
            provenance measured;
            archiveFile "je034096z.xml";
            system    "diethyleneGlycolMonohexylEther";
        }
        {
            role      fit;
            dataset   "constant/archiveExtracts/diethyleneGlycolMonohexylEther-vapourPressure-je049627d.dat";
            doi       "10.1021/je049627d";
            sha256    "bb0c3de599fe62a72935f2494161a8f40de13969403005889f87880914f8e496";
            provenance measured;
            archiveFile "je049627d.xml";
            system    "diethyleneGlycolMonohexylEther";
        }
        );

        domain
        {
            coordinate  K;
            fit         { min 402.96; max 473.15; n 18; }
        }
    }

    metrics
    {
        r2InSample        0.998819408014;   // the model reproducing the points it was FITTED to
        //  NO HELD-OUT METRIC EXISTS.  r2InSample above is exactly that --
        //  in-sample -- and must not be read as an external check.
    }
}

);
`,nn=`/*--------------------------------*- Choupo -*--------------------------------*\\
  CURATION DOSSIER -- a scientific work record, NOT runtime property data.

  NOTHING IN THIS FILE IS VISIBLE TO THE SOLVER.  Record resolution looks only
  in <case>/constant/, data/standards/ and data/local/, so a file here is out
  of its reach BY CONSTRUCTION -- not by convention.

  Nothing here has been promoted.  Curation state belongs to the evidence
  process; runtime trust belongs to the numerical record actually admitted
  to data/standards/, and only an explicit human promotion moves one there
  (bin/curate/promote-from-dossier).

  MATURITY IS PER PROPERTY, not per component: the properties below may hold
  different verdicts, and any whole-component summary is DERIVED from them
  rather than stored beside them.

  Regenerated on every run.  Hand edits are lost.
\\*-----------------------------------------------------------------------------*/

component      diethylethanolamine;
reviewStatus   unreviewed;

properties
(
{
    property       vapourPressure;
    operation      fit_antoine;   // type vaporPressureFit
    model          "Antoine  log10(Psat[bar]) = A - B/(T + C)";
    verdict        validationRefused;
    refusal        "No independent experimental evidence remains after fitting.";

    fittedParameters
    {
        A  4.61899228234;
        B  1719.97134688;
        C  -61.0753858192;
    }

    evidence
    {
        partitionFingerprint  "92b41ebcba77999e";   // frozen before the fit

        datasets
        (
        {
            role      fit;
            dataset   "constant/archiveExtracts/diethylethanolamine-vapourPressure-je049761y.dat";
            doi       "10.1021/je049761y";
            sha256    "df002e21a6af81808fc0ab6df77965b06bff0babbf3a176469fe95f2234618c4";
            provenance measured;
            archiveFile "je049761y.xml";
            system    "diethylethanolamine";
        }
        {
            role      fit;
            dataset   "constant/archiveExtracts/diethylethanolamine-vapourPressure-j.fluid.2018.05.032.dat";
            doi       "10.1016/j.fluid.2018.05.032";
            sha256    "a85a80fdac5669d66677c14327e721e31bd8694cbca52d3077cf52c36b4ca75c";
            provenance measured;
            archiveFile "j.fluid.2018.05.032.xml";
            system    "diethylethanolamine";
        }
        {
            role      fit;
            dataset   "constant/archiveExtracts/diethylethanolamine-vapourPressure-je101259r.dat";
            doi       "10.1021/je101259r";
            sha256    "3963c4cf50d9b279a449dc923dd5a4301188be5d3ddeb2ee32ea2dd4eaecd626";
            provenance measured;
            archiveFile "je101259r.xml";
            system    "diethylethanolamine";
        }
        );

        domain
        {
            coordinate  K;
            fit         { min 273.64; max 449.5; n 68; }
        }
    }

    metrics
    {
        r2InSample        0.999872075818;   // the model reproducing the points it was FITTED to
        //  NO HELD-OUT METRIC EXISTS.  r2InSample above is exactly that --
        //  in-sample -- and must not be read as an external check.
    }
}

);
`,tn=`/*--------------------------------*- Choupo -*--------------------------------*\\
  CURATION DOSSIER -- a scientific work record, NOT runtime property data.

  NOTHING IN THIS FILE IS VISIBLE TO THE SOLVER.  Record resolution looks only
  in <case>/constant/, data/standards/ and data/local/, so a file here is out
  of its reach BY CONSTRUCTION -- not by convention.

  Nothing here has been promoted.  Curation state belongs to the evidence
  process; runtime trust belongs to the numerical record actually admitted
  to data/standards/, and only an explicit human promotion moves one there
  (bin/curate/promote-from-dossier).

  MATURITY IS PER PROPERTY, not per component: the properties below may hold
  different verdicts, and any whole-component summary is DERIVED from them
  rather than stored beside them.

  Regenerated on every run.  Hand edits are lost.
\\*-----------------------------------------------------------------------------*/

component      dimethylSulfoxide;
reviewStatus   unreviewed;

properties
(
{
    property       vapourPressure;
    operation      fit_antoine;   // type vaporPressureFit
    model          "Antoine  log10(Psat[bar]) = A - B/(T + C)";
    verdict        validationRefused;
    refusal        "No independent experimental evidence remains after fitting.";

    fittedParameters
    {
        A  4.69364955777;
        B  1946.01699011;
        C  -48.5200814042;
    }

    evidence
    {
        partitionFingerprint  "04bee6827ed0394c";   // frozen before the fit

        datasets
        (
        {
            role      fit;
            dataset   "constant/archiveExtracts/dimethylSulfoxide-vapourPressure-j.fluid.2011.02.002.dat";
            doi       "10.1016/j.fluid.2011.02.002";
            sha256    "9bf78a3180df28aa81da573dba0a9b22d46c4f5191a2ceb451e13b17047b7a29";
            provenance measured;
            archiveFile "j.fluid.2011.02.002.xml";
            system    "dimethylSulfoxide";
        }
        {
            role      fit;
            dataset   "constant/archiveExtracts/dimethylSulfoxide-vapourPressure-je400531a.dat";
            doi       "10.1021/je400531a";
            sha256    "edd47a0f561183a4e83930823356df31104086f2203e1fce79bd027d5848225e";
            provenance measured;
            archiveFile "je400531a.xml";
            system    "dimethylSulfoxide";
        }
        {
            role      fit;
            dataset   "constant/archiveExtracts/dimethylSulfoxide-vapourPressure-j.jct.2018.04.014.dat";
            doi       "10.1016/j.jct.2018.04.014";
            sha256    "cbaa662fdf6729848746508f29cbaacda6ea575bb013c398006fec618746a9f8";
            provenance measured;
            archiveFile "j.jct.2018.04.014.xml";
            system    "dimethylSulfoxide";
        }
        );

        domain
        {
            coordinate  K;
            fit         { min 293.15; max 463.45; n 49; }
        }
    }

    metrics
    {
        r2InSample        0.999995343342;   // the model reproducing the points it was FITTED to
        //  NO HELD-OUT METRIC EXISTS.  r2InSample above is exactly that --
        //  in-sample -- and must not be read as an external check.
    }
}

);
`,an=`/*--------------------------------*- Choupo -*--------------------------------*\\
  CURATION DOSSIER -- a scientific work record, NOT runtime property data.

  NOTHING IN THIS FILE IS VISIBLE TO THE SOLVER.  Record resolution looks only
  in <case>/constant/, data/standards/ and data/local/, so a file here is out
  of its reach BY CONSTRUCTION -- not by convention.

  Nothing here has been promoted.  Curation state belongs to the evidence
  process; runtime trust belongs to the numerical record actually admitted
  to data/standards/, and only an explicit human promotion moves one there
  (bin/curate/promote-from-dossier).

  MATURITY IS PER PROPERTY, not per component: the properties below may hold
  different verdicts, and any whole-component summary is DERIVED from them
  rather than stored beside them.

  Regenerated on every run.  Hand edits are lost.
\\*-----------------------------------------------------------------------------*/

component      dimethylethanolamine;
reviewStatus   unreviewed;

properties
(
{
    property       vapourPressure;
    operation      fit_antoine;   // type vaporPressureFit
    model          "Antoine  log10(Psat[bar]) = A - B/(T + C)";
    verdict        validationRefused;
    refusal        "No independent experimental evidence remains after fitting.";

    fittedParameters
    {
        A  5.2818640296;
        B  2003.25390015;
        C  -27.7426689283;
    }

    evidence
    {
        partitionFingerprint  "f2509bf74ee9cb1b";   // frozen before the fit

        datasets
        (
        {
            role      fit;
            dataset   "constant/archiveExtracts/dimethylethanolamine-vapourPressure-je049761y.dat";
            doi       "10.1021/je049761y";
            sha256    "df002e21a6af81808fc0ab6df77965b06bff0babbf3a176469fe95f2234618c4";
            provenance measured;
            archiveFile "je049761y.xml";
            system    "dimethylethanolamine";
        }
        {
            role      fit;
            dataset   "constant/archiveExtracts/dimethylethanolamine-vapourPressure-j.jct.2013.03.020.dat";
            doi       "10.1016/j.jct.2013.03.020";
            sha256    "f95b18479b755cf040e67d4972cea8eb700cf4c9dc094f83e6ca74cac57d78df";
            provenance measured;
            archiveFile "j.jct.2013.03.020.xml";
            system    "dimethylethanolamine";
        }
        {
            role      fit;
            dataset   "constant/archiveExtracts/dimethylethanolamine-vapourPressure-je101259r.dat";
            doi       "10.1021/je101259r";
            sha256    "3963c4cf50d9b279a449dc923dd5a4301188be5d3ddeb2ee32ea2dd4eaecd626";
            provenance measured;
            archiveFile "je101259r.xml";
            system    "dimethylethanolamine";
        }
        );

        domain
        {
            coordinate  K;
            fit         { min 273.15; max 447.8; n 69; }
        }
    }

    metrics
    {
        r2InSample        0.999092262955;   // the model reproducing the points it was FITTED to
        //  NO HELD-OUT METRIC EXISTS.  r2InSample above is exactly that --
        //  in-sample -- and must not be read as an external check.
    }
}

);
`,rn=`/*--------------------------------*- Choupo -*--------------------------------*\\
  CURATION DOSSIER -- a scientific work record, NOT runtime property data.

  NOTHING IN THIS FILE IS VISIBLE TO THE SOLVER.  Record resolution looks only
  in <case>/constant/, data/standards/ and data/local/, so a file here is out
  of its reach BY CONSTRUCTION -- not by convention.

  Nothing here has been promoted.  Curation state belongs to the evidence
  process; runtime trust belongs to the numerical record actually admitted
  to data/standards/, and only an explicit human promotion moves one there
  (bin/curate/promote-from-dossier).

  MATURITY IS PER PROPERTY, not per component: the properties below may hold
  different verdicts, and any whole-component summary is DERIVED from them
  rather than stored beside them.

  Regenerated on every run.  Hand edits are lost.
\\*-----------------------------------------------------------------------------*/

component      ethylDecanoate;
reviewStatus   unreviewed;

properties
(
{
    property       vapourPressure;
    operation      fit_antoine;   // type vaporPressureFit
    model          "Antoine  log10(Psat[bar]) = A - B/(T + C)";
    verdict        validationRefused;
    refusal        "No independent experimental evidence remains after fitting.";

    fittedParameters
    {
        A  5.19510190111;
        B  2363.31369233;
        C  -56.253429145;
    }

    evidence
    {
        partitionFingerprint  "f27303de280ac443";   // frozen before the fit

        datasets
        (
        {
            role      fit;
            dataset   "constant/archiveExtracts/ethylDecanoate-vapourPressure-je200730m.dat";
            doi       "10.1021/je200730m";
            sha256    "89e21079d1717a6da0c018faf20d0fac96752adde6c0f60670b055c8ba6b2435";
            provenance measured;
            archiveFile "je200730m.xml";
            system    "ethylDecanoate";
        }
        {
            role      fit;
            dataset   "constant/archiveExtracts/ethylDecanoate-vapourPressure-je301294a.dat";
            doi       "10.1021/je301294a";
            sha256    "94f2fc2c4da9adb28f7fa75747d84381bda218e82ef25a9eb2f6ad0efee55874";
            provenance measured;
            archiveFile "je301294a.xml";
            system    "ethylDecanoate";
        }
        {
            role      fit;
            dataset   "constant/archiveExtracts/ethylDecanoate-vapourPressure-je900093h.dat";
            doi       "10.1021/je900093h";
            sha256    "9b78b327f03463de89775ed7b368a9268673c04d5ef641d47441fd3e96e93cb9";
            provenance measured;
            archiveFile "je900093h.xml";
            system    "ethylDecanoate";
        }
        );

        domain
        {
            coordinate  K;
            fit         { min 293.77; max 462.37; n 29; }
        }
    }

    metrics
    {
        r2InSample        0.999843949725;   // the model reproducing the points it was FITTED to
        //  NO HELD-OUT METRIC EXISTS.  r2InSample above is exactly that --
        //  in-sample -- and must not be read as an external check.
    }
}

);
`,on=`/*--------------------------------*- Choupo -*--------------------------------*\\
  CURATION DOSSIER -- a scientific work record, NOT runtime property data.

  NOTHING IN THIS FILE IS VISIBLE TO THE SOLVER.  Record resolution looks only
  in <case>/constant/, data/standards/ and data/local/, so a file here is out
  of its reach BY CONSTRUCTION -- not by convention.

  Nothing here has been promoted.  Curation state belongs to the evidence
  process; runtime trust belongs to the numerical record actually admitted
  to data/standards/, and only an explicit human promotion moves one there
  (bin/curate/promote-from-dossier).

  MATURITY IS PER PROPERTY, not per component: the properties below may hold
  different verdicts, and any whole-component summary is DERIVED from them
  rather than stored beside them.

  Regenerated on every run.  Hand edits are lost.
\\*-----------------------------------------------------------------------------*/

component      ethylOctanoate;
reviewStatus   unreviewed;

properties
(
{
    property       vapourPressure;
    operation      fit_antoine;   // type vaporPressureFit
    model          "Antoine  log10(Psat[bar]) = A - B/(T + C)";
    verdict        validationRefused;
    refusal        "No independent experimental evidence remains after fitting.";

    fittedParameters
    {
        A  4.28928298603;
        B  1723.64154729;
        C  -80.396171833;
    }

    evidence
    {
        partitionFingerprint  "9dc2f12f27dec488";   // frozen before the fit

        datasets
        (
        {
            role      fit;
            dataset   "constant/archiveExtracts/ethylOctanoate-vapourPressure-je200730m.dat";
            doi       "10.1021/je200730m";
            sha256    "89e21079d1717a6da0c018faf20d0fac96752adde6c0f60670b055c8ba6b2435";
            provenance measured;
            archiveFile "je200730m.xml";
            system    "ethylOctanoate";
        }
        );

        domain
        {
            coordinate  K;
            fit         { min 273.26; max 452.3; n 17; }
        }
    }

    metrics
    {
        r2InSample        0.999950262952;   // the model reproducing the points it was FITTED to
        //  NO HELD-OUT METRIC EXISTS.  r2InSample above is exactly that --
        //  in-sample -- and must not be read as an external check.
    }
}

);
`,dn=`/*--------------------------------*- Choupo -*--------------------------------*\\
  CURATION DOSSIER -- a scientific work record, NOT runtime property data.

  NOTHING IN THIS FILE IS VISIBLE TO THE SOLVER.  Record resolution looks only
  in <case>/constant/, data/standards/ and data/local/, so a file here is out
  of its reach BY CONSTRUCTION -- not by convention.

  Nothing here has been promoted.  Curation state belongs to the evidence
  process; runtime trust belongs to the numerical record actually admitted
  to data/standards/, and only an explicit human promotion moves one there
  (bin/curate/promote-from-dossier).

  MATURITY IS PER PROPERTY, not per component: the properties below may hold
  different verdicts, and any whole-component summary is DERIVED from them
  rather than stored beside them.

  Regenerated on every run.  Hand edits are lost.
\\*-----------------------------------------------------------------------------*/

component      furfural;
reviewStatus   unreviewed;

properties
(
{
    property       vapourPressure;
    operation      fit_antoine;   // type vaporPressureFit
    model          "Antoine  log10(Psat[bar]) = A - B/(T + C)";
    verdict        validationRefused;
    refusal        "No independent experimental evidence remains after fitting.";

    fittedParameters
    {
        A  4.57855408926;
        B  1695.19356892;
        C  -61.6012877477;
    }

    evidence
    {
        partitionFingerprint  "104f0d23f2f3d94f";   // frozen before the fit

        datasets
        (
        {
            role      fit;
            dataset   "constant/archiveExtracts/furfural-vapourPressure-acs.jced.7b00574.dat";
            doi       "10.1021/acs.jced.7b00574";
            sha256    "a10ed94316601b1f8b223698c78b8234f18edbe637c9663236ec77b2c5adc1bb";
            provenance measured;
            archiveFile "acs.jced.7b00574.xml";
            system    "furfural";
        }
        {
            role      fit;
            dataset   "constant/archiveExtracts/furfural-vapourPressure-je060406c.dat";
            doi       "10.1021/je060406c";
            sha256    "3dd393e47cf38af4405874740ce38d7802ad17805f6e2883b410cd05212068e7";
            provenance measured;
            archiveFile "je060406c.xml";
            system    "furfural";
        }
        {
            role      fit;
            dataset   "constant/archiveExtracts/furfural-vapourPressure-je020117y.dat";
            doi       "10.1021/je020117y";
            sha256    "d1021fbc89eeb52b6ec7aee907fde898c4fd8d431977e1449e0766c4dae85244";
            provenance measured;
            archiveFile "je020117y.xml";
            system    "furfural";
        }
        );

        domain
        {
            coordinate  K;
            fit         { min 276.7; max 429.5; n 44; }
        }
    }

    metrics
    {
        r2InSample        0.999782574573;   // the model reproducing the points it was FITTED to
        //  NO HELD-OUT METRIC EXISTS.  r2InSample above is exactly that --
        //  in-sample -- and must not be read as an external check.
    }
}

);
`,sn=`/*--------------------------------*- Choupo -*--------------------------------*\\
  CURATION DOSSIER -- a scientific work record, NOT runtime property data.

  NOTHING IN THIS FILE IS VISIBLE TO THE SOLVER.  Record resolution looks only
  in <case>/constant/, data/standards/ and data/local/, so a file here is out
  of its reach BY CONSTRUCTION -- not by convention.

  Nothing here has been promoted.  Curation state belongs to the evidence
  process; runtime trust belongs to the numerical record actually admitted
  to data/standards/, and only an explicit human promotion moves one there
  (bin/curate/promote-from-dossier).

  MATURITY IS PER PROPERTY, not per component: the properties below may hold
  different verdicts, and any whole-component summary is DERIVED from them
  rather than stored beside them.

  Regenerated on every run.  Hand edits are lost.
\\*-----------------------------------------------------------------------------*/

component      glycerol;
reviewStatus   unreviewed;

properties
(
{
    property       vapourPressure;
    operation      fit_antoine;   // type vaporPressureFit
    model          "Antoine  log10(Psat[bar]) = A - B/(T + C)";
    verdict        validationRefused;
    refusal        "No independent experimental evidence remains after fitting.";

    fittedParameters
    {
        A  5.80869633206;
        B  2818.05883921;
        C  -72.3002910192;
    }

    evidence
    {
        partitionFingerprint  "f0ce4924518ea571";   // frozen before the fit

        datasets
        (
        {
            role      fit;
            dataset   "constant/archiveExtracts/glycerol-vapourPressure-j.fluid.2015.03.038.dat";
            doi       "10.1016/j.fluid.2015.03.038";
            sha256    "ca7b3a8fa7e2b6263a061430f5a8b9cb35c5878255732c8aa56949fb6321e049";
            provenance measured;
            archiveFile "j.fluid.2015.03.038.xml";
            system    "glycerol";
        }
        {
            role      fit;
            dataset   "constant/archiveExtracts/glycerol-vapourPressure-je200766t.dat";
            doi       "10.1021/je200766t";
            sha256    "3d1646bd31387e679d96d72530e61de2b93919168e8d5b6ab8374ea28e90756a";
            provenance measured;
            archiveFile "je200766t.xml";
            system    "glycerol";
        }
        {
            role      fit;
            dataset   "constant/archiveExtracts/glycerol-vapourPressure-j.jct.2012.09.032.dat";
            doi       "10.1016/j.jct.2012.09.032";
            sha256    "59a183a753d0a24d0e7c7eb71a7035153ff0e9a77aa9ea356a84e752eedf5aa4";
            provenance measured;
            archiveFile "j.jct.2012.09.032.xml";
            system    "glycerol";
        }
        {
            role      fit;
            dataset   "constant/archiveExtracts/glycerol-vapourPressure-je800070y.dat";
            doi       "10.1021/je800070y";
            sha256    "61ca526726acbf3b877653dcc701e15a4ad758cc2f1a8709f3f9e7f0d8c8b127";
            provenance measured;
            archiveFile "je800070y.xml";
            system    "glycerol";
        }
        );

        domain
        {
            coordinate  K;
            fit         { min 303.59; max 543.15; n 134; }
        }
    }

    metrics
    {
        r2InSample        0.999561297891;   // the model reproducing the points it was FITTED to
        //  NO HELD-OUT METRIC EXISTS.  r2InSample above is exactly that --
        //  in-sample -- and must not be read as an external check.
    }
}

);
`,ln=`/*--------------------------------*- Choupo -*--------------------------------*\\
  CURATION DOSSIER -- a scientific work record, NOT runtime property data.

  NOTHING IN THIS FILE IS VISIBLE TO THE SOLVER.  Record resolution looks only
  in <case>/constant/, data/standards/ and data/local/, so a file here is out
  of its reach BY CONSTRUCTION -- not by convention.

  Nothing here has been promoted.  Curation state belongs to the evidence
  process; runtime trust belongs to the numerical record actually admitted
  to data/standards/, and only an explicit human promotion moves one there
  (bin/curate/promote-from-dossier).

  MATURITY IS PER PROPERTY, not per component: the properties below may hold
  different verdicts, and any whole-component summary is DERIVED from them
  rather than stored beside them.

  Regenerated on every run.  Hand edits are lost.
\\*-----------------------------------------------------------------------------*/

component      hexafluorobenzene;
reviewStatus   unreviewed;

properties
(
{
    property       vapourPressure;
    operation      fit_antoine;   // type vaporPressureFit
    model          "Antoine  log10(Psat[bar]) = A - B/(T + C)";
    verdict        validationRefused;
    refusal        "No independent experimental evidence remains after fitting.";

    fittedParameters
    {
        A  4.67819536491;
        B  1507.94347153;
        C  -30.0750635476;
    }

    evidence
    {
        partitionFingerprint  "c10fa27e47d93814";   // frozen before the fit

        datasets
        (
        {
            role      fit;
            dataset   "constant/archiveExtracts/hexafluorobenzene-vapourPressure-je050056e.dat";
            doi       "10.1021/je050056e";
            sha256    "dac8ea38ea8c1c85de34f3074ca3b0e7e923679796fa91160586aa7171f251d7";
            provenance measured;
            archiveFile "je050056e.xml";
            system    "hexafluorobenzene";
        }
        );

        domain
        {
            coordinate  K;
            fit         { min 288.23; max 333.01; n 10; }
        }
    }

    metrics
    {
        r2InSample        0.999978368419;   // the model reproducing the points it was FITTED to
        //  NO HELD-OUT METRIC EXISTS.  r2InSample above is exactly that --
        //  in-sample -- and must not be read as an external check.
    }
}

);
`,cn=`/*--------------------------------*- Choupo -*--------------------------------*\\
  CURATION DOSSIER -- a scientific work record, NOT runtime property data.

  NOTHING IN THIS FILE IS VISIBLE TO THE SOLVER.  Record resolution looks only
  in <case>/constant/, data/standards/ and data/local/, so a file here is out
  of its reach BY CONSTRUCTION -- not by convention.

  Nothing here has been promoted.  Curation state belongs to the evidence
  process; runtime trust belongs to the numerical record actually admitted
  to data/standards/, and only an explicit human promotion moves one there
  (bin/curate/promote-from-dossier).

  MATURITY IS PER PROPERTY, not per component: the properties below may hold
  different verdicts, and any whole-component summary is DERIVED from them
  rather than stored beside them.

  Regenerated on every run.  Hand edits are lost.
\\*-----------------------------------------------------------------------------*/

component      mNitrotoluene;
reviewStatus   unreviewed;

properties
(
{
    property       vapourPressure;
    operation      fit_antoine;   // type vaporPressureFit
    model          "Antoine  log10(Psat[bar]) = A - B/(T + C)";
    verdict        validationRefused;
    refusal        "No independent experimental evidence remains after fitting.";

    fittedParameters
    {
        A  6.59220680973;
        B  3238.60435642;
        C  9.94498925265;
    }

    evidence
    {
        partitionFingerprint  "f4e1101df2d2805e";   // frozen before the fit

        datasets
        (
        {
            role      fit;
            dataset   "constant/archiveExtracts/mNitrotoluene-vapourPressure-j.jct.2017.03.029.dat";
            doi       "10.1016/j.jct.2017.03.029";
            sha256    "99234f145a90ea93b06435e7e1e75588225d1242ca2bdc8c99f804ebeef86a0c";
            provenance measured;
            archiveFile "j.jct.2017.03.029.xml";
            system    "mNitrotoluene";
        }
        );

        domain
        {
            coordinate  K;
            fit         { min 290.6; max 338; n 34; }
        }
    }

    metrics
    {
        r2InSample        0.999449002049;   // the model reproducing the points it was FITTED to
        //  NO HELD-OUT METRIC EXISTS.  r2InSample above is exactly that --
        //  in-sample -- and must not be read as an external check.
    }
}

);
`,mn=`/*--------------------------------*- Choupo -*--------------------------------*\\
  CURATION DOSSIER -- a scientific work record, NOT runtime property data.

  NOTHING IN THIS FILE IS VISIBLE TO THE SOLVER.  Record resolution looks only
  in <case>/constant/, data/standards/ and data/local/, so a file here is out
  of its reach BY CONSTRUCTION -- not by convention.

  Nothing here has been promoted.  Curation state belongs to the evidence
  process; runtime trust belongs to the numerical record actually admitted
  to data/standards/, and only an explicit human promotion moves one there
  (bin/curate/promote-from-dossier).

  MATURITY IS PER PROPERTY, not per component: the properties below may hold
  different verdicts, and any whole-component summary is DERIVED from them
  rather than stored beside them.

  Regenerated on every run.  Hand edits are lost.
\\*-----------------------------------------------------------------------------*/

component      methylButanoate;
reviewStatus   unreviewed;

properties
(
{
    property       vapourPressure;
    operation      fit_antoine;   // type vaporPressureFit
    model          "Antoine  log10(Psat[bar]) = A - B/(T + C)";
    verdict        validationRefused;
    refusal        "No independent experimental evidence remains after fitting.";

    fittedParameters
    {
        A  4.10530592098;
        B  1260.17482949;
        C  -66.9246521457;
    }

    evidence
    {
        partitionFingerprint  "f15728ba94aa0c9f";   // frozen before the fit

        datasets
        (
        {
            role      fit;
            dataset   "constant/archiveExtracts/methylButanoate-vapourPressure-je034290l.dat";
            doi       "10.1021/je034290l";
            sha256    "11374a5c6eabe81413021cb4686da1042c7e789f9f0da53b4f7142a3e54933b5";
            provenance measured;
            archiveFile "je034290l.xml";
            system    "methylButanoate";
        }
        {
            role      fit;
            dataset   "constant/archiveExtracts/methylButanoate-vapourPressure-je300799f.dat";
            doi       "10.1021/je300799f";
            sha256    "2b9f12af8b997bb1fff5760f52cf3597321cffbf8f72a5c44165755f4179be91";
            provenance measured;
            archiveFile "je300799f.xml";
            system    "methylButanoate";
        }
        {
            role      fit;
            dataset   "constant/archiveExtracts/methylButanoate-vapourPressure-j.fluid.2008.02.001.dat";
            doi       "10.1016/j.fluid.2008.02.001";
            sha256    "5536401ae961738619cd4c07612866147bb1e9eeb3cccf631d1b7a5733db41d2";
            provenance measured;
            archiveFile "j.fluid.2008.02.001.xml";
            system    "methylButanoate";
        }
        {
            role      fit;
            dataset   "constant/archiveExtracts/methylButanoate-vapourPressure-j.jct.2011.10.001.dat";
            doi       "10.1016/j.jct.2011.10.001";
            sha256    "9acd61b7088db4e77a0cc9fbed2b8f26a13e7f29c50137d983ec23daaf8d0fb5";
            provenance measured;
            archiveFile "j.jct.2011.10.001.xml";
            system    "methylButanoate";
        }
        );

        domain
        {
            coordinate  K;
            fit         { min 274.3; max 412.83; n 191; }
        }
    }

    metrics
    {
        r2InSample        0.999461707612;   // the model reproducing the points it was FITTED to
        //  NO HELD-OUT METRIC EXISTS.  r2InSample above is exactly that --
        //  in-sample -- and must not be read as an external check.
    }
}

);
`,bn=`/*--------------------------------*- Choupo -*--------------------------------*\\
  CURATION DOSSIER -- a scientific work record, NOT runtime property data.

  NOTHING IN THIS FILE IS VISIBLE TO THE SOLVER.  Record resolution looks only
  in <case>/constant/, data/standards/ and data/local/, so a file here is out
  of its reach BY CONSTRUCTION -- not by convention.

  Nothing here has been promoted.  Curation state belongs to the evidence
  process; runtime trust belongs to the numerical record actually admitted
  to data/standards/, and only an explicit human promotion moves one there
  (bin/curate/promote-from-dossier).

  MATURITY IS PER PROPERTY, not per component: the properties below may hold
  different verdicts, and any whole-component summary is DERIVED from them
  rather than stored beside them.

  Regenerated on every run.  Hand edits are lost.
\\*-----------------------------------------------------------------------------*/

component      methylDecanoate;
reviewStatus   unreviewed;

properties
(
{
    property       vapourPressure;
    operation      fit_antoine;   // type vaporPressureFit
    model          "Antoine  log10(Psat[bar]) = A - B/(T + C)";
    verdict        validationRefused;
    refusal        "No independent experimental evidence remains after fitting.";

    fittedParameters
    {
        A  5.08036838376;
        B  2219.8942147;
        C  -60.2571106457;
    }

    evidence
    {
        partitionFingerprint  "05f56d2ce1ec0d29";   // frozen before the fit

        datasets
        (
        {
            role      fit;
            dataset   "constant/archiveExtracts/methylDecanoate-vapourPressure-j.jct.2019.01.007.dat";
            doi       "10.1016/j.jct.2019.01.007";
            sha256    "8340b475ec1fa4819c9516cd5e7f9215fff266556b4aa3aabe82ca183dae19fa";
            provenance measured;
            archiveFile "j.jct.2019.01.007.xml";
            system    "methylDecanoate";
        }
        {
            role      fit;
            dataset   "constant/archiveExtracts/methylDecanoate-vapourPressure-j.jct.2016.07.024.dat";
            doi       "10.1016/j.jct.2016.07.024";
            sha256    "ab5f70414539ba6b3049ce1befb3819b033d81f9e8d72d2c46a028563d033bf0";
            provenance measured;
            archiveFile "j.jct.2016.07.024.xml";
            system    "methylDecanoate";
        }
        );

        domain
        {
            coordinate  K;
            fit         { min 273.35; max 432.65; n 157; }
        }
    }

    metrics
    {
        r2InSample        0.999970623079;   // the model reproducing the points it was FITTED to
        //  NO HELD-OUT METRIC EXISTS.  r2InSample above is exactly that --
        //  in-sample -- and must not be read as an external check.
    }
}

);
`,un=`/*--------------------------------*- Choupo -*--------------------------------*\\
  CURATION DOSSIER -- a scientific work record, NOT runtime property data.

  NOTHING IN THIS FILE IS VISIBLE TO THE SOLVER.  Record resolution looks only
  in <case>/constant/, data/standards/ and data/local/, so a file here is out
  of its reach BY CONSTRUCTION -- not by convention.

  Nothing here has been promoted.  Curation state belongs to the evidence
  process; runtime trust belongs to the numerical record actually admitted
  to data/standards/, and only an explicit human promotion moves one there
  (bin/curate/promote-from-dossier).

  MATURITY IS PER PROPERTY, not per component: the properties below may hold
  different verdicts, and any whole-component summary is DERIVED from them
  rather than stored beside them.

  Regenerated on every run.  Hand edits are lost.
\\*-----------------------------------------------------------------------------*/

component      methylDiEthanolAmine;
reviewStatus   unreviewed;

properties
(
{
    property       vapourPressure;
    operation      fit_antoine;   // type vaporPressureFit
    model          "Antoine  log10(Psat[bar]) = A - B/(T + C)";
    verdict        validationRefused;
    refusal        "No independent experimental evidence remains after fitting.";

    fittedParameters
    {
        A  5.72879504246;
        B  3050.85029386;
        C  8.07897284389;
    }

    evidence
    {
        partitionFingerprint  "9e0cf295e7a03a2d";   // frozen before the fit

        datasets
        (
        {
            role      fit;
            dataset   "constant/archiveExtracts/methylDiEthanolAmine-vapourPressure-je060269j.dat";
            doi       "10.1021/je060269j";
            sha256    "02c8cb4d842126b8f3f721cab2b12b266f42b2da0534cbb9ac3acc39d86a0acf";
            provenance measured;
            archiveFile "je060269j.xml";
            system    "methylDiEthanolAmine";
        }
        {
            role      fit;
            dataset   "constant/archiveExtracts/methylDiEthanolAmine-vapourPressure-je400373d.dat";
            doi       "10.1021/je400373d";
            sha256    "5fd41a9baa3403e420dbd131ccdfe658a984d48b0965881982e740966f424eda";
            provenance measured;
            archiveFile "je400373d.xml";
            system    "methylDiEthanolAmine";
        }
        {
            role      fit;
            dataset   "constant/archiveExtracts/methylDiEthanolAmine-vapourPressure-je800290k.dat";
            doi       "10.1021/je800290k";
            sha256    "51baf217f8b5f257b4c5c26ec4713d84bc714c8775fffbd01af931591160e9c7";
            provenance measured;
            archiveFile "je800290k.xml";
            system    "methylDiEthanolAmine";
        }
        {
            role      fit;
            dataset   "constant/archiveExtracts/methylDiEthanolAmine-vapourPressure-acs.jced.8b00054.dat";
            doi       "10.1021/acs.jced.8b00054";
            sha256    "87fdfe4ce4455970e1a0d55c274cb156e01b4f7f3922db74ae4e4ff88b26f625";
            provenance measured;
            archiveFile "acs.jced.8b00054.xml";
            system    "methylDiEthanolAmine";
        }
        );

        domain
        {
            coordinate  K;
            fit         { min 409.69; max 738.4; n 28; }
        }
    }

    metrics
    {
        r2InSample        0.998996747803;   // the model reproducing the points it was FITTED to
        //  NO HELD-OUT METRIC EXISTS.  r2InSample above is exactly that --
        //  in-sample -- and must not be read as an external check.
    }
}

);
`,pn=`/*--------------------------------*- Choupo -*--------------------------------*\\
  CURATION DOSSIER -- a scientific work record, NOT runtime property data.

  NOTHING IN THIS FILE IS VISIBLE TO THE SOLVER.  Record resolution looks only
  in <case>/constant/, data/standards/ and data/local/, so a file here is out
  of its reach BY CONSTRUCTION -- not by convention.

  Nothing here has been promoted.  Curation state belongs to the evidence
  process; runtime trust belongs to the numerical record actually admitted
  to data/standards/, and only an explicit human promotion moves one there
  (bin/curate/promote-from-dossier).

  MATURITY IS PER PROPERTY, not per component: the properties below may hold
  different verdicts, and any whole-component summary is DERIVED from them
  rather than stored beside them.

  Regenerated on every run.  Hand edits are lost.
\\*-----------------------------------------------------------------------------*/

component      methylHeptanoate;
reviewStatus   unreviewed;

properties
(
{
    property       vapourPressure;
    operation      fit_antoine;   // type vaporPressureFit
    model          "Antoine  log10(Psat[bar]) = A - B/(T + C)";
    verdict        validationRefused;
    refusal        "No independent experimental evidence remains after fitting.";

    fittedParameters
    {
        A  4.3562331366;
        B  1614.76708928;
        C  -71.8500056703;
    }

    evidence
    {
        partitionFingerprint  "b743a66d1e06ad4b";   // frozen before the fit

        datasets
        (
        {
            role      fit;
            dataset   "constant/archiveExtracts/methylHeptanoate-vapourPressure-je800915d.dat";
            doi       "10.1021/je800915d";
            sha256    "201b89a6ab7adecfd45e74868b6f7770c8f84d31cc174c0c41d44be657e19d69";
            provenance measured;
            archiveFile "je800915d.xml";
            system    "methylHeptanoate";
        }
        {
            role      fit;
            dataset   "constant/archiveExtracts/methylHeptanoate-vapourPressure-j.fluid.2008.02.001.dat";
            doi       "10.1016/j.fluid.2008.02.001";
            sha256    "5536401ae961738619cd4c07612866147bb1e9eeb3cccf631d1b7a5733db41d2";
            provenance measured;
            archiveFile "j.fluid.2008.02.001.xml";
            system    "methylHeptanoate";
        }
        );

        domain
        {
            coordinate  K;
            fit         { min 278.1; max 443.94; n 39; }
        }
    }

    metrics
    {
        r2InSample        0.999975820742;   // the model reproducing the points it was FITTED to
        //  NO HELD-OUT METRIC EXISTS.  r2InSample above is exactly that --
        //  in-sample -- and must not be read as an external check.
    }
}

);
`,fn=`/*--------------------------------*- Choupo -*--------------------------------*\\
  CURATION DOSSIER -- a scientific work record, NOT runtime property data.

  NOTHING IN THIS FILE IS VISIBLE TO THE SOLVER.  Record resolution looks only
  in <case>/constant/, data/standards/ and data/local/, so a file here is out
  of its reach BY CONSTRUCTION -- not by convention.

  Nothing here has been promoted.  Curation state belongs to the evidence
  process; runtime trust belongs to the numerical record actually admitted
  to data/standards/, and only an explicit human promotion moves one there
  (bin/curate/promote-from-dossier).

  MATURITY IS PER PROPERTY, not per component: the properties below may hold
  different verdicts, and any whole-component summary is DERIVED from them
  rather than stored beside them.

  Regenerated on every run.  Hand edits are lost.
\\*-----------------------------------------------------------------------------*/

component      methylHexanoate;
reviewStatus   unreviewed;

properties
(
{
    property       vapourPressure;
    operation      fit_antoine;   // type vaporPressureFit
    model          "Antoine  log10(Psat[bar]) = A - B/(T + C)";
    verdict        validationRefused;
    refusal        "No independent experimental evidence remains after fitting.";

    fittedParameters
    {
        A  4.59695314719;
        B  1685.68933247;
        C  -55.0002580252;
    }

    evidence
    {
        partitionFingerprint  "2543f2f04641e9f5";   // frozen before the fit

        datasets
        (
        {
            role      fit;
            dataset   "constant/archiveExtracts/methylHexanoate-vapourPressure-j.fluid.2008.02.001.dat";
            doi       "10.1016/j.fluid.2008.02.001";
            sha256    "5536401ae961738619cd4c07612866147bb1e9eeb3cccf631d1b7a5733db41d2";
            provenance measured;
            archiveFile "j.fluid.2008.02.001.xml";
            system    "methylHexanoate";
        }
        {
            role      fit;
            dataset   "constant/archiveExtracts/methylHexanoate-vapourPressure-j.jct.2016.07.024.dat";
            doi       "10.1016/j.jct.2016.07.024";
            sha256    "ab5f70414539ba6b3049ce1befb3819b033d81f9e8d72d2c46a028563d033bf0";
            provenance measured;
            archiveFile "j.jct.2016.07.024.xml";
            system    "methylHexanoate";
        }
        );

        domain
        {
            coordinate  K;
            fit         { min 262.64; max 422.29; n 42; }
        }
    }

    metrics
    {
        r2InSample        0.999642501566;   // the model reproducing the points it was FITTED to
        //  NO HELD-OUT METRIC EXISTS.  r2InSample above is exactly that --
        //  in-sample -- and must not be read as an external check.
    }
}

);
`,hn=`/*--------------------------------*- Choupo -*--------------------------------*\\
  CURATION DOSSIER -- a scientific work record, NOT runtime property data.

  NOTHING IN THIS FILE IS VISIBLE TO THE SOLVER.  Record resolution looks only
  in <case>/constant/, data/standards/ and data/local/, so a file here is out
  of its reach BY CONSTRUCTION -- not by convention.

  Nothing here has been promoted.  Curation state belongs to the evidence
  process; runtime trust belongs to the numerical record actually admitted
  to data/standards/, and only an explicit human promotion moves one there
  (bin/curate/promote-from-dossier).

  MATURITY IS PER PROPERTY, not per component: the properties below may hold
  different verdicts, and any whole-component summary is DERIVED from them
  rather than stored beside them.

  Regenerated on every run.  Hand edits are lost.
\\*-----------------------------------------------------------------------------*/

component      methylLevulinate;
reviewStatus   unreviewed;

properties
(
{
    property       vapourPressure;
    operation      fit_antoine;   // type vaporPressureFit
    model          "Antoine  log10(Psat[bar]) = A - B/(T + C)";
    verdict        validationRefused;
    refusal        "No independent experimental evidence remains after fitting.";

    fittedParameters
    {
        A  4.61830270357;
        B  1844.87591677;
        C  -67.5116488784;
    }

    evidence
    {
        partitionFingerprint  "b7380f2a91195e17";   // frozen before the fit

        datasets
        (
        {
            role      fit;
            dataset   "constant/archiveExtracts/methylLevulinate-vapourPressure-j.jct.2013.05.025.dat";
            doi       "10.1016/j.jct.2013.05.025";
            sha256    "49b2377c595751f1bc0e0f1de6760d082ded1fd4f5daef76a8f3a2d207ec253d";
            provenance measured;
            archiveFile "j.jct.2013.05.025.xml";
            system    "methylLevulinate";
        }
        {
            role      fit;
            dataset   "constant/archiveExtracts/methylLevulinate-vapourPressure-j.tca.2017.12.006.dat";
            doi       "10.1016/j.tca.2017.12.006";
            sha256    "9cac6d55becbbaa69a93735820a151c18a19e77a538610e13f9c90276038b729";
            provenance measured;
            archiveFile "j.tca.2017.12.006.xml";
            system    "methylLevulinate";
        }
        );

        domain
        {
            coordinate  K;
            fit         { min 293.5; max 453.15; n 38; }
        }
    }

    metrics
    {
        r2InSample        0.999817243581;   // the model reproducing the points it was FITTED to
        //  NO HELD-OUT METRIC EXISTS.  r2InSample above is exactly that --
        //  in-sample -- and must not be read as an external check.
    }
}

);
`,yn=`/*--------------------------------*- Choupo -*--------------------------------*\\
  CURATION DOSSIER -- a scientific work record, NOT runtime property data.

  NOTHING IN THIS FILE IS VISIBLE TO THE SOLVER.  Record resolution looks only
  in <case>/constant/, data/standards/ and data/local/, so a file here is out
  of its reach BY CONSTRUCTION -- not by convention.

  Nothing here has been promoted.  Curation state belongs to the evidence
  process; runtime trust belongs to the numerical record actually admitted
  to data/standards/, and only an explicit human promotion moves one there
  (bin/curate/promote-from-dossier).

  MATURITY IS PER PROPERTY, not per component: the properties below may hold
  different verdicts, and any whole-component summary is DERIVED from them
  rather than stored beside them.

  Regenerated on every run.  Hand edits are lost.
\\*-----------------------------------------------------------------------------*/

component      methylOctanoate;
reviewStatus   unreviewed;

properties
(
{
    property       vapourPressure;
    operation      fit_antoine;   // type vaporPressureFit
    model          "Antoine  log10(Psat[bar]) = A - B/(T + C)";
    verdict        validationRefused;
    refusal        "No independent experimental evidence remains after fitting.";

    fittedParameters
    {
        A  4.54047322827;
        B  1810.28810068;
        C  -66.4366528954;
    }

    evidence
    {
        partitionFingerprint  "c570791f7157cabf";   // frozen before the fit

        datasets
        (
        {
            role      fit;
            dataset   "constant/archiveExtracts/methylOctanoate-vapourPressure-j.jct.2016.07.024.dat";
            doi       "10.1016/j.jct.2016.07.024";
            sha256    "ab5f70414539ba6b3049ce1befb3819b033d81f9e8d72d2c46a028563d033bf0";
            provenance measured;
            archiveFile "j.jct.2016.07.024.xml";
            system    "methylOctanoate";
        }
        );

        domain
        {
            coordinate  K;
            fit         { min 282.64; max 432.68; n 16; }
        }
    }

    metrics
    {
        r2InSample        0.999956846323;   // the model reproducing the points it was FITTED to
        //  NO HELD-OUT METRIC EXISTS.  r2InSample above is exactly that --
        //  in-sample -- and must not be read as an external check.
    }
}

);
`,vn=`/*--------------------------------*- Choupo -*--------------------------------*\\
  CURATION DOSSIER -- a scientific work record, NOT runtime property data.

  NOTHING IN THIS FILE IS VISIBLE TO THE SOLVER.  Record resolution looks only
  in <case>/constant/, data/standards/ and data/local/, so a file here is out
  of its reach BY CONSTRUCTION -- not by convention.

  Nothing here has been promoted.  Curation state belongs to the evidence
  process; runtime trust belongs to the numerical record actually admitted
  to data/standards/, and only an explicit human promotion moves one there
  (bin/curate/promote-from-dossier).

  MATURITY IS PER PROPERTY, not per component: the properties below may hold
  different verdicts, and any whole-component summary is DERIVED from them
  rather than stored beside them.

  Regenerated on every run.  Hand edits are lost.
\\*-----------------------------------------------------------------------------*/

component      methylTertPentylEther;
reviewStatus   unreviewed;

properties
(
{
    property       vapourPressure;
    operation      fit_antoine;   // type vaporPressureFit
    model          "Antoine  log10(Psat[bar]) = A - B/(T + C)";
    verdict        validationRefused;
    refusal        "No independent experimental evidence remains after fitting.";

    fittedParameters
    {
        A  3.69709166155;
        B  1055.88609712;
        C  -74.0591883095;
    }

    evidence
    {
        partitionFingerprint  "2a025051de73393d";   // frozen before the fit

        datasets
        (
        {
            role      fit;
            dataset   "constant/archiveExtracts/methylTertPentylEther-vapourPressure-je101250d.dat";
            doi       "10.1021/je101250d";
            sha256    "6669b12035e317cc29bb9ffe16bf70870f3d4766ed9b0dc05b0b6709dcfbc736";
            provenance measured;
            archiveFile "je101250d.xml";
            system    "methylTertPentylEther";
        }
        {
            role      fit;
            dataset   "constant/archiveExtracts/methylTertPentylEther-vapourPressure-je0255980.dat";
            doi       "10.1021/je0255980";
            sha256    "cd80b80e5c63806e1b87ed419e16a7cd8f082489ff69e7f530a00711ac27c1db";
            provenance measured;
            archiveFile "je0255980.xml";
            system    "methylTertPentylEther";
        }
        {
            role      fit;
            dataset   "constant/archiveExtracts/methylTertPentylEther-vapourPressure-je049867t.dat";
            doi       "10.1021/je049867t";
            sha256    "f2d0b00f3253e92e83c431ab1312c345acac156cdb8de31cc2dcad573cf25bc2";
            provenance measured;
            archiveFile "je049867t.xml";
            system    "methylTertPentylEther";
        }
        {
            role      fit;
            dataset   "constant/archiveExtracts/methylTertPentylEther-vapourPressure-je901026b.dat";
            doi       "10.1021/je901026b";
            sha256    "d12c1801ff61ff6206aef6443aaa300487f62b237c312c474378902e58613bc4";
            provenance measured;
            archiveFile "je901026b.xml";
            system    "methylTertPentylEther";
        }
        );

        domain
        {
            coordinate  K;
            fit         { min 274.2; max 359.95; n 48; }
        }
    }

    metrics
    {
        r2InSample        0.999639172927;   // the model reproducing the points it was FITTED to
        //  NO HELD-OUT METRIC EXISTS.  r2InSample above is exactly that --
        //  in-sample -- and must not be read as an external check.
    }
}

);
`,En=`/*--------------------------------*- Choupo -*--------------------------------*\\
  CURATION DOSSIER -- a scientific work record, NOT runtime property data.

  NOTHING IN THIS FILE IS VISIBLE TO THE SOLVER.  Record resolution looks only
  in <case>/constant/, data/standards/ and data/local/, so a file here is out
  of its reach BY CONSTRUCTION -- not by convention.

  Nothing here has been promoted.  Curation state belongs to the evidence
  process; runtime trust belongs to the numerical record actually admitted
  to data/standards/, and only an explicit human promotion moves one there
  (bin/curate/promote-from-dossier).

  MATURITY IS PER PROPERTY, not per component: the properties below may hold
  different verdicts, and any whole-component summary is DERIVED from them
  rather than stored beside them.

  Regenerated on every run.  Hand edits are lost.
\\*-----------------------------------------------------------------------------*/

component      methylethanolamine;
reviewStatus   unreviewed;

properties
(
{
    property       vapourPressure;
    operation      fit_antoine;   // type vaporPressureFit
    model          "Antoine  log10(Psat[bar]) = A - B/(T + C)";
    verdict        validationRefused;
    refusal        "No independent experimental evidence remains after fitting.";

    fittedParameters
    {
        A  5.41208619177;
        B  2028.33565299;
        C  -56.3501865138;
    }

    evidence
    {
        partitionFingerprint  "f47b2244556e992d";   // frozen before the fit

        datasets
        (
        {
            role      fit;
            dataset   "constant/archiveExtracts/methylethanolamine-vapourPressure-je049761y.dat";
            doi       "10.1021/je049761y";
            sha256    "df002e21a6af81808fc0ab6df77965b06bff0babbf3a176469fe95f2234618c4";
            provenance measured;
            archiveFile "je049761y.xml";
            system    "methylethanolamine";
        }
        {
            role      fit;
            dataset   "constant/archiveExtracts/methylethanolamine-vapourPressure-je101259r.dat";
            doi       "10.1021/je101259r";
            sha256    "3963c4cf50d9b279a449dc923dd5a4301188be5d3ddeb2ee32ea2dd4eaecd626";
            provenance measured;
            archiveFile "je101259r.xml";
            system    "methylethanolamine";
        }
        {
            role      fit;
            dataset   "constant/archiveExtracts/methylethanolamine-vapourPressure-je400373d.dat";
            doi       "10.1021/je400373d";
            sha256    "5fd41a9baa3403e420dbd131ccdfe658a984d48b0965881982e740966f424eda";
            provenance measured;
            archiveFile "je400373d.xml";
            system    "methylethanolamine";
        }
        );

        domain
        {
            coordinate  K;
            fit         { min 274.9; max 451.1; n 39; }
        }
    }

    metrics
    {
        r2InSample        0.999930851341;   // the model reproducing the points it was FITTED to
        //  NO HELD-OUT METRIC EXISTS.  r2InSample above is exactly that --
        //  in-sample -- and must not be read as an external check.
    }
}

);
`,Tn=`/*--------------------------------*- Choupo -*--------------------------------*\\
  CURATION DOSSIER -- a scientific work record, NOT runtime property data.

  NOTHING IN THIS FILE IS VISIBLE TO THE SOLVER.  Record resolution looks only
  in <case>/constant/, data/standards/ and data/local/, so a file here is out
  of its reach BY CONSTRUCTION -- not by convention.

  Nothing here has been promoted.  Curation state belongs to the evidence
  process; runtime trust belongs to the numerical record actually admitted
  to data/standards/, and only an explicit human promotion moves one there
  (bin/curate/promote-from-dossier).

  MATURITY IS PER PROPERTY, not per component: the properties below may hold
  different verdicts, and any whole-component summary is DERIVED from them
  rather than stored beside them.

  Regenerated on every run.  Hand edits are lost.
\\*-----------------------------------------------------------------------------*/

component      monoethanolamine;
reviewStatus   unreviewed;

properties
(
{
    property       vapourPressure;
    operation      fit_antoine;   // type vaporPressureFit
    model          "Antoine  log10(Psat[bar]) = A - B/(T + C)";
    verdict        validationRefused;
    refusal        "No independent experimental evidence remains after fitting.";

    fittedParameters
    {
        A  5.37968312661;
        B  2089.08865441;
        C  -55.2179317189;
    }

    evidence
    {
        partitionFingerprint  "575eb2655673108f";   // frozen before the fit

        datasets
        (
        {
            role      fit;
            dataset   "constant/archiveExtracts/monoethanolamine-vapourPressure-j.fluid.2015.06.045.dat";
            doi       "10.1016/j.fluid.2015.06.045";
            sha256    "303c336c3afdc7089d2dc0a623f5d811e5eba30d067b6d2420a4b0d84177db70";
            provenance measured;
            archiveFile "j.fluid.2015.06.045.xml";
            system    "monoethanolamine";
        }
        {
            role      fit;
            dataset   "constant/archiveExtracts/monoethanolamine-vapourPressure-je800530u.dat";
            doi       "10.1021/je800530u";
            sha256    "1c90a9fd7513387b393b9a27ececebe92573fe5000e9c4f203694f8161743221";
            provenance measured;
            archiveFile "je800530u.xml";
            system    "monoethanolamine";
        }
        {
            role      fit;
            dataset   "constant/archiveExtracts/monoethanolamine-vapourPressure-je800290k.dat";
            doi       "10.1021/je800290k";
            sha256    "51baf217f8b5f257b4c5c26ec4713d84bc714c8775fffbd01af931591160e9c7";
            provenance measured;
            archiveFile "je800290k.xml";
            system    "monoethanolamine";
        }
        {
            role      fit;
            dataset   "constant/archiveExtracts/monoethanolamine-vapourPressure-je049761y.dat";
            doi       "10.1021/je049761y";
            sha256    "df002e21a6af81808fc0ab6df77965b06bff0babbf3a176469fe95f2234618c4";
            provenance measured;
            archiveFile "je049761y.xml";
            system    "monoethanolamine";
        }
        {
            role      fit;
            dataset   "constant/archiveExtracts/monoethanolamine-vapourPressure-je101259r.dat";
            doi       "10.1021/je101259r";
            sha256    "3963c4cf50d9b279a449dc923dd5a4301188be5d3ddeb2ee32ea2dd4eaecd626";
            provenance measured;
            archiveFile "je101259r.xml";
            system    "monoethanolamine";
        }
        {
            role      fit;
            dataset   "constant/archiveExtracts/monoethanolamine-vapourPressure-je400885z.dat";
            doi       "10.1021/je400885z";
            sha256    "952b467f5ae68dc2fe34f089f817c7d0b847bb356e15e4423d40a319b3965575";
            provenance measured;
            archiveFile "je400885z.xml";
            system    "monoethanolamine";
        }
        );

        domain
        {
            coordinate  K;
            fit         { min 273.65; max 441.9; n 93; }
        }
    }

    metrics
    {
        r2InSample        0.999903075597;   // the model reproducing the points it was FITTED to
        //  NO HELD-OUT METRIC EXISTS.  r2InSample above is exactly that --
        //  in-sample -- and must not be read as an external check.
    }
}

);
`,In=`/*--------------------------------*- Choupo -*--------------------------------*\\
  CURATION DOSSIER -- a scientific work record, NOT runtime property data.

  NOTHING IN THIS FILE IS VISIBLE TO THE SOLVER.  Record resolution looks only
  in <case>/constant/, data/standards/ and data/local/, so a file here is out
  of its reach BY CONSTRUCTION -- not by convention.

  Nothing here has been promoted.  Curation state belongs to the evidence
  process; runtime trust belongs to the numerical record actually admitted
  to data/standards/, and only an explicit human promotion moves one there
  (bin/curate/promote-from-dossier).

  MATURITY IS PER PROPERTY, not per component: the properties below may hold
  different verdicts, and any whole-component summary is DERIVED from them
  rather than stored beside them.

  Regenerated on every run.  Hand edits are lost.
\\*-----------------------------------------------------------------------------*/

component      nAminoethylEthanolamine;
reviewStatus   unreviewed;

properties
(
{
    property       vapourPressure;
    operation      fit_antoine;   // type vaporPressureFit
    model          "Antoine  log10(Psat[bar]) = A - B/(T + C)";
    verdict        validationRefused;
    refusal        "No independent experimental evidence remains after fitting.";

    fittedParameters
    {
        A  6.27474745869;
        B  3062.53548288;
        C  -30.3641631241;
    }

    evidence
    {
        partitionFingerprint  "871ee0f341a1bc27";   // frozen before the fit

        datasets
        (
        {
            role      fit;
            dataset   "constant/archiveExtracts/nAminoethylEthanolamine-vapourPressure-je2002489.dat";
            doi       "10.1021/je2002489";
            sha256    "e06fdeb3f583b0fe2f3c4b2bd212c45b06f1a7e412346129c62fe44fb3a84fff";
            provenance measured;
            archiveFile "je2002489.xml";
            system    "nAminoethylEthanolamine";
        }
        );

        domain
        {
            coordinate  K;
            fit         { min 323.2; max 374.2; n 33; }
        }
    }

    metrics
    {
        r2InSample        0.999410712628;   // the model reproducing the points it was FITTED to
        //  NO HELD-OUT METRIC EXISTS.  r2InSample above is exactly that --
        //  in-sample -- and must not be read as an external check.
    }
}

);
`,xn=`/*--------------------------------*- Choupo -*--------------------------------*\\
  CURATION DOSSIER -- a scientific work record, NOT runtime property data.

  NOTHING IN THIS FILE IS VISIBLE TO THE SOLVER.  Record resolution looks only
  in <case>/constant/, data/standards/ and data/local/, so a file here is out
  of its reach BY CONSTRUCTION -- not by convention.

  Nothing here has been promoted.  Curation state belongs to the evidence
  process; runtime trust belongs to the numerical record actually admitted
  to data/standards/, and only an explicit human promotion moves one there
  (bin/curate/promote-from-dossier).

  MATURITY IS PER PROPERTY, not per component: the properties below may hold
  different verdicts, and any whole-component summary is DERIVED from them
  rather than stored beside them.

  Regenerated on every run.  Hand edits are lost.
\\*-----------------------------------------------------------------------------*/

component      nAminoethylPiperazine;
reviewStatus   unreviewed;

properties
(
{
    property       vapourPressure;
    operation      fit_antoine;   // type vaporPressureFit
    model          "Antoine  log10(Psat[bar]) = A - B/(T + C)";
    verdict        validationRefused;
    refusal        "No independent experimental evidence remains after fitting.";

    fittedParameters
    {
        A  6.17125225758;
        B  2614.88187204;
        C  -43.5763690216;
    }

    evidence
    {
        partitionFingerprint  "9dd6db640dfdc146";   // frozen before the fit

        datasets
        (
        {
            role      fit;
            dataset   "constant/archiveExtracts/nAminoethylPiperazine-vapourPressure-j.jct.2009.09.003.dat";
            doi       "10.1016/j.jct.2009.09.003";
            sha256    "c640d7edba1a863321a4e553b53af0caeb53909bcd6921be507a448183f31fb5";
            provenance measured;
            archiveFile "j.jct.2009.09.003.xml";
            system    "nAminoethylPiperazine";
        }
        );

        domain
        {
            coordinate  K;
            fit         { min 295.7; max 338.1; n 22; }
        }
    }

    metrics
    {
        r2InSample        0.999615215845;   // the model reproducing the points it was FITTED to
        //  NO HELD-OUT METRIC EXISTS.  r2InSample above is exactly that --
        //  in-sample -- and must not be read as an external check.
    }
}

);
`,Pn=`/*--------------------------------*- Choupo -*--------------------------------*\\
  CURATION DOSSIER -- a scientific work record, NOT runtime property data.

  NOTHING IN THIS FILE IS VISIBLE TO THE SOLVER.  Record resolution looks only
  in <case>/constant/, data/standards/ and data/local/, so a file here is out
  of its reach BY CONSTRUCTION -- not by convention.

  Nothing here has been promoted.  Curation state belongs to the evidence
  process; runtime trust belongs to the numerical record actually admitted
  to data/standards/, and only an explicit human promotion moves one there
  (bin/curate/promote-from-dossier).

  MATURITY IS PER PROPERTY, not per component: the properties below may hold
  different verdicts, and any whole-component summary is DERIVED from them
  rather than stored beside them.

  Regenerated on every run.  Hand edits are lost.
\\*-----------------------------------------------------------------------------*/

component      nEicosane;
reviewStatus   unreviewed;

properties
(
{
    property       vapourPressure;
    operation      fit_antoine;   // type vaporPressureFit
    model          "Antoine  log10(Psat[bar]) = A - B/(T + C)";
    verdict        validationRefused;
    refusal        "No independent experimental evidence remains after fitting.";

    fittedParameters
    {
        A  5.33564034105;
        B  2719.80695797;
        C  -89.8306524404;
    }

    evidence
    {
        partitionFingerprint  "c7a28a9f6b9661a0";   // frozen before the fit

        datasets
        (
        {
            role      fit;
            dataset   "constant/archiveExtracts/nEicosane-vapourPressure-acs.jced.6b00821.dat";
            doi       "10.1021/acs.jced.6b00821";
            sha256    "a17d31db0c5e1ff22c22e07a2ba0ff21e9a18b306cc731cdd558a8562347b7e5";
            provenance measured;
            archiveFile "acs.jced.6b00821.xml";
            system    "nEicosane";
        }
        {
            role      fit;
            dataset   "constant/archiveExtracts/nEicosane-vapourPressure-je800534x.dat";
            doi       "10.1021/je800534x";
            sha256    "5a2cf10f6642b7d9fb1f7045d6be5806082513a6e8d7efd5a0dd4874b97194e2";
            provenance measured;
            archiveFile "je800534x.xml";
            system    "nEicosane";
        }
        );

        domain
        {
            coordinate  K;
            fit         { min 313.15; max 373.17; n 9; }
        }
    }

    metrics
    {
        r2InSample        0.999805961711;   // the model reproducing the points it was FITTED to
        //  NO HELD-OUT METRIC EXISTS.  r2InSample above is exactly that --
        //  in-sample -- and must not be read as an external check.
    }
}

);
`,Sn=`/*--------------------------------*- Choupo -*--------------------------------*\\
  CURATION DOSSIER -- a scientific work record, NOT runtime property data.

  NOTHING IN THIS FILE IS VISIBLE TO THE SOLVER.  Record resolution looks only
  in <case>/constant/, data/standards/ and data/local/, so a file here is out
  of its reach BY CONSTRUCTION -- not by convention.

  Nothing here has been promoted.  Curation state belongs to the evidence
  process; runtime trust belongs to the numerical record actually admitted
  to data/standards/, and only an explicit human promotion moves one there
  (bin/curate/promote-from-dossier).

  MATURITY IS PER PROPERTY, not per component: the properties below may hold
  different verdicts, and any whole-component summary is DERIVED from them
  rather than stored beside them.

  Regenerated on every run.  Hand edits are lost.
\\*-----------------------------------------------------------------------------*/

component      nHexylAcetate;
reviewStatus   unreviewed;

properties
(
{
    property       vapourPressure;
    operation      fit_antoine;   // type vaporPressureFit
    model          "Antoine  log10(Psat[bar]) = A - B/(T + C)";
    verdict        validationRefused;
    refusal        "No independent experimental evidence remains after fitting.";

    fittedParameters
    {
        A  4.79719030133;
        B  1877.49712626;
        C  -51.1723664762;
    }

    evidence
    {
        partitionFingerprint  "20255f4b4bcfb16b";   // frozen before the fit

        datasets
        (
        {
            role      fit;
            dataset   "constant/archiveExtracts/nHexylAcetate-vapourPressure-je050141m.dat";
            doi       "10.1021/je050141m";
            sha256    "99044e3dea8c42c7fae56f37eca05732279ba72064540df1310a541562d21c46";
            provenance measured;
            archiveFile "je050141m.xml";
            system    "nHexylAcetate";
        }
        {
            role      fit;
            dataset   "constant/archiveExtracts/nHexylAcetate-vapourPressure-j.jct.2005.08.003.dat";
            doi       "10.1016/j.jct.2005.08.003";
            sha256    "1eec2ea342589c529ad39737b4111c9d660b04a0f2e44bda099823839bb5a3ec";
            provenance measured;
            archiveFile "j.jct.2005.08.003.xml";
            system    "nHexylAcetate";
        }
        );

        domain
        {
            coordinate  K;
            fit         { min 274.5; max 439.98; n 27; }
        }
    }

    metrics
    {
        r2InSample        0.999959904224;   // the model reproducing the points it was FITTED to
        //  NO HELD-OUT METRIC EXISTS.  r2InSample above is exactly that --
        //  in-sample -- and must not be read as an external check.
    }
}

);
`,Rn=`/*--------------------------------*- Choupo -*--------------------------------*\\
  CURATION DOSSIER -- a scientific work record, NOT runtime property data.

  NOTHING IN THIS FILE IS VISIBLE TO THE SOLVER.  Record resolution looks only
  in <case>/constant/, data/standards/ and data/local/, so a file here is out
  of its reach BY CONSTRUCTION -- not by convention.

  Nothing here has been promoted.  Curation state belongs to the evidence
  process; runtime trust belongs to the numerical record actually admitted
  to data/standards/, and only an explicit human promotion moves one there
  (bin/curate/promote-from-dossier).

  MATURITY IS PER PROPERTY, not per component: the properties below may hold
  different verdicts, and any whole-component summary is DERIVED from them
  rather than stored beside them.

  Regenerated on every run.  Hand edits are lost.
\\*-----------------------------------------------------------------------------*/

component      nPentylAcetate;
reviewStatus   unreviewed;

properties
(
{
    property       vapourPressure;
    operation      fit_antoine;   // type vaporPressureFit
    model          "Antoine  log10(Psat[bar]) = A - B/(T + C)";
    verdict        validationRefused;
    refusal        "No independent experimental evidence remains after fitting.";

    fittedParameters
    {
        A  7.28495972567;
        B  3220.35376765;
        C  36.855645453;
    }

    evidence
    {
        partitionFingerprint  "78ce2650119d5ab4";   // frozen before the fit

        datasets
        (
        {
            role      fit;
            dataset   "constant/archiveExtracts/nPentylAcetate-vapourPressure-j.fluid.2012.08.003.dat";
            doi       "10.1016/j.fluid.2012.08.003";
            sha256    "46682e0a5343098edd6b4ac38fc989b900ab70f8e027b98afb8dd6f8917d84f7";
            provenance measured;
            archiveFile "j.fluid.2012.08.003.xml";
            system    "nPentylAcetate";
        }
        );

        domain
        {
            coordinate  K;
            fit         { min 274.2; max 313.4; n 15; }
        }
    }

    metrics
    {
        r2InSample        0.999934369942;   // the model reproducing the points it was FITTED to
        //  NO HELD-OUT METRIC EXISTS.  r2InSample above is exactly that --
        //  in-sample -- and must not be read as an external check.
    }
}

);
`,jn=`/*--------------------------------*- Choupo -*--------------------------------*\\
  CURATION DOSSIER -- a scientific work record, NOT runtime property data.

  NOTHING IN THIS FILE IS VISIBLE TO THE SOLVER.  Record resolution looks only
  in <case>/constant/, data/standards/ and data/local/, so a file here is out
  of its reach BY CONSTRUCTION -- not by convention.

  Nothing here has been promoted.  Curation state belongs to the evidence
  process; runtime trust belongs to the numerical record actually admitted
  to data/standards/, and only an explicit human promotion moves one there
  (bin/curate/promote-from-dossier).

  MATURITY IS PER PROPERTY, not per component: the properties below may hold
  different verdicts, and any whole-component summary is DERIVED from them
  rather than stored beside them.

  Regenerated on every run.  Hand edits are lost.
\\*-----------------------------------------------------------------------------*/

component      phenanthrene;
reviewStatus   unreviewed;

properties
(
{
    property       vapourPressure;
    operation      fit_antoine;   // type vaporPressureFit
    model          "Antoine  log10(Psat[bar]) = A - B/(T + C)";
    verdict        validationRefused;
    refusal        "No independent experimental evidence remains after fitting.";

    fittedParameters
    {
        A  7.75372175025;
        B  5573.96266648;
        C  126.384289078;
    }

    evidence
    {
        partitionFingerprint  "ecb30172f76174a8";   // frozen before the fit

        datasets
        (
        {
            role      fit;
            dataset   "constant/archiveExtracts/phenanthrene-vapourPressure-j.jct.2014.07.006.dat";
            doi       "10.1016/j.jct.2014.07.006";
            sha256    "a44f0999e6b9be4897944ae6c20ec4991db1a6ca349b9cc97725856ee16f9015";
            provenance measured;
            archiveFile "j.jct.2014.07.006.xml";
            system    "phenanthrene";
        }
        {
            role      fit;
            dataset   "constant/archiveExtracts/phenanthrene-vapourPressure-j.tca.2016.03.013.dat";
            doi       "10.1016/j.tca.2016.03.013";
            sha256    "332aef7c2c1038f9029a33b1a1a5639c4def103831e021450937eb69097b8345";
            provenance measured;
            archiveFile "j.tca.2016.03.013.xml";
            system    "phenanthrene";
        }
        );

        domain
        {
            coordinate  K;
            fit         { min 388; max 480; n 77; }
        }
    }

    metrics
    {
        r2InSample        0.998979199706;   // the model reproducing the points it was FITTED to
        //  NO HELD-OUT METRIC EXISTS.  r2InSample above is exactly that --
        //  in-sample -- and must not be read as an external check.
    }
}

);
`,On=`/*--------------------------------*- Choupo -*--------------------------------*\\
  CURATION DOSSIER -- a scientific work record, NOT runtime property data.

  NOTHING IN THIS FILE IS VISIBLE TO THE SOLVER.  Record resolution looks only
  in <case>/constant/, data/standards/ and data/local/, so a file here is out
  of its reach BY CONSTRUCTION -- not by convention.

  Nothing here has been promoted.  Curation state belongs to the evidence
  process; runtime trust belongs to the numerical record actually admitted
  to data/standards/, and only an explicit human promotion moves one there
  (bin/curate/promote-from-dossier).

  MATURITY IS PER PROPERTY, not per component: the properties below may hold
  different verdicts, and any whole-component summary is DERIVED from them
  rather than stored beside them.

  Regenerated on every run.  Hand edits are lost.
\\*-----------------------------------------------------------------------------*/

component      pyrene;
reviewStatus   unreviewed;

properties
(
{
    property       vapourPressure;
    operation      fit_antoine;   // type vaporPressureFit
    model          "Antoine  log10(Psat[bar]) = A - B/(T + C)";
    verdict        validationRefused;
    refusal        "No independent experimental evidence remains after fitting.";

    fittedParameters
    {
        A  4.30406708414;
        B  2443.82866644;
        C  -91.2423952632;
    }

    evidence
    {
        partitionFingerprint  "4a6584a97b45820f";   // frozen before the fit

        datasets
        (
        {
            role      fit;
            dataset   "constant/archiveExtracts/pyrene-vapourPressure-je800300x.dat";
            doi       "10.1021/je800300x";
            sha256    "90f9ccdd4b3a286d605d0a325c927728caec4947f6cf3a33dcd86b31aae5e163";
            provenance measured;
            archiveFile "je800300x.xml";
            system    "pyrene";
        }
        );

        domain
        {
            coordinate  K;
            fit         { min 298.15; max 510; n 23; }
        }
    }

    metrics
    {
        r2InSample        0.999963763315;   // the model reproducing the points it was FITTED to
        //  NO HELD-OUT METRIC EXISTS.  r2InSample above is exactly that --
        //  in-sample -- and must not be read as an external check.
    }
}

);
`,Nn=`/*--------------------------------*- Choupo -*--------------------------------*\\
  CURATION DOSSIER -- a scientific work record, NOT runtime property data.

  NOTHING IN THIS FILE IS VISIBLE TO THE SOLVER.  Record resolution looks only
  in <case>/constant/, data/standards/ and data/local/, so a file here is out
  of its reach BY CONSTRUCTION -- not by convention.

  Nothing here has been promoted.  Curation state belongs to the evidence
  process; runtime trust belongs to the numerical record actually admitted
  to data/standards/, and only an explicit human promotion moves one there
  (bin/curate/promote-from-dossier).

  MATURITY IS PER PROPERTY, not per component: the properties below may hold
  different verdicts, and any whole-component summary is DERIVED from them
  rather than stored beside them.

  Regenerated on every run.  Hand edits are lost.
\\*-----------------------------------------------------------------------------*/

component      squalane;
reviewStatus   unreviewed;

properties
(
{
    property       vapourPressure;
    operation      fit_antoine;   // type vaporPressureFit
    model          "Antoine  log10(Psat[bar]) = A - B/(T + C)";
    verdict        validationRefused;
    refusal        "No independent experimental evidence remains after fitting.";

    fittedParameters
    {
        A  5.52477413003;
        B  3196.04623316;
        C  -103.170561023;
    }

    evidence
    {
        partitionFingerprint  "3ac91a3f172fdf4f";   // frozen before the fit

        datasets
        (
        {
            role      fit;
            dataset   "constant/archiveExtracts/squalane-vapourPressure-j.jct.2019.03.032.dat";
            doi       "10.1016/j.jct.2019.03.032";
            sha256    "55e20bbaa69c40a29faad398e5099d7a0010b785a6643883f0e2f4158caac176";
            provenance measured;
            archiveFile "j.jct.2019.03.032.xml";
            system    "squalane";
        }
        );

        domain
        {
            coordinate  K;
            fit         { min 298.15; max 686.4; n 32; }
        }
    }

    metrics
    {
        r2InSample        0.999906346688;   // the model reproducing the points it was FITTED to
        //  NO HELD-OUT METRIC EXISTS.  r2InSample above is exactly that --
        //  in-sample -- and must not be read as an external check.
    }
}

);
`,_n=`/*--------------------------------*- Choupo -*--------------------------------*\\
  CURATION DOSSIER -- a scientific work record, NOT runtime property data.

  NOTHING IN THIS FILE IS VISIBLE TO THE SOLVER.  Record resolution looks only
  in <case>/constant/, data/standards/ and data/local/, so a file here is out
  of its reach BY CONSTRUCTION -- not by convention.

  Nothing here has been promoted.  Curation state belongs to the evidence
  process; runtime trust belongs to the numerical record actually admitted
  to data/standards/, and only an explicit human promotion moves one there
  (bin/curate/promote-from-dossier).

  MATURITY IS PER PROPERTY, not per component: the properties below may hold
  different verdicts, and any whole-component summary is DERIVED from them
  rather than stored beside them.

  Regenerated on every run.  Hand edits are lost.
\\*-----------------------------------------------------------------------------*/

component      tetradecanoicAcid;
reviewStatus   unreviewed;

properties
(
{
    property       vapourPressure;
    operation      fit_antoine;   // type vaporPressureFit
    model          "Antoine  log10(Psat[bar]) = A - B/(T + C)";
    verdict        validationRefused;
    refusal        "No independent experimental evidence remains after fitting.";

    fittedParameters
    {
        A  5.43656854102;
        B  2669.45687041;
        C  -101.315943234;
    }

    evidence
    {
        partitionFingerprint  "725a8b11e34f6138";   // frozen before the fit

        datasets
        (
        {
            role      fit;
            dataset   "constant/archiveExtracts/tetradecanoicAcid-vapourPressure-je300902c.dat";
            doi       "10.1021/je300902c";
            sha256    "2463d7010304254bcf80bccf7785fb8d077f888b579e38bf621a89d23e9cd339";
            provenance measured;
            archiveFile "je300902c.xml";
            system    "tetradecanoicAcid";
        }
        {
            role      fit;
            dataset   "constant/archiveExtracts/tetradecanoicAcid-vapourPressure-j.tca.2012.07.034.dat";
            doi       "10.1016/j.tca.2012.07.034";
            sha256    "67ed0c1fb2f3b0bb6e4d7950215f89360a7c5f9bb25f99ec3d259673312de2f2";
            provenance measured;
            archiveFile "j.tca.2012.07.034.xml";
            system    "tetradecanoicAcid";
        }
        );

        domain
        {
            coordinate  K;
            fit         { min 298.15; max 585; n 28; }
        }
    }

    metrics
    {
        r2InSample        0.999842958424;   // the model reproducing the points it was FITTED to
        //  NO HELD-OUT METRIC EXISTS.  r2InSample above is exactly that --
        //  in-sample -- and must not be read as an external check.
    }
}

);
`,gn=`/*--------------------------------*- Choupo -*--------------------------------*\\
  CURATION DOSSIER -- a scientific work record, NOT runtime property data.

  NOTHING IN THIS FILE IS VISIBLE TO THE SOLVER.  Record resolution looks only
  in <case>/constant/, data/standards/ and data/local/, so a file here is out
  of its reach BY CONSTRUCTION -- not by convention.

  Nothing here has been promoted.  Curation state belongs to the evidence
  process; runtime trust belongs to the numerical record actually admitted
  to data/standards/, and only an explicit human promotion moves one there
  (bin/curate/promote-from-dossier).

  MATURITY IS PER PROPERTY, not per component: the properties below may hold
  different verdicts, and any whole-component summary is DERIVED from them
  rather than stored beside them.

  Regenerated on every run.  Hand edits are lost.
\\*-----------------------------------------------------------------------------*/

component      tetrahydropyran;
reviewStatus   unreviewed;

properties
(
{
    property       vapourPressure;
    operation      fit_antoine;   // type vaporPressureFit
    model          "Antoine  log10(Psat[bar]) = A - B/(T + C)";
    verdict        validationRefused;
    refusal        "No independent experimental evidence remains after fitting.";

    fittedParameters
    {
        A  4.30436120324;
        B  1385.25322163;
        C  -38.336044694;
    }

    evidence
    {
        partitionFingerprint  "5ec2cc6f7245df4b";   // frozen before the fit

        datasets
        (
        {
            role      fit;
            dataset   "constant/archiveExtracts/tetrahydropyran-vapourPressure-je201140q.dat";
            doi       "10.1021/je201140q";
            sha256    "4a2eca2490b726a3d87fa960c94c7abf2ca4693cbc809e9effee16e2a0283d2c";
            provenance measured;
            archiveFile "je201140q.xml";
            system    "tetrahydropyran";
        }
        {
            role      fit;
            dataset   "constant/archiveExtracts/tetrahydropyran-vapourPressure-je700270d.dat";
            doi       "10.1021/je700270d";
            sha256    "f7967975b3a192763335c4cd4016617b06f704a5404e0cf426076989a83013bc";
            provenance measured;
            archiveFile "je700270d.xml";
            system    "tetrahydropyran";
        }
        {
            role      fit;
            dataset   "constant/archiveExtracts/tetrahydropyran-vapourPressure-acs.jced.7b01091.dat";
            doi       "10.1021/acs.jced.7b01091";
            sha256    "2f400544f474c125dac0e126e44f9d88727847705fd32385bf9c21fa5860a78f";
            provenance measured;
            archiveFile "acs.jced.7b01091.xml";
            system    "tetrahydropyran";
        }
        {
            role      fit;
            dataset   "constant/archiveExtracts/tetrahydropyran-vapourPressure-acs.jced.6b00576.dat";
            doi       "10.1021/acs.jced.6b00576";
            sha256    "9f7efbb7dde9cf6bc27340bfd713813486a868d30ac415701e7553e8035529ec";
            provenance measured;
            archiveFile "acs.jced.6b00576.xml";
            system    "tetrahydropyran";
        }
        {
            role      fit;
            dataset   "constant/archiveExtracts/tetrahydropyran-vapourPressure-je800145h.dat";
            doi       "10.1021/je800145h";
            sha256    "5dd47b3ee3daba46383121cf9b59b062c8da13cdfd2befd3f7223b52bdbfa81a";
            provenance measured;
            archiveFile "je800145h.xml";
            system    "tetrahydropyran";
        }
        );

        domain
        {
            coordinate  K;
            fit         { min 257.96; max 361.55; n 55; }
        }
    }

    metrics
    {
        r2InSample        0.999877305633;   // the model reproducing the points it was FITTED to
        //  NO HELD-OUT METRIC EXISTS.  r2InSample above is exactly that --
        //  in-sample -- and must not be read as an external check.
    }
}

);
`,Cn=`/*--------------------------------*- Choupo -*--------------------------------*\\
  CURATION DOSSIER -- a scientific work record, NOT runtime property data.

  NOTHING IN THIS FILE IS VISIBLE TO THE SOLVER.  Record resolution looks only
  in <case>/constant/, data/standards/ and data/local/, so a file here is out
  of its reach BY CONSTRUCTION -- not by convention.

  Nothing here has been promoted.  Curation state belongs to the evidence
  process; runtime trust belongs to the numerical record actually admitted
  to data/standards/, and only an explicit human promotion moves one there
  (bin/curate/promote-from-dossier).

  MATURITY IS PER PROPERTY, not per component: the properties below may hold
  different verdicts, and any whole-component summary is DERIVED from them
  rather than stored beside them.

  Regenerated on every run.  Hand edits are lost.
\\*-----------------------------------------------------------------------------*/

component      triethanolamine;
reviewStatus   unreviewed;

properties
(
{
    property       vapourPressure;
    operation      fit_antoine;   // type vaporPressureFit
    model          "Antoine  log10(Psat[bar]) = A - B/(T + C)";
    verdict        validationRefused;
    refusal        "No independent experimental evidence remains after fitting.";

    fittedParameters
    {
        A  6.37978569309;
        B  3486.48293915;
        C  -59.3907102323;
    }

    evidence
    {
        partitionFingerprint  "1556972d9c634c36";   // frozen before the fit

        datasets
        (
        {
            role      fit;
            dataset   "constant/archiveExtracts/triethanolamine-vapourPressure-j.tca.2018.05.007.dat";
            doi       "10.1016/j.tca.2018.05.007";
            sha256    "79beab9731f732339a1815f12bd8ae550f31e9b330b863e04a853b971ec543cf";
            provenance measured;
            archiveFile "j.tca.2018.05.007.xml";
            system    "triethanolamine";
        }
        );

        domain
        {
            coordinate  K;
            fit         { min 365; max 515; n 54; }
        }
    }

    metrics
    {
        r2InSample        0.999017201306;   // the model reproducing the points it was FITTED to
        //  NO HELD-OUT METRIC EXISTS.  r2InSample above is exactly that --
        //  in-sample -- and must not be read as an external check.
    }
}

);
`,Hn=`/*--------------------------------*- Choupo -*--------------------------------*\\
  CURATION DOSSIER -- a scientific work record, NOT runtime property data.

  NOTHING IN THIS FILE IS VISIBLE TO THE SOLVER.  Record resolution looks only
  in <case>/constant/, data/standards/ and data/local/, so a file here is out
  of its reach BY CONSTRUCTION -- not by convention.

  Nothing here has been promoted.  Curation state belongs to the evidence
  process; runtime trust belongs to the numerical record actually admitted
  to data/standards/, and only an explicit human promotion moves one there
  (bin/curate/promote-from-dossier).

  MATURITY IS PER PROPERTY, not per component: the properties below may hold
  different verdicts, and any whole-component summary is DERIVED from them
  rather than stored beside them.

  Regenerated on every run.  Hand edits are lost.
\\*-----------------------------------------------------------------------------*/

component      triethylamine;
reviewStatus   unreviewed;

properties
(
{
    property       vapourPressure;
    operation      fit_antoine;   // type vaporPressureFit
    model          "Antoine  log10(Psat[bar]) = A - B/(T + C)";
    verdict        validationRefused;
    refusal        "No independent experimental evidence remains after fitting.";

    fittedParameters
    {
        A  4.1876380157;
        B  1340.78117874;
        C  -41.8127969415;
    }

    evidence
    {
        partitionFingerprint  "ccc99c1d9d4c5609";   // frozen before the fit

        datasets
        (
        {
            role      fit;
            dataset   "constant/archiveExtracts/triethylamine-vapourPressure-je800603z.dat";
            doi       "10.1021/je800603z";
            sha256    "e052a16eb9f27b130323161aa1f582b1ccdd9af758d8df3f7d3a5cdfbcff1605";
            provenance measured;
            archiveFile "je800603z.xml";
            system    "triethylamine";
        }
        );

        domain
        {
            coordinate  K;
            fit         { min 273.04; max 352.77; n 5; }
        }
    }

    metrics
    {
        r2InSample        0.999995953663;   // the model reproducing the points it was FITTED to
        //  NO HELD-OUT METRIC EXISTS.  r2InSample above is exactly that --
        //  in-sample -- and must not be read as an external check.
    }
}

);
`,qn=`/*--------------------------------*- Choupo -*--------------------------------*\\
  CURATION DOSSIER -- a scientific work record, NOT runtime property data.

  NOTHING IN THIS FILE IS VISIBLE TO THE SOLVER.  Record resolution looks only
  in <case>/constant/, data/standards/ and data/local/, so a file here is out
  of its reach BY CONSTRUCTION -- not by convention.

  Nothing here has been promoted.  Curation state belongs to the evidence
  process; runtime trust belongs to the numerical record actually admitted
  to data/standards/, and only an explicit human promotion moves one there
  (bin/curate/promote-from-dossier).

  MATURITY IS PER PROPERTY, not per component: the properties below may hold
  different verdicts, and any whole-component summary is DERIVED from them
  rather than stored beside them.

  Regenerated on every run.  Hand edits are lost.
\\*-----------------------------------------------------------------------------*/

component      1Pentanol;
reviewStatus   unreviewed;

properties
(
{
    property       binaryVLE.P_bubble;
    operation      fit_nrtl;   // type fitParameters
    model          "binary pair, relative bubble-P residual at fixed T";
    verdict        validationRefused;
    refusal        "No independent experimental evidence remains after fitting.";

    fittedParameters
    {
        equilibrium.liquid.activityModel.binaryParameters.1Pentanol-124Trimethylbenzene.b_ij  -324.884589193;
        equilibrium.liquid.activityModel.binaryParameters.1Pentanol-124Trimethylbenzene.b_ji  1982.02206151;
    }

    evidence
    {
        partitionFingerprint  "207741f3b41d7c8a";   // frozen before the fit

        datasets
        (
        {
            role      fit;
            dataset   "constant/archiveExtracts/1Pentanol-124Trimethylbenzene-bubbleP-j.fluid.2017.12.031-b10.dat";
            doi       "10.1016/j.fluid.2017.12.031";
            sha256    "b7862c82eecf3591e4b347ced684a9c611c41ac5508fdb32a44c133e211c61f3";
            provenance measured;
            archiveFile "j.fluid.2017.12.031.xml";
            system    "1Pentanol + 124Trimethylbenzene";
        }
        );

        domain
        {
            coordinate  x1;
            fit         { min 0.1499; max 0.9503; n 22; }
        }
    }

    metrics
    {
        //  r2InSample: not computed by this operation (it reports chi-square).
        //  NO HELD-OUT METRIC EXISTS.  r2InSample above is exactly that --
        //  in-sample -- and must not be read as an external check.
    }
}

{
    property       binaryVLE.P_bubble;
    operation      fit_nrtl_start2;   // type fitParameters
    model          "binary pair, relative bubble-P residual at fixed T";
    verdict        validationRefused;
    refusal        "No independent experimental evidence remains after fitting.";

    fittedParameters
    {
        equilibrium.liquid.activityModel.binaryParameters.1Pentanol-124Trimethylbenzene.b_ij  -324.778257768;
        equilibrium.liquid.activityModel.binaryParameters.1Pentanol-124Trimethylbenzene.b_ji  1982.81103674;
    }

    evidence
    {
        partitionFingerprint  "207741f3b41d7c8a";   // frozen before the fit

        datasets
        (
        {
            role      fit;
            dataset   "constant/archiveExtracts/1Pentanol-124Trimethylbenzene-bubbleP-j.fluid.2017.12.031-b10.dat";
            doi       "10.1016/j.fluid.2017.12.031";
            sha256    "b7862c82eecf3591e4b347ced684a9c611c41ac5508fdb32a44c133e211c61f3";
            provenance measured;
            archiveFile "j.fluid.2017.12.031.xml";
            system    "1Pentanol + 124Trimethylbenzene";
        }
        );

        domain
        {
            coordinate  x1;
            fit         { min 0.1499; max 0.9503; n 22; }
        }
    }

    metrics
    {
        //  r2InSample: not computed by this operation (it reports chi-square).
        //  NO HELD-OUT METRIC EXISTS.  r2InSample above is exactly that --
        //  in-sample -- and must not be read as an external check.
    }
}

);
`,Dn=`/*--------------------------------*- Choupo -*--------------------------------*\\
  CURATION DOSSIER -- a scientific work record, NOT runtime property data.

  NOTHING IN THIS FILE IS VISIBLE TO THE SOLVER.  Record resolution looks only
  in <case>/constant/, data/standards/ and data/local/, so a file here is out
  of its reach BY CONSTRUCTION -- not by convention.

  Nothing here has been promoted.  Curation state belongs to the evidence
  process; runtime trust belongs to the numerical record actually admitted
  to data/standards/, and only an explicit human promotion moves one there
  (bin/curate/promote-from-dossier).

  MATURITY IS PER PROPERTY, not per component: the properties below may hold
  different verdicts, and any whole-component summary is DERIVED from them
  rather than stored beside them.

  Regenerated on every run.  Hand edits are lost.
\\*-----------------------------------------------------------------------------*/

component      2Pentanol;
reviewStatus   unreviewed;

properties
(
{
    property       binaryVLE.P_bubble;
    operation      fit_nrtl;   // type fitParameters
    model          "binary pair, relative bubble-P residual at fixed T";
    verdict        validationRefused;
    refusal        "No independent experimental evidence remains after fitting.";

    fittedParameters
    {
        equilibrium.liquid.activityModel.binaryParameters.2Pentanol-124Trimethylbenzene.b_ij  -4.32372424299;
        equilibrium.liquid.activityModel.binaryParameters.2Pentanol-124Trimethylbenzene.b_ji  454.493599094;
    }

    evidence
    {
        partitionFingerprint  "1ce059994d055571";   // frozen before the fit

        datasets
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

        domain
        {
            coordinate  x1;
            fit         { min 0.0504; max 0.9504; n 24; }
        }
    }

    metrics
    {
        //  r2InSample: not computed by this operation (it reports chi-square).
        //  NO HELD-OUT METRIC EXISTS.  r2InSample above is exactly that --
        //  in-sample -- and must not be read as an external check.
    }
}

{
    property       binaryVLE.P_bubble;
    operation      fit_nrtl_start2;   // type fitParameters
    model          "binary pair, relative bubble-P residual at fixed T";
    verdict        validationRefused;
    refusal        "No independent experimental evidence remains after fitting.";

    fittedParameters
    {
        equilibrium.liquid.activityModel.binaryParameters.2Pentanol-124Trimethylbenzene.b_ij  63.5819583378;
        equilibrium.liquid.activityModel.binaryParameters.2Pentanol-124Trimethylbenzene.b_ji  4.60816286628;
    }

    evidence
    {
        partitionFingerprint  "1ce059994d055571";   // frozen before the fit

        datasets
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

        domain
        {
            coordinate  x1;
            fit         { min 0.0504; max 0.9504; n 24; }
        }
    }

    metrics
    {
        //  r2InSample: not computed by this operation (it reports chi-square).
        //  NO HELD-OUT METRIC EXISTS.  r2InSample above is exactly that --
        //  in-sample -- and must not be read as an external check.
    }
}

);
`,Ln=`/*--------------------------------*- Choupo -*--------------------------------*\\
  CURATION DOSSIER -- a scientific work record, NOT runtime property data.

  NOTHING IN THIS FILE IS VISIBLE TO THE SOLVER.  Record resolution looks only
  in <case>/constant/, data/standards/ and data/local/, so a file here is out
  of its reach BY CONSTRUCTION -- not by convention.

  Nothing here has been promoted.  Curation state belongs to the evidence
  process; runtime trust belongs to the numerical record actually admitted
  to data/standards/, and only an explicit human promotion moves one there
  (bin/curate/promote-from-dossier).

  MATURITY IS PER PROPERTY, not per component: the properties below may hold
  different verdicts, and any whole-component summary is DERIVED from them
  rather than stored beside them.

  Regenerated on every run.  Hand edits are lost.
\\*-----------------------------------------------------------------------------*/

component      2Methyl2Propanol;
reviewStatus   unreviewed;

properties
(
{
    property       binaryVLE.T_bubble;
    operation      fit_nrtl;   // type fitParameters
    model          "NRTL binary pair, bubble-T residual at fixed P";
    verdict        validationRefused;
    refusal        "No independent experimental evidence remains after fitting.";

    fittedParameters
    {
        equilibrium.liquid.activityModel.binaryParameters.2Methyl2Propanol-14Dioxane.b_ij  299.40076399;
        equilibrium.liquid.activityModel.binaryParameters.2Methyl2Propanol-14Dioxane.b_ji  -98.1902867115;
    }

    evidence
    {
        partitionFingerprint  "095c435c3c38bfd5";   // frozen before the fit

        datasets
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

        domain
        {
            coordinate  x1;
            fit         { min 0.0482; max 0.9731; n 100; }
        }
    }

    metrics
    {
        //  r2InSample: not computed by this operation (it reports chi-square).
        //  NO HELD-OUT METRIC EXISTS.  r2InSample above is exactly that --
        //  in-sample -- and must not be read as an external check.
    }
}

{
    property       binaryVLE.T_bubble;
    operation      fit_nrtl_start2;   // type fitParameters
    model          "NRTL binary pair, bubble-T residual at fixed P";
    verdict        validationRefused;
    refusal        "No independent experimental evidence remains after fitting.";

    fittedParameters
    {
        equilibrium.liquid.activityModel.binaryParameters.2Methyl2Propanol-14Dioxane.b_ij  299.400768147;
        equilibrium.liquid.activityModel.binaryParameters.2Methyl2Propanol-14Dioxane.b_ji  -98.190289614;
    }

    evidence
    {
        partitionFingerprint  "095c435c3c38bfd5";   // frozen before the fit

        datasets
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

        domain
        {
            coordinate  x1;
            fit         { min 0.0482; max 0.9731; n 100; }
        }
    }

    metrics
    {
        //  r2InSample: not computed by this operation (it reports chi-square).
        //  NO HELD-OUT METRIC EXISTS.  r2InSample above is exactly that --
        //  in-sample -- and must not be read as an external check.
    }
}

);
`,Fn=`/*--------------------------------*- Choupo -*--------------------------------*\\
  CURATION DOSSIER -- a scientific work record, NOT runtime property data.

  NOTHING IN THIS FILE IS VISIBLE TO THE SOLVER.  Record resolution looks only
  in <case>/constant/, data/standards/ and data/local/, so a file here is out
  of its reach BY CONSTRUCTION -- not by convention.

  Nothing here has been promoted.  Curation state belongs to the evidence
  process; runtime trust belongs to the numerical record actually admitted
  to data/standards/, and only an explicit human promotion moves one there
  (bin/curate/promote-from-dossier).

  MATURITY IS PER PROPERTY, not per component: the properties below may hold
  different verdicts, and any whole-component summary is DERIVED from them
  rather than stored beside them.

  Regenerated on every run.  Hand edits are lost.
\\*-----------------------------------------------------------------------------*/

component      14Dioxane;
reviewStatus   unreviewed;

properties
(
{
    property       binaryVLE.T_bubble;
    operation      fit_nrtl;   // type fitParameters
    model          "NRTL binary pair, bubble-T residual at fixed P";
    verdict        validationRefused;
    refusal        "No independent experimental evidence remains after fitting.";

    fittedParameters
    {
        equilibrium.liquid.activityModel.binaryParameters.14Dioxane-cyclohexane.b_ij  306.689912733;
        equilibrium.liquid.activityModel.binaryParameters.14Dioxane-cyclohexane.b_ji  144.310851003;
    }

    evidence
    {
        partitionFingerprint  "f607cd5a70c65101";   // frozen before the fit

        datasets
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

        domain
        {
            coordinate  x1;
            fit         { min 0.036; max 0.957; n 49; }
        }
    }

    metrics
    {
        //  r2InSample: not computed by this operation (it reports chi-square).
        //  NO HELD-OUT METRIC EXISTS.  r2InSample above is exactly that --
        //  in-sample -- and must not be read as an external check.
    }
}

{
    property       binaryVLE.T_bubble;
    operation      fit_nrtl_start2;   // type fitParameters
    model          "NRTL binary pair, bubble-T residual at fixed P";
    verdict        validationRefused;
    refusal        "No independent experimental evidence remains after fitting.";

    fittedParameters
    {
        equilibrium.liquid.activityModel.binaryParameters.14Dioxane-cyclohexane.b_ij  306.689911621;
        equilibrium.liquid.activityModel.binaryParameters.14Dioxane-cyclohexane.b_ji  144.310852075;
    }

    evidence
    {
        partitionFingerprint  "f607cd5a70c65101";   // frozen before the fit

        datasets
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

        domain
        {
            coordinate  x1;
            fit         { min 0.036; max 0.957; n 49; }
        }
    }

    metrics
    {
        //  r2InSample: not computed by this operation (it reports chi-square).
        //  NO HELD-OUT METRIC EXISTS.  r2InSample above is exactly that --
        //  in-sample -- and must not be read as an external check.
    }
}

);
`,wn=`/*--------------------------------*- Choupo -*--------------------------------*\\
  CURATION DOSSIER -- a scientific work record, NOT runtime property data.

  NOTHING IN THIS FILE IS VISIBLE TO THE SOLVER.  Record resolution looks only
  in <case>/constant/, data/standards/ and data/local/, so a file here is out
  of its reach BY CONSTRUCTION -- not by convention.

  Nothing here has been promoted.  Curation state belongs to the evidence
  process; runtime trust belongs to the numerical record actually admitted
  to data/standards/, and only an explicit human promotion moves one there
  (bin/curate/promote-from-dossier).

  MATURITY IS PER PROPERTY, not per component: the properties below may hold
  different verdicts, and any whole-component summary is DERIVED from them
  rather than stored beside them.

  Regenerated on every run.  Hand edits are lost.
\\*-----------------------------------------------------------------------------*/

component      14Dioxane;
reviewStatus   unreviewed;

properties
(
{
    property       binaryVLE.P_bubble;
    operation      fit_nrtl;   // type fitParameters
    model          "binary pair, relative bubble-P residual at fixed T";
    verdict        validationRefused;
    refusal        "No independent experimental evidence remains after fitting.";

    fittedParameters
    {
        equilibrium.liquid.activityModel.binaryParameters.14Dioxane-nButanol.b_ij  237.412742595;
        equilibrium.liquid.activityModel.binaryParameters.14Dioxane-nButanol.b_ji  -88.5904771676;
    }

    evidence
    {
        partitionFingerprint  "654b563921504d3e";   // frozen before the fit

        datasets
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

        domain
        {
            coordinate  x1;
            fit         { min 0.0215; max 0.9578; n 15; }
        }
    }

    metrics
    {
        //  r2InSample: not computed by this operation (it reports chi-square).
        //  NO HELD-OUT METRIC EXISTS.  r2InSample above is exactly that --
        //  in-sample -- and must not be read as an external check.
    }
}

{
    property       binaryVLE.P_bubble;
    operation      fit_nrtl_start2;   // type fitParameters
    model          "binary pair, relative bubble-P residual at fixed T";
    verdict        validationRefused;
    refusal        "No independent experimental evidence remains after fitting.";

    fittedParameters
    {
        equilibrium.liquid.activityModel.binaryParameters.14Dioxane-nButanol.b_ij  237.412732839;
        equilibrium.liquid.activityModel.binaryParameters.14Dioxane-nButanol.b_ji  -88.5904704156;
    }

    evidence
    {
        partitionFingerprint  "654b563921504d3e";   // frozen before the fit

        datasets
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

        domain
        {
            coordinate  x1;
            fit         { min 0.0215; max 0.9578; n 15; }
        }
    }

    metrics
    {
        //  r2InSample: not computed by this operation (it reports chi-square).
        //  NO HELD-OUT METRIC EXISTS.  r2InSample above is exactly that --
        //  in-sample -- and must not be read as an external check.
    }
}

);
`,Mn=`/*--------------------------------*- Choupo -*--------------------------------*\\
  CURATION DOSSIER -- a scientific work record, NOT runtime property data.

  NOTHING IN THIS FILE IS VISIBLE TO THE SOLVER.  Record resolution looks only
  in <case>/constant/, data/standards/ and data/local/, so a file here is out
  of its reach BY CONSTRUCTION -- not by convention.

  Nothing here has been promoted.  Curation state belongs to the evidence
  process; runtime trust belongs to the numerical record actually admitted
  to data/standards/, and only an explicit human promotion moves one there
  (bin/curate/promote-from-dossier).

  MATURITY IS PER PROPERTY, not per component: the properties below may hold
  different verdicts, and any whole-component summary is DERIVED from them
  rather than stored beside them.

  Regenerated on every run.  Hand edits are lost.
\\*-----------------------------------------------------------------------------*/

component      nButanol;
reviewStatus   unreviewed;

properties
(
{
    property       binaryVLE.P_bubble;
    operation      fit_nrtl;   // type fitParameters
    model          "binary pair, relative bubble-P residual at fixed T";
    verdict        validationRefused;
    refusal        "No independent experimental evidence remains after fitting.";

    fittedParameters
    {
        equilibrium.liquid.activityModel.binaryParameters.nButanol-1Hexanol.b_ij  183.027434584;
        equilibrium.liquid.activityModel.binaryParameters.nButanol-1Hexanol.b_ji  -201.157062845;
    }

    evidence
    {
        partitionFingerprint  "9664f12584abf0bd";   // frozen before the fit

        datasets
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

        domain
        {
            coordinate  x1;
            fit         { min 0.0495; max 0.9459; n 19; }
        }
    }

    metrics
    {
        //  r2InSample: not computed by this operation (it reports chi-square).
        //  NO HELD-OUT METRIC EXISTS.  r2InSample above is exactly that --
        //  in-sample -- and must not be read as an external check.
    }
}

{
    property       binaryVLE.P_bubble;
    operation      fit_nrtl_start2;   // type fitParameters
    model          "binary pair, relative bubble-P residual at fixed T";
    verdict        validationRefused;
    refusal        "No independent experimental evidence remains after fitting.";

    fittedParameters
    {
        equilibrium.liquid.activityModel.binaryParameters.nButanol-1Hexanol.b_ij  183.423492312;
        equilibrium.liquid.activityModel.binaryParameters.nButanol-1Hexanol.b_ji  -201.440492953;
    }

    evidence
    {
        partitionFingerprint  "9664f12584abf0bd";   // frozen before the fit

        datasets
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

        domain
        {
            coordinate  x1;
            fit         { min 0.0495; max 0.9459; n 19; }
        }
    }

    metrics
    {
        //  r2InSample: not computed by this operation (it reports chi-square).
        //  NO HELD-OUT METRIC EXISTS.  r2InSample above is exactly that --
        //  in-sample -- and must not be read as an external check.
    }
}

);
`,Bn=`/*--------------------------------*- Choupo -*--------------------------------*\\
  CURATION DOSSIER -- a scientific work record, NOT runtime property data.

  NOTHING IN THIS FILE IS VISIBLE TO THE SOLVER.  Record resolution looks only
  in <case>/constant/, data/standards/ and data/local/, so a file here is out
  of its reach BY CONSTRUCTION -- not by convention.

  Nothing here has been promoted.  Curation state belongs to the evidence
  process; runtime trust belongs to the numerical record actually admitted
  to data/standards/, and only an explicit human promotion moves one there
  (bin/curate/promote-from-dossier).

  MATURITY IS PER PROPERTY, not per component: the properties below may hold
  different verdicts, and any whole-component summary is DERIVED from them
  rather than stored beside them.

  Regenerated on every run.  Hand edits are lost.
\\*-----------------------------------------------------------------------------*/

component      nButylAcetate;
reviewStatus   unreviewed;

properties
(
{
    property       binaryVLE.P_bubble;
    operation      fit_nrtl;   // type fitParameters
    model          "binary pair, relative bubble-P residual at fixed T";
    verdict        validationRefused;
    refusal        "No independent experimental evidence remains after fitting.";

    fittedParameters
    {
        equilibrium.liquid.activityModel.binaryParameters.nButylAcetate-1Hexanol.b_ij  863.605861348;
        equilibrium.liquid.activityModel.binaryParameters.nButylAcetate-1Hexanol.b_ji  -101.058560911;
    }

    evidence
    {
        partitionFingerprint  "da9041ee8b8a63c6";   // frozen before the fit

        datasets
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

        domain
        {
            coordinate  x1;
            fit         { min 0.0302; max 0.9793; n 21; }
        }
    }

    metrics
    {
        //  r2InSample: not computed by this operation (it reports chi-square).
        //  NO HELD-OUT METRIC EXISTS.  r2InSample above is exactly that --
        //  in-sample -- and must not be read as an external check.
    }
}

{
    property       binaryVLE.P_bubble;
    operation      fit_nrtl_start2;   // type fitParameters
    model          "binary pair, relative bubble-P residual at fixed T";
    verdict        validationRefused;
    refusal        "No independent experimental evidence remains after fitting.";

    fittedParameters
    {
        equilibrium.liquid.activityModel.binaryParameters.nButylAcetate-1Hexanol.b_ij  863.605858727;
        equilibrium.liquid.activityModel.binaryParameters.nButylAcetate-1Hexanol.b_ji  -101.058558898;
    }

    evidence
    {
        partitionFingerprint  "da9041ee8b8a63c6";   // frozen before the fit

        datasets
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

        domain
        {
            coordinate  x1;
            fit         { min 0.0302; max 0.9793; n 21; }
        }
    }

    metrics
    {
        //  r2InSample: not computed by this operation (it reports chi-square).
        //  NO HELD-OUT METRIC EXISTS.  r2InSample above is exactly that --
        //  in-sample -- and must not be read as an external check.
    }
}

);
`,Un=`/*--------------------------------*- Choupo -*--------------------------------*\\
  CURATION DOSSIER -- a scientific work record, NOT runtime property data.

  NOTHING IN THIS FILE IS VISIBLE TO THE SOLVER.  Record resolution looks only
  in <case>/constant/, data/standards/ and data/local/, so a file here is out
  of its reach BY CONSTRUCTION -- not by convention.

  Nothing here has been promoted.  Curation state belongs to the evidence
  process; runtime trust belongs to the numerical record actually admitted
  to data/standards/, and only an explicit human promotion moves one there
  (bin/curate/promote-from-dossier).

  MATURITY IS PER PROPERTY, not per component: the properties below may hold
  different verdicts, and any whole-component summary is DERIVED from them
  rather than stored beside them.

  Regenerated on every run.  Hand edits are lost.
\\*-----------------------------------------------------------------------------*/

component      1Pentanol;
reviewStatus   unreviewed;

properties
(
{
    property       binaryVLE.P_bubble;
    operation      fit_nrtl;   // type fitParameters
    model          "binary pair, relative bubble-P residual at fixed T";
    verdict        validationRefused;
    refusal        "No independent experimental evidence remains after fitting.";

    fittedParameters
    {
        equilibrium.liquid.activityModel.binaryParameters.1Pentanol-1Hexene.b_ij  21.4408678445;
        equilibrium.liquid.activityModel.binaryParameters.1Pentanol-1Hexene.b_ji  644.906634985;
    }

    evidence
    {
        partitionFingerprint  "3abb9741515f2cf5";   // frozen before the fit

        datasets
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

        domain
        {
            coordinate  x1;
            fit         { min 0.0492; max 0.9493; n 24; }
        }
    }

    metrics
    {
        //  r2InSample: not computed by this operation (it reports chi-square).
        //  NO HELD-OUT METRIC EXISTS.  r2InSample above is exactly that --
        //  in-sample -- and must not be read as an external check.
    }
}

{
    property       binaryVLE.P_bubble;
    operation      fit_nrtl_start2;   // type fitParameters
    model          "binary pair, relative bubble-P residual at fixed T";
    verdict        validationRefused;
    refusal        "No independent experimental evidence remains after fitting.";

    fittedParameters
    {
        equilibrium.liquid.activityModel.binaryParameters.1Pentanol-1Hexene.b_ij  21.4408672651;
        equilibrium.liquid.activityModel.binaryParameters.1Pentanol-1Hexene.b_ji  644.906635307;
    }

    evidence
    {
        partitionFingerprint  "3abb9741515f2cf5";   // frozen before the fit

        datasets
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

        domain
        {
            coordinate  x1;
            fit         { min 0.0492; max 0.9493; n 24; }
        }
    }

    metrics
    {
        //  r2InSample: not computed by this operation (it reports chi-square).
        //  NO HELD-OUT METRIC EXISTS.  r2InSample above is exactly that --
        //  in-sample -- and must not be read as an external check.
    }
}

);
`,Vn=`/*--------------------------------*- Choupo -*--------------------------------*\\
  CURATION DOSSIER -- a scientific work record, NOT runtime property data.

  NOTHING IN THIS FILE IS VISIBLE TO THE SOLVER.  Record resolution looks only
  in <case>/constant/, data/standards/ and data/local/, so a file here is out
  of its reach BY CONSTRUCTION -- not by convention.

  Nothing here has been promoted.  Curation state belongs to the evidence
  process; runtime trust belongs to the numerical record actually admitted
  to data/standards/, and only an explicit human promotion moves one there
  (bin/curate/promote-from-dossier).

  MATURITY IS PER PROPERTY, not per component: the properties below may hold
  different verdicts, and any whole-component summary is DERIVED from them
  rather than stored beside them.

  Regenerated on every run.  Hand edits are lost.
\\*-----------------------------------------------------------------------------*/

component      2Butanol;
reviewStatus   unreviewed;

properties
(
{
    property       binaryVLE.P_bubble;
    operation      fit_nrtl;   // type fitParameters
    model          "binary pair, relative bubble-P residual at fixed T";
    verdict        validationRefused;
    refusal        "No independent experimental evidence remains after fitting.";

    fittedParameters
    {
        equilibrium.liquid.activityModel.binaryParameters.2Butanol-1Hexene.b_ij  87.7216450986;
        equilibrium.liquid.activityModel.binaryParameters.2Butanol-1Hexene.b_ji  527.964148014;
    }

    evidence
    {
        partitionFingerprint  "4e35b3924c7fe3f6";   // frozen before the fit

        datasets
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

        domain
        {
            coordinate  x1;
            fit         { min 0.0482; max 0.9437; n 24; }
        }
    }

    metrics
    {
        //  r2InSample: not computed by this operation (it reports chi-square).
        //  NO HELD-OUT METRIC EXISTS.  r2InSample above is exactly that --
        //  in-sample -- and must not be read as an external check.
    }
}

{
    property       binaryVLE.P_bubble;
    operation      fit_nrtl_start2;   // type fitParameters
    model          "binary pair, relative bubble-P residual at fixed T";
    verdict        validationRefused;
    refusal        "No independent experimental evidence remains after fitting.";

    fittedParameters
    {
        equilibrium.liquid.activityModel.binaryParameters.2Butanol-1Hexene.b_ij  87.7216437451;
        equilibrium.liquid.activityModel.binaryParameters.2Butanol-1Hexene.b_ji  527.96414982;
    }

    evidence
    {
        partitionFingerprint  "4e35b3924c7fe3f6";   // frozen before the fit

        datasets
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

        domain
        {
            coordinate  x1;
            fit         { min 0.0482; max 0.9437; n 24; }
        }
    }

    metrics
    {
        //  r2InSample: not computed by this operation (it reports chi-square).
        //  NO HELD-OUT METRIC EXISTS.  r2InSample above is exactly that --
        //  in-sample -- and must not be read as an external check.
    }
}

);
`,An=`/*--------------------------------*- Choupo -*--------------------------------*\\
  CURATION DOSSIER -- a scientific work record, NOT runtime property data.

  NOTHING IN THIS FILE IS VISIBLE TO THE SOLVER.  Record resolution looks only
  in <case>/constant/, data/standards/ and data/local/, so a file here is out
  of its reach BY CONSTRUCTION -- not by convention.

  Nothing here has been promoted.  Curation state belongs to the evidence
  process; runtime trust belongs to the numerical record actually admitted
  to data/standards/, and only an explicit human promotion moves one there
  (bin/curate/promote-from-dossier).

  MATURITY IS PER PROPERTY, not per component: the properties below may hold
  different verdicts, and any whole-component summary is DERIVED from them
  rather than stored beside them.

  Regenerated on every run.  Hand edits are lost.
\\*-----------------------------------------------------------------------------*/

component      diNButylEther;
reviewStatus   unreviewed;

properties
(
{
    property       binaryVLE.P_bubble;
    operation      fit_nrtl;   // type fitParameters
    model          "binary pair, relative bubble-P residual at fixed T";
    verdict        validationRefused;
    refusal        "No independent experimental evidence remains after fitting.";

    fittedParameters
    {
        equilibrium.liquid.activityModel.binaryParameters.diNButylEther-1Hexene.b_ij  116.644670013;
        equilibrium.liquid.activityModel.binaryParameters.diNButylEther-1Hexene.b_ji  -123.122603879;
    }

    evidence
    {
        partitionFingerprint  "45141da7bfb1240a";   // frozen before the fit

        datasets
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

        domain
        {
            coordinate  x1;
            fit         { min 0.0494; max 0.9416; n 26; }
        }
    }

    metrics
    {
        //  r2InSample: not computed by this operation (it reports chi-square).
        //  NO HELD-OUT METRIC EXISTS.  r2InSample above is exactly that --
        //  in-sample -- and must not be read as an external check.
    }
}

{
    property       binaryVLE.P_bubble;
    operation      fit_nrtl_start2;   // type fitParameters
    model          "binary pair, relative bubble-P residual at fixed T";
    verdict        validationRefused;
    refusal        "No independent experimental evidence remains after fitting.";

    fittedParameters
    {
        equilibrium.liquid.activityModel.binaryParameters.diNButylEther-1Hexene.b_ij  117.216227802;
        equilibrium.liquid.activityModel.binaryParameters.diNButylEther-1Hexene.b_ji  -123.57680929;
    }

    evidence
    {
        partitionFingerprint  "45141da7bfb1240a";   // frozen before the fit

        datasets
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

        domain
        {
            coordinate  x1;
            fit         { min 0.0494; max 0.9416; n 26; }
        }
    }

    metrics
    {
        //  r2InSample: not computed by this operation (it reports chi-square).
        //  NO HELD-OUT METRIC EXISTS.  r2InSample above is exactly that --
        //  in-sample -- and must not be read as an external check.
    }
}

);
`,kn=`/*--------------------------------*- Choupo -*--------------------------------*\\
  CURATION DOSSIER -- a scientific work record, NOT runtime property data.

  NOTHING IN THIS FILE IS VISIBLE TO THE SOLVER.  Record resolution looks only
  in <case>/constant/, data/standards/ and data/local/, so a file here is out
  of its reach BY CONSTRUCTION -- not by convention.

  Nothing here has been promoted.  Curation state belongs to the evidence
  process; runtime trust belongs to the numerical record actually admitted
  to data/standards/, and only an explicit human promotion moves one there
  (bin/curate/promote-from-dossier).

  MATURITY IS PER PROPERTY, not per component: the properties below may hold
  different verdicts, and any whole-component summary is DERIVED from them
  rather than stored beside them.

  Regenerated on every run.  Hand edits are lost.
\\*-----------------------------------------------------------------------------*/

component      nButanol;
reviewStatus   unreviewed;

properties
(
{
    property       binaryVLE.P_bubble;
    operation      fit_nrtl;   // type fitParameters
    model          "binary pair, relative bubble-P residual at fixed T";
    verdict        validationRefused;
    refusal        "No independent experimental evidence remains after fitting.";

    fittedParameters
    {
        equilibrium.liquid.activityModel.binaryParameters.nButanol-1Hexene.b_ij  75.0074800259;
        equilibrium.liquid.activityModel.binaryParameters.nButanol-1Hexene.b_ji  643.179200201;
    }

    evidence
    {
        partitionFingerprint  "b3924952bbe6f81b";   // frozen before the fit

        datasets
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

        domain
        {
            coordinate  x1;
            fit         { min 0.0502; max 0.9585; n 26; }
        }
    }

    metrics
    {
        //  r2InSample: not computed by this operation (it reports chi-square).
        //  NO HELD-OUT METRIC EXISTS.  r2InSample above is exactly that --
        //  in-sample -- and must not be read as an external check.
    }
}

{
    property       binaryVLE.P_bubble;
    operation      fit_nrtl_start2;   // type fitParameters
    model          "binary pair, relative bubble-P residual at fixed T";
    verdict        validationRefused;
    refusal        "No independent experimental evidence remains after fitting.";

    fittedParameters
    {
        equilibrium.liquid.activityModel.binaryParameters.nButanol-1Hexene.b_ij  75.0074817196;
        equilibrium.liquid.activityModel.binaryParameters.nButanol-1Hexene.b_ji  643.179199062;
    }

    evidence
    {
        partitionFingerprint  "b3924952bbe6f81b";   // frozen before the fit

        datasets
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

        domain
        {
            coordinate  x1;
            fit         { min 0.0502; max 0.9585; n 26; }
        }
    }

    metrics
    {
        //  r2InSample: not computed by this operation (it reports chi-square).
        //  NO HELD-OUT METRIC EXISTS.  r2InSample above is exactly that --
        //  in-sample -- and must not be read as an external check.
    }
}

);
`,Yn=`/*--------------------------------*- Choupo -*--------------------------------*\\
  CURATION DOSSIER -- a scientific work record, NOT runtime property data.

  NOTHING IN THIS FILE IS VISIBLE TO THE SOLVER.  Record resolution looks only
  in <case>/constant/, data/standards/ and data/local/, so a file here is out
  of its reach BY CONSTRUCTION -- not by convention.

  Nothing here has been promoted.  Curation state belongs to the evidence
  process; runtime trust belongs to the numerical record actually admitted
  to data/standards/, and only an explicit human promotion moves one there
  (bin/curate/promote-from-dossier).

  MATURITY IS PER PROPERTY, not per component: the properties below may hold
  different verdicts, and any whole-component summary is DERIVED from them
  rather than stored beside them.

  Regenerated on every run.  Hand edits are lost.
\\*-----------------------------------------------------------------------------*/

component      tertButylEthylEther;
reviewStatus   unreviewed;

properties
(
{
    property       binaryVLE.P_bubble;
    operation      fit_nrtl;   // type fitParameters
    model          "binary pair, relative bubble-P residual at fixed T";
    verdict        validationRefused;
    refusal        "No independent experimental evidence remains after fitting.";

    fittedParameters
    {
        equilibrium.liquid.activityModel.binaryParameters.tertButylEthylEther-1Hexene.b_ij  526.218244921;
        equilibrium.liquid.activityModel.binaryParameters.tertButylEthylEther-1Hexene.b_ji  -318.229019848;
    }

    evidence
    {
        partitionFingerprint  "d5f2da8369c9b611";   // frozen before the fit

        datasets
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

        domain
        {
            coordinate  x1;
            fit         { min 0.0521; max 0.9451; n 22; }
        }
    }

    metrics
    {
        //  r2InSample: not computed by this operation (it reports chi-square).
        //  NO HELD-OUT METRIC EXISTS.  r2InSample above is exactly that --
        //  in-sample -- and must not be read as an external check.
    }
}

{
    property       binaryVLE.P_bubble;
    operation      fit_nrtl_start2;   // type fitParameters
    model          "binary pair, relative bubble-P residual at fixed T";
    verdict        validationRefused;
    refusal        "No independent experimental evidence remains after fitting.";

    fittedParameters
    {
        equilibrium.liquid.activityModel.binaryParameters.tertButylEthylEther-1Hexene.b_ij  526.218281215;
        equilibrium.liquid.activityModel.binaryParameters.tertButylEthylEther-1Hexene.b_ji  -318.229036935;
    }

    evidence
    {
        partitionFingerprint  "d5f2da8369c9b611";   // frozen before the fit

        datasets
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

        domain
        {
            coordinate  x1;
            fit         { min 0.0521; max 0.9451; n 22; }
        }
    }

    metrics
    {
        //  r2InSample: not computed by this operation (it reports chi-square).
        //  NO HELD-OUT METRIC EXISTS.  r2InSample above is exactly that --
        //  in-sample -- and must not be read as an external check.
    }
}

);
`,zn=`/*--------------------------------*- Choupo -*--------------------------------*\\
  CURATION DOSSIER -- a scientific work record, NOT runtime property data.

  NOTHING IN THIS FILE IS VISIBLE TO THE SOLVER.  Record resolution looks only
  in <case>/constant/, data/standards/ and data/local/, so a file here is out
  of its reach BY CONSTRUCTION -- not by convention.

  Nothing here has been promoted.  Curation state belongs to the evidence
  process; runtime trust belongs to the numerical record actually admitted
  to data/standards/, and only an explicit human promotion moves one there
  (bin/curate/promote-from-dossier).

  MATURITY IS PER PROPERTY, not per component: the properties below may hold
  different verdicts, and any whole-component summary is DERIVED from them
  rather than stored beside them.

  Regenerated on every run.  Hand edits are lost.
\\*-----------------------------------------------------------------------------*/

component      1Pentanol;
reviewStatus   unreviewed;

properties
(
{
    property       binaryVLE.P_bubble;
    operation      fit_nrtl;   // type fitParameters
    model          "binary pair, relative bubble-P residual at fixed T";
    verdict        validationRefused;
    refusal        "No independent experimental evidence remains after fitting.";

    fittedParameters
    {
        equilibrium.liquid.activityModel.binaryParameters.1Pentanol-224Trimethylpentane.b_ij  82.5439883008;
        equilibrium.liquid.activityModel.binaryParameters.1Pentanol-224Trimethylpentane.b_ji  619.16463709;
    }

    evidence
    {
        partitionFingerprint  "8376986cd6557bff";   // frozen before the fit

        datasets
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

        domain
        {
            coordinate  x1;
            fit         { min 0.0492; max 0.9507; n 24; }
        }
    }

    metrics
    {
        //  r2InSample: not computed by this operation (it reports chi-square).
        //  NO HELD-OUT METRIC EXISTS.  r2InSample above is exactly that --
        //  in-sample -- and must not be read as an external check.
    }
}

{
    property       binaryVLE.P_bubble;
    operation      fit_nrtl_start2;   // type fitParameters
    model          "binary pair, relative bubble-P residual at fixed T";
    verdict        validationRefused;
    refusal        "No independent experimental evidence remains after fitting.";

    fittedParameters
    {
        equilibrium.liquid.activityModel.binaryParameters.1Pentanol-224Trimethylpentane.b_ij  82.5439902337;
        equilibrium.liquid.activityModel.binaryParameters.1Pentanol-224Trimethylpentane.b_ji  619.164634683;
    }

    evidence
    {
        partitionFingerprint  "8376986cd6557bff";   // frozen before the fit

        datasets
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

        domain
        {
            coordinate  x1;
            fit         { min 0.0492; max 0.9507; n 24; }
        }
    }

    metrics
    {
        //  r2InSample: not computed by this operation (it reports chi-square).
        //  NO HELD-OUT METRIC EXISTS.  r2InSample above is exactly that --
        //  in-sample -- and must not be read as an external check.
    }
}

);
`,Xn=`/*--------------------------------*- Choupo -*--------------------------------*\\
  CURATION DOSSIER -- a scientific work record, NOT runtime property data.

  NOTHING IN THIS FILE IS VISIBLE TO THE SOLVER.  Record resolution looks only
  in <case>/constant/, data/standards/ and data/local/, so a file here is out
  of its reach BY CONSTRUCTION -- not by convention.

  Nothing here has been promoted.  Curation state belongs to the evidence
  process; runtime trust belongs to the numerical record actually admitted
  to data/standards/, and only an explicit human promotion moves one there
  (bin/curate/promote-from-dossier).

  MATURITY IS PER PROPERTY, not per component: the properties below may hold
  different verdicts, and any whole-component summary is DERIVED from them
  rather than stored beside them.

  Regenerated on every run.  Hand edits are lost.
\\*-----------------------------------------------------------------------------*/

component      2Hexanone;
reviewStatus   unreviewed;

properties
(
{
    property       binaryVLE.T_bubble;
    operation      fit_nrtl;   // type fitParameters
    model          "NRTL binary pair, bubble-T residual at fixed P";
    verdict        validationRefused;
    refusal        "No independent experimental evidence remains after fitting.";

    fittedParameters
    {
        equilibrium.liquid.activityModel.binaryParameters.2Hexanone-1Pentanol.b_ij  268.121838688;
        equilibrium.liquid.activityModel.binaryParameters.2Hexanone-1Pentanol.b_ji  -141.603289037;
    }

    evidence
    {
        partitionFingerprint  "0e6c1b4e5e6483d5";   // frozen before the fit

        datasets
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

        domain
        {
            coordinate  x1;
            fit         { min 0.151; max 0.9; n 27; }
        }
    }

    metrics
    {
        //  r2InSample: not computed by this operation (it reports chi-square).
        //  NO HELD-OUT METRIC EXISTS.  r2InSample above is exactly that --
        //  in-sample -- and must not be read as an external check.
    }
}

{
    property       binaryVLE.T_bubble;
    operation      fit_nrtl_start2;   // type fitParameters
    model          "NRTL binary pair, bubble-T residual at fixed P";
    verdict        validationRefused;
    refusal        "No independent experimental evidence remains after fitting.";

    fittedParameters
    {
        equilibrium.liquid.activityModel.binaryParameters.2Hexanone-1Pentanol.b_ij  268.121841086;
        equilibrium.liquid.activityModel.binaryParameters.2Hexanone-1Pentanol.b_ji  -141.603290793;
    }

    evidence
    {
        partitionFingerprint  "0e6c1b4e5e6483d5";   // frozen before the fit

        datasets
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

        domain
        {
            coordinate  x1;
            fit         { min 0.151; max 0.9; n 27; }
        }
    }

    metrics
    {
        //  r2InSample: not computed by this operation (it reports chi-square).
        //  NO HELD-OUT METRIC EXISTS.  r2InSample above is exactly that --
        //  in-sample -- and must not be read as an external check.
    }
}

);
`,Gn=`/*--------------------------------*- Choupo -*--------------------------------*\\
  CURATION DOSSIER -- a scientific work record, NOT runtime property data.

  NOTHING IN THIS FILE IS VISIBLE TO THE SOLVER.  Record resolution looks only
  in <case>/constant/, data/standards/ and data/local/, so a file here is out
  of its reach BY CONSTRUCTION -- not by convention.

  Nothing here has been promoted.  Curation state belongs to the evidence
  process; runtime trust belongs to the numerical record actually admitted
  to data/standards/, and only an explicit human promotion moves one there
  (bin/curate/promote-from-dossier).

  MATURITY IS PER PROPERTY, not per component: the properties below may hold
  different verdicts, and any whole-component summary is DERIVED from them
  rather than stored beside them.

  Regenerated on every run.  Hand edits are lost.
\\*-----------------------------------------------------------------------------*/

component      1Pentanol;
reviewStatus   unreviewed;

properties
(
{
    property       binaryVLE.T_bubble;
    operation      fit_nrtl;   // type fitParameters
    model          "NRTL binary pair, bubble-T residual at fixed P";
    verdict        validationRefused;
    refusal        "No independent experimental evidence remains after fitting.";

    fittedParameters
    {
        equilibrium.liquid.activityModel.binaryParameters.1Pentanol-anisole.b_ij  143.6406818;
        equilibrium.liquid.activityModel.binaryParameters.1Pentanol-anisole.b_ji  178.755423622;
    }

    evidence
    {
        partitionFingerprint  "bcba90c591cc9401";   // frozen before the fit

        datasets
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

        domain
        {
            coordinate  x1;
            fit         { min 0.057; max 0.941; n 68; }
        }
    }

    metrics
    {
        //  r2InSample: not computed by this operation (it reports chi-square).
        //  NO HELD-OUT METRIC EXISTS.  r2InSample above is exactly that --
        //  in-sample -- and must not be read as an external check.
    }
}

{
    property       binaryVLE.T_bubble;
    operation      fit_nrtl_start2;   // type fitParameters
    model          "NRTL binary pair, bubble-T residual at fixed P";
    verdict        validationRefused;
    refusal        "No independent experimental evidence remains after fitting.";

    fittedParameters
    {
        equilibrium.liquid.activityModel.binaryParameters.1Pentanol-anisole.b_ij  143.640679934;
        equilibrium.liquid.activityModel.binaryParameters.1Pentanol-anisole.b_ji  178.755425372;
    }

    evidence
    {
        partitionFingerprint  "bcba90c591cc9401";   // frozen before the fit

        datasets
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

        domain
        {
            coordinate  x1;
            fit         { min 0.057; max 0.941; n 68; }
        }
    }

    metrics
    {
        //  r2InSample: not computed by this operation (it reports chi-square).
        //  NO HELD-OUT METRIC EXISTS.  r2InSample above is exactly that --
        //  in-sample -- and must not be read as an external check.
    }
}

);
`,Kn=`/*--------------------------------*- Choupo -*--------------------------------*\\
  CURATION DOSSIER -- a scientific work record, NOT runtime property data.

  NOTHING IN THIS FILE IS VISIBLE TO THE SOLVER.  Record resolution looks only
  in <case>/constant/, data/standards/ and data/local/, so a file here is out
  of its reach BY CONSTRUCTION -- not by convention.

  Nothing here has been promoted.  Curation state belongs to the evidence
  process; runtime trust belongs to the numerical record actually admitted
  to data/standards/, and only an explicit human promotion moves one there
  (bin/curate/promote-from-dossier).

  MATURITY IS PER PROPERTY, not per component: the properties below may hold
  different verdicts, and any whole-component summary is DERIVED from them
  rather than stored beside them.

  Regenerated on every run.  Hand edits are lost.
\\*-----------------------------------------------------------------------------*/

component      1Pentanol;
reviewStatus   unreviewed;

properties
(
{
    property       binaryVLE.P_bubble;
    operation      fit_nrtl;   // type fitParameters
    model          "binary pair, relative bubble-P residual at fixed T";
    verdict        validationRefused;
    refusal        "No independent experimental evidence remains after fitting.";

    fittedParameters
    {
        equilibrium.liquid.activityModel.binaryParameters.1Pentanol-cyclohexane.b_ij  -19.8343839669;
        equilibrium.liquid.activityModel.binaryParameters.1Pentanol-cyclohexane.b_ji  743.88871862;
    }

    evidence
    {
        partitionFingerprint  "d057058ed50cd50b";   // frozen before the fit

        datasets
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

        domain
        {
            coordinate  x1;
            fit         { min 0.0491; max 0.9512; n 24; }
        }
    }

    metrics
    {
        //  r2InSample: not computed by this operation (it reports chi-square).
        //  NO HELD-OUT METRIC EXISTS.  r2InSample above is exactly that --
        //  in-sample -- and must not be read as an external check.
    }
}

{
    property       binaryVLE.P_bubble;
    operation      fit_nrtl_start2;   // type fitParameters
    model          "binary pair, relative bubble-P residual at fixed T";
    verdict        validationRefused;
    refusal        "No independent experimental evidence remains after fitting.";

    fittedParameters
    {
        equilibrium.liquid.activityModel.binaryParameters.1Pentanol-cyclohexane.b_ij  -19.8343849188;
        equilibrium.liquid.activityModel.binaryParameters.1Pentanol-cyclohexane.b_ji  743.888720712;
    }

    evidence
    {
        partitionFingerprint  "d057058ed50cd50b";   // frozen before the fit

        datasets
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

        domain
        {
            coordinate  x1;
            fit         { min 0.0491; max 0.9512; n 24; }
        }
    }

    metrics
    {
        //  r2InSample: not computed by this operation (it reports chi-square).
        //  NO HELD-OUT METRIC EXISTS.  r2InSample above is exactly that --
        //  in-sample -- and must not be read as an external check.
    }
}

);
`,$n=`/*--------------------------------*- Choupo -*--------------------------------*\\
  CURATION DOSSIER -- a scientific work record, NOT runtime property data.

  NOTHING IN THIS FILE IS VISIBLE TO THE SOLVER.  Record resolution looks only
  in <case>/constant/, data/standards/ and data/local/, so a file here is out
  of its reach BY CONSTRUCTION -- not by convention.

  Nothing here has been promoted.  Curation state belongs to the evidence
  process; runtime trust belongs to the numerical record actually admitted
  to data/standards/, and only an explicit human promotion moves one there
  (bin/curate/promote-from-dossier).

  MATURITY IS PER PROPERTY, not per component: the properties below may hold
  different verdicts, and any whole-component summary is DERIVED from them
  rather than stored beside them.

  Regenerated on every run.  Hand edits are lost.
\\*-----------------------------------------------------------------------------*/

component      1Pentanol;
reviewStatus   unreviewed;

properties
(
{
    property       binaryVLE.P_bubble;
    operation      fit_nrtl;   // type fitParameters
    model          "binary pair, relative bubble-P residual at fixed T";
    verdict        validationRefused;
    refusal        "No independent experimental evidence remains after fitting.";

    fittedParameters
    {
        equilibrium.liquid.activityModel.binaryParameters.1Pentanol-nHexane.b_ij  53.1503015194;
        equilibrium.liquid.activityModel.binaryParameters.1Pentanol-nHexane.b_ji  660.364270906;
    }

    evidence
    {
        partitionFingerprint  "5441074d4ca4ad39";   // frozen before the fit

        datasets
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

        domain
        {
            coordinate  x1;
            fit         { min 0.0287; max 0.9502; n 24; }
        }
    }

    metrics
    {
        //  r2InSample: not computed by this operation (it reports chi-square).
        //  NO HELD-OUT METRIC EXISTS.  r2InSample above is exactly that --
        //  in-sample -- and must not be read as an external check.
    }
}

{
    property       binaryVLE.P_bubble;
    operation      fit_nrtl_start2;   // type fitParameters
    model          "binary pair, relative bubble-P residual at fixed T";
    verdict        validationRefused;
    refusal        "No independent experimental evidence remains after fitting.";

    fittedParameters
    {
        equilibrium.liquid.activityModel.binaryParameters.1Pentanol-nHexane.b_ij  53.1503025453;
        equilibrium.liquid.activityModel.binaryParameters.1Pentanol-nHexane.b_ji  660.364270864;
    }

    evidence
    {
        partitionFingerprint  "5441074d4ca4ad39";   // frozen before the fit

        datasets
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

        domain
        {
            coordinate  x1;
            fit         { min 0.0287; max 0.9502; n 24; }
        }
    }

    metrics
    {
        //  r2InSample: not computed by this operation (it reports chi-square).
        //  NO HELD-OUT METRIC EXISTS.  r2InSample above is exactly that --
        //  in-sample -- and must not be read as an external check.
    }
}

);
`,Wn=`/*--------------------------------*- Choupo -*--------------------------------*\\
  CURATION DOSSIER -- a scientific work record, NOT runtime property data.

  NOTHING IN THIS FILE IS VISIBLE TO THE SOLVER.  Record resolution looks only
  in <case>/constant/, data/standards/ and data/local/, so a file here is out
  of its reach BY CONSTRUCTION -- not by convention.

  Nothing here has been promoted.  Curation state belongs to the evidence
  process; runtime trust belongs to the numerical record actually admitted
  to data/standards/, and only an explicit human promotion moves one there
  (bin/curate/promote-from-dossier).

  MATURITY IS PER PROPERTY, not per component: the properties below may hold
  different verdicts, and any whole-component summary is DERIVED from them
  rather than stored beside them.

  Regenerated on every run.  Hand edits are lost.
\\*-----------------------------------------------------------------------------*/

component      1Pentanol;
reviewStatus   unreviewed;

properties
(
{
    property       binaryVLE.T_bubble;
    operation      fit_nrtl;   // type fitParameters
    model          "NRTL binary pair, bubble-T residual at fixed P";
    verdict        validationRefused;
    refusal        "No independent experimental evidence remains after fitting.";

    fittedParameters
    {
        equilibrium.liquid.activityModel.binaryParameters.1Pentanol-nNonane.b_ij  261.357937886;
        equilibrium.liquid.activityModel.binaryParameters.1Pentanol-nNonane.b_ji  282.73402567;
    }

    evidence
    {
        partitionFingerprint  "ddefd34b623e7be0";   // frozen before the fit

        datasets
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

        domain
        {
            coordinate  x1;
            fit         { min 0.016; max 0.99; n 75; }
        }
    }

    metrics
    {
        //  r2InSample: not computed by this operation (it reports chi-square).
        //  NO HELD-OUT METRIC EXISTS.  r2InSample above is exactly that --
        //  in-sample -- and must not be read as an external check.
    }
}

{
    property       binaryVLE.T_bubble;
    operation      fit_nrtl_start2;   // type fitParameters
    model          "NRTL binary pair, bubble-T residual at fixed P";
    verdict        validationRefused;
    refusal        "No independent experimental evidence remains after fitting.";

    fittedParameters
    {
        equilibrium.liquid.activityModel.binaryParameters.1Pentanol-nNonane.b_ij  261.357938682;
        equilibrium.liquid.activityModel.binaryParameters.1Pentanol-nNonane.b_ji  282.734024741;
    }

    evidence
    {
        partitionFingerprint  "ddefd34b623e7be0";   // frozen before the fit

        datasets
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

        domain
        {
            coordinate  x1;
            fit         { min 0.016; max 0.99; n 75; }
        }
    }

    metrics
    {
        //  r2InSample: not computed by this operation (it reports chi-square).
        //  NO HELD-OUT METRIC EXISTS.  r2InSample above is exactly that --
        //  in-sample -- and must not be read as an external check.
    }
}

);
`,Jn=`/*--------------------------------*- Choupo -*--------------------------------*\\
  CURATION DOSSIER -- a scientific work record, NOT runtime property data.

  NOTHING IN THIS FILE IS VISIBLE TO THE SOLVER.  Record resolution looks only
  in <case>/constant/, data/standards/ and data/local/, so a file here is out
  of its reach BY CONSTRUCTION -- not by convention.

  Nothing here has been promoted.  Curation state belongs to the evidence
  process; runtime trust belongs to the numerical record actually admitted
  to data/standards/, and only an explicit human promotion moves one there
  (bin/curate/promote-from-dossier).

  MATURITY IS PER PROPERTY, not per component: the properties below may hold
  different verdicts, and any whole-component summary is DERIVED from them
  rather than stored beside them.

  Regenerated on every run.  Hand edits are lost.
\\*-----------------------------------------------------------------------------*/

component      1Pentanol;
reviewStatus   unreviewed;

properties
(
{
    property       binaryVLE.P_bubble;
    operation      fit_nrtl;   // type fitParameters
    model          "binary pair, relative bubble-P residual at fixed T";
    verdict        validationRefused;
    refusal        "No independent experimental evidence remains after fitting.";

    fittedParameters
    {
        equilibrium.liquid.activityModel.binaryParameters.1Pentanol-toluene.b_ij  -57.1746710402;
        equilibrium.liquid.activityModel.binaryParameters.1Pentanol-toluene.b_ji  634.323011564;
    }

    evidence
    {
        partitionFingerprint  "7df747a7943b5ae5";   // frozen before the fit

        datasets
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

        domain
        {
            coordinate  x1;
            fit         { min 0.0493; max 0.9517; n 24; }
        }
    }

    metrics
    {
        //  r2InSample: not computed by this operation (it reports chi-square).
        //  NO HELD-OUT METRIC EXISTS.  r2InSample above is exactly that --
        //  in-sample -- and must not be read as an external check.
    }
}

{
    property       binaryVLE.P_bubble;
    operation      fit_nrtl_start2;   // type fitParameters
    model          "binary pair, relative bubble-P residual at fixed T";
    verdict        validationRefused;
    refusal        "No independent experimental evidence remains after fitting.";

    fittedParameters
    {
        equilibrium.liquid.activityModel.binaryParameters.1Pentanol-toluene.b_ij  -57.1746688632;
        equilibrium.liquid.activityModel.binaryParameters.1Pentanol-toluene.b_ji  634.323005299;
    }

    evidence
    {
        partitionFingerprint  "7df747a7943b5ae5";   // frozen before the fit

        datasets
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

        domain
        {
            coordinate  x1;
            fit         { min 0.0493; max 0.9517; n 24; }
        }
    }

    metrics
    {
        //  r2InSample: not computed by this operation (it reports chi-square).
        //  NO HELD-OUT METRIC EXISTS.  r2InSample above is exactly that --
        //  in-sample -- and must not be read as an external check.
    }
}

);
`,Zn=`/*--------------------------------*- Choupo -*--------------------------------*\\
  CURATION DOSSIER -- a scientific work record, NOT runtime property data.

  NOTHING IN THIS FILE IS VISIBLE TO THE SOLVER.  Record resolution looks only
  in <case>/constant/, data/standards/ and data/local/, so a file here is out
  of its reach BY CONSTRUCTION -- not by convention.

  Nothing here has been promoted.  Curation state belongs to the evidence
  process; runtime trust belongs to the numerical record actually admitted
  to data/standards/, and only an explicit human promotion moves one there
  (bin/curate/promote-from-dossier).

  MATURITY IS PER PROPERTY, not per component: the properties below may hold
  different verdicts, and any whole-component summary is DERIVED from them
  rather than stored beside them.

  Regenerated on every run.  Hand edits are lost.
\\*-----------------------------------------------------------------------------*/

component      1Propanol;
reviewStatus   unreviewed;

properties
(
{
    property       binaryVLE.P_bubble;
    operation      fit_nrtl;   // type fitParameters
    model          "binary pair, relative bubble-P residual at fixed T";
    verdict        validationRefused;
    refusal        "No independent experimental evidence remains after fitting.";

    fittedParameters
    {
        equilibrium.liquid.activityModel.binaryParameters.1Propanol-224Trimethylpentane.b_ij  299.788493418;
        equilibrium.liquid.activityModel.binaryParameters.1Propanol-224Trimethylpentane.b_ji  505.071716299;
    }

    evidence
    {
        partitionFingerprint  "f2954d9611f5876d";   // frozen before the fit

        datasets
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

        domain
        {
            coordinate  x1;
            fit         { min 0.0539; max 0.9182; n 21; }
        }
    }

    metrics
    {
        //  r2InSample: not computed by this operation (it reports chi-square).
        //  NO HELD-OUT METRIC EXISTS.  r2InSample above is exactly that --
        //  in-sample -- and must not be read as an external check.
    }
}

{
    property       binaryVLE.P_bubble;
    operation      fit_nrtl_start2;   // type fitParameters
    model          "binary pair, relative bubble-P residual at fixed T";
    verdict        validationRefused;
    refusal        "No independent experimental evidence remains after fitting.";

    fittedParameters
    {
        equilibrium.liquid.activityModel.binaryParameters.1Propanol-224Trimethylpentane.b_ij  299.788490492;
        equilibrium.liquid.activityModel.binaryParameters.1Propanol-224Trimethylpentane.b_ji  505.071719971;
    }

    evidence
    {
        partitionFingerprint  "f2954d9611f5876d";   // frozen before the fit

        datasets
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

        domain
        {
            coordinate  x1;
            fit         { min 0.0539; max 0.9182; n 21; }
        }
    }

    metrics
    {
        //  r2InSample: not computed by this operation (it reports chi-square).
        //  NO HELD-OUT METRIC EXISTS.  r2InSample above is exactly that --
        //  in-sample -- and must not be read as an external check.
    }
}

);
`,Qn=`/*--------------------------------*- Choupo -*--------------------------------*\\
  CURATION DOSSIER -- a scientific work record, NOT runtime property data.

  NOTHING IN THIS FILE IS VISIBLE TO THE SOLVER.  Record resolution looks only
  in <case>/constant/, data/standards/ and data/local/, so a file here is out
  of its reach BY CONSTRUCTION -- not by convention.

  Nothing here has been promoted.  Curation state belongs to the evidence
  process; runtime trust belongs to the numerical record actually admitted
  to data/standards/, and only an explicit human promotion moves one there
  (bin/curate/promote-from-dossier).

  MATURITY IS PER PROPERTY, not per component: the properties below may hold
  different verdicts, and any whole-component summary is DERIVED from them
  rather than stored beside them.

  Regenerated on every run.  Hand edits are lost.
\\*-----------------------------------------------------------------------------*/

component      Dichloroethane;
reviewStatus   unreviewed;

properties
(
{
    property       binaryVLE.P_bubble;
    operation      fit_nrtl;   // type fitParameters
    model          "binary pair, relative bubble-P residual at fixed T";
    verdict        validationRefused;
    refusal        "No independent experimental evidence remains after fitting.";

    fittedParameters
    {
        equilibrium.liquid.activityModel.binaryParameters.Dichloroethane-1Propanol.b_ij  569.304234174;
        equilibrium.liquid.activityModel.binaryParameters.Dichloroethane-1Propanol.b_ji  80.1830231462;
    }

    evidence
    {
        partitionFingerprint  "fe1d936afdfc51b5";   // frozen before the fit

        datasets
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

        domain
        {
            coordinate  x1;
            fit         { min 0.0992; max 0.8289; n 11; }
        }
    }

    metrics
    {
        //  r2InSample: not computed by this operation (it reports chi-square).
        //  NO HELD-OUT METRIC EXISTS.  r2InSample above is exactly that --
        //  in-sample -- and must not be read as an external check.
    }
}

{
    property       binaryVLE.P_bubble;
    operation      fit_nrtl_start2;   // type fitParameters
    model          "binary pair, relative bubble-P residual at fixed T";
    verdict        validationRefused;
    refusal        "No independent experimental evidence remains after fitting.";

    fittedParameters
    {
        equilibrium.liquid.activityModel.binaryParameters.Dichloroethane-1Propanol.b_ij  569.304229909;
        equilibrium.liquid.activityModel.binaryParameters.Dichloroethane-1Propanol.b_ji  80.1830252915;
    }

    evidence
    {
        partitionFingerprint  "fe1d936afdfc51b5";   // frozen before the fit

        datasets
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

        domain
        {
            coordinate  x1;
            fit         { min 0.0992; max 0.8289; n 11; }
        }
    }

    metrics
    {
        //  r2InSample: not computed by this operation (it reports chi-square).
        //  NO HELD-OUT METRIC EXISTS.  r2InSample above is exactly that --
        //  in-sample -- and must not be read as an external check.
    }
}

);
`,et=`/*--------------------------------*- Choupo -*--------------------------------*\\
  CURATION DOSSIER -- a scientific work record, NOT runtime property data.

  NOTHING IN THIS FILE IS VISIBLE TO THE SOLVER.  Record resolution looks only
  in <case>/constant/, data/standards/ and data/local/, so a file here is out
  of its reach BY CONSTRUCTION -- not by convention.

  Nothing here has been promoted.  Curation state belongs to the evidence
  process; runtime trust belongs to the numerical record actually admitted
  to data/standards/, and only an explicit human promotion moves one there
  (bin/curate/promote-from-dossier).

  MATURITY IS PER PROPERTY, not per component: the properties below may hold
  different verdicts, and any whole-component summary is DERIVED from them
  rather than stored beside them.

  Regenerated on every run.  Hand edits are lost.
\\*-----------------------------------------------------------------------------*/

component      acetonitrile;
reviewStatus   unreviewed;

properties
(
{
    property       binaryVLE.T_bubble;
    operation      fit_nrtl;   // type fitParameters
    model          "NRTL binary pair, bubble-T residual at fixed P";
    verdict        validationRefused;
    refusal        "No independent experimental evidence remains after fitting.";

    fittedParameters
    {
        equilibrium.liquid.activityModel.binaryParameters.acetonitrile-1Propanol.b_ij  191.683979179;
        equilibrium.liquid.activityModel.binaryParameters.acetonitrile-1Propanol.b_ji  249.336598612;
    }

    evidence
    {
        partitionFingerprint  "e6bfaf3c7d1fa8af";   // frozen before the fit

        datasets
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

        domain
        {
            coordinate  x1;
            fit         { min 0.052; max 0.996; n 58; }
        }
    }

    metrics
    {
        //  r2InSample: not computed by this operation (it reports chi-square).
        //  NO HELD-OUT METRIC EXISTS.  r2InSample above is exactly that --
        //  in-sample -- and must not be read as an external check.
    }
}

{
    property       binaryVLE.T_bubble;
    operation      fit_nrtl_start2;   // type fitParameters
    model          "NRTL binary pair, bubble-T residual at fixed P";
    verdict        validationRefused;
    refusal        "No independent experimental evidence remains after fitting.";

    fittedParameters
    {
        equilibrium.liquid.activityModel.binaryParameters.acetonitrile-1Propanol.b_ij  191.683980952;
        equilibrium.liquid.activityModel.binaryParameters.acetonitrile-1Propanol.b_ji  249.336596835;
    }

    evidence
    {
        partitionFingerprint  "e6bfaf3c7d1fa8af";   // frozen before the fit

        datasets
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

        domain
        {
            coordinate  x1;
            fit         { min 0.052; max 0.996; n 58; }
        }
    }

    metrics
    {
        //  r2InSample: not computed by this operation (it reports chi-square).
        //  NO HELD-OUT METRIC EXISTS.  r2InSample above is exactly that --
        //  in-sample -- and must not be read as an external check.
    }
}

);
`,nt=`/*--------------------------------*- Choupo -*--------------------------------*\\
  CURATION DOSSIER -- a scientific work record, NOT runtime property data.

  NOTHING IN THIS FILE IS VISIBLE TO THE SOLVER.  Record resolution looks only
  in <case>/constant/, data/standards/ and data/local/, so a file here is out
  of its reach BY CONSTRUCTION -- not by convention.

  Nothing here has been promoted.  Curation state belongs to the evidence
  process; runtime trust belongs to the numerical record actually admitted
  to data/standards/, and only an explicit human promotion moves one there
  (bin/curate/promote-from-dossier).

  MATURITY IS PER PROPERTY, not per component: the properties below may hold
  different verdicts, and any whole-component summary is DERIVED from them
  rather than stored beside them.

  Regenerated on every run.  Hand edits are lost.
\\*-----------------------------------------------------------------------------*/

component      benzene;
reviewStatus   unreviewed;

properties
(
{
    property       binaryVLE.P_bubble;
    operation      fit_nrtl;   // type fitParameters
    model          "binary pair, relative bubble-P residual at fixed T";
    verdict        validationRefused;
    refusal        "No independent experimental evidence remains after fitting.";

    fittedParameters
    {
        equilibrium.liquid.activityModel.binaryParameters.benzene-1Propanol.b_ij  563.126457156;
        equilibrium.liquid.activityModel.binaryParameters.benzene-1Propanol.b_ji  84.9589975406;
    }

    evidence
    {
        partitionFingerprint  "aa0bfd5f8da1dd51";   // frozen before the fit

        datasets
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

        domain
        {
            coordinate  x1;
            fit         { min 0.0503; max 0.9487; n 24; }
        }
    }

    metrics
    {
        //  r2InSample: not computed by this operation (it reports chi-square).
        //  NO HELD-OUT METRIC EXISTS.  r2InSample above is exactly that --
        //  in-sample -- and must not be read as an external check.
    }
}

{
    property       binaryVLE.P_bubble;
    operation      fit_nrtl_start2;   // type fitParameters
    model          "binary pair, relative bubble-P residual at fixed T";
    verdict        validationRefused;
    refusal        "No independent experimental evidence remains after fitting.";

    fittedParameters
    {
        equilibrium.liquid.activityModel.binaryParameters.benzene-1Propanol.b_ij  563.126452176;
        equilibrium.liquid.activityModel.binaryParameters.benzene-1Propanol.b_ji  84.9590020368;
    }

    evidence
    {
        partitionFingerprint  "aa0bfd5f8da1dd51";   // frozen before the fit

        datasets
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

        domain
        {
            coordinate  x1;
            fit         { min 0.0503; max 0.9487; n 24; }
        }
    }

    metrics
    {
        //  r2InSample: not computed by this operation (it reports chi-square).
        //  NO HELD-OUT METRIC EXISTS.  r2InSample above is exactly that --
        //  in-sample -- and must not be read as an external check.
    }
}

);
`,tt=`/*--------------------------------*- Choupo -*--------------------------------*\\
  CURATION DOSSIER -- a scientific work record, NOT runtime property data.

  NOTHING IN THIS FILE IS VISIBLE TO THE SOLVER.  Record resolution looks only
  in <case>/constant/, data/standards/ and data/local/, so a file here is out
  of its reach BY CONSTRUCTION -- not by convention.

  Nothing here has been promoted.  Curation state belongs to the evidence
  process; runtime trust belongs to the numerical record actually admitted
  to data/standards/, and only an explicit human promotion moves one there
  (bin/curate/promote-from-dossier).

  MATURITY IS PER PROPERTY, not per component: the properties below may hold
  different verdicts, and any whole-component summary is DERIVED from them
  rather than stored beside them.

  Regenerated on every run.  Hand edits are lost.
\\*-----------------------------------------------------------------------------*/

component      diethylSulfide;
reviewStatus   unreviewed;

properties
(
{
    property       binaryVLE.P_bubble;
    operation      fit_nrtl;   // type fitParameters
    model          "binary pair, relative bubble-P residual at fixed T";
    verdict        validationRefused;
    refusal        "No independent experimental evidence remains after fitting.";

    fittedParameters
    {
        equilibrium.liquid.activityModel.binaryParameters.diethylSulfide-1Propanol.b_ij  262.02134082;
        equilibrium.liquid.activityModel.binaryParameters.diethylSulfide-1Propanol.b_ji  171.488161179;
    }

    evidence
    {
        partitionFingerprint  "ca23d63a0fc2a2b4";   // frozen before the fit

        datasets
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

        domain
        {
            coordinate  x1;
            fit         { min 0.019; max 0.959; n 11; }
        }
    }

    metrics
    {
        //  r2InSample: not computed by this operation (it reports chi-square).
        //  NO HELD-OUT METRIC EXISTS.  r2InSample above is exactly that --
        //  in-sample -- and must not be read as an external check.
    }
}

{
    property       binaryVLE.P_bubble;
    operation      fit_nrtl_start2;   // type fitParameters
    model          "binary pair, relative bubble-P residual at fixed T";
    verdict        validationRefused;
    refusal        "No independent experimental evidence remains after fitting.";

    fittedParameters
    {
        equilibrium.liquid.activityModel.binaryParameters.diethylSulfide-1Propanol.b_ij  262.021334946;
        equilibrium.liquid.activityModel.binaryParameters.diethylSulfide-1Propanol.b_ji  171.488165229;
    }

    evidence
    {
        partitionFingerprint  "ca23d63a0fc2a2b4";   // frozen before the fit

        datasets
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

        domain
        {
            coordinate  x1;
            fit         { min 0.019; max 0.959; n 11; }
        }
    }

    metrics
    {
        //  r2InSample: not computed by this operation (it reports chi-square).
        //  NO HELD-OUT METRIC EXISTS.  r2InSample above is exactly that --
        //  in-sample -- and must not be read as an external check.
    }
}

);
`,at=`/*--------------------------------*- Choupo -*--------------------------------*\\
  CURATION DOSSIER -- a scientific work record, NOT runtime property data.

  NOTHING IN THIS FILE IS VISIBLE TO THE SOLVER.  Record resolution looks only
  in <case>/constant/, data/standards/ and data/local/, so a file here is out
  of its reach BY CONSTRUCTION -- not by convention.

  Nothing here has been promoted.  Curation state belongs to the evidence
  process; runtime trust belongs to the numerical record actually admitted
  to data/standards/, and only an explicit human promotion moves one there
  (bin/curate/promote-from-dossier).

  MATURITY IS PER PROPERTY, not per component: the properties below may hold
  different verdicts, and any whole-component summary is DERIVED from them
  rather than stored beside them.

  Regenerated on every run.  Hand edits are lost.
\\*-----------------------------------------------------------------------------*/

component      diisopropylEther;
reviewStatus   unreviewed;

properties
(
{
    property       binaryVLE.P_bubble;
    operation      fit_nrtl;   // type fitParameters
    model          "binary pair, relative bubble-P residual at fixed T";
    verdict        validationRefused;
    refusal        "No independent experimental evidence remains after fitting.";

    fittedParameters
    {
        equilibrium.liquid.activityModel.binaryParameters.diisopropylEther-1Propanol.b_ij  275.693665823;
        equilibrium.liquid.activityModel.binaryParameters.diisopropylEther-1Propanol.b_ji  109.277323331;
    }

    evidence
    {
        partitionFingerprint  "57499844fa366f8f";   // frozen before the fit

        datasets
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

        domain
        {
            coordinate  x1;
            fit         { min 0.051; max 0.9555; n 22; }
        }
    }

    metrics
    {
        //  r2InSample: not computed by this operation (it reports chi-square).
        //  NO HELD-OUT METRIC EXISTS.  r2InSample above is exactly that --
        //  in-sample -- and must not be read as an external check.
    }
}

{
    property       binaryVLE.P_bubble;
    operation      fit_nrtl_start2;   // type fitParameters
    model          "binary pair, relative bubble-P residual at fixed T";
    verdict        validationRefused;
    refusal        "No independent experimental evidence remains after fitting.";

    fittedParameters
    {
        equilibrium.liquid.activityModel.binaryParameters.diisopropylEther-1Propanol.b_ij  275.694008898;
        equilibrium.liquid.activityModel.binaryParameters.diisopropylEther-1Propanol.b_ji  109.276920189;
    }

    evidence
    {
        partitionFingerprint  "57499844fa366f8f";   // frozen before the fit

        datasets
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

        domain
        {
            coordinate  x1;
            fit         { min 0.051; max 0.9555; n 22; }
        }
    }

    metrics
    {
        //  r2InSample: not computed by this operation (it reports chi-square).
        //  NO HELD-OUT METRIC EXISTS.  r2InSample above is exactly that --
        //  in-sample -- and must not be read as an external check.
    }
}

);
`,rt=`/*--------------------------------*- Choupo -*--------------------------------*\\
  CURATION DOSSIER -- a scientific work record, NOT runtime property data.

  NOTHING IN THIS FILE IS VISIBLE TO THE SOLVER.  Record resolution looks only
  in <case>/constant/, data/standards/ and data/local/, so a file here is out
  of its reach BY CONSTRUCTION -- not by convention.

  Nothing here has been promoted.  Curation state belongs to the evidence
  process; runtime trust belongs to the numerical record actually admitted
  to data/standards/, and only an explicit human promotion moves one there
  (bin/curate/promote-from-dossier).

  MATURITY IS PER PROPERTY, not per component: the properties below may hold
  different verdicts, and any whole-component summary is DERIVED from them
  rather than stored beside them.

  Regenerated on every run.  Hand edits are lost.
\\*-----------------------------------------------------------------------------*/

component      1Propanol;
reviewStatus   unreviewed;

properties
(
{
    property       binaryVLE.T_bubble;
    operation      fit_nrtl;   // type fitParameters
    model          "NRTL binary pair, bubble-T residual at fixed P";
    verdict        validationRefused;
    refusal        "No independent experimental evidence remains after fitting.";

    fittedParameters
    {
        equilibrium.liquid.activityModel.binaryParameters.1Propanol-dimethylCarbonate.b_ij  240.637111799;
        equilibrium.liquid.activityModel.binaryParameters.1Propanol-dimethylCarbonate.b_ji  163.876301065;
    }

    evidence
    {
        partitionFingerprint  "27c97b2ac62eb05e";   // frozen before the fit

        datasets
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

        domain
        {
            coordinate  x1;
            fit         { min 0.056; max 0.925; n 84; }
        }
    }

    metrics
    {
        //  r2InSample: not computed by this operation (it reports chi-square).
        //  NO HELD-OUT METRIC EXISTS.  r2InSample above is exactly that --
        //  in-sample -- and must not be read as an external check.
    }
}

{
    property       binaryVLE.T_bubble;
    operation      fit_nrtl_start2;   // type fitParameters
    model          "NRTL binary pair, bubble-T residual at fixed P";
    verdict        validationRefused;
    refusal        "No independent experimental evidence remains after fitting.";

    fittedParameters
    {
        equilibrium.liquid.activityModel.binaryParameters.1Propanol-dimethylCarbonate.b_ij  240.637110733;
        equilibrium.liquid.activityModel.binaryParameters.1Propanol-dimethylCarbonate.b_ji  163.876301991;
    }

    evidence
    {
        partitionFingerprint  "27c97b2ac62eb05e";   // frozen before the fit

        datasets
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

        domain
        {
            coordinate  x1;
            fit         { min 0.056; max 0.925; n 84; }
        }
    }

    metrics
    {
        //  r2InSample: not computed by this operation (it reports chi-square).
        //  NO HELD-OUT METRIC EXISTS.  r2InSample above is exactly that --
        //  in-sample -- and must not be read as an external check.
    }
}

);
`,it=`/*--------------------------------*- Choupo -*--------------------------------*\\
  CURATION DOSSIER -- a scientific work record, NOT runtime property data.

  NOTHING IN THIS FILE IS VISIBLE TO THE SOLVER.  Record resolution looks only
  in <case>/constant/, data/standards/ and data/local/, so a file here is out
  of its reach BY CONSTRUCTION -- not by convention.

  Nothing here has been promoted.  Curation state belongs to the evidence
  process; runtime trust belongs to the numerical record actually admitted
  to data/standards/, and only an explicit human promotion moves one there
  (bin/curate/promote-from-dossier).

  MATURITY IS PER PROPERTY, not per component: the properties below may hold
  different verdicts, and any whole-component summary is DERIVED from them
  rather than stored beside them.

  Regenerated on every run.  Hand edits are lost.
\\*-----------------------------------------------------------------------------*/

component      1Propanol;
reviewStatus   unreviewed;

properties
(
{
    property       binaryVLE.T_bubble;
    operation      fit_nrtl;   // type fitParameters
    model          "NRTL binary pair, bubble-T residual at fixed P";
    verdict        validationRefused;
    refusal        "No independent experimental evidence remains after fitting.";

    fittedParameters
    {
        equilibrium.liquid.activityModel.binaryParameters.1Propanol-propionicAcid.b_ij  -384.772743565;
        equilibrium.liquid.activityModel.binaryParameters.1Propanol-propionicAcid.b_ji  632.433690322;
    }

    evidence
    {
        partitionFingerprint  "b5b29d5ad8bba770";   // frozen before the fit

        datasets
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

        domain
        {
            coordinate  x1;
            fit         { min 0.0025; max 0.9643; n 42; }
        }
    }

    metrics
    {
        //  r2InSample: not computed by this operation (it reports chi-square).
        //  NO HELD-OUT METRIC EXISTS.  r2InSample above is exactly that --
        //  in-sample -- and must not be read as an external check.
    }
}

{
    property       binaryVLE.T_bubble;
    operation      fit_nrtl_start2;   // type fitParameters
    model          "NRTL binary pair, bubble-T residual at fixed P";
    verdict        validationRefused;
    refusal        "No independent experimental evidence remains after fitting.";

    fittedParameters
    {
        equilibrium.liquid.activityModel.binaryParameters.1Propanol-propionicAcid.b_ij  -384.772741114;
        equilibrium.liquid.activityModel.binaryParameters.1Propanol-propionicAcid.b_ji  632.433685627;
    }

    evidence
    {
        partitionFingerprint  "b5b29d5ad8bba770";   // frozen before the fit

        datasets
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

        domain
        {
            coordinate  x1;
            fit         { min 0.0025; max 0.9643; n 42; }
        }
    }

    metrics
    {
        //  r2InSample: not computed by this operation (it reports chi-square).
        //  NO HELD-OUT METRIC EXISTS.  r2InSample above is exactly that --
        //  in-sample -- and must not be read as an external check.
    }
}

);
`,ot=`/*--------------------------------*- Choupo -*--------------------------------*\\
  CURATION DOSSIER -- a scientific work record, NOT runtime property data.

  NOTHING IN THIS FILE IS VISIBLE TO THE SOLVER.  Record resolution looks only
  in <case>/constant/, data/standards/ and data/local/, so a file here is out
  of its reach BY CONSTRUCTION -- not by convention.

  Nothing here has been promoted.  Curation state belongs to the evidence
  process; runtime trust belongs to the numerical record actually admitted
  to data/standards/, and only an explicit human promotion moves one there
  (bin/curate/promote-from-dossier).

  MATURITY IS PER PROPERTY, not per component: the properties below may hold
  different verdicts, and any whole-component summary is DERIVED from them
  rather than stored beside them.

  Regenerated on every run.  Hand edits are lost.
\\*-----------------------------------------------------------------------------*/

component      2Butanol;
reviewStatus   unreviewed;

properties
(
{
    property       binaryVLE.P_bubble;
    operation      fit_nrtl;   // type fitParameters
    model          "binary pair, relative bubble-P residual at fixed T";
    verdict        validationRefused;
    refusal        "No independent experimental evidence remains after fitting.";

    fittedParameters
    {
        equilibrium.liquid.activityModel.binaryParameters.2Butanol-224Trimethylpentane.b_ij  138.976302378;
        equilibrium.liquid.activityModel.binaryParameters.2Butanol-224Trimethylpentane.b_ji  547.648816847;
    }

    evidence
    {
        partitionFingerprint  "1e6fb96ad732b98a";   // frozen before the fit

        datasets
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

        domain
        {
            coordinate  x1;
            fit         { min 0.0494; max 0.9507; n 24; }
        }
    }

    metrics
    {
        //  r2InSample: not computed by this operation (it reports chi-square).
        //  NO HELD-OUT METRIC EXISTS.  r2InSample above is exactly that --
        //  in-sample -- and must not be read as an external check.
    }
}

{
    property       binaryVLE.P_bubble;
    operation      fit_nrtl_start2;   // type fitParameters
    model          "binary pair, relative bubble-P residual at fixed T";
    verdict        validationRefused;
    refusal        "No independent experimental evidence remains after fitting.";

    fittedParameters
    {
        equilibrium.liquid.activityModel.binaryParameters.2Butanol-224Trimethylpentane.b_ij  138.97630641;
        equilibrium.liquid.activityModel.binaryParameters.2Butanol-224Trimethylpentane.b_ji  547.648808594;
    }

    evidence
    {
        partitionFingerprint  "1e6fb96ad732b98a";   // frozen before the fit

        datasets
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

        domain
        {
            coordinate  x1;
            fit         { min 0.0494; max 0.9507; n 24; }
        }
    }

    metrics
    {
        //  r2InSample: not computed by this operation (it reports chi-square).
        //  NO HELD-OUT METRIC EXISTS.  r2InSample above is exactly that --
        //  in-sample -- and must not be read as an external check.
    }
}

);
`,dt=`/*--------------------------------*- Choupo -*--------------------------------*\\
  CURATION DOSSIER -- a scientific work record, NOT runtime property data.

  NOTHING IN THIS FILE IS VISIBLE TO THE SOLVER.  Record resolution looks only
  in <case>/constant/, data/standards/ and data/local/, so a file here is out
  of its reach BY CONSTRUCTION -- not by convention.

  Nothing here has been promoted.  Curation state belongs to the evidence
  process; runtime trust belongs to the numerical record actually admitted
  to data/standards/, and only an explicit human promotion moves one there
  (bin/curate/promote-from-dossier).

  MATURITY IS PER PROPERTY, not per component: the properties below may hold
  different verdicts, and any whole-component summary is DERIVED from them
  rather than stored beside them.

  Regenerated on every run.  Hand edits are lost.
\\*-----------------------------------------------------------------------------*/

component      2Pentanol;
reviewStatus   unreviewed;

properties
(
{
    property       binaryVLE.P_bubble;
    operation      fit_nrtl;   // type fitParameters
    model          "binary pair, relative bubble-P residual at fixed T";
    verdict        validationRefused;
    refusal        "No independent experimental evidence remains after fitting.";

    fittedParameters
    {
        equilibrium.liquid.activityModel.binaryParameters.2Pentanol-224Trimethylpentane.b_ij  117.210572532;
        equilibrium.liquid.activityModel.binaryParameters.2Pentanol-224Trimethylpentane.b_ji  495.625669497;
    }

    evidence
    {
        partitionFingerprint  "7179bc693060cda3";   // frozen before the fit

        datasets
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

        domain
        {
            coordinate  x1;
            fit         { min 0.0499; max 0.9501; n 24; }
        }
    }

    metrics
    {
        //  r2InSample: not computed by this operation (it reports chi-square).
        //  NO HELD-OUT METRIC EXISTS.  r2InSample above is exactly that --
        //  in-sample -- and must not be read as an external check.
    }
}

{
    property       binaryVLE.P_bubble;
    operation      fit_nrtl_start2;   // type fitParameters
    model          "binary pair, relative bubble-P residual at fixed T";
    verdict        validationRefused;
    refusal        "No independent experimental evidence remains after fitting.";

    fittedParameters
    {
        equilibrium.liquid.activityModel.binaryParameters.2Pentanol-224Trimethylpentane.b_ij  117.210569503;
        equilibrium.liquid.activityModel.binaryParameters.2Pentanol-224Trimethylpentane.b_ji  495.625676094;
    }

    evidence
    {
        partitionFingerprint  "7179bc693060cda3";   // frozen before the fit

        datasets
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

        domain
        {
            coordinate  x1;
            fit         { min 0.0499; max 0.9501; n 24; }
        }
    }

    metrics
    {
        //  r2InSample: not computed by this operation (it reports chi-square).
        //  NO HELD-OUT METRIC EXISTS.  r2InSample above is exactly that --
        //  in-sample -- and must not be read as an external check.
    }
}

);
`,st=`/*--------------------------------*- Choupo -*--------------------------------*\\
  CURATION DOSSIER -- a scientific work record, NOT runtime property data.

  NOTHING IN THIS FILE IS VISIBLE TO THE SOLVER.  Record resolution looks only
  in <case>/constant/, data/standards/ and data/local/, so a file here is out
  of its reach BY CONSTRUCTION -- not by convention.

  Nothing here has been promoted.  Curation state belongs to the evidence
  process; runtime trust belongs to the numerical record actually admitted
  to data/standards/, and only an explicit human promotion moves one there
  (bin/curate/promote-from-dossier).

  MATURITY IS PER PROPERTY, not per component: the properties below may hold
  different verdicts, and any whole-component summary is DERIVED from them
  rather than stored beside them.

  Regenerated on every run.  Hand edits are lost.
\\*-----------------------------------------------------------------------------*/

component      diethylDisulfide;
reviewStatus   unreviewed;

properties
(
{
    property       binaryVLE.P_bubble;
    operation      fit_nrtl;   // type fitParameters
    model          "binary pair, relative bubble-P residual at fixed T";
    verdict        validationRefused;
    refusal        "No independent experimental evidence remains after fitting.";

    fittedParameters
    {
        equilibrium.liquid.activityModel.binaryParameters.diethylDisulfide-224Trimethylpentane.b_ij  63.0643355887;
        equilibrium.liquid.activityModel.binaryParameters.diethylDisulfide-224Trimethylpentane.b_ji  171.715360546;
    }

    evidence
    {
        partitionFingerprint  "c806e3a929653bbc";   // frozen before the fit

        datasets
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

        domain
        {
            coordinate  x1;
            fit         { min 0.049; max 0.939; n 8; }
        }
    }

    metrics
    {
        //  r2InSample: not computed by this operation (it reports chi-square).
        //  NO HELD-OUT METRIC EXISTS.  r2InSample above is exactly that --
        //  in-sample -- and must not be read as an external check.
    }
}

{
    property       binaryVLE.P_bubble;
    operation      fit_nrtl_start2;   // type fitParameters
    model          "binary pair, relative bubble-P residual at fixed T";
    verdict        validationRefused;
    refusal        "No independent experimental evidence remains after fitting.";

    fittedParameters
    {
        equilibrium.liquid.activityModel.binaryParameters.diethylDisulfide-224Trimethylpentane.b_ij  63.0643454207;
        equilibrium.liquid.activityModel.binaryParameters.diethylDisulfide-224Trimethylpentane.b_ji  171.715348194;
    }

    evidence
    {
        partitionFingerprint  "c806e3a929653bbc";   // frozen before the fit

        datasets
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

        domain
        {
            coordinate  x1;
            fit         { min 0.049; max 0.939; n 8; }
        }
    }

    metrics
    {
        //  r2InSample: not computed by this operation (it reports chi-square).
        //  NO HELD-OUT METRIC EXISTS.  r2InSample above is exactly that --
        //  in-sample -- and must not be read as an external check.
    }
}

);
`,lt=`/*--------------------------------*- Choupo -*--------------------------------*\\
  CURATION DOSSIER -- a scientific work record, NOT runtime property data.

  NOTHING IN THIS FILE IS VISIBLE TO THE SOLVER.  Record resolution looks only
  in <case>/constant/, data/standards/ and data/local/, so a file here is out
  of its reach BY CONSTRUCTION -- not by convention.

  Nothing here has been promoted.  Curation state belongs to the evidence
  process; runtime trust belongs to the numerical record actually admitted
  to data/standards/, and only an explicit human promotion moves one there
  (bin/curate/promote-from-dossier).

  MATURITY IS PER PROPERTY, not per component: the properties below may hold
  different verdicts, and any whole-component summary is DERIVED from them
  rather than stored beside them.

  Regenerated on every run.  Hand edits are lost.
\\*-----------------------------------------------------------------------------*/

component      diisopropylEther;
reviewStatus   unreviewed;

properties
(
{
    property       binaryVLE.T_bubble;
    operation      fit_nrtl;   // type fitParameters
    model          "NRTL binary pair, bubble-T residual at fixed P";
    verdict        validationRefused;
    refusal        "No independent experimental evidence remains after fitting.";

    fittedParameters
    {
        equilibrium.liquid.activityModel.binaryParameters.diisopropylEther-224Trimethylpentane.b_ij  289.900668951;
        equilibrium.liquid.activityModel.binaryParameters.diisopropylEther-224Trimethylpentane.b_ji  -186.261939889;
    }

    evidence
    {
        partitionFingerprint  "299bf31cc54ebeca";   // frozen before the fit

        datasets
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

        domain
        {
            coordinate  x1;
            fit         { min 0.084; max 0.95; n 28; }
        }
    }

    metrics
    {
        //  r2InSample: not computed by this operation (it reports chi-square).
        //  NO HELD-OUT METRIC EXISTS.  r2InSample above is exactly that --
        //  in-sample -- and must not be read as an external check.
    }
}

{
    property       binaryVLE.T_bubble;
    operation      fit_nrtl_start2;   // type fitParameters
    model          "NRTL binary pair, bubble-T residual at fixed P";
    verdict        validationRefused;
    refusal        "No independent experimental evidence remains after fitting.";

    fittedParameters
    {
        equilibrium.liquid.activityModel.binaryParameters.diisopropylEther-224Trimethylpentane.b_ij  289.900672534;
        equilibrium.liquid.activityModel.binaryParameters.diisopropylEther-224Trimethylpentane.b_ji  -186.261942377;
    }

    evidence
    {
        partitionFingerprint  "299bf31cc54ebeca";   // frozen before the fit

        datasets
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

        domain
        {
            coordinate  x1;
            fit         { min 0.084; max 0.95; n 28; }
        }
    }

    metrics
    {
        //  r2InSample: not computed by this operation (it reports chi-square).
        //  NO HELD-OUT METRIC EXISTS.  r2InSample above is exactly that --
        //  in-sample -- and must not be read as an external check.
    }
}

);
`,ct=`/*--------------------------------*- Choupo -*--------------------------------*\\
  CURATION DOSSIER -- a scientific work record, NOT runtime property data.

  NOTHING IN THIS FILE IS VISIBLE TO THE SOLVER.  Record resolution looks only
  in <case>/constant/, data/standards/ and data/local/, so a file here is out
  of its reach BY CONSTRUCTION -- not by convention.

  Nothing here has been promoted.  Curation state belongs to the evidence
  process; runtime trust belongs to the numerical record actually admitted
  to data/standards/, and only an explicit human promotion moves one there
  (bin/curate/promote-from-dossier).

  MATURITY IS PER PROPERTY, not per component: the properties below may hold
  different verdicts, and any whole-component summary is DERIVED from them
  rather than stored beside them.

  Regenerated on every run.  Hand edits are lost.
\\*-----------------------------------------------------------------------------*/

component      dimethylDisulfide;
reviewStatus   unreviewed;

properties
(
{
    property       binaryVLE.P_bubble;
    operation      fit_nrtl;   // type fitParameters
    model          "binary pair, relative bubble-P residual at fixed T";
    verdict        validationRefused;
    refusal        "No independent experimental evidence remains after fitting.";

    fittedParameters
    {
        equilibrium.liquid.activityModel.binaryParameters.dimethylDisulfide-224Trimethylpentane.b_ij  334.621437174;
        equilibrium.liquid.activityModel.binaryParameters.dimethylDisulfide-224Trimethylpentane.b_ji  6.97415427389;
    }

    evidence
    {
        partitionFingerprint  "2f41fb0cfd404c8a";   // frozen before the fit

        datasets
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

        domain
        {
            coordinate  x1;
            fit         { min 0.082; max 0.947; n 9; }
        }
    }

    metrics
    {
        //  r2InSample: not computed by this operation (it reports chi-square).
        //  NO HELD-OUT METRIC EXISTS.  r2InSample above is exactly that --
        //  in-sample -- and must not be read as an external check.
    }
}

{
    property       binaryVLE.P_bubble;
    operation      fit_nrtl_start2;   // type fitParameters
    model          "binary pair, relative bubble-P residual at fixed T";
    verdict        validationRefused;
    refusal        "No independent experimental evidence remains after fitting.";

    fittedParameters
    {
        equilibrium.liquid.activityModel.binaryParameters.dimethylDisulfide-224Trimethylpentane.b_ij  334.621437209;
        equilibrium.liquid.activityModel.binaryParameters.dimethylDisulfide-224Trimethylpentane.b_ji  6.97415430291;
    }

    evidence
    {
        partitionFingerprint  "2f41fb0cfd404c8a";   // frozen before the fit

        datasets
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

        domain
        {
            coordinate  x1;
            fit         { min 0.082; max 0.947; n 9; }
        }
    }

    metrics
    {
        //  r2InSample: not computed by this operation (it reports chi-square).
        //  NO HELD-OUT METRIC EXISTS.  r2InSample above is exactly that --
        //  in-sample -- and must not be read as an external check.
    }
}

);
`,mt=`/*--------------------------------*- Choupo -*--------------------------------*\\
  CURATION DOSSIER -- a scientific work record, NOT runtime property data.

  NOTHING IN THIS FILE IS VISIBLE TO THE SOLVER.  Record resolution looks only
  in <case>/constant/, data/standards/ and data/local/, so a file here is out
  of its reach BY CONSTRUCTION -- not by convention.

  Nothing here has been promoted.  Curation state belongs to the evidence
  process; runtime trust belongs to the numerical record actually admitted
  to data/standards/, and only an explicit human promotion moves one there
  (bin/curate/promote-from-dossier).

  MATURITY IS PER PROPERTY, not per component: the properties below may hold
  different verdicts, and any whole-component summary is DERIVED from them
  rather than stored beside them.

  Regenerated on every run.  Hand edits are lost.
\\*-----------------------------------------------------------------------------*/

component      ethanol;
reviewStatus   unreviewed;

properties
(
{
    property       binaryVLE.T_bubble;
    operation      fit_nrtl;   // type fitParameters
    model          "NRTL binary pair, bubble-T residual at fixed P";
    verdict        validated;

    fittedParameters
    {
        equilibrium.liquid.activityModel.binaryParameters.ethanol-224Trimethylpentane.b_ij  429.365695745;
        equilibrium.liquid.activityModel.binaryParameters.ethanol-224Trimethylpentane.b_ji  493.205168943;
    }

    evidence
    {
        partitionFingerprint  "579468a47c7620f9";   // frozen before the fit

        datasets
        (
        {
            role      fit;
            dataset   "constant/archiveExtracts/ethanol-224Trimethylpentane-bubble-je300847v.dat";
            doi       "10.1021/je300847v";
            sha256    "48cf0d1f1170b2e23d70db079156fd5843f03041852ed9db0fcb3b276e365ee3";
            provenance measured;
            archiveFile "je300847v.xml";
            system    "ethanol + 224Trimethylpentane";
            pressure  "101300.000000 Pa";
        }
        {
            role      validation;
            dataset   "constant/archiveExtracts/ethanol-224Trimethylpentane-bubble-j.fluid.2005.01.007.dat";
            doi       "10.1016/j.fluid.2005.01.007";
            sha256    "f1acfe9dcd9476d848a167c0a3fe983e5b719138dd99807652ad914b3f29eb62";
            provenance measured;
            archiveFile "j.fluid.2005.01.007.xml";
            system    "ethanol + 224Trimethylpentane";
            pressure  "101320.000000 Pa";
        }
        );

        domain
        {
            coordinate  x1;
            fit         { min 0.1406; max 0.9575; n 22; }
            validation  { min 0.024; max 0.954; n 19; }
        }
    }

    metrics
    {
        //  r2InSample: not computed by this operation (it reports chi-square).
        //  rmsHeldOut: not computed by this operation (see aadHeldOutPct).
        aadHeldOutPct     0.113232264022;
        acceptanceMaxAADPct 0.57;   // DECLARED BEFORE the fit; part of the fingerprint
        acceptanceOrigin  "declared before the fit by bin/choupo-curate, the ONE rule of C16: the held-out set's largest stated expanded uncertainty (U95 = 1.93 K) plus the catalogue vapour-pressure model's own error at that set's pure endpoints (224Trimethylpentane -0.012 K, ethanol +0.012 K; measured with no pair involved), as a percentage of the held-out mean T (346.81 K) = 0.5600 %, rounded UP to two significant figures";
    }
}

{
    property       binaryVLE.T_bubble;
    operation      fit_nrtl_start2;   // type fitParameters
    model          "NRTL binary pair, bubble-T residual at fixed P";
    verdict        validated;

    fittedParameters
    {
        equilibrium.liquid.activityModel.binaryParameters.ethanol-224Trimethylpentane.b_ij  429.360794812;
        equilibrium.liquid.activityModel.binaryParameters.ethanol-224Trimethylpentane.b_ji  493.20973824;
    }

    evidence
    {
        partitionFingerprint  "579468a47c7620f9";   // frozen before the fit

        datasets
        (
        {
            role      fit;
            dataset   "constant/archiveExtracts/ethanol-224Trimethylpentane-bubble-je300847v.dat";
            doi       "10.1021/je300847v";
            sha256    "48cf0d1f1170b2e23d70db079156fd5843f03041852ed9db0fcb3b276e365ee3";
            provenance measured;
            archiveFile "je300847v.xml";
            system    "ethanol + 224Trimethylpentane";
            pressure  "101300.000000 Pa";
        }
        {
            role      validation;
            dataset   "constant/archiveExtracts/ethanol-224Trimethylpentane-bubble-j.fluid.2005.01.007.dat";
            doi       "10.1016/j.fluid.2005.01.007";
            sha256    "f1acfe9dcd9476d848a167c0a3fe983e5b719138dd99807652ad914b3f29eb62";
            provenance measured;
            archiveFile "j.fluid.2005.01.007.xml";
            system    "ethanol + 224Trimethylpentane";
            pressure  "101320.000000 Pa";
        }
        );

        domain
        {
            coordinate  x1;
            fit         { min 0.1406; max 0.9575; n 22; }
            validation  { min 0.024; max 0.954; n 19; }
        }
    }

    metrics
    {
        //  r2InSample: not computed by this operation (it reports chi-square).
        //  rmsHeldOut: not computed by this operation (see aadHeldOutPct).
        aadHeldOutPct     0.113231720006;
        acceptanceMaxAADPct 0.57;   // DECLARED BEFORE the fit; part of the fingerprint
        acceptanceOrigin  "declared before the fit by bin/choupo-curate, the ONE rule of C16: the held-out set's largest stated expanded uncertainty (U95 = 1.93 K) plus the catalogue vapour-pressure model's own error at that set's pure endpoints (224Trimethylpentane -0.012 K, ethanol +0.012 K; measured with no pair involved), as a percentage of the held-out mean T (346.81 K) = 0.5600 %, rounded UP to two significant figures";
    }
}

);
`,bt=`/*--------------------------------*- Choupo -*--------------------------------*\\
  CURATION DOSSIER -- a scientific work record, NOT runtime property data.

  NOTHING IN THIS FILE IS VISIBLE TO THE SOLVER.  Record resolution looks only
  in <case>/constant/, data/standards/ and data/local/, so a file here is out
  of its reach BY CONSTRUCTION -- not by convention.

  Nothing here has been promoted.  Curation state belongs to the evidence
  process; runtime trust belongs to the numerical record actually admitted
  to data/standards/, and only an explicit human promotion moves one there
  (bin/curate/promote-from-dossier).

  MATURITY IS PER PROPERTY, not per component: the properties below may hold
  different verdicts, and any whole-component summary is DERIVED from them
  rather than stored beside them.

  Regenerated on every run.  Hand edits are lost.
\\*-----------------------------------------------------------------------------*/

component      ethanol;
reviewStatus   unreviewed;

properties
(
{
    property       binaryVLE.T_bubble;
    operation      fit_nrtl;   // type fitParameters
    model          "NRTL binary pair, bubble-T residual at fixed P";
    verdict        validationRefused;
    refusal        "No independent experimental evidence remains after fitting.";

    fittedParameters
    {
        equilibrium.liquid.activityModel.binaryParameters.ethanol-224Trimethylpentane.b_ij  358.291886326;
        equilibrium.liquid.activityModel.binaryParameters.ethanol-224Trimethylpentane.b_ji  555.844174284;
    }

    evidence
    {
        partitionFingerprint  "4bfcfba355c16604";   // frozen before the fit

        datasets
        (
        {
            role      fit;
            dataset   "constant/archiveExtracts/ethanol-224Trimethylpentane-bubble-je300847v.dat";
            doi       "10.1021/je300847v";
            sha256    "48cf0d1f1170b2e23d70db079156fd5843f03041852ed9db0fcb3b276e365ee3";
            provenance measured;
            archiveFile "je300847v.xml";
            system    "ethanol + 224Trimethylpentane";
            pressure  "101300.000000 Pa";
        }
        {
            role      fit;
            dataset   "constant/archiveExtracts/ethanol-224Trimethylpentane-bubble-acs.jced.8b00680.dat";
            doi       "10.1021/acs.jced.8b00680";
            sha256    "24e5d0a547f0ece199cef88e38a33059d446a79066ec16e532dde61242113b94";
            provenance measured;
            archiveFile "acs.jced.8b00680.xml";
            system    "ethanol + 224Trimethylpentane";
            pressure  "101300.000000 Pa";
        }
        {
            role      fit;
            dataset   "constant/archiveExtracts/ethanol-224Trimethylpentane-bubble-j.fluid.2005.01.007.dat";
            doi       "10.1016/j.fluid.2005.01.007";
            sha256    "f1acfe9dcd9476d848a167c0a3fe983e5b719138dd99807652ad914b3f29eb62";
            provenance measured;
            archiveFile "j.fluid.2005.01.007.xml";
            system    "ethanol + 224Trimethylpentane";
            pressure  "101320.000000 Pa";
        }
        {
            role      fit;
            dataset   "constant/archiveExtracts/ethanol-224Trimethylpentane-bubble-j.fluid.2007.06.005.dat";
            doi       "10.1016/j.fluid.2007.06.005";
            sha256    "cc1f8832b57e5d44a79b79cda3c9425b77c19b96e2e6f4f9996363ea7de6f6fa";
            provenance measured;
            archiveFile "j.fluid.2007.06.005.xml";
            system    "ethanol + 224Trimethylpentane";
            pressure  "101300.000000 Pa";
        }
        {
            role      fit;
            dataset   "constant/archiveExtracts/ethanol-224Trimethylpentane-bubble-j.jct.2005.04.006.dat";
            doi       "10.1016/j.jct.2005.04.006";
            sha256    "e157abbd4d346d9ee5e79799e72fb16000d461970ab65ba327666624870901bc";
            provenance measured;
            archiveFile "j.jct.2005.04.006.xml";
            system    "ethanol + 224Trimethylpentane";
            pressure  "95800.000000 Pa";
        }
        );

        domain
        {
            coordinate  x1;
            fit         { min 0.024; max 0.996; n 85; }
        }
    }

    metrics
    {
        //  r2InSample: not computed by this operation (it reports chi-square).
        //  NO HELD-OUT METRIC EXISTS.  r2InSample above is exactly that --
        //  in-sample -- and must not be read as an external check.
    }
}

{
    property       binaryVLE.T_bubble;
    operation      fit_nrtl_start2;   // type fitParameters
    model          "NRTL binary pair, bubble-T residual at fixed P";
    verdict        validationRefused;
    refusal        "No independent experimental evidence remains after fitting.";

    fittedParameters
    {
        equilibrium.liquid.activityModel.binaryParameters.ethanol-224Trimethylpentane.b_ij  358.291886109;
        equilibrium.liquid.activityModel.binaryParameters.ethanol-224Trimethylpentane.b_ji  555.844174597;
    }

    evidence
    {
        partitionFingerprint  "4bfcfba355c16604";   // frozen before the fit

        datasets
        (
        {
            role      fit;
            dataset   "constant/archiveExtracts/ethanol-224Trimethylpentane-bubble-je300847v.dat";
            doi       "10.1021/je300847v";
            sha256    "48cf0d1f1170b2e23d70db079156fd5843f03041852ed9db0fcb3b276e365ee3";
            provenance measured;
            archiveFile "je300847v.xml";
            system    "ethanol + 224Trimethylpentane";
            pressure  "101300.000000 Pa";
        }
        {
            role      fit;
            dataset   "constant/archiveExtracts/ethanol-224Trimethylpentane-bubble-acs.jced.8b00680.dat";
            doi       "10.1021/acs.jced.8b00680";
            sha256    "24e5d0a547f0ece199cef88e38a33059d446a79066ec16e532dde61242113b94";
            provenance measured;
            archiveFile "acs.jced.8b00680.xml";
            system    "ethanol + 224Trimethylpentane";
            pressure  "101300.000000 Pa";
        }
        {
            role      fit;
            dataset   "constant/archiveExtracts/ethanol-224Trimethylpentane-bubble-j.fluid.2005.01.007.dat";
            doi       "10.1016/j.fluid.2005.01.007";
            sha256    "f1acfe9dcd9476d848a167c0a3fe983e5b719138dd99807652ad914b3f29eb62";
            provenance measured;
            archiveFile "j.fluid.2005.01.007.xml";
            system    "ethanol + 224Trimethylpentane";
            pressure  "101320.000000 Pa";
        }
        {
            role      fit;
            dataset   "constant/archiveExtracts/ethanol-224Trimethylpentane-bubble-j.fluid.2007.06.005.dat";
            doi       "10.1016/j.fluid.2007.06.005";
            sha256    "cc1f8832b57e5d44a79b79cda3c9425b77c19b96e2e6f4f9996363ea7de6f6fa";
            provenance measured;
            archiveFile "j.fluid.2007.06.005.xml";
            system    "ethanol + 224Trimethylpentane";
            pressure  "101300.000000 Pa";
        }
        {
            role      fit;
            dataset   "constant/archiveExtracts/ethanol-224Trimethylpentane-bubble-j.jct.2005.04.006.dat";
            doi       "10.1016/j.jct.2005.04.006";
            sha256    "e157abbd4d346d9ee5e79799e72fb16000d461970ab65ba327666624870901bc";
            provenance measured;
            archiveFile "j.jct.2005.04.006.xml";
            system    "ethanol + 224Trimethylpentane";
            pressure  "95800.000000 Pa";
        }
        );

        domain
        {
            coordinate  x1;
            fit         { min 0.024; max 0.996; n 85; }
        }
    }

    metrics
    {
        //  r2InSample: not computed by this operation (it reports chi-square).
        //  NO HELD-OUT METRIC EXISTS.  r2InSample above is exactly that --
        //  in-sample -- and must not be read as an external check.
    }
}

);
`,ut=`/*--------------------------------*- Choupo -*--------------------------------*\\
  CURATION DOSSIER -- a scientific work record, NOT runtime property data.

  NOTHING IN THIS FILE IS VISIBLE TO THE SOLVER.  Record resolution looks only
  in <case>/constant/, data/standards/ and data/local/, so a file here is out
  of its reach BY CONSTRUCTION -- not by convention.

  Nothing here has been promoted.  Curation state belongs to the evidence
  process; runtime trust belongs to the numerical record actually admitted
  to data/standards/, and only an explicit human promotion moves one there
  (bin/curate/promote-from-dossier).

  MATURITY IS PER PROPERTY, not per component: the properties below may hold
  different verdicts, and any whole-component summary is DERIVED from them
  rather than stored beside them.

  Regenerated on every run.  Hand edits are lost.
\\*-----------------------------------------------------------------------------*/

component      isopropanol;
reviewStatus   unreviewed;

properties
(
{
    property       binaryVLE.T_bubble;
    operation      fit_nrtl;   // type fitParameters
    model          "NRTL binary pair, bubble-T residual at fixed P";
    verdict        validationRefused;
    refusal        "No independent experimental evidence remains after fitting.";

    fittedParameters
    {
        equilibrium.liquid.activityModel.binaryParameters.isopropanol-224Trimethylpentane.b_ij  346.251564258;
        equilibrium.liquid.activityModel.binaryParameters.isopropanol-224Trimethylpentane.b_ji  347.017067326;
    }

    evidence
    {
        partitionFingerprint  "5f9ed70bb2e90c6e";   // frozen before the fit

        datasets
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

        domain
        {
            coordinate  x1;
            fit         { min 0.053; max 0.953; n 38; }
        }
    }

    metrics
    {
        //  r2InSample: not computed by this operation (it reports chi-square).
        //  NO HELD-OUT METRIC EXISTS.  r2InSample above is exactly that --
        //  in-sample -- and must not be read as an external check.
    }
}

{
    property       binaryVLE.T_bubble;
    operation      fit_nrtl_start2;   // type fitParameters
    model          "NRTL binary pair, bubble-T residual at fixed P";
    verdict        validationRefused;
    refusal        "No independent experimental evidence remains after fitting.";

    fittedParameters
    {
        equilibrium.liquid.activityModel.binaryParameters.isopropanol-224Trimethylpentane.b_ij  346.251564225;
        equilibrium.liquid.activityModel.binaryParameters.isopropanol-224Trimethylpentane.b_ji  347.017067298;
    }

    evidence
    {
        partitionFingerprint  "5f9ed70bb2e90c6e";   // frozen before the fit

        datasets
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

        domain
        {
            coordinate  x1;
            fit         { min 0.053; max 0.953; n 38; }
        }
    }

    metrics
    {
        //  r2InSample: not computed by this operation (it reports chi-square).
        //  NO HELD-OUT METRIC EXISTS.  r2InSample above is exactly that --
        //  in-sample -- and must not be read as an external check.
    }
}

);
`,pt=`/*--------------------------------*- Choupo -*--------------------------------*\\
  CURATION DOSSIER -- a scientific work record, NOT runtime property data.

  NOTHING IN THIS FILE IS VISIBLE TO THE SOLVER.  Record resolution looks only
  in <case>/constant/, data/standards/ and data/local/, so a file here is out
  of its reach BY CONSTRUCTION -- not by convention.

  Nothing here has been promoted.  Curation state belongs to the evidence
  process; runtime trust belongs to the numerical record actually admitted
  to data/standards/, and only an explicit human promotion moves one there
  (bin/curate/promote-from-dossier).

  MATURITY IS PER PROPERTY, not per component: the properties below may hold
  different verdicts, and any whole-component summary is DERIVED from them
  rather than stored beside them.

  Regenerated on every run.  Hand edits are lost.
\\*-----------------------------------------------------------------------------*/

component      methylTertPentylEther;
reviewStatus   unreviewed;

properties
(
{
    property       binaryVLE.P_bubble;
    operation      fit_nrtl;   // type fitParameters
    model          "binary pair, relative bubble-P residual at fixed T";
    verdict        validationRefused;
    refusal        "No independent experimental evidence remains after fitting.";

    fittedParameters
    {
        equilibrium.liquid.activityModel.binaryParameters.methylTertPentylEther-224Trimethylpentane.b_ij  575.653394442;
        equilibrium.liquid.activityModel.binaryParameters.methylTertPentylEther-224Trimethylpentane.b_ji  -317.426326005;
    }

    evidence
    {
        partitionFingerprint  "5042acc985f7997b";   // frozen before the fit

        datasets
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

        domain
        {
            coordinate  x1;
            fit         { min 0.0203; max 0.9794; n 22; }
        }
    }

    metrics
    {
        //  r2InSample: not computed by this operation (it reports chi-square).
        //  NO HELD-OUT METRIC EXISTS.  r2InSample above is exactly that --
        //  in-sample -- and must not be read as an external check.
    }
}

{
    property       binaryVLE.P_bubble;
    operation      fit_nrtl_start2;   // type fitParameters
    model          "binary pair, relative bubble-P residual at fixed T";
    verdict        validationRefused;
    refusal        "No independent experimental evidence remains after fitting.";

    fittedParameters
    {
        equilibrium.liquid.activityModel.binaryParameters.methylTertPentylEther-224Trimethylpentane.b_ij  575.653401081;
        equilibrium.liquid.activityModel.binaryParameters.methylTertPentylEther-224Trimethylpentane.b_ji  -317.426329415;
    }

    evidence
    {
        partitionFingerprint  "5042acc985f7997b";   // frozen before the fit

        datasets
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

        domain
        {
            coordinate  x1;
            fit         { min 0.0203; max 0.9794; n 22; }
        }
    }

    metrics
    {
        //  r2InSample: not computed by this operation (it reports chi-square).
        //  NO HELD-OUT METRIC EXISTS.  r2InSample above is exactly that --
        //  in-sample -- and must not be read as an external check.
    }
}

);
`,ft=`/*--------------------------------*- Choupo -*--------------------------------*\\
  CURATION DOSSIER -- a scientific work record, NOT runtime property data.

  NOTHING IN THIS FILE IS VISIBLE TO THE SOLVER.  Record resolution looks only
  in <case>/constant/, data/standards/ and data/local/, so a file here is out
  of its reach BY CONSTRUCTION -- not by convention.

  Nothing here has been promoted.  Curation state belongs to the evidence
  process; runtime trust belongs to the numerical record actually admitted
  to data/standards/, and only an explicit human promotion moves one there
  (bin/curate/promote-from-dossier).

  MATURITY IS PER PROPERTY, not per component: the properties below may hold
  different verdicts, and any whole-component summary is DERIVED from them
  rather than stored beside them.

  Regenerated on every run.  Hand edits are lost.
\\*-----------------------------------------------------------------------------*/

component      224Trimethylpentane;
reviewStatus   unreviewed;

properties
(
{
    property       binaryVLE.P_bubble;
    operation      fit_nrtl;   // type fitParameters
    model          "binary pair, relative bubble-P residual at fixed T";
    verdict        validationRefused;
    refusal        "No independent experimental evidence remains after fitting.";

    fittedParameters
    {
        equilibrium.liquid.activityModel.binaryParameters.224Trimethylpentane-nHeptane.b_ij  58.9228275339;
        equilibrium.liquid.activityModel.binaryParameters.224Trimethylpentane-nHeptane.b_ji  -60.6586366934;
    }

    evidence
    {
        partitionFingerprint  "3dc4e6410383a090";   // frozen before the fit

        datasets
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

        domain
        {
            coordinate  x1;
            fit         { min 0.0496; max 0.9508; n 22; }
        }
    }

    metrics
    {
        //  r2InSample: not computed by this operation (it reports chi-square).
        //  NO HELD-OUT METRIC EXISTS.  r2InSample above is exactly that --
        //  in-sample -- and must not be read as an external check.
    }
}

{
    property       binaryVLE.P_bubble;
    operation      fit_nrtl_start2;   // type fitParameters
    model          "binary pair, relative bubble-P residual at fixed T";
    verdict        validationRefused;
    refusal        "No independent experimental evidence remains after fitting.";

    fittedParameters
    {
        equilibrium.liquid.activityModel.binaryParameters.224Trimethylpentane-nHeptane.b_ij  58.8902507549;
        equilibrium.liquid.activityModel.binaryParameters.224Trimethylpentane-nHeptane.b_ji  -60.6295844128;
    }

    evidence
    {
        partitionFingerprint  "3dc4e6410383a090";   // frozen before the fit

        datasets
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

        domain
        {
            coordinate  x1;
            fit         { min 0.0496; max 0.9508; n 22; }
        }
    }

    metrics
    {
        //  r2InSample: not computed by this operation (it reports chi-square).
        //  NO HELD-OUT METRIC EXISTS.  r2InSample above is exactly that --
        //  in-sample -- and must not be read as an external check.
    }
}

);
`,ht=`/*--------------------------------*- Choupo -*--------------------------------*\\
  CURATION DOSSIER -- a scientific work record, NOT runtime property data.

  NOTHING IN THIS FILE IS VISIBLE TO THE SOLVER.  Record resolution looks only
  in <case>/constant/, data/standards/ and data/local/, so a file here is out
  of its reach BY CONSTRUCTION -- not by convention.

  Nothing here has been promoted.  Curation state belongs to the evidence
  process; runtime trust belongs to the numerical record actually admitted
  to data/standards/, and only an explicit human promotion moves one there
  (bin/curate/promote-from-dossier).

  MATURITY IS PER PROPERTY, not per component: the properties below may hold
  different verdicts, and any whole-component summary is DERIVED from them
  rather than stored beside them.

  Regenerated on every run.  Hand edits are lost.
\\*-----------------------------------------------------------------------------*/

component      benzene;
reviewStatus   unreviewed;

properties
(
{
    property       binaryVLE.P_bubble;
    operation      fit_nrtl;   // type fitParameters
    model          "binary pair, relative bubble-P residual at fixed T";
    verdict        validationRefused;
    refusal        "No independent experimental evidence remains after fitting.";

    fittedParameters
    {
        equilibrium.liquid.activityModel.binaryParameters.benzene-2Butanol.b_ij  487.203801299;
        equilibrium.liquid.activityModel.binaryParameters.benzene-2Butanol.b_ji  43.5752032876;
    }

    evidence
    {
        partitionFingerprint  "9543ce1adc59844e";   // frozen before the fit

        datasets
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

        domain
        {
            coordinate  x1;
            fit         { min 0.0594; max 0.9521; n 24; }
        }
    }

    metrics
    {
        //  r2InSample: not computed by this operation (it reports chi-square).
        //  NO HELD-OUT METRIC EXISTS.  r2InSample above is exactly that --
        //  in-sample -- and must not be read as an external check.
    }
}

{
    property       binaryVLE.P_bubble;
    operation      fit_nrtl_start2;   // type fitParameters
    model          "binary pair, relative bubble-P residual at fixed T";
    verdict        validationRefused;
    refusal        "No independent experimental evidence remains after fitting.";

    fittedParameters
    {
        equilibrium.liquid.activityModel.binaryParameters.benzene-2Butanol.b_ij  487.203797475;
        equilibrium.liquid.activityModel.binaryParameters.benzene-2Butanol.b_ji  43.5752053669;
    }

    evidence
    {
        partitionFingerprint  "9543ce1adc59844e";   // frozen before the fit

        datasets
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

        domain
        {
            coordinate  x1;
            fit         { min 0.0594; max 0.9521; n 24; }
        }
    }

    metrics
    {
        //  r2InSample: not computed by this operation (it reports chi-square).
        //  NO HELD-OUT METRIC EXISTS.  r2InSample above is exactly that --
        //  in-sample -- and must not be read as an external check.
    }
}

);
`,yt=`/*--------------------------------*- Choupo -*--------------------------------*\\
  CURATION DOSSIER -- a scientific work record, NOT runtime property data.

  NOTHING IN THIS FILE IS VISIBLE TO THE SOLVER.  Record resolution looks only
  in <case>/constant/, data/standards/ and data/local/, so a file here is out
  of its reach BY CONSTRUCTION -- not by convention.

  Nothing here has been promoted.  Curation state belongs to the evidence
  process; runtime trust belongs to the numerical record actually admitted
  to data/standards/, and only an explicit human promotion moves one there
  (bin/curate/promote-from-dossier).

  MATURITY IS PER PROPERTY, not per component: the properties below may hold
  different verdicts, and any whole-component summary is DERIVED from them
  rather than stored beside them.

  Regenerated on every run.  Hand edits are lost.
\\*-----------------------------------------------------------------------------*/

component      2Butanol;
reviewStatus   unreviewed;

properties
(
{
    property       binaryVLE.P_bubble;
    operation      fit_nrtl;   // type fitParameters
    model          "binary pair, relative bubble-P residual at fixed T";
    verdict        validationRefused;
    refusal        "No independent experimental evidence remains after fitting.";

    fittedParameters
    {
        equilibrium.liquid.activityModel.binaryParameters.2Butanol-cyclohexane.b_ij  58.5764856098;
        equilibrium.liquid.activityModel.binaryParameters.2Butanol-cyclohexane.b_ji  628.584283886;
    }

    evidence
    {
        partitionFingerprint  "5dcd2f1d7a7393b2";   // frozen before the fit

        datasets
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

        domain
        {
            coordinate  x1;
            fit         { min 0.0498; max 0.9497; n 24; }
        }
    }

    metrics
    {
        //  r2InSample: not computed by this operation (it reports chi-square).
        //  NO HELD-OUT METRIC EXISTS.  r2InSample above is exactly that --
        //  in-sample -- and must not be read as an external check.
    }
}

{
    property       binaryVLE.P_bubble;
    operation      fit_nrtl_start2;   // type fitParameters
    model          "binary pair, relative bubble-P residual at fixed T";
    verdict        validationRefused;
    refusal        "No independent experimental evidence remains after fitting.";

    fittedParameters
    {
        equilibrium.liquid.activityModel.binaryParameters.2Butanol-cyclohexane.b_ij  58.5764840589;
        equilibrium.liquid.activityModel.binaryParameters.2Butanol-cyclohexane.b_ji  628.58428643;
    }

    evidence
    {
        partitionFingerprint  "5dcd2f1d7a7393b2";   // frozen before the fit

        datasets
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

        domain
        {
            coordinate  x1;
            fit         { min 0.0498; max 0.9497; n 24; }
        }
    }

    metrics
    {
        //  r2InSample: not computed by this operation (it reports chi-square).
        //  NO HELD-OUT METRIC EXISTS.  r2InSample above is exactly that --
        //  in-sample -- and must not be read as an external check.
    }
}

);
`,vt=`/*--------------------------------*- Choupo -*--------------------------------*\\
  CURATION DOSSIER -- a scientific work record, NOT runtime property data.

  NOTHING IN THIS FILE IS VISIBLE TO THE SOLVER.  Record resolution looks only
  in <case>/constant/, data/standards/ and data/local/, so a file here is out
  of its reach BY CONSTRUCTION -- not by convention.

  Nothing here has been promoted.  Curation state belongs to the evidence
  process; runtime trust belongs to the numerical record actually admitted
  to data/standards/, and only an explicit human promotion moves one there
  (bin/curate/promote-from-dossier).

  MATURITY IS PER PROPERTY, not per component: the properties below may hold
  different verdicts, and any whole-component summary is DERIVED from them
  rather than stored beside them.

  Regenerated on every run.  Hand edits are lost.
\\*-----------------------------------------------------------------------------*/

component      diisopropylEther;
reviewStatus   unreviewed;

properties
(
{
    property       binaryVLE.P_bubble;
    operation      fit_nrtl;   // type fitParameters
    model          "binary pair, relative bubble-P residual at fixed T";
    verdict        validationRefused;
    refusal        "No independent experimental evidence remains after fitting.";

    fittedParameters
    {
        equilibrium.liquid.activityModel.binaryParameters.diisopropylEther-2Butanol.b_ij  283.467933492;
        equilibrium.liquid.activityModel.binaryParameters.diisopropylEther-2Butanol.b_ji  46.98716976;
    }

    evidence
    {
        partitionFingerprint  "2daec1890d865a8e";   // frozen before the fit

        datasets
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

        domain
        {
            coordinate  x1;
            fit         { min 0.0558; max 0.9531; n 26; }
        }
    }

    metrics
    {
        //  r2InSample: not computed by this operation (it reports chi-square).
        //  NO HELD-OUT METRIC EXISTS.  r2InSample above is exactly that --
        //  in-sample -- and must not be read as an external check.
    }
}

{
    property       binaryVLE.P_bubble;
    operation      fit_nrtl_start2;   // type fitParameters
    model          "binary pair, relative bubble-P residual at fixed T";
    verdict        validationRefused;
    refusal        "No independent experimental evidence remains after fitting.";

    fittedParameters
    {
        equilibrium.liquid.activityModel.binaryParameters.diisopropylEther-2Butanol.b_ij  283.467945658;
        equilibrium.liquid.activityModel.binaryParameters.diisopropylEther-2Butanol.b_ji  46.9871612834;
    }

    evidence
    {
        partitionFingerprint  "2daec1890d865a8e";   // frozen before the fit

        datasets
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

        domain
        {
            coordinate  x1;
            fit         { min 0.0558; max 0.9531; n 26; }
        }
    }

    metrics
    {
        //  r2InSample: not computed by this operation (it reports chi-square).
        //  NO HELD-OUT METRIC EXISTS.  r2InSample above is exactly that --
        //  in-sample -- and must not be read as an external check.
    }
}

);
`,Et=`/*--------------------------------*- Choupo -*--------------------------------*\\
  CURATION DOSSIER -- a scientific work record, NOT runtime property data.

  NOTHING IN THIS FILE IS VISIBLE TO THE SOLVER.  Record resolution looks only
  in <case>/constant/, data/standards/ and data/local/, so a file here is out
  of its reach BY CONSTRUCTION -- not by convention.

  Nothing here has been promoted.  Curation state belongs to the evidence
  process; runtime trust belongs to the numerical record actually admitted
  to data/standards/, and only an explicit human promotion moves one there
  (bin/curate/promote-from-dossier).

  MATURITY IS PER PROPERTY, not per component: the properties below may hold
  different verdicts, and any whole-component summary is DERIVED from them
  rather than stored beside them.

  Regenerated on every run.  Hand edits are lost.
\\*-----------------------------------------------------------------------------*/

component      2Butanol;
reviewStatus   unreviewed;

properties
(
{
    property       binaryVLE.T_bubble;
    operation      fit_nrtl;   // type fitParameters
    model          "NRTL binary pair, bubble-T residual at fixed P";
    verdict        validationRefused;
    refusal        "No independent experimental evidence remains after fitting.";

    fittedParameters
    {
        equilibrium.liquid.activityModel.binaryParameters.2Butanol-dimethylCarbonate.b_ij  169.805954508;
        equilibrium.liquid.activityModel.binaryParameters.2Butanol-dimethylCarbonate.b_ji  144.118442096;
    }

    evidence
    {
        partitionFingerprint  "0d44971a22334799";   // frozen before the fit

        datasets
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

        domain
        {
            coordinate  x1;
            fit         { min 0.0452; max 0.968; n 111; }
        }
    }

    metrics
    {
        //  r2InSample: not computed by this operation (it reports chi-square).
        //  NO HELD-OUT METRIC EXISTS.  r2InSample above is exactly that --
        //  in-sample -- and must not be read as an external check.
    }
}

{
    property       binaryVLE.T_bubble;
    operation      fit_nrtl_start2;   // type fitParameters
    model          "NRTL binary pair, bubble-T residual at fixed P";
    verdict        validationRefused;
    refusal        "No independent experimental evidence remains after fitting.";

    fittedParameters
    {
        equilibrium.liquid.activityModel.binaryParameters.2Butanol-dimethylCarbonate.b_ij  169.805954189;
        equilibrium.liquid.activityModel.binaryParameters.2Butanol-dimethylCarbonate.b_ji  144.118442396;
    }

    evidence
    {
        partitionFingerprint  "0d44971a22334799";   // frozen before the fit

        datasets
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

        domain
        {
            coordinate  x1;
            fit         { min 0.0452; max 0.968; n 111; }
        }
    }

    metrics
    {
        //  r2InSample: not computed by this operation (it reports chi-square).
        //  NO HELD-OUT METRIC EXISTS.  r2InSample above is exactly that --
        //  in-sample -- and must not be read as an external check.
    }
}

);
`,Tt=`/*--------------------------------*- Choupo -*--------------------------------*\\
  CURATION DOSSIER -- a scientific work record, NOT runtime property data.

  NOTHING IN THIS FILE IS VISIBLE TO THE SOLVER.  Record resolution looks only
  in <case>/constant/, data/standards/ and data/local/, so a file here is out
  of its reach BY CONSTRUCTION -- not by convention.

  Nothing here has been promoted.  Curation state belongs to the evidence
  process; runtime trust belongs to the numerical record actually admitted
  to data/standards/, and only an explicit human promotion moves one there
  (bin/curate/promote-from-dossier).

  MATURITY IS PER PROPERTY, not per component: the properties below may hold
  different verdicts, and any whole-component summary is DERIVED from them
  rather than stored beside them.

  Regenerated on every run.  Hand edits are lost.
\\*-----------------------------------------------------------------------------*/

component      methanol;
reviewStatus   unreviewed;

properties
(
{
    property       binaryVLE.T_bubble;
    operation      fit_nrtl;   // type fitParameters
    model          "NRTL binary pair, bubble-T residual at fixed P";
    verdict        validationRefused;
    refusal        "No independent experimental evidence remains after fitting.";

    fittedParameters
    {
        equilibrium.liquid.activityModel.binaryParameters.methanol-2Butanol.b_ij  149.254674911;
        equilibrium.liquid.activityModel.binaryParameters.methanol-2Butanol.b_ji  -147.951716687;
    }

    evidence
    {
        partitionFingerprint  "1008118377732559";   // frozen before the fit

        datasets
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

        domain
        {
            coordinate  x1;
            fit         { min 0.0726; max 0.9874; n 40; }
        }
    }

    metrics
    {
        //  r2InSample: not computed by this operation (it reports chi-square).
        //  NO HELD-OUT METRIC EXISTS.  r2InSample above is exactly that --
        //  in-sample -- and must not be read as an external check.
    }
}

{
    property       binaryVLE.T_bubble;
    operation      fit_nrtl_start2;   // type fitParameters
    model          "NRTL binary pair, bubble-T residual at fixed P";
    verdict        validationRefused;
    refusal        "No independent experimental evidence remains after fitting.";

    fittedParameters
    {
        equilibrium.liquid.activityModel.binaryParameters.methanol-2Butanol.b_ij  149.258846553;
        equilibrium.liquid.activityModel.binaryParameters.methanol-2Butanol.b_ji  -147.954964227;
    }

    evidence
    {
        partitionFingerprint  "1008118377732559";   // frozen before the fit

        datasets
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

        domain
        {
            coordinate  x1;
            fit         { min 0.0726; max 0.9874; n 40; }
        }
    }

    metrics
    {
        //  r2InSample: not computed by this operation (it reports chi-square).
        //  NO HELD-OUT METRIC EXISTS.  r2InSample above is exactly that --
        //  in-sample -- and must not be read as an external check.
    }
}

);
`,It=`/*--------------------------------*- Choupo -*--------------------------------*\\
  CURATION DOSSIER -- a scientific work record, NOT runtime property data.

  NOTHING IN THIS FILE IS VISIBLE TO THE SOLVER.  Record resolution looks only
  in <case>/constant/, data/standards/ and data/local/, so a file here is out
  of its reach BY CONSTRUCTION -- not by convention.

  Nothing here has been promoted.  Curation state belongs to the evidence
  process; runtime trust belongs to the numerical record actually admitted
  to data/standards/, and only an explicit human promotion moves one there
  (bin/curate/promote-from-dossier).

  MATURITY IS PER PROPERTY, not per component: the properties below may hold
  different verdicts, and any whole-component summary is DERIVED from them
  rather than stored beside them.

  Regenerated on every run.  Hand edits are lost.
\\*-----------------------------------------------------------------------------*/

component      2Butanol;
reviewStatus   unreviewed;

properties
(
{
    property       binaryVLE.P_bubble;
    operation      fit_nrtl;   // type fitParameters
    model          "binary pair, relative bubble-P residual at fixed T";
    verdict        validationRefused;
    refusal        "No independent experimental evidence remains after fitting.";

    fittedParameters
    {
        equilibrium.liquid.activityModel.binaryParameters.2Butanol-nDodecane.b_ij  147.189641379;
        equilibrium.liquid.activityModel.binaryParameters.2Butanol-nDodecane.b_ji  593.693477295;
    }

    evidence
    {
        partitionFingerprint  "e4ad34787c040498";   // frozen before the fit

        datasets
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

        domain
        {
            coordinate  x1;
            fit         { min 0.05; max 0.9505; n 24; }
        }
    }

    metrics
    {
        //  r2InSample: not computed by this operation (it reports chi-square).
        //  NO HELD-OUT METRIC EXISTS.  r2InSample above is exactly that --
        //  in-sample -- and must not be read as an external check.
    }
}

{
    property       binaryVLE.P_bubble;
    operation      fit_nrtl_start2;   // type fitParameters
    model          "binary pair, relative bubble-P residual at fixed T";
    verdict        validationRefused;
    refusal        "No independent experimental evidence remains after fitting.";

    fittedParameters
    {
        equilibrium.liquid.activityModel.binaryParameters.2Butanol-nDodecane.b_ij  147.189635703;
        equilibrium.liquid.activityModel.binaryParameters.2Butanol-nDodecane.b_ji  593.693486743;
    }

    evidence
    {
        partitionFingerprint  "e4ad34787c040498";   // frozen before the fit

        datasets
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

        domain
        {
            coordinate  x1;
            fit         { min 0.05; max 0.9505; n 24; }
        }
    }

    metrics
    {
        //  r2InSample: not computed by this operation (it reports chi-square).
        //  NO HELD-OUT METRIC EXISTS.  r2InSample above is exactly that --
        //  in-sample -- and must not be read as an external check.
    }
}

);
`,xt=`/*--------------------------------*- Choupo -*--------------------------------*\\
  CURATION DOSSIER -- a scientific work record, NOT runtime property data.

  NOTHING IN THIS FILE IS VISIBLE TO THE SOLVER.  Record resolution looks only
  in <case>/constant/, data/standards/ and data/local/, so a file here is out
  of its reach BY CONSTRUCTION -- not by convention.

  Nothing here has been promoted.  Curation state belongs to the evidence
  process; runtime trust belongs to the numerical record actually admitted
  to data/standards/, and only an explicit human promotion moves one there
  (bin/curate/promote-from-dossier).

  MATURITY IS PER PROPERTY, not per component: the properties below may hold
  different verdicts, and any whole-component summary is DERIVED from them
  rather than stored beside them.

  Regenerated on every run.  Hand edits are lost.
\\*-----------------------------------------------------------------------------*/

component      nHexane;
reviewStatus   unreviewed;

properties
(
{
    property       binaryVLE.P_bubble;
    operation      fit_nrtl;   // type fitParameters
    model          "binary pair, relative bubble-P residual at fixed T";
    verdict        validationRefused;
    refusal        "No independent experimental evidence remains after fitting.";

    fittedParameters
    {
        equilibrium.liquid.activityModel.binaryParameters.nHexane-2Butanol.b_ij  736.483115211;
        equilibrium.liquid.activityModel.binaryParameters.nHexane-2Butanol.b_ji  38.9138749901;
    }

    evidence
    {
        partitionFingerprint  "fff91d54220c2290";   // frozen before the fit

        datasets
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

        domain
        {
            coordinate  x1;
            fit         { min 0.0005; max 0.9924; n 58; }
        }
    }

    metrics
    {
        //  r2InSample: not computed by this operation (it reports chi-square).
        //  NO HELD-OUT METRIC EXISTS.  r2InSample above is exactly that --
        //  in-sample -- and must not be read as an external check.
    }
}

{
    property       binaryVLE.P_bubble;
    operation      fit_nrtl_start2;   // type fitParameters
    model          "binary pair, relative bubble-P residual at fixed T";
    verdict        validationRefused;
    refusal        "No independent experimental evidence remains after fitting.";

    fittedParameters
    {
        equilibrium.liquid.activityModel.binaryParameters.nHexane-2Butanol.b_ij  736.483127544;
        equilibrium.liquid.activityModel.binaryParameters.nHexane-2Butanol.b_ji  38.9138555459;
    }

    evidence
    {
        partitionFingerprint  "fff91d54220c2290";   // frozen before the fit

        datasets
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

        domain
        {
            coordinate  x1;
            fit         { min 0.0005; max 0.9924; n 58; }
        }
    }

    metrics
    {
        //  r2InSample: not computed by this operation (it reports chi-square).
        //  NO HELD-OUT METRIC EXISTS.  r2InSample above is exactly that --
        //  in-sample -- and must not be read as an external check.
    }
}

);
`,Pt=`/*--------------------------------*- Choupo -*--------------------------------*\\
  CURATION DOSSIER -- a scientific work record, NOT runtime property data.

  NOTHING IN THIS FILE IS VISIBLE TO THE SOLVER.  Record resolution looks only
  in <case>/constant/, data/standards/ and data/local/, so a file here is out
  of its reach BY CONSTRUCTION -- not by convention.

  Nothing here has been promoted.  Curation state belongs to the evidence
  process; runtime trust belongs to the numerical record actually admitted
  to data/standards/, and only an explicit human promotion moves one there
  (bin/curate/promote-from-dossier).

  MATURITY IS PER PROPERTY, not per component: the properties below may hold
  different verdicts, and any whole-component summary is DERIVED from them
  rather than stored beside them.

  Regenerated on every run.  Hand edits are lost.
\\*-----------------------------------------------------------------------------*/

component      2Butanol;
reviewStatus   unreviewed;

properties
(
{
    property       binaryVLE.T_bubble;
    operation      fit_nrtl;   // type fitParameters
    model          "NRTL binary pair, bubble-T residual at fixed P";
    verdict        validationRefused;
    refusal        "No independent experimental evidence remains after fitting.";

    fittedParameters
    {
        equilibrium.liquid.activityModel.binaryParameters.2Butanol-nNDimethylformamide.b_ij  348.617560598;
        equilibrium.liquid.activityModel.binaryParameters.2Butanol-nNDimethylformamide.b_ji  -368.326368035;
    }

    evidence
    {
        partitionFingerprint  "7b5df2c87399a732";   // frozen before the fit

        datasets
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

        domain
        {
            coordinate  x1;
            fit         { min 0.016; max 0.969; n 40; }
        }
    }

    metrics
    {
        //  r2InSample: not computed by this operation (it reports chi-square).
        //  NO HELD-OUT METRIC EXISTS.  r2InSample above is exactly that --
        //  in-sample -- and must not be read as an external check.
    }
}

{
    property       binaryVLE.T_bubble;
    operation      fit_nrtl_start2;   // type fitParameters
    model          "NRTL binary pair, bubble-T residual at fixed P";
    verdict        validationRefused;
    refusal        "No independent experimental evidence remains after fitting.";

    fittedParameters
    {
        equilibrium.liquid.activityModel.binaryParameters.2Butanol-nNDimethylformamide.b_ij  348.617426852;
        equilibrium.liquid.activityModel.binaryParameters.2Butanol-nNDimethylformamide.b_ji  -368.326290194;
    }

    evidence
    {
        partitionFingerprint  "7b5df2c87399a732";   // frozen before the fit

        datasets
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

        domain
        {
            coordinate  x1;
            fit         { min 0.016; max 0.969; n 40; }
        }
    }

    metrics
    {
        //  r2InSample: not computed by this operation (it reports chi-square).
        //  NO HELD-OUT METRIC EXISTS.  r2InSample above is exactly that --
        //  in-sample -- and must not be read as an external check.
    }
}

);
`,St=`/*--------------------------------*- Choupo -*--------------------------------*\\
  CURATION DOSSIER -- a scientific work record, NOT runtime property data.

  NOTHING IN THIS FILE IS VISIBLE TO THE SOLVER.  Record resolution looks only
  in <case>/constant/, data/standards/ and data/local/, so a file here is out
  of its reach BY CONSTRUCTION -- not by convention.

  Nothing here has been promoted.  Curation state belongs to the evidence
  process; runtime trust belongs to the numerical record actually admitted
  to data/standards/, and only an explicit human promotion moves one there
  (bin/curate/promote-from-dossier).

  MATURITY IS PER PROPERTY, not per component: the properties below may hold
  different verdicts, and any whole-component summary is DERIVED from them
  rather than stored beside them.

  Regenerated on every run.  Hand edits are lost.
\\*-----------------------------------------------------------------------------*/

component      2Butanol;
reviewStatus   unreviewed;

properties
(
{
    property       binaryVLE.P_bubble;
    operation      fit_nrtl;   // type fitParameters
    model          "binary pair, relative bubble-P residual at fixed T";
    verdict        validationRefused;
    refusal        "No independent experimental evidence remains after fitting.";

    fittedParameters
    {
        equilibrium.liquid.activityModel.binaryParameters.2Butanol-toluene.b_ij  150.572893017;
        equilibrium.liquid.activityModel.binaryParameters.2Butanol-toluene.b_ji  380.052861464;
    }

    evidence
    {
        partitionFingerprint  "d9b41022b0c9e364";   // frozen before the fit

        datasets
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

        domain
        {
            coordinate  x1;
            fit         { min 0.0494; max 0.9501; n 24; }
        }
    }

    metrics
    {
        //  r2InSample: not computed by this operation (it reports chi-square).
        //  NO HELD-OUT METRIC EXISTS.  r2InSample above is exactly that --
        //  in-sample -- and must not be read as an external check.
    }
}

{
    property       binaryVLE.P_bubble;
    operation      fit_nrtl_start2;   // type fitParameters
    model          "binary pair, relative bubble-P residual at fixed T";
    verdict        validationRefused;
    refusal        "No independent experimental evidence remains after fitting.";

    fittedParameters
    {
        equilibrium.liquid.activityModel.binaryParameters.2Butanol-toluene.b_ij  150.572884564;
        equilibrium.liquid.activityModel.binaryParameters.2Butanol-toluene.b_ji  380.05287576;
    }

    evidence
    {
        partitionFingerprint  "d9b41022b0c9e364";   // frozen before the fit

        datasets
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

        domain
        {
            coordinate  x1;
            fit         { min 0.0494; max 0.9501; n 24; }
        }
    }

    metrics
    {
        //  r2InSample: not computed by this operation (it reports chi-square).
        //  NO HELD-OUT METRIC EXISTS.  r2InSample above is exactly that --
        //  in-sample -- and must not be read as an external check.
    }
}

);
`,Rt=`/*--------------------------------*- Choupo -*--------------------------------*\\
  CURATION DOSSIER -- a scientific work record, NOT runtime property data.

  NOTHING IN THIS FILE IS VISIBLE TO THE SOLVER.  Record resolution looks only
  in <case>/constant/, data/standards/ and data/local/, so a file here is out
  of its reach BY CONSTRUCTION -- not by convention.

  Nothing here has been promoted.  Curation state belongs to the evidence
  process; runtime trust belongs to the numerical record actually admitted
  to data/standards/, and only an explicit human promotion moves one there
  (bin/curate/promote-from-dossier).

  MATURITY IS PER PROPERTY, not per component: the properties below may hold
  different verdicts, and any whole-component summary is DERIVED from them
  rather than stored beside them.

  Regenerated on every run.  Hand edits are lost.
\\*-----------------------------------------------------------------------------*/

component      ethanol;
reviewStatus   unreviewed;

properties
(
{
    property       binaryVLE.T_bubble;
    operation      fit_nrtl;   // type fitParameters
    model          "NRTL binary pair, bubble-T residual at fixed P";
    verdict        validationRefused;
    refusal        "No independent experimental evidence remains after fitting.";

    fittedParameters
    {
        equilibrium.liquid.activityModel.binaryParameters.ethanol-2Methyl1Butanol.b_ij  444.709711004;
        equilibrium.liquid.activityModel.binaryParameters.ethanol-2Methyl1Butanol.b_ji  -300.107875387;
    }

    evidence
    {
        partitionFingerprint  "b57a90fff9971061";   // frozen before the fit

        datasets
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

        domain
        {
            coordinate  x1;
            fit         { min 0.021; max 0.993; n 59; }
        }
    }

    metrics
    {
        //  r2InSample: not computed by this operation (it reports chi-square).
        //  NO HELD-OUT METRIC EXISTS.  r2InSample above is exactly that --
        //  in-sample -- and must not be read as an external check.
    }
}

{
    property       binaryVLE.T_bubble;
    operation      fit_nrtl_start2;   // type fitParameters
    model          "NRTL binary pair, bubble-T residual at fixed P";
    verdict        validationRefused;
    refusal        "No independent experimental evidence remains after fitting.";

    fittedParameters
    {
        equilibrium.liquid.activityModel.binaryParameters.ethanol-2Methyl1Butanol.b_ij  444.709712129;
        equilibrium.liquid.activityModel.binaryParameters.ethanol-2Methyl1Butanol.b_ji  -300.107876246;
    }

    evidence
    {
        partitionFingerprint  "b57a90fff9971061";   // frozen before the fit

        datasets
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

        domain
        {
            coordinate  x1;
            fit         { min 0.021; max 0.993; n 59; }
        }
    }

    metrics
    {
        //  r2InSample: not computed by this operation (it reports chi-square).
        //  NO HELD-OUT METRIC EXISTS.  r2InSample above is exactly that --
        //  in-sample -- and must not be read as an external check.
    }
}

);
`,jt=`/*--------------------------------*- Choupo -*--------------------------------*\\
  CURATION DOSSIER -- a scientific work record, NOT runtime property data.

  NOTHING IN THIS FILE IS VISIBLE TO THE SOLVER.  Record resolution looks only
  in <case>/constant/, data/standards/ and data/local/, so a file here is out
  of its reach BY CONSTRUCTION -- not by convention.

  Nothing here has been promoted.  Curation state belongs to the evidence
  process; runtime trust belongs to the numerical record actually admitted
  to data/standards/, and only an explicit human promotion moves one there
  (bin/curate/promote-from-dossier).

  MATURITY IS PER PROPERTY, not per component: the properties below may hold
  different verdicts, and any whole-component summary is DERIVED from them
  rather than stored beside them.

  Regenerated on every run.  Hand edits are lost.
\\*-----------------------------------------------------------------------------*/

component      benzene;
reviewStatus   unreviewed;

properties
(
{
    property       binaryVLE.P_bubble;
    operation      fit_nrtl;   // type fitParameters
    model          "binary pair, relative bubble-P residual at fixed T";
    verdict        validationRefused;
    refusal        "No independent experimental evidence remains after fitting.";

    fittedParameters
    {
        equilibrium.liquid.activityModel.binaryParameters.benzene-2Methyl1Propanol.b_ij  535.309889097;
        equilibrium.liquid.activityModel.binaryParameters.benzene-2Methyl1Propanol.b_ji  62.8334330616;
    }

    evidence
    {
        partitionFingerprint  "971ed41bcd1e9e87";   // frozen before the fit

        datasets
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

        domain
        {
            coordinate  x1;
            fit         { min 0.0584; max 0.9518; n 24; }
        }
    }

    metrics
    {
        //  r2InSample: not computed by this operation (it reports chi-square).
        //  NO HELD-OUT METRIC EXISTS.  r2InSample above is exactly that --
        //  in-sample -- and must not be read as an external check.
    }
}

{
    property       binaryVLE.P_bubble;
    operation      fit_nrtl_start2;   // type fitParameters
    model          "binary pair, relative bubble-P residual at fixed T";
    verdict        validationRefused;
    refusal        "No independent experimental evidence remains after fitting.";

    fittedParameters
    {
        equilibrium.liquid.activityModel.binaryParameters.benzene-2Methyl1Propanol.b_ij  535.309888479;
        equilibrium.liquid.activityModel.binaryParameters.benzene-2Methyl1Propanol.b_ji  62.8334333815;
    }

    evidence
    {
        partitionFingerprint  "971ed41bcd1e9e87";   // frozen before the fit

        datasets
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

        domain
        {
            coordinate  x1;
            fit         { min 0.0584; max 0.9518; n 24; }
        }
    }

    metrics
    {
        //  r2InSample: not computed by this operation (it reports chi-square).
        //  NO HELD-OUT METRIC EXISTS.  r2InSample above is exactly that --
        //  in-sample -- and must not be read as an external check.
    }
}

);
`,Ot=`/*--------------------------------*- Choupo -*--------------------------------*\\
  CURATION DOSSIER -- a scientific work record, NOT runtime property data.

  NOTHING IN THIS FILE IS VISIBLE TO THE SOLVER.  Record resolution looks only
  in <case>/constant/, data/standards/ and data/local/, so a file here is out
  of its reach BY CONSTRUCTION -- not by convention.

  Nothing here has been promoted.  Curation state belongs to the evidence
  process; runtime trust belongs to the numerical record actually admitted
  to data/standards/, and only an explicit human promotion moves one there
  (bin/curate/promote-from-dossier).

  MATURITY IS PER PROPERTY, not per component: the properties below may hold
  different verdicts, and any whole-component summary is DERIVED from them
  rather than stored beside them.

  Regenerated on every run.  Hand edits are lost.
\\*-----------------------------------------------------------------------------*/

component      diisopropylEther;
reviewStatus   unreviewed;

properties
(
{
    property       binaryVLE.P_bubble;
    operation      fit_nrtl;   // type fitParameters
    model          "binary pair, relative bubble-P residual at fixed T";
    verdict        validationRefused;
    refusal        "No independent experimental evidence remains after fitting.";

    fittedParameters
    {
        equilibrium.liquid.activityModel.binaryParameters.diisopropylEther-2Methyl1Propanol.b_ij  261.425177404;
        equilibrium.liquid.activityModel.binaryParameters.diisopropylEther-2Methyl1Propanol.b_ji  43.7227556869;
    }

    evidence
    {
        partitionFingerprint  "2f9ed79b2cc1f5ab";   // frozen before the fit

        datasets
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

        domain
        {
            coordinate  x1;
            fit         { min 0.0582; max 0.9505; n 26; }
        }
    }

    metrics
    {
        //  r2InSample: not computed by this operation (it reports chi-square).
        //  NO HELD-OUT METRIC EXISTS.  r2InSample above is exactly that --
        //  in-sample -- and must not be read as an external check.
    }
}

{
    property       binaryVLE.P_bubble;
    operation      fit_nrtl_start2;   // type fitParameters
    model          "binary pair, relative bubble-P residual at fixed T";
    verdict        validationRefused;
    refusal        "No independent experimental evidence remains after fitting.";

    fittedParameters
    {
        equilibrium.liquid.activityModel.binaryParameters.diisopropylEther-2Methyl1Propanol.b_ij  261.425795997;
        equilibrium.liquid.activityModel.binaryParameters.diisopropylEther-2Methyl1Propanol.b_ji  43.7223791481;
    }

    evidence
    {
        partitionFingerprint  "2f9ed79b2cc1f5ab";   // frozen before the fit

        datasets
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

        domain
        {
            coordinate  x1;
            fit         { min 0.0582; max 0.9505; n 26; }
        }
    }

    metrics
    {
        //  r2InSample: not computed by this operation (it reports chi-square).
        //  NO HELD-OUT METRIC EXISTS.  r2InSample above is exactly that --
        //  in-sample -- and must not be read as an external check.
    }
}

);
`,Nt=`/*--------------------------------*- Choupo -*--------------------------------*\\
  CURATION DOSSIER -- a scientific work record, NOT runtime property data.

  NOTHING IN THIS FILE IS VISIBLE TO THE SOLVER.  Record resolution looks only
  in <case>/constant/, data/standards/ and data/local/, so a file here is out
  of its reach BY CONSTRUCTION -- not by convention.

  Nothing here has been promoted.  Curation state belongs to the evidence
  process; runtime trust belongs to the numerical record actually admitted
  to data/standards/, and only an explicit human promotion moves one there
  (bin/curate/promote-from-dossier).

  MATURITY IS PER PROPERTY, not per component: the properties below may hold
  different verdicts, and any whole-component summary is DERIVED from them
  rather than stored beside them.

  Regenerated on every run.  Hand edits are lost.
\\*-----------------------------------------------------------------------------*/

component      2Methyl1Propanol;
reviewStatus   unreviewed;

properties
(
{
    property       binaryVLE.T_bubble;
    operation      fit_nrtl;   // type fitParameters
    model          "NRTL binary pair, bubble-T residual at fixed P";
    verdict        validationRefused;
    refusal        "No independent experimental evidence remains after fitting.";

    fittedParameters
    {
        equilibrium.liquid.activityModel.binaryParameters.2Methyl1Propanol-isobutylAcetate.b_ij  170.443536232;
        equilibrium.liquid.activityModel.binaryParameters.2Methyl1Propanol-isobutylAcetate.b_ji  5.65749387419;
    }

    evidence
    {
        partitionFingerprint  "5521d4e9bdc32784";   // frozen before the fit

        datasets
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

        domain
        {
            coordinate  x1;
            fit         { min 0.048; max 0.957; n 58; }
        }
    }

    metrics
    {
        //  r2InSample: not computed by this operation (it reports chi-square).
        //  NO HELD-OUT METRIC EXISTS.  r2InSample above is exactly that --
        //  in-sample -- and must not be read as an external check.
    }
}

{
    property       binaryVLE.T_bubble;
    operation      fit_nrtl_start2;   // type fitParameters
    model          "NRTL binary pair, bubble-T residual at fixed P";
    verdict        validationRefused;
    refusal        "No independent experimental evidence remains after fitting.";

    fittedParameters
    {
        equilibrium.liquid.activityModel.binaryParameters.2Methyl1Propanol-isobutylAcetate.b_ij  170.443536666;
        equilibrium.liquid.activityModel.binaryParameters.2Methyl1Propanol-isobutylAcetate.b_ji  5.65749351356;
    }

    evidence
    {
        partitionFingerprint  "5521d4e9bdc32784";   // frozen before the fit

        datasets
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

        domain
        {
            coordinate  x1;
            fit         { min 0.048; max 0.957; n 58; }
        }
    }

    metrics
    {
        //  r2InSample: not computed by this operation (it reports chi-square).
        //  NO HELD-OUT METRIC EXISTS.  r2InSample above is exactly that --
        //  in-sample -- and must not be read as an external check.
    }
}

);
`,_t=`/*--------------------------------*- Choupo -*--------------------------------*\\
  CURATION DOSSIER -- a scientific work record, NOT runtime property data.

  NOTHING IN THIS FILE IS VISIBLE TO THE SOLVER.  Record resolution looks only
  in <case>/constant/, data/standards/ and data/local/, so a file here is out
  of its reach BY CONSTRUCTION -- not by convention.

  Nothing here has been promoted.  Curation state belongs to the evidence
  process; runtime trust belongs to the numerical record actually admitted
  to data/standards/, and only an explicit human promotion moves one there
  (bin/curate/promote-from-dossier).

  MATURITY IS PER PROPERTY, not per component: the properties below may hold
  different verdicts, and any whole-component summary is DERIVED from them
  rather than stored beside them.

  Regenerated on every run.  Hand edits are lost.
\\*-----------------------------------------------------------------------------*/

component      2Methyl1Propanol;
reviewStatus   unreviewed;

properties
(
{
    property       binaryVLE.T_bubble;
    operation      fit_nrtl;   // type fitParameters
    model          "NRTL binary pair, bubble-T residual at fixed P";
    verdict        validationRefused;
    refusal        "No independent experimental evidence remains after fitting.";

    fittedParameters
    {
        equilibrium.liquid.activityModel.binaryParameters.2Methyl1Propanol-nNDimethylformamide.b_ij  311.540655998;
        equilibrium.liquid.activityModel.binaryParameters.2Methyl1Propanol-nNDimethylformamide.b_ji  -366.485972318;
    }

    evidence
    {
        partitionFingerprint  "8c3a9d6877242515";   // frozen before the fit

        datasets
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

        domain
        {
            coordinate  x1;
            fit         { min 0.0512; max 0.9502; n 37; }
        }
    }

    metrics
    {
        //  r2InSample: not computed by this operation (it reports chi-square).
        //  NO HELD-OUT METRIC EXISTS.  r2InSample above is exactly that --
        //  in-sample -- and must not be read as an external check.
    }
}

{
    property       binaryVLE.T_bubble;
    operation      fit_nrtl_start2;   // type fitParameters
    model          "NRTL binary pair, bubble-T residual at fixed P";
    verdict        validationRefused;
    refusal        "No independent experimental evidence remains after fitting.";

    fittedParameters
    {
        equilibrium.liquid.activityModel.binaryParameters.2Methyl1Propanol-nNDimethylformamide.b_ij  336.293711035;
        equilibrium.liquid.activityModel.binaryParameters.2Methyl1Propanol-nNDimethylformamide.b_ji  -381.422400408;
    }

    evidence
    {
        partitionFingerprint  "8c3a9d6877242515";   // frozen before the fit

        datasets
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

        domain
        {
            coordinate  x1;
            fit         { min 0.0512; max 0.9502; n 37; }
        }
    }

    metrics
    {
        //  r2InSample: not computed by this operation (it reports chi-square).
        //  NO HELD-OUT METRIC EXISTS.  r2InSample above is exactly that --
        //  in-sample -- and must not be read as an external check.
    }
}

);
`,gt=`/*--------------------------------*- Choupo -*--------------------------------*\\
  CURATION DOSSIER -- a scientific work record, NOT runtime property data.

  NOTHING IN THIS FILE IS VISIBLE TO THE SOLVER.  Record resolution looks only
  in <case>/constant/, data/standards/ and data/local/, so a file here is out
  of its reach BY CONSTRUCTION -- not by convention.

  Nothing here has been promoted.  Curation state belongs to the evidence
  process; runtime trust belongs to the numerical record actually admitted
  to data/standards/, and only an explicit human promotion moves one there
  (bin/curate/promote-from-dossier).

  MATURITY IS PER PROPERTY, not per component: the properties below may hold
  different verdicts, and any whole-component summary is DERIVED from them
  rather than stored beside them.

  Regenerated on every run.  Hand edits are lost.
\\*-----------------------------------------------------------------------------*/

component      2Methyl2Propanol;
reviewStatus   unreviewed;

properties
(
{
    property       binaryVLE.T_bubble;
    operation      fit_nrtl;   // type fitParameters
    model          "NRTL binary pair, bubble-T residual at fixed P";
    verdict        validationRefused;
    refusal        "No independent experimental evidence remains after fitting.";

    fittedParameters
    {
        equilibrium.liquid.activityModel.binaryParameters.2Methyl2Propanol-nNDimethylformamide.b_ij  418.34205776;
        equilibrium.liquid.activityModel.binaryParameters.2Methyl2Propanol-nNDimethylformamide.b_ji  -300.516325563;
    }

    evidence
    {
        partitionFingerprint  "17e04b8d2e5f0e5e";   // frozen before the fit

        datasets
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

        domain
        {
            coordinate  x1;
            fit         { min 0.0503; max 0.9502; n 24; }
        }
    }

    metrics
    {
        //  r2InSample: not computed by this operation (it reports chi-square).
        //  NO HELD-OUT METRIC EXISTS.  r2InSample above is exactly that --
        //  in-sample -- and must not be read as an external check.
    }
}

{
    property       binaryVLE.T_bubble;
    operation      fit_nrtl_start2;   // type fitParameters
    model          "NRTL binary pair, bubble-T residual at fixed P";
    verdict        validationRefused;
    refusal        "No independent experimental evidence remains after fitting.";

    fittedParameters
    {
        equilibrium.liquid.activityModel.binaryParameters.2Methyl2Propanol-nNDimethylformamide.b_ij  418.342063362;
        equilibrium.liquid.activityModel.binaryParameters.2Methyl2Propanol-nNDimethylformamide.b_ji  -300.516328536;
    }

    evidence
    {
        partitionFingerprint  "17e04b8d2e5f0e5e";   // frozen before the fit

        datasets
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

        domain
        {
            coordinate  x1;
            fit         { min 0.0503; max 0.9502; n 24; }
        }
    }

    metrics
    {
        //  r2InSample: not computed by this operation (it reports chi-square).
        //  NO HELD-OUT METRIC EXISTS.  r2InSample above is exactly that --
        //  in-sample -- and must not be read as an external check.
    }
}

);
`,Ct=`/*--------------------------------*- Choupo -*--------------------------------*\\
  CURATION DOSSIER -- a scientific work record, NOT runtime property data.

  NOTHING IN THIS FILE IS VISIBLE TO THE SOLVER.  Record resolution looks only
  in <case>/constant/, data/standards/ and data/local/, so a file here is out
  of its reach BY CONSTRUCTION -- not by convention.

  Nothing here has been promoted.  Curation state belongs to the evidence
  process; runtime trust belongs to the numerical record actually admitted
  to data/standards/, and only an explicit human promotion moves one there
  (bin/curate/promote-from-dossier).

  MATURITY IS PER PROPERTY, not per component: the properties below may hold
  different verdicts, and any whole-component summary is DERIVED from them
  rather than stored beside them.

  Regenerated on every run.  Hand edits are lost.
\\*-----------------------------------------------------------------------------*/

component      2Methyl2Propanol;
reviewStatus   unreviewed;

properties
(
{
    property       binaryVLE.T_bubble;
    operation      fit_nrtl;   // type fitParameters
    model          "NRTL binary pair, bubble-T residual at fixed P";
    verdict        validationRefused;
    refusal        "No independent experimental evidence remains after fitting.";

    fittedParameters
    {
        equilibrium.liquid.activityModel.binaryParameters.2Methyl2Propanol-water.b_ij  -121.006569075;
        equilibrium.liquid.activityModel.binaryParameters.2Methyl2Propanol-water.b_ji  1271.4242984;
    }

    evidence
    {
        partitionFingerprint  "48036981150d39ed";   // frozen before the fit

        datasets
        (
        {
            role      fit;
            dataset   "constant/archiveExtracts/2Methyl2Propanol-water-bubble-j.jct.2019.07.008.dat";
            doi       "10.1016/j.jct.2019.07.008";
            sha256    "fe56f331a99be9a46eb976844dd8cd7dd433d44a5f815d6db06fe8d3704d38a3";
            provenance measured;
            archiveFile "j.jct.2019.07.008.xml";
            system    "2Methyl2Propanol + water";
            pressure  "100000.000000 Pa";
        }
        {
            role      fit;
            dataset   "constant/archiveExtracts/2Methyl2Propanol-water-bubble-je501098j.dat";
            doi       "10.1021/je501098j";
            sha256    "37ed31bcb0d0d72cca0afcee07002554c0cbd97e78992a7172cd20dbb5ec39b5";
            provenance measured;
            archiveFile "je501098j.xml";
            system    "2Methyl2Propanol + water";
            pressure  "101300.000000 Pa";
        }
        {
            role      fit;
            dataset   "constant/archiveExtracts/2Methyl2Propanol-water-bubble-j.jct.2016.03.013.dat";
            doi       "10.1016/j.jct.2016.03.013";
            sha256    "26cd24b1bf9c931b5866dfc98e4c0954342701f6a626a2d5e30d3d4145d69383";
            provenance measured;
            archiveFile "j.jct.2016.03.013.xml";
            system    "2Methyl2Propanol + water";
            pressure  "101300.000000 Pa";
        }
        );

        domain
        {
            coordinate  x1;
            fit         { min 0.001; max 0.978; n 63; }
        }
    }

    metrics
    {
        //  r2InSample: not computed by this operation (it reports chi-square).
        //  NO HELD-OUT METRIC EXISTS.  r2InSample above is exactly that --
        //  in-sample -- and must not be read as an external check.
    }
}

{
    property       binaryVLE.T_bubble;
    operation      fit_nrtl_start2;   // type fitParameters
    model          "NRTL binary pair, bubble-T residual at fixed P";
    verdict        validationRefused;
    refusal        "No independent experimental evidence remains after fitting.";

    fittedParameters
    {
        equilibrium.liquid.activityModel.binaryParameters.2Methyl2Propanol-water.b_ij  -121.006569132;
        equilibrium.liquid.activityModel.binaryParameters.2Methyl2Propanol-water.b_ji  1271.42429914;
    }

    evidence
    {
        partitionFingerprint  "48036981150d39ed";   // frozen before the fit

        datasets
        (
        {
            role      fit;
            dataset   "constant/archiveExtracts/2Methyl2Propanol-water-bubble-j.jct.2019.07.008.dat";
            doi       "10.1016/j.jct.2019.07.008";
            sha256    "fe56f331a99be9a46eb976844dd8cd7dd433d44a5f815d6db06fe8d3704d38a3";
            provenance measured;
            archiveFile "j.jct.2019.07.008.xml";
            system    "2Methyl2Propanol + water";
            pressure  "100000.000000 Pa";
        }
        {
            role      fit;
            dataset   "constant/archiveExtracts/2Methyl2Propanol-water-bubble-je501098j.dat";
            doi       "10.1021/je501098j";
            sha256    "37ed31bcb0d0d72cca0afcee07002554c0cbd97e78992a7172cd20dbb5ec39b5";
            provenance measured;
            archiveFile "je501098j.xml";
            system    "2Methyl2Propanol + water";
            pressure  "101300.000000 Pa";
        }
        {
            role      fit;
            dataset   "constant/archiveExtracts/2Methyl2Propanol-water-bubble-j.jct.2016.03.013.dat";
            doi       "10.1016/j.jct.2016.03.013";
            sha256    "26cd24b1bf9c931b5866dfc98e4c0954342701f6a626a2d5e30d3d4145d69383";
            provenance measured;
            archiveFile "j.jct.2016.03.013.xml";
            system    "2Methyl2Propanol + water";
            pressure  "101300.000000 Pa";
        }
        );

        domain
        {
            coordinate  x1;
            fit         { min 0.001; max 0.978; n 63; }
        }
    }

    metrics
    {
        //  r2InSample: not computed by this operation (it reports chi-square).
        //  NO HELD-OUT METRIC EXISTS.  r2InSample above is exactly that --
        //  in-sample -- and must not be read as an external check.
    }
}

);
`,Ht=`/*--------------------------------*- Choupo -*--------------------------------*\\
  CURATION DOSSIER -- a scientific work record, NOT runtime property data.

  NOTHING IN THIS FILE IS VISIBLE TO THE SOLVER.  Record resolution looks only
  in <case>/constant/, data/standards/ and data/local/, so a file here is out
  of its reach BY CONSTRUCTION -- not by convention.

  Nothing here has been promoted.  Curation state belongs to the evidence
  process; runtime trust belongs to the numerical record actually admitted
  to data/standards/, and only an explicit human promotion moves one there
  (bin/curate/promote-from-dossier).

  MATURITY IS PER PROPERTY, not per component: the properties below may hold
  different verdicts, and any whole-component summary is DERIVED from them
  rather than stored beside them.

  Regenerated on every run.  Hand edits are lost.
\\*-----------------------------------------------------------------------------*/

component      2Pentanol;
reviewStatus   unreviewed;

properties
(
{
    property       binaryVLE.P_bubble;
    operation      fit_nrtl;   // type fitParameters
    model          "binary pair, relative bubble-P residual at fixed T";
    verdict        validationRefused;
    refusal        "No independent experimental evidence remains after fitting.";

    fittedParameters
    {
        equilibrium.liquid.activityModel.binaryParameters.2Pentanol-cyclohexane.b_ij  -4.05261249881;
        equilibrium.liquid.activityModel.binaryParameters.2Pentanol-cyclohexane.b_ji  639.05019966;
    }

    evidence
    {
        partitionFingerprint  "550e04fc5e961122";   // frozen before the fit

        datasets
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

        domain
        {
            coordinate  x1;
            fit         { min 0.0497; max 0.9498; n 24; }
        }
    }

    metrics
    {
        //  r2InSample: not computed by this operation (it reports chi-square).
        //  NO HELD-OUT METRIC EXISTS.  r2InSample above is exactly that --
        //  in-sample -- and must not be read as an external check.
    }
}

{
    property       binaryVLE.P_bubble;
    operation      fit_nrtl_start2;   // type fitParameters
    model          "binary pair, relative bubble-P residual at fixed T";
    verdict        validationRefused;
    refusal        "No independent experimental evidence remains after fitting.";

    fittedParameters
    {
        equilibrium.liquid.activityModel.binaryParameters.2Pentanol-cyclohexane.b_ij  -4.05261291342;
        equilibrium.liquid.activityModel.binaryParameters.2Pentanol-cyclohexane.b_ji  639.050200361;
    }

    evidence
    {
        partitionFingerprint  "550e04fc5e961122";   // frozen before the fit

        datasets
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

        domain
        {
            coordinate  x1;
            fit         { min 0.0497; max 0.9498; n 24; }
        }
    }

    metrics
    {
        //  r2InSample: not computed by this operation (it reports chi-square).
        //  NO HELD-OUT METRIC EXISTS.  r2InSample above is exactly that --
        //  in-sample -- and must not be read as an external check.
    }
}

);
`,qt=`/*--------------------------------*- Choupo -*--------------------------------*\\
  CURATION DOSSIER -- a scientific work record, NOT runtime property data.

  NOTHING IN THIS FILE IS VISIBLE TO THE SOLVER.  Record resolution looks only
  in <case>/constant/, data/standards/ and data/local/, so a file here is out
  of its reach BY CONSTRUCTION -- not by convention.

  Nothing here has been promoted.  Curation state belongs to the evidence
  process; runtime trust belongs to the numerical record actually admitted
  to data/standards/, and only an explicit human promotion moves one there
  (bin/curate/promote-from-dossier).

  MATURITY IS PER PROPERTY, not per component: the properties below may hold
  different verdicts, and any whole-component summary is DERIVED from them
  rather than stored beside them.

  Regenerated on every run.  Hand edits are lost.
\\*-----------------------------------------------------------------------------*/

component      2Pentanol;
reviewStatus   unreviewed;

properties
(
{
    property       binaryVLE.P_bubble;
    operation      fit_nrtl;   // type fitParameters
    model          "binary pair, relative bubble-P residual at fixed T";
    verdict        validationRefused;
    refusal        "No independent experimental evidence remains after fitting.";

    fittedParameters
    {
        equilibrium.liquid.activityModel.binaryParameters.2Pentanol-nHeptane.b_ij  90.5457842048;
        equilibrium.liquid.activityModel.binaryParameters.2Pentanol-nHeptane.b_ji  543.449331483;
    }

    evidence
    {
        partitionFingerprint  "f138f74412381bca";   // frozen before the fit

        datasets
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

        domain
        {
            coordinate  x1;
            fit         { min 0.0493; max 0.9504; n 24; }
        }
    }

    metrics
    {
        //  r2InSample: not computed by this operation (it reports chi-square).
        //  NO HELD-OUT METRIC EXISTS.  r2InSample above is exactly that --
        //  in-sample -- and must not be read as an external check.
    }
}

{
    property       binaryVLE.P_bubble;
    operation      fit_nrtl_start2;   // type fitParameters
    model          "binary pair, relative bubble-P residual at fixed T";
    verdict        validationRefused;
    refusal        "No independent experimental evidence remains after fitting.";

    fittedParameters
    {
        equilibrium.liquid.activityModel.binaryParameters.2Pentanol-nHeptane.b_ij  90.5457828899;
        equilibrium.liquid.activityModel.binaryParameters.2Pentanol-nHeptane.b_ji  543.44933111;
    }

    evidence
    {
        partitionFingerprint  "f138f74412381bca";   // frozen before the fit

        datasets
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

        domain
        {
            coordinate  x1;
            fit         { min 0.0493; max 0.9504; n 24; }
        }
    }

    metrics
    {
        //  r2InSample: not computed by this operation (it reports chi-square).
        //  NO HELD-OUT METRIC EXISTS.  r2InSample above is exactly that --
        //  in-sample -- and must not be read as an external check.
    }
}

);
`,Dt=`/*--------------------------------*- Choupo -*--------------------------------*\\
  CURATION DOSSIER -- a scientific work record, NOT runtime property data.

  NOTHING IN THIS FILE IS VISIBLE TO THE SOLVER.  Record resolution looks only
  in <case>/constant/, data/standards/ and data/local/, so a file here is out
  of its reach BY CONSTRUCTION -- not by convention.

  Nothing here has been promoted.  Curation state belongs to the evidence
  process; runtime trust belongs to the numerical record actually admitted
  to data/standards/, and only an explicit human promotion moves one there
  (bin/curate/promote-from-dossier).

  MATURITY IS PER PROPERTY, not per component: the properties below may hold
  different verdicts, and any whole-component summary is DERIVED from them
  rather than stored beside them.

  Regenerated on every run.  Hand edits are lost.
\\*-----------------------------------------------------------------------------*/

component      2Pentanol;
reviewStatus   unreviewed;

properties
(
{
    property       binaryVLE.P_bubble;
    operation      fit_nrtl;   // type fitParameters
    model          "binary pair, relative bubble-P residual at fixed T";
    verdict        validationRefused;
    refusal        "No independent experimental evidence remains after fitting.";

    fittedParameters
    {
        equilibrium.liquid.activityModel.binaryParameters.2Pentanol-nHexane.b_ij  63.8216383574;
        equilibrium.liquid.activityModel.binaryParameters.2Pentanol-nHexane.b_ji  554.403730903;
    }

    evidence
    {
        partitionFingerprint  "48bfe9bad1d62056";   // frozen before the fit

        datasets
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

        domain
        {
            coordinate  x1;
            fit         { min 0.0497; max 0.9496; n 24; }
        }
    }

    metrics
    {
        //  r2InSample: not computed by this operation (it reports chi-square).
        //  NO HELD-OUT METRIC EXISTS.  r2InSample above is exactly that --
        //  in-sample -- and must not be read as an external check.
    }
}

{
    property       binaryVLE.P_bubble;
    operation      fit_nrtl_start2;   // type fitParameters
    model          "binary pair, relative bubble-P residual at fixed T";
    verdict        validationRefused;
    refusal        "No independent experimental evidence remains after fitting.";

    fittedParameters
    {
        equilibrium.liquid.activityModel.binaryParameters.2Pentanol-nHexane.b_ij  63.8216423727;
        equilibrium.liquid.activityModel.binaryParameters.2Pentanol-nHexane.b_ji  554.40372243;
    }

    evidence
    {
        partitionFingerprint  "48bfe9bad1d62056";   // frozen before the fit

        datasets
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

        domain
        {
            coordinate  x1;
            fit         { min 0.0497; max 0.9496; n 24; }
        }
    }

    metrics
    {
        //  r2InSample: not computed by this operation (it reports chi-square).
        //  NO HELD-OUT METRIC EXISTS.  r2InSample above is exactly that --
        //  in-sample -- and must not be read as an external check.
    }
}

);
`,Lt=`/*--------------------------------*- Choupo -*--------------------------------*\\
  CURATION DOSSIER -- a scientific work record, NOT runtime property data.

  NOTHING IN THIS FILE IS VISIBLE TO THE SOLVER.  Record resolution looks only
  in <case>/constant/, data/standards/ and data/local/, so a file here is out
  of its reach BY CONSTRUCTION -- not by convention.

  Nothing here has been promoted.  Curation state belongs to the evidence
  process; runtime trust belongs to the numerical record actually admitted
  to data/standards/, and only an explicit human promotion moves one there
  (bin/curate/promote-from-dossier).

  MATURITY IS PER PROPERTY, not per component: the properties below may hold
  different verdicts, and any whole-component summary is DERIVED from them
  rather than stored beside them.

  Regenerated on every run.  Hand edits are lost.
\\*-----------------------------------------------------------------------------*/

component      2Pentanol;
reviewStatus   unreviewed;

properties
(
{
    property       binaryVLE.P_bubble;
    operation      fit_nrtl;   // type fitParameters
    model          "binary pair, relative bubble-P residual at fixed T";
    verdict        validationRefused;
    refusal        "No independent experimental evidence remains after fitting.";

    fittedParameters
    {
        equilibrium.liquid.activityModel.binaryParameters.2Pentanol-toluene.b_ij  34.292864353;
        equilibrium.liquid.activityModel.binaryParameters.2Pentanol-toluene.b_ji  447.490982969;
    }

    evidence
    {
        partitionFingerprint  "1c7e1fbe4ffa908c";   // frozen before the fit

        datasets
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

        domain
        {
            coordinate  x1;
            fit         { min 0.0498; max 0.9509; n 24; }
        }
    }

    metrics
    {
        //  r2InSample: not computed by this operation (it reports chi-square).
        //  NO HELD-OUT METRIC EXISTS.  r2InSample above is exactly that --
        //  in-sample -- and must not be read as an external check.
    }
}

{
    property       binaryVLE.P_bubble;
    operation      fit_nrtl_start2;   // type fitParameters
    model          "binary pair, relative bubble-P residual at fixed T";
    verdict        validationRefused;
    refusal        "No independent experimental evidence remains after fitting.";

    fittedParameters
    {
        equilibrium.liquid.activityModel.binaryParameters.2Pentanol-toluene.b_ij  34.292864425;
        equilibrium.liquid.activityModel.binaryParameters.2Pentanol-toluene.b_ji  447.490983057;
    }

    evidence
    {
        partitionFingerprint  "1c7e1fbe4ffa908c";   // frozen before the fit

        datasets
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

        domain
        {
            coordinate  x1;
            fit         { min 0.0498; max 0.9509; n 24; }
        }
    }

    metrics
    {
        //  r2InSample: not computed by this operation (it reports chi-square).
        //  NO HELD-OUT METRIC EXISTS.  r2InSample above is exactly that --
        //  in-sample -- and must not be read as an external check.
    }
}

);
`,Ft=`/*--------------------------------*- Choupo -*--------------------------------*\\
  CURATION DOSSIER -- a scientific work record, NOT runtime property data.

  NOTHING IN THIS FILE IS VISIBLE TO THE SOLVER.  Record resolution looks only
  in <case>/constant/, data/standards/ and data/local/, so a file here is out
  of its reach BY CONSTRUCTION -- not by convention.

  Nothing here has been promoted.  Curation state belongs to the evidence
  process; runtime trust belongs to the numerical record actually admitted
  to data/standards/, and only an explicit human promotion moves one there
  (bin/curate/promote-from-dossier).

  MATURITY IS PER PROPERTY, not per component: the properties below may hold
  different verdicts, and any whole-component summary is DERIVED from them
  rather than stored beside them.

  Regenerated on every run.  Hand edits are lost.
\\*-----------------------------------------------------------------------------*/

component      Dichloroethane;
reviewStatus   unreviewed;

properties
(
{
    property       binaryVLE.P_bubble;
    operation      fit_nrtl;   // type fitParameters
    model          "binary pair, relative bubble-P residual at fixed T";
    verdict        validationRefused;
    refusal        "No independent experimental evidence remains after fitting.";

    fittedParameters
    {
        equilibrium.liquid.activityModel.binaryParameters.Dichloroethane-ethylAcetate.b_ij  -100.644279443;
        equilibrium.liquid.activityModel.binaryParameters.Dichloroethane-ethylAcetate.b_ji  43.9299310383;
    }

    evidence
    {
        partitionFingerprint  "371671498ac1a0aa";   // frozen before the fit

        datasets
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

        domain
        {
            coordinate  x1;
            fit         { min 0.1523; max 0.9782; n 18; }
        }
    }

    metrics
    {
        //  r2InSample: not computed by this operation (it reports chi-square).
        //  NO HELD-OUT METRIC EXISTS.  r2InSample above is exactly that --
        //  in-sample -- and must not be read as an external check.
    }
}

{
    property       binaryVLE.P_bubble;
    operation      fit_nrtl_start2;   // type fitParameters
    model          "binary pair, relative bubble-P residual at fixed T";
    verdict        validationRefused;
    refusal        "No independent experimental evidence remains after fitting.";

    fittedParameters
    {
        equilibrium.liquid.activityModel.binaryParameters.Dichloroethane-ethylAcetate.b_ij  451.596661392;
        equilibrium.liquid.activityModel.binaryParameters.Dichloroethane-ethylAcetate.b_ji  -357.718319186;
    }

    evidence
    {
        partitionFingerprint  "371671498ac1a0aa";   // frozen before the fit

        datasets
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

        domain
        {
            coordinate  x1;
            fit         { min 0.1523; max 0.9782; n 18; }
        }
    }

    metrics
    {
        //  r2InSample: not computed by this operation (it reports chi-square).
        //  NO HELD-OUT METRIC EXISTS.  r2InSample above is exactly that --
        //  in-sample -- and must not be read as an external check.
    }
}

);
`,wt=`/*--------------------------------*- Choupo -*--------------------------------*\\
  CURATION DOSSIER -- a scientific work record, NOT runtime property data.

  NOTHING IN THIS FILE IS VISIBLE TO THE SOLVER.  Record resolution looks only
  in <case>/constant/, data/standards/ and data/local/, so a file here is out
  of its reach BY CONSTRUCTION -- not by convention.

  Nothing here has been promoted.  Curation state belongs to the evidence
  process; runtime trust belongs to the numerical record actually admitted
  to data/standards/, and only an explicit human promotion moves one there
  (bin/curate/promote-from-dossier).

  MATURITY IS PER PROPERTY, not per component: the properties below may hold
  different verdicts, and any whole-component summary is DERIVED from them
  rather than stored beside them.

  Regenerated on every run.  Hand edits are lost.
\\*-----------------------------------------------------------------------------*/

component      acetone;
reviewStatus   unreviewed;

properties
(
{
    property       binaryVLE.T_bubble;
    operation      fit_nrtl;   // type fitParameters
    model          "NRTL binary pair, bubble-T residual at fixed P";
    verdict        validationRefused;
    refusal        "No independent experimental evidence remains after fitting.";

    fittedParameters
    {
        equilibrium.liquid.activityModel.binaryParameters.acetone-methanol.b_ij  103.586152881;
        equilibrium.liquid.activityModel.binaryParameters.acetone-methanol.b_ji  112.549705917;
    }

    evidence
    {
        partitionFingerprint  "482058beda317298";   // frozen before the fit

        datasets
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

        domain
        {
            coordinate  x1;
            fit         { min 0.015; max 0.972; n 156; }
        }
    }

    metrics
    {
        //  r2InSample: not computed by this operation (it reports chi-square).
        //  NO HELD-OUT METRIC EXISTS.  r2InSample above is exactly that --
        //  in-sample -- and must not be read as an external check.
    }
}

{
    property       binaryVLE.T_bubble;
    operation      fit_nrtl_start2;   // type fitParameters
    model          "NRTL binary pair, bubble-T residual at fixed P";
    verdict        validationRefused;
    refusal        "No independent experimental evidence remains after fitting.";

    fittedParameters
    {
        equilibrium.liquid.activityModel.binaryParameters.acetone-methanol.b_ij  103.586154136;
        equilibrium.liquid.activityModel.binaryParameters.acetone-methanol.b_ji  112.549704752;
    }

    evidence
    {
        partitionFingerprint  "482058beda317298";   // frozen before the fit

        datasets
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

        domain
        {
            coordinate  x1;
            fit         { min 0.015; max 0.972; n 156; }
        }
    }

    metrics
    {
        //  r2InSample: not computed by this operation (it reports chi-square).
        //  NO HELD-OUT METRIC EXISTS.  r2InSample above is exactly that --
        //  in-sample -- and must not be read as an external check.
    }
}

);
`,Mt=`/*--------------------------------*- Choupo -*--------------------------------*\\
  CURATION DOSSIER -- a scientific work record, NOT runtime property data.

  NOTHING IN THIS FILE IS VISIBLE TO THE SOLVER.  Record resolution looks only
  in <case>/constant/, data/standards/ and data/local/, so a file here is out
  of its reach BY CONSTRUCTION -- not by convention.

  Nothing here has been promoted.  Curation state belongs to the evidence
  process; runtime trust belongs to the numerical record actually admitted
  to data/standards/, and only an explicit human promotion moves one there
  (bin/curate/promote-from-dossier).

  MATURITY IS PER PROPERTY, not per component: the properties below may hold
  different verdicts, and any whole-component summary is DERIVED from them
  rather than stored beside them.

  Regenerated on every run.  Hand edits are lost.
\\*-----------------------------------------------------------------------------*/

component      ethanol;
reviewStatus   unreviewed;

properties
(
{
    property       binaryVLE.P_bubble;
    operation      fit_nrtl;   // type fitParameters
    model          "binary pair, relative bubble-P residual at fixed T";
    verdict        validationRefused;
    refusal        "No independent experimental evidence remains after fitting.";

    fittedParameters
    {
        equilibrium.liquid.activityModel.binaryParameters.ethanol-acetonitrile.b_ij  504.916314024;
        equilibrium.liquid.activityModel.binaryParameters.ethanol-acetonitrile.b_ji  -34.320322072;
    }

    evidence
    {
        partitionFingerprint  "563279132b3faee8";   // frozen before the fit

        datasets
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

        domain
        {
            coordinate  x1;
            fit         { min 0.0839; max 0.9219; n 34; }
        }
    }

    metrics
    {
        //  r2InSample: not computed by this operation (it reports chi-square).
        //  NO HELD-OUT METRIC EXISTS.  r2InSample above is exactly that --
        //  in-sample -- and must not be read as an external check.
    }
}

{
    property       binaryVLE.P_bubble;
    operation      fit_nrtl_start2;   // type fitParameters
    model          "binary pair, relative bubble-P residual at fixed T";
    verdict        validationRefused;
    refusal        "No independent experimental evidence remains after fitting.";

    fittedParameters
    {
        equilibrium.liquid.activityModel.binaryParameters.ethanol-acetonitrile.b_ij  504.916314105;
        equilibrium.liquid.activityModel.binaryParameters.ethanol-acetonitrile.b_ji  -34.3203219716;
    }

    evidence
    {
        partitionFingerprint  "563279132b3faee8";   // frozen before the fit

        datasets
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

        domain
        {
            coordinate  x1;
            fit         { min 0.0839; max 0.9219; n 34; }
        }
    }

    metrics
    {
        //  r2InSample: not computed by this operation (it reports chi-square).
        //  NO HELD-OUT METRIC EXISTS.  r2InSample above is exactly that --
        //  in-sample -- and must not be read as an external check.
    }
}

);
`,Bt=`/*--------------------------------*- Choupo -*--------------------------------*\\
  CURATION DOSSIER -- a scientific work record, NOT runtime property data.

  NOTHING IN THIS FILE IS VISIBLE TO THE SOLVER.  Record resolution looks only
  in <case>/constant/, data/standards/ and data/local/, so a file here is out
  of its reach BY CONSTRUCTION -- not by convention.

  Nothing here has been promoted.  Curation state belongs to the evidence
  process; runtime trust belongs to the numerical record actually admitted
  to data/standards/, and only an explicit human promotion moves one there
  (bin/curate/promote-from-dossier).

  MATURITY IS PER PROPERTY, not per component: the properties below may hold
  different verdicts, and any whole-component summary is DERIVED from them
  rather than stored beside them.

  Regenerated on every run.  Hand edits are lost.
\\*-----------------------------------------------------------------------------*/

component      ethylAcetate;
reviewStatus   unreviewed;

properties
(
{
    property       binaryVLE.T_bubble;
    operation      fit_nrtl;   // type fitParameters
    model          "NRTL binary pair, bubble-T residual at fixed P";
    verdict        validationRefused;
    refusal        "No independent experimental evidence remains after fitting.";

    fittedParameters
    {
        equilibrium.liquid.activityModel.binaryParameters.ethylAcetate-acetonitrile.b_ij  -23.8596530036;
        equilibrium.liquid.activityModel.binaryParameters.ethylAcetate-acetonitrile.b_ji  215.211151254;
    }

    evidence
    {
        partitionFingerprint  "ca94d65a80010b2d";   // frozen before the fit

        datasets
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

        domain
        {
            coordinate  x1;
            fit         { min 0.048; max 0.947; n 30; }
        }
    }

    metrics
    {
        //  r2InSample: not computed by this operation (it reports chi-square).
        //  NO HELD-OUT METRIC EXISTS.  r2InSample above is exactly that --
        //  in-sample -- and must not be read as an external check.
    }
}

{
    property       binaryVLE.T_bubble;
    operation      fit_nrtl_start2;   // type fitParameters
    model          "NRTL binary pair, bubble-T residual at fixed P";
    verdict        validationRefused;
    refusal        "No independent experimental evidence remains after fitting.";

    fittedParameters
    {
        equilibrium.liquid.activityModel.binaryParameters.ethylAcetate-acetonitrile.b_ij  -23.8596535548;
        equilibrium.liquid.activityModel.binaryParameters.ethylAcetate-acetonitrile.b_ji  215.211151886;
    }

    evidence
    {
        partitionFingerprint  "ca94d65a80010b2d";   // frozen before the fit

        datasets
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

        domain
        {
            coordinate  x1;
            fit         { min 0.048; max 0.947; n 30; }
        }
    }

    metrics
    {
        //  r2InSample: not computed by this operation (it reports chi-square).
        //  NO HELD-OUT METRIC EXISTS.  r2InSample above is exactly that --
        //  in-sample -- and must not be read as an external check.
    }
}

);
`,Ut=`/*--------------------------------*- Choupo -*--------------------------------*\\
  CURATION DOSSIER -- a scientific work record, NOT runtime property data.

  NOTHING IN THIS FILE IS VISIBLE TO THE SOLVER.  Record resolution looks only
  in <case>/constant/, data/standards/ and data/local/, so a file here is out
  of its reach BY CONSTRUCTION -- not by convention.

  Nothing here has been promoted.  Curation state belongs to the evidence
  process; runtime trust belongs to the numerical record actually admitted
  to data/standards/, and only an explicit human promotion moves one there
  (bin/curate/promote-from-dossier).

  MATURITY IS PER PROPERTY, not per component: the properties below may hold
  different verdicts, and any whole-component summary is DERIVED from them
  rather than stored beside them.

  Regenerated on every run.  Hand edits are lost.
\\*-----------------------------------------------------------------------------*/

component      acetonitrile;
reviewStatus   unreviewed;

properties
(
{
    property       binaryVLE.T_bubble;
    operation      fit_nrtl;   // type fitParameters
    model          "NRTL binary pair, bubble-T residual at fixed P";
    verdict        validationRefused;
    refusal        "No independent experimental evidence remains after fitting.";

    fittedParameters
    {
        equilibrium.liquid.activityModel.binaryParameters.acetonitrile-isopropanol.b_ij  1.55992990202;
        equilibrium.liquid.activityModel.binaryParameters.acetonitrile-isopropanol.b_ji  378.947178664;
    }

    evidence
    {
        partitionFingerprint  "e01593cb2bb85f6d";   // frozen before the fit

        datasets
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

        domain
        {
            coordinate  x1;
            fit         { min 0.035; max 0.967; n 20; }
        }
    }

    metrics
    {
        //  r2InSample: not computed by this operation (it reports chi-square).
        //  NO HELD-OUT METRIC EXISTS.  r2InSample above is exactly that --
        //  in-sample -- and must not be read as an external check.
    }
}

{
    property       binaryVLE.T_bubble;
    operation      fit_nrtl_start2;   // type fitParameters
    model          "NRTL binary pair, bubble-T residual at fixed P";
    verdict        validationRefused;
    refusal        "No independent experimental evidence remains after fitting.";

    fittedParameters
    {
        equilibrium.liquid.activityModel.binaryParameters.acetonitrile-isopropanol.b_ij  1.55992984821;
        equilibrium.liquid.activityModel.binaryParameters.acetonitrile-isopropanol.b_ji  378.94717872;
    }

    evidence
    {
        partitionFingerprint  "e01593cb2bb85f6d";   // frozen before the fit

        datasets
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

        domain
        {
            coordinate  x1;
            fit         { min 0.035; max 0.967; n 20; }
        }
    }

    metrics
    {
        //  r2InSample: not computed by this operation (it reports chi-square).
        //  NO HELD-OUT METRIC EXISTS.  r2InSample above is exactly that --
        //  in-sample -- and must not be read as an external check.
    }
}

);
`,Vt=`/*--------------------------------*- Choupo -*--------------------------------*\\
  CURATION DOSSIER -- a scientific work record, NOT runtime property data.

  NOTHING IN THIS FILE IS VISIBLE TO THE SOLVER.  Record resolution looks only
  in <case>/constant/, data/standards/ and data/local/, so a file here is out
  of its reach BY CONSTRUCTION -- not by convention.

  Nothing here has been promoted.  Curation state belongs to the evidence
  process; runtime trust belongs to the numerical record actually admitted
  to data/standards/, and only an explicit human promotion moves one there
  (bin/curate/promote-from-dossier).

  MATURITY IS PER PROPERTY, not per component: the properties below may hold
  different verdicts, and any whole-component summary is DERIVED from them
  rather than stored beside them.

  Regenerated on every run.  Hand edits are lost.
\\*-----------------------------------------------------------------------------*/

component      acetonitrile;
reviewStatus   unreviewed;

properties
(
{
    property       binaryVLE.T_bubble;
    operation      fit_nrtl;   // type fitParameters
    model          "NRTL binary pair, bubble-T residual at fixed P";
    verdict        validationRefused;
    refusal        "No independent experimental evidence remains after fitting.";

    fittedParameters
    {
        equilibrium.liquid.activityModel.binaryParameters.acetonitrile-methanol.b_ij  351.450556036;
        equilibrium.liquid.activityModel.binaryParameters.acetonitrile-methanol.b_ji  -20.0515818547;
    }

    evidence
    {
        partitionFingerprint  "bbbe9eec64c2c576";   // frozen before the fit

        datasets
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

        domain
        {
            coordinate  x1;
            fit         { min 0.005; max 0.958; n 51; }
        }
    }

    metrics
    {
        //  r2InSample: not computed by this operation (it reports chi-square).
        //  NO HELD-OUT METRIC EXISTS.  r2InSample above is exactly that --
        //  in-sample -- and must not be read as an external check.
    }
}

{
    property       binaryVLE.T_bubble;
    operation      fit_nrtl_start2;   // type fitParameters
    model          "NRTL binary pair, bubble-T residual at fixed P";
    verdict        validationRefused;
    refusal        "No independent experimental evidence remains after fitting.";

    fittedParameters
    {
        equilibrium.liquid.activityModel.binaryParameters.acetonitrile-methanol.b_ij  351.450557583;
        equilibrium.liquid.activityModel.binaryParameters.acetonitrile-methanol.b_ji  -20.0515826932;
    }

    evidence
    {
        partitionFingerprint  "bbbe9eec64c2c576";   // frozen before the fit

        datasets
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

        domain
        {
            coordinate  x1;
            fit         { min 0.005; max 0.958; n 51; }
        }
    }

    metrics
    {
        //  r2InSample: not computed by this operation (it reports chi-square).
        //  NO HELD-OUT METRIC EXISTS.  r2InSample above is exactly that --
        //  in-sample -- and must not be read as an external check.
    }
}

);
`,At=`/*--------------------------------*- Choupo -*--------------------------------*\\
  CURATION DOSSIER -- a scientific work record, NOT runtime property data.

  NOTHING IN THIS FILE IS VISIBLE TO THE SOLVER.  Record resolution looks only
  in <case>/constant/, data/standards/ and data/local/, so a file here is out
  of its reach BY CONSTRUCTION -- not by convention.

  Nothing here has been promoted.  Curation state belongs to the evidence
  process; runtime trust belongs to the numerical record actually admitted
  to data/standards/, and only an explicit human promotion moves one there
  (bin/curate/promote-from-dossier).

  MATURITY IS PER PROPERTY, not per component: the properties below may hold
  different verdicts, and any whole-component summary is DERIVED from them
  rather than stored beside them.

  Regenerated on every run.  Hand edits are lost.
\\*-----------------------------------------------------------------------------*/

component      nNDimethylformamide;
reviewStatus   unreviewed;

properties
(
{
    property       binaryVLE.T_bubble;
    operation      fit_nrtl;   // type fitParameters
    model          "NRTL binary pair, bubble-T residual at fixed P";
    verdict        validationRefused;
    refusal        "No independent experimental evidence remains after fitting.";

    fittedParameters
    {
        equilibrium.liquid.activityModel.binaryParameters.nNDimethylformamide-aniline.b_ij  580.182176787;
        equilibrium.liquid.activityModel.binaryParameters.nNDimethylformamide-aniline.b_ji  -629.649147471;
    }

    evidence
    {
        partitionFingerprint  "29d21dabb52ec059";   // frozen before the fit

        datasets
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

        domain
        {
            coordinate  x1;
            fit         { min 0.0696; max 0.9706; n 27; }
        }
    }

    metrics
    {
        //  r2InSample: not computed by this operation (it reports chi-square).
        //  NO HELD-OUT METRIC EXISTS.  r2InSample above is exactly that --
        //  in-sample -- and must not be read as an external check.
    }
}

{
    property       binaryVLE.T_bubble;
    operation      fit_nrtl_start2;   // type fitParameters
    model          "NRTL binary pair, bubble-T residual at fixed P";
    verdict        validationRefused;
    refusal        "No independent experimental evidence remains after fitting.";

    fittedParameters
    {
        equilibrium.liquid.activityModel.binaryParameters.nNDimethylformamide-aniline.b_ij  580.258273651;
        equilibrium.liquid.activityModel.binaryParameters.nNDimethylformamide-aniline.b_ji  -629.683117987;
    }

    evidence
    {
        partitionFingerprint  "29d21dabb52ec059";   // frozen before the fit

        datasets
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

        domain
        {
            coordinate  x1;
            fit         { min 0.0696; max 0.9706; n 27; }
        }
    }

    metrics
    {
        //  r2InSample: not computed by this operation (it reports chi-square).
        //  NO HELD-OUT METRIC EXISTS.  r2InSample above is exactly that --
        //  in-sample -- and must not be read as an external check.
    }
}

);
`,kt=`/*--------------------------------*- Choupo -*--------------------------------*\\
  CURATION DOSSIER -- a scientific work record, NOT runtime property data.

  NOTHING IN THIS FILE IS VISIBLE TO THE SOLVER.  Record resolution looks only
  in <case>/constant/, data/standards/ and data/local/, so a file here is out
  of its reach BY CONSTRUCTION -- not by convention.

  Nothing here has been promoted.  Curation state belongs to the evidence
  process; runtime trust belongs to the numerical record actually admitted
  to data/standards/, and only an explicit human promotion moves one there
  (bin/curate/promote-from-dossier).

  MATURITY IS PER PROPERTY, not per component: the properties below may hold
  different verdicts, and any whole-component summary is DERIVED from them
  rather than stored beside them.

  Regenerated on every run.  Hand edits are lost.
\\*-----------------------------------------------------------------------------*/

component      nOctane;
reviewStatus   unreviewed;

properties
(
{
    property       binaryVLE.P_bubble;
    operation      fit_nrtl;   // type fitParameters
    model          "binary pair, relative bubble-P residual at fixed T";
    verdict        validationRefused;
    refusal        "No independent experimental evidence remains after fitting.";

    fittedParameters
    {
        equilibrium.liquid.activityModel.binaryParameters.nOctane-aniline.b_ij  259.743010041;
        equilibrium.liquid.activityModel.binaryParameters.nOctane-aniline.b_ji  679.231371657;
    }

    evidence
    {
        partitionFingerprint  "5d96066705b656fe";   // frozen before the fit

        datasets
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

        domain
        {
            coordinate  x1;
            fit         { min 0.089; max 0.938; n 19; }
        }
    }

    metrics
    {
        //  r2InSample: not computed by this operation (it reports chi-square).
        //  NO HELD-OUT METRIC EXISTS.  r2InSample above is exactly that --
        //  in-sample -- and must not be read as an external check.
    }
}

{
    property       binaryVLE.P_bubble;
    operation      fit_nrtl_start2;   // type fitParameters
    model          "binary pair, relative bubble-P residual at fixed T";
    verdict        validationRefused;
    refusal        "No independent experimental evidence remains after fitting.";

    fittedParameters
    {
        equilibrium.liquid.activityModel.binaryParameters.nOctane-aniline.b_ij  259.743023683;
        equilibrium.liquid.activityModel.binaryParameters.nOctane-aniline.b_ji  679.231323933;
    }

    evidence
    {
        partitionFingerprint  "5d96066705b656fe";   // frozen before the fit

        datasets
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

        domain
        {
            coordinate  x1;
            fit         { min 0.089; max 0.938; n 19; }
        }
    }

    metrics
    {
        //  r2InSample: not computed by this operation (it reports chi-square).
        //  NO HELD-OUT METRIC EXISTS.  r2InSample above is exactly that --
        //  in-sample -- and must not be read as an external check.
    }
}

);
`,Yt=`/*--------------------------------*- Choupo -*--------------------------------*\\
  CURATION DOSSIER -- a scientific work record, NOT runtime property data.

  NOTHING IN THIS FILE IS VISIBLE TO THE SOLVER.  Record resolution looks only
  in <case>/constant/, data/standards/ and data/local/, so a file here is out
  of its reach BY CONSTRUCTION -- not by convention.

  Nothing here has been promoted.  Curation state belongs to the evidence
  process; runtime trust belongs to the numerical record actually admitted
  to data/standards/, and only an explicit human promotion moves one there
  (bin/curate/promote-from-dossier).

  MATURITY IS PER PROPERTY, not per component: the properties below may hold
  different verdicts, and any whole-component summary is DERIVED from them
  rather than stored beside them.

  Regenerated on every run.  Hand edits are lost.
\\*-----------------------------------------------------------------------------*/

component      nHexane;
reviewStatus   unreviewed;

properties
(
{
    property       binaryVLE.P_bubble;
    operation      fit_nrtl;   // type fitParameters
    model          "binary pair, relative bubble-P residual at fixed T";
    verdict        validationRefused;
    refusal        "No independent experimental evidence remains after fitting.";

    fittedParameters
    {
        equilibrium.liquid.activityModel.binaryParameters.nHexane-anisole.b_ij  1017.04314971;
        equilibrium.liquid.activityModel.binaryParameters.nHexane-anisole.b_ji  -324.500446268;
    }

    evidence
    {
        partitionFingerprint  "76d0bde3e895b500";   // frozen before the fit

        datasets
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

        domain
        {
            coordinate  x1;
            fit         { min 0.063; max 0.935; n 16; }
        }
    }

    metrics
    {
        //  r2InSample: not computed by this operation (it reports chi-square).
        //  NO HELD-OUT METRIC EXISTS.  r2InSample above is exactly that --
        //  in-sample -- and must not be read as an external check.
    }
}

{
    property       binaryVLE.P_bubble;
    operation      fit_nrtl_start2;   // type fitParameters
    model          "binary pair, relative bubble-P residual at fixed T";
    verdict        validationRefused;
    refusal        "No independent experimental evidence remains after fitting.";

    fittedParameters
    {
        equilibrium.liquid.activityModel.binaryParameters.nHexane-anisole.b_ij  1017.04316745;
        equilibrium.liquid.activityModel.binaryParameters.nHexane-anisole.b_ji  -324.500450249;
    }

    evidence
    {
        partitionFingerprint  "76d0bde3e895b500";   // frozen before the fit

        datasets
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

        domain
        {
            coordinate  x1;
            fit         { min 0.063; max 0.935; n 16; }
        }
    }

    metrics
    {
        //  r2InSample: not computed by this operation (it reports chi-square).
        //  NO HELD-OUT METRIC EXISTS.  r2InSample above is exactly that --
        //  in-sample -- and must not be read as an external check.
    }
}

);
`,zt=`/*--------------------------------*- Choupo -*--------------------------------*\\
  CURATION DOSSIER -- a scientific work record, NOT runtime property data.

  NOTHING IN THIS FILE IS VISIBLE TO THE SOLVER.  Record resolution looks only
  in <case>/constant/, data/standards/ and data/local/, so a file here is out
  of its reach BY CONSTRUCTION -- not by convention.

  Nothing here has been promoted.  Curation state belongs to the evidence
  process; runtime trust belongs to the numerical record actually admitted
  to data/standards/, and only an explicit human promotion moves one there
  (bin/curate/promote-from-dossier).

  MATURITY IS PER PROPERTY, not per component: the properties below may hold
  different verdicts, and any whole-component summary is DERIVED from them
  rather than stored beside them.

  Regenerated on every run.  Hand edits are lost.
\\*-----------------------------------------------------------------------------*/

component      diisopropylEther;
reviewStatus   unreviewed;

properties
(
{
    property       binaryVLE.P_bubble;
    operation      fit_nrtl;   // type fitParameters
    model          "binary pair, relative bubble-P residual at fixed T";
    verdict        validationRefused;
    refusal        "No independent experimental evidence remains after fitting.";

    fittedParameters
    {
        equilibrium.liquid.activityModel.binaryParameters.diisopropylEther-benzene.b_ij  -289.921700804;
        equilibrium.liquid.activityModel.binaryParameters.diisopropylEther-benzene.b_ji  483.010433277;
    }

    evidence
    {
        partitionFingerprint  "2a274ac4bc9c09ce";   // frozen before the fit

        datasets
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

        domain
        {
            coordinate  x1;
            fit         { min 0.0504; max 0.9999; n 27; }
        }
    }

    metrics
    {
        //  r2InSample: not computed by this operation (it reports chi-square).
        //  NO HELD-OUT METRIC EXISTS.  r2InSample above is exactly that --
        //  in-sample -- and must not be read as an external check.
    }
}

{
    property       binaryVLE.P_bubble;
    operation      fit_nrtl_start2;   // type fitParameters
    model          "binary pair, relative bubble-P residual at fixed T";
    verdict        validationRefused;
    refusal        "No independent experimental evidence remains after fitting.";

    fittedParameters
    {
        equilibrium.liquid.activityModel.binaryParameters.diisopropylEther-benzene.b_ij  -289.920382558;
        equilibrium.liquid.activityModel.binaryParameters.diisopropylEther-benzene.b_ji  483.007968276;
    }

    evidence
    {
        partitionFingerprint  "2a274ac4bc9c09ce";   // frozen before the fit

        datasets
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

        domain
        {
            coordinate  x1;
            fit         { min 0.0504; max 0.9999; n 27; }
        }
    }

    metrics
    {
        //  r2InSample: not computed by this operation (it reports chi-square).
        //  NO HELD-OUT METRIC EXISTS.  r2InSample above is exactly that --
        //  in-sample -- and must not be read as an external check.
    }
}

);
`,Xt=`/*--------------------------------*- Choupo -*--------------------------------*\\
  CURATION DOSSIER -- a scientific work record, NOT runtime property data.

  NOTHING IN THIS FILE IS VISIBLE TO THE SOLVER.  Record resolution looks only
  in <case>/constant/, data/standards/ and data/local/, so a file here is out
  of its reach BY CONSTRUCTION -- not by convention.

  Nothing here has been promoted.  Curation state belongs to the evidence
  process; runtime trust belongs to the numerical record actually admitted
  to data/standards/, and only an explicit human promotion moves one there
  (bin/curate/promote-from-dossier).

  MATURITY IS PER PROPERTY, not per component: the properties below may hold
  different verdicts, and any whole-component summary is DERIVED from them
  rather than stored beside them.

  Regenerated on every run.  Hand edits are lost.
\\*-----------------------------------------------------------------------------*/

component      benzene;
reviewStatus   unreviewed;

properties
(
{
    property       binaryVLE.P_bubble;
    operation      fit_nrtl;   // type fitParameters
    model          "binary pair, relative bubble-P residual at fixed T";
    verdict        validationRefused;
    refusal        "No independent experimental evidence remains after fitting.";

    fittedParameters
    {
        equilibrium.liquid.activityModel.binaryParameters.benzene-isopropanol.b_ij  536.35965818;
        equilibrium.liquid.activityModel.binaryParameters.benzene-isopropanol.b_ji  103.809155438;
    }

    evidence
    {
        partitionFingerprint  "d8dd674659e6ee32";   // frozen before the fit

        datasets
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

        domain
        {
            coordinate  x1;
            fit         { min 0.0594; max 0.9468; n 24; }
        }
    }

    metrics
    {
        //  r2InSample: not computed by this operation (it reports chi-square).
        //  NO HELD-OUT METRIC EXISTS.  r2InSample above is exactly that --
        //  in-sample -- and must not be read as an external check.
    }
}

{
    property       binaryVLE.P_bubble;
    operation      fit_nrtl_start2;   // type fitParameters
    model          "binary pair, relative bubble-P residual at fixed T";
    verdict        validationRefused;
    refusal        "No independent experimental evidence remains after fitting.";

    fittedParameters
    {
        equilibrium.liquid.activityModel.binaryParameters.benzene-isopropanol.b_ij  536.359662924;
        equilibrium.liquid.activityModel.binaryParameters.benzene-isopropanol.b_ji  103.809154067;
    }

    evidence
    {
        partitionFingerprint  "d8dd674659e6ee32";   // frozen before the fit

        datasets
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

        domain
        {
            coordinate  x1;
            fit         { min 0.0594; max 0.9468; n 24; }
        }
    }

    metrics
    {
        //  r2InSample: not computed by this operation (it reports chi-square).
        //  NO HELD-OUT METRIC EXISTS.  r2InSample above is exactly that --
        //  in-sample -- and must not be read as an external check.
    }
}

);
`,Gt=`/*--------------------------------*- Choupo -*--------------------------------*\\
  CURATION DOSSIER -- a scientific work record, NOT runtime property data.

  NOTHING IN THIS FILE IS VISIBLE TO THE SOLVER.  Record resolution looks only
  in <case>/constant/, data/standards/ and data/local/, so a file here is out
  of its reach BY CONSTRUCTION -- not by convention.

  Nothing here has been promoted.  Curation state belongs to the evidence
  process; runtime trust belongs to the numerical record actually admitted
  to data/standards/, and only an explicit human promotion moves one there
  (bin/curate/promote-from-dossier).

  MATURITY IS PER PROPERTY, not per component: the properties below may hold
  different verdicts, and any whole-component summary is DERIVED from them
  rather than stored beside them.

  Regenerated on every run.  Hand edits are lost.
\\*-----------------------------------------------------------------------------*/

component      benzene;
reviewStatus   unreviewed;

properties
(
{
    property       binaryVLE.T_bubble;
    operation      fit_nrtl;   // type fitParameters
    model          "NRTL binary pair, bubble-T residual at fixed P";
    verdict        validationRefused;
    refusal        "No independent experimental evidence remains after fitting.";

    fittedParameters
    {
        equilibrium.liquid.activityModel.binaryParameters.benzene-methanol.b_ij  520.199268891;
        equilibrium.liquid.activityModel.binaryParameters.benzene-methanol.b_ji  239.381210749;
    }

    evidence
    {
        partitionFingerprint  "528077f305f8cdda";   // frozen before the fit

        datasets
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

        domain
        {
            coordinate  x1;
            fit         { min 0.0262; max 0.973; n 23; }
        }
    }

    metrics
    {
        //  r2InSample: not computed by this operation (it reports chi-square).
        //  NO HELD-OUT METRIC EXISTS.  r2InSample above is exactly that --
        //  in-sample -- and must not be read as an external check.
    }
}

{
    property       binaryVLE.T_bubble;
    operation      fit_nrtl_start2;   // type fitParameters
    model          "NRTL binary pair, bubble-T residual at fixed P";
    verdict        validationRefused;
    refusal        "No independent experimental evidence remains after fitting.";

    fittedParameters
    {
        equilibrium.liquid.activityModel.binaryParameters.benzene-methanol.b_ij  520.199268998;
        equilibrium.liquid.activityModel.binaryParameters.benzene-methanol.b_ji  239.381210679;
    }

    evidence
    {
        partitionFingerprint  "528077f305f8cdda";   // frozen before the fit

        datasets
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

        domain
        {
            coordinate  x1;
            fit         { min 0.0262; max 0.973; n 23; }
        }
    }

    metrics
    {
        //  r2InSample: not computed by this operation (it reports chi-square).
        //  NO HELD-OUT METRIC EXISTS.  r2InSample above is exactly that --
        //  in-sample -- and must not be read as an external check.
    }
}

);
`,Kt=`/*--------------------------------*- Choupo -*--------------------------------*\\
  CURATION DOSSIER -- a scientific work record, NOT runtime property data.

  NOTHING IN THIS FILE IS VISIBLE TO THE SOLVER.  Record resolution looks only
  in <case>/constant/, data/standards/ and data/local/, so a file here is out
  of its reach BY CONSTRUCTION -- not by convention.

  Nothing here has been promoted.  Curation state belongs to the evidence
  process; runtime trust belongs to the numerical record actually admitted
  to data/standards/, and only an explicit human promotion moves one there
  (bin/curate/promote-from-dossier).

  MATURITY IS PER PROPERTY, not per component: the properties below may hold
  different verdicts, and any whole-component summary is DERIVED from them
  rather than stored beside them.

  Regenerated on every run.  Hand edits are lost.
\\*-----------------------------------------------------------------------------*/

component      benzene;
reviewStatus   unreviewed;

properties
(
{
    property       binaryVLE.P_bubble;
    operation      fit_nrtl;   // type fitParameters
    model          "binary pair, relative bubble-P residual at fixed T";
    verdict        validationRefused;
    refusal        "No independent experimental evidence remains after fitting.";

    fittedParameters
    {
        equilibrium.liquid.activityModel.binaryParameters.benzene-nButanol.b_ij  466.285687224;
        equilibrium.liquid.activityModel.binaryParameters.benzene-nButanol.b_ji  115.342286182;
    }

    evidence
    {
        partitionFingerprint  "286b7b533a89656b";   // frozen before the fit

        datasets
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

        domain
        {
            coordinate  x1;
            fit         { min 0.059; max 0.9547; n 37; }
        }
    }

    metrics
    {
        //  r2InSample: not computed by this operation (it reports chi-square).
        //  NO HELD-OUT METRIC EXISTS.  r2InSample above is exactly that --
        //  in-sample -- and must not be read as an external check.
    }
}

{
    property       binaryVLE.P_bubble;
    operation      fit_nrtl_start2;   // type fitParameters
    model          "binary pair, relative bubble-P residual at fixed T";
    verdict        validationRefused;
    refusal        "No independent experimental evidence remains after fitting.";

    fittedParameters
    {
        equilibrium.liquid.activityModel.binaryParameters.benzene-nButanol.b_ij  466.285685788;
        equilibrium.liquid.activityModel.binaryParameters.benzene-nButanol.b_ji  115.342286757;
    }

    evidence
    {
        partitionFingerprint  "286b7b533a89656b";   // frozen before the fit

        datasets
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

        domain
        {
            coordinate  x1;
            fit         { min 0.059; max 0.9547; n 37; }
        }
    }

    metrics
    {
        //  r2InSample: not computed by this operation (it reports chi-square).
        //  NO HELD-OUT METRIC EXISTS.  r2InSample above is exactly that --
        //  in-sample -- and must not be read as an external check.
    }
}

);
`,$t=`/*--------------------------------*- Choupo -*--------------------------------*\\
  CURATION DOSSIER -- a scientific work record, NOT runtime property data.

  NOTHING IN THIS FILE IS VISIBLE TO THE SOLVER.  Record resolution looks only
  in <case>/constant/, data/standards/ and data/local/, so a file here is out
  of its reach BY CONSTRUCTION -- not by convention.

  Nothing here has been promoted.  Curation state belongs to the evidence
  process; runtime trust belongs to the numerical record actually admitted
  to data/standards/, and only an explicit human promotion moves one there
  (bin/curate/promote-from-dossier).

  MATURITY IS PER PROPERTY, not per component: the properties below may hold
  different verdicts, and any whole-component summary is DERIVED from them
  rather than stored beside them.

  Regenerated on every run.  Hand edits are lost.
\\*-----------------------------------------------------------------------------*/

component      benzene;
reviewStatus   unreviewed;

properties
(
{
    property       binaryVLE.P_bubble;
    operation      fit_nrtl;   // type fitParameters
    model          "binary pair, relative bubble-P residual at fixed T";
    verdict        validationRefused;
    refusal        "No independent experimental evidence remains after fitting.";

    fittedParameters
    {
        equilibrium.liquid.activityModel.binaryParameters.benzene-nNDimethylacetamide.b_ij  622.461199019;
        equilibrium.liquid.activityModel.binaryParameters.benzene-nNDimethylacetamide.b_ji  -350.041437638;
    }

    evidence
    {
        partitionFingerprint  "84935a94a4188c61";   // frozen before the fit

        datasets
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

        domain
        {
            coordinate  x1;
            fit         { min 0.0013; max 0.9989; n 49; }
        }
    }

    metrics
    {
        //  r2InSample: not computed by this operation (it reports chi-square).
        //  NO HELD-OUT METRIC EXISTS.  r2InSample above is exactly that --
        //  in-sample -- and must not be read as an external check.
    }
}

{
    property       binaryVLE.P_bubble;
    operation      fit_nrtl_start2;   // type fitParameters
    model          "binary pair, relative bubble-P residual at fixed T";
    verdict        validationRefused;
    refusal        "No independent experimental evidence remains after fitting.";

    fittedParameters
    {
        equilibrium.liquid.activityModel.binaryParameters.benzene-nNDimethylacetamide.b_ij  622.461232761;
        equilibrium.liquid.activityModel.binaryParameters.benzene-nNDimethylacetamide.b_ji  -350.041446796;
    }

    evidence
    {
        partitionFingerprint  "84935a94a4188c61";   // frozen before the fit

        datasets
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

        domain
        {
            coordinate  x1;
            fit         { min 0.0013; max 0.9989; n 49; }
        }
    }

    metrics
    {
        //  r2InSample: not computed by this operation (it reports chi-square).
        //  NO HELD-OUT METRIC EXISTS.  r2InSample above is exactly that --
        //  in-sample -- and must not be read as an external check.
    }
}

);
`,Wt=`/*--------------------------------*- Choupo -*--------------------------------*\\
  CURATION DOSSIER -- a scientific work record, NOT runtime property data.

  NOTHING IN THIS FILE IS VISIBLE TO THE SOLVER.  Record resolution looks only
  in <case>/constant/, data/standards/ and data/local/, so a file here is out
  of its reach BY CONSTRUCTION -- not by convention.

  Nothing here has been promoted.  Curation state belongs to the evidence
  process; runtime trust belongs to the numerical record actually admitted
  to data/standards/, and only an explicit human promotion moves one there
  (bin/curate/promote-from-dossier).

  MATURITY IS PER PROPERTY, not per component: the properties below may hold
  different verdicts, and any whole-component summary is DERIVED from them
  rather than stored beside them.

  Regenerated on every run.  Hand edits are lost.
\\*-----------------------------------------------------------------------------*/

component      chloroform;
reviewStatus   unreviewed;

properties
(
{
    property       binaryVLE.P_bubble;
    operation      fit_nrtl;   // type fitParameters
    model          "binary pair, relative bubble-P residual at fixed T";
    verdict        validationRefused;
    refusal        "No independent experimental evidence remains after fitting.";

    fittedParameters
    {
        equilibrium.liquid.activityModel.binaryParameters.chloroform-methylEthylKetone.b_ij  80.8843896598;
        equilibrium.liquid.activityModel.binaryParameters.chloroform-methylEthylKetone.b_ji  -356.529138502;
    }

    evidence
    {
        partitionFingerprint  "4824d651c139622a";   // frozen before the fit

        datasets
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

        domain
        {
            coordinate  x1;
            fit         { min 0.074; max 0.913; n 20; }
        }
    }

    metrics
    {
        //  r2InSample: not computed by this operation (it reports chi-square).
        //  NO HELD-OUT METRIC EXISTS.  r2InSample above is exactly that --
        //  in-sample -- and must not be read as an external check.
    }
}

{
    property       binaryVLE.P_bubble;
    operation      fit_nrtl_start2;   // type fitParameters
    model          "binary pair, relative bubble-P residual at fixed T";
    verdict        validationRefused;
    refusal        "No independent experimental evidence remains after fitting.";

    fittedParameters
    {
        equilibrium.liquid.activityModel.binaryParameters.chloroform-methylEthylKetone.b_ij  738.720507496;
        equilibrium.liquid.activityModel.binaryParameters.chloroform-methylEthylKetone.b_ji  -630.777385524;
    }

    evidence
    {
        partitionFingerprint  "4824d651c139622a";   // frozen before the fit

        datasets
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

        domain
        {
            coordinate  x1;
            fit         { min 0.074; max 0.913; n 20; }
        }
    }

    metrics
    {
        //  r2InSample: not computed by this operation (it reports chi-square).
        //  NO HELD-OUT METRIC EXISTS.  r2InSample above is exactly that --
        //  in-sample -- and must not be read as an external check.
    }
}

);
`,Jt=`/*--------------------------------*- Choupo -*--------------------------------*\\
  CURATION DOSSIER -- a scientific work record, NOT runtime property data.

  NOTHING IN THIS FILE IS VISIBLE TO THE SOLVER.  Record resolution looks only
  in <case>/constant/, data/standards/ and data/local/, so a file here is out
  of its reach BY CONSTRUCTION -- not by convention.

  Nothing here has been promoted.  Curation state belongs to the evidence
  process; runtime trust belongs to the numerical record actually admitted
  to data/standards/, and only an explicit human promotion moves one there
  (bin/curate/promote-from-dossier).

  MATURITY IS PER PROPERTY, not per component: the properties below may hold
  different verdicts, and any whole-component summary is DERIVED from them
  rather than stored beside them.

  Regenerated on every run.  Hand edits are lost.
\\*-----------------------------------------------------------------------------*/

component      chloroform;
reviewStatus   unreviewed;

properties
(
{
    property       binaryVLE.P_bubble;
    operation      fit_nrtl;   // type fitParameters
    model          "binary pair, relative bubble-P residual at fixed T";
    verdict        validationRefused;
    refusal        "No independent experimental evidence remains after fitting.";

    fittedParameters
    {
        equilibrium.liquid.activityModel.binaryParameters.chloroform-methylIsobutylKetone.b_ij  -127.50095067;
        equilibrium.liquid.activityModel.binaryParameters.chloroform-methylIsobutylKetone.b_ji  -249.468099299;
    }

    evidence
    {
        partitionFingerprint  "44bb2422d46e13a3";   // frozen before the fit

        datasets
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

        domain
        {
            coordinate  x1;
            fit         { min 0.0959; max 0.9402; n 14; }
        }
    }

    metrics
    {
        //  r2InSample: not computed by this operation (it reports chi-square).
        //  NO HELD-OUT METRIC EXISTS.  r2InSample above is exactly that --
        //  in-sample -- and must not be read as an external check.
    }
}

{
    property       binaryVLE.P_bubble;
    operation      fit_nrtl_start2;   // type fitParameters
    model          "binary pair, relative bubble-P residual at fixed T";
    verdict        validationRefused;
    refusal        "No independent experimental evidence remains after fitting.";

    fittedParameters
    {
        equilibrium.liquid.activityModel.binaryParameters.chloroform-methylIsobutylKetone.b_ij  1119.89518275;
        equilibrium.liquid.activityModel.binaryParameters.chloroform-methylIsobutylKetone.b_ji  -719.344473465;
    }

    evidence
    {
        partitionFingerprint  "44bb2422d46e13a3";   // frozen before the fit

        datasets
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

        domain
        {
            coordinate  x1;
            fit         { min 0.0959; max 0.9402; n 14; }
        }
    }

    metrics
    {
        //  r2InSample: not computed by this operation (it reports chi-square).
        //  NO HELD-OUT METRIC EXISTS.  r2InSample above is exactly that --
        //  in-sample -- and must not be read as an external check.
    }
}

);
`,Zt=`/*--------------------------------*- Choupo -*--------------------------------*\\
  CURATION DOSSIER -- a scientific work record, NOT runtime property data.

  NOTHING IN THIS FILE IS VISIBLE TO THE SOLVER.  Record resolution looks only
  in <case>/constant/, data/standards/ and data/local/, so a file here is out
  of its reach BY CONSTRUCTION -- not by convention.

  Nothing here has been promoted.  Curation state belongs to the evidence
  process; runtime trust belongs to the numerical record actually admitted
  to data/standards/, and only an explicit human promotion moves one there
  (bin/curate/promote-from-dossier).

  MATURITY IS PER PROPERTY, not per component: the properties below may hold
  different verdicts, and any whole-component summary is DERIVED from them
  rather than stored beside them.

  Regenerated on every run.  Hand edits are lost.
\\*-----------------------------------------------------------------------------*/

component      chloroform;
reviewStatus   unreviewed;

properties
(
{
    property       binaryVLE.P_bubble;
    operation      fit_nrtl;   // type fitParameters
    model          "binary pair, relative bubble-P residual at fixed T";
    verdict        validationRefused;
    refusal        "No independent experimental evidence remains after fitting.";

    fittedParameters
    {
        equilibrium.liquid.activityModel.binaryParameters.chloroform-methylTertButylEther.b_ij  51.2960691528;
        equilibrium.liquid.activityModel.binaryParameters.chloroform-methylTertButylEther.b_ji  -360.186848907;
    }

    evidence
    {
        partitionFingerprint  "eb3ea95196419fdc";   // frozen before the fit

        datasets
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

        domain
        {
            coordinate  x1;
            fit         { min 0.057; max 0.95; n 48; }
        }
    }

    metrics
    {
        //  r2InSample: not computed by this operation (it reports chi-square).
        //  NO HELD-OUT METRIC EXISTS.  r2InSample above is exactly that --
        //  in-sample -- and must not be read as an external check.
    }
}

{
    property       binaryVLE.P_bubble;
    operation      fit_nrtl_start2;   // type fitParameters
    model          "binary pair, relative bubble-P residual at fixed T";
    verdict        validationRefused;
    refusal        "No independent experimental evidence remains after fitting.";

    fittedParameters
    {
        equilibrium.liquid.activityModel.binaryParameters.chloroform-methylTertButylEther.b_ij  882.828924389;
        equilibrium.liquid.activityModel.binaryParameters.chloroform-methylTertButylEther.b_ji  -676.932813259;
    }

    evidence
    {
        partitionFingerprint  "eb3ea95196419fdc";   // frozen before the fit

        datasets
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

        domain
        {
            coordinate  x1;
            fit         { min 0.057; max 0.95; n 48; }
        }
    }

    metrics
    {
        //  r2InSample: not computed by this operation (it reports chi-square).
        //  NO HELD-OUT METRIC EXISTS.  r2InSample above is exactly that --
        //  in-sample -- and must not be read as an external check.
    }
}

);
`,Qt=`/*--------------------------------*- Choupo -*--------------------------------*\\
  CURATION DOSSIER -- a scientific work record, NOT runtime property data.

  NOTHING IN THIS FILE IS VISIBLE TO THE SOLVER.  Record resolution looks only
  in <case>/constant/, data/standards/ and data/local/, so a file here is out
  of its reach BY CONSTRUCTION -- not by convention.

  Nothing here has been promoted.  Curation state belongs to the evidence
  process; runtime trust belongs to the numerical record actually admitted
  to data/standards/, and only an explicit human promotion moves one there
  (bin/curate/promote-from-dossier).

  MATURITY IS PER PROPERTY, not per component: the properties below may hold
  different verdicts, and any whole-component summary is DERIVED from them
  rather than stored beside them.

  Regenerated on every run.  Hand edits are lost.
\\*-----------------------------------------------------------------------------*/

component      cyclohexane;
reviewStatus   unreviewed;

properties
(
{
    property       binaryVLE.T_bubble;
    operation      fit_nrtl;   // type fitParameters
    model          "NRTL binary pair, bubble-T residual at fixed P";
    verdict        validationRefused;
    refusal        "No independent experimental evidence remains after fitting.";

    fittedParameters
    {
        equilibrium.liquid.activityModel.binaryParameters.cyclohexane-cyclohexene.b_ij  601.466088565;
        equilibrium.liquid.activityModel.binaryParameters.cyclohexane-cyclohexene.b_ji  -370.86601673;
    }

    evidence
    {
        partitionFingerprint  "dc212783b0ded590";   // frozen before the fit

        datasets
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

        domain
        {
            coordinate  x1;
            fit         { min 0.0027; max 0.999; n 81; }
        }
    }

    metrics
    {
        //  r2InSample: not computed by this operation (it reports chi-square).
        //  NO HELD-OUT METRIC EXISTS.  r2InSample above is exactly that --
        //  in-sample -- and must not be read as an external check.
    }
}

{
    property       binaryVLE.T_bubble;
    operation      fit_nrtl_start2;   // type fitParameters
    model          "NRTL binary pair, bubble-T residual at fixed P";
    verdict        validationRefused;
    refusal        "No independent experimental evidence remains after fitting.";

    fittedParameters
    {
        equilibrium.liquid.activityModel.binaryParameters.cyclohexane-cyclohexene.b_ij  601.466091481;
        equilibrium.liquid.activityModel.binaryParameters.cyclohexane-cyclohexene.b_ji  -370.86601757;
    }

    evidence
    {
        partitionFingerprint  "dc212783b0ded590";   // frozen before the fit

        datasets
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

        domain
        {
            coordinate  x1;
            fit         { min 0.0027; max 0.999; n 81; }
        }
    }

    metrics
    {
        //  r2InSample: not computed by this operation (it reports chi-square).
        //  NO HELD-OUT METRIC EXISTS.  r2InSample above is exactly that --
        //  in-sample -- and must not be read as an external check.
    }
}

);
`,ea=`/*--------------------------------*- Choupo -*--------------------------------*\\
  CURATION DOSSIER -- a scientific work record, NOT runtime property data.

  NOTHING IN THIS FILE IS VISIBLE TO THE SOLVER.  Record resolution looks only
  in <case>/constant/, data/standards/ and data/local/, so a file here is out
  of its reach BY CONSTRUCTION -- not by convention.

  Nothing here has been promoted.  Curation state belongs to the evidence
  process; runtime trust belongs to the numerical record actually admitted
  to data/standards/, and only an explicit human promotion moves one there
  (bin/curate/promote-from-dossier).

  MATURITY IS PER PROPERTY, not per component: the properties below may hold
  different verdicts, and any whole-component summary is DERIVED from them
  rather than stored beside them.

  Regenerated on every run.  Hand edits are lost.
\\*-----------------------------------------------------------------------------*/

component      diNButylEther;
reviewStatus   unreviewed;

properties
(
{
    property       binaryVLE.P_bubble;
    operation      fit_nrtl;   // type fitParameters
    model          "binary pair, relative bubble-P residual at fixed T";
    verdict        validationRefused;
    refusal        "No independent experimental evidence remains after fitting.";

    fittedParameters
    {
        equilibrium.liquid.activityModel.binaryParameters.diNButylEther-cyclohexane.b_ij  89.7969688587;
        equilibrium.liquid.activityModel.binaryParameters.diNButylEther-cyclohexane.b_ji  -93.7165637474;
    }

    evidence
    {
        partitionFingerprint  "ca3ef93f8ee160a6";   // frozen before the fit

        datasets
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

        domain
        {
            coordinate  x1;
            fit         { min 0.0464; max 0.955; n 26; }
        }
    }

    metrics
    {
        //  r2InSample: not computed by this operation (it reports chi-square).
        //  NO HELD-OUT METRIC EXISTS.  r2InSample above is exactly that --
        //  in-sample -- and must not be read as an external check.
    }
}

{
    property       binaryVLE.P_bubble;
    operation      fit_nrtl_start2;   // type fitParameters
    model          "binary pair, relative bubble-P residual at fixed T";
    verdict        validationRefused;
    refusal        "No independent experimental evidence remains after fitting.";

    fittedParameters
    {
        equilibrium.liquid.activityModel.binaryParameters.diNButylEther-cyclohexane.b_ij  89.7849077704;
        equilibrium.liquid.activityModel.binaryParameters.diNButylEther-cyclohexane.b_ji  -93.7064459508;
    }

    evidence
    {
        partitionFingerprint  "ca3ef93f8ee160a6";   // frozen before the fit

        datasets
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

        domain
        {
            coordinate  x1;
            fit         { min 0.0464; max 0.955; n 26; }
        }
    }

    metrics
    {
        //  r2InSample: not computed by this operation (it reports chi-square).
        //  NO HELD-OUT METRIC EXISTS.  r2InSample above is exactly that --
        //  in-sample -- and must not be read as an external check.
    }
}

);
`,na=`/*--------------------------------*- Choupo -*--------------------------------*\\
  CURATION DOSSIER -- a scientific work record, NOT runtime property data.

  NOTHING IN THIS FILE IS VISIBLE TO THE SOLVER.  Record resolution looks only
  in <case>/constant/, data/standards/ and data/local/, so a file here is out
  of its reach BY CONSTRUCTION -- not by convention.

  Nothing here has been promoted.  Curation state belongs to the evidence
  process; runtime trust belongs to the numerical record actually admitted
  to data/standards/, and only an explicit human promotion moves one there
  (bin/curate/promote-from-dossier).

  MATURITY IS PER PROPERTY, not per component: the properties below may hold
  different verdicts, and any whole-component summary is DERIVED from them
  rather than stored beside them.

  Regenerated on every run.  Hand edits are lost.
\\*-----------------------------------------------------------------------------*/

component      ethanol;
reviewStatus   unreviewed;

properties
(
{
    property       binaryVLE.T_bubble;
    operation      fit_nrtl;   // type fitParameters
    model          "NRTL binary pair, bubble-T residual at fixed P";
    verdict        validationRefused;
    refusal        "No independent experimental evidence remains after fitting.";

    fittedParameters
    {
        equilibrium.liquid.activityModel.binaryParameters.ethanol-cyclohexane.b_ij  437.369896721;
        equilibrium.liquid.activityModel.binaryParameters.ethanol-cyclohexane.b_ji  485.191812851;
    }

    evidence
    {
        partitionFingerprint  "735c09b0df9fc902";   // frozen before the fit

        datasets
        (
        {
            role      fit;
            dataset   "constant/archiveExtracts/ethanol-cyclohexane-bubble-j.fluid.2018.07.013.dat";
            doi       "10.1016/j.fluid.2018.07.013";
            sha256    "bf89dc3bab99040fa861ace6d5ac84da32efae3e49783c85363a7686e5a8eac5";
            provenance measured;
            archiveFile "j.fluid.2018.07.013.xml";
            system    "ethanol + cyclohexane";
            pressure  "101300.000000 Pa";
        }
        {
            role      fit;
            dataset   "constant/archiveExtracts/ethanol-cyclohexane-bubble-j.fluid.2006.01.023.dat";
            doi       "10.1016/j.fluid.2006.01.023";
            sha256    "3c1f4f50a20823bb03b51a17ced7ea20491aa0687bbdf7b0b6715716002dbe16";
            provenance measured;
            archiveFile "j.fluid.2006.01.023.xml";
            system    "ethanol + cyclohexane";
            pressure  "101325.000000 Pa";
        }
        );

        domain
        {
            coordinate  x1;
            fit         { min 0.0102; max 0.9973; n 39; }
        }
    }

    metrics
    {
        //  r2InSample: not computed by this operation (it reports chi-square).
        //  NO HELD-OUT METRIC EXISTS.  r2InSample above is exactly that --
        //  in-sample -- and must not be read as an external check.
    }
}

{
    property       binaryVLE.T_bubble;
    operation      fit_nrtl_start2;   // type fitParameters
    model          "NRTL binary pair, bubble-T residual at fixed P";
    verdict        validationRefused;
    refusal        "No independent experimental evidence remains after fitting.";

    fittedParameters
    {
        equilibrium.liquid.activityModel.binaryParameters.ethanol-cyclohexane.b_ij  437.369895804;
        equilibrium.liquid.activityModel.binaryParameters.ethanol-cyclohexane.b_ji  485.19181356;
    }

    evidence
    {
        partitionFingerprint  "735c09b0df9fc902";   // frozen before the fit

        datasets
        (
        {
            role      fit;
            dataset   "constant/archiveExtracts/ethanol-cyclohexane-bubble-j.fluid.2018.07.013.dat";
            doi       "10.1016/j.fluid.2018.07.013";
            sha256    "bf89dc3bab99040fa861ace6d5ac84da32efae3e49783c85363a7686e5a8eac5";
            provenance measured;
            archiveFile "j.fluid.2018.07.013.xml";
            system    "ethanol + cyclohexane";
            pressure  "101300.000000 Pa";
        }
        {
            role      fit;
            dataset   "constant/archiveExtracts/ethanol-cyclohexane-bubble-j.fluid.2006.01.023.dat";
            doi       "10.1016/j.fluid.2006.01.023";
            sha256    "3c1f4f50a20823bb03b51a17ced7ea20491aa0687bbdf7b0b6715716002dbe16";
            provenance measured;
            archiveFile "j.fluid.2006.01.023.xml";
            system    "ethanol + cyclohexane";
            pressure  "101325.000000 Pa";
        }
        );

        domain
        {
            coordinate  x1;
            fit         { min 0.0102; max 0.9973; n 39; }
        }
    }

    metrics
    {
        //  r2InSample: not computed by this operation (it reports chi-square).
        //  NO HELD-OUT METRIC EXISTS.  r2InSample above is exactly that --
        //  in-sample -- and must not be read as an external check.
    }
}

);
`,ta=`/*--------------------------------*- Choupo -*--------------------------------*\\
  CURATION DOSSIER -- a scientific work record, NOT runtime property data.

  NOTHING IN THIS FILE IS VISIBLE TO THE SOLVER.  Record resolution looks only
  in <case>/constant/, data/standards/ and data/local/, so a file here is out
  of its reach BY CONSTRUCTION -- not by convention.

  Nothing here has been promoted.  Curation state belongs to the evidence
  process; runtime trust belongs to the numerical record actually admitted
  to data/standards/, and only an explicit human promotion moves one there
  (bin/curate/promote-from-dossier).

  MATURITY IS PER PROPERTY, not per component: the properties below may hold
  different verdicts, and any whole-component summary is DERIVED from them
  rather than stored beside them.

  Regenerated on every run.  Hand edits are lost.
\\*-----------------------------------------------------------------------------*/

component      nButanol;
reviewStatus   unreviewed;

properties
(
{
    property       binaryVLE.P_bubble;
    operation      fit_nrtl;   // type fitParameters
    model          "binary pair, relative bubble-P residual at fixed T";
    verdict        validationRefused;
    refusal        "No independent experimental evidence remains after fitting.";

    fittedParameters
    {
        equilibrium.liquid.activityModel.binaryParameters.nButanol-cyclohexane.b_ij  68.121345601;
        equilibrium.liquid.activityModel.binaryParameters.nButanol-cyclohexane.b_ji  628.756924468;
    }

    evidence
    {
        partitionFingerprint  "11f73ee633f40956";   // frozen before the fit

        datasets
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

        domain
        {
            coordinate  x1;
            fit         { min 0.0276; max 0.9533; n 24; }
        }
    }

    metrics
    {
        //  r2InSample: not computed by this operation (it reports chi-square).
        //  NO HELD-OUT METRIC EXISTS.  r2InSample above is exactly that --
        //  in-sample -- and must not be read as an external check.
    }
}

{
    property       binaryVLE.P_bubble;
    operation      fit_nrtl_start2;   // type fitParameters
    model          "binary pair, relative bubble-P residual at fixed T";
    verdict        validationRefused;
    refusal        "No independent experimental evidence remains after fitting.";

    fittedParameters
    {
        equilibrium.liquid.activityModel.binaryParameters.nButanol-cyclohexane.b_ij  68.1213454157;
        equilibrium.liquid.activityModel.binaryParameters.nButanol-cyclohexane.b_ji  628.756924496;
    }

    evidence
    {
        partitionFingerprint  "11f73ee633f40956";   // frozen before the fit

        datasets
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

        domain
        {
            coordinate  x1;
            fit         { min 0.0276; max 0.9533; n 24; }
        }
    }

    metrics
    {
        //  r2InSample: not computed by this operation (it reports chi-square).
        //  NO HELD-OUT METRIC EXISTS.  r2InSample above is exactly that --
        //  in-sample -- and must not be read as an external check.
    }
}

);
`,aa=`/*--------------------------------*- Choupo -*--------------------------------*\\
  CURATION DOSSIER -- a scientific work record, NOT runtime property data.

  NOTHING IN THIS FILE IS VISIBLE TO THE SOLVER.  Record resolution looks only
  in <case>/constant/, data/standards/ and data/local/, so a file here is out
  of its reach BY CONSTRUCTION -- not by convention.

  Nothing here has been promoted.  Curation state belongs to the evidence
  process; runtime trust belongs to the numerical record actually admitted
  to data/standards/, and only an explicit human promotion moves one there
  (bin/curate/promote-from-dossier).

  MATURITY IS PER PROPERTY, not per component: the properties below may hold
  different verdicts, and any whole-component summary is DERIVED from them
  rather than stored beside them.

  Regenerated on every run.  Hand edits are lost.
\\*-----------------------------------------------------------------------------*/

component      cyclohexane;
reviewStatus   unreviewed;

properties
(
{
    property       binaryVLE.T_bubble;
    operation      fit_nrtl;   // type fitParameters
    model          "NRTL binary pair, bubble-T residual at fixed P";
    verdict        validationRefused;
    refusal        "No independent experimental evidence remains after fitting.";

    fittedParameters
    {
        equilibrium.liquid.activityModel.binaryParameters.cyclohexane-nHeptane.b_ij  278.459266129;
        equilibrium.liquid.activityModel.binaryParameters.cyclohexane-nHeptane.b_ji  -197.5539028;
    }

    evidence
    {
        partitionFingerprint  "a5c017788e4cabcf";   // frozen before the fit

        datasets
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

        domain
        {
            coordinate  x1;
            fit         { min 0.0801; max 0.8804; n 19; }
        }
    }

    metrics
    {
        //  r2InSample: not computed by this operation (it reports chi-square).
        //  NO HELD-OUT METRIC EXISTS.  r2InSample above is exactly that --
        //  in-sample -- and must not be read as an external check.
    }
}

{
    property       binaryVLE.T_bubble;
    operation      fit_nrtl_start2;   // type fitParameters
    model          "NRTL binary pair, bubble-T residual at fixed P";
    verdict        validationRefused;
    refusal        "No independent experimental evidence remains after fitting.";

    fittedParameters
    {
        equilibrium.liquid.activityModel.binaryParameters.cyclohexane-nHeptane.b_ij  278.45926358;
        equilibrium.liquid.activityModel.binaryParameters.cyclohexane-nHeptane.b_ji  -197.553901089;
    }

    evidence
    {
        partitionFingerprint  "a5c017788e4cabcf";   // frozen before the fit

        datasets
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

        domain
        {
            coordinate  x1;
            fit         { min 0.0801; max 0.8804; n 19; }
        }
    }

    metrics
    {
        //  r2InSample: not computed by this operation (it reports chi-square).
        //  NO HELD-OUT METRIC EXISTS.  r2InSample above is exactly that --
        //  in-sample -- and must not be read as an external check.
    }
}

);
`,ra=`/*--------------------------------*- Choupo -*--------------------------------*\\
  CURATION DOSSIER -- a scientific work record, NOT runtime property data.

  NOTHING IN THIS FILE IS VISIBLE TO THE SOLVER.  Record resolution looks only
  in <case>/constant/, data/standards/ and data/local/, so a file here is out
  of its reach BY CONSTRUCTION -- not by convention.

  Nothing here has been promoted.  Curation state belongs to the evidence
  process; runtime trust belongs to the numerical record actually admitted
  to data/standards/, and only an explicit human promotion moves one there
  (bin/curate/promote-from-dossier).

  MATURITY IS PER PROPERTY, not per component: the properties below may hold
  different verdicts, and any whole-component summary is DERIVED from them
  rather than stored beside them.

  Regenerated on every run.  Hand edits are lost.
\\*-----------------------------------------------------------------------------*/

component      tertButylEthylEther;
reviewStatus   unreviewed;

properties
(
{
    property       binaryVLE.P_bubble;
    operation      fit_nrtl;   // type fitParameters
    model          "binary pair, relative bubble-P residual at fixed T";
    verdict        validationRefused;
    refusal        "No independent experimental evidence remains after fitting.";

    fittedParameters
    {
        equilibrium.liquid.activityModel.binaryParameters.tertButylEthylEther-cyclohexane.b_ij  470.041083554;
        equilibrium.liquid.activityModel.binaryParameters.tertButylEthylEther-cyclohexane.b_ji  -255.383676786;
    }

    evidence
    {
        partitionFingerprint  "6a845af810601c1f";   // frozen before the fit

        datasets
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

        domain
        {
            coordinate  x1;
            fit         { min 0.0596; max 0.9506; n 24; }
        }
    }

    metrics
    {
        //  r2InSample: not computed by this operation (it reports chi-square).
        //  NO HELD-OUT METRIC EXISTS.  r2InSample above is exactly that --
        //  in-sample -- and must not be read as an external check.
    }
}

{
    property       binaryVLE.P_bubble;
    operation      fit_nrtl_start2;   // type fitParameters
    model          "binary pair, relative bubble-P residual at fixed T";
    verdict        validationRefused;
    refusal        "No independent experimental evidence remains after fitting.";

    fittedParameters
    {
        equilibrium.liquid.activityModel.binaryParameters.tertButylEthylEther-cyclohexane.b_ij  470.041080886;
        equilibrium.liquid.activityModel.binaryParameters.tertButylEthylEther-cyclohexane.b_ji  -255.383675004;
    }

    evidence
    {
        partitionFingerprint  "6a845af810601c1f";   // frozen before the fit

        datasets
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

        domain
        {
            coordinate  x1;
            fit         { min 0.0596; max 0.9506; n 24; }
        }
    }

    metrics
    {
        //  r2InSample: not computed by this operation (it reports chi-square).
        //  NO HELD-OUT METRIC EXISTS.  r2InSample above is exactly that --
        //  in-sample -- and must not be read as an external check.
    }
}

);
`,ia=`/*--------------------------------*- Choupo -*--------------------------------*\\
  CURATION DOSSIER -- a scientific work record, NOT runtime property data.

  NOTHING IN THIS FILE IS VISIBLE TO THE SOLVER.  Record resolution looks only
  in <case>/constant/, data/standards/ and data/local/, so a file here is out
  of its reach BY CONSTRUCTION -- not by convention.

  Nothing here has been promoted.  Curation state belongs to the evidence
  process; runtime trust belongs to the numerical record actually admitted
  to data/standards/, and only an explicit human promotion moves one there
  (bin/curate/promote-from-dossier).

  MATURITY IS PER PROPERTY, not per component: the properties below may hold
  different verdicts, and any whole-component summary is DERIVED from them
  rather than stored beside them.

  Regenerated on every run.  Hand edits are lost.
\\*-----------------------------------------------------------------------------*/

component      cyclohexane;
reviewStatus   unreviewed;

properties
(
{
    property       binaryVLE.T_bubble;
    operation      fit_nrtl;   // type fitParameters
    model          "NRTL binary pair, bubble-T residual at fixed P";
    verdict        validationRefused;
    refusal        "No independent experimental evidence remains after fitting.";

    fittedParameters
    {
        equilibrium.liquid.activityModel.binaryParameters.cyclohexane-tetrahydrofuran.b_ij  71.9728462613;
        equilibrium.liquid.activityModel.binaryParameters.cyclohexane-tetrahydrofuran.b_ji  106.160220182;
    }

    evidence
    {
        partitionFingerprint  "bae0d4e3256df57c";   // frozen before the fit

        datasets
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

        domain
        {
            coordinate  x1;
            fit         { min 0.021; max 0.944; n 20; }
        }
    }

    metrics
    {
        //  r2InSample: not computed by this operation (it reports chi-square).
        //  NO HELD-OUT METRIC EXISTS.  r2InSample above is exactly that --
        //  in-sample -- and must not be read as an external check.
    }
}

{
    property       binaryVLE.T_bubble;
    operation      fit_nrtl_start2;   // type fitParameters
    model          "NRTL binary pair, bubble-T residual at fixed P";
    verdict        validationRefused;
    refusal        "No independent experimental evidence remains after fitting.";

    fittedParameters
    {
        equilibrium.liquid.activityModel.binaryParameters.cyclohexane-tetrahydrofuran.b_ij  71.9728436334;
        equilibrium.liquid.activityModel.binaryParameters.cyclohexane-tetrahydrofuran.b_ji  106.160223026;
    }

    evidence
    {
        partitionFingerprint  "bae0d4e3256df57c";   // frozen before the fit

        datasets
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

        domain
        {
            coordinate  x1;
            fit         { min 0.021; max 0.944; n 20; }
        }
    }

    metrics
    {
        //  r2InSample: not computed by this operation (it reports chi-square).
        //  NO HELD-OUT METRIC EXISTS.  r2InSample above is exactly that --
        //  in-sample -- and must not be read as an external check.
    }
}

);
`,oa=`/*--------------------------------*- Choupo -*--------------------------------*\\
  CURATION DOSSIER -- a scientific work record, NOT runtime property data.

  NOTHING IN THIS FILE IS VISIBLE TO THE SOLVER.  Record resolution looks only
  in <case>/constant/, data/standards/ and data/local/, so a file here is out
  of its reach BY CONSTRUCTION -- not by convention.

  Nothing here has been promoted.  Curation state belongs to the evidence
  process; runtime trust belongs to the numerical record actually admitted
  to data/standards/, and only an explicit human promotion moves one there
  (bin/curate/promote-from-dossier).

  MATURITY IS PER PROPERTY, not per component: the properties below may hold
  different verdicts, and any whole-component summary is DERIVED from them
  rather than stored beside them.

  Regenerated on every run.  Hand edits are lost.
\\*-----------------------------------------------------------------------------*/

component      diNButylEther;
reviewStatus   unreviewed;

properties
(
{
    property       binaryVLE.P_bubble;
    operation      fit_nrtl;   // type fitParameters
    model          "binary pair, relative bubble-P residual at fixed T";
    verdict        validationRefused;
    refusal        "No independent experimental evidence remains after fitting.";

    fittedParameters
    {
        equilibrium.liquid.activityModel.binaryParameters.diNButylEther-nHeptane.b_ij  -174.773995029;
        equilibrium.liquid.activityModel.binaryParameters.diNButylEther-nHeptane.b_ji  233.358963466;
    }

    evidence
    {
        partitionFingerprint  "ed0223d9f0a5905c";   // frozen before the fit

        datasets
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

        domain
        {
            coordinate  x1;
            fit         { min 0.053; max 0.943; n 24; }
        }
    }

    metrics
    {
        //  r2InSample: not computed by this operation (it reports chi-square).
        //  NO HELD-OUT METRIC EXISTS.  r2InSample above is exactly that --
        //  in-sample -- and must not be read as an external check.
    }
}

{
    property       binaryVLE.P_bubble;
    operation      fit_nrtl_start2;   // type fitParameters
    model          "binary pair, relative bubble-P residual at fixed T";
    verdict        validationRefused;
    refusal        "No independent experimental evidence remains after fitting.";

    fittedParameters
    {
        equilibrium.liquid.activityModel.binaryParameters.diNButylEther-nHeptane.b_ij  -174.773993445;
        equilibrium.liquid.activityModel.binaryParameters.diNButylEther-nHeptane.b_ji  233.358960748;
    }

    evidence
    {
        partitionFingerprint  "ed0223d9f0a5905c";   // frozen before the fit

        datasets
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

        domain
        {
            coordinate  x1;
            fit         { min 0.053; max 0.943; n 24; }
        }
    }

    metrics
    {
        //  r2InSample: not computed by this operation (it reports chi-square).
        //  NO HELD-OUT METRIC EXISTS.  r2InSample above is exactly that --
        //  in-sample -- and must not be read as an external check.
    }
}

);
`,da=`/*--------------------------------*- Choupo -*--------------------------------*\\
  CURATION DOSSIER -- a scientific work record, NOT runtime property data.

  NOTHING IN THIS FILE IS VISIBLE TO THE SOLVER.  Record resolution looks only
  in <case>/constant/, data/standards/ and data/local/, so a file here is out
  of its reach BY CONSTRUCTION -- not by convention.

  Nothing here has been promoted.  Curation state belongs to the evidence
  process; runtime trust belongs to the numerical record actually admitted
  to data/standards/, and only an explicit human promotion moves one there
  (bin/curate/promote-from-dossier).

  MATURITY IS PER PROPERTY, not per component: the properties below may hold
  different verdicts, and any whole-component summary is DERIVED from them
  rather than stored beside them.

  Regenerated on every run.  Hand edits are lost.
\\*-----------------------------------------------------------------------------*/

component      diNButylEther;
reviewStatus   unreviewed;

properties
(
{
    property       binaryVLE.P_bubble;
    operation      fit_nrtl;   // type fitParameters
    model          "binary pair, relative bubble-P residual at fixed T";
    verdict        validationRefused;
    refusal        "No independent experimental evidence remains after fitting.";

    fittedParameters
    {
        equilibrium.liquid.activityModel.binaryParameters.diNButylEther-nNDimethylacetamide.b_ij  341.680584548;
        equilibrium.liquid.activityModel.binaryParameters.diNButylEther-nNDimethylacetamide.b_ji  250.739546552;
    }

    evidence
    {
        partitionFingerprint  "5348cb4cccf8a9aa";   // frozen before the fit

        datasets
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

        domain
        {
            coordinate  x1;
            fit         { min 0.0014; max 0.9988; n 52; }
        }
    }

    metrics
    {
        //  r2InSample: not computed by this operation (it reports chi-square).
        //  NO HELD-OUT METRIC EXISTS.  r2InSample above is exactly that --
        //  in-sample -- and must not be read as an external check.
    }
}

{
    property       binaryVLE.P_bubble;
    operation      fit_nrtl_start2;   // type fitParameters
    model          "binary pair, relative bubble-P residual at fixed T";
    verdict        validationRefused;
    refusal        "No independent experimental evidence remains after fitting.";

    fittedParameters
    {
        equilibrium.liquid.activityModel.binaryParameters.diNButylEther-nNDimethylacetamide.b_ij  341.680759098;
        equilibrium.liquid.activityModel.binaryParameters.diNButylEther-nNDimethylacetamide.b_ji  250.739338202;
    }

    evidence
    {
        partitionFingerprint  "5348cb4cccf8a9aa";   // frozen before the fit

        datasets
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

        domain
        {
            coordinate  x1;
            fit         { min 0.0014; max 0.9988; n 52; }
        }
    }

    metrics
    {
        //  r2InSample: not computed by this operation (it reports chi-square).
        //  NO HELD-OUT METRIC EXISTS.  r2InSample above is exactly that --
        //  in-sample -- and must not be read as an external check.
    }
}

);
`,sa=`/*--------------------------------*- Choupo -*--------------------------------*\\
  CURATION DOSSIER -- a scientific work record, NOT runtime property data.

  NOTHING IN THIS FILE IS VISIBLE TO THE SOLVER.  Record resolution looks only
  in <case>/constant/, data/standards/ and data/local/, so a file here is out
  of its reach BY CONSTRUCTION -- not by convention.

  Nothing here has been promoted.  Curation state belongs to the evidence
  process; runtime trust belongs to the numerical record actually admitted
  to data/standards/, and only an explicit human promotion moves one there
  (bin/curate/promote-from-dossier).

  MATURITY IS PER PROPERTY, not per component: the properties below may hold
  different verdicts, and any whole-component summary is DERIVED from them
  rather than stored beside them.

  Regenerated on every run.  Hand edits are lost.
\\*-----------------------------------------------------------------------------*/

component      diNButylEther;
reviewStatus   unreviewed;

properties
(
{
    property       binaryVLE.P_bubble;
    operation      fit_nrtl;   // type fitParameters
    model          "binary pair, relative bubble-P residual at fixed T";
    verdict        validationRefused;
    refusal        "No independent experimental evidence remains after fitting.";

    fittedParameters
    {
        equilibrium.liquid.activityModel.binaryParameters.diNButylEther-toluene.b_ij  -303.502473297;
        equilibrium.liquid.activityModel.binaryParameters.diNButylEther-toluene.b_ji  434.009522082;
    }

    evidence
    {
        partitionFingerprint  "cc42622b278c30a0";   // frozen before the fit

        datasets
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

        domain
        {
            coordinate  x1;
            fit         { min 0.0457; max 0.9524; n 26; }
        }
    }

    metrics
    {
        //  r2InSample: not computed by this operation (it reports chi-square).
        //  NO HELD-OUT METRIC EXISTS.  r2InSample above is exactly that --
        //  in-sample -- and must not be read as an external check.
    }
}

{
    property       binaryVLE.P_bubble;
    operation      fit_nrtl_start2;   // type fitParameters
    model          "binary pair, relative bubble-P residual at fixed T";
    verdict        validationRefused;
    refusal        "No independent experimental evidence remains after fitting.";

    fittedParameters
    {
        equilibrium.liquid.activityModel.binaryParameters.diNButylEther-toluene.b_ij  -303.502479104;
        equilibrium.liquid.activityModel.binaryParameters.diNButylEther-toluene.b_ji  434.009535132;
    }

    evidence
    {
        partitionFingerprint  "cc42622b278c30a0";   // frozen before the fit

        datasets
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

        domain
        {
            coordinate  x1;
            fit         { min 0.0457; max 0.9524; n 26; }
        }
    }

    metrics
    {
        //  r2InSample: not computed by this operation (it reports chi-square).
        //  NO HELD-OUT METRIC EXISTS.  r2InSample above is exactly that --
        //  in-sample -- and must not be read as an external check.
    }
}

);
`,la=`/*--------------------------------*- Choupo -*--------------------------------*\\
  CURATION DOSSIER -- a scientific work record, NOT runtime property data.

  NOTHING IN THIS FILE IS VISIBLE TO THE SOLVER.  Record resolution looks only
  in <case>/constant/, data/standards/ and data/local/, so a file here is out
  of its reach BY CONSTRUCTION -- not by convention.

  Nothing here has been promoted.  Curation state belongs to the evidence
  process; runtime trust belongs to the numerical record actually admitted
  to data/standards/, and only an explicit human promotion moves one there
  (bin/curate/promote-from-dossier).

  MATURITY IS PER PROPERTY, not per component: the properties below may hold
  different verdicts, and any whole-component summary is DERIVED from them
  rather than stored beside them.

  Regenerated on every run.  Hand edits are lost.
\\*-----------------------------------------------------------------------------*/

component      diethylSulfide;
reviewStatus   unreviewed;

properties
(
{
    property       binaryVLE.P_bubble;
    operation      fit_nrtl;   // type fitParameters
    model          "binary pair, relative bubble-P residual at fixed T";
    verdict        validationRefused;
    refusal        "No independent experimental evidence remains after fitting.";

    fittedParameters
    {
        equilibrium.liquid.activityModel.binaryParameters.diethylSulfide-ethanol.b_ij  385.595345269;
        equilibrium.liquid.activityModel.binaryParameters.diethylSulfide-ethanol.b_ji  188.962930535;
    }

    evidence
    {
        partitionFingerprint  "66b3cc1213704e07";   // frozen before the fit

        datasets
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

        domain
        {
            coordinate  x1;
            fit         { min 0.024; max 0.991; n 25; }
        }
    }

    metrics
    {
        //  r2InSample: not computed by this operation (it reports chi-square).
        //  NO HELD-OUT METRIC EXISTS.  r2InSample above is exactly that --
        //  in-sample -- and must not be read as an external check.
    }
}

{
    property       binaryVLE.P_bubble;
    operation      fit_nrtl_start2;   // type fitParameters
    model          "binary pair, relative bubble-P residual at fixed T";
    verdict        validationRefused;
    refusal        "No independent experimental evidence remains after fitting.";

    fittedParameters
    {
        equilibrium.liquid.activityModel.binaryParameters.diethylSulfide-ethanol.b_ij  385.59535747;
        equilibrium.liquid.activityModel.binaryParameters.diethylSulfide-ethanol.b_ji  188.962915736;
    }

    evidence
    {
        partitionFingerprint  "66b3cc1213704e07";   // frozen before the fit

        datasets
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

        domain
        {
            coordinate  x1;
            fit         { min 0.024; max 0.991; n 25; }
        }
    }

    metrics
    {
        //  r2InSample: not computed by this operation (it reports chi-square).
        //  NO HELD-OUT METRIC EXISTS.  r2InSample above is exactly that --
        //  in-sample -- and must not be read as an external check.
    }
}

);
`,ca=`/*--------------------------------*- Choupo -*--------------------------------*\\
  CURATION DOSSIER -- a scientific work record, NOT runtime property data.

  NOTHING IN THIS FILE IS VISIBLE TO THE SOLVER.  Record resolution looks only
  in <case>/constant/, data/standards/ and data/local/, so a file here is out
  of its reach BY CONSTRUCTION -- not by convention.

  Nothing here has been promoted.  Curation state belongs to the evidence
  process; runtime trust belongs to the numerical record actually admitted
  to data/standards/, and only an explicit human promotion moves one there
  (bin/curate/promote-from-dossier).

  MATURITY IS PER PROPERTY, not per component: the properties below may hold
  different verdicts, and any whole-component summary is DERIVED from them
  rather than stored beside them.

  Regenerated on every run.  Hand edits are lost.
\\*-----------------------------------------------------------------------------*/

component      diethylSulfide;
reviewStatus   unreviewed;

properties
(
{
    property       binaryVLE.P_bubble;
    operation      fit_nrtl;   // type fitParameters
    model          "binary pair, relative bubble-P residual at fixed T";
    verdict        validationRefused;
    refusal        "No independent experimental evidence remains after fitting.";

    fittedParameters
    {
        equilibrium.liquid.activityModel.binaryParameters.diethylSulfide-nPropylAcetate.b_ij  -127.110607996;
        equilibrium.liquid.activityModel.binaryParameters.diethylSulfide-nPropylAcetate.b_ji  216.365366955;
    }

    evidence
    {
        partitionFingerprint  "113259cfb31b14c2";   // frozen before the fit

        datasets
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

        domain
        {
            coordinate  x1;
            fit         { min 0.142; max 0.906; n 9; }
        }
    }

    metrics
    {
        //  r2InSample: not computed by this operation (it reports chi-square).
        //  NO HELD-OUT METRIC EXISTS.  r2InSample above is exactly that --
        //  in-sample -- and must not be read as an external check.
    }
}

{
    property       binaryVLE.P_bubble;
    operation      fit_nrtl_start2;   // type fitParameters
    model          "binary pair, relative bubble-P residual at fixed T";
    verdict        validationRefused;
    refusal        "No independent experimental evidence remains after fitting.";

    fittedParameters
    {
        equilibrium.liquid.activityModel.binaryParameters.diethylSulfide-nPropylAcetate.b_ij  -127.11060392;
        equilibrium.liquid.activityModel.binaryParameters.diethylSulfide-nPropylAcetate.b_ji  216.365361471;
    }

    evidence
    {
        partitionFingerprint  "113259cfb31b14c2";   // frozen before the fit

        datasets
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

        domain
        {
            coordinate  x1;
            fit         { min 0.142; max 0.906; n 9; }
        }
    }

    metrics
    {
        //  r2InSample: not computed by this operation (it reports chi-square).
        //  NO HELD-OUT METRIC EXISTS.  r2InSample above is exactly that --
        //  in-sample -- and must not be read as an external check.
    }
}

);
`,ma=`/*--------------------------------*- Choupo -*--------------------------------*\\
  CURATION DOSSIER -- a scientific work record, NOT runtime property data.

  NOTHING IN THIS FILE IS VISIBLE TO THE SOLVER.  Record resolution looks only
  in <case>/constant/, data/standards/ and data/local/, so a file here is out
  of its reach BY CONSTRUCTION -- not by convention.

  Nothing here has been promoted.  Curation state belongs to the evidence
  process; runtime trust belongs to the numerical record actually admitted
  to data/standards/, and only an explicit human promotion moves one there
  (bin/curate/promote-from-dossier).

  MATURITY IS PER PROPERTY, not per component: the properties below may hold
  different verdicts, and any whole-component summary is DERIVED from them
  rather than stored beside them.

  Regenerated on every run.  Hand edits are lost.
\\*-----------------------------------------------------------------------------*/

component      diisopropylEther;
reviewStatus   unreviewed;

properties
(
{
    property       binaryVLE.T_bubble;
    operation      fit_nrtl;   // type fitParameters
    model          "NRTL binary pair, bubble-T residual at fixed P";
    verdict        notValidated;

    fittedParameters
    {
        equilibrium.liquid.activityModel.binaryParameters.diisopropylEther-isopropanol.b_ij  168.9520368;
        equilibrium.liquid.activityModel.binaryParameters.diisopropylEther-isopropanol.b_ji  410.773280263;
    }

    evidence
    {
        partitionFingerprint  "12a04ecf07bb13c8";   // frozen before the fit

        datasets
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
            role      validation;
            dataset   "constant/archiveExtracts/diisopropylEther-isopropanol-bubble-je300994y.dat";
            doi       "10.1021/je300994y";
            sha256    "8c1682c6dd6f8ff2d44ad5b8ab25cc70777931d2f330498695f7f60ee0cc160a";
            provenance measured;
            archiveFile "je300994y.xml";
            system    "diisopropylEther + isopropanol";
            pressure  "101300.000000 Pa";
        }
        );

        domain
        {
            coordinate  x1;
            fit         { min 0.051; max 0.977; n 67; }
            validation  { min 0.029; max 0.947; n 19; }
        }
    }

    metrics
    {
        //  r2InSample: not computed by this operation (it reports chi-square).
        //  rmsHeldOut: not computed by this operation (see aadHeldOutPct).
        aadHeldOutPct     0.550724059447;
        acceptanceMaxAADPct 0.24;   // DECLARED BEFORE the fit; part of the fingerprint
        acceptanceOrigin  "declared before the fit by bin/choupo-curate, the ONE rule of C16: the held-out set's largest stated expanded uncertainty (U95 = 0.61 K) plus the catalogue vapour-pressure model's own error at that set's pure endpoints (isopropanol -0.206 K, diisopropylEther +0.116 K; measured with no pair involved), as a percentage of the held-out mean T (342.77 K) = 0.2380 %, rounded UP to two significant figures";
    }
}

{
    property       binaryVLE.T_bubble;
    operation      fit_nrtl_start2;   // type fitParameters
    model          "NRTL binary pair, bubble-T residual at fixed P";
    verdict        notValidated;

    fittedParameters
    {
        equilibrium.liquid.activityModel.binaryParameters.diisopropylEther-isopropanol.b_ij  168.933034599;
        equilibrium.liquid.activityModel.binaryParameters.diisopropylEther-isopropanol.b_ji  410.799378206;
    }

    evidence
    {
        partitionFingerprint  "12a04ecf07bb13c8";   // frozen before the fit

        datasets
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
            role      validation;
            dataset   "constant/archiveExtracts/diisopropylEther-isopropanol-bubble-je300994y.dat";
            doi       "10.1021/je300994y";
            sha256    "8c1682c6dd6f8ff2d44ad5b8ab25cc70777931d2f330498695f7f60ee0cc160a";
            provenance measured;
            archiveFile "je300994y.xml";
            system    "diisopropylEther + isopropanol";
            pressure  "101300.000000 Pa";
        }
        );

        domain
        {
            coordinate  x1;
            fit         { min 0.051; max 0.977; n 67; }
            validation  { min 0.029; max 0.947; n 19; }
        }
    }

    metrics
    {
        //  r2InSample: not computed by this operation (it reports chi-square).
        //  rmsHeldOut: not computed by this operation (see aadHeldOutPct).
        aadHeldOutPct     0.550729322708;
        acceptanceMaxAADPct 0.24;   // DECLARED BEFORE the fit; part of the fingerprint
        acceptanceOrigin  "declared before the fit by bin/choupo-curate, the ONE rule of C16: the held-out set's largest stated expanded uncertainty (U95 = 0.61 K) plus the catalogue vapour-pressure model's own error at that set's pure endpoints (isopropanol -0.206 K, diisopropylEther +0.116 K; measured with no pair involved), as a percentage of the held-out mean T (342.77 K) = 0.2380 %, rounded UP to two significant figures";
    }
}

);
`,ba=`/*--------------------------------*- Choupo -*--------------------------------*\\
  CURATION DOSSIER -- a scientific work record, NOT runtime property data.

  NOTHING IN THIS FILE IS VISIBLE TO THE SOLVER.  Record resolution looks only
  in <case>/constant/, data/standards/ and data/local/, so a file here is out
  of its reach BY CONSTRUCTION -- not by convention.

  Nothing here has been promoted.  Curation state belongs to the evidence
  process; runtime trust belongs to the numerical record actually admitted
  to data/standards/, and only an explicit human promotion moves one there
  (bin/curate/promote-from-dossier).

  MATURITY IS PER PROPERTY, not per component: the properties below may hold
  different verdicts, and any whole-component summary is DERIVED from them
  rather than stored beside them.

  Regenerated on every run.  Hand edits are lost.
\\*-----------------------------------------------------------------------------*/

component      diisopropylEther;
reviewStatus   unreviewed;

properties
(
{
    property       binaryVLE.T_bubble;
    operation      fit_nrtl;   // type fitParameters
    model          "NRTL binary pair, bubble-T residual at fixed P";
    verdict        validationRefused;
    refusal        "No independent experimental evidence remains after fitting.";

    fittedParameters
    {
        equilibrium.liquid.activityModel.binaryParameters.diisopropylEther-isopropanol.b_ij  250.503087732;
        equilibrium.liquid.activityModel.binaryParameters.diisopropylEther-isopropanol.b_ji  207.594272187;
    }

    evidence
    {
        partitionFingerprint  "55fdc48e7191b791";   // frozen before the fit

        datasets
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

        domain
        {
            coordinate  x1;
            fit         { min 0.025; max 0.977; n 126; }
        }
    }

    metrics
    {
        //  r2InSample: not computed by this operation (it reports chi-square).
        //  NO HELD-OUT METRIC EXISTS.  r2InSample above is exactly that --
        //  in-sample -- and must not be read as an external check.
    }
}

{
    property       binaryVLE.T_bubble;
    operation      fit_nrtl_start2;   // type fitParameters
    model          "NRTL binary pair, bubble-T residual at fixed P";
    verdict        validationRefused;
    refusal        "No independent experimental evidence remains after fitting.";

    fittedParameters
    {
        equilibrium.liquid.activityModel.binaryParameters.diisopropylEther-isopropanol.b_ij  250.503086634;
        equilibrium.liquid.activityModel.binaryParameters.diisopropylEther-isopropanol.b_ji  207.594273213;
    }

    evidence
    {
        partitionFingerprint  "55fdc48e7191b791";   // frozen before the fit

        datasets
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

        domain
        {
            coordinate  x1;
            fit         { min 0.025; max 0.977; n 126; }
        }
    }

    metrics
    {
        //  r2InSample: not computed by this operation (it reports chi-square).
        //  NO HELD-OUT METRIC EXISTS.  r2InSample above is exactly that --
        //  in-sample -- and must not be read as an external check.
    }
}

);
`,ua=`/*--------------------------------*- Choupo -*--------------------------------*\\
  CURATION DOSSIER -- a scientific work record, NOT runtime property data.

  NOTHING IN THIS FILE IS VISIBLE TO THE SOLVER.  Record resolution looks only
  in <case>/constant/, data/standards/ and data/local/, so a file here is out
  of its reach BY CONSTRUCTION -- not by convention.

  Nothing here has been promoted.  Curation state belongs to the evidence
  process; runtime trust belongs to the numerical record actually admitted
  to data/standards/, and only an explicit human promotion moves one there
  (bin/curate/promote-from-dossier).

  MATURITY IS PER PROPERTY, not per component: the properties below may hold
  different verdicts, and any whole-component summary is DERIVED from them
  rather than stored beside them.

  Regenerated on every run.  Hand edits are lost.
\\*-----------------------------------------------------------------------------*/

component      diisopropylEther;
reviewStatus   unreviewed;

properties
(
{
    property       binaryVLE.P_bubble;
    operation      fit_nrtl;   // type fitParameters
    model          "binary pair, relative bubble-P residual at fixed T";
    verdict        validationRefused;
    refusal        "No independent experimental evidence remains after fitting.";

    fittedParameters
    {
        equilibrium.liquid.activityModel.binaryParameters.diisopropylEther-nButanol.b_ij  316.144982444;
        equilibrium.liquid.activityModel.binaryParameters.diisopropylEther-nButanol.b_ji  23.7581219;
    }

    evidence
    {
        partitionFingerprint  "05f85871b69220dd";   // frozen before the fit

        datasets
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

        domain
        {
            coordinate  x1;
            fit         { min 0.0591; max 0.952; n 26; }
        }
    }

    metrics
    {
        //  r2InSample: not computed by this operation (it reports chi-square).
        //  NO HELD-OUT METRIC EXISTS.  r2InSample above is exactly that --
        //  in-sample -- and must not be read as an external check.
    }
}

{
    property       binaryVLE.P_bubble;
    operation      fit_nrtl_start2;   // type fitParameters
    model          "binary pair, relative bubble-P residual at fixed T";
    verdict        validationRefused;
    refusal        "No independent experimental evidence remains after fitting.";

    fittedParameters
    {
        equilibrium.liquid.activityModel.binaryParameters.diisopropylEther-nButanol.b_ij  316.144973815;
        equilibrium.liquid.activityModel.binaryParameters.diisopropylEther-nButanol.b_ji  23.7581289198;
    }

    evidence
    {
        partitionFingerprint  "05f85871b69220dd";   // frozen before the fit

        datasets
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

        domain
        {
            coordinate  x1;
            fit         { min 0.0591; max 0.952; n 26; }
        }
    }

    metrics
    {
        //  r2InSample: not computed by this operation (it reports chi-square).
        //  NO HELD-OUT METRIC EXISTS.  r2InSample above is exactly that --
        //  in-sample -- and must not be read as an external check.
    }
}

);
`,pa=`/*--------------------------------*- Choupo -*--------------------------------*\\
  CURATION DOSSIER -- a scientific work record, NOT runtime property data.

  NOTHING IN THIS FILE IS VISIBLE TO THE SOLVER.  Record resolution looks only
  in <case>/constant/, data/standards/ and data/local/, so a file here is out
  of its reach BY CONSTRUCTION -- not by convention.

  Nothing here has been promoted.  Curation state belongs to the evidence
  process; runtime trust belongs to the numerical record actually admitted
  to data/standards/, and only an explicit human promotion moves one there
  (bin/curate/promote-from-dossier).

  MATURITY IS PER PROPERTY, not per component: the properties below may hold
  different verdicts, and any whole-component summary is DERIVED from them
  rather than stored beside them.

  Regenerated on every run.  Hand edits are lost.
\\*-----------------------------------------------------------------------------*/

component      ethanol;
reviewStatus   unreviewed;

properties
(
{
    property       binaryVLE.T_bubble;
    operation      fit_nrtl;   // type fitParameters
    model          "NRTL binary pair, bubble-T residual at fixed P";
    verdict        notValidated;

    fittedParameters
    {
        equilibrium.liquid.activityModel.binaryParameters.ethanol-dimethylCarbonate.b_ij  427.578432244;
        equilibrium.liquid.activityModel.binaryParameters.ethanol-dimethylCarbonate.b_ji  -4.17119596783;
    }

    evidence
    {
        partitionFingerprint  "45ce350201e9ce58";   // frozen before the fit

        datasets
        (
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
            role      validation;
            dataset   "constant/archiveExtracts/ethanol-dimethylCarbonate-bubble-je030131q.dat";
            doi       "10.1021/je030131q";
            sha256    "b41bca23136ec66aba1b6984f5c0f44a5fca02ba9d89bed1e374a726fb032c08";
            provenance measured;
            archiveFile "je030131q.xml";
            system    "ethanol + dimethylCarbonate";
            pressure  "95800.000000 Pa";
        }
        );

        domain
        {
            coordinate  x1;
            fit         { min 0.0141; max 0.9807; n 20; }
            validation  { min 0.198; max 0.9316; n 9; }
        }
    }

    metrics
    {
        //  r2InSample: not computed by this operation (it reports chi-square).
        //  rmsHeldOut: not computed by this operation (see aadHeldOutPct).
        aadHeldOutPct     0.340556701675;
        acceptanceMaxAADPct 0.24;   // DECLARED BEFORE the fit; part of the fingerprint
        acceptanceOrigin  "declared before the fit by bin/choupo-curate, the ONE rule of C16: the held-out set's largest stated expanded uncertainty (U95 = 0.32 K) plus the catalogue vapour-pressure model's own error at that set's pure endpoints (dimethylCarbonate +0.504 K; measured with no pair involved), as a percentage of the held-out mean T (347.42 K) = 0.2371 %, rounded UP to two significant figures";
    }
}

{
    property       binaryVLE.T_bubble;
    operation      fit_nrtl_start2;   // type fitParameters
    model          "NRTL binary pair, bubble-T residual at fixed P";
    verdict        notValidated;

    fittedParameters
    {
        equilibrium.liquid.activityModel.binaryParameters.ethanol-dimethylCarbonate.b_ij  427.57884798;
        equilibrium.liquid.activityModel.binaryParameters.ethanol-dimethylCarbonate.b_ji  -4.17149122044;
    }

    evidence
    {
        partitionFingerprint  "45ce350201e9ce58";   // frozen before the fit

        datasets
        (
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
            role      validation;
            dataset   "constant/archiveExtracts/ethanol-dimethylCarbonate-bubble-je030131q.dat";
            doi       "10.1021/je030131q";
            sha256    "b41bca23136ec66aba1b6984f5c0f44a5fca02ba9d89bed1e374a726fb032c08";
            provenance measured;
            archiveFile "je030131q.xml";
            system    "ethanol + dimethylCarbonate";
            pressure  "95800.000000 Pa";
        }
        );

        domain
        {
            coordinate  x1;
            fit         { min 0.0141; max 0.9807; n 20; }
            validation  { min 0.198; max 0.9316; n 9; }
        }
    }

    metrics
    {
        //  r2InSample: not computed by this operation (it reports chi-square).
        //  rmsHeldOut: not computed by this operation (see aadHeldOutPct).
        aadHeldOutPct     0.3405568046;
        acceptanceMaxAADPct 0.24;   // DECLARED BEFORE the fit; part of the fingerprint
        acceptanceOrigin  "declared before the fit by bin/choupo-curate, the ONE rule of C16: the held-out set's largest stated expanded uncertainty (U95 = 0.32 K) plus the catalogue vapour-pressure model's own error at that set's pure endpoints (dimethylCarbonate +0.504 K; measured with no pair involved), as a percentage of the held-out mean T (347.42 K) = 0.2371 %, rounded UP to two significant figures";
    }
}

);
`,fa=`/*--------------------------------*- Choupo -*--------------------------------*\\
  CURATION DOSSIER -- a scientific work record, NOT runtime property data.

  NOTHING IN THIS FILE IS VISIBLE TO THE SOLVER.  Record resolution looks only
  in <case>/constant/, data/standards/ and data/local/, so a file here is out
  of its reach BY CONSTRUCTION -- not by convention.

  Nothing here has been promoted.  Curation state belongs to the evidence
  process; runtime trust belongs to the numerical record actually admitted
  to data/standards/, and only an explicit human promotion moves one there
  (bin/curate/promote-from-dossier).

  MATURITY IS PER PROPERTY, not per component: the properties below may hold
  different verdicts, and any whole-component summary is DERIVED from them
  rather than stored beside them.

  Regenerated on every run.  Hand edits are lost.
\\*-----------------------------------------------------------------------------*/

component      ethanol;
reviewStatus   unreviewed;

properties
(
{
    property       binaryVLE.T_bubble;
    operation      fit_nrtl;   // type fitParameters
    model          "NRTL binary pair, bubble-T residual at fixed P";
    verdict        validationRefused;
    refusal        "No independent experimental evidence remains after fitting.";

    fittedParameters
    {
        equilibrium.liquid.activityModel.binaryParameters.ethanol-dimethylCarbonate.b_ij  507.920514217;
        equilibrium.liquid.activityModel.binaryParameters.ethanol-dimethylCarbonate.b_ji  12.1392889233;
    }

    evidence
    {
        partitionFingerprint  "fdea915719c7b2a4";   // frozen before the fit

        datasets
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

        domain
        {
            coordinate  x1;
            fit         { min 0.0141; max 0.9807; n 143; }
        }
    }

    metrics
    {
        //  r2InSample: not computed by this operation (it reports chi-square).
        //  NO HELD-OUT METRIC EXISTS.  r2InSample above is exactly that --
        //  in-sample -- and must not be read as an external check.
    }
}

{
    property       binaryVLE.T_bubble;
    operation      fit_nrtl_start2;   // type fitParameters
    model          "NRTL binary pair, bubble-T residual at fixed P";
    verdict        validationRefused;
    refusal        "No independent experimental evidence remains after fitting.";

    fittedParameters
    {
        equilibrium.liquid.activityModel.binaryParameters.ethanol-dimethylCarbonate.b_ij  507.567636626;
        equilibrium.liquid.activityModel.binaryParameters.ethanol-dimethylCarbonate.b_ji  12.3103457037;
    }

    evidence
    {
        partitionFingerprint  "fdea915719c7b2a4";   // frozen before the fit

        datasets
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

        domain
        {
            coordinate  x1;
            fit         { min 0.0141; max 0.9807; n 143; }
        }
    }

    metrics
    {
        //  r2InSample: not computed by this operation (it reports chi-square).
        //  NO HELD-OUT METRIC EXISTS.  r2InSample above is exactly that --
        //  in-sample -- and must not be read as an external check.
    }
}

);
`,ha=`/*--------------------------------*- Choupo -*--------------------------------*\\
  CURATION DOSSIER -- a scientific work record, NOT runtime property data.

  NOTHING IN THIS FILE IS VISIBLE TO THE SOLVER.  Record resolution looks only
  in <case>/constant/, data/standards/ and data/local/, so a file here is out
  of its reach BY CONSTRUCTION -- not by convention.

  Nothing here has been promoted.  Curation state belongs to the evidence
  process; runtime trust belongs to the numerical record actually admitted
  to data/standards/, and only an explicit human promotion moves one there
  (bin/curate/promote-from-dossier).

  MATURITY IS PER PROPERTY, not per component: the properties below may hold
  different verdicts, and any whole-component summary is DERIVED from them
  rather than stored beside them.

  Regenerated on every run.  Hand edits are lost.
\\*-----------------------------------------------------------------------------*/

component      isopropanol;
reviewStatus   unreviewed;

properties
(
{
    property       binaryVLE.T_bubble;
    operation      fit_nrtl;   // type fitParameters
    model          "NRTL binary pair, bubble-T residual at fixed P";
    verdict        validated;

    fittedParameters
    {
        equilibrium.liquid.activityModel.binaryParameters.isopropanol-dimethylCarbonate.b_ij  284.355894612;
        equilibrium.liquid.activityModel.binaryParameters.isopropanol-dimethylCarbonate.b_ji  62.8965516018;
    }

    evidence
    {
        partitionFingerprint  "bcd7ed778f4dc0e3";   // frozen before the fit

        datasets
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

        domain
        {
            coordinate  x1;
            fit         { min 0.0246; max 0.9791; n 32; }
            validation  { min 0.1805; max 0.924; n 9; }
        }
    }

    metrics
    {
        //  r2InSample: not computed by this operation (it reports chi-square).
        //  rmsHeldOut: not computed by this operation (see aadHeldOutPct).
        aadHeldOutPct     0.0520996119818;
        acceptanceMaxAADPct 0.24;   // DECLARED BEFORE the fit; part of the fingerprint
        acceptanceOrigin  "declared before the fit by bin/choupo-curate, the ONE rule of C16: the held-out set's largest stated expanded uncertainty (U95 = 0.32 K) plus the catalogue vapour-pressure model's own error at that set's pure endpoints (dimethylCarbonate +0.504 K, isopropanol -0.231 K; measured with no pair involved), as a percentage of the held-out mean T (351.83 K) = 0.2341 %, rounded UP to two significant figures";
    }
}

{
    property       binaryVLE.T_bubble;
    operation      fit_nrtl_start2;   // type fitParameters
    model          "NRTL binary pair, bubble-T residual at fixed P";
    verdict        validated;

    fittedParameters
    {
        equilibrium.liquid.activityModel.binaryParameters.isopropanol-dimethylCarbonate.b_ij  284.354320975;
        equilibrium.liquid.activityModel.binaryParameters.isopropanol-dimethylCarbonate.b_ji  62.8978564149;
    }

    evidence
    {
        partitionFingerprint  "bcd7ed778f4dc0e3";   // frozen before the fit

        datasets
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

        domain
        {
            coordinate  x1;
            fit         { min 0.0246; max 0.9791; n 32; }
            validation  { min 0.1805; max 0.924; n 9; }
        }
    }

    metrics
    {
        //  r2InSample: not computed by this operation (it reports chi-square).
        //  rmsHeldOut: not computed by this operation (see aadHeldOutPct).
        aadHeldOutPct     0.0520991432863;
        acceptanceMaxAADPct 0.24;   // DECLARED BEFORE the fit; part of the fingerprint
        acceptanceOrigin  "declared before the fit by bin/choupo-curate, the ONE rule of C16: the held-out set's largest stated expanded uncertainty (U95 = 0.32 K) plus the catalogue vapour-pressure model's own error at that set's pure endpoints (dimethylCarbonate +0.504 K, isopropanol -0.231 K; measured with no pair involved), as a percentage of the held-out mean T (351.83 K) = 0.2341 %, rounded UP to two significant figures";
    }
}

);
`,ya=`/*--------------------------------*- Choupo -*--------------------------------*\\
  CURATION DOSSIER -- a scientific work record, NOT runtime property data.

  NOTHING IN THIS FILE IS VISIBLE TO THE SOLVER.  Record resolution looks only
  in <case>/constant/, data/standards/ and data/local/, so a file here is out
  of its reach BY CONSTRUCTION -- not by convention.

  Nothing here has been promoted.  Curation state belongs to the evidence
  process; runtime trust belongs to the numerical record actually admitted
  to data/standards/, and only an explicit human promotion moves one there
  (bin/curate/promote-from-dossier).

  MATURITY IS PER PROPERTY, not per component: the properties below may hold
  different verdicts, and any whole-component summary is DERIVED from them
  rather than stored beside them.

  Regenerated on every run.  Hand edits are lost.
\\*-----------------------------------------------------------------------------*/

component      methanol;
reviewStatus   unreviewed;

properties
(
{
    property       binaryVLE.T_bubble;
    operation      fit_nrtl;   // type fitParameters
    model          "NRTL binary pair, bubble-T residual at fixed P";
    verdict        validated;

    fittedParameters
    {
        equilibrium.liquid.activityModel.binaryParameters.methanol-dimethylCarbonate.b_ij  401.302927633;
        equilibrium.liquid.activityModel.binaryParameters.methanol-dimethylCarbonate.b_ji  89.4443878637;
    }

    evidence
    {
        partitionFingerprint  "f5e569e3152d3e6c";   // frozen before the fit

        datasets
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

        domain
        {
            coordinate  x1;
            fit         { min 0.106; max 0.948; n 65; }
            validation  { min 0.038; max 0.947; n 19; }
        }
    }

    metrics
    {
        //  r2InSample: not computed by this operation (it reports chi-square).
        //  rmsHeldOut: not computed by this operation (see aadHeldOutPct).
        aadHeldOutPct     0.0640801029909;
        acceptanceMaxAADPct 0.088;   // DECLARED BEFORE the fit; part of the fingerprint
        acceptanceOrigin  "declared before the fit by bin/choupo-curate, the ONE rule of C16: the held-out set's largest stated expanded uncertainty (U95 = 0.3 K) plus the catalogue vapour-pressure model's own error at that set's pure endpoints (NONE: the held-out study reports no pure-component bubble point, so the term is ZERO, the strictest reading of the rule -- the band is the measurement's own uncertainty alone; measured with no pair involved), as a percentage of the held-out mean T (341.73 K) = 0.0878 %, rounded UP to two significant figures";
    }
}

{
    property       binaryVLE.T_bubble;
    operation      fit_nrtl_start2;   // type fitParameters
    model          "NRTL binary pair, bubble-T residual at fixed P";
    verdict        validated;

    fittedParameters
    {
        equilibrium.liquid.activityModel.binaryParameters.methanol-dimethylCarbonate.b_ij  401.302517705;
        equilibrium.liquid.activityModel.binaryParameters.methanol-dimethylCarbonate.b_ji  89.4446707579;
    }

    evidence
    {
        partitionFingerprint  "f5e569e3152d3e6c";   // frozen before the fit

        datasets
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

        domain
        {
            coordinate  x1;
            fit         { min 0.106; max 0.948; n 65; }
            validation  { min 0.038; max 0.947; n 19; }
        }
    }

    metrics
    {
        //  r2InSample: not computed by this operation (it reports chi-square).
        //  rmsHeldOut: not computed by this operation (see aadHeldOutPct).
        aadHeldOutPct     0.0640799536555;
        acceptanceMaxAADPct 0.088;   // DECLARED BEFORE the fit; part of the fingerprint
        acceptanceOrigin  "declared before the fit by bin/choupo-curate, the ONE rule of C16: the held-out set's largest stated expanded uncertainty (U95 = 0.3 K) plus the catalogue vapour-pressure model's own error at that set's pure endpoints (NONE: the held-out study reports no pure-component bubble point, so the term is ZERO, the strictest reading of the rule -- the band is the measurement's own uncertainty alone; measured with no pair involved), as a percentage of the held-out mean T (341.73 K) = 0.0878 %, rounded UP to two significant figures";
    }
}

);
`,va=`/*--------------------------------*- Choupo -*--------------------------------*\\
  CURATION DOSSIER -- a scientific work record, NOT runtime property data.

  NOTHING IN THIS FILE IS VISIBLE TO THE SOLVER.  Record resolution looks only
  in <case>/constant/, data/standards/ and data/local/, so a file here is out
  of its reach BY CONSTRUCTION -- not by convention.

  Nothing here has been promoted.  Curation state belongs to the evidence
  process; runtime trust belongs to the numerical record actually admitted
  to data/standards/, and only an explicit human promotion moves one there
  (bin/curate/promote-from-dossier).

  MATURITY IS PER PROPERTY, not per component: the properties below may hold
  different verdicts, and any whole-component summary is DERIVED from them
  rather than stored beside them.

  Regenerated on every run.  Hand edits are lost.
\\*-----------------------------------------------------------------------------*/

component      nButanol;
reviewStatus   unreviewed;

properties
(
{
    property       binaryVLE.T_bubble;
    operation      fit_nrtl;   // type fitParameters
    model          "NRTL binary pair, bubble-T residual at fixed P";
    verdict        validationRefused;
    refusal        "No independent experimental evidence remains after fitting.";

    fittedParameters
    {
        equilibrium.liquid.activityModel.binaryParameters.nButanol-dimethylCarbonate.b_ij  75.8610648347;
        equilibrium.liquid.activityModel.binaryParameters.nButanol-dimethylCarbonate.b_ji  309.069989568;
    }

    evidence
    {
        partitionFingerprint  "94abe7c6e0655885";   // frozen before the fit

        datasets
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

        domain
        {
            coordinate  x1;
            fit         { min 0.101; max 0.898; n 52; }
        }
    }

    metrics
    {
        //  r2InSample: not computed by this operation (it reports chi-square).
        //  NO HELD-OUT METRIC EXISTS.  r2InSample above is exactly that --
        //  in-sample -- and must not be read as an external check.
    }
}

{
    property       binaryVLE.T_bubble;
    operation      fit_nrtl_start2;   // type fitParameters
    model          "NRTL binary pair, bubble-T residual at fixed P";
    verdict        validationRefused;
    refusal        "No independent experimental evidence remains after fitting.";

    fittedParameters
    {
        equilibrium.liquid.activityModel.binaryParameters.nButanol-dimethylCarbonate.b_ij  75.8610649543;
        equilibrium.liquid.activityModel.binaryParameters.nButanol-dimethylCarbonate.b_ji  309.069989323;
    }

    evidence
    {
        partitionFingerprint  "94abe7c6e0655885";   // frozen before the fit

        datasets
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

        domain
        {
            coordinate  x1;
            fit         { min 0.101; max 0.898; n 52; }
        }
    }

    metrics
    {
        //  r2InSample: not computed by this operation (it reports chi-square).
        //  NO HELD-OUT METRIC EXISTS.  r2InSample above is exactly that --
        //  in-sample -- and must not be read as an external check.
    }
}

);
`,Ea=`/*--------------------------------*- Choupo -*--------------------------------*\\
  CURATION DOSSIER -- a scientific work record, NOT runtime property data.

  NOTHING IN THIS FILE IS VISIBLE TO THE SOLVER.  Record resolution looks only
  in <case>/constant/, data/standards/ and data/local/, so a file here is out
  of its reach BY CONSTRUCTION -- not by convention.

  Nothing here has been promoted.  Curation state belongs to the evidence
  process; runtime trust belongs to the numerical record actually admitted
  to data/standards/, and only an explicit human promotion moves one there
  (bin/curate/promote-from-dossier).

  MATURITY IS PER PROPERTY, not per component: the properties below may hold
  different verdicts, and any whole-component summary is DERIVED from them
  rather than stored beside them.

  Regenerated on every run.  Hand edits are lost.
\\*-----------------------------------------------------------------------------*/

component      dimethylCarbonate;
reviewStatus   unreviewed;

properties
(
{
    property       binaryVLE.T_bubble;
    operation      fit_nrtl;   // type fitParameters
    model          "NRTL binary pair, bubble-T residual at fixed P";
    verdict        validationRefused;
    refusal        "No independent experimental evidence remains after fitting.";

    fittedParameters
    {
        equilibrium.liquid.activityModel.binaryParameters.dimethylCarbonate-oXylene.b_ij  36.0835352545;
        equilibrium.liquid.activityModel.binaryParameters.dimethylCarbonate-oXylene.b_ji  481.178098107;
    }

    evidence
    {
        partitionFingerprint  "9a25858dba17743a";   // frozen before the fit

        datasets
        (
        {
            role      fit;
            dataset   "constant/archiveExtracts/dimethylCarbonate-oXylene-bubble-acs.jced.9b00414.dat";
            doi       "10.1021/acs.jced.9b00414";
            sha256    "08859773e230d7e51409d5d329c037ea6ec178042d4602aca05aa5470b4ea6d5";
            provenance measured;
            archiveFile "acs.jced.9b00414.xml";
            system    "dimethylCarbonate + oXylene";
            pressure  "101300.000000 Pa";
        }
        {
            role      fit;
            dataset   "constant/archiveExtracts/dimethylCarbonate-oXylene-bubble-acs.jced.7b00372.dat";
            doi       "10.1021/acs.jced.7b00372";
            sha256    "d7db373526dce14490ebc7cd7c42f771c4b2aae1013b5b3e8a930cd4d5a5a0a5";
            provenance measured;
            archiveFile "acs.jced.7b00372.xml";
            system    "dimethylCarbonate + oXylene";
            pressure  "93130.000000 Pa";
        }
        );

        domain
        {
            coordinate  x1;
            fit         { min 0.0091; max 0.9459; n 24; }
        }
    }

    metrics
    {
        //  r2InSample: not computed by this operation (it reports chi-square).
        //  NO HELD-OUT METRIC EXISTS.  r2InSample above is exactly that --
        //  in-sample -- and must not be read as an external check.
    }
}

{
    property       binaryVLE.T_bubble;
    operation      fit_nrtl_start2;   // type fitParameters
    model          "NRTL binary pair, bubble-T residual at fixed P";
    verdict        validationRefused;
    refusal        "No independent experimental evidence remains after fitting.";

    fittedParameters
    {
        equilibrium.liquid.activityModel.binaryParameters.dimethylCarbonate-oXylene.b_ij  36.0835338095;
        equilibrium.liquid.activityModel.binaryParameters.dimethylCarbonate-oXylene.b_ji  481.178101769;
    }

    evidence
    {
        partitionFingerprint  "9a25858dba17743a";   // frozen before the fit

        datasets
        (
        {
            role      fit;
            dataset   "constant/archiveExtracts/dimethylCarbonate-oXylene-bubble-acs.jced.9b00414.dat";
            doi       "10.1021/acs.jced.9b00414";
            sha256    "08859773e230d7e51409d5d329c037ea6ec178042d4602aca05aa5470b4ea6d5";
            provenance measured;
            archiveFile "acs.jced.9b00414.xml";
            system    "dimethylCarbonate + oXylene";
            pressure  "101300.000000 Pa";
        }
        {
            role      fit;
            dataset   "constant/archiveExtracts/dimethylCarbonate-oXylene-bubble-acs.jced.7b00372.dat";
            doi       "10.1021/acs.jced.7b00372";
            sha256    "d7db373526dce14490ebc7cd7c42f771c4b2aae1013b5b3e8a930cd4d5a5a0a5";
            provenance measured;
            archiveFile "acs.jced.7b00372.xml";
            system    "dimethylCarbonate + oXylene";
            pressure  "93130.000000 Pa";
        }
        );

        domain
        {
            coordinate  x1;
            fit         { min 0.0091; max 0.9459; n 24; }
        }
    }

    metrics
    {
        //  r2InSample: not computed by this operation (it reports chi-square).
        //  NO HELD-OUT METRIC EXISTS.  r2InSample above is exactly that --
        //  in-sample -- and must not be read as an external check.
    }
}

);
`,Ta=`/*--------------------------------*- Choupo -*--------------------------------*\\
  CURATION DOSSIER -- a scientific work record, NOT runtime property data.

  NOTHING IN THIS FILE IS VISIBLE TO THE SOLVER.  Record resolution looks only
  in <case>/constant/, data/standards/ and data/local/, so a file here is out
  of its reach BY CONSTRUCTION -- not by convention.

  Nothing here has been promoted.  Curation state belongs to the evidence
  process; runtime trust belongs to the numerical record actually admitted
  to data/standards/, and only an explicit human promotion moves one there
  (bin/curate/promote-from-dossier).

  MATURITY IS PER PROPERTY, not per component: the properties below may hold
  different verdicts, and any whole-component summary is DERIVED from them
  rather than stored beside them.

  Regenerated on every run.  Hand edits are lost.
\\*-----------------------------------------------------------------------------*/

component      dimethylCarbonate;
reviewStatus   unreviewed;

properties
(
{
    property       binaryVLE.T_bubble;
    operation      fit_nrtl;   // type fitParameters
    model          "NRTL binary pair, bubble-T residual at fixed P";
    verdict        validationRefused;
    refusal        "No independent experimental evidence remains after fitting.";

    fittedParameters
    {
        equilibrium.liquid.activityModel.binaryParameters.dimethylCarbonate-pXylene.b_ij  666.127354134;
        equilibrium.liquid.activityModel.binaryParameters.dimethylCarbonate-pXylene.b_ji  -266.771714516;
    }

    evidence
    {
        partitionFingerprint  "e12b8d008fe40f7a";   // frozen before the fit

        datasets
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

        domain
        {
            coordinate  x1;
            fit         { min 0.024; max 0.9449; n 19; }
        }
    }

    metrics
    {
        //  r2InSample: not computed by this operation (it reports chi-square).
        //  NO HELD-OUT METRIC EXISTS.  r2InSample above is exactly that --
        //  in-sample -- and must not be read as an external check.
    }
}

{
    property       binaryVLE.T_bubble;
    operation      fit_nrtl_start2;   // type fitParameters
    model          "NRTL binary pair, bubble-T residual at fixed P";
    verdict        validationRefused;
    refusal        "No independent experimental evidence remains after fitting.";

    fittedParameters
    {
        equilibrium.liquid.activityModel.binaryParameters.dimethylCarbonate-pXylene.b_ij  666.127354492;
        equilibrium.liquid.activityModel.binaryParameters.dimethylCarbonate-pXylene.b_ji  -266.77171471;
    }

    evidence
    {
        partitionFingerprint  "e12b8d008fe40f7a";   // frozen before the fit

        datasets
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

        domain
        {
            coordinate  x1;
            fit         { min 0.024; max 0.9449; n 19; }
        }
    }

    metrics
    {
        //  r2InSample: not computed by this operation (it reports chi-square).
        //  NO HELD-OUT METRIC EXISTS.  r2InSample above is exactly that --
        //  in-sample -- and must not be read as an external check.
    }
}

);
`,Ia=`/*--------------------------------*- Choupo -*--------------------------------*\\
  CURATION DOSSIER -- a scientific work record, NOT runtime property data.

  NOTHING IN THIS FILE IS VISIBLE TO THE SOLVER.  Record resolution looks only
  in <case>/constant/, data/standards/ and data/local/, so a file here is out
  of its reach BY CONSTRUCTION -- not by convention.

  Nothing here has been promoted.  Curation state belongs to the evidence
  process; runtime trust belongs to the numerical record actually admitted
  to data/standards/, and only an explicit human promotion moves one there
  (bin/curate/promote-from-dossier).

  MATURITY IS PER PROPERTY, not per component: the properties below may hold
  different verdicts, and any whole-component summary is DERIVED from them
  rather than stored beside them.

  Regenerated on every run.  Hand edits are lost.
\\*-----------------------------------------------------------------------------*/

component      dimethylDisulfide;
reviewStatus   unreviewed;

properties
(
{
    property       binaryVLE.P_bubble;
    operation      fit_nrtl;   // type fitParameters
    model          "binary pair, relative bubble-P residual at fixed T";
    verdict        validationRefused;
    refusal        "No independent experimental evidence remains after fitting.";

    fittedParameters
    {
        equilibrium.liquid.activityModel.binaryParameters.dimethylDisulfide-tertButylEthylEther.b_ij  209.890627266;
        equilibrium.liquid.activityModel.binaryParameters.dimethylDisulfide-tertButylEthylEther.b_ji  -36.793304492;
    }

    evidence
    {
        partitionFingerprint  "2b612179215e857c";   // frozen before the fit

        datasets
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

        domain
        {
            coordinate  x1;
            fit         { min 0.093; max 0.974; n 10; }
        }
    }

    metrics
    {
        //  r2InSample: not computed by this operation (it reports chi-square).
        //  NO HELD-OUT METRIC EXISTS.  r2InSample above is exactly that --
        //  in-sample -- and must not be read as an external check.
    }
}

{
    property       binaryVLE.P_bubble;
    operation      fit_nrtl_start2;   // type fitParameters
    model          "binary pair, relative bubble-P residual at fixed T";
    verdict        validationRefused;
    refusal        "No independent experimental evidence remains after fitting.";

    fittedParameters
    {
        equilibrium.liquid.activityModel.binaryParameters.dimethylDisulfide-tertButylEthylEther.b_ij  209.890624159;
        equilibrium.liquid.activityModel.binaryParameters.dimethylDisulfide-tertButylEthylEther.b_ji  -36.7933022904;
    }

    evidence
    {
        partitionFingerprint  "2b612179215e857c";   // frozen before the fit

        datasets
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

        domain
        {
            coordinate  x1;
            fit         { min 0.093; max 0.974; n 10; }
        }
    }

    metrics
    {
        //  r2InSample: not computed by this operation (it reports chi-square).
        //  NO HELD-OUT METRIC EXISTS.  r2InSample above is exactly that --
        //  in-sample -- and must not be read as an external check.
    }
}

);
`,xa=`/*--------------------------------*- Choupo -*--------------------------------*\\
  CURATION DOSSIER -- a scientific work record, NOT runtime property data.

  NOTHING IN THIS FILE IS VISIBLE TO THE SOLVER.  Record resolution looks only
  in <case>/constant/, data/standards/ and data/local/, so a file here is out
  of its reach BY CONSTRUCTION -- not by convention.

  Nothing here has been promoted.  Curation state belongs to the evidence
  process; runtime trust belongs to the numerical record actually admitted
  to data/standards/, and only an explicit human promotion moves one there
  (bin/curate/promote-from-dossier).

  MATURITY IS PER PROPERTY, not per component: the properties below may hold
  different verdicts, and any whole-component summary is DERIVED from them
  rather than stored beside them.

  Regenerated on every run.  Hand edits are lost.
\\*-----------------------------------------------------------------------------*/

component      dimethylDisulfide;
reviewStatus   unreviewed;

properties
(
{
    property       binaryVLE.P_bubble;
    operation      fit_nrtl;   // type fitParameters
    model          "binary pair, relative bubble-P residual at fixed T";
    verdict        validationRefused;
    refusal        "No independent experimental evidence remains after fitting.";

    fittedParameters
    {
        equilibrium.liquid.activityModel.binaryParameters.dimethylDisulfide-toluene.b_ij  252.152828593;
        equilibrium.liquid.activityModel.binaryParameters.dimethylDisulfide-toluene.b_ji  -166.120123452;
    }

    evidence
    {
        partitionFingerprint  "50d36772b5822165";   // frozen before the fit

        datasets
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

        domain
        {
            coordinate  x1;
            fit         { min 0.088; max 0.967; n 12; }
        }
    }

    metrics
    {
        //  r2InSample: not computed by this operation (it reports chi-square).
        //  NO HELD-OUT METRIC EXISTS.  r2InSample above is exactly that --
        //  in-sample -- and must not be read as an external check.
    }
}

{
    property       binaryVLE.P_bubble;
    operation      fit_nrtl_start2;   // type fitParameters
    model          "binary pair, relative bubble-P residual at fixed T";
    verdict        validationRefused;
    refusal        "No independent experimental evidence remains after fitting.";

    fittedParameters
    {
        equilibrium.liquid.activityModel.binaryParameters.dimethylDisulfide-toluene.b_ij  252.152831427;
        equilibrium.liquid.activityModel.binaryParameters.dimethylDisulfide-toluene.b_ji  -166.120124886;
    }

    evidence
    {
        partitionFingerprint  "50d36772b5822165";   // frozen before the fit

        datasets
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

        domain
        {
            coordinate  x1;
            fit         { min 0.088; max 0.967; n 12; }
        }
    }

    metrics
    {
        //  r2InSample: not computed by this operation (it reports chi-square).
        //  NO HELD-OUT METRIC EXISTS.  r2InSample above is exactly that --
        //  in-sample -- and must not be read as an external check.
    }
}

);
`,Pa=`/*--------------------------------*- Choupo -*--------------------------------*\\
  CURATION DOSSIER -- a scientific work record, NOT runtime property data.

  NOTHING IN THIS FILE IS VISIBLE TO THE SOLVER.  Record resolution looks only
  in <case>/constant/, data/standards/ and data/local/, so a file here is out
  of its reach BY CONSTRUCTION -- not by convention.

  Nothing here has been promoted.  Curation state belongs to the evidence
  process; runtime trust belongs to the numerical record actually admitted
  to data/standards/, and only an explicit human promotion moves one there
  (bin/curate/promote-from-dossier).

  MATURITY IS PER PROPERTY, not per component: the properties below may hold
  different verdicts, and any whole-component summary is DERIVED from them
  rather than stored beside them.

  Regenerated on every run.  Hand edits are lost.
\\*-----------------------------------------------------------------------------*/

component      ethanol;
reviewStatus   unreviewed;

properties
(
{
    property       binaryVLE.T_bubble;
    operation      fit_nrtl;   // type fitParameters
    model          "NRTL binary pair, bubble-T residual at fixed P";
    verdict        validationRefused;
    refusal        "No independent experimental evidence remains after fitting.";

    fittedParameters
    {
        equilibrium.liquid.activityModel.binaryParameters.ethanol-ethyleneGlycol.b_ij  12.2823200797;
        equilibrium.liquid.activityModel.binaryParameters.ethanol-ethyleneGlycol.b_ji  221.780214945;
    }

    evidence
    {
        partitionFingerprint  "38a1765573116961";   // frozen before the fit

        datasets
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

        domain
        {
            coordinate  x1;
            fit         { min 0.177; max 0.9584; n 34; }
        }
    }

    metrics
    {
        //  r2InSample: not computed by this operation (it reports chi-square).
        //  NO HELD-OUT METRIC EXISTS.  r2InSample above is exactly that --
        //  in-sample -- and must not be read as an external check.
    }
}

{
    property       binaryVLE.T_bubble;
    operation      fit_nrtl_start2;   // type fitParameters
    model          "NRTL binary pair, bubble-T residual at fixed P";
    verdict        validationRefused;
    refusal        "No independent experimental evidence remains after fitting.";

    fittedParameters
    {
        equilibrium.liquid.activityModel.binaryParameters.ethanol-ethyleneGlycol.b_ij  12.2823193985;
        equilibrium.liquid.activityModel.binaryParameters.ethanol-ethyleneGlycol.b_ji  221.780215773;
    }

    evidence
    {
        partitionFingerprint  "38a1765573116961";   // frozen before the fit

        datasets
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

        domain
        {
            coordinate  x1;
            fit         { min 0.177; max 0.9584; n 34; }
        }
    }

    metrics
    {
        //  r2InSample: not computed by this operation (it reports chi-square).
        //  NO HELD-OUT METRIC EXISTS.  r2InSample above is exactly that --
        //  in-sample -- and must not be read as an external check.
    }
}

);
`,Sa=`/*--------------------------------*- Choupo -*--------------------------------*\\
  CURATION DOSSIER -- a scientific work record, NOT runtime property data.

  NOTHING IN THIS FILE IS VISIBLE TO THE SOLVER.  Record resolution looks only
  in <case>/constant/, data/standards/ and data/local/, so a file here is out
  of its reach BY CONSTRUCTION -- not by convention.

  Nothing here has been promoted.  Curation state belongs to the evidence
  process; runtime trust belongs to the numerical record actually admitted
  to data/standards/, and only an explicit human promotion moves one there
  (bin/curate/promote-from-dossier).

  MATURITY IS PER PROPERTY, not per component: the properties below may hold
  different verdicts, and any whole-component summary is DERIVED from them
  rather than stored beside them.

  Regenerated on every run.  Hand edits are lost.
\\*-----------------------------------------------------------------------------*/

component      ethanol;
reviewStatus   unreviewed;

properties
(
{
    property       binaryVLE.T_bubble;
    operation      fit_nrtl;   // type fitParameters
    model          "NRTL binary pair, bubble-T residual at fixed P";
    verdict        validationRefused;
    refusal        "No independent experimental evidence remains after fitting.";

    fittedParameters
    {
        equilibrium.liquid.activityModel.binaryParameters.ethanol-methylEthylKetone.b_ij  159.611997549;
        equilibrium.liquid.activityModel.binaryParameters.ethanol-methylEthylKetone.b_ji  82.4702531319;
    }

    evidence
    {
        partitionFingerprint  "9ddb9620522830a9";   // frozen before the fit

        datasets
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

        domain
        {
            coordinate  x1;
            fit         { min 0.026; max 0.971; n 53; }
        }
    }

    metrics
    {
        //  r2InSample: not computed by this operation (it reports chi-square).
        //  NO HELD-OUT METRIC EXISTS.  r2InSample above is exactly that --
        //  in-sample -- and must not be read as an external check.
    }
}

{
    property       binaryVLE.T_bubble;
    operation      fit_nrtl_start2;   // type fitParameters
    model          "NRTL binary pair, bubble-T residual at fixed P";
    verdict        validationRefused;
    refusal        "No independent experimental evidence remains after fitting.";

    fittedParameters
    {
        equilibrium.liquid.activityModel.binaryParameters.ethanol-methylEthylKetone.b_ij  159.611997111;
        equilibrium.liquid.activityModel.binaryParameters.ethanol-methylEthylKetone.b_ji  82.4702534517;
    }

    evidence
    {
        partitionFingerprint  "9ddb9620522830a9";   // frozen before the fit

        datasets
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

        domain
        {
            coordinate  x1;
            fit         { min 0.026; max 0.971; n 53; }
        }
    }

    metrics
    {
        //  r2InSample: not computed by this operation (it reports chi-square).
        //  NO HELD-OUT METRIC EXISTS.  r2InSample above is exactly that --
        //  in-sample -- and must not be read as an external check.
    }
}

);
`,Ra=`/*--------------------------------*- Choupo -*--------------------------------*\\
  CURATION DOSSIER -- a scientific work record, NOT runtime property data.

  NOTHING IN THIS FILE IS VISIBLE TO THE SOLVER.  Record resolution looks only
  in <case>/constant/, data/standards/ and data/local/, so a file here is out
  of its reach BY CONSTRUCTION -- not by convention.

  Nothing here has been promoted.  Curation state belongs to the evidence
  process; runtime trust belongs to the numerical record actually admitted
  to data/standards/, and only an explicit human promotion moves one there
  (bin/curate/promote-from-dossier).

  MATURITY IS PER PROPERTY, not per component: the properties below may hold
  different verdicts, and any whole-component summary is DERIVED from them
  rather than stored beside them.

  Regenerated on every run.  Hand edits are lost.
\\*-----------------------------------------------------------------------------*/

component      ethanol;
reviewStatus   unreviewed;

properties
(
{
    property       binaryVLE.P_bubble;
    operation      fit_nrtl;   // type fitParameters
    model          "binary pair, relative bubble-P residual at fixed T";
    verdict        validationRefused;
    refusal        "No independent experimental evidence remains after fitting.";

    fittedParameters
    {
        equilibrium.liquid.activityModel.binaryParameters.ethanol-nNDimethylacetamide.b_ij  -24.7163641631;
        equilibrium.liquid.activityModel.binaryParameters.ethanol-nNDimethylacetamide.b_ji  -223.584353789;
    }

    evidence
    {
        partitionFingerprint  "7b4908c619e0ebfa";   // frozen before the fit

        datasets
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

        domain
        {
            coordinate  x1;
            fit         { min 0.0047; max 0.9991; n 59; }
        }
    }

    metrics
    {
        //  r2InSample: not computed by this operation (it reports chi-square).
        //  NO HELD-OUT METRIC EXISTS.  r2InSample above is exactly that --
        //  in-sample -- and must not be read as an external check.
    }
}

{
    property       binaryVLE.P_bubble;
    operation      fit_nrtl_start2;   // type fitParameters
    model          "binary pair, relative bubble-P residual at fixed T";
    verdict        validationRefused;
    refusal        "No independent experimental evidence remains after fitting.";

    fittedParameters
    {
        equilibrium.liquid.activityModel.binaryParameters.ethanol-nNDimethylacetamide.b_ij  -24.7163649531;
        equilibrium.liquid.activityModel.binaryParameters.ethanol-nNDimethylacetamide.b_ji  -223.58435305;
    }

    evidence
    {
        partitionFingerprint  "7b4908c619e0ebfa";   // frozen before the fit

        datasets
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

        domain
        {
            coordinate  x1;
            fit         { min 0.0047; max 0.9991; n 59; }
        }
    }

    metrics
    {
        //  r2InSample: not computed by this operation (it reports chi-square).
        //  NO HELD-OUT METRIC EXISTS.  r2InSample above is exactly that --
        //  in-sample -- and must not be read as an external check.
    }
}

);
`,ja=`/*--------------------------------*- Choupo -*--------------------------------*\\
  CURATION DOSSIER -- a scientific work record, NOT runtime property data.

  NOTHING IN THIS FILE IS VISIBLE TO THE SOLVER.  Record resolution looks only
  in <case>/constant/, data/standards/ and data/local/, so a file here is out
  of its reach BY CONSTRUCTION -- not by convention.

  Nothing here has been promoted.  Curation state belongs to the evidence
  process; runtime trust belongs to the numerical record actually admitted
  to data/standards/, and only an explicit human promotion moves one there
  (bin/curate/promote-from-dossier).

  MATURITY IS PER PROPERTY, not per component: the properties below may hold
  different verdicts, and any whole-component summary is DERIVED from them
  rather than stored beside them.

  Regenerated on every run.  Hand edits are lost.
\\*-----------------------------------------------------------------------------*/

component      nOctane;
reviewStatus   unreviewed;

properties
(
{
    property       binaryVLE.T_bubble;
    operation      fit_nrtl;   // type fitParameters
    model          "NRTL binary pair, bubble-T residual at fixed P";
    verdict        validationRefused;
    refusal        "No independent experimental evidence remains after fitting.";

    fittedParameters
    {
        equilibrium.liquid.activityModel.binaryParameters.nOctane-ethanol.b_ij  506.634760599;
        equilibrium.liquid.activityModel.binaryParameters.nOctane-ethanol.b_ji  442.062129102;
    }

    evidence
    {
        partitionFingerprint  "7cd0d3b7372ceded";   // frozen before the fit

        datasets
        (
        {
            role      fit;
            dataset   "constant/archiveExtracts/nOctane-ethanol-bubble-je400238j.dat";
            doi       "10.1021/je400238j";
            sha256    "b6cdd8126de68ebe83eed932f5c4bfc71f3bfdde95aa91ab3f43adc8a70d5fb3";
            provenance measured;
            archiveFile "je400238j.xml";
            system    "nOctane + ethanol";
        }
        {
            role      fit;
            dataset   "constant/archiveExtracts/nOctane-ethanol-bubble-j.fluid.2018.07.013.dat";
            doi       "10.1016/j.fluid.2018.07.013";
            sha256    "bf89dc3bab99040fa861ace6d5ac84da32efae3e49783c85363a7686e5a8eac5";
            provenance measured;
            archiveFile "j.fluid.2018.07.013.xml";
            system    "nOctane + ethanol";
            pressure  "101300.000000 Pa";
        }
        );

        domain
        {
            coordinate  x1;
            fit         { min 0.005; max 0.9542; n 99; }
        }
    }

    metrics
    {
        //  r2InSample: not computed by this operation (it reports chi-square).
        //  NO HELD-OUT METRIC EXISTS.  r2InSample above is exactly that --
        //  in-sample -- and must not be read as an external check.
    }
}

{
    property       binaryVLE.T_bubble;
    operation      fit_nrtl_start2;   // type fitParameters
    model          "NRTL binary pair, bubble-T residual at fixed P";
    verdict        validationRefused;
    refusal        "No independent experimental evidence remains after fitting.";

    fittedParameters
    {
        equilibrium.liquid.activityModel.binaryParameters.nOctane-ethanol.b_ij  506.634761481;
        equilibrium.liquid.activityModel.binaryParameters.nOctane-ethanol.b_ji  442.062128299;
    }

    evidence
    {
        partitionFingerprint  "7cd0d3b7372ceded";   // frozen before the fit

        datasets
        (
        {
            role      fit;
            dataset   "constant/archiveExtracts/nOctane-ethanol-bubble-je400238j.dat";
            doi       "10.1021/je400238j";
            sha256    "b6cdd8126de68ebe83eed932f5c4bfc71f3bfdde95aa91ab3f43adc8a70d5fb3";
            provenance measured;
            archiveFile "je400238j.xml";
            system    "nOctane + ethanol";
        }
        {
            role      fit;
            dataset   "constant/archiveExtracts/nOctane-ethanol-bubble-j.fluid.2018.07.013.dat";
            doi       "10.1016/j.fluid.2018.07.013";
            sha256    "bf89dc3bab99040fa861ace6d5ac84da32efae3e49783c85363a7686e5a8eac5";
            provenance measured;
            archiveFile "j.fluid.2018.07.013.xml";
            system    "nOctane + ethanol";
            pressure  "101300.000000 Pa";
        }
        );

        domain
        {
            coordinate  x1;
            fit         { min 0.005; max 0.9542; n 99; }
        }
    }

    metrics
    {
        //  r2InSample: not computed by this operation (it reports chi-square).
        //  NO HELD-OUT METRIC EXISTS.  r2InSample above is exactly that --
        //  in-sample -- and must not be read as an external check.
    }
}

);
`,Oa=`/*--------------------------------*- Choupo -*--------------------------------*\\
  CURATION DOSSIER -- a scientific work record, NOT runtime property data.

  NOTHING IN THIS FILE IS VISIBLE TO THE SOLVER.  Record resolution looks only
  in <case>/constant/, data/standards/ and data/local/, so a file here is out
  of its reach BY CONSTRUCTION -- not by convention.

  Nothing here has been promoted.  Curation state belongs to the evidence
  process; runtime trust belongs to the numerical record actually admitted
  to data/standards/, and only an explicit human promotion moves one there
  (bin/curate/promote-from-dossier).

  MATURITY IS PER PROPERTY, not per component: the properties below may hold
  different verdicts, and any whole-component summary is DERIVED from them
  rather than stored beside them.

  Regenerated on every run.  Hand edits are lost.
\\*-----------------------------------------------------------------------------*/

component      oCresol;
reviewStatus   unreviewed;

properties
(
{
    property       binaryVLE.T_bubble;
    operation      fit_nrtl;   // type fitParameters
    model          "NRTL binary pair, bubble-T residual at fixed P";
    verdict        validationRefused;
    refusal        "No independent experimental evidence remains after fitting.";

    fittedParameters
    {
        equilibrium.liquid.activityModel.binaryParameters.oCresol-ethanol.b_ij  -693.251575902;
        equilibrium.liquid.activityModel.binaryParameters.oCresol-ethanol.b_ji  1272.35506799;
    }

    evidence
    {
        partitionFingerprint  "27c5ceee54931407";   // frozen before the fit

        datasets
        (
        {
            role      fit;
            dataset   "constant/archiveExtracts/oCresol-ethanol-bubble-j.fluid.2017.09.008.dat";
            doi       "10.1016/j.fluid.2017.09.008";
            sha256    "466c00147084b1a9e5a22235d6afa9a412b6b06b70a4aa476d0d807dc00a5ea1";
            provenance measured;
            archiveFile "j.fluid.2017.09.008.xml";
            system    "oCresol + ethanol";
        }
        {
            role      fit;
            dataset   "constant/archiveExtracts/oCresol-ethanol-bubble-j.fluid.2006.03.018.dat";
            doi       "10.1016/j.fluid.2006.03.018";
            sha256    "6e931cdb390e5154eade3106db61c1605da2984fb405d27b2b4043d47fc3b77f";
            provenance measured;
            archiveFile "j.fluid.2006.03.018.xml";
            system    "oCresol + ethanol";
            pressure  "95760.000000 Pa";
        }
        );

        domain
        {
            coordinate  x1;
            fit         { min 0.0489; max 0.9488; n 56; }
        }
    }

    metrics
    {
        //  r2InSample: not computed by this operation (it reports chi-square).
        //  NO HELD-OUT METRIC EXISTS.  r2InSample above is exactly that --
        //  in-sample -- and must not be read as an external check.
    }
}

{
    property       binaryVLE.T_bubble;
    operation      fit_nrtl_start2;   // type fitParameters
    model          "NRTL binary pair, bubble-T residual at fixed P";
    verdict        validationRefused;
    refusal        "No independent experimental evidence remains after fitting.";

    fittedParameters
    {
        equilibrium.liquid.activityModel.binaryParameters.oCresol-ethanol.b_ij  993.3308627;
        equilibrium.liquid.activityModel.binaryParameters.oCresol-ethanol.b_ji  -656.602288706;
    }

    evidence
    {
        partitionFingerprint  "27c5ceee54931407";   // frozen before the fit

        datasets
        (
        {
            role      fit;
            dataset   "constant/archiveExtracts/oCresol-ethanol-bubble-j.fluid.2017.09.008.dat";
            doi       "10.1016/j.fluid.2017.09.008";
            sha256    "466c00147084b1a9e5a22235d6afa9a412b6b06b70a4aa476d0d807dc00a5ea1";
            provenance measured;
            archiveFile "j.fluid.2017.09.008.xml";
            system    "oCresol + ethanol";
        }
        {
            role      fit;
            dataset   "constant/archiveExtracts/oCresol-ethanol-bubble-j.fluid.2006.03.018.dat";
            doi       "10.1016/j.fluid.2006.03.018";
            sha256    "6e931cdb390e5154eade3106db61c1605da2984fb405d27b2b4043d47fc3b77f";
            provenance measured;
            archiveFile "j.fluid.2006.03.018.xml";
            system    "oCresol + ethanol";
            pressure  "95760.000000 Pa";
        }
        );

        domain
        {
            coordinate  x1;
            fit         { min 0.0489; max 0.9488; n 56; }
        }
    }

    metrics
    {
        //  r2InSample: not computed by this operation (it reports chi-square).
        //  NO HELD-OUT METRIC EXISTS.  r2InSample above is exactly that --
        //  in-sample -- and must not be read as an external check.
    }
}

);
`,Na=`/*--------------------------------*- Choupo -*--------------------------------*\\
  CURATION DOSSIER -- a scientific work record, NOT runtime property data.

  NOTHING IN THIS FILE IS VISIBLE TO THE SOLVER.  Record resolution looks only
  in <case>/constant/, data/standards/ and data/local/, so a file here is out
  of its reach BY CONSTRUCTION -- not by convention.

  Nothing here has been promoted.  Curation state belongs to the evidence
  process; runtime trust belongs to the numerical record actually admitted
  to data/standards/, and only an explicit human promotion moves one there
  (bin/curate/promote-from-dossier).

  MATURITY IS PER PROPERTY, not per component: the properties below may hold
  different verdicts, and any whole-component summary is DERIVED from them
  rather than stored beside them.

  Regenerated on every run.  Hand edits are lost.
\\*-----------------------------------------------------------------------------*/

component      ethanol;
reviewStatus   unreviewed;

properties
(
{
    property       binaryVLE.T_bubble;
    operation      fit_nrtl;   // type fitParameters
    model          "NRTL binary pair, bubble-T residual at fixed P";
    verdict        validationRefused;
    refusal        "No independent experimental evidence remains after fitting.";

    fittedParameters
    {
        equilibrium.liquid.activityModel.binaryParameters.ethanol-pXylene.b_ij  209.480049078;
        equilibrium.liquid.activityModel.binaryParameters.ethanol-pXylene.b_ji  514.178089311;
    }

    evidence
    {
        partitionFingerprint  "904f923cfbd52c74";   // frozen before the fit

        datasets
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

        domain
        {
            coordinate  x1;
            fit         { min 0.008; max 0.979; n 81; }
        }
    }

    metrics
    {
        //  r2InSample: not computed by this operation (it reports chi-square).
        //  NO HELD-OUT METRIC EXISTS.  r2InSample above is exactly that --
        //  in-sample -- and must not be read as an external check.
    }
}

{
    property       binaryVLE.T_bubble;
    operation      fit_nrtl_start2;   // type fitParameters
    model          "NRTL binary pair, bubble-T residual at fixed P";
    verdict        validationRefused;
    refusal        "No independent experimental evidence remains after fitting.";

    fittedParameters
    {
        equilibrium.liquid.activityModel.binaryParameters.ethanol-pXylene.b_ij  209.4816692;
        equilibrium.liquid.activityModel.binaryParameters.ethanol-pXylene.b_ji  514.176574302;
    }

    evidence
    {
        partitionFingerprint  "904f923cfbd52c74";   // frozen before the fit

        datasets
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

        domain
        {
            coordinate  x1;
            fit         { min 0.008; max 0.979; n 81; }
        }
    }

    metrics
    {
        //  r2InSample: not computed by this operation (it reports chi-square).
        //  NO HELD-OUT METRIC EXISTS.  r2InSample above is exactly that --
        //  in-sample -- and must not be read as an external check.
    }
}

);
`,_a=`/*--------------------------------*- Choupo -*--------------------------------*\\
  CURATION DOSSIER -- a scientific work record, NOT runtime property data.

  NOTHING IN THIS FILE IS VISIBLE TO THE SOLVER.  Record resolution looks only
  in <case>/constant/, data/standards/ and data/local/, so a file here is out
  of its reach BY CONSTRUCTION -- not by convention.

  Nothing here has been promoted.  Curation state belongs to the evidence
  process; runtime trust belongs to the numerical record actually admitted
  to data/standards/, and only an explicit human promotion moves one there
  (bin/curate/promote-from-dossier).

  MATURITY IS PER PROPERTY, not per component: the properties below may hold
  different verdicts, and any whole-component summary is DERIVED from them
  rather than stored beside them.

  Regenerated on every run.  Hand edits are lost.
\\*-----------------------------------------------------------------------------*/

component      ethylAcetate;
reviewStatus   unreviewed;

properties
(
{
    property       binaryVLE.T_bubble;
    operation      fit_nrtl;   // type fitParameters
    model          "NRTL binary pair, bubble-T residual at fixed P";
    verdict        validationRefused;
    refusal        "No independent experimental evidence remains after fitting.";

    fittedParameters
    {
        equilibrium.liquid.activityModel.binaryParameters.ethylAcetate-methanol.b_ij  202.46691506;
        equilibrium.liquid.activityModel.binaryParameters.ethylAcetate-methanol.b_ji  173.642945306;
    }

    evidence
    {
        partitionFingerprint  "60e301c3e8c4c390";   // frozen before the fit

        datasets
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

        domain
        {
            coordinate  x1;
            fit         { min 0.023; max 0.983; n 32; }
        }
    }

    metrics
    {
        //  r2InSample: not computed by this operation (it reports chi-square).
        //  NO HELD-OUT METRIC EXISTS.  r2InSample above is exactly that --
        //  in-sample -- and must not be read as an external check.
    }
}

{
    property       binaryVLE.T_bubble;
    operation      fit_nrtl_start2;   // type fitParameters
    model          "NRTL binary pair, bubble-T residual at fixed P";
    verdict        validationRefused;
    refusal        "No independent experimental evidence remains after fitting.";

    fittedParameters
    {
        equilibrium.liquid.activityModel.binaryParameters.ethylAcetate-methanol.b_ij  202.466914676;
        equilibrium.liquid.activityModel.binaryParameters.ethylAcetate-methanol.b_ji  173.642945626;
    }

    evidence
    {
        partitionFingerprint  "60e301c3e8c4c390";   // frozen before the fit

        datasets
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

        domain
        {
            coordinate  x1;
            fit         { min 0.023; max 0.983; n 32; }
        }
    }

    metrics
    {
        //  r2InSample: not computed by this operation (it reports chi-square).
        //  NO HELD-OUT METRIC EXISTS.  r2InSample above is exactly that --
        //  in-sample -- and must not be read as an external check.
    }
}

);
`,ga=`/*--------------------------------*- Choupo -*--------------------------------*\\
  CURATION DOSSIER -- a scientific work record, NOT runtime property data.

  NOTHING IN THIS FILE IS VISIBLE TO THE SOLVER.  Record resolution looks only
  in <case>/constant/, data/standards/ and data/local/, so a file here is out
  of its reach BY CONSTRUCTION -- not by convention.

  Nothing here has been promoted.  Curation state belongs to the evidence
  process; runtime trust belongs to the numerical record actually admitted
  to data/standards/, and only an explicit human promotion moves one there
  (bin/curate/promote-from-dossier).

  MATURITY IS PER PROPERTY, not per component: the properties below may hold
  different verdicts, and any whole-component summary is DERIVED from them
  rather than stored beside them.

  Regenerated on every run.  Hand edits are lost.
\\*-----------------------------------------------------------------------------*/

component      ethylBenzene;
reviewStatus   unreviewed;

properties
(
{
    property       binaryVLE.T_bubble;
    operation      fit_nrtl;   // type fitParameters
    model          "NRTL binary pair, bubble-T residual at fixed P";
    verdict        validationRefused;
    refusal        "No independent experimental evidence remains after fitting.";

    fittedParameters
    {
        equilibrium.liquid.activityModel.binaryParameters.ethylBenzene-monochlorobenzene.b_ij  319.822931013;
        equilibrium.liquid.activityModel.binaryParameters.ethylBenzene-monochlorobenzene.b_ji  -258.857019408;
    }

    evidence
    {
        partitionFingerprint  "4f48655e2f6409fe";   // frozen before the fit

        datasets
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

        domain
        {
            coordinate  x1;
            fit         { min 0.119; max 0.853; n 26; }
        }
    }

    metrics
    {
        //  r2InSample: not computed by this operation (it reports chi-square).
        //  NO HELD-OUT METRIC EXISTS.  r2InSample above is exactly that --
        //  in-sample -- and must not be read as an external check.
    }
}

{
    property       binaryVLE.T_bubble;
    operation      fit_nrtl_start2;   // type fitParameters
    model          "NRTL binary pair, bubble-T residual at fixed P";
    verdict        validationRefused;
    refusal        "No independent experimental evidence remains after fitting.";

    fittedParameters
    {
        equilibrium.liquid.activityModel.binaryParameters.ethylBenzene-monochlorobenzene.b_ij  319.822930264;
        equilibrium.liquid.activityModel.binaryParameters.ethylBenzene-monochlorobenzene.b_ji  -258.857018939;
    }

    evidence
    {
        partitionFingerprint  "4f48655e2f6409fe";   // frozen before the fit

        datasets
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

        domain
        {
            coordinate  x1;
            fit         { min 0.119; max 0.853; n 26; }
        }
    }

    metrics
    {
        //  r2InSample: not computed by this operation (it reports chi-square).
        //  NO HELD-OUT METRIC EXISTS.  r2InSample above is exactly that --
        //  in-sample -- and must not be read as an external check.
    }
}

);
`,Ca=`/*--------------------------------*- Choupo -*--------------------------------*\\
  CURATION DOSSIER -- a scientific work record, NOT runtime property data.

  NOTHING IN THIS FILE IS VISIBLE TO THE SOLVER.  Record resolution looks only
  in <case>/constant/, data/standards/ and data/local/, so a file here is out
  of its reach BY CONSTRUCTION -- not by convention.

  Nothing here has been promoted.  Curation state belongs to the evidence
  process; runtime trust belongs to the numerical record actually admitted
  to data/standards/, and only an explicit human promotion moves one there
  (bin/curate/promote-from-dossier).

  MATURITY IS PER PROPERTY, not per component: the properties below may hold
  different verdicts, and any whole-component summary is DERIVED from them
  rather than stored beside them.

  Regenerated on every run.  Hand edits are lost.
\\*-----------------------------------------------------------------------------*/

component      ethylBenzene;
reviewStatus   unreviewed;

properties
(
{
    property       binaryVLE.T_bubble;
    operation      fit_nrtl;   // type fitParameters
    model          "NRTL binary pair, bubble-T residual at fixed P";
    verdict        validationRefused;
    refusal        "No independent experimental evidence remains after fitting.";

    fittedParameters
    {
        equilibrium.liquid.activityModel.binaryParameters.ethylBenzene-styrene.b_ij  -292.425637621;
        equilibrium.liquid.activityModel.binaryParameters.ethylBenzene-styrene.b_ji  258.339042833;
    }

    evidence
    {
        partitionFingerprint  "5f9c810ca1807d11";   // frozen before the fit

        datasets
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

        domain
        {
            coordinate  x1;
            fit         { min 0.026; max 0.978; n 71; }
        }
    }

    metrics
    {
        //  r2InSample: not computed by this operation (it reports chi-square).
        //  NO HELD-OUT METRIC EXISTS.  r2InSample above is exactly that --
        //  in-sample -- and must not be read as an external check.
    }
}

{
    property       binaryVLE.T_bubble;
    operation      fit_nrtl_start2;   // type fitParameters
    model          "NRTL binary pair, bubble-T residual at fixed P";
    verdict        validationRefused;
    refusal        "No independent experimental evidence remains after fitting.";

    fittedParameters
    {
        equilibrium.liquid.activityModel.binaryParameters.ethylBenzene-styrene.b_ij  1397.80382876;
        equilibrium.liquid.activityModel.binaryParameters.ethylBenzene-styrene.b_ji  -566.747715958;
    }

    evidence
    {
        partitionFingerprint  "5f9c810ca1807d11";   // frozen before the fit

        datasets
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

        domain
        {
            coordinate  x1;
            fit         { min 0.026; max 0.978; n 71; }
        }
    }

    metrics
    {
        //  r2InSample: not computed by this operation (it reports chi-square).
        //  NO HELD-OUT METRIC EXISTS.  r2InSample above is exactly that --
        //  in-sample -- and must not be read as an external check.
    }
}

);
`,Ha=`/*--------------------------------*- Choupo -*--------------------------------*\\
  CURATION DOSSIER -- a scientific work record, NOT runtime property data.

  NOTHING IN THIS FILE IS VISIBLE TO THE SOLVER.  Record resolution looks only
  in <case>/constant/, data/standards/ and data/local/, so a file here is out
  of its reach BY CONSTRUCTION -- not by convention.

  Nothing here has been promoted.  Curation state belongs to the evidence
  process; runtime trust belongs to the numerical record actually admitted
  to data/standards/, and only an explicit human promotion moves one there
  (bin/curate/promote-from-dossier).

  MATURITY IS PER PROPERTY, not per component: the properties below may hold
  different verdicts, and any whole-component summary is DERIVED from them
  rather than stored beside them.

  Regenerated on every run.  Hand edits are lost.
\\*-----------------------------------------------------------------------------*/

component      ethylBenzene;
reviewStatus   unreviewed;

properties
(
{
    property       binaryVLE.T_bubble;
    operation      fit_nrtl;   // type fitParameters
    model          "NRTL binary pair, bubble-T residual at fixed P";
    verdict        validationRefused;
    refusal        "No independent experimental evidence remains after fitting.";

    fittedParameters
    {
        equilibrium.liquid.activityModel.binaryParameters.ethylBenzene-sulfolane.b_ij  583.690427756;
        equilibrium.liquid.activityModel.binaryParameters.ethylBenzene-sulfolane.b_ji  312.69517845;
    }

    evidence
    {
        partitionFingerprint  "5674c80d83839d71";   // frozen before the fit

        datasets
        (
        {
            role      fit;
            dataset   "constant/archiveExtracts/ethylBenzene-sulfolane-bubble-je200098d.dat";
            doi       "10.1021/je200098d";
            sha256    "97dcfdc89bc224473ec4eda70c0b694993ef025bd398181a5f734c77e767e829";
            provenance measured;
            archiveFile "je200098d.xml";
            system    "ethylBenzene + sulfolane";
        }
        {
            role      fit;
            dataset   "constant/archiveExtracts/ethylBenzene-sulfolane-bubble-j.jct.2011.06.015.dat";
            doi       "10.1016/j.jct.2011.06.015";
            sha256    "6ca560d21b83b024a39de412edb51563482ad9044e16ea1adecd62f8c790d7b5";
            provenance measured;
            archiveFile "j.jct.2011.06.015.xml";
            system    "ethylBenzene + sulfolane";
            pressure  "101330.000000 Pa";
        }
        );

        domain
        {
            coordinate  x1;
            fit         { min 0.0337; max 0.913; n 28; }
        }
    }

    metrics
    {
        //  r2InSample: not computed by this operation (it reports chi-square).
        //  NO HELD-OUT METRIC EXISTS.  r2InSample above is exactly that --
        //  in-sample -- and must not be read as an external check.
    }
}

{
    property       binaryVLE.T_bubble;
    operation      fit_nrtl_start2;   // type fitParameters
    model          "NRTL binary pair, bubble-T residual at fixed P";
    verdict        validationRefused;
    refusal        "No independent experimental evidence remains after fitting.";

    fittedParameters
    {
        equilibrium.liquid.activityModel.binaryParameters.ethylBenzene-sulfolane.b_ij  583.690427614;
        equilibrium.liquid.activityModel.binaryParameters.ethylBenzene-sulfolane.b_ji  312.695178421;
    }

    evidence
    {
        partitionFingerprint  "5674c80d83839d71";   // frozen before the fit

        datasets
        (
        {
            role      fit;
            dataset   "constant/archiveExtracts/ethylBenzene-sulfolane-bubble-je200098d.dat";
            doi       "10.1021/je200098d";
            sha256    "97dcfdc89bc224473ec4eda70c0b694993ef025bd398181a5f734c77e767e829";
            provenance measured;
            archiveFile "je200098d.xml";
            system    "ethylBenzene + sulfolane";
        }
        {
            role      fit;
            dataset   "constant/archiveExtracts/ethylBenzene-sulfolane-bubble-j.jct.2011.06.015.dat";
            doi       "10.1016/j.jct.2011.06.015";
            sha256    "6ca560d21b83b024a39de412edb51563482ad9044e16ea1adecd62f8c790d7b5";
            provenance measured;
            archiveFile "j.jct.2011.06.015.xml";
            system    "ethylBenzene + sulfolane";
            pressure  "101330.000000 Pa";
        }
        );

        domain
        {
            coordinate  x1;
            fit         { min 0.0337; max 0.913; n 28; }
        }
    }

    metrics
    {
        //  r2InSample: not computed by this operation (it reports chi-square).
        //  NO HELD-OUT METRIC EXISTS.  r2InSample above is exactly that --
        //  in-sample -- and must not be read as an external check.
    }
}

);
`,qa=`/*--------------------------------*- Choupo -*--------------------------------*\\
  CURATION DOSSIER -- a scientific work record, NOT runtime property data.

  NOTHING IN THIS FILE IS VISIBLE TO THE SOLVER.  Record resolution looks only
  in <case>/constant/, data/standards/ and data/local/, so a file here is out
  of its reach BY CONSTRUCTION -- not by convention.

  Nothing here has been promoted.  Curation state belongs to the evidence
  process; runtime trust belongs to the numerical record actually admitted
  to data/standards/, and only an explicit human promotion moves one there
  (bin/curate/promote-from-dossier).

  MATURITY IS PER PROPERTY, not per component: the properties below may hold
  different verdicts, and any whole-component summary is DERIVED from them
  rather than stored beside them.

  Regenerated on every run.  Hand edits are lost.
\\*-----------------------------------------------------------------------------*/

component      water;
reviewStatus   unreviewed;

properties
(
{
    property       binaryVLE.T_bubble;
    operation      fit_nrtl;   // type fitParameters
    model          "NRTL binary pair, bubble-T residual at fixed P";
    verdict        validationRefused;
    refusal        "No independent experimental evidence remains after fitting.";

    fittedParameters
    {
        equilibrium.liquid.activityModel.binaryParameters.water-ethyleneGlycol.b_ij  349.983901729;
        equilibrium.liquid.activityModel.binaryParameters.water-ethyleneGlycol.b_ji  -358.939494793;
    }

    evidence
    {
        partitionFingerprint  "d185cc264c30fd5e";   // frozen before the fit

        datasets
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

        domain
        {
            coordinate  x1;
            fit         { min 0.02; max 0.999; n 73; }
        }
    }

    metrics
    {
        //  r2InSample: not computed by this operation (it reports chi-square).
        //  NO HELD-OUT METRIC EXISTS.  r2InSample above is exactly that --
        //  in-sample -- and must not be read as an external check.
    }
}

{
    property       binaryVLE.T_bubble;
    operation      fit_nrtl_start2;   // type fitParameters
    model          "NRTL binary pair, bubble-T residual at fixed P";
    verdict        validationRefused;
    refusal        "No independent experimental evidence remains after fitting.";

    fittedParameters
    {
        equilibrium.liquid.activityModel.binaryParameters.water-ethyleneGlycol.b_ij  349.985635515;
        equilibrium.liquid.activityModel.binaryParameters.water-ethyleneGlycol.b_ji  -358.940533846;
    }

    evidence
    {
        partitionFingerprint  "d185cc264c30fd5e";   // frozen before the fit

        datasets
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

        domain
        {
            coordinate  x1;
            fit         { min 0.02; max 0.999; n 73; }
        }
    }

    metrics
    {
        //  r2InSample: not computed by this operation (it reports chi-square).
        //  NO HELD-OUT METRIC EXISTS.  r2InSample above is exactly that --
        //  in-sample -- and must not be read as an external check.
    }
}

);
`,Da=`/*--------------------------------*- Choupo -*--------------------------------*\\
  CURATION DOSSIER -- a scientific work record, NOT runtime property data.

  NOTHING IN THIS FILE IS VISIBLE TO THE SOLVER.  Record resolution looks only
  in <case>/constant/, data/standards/ and data/local/, so a file here is out
  of its reach BY CONSTRUCTION -- not by convention.

  Nothing here has been promoted.  Curation state belongs to the evidence
  process; runtime trust belongs to the numerical record actually admitted
  to data/standards/, and only an explicit human promotion moves one there
  (bin/curate/promote-from-dossier).

  MATURITY IS PER PROPERTY, not per component: the properties below may hold
  different verdicts, and any whole-component summary is DERIVED from them
  rather than stored beside them.

  Regenerated on every run.  Hand edits are lost.
\\*-----------------------------------------------------------------------------*/

component      isopropylAcetate;
reviewStatus   unreviewed;

properties
(
{
    property       binaryVLE.T_bubble;
    operation      fit_nrtl;   // type fitParameters
    model          "NRTL binary pair, bubble-T residual at fixed P";
    verdict        validationRefused;
    refusal        "No independent experimental evidence remains after fitting.";

    fittedParameters
    {
        equilibrium.liquid.activityModel.binaryParameters.isopropylAcetate-isopropanol.b_ij  177.670570781;
        equilibrium.liquid.activityModel.binaryParameters.isopropylAcetate-isopropanol.b_ji  37.3523778168;
    }

    evidence
    {
        partitionFingerprint  "6aa03f25f3b40f7b";   // frozen before the fit

        datasets
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

        domain
        {
            coordinate  x1;
            fit         { min 0.0009; max 0.9932; n 57; }
        }
    }

    metrics
    {
        //  r2InSample: not computed by this operation (it reports chi-square).
        //  NO HELD-OUT METRIC EXISTS.  r2InSample above is exactly that --
        //  in-sample -- and must not be read as an external check.
    }
}

{
    property       binaryVLE.T_bubble;
    operation      fit_nrtl_start2;   // type fitParameters
    model          "NRTL binary pair, bubble-T residual at fixed P";
    verdict        validationRefused;
    refusal        "No independent experimental evidence remains after fitting.";

    fittedParameters
    {
        equilibrium.liquid.activityModel.binaryParameters.isopropylAcetate-isopropanol.b_ij  177.670569687;
        equilibrium.liquid.activityModel.binaryParameters.isopropylAcetate-isopropanol.b_ji  37.3523787588;
    }

    evidence
    {
        partitionFingerprint  "6aa03f25f3b40f7b";   // frozen before the fit

        datasets
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

        domain
        {
            coordinate  x1;
            fit         { min 0.0009; max 0.9932; n 57; }
        }
    }

    metrics
    {
        //  r2InSample: not computed by this operation (it reports chi-square).
        //  NO HELD-OUT METRIC EXISTS.  r2InSample above is exactly that --
        //  in-sample -- and must not be read as an external check.
    }
}

);
`,La=`/*--------------------------------*- Choupo -*--------------------------------*\\
  CURATION DOSSIER -- a scientific work record, NOT runtime property data.

  NOTHING IN THIS FILE IS VISIBLE TO THE SOLVER.  Record resolution looks only
  in <case>/constant/, data/standards/ and data/local/, so a file here is out
  of its reach BY CONSTRUCTION -- not by convention.

  Nothing here has been promoted.  Curation state belongs to the evidence
  process; runtime trust belongs to the numerical record actually admitted
  to data/standards/, and only an explicit human promotion moves one there
  (bin/curate/promote-from-dossier).

  MATURITY IS PER PROPERTY, not per component: the properties below may hold
  different verdicts, and any whole-component summary is DERIVED from them
  rather than stored beside them.

  Regenerated on every run.  Hand edits are lost.
\\*-----------------------------------------------------------------------------*/

component      methanol;
reviewStatus   unreviewed;

properties
(
{
    property       binaryVLE.T_bubble;
    operation      fit_nrtl;   // type fitParameters
    model          "NRTL binary pair, bubble-T residual at fixed P";
    verdict        validationRefused;
    refusal        "No independent experimental evidence remains after fitting.";

    fittedParameters
    {
        equilibrium.liquid.activityModel.binaryParameters.methanol-isopropanol.b_ij  82.7393260731;
        equilibrium.liquid.activityModel.binaryParameters.methanol-isopropanol.b_ji  -60.6532988476;
    }

    evidence
    {
        partitionFingerprint  "b1766cc71ab2cf49";   // frozen before the fit

        datasets
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

        domain
        {
            coordinate  x1;
            fit         { min 0.023; max 0.973; n 111; }
        }
    }

    metrics
    {
        //  r2InSample: not computed by this operation (it reports chi-square).
        //  NO HELD-OUT METRIC EXISTS.  r2InSample above is exactly that --
        //  in-sample -- and must not be read as an external check.
    }
}

{
    property       binaryVLE.T_bubble;
    operation      fit_nrtl_start2;   // type fitParameters
    model          "NRTL binary pair, bubble-T residual at fixed P";
    verdict        validationRefused;
    refusal        "No independent experimental evidence remains after fitting.";

    fittedParameters
    {
        equilibrium.liquid.activityModel.binaryParameters.methanol-isopropanol.b_ij  85.7308785362;
        equilibrium.liquid.activityModel.binaryParameters.methanol-isopropanol.b_ji  -63.2925287702;
    }

    evidence
    {
        partitionFingerprint  "b1766cc71ab2cf49";   // frozen before the fit

        datasets
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

        domain
        {
            coordinate  x1;
            fit         { min 0.023; max 0.973; n 111; }
        }
    }

    metrics
    {
        //  r2InSample: not computed by this operation (it reports chi-square).
        //  NO HELD-OUT METRIC EXISTS.  r2InSample above is exactly that --
        //  in-sample -- and must not be read as an external check.
    }
}

);
`,Fa=`/*--------------------------------*- Choupo -*--------------------------------*\\
  CURATION DOSSIER -- a scientific work record, NOT runtime property data.

  NOTHING IN THIS FILE IS VISIBLE TO THE SOLVER.  Record resolution looks only
  in <case>/constant/, data/standards/ and data/local/, so a file here is out
  of its reach BY CONSTRUCTION -- not by convention.

  Nothing here has been promoted.  Curation state belongs to the evidence
  process; runtime trust belongs to the numerical record actually admitted
  to data/standards/, and only an explicit human promotion moves one there
  (bin/curate/promote-from-dossier).

  MATURITY IS PER PROPERTY, not per component: the properties below may hold
  different verdicts, and any whole-component summary is DERIVED from them
  rather than stored beside them.

  Regenerated on every run.  Hand edits are lost.
\\*-----------------------------------------------------------------------------*/

component      nDecane;
reviewStatus   unreviewed;

properties
(
{
    property       binaryVLE.T_bubble;
    operation      fit_nrtl;   // type fitParameters
    model          "NRTL binary pair, bubble-T residual at fixed P";
    verdict        validationRefused;
    refusal        "No independent experimental evidence remains after fitting.";

    fittedParameters
    {
        equilibrium.liquid.activityModel.binaryParameters.nDecane-mXylene.b_ij  -262.971373865;
        equilibrium.liquid.activityModel.binaryParameters.nDecane-mXylene.b_ji  429.459142427;
    }

    evidence
    {
        partitionFingerprint  "ebe037a62baf7110";   // frozen before the fit

        datasets
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

        domain
        {
            coordinate  x1;
            fit         { min 0.063; max 0.973; n 12; }
        }
    }

    metrics
    {
        //  r2InSample: not computed by this operation (it reports chi-square).
        //  NO HELD-OUT METRIC EXISTS.  r2InSample above is exactly that --
        //  in-sample -- and must not be read as an external check.
    }
}

{
    property       binaryVLE.T_bubble;
    operation      fit_nrtl_start2;   // type fitParameters
    model          "NRTL binary pair, bubble-T residual at fixed P";
    verdict        validationRefused;
    refusal        "No independent experimental evidence remains after fitting.";

    fittedParameters
    {
        equilibrium.liquid.activityModel.binaryParameters.nDecane-mXylene.b_ij  -262.971374942;
        equilibrium.liquid.activityModel.binaryParameters.nDecane-mXylene.b_ji  429.459144192;
    }

    evidence
    {
        partitionFingerprint  "ebe037a62baf7110";   // frozen before the fit

        datasets
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

        domain
        {
            coordinate  x1;
            fit         { min 0.063; max 0.973; n 12; }
        }
    }

    metrics
    {
        //  r2InSample: not computed by this operation (it reports chi-square).
        //  NO HELD-OUT METRIC EXISTS.  r2InSample above is exactly that --
        //  in-sample -- and must not be read as an external check.
    }
}

);
`,wa=`/*--------------------------------*- Choupo -*--------------------------------*\\
  CURATION DOSSIER -- a scientific work record, NOT runtime property data.

  NOTHING IN THIS FILE IS VISIBLE TO THE SOLVER.  Record resolution looks only
  in <case>/constant/, data/standards/ and data/local/, so a file here is out
  of its reach BY CONSTRUCTION -- not by convention.

  Nothing here has been promoted.  Curation state belongs to the evidence
  process; runtime trust belongs to the numerical record actually admitted
  to data/standards/, and only an explicit human promotion moves one there
  (bin/curate/promote-from-dossier).

  MATURITY IS PER PROPERTY, not per component: the properties below may hold
  different verdicts, and any whole-component summary is DERIVED from them
  rather than stored beside them.

  Regenerated on every run.  Hand edits are lost.
\\*-----------------------------------------------------------------------------*/

component      nOctane;
reviewStatus   unreviewed;

properties
(
{
    property       binaryVLE.T_bubble;
    operation      fit_nrtl;   // type fitParameters
    model          "NRTL binary pair, bubble-T residual at fixed P";
    verdict        validationRefused;
    refusal        "No independent experimental evidence remains after fitting.";

    fittedParameters
    {
        equilibrium.liquid.activityModel.binaryParameters.nOctane-mXylene.b_ij  -311.216859749;
        equilibrium.liquid.activityModel.binaryParameters.nOctane-mXylene.b_ji  477.80363257;
    }

    evidence
    {
        partitionFingerprint  "841956cf10271d58";   // frozen before the fit

        datasets
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

        domain
        {
            coordinate  x1;
            fit         { min 0.038; max 0.948; n 24; }
        }
    }

    metrics
    {
        //  r2InSample: not computed by this operation (it reports chi-square).
        //  NO HELD-OUT METRIC EXISTS.  r2InSample above is exactly that --
        //  in-sample -- and must not be read as an external check.
    }
}

{
    property       binaryVLE.T_bubble;
    operation      fit_nrtl_start2;   // type fitParameters
    model          "NRTL binary pair, bubble-T residual at fixed P";
    verdict        validationRefused;
    refusal        "No independent experimental evidence remains after fitting.";

    fittedParameters
    {
        equilibrium.liquid.activityModel.binaryParameters.nOctane-mXylene.b_ij  -311.216861291;
        equilibrium.liquid.activityModel.binaryParameters.nOctane-mXylene.b_ji  477.803635432;
    }

    evidence
    {
        partitionFingerprint  "841956cf10271d58";   // frozen before the fit

        datasets
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

        domain
        {
            coordinate  x1;
            fit         { min 0.038; max 0.948; n 24; }
        }
    }

    metrics
    {
        //  r2InSample: not computed by this operation (it reports chi-square).
        //  NO HELD-OUT METRIC EXISTS.  r2InSample above is exactly that --
        //  in-sample -- and must not be read as an external check.
    }
}

);
`,Ma=`/*--------------------------------*- Choupo -*--------------------------------*\\
  CURATION DOSSIER -- a scientific work record, NOT runtime property data.

  NOTHING IN THIS FILE IS VISIBLE TO THE SOLVER.  Record resolution looks only
  in <case>/constant/, data/standards/ and data/local/, so a file here is out
  of its reach BY CONSTRUCTION -- not by convention.

  Nothing here has been promoted.  Curation state belongs to the evidence
  process; runtime trust belongs to the numerical record actually admitted
  to data/standards/, and only an explicit human promotion moves one there
  (bin/curate/promote-from-dossier).

  MATURITY IS PER PROPERTY, not per component: the properties below may hold
  different verdicts, and any whole-component summary is DERIVED from them
  rather than stored beside them.

  Regenerated on every run.  Hand edits are lost.
\\*-----------------------------------------------------------------------------*/

component      methanol;
reviewStatus   unreviewed;

properties
(
{
    property       binaryVLE.T_bubble;
    operation      fit_nrtl;   // type fitParameters
    model          "NRTL binary pair, bubble-T residual at fixed P";
    verdict        validationRefused;
    refusal        "No independent experimental evidence remains after fitting.";

    fittedParameters
    {
        equilibrium.liquid.activityModel.binaryParameters.methanol-methylEthylKetone.b_ij  242.978938795;
        equilibrium.liquid.activityModel.binaryParameters.methanol-methylEthylKetone.b_ji  22.7909571434;
    }

    evidence
    {
        partitionFingerprint  "1eafc143f4186fb2";   // frozen before the fit

        datasets
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

        domain
        {
            coordinate  x1;
            fit         { min 0.039; max 0.976; n 36; }
        }
    }

    metrics
    {
        //  r2InSample: not computed by this operation (it reports chi-square).
        //  NO HELD-OUT METRIC EXISTS.  r2InSample above is exactly that --
        //  in-sample -- and must not be read as an external check.
    }
}

{
    property       binaryVLE.T_bubble;
    operation      fit_nrtl_start2;   // type fitParameters
    model          "NRTL binary pair, bubble-T residual at fixed P";
    verdict        validationRefused;
    refusal        "No independent experimental evidence remains after fitting.";

    fittedParameters
    {
        equilibrium.liquid.activityModel.binaryParameters.methanol-methylEthylKetone.b_ij  242.978938753;
        equilibrium.liquid.activityModel.binaryParameters.methanol-methylEthylKetone.b_ji  22.7909571503;
    }

    evidence
    {
        partitionFingerprint  "1eafc143f4186fb2";   // frozen before the fit

        datasets
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

        domain
        {
            coordinate  x1;
            fit         { min 0.039; max 0.976; n 36; }
        }
    }

    metrics
    {
        //  r2InSample: not computed by this operation (it reports chi-square).
        //  NO HELD-OUT METRIC EXISTS.  r2InSample above is exactly that --
        //  in-sample -- and must not be read as an external check.
    }
}

);
`,Ba=`/*--------------------------------*- Choupo -*--------------------------------*\\
  CURATION DOSSIER -- a scientific work record, NOT runtime property data.

  NOTHING IN THIS FILE IS VISIBLE TO THE SOLVER.  Record resolution looks only
  in <case>/constant/, data/standards/ and data/local/, so a file here is out
  of its reach BY CONSTRUCTION -- not by convention.

  Nothing here has been promoted.  Curation state belongs to the evidence
  process; runtime trust belongs to the numerical record actually admitted
  to data/standards/, and only an explicit human promotion moves one there
  (bin/curate/promote-from-dossier).

  MATURITY IS PER PROPERTY, not per component: the properties below may hold
  different verdicts, and any whole-component summary is DERIVED from them
  rather than stored beside them.

  Regenerated on every run.  Hand edits are lost.
\\*-----------------------------------------------------------------------------*/

component      tetrahydrofuran;
reviewStatus   unreviewed;

properties
(
{
    property       binaryVLE.T_bubble;
    operation      fit_nrtl;   // type fitParameters
    model          "NRTL binary pair, bubble-T residual at fixed P";
    verdict        validationRefused;
    refusal        "No independent experimental evidence remains after fitting.";

    fittedParameters
    {
        equilibrium.liquid.activityModel.binaryParameters.tetrahydrofuran-methanol.b_ij  241.375050763;
        equilibrium.liquid.activityModel.binaryParameters.tetrahydrofuran-methanol.b_ji  61.3943994081;
    }

    evidence
    {
        partitionFingerprint  "45bb871e7ac16355";   // frozen before the fit

        datasets
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

        domain
        {
            coordinate  x1;
            fit         { min 0.075; max 0.925; n 29; }
        }
    }

    metrics
    {
        //  r2InSample: not computed by this operation (it reports chi-square).
        //  NO HELD-OUT METRIC EXISTS.  r2InSample above is exactly that --
        //  in-sample -- and must not be read as an external check.
    }
}

{
    property       binaryVLE.T_bubble;
    operation      fit_nrtl_start2;   // type fitParameters
    model          "NRTL binary pair, bubble-T residual at fixed P";
    verdict        validationRefused;
    refusal        "No independent experimental evidence remains after fitting.";

    fittedParameters
    {
        equilibrium.liquid.activityModel.binaryParameters.tetrahydrofuran-methanol.b_ij  241.375053654;
        equilibrium.liquid.activityModel.binaryParameters.tetrahydrofuran-methanol.b_ji  61.3943963581;
    }

    evidence
    {
        partitionFingerprint  "45bb871e7ac16355";   // frozen before the fit

        datasets
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

        domain
        {
            coordinate  x1;
            fit         { min 0.075; max 0.925; n 29; }
        }
    }

    metrics
    {
        //  r2InSample: not computed by this operation (it reports chi-square).
        //  NO HELD-OUT METRIC EXISTS.  r2InSample above is exactly that --
        //  in-sample -- and must not be read as an external check.
    }
}

);
`,Ua=`/*--------------------------------*- Choupo -*--------------------------------*\\
  CURATION DOSSIER -- a scientific work record, NOT runtime property data.

  NOTHING IN THIS FILE IS VISIBLE TO THE SOLVER.  Record resolution looks only
  in <case>/constant/, data/standards/ and data/local/, so a file here is out
  of its reach BY CONSTRUCTION -- not by convention.

  Nothing here has been promoted.  Curation state belongs to the evidence
  process; runtime trust belongs to the numerical record actually admitted
  to data/standards/, and only an explicit human promotion moves one there
  (bin/curate/promote-from-dossier).

  MATURITY IS PER PROPERTY, not per component: the properties below may hold
  different verdicts, and any whole-component summary is DERIVED from them
  rather than stored beside them.

  Regenerated on every run.  Hand edits are lost.
\\*-----------------------------------------------------------------------------*/

component      methylFormate;
reviewStatus   unreviewed;

properties
(
{
    property       binaryVLE.T_bubble;
    operation      fit_nrtl;   // type fitParameters
    model          "NRTL binary pair, bubble-T residual at fixed P";
    verdict        validationRefused;
    refusal        "No independent experimental evidence remains after fitting.";

    fittedParameters
    {
        equilibrium.liquid.activityModel.binaryParameters.methylFormate-nHeptane.b_ij  710.252593755;
        equilibrium.liquid.activityModel.binaryParameters.methylFormate-nHeptane.b_ji  158.201969914;
    }

    evidence
    {
        partitionFingerprint  "2f26fd2d9e013a19";   // frozen before the fit

        datasets
        (
        {
            role      fit;
            dataset   "constant/archiveExtracts/methylFormate-nHeptane-bubble-je030117d.dat";
            doi       "10.1021/je030117d";
            sha256    "6a61bbeb74a4593cd945e8c9a97315a44ceea57c18c715f6a034e2403bca3f09";
            provenance measured;
            archiveFile "je030117d.xml";
            system    "methylFormate + nHeptane";
            pressure  "101325.000000 Pa";
        }
        {
            role      fit;
            dataset   "constant/archiveExtracts/methylFormate-nHeptane-bubble-j.fluid.2015.05.031.dat";
            doi       "10.1016/j.fluid.2015.05.031";
            sha256    "158321c69e485f4cb23d9f6346a82af145358b10b4c855edf8e5631ce607974f";
            provenance measured;
            archiveFile "j.fluid.2015.05.031.xml";
            system    "methylFormate + nHeptane";
            pressure  "101320.000000 Pa";
        }
        );

        domain
        {
            coordinate  x1;
            fit         { min 0.157; max 0.9961; n 41; }
        }
    }

    metrics
    {
        //  r2InSample: not computed by this operation (it reports chi-square).
        //  NO HELD-OUT METRIC EXISTS.  r2InSample above is exactly that --
        //  in-sample -- and must not be read as an external check.
    }
}

{
    property       binaryVLE.T_bubble;
    operation      fit_nrtl_start2;   // type fitParameters
    model          "NRTL binary pair, bubble-T residual at fixed P";
    verdict        validationRefused;
    refusal        "No independent experimental evidence remains after fitting.";

    fittedParameters
    {
        equilibrium.liquid.activityModel.binaryParameters.methylFormate-nHeptane.b_ij  710.252593377;
        equilibrium.liquid.activityModel.binaryParameters.methylFormate-nHeptane.b_ji  158.201970344;
    }

    evidence
    {
        partitionFingerprint  "2f26fd2d9e013a19";   // frozen before the fit

        datasets
        (
        {
            role      fit;
            dataset   "constant/archiveExtracts/methylFormate-nHeptane-bubble-je030117d.dat";
            doi       "10.1021/je030117d";
            sha256    "6a61bbeb74a4593cd945e8c9a97315a44ceea57c18c715f6a034e2403bca3f09";
            provenance measured;
            archiveFile "je030117d.xml";
            system    "methylFormate + nHeptane";
            pressure  "101325.000000 Pa";
        }
        {
            role      fit;
            dataset   "constant/archiveExtracts/methylFormate-nHeptane-bubble-j.fluid.2015.05.031.dat";
            doi       "10.1016/j.fluid.2015.05.031";
            sha256    "158321c69e485f4cb23d9f6346a82af145358b10b4c855edf8e5631ce607974f";
            provenance measured;
            archiveFile "j.fluid.2015.05.031.xml";
            system    "methylFormate + nHeptane";
            pressure  "101320.000000 Pa";
        }
        );

        domain
        {
            coordinate  x1;
            fit         { min 0.157; max 0.9961; n 41; }
        }
    }

    metrics
    {
        //  r2InSample: not computed by this operation (it reports chi-square).
        //  NO HELD-OUT METRIC EXISTS.  r2InSample above is exactly that --
        //  in-sample -- and must not be read as an external check.
    }
}

);
`,Va=`/*--------------------------------*- Choupo -*--------------------------------*\\
  CURATION DOSSIER -- a scientific work record, NOT runtime property data.

  NOTHING IN THIS FILE IS VISIBLE TO THE SOLVER.  Record resolution looks only
  in <case>/constant/, data/standards/ and data/local/, so a file here is out
  of its reach BY CONSTRUCTION -- not by convention.

  Nothing here has been promoted.  Curation state belongs to the evidence
  process; runtime trust belongs to the numerical record actually admitted
  to data/standards/, and only an explicit human promotion moves one there
  (bin/curate/promote-from-dossier).

  MATURITY IS PER PROPERTY, not per component: the properties below may hold
  different verdicts, and any whole-component summary is DERIVED from them
  rather than stored beside them.

  Regenerated on every run.  Hand edits are lost.
\\*-----------------------------------------------------------------------------*/

component      methylPropionate;
reviewStatus   unreviewed;

properties
(
{
    property       binaryVLE.T_bubble;
    operation      fit_nrtl;   // type fitParameters
    model          "NRTL binary pair, bubble-T residual at fixed P";
    verdict        validationRefused;
    refusal        "No independent experimental evidence remains after fitting.";

    fittedParameters
    {
        equilibrium.liquid.activityModel.binaryParameters.methylPropionate-nHeptane.b_ij  381.210308062;
        equilibrium.liquid.activityModel.binaryParameters.methylPropionate-nHeptane.b_ji  -0.542612511314;
    }

    evidence
    {
        partitionFingerprint  "c756cc0f5ff1272c";   // frozen before the fit

        datasets
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

        domain
        {
            coordinate  x1;
            fit         { min 0.016; max 0.992; n 64; }
        }
    }

    metrics
    {
        //  r2InSample: not computed by this operation (it reports chi-square).
        //  NO HELD-OUT METRIC EXISTS.  r2InSample above is exactly that --
        //  in-sample -- and must not be read as an external check.
    }
}

{
    property       binaryVLE.T_bubble;
    operation      fit_nrtl_start2;   // type fitParameters
    model          "NRTL binary pair, bubble-T residual at fixed P";
    verdict        validationRefused;
    refusal        "No independent experimental evidence remains after fitting.";

    fittedParameters
    {
        equilibrium.liquid.activityModel.binaryParameters.methylPropionate-nHeptane.b_ij  378.045412023;
        equilibrium.liquid.activityModel.binaryParameters.methylPropionate-nHeptane.b_ji  1.36476041822;
    }

    evidence
    {
        partitionFingerprint  "c756cc0f5ff1272c";   // frozen before the fit

        datasets
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

        domain
        {
            coordinate  x1;
            fit         { min 0.016; max 0.992; n 64; }
        }
    }

    metrics
    {
        //  r2InSample: not computed by this operation (it reports chi-square).
        //  NO HELD-OUT METRIC EXISTS.  r2InSample above is exactly that --
        //  in-sample -- and must not be read as an external check.
    }
}

);
`,Aa=`/*--------------------------------*- Choupo -*--------------------------------*\\
  CURATION DOSSIER -- a scientific work record, NOT runtime property data.

  NOTHING IN THIS FILE IS VISIBLE TO THE SOLVER.  Record resolution looks only
  in <case>/constant/, data/standards/ and data/local/, so a file here is out
  of its reach BY CONSTRUCTION -- not by convention.

  Nothing here has been promoted.  Curation state belongs to the evidence
  process; runtime trust belongs to the numerical record actually admitted
  to data/standards/, and only an explicit human promotion moves one there
  (bin/curate/promote-from-dossier).

  MATURITY IS PER PROPERTY, not per component: the properties below may hold
  different verdicts, and any whole-component summary is DERIVED from them
  rather than stored beside them.

  Regenerated on every run.  Hand edits are lost.
\\*-----------------------------------------------------------------------------*/

component      methylTertPentylEther;
reviewStatus   unreviewed;

properties
(
{
    property       binaryVLE.P_bubble;
    operation      fit_nrtl;   // type fitParameters
    model          "binary pair, relative bubble-P residual at fixed T";
    verdict        validationRefused;
    refusal        "No independent experimental evidence remains after fitting.";

    fittedParameters
    {
        equilibrium.liquid.activityModel.binaryParameters.methylTertPentylEther-toluene.b_ij  577.136526246;
        equilibrium.liquid.activityModel.binaryParameters.methylTertPentylEther-toluene.b_ji  -321.544883249;
    }

    evidence
    {
        partitionFingerprint  "8895f4d7f25f3060";   // frozen before the fit

        datasets
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

        domain
        {
            coordinate  x1;
            fit         { min 0.021; max 0.979; n 11; }
        }
    }

    metrics
    {
        //  r2InSample: not computed by this operation (it reports chi-square).
        //  NO HELD-OUT METRIC EXISTS.  r2InSample above is exactly that --
        //  in-sample -- and must not be read as an external check.
    }
}

{
    property       binaryVLE.P_bubble;
    operation      fit_nrtl_start2;   // type fitParameters
    model          "binary pair, relative bubble-P residual at fixed T";
    verdict        validationRefused;
    refusal        "No independent experimental evidence remains after fitting.";

    fittedParameters
    {
        equilibrium.liquid.activityModel.binaryParameters.methylTertPentylEther-toluene.b_ij  577.136552264;
        equilibrium.liquid.activityModel.binaryParameters.methylTertPentylEther-toluene.b_ji  -321.544898148;
    }

    evidence
    {
        partitionFingerprint  "8895f4d7f25f3060";   // frozen before the fit

        datasets
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

        domain
        {
            coordinate  x1;
            fit         { min 0.021; max 0.979; n 11; }
        }
    }

    metrics
    {
        //  r2InSample: not computed by this operation (it reports chi-square).
        //  NO HELD-OUT METRIC EXISTS.  r2InSample above is exactly that --
        //  in-sample -- and must not be read as an external check.
    }
}

);
`,ka=`/*--------------------------------*- Choupo -*--------------------------------*\\
  CURATION DOSSIER -- a scientific work record, NOT runtime property data.

  NOTHING IN THIS FILE IS VISIBLE TO THE SOLVER.  Record resolution looks only
  in <case>/constant/, data/standards/ and data/local/, so a file here is out
  of its reach BY CONSTRUCTION -- not by convention.

  Nothing here has been promoted.  Curation state belongs to the evidence
  process; runtime trust belongs to the numerical record actually admitted
  to data/standards/, and only an explicit human promotion moves one there
  (bin/curate/promote-from-dossier).

  MATURITY IS PER PROPERTY, not per component: the properties below may hold
  different verdicts, and any whole-component summary is DERIVED from them
  rather than stored beside them.

  Regenerated on every run.  Hand edits are lost.
\\*-----------------------------------------------------------------------------*/

component      nButanol;
reviewStatus   unreviewed;

properties
(
{
    property       binaryVLE.T_bubble;
    operation      fit_nrtl;   // type fitParameters
    model          "NRTL binary pair, bubble-T residual at fixed P";
    verdict        validationRefused;
    refusal        "No independent experimental evidence remains after fitting.";

    fittedParameters
    {
        equilibrium.liquid.activityModel.binaryParameters.nButanol-nButylAcetate.b_ij  535.925517173;
        equilibrium.liquid.activityModel.binaryParameters.nButanol-nButylAcetate.b_ji  -226.74673571;
    }

    evidence
    {
        partitionFingerprint  "3e01896e52b58c85";   // frozen before the fit

        datasets
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

        domain
        {
            coordinate  x1;
            fit         { min 0.058; max 0.97; n 28; }
        }
    }

    metrics
    {
        //  r2InSample: not computed by this operation (it reports chi-square).
        //  NO HELD-OUT METRIC EXISTS.  r2InSample above is exactly that --
        //  in-sample -- and must not be read as an external check.
    }
}

{
    property       binaryVLE.T_bubble;
    operation      fit_nrtl_start2;   // type fitParameters
    model          "NRTL binary pair, bubble-T residual at fixed P";
    verdict        validationRefused;
    refusal        "No independent experimental evidence remains after fitting.";

    fittedParameters
    {
        equilibrium.liquid.activityModel.binaryParameters.nButanol-nButylAcetate.b_ij  535.925521365;
        equilibrium.liquid.activityModel.binaryParameters.nButanol-nButylAcetate.b_ji  -226.746738422;
    }

    evidence
    {
        partitionFingerprint  "3e01896e52b58c85";   // frozen before the fit

        datasets
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

        domain
        {
            coordinate  x1;
            fit         { min 0.058; max 0.97; n 28; }
        }
    }

    metrics
    {
        //  r2InSample: not computed by this operation (it reports chi-square).
        //  NO HELD-OUT METRIC EXISTS.  r2InSample above is exactly that --
        //  in-sample -- and must not be read as an external check.
    }
}

);
`,Ya=`/*--------------------------------*- Choupo -*--------------------------------*\\
  CURATION DOSSIER -- a scientific work record, NOT runtime property data.

  NOTHING IN THIS FILE IS VISIBLE TO THE SOLVER.  Record resolution looks only
  in <case>/constant/, data/standards/ and data/local/, so a file here is out
  of its reach BY CONSTRUCTION -- not by convention.

  Nothing here has been promoted.  Curation state belongs to the evidence
  process; runtime trust belongs to the numerical record actually admitted
  to data/standards/, and only an explicit human promotion moves one there
  (bin/curate/promote-from-dossier).

  MATURITY IS PER PROPERTY, not per component: the properties below may hold
  different verdicts, and any whole-component summary is DERIVED from them
  rather than stored beside them.

  Regenerated on every run.  Hand edits are lost.
\\*-----------------------------------------------------------------------------*/

component      nButanol;
reviewStatus   unreviewed;

properties
(
{
    property       binaryVLE.P_bubble;
    operation      fit_nrtl;   // type fitParameters
    model          "binary pair, relative bubble-P residual at fixed T";
    verdict        validationRefused;
    refusal        "No independent experimental evidence remains after fitting.";

    fittedParameters
    {
        equilibrium.liquid.activityModel.binaryParameters.nButanol-nDodecane.b_ij  308.237614504;
        equilibrium.liquid.activityModel.binaryParameters.nButanol-nDodecane.b_ji  477.22950728;
    }

    evidence
    {
        partitionFingerprint  "93cda8589d0be2af";   // frozen before the fit

        datasets
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

        domain
        {
            coordinate  x1;
            fit         { min 0.1125; max 0.9503; n 24; }
        }
    }

    metrics
    {
        //  r2InSample: not computed by this operation (it reports chi-square).
        //  NO HELD-OUT METRIC EXISTS.  r2InSample above is exactly that --
        //  in-sample -- and must not be read as an external check.
    }
}

{
    property       binaryVLE.P_bubble;
    operation      fit_nrtl_start2;   // type fitParameters
    model          "binary pair, relative bubble-P residual at fixed T";
    verdict        validationRefused;
    refusal        "No independent experimental evidence remains after fitting.";

    fittedParameters
    {
        equilibrium.liquid.activityModel.binaryParameters.nButanol-nDodecane.b_ij  308.23761723;
        equilibrium.liquid.activityModel.binaryParameters.nButanol-nDodecane.b_ji  477.22950486;
    }

    evidence
    {
        partitionFingerprint  "93cda8589d0be2af";   // frozen before the fit

        datasets
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

        domain
        {
            coordinate  x1;
            fit         { min 0.1125; max 0.9503; n 24; }
        }
    }

    metrics
    {
        //  r2InSample: not computed by this operation (it reports chi-square).
        //  NO HELD-OUT METRIC EXISTS.  r2InSample above is exactly that --
        //  in-sample -- and must not be read as an external check.
    }
}

);
`,za=`/*--------------------------------*- Choupo -*--------------------------------*\\
  CURATION DOSSIER -- a scientific work record, NOT runtime property data.

  NOTHING IN THIS FILE IS VISIBLE TO THE SOLVER.  Record resolution looks only
  in <case>/constant/, data/standards/ and data/local/, so a file here is out
  of its reach BY CONSTRUCTION -- not by convention.

  Nothing here has been promoted.  Curation state belongs to the evidence
  process; runtime trust belongs to the numerical record actually admitted
  to data/standards/, and only an explicit human promotion moves one there
  (bin/curate/promote-from-dossier).

  MATURITY IS PER PROPERTY, not per component: the properties below may hold
  different verdicts, and any whole-component summary is DERIVED from them
  rather than stored beside them.

  Regenerated on every run.  Hand edits are lost.
\\*-----------------------------------------------------------------------------*/

component      nButanol;
reviewStatus   unreviewed;

properties
(
{
    property       binaryVLE.T_bubble;
    operation      fit_nrtl;   // type fitParameters
    model          "NRTL binary pair, bubble-T residual at fixed P";
    verdict        validationRefused;
    refusal        "No independent experimental evidence remains after fitting.";

    fittedParameters
    {
        equilibrium.liquid.activityModel.binaryParameters.nButanol-pXylene.b_ij  248.226305349;
        equilibrium.liquid.activityModel.binaryParameters.nButanol-pXylene.b_ji  191.825662718;
    }

    evidence
    {
        partitionFingerprint  "a3955337076e6895";   // frozen before the fit

        datasets
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

        domain
        {
            coordinate  x1;
            fit         { min 0.0325; max 0.9819; n 34; }
        }
    }

    metrics
    {
        //  r2InSample: not computed by this operation (it reports chi-square).
        //  NO HELD-OUT METRIC EXISTS.  r2InSample above is exactly that --
        //  in-sample -- and must not be read as an external check.
    }
}

{
    property       binaryVLE.T_bubble;
    operation      fit_nrtl_start2;   // type fitParameters
    model          "NRTL binary pair, bubble-T residual at fixed P";
    verdict        validationRefused;
    refusal        "No independent experimental evidence remains after fitting.";

    fittedParameters
    {
        equilibrium.liquid.activityModel.binaryParameters.nButanol-pXylene.b_ij  248.22630306;
        equilibrium.liquid.activityModel.binaryParameters.nButanol-pXylene.b_ji  191.825665;
    }

    evidence
    {
        partitionFingerprint  "a3955337076e6895";   // frozen before the fit

        datasets
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

        domain
        {
            coordinate  x1;
            fit         { min 0.0325; max 0.9819; n 34; }
        }
    }

    metrics
    {
        //  r2InSample: not computed by this operation (it reports chi-square).
        //  NO HELD-OUT METRIC EXISTS.  r2InSample above is exactly that --
        //  in-sample -- and must not be read as an external check.
    }
}

);
`,Xa=`/*--------------------------------*- Choupo -*--------------------------------*\\
  CURATION DOSSIER -- a scientific work record, NOT runtime property data.

  NOTHING IN THIS FILE IS VISIBLE TO THE SOLVER.  Record resolution looks only
  in <case>/constant/, data/standards/ and data/local/, so a file here is out
  of its reach BY CONSTRUCTION -- not by convention.

  Nothing here has been promoted.  Curation state belongs to the evidence
  process; runtime trust belongs to the numerical record actually admitted
  to data/standards/, and only an explicit human promotion moves one there
  (bin/curate/promote-from-dossier).

  MATURITY IS PER PROPERTY, not per component: the properties below may hold
  different verdicts, and any whole-component summary is DERIVED from them
  rather than stored beside them.

  Regenerated on every run.  Hand edits are lost.
\\*-----------------------------------------------------------------------------*/

component      nButanol;
reviewStatus   unreviewed;

properties
(
{
    property       binaryVLE.P_bubble;
    operation      fit_nrtl;   // type fitParameters
    model          "binary pair, relative bubble-P residual at fixed T";
    verdict        validationRefused;
    refusal        "No independent experimental evidence remains after fitting.";

    fittedParameters
    {
        equilibrium.liquid.activityModel.binaryParameters.nButanol-toluene.b_ij  43.1575239125;
        equilibrium.liquid.activityModel.binaryParameters.nButanol-toluene.b_ji  567.116752832;
    }

    evidence
    {
        partitionFingerprint  "be9a959db361e005";   // frozen before the fit

        datasets
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

        domain
        {
            coordinate  x1;
            fit         { min 0.043; max 0.957; n 38; }
        }
    }

    metrics
    {
        //  r2InSample: not computed by this operation (it reports chi-square).
        //  NO HELD-OUT METRIC EXISTS.  r2InSample above is exactly that --
        //  in-sample -- and must not be read as an external check.
    }
}

{
    property       binaryVLE.P_bubble;
    operation      fit_nrtl_start2;   // type fitParameters
    model          "binary pair, relative bubble-P residual at fixed T";
    verdict        validationRefused;
    refusal        "No independent experimental evidence remains after fitting.";

    fittedParameters
    {
        equilibrium.liquid.activityModel.binaryParameters.nButanol-toluene.b_ij  43.1575226885;
        equilibrium.liquid.activityModel.binaryParameters.nButanol-toluene.b_ji  567.116757097;
    }

    evidence
    {
        partitionFingerprint  "be9a959db361e005";   // frozen before the fit

        datasets
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

        domain
        {
            coordinate  x1;
            fit         { min 0.043; max 0.957; n 38; }
        }
    }

    metrics
    {
        //  r2InSample: not computed by this operation (it reports chi-square).
        //  NO HELD-OUT METRIC EXISTS.  r2InSample above is exactly that --
        //  in-sample -- and must not be read as an external check.
    }
}

);
`,Ga=`/*--------------------------------*- Choupo -*--------------------------------*\\
  CURATION DOSSIER -- a scientific work record, NOT runtime property data.

  NOTHING IN THIS FILE IS VISIBLE TO THE SOLVER.  Record resolution looks only
  in <case>/constant/, data/standards/ and data/local/, so a file here is out
  of its reach BY CONSTRUCTION -- not by convention.

  Nothing here has been promoted.  Curation state belongs to the evidence
  process; runtime trust belongs to the numerical record actually admitted
  to data/standards/, and only an explicit human promotion moves one there
  (bin/curate/promote-from-dossier).

  MATURITY IS PER PROPERTY, not per component: the properties below may hold
  different verdicts, and any whole-component summary is DERIVED from them
  rather than stored beside them.

  Regenerated on every run.  Hand edits are lost.
\\*-----------------------------------------------------------------------------*/

component      nDecane;
reviewStatus   unreviewed;

properties
(
{
    property       binaryVLE.T_bubble;
    operation      fit_nrtl;   // type fitParameters
    model          "NRTL binary pair, bubble-T residual at fixed P";
    verdict        validationRefused;
    refusal        "No independent experimental evidence remains after fitting.";

    fittedParameters
    {
        equilibrium.liquid.activityModel.binaryParameters.nDecane-oXylene.b_ij  -292.963569472;
        equilibrium.liquid.activityModel.binaryParameters.nDecane-oXylene.b_ji  408.000421421;
    }

    evidence
    {
        partitionFingerprint  "924eceb6d619b44f";   // frozen before the fit

        datasets
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

        domain
        {
            coordinate  x1;
            fit         { min 0.051; max 0.958; n 15; }
        }
    }

    metrics
    {
        //  r2InSample: not computed by this operation (it reports chi-square).
        //  NO HELD-OUT METRIC EXISTS.  r2InSample above is exactly that --
        //  in-sample -- and must not be read as an external check.
    }
}

{
    property       binaryVLE.T_bubble;
    operation      fit_nrtl_start2;   // type fitParameters
    model          "NRTL binary pair, bubble-T residual at fixed P";
    verdict        validationRefused;
    refusal        "No independent experimental evidence remains after fitting.";

    fittedParameters
    {
        equilibrium.liquid.activityModel.binaryParameters.nDecane-oXylene.b_ij  -292.975010587;
        equilibrium.liquid.activityModel.binaryParameters.nDecane-oXylene.b_ji  408.020344096;
    }

    evidence
    {
        partitionFingerprint  "924eceb6d619b44f";   // frozen before the fit

        datasets
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

        domain
        {
            coordinate  x1;
            fit         { min 0.051; max 0.958; n 15; }
        }
    }

    metrics
    {
        //  r2InSample: not computed by this operation (it reports chi-square).
        //  NO HELD-OUT METRIC EXISTS.  r2InSample above is exactly that --
        //  in-sample -- and must not be read as an external check.
    }
}

);
`,Ka=`/*--------------------------------*- Choupo -*--------------------------------*\\
  CURATION DOSSIER -- a scientific work record, NOT runtime property data.

  NOTHING IN THIS FILE IS VISIBLE TO THE SOLVER.  Record resolution looks only
  in <case>/constant/, data/standards/ and data/local/, so a file here is out
  of its reach BY CONSTRUCTION -- not by convention.

  Nothing here has been promoted.  Curation state belongs to the evidence
  process; runtime trust belongs to the numerical record actually admitted
  to data/standards/, and only an explicit human promotion moves one there
  (bin/curate/promote-from-dossier).

  MATURITY IS PER PROPERTY, not per component: the properties below may hold
  different verdicts, and any whole-component summary is DERIVED from them
  rather than stored beside them.

  Regenerated on every run.  Hand edits are lost.
\\*-----------------------------------------------------------------------------*/

component      pXylene;
reviewStatus   unreviewed;

properties
(
{
    property       binaryVLE.T_bubble;
    operation      fit_nrtl;   // type fitParameters
    model          "NRTL binary pair, bubble-T residual at fixed P";
    verdict        validationRefused;
    refusal        "No independent experimental evidence remains after fitting.";

    fittedParameters
    {
        equilibrium.liquid.activityModel.binaryParameters.pXylene-nDecane.b_ij  550.580915605;
        equilibrium.liquid.activityModel.binaryParameters.pXylene-nDecane.b_ji  -378.916074309;
    }

    evidence
    {
        partitionFingerprint  "5153c4c1bcab46ec";   // frozen before the fit

        datasets
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

        domain
        {
            coordinate  x1;
            fit         { min 0.071; max 0.99; n 28; }
        }
    }

    metrics
    {
        //  r2InSample: not computed by this operation (it reports chi-square).
        //  NO HELD-OUT METRIC EXISTS.  r2InSample above is exactly that --
        //  in-sample -- and must not be read as an external check.
    }
}

{
    property       binaryVLE.T_bubble;
    operation      fit_nrtl_start2;   // type fitParameters
    model          "NRTL binary pair, bubble-T residual at fixed P";
    verdict        validationRefused;
    refusal        "No independent experimental evidence remains after fitting.";

    fittedParameters
    {
        equilibrium.liquid.activityModel.binaryParameters.pXylene-nDecane.b_ij  550.57997543;
        equilibrium.liquid.activityModel.binaryParameters.pXylene-nDecane.b_ji  -378.915607801;
    }

    evidence
    {
        partitionFingerprint  "5153c4c1bcab46ec";   // frozen before the fit

        datasets
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

        domain
        {
            coordinate  x1;
            fit         { min 0.071; max 0.99; n 28; }
        }
    }

    metrics
    {
        //  r2InSample: not computed by this operation (it reports chi-square).
        //  NO HELD-OUT METRIC EXISTS.  r2InSample above is exactly that --
        //  in-sample -- and must not be read as an external check.
    }
}

);
`,$a=`/*--------------------------------*- Choupo -*--------------------------------*\\
  CURATION DOSSIER -- a scientific work record, NOT runtime property data.

  NOTHING IN THIS FILE IS VISIBLE TO THE SOLVER.  Record resolution looks only
  in <case>/constant/, data/standards/ and data/local/, so a file here is out
  of its reach BY CONSTRUCTION -- not by convention.

  Nothing here has been promoted.  Curation state belongs to the evidence
  process; runtime trust belongs to the numerical record actually admitted
  to data/standards/, and only an explicit human promotion moves one there
  (bin/curate/promote-from-dossier).

  MATURITY IS PER PROPERTY, not per component: the properties below may hold
  different verdicts, and any whole-component summary is DERIVED from them
  rather than stored beside them.

  Regenerated on every run.  Hand edits are lost.
\\*-----------------------------------------------------------------------------*/

component      nHeptane;
reviewStatus   unreviewed;

properties
(
{
    property       binaryVLE.P_bubble;
    operation      fit_nrtl;   // type fitParameters
    model          "binary pair, relative bubble-P residual at fixed T";
    verdict        validationRefused;
    refusal        "No independent experimental evidence remains after fitting.";

    fittedParameters
    {
        equilibrium.liquid.activityModel.binaryParameters.nHeptane-nNDimethylacetamide.b_ij  449.191709913;
        equilibrium.liquid.activityModel.binaryParameters.nHeptane-nNDimethylacetamide.b_ji  415.542075827;
    }

    evidence
    {
        partitionFingerprint  "b880afe9fb617505";   // frozen before the fit

        datasets
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

        domain
        {
            coordinate  x1;
            fit         { min 0.002; max 0.9958; n 40; }
        }
    }

    metrics
    {
        //  r2InSample: not computed by this operation (it reports chi-square).
        //  NO HELD-OUT METRIC EXISTS.  r2InSample above is exactly that --
        //  in-sample -- and must not be read as an external check.
    }
}

{
    property       binaryVLE.P_bubble;
    operation      fit_nrtl_start2;   // type fitParameters
    model          "binary pair, relative bubble-P residual at fixed T";
    verdict        validationRefused;
    refusal        "No independent experimental evidence remains after fitting.";

    fittedParameters
    {
        equilibrium.liquid.activityModel.binaryParameters.nHeptane-nNDimethylacetamide.b_ij  449.191710316;
        equilibrium.liquid.activityModel.binaryParameters.nHeptane-nNDimethylacetamide.b_ji  415.542078506;
    }

    evidence
    {
        partitionFingerprint  "b880afe9fb617505";   // frozen before the fit

        datasets
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

        domain
        {
            coordinate  x1;
            fit         { min 0.002; max 0.9958; n 40; }
        }
    }

    metrics
    {
        //  r2InSample: not computed by this operation (it reports chi-square).
        //  NO HELD-OUT METRIC EXISTS.  r2InSample above is exactly that --
        //  in-sample -- and must not be read as an external check.
    }
}

);
`,Wa=`/*--------------------------------*- Choupo -*--------------------------------*\\
  CURATION DOSSIER -- a scientific work record, NOT runtime property data.

  NOTHING IN THIS FILE IS VISIBLE TO THE SOLVER.  Record resolution looks only
  in <case>/constant/, data/standards/ and data/local/, so a file here is out
  of its reach BY CONSTRUCTION -- not by convention.

  Nothing here has been promoted.  Curation state belongs to the evidence
  process; runtime trust belongs to the numerical record actually admitted
  to data/standards/, and only an explicit human promotion moves one there
  (bin/curate/promote-from-dossier).

  MATURITY IS PER PROPERTY, not per component: the properties below may hold
  different verdicts, and any whole-component summary is DERIVED from them
  rather than stored beside them.

  Regenerated on every run.  Hand edits are lost.
\\*-----------------------------------------------------------------------------*/

component      tertButylEthylEther;
reviewStatus   unreviewed;

properties
(
{
    property       binaryVLE.P_bubble;
    operation      fit_nrtl;   // type fitParameters
    model          "binary pair, relative bubble-P residual at fixed T";
    verdict        validationRefused;
    refusal        "No independent experimental evidence remains after fitting.";

    fittedParameters
    {
        equilibrium.liquid.activityModel.binaryParameters.tertButylEthylEther-nHeptane.b_ij  543.568510717;
        equilibrium.liquid.activityModel.binaryParameters.tertButylEthylEther-nHeptane.b_ji  -294.802510619;
    }

    evidence
    {
        partitionFingerprint  "1962c00b74016193";   // frozen before the fit

        datasets
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

        domain
        {
            coordinate  x1;
            fit         { min 0.0525; max 0.9472; n 26; }
        }
    }

    metrics
    {
        //  r2InSample: not computed by this operation (it reports chi-square).
        //  NO HELD-OUT METRIC EXISTS.  r2InSample above is exactly that --
        //  in-sample -- and must not be read as an external check.
    }
}

{
    property       binaryVLE.P_bubble;
    operation      fit_nrtl_start2;   // type fitParameters
    model          "binary pair, relative bubble-P residual at fixed T";
    verdict        validationRefused;
    refusal        "No independent experimental evidence remains after fitting.";

    fittedParameters
    {
        equilibrium.liquid.activityModel.binaryParameters.tertButylEthylEther-nHeptane.b_ij  543.568519795;
        equilibrium.liquid.activityModel.binaryParameters.tertButylEthylEther-nHeptane.b_ji  -294.802514681;
    }

    evidence
    {
        partitionFingerprint  "1962c00b74016193";   // frozen before the fit

        datasets
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

        domain
        {
            coordinate  x1;
            fit         { min 0.0525; max 0.9472; n 26; }
        }
    }

    metrics
    {
        //  r2InSample: not computed by this operation (it reports chi-square).
        //  NO HELD-OUT METRIC EXISTS.  r2InSample above is exactly that --
        //  in-sample -- and must not be read as an external check.
    }
}

);
`,Ja=`/*--------------------------------*- Choupo -*--------------------------------*\\
  CURATION DOSSIER -- a scientific work record, NOT runtime property data.

  NOTHING IN THIS FILE IS VISIBLE TO THE SOLVER.  Record resolution looks only
  in <case>/constant/, data/standards/ and data/local/, so a file here is out
  of its reach BY CONSTRUCTION -- not by convention.

  Nothing here has been promoted.  Curation state belongs to the evidence
  process; runtime trust belongs to the numerical record actually admitted
  to data/standards/, and only an explicit human promotion moves one there
  (bin/curate/promote-from-dossier).

  MATURITY IS PER PROPERTY, not per component: the properties below may hold
  different verdicts, and any whole-component summary is DERIVED from them
  rather than stored beside them.

  Regenerated on every run.  Hand edits are lost.
\\*-----------------------------------------------------------------------------*/

component      thiophene;
reviewStatus   unreviewed;

properties
(
{
    property       binaryVLE.T_bubble;
    operation      fit_nrtl;   // type fitParameters
    model          "NRTL binary pair, bubble-T residual at fixed P";
    verdict        validationRefused;
    refusal        "No independent experimental evidence remains after fitting.";

    fittedParameters
    {
        equilibrium.liquid.activityModel.binaryParameters.thiophene-nHeptane.b_ij  675.15385554;
        equilibrium.liquid.activityModel.binaryParameters.thiophene-nHeptane.b_ji  -252.303382759;
    }

    evidence
    {
        partitionFingerprint  "fde22c8320b01453";   // frozen before the fit

        datasets
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

        domain
        {
            coordinate  x1;
            fit         { min 0.0654; max 0.9967; n 18; }
        }
    }

    metrics
    {
        //  r2InSample: not computed by this operation (it reports chi-square).
        //  NO HELD-OUT METRIC EXISTS.  r2InSample above is exactly that --
        //  in-sample -- and must not be read as an external check.
    }
}

{
    property       binaryVLE.T_bubble;
    operation      fit_nrtl_start2;   // type fitParameters
    model          "NRTL binary pair, bubble-T residual at fixed P";
    verdict        validationRefused;
    refusal        "No independent experimental evidence remains after fitting.";

    fittedParameters
    {
        equilibrium.liquid.activityModel.binaryParameters.thiophene-nHeptane.b_ij  675.153854404;
        equilibrium.liquid.activityModel.binaryParameters.thiophene-nHeptane.b_ji  -252.303382096;
    }

    evidence
    {
        partitionFingerprint  "fde22c8320b01453";   // frozen before the fit

        datasets
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

        domain
        {
            coordinate  x1;
            fit         { min 0.0654; max 0.9967; n 18; }
        }
    }

    metrics
    {
        //  r2InSample: not computed by this operation (it reports chi-square).
        //  NO HELD-OUT METRIC EXISTS.  r2InSample above is exactly that --
        //  in-sample -- and must not be read as an external check.
    }
}

);
`,Za=`/*--------------------------------*- Choupo -*--------------------------------*\\
  CURATION DOSSIER -- a scientific work record, NOT runtime property data.

  NOTHING IN THIS FILE IS VISIBLE TO THE SOLVER.  Record resolution looks only
  in <case>/constant/, data/standards/ and data/local/, so a file here is out
  of its reach BY CONSTRUCTION -- not by convention.

  Nothing here has been promoted.  Curation state belongs to the evidence
  process; runtime trust belongs to the numerical record actually admitted
  to data/standards/, and only an explicit human promotion moves one there
  (bin/curate/promote-from-dossier).

  MATURITY IS PER PROPERTY, not per component: the properties below may hold
  different verdicts, and any whole-component summary is DERIVED from them
  rather than stored beside them.

  Regenerated on every run.  Hand edits are lost.
\\*-----------------------------------------------------------------------------*/

component      nHeptane;
reviewStatus   unreviewed;

properties
(
{
    property       binaryVLE.P_bubble;
    operation      fit_nrtl;   // type fitParameters
    model          "binary pair, relative bubble-P residual at fixed T";
    verdict        validationRefused;
    refusal        "No independent experimental evidence remains after fitting.";

    fittedParameters
    {
        equilibrium.liquid.activityModel.binaryParameters.nHeptane-toluene.b_ij  -3.49448102811;
        equilibrium.liquid.activityModel.binaryParameters.nHeptane-toluene.b_ji  147.662063629;
    }

    evidence
    {
        partitionFingerprint  "c7cd8b470cdf37bb";   // frozen before the fit

        datasets
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

        domain
        {
            coordinate  x1;
            fit         { min 0.0386; max 0.952; n 26; }
        }
    }

    metrics
    {
        //  r2InSample: not computed by this operation (it reports chi-square).
        //  NO HELD-OUT METRIC EXISTS.  r2InSample above is exactly that --
        //  in-sample -- and must not be read as an external check.
    }
}

{
    property       binaryVLE.P_bubble;
    operation      fit_nrtl_start2;   // type fitParameters
    model          "binary pair, relative bubble-P residual at fixed T";
    verdict        validationRefused;
    refusal        "No independent experimental evidence remains after fitting.";

    fittedParameters
    {
        equilibrium.liquid.activityModel.binaryParameters.nHeptane-toluene.b_ij  -3.49448369558;
        equilibrium.liquid.activityModel.binaryParameters.nHeptane-toluene.b_ji  147.662066828;
    }

    evidence
    {
        partitionFingerprint  "c7cd8b470cdf37bb";   // frozen before the fit

        datasets
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

        domain
        {
            coordinate  x1;
            fit         { min 0.0386; max 0.952; n 26; }
        }
    }

    metrics
    {
        //  r2InSample: not computed by this operation (it reports chi-square).
        //  NO HELD-OUT METRIC EXISTS.  r2InSample above is exactly that --
        //  in-sample -- and must not be read as an external check.
    }
}

);
`,Qa=`/*--------------------------------*- Choupo -*--------------------------------*\\
  CURATION DOSSIER -- a scientific work record, NOT runtime property data.

  NOTHING IN THIS FILE IS VISIBLE TO THE SOLVER.  Record resolution looks only
  in <case>/constant/, data/standards/ and data/local/, so a file here is out
  of its reach BY CONSTRUCTION -- not by convention.

  Nothing here has been promoted.  Curation state belongs to the evidence
  process; runtime trust belongs to the numerical record actually admitted
  to data/standards/, and only an explicit human promotion moves one there
  (bin/curate/promote-from-dossier).

  MATURITY IS PER PROPERTY, not per component: the properties below may hold
  different verdicts, and any whole-component summary is DERIVED from them
  rather than stored beside them.

  Regenerated on every run.  Hand edits are lost.
\\*-----------------------------------------------------------------------------*/

component      nHexane;
reviewStatus   unreviewed;

properties
(
{
    property       binaryVLE.P_bubble;
    operation      fit_nrtl;   // type fitParameters
    model          "binary pair, relative bubble-P residual at fixed T";
    verdict        validationRefused;
    refusal        "No independent experimental evidence remains after fitting.";

    fittedParameters
    {
        equilibrium.liquid.activityModel.binaryParameters.nHexane-toluene.b_ij  821.215617912;
        equilibrium.liquid.activityModel.binaryParameters.nHexane-toluene.b_ji  -240.291415391;
    }

    evidence
    {
        partitionFingerprint  "ba751470eb832e1f";   // frozen before the fit

        datasets
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

        domain
        {
            coordinate  x1;
            fit         { min 0.009; max 0.974; n 18; }
        }
    }

    metrics
    {
        //  r2InSample: not computed by this operation (it reports chi-square).
        //  NO HELD-OUT METRIC EXISTS.  r2InSample above is exactly that --
        //  in-sample -- and must not be read as an external check.
    }
}

{
    property       binaryVLE.P_bubble;
    operation      fit_nrtl_start2;   // type fitParameters
    model          "binary pair, relative bubble-P residual at fixed T";
    verdict        validationRefused;
    refusal        "No independent experimental evidence remains after fitting.";

    fittedParameters
    {
        equilibrium.liquid.activityModel.binaryParameters.nHexane-toluene.b_ij  821.215651201;
        equilibrium.liquid.activityModel.binaryParameters.nHexane-toluene.b_ji  -240.291426531;
    }

    evidence
    {
        partitionFingerprint  "ba751470eb832e1f";   // frozen before the fit

        datasets
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

        domain
        {
            coordinate  x1;
            fit         { min 0.009; max 0.974; n 18; }
        }
    }

    metrics
    {
        //  r2InSample: not computed by this operation (it reports chi-square).
        //  NO HELD-OUT METRIC EXISTS.  r2InSample above is exactly that --
        //  in-sample -- and must not be read as an external check.
    }
}

);
`,er=`/*--------------------------------*- Choupo -*--------------------------------*\\
  CURATION DOSSIER -- a scientific work record, NOT runtime property data.

  NOTHING IN THIS FILE IS VISIBLE TO THE SOLVER.  Record resolution looks only
  in <case>/constant/, data/standards/ and data/local/, so a file here is out
  of its reach BY CONSTRUCTION -- not by convention.

  Nothing here has been promoted.  Curation state belongs to the evidence
  process; runtime trust belongs to the numerical record actually admitted
  to data/standards/, and only an explicit human promotion moves one there
  (bin/curate/promote-from-dossier).

  MATURITY IS PER PROPERTY, not per component: the properties below may hold
  different verdicts, and any whole-component summary is DERIVED from them
  rather than stored beside them.

  Regenerated on every run.  Hand edits are lost.
\\*-----------------------------------------------------------------------------*/

component      nNDimethylformamide;
reviewStatus   unreviewed;

properties
(
{
    property       binaryVLE.T_bubble;
    operation      fit_nrtl;   // type fitParameters
    model          "NRTL binary pair, bubble-T residual at fixed P";
    verdict        validationRefused;
    refusal        "No independent experimental evidence remains after fitting.";

    fittedParameters
    {
        equilibrium.liquid.activityModel.binaryParameters.nNDimethylformamide-nNDimethylacetamide.b_ij  742.201073634;
        equilibrium.liquid.activityModel.binaryParameters.nNDimethylformamide-nNDimethylacetamide.b_ji  -361.312020532;
    }

    evidence
    {
        partitionFingerprint  "12f77ea557dd0a43";   // frozen before the fit

        datasets
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

        domain
        {
            coordinate  x1;
            fit         { min 0.01; max 0.979; n 19; }
        }
    }

    metrics
    {
        //  r2InSample: not computed by this operation (it reports chi-square).
        //  NO HELD-OUT METRIC EXISTS.  r2InSample above is exactly that --
        //  in-sample -- and must not be read as an external check.
    }
}

{
    property       binaryVLE.T_bubble;
    operation      fit_nrtl_start2;   // type fitParameters
    model          "NRTL binary pair, bubble-T residual at fixed P";
    verdict        validationRefused;
    refusal        "No independent experimental evidence remains after fitting.";

    fittedParameters
    {
        equilibrium.liquid.activityModel.binaryParameters.nNDimethylformamide-nNDimethylacetamide.b_ij  742.201076362;
        equilibrium.liquid.activityModel.binaryParameters.nNDimethylformamide-nNDimethylacetamide.b_ji  -361.312021559;
    }

    evidence
    {
        partitionFingerprint  "12f77ea557dd0a43";   // frozen before the fit

        datasets
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

        domain
        {
            coordinate  x1;
            fit         { min 0.01; max 0.979; n 19; }
        }
    }

    metrics
    {
        //  r2InSample: not computed by this operation (it reports chi-square).
        //  NO HELD-OUT METRIC EXISTS.  r2InSample above is exactly that --
        //  in-sample -- and must not be read as an external check.
    }
}

);
`,nr=`/*--------------------------------*- Choupo -*--------------------------------*\\
  CURATION DOSSIER -- a scientific work record, NOT runtime property data.

  NOTHING IN THIS FILE IS VISIBLE TO THE SOLVER.  Record resolution looks only
  in <case>/constant/, data/standards/ and data/local/, so a file here is out
  of its reach BY CONSTRUCTION -- not by convention.

  Nothing here has been promoted.  Curation state belongs to the evidence
  process; runtime trust belongs to the numerical record actually admitted
  to data/standards/, and only an explicit human promotion moves one there
  (bin/curate/promote-from-dossier).

  MATURITY IS PER PROPERTY, not per component: the properties below may hold
  different verdicts, and any whole-component summary is DERIVED from them
  rather than stored beside them.

  Regenerated on every run.  Hand edits are lost.
\\*-----------------------------------------------------------------------------*/

component      toluene;
reviewStatus   unreviewed;

properties
(
{
    property       binaryVLE.P_bubble;
    operation      fit_nrtl;   // type fitParameters
    model          "binary pair, relative bubble-P residual at fixed T";
    verdict        validationRefused;
    refusal        "No independent experimental evidence remains after fitting.";

    fittedParameters
    {
        equilibrium.liquid.activityModel.binaryParameters.toluene-nNDimethylacetamide.b_ij  561.25021157;
        equilibrium.liquid.activityModel.binaryParameters.toluene-nNDimethylacetamide.b_ji  -223.416434141;
    }

    evidence
    {
        partitionFingerprint  "86cde0bb48c448ac";   // frozen before the fit

        datasets
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

        domain
        {
            coordinate  x1;
            fit         { min 0.0014; max 0.9987; n 42; }
        }
    }

    metrics
    {
        //  r2InSample: not computed by this operation (it reports chi-square).
        //  NO HELD-OUT METRIC EXISTS.  r2InSample above is exactly that --
        //  in-sample -- and must not be read as an external check.
    }
}

{
    property       binaryVLE.P_bubble;
    operation      fit_nrtl_start2;   // type fitParameters
    model          "binary pair, relative bubble-P residual at fixed T";
    verdict        validationRefused;
    refusal        "No independent experimental evidence remains after fitting.";

    fittedParameters
    {
        equilibrium.liquid.activityModel.binaryParameters.toluene-nNDimethylacetamide.b_ij  561.257166173;
        equilibrium.liquid.activityModel.binaryParameters.toluene-nNDimethylacetamide.b_ji  -223.420326632;
    }

    evidence
    {
        partitionFingerprint  "86cde0bb48c448ac";   // frozen before the fit

        datasets
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

        domain
        {
            coordinate  x1;
            fit         { min 0.0014; max 0.9987; n 42; }
        }
    }

    metrics
    {
        //  r2InSample: not computed by this operation (it reports chi-square).
        //  NO HELD-OUT METRIC EXISTS.  r2InSample above is exactly that --
        //  in-sample -- and must not be read as an external check.
    }
}

);
`,tr=`/*--------------------------------*- Choupo -*--------------------------------*\\
  CURATION DOSSIER -- a scientific work record, NOT runtime property data.

  NOTHING IN THIS FILE IS VISIBLE TO THE SOLVER.  Record resolution looks only
  in <case>/constant/, data/standards/ and data/local/, so a file here is out
  of its reach BY CONSTRUCTION -- not by convention.

  Nothing here has been promoted.  Curation state belongs to the evidence
  process; runtime trust belongs to the numerical record actually admitted
  to data/standards/, and only an explicit human promotion moves one there
  (bin/curate/promote-from-dossier).

  MATURITY IS PER PROPERTY, not per component: the properties below may hold
  different verdicts, and any whole-component summary is DERIVED from them
  rather than stored beside them.

  Regenerated on every run.  Hand edits are lost.
\\*-----------------------------------------------------------------------------*/

component      nOctane;
reviewStatus   unreviewed;

properties
(
{
    property       binaryVLE.T_bubble;
    operation      fit_nrtl;   // type fitParameters
    model          "NRTL binary pair, bubble-T residual at fixed P";
    verdict        validationRefused;
    refusal        "No independent experimental evidence remains after fitting.";

    fittedParameters
    {
        equilibrium.liquid.activityModel.binaryParameters.nOctane-oXylene.b_ij  -334.578286388;
        equilibrium.liquid.activityModel.binaryParameters.nOctane-oXylene.b_ji  516.363415023;
    }

    evidence
    {
        partitionFingerprint  "db209d16f201e5ac";   // frozen before the fit

        datasets
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

        domain
        {
            coordinate  x1;
            fit         { min 0.063; max 0.965; n 23; }
        }
    }

    metrics
    {
        //  r2InSample: not computed by this operation (it reports chi-square).
        //  NO HELD-OUT METRIC EXISTS.  r2InSample above is exactly that --
        //  in-sample -- and must not be read as an external check.
    }
}

{
    property       binaryVLE.T_bubble;
    operation      fit_nrtl_start2;   // type fitParameters
    model          "NRTL binary pair, bubble-T residual at fixed P";
    verdict        validationRefused;
    refusal        "No independent experimental evidence remains after fitting.";

    fittedParameters
    {
        equilibrium.liquid.activityModel.binaryParameters.nOctane-oXylene.b_ij  402.976230322;
        equilibrium.liquid.activityModel.binaryParameters.nOctane-oXylene.b_ji  -282.05695098;
    }

    evidence
    {
        partitionFingerprint  "db209d16f201e5ac";   // frozen before the fit

        datasets
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

        domain
        {
            coordinate  x1;
            fit         { min 0.063; max 0.965; n 23; }
        }
    }

    metrics
    {
        //  r2InSample: not computed by this operation (it reports chi-square).
        //  NO HELD-OUT METRIC EXISTS.  r2InSample above is exactly that --
        //  in-sample -- and must not be read as an external check.
    }
}

);
`,ar=`/*--------------------------------*- Choupo -*--------------------------------*\\
  CURATION DOSSIER -- a scientific work record, NOT runtime property data.

  NOTHING IN THIS FILE IS VISIBLE TO THE SOLVER.  Record resolution looks only
  in <case>/constant/, data/standards/ and data/local/, so a file here is out
  of its reach BY CONSTRUCTION -- not by convention.

  Nothing here has been promoted.  Curation state belongs to the evidence
  process; runtime trust belongs to the numerical record actually admitted
  to data/standards/, and only an explicit human promotion moves one there
  (bin/curate/promote-from-dossier).

  MATURITY IS PER PROPERTY, not per component: the properties below may hold
  different verdicts, and any whole-component summary is DERIVED from them
  rather than stored beside them.

  Regenerated on every run.  Hand edits are lost.
\\*-----------------------------------------------------------------------------*/

component      tertButylEthylEther;
reviewStatus   unreviewed;

properties
(
{
    property       binaryVLE.P_bubble;
    operation      fit_nrtl;   // type fitParameters
    model          "binary pair, relative bubble-P residual at fixed T";
    verdict        validationRefused;
    refusal        "No independent experimental evidence remains after fitting.";

    fittedParameters
    {
        equilibrium.liquid.activityModel.binaryParameters.tertButylEthylEther-toluene.b_ij  539.329833906;
        equilibrium.liquid.activityModel.binaryParameters.tertButylEthylEther-toluene.b_ji  -300.536074451;
    }

    evidence
    {
        partitionFingerprint  "d506773cc3278a18";   // frozen before the fit

        datasets
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

        domain
        {
            coordinate  x1;
            fit         { min 0.0566; max 0.9508; n 26; }
        }
    }

    metrics
    {
        //  r2InSample: not computed by this operation (it reports chi-square).
        //  NO HELD-OUT METRIC EXISTS.  r2InSample above is exactly that --
        //  in-sample -- and must not be read as an external check.
    }
}

{
    property       binaryVLE.P_bubble;
    operation      fit_nrtl_start2;   // type fitParameters
    model          "binary pair, relative bubble-P residual at fixed T";
    verdict        validationRefused;
    refusal        "No independent experimental evidence remains after fitting.";

    fittedParameters
    {
        equilibrium.liquid.activityModel.binaryParameters.tertButylEthylEther-toluene.b_ij  539.329738996;
        equilibrium.liquid.activityModel.binaryParameters.tertButylEthylEther-toluene.b_ji  -300.536029038;
    }

    evidence
    {
        partitionFingerprint  "d506773cc3278a18";   // frozen before the fit

        datasets
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

        domain
        {
            coordinate  x1;
            fit         { min 0.0566; max 0.9508; n 26; }
        }
    }

    metrics
    {
        //  r2InSample: not computed by this operation (it reports chi-square).
        //  NO HELD-OUT METRIC EXISTS.  r2InSample above is exactly that --
        //  in-sample -- and must not be read as an external check.
    }
}

);
`,rr=`/*--------------------------------*- Choupo -*--------------------------------*\\
  CURATION DOSSIER -- a scientific work record, NOT runtime property data.

  NOTHING IN THIS FILE IS VISIBLE TO THE SOLVER.  Record resolution looks only
  in <case>/constant/, data/standards/ and data/local/, so a file here is out
  of its reach BY CONSTRUCTION -- not by convention.

  Nothing here has been promoted.  Curation state belongs to the evidence
  process; runtime trust belongs to the numerical record actually admitted
  to data/standards/, and only an explicit human promotion moves one there
  (bin/curate/promote-from-dossier).

  MATURITY IS PER PROPERTY, not per component: the properties below may hold
  different verdicts, and any whole-component summary is DERIVED from them
  rather than stored beside them.

  Regenerated on every run.  Hand edits are lost.
\\*-----------------------------------------------------------------------------*/

component      water;
reviewStatus   unreviewed;

properties
(
{
    property       binaryVLE.T_bubble;
    operation      fit_nrtl;   // type fitParameters
    model          "NRTL binary pair, bubble-T residual at fixed P";
    verdict        validationRefused;
    refusal        "No independent experimental evidence remains after fitting.";

    fittedParameters
    {
        equilibrium.liquid.activityModel.binaryParameters.water-triethyleneGlycol.b_ij  -928.551143824;
        equilibrium.liquid.activityModel.binaryParameters.water-triethyleneGlycol.b_ji  609.027332256;
    }

    evidence
    {
        partitionFingerprint  "fd80b6078779bf2e";   // frozen before the fit

        datasets
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

        domain
        {
            coordinate  x1;
            fit         { min 0.099; max 0.987; n 96; }
        }
    }

    metrics
    {
        //  r2InSample: not computed by this operation (it reports chi-square).
        //  NO HELD-OUT METRIC EXISTS.  r2InSample above is exactly that --
        //  in-sample -- and must not be read as an external check.
    }
}

{
    property       binaryVLE.T_bubble;
    operation      fit_nrtl_start2;   // type fitParameters
    model          "NRTL binary pair, bubble-T residual at fixed P";
    verdict        validationRefused;
    refusal        "No independent experimental evidence remains after fitting.";

    fittedParameters
    {
        equilibrium.liquid.activityModel.binaryParameters.water-triethyleneGlycol.b_ij  2999.99999401;
        equilibrium.liquid.activityModel.binaryParameters.water-triethyleneGlycol.b_ji  -1057.17448129;
    }

    evidence
    {
        partitionFingerprint  "fd80b6078779bf2e";   // frozen before the fit

        datasets
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

        domain
        {
            coordinate  x1;
            fit         { min 0.099; max 0.987; n 96; }
        }
    }

    metrics
    {
        //  r2InSample: not computed by this operation (it reports chi-square).
        //  NO HELD-OUT METRIC EXISTS.  r2InSample above is exactly that --
        //  in-sample -- and must not be read as an external check.
    }
}

);
`,ir=Object.assign({"../../../data/curation/components/12Butanediol/curation/12Butanediol.dossier":Ie,"../../../data/curation/components/12Propanediol/curation/12Propanediol.dossier":xe,"../../../data/curation/components/13Butanediol/curation/13Butanediol.dossier":Pe,"../../../data/curation/components/13Dioxolane/curation/13Dioxolane.dossier":Se,"../../../data/curation/components/13Propanediol/curation/13Propanediol.dossier":Re,"../../../data/curation/components/16Hexanediol/curation/16Hexanediol.dossier":je,"../../../data/curation/components/1Chlorobutane/curation/1Chlorobutane.dossier":Oe,"../../../data/curation/components/1Decanol/curation/1Decanol.dossier":Ne,"../../../data/curation/components/1HPerfluorooctane/curation/1HPerfluorooctane.dossier":_e,"../../../data/curation/components/1Octanol/curation/1Octanol.dossier":ge,"../../../data/curation/components/1Pentanamine/curation/1Pentanamine.dossier":Ce,"../../../data/curation/components/1Propoxy2Propanol/curation/1Propoxy2Propanol.dossier":He,"../../../data/curation/components/2Butoxyethanol/curation/2Butoxyethanol.dossier":qe,"../../../data/curation/components/2Chlorotoluene/curation/2Chlorotoluene.dossier":De,"../../../data/curation/components/2Ethoxyethanol/curation/2Ethoxyethanol.dossier":Le,"../../../data/curation/components/2Methoxyethanol/curation/2Methoxyethanol.dossier":Fe,"../../../data/curation/components/2Methyltetrahydrofuran/curation/2Methyltetrahydrofuran.dossier":we,"../../../data/curation/components/2Propoxyethanol/curation/2Propoxyethanol.dossier":Me,"../../../data/curation/components/33Oxydipropanol/curation/33Oxydipropanol.dossier":Be,"../../../data/curation/components/3Methyl1Butanol/curation/3Methyl1Butanol.dossier":Ue,"../../../data/curation/components/3Methyl2Butanol/curation/3Methyl2Butanol.dossier":Ve,"../../../data/curation/components/3Pentanol/curation/3Pentanol.dossier":Ae,"../../../data/curation/components/4Chlorotoluene/curation/4Chlorotoluene.dossier":ke,"../../../data/curation/components/NMethyl13Diaminopropane/curation/NMethyl13Diaminopropane.dossier":Ye,"../../../data/curation/components/allylAlcohol/curation/allylAlcohol.dossier":ze,"../../../data/curation/components/cyclopentanol/curation/cyclopentanol.dossier":Xe,"../../../data/curation/components/diButylCarbonate/curation/diButylCarbonate.dossier":Ge,"../../../data/curation/components/diEthylCarbonate/curation/diEthylCarbonate.dossier":Ke,"../../../data/curation/components/diIsobutylEther/curation/diIsobutylEther.dossier":$e,"../../../data/curation/components/diNButylEther/curation/diNButylEther.dossier":We,"../../../data/curation/components/diethanolamine/curation/diethanolamine.dossier":Je,"../../../data/curation/components/diethyleneGlycolDibutylEther/curation/diethyleneGlycolDibutylEther.dossier":Ze,"../../../data/curation/components/diethyleneGlycolDiethylEther/curation/diethyleneGlycolDiethylEther.dossier":Qe,"../../../data/curation/components/diethyleneGlycolMonohexylEther/curation/diethyleneGlycolMonohexylEther.dossier":en,"../../../data/curation/components/diethylethanolamine/curation/diethylethanolamine.dossier":nn,"../../../data/curation/components/dimethylSulfoxide/curation/dimethylSulfoxide.dossier":tn,"../../../data/curation/components/dimethylethanolamine/curation/dimethylethanolamine.dossier":an,"../../../data/curation/components/ethylDecanoate/curation/ethylDecanoate.dossier":rn,"../../../data/curation/components/ethylOctanoate/curation/ethylOctanoate.dossier":on,"../../../data/curation/components/furfural/curation/furfural.dossier":dn,"../../../data/curation/components/glycerol/curation/glycerol.dossier":sn,"../../../data/curation/components/hexafluorobenzene/curation/hexafluorobenzene.dossier":ln,"../../../data/curation/components/mNitrotoluene/curation/mNitrotoluene.dossier":cn,"../../../data/curation/components/methylButanoate/curation/methylButanoate.dossier":mn,"../../../data/curation/components/methylDecanoate/curation/methylDecanoate.dossier":bn,"../../../data/curation/components/methylDiEthanolAmine/curation/methylDiEthanolAmine.dossier":un,"../../../data/curation/components/methylHeptanoate/curation/methylHeptanoate.dossier":pn,"../../../data/curation/components/methylHexanoate/curation/methylHexanoate.dossier":fn,"../../../data/curation/components/methylLevulinate/curation/methylLevulinate.dossier":hn,"../../../data/curation/components/methylOctanoate/curation/methylOctanoate.dossier":yn,"../../../data/curation/components/methylTertPentylEther/curation/methylTertPentylEther.dossier":vn,"../../../data/curation/components/methylethanolamine/curation/methylethanolamine.dossier":En,"../../../data/curation/components/monoethanolamine/curation/monoethanolamine.dossier":Tn,"../../../data/curation/components/nAminoethylEthanolamine/curation/nAminoethylEthanolamine.dossier":In,"../../../data/curation/components/nAminoethylPiperazine/curation/nAminoethylPiperazine.dossier":xn,"../../../data/curation/components/nEicosane/curation/nEicosane.dossier":Pn,"../../../data/curation/components/nHexylAcetate/curation/nHexylAcetate.dossier":Sn,"../../../data/curation/components/nPentylAcetate/curation/nPentylAcetate.dossier":Rn,"../../../data/curation/components/phenanthrene/curation/phenanthrene.dossier":jn,"../../../data/curation/components/pyrene/curation/pyrene.dossier":On,"../../../data/curation/components/squalane/curation/squalane.dossier":Nn,"../../../data/curation/components/tetradecanoicAcid/curation/tetradecanoicAcid.dossier":_n,"../../../data/curation/components/tetrahydropyran/curation/tetrahydropyran.dossier":gn,"../../../data/curation/components/triethanolamine/curation/triethanolamine.dossier":Cn,"../../../data/curation/components/triethylamine/curation/triethylamine.dossier":Hn,"../../../data/curation/pairs/124Trimethylbenzene-1Pentanol/curation/1Pentanol.dossier":qn,"../../../data/curation/pairs/124Trimethylbenzene-2Pentanol/curation/2Pentanol.dossier":Dn,"../../../data/curation/pairs/14Dioxane-2Methyl2Propanol/curation/2Methyl2Propanol.dossier":Ln,"../../../data/curation/pairs/14Dioxane-cyclohexane/curation/14Dioxane.dossier":Fn,"../../../data/curation/pairs/14Dioxane-nButanol/curation/14Dioxane.dossier":wn,"../../../data/curation/pairs/1Hexanol-nButanol/curation/nButanol.dossier":Mn,"../../../data/curation/pairs/1Hexanol-nButylAcetate/curation/nButylAcetate.dossier":Bn,"../../../data/curation/pairs/1Hexene-1Pentanol/curation/1Pentanol.dossier":Un,"../../../data/curation/pairs/1Hexene-2Butanol/curation/2Butanol.dossier":Vn,"../../../data/curation/pairs/1Hexene-diNButylEther/curation/diNButylEther.dossier":An,"../../../data/curation/pairs/1Hexene-nButanol/curation/nButanol.dossier":kn,"../../../data/curation/pairs/1Hexene-tertButylEthylEther/curation/tertButylEthylEther.dossier":Yn,"../../../data/curation/pairs/1Pentanol-224Trimethylpentane/curation/1Pentanol.dossier":zn,"../../../data/curation/pairs/1Pentanol-2Hexanone/curation/2Hexanone.dossier":Xn,"../../../data/curation/pairs/1Pentanol-anisole/curation/1Pentanol.dossier":Gn,"../../../data/curation/pairs/1Pentanol-cyclohexane/curation/1Pentanol.dossier":Kn,"../../../data/curation/pairs/1Pentanol-nHexane/curation/1Pentanol.dossier":$n,"../../../data/curation/pairs/1Pentanol-nNonane/curation/1Pentanol.dossier":Wn,"../../../data/curation/pairs/1Pentanol-toluene/curation/1Pentanol.dossier":Jn,"../../../data/curation/pairs/1Propanol-224Trimethylpentane/curation/1Propanol.dossier":Zn,"../../../data/curation/pairs/1Propanol-Dichloroethane/curation/Dichloroethane.dossier":Qn,"../../../data/curation/pairs/1Propanol-acetonitrile/curation/acetonitrile.dossier":et,"../../../data/curation/pairs/1Propanol-benzene/curation/benzene.dossier":nt,"../../../data/curation/pairs/1Propanol-diethylSulfide/curation/diethylSulfide.dossier":tt,"../../../data/curation/pairs/1Propanol-diisopropylEther/curation/diisopropylEther.dossier":at,"../../../data/curation/pairs/1Propanol-dimethylCarbonate/curation/1Propanol.dossier":rt,"../../../data/curation/pairs/1Propanol-propionicAcid/curation/1Propanol.dossier":it,"../../../data/curation/pairs/224Trimethylpentane-2Butanol/curation/2Butanol.dossier":ot,"../../../data/curation/pairs/224Trimethylpentane-2Pentanol/curation/2Pentanol.dossier":dt,"../../../data/curation/pairs/224Trimethylpentane-diethylDisulfide/curation/diethylDisulfide.dossier":st,"../../../data/curation/pairs/224Trimethylpentane-diisopropylEther/curation/diisopropylEther.dossier":lt,"../../../data/curation/pairs/224Trimethylpentane-dimethylDisulfide/curation/dimethylDisulfide.dossier":ct,"../../../data/curation/pairs/224Trimethylpentane-ethanol/Tx-heldout/curation/ethanol.dossier":mt,"../../../data/curation/pairs/224Trimethylpentane-ethanol/Tx/curation/ethanol.dossier":bt,"../../../data/curation/pairs/224Trimethylpentane-isopropanol/curation/isopropanol.dossier":ut,"../../../data/curation/pairs/224Trimethylpentane-methylTertPentylEther/curation/methylTertPentylEther.dossier":pt,"../../../data/curation/pairs/224Trimethylpentane-nHeptane/curation/224Trimethylpentane.dossier":ft,"../../../data/curation/pairs/2Butanol-benzene/curation/benzene.dossier":ht,"../../../data/curation/pairs/2Butanol-cyclohexane/curation/2Butanol.dossier":yt,"../../../data/curation/pairs/2Butanol-diisopropylEther/curation/diisopropylEther.dossier":vt,"../../../data/curation/pairs/2Butanol-dimethylCarbonate/curation/2Butanol.dossier":Et,"../../../data/curation/pairs/2Butanol-methanol/curation/methanol.dossier":Tt,"../../../data/curation/pairs/2Butanol-nDodecane/curation/2Butanol.dossier":It,"../../../data/curation/pairs/2Butanol-nHexane/curation/nHexane.dossier":xt,"../../../data/curation/pairs/2Butanol-nNDimethylformamide/curation/2Butanol.dossier":Pt,"../../../data/curation/pairs/2Butanol-toluene/curation/2Butanol.dossier":St,"../../../data/curation/pairs/2Methyl1Butanol-ethanol/curation/ethanol.dossier":Rt,"../../../data/curation/pairs/2Methyl1Propanol-benzene/curation/benzene.dossier":jt,"../../../data/curation/pairs/2Methyl1Propanol-diisopropylEther/curation/diisopropylEther.dossier":Ot,"../../../data/curation/pairs/2Methyl1Propanol-isobutylAcetate/curation/2Methyl1Propanol.dossier":Nt,"../../../data/curation/pairs/2Methyl1Propanol-nNDimethylformamide/curation/2Methyl1Propanol.dossier":_t,"../../../data/curation/pairs/2Methyl2Propanol-nNDimethylformamide/curation/2Methyl2Propanol.dossier":gt,"../../../data/curation/pairs/2Methyl2Propanol-water/curation/2Methyl2Propanol.dossier":Ct,"../../../data/curation/pairs/2Pentanol-cyclohexane/curation/2Pentanol.dossier":Ht,"../../../data/curation/pairs/2Pentanol-nHeptane/curation/2Pentanol.dossier":qt,"../../../data/curation/pairs/2Pentanol-nHexane/curation/2Pentanol.dossier":Dt,"../../../data/curation/pairs/2Pentanol-toluene/curation/2Pentanol.dossier":Lt,"../../../data/curation/pairs/Dichloroethane-ethylAcetate/curation/Dichloroethane.dossier":Ft,"../../../data/curation/pairs/acetone-methanol/curation/acetone.dossier":wt,"../../../data/curation/pairs/acetonitrile-ethanol/curation/ethanol.dossier":Mt,"../../../data/curation/pairs/acetonitrile-ethylAcetate/curation/ethylAcetate.dossier":Bt,"../../../data/curation/pairs/acetonitrile-isopropanol/curation/acetonitrile.dossier":Ut,"../../../data/curation/pairs/acetonitrile-methanol/curation/acetonitrile.dossier":Vt,"../../../data/curation/pairs/aniline-nNDimethylformamide/curation/nNDimethylformamide.dossier":At,"../../../data/curation/pairs/aniline-nOctane/curation/nOctane.dossier":kt,"../../../data/curation/pairs/anisole-nHexane/curation/nHexane.dossier":Yt,"../../../data/curation/pairs/benzene-diisopropylEther/curation/diisopropylEther.dossier":zt,"../../../data/curation/pairs/benzene-isopropanol/curation/benzene.dossier":Xt,"../../../data/curation/pairs/benzene-methanol/curation/benzene.dossier":Gt,"../../../data/curation/pairs/benzene-nButanol/curation/benzene.dossier":Kt,"../../../data/curation/pairs/benzene-nNDimethylacetamide/curation/benzene.dossier":$t,"../../../data/curation/pairs/chloroform-methylEthylKetone/curation/chloroform.dossier":Wt,"../../../data/curation/pairs/chloroform-methylIsobutylKetone/curation/chloroform.dossier":Jt,"../../../data/curation/pairs/chloroform-methylTertButylEther/curation/chloroform.dossier":Zt,"../../../data/curation/pairs/cyclohexane-cyclohexene/curation/cyclohexane.dossier":Qt,"../../../data/curation/pairs/cyclohexane-diNButylEther/curation/diNButylEther.dossier":ea,"../../../data/curation/pairs/cyclohexane-ethanol/curation/ethanol.dossier":na,"../../../data/curation/pairs/cyclohexane-nButanol/curation/nButanol.dossier":ta,"../../../data/curation/pairs/cyclohexane-nHeptane/curation/cyclohexane.dossier":aa,"../../../data/curation/pairs/cyclohexane-tertButylEthylEther/curation/tertButylEthylEther.dossier":ra,"../../../data/curation/pairs/cyclohexane-tetrahydrofuran/curation/cyclohexane.dossier":ia,"../../../data/curation/pairs/diNButylEther-nHeptane/curation/diNButylEther.dossier":oa,"../../../data/curation/pairs/diNButylEther-nNDimethylacetamide/curation/diNButylEther.dossier":da,"../../../data/curation/pairs/diNButylEther-toluene/curation/diNButylEther.dossier":sa,"../../../data/curation/pairs/diethylSulfide-ethanol/curation/diethylSulfide.dossier":la,"../../../data/curation/pairs/diethylSulfide-nPropylAcetate/curation/diethylSulfide.dossier":ca,"../../../data/curation/pairs/diisopropylEther-isopropanol/Tx-heldout/curation/diisopropylEther.dossier":ma,"../../../data/curation/pairs/diisopropylEther-isopropanol/Tx/curation/diisopropylEther.dossier":ba,"../../../data/curation/pairs/diisopropylEther-nButanol/curation/diisopropylEther.dossier":ua,"../../../data/curation/pairs/dimethylCarbonate-ethanol/Tx-heldout/curation/ethanol.dossier":pa,"../../../data/curation/pairs/dimethylCarbonate-ethanol/Tx/curation/ethanol.dossier":fa,"../../../data/curation/pairs/dimethylCarbonate-isopropanol/curation/isopropanol.dossier":ha,"../../../data/curation/pairs/dimethylCarbonate-methanol/curation/methanol.dossier":ya,"../../../data/curation/pairs/dimethylCarbonate-nButanol/curation/nButanol.dossier":va,"../../../data/curation/pairs/dimethylCarbonate-oXylene/curation/dimethylCarbonate.dossier":Ea,"../../../data/curation/pairs/dimethylCarbonate-pXylene/curation/dimethylCarbonate.dossier":Ta,"../../../data/curation/pairs/dimethylDisulfide-tertButylEthylEther/curation/dimethylDisulfide.dossier":Ia,"../../../data/curation/pairs/dimethylDisulfide-toluene/curation/dimethylDisulfide.dossier":xa,"../../../data/curation/pairs/ethanol-ethyleneGlycol/curation/ethanol.dossier":Pa,"../../../data/curation/pairs/ethanol-methylEthylKetone/curation/ethanol.dossier":Sa,"../../../data/curation/pairs/ethanol-nNDimethylacetamide/curation/ethanol.dossier":Ra,"../../../data/curation/pairs/ethanol-nOctane/curation/nOctane.dossier":ja,"../../../data/curation/pairs/ethanol-oCresol/curation/oCresol.dossier":Oa,"../../../data/curation/pairs/ethanol-pXylene/curation/ethanol.dossier":Na,"../../../data/curation/pairs/ethylAcetate-methanol/curation/ethylAcetate.dossier":_a,"../../../data/curation/pairs/ethylBenzene-monochlorobenzene/curation/ethylBenzene.dossier":ga,"../../../data/curation/pairs/ethylBenzene-styrene/curation/ethylBenzene.dossier":Ca,"../../../data/curation/pairs/ethylBenzene-sulfolane/curation/ethylBenzene.dossier":Ha,"../../../data/curation/pairs/ethyleneGlycol-water/curation/water.dossier":qa,"../../../data/curation/pairs/isopropanol-isopropylAcetate/curation/isopropylAcetate.dossier":Da,"../../../data/curation/pairs/isopropanol-methanol/curation/methanol.dossier":La,"../../../data/curation/pairs/mXylene-nDecane/curation/nDecane.dossier":Fa,"../../../data/curation/pairs/mXylene-nOctane/curation/nOctane.dossier":wa,"../../../data/curation/pairs/methanol-methylEthylKetone/curation/methanol.dossier":Ma,"../../../data/curation/pairs/methanol-tetrahydrofuran/curation/tetrahydrofuran.dossier":Ba,"../../../data/curation/pairs/methylFormate-nHeptane/curation/methylFormate.dossier":Ua,"../../../data/curation/pairs/methylPropionate-nHeptane/curation/methylPropionate.dossier":Va,"../../../data/curation/pairs/methylTertPentylEther-toluene/curation/methylTertPentylEther.dossier":Aa,"../../../data/curation/pairs/nButanol-nButylAcetate/curation/nButanol.dossier":ka,"../../../data/curation/pairs/nButanol-nDodecane/curation/nButanol.dossier":Ya,"../../../data/curation/pairs/nButanol-pXylene/curation/nButanol.dossier":za,"../../../data/curation/pairs/nButanol-toluene/curation/nButanol.dossier":Xa,"../../../data/curation/pairs/nDecane-oXylene/curation/nDecane.dossier":Ga,"../../../data/curation/pairs/nDecane-pXylene/curation/pXylene.dossier":Ka,"../../../data/curation/pairs/nHeptane-nNDimethylacetamide/curation/nHeptane.dossier":$a,"../../../data/curation/pairs/nHeptane-tertButylEthylEther/curation/tertButylEthylEther.dossier":Wa,"../../../data/curation/pairs/nHeptane-thiophene/curation/thiophene.dossier":Ja,"../../../data/curation/pairs/nHeptane-toluene/curation/nHeptane.dossier":Za,"../../../data/curation/pairs/nHexane-toluene/curation/nHexane.dossier":Qa,"../../../data/curation/pairs/nNDimethylacetamide-nNDimethylformamide/curation/nNDimethylformamide.dossier":er,"../../../data/curation/pairs/nNDimethylacetamide-toluene/curation/toluene.dossier":nr,"../../../data/curation/pairs/nOctane-oXylene/curation/nOctane.dossier":tr,"../../../data/curation/pairs/tertButylEthylEther-toluene/curation/tertButylEthylEther.dossier":ar,"../../../data/curation/pairs/triethyleneGlycol-water/curation/water.dossier":rr,"../../../tutorials/props/curation/curate01_water_evidence_partition/curation/water.dossier":ue,"../../../tutorials/props/curation/curate02_vle_heldout_ethanol_water/curation/ethanol.dossier":be,"../../../tutorials/props/curation/curate03_thermoml_fixture_bubble/curation/ethanol.dossier":me,"../../../tutorials/props/curation/curate04_nrtl_methanol_water/curation/methanol.dossier":ce,"../../../tutorials/props/curation/curate05_nrtl_acetone_methanol/curation/acetone.dossier":le,"../../../tutorials/props/curation/curate06_nrtl_isopropanol_water/curation/isopropanol.dossier":se,"../../../tutorials/props/curation/curate07_nrtl_ethylacetate_ethanol/curation/ethylAcetate.dossier":de,"../../../tutorials/props/curation/curate08_nrtl_methylacetate_methanol/curation/methylAcetate.dossier":oe,"../../../tutorials/props/curation/curate09_nrtl_propanol_water/curation/1Propanol.dossier":ie,"../../../tutorials/props/curation/curate10_nrtl_acetonitrile_water/curation/acetonitrile.dossier":re,"../../../tutorials/props/curation/curate11_nrtl_acetone_ethanol/curation/acetone.dossier":ae,"../../../tutorials/props/curation/curate12_nrtl_ethanol_cyclohexane/curation/ethanol.dossier":te,"../../../tutorials/props/curation/curate13_synthetic_lle_butanol_water/curation/nButanol.dossier":ne,"../../../tutorials/props/curation/curate14_nrtl_butanol_water/curation/nButanol.dossier":ee,"../../../tutorials/steady/optimisation/fitNRTL02_thermoml_isobars/curation/ethanol.dossier":Q});function I(n){return typeof n=="string"?n:typeof n=="number"?String(n):""}function z(n){return typeof n=="number"?n:null}function F(n){return typeof n=="object"&&n!==null&&!Array.isArray(n)?n:null}const or=["validated","notValidated","heldOutPerformed","validationRefused","notClaimed"];function dr(n,a){let l;try{l=G(K(n))}catch{return[]}const p=I(l.component);if(!p)return[];const f=a.split("/").filter(Boolean).slice(-1)[0]??a,c=Array.isArray(l.properties)?l.properties:[],t=[];for(const h of c){const m=F(h);if(!m)continue;const R=I(m.property);if(!R)continue;const j=I(m.verdict);if(!or.includes(j))continue;const S=F(m.evidence),N=[],y=S?.datasets;if(Array.isArray(y))for(const _ of y){const v=F(_);v&&N.push({role:I(v.role),dataset:I(v.dataset),provenance:I(v.provenance)})}const P=F(m.metrics);t.push({casePath:a,caseName:f,component:p,property:R,operation:I(m.operation),model:I(m.model),verdict:j,partitionFingerprint:S?I(S.partitionFingerprint):"",datasets:N,aadHeldOutPct:P?z(P.aadHeldOutPct):null,acceptanceMaxAADPct:P?z(P.acceptanceMaxAADPct):null,acceptanceOrigin:P?I(P.acceptanceOrigin):""})}return t}let V=null;function Z(){if(V)return V;const n=new Map;for(const[a,l]of Object.entries(ir)){const p=a.replace(/^.*?(tutorials|data\/curation)\//,(f,c)=>`${c}/`).replace(/\/curation\/[^/]+$/,"");for(const f of dr(l,p)){const c=n.get(f.component)??[];c.push(f),n.set(f.component,c)}}for(const a of n.values())a.sort((l,p)=>l.caseName.localeCompare(p.caseName)||l.property.localeCompare(p.property));return V=n,n}function sr(n){return Z().get(n)??[]}function lr(){let n=0;for(const a of Z().values())n+=a.length;return n}const cr={validated:{label:"VALIDATED",color:"green",help:"fitted on declared evidence and tested against held-out points it never saw; the held-out error met the acceptance band declared BEFORE the fit"},notValidated:{label:"NOT VALIDATED",color:"red",help:"tested against held-out points and MISSED the acceptance band declared before the fit — a finding, not a failure to hide"},heldOutPerformed:{label:"HELD-OUT TESTED",color:"blue",help:"tested against held-out points, but no acceptance band was declared beforehand — the residuals are reported and no verdict is claimed"},validationRefused:{label:"NOT TESTED",color:"orange",help:"no independent evidence remained after fitting: everything available was used to fit, so nothing tested the result. The honest answer, not a smaller split"},notClaimed:{label:"no dossier",color:"gray",help:"no curation dossier is attached to this property, so no scientific claim has been made about it. The datum may be perfectly good — nobody has declared evidence for it"}};function X({v:n}){const a=cr[n];return e.jsx(J,{label:a.help,withArrow:!0,multiline:!0,w:300,children:e.jsx($,{size:"xs",variant:"light",color:a.color,tt:"none",children:a.label})})}function pr({record:n,onClose:a}){const[l,p]=pe.useState(!1),f=sr(n.name),c=lr();return e.jsxs(M,{gap:"sm",style:{height:"100%",minHeight:0},children:[e.jsxs(D,{justify:"space-between",align:"baseline",wrap:"nowrap",children:[e.jsxs(D,{gap:8,align:"baseline",children:[e.jsx(o,{fw:700,size:"lg",children:n.name}),n.formula&&e.jsx(o,{c:"dimmed",size:"sm",children:n.formula})]}),a&&e.jsx(L,{size:"compact-xs",variant:"subtle",onClick:a,children:"close"})]}),n.marks.length>0&&e.jsx(M,{gap:4,children:n.marks.map(t=>e.jsxs(D,{gap:6,wrap:"nowrap",align:"flex-start",children:[t.tone==="warn"&&e.jsx(fe,{size:14,style:{marginTop:2,flexShrink:0}}),e.jsx(o,{size:"xs",c:t.tone==="warn"?"orange.6":"dimmed",children:t.text})]},t.kind+t.text))}),e.jsx(he,{style:{flex:1,minHeight:0},children:e.jsxs(M,{gap:"md",children:[e.jsx(q,{title:"IDENTITY",children:e.jsx(i,{fz:"xs",withRowBorders:!1,children:e.jsx(i.Tbody,{children:n.identity.map(t=>e.jsxs(i.Tr,{children:[e.jsx(i.Td,{w:110,c:"dimmed",children:t.label}),e.jsx(i.Td,{children:t.value!==null?e.jsx(o,{size:"xs",ff:"monospace",children:t.value}):e.jsxs(o,{size:"xs",c:"dimmed",fs:"italic",children:["— ",t.gap]})})]},t.label))})})}),e.jsxs(q,{title:"PROPERTY COVERAGE",children:[e.jsx(i,{fz:"xs",withRowBorders:!1,children:e.jsx(i.Tbody,{children:n.capabilities.map(t=>e.jsxs(i.Tr,{children:[e.jsx(i.Td,{w:16,children:e.jsx(o,{size:"sm",fw:700,c:t.present?"green.5":"red.5",children:t.present?"✓":"✗"})}),e.jsx(i.Td,{w:150,children:t.label}),e.jsx(i.Td,{children:t.present?e.jsx(o,{size:"xs",ff:"monospace",c:"dimmed",children:t.detail}):e.jsx(o,{size:"xs",c:"dimmed",fs:"italic",children:t.unlocks})}),e.jsx(i.Td,{w:110,ta:"right",children:t.present&&e.jsx(X,{v:t.verdict})})]},t.key))})}),e.jsx(o,{size:"xs",c:"dimmed",mt:4,children:"✓ means the record CARRIES the block — never that the numbers are good.  The right-hand column is the curation dossier's verdict, and it is the only thing here that speaks to quality."})]}),n.models.length>0&&e.jsx(q,{title:"RESOLVED MODELS",children:e.jsx(i,{fz:"xs",withRowBorders:!1,children:e.jsx(i.Tbody,{children:n.models.map(t=>e.jsxs(i.Tr,{children:[e.jsx(i.Td,{w:180,c:"dimmed",children:t.slot}),e.jsx(i.Td,{children:e.jsx(o,{size:"xs",ff:"monospace",children:t.detail})})]},t.slot+t.model))})})}),n.valueOrigins.length>0&&e.jsxs(q,{title:"HOW EACH VALUE WAS PRODUCED",children:[e.jsx(i,{fz:"xs",withRowBorders:!1,children:e.jsx(i.Tbody,{children:n.valueOrigins.map(t=>e.jsxs(i.Tr,{children:[e.jsx(i.Td,{w:70,children:e.jsx(o,{size:"xs",ff:"monospace",children:t.field})}),e.jsx(i.Td,{w:90,children:e.jsx($,{size:"xs",variant:"light",color:t.origin==="measured"||t.origin==="experimental"||t.origin==="literature"?"green":"yellow",children:t.origin})}),e.jsxs(i.Td,{children:[e.jsxs(o,{size:"xs",ff:"monospace",c:"dimmed",children:[t.method,t.methodVersion?` · ${t.methodVersion}`:""]}),t.inputFingerprint&&e.jsxs(o,{size:"xs",c:"dimmed",ff:"monospace",children:["inputs ",t.inputFingerprint]})]}),e.jsx(i.Td,{w:130,ta:"right",children:t.uncertaintyStatus?e.jsx(o,{size:"xs",c:t.uncertaintyStatus==="unquantified"?"yellow.6":"dimmed",children:t.uncertaintyStatus}):e.jsx(o,{size:"xs",c:"dimmed",fs:"italic",children:"not declared"})})]},t.field))})}),e.jsxs(o,{size:"xs",c:"dimmed",mt:4,children:["Read straight off the record's own ",e.jsxs(H,{children:["provenance ","{}"]})," ","blocks — one per value that declares an ",e.jsx(H,{children:"origin"}),".  A value produced by a correlation is not a measured one, and a generated component would otherwise be indistinguishable on this screen from a curated one.  ",e.jsx("b",{children:"unquantified"})," is the record's own answer about its error, not a missing field."]})]}),e.jsx(q,{title:"CURATION DOSSIERS",children:f.length===0?e.jsxs(o,{size:"xs",c:"dimmed",children:["No dossier in the corpus names this component (",c," ","dossier",c===1?"":"s"," were read).  One is produced by ",e.jsxs(H,{children:["bin/choupo-curate <",n.name,">"]}),", which extracts ThermoML datasets, DECLARES which are fitted and which are held out ",e.jsx("i",{children:"before"})," fitting, and records the held-out residuals beside the acceptance band."]}):e.jsxs(e.Fragment,{children:[e.jsx(i,{fz:"xs",withRowBorders:!1,children:e.jsx(i.Tbody,{children:f.map(t=>e.jsxs(i.Tr,{children:[e.jsxs(i.Td,{w:150,children:[e.jsx(o,{size:"xs",ff:"monospace",children:t.property}),e.jsx(o,{size:"xs",c:"dimmed",children:t.caseName})]}),e.jsxs(i.Td,{children:[t.aadHeldOutPct!==null?e.jsxs(o,{size:"xs",ff:"monospace",c:"dimmed",children:["held-out AAD ",t.aadHeldOutPct.toPrecision(4)," %",t.acceptanceMaxAADPct!==null?` · band ${t.acceptanceMaxAADPct} % declared before the fit`:" · no band was declared beforehand"]}):e.jsx(o,{size:"xs",c:"dimmed",fs:"italic",children:"no held-out residual recorded"}),e.jsxs(o,{size:"xs",c:"dimmed",children:[t.datasets.length," dataset(s):"," ",t.datasets.map(h=>`${h.role}${h.provenance?` (${h.provenance})`:""}`).join(", ")]})]}),e.jsx(i.Td,{w:110,ta:"right",children:e.jsx(X,{v:t.verdict})})]},t.casePath+t.property))})}),e.jsxs(o,{size:"xs",c:"dimmed",mt:4,children:["Each row is one curation run in the case named beneath its property — not a property of the catalogue record.  The property keys are the ",e.jsx("b",{children:"engine's"})," and are deliberately not translated into the coverage rows above: one of them (",e.jsx(H,{children:"binaryVLE.T_bubble"}),") is a binary pair's property and has no pure-component row to map onto."]})]})}),e.jsxs(W,{children:[e.jsxs(L,{size:"compact-xs",variant:"subtle",leftSection:e.jsx(Y,{size:13}),onClick:()=>p(t=>!t),children:[l?"hide":"view"," raw record"]}),e.jsx(Te,{in:l,children:e.jsx(H,{block:!0,fz:10,mt:6,style:{maxHeight:360,overflow:"auto"},children:n.raw})})]})]})}),e.jsxs(D,{gap:"xs",wrap:"nowrap",children:[e.jsx(L,{size:"compact-xs",variant:"light",color:"accent",leftSection:e.jsx(ye,{size:13}),onClick:()=>window.open(`${window.location.pathname}?component=${encodeURIComponent(n.name)}`,"_blank","noopener"),children:"open full"}),e.jsx(J,{label:"Search your ThermoML mirror for papers measuring this compound",withArrow:!0,position:"top",children:e.jsx(L,{size:"compact-xs",variant:"subtle",color:"gray",leftSection:e.jsx(Y,{size:13}),onClick:()=>window.open(`${window.location.pathname}${ve(n.name)}`,"_blank","noopener"),children:"who measured this?"})})]})]})}function q({title:n,children:a}){return e.jsxs(W,{children:[e.jsx(o,{size:"xs",fw:700,c:"dimmed",mb:4,children:n}),e.jsx(Ee,{mb:6}),a]})}export{pr as C,X as V,sr as d,ur as r};
