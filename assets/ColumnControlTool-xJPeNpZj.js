import{eR as st,e5 as rt,ep as k,fj as Oe,dA as e,aR as se,e as T,a_ as v,y as xe,a2 as de,a as fe,b2 as ge,aV as re,b3 as J,c as O,aQ as at}from"./index-CgIu0HgC.js";import{e as Re,f as lt,b as $e,P as We,c as ct,l as ut}from"./knobPanel-DsgwdCl9.js";import{b as _e}from"./methodRun-Dc4dXMYG.js";import{C as dt,a as ht}from"./columnControlLesson-Dmg8w8zv.js";import"./chapters-DIiF-xU6.js";import"./Slider-DA9N1lmj.js";const mt=`/*--------------------------------*- Choupo -*-----------------------*\\
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
`,pt=`/*--------------------------------*- Choupo -*-----------------------*\\
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
`,ft=`/*--------------------------------*- Choupo -*-----------------------*\\
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
`,gt=`/*--------------------------------*- Choupo -*-----------------------*\\
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
`,yt=`/*--------------------------------*- Choupo -*-----------------------*\\
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
`,bt=`/*--------------------------------*- Choupo -*-----------------------*\\
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
`,vt=`/*--------------------------------*- Choupo -*-----------------------*\\
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
`,xt=`/*--------------------------------*- Choupo -*-----------------------*\\
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
`,wt=`/*--------------------------------*- Choupo -*-----------------------*\\
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
`,Tt=`/*--------------------------------*- Choupo -*-----------------------*\\
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
`,Ct=`/*--------------------------------*- Choupo -*-----------------------*\\
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

//  \`conditional\`, not \`favours\` (C259 audit F9): the claim is that the
//  steady-state relative gain is not a reason to REJECT DB, and its own
//  notCovered says it does not call DB a good choice; a \`favours\` badge
//  on the DB card said the opposite.
stances
(
    { structure DB; stance conditional; }
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
`,kt=`/*--------------------------------*- Choupo -*-----------------------*\\
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
`,jt=`/*--------------------------------*- Choupo -*-----------------------*\\
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
`,At=Object.assign({"../../../../data/standards/heuristics/columnControl-fastLoopReducesRga.dat":mt,"../../../../data/standards/heuristics/columnControl-fiveCriteriaCompared.dat":pt,"../../../../data/standards/heuristics/columnControl-inventoryBeforeQuality.dat":ft,"../../../../data/standards/heuristics/columnControl-levelOnLargerLeavingStream.dat":gt,"../../../../data/standards/heuristics/columnControl-lvWithFastTemperatureLoop.dat":yt,"../../../../data/standards/heuristics/columnControl-ratioBestForTwoPoint.dat":bt,"../../../../data/standards/heuristics/columnControl-sensitivityCriterion.dat":vt,"../../../../data/standards/heuristics/columnControl-sensorAndFlowSameEnd.dat":xt,"../../../../data/standards/heuristics/columnControl-singleEndedDefault.dat":wt,"../../../../data/standards/heuristics/columnControl-slopeCriterion.dat":Tt,"../../../../data/standards/heuristics/columnControl-steadyStateRgaMisleads.dat":Ct,"../../../../data/standards/heuristics/columnControl-trayTemperatureStandsForComposition.dat":kt,"../../../../data/standards/heuristics/columnControlStructures.dat":jt}),Et=t=>t.split("/").pop().replace(/\.dat$/,""),w=t=>typeof t=="string"?t:"",Z=t=>Array.isArray(t)?t.filter(n=>typeof n=="string"):[],we=t=>Array.isArray(t)?t.filter(n=>typeof n=="object"&&n!==null&&!Array.isArray(n)):[],Pe=["checkedCopy","searchIndexQuotation","generalKnowledge"],Fe=["favours","warnsAgainst","conditional","neutral"],Lt=["inventory","quality","fixedFlow"];function It(t,n){const o=w(n.name)||t,i=w(n.claim);if(!i)return`${t}: no \`claim\` — a heuristic that cannot be stated in one sentence is a chapter, not a rule.`;const a=w(n.authority);if(a!=="primaryLiterature"&&a!=="choupoDesignGuide")return`${t}: \`authority\` is '${a||"absent"}' — it must be primaryLiterature (cited) or choupoDesignGuide (Choupo's own signed statement).`;const r=a,s=typeof n.source=="object"&&n.source!==null&&!Array.isArray(n.source)?n.source:null;if(!s)return`${t}: no \`source {}\` block.`;const p=w(s.author),f=w(s.publication);if(r==="primaryLiterature"&&(!p||!f))return`${t}: \`authority primaryLiterature\` with no ${p?"publication":"author"} — an uncited heuristic is refused entry.`;const d=w(s.verification);if(!Pe.includes(d))return`${t}: \`source.verification\` is '${d||"absent"}' — it must be one of ${Pe.join(" / ")}, because how well a citation is known is not something a reader should have to guess.`;const g=[];for(const m of we(n.stances)){const b=w(m.structure),u=w(m.stance);if(!b||!Fe.includes(u))return`${t}: a \`stances\` entry names structure '${b||"?"}' with stance '${u||"?"}' — both are required and the stance must be one of `+Fe.join(" / ")+".";g.push({structure:b,stance:u})}const x=Z(n.topics);return g.length===0&&x.length===0?`${t}: neither \`stances\` nor \`topics\` — a claim that speaks to no structure and no question renders nowhere.`:{file:t,name:o,claim:i,validity:w(n.validity),notCovered:w(n.notCovered),authority:r,source:{author:p,publication:f,year:typeof s.year=="number"?s.year:null,title:w(s.title),locus:w(s.locus),verification:d,verificationNote:w(s.verificationNote)},stances:g,topics:x,conflictsWith:Z(n.conflictsWith)}}function Nt(t,n){const o=Z(n.measurementPoints),i=Z(n.valves);if(o.length===0||i.length===0)return`${t}: the structure catalogue must declare both \`measurementPoints\` and \`valves\` — a loop may only name something the record itself introduced, so a signal line is never drawn to nowhere.`;const a=[];for(const r of we(n.structures)){const s=w(r.name);if(!s)return`${t}: a structure with no \`name\`.`;const p=[];for(const f of we(r.loops)){const d=w(f.controlled),g=w(f.measuredAt),x=w(f.manipulates),m=w(f.kind);if(!d||!Lt.includes(m))return`${t}: structure ${s} has a loop with no \`controlled\` or an unknown \`kind\` ('${m||"absent"}').`;if(!o.includes(g))return`${t}: structure ${s} measures '${d}' at '${g}', which is not in \`measurementPoints\`.`;if(!i.includes(x))return`${t}: structure ${s} drives '${x}', which is not in \`valves\`.`;const b=w(f.ratioWith);p.push(b?{controlled:d,measuredAt:g,manipulates:x,kind:m,ratioWith:b}:{controlled:d,measuredAt:g,manipulates:x,kind:m})}if(p.length===0)return`${t}: structure ${s} declares no loops.`;a.push({name:s,label:w(r.label)||s,summary:w(r.summary),freeForComposition:Z(r.freeForComposition),loops:p})}return a.length===0?`${t}: no \`structures\` — the catalogue is empty.`:{structures:a,points:o,valves:i}}function St(t=At){const n=[],o=[],i=[];let a=[],r=[];for(const d of Object.keys(t).sort()){const g=Et(d);let x;try{x=st(rt(t[d]))}catch(b){i.push(`${g}: does not parse as a Choupo dict (${b instanceof Error?b.message:String(b)}).`);continue}const m=w(x.recordType);if(m==="controlHeuristic"){const b=It(g,x);typeof b=="string"?i.push(b):o.push(b)}else if(m==="controlStructureCatalogue"){const b=Nt(g,x);if(typeof b=="string"){i.push(b);continue}n.push(...b.structures),a=b.points,r=b.valves}else i.push(`${g}: unknown \`recordType\` '${m||"absent"}' — this reader knows controlHeuristic and controlStructureCatalogue.`)}const s=new Set(n.map(d=>d.name)),p=new Set(o.map(d=>d.name)),f=[];for(const d of o){const g=d.stances.find(m=>!s.has(m.structure));if(g){i.push(`${d.file}: takes a stance on structure '${g.structure}', which the structure catalogue does not declare.`);continue}const x=d.conflictsWith.find(m=>!p.has(m));if(x){i.push(`${d.file}: declares a conflict with '${x}', which is not a record here — a disagreement with an absence.`);continue}f.push(d)}return{structures:n,heuristics:f,measurementPoints:a,valves:r,refusals:i.sort()}}function Ve(t,n){return t.heuristics.filter(o=>o.stances.some(i=>i.structure===n))}function Dt(t,n){return t.heuristics.filter(o=>o.topics.includes(n))}function Ot(t,n){return t.stances.find(o=>o.structure===n)?.stance??null}function Rt(t,n){const o=Ve(t,n),i=[];for(let a=0;a<o.length;++a)for(let r=a+1;r<o.length;++r){const s=o[a],p=o[r];(s.conflictsWith.includes(p.name)||p.conflictsWith.includes(s.name))&&i.push([s,p])}return i}const Te="stage",ce="T";function ye(t,n){if(!t)return[];const o=[];for(const i of t){if(i.xAxis!==Te)continue;const a=i.columns[ce],r=i.columns[Te];if(!a||!r||a.length!==r.length||a.length<4)continue;const s=n?.[i.unit];o.push(s?{unit:i.unit,profile:i,kpis:s}:{unit:i.unit,profile:i})}return o.sort((i,a)=>i.unit.localeCompare(a.unit))}function $t(t,n){const o=t?.units;if(!Array.isArray(o))return"total";const a=o.find(p=>p!==null&&typeof p=="object"&&!Array.isArray(p)&&String(p.name)===n)?.operation,r=a&&typeof a=="object"&&!Array.isArray(a)?a.condenser:void 0;return(r&&typeof r=="object"&&!Array.isArray(r)?r.type:void 0)==="partial"?"partial":"total"}function me(t,n="total"){const o=n==="partial"?2:1;return{lo:o,hi:Math.max(o,t-1)}}function Wt(t,n="total"){const o=t.length;if(o<4)return[];const{lo:i,hi:a}=me(o,n),r=[];for(let s=i;s<=a-1;++s){const p=t[s-1],f=t[s];p===void 0||f===void 0||!Number.isFinite(p)||!Number.isFinite(f)||r.push({stage:s,value:Math.abs(f-p)})}return r}function _t(t,n,o,i="total"){const a=Math.min(t.length,n.length);if(a<4||!Number.isFinite(o)||o===0)return[];const{lo:r,hi:s}=me(a,i),p=[];for(let f=r;f<=s;++f){const d=t[f-1],g=n[f-1];d===void 0||g===void 0||!Number.isFinite(d)||!Number.isFinite(g)||p.push({stage:f,value:(g-d)/(o*100)})}return p}function Pt(t){const n=t?.L_rect,o=t?.D;return typeof n!="number"||typeof o!="number"||!Number.isFinite(n)||!Number.isFinite(o)||n<=0||o<=0?null:{L:n,D:o,ratio:n/o,larger:n>o?"reflux":"distillate"}}function He(t){let n=null;for(const o of t)Number.isFinite(o.value)&&(n===null||Math.abs(o.value)>Math.abs(n.value))&&(n=o);return n}function Ft(t){const n=[];for(let o=0;o+1<t.length;++o){const i=t[o],a=t[o+1];!Number.isFinite(i.value)||!Number.isFinite(a.value)||(i.value<0&&a.value>0||i.value>0&&a.value<0)&&n.push({below:i.stage,above:a.stage})}return n}const Be="steady/distillation/column02_simultaneous",qe=2,Ge=50,Ue=8,ke=[{id:"refluxRatio",label:"reflux ratio R = L/D",file:"system/flowsheetDict",key:"refluxRatio",def:qe,min:.5,max:6,step:.1,unit:"",why:"the reflux ratio decides which stream leaving the reflux drum is the larger one (the reflux above R = 1, the distillate below it), which is the heuristic that decides LV against DV — and it moves the temperature profile the tray criteria are read from"},{id:"distillateRate",label:"distillate rate D",file:"system/flowsheetDict",key:"distillateRate",def:Ge,min:20,max:80,step:1,unit:"kmol/h",why:"the material-balance handle: it sets the split before any loop is closed, and it is the second of the two handles the sensitivity criterion can be asked about"},{id:"feedStage",label:"feed stage",file:"system/flowsheetDict",key:"feedStage",def:Ue,min:3,max:13,step:1,unit:"",why:"the feed is where the profile bends; moving it moves the steep region and therefore the tray the slope criterion picks"}];function Ht(){const t={};for(const n of ke)t[n.id]=n.def;return t}function Ye(t){const n=[];for(const o of ke){const i=t[o.id];i!==void 0&&Number.isFinite(i)&&n.push({file:o.file,key:o.key,value:i})}return n}function Mt(t,n,o){const i=t.refluxRatio??qe,a=t.distillateRate??Ge,r=Ye(t),s=(p,f)=>{const d=r.findIndex(g=>g.key===p);d>=0?r[d]={...r[d],value:f}:r.push({file:"system/flowsheetDict",key:p,value:f})};return n==="reflux"?s("refluxRatio",i*(1+o)):(s("distillateRate",a*(1+o)),s("refluxRatio",i/(1+o))),r}const X={reflux:{label:"reflux L",means:"R is raised with D held: L rises and V rises with it (\\(V = L + D\\)), while D and B stay put — the internal-flow move that sharpens the separation.  It is not LV's open-loop move, L at constant V, which would lower D by as much as L rose."},distillate:{label:"distillate D",means:"D is raised and R lowered together so that \\(L = R\\,D\\) is unchanged: V rises with D (\\(V = L + D\\)) and B falls (\\(B = F - D\\)) — the material-balance move that shifts the whole profile.  It is not DV's open-loop move, D at constant V, which would lower L instead."}};function zt(t,n){return t?t.loops.find(o=>o.kind==="quality"&&o.manipulates===n)??null:null}const Vt=`Runs tutorials/${Be} twice with your parameters, in your browser (choupoSolve WASM): once as declared, once with the manipulated variable moved.  Every temperature is the column's own published stage profile; this file takes differences of them and draws the result.`,Qe=620,ue=470,S=132,A=214,V=96,z=392,Bt={condenserDuty:{x:388,y:44},distillate:{x:500,y:158},reflux:{x:268,y:122},boilup:{x:388,y:448},bottoms:{x:500,y:424}},Me={overhead:{x:292,y:62},refluxDrum:{x:420,y:122},sump:{x:173,y:420},refluxLine:{x:300,y:100},feedLine:{x:60,y:214}};function _(t,n,o="total"){const{lo:i,hi:a}=me(n,o),r=Math.max(1,a-i+1),s=Math.min(Math.max(t-i,0),r-1);return V+(s+.5)*(z-V)/r}const M=(t,n,o)=>({x:A+10,y:_(t,n,o)});function be(t,n,o,i="total"){return t==="feed"?{x:86,y:_(n,o,i)}:Bt[t]??null}function qt(t){return{pressure:"PC",condenserLevel:"LC",reboilerLevel:"LC",topComposition:"TC",bottomComposition:"TC",refluxFlow:"FC",feedFlow:"FC"}[t]??t.slice(0,2).toUpperCase()}const B=(t,n=4)=>typeof t=="number"&&Number.isFinite(t)?t.toPrecision(n):"—",Ke="var(--mantine-color-default-border)",C="var(--mantine-color-dimmed)",N="#8d9aa8",ee="#9575cd",te="#ffb74d",P="#26c6da",Ce="#66bb6a",q="#ef5350";function he(t,n){return t<n?"rectifyingTray":"strippingTray"}function Gt({structure:t,nStages:n,feedStage:o,sensorStage:i,sensorCriterion:a,sensorLoop:r,condenser:s,busyOverlay:p}){const{lo:f,hi:d}=me(n,s),g=[];for(let u=f;u<=d;++u)g.push(u);const x=t.loops.filter(u=>be(u.manipulates,o,n,s)===null||u.measuredAt!=="rectifyingTray"&&u.measuredAt!=="strippingTray"&&!Me[u.measuredAt]).map(u=>u.controlled),m=u=>{if(u.measuredAt==="rectifyingTray"||u.measuredAt==="strippingTray"){if(r&&u.controlled===r.controlled&&i!==null)return M(i,n,s);const y=u.measuredAt==="rectifyingTray"?Math.max(f,Math.round(n*.3)):Math.min(d,Math.round(n*.72));return M(y,n,s)}return Me[u.measuredAt]??null},b=i!==null&&r!==null&&(r.measuredAt==="rectifyingTray"||r.measuredAt==="strippingTray")&&he(i,o)!==r.measuredAt;return e.jsxs(T,{style:{flex:1,minHeight:0,position:"relative"},children:[p&&e.jsx(T,{style:{position:"absolute",inset:0,display:"flex",alignItems:"center",justifyContent:"center",zIndex:1,background:"light-dark(rgba(255,255,255,0.5), rgba(0,0,0,0.35))"},children:e.jsx(de,{size:"sm"})}),e.jsxs("svg",{viewBox:`0 0 ${Qe} ${ue}`,width:"100%",height:"100%",preserveAspectRatio:"xMidYMid meet",role:"img","aria-label":`Cross-section of a two-product distillation column under the ${t.name} control structure, with the instrument bubbles, the control valves and the signal line from each measurement to the valve it drives`,children:[e.jsx("rect",{x:S,y:V,width:A-S,height:z-V,fill:"none",stroke:N,strokeWidth:2,rx:6}),g.map(u=>e.jsx("line",{x1:S+6,y1:_(u,n,s),x2:A-6,y2:_(u,n,s),stroke:Ke,strokeWidth:1},`t${u}`)),e.jsxs("text",{x:(S+A)/2,y:V-10,textAnchor:"middle",fontSize:11,fill:C,children:[n," stages: ",g.length," trays + reboiler",s==="partial"?" + partial condenser":""]}),e.jsx("rect",{x:330,y:44,width:104,height:34,fill:"none",stroke:N,strokeWidth:1.6,rx:4}),e.jsx("text",{x:382,y:65,textAnchor:"middle",fontSize:10,fill:C,children:"condenser"}),e.jsx("rect",{x:330,y:104,width:104,height:38,fill:"none",stroke:N,strokeWidth:1.6,rx:4}),e.jsx("text",{x:382,y:127,textAnchor:"middle",fontSize:10,fill:C,children:"reflux drum"}),e.jsx("rect",{x:330,y:396,width:104,height:36,fill:"none",stroke:N,strokeWidth:1.6,rx:4}),e.jsx("text",{x:382,y:418,textAnchor:"middle",fontSize:10,fill:C,children:"reboiler"}),e.jsx("polyline",{points:`${(S+A)/2},${V} ${(S+A)/2},62 330,62`,fill:"none",stroke:te,strokeWidth:2}),e.jsx("line",{x1:382,y1:78,x2:382,y2:104,stroke:P,strokeWidth:2}),e.jsx("line",{x1:388,y1:20,x2:388,y2:44,stroke:P,strokeWidth:2}),e.jsx("text",{x:396,y:26,fontSize:10,fill:C,children:"coolant"}),e.jsx("polyline",{points:`330,122 ${A},122`,fill:"none",stroke:P,strokeWidth:2}),e.jsx("text",{x:276,y:114,fontSize:10,fill:C,children:"reflux L"}),e.jsx("polyline",{points:"434,122 470,122 470,158 520,158",fill:"none",stroke:P,strokeWidth:2}),e.jsx("text",{x:504,y:150,fontSize:11,fill:C,children:"D"}),e.jsx("polyline",{points:`${A},414 300,414 300,414 330,414`,fill:"none",stroke:N,strokeWidth:2}),e.jsx("polyline",{points:`330,400 300,400 300,${z} ${A},${z}`,fill:"none",stroke:te,strokeWidth:2}),e.jsx("text",{x:244,y:396,fontSize:10,fill:C,children:"boilup V"}),e.jsx("line",{x1:388,y1:432,x2:388,y2:458,stroke:te,strokeWidth:2}),e.jsx("text",{x:396,y:456,fontSize:10,fill:C,children:"steam"}),e.jsx("polyline",{points:"434,424 520,424",fill:"none",stroke:N,strokeWidth:2}),e.jsx("text",{x:504,y:416,fontSize:11,fill:C,children:"B"}),e.jsx("line",{x1:S,y1:z,x2:S,y2:424,stroke:N,strokeWidth:2}),e.jsx("line",{x1:A,y1:z,x2:A,y2:424,stroke:N,strokeWidth:2}),e.jsx("line",{x1:S,y1:424,x2:A,y2:424,stroke:N,strokeWidth:2}),e.jsx("polyline",{points:`40,${_(o,n,s)} ${S},${_(o,n,s)}`,fill:"none",stroke:N,strokeWidth:2}),e.jsxs("text",{x:40,y:_(o,n,s)-8,fontSize:10,fill:C,children:["feed (stage ",o,")"]}),t.loops.map(u=>{const y=be(u.manipulates,o,n,s);return y?e.jsx("g",{children:e.jsx("path",{d:`M ${y.x-8} ${y.y-7} L ${y.x+8} ${y.y+7} L ${y.x+8} ${y.y-7} L ${y.x-8} ${y.y+7} Z`,fill:"none",stroke:N,strokeWidth:1.6})},`v${u.controlled}`):null}),t.loops.map(u=>{const y=m(u),j=be(u.manipulates,o,n,s);if(!y||!j)return null;const E=r!==null&&u.controlled===r.controlled,c=u.kind==="quality"&&!E,L=E?Ce:u.kind==="quality"?C:ee;return e.jsxs("g",{children:[e.jsx("polyline",{points:`${y.x},${y.y} ${(y.x+j.x)/2},${y.y} ${(y.x+j.x)/2},${j.y} ${j.x},${j.y}`,fill:"none",stroke:L,strokeWidth:1.2,strokeDasharray:"4 3",opacity:c?.45:1}),e.jsx("circle",{cx:y.x,cy:y.y,r:11,fill:"var(--mantine-color-body)",stroke:L,strokeWidth:E?2:1.4,opacity:c?.55:1}),e.jsx("text",{x:y.x,y:y.y+3.5,textAnchor:"middle",fontSize:9,fill:L,opacity:c?.7:1,children:qt(u.controlled)}),u.ratioWith&&e.jsxs("text",{x:y.x,y:y.y-15,textAnchor:"middle",fontSize:8,fill:L,children:["ratio ÷ ",u.ratioWith]})]},`l${u.controlled}`)}),i!==null&&r!==null&&e.jsxs("text",{x:M(i,n,s).x+16,y:M(i,n,s).y+3.5,fontSize:10,fill:Ce,children:["stage ",i," — picked by the"," ",a==="sensitivity"?"sensitivity criterion":"slope criterion"]}),i!==null&&b&&e.jsxs("text",{x:M(i,n,s).x+16,y:M(i,n,s).y+17,fontSize:9,fill:q,children:["a ",he(i,o)==="strippingTray"?"stripping tray, below the feed":"rectifying tray, above the feed"," ","— see the note below"]}),r===null&&e.jsx("text",{x:244,y:ue-8,fontSize:10,fill:q,children:"the chosen handle is not free for composition in this structure — see the note below"}),x.length>0&&e.jsxs("text",{x:20,y:ue-8,fontSize:10,fill:q,children:["not drawn (no place on this layout): ",x.join(", ")]})]})]})}const ae=62,ve=292,Q=20,D=396,le=356,K=596;function Ut({T:t,slope:n,sens:o,slopePick:i,sensPick:a,handle:r,condenser:s,busyOverlay:p}){const f=t.length,d=t.filter(c=>Number.isFinite(c)),g=d.length?Math.min(...d):0,x=d.length?Math.max(...d):1,m=c=>Q+(D-Q)*(c-1)/Math.max(1,f-1),b=c=>ae+(ve-ae)*(c-g)/Math.max(1e-9,x-g),u=Math.max(1e-9,...n.map(c=>Math.abs(c.value))),y=Math.max(1e-9,...o.map(c=>Math.abs(c.value))),j=(K-le)/2,E=(le+K)/2;return e.jsxs(T,{style:{flex:1,minHeight:0,position:"relative"},children:[p&&e.jsx(T,{style:{position:"absolute",inset:0,display:"flex",alignItems:"center",justifyContent:"center",zIndex:1,background:"light-dark(rgba(255,255,255,0.5), rgba(0,0,0,0.35))"},children:e.jsx(de,{size:"sm"})}),e.jsxs("svg",{viewBox:`0 0 ${Qe} ${ue}`,width:"100%",height:"100%",preserveAspectRatio:"xMidYMid meet",role:"img","aria-label":`Stage temperature profile beside the two tray-selection
          criteria, with the stage each one selects marked`,children:[e.jsx("text",{x:(ae+ve)/2,y:12,textAnchor:"middle",fontSize:11,fill:C,children:"stage temperature (K)"}),e.jsx("polyline",{points:t.map((c,L)=>Number.isFinite(c)?`${b(c).toFixed(2)},${m(L+1).toFixed(2)}`:"").filter(Boolean).join(" "),fill:"none",stroke:te,strokeWidth:2}),t.map((c,L)=>Number.isFinite(c)?e.jsx("circle",{cx:b(c),cy:m(L+1),r:2,fill:te},`p${L}`):null),e.jsx("text",{x:ae,y:D+18,fontSize:10,fill:C,children:B(g,5)}),e.jsx("text",{x:ve,y:D+18,textAnchor:"end",fontSize:10,fill:C,children:B(x,5)}),e.jsxs("text",{x:16,y:(Q+D)/2,fontSize:10,fill:C,transform:`rotate(-90 16 ${(Q+D)/2})`,children:["stage (1 = ",s==="partial"?"partial condenser":"top tray",","," ",f," = reboiler)"]}),e.jsx("line",{x1:E,y1:Q,x2:E,y2:D,stroke:Ke,strokeWidth:1}),e.jsx("text",{x:le,y:12,fontSize:10,fill:P,children:"slope |T(n+1)−T(n)|"}),e.jsxs("text",{x:K,y:12,textAnchor:"end",fontSize:10,fill:ee,children:["sensitivity to ",X[r].label]}),n.map(c=>e.jsx("rect",{x:E-j*Math.abs(c.value)/u,y:m(c.stage)-5,width:j*Math.abs(c.value)/u,height:10,fill:P,opacity:i?.stage===c.stage?1:.45},`s${c.stage}`)),o.map(c=>e.jsx("rect",{x:E,y:m(c.stage)-5,width:j*Math.abs(c.value)/y,height:10,fill:c.value<0?q:ee,opacity:a?.stage===c.stage?1:.45},`v${c.stage}`)),i&&e.jsx("text",{x:le-4,y:m(i.stage)+3.5,textAnchor:"end",fontSize:10,fill:P,children:i.stage}),a&&e.jsx("text",{x:K+4,y:m(a.stage)+3.5,fontSize:10,fill:ee,children:a.stage}),e.jsx("text",{x:E,y:D+18,textAnchor:"middle",fontSize:9,fill:C,children:"bars are scaled to each criterion's own maximum — the two are not comparable in size, only in which stage they pick"}),e.jsx("text",{x:K,y:D+32,textAnchor:"end",fontSize:9,fill:q,children:"a red bar is a negative gain: the temperature falls when the handle rises"})]})]})}function ze({h:t,structure:n}){const o=Ot(t,n),i=t.authority==="primaryLiterature";return e.jsxs(T,{style:{borderLeft:`3px solid ${o==="favours"?Ce:o==="warnsAgainst"?q:ee}`,paddingLeft:10,marginBottom:12},children:[e.jsxs(xe,{gap:6,wrap:"wrap",align:"center",mb:2,children:[o&&e.jsx(O,{size:"xs",variant:"light",tt:"none",color:o==="favours"?"green":o==="warnsAgainst"?"red":"grape",children:o==="favours"?"favours this structure":o==="warnsAgainst"?"warns against this structure":o==="conditional"?"conditional on this structure":"neutral"}),e.jsx(O,{size:"xs",variant:"outline",tt:"none",color:i?"blue":"orange",children:i?"cited":"Choupo's own guide (signed)"}),e.jsx(J,{withArrow:!0,multiline:!0,w:430,label:t.source.verificationNote,children:e.jsx(O,{size:"xs",variant:"light",tt:"none",color:t.source.verification==="checkedCopy"?"teal":t.source.verification==="searchIndexQuotation"?"yellow":"red",styles:{root:{cursor:"help"}},children:t.source.verification==="checkedCopy"?"checked copy":t.source.verification==="searchIndexQuotation"?"citation not opened":"UNVERIFIED — general knowledge"})})]}),e.jsx(v,{size:"sm",style:{lineHeight:1.35},children:t.claim}),e.jsxs(v,{size:"xs",c:"dimmed",mt:3,children:[t.source.author,t.source.year?` (${t.source.year})`:"",","," ",e.jsx("i",{children:t.source.title}),". ",t.source.publication,t.source.locus?` — ${t.source.locus}`:""]}),t.validity&&e.jsxs(v,{size:"xs",c:"dimmed",mt:3,children:[e.jsx("b",{children:"Asserted for:"})," ",t.validity]}),t.notCovered&&e.jsxs(v,{size:"xs",c:"dimmed",mt:2,children:[e.jsx("b",{children:"Does not cover:"})," ",t.notCovered]})]})}function en(){const t=k.useMemo(()=>St(),[]),n=Oe(l=>l.runResult),o=Oe(l=>l.caseFiles),[i,a]=k.useState("LV"),r=t.structures.find(l=>l.name===i)??t.structures[0]??null,[s,p]=k.useState("reflux"),[f,d]=k.useState("section"),[g,x]=k.useState(1),[m,b]=k.useState(Ht),u=k.useCallback((l,I)=>{b(ie=>({...ie,[l]:I}))},[]),y=k.useMemo(()=>ye(n?.profiles,n?.kpis)[0]??null,[n]),[j,E]=k.useState("classroom"),c=y!==null&&j==="current"?"current":"classroom",L=y!==null||j==="current",F=g/100,Je=k.useMemo(()=>JSON.stringify(m),[m]),Xe=k.useMemo(()=>JSON.stringify([m,s,F]),[m,s,F]),Ze=k.useMemo(()=>Ye(m),[m]),et=k.useMemo(()=>Mt(m,s,F),[m,s,F]),je=c==="classroom"?Be:null,G=_e(je,Ze,Je,"choupoSolve"),U=_e(je,et,Xe,"choupoSolve"),ne=G.busy||U.busy,R=k.useMemo(()=>c==="current"?y:ye(G.result?.profiles,G.result?.kpis)[0]??null,[c,y,G.result]),Ae=k.useMemo(()=>c==="current"?null:ye(U.result?.profiles,U.result?.kpis)[0]??null,[c,U.result]),H=c==="current"&&R?$t(o?.flowsheet,R.unit):"total",h=k.useMemo(()=>{if(!R)return null;const l=R.profile.columns[ce];if(!l)return null;const I=Wt(l,H),ie=Ae?.profile.columns[ce],pe=ie?_t(l,ie,F,H):[];return{unit:R.unit,T:l,nStages:l.length,slope:I,sens:pe,slopePick:He(I),sensPick:He(pe),crossings:Ft(pe),drum:Pt(R.kpis)}},[R,Ae,F,H]),$=zt(r,s),tt=h?.sensPick?"sensitivity":h?.slopePick?"slope":null,Y=h?.sensPick?.stage??h?.slopePick?.stage??null,oe=Math.round(m.feedStage??Ue),Ee=e.jsxs(e.Fragment,{children:[e.jsx(Re,{of:"assumption",note:"the structure, the handle and the column values you set"}),L&&e.jsx(se,{size:"xs",value:c,fullWidth:!0,onChange:l=>E(l==="current"?"current":"classroom"),data:[{label:"Classroom",value:"classroom"},{label:"Current run",value:"current"}]}),e.jsxs(T,{children:[e.jsx(v,{size:"xs",c:"dimmed",mb:2,children:"view"}),e.jsx(se,{size:"xs",value:f,fullWidth:!0,orientation:"vertical",onChange:l=>d(l),data:[{label:"Cross-section (P&ID)",value:"section"},{label:"Tray selection",value:"tray"},{label:"Cited heuristics",value:"rules"}]})]}),e.jsxs(T,{children:[e.jsx(v,{size:"xs",c:"dimmed",mb:2,children:"control structure"}),e.jsx(se,{size:"xs",value:i,fullWidth:!0,orientation:"vertical",onChange:a,data:t.structures.map(l=>({label:l.name,value:l.name}))})]}),e.jsxs(T,{children:[e.jsx(v,{size:"xs",c:"dimmed",mb:2,children:"manipulated variable the temperature loop will use"}),e.jsx(se,{size:"xs",value:s,fullWidth:!0,onChange:l=>p(l),data:[{label:"reflux L",value:"reflux"},{label:"distillate D",value:"distillate"}]}),e.jsx(v,{size:"xs",c:"dimmed",mt:3,style:{lineHeight:1.25},children:e.jsx(lt,{text:X[s].means})})]}),c==="classroom"&&e.jsxs(e.Fragment,{children:[ne&&e.jsxs(xe,{gap:6,wrap:"nowrap",align:"center",children:[e.jsx(de,{size:"xs"}),e.jsx(v,{size:"xs",c:"dimmed",children:"two solves — the base column and the perturbed one"})]}),ke.map(l=>e.jsx($e,{knob:l,value:m[l.id]??l.def,onChange:I=>u(l.id,I)},l.id)),e.jsx($e,{knob:{id:"step",label:"perturbation for the sensitivity",min:.25,max:5,step:.25,unit:"% of the handle",why:"the sensitivity criterion is a finite difference, so it has a step size; move it and watch the selected stage stay put while the magnitude drifts — that is what tells you the answer is not an artefact of the step"},value:g,onChange:x,showWhy:!0}),e.jsx(We,{children:Vt})]}),c==="current"&&e.jsx(We,{children:"Reading the app's current run. Only the slope criterion is available on it: the sensitivity criterion needs a second solve with the manipulated variable moved, and a finished run is one operating point."})]}),Le=G.err??U.err,Ie=e.jsxs(e.Fragment,{children:[c==="classroom"&&Le!==null&&e.jsx(fe,{color:"red",variant:"light",m:12,title:"The run refused or failed — the engine's message, verbatim",children:e.jsx(v,{size:"xs",ff:"monospace",style:{whiteSpace:"pre-wrap"},children:Le})}),t.refusals.length>0&&e.jsx(fe,{color:"orange",variant:"light",m:12,title:`${t.refusals.length} heuristic record(s) could not be read, and each is named rather than dropped`,children:t.refusals.map(l=>e.jsx(v,{size:"xs",ff:"monospace",children:l},l))})]}),W=ut(ht),Ne=e.jsxs(T,{children:[e.jsx(ge,{order:3,children:"Controlling a column: five valves, and why the choice is yours"}),e.jsx(v,{size:"sm",c:"dimmed",mt:4,children:"The first of these pages that does not build you an answer.  Every structure below is defensible; what is worth learning is how to choose between them, and what the choice depends on."})]}),Se=e.jsxs(T,{children:[e.jsx(ge,{order:5,children:"What this does not model"}),e.jsx(T,{mt:4,style:{display:"grid",columnGap:16,rowGap:6,gridTemplateColumns:"repeat(auto-fit, minmax(320px, 1fr))"},children:dt.map(l=>e.jsxs(v,{size:"xs",c:"dimmed",children:[e.jsx("b",{children:l.title})," ",l.body]},l.id))})]});if(!r)return e.jsx(T,{style:{flex:1,minHeight:0,overflowY:"auto"},px:"md",py:"sm",children:e.jsxs(re,{gap:"md",style:{maxWidth:940,margin:"0 auto"},children:[Ne,Ie,[1,2,3].map(W),e.jsx(T,{children:e.jsx(v,{size:"sm",c:"dimmed",children:"No control structure could be read from data/standards/heuristics/ — the drawing is declared there, and this tool draws nothing it cannot read.  The refusals above name every record that could not be used; the lesson below is unaffected, because the count and the convention are not heuristics."})}),e.jsx(re,{gap:8,style:{maxWidth:280},children:Ee}),[4,5].map(W),Se]})});const De=Ve(t,r.name),nt=Dt(t,"traySelection"),ot=Rt(t,r.name),it=e.jsxs(xe,{gap:"sm",wrap:"wrap",align:"center",children:[e.jsx(J,{withArrow:!0,multiline:!0,w:430,label:r.summary,children:e.jsx(O,{variant:"light",color:"grape",tt:"none",styles:{root:{cursor:"help"}},children:r.label})}),e.jsx(J,{withArrow:!0,multiline:!0,w:440,label:"The largest |T(n+1) − T(n)| over the stages that are trays "+(H==="partial"?"(stage 1 is the partial condenser and the last stage the reboiler, so neither can carry a tray thermocouple).  ":"(with the default total condenser stage 1 is the top tray — the condenser is not a stage — and the last stage is the reboiler, which carries no tray thermocouple).  ")+"Read off one solved profile — the criterion a student can apply with a ruler.",children:e.jsxs(O,{variant:"light",color:"cyan",tt:"none",styles:{root:{cursor:"help"}},children:["slope picks ",h?.slopePick?`stage ${h.slopePick.stage} (${B(h.slopePick.value,4)} K between it and stage ${h.slopePick.stage+1})`:"—"]})}),e.jsx(J,{withArrow:!0,multiline:!0,w:440,label:"The largest |ΔT| per 1 % move of the manipulated variable, from a second solve of the same column.  This is the number a published table cannot give you: it belongs to this column at these settings with this handle.",children:e.jsxs(O,{variant:"light",color:"violet",tt:"none",styles:{root:{cursor:"help"}},children:["sensitivity picks ",h?.sensPick?`stage ${h.sensPick.stage} (${h.sensPick.value>=0?"+":""}${B(h.sensPick.value,3)} K per 1 % of ${X[s].label})`:c==="current"?"— (needs a second solve)":"—"]})}),h?.drum&&e.jsx(J,{withArrow:!0,multiline:!0,w:450,label:`Choupo's Design Guide says to hold a level with the larger stream leaving that drum, and both streams are on this run's KPI row (L_rect and D), so the rule has a number here: L/D = ${B(h.drum.ratio,4)}.  What the rule does not ship is a threshold — the published forms disagree about where 'larger' starts to matter, none could be pinned to a checked page, and so this chip says which is larger and stops there.`,children:e.jsxs(O,{variant:"light",color:"orange",tt:"none",styles:{root:{cursor:"help"}},children:["leaving the drum: L/D = ",B(h.drum.ratio,4)," — the"," ",h.drum.larger==="reflux"?"reflux":"distillate"," is the"," ","larger stream"]})}),h?.slopePick&&h.sensPick&&e.jsx(O,{variant:"light",tt:"none",color:h.slopePick.stage===h.sensPick.stage?"green":"orange",children:h.slopePick.stage===h.sensPick.stage?"the two criteria agree":`the two criteria disagree — ${h.slopePick.stage} against ${h.sensPick.stage}`})]});return e.jsx(T,{style:{flex:1,minHeight:0,overflowY:"auto"},px:"md",py:"sm",children:e.jsxs(re,{gap:"md",style:{maxWidth:940,margin:"0 auto"},children:[Ne,Ie,W(1),e.jsxs(T,{children:[e.jsx(ge,{order:5,children:"Now wire one of them onto a solved column"}),e.jsxs(v,{size:"sm",mt:4,children:[e.jsx("b",{children:"Cross-section"})," draws the structure you select as a P&ID over a steady column: every valve, every instrument bubble, and a dashed signal line from each measurement to the valve it drives. Change the structure and watch the lines move — that is the whole selection, made visible.  ",e.jsx("b",{children:"Tray selection"})," puts the engine's own stage-temperature profile beside the two criteria of step 4 and marks the tray each one picks.  ",e.jsx("b",{children:"Cited heuristics"})," shows what published authorities said about the structure on screen, including where two of them disagree.  Nothing on any of the three is scored or ranked."]})]}),e.jsx(Re,{of:["engine","page","reference"],note:"the tray temperatures are two runs of the witness in this browser (choupoSolve); the slopes and the run-to-run differences are taken on this page; the heuristics are their cited authors'"}),it,e.jsxs(T,{style:{display:"grid",gap:14,gridTemplateColumns:"minmax(200px, 240px) 1fr"},children:[e.jsx(re,{gap:8,children:Ee}),e.jsx(T,{style:{minWidth:0,height:500,display:"flex",flexDirection:"column"},children:f==="section"?e.jsx(Gt,{structure:r,nStages:h?.nStages??15,feedStage:oe,sensorStage:Y,sensorCriterion:tt,sensorLoop:$,condenser:H,busyOverlay:c==="classroom"&&ne}):f==="tray"?h?e.jsx(Ut,{T:h.T,slope:h.slope,sens:h.sens,slopePick:h.slopePick,sensPick:h.sensPick,handle:s,condenser:H,busyOverlay:c==="classroom"&&ne}):e.jsx(T,{style:{flex:1,display:"flex",alignItems:"center",justifyContent:"center",padding:12},children:ne?e.jsx(de,{size:"sm"}):e.jsxs(v,{size:"sm",c:"dimmed",ta:"center",maw:520,children:["No column profile yet — the diagnostic activates when a solved unit publishes a per-stage profile whose axis is"," ",e.jsx("b",{children:Te})," and which carries a"," ",e.jsx("b",{children:ce})," column, which is what a"," ",e.jsx("code",{children:"distillationColumn"})," emits."]})}):e.jsx(at,{style:{flex:1,minHeight:0},type:"auto",children:e.jsxs(T,{p:12,children:[e.jsxs(v,{size:"xs",c:"dimmed",mb:8,children:["What the authorities say about ",e.jsx("b",{children:r.label}),". Where two disagree, both are shown with the conditions each assumed; nothing here is scored, weighted or reconciled."]}),De.length===0&&e.jsx(v,{size:"sm",c:"dimmed",mb:12,children:"No record in the catalogue takes a stance on this structure. That is an absence of evidence, not a verdict — silence is not a neutral opinion, and this tool does not manufacture one."}),De.map(l=>e.jsx(ze,{h:l,structure:r.name},l.file)),ot.map(([l,I])=>e.jsxs(fe,{color:"orange",variant:"light",mb:12,title:"Two authorities disagree here — deliberately not resolved",children:[e.jsxs(v,{size:"xs",children:[e.jsxs("b",{children:[l.source.author," (",l.source.year,")"]})," ",l.claim]}),e.jsxs(v,{size:"xs",mt:4,children:[e.jsxs("b",{children:[I.source.author," (",I.source.year,")"]})," ",I.claim]}),e.jsxs(v,{size:"xs",mt:6,c:"dimmed",children:["Read the two ",e.jsx("i",{children:"Asserted for"})," lines above: the conditions are not the same, and which of them is yours is the judgement this tool exists to hand back to you rather than make."]})]},`${l.name}|${I.name}`)),e.jsx(v,{size:"xs",c:"dimmed",mt:16,mb:6,style:{fontWeight:600},children:"On choosing the tray"}),nt.map(l=>e.jsx(ze,{h:l,structure:r.name},`t${l.file}`))]})})})]}),e.jsxs(T,{children:[$===null&&e.jsxs(v,{size:"xs",c:"red",children:["In ",r.name,", ",X[s].label," is not free for composition — it is spent on"," ",r.loops.find(l=>l.manipulates===s)?.controlled??"an inventory",". The sensitivity above is a valid perturbation of this column, but no loop in this structure would use it; the structure that frees this handle is the one to switch to."]}),h&&h.crossings.length>0&&e.jsxs(v,{size:"xs",c:"dimmed",children:["The response to ",X[s].label," changes sign between stage ",h.crossings[0].below," and"," ",h.crossings[0].above,": a sensor there has almost no gain, whatever the profile looks like. The slope criterion cannot see this, because it never asks the handle a question."]}),h&&$!==null&&Y!==null&&($.measuredAt==="rectifyingTray"||$.measuredAt==="strippingTray")&&he(Y,oe)!==$.measuredAt&&e.jsxs(v,{size:"xs",c:"dimmed",children:["Stage ",Y," is a"," ",he(Y,oe)==="strippingTray"?"stripping tray, at or below the feed":"rectifying tray, above the feed"," ","(stage ",oe,"), yet it carries the sensor of the"," ",$.measuredAt==="rectifyingTray"?"top":"bottom"," ","loop. The criterion ranks every tray in either section, and this handle's largest response sits there; whether a loop should measure in the other section is the question the cited same-end heuristic answers (Cited heuristics view)."]}),e.jsx(v,{size:"xs",c:"dimmed",children:"Every temperature above is the column's own published stage profile; this file takes a difference between adjacent stages, and a difference between two engine runs, and draws them. It computes no relative gain — the engine publishes no gain matrix — and it shows no transient: a level that moves is an accumulation term, the engine has no dynamic column, and a fabricated response would teach a specific wrong thing with confidence."})]}),W(2),W(3),W(4),W(5),Se,e.jsx(ct,{tool:"column-control"})]})})}export{ke as COLUMN_CONTROL_KNOBS,Be as COLUMN_CONTROL_WITNESS,en as ColumnControlTool,X as HANDLE_TEXT,Te as STAGE_COLUMN,ce as T_COLUMN,Ge as WITNESS_DISTILLATE_RATE,Ue as WITNESS_FEED_STAGE,qe as WITNESS_REFLUX_RATIO,Ye as baseOverrides,$t as condenserTypeOf,Ht as defaultKnobValues,Pt as drumStreams,ye as findColumnFeeds,qt as isaTag,Mt as perturbedOverrides,He as pickStage,be as placeValve,zt as qualityLoopFor,he as sectionOf,_t as sensitivityMetric,Ft as signChanges,Wt as slopeMetric,_ as stageY,me as trayRange};
