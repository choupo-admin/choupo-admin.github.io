import{gU as x,fU as e,e as m,b4 as y,bd as E,b9 as o,b7 as d,c as C,f as w,K as H,gh as G,eO as W}from"./index-CPlVcSlr.js";import{B as V,A as $,z as F,y as J,x as U,v as Y,u as Z,t as Q,s as ee,r as ae,q as te,p as ne,o as re,n as se,m as oe,k as ie,j as de,i as le,h as ce,g as he,f as pe,e as me,d as ue,c as ge,b as be,H as fe,G as ye,F as ve,E as _e,D as xe,C as Te,w as Ae,l as Ce,a as we,_ as ke}from"./zeolite5A-BF7wSGe9.js";import{b as L,a as Se,A as Pe}from"./adsorbentSelectionLesson-D4x2OzGg.js";import{b as z,P as je}from"./knobPanel-DxLv_ksb.js";import{d as _,a as He,L as Re,b as Ne,l as ze,T as Oe}from"./lessonQuiz-BM1fLfIa.js";import{A}from"./Accordion-DWE4U8oY.js";import{C as K}from"./Collapse-DWT6Lhp9.js";import"./Slider-0yNsDsJY.js";import"./chapters-QbG4ggv9.js";const B={perry:{id:"perry",short:"Perry 9th ed.",cite:"Green, D. W.; Southard, M. Z. (eds.) (2019). Perry's Chemical Engineers' Handbook, 9th ed. McGraw-Hill, Section 16, Adsorption and Ion Exchange.",file:"Handbooks-DataCompilations/perry-chemical-engineers-handbook-9ed.pdf",spread:!1},ruthven84:{id:"ruthven84",short:"Ruthven 1984",cite:"Ruthven, D. M. (1984). Principles of Adsorption and Adsorption Processes. Wiley, New York.",file:"Books/ruthven-principles-of-adsorption-and-adsorption-processes-1ed.pdf",spread:!1},ruthvenPSA:{id:"ruthvenPSA",short:"Ruthven, Farooq & Knaebel 1994",cite:"Ruthven, D. M.; Farooq, S.; Knaebel, K. S. (1994). Pressure Swing Adsorption. VCH, New York.",file:"Books/ruthven-pressure-swing-adsorption-1ed.pdf",spread:!0},wankat:{id:"wankat",short:"Wankat 2nd ed.",cite:"Wankat, P. C. (2007). Separation Process Engineering, 2nd ed. Prentice Hall, chapter 17, Adsorption, Chromatography and Ion Exchange.",file:"Books/wankat-separation-process-engineering-2ed.pdf",spread:!1}},s=(a,n,r)=>({src:"perry",page:a,pdfPage:n,what:r}),g=(a,n)=>({src:"ruthven84",page:String(a),pdfPage:a+20,what:n}),p=(a,n)=>({src:"ruthvenPSA",page:String(a),pdfPage:Math.floor((a+28)/2),what:n}),h=(a,n)=>({src:"wankat",page:String(a),pdfPage:a+31,what:n}),Ie=["activatedCarbon","zeolite3A","zeolite4A","zeolite5A","zeolite13X","silicaGel","activatedAlumina","carbonMolecularSieve"],b=[{id:"activatedCarbon",label:"Activated carbon",family:"amorphous carbon, micropores plus meso- and macropores",catalogue:"activatedCarbon",poreNm:{value:{range:[1,4],of:"average pore diameter, the shell-, petroleum-, peat-, lignite- and bituminous-coal-based rows"},cite:s("16-9",1454,"Table 16-5, Carbons, average pore diameter column")},poreAlt:[{value:"typical carbons: micropores (below 2 nm) 0.15-0.5 cm3/g, mesopores (2-50 nm) 0.02-0.1 cm3/g, macropores (above 50 nm) 0.2-0.5 cm3/g",cite:g(8,"Table 1.2, Pore sizes in typical activated carbons")},{value:"bimodal pore-size distribution, specific area 200-2000 m2/g",cite:p(20,"Table 2.3, Act. carbon row")}],polarity:{value:"hydrophobic",cite:s("16-7",1452,"Table 16-3, hydrophobic amorphous column: activated carbon")},bulkDensity:[{value:{range:[400,600],of:"bituminous-coal-based"},cite:s("16-9",1454,"Table 16-5, bulk dry density 0.40-0.60 kg/L")},{value:{range:[500,515],of:"gas-phase and liquid-phase (coal base) carbon, average"},cite:h(614,"Table 17-1, bulk density 515 and 500 kg/m3 (avg)")}],heats:[],reactivationC:{value:{range:[100,140],of:"gas-phase carbon, by steaming"},cite:h(614,"Table 17-1, Reactivation T row")},regeneration:[{value:"Steam regeneration, with slightly superheated steam near 130 deg C countercurrent to adsorption, is most commonly applied to carbon used for solvent recovery from gases.",cite:s("16-49",1494,"the paragraph on steam regeneration")},{value:"Carbon used in water treatment holds 1 to 5 kg of water per kg, so steam regeneration is not usual; spent carbon is sent to a kiln off the column, or discarded in small units.",cite:h(639,"the paragraph on liquid-phase carbon")}]},{id:"zeolite3A",label:"Zeolite 3A",family:"zeolite A, potassium form (KA)",catalogue:null,poreNm:{value:{range:[.3,.3],of:"pore diameter (nominal opening of KA)"},cite:s("16-9",1454,"Table 16-5, Type 3A (dehydration), average pore diameter; the nominal opening 0.3 nm for KA is stated on page 16-7")},poreAlt:[{value:"with K+ in place of Na+ only water and other very small molecules such as NH3 penetrate at an appreciable rate",cite:p(22,"text on the cation form of zeolite A")}],polarity:{value:"hydrophilic",cite:s("16-7",1452,"Table 16-3, hydrophilic structured column: 3A (KA)")},bulkDensity:[{value:{range:[620,680],of:"Type 3A"},cite:s("16-9",1454,"Table 16-5, bulk dry density 0.62-0.68 kg/L")},{value:{range:[670,740],of:"3A"},cite:h(614,"Table 17-1, bulk density 670-740 kg/m3")}],heats:[],reactivationC:{value:{range:[200,350],of:"the four molecular sieves 3A, 4A, 5A and 13X (one range for all)"},cite:h(614,"Table 17-1, Reactivation T row")},regeneration:[{value:"Temperature swing: 3A and pore-closed 4A dry reactive streams such as cracked gas, because they take water and exclude hydrocarbons.",cite:s("16-40",1485,"the TSA applications paragraph on drying")}]},{id:"zeolite4A",label:"Zeolite 4A",family:"zeolite A, sodium form (NaA)",catalogue:null,poreNm:{value:{range:[.4,.4],of:"pore diameter (nominal opening of NaA)"},cite:s("16-9",1454,"Table 16-5, Type 4A (dehydration); the nominal opening 0.4 nm for NaA is stated on page 16-7")},poreAlt:[{value:"the sodium cation partly blocks each window and reduces the effective aperture from about 4.4 to 3.8 angstrom (0.38 nm)",cite:g(13,"text on zeolite A, sodium form")}],polarity:{value:"hydrophilic",cite:s("16-7",1452,"Table 16-3, hydrophilic structured column: 4A (NaA)")},bulkDensity:[{value:{range:[610,670],of:"Type 4A"},cite:s("16-9",1454,"Table 16-5, bulk dry density 0.61-0.67 kg/L")},{value:{range:[660,720],of:"4A"},cite:h(614,"Table 17-1, bulk density 660-720 kg/m3")}],heats:[{sorbate:"O2",kcalPerMol:3.2,cite:p(32,"Table 2.4, O2 on 4A")},{sorbate:"N2",kcalPerMol:4.35,cite:p(32,"Table 2.4, N2 on 4A")}],reactivationC:{value:{range:[200,350],of:"the four molecular sieves 3A, 4A, 5A and 13X (one range for all)"},cite:h(614,"Table 17-1, Reactivation T row")},regeneration:[{value:"Temperature swing: 4A removes CO2 ahead of natural-gas liquefaction, and sulfur compounds from wellhead gas without co-adsorbing CO2.",cite:s("16-40",1485,"the TSA applications paragraphs")},{value:"4A is also named, with a carbon molecular sieve, for nitrogen from air by a pressure-swing cycle that exploits the faster diffusion of oxygen.",cite:p(85,"section 3.4, the only widely used PSA process based on kinetic selectivity")}]},{id:"zeolite5A",label:"Zeolite 5A",family:"zeolite A, calcium form (CaA)",catalogue:"zeolite5A",poreNm:{value:{range:[.5,.5],of:"pore diameter (nominal opening of CaA)"},cite:s("16-9",1454,"Table 16-5, Type 5A (separations); the nominal opening 0.5 nm for CaA is stated on page 16-7")},poreAlt:[{value:"the eight-ring window has a free diameter of about 4.3 angstrom and molecules up to about 5.0 angstrom penetrate it, hence the name 5A",cite:p(21,"text on zeolite A, calcium form")}],polarity:{value:"hydrophilic",cite:s("16-7",1452,"Table 16-3, hydrophilic structured column: 5A (CaA)")},bulkDensity:[{value:{range:[600,660],of:"Type 5A"},cite:s("16-9",1454,"Table 16-5, bulk dry density 0.60-0.66 kg/L")},{value:{range:[670,720],of:"5A"},cite:h(614,"Table 17-1, bulk density 670-720 kg/m3")}],heats:[{sorbate:"O2",kcalPerMol:3.3,cite:p(32,"Table 2.4, O2 on 5A")},{sorbate:"N2",kcalPerMol:5,cite:p(32,"Table 2.4, N2 on 5A")},{sorbate:"Ar",kcalPerMol:3.36,cite:p(32,"Table 2.4, Ar on 5A")},{sorbate:"NH3",kcalPerMol:25,cite:g(41,"Table 2.7, limiting heat of sorption on 5A")}],reactivationC:{value:{range:[200,350],of:"the four molecular sieves 3A, 4A, 5A and 13X (one range for all)"},cite:h(614,"Table 17-1, Reactivation T row")},regeneration:[{value:"Pressure swing: the IsoSiv process separates n-paraffins from branched and cyclic hydrocarbons by size, in one version with an inert hydrogen purge.",cite:s("16-43",1488,"the paragraphs on IsoSiv and on inert purge")}]},{id:"zeolite13X",label:"Zeolite 13X",family:"zeolite X, sodium form (NaX)",catalogue:"zeolite13X",poreNm:{value:{range:[1,1],of:"pore diameter (nominal opening of NaX)"},cite:s("16-9",1454,"Table 16-5, Type 13X (purification); the nominal opening 1.0 nm for NaX is stated on page 16-7")},poreAlt:[{value:"twelve-membered oxygen rings of free diameter about 7.5 angstrom; molecules up to about 8.5 angstrom penetrate with little steric hindrance",cite:p(22,"text on zeolites X and Y")}],polarity:{value:"hydrophilic",cite:s("16-7",1452,"Table 16-3, hydrophilic structured column: 13X (NaX)")},bulkDensity:[{value:{range:[580,640],of:"Type 13X"},cite:s("16-9",1454,"Table 16-5, bulk dry density 0.58-0.64 kg/L")},{value:{range:[610,710],of:"13X"},cite:h(614,"Table 17-1, bulk density 610-710 kg/m3")}],heats:[{sorbate:"N2",kcalPerMol:5,cite:g(41,"Table 2.6, N2 on NaX")},{sorbate:"CO2",kcalPerMol:10,cite:g(41,"Table 2.6, CO2 on NaX")},{sorbate:"H2O",kcalPerMol:18.5,cite:g(41,"Table 2.6, H2O on NaX")},{sorbate:"NH3",kcalPerMol:16,cite:g(41,"Table 2.6, NH3 on NaX")}],reactivationC:{value:{range:[200,350],of:"the four molecular sieves 3A, 4A, 5A and 13X (one range for all)"},cite:h(614,"Table 17-1, Reactivation T row")},regeneration:[{value:"Pressure swing in the enriching cycles the handbook describes: xenon concentrated 80 times from air, nitrogen from air as the heavy product, CO2 from a spacecraft cabin.",cite:s("16-43",1488,"the paragraphs on enriching and dual-reflux cycles")}]},{id:"silicaGel",label:"Silica gel",family:"amorphous silica, unimodal pores",catalogue:null,poreNm:{value:{range:[2,5],of:"average pore diameter"},cite:s("16-9",1454,"Table 16-5, Silica gel (drying, separations)")},poreAlt:[{value:"22 angstrom (2.2 nm) for the high-area gel and 140 angstrom (14 nm) for the low-area gel, both unimodal",cite:p(20,"Table 2.3, Silica gel (1) and (2)")}],polarity:{value:"hydrophilic",cite:s("16-7",1452,"Table 16-3, hydrophilic amorphous column: silica gel")},bulkDensity:[{value:{range:[700,820],of:"silica gel"},cite:s("16-9",1454,"Table 16-5, bulk dry density 0.70-0.82 kg/L")},{value:{range:[700,820],of:"silica gel (720 typical)"},cite:h(614,"Table 17-1, bulk density 700-820 kg/m3")}],heats:[],reactivationC:{value:{range:[120,280],of:"silica gel"},cite:h(614,"Table 17-1, Reactivation T row")},regeneration:[{value:"Regenerated at moderate temperature, 150-200 deg C; above 300 deg C most of the hydroxyls are lost and area and polarity fall.",cite:p(20,"text under Table 2.3")},{value:"Instrument-air dryers still use a pressure-swing cycle of the Skarstrom type with activated alumina or silica gel.",cite:s("16-42",1487,"the paragraph on the Skarstrom cycle")},{value:"The 1994 book says the opposite for PSA in general: silica gel is not commonly used in PSA processes because its physical strength is inferior to that of alumina or zeolite desiccants.  The two sources are shown, not reconciled.",cite:p(21,"text on silica gel")}]},{id:"activatedAlumina",label:"Activated alumina",family:"amorphous Al2O3, unimodal pores",catalogue:null,poreNm:{value:{range:[4,14],of:"average pore diameter, the high-porosity (drying, separations) row; the low-porosity fluoride sorbent is about 7 nm"},cite:s("16-9",1454,"Table 16-5, Aluminas")},poreAlt:[{value:"30-3000 angstrom (3-300 nm), unimodal, specific area 320 m2/g: the two books print different ranges",cite:p(20,"Table 2.3, Act. alumina row")}],polarity:{value:"hydrophilic",cite:s("16-7",1452,"Table 16-3, hydrophilic amorphous column: activated alumina")},bulkDensity:[{value:{range:[850,850],of:"high-porosity alumina"},cite:s("16-9",1454,"Table 16-5, bulk dry density 0.85 kg/L")},{value:{range:[800,800],of:"activated alumina, about"},cite:h(614,"Table 17-1, bulk density about 800 kg/m3")}],heats:[],reactivationC:{value:{range:[150,315],of:"activated alumina"},cite:h(614,"Table 17-1, Reactivation T row")},regeneration:[{value:"The pressure-swing air prepurification unit ahead of a cryogenic plant usually holds activated alumina and regenerates at ambient pressure with a nitrogen purge near 40 percent of the feed.",cite:s("16-43",1488,"the paragraph on PSA prepurification units")},{value:"Instrument-air dryers use a Skarstrom pressure-swing cycle with alumina or silica gel.",cite:s("16-42",1487,"the paragraph on the Skarstrom cycle")}]},{id:"carbonMolecularSieve",label:"Carbon molecular sieve",family:"amorphous carbon with a narrow micropore distribution",catalogue:null,poreNm:{value:{range:[.3,.6],of:"average pore diameter"},cite:s("16-9",1454,"Table 16-5, Carbon molecular sieve (air separation)")},poreAlt:[{value:"effective micropore diameters from about 4 to 9 angstrom (0.4-0.9 nm)",cite:g(8,"text on carbon molecular sieves")}],polarity:{value:"hydrophobic",cite:s("16-7",1452,"Table 16-3, hydrophobic structured column: carbon molecular sieves")},bulkDensity:[{value:{range:[500,700],of:"carbon molecular sieve"},cite:s("16-9",1454,"Table 16-5, bulk dry density 0.5-0.7 kg/L")}],heats:[{sorbate:"O2",kcalPerMol:3.8,cite:p(32,"Table 2.4, O2 on CMS")},{sorbate:"N2",kcalPerMol:3.8,cite:p(32,"Table 2.4, N2 on CMS")},{sorbate:"Ar",kcalPerMol:4,cite:p(32,"Table 2.4, Ar on CMS")}],reactivationC:null,regeneration:[{value:"Pressure swing, rate-selective: nitrogen from air, because oxygen diffuses in much faster than nitrogen although the equilibrium capacities differ little.",cite:s("16-5",1450,"Table 16-1, Rate row: nitrogen from air by PSA using carbon molecular sieve")}]}],X=4.184,qe={cite:h(640,"the paragraph before Eq. (17-25): the typical range of the heat of adsorption")},S={value:"for the small dipolar molecules H2O and NH3 on zeolite adsorbents the electrostatic contribution is very large and the heat of adsorption reaches 25-30 kcal/mol, a size generally associated with chemisorption",cite:g(30,"section 2.1, opening paragraph")},O=[{id:"drying",label:"Gas drying",phase:"gas",asks:"Take water from a gas down to a dew point the downstream plant can bear.",notes:[{value:"Zeolites, activated alumina and silica gel all dry pipeline natural gas; alumina and silica gel have the higher equilibrium capacity and are more easily regenerated with waste-level heat, and the low dew point a zeolite reaches matters when the feed goes to a cryogenic plant.  The zeolite type is not named there.",cite:s("16-40",1485,"the TSA applications paragraph on drying")}]},{id:"h2Psa",label:"Hydrogen purification (PSA)",phase:"gas",asks:"Take a 60-70 vol% hydrogen stream to a hydrogen of 99.9 vol% or more.",notes:[{value:"A typical bed has three layers of alumina, activated carbon and zeolites.  The impurities are water vapour, ammonia, carbon oxides, nitrogen, oxygen, methane and heavier hydrocarbons; the handbook does not say which layer takes which, and does not name the zeolite type.  Choupo's case psa01_h2_psa uses zeolite 5A, a choice of the case, not a statement of the handbook.",cite:s("16-42",1487,"the paragraph on hydrogen purification")}]},{id:"airSeparation",label:"Nitrogen and oxygen from air",phase:"gas",asks:"Split air into a nitrogen-rich or an oxygen-rich product by a pressure swing.",notes:[{value:"Oxygen of 85 to 95 percent purity: a LiLSX zeolite has been the preferred adsorbent since the mid-1980s.  Nitrogen up to 99.99 percent: zeolites and carbon molecular sieves in PSA and VSA.  LiX and LiLSX are not among the eight.",cite:s("16-43",1488,"the paragraph on ambient air separation")}]},{id:"vocRecovery",label:"Solvent and VOC recovery from air",phase:"gas",asks:"Remove organic vapours from an air stream, and recover them when it pays.",notes:[{value:"Reticulated styrene-type polymeric resins are in growing use for VOC removal from air; they are not among the eight.",cite:s("16-49",1494,"the end of the paragraph on steam regeneration")}]},{id:"waterTreatment",label:"Water and wastewater treatment",phase:"liquid",asks:"Remove dissolved organics, taste, odour or fluoride from water.",notes:[{value:"In wastewater treatment powdered activated carbon is dosed to enhance biological treatment and is not regenerated: it stays with the sludge.",cite:s("16-38",1483,"the paragraph on nonregenerative systems")}]}],R=[{sep:"drying",ads:"silicaGel",role:"dominant",why:"Cheaper than a zeolite and higher in capacity above about 10 mm Hg of water vapour, but it cannot dry the fluid as low; a silica gel layer at the feed end over a zeolite layer at the product end is common.",cite:h(615,"text on silica gel, section 17.1")},{sep:"drying",ads:"activatedAlumina",role:"dominant",why:"Competes with silica gel with a capacity a bit lower above about 1 mm Hg, but it is physically more robust and is not damaged by liquid water, which silica gel can be.",cite:h(615,"text on activated alumina, section 17.1")},{sep:"drying",ads:"zeolite3A",role:"named",why:"Takes water and excludes hydrocarbons, so reactive streams such as cracked gas are dried without losing product to co-adsorption.",cite:s("16-40",1485,"the TSA applications paragraph on drying")},{sep:"drying",ads:"zeolite4A",role:"named",why:"Pore-closed 4A does the same as 3A: water in, hydrocarbons out.",cite:s("16-40",1485,"the TSA applications paragraph on drying")},{sep:"h2Psa",ads:"activatedAlumina",role:"layer",why:"One of the three layers of a typical hydrogen PSA bed.",cite:s("16-42",1487,"the paragraph on hydrogen purification: layers of alumina, activated carbon and zeolites")},{sep:"h2Psa",ads:"activatedCarbon",role:"layer",why:"One of the three layers of a typical hydrogen PSA bed.",cite:s("16-42",1487,"the paragraph on hydrogen purification")},{sep:"h2Psa",ads:"carbonMolecularSieve",role:"named",why:"Layered beds of activated carbon, zeolite and carbon molecular sieve have also been used.",cite:s("16-42",1487,"the same paragraph, second sentence")},{sep:"airSeparation",ads:"carbonMolecularSieve",role:"dominant",why:"A rate-selective separation: little difference in equilibrium but oxygen diffuses in far faster, so the product at pressure is nitrogen.",cite:p(85,"section 3.4 and Figure 3.15: equilibrium and kinetic data on a carbon molecular sieve")},{sep:"airSeparation",ads:"zeolite4A",role:"named",why:"The same book names 4A, in the form of a modified 4A sieve, for the kinetic route to nitrogen.",cite:p(85,"section 3.4, first paragraph")},{sep:"airSeparation",ads:"zeolite5A",role:"named",why:"Equilibrium route to oxygen: the handbook lists oxygen from air by PSA using LiX and 5A zeolites, and says a LiLSX zeolite has been preferred for oxygen since the mid-1980s.  LiX and LiLSX are not among the eight.",cite:s("16-5",1450,"Table 16-1, Equilibrium row; and page 16-43")},{sep:"airSeparation",ads:"zeolite13X",role:"named",why:"Used in an enriching two-bed cycle that separated nitrogen from air as the heavy product, at an N2 recovery of 23.7 percent.",cite:s("16-43",1488,"the paragraph on enriching PSA cycles")},{sep:"vocRecovery",ads:"activatedCarbon",role:"dominant",why:"Steam regeneration is most commonly applied to carbon in solvent recovery; recovering the VOC from the regeneration stream pays between 500 and 15,000 ppm, and below about 500 ppm adsorption is followed by destruction.",cite:s("16-49",1494,"the paragraph on steam regeneration")},{sep:"waterTreatment",ads:"activatedCarbon",role:"dominant",why:"The largest application of liquid adsorption is carbon treating drinking water and wastewater; contaminant levels are very low and adsorption is strong, so a feed step can last months.",cite:h(639,"the paragraph on liquid-phase carbon")},{sep:"waterTreatment",ads:"activatedAlumina",role:"named",why:"Used in water treatment to remove excess fluoride selectively.",cite:h(615,"text on activated alumina, section 17.1; the handbook's Table 16-5, page 16-9, lists a low-porosity alumina as the fluoride sorbent")}];function Ee(){return Ie.map(a=>{const n=R.filter(r=>r.ads===a);return{id:a,count:new Set(n.map(r=>r.sep)).size,dominantIn:n.filter(r=>r.role==="dominant").length}}).sort((a,n)=>n.count-a.count||n.dominantIn-a.dominantIn)}function Le(a,n){return R.find(r=>r.sep===a&&r.ads===n)}function Ke(a,n,r){return a*n/r}function D(a){return a*X}function Be(a){if(!/^\s*kind\s+adsorbent\s*;/m.test(a))return null;const n=/^\s*name\s+([^;\s]+)\s*;/m.exec(a),r=/^\s*type\s+"([^"]*)"\s*;/m.exec(a),t=/^\s*rho_bulk\s+([0-9.eE+-]+)\s*;/m.exec(a);return!n||!r||!t?null:{name:n[1],type:r[1],rhoBulk:Number(t[1])}}function Xe(a){if(!/^\s*recordType\s+adsorptionIsotherm\s*;/m.test(a))return null;const n=/^\s*adsorbate\s+([^;\s]+)\s*;/m.exec(a),r=/^\s*model\s+([^;\s]+)\s*;/m.exec(a);if(!n||!r)return null;const t=l=>{const i=new RegExp(`^\\s*${l}\\s+([0-9.eE+-]+)\\s*;`,"m").exec(a);return i?Number(i[1]):null},c=/^\s*quality\s+([^;\s]+)\s*;/m.exec(a);return{adsorbate:n[1],model:r[1],dHads:t("dH_ads"),qMax:t("q_max"),quality:c?c[1]:"unstated"}}const De={activatedCarbon:[],zeolite5A:[{id:"steady/separation/psa01_h2_psa",why:"hydrogen recovery from reformer gas on a two-bed PSA"}],zeolite13X:[{id:"props/adsorption/isotherm01_eval_13x_co2",why:"the 13X isotherms evaluated for CO2, CH4, H2, N2 and O2"},{id:"batch/adsorber/batch13_breakthrough_co2",why:"a CO2 breakthrough through a fixed bed of 13X"}]},Me=`/*--------------------------------*- Choupo -*--------------------------------*\\
  Adsorption equilibrium record --- CH4 on activatedCarbon.

  What this IS: the pure-component adsorption isotherm of ONE
  (adsorbent x adsorbate) pair --- one record per pair, the pair catalogue of
  the adsorption tree (the file under data/standards/assets/ keeps the
  material's intrinsic identity only).  Single-site Langmuir,

      q = q_max * b(T) * p / (1 + b(T) * p)        [mol/kg, p in bar]

  with van't Hoff affinity anchored at tRef:

      b(T) = b_298 * exp( -dH_ads/R * (1/T - 1/tRef) ),   dH_ads < 0.

  The PSA assembles the COMPETITIVE (extended Langmuir) form across all the
  species records of the same adsorbent; a species with no record here
  adsorbs nothing and reports fully to the raffinate.

  CURATION: migrated 1:1 from data/standards/assets/activatedCarbon.dat
  isotherms{} 2026-07-12; numbers unchanged (order-of-magnitude 298 K
  TEACHING fits); re-fit from the primary source below is PENDING --- do not
  trust a design number before that re-fit.  Log: choupoSolve prints the
  competitive loadings per species in the PSA report table.
\\*-----------------------------------------------------------------------------*/

recordType      adsorptionIsotherm;
schemaVersion   1;

adsorbent       activatedCarbon;
adsorbate       CH4;

model           langmuir;

parameters
{
    q_max   6.5;      // saturation loading [mol/kg]
    b_298   0.22;     // affinity at tRef [1/bar]
    dH_ads  -18000;   // isosteric heat of adsorption [J/mol] (<0, exothermic)
}

tRef            298.15;               // van't Hoff anchor [K]
loadingBasis    molPerKgAdsorbent;    // q = mol adsorbate per kg adsorbent
pressureBasis   partialPressureBar;   // p = partial pressure in bar (b_298 per bar)
quality         teachingOnly;         // historical teaching anchor; not design-grade

provenance
{
    origin    assumed;
    method    "Reich, Ziegler & Rogers, Ind. Eng. Chem. Proc. Des. Dev. 19 (1980) 336 (BPL CO2/CH4/CO/N2/H2); Yang (1987/1997) -- representative 298 K teaching fits; re-fit from the primary before design use";
    curation  "migrated 1:1 from data/standards/assets/activatedCarbon.dat isotherms{} 2026-07-12; numbers unchanged; re-fit from the primary source pending";
}
`,Ge=`/*--------------------------------*- Choupo -*--------------------------------*\\
  Adsorption equilibrium record --- CO on activatedCarbon.

  What this IS: the pure-component adsorption isotherm of ONE
  (adsorbent x adsorbate) pair --- one record per pair, the pair catalogue of
  the adsorption tree (the file under data/standards/assets/ keeps the
  material's intrinsic identity only).  Single-site Langmuir,

      q = q_max * b(T) * p / (1 + b(T) * p)        [mol/kg, p in bar]

  with van't Hoff affinity anchored at tRef:

      b(T) = b_298 * exp( -dH_ads/R * (1/T - 1/tRef) ),   dH_ads < 0.

  The PSA assembles the COMPETITIVE (extended Langmuir) form across all the
  species records of the same adsorbent; a species with no record here
  adsorbs nothing and reports fully to the raffinate.

  CURATION: migrated 1:1 from data/standards/assets/activatedCarbon.dat
  isotherms{} 2026-07-12; numbers unchanged (order-of-magnitude 298 K
  TEACHING fits); re-fit from the primary source below is PENDING --- do not
  trust a design number before that re-fit.  Log: choupoSolve prints the
  competitive loadings per species in the PSA report table.
\\*-----------------------------------------------------------------------------*/

recordType      adsorptionIsotherm;
schemaVersion   1;

adsorbent       activatedCarbon;
adsorbate       CO;

model           langmuir;

parameters
{
    q_max   6.0;      // saturation loading [mol/kg]
    b_298   0.1;      // affinity at tRef [1/bar]
    dH_ads  -16000;   // isosteric heat of adsorption [J/mol] (<0, exothermic)
}

tRef            298.15;               // van't Hoff anchor [K]
loadingBasis    molPerKgAdsorbent;    // q = mol adsorbate per kg adsorbent
pressureBasis   partialPressureBar;   // p = partial pressure in bar (b_298 per bar)
quality         teachingOnly;         // historical teaching anchor; not design-grade

provenance
{
    origin    assumed;
    method    "Reich, Ziegler & Rogers, Ind. Eng. Chem. Proc. Des. Dev. 19 (1980) 336 (BPL CO2/CH4/CO/N2/H2); Yang (1987/1997) -- representative 298 K teaching fits; re-fit from the primary before design use";
    curation  "migrated 1:1 from data/standards/assets/activatedCarbon.dat isotherms{} 2026-07-12; numbers unchanged; re-fit from the primary source pending";
}
`,We=`/*--------------------------------*- Choupo -*--------------------------------*\\
  Adsorption equilibrium record --- CO2 on activatedCarbon.

  What this IS: the pure-component adsorption isotherm of ONE
  (adsorbent x adsorbate) pair --- one record per pair, the pair catalogue of
  the adsorption tree (the file under data/standards/assets/ keeps the
  material's intrinsic identity only).  Single-site Langmuir,

      q = q_max * b(T) * p / (1 + b(T) * p)        [mol/kg, p in bar]

  with van't Hoff affinity anchored at tRef:

      b(T) = b_298 * exp( -dH_ads/R * (1/T - 1/tRef) ),   dH_ads < 0.

  The PSA assembles the COMPETITIVE (extended Langmuir) form across all the
  species records of the same adsorbent; a species with no record here
  adsorbs nothing and reports fully to the raffinate.

  CURATION: migrated 1:1 from data/standards/assets/activatedCarbon.dat
  isotherms{} 2026-07-12; numbers unchanged (order-of-magnitude 298 K
  TEACHING fits); re-fit from the primary source below is PENDING --- do not
  trust a design number before that re-fit.  Log: choupoSolve prints the
  competitive loadings per species in the PSA report table.
\\*-----------------------------------------------------------------------------*/

recordType      adsorptionIsotherm;
schemaVersion   1;

adsorbent       activatedCarbon;
adsorbate       CO2;

model           langmuir;

parameters
{
    q_max   8.5;      // saturation loading [mol/kg]
    b_298   0.45;     // affinity at tRef [1/bar]
    dH_ads  -25000;   // isosteric heat of adsorption [J/mol] (<0, exothermic)
}

tRef            298.15;               // van't Hoff anchor [K]
loadingBasis    molPerKgAdsorbent;    // q = mol adsorbate per kg adsorbent
pressureBasis   partialPressureBar;   // p = partial pressure in bar (b_298 per bar)
quality         teachingOnly;         // historical teaching anchor; not design-grade

provenance
{
    origin    assumed;
    method    "Reich, Ziegler & Rogers, Ind. Eng. Chem. Proc. Des. Dev. 19 (1980) 336 (BPL CO2/CH4/CO/N2/H2); Yang (1987/1997) -- representative 298 K teaching fits; re-fit from the primary before design use";
    curation  "migrated 1:1 from data/standards/assets/activatedCarbon.dat isotherms{} 2026-07-12; numbers unchanged; re-fit from the primary source pending";
}
`,Ve=`/*--------------------------------*- Choupo -*--------------------------------*\\
  Adsorption equilibrium record --- H2 on activatedCarbon.

  What this IS: the pure-component adsorption isotherm of ONE
  (adsorbent x adsorbate) pair --- one record per pair, the pair catalogue of
  the adsorption tree (the file under data/standards/assets/ keeps the
  material's intrinsic identity only).  Single-site Langmuir,

      q = q_max * b(T) * p / (1 + b(T) * p)        [mol/kg, p in bar]

  with van't Hoff affinity anchored at tRef:

      b(T) = b_298 * exp( -dH_ads/R * (1/T - 1/tRef) ),   dH_ads < 0.

  The PSA assembles the COMPETITIVE (extended Langmuir) form across all the
  species records of the same adsorbent; a species with no record here
  adsorbs nothing and reports fully to the raffinate.

  CURATION: migrated 1:1 from data/standards/assets/activatedCarbon.dat
  isotherms{} 2026-07-12; numbers unchanged (order-of-magnitude 298 K
  TEACHING fits); re-fit from the primary source below is PENDING --- do not
  trust a design number before that re-fit.  Log: choupoSolve prints the
  competitive loadings per species in the PSA report table.
\\*-----------------------------------------------------------------------------*/

recordType      adsorptionIsotherm;
schemaVersion   1;

adsorbent       activatedCarbon;
adsorbate       H2;

model           langmuir;

parameters
{
    q_max   5.0;      // saturation loading [mol/kg]
    b_298   0.006;    // affinity at tRef [1/bar]
    dH_ads  -7000;    // isosteric heat of adsorption [J/mol] (<0, exothermic)
}

tRef            298.15;               // van't Hoff anchor [K]
loadingBasis    molPerKgAdsorbent;    // q = mol adsorbate per kg adsorbent
pressureBasis   partialPressureBar;   // p = partial pressure in bar (b_298 per bar)
quality         teachingOnly;         // historical teaching anchor; not design-grade

provenance
{
    origin    assumed;
    method    "Reich, Ziegler & Rogers, Ind. Eng. Chem. Proc. Des. Dev. 19 (1980) 336 (BPL CO2/CH4/CO/N2/H2); Yang (1987/1997) -- representative 298 K teaching fits; re-fit from the primary before design use";
    curation  "migrated 1:1 from data/standards/assets/activatedCarbon.dat isotherms{} 2026-07-12; numbers unchanged; re-fit from the primary source pending";
}
`,$e=`/*--------------------------------*- Choupo -*--------------------------------*\\
  Adsorption equilibrium record --- N2 on activatedCarbon.

  What this IS: the pure-component adsorption isotherm of ONE
  (adsorbent x adsorbate) pair --- one record per pair, the pair catalogue of
  the adsorption tree (the file under data/standards/assets/ keeps the
  material's intrinsic identity only).  Single-site Langmuir,

      q = q_max * b(T) * p / (1 + b(T) * p)        [mol/kg, p in bar]

  with van't Hoff affinity anchored at tRef:

      b(T) = b_298 * exp( -dH_ads/R * (1/T - 1/tRef) ),   dH_ads < 0.

  The PSA assembles the COMPETITIVE (extended Langmuir) form across all the
  species records of the same adsorbent; a species with no record here
  adsorbs nothing and reports fully to the raffinate.

  CURATION: migrated 1:1 from data/standards/assets/activatedCarbon.dat
  isotherms{} 2026-07-12; numbers unchanged (order-of-magnitude 298 K
  TEACHING fits); re-fit from the primary source below is PENDING --- do not
  trust a design number before that re-fit.  Log: choupoSolve prints the
  competitive loadings per species in the PSA report table.
\\*-----------------------------------------------------------------------------*/

recordType      adsorptionIsotherm;
schemaVersion   1;

adsorbent       activatedCarbon;
adsorbate       N2;

model           langmuir;

parameters
{
    q_max   6.0;      // saturation loading [mol/kg]
    b_298   0.08;     // affinity at tRef [1/bar]
    dH_ads  -14000;   // isosteric heat of adsorption [J/mol] (<0, exothermic)
}

tRef            298.15;               // van't Hoff anchor [K]
loadingBasis    molPerKgAdsorbent;    // q = mol adsorbate per kg adsorbent
pressureBasis   partialPressureBar;   // p = partial pressure in bar (b_298 per bar)
quality         teachingOnly;         // historical teaching anchor; not design-grade

provenance
{
    origin    assumed;
    method    "Reich, Ziegler & Rogers, Ind. Eng. Chem. Proc. Des. Dev. 19 (1980) 336 (BPL CO2/CH4/CO/N2/H2); Yang (1987/1997) -- representative 298 K teaching fits; re-fit from the primary before design use";
    curation  "migrated 1:1 from data/standards/assets/activatedCarbon.dat isotherms{} 2026-07-12; numbers unchanged; re-fit from the primary source pending";
}
`,Fe=`/*--------------------------------*- Choupo -*--------------------------------*\\
  Adsorption equilibrium record --- CH4 on zeolite13X.

  What this IS: the pure-component adsorption isotherm of ONE
  (adsorbent x adsorbate) pair --- one record per pair, the pair catalogue of
  the adsorption tree (the file under data/standards/assets/ keeps the
  material's intrinsic identity only).  Single-site Langmuir,

      q = q_max * b(T) * p / (1 + b(T) * p)        [mol/kg, p in bar]

  with van't Hoff affinity anchored at tRef:

      b(T) = b_298 * exp( -dH_ads/R * (1/T - 1/tRef) ),   dH_ads < 0.

  The PSA assembles the COMPETITIVE (extended Langmuir) form across all the
  species records of the same adsorbent; a species with no record here
  adsorbs nothing and reports fully to the raffinate.

  CURATION: migrated 1:1 from data/standards/assets/zeolite13X.dat
  isotherms{} 2026-07-12; numbers unchanged (order-of-magnitude 298 K
  TEACHING fits); re-fit from the primary source below is PENDING --- do not
  trust a design number before that re-fit.  Log: choupoSolve prints the
  competitive loadings per species in the PSA report table.
\\*-----------------------------------------------------------------------------*/

recordType      adsorptionIsotherm;
schemaVersion   1;

adsorbent       zeolite13X;
adsorbate       CH4;

model           langmuir;

parameters
{
    q_max   3.6;      // saturation loading [mol/kg]
    b_298   0.35;     // affinity at tRef [1/bar]
    dH_ads  -20000;   // isosteric heat of adsorption [J/mol] (<0, exothermic)
}

tRef            298.15;               // van't Hoff anchor [K]
loadingBasis    molPerKgAdsorbent;    // q = mol adsorbate per kg adsorbent
pressureBasis   partialPressureBar;   // p = partial pressure in bar (b_298 per bar)
quality         teachingOnly;         // historical teaching anchor; not design-grade

provenance
{
    origin    assumed;
    method    "Yang (1987/1997); Cavenati, Grande & Rodrigues, J. Chem. Eng. Data 49 (2004) 1095 (CO2/CH4/N2 on 13X) -- representative 298 K teaching fits; re-fit from the primary before design use";
    curation  "migrated 1:1 from data/standards/assets/zeolite13X.dat isotherms{} 2026-07-12; numbers unchanged; re-fit from the primary source pending";
}
`,Je=`/*--------------------------------*- Choupo -*--------------------------------*\\
  Adsorption equilibrium record --- CO2 on zeolite13X.

  What this IS: the pure-component adsorption isotherm of ONE
  (adsorbent x adsorbate) pair --- one record per pair, the pair catalogue of
  the adsorption tree (the file under data/standards/assets/ keeps the
  material's intrinsic identity only).  Single-site Langmuir,

      q = q_max * b(T) * p / (1 + b(T) * p)        [mol/kg, p in bar]

  with van't Hoff affinity anchored at tRef:

      b(T) = b_298 * exp( -dH_ads/R * (1/T - 1/tRef) ),   dH_ads < 0.

  The PSA assembles the COMPETITIVE (extended Langmuir) form across all the
  species records of the same adsorbent; a species with no record here
  adsorbs nothing and reports fully to the raffinate.

  CURATION: migrated 1:1 from data/standards/assets/zeolite13X.dat
  isotherms{} 2026-07-12; numbers unchanged (order-of-magnitude 298 K
  TEACHING fits); re-fit from the primary source below is PENDING --- do not
  trust a design number before that re-fit.  Log: choupoSolve prints the
  competitive loadings per species in the PSA report table.
\\*-----------------------------------------------------------------------------*/

recordType      adsorptionIsotherm;
schemaVersion   1;

adsorbent       zeolite13X;
adsorbate       CO2;

model           langmuir;

parameters
{
    q_max   5.0;      // saturation loading [mol/kg]
    b_298   9.0;      // affinity at tRef [1/bar]
    dH_ads  -45000;   // isosteric heat of adsorption [J/mol] (<0, exothermic)
}

tRef            298.15;               // van't Hoff anchor [K]
loadingBasis    molPerKgAdsorbent;    // q = mol adsorbate per kg adsorbent
pressureBasis   partialPressureBar;   // p = partial pressure in bar (b_298 per bar)
quality         teachingOnly;         // historical teaching anchor; not design-grade

provenance
{
    origin    assumed;
    method    "Yang (1987/1997); Cavenati, Grande & Rodrigues, J. Chem. Eng. Data 49 (2004) 1095 (CO2/CH4/N2 on 13X) -- representative 298 K teaching fits; re-fit from the primary before design use";
    curation  "migrated 1:1 from data/standards/assets/zeolite13X.dat isotherms{} 2026-07-12; numbers unchanged; re-fit from the primary source pending";
}
`,Ue=`/*--------------------------------*- Choupo -*--------------------------------*\\
  Adsorption equilibrium record --- H2 on zeolite13X.

  What this IS: the pure-component adsorption isotherm of ONE
  (adsorbent x adsorbate) pair --- one record per pair, the pair catalogue of
  the adsorption tree (the file under data/standards/assets/ keeps the
  material's intrinsic identity only).  Single-site Langmuir,

      q = q_max * b(T) * p / (1 + b(T) * p)        [mol/kg, p in bar]

  with van't Hoff affinity anchored at tRef:

      b(T) = b_298 * exp( -dH_ads/R * (1/T - 1/tRef) ),   dH_ads < 0.

  The PSA assembles the COMPETITIVE (extended Langmuir) form across all the
  species records of the same adsorbent; a species with no record here
  adsorbs nothing and reports fully to the raffinate.

  CURATION: migrated 1:1 from data/standards/assets/zeolite13X.dat
  isotherms{} 2026-07-12; numbers unchanged (order-of-magnitude 298 K
  TEACHING fits); re-fit from the primary source below is PENDING --- do not
  trust a design number before that re-fit.  Log: choupoSolve prints the
  competitive loadings per species in the PSA report table.
\\*-----------------------------------------------------------------------------*/

recordType      adsorptionIsotherm;
schemaVersion   1;

adsorbent       zeolite13X;
adsorbate       H2;

model           langmuir;

parameters
{
    q_max   4.5;      // saturation loading [mol/kg]
    b_298   0.004;    // affinity at tRef [1/bar]
    dH_ads  -6000;    // isosteric heat of adsorption [J/mol] (<0, exothermic)
}

tRef            298.15;               // van't Hoff anchor [K]
loadingBasis    molPerKgAdsorbent;    // q = mol adsorbate per kg adsorbent
pressureBasis   partialPressureBar;   // p = partial pressure in bar (b_298 per bar)
quality         teachingOnly;         // historical teaching anchor; not design-grade

provenance
{
    origin    assumed;
    method    "Yang (1987/1997); Cavenati, Grande & Rodrigues, J. Chem. Eng. Data 49 (2004) 1095 (CO2/CH4/N2 on 13X) -- representative 298 K teaching fits; re-fit from the primary before design use";
    curation  "migrated 1:1 from data/standards/assets/zeolite13X.dat isotherms{} 2026-07-12; numbers unchanged; re-fit from the primary source pending";
}
`,Ye=`/*--------------------------------*- Choupo -*--------------------------------*\\
  Adsorption equilibrium record --- N2 on zeolite13X.

  What this IS: the pure-component adsorption isotherm of ONE
  (adsorbent x adsorbate) pair --- one record per pair, the pair catalogue of
  the adsorption tree (the file under data/standards/assets/ keeps the
  material's intrinsic identity only).  Single-site Langmuir,

      q = q_max * b(T) * p / (1 + b(T) * p)        [mol/kg, p in bar]

  with van't Hoff affinity anchored at tRef:

      b(T) = b_298 * exp( -dH_ads/R * (1/T - 1/tRef) ),   dH_ads < 0.

  The PSA assembles the COMPETITIVE (extended Langmuir) form across all the
  species records of the same adsorbent; a species with no record here
  adsorbs nothing and reports fully to the raffinate.

  CURATION: migrated 1:1 from data/standards/assets/zeolite13X.dat
  isotherms{} 2026-07-12; numbers unchanged (order-of-magnitude 298 K
  TEACHING fits); re-fit from the primary source below is PENDING --- do not
  trust a design number before that re-fit.  Log: choupoSolve prints the
  competitive loadings per species in the PSA report table.
\\*-----------------------------------------------------------------------------*/

recordType      adsorptionIsotherm;
schemaVersion   1;

adsorbent       zeolite13X;
adsorbate       N2;

model           langmuir;

parameters
{
    q_max   3.5;      // saturation loading [mol/kg]
    b_298   0.18;     // affinity at tRef [1/bar]
    dH_ads  -18000;   // isosteric heat of adsorption [J/mol] (<0, exothermic)
}

tRef            298.15;               // van't Hoff anchor [K]
loadingBasis    molPerKgAdsorbent;    // q = mol adsorbate per kg adsorbent
pressureBasis   partialPressureBar;   // p = partial pressure in bar (b_298 per bar)
quality         teachingOnly;         // historical teaching anchor; not design-grade

provenance
{
    origin    assumed;
    method    "Yang (1987/1997); Cavenati, Grande & Rodrigues, J. Chem. Eng. Data 49 (2004) 1095 (CO2/CH4/N2 on 13X) -- representative 298 K teaching fits; re-fit from the primary before design use";
    curation  "migrated 1:1 from data/standards/assets/zeolite13X.dat isotherms{} 2026-07-12; numbers unchanged; re-fit from the primary source pending";
}
`,Ze=`/*--------------------------------*- Choupo -*--------------------------------*\\
  Adsorption equilibrium record --- O2 on zeolite13X.

  What this IS: the pure-component adsorption isotherm of ONE
  (adsorbent x adsorbate) pair --- one record per pair, the pair catalogue of
  the adsorption tree (the file under data/standards/assets/ keeps the
  material's intrinsic identity only).  Single-site Langmuir,

      q = q_max * b(T) * p / (1 + b(T) * p)        [mol/kg, p in bar]

  with van't Hoff affinity anchored at tRef:

      b(T) = b_298 * exp( -dH_ads/R * (1/T - 1/tRef) ),   dH_ads < 0.

  The PSA assembles the COMPETITIVE (extended Langmuir) form across all the
  species records of the same adsorbent; a species with no record here
  adsorbs nothing and reports fully to the raffinate.

  CURATION: migrated 1:1 from data/standards/assets/zeolite13X.dat
  isotherms{} 2026-07-12; numbers unchanged (order-of-magnitude 298 K
  TEACHING fits); re-fit from the primary source below is PENDING --- do not
  trust a design number before that re-fit.  Log: choupoSolve prints the
  competitive loadings per species in the PSA report table.
\\*-----------------------------------------------------------------------------*/

recordType      adsorptionIsotherm;
schemaVersion   1;

adsorbent       zeolite13X;
adsorbate       O2;

model           langmuir;

parameters
{
    q_max   3.0;      // saturation loading [mol/kg]
    b_298   0.1;      // affinity at tRef [1/bar]
    dH_ads  -12000;   // isosteric heat of adsorption [J/mol] (<0, exothermic)
}

tRef            298.15;               // van't Hoff anchor [K]
loadingBasis    molPerKgAdsorbent;    // q = mol adsorbate per kg adsorbent
pressureBasis   partialPressureBar;   // p = partial pressure in bar (b_298 per bar)
quality         teachingOnly;         // historical teaching anchor; not design-grade

provenance
{
    origin    assumed;
    method    "Yang (1987/1997); Cavenati, Grande & Rodrigues, J. Chem. Eng. Data 49 (2004) 1095 (CO2/CH4/N2 on 13X) -- representative 298 K teaching fits; re-fit from the primary before design use";
    curation  "migrated 1:1 from data/standards/assets/zeolite13X.dat isotherms{} 2026-07-12; numbers unchanged; re-fit from the primary source pending";
}
`,Qe=`/*--------------------------------*- Choupo -*--------------------------------*\\
  Adsorption equilibrium record --- CH4 on zeolite5A.

  What this IS: the pure-component adsorption isotherm of ONE
  (adsorbent x adsorbate) pair --- one record per pair, the pair catalogue of
  the adsorption tree (the file under data/standards/assets/ keeps the
  material's intrinsic identity only).  Single-site Langmuir,

      q = q_max * b(T) * p / (1 + b(T) * p)        [mol/kg, p in bar]

  with van't Hoff affinity anchored at tRef:

      b(T) = b_298 * exp( -dH_ads/R * (1/T - 1/tRef) ),   dH_ads < 0.

  The PSA assembles the COMPETITIVE (extended Langmuir) form across all the
  species records of the same adsorbent; a species with no record here
  adsorbs nothing and reports fully to the raffinate.

  CURATION: migrated 1:1 from data/standards/assets/zeolite5A.dat
  isotherms{} 2026-07-12; numbers unchanged (order-of-magnitude 298 K
  TEACHING fits); re-fit from the primary source below is PENDING --- do not
  trust a design number before that re-fit.  Log: choupoSolve prints the
  competitive loadings per species in the PSA report table.
\\*-----------------------------------------------------------------------------*/

recordType      adsorptionIsotherm;
schemaVersion   1;

adsorbent       zeolite5A;
adsorbate       CH4;

model           langmuir;

parameters
{
    q_max   3.2;      // saturation loading [mol/kg]
    b_298   0.4;      // affinity at tRef [1/bar]
    dH_ads  -20000;   // isosteric heat of adsorption [J/mol] (<0, exothermic)
}

tRef            298.15;               // van't Hoff anchor [K]
loadingBasis    molPerKgAdsorbent;    // q = mol adsorbate per kg adsorbent
pressureBasis   partialPressureBar;   // p = partial pressure in bar (b_298 per bar)
quality         teachingOnly;         // historical teaching anchor; not design-grade

provenance
{
    origin    assumed;
    method    "Yang, Gas Separation by Adsorption Processes (1987/1997); Ruthven, Principles of Adsorption and Adsorption Processes (Wiley, 1984) -- representative 298 K teaching fits; re-fit from the primary before design use";
    curation  "migrated 1:1 from data/standards/assets/zeolite5A.dat isotherms{} 2026-07-12; numbers unchanged; re-fit from the primary source pending";
}
`,ea=`/*--------------------------------*- Choupo -*--------------------------------*\\
  Adsorption equilibrium record --- CO on zeolite5A.

  What this IS: the pure-component adsorption isotherm of ONE
  (adsorbent x adsorbate) pair --- one record per pair, the pair catalogue of
  the adsorption tree (the file under data/standards/assets/ keeps the
  material's intrinsic identity only).  Single-site Langmuir,

      q = q_max * b(T) * p / (1 + b(T) * p)        [mol/kg, p in bar]

  with van't Hoff affinity anchored at tRef:

      b(T) = b_298 * exp( -dH_ads/R * (1/T - 1/tRef) ),   dH_ads < 0.

  The PSA assembles the COMPETITIVE (extended Langmuir) form across all the
  species records of the same adsorbent; a species with no record here
  adsorbs nothing and reports fully to the raffinate.

  CURATION: migrated 1:1 from data/standards/assets/zeolite5A.dat
  isotherms{} 2026-07-12; numbers unchanged (order-of-magnitude 298 K
  TEACHING fits); re-fit from the primary source below is PENDING --- do not
  trust a design number before that re-fit.  Log: choupoSolve prints the
  competitive loadings per species in the PSA report table.
\\*-----------------------------------------------------------------------------*/

recordType      adsorptionIsotherm;
schemaVersion   1;

adsorbent       zeolite5A;
adsorbate       CO;

model           langmuir;

parameters
{
    q_max   3.1;      // saturation loading [mol/kg]
    b_298   0.85;     // affinity at tRef [1/bar]
    dH_ads  -28000;   // isosteric heat of adsorption [J/mol] (<0, exothermic)
}

tRef            298.15;               // van't Hoff anchor [K]
loadingBasis    molPerKgAdsorbent;    // q = mol adsorbate per kg adsorbent
pressureBasis   partialPressureBar;   // p = partial pressure in bar (b_298 per bar)
quality         teachingOnly;         // historical teaching anchor; not design-grade

provenance
{
    origin    assumed;
    method    "Yang, Gas Separation by Adsorption Processes (1987/1997); Ruthven, Principles of Adsorption and Adsorption Processes (Wiley, 1984) -- representative 298 K teaching fits; re-fit from the primary before design use";
    curation  "migrated 1:1 from data/standards/assets/zeolite5A.dat isotherms{} 2026-07-12; numbers unchanged; re-fit from the primary source pending";
}
`,aa=`/*--------------------------------*- Choupo -*--------------------------------*\\
  Adsorption equilibrium record --- CO2 on zeolite5A.

  What this IS: the pure-component adsorption isotherm of ONE
  (adsorbent x adsorbate) pair --- one record per pair, the pair catalogue of
  the adsorption tree (the file under data/standards/assets/ keeps the
  material's intrinsic identity only).  Single-site Langmuir,

      q = q_max * b(T) * p / (1 + b(T) * p)        [mol/kg, p in bar]

  with van't Hoff affinity anchored at tRef:

      b(T) = b_298 * exp( -dH_ads/R * (1/T - 1/tRef) ),   dH_ads < 0.

  The PSA assembles the COMPETITIVE (extended Langmuir) form across all the
  species records of the same adsorbent; a species with no record here
  adsorbs nothing and reports fully to the raffinate.

  CURATION: migrated 1:1 from data/standards/assets/zeolite5A.dat
  isotherms{} 2026-07-12; numbers unchanged (order-of-magnitude 298 K
  TEACHING fits); re-fit from the primary source below is PENDING --- do not
  trust a design number before that re-fit.  Log: choupoSolve prints the
  competitive loadings per species in the PSA report table.
\\*-----------------------------------------------------------------------------*/

recordType      adsorptionIsotherm;
schemaVersion   1;

adsorbent       zeolite5A;
adsorbate       CO2;

model           langmuir;

parameters
{
    q_max   4.8;      // saturation loading [mol/kg]
    b_298   7.0;      // affinity at tRef [1/bar]
    dH_ads  -38000;   // isosteric heat of adsorption [J/mol] (<0, exothermic)
}

tRef            298.15;               // van't Hoff anchor [K]
loadingBasis    molPerKgAdsorbent;    // q = mol adsorbate per kg adsorbent
pressureBasis   partialPressureBar;   // p = partial pressure in bar (b_298 per bar)
quality         teachingOnly;         // historical teaching anchor; not design-grade

provenance
{
    origin    assumed;
    method    "Yang, Gas Separation by Adsorption Processes (1987/1997); Ruthven, Principles of Adsorption and Adsorption Processes (Wiley, 1984) -- representative 298 K teaching fits; re-fit from the primary before design use";
    curation  "migrated 1:1 from data/standards/assets/zeolite5A.dat isotherms{} 2026-07-12; numbers unchanged; re-fit from the primary source pending";
}
`,ta=`/*--------------------------------*- Choupo -*--------------------------------*\\
  Adsorption equilibrium record --- H2 on zeolite5A.

  What this IS: the pure-component adsorption isotherm of ONE
  (adsorbent x adsorbate) pair --- one record per pair, the pair catalogue of
  the adsorption tree (the file under data/standards/assets/ keeps the
  material's intrinsic identity only).  Single-site Langmuir,

      q = q_max * b(T) * p / (1 + b(T) * p)        [mol/kg, p in bar]

  with van't Hoff affinity anchored at tRef:

      b(T) = b_298 * exp( -dH_ads/R * (1/T - 1/tRef) ),   dH_ads < 0.

  The PSA assembles the COMPETITIVE (extended Langmuir) form across all the
  species records of the same adsorbent; a species with no record here
  adsorbs nothing and reports fully to the raffinate.

  CURATION: migrated 1:1 from data/standards/assets/zeolite5A.dat
  isotherms{} 2026-07-12; numbers unchanged (order-of-magnitude 298 K
  TEACHING fits); re-fit from the primary source below is PENDING --- do not
  trust a design number before that re-fit.  Log: choupoSolve prints the
  competitive loadings per species in the PSA report table.
\\*-----------------------------------------------------------------------------*/

recordType      adsorptionIsotherm;
schemaVersion   1;

adsorbent       zeolite5A;
adsorbate       H2;

model           langmuir;

parameters
{
    q_max   4.0;      // saturation loading [mol/kg]
    b_298   0.013;    // affinity at tRef [1/bar]
    dH_ads  -8000;    // isosteric heat of adsorption [J/mol] (<0, exothermic)
}

tRef            298.15;               // van't Hoff anchor [K]
loadingBasis    molPerKgAdsorbent;    // q = mol adsorbate per kg adsorbent
pressureBasis   partialPressureBar;   // p = partial pressure in bar (b_298 per bar)
quality         teachingOnly;         // historical teaching anchor; not design-grade

provenance
{
    origin    assumed;
    method    "Yang, Gas Separation by Adsorption Processes (1987/1997); Ruthven, Principles of Adsorption and Adsorption Processes (Wiley, 1984) -- representative 298 K teaching fits; re-fit from the primary before design use";
    curation  "migrated 1:1 from data/standards/assets/zeolite5A.dat isotherms{} 2026-07-12; numbers unchanged; re-fit from the primary source pending";
}
`,na=`/*--------------------------------*- Choupo -*--------------------------------*\\
  Adsorption equilibrium record --- N2 on zeolite5A.

  What this IS: the pure-component adsorption isotherm of ONE
  (adsorbent x adsorbate) pair --- one record per pair, the pair catalogue of
  the adsorption tree (the file under data/standards/assets/ keeps the
  material's intrinsic identity only).  Single-site Langmuir,

      q = q_max * b(T) * p / (1 + b(T) * p)        [mol/kg, p in bar]

  with van't Hoff affinity anchored at tRef:

      b(T) = b_298 * exp( -dH_ads/R * (1/T - 1/tRef) ),   dH_ads < 0.

  The PSA assembles the COMPETITIVE (extended Langmuir) form across all the
  species records of the same adsorbent; a species with no record here
  adsorbs nothing and reports fully to the raffinate.

  CURATION: migrated 1:1 from data/standards/assets/zeolite5A.dat
  isotherms{} 2026-07-12; numbers unchanged (order-of-magnitude 298 K
  TEACHING fits); re-fit from the primary source below is PENDING --- do not
  trust a design number before that re-fit.  Log: choupoSolve prints the
  competitive loadings per species in the PSA report table.
\\*-----------------------------------------------------------------------------*/

recordType      adsorptionIsotherm;
schemaVersion   1;

adsorbent       zeolite5A;
adsorbate       N2;

model           langmuir;

parameters
{
    q_max   3.0;      // saturation loading [mol/kg]
    b_298   0.25;     // affinity at tRef [1/bar]
    dH_ads  -16000;   // isosteric heat of adsorption [J/mol] (<0, exothermic)
}

tRef            298.15;               // van't Hoff anchor [K]
loadingBasis    molPerKgAdsorbent;    // q = mol adsorbate per kg adsorbent
pressureBasis   partialPressureBar;   // p = partial pressure in bar (b_298 per bar)
quality         teachingOnly;         // historical teaching anchor; not design-grade

provenance
{
    origin    assumed;
    method    "Yang, Gas Separation by Adsorption Processes (1987/1997); Ruthven, Principles of Adsorption and Adsorption Processes (Wiley, 1984) -- representative 298 K teaching fits; re-fit from the primary before design use";
    curation  "migrated 1:1 from data/standards/assets/zeolite5A.dat isotherms{} 2026-07-12; numbers unchanged; re-fit from the primary source pending";
}
`,ra=Object.assign({"../../../../data/standards/assets/BWRO_HIGH_FLUX.dat":ke,"../../../../data/standards/assets/BWRO_HIGH_REJECTION.dat":we,"../../../../data/standards/assets/CMX_AMX.dat":Ce,"../../../../data/standards/assets/EUR2C-7P18.dat":Ae,"../../../../data/standards/assets/EurodiaED-100P-50.dat":Te,"../../../../data/standards/assets/Generic-16040.dat":xe,"../../../../data/standards/assets/Generic-2540.dat":_e,"../../../../data/standards/assets/Generic-4040.dat":ve,"../../../../data/standards/assets/Generic-8040.dat":ye,"../../../../data/standards/assets/MontzB1-250.dat":fe,"../../../../data/standards/assets/NF270-4040.dat":be,"../../../../data/standards/assets/NF270.dat":ge,"../../../../data/standards/assets/NF270_dspmde.dat":ue,"../../../../data/standards/assets/NF_DIVALENT_SELECTIVE.dat":me,"../../../../data/standards/assets/NF_OPEN.dat":pe,"../../../../data/standards/assets/NF_TIGHT.dat":he,"../../../../data/standards/assets/SAC_Na.dat":ce,"../../../../data/standards/assets/SEPA_CF.dat":le,"../../../../data/standards/assets/SS304.dat":de,"../../../../data/standards/assets/SS316.dat":ie,"../../../../data/standards/assets/SW30HR-380.dat":oe,"../../../../data/standards/assets/SW30HR.dat":se,"../../../../data/standards/assets/SWRO.dat":re,"../../../../data/standards/assets/SchockMiquel-DesalRO.dat":ne,"../../../../data/standards/assets/SchockMiquel-DesalUF.dat":te,"../../../../data/standards/assets/SchockMiquel-FilmTecFT30.dat":ae,"../../../../data/standards/assets/SchockMiquel-Naltex1228.dat":ee,"../../../../data/standards/assets/SchockMiquel-TorayPEC1000.dat":Q,"../../../../data/standards/assets/Spacer-28mil.dat":Z,"../../../../data/standards/assets/SulzerBX.dat":Y,"../../../../data/standards/assets/activatedCarbon.dat":U,"../../../../data/standards/assets/aluminium.dat":J,"../../../../data/standards/assets/carbonSteel.dat":F,"../../../../data/standards/assets/zeolite13X.dat":$,"../../../../data/standards/assets/zeolite5A.dat":V}),sa=Object.assign({"../../../../data/standards/parameters/adsorption/equilibria/activatedCarbon/CH4.dat":Me,"../../../../data/standards/parameters/adsorption/equilibria/activatedCarbon/CO.dat":Ge,"../../../../data/standards/parameters/adsorption/equilibria/activatedCarbon/CO2.dat":We,"../../../../data/standards/parameters/adsorption/equilibria/activatedCarbon/H2.dat":Ve,"../../../../data/standards/parameters/adsorption/equilibria/activatedCarbon/N2.dat":$e,"../../../../data/standards/parameters/adsorption/equilibria/zeolite13X/CH4.dat":Fe,"../../../../data/standards/parameters/adsorption/equilibria/zeolite13X/CO2.dat":Je,"../../../../data/standards/parameters/adsorption/equilibria/zeolite13X/H2.dat":Ue,"../../../../data/standards/parameters/adsorption/equilibria/zeolite13X/N2.dat":Ye,"../../../../data/standards/parameters/adsorption/equilibria/zeolite13X/O2.dat":Ze,"../../../../data/standards/parameters/adsorption/equilibria/zeolite5A/CH4.dat":Qe,"../../../../data/standards/parameters/adsorption/equilibria/zeolite5A/CO.dat":ea,"../../../../data/standards/parameters/adsorption/equilibria/zeolite5A/CO2.dat":aa,"../../../../data/standards/parameters/adsorption/equilibria/zeolite5A/H2.dat":ta,"../../../../data/standards/parameters/adsorption/equilibria/zeolite5A/N2.dat":na});function oa(){const a=[];for(const[n,r]of Object.entries(ra)){const t=Be(r);if(!t)continue;const c=[];for(const[l,i]of Object.entries(sa)){if(l.split("/").slice(-2,-1)[0]!==t.name)continue;const T=Xe(i);T&&c.push({path:l.replace(/^(\.\.\/)+/,""),raw:i,pair:T})}c.sort((l,i)=>l.pair.adsorbate.localeCompare(i.pair.adsorbate)),a.push({identity:t,raw:r,path:n.replace(/^(\.\.\/)+/,""),pairs:c})}return a.sort((n,r)=>n.identity.name.localeCompare(r.identity.name))}const v=ze(L),j="var(--mantine-color-default-border)",I={dominant:"dominant",layer:"layer",named:"named"},q={dominant:"teal",layer:"blue",named:"gray"},ia={id:"y",label:"adsorbate in the feed gas, y",min:.05,max:5,step:.05,unit:"wt%",why:"Dilute feeds heat the bed by a degree or two; concentrated ones can heat it by tens."},da={id:"dH",label:"heat of adsorption, |dH|",min:1e3,max:4e3,step:100,unit:"kJ/kg",why:"The range the source gives for common adsorbents; the average is 2500."},P=1;function u({cite:a}){const n=B[a.src];return e.jsxs(o,{span:!0,size:"xs",c:"dimmed","data-cite":`${a.src}:${a.page}`,title:`${n.cite} -- p. ${a.page}, PDF page ${a.pdfPage} of ${n.file}: ${a.what}`,style:{whiteSpace:"nowrap"},children:[" ","[",n.short," p. ",a.page,"]"]})}function N({children:a}){return e.jsx(m,{"data-pan-x":"",style:{width:"100%",overflowX:"auto"},children:e.jsx(d,{striped:!0,withTableBorder:!0,withColumnBorders:!0,fz:"xs",mt:6,children:a})})}const k=a=>a[0]===a[1]?String(a[0]):`${a[0]}-${a[1]}`;function M(){return e.jsx(o,{span:!0,size:"xs",c:"dimmed",children:"not in the cited sources"})}function la({a}){return a.heats.length===0?e.jsx(M,{}):e.jsx(e.Fragment,{children:a.heats.map(n=>e.jsxs(o,{size:"xs","data-heat":`${a.id}:${n.sorbate}`,children:[n.sorbate," ",n.kcalPerMol," kcal/mol (",D(n.kcalPerMol).toFixed(1)," kJ/mol)",e.jsx(u,{cite:n.cite})]},n.sorbate))})}function ca(){return e.jsxs(N,{children:[e.jsx(d.Thead,{children:e.jsxs(d.Tr,{children:[e.jsx(d.Th,{children:"adsorbent"}),e.jsx(d.Th,{children:"pore, nm"}),e.jsx(d.Th,{children:"polarity"}),e.jsx(d.Th,{children:"heat of adsorption, printed"}),e.jsx(d.Th,{children:"TSA reactivation, deg C"})]})}),e.jsx(d.Tbody,{children:b.map(a=>e.jsxs(d.Tr,{"data-adsorbent":a.id,children:[e.jsxs(d.Td,{style:{verticalAlign:"top"},children:[e.jsx(o,{size:"xs",fw:600,children:a.label}),e.jsx(o,{size:"xs",c:"dimmed",children:a.family})]}),e.jsxs(d.Td,{style:{verticalAlign:"top"},children:[e.jsx(o,{size:"xs",fw:600,children:k(a.poreNm.value.range)}),e.jsx(u,{cite:a.poreNm.cite})]}),e.jsxs(d.Td,{style:{verticalAlign:"top"},children:[e.jsx(C,{variant:"light",size:"sm",color:a.polarity.value==="hydrophobic"?"orange":"blue",children:a.polarity.value}),e.jsx(u,{cite:a.polarity.cite})]}),e.jsx(d.Td,{style:{verticalAlign:"top"},children:e.jsx(la,{a})}),e.jsx(d.Td,{style:{verticalAlign:"top"},children:a.reactivationC?e.jsxs(e.Fragment,{children:[e.jsx(o,{size:"xs",fw:600,children:k(a.reactivationC.value.range)}),e.jsx(o,{size:"xs",c:"dimmed",children:a.reactivationC.value.of}),e.jsx(u,{cite:a.reactivationC.cite})]}):e.jsx(M,{})})]},a.id))})]})}function ha(){return e.jsx(A,{multiple:!0,variant:"separated",mt:8,"data-adsorbent-details":"",children:b.map(a=>e.jsxs(A.Item,{value:a.id,"data-detail":a.id,children:[e.jsx(A.Control,{children:e.jsxs(o,{size:"sm",fw:600,children:[a.label,": where the sources differ, density, regeneration"]})}),e.jsx(A.Panel,{children:e.jsxs(y,{gap:6,children:[e.jsxs(m,{children:[e.jsx(o,{size:"xs",fw:600,children:"Pore size, as a second source prints it"}),a.poreAlt.map((n,r)=>e.jsxs(o,{size:"xs",children:[n.value,e.jsx(u,{cite:n.cite})]},r))]}),e.jsxs(m,{children:[e.jsx(o,{size:"xs",fw:600,children:"Packed bulk density"}),a.bulkDensity.map((n,r)=>e.jsxs(o,{size:"xs","data-bulk":a.id,children:[k(n.value.range)," kg/m3 (",n.value.of,")",e.jsx(u,{cite:n.cite})]},r))]}),e.jsxs(m,{children:[e.jsx(o,{size:"xs",fw:600,children:"How it is regenerated, where the pages say"}),a.regeneration.map((n,r)=>e.jsxs(o,{size:"xs",children:[n.value,e.jsx(u,{cite:n.cite})]},r))]})]})})]},a.id))})}function pa(){const[a,n]=x.useState(1),[r,t]=x.useState(2500),c=Ke(a/100,r,P);return e.jsxs(m,{mt:8,"data-heat-rise":"",children:[e.jsx(E,{order:5,children:"How hot does the bed get?"}),e.jsx(_,{of:"assumption",note:"y and the heat of adsorption are yours to set"}),e.jsxs(m,{mt:6,style:{display:"grid",gap:14,gridTemplateColumns:"repeat(auto-fit, minmax(240px, 1fr))"},children:[e.jsxs(y,{gap:8,style:{maxWidth:320},children:[e.jsx(z,{knob:ia,value:a,onChange:n,showWhy:!0}),e.jsx(z,{knob:da,value:r,onChange:t,showWhy:!0}),e.jsxs(je,{children:["The feed gas is taken at C",e.jsx("sub",{children:"p,f"})," = ",P.toFixed(1)," kJ/(kg K), as the source does."]})]}),e.jsxs(m,{children:[e.jsx(_,{of:"page",note:"Eq. (17-25), redone on this page"}),e.jsxs(o,{size:"sm",mt:6,children:[e.jsx(Oe,{mode:"inline",src:String.raw`\Delta T_{\max} = \frac{${(a/100).toFixed(4)}\times ${r}}{${P.toFixed(1)}} =`})," ",e.jsxs(o,{span:!0,fw:700,"data-rise":"",children:[c.toFixed(c<10?2:1)," K"]})]}),e.jsxs(o,{size:"xs",c:"dimmed",mt:4,children:[c<2?"Under about 1-2 K the source treats the bed as isothermal.":"Above that the source says the temperature wave must be designed for, not ignored.",e.jsx(u,{cite:qe.cite})]}),e.jsxs(o,{size:"xs",mt:6,children:["Printed heats of adsorption convert at ",X," kJ per kcal. ",S.value.charAt(0).toUpperCase()+S.value.slice(1),".",e.jsx(u,{cite:S.cite})]})]})]})]})}function ma({open:a,setOpen:n}){const r=t=>n(a.includes(t)?a.filter(c=>c!==t):[...a,t]);return e.jsxs(m,{children:[e.jsx(_,{of:"reference",note:"each cell is a sentence of a cited page"}),e.jsxs(N,{children:[e.jsx(d.Thead,{children:e.jsxs(d.Tr,{children:[e.jsx(d.Th,{children:"separation"}),b.map(t=>e.jsx(d.Th,{children:t.label},t.id))]})}),e.jsx(d.Tbody,{children:O.map(t=>e.jsxs(d.Tr,{"data-sep-row":t.id,children:[e.jsx(d.Td,{children:e.jsx(w,{size:"compact-xs",variant:"subtle",onClick:()=>r(t.id),"aria-expanded":a.includes(t.id),children:t.label})}),b.map(c=>{const l=Le(t.id,c.id);return e.jsx(d.Td,{"data-cell":`${t.id}:${c.id}`,style:{textAlign:"center"},children:l?e.jsx(C,{variant:"light",size:"sm",color:q[l.role],style:{cursor:"pointer"},onClick:()=>r(t.id),children:I[l.role]}):e.jsx(o,{span:!0,size:"xs",c:"dimmed",children:"–"})},c.id)})]},t.id))})]}),e.jsx(o,{size:"xs",c:"dimmed",mt:4,children:"A dash is a cell no cited page fills. Click a row to read its sentences."}),e.jsx(y,{gap:"xs",mt:8,children:O.map(t=>{const c=R.filter(l=>l.sep===t.id);return e.jsxs(m,{"data-sep-block":t.id,px:"sm",py:8,style:{border:`1px solid ${j}`,borderRadius:4},children:[e.jsxs(H,{gap:6,justify:"space-between",wrap:"nowrap",children:[e.jsxs(o,{size:"sm",fw:600,children:[t.label,e.jsx(C,{ml:6,size:"xs",variant:"outline",color:"gray",children:t.phase})]}),e.jsx(w,{size:"compact-xs",variant:"default",onClick:()=>r(t.id),children:a.includes(t.id)?"hide":"read"})]}),e.jsx(o,{size:"xs",c:"dimmed",children:t.asks}),e.jsx(K,{in:a.includes(t.id),children:e.jsxs(y,{gap:6,mt:6,children:[c.map(l=>e.jsxs(o,{size:"xs","data-why":`${l.sep}:${l.ads}`,children:[e.jsx(C,{size:"xs",variant:"light",color:q[l.role],mr:4,children:I[l.role]}),e.jsxs("b",{children:[b.find(i=>i.id===l.ads).label,"."]})," ",l.why,e.jsx(u,{cite:l.cite})]},l.ads)),t.notes.map((l,i)=>e.jsxs(o,{size:"xs",c:"dimmed","data-note":`${t.id}:${i}`,children:["Also on the page: ",l.value,e.jsx(u,{cite:l.cite})]},i))]})})]},t.id)})})]})}function ua(){const a=Ee(),n=Math.max(1,...a.map(r=>r.count));return e.jsxs(m,{"data-count-bars":"",children:[e.jsx(_,{of:"page",note:"a count of the matrix above, not a measurement of use"}),e.jsx(o,{size:"xs",mt:4,children:"Separations, of five, for which a cited page names the adsorbent. This is breadth in these readings. It is not tonnes, sales or market share: nothing in the four books gives those."}),e.jsx(y,{gap:4,mt:6,children:a.map(r=>{const t=b.find(c=>c.id===r.id);return e.jsxs(H,{gap:8,wrap:"nowrap","data-count":r.id,children:[e.jsx(o,{size:"xs",style:{width:150,flexShrink:0},children:t.label}),e.jsx(m,{style:{height:12,borderRadius:2,minWidth:2,width:`${100*r.count/n}%`,maxWidth:"55%",background:r.count>0?"var(--mantine-color-teal-6)":"transparent"}}),e.jsxs(o,{size:"xs",children:[r.count,r.dominantIn>0?` (dominant in ${r.dominantIn})`:""]})]},r.id)})})]})}function ga(){const a=x.useMemo(()=>oa(),[]),[n,r]=x.useState(null);return e.jsxs(y,{gap:"sm","data-catalogue":"",children:[e.jsx(_,{of:"reference",note:"records of data/standards/, read as text; marked teachingOnly"}),a.map(t=>{const c=b.find(i=>i.catalogue===t.identity.name),l=De[t.identity.name]??[];return e.jsxs(m,{px:"sm",py:8,"data-record":t.identity.name,style:{border:`1px solid ${j}`,borderRadius:4},children:[e.jsxs(o,{size:"sm",fw:600,children:[c?c.label:t.identity.name,e.jsxs(o,{span:!0,size:"xs",c:"dimmed",children:[" (",t.identity.name,": ",t.identity.type,")"]})]}),e.jsxs(o,{size:"xs","data-record-density":t.identity.name,children:["Packed bulk density in the record: ",e.jsxs("b",{children:[t.identity.rhoBulk," kg/m3"]}),".",c&&c.bulkDensity.map(i=>{const f=t.identity.rhoBulk>=i.value.range[0]&&t.identity.rhoBulk<=i.value.range[1];return e.jsxs(o,{span:!0,size:"xs",c:f?"dimmed":"orange",children:[" ",B[i.cite.src].short,": ",k(i.value.range)," kg/m3, the record is ",f?"inside":"outside","."]},i.cite.src)})]}),e.jsxs(N,{children:[e.jsx(d.Thead,{children:e.jsxs(d.Tr,{children:[e.jsx(d.Th,{children:"gas"}),e.jsx(d.Th,{children:"model"}),e.jsx(d.Th,{children:"q_max, mol/kg"}),e.jsx(d.Th,{children:"record heat, kJ/mol"}),e.jsx(d.Th,{children:"book heat for the same pair"})]})}),e.jsx(d.Tbody,{children:t.pairs.map(i=>{const f=c?.heats.find(T=>T.sorbate===i.pair.adsorbate);return e.jsxs(d.Tr,{"data-pair":`${t.identity.name}:${i.pair.adsorbate}`,children:[e.jsx(d.Td,{children:i.pair.adsorbate}),e.jsx(d.Td,{children:i.pair.model}),e.jsx(d.Td,{children:i.pair.qMax??"-"}),e.jsx(d.Td,{children:i.pair.dHads!==null?(i.pair.dHads/1e3).toFixed(1):"-"}),e.jsx(d.Td,{children:f?e.jsxs(e.Fragment,{children:[(-D(f.kcalPerMol)).toFixed(1),e.jsx(u,{cite:f.cite})]}):e.jsx(o,{span:!0,size:"xs",c:"dimmed",children:"not printed"})})]},i.pair.adsorbate)})})]}),e.jsxs(o,{size:"xs",c:"dimmed",children:["The pair records are marked ",t.pairs[0]?.pair.quality??"unstated",": teaching anchors, not design data."]}),e.jsxs(H,{gap:6,mt:6,children:[e.jsx(w,{size:"compact-xs",variant:"default",onClick:()=>r(n===t.identity.name?null:t.identity.name),children:n===t.identity.name?"hide the record":`open ${t.path}`}),l.map(i=>e.jsxs(w,{size:"compact-xs",variant:"light",onClick:()=>G(W(i.id)),children:["open the case ",i.id.split("/").pop()]},i.id))]}),l.map(i=>e.jsxs(o,{size:"xs",c:"dimmed",children:[i.id.split("/").pop(),": ",i.why,"."]},i.id)),l.length===0&&e.jsx(o,{size:"xs",c:"dimmed","data-no-case":t.identity.name,children:"No tutorial case uses this adsorbent yet; the record and its pair records are in the catalogue for a case to name."}),e.jsx(K,{in:n===t.identity.name,children:e.jsx(m,{component:"pre",mt:6,p:"xs","data-record-raw":t.identity.name,style:{fontSize:11,overflowX:"auto",border:`1px solid ${j}`,borderRadius:4},children:t.raw})})]},t.identity.name)}),e.jsxs(o,{size:"xs",c:"dimmed",children:["The five that have no record are named in the table above and are not in the catalogue:"," ",b.filter(t=>t.catalogue===null).map(t=>t.label).join(", "),"."]})]})}function wa(){const[a,n]=x.useState([]);return e.jsx(m,{style:{flex:1,minHeight:0,overflowY:"auto"},px:"md",py:"sm",children:e.jsxs(y,{gap:"md",style:{maxWidth:1080,margin:"0 auto"},children:[e.jsxs(m,{children:[e.jsx(E,{order:4,children:"Which adsorbent for which separation"}),e.jsx(o,{size:"sm",c:"dimmed",mt:4,children:"You have a separation to make: drying a gas, purifying hydrogen, splitting air, recovering a solvent, treating water. Which of the common industrial adsorbents does a cited page name for it, and why?"})]}),v(1),v(2),e.jsx(_,{of:"reference",note:"every value beside its page; PDF page in the tooltip"}),e.jsx(ca,{}),e.jsx(ha,{}),v(3),e.jsx(pa,{}),v(4),e.jsx(ma,{open:a,setOpen:n}),v(5),e.jsx(ua,{}),v(6),e.jsx(ga,{}),e.jsx(He,{title:"Check your understanding",questions:Se,lesson:L}),e.jsx(Re,{limits:Pe}),e.jsx(Ne,{tool:"adsorbent-selection"})]})})}export{wa as AdsorbentSelectionTool,P as CP_FEED,u as CiteMark,da as DH_KNOB,ia as Y_KNOB,wa as default};
