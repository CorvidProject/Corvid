(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[73728],{32042:(e,r,a)=>{"use strict";a.d(r,{SnipezillaLegalShell:()=>c});var s=a(95155),t=a(12115),n=a(98500),o=a.n(n),i=a(17436),l=a(78571);function c({fileCode:e,classification:r,title:a,subtitle:n,intro:d,lastUpdated:p,sections:m,callout:x=null}){let[g,h]=(0,t.useState)(m[0]?.id||""),[b,f]=(0,t.useState)(0);return(0,t.useEffect)(()=>{let e=new IntersectionObserver(e=>{e.forEach(e=>{e.isIntersecting&&h(e.target.id)})},{rootMargin:"-30% 0px -55% 0px",threshold:0});m.forEach(r=>{let a=document.getElementById(r.id);a&&e.observe(a)});let r=()=>{let e=document.documentElement,r=e.scrollHeight-e.clientHeight;f(r>0?Math.min(1,e.scrollTop/r):0)};return window.addEventListener("scroll",r,{passive:!0}),r(),()=>{e.disconnect(),window.removeEventListener("scroll",r)}},[m]),(0,s.jsxs)("main",{className:"relative min-h-screen pt-28 pb-24",style:{background:"var(--v2-bg-0, #12161a)"},children:[(0,s.jsx)("style",{children:`
        @keyframes sz-leg-spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        @keyframes sz-leg-pulse { 0%,100% { opacity: 0.6; } 50% { opacity: 1; } }
        .sz-leg-reticle { animation: sz-leg-spin 28s linear infinite; transform-origin: 50% 50%; }
        .sz-leg-pulse { animation: sz-leg-pulse 2.4s ease-in-out infinite; }
      `}),(0,s.jsx)("div",{"aria-hidden":!0,className:"pointer-events-none fixed inset-0",style:{backgroundImage:"linear-gradient(rgba(168,255,0,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(168,255,0,0.05) 1px, transparent 1px)",backgroundSize:"48px 48px",maskImage:"radial-gradient(ellipse 70% 80% at 50% 30%, #000 0%, transparent 80%)"}}),(0,s.jsx)("div",{"aria-hidden":!0,className:"fixed left-0 right-0 top-0 z-40 h-[2px] pointer-events-none",style:{background:"rgba(168,255,0,0.08)"},children:(0,s.jsx)("div",{className:"h-full",style:{width:`${100*b}%`,background:"linear-gradient(90deg, #A8FF00 0%, #E91E8C 100%)",boxShadow:"0 0 14px rgba(168,255,0,0.55)",transition:"width 100ms linear"}})}),(0,s.jsxs)("div",{className:"relative mx-auto max-w-7xl px-6 lg:px-10",children:[(0,s.jsxs)("div",{className:"flex items-center justify-between border-y border-white/[0.08] py-3 mb-12 font-mono text-[10px] tracking-[0.22em] uppercase",style:{color:"rgba(255,255,255,0.45)"},children:[(0,s.jsxs)("span",{className:"flex items-center gap-2",children:[(0,s.jsx)("span",{className:"w-1.5 h-1.5 rounded-full sz-leg-pulse",style:{background:"#A8FF00",boxShadow:"0 0 8px #A8FF00"}}),r]}),(0,s.jsxs)("span",{className:"hidden sm:inline",children:[l.wk.name.toUpperCase()," \xb7 LEGAL DOSSIER"]}),(0,s.jsxs)("span",{children:["FILE \xb7 ",e," \xb7 ",p]})]}),(0,s.jsxs)("header",{className:"mb-20 grid grid-cols-1 lg:grid-cols-12 gap-10 items-start",children:[(0,s.jsxs)("div",{className:"lg:col-span-8 relative",children:[(0,s.jsxs)("span",{className:"inline-block font-mono text-[10px] tracking-[0.24em] uppercase mb-7 px-3 py-1.5",style:{color:"var(--v2-accent-text)",border:"1px solid rgba(168,255,0,0.30)",background:"rgba(168,255,0,0.05)"},children:["✦ ",n]}),(0,s.jsxs)(i.P.div,{initial:{y:12,opacity:0},animate:{y:0,opacity:1},transition:{duration:.85,ease:[.16,1,.3,1]},className:"relative",children:[(0,s.jsx)("span",{"aria-hidden":!0,className:"absolute inset-0 font-heading font-extrabold leading-[0.92] tracking-[-0.04em] select-none",style:{fontSize:"clamp(3rem, 7vw, 5.5rem)",color:"rgba(233,30,140,0.55)",transform:"translate(-2px, 0)",mixBlendMode:"screen"},children:a}),(0,s.jsx)("span",{"aria-hidden":!0,className:"absolute inset-0 font-heading font-extrabold leading-[0.92] tracking-[-0.04em] select-none",style:{fontSize:"clamp(3rem, 7vw, 5.5rem)",color:"rgba(168,255,0,0.55)",transform:"translate(2px, 0)",mixBlendMode:"screen"},children:a}),(0,s.jsx)("h1",{className:"relative font-heading font-extrabold leading-[0.92] tracking-[-0.04em] text-white",style:{fontSize:"clamp(3rem, 7vw, 5.5rem)"},children:a})]}),(0,s.jsx)("p",{className:"mt-7 max-w-xl text-base leading-relaxed",style:{color:"rgba(255,255,255,0.62)"},children:d})]}),(0,s.jsx)("aside",{className:"lg:col-span-4 hidden lg:block lg:pt-2",children:(0,s.jsxs)("div",{className:"relative flex flex-col items-center justify-center",style:{border:"1px solid rgba(168,255,0,0.20)",background:"rgba(168,255,0,0.03)",padding:"28px 24px",aspectRatio:"1 / 1"},children:[[{d:"M 14 4 L 4 4 L 4 14",cls:"top-1 left-1"},{d:"M 4 4 L 14 4 L 14 14",cls:"top-1 right-1"},{d:"M 4 4 L 4 14 L 14 14",cls:"bottom-1 left-1"},{d:"M 14 4 L 14 14 L 4 14",cls:"bottom-1 right-1"}].map((e,r)=>(0,s.jsx)("svg",{width:"16",height:"16",viewBox:"0 0 18 18",className:`absolute ${e.cls} pointer-events-none`,fill:"none",children:(0,s.jsx)("path",{d:e.d,stroke:"#A8FF00",strokeWidth:"1.4",strokeLinecap:"square"})},r)),(0,s.jsxs)("svg",{viewBox:"0 0 200 200",className:"w-full h-full max-w-[180px] sz-leg-reticle","aria-hidden":!0,children:[(0,s.jsx)("circle",{cx:"100",cy:"100",r:"86",fill:"none",stroke:"#A8FF00",strokeWidth:"0.5",strokeOpacity:"0.25",strokeDasharray:"3 9"}),[0,90,180,270].map(e=>{let r=e*Math.PI/180;return(0,s.jsx)("line",{x1:100+80*Math.cos(r),y1:100+80*Math.sin(r),x2:100+92*Math.cos(r),y2:100+92*Math.sin(r),stroke:"#A8FF00",strokeWidth:"2",strokeOpacity:"0.75"},e)}),(0,s.jsx)("circle",{cx:"100",cy:"100",r:"3",fill:"#A8FF00"})]}),(0,s.jsx)("div",{className:"mt-3 font-heading text-[15px] tracking-[0.06em] uppercase text-center",style:{color:"rgba(168,255,0,0.95)"},children:l.wk.name})]})})]}),x&&(0,s.jsxs)("div",{className:"mb-14 px-5 py-4 relative",style:{borderLeft:`3px solid ${"warn"===x.kind?"#E91E8C":"#A8FF00"}`,background:"warn"===x.kind?"rgba(233,30,140,0.05)":"rgba(168,255,0,0.04)"},children:[(0,s.jsxs)("div",{className:"font-mono text-[10px] tracking-[0.22em] uppercase mb-1.5",style:{color:"warn"===x.kind?"#E91E8C":"#A8FF00"},children:["※ ",x.label]}),(0,s.jsx)("div",{className:"text-[14px] leading-relaxed",style:{color:"rgba(255,255,255,0.85)"},children:x.body})]}),(0,s.jsxs)("div",{className:"grid grid-cols-1 lg:grid-cols-12 gap-12",children:[(0,s.jsxs)("nav",{className:"lg:col-span-3 lg:sticky lg:top-24 lg:self-start lg:max-h-[calc(100vh-7rem)] lg:overflow-y-auto",children:[(0,s.jsx)("div",{className:"font-mono text-[9px] tracking-[0.24em] uppercase mb-4",style:{color:"rgba(255,255,255,0.30)"},children:"// INTEL INDEX"}),(0,s.jsx)("ul",{className:"space-y-0.5",children:m.map(e=>{let r=g===e.id;return(0,s.jsx)("li",{children:(0,s.jsxs)("a",{href:`#${e.id}`,className:"group flex items-center gap-3 py-2 pl-3 pr-2 border-l-2 transition-all font-mono uppercase text-[11px] tracking-[0.06em]",style:{borderColor:r?"#A8FF00":"rgba(255,255,255,0.06)",color:r?"#FFFFFF":"rgba(255,255,255,0.45)",background:r?"rgba(168,255,0,0.05)":"transparent"},children:[(0,s.jsx)("span",{style:{color:r?"#A8FF00":"rgba(255,255,255,0.30)"},children:e.code}),(0,s.jsx)("span",{children:e.title})]})},e.id)})}),(0,s.jsxs)("div",{className:"mt-8 pt-6 border-t border-white/[0.06] space-y-2.5 font-mono text-[9px] tracking-[0.20em] uppercase",style:{color:"rgba(255,255,255,0.30)"},children:[(0,s.jsxs)(o(),{href:"/privacy",className:"flex items-center justify-between hover:text-white transition-colors",children:[(0,s.jsx)("span",{children:"Privacy"}),(0,s.jsx)("span",{children:"↗"})]}),(0,s.jsxs)(o(),{href:"/terms",className:"flex items-center justify-between hover:text-white transition-colors",children:[(0,s.jsx)("span",{children:"Terms"}),(0,s.jsx)("span",{children:"↗"})]}),(0,s.jsxs)(o(),{href:"/docs",className:"flex items-center justify-between hover:text-white transition-colors",children:[(0,s.jsx)("span",{children:"Docs"}),(0,s.jsx)("span",{children:"↗"})]})]})]}),(0,s.jsxs)("div",{className:"lg:col-span-9 sz-legal-prose",children:[m.map((e,r)=>(0,s.jsxs)("section",{id:e.id,className:"scroll-mt-28 relative mb-16",children:[(0,s.jsxs)("div",{className:"flex items-baseline gap-4 mb-5 pb-3 border-b border-white/[0.08] relative",children:[(0,s.jsx)("span",{className:"font-heading font-extrabold leading-none",style:{fontSize:"clamp(2.2rem, 3vw, 2.8rem)",color:"#A8FF00",textShadow:"0 0 18px rgba(168,255,0,0.32)",letterSpacing:"-0.04em"},children:e.code}),(0,s.jsxs)("span",{className:"font-mono text-[10px] tracking-[0.22em] uppercase pb-2",style:{color:"rgba(255,255,255,0.45)"},children:["/ ",e.tag]}),(0,s.jsx)("h2",{className:"ml-auto font-heading text-[26px] sm:text-[32px] tracking-[-0.01em] text-white leading-tight pb-1",style:{textAlign:"right"},children:e.title})]}),(0,s.jsx)("div",{className:"max-w-[70ch] text-[15px] leading-[1.75]",style:{color:"rgba(255,255,255,0.72)"},children:e.body}),r<m.length-1&&(0,s.jsxs)("div",{className:"mt-12 flex items-center gap-3","aria-hidden":!0,children:[(0,s.jsx)("span",{className:"flex-1 h-px",style:{background:"rgba(168,255,0,0.12)"}}),(0,s.jsxs)("svg",{viewBox:"0 0 24 24",width:"14",height:"14",fill:"none",children:[(0,s.jsx)("circle",{cx:"12",cy:"12",r:"9",stroke:"#A8FF00",strokeWidth:"0.8",strokeOpacity:"0.6"}),(0,s.jsx)("line",{x1:"12",y1:"1",x2:"12",y2:"6",stroke:"#A8FF00",strokeWidth:"1",strokeOpacity:"0.8"}),(0,s.jsx)("line",{x1:"12",y1:"18",x2:"12",y2:"23",stroke:"#A8FF00",strokeWidth:"1",strokeOpacity:"0.8"}),(0,s.jsx)("line",{x1:"1",y1:"12",x2:"6",y2:"12",stroke:"#A8FF00",strokeWidth:"1",strokeOpacity:"0.8"}),(0,s.jsx)("line",{x1:"18",y1:"12",x2:"23",y2:"12",stroke:"#A8FF00",strokeWidth:"1",strokeOpacity:"0.8"}),(0,s.jsx)("circle",{cx:"12",cy:"12",r:"1.5",fill:"#A8FF00"})]}),(0,s.jsx)("span",{className:"flex-1 h-px",style:{background:"rgba(168,255,0,0.12)"}})]})]},e.id)),(0,s.jsxs)("div",{className:"mt-20 pt-8 flex flex-wrap items-center gap-x-6 gap-y-2 font-mono text-[10px] tracking-[0.22em] uppercase",style:{borderTop:"1px solid rgba(255,255,255,0.10)",color:"rgba(255,255,255,0.40)"},children:[(0,s.jsx)("span",{style:{color:"#A8FF00"},children:"✦ END OF FILE"}),(0,s.jsx)("span",{children:"\xb7"}),(0,s.jsx)("span",{children:e}),(0,s.jsx)("span",{children:"\xb7"}),(0,s.jsx)("span",{children:p}),(0,s.jsx)("span",{className:"ml-auto",children:(0,s.jsx)("a",{href:"#top",className:"hover:text-white transition-colors",children:"↑ TOP"})})]})]})]})]}),(0,s.jsx)("style",{children:`
        .sz-legal-prose p { margin: 0 0 1rem; }
        .sz-legal-prose ul { margin: 0.4rem 0 1.25rem 0; padding: 0; list-style: none; }
        .sz-legal-prose ul li { position: relative; padding: 0.2rem 0 0.2rem 1.5rem; margin: 0 0 0.3rem; }
        .sz-legal-prose ul li::before {
          content: "▸";
          position: absolute; left: 0; top: 0.2rem;
          color: #A8FF00;
          font-family: var(--font-jetbrains-mono), ui-monospace, monospace;
          font-size: 0.85em;
        }
        .sz-legal-prose strong { color: #fff; font-weight: 600; }
        .sz-legal-prose code {
          background: rgba(168,255,0,0.08);
          color: #D4FF80;
          padding: 1px 6px;
          font-size: 13px;
          font-family: var(--font-jetbrains-mono), ui-monospace, monospace;
        }
        .sz-legal-prose .legal-caps {
          font-family: var(--font-jetbrains-mono), ui-monospace, monospace;
          font-size: 10.5px;
          letter-spacing: 0.20em;
          text-transform: uppercase;
          color: #A8FF00;
          margin-top: 1.5rem;
          margin-bottom: 0.5rem;
        }
        .sz-legal-prose a { color: #A8FF00; text-decoration: none; border-bottom: 1px dotted rgba(168,255,0,0.5); transition: color 120ms; }
        .sz-legal-prose a:hover { color: #fff; border-bottom-color: #fff; }
      `})]})}},43671:(e,r,a)=>{"use strict";a.d(r,{FuncoreShellStyles:()=>t});var s=a(95155);function t(){return(0,s.jsx)("style",{children:`
      /* Scope everything to the funcore brand attribute. */
      :root[data-brand="funcore"] main section[id] {
        position: relative;
        padding: 8px 22px 22px;
        border-radius: 10px;
        transition: background 0.35s ease, box-shadow 0.35s ease, border-color 0.35s ease;
        border: 1px solid transparent;
      }
      :root[data-brand="funcore"] main section[id]:hover {
        background: rgba(0,207,255,0.025);
        border-color: rgba(0,207,255,0.20);
        box-shadow: 0 14px 40px -14px rgba(0,207,255,0.30);
      }
      :root[data-brand="funcore"] main section[id]::before,
      :root[data-brand="funcore"] main section[id]::after {
        content: "";
        position: absolute;
        width: 14px;
        height: 14px;
        border-color: rgba(0,207,255,0.55);
        opacity: 0;
        transition: opacity 0.35s ease;
        pointer-events: none;
      }
      :root[data-brand="funcore"] main section[id]::before {
        top: -1px; left: -1px;
        border-top: 1.5px solid;
        border-left: 1.5px solid;
        border-top-left-radius: 10px;
      }
      :root[data-brand="funcore"] main section[id]::after {
        bottom: -1px; right: -1px;
        border-bottom: 1.5px solid;
        border-right: 1.5px solid;
        border-bottom-right-radius: 10px;
      }
      :root[data-brand="funcore"] main section[id]:hover::before,
      :root[data-brand="funcore"] main section[id]:hover::after {
        opacity: 1;
      }

      /* Section heading underline + chevron — animates on hover. */
      :root[data-brand="funcore"] main section[id] h2 {
        position: relative;
        padding-left: 22px;
      }
      :root[data-brand="funcore"] main section[id] h2::before {
        content: "▸";
        position: absolute;
        left: 0;
        top: 0.18em;
        color: #00CFFF;
        font-size: 0.72em;
        text-shadow: 0 0 10px rgba(0,207,255,0.55);
        transition: transform 0.3s ease;
      }
      :root[data-brand="funcore"] main section[id]:hover h2::before {
        transform: translateX(3px);
      }

      /* Caps eyebrow ("legal-caps") — small rounded cyan pill. */
      :root[data-brand="funcore"] .legal-caps {
        display: inline-block !important;
        margin-top: 14px;
        padding: 3px 11px;
        border-radius: 999px;
        font-size: 10px !important;
        letter-spacing: 0.22em;
        text-transform: uppercase;
        color: #A0EEFF !important;
        background: rgba(0,207,255,0.08);
        border: 1px solid rgba(0,207,255,0.22);
      }

      /* Lists — replace default disc with a glowing cyan chevron. */
      :root[data-brand="funcore"] main section[id] ul {
        list-style: none;
        padding-left: 0;
      }
      :root[data-brand="funcore"] main section[id] ul li {
        position: relative;
        padding-left: 22px;
        margin: 7px 0;
        line-height: 1.65;
      }
      :root[data-brand="funcore"] main section[id] ul li::before {
        content: "›";
        position: absolute;
        left: 4px;
        top: -2px;
        color: rgba(0,207,255,0.85);
        font-size: 1.1em;
        line-height: 1.4;
        text-shadow: 0 0 6px rgba(0,207,255,0.40);
      }

      /* Bold terms inside list items pop in cyan. */
      :root[data-brand="funcore"] main section[id] ul li strong {
        color: #D0F4FF;
        font-weight: 600;
      }

      /* Active TOC item — cyan glowing pill. */
      :root[data-brand="funcore"] aside [aria-current="true"] {
        background: rgba(0,207,255,0.10) !important;
        border-left-color: #00CFFF !important;
        box-shadow: inset 0 0 14px rgba(0,207,255,0.18);
      }
    `})}},58442:(e,r,a)=>{"use strict";a.d(r,{LunarisCallout:()=>x,LunarisChapter:()=>m,LunarisLegalShell:()=>p});var s=a(95155),t=a(12115),n=a(17436),o=a(98500),i=a.n(o),l=a(78571),c=a(25356),d=a(46938);function p({eyebrow:e,title:r,intro:a,lastUpdated:o,docCode:m,sections:x,children:g}){let[h,b]=(0,t.useState)(x[0]?.id??null);return(0,t.useEffect)(()=>{let e=new IntersectionObserver(e=>{let r=e.filter(e=>e.isIntersecting).sort((e,r)=>e.boundingClientRect.top-r.boundingClientRect.top);r[0]&&b(r[0].target.id)},{rootMargin:"-30% 0% -55% 0%",threshold:0});return x.forEach(r=>{let a=document.getElementById(r.id);a&&e.observe(a)}),()=>e.disconnect()},[x]),(0,s.jsxs)("div",{className:"lunaris-shell relative min-h-screen",style:{background:"#060B17"},children:[(0,s.jsxs)("section",{className:"relative overflow-hidden",style:{minHeight:"60vh"},children:[(0,s.jsx)("div",{className:"absolute inset-0",children:(0,s.jsx)(d.g,{})}),(0,s.jsx)(n.P.div,{"aria-hidden":!0,className:"absolute right-[-6%] top-[10%] hidden md:block",style:{width:"min(360px, 32vw)",aspectRatio:"1 / 1",opacity:.85},animate:{y:[0,-8,0]},transition:{duration:14,ease:"easeInOut",repeat:1/0},children:(0,s.jsx)(c.S,{size:360,phase:"full",rotate:!0,rotateDuration:420,idPrefix:"legal-hero-moon",craterCount:90})}),(0,s.jsxs)("div",{className:"relative z-10 px-6 lg:px-12 pt-32 pb-16 max-w-6xl mx-auto",children:[(0,s.jsxs)(i(),{href:"/",className:"inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.28em] mb-8",style:{color:"rgba(168,191,216,0.55)"},children:["← ",l.wk.name]}),(0,s.jsxs)("div",{className:"flex items-center gap-3 mb-5",children:[(0,s.jsx)("span",{className:"orbit-label inline-flex rounded-full p-px",children:(0,s.jsx)("span",{className:"inline-flex items-center rounded-full px-3.5 py-1 text-xs font-medium uppercase tracking-[0.18em] bg-[#060B17]",style:{color:"#C5DAEF"},children:e})}),(0,s.jsx)("span",{className:"font-mono text-[10px] tracking-[0.22em] uppercase",style:{color:"rgba(168,191,216,0.45)"},children:m})]}),(0,s.jsx)("h1",{className:"font-heading font-light leading-[0.98] tracking-[-0.038em] gradient-text",style:{fontSize:"clamp(2.6rem, 6.4vw, 5.4rem)",maxWidth:880},children:r}),(0,s.jsx)("p",{className:"mt-7 leading-relaxed",style:{fontSize:"clamp(1.05rem, 1.4vw, 1.2rem)",color:"rgba(168,191,216,0.85)",maxWidth:620},children:a}),(0,s.jsxs)("div",{className:"mt-10 flex flex-wrap items-center gap-6",children:[(0,s.jsxs)("span",{className:"font-mono text-[10px] uppercase tracking-[0.22em]",style:{color:"rgba(168,191,216,0.55)"},children:["Last revised \xb7 ",o]}),(0,s.jsxs)("span",{className:"font-mono text-[10px] uppercase tracking-[0.22em]",style:{color:"rgba(168,191,216,0.45)"},children:[x.length," chapters"]})]})]})]}),(0,s.jsx)("section",{className:"relative",children:(0,s.jsx)("div",{className:"mx-auto max-w-6xl px-6 lg:px-12 pb-24",children:(0,s.jsxs)("div",{className:"grid grid-cols-1 lg:grid-cols-[220px_1fr] gap-10",children:[(0,s.jsx)("aside",{className:"hidden lg:block",children:(0,s.jsxs)("div",{className:"sticky top-28",children:[(0,s.jsx)("p",{className:"font-mono text-[10px] uppercase tracking-[0.22em] mb-4",style:{color:"rgba(168,191,216,0.45)"},children:"Chapters"}),(0,s.jsxs)("ol",{className:"relative pl-4 list-none m-0",children:[(0,s.jsx)("span",{"aria-hidden":!0,className:"absolute top-2 bottom-2 left-1 w-px",style:{background:"linear-gradient(180deg, transparent, rgba(184,207,232,0.30) 12%, rgba(184,207,232,0.30) 88%, transparent)"}}),x.map(e=>{let r=e.id===h;return(0,s.jsxs)("li",{className:"relative mb-3",children:[(0,s.jsx)("span",{className:"absolute -left-3 top-[7px] h-1.5 w-1.5 rounded-full transition-all duration-300",style:{background:r?"#ECF2FA":"rgba(184,207,232,0.30)",boxShadow:r?"0 0 8px rgba(216,229,244,0.85)":"none"}}),(0,s.jsxs)("a",{href:`#${e.id}`,className:"block py-1 text-[12px] transition-colors",style:{color:r?"#ECF2FA":"rgba(168,191,216,0.65)",fontWeight:r?500:400},children:[(0,s.jsx)("span",{className:"font-mono mr-2",style:{color:r?"#C5DAEF":"rgba(168,191,216,0.40)"},children:e.num}),e.label]})]},e.id)})]})]})}),(0,s.jsxs)("div",{className:"lunaris-prose min-w-0",children:[g,(0,s.jsxs)("div",{className:"mt-16 pt-8 flex flex-wrap items-center justify-between gap-4 text-[11px] font-mono uppercase tracking-[0.22em]",style:{color:"rgba(168,191,216,0.45)",borderTop:"1px solid rgba(184,207,232,0.10)"},children:[(0,s.jsxs)("span",{children:["◐ ",l.wk.name.toUpperCase()," \xb7 ALMANAC \xb7 ",m]}),(0,s.jsxs)("div",{className:"flex items-center gap-5",children:[(0,s.jsx)("a",{href:"#top",className:"transition-colors hover:text-[#ECF2FA]",children:"↑ Top"}),(0,s.jsx)(i(),{href:"/terms",className:"transition-colors hover:text-[#ECF2FA]",children:"Terms"}),(0,s.jsx)(i(),{href:"/privacy",className:"transition-colors hover:text-[#ECF2FA]",children:"Privacy"})]})]})]})]})})}),(0,s.jsx)("style",{children:`
        .lunaris-prose {
          color: rgba(168,191,216,0.85);
          font-size: 16px;
          line-height: 1.78;
        }
        .lunaris-prose .lunaris-chapter {
          position: relative;
          margin-top: 56px;
          padding: 32px 32px 28px;
          border-radius: 20px;
          background: linear-gradient(180deg, rgba(29,36,42,0.72) 0%, rgba(24,29,34,0.72) 100%);
          border: 1px solid rgba(184,207,232,0.10);
          box-shadow: 0 18px 60px rgba(12,14,17,0.45);
        }
        .lunaris-prose .lunaris-chapter:first-child { margin-top: 0; }
        .lunaris-prose .lunaris-chapter::before {
          content: "";
          position: absolute;
          inset-inline: 32px;
          top: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(216,229,244,0.55) 30%, rgba(184,207,232,0.35) 70%, transparent);
        }
        .lunaris-prose .lunaris-chapter-head {
          display: flex;
          align-items: baseline;
          gap: 14px;
          flex-wrap: wrap;
          margin-bottom: 18px;
          padding-bottom: 14px;
          border-bottom: 1px solid rgba(184,207,232,0.08);
        }
        .lunaris-prose .lunaris-chapter-num {
          font-family: var(--font-jetbrains-mono), ui-monospace, monospace;
          font-size: 11px;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: #C5DAEF;
        }
        .lunaris-prose .lunaris-chapter-title {
          font-family: var(--font-heading, inherit);
          font-weight: 300;
          font-size: 28px;
          letter-spacing: -0.02em;
          color: #ECF2FA;
          margin: 0;
        }
        .lunaris-prose p { margin: 0 0 14px; }
        .lunaris-prose p:last-child { margin-bottom: 0; }
        .lunaris-prose a {
          color: #C5DAEF;
          text-decoration: none;
          border-bottom: 1px dotted rgba(184,207,232,0.45);
          transition: color 120ms, border-color 120ms;
        }
        .lunaris-prose a:hover {
          color: #ECF2FA;
          border-bottom-color: #ECF2FA;
        }
        .lunaris-prose strong { color: #ECF2FA; font-weight: 600; }
        .lunaris-prose ul {
          list-style: none;
          padding: 0;
          margin: 8px 0 14px;
        }
        .lunaris-prose ul li {
          position: relative;
          padding: 4px 0 4px 22px;
        }
        .lunaris-prose ul li::before {
          content: "◐";
          position: absolute;
          left: 0;
          top: 4px;
          color: #C5DAEF;
          font-size: 11px;
          line-height: 1.78;
        }
        .lunaris-prose .legal-caps {
          font-family: var(--font-jetbrains-mono), ui-monospace, monospace;
          font-size: 10px;
          letter-spacing: 0.24em;
          text-transform: uppercase;
          color: #93B5DB;
          margin-top: 18px;
          margin-bottom: 6px;
        }
        .lunaris-callout {
          margin: 16px 0;
          padding: 14px 18px;
          border-radius: 12px;
          background: rgba(184,207,232,0.06);
          border-left: 2px solid #C5DAEF;
        }
        .lunaris-callout-label {
          display: block;
          font-family: var(--font-jetbrains-mono), ui-monospace, monospace;
          font-size: 10px;
          letter-spacing: 0.24em;
          text-transform: uppercase;
          color: #C5DAEF;
          margin-bottom: 4px;
        }
      `})]})}function m({num:e,id:r,title:a,children:t}){return(0,s.jsxs)("section",{id:r,className:"lunaris-chapter",children:[(0,s.jsxs)("header",{className:"lunaris-chapter-head",children:[(0,s.jsxs)("span",{className:"lunaris-chapter-num",children:["Chapter ",e]}),(0,s.jsx)("h2",{className:"lunaris-chapter-title",children:a})]}),t]})}function x({label:e,children:r}){return(0,s.jsxs)("div",{className:"lunaris-callout",children:[(0,s.jsx)("span",{className:"lunaris-callout-label",children:e}),(0,s.jsx)("div",{children:r})]})}},73728:(e,r,a)=>{Promise.resolve().then(a.bind(a,29993)),Promise.resolve().then(a.bind(a,99266)),Promise.resolve().then(a.bind(a,43671)),Promise.resolve().then(a.bind(a,23630)),Promise.resolve().then(a.bind(a,50805)),Promise.resolve().then(a.bind(a,9895)),Promise.resolve().then(a.bind(a,95304)),Promise.resolve().then(a.bind(a,58442)),Promise.resolve().then(a.bind(a,32042)),Promise.resolve().then(a.bind(a,37399)),Promise.resolve().then(a.bind(a,89816)),Promise.resolve().then(a.bind(a,14922))}}]);