import{cg as W,bP as U,ch as B,bv as e,c as w,ao as z,at as g,ar as b,b as R,c8 as P,ap as n,b$ as T,b9 as q,an as G,n as I,d as M,S as K,a as V}from"./index-D7SlIv6a.js";import{u as X}from"./methodRun-CdrmQwTx.js";import{L as Y,c as J,P as O,K as $}from"./MethodsWorkspace-CYuXV7KF.js";import"./exploreSynth-D9zQH1DD.js";import"./catalogue-g2aq6kYl.js";import"./pairsCatalogue-PtfxCM4S.js";import"./csvShape-bbHtF81D.js";import"./exploreMccabePopOut-DbWwB8VV.js";import"./Switch-DHqosIh5.js";import"./Slider-D04XXpkp.js";import"./Select-CLRdIHBh.js";import"./ComboboxChevron-Cedp-c5H.js";import"./Collapse-8681ShpZ.js";import"./CopyButton-CYqkXVNp.js";const Z=`/*--------------------------------*- Choupo -*-----------------------*\\
  Ion-exchange membrane PAIR: Neosepta CMX (cation) + AMX (anion)
  (Tokuyama Soda / ASTOM standard-grade homogeneous IEMs --- the
   textbook representative electrodialysis membrane pair)

  kind IEM  -- this is NOT a solution-diffusion (RO/NF) membrane: it has
  no water permeability A_w and no per-solute B_s.  The standard membrane
  reader (MembraneRegistry / Membrane::readFromDict) SKIPS \`kind IEM\`
  files (they would fail its required-A_w read); the electrodialysisStack
  unit reads this file with its own small reader.  Keeping it here (next
  to SW30HR / NF270) means "membranes live in one place" -- the kind tag,
  not the folder, distinguishes them.

  An electrodialysis CELL PAIR is one CEM (CMX) + one AEM (AMX).  This file
  bundles BOTH because they are deployed as a pair; the stack sums their
  area resistances per cell pair.

  PROPERTIES (per membrane):
    R_area  [Ohm.m2]  area (areal) resistance, measured in 0.5 M NaCl, 25 C
    t_cu    [-]       counter-ion transport number IN THE MEMBRANE
                      (permselectivity; CEM passes cations, AEM passes anions)
    thickness [m]

  Counter-ion = the ion the membrane is MEANT to pass (cation for the CEM,
  anion for the AEM).  Co-ion transport number t_co = 1 - t_cu (the leakage
  that lowers current efficiency); the Cowan-Brown limiting-current form uses
  (t_cu - t_co) = (2 t_cu - 1).

  SOURCES (primary, cited per value):
    * thickness, ion-exchange capacity, transport number t_cu:
        Golubenko et al., "Transport Characteristics of Fujifilm Ion-Exchange
        Membranes as Compared to Homogeneous Membranes AMX and CMX...",
        Int. J. Mol. Sci. 20 (2019) 3712 (PMC6680501), Tables 2 & 5
        (CMX 170-175 um, t* 0.995; AMX 135 um, t* 0.996; 0.5 M NaCl, 25 C).
    * area resistance R_area:
        Strathmann, "Ion-Exchange Membrane Separation Processes", Membrane
        Science and Technology Series 9, Elsevier (2004), Table (Neosepta
        standard-grade), and the Tokuyama/ASTOM Neosepta product nameplate:
        CMX ~ 3.0 Ohm.cm2, AMX ~ 2.4 Ohm.cm2 in 0.5 M NaCl at 25 C.
  Licence: representative literature/nameplate values (not a no-grant table);
  cite the primary per value as above.  See parameters/electrolyte/PROVENANCE.md ethos.
\\*---------------------------------------------------------------------------*/

name           CMX_AMX;
kind           IEM;
manufacturer   "Tokuyama / ASTOM (Neosepta)";

// Cation-exchange membrane (passes cations).
cem
{
    name       CMX;
    R_area     3.0e-4;     // Ohm.m2  (= 3.0 Ohm.cm2, 0.5 M NaCl, 25 C; Strathmann 2004)
    t_cu       0.98;       // apparent counter-ion (cation) transport number (Golubenko 2019)
    thickness  1.70e-4;    // m  (170 um wet; Golubenko 2019 Table 2)
}

// Anion-exchange membrane (passes anions).
aem
{
    name       AMX;
    R_area     2.4e-4;     // Ohm.m2  (= 2.4 Ohm.cm2, 0.5 M NaCl, 25 C; Strathmann 2004)
    t_cu       0.98;       // apparent counter-ion (anion) transport number (Golubenko 2019)
    thickness  1.35e-4;    // m  (135 um wet; Golubenko 2019 Table 5)
}
`,Q=`/*--------------------------------*- Choupo -*-----------------------*\\
  ELECTRODIALYSIS STACK: Eurodia Industrie EUR2C-7P18 bench unit

  WHAT THIS RECORD IS.  The piece of hardware an \`electrodialysisStack\`
  is run in: how many cell pairs, how much active area, the channel the
  diluate flows through, the spacer, the hydraulic passes, the
  mass-transfer correlation fitted to THIS stack, and the operating
  limits.  A case names it (\`stack EUR2C-7P18;\` in the unit's operation)
  and stops typing geometry -- and stops typing a CROSSFLOW VELOCITY,
  which is not an operating knob at all but a consequence of the diluate
  flow the unit already receives on its inlet stream.

  VITOR'S RULING ON WHAT \`activeArea\` MEANS (2026-09-16), verbatim:
  *the active area is the CELL-PAIR area; a stack of 50 m2 has 50 m2 of
  anionic membrane AND 50 m2 of cationic membrane.*  So \`activeArea\` is
  the cell-pair active area of the WHOLE stack.  Everything else is
  DERIVED and ANNOUNCED by the engine, never stored here:
      area per cell pair        = activeArea / cellPairs   = 0.020 m2
      area per membrane KIND    = activeArea               = 0.140 m2
      total membrane area       = 2 x activeArea           = 0.280 m2

  VITOR'S RULING ON THE PASSES (2026-09-16): *the pass belongs to the
  EQUIPMENT, not the operation.*  \`hydraulicPasses\` is here; a case that
  also declares it beside \`stack\` is refused by name.

  SOURCE OF THE FACTS (numbers transcribed; no prose):
      V. Geraldes, M.D. Afonso, "Limiting current density in the
      electrodialysis of multi-ionic solutions", J. Membr. Sci. 360
      (2010) 499-508, doi:10.1016/j.memsci.2010.05.054.
    Section 3.1: bench-scale ED unit EUR2C-7P18 (Eurodia Industrie,
      France), a parallel path ED stack; seven anion- and seven
      cation-exchange membranes forming SEVEN CELLS, plus two further
      cation-exchange membranes forming the electrode compartments;
      membranes Neosepta AMX-SB and CMX-SB (Tokuyama Soda); concentrate
      and diluate channels 0.175 m long (L) and 0.114 m wide (W), giving
      an effective mass-transfer area per membrane A of 0.020 m2; the
      channels contain net-like spacers of non-conducting polymeric
      material 7.7e-4 m thick (h).
    Section 3.4 / Fig. 2: the mass-transfer correlation Sh = 0.29
      Re^0.5 Sc^0.33 fitted to the stack's OWN limiting-current data for
      NaCl at Re 50-86, average error 7 %; Sh on the diluate channel
      height and the effective salt diffusivity, Re on the SUPERFICIAL
      velocity and the same height, and the Schmidt exponent 1/3
      POSTULATED rather than fitted.
    Section 3.3: diluate flow rates 145, 175 and 230 L/h, corresponding
      to superficial velocities 0.066, 0.080 and 0.11 m/s.

  WHY \`hydraulicPasses 1\` IS A FACT AND NOT A GUESS.  The paper calls the
  unit a "parallel path" stack, and the arithmetic closes: with all seven
  diluate channels in parallel, 145 L/h over 7 x W x h gives 0.0656 m/s
  and 175 L/h gives 0.0791 m/s, which are the paper's own 0.066 and
  0.080 to both its digits.  (Its third entry, 0.11 m/s for 230 L/h,
  does not close on any pass count -- the same division gives 0.1040 --
  and the Re it lists there, 86, is likewise not proportional to the
  other two.  The engine derives the velocity from the flow; it does not
  reproduce that one printed figure.)

  WHY activeArea IS NOT cellPairs x W x L.  The paper states BOTH the
  channel dimensions (0.114 x 0.175 = 0.019950 m2 of spacer footprint)
  and the effective mass-transfer area per membrane (0.020 m2).  They
  are two different facts about the same cell and they differ by 0.25 %;
  neither is derived from the other here.  The engine prints the
  footprint beside the declared area and ANNOUNCES a disagreement above
  5 %.

  THE MEMBRANE GRADE.  The paper's stack carried Neosepta AMX-SB and
  CMX-SB; \`CMX_AMX\` in this catalogue is the standard grade.  That
  difference does NOT reach the limiting current predicted by
  GeraldesAfonso2010 -- the model computes its own limiting transport
  numbers from the ion diffusivities and takes the co-ion numbers as
  null, so no membrane property enters it.  It DOES reach the ohmic drop
  and the Nernst back-EMF, which read the record's areal resistances and
  t_cu.  Curating the -SB grades is a separate act.
\\*---------------------------------------------------------------------------*/

name            EUR2C-7P18;
kind            edStack;
manufacturer    "Eurodia Industrie";

membranes       CMX_AMX;           // the \`kind IEM\` pair this stack is built with
cellPairs       7;                 // seven cells (paper, section 3.1)
activeArea      0.140 m2;          // CELL-PAIR area of the whole stack = 7 x 0.020 m2

//  The diluate/concentrate channel.  The velocity is DERIVED from the flow.
channelHeight   0.77 mm;           // 7.7e-4 m spacer thickness (paper, section 3.1)
channelWidth    0.114 m;           // W (paper, section 3.1)
channelLength   0.175 m;           // L (paper, section 3.1)
spacerPorosity  0.90;              // ESTIMATE, see provenance
spacerType      mesh;              // net-like spacer (paper, section 3.1).  A DECLARED
                                   // fact, announced; no correlation selects on it today
hydraulicPasses 1;                 // parallel path (see the header's arithmetic)

//  THE SHERWOOD CORRELATION IS EQUIPMENT-AND-SPACER DATA, NOT A UNIVERSAL LAW.
//  It was fitted to THIS stack with THIS spacer, from its own NaCl
//  limiting-current measurements.  Sh = a Re^b Sc^c, with
//      Sh = k_c,eff h / D_eff,  Re = rho u h / mu,  Sc = mu / (rho D_eff)
//  and u the SUPERFICIAL velocity in the empty channel cross-section.
massTransfer
{
    model          powerLaw;       // powerLaw | leveque
    a              0.29;
    b              0.5;
    c              0.33;           // POSTULATED by the paper, not fitted -- see provenance
    velocityBasis  superficial;    // superficial | interstitial
}

//  Checked against the run and ANNOUNCED when exceeded, never refused: a
//  student may drive a stack past its rating on purpose and the run says
//  so.  A limit this record does not declare is ABSENT and is not checked;
//  the Eurodia data sheet is not in hand, so only two are stated and BOTH
//  are marked estimates.
limits
{
    i_max         200;             // A/m2 (raw SI) -- ESTIMATE, see provenance
    T_max         313.15 K;        // ESTIMATE, see provenance
}

provenance
{
    source  "V. Geraldes, M.D. Afonso, Limiting current density in the electrodialysis of multi-ionic solutions, J. Membr. Sci. 360 (2010) 499-508, doi:10.1016/j.memsci.2010.05.054, sections 3.1 and 3.4";
    licence "representative literature values, cited per value (the primary is the paper above); no vendor data sheet is redistributed here";

    spacerPorosity
    {
        origin        estimated;
        reviewStatus  unverified;
        notes         "the paper states the spacer thickness but no porosity; 0.90 is typical of commercial net-like spacers, to be verified by weighing a spacer coupon: porosity = 1 - m/(rho_polymer * W * L * h)";
    }

    massTransfer
    {
        c
        {
            origin        estimated;
            reviewStatus  unverified;
            notes         "the paper POSTULATES the Schmidt exponent 1/3 (section 3.4) rather than fitting it; a and b ARE fitted to this stack's NaCl data.  To be verified by regressing c from limiting-current data over solutions of materially different effective diffusivity at fixed Re";
        }
    }

    limits
    {
        i_max
        {
            origin        estimated;
            reviewStatus  unverified;
            notes         "the paper states no stack current-density ceiling; 200 A/m2 is the current density at which its Table 1 quotes the membrane resistances and brackets the highest limiting current it measured (198 A/m2).  To be verified against the Eurodia EUR2C data sheet, which states the stack's own ceiling";
        }
        T_max
        {
            origin        estimated;
            reviewStatus  unverified;
            notes         "the paper ran the stack at 20 +/- 1 C and states no ceiling; 313.15 K (40 C) is the operating maximum usually quoted for standard-grade Neosepta membranes.  To be verified against the ASTOM Neosepta product brochure for the AMX-SB / CMX-SB grades and against the Eurodia data sheet for the stack body";
        }
    }
}
`,ee=`/*--------------------------------*- Choupo -*-----------------------*\\
  ELECTRODIALYSIS STACK: a 100-cell-pair, 50 m2 INDUSTRIAL Eurodia unit

  WHAT THIS RECORD IS, and how it differs from EUR2C-7P18.dat.  That one
  is a BENCH unit transcribed from a published paper, every number of it
  in print.  This one is an INDUSTRIAL unit that Vitor Geraldes has
  OPERATED, and its facts are his own recollection of it -- not a data
  sheet, not a publication.  They are recorded as what they are: \`origin
  measured; reviewStatus unverified;\`, with the source naming him.

  SOURCE OF THE FACTS:
      V. Geraldes, personal communication / own operating experience,
      2026-09-16.  Stated by him: 100 cell pairs; 50 m2 of cell-pair
      active area (so 50 m2 of anionic membrane AND 50 m2 of cationic --
      his own ruling on what the area MEANS, see below); a spacer /
      channel height of "aprox" 0.7 mm; a zig-zag spacer; TWO hydraulic
      passes; a design diluate flow of 3000 L/h.

  VITOR'S RULING ON \`activeArea\` (2026-09-16), verbatim: *the active area
  is the CELL-PAIR area; a stack of 50 m2 has 50 m2 of anionic membrane
  AND 50 m2 of cationic membrane.*  This record is the unit that ruling
  was stated about.  Everything else is DERIVED and ANNOUNCED:
      area per cell pair        = activeArea / cellPairs   = 0.500 m2
      area per membrane KIND    = activeArea               = 50 m2
      total membrane area       = 2 x activeArea           = 100 m2

  VITOR'S RULING ON THE PASSES (2026-09-16): *the pass belongs to the
  EQUIPMENT, not the operation.*  Two passes here, so 50 of the 100
  channels run side by side in each pass and a parcel of diluate travels
  the channel length TWICE.

  WHAT IS NOT KNOWN, AND HOW IT IS HANDLED.  He gave neither the channel
  WIDTH nor its LENGTH.  Exactly ONE of the two is stored, and it is the
  one that is an estimate:

    * \`channelWidth 0.298 m\` is an ESTIMATE (see provenance).  It was
      BACK-CALCULATED from a superficial velocity of 0.080 m/s at the
      design flow of 3000 L/h -- the middle of the band his own 2010
      bench stack was run at -- and it must be verified by measuring a
      membrane sheet.  The engine announces it on every run.

    * THE CHANNEL LENGTH IS NOT STORED AT ALL.  It is
      activeArea / (cellPairs x channelWidth) = 50 / (100 x 0.298) =
      1.680 m, derived where it is used and announced as derived.
      Storing a back-calculated length BESIDE a back-calculated width
      would be two homes for one guess, and the second would read like a
      declaration.  (EUR2C-7P18 DOES declare its length, because its
      paper states the width, the length and the effective area as three
      separate facts.)

    The flow path is therefore 1.680 m per pass and 3.360 m over the two.

  THE MEMBRANE PAIR IS NOT NAMED HERE, and that is a fact rather than a
  gap: he did not say which membranes the unit carried.  A stack FRAME
  takes any ion-exchange pair, exactly as the SEPA CF laboratory cell
  takes any coupon, so a case that names this stack MUST declare
  \`membrane <name>;\` beside it, and the engine refuses by name if it does
  not.  Neither side guesses a pair on the owner's behalf.

  WHY THE PAPER'S CORRELATION IS NOT AN EXTRAPOLATION HERE, which is the
  check that matters and is the reason this record may carry it at all.
  The correlation \`Sh = 0.29 Re^0.5 Sc^0.33\` was fitted on EUR2C-7P18 over
  Re 50-86.  Run over the same 0.066-0.110 m/s superficial band that bench
  stack was operated at, and on pure water at 20 C:

      this stack,  h = 0.70 mm :  Re  46  ->  77
      EUR2C-7P18,  h = 0.77 mm :  Re  51  ->  84

  The two bands very nearly coincide, BECAUSE the two spacer thicknesses
  very nearly coincide -- Re is built on the channel height.  So the fit
  is being APPLIED INSIDE the band it was taken over rather than
  extrapolated beyond it.  That is the whole of the justification, and it
  is a justification about the REYNOLDS NUMBER only: the spacer here is
  ZIG-ZAG and the bench stack's was a MESH, and no correlation in this
  tree selects on the spacer type.  A zig-zag spacer mixes differently;
  the coefficients below are the mesh stack's and are marked as such.
  \`validity { Re ( 50 86 ); }\` is declared with them, and the engine
  ANNOUNCES any run that leaves the band.

  At the design flow of 3000 L/h this stack runs at u = 0.0800 m/s and
  Re = 55.9, inside the band.
\\*---------------------------------------------------------------------------*/

name            EurodiaED-100P-50;
kind            edStack;
manufacturer    "Eurodia Industrie";

//  No \`membranes\` key: the source does not name the pair, so the CASE does.

cellPairs       100;               // stated
activeArea      50 m2;             // CELL-PAIR area of the whole stack (stated)

channelHeight   0.7 mm;            // stated, "aprox" -- see provenance
channelWidth    0.298 m;           // ESTIMATE, back-calculated -- see provenance
//  No \`channelLength\`: it is activeArea/(cellPairs x channelWidth) = 1.680 m,
//  derived in the engine and announced as derived.
spacerPorosity  0.90;              // ESTIMATE, see provenance
spacerType      zigZag;            // stated.  A DECLARED fact, announced; no
                                   // correlation selects on it today
hydraulicPasses 2;                 // stated

//  THE CORRELATION IS THE BENCH STACK'S, and the header says why it may be
//  used here and on what that permission rests.  Sh = a Re^b Sc^c, with
//  Sh = k_c,eff h / D_eff, Re = rho u h / mu, Sc = mu/(rho D_eff), u the
//  SUPERFICIAL velocity in the empty channel cross-section.
massTransfer
{
    model          powerLaw;
    a              0.29;
    b              0.5;
    c              0.33;
    velocityBasis  superficial;
    validity       { Re ( 50 86 ); }   // the band the fit was taken over
}

//  NO \`limits {}\` BLOCK, and the absence is a decision rather than an
//  omission.  The only number in that family anyone stated is the DESIGN
//  diluate flow, 3000 L/h -- and a design point is not a ceiling.  Filing it
//  as \`flow_max\` would promote it to one silently, and the run would then
//  accuse a stack of exceeding its rating while doing exactly what it was
//  designed to do (it did: at the design flow the comparison lands a
//  floating-point hair above and printed a [limit] line).  A limit this
//  record does not declare is ABSENT and is not checked; curating the real
//  ceilings from the Eurodia data sheet is a separate act.

provenance
{
    source  "V. Geraldes, personal communication / own operating experience, 2026-09-16 (an industrial Eurodia electrodialysis unit he operated); the mass-transfer correlation is from V. Geraldes, M.D. Afonso, J. Membr. Sci. 360 (2010) 499-508, section 3.4, fitted to the EUR2C-7P18 bench stack";
    licence "the operating facts are the author's own, contributed to this project; the correlation is cited to the paper above";

    cellPairs
    {
        origin        measured;
        reviewStatus  unverified;
        notes         "stated from operating experience of the unit, not from a data sheet; to be verified against the Eurodia nameplate";
    }
    activeArea
    {
        origin        measured;
        reviewStatus  unverified;
        notes         "stated from operating experience as the CELL-PAIR area of the stack (50 m2 of anionic membrane and 50 m2 of cationic); to be verified against the Eurodia nameplate";
    }
    channelHeight
    {
        origin        measured;
        reviewStatus  unverified;
        notes         "stated as approximately 0.7 mm, in the owner's own word 'aprox'; to be verified with a micrometer on an installed spacer";
    }
    channelWidth
    {
        origin        estimated;
        reviewStatus  unverified;
        notes         "NOT stated by anyone: back-calculated from a superficial velocity of 0.080 m/s at the design flow of 3000 L/h through 50 channels (100 cell pairs over 2 hydraulic passes) of 0.7 mm height, 0.080 being the middle of the 0.066-0.110 m/s band the EUR2C-7P18 bench stack was run at.  To be verified by measuring the width of a membrane sheet; the channel LENGTH follows from it and the active area and is never stored";
    }
    spacerPorosity
    {
        origin        estimated;
        reviewStatus  unverified;
        notes         "not stated; 0.90 is typical of commercial spacers, to be verified by weighing a spacer coupon: porosity = 1 - m/(rho_polymer * W * L * h)";
    }
    spacerType
    {
        origin        measured;
        reviewStatus  unverified;
        notes         "stated as a zig-zag spacer from operating experience; to be verified by inspecting an installed spacer.  No correlation in this tree selects on the spacer type, and the mass-transfer coefficients below are a MESH stack's";
    }
    hydraulicPasses
    {
        origin        measured;
        reviewStatus  unverified;
        notes         "stated as two passes from operating experience; to be verified against the Eurodia flow schematic";
    }
    massTransfer
    {
        c
        {
            origin        estimated;
            reviewStatus  unverified;
            notes         "the source paper POSTULATES the Schmidt exponent 1/3 (section 3.4) rather than fitting it.  To be verified by regressing c from limiting-current data over solutions of materially different effective diffusivity at fixed Re";
        }
    }
}
`,te=`/*--------------------------------*- Choupo -*-----------------------*\\
  Membrane MODULE: DuPont FilmTec NF270-4040 element
  (a 4-inch x 40-inch commercial nanofiltration element)

  WHAT THIS RECORD IS.  The piece of HARDWARE the NF270 membrane
  (data/standards/assets/NF270.dat, kind NF -- transport only) is wound
  into: the active area, the feed-channel geometry, the manufacturer's
  operating limits and the standard test the data sheet quotes.  A case
  names it with \`module NF270-4040;\` and types no geometry.

  SOURCE OF THE FACTS (numbers transcribed; no prose):
      DuPont FilmTec NF270 Element Product Data Sheet,
      Form No. 45-D01529-en, Rev. 8, January 2025.
    Typical properties row (NF270-4040, part 12096027):
      active area 82 ft2 (7.6 m2); applied pressure 70 psi (4.8 bar);
      permeate flow 2,500 gpd (9.5 m3/d); stabilized salt rejection > 97.0 %
      -- at 2,000 ppm MgSO4, 77 F (25 C), 15 % recovery.
    Element dimensions: A 40.0 in (1,016 mm), B 3.9 in (99 mm),
      C 0.75 in (19 mm), D 1.05 in (27 mm).
    Suggested operating conditions: max temperature 113 F (45 C); max
      pressure 600 psi (41 bar); max pressure drop 15 psi (1.0 bar);
      pH 3-10 continuous, 1-12 short-term cleaning; max feed flow 16 gpm
      (3.6 m3/h); SDI 5; free chlorine < 0.1 ppm.

  WHAT THE SHEET DOES NOT STATE, and what stands in for it.  The feed
  spacer thickness, the spacer porosity and the leaf length are NOT on
  this sheet (nor on the Rev. 2 2020 sheet, nor in DuPont's midsize
  design guidelines).  Each carries an EDUCATED value below, marked
  \`origin estimated; reviewStatus unverified;\` with a note saying HOW to
  verify it (Vitor Geraldes, 2026-09-15: "onde faltam parametros coloca um
  valor educado, com uma nota a dizer que tem de ser verificado").  The
  engine announces every one of them on every run that reads this record.

  ON THE SPACER.  The sibling sheet for the BW30 PRO-4040 (Form No.
  45-D03970-en, Rev. 5, October 2024) was fetched and read on 2026-09-15
  to see whether DuPont states 28 mil for its 4040 elements: it does NOT
  state a feed spacer thickness either.  The 28 mil (0.711 mm) below is
  therefore the spacer DuPont states for its 8-inch SW30HR-380 (Form No.
  45-D00971-en, Rev. 7), carried over as the estimate.

  The rated test is VERIFIABLE: bin/curate/check_membrane_modules.py runs
  this element at the sheet's conditions through the engine and prints the
  engine's permeate flow and rejection beside the sheet's, as a MEASUREMENT
  (the NF270 record's A_w is a fit to a teaching case, so the ratio is a
  finding, never tuned).
\\*---------------------------------------------------------------------------*/

name           NF270-4040;
kind           membraneModule;
manufacturer   "DuPont FilmTec";
membrane       NF270;              // the membrane record this element is wound with
format         spiralWound;        // spiralWound | flatSheetCell

activeArea     7.6 m2;             // 82 ft2 (data sheet)
channelHeight  0.7112 mm;          // 28 mil -- ESTIMATE, see provenance
spacerPorosity 0.90;               // ESTIMATE, see provenance
leafLength     0.95 m;             // ESTIMATE, see provenance (element A = 1,016 mm incl. end caps)

limits
{
    P_max         41 bar;          // 600 psi, maximum operating pressure
    T_max         318.15 K;        // 45 C (113 F), maximum operating temperature
    dP_max        1.0 bar;         // 15 psi, maximum pressure drop
    feedFlow_max  3.6 m3/h;        // 16 gpm, maximum feed flow
    pH_min        3;               // continuous operation
    pH_max        10;
}

//  The manufacturer's standard test, as quoted (fractions: 2,000 ppm ->
//  2.0e-3 kg/kg; 15 % -> 0.15; "> 97.0 %" -> 0.97).
ratedTest
{
    solute            MgSO4;
    feedMassFraction  2.0e-3;      // 2,000 ppm MgSO4
    P                 4.8 bar;     // 70 psi applied
    T                 298.15 K;    // 77 F (25 C)
    recovery          0.15;
    permeateFlow      9.5 m3/d;    // 2,500 gpd
    rejection         0.97;        // stabilized salt rejection > 97.0 %
}

provenance
{
    source  "DuPont FilmTec NF270 Element Product Data Sheet, Form No. 45-D01529-en, Rev. 8, January 2025";

    channelHeight
    {
        origin        estimated;
        reviewStatus  unverified;
        notes         "28 mil (0.7112 mm) is the feed spacer DuPont states for its 8-inch SW30HR-380 (Form No. 45-D00971-en, Rev. 7); the NF270-4040 sheet states none, and neither does the sibling BW30 PRO-4040 sheet (Form No. 45-D03970-en, Rev. 5, fetched 2026-09-15); to be verified by measuring the NF270-4040 feed spacer on an unrolled leaf";
    }
    spacerPorosity
    {
        origin        estimated;
        reviewStatus  unverified;
        notes         "0.90 is typical for commercial diamond feed spacers; to be verified by weighing a spacer coupon: porosity = 1 - m/(rho_PP * A * h)";
    }
    leafLength
    {
        origin        estimated;
        reviewStatus  unverified;
        notes         "element length 1.016 m (dimension A) per the data sheet includes the end caps; the leaf length is not published; to be verified against the element's leaf dimensions (unroll one)";
    }
}
`,ne=`/*--------------------------------*- Choupo -*-----------------------*\\
  Membrane: NF270-style loose-NF
  (DuPont FilmTec NF270-400 archetype)

  A thin-film composite polyamide NF membrane with intermediate
  selectivity: high rejection of divalent ions (MgSO4 ~ 98 %),
  moderate rejection of small uncharged solutes like glucose
  (~50 %), low rejection of monovalent salts (NaCl ~ 50-70 %).
  Used for water softening, sugar concentration, and partial
  desalination at modest pressures (5--10 bar).

  Solution-diffusion permeabilities (v0.26 transport model):
     A_w (water)  ≈ 1.0 × 10⁻⁵  m / (s · bar)
                   = 36 × 10⁻³  m / (h · bar)
                   = 36 LMH / bar
                   (NF270 is ~10× more permeable to water than SW30HR --- the
                    classic NF vs RO trade-off)

  THE PERMEABILITIES BELOW ARE FITTED, NOT MEASURED, and the record now says
  so in a field the engine reads (\`provenance fittedToCase\`) rather than only
  in this comment.  What was published is a REJECTION; what Choupo needs is a
  solution-diffusion B.  Those are different quantities, and the fit is the
  bridge between them.

  TARGET REJECTIONS the fit aims at (these are the sourced quantities):
      MgSO4    ≥ 97 %   — DuPont FilmTec NF270-400 Product Data Sheet, at its
                          own standard test: 2000 ppm MgSO4, 4.8 bar (70 psi),
                          25 °C, 15 % recovery
      NaCl     ~ 50 %   — same document's stated NaCl performance at 2000 ppm,
                          70 psi, 25 °C
      glucose    (no citable figure obtained)

  WHY THIS HEADER WAS REWRITTEN (2026-08-05).  It used to list three
  PERMEABILITIES "~2e-6 / ~5e-8 / ~2e-7 m/s" beside the three it ships
  (5.0e-6 / 5.0e-8 / 8.0e-6).  Two of the three disagreed — glucose by 40x —
  so the file contained two conflicting claims about the same quantity and one
  of them had to be false.  It is fixed by removing the false KIND of claim,
  not by picking a number: the datasheet publishes rejections, so rejections
  are what this header may quote.  The permeabilities have exactly one home,
  the block below, and they are labelled for what they are.

  A NOTE ON THE PHYSICS, because a previous audit got this wrong and the
  correction is worth keeping.  Glucose is shipped MORE permeable than NaCl,
  which was flagged as "backwards for a loose NF membrane".  It is not
  obviously backwards for NF270 specifically: NaCl gains DONNAN exclusion from
  a negatively charged membrane, while a neutral sugar at 180 Da against a
  ~200 Da cutoff has only steric hindrance to rely on.  Low glucose rejection
  on a loose NF is a reported behaviour, not an obvious error.  What is NOT
  established is the NUMBER — no citable NF270 glucose rejection was found,
  which is precisely why the value is marked fitted and the case that uses it
  is calibration rather than validation.
\\*---------------------------------------------------------------------------*/

name           NF270;
kind           NF;
manufacturer   "DuPont FilmTec";

A_w            1.0e-5  m/s/bar;     // much more permeable than RO

//  PROVENANCE OF THE PERMEABILITY SET -- machine-readable, because a tier that
//  changes how a number should be READ must not live only in a comment.
provenance     fittedToCase;
fittedAgainst  membrane02_NF_sugar;
intendedUse    pedagogicalCalibration;

permeabilities
{
    NaCl       5.0e-6  m/s;     // R_obs ~ 60-70 % at 2 g/L
    MgSO4      5.0e-8  m/s;     // R_obs ~ 98 % (divalent retention)
    glucose    8.0e-6  m/s;     // R_obs ~ 50 % at typical NF conditions
}

P_max          41.4;            // bar (600 psi)
T_max          318;             // K (45 °C)
pH_min         3;
pH_max         10;
MWCO           200;              // Da (loose NF)
`,ae=`/*--------------------------------*- Choupo -*-----------------------*\\
  Membrane: NF270 with the DSPM-DE charged-pore tier
  (DuPont FilmTec NF270 archetype, characterised for the Donnan-Steric
   Pore Model with Dielectric Exclusion)

  This is the SAME polyamide NF membrane as NF270.dat, but augmented with
  the pore-geometry / charge / dielectric parameters the DSPM-DE transport
  law needs (\`transport DSPM-DE;\`).  It is kept as a SEPARATE catalogue
  entry so NF270.dat (the solution-diffusion archetype) stays byte-identical
  and existing tutorials are untouched.

  DSPM-DE physics (Bowen & Welfoot, Chem. Eng. Sci. 57 (2002) 1121):
    j_i = -K_d D_i dc/dx - (z c D K_d F/RT) dpsi/dx + K_c c J_v
  with Deen (AIChE J. 33 (1987) 1409) hindrance factors K_d, K_c from
  lambda = r_ion/r_p, an interfacial Donnan + steric + Born partition, pore
  electroneutrality (sum z_i c_i + X_d = 0) and zero net current.

  PER-VALUE PRIMARY PROVENANCE
  ----------------------------
  A_w           1.0e-5 m/s/bar -- same as NF270.dat (DuPont FilmTec NF270
                 water permeability archetype; ~10x SW30HR).
  poreRadius    0.60 nm (6.0e-10 m) -- effective pore radius.  NOTE the choice:
                 the ion-transport tier in ions.dat carries HYDRATED (Nightingale
                 1959) radii (~0.33-0.43 nm), so the steric hindrance lambda =
                 r_ion/r_p is referenced to those.  A 0.6 nm pore against hydrated
                 radii reproduces the published NF270 salt-rejection magnitudes
                 (NaCl ~50-70 %, MgSO4 ~95-98 %); the bare-pore 0.43 nm of the
                 Bowen-Welfoot fits is referenced to STOKES radii (~0.12-0.27 nm),
                 a different radius convention.  Stated honestly: r_p here is the
                 value CONSISTENT WITH the catalogue's hydrated-radius tier, not a
                 mismatched transplant.  PRIMARY for the NF270 archetype: Bowen &
                 Welfoot, CES 57 (2002) 1121, Table 2.
  porosityOverThickness  5.0e6 1/m  (= A_k/Delta_x; A_k ~ 0.05, Delta_x ~ 1e-8
                 m active layer) -- effective porosity-over-thickness ratio
                 from pure-water permeability + r_p (Hagen-Poiseuille pore
                 consistency).  PRIMARY: Bowen & Welfoot 2002 Eq. 1 + Table 2.
  chargeDensity -5 mol/m3 (SIGNED, NEGATIVE -- carboxylate/sulfonate fixed
                 charge of the polyamide at near-neutral pH).  PRIMARY: Bowen,
                 Mohammad & Hilal, JMS 126 (1997) 91 (effective X_d from salt-
                 rejection fits, -1 to -60 mol/m3 depending on pH, salt and feed
                 concentration).
                 LIMITATION (v1): X_d is a CONSTANT scalar here; the real NF270
                 charge is pH- AND feed-concentration-dependent (its magnitude
                 grows on dilution and with rising pH).  This single value is
                 representative of ~50 mM near pH 6-7; a different operating
                 point needs a different entry.
  poreDielectric 35 [-] -- reduced pore-fluid dielectric constant (vs bulk
                 water ~78), the Born dielectric-exclusion parameter.  PRIMARY:
                 Bowen & Welfoot, CES 57 (2002) 1121 (fitted eps_p ~ 30-45 for
                 polyamide NF).  Set < eps_water to turn the Born term ON; the
                 dspmde tutorials toggle it to SEE the dielectric contribution.

  Ratings / B_s permeabilities are carried for parity with NF270.dat but the
  DSPM-DE law does NOT use the solution-diffusion B_s (it derives rejection
  from the pore model); they are kept so the same membrane can also be run
  under \`transport solutionDiffusion;\` for comparison.

  This file is curated DATA, aggregation under the per-source manifest; the
  cited primaries (Bowen-Mohammad-Hilal 1997, Bowen-Welfoot 2002, Deen 1987)
  are journal-published characterisation parameters, NOT a proprietary table.
\\*---------------------------------------------------------------------------*/

name           NF270_dspmde;
kind           NF;
manufacturer   "DuPont FilmTec";

A_w            1.0e-5  m/s/bar;     // same as NF270.dat
//  PROVENANCE OF THE TRANSPORT PARAMETERS -- machine-readable, because a
//  tier that changes how a number should be READ must not live only in a
//  comment.  The header says these values 'reproduce' a published
//  rejection; that makes them a FIT to a sourced target, not a vendor
//  coefficient, and the two must never be read as the same thing.
provenance     fittedToCase;
fittedAgainst  membrane10_dspmde_divalent;
intendedUse    pedagogicalCalibration;


permeabilities                       // solution-diffusion B_s (unused by DSPM-DE)
{
    NaCl       5.0e-6  m/s;
    MgSO4      5.0e-8  m/s;
    CaCl2      1.0e-6  m/s;
    glucose    8.0e-6  m/s;
}

poreModel
{
    poreRadius             6.0e-10;   // m   (0.60 nm, hydrated-radius basis)
    porosityOverThickness  5.0e6;     // 1/m (A_k/Delta_x)  Bowen-Welfoot 2002
    chargeDensity          -5;        // mol/m3, SIGNED   Bowen-Mohammad-Hilal 1997
    poreDielectric         35;        // [-]              Bowen-Welfoot 2002
}

P_max          41.4;            // bar (600 psi)
T_max          318;             // K (45 °C)
pH_min         3;
pH_max         10;
MWCO           200;              // Da (loose NF)
`,se=`/*---------------------------------------------------------------------------*\\
  Choupo electrolyte catalogue --- ION-EXCHANGE RESIN (nameplate).

  SAC_Na --- a Strong-Acid Cation exchange resin in the SODIUM form, the
  workhorse of household / industrial water softening (sulfonated
  polystyrene-DVB, e.g. Dowex/Amberlite/Purolite SAC grades).

  This is the resin NOUN (resolved BY EXACT NAME, like materials/ and
  membranes/): it names the fixed exchanger (X), the Gaines-Thomas convention
  it equilibrates under (so the engine reads exchange.dat for the half-reaction
  selectivities), and its CAPACITY in the two bases a vendor quotes:

    CEC      [eq/L bed]      --- per litre of settled bed (the volumetric
                                nameplate used to size a contactor); the engine
                                converts to eq/kg WATER through the water/resin
                                loading of the contact (announced).
    CEC_dry  [eq/kg dry]     --- the intrinsic exchange capacity per kg of dry
                                resin (the material property, basis-independent).
    rho_bulk [kg/m3]         --- settled-bed bulk density (ties the two bases:
                                CEC ~ CEC_dry * rho_dry-fraction).

  form        the ionic form as shipped/regenerated (Na for a softener: every
              site starts loaded with Na, released eq-for-eq as hardness binds).
  T_max       the manufacturer's maximum service temperature.

  Nameplate values (textbook representatives, NOT a specific product datasheet
  --- a real selection reads the vendor's certificate):
  source "Wachinski, Ion Exchange Treatment for Water (2017), Ch. 2-3;
          Helfferich, Ion Exchange (1962, Dover reprint) --- SAC nameplate".
\\*---------------------------------------------------------------------------*/

name        SAC_Na;
kind        ionExchangeResin;
exchanger   X;
convention  GainesThomas;

CEC         2.0  eq/L;       // total exchange capacity, per litre of settled bed
CEC_dry     4.4  eq/kg;      // intrinsic capacity, per kg of dry resin
rho_bulk    800  kg/m3;      // settled-bed bulk density

form        Na;             // shipped / regenerated in the sodium form
T_max       333  K;          // ~60 C service ceiling

source      "Wachinski 2017; Helfferich 1962 (textbook nameplate)";
`,ie=`/*--------------------------------*- Choupo -*-----------------------*\\
  Membrane MODULE: Sterlitech SEPA CF laboratory flat-sheet crossflow cell

  WHAT THIS RECORD IS.  A laboratory cell that takes ANY flat-sheet coupon:
  the case declares the membrane beside it (\`module SEPA_CF; membrane
  <name>;\`) and this record supplies the cell -- the coupon's active area,
  the slot it sits in, the installed channel height, and the body's limits.
  A flat cell has ONE membrane face over the channel (the coupon lies on
  the permeate carrier; a steel lid closes the channel), so the engine
  takes the channel width as activeArea / channel length and says so; a
  spiral leaf has two.  The channel LENGTH is not stored: it is
  activeArea / slotWidth, derived where it is used.

  SOURCE OF THE FACTS (numbers transcribed; no prose):
      Sterlitech Corporation, SEPA CF Cell Assembly & Operation Manual,
      https://media.sterlitech.com/media/wysiwyg/Manual_SS_Sepa_CF.pdf,
      retrieved 2026-09-15 (no revision date printed).
    Table 1 (manual p. 1): membrane active area 140 cm2 (22 in2); hold-up
      volume 70 ml; maximum pressure 69 bar (1000 psig), 316SS cell body;
      maximum temperature 177 C (350 F), 316SS body; slot depth 1.09 mm
      (0.075 in); slot width 95.3 mm (3.75 in); pH range membrane
      dependent; crossflow velocity variable.
    Table 2 (manual p. 12): upper temperature limits -- 316SS cell 177 C,
      feed spacer (PP) 82 C, permeate carrier (PP) 82 C.
    Table 3 (manual p. 13): feed spacers (PP) 17, 31, 47 and 65 mil, plus a
      47 mil parallel spacer; shims 2, 5, 10, 15, 25 mil.
    Section 5.1 (manual p. 12): spiral-wound spacer channels are usually
      run at 0.1-0.5 m/s crossflow.

  THE CHANNEL HEIGHT IS THE USER'S STACK.  The slot is 1.09 mm deep and is
  shimmed down to the installed feed spacer, so the operating channel is
  the spacer the user chose plus shims -- not a fact of the cell.  The
  0.787 mm (31 mil) below, the second-thinnest spacer Sterlitech ships, is
  an EDUCATED DEFAULT marked \`origin estimated; reviewStatus unverified;\`,
  as is the spacer porosity; the engine announces both on every run.  The
  slot depth is stored beside it as the MEASURED cell fact.

  THE BINDING TEMPERATURE LIMIT is the polypropylene feed spacer's 82 C
  (Table 2), not the steel body's 177 C -- the spacer is in the channel on
  every run.  No pH band (membrane dependent), no feed-flow limit and no
  rated test: a cell has none.
\\*---------------------------------------------------------------------------*/

name           SEPA_CF;
kind           membraneModule;
manufacturer   "Sterlitech Corporation";
format         flatSheetCell;      // spiralWound | flatSheetCell -- the case declares \`membrane\` beside \`module\`

activeArea     140 cm2;            // 22 in2 (manual Table 1)
slotDepth      1.09 mm;            // 0.075 in (manual Table 1) -- the MEASURED cell fact
slotWidth      95.3 mm;            // 3.75 in (manual Table 1); channel length = activeArea / slotWidth, derived in the engine
channelHeight  0.787 mm;           // 31 mil installed spacer -- ESTIMATE, see provenance
spacerPorosity 0.90;               // ESTIMATE, see provenance
holdUpVolume   70 ml;              // manual Table 1

//  The feed spacers Sterlitech ships (manual Table 3), in metres:
//  17, 31, 47 and 65 mil.  A user's channel is one of these plus shims.
availableSpacers ( 0.4318e-3  0.7874e-3  1.1938e-3  1.651e-3 );

limits
{
    P_max         69 bar;          // 1000 psig, 316SS cell body (Table 1)
    T_max         355.15 K;        // 82 C: the PP feed spacer / permeate carrier (Table 2) -- binding; the 316SS body allows 177 C
}

provenance
{
    source  "Sterlitech Corporation, SEPA CF Cell Assembly & Operation Manual, https://media.sterlitech.com/media/wysiwyg/Manual_SS_Sepa_CF.pdf, retrieved 2026-09-15";

    channelHeight
    {
        origin        estimated;
        reviewStatus  unverified;
        notes         "the SEPA CF channel height is the installed feed spacer plus shims (the 1.09 mm slot is shimmed down to it); 31 mil (0.787 mm) is one of the four spacers Sterlitech ships (manual Table 3); to be verified for your own shim/spacer stack";
    }
    spacerPorosity
    {
        origin        estimated;
        reviewStatus  unverified;
        notes         "0.90 is typical for commercial diamond feed spacers; to be verified by weighing a spacer coupon: porosity = 1 - m/(rho_PP * A * h)";
    }
}
`,re=`/*--------------------------------*- Choupo -*-----------------------*\\
  Material: Stainless steel 304 (AISI 304 / UNS S30400, 18Cr-8Ni austenitic)

  Costing + construction-limits record: F_M feeds the Turton costing
  pass (Guthrie's bare-module form); sigma_y / maxT / maxP bound the design envelope;
  thermalConductivity is the HX wall-conduction value.

  Sources
    F_M 2.34                 Turton et al., "Analysis, Synthesis and
                             Design of Chemical Processes", 4th ed.,
                             Appendix A (also flagged inline below).
    density 8000 kg/m3,
    thermalConductivity 16.2 W/(m K)
                             handbook-typical austenitic-stainless
                             values; primary re-citation pending
                             (IST review).
    sigma_y 138 MPa, maxT 870 K, maxP 100 bar
                             allowable-stress / service envelope of
                             pressure-vessel-code lineage; primary
                             re-citation pending (IST review).
\\*---------------------------------------------------------------------------*/

name      SS304;
kind           constructionMaterial;
density   8000;
F_M       2.34;      // Turton 4th ed. Appendix A
sigma_y   138;
maxT      870;
maxP      100;
thermalConductivity 16.2;  // W/(m·K)  (typical, for HX wall conduction)
`,oe=`/*--------------------------------*- Choupo -*-----------------------*\\
  Material: Stainless steel 316 (AISI 316 / UNS S31600,
  18Cr-10Ni-2Mo austenitic -- the Mo grade, better chloride resistance)

  Costing + construction-limits record: F_M feeds the Turton costing
  pass (Guthrie's bare-module form); sigma_y / maxT / maxP bound the design envelope;
  thermalConductivity is the HX wall-conduction value.

  Sources
    F_M 3.05                 Turton et al., "Analysis, Synthesis and
                             Design of Chemical Processes", 4th ed.,
                             Appendix A (also flagged inline below).
    density 8000 kg/m3,
    thermalConductivity 16.3 W/(m K)
                             handbook-typical austenitic-stainless
                             values; primary re-citation pending
                             (IST review).
    sigma_y 138 MPa, maxT 925 K, maxP 100 bar
                             allowable-stress / service envelope of
                             pressure-vessel-code lineage; primary
                             re-citation pending (IST review).
\\*---------------------------------------------------------------------------*/

name      SS316;
kind           constructionMaterial;
density   8000;
F_M       3.05;      // Turton 4th ed. Appendix A
sigma_y   138;
maxT      925;
maxP      100;
thermalConductivity 16.3;  // W/(m·K)  (typical, for HX wall conduction)
`,le=`/*--------------------------------*- Choupo -*-----------------------*\\
  Membrane MODULE: DuPont FilmTec SW30HR-380 element
  (the 8-inch x 40-inch seawater reverse-osmosis element)

  WHAT THIS RECORD IS.  The hardware the SW30HR membrane
  (data/standards/assets/SW30HR.dat, kind RO -- transport only) is wound
  into: active area, feed-channel geometry, the manufacturer's limits and
  the standard test the data sheet quotes.  \`module SW30HR-380;\` in a case.

  SOURCE OF THE FACTS (numbers transcribed; no prose):
      DuPont FilmTec SW30HR-380 Element Product Data Sheet,
      Form No. 45-D00971-en, Rev. 7, January 2026.
    Typical properties row: active area 380 ft2 (35 m2); feed spacer
      thickness 28 mil; permeate flow 6,900 gpd (26 m3/d); stabilized
      salt rejection 99.7 %, minimum 99.65 % -- at 32,000 ppm NaCl, 5 ppm
      boron, 800 psi (55 bar), 77 F (25 C), pH 8, 8 % recovery.
    Element dimensions: A 40.0 in (1,016 mm), B 7.9 in (201 mm),
      C 1.125 in ID (29 mm).
    Suggested operating conditions: max temperature 113 F (45 C); max
      pressure 1,200 psi (83 bar); max pressure drop 15 psi (1.0 bar) per
      element, 50 psi (3.5 bar) per pressure vessel; pH 2-11 continuous,
      1-13 short-term cleaning; SDI 5; free chlorine < 0.1 ppm.
    NOT stated on this sheet: a maximum feed flow (no limit declared below).

  THE SPACER IS A DATA-SHEET FACT HERE (28 mil), unlike on the NF270-4040
  sheet.  The spacer porosity and the leaf length are NOT stated and carry
  an EDUCATED value each, marked \`origin estimated; reviewStatus unverified;\`
  with a note saying how to verify it (Vitor Geraldes, 2026-09-15); the
  engine announces both on every run that reads this record.

  The rated test is VERIFIABLE: bin/curate/check_membrane_modules.py runs
  this element at the sheet's conditions and prints the engine's permeate
  flow and rejection beside the sheet's, as a measurement, never tuned.
\\*---------------------------------------------------------------------------*/

name           SW30HR-380;
kind           membraneModule;
manufacturer   "DuPont FilmTec";
membrane       SW30HR;             // the membrane record this element is wound with
format         spiralWound;        // spiralWound | flatSheetCell

activeArea     35 m2;              // 380 ft2 (data sheet)
channelHeight  0.7112 mm;          // 28 mil feed spacer thickness (data sheet)
spacerPorosity 0.90;               // ESTIMATE, see provenance
leafLength     0.95 m;             // ESTIMATE, see provenance (element A = 1,016 mm incl. end caps)

limits
{
    P_max         83 bar;          // 1,200 psi, maximum operating pressure
    T_max         318.15 K;        // 45 C (113 F), maximum operating temperature
    dP_max        1.0 bar;         // 15 psi per element (3.5 bar per vessel of >= 4)
    pH_min        2;               // continuous operation
    pH_max        11;
}

ratedTest
{
    solute            NaCl;
    feedMassFraction  32.0e-3;     // 32,000 ppm NaCl (+ 5 ppm boron, not modelled)
    P                 55 bar;      // 800 psi applied
    T                 298.15 K;    // 77 F (25 C), pH 8
    recovery          0.08;
    permeateFlow      26 m3/d;     // 6,900 gpd
    rejection         0.997;       // stabilized 99.7 % (minimum 99.65 %)
}

provenance
{
    source  "DuPont FilmTec SW30HR-380 Element Product Data Sheet, Form No. 45-D00971-en, Rev. 7, January 2026";

    channelHeight
    {
        origin   literature;
        method   "data sheet, Typical Properties: Feed Spacer Thickness 28 mil";
    }
    spacerPorosity
    {
        origin        estimated;
        reviewStatus  unverified;
        notes         "0.90 is typical for commercial diamond feed spacers; to be verified by weighing a spacer coupon: porosity = 1 - m/(rho_PP * A * h)";
    }
    leafLength
    {
        origin        estimated;
        reviewStatus  unverified;
        notes         "element length 1.016 m (dimension A) per the data sheet includes the end caps; the leaf length is not published; to be verified against the element's leaf dimensions (unroll one)";
    }
}
`,he=`/*--------------------------------*- Choupo -*-----------------------*\\
  Membrane: SW30HR-style high-rejection seawater RO
  (DuPont FilmTec SW30HR-380 archetype)

  A thin-film composite polyamide RO membrane for seawater
  desalination.  The values below are representative of the
  manufacturer-published envelope for clean-water permeance and
  NaCl rejection at standard test conditions (32 g/L NaCl,
  55 bar, 25 °C, 8 % recovery): observed NaCl rejection ≈ 99.7 %,
  water flux ≈ 14 LMH per bar of effective driving pressure.

  Solution-diffusion permeabilities (v0.26 transport model):
     A_w (water)  ≈ 1.0 × 10⁻⁶  m / (s · bar)
                   = 3.6 × 10⁻³  m / (h · bar)
                   = 14 L / (m² · h · bar)     (a.k.a. LMH/bar)

     B_s (NaCl)   ≈ 2.0 × 10⁻⁸  m / s          (m/s in the form
                                                  J_s = B_s · Δc
                                                  with Δc in kmol/m³)

  These numbers reproduce ~99 % observed rejection in
  membrane01_RO_NaCl_seawater within the standard concentration-
  polarization film model.  For research-grade modelling against a
  specific element, replace these values with regression fits to
  your own test-loop data.

  Source (named public document):
     DuPont Water Solutions, FilmTec SW30HR-380 Product Data Sheet
     (public).  Standard test conditions there: 32 000 ppm NaCl,
     55 bar (800 psi), 25 °C, pH 8, 8 % recovery — minimum salt
     rejection 99.60 %, stabilized 99.70 %.  A_w / B_s below are
     Choupo solution-diffusion fits reproducing that envelope,
     NOT vendor-tabulated coefficients.
\\*---------------------------------------------------------------------------*/

name           SW30HR;
kind           RO;
manufacturer   "DuPont FilmTec";

A_w            1.0e-6  m/s/bar;
//  PROVENANCE OF THE TRANSPORT PARAMETERS -- machine-readable, because a
//  tier that changes how a number should be READ must not live only in a
//  comment.  The header says these values 'reproduce' a published
//  rejection; that makes them a FIT to a sourced target, not a vendor
//  coefficient, and the two must never be read as the same thing.
provenance     fittedToCase;
fittedAgainst  membrane01_RO_NaCl_seawater;
intendedUse    pedagogicalCalibration;

permeabilities
{
    NaCl       2.0e-8  m/s;
    MgSO4      1.0e-9  m/s;     // essentially fully rejected
    glucose    5.0e-10 m/s;     // way below MWCO --- rejected
}

P_max          82.7;            // bar (1200 psi)
T_max          318;             // K (45 °C)
pH_min         2;
pH_max         11;
MWCO           100;              // Da (RO --- nominal "tight")
`,de=`/*--------------------------------*- Choupo -*--------------------------------*\\
  Adsorbent: Activated carbon (BPL)

  What this IS: the INTRINSIC identity of one adsorbent material -- name,
  material class and packed bulk density.  Nothing pair-dependent lives here:
  the per-species adsorption equilibria are (adsorbent x adsorbate) PAIR data
  and live one record per pair under
      data/standards/parameters/adsorption/equilibria/activatedCarbon/
  (migrated there 1:1 on 2026-07-12, numbers unchanged; the engine REFUSES a
  file that still embeds an isotherms block, and
  bin/curate/check_adsorption_tree.py gates the layout).  A species with no
  record in that catalogue adsorbs nothing -> reports fully to the raffinate.
\\*-----------------------------------------------------------------------------*/

kind adsorbent;
adsorbent
{
    name        activatedCarbon;
    type        "activated carbon (microporous)";
    rho_bulk    480;            // kg/m3 packed bulk density
}

provenance
{
    identity { origin literature; method "material class + packed bulk density: Yang, Gas Separation by Adsorption Processes (1987/1997) -- representative BPL-carbon value"; }
}
`,ce=`/*--------------------------------*- Choupo -*-----------------------*\\
  Material: Aluminium (wrought, commercially-pure 1xxx-class typical)

  Costing + construction-limits record: F_M feeds the Turton costing
  pass (Guthrie's bare-module form); sigma_y / maxT / maxP bound the design envelope;
  thermalConductivity is the HX wall-conduction value.

  Sources
    F_M 1.50                 Guthrie material-factor lineage (same family
                             as carbonSteel F_M 1.00 and the SS304/SS316
                             Turton 4th ed. Appendix A factors in this
                             folder); primary re-citation pending
                             (IST review).
    density 2700 kg/m3,
    thermalConductivity 205 W/(m K)
                             handbook-typical values for commercially
                             pure aluminium; primary re-citation pending
                             (IST review).
    sigma_y 80 MPa, maxT 500 K, maxP 50 bar
                             conservative service envelope for aluminium
                             process equipment; primary re-citation
                             pending (IST review).
\\*---------------------------------------------------------------------------*/

name      aluminium;
kind           constructionMaterial;
density   2700;
F_M       1.50;
sigma_y   80;
maxT      500;
maxP      50;
thermalConductivity 205;  // W/(m·K)  (typical, for HX wall conduction)
`,me=`/*--------------------------------*- Choupo -*-----------------------*\\
  Material: Carbon Steel (ASME SA-516 Gr. 70)  — baseline reference.

  PROVENANCE: THESE SIX NUMBERS ARE UNSOURCED DESIGN ASSERTIONS (AP6,
  2026-08-05).  Stated plainly because the record's own title names a code
  — ASME SA-516 Gr. 70 — and \`sigma_y 140 MPa @ 250 °C\` therefore READS as a
  code-derived allowable.  It may equally be a round engineering assertion;
  nothing here could tell you which, and all three sibling asset records
  carry a source block while this one did not.

  That matters more than for a peripheral record: carbonSteel is the
  REFERENCE material against which every costing \`F_M\` is normalised, so
  \`F_M 1.00\` is a definition rather than a measurement, while the other five
  are physical claims about a real alloy.

  A CITATION WAS DELIBERATELY NOT INVENTED.  Writing a plausible ASME clause
  would convert "unsourced" into "falsely sourced", and no reader and no gate
  can detect the second.  A visible gap is strictly better than an invisible
  falsehood — the same rule applied to the eighteen uncited species records
  the same day.

  CURATION REMEDY: replace this block with the code edition, table and year
  each value comes from (Sec. II Part D for the allowable stress), or keep
  this note if they are to remain teaching assertions.  Until then the
  numbers are usable and UNVERIFIED, and that is now said rather than
  implied.
\\*---------------------------------------------------------------------------*/

name      carbonSteel;
kind           constructionMaterial;
density   7850;      // kg/m³
F_M       1.00;      // Guthrie/Turton material factor (reference)
sigma_y   140;       // MPa  allowable stress @ 250 °C
maxT      700;       // K
maxP      100;       // bar  (typical pressure-vessel rating)
thermalConductivity 50;  // W/(m·K)  (typical, for HX wall conduction)
`,ue=`/*--------------------------------*- Choupo -*--------------------------------*\\
  Adsorbent: Zeolite 13X

  What this IS: the INTRINSIC identity of one adsorbent material -- name,
  material class and packed bulk density.  Nothing pair-dependent lives here:
  the per-species adsorption equilibria are (adsorbent x adsorbate) PAIR data
  and live one record per pair under
      data/standards/parameters/adsorption/equilibria/zeolite13X/
  (migrated there 1:1 on 2026-07-12, numbers unchanged; the engine REFUSES a
  file that still embeds an isotherms block, and
  bin/curate/check_adsorption_tree.py gates the layout).  A species with no
  record in that catalogue adsorbs nothing -> reports fully to the raffinate.
\\*-----------------------------------------------------------------------------*/

kind adsorbent;
adsorbent
{
    name        zeolite13X;
    type        "zeolite (Na-exchanged FAU)";
    rho_bulk    640;            // kg/m3 packed bulk density
}

provenance
{
    identity { origin literature; method "material class + packed bulk density: Yang, Gas Separation by Adsorption Processes (1987/1997) -- representative 13X value"; }
}
`,pe=`/*--------------------------------*- Choupo -*--------------------------------*\\
  Adsorbent: Zeolite 5A

  What this IS: the INTRINSIC identity of one adsorbent material -- name,
  material class and packed bulk density.  Nothing pair-dependent lives here:
  the per-species adsorption equilibria are (adsorbent x adsorbate) PAIR data
  and live one record per pair under
      data/standards/parameters/adsorption/equilibria/zeolite5A/
  (migrated there 1:1 on 2026-07-12, numbers unchanged; the engine REFUSES a
  file that still embeds an isotherms block, and
  bin/curate/check_adsorption_tree.py gates the layout).  A species with no
  record in that catalogue adsorbs nothing -> reports fully to the raffinate.
\\*-----------------------------------------------------------------------------*/

kind adsorbent;
adsorbent
{
    name        zeolite5A;
    type        "zeolite (Ca-exchanged LTA)";
    rho_bulk    700;            // kg/m3 packed bulk density
}

provenance
{
    identity { origin literature; method "material class + packed bulk density: Ruthven, Principles of Adsorption and Adsorption Processes (Wiley, 1984) -- representative 5A value"; }
}
`,k="plant/ammoniaReactor03_equilibriumApproach",D="system/postDict",C=[{unit:"separator",label:"high-pressure separator (220 bar design)",shipped:"SS316",pressureDesign:220},{unit:"converter",label:"catalyst vessel, 700 K (220 bar design)",shipped:"SS316",pressureDesign:220},{unit:"letdown",label:"let-down drum (25 bar design)",shipped:"carbonSteel",pressureDesign:25}],fe=Object.assign({"../../../../data/standards/assets/CMX_AMX.dat":Z,"../../../../data/standards/assets/EUR2C-7P18.dat":Q,"../../../../data/standards/assets/EurodiaED-100P-50.dat":ee,"../../../../data/standards/assets/NF270-4040.dat":te,"../../../../data/standards/assets/NF270.dat":ne,"../../../../data/standards/assets/NF270_dspmde.dat":ae,"../../../../data/standards/assets/SAC_Na.dat":se,"../../../../data/standards/assets/SEPA_CF.dat":ie,"../../../../data/standards/assets/SS304.dat":re,"../../../../data/standards/assets/SS316.dat":oe,"../../../../data/standards/assets/SW30HR-380.dat":le,"../../../../data/standards/assets/SW30HR.dat":he,"../../../../data/standards/assets/activatedCarbon.dat":de,"../../../../data/standards/assets/aluminium.dat":ce,"../../../../data/standards/assets/carbonSteel.dat":me,"../../../../data/standards/assets/zeolite13X.dat":ue,"../../../../data/standards/assets/zeolite5A.dat":pe}),E=t=>{if(typeof t=="number"&&Number.isFinite(t))return t;if(typeof t=="string"){const s=Number(t.trim().split(/\s+/)[0]);return Number.isFinite(s)?s:null}return null};function ge(t=fe){const s=[];for(const[r,i]of Object.entries(t)){let l;try{l=W(U(i))}catch{continue}if(l.kind!=="constructionMaterial")continue;const m=r.split("/").pop().replace(/\.dat$/,"");s.push({name:typeof l.name=="string"?l.name:m,density:E(l.density),F_M:E(l.F_M),sigma_y:E(l.sigma_y),maxT:E(l.maxT),maxP:E(l.maxP),thermalConductivity:E(l.thermalConductivity)})}return s.sort((r,i)=>r.name.localeCompare(i.name))}function be(t,s,r){const i=new RegExp(`unitName[ \\t]+${s}[ \\t]*;`).exec(t);if(!i)throw new Error(`postDict: no sizing entry for unit '${s}'`);const l=i.index+i[0].length,m=t.slice(l),d=/material[ \t]+([A-Za-z][A-Za-z0-9_.-]*)[ \t]*;/.exec(m),p=/unitName[ \t]+/.exec(m);if(!d||p&&p.index<d.index)throw new Error(`postDict: the entry for '${s}' declares no material of its own`);const S=l+d.index;return t.slice(0,S)+`material ${r};`+t.slice(S+d[0].length)}function ye(t,s){const r=B(k);if(!r?.files.rawFiles)throw new Error(`${k} is not in the bundled corpus`);const i={...r.files.rawFiles};return i[D]=be(i[D],t,s),i}function we(t,s){const r=t?.find(d=>d.unit===s||d.item===s);if(!r)return null;const i=d=>Number.isFinite(r.values[d])?r.values[d]:null,l=d=>{const p=r.cost?.factors?.[d];return p!==void 0&&Number.isFinite(p)?p:null},m=i("t_wall");return{material:r.material,t_wall_mm:m===null?null:m*1e3,weight_kg:i("weight"),D_m:i("D"),F_M:l("F_M"),F_P:l("F_P"),purchased:r.cost?.purchased??null,bareModule:r.cost?.bareModule??null,currency:r.cost?.currency??""}}function F(t,s){if(!t)return[];const r=`'${s}'`;return t.split(`
`).map(i=>i.trim()).filter(i=>i.includes(r)&&/\[(?:rating|validity|assumed|basis)\]|Vessel:|Turton costing/.test(i))}const ve=[{id:"loginow",cite:"A. W. Loginow, Stress Corrosion Cracking of Steel in Liquefied Ammonia Service -- A Recapitulation, Materials Performance (December 1986), reprinted in the National Board Bulletin (January 1989)",used:"read, through a fetch-and-summarise of the National Board's web reprint rather than the printed article: air (oxygen, even a few ppm) as the primary cause, the 1962 recommendation of at least 0.2 per cent water as an inhibitor, cracking concentrated in as-welded heat-affected zones and repairs, post-weld heat treatment after any welding, lower-strength steels being more resistant, and wet fluorescent magnetic-particle inspection.  Paraphrased in step 17."},{id:"loginow-phelps",cite:"A. W. Loginow and E. H. Phelps, Stress-corrosion cracking of steels in agricultural ammonia, Corrosion 18 (1962)",used:"the original 1962 study the recapitulation summarises.  NOT READ; named because it is the primary work."},{id:"csb-tesoro",cite:"U.S. Chemical Safety and Hazard Investigation Board, Tesoro Anacortes Refinery Fatal Explosion and Fire, final investigation report (1 May 2014)",used:"the investigation's web page was read: 2 April 2010, seven employees killed, a nearly forty-year-old heat exchanger that failed during a maintenance operation; the attribution to high temperature hydrogen attack is the CSB's own headline on that page.  The report itself NOT READ.  A US Government work."},{id:"api-941",cite:"API RP 941, Steels for Hydrogen Service at Elevated Temperatures and Pressures in Petroleum Refineries and Petrochemical Plants",used:"named as where the industry's operating-limit curves for hydrogen service live.  NOT READ; no curve or number from it is on this page, and Choupo does not transcribe it."},{id:"asme-iid",cite:"ASME Boiler and Pressure Vessel Code, Section II Part D (material properties) and Section VIII Division 1 (pressure vessels)",used:"named as where allowable stresses as a function of temperature, minimum design metal temperatures and the shell-thickness rule live.  NOT READ; the shell-thickness formula on this page is the one the engine runs, which its own header says was transcribed from Turton et al., App. A."},{id:"turton",cite:"R. Turton et al., Analysis, Synthesis and Design of Chemical Processes, 4th ed., Appendix A",used:"named as the source of the bare-module form and of the F_M the SS304 and SS316 records cite.  NOT READ for this page; every number shown from it is read from the engine (src/postProcessing/costing/Turton.cpp) or from a record."},{id:"corrosion-data",cite:"The corrosion data surveys published by AMPP (formerly NACE International), and ISO 15156 / NACE MR0175 for sour service",used:"named as where measured corrosion rates by alloy and medium, and the hardness limits for wet hydrogen sulphide service, live.  NOT READ; no rate or limit from them is on this page."},{id:"api-682",cite:"API 682, Pumps -- Shaft Sealing Systems for Centrifugal and Rotary Pumps",used:"named as the standard that numbers the seal flush and barrier arrangements the page describes generically.  NOT READ; no plan number is used."},{id:"astm-a240",cite:"ASTM A240 (stainless plate) and the Unified Numbering System for metals and alloys (SAE/ASTM)",used:"named as where the binding composition ranges of each grade live.  NOT READ; the compositions in steps 3 and 4 are nominal, rounded and labelled so."},{id:"callister",cite:"W. D. Callister and D. G. Rethwisch, Materials Science and Engineering: An Introduction (any recent edition)",used:"named as a standard text for the crystal structures and the iron-carbon diagram of steps 8 and 9.  NOT READ for this page; the constants used there (912 and 1538 degrees C, 0.022, 0.76 and 2.14 per cent carbon) are the iron-carbon diagram's own and appear in every such text."},{id:"iiw-ce",cite:"The International Institute of Welding carbon equivalent (after Dearden and O'Neill, 1940)",used:"the formula of step 12, in its common published form.  The original paper NOT READ; the threshold beside it is stated as a rule of thumb, not a code limit."},{id:"records",cite:"Choupo's own records data/standards/assets/carbonSteel.dat, SS304.dat, SS316.dat, aluminium.dat",used:"read: the numbers each record declares and what its own header says about where they came from (step 22 and the bench)."},{id:"peq-postdict",cite:"tutorials/plant/greenAmmoniaPEQ_baseCase/system/postDict",used:"read: the case's own material rule and what it does not check (steps 10, 16 and 22)."}],Te=[{n:1,title:"A plant is a set of containers that must not fail",body:"Every vessel, pipe, exchanger and pump casing in a chemical plant holds something that would rather be somewhere else: a gas at 200 bar, a liquid above its boiling point, an acid, a toxic.  Whether it stays inside is decided by the material of the wall, in four ways at once.  Corrosion: the fluid eats the wall, slowly and evenly, or quickly and in one spot.  Strength at temperature: the wall must carry the pressure at the temperature it actually sees, and steel that is strong at 20 degrees C is weaker at 500.  Toughness: the wall must bend before it breaks, and some steels lose that property in the cold.  Cost: equipment is bought by the kilogram, and the same vessel in a nickel alloy can cost several times what it costs in carbon steel.  A wrong choice shows up as a leak, a crack or a budget, and in the worst case as all three.  This is why the material of every item is chosen early, during the front end of a design, and written on the equipment list beside its size.",leadsTo:{tool:"front-end-loading",toolLabel:"Front-End Loading: how industry stages a design",stepTitle:"the stages of a design",body:"When in a design the material of each item is fixed, and at what fidelity it is costed, is the subject of the Front-End Loading page."}},{n:2,title:"The Pareto: carbon steel first, and why",body:"What follows is a TEACHING ORDERING -- the order in which an engineer reaches for materials -- and not a measured market share: no licence-clean source for one was found, and this page will not invent one.  First, by a wide margin, comes carbon steel: iron with a few tenths of a per cent of carbon and about one per cent of manganese.  Four reasons make it the default against which every other material must justify its premium.  It is CHEAP, the cheapest strong metal there is.  It is STRONG and DUCTILE at ambient temperature: it yields and bends long before it breaks, which is what lets a code design a vessel on a calculated stress.  It is WELDABLE, so a vessel can be built from rolled plate.  And it is AVAILABLE in every form a plant needs -- plate, seamless pipe, forgings, flanges, fittings, bolts -- from many mills, with decades of codes, inspection practice and failure history behind it.  Its weaknesses define everything else on this list: it rusts in water and moist air, so a wall is made thicker than strength needs (the corrosion allowance, step 14); it becomes brittle in the cold (step 10); it loses strength and creeps when hot (step 11); and hot hydrogen attacks it (step 16).  Every other family below exists because one of those weaknesses bit.  Put bluntly: without carbon steel there would have been no chemical engineering."},{n:3,title:"Austenitic stainless steel: 304 and 316",body:"Add at least about 10.5 per cent chromium to steel and a film of chromium oxide a few nanometres thick forms on its surface by itself; it is impervious, and if scratched it re-forms wherever oxygen reaches the metal.  That film -- PASSIVITY -- is what makes a steel stainless.  Add about 8 per cent nickel as well and the crystal structure stays face-centred cubic down to room temperature (step 8): this is AUSTENITIC stainless, the second family on the list and the workhorse wherever carbon steel would corrode or contaminate a product.  The grade 304 (UNS S30400, nominally 18 per cent chromium and 8 per cent nickel) is the general one.  The grade 316 (UNS S31600) adds about 2 per cent molybdenum, which makes the film far harder to break down locally where chlorides are present -- the pitting that ruins stainless steel in brines, seawater and many process streams.  An empirical index ranks the alloys for that resistance, and it is worth computing once.",formula:String.raw`\mathrm{PREN} = w_\mathrm{Cr} + 3.3\, w_\mathrm{Mo} + 16\, w_\mathrm{N}`,where:[{sym:"\\mathrm{PREN}",means:"the pitting resistance equivalent number: a ranking index, not a corrosion rate",unit:"-"},{sym:"w_\\mathrm{Cr}",means:"the chromium content of the alloy, per cent by mass",unit:"wt %"},{sym:"w_\\mathrm{Mo}",means:"the molybdenum content, per cent by mass",unit:"wt %"},{sym:"w_\\mathrm{N}",means:"the nitrogen content, per cent by mass",unit:"wt %"}],note:"On nominal, rounded compositions (the binding ranges are in the material specification): 304 with 18 Cr, 0 Mo and 0.05 N gives 18 + 0 + 0.8, about 19; 316 with 17 Cr, 2.1 Mo and 0.05 N gives 17 + 6.9 + 0.8, about 25; a 22 Cr duplex with 3 Mo and 0.17 N gives 22 + 9.9 + 2.7, about 35.  The coefficient on nitrogen differs between sources (16 is the common one, and some write 30); the index orders alloys against one another and says nothing about how fast any of them corrodes in your fluid."},{n:4,title:"When 316 is not enough: duplex, nickel alloys, titanium",body:"DUPLEX stainless steels (for example UNS S32205, nominally 22 per cent chromium, 5 nickel, 3 molybdenum) are roughly half austenite and half ferrite.  The ferrite gives them about twice the yield strength of 316, so walls are thinner, and far better resistance to chloride stress-corrosion cracking (step 15); their limits are a narrower temperature window and more demanding welding.  NICKEL ALLOYS are the next step up in price and in resistance: a nickel-molybdenum-chromium alloy such as UNS N10276 for hot chloride solutions and many reducing acids; a nickel-chromium-molybdenum alloy such as UNS N06625 for strength and corrosion together; a nickel-copper alloy such as UNS N04400 in hydrofluoric acid and seawater.  TITANIUM (commercially pure, UNS R50400) is nearly immune to seawater and to oxidising chloride solutions, which is why it is the tube of choice in seawater coolers and in wet chlorine; it is attacked by reducing acids and it can ignite in DRY chlorine, so the same metal is the answer in one chlorine service and a hazard in the next.  Each of these is bought only when a cheaper material has been shown to fail."},{n:5,title:"Copper alloys in exchangers, aluminium in the cold",body:"COPPER ALLOYS conduct heat well and resist marine fouling, which is why copper-nickel (90/10, UNS C70600) and brasses have long been used for tubes in cooling-water exchangers and condensers.  One rule overrides that: copper alloys crack under stress in the presence of ammonia, so an ammonia plant keeps copper and brass out of every wetted part.  ALUMINIUM is light, conducts heat superbly and -- because its crystal is face-centred cubic (step 10) -- stays tough down to the temperature of liquid nitrogen and below.  That is its niche in chemical plants: cryogenic service, such as the brazed plate-fin exchangers of air separation and gas liquefaction, beside austenitic stainless and nickel steels.  It is weak at high temperature and is attacked by alkalis and by mercury, which is why a gas plant removes even traces of mercury upstream of its aluminium exchangers."},{n:6,title:"Non-metallics, linings and refractories",body:"Some fluids defeat every affordable metal, and then the answer is a metal shell that carries the pressure with something else on the inside that carries the chemistry.  FLUOROPOLYMER LININGS (PTFE, PFA) resist almost every chemical, but they soften with temperature, gases slowly permeate them, and a lining can collapse under vacuum if it is not bonded or vented.  GLASS-LINED STEEL is the classic batch reactor of fine chemicals and pharmaceuticals: glass resists acids, but is damaged by hot alkalis, by thermal shock and by a dropped tool.  FIBRE-REINFORCED PLASTIC (FRP) tanks, pipes and scrubbers serve hydrochloric acid, hypochlorite and brines at modest temperature.  IMPERVIOUS GRAPHITE makes heat exchangers for hot hydrochloric and sulphuric acids.  REFRACTORIES -- firebrick and castable ceramic linings -- do the same job for temperature: in a furnace, a reformer or a sulphur-recovery reactor the lining keeps the steel shell cool enough to keep its strength, so the shell carries the pressure and the lining carries the heat.  The pattern is general: separate the job of holding pressure from the job of resisting the fluid, and give each to the cheapest material that can do it.  CLAD plate -- a few millimetres of stainless or nickel alloy bonded to a carbon-steel backing -- is the same idea in metal."},{n:7,title:"The Pareto, drawn",body:"The table below puts the families in the order this page has met them, with what each is first chosen for and what defeats it.  Its first four rows are a ladder: an engineer starts with carbon steel and climbs through the stainless steels to the nickel alloys only as far as the fluid, the temperature and the pressure force them to, because each rung costs more.  The rows below are not further rungs but answers to different problems -- seawater, heat transfer, the cold, a fluid no metal resists, a flame -- and some of them are cheaper than stainless.  It is a teaching ordering: the share of each family in a real plant's tonnage varies with the industry, and no number for it is given here."},{n:8,title:"Crystal structure: ferrite and austenite",body:"A metal is a crystal, and the arrangement of its atoms decides much of how it behaves.  Pure iron at room temperature is BODY-CENTRED CUBIC (BCC): an atom at each corner of a cube and one in the middle.  This is FERRITE, alpha iron.  Heated above 912 degrees C it rearranges into FACE-CENTRED CUBIC (FCC): an atom at each corner and one in the middle of each face -- AUSTENITE, gamma iron -- and it changes back to BCC (delta iron) just below its melting point of 1538 degrees C.  Alloying moves those boundaries: nickel, manganese and nitrogen widen the austenite field, enough nickel keeps steel FCC down to room temperature and below, and that is what an austenitic stainless steel is; chromium and molybdenum favour ferrite, and a duplex steel is balanced to hold the two in roughly equal parts.  The difference matters for one reason above all: an FCC crystal has many closely packed planes along which atoms can slide, a BCC crystal has fewer and needs thermal energy to use them, and that difference returns in step 10."},{n:9,title:"Carbon in iron: the iron-carbon diagram",body:"Carbon atoms are small enough to sit in the gaps between iron atoms, and how many fit depends on the crystal.  Ferrite dissolves almost none -- at most about 0.022 per cent by mass, at 727 degrees C -- while austenite dissolves up to about 2.14 per cent.  So when a steel cools from the austenite field the carbon that ferrite cannot hold comes out as iron carbide, cementite, Fe3C.  At 0.76 per cent carbon (the eutectoid) the whole of the austenite turns at 727 degrees C into PEARLITE, fine alternating plates of ferrite and cementite.  A pressure-vessel plate carries a few tenths of a per cent of carbon and is mostly soft ferrite with some pearlite: strong enough, ductile, weldable.  More carbon makes a steel stronger and harder, and if it is cooled FAST from austenite the carbon has no time to leave and is trapped in a hard, brittle structure, MARTENSITE -- which is a tool steel's virtue and a welded vessel's danger (step 12).  This is the level at which a chemical engineer needs the iron-carbon diagram: carbon content trades strength against weldability and toughness, and the cooling rate decides which structure you get."},{n:10,title:"Why carbon steel breaks in the cold and stainless does not",body:"Pull a ferritic steel bar at room temperature and it stretches, necks and tears slowly, absorbing a great deal of energy.  Do the same below its DUCTILE-BRITTLE TRANSITION and it snaps like glass, with a flat crystalline fracture and almost no energy absorbed.  The reason is the crystal of step 8.  In BCC iron the stress needed to make atoms slip rises steeply as the temperature falls, while the stress needed to split the crystal along a plane (cleavage) hardly changes; below the transition the steel cleaves before it can yield.  An FCC metal -- austenitic stainless, aluminium, copper, nickel -- slips easily at any temperature and has no such transition.  The impact test (a notched bar struck by a pendulum, the absorbed energy plotted against temperature) is how the transition is measured, and pressure-vessel codes set for each carbon steel a minimum design metal temperature, with impact testing below it; impact-tested carbon steels serve well below 0 degrees C.  The green-ammonia base case shows the consequence of a record that carries no such field: its postDict (tutorials/plant/greenAmmoniaPEQ_baseCase/system/postDict:179-183) puts SS304 on every item that goes below 0 degrees C, because austenitic stainless keeps its toughness there and the generic carbon-steel record states no minimum design temperature -- a conservative rule, taken because the data to do better is not in the tree."},{n:11,title:"Creep: strength that leaks away with time",body:"Hot enough, a metal under a constant load stretches slowly and never stops: CREEP.  It becomes important at roughly four tenths of the absolute melting temperature, a ratio worth computing.  Above that temperature an allowable stress is no longer set by the strength measured in a short test but by the stress the metal survives for the design life without rupturing, and the code tables of allowable stress fall steeply with temperature for that reason.  Carbon steel reaches that range in fired heaters, reformers and hot reactors; chromium-molybdenum steels (for example 1.25 Cr-0.5 Mo and 2.25 Cr-1 Mo) take over there, and austenitic stainless and nickel alloys above them.",formula:String.raw`T_\mathrm{h} = \frac{T}{T_\mathrm{m}}`,where:[{sym:"T_\\mathrm{h}",means:"the homologous temperature: the service temperature as a fraction of the melting temperature",unit:"-"},{sym:"T",means:"the metal's service temperature",unit:"K"},{sym:"T_\\mathrm{m}",means:"the metal's melting temperature (for iron 1811 K, 1538 degrees C)",unit:"K"}],derivation:[{step:"Put creep's rough threshold, four tenths, into the ratio for iron and solve for the service temperature.",eq:String.raw`T_\mathrm{h} \approx 0.4 \;\Rightarrow\; T \approx 0.4 \times 1811\ \text{K} \approx 724\ \text{K} \approx 451\ {}^{\circ}\text{C}`}],note:"Four tenths is a rule of thumb that locates the range, not a design limit; where creep governs a given steel is in the code's own allowable-stress tables."},{n:12,title:"Welding and the heat-affected zone",body:"A weld is a small casting made inside a large plate.  The metal beside it -- the HEAT-AFFECTED ZONE (HAZ) -- is heated into the austenite field and then cooled fast by the cold plate around it, which is exactly the recipe for martensite in step 9.  A hard, brittle HAZ, with hydrogen from moisture in the welding consumables and the residual stress the weld leaves as it shrinks, is how steels crack hours after welding (cold cracking).  Weldability is therefore judged from the composition, with one number that weighs each alloying element by how much it promotes a hard HAZ.  The remedies are a low carbon equivalent, low-hydrogen consumables, PREHEAT (to slow the cooling) and POST-WELD HEAT TREATMENT (PWHT): heating the finished vessel to temper the HAZ and relax the residual stress, which is required by the codes above a thickness and is a standard defence where carbon steel cracks under stress in a fluid -- caustic, amines, and the ammonia of step 17.",formula:String.raw`\mathrm{CE} = w_\mathrm{C} + \frac{w_\mathrm{Mn}}{6} + \frac{w_\mathrm{Cr} + w_\mathrm{Mo} + w_\mathrm{V}}{5} + \frac{w_\mathrm{Ni} + w_\mathrm{Cu}}{15}`,where:[{sym:"\\mathrm{CE}",means:"the carbon equivalent (the International Institute of Welding form)",unit:"wt %"},{sym:"w_\\mathrm{C}",means:"the carbon content",unit:"wt %"},{sym:"w_\\mathrm{Mn}",means:"the manganese content",unit:"wt %"},{sym:"w_\\mathrm{V}",means:"the vanadium content",unit:"wt %"},{sym:"w_\\mathrm{Ni}",means:"the nickel content",unit:"wt %"},{sym:"w_\\mathrm{Cu}",means:"the copper content",unit:"wt %"}],note:"A plate with 0.20 per cent carbon and 1.0 per cent manganese and nothing else gives 0.20 + 1.0/6 = 0.37.  A common rule of thumb is that a carbon equivalent below about 0.4 welds without special precautions and that higher values call for preheat; the binding rule depends on the thickness, the process and the code."},{n:13,title:"Sensitisation, the L grades, and why passivity can fail",body:"Austenitic stainless has its own welding trap.  Held between roughly 450 and 850 degrees C -- which the HAZ of every weld passes through -- the carbon in 304 combines with chromium into chromium carbides along the grain boundaries.  The metal right beside each boundary is left with too little chromium to stay passive, and in an acid it corrodes along the boundaries while the grains survive: SENSITISATION, also called weld decay.  Two remedies, both by composition: the L GRADES (304L, UNS S30403, and 316L, UNS S31603) hold carbon below 0.03 per cent so there is too little to form the carbides, and the STABILISED grades (321 and 347) add titanium or niobium, which take the carbon first.  Passivity itself can fail in other ways, and knowing them is knowing stainless: it needs oxygen to heal, so in a REDUCING acid or a stagnant crevice starved of oxygen the film is not repaired; and chloride ions break it down locally, so the attack concentrates in a pit or a crack instead of spreading evenly.  A stainless steel either barely corrodes or fails in one spot, and the second is the more dangerous because a wall thickness measurement cannot see it."},{n:14,title:"Corrosion rate, corrosion allowance and the wall",body:"Where a metal corrodes evenly, the design pays for the loss in advance.  A corrosion rate -- millimetres per year, from coupon tests in the process fluid, plant experience or the published corrosion data surveys (where those binding numbers live; none is copied here) -- times the design life is the CORROSION ALLOWANCE, and it is added to the thickness that the pressure demands.  The thickness that the pressure demands follows from one force balance, and this is the formula the engine runs on every vessel it sizes (src/postProcessing/sizing/VesselMechanics.cpp:33-34).  Two consequences are worth seeing in it.  The allowance is added, not multiplied: on a low-pressure vessel it can be most of the wall.  And the material enters through S alone: a material with half the allowable stress needs about twice the pressure wall.  An allowance only works for EVEN corrosion; pitting, cracking and intergranular attack (steps 13 and 15) are not paid for by extra metal and must be avoided by the choice of material.",formula:String.raw`c_\mathrm{a} = r\, t_\mathrm{life}, \qquad t = \frac{P\, D}{2\, S\, E - 1.2\, P} + c_\mathrm{a}`,where:[{sym:"c_\\mathrm{a}",means:"the corrosion allowance: metal added to be eaten (the engine's corrosionAllow; 3 mm when a case declares none, announced)",unit:"m"},{sym:"r",means:"the uniform corrosion rate in the service",unit:"m/yr"},{sym:"t_\\mathrm{life}",means:"the design life",unit:"yr"},{sym:"t",means:"the shell wall thickness",unit:"m"},{sym:"P",means:"the design pressure, gauge (the case's pressureDesign)",unit:"Pa"},{sym:"D",means:"the shell diameter",unit:"m"},{sym:"S",means:"the allowable stress of the material at the design temperature (in Choupo, the record's sigma_y)",unit:"Pa"},{sym:"E",means:"the joint efficiency of the welds (1 for a fully radiographed joint; the engine's jointEfficiency)",unit:"-"},{sym:"\\sigma_\\theta",means:"the hoop (circumferential) stress in the wall",unit:"Pa"},{sym:"L",means:"a length of shell, which cancels",unit:"m"}],derivation:[{step:"Cut a length L of shell along its axis and balance the forces on one half: the pressure acting on the projected area D L against the hoop stress in the two cut walls.",eq:String.raw`2\, \sigma_\theta\, t\, L = P\, D\, L \;\Rightarrow\; \sigma_\theta = \frac{P\, D}{2\, t}`},{step:"Let the hoop stress reach the allowable stress, reduced by the efficiency of the longitudinal weld, and solve for the thickness.",eq:String.raw`t = \frac{P\, D}{2\, S\, E}`},{step:"The pressure-vessel code keeps the inside diameter and adds a term that corrects the thin-wall assumption; with D the inside diameter it reads as the engine writes it.",eq:String.raw`t = \frac{P\, D}{2\, S\, E - 1.2\, P}`},{step:"Then pay for the corrosion in advance.",eq:String.raw`t = \frac{P\, D}{2\, S\, E - 1.2\, P} + r\, t_\mathrm{life}`}],note:"A rate of 0.1 mm per year over 20 years is an allowance of 2 mm.  The 3 mm the engine assumes when a case is silent (src/postProcessing/sizing/DesignDefaults.cpp:46) is announced on every run that uses it and listed on the design sheet as assumed."},{n:15,title:"The temperature window, and the mechanisms that crack",body:"Every material has a temperature WINDOW.  Its lower edge is toughness (step 10); its upper edge is strength and creep (step 11), scaling in air, and attack by hot gases.  Within the window the mechanisms that cause sudden failures in chemical plants are not the even corrosion an allowance pays for, but a few localised ones.  CHLORIDE STRESS-CORROSION CRACKING of austenitic stainless needs three things at once -- tensile stress (residual from welding is enough), chlorides, and a temperature above roughly 60 degrees C -- and then cracks a wall through in months; it is classically found under wet insulation, where rainwater leaches chlorides onto hot pipe.  The remedies are a duplex or a nickel alloy, or keeping one of the three away.  PITTING AND CREVICE CORROSION are the local breakdown of passivity of step 13, ranked by the PREN of step 3.  HYDROGEN EMBRITTLEMENT: atomic hydrogen, made at a corroding surface -- above all in wet hydrogen sulphide -- enters a high-strength steel and makes it crack under stress at room temperature; sour-service standards limit the hardness of steels and welds for that reason (ISO 15156 / NACE MR0175, named and not read)."},{n:16,title:"High temperature hydrogen attack",body:"Hot hydrogen at high pressure does something different, and it matters to every ammonia, methanol, hydrotreating and refinery plant.  Hydrogen diffuses into carbon steel and reacts with the carbide of step 9 to make methane.  Methane molecules are too large to diffuse out; they collect at grain boundaries as bubbles under high pressure, link into fissures, and leave behind a steel stripped of carbon and weakened -- HIGH TEMPERATURE HYDROGEN ATTACK (HTHA).  It gives no warning a thickness gauge can read.  Alloying with chromium and molybdenum forms carbides that hydrogen cannot reduce, which is why Cr-Mo steels and stainless are used in hot hydrogen.  The industry's operating limits for each steel, curves of hydrogen partial pressure against temperature, are published in API RP 941; Choupo does not transcribe them and this page shows none.  On 2 April 2010 a nearly forty-year-old heat exchanger failed at the Tesoro refinery in Anacortes, Washington, killing seven employees, and the US Chemical Safety Board attributed the failure to HTHA.  The green-ammonia base case says plainly that its records carry no hydrogen-service limit and that whether carbon steel resists hydrogen at its partial pressures and temperatures is NOT checked (tutorials/plant/greenAmmoniaPEQ_baseCase/system/postDict:183-187).",formula:String.raw`\ce{Fe3C + 2H2 -> 3Fe + CH4}`},{n:17,title:"Ammonia stress-corrosion cracking of carbon steel",body:"The ammonia projects meet one more mechanism.  Carbon and low-alloy steels in liquid anhydrous ammonia -- storage spheres, transport tanks, the agricultural nurse tanks where the problem was first seen -- crack under stress.  Loginow's recapitulation of three decades of field and laboratory experience (read for this page; Materials Performance, 1986) identifies AIR as the primary cause: even a few parts per million of oxygen in the ammonia is enough.  WATER inhibits it: the 1962 recommendation of Loginow and Phelps was that ammonia should carry at least 0.2 per cent water, and the article stresses that the water must be present all the time, because ammonia that condenses on cool steel in the vapour space carries less water and more oxygen than the liquid.  The cracks concentrate in as-welded heat-affected zones and repair welds; susceptibility rises with stress and with the strength of the steel.  So the classic mitigations are the ones this page has already built: exclude air (purge new vessels, discharge non-condensables), keep the water in, POST-WELD HEAT TREAT after any welding (step 12), prefer lower-strength steels, and inspect periodically -- wet fluorescent magnetic-particle testing is the method the article names as most sensitive.  Choupo's records hold none of this: a record has no field for a water content or an oxygen limit, and it is the designer's question, not the simulator's."},{n:18,title:"Cost: the material factor, and what it multiplies",body:"A material is finally chosen against its price, and in a bare-module estimate the material enters as one factor on part of the purchased cost (src/postProcessing/costing/Turton.cpp:704-706).  Two things in the form are easy to miss.  F_M multiplies only the B_2 part: the installation that B_1 stands for -- foundations, piping, instruments, labour -- costs the same whatever the shell is made of.  And the material enters TWICE: through F_M, and through the pressure factor, which for a vessel is the engine's own wall formula over a reference thickness (Turton.cpp:323-328), so a weaker material raises F_P as well.  The cheapest material is the one whose total cost over the plant's life is lowest, which can be a dearer alloy installed once rather than carbon steel replaced twice; the engine prices what is bought, not what is replaced.",formula:String.raw`C_\mathrm{BM} = C_p\,(B_1 + B_2\, F_M\, F_P), \qquad F_P = \max\!\left(\frac{t_P + 0.00315}{0.0063},\; 1\right), \qquad t_P = \frac{P_\mathrm{g}\, D}{2\,(S - 0.6\, P_\mathrm{g})}`,where:[{sym:"C_\\mathrm{BM}",means:"the bare-module cost of the item",unit:"EUR"},{sym:"C_p",means:"the purchased cost of the item in carbon steel at ambient pressure, from the size correlation",unit:"EUR"},{sym:"B_1",means:"the bare-module constant that does not scale with material or pressure",unit:"-"},{sym:"B_2",means:"the bare-module constant that does",unit:"-"},{sym:"F_M",means:"the material factor, read from the material record (carbon steel = 1)",unit:"-"},{sym:"F_P",means:"the pressure factor",unit:"-"},{sym:"t_P",means:"the wall the pressure factor computes, without corrosion allowance or joint efficiency",unit:"m"},{sym:"P_\\mathrm{g}",means:"the gauge pressure the costing uses: the case's pressureDesign, read as gauge (Turton.cpp:667)",unit:"bar"}],note:"0.00315 m and 0.0063 m are the reference corrosion allowance and the reference minimum thickness of the textbook correlation, as the engine writes them at Turton.cpp:328; S and P_g are in the same unit there (bar).  The wall on the design sheet and the wall inside F_P are different numbers on purpose: one is the shell the case declared, the other the correlation's own reference."},{n:19,title:"Where a plant actually leaks: joints and shafts",body:"A welded wall rarely leaks.  A plant leaks at its JOINTS -- every flange, every valve stem, every pump shaft -- because there two parts that can move against each other must be made to seal.  A GASKET is a softer element squeezed between two flanges by the bolts: it must flow into the roughness of the flange faces, stay tight as the flanges rotate under pressure and as the joint heats and cools, and not creep away from the bolt load over the years.  The common families: compressed fibre sheet for utilities; PTFE sheet, filled or expanded to resist the cold flow of plain PTFE, where chemical resistance matters; FLEXIBLE GRAPHITE for high temperature and broad chemical resistance (it oxidises in hot air, so it is often protected inside a metal construction); SPIRAL-WOUND gaskets -- a V-shaped metal strip wound with a graphite or PTFE filler, held by inner and outer rings -- the standard for process flanges at higher pressures and temperatures; and solid METAL RING-TYPE JOINTS, seated in machined grooves, for the highest pressures.  A gasket is chosen by the fluid, the temperature, the pressure class and the flange facing together, and its metal parts must suit the fluid just as the vessel's do."},{n:20,title:"Packing and the mechanical seal",body:"A shaft that turns or a stem that moves cannot be gasketed.  The oldest answer is PACKING: rings of braided graphite or PTFE yarn compressed around the shaft by a gland.  On a pump shaft packing must leak a little to stay cool and lubricated, which is acceptable for water and not for a hydrocarbon or a toxic.  The MECHANICAL SEAL replaced it in process pumps: two flat, lapped rings, one turning with the shaft and one fixed in the housing, pressed together by springs and by the fluid's own pressure, running on a liquid film about a micrometre thick.  The faces are a pair: commonly a hard silicon carbide against a softer carbon-graphite, which forgives a brief dry run; or silicon carbide or tungsten carbide against itself where the fluid carries abrasive solids.  Small elastomer or PTFE rings seal the faces to the shaft and the housing (the SECONDARY seals of step 21).  The ARRANGEMENT follows from the hazard.  A SINGLE seal for benign fluids.  A DUAL seal for hazardous ones: in the PRESSURISED form (often called double) a clean barrier fluid between two seals is held above the process pressure, so any leak is barrier fluid going into the process and nothing goes out; in the UNPRESSURISED form (often called tandem) a buffer fluid at low pressure sits between them and the outer seal is a backup that catches what the inner one lets by.  Around the seal, auxiliary piping cools and cleans it: a flush from the pump's own discharge or from a clean external source, a quench of steam or water on the atmospheric side, a barrier or buffer system.  These arrangements are numbered as plans in API 682 (named, not read).  Where no leak at all is acceptable, the seal is removed altogether: a magnetic-drive or a canned-motor pump has no shaft passing through the casing."},{n:21,title:"Elastomers and chemical compatibility",body:"The secondary seals of a mechanical seal, the O-rings of valves and the linings of hoses are ELASTOMERS, and each family resists some fluids and is destroyed by others.  NBR (nitrile) resists mineral oils and many hydrocarbons and is cheap, but ages in ozone and swells in ketones.  EPDM (ethylene-propylene) resists water, steam, alkalis and ketones, and swells badly in hydrocarbon oils.  FKM (fluorocarbon) resists hydrocarbons and many acids up to about 200 degrees C, but standard grades are attacked by amines, by ammonia and by ketones.  FFKM (perfluoroelastomer) resists almost everything, at many times the price.  COMPATIBILITY is therefore a property of the PAIR -- this elastomer in this fluid at this temperature and concentration -- and it is read from the manufacturers' compatibility charts and confirmed by immersion tests, never assumed from the family name; none of those charts is reproduced here.  One more mechanism belongs to high-pressure gas service such as the ammonia loop: gas dissolves in the elastomer at pressure and, when the pressure falls quickly, comes out faster than it can diffuse away and blisters or splits the ring from inside (rapid gas decompression), so such services specify grades rated for it."},{n:22,title:"What Choupo does with a material",body:"A case names a material per sized item, as one word in its system/postDict -- `material SS316;` -- and the engine reads that record from data/standards/assets/ (only records declaring `kind constructionMaterial`).  Each field has a reader, and some have none.  The record's sigma_y is used as the ALLOWABLE stress S of step 14 (src/postProcessing/sizing/VesselMechanics.cpp:30), although its name says yield strength: the header of the material type calls it the allowable stress (src/materials/Material.H:55), and carbonSteel's 140 MPa is labelled as an allowable at 250 degrees C.  The density gives the shell's weight, which the design sheet publishes; the vessel's cost correlation, though, is sized on its VOLUME (the size key V_R, src/postProcessing/costing/Turton.cpp:80), so the weight -- and the density with it -- moves no euro.  F_M multiplies the cost (src/postProcessing/costing/Turton.cpp:704-706), and sigma_y enters the cost again through F_P.  maxP is compared with the design pressure by the vessel sizers (src/postProcessing/sizing/MaterialLimits.cpp:41), and maxT, read by the loader (src/materials/MaterialRegistry.cpp:58), with the hottest stream on each sized item's ports (src/postProcessing/sizing/MaterialLimits.cpp:56-57) -- Choupo has no design temperature, so that is a lower bound on what the metal sees.  Both WARN and go on: nothing is refused, and no wall changes, because a record holds ONE allowable stress for every temperature.  A careful case applies the temperature rule itself: the green-ammonia base case puts SS316 wherever the process side exceeds the carbon-steel record's maxT (tutorials/plant/greenAmmoniaPEQ_baseCase/system/postDict:179-180) -- the author's rule, which the engine now checks and announces when broken, and does not choose for anyone.  And no record carries a corrosion rate, a minimum design temperature, a hydrogen-service limit or a compatibility with any fluid.  What is sourced is said by each record: carbonSteel's own header calls its six numbers UNSOURCED design assertions (AP6, 2026-08-05); SS304's and SS316's F_M cite Turton's Appendix A and the rest of their numbers say primary re-citation pending; aluminium's F_M is of the same lineage and pending re-citation too.  So the engine does with a material exactly two things -- it sizes the wall and it prices the metal -- and the choosing, which is everything else on this page, stays the engineer's.",formula:String.raw`m = \rho\, \pi\, D\, H\, t`,where:[{sym:"m",means:"the mass of the cylindrical shell, without heads (the engine's weight)",unit:"kg"},{sym:"\\pi",means:"the circle constant",unit:"-"},{sym:"\\rho",means:"the density from the material record",unit:"kg/m3"},{sym:"H",means:"the shell height (the engine's H = (L/D) D)",unit:"m"}],note:"The weight is VesselMechanics.cpp:35 exactly: the cylinder alone, no heads, no nozzles."},{n:23,title:"On the bench: one vessel, every material the records carry",body:"The bench below re-runs a case of the corpus in your browser, ammoniaReactor03_equilibriumApproach -- an ammonia synthesis loop at 200 bar whose postDict sizes three vessels -- with ONE vessel's material word changed, once for each construction-material record in the tree.  Everything in its table is what the engine published for that vessel: the wall, the weight, F_M, F_P and the cost, with every warning it raised, verbatim.  Things to look for.  SS304 and SS316 give the SAME wall, because both records declare the same sigma_y; only the price differs, through F_M.  Aluminium needs a thicker wall, because its allowable stress is lower, yet the shell weighs less, because its density is about a third of steel's -- and the weight changes no price, because a vessel is costed on its volume.  At 220 bar every record's maxP is exceeded and the engine says so -- and prices the vessel anyway, aluminium included, at a wall more than a quarter of a metre thick that no one would build; that the price comes out below SS316's is the correlation extrapolated, not a recommendation.  Carbon steel is the cheapest choice on every vessel, which is step 2 in numbers.  And put aluminium on the 700 K catalyst vessel: its record declares a maxT of 500 K, and the engine says so in a second warning -- and then sizes and prices the vessel on the same allowable stress it would use at room temperature.  A warning is not a design: that is the lesson of step 22, made visible."}],Se=[{id:"no-corrosion",title:"No corrosion model",body:"The engine never computes a corrosion rate.  The allowance is a number the case declares (or the announced 3 mm default), and localised mechanisms -- pitting, cracking, hydrogen attack -- are not represented at all."},{id:"one-stress",title:"One allowable stress for every temperature",body:"A record holds a single sigma_y.  Real allowable stresses fall with temperature and, in the creep range, with design life; the engine sizes a 700 K vessel on the same stress as a 300 K one.  maxT is compared with the hottest port and announced, never applied to the stress, and no minimum design temperature exists in any record."},{id:"one-factor",title:"One material factor for every kind of item",body:"The record carries one F_M, used for whatever item names it.  The textbook the factors come from tabulates them by kind of equipment and by solid versus clad construction; the records have no field for either, and clad plate cannot be declared."},{id:"gauge-margin",title:"One pressure, read as gauge, written as absolute",body:"The wall and the pressure factor both read the case's pressureDesign as a GAUGE pressure (src/postProcessing/sizing/VesselMechanics.H:58-60, VesselMechanics.cpp:29 and src/postProcessing/costing/Turton.cpp:661-667), but most cases derive it as 1.1 times an ABSOLUTE stream pressure, so one bar of their margin is the atmosphere.  And the exchanger pressure factor is a polynomial its source states up to 140 bar g; an ammonia loop's exchangers sit above that, and the engine evaluates it there without a word."},{id:"four-records",title:"Four records, most of them unsourced",body:"Only carbon steel, SS304, SS316 and aluminium are in the tree; no duplex, nickel alloy, titanium, copper alloy or non-metallic has a record, so the families of Part 2 beyond these cannot be costed.  carbonSteel's numbers are unsourced design assertions by its own header, and only two F_M values cite a source."},{id:"no-seals",title:"No seals, gaskets or elastomers",body:"Nothing in the engine models a flange, a gasket, a packing or a mechanical seal, and no record says which elastomer suits which fluid.  Part 5 is description, with nothing run behind it."}],Ee=[{family:"carbon steel",firstFor:"the default: cheap, strong, weldable, available in every form",defeatedBy:"corrosion in water and acids, cold (brittleness), heat (creep), hot hydrogen"},{family:"austenitic stainless (304/304L, 316/316L)",firstFor:"corrosion carbon steel cannot stand, product purity, the cold",defeatedBy:"chlorides (pitting, stress-corrosion cracking), reducing acids, sensitisation"},{family:"duplex stainless",firstFor:"chlorides with strength: thinner walls, resistance to cracking",defeatedBy:"a narrower temperature window, demanding welding"},{family:"nickel alloys",firstFor:"hot chlorides, reducing acids, hydrofluoric acid",defeatedBy:"price"},{family:"titanium",firstFor:"seawater, oxidising chloride solutions, wet chlorine",defeatedBy:"reducing acids; it can ignite in dry chlorine"},{family:"copper alloys",firstFor:"cooling-water and condenser tubes",defeatedBy:"ammonia (stress-corrosion cracking)"},{family:"aluminium (and nickel steels, austenitics)",firstFor:"cryogenic service",defeatedBy:"heat, alkalis, mercury"},{family:"linings and non-metallics (PTFE/PFA, glass, FRP, graphite)",firstFor:"fluids no affordable metal resists",defeatedBy:"temperature, vacuum, thermal and mechanical shock"},{family:"refractories",firstFor:"keeping a steel shell cool in furnaces and hot reactors",defeatedBy:"spalling, erosion; they carry no pressure"}],o=t=>{const s=Te.find(r=>r.n===t);return s?e.jsx(J,{step:s},t):null},Ae="1px solid var(--mantine-color-default-border)",y=(t,s)=>t==null||!Number.isFinite(t)?"—":t.toFixed(s),Ce=t=>t==null||!Number.isFinite(t)?"—":(t/1e3).toFixed(1);function ke(){return e.jsxs(w,{"data-pan-x":"",style:{width:"100%",overflowX:"auto"},children:[e.jsxs(n,{striped:!0,withTableBorder:!0,fz:"xs",miw:560,children:[e.jsx(n.Thead,{children:e.jsxs(n.Tr,{children:[e.jsx(n.Th,{children:"family (in the order an engineer reaches for it)"}),e.jsx(n.Th,{children:"first chosen for"}),e.jsx(n.Th,{children:"what defeats it"})]})}),e.jsx(n.Tbody,{children:Ee.map(t=>e.jsxs(n.Tr,{children:[e.jsx(n.Td,{fw:600,children:t.family}),e.jsx(n.Td,{children:t.firstFor}),e.jsx(n.Td,{children:t.defeatedBy})]},t.family))})]}),e.jsx(O,{children:"A teaching ordering, not a measured market share: no row carries a number, and none was invented."})]})}function Ne(){const t=T.useMemo(()=>ge(),[]),[s,r]=T.useState(C[0].unit),i=C.find(a=>a.unit===s).shipped,[l,m]=T.useState(i),[d,p]=T.useState([]),[S,L]=T.useState(new Map),x=T.useRef(null),N=`${s}|${l}`,c=X(()=>(x.current=N,q(k,ye(s,l))),`${k}\0${N}`,"choupoSolve");T.useEffect(()=>{if(c.busy||x.current===null||c.result===null&&c.err===null)return;const a=x.current,h=a.split("|")[0],f=c.err!==null?{answer:null,lines:F(c.log,h),err:c.err}:{answer:we(c.result?.equipment,h),lines:F(c.log,h),err:null};if(L(u=>u.get(a)===f?u:new Map(u).set(a,f)),a===N&&d.length>0){const[u,..._]=d;p(_),m(u)}},[c.result,c.err,c.busy]);const H=a=>{r(a),p([]),m(C.find(h=>h.unit===a).shipped)},j=()=>{const a=t.map(u=>u.name).filter(u=>!S.has(`${s}|${u}`));if(a.length===0)return;const[h,...f]=a;p(f),m(h)},v=S.get(N);return e.jsxs(w,{p:"sm",style:{border:Ae,borderRadius:6},children:[e.jsx(g,{order:5,children:"The bench: one vessel, every material the records carry"}),e.jsxs(b,{size:"xs",c:"dimmed",mt:4,children:["Each choice re-runs ",k," in your browser with this vessel's `material` word in system/postDict changed, and keeps the engine's answer below.  The shipped material is the one the case declares."]}),e.jsxs(w,{mt:10,children:[e.jsx($,{label:"vessel",children:e.jsx(G,{size:"xs",fullWidth:!0,value:s,onChange:H,data:C.map(a=>({value:a.unit,label:a.unit}))})}),e.jsxs(b,{size:"xs",c:"dimmed",mt:2,children:[C.find(a=>a.unit===s).label,"; shipped as ",i,"."]})]}),e.jsxs(I,{gap:6,mt:8,children:[t.map(a=>e.jsxs(M,{size:"compact-xs",variant:l===a.name?"filled":"default",onClick:()=>{p([]),m(a.name)},children:[a.name,a.name===i?" (shipped)":""]},a.name)),e.jsx(M,{size:"compact-xs",variant:"light",onClick:j,children:"run every material in turn"})]}),e.jsxs(g,{order:6,mt:"sm",children:["What the engine said about ",s,", with ",l]}),c.busy||!v&&c.err===null?e.jsxs(I,{gap:"sm",mt:4,wrap:"nowrap",children:[e.jsx(K,{size:"xs"}),e.jsxs(b,{size:"xs",c:"dimmed",children:["solving the loop and sizing the vessels …",d.length>0?` (${d.length} more queued)`:""]})]}):v?.err?e.jsx(V,{color:"red",variant:"light",mt:4,title:"Refused -- the engine's message, verbatim",children:e.jsx(b,{size:"xs",ff:"monospace",style:{whiteSpace:"pre-wrap"},children:[...v.lines,v.err].join(`
`)})}):v&&v.lines.length>0?e.jsx(w,{mt:4,p:6,style:{background:"var(--mantine-color-default-hover)",borderRadius:4},children:v.lines.map((a,h)=>e.jsx(b,{size:"xs",ff:"monospace",style:{whiteSpace:"pre-wrap"},children:a},h))}):e.jsx(b,{size:"sm",mt:4,children:"Nothing announced about this vessel."}),e.jsx(w,{"data-pan-x":"",style:{width:"100%",overflowX:"auto"},mt:8,children:e.jsxs(n,{striped:!0,withTableBorder:!0,fz:"xs",miw:760,children:[e.jsxs(n.Thead,{children:[e.jsxs(n.Tr,{children:[e.jsx(n.Th,{rowSpan:2,children:"material"}),e.jsx(n.Th,{colSpan:5,ta:"center",children:"what the record declares"}),e.jsxs(n.Th,{colSpan:6,ta:"center",children:["what the engine published for ",s]})]}),e.jsxs(n.Tr,{children:[e.jsx(n.Th,{ta:"right",children:"sigma_y [MPa]"}),e.jsx(n.Th,{ta:"right",children:"density [kg/m3]"}),e.jsx(n.Th,{ta:"right",children:"F_M"}),e.jsx(n.Th,{ta:"right",children:"maxP [bar]"}),e.jsx(n.Th,{ta:"right",children:"maxT [K]"}),e.jsx(n.Th,{ta:"right",children:"wall [mm]"}),e.jsx(n.Th,{ta:"right",children:"weight [kg]"}),e.jsx(n.Th,{ta:"right",children:"F_M"}),e.jsx(n.Th,{ta:"right",children:"F_P"}),e.jsx(n.Th,{ta:"right",children:"C_BM [kEUR]"}),e.jsx(n.Th,{children:"rating warning"})]})]}),e.jsx(n.Tbody,{children:t.map(a=>{const h=S.get(`${s}|${a.name}`),f=h?.answer,u=h?.lines.filter(A=>A.includes("[rating]"))??[],_=[u.some(A=>A.includes("design pressure"))?"maxP":"",u.some(A=>A.includes("service temperature"))?"maxT":""].filter(Boolean).join(", ");return e.jsxs(n.Tr,{children:[e.jsxs(n.Td,{fw:a.name===l?700:400,children:[a.name,a.name===i?" (shipped)":""]}),e.jsx(n.Td,{ta:"right",children:y(a.sigma_y,0)}),e.jsx(n.Td,{ta:"right",children:y(a.density,0)}),e.jsx(n.Td,{ta:"right",children:y(a.F_M,2)}),e.jsx(n.Td,{ta:"right",children:y(a.maxP,0)}),e.jsx(n.Td,{ta:"right",children:y(a.maxT,0)}),e.jsx(n.Td,{ta:"right",children:h?y(f?.t_wall_mm,1):"not run"}),e.jsx(n.Td,{ta:"right",children:h?y(f?.weight_kg,0):""}),e.jsx(n.Td,{ta:"right",children:h?y(f?.F_M,2):""}),e.jsx(n.Td,{ta:"right",children:h?y(f?.F_P,2):""}),e.jsx(n.Td,{ta:"right",children:h?Ce(f?.bareModule):""}),e.jsx(n.Td,{children:h?h.err?"refused":_?`yes (${_})`:"none":""})]},a.name)})})]})}),e.jsx(O,{children:"The record columns are the files' own declarations; the engine columns are read off the run's equipment list (its design sheet and cost row for this vessel), and nothing in them is computed on this page.  sigma_y is the number the engine uses as the allowable stress.  The engine compares maxP with the design pressure, and maxT with the hottest stream on the vessel's ports, and warns on each; it sizes and prices the vessel anyway, on the same allowable stress at every temperature.  Every number in these records is labelled by its own header as unsourced or awaiting primary re-citation, except the two F_M values that cite Turton."})]})}function Be(){return e.jsx(w,{style:{flex:1,minHeight:0,overflowY:"auto"},px:"md",py:"sm",children:e.jsxs(z,{gap:"md",style:{maxWidth:940,margin:"0 auto"},children:[e.jsxs(w,{children:[e.jsx(g,{order:3,children:"Materials of construction, seals and gaskets"}),e.jsx(b,{size:"sm",c:"dimmed",mt:4,children:"Why the material of every wall decides a plant; the Pareto of the materials chemical plants are built from, carbon steel first; the metallurgy behind it; how a material is chosen against corrosion, temperature, cracking and cost; how the joints and shafts are sealed; and what Choupo does with a material -- and what it does not."})]}),e.jsx(g,{order:4,children:"Part 1 — why materials decide a plant"}),o(1),e.jsx(g,{order:4,children:"Part 2 — the Pareto"}),o(2),o(3),o(4),o(5),o(6),o(7),e.jsx(ke,{}),e.jsx(g,{order:4,children:"Part 3 — metallurgy"}),o(8),o(9),o(10),o(11),o(12),o(13),e.jsx(g,{order:4,children:"Part 4 — how to choose"}),o(14),o(15),o(16),o(17),o(18),e.jsx(g,{order:4,children:"Part 5 — seals and gaskets"}),o(19),o(20),o(21),e.jsx(g,{order:4,children:"Part 6 — what Choupo does with a material"}),o(22),o(23),e.jsx(Ne,{}),e.jsx(Y,{limits:Se}),e.jsxs(b,{size:"sm",children:["The wall and the cost on the bench are the vessel-sizing and costing passes a whole plant goes through; for where in a design the material of each item is fixed, read"," ",e.jsx(R,{component:"button",type:"button",onClick:()=>P("front-end-loading"),children:"Front-End Loading"}),"; for the relief valve every pressure vessel on the bench would also need,"," ",e.jsx(R,{component:"button",type:"button",onClick:()=>P("overpressure"),children:"Designing for overpressure"}),"."]}),e.jsxs(w,{children:[e.jsx(g,{order:5,children:"Sources, and how each was reached"}),ve.map(t=>e.jsxs(w,{mt:6,children:[e.jsx(b,{size:"sm",children:t.cite}),e.jsx(b,{size:"xs",c:"dimmed",children:t.used})]},t.id))]})]})})}export{Be as MaterialsTool};
