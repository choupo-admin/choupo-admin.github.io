import{d2 as W,cy as j,d3 as U,cb as e,c as T,ao as V,au as b,as as g,b as D,cU as I,aq as t,cL as v,bR as B,am as G,p as N,d as x,R as z,a as X}from"./index-BgE7uk4k.js";import{u as K}from"./methodRun-DK653Imx.js";import{L as Y,c as J,P as O,K as $}from"./MethodsWorkspace-Cv2UPmsx.js";import{M as Z,a as Q,b as ee,P as ne}from"./materialsLesson-DxmD4rL5.js";import"./chapters-CJODx7Ln.js";import"./methodFeeds-JkGLb2SS.js";import"./catalogue-z3794rVW.js";import"./csvShape-bbHtF81D.js";import"./exploreMccabePopOut-GKwKlozb.js";import"./Slider-B2ZlBkw-.js";import"./Collapse-DnFazwCp.js";import"./CopyButton-qTkK-7IY.js";const te=`/*--------------------------------*- Choupo -*-----------------------*\\
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
`,ae=`/*--------------------------------*- Choupo -*-----------------------*\\
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
`,ie=`/*--------------------------------*- Choupo -*-----------------------*\\
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
`,se=`/*--------------------------------*- Choupo -*-----------------------*\\
  Membrane MODULE: a GENERIC 16-inch x 40-inch spiral-wound element
  (the 1600 ft2 class)

  WHAT THIS RECORD IS.  A standard SIZE, not a product: the element a case
  names with \`module Generic-16040;\` when it wants "a 16-inch element"
  rather than a manufacturer's.  It replaces the hand table that sat in
  SpiralWoundModule.cpp until 2026-10-24 (\`moduleDiameter 16 in;\`, an area
  and nothing else) -- the same area, now beside the leaves, the leaf length
  and the feed spacer, so the channel the feed sees is a declared fact.
  It names NO membrane: the case declares the one it winds in, beside
  \`module\` (\`membrane <name>;\`).

  EVERY GEOMETRIC VALUE IS AN ESTIMATE, marked \`origin estimated;
  reviewStatus unverified;\` with a note saying how to verify it, and the
  engine announces each one on every run that reads this record:
    * activeArea 148.6 m2 -- the 1600 ft2 class area of the retired table;
    * leaves 64 -- see its note;
    * leafLength 0.854 m -- the active leaf length (without glue strips) of
      the FilmTec FT30 SW2540 element in Schock & Miquel, Desalination 64 (1987) 339-352, Tab. 3, p. 344 (primary
      read): the axial dimension of a 40-inch element is set by its length,
      not its diameter, so the one measured leaf length serves the class.
  The element length 40 in (1.016 m) is the definition of the class.
  DERIVED, never stored: the leaf width W = A/(2 n L) = 1.3594 m.

  THE FEED SPACER is the FilmTec FT30 spacer Schock & Miquel measured
  (Tab. 1, p. 343): a documented spacer beats an invented one.  Its
  thickness (0.77 mm, 30 mil) sits between the 28 mil and 34 mil spacers
  current elements quote; that it is THIS class's spacer is an estimate.

  NO LIMITS ARE DECLARED: a generic class has no manufacturer's rating, and
  a limit the record does not declare is absent and not checked.
\\*---------------------------------------------------------------------------*/

name             Generic-16040;
kind             membraneModule;
manufacturer     "generic 16-inch x 40-inch element (estimated class)";
format           spiralWound;
feedSpacer       SchockMiquel-FilmTecFT30;   // the channel: data/standards/assets/

nominalDiameter  16 in;
elementLength    40 in;
activeArea       148.6 m2;            // ESTIMATE, see provenance
leaves           64;                  // ESTIMATE, see provenance
leafLength       0.854 m;              // ESTIMATE, see provenance

provenance
{
    source  "a generic size class (no data sheet); the leaf length from Schock & Miquel, Desalination 64 (1987) 339-352, Tab. 3, p. 344";
    nominalDiameter { origin assumed; method "the nominal size that names the class"; }
    elementLength   { origin assumed; method "40-inch elements: the length that names the class"; }
    activeArea
    {
        origin        estimated;
        reviewStatus  unverified;
        notes         "the 1600 ft2 class area of 16-inch x 40-inch elements, carried from the retired nominal table (manufacturers' sheets of the class quote it); to be verified against the data sheet of the element actually installed";
    }
    leaves
    {
        origin        estimated;
        reviewStatus  unverified;
        notes         "chosen so that the derived leaf width (A/(2 n L) = 1.36 m) equals that of the 8-inch estimate, for the reason given there (the permeate path, not the diameter, limits the leaf width; Schock & Miquel p. 349); to be verified against a large-format element's leaf count";
    }
    leafLength
    {
        origin        estimated;
        reviewStatus  unverified;
        notes         "the active leaf length without glue strips (854 mm) of the FilmTec FT30 SW2540 element, Schock & Miquel, Desalination 64 (1987) 339-352, Tab. 3, p. 344; applied to every 40-inch class because the axial dimension is set by the element length; to be verified by unrolling a leaf of the element installed";
    }
}
`,re=`/*--------------------------------*- Choupo -*-----------------------*\\
  Membrane MODULE: a GENERIC 2.5-inch x 40-inch spiral-wound element
  (the 28 ft2 class)

  WHAT THIS RECORD IS.  A standard SIZE, not a product: the element a case
  names with \`module Generic-2540;\` when it wants "a 2.5-inch element"
  rather than a manufacturer's.  It replaces the hand table that sat in
  SpiralWoundModule.cpp until 2026-10-24 (\`moduleDiameter 2.5 in;\`, an area
  and nothing else) -- the same area, now beside the leaves, the leaf length
  and the feed spacer, so the channel the feed sees is a declared fact.
  It names NO membrane: the case declares the one it winds in, beside
  \`module\` (\`membrane <name>;\`).

  EVERY GEOMETRIC VALUE IS AN ESTIMATE, marked \`origin estimated;
  reviewStatus unverified;\` with a note saying how to verify it, and the
  engine announces each one on every run that reads this record:
    * activeArea 2.6 m2 -- the 28 ft2 class area of the retired table;
    * leaves 1 -- see its note;
    * leafLength 0.854 m -- the active leaf length (without glue strips) of
      the FilmTec FT30 SW2540 element in Schock & Miquel, Desalination 64 (1987) 339-352, Tab. 3, p. 344 (primary
      read): the axial dimension of a 40-inch element is set by its length,
      not its diameter, so the one measured leaf length serves the class.
  The element length 40 in (1.016 m) is the definition of the class.
  DERIVED, never stored: the leaf width W = A/(2 n L) = 1.5222 m.

  THE FEED SPACER is the FilmTec FT30 spacer Schock & Miquel measured
  (Tab. 1, p. 343): a documented spacer beats an invented one.  Its
  thickness (0.77 mm, 30 mil) sits between the 28 mil and 34 mil spacers
  current elements quote; that it is THIS class's spacer is an estimate.

  NO LIMITS ARE DECLARED: a generic class has no manufacturer's rating, and
  a limit the record does not declare is absent and not checked.
\\*---------------------------------------------------------------------------*/

name             Generic-2540;
kind             membraneModule;
manufacturer     "generic 2.5-inch x 40-inch element (estimated class)";
format           spiralWound;
feedSpacer       SchockMiquel-FilmTecFT30;   // the channel: data/standards/assets/

nominalDiameter  2.5 in;
elementLength    40 in;
activeArea       2.6 m2;            // ESTIMATE, see provenance
leaves           1;                  // ESTIMATE, see provenance
leafLength       0.854 m;              // ESTIMATE, see provenance

provenance
{
    source  "a generic size class (no data sheet); the leaf length from Schock & Miquel, Desalination 64 (1987) 339-352, Tab. 3, p. 344";
    nominalDiameter { origin assumed; method "the nominal size that names the class"; }
    elementLength   { origin assumed; method "40-inch elements: the length that names the class"; }
    activeArea
    {
        origin        estimated;
        reviewStatus  unverified;
        notes         "the 28 ft2 class area of 2.5-inch x 40-inch elements, carried from the retired nominal table (manufacturers' sheets of the class quote it); to be verified against the data sheet of the element actually installed";
    }
    leaves
    {
        origin        estimated;
        reviewStatus  unverified;
        notes         "Schock & Miquel's Fig. 1 (p. 340) draws a spiral element 'with one leaf in its unwound state', and their Tab. 3 FT30 SW2540 dimensions (p. 344) describe one leaf; to be verified by unrolling an element of the class and counting its envelopes";
    }
    leafLength
    {
        origin        estimated;
        reviewStatus  unverified;
        notes         "the active leaf length without glue strips (854 mm) of the FilmTec FT30 SW2540 element, Schock & Miquel, Desalination 64 (1987) 339-352, Tab. 3, p. 344; applied to every 40-inch class because the axial dimension is set by the element length; to be verified by unrolling a leaf of the element installed";
    }
}
`,oe=`/*--------------------------------*- Choupo -*-----------------------*\\
  Membrane MODULE: a GENERIC 4-inch x 40-inch spiral-wound element
  (the 85 ft2 class)

  WHAT THIS RECORD IS.  A standard SIZE, not a product: the element a case
  names with \`module Generic-4040;\` when it wants "a 4-inch element"
  rather than a manufacturer's.  It replaces the hand table that sat in
  SpiralWoundModule.cpp until 2026-10-24 (\`moduleDiameter 4 in;\`, an area
  and nothing else) -- the same area, now beside the leaves, the leaf length
  and the feed spacer, so the channel the feed sees is a declared fact.
  It names NO membrane: the case declares the one it winds in, beside
  \`module\` (\`membrane <name>;\`).

  EVERY GEOMETRIC VALUE IS AN ESTIMATE, marked \`origin estimated;
  reviewStatus unverified;\` with a note saying how to verify it, and the
  engine announces each one on every run that reads this record:
    * activeArea 7.9 m2 -- the 85 ft2 class area of the retired table;
    * leaves 4 -- see its note;
    * leafLength 0.854 m -- the active leaf length (without glue strips) of
      the FilmTec FT30 SW2540 element in Schock & Miquel, Desalination 64 (1987) 339-352, Tab. 3, p. 344 (primary
      read): the axial dimension of a 40-inch element is set by its length,
      not its diameter, so the one measured leaf length serves the class.
  The element length 40 in (1.016 m) is the definition of the class.
  DERIVED, never stored: the leaf width W = A/(2 n L) = 1.1563 m.

  THE FEED SPACER is the FilmTec FT30 spacer Schock & Miquel measured
  (Tab. 1, p. 343): a documented spacer beats an invented one.  Its
  thickness (0.77 mm, 30 mil) sits between the 28 mil and 34 mil spacers
  current elements quote; that it is THIS class's spacer is an estimate.

  NO LIMITS ARE DECLARED: a generic class has no manufacturer's rating, and
  a limit the record does not declare is absent and not checked.
\\*---------------------------------------------------------------------------*/

name             Generic-4040;
kind             membraneModule;
manufacturer     "generic 4-inch x 40-inch element (estimated class)";
format           spiralWound;
feedSpacer       SchockMiquel-FilmTecFT30;   // the channel: data/standards/assets/

nominalDiameter  4 in;
elementLength    40 in;
activeArea       7.9 m2;            // ESTIMATE, see provenance
leaves           4;                  // ESTIMATE, see provenance
leafLength       0.854 m;              // ESTIMATE, see provenance

provenance
{
    source  "a generic size class (no data sheet); the leaf length from Schock & Miquel, Desalination 64 (1987) 339-352, Tab. 3, p. 344";
    nominalDiameter { origin assumed; method "the nominal size that names the class"; }
    elementLength   { origin assumed; method "40-inch elements: the length that names the class"; }
    activeArea
    {
        origin        estimated;
        reviewStatus  unverified;
        notes         "the 85 ft2 class area of 4-inch x 40-inch elements, carried from the retired nominal table (manufacturers' sheets of the class quote it); to be verified against the data sheet of the element actually installed";
    }
    leaves
    {
        origin        estimated;
        reviewStatus  unverified;
        notes         "Schock & Miquel find the optimal leaf number of a 4-inch x 40-inch element at 3-4 with a glue line (p. 349, Fig. 10, Tab. 5) and give 4.3 m as the total leaf width including glue lines (Tab. 4, p. 348); to be verified by unrolling an element of the class and counting its envelopes";
    }
    leafLength
    {
        origin        estimated;
        reviewStatus  unverified;
        notes         "the active leaf length without glue strips (854 mm) of the FilmTec FT30 SW2540 element, Schock & Miquel, Desalination 64 (1987) 339-352, Tab. 3, p. 344; applied to every 40-inch class because the axial dimension is set by the element length; to be verified by unrolling a leaf of the element installed";
    }
}
`,le=`/*--------------------------------*- Choupo -*-----------------------*\\
  Membrane MODULE: a GENERIC 8-inch x 40-inch spiral-wound element
  (the 400 ft2 class)

  WHAT THIS RECORD IS.  A standard SIZE, not a product: the element a case
  names with \`module Generic-8040;\` when it wants "a 8-inch element"
  rather than a manufacturer's.  It replaces the hand table that sat in
  SpiralWoundModule.cpp until 2026-10-24 (\`moduleDiameter 8 in;\`, an area
  and nothing else) -- the same area, now beside the leaves, the leaf length
  and the feed spacer, so the channel the feed sees is a declared fact.
  It names NO membrane: the case declares the one it winds in, beside
  \`module\` (\`membrane <name>;\`).

  EVERY GEOMETRIC VALUE IS AN ESTIMATE, marked \`origin estimated;
  reviewStatus unverified;\` with a note saying how to verify it, and the
  engine announces each one on every run that reads this record:
    * activeArea 37.2 m2 -- the 400 ft2 class area of the retired table;
    * leaves 16 -- see its note;
    * leafLength 0.854 m -- the active leaf length (without glue strips) of
      the FilmTec FT30 SW2540 element in Schock & Miquel, Desalination 64 (1987) 339-352, Tab. 3, p. 344 (primary
      read): the axial dimension of a 40-inch element is set by its length,
      not its diameter, so the one measured leaf length serves the class.
  The element length 40 in (1.016 m) is the definition of the class.
  DERIVED, never stored: the leaf width W = A/(2 n L) = 1.3612 m.

  THE FEED SPACER is the FilmTec FT30 spacer Schock & Miquel measured
  (Tab. 1, p. 343): a documented spacer beats an invented one.  Its
  thickness (0.77 mm, 30 mil) sits between the 28 mil and 34 mil spacers
  current elements quote; that it is THIS class's spacer is an estimate.

  NO LIMITS ARE DECLARED: a generic class has no manufacturer's rating, and
  a limit the record does not declare is absent and not checked.
\\*---------------------------------------------------------------------------*/

name             Generic-8040;
kind             membraneModule;
manufacturer     "generic 8-inch x 40-inch element (estimated class)";
format           spiralWound;
feedSpacer       SchockMiquel-FilmTecFT30;   // the channel: data/standards/assets/

nominalDiameter  8 in;
elementLength    40 in;
activeArea       37.2 m2;            // ESTIMATE, see provenance
leaves           16;                  // ESTIMATE, see provenance
leafLength       0.854 m;              // ESTIMATE, see provenance

provenance
{
    source  "a generic size class (no data sheet); the leaf length from Schock & Miquel, Desalination 64 (1987) 339-352, Tab. 3, p. 344";
    nominalDiameter { origin assumed; method "the nominal size that names the class"; }
    elementLength   { origin assumed; method "40-inch elements: the length that names the class"; }
    activeArea
    {
        origin        estimated;
        reviewStatus  unverified;
        notes         "the 400 ft2 class area of 8-inch x 40-inch elements, carried from the retired nominal table (manufacturers' sheets of the class quote it); to be verified against the data sheet of the element actually installed";
    }
    leaves
    {
        origin        estimated;
        reviewStatus  unverified;
        notes         "chosen so that the derived leaf width (A/(2 n L) = 1.36 m) is close to that of the 4-inch estimate: the leaf width, the permeate's path to the central tube, is limited by the permeate-channel pressure loss (Schock & Miquel p. 349), not by the diameter; to be verified by unrolling an element of the class and counting its envelopes";
    }
    leafLength
    {
        origin        estimated;
        reviewStatus  unverified;
        notes         "the active leaf length without glue strips (854 mm) of the FilmTec FT30 SW2540 element, Schock & Miquel, Desalination 64 (1987) 339-352, Tab. 3, p. 344; applied to every 40-inch class because the axial dimension is set by the element length; to be verified by unrolling a leaf of the element installed";
    }
}
`,he=`/*--------------------------------*- Choupo -*-----------------------*\\
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
`,de=`/*--------------------------------*- Choupo -*-----------------------*\\
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
`,ce=`/*--------------------------------*- Choupo -*-----------------------*\\
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
`,me=`/*---------------------------------------------------------------------------*\\
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
`,pe=`/*--------------------------------*- Choupo -*-----------------------*\\
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
`,ue=`/*--------------------------------*- Choupo -*-----------------------*\\
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
`,fe=`/*--------------------------------*- Choupo -*-----------------------*\\
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
`,be=`/*--------------------------------*- Choupo -*-----------------------*\\
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
  sheet, so since 2026-10-24 (C146) the channel is the spacer RECORD the
  element names (\`feedSpacer Spacer-28mil;\`): its thickness is the sheet's,
  its porosity and filament diameter are announced estimates there, and its
  hydraulic diameter is Schock & Miquel's Eq. (17) -- no longer the inline
  channelHeight / spacerPorosity pair, whose 2 h eps is not that diameter.
  The leaf length is NOT stated and carries an EDUCATED value, marked
  \`origin estimated; reviewStatus unverified;\` with a note saying how to
  verify it (Vitor Geraldes, 2026-09-15); the engine announces it, and the
  spacer's two estimates, on every run that reads this record.

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
feedSpacer     Spacer-28mil;       // the channel: 28 mil thickness (data sheet), assets/Spacer-28mil.dat
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

    leafLength
    {
        origin        estimated;
        reviewStatus  unverified;
        notes         "element length 1.016 m (dimension A) per the data sheet includes the end caps; the leaf length is not published; to be verified against the element's leaf dimensions (unroll one)";
    }
}
`,ge=`/*--------------------------------*- Choupo -*-----------------------*\\
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
`,Se=`/*--------------------------------*- Choupo -*-----------------------*\\
  FEED SPACER: Desal RO, as characterised by Schock & Miquel (1987)

  WHAT THIS RECORD IS.  The feed-channel net of a spiral-wound element
  (kind feedSpacer): its thickness, which IS the channel height (p. 341,
  "the assumption is made that the effective channel height is equal to
  the spacer thickness"), its filament diameter and its porosity, plus the
  two correlations the paper fits for spacer-filled channels.  An element
  record names it with \`feedSpacer SchockMiquel-DesalRO;\`.

  SOURCE (PRIMARY, READ 2026-10-24 from the paper itself -- numbers
  transcribed; the paper is Elsevier copyright and is NOT in the tree):
      G. Schock, A. Miquel, Mass transfer and pressure loss in spiral
      wound modules, Desalination 64 (1987) 339-352.
  Tab. 1, p. 343, "geometrical data of different feed spacers", row
  "Desal RO":  h_SP 0.82 mm,  d_F 0.41 mm,  l_M 2.7 mm,  eps 0.88,
  S_V,SP 9.8 1/mm,  d_h 0.97 mm.
  On the correlations: it is in Fig. 6 (friction) but not among the Fig. 9 mass-transfer spacers; Eq. (30) is attached on the paper's statement that it holds 'independently of the type of spacer and membrane' (p. 347).

  WHAT IS STORED AND WHAT IS DERIVED.  The record stores h_SP, d_F and the
  paper's porosity.  The engine DERIVES S_V,SP = 4/d_F (Eq. 23) and
  d_h = 4 eps / (2/h + (1 - eps) S_V,SP) (Eq. 17); bin/curate/
  check_spiral_array.py holds both to the Tab. 1 columns (9.8 1/mm,
  0.97 mm) within their printed rounding.  The mesh length l_M = 2.7 mm is
  NOT a key: with the filament it would compute the porosity a second time
  (Eqs. 20-22 give 0.8807 against the table's 0.88), and the
  paper's own d_h column follows from the TABLE's porosity, which is
  therefore the one stored; the gate holds the mesh route to it.

  NO VISCOSITY CORRECTION.  The paper evaluates every dimensionless number
  on "average bulk physical properties" and assumes the concentration
  dependence "to be insignificant" (p. 340); it gives no wall-viscosity
  term, and none is applied.
\\*---------------------------------------------------------------------------*/

name              SchockMiquel-DesalRO;
kind              feedSpacer;
manufacturer      "Desal RO (characterised by Schock & Miquel 1987)";

thickness         0.82 mm;          // h_SP, Tab. 1
filamentDiameter  0.41 mm;         // d_F,  Tab. 1
porosity          0.88;             // eps,  Tab. 1

//  THE CORRELATIONS, AS DATA (Schock & Miquel 1987, primary read).  The
//  case selects one by naming its model in its own massTransfer /
//  pressureDrop block; the coefficients and the window come from here.
//      Re = rho v d_h / eta (Eq. 5),  v = V / (b h eps) (Eqs. 11-12),
//      Sc = nu / D (Eq. 8),  Sh = k d_h / D (Eq. 7),
//      lambda = 2 dp d_h / (rho v^2 l) (Eq. 6).
massTransfer
{
    model    SchockMiquel;            // Sh = a Re^b Sc^c
    a        0.065;                   // Eq. (30), p. 347
    b        0.875;
    c        0.25;
    validity { Re ( 100 1000 ); }     // the Reynolds axis of Fig. 9 (p. 348)
}
pressureDrop
{
    model    SchockMiquel;            // lambda = a Re^-b
    a        6.23;                    // Eq. (24), p. 345
    b        0.3;
    validity { Re ( 100 1000 ); }     // "only be valid in the tested flow regime, i.e. 100<Re<1000" (p. 345)
}

provenance
{
    source  "G. Schock, A. Miquel, Mass transfer and pressure loss in spiral wound modules, Desalination 64 (1987) 339-352";
    licence "facts transcribed from a copyrighted paper and cited per value; the paper itself is not redistributed";
    thickness        { origin literature; method "Tab. 1, p. 343, h_SP (primary read 2026-10-24)"; }
    filamentDiameter { origin literature; method "Tab. 1, p. 343, d_F (primary read 2026-10-24)"; }
    porosity         { origin literature; method "Tab. 1, p. 343, eps (primary read 2026-10-24)"; }
    massTransfer     { origin literature; method "Eq. (30), p. 347; window: Fig. 9's Reynolds axis, p. 348 (primary read 2026-10-24)"; }
    pressureDrop     { origin literature; method "Eq. (24) and its stated window 100 < Re < 1000, p. 345 (primary read 2026-10-24)"; }
}
`,Te=`/*--------------------------------*- Choupo -*-----------------------*\\
  FEED SPACER: Desal UF, as characterised by Schock & Miquel (1987)

  WHAT THIS RECORD IS.  The feed-channel net of a spiral-wound element
  (kind feedSpacer): its thickness, which IS the channel height (p. 341,
  "the assumption is made that the effective channel height is equal to
  the spacer thickness"), its filament diameter and its porosity, plus the
  two correlations the paper fits for spacer-filled channels.  An element
  record names it with \`feedSpacer SchockMiquel-DesalUF;\`.

  SOURCE (PRIMARY, READ 2026-10-24 from the paper itself -- numbers
  transcribed; the paper is Elsevier copyright and is NOT in the tree):
      G. Schock, A. Miquel, Mass transfer and pressure loss in spiral
      wound modules, Desalination 64 (1987) 339-352.
  Tab. 1, p. 343, "geometrical data of different feed spacers", row
  "Desal UF":  h_SP 1.51 mm,  d_F 0.755 mm,  l_M 3.1 mm,  eps 0.81,
  S_V,SP 5.3 1/mm,  d_h 1.39 mm.
  On the correlations: it is in Fig. 6 (friction) but not among the Fig. 9 mass-transfer spacers; Eq. (30) is attached on the paper's statement that it holds 'independently of the type of spacer and membrane' (p. 347).

  WHAT IS STORED AND WHAT IS DERIVED.  The record stores h_SP, d_F and the
  paper's porosity.  The engine DERIVES S_V,SP = 4/d_F (Eq. 23) and
  d_h = 4 eps / (2/h + (1 - eps) S_V,SP) (Eq. 17); bin/curate/
  check_spiral_array.py holds both to the Tab. 1 columns (5.3 1/mm,
  1.39 mm) within their printed rounding.  The mesh length l_M = 3.1 mm is
  NOT a key: with the filament it would compute the porosity a second time
  (Eqs. 20-22 give 0.8087 against the table's 0.81), and the
  paper's own d_h column follows from the TABLE's porosity, which is
  therefore the one stored; the gate holds the mesh route to it.

  NO VISCOSITY CORRECTION.  The paper evaluates every dimensionless number
  on "average bulk physical properties" and assumes the concentration
  dependence "to be insignificant" (p. 340); it gives no wall-viscosity
  term, and none is applied.
\\*---------------------------------------------------------------------------*/

name              SchockMiquel-DesalUF;
kind              feedSpacer;
manufacturer      "Desal UF (characterised by Schock & Miquel 1987)";

thickness         1.51 mm;          // h_SP, Tab. 1
filamentDiameter  0.755 mm;         // d_F,  Tab. 1
porosity          0.81;             // eps,  Tab. 1

//  THE CORRELATIONS, AS DATA (Schock & Miquel 1987, primary read).  The
//  case selects one by naming its model in its own massTransfer /
//  pressureDrop block; the coefficients and the window come from here.
//      Re = rho v d_h / eta (Eq. 5),  v = V / (b h eps) (Eqs. 11-12),
//      Sc = nu / D (Eq. 8),  Sh = k d_h / D (Eq. 7),
//      lambda = 2 dp d_h / (rho v^2 l) (Eq. 6).
massTransfer
{
    model    SchockMiquel;            // Sh = a Re^b Sc^c
    a        0.065;                   // Eq. (30), p. 347
    b        0.875;
    c        0.25;
    validity { Re ( 100 1000 ); }     // the Reynolds axis of Fig. 9 (p. 348)
}
pressureDrop
{
    model    SchockMiquel;            // lambda = a Re^-b
    a        6.23;                    // Eq. (24), p. 345
    b        0.3;
    validity { Re ( 100 1000 ); }     // "only be valid in the tested flow regime, i.e. 100<Re<1000" (p. 345)
}

provenance
{
    source  "G. Schock, A. Miquel, Mass transfer and pressure loss in spiral wound modules, Desalination 64 (1987) 339-352";
    licence "facts transcribed from a copyrighted paper and cited per value; the paper itself is not redistributed";
    thickness        { origin literature; method "Tab. 1, p. 343, h_SP (primary read 2026-10-24)"; }
    filamentDiameter { origin literature; method "Tab. 1, p. 343, d_F (primary read 2026-10-24)"; }
    porosity         { origin literature; method "Tab. 1, p. 343, eps (primary read 2026-10-24)"; }
    massTransfer     { origin literature; method "Eq. (30), p. 347; window: Fig. 9's Reynolds axis, p. 348 (primary read 2026-10-24)"; }
    pressureDrop     { origin literature; method "Eq. (24) and its stated window 100 < Re < 1000, p. 345 (primary read 2026-10-24)"; }
}
`,Ee=`/*--------------------------------*- Choupo -*-----------------------*\\
  FEED SPACER: FilmTec FT30, as characterised by Schock & Miquel (1987)

  WHAT THIS RECORD IS.  The feed-channel net of a spiral-wound element
  (kind feedSpacer): its thickness, which IS the channel height (p. 341,
  "the assumption is made that the effective channel height is equal to
  the spacer thickness"), its filament diameter and its porosity, plus the
  two correlations the paper fits for spacer-filled channels.  An element
  record names it with \`feedSpacer SchockMiquel-FilmTecFT30;\`.

  SOURCE (PRIMARY, READ 2026-10-24 from the paper itself -- numbers
  transcribed; the paper is Elsevier copyright and is NOT in the tree):
      G. Schock, A. Miquel, Mass transfer and pressure loss in spiral
      wound modules, Desalination 64 (1987) 339-352.
  Tab. 1, p. 343, "geometrical data of different feed spacers", row
  "FilmTec FT30":  h_SP 0.77 mm,  d_F 0.385 mm,  l_M 2.8 mm,  eps 0.89,
  S_V,SP 10.4 1/mm,  d_h 0.95 mm.
  On the correlations: it is the spacer extracted from the FilmTec FT30 SW2540 element of Tab. 3 (p. 344), on which the spiral-element friction of Fig. 5 was measured.

  WHAT IS STORED AND WHAT IS DERIVED.  The record stores h_SP, d_F and the
  paper's porosity.  The engine DERIVES S_V,SP = 4/d_F (Eq. 23) and
  d_h = 4 eps / (2/h + (1 - eps) S_V,SP) (Eq. 17); bin/curate/
  check_spiral_array.py holds both to the Tab. 1 columns (10.4 1/mm,
  0.95 mm) within their printed rounding.  The mesh length l_M = 2.8 mm is
  NOT a key: with the filament it would compute the porosity a second time
  (Eqs. 20-22 give 0.8920 against the table's 0.89), and the
  paper's own d_h column follows from the TABLE's porosity, which is
  therefore the one stored; the gate holds the mesh route to it.

  NO VISCOSITY CORRECTION.  The paper evaluates every dimensionless number
  on "average bulk physical properties" and assumes the concentration
  dependence "to be insignificant" (p. 340); it gives no wall-viscosity
  term, and none is applied.
\\*---------------------------------------------------------------------------*/

name              SchockMiquel-FilmTecFT30;
kind              feedSpacer;
manufacturer      "FilmTec FT30 (characterised by Schock & Miquel 1987)";

thickness         0.77 mm;          // h_SP, Tab. 1
filamentDiameter  0.385 mm;         // d_F,  Tab. 1
porosity          0.89;             // eps,  Tab. 1

//  THE CORRELATIONS, AS DATA (Schock & Miquel 1987, primary read).  The
//  case selects one by naming its model in its own massTransfer /
//  pressureDrop block; the coefficients and the window come from here.
//      Re = rho v d_h / eta (Eq. 5),  v = V / (b h eps) (Eqs. 11-12),
//      Sc = nu / D (Eq. 8),  Sh = k d_h / D (Eq. 7),
//      lambda = 2 dp d_h / (rho v^2 l) (Eq. 6).
massTransfer
{
    model    SchockMiquel;            // Sh = a Re^b Sc^c
    a        0.065;                   // Eq. (30), p. 347
    b        0.875;
    c        0.25;
    validity { Re ( 100 1000 ); }     // the Reynolds axis of Fig. 9 (p. 348)
}
pressureDrop
{
    model    SchockMiquel;            // lambda = a Re^-b
    a        6.23;                    // Eq. (24), p. 345
    b        0.3;
    validity { Re ( 100 1000 ); }     // "only be valid in the tested flow regime, i.e. 100<Re<1000" (p. 345)
}

provenance
{
    source  "G. Schock, A. Miquel, Mass transfer and pressure loss in spiral wound modules, Desalination 64 (1987) 339-352";
    licence "facts transcribed from a copyrighted paper and cited per value; the paper itself is not redistributed";
    thickness        { origin literature; method "Tab. 1, p. 343, h_SP (primary read 2026-10-24)"; }
    filamentDiameter { origin literature; method "Tab. 1, p. 343, d_F (primary read 2026-10-24)"; }
    porosity         { origin literature; method "Tab. 1, p. 343, eps (primary read 2026-10-24)"; }
    massTransfer     { origin literature; method "Eq. (30), p. 347; window: Fig. 9's Reynolds axis, p. 348 (primary read 2026-10-24)"; }
    pressureDrop     { origin literature; method "Eq. (24) and its stated window 100 < Re < 1000, p. 345 (primary read 2026-10-24)"; }
}
`,ve=`/*--------------------------------*- Choupo -*-----------------------*\\
  FEED SPACER: Naltex 1228, as characterised by Schock & Miquel (1987)

  WHAT THIS RECORD IS.  The feed-channel net of a spiral-wound element
  (kind feedSpacer): its thickness, which IS the channel height (p. 341,
  "the assumption is made that the effective channel height is equal to
  the spacer thickness"), its filament diameter and its porosity, plus the
  two correlations the paper fits for spacer-filled channels.  An element
  record names it with \`feedSpacer SchockMiquel-Naltex1228;\`.

  SOURCE (PRIMARY, READ 2026-10-24 from the paper itself -- numbers
  transcribed; the paper is Elsevier copyright and is NOT in the tree):
      G. Schock, A. Miquel, Mass transfer and pressure loss in spiral
      wound modules, Desalination 64 (1987) 339-352.
  Tab. 1, p. 343, "geometrical data of different feed spacers", row
  "Naltex 1228":  h_SP 0.75 mm,  d_F 0.375 mm,  l_M 3.0 mm,  eps 0.9,
  S_V,SP 10.7 1/mm,  d_h 0.96 mm.
  On the correlations: it is NOT among the spacers of Fig. 6 (friction) or Fig. 9 (mass transfer); the correlations are attached on the paper's statement that Eq. (24) describes 'all types of feed spacers' of known geometry (p. 345) and that Eq. (30) holds 'independently of the type of spacer' (p. 347).

  WHAT IS STORED AND WHAT IS DERIVED.  The record stores h_SP, d_F and the
  paper's porosity.  The engine DERIVES S_V,SP = 4/d_F (Eq. 23) and
  d_h = 4 eps / (2/h + (1 - eps) S_V,SP) (Eq. 17); bin/curate/
  check_spiral_array.py holds both to the Tab. 1 columns (10.7 1/mm,
  0.96 mm) within their printed rounding.  The mesh length l_M = 3.0 mm is
  NOT a key: with the filament it would compute the porosity a second time
  (Eqs. 20-22 give 0.9018 against the table's 0.9), and the
  paper's own d_h column follows from the TABLE's porosity, which is
  therefore the one stored; the gate holds the mesh route to it.

  NO VISCOSITY CORRECTION.  The paper evaluates every dimensionless number
  on "average bulk physical properties" and assumes the concentration
  dependence "to be insignificant" (p. 340); it gives no wall-viscosity
  term, and none is applied.
\\*---------------------------------------------------------------------------*/

name              SchockMiquel-Naltex1228;
kind              feedSpacer;
manufacturer      "Naltex 1228 (characterised by Schock & Miquel 1987)";

thickness         0.75 mm;          // h_SP, Tab. 1
filamentDiameter  0.375 mm;         // d_F,  Tab. 1
porosity          0.9;             // eps,  Tab. 1

//  THE CORRELATIONS, AS DATA (Schock & Miquel 1987, primary read).  The
//  case selects one by naming its model in its own massTransfer /
//  pressureDrop block; the coefficients and the window come from here.
//      Re = rho v d_h / eta (Eq. 5),  v = V / (b h eps) (Eqs. 11-12),
//      Sc = nu / D (Eq. 8),  Sh = k d_h / D (Eq. 7),
//      lambda = 2 dp d_h / (rho v^2 l) (Eq. 6).
massTransfer
{
    model    SchockMiquel;            // Sh = a Re^b Sc^c
    a        0.065;                   // Eq. (30), p. 347
    b        0.875;
    c        0.25;
    validity { Re ( 100 1000 ); }     // the Reynolds axis of Fig. 9 (p. 348)
}
pressureDrop
{
    model    SchockMiquel;            // lambda = a Re^-b
    a        6.23;                    // Eq. (24), p. 345
    b        0.3;
    validity { Re ( 100 1000 ); }     // "only be valid in the tested flow regime, i.e. 100<Re<1000" (p. 345)
}

provenance
{
    source  "G. Schock, A. Miquel, Mass transfer and pressure loss in spiral wound modules, Desalination 64 (1987) 339-352";
    licence "facts transcribed from a copyrighted paper and cited per value; the paper itself is not redistributed";
    thickness        { origin literature; method "Tab. 1, p. 343, h_SP (primary read 2026-10-24)"; }
    filamentDiameter { origin literature; method "Tab. 1, p. 343, d_F (primary read 2026-10-24)"; }
    porosity         { origin literature; method "Tab. 1, p. 343, eps (primary read 2026-10-24)"; }
    massTransfer     { origin literature; method "Eq. (30), p. 347; window: Fig. 9's Reynolds axis, p. 348 (primary read 2026-10-24)"; }
    pressureDrop     { origin literature; method "Eq. (24) and its stated window 100 < Re < 1000, p. 345 (primary read 2026-10-24)"; }
}
`,ye=`/*--------------------------------*- Choupo -*-----------------------*\\
  FEED SPACER: Toray PEC-1000, as characterised by Schock & Miquel (1987)

  WHAT THIS RECORD IS.  The feed-channel net of a spiral-wound element
  (kind feedSpacer): its thickness, which IS the channel height (p. 341,
  "the assumption is made that the effective channel height is equal to
  the spacer thickness"), its filament diameter and its porosity, plus the
  two correlations the paper fits for spacer-filled channels.  An element
  record names it with \`feedSpacer SchockMiquel-TorayPEC1000;\`.

  SOURCE (PRIMARY, READ 2026-10-24 from the paper itself -- numbers
  transcribed; the paper is Elsevier copyright and is NOT in the tree):
      G. Schock, A. Miquel, Mass transfer and pressure loss in spiral
      wound modules, Desalination 64 (1987) 339-352.
  Tab. 1, p. 343, "geometrical data of different feed spacers", row
  "Toray PEC-1000":  h_SP 0.54 mm,  d_F 0.27 mm,  l_M 2.3 mm,  eps 0.91,
  S_V,SP 14.8 1/mm,  d_h 0.72 mm.
  On the correlations: its feed spacer is the one photographed in Fig. 2 (p. 342).

  WHAT IS STORED AND WHAT IS DERIVED.  The record stores h_SP, d_F and the
  paper's porosity.  The engine DERIVES S_V,SP = 4/d_F (Eq. 23) and
  d_h = 4 eps / (2/h + (1 - eps) S_V,SP) (Eq. 17); bin/curate/
  check_spiral_array.py holds both to the Tab. 1 columns (14.8 1/mm,
  0.72 mm) within their printed rounding.  The mesh length l_M = 2.3 mm is
  NOT a key: with the filament it would compute the porosity a second time
  (Eqs. 20-22 give 0.9078 against the table's 0.91), and the
  paper's own d_h column follows from the TABLE's porosity, which is
  therefore the one stored; the gate holds the mesh route to it.

  NO VISCOSITY CORRECTION.  The paper evaluates every dimensionless number
  on "average bulk physical properties" and assumes the concentration
  dependence "to be insignificant" (p. 340); it gives no wall-viscosity
  term, and none is applied.
\\*---------------------------------------------------------------------------*/

name              SchockMiquel-TorayPEC1000;
kind              feedSpacer;
manufacturer      "Toray PEC-1000 (characterised by Schock & Miquel 1987)";

thickness         0.54 mm;          // h_SP, Tab. 1
filamentDiameter  0.27 mm;         // d_F,  Tab. 1
porosity          0.91;             // eps,  Tab. 1

//  THE CORRELATIONS, AS DATA (Schock & Miquel 1987, primary read).  The
//  case selects one by naming its model in its own massTransfer /
//  pressureDrop block; the coefficients and the window come from here.
//      Re = rho v d_h / eta (Eq. 5),  v = V / (b h eps) (Eqs. 11-12),
//      Sc = nu / D (Eq. 8),  Sh = k d_h / D (Eq. 7),
//      lambda = 2 dp d_h / (rho v^2 l) (Eq. 6).
massTransfer
{
    model    SchockMiquel;            // Sh = a Re^b Sc^c
    a        0.065;                   // Eq. (30), p. 347
    b        0.875;
    c        0.25;
    validity { Re ( 100 1000 ); }     // the Reynolds axis of Fig. 9 (p. 348)
}
pressureDrop
{
    model    SchockMiquel;            // lambda = a Re^-b
    a        6.23;                    // Eq. (24), p. 345
    b        0.3;
    validity { Re ( 100 1000 ); }     // "only be valid in the tested flow regime, i.e. 100<Re<1000" (p. 345)
}

provenance
{
    source  "G. Schock, A. Miquel, Mass transfer and pressure loss in spiral wound modules, Desalination 64 (1987) 339-352";
    licence "facts transcribed from a copyrighted paper and cited per value; the paper itself is not redistributed";
    thickness        { origin literature; method "Tab. 1, p. 343, h_SP (primary read 2026-10-24)"; }
    filamentDiameter { origin literature; method "Tab. 1, p. 343, d_F (primary read 2026-10-24)"; }
    porosity         { origin literature; method "Tab. 1, p. 343, eps (primary read 2026-10-24)"; }
    massTransfer     { origin literature; method "Eq. (30), p. 347; window: Fig. 9's Reynolds axis, p. 348 (primary read 2026-10-24)"; }
    pressureDrop     { origin literature; method "Eq. (24) and its stated window 100 < Re < 1000, p. 345 (primary read 2026-10-24)"; }
}
`,we=`/*--------------------------------*- Choupo -*-----------------------*\\
  FEED SPACER: a 28 mil diamond feed spacer (the thickness DuPont states
  for the SW30HR-380 element)

  WHAT THIS RECORD IS.  The feed spacer named by data/standards/assets/
  SW30HR-380.dat.  Of its geometry the data sheet states ONE number, the
  thickness: "Feed Spacer Thickness 28 mil" (DuPont FilmTec SW30HR-380
  Element Product Data Sheet, Form No. 45-D00971-en, Rev. 7, January 2026,
  Typical Properties).  28 mil = 0.7112 mm.

  WHAT IS ESTIMATED, AND FROM WHAT.  The porosity and the filament
  diameter are not on the sheet.  Each is an EDUCATED value, marked
  \`origin estimated; reviewStatus unverified;\` with a note saying how to
  verify it, and announced on every run that reads this record:
    * filamentDiameter = h/2 = 0.3556 mm: Schock & Miquel (1987) take the
      filament diameter as half the spacer thickness and judge that
      "sufficient for feed spacer materials" (p. 346); every feed spacer of
      their Tab. 1 has d_F = h_SP / 2 exactly;
    * porosity 0.90: inside the band 0.88-0.91 that Tab. 1 reports for the
      four RO-range spacers of 0.54-0.82 mm.
  With them, Eq. (17) gives d_h = 0.9144 mm.

  THE CORRELATIONS are Schock & Miquel's (Eqs. 24 and 30), carried with
  their window; that they apply to THIS spacer is the paper's claim of
  generality (pp. 345, 347), not a measurement on it.
\\*---------------------------------------------------------------------------*/

name              Spacer-28mil;
kind              feedSpacer;
manufacturer      "generic 28 mil diamond feed spacer";

thickness         0.7112 mm;       // 28 mil (data sheet)
filamentDiameter  0.3556 mm;       // ESTIMATE, see provenance
porosity          0.90;            // ESTIMATE, see provenance

//  THE CORRELATIONS, AS DATA (Schock & Miquel 1987, primary read).  The
//  case selects one by naming its model in its own massTransfer /
//  pressureDrop block; the coefficients and the window come from here.
//      Re = rho v d_h / eta (Eq. 5),  v = V / (b h eps) (Eqs. 11-12),
//      Sc = nu / D (Eq. 8),  Sh = k d_h / D (Eq. 7),
//      lambda = 2 dp d_h / (rho v^2 l) (Eq. 6).
massTransfer
{
    model    SchockMiquel;            // Sh = a Re^b Sc^c
    a        0.065;                   // Eq. (30), p. 347
    b        0.875;
    c        0.25;
    validity { Re ( 100 1000 ); }     // the Reynolds axis of Fig. 9 (p. 348)
}
pressureDrop
{
    model    SchockMiquel;            // lambda = a Re^-b
    a        6.23;                    // Eq. (24), p. 345
    b        0.3;
    validity { Re ( 100 1000 ); }     // "only be valid in the tested flow regime, i.e. 100<Re<1000" (p. 345)
}

provenance
{
    source  "DuPont FilmTec SW30HR-380 Element Product Data Sheet, Form No. 45-D00971-en, Rev. 7, January 2026 (the thickness); G. Schock, A. Miquel, Mass transfer and pressure loss in spiral wound modules, Desalination 64 (1987) 339-352 (the estimates' basis and the correlations)";
    thickness        { origin literature; method "data sheet, Typical Properties: Feed Spacer Thickness 28 mil"; }
    filamentDiameter
    {
        origin        estimated;
        reviewStatus  unverified;
        notes         "half the spacer thickness, Schock & Miquel's own assumption for feed spacers (Desalination 64 (1987) p. 346; every Tab. 1 spacer has d_F = h_SP/2); to be verified by measuring the filaments of an unrolled leaf's spacer under a microscope, as the paper did";
    }
    porosity
    {
        origin        estimated;
        reviewStatus  unverified;
        notes         "0.90 lies in the 0.88-0.91 band Schock & Miquel's Tab. 1 reports for RO feed spacers of 0.54-0.82 mm; to be verified by weighing a spacer coupon: porosity = 1 - (m/rho_PP)/(l b h), their Eq. (19)";
    }
    massTransfer     { origin literature; method "Schock & Miquel Eq. (30), p. 347, applied on its stated generality (primary read 2026-10-24)"; }
    pressureDrop     { origin literature; method "Schock & Miquel Eq. (24), 100 < Re < 1000, p. 345, applied on its stated generality (primary read 2026-10-24)"; }
}
`,Ae=`/*--------------------------------*- Choupo -*--------------------------------*\\
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
`,_e=`/*--------------------------------*- Choupo -*-----------------------*\\
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
`,Re=`/*--------------------------------*- Choupo -*-----------------------*\\
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
`,ke=`/*--------------------------------*- Choupo -*--------------------------------*\\
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
`,Me=`/*--------------------------------*- Choupo -*--------------------------------*\\
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
`,R="plant/ammoniaReactor03_equilibriumApproach",F="system/postDict",_=[{unit:"separator",label:"high-pressure separator (220 bar design)",shipped:"SS316",pressureDesign:220},{unit:"converter",label:"catalyst vessel, 700 K (220 bar design)",shipped:"SS316",pressureDesign:220},{unit:"letdown",label:"let-down drum (25 bar design)",shipped:"carbonSteel",pressureDesign:25}],Ce=Object.assign({"../../../../data/standards/assets/CMX_AMX.dat":te,"../../../../data/standards/assets/EUR2C-7P18.dat":ae,"../../../../data/standards/assets/EurodiaED-100P-50.dat":ie,"../../../../data/standards/assets/Generic-16040.dat":se,"../../../../data/standards/assets/Generic-2540.dat":re,"../../../../data/standards/assets/Generic-4040.dat":oe,"../../../../data/standards/assets/Generic-8040.dat":le,"../../../../data/standards/assets/NF270-4040.dat":he,"../../../../data/standards/assets/NF270.dat":de,"../../../../data/standards/assets/NF270_dspmde.dat":ce,"../../../../data/standards/assets/SAC_Na.dat":me,"../../../../data/standards/assets/SEPA_CF.dat":pe,"../../../../data/standards/assets/SS304.dat":ue,"../../../../data/standards/assets/SS316.dat":fe,"../../../../data/standards/assets/SW30HR-380.dat":be,"../../../../data/standards/assets/SW30HR.dat":ge,"../../../../data/standards/assets/SchockMiquel-DesalRO.dat":Se,"../../../../data/standards/assets/SchockMiquel-DesalUF.dat":Te,"../../../../data/standards/assets/SchockMiquel-FilmTecFT30.dat":Ee,"../../../../data/standards/assets/SchockMiquel-Naltex1228.dat":ve,"../../../../data/standards/assets/SchockMiquel-TorayPEC1000.dat":ye,"../../../../data/standards/assets/Spacer-28mil.dat":we,"../../../../data/standards/assets/activatedCarbon.dat":Ae,"../../../../data/standards/assets/aluminium.dat":_e,"../../../../data/standards/assets/carbonSteel.dat":Re,"../../../../data/standards/assets/zeolite13X.dat":ke,"../../../../data/standards/assets/zeolite5A.dat":Me}),w=n=>{if(typeof n=="number"&&Number.isFinite(n))return n;if(typeof n=="string"){const i=Number(n.trim().split(/\s+/)[0]);return Number.isFinite(i)?i:null}return null};function De(n=Ce){const i=[];for(const[r,s]of Object.entries(n)){let l;try{l=W(j(s))}catch{continue}if(l.kind!=="constructionMaterial")continue;const m=r.split("/").pop().replace(/\.dat$/,"");i.push({name:typeof l.name=="string"?l.name:m,density:w(l.density),F_M:w(l.F_M),sigma_y:w(l.sigma_y),maxT:w(l.maxT),maxP:w(l.maxP),thermalConductivity:w(l.thermalConductivity)})}return i.sort((r,s)=>r.name.localeCompare(s.name))}function Ie(n,i,r){const s=new RegExp(`unitName[ \\t]+${i}[ \\t]*;`).exec(n);if(!s)throw new Error(`postDict: no sizing entry for unit '${i}'`);const l=s.index+s[0].length,m=n.slice(l),d=/material[ \t]+([A-Za-z][A-Za-z0-9_.-]*)[ \t]*;/.exec(m),u=/unitName[ \t]+/.exec(m);if(!d||u&&u.index<d.index)throw new Error(`postDict: the entry for '${i}' declares no material of its own`);const y=l+d.index;return n.slice(0,y)+`material ${r};`+n.slice(y+d[0].length)}function Ne(n,i){const r=U(R);if(!r?.files.rawFiles)throw new Error(`${R} is not in the bundled corpus`);const s={...r.files.rawFiles};return s[F]=Ie(s[F],n,i),s}function xe(n,i){const r=n?.find(d=>d.unit===i||d.item===i);if(!r)return null;const s=d=>Number.isFinite(r.values[d])?r.values[d]:null,l=d=>{const u=r.cost?.factors?.[d];return u!==void 0&&Number.isFinite(u)?u:null},m=s("t_wall");return{material:r.material,t_wall_mm:m===null?null:m*1e3,weight_kg:s("weight"),D_m:s("D"),F_M:l("F_M"),F_P:l("F_P"),purchased:r.cost?.purchased??null,bareModule:r.cost?.bareModule??null,currency:r.cost?.currency??""}}function P(n,i){if(!n)return[];const r=`'${i}'`;return n.split(`
`).map(s=>s.trim()).filter(s=>s.includes(r)&&/\[(?:rating|validity|assumed|basis)\]|Vessel:|Turton costing/.test(s))}const o=n=>{const i=ee.find(r=>r.n===n);return i?e.jsx(J,{step:i},n):null},Fe="1px solid var(--mantine-color-default-border)",S=(n,i)=>n==null||!Number.isFinite(n)?"—":n.toFixed(i),Pe=n=>n==null||!Number.isFinite(n)?"—":(n/1e3).toFixed(1);function Oe(){return e.jsxs(T,{"data-pan-x":"",style:{width:"100%",overflowX:"auto"},children:[e.jsxs(t,{striped:!0,withTableBorder:!0,fz:"xs",miw:560,children:[e.jsx(t.Thead,{children:e.jsxs(t.Tr,{children:[e.jsx(t.Th,{children:"family (in the order an engineer reaches for it)"}),e.jsx(t.Th,{children:"first chosen for"}),e.jsx(t.Th,{children:"what defeats it"})]})}),e.jsx(t.Tbody,{children:ne.map(n=>e.jsxs(t.Tr,{children:[e.jsx(t.Td,{fw:600,children:n.family}),e.jsx(t.Td,{children:n.firstFor}),e.jsx(t.Td,{children:n.defeatedBy})]},n.family))})]}),e.jsx(O,{children:"A teaching ordering, not a measured market share: no row carries a number, and none was invented."})]})}function qe(){const n=v.useMemo(()=>De(),[]),[i,r]=v.useState(_[0].unit),s=_.find(a=>a.unit===i).shipped,[l,m]=v.useState(s),[d,u]=v.useState([]),[y,q]=v.useState(new Map),C=v.useRef(null),k=`${i}|${l}`,c=K(()=>(C.current=k,B(R,Ne(i,l))),`${R}\0${k}`,"choupoSolve");v.useEffect(()=>{if(c.busy||C.current===null||c.result===null&&c.err===null)return;const a=C.current,h=a.split("|")[0],f=c.err!==null?{answer:null,lines:P(c.log,h),err:c.err}:{answer:xe(c.result?.equipment,h),lines:P(c.log,h),err:null};if(q(p=>p.get(a)===f?p:new Map(p).set(a,f)),a===k&&d.length>0){const[p,...M]=d;u(M),m(p)}},[c.result,c.err,c.busy]);const H=a=>{r(a),u([]),m(_.find(h=>h.unit===a).shipped)},L=()=>{const a=n.map(p=>p.name).filter(p=>!y.has(`${i}|${p}`));if(a.length===0)return;const[h,...f]=a;u(f),m(h)},E=y.get(k);return e.jsxs(T,{p:"sm",style:{border:Fe,borderRadius:6},children:[e.jsx(b,{order:5,children:"The bench: one vessel, every material the records carry"}),e.jsxs(g,{size:"xs",c:"dimmed",mt:4,children:["Each choice re-runs ",R," in your browser with this vessel's `material` word in system/postDict changed, and keeps the engine's answer below.  The shipped material is the one the case declares."]}),e.jsxs(T,{mt:10,children:[e.jsx($,{label:"vessel",children:e.jsx(G,{size:"xs",fullWidth:!0,value:i,onChange:H,data:_.map(a=>({value:a.unit,label:a.unit}))})}),e.jsxs(g,{size:"xs",c:"dimmed",mt:2,children:[_.find(a=>a.unit===i).label,"; shipped as ",s,"."]})]}),e.jsxs(N,{gap:6,mt:8,children:[n.map(a=>e.jsxs(x,{size:"compact-xs",variant:l===a.name?"filled":"default",onClick:()=>{u([]),m(a.name)},children:[a.name,a.name===s?" (shipped)":""]},a.name)),e.jsx(x,{size:"compact-xs",variant:"light",onClick:L,children:"run every material in turn"})]}),e.jsxs(b,{order:6,mt:"sm",children:["What the engine said about ",i,", with ",l]}),c.busy||!E&&c.err===null?e.jsxs(N,{gap:"sm",mt:4,wrap:"nowrap",children:[e.jsx(z,{size:"xs"}),e.jsxs(g,{size:"xs",c:"dimmed",children:["solving the loop and sizing the vessels …",d.length>0?` (${d.length} more queued)`:""]})]}):E?.err?e.jsx(X,{color:"red",variant:"light",mt:4,title:"Refused -- the engine's message, verbatim",children:e.jsx(g,{size:"xs",ff:"monospace",style:{whiteSpace:"pre-wrap"},children:[...E.lines,E.err].join(`
`)})}):E&&E.lines.length>0?e.jsx(T,{mt:4,p:6,style:{background:"var(--mantine-color-default-hover)",borderRadius:4},children:E.lines.map((a,h)=>e.jsx(g,{size:"xs",ff:"monospace",style:{whiteSpace:"pre-wrap"},children:a},h))}):e.jsx(g,{size:"sm",mt:4,children:"Nothing announced about this vessel."}),e.jsx(T,{"data-pan-x":"",style:{width:"100%",overflowX:"auto"},mt:8,children:e.jsxs(t,{striped:!0,withTableBorder:!0,fz:"xs",miw:760,children:[e.jsxs(t.Thead,{children:[e.jsxs(t.Tr,{children:[e.jsx(t.Th,{rowSpan:2,children:"material"}),e.jsx(t.Th,{colSpan:5,ta:"center",children:"what the record declares"}),e.jsxs(t.Th,{colSpan:6,ta:"center",children:["what the engine published for ",i]})]}),e.jsxs(t.Tr,{children:[e.jsx(t.Th,{ta:"right",children:"sigma_y [MPa]"}),e.jsx(t.Th,{ta:"right",children:"density [kg/m3]"}),e.jsx(t.Th,{ta:"right",children:"F_M"}),e.jsx(t.Th,{ta:"right",children:"maxP [bar]"}),e.jsx(t.Th,{ta:"right",children:"maxT [K]"}),e.jsx(t.Th,{ta:"right",children:"wall [mm]"}),e.jsx(t.Th,{ta:"right",children:"weight [kg]"}),e.jsx(t.Th,{ta:"right",children:"F_M"}),e.jsx(t.Th,{ta:"right",children:"F_P"}),e.jsx(t.Th,{ta:"right",children:"C_BM [kEUR]"}),e.jsx(t.Th,{children:"rating warning"})]})]}),e.jsx(t.Tbody,{children:n.map(a=>{const h=y.get(`${i}|${a.name}`),f=h?.answer,p=h?.lines.filter(A=>A.includes("[rating]"))??[],M=[p.some(A=>A.includes("design pressure"))?"maxP":"",p.some(A=>A.includes("service temperature"))?"maxT":""].filter(Boolean).join(", ");return e.jsxs(t.Tr,{children:[e.jsxs(t.Td,{fw:a.name===l?700:400,children:[a.name,a.name===s?" (shipped)":""]}),e.jsx(t.Td,{ta:"right",children:S(a.sigma_y,0)}),e.jsx(t.Td,{ta:"right",children:S(a.density,0)}),e.jsx(t.Td,{ta:"right",children:S(a.F_M,2)}),e.jsx(t.Td,{ta:"right",children:S(a.maxP,0)}),e.jsx(t.Td,{ta:"right",children:S(a.maxT,0)}),e.jsx(t.Td,{ta:"right",children:h?S(f?.t_wall_mm,1):"not run"}),e.jsx(t.Td,{ta:"right",children:h?S(f?.weight_kg,0):""}),e.jsx(t.Td,{ta:"right",children:h?S(f?.F_M,2):""}),e.jsx(t.Td,{ta:"right",children:h?S(f?.F_P,2):""}),e.jsx(t.Td,{ta:"right",children:h?Pe(f?.bareModule):""}),e.jsx(t.Td,{children:h?h.err?"refused":M?`yes (${M})`:"none":""})]},a.name)})})]})}),e.jsx(O,{children:"The record columns are the files' own declarations; the engine columns are read off the run's equipment list (its design sheet and cost row for this vessel), and nothing in them is computed on this page.  sigma_y is the number the engine uses as the allowable stress.  The engine compares maxP with the design pressure, and maxT with the hottest stream on the vessel's ports, and warns on each; it sizes and prices the vessel anyway, on the same allowable stress at every temperature.  Every number in these records is labelled by its own header as unsourced or awaiting primary re-citation, except the two F_M values that cite Turton."})]})}function Je(){return e.jsx(T,{style:{flex:1,minHeight:0,overflowY:"auto"},px:"md",py:"sm",children:e.jsxs(V,{gap:"md",style:{maxWidth:940,margin:"0 auto"},children:[e.jsxs(T,{children:[e.jsx(b,{order:3,children:"Materials of construction, seals and gaskets"}),e.jsx(g,{size:"sm",c:"dimmed",mt:4,children:"Why the material of every wall decides a plant; the Pareto of the materials chemical plants are built from, carbon steel first; the metallurgy behind it; how a material is chosen against corrosion, temperature, cracking and cost; how the joints and shafts are sealed; and what Choupo does with a material -- and what it does not."})]}),e.jsx(b,{order:4,children:"Part 1 — why materials decide a plant"}),o(1),e.jsx(b,{order:4,children:"Part 2 — the Pareto"}),o(2),o(3),o(4),o(5),o(6),o(7),e.jsx(Oe,{}),e.jsx(b,{order:4,children:"Part 3 — metallurgy"}),o(8),o(9),o(10),o(11),o(12),o(13),e.jsx(b,{order:4,children:"Part 4 — how to choose"}),o(14),o(15),o(16),o(17),o(18),e.jsx(b,{order:4,children:"Part 5 — seals and gaskets"}),o(19),o(20),o(21),e.jsx(b,{order:4,children:"Part 6 — what Choupo does with a material"}),o(22),o(23),e.jsx(qe,{}),e.jsx(Y,{limits:Z}),e.jsxs(g,{size:"sm",children:["The wall and the cost on the bench are the vessel-sizing and costing passes a whole plant goes through; for where in a design the material of each item is fixed, read"," ",e.jsx(D,{component:"button",type:"button",onClick:()=>I("front-end-loading"),children:"Front-End Loading"}),"; for the relief valve every pressure vessel on the bench would also need,"," ",e.jsx(D,{component:"button",type:"button",onClick:()=>I("overpressure"),children:"Designing for overpressure"}),"."]}),e.jsxs(T,{children:[e.jsx(b,{order:5,children:"Sources, and how each was reached"}),Q.map(n=>e.jsxs(T,{mt:6,children:[e.jsx(g,{size:"sm",children:n.cite}),e.jsx(g,{size:"xs",c:"dimmed",children:n.used})]},n.id))]})]})})}export{Je as MaterialsTool};
