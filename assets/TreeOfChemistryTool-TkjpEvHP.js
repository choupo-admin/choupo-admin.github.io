import{e1 as an,dl as tn,dB as k,cR as n,d as w,aU as A,aR as f,x as S,aJ as G,e as L,aP as d,aM as F,a as rn,a4 as gn,cQ as fn,B as Cn,aV as xn,c as sn,b as cn}from"./index-BF2BjNSJ.js";import{r as vn}from"./catalogue-CVbB_eiD.js";import{O as z,c as wn,L as kn,l as On}from"./MethodsWorkspace-B-oDExxE.js";import{b as ln,a as An,T as Hn}from"./treeOfChemistryLesson-B4CDAwxE.js";import"./chapters-CQXsfKuP.js";import"./methodFeeds-BH_g97zF.js";import"./csvShape-bbHtF81D.js";import"./exploreMccabePopOut-BfbxjnkH.js";import"./Slider-CRXT_mNV.js";import"./Collapse-FO2JZ4vZ.js";const Tn=`/*--------------------------------*- Choupo -*-----------------------*\\
  THE AROMATIC ROOTS: benzene, toluene and the xylenes and what grows from them
  -- the nylon intermediates with their forced ammonium sulfate and N2O, the
  isocyanates with their forced HCl, PTA/PET and phthalic anhydride, and the
  toluene swing routes (HDA, disproportionation).
  Grammar: README.md beside this file.  Every edge is re-read, balanced and
  checked by bin/curate/check_chemistry_graph.py.
\\*---------------------------------------------------------------------------*/


recordType    productionRoutes;
schemaVersion 1;
graph         treeOfChemistry;

routes
(
    {
        name     benzeneHydrogenation;
        kind     reaction;
        target   cyclohexane;
        family   hydrogenation;
        era      incumbent;
        description "Benzene hydrogenation: nearly all cyclohexane is made for the nylon intermediates.";
        stoichiometry
        (
            { component benzene;               nu -1; }
            { component H2;                    nu -3; }
            { component cyclohexane;           nu 1; }
        );
        yield
        {
            basis   carbon;
            band    ( 0.98 0.995 );
            origin  assumed;
            reason  "Ni or Pt liquid/gas-phase hydrogenation, selectivity > 99 %; the curator's band";
        }
        provenance
        (
            { source weissermelArpe2003; locus "ch. 13, 'Cyclohexane'"; }
            { source ullmanns; locus "'Cyclohexane'"; }
        );
    }

    {
        name     cyclohexaneOxidation;
        kind     reaction;
        target   cyclohexanone;
        family   oxidation;
        era      incumbent;
        description "Liquid-phase air oxidation of cyclohexane at deliberately LOW conversion: KA oil, roughly 1:1 ketone and alcohol, the fork to adipic acid (nylon 6,6) and caprolactam (nylon 6).";
        stoichiometry
        (
            { component cyclohexane;           nu -2; }
            { component O2;                    nu -1.5; }
            { component cyclohexanone;         nu 1; }
            { component cyclohexanol;          nu 1; }
            { component water;                 nu 1; }
        );
        yield
        {
            basis   carbon;
            band    ( 0.75 0.85 );
            origin  assumed;
            reason  "air oxidation at 3-6 % per pass (to hold selectivity 75-85 %) to KA oil (ketone + alcohol); the curator's band";
        }
        provenance
        (
            { source weissermelArpe2003; locus "ch. 10, 'Cyclohexanol/cyclohexanone'"; }
            { source ullmanns; locus "'Cyclohexanol and Cyclohexanone'"; }
        );
    }

    {
        name     KAoilNitricOxidation;
        kind     reaction;
        target   adipicAcid;
        family   oxidation;
        era      incumbent;
        description "KA oil oxidised by nitric acid to adipic acid: one N2O (300 x CO2 in warming potential) FORCED per mole until the abatement units of the 1990s -- the nitric acid root consumed as a reagent.";
        stoichiometry
        (
            { component cyclohexanol;          nu -1; }
            { component HNO3;                  nu -2; }
            { component adipicAcid;            nu 1; }
            { component N2O;                   nu 1; }
            { component water;                 nu 2; }
        );
        yield
        {
            basis   carbon;
            band    ( 0.92 0.96 );
            origin  assumed;
            reason  "nitric acid oxidation with Cu/V catalyst; the curator's band";
        }
        provenance
        (
            { source weissermelArpe2003; locus "ch. 10, 'Adipic acid'"; }
            { source ullmanns; locus "'Adipic Acid'"; }
        );
    }

    {
        name     nylon66Polycondensation;
        kind     reaction;
        target   nylon66;
        family   polymerisation;
        era      incumbent;
        description "The nylon salt (AH salt) polycondensed in the melt.  Written per repeat unit: one adipic acid and one HMDA per unit.";
        stoichiometry
        (
            { component adipicAcid;            nu -1; }
            { component hexamethylenediamine;  nu -1; }
            { component nylon66;               nu 1; }
            { component water;                 nu 2; }
        );
        yield
        {
            basis   carbon;
            band    ( 0.97 0.995 );
            origin  assumed;
            reason  "melt polycondensation of the nylon salt; the curator's band";
        }
        provenance
        (
            { source ullmanns; locus "'Polyamides'"; }
        );
    }

    {
        name     ammoniaToNO;
        kind     reaction;
        target   NO;
        family   oxidation;
        era      incumbent;
        description "The Ostwald first step: ammonia burned over Pt/Rh gauze in milliseconds to NO -- the one reaction that opens the whole nitrogen-oxide chain (nitric acid, hydroxylamine).";
        stoichiometry
        (
            { component NH3;                   nu -4; }
            { component O2;                    nu -5; }
            { component NO;                    nu 4; }
            { component water;                 nu 6; }
        );
        yield
        {
            basis   nitrogen;
            band    ( 0.95 0.97 );
            origin  assumed;
            reason  "Pt/Rh gauze, 850-950 C, selectivity 95-97 % to NO; the curator's band";
        }
        cases    ( "tutorials/steady/reactors/equil03_ammonia_oxidation_declared_pathways" );
        provenance
        (
            { source ullmanns; locus "'Nitric Acid, Nitrous Acid, and Nitrogen Oxides'"; }
            { source moulijn2013; locus "nitric acid"; }
        );
    }

    {
        name     hydroxylamineFromNO;
        kind     reaction;
        target   hydroxylamine;
        family   hydrogenation;
        era      incumbent;
        description "Hydroxylamine for the oxime: NO hydrogenated over Pd in a phosphate buffer (HPO), or the older Raschig route via ammonium nitrite and SO2.";
        stoichiometry
        (
            { component NO;                    nu -1; }
            { component H2;                    nu -1.5; }
            { component hydroxylamine;         nu 1; }
        );
        yield
        {
            basis   nitrogen;
            band    ( 0.8 0.9 );
            origin  assumed;
            reason  "HPO (phosphate-buffered) or Raschig; the curator's band";
        }
        provenance
        (
            { source weissermelArpe2003; locus "ch. 10, 'Caprolactam' -- hydroxylamine processes"; }
            { source ullmanns; locus "'Hydroxylamine'"; }
        );
    }

    {
        name     cyclohexanoneOximation;
        kind     reaction;
        target   cyclohexanoneOxime;
        family   condensation;
        era      incumbent;
        description "Oximation of cyclohexanone with hydroxylamine (sulfate or phosphate).";
        stoichiometry
        (
            { component cyclohexanone;         nu -1; }
            { component hydroxylamine;         nu -1; }
            { component cyclohexanoneOxime;    nu 1; }
            { component water;                 nu 1; }
        );
        yield
        {
            basis   carbon;
            band    ( 0.97 0.99 );
            origin  assumed;
            reason  "quantitative oximation; the curator's band";
        }
        provenance
        (
            { source weissermelArpe2003; locus "ch. 10, 'Caprolactam'"; }
            { source ullmanns; locus "'Caprolactam'"; }
        );
    }

    {
        name     beckmannRearrangement;
        kind     reaction;
        target   caprolactam;
        family   rearrangement;
        era      incumbent;
        description "The Beckmann rearrangement in oleum and the ammonia neutralisation that follows: 1.8 t ammonium sulfate per t caprolactam in the classic route -- sulfuric acid AND ammonia consumed to make a fertiliser nobody ordered.  The forced co-product that the ammoximation (Sumitomo) and HPO routes were built to shrink.";
        stoichiometry
        (
            { component cyclohexanoneOxime;    nu -1; }
            { component H2SO4;                 nu -1; }
            { component NH3;                   nu -2; }
            { component caprolactam;           nu 1; }
            { component ammoniumSulfate;       nu 1; }
        );
        yield
        {
            basis   carbon;
            band    ( 0.97 0.99 );
            origin  assumed;
            reason  "Beckmann rearrangement in oleum, then neutralisation; the curator's band";
        }
        provenance
        (
            { source weissermelArpe2003; locus "ch. 10, 'Caprolactam'"; }
            { source ullmanns; locus "'Caprolactam'"; }
        );
    }

    {
        name     caprolactamPolymerisation;
        kind     reaction;
        target   nylon6;
        family   polymerisation;
        era      incumbent;
        description "Hydrolytic ring-opening polymerisation of caprolactam.  Written per repeat unit.";
        stoichiometry
        (
            { component caprolactam;           nu -1; }
            { component nylon6;                nu 1; }
        );
        yield
        {
            basis   carbon;
            band    ( 0.88 0.92 );
            origin  assumed;
            reason  "hydrolytic ring-opening polymerisation, 88-92 % conversion at equilibrium, monomer extracted and recycled; the curator's band";
        }
        provenance
        (
            { source ullmanns; locus "'Polyamides'"; }
        );
    }

    {
        name     benzeneNitration;
        kind     reaction;
        target   nitrobenzene;
        family   nitration;
        era      incumbent;
        description "Mixed-acid (HNO3/H2SO4) nitration of benzene: almost all nitrobenzene goes to aniline.  Sulfuric acid acts as the catalyst and water sink, reconcentrated and recycled.";
        stoichiometry
        (
            { component benzene;               nu -1; }
            { component HNO3;                  nu -1; }
            { component nitrobenzene;          nu 1; }
            { component water;                 nu 1; }
        );
        yield
        {
            basis   carbon;
            band    ( 0.97 0.99 );
            origin  assumed;
            reason  "mixed-acid nitration, selectivity > 99 %; the curator's band";
        }
        provenance
        (
            { source weissermelArpe2003; locus "ch. 13, 'Nitrobenzene'"; }
            { source ullmanns; locus "'Nitrobenzene and Nitrotoluenes'"; }
        );
    }

    {
        name     nitrobenzeneHydrogenation;
        kind     reaction;
        target   aniline;
        family   hydrogenation;
        era      incumbent;
        description "Nitrobenzene hydrogenated to aniline, 85 % of which goes to MDI.";
        stoichiometry
        (
            { component nitrobenzene;          nu -1; }
            { component H2;                    nu -3; }
            { component aniline;               nu 1; }
            { component water;                 nu 2; }
        );
        yield
        {
            basis   carbon;
            band    ( 0.97 0.995 );
            origin  assumed;
            reason  "Cu or Ni/Pd gas-phase or liquid-phase hydrogenation; the curator's band";
        }
        provenance
        (
            { source weissermelArpe2003; locus "ch. 13, 'Aniline'"; }
            { source ullmanns; locus "'Aniline'"; }
        );
    }

    {
        name     phosgeneSynthesis;
        kind     reaction;
        target   phosgene;
        family   chlorination;
        era      incumbent;
        description "CO + Cl2 over activated carbon: phosgene, never shipped, made where the isocyanates and polycarbonate are made -- the hidden chlorine consumer of polyurethanes.";
        stoichiometry
        (
            { component CO;                    nu -1; }
            { component Cl2;                   nu -1; }
            { component phosgene;              nu 1; }
        );
        yield
        {
            basis   chlorine;
            band    ( 0.98 0.995 );
            origin  assumed;
            reason  "activated-carbon catalysed, quantitative; the curator's band";
        }
        provenance
        (
            { source ullmanns; locus "'Phosgene'"; }
        );
    }

    {
        name     MDIsynthesis;
        kind     reaction;
        target   MDI;
        family   condensation;
        era      incumbent;
        description "Aniline + formaldehyde condense (HCl catalysed) to methylenedianiline, which phosgene converts to MDI: four HCl per MDI are FORCED, and the chlorine is in neither reactant nor product of the polyurethane -- it is a reagent that leaves as acid.  Three roots meet: benzene (aniline), syngas (formaldehyde, CO) and chlor-alkali.";
        stoichiometry
        (
            { component aniline;               nu -2; }
            { component formaldehyde;          nu -1; }
            { component phosgene;              nu -2; }
            { component MDI;                   nu 1; }
            { component HCl;                   nu 4; }
            { component water;                 nu 1; }
        );
        yield
        {
            basis   carbon;
            band    ( 0.9 0.95 );
            origin  assumed;
            reason  "aniline-formaldehyde condensation to MDA, then phosgenation; written as the overall; the curator's band";
        }
        provenance
        (
            { source weissermelArpe2003; locus "ch. 13, 'Diisocyanates'"; }
            { source ullmanns; locus "'Isocyanates, Organic'"; }
        );
    }

    {
        name     benzeneAlkylationLAB;
        kind     reaction;
        target   LAB;
        family   alkylation;
        era      incumbent;
        description "Benzene alkylated with a detergent-range linear olefin: linear alkylbenzene (written on dodecylbenzene), sulfonated to LAS, the workhorse anionic surfactant -- the benzene and ethylene (via the oligomer) trees meet.";
        stoichiometry
        (
            { component benzene;               nu -1; }
            { component 1Dodecene;             nu -1; }
            { component LAB;                   nu 1; }
        );
        yield
        {
            basis   carbon;
            band    ( 0.93 0.97 );
            origin  assumed;
            reason  "HF or solid-acid (DETAL) alkylation with a benzene excess; the curator's band";
        }
        provenance
        (
            { source weissermelArpe2003; locus "ch. 13, 'Alkylbenzenes'"; }
            { source ullmanns; locus "'Surfactants'"; }
        );
    }

    {
        name     tolueneHDA;
        kind     reaction;
        target   benzene;
        family   hydrodealkylation;
        era      incumbent;
        description "Toluene + H2 to benzene + methane: the swing route that converts the surplus toluene into the benzene the market wants, at the cost of a methyl group burned as fuel gas.  The HDA plant is Choupo's flat two-recycle flowsheet.";
        stoichiometry
        (
            { component toluene;               nu -1; }
            { component H2;                    nu -1; }
            { component benzene;               nu 1; }
            { component CH4;                   nu 1; }
        );
        yield
        {
            basis   carbon;
            band    ( 0.96 0.99 );
            origin  assumed;
            reason  "thermal or catalytic HDA at 600-700 C, selectivity > 95 % on toluene (benzene basis 6/7 of the carbon); the curator's band";
        }
        cases    ( "tutorials/plant/hda" "tutorials/steady/reactors/conversion01_hda" );
        provenance
        (
            { source weissermelArpe2003; locus "ch. 12, 'Benzene' -- hydrodealkylation"; }
            { source ullmanns; locus "'Benzene'"; }
        );
    }

    {
        name     tolueneDisproportionation;
        kind     reaction;
        target   mixedXylenes;
        family   disproportionation;
        era      incumbent;
        description "Two toluenes to one benzene and one xylene over an acid zeolite: no carbon lost, both products wanted -- the preferred toluene outlet where p-xylene demand (PET) is the driver.";
        stoichiometry
        (
            { component toluene;               nu -2; }
            { component benzene;               nu 1; }
            { component mixedXylenes;          nu 1; }
        );
        yield
        {
            basis   carbon;
            band    ( 0.95 0.98 );
            origin  assumed;
            reason  "TDP over ZSM-5/mordenite; selective TDP gives > 90 % p-xylene in the C8; the curator's band";
        }
        provenance
        (
            { source weissermelArpe2003; locus "ch. 12, 'Xylenes' -- disproportionation and transalkylation"; }
            { source ullmanns; locus "'Xylenes'"; }
        );
    }

    {
        name     tolueneDinitration;
        kind     reaction;
        target   24Dinitrotoluene;
        family   nitration;
        era      incumbent;
        description "Dinitration of toluene in mixed acid: the 80:20 2,4-/2,6-dinitrotoluene mixture of the TDI chain.";
        stoichiometry
        (
            { component toluene;               nu -1; }
            { component HNO3;                  nu -2; }
            { component 24Dinitrotoluene;      nu 1; }
            { component water;                 nu 2; }
        );
        yield
        {
            basis   carbon;
            band    ( 0.95 0.98 );
            origin  assumed;
            reason  "two-stage mixed-acid nitration (2,4- and 2,6-isomers, 80:20); the curator's band";
        }
        provenance
        (
            { source weissermelArpe2003; locus "ch. 13, 'Diisocyanates' -- TDI"; }
            { source ullmanns; locus "'Nitrobenzene and Nitrotoluenes'"; }
        );
    }

    {
        name     dinitrotolueneHydrogenation;
        kind     reaction;
        target   toluenediamine;
        family   hydrogenation;
        era      incumbent;
        description "Both nitro groups hydrogenated to the diamine.";
        stoichiometry
        (
            { component 24Dinitrotoluene;      nu -1; }
            { component H2;                    nu -6; }
            { component toluenediamine;        nu 1; }
            { component water;                 nu 4; }
        );
        yield
        {
            basis   carbon;
            band    ( 0.97 0.99 );
            origin  assumed;
            reason  "Pd or Ni hydrogenation; the curator's band";
        }
        provenance
        (
            { source weissermelArpe2003; locus "ch. 13, 'Diisocyanates'"; }
            { source ullmanns; locus "'Isocyanates, Organic'"; }
        );
    }

    {
        name     TDIphosgenation;
        kind     reaction;
        target   TDI;
        family   condensation;
        era      incumbent;
        description "TDI by phosgenation of toluenediamine: the flexible-foam isocyanate, four HCl forced per mole.";
        stoichiometry
        (
            { component toluenediamine;        nu -1; }
            { component phosgene;              nu -2; }
            { component TDI;                   nu 1; }
            { component HCl;                   nu 4; }
        );
        yield
        {
            basis   carbon;
            band    ( 0.92 0.96 );
            origin  assumed;
            reason  "phosgenation in o-dichlorobenzene; the curator's band";
        }
        provenance
        (
            { source weissermelArpe2003; locus "ch. 13, 'Diisocyanates'"; }
            { source ullmanns; locus "'Isocyanates, Organic'"; }
        );
    }

    {
        name     tolueneOxidationBenzoic;
        kind     reaction;
        target   benzoicAcid;
        family   oxidation;
        era      incumbent;
        description "Liquid-phase air oxidation of toluene over cobalt: benzoic acid for the (minor) phenol route, benzoates and caprolactam (SNIA).";
        stoichiometry
        (
            { component toluene;               nu -1; }
            { component O2;                    nu -1.5; }
            { component benzoicAcid;           nu 1; }
            { component water;                 nu 1; }
        );
        yield
        {
            basis   carbon;
            band    ( 0.85 0.92 );
            origin  assumed;
            reason  "Co-catalysed liquid-phase air oxidation; the curator's band";
        }
        provenance
        (
            { source weissermelArpe2003; locus "ch. 13, 'Benzoic acid'"; }
            { source ullmanns; locus "'Benzoic Acid and Derivatives'"; }
        );
    }

    {
        name     pXyleneOxidation;
        kind     reaction;
        target   terephthalicAcid;
        family   oxidation;
        era      incumbent;
        description "The Amoco oxidation in acetic acid over Co/Mn/Br: both methyls to carboxyls in one pass, then hydrogenation of the crude acid to PTA -- the whole reason p-xylene is separated from its isomers.";
        stoichiometry
        (
            { component pXylene;               nu -1; }
            { component O2;                    nu -3; }
            { component terephthalicAcid;      nu 1; }
            { component water;                 nu 2; }
        );
        yield
        {
            basis   carbon;
            band    ( 0.95 0.98 );
            origin  assumed;
            reason  "Amoco Co/Mn/Br in acetic acid, 200 C, 15-30 bar, yield > 95 %; the curator's band";
        }
        provenance
        (
            { source weissermelArpe2003; locus "ch. 14, 'Terephthalic acid' -- the Amoco process"; }
            { source ullmanns; locus "'Terephthalic Acid, Dimethyl Terephthalate, and Isophthalic Acid'"; }
        );
    }

    {
        name     PTAesterificationDMT;
        kind     reaction;
        target   dimethylTerephthalate;
        family   esterification;
        era      incumbent;
        description "DMT, the older PET monomer (purified by distillation rather than crystallisation); today most PET is made from PTA directly.";
        stoichiometry
        (
            { component terephthalicAcid;      nu -1; }
            { component methanol;              nu -2; }
            { component dimethylTerephthalate; nu 1; }
            { component water;                 nu 2; }
        );
        yield
        {
            basis   carbon;
            band    ( 0.95 0.99 );
            origin  assumed;
            reason  "the curator's band";
        }
        provenance
        (
            { source ullmanns; locus "'Terephthalic Acid, Dimethyl Terephthalate, and Isophthalic Acid'"; }
        );
    }

    {
        name     PETpolycondensation;
        kind     reaction;
        target   PET;
        family   polymerisation;
        era      incumbent;
        description "PTA + MEG esterified and polycondensed: the bottle and fibre polyester, where the xylene and ethylene trees join.  Written per repeat unit.";
        stoichiometry
        (
            { component terephthalicAcid;      nu -1; }
            { component ethyleneGlycol;        nu -1; }
            { component PET;                   nu 1; }
            { component water;                 nu 2; }
        );
        yield
        {
            basis   carbon;
            band    ( 0.97 0.995 );
            origin  assumed;
            reason  "direct esterification then melt polycondensation under vacuum; the curator's band";
        }
        provenance
        (
            { source ullmanns; locus "'Polyesters'"; }
            { source iea2018; locus "ch. 4, Figure 4.2, key thermoplastics"; }
        );
    }

    {
        name     oXyleneOxidation;
        kind     reaction;
        target   phthalicAnhydride;
        family   oxidation;
        era      incumbent;
        description "Gas-phase oxidation of o-xylene over V2O5/TiO2 in multitubular salt-cooled reactors: phthalic anhydride for plasticisers (phthalate esters of 2-EH) and alkyd resins -- the o-xylene tree meets the oxo tree.";
        stoichiometry
        (
            { component oXylene;               nu -1; }
            { component O2;                    nu -3; }
            { component phthalicAnhydride;     nu 1; }
            { component water;                 nu 3; }
        );
        yield
        {
            basis   carbon;
            band    ( 0.78 0.84 );
            origin  assumed;
            reason  "V2O5/TiO2 gas-phase oxidation, 78-84 % molar yield; the curator's band";
        }
        provenance
        (
            { source weissermelArpe2003; locus "ch. 14, 'Phthalic anhydride'"; }
            { source ullmanns; locus "'Phthalic Acid and Derivatives'"; }
        );
    }

    {
        name     benzeneChlorination;
        kind     reaction;
        target   monochlorobenzene;
        family   chlorination;
        era      incumbent;
        description "Ring chlorination of benzene over FeCl3: chlorobenzene (nitrochlorobenzenes, solvents) with one HCl forced per mole.";
        stoichiometry
        (
            { component benzene;               nu -1; }
            { component Cl2;                   nu -1; }
            { component monochlorobenzene;     nu 1; }
            { component HCl;                   nu 1; }
        );
        yield
        {
            basis   carbon;
            band    ( 0.85 0.9 );
            origin  assumed;
            reason  "FeCl3-catalysed, dichlorobenzenes the by-products; the curator's band";
        }
        cases    ( "tutorials/steady/reactors/chlorophenol01_chlorination" );
        provenance
        (
            { source weissermelArpe2003; locus "ch. 13, 'Chlorobenzenes'"; }
            { source ullmanns; locus "'Chlorinated Hydrocarbons'"; }
        );
    }

    {
        name     DEHPesterification;
        kind     reaction;
        target   DEHP;
        family   esterification;
        era      incumbent;
        description "Phthalic anhydride + two 2-ethylhexanols: the plasticiser of flexible PVC, where the o-xylene and the oxo (propylene + syngas) trees meet.";
        stoichiometry
        (
            { component phthalicAnhydride;     nu -1; }
            { component 2Ethylhexanol;         nu -2; }
            { component DEHP;                  nu 1; }
            { component water;                 nu 1; }
        );
        yield
        {
            basis   carbon;
            band    ( 0.95 0.99 );
            origin  assumed;
            reason  "Ti-catalysed esterification; the curator's band";
        }
        provenance
        (
            { source ullmanns; locus "'Plasticizers'"; }
        );
    }

    {
        name     phenolHydrogenation;
        kind     reaction;
        target   cyclohexanone;
        family   hydrogenation;
        era      incumbent;
        description "The phenol route to KA oil (selective, no low-conversion oxidation) -- used where phenol is cheap beside cyclohexane.";
        stoichiometry
        (
            { component phenol;                nu -2; }
            { component H2;                    nu -5; }
            { component cyclohexanone;         nu 1; }
            { component cyclohexanol;          nu 1; }
        );
        yield
        {
            basis   carbon;
            band    ( 0.95 0.99 );
            origin  assumed;
            reason  "Pd-catalysed gas-phase hydrogenation of phenol to a ketone-rich KA; written as a 1:1 pair for the fork; the curator's band";
        }
        provenance
        (
            { source weissermelArpe2003; locus "ch. 10, 'Cyclohexanol/cyclohexanone' -- the phenol route"; }
            { source ullmanns; locus "'Cyclohexanol and Cyclohexanone'"; }
        );
    }
);
`,Pn=`/*--------------------------------*- Choupo -*-----------------------*\\
  FEEDSTOCKS TO ROOTS: how crude oil, natural gas, coal, sugar, sour gas and
  waste plastics become the roots -- the crackers, the reformer, FCC, the
  separations of the cuts, Claus and fermentation.  Here the FORCED CO-PRODUCTION
  of the steam cracker is stated as a mass slate on a lumped feed, because a
  naphtha has no molecular formula to balance.
  Grammar: README.md beside this file.  Every edge is re-read, balanced and
  checked by bin/curate/check_chemistry_graph.py.
\\*---------------------------------------------------------------------------*/


recordType    productionRoutes;
schemaVersion 1;
graph         treeOfChemistry;

routes
(
    {
        name     crudeToNaphtha;
        kind     separation;
        target   naphtha;
        family   separation;
        era      incumbent;
        description "Atmospheric distillation of crude oil: the naphtha cut is the steam cracker's and the reformer's feed; the gas oil cut feeds FCC.";
        feed     crudeOil;
        yield
        {
            basis   mass;
            band    ( 0.15 0.3 );
            origin  assumed;
            reason  "straight-run naphtha is 15-30 wt% of a typical crude; the figure depends on the crude and is the curator's band";
        }
        provenance
        (
            { source moulijn2013; locus "refinery overview chapter"; }
            { source iea2018; locus "ch. 1, Figure 1.7 'Primary chemicals in context' and ch. 2 on feedstocks"; }
        );
    }

    {
        name     crudeToGasOil;
        kind     separation;
        target   gasOil;
        family   separation;
        era      incumbent;
        description "Atmospheric and vacuum distillation of crude oil to the gas-oil cuts that feed fluid catalytic cracking.";
        feed     crudeOil;
        yield
        {
            basis   mass;
            band    ( 0.25 0.4 );
            origin  assumed;
            reason  "atmospheric + vacuum gas oil as a fraction of crude; the curator's band";
        }
        provenance
        (
            { source moulijn2013; locus "refinery overview chapter"; }
        );
    }

    {
        name     naturalGasToMethane;
        kind     separation;
        target   CH4;
        family   separation;
        era      incumbent;
        description "Gas processing: acid-gas removal, dehydration and NGL extraction leave pipeline methane.";
        feed     naturalGas;
        yield
        {
            basis   mass;
            band    ( 0.8 0.95 );
            origin  assumed;
            reason  "methane content of pipeline natural gas, 85-95 vol%; the curator's band";
        }
        provenance
        (
            { source moulijn2013; locus "natural gas processing"; }
        );
    }

    {
        name     naturalGasToEthane;
        kind     separation;
        target   ethane;
        family   separation;
        era      incumbent;
        description "NGL extraction (cryogenic turbo-expander): the ethane that feeds the gas-based crackers of North America and the Middle East.";
        feed     naturalGas;
        yield
        {
            basis   mass;
            band    ( 0.02 0.1 );
            origin  assumed;
            reason  "ethane in raw gas varies from 1 to 10 vol% by field; the curator's band";
        }
        provenance
        (
            { source moulijn2013; locus "natural gas processing"; }
            { source iea2018; locus "ch. 2: ethane and LPG availability by region"; }
        );
    }

    {
        name     naturalGasToPropane;
        kind     separation;
        target   propane;
        family   separation;
        era      incumbent;
        description "NGL extraction: propane and butanes (LPG), also recovered in refineries.";
        feed     naturalGas;
        yield
        {
            basis   mass;
            band    ( 0.01 0.05 );
            origin  assumed;
            reason  "propane in raw gas; the curator's band";
        }
        provenance
        (
            { source moulijn2013; locus "natural gas processing"; }
        );
    }

    {
        name     naturalGasToButanes;
        kind     separation;
        target   nButane;
        family   separation;
        era      incumbent;
        description "NGL extraction: the butanes (n- and iso-) of LPG; n-butane is the maleic anhydride feed, isobutane the alkylation/isobutene feed.";
        feed     naturalGas;
        yield
        {
            basis   mass;
            band    ( 0.005 0.03 );
            origin  assumed;
            reason  "butanes in raw gas; the curator's band";
        }
        provenance
        (
            { source moulijn2013; locus "natural gas processing"; }
        );
    }

    {
        name     naphthaSteamCracking;
        kind     processYield;
        target   ethylene;
        family   steamCracking;
        era      incumbent;
        description "The cracker is a FORCED CO-PRODUCTION machine: one tonne of naphtha gives ethylene, propylene, a C4 cut, pyrolysis gasoline, hydrogen and fuel gas in proportions set by the feed and the severity, not by the market.  Chemistry: free-radical pyrolysis at 800-880 C, 0.1-0.5 s, steam-diluted, followed by quench and a cryogenic separation train.";
        feed     naphtha;
        slate
        (
            { component ethylene;              massPerKgFeed ( 0.28 0.34 ); origin assumed; reason "high-severity naphtha cracking ethylene yield; the curator's band"; }
            { component propylene;             massPerKgFeed ( 0.13 0.17 ); origin assumed; reason "the curator's band"; }
            { component mixedC4;               massPerKgFeed ( 0.08 0.12 ); origin assumed; reason "crude C4 cut, roughly half butadiene; the curator's band"; }
            { component pyrolysisGasoline;     massPerKgFeed ( 0.18 0.25 ); origin assumed; reason "C5+ liquid; the curator's band"; }
            { component H2;                    massPerKgFeed ( 0.008 0.012 ); origin assumed; reason "the curator's band"; }
            { component CH4;                   massPerKgFeed ( 0.14 0.17 ); origin assumed; reason "fuel gas, burned in the furnaces; the curator's band"; }
        );
        energy
        (
            { route "naphtha cracker, typical"; band ( 26 31 ); unit "GJ per t ethylene"; origin assumed; reason "the band quoted in the energy-use review named in provenance; not read back against its table"; }
        );
        provenance
        (
            { source ren2006; locus "Table of typical product yields by feedstock"; }
            { source iea2018; locus "p. 32, Figure 2.5 'Yield of individual HVCs in multi-product processes' (naphtha, ethane, LPG, gas oil, NCC, MTO)"; }
            { source weissermelArpe2003; locus "ch. 3, 'Olefins'"; }
            { source chauvelLefebvre1989; locus "vol. 1, steam cracking"; }
        );
    }

    {
        name     ethaneSteamCracking;
        kind     processYield;
        target   ethylene;
        family   steamCracking;
        era      incumbent;
        description "Ethane cracking gives almost only ethylene: the slate is narrow, the separation train short, and the co-products that a naphtha cracker forces (propylene, butadiene, aromatics) are NOT made -- which is why the shale-gas crackers tightened the propylene and butadiene markets.";
        feed     ethane;
        slate
        (
            { component ethylene;              massPerKgFeed ( 0.78 0.84 ); origin assumed; reason "overall yield with ethane recycle to extinction; the curator's band"; }
            { component propylene;             massPerKgFeed ( 0.01 0.03 ); origin assumed; reason "the curator's band"; }
            { component mixedC4;               massPerKgFeed ( 0.01 0.03 ); origin assumed; reason "the curator's band"; }
            { component pyrolysisGasoline;     massPerKgFeed ( 0.01 0.03 ); origin assumed; reason "the curator's band"; }
            { component H2;                    massPerKgFeed ( 0.05 0.07 ); origin assumed; reason "the curator's band"; }
            { component CH4;                   massPerKgFeed ( 0.04 0.07 ); origin assumed; reason "the curator's band"; }
        );
        energy
        (
            { route "ethane cracker, typical"; band ( 17 21 ); unit "GJ per t ethylene"; origin assumed; reason "the band quoted in the energy-use review named in provenance; not read back against its table"; }
        );
        provenance
        (
            { source ren2006; locus "typical yields and energy use by feedstock"; }
            { source iea2018; locus "p. 32, Figure 2.5: ethane gives the highest ethylene yield and the least balanced slate"; }
            { source amghizar2017; locus "shale ethane and the feedstock shift"; }
        );
    }

    {
        name     gasOilFCC;
        kind     processYield;
        target   propylene;
        family   catalyticCracking;
        era      incumbent;
        description "Fluid catalytic cracking is a FUELS process whose C3/C4 off-gas supplies about a third of the world's propylene; the balance of the slate (gasoline, cycle oils, coke) is outside this graph.";
        feed     gasOil;
        slate
        (
            { component propylene;             massPerKgFeed ( 0.04 0.1 ); origin assumed; reason "FCC propylene yield, 4-6 % in fuel mode, up to 10 % with ZSM-5 additive in petrochemical mode; the curator's band"; }
            { component mixedC4;               massPerKgFeed ( 0.06 0.12 ); origin assumed; reason "FCC C4s, isobutene-rich, butadiene-poor; the curator's band"; }
        );
        provenance
        (
            { source moulijn2013; locus "fluid catalytic cracking"; }
            { source iea2018; locus "p. 29: about 190 Mt of chemicals, two-thirds HVCs, are produced as refinery by-products"; }
        );
    }

    {
        name     naphthaReforming;
        kind     processYield;
        target   reformate;
        family   catalyticReforming;
        era      incumbent;
        description "Catalytic reforming over Pt/Re on chlorided alumina, 500 C, 5-30 bar: naphthenes dehydrogenate and paraffins cyclise to aromatics, releasing hydrogen.  The reformate is the largest BTX source; aromatics extraction follows.";
        feed     naphtha;
        slate
        (
            { component reformate;             massPerKgFeed ( 0.8 0.9 ); origin assumed; reason "C5+ reformate yield; the curator's band"; }
            { component H2;                    massPerKgFeed ( 0.02 0.035 ); origin assumed; reason "the refinery's main hydrogen source; the curator's band"; }
        );
        provenance
        (
            { source moulijn2013; locus "catalytic reforming"; }
            { source weissermelArpe2003; locus "ch. 12, 'Aromatics'"; }
        );
    }

    {
        name     reformateToBenzene;
        kind     separation;
        target   benzene;
        family   separation;
        era      incumbent;
        description "Liquid-liquid extraction (sulfolane) and distillation of the reformate's BTX.";
        feed     reformate;
        yield
        {
            basis   mass;
            band    ( 0.03 0.08 );
            origin  assumed;
            reason  "benzene content of reformate; the curator's band";
        }
        provenance
        (
            { source weissermelArpe2003; locus "ch. 12, aromatics extraction (sulfolane, glycol processes)"; }
        );
    }

    {
        name     reformateToToluene;
        kind     separation;
        target   toluene;
        family   separation;
        era      incumbent;
        description "Toluene is the most abundant reformate aromatic -- more than the market wants, which is why toluene is hydrodealkylated and disproportionated to benzene and xylenes.";
        feed     reformate;
        yield
        {
            basis   mass;
            band    ( 0.15 0.25 );
            origin  assumed;
            reason  "toluene content of reformate; the curator's band";
        }
        provenance
        (
            { source weissermelArpe2003; locus "ch. 12, aromatics extraction"; }
        );
    }

    {
        name     reformateToXylenes;
        kind     separation;
        target   mixedXylenes;
        family   separation;
        era      incumbent;
        description "The C8 cut of the reformate: a near-equilibrium mixture of the three xylenes and ethylbenzene.";
        feed     reformate;
        yield
        {
            basis   mass;
            band    ( 0.15 0.25 );
            origin  assumed;
            reason  "C8 aromatics content of reformate; the curator's band";
        }
        provenance
        (
            { source weissermelArpe2003; locus "ch. 12, aromatics extraction"; }
        );
    }

    {
        name     pygasToBenzene;
        kind     separation;
        target   benzene;
        family   separation;
        era      incumbent;
        description "Hydrotreated pyrolysis gasoline is 60-70 wt% aromatics and benzene-rich; the naphtha cracker is therefore a benzene producer too.";
        feed     pyrolysisGasoline;
        yield
        {
            basis   mass;
            band    ( 0.25 0.4 );
            origin  assumed;
            reason  "benzene content of hydrotreated pygas; the curator's band";
        }
        provenance
        (
            { source weissermelArpe2003; locus "ch. 12, 'Aromatics' -- pyrolysis gasoline as a source"; }
        );
    }

    {
        name     pygasToToluene;
        kind     separation;
        target   toluene;
        family   separation;
        era      incumbent;
        description "Toluene from the aromatics extraction of pyrolysis gasoline.";
        feed     pyrolysisGasoline;
        yield
        {
            basis   mass;
            band    ( 0.1 0.2 );
            origin  assumed;
            reason  "the curator's band";
        }
        provenance
        (
            { source weissermelArpe2003; locus "ch. 12, 'Aromatics'"; }
        );
    }

    {
        name     pygasToXylenes;
        kind     separation;
        target   mixedXylenes;
        family   separation;
        era      incumbent;
        description "C8 aromatics from the aromatics extraction of pyrolysis gasoline.";
        feed     pyrolysisGasoline;
        yield
        {
            basis   mass;
            band    ( 0.05 0.12 );
            origin  assumed;
            reason  "the curator's band";
        }
        provenance
        (
            { source weissermelArpe2003; locus "ch. 12, 'Aromatics'"; }
        );
    }

    {
        name     c4ExtractionButadiene;
        kind     separation;
        target   13Butadiene;
        family   separation;
        era      incumbent;
        description "Extractive distillation (NMP, DMF or acetonitrile) takes butadiene out of the crude C4 cut; the raffinate carries the butenes.";
        feed     mixedC4;
        yield
        {
            basis   mass;
            band    ( 0.35 0.5 );
            origin  assumed;
            reason  "butadiene content of a naphtha-cracker C4 cut; the curator's band";
        }
        provenance
        (
            { source weissermelArpe2003; locus "ch. 5, '1,3-Diolefins' -- extractive distillation with NMP/DMF/acetonitrile"; }
        );
    }

    {
        name     c4RaffinateIsobutene;
        kind     separation;
        target   isoButene;
        family   separation;
        era      incumbent;
        description "Isobutene is taken from raffinate 1 by reaction (MTBE etherification, then cracking back; or hydration to tert-butanol) because it cannot be distilled from the n-butenes.";
        feed     mixedC4;
        yield
        {
            basis   mass;
            band    ( 0.2 0.3 );
            origin  assumed;
            reason  "isobutene content of a cracker C4 cut; the curator's band";
        }
        provenance
        (
            { source weissermelArpe2003; locus "ch. 3, 'Olefins' -- raffinate 1 and the isobutene routes"; }
        );
    }

    {
        name     c4RaffinateButenes;
        kind     separation;
        target   1Butene;
        family   separation;
        era      incumbent;
        description "Raffinate 2 (after butadiene and isobutene) is the n-butenes: 1-butene for LLDPE comonomer, 2-butenes for alkylate and sec-butanol.";
        feed     mixedC4;
        yield
        {
            basis   mass;
            band    ( 0.2 0.35 );
            origin  assumed;
            reason  "n-butene content of a cracker C4 cut; the curator's band";
        }
        provenance
        (
            { source weissermelArpe2003; locus "ch. 3, 'Olefins' -- raffinate 2"; }
        );
    }

    {
        name     xylenesToPXylene;
        kind     separation;
        target   pXylene;
        family   separation;
        era      incumbent;
        description "The three xylenes boil within 6 K and cannot be distilled apart; p-xylene is crystallised (highest melting point) or adsorbed (simulated moving bed), and the raffinate is isomerised back to equilibrium and recycled.";
        feed     mixedXylenes;
        yield
        {
            basis   mass;
            band    ( 0.18 0.24 );
            origin  assumed;
            reason  "p-xylene in an equilibrium C8 cut is about 20-24 %; recovered per pass by crystallisation or simulated-moving-bed adsorption; the curator's band";
        }
        provenance
        (
            { source weissermelArpe2003; locus "ch. 12, xylene separation -- crystallisation and adsorption"; }
            { source kirkOthmer; locus "'Xylenes and Ethylbenzene'"; }
        );
    }

    {
        name     xylenesToOXylene;
        kind     separation;
        target   oXylene;
        family   separation;
        era      incumbent;
        description "o-Xylene boils 5 K above the others and is the one xylene that superfractionation can take.";
        feed     mixedXylenes;
        yield
        {
            basis   mass;
            band    ( 0.15 0.22 );
            origin  assumed;
            reason  "o-xylene in an equilibrium C8 cut; the curator's band";
        }
        provenance
        (
            { source weissermelArpe2003; locus "ch. 12, xylene separation"; }
        );
    }

    {
        name     xylenesToMXylene;
        kind     separation;
        target   mXylene;
        family   separation;
        era      incumbent;
        description "m-Xylene, the equilibrium-favoured isomer, is mostly isomerised to p-xylene rather than sold.";
        feed     mixedXylenes;
        yield
        {
            basis   mass;
            band    ( 0.4 0.5 );
            origin  assumed;
            reason  "m-xylene is the most abundant isomer at equilibrium; the curator's band";
        }
        provenance
        (
            { source weissermelArpe2003; locus "ch. 12, xylene separation"; }
        );
    }

    {
        name     mXyleneIsomerisation;
        kind     reaction;
        target   pXylene;
        family   isomerisation;
        era      incumbent;
        description "The p-xylene loop: the crystalliser or adsorber raffinate is re-equilibrated over an acid zeolite and returned, so that nearly all the C8 cut ends as p-xylene.";
        stoichiometry
        (
            { component mXylene;               nu -1; }
            { component pXylene;               nu 1; }
        );
        yield
        {
            basis   carbon;
            band    ( 0.2 0.24 );
            origin  assumed;
            reason  "per-pass conversion to equilibrium (~22 % p-xylene); overall near-quantitative with recycle; the curator's band";
        }
        provenance
        (
            { source weissermelArpe2003; locus "ch. 12, xylene isomerisation (acid zeolite / Pt bifunctional)"; }
        );
    }

    {
        name     sourGasClaus;
        kind     reaction;
        target   sulfur;
        family   oxidation;
        era      incumbent;
        description "The Claus process: a third of the H2S is burned to SO2 in the thermal stage, which then reacts with the rest over alumina.  Virtually all elemental sulfur is now recovered this way from sour gas and oil -- the sulfuric acid root rests on the refinery.";
        stoichiometry
        (
            { component H2S;                   nu -2; }
            { component O2;                    nu -1; }
            { component sulfur;                nu 2; }
            { component water;                 nu 2; }
        );
        yield
        {
            basis   sulfur;
            band    ( 0.95 0.99 );
            origin  assumed;
            reason  "Claus + tail-gas treatment sulfur recovery; the curator's band";
        }
        cases    ( "tutorials/steady/gibbs/claus01_thermal_stage" );
        provenance
        (
            { source ullmanns; locus "'Sulfur'"; }
            { source moulijn2013; locus "gas treating and the Claus process"; }
        );
    }

    {
        name     sucroseFermentation;
        kind     reaction;
        target   ethanol;
        family   fermentation;
        era      transition;
        description "Sucrose (cane, beet) hydrolysed and fermented by yeast: the bio-ethanol that Brazil dehydrates to ethylene.  A third of the sugar's carbon leaves as CO2 by stoichiometry -- a concentrated, biogenic CO2 stream.";
        stoichiometry
        (
            { component sucrose;               nu -1; }
            { component water;                 nu -1; }
            { component ethanol;               nu 4; }
            { component CO2;                   nu 4; }
        );
        yield
        {
            basis   carbon;
            band    ( 0.6 0.65 );
            origin  assumed;
            reason  "two-thirds of the sugar carbon goes to ethanol and one-third to CO2 by stoichiometry; yeast yield 90-95 % of that; the curator's band";
        }
        cases    ( "tutorials/plant/ChemicalPlantTutorial" );
        provenance
        (
            { source huber2006; locus "ethanol from sugars and the biorefinery context"; }
            { source iea2018; locus "ch. 5, bio-based routes in the Clean Technology Scenario"; }
        );
    }

    {
        name     plasticsPyrolysis;
        kind     processYield;
        target   naphtha;
        family   pyrolysis;
        era      transition;
        description "Chemical recycling: thermal pyrolysis of sorted polyolefin waste returns a naphtha-range oil that, after hydrotreating, re-enters the steam cracker -- the only route that closes the carbon loop on plastics without burning them.";
        feed     wastePlastics;
        slate
        (
            { component naphtha;               massPerKgFeed ( 0.5 0.8 ); origin assumed; reason "pyrolysis oil yield from polyolefin-rich waste, hydrotreated to a cracker feed; the curator's band"; }
        );
        provenance
        (
            { source iea2018; locus "ch. 5, chemical recycling in the Clean Technology Scenario"; }
            { source amghizar2017; locus "feedstock trends"; }
        );
    }

    {
        name     methaneToAcetylene;
        kind     reaction;
        target   acetylene;
        family   pyrolysis;
        era      incumbent;
        description "Acetylene from methane by partial oxidation at 1500 C and millisecond quench (BASF): the gas-based acetylene that the carbide route competes with.";
        stoichiometry
        (
            { component CH4;                   nu -2; }
            { component acetylene;             nu 1; }
            { component H2;                    nu 3; }
        );
        yield
        {
            basis   carbon;
            band    ( 0.3 0.4 );
            origin  assumed;
            reason  "BASF partial-oxidation (submerged flame) acetylene from methane; the curator's band";
        }
        provenance
        (
            { source weissermelArpe2003; locus "ch. 4, 'Acetylene'"; }
            { source ullmanns; locus "'Acetylene'"; }
        );
    }

    {
        name     carbideFurnace;
        kind     reaction;
        target   CaC2;
        family   pyrolysis;
        era      incumbent;
        description "Lime + coke in the electric-arc furnace to calcium carbide: the coal-based acetylene route that China's PVC still stands on -- electricity-hungry, and a reminder that a root can be replaced in the OTHER direction.";
        stoichiometry
        (
            { component CaO;                   nu -1; }
            { component coke;                  nu -3; }
            { component CaC2;                  nu 1; }
            { component CO;                    nu 1; }
        );
        yield
        {
            basis   carbon;
            band    ( 0.6 0.67 );
            origin  assumed;
            reason  "two of three carbons end in the carbide by stoichiometry; electric-arc furnace, 2000 C; the curator's band";
        }
        energy
        (
            { route "electric-arc carbide furnace"; band ( 3 3.5 ); unit "MWh per t CaC2"; origin assumed; reason "the electricity consumption usually quoted for the carbide furnace; not read back"; }
        );
        provenance
        (
            { source weissermelArpe2003; locus "ch. 4, 'Acetylene' -- the carbide process"; }
            { source ullmanns; locus "'Calcium Carbide'"; }
        );
    }

    {
        name     carbideHydrolysis;
        kind     reaction;
        target   acetylene;
        family   hydration;
        era      incumbent;
        description "Carbide + water to acetylene and slaked lime (the lime is the forced co-product, returned to the furnace or sold).";
        stoichiometry
        (
            { component CaC2;                  nu -1; }
            { component water;                 nu -2; }
            { component acetylene;             nu 1; }
            { component CaOH2;                 nu 1; }
        );
        yield
        {
            basis   carbon;
            band    ( 0.97 0.99 );
            origin  assumed;
            reason  "wet generator; the curator's band";
        }
        provenance
        (
            { source ullmanns; locus "'Acetylene'"; }
        );
    }

    {
        name     methaneChlorination;
        kind     reaction;
        target   methylChloride;
        family   chlorination;
        era      incumbent;
        description "Direct thermal chlorination of methane: the chloromethanes with HCl forced -- beside the methanol hydrochlorination that consumes it.";
        stoichiometry
        (
            { component CH4;                   nu -1; }
            { component Cl2;                   nu -1; }
            { component methylChloride;        nu 1; }
            { component HCl;                   nu 1; }
        );
        yield
        {
            basis   carbon;
            band    ( 0.8 0.9 );
            origin  assumed;
            reason  "thermal chlorination, the higher chloromethanes co-produced; the curator's band";
        }
        provenance
        (
            { source weissermelArpe2003; locus "ch. 2, chloromethanes"; }
            { source ullmanns; locus "'Chloromethanes'"; }
        );
    }
);
`,jn=`/*--------------------------------*- Choupo -*-----------------------*\\
  THE TREE OF CHEMISTRY -- the graph's substances, roots and sources.
  This record is the HEADER of ONE directed graph whose edges live in the
  sibling \`recordType productionRoutes\` files of this folder.  Nodes are
  substances; an edge is a named route (a reaction, a separation or a
  lumped process step) from its reactants to its target.  Nothing in the
  engine reads this folder (README.md beside it); its consumer is the
  EduTool \`The tree of chemistry\` (DEV.md 4c C191 A), and its gate is
  bin/curate/check_chemistry_graph.py, which re-reads every file here,
  balances every reaction with the engine's own formula grammar and
  atomic-weight table, and holds every node and edge to the rules the
  README states.
  THE MESSAGE (the architect's, DEV.md 4c C191): the hundred-odd commodity
  products grow from SEVEN organic roots and FOUR inorganic ones, and the
  sustainable transition replaces the ROOTS, not the leaves.  A node's
  role (feedstock, root, intermediate, product) is NOT stored: a root is
  declared below, and the rest is read off the topology (no inbound edge =
  feedstock; no outbound edge = product), so that it can never disagree
  with the edges.  Likewise a node that has a catalogue component record
  carries neither formula nor CAS here: both are READ from
  data/standards/components/<name>.dat (one home), and the gate holds the
  graph to the catalogue.
\\*---------------------------------------------------------------------------*/


recordType    routeGraph;
schemaVersion 1;
name          treeOfChemistry;
description   "The commodity chemicals as one directed graph: feedstocks, seven organic and four inorganic roots, intermediates and products, joined by named production routes with their stoichiometry, yield, co-products and citation.";

//  THE ROOTS.  Seven organic, four inorganic (the architect's list).  A root
//  with several members is ONE root (the C4s, the xylenes, chlorine WITH caustic
//  -- co-produced -- and synthesis gas as the CO + H2 pair with methanol as its
//  first derivative).  \`group\` is organic | inorganic and the gate counts 7 + 4.
roots
(
    { name ethylene;                group organic;   members ( ethylene ); label "ethylene"; }
    { name propylene;               group organic;   members ( propylene ); label "propylene"; }
    { name C4s;                     group organic;   members ( 13Butadiene 1Butene isoButene ); label "the C4s: butadiene and the butenes"; }
    { name benzene;                 group organic;   members ( benzene ); label "benzene"; }
    { name toluene;                 group organic;   members ( toluene ); label "toluene"; }
    { name xylenes;                 group organic;   members ( pXylene oXylene mXylene ); label "the xylenes"; }
    { name syngas;                  group organic;   members ( CO H2 methanol ); label "synthesis gas (CO + H2), with methanol as its first derivative"; }
    { name ammonia;                 group inorganic; members ( NH3 ); label "ammonia"; }
    { name sulfuricAcid;            group inorganic; members ( H2SO4 ); label "sulfuric acid"; }
    { name chlorAlkali;             group inorganic; members ( Cl2 NaOH ); label "chlorine and caustic soda, co-produced"; }
    { name nitricAndPhosphoricAcid; group inorganic; members ( HNO3 H3PO4 ); label "the nitric and phosphoric acids"; }
);

//  THE PROCESS FAMILIES an edge may declare (\`family\`), each with its meaning.
//  One home: the gate reads this list, not a copy of it.
processFamilies
(
    { name separation;            meaning "a physical separation of a cut or a mixture: distillation, extraction, crystallisation, adsorption"; }
    { name steamCracking;         meaning "thermal pyrolysis of a hydrocarbon feed in the presence of steam, 800-900 C, milliseconds"; }
    { name catalyticCracking;     meaning "fluid catalytic cracking of a heavy cut over a zeolite, 500-550 C"; }
    { name catalyticReforming;    meaning "naphtha dehydrocyclisation/isomerisation over Pt on alumina to aromatics + hydrogen"; }
    { name reforming;             meaning "steam or autothermal reforming of a light hydrocarbon to CO + H2"; }
    { name gasification;          meaning "partial oxidation of a solid or heavy feed with steam/oxygen to CO + H2"; }
    { name shift;                 meaning "the water-gas shift and its reverse"; }
    { name electrolysis;          meaning "an electrochemical conversion driven by electricity"; }
    { name hydrogenation;         meaning "addition of H2 over a metal catalyst"; }
    { name dehydrogenation;       meaning "removal of H2, thermal or catalytic"; }
    { name dehydration;           meaning "removal of water over an acid catalyst"; }
    { name hydration;             meaning "addition of water over an acid catalyst"; }
    { name oxidation;             meaning "selective oxidation with O2/air over a solid catalyst"; }
    { name ammoxidation;          meaning "oxidation in the presence of NH3 to a nitrile"; }
    { name hydroformylation;      meaning "olefin + CO + H2 to an aldehyde over a Co or Rh complex (oxo)"; }
    { name carbonylation;         meaning "insertion of CO, homogeneously catalysed"; }
    { name alkylation;            meaning "aromatic + olefin over an acid catalyst"; }
    { name isomerisation;         meaning "skeletal or positional rearrangement over an acid or bifunctional catalyst"; }
    { name disproportionation;    meaning "transalkylation of methyl groups between aromatic rings"; }
    { name hydrodealkylation;     meaning "removal of an alkyl group from an aromatic ring with H2"; }
    { name chlorination;          meaning "addition or substitution of chlorine; oxychlorination uses HCl + O2"; }
    { name nitration;             meaning "substitution with HNO3 in mixed acid"; }
    { name esterification;        meaning "acid + alcohol to an ester + water"; }
    { name etherification;        meaning "olefin + alcohol to an ether over an acid resin"; }
    { name polymerisation;        meaning "chain or step growth of a monomer to its polymer"; }
    { name condensation;          meaning "a coupling that releases a small molecule (water, NH3, HCl)"; }
    { name acidBase;              meaning "neutralisation or acid attack with no redox"; }
    { name rearrangement;         meaning "an intramolecular rearrangement (Beckmann, Hock)"; }
    { name synthesis;             meaning "a direct catalytic synthesis from its elements or from syngas"; }
    { name fermentation;          meaning "a microbial conversion"; }
    { name pyrolysis;             meaning "thermal depolymerisation or cracking of a solid/polymer feed"; }
    { name methanation;           meaning "hydrogenation of CO/CO2 to methane"; }
    { name methanolToHydrocarbons; meaning "zeolite-catalysed conversion of methanol to olefins or aromatics"; }
);

//  THE SOURCES every edge cites by id.  \`licence\` is the grant the SOURCE
//  carries: ccBy4 / ccBy3 (text and figures reusable with attribution),
//  citedWork (a copyrighted work named as the reference for a FACT -- a title
//  or a DOI is a citation, a copied table is not).  \`verification\` says how
//  well the citation itself is known: checkedCopy (the document was opened and
//  read), bibliographicRecord (title/authors/journal/year corroborated against
//  the Crossref record of the DOI on the date noted; the paper NOT opened),
//  titleOnly (a textbook or encyclopaedia named by title as the standard
//  reference for the route; no page claimed).  No source here is a
//  NonCommercial or no-grant compilation: industry-association statistics
//  (ACC, Cefic, Plastics Europe) were checked on 2026-11-01 and are NOT used,
//  because their terms permit non-commercial use only or state no grant.
sources
(
    {
        name          iea2018;
        citation      "IEA (2018), The Future of Petrochemicals: Towards more sustainable plastics and fertilisers, OECD/IEA, Paris";
        url           "https://www.iea.org/reports/the-future-of-petrochemicals";
        licence       ccBy4;
        licenceNote   "the report page states 'Licence: CC BY 4.0' (read 2026-11-01); the 2018 PDF's own front matter still says 'subject to specific restrictions', the IEA having relicensed its reports since -- the page is the current grant";
        verification  checkedCopy;
        verificationNote "PDF read 2026-11-01; page numbers below are the report's own";
    }
    {
        name          ieaAmmonia2021;
        citation      "IEA (2021), Ammonia Technology Roadmap: Towards more sustainable nitrogen fertiliser production, IEA, Paris";
        url           "https://www.iea.org/reports/ammonia-technology-roadmap";
        licence       ccBy4;
        verification  checkedCopy;
        verificationNote "the report's executive-summary page read 2026-11-01; the full PDF not opened";
    }
    {
        name          ieaHydrogen2019;
        citation      "IEA (2019), The Future of Hydrogen: Seizing today's opportunities, IEA, Paris";
        url           "https://www.iea.org/reports/the-future-of-hydrogen";
        licence       ccBy4;
        verification  checkedCopy;
        verificationNote "report page read 2026-11-01";
    }
    {
        name          weissermelArpe2003;
        citation      "K. Weissermel, H.-J. Arpe, Industrial Organic Chemistry, 4th ed., Wiley-VCH, Weinheim (2003)";
        licence       citedWork;
        verification  titleOnly;
        verificationNote "named as the standard reference for the route; no table or page copied; the stoichiometry is checked by the gate, not quoted from the book";
    }
    {
        name          chauvelLefebvre1989;
        citation      "A. Chauvel, G. Lefebvre, Petrochemical Processes, vols. 1-2, Editions Technip, Paris (1989)";
        licence       citedWork;
        verification  titleOnly;
    }
    {
        name          ullmanns;
        citation      "Ullmann's Encyclopedia of Industrial Chemistry, Wiley-VCH, Weinheim (online edition); the article named in each edge's locus";
        licence       citedWork;
        verification  titleOnly;
    }
    {
        name          kirkOthmer;
        citation      "Kirk-Othmer Encyclopedia of Chemical Technology, Wiley (online edition); the article named in each edge's locus";
        licence       citedWork;
        verification  titleOnly;
    }
    {
        name          moulijn2013;
        citation      "J. A. Moulijn, M. Makkee, A. van Diepen, Chemical Process Technology, 2nd ed., Wiley (2013)";
        licence       citedWork;
        verification  titleOnly;
    }
    {
        name          obrien2005;
        citation      "T. F. O'Brien, T. V. Bommaraju, F. Hine, Handbook of Chlor-Alkali Technology, Springer (2005)";
        licence       citedWork;
        verification  titleOnly;
    }
    {
        name          ren2006;
        citation      "T. Ren, M. Patel, K. Blok, Olefins from conventional and heavy feedstocks: Energy use in steam cracking and alternative processes, Energy 31 (2006) 425-451";
        doi           "10.1016/j.energy.2005.04.001";
        licence       citedWork;
        verification  bibliographicRecord;
        verificationNote "Crossref record of the DOI read 2026-11-01: title, authors, journal, volume, pages and year agree with the citation; the article itself was not opened";
    }
    {
        name          amghizar2017;
        citation      "I. Amghizar, L. A. Vandewalle, K. M. Van Geem, G. B. Marin, New Trends in Olefin Production, Engineering 3 (2017) 171-178";
        doi           "10.1016/J.ENG.2017.02.006";
        licence       ccBy4;
        licenceNote   "Crossref lists CC BY 4.0 for the article";
        verification  bibliographicRecord;
        verificationNote "Crossref record of the DOI read 2026-11-01: title, authors, journal, volume, pages and year agree with the citation; the article itself was not opened";
    }
    {
        name          tian2015;
        citation      "P. Tian, Y. Wei, M. Ye, Z. Liu, Methanol to Olefins (MTO): From Fundamentals to Commercialization, ACS Catalysis 5 (2015) 1922-1938";
        doi           "10.1021/acscatal.5b00007";
        licence       citedWork;
        verification  bibliographicRecord;
        verificationNote "Crossref record of the DOI read 2026-11-01: title, authors, journal, volume, pages and year agree with the citation; the article itself was not opened";
    }
    {
        name          zhangYu2013;
        citation      "M. Zhang, Y. Yu, Dehydration of Ethanol to Ethylene, Industrial & Engineering Chemistry Research 52 (2013) 9505-9514";
        doi           "10.1021/ie401157c";
        licence       citedWork;
        verification  bibliographicRecord;
        verificationNote "Crossref record of the DOI read 2026-11-01: title, authors, journal, volume, pages and year agree with the citation; the article itself was not opened";
    }
    {
        name          sattler2014;
        citation      "J. J. H. B. Sattler, J. Ruiz-Martinez, E. Santillan-Jimenez, B. M. Weckhuysen, Catalytic Dehydrogenation of Light Alkanes on Metals and Metal Oxides, Chemical Reviews 114 (2014) 10613-10653";
        doi           "10.1021/cr5002436";
        licence       citedWork;
        verification  bibliographicRecord;
        verificationNote "Crossref record of the DOI read 2026-11-01: title, authors, journal, volume, pages and year agree with the citation; the article itself was not opened";
    }
    {
        name          perezFortes2016;
        citation      "M. Perez-Fortes, J. C. Schoneberger, A. Boulamanti, E. Tzimas, Methanol synthesis using captured CO2 as raw material: Techno-economic and environmental assessment, Applied Energy 161 (2016) 718-732";
        doi           "10.1016/j.apenergy.2015.07.067";
        licence       citedWork;
        verification  bibliographicRecord;
        verificationNote "Crossref record of the DOI read 2026-11-01: title, authors, journal, volume, pages and year agree with the citation; the article itself was not opened";
    }
    {
        name          zakzeski2010;
        citation      "J. Zakzeski, P. C. A. Bruijnincx, A. L. Jongerius, B. M. Weckhuysen, The Catalytic Valorization of Lignin for the Production of Renewable Chemicals, Chemical Reviews 110 (2010) 3552-3599";
        doi           "10.1021/cr900354u";
        licence       citedWork;
        verification  bibliographicRecord;
        verificationNote "Crossref record of the DOI read 2026-11-01: title, authors, journal, volume, pages and year agree with the citation; the article itself was not opened";
    }
    {
        name          huber2006;
        citation      "G. W. Huber, S. Iborra, A. Corma, Synthesis of Transportation Fuels from Biomass: Chemistry, Catalysts, and Engineering, Chemical Reviews 106 (2006) 4044-4098";
        doi           "10.1021/cr068360d";
        licence       citedWork;
        verification  bibliographicRecord;
        verificationNote "Crossref record of the DOI read 2026-11-01: title, authors, journal, volume, pages and year agree with the citation; the article itself was not opened";
    }
    {
        name          smith2020;
        citation      "C. Smith, A. K. Hill, L. Torrente-Murciano, Current and future role of Haber-Bosch ammonia in a carbon-free energy landscape, Energy & Environmental Science 13 (2020) 331-344";
        doi           "10.1039/C9EE02873K";
        licence       ccBy3;
        licenceNote   "Crossref lists CC BY 3.0 for the article";
        verification  bibliographicRecord;
        verificationNote "Crossref record of the DOI read 2026-11-01: title, authors, journal, volume, pages and year agree with the citation; the article itself was not opened";
    }
);

//  PRODUCTION VOLUMES, the only market numbers in the graph: each one sourced
//  and dated.  A volume naming several substances is their COMBINED figure.
productionVolumes
(
    { substances ( NH3 ); value 185; unit "Mt/yr"; basis "approximately, 2017"; source iea2018; locus "p. 24: 'Global ammonia production is approximately 185 million tonnes per year'"; }
    { substances ( methanol ); value 100; unit "Mt/yr"; basis "approximately, 2017"; source iea2018; locus "p. 24: 'Global methanol production is approximately 100 Mt/yr'"; }
    { substances ( ethylene propylene ); value 255; unit "Mt/yr"; basis "combined light olefins, approximately, 2017"; source iea2018; locus "p. 24: 'Combined global ethylene and propylene production is approximately 255 Mt/yr'"; }
    { substances ( benzene toluene mixedXylenes ); value 110; unit "Mt/yr"; basis "BTX aromatics combined, approximately, 2017"; source iea2018; locus "p. 25: 'Global production of BTX aromatics is approximately 110 Mt/yr'"; }
    { substances ( H2 ); value 70; unit "Mt/yr"; basis "dedicated hydrogen production, approximately, 2018"; source ieaHydrogen2019; locus "report page: 'around 70 million tonnes' of dedicated hydrogen a year"; }
);

//  THE SUBSTANCES.  \`component\` names the catalogue record the formula and CAS
//  are read from; a node without one carries its own \`formula\` (engine grammar,
//  src/thermo/ElementComposition.H) and \`cas\` where one exists.  \`kind\` is
//  molecule (default, omitted), polymer (the formula is the REPEAT UNIT and a
//  polymerisation edge balances per unit) or lumped (a cut or a mixture with no
//  molecular formula: it may only feed \`separation\` and \`processYield\` edges).
substances
(
    //  a boiling-range mixture; the graph enters it through its naphtha and gas-oil cuts
    { name crudeOil; label "crude oil"; cas 8002-05-9; kind lumped; }
    //  mostly methane with ethane, propane and butanes; resolved into its constituents by separation
    { name naturalGas; label "natural gas"; cas 8006-14-2; kind lumped; }
    //  the straight-run cut steam crackers and reformers are fed with
    { name naphtha; label "naphtha (C5-C12 cut)"; cas 8030-30-6; kind lumped; }
    //  the refinery cut fluid catalytic cracking (FCC) converts; its propylene and C4s reach the chemical sector
    { name gasOil; label "gas oil (vacuum/atmospheric)"; kind lumped; }
    //  gasified to CO + H2; the feedstock of about a quarter of the world's ammonia and of China's methanol
    { name coal; label "coal"; kind lumped; }
    //  wood, straw, residues: cellulose + hemicellulose + lignin; a gasification or fermentation feed
    { name biomass; label "lignocellulosic biomass"; kind lumped; }
    //  the aromatic polymer of biomass (15-30 wt% of wood), the only renewable aromatic feedstock at scale
    { name lignin; label "lignin"; cas 9005-53-2; kind lumped; }
    //  polyolefin-rich sorted waste; pyrolysis returns a naphtha-like oil to the cracker
    { name wastePlastics; label "mixed plastic waste"; kind lumped; }
    //  taken as the fluorapatite end-member so the wet-process attack balances; real rock carries carbonate, silica and iron
    { name phosphateRock; label "phosphate rock (fluorapatite)"; formula "Ca5(PO4)3F"; cas 1306-05-4; }
    //  today almost entirely recovered from sour gas and oil (Claus); the mined (Frasch) source is history
    { name sulfur; label "sulfur"; formula S; cas 7704-34-9; }
    { name H2S; label "hydrogen sulfide (sour gas)"; formula H2S; cas 7783-06-4; }
    { name NaCl; label "sodium chloride (brine)"; component NaCl; }
    { name water; label "water"; component water; }
    { name N2; label "nitrogen (from air)"; component N2; }
    { name O2; label "oxygen (from air)"; component O2; }
    //  a by-product of reforming, shift and fermentation; a FEEDSTOCK of urea and, in the transition, of methanol and methane
    { name CO2; label "carbon dioxide"; component CO2; }
    //  natural gas is 85-95 % methane; biomethane is the same molecule
    { name CH4; label "methane"; component CH4; }
    { name ethane; label "ethane"; component ethane; }
    { name propane; label "propane"; component propane; }
    { name nButane; label "n-butane"; component nButane; }
    { name isoButane; label "isobutane"; component isoButane; }
    { name sucrose; label "sucrose (cane/beet sugar)"; component sucrose; }
    { name CaOH2; label "calcium hydroxide (lime)"; formula "Ca(OH)2"; cas 1305-62-0; }
    { name CaCl2; label "calcium chloride"; component CaCl2; }
    { name CO; label "carbon monoxide"; component CO; }
    { name H2; label "hydrogen"; component H2; }
    { name ethylene; label "ethylene"; component ethylene; }
    { name propylene; label "propylene"; component propylene; }
    { name 13Butadiene; label "1,3-butadiene"; component 13Butadiene; }
    //  stands for the n-butenes (1-butene, cis/trans-2-butene) of the C4 raffinate
    { name 1Butene; label "1-butene (n-butenes)"; component 1Butene; }
    { name isoButene; label "isobutene"; component isoButene; }
    //  the cracker's C4 stream: butadiene, isobutene, n-butenes, butanes; resolved by extraction and etherification
    { name mixedC4; label "crude C4 cut"; kind lumped; }
    { name benzene; label "benzene"; component benzene; }
    { name toluene; label "toluene"; component toluene; }
    //  the C8 aromatics cut of a reformer or cracker: p-, m-, o-xylene and ethylbenzene; resolved by crystallisation or adsorption
    { name mixedXylenes; label "mixed xylenes (C8 aromatics cut)"; formula C8H10; cas 1330-20-7; }
    { name pXylene; label "p-xylene"; component pXylene; }
    { name oXylene; label "o-xylene"; component oXylene; }
    { name mXylene; label "m-xylene"; component mXylene; }
    //  the cracker's C5+ liquid, 60-70 wt% aromatics after hydrotreating; a BTX source second only to reformate
    { name pyrolysisGasoline; label "pyrolysis gasoline (pygas)"; kind lumped; }
    //  the aromatic-rich gasoline of a naphtha reformer; the largest BTX source
    { name reformate; label "catalytic reformate"; kind lumped; }
    { name methanol; label "methanol"; component methanol; }
    { name NH3; label "ammonia"; component NH3; }
    { name H2SO4; label "sulfuric acid"; component H2SO4; }
    { name Cl2; label "chlorine"; component Cl2; }
    { name NaOH; label "sodium hydroxide (caustic soda)"; component NaOH; }
    { name HNO3; label "nitric acid"; component HNO3; }
    { name H3PO4; label "phosphoric acid"; component H3PO4; }
    { name polyethylene; label "polyethylene (HDPE/LDPE/LLDPE)"; component polyethylene; kind polymer; }
    { name ethyleneOxide; label "ethylene oxide"; component ethyleneOxide; }
    { name ethyleneGlycol; label "ethylene glycol (MEG)"; component ethyleneGlycol; }
    //  stands for the ethanolamines (mono-, di-, tri-) of the EO + ammonia reaction
    { name monoethanolamine; label "monoethanolamine"; component monoethanolamine; }
    { name Dichloroethane; label "1,2-dichloroethane (EDC)"; component Dichloroethane; }
    { name vinylChloride; label "vinyl chloride (VCM)"; component vinylChloride; }
    { name PVC; label "poly(vinyl chloride)"; component PVC; kind polymer; }
    { name ethylBenzene; label "ethylbenzene"; component ethylBenzene; }
    { name styrene; label "styrene"; component styrene; }
    { name polystyrene; label "polystyrene"; component polystyrene; kind polymer; }
    { name acetaldehyde; label "acetaldehyde"; component acetaldehyde; }
    { name aceticAcid; label "acetic acid"; component aceticAcid; }
    { name vinylAcetate; label "vinyl acetate (VAM)"; component vinylAcetate; }
    { name ethanol; label "ethanol"; component ethanol; }
    { name ethylAcetate; label "ethyl acetate"; component ethylAcetate; }
    { name polypropylene; label "polypropylene"; component polypropylene; kind polymer; }
    { name acrylonitrile; label "acrylonitrile"; component acrylonitrile; }
    { name 12PropyleneOxide; label "propylene oxide"; component 12PropyleneOxide; }
    { name propyleneGlycol; label "propylene glycol"; formula C3H8O2; cas 57-55-6; }
    { name cumene; label "cumene"; component cumene; }
    { name cumeneHydroperoxide; label "cumene hydroperoxide"; component cumeneHydroperoxide; }
    { name phenol; label "phenol"; component phenol; }
    { name acetone; label "acetone"; component acetone; }
    { name bisphenolA; label "bisphenol A"; formula C15H16O2; cas 80-05-7; }
    //  repeat unit of the bisphenol-A carbonate; CAS of the polymer class is not given here
    { name polycarbonate; label "polycarbonate (BPA-PC)"; formula C16H14O3; kind polymer; }
    { name acrolein; label "acrolein"; formula C3H4O; cas 107-02-8; }
    { name acrylicAcid; label "acrylic acid"; component acrylicAcid; }
    { name isopropanol; label "isopropanol"; component isopropanol; }
    { name butanal; label "n-butanal (butyraldehyde)"; component butanal; }
    { name nButanol; label "n-butanol"; component nButanol; }
    { name 2Ethylhexanol; label "2-ethylhexanol"; formula C8H18O; cas 104-76-7; }
    { name HCN; label "hydrogen cyanide"; component HCN; }
    { name acetoneCyanohydrin; label "acetone cyanohydrin"; formula C4H7NO; cas 75-86-5; }
    { name methylMethacrylate; label "methyl methacrylate (MMA)"; component methylMethacrylate; }
    { name PMMA; label "poly(methyl methacrylate)"; component PMMA; kind polymer; }
    //  the forced co-product of the acetone-cyanohydrin MMA route, about 1.2 kg per kg MMA
    { name NH4HSO4; label "ammonium bisulfate"; formula NH4HSO4; cas 7803-63-6; }
    { name allylChloride; label "allyl chloride"; formula C3H5Cl; cas 107-05-1; }
    { name epichlorohydrin; label "epichlorohydrin"; formula C3H5ClO; cas 106-89-8; }
    //  stands for both chlorohydrin isomers of the PO chlorohydrin route
    { name propyleneChlorohydrin; label "propylene chlorohydrin"; formula C3H7ClO; cas 78-89-7; }
    { name polybutadiene; label "polybutadiene rubber"; formula C4H6; cas 9003-17-2; kind polymer; }
    { name MTBE; label "methyl tert-butyl ether"; formula C5H12O; cas 1634-04-4; }
    { name maleicAnhydride; label "maleic anhydride"; component maleicAnhydride; }
    { name adiponitrile; label "adiponitrile"; formula C6H8N2; cas 111-69-3; }
    { name hexamethylenediamine; label "hexamethylenediamine (HMDA)"; formula C6H16N2; cas 124-09-4; }
    { name cyclohexane; label "cyclohexane"; component cyclohexane; }
    { name cyclohexanol; label "cyclohexanol (KA oil, alcohol half)"; component cyclohexanol; }
    { name cyclohexanone; label "cyclohexanone (KA oil, ketone half)"; component cyclohexanone; }
    { name adipicAcid; label "adipic acid"; component adipicAcid; }
    { name nylon66; label "nylon 6,6"; formula C12H22N2O2; cas 32131-17-2; kind polymer; }
    { name cyclohexanoneOxime; label "cyclohexanone oxime"; formula C6H11NO; cas 100-64-1; }
    { name hydroxylamine; label "hydroxylamine"; formula NH3O; cas 7803-49-8; }
    { name caprolactam; label "caprolactam"; formula C6H11NO; cas 105-60-2; }
    { name nylon6; label "nylon 6"; formula C6H11NO; cas 25038-54-4; kind polymer; }
    //  the forced co-product of caprolactam (about 1.8 kg per kg in the classic route) and a fertiliser
    { name ammoniumSulfate; label "ammonium sulfate"; formula "(NH4)2SO4"; cas 7783-20-2; }
    { name nitrobenzene; label "nitrobenzene"; component nitrobenzene; }
    { name aniline; label "aniline"; component aniline; }
    { name phosgene; label "phosgene"; formula COCl2; cas 75-44-5; }
    { name MDI; label "methylene diphenyl diisocyanate (MDI)"; formula C15H10N2O2; cas 101-68-8; }
    { name 24Dinitrotoluene; label "2,4-dinitrotoluene"; component 24Dinitrotoluene; }
    { name toluenediamine; label "toluene-2,4-diamine (TDA)"; formula C7H10N2; cas 95-80-7; }
    { name TDI; label "toluene diisocyanate (TDI)"; formula C9H6N2O2; cas 584-84-9; }
    { name benzoicAcid; label "benzoic acid"; component benzoicAcid; }
    { name terephthalicAcid; label "terephthalic acid (PTA)"; component terephthalicAcid; }
    { name dimethylTerephthalate; label "dimethyl terephthalate (DMT)"; component dimethylTerephthalate; }
    { name PET; label "poly(ethylene terephthalate)"; component PET; kind polymer; }
    { name phthalicAnhydride; label "phthalic anhydride"; formula C8H4O3; cas 85-44-9; }
    { name formaldehyde; label "formaldehyde"; formula CH2O; cas 50-00-0; }
    { name dimethylEther; label "dimethyl ether (DME)"; component dimethylEther; }
    { name aceticAnhydride; label "acetic anhydride"; component aceticAnhydride; }
    { name methylAcetate; label "methyl acetate"; component methylAcetate; }
    { name urea; label "urea"; formula CH4N2O; cas 57-13-6; }
    { name NO; label "nitric oxide"; component NO; }
    { name ammoniumNitrate; label "ammonium nitrate"; formula NH4NO3; cas 6484-52-2; }
    { name DAP; label "diammonium phosphate (DAP)"; formula "(NH4)2HPO4"; cas 7783-28-0; }
    { name SO2; label "sulfur dioxide"; component SO2; }
    { name SO3; label "sulfur trioxide"; component SO3; }
    //  the forced co-product of wet-process phosphoric acid, about 5 t per t P2O5
    { name gypsum; label "phosphogypsum (CaSO4.2H2O)"; component gypsum; }
    //  the fluorine of the apatite leaves the wet process as HF/fluorosilicates; recovered or scrubbed
    { name HF; label "hydrogen fluoride"; formula HF; cas 7664-39-3; }
    { name HCl; label "hydrogen chloride"; component HCl; }
    //  the forced co-product of biodiesel transesterification, about 0.1 kg per kg biodiesel
    { name glycerol; label "glycerol (biodiesel co-product)"; component glycerol; }
    //  stands for the ethylene oligomers (C4-C20 linear alpha-olefins); the C12 is the detergent-range representative
    { name 1Dodecene; label "1-dodecene (linear alpha-olefins, C4-C20)"; formula C12H24; cas 112-41-4; }
    { name LAB; label "linear alkylbenzene (as dodecylbenzene)"; formula C18H30; cas 123-01-3; }
    //  repeat unit of the methylene-urea condensate; with the melamine and phenolic resins, about 40 % of methanol's outlet
    { name ureaFormaldehydeResin; label "urea-formaldehyde resin"; formula C2H4N2O; cas 9011-05-6; kind polymer; }
    //  stands for the chloromethanes: CH3Cl for silicones, then CH2Cl2, CHCl3 and CCl4 by further chlorination
    { name methylChloride; label "methyl chloride (chloromethanes)"; component methylChloride; }
    //  the forced emission of the adipic acid nitric oxidation until abated
    { name N2O; label "nitrous oxide"; component N2O; }
    //  metallurgical/petroleum coke taken as carbon, the carbide-furnace reductant
    { name coke; label "coke (carbon)"; formula C; cas 65996-77-2; }
    { name CaCO3; label "limestone (calcium carbonate)"; component CaCO3; }
    { name CaO; label "lime (calcium oxide)"; component CaO; }
    { name CaC2; label "calcium carbide"; formula CaC2; cas 75-20-7; }
    { name acetylene; label "acetylene"; component acetylene; }
    { name fluorspar; label "fluorspar (calcium fluoride)"; formula CaF2; cas 7789-75-5; }
    { name CaSO4; label "anhydrite (calcium sulfate)"; component CaSO4; }
    { name melamine; label "melamine"; formula C3H6N6; cas 108-78-1; }
    { name monochlorobenzene; label "chlorobenzene"; component monochlorobenzene; }
    { name H2O2; label "hydrogen peroxide"; component H2O2; }
    { name methacrylicAcid; label "methacrylic acid"; component methacrylicAcid; }
    //  written as three butadiene units per styrene unit, close to the usual 75:25 by mass
    { name SBR; label "styrene-butadiene rubber (3:1 repeat)"; formula C20H26; cas 9003-55-8; kind polymer; }
    //  stands for the paraffinic FT product; the C8 is the representative member
    { name nOctane; label "Fischer-Tropsch liquids (as n-octane)"; component nOctane; }
    { name phenolicResin; label "phenol-formaldehyde resin (novolac)"; formula C7H6O; cas 9003-35-4; kind polymer; }
    { name POM; label "polyoxymethylene (polyacetal)"; formula CH2O; cas 9002-81-7; kind polymer; }
    { name PAN; label "polyacrylonitrile (acrylic fibre)"; formula C3H3N; cas 25014-41-9; kind polymer; }
    { name butylAcrylate; label "n-butyl acrylate"; formula C7H12O2; cas 141-32-2; }
    //  stands for the phthalate plasticisers (DEHP, DOTP, DINP) of flexible PVC
    { name DEHP; label "di(2-ethylhexyl) phthalate (DEHP)"; formula C24H38O4; cas 117-81-7; }
    { name lacticAcid; label "lactic acid"; formula C3H6O3; cas 50-21-5; }
    { name PLA; label "poly(lactic acid)"; formula C3H4O2; cas 26100-51-6; kind polymer; }
    { name 14Butanediol; label "1,4-butanediol (BDO)"; component 14Butanediol; }
    //  a triglyceride taken as triolein so that transesterification balances
    { name triolein; label "vegetable oil (as triolein)"; formula C57H104O6; cas 122-32-7; }
    { name methylOleate; label "biodiesel (FAME, as methyl oleate)"; component methylOleate; }
    { name Na2CO3; label "soda ash (sodium carbonate)"; component Na2CO3; }
    { name glucose; label "glucose (from starch or cellulose)"; component glucose; }
);
`,En=`/*--------------------------------*- Choupo -*-----------------------*\\
  THE INORGANIC ROOTS: sulfuric acid (contact process) and the wet-process
  phosphoric acid it is mostly made for, chlorine WITH caustic from the brine
  cell, nitric acid (Ostwald) and the fertiliser salts that take the ammonia.
  Grammar: README.md beside this file.  Every edge is re-read, balanced and
  checked by bin/curate/check_chemistry_graph.py.
\\*---------------------------------------------------------------------------*/


recordType    productionRoutes;
schemaVersion 1;
graph         treeOfChemistry;

routes
(
    {
        name     sulfurCombustion;
        kind     reaction;
        target   SO2;
        family   oxidation;
        era      incumbent;
        description "Molten sulfur burned in dry air at 1000 C: the first step of the contact process (SO2 also comes from smelter gas and spent-acid regeneration).";
        stoichiometry
        (
            { component sulfur;                nu -1; }
            { component O2;                    nu -1; }
            { component SO2;                   nu 1; }
        );
        yield
        {
            basis   sulfur;
            band    ( 0.99 0.999 );
            origin  assumed;
            reason  "sulfur burner; the curator's band";
        }
        provenance
        (
            { source ullmanns; locus "'Sulfuric Acid and Sulfur Trioxide'"; }
            { source moulijn2013; locus "sulfuric acid"; }
        );
    }

    {
        name     SO2ContactOxidation;
        kind     reaction;
        target   SO3;
        family   oxidation;
        era      incumbent;
        description "The contact process: SO2 over vanadium pentoxide/potassium pyrosulfate in four adiabatic beds with interstage cooling, equilibrium-limited and exothermic -- the same van Heerden lesson as the ammonia converter.";
        stoichiometry
        (
            { component SO2;                   nu -1; }
            { component O2;                    nu -0.5; }
            { component SO3;                   nu 1; }
        );
        yield
        {
            basis   sulfur;
            band    ( 0.995 0.999 );
            origin  assumed;
            reason  "double contact / double absorption, 99.7-99.9 % conversion over V2O5-K2SO4; the curator's band";
        }
        provenance
        (
            { source ullmanns; locus "'Sulfuric Acid and Sulfur Trioxide'"; }
            { source moulijn2013; locus "sulfuric acid: the contact process"; }
        );
    }

    {
        name     SO3Absorption;
        kind     reaction;
        target   H2SO4;
        family   acidBase;
        era      incumbent;
        description "SO3 absorbed in 98-99 % sulfuric acid (never in water, which gives a mist); diluted to the grade sold.  Sulfuric acid is the largest-volume chemical and a REAGENT in most of its uses: it leaves as sulfate, not as acid.";
        stoichiometry
        (
            { component SO3;                   nu -1; }
            { component water;                 nu -1; }
            { component H2SO4;                 nu 1; }
        );
        yield
        {
            basis   sulfur;
            band    ( 0.999 1 );
            origin  assumed;
            reason  "absorption in 98 % acid, quantitative; the curator's band";
        }
        provenance
        (
            { source ullmanns; locus "'Sulfuric Acid and Sulfur Trioxide'"; }
        );
    }

    {
        name     wetProcessPhosphoricAcid;
        kind     reaction;
        target   H3PO4;
        family   acidBase;
        era      incumbent;
        description "The wet process: sulfuric acid attacks fluorapatite and the calcium leaves as phosphogypsum -- 5 t per t of P2O5, the largest forced co-product in this graph, stacked by the hundreds of millions of tonnes.  Most sulfuric acid in the world is made for this reaction.";
        stoichiometry
        (
            { component phosphateRock;         nu -1; }
            { component H2SO4;                 nu -5; }
            { component water;                 nu -10; }
            { component H3PO4;                 nu 3; }
            { component gypsum;                nu 5; }
            { component HF;                    nu 1; }
        );
        yield
        {
            basis   phosphorus;
            band    ( 0.94 0.97 );
            origin  assumed;
            reason  "dihydrate process P2O5 recovery; the curator's band";
        }
        provenance
        (
            { source ullmanns; locus "'Phosphoric Acid and Phosphates'"; }
            { source kirkOthmer; locus "'Phosphoric Acids and Phosphates'"; }
        );
    }

    {
        name     DAPneutralisation;
        kind     reaction;
        target   DAP;
        family   acidBase;
        era      incumbent;
        description "Diammonium phosphate: phosphoric acid neutralised with ammonia and granulated -- the ammonia and phosphoric acid roots meet in the largest phosphate fertiliser.";
        stoichiometry
        (
            { component H3PO4;                 nu -1; }
            { component NH3;                   nu -2; }
            { component DAP;                   nu 1; }
        );
        yield
        {
            basis   phosphorus;
            band    ( 0.98 0.995 );
            origin  assumed;
            reason  "pipe-reactor/granulator ammoniation; the curator's band";
        }
        provenance
        (
            { source ullmanns; locus "'Phosphate Fertilizers'"; }
        );
    }

    {
        name     chlorAlkaliElectrolysis;
        kind     reaction;
        target   Cl2;
        family   electrolysis;
        era      incumbent;
        description "Brine electrolysis in membrane cells: 1.13 t NaOH and 0.028 t H2 per t Cl2, by stoichiometry, whether the caustic is wanted or not -- the inorganic archetype of forced co-production, which is why the price of one swings against the other (the 'ECU', electrochemical unit).";
        stoichiometry
        (
            { component NaCl;                  nu -2; }
            { component water;                 nu -2; }
            { component Cl2;                   nu 1; }
            { component NaOH;                  nu 2; }
            { component H2;                    nu 1; }
        );
        yield
        {
            basis   chlorine;
            band    ( 0.95 0.98 );
            origin  assumed;
            reason  "membrane cell current efficiency 95-97 %; the curator's band";
        }
        energy
        (
            { route "membrane cell, electricity per t Cl2"; band ( 2.5 3 ); unit "MWh per t Cl2"; origin assumed; reason "the band quoted for membrane cells in the handbook named in provenance (about 2.1 MWh per t for the cell alone, more with caustic evaporation); not read back"; }
        );
        provenance
        (
            { source obrien2005; locus "the membrane, diaphragm and mercury cell processes"; }
            { source ullmanns; locus "'Chlorine'"; }
            { source iea2018; locus "ch. 3: electricity use of the chemical sector"; }
        );
    }

    {
        name     HClSynthesis;
        kind     reaction;
        target   HCl;
        family   synthesis;
        era      incumbent;
        description "Direct synthesis from the cell's own H2 and Cl2 -- but most HCl is the BY-PRODUCT of chlorinations (isocyanates, allyl chloride, EDC cracking), and the chlorine industry's problem is placing it.";
        stoichiometry
        (
            { component H2;                    nu -1; }
            { component Cl2;                   nu -1; }
            { component HCl;                   nu 2; }
        );
        yield
        {
            basis   chlorine;
            band    ( 0.99 0.999 );
            origin  assumed;
            reason  "burner synthesis; the curator's band";
        }
        provenance
        (
            { source ullmanns; locus "'Hydrochloric Acid'"; }
        );
    }

    {
        name     ammoniaOxidationNitricAcid;
        kind     reaction;
        target   HNO3;
        family   oxidation;
        era      incumbent;
        description "The Ostwald process as its overall equation: ammonia burned to NO on Pt/Rh gauze, oxidised to NO2 on cooling, absorbed in water to 55-65 % acid with the NO recycled up the column.  Nearly all nitric acid goes to fertiliser (ammonium nitrate) and the nitrations.";
        stoichiometry
        (
            { component NH3;                   nu -1; }
            { component O2;                    nu -2; }
            { component HNO3;                  nu 1; }
            { component water;                 nu 1; }
        );
        yield
        {
            basis   nitrogen;
            band    ( 0.94 0.97 );
            origin  assumed;
            reason  "Ostwald overall: gauze selectivity 95-97 % times absorption 98-99 %; the curator's band";
        }
        cases    ( "tutorials/steady/reactors/equil03_ammonia_oxidation_declared_pathways" );
        provenance
        (
            { source ullmanns; locus "'Nitric Acid, Nitrous Acid, and Nitrogen Oxides'"; }
            { source moulijn2013; locus "nitric acid"; }
        );
    }

    {
        name     ammoniumNitrateNeutralisation;
        kind     reaction;
        target   ammoniumNitrate;
        family   acidBase;
        era      incumbent;
        description "Ammonium nitrate: the fertiliser (and explosive) that takes most of the nitric acid.";
        stoichiometry
        (
            { component NH3;                   nu -1; }
            { component HNO3;                  nu -1; }
            { component ammoniumNitrate;       nu 1; }
        );
        yield
        {
            basis   nitrogen;
            band    ( 0.99 0.999 );
            origin  assumed;
            reason  "neutralisation; the curator's band";
        }
        provenance
        (
            { source ullmanns; locus "'Ammonium Compounds'"; }
        );
    }

    {
        name     ammoniumSulfateNeutralisation;
        kind     reaction;
        target   ammoniumSulfate;
        family   acidBase;
        era      incumbent;
        description "Direct neutralisation -- a minor source beside the caprolactam and coke-oven by-product.";
        stoichiometry
        (
            { component NH3;                   nu -2; }
            { component H2SO4;                 nu -1; }
            { component ammoniumSulfate;       nu 1; }
        );
        yield
        {
            basis   nitrogen;
            band    ( 0.99 0.999 );
            origin  assumed;
            reason  "neutralisation; most ammonium sulfate is in fact the caprolactam co-product; the curator's band";
        }
        provenance
        (
            { source ullmanns; locus "'Ammonium Compounds'"; }
        );
    }

    {
        name     limestoneCalcination;
        kind     reaction;
        target   CaO;
        family   pyrolysis;
        era      incumbent;
        description "Limestone calcined to quicklime at 900-1100 C, with its CO2 -- the lime of the carbide furnace, the chlorohydrin routes and the Solvay process.";
        stoichiometry
        (
            { component CaCO3;                 nu -1; }
            { component CaO;                   nu 1; }
            { component CO2;                   nu 1; }
        );
        yield
        {
            basis   mass;
            band    ( 0.55 0.56 );
            origin  assumed;
            reason  "56 % of the limestone mass is lime by stoichiometry; the curator's band";
        }
        provenance
        (
            { source ullmanns; locus "'Lime and Limestone'"; }
        );
    }

    {
        name     limeHydration;
        kind     reaction;
        target   CaOH2;
        family   hydration;
        era      incumbent;
        description "Slaking of lime to the milk of lime the chlorohydrin dehydrochlorinations consume.";
        stoichiometry
        (
            { component CaO;                   nu -1; }
            { component water;                 nu -1; }
            { component CaOH2;                 nu 1; }
        );
        yield
        {
            basis   mass;
            band    ( 1.3 1.32 );
            origin  assumed;
            reason  "stoichiometric slaking; the curator's band";
        }
        provenance
        (
            { source ullmanns; locus "'Lime and Limestone'"; }
        );
    }

    {
        name     fluorsparToHF;
        kind     reaction;
        target   HF;
        family   acidBase;
        era      incumbent;
        description "Fluorspar + sulfuric acid to hydrogen fluoride -- the root of every fluorocarbon, fluoropolymer and AlF3, with anhydrite forced: sulfuric acid again consumed as a reagent.";
        stoichiometry
        (
            { component fluorspar;             nu -1; }
            { component H2SO4;                 nu -1; }
            { component HF;                    nu 2; }
            { component CaSO4;                 nu 1; }
        );
        yield
        {
            basis   mass;
            band    ( 0.48 0.5 );
            origin  assumed;
            reason  "0.5 kg HF per kg CaF2 by stoichiometry, 95-98 % recovered; the curator's band";
        }
        provenance
        (
            { source ullmanns; locus "'Fluorine Compounds, Inorganic'"; }
        );
    }

    {
        name     anthraquinoneH2O2;
        kind     reaction;
        target   H2O2;
        family   hydrogenation;
        era      incumbent;
        description "The anthraquinone process: an alkylanthraquinone is hydrogenated and re-oxidised by air, the net result being H2 + O2 to H2O2 -- the oxidant of HPPO and of pulp bleaching.";
        stoichiometry
        (
            { component H2;                    nu -1; }
            { component O2;                    nu -1; }
            { component H2O2;                  nu 1; }
        );
        yield
        {
            basis   hydrogen;
            band    ( 0.9 0.95 );
            origin  assumed;
            reason  "the anthraquinone cycle (Pd hydrogenation, air oxidation), written as the net reaction; the curator's band";
        }
        provenance
        (
            { source ullmanns; locus "'Hydrogen Peroxide'"; }
        );
    }

    {
        name     solvayProcess;
        kind     reaction;
        target   Na2CO3;
        family   acidBase;
        era      incumbent;
        description "The Solvay (ammonia-soda) process as its overall equation: brine + limestone to soda ash with calcium chloride forced -- the ammonia is a recycled carrier and does not appear.  Soda ash for glass, the other chlor-alkali product.";
        stoichiometry
        (
            { component NaCl;                  nu -2; }
            { component CaCO3;                 nu -1; }
            { component Na2CO3;                nu 1; }
            { component CaCl2;                 nu 1; }
        );
        yield
        {
            basis   mass;
            band    ( 0.85 0.92 );
            origin  assumed;
            reason  "overall Na recovery of the ammonia-soda process; the curator's band";
        }
        provenance
        (
            { source ullmanns; locus "'Sodium Carbonate'"; }
            { source moulijn2013; locus "the Solvay process as the classic inorganic flowsheet"; }
        );
    }
);
`,Mn=`/*--------------------------------*- Choupo -*-----------------------*\\
  THE OLEFIN ROOTS: ethylene, propylene and the C4s and what grows from them --
  the polymers, EO/MEG, the VCM chain, styrene, the Hock route and its forced
  acetone, the oxo chain, acrylonitrile, PO, MMA and the nylon-6,6 diamine.
  Grammar: README.md beside this file.  Every edge is re-read, balanced and
  checked by bin/curate/check_chemistry_graph.py.
\\*---------------------------------------------------------------------------*/


recordType    productionRoutes;
schemaVersion 1;
graph         treeOfChemistry;

routes
(
    {
        name     ethylenePolymerisation;
        kind     reaction;
        target   polyethylene;
        family   polymerisation;
        era      incumbent;
        description "The largest single chemical product: HDPE and LLDPE by coordination catalysis, LDPE by high-pressure radical polymerisation.  Written per repeat unit.";
        stoichiometry
        (
            { component ethylene;              nu -1; }
            { component polyethylene;          nu 1; }
        );
        yield
        {
            basis   carbon;
            band    ( 0.97 0.995 );
            origin  assumed;
            reason  "Ziegler-Natta/metallocene slurry, gas-phase and high-pressure radical processes convert nearly all the monomer; the curator's band";
        }
        provenance
        (
            { source iea2018; locus "p. 24: the largest derivative of each light olefin is its simplest polymer"; }
            { source weissermelArpe2003; locus "ch. 3"; }
            { source ullmanns; locus "'Polyethylene'"; }
        );
    }

    {
        name     ethyleneOxidation;
        kind     reaction;
        target   ethyleneOxide;
        family   oxidation;
        era      incumbent;
        description "Direct oxidation over supported silver, 200-300 C, 10-30 bar: the one large-scale epoxidation with air/oxygen.  The 10-20 % of ethylene burned to CO2 is the route's defining loss.";
        stoichiometry
        (
            { component ethylene;              nu -1; }
            { component O2;                    nu -0.5; }
            { component ethyleneOxide;         nu 1; }
        );
        yield
        {
            basis   carbon;
            band    ( 0.8 0.9 );
            origin  assumed;
            reason  "silver-catalysed selectivity 80-90 %, the rest burned to CO2; the curator's band";
        }
        provenance
        (
            { source weissermelArpe2003; locus "ch. 7, 'Ethylene oxide'"; }
            { source ullmanns; locus "'Ethylene Oxide'"; }
        );
    }

    {
        name     ethyleneOxideHydration;
        kind     reaction;
        target   ethyleneGlycol;
        family   hydration;
        era      incumbent;
        description "Non-catalytic hydration with a large water excess (to hold back the higher glycols): MEG for PET and antifreeze.";
        stoichiometry
        (
            { component ethyleneOxide;         nu -1; }
            { component water;                 nu -1; }
            { component ethyleneGlycol;        nu 1; }
        );
        yield
        {
            basis   carbon;
            band    ( 0.88 0.92 );
            origin  assumed;
            reason  "thermal hydration with excess water gives ~90 % MEG, the rest di- and triethylene glycol; the curator's band";
        }
        provenance
        (
            { source weissermelArpe2003; locus "ch. 7, 'Ethylene glycol'"; }
            { source ullmanns; locus "'Ethylene Glycol'"; }
        );
    }

    {
        name     ethyleneOxideAmmonia;
        kind     reaction;
        target   monoethanolamine;
        family   condensation;
        era      incumbent;
        description "EO + aqueous ammonia gives the ethanolamines -- the CO2-capture solvents and surfactant precursors.";
        stoichiometry
        (
            { component ethyleneOxide;         nu -1; }
            { component NH3;                   nu -1; }
            { component monoethanolamine;      nu 1; }
        );
        yield
        {
            basis   carbon;
            band    ( 0.95 0.99 );
            origin  assumed;
            reason  "the EO is consumed quantitatively; the mono/di/tri split is set by the NH3 excess; the curator's band";
        }
        provenance
        (
            { source ullmanns; locus "'Ethanolamines and Propanolamines'"; }
        );
    }

    {
        name     ethyleneDirectChlorination;
        kind     reaction;
        target   Dichloroethane;
        family   chlorination;
        era      incumbent;
        description "Direct chlorination of ethylene in liquid EDC over FeCl3: half of a balanced VCM plant's EDC.";
        stoichiometry
        (
            { component ethylene;              nu -1; }
            { component Cl2;                   nu -1; }
            { component Dichloroethane;        nu 1; }
        );
        yield
        {
            basis   carbon;
            band    ( 0.97 0.99 );
            origin  assumed;
            reason  "FeCl3-catalysed liquid-phase addition, selectivity > 99 %; the curator's band";
        }
        provenance
        (
            { source weissermelArpe2003; locus "ch. 9, 'Vinyl chloride'"; }
            { source ullmanns; locus "'Chlorinated Hydrocarbons'"; }
        );
    }

    {
        name     ethyleneOxychlorination;
        kind     reaction;
        target   Dichloroethane;
        family   chlorination;
        era      incumbent;
        description "Oxychlorination over CuCl2/alumina, 220-250 C: the other half of EDC, made from the HCl that the EDC cracker returns -- which is what makes the VCM plant 'balanced' on chlorine.";
        stoichiometry
        (
            { component ethylene;              nu -1; }
            { component HCl;                   nu -2; }
            { component O2;                    nu -0.5; }
            { component Dichloroethane;        nu 1; }
            { component water;                 nu 1; }
        );
        yield
        {
            basis   carbon;
            band    ( 0.93 0.97 );
            origin  assumed;
            reason  "CuCl2 fluid-bed oxychlorination; the curator's band";
        }
        cycle    "the balanced VCM plant: the HCl that EDC cracking releases is consumed here, so no HCl leaves the plant and the chlorine is used twice";
        provenance
        (
            { source weissermelArpe2003; locus "ch. 9, 'Vinyl chloride' -- the balanced process"; }
            { source ullmanns; locus "'Chlorinated Hydrocarbons'"; }
        );
    }

    {
        name     EDCcracking;
        kind     reaction;
        target   vinylChloride;
        family   dehydrogenation;
        era      incumbent;
        description "Thermal dehydrochlorination of EDC, 500 C, 15-30 bar: half the chlorine leaves as HCl, which the oxychlorination step takes back.";
        stoichiometry
        (
            { component Dichloroethane;        nu -1; }
            { component vinylChloride;         nu 1; }
            { component HCl;                   nu 1; }
        );
        yield
        {
            basis   carbon;
            band    ( 0.95 0.99 );
            origin  assumed;
            reason  "thermal cracking at 500 C, 50-60 % per pass, > 98 % overall with EDC recycle; the curator's band";
        }
        provenance
        (
            { source weissermelArpe2003; locus "ch. 9, 'Vinyl chloride'"; }
            { source ullmanns; locus "'Chlorinated Hydrocarbons'"; }
        );
    }

    {
        name     vinylChloridePolymerisation;
        kind     reaction;
        target   PVC;
        family   polymerisation;
        era      incumbent;
        description "Suspension (mostly) or emulsion radical polymerisation of VCM.  Per repeat unit: one PVC unit carries one ethylene and one chlorine -- the DEPTH view's answer to 'kg ethylene and chlorine per kg PVC'.";
        stoichiometry
        (
            { component vinylChloride;         nu -1; }
            { component PVC;                   nu 1; }
        );
        yield
        {
            basis   carbon;
            band    ( 0.85 0.95 );
            origin  assumed;
            reason  "suspension polymerisation to 85-95 % conversion, the monomer recovered; the curator's band";
        }
        provenance
        (
            { source ullmanns; locus "'Poly(Vinyl Chloride)'"; }
            { source iea2018; locus "ch. 4, Figure 4.2, key thermoplastics"; }
        );
    }

    {
        name     benzeneEthylation;
        kind     reaction;
        target   ethylBenzene;
        family   alkylation;
        era      incumbent;
        description "Benzene + ethylene over an acid zeolite (once AlCl3): essentially all ethylbenzene goes to styrene -- the point where the ethylene and benzene trees join.";
        stoichiometry
        (
            { component benzene;               nu -1; }
            { component ethylene;              nu -1; }
            { component ethylBenzene;          nu 1; }
        );
        yield
        {
            basis   carbon;
            band    ( 0.97 0.99 );
            origin  assumed;
            reason  "zeolite (ZSM-5/beta) alkylation with transalkylation of the polyethylbenzenes; the curator's band";
        }
        provenance
        (
            { source weissermelArpe2003; locus "ch. 13, 'Ethylbenzene'"; }
            { source ullmanns; locus "'Ethylbenzene'"; }
        );
    }

    {
        name     ethylBenzeneDehydrogenation;
        kind     reaction;
        target   styrene;
        family   dehydrogenation;
        era      incumbent;
        description "Adiabatic or isothermal dehydrogenation over potassium-promoted iron oxide with a large steam dilution: endothermic, equilibrium-limited, the monomer of polystyrene, ABS and SBR.";
        stoichiometry
        (
            { component ethylBenzene;          nu -1; }
            { component styrene;               nu 1; }
            { component H2;                    nu 1; }
        );
        yield
        {
            basis   carbon;
            band    ( 0.9 0.95 );
            origin  assumed;
            reason  "Fe-K oxide, 600-650 C, steam-diluted, 60-70 % per pass, 90-95 % selectivity; the curator's band";
        }
        provenance
        (
            { source weissermelArpe2003; locus "ch. 13, 'Styrene'"; }
            { source ullmanns; locus "'Styrene'"; }
        );
    }

    {
        name     styrenePolymerisation;
        kind     reaction;
        target   polystyrene;
        family   polymerisation;
        era      incumbent;
        description "Thermal/radical bulk polymerisation of styrene.  Written per repeat unit.";
        stoichiometry
        (
            { component styrene;               nu -1; }
            { component polystyrene;           nu 1; }
        );
        yield
        {
            basis   carbon;
            band    ( 0.97 0.995 );
            origin  assumed;
            reason  "bulk/suspension radical polymerisation; the curator's band";
        }
        provenance
        (
            { source ullmanns; locus "'Polystyrene and Styrene Copolymers'"; }
        );
    }

    {
        name     ethyleneWacker;
        kind     reaction;
        target   acetaldehyde;
        family   oxidation;
        era      incumbent;
        description "The Wacker process (PdCl2/CuCl2 in aqueous HCl): the historical acetic-acid route, now a minor acetaldehyde source since methanol carbonylation took acetic acid to the syngas root.";
        stoichiometry
        (
            { component ethylene;              nu -1; }
            { component O2;                    nu -0.5; }
            { component acetaldehyde;          nu 1; }
        );
        yield
        {
            basis   carbon;
            band    ( 0.93 0.96 );
            origin  assumed;
            reason  "PdCl2/CuCl2 Wacker oxidation; the curator's band";
        }
        provenance
        (
            { source weissermelArpe2003; locus "ch. 7, 'Acetaldehyde' -- the Wacker-Hoechst process"; }
            { source ullmanns; locus "'Acetaldehyde'"; }
        );
    }

    {
        name     acetaldehydeOxidation;
        kind     reaction;
        target   aceticAcid;
        family   oxidation;
        era      incumbent;
        description "Liquid-phase air oxidation of acetaldehyde: the ethylene route to acetic acid, largely displaced by carbonylation.";
        stoichiometry
        (
            { component acetaldehyde;          nu -1; }
            { component O2;                    nu -0.5; }
            { component aceticAcid;            nu 1; }
        );
        yield
        {
            basis   carbon;
            band    ( 0.92 0.96 );
            origin  assumed;
            reason  "Mn/Co acetate catalysed liquid-phase oxidation; the curator's band";
        }
        provenance
        (
            { source weissermelArpe2003; locus "ch. 7, 'Acetic acid' -- acetaldehyde oxidation"; }
        );
    }

    {
        name     vinylAcetateSynthesis;
        kind     reaction;
        target   vinylAcetate;
        family   oxidation;
        era      incumbent;
        description "Gas-phase acetoxylation over Pd/Au: VAM for PVA, PVAc emulsions and EVA -- the ethylene and syngas roots meeting again.";
        stoichiometry
        (
            { component ethylene;              nu -1; }
            { component aceticAcid;            nu -1; }
            { component O2;                    nu -0.5; }
            { component vinylAcetate;          nu 1; }
            { component water;                 nu 1; }
        );
        yield
        {
            basis   carbon;
            band    ( 0.92 0.95 );
            origin  assumed;
            reason  "Pd/Au on silica gas-phase acetoxylation, selectivity 92-95 % on ethylene; the curator's band";
        }
        provenance
        (
            { source weissermelArpe2003; locus "ch. 9, 'Vinyl acetate'"; }
            { source ullmanns; locus "'Vinyl Esters'"; }
        );
    }

    {
        name     ethyleneHydration;
        kind     reaction;
        target   ethanol;
        family   hydration;
        era      incumbent;
        description "Synthetic ethanol by direct vapour-phase hydration over phosphoric acid: small beside fermentation ethanol, and the reverse of the bio-ethylene route.";
        stoichiometry
        (
            { component ethylene;              nu -1; }
            { component water;                 nu -1; }
            { component ethanol;               nu 1; }
        );
        yield
        {
            basis   carbon;
            band    ( 0.95 0.98 );
            origin  assumed;
            reason  "H3PO4 on silica, 300 C, 70 bar, 4-5 % per pass, > 95 % overall; the curator's band";
        }
        cycle    "ethylene and ethanol interconvert: hydration (synthetic ethanol) and dehydration (bio-ethylene) are both practised, and which way the arrow points is a feedstock decision";
        provenance
        (
            { source weissermelArpe2003; locus "ch. 8, 'Ethanol'"; }
            { source ullmanns; locus "'Ethanol'"; }
        );
    }

    {
        name     ethylAcetateEsterification;
        kind     reaction;
        target   ethylAcetate;
        family   esterification;
        era      incumbent;
        description "Fischer esterification of acetic acid with ethanol: the solvent ester and the Choupo esterification teaching case.";
        stoichiometry
        (
            { component aceticAcid;            nu -1; }
            { component ethanol;               nu -1; }
            { component ethylAcetate;          nu 1; }
            { component water;                 nu 1; }
        );
        yield
        {
            basis   carbon;
            band    ( 0.95 0.99 );
            origin  assumed;
            reason  "equilibrium esterification with water removal; the curator's band";
        }
        cases    ( "tutorials/plant/esterification2sector" "tutorials/steady/economics/economics01_esterification_dcf" "tutorials/ctrl/ctrl11_esterification_jacket" "tutorials/steady/optimisation/optim05_reactor_npv" );
        provenance
        (
            { source ullmanns; locus "'Acetic Acid' -- esters"; }
        );
    }

    {
        name     ethyleneOligomerisation;
        kind     reaction;
        target   1Dodecene;
        family   polymerisation;
        era      incumbent;
        description "Ethylene oligomerisation (Ni/phosphine SHOP, or Ziegler growth on aluminium) to the linear alpha-olefins: LLDPE comonomers (C4-C8), detergent-range (C10-C14) and lubricant-range olefins.  Written on 1-dodecene as the representative member.";
        stoichiometry
        (
            { component ethylene;              nu -6; }
            { component 1Dodecene;             nu 1; }
        );
        yield
        {
            basis   carbon;
            band    ( 0.9 0.97 );
            origin  assumed;
            reason  "Ni/phosphine (SHOP) or Ziegler growth oligomerisation to the C4-C20 alpha-olefins, written on the C12 as representative; the curator's band";
        }
        provenance
        (
            { source weissermelArpe2003; locus "ch. 3, 'Olefins' -- oligomerisation of ethylene"; }
            { source ullmanns; locus "'Olefins'"; }
        );
    }

    {
        name     propylenePolymerisation;
        kind     reaction;
        target   polypropylene;
        family   polymerisation;
        era      incumbent;
        description "Isotactic polypropylene over MgCl2-supported Ziegler-Natta catalysts: propylene's largest derivative by far.  Written per repeat unit.";
        stoichiometry
        (
            { component propylene;             nu -1; }
            { component polypropylene;         nu 1; }
        );
        yield
        {
            basis   carbon;
            band    ( 0.97 0.995 );
            origin  assumed;
            reason  "Ziegler-Natta bulk/gas-phase polymerisation; the curator's band";
        }
        provenance
        (
            { source iea2018; locus "p. 24"; }
            { source ullmanns; locus "'Polypropylene'"; }
        );
    }

    {
        name     propyleneAmmoxidation;
        kind     reaction;
        target   acrylonitrile;
        family   ammoxidation;
        era      incumbent;
        description "The SOHIO ammoxidation, 400-500 C, fluid bed: propylene, ammonia and air in one pass to acrylonitrile (fibres, ABS, adiponitrile), with HCN as a forced by-product.";
        stoichiometry
        (
            { component propylene;             nu -1; }
            { component NH3;                   nu -1; }
            { component O2;                    nu -1.5; }
            { component acrylonitrile;         nu 1; }
            { component water;                 nu 3; }
        );
        yield
        {
            basis   carbon;
            band    ( 0.8 0.85 );
            origin  assumed;
            reason  "SOHIO fluid-bed over Bi-Mo/Fe-Sb oxides, 80-85 % on propylene with HCN and acetonitrile as by-products; the curator's band";
        }
        provenance
        (
            { source weissermelArpe2003; locus "ch. 11, 'Acrylonitrile' -- the SOHIO process"; }
            { source ullmanns; locus "'Acrylonitrile'"; }
        );
    }

    {
        name     propyleneOxideChlorohydrin;
        kind     reaction;
        target   propyleneChlorohydrin;
        family   chlorination;
        era      incumbent;
        description "Chlorohydrination of propylene in water: the old PO route, still a large one, that converts its chlorine into calcium chloride waste.";
        stoichiometry
        (
            { component propylene;             nu -1; }
            { component Cl2;                   nu -1; }
            { component water;                 nu -1; }
            { component propyleneChlorohydrin; nu 1; }
            { component HCl;                   nu 1; }
        );
        yield
        {
            basis   carbon;
            band    ( 0.9 0.95 );
            origin  assumed;
            reason  "hypochlorous acid addition in dilute aqueous solution; the curator's band";
        }
        provenance
        (
            { source weissermelArpe2003; locus "ch. 11, 'Propylene oxide' -- the chlorohydrin process"; }
            { source ullmanns; locus "'Propylene Oxide'"; }
        );
    }

    {
        name     chlorohydrinDehydrochlorination;
        kind     reaction;
        target   12PropyleneOxide;
        family   condensation;
        era      incumbent;
        description "Lime dehydrochlorination of the chlorohydrin: the PO is stripped out and about 2 t of CaCl2 brine per t PO is the forced co-product -- the reason the hydroperoxide and HPPO routes were developed.";
        stoichiometry
        (
            { component propyleneChlorohydrin; nu -2; }
            { component CaOH2;                 nu -1; }
            { component 12PropyleneOxide;      nu 2; }
            { component CaCl2;                 nu 1; }
            { component water;                 nu 2; }
        );
        yield
        {
            basis   carbon;
            band    ( 0.93 0.97 );
            origin  assumed;
            reason  "saponification with milk of lime; the curator's band";
        }
        provenance
        (
            { source weissermelArpe2003; locus "ch. 11, 'Propylene oxide'"; }
            { source ullmanns; locus "'Propylene Oxide'"; }
        );
    }

    {
        name     propyleneOxideHydroperoxide;
        kind     reaction;
        target   12PropyleneOxide;
        family   oxidation;
        era      incumbent;
        description "The PO/SM co-product route: ethylbenzene is autoxidised to its hydroperoxide, which epoxidises propylene over Mo; the alcohol is dehydrated to styrene.  Written as the overall reaction: 2.2-2.5 t styrene is FORCED per t PO.";
        stoichiometry
        (
            { component propylene;             nu -1; }
            { component ethylBenzene;          nu -1; }
            { component O2;                    nu -1; }
            { component 12PropyleneOxide;      nu 1; }
            { component styrene;               nu 1; }
            { component water;                 nu 1; }
        );
        yield
        {
            basis   carbon;
            band    ( 0.9 0.95 );
            origin  assumed;
            reason  "overall on propylene for the PO/SM (Halcon/ARCO) coproduct route; the curator's band";
        }
        provenance
        (
            { source weissermelArpe2003; locus "ch. 11, 'Propylene oxide' -- the oxirane/Halcon process"; }
            { source ullmanns; locus "'Propylene Oxide'"; }
        );
    }

    {
        name     propyleneOxideHydration;
        kind     reaction;
        target   propyleneGlycol;
        family   hydration;
        era      incumbent;
        description "Propylene glycol by hydration of PO: unsaturated polyester resins, food/pharma humectant, de-icer.";
        stoichiometry
        (
            { component 12PropyleneOxide;      nu -1; }
            { component water;                 nu -1; }
            { component propyleneGlycol;       nu 1; }
        );
        yield
        {
            basis   carbon;
            band    ( 0.85 0.9 );
            origin  assumed;
            reason  "thermal hydration in excess water, the rest di- and tripropylene glycol; the curator's band";
        }
        provenance
        (
            { source ullmanns; locus "'Propanediols'"; }
        );
    }

    {
        name     benzenePropylation;
        kind     reaction;
        target   cumene;
        family   alkylation;
        era      incumbent;
        description "Benzene + propylene over a zeolite (once solid phosphoric acid): almost all cumene is made for the Hock phenol process.";
        stoichiometry
        (
            { component benzene;               nu -1; }
            { component propylene;             nu -1; }
            { component cumene;                nu 1; }
        );
        yield
        {
            basis   carbon;
            band    ( 0.97 0.99 );
            origin  assumed;
            reason  "zeolite alkylation with transalkylation of diisopropylbenzene; the curator's band";
        }
        provenance
        (
            { source weissermelArpe2003; locus "ch. 13, 'Cumene'"; }
            { source ullmanns; locus "'Cumene'"; }
        );
    }

    {
        name     cumeneAutoxidation;
        kind     reaction;
        target   cumeneHydroperoxide;
        family   oxidation;
        era      incumbent;
        description "Liquid-phase air oxidation of cumene to the hydroperoxide, the intermediate of the Hock rearrangement.";
        stoichiometry
        (
            { component cumene;                nu -1; }
            { component O2;                    nu -1; }
            { component cumeneHydroperoxide;   nu 1; }
        );
        yield
        {
            basis   carbon;
            band    ( 0.93 0.97 );
            origin  assumed;
            reason  "air autoxidation at 90-120 C to 20-30 % per pass, selectivity > 93 %; the curator's band";
        }
        provenance
        (
            { source weissermelArpe2003; locus "ch. 13, 'Phenol' -- the Hock process"; }
            { source ullmanns; locus "'Phenol'"; }
        );
    }

    {
        name     hockCleavage;
        kind     reaction;
        target   phenol;
        family   rearrangement;
        era      incumbent;
        description "The Hock cleavage in dilute H2SO4: ONE mole of acetone per mole of phenol, 0.62 t per t -- the textbook example of FORCED CO-PRODUCTION, which is why phenol demand sets the acetone supply (and sent the MMA producers looking for other acetone-free routes).";
        stoichiometry
        (
            { component cumeneHydroperoxide;   nu -1; }
            { component phenol;                nu 1; }
            { component acetone;               nu 1; }
        );
        yield
        {
            basis   carbon;
            band    ( 0.95 0.98 );
            origin  assumed;
            reason  "acid-catalysed cleavage; the curator's band";
        }
        provenance
        (
            { source weissermelArpe2003; locus "ch. 13, 'Phenol' -- the Hock process"; }
            { source ullmanns; locus "'Phenol'"; }
        );
    }

    {
        name     phenolAcetoneCondensation;
        kind     reaction;
        target   bisphenolA;
        family   condensation;
        era      incumbent;
        description "Two phenols condense with one acetone over an acid ion-exchange resin: BPA for polycarbonate and epoxy resins consumes both Hock products in the right ratio.";
        stoichiometry
        (
            { component phenol;                nu -2; }
            { component acetone;               nu -1; }
            { component bisphenolA;            nu 1; }
            { component water;                 nu 1; }
        );
        yield
        {
            basis   carbon;
            band    ( 0.95 0.98 );
            origin  assumed;
            reason  "acid resin catalysed with a phenol excess; the curator's band";
        }
        provenance
        (
            { source ullmanns; locus "'Phenol Derivatives'"; }
            { source kirkOthmer; locus "'Bisphenol A'"; }
        );
    }

    {
        name     polycarbonatePhosgenation;
        kind     reaction;
        target   polycarbonate;
        family   polymerisation;
        era      incumbent;
        description "Interfacial polycondensation of the bisphenolate with phosgene: the chlorine enters as phosgene and leaves as salt -- chlorine used as a reagent, not kept in the product.  Written per repeat unit.";
        stoichiometry
        (
            { component bisphenolA;            nu -1; }
            { component phosgene;              nu -1; }
            { component NaOH;                  nu -2; }
            { component polycarbonate;         nu 1; }
            { component NaCl;                  nu 2; }
            { component water;                 nu 2; }
        );
        yield
        {
            basis   carbon;
            band    ( 0.95 0.99 );
            origin  assumed;
            reason  "interfacial polycondensation; the curator's band";
        }
        provenance
        (
            { source ullmanns; locus "'Polycarbonates'"; }
        );
    }

    {
        name     propyleneOxidationAcrolein;
        kind     reaction;
        target   acrolein;
        family   oxidation;
        era      incumbent;
        description "First stage of the two-stage acrylic acid process over bismuth molybdate, 320-370 C.";
        stoichiometry
        (
            { component propylene;             nu -1; }
            { component O2;                    nu -1; }
            { component acrolein;              nu 1; }
            { component water;                 nu 1; }
        );
        yield
        {
            basis   carbon;
            band    ( 0.85 0.92 );
            origin  assumed;
            reason  "Bi-Mo oxide first stage; the curator's band";
        }
        provenance
        (
            { source weissermelArpe2003; locus "ch. 11, 'Acrolein and acrylic acid'"; }
            { source ullmanns; locus "'Acrolein and Methacrolein'"; }
        );
    }

    {
        name     acroleinOxidation;
        kind     reaction;
        target   acrylicAcid;
        family   oxidation;
        era      incumbent;
        description "Second stage over Mo-V-W oxide: acrylic acid for superabsorbents and acrylate esters.";
        stoichiometry
        (
            { component acrolein;              nu -1; }
            { component O2;                    nu -0.5; }
            { component acrylicAcid;           nu 1; }
        );
        yield
        {
            basis   carbon;
            band    ( 0.93 0.97 );
            origin  assumed;
            reason  "Mo-V oxide second stage; the curator's band";
        }
        provenance
        (
            { source weissermelArpe2003; locus "ch. 11, 'Acrylic acid'"; }
            { source ullmanns; locus "'Acrylic Acid and Derivatives'"; }
        );
    }

    {
        name     propyleneHydration;
        kind     reaction;
        target   isopropanol;
        family   hydration;
        era      incumbent;
        description "Direct hydration of propylene (the indirect sulfuric-acid route is history): solvent, and the feed of the dehydrogenation route to acetone.";
        stoichiometry
        (
            { component propylene;             nu -1; }
            { component water;                 nu -1; }
            { component isopropanol;           nu 1; }
        );
        yield
        {
            basis   carbon;
            band    ( 0.95 0.98 );
            origin  assumed;
            reason  "direct hydration over acid resin or supported H3PO4; the curator's band";
        }
        provenance
        (
            { source weissermelArpe2003; locus "ch. 8, 'Isopropanol'"; }
            { source ullmanns; locus "'Propanols'"; }
        );
    }

    {
        name     isopropanolDehydrogenation;
        kind     reaction;
        target   acetone;
        family   dehydrogenation;
        era      incumbent;
        description "The on-purpose acetone route (Luyben's acetone process in the Choupo cases): isopropanol dehydrogenation, the alternative to taking acetone as the Hock co-product.";
        stoichiometry
        (
            { component isopropanol;           nu -1; }
            { component acetone;               nu 1; }
            { component H2;                    nu 1; }
        );
        yield
        {
            basis   carbon;
            band    ( 0.95 0.98 );
            origin  assumed;
            reason  "Cu/ZnO or Zn oxide, 350-400 C, 85-90 % per pass; the curator's band";
        }
        cases    ( "tutorials/steady/reactors/acetone02_luyben_reactor" "tutorials/steady/flowsheets/acetone03_luyben_reaction_section" "tutorials/steady/absorption/acetone05_luyben_absorber" "tutorials/steady/distillation/acetone06_luyben_column_C1" "tutorials/steady/distillation/acetone07_luyben_column_C2" "tutorials/plant/acetonePlant" );
        provenance
        (
            { source weissermelArpe2003; locus "ch. 11, 'Acetone'"; }
            { source ullmanns; locus "'Acetone'"; }
        );
    }

    {
        name     propyleneHydroformylation;
        kind     reaction;
        target   butanal;
        family   hydroformylation;
        era      incumbent;
        description "The oxo reaction: propylene + syngas over Rh (once Co), 100 C, 10-20 bar, to n-butanal (and some isobutanal) -- the propylene and syngas roots meet.";
        stoichiometry
        (
            { component propylene;             nu -1; }
            { component CO;                    nu -1; }
            { component H2;                    nu -1; }
            { component butanal;               nu 1; }
        );
        yield
        {
            basis   carbon;
            band    ( 0.93 0.97 );
            origin  assumed;
            reason  "Rh/TPPTS low-pressure oxo, n/iso 10-20 : 1; the curator's band";
        }
        provenance
        (
            { source weissermelArpe2003; locus "ch. 6, 'Syntheses involving carbon monoxide' -- hydroformylation"; }
            { source ullmanns; locus "'Aldehydes, Aliphatic'"; }
        );
    }

    {
        name     butanalHydrogenation;
        kind     reaction;
        target   nButanol;
        family   hydrogenation;
        era      incumbent;
        description "n-Butanol by hydrogenation of n-butanal: solvent and acrylate/plasticiser alcohol.";
        stoichiometry
        (
            { component butanal;               nu -1; }
            { component H2;                    nu -1; }
            { component nButanol;              nu 1; }
        );
        yield
        {
            basis   carbon;
            band    ( 0.97 0.99 );
            origin  assumed;
            reason  "Ni or Cu hydrogenation; the curator's band";
        }
        provenance
        (
            { source weissermelArpe2003; locus "ch. 8, 'Butanols'"; }
            { source ullmanns; locus "'Butanols'"; }
        );
    }

    {
        name     butanalAldol2EH;
        kind     reaction;
        target   2Ethylhexanol;
        family   condensation;
        era      incumbent;
        description "Aldol condensation of two butanals and hydrogenation: 2-EH, the plasticiser alcohol (DEHP, DOTP) -- the largest oxo product.";
        stoichiometry
        (
            { component butanal;               nu -2; }
            { component H2;                    nu -2; }
            { component 2Ethylhexanol;         nu 1; }
            { component water;                 nu 1; }
        );
        yield
        {
            basis   carbon;
            band    ( 0.92 0.96 );
            origin  assumed;
            reason  "aldol condensation (NaOH) then hydrogenation of 2-ethylhexenal; the curator's band";
        }
        provenance
        (
            { source weissermelArpe2003; locus "ch. 6, '2-Ethylhexanol'"; }
            { source ullmanns; locus "'2-Ethylhexanol'"; }
        );
    }

    {
        name     andrussowHCN;
        kind     reaction;
        target   HCN;
        family   ammoxidation;
        era      incumbent;
        description "The Andrussow process: methane + ammonia + air over Pt/Rh gauze -- the on-purpose HCN beside the SOHIO by-product.";
        stoichiometry
        (
            { component CH4;                   nu -1; }
            { component NH3;                   nu -1; }
            { component O2;                    nu -1.5; }
            { component HCN;                   nu 1; }
            { component water;                 nu 3; }
        );
        yield
        {
            basis   carbon;
            band    ( 0.6 0.7 );
            origin  assumed;
            reason  "Andrussow over Pt/Rh gauze, 1100 C, 60-70 % on methane; the curator's band";
        }
        provenance
        (
            { source weissermelArpe2003; locus "ch. 2, 'Hydrocyanic acid'"; }
            { source ullmanns; locus "'Cyano Compounds, Inorganic'"; }
        );
    }

    {
        name     acetoneCyanohydrinFormation;
        kind     reaction;
        target   acetoneCyanohydrin;
        family   condensation;
        era      incumbent;
        description "Acetone + HCN: the first step of the classic (ACH) methyl methacrylate route.";
        stoichiometry
        (
            { component acetone;               nu -1; }
            { component HCN;                   nu -1; }
            { component acetoneCyanohydrin;    nu 1; }
        );
        yield
        {
            basis   carbon;
            band    ( 0.95 0.99 );
            origin  assumed;
            reason  "base-catalysed addition at 20-40 C; the curator's band";
        }
        provenance
        (
            { source weissermelArpe2003; locus "ch. 11, 'Methacrylic acid and esters' -- the ACH process"; }
            { source ullmanns; locus "'Methacrylic Acid and Derivatives'"; }
        );
    }

    {
        name     ACHtoMMA;
        kind     reaction;
        target   methylMethacrylate;
        family   esterification;
        era      incumbent;
        description "ACH + sulfuric acid gives the methacrylamide sulfate, which methanol esterifies: 1.2 t of ammonium bisulfate per t MMA is FORCED, and must be regenerated to sulfuric acid or sold -- sulfuric acid used as a reagent, consumed as waste.";
        stoichiometry
        (
            { component acetoneCyanohydrin;    nu -1; }
            { component H2SO4;                 nu -1; }
            { component methanol;              nu -1; }
            { component methylMethacrylate;    nu 1; }
            { component NH4HSO4;               nu 1; }
        );
        yield
        {
            basis   carbon;
            band    ( 0.8 0.9 );
            origin  assumed;
            reason  "amidation in oleum, then esterification; the curator's band";
        }
        provenance
        (
            { source weissermelArpe2003; locus "ch. 11, 'Methacrylic acid and esters'"; }
            { source ullmanns; locus "'Methacrylic Acid and Derivatives'"; }
        );
    }

    {
        name     MMApolymerisation;
        kind     reaction;
        target   PMMA;
        family   polymerisation;
        era      incumbent;
        description "Radical polymerisation of MMA: acrylic sheet and mouldings.  Written per repeat unit.";
        stoichiometry
        (
            { component methylMethacrylate;    nu -1; }
            { component PMMA;                  nu 1; }
        );
        yield
        {
            basis   carbon;
            band    ( 0.97 0.995 );
            origin  assumed;
            reason  "radical bulk/suspension polymerisation; the curator's band";
        }
        provenance
        (
            { source ullmanns; locus "'Polymethacrylates'"; }
        );
    }

    {
        name     propyleneAllylChlorination;
        kind     reaction;
        target   allylChloride;
        family   chlorination;
        era      incumbent;
        description "Substitutive (not additive) chlorination of propylene at 500 C: allyl chloride, the epichlorohydrin precursor, with one HCl forced per mole.";
        stoichiometry
        (
            { component propylene;             nu -1; }
            { component Cl2;                   nu -1; }
            { component allylChloride;         nu 1; }
            { component HCl;                   nu 1; }
        );
        yield
        {
            basis   carbon;
            band    ( 0.8 0.85 );
            origin  assumed;
            reason  "high-temperature substitutive chlorination, 500 C, 80-85 % selectivity; the curator's band";
        }
        provenance
        (
            { source weissermelArpe2003; locus "ch. 11, 'Allyl compounds'"; }
            { source ullmanns; locus "'Allyl Compounds'"; }
        );
    }

    {
        name     allylChlorideToEpichlorohydrin;
        kind     reaction;
        target   epichlorohydrin;
        family   chlorination;
        era      incumbent;
        description "Chlorohydrination of allyl chloride and lime dehydrochlorination: epichlorohydrin for epoxy resins, with CaCl2 forced -- the same chemistry as the chlorohydrin PO route.  (The glycerol-based route is the bio alternative.)";
        stoichiometry
        (
            { component allylChloride;         nu -1; }
            { component Cl2;                   nu -1; }
            { component CaOH2;                 nu -1; }
            { component epichlorohydrin;       nu 1; }
            { component CaCl2;                 nu 1; }
            { component water;                 nu 1; }
        );
        yield
        {
            basis   carbon;
            band    ( 0.85 0.92 );
            origin  assumed;
            reason  "hypochlorination to the dichlorohydrins, then lime dehydrochlorination; the curator's band";
        }
        provenance
        (
            { source weissermelArpe2003; locus "ch. 11, 'Epichlorohydrin'"; }
            { source ullmanns; locus "'Epoxides'"; }
        );
    }

    {
        name     butadienePolymerisation;
        kind     reaction;
        target   polybutadiene;
        family   polymerisation;
        era      incumbent;
        description "Polybutadiene (and, with styrene, SBR): the synthetic rubbers of tyres, butadiene's main outlet.  Written per repeat unit.";
        stoichiometry
        (
            { component 13Butadiene;           nu -1; }
            { component polybutadiene;         nu 1; }
        );
        yield
        {
            basis   carbon;
            band    ( 0.95 0.99 );
            origin  assumed;
            reason  "solution polymerisation (Nd, Li, Co); the curator's band";
        }
        provenance
        (
            { source ullmanns; locus "'Rubber, 3. Synthetic Rubbers'"; }
            { source weissermelArpe2003; locus "ch. 5, '1,3-Diolefins'"; }
        );
    }

    {
        name     butadieneHydrocyanation;
        kind     reaction;
        target   adiponitrile;
        family   condensation;
        era      incumbent;
        description "Two HCN added across butadiene over a Ni(0) phosphite catalyst: adiponitrile, the nylon-6,6 diamine precursor (the alternative is acrylonitrile electrohydrodimerisation).";
        stoichiometry
        (
            { component 13Butadiene;           nu -1; }
            { component HCN;                   nu -2; }
            { component adiponitrile;          nu 1; }
        );
        yield
        {
            basis   carbon;
            band    ( 0.9 0.95 );
            origin  assumed;
            reason  "Ni(0)/phosphite hydrocyanation (DuPont); the curator's band";
        }
        provenance
        (
            { source weissermelArpe2003; locus "ch. 10, 'Adiponitrile'"; }
            { source ullmanns; locus "'Adipic Acid' and 'Hexamethylenediamine'"; }
        );
    }

    {
        name     adiponitrileHydrogenation;
        kind     reaction;
        target   hexamethylenediamine;
        family   hydrogenation;
        era      incumbent;
        description "Hydrogenation of both nitriles to HMDA.";
        stoichiometry
        (
            { component adiponitrile;          nu -1; }
            { component H2;                    nu -4; }
            { component hexamethylenediamine;  nu 1; }
        );
        yield
        {
            basis   carbon;
            band    ( 0.95 0.98 );
            origin  assumed;
            reason  "Raney Ni/Co with NH3 or KOH to suppress secondary amines; the curator's band";
        }
        provenance
        (
            { source weissermelArpe2003; locus "ch. 10, 'Hexamethylenediamine'"; }
            { source ullmanns; locus "'Hexamethylenediamine'"; }
        );
    }

    {
        name     butaneOxidationMaleic;
        kind     reaction;
        target   maleicAnhydride;
        family   oxidation;
        era      incumbent;
        description "Butane oxidation over VPO: a 14-electron oxidation in one catalytic pass -- the route that replaced benzene oxidation and the exemplary selective oxidation.";
        stoichiometry
        (
            { component nButane;               nu -1; }
            { component O2;                    nu -3.5; }
            { component maleicAnhydride;       nu 1; }
            { component water;                 nu 4; }
        );
        yield
        {
            basis   carbon;
            band    ( 0.55 0.65 );
            origin  assumed;
            reason  "vanadium phosphate oxide, 400 C, 55-65 % molar yield; the curator's band";
        }
        provenance
        (
            { source weissermelArpe2003; locus "ch. 13, 'Maleic anhydride' -- the butane route"; }
            { source ullmanns; locus "'Maleic and Fumaric Acids'"; }
        );
    }

    {
        name     isobutaneDehydrogenation;
        kind     reaction;
        target   isoButene;
        family   dehydrogenation;
        era      incumbent;
        description "On-purpose isobutene by isobutane dehydrogenation, for MTBE where the cracker's C4 cut is short.";
        stoichiometry
        (
            { component isoButane;             nu -1; }
            { component isoButene;             nu 1; }
            { component H2;                    nu 1; }
        );
        yield
        {
            basis   carbon;
            band    ( 0.88 0.93 );
            origin  assumed;
            reason  "Cr2O3/alumina (Catofin) or Pt-Sn, 550-600 C, 50-60 % per pass; the curator's band";
        }
        provenance
        (
            { source sattler2014; locus "isobutane dehydrogenation"; }
            { source weissermelArpe2003; locus "ch. 3, 'Olefins'"; }
        );
    }

    {
        name     methacrylicFromIsobutene;
        kind     reaction;
        target   methacrylicAcid;
        family   oxidation;
        era      incumbent;
        description "The acetone-free MMA route: isobutene oxidised via methacrolein to methacrylic acid (Japanese C4 processes) -- no ammonium bisulfate, no HCN, no phenol plant to depend on.";
        stoichiometry
        (
            { component isoButene;             nu -1; }
            { component O2;                    nu -1.5; }
            { component methacrylicAcid;       nu 1; }
            { component water;                 nu 1; }
        );
        yield
        {
            basis   carbon;
            band    ( 0.6 0.7 );
            origin  assumed;
            reason  "two-stage Mo-Bi / heteropolyacid oxidation via methacrolein; the curator's band";
        }
        provenance
        (
            { source weissermelArpe2003; locus "ch. 11, 'Methacrylic acid and esters' -- the isobutene route"; }
            { source ullmanns; locus "'Methacrylic Acid and Derivatives'"; }
        );
    }

    {
        name     methacrylicEsterification;
        kind     reaction;
        target   methylMethacrylate;
        family   esterification;
        era      incumbent;
        description "Esterification of methacrylic acid with methanol to MMA.";
        stoichiometry
        (
            { component methacrylicAcid;       nu -1; }
            { component methanol;              nu -1; }
            { component methylMethacrylate;    nu 1; }
            { component water;                 nu 1; }
        );
        yield
        {
            basis   carbon;
            band    ( 0.95 0.99 );
            origin  assumed;
            reason  "acid-resin esterification; the curator's band";
        }
        provenance
        (
            { source ullmanns; locus "'Methacrylic Acid and Derivatives'"; }
        );
    }

    {
        name     SBRpolymerisation;
        kind     reaction;
        target   SBR;
        family   polymerisation;
        era      incumbent;
        description "Styrene-butadiene rubber by emulsion copolymerisation, about 75:25 by mass: the tyre rubber that takes most of the butadiene.  Written per 3:1 repeat.";
        stoichiometry
        (
            { component 13Butadiene;           nu -3; }
            { component styrene;               nu -1; }
            { component SBR;                   nu 1; }
        );
        yield
        {
            basis   carbon;
            band    ( 0.95 0.99 );
            origin  assumed;
            reason  "cold emulsion copolymerisation; the curator's band";
        }
        provenance
        (
            { source ullmanns; locus "'Rubber, 3. Synthetic Rubbers'"; }
        );
    }

    {
        name     maleicHydrogenationBDO;
        kind     reaction;
        target   14Butanediol;
        family   hydrogenation;
        era      incumbent;
        description "Maleic anhydride (from butane) hydrogenated to 1,4-butanediol: THF, PBT, spandex -- the butane route that displaced the acetylene (Reppe) one.";
        stoichiometry
        (
            { component maleicAnhydride;       nu -1; }
            { component H2;                    nu -5; }
            { component 14Butanediol;          nu 1; }
            { component water;                 nu 1; }
        );
        yield
        {
            basis   carbon;
            band    ( 0.9 0.95 );
            origin  assumed;
            reason  "Davy/Kvaerner ester hydrogenation or direct Cu/Zn hydrogenation; the curator's band";
        }
        provenance
        (
            { source ullmanns; locus "'Butanediols, Butenediol, and Butynediol'"; }
        );
    }

    {
        name     acetyleneHydrochlorination;
        kind     reaction;
        target   vinylChloride;
        family   chlorination;
        era      incumbent;
        description "Acetylene + HCl over HgCl2/carbon: the VCM route of coal-based China, which CONSUMES HCl where the ethylene route forces it.";
        stoichiometry
        (
            { component acetylene;             nu -1; }
            { component HCl;                   nu -1; }
            { component vinylChloride;         nu 1; }
        );
        yield
        {
            basis   carbon;
            band    ( 0.95 0.98 );
            origin  assumed;
            reason  "HgCl2 on carbon (being replaced by Au and other mercury-free catalysts); the curator's band";
        }
        provenance
        (
            { source weissermelArpe2003; locus "ch. 9, 'Vinyl chloride' -- the acetylene route"; }
            { source ullmanns; locus "'Chlorinated Hydrocarbons'"; }
        );
    }

    {
        name     HPPOepoxidation;
        kind     reaction;
        target   12PropyleneOxide;
        family   oxidation;
        era      incumbent;
        description "HPPO (Evonik/Uhde, BASF/Dow): propylene epoxidised by hydrogen peroxide over TS-1, with water the only co-product -- the route built to escape both the chlorohydrin's CaCl2 and the hydroperoxide's forced styrene.";
        stoichiometry
        (
            { component propylene;             nu -1; }
            { component H2O2;                  nu -1; }
            { component 12PropyleneOxide;      nu 1; }
            { component water;                 nu 1; }
        );
        yield
        {
            basis   carbon;
            band    ( 0.93 0.97 );
            origin  assumed;
            reason  "TS-1 titanium silicalite in methanol, selectivity > 95 %; the curator's band";
        }
        provenance
        (
            { source ullmanns; locus "'Propylene Oxide'"; }
            { source weissermelArpe2003; locus "ch. 11, 'Propylene oxide'"; }
        );
    }

    {
        name     acrylonitrilePolymerisation;
        kind     reaction;
        target   PAN;
        family   polymerisation;
        era      incumbent;
        description "Polyacrylonitrile: acrylic fibres and the carbon-fibre precursor.  Written per repeat unit.";
        stoichiometry
        (
            { component acrylonitrile;         nu -1; }
            { component PAN;                   nu 1; }
        );
        yield
        {
            basis   carbon;
            band    ( 0.9 0.97 );
            origin  assumed;
            reason  "solution/suspension radical polymerisation; the curator's band";
        }
        provenance
        (
            { source ullmanns; locus "'Polyacrylonitriles'"; }
        );
    }

    {
        name     acrylonitrileEHD;
        kind     reaction;
        target   adiponitrile;
        family   electrolysis;
        era      incumbent;
        description "Monsanto's electrohydrodimerisation of acrylonitrile to adiponitrile: the propylene route to nylon 6,6 beside the butadiene one, and the largest organic electrosynthesis.";
        stoichiometry
        (
            { component acrylonitrile;         nu -2; }
            { component H2;                    nu -1; }
            { component adiponitrile;          nu 1; }
        );
        yield
        {
            basis   carbon;
            band    ( 0.88 0.93 );
            origin  assumed;
            reason  "the Monsanto electrohydrodimerisation, written with H2 standing for the cathodic protons/electrons; the curator's band";
        }
        provenance
        (
            { source weissermelArpe2003; locus "ch. 10, 'Adiponitrile' -- the electrohydrodimerisation"; }
            { source ullmanns; locus "'Adipic Acid'"; }
        );
    }

    {
        name     butylAcrylateEsterification;
        kind     reaction;
        target   butylAcrylate;
        family   esterification;
        era      incumbent;
        description "Butyl acrylate: the acrylic acid and oxo trees meet in the paint and adhesive latex monomer.";
        stoichiometry
        (
            { component acrylicAcid;           nu -1; }
            { component nButanol;              nu -1; }
            { component butylAcrylate;         nu 1; }
            { component water;                 nu 1; }
        );
        yield
        {
            basis   carbon;
            band    ( 0.95 0.99 );
            origin  assumed;
            reason  "acid-catalysed esterification with water removal; the curator's band";
        }
        provenance
        (
            { source ullmanns; locus "'Acrylic Acid and Derivatives'"; }
        );
    }
);
`,Nn=`/*--------------------------------*- Choupo -*-----------------------*\\
  THE SYNTHESIS-GAS ROOT and the first derivatives of CO + H2: reforming,
  shift, gasification, methanol and its outlets, ammonia and urea.  The ammonia
  edge is written ONCE: its hydrogen comes from reforming + shift today and from
  electrolysis tomorrow, and the transition replaces the root, not this edge.
  Grammar: README.md beside this file.  Every edge is re-read, balanced and
  checked by bin/curate/check_chemistry_graph.py.
\\*---------------------------------------------------------------------------*/


recordType    productionRoutes;
schemaVersion 1;
graph         treeOfChemistry;

routes
(
    {
        name     steamMethaneReforming;
        kind     reaction;
        target   CO;
        family   reforming;
        era      incumbent;
        description "Steam reforming over Ni, 800-900 C, 20-30 bar: strongly endothermic, fired from outside the tubes.  Today's source of most of the world's hydrogen and syngas -- and of the CO2 that comes with them.  The ratio H2/CO = 3 is what makes methane the preferred methanol and ammonia feed.";
        stoichiometry
        (
            { component CH4;                   nu -1; }
            { component water;                 nu -1; }
            { component CO;                    nu 1; }
            { component H2;                    nu 3; }
        );
        yield
        {
            basis   carbon;
            band    ( 0.95 0.99 );
            origin  assumed;
            reason  "methane slip 2-5 % after primary + secondary reforming; the curator's band";
        }
        cases    ( "tutorials/steady/gibbs/gibbs02_steam_reforming" "tutorials/steady/reactors/equil01_reforming" "tutorials/props/gibbs/landscape03_steam_reforming" "tutorials/steady/reactors/equil04_reforming_carbon_declared_pathways" "tutorials/steady/gibbs/gibbs11_carbon_deposition" "tutorials/steady/separation/psa01_h2_psa" );
        provenance
        (
            { source moulijn2013; locus "ch. on synthesis gas"; }
            { source ullmanns; locus "'Gas Production, 2. Processes'"; }
            { source ieaAmmonia2021; locus "executive summary: just over 70 % of ammonia is made from natural gas by steam reforming"; }
        );
    }

    {
        name     partialOxidationMethane;
        kind     reaction;
        target   CO;
        family   reforming;
        era      incumbent;
        description "Autothermal reforming / partial oxidation with oxygen: no external firing, H2/CO = 2 -- the ratio the methanol and Fischer-Tropsch syntheses want.  Needs an air separation unit.";
        stoichiometry
        (
            { component CH4;                   nu -1; }
            { component O2;                    nu -0.5; }
            { component CO;                    nu 1; }
            { component H2;                    nu 2; }
        );
        yield
        {
            basis   carbon;
            band    ( 0.93 0.98 );
            origin  assumed;
            reason  "autothermal/partial oxidation carbon efficiency; the curator's band";
        }
        provenance
        (
            { source moulijn2013; locus "synthesis gas: ATR and POX"; }
            { source ullmanns; locus "'Gas Production, 2. Processes'"; }
        );
    }

    {
        name     waterGasShift;
        kind     reaction;
        target   H2;
        family   shift;
        era      incumbent;
        description "The water-gas shift converts the CO of reformed gas into more hydrogen and CO2: it is what turns syngas into AMMONIA feed (all the carbon leaves as CO2) and what tunes the H2/CO ratio for methanol.";
        stoichiometry
        (
            { component CO;                    nu -1; }
            { component water;                 nu -1; }
            { component CO2;                   nu 1; }
            { component H2;                    nu 1; }
        );
        yield
        {
            basis   hydrogen;
            band    ( 0.95 0.99 );
            origin  assumed;
            reason  "high- plus low-temperature shift leave 0.2-0.5 % CO; the curator's band";
        }
        cases    ( "tutorials/steady/gibbs/gibbs01_water_gas_shift" "tutorials/steady/reactors/cstr02_reversible_wgs" "tutorials/steady/reactors/pfr02_reversible_wgs" "tutorials/batch/reactor/batch04_reversible_wgs" "tutorials/steady/reactors/ladder01_wgs_three_rungs" "tutorials/props/gibbs/landscape02_water_gas_shift" );
        provenance
        (
            { source moulijn2013; locus "synthesis gas: the shift reactors"; }
            { source ullmanns; locus "'Hydrogen, 2. Production'"; }
        );
    }

    {
        name     coalGasification;
        kind     processYield;
        target   CO;
        family   gasification;
        era      incumbent;
        description "Entrained-flow or fluidised-bed gasification with oxygen and steam, 1300-1500 C: the syngas is CO-rich (H2/CO < 1) and needs a large shift step, so coal-based methanol and ammonia carry roughly twice the CO2 of gas-based.  China's methanol and a quarter of the world's ammonia stand on it.";
        feed     coal;
        slate
        (
            { component CO;                    massPerKgFeed ( 1.2 1.8 ); origin assumed; reason "kg CO per kg coal (dry, ash-free) in an entrained-flow gasifier; most of the coal's carbon leaves as CO, the rest as CO2; the curator's band"; }
            { component H2;                    massPerKgFeed ( 0.05 0.12 ); origin assumed; reason "kg H2 per kg coal; the curator's band"; }
            { component CO2;                   massPerKgFeed ( 0.3 0.8 ); origin assumed; reason "the curator's band"; }
        );
        provenance
        (
            { source moulijn2013; locus "coal gasification"; }
            { source ieaAmmonia2021; locus "executive summary: coal gasification supplies most of the remaining ammonia, about 85 % of China's"; }
            { source iea2018; locus "p. 29: coal feedstock is split fairly evenly between methanol and ammonia"; }
        );
    }

    {
        name     methanolSynthesis;
        kind     reaction;
        target   methanol;
        family   synthesis;
        era      incumbent;
        description "Low-pressure methanol synthesis over Cu/ZnO/Al2O3, 220-280 C, 50-100 bar, with a synthesis loop: the first derivative of syngas and the one that carries ALL its carbon into a liquid.  Written on CO; the CO2 path (CO2 + 3 H2) runs in the same loop and is the transition edge.";
        stoichiometry
        (
            { component CO;                    nu -1; }
            { component H2;                    nu -2; }
            { component methanol;              nu 1; }
        );
        yield
        {
            basis   carbon;
            band    ( 0.95 0.99 );
            origin  assumed;
            reason  "Cu/ZnO/Al2O3 selectivity > 99 %, overall carbon efficiency with purge; the curator's band";
        }
        cases    ( "tutorials/steady/reactors/equil02_methanol_declared_pathways" "tutorials/steady/reactors/screen01_methanol_routes" );
        provenance
        (
            { source moulijn2013; locus "methanol synthesis"; }
            { source ullmanns; locus "'Methanol'"; }
            { source weissermelArpe2003; locus "ch. 2, 'Basic Products of Industrial Syntheses'"; }
        );
    }

    {
        name     methanolToFormaldehyde;
        kind     reaction;
        target   formaldehyde;
        family   oxidation;
        era      incumbent;
        description "Methanol's largest outlet (about 40 %): oxidative dehydrogenation over silver (600-700 C) or oxidation over Fe-Mo oxide (300-400 C), to the formalin that makes the wood-adhesive and plastics resins.";
        stoichiometry
        (
            { component methanol;              nu -1; }
            { component O2;                    nu -0.5; }
            { component formaldehyde;          nu 1; }
            { component water;                 nu 1; }
        );
        yield
        {
            basis   carbon;
            band    ( 0.88 0.94 );
            origin  assumed;
            reason  "silver or iron-molybdate oxide process; the curator's band";
        }
        provenance
        (
            { source weissermelArpe2003; locus "ch. 2, 'Formaldehyde'"; }
            { source ullmanns; locus "'Formaldehyde'"; }
            { source iea2018; locus "p. 24: about 40 % of methanol is converted to formaldehyde"; }
        );
    }

    {
        name     ureaFormaldehydeCondensation;
        kind     reaction;
        target   ureaFormaldehydeResin;
        family   condensation;
        era      incumbent;
        description "Urea + formaldehyde condense to the methylol ureas and then to the resin (written per methylene-urea repeat unit): the glue of particleboard and plywood -- the end of the methanol chain nobody sees, and with the phenolic and melamine resins about 40 % of methanol's outlet.";
        stoichiometry
        (
            { component urea;                  nu -1; }
            { component formaldehyde;          nu -1; }
            { component ureaFormaldehydeResin; nu 1; }
            { component water;                 nu 1; }
        );
        yield
        {
            basis   carbon;
            band    ( 0.95 0.99 );
            origin  assumed;
            reason  "the condensation is quantitative at the usual F/U ratio of 1.0-1.3; the curator's band";
        }
        provenance
        (
            { source ullmanns; locus "'Amino Resins'"; }
        );
    }

    {
        name     methanolCarbonylation;
        kind     reaction;
        target   aceticAcid;
        family   carbonylation;
        era      incumbent;
        description "The Monsanto/Cativa process: homogeneous Rh or Ir iodide catalysis, 150-200 C, 30-60 bar, near-quantitative on both methanol and CO.  It displaced the acetaldehyde (ethylene) route and is why acetic acid now hangs from the syngas root.";
        stoichiometry
        (
            { component methanol;              nu -1; }
            { component CO;                    nu -1; }
            { component aceticAcid;            nu 1; }
        );
        yield
        {
            basis   carbon;
            band    ( 0.97 0.99 );
            origin  assumed;
            reason  "Rh (Monsanto) or Ir (Cativa) catalysed carbonylation selectivity > 99 % on methanol; the curator's band";
        }
        cases    ( "tutorials/plant/aceticAcid01_gibbsReactor" "tutorials/plant/aceticAcid02_plant" );
        provenance
        (
            { source weissermelArpe2003; locus "ch. 7, 'Acetic acid' -- the Monsanto process"; }
            { source ullmanns; locus "'Acetic Acid'"; }
        );
    }

    {
        name     acetateEsterification;
        kind     reaction;
        target   methylAcetate;
        family   esterification;
        era      incumbent;
        description "Methyl acetate by reactive distillation (the Eastman column): an equilibrium-limited esterification pushed to completion by taking the ester overhead.";
        stoichiometry
        (
            { component aceticAcid;            nu -1; }
            { component methanol;              nu -1; }
            { component methylAcetate;         nu 1; }
            { component water;                 nu 1; }
        );
        yield
        {
            basis   carbon;
            band    ( 0.95 0.99 );
            origin  assumed;
            reason  "reactive distillation drives the equilibrium to completion; the curator's band";
        }
        cases    ( "tutorials/steady/distillation/column05_reactive_methylacetate" "tutorials/steady/reactors/cstr07_lhhw_methylAcetate" "tutorials/batch/reactor/batch07_lhhw_methylAcetate" );
        provenance
        (
            { source ullmanns; locus "'Acetic Acid' -- esters"; }
        );
    }

    {
        name     aceticAnhydrideCarbonylation;
        kind     reaction;
        target   aceticAnhydride;
        family   carbonylation;
        era      incumbent;
        description "Eastman's coal-to-chemicals chain: methyl acetate + CO over Rh gives the anhydride for cellulose acetate -- a syngas-only path to a C4 oxygenate.";
        stoichiometry
        (
            { component methylAcetate;         nu -1; }
            { component CO;                    nu -1; }
            { component aceticAnhydride;       nu 1; }
        );
        yield
        {
            basis   carbon;
            band    ( 0.95 0.99 );
            origin  assumed;
            reason  "Rh-catalysed carbonylation of methyl acetate (Eastman); the curator's band";
        }
        provenance
        (
            { source weissermelArpe2003; locus "ch. 7, 'Acetic anhydride'"; }
            { source ullmanns; locus "'Acetic Anhydride and Mixed Fatty Acid Anhydrides'"; }
        );
    }

    {
        name     methanolDehydrationDME;
        kind     reaction;
        target   dimethylEther;
        family   dehydration;
        era      incumbent;
        description "DME by methanol dehydration over alumina: an aerosol propellant and LPG substitute, and the intermediate of the MTO chemistry.";
        stoichiometry
        (
            { component methanol;              nu -2; }
            { component dimethylEther;         nu 1; }
            { component water;                 nu 1; }
        );
        yield
        {
            basis   carbon;
            band    ( 0.95 0.99 );
            origin  assumed;
            reason  "alumina-catalysed dehydration; the curator's band";
        }
        provenance
        (
            { source ullmanns; locus "'Dimethyl Ether'"; }
        );
    }

    {
        name     methanolHydrochlorination;
        kind     reaction;
        target   methylChloride;
        family   chlorination;
        era      incumbent;
        description "Methanol + HCl gives methyl chloride, the silicone (methylchlorosilane) precursor and the first of the chloromethanes -- a route that CONSUMES the HCl the chlorinations force.";
        stoichiometry
        (
            { component methanol;              nu -1; }
            { component HCl;                   nu -1; }
            { component methylChloride;        nu 1; }
            { component water;                 nu 1; }
        );
        yield
        {
            basis   carbon;
            band    ( 0.95 0.99 );
            origin  assumed;
            reason  "alumina or ZnCl2 catalysed gas-phase hydrochlorination; the curator's band";
        }
        provenance
        (
            { source weissermelArpe2003; locus "ch. 2, chloromethanes"; }
            { source ullmanns; locus "'Chloromethanes'"; }
        );
    }

    {
        name     MTBEEtherification;
        kind     reaction;
        target   MTBE;
        family   etherification;
        era      incumbent;
        description "MTBE over a sulfonic acid resin, 50-90 C: the gasoline oxygenate that is also HOW isobutene is taken out of the C4 cut (the ether is cracked back to pure isobutene where that is the product wanted).";
        stoichiometry
        (
            { component isoButene;             nu -1; }
            { component methanol;              nu -1; }
            { component MTBE;                  nu 1; }
        );
        yield
        {
            basis   carbon;
            band    ( 0.95 0.99 );
            origin  assumed;
            reason  "acid-resin catalysed, equilibrium driven by reactive distillation; the curator's band";
        }
        provenance
        (
            { source weissermelArpe2003; locus "ch. 3, 'Olefins' -- MTBE from raffinate 1"; }
            { source ullmanns; locus "'Methyl tert-Butyl Ether'"; }
        );
    }

    {
        name     ammoniaSynthesis;
        kind     reaction;
        target   NH3;
        family   synthesis;
        era      incumbent;
        description "Haber-Bosch over promoted iron, 400-500 C, 100-300 bar, in a synthesis loop.  The chemistry is the same whatever the hydrogen's origin: the FOSSIL ammonia is this edge fed by steam reforming + shift; the GREEN ammonia is this edge fed by electrolysis.  The transition replaces the root (the hydrogen), not the leaf.";
        stoichiometry
        (
            { component N2;                    nu -1; }
            { component H2;                    nu -3; }
            { component NH3;                   nu 2; }
        );
        yield
        {
            basis   hydrogen;
            band    ( 0.95 0.99 );
            origin  assumed;
            reason  "hydrogen efficiency of the synthesis loop with purge recovery; the curator's band";
        }
        energy
        (
            { route "global average, all routes, net, ~2019"; band ( 41 41 ); unit "GJ per t NH3"; origin literature; locus "ieaAmmonia2021: 'around 41 GJ/t on a net basis'"; }
            { route "best available technology, natural gas"; band ( 28 28 ); unit "GJ per t NH3"; origin literature; locus "ieaAmmonia2021: 28 GJ/t for natural gas-based production"; }
            { route "best available technology, coal"; band ( 36 36 ); unit "GJ per t NH3"; origin literature; locus "ieaAmmonia2021: 36 GJ/t for coal-based production"; }
            { route "direct CO2, global average"; band ( 2.4 2.4 ); unit "t CO2 per t NH3"; origin literature; locus "ieaAmmonia2021: 'around 2.4 t CO2 per tonne of production'"; }
        );
        cases    ( "tutorials/plant/ammonia02_full_plant" "tutorials/plant/ammonia03_quench_converter" "tutorials/steady/flowsheets/ammonia01_synthesis_loop" "tutorials/plant/ammoniaReactor04_kineticSizing" "tutorials/plant/ammoniaRoutes01_screening" "tutorials/plant/greenAmmonia03_basicDesign" "tutorials/plant/greenAmmoniaPEQ_baseCase" "tutorials/props/gibbs/landscape01_ammonia_synthesis" "tutorials/props/kinetics/ammoniaRate01_dyson_simon" );
        provenance
        (
            { source ieaAmmonia2021; locus "executive summary: energy intensity, routes and emissions"; }
            { source smith2020; locus "the Haber-Bosch process in a carbon-free landscape"; }
            { source ullmanns; locus "'Ammonia, 2. Production Processes'"; }
            { source moulijn2013; locus "ammonia synthesis"; }
        );
    }

    {
        name     ureaSynthesis;
        kind     reaction;
        target   urea;
        family   condensation;
        era      incumbent;
        description "Ammonium carbamate at 150-200 bar dehydrates to urea: the largest ammonia derivative (more than half) and the one process that USES the ammonia plant's own CO2 -- 0.73 t per t urea, released again when the fertiliser hydrolyses in the soil.";
        stoichiometry
        (
            { component NH3;                   nu -2; }
            { component CO2;                   nu -1; }
            { component urea;                  nu 1; }
            { component water;                 nu 1; }
        );
        yield
        {
            basis   nitrogen;
            band    ( 0.97 0.99 );
            origin  assumed;
            reason  "total-recycle stripping processes; the curator's band";
        }
        provenance
        (
            { source iea2018; locus "p. 24: more than half of ammonia is converted to urea, made from the CO2 of the ammonia plant; p. 52: a tonne of urea requires a minimum of 0.73 t CO2"; }
            { source ullmanns; locus "'Urea'"; }
        );
    }

    {
        name     fischerTropsch;
        kind     reaction;
        target   nOctane;
        family   synthesis;
        era      incumbent;
        description "Fischer-Tropsch: syngas to paraffinic liquids over Co or Fe (Sasol, Shell).  Written on n-octane as the representative chain: the same chemistry on biomass or CO2-derived syngas is the e-fuel / BTL route.";
        stoichiometry
        (
            { component CO;                    nu -8; }
            { component H2;                    nu -17; }
            { component nOctane;               nu 1; }
            { component water;                 nu 8; }
        );
        yield
        {
            basis   carbon;
            band    ( 0.75 0.9 );
            origin  assumed;
            reason  "Co or Fe catalyst, C5+ selectivity 75-90 % with CH4 and CO2 the losses; the curator's band";
        }
        provenance
        (
            { source moulijn2013; locus "Fischer-Tropsch synthesis"; }
            { source huber2006; locus "biomass-to-liquids via FT"; }
        );
    }

    {
        name     phenolFormaldehydeResin;
        kind     reaction;
        target   phenolicResin;
        family   condensation;
        era      incumbent;
        description "Phenol-formaldehyde resins (Bakelite): the oldest synthetic polymer, still the plywood and moulding resin.  Written per methylene-phenol repeat unit.";
        stoichiometry
        (
            { component phenol;                nu -1; }
            { component formaldehyde;          nu -1; }
            { component phenolicResin;         nu 1; }
            { component water;                 nu 1; }
        );
        yield
        {
            basis   carbon;
            band    ( 0.95 0.99 );
            origin  assumed;
            reason  "acid (novolac) or base (resol) catalysed condensation; the curator's band";
        }
        provenance
        (
            { source ullmanns; locus "'Phenolic Resins'"; }
        );
    }

    {
        name     formaldehydePolymerisation;
        kind     reaction;
        target   POM;
        family   polymerisation;
        era      incumbent;
        description "Polyacetal (POM): formaldehyde or its trimer polymerised to the engineering plastic of gears and clips.  Written per repeat unit.";
        stoichiometry
        (
            { component formaldehyde;          nu -1; }
            { component POM;                   nu 1; }
        );
        yield
        {
            basis   carbon;
            band    ( 0.9 0.95 );
            origin  assumed;
            reason  "anionic polymerisation of purified formaldehyde or trioxane; the curator's band";
        }
        provenance
        (
            { source ullmanns; locus "'Polyoxymethylenes'"; }
        );
    }

    {
        name     ureaToMelamine;
        kind     reaction;
        target   melamine;
        family   condensation;
        era      incumbent;
        description "Six ureas to one melamine with six ammonias and three CO2 returned to the urea plant: the melamine resins of laminates, made entirely from ammonia and CO2.";
        stoichiometry
        (
            { component urea;                  nu -6; }
            { component melamine;              nu 1; }
            { component NH3;                   nu 6; }
            { component CO2;                   nu 3; }
        );
        yield
        {
            basis   carbon;
            band    ( 0.45 0.5 );
            origin  assumed;
            reason  "half the urea carbon returns as CO2 by stoichiometry; the process is near-quantitative on top of that; the curator's band";
        }
        provenance
        (
            { source ullmanns; locus "'Melamine and Guanamines'"; }
        );
    }
);
`,Sn=`/*--------------------------------*- Choupo -*-----------------------*\\
  THE TREE OF 2050: the routes that REPLACE THE ROOTS -- electrolytic hydrogen,
  CO2 to methanol, methane and CO, methanol to olefins and aromatics, bio-ethanol
  to ethylene, biomass gasification and biomethane, lignin to aromatics, and
  on-purpose propylene.  Every edge carries the same fields as the incumbent ones
  (\`era transition\`) so the tool can draw the two side by side; the hydrogen a
  route consumes per carbon is DERIVED from its stoichiometry by the gate and the
  tool and is never stored.
  Grammar: README.md beside this file.  Every edge is re-read, balanced and
  checked by bin/curate/check_chemistry_graph.py.
\\*---------------------------------------------------------------------------*/


recordType    productionRoutes;
schemaVersion 1;
graph         treeOfChemistry;

routes
(
    {
        name     waterElectrolysis;
        kind     reaction;
        target   H2;
        family   electrolysis;
        era      transition;
        description "Water electrolysis (alkaline, PEM, solid oxide): hydrogen with no carbon -- the ROOT replacement for ammonia, methanol and every hydrogenation, with oxygen as the co-product.  The chemistry downstream is unchanged; what moves is where the hydrogen comes from and what the electricity costs.";
        stoichiometry
        (
            { component water;                 nu -2; }
            { component H2;                    nu 2; }
            { component O2;                    nu 1; }
        );
        yield
        {
            basis   hydrogen;
            band    ( 0.99 1 );
            origin  assumed;
            reason  "Faradaic efficiency; the curator's band";
        }
        energy
        (
            { route "alkaline / PEM electrolyser, system"; band ( 50 55 ); unit "kWh per kg H2"; origin assumed; reason "the specific electricity consumption usually quoted for today's alkaline and PEM systems; the IEA hydrogen report carries the figure in its technology annex, not read back here"; }
        );
        cases    ( "tutorials/plant/greenAmmonia03_basicDesign" "tutorials/plant/greenAmmoniaPEQ_baseCase" "tutorials/plant/ammoniaRoutes01_screening" );
        provenance
        (
            { source ieaHydrogen2019; locus "electrolytic hydrogen and its cost"; }
            { source ieaAmmonia2021; locus "executive summary: electrolysis reaches more than 25 % (SDS) / 40 % (NZE) of ammonia production by 2050"; }
            { source smith2020; locus "electrolysis-based Haber-Bosch"; }
            { source ullmanns; locus "'Hydrogen, 2. Production'"; }
        );
    }

    {
        name     reverseWaterGasShift;
        kind     reaction;
        target   CO;
        family   shift;
        era      transition;
        description "The reverse water-gas shift: captured CO2 + electrolytic H2 to CO for a syngas of any ratio -- the entry of CO2 into the Fischer-Tropsch and oxo chemistry.";
        stoichiometry
        (
            { component CO2;                   nu -1; }
            { component H2;                    nu -1; }
            { component CO;                    nu 1; }
            { component water;                 nu 1; }
        );
        yield
        {
            basis   carbon;
            band    ( 0.5 0.8 );
            origin  assumed;
            reason  "equilibrium-limited per pass at 600-900 C, driven by recycle; the curator's band";
        }
        cycle    "CO2 and CO interconvert: the forward shift makes hydrogen from CO, the reverse shift makes CO from captured CO2 -- the carbon loop of power-to-X";
        provenance
        (
            { source perezFortes2016; locus "CO2-to-methanol assessment"; }
            { source moulijn2013; locus "the shift equilibrium"; }
        );
    }

    {
        name     CO2toMethanol;
        kind     reaction;
        target   methanol;
        family   synthesis;
        era      transition;
        description "Direct hydrogenation of CO2 to methanol in the same Cu/ZnO loop as the syngas route: 1.375 t CO2 and 0.19 t H2 per t methanol by stoichiometry, with one water forced per methanol.  The methanol root replaced at its source -- and then every methanol derivative, MTO olefins included, is made from CO2 and electricity.";
        stoichiometry
        (
            { component CO2;                   nu -1; }
            { component H2;                    nu -3; }
            { component methanol;              nu 1; }
            { component water;                 nu 1; }
        );
        yield
        {
            basis   carbon;
            band    ( 0.9 0.97 );
            origin  assumed;
            reason  "Cu/ZnO/Al2O3 with recycle, selectivity > 99 %, carbon efficiency set by the purge; the curator's band";
        }
        cases    ( "tutorials/steady/reactors/screen01_methanol_routes" "tutorials/steady/reactors/equil02_methanol_declared_pathways" );
        provenance
        (
            { source perezFortes2016; locus "techno-economic and environmental assessment of methanol from captured CO2"; }
            { source iea2018; locus "ch. 5, the electricity pathway (Figure 5.20: non-energy inputs for primary chemicals)"; }
        );
    }

    {
        name     CO2methanation;
        kind     reaction;
        target   CH4;
        family   methanation;
        era      transition;
        description "The Sabatier reaction: CO2 + 4 H2 to synthetic methane, strongly exothermic and mole-reducing -- equilibrium wants low T, kinetics want high, the ammonia converter's lesson again (DEV.md C191 B).  Four H2 per carbon: the most hydrogen-hungry of the power-to-X routes.";
        stoichiometry
        (
            { component CO2;                   nu -1; }
            { component H2;                    nu -4; }
            { component CH4;                   nu 1; }
            { component water;                 nu 2; }
        );
        yield
        {
            basis   carbon;
            band    ( 0.95 0.99 );
            origin  assumed;
            reason  "Sabatier over Ni, 250-400 C, in beds in series with interstage cooling and water removal; the curator's band";
        }
        cycle    "power-to-gas closes the carbon loop: the methane reformed to CO2 is remade from CO2 -- the same molecule, round the loop";
        provenance
        (
            { source moulijn2013; locus "methanation"; }
            { source ullmanns; locus "'Methanation'"; }
        );
    }

    {
        name     MTOethylene;
        kind     reaction;
        target   ethylene;
        family   methanolToHydrocarbons;
        era      transition;
        description "Methanol to olefins over SAPO-34 (DMTO, UOP/Hydro): the ethylene that China makes from COAL today and that a CO2-methanol plant would make tomorrow.  The cracker's forced slate is replaced by a tunable one.";
        stoichiometry
        (
            { component methanol;              nu -2; }
            { component ethylene;              nu 1; }
            { component water;                 nu 2; }
        );
        yield
        {
            basis   carbon;
            band    ( 0.35 0.45 );
            origin  assumed;
            reason  "ethylene share of a SAPO-34 MTO product (light olefins 80-90 % total, ethylene/propylene adjustable 0.8-1.5); the curator's band";
        }
        provenance
        (
            { source tian2015; locus "the DMTO process and SAPO-34"; }
            { source iea2018; locus "p. 32, Figure 2.5 (MTO slate) and ch. 2 on coal-to-olefins in China"; }
            { source amghizar2017; locus "methanol-to-olefins among the new routes"; }
        );
    }

    {
        name     MTOpropylene;
        kind     reaction;
        target   propylene;
        family   methanolToHydrocarbons;
        era      transition;
        description "The propylene half of MTO (and the ZSM-5 MTP variant that maximises it): on-purpose propylene from methanol.";
        stoichiometry
        (
            { component methanol;              nu -3; }
            { component propylene;             nu 1; }
            { component water;                 nu 3; }
        );
        yield
        {
            basis   carbon;
            band    ( 0.35 0.45 );
            origin  assumed;
            reason  "propylene share of the MTO/MTP product (ZSM-5 MTP goes to > 60 % propylene); the curator's band";
        }
        provenance
        (
            { source tian2015; locus "MTO and MTP"; }
            { source amghizar2017; locus "methanol-to-propylene"; }
        );
    }

    {
        name     MTAtoluene;
        kind     reaction;
        target   toluene;
        family   methanolToHydrocarbons;
        era      transition;
        description "Methanol to aromatics over metal-modified ZSM-5 (written on toluene; the product is a BTX mix): the one route that puts aromatics on the syngas root, so that benzene, toluene and the xylenes can come from biomass or CO2.";
        stoichiometry
        (
            { component methanol;              nu -7; }
            { component toluene;               nu 1; }
            { component water;                 nu 7; }
            { component H2;                    nu 3; }
        );
        yield
        {
            basis   carbon;
            band    ( 0.6 0.75 );
            origin  assumed;
            reason  "aromatics share of a Zn/Ga-ZSM-5 MTA product (BTX, with toluene and xylenes dominant); the curator's band";
        }
        provenance
        (
            { source tian2015; locus "methanol-to-hydrocarbons chemistry and the hydrocarbon pool"; }
            { source iea2018; locus "ch. 5, methanol-based routes to HVCs"; }
        );
    }

    {
        name     ethanolDehydration;
        kind     reaction;
        target   ethylene;
        family   dehydration;
        era      transition;
        description "Ethanol dehydration over alumina (Braskem, Brazil): bio-ethylene -- polyethylene with a biogenic carbon, the cracker's product without the cracker.  1.7 t ethanol per t ethylene by stoichiometry.";
        stoichiometry
        (
            { component ethanol;               nu -1; }
            { component ethylene;              nu 1; }
            { component water;                 nu 1; }
        );
        yield
        {
            basis   carbon;
            band    ( 0.95 0.99 );
            origin  assumed;
            reason  "alumina or zeolite, 300-500 C, ethylene selectivity above 95 %; the curator's band";
        }
        provenance
        (
            { source zhangYu2013; locus "catalysts and processes for ethanol dehydration"; }
            { source iea2018; locus "ch. 5, bio-based ethylene in the Clean Technology Scenario"; }
        );
    }

    {
        name     biomassGasification;
        kind     processYield;
        target   CO;
        family   gasification;
        era      transition;
        description "Biomass gasification (fluidised bed or entrained flow, oxygen/steam) to a tar-laden syngas that is cleaned and shifted: the biogenic syngas root for methanol, ammonia (after shift) and Fischer-Tropsch.";
        feed     biomass;
        slate
        (
            { component CO;                    massPerKgFeed ( 0.6 1 ); origin assumed; reason "kg CO per kg dry biomass in an oxygen/steam-blown gasifier after tar reforming; the curator's band"; }
            { component H2;                    massPerKgFeed ( 0.04 0.08 ); origin assumed; reason "the curator's band"; }
            { component CO2;                   massPerKgFeed ( 0.4 0.8 ); origin assumed; reason "the curator's band"; }
        );
        provenance
        (
            { source huber2006; locus "biomass gasification to syngas and the syngas-to-fuels routes"; }
            { source iea2018; locus "ch. 5, biomass-based primary chemicals"; }
        );
    }

    {
        name     biomethane;
        kind     processYield;
        target   CH4;
        family   fermentation;
        era      transition;
        description "Anaerobic digestion of wet biomass to biogas and upgrading to biomethane: the same molecule as natural gas, feeding the same reformer -- the root replaced without touching the plant.";
        feed     biomass;
        slate
        (
            { component CH4;                   massPerKgFeed ( 0.15 0.3 ); origin assumed; reason "kg CH4 per kg volatile solids by anaerobic digestion, upgraded to biomethane; the curator's band"; }
            { component CO2;                   massPerKgFeed ( 0.2 0.4 ); origin assumed; reason "the curator's band"; }
        );
        provenance
        (
            { source huber2006; locus "biogas in the biorefinery"; }
            { source iea2018; locus "ch. 5"; }
        );
    }

    {
        name     ligninDepolymerisation;
        kind     processYield;
        target   phenol;
        family   pyrolysis;
        era      transition;
        description "Lignin, the only renewable aromatic polymer at scale: catalytic depolymerisation and hydrodeoxygenation to phenolics and BTX.  The yields are low and the chemistry is not commercial -- the aromatic root is the hardest to replace, which is why MTA matters.";
        feed     lignin;
        slate
        (
            { component phenol;                massPerKgFeed ( 0.05 0.15 ); origin assumed; reason "kg phenolics per kg lignin by catalytic depolymerisation/hydrodeoxygenation; the curator's band"; }
            { component benzene;               massPerKgFeed ( 0.03 0.1 ); origin assumed; reason "the curator's band"; }
            { component toluene;               massPerKgFeed ( 0.03 0.1 ); origin assumed; reason "the curator's band"; }
            { component mixedXylenes;          massPerKgFeed ( 0.02 0.08 ); origin assumed; reason "the curator's band"; }
        );
        provenance
        (
            { source zakzeski2010; locus "catalytic depolymerisation and hydrodeoxygenation of lignin to aromatics and phenolics"; }
            { source iea2018; locus "ch. 5, bio-based aromatics"; }
        );
    }

    {
        name     propaneDehydrogenation;
        kind     reaction;
        target   propylene;
        family   dehydrogenation;
        era      transition;
        description "On-purpose propylene: when ethane crackers stopped forcing propylene, propane dehydrogenation (Oleflex, Catofin) was built to make it alone -- fossil, but the structural answer to a root whose co-product was lost.  Endothermic, equilibrium-limited, hydrogen as co-product.";
        stoichiometry
        (
            { component propane;               nu -1; }
            { component propylene;             nu 1; }
            { component H2;                    nu 1; }
        );
        yield
        {
            basis   carbon;
            band    ( 0.85 0.92 );
            origin  assumed;
            reason  "Pt-Sn (Oleflex) or Cr2O3 (Catofin), 550-650 C, 30-40 % per pass, selectivity 85-92 %; the curator's band";
        }
        provenance
        (
            { source sattler2014; locus "catalytic dehydrogenation of propane"; }
            { source amghizar2017; locus "on-purpose propylene"; }
        );
    }

    {
        name     ethanolToEthylAcetateDehydrogenative;
        kind     reaction;
        target   ethylAcetate;
        family   dehydrogenation;
        era      transition;
        description "Ethyl acetate from ethanol alone (Cu catalyst, hydrogen co-product): a bio-ethanol route to an ester that otherwise needs acetic acid.";
        stoichiometry
        (
            { component ethanol;               nu -2; }
            { component ethylAcetate;          nu 1; }
            { component H2;                    nu 2; }
        );
        yield
        {
            basis   carbon;
            band    ( 0.9 0.95 );
            origin  assumed;
            reason  "Cu-catalysed dehydrogenative coupling of bio-ethanol; the curator's band";
        }
        provenance
        (
            { source ullmanns; locus "'Acetic Acid' -- esters; the ethanol dehydrogenation route"; }
        );
    }

    {
        name     glycerolToEpichlorohydrin;
        kind     reaction;
        target   epichlorohydrin;
        family   chlorination;
        era      transition;
        description "Epichlorohydrin from biodiesel glycerol by hydrochlorination (Solvay Epicerol): the bio alternative to the allyl chloride route, consuming HCl instead of Cl2 -- the chlorine still enters, but as the acid the chlorinations struggle to place.";
        stoichiometry
        (
            { component glycerol;              nu -1; }
            { component HCl;                   nu -2; }
            { component NaOH;                  nu -1; }
            { component epichlorohydrin;       nu 1; }
            { component NaCl;                  nu 1; }
            { component water;                 nu 3; }
        );
        yield
        {
            basis   carbon;
            band    ( 0.85 0.92 );
            origin  assumed;
            reason  "glycerol hydrochlorination to the dichloropropanols, then dehydrochlorination (Epicerol); the curator's band";
        }
        provenance
        (
            { source ullmanns; locus "'Epoxides'"; }
        );
    }

    {
        name     olefinMetathesis;
        kind     reaction;
        target   propylene;
        family   isomerisation;
        era      transition;
        description "Olefin metathesis (OCT): ethylene + 2-butene to two propylenes over WO3 -- the on-purpose propylene of the ethane-cracker era, converting the slate's surplus into the olefin it no longer forces.";
        stoichiometry
        (
            { component ethylene;              nu -1; }
            { component 1Butene;               nu -1; }
            { component propylene;             nu 2; }
        );
        yield
        {
            basis   carbon;
            band    ( 0.9 0.95 );
            origin  assumed;
            reason  "WO3/silica metathesis of ethylene with 2-butene (the 1-butene isomerised in situ), near-equilibrium with recycle; the curator's band";
        }
        provenance
        (
            { source amghizar2017; locus "on-purpose propylene by metathesis"; }
            { source ullmanns; locus "'Propene'"; }
        );
    }

    {
        name     ethanolDehydrogenation;
        kind     reaction;
        target   acetaldehyde;
        family   dehydrogenation;
        era      transition;
        description "Acetaldehyde by ethanol dehydrogenation (or oxidative dehydrogenation over Ag): the bio-ethanol entry to the acetyl chain, and the route that preceded Wacker.";
        stoichiometry
        (
            { component ethanol;               nu -1; }
            { component acetaldehyde;          nu 1; }
            { component H2;                    nu 1; }
        );
        yield
        {
            basis   carbon;
            band    ( 0.9 0.95 );
            origin  assumed;
            reason  "Cu or Ag catalysed, 90-95 % selectivity; the curator's band";
        }
        provenance
        (
            { source ullmanns; locus "'Acetaldehyde' -- the ethanol route"; }
            { source weissermelArpe2003; locus "ch. 7, 'Acetaldehyde'"; }
        );
    }

    {
        name     lebedevButadiene;
        kind     reaction;
        target   13Butadiene;
        family   dehydration;
        era      transition;
        description "The Lebedev process: ethanol to butadiene in one step -- the butadiene of the wartime synthetic-rubber programmes and the bio route to the C4 root, which is otherwise the hardest to replace because nothing makes it on purpose.";
        stoichiometry
        (
            { component ethanol;               nu -2; }
            { component 13Butadiene;           nu 1; }
            { component water;                 nu 2; }
            { component H2;                    nu 1; }
        );
        yield
        {
            basis   carbon;
            band    ( 0.55 0.7 );
            origin  assumed;
            reason  "Lebedev one-step (MgO/SiO2) or Ostromislensky two-step, butadiene selectivity 55-70 %; the curator's band";
        }
        provenance
        (
            { source weissermelArpe2003; locus "ch. 5, '1,3-Diolefins' -- butadiene from ethanol"; }
            { source ullmanns; locus "'Butadiene'"; }
        );
    }

    {
        name     biodieselTransesterification;
        kind     reaction;
        target   methylOleate;
        family   esterification;
        era      transition;
        description "Vegetable oil + methanol to FAME biodiesel with ONE glycerol per triglyceride forced (about 10 % by mass) -- the forced co-product that made glycerol cheap and opened the Epicerol route.  Three roots: a bio-oil, methanol and (downstream) chlorine.";
        stoichiometry
        (
            { component triolein;              nu -1; }
            { component methanol;              nu -3; }
            { component methylOleate;          nu 3; }
            { component glycerol;              nu 1; }
        );
        yield
        {
            basis   carbon;
            band    ( 0.95 0.99 );
            origin  assumed;
            reason  "base-catalysed transesterification, > 98 % conversion; the curator's band";
        }
        provenance
        (
            { source huber2006; locus "biodiesel by transesterification and its glycerol"; }
            { source ullmanns; locus "'Fatty Acid Methyl Esters'"; }
        );
    }

    {
        name     biomassHydrolysis;
        kind     processYield;
        target   glucose;
        family   hydration;
        era      transition;
        description "Pretreatment and enzymatic hydrolysis of lignocellulose to fermentable sugars, leaving lignin: the second-generation (non-food) sugar platform.";
        feed     biomass;
        slate
        (
            { component glucose;               massPerKgFeed ( 0.3 0.45 ); origin assumed; reason "kg fermentable sugars per kg dry lignocellulose after pretreatment and enzymatic hydrolysis; the curator's band"; }
            { component lignin;                massPerKgFeed ( 0.15 0.3 ); origin assumed; reason "kg lignin per kg dry wood, the residue of hydrolysis; the curator's band"; }
        );
        provenance
        (
            { source huber2006; locus "pretreatment and hydrolysis of lignocellulose"; }
            { source zakzeski2010; locus "lignin as the hydrolysis residue"; }
        );
    }

    {
        name     glucoseFermentationEthanol;
        kind     reaction;
        target   ethanol;
        family   fermentation;
        era      transition;
        description "Glucose fermented by yeast: the cellulosic ethanol of the second-generation biorefinery -- the same ethanol, the same CO2 co-product.";
        stoichiometry
        (
            { component glucose;               nu -1; }
            { component ethanol;               nu 2; }
            { component CO2;                   nu 2; }
        );
        yield
        {
            basis   carbon;
            band    ( 0.6 0.65 );
            origin  assumed;
            reason  "two-thirds of the sugar carbon by stoichiometry, 90-95 % of that in practice; the curator's band";
        }
        cases    ( "tutorials/plant/ChemicalPlantTutorial" );
        provenance
        (
            { source huber2006; locus "ethanol fermentation"; }
        );
    }

    {
        name     glucoseFermentationLactic;
        kind     reaction;
        target   lacticAcid;
        family   fermentation;
        era      transition;
        description "Glucose to lactic acid with NO carbon lost by stoichiometry -- the platform chemical of PLA.";
        stoichiometry
        (
            { component glucose;               nu -1; }
            { component lacticAcid;            nu 2; }
        );
        yield
        {
            basis   carbon;
            band    ( 0.85 0.95 );
            origin  assumed;
            reason  "homofermentative lactic acid bacteria, 85-95 % on sugar; the curator's band";
        }
        provenance
        (
            { source huber2006; locus "the sugar platform chemicals"; }
        );
    }

    {
        name     lacticAcidPolymerisation;
        kind     reaction;
        target   PLA;
        family   polymerisation;
        era      transition;
        description "Poly(lactic acid) by condensation to the lactide and ring-opening polymerisation: the bio-based, compostable polyester.  Written per repeat unit.";
        stoichiometry
        (
            { component lacticAcid;            nu -1; }
            { component PLA;                   nu 1; }
            { component water;                 nu 1; }
        );
        yield
        {
            basis   carbon;
            band    ( 0.9 0.97 );
            origin  assumed;
            reason  "via the lactide and ring-opening polymerisation; the curator's band";
        }
        provenance
        (
            { source ullmanns; locus "'Polyesters'"; }
        );
    }
);
`,zn=`/*---------------------------------------------------------------------------*\\
       \\|/       C hemicals     | Open-source, glass-box chemical process simulator
      \\\\|//      H eat-transfer | https://choupo.org
     \\\\\\|///     O perations    |
      \\\\|//      U nits         | Copyright (C) 2026 Vítor Geraldes
       \\|/       P roperties    | Licence: GPL-3.0-or-later
        |        O ptimization  |
       /|\\                      |
-------------------------------------------------------------------------------
License
    This file is part of Choupo.

    Choupo is free software: you can redistribute it and/or modify it
    under the terms of the GNU General Public License as published
    by the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    Choupo is distributed in the hope that it will be useful, but WITHOUT
    ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or
    FITNESS FOR A PARTICULAR PURPOSE.  See the GNU General Public
    License for more details (https://www.gnu.org/licenses/gpl-3.0.html).

    SPDX-License-Identifier: GPL-3.0-or-later

    Credit and attribution: see AUTHORS
    Required legal notices:  see NOTICE
\\*---------------------------------------------------------------------------*/

#include "thermo/AtomicWeights.H"

#include <map>

namespace Choupo {

scalar atomicWeight(const std::string& symbol)
{
    // IUPAC/CIAAW 2021 conventional values [kg/kmol]; D/T isotopic masses.
    static const std::map<std::string, scalar> k = {
        { "H", 1.008 }, { "D", 2.01410177812 }, { "T", 3.01604928 },
        { "He", 4.002602 }, { "Li", 6.94 }, { "Be", 9.0121831 },
        { "B", 10.81 }, { "C", 12.011 }, { "N", 14.007 }, { "O", 15.999 },
        { "F", 18.998403162 }, { "Ne", 20.1797 }, { "Na", 22.98976928 },
        { "Mg", 24.305 }, { "Al", 26.9815384 }, { "Si", 28.085 },
        { "P", 30.973761998 }, { "S", 32.06 }, { "Cl", 35.45 },
        { "Ar", 39.95 }, { "K", 39.0983 }, { "Ca", 40.078 },
        { "Sc", 44.955907 }, { "Ti", 47.867 }, { "V", 50.9415 },
        { "Cr", 51.9961 }, { "Mn", 54.938043 }, { "Fe", 55.845 },
        { "Co", 58.933194 }, { "Ni", 58.6934 }, { "Cu", 63.546 },
        { "Zn", 65.38 }, { "Ga", 69.723 }, { "Ge", 72.630 },
        { "As", 74.921595 }, { "Se", 78.971 }, { "Br", 79.904 },
        { "Kr", 83.798 }, { "Rb", 85.4678 }, { "Sr", 87.62 },
        { "Y", 88.905838 }, { "Zr", 91.222 }, { "Nb", 92.90637 },
        { "Mo", 95.95 }, { "Tc", 97.0 }, { "Ru", 101.07 },
        { "Rh", 102.90549 }, { "Pd", 106.42 }, { "Ag", 107.8682 },
        { "Cd", 112.414 }, { "In", 114.818 }, { "Sn", 118.710 },
        { "Sb", 121.760 }, { "Te", 127.60 }, { "I", 126.90447 },
        { "Xe", 131.293 }, { "Cs", 132.90545196 }, { "Ba", 137.327 },
        { "La", 138.90547 }, { "Ce", 140.116 }, { "Pr", 140.90766 },
        { "Nd", 144.242 }, { "Pm", 145.0 }, { "Sm", 150.36 },
        { "Eu", 151.964 }, { "Gd", 157.249 }, { "Tb", 158.925354 },
        { "Dy", 162.500 }, { "Ho", 164.930329 }, { "Er", 167.259 },
        { "Tm", 168.934219 }, { "Yb", 173.045 }, { "Lu", 174.9668 },
        { "Hf", 178.486 }, { "Ta", 180.94788 }, { "W", 183.84 },
        { "Re", 186.207 }, { "Os", 190.23 }, { "Ir", 192.217 },
        { "Pt", 195.084 }, { "Au", 196.966570 }, { "Hg", 200.592 },
        { "Tl", 204.38 }, { "Pb", 207.2 }, { "Bi", 208.98040 },
        { "Po", 209.0 }, { "At", 210.0 }, { "Rn", 222.0 },
        { "Fr", 223.0 }, { "Ra", 226.0 }, { "Ac", 227.0 },
        { "Th", 232.0377 }, { "Pa", 231.03588 }, { "U", 238.02891 },
        { "Np", 237.0 }, { "Pu", 244.0 }, { "Am", 243.0 },
        { "Cm", 247.0 }, { "Bk", 247.0 }, { "Cf", 251.0 },
        { "Es", 252.0 }, { "Fm", 257.0 }, { "Md", 258.0 },
        { "No", 259.0 }, { "Lr", 262.0 }, { "Rf", 267.0 },
        { "Db", 268.0 }, { "Sg", 269.0 }, { "Bh", 270.0 },
        { "Hs", 269.0 }, { "Mt", 278.0 }, { "Ds", 281.0 },
        { "Rg", 282.0 }, { "Cn", 285.0 }, { "Nh", 286.0 },
        { "Fl", 289.0 }, { "Mc", 290.0 }, { "Lv", 293.0 },
        { "Ts", 294.0 }, { "Og", 294.0 } };
    auto it = k.find(symbol);
    return it == k.end() ? 0.0 : it->second;
}

} // namespace Choupo
`,y=e=>typeof e=="string"?e:typeof e=="number"?String(e):"",B=e=>typeof e=="number"&&Number.isFinite(e)?e:null,T=e=>Array.isArray(e)?e.filter(o=>typeof o=="object"&&o!==null&&!Array.isArray(o)):[],$=e=>Array.isArray(e)?e.map(o=>y(o)).filter(o=>o!==""):typeof e=="string"&&e!==""?[e]:[];function Dn(e){if(!Array.isArray(e)||e.length!==2)return null;const o=B(e[0]),i=B(e[1]);return o===null||i===null||!(o>0)||o>i?null:{lo:o,hi:i}}const Bn=e=>e==="assumed"||e==="literature"?e:null;function Fn(e){const o=new Map;for(const i of e.matchAll(/\{\s*"([A-Z][a-z]?)"\s*,\s*([0-9.]+)\s*\}/g))o.set(i[1],parseFloat(i[2]));return o}function U(e){const o=e.trim().split(/\s+/)[0]??"";if(o==="")return null;const i={};for(const a of o.split(/[:·]/)){let t=0;const r=/^(\d+(?:\.\d+)?)/.exec(a),l=r?parseFloat(r[1]):1;r&&(t=r[0].length);const s=()=>{const p={};for(;t<a.length&&a[t]!==")";)if(a[t]==="("){t++;const c=s();if(c===null||a[t]!==")")return null;t++;const b=/^\d+(?:\.\d+)?/.exec(a.slice(t)),h=b?parseFloat(b[0]):1;b&&(t+=b[0].length);for(const[g,m]of Object.entries(c))p[g]=(p[g]??0)+m*h}else{const c=/^([A-Z][a-z]?)(\d*(?:\.\d+)?)/.exec(a.slice(t));if(!c)return null;t+=c[0].length,p[c[1]]=(p[c[1]]??0)+(c[2]?parseFloat(c[2]):1)}return p},u=s();if(u===null||t!==a.length||Object.keys(u).length===0)return null;for(const[p,c]of Object.entries(u))i[p]=(i[p]??0)+c*l}return i}function nn(e,o){const i=U(e);if(i===null)return null;let a=0;for(const[t,r]of Object.entries(i)){const l=o.get(t);if(l===void 0)return null;a+=l*r}return a}function Rn(e){const o=vn(e);if(o===null)return null;let i;try{i=an(tn(o))}catch{return null}const a=B(i.MW);return{formula:y(i.formula),cas:y(i.CAS),MW:a!==null&&a>0?a:null}}function _n(e,o,i,a){const t=y(e.name);if(t==="")return a.push("a substance with no `name`"),null;const r=y(e.kind)||"molecule";if(r!=="molecule"&&r!=="polymer"&&r!=="lumped")return a.push(`substance ${t}: kind '${r}' is not molecule | polymer | lumped`),null;const l=y(e.label)||t,s=y(e.component);if(s!==""){const b=i(s);if(b===null)return a.push(`substance ${t}: names component '${s}', which the catalogue reader cannot read (no record, or it does not parse)`),null;const h=b.MW??(b.formula===""?null:nn(b.formula,o));return h===null?(a.push(`substance ${t}: component '${s}' declares no MW and no formula the element table can sum`),null):{name:t,label:l,component:s,kind:r,formula:b.formula||null,cas:b.cas||null,molarMass:h,massFrom:b.MW!==null?"component":"formula"}}const u=y(e.cas)||null;if(r==="lumped")return{name:t,label:l,component:null,kind:"lumped",formula:null,cas:u,molarMass:null,massFrom:"none"};const p=y(e.formula),c=p===""?null:nn(p,o);return c===null?(a.push(`substance ${t}: formula '${p||"absent"}' has no molar mass over the engine's atomic-weight table`),null):{name:t,label:l,component:null,kind:r,formula:p,cas:u,molarMass:c,massFrom:"formula"}}function W(e,o,i,a){const t=Dn(o[i]),r=Bn(o.origin);return t===null?(a.push(`${e}: \`${i}\` is not a band ( lo hi )`),null):r===null?(a.push(`${e}: \`origin\` must be assumed | literature`),null):{band:t,origin:r,reason:y(o.reason),locus:y(o.locus)}}function In(e,o,i){const a=y(e.name);if(a==="")return i.push(`${o}: a route with no \`name\``),null;const t=y(e.kind);if(t!=="reaction"&&t!=="separation"&&t!=="processYield")return i.push(`route ${a}: kind '${t}' is not reaction | separation | processYield`),null;const r=y(e.era);if(r!=="incumbent"&&r!=="transition")return i.push(`route ${a}: era '${r}' is not incumbent | transition`),null;const l=y(e.target),s=`route ${a}`,u=[];for(const g of T(e.stoichiometry)){const m=B(g.nu),x=y(g.component);if(m===null||m===0||x==="")return i.push(`${s}: a stoichiometry term needs a component and a nonzero nu`),null;u.push({component:x,nu:m})}let p=null;const c=e.yield;if(typeof c=="object"&&c!==null&&!Array.isArray(c)){const g=W(`${s} yield`,c,"band",i);if(g===null)return null;p={basis:y(c.basis),...g}}const b=[];for(const g of T(e.slate)){const m=W(`${s} slate`,g,"massPerKgFeed",i);if(m===null)return null;b.push({component:y(g.component),massPerKgFeed:m.band,origin:m.origin,reason:m.reason,locus:m.locus})}const h=[];for(const g of T(e.energy)){const m=W(`${s} energy`,g,"band",i);if(m===null)return null;h.push({route:y(g.route),band:m.band,unit:y(g.unit),origin:m.origin,reason:m.reason,locus:m.locus})}return t==="reaction"&&(u.length===0||p===null)?(i.push(`${s}: a reaction needs a stoichiometry and a yield`),null):t==="separation"&&(p===null||y(e.feed)==="")?(i.push(`${s}: a separation needs a feed and a mass yield`),null):t==="processYield"&&(b.length===0||y(e.feed)==="")?(i.push(`${s}: a process yield needs a feed and a slate`),null):{name:a,kind:t,target:l,family:y(e.family),era:r,description:y(e.description),stoichiometry:u,feed:y(e.feed)||null,slate:b,yield:p,energy:h,cycle:y(e.cycle)||null,cases:$(e.cases),provenance:T(e.provenance).map(g=>({source:y(g.source),locus:y(g.locus)})),file:o}}function Gn(e){const o=[],i=Fn(e.atomicWeightsCpp),a=e.component??Rn;let t=null;const r=[];for(const m of e.files){let x;try{x=an(tn(m.text))}catch(H){o.push(`${m.stem}: does not parse (${H.message})`);continue}const v=y(x.recordType);v==="routeGraph"?t!==null?o.push(`${m.stem}: a second routeGraph header`):t=x:v==="productionRoutes"?r.push({stem:m.stem,j:x}):o.push(`${m.stem}: recordType '${v}' is neither routeGraph nor productionRoutes`)}t===null&&(o.push("no `recordType routeGraph` header among the records"),t={});const l=[],s=new Set;for(const m of T(t.substances)){const x=_n(m,i,a,o);if(x!==null){if(s.has(x.name)){o.push(`substance ${x.name} declared twice`);continue}s.add(x.name),l.push(x)}}const u=T(t.roots).map(m=>({name:y(m.name),group:y(m.group)==="inorganic"?"inorganic":"organic",members:$(m.members),label:y(m.label)||y(m.name)})),p=T(t.sources).map(m=>({id:y(m.name),citation:y(m.citation),url:y(m.url),doi:y(m.doi),licence:y(m.licence),verification:y(m.verification),verificationNote:y(m.verificationNote)})),c=T(t.productionVolumes).map(m=>({substances:$(m.substances),value:B(m.value)??NaN,unit:y(m.unit),basis:y(m.basis),source:y(m.source),locus:y(m.locus)})),b=[],h=new Set;for(const m of r){y(m.j.graph)!==y(t.name)&&o.push(`${m.stem}: names graph '${y(m.j.graph)}', not the header's`);for(const x of T(m.j.routes)){const v=In(x,m.stem,o);if(v!==null){if(h.has(v.name)){o.push(`route ${v.name} declared twice`);continue}h.add(v.name),b.push(v)}}}const g=new Map(l.map(m=>[m.name,m]));for(const m of b){const x=[m.target,...m.feed?[m.feed]:[],...m.stoichiometry.map(v=>v.component),...m.slate.map(v=>v.component)];for(const v of x)g.has(v)||o.push(`route ${m.name}: names '${v}', which is no substance`)}return{name:y(t.name),description:y(t.description),roots:u,families:T(t.processFamilies).map(m=>({name:y(m.name),meaning:y(m.meaning)})),sources:p,volumes:c,substances:l,routes:b,refusals:o,byName:g,routeByName:new Map(b.map(m=>[m.name,m])),sourceById:new Map(p.map(m=>[m.id,m])),weights:i}}const Ln=Object.assign({"../../../data/standards/routes/aromatics.dat":Tn,"../../../data/standards/routes/feedstocks.dat":Pn,"../../../data/standards/routes/graph.dat":jn,"../../../data/standards/routes/inorganic.dat":En,"../../../data/standards/routes/olefins.dat":Mn,"../../../data/standards/routes/syngas.dat":Nn,"../../../data/standards/routes/transition.dat":Sn}),Kn=Object.assign({"../../../src/thermo/AtomicWeights.cpp":zn}),Wn=e=>e.split("/").pop().replace(/\.dat$/,""),C=Gn({files:Object.entries(Ln).map(([e,o])=>({stem:Wn(e),text:o})).sort((e,o)=>e.stem.localeCompare(o.stem)),atomicWeightsCpp:Object.values(Kn)[0]??""}),X=(e,o)=>({lo:e.lo*o,hi:e.hi*o}),qn=(e,o)=>({lo:e.lo*o.lo,hi:e.hi*o.hi}),en=(e,o)=>({lo:e.lo+o.lo,hi:e.hi+o.hi}),q=e=>({lo:1/e.hi,hi:1/e.lo}),Y={lo:1,hi:1};function dn(e,o){const i=e.weights.get("C");if(i===void 0||o.formula===null||o.molarMass===null)return null;const t=U(o.formula)?.C??0;return t>0?t*i/o.molarMass:null}function R(e,o){return e.byName.get(o)?.molarMass??null}function mn(e,o){const i=[],a=(t,r)=>{const l=e.byName.get(t),s=l?dn(e,l):null;return s===null?{lo:0,hi:0}:X(r,s)};if(o.kind==="reaction"&&o.yield){const t=o.stoichiometry.find(l=>l.component===o.target),r=R(e,o.target);if(!t||r===null)return i;for(const l of o.stoichiometry){if(l.nu>=0)continue;const s=R(e,l.component);if(s===null)continue;const u=-l.nu*s/(t.nu*r),p=X(q(o.yield.band),u);i.push({component:l.component,nu:-l.nu/t.nu,kgPerKgTarget:p,carbonKgPerKgTarget:a(l.component,p)})}}else if(o.kind==="separation"&&o.yield&&o.feed){const t=q(o.yield.band);i.push({component:o.feed,nu:null,kgPerKgTarget:t,carbonKgPerKgTarget:a(o.feed,t)})}else if(o.kind==="processYield"&&o.feed){const t=o.slate.find(r=>r.component===o.target);if(t){const r=q(t.massPerKgFeed);i.push({component:o.feed,nu:null,kgPerKgTarget:r,carbonKgPerKgTarget:a(o.feed,r)})}}return i}function Vn(e,o){const i=[];if(o.kind==="reaction"){const a=o.stoichiometry.find(r=>r.component===o.target),t=R(e,o.target);if(!a||t===null)return i;for(const r of o.stoichiometry){if(r.nu<=0)continue;const l=R(e,r.component);if(l===null)continue;const s=r.nu*l/(a.nu*t);i.push({component:r.component,isTarget:r.component===o.target,kgPerKgTarget:{lo:s,hi:s}})}}else if(o.kind==="processYield"){const a=o.slate.find(t=>t.component===o.target);if(!a)return i;for(const t of o.slate)i.push({component:t.component,isTarget:t.component===o.target,kgPerKgTarget:t.component===o.target?Y:{lo:t.massPerKgFeed.lo/a.massPerKgFeed.hi,hi:t.massPerKgFeed.hi/a.massPerKgFeed.lo}})}else i.push({component:o.target,isTarget:!0,kgPerKgTarget:Y});return i}const Z=(e,o)=>Vn(e,o).filter(i=>!i.isTarget);function $n(e,o){const i=e.byName.get(o);return!i||i.formula===null?0:U(i.formula)?.C??0}function Xn(e,o){if(o.kind!=="reaction")return null;const i=o.stoichiometry.find(r=>r.component===o.target),a=$n(e,o.target);if(!i||a===0)return null;const t=o.stoichiometry.find(r=>r.component==="H2");return!t||o.target==="H2"?0:-t.nu/(i.nu*a)}function Yn(e,o){return e.roots.find(i=>i.members.includes(o))??null}const E=(e,o)=>e.routes.filter(i=>i.target===o),_=(e,o)=>e.routes.filter(i=>i.feed===o||i.stoichiometry.some(a=>a.component===o&&a.nu<0)),J=(e,o)=>e.routes.filter(i=>i.target!==o&&(i.stoichiometry.some(a=>a.component===o&&a.nu>0)||i.slate.some(a=>a.component===o)));function Un(e,o){const i=E(e,o);return i.find(a=>a.era==="incumbent"&&a.cycle===null)??i.find(a=>a.cycle===null)??i[0]??null}function Zn(e,o){return Yn(e,o)!==null?"root":E(e,o).length===0?"feedstock":null}function Jn(e,o,i){const a=[],t=(s,u,p,c,b,h)=>{const g=E(e,s),m=i[s],x=m!==void 0?e.routeByName.get(m):void 0,v=Zn(e,s);let H=null,D="expanded";c.includes(s)?D="loop":x&&x.target===s?H=x:h||v===null?H=Un(e,s):D=v,H===null&&D==="expanded"&&(D=v??"feedstock");const K={key:b,substance:s,route:H,stop:D,need:u,alternatives:g,edge:p,coProducts:H?Z(e,H):[],children:[]};if(a.push(K),H!==null)for(const N of mn(e,H)){const bn=t(N.component,qn(u,N.kgPerKgTarget),{kgPerKgTarget:N.kgPerKgTarget,carbonKgPerKgTarget:N.carbonKgPerKgTarget,nu:N.nu},[...c,s],`${b}/${N.component}`,!1);K.children.push(bn)}return K},r=t(o,Y,null,[],o,!0),l=[];for(const s of a){if(s.stop==="expanded")continue;const u=dn(e,e.byName.get(s.substance)),p=u===null?{lo:0,hi:0}:X(s.need,u),c=l.find(b=>b.substance===s.substance&&b.stop===s.stop);c?(c.need=en(c.need,s.need),c.carbonKg=en(c.carbonKg,p)):l.push({substance:s.substance,stop:s.stop,need:s.need,carbonKg:p})}return{top:r,nodes:a,totals:l}}function un(e,o){const i=new Map([[o,0]]),a=[o];for(;a.length>0;){const l=a.shift();for(const s of _(e,l))i.has(s.target)||(i.set(s.target,i.get(l)+1),a.push(s.target))}const t=[...i.entries()].filter(([l])=>l!==o).map(([l,s])=>({substance:l,depth:s})).sort((l,s)=>l.depth-s.depth||l.substance.localeCompare(s.substance)),r=t.filter(l=>_(e,l.substance).length===0).map(l=>l.substance);return{reached:t,leaves:r}}const Qn=e=>e.routes.filter(o=>Z(e,o).length>0),ne=(e,o)=>[...E(e,o),...J(e,o).filter(i=>i.kind==="processYield")];function ee(e,o){const i=e.routes.filter(l=>o.members.includes(l.target)),a=new Set;for(const l of i){l.feed&&a.add(l.feed);for(const s of l.stoichiometry)s.nu<0&&a.add(s.component)}const t=[...a].map(l=>{const s=ne(e,l).filter(u=>!o.members.includes(u.target));return{reactant:l,incumbent:s.filter(u=>u.era==="incumbent"),transition:s.filter(u=>u.era==="transition")}}).filter(l=>l.transition.length>0),r=o.members.flatMap(l=>J(e,l)).filter((l,s,u)=>u.indexOf(l)===s);return{root:o,incumbent:i.filter(l=>l.era==="incumbent"),transition:i.filter(l=>l.era==="transition"),alsoYields:r,feeders:t}}function on(e){return e.transition.length>0?"root":e.alsoYields.some(o=>o.era==="transition")?"yield":e.feeders.length>0?"feeder":"none"}function oe(e){let o=0,i=0,a=0,t=0,r=0,l=0,s=0;const u=c=>{c==="assumed"?o++:i++};for(const c of e.routes){c.yield&&(a++,u(c.yield.origin),c.yield.origin==="assumed"&&l++);for(const b of c.slate)t++,u(b.origin),b.origin==="assumed"&&l++;for(const b of c.energy)r++,u(b.origin),b.origin==="assumed"&&s++}const p=e.routes.filter(c=>c.cases.length>0);return{substances:e.substances.length,routes:e.routes.length,roots:e.roots.length,organicRoots:e.roots.filter(c=>c.group==="organic").length,inorganicRoots:e.roots.filter(c=>c.group==="inorganic").length,incumbent:e.routes.filter(c=>c.era==="incumbent").length,transition:e.routes.filter(c=>c.era==="transition").length,bands:{total:o+i,assumed:o,literature:i,yields:a,slates:t,energies:r,yieldSlateAssumed:l,energyAssumed:s},casesLinked:new Set(p.flatMap(c=>c.cases)).size,routesWithCase:p.length,routesWithoutCase:e.routes.length-p.length}}function I(e){const o=t=>{if(t===0)return"0";const r=t>=100?0:t>=10?1:t>=1?2:t>=.1?3:4;return t.toFixed(r)},i=o(e.lo),a=o(e.hi);return i===a?i:`${i} to ${a}`}const P=On(ln);function hn(e){return e.replace(/^tutorials\//,"")}function ae(e){return`${typeof window<"u"?window.location.pathname:"/"}?case=${encodeURIComponent(hn(e))}`}const O=e=>C.byName.get(e)?.label??e;function M({children:e}){return n.jsx(w,{"data-pan-x":"",style:{width:"100%",overflowX:"auto"},children:n.jsx(d,{striped:!0,withTableBorder:!0,withColumnBorders:!0,fz:"xs",mt:6,children:e})})}function j({band:e,kind:o,reason:i}){const a=n.jsx("span",{"data-band-text":"",children:I(e)});return o==="stoichiometry"?n.jsx("span",{"data-band-kind":"stoichiometry",title:"stoichiometry alone, no yield band",children:a}):o==="literature"?n.jsx("span",{"data-band-kind":"literature",title:i,children:a}):n.jsx(xn,{withArrow:!0,multiline:!0,w:320,label:`The curator's estimate (origin assumed): ${i??""}`,children:n.jsxs("span",{"data-band-kind":"assumed",style:{borderBottom:"1px dashed currentColor",cursor:"help"},children:[a,n.jsx("sup",{style:{opacity:.7},children:" est."})]})})}function Q({route:e}){return e.cases.length===0?n.jsx(f,{span:!0,size:"xs",c:"dimmed","data-no-case":"",children:"no case yet"}):n.jsx(n.Fragment,{children:e.cases.map((o,i)=>n.jsxs("span",{children:[i>0&&", ",n.jsx(cn,{href:ae(o),target:"_blank",rel:"noopener noreferrer",size:"xs","data-case-link":o,children:hn(o)})]},o))})}function pn({era:e}){return n.jsx(sn,{size:"xs",variant:"light",color:e==="transition"?"teal":"gray",children:e})}function te({route:e}){return n.jsx(w,{children:e.provenance.map((o,i)=>{const a=C.sourceById.get(o.source);return n.jsxs(f,{size:"xs",c:"dimmed",children:[a?a.citation:o.source," -- ",o.locus,a?` [${a.licence}; ${a.verification}]`:""]},i)})})}function ie(){const e=k.useMemo(()=>C.roots.map(o=>{const i=new Set;for(const a of o.members)for(const t of un(C,a).reached)i.add(t.substance);for(const a of o.members)i.delete(a);return{root:o,reached:i.size}}),[]);return n.jsxs(w,{children:[n.jsx(A,{order:5,children:"The eleven roots, and how much hangs from each"}),n.jsx(z,{of:"page",note:"substances reachable from the root's members along the route arrows, counted from the records"}),n.jsxs(M,{children:[n.jsx(d.Thead,{children:n.jsxs(d.Tr,{children:[n.jsx(d.Th,{children:"root"}),n.jsx(d.Th,{children:"group"}),n.jsx(d.Th,{children:"members"}),n.jsx(d.Th,{children:"substances downstream"})]})}),n.jsx(d.Tbody,{children:e.map(({root:o,reached:i})=>n.jsxs(d.Tr,{"data-root-row":o.name,children:[n.jsx(d.Td,{children:o.label}),n.jsx(d.Td,{children:o.group}),n.jsx(d.Td,{children:o.members.map(O).join(", ")}),n.jsx(d.Td,{children:i})]},o.name))})]})]})}function re(e){const o={};let i=0;const a=l=>1+Math.max(0,...l.children.map(a)),t=a(e),r=(l,s)=>{let u;if(l.children.length===0)u=i++;else{const p=l.children.map(c=>r(c,s+1));u=p.reduce((c,b)=>c+b,0)/p.length}return o[l.key]={x:(t-1-s)*290,y:u*86},u};return r(e,0),o}const yn={expanded:"",root:"root",feedstock:"feedstock",loop:"loop (stops)"};function se({nodes:e,selected:o,onSelect:i}){const{rfNodes:a,rfEdges:t}=k.useMemo(()=>{const r=re(e[0]),l=e.map(u=>({id:u.key,position:r[u.key],draggable:!1,data:{label:n.jsxs("div",{style:{fontSize:12,lineHeight:1.25},children:[n.jsx("b",{children:O(u.substance)}),n.jsx("div",{style:{opacity:.75},children:u.stop==="expanded"?u.route.name:yn[u.stop]}),n.jsxs("div",{style:{opacity:.75},children:[I(u.need)," kg/kg product"]})]})},style:{width:210,padding:6,borderRadius:6,textAlign:"left",background:"var(--mantine-color-body)",color:"var(--mantine-color-text)",border:u.key===o?"2px solid var(--mantine-color-teal-6)":u.stop==="expanded"?"1px solid var(--mantine-color-gray-5)":"1px dashed var(--mantine-color-gray-6)"}})),s=e.flatMap(u=>u.children.map(p=>({id:`${p.key}->${u.key}`,source:p.key,target:u.key,label:`${I(p.edge.kgPerKgTarget)} kg/kg`,labelStyle:{fontSize:11},labelBgPadding:[4,2],markerEnd:{type:gn.ArrowClosed}})));return{rfNodes:l,rfEdges:s}},[e,o]);return n.jsx(w,{style:{height:380,border:"1px solid var(--mantine-color-default-border)",borderRadius:4},"data-depth-graph":"",children:n.jsx(fn,{nodes:a,edges:t,fitView:!0,nodesDraggable:!1,nodesConnectable:!1,minZoom:.2,onNodeClick:(r,l)=>i(l.id),children:n.jsx(Cn,{})})})}const ce=[{id:"pvc",label:"PVC from ethylene and chlorine",product:"PVC",choices:{},note:"ethylene and chlorine per kg of PVC, through vinyl chloride and dichloroethane"},{id:"phenol",label:"Phenol, and the acetone it forces",product:"phenol",choices:{},note:"the Hock route from benzene and propylene through cumene"},{id:"methanol-co2",label:"Methanol from CO2 and electrolytic H2",product:"methanol",choices:{methanol:"CO2toMethanol",H2:"waterElectrolysis"},note:"the transition path: CO2 + 3 H2, with the hydrogen from water"}];function le({initialProduct:e="PVC",initialChoices:o={}}){const[i,a]=k.useState(e),[t,r]=k.useState(o),[l,s]=k.useState(e),u=k.useMemo(()=>C.substances.filter(h=>E(C,h.name).length>0).map(h=>({value:h.name,label:`${h.label} (${h.name})`})).sort((h,g)=>h.label.localeCompare(g.label)),[]),p=k.useMemo(()=>Jn(C,i,t),[i,t]),c=p.nodes.find(h=>h.key===l)??p.top,b=(h,g)=>{a(h),r(g),s(h)};return n.jsxs(w,{"data-view":"depth",children:[n.jsx(A,{order:5,children:"View 1 -- Depth: from a product back to its roots"}),n.jsx(f,{size:"sm",c:"dimmed",mt:2,children:"Pick a product. Each box is a substance, each arrow a route, and the number on the arrow is the kilograms of that input per kilogram of what the route makes, as a band. The walk stops at a root, at a feedstock nothing in the graph makes, or on a loop. Click a box for the route behind it and the other ways to make it."}),n.jsxs(S,{mt:6,gap:"xs",align:"flex-end",children:[n.jsx(G,{label:"Product",size:"xs",searchable:!0,allowDeselect:!1,data:u,value:i,style:{width:360},onChange:h=>{h&&b(h,{})}}),ce.map(h=>n.jsx(L,{size:"compact-xs",variant:"light","data-worked":h.id,onClick:()=>b(h.product,h.choices),children:h.label},h.id))]}),n.jsxs(w,{mt:"sm",children:[n.jsx(z,{of:["page","assumption"],note:"mass = stoichiometry x molar mass (page, from the records), divided by the yield band (the curator's estimate)"}),n.jsx(se,{nodes:p.nodes,selected:c.key,onSelect:s})]}),n.jsxs(A,{order:6,mt:"sm",children:["Raw materials per kg of ",O(i)]}),n.jsxs(M,{children:[n.jsx(d.Thead,{children:n.jsxs(d.Tr,{children:[n.jsx(d.Th,{children:"substance"}),n.jsx(d.Th,{children:"where the walk stopped"}),n.jsx(d.Th,{children:"kg per kg product (band)"}),n.jsx(d.Th,{children:"of which carbon, kg (band)"})]})}),n.jsx(d.Tbody,{children:p.totals.map(h=>n.jsxs(d.Tr,{"data-total":h.substance,children:[n.jsx(d.Td,{children:O(h.substance)}),n.jsx(d.Td,{children:h.stop}),n.jsx(d.Td,{children:n.jsx(j,{band:h.need,kind:"assumed",reason:"the product of the yield bands of every route on the path"})}),n.jsx(d.Td,{children:h.carbonKg.hi>0?n.jsx(j,{band:h.carbonKg,kind:"assumed",reason:"the same band, times the carbon mass fraction of the substance"}):"-"})]},`${h.substance}/${h.stop}`))})]}),n.jsx(A,{order:6,mt:"sm",children:"Every edge, in order"}),n.jsxs(M,{children:[n.jsx(d.Thead,{children:n.jsxs(d.Tr,{children:[n.jsx(d.Th,{children:"input"}),n.jsx(d.Th,{children:"into"}),n.jsx(d.Th,{children:"route"}),n.jsx(d.Th,{children:"kg per kg of what the route makes"}),n.jsx(d.Th,{children:"forced co-products of the route (kg per kg)"})]})}),n.jsx(d.Tbody,{children:p.nodes.filter(h=>h.edge!==null).map(h=>{const g=p.nodes.find(m=>m.children.includes(h));return n.jsxs(d.Tr,{"data-edge":h.key,onClick:()=>s(h.key),style:{cursor:"pointer"},children:[n.jsx(d.Td,{children:O(h.substance)}),n.jsx(d.Td,{children:O(g.substance)}),n.jsx(d.Td,{children:g.route.name}),n.jsx(d.Td,{children:n.jsx(j,{band:h.edge.kgPerKgTarget,kind:g.route.yield?.origin??"assumed",reason:g.route.yield?.reason??g.route.slate.find(m=>m.component===g.substance)?.reason})}),n.jsx(d.Td,{children:g.coProducts.length===0?"none":g.coProducts.map(m=>`${O(m.component)} ${I(m.kgPerKgTarget)}`).join("; ")})]},h.key)})})]}),n.jsx(de,{node:c,choices:t,onChoose:(h,g)=>r({...t,[h]:g})})]})}function de({node:e,choices:o,onChoose:i}){const a=e.route;return n.jsxs(w,{mt:"sm",px:"sm",py:8,"data-node-detail":e.substance,style:{border:"1px solid var(--mantine-color-default-border)",borderRadius:4},children:[n.jsxs(f,{size:"sm",fw:600,children:[O(e.substance),n.jsxs(f,{span:!0,c:"dimmed",size:"xs",children:[" -- ",e.stop==="expanded"?"made here by":`the walk stops: ${yn[e.stop]}`]})]}),a&&n.jsxs(F,{gap:2,mt:4,children:[n.jsxs(S,{gap:6,children:[n.jsx(f,{size:"sm",ff:"monospace",children:a.name}),n.jsx(pn,{era:a.era}),n.jsx(sn,{size:"xs",variant:"outline",children:a.family})]}),n.jsx(f,{size:"xs",children:a.description}),a.yield&&n.jsxs(f,{size:"xs","data-yield-reason":"",children:["Yield on ",a.yield.basis,": ",n.jsx(j,{band:a.yield.band,kind:a.yield.origin,reason:a.yield.reason}),a.yield.origin==="assumed"?` -- the curator's estimate: ${a.yield.reason}`:` -- read from ${a.yield.locus}`]}),a.cycle&&n.jsxs(f,{size:"xs",c:"orange",children:["Declared cycle: ",a.cycle]}),n.jsxs(f,{size:"xs",children:["Choupo case: ",n.jsx(Q,{route:a})]}),n.jsx(te,{route:a})]}),e.alternatives.length>0&&n.jsxs(S,{gap:4,mt:6,children:[n.jsx(f,{size:"xs",c:"dimmed",children:"Make it by:"}),e.alternatives.map(t=>n.jsxs(L,{size:"compact-xs","data-alt":t.name,variant:o[e.substance]===t.name||!o[e.substance]&&a?.name===t.name?"filled":"default",onClick:()=>i(e.substance,t.name),children:[t.name," (",t.era,")"]},t.name))]})]})}function me({initialRoute:e="naphthaSteamCracking"}){const o=k.useMemo(()=>Qn(C),[]),[i,a]=k.useState(e),t=C.routeByName.get(i),r=k.useMemo(()=>{const s={component:t.target,isTarget:!0,kgPerKgTarget:{lo:1,hi:1}},u=Z(C,t);return[s,...u]},[t]),l=Math.max(...r.map(s=>s.kgPerKgTarget.hi));return n.jsxs(w,{mt:"md","data-view":"forced",children:[n.jsx(A,{order:6,children:"What a route makes whether the market wants it or not"}),n.jsx(f,{size:"sm",c:"dimmed",mt:2,children:"The target is what the route is built for; every other product is forced. Per kilogram of the target:"}),n.jsxs(S,{mt:6,gap:"xs",align:"flex-end",children:[n.jsx(G,{label:"Route",size:"xs",searchable:!0,allowDeselect:!1,value:i,style:{width:360},data:o.map(s=>({value:s.name,label:`${s.name} (${O(s.target)})`})),onChange:s=>{s&&a(s)}}),["naphthaSteamCracking","hockCleavage","chlorAlkaliElectrolysis"].map(s=>n.jsx(L,{size:"compact-xs",variant:"light",onClick:()=>a(s),children:s},s))]}),n.jsx(f,{size:"xs",mt:6,children:t.description}),n.jsx(z,{of:["page","assumption"],note:t.kind==="processYield"?"a slate: the curator's estimate of each share, so a band":"the stoichiometric ratio of molar masses, so a point, whatever the yield band"}),n.jsxs(M,{children:[n.jsx(d.Thead,{children:n.jsxs(d.Tr,{children:[n.jsx(d.Th,{children:"product"}),n.jsx(d.Th,{children:"role"}),n.jsx(d.Th,{children:"kg per kg of target"}),n.jsx(d.Th,{children:"size"})]})}),n.jsx(d.Tbody,{children:r.map(s=>{const u=t.slate.find(p=>p.component===s.component);return n.jsxs(d.Tr,{"data-output":s.component,"data-forced":s.isTarget?"no":"yes",children:[n.jsx(d.Td,{children:O(s.component)}),n.jsx(d.Td,{children:s.isTarget?"TARGET":"forced co-product"}),n.jsx(d.Td,{children:t.kind==="processYield"&&!s.isTarget?n.jsx(j,{band:s.kgPerKgTarget,kind:"assumed",reason:u?.reason??""}):n.jsx(j,{band:s.kgPerKgTarget,kind:"stoichiometry"})}),n.jsx(d.Td,{children:n.jsx(w,{style:{height:8,width:`${Math.max(2,100*s.kgPerKgTarget.hi/l)}%`,background:s.isTarget?"var(--mantine-color-teal-6)":"var(--mantine-color-orange-6)",borderRadius:2}})})]},s.component)})})]}),n.jsxs(f,{size:"xs",c:"dimmed",mt:4,children:["Route case: ",n.jsx(Q,{route:t})]})]})}function ue({initialSubstance:e="ethylene"}){const[o,i]=k.useState(e),a=k.useMemo(()=>C.substances.filter(c=>_(C,c.name).length>0||E(C,c.name).length>0).map(c=>({value:c.name,label:`${c.label} (${c.name})`})).sort((c,b)=>c.label.localeCompare(b.label)),[]),t=k.useMemo(()=>un(C,o),[o]),r=_(C,o),l=E(C,o),s=J(C,o),u=C.volumes.filter(c=>c.substances.includes(o)),p=k.useMemo(()=>{const c={};for(const b of t.reached)(c[b.depth]??=[]).push(b.substance);return c},[t]);return n.jsxs(w,{"data-view":"convergence",children:[n.jsx(A,{order:5,children:"View 2 -- Convergence and forced co-production"}),n.jsx(f,{size:"sm",c:"dimmed",mt:2,children:"Pick a root, a feedstock or any substance. The graph runs forwards: every route that consumes it, everything reachable from it, and the products at the leaves nothing else consumes."}),n.jsxs(S,{mt:6,gap:"xs",align:"flex-end",children:[n.jsx(G,{label:"Substance",size:"xs",searchable:!0,allowDeselect:!1,data:a,value:o,style:{width:360},onChange:c=>{c&&i(c)}}),["ethylene","propylene","benzene","CO","NH3","Cl2"].map(c=>n.jsx(L,{size:"compact-xs",variant:"light",onClick:()=>i(c),children:O(c)},c))]}),n.jsx(z,{of:"page",note:"counted from the records by walking the route arrows forwards"}),n.jsxs(f,{size:"sm",mt:4,"data-downstream-count":"",children:[n.jsx("b",{children:t.reached.length})," substances are reachable from ",O(o),";"," ",n.jsx("b",{children:t.leaves.length})," of them are leaves nothing else consumes;"," ","it is a reactant or feed of ",n.jsx("b",{children:r.length})," routes."]}),u.map(c=>n.jsxs(f,{size:"xs",c:"dimmed","data-volume":"",children:[c.value," ",c.unit," (",c.basis,") -- ",C.sourceById.get(c.source)?.citation??c.source,","," ",c.locus," [",C.sourceById.get(c.source)?.licence,"; read from a source]"]},c.locus)),n.jsxs(M,{children:[n.jsx(d.Thead,{children:n.jsxs(d.Tr,{children:[n.jsx(d.Th,{children:"steps away"}),n.jsx(d.Th,{children:"substances"})]})}),n.jsx(d.Tbody,{children:Object.entries(p).map(([c,b])=>n.jsxs(d.Tr,{children:[n.jsx(d.Td,{children:c}),n.jsx(d.Td,{children:b.map(O).join(", ")})]},c))})]}),n.jsxs(f,{size:"xs",mt:6,children:["Built for it by: ",l.length===0?"no route (a feedstock of the graph)":l.map(c=>`${c.name} (${c.era})`).join(", "),"."," ","Forced as a co-product of: ",s.length===0?"no route":s.map(c=>`${c.name} (built for ${O(c.target)})`).join(", "),"."]}),n.jsx(me,{})]})}const he={root:"a transition route builds the root itself",yield:"a transition route yields it as a co-product",feeder:"only a feeder is replaced; the root's own edge is unchanged",none:"no transition route recorded"};function V({route:e}){const o=Xn(C,e),i=mn(C,e);return n.jsxs(w,{px:"xs",py:6,"data-route-card":e.name,style:{border:"1px solid var(--mantine-color-default-border)",borderRadius:4},children:[n.jsxs(S,{gap:6,children:[n.jsx(f,{size:"xs",fw:600,ff:"monospace",children:e.name}),n.jsx(pn,{era:e.era})]}),n.jsxs(f,{size:"xs",children:[i.map(a=>O(a.component)).join(" + ")," ","->"," ",O(e.target),e.yield&&n.jsxs(n.Fragment,{children:["; yield ",n.jsx(j,{band:e.yield.band,kind:e.yield.origin,reason:e.yield.reason})]})]}),n.jsxs(f,{size:"xs","data-h2-per-carbon":o===null?"n/a":String(o),children:["H2 per carbon: ",o===null?"not defined (no stoichiometry or no carbon)":o===0?"none in this step (any hydrogen entered upstream)":o>0?`${o.toFixed(2)} (consumed)`:`${(-o).toFixed(2)} (released)`]}),e.energy.length===0?n.jsx(f,{size:"xs",c:"dimmed",children:"No energy figure recorded for this route."}):e.energy.map((a,t)=>n.jsxs(f,{size:"xs","data-energy-origin":a.origin,children:[a.route,": ",n.jsx(j,{band:a.band,kind:a.origin,reason:a.origin==="assumed"?a.reason:a.locus})," ",a.unit,a.origin==="literature"?` (read from ${a.locus})`:""]},t)),n.jsxs(f,{size:"xs",children:["Choupo case: ",n.jsx(Q,{route:e})]})]})}function pe({initialRoot:e="syngas"}){const[o,i]=k.useState(e),a=k.useMemo(()=>C.roots.map(r=>ee(C,r)),[]),t=a.find(r=>r.root.name===o)??a[0];return n.jsxs(w,{"data-view":"tree2050",children:[n.jsx(A,{order:5,children:"View 3 -- The tree of 2050: the roots, replaced"}),n.jsx(f,{size:"sm",c:"dimmed",mt:2,children:"For each root, the incumbent routes beside the transition routes. The message is in the last column of the overview: where the transition acts, it acts on the root or on its feeder, and the leaves do not move."}),n.jsx(z,{of:"page",note:"the record's era word, counted; H2 per carbon from the stoichiometry"}),n.jsxs(M,{children:[n.jsx(d.Thead,{children:n.jsxs(d.Tr,{children:[n.jsx(d.Th,{children:"root"}),n.jsx(d.Th,{children:"incumbent routes"}),n.jsx(d.Th,{children:"transition routes"}),n.jsx(d.Th,{children:"what the records say"})]})}),n.jsx(d.Tbody,{children:a.map(r=>n.jsxs(d.Tr,{"data-root-replacement":r.root.name,"data-replacement":on(r),onClick:()=>i(r.root.name),style:{cursor:"pointer"},children:[n.jsx(d.Td,{children:r.root.label}),n.jsx(d.Td,{children:r.incumbent.length}),n.jsx(d.Td,{children:r.transition.length}),n.jsx(d.Td,{children:he[on(r)]})]},r.root.name))})]}),n.jsx(G,{mt:"sm",label:"Root",size:"xs",allowDeselect:!1,style:{width:360},data:C.roots.map(r=>({value:r.name,label:r.label})),value:o,onChange:r=>{r&&i(r)}}),n.jsxs(w,{mt:6,style:{display:"grid",gap:12,gridTemplateColumns:"repeat(auto-fit, minmax(300px, 1fr))"},children:[n.jsxs(F,{gap:6,children:[n.jsx(f,{size:"xs",fw:700,tt:"uppercase",children:"incumbent"}),t.incumbent.length===0&&n.jsx(f,{size:"xs",c:"dimmed",children:"no route builds this root in the records"}),t.incumbent.map(r=>n.jsx(V,{route:r},r.name))]}),n.jsxs(F,{gap:6,children:[n.jsx(f,{size:"xs",fw:700,tt:"uppercase",children:"transition"}),t.transition.length===0&&n.jsx(f,{size:"xs",c:"dimmed","data-no-transition":"",children:"no transition route builds this root in the records"}),t.transition.map(r=>n.jsx(V,{route:r},r.name)),t.alsoYields.filter(r=>r.era==="transition").map(r=>n.jsxs(w,{children:[n.jsx(f,{size:"xs",c:"dimmed",children:"also yielded, not built for:"}),n.jsx(V,{route:r})]},r.name))]})]}),t.feeders.length>0&&n.jsxs(w,{mt:"sm","data-feeders":"",children:[n.jsx(f,{size:"sm",fw:600,children:"The feeders that change while the root's own edge stays"}),t.feeders.map(r=>n.jsxs(f,{size:"xs",children:[O(r.reactant),": now ",r.incumbent.map(l=>l.name).join(", ")||"-",";"," ","transition ",r.transition.map(l=>l.name).join(", "),"."]},r.reactant))]})]})}function ye(){const e=k.useMemo(()=>oe(C),[]);return n.jsxs(rn,{color:"yellow",variant:"light",title:"Read the numbers as estimates","data-honesty":"",children:["All ",n.jsx("b",{children:e.bands.yieldSlateAssumed})," yield and slate bands in this graph are the curator's estimates (",n.jsx("code",{children:"origin assumed"}),"), each with its reason one hover or click away; none was read back against a published table. ",e.bands.energyAssumed," of the ",e.bands.energies," ","energy figures are estimates too. The stoichiometry is checked atom by atom. The only figures read from a source are the IEA's"," ",C.volumes.length," production volumes and ",e.bands.literature," ammonia energy intensities. ",e.routesWithoutCase," of the ",e.routes," routes link no Choupo case yet, and say so."]})}function be(){return n.jsxs(w,{children:[n.jsx(A,{order:5,children:"Sources, with their licence and how well each is known"}),n.jsx(z,{of:"reference",note:"the graph header's own list; a source nobody cites fails the gate"}),n.jsxs(M,{children:[n.jsx(d.Thead,{children:n.jsxs(d.Tr,{children:[n.jsx(d.Th,{children:"id"}),n.jsx(d.Th,{children:"work"}),n.jsx(d.Th,{children:"licence"}),n.jsx(d.Th,{children:"verification"})]})}),n.jsx(d.Tbody,{children:C.sources.map(e=>n.jsxs(d.Tr,{"data-source":e.id,children:[n.jsx(d.Td,{children:e.id}),n.jsxs(d.Td,{children:[e.citation,e.url!==""&&n.jsxs(n.Fragment,{children:[" "," ",n.jsx(cn,{href:e.url,target:"_blank",rel:"noopener noreferrer",size:"xs",children:"link"})]}),e.verificationNote!==""&&n.jsx(f,{size:"xs",c:"dimmed",children:e.verificationNote})]}),n.jsx(d.Td,{children:e.licence}),n.jsx(d.Td,{children:e.verification})]},e.id))})]})]})}function Te(){return n.jsx(w,{style:{flex:1,minHeight:0,overflowY:"auto"},px:"md",py:"sm",children:n.jsxs(F,{gap:"md",style:{maxWidth:1040,margin:"0 auto"},children:[n.jsxs(w,{children:[n.jsx(A,{order:4,children:"The tree of chemistry"}),n.jsx(f,{size:"sm",c:"dimmed",mt:4,children:"Seven organic and four inorganic roots, one directed graph of the routes between them, and three ways to read it: depth, convergence and forced co-production, and the roots replaced."}),n.jsx(w,{mt:"sm",children:n.jsx(ye,{})})]}),C.refusals.length>0&&n.jsx(rn,{color:"red",title:"Records the reader could not use","data-refusals":"",children:C.refusals.map((e,o)=>n.jsx(f,{size:"xs",children:e},o))}),P(1),n.jsx(ie,{}),n.jsx(A,{order:4,children:"Reading a route"}),P(2),P(3),P(4),n.jsx(le,{}),n.jsx(A,{order:4,children:"Convergence and forced co-production"}),P(5),P(6),n.jsx(ue,{}),n.jsx(A,{order:4,children:"The roots, replaced"}),P(7),P(8),n.jsx(pe,{}),P(9),n.jsx(be,{}),n.jsx(wn,{title:"Check your understanding",questions:An,lesson:ln}),n.jsx(kn,{limits:Hn})]})})}export{ue as ConvergencePanel,le as DepthPanel,me as ForcedPanel,pe as TreeOf2050Panel,Te as TreeOfChemistryTool,hn as caseNameOf,re as layoutDepth};
