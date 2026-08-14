import{be as G,aU as F,b4 as j,aK as o,X as M,G as w,_ as m,d as q,I as z,V as Q,Y as l,h as x,c as B,q as Y,p as Z,a1 as $,B as X}from"./index-DiEwbQTc.js";import{C as nn}from"./Collapse-whhq1JtS.js";import{D as en}from"./Divider-DS0Uz0Ha.js";const on=`/*--------------------------------*- Choupo -*-----------------------*\\
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
`,an=`/*--------------------------------*- Choupo -*-----------------------*\\
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
`,tn=`/*--------------------------------*- Choupo -*-----------------------*\\
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
`,rn=`/*--------------------------------*- Choupo -*-----------------------*\\
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
`,sn=`/*--------------------------------*- Choupo -*-----------------------*\\
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
`,ln=`/*--------------------------------*- Choupo -*-----------------------*\\
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
`,dn=`/*--------------------------------*- Choupo -*-----------------------*\\
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
`,cn=`/*--------------------------------*- Choupo -*-----------------------*\\
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
`,pn=`/*--------------------------------*- Choupo -*-----------------------*\\
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
`,mn=`/*--------------------------------*- Choupo -*-----------------------*\\
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
`,un=`/*--------------------------------*- Choupo -*-----------------------*\\
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
`,hn=`/*--------------------------------*- Choupo -*-----------------------*\\
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
`,Cn=`/*--------------------------------*- Choupo -*-----------------------*\\
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
`,fn=`/*--------------------------------*- Choupo -*-----------------------*\\
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
`,gn=`/*--------------------------------*- Choupo -*-----------------------*\\
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
`,bn=`/*--------------------------------*- Choupo -*-----------------------*\\
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
`,Tn=`/*--------------------------------*- Choupo -*-----------------------*\\
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
`,yn=`/*--------------------------------*- Choupo -*-----------------------*\\
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
`,Pn=`/*--------------------------------*- Choupo -*-----------------------*\\
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
`,vn=`/*--------------------------------*- Choupo -*-----------------------*\\
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
`,Sn=`/*--------------------------------*- Choupo -*-----------------------*\\
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
`,On=`/*--------------------------------*- Choupo -*-----------------------*\\
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
`,An=`/*--------------------------------*- Choupo -*-----------------------*\\
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
`,Hn=`/*--------------------------------*- Choupo -*-----------------------*\\
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
`,_n=`/*--------------------------------*- Choupo -*-----------------------*\\
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
`,En=`/*--------------------------------*- Choupo -*-----------------------*\\
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
`,Rn=`/*--------------------------------*- Choupo -*-----------------------*\\
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
`,Nn=`/*--------------------------------*- Choupo -*-----------------------*\\
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
`,kn=`/*--------------------------------*- Choupo -*-----------------------*\\
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
`,Kn=`/*--------------------------------*- Choupo -*-----------------------*\\
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
`,Mn=`/*--------------------------------*- Choupo -*--------------------------------*\\
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
`,wn=`/*--------------------------------*- Choupo -*-----------------------*\\
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
`,qn=`/*--------------------------------*- Choupo -*-----------------------*\\
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
`,Jn=`/*--------------------------------*- Choupo -*-----------------------*\\
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
`,In=`/*--------------------------------*- Choupo -*-----------------------*\\
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
`,Dn=`/*--------------------------------*- Choupo -*-----------------------*\\
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
`,Vn=`/*--------------------------------*- Choupo -*-----------------------*\\
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
        //  \`unknown\` is a DECLARED absence, not a guess (AP3, 2026-08-05).
    //  This window used to read \`(24  24)\`, which is not an interval --
    //  a four-term CoolProp liquid-Cp fit cannot have been regressed
    //  over it.  The true domain was not recoverable from the record,
    //  and INVENTING a plausible one would be a false claim about
    //  where the correlation holds.  Declared honestly instead; the
    //  engine announces it on every run.
    Trange        unknown;
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
`,xn=`/*--------------------------------*- Choupo -*-----------------------*\\
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
`,Gn=`/*--------------------------------*- Choupo -*-----------------------*\\
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
`,Fn=`/*--------------------------------*- Choupo -*-----------------------*\\
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
`,Bn=`/*--------------------------------*- Choupo -*-----------------------*\\
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
`,Ln=`/*--------------------------------*- Choupo -*-----------------------*\\
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
`,Wn=`/*--------------------------------*- Choupo -*-----------------------*\\
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
`,Un=`/*--------------------------------*- Choupo -*-----------------------*\\
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
`,jn=`/*--------------------------------*- Choupo -*-----------------------*\\
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
`,zn=`/*--------------------------------*- Choupo -*-----------------------*\\
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
`,Qn=`/*--------------------------------*- Choupo -*-----------------------*\\
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
`,Yn=`/*--------------------------------*- Choupo -*-----------------------*\\
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
`,Zn=`/*--------------------------------*- Choupo -*-----------------------*\\
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
`,$n=`/*--------------------------------*- Choupo -*-----------------------*\\
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
`,Xn=`/*--------------------------------*- Choupo -*-----------------------*\\
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
`,ne=`/*--------------------------------*- Choupo -*-----------------------*\\
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
`,ee=`/*--------------------------------*- Choupo -*-----------------------*\\
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
`,oe=`/*--------------------------------*- Choupo -*-----------------------*\\
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
`,ae=`/*--------------------------------*- Choupo -*-----------------------*\\
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
`,te=`/*--------------------------------*- Choupo -*-----------------------*\\
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
`,ie=`/*--------------------------------*- Choupo -*-----------------------*\\
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
`,re=`/*--------------------------------*- Choupo -*-----------------------*\\
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
`,se=`/*--------------------------------*- Choupo -*-----------------------*\\
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
`,le=`/*--------------------------------*- Choupo -*-----------------------*\\
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
`,de=`/*--------------------------------*- Choupo -*-----------------------*\\
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
`,ce=`/*--------------------------------*- Choupo -*-----------------------*\\
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
`,pe=`/*--------------------------------*- Choupo -*-----------------------*\\
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
`,me=`/*--------------------------------*- Choupo -*-----------------------*\\
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
`,ue=`/*--------------------------------*- Choupo -*-----------------------*\\
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
`,he=`/*--------------------------------*- Choupo -*-----------------------*\\
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
`,Ce=`/*--------------------------------*- Choupo -*-----------------------*\\
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
`,fe=`/*--------------------------------*- Choupo -*-----------------------*\\
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
`,ge=`/*--------------------------------*- Choupo -*-----------------------*\\
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
`,be=`/*--------------------------------*- Choupo -*-----------------------*\\
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
`,Te=`/*--------------------------------*- Choupo -*-----------------------*\\
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
`,ye=`/*--------------------------------*- Choupo -*-----------------------*\\
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
`,Pe=`/*--------------------------------*- Choupo -*-----------------------*\\
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
`,ve=`/*--------------------------------*- Choupo -*-----------------------*\\
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
`,Se=`/*--------------------------------*- Choupo -*-----------------------*\\
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
`,Oe=`/*--------------------------------*- Choupo -*-----------------------*\\
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
`,Ae=`/*--------------------------------*- Choupo -*-----------------------*\\
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
`,He=`/*--------------------------------*- Choupo -*-----------------------*\\
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
`,_e=`/*--------------------------------*- Choupo -*-----------------------*\\
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
`,Ee=`/*--------------------------------*- Choupo -*-----------------------*\\
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
`,Re=`/*--------------------------------*- Choupo -*-----------------------*\\
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
`,Ne=`/*--------------------------------*- Choupo -*-----------------------*\\
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
`,ke=`/*--------------------------------*- Choupo -*-----------------------*\\
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
`,Ke=`/*--------------------------------*- Choupo -*-----------------------*\\
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
`,Me=`/*--------------------------------*- Choupo -*--------------------------------*\\
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
`,we=`/*--------------------------------*- Choupo -*-----------------------*\\
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
`,qe=`/*--------------------------------*- Choupo -*-----------------------*\\
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
`,Je=`/*--------------------------------*- Choupo -*-----------------------*\\
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
`,Ie=`/*--------------------------------*- Choupo -*-----------------------*\\
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
`,De=`/*--------------------------------*- Choupo -*-----------------------*\\
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
        //  \`unknown\` is a DECLARED absence, not a guess (AP3, 2026-08-05).
    //  This window used to read \`(24  24)\`, which is not an interval --
    //  a four-term CoolProp liquid-Cp fit cannot have been regressed
    //  over it.  The true domain was not recoverable from the record,
    //  and INVENTING a plausible one would be a false claim about
    //  where the correlation holds.  Declared honestly instead; the
    //  engine announces it on every run.
    Trange        unknown;
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
`,Ve=`/*--------------------------------*- Choupo -*-----------------------*\\
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
`,xe=`/*--------------------------------*- Choupo -*--------------------------------*\\
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

`,Ge=`/*--------------------------------*- Choupo -*--------------------------------*\\
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

`,Fe=`/*--------------------------------*- Choupo -*--------------------------------*\\
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

`,Be=`/*--------------------------------*- Choupo -*-----------------------*\\
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
        //  \`unknown\` is a DECLARED absence, not a guess (AP3, 2026-08-05).
    //  This window used to read \`(24  24)\`, which is not an interval --
    //  a four-term CoolProp liquid-Cp fit cannot have been regressed
    //  over it.  The true domain was not recoverable from the record,
    //  and INVENTING a plausible one would be a false claim about
    //  where the correlation holds.  Declared honestly instead; the
    //  engine announces it on every run.
    Trange        unknown;
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
`,Le=`/*--------------------------------*- Choupo -*-----------------------*\\
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
`,We=`/*--------------------------------*- Choupo -*-----------------------*\\
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
`,Ue=`/*--------------------------------*- Choupo -*-----------------------*\\
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
`,je=`/*--------------------------------*- Choupo -*-----------------------*\\
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
`,ze=`/*--------------------------------*- Choupo -*-----------------------*\\
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
`,Qe=`/*--------------------------------*- Choupo -*-----------------------*\\
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
`,Ye=`/*--------------------------------*- Choupo -*-----------------------*\\
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
`,Ze=`/*--------------------------------*- Choupo -*-----------------------*\\
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
`,$e=`/*--------------------------------*- Choupo -*-----------------------*\\
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
`,Xe=`/*--------------------------------*- Choupo -*-----------------------*\\
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
`,no=`/*--------------------------------*- Choupo -*-----------------------*\\
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
`,eo=`/*--------------------------------*- Choupo -*-----------------------*\\
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
`,oo=`/*--------------------------------*- Choupo -*-----------------------*\\
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
`,ao=`/*--------------------------------*- Choupo -*-----------------------*\\
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
`,to=`/*--------------------------------*- Choupo -*-----------------------*\\
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
`,io=`/*--------------------------------*- Choupo -*-----------------------*\\
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
`,ro=`/*--------------------------------*- Choupo -*-----------------------*\\
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
`,so=`/*--------------------------------*- Choupo -*-----------------------*\\
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
`,lo=`/*--------------------------------*- Choupo -*-----------------------*\\
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
`,co=`/*--------------------------------*- Choupo -*-----------------------*\\
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
`,po=`/*--------------------------------*- Choupo -*-----------------------*\\
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
`,mo=`/*--------------------------------*- Choupo -*-----------------------*\\
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
`,uo=`/*--------------------------------*- Choupo -*-----------------------*\\
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
`,ho=`/*--------------------------------*- Choupo -*-----------------------*\\
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
`,Co=`/*--------------------------------*- Choupo -*-----------------------*\\
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
`,fo=`/*--------------------------------*- Choupo -*-----------------------*\\
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
        //  \`unknown\` is a DECLARED absence, not a guess (AP3, 2026-08-05).
    //  This window used to read \`(166  165)\`, which is not an interval --
    //  a four-term CoolProp liquid-Cp fit cannot have been regressed
    //  over it.  The true domain was not recoverable from the record,
    //  and INVENTING a plausible one would be a false claim about
    //  where the correlation holds.  Declared honestly instead; the
    //  engine announces it on every run.
    Trange        unknown;
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
`,go=`/*--------------------------------*- Choupo -*-----------------------*\\
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
`,bo=`/*--------------------------------*- Choupo -*-----------------------*\\
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
`,To=`/*--------------------------------*- Choupo -*-----------------------*\\
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
`,yo=`/*--------------------------------*- Choupo -*-----------------------*\\
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
`,Po=`/*--------------------------------*- Choupo -*-----------------------*\\
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
`,vo=`/*--------------------------------*- Choupo -*-----------------------*\\
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
`,So=`/*--------------------------------*- Choupo -*-----------------------*\\
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
`,Oo=`/*--------------------------------*- Choupo -*-----------------------*\\
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
`,Ao=`/*--------------------------------*- Choupo -*-----------------------*\\
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
`,Ho=`/*--------------------------------*- Choupo -*-----------------------*\\
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
`,_o=`/*--------------------------------*- Choupo -*-----------------------*\\
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
`,Eo=`/*--------------------------------*- Choupo -*-----------------------*\\
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
`,Ro=`/*--------------------------------*- Choupo -*-----------------------*\\
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
`,No=`/*--------------------------------*- Choupo -*--------------------------------*\\
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
`,ko=`/*--------------------------------*- Choupo -*-----------------------*\\
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
`,Ko=`/*--------------------------------*- Choupo -*-----------------------*\\
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
`,Mo=`/*--------------------------------*- Choupo -*-----------------------*\\
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
`,wo=`/*--------------------------------*- Choupo -*-----------------------*\\
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
`,qo=`/*--------------------------------*- Choupo -*-----------------------*\\
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
`,Jo=`/*---------------------------------------------------------------------------*\\
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

//  DECLARED, not left to a comment.  The header above has always said "NOT A
//  REAL SUBSTANCE"; the parser discards comments, so nothing downstream could
//  know it.  A student browsing the catalogue met 'compA' between two real
//  compounds with no way to tell.  \`source synthetic\` is the value the
//  ThermoML fixture already uses -- no new vocabulary, and it sits on the axis
//  that answers "where did the data come from" (five-axis contract,
//  docs/design/provenance-semantics-five-axes.md).
provenance
{
    source      synthetic;
    reason      "numerical stand-in for an algorithm audit; no physical primary exists";
}
`,Io=`/*---------------------------------------------------------------------------*\\
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

//  DECLARED, not left to a comment.  The header above has always said "NOT A
//  REAL SUBSTANCE"; the parser discards comments, so nothing downstream could
//  know it.  A student browsing the catalogue met 'compB' between two real
//  compounds with no way to tell.  \`source synthetic\` is the value the
//  ThermoML fixture already uses -- no new vocabulary, and it sits on the axis
//  that answers "where did the data come from" (five-axis contract,
//  docs/design/provenance-semantics-five-axes.md).
provenance
{
    source      synthetic;
    reason      "numerical stand-in for an algorithm audit; no physical primary exists";
}
`,Do=`/*---------------------------------------------------------------------------*\\
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

//  DECLARED, not left to a comment.  The header above has always said "NOT A
//  REAL SUBSTANCE"; the parser discards comments, so nothing downstream could
//  know it.  A student browsing the catalogue met 'compC' between two real
//  compounds with no way to tell.  \`source synthetic\` is the value the
//  ThermoML fixture already uses -- no new vocabulary, and it sits on the axis
//  that answers "where did the data come from" (five-axis contract,
//  docs/design/provenance-semantics-five-axes.md).
provenance
{
    source      synthetic;
    reason      "numerical stand-in for an algorithm audit; no physical primary exists";
}
`,Vo=`/*--------------------------------*- Choupo -*-----------------------*\\
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
`,xo=`/*--------------------------------*- Choupo -*-----------------------*\\
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
`,Go=`/*--------------------------------*- Choupo -*-----------------------*\\
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
`,Fo=`/*--------------------------------*- Choupo -*-----------------------*\\
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
`,Bo=`/*--------------------------------*- Choupo -*-----------------------*\\
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
`,Lo=`/*--------------------------------*- Choupo -*-----------------------*\\
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
`,Wo=`/*--------------------------------*- Choupo -*-----------------------*\\
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
`,Uo=`/*--------------------------------*- Choupo -*-----------------------*\\
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
`,jo=`/*--------------------------------*- Choupo -*-----------------------*\\
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
`,zo=`/*--------------------------------*- Choupo -*-----------------------*\\
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
`,Qo=`/*--------------------------------*- Choupo -*-----------------------*\\
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
`,Yo=`/*--------------------------------*- Choupo -*-----------------------*\\
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
`,Zo=`/*--------------------------------*- Choupo -*-----------------------*\\
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
`,$o=`/*--------------------------------*- Choupo -*-----------------------*\\
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
`,Xo=`/*--------------------------------*- Choupo -*-----------------------*\\
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
`,na=`/*--------------------------------*- Choupo -*-----------------------*\\
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
`,ea=`/*--------------------------------*- Choupo -*-----------------------*\\
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
`,oa=`/*--------------------------------*- Choupo -*-----------------------*\\
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
`,aa=`/*--------------------------------*- Choupo -*-----------------------*\\
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
`,ta=`/*--------------------------------*- Choupo -*-----------------------*\\
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
`,ia=`/*--------------------------------*- Choupo -*-----------------------*\\
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
`,ra=`/*--------------------------------*- Choupo -*-----------------------*\\
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
`,sa=`/*--------------------------------*- Choupo -*-----------------------*\\
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
`,la=`/*--------------------------------*- Choupo -*-----------------------*\\
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
`,da=`/*--------------------------------*- Choupo -*-----------------------*\\
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
`,ca=`/*--------------------------------*- Choupo -*-----------------------*\\
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
`,pa=`/*--------------------------------*- Choupo -*-----------------------*\\
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
`,ma=`/*--------------------------------*- Choupo -*-----------------------*\\
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
`,ua=`/*--------------------------------*- Choupo -*-----------------------*\\
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
`,ha=`/*--------------------------------*- Choupo -*-----------------------*\\
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
`,Ca=`/*--------------------------------*- Choupo -*-----------------------*\\
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
`,fa=`/*--------------------------------*- Choupo -*-----------------------*\\
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
`,ga=`/*--------------------------------*- Choupo -*-----------------------*\\
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
`,ba=`/*--------------------------------*- Choupo -*-----------------------*\\
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
`,Ta=`/*--------------------------------*- Choupo -*-----------------------*\\
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
`,ya=`/*--------------------------------*- Choupo -*-----------------------*\\
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
`,Pa=`/*--------------------------------*- Choupo -*-----------------------*\\
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
`,va=`/*--------------------------------*- Choupo -*-----------------------*\\
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
`,Sa=`/*--------------------------------*- Choupo -*-----------------------*\\
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
`,Oa=`/*--------------------------------*- Choupo -*-----------------------*\\
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
`,Aa=`/*--------------------------------*- Choupo -*-----------------------*\\
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
        //  \`unknown\` is a DECLARED absence, not a guess (AP3, 2026-08-05).
    //  This window used to read \`(121  120)\`, which is not an interval --
    //  a four-term CoolProp liquid-Cp fit cannot have been regressed
    //  over it.  The true domain was not recoverable from the record,
    //  and INVENTING a plausible one would be a false claim about
    //  where the correlation holds.  Declared honestly instead; the
    //  engine announces it on every run.
    Trange        unknown;
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
`,Ha=`/*--------------------------------*- Choupo -*-----------------------*\\
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
`,_a=`/*--------------------------------*- Choupo -*-----------------------*\\
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
`,Ea=`/*--------------------------------*- Choupo -*-----------------------*\\
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
`,Ra=`/*--------------------------------*- Choupo -*-----------------------*\\
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
`,Na=`/*--------------------------------*- Choupo -*-----------------------*\\
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
`,ka=`/*--------------------------------*- Choupo -*-----------------------*\\
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
`,Ka=`/*--------------------------------*- Choupo -*-----------------------*\\
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
`,Ma=`/*--------------------------------*- Choupo -*-----------------------*\\
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
`,wa=`/*--------------------------------*- Choupo -*-----------------------*\\
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
`,qa=`/*--------------------------------*- Choupo -*-----------------------*\\
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
`,Ja=`/*--------------------------------*- Choupo -*-----------------------*\\
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
`,Ia=`/*--------------------------------*- Choupo -*-----------------------*\\
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
`,Da=`/*--------------------------------*- Choupo -*-----------------------*\\
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
`,Va=`/*--------------------------------*- Choupo -*-----------------------*\\
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
`,xa=`/*--------------------------------*- Choupo -*-----------------------*\\
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
`,Ga=`/*--------------------------------*- Choupo -*-----------------------*\\
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
`,Fa=`/*--------------------------------*- Choupo -*-----------------------*\\
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
`,Ba=`/*--------------------------------*- Choupo -*-----------------------*\\
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
`,La=`/*--------------------------------*- Choupo -*-----------------------*\\
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

// ---- Aqueous-speciation FACTS (substance-level, classifier-read) ----
// Curated fact: 1-butanol does NOT participate in the aqueous speciation
// network at this thermodynamic level (alcohol pKa ~ 16 -- negligible,
// the same class of fact ethanol.dat records).  This says nothing about
// aqueous reactions in general; those belong to reaction sets, not to
// equilibrium speciation.
aqueousSpeciation  none;

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
`,Wa=`/*--------------------------------*- Choupo -*-----------------------*\\
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
`,Ua=`/*--------------------------------*- Choupo -*-----------------------*\\
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
`,ja=`/*--------------------------------*- Choupo -*-----------------------*\\
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
`,za=`/*--------------------------------*- Choupo -*-----------------------*\\
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
`,Qa=`/*--------------------------------*- Choupo -*-----------------------*\\
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
`,Ya=`/*--------------------------------*- Choupo -*-----------------------*\\
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
`,Za=`/*--------------------------------*- Choupo -*-----------------------*\\
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
`,$a=`/*--------------------------------*- Choupo -*-----------------------*\\
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
`,Xa=`/*--------------------------------*- Choupo -*-----------------------*\\
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
`,nt=`/*--------------------------------*- Choupo -*-----------------------*\\
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
        //  \`unknown\` is a DECLARED absence, not a guess (AP3, 2026-08-05).
    //  This window used to read \`(30  27)\`, which is not an interval --
    //  a four-term CoolProp liquid-Cp fit cannot have been regressed
    //  over it.  The true domain was not recoverable from the record,
    //  and INVENTING a plausible one would be a false claim about
    //  where the correlation holds.  Declared honestly instead; the
    //  engine announces it on every run.
    Trange        unknown;
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
`,et=`/*--------------------------------*- Choupo -*-----------------------*\\
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
`,ot=`/*--------------------------------*- Choupo -*-----------------------*\\
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
`,at=`/*--------------------------------*- Choupo -*-----------------------*\\
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
`,tt=`/*--------------------------------*- Choupo -*-----------------------*\\
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
`,it=`/*--------------------------------*- Choupo -*-----------------------*\\
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
`,rt=`/*--------------------------------*- Choupo -*-----------------------*\\
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
`,st=`/*--------------------------------*- Choupo -*-----------------------*\\
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
`,lt=`/*--------------------------------*- Choupo -*--------------------------------*\\
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

`,dt=`/*--------------------------------*- Choupo -*-----------------------*\\
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
`,ct=`/*--------------------------------*- Choupo -*--------------------------------*\\
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

`,pt=`/*--------------------------------*- Choupo -*--------------------------------*\\
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

`,mt=`/*--------------------------------*- Choupo -*-----------------------*\\
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
`,ut=`/*--------------------------------*- Choupo -*-----------------------*\\
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
`,ht=`/*--------------------------------*- Choupo -*-----------------------*\\
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
`,Ct=`/*--------------------------------*- Choupo -*-----------------------*\\
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
`,ft=`/*--------------------------------*- Choupo -*-----------------------*\\
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
`,gt=`/*--------------------------------*- Choupo -*-----------------------*\\
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
`,bt=`/*--------------------------------*- Choupo -*-----------------------*\\
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
`,Tt=`/*--------------------------------*- Choupo -*-----------------------*\\
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
`,yt=`/*--------------------------------*- Choupo -*-----------------------*\\
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
`,Pt=`/*--------------------------------*- Choupo -*-----------------------*\\
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
`,vt=`/*--------------------------------*- Choupo -*-----------------------*\\
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
`,St=`/*--------------------------------*- Choupo -*-----------------------*\\
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
`,Ot=`/*--------------------------------*- Choupo -*-----------------------*\\
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
`,At=`/*--------------------------------*- Choupo -*-----------------------*\\
  Component: Sucrose (C12H22O11, CAS 57-50-1)

  Non-volatile crystalline disaccharide; the canonical solute for
  sugar-industry evaporator and crystalliser exercises.  In the
  Choupo catalogue we ship sucrose with the minimum metadata
  needed for a non-volatile solute in a single-effect or
  multi-effect evaporator: MW, role, dissociation = 1, and a
  liquid Cp tuned so that the mixture Cp(x) reproduces the
  Honig-style sugar-industry correlation

      Cp(x)  ≈  4.19  -  2.35 · x    [kJ/(kg·K)]

  used in standard evaporation exercises (e.g. Coulson & Richardson 6th
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
`,Ht=`/*--------------------------------*- Choupo -*-----------------------*\\
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
`,_t=`/*--------------------------------*- Choupo -*-----------------------*\\
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
`,Et=`/*--------------------------------*- Choupo -*--------------------------------*\\
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
`,Rt=`/*--------------------------------*- Choupo -*-----------------------*\\
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
`,Nt=`/*--------------------------------*- Choupo -*-----------------------*\\
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
`,kt=`/*--------------------------------*- Choupo -*-----------------------*\\
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
`,Kt=`/*--------------------------------*- Choupo -*-----------------------*\\
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
`,Mt=`/*--------------------------------*- Choupo -*-----------------------*\\
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
    referenceState idealGas;   // explicit: these two are the GAS-phase datum

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
//
// K_b IS AN ANCHOR, NOT THE ANSWER (2026-08-05).  The engine DERIVES it from
// this record's own Tb / MW / HvapTb -- K_b = R*Tb^2*M/dHvap -- and uses the
// value below only to validate that derivation, announcing the comparison.
// The two had drifted 0.18 % apart, which fed straight into every BPE.
//
// K_f IS AN ANCHOR TOO, since 2026-08-07 -- and it reached that status by the
// route its own note demanded.  For one day this paragraph said K_f was
// REFERENCE-ONLY: parsed, consumed by nothing, and underivable because no
// record in the tree declared a heat of fusion.  Both halves stopped being
// true the moment the \`sublimation { Hfus }\` and \`triplePoint { T }\` blocks
// below were curated.  The engine now derives
//
//     K_f = R * Tf^2 * M / dHfus  =  1.8603 K.kg/mol
//
// from this record's own triple-point temperature, MW and Hfus, and the 1.853
// below validates that derivation exactly as 0.512 validates K_b.  They are
// 0.39 % apart: two independent primaries disagreeing is a FINDING, not an
// error, and the calorimetric datum is the one that wins.
//  ---- FUSION: the datum the freezing model needs -------------------------
//  Added 2026-08-07 for SolidPhase's pure-crystal reference fugacity.  Before
//  this, ZERO of the 247 component records carried a fusion enthalpy -- the
//  two apparent matches in the tree were both COMMENTS explaining its absence,
//  including the one twelve lines above.
//
//  CROSS-CHECKED AGAINST THIS RECORD'S OWN K_f, which is the point of putting
//  them in the same file:
//
//      K_f = R Tf^2 M / dHfus = 8.3145 x 273.15^2 x 0.0180153 / 6008
//          = 1.8602        against the declared K_f 1.853
//
//  0.4 % apart.  Two independent primaries disagreeing is a FINDING, not an
//  error, and the direction is settled by the K_b precedent (2026-08-05):
//  dHfus is the MEASURED calorimetric datum and K_f is the DERIVED dilute
//  limit, so K_f became the validating anchor and stopped being a status
//  note -- which is what the paragraph above now records.
triplePoint
{
    T    273.16;        // K
    P    611.657;       // Pa
    //  source: IAPWS, the triple point of ordinary water; T is the pre-2019
    //  defining fixed point of the kelvin and is still the accepted value.
}

sublimation
{
    Hfus   6008.0;      // J/mol at the melting point
    //  source: IAPWS -- enthalpy of fusion of ice Ih, 333.4 J/g x 18.0153
    //  g/mol.  Quoted as 6.01 kJ/mol in the usual handbooks.
    //
    //  NOTE THE 0.01 K APPROXIMATION, since nothing else will say it: the
    //  fusion model uses \`triplePoint.T\` (273.16 K) as the melting
    //  temperature, while fusion at 1 bar is at 273.15 K.  There is no Tfus
    //  field in the grammar.  The error in dG_fus is under 0.3 J/mol and is
    //  announced here rather than hidden; if a case ever needs better, the
    //  remedy is a Tfus field, not a fudged Hfus.
}

ebulioscopic
{
    K_b   0.512;
    K_f   1.853;    // ANCHOR: the engine derives 1.8603 from Hfus/triplePoint
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
`,wt=`/*--------------------------------*- Choupo -*-----------------------*\\
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
`,qt=[],Jt=Object.assign({"../../../data/standards/components/1Butene.dat":on,"../../../data/standards/components/Ar.dat":an,"../../../data/standards/components/C.dat":tn,"../../../data/standards/components/C2H.dat":rn,"../../../data/standards/components/C2H3.dat":sn,"../../../data/standards/components/C2H5.dat":ln,"../../../data/standards/components/C2O.dat":dn,"../../../data/standards/components/C3H3.dat":cn,"../../../data/standards/components/C3H5.dat":pn,"../../../data/standards/components/C3H7.dat":mn,"../../../data/standards/components/C4H2.dat":un,"../../../data/standards/components/C4H4.dat":hn,"../../../data/standards/components/C5H5.dat":Cn,"../../../data/standards/components/C6H5.dat":fn,"../../../data/standards/components/CH.dat":gn,"../../../data/standards/components/CH2.dat":bn,"../../../data/standards/components/CH2CO.dat":Tn,"../../../data/standards/components/CH2OH.dat":yn,"../../../data/standards/components/CH2_S.dat":Pn,"../../../data/standards/components/CH3.dat":vn,"../../../data/standards/components/CH3CO.dat":Sn,"../../../data/standards/components/CH3O.dat":On,"../../../data/standards/components/CH3O2.dat":An,"../../../data/standards/components/CH4.dat":Hn,"../../../data/standards/components/CN.dat":_n,"../../../data/standards/components/CO.dat":En,"../../../data/standards/components/CO2.dat":Rn,"../../../data/standards/components/CS.dat":Nn,"../../../data/standards/components/CS2.dat":kn,"../../../data/standards/components/CaCO3.dat":Kn,"../../../data/standards/components/CaCl2.dat":Mn,"../../../data/standards/components/CaO.dat":wn,"../../../data/standards/components/CaSO4.dat":qn,"../../../data/standards/components/Cl.dat":Jn,"../../../data/standards/components/Cl2.dat":In,"../../../data/standards/components/ClO.dat":Dn,"../../../data/standards/components/D2.dat":Vn,"../../../data/standards/components/Dichloroethane.dat":xn,"../../../data/standards/components/H.dat":Gn,"../../../data/standards/components/H2.dat":Fn,"../../../data/standards/components/H2O2.dat":Bn,"../../../data/standards/components/H2S.dat":Ln,"../../../data/standards/components/H2SO4.dat":Wn,"../../../data/standards/components/H3PO4.dat":Un,"../../../data/standards/components/HCCO.dat":jn,"../../../data/standards/components/HCHO.dat":zn,"../../../data/standards/components/HCN.dat":Qn,"../../../data/standards/components/HCO.dat":Yn,"../../../data/standards/components/HCl.dat":Zn,"../../../data/standards/components/HNO.dat":$n,"../../../data/standards/components/HNO3.dat":Xn,"../../../data/standards/components/HO2.dat":ne,"../../../data/standards/components/HOCl.dat":ee,"../../../data/standards/components/HONO.dat":oe,"../../../data/standards/components/HSO.dat":ae,"../../../data/standards/components/HSO3.dat":te,"../../../data/standards/components/He.dat":ie,"../../../data/standards/components/K2SO4.dat":re,"../../../data/standards/components/KCl.dat":se,"../../../data/standards/components/KOH.dat":le,"../../../data/standards/components/LiCl.dat":de,"../../../data/standards/components/MD3M.dat":ce,"../../../data/standards/components/MD4M.dat":pe,"../../../data/standards/components/MDM.dat":me,"../../../data/standards/components/MgSO4.dat":ue,"../../../data/standards/components/N.dat":he,"../../../data/standards/components/N2.dat":Ce,"../../../data/standards/components/N2H2.dat":fe,"../../../data/standards/components/N2H3.dat":ge,"../../../data/standards/components/N2H4.dat":be,"../../../data/standards/components/N2O.dat":Te,"../../../data/standards/components/NCO.dat":ye,"../../../data/standards/components/NH.dat":Pe,"../../../data/standards/components/NH2.dat":ve,"../../../data/standards/components/NH3.dat":Se,"../../../data/standards/components/NH4Cl.dat":Oe,"../../../data/standards/components/NNH.dat":Ae,"../../../data/standards/components/NO.dat":He,"../../../data/standards/components/NO2.dat":_e,"../../../data/standards/components/NO3.dat":Ee,"../../../data/standards/components/Na2CO3.dat":Re,"../../../data/standards/components/Na2SO4.dat":Ne,"../../../data/standards/components/NaCl.dat":ke,"../../../data/standards/components/NaHCO3.dat":Ke,"../../../data/standards/components/NaOH.dat":Me,"../../../data/standards/components/O.dat":we,"../../../data/standards/components/O2.dat":qe,"../../../data/standards/components/O3.dat":Je,"../../../data/standards/components/OH.dat":Ie,"../../../data/standards/components/OrthoDeuterium.dat":De,"../../../data/standards/components/OrthoHydrogen.dat":Ve,"../../../data/standards/components/PET.dat":xe,"../../../data/standards/components/PMMA.dat":Ge,"../../../data/standards/components/PVC.dat":Fe,"../../../data/standards/components/ParaDeuterium.dat":Be,"../../../data/standards/components/ParaHydrogen.dat":Le,"../../../data/standards/components/R11.dat":We,"../../../data/standards/components/R113.dat":Ue,"../../../data/standards/components/R12.dat":je,"../../../data/standards/components/R1234yf.dat":ze,"../../../data/standards/components/R1234zeE.dat":Qe,"../../../data/standards/components/R1234zeZ.dat":Ye,"../../../data/standards/components/R134a.dat":Ze,"../../../data/standards/components/R13I1.dat":$e,"../../../data/standards/components/R143a.dat":Xe,"../../../data/standards/components/R21.dat":no,"../../../data/standards/components/R218.dat":eo,"../../../data/standards/components/R22.dat":oo,"../../../data/standards/components/R236EA.dat":ao,"../../../data/standards/components/R245fa.dat":to,"../../../data/standards/components/R32.dat":io,"../../../data/standards/components/R365MFC.dat":ro,"../../../data/standards/components/RC318.dat":so,"../../../data/standards/components/S.dat":lo,"../../../data/standards/components/S2.dat":co,"../../../data/standards/components/SF6.dat":po,"../../../data/standards/components/SH.dat":mo,"../../../data/standards/components/SO.dat":uo,"../../../data/standards/components/SO2.dat":ho,"../../../data/standards/components/SO3.dat":Co,"../../../data/standards/components/Xe.dat":fo,"../../../data/standards/components/acetaldehyde.dat":go,"../../../data/standards/components/aceticAcid.dat":bo,"../../../data/standards/components/acetone.dat":To,"../../../data/standards/components/acetylene.dat":yo,"../../../data/standards/components/akermanite.dat":Po,"../../../data/standards/components/anthophyllite.dat":vo,"../../../data/standards/components/artinite.dat":So,"../../../data/standards/components/barite.dat":Oo,"../../../data/standards/components/benzene.dat":Ao,"../../../data/standards/components/bischofite.dat":Ho,"../../../data/standards/components/bloedite.dat":_o,"../../../data/standards/components/burkeite.dat":Eo,"../../../data/standards/components/calciumHydroxide.dat":Ro,"../../../data/standards/components/calciumTartrate.dat":No,"../../../data/standards/components/carbonylSulfide.dat":ko,"../../../data/standards/components/carnallite.dat":Ko,"../../../data/standards/components/celestite.dat":Mo,"../../../data/standards/components/chrysotile.dat":wo,"../../../data/standards/components/cis2Butene.dat":qo,"../../../data/standards/components/compA.dat":Jo,"../../../data/standards/components/compB.dat":Io,"../../../data/standards/components/compC.dat":Do,"../../../data/standards/components/cyclohexane.dat":Vo,"../../../data/standards/components/cyclopentane.dat":xo,"../../../data/standards/components/cyclopropane.dat":Go,"../../../data/standards/components/diethylEther.dat":Fo,"../../../data/standards/components/dimethylCarbonate.dat":Bo,"../../../data/standards/components/dimethylEther.dat":Lo,"../../../data/standards/components/diopside.dat":Wo,"../../../data/standards/components/dolomite.dat":Uo,"../../../data/standards/components/dowthermA.dat":jo,"../../../data/standards/components/enstatite.dat":zo,"../../../data/standards/components/epsomite.dat":Qo,"../../../data/standards/components/ethane.dat":Yo,"../../../data/standards/components/ethanol.dat":Zo,"../../../data/standards/components/ethylAcetate.dat":$o,"../../../data/standards/components/ethylBenzene.dat":Xo,"../../../data/standards/components/ethylene.dat":na,"../../../data/standards/components/ethyleneOxide.dat":ea,"../../../data/standards/components/fluorine.dat":oa,"../../../data/standards/components/fluorite.dat":aa,"../../../data/standards/components/forsterite.dat":ta,"../../../data/standards/components/gaylussite.dat":ia,"../../../data/standards/components/glaserite.dat":ra,"../../../data/standards/components/glauberite.dat":sa,"../../../data/standards/components/glucose.dat":la,"../../../data/standards/components/goergeyite.dat":da,"../../../data/standards/components/gypsum.dat":ca,"../../../data/standards/components/heavyWater.dat":pa,"../../../data/standards/components/hexahydrite.dat":ma,"../../../data/standards/components/hexamethyldisiloxane.dat":ua,"../../../data/standards/components/hfe143m.dat":ha,"../../../data/standards/components/hitecSalt.dat":Ca,"../../../data/standards/components/huntite.dat":fa,"../../../data/standards/components/hydroxyapatite.dat":ga,"../../../data/standards/components/isoButane.dat":ba,"../../../data/standards/components/isoButene.dat":Ta,"../../../data/standards/components/isohexane.dat":ya,"../../../data/standards/components/isopentane.dat":Pa,"../../../data/standards/components/kainite.dat":va,"../../../data/standards/components/kalicinite.dat":Sa,"../../../data/standards/components/kieserite.dat":Oa,"../../../data/standards/components/krypton.dat":Aa,"../../../data/standards/components/labile_S.dat":Ha,"../../../data/standards/components/leonhardite.dat":_a,"../../../data/standards/components/leonite.dat":Ea,"../../../data/standards/components/lithiumChlorideH2O.dat":Ra,"../../../data/standards/components/mXylene.dat":Na,"../../../data/standards/components/magnesite.dat":ka,"../../../data/standards/components/magnesiumHydroxide.dat":Ka,"../../../data/standards/components/melanterite.dat":Ma,"../../../data/standards/components/methanol.dat":wa,"../../../data/standards/components/methylAcetate.dat":qa,"../../../data/standards/components/methylLinoleate.dat":Ja,"../../../data/standards/components/methylLinolenate.dat":Ia,"../../../data/standards/components/methylOleate.dat":Da,"../../../data/standards/components/methylPalmitate.dat":Va,"../../../data/standards/components/methylStearate.dat":xa,"../../../data/standards/components/mirabilite.dat":Ga,"../../../data/standards/components/misenite.dat":Fa,"../../../data/standards/components/nButane.dat":Ba,"../../../data/standards/components/nButanol.dat":La,"../../../data/standards/components/nDecane.dat":Wa,"../../../data/standards/components/nDodecane.dat":Ua,"../../../data/standards/components/nHeptane.dat":ja,"../../../data/standards/components/nHexane.dat":za,"../../../data/standards/components/nNonane.dat":Qa,"../../../data/standards/components/nOctane.dat":Ya,"../../../data/standards/components/nPentane.dat":Za,"../../../data/standards/components/nUndecane.dat":$a,"../../../data/standards/components/natron.dat":Xa,"../../../data/standards/components/neon.dat":nt,"../../../data/standards/components/neopentane.dat":et,"../../../data/standards/components/nesquehonite.dat":ot,"../../../data/standards/components/novec649.dat":at,"../../../data/standards/components/oXylene.dat":tt,"../../../data/standards/components/pXylene.dat":it,"../../../data/standards/components/pentahydrite.dat":rt,"../../../data/standards/components/pirssonite.dat":st,"../../../data/standards/components/polyethylene.dat":lt,"../../../data/standards/components/polyhalite.dat":dt,"../../../data/standards/components/polypropylene.dat":ct,"../../../data/standards/components/polystyrene.dat":pt,"../../../data/standards/components/potassiumBitartrate.dat":mt,"../../../data/standards/components/propane.dat":ut,"../../../data/standards/components/propylene.dat":ht,"../../../data/standards/components/propyleneGlycol30.dat":Ct,"../../../data/standards/components/propyne.dat":ft,"../../../data/standards/components/pyrochroite.dat":gt,"../../../data/standards/components/rhodochrosite.dat":bt,"../../../data/standards/components/schoenite.dat":Tt,"../../../data/standards/components/sepiolite.dat":yt,"../../../data/standards/components/sepiolite_d.dat":Pt,"../../../data/standards/components/siderite.dat":vt,"../../../data/standards/components/silica.dat":St,"../../../data/standards/components/strontianite.dat":Ot,"../../../data/standards/components/sucrose.dat":At,"../../../data/standards/components/syngenite.dat":Ht,"../../../data/standards/components/talc.dat":_t,"../../../data/standards/components/tartaricAcid.dat":Et,"../../../data/standards/components/toluene.dat":Rt,"../../../data/standards/components/trans2Butene.dat":Nt,"../../../data/standards/components/trona.dat":kt,"../../../data/standards/components/vivianite.dat":Kt,"../../../data/standards/components/water.dat":Mt,"../../../data/standards/components/witherite.dat":wt}),D=new Map;function L(n){const e=/^\s*name\s+([^;\s]+)\s*;/m.exec(n);e&&!D.has(e[1])&&D.set(e[1],n)}function Lt(n){return D.get(n)??null}function V(n,e="standard"){let a;try{a=G(F(n))}catch{return null}const i=typeof a.name=="string"?a.name:"";if(!i)return null;const t=typeof a.formula=="string"?a.formula:"",s=a.role==="nonvolatile",c=typeof a.Tc=="number"&&a.Tc>0,p=a.vaporPressure!==void 0&&a.vaporPressure!==null&&c&&!s,g=s?"nonvolatile":p?"volatile":"fragment",P=typeof a.standardThermochemistry=="object"&&a.standardThermochemistry!==null&&a.standardThermochemistry.phase==="solid",v=typeof a.dissociation=="number"?a.dissociation:1,A=a.electrolyte!==void 0&&a.electrolyte!==null||v>1&&!P,C=a.noncondensable==="true"||a.noncondensable===!0,H=a.provenance,S=!!H&&H.source==="synthetic",f=a.groups,_=!!f&&f.unifac!==void 0&&f.unifac!==null,b=y=>typeof y=="number"&&y>0?y:void 0;return{name:i,formula:t,kind:g,vleAble:p,isElectrolyte:A,isPermanentGas:C,isSynthetic:S,hasUnifac:_,origin:e,tc:b(a.Tc),pc:b(a.Pc),tb:b(a.Tb)}}const O=Object.values(Jt).map(n=>(L(n),V(n))).filter(n=>n!==null).sort((n,e)=>n.name.localeCompare(e.name)),Wt=qt.map(n=>(L(n),V(n,"dataLocal"))).filter(n=>n!==null).sort((n,e)=>n.name.localeCompare(e.name)),It=/(?:^|\/)constant\/components\/([^/]+)\.dat$/;function W(n){const e=n.match(It);if(!e)return null;const a=e[1];return a.includes(".estimate-")?null:a}function Dt(n){if(!n)return[];const e=new Set(O.map(i=>i.name)),a=new Map;for(const[i,t]of Object.entries(n)){const s=W(i);if(!s)continue;const c=V(t,e.has(s)?"caseShadow":"caseLocal");if(!c)continue;const h={...c,name:s},p=i.split("/").length,g=a.get(s);(!g||p<g.depth)&&a.set(s,{meta:h,depth:p})}return[...a.values()].map(i=>i.meta).sort((i,t)=>i.name.localeCompare(t.name))}function Ut(n){if(!n)return{};const e=new Map;for(const[i,t]of Object.entries(n)){const s=W(i);if(!s)continue;const c=i.split("/").length,h=e.get(s);(!h||c<h.depth)&&e.set(s,{body:t,depth:c})}const a={};for(const[i,t]of e)a[`constant/components/${i}.dat`]=t.body;return a}function jt(n){const e=Dt(n);if(e.length===0)return O;const a=new Map;for(const i of O)a.set(i.name,i);for(const i of e)a.set(i.name,i);return[...a.values()].sort((i,t)=>i.name.localeCompare(t.name))}function zt(n,e=O){const a=n.trim().toLowerCase();return a?e.filter(i=>i.name.toLowerCase().includes(a)||i.formula.toLowerCase().includes(a)):e}function Qt(n,e=O){return e.find(a=>a.name===n)}function Yt(n){if(!n.formula)return null;const e=a=>a.toLowerCase().replace(/\s/g,"");return e(n.formula)!==e(n.name)?n.formula:null}function u(n){return typeof n=="string"?n:typeof n=="number"?String(n):null}function T(n){return typeof n=="object"&&n!==null&&!Array.isArray(n)?n:null}function d(n){return typeof n=="number"?n:null}function J(n){if(!n)return"";const e=n.Trange;return typeof e=="string"?e==="unknown"?" · validity DECLARED UNKNOWN":` · ${e}`:Array.isArray(e)&&e.length===2&&typeof e[0]=="number"&&typeof e[1]=="number"?` · ${e[0]}–${e[1]} K`:""}function I(n,e="declared"){return n?u(n.model)??e:""}function Zt(n){let e;try{e=G(F(n))}catch{return null}const a=u(e.name);if(!a)return null;const i=u(e.formula)??"",t=[{label:"name",value:a},{label:"formula",value:i||null,gap:"no molecular formula declared — the element balance refuses this component by name"},{label:"CAS",value:u(e.CAS),gap:"not declared in this record"},{label:"molar mass",value:d(e.MW)!==null?`${d(e.MW)} g/mol`:null,gap:"not declared — derivable from the formula, but the record does not state it"},{label:"InChI",value:u(e.InChI),gap:"not carried by Choupo records yet — ThermoML curation supplies it"},{label:"InChIKey",value:u(e.InChIKey),gap:"not carried by Choupo records yet — ThermoML curation supplies it"}],s=T(e.vaporPressure),c=T(e.idealGasHeatCapacity),h=T(e.liquidHeatCapacity),p=T(e.standardThermochemistry),g=T(e.liquidViscosity),P=d(e.Tc),v=d(e.Pc),A=e.role==="nonvolatile",C=(r,E,K,R,U)=>({key:r,label:E,present:K,detail:R,unlocks:U,verdict:"notClaimed"}),H=[C("criticals","Critical constants",P!==null&&v!==null,P!==null&&v!==null?`Tc ${P} K · Pc ${v} bar${d(e.omega)!==null?` · ω ${d(e.omega)}`:""}`:"","equation of state, corresponding states"),C("psat","Vapour pressure",s!==null,s!==null?`${I(s)}${J(s)}`:"",A?"not applicable — declared `role nonvolatile`":"VLE, flash, distillation"),C("vliq","Liquid molar volume",d(e.Vliq)!==null,d(e.Vliq)!==null?`${d(e.Vliq)} m³/mol`:"","pump work, liquid density"),C("cpIdealGas","Ideal-gas heat capacity",c!==null,c!==null?`${I(c)}${J(c)}`:"","energy balances, enthalpy on the gas rung"),C("gibbs","Formation datum",p!==null,p!==null?`ΔHf° ${d(p.dHf_298)??"—"} J/mol${d(p.s_298)!==null?` · s° ${d(p.s_298)} J/(mol·K)`:""} · ${u(p.referenceState)??"idealGas"} rung`:"","Gibbs reactor, heat of reaction"),C("cpLiquid","Liquid heat capacity",h!==null,h!==null?`${I(h,"polynomial")}${J(h)}`:"","sensible duty on a liquid stream"),C("viscosity","Liquid viscosity",g!==null,g!==null?Object.keys(g).join(" / "):"","pressure drop, transport")],S=[],f=(r,E,K)=>{const R=T(e[E]);R&&S.push({slot:r,model:E,detail:K(R)})};f("Activity (UNIQUAC)","uniquac",r=>`r ${d(r.r)??"—"} · q ${d(r.q)??"—"}`),f("Equation of state (PC-SAFT)","pcsaft",r=>`m ${d(r.m)??"—"} · σ ${d(r.sigma)??"—"} Å · ε/k ${d(r.epsilonK)??"—"} K`+(u(r.assocScheme)?` · assoc ${u(r.assocScheme)}`:" · non-associating")),f("Activity (COSMO-SAC)","cosmo",r=>`${Object.keys(r).length} parameter set(s): ${Object.keys(r).join(", ")}`),f("Electrolyte","electrolyte",r=>Object.keys(r).join(", ")),f("Solid phase","solidPhases",r=>Object.keys(r).join(", "));const _=T(e.groups);_&&S.push({slot:"Group contribution",model:"groups",detail:Object.keys(_).join(", ")});const b=[],y=u(e.reviewStatus);y&&b.push({kind:"reviewStatus",text:`reviewStatus ${y} — the engine announces this record [unreviewed]`,tone:"warn"}),A&&b.push({kind:"role",text:"role nonvolatile — no vapour pressure BY DESIGN; the absence above is a modelling choice, not a gap",tone:"info"});const k=T(e.provenance);if(k&&u(k.source)==="synthetic"){const r=u(k.reason);b.push({kind:"synthetic",tone:"warn",text:"provenance source synthetic — NOT a real substance"+(r?` (${r})`:"")+".  Any number computed with it describes the algorithm, never a chemical."})}return{name:a,formula:i,identity:t,capabilities:H,models:S,marks:b,raw:n}}const Vt={validated:{label:"VALIDATED",color:"green",help:"fitted on declared evidence and tested against held-out points it never saw; the held-out error met the acceptance band declared BEFORE the fit"},notValidated:{label:"NOT VALIDATED",color:"red",help:"tested against held-out points and MISSED the acceptance band declared before the fit — a finding, not a failure to hide"},heldOutPerformed:{label:"HELD-OUT TESTED",color:"blue",help:"tested against held-out points, but no acceptance band was declared beforehand — the residuals are reported and no verdict is claimed"},validationRefused:{label:"NOT TESTED",color:"orange",help:"no independent evidence remained after fitting: everything available was used to fit, so nothing tested the result. The honest answer, not a smaller split"},notClaimed:{label:"no dossier",color:"gray",help:"no curation dossier is attached to this property, so no scientific claim has been made about it. The datum may be perfectly good — nobody has declared evidence for it"}};function xt({v:n}){const e=Vt[n];return o.jsx($,{label:e.help,withArrow:!0,multiline:!0,w:300,children:o.jsx(X,{size:"xs",variant:"light",color:e.color,tt:"none",children:e.label})})}function $t({record:n,onClose:e}){const[a,i]=j.useState(!1);return o.jsxs(M,{gap:"sm",style:{height:"100%",minHeight:0},children:[o.jsxs(w,{justify:"space-between",align:"baseline",wrap:"nowrap",children:[o.jsxs(w,{gap:8,align:"baseline",children:[o.jsx(m,{fw:700,size:"lg",children:n.name}),n.formula&&o.jsx(m,{c:"dimmed",size:"sm",children:n.formula})]}),e&&o.jsx(q,{size:"compact-xs",variant:"subtle",onClick:e,children:"close"})]}),n.marks.length>0&&o.jsx(M,{gap:4,children:n.marks.map(t=>o.jsxs(w,{gap:6,wrap:"nowrap",align:"flex-start",children:[t.tone==="warn"&&o.jsx(z,{size:14,style:{marginTop:2,flexShrink:0}}),o.jsx(m,{size:"xs",c:t.tone==="warn"?"orange.6":"dimmed",children:t.text})]},t.kind+t.text))}),o.jsx(Q,{style:{flex:1,minHeight:0},children:o.jsxs(M,{gap:"md",children:[o.jsx(N,{title:"IDENTITY",children:o.jsx(l,{fz:"xs",withRowBorders:!1,children:o.jsx(l.Tbody,{children:n.identity.map(t=>o.jsxs(l.Tr,{children:[o.jsx(l.Td,{w:110,c:"dimmed",children:t.label}),o.jsx(l.Td,{children:t.value!==null?o.jsx(m,{size:"xs",ff:"monospace",children:t.value}):o.jsxs(m,{size:"xs",c:"dimmed",fs:"italic",children:["— ",t.gap]})})]},t.label))})})}),o.jsxs(N,{title:"PROPERTY COVERAGE",children:[o.jsx(l,{fz:"xs",withRowBorders:!1,children:o.jsx(l.Tbody,{children:n.capabilities.map(t=>o.jsxs(l.Tr,{children:[o.jsx(l.Td,{w:16,children:o.jsx(m,{size:"sm",fw:700,c:t.present?"green.5":"red.5",children:t.present?"✓":"✗"})}),o.jsx(l.Td,{w:150,children:t.label}),o.jsx(l.Td,{children:t.present?o.jsx(m,{size:"xs",ff:"monospace",c:"dimmed",children:t.detail}):o.jsx(m,{size:"xs",c:"dimmed",fs:"italic",children:t.unlocks})}),o.jsx(l.Td,{w:110,ta:"right",children:t.present&&o.jsx(xt,{v:t.verdict})})]},t.key))})}),o.jsx(m,{size:"xs",c:"dimmed",mt:4,children:"✓ means the record CARRIES the block — never that the numbers are good.  The right-hand column is the curation dossier's verdict, and it is the only thing here that speaks to quality."})]}),n.models.length>0&&o.jsx(N,{title:"RESOLVED MODELS",children:o.jsx(l,{fz:"xs",withRowBorders:!1,children:o.jsx(l.Tbody,{children:n.models.map(t=>o.jsxs(l.Tr,{children:[o.jsx(l.Td,{w:180,c:"dimmed",children:t.slot}),o.jsx(l.Td,{children:o.jsx(m,{size:"xs",ff:"monospace",children:t.detail})})]},t.slot+t.model))})})}),o.jsx(N,{title:"EVIDENCE / PROVENANCE",children:o.jsxs(m,{size:"xs",c:"dimmed",children:["No curation dossier is attached to this component.  A dossier is produced by ",o.jsxs(x,{children:["bin/choupo-curate <",n.name,">"]}),", which extracts ThermoML datasets, DECLARES which are fitted and which are held out ",o.jsx("i",{children:"before"})," fitting, and records the held-out residuals beside the acceptance band.  Until then every property above reads ",o.jsx("b",{children:"no dossier"})," — not because the data is bad, but because nobody has declared evidence for it."]})}),o.jsxs(B,{children:[o.jsxs(q,{size:"compact-xs",variant:"subtle",leftSection:o.jsx(Y,{size:13}),onClick:()=>i(t=>!t),children:[a?"hide":"view"," raw record"]}),o.jsx(nn,{in:a,children:o.jsx(x,{block:!0,fz:10,mt:6,style:{maxHeight:360,overflow:"auto"},children:n.raw})})]})]})}),o.jsx(q,{size:"compact-xs",variant:"light",color:"accent",leftSection:o.jsx(Z,{size:13}),onClick:()=>window.open(`${window.location.pathname}?component=${encodeURIComponent(n.name)}`,"_blank","noopener"),children:"open full"})]})}function N({title:n,children:e}){return o.jsxs(B,{children:[o.jsx(m,{size:"xs",fw:700,c:"dimmed",mb:4,children:n}),o.jsx(en,{mb:6}),e]})}export{O as C,Wt as D,$t as a,Dt as b,Ut as c,Qt as d,Zt as e,Yt as f,jt as m,Lt as r,zt as s};
