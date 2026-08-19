import{bw as Qe,b7 as Ke,bj as w,bQ as Je,aX as e,a2 as X,c as k,a6 as b,G as ue,L as ie,a as re,a9 as B,B as I,a1 as Xe}from"./index-DMcO5Ef_.js";import{u as Te}from"./methodRun-BJNfW2o4.js";import{b as Ce,P as ke,M as Ee}from"./MethodsWorkspace-isMzrcj9.js";import"./pairsCatalogue-Csbk-3-l.js";import"./catalogue-DAatYSkN.js";import"./csvShape-Di3BA3Bh.js";import"./exploreMccabePopOut-D9vthPzE.js";import"./plotly-CKiSSlqr.js";import"./Switch-D5zvbcG6.js";import"./InputsGroupFieldset-DHMGU-Ju.js";import"./Slider-Det5HII7.js";import"./Select-B8iNQWEI.js";import"./Collapse-DvgIlMXW.js";import"./CopyButton-B0DqJ8Td.js";const Ze=`/*--------------------------------*- Choupo -*-----------------------*\\
  WHY THE INTERACTION ARGUMENT AGAINST LV DOES NOT SETTLE IT.

  The standard case against the LV configuration is that at high purity its
  relative gain is enormous, so the two composition loops fight.  This record
  carries the counter that the interaction is a property of the problem as POSED
  -- pose it with a fast temperature loop already closed and the number collapses.

  It is deliberately NOT filed as a resolution of the disagreement.  It is one
  authority's argument, quoted as his, beside the other; the tool shows both and
  the reader decides which set of conditions is theirs.
\\*---------------------------------------------------------------------------*/

recordType controlHeuristic;
domain     distillationControl;
name       fastLoopReducesRga;

claim      "Closing a fast temperature loop collapses the steady-state relative gain of the composition problem that remains -- from about 35 to below 2 in the cited example -- and also reduces the overshoot from the inputs to the outputs.";

stances
(
    { structure LV; stance favours; }
);
topics     ( interaction );

validity   "A two-product column whose temperature loop is fast relative to the composition layer above it; the numbers quoted are the cited article's own example, not a general result.";

notCovered "It is one example's arithmetic, not a bound: it does not say by how much the relative gain falls on any other column, and it does not claim the residual interaction is negligible.  It says nothing about a column run with no inner temperature loop, which is the case the conflicting records were written about.";

conflictsWith ( ratioBestForTwoPoint );

authority  primaryLiterature;
source
{
    author       "S. Skogestad";
    year         2007;
    title        "The dos and don'ts of distillation column control";
    publication  "Chemical Engineering Research and Design, volume 85 (A1), pages 13-23 (2007)";
    locus        "the article's discussion of the temperature loop; a page inside 13-23 is NOT claimed";
    verification searchIndexQuotation;
    verificationNote "Bibliographic record corroborated against publisher listings.  The claim, including the 35-to-below-2 figures, was returned in the paper's own words by a literature search over the author's own copy; the document was NOT opened.";
}
`,et=`/*--------------------------------*- Choupo -*-----------------------*\\
  FIVE CRITERIA WERE COMPARED, AND THE ONE THE COMPARISON PREFERS IS THE ONE
  CHOUPO DOES NOT COMPUTE.

  This record exists so that the two criteria the EduTools tool DOES compute
  cannot be read as "the" answer.  It carries the comparison and its stated
  conclusion, including the half that is inconvenient here: the paper favours
  the singular-value-decomposition criterion, which needs a steady-state gain
  matrix the engine does not publish (see NOT-SHIPPED.md 2 and 4).

  WHAT THIS RECORD DELIBERATELY DOES NOT SAY.  It does not claim, in the
  paper's name, that the criteria select DIFFERENT trays.  That sentence is a
  plausible reading of why a comparison was needed, and a plausible reading is
  not a citation.  What Choupo can say about disagreement it says as its OWN
  observation, computed on the reader's own column and shown beside the two
  answers -- an observation carries the run that produced it, and needs no
  author.
\\*---------------------------------------------------------------------------*/

recordType controlHeuristic;
domain     distillationControl;
name       fiveCriteriaCompared;

claim      "Five criteria are in print for choosing a temperature-control tray -- slope, sensitivity, singular value decomposition, invariant temperature and minimum product variability -- and the comparison that evaluated their effectiveness concluded that singular value decomposition is a simple and effective method.";

topics     ( traySelection );

validity   "Established over systems ranging from ideal binary to azeotropic multicomponent in the cited comparison.";

notCovered "It does not make the other four criteria wrong, and it gives no rule for reconciling them when they disagree on a particular column.  Choupo computes two of the five and does not compute this one's recommendation, so nothing on this screen is that comparison's preferred answer.";

authority  primaryLiterature;
source
{
    author       "W. L. Luyben";
    year         2006;
    title        "Evaluation of criteria for selecting temperature control trays in distillation columns";
    publication  "Journal of Process Control, volume 16, pages 115-134 (2006)";
    locus        "the article's stated purpose and conclusion -- a quantitative comparison of the effectiveness of the five alternative criteria over systems from ideal binary to azeotropic multicomponent";
    verification searchIndexQuotation;
    verificationNote "Bibliographic record corroborated against publisher listings.  The five criteria and the conclusion favouring singular value decomposition were returned by a literature search over the paper's own abstract; the paper was NOT opened, so the conclusion is attributed to the abstract rather than to a numbered page.";
}
`,tt=`/*--------------------------------*- Choupo -*-----------------------*\\
  INVENTORY BEFORE QUALITY -- Choupo's own guidance, quoted.

  AUTHORITY: the Design Guide, which carries an author on its title page.  A
  guide is SIGNED; a record is CITED.  This record therefore QUOTES the guide
  and POINTS at the section; it does not paraphrase the guide's paragraph into a
  second home for it, and it does not dress authored engineering judgement up as
  a literature result.
\\*---------------------------------------------------------------------------*/

recordType controlHeuristic;
domain     distillationControl;
name       inventoryBeforeQuality;

claim      "Control every inventory -- level, pressure -- before any quality: an unbounded inventory shuts the plant down.";

topics     ( inventory );

validity   "Any continuous plant; stated as the first move of a control-structure design, before any pairing question is opened.";

notCovered "It gives no order among the inventories themselves, and no rule for which stream holds which level -- that is the separate record beside it.";

authority  choupoDesignGuide;
source
{
    author       "see the guide's own title page -- docs/preamble.tex decides the authorship line, and this record does not copy its answer";
    year         2026;
    title        "Choupo Design Guide";
    publication  "docs/designGuide.tex, section 'Process control & instrumentation heuristics'";
    locus        "the paragraph headed 'Inventory first.'";
    verification checkedCopy;
    verificationNote "Read in the repository's own source of the guide.  This is Choupo's signed engineering judgement, not a cited literature result, and the tool renders it as such.";
}
`,nt=`/*--------------------------------*- Choupo -*-----------------------*\\
  HOLD A LEVEL WITH THE LARGER STREAM LEAVING IT -- Choupo's own guidance,
  quoted, and the reason it is not a cited record.

  This is the rule that decides LV against DV: at a high reflux ratio the big
  stream leaving the reflux drum is the REFLUX, so the drum level goes on reflux
  and the distillate is freed for composition, which is the DV configuration.

  The literature states the same rule with a NUMERIC THRESHOLD on the reflux
  ratio, and the thresholds disagree across sources.  None could be pinned to a
  page in a copy that was opened, so no threshold is shipped -- see
  NOT-SHIPPED.md 1.  What is shipped is the general form, which is Choupo's own
  and needs no threshold to be true: whichever stream is larger is larger.
\\*---------------------------------------------------------------------------*/

recordType controlHeuristic;
domain     distillationControl;
name       levelOnLargerLeavingStream;

claim      "Each level must be held by an OUTFLOW, and by the LARGER stream leaving that drum -- so a high reflux ratio puts the reflux-drum level on the reflux and frees the distillate for composition.";

stances
(
    { structure DV; stance favours; }
    { structure LV; stance conditional; }
);
topics     ( inventory );

validity   "A two-product column at a known reflux ratio; the guide states it as the rule that decides between the LV and DV arrangements.";

notCovered "It gives no threshold: at what reflux ratio the reflux becomes 'the larger stream' in the sense that matters for level control is a question the general form does not answer, and Choupo ships no number for it.  It also says nothing about the reboiler end, where the same argument runs on the boilup against the bottoms.";

authority  choupoDesignGuide;
source
{
    author       "see the guide's own title page -- docs/preamble.tex decides the authorship line, and this record does not copy its answer";
    year         2026;
    title        "Choupo Design Guide";
    publication  "docs/designGuide.tex, section 'Process control & instrumentation heuristics'";
    locus        "the paragraph beginning 'Distillation is the hard one'";
    verification checkedCopy;
    verificationNote "Read in the repository's own source of the guide.  Choupo's signed engineering judgement, not a cited literature result.";
}
`,ot=`/*--------------------------------*- Choupo -*-----------------------*\\
  THE STANDARD RECOMMENDATION: LV levels plus a fast inner temperature loop.

  The single most quoted recommendation in the modern distillation-control
  literature, and the one a student should meet first -- not because it is
  always right, but because it is the default the alternatives are argued
  against.  It conflicts, on its face, with the ratio scheme the same author
  group recommended for two-point composition control seventeen years earlier;
  the conditions differ, and Choupo shows BOTH rather than choosing.
\\*---------------------------------------------------------------------------*/

recordType controlHeuristic;
domain     distillationControl;
name       lvWithFastTemperatureLoop;

claim      "For most columns, use the standard LV configuration for the levels -- condensation on pressure, distillate on condenser level, bottoms on reboiler level -- combined with a fast temperature loop.";

stances
(
    { structure LV;            stance favours; }
    { structure singleEndedLV; stance favours; }
);
topics     ( sensorPlacement );

validity   "Stated as the general recommendation for a two-product column, within a plantwide-control framework, with a temperature loop closed inside whatever composition or optimisation layer sits above it.";

notCovered "It is a recommendation for MOST columns and names no test for the ones it is wrong for.  It does not say which tray the temperature loop should measure, and it does not claim LV is best for two-point composition control with no inner loop -- which is the case the conflicting record covers.";

conflictsWith ( ratioBestForTwoPoint );

authority  primaryLiterature;
source
{
    author       "S. Skogestad";
    year         2007;
    title        "The dos and don'ts of distillation column control";
    publication  "Chemical Engineering Research and Design, volume 85 (A1), pages 13-23 (2007)";
    locus        "the abstract, on the article's first page, p. 13";
    verification searchIndexQuotation;
    verificationNote "Bibliographic record corroborated against publisher listings.  The recommendation and the LV definition it rests on were returned, in the paper's own words, by a literature search over the author's own copy; the document itself was NOT opened.  The page is claimed only because an abstract sits on an article's opening page, which here is 13 -- it is an inference from the page range, not a page that was read.";
}
`,it=`/*--------------------------------*- Choupo -*-----------------------*\\
  THE RATIO SCHEME (L/D)(V/B) FOR TWO-POINT COMPOSITION CONTROL.

  The recommendation that does not match the later one from the same author
  group -- and the pair is the most useful thing in this record set, because the
  conditions are printed beside each and they are not the same conditions.  1990
  asks "which configuration for TWO-POINT composition control, judged on
  frequency-dependent relative gain"; 2007 asks "what should most columns do",
  and answers with an inner temperature loop that changes the question.

  Choupo displays both and resolves neither.  A weighting nobody published,
  presented as a verdict, is the worst possible artefact for a reader who cannot
  yet judge it.
\\*---------------------------------------------------------------------------*/

recordType controlHeuristic;
domain     distillationControl;
name       ratioBestForTwoPoint;

claim      "Judged on frequency-dependent relative-gain analysis with optimal PI designs over four configurations, the (L/D)(V/B) double ratio scheme is the best choice for two-point composition control.";

stances
(
    { structure ratioLDVB; stance favours; }
    { structure LV;        stance warnsAgainst; }
);
topics     ( interaction );

validity   "Two-point (dual) composition control of a two-product column, the four configurations compared in the cited study, with the loops tuned as optimal PI.";

notCovered "It is a comparison among four candidates on the studied columns, not a proof of optimality over all structures or all columns.  It does not cover single-ended control, and it does not cover a column with a fast inner temperature loop already closed -- which is the case its conflicting record was written about.";

conflictsWith ( lvWithFastTemperatureLoop );

authority  primaryLiterature;
source
{
    author       "S. Skogestad, P. Lundstrom and E. W. Jacobsen";
    year         1990;
    title        "Selecting the best distillation control configuration";
    publication  "AIChE Journal, volume 36, issue 5, pages 753-764 (1990)";
    locus        "the article's stated main finding; a page inside 753-764 is NOT claimed";
    verification searchIndexQuotation;
    verificationNote "Bibliographic record corroborated against the publisher's listing.  The finding was returned by a literature search over the paper's own abstract; the document was NOT opened.";
}
`,st=`/*--------------------------------*- Choupo -*-----------------------*\\
  THE SENSITIVITY CRITERION for locating a temperature-control tray.

  The criterion a control engineer reaches for rather than a designer: not
  "where does the profile change fastest" but "where does the profile RESPOND
  most to the handle I am going to turn".  It costs a second solve, which is
  exactly why it belongs in a simulator and not on a ruler.

  It carries a question the slope criterion does not have: WHICH manipulated
  variable.  The answer moves with it, and Choupo's tool shows it moving.
\\*---------------------------------------------------------------------------*/

recordType controlHeuristic;
domain     distillationControl;
name       sensitivityCriterion;

claim      "Locate the temperature-control tray where the temperature changes most for a small change in the manipulated variable the loop will use.";

topics     ( traySelection );

validity   "One manipulated variable perturbed at a time, by a step small enough that the response is still linear, with every other column specification held.";

notCovered "It does not say WHICH manipulated variable, and the tray it selects depends on that choice -- so an answer quoted without naming the handle is incomplete.  It also says nothing about the size of the perturbation, about interaction with a second loop, or about what happens where the gain changes sign.";

authority  primaryLiterature;
source
{
    author       "W. L. Luyben";
    year         2006;
    title        "Evaluation of criteria for selecting temperature control trays in distillation columns";
    publication  "Journal of Process Control, volume 16, pages 115-134 (2006)";
    locus        "the article, which sets out the sensitivity criterion as one of the five it compares";
    verification searchIndexQuotation;
    verificationNote "Bibliographic record corroborated against publisher listings; the list of five criteria (slope, sensitivity, singular value decomposition, invariant temperature, minimum product variability) was returned by a literature search over the paper's own text.  The paper was NOT opened; no page inside 115-134 is claimed for this sentence.";
}
`,rt=`/*--------------------------------*- Choupo -*-----------------------*\\
  THE PLACEMENT RULE: pair the sensor with a flow at ITS OWN END.

  This is the rule that makes the cross-section worth drawing.  A tray
  temperature in the stripping section belongs to the boilup, one in the
  rectifying section belongs to the reflux -- and when the tray a numerical
  criterion selects sits at the far end from the handle the reader chose, the
  drawing shows a signal line running the length of the column, which is the
  defect made visible.
\\*---------------------------------------------------------------------------*/

recordType controlHeuristic;
domain     distillationControl;
name       sensorAndFlowSameEnd;

claim      "Use a flow at the SAME END of the column as the temperature sensor, and avoid a temperature loop whose manipulated flow can saturate -- control is then lost and setpoints from the layer above cannot be followed.";

stances
(
    { structure LV;            stance favours; }
    { structure singleEndedLV; stance favours; }
);
topics     ( sensorPlacement traySelection );

validity   "A single-loop temperature controller inside a two-product column, under the plantwide framework of the cited article.";

notCovered "It does not say WHICH tray at that end, so it constrains the answer without producing one -- it is a filter over the numerical criteria, not a substitute for them.  It says nothing about a column controlled from both ends at once, and nothing about how close to the end 'the same end' means.";

authority  primaryLiterature;
source
{
    author       "S. Skogestad";
    year         2007;
    title        "The dos and don'ts of distillation column control";
    publication  "Chemical Engineering Research and Design, volume 85 (A1), pages 13-23 (2007)";
    locus        "the article's guidelines on the temperature loop; a page inside 13-23 is NOT claimed";
    verification searchIndexQuotation;
    verificationNote "Bibliographic record corroborated against publisher listings.  Both halves of the claim -- 'an input (flow) in the same end as the temperature sensor should be used' and the warning about input saturation -- were returned in the paper's own words by a literature search over the author's own copy.  The document was NOT opened and the sentences could not be located on a numbered page.";
}
`,at=`/*--------------------------------*- Choupo -*-----------------------*\\
  SINGLE-ENDED CONTROL IS THE ROBUST DEFAULT -- Choupo's own guidance, quoted.

  It is also the record that names, in the guide's own words, WHY this whole
  tool exists: "which is exactly why students find column control hard".
\\*---------------------------------------------------------------------------*/

recordType controlHeuristic;
domain     distillationControl;
name       singleEndedDefault;

claim      "Single-end control -- hold one composition and let the other float -- is the robust default; dual-composition control saves energy but the two loops interact strongly and usually need decoupling.";

stances
(
    { structure singleEndedLV; stance favours; }
    { structure LV;            stance conditional; }
    { structure ratioLDVB;     stance conditional; }
);
topics     ( interaction );

validity   "A two-product column whose second product has a specification loose enough to float, or whose energy penalty for over-purifying one end is acceptable.";

notCovered "It does not say WHICH end to hold, and it does not quantify the energy the floating end costs.  It says nothing about a column whose two products are both on tight specification, where the default it recommends is not available.";

authority  choupoDesignGuide;
source
{
    author       "see the guide's own title page -- docs/preamble.tex decides the authorship line, and this record does not copy its answer";
    year         2026;
    title        "Choupo Design Guide";
    publication  "docs/designGuide.tex, section 'Process control & instrumentation heuristics'";
    locus        "the paragraph beginning 'Distillation is the hard one'";
    verification checkedCopy;
    verificationNote "Read in the repository's own source of the guide.  Choupo's signed engineering judgement, not a cited literature result.";
}
`,lt=`/*--------------------------------*- Choupo -*-----------------------*\\
  THE SLOPE CRITERION for locating a temperature-control tray.

  The oldest and cheapest of the published criteria: read the converged
  temperature profile and take the tray where it is steepest.  It is the one a
  student can apply with a ruler, and it is the one Choupo computes first,
  because the profile is already on the screen.

  Choupo's EduTools column-control tool applies it in the source's own form --
  the difference between ADJACENT trays, T(n+1) - T(n) -- and never as a
  smoothed or central difference, because a smoothing convention is a second
  definition of somebody else's criterion.
\\*---------------------------------------------------------------------------*/

recordType controlHeuristic;
domain     distillationControl;
name       slopeCriterion;

claim      "Locate the temperature-control tray where the steady-state temperature difference between adjacent trays is largest.";

topics     ( traySelection );

validity   "A converged steady-state profile at a fixed column pressure.  The criterion is a screening rule read off one operating point.";

notCovered "It says nothing about whether that tray's temperature actually MOVES when the manipulated variable moves -- a tray can sit on the steepest part of the profile and still have a small gain, or a gain that changes sign.  It also says nothing about which manipulated variable the loop will use, about pressure variation along the column, or about the temperature-composition ambiguity that appears once more than two components are present.";

authority  primaryLiterature;
source
{
    author       "W. L. Luyben";
    year         2006;
    title        "Evaluation of criteria for selecting temperature control trays in distillation columns";
    publication  "Journal of Process Control, volume 16, pages 115-134 (2006)";
    locus        "the article, whose subject is the comparison of five such criteria; the slope criterion is stated there as selecting trays with large steady-state temperature change based on T(n+1) - T(n)";
    verification searchIndexQuotation;
    verificationNote "Bibliographic record (journal, volume, page range, year) corroborated against publisher listings.  The criterion's wording above was returned by a literature search over the paper's own text; the paper was NOT opened, so no single page inside the 115-134 range is claimed for the sentence.";
}
`,ct=`/*--------------------------------*- Choupo -*-----------------------*\\
  THE DB CONFIGURATION HAS AN INFINITE STEADY-STATE RELATIVE GAIN -- AND CAN BE
  CONTROLLED ANYWAY.

  The sharpest single fact in this whole subject, and the one that teaches the
  lesson the ruling is after: a criterion can return a definite, dramatic,
  wrong-looking number and still not settle the question, because it asked at
  the wrong frequency.  A student who has met this once will never again read a
  relative gain as a verdict.

  Choupo does NOT compute a relative gain for the reader's column (NOT-SHIPPED.md
  4).  This claim is carried as literature and marked as such.
\\*---------------------------------------------------------------------------*/

recordType controlHeuristic;
domain     distillationControl;
name       steadyStateRgaMisleads;

claim      "Selecting a configuration on the steady-state relative gain can mislead: the DB configuration has an infinite steady-state relative gain and can still be controlled well, because its high-frequency relative gain is close to one -- so the judgement belongs to the initial response, not to the steady state.";

stances
(
    { structure DB; stance favours; }
);
topics     ( interaction );

validity   "Two-point composition control, judged by frequency-dependent relative-gain analysis with optimal PI controllers, on the columns of the cited study.";

notCovered "It does not say the DB configuration is a good choice, only that the steady-state number is not the reason to reject it.  It does not tell a designer which frequency to look at on their own column, and Choupo computes no relative gain at all, at any frequency.";

authority  primaryLiterature;
source
{
    author       "S. Skogestad, P. Lundstrom and E. W. Jacobsen";
    year         1990;
    title        "Selecting the best distillation control configuration";
    publication  "AIChE Journal, volume 36, issue 5, pages 753-764 (1990)";
    locus        "the article's argument about the steady-state relative gain and its conclusion that controller decisions should be based on the initial response; a page inside 753-764 is NOT claimed";
    verification searchIndexQuotation;
    verificationNote "Bibliographic record (journal, volume, issue, page range, year) corroborated against the publisher's listing.  The claim was returned by a literature search over the paper's own abstract; the document was NOT opened.";
}
`,ut=`/*--------------------------------*- Choupo -*-----------------------*\\
  A TRAY TEMPERATURE STANDS IN FOR A COMPOSITION -- Choupo's own guidance,
  quoted, and the premise the whole tray-selection question rests on.

  Every "composition loop" drawn in the cross-section actually measures a
  temperature.  If that substitution were not made, the question "which tray?"
  would not exist -- so this record is the one that has to be read before the
  computed diagnostic means anything.
\\*---------------------------------------------------------------------------*/

recordType controlHeuristic;
domain     distillationControl;
name       trayTemperatureStandsForComposition;

claim      "Infer a column composition from a SENSITIVE TRAY TEMPERATURE rather than from a composition analyser: the analyser is slow and expensive, and the tray temperature tracks the composition.";

topics     ( sensorPlacement traySelection );

validity   "A column whose temperature profile is sensitive to the composition being controlled -- which is what makes 'sensitive tray' part of the rule rather than decoration.";

notCovered "The substitution is exact only for a binary at fixed pressure.  With more than two components a tray temperature no longer fixes the composition, and the guide's own statement does not cover what to do then; nor does it cover a column whose pressure moves, where the temperature shifts with no composition change at all.";

authority  choupoDesignGuide;
source
{
    author       "see the guide's own title page -- docs/preamble.tex decides the authorship line, and this record does not copy its answer";
    year         2026;
    title        "Choupo Design Guide";
    publication  "docs/designGuide.tex, section 'Process control & instrumentation heuristics'";
    locus        "the pairing table's last row, and the paragraph beginning 'Distillation is the hard one'";
    verification checkedCopy;
    verificationNote "Read in the repository's own source of the guide.  Choupo's signed engineering judgement; the same substitution is recommended in the cited literature (see columnControl-lvWithFastTemperatureLoop.dat), which is a corroboration and not this record's authority.";
}
`,dt=`/*--------------------------------*- Choupo -*-----------------------*\\
  Two-product distillation column: the CANDIDATE CONTROL STRUCTURES.

  This file is a VOCABULARY, not a heuristic.  It says what each named
  structure IS -- which measurement drives which valve -- so that the EduTools
  cross-section can be drawn from a record instead of from a table typed into a
  component.  Nothing here recommends anything; the recommendations are the
  \`columnControl-*.dat\` claims beside it, each with its own citation.

  THE NAMING CONVENTION.  A two-product column has five valves (condenser duty,
  distillate D, reflux L, boilup V, bottoms B) and five things to hold
  (pressure, condenser level, reboiler level, and two compositions).  Pressure
  takes one valve and each level takes another, which leaves TWO -- and the
  structure is NAMED AFTER THOSE TWO.  "LV" therefore means: the levels are on D
  and B, so reflux and boilup are what remains for composition.

  THE ONE CITED DEFINITION.  Skogestad (2007), p. 13, defines the standard LV
  configuration in exactly those terms: condensation flow controls pressure,
  distillate flow controls condenser level, bottoms flow controls reboiler
  level, so that reflux L and boilup V remain free for composition control.
  The other four entries follow from the SAME convention applied to the other
  choices of the two free valves -- they are the convention worked through, not
  four further claims, and no source is quoted for them because none is needed
  to say what a name means.

  WHAT THE COMPOSITION LOOPS MEASURE.  Every composition loop here measures a
  TRAY TEMPERATURE rather than a composition: an analyser is slow and expensive,
  and the substitution is Choupo's own guidance (designGuide, "Process control
  & instrumentation heuristics") and Skogestad's recommendation
  (columnControl-lvWithFastTemperatureLoop.dat).  WHICH tray is not declared
  here -- it is the diagnostic the tool computes on the reader's own column.
\\*---------------------------------------------------------------------------*/

recordType controlStructureCatalogue;
domain     distillationControl;
apparatus  twoProductColumn;

//  The measurement points and the valves the cross-section can draw.  A loop
//  below may only name one of each; an unknown name is refused by the reader,
//  because a signal line drawn to nowhere is worse than a missing one.
measurementPoints ( overhead refluxDrum sump rectifyingTray strippingTray refluxLine feedLine );
valves            ( condenserDuty distillate reflux boilup bottoms feed );

structures
(
    {
        name        LV;
        label       "LV -- reflux and boilup";
        summary     "The conventional structure: each level is held by the product stream leaving it, so reflux and boilup are what remain for composition.";
        freeForComposition ( reflux boilup );
        loops
        (
            { controlled pressure;          measuredAt overhead;      manipulates condenserDuty; kind inventory; }
            { controlled condenserLevel;    measuredAt refluxDrum;    manipulates distillate;    kind inventory; }
            { controlled reboilerLevel;     measuredAt sump;          manipulates bottoms;       kind inventory; }
            { controlled topComposition;    measuredAt rectifyingTray; manipulates reflux;       kind quality; }
            { controlled bottomComposition; measuredAt strippingTray;  manipulates boilup;       kind quality; }
        );
    }

    {
        name        LB;
        label       "LB -- reflux and bottoms";
        summary     "The reboiler level is held by boilup instead of by the bottoms product, which frees B for the bottom composition.";
        freeForComposition ( reflux bottoms );
        loops
        (
            { controlled pressure;          measuredAt overhead;      manipulates condenserDuty; kind inventory; }
            { controlled condenserLevel;    measuredAt refluxDrum;    manipulates distillate;    kind inventory; }
            { controlled reboilerLevel;     measuredAt sump;          manipulates boilup;        kind inventory; }
            { controlled topComposition;    measuredAt rectifyingTray; manipulates reflux;       kind quality; }
            { controlled bottomComposition; measuredAt strippingTray;  manipulates bottoms;      kind quality; }
        );
    }

    {
        name        DV;
        label       "DV -- distillate and boilup";
        summary     "The condenser level is held by reflux instead of by the distillate product, which frees D for the top composition -- the arrangement a high reflux ratio invites, because reflux is then the big stream leaving the drum.";
        freeForComposition ( distillate boilup );
        loops
        (
            { controlled pressure;          measuredAt overhead;      manipulates condenserDuty; kind inventory; }
            { controlled condenserLevel;    measuredAt refluxDrum;    manipulates reflux;        kind inventory; }
            { controlled reboilerLevel;     measuredAt sump;          manipulates bottoms;       kind inventory; }
            { controlled topComposition;    measuredAt rectifyingTray; manipulates distillate;   kind quality; }
            { controlled bottomComposition; measuredAt strippingTray;  manipulates boilup;       kind quality; }
        );
    }

    {
        name        DB;
        label       "DB -- distillate and bottoms";
        summary     "Both levels are held by the internal flows, leaving both PRODUCTS for composition -- the structure a steady-state material balance argues cannot work, and which the frequency-domain argument says can.";
        freeForComposition ( distillate bottoms );
        loops
        (
            { controlled pressure;          measuredAt overhead;      manipulates condenserDuty; kind inventory; }
            { controlled condenserLevel;    measuredAt refluxDrum;    manipulates reflux;        kind inventory; }
            { controlled reboilerLevel;     measuredAt sump;          manipulates boilup;        kind inventory; }
            { controlled topComposition;    measuredAt rectifyingTray; manipulates distillate;   kind quality; }
            { controlled bottomComposition; measuredAt strippingTray;  manipulates bottoms;      kind quality; }
        );
    }

    {
        name        ratioLDVB;
        label       "(L/D)(V/B) -- the double ratio scheme";
        summary     "The levels are held as in LV, but each composition loop sets a RATIO -- reflux to distillate, boilup to bottoms -- so a change in throughput moves both members of the pair together.";
        freeForComposition ( reflux boilup );
        loops
        (
            { controlled pressure;          measuredAt overhead;      manipulates condenserDuty; kind inventory; }
            { controlled condenserLevel;    measuredAt refluxDrum;    manipulates distillate;    kind inventory; }
            { controlled reboilerLevel;     measuredAt sump;          manipulates bottoms;       kind inventory; }
            { controlled topComposition;    measuredAt rectifyingTray; manipulates reflux;       kind quality;  ratioWith distillate; }
            { controlled bottomComposition; measuredAt strippingTray;  manipulates boilup;       kind quality;  ratioWith bottoms; }
        );
    }

    {
        name        singleEndedLV;
        label       "Single-ended LV -- one composition loop";
        summary     "LV with only ONE quality loop closed: the other end is left on a fixed flow and its composition floats, which costs energy and removes the interaction between the two quality loops entirely.";
        freeForComposition ( boilup );
        loops
        (
            { controlled pressure;          measuredAt overhead;      manipulates condenserDuty; kind inventory; }
            { controlled condenserLevel;    measuredAt refluxDrum;    manipulates distillate;    kind inventory; }
            { controlled reboilerLevel;     measuredAt sump;          manipulates bottoms;       kind inventory; }
            { controlled refluxFlow;        measuredAt refluxLine;    manipulates reflux;        kind fixedFlow; }
            { controlled bottomComposition; measuredAt strippingTray; manipulates boilup;        kind quality; }
        );
    }
);
`,ht=Object.assign({"../../../../data/standards/heuristics/columnControl-fastLoopReducesRga.dat":Ze,"../../../../data/standards/heuristics/columnControl-fiveCriteriaCompared.dat":et,"../../../../data/standards/heuristics/columnControl-inventoryBeforeQuality.dat":tt,"../../../../data/standards/heuristics/columnControl-levelOnLargerLeavingStream.dat":nt,"../../../../data/standards/heuristics/columnControl-lvWithFastTemperatureLoop.dat":ot,"../../../../data/standards/heuristics/columnControl-ratioBestForTwoPoint.dat":it,"../../../../data/standards/heuristics/columnControl-sensitivityCriterion.dat":st,"../../../../data/standards/heuristics/columnControl-sensorAndFlowSameEnd.dat":rt,"../../../../data/standards/heuristics/columnControl-singleEndedDefault.dat":at,"../../../../data/standards/heuristics/columnControl-slopeCriterion.dat":lt,"../../../../data/standards/heuristics/columnControl-steadyStateRgaMisleads.dat":ct,"../../../../data/standards/heuristics/columnControl-trayTemperatureStandsForComposition.dat":ut,"../../../../data/standards/heuristics/columnControlStructures.dat":dt}),mt=t=>t.split("/").pop().replace(/\.dat$/,""),v=t=>typeof t=="string"?t:"",G=t=>Array.isArray(t)?t.filter(n=>typeof n=="string"):[],de=t=>Array.isArray(t)?t.filter(n=>typeof n=="object"&&n!==null&&!Array.isArray(n)):[],Ae=["checkedCopy","searchIndexQuotation","generalKnowledge"],Le=["favours","warnsAgainst","conditional","neutral"],pt=["inventory","quality","fixedFlow"];function ft(t,n){const o=v(n.name)||t,i=v(n.claim);if(!i)return`${t}: no \`claim\` — a heuristic that cannot be stated in one sentence is a chapter, not a rule.`;const a=v(n.authority);if(a!=="primaryLiterature"&&a!=="choupoDesignGuide")return`${t}: \`authority\` is '${a||"absent"}' — it must be primaryLiterature (cited) or choupoDesignGuide (Choupo's own signed statement).`;const l=a,c=typeof n.source=="object"&&n.source!==null&&!Array.isArray(n.source)?n.source:null;if(!c)return`${t}: no \`source {}\` block.`;const m=v(c.author),g=v(c.publication);if(l==="primaryLiterature"&&(!m||!g))return`${t}: \`authority primaryLiterature\` with no ${m?"publication":"author"} — an uncited heuristic is refused entry.`;const h=v(c.verification);if(!Ae.includes(h))return`${t}: \`source.verification\` is '${h||"absent"}' — it must be one of ${Ae.join(" / ")}, because how well a citation is known is not something a reader should have to guess.`;const r=[];for(const y of de(n.stances)){const f=v(y.structure),T=v(y.stance);if(!f||!Le.includes(T))return`${t}: a \`stances\` entry names structure '${f||"?"}' with stance '${T||"?"}' — both are required and the stance must be one of `+Le.join(" / ")+".";r.push({structure:f,stance:T})}const s=G(n.topics);return r.length===0&&s.length===0?`${t}: neither \`stances\` nor \`topics\` — a claim that speaks to no structure and no question renders nowhere.`:{file:t,name:o,claim:i,validity:v(n.validity),notCovered:v(n.notCovered),authority:l,source:{author:m,publication:g,year:typeof c.year=="number"?c.year:null,title:v(c.title),locus:v(c.locus),verification:h,verificationNote:v(c.verificationNote)},stances:r,topics:s,conflictsWith:G(n.conflictsWith)}}function gt(t,n){const o=G(n.measurementPoints),i=G(n.valves);if(o.length===0||i.length===0)return`${t}: the structure catalogue must declare both \`measurementPoints\` and \`valves\` — a loop may only name something the record itself introduced, so a signal line is never drawn to nowhere.`;const a=[];for(const l of de(n.structures)){const c=v(l.name);if(!c)return`${t}: a structure with no \`name\`.`;const m=[];for(const g of de(l.loops)){const h=v(g.controlled),r=v(g.measuredAt),s=v(g.manipulates),y=v(g.kind);if(!h||!pt.includes(y))return`${t}: structure ${c} has a loop with no \`controlled\` or an unknown \`kind\` ('${y||"absent"}').`;if(!o.includes(r))return`${t}: structure ${c} measures '${h}' at '${r}', which is not in \`measurementPoints\`.`;if(!i.includes(s))return`${t}: structure ${c} drives '${s}', which is not in \`valves\`.`;const f=v(g.ratioWith);m.push(f?{controlled:h,measuredAt:r,manipulates:s,kind:y,ratioWith:f}:{controlled:h,measuredAt:r,manipulates:s,kind:y})}if(m.length===0)return`${t}: structure ${c} declares no loops.`;a.push({name:c,label:v(l.label)||c,summary:v(l.summary),freeForComposition:G(l.freeForComposition),loops:m})}return a.length===0?`${t}: no \`structures\` — the catalogue is empty.`:{structures:a,points:o,valves:i}}function yt(t=ht){const n=[],o=[],i=[];let a=[],l=[];for(const h of Object.keys(t).sort()){const r=mt(h);let s;try{s=Qe(Ke(t[h]))}catch(f){i.push(`${r}: does not parse as a Choupo dict (${f instanceof Error?f.message:String(f)}).`);continue}const y=v(s.recordType);if(y==="controlHeuristic"){const f=ft(r,s);typeof f=="string"?i.push(f):o.push(f)}else if(y==="controlStructureCatalogue"){const f=gt(r,s);if(typeof f=="string"){i.push(f);continue}n.push(...f.structures),a=f.points,l=f.valves}else i.push(`${r}: unknown \`recordType\` '${y||"absent"}' — this reader knows controlHeuristic and controlStructureCatalogue.`)}const c=new Set(n.map(h=>h.name)),m=new Set(o.map(h=>h.name)),g=[];for(const h of o){const r=h.stances.find(y=>!c.has(y.structure));if(r){i.push(`${h.file}: takes a stance on structure '${r.structure}', which the structure catalogue does not declare.`);continue}const s=h.conflictsWith.find(y=>!m.has(y));if(s){i.push(`${h.file}: declares a conflict with '${s}', which is not a record here — a disagreement with an absence.`);continue}g.push(h)}return{structures:n,heuristics:g,measurementPoints:a,valves:l,refusals:i.sort()}}function Ne(t,n){return t.heuristics.filter(o=>o.stances.some(i=>i.structure===n))}function bt(t,n){return t.heuristics.filter(o=>o.topics.includes(n))}function vt(t,n){return t.stances.find(o=>o.structure===n)?.stance??null}function xt(t,n){const o=Ne(t,n),i=[];for(let a=0;a<o.length;++a)for(let l=a+1;l<o.length;++l){const c=o[a],m=o[l];(c.conflictsWith.includes(m.name)||m.conflictsWith.includes(c.name))&&i.push([c,m])}return i}const he="stage",ne="T";function ae(t,n){if(!t)return[];const o=[];for(const i of t){if(i.xAxis!==he)continue;const a=i.columns[ne],l=i.columns[he];if(!a||!l||a.length!==l.length||a.length<4)continue;const c=n?.[i.unit];o.push(c?{unit:i.unit,profile:i,kpis:c}:{unit:i.unit,profile:i})}return o.sort((i,a)=>i.unit.localeCompare(a.unit))}function Oe(t){return{lo:2,hi:Math.max(2,t-1)}}function wt(t){const n=t.length,{lo:o,hi:i}=Oe(n),a=[];for(let l=o;l<=i-1;++l){const c=t[l-1],m=t[l];c===void 0||m===void 0||!Number.isFinite(c)||!Number.isFinite(m)||a.push({stage:l,value:Math.abs(m-c)})}return a}function Tt(t,n,o){const i=Math.min(t.length,n.length);if(i<4||!Number.isFinite(o)||o===0)return[];const{lo:a,hi:l}=Oe(i),c=[];for(let m=a;m<=l;++m){const g=t[m-1],h=n[m-1];g===void 0||h===void 0||!Number.isFinite(g)||!Number.isFinite(h)||c.push({stage:m,value:(h-g)/(o*100)})}return c}function Ct(t){const n=t?.L_rect,o=t?.D;return typeof n!="number"||typeof o!="number"||!Number.isFinite(n)||!Number.isFinite(o)||n<=0||o<=0?null:{L:n,D:o,ratio:n/o,larger:n>o?"reflux":"distillate"}}function je(t){let n=null;for(const o of t)Number.isFinite(o.value)&&(n===null||Math.abs(o.value)>Math.abs(n.value))&&(n=o);return n}function kt(t){const n=[];for(let o=0;o+1<t.length;++o){const i=t[o],a=t[o+1];!Number.isFinite(i.value)||!Number.isFinite(a.value)||(i.value<0&&a.value>0||i.value>0&&a.value<0)&&n.push({below:i.stage,above:a.stage})}return n}const De="steady/distillation/column02_simultaneous",Re=2,$e=50,We=8,pe=[{id:"refluxRatio",label:"reflux ratio R = L/D",file:"system/flowsheetDict",key:"refluxRatio",def:Re,min:1.1,max:6,step:.1,unit:"",why:"the reflux ratio decides which stream leaving the reflux drum is the larger one, which is the heuristic that decides LV against DV — and it moves the temperature profile the tray criteria are read from"},{id:"distillateRate",label:"distillate rate D",file:"system/flowsheetDict",key:"distillateRate",def:$e,min:20,max:80,step:1,unit:"kmol/h",why:"the material-balance handle: it sets the split before any loop is closed, and it is the second of the two handles the sensitivity criterion can be asked about"},{id:"feedStage",label:"feed stage",file:"system/flowsheetDict",key:"feedStage",def:We,min:3,max:13,step:1,unit:"",why:"the feed is where the profile bends; moving it moves the steep region and therefore the tray the slope criterion picks"}];function Et(){const t={};for(const n of pe)t[n.id]=n.def;return t}function Pe(t){const n=[];for(const o of pe){const i=t[o.id];i!==void 0&&Number.isFinite(i)&&n.push({file:o.file,key:o.key,value:i})}return n}function At(t,n,o){const i=t.refluxRatio??Re,a=t.distillateRate??$e,l=Pe(t),c=(m,g)=>{const h=l.findIndex(r=>r.key===m);h>=0?l[h]={...l[h],value:g}:l.push({file:"system/flowsheetDict",key:m,value:g})};return n==="reflux"?c("refluxRatio",i*(1+o)):(c("distillateRate",a*(1+o)),c("refluxRatio",i/(1+o))),l}const q={reflux:{label:"reflux L",means:"R is raised with D held, so the reflux is the only stream that moves — the first manipulated variable of the LV configuration."},distillate:{label:"distillate D",means:"D is raised and R lowered together so that L = R·D is unchanged, so the distillate is the only stream that moves — the manipulated variable the DV configuration frees."}};function Lt(t,n){return t?t.loops.find(o=>o.kind==="quality"&&o.manipulates===n)??null:null}const jt=`Runs tutorials/${De} TWICE with your parameters, in your browser (choupoSolve WASM): once as declared, once with the manipulated variable moved.  Every temperature is the column's own published stage profile; this file takes differences of them and draws the result.`,_e=620,oe=470,j=132,C=214,P=96,W=392,St={condenserDuty:{x:388,y:44},distillate:{x:500,y:158},reflux:{x:268,y:122},boilup:{x:388,y:448},bottoms:{x:500,y:424}},Se={overhead:{x:292,y:62},refluxDrum:{x:420,y:122},sump:{x:173,y:420},refluxLine:{x:300,y:100},feedLine:{x:60,y:214}};function O(t,n){const o=Math.max(1,n-2),i=Math.min(Math.max(t-2,0),o-1);return P+(i+.5)*(W-P)/o}const Z=(t,n)=>({x:C+10,y:O(t,n)});function le(t,n,o){return t==="feed"?{x:86,y:O(n,o)}:St[t]??null}function It(t){return{pressure:"PC",condenserLevel:"LC",reboilerLevel:"LC",topComposition:"TC",bottomComposition:"TC",refluxFlow:"FC",feedFlow:"FC"}[t]??t.slice(0,2).toUpperCase()}const _=(t,n=4)=>typeof t=="number"&&Number.isFinite(t)?t.toPrecision(n):"—",He="var(--mantine-color-default-border)",x="var(--mantine-color-dimmed)",L="#8d9aa8",U="#9575cd",Y="#ffb74d",D="#26c6da",me="#66bb6a",Q="#ef5350";function Nt({structure:t,nStages:n,feedStage:o,sensorStage:i,sensorCriterion:a,sensorLoop:l,busyOverlay:c}){const m=[];for(let r=2;r<=n-1;++r)m.push(r);const g=t.loops.filter(r=>le(r.manipulates,o,n)===null||r.measuredAt!=="rectifyingTray"&&r.measuredAt!=="strippingTray"&&!Se[r.measuredAt]).map(r=>r.controlled),h=r=>{if(r.measuredAt==="rectifyingTray"||r.measuredAt==="strippingTray"){if(l&&r.controlled===l.controlled&&i!==null)return Z(i,n);const s=r.measuredAt==="rectifyingTray"?Math.max(2,Math.round(n*.3)):Math.min(n-1,Math.round(n*.72));return Z(s,n)}return Se[r.measuredAt]??null};return e.jsxs(k,{style:{flex:1,minHeight:0,position:"relative"},children:[c&&e.jsx(k,{style:{position:"absolute",inset:0,display:"flex",alignItems:"center",justifyContent:"center",zIndex:1,background:"light-dark(rgba(255,255,255,0.5), rgba(0,0,0,0.35))"},children:e.jsx(ie,{size:"sm"})}),e.jsxs("svg",{viewBox:`0 0 ${_e} ${oe}`,width:"100%",height:"100%",preserveAspectRatio:"xMidYMid meet",role:"img","aria-label":`Cross-section of a two-product distillation column under the ${t.name} control structure, with the instrument bubbles, the control valves and the signal line from each measurement to the valve it drives`,children:[e.jsx("rect",{x:j,y:P,width:C-j,height:W-P,fill:"none",stroke:L,strokeWidth:2,rx:6}),m.map(r=>e.jsx("line",{x1:j+6,y1:O(r,n),x2:C-6,y2:O(r,n),stroke:He,strokeWidth:1},`t${r}`)),e.jsxs("text",{x:(j+C)/2,y:P-10,textAnchor:"middle",fontSize:11,fill:x,children:[n," stages"]}),e.jsx("rect",{x:330,y:44,width:104,height:34,fill:"none",stroke:L,strokeWidth:1.6,rx:4}),e.jsx("text",{x:382,y:65,textAnchor:"middle",fontSize:10,fill:x,children:"condenser"}),e.jsx("rect",{x:330,y:104,width:104,height:38,fill:"none",stroke:L,strokeWidth:1.6,rx:4}),e.jsx("text",{x:382,y:127,textAnchor:"middle",fontSize:10,fill:x,children:"reflux drum"}),e.jsx("rect",{x:330,y:396,width:104,height:36,fill:"none",stroke:L,strokeWidth:1.6,rx:4}),e.jsx("text",{x:382,y:418,textAnchor:"middle",fontSize:10,fill:x,children:"reboiler"}),e.jsx("polyline",{points:`${(j+C)/2},${P} ${(j+C)/2},62 330,62`,fill:"none",stroke:Y,strokeWidth:2}),e.jsx("line",{x1:382,y1:78,x2:382,y2:104,stroke:D,strokeWidth:2}),e.jsx("line",{x1:388,y1:20,x2:388,y2:44,stroke:D,strokeWidth:2}),e.jsx("text",{x:396,y:26,fontSize:10,fill:x,children:"coolant"}),e.jsx("polyline",{points:`330,122 ${C},122`,fill:"none",stroke:D,strokeWidth:2}),e.jsx("text",{x:276,y:114,fontSize:10,fill:x,children:"reflux L"}),e.jsx("polyline",{points:"434,122 470,122 470,158 520,158",fill:"none",stroke:D,strokeWidth:2}),e.jsx("text",{x:504,y:150,fontSize:11,fill:x,children:"D"}),e.jsx("polyline",{points:`${C},414 300,414 300,414 330,414`,fill:"none",stroke:L,strokeWidth:2}),e.jsx("polyline",{points:`330,400 300,400 300,${W} ${C},${W}`,fill:"none",stroke:Y,strokeWidth:2}),e.jsx("text",{x:244,y:396,fontSize:10,fill:x,children:"boilup V"}),e.jsx("line",{x1:388,y1:432,x2:388,y2:458,stroke:Y,strokeWidth:2}),e.jsx("text",{x:396,y:456,fontSize:10,fill:x,children:"steam"}),e.jsx("polyline",{points:"434,424 520,424",fill:"none",stroke:L,strokeWidth:2}),e.jsx("text",{x:504,y:416,fontSize:11,fill:x,children:"B"}),e.jsx("line",{x1:j,y1:W,x2:j,y2:424,stroke:L,strokeWidth:2}),e.jsx("line",{x1:C,y1:W,x2:C,y2:424,stroke:L,strokeWidth:2}),e.jsx("line",{x1:j,y1:424,x2:C,y2:424,stroke:L,strokeWidth:2}),e.jsx("polyline",{points:`40,${O(o,n)} ${j},${O(o,n)}`,fill:"none",stroke:L,strokeWidth:2}),e.jsxs("text",{x:40,y:O(o,n)-8,fontSize:10,fill:x,children:["feed (stage ",o,")"]}),t.loops.map(r=>{const s=le(r.manipulates,o,n);return s?e.jsx("g",{children:e.jsx("path",{d:`M ${s.x-8} ${s.y-7} L ${s.x+8} ${s.y+7} L ${s.x+8} ${s.y-7} L ${s.x-8} ${s.y+7} Z`,fill:"none",stroke:L,strokeWidth:1.6})},`v${r.controlled}`):null}),t.loops.map(r=>{const s=h(r),y=le(r.manipulates,o,n);if(!s||!y)return null;const f=l!==null&&r.controlled===l.controlled,T=r.kind==="quality"&&!f,E=f?me:r.kind==="quality"?x:U;return e.jsxs("g",{children:[e.jsx("polyline",{points:`${s.x},${s.y} ${(s.x+y.x)/2},${s.y} ${(s.x+y.x)/2},${y.y} ${y.x},${y.y}`,fill:"none",stroke:E,strokeWidth:1.2,strokeDasharray:"4 3",opacity:T?.45:1}),e.jsx("circle",{cx:s.x,cy:s.y,r:11,fill:"var(--mantine-color-body)",stroke:E,strokeWidth:f?2:1.4,opacity:T?.55:1}),e.jsx("text",{x:s.x,y:s.y+3.5,textAnchor:"middle",fontSize:9,fill:E,opacity:T?.7:1,children:It(r.controlled)}),r.ratioWith&&e.jsxs("text",{x:s.x,y:s.y-15,textAnchor:"middle",fontSize:8,fill:E,children:["ratio ÷ ",r.ratioWith]})]},`l${r.controlled}`)}),i!==null&&l!==null&&e.jsxs("text",{x:Z(i,n).x+16,y:Z(i,n).y+3.5,fontSize:10,fill:me,children:["stage ",i," — picked by the"," ",a==="sensitivity"?"sensitivity criterion":"slope criterion"]}),l===null&&e.jsx("text",{x:244,y:oe-8,fontSize:10,fill:Q,children:"the chosen handle is not free for composition in this structure — see the note below"}),g.length>0&&e.jsxs("text",{x:20,y:oe-8,fontSize:10,fill:Q,children:["not drawn (no place on this layout): ",g.join(", ")]})]})]})}const ee=62,ce=292,z=20,S=396,te=356,V=596;function Ot({T:t,slope:n,sens:o,slopePick:i,sensPick:a,handle:l,busyOverlay:c}){const m=t.length,g=t.filter(d=>Number.isFinite(d)),h=g.length?Math.min(...g):0,r=g.length?Math.max(...g):1,s=d=>z+(S-z)*(d-1)/Math.max(1,m-1),y=d=>ee+(ce-ee)*(d-h)/Math.max(1e-9,r-h),f=Math.max(1e-9,...n.map(d=>Math.abs(d.value))),T=Math.max(1e-9,...o.map(d=>Math.abs(d.value))),E=(V-te)/2,N=(te+V)/2;return e.jsxs(k,{style:{flex:1,minHeight:0,position:"relative"},children:[c&&e.jsx(k,{style:{position:"absolute",inset:0,display:"flex",alignItems:"center",justifyContent:"center",zIndex:1,background:"light-dark(rgba(255,255,255,0.5), rgba(0,0,0,0.35))"},children:e.jsx(ie,{size:"sm"})}),e.jsxs("svg",{viewBox:`0 0 ${_e} ${oe}`,width:"100%",height:"100%",preserveAspectRatio:"xMidYMid meet",role:"img","aria-label":`Stage temperature profile beside the two tray-selection
          criteria, with the stage each one selects marked`,children:[e.jsx("text",{x:(ee+ce)/2,y:12,textAnchor:"middle",fontSize:11,fill:x,children:"stage temperature (K)"}),e.jsx("polyline",{points:t.map((d,R)=>Number.isFinite(d)?`${y(d).toFixed(2)},${s(R+1).toFixed(2)}`:"").filter(Boolean).join(" "),fill:"none",stroke:Y,strokeWidth:2}),t.map((d,R)=>Number.isFinite(d)?e.jsx("circle",{cx:y(d),cy:s(R+1),r:2,fill:Y},`p${R}`):null),e.jsx("text",{x:ee,y:S+18,fontSize:10,fill:x,children:_(h,5)}),e.jsx("text",{x:ce,y:S+18,textAnchor:"end",fontSize:10,fill:x,children:_(r,5)}),e.jsxs("text",{x:16,y:(z+S)/2,fontSize:10,fill:x,transform:`rotate(-90 16 ${(z+S)/2})`,children:["stage (1 = condenser, ",m," = reboiler)"]}),e.jsx("line",{x1:N,y1:z,x2:N,y2:S,stroke:He,strokeWidth:1}),e.jsx("text",{x:te,y:12,fontSize:10,fill:D,children:"slope |T(n+1)−T(n)|"}),e.jsxs("text",{x:V,y:12,textAnchor:"end",fontSize:10,fill:U,children:["sensitivity to ",q[l].label]}),n.map(d=>e.jsx("rect",{x:N-E*Math.abs(d.value)/f,y:s(d.stage)-5,width:E*Math.abs(d.value)/f,height:10,fill:D,opacity:i?.stage===d.stage?1:.45},`s${d.stage}`)),o.map(d=>e.jsx("rect",{x:N,y:s(d.stage)-5,width:E*Math.abs(d.value)/T,height:10,fill:d.value<0?Q:U,opacity:a?.stage===d.stage?1:.45},`v${d.stage}`)),i&&e.jsx("text",{x:te-4,y:s(i.stage)+3.5,textAnchor:"end",fontSize:10,fill:D,children:i.stage}),a&&e.jsx("text",{x:V+4,y:s(a.stage)+3.5,fontSize:10,fill:U,children:a.stage}),e.jsx("text",{x:N,y:S+18,textAnchor:"middle",fontSize:9,fill:x,children:"bars are scaled to each criterion's own maximum — the two are not comparable in size, only in WHICH stage they pick"}),e.jsx("text",{x:V,y:S+32,textAnchor:"end",fontSize:9,fill:Q,children:"a red bar is a NEGATIVE gain: the temperature falls when the handle rises"})]})]})}function Ie({h:t,structure:n}){const o=vt(t,n),i=t.authority==="primaryLiterature";return e.jsxs(k,{style:{borderLeft:`3px solid ${o==="favours"?me:o==="warnsAgainst"?Q:U}`,paddingLeft:10,marginBottom:12},children:[e.jsxs(ue,{gap:6,wrap:"wrap",align:"center",mb:2,children:[o&&e.jsx(I,{size:"xs",variant:"light",tt:"none",color:o==="favours"?"green":o==="warnsAgainst"?"red":"grape",children:o==="favours"?"favours this structure":o==="warnsAgainst"?"warns against this structure":o==="conditional"?"conditional on this structure":"neutral"}),e.jsx(I,{size:"xs",variant:"outline",tt:"none",color:i?"blue":"orange",children:i?"cited":"Choupo's own guide (signed)"}),e.jsx(B,{withArrow:!0,multiline:!0,w:430,label:t.source.verificationNote,children:e.jsx(I,{size:"xs",variant:"light",tt:"none",color:t.source.verification==="checkedCopy"?"teal":t.source.verification==="searchIndexQuotation"?"yellow":"red",styles:{root:{cursor:"help"}},children:t.source.verification==="checkedCopy"?"checked copy":t.source.verification==="searchIndexQuotation"?"citation not opened":"UNVERIFIED — general knowledge"})})]}),e.jsx(b,{size:"sm",style:{lineHeight:1.35},children:t.claim}),e.jsxs(b,{size:"xs",c:"dimmed",mt:3,children:[t.source.author,t.source.year?` (${t.source.year})`:"",","," ",e.jsx("i",{children:t.source.title}),". ",t.source.publication,t.source.locus?` — ${t.source.locus}`:""]}),t.validity&&e.jsxs(b,{size:"xs",c:"dimmed",mt:3,children:[e.jsx("b",{children:"Asserted for:"})," ",t.validity]}),t.notCovered&&e.jsxs(b,{size:"xs",c:"dimmed",mt:2,children:[e.jsx("b",{children:"Does not cover:"})," ",t.notCovered]})]})}function Ut(){const t=w.useMemo(()=>yt(),[]),n=Je(u=>u.runResult),[o,i]=w.useState("LV"),a=t.structures.find(u=>u.name===o)??t.structures[0]??null,[l,c]=w.useState("reflux"),[m,g]=w.useState("section"),[h,r]=w.useState(1),[s,y]=w.useState(Et),f=w.useCallback((u,A)=>{y(J=>({...J,[u]:A}))},[]),T=w.useMemo(()=>ae(n?.profiles,n?.kpis)[0]??null,[n]),[E,N]=w.useState("classroom"),d=T!==null&&E==="current"?"current":"classroom",R=T!==null||E==="current",$=h/100,Fe=w.useMemo(()=>JSON.stringify(s),[s]),Me=w.useMemo(()=>JSON.stringify([s,l,$]),[s,l,$]),ze=w.useMemo(()=>Pe(s),[s]),Ve=w.useMemo(()=>At(s,l,$),[s,l,$]),fe=d==="classroom"?De:null,H=Te(fe,ze,Fe,"choupoSolve"),F=Te(fe,Ve,Me,"choupoSolve"),K=H.busy||F.busy,M=w.useMemo(()=>d==="current"?T:ae(H.result?.profiles,H.result?.kpis)[0]??null,[d,T,H.result]),ge=w.useMemo(()=>d==="current"?null:ae(F.result?.profiles,F.result?.kpis)[0]??null,[d,F.result]),p=w.useMemo(()=>{if(!M)return null;const u=M.profile.columns[ne];if(!u)return null;const A=wt(u),J=ge?.profile.columns[ne],se=J?Tt(u,J,$):[];return{unit:M.unit,T:u,nStages:u.length,slope:A,sens:se,slopePick:je(A),sensPick:je(se),crossings:kt(se),drum:Ct(M.kpis)}},[M,ge,$]),ye=Lt(a,l),Be=p?.sensPick?"sensitivity":p?.slopePick?"slope":null,qe=p?.sensPick?.stage??p?.slopePick?.stage??null,Ge=Math.round(s.feedStage??We),be=e.jsxs(e.Fragment,{children:[R&&e.jsx(X,{size:"xs",value:d,fullWidth:!0,onChange:u=>N(u==="current"?"current":"classroom"),data:[{label:"Classroom",value:"classroom"},{label:"Current run",value:"current"}]}),e.jsxs(k,{children:[e.jsx(b,{size:"xs",c:"dimmed",mb:2,children:"view"}),e.jsx(X,{size:"xs",value:m,fullWidth:!0,orientation:"vertical",onChange:u=>g(u),data:[{label:"Cross-section (P&ID)",value:"section"},{label:"Tray selection",value:"tray"},{label:"Cited heuristics",value:"rules"}]})]}),e.jsxs(k,{children:[e.jsx(b,{size:"xs",c:"dimmed",mb:2,children:"control structure"}),e.jsx(X,{size:"xs",value:o,fullWidth:!0,orientation:"vertical",onChange:i,data:t.structures.map(u=>({label:u.name,value:u.name}))})]}),e.jsxs(k,{children:[e.jsx(b,{size:"xs",c:"dimmed",mb:2,children:"manipulated variable the temperature loop will use"}),e.jsx(X,{size:"xs",value:l,fullWidth:!0,onChange:u=>c(u),data:[{label:"reflux L",value:"reflux"},{label:"distillate D",value:"distillate"}]}),e.jsx(b,{size:"xs",c:"dimmed",mt:3,style:{lineHeight:1.25},children:q[l].means})]}),d==="classroom"&&e.jsxs(e.Fragment,{children:[K&&e.jsxs(ue,{gap:6,wrap:"nowrap",align:"center",children:[e.jsx(ie,{size:"xs"}),e.jsx(b,{size:"xs",c:"dimmed",children:"two solves — the base column and the perturbed one"})]}),pe.map(u=>e.jsx(Ce,{knob:u,value:s[u.id]??u.def,onChange:A=>f(u.id,A)},u.id)),e.jsx(Ce,{knob:{id:"step",label:"perturbation for the sensitivity",min:.25,max:5,step:.25,unit:"% of the handle",why:"the sensitivity criterion is a finite difference, so it has a step size; move it and watch the SELECTED stage stay put while the magnitude drifts — that is what tells you the answer is not an artefact of the step"},value:h,onChange:r,showWhy:!0}),e.jsx(ke,{children:jt})]}),d==="current"&&e.jsx(ke,{children:"Reading the app's current run. Only the SLOPE criterion is available on it: the sensitivity criterion needs a second solve with the manipulated variable moved, and a finished run is one operating point."})]}),ve=H.err??F.err,xe=e.jsxs(e.Fragment,{children:[d==="classroom"&&ve!==null&&e.jsx(re,{color:"red",variant:"light",m:12,title:"The run refused or failed — the engine's message, verbatim",children:e.jsx(b,{size:"xs",ff:"monospace",style:{whiteSpace:"pre-wrap"},children:ve})}),t.refusals.length>0&&e.jsx(re,{color:"orange",variant:"light",m:12,title:`${t.refusals.length} heuristic record(s) could not be read, and each is named rather than dropped`,children:t.refusals.map(u=>e.jsx(b,{size:"xs",ff:"monospace",children:u},u))})]});if(!a)return e.jsxs(Ee,{title:"setup",setup:be,children:[xe,e.jsx(k,{p:12,children:e.jsx(b,{size:"sm",c:"dimmed",children:"No control structure could be read from data/standards/heuristics/ — the drawing is declared there, and this tool draws nothing it cannot read."})})]});const we=Ne(t,a.name),Ue=bt(t,"traySelection"),Ye=xt(t,a.name);return e.jsxs(Ee,{title:"setup",setup:be,children:[xe,e.jsxs(ue,{gap:"sm",wrap:"wrap",align:"center",px:12,py:6,style:{flexShrink:0},children:[e.jsx(B,{withArrow:!0,multiline:!0,w:430,label:a.summary,children:e.jsx(I,{variant:"light",color:"grape",tt:"none",styles:{root:{cursor:"help"}},children:a.label})}),e.jsx(B,{withArrow:!0,multiline:!0,w:440,label:"The largest |T(n+1) − T(n)| over the stages that are trays (stage 1 is the condenser and the last stage the reboiler, so neither can carry a tray thermocouple).  Read off ONE solved profile — the criterion a student can apply with a ruler.",children:e.jsxs(I,{variant:"light",color:"cyan",tt:"none",styles:{root:{cursor:"help"}},children:["slope picks ",p?.slopePick?`stage ${p.slopePick.stage} (${_(p.slopePick.value,4)} K between it and stage ${p.slopePick.stage+1})`:"—"]})}),e.jsx(B,{withArrow:!0,multiline:!0,w:440,label:"The largest |ΔT| per 1 % move of the manipulated variable, from a SECOND solve of the same column.  This is the number a published table cannot give you: it belongs to this column at these settings with this handle.",children:e.jsxs(I,{variant:"light",color:"violet",tt:"none",styles:{root:{cursor:"help"}},children:["sensitivity picks ",p?.sensPick?`stage ${p.sensPick.stage} (${p.sensPick.value>=0?"+":""}${_(p.sensPick.value,3)} K per 1 % of ${q[l].label})`:d==="current"?"— (needs a second solve)":"—"]})}),p?.drum&&e.jsx(B,{withArrow:!0,multiline:!0,w:450,label:`Choupo's Design Guide says to hold a level with the LARGER stream leaving that drum, and both streams are on this run's KPI row (L_rect and D), so the rule has a number here: L/D = ${_(p.drum.ratio,4)}.  What the rule does NOT ship is a THRESHOLD — the published forms disagree about where 'larger' starts to matter, none could be pinned to a checked page, and so this chip says which is larger and stops there.`,children:e.jsxs(I,{variant:"light",color:"orange",tt:"none",styles:{root:{cursor:"help"}},children:["leaving the drum: L/D = ",_(p.drum.ratio,4)," — the"," ",p.drum.larger==="reflux"?"reflux":"distillate"," is the"," ","larger stream"]})}),p?.slopePick&&p.sensPick&&e.jsx(I,{variant:"light",tt:"none",color:p.slopePick.stage===p.sensPick.stage?"green":"orange",children:p.slopePick.stage===p.sensPick.stage?"the two criteria agree":`the two criteria DISAGREE — ${p.slopePick.stage} against ${p.sensPick.stage}`})]}),m==="section"?e.jsx(Nt,{structure:a,nStages:p?.nStages??15,feedStage:Ge,sensorStage:qe,sensorCriterion:Be,sensorLoop:ye,busyOverlay:d==="classroom"&&K}):m==="tray"?p?e.jsx(Ot,{T:p.T,slope:p.slope,sens:p.sens,slopePick:p.slopePick,sensPick:p.sensPick,handle:l,busyOverlay:d==="classroom"&&K}):e.jsx(k,{style:{flex:1,display:"flex",alignItems:"center",justifyContent:"center",padding:12},children:K?e.jsx(ie,{size:"sm"}):e.jsxs(b,{size:"sm",c:"dimmed",ta:"center",maw:520,children:["No column profile yet — the diagnostic activates when a solved unit publishes a per-stage profile whose axis is"," ",e.jsx("b",{children:he})," and which carries a ",e.jsx("b",{children:ne})," ","column, which is what a ",e.jsx("code",{children:"distillationColumn"})," emits."]})}):e.jsx(Xe,{style:{flex:1,minHeight:0},type:"auto",children:e.jsxs(k,{p:12,children:[e.jsxs(b,{size:"xs",c:"dimmed",mb:8,children:["What the authorities say about ",e.jsx("b",{children:a.label}),". Where two disagree, both are shown with the conditions each assumed; nothing here is scored, weighted or reconciled."]}),we.length===0&&e.jsx(b,{size:"sm",c:"dimmed",mb:12,children:"No record in the catalogue takes a stance on this structure. That is an absence of evidence, not a verdict — silence is not a neutral opinion, and this tool does not manufacture one."}),we.map(u=>e.jsx(Ie,{h:u,structure:a.name},u.file)),Ye.map(([u,A])=>e.jsxs(re,{color:"orange",variant:"light",mb:12,title:"Two authorities disagree here — deliberately not resolved",children:[e.jsxs(b,{size:"xs",children:[e.jsxs("b",{children:[u.source.author," (",u.source.year,")"]})," ",u.claim]}),e.jsxs(b,{size:"xs",mt:4,children:[e.jsxs("b",{children:[A.source.author," (",A.source.year,")"]})," ",A.claim]}),e.jsxs(b,{size:"xs",mt:6,c:"dimmed",children:["Read the two ",e.jsx("i",{children:"Asserted for"})," lines above: the conditions are not the same, and which of them is yours is the judgement this tool exists to hand back to you rather than make."]})]},`${u.name}|${A.name}`)),e.jsx(b,{size:"xs",c:"dimmed",mt:16,mb:6,style:{fontWeight:600},children:"On choosing the tray"}),Ue.map(u=>e.jsx(Ie,{h:u,structure:a.name},`t${u.file}`))]})}),e.jsxs(k,{px:12,pb:8,style:{flexShrink:0},children:[ye===null&&e.jsxs(b,{size:"xs",c:"red",children:["In ",a.name,", ",q[l].label," is not free for composition — it is spent on"," ",a.loops.find(u=>u.manipulates===l)?.controlled??"an inventory",". The sensitivity below is a valid perturbation of this column, but no loop in this structure would use it; the structure that frees this handle is the one to switch to."]}),p&&p.crossings.length>0&&e.jsxs(b,{size:"xs",c:"dimmed",children:["The response to ",q[l].label," changes SIGN between stage ",p.crossings[0].below," and"," ",p.crossings[0].above,": a sensor there has almost no gain, whatever the profile looks like. The slope criterion cannot see this, because it never asks the handle a question."]}),e.jsx(b,{size:"xs",c:"dimmed",children:"Every temperature above is the column's own published stage profile; this file takes a difference between adjacent stages, and a difference between two engine runs, and draws them. It computes no relative gain — the engine publishes no gain matrix — and it shows no transient: a level that moves is an accumulation term, the engine has no dynamic column, and a fabricated response would teach a specific wrong thing with confidence."})]})]})}export{pe as COLUMN_CONTROL_KNOBS,De as COLUMN_CONTROL_WITNESS,Ut as ColumnControlTool,q as HANDLE_TEXT,he as STAGE_COLUMN,ne as T_COLUMN,$e as WITNESS_DISTILLATE_RATE,We as WITNESS_FEED_STAGE,Re as WITNESS_REFLUX_RATIO,Pe as baseOverrides,Et as defaultKnobValues,Ct as drumStreams,ae as findColumnFeeds,It as isaTag,At as perturbedOverrides,je as pickStage,le as placeValve,Lt as qualityLoopFor,Tt as sensitivityMetric,kt as signChanges,wt as slopeMetric,O as stageY,Oe as trayRange};
