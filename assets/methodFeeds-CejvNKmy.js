import{bC as y,cW as b,ct as f}from"./index-DNHjI6HP.js";import{b as h}from"./catalogue-CiZOJojA.js";/**
 * @license @tabler/icons-react v3.44.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */const w=[["path",{d:"M3 19a9 9 0 0 1 9 0a9 9 0 0 1 9 0",key:"svg-0"}],["path",{d:"M3 6a9 9 0 0 1 9 0a9 9 0 0 1 9 0",key:"svg-1"}],["path",{d:"M3 6l0 13",key:"svg-2"}],["path",{d:"M12 6l0 13",key:"svg-3"}],["path",{d:"M21 6l0 13",key:"svg-4"}]],Q=y("outline","book","Book",w),T=`/*---------------------------------------------------------------------------*\\
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
`,A=`/*---------------------------------------------------------------------------*\\
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
`,C=`/*---------------------------------------------------------------------------*\\
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
`,P=`/*---------------------------------------------------------------------------*\\
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
`,R=`/*---------------------------------------------------------------------------*\\
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
`,x=`/*---------------------------------------------------------------------------*\\
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
`,E=`/*---------------------------------------------------------------------------*\\
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
`,N=`/*---------------------------------------------------------------------------*\\
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
`,I=`/*---------------------------------------------------------------------------*\\
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
`,S=`/*---------------------------------------------------------------------------*\\
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
`,k=`/*---------------------------------------------------------------------------*\\
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
`,O=`/*---------------------------------------------------------------------------*\\
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
`,L=[],D=Object.assign({"../../../data/standards/parameters/NRTL/1Propanol-water.dat":T,"../../../data/standards/parameters/NRTL/acetone-ethanol.dat":A,"../../../data/standards/parameters/NRTL/acetonitrile-water.dat":C,"../../../data/standards/parameters/NRTL/benzene-toluene.dat":P,"../../../data/standards/parameters/NRTL/ethanol-ethylAcetate.dat":R,"../../../data/standards/parameters/NRTL/ethanol-water.dat":x,"../../../data/standards/parameters/NRTL/isopropanol-water.dat":E,"../../../data/standards/parameters/NRTL/methanol-methylAcetate.dat":N,"../../../data/standards/parameters/NRTL/methanol-water.dat":I}),U=Object.assign({}),K=Object.assign({"../../../data/standards/parameters/UNIQUAC/aceticAcid-methylAcetate.dat":S,"../../../data/standards/parameters/UNIQUAC/methanol-methylAcetate.dat":k,"../../../data/standards/parameters/UNIQUAC/methylAcetate-water.dat":O});function l(e){return typeof e=="string"?e:typeof e=="number"?String(e):""}function _(e,n){let t;try{t=b(f(e))}catch{return null}const a=t.components;if(!Array.isArray(a)||a.length!==2)return null;const i=l(t.model)||n.modelHint;if(!i)return null;const r={},o=t.parameters;if(typeof o=="object"&&o!==null&&!Array.isArray(o))for(const[d,u]of Object.entries(o))(typeof u=="number"||typeof u=="string")&&(r[d]=u);const c=t.provenance,s=typeof c=="object"&&c!==null&&!Array.isArray(c)?c:null;return{model:i,a:String(a[0]),b:String(a[1]),tier:n.tier,file:n.file,stem:n.file.split("/").pop().replace(/\.dat$/,""),parameters:r,provenance:{origin:s?l(s.origin):"",reviewStatus:s?l(s.reviewStatus):"",fittedInCase:s?l(s.fittedInCase):"",citation:s?l(s.citation)||l(s.source):""}}}function m(e,n){const t=[];for(const[a,i]of Object.entries(e)){const r=a.replace(/^.*?data\/standards\//,"data/standards/"),o=_(i,{file:r,tier:"standards",modelHint:n});o&&t.push(o)}return t}const v=[...m(D,"NRTL"),...m(U,"Wilson"),...m(K,"UNIQUAC")];function j(e,n,t){return e.a===n&&e.b===t||e.a===t&&e.b===n}function Y(e,n,t){return v.some(a=>a.model===e&&j(a,n,t))}let p=null;function M(){if(p)return p;const e=[];for(const n of L){const t=n.file.includes("/")?n.file.split("/")[0]:"",a=_(n.body,{file:`data/local/parameters/${n.file}`,tier:"local",modelHint:t});a&&e.push(a)}return p=e,e}const G=/(?:^|\/)constant\/parameters\/([^/]+)\/[^/]+\.dat$/;function V(e){if(!e)return[];const n=[];for(const[t,a]of Object.entries(e)){const i=G.exec(t);if(!i)continue;const r=_(a,{file:t,tier:"case",modelHint:i[1]});r&&n.push(r)}return n}function W(e,n,t){return[...v,...M(),...V(t)].filter(a=>j(a,e,n))}function $(e){const n=[];e.provenance.origin&&n.push(e.provenance.origin),e.provenance.reviewStatus&&n.push(e.provenance.reviewStatus),e.provenance.fittedInCase&&n.push(`fitted in ${e.provenance.fittedInCase.split("/").pop()}`);const t=e.tier==="standards"?"standards":e.tier==="local"?"data/local":"open case";return n.length?`${t} · ${n.join(" · ")}`:t}const g={water:[{group:"H2O",count:1}],ethanol:[{group:"CH3",count:1},{group:"CH2",count:1},{group:"OH",count:1}],nButanol:[{group:"CH3",count:1},{group:"CH2",count:3},{group:"OH",count:1}],nHexane:[{group:"CH3",count:2},{group:"CH2",count:4}],benzene:[{group:"ACH",count:6}],C4H10:[{group:"CH3",count:2},{group:"CH2",count:2}],nPentane:[{group:"CH3",count:2},{group:"CH2",count:3}],isopentane:[{group:"CH3",count:3},{group:"CH2",count:1},{group:"CH",count:1}],nHeptane:[{group:"CH3",count:2},{group:"CH2",count:5}],C8H18:[{group:"CH3",count:2},{group:"CH2",count:6}],cyclohexane:[{group:"CH2",count:6}]};function F(e){let n;try{n=b(f(e))}catch{return null}const t=n.unifac;if(!t||typeof t!="object")return null;const a=t.groups;if(!Array.isArray(a))return null;const i=[];for(const r of a)r&&typeof r=="object"&&typeof r.group=="string"&&typeof r.count=="number"&&i.push({group:r.group,count:r.count});return i.length?i:null}function J(e){const n={};if(!e)return n;for(const[t,a]of Object.entries(e)){if(!/(^|\/)constant\/components\/[^/]+\.dat$/.test(t))continue;let i;try{i=b(f(a))}catch{continue}const r=typeof i.name=="string"?i.name:"";if(!r)continue;const o=F(a);o&&(n[r]=o)}return n}function X(e,n={}){return Object.prototype.hasOwnProperty.call(n,e)||Object.prototype.hasOwnProperty.call(g,e)}function H(e,n={}){const t={};for(const a of e){const i=n[a]??g[a];i&&(t[a]=i.map(r=>({group:r.group,count:r.count})))}return t}function q(e,n){const t=h(e[0],n)?.tb,a=h(e[1],n)?.tb;return typeof t=="number"&&typeof a=="number"&&a<t?[e[1],e[0]]:e}function Z(e){const n=q(e.pair,e.catalogue),t=n[0],a=n[1],i=e.kind!=="gamma",r=i?["T_bubble",`y_eq_${t}`,"liquid_stable"]:[`gamma_${t}`,`gamma_${a}`];return{components:[...n],properties:r,axis:{variable:`x[${t}]`,from:0,to:1,n:Math.max(2,Math.round(e.n))},state:{P:e.P,composition:{[t]:.5,[a]:.5}},activityModel:{model:e.activity},equationOfState:{model:e.eos},...i?{vleTwoLiquid:!0}:{},...e.activity==="UNIFAC"?{unifacGroups:H(n,e.localUnifac)}:{},...e.componentFiles&&Object.keys(e.componentFiles).length>0?{componentFiles:e.componentFiles}:{}}}function ee(e){const n=[...e.pair].sort((d,u)=>(h(d,e.catalogue)?.tb??0)-(h(u,e.catalogue)?.tb??0)),t=n[0]??"",a=n[n.length-1]??"",i=e.TminK-273.15,r=e.TmaxK-273.15,o=[];for(let d=e.rhFrom;d<=e.rhTo+1e-9&&d<100;d+=Math.max(1,e.rhStep))o.push(Math.round(d));const c=[],s=Math.max(5,e.wbStepC);for(let d=Math.ceil(i/s)*s;d<=Math.min(r,95);d+=s)c.push(d);return{components:[t,a],properties:[],axis:{variable:"T",from:0,to:1,n:2},state:{composition:{[t]:.5,[a]:.5}},psychrometry:{carrier:t,condensable:a,P:e.P,TminC:i,TmaxC:r,gridN:Math.max(20,Math.round(e.gridN)),rh:o,wetBulb:c},transport:{model:"Chung",thermalConductivity:"Eucken",diffusivity:"Fuller"},...e.componentFiles&&Object.keys(e.componentFiles).length>0?{componentFiles:{...e.componentFiles}}:{}}}export{Q as I,J as a,Z as b,X as c,W as d,ee as e,Y as h,q as o,$ as p,H as u};
