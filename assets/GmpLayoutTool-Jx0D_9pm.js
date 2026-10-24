import{bR as R,d3 as G,cb as e,c as u,ao as _,au as c,as as l,b as $,cU as H,p as k,d as j,co as U,cL as b,ce as F,al as B,i as A,a as D,R as C,G as W,bT as Y,aq as h,am as V,o as X,bw as q}from"./index-89agNcv_.js";import{u as S}from"./methodRun-lt8lUnKs.js";import{L as K,c as J,P as Q,a as Z}from"./MethodsWorkspace-iz3QewvE.js";import{f as ee}from"./runLog-B_fMRc_g.js";import{G as oe,b as ne,a as te}from"./gmpLayoutLesson-D_88CKLy.js";import"./chapters-De70f6Ge.js";import"./methodFeeds-BlH4hzGv.js";import"./catalogue-Cm-l0rCC.js";import"./csvShape-bbHtF81D.js";import"./exploreMccabePopOut-WLNmbYUC.js";import"./Slider-BjY7NURr.js";import"./Collapse-CtBgURfD.js";import"./CopyButton-V9GY7a_4.js";import"./caseAssembly-DQ7a-ldS.js";const re=`/*--------------------------------*- Choupo -*--------------------------------*\\
|       \\|/    C hemicals     |  Choupo: open-source, glass-box simulation    |
|      \\\\|//   H eat-transfer |  Version:  Choupo-dev                         |
|     \\\\\\|///  O perations    |  Website:  https://choupo.org                 |
|      \\\\|//   U nits         |  Licence:  GPL-3.0-or-later                   |
|       \\|/    P roperties    |  EduTool teaching file -- part of Choupo      |
|        |     O ptimization  |                                               |
\\*-----------------------------------------------------------------------------*/
/*---------------------------------------------------------------------------*\\
  THE TEACHING BUILDING of the EduTool "The GMP interior of a tablet plant"
  (DEV.md 4c C101).  A small oral-solid-dose block -- seventeen rooms on two
  floors -- round ONE sized item, the spray dryer of
  tutorials/steady/drying/sprayDryer07_design.

  NOT A CASE.  The page runs a COPY of that tutorial in the browser with this
  file written in as its system/layoutDict; the tutorial on disk is never
  changed (the standing rule: no new case for an EduTool).  To run it on your
  own machine, copy the tutorial, save this file as its system/layoutDict,
  and run choupoSolve on the copy.

  EVERY VALUE HERE IS AN AUTHOR-SET ASSUMPTION FOR THE EXERCISE -- the room
  boxes, the grades, the pressures, the separation, the three boxes standing
  for the blender, the tablet press and the pan coater -- except the cascade
  step, whose source is named in its own block.  The building was seeded from
  the clean probe of bin/curate/check_gmp_layout.py, on which the engine
  raises no finding; this copy raises none either (held by
  gui/tests/gmpLayoutLesson.test.ts, which runs it natively).

  THE DRYER, READ HONESTLY.  The host tutorial dries an AQUEOUS sucrose
  solution with hot air.  The room it stands in is declared here as the
  solvent suite of a spray-dried dispersion -- contained, and a gas zone 1 --
  because that is the room an oral-solid-dose plant making an amorphous
  dispersion needs.  The zone is this building's declaration for the
  exercise, not a hazard of the host's water-evaporating dryer.

  The grammar: docs/ai/case-layout.md (THE GMP INTERIOR); the engine:
  src/postProcessing/layout/BuildingLayout.cpp; the record:
  docs/design/a-gmp-interior-is-declared-and-checked.md.
\\*---------------------------------------------------------------------------*/

//  The plot plan: the sized dryer, and three teaching boxes for the machines
//  Choupo does not size.  Each stands in the room that lists it below.
items
(
    { item "dryer"; x 28 m; y 15 m; orientation vertical; }
    { nonProcess "blender"; kind blender; x 41 m; y 15 m; orientation alongX;
      footprint { length 2 m; width 2 m; height 2.5 m; }
      source "EduTool teaching building"; reason "a bin blender, a teaching box"; }
    { nonProcess "press"; kind tabletPress; x 49 m; y 15 m; orientation alongX;
      footprint { length 2 m; width 1.5 m; height 2 m; }
      source "EduTool teaching building"; reason "a rotary tablet press, a teaching box"; }
    { nonProcess "coater"; kind panCoater; x 57 m; y 15 m; orientation alongX;
      footprint { length 3 m; width 2 m; height 2.5 m; }
      source "EduTool teaching building"; reason "a pan coater, a teaching box"; }
);
plot { margin 5 m; reason "a strip round the teaching building, author-set for the exercise"; }

building
{
    name   "teaching OSD block";
    source "EduTool teaching building (DEV.md 4c C101), seeded from the clean probe of check_gmp_layout";
    reason "every rule of the GMP interior held at once, so each exercise breaks exactly one";

    //  The step every pressure rule is checked against.
    cascade
    {
        minimumStep 10 Pa;
        source "EU GMP Annex 1 (2022) para 4.14: a guidance value of at least 10 Pa between adjacent rooms of different grades";
        reason "the guidance value, taken as the design step of the teaching building";
    }

    //  How far a hazardous-area room must stand from an ignition room.
    atexSeparation { distance 6 m; source "EduTool teaching building"; reason "an author-set distance for the exercise, from no standard"; }

    floors
    (
        { floor ground; elevation 0 m; height 6 m; }
        { floor upper;  elevation 7 m; height 4 m; }
    );

    //  The ground floor runs west to east along the product's way: the
    //  warehouse, the dispensary, the contained spray-drying suite between
    //  two sink airlocks, blending, compression, coating and packaging.  The
    //  D corridor south of the train is reached from the lobby through the
    //  gowning room; the waste leaves through its own airlock.  Above the
    //  lobby, the electrical room.
    rooms
    (
        { room warehouse;   floor ground; xMin 0 m;  xMax 8 m;  yMin 10 m; yMax 20 m; grade CNC; pressure 5 Pa;  relativeTo outside; }
        { room MAL;         floor ground; xMin 8 m;  xMax 11 m; yMin 10 m; yMax 20 m; grade D;   role materialAirlock; regime cascade; pressure 15 Pa; relativeTo outside; }
        { room dispensing;  floor ground; xMin 11 m; xMax 19 m; yMin 10 m; yMax 20 m; grade D;   pressure 25 Pa; relativeTo outside; containment no; occupancy 2; }
        { room sdIn;        floor ground; xMin 19 m; xMax 22 m; yMin 10 m; yMax 20 m; grade D;   role materialAirlock; regime sink; pressure -20 Pa; relativeTo dispensing; }
        { room sprayDrying; floor ground; xMin 22 m; xMax 34 m; yMin 10 m; yMax 20 m; grade D;   pressure 15 Pa; relativeTo outside;
          containment yes; equipment ( dryer ); occupancy 1;
          atex { zone 1; source "EduTool teaching building"; reason "declared for the exercise as the solvent suite of a spray-dried dispersion (the host tutorial dries water)"; } }
        { room sdOut;       floor ground; xMin 34 m; xMax 37 m; yMin 10 m; yMax 20 m; grade D;   role materialAirlock; regime sink; pressure 5 Pa; relativeTo outside; }
        { room blending;    floor ground; xMin 37 m; xMax 45 m; yMin 10 m; yMax 20 m; grade D;   pressure 25 Pa; relativeTo outside; equipment ( blender ); }
        { room compression; floor ground; xMin 45 m; xMax 53 m; yMin 10 m; yMax 20 m; grade D;   pressure 25 Pa; relativeTo outside; equipment ( press ); occupancy 2; }
        { room coating;     floor ground; xMin 53 m; xMax 61 m; yMin 10 m; yMax 20 m; grade D;   pressure 25 Pa; relativeTo outside; equipment ( coater ); }
        { room exitMAL;     floor ground; xMin 61 m; xMax 64 m; yMin 10 m; yMax 20 m; grade D;   role materialAirlock; regime cascade; pressure 15 Pa; relativeTo outside; }
        { room packaging;   floor ground; xMin 64 m; xMax 72 m; yMin 10 m; yMax 20 m; grade CNC; pressure 5 Pa;  relativeTo outside; occupancy 3; }
        { room corridor;    floor ground; xMin 8 m;  xMax 64 m; yMin 6 m;  yMax 10 m; grade D;   pressure 25 Pa; relativeTo outside; }
        { room lobby;       floor ground; xMin 10 m; xMax 16 m; yMin 0 m;  yMax 6 m;  grade CNC; pressure 5 Pa;  relativeTo outside; }
        { room gowning;     floor ground; xMin 16 m; xMax 20 m; yMin 0 m;  yMax 6 m;  grade D;   role gowning; regime cascade; pressure 10 Pa; relativeTo lobby; }
        { room wasteAL;     floor ground; xMin 40 m; xMax 44 m; yMin 0 m;  yMax 6 m;  grade D;   role materialAirlock; regime cascade; pressure 15 Pa; relativeTo outside; }
        { room wasteRoom;   floor ground; xMin 44 m; xMax 50 m; yMin 0 m;  yMax 6 m;  grade CNC; pressure 5 Pa;  relativeTo outside; }
        { room electrical;  floor upper;  xMin 10 m; xMax 16 m; yMin 0 m;  yMax 6 m;  grade CNC; pressure 0 Pa;  relativeTo outside;
          ignition "switchgear and motor control centres"; }
    );

    //  Every opening: a door joins two rooms of one floor that share a wall,
    //  or a room and outside; a stair or a lift joins two floors.
    connections
    (
        { between ( warehouse outside );     type door; }
        { between ( warehouse MAL );         type door; }
        { between ( MAL dispensing );        type door; }
        { between ( dispensing sdIn );       type door; }
        { between ( sdIn sprayDrying );      type door; }
        { between ( sprayDrying sdOut );     type door; }
        { between ( sdOut blending );        type door; }
        { between ( blending compression );  type door; }
        { between ( compression coating );   type door; }
        { between ( coating exitMAL );       type door; }
        { between ( exitMAL packaging );     type door; }
        { between ( packaging outside );     type door; }
        { between ( dispensing corridor );   type door; }
        { between ( blending corridor );     type door; }
        { between ( compression corridor );  type door; }
        { between ( coating corridor );      type door; }
        { between ( lobby outside );         type door; }
        { between ( lobby gowning );         type door; }
        { between ( gowning corridor );      type door; }
        { between ( corridor wasteAL );      type door; }
        { between ( wasteAL wasteRoom );     type door; }
        { between ( wasteRoom outside );     type door; }
        { between ( lobby electrical );      type stair; }
    );

    //  The three flows, each one way.
    flows
    (
        { flow "product"; kind material; reason "raw API and excipients in, packed tablets out";
          path ( outside warehouse MAL dispensing sdIn sprayDrying sdOut blending compression coating exitMAL packaging outside ); }
        { flow "operators"; kind personnel; reason "the press operators' way in";
          path ( outside lobby gowning corridor compression ); }
        { flow "rejects"; kind waste; reason "rejected tablets out";
          path ( compression corridor wasteAL wasteRoom outside ); }
    );
}

// ************************************************************************* //
`,f="steady/drying/sprayDryer07_design",v="system/layoutDict",ie="gui/src/ui/methods/gmpTeachingBuilding.layoutDict",P="batch/plant/apalutamide01_tablets",L=re;function se(o,n){const t=new RegExp(`\\{[ \\t]*room[ \\t]+${n}[ \\t]*;`).exec(o);if(!t)throw new Error(`teaching building: no room \`${n}\``);let a=0;for(let r=t.index;r<o.length;r++)if(o[r]==="{")a++;else if(o[r]==="}"&&--a===0)return[t.index,r+1];throw new Error(`teaching building: room \`${n}\` has no closing brace`)}function ae(o,n){const[t,a]=n.room?se(o,n.room):[0,o.length],r=o.slice(t,a),s=r.indexOf(n.from),m=n.room?`room \`${n.room}\``:"the teaching building";if(s<0)throw new Error(`edit: \`${n.from}\` not found in ${m}`);if(r.indexOf(n.from,s+1)>=0)throw new Error(`edit: \`${n.from}\` occurs more than once in ${m}`);return o.slice(0,t+s)+n.to+o.slice(t+s+n.from.length)}function de(o,n){return n.reduce(ae,o)}function ce(o){const n=G(f);if(!n?.files.rawFiles)throw new Error(`GMP EduTool host '${f}' is not in the bundled corpus`);if(n.files.rawFiles[v]!==void 0)throw new Error(`GMP EduTool host '${f}' already declares a layoutDict; the teaching building would replace it`);return{...n.files.rawFiles,[v]:de(L,o)}}function N(o){return R(f,ce(o))}const M={id:"as-designed",label:"as designed",edits:[],expect:"no finding: every rule holds on the building as declared.",findings:[]},le={cascade:{label:"coating room pressure, to outside",unit:"Pa",shipped:25,min:-20,max:60,step:1,edit:o=>({room:"coating",from:"pressure 25 Pa;",to:`pressure ${o} Pa;`})},atex:{label:"declared ATEX separation",unit:"m",shipped:6,min:0,max:20,step:.5,edit:o=>({from:"atexSeparation { distance 6 m;",to:`atexSeparation { distance ${o} m;`})}},he={grades:[{id:"compression-C",label:"compression room to grade C",edits:[{room:"compression",from:"grade D;",to:"grade C;"}],expect:"raising ONE room's grade asks for everything a cleaner room needs: it must now be above the D corridor by the step (cascade), every door from it to a D room is a change of grade with no airlock (three of them), and the operators, gowned only for D, enter it un-gowned.",findings:["cascade:compression:corridor","cascade:compression:blending","cascade:compression:coating","gradeChangeWithoutAirlock:blending:compression","gradeChangeWithoutAirlock:compression:coating","gradeChangeWithoutAirlock:compression:corridor","ungownedEntry:operators:compression"]},{id:"packaging-D",label:"packaging to grade D",edits:[{room:"packaging",from:"grade CNC;",to:"grade D;"}],expect:"packaging is now graded and opens to outside through a plain door: a change of grade with no airlock, and a D room held only 5 Pa above outside, short of the step.",findings:["cascade:packaging:outside","gradeChangeWithoutAirlock:packaging:outside"]}],cascade:[{id:"coating-16",label:"coating at 16 Pa",edits:[{room:"coating",from:"pressure 25 Pa;",to:"pressure 16 Pa;"}],expect:"no finding: the coating room is 11 Pa above packaging across the cascade airlock (at least the 10 Pa step), and the airlock at 15 Pa still lies strictly between 5 and 16 Pa.",findings:[]},{id:"coating-15",label:"coating at 15 Pa",edits:[{room:"coating",from:"pressure 25 Pa;",to:"pressure 15 Pa;"}],expect:"the cascade itself holds (exactly 10 Pa above packaging), but the exit airlock, also at 15 Pa, is no longer strictly between its neighbours: it is not a step any more.",findings:["airlockRegime:exitMAL:cascade"]},{id:"coating-12",label:"coating at 12 Pa",edits:[{room:"coating",from:"pressure 25 Pa;",to:"pressure 12 Pa;"}],expect:"both rules: the coating room is only 7 Pa above packaging across the airlock (short of the step), and the airlock is above the room it should step down from.",findings:["cascade:coating:packaging","airlockRegime:exitMAL:cascade"]}],airlocks:[{id:"sdIn-bubble",label:"sdIn declared a bubble",edits:[{room:"sdIn",from:"regime sink;",to:"regime bubble;"}],expect:"the word changed and the pressures did not: at 5 Pa the airlock is no bubble (it would have to stand 10 Pa above both its neighbours), and once it is not a sink, the contained suite is asked to be below it by the step -- and it is above it.",findings:["airlockRegime:sdIn:bubble","containmentNotNegative:sprayDrying:sdIn"]},{id:"sdIn-cascade",label:"sdIn declared a cascade",edits:[{room:"sdIn",from:"regime sink;",to:"regime cascade;"}],expect:"a cascade airlock passes the contained room's air on to the dispensary, so the suite is reached through the wrong kind of airlock; at 5 Pa it is not between its neighbours either, and the suite is not below it.",findings:["airlockRegime:sdIn:cascade","containmentAccess:sprayDrying:sdIn","containmentNotNegative:sprayDrying:sdIn"]}],gowning:[{id:"gowning-CNC",label:"gowning room declared CNC",edits:[{room:"gowning",from:"grade D;",to:"grade CNC;"}],expect:"the operators now change into garments for CNC, and walk on into the D corridor and the D compression room: an un-gowned entry into each.",findings:["ungownedEntry:operators:corridor","ungownedEntry:operators:compression"]},{id:"skip-gowning",label:"operators skip the gowning room",edits:[{from:"path ( outside lobby gowning corridor compression );",to:"path ( outside lobby corridor compression );"}],expect:"the path now steps from the lobby straight into the corridor: no door joins them (a flow through a wall), and the operators enter both D rooms un-gowned.",findings:["flowBreak:operators:lobby->corridor","ungownedEntry:operators:corridor","ungownedEntry:operators:compression"]}],containment:[{id:"dispensing-contained",label:"contain the dispensary",edits:[{room:"dispensing",from:"containment no;",to:"containment yes;"}],expect:"declaring the dispensary contained changes what its doors must be: it opens directly on the corridor and through a cascade airlock, and it is not negative to either.",findings:["containmentAccess:dispensing:MAL","containmentAccess:dispensing:corridor","containmentNotNegative:dispensing:MAL","containmentNotNegative:dispensing:corridor"]},{id:"suite-door",label:"a door from the suite to the corridor",edits:[{from:"{ between ( sprayDrying sdOut );     type door; }",to:`{ between ( sprayDrying sdOut );     type door; }
        { between ( sprayDrying corridor );  type door; }`}],expect:"a contained room opened directly on the corridor.  Its pressure happens to be right (10 Pa below), and the door is still announced: containment is about the airlock, not only the number.",findings:["containmentAccess:sprayDrying:corridor"]}],flows:[{id:"rejects-through-train",label:"rejects out through the product train",edits:[{from:"path ( compression corridor wasteAL wasteRoom outside );",to:"path ( compression coating exitMAL packaging outside );"}],expect:"the waste now passes through three rooms the product passes through: waste meets material in each.",findings:["wasteMeetsMaterial:coating:rejects|product","wasteMeetsMaterial:exitMAL:rejects|product","wasteMeetsMaterial:packaging:rejects|product"]},{id:"operators-through-blending",label:"operators walk through blending",edits:[{from:"path ( outside lobby gowning corridor compression );",to:"path ( outside lobby gowning corridor blending compression );"}],expect:"the operators now pass THROUGH the blending room, which the product also passes through: the two flows cross there.",findings:["flowCrossing:blending:operators|product"]},{id:"product-back",label:"product back through the corridor",edits:[{from:"dispensing sdIn sprayDrying sdOut blending compression",to:"dispensing corridor blending compression"}],expect:"a route that skips the suite and uses the corridor: legal doors, but the operators and the product now share the corridor, and the rejects meet the product there too.",findings:["flowCrossing:corridor:operators|product","wasteMeetsMaterial:corridor:rejects|product"]}],atex:[{id:"atex-8",label:"separation 8 m",edits:[{from:"atexSeparation { distance 6 m;",to:"atexSeparation { distance 8 m;"}],expect:"the electrical room above the lobby is about 7.3 m from the spray-drying suite (6 m east, 4 m north, 1 m up), now closer than the declared separation.",findings:["atexIgnition:sprayDrying:electrical"]},{id:"atex-undeclared",label:"no separation declared",edits:[{from:`    atexSeparation { distance 6 m; source "EduTool teaching building"; reason "an author-set distance for the exercise, from no standard"; }
`,to:""}],expect:"a building with a hazardous-area room and an ignition room, and no separation declared: the isolation is unchecked, and the engine says so rather than pass it.",findings:["atexSeparationUndeclared:teaching OSD block:"]}],escape:[{id:"stair-lift",label:"the stair becomes a lift",edits:[{from:"{ between ( lobby electrical );      type stair; }",to:"{ between ( lobby electrical );      type lift; }"}],expect:"the electrical room's only way down is now a lift, and a lift is not an exit: no escape.",findings:["noEscape:electrical:"]},{id:"stair-door",label:"the stair becomes a door",edits:[{from:"{ between ( lobby electrical );      type stair; }",to:"{ between ( lobby electrical );      type door; }"}],expect:"REFUSED: a door joins two rooms of one floor, and these two are on different floors.  A building that cannot exist is refused; a building that breaks a rule is announced.",findings:[],refusal:"a door joins two rooms of ONE floor"}]};function me(o){return o?o.split(`
`).map(n=>n.trimEnd()).map(ee).filter(n=>n.startsWith("[building] ")||n.includes("layoutDict building: ")).filter(n=>!/^\[building\] .*: \d+ room\(s\) on /.test(n)):[]}const d=o=>{const n=te.find(t=>t.n===o);return n?e.jsx(J,{step:n},o):null},E=o=>Number.isFinite(o)?String(Number(o.toFixed(3))):"—";function ge({run:o,building:n,plans:t}){const[a,r]=b.useState("ground"),s=me(o.log),m=t.find(i=>i.floor===a)??t[0],x={personnel:!0,material:!0,waste:!0};return e.jsxs(e.Fragment,{children:[e.jsx(c,{order:6,mt:"sm",children:"What the engine said"}),o.err!==null?e.jsx(D,{color:"red",variant:"light",mt:4,title:"Refused -- the engine's message, verbatim",children:e.jsx(l,{size:"xs",ff:"monospace",style:{whiteSpace:"pre-wrap"},children:(()=>{const i=s.filter(p=>p.includes("layoutDict building: "));return(i.length>0?i:[o.err]).join(`
`)})()})}):o.busy||o.result===null?e.jsxs(k,{gap:"sm",mt:4,wrap:"nowrap",children:[e.jsx(C,{size:"xs"}),e.jsx(l,{size:"xs",c:"dimmed",children:"solving the host case and checking the building …"})]}):s.length===0?e.jsx(l,{size:"sm",mt:4,children:"Nothing to announce: every rule holds for this building."}):e.jsx(u,{mt:4,p:6,style:{background:"var(--mantine-color-default-hover)",borderRadius:4},children:s.map((i,p)=>e.jsx(l,{size:"xs",ff:"monospace",style:{whiteSpace:"pre-wrap"},children:i},p))}),o.err===null&&!o.busy&&n&&n.findings.length>0&&e.jsx(u,{"data-pan-x":"",style:{width:"100%",overflowX:"auto"},mt:6,children:e.jsxs(h,{striped:!0,withTableBorder:!0,fz:"xs",children:[e.jsx(h.Thead,{children:e.jsxs(h.Tr,{children:[e.jsx(h.Th,{children:"finding"}),e.jsx(h.Th,{children:"about"}),e.jsx(h.Th,{ta:"right",children:"value"}),e.jsx(h.Th,{ta:"right",children:"limit"})]})}),e.jsx(h.Tbody,{children:n.findings.map(i=>e.jsxs(h.Tr,{children:[e.jsx(h.Td,{ff:"monospace",children:i.kind}),e.jsx(h.Td,{children:[i.a,i.b].filter(Boolean).join(" · ")}),e.jsx(h.Td,{ta:"right",children:E(i.value)}),e.jsx(h.Td,{ta:"right",children:E(i.limit)})]},i.id))})]})}),o.err===null&&!o.busy&&m&&e.jsxs(u,{mt:8,children:[t.length>1&&e.jsx(V,{size:"xs",mb:4,value:m.floor,onChange:r,data:t.map(i=>({value:i.floor,label:`${i.floor} (${i.elevation} m)`}))}),e.jsx(X,{plan:m,flows:x})]})]})}function ue({edits:o}){return o.length===0?null:e.jsxs(u,{mt:8,children:[e.jsx(l,{size:"xs",fw:600,children:"The declaration you changed"}),o.map((n,t)=>e.jsx(A,{block:!0,mt:4,style:{whiteSpace:"pre-wrap",fontSize:11},children:(n.room?`// in room ${n.room}
`:"")+`- ${n.from.trim()}
+ ${n.to.trim()||"(removed)"}`},t))]})}function pe({part:o,base:n,title:t}){const a=he[o],r=le[o],[s,m]=b.useState(M.id),[x,i]=b.useState(null),p=s==="knob"?void 0:[M,...a].find(g=>g.id===s),y=s==="knob"&&r&&x!==null?[r.edit(x)]:p?.edits??[],I=S(y.length>0?()=>N(y):null,`gmp\0${JSON.stringify(y)}`,"choupoSolve"),T=y.length>0?I:n,w=T.err===null?T.result?.building:void 0,O=b.useMemo(()=>w?Y(w):[],[w]),z=g=>{m(g),i(null)};return e.jsxs(u,{p:"sm",style:{border:"1px solid var(--mantine-color-default-border)",borderRadius:6},"data-gmp-exercise":o,children:[e.jsxs(c,{order:5,children:["Exercise: ",t]}),e.jsx(k,{gap:6,mt:8,children:[M,...a].map(g=>e.jsx(j,{size:"compact-xs",variant:s===g.id?"filled":"default",onClick:()=>z(g.id),children:g.label},g.id))}),r&&e.jsx(u,{mt:10,maw:260,children:e.jsx(Z,{label:`${r.label} [${r.unit}]`,value:x??r.shipped,min:r.min,max:r.max,step:r.step,decimals:r.step<1?1:0,onChange:g=>{i(g),m(g===r.shipped?M.id:"knob")}})}),p&&e.jsxs(l,{size:"sm",mt:10,children:[e.jsx(l,{span:!0,fw:600,children:"What you should see: "}),p.expect]}),s==="knob"&&e.jsx(l,{size:"sm",mt:10,c:"dimmed",children:"Your own value: read the engine's answer below."}),e.jsx(ue,{edits:y}),e.jsx(ge,{run:T,building:w,plans:O})]})}function be({base:o}){const[n,t]=b.useState(!1),a=o.result?.layout,r=b.useMemo(()=>F(a),[a]),s=o.result?.building;return e.jsxs(u,{p:"sm",style:{border:"1px solid var(--mantine-color-default-border)",borderRadius:6},children:[e.jsx(c,{order:5,children:"The teaching building, as the engine checked it"}),e.jsxs(l,{size:"xs",c:"dimmed",mt:4,children:["A copy of the tutorial ",f," (one sized spray dryer), run in your browser with the teaching building written in as its system/layoutDict.  The tutorial on disk is not changed; the building is the file ",ie,"."]}),e.jsxs(j,{size:"compact-xs",variant:"default",mt:6,onClick:()=>t(m=>!m),children:[n?"Hide":"Read"," the declaration (system/layoutDict)"]}),n&&e.jsx(B,{h:360,mt:6,children:e.jsx(A,{block:!0,style:{fontSize:11},children:L})}),o.err!==null?e.jsx(D,{color:"red",variant:"light",mt:6,title:"The engine did not finish",children:e.jsx(l,{size:"xs",ff:"monospace",style:{whiteSpace:"pre-wrap"},children:o.err})}):o.busy||!s||!r?e.jsxs(k,{gap:"sm",mt:6,wrap:"nowrap",children:[e.jsx(C,{size:"xs"}),e.jsx(l,{size:"xs",c:"dimmed",children:"solving the host case and checking the building …"})]}):e.jsx(W,{building:s,scene:r}),e.jsx(Q,{children:"Every room, grade, pressure and distance in the teaching building is an author-set assumption for the exercise, except the 10 Pa step, which is declared from EU GMP Annex 1 para 4.14.  The dryer of the host tutorial evaporates water; its room is declared a solvent suite for the exercise."})]})}function Se(){const o=S(()=>N([]),"gmp\0as-designed","choupoSolve"),n=(t,a)=>e.jsx(pe,{part:t,base:o,title:a});return e.jsx(u,{style:{flex:1,minHeight:0,overflowY:"auto"},px:"md",py:"sm",children:e.jsxs(_,{gap:"md",style:{maxWidth:940,margin:"0 auto"},children:[e.jsxs(u,{children:[e.jsx(c,{order:3,children:"The GMP interior of a tablet plant: rooms, air and the ways through them"}),e.jsxs(l,{size:"sm",c:"dimmed",mt:4,children:["The cleanliness grades, the pressure cascade, airlocks, gowning, containment of a potent ingredient, the three flows, solvents and hazardous areas, and escape -- each with an exercise on a small teaching building the engine checks in your browser; and what the model does not do.  The plot plan outside the building is the subject of"," ",e.jsx($,{component:"button",type:"button",onClick:()=>H("plant-layout"),children:"Plant layout: where each item stands, and why"}),"."]})]}),e.jsx(c,{order:4,children:"Part 1 — cleanliness grades"}),d(1),d(2),e.jsx(be,{base:o}),n("grades","a cleaner room asks more of its neighbours"),e.jsx(c,{order:4,children:"Part 2 — the pressure cascade"}),d(3),d(4),n("cascade","the coating room's pressure"),e.jsx(c,{order:4,children:"Part 3 — airlocks"}),d(5),d(6),n("airlocks","the regime is a statement about pressure"),e.jsx(c,{order:4,children:"Part 4 — gowning"}),d(7),n("gowning","the gown and the grade"),e.jsx(c,{order:4,children:"Part 5 — containment of a potent ingredient"}),d(8),n("containment","dust stays in"),e.jsx(c,{order:4,children:"Part 6 — people, material and waste, one way each"}),d(9),d(10),n("flows","the three flows"),e.jsx(c,{order:4,children:"Part 7 — solvents and ATEX"}),d(11),d(12),n("atex","the suite and the switchgear"),e.jsx(c,{order:4,children:"Part 8 — escape"}),d(13),n("escape","a way out of every room"),e.jsx(c,{order:4,children:"A real plant"}),d(14),e.jsx(k,{children:e.jsxs(j,{size:"xs",variant:"light",onClick:()=>U(q(P)),children:["Open ",P," in a new tab"]})}),e.jsx(K,{limits:oe}),e.jsxs(u,{children:[e.jsx(c,{order:5,children:"Sources, and how each was reached"}),ne.map(t=>e.jsxs(u,{mt:6,children:[e.jsx(l,{size:"sm",children:t.cite}),e.jsx(l,{size:"xs",c:"dimmed",children:t.used})]},t.id))]})]})})}export{Se as GmpLayoutTool};
