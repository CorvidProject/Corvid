(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[19040],{17836:(o,e,r)=>{Promise.resolve().then(r.t.bind(r,98500,23)),Promise.resolve().then(r.bind(r,43671))},43671:(o,e,r)=>{"use strict";r.d(e,{FuncoreShellStyles:()=>a});var t=r(95155);function a(){return(0,t.jsx)("style",{children:`
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
    `})}}},o=>{o.O(0,[98500,28441,93794,77358],()=>o(o.s=17836)),_N_E=o.O()}]);