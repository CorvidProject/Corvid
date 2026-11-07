import { AccordionList } from "@/components/landing/accordion-list";
import { tokenItems } from "./accordion-data";

export function TokenSection() {
  return (
    <>
      <div data-reveal style={{ "--rv-clip": "inset(100% 0% 0% 0%)" }}>
        <section
          id="token"
          className="relative overflow-hidden"
          style={{ background: "var(--v2-bg-0, #0A0A0F)" }}
        >
          <div
            className="absolute inset-0 pointer-events-none z-0"
            style={{
              backgroundImage:
                "radial-gradient(circle, rgba(255,255,255,0.055) 1px, transparent 1px)",
              backgroundSize: "28px 28px",
              opacity: "0.25",
            }}
          ></div>
          <div
            className="relative z-10 flex items-center justify-between px-6 lg:px-12 py-5"
            style={{ borderBottom: "1px solid rgba(255,255,255,0.08)" }}
          >
            <span
              className="font-mono text-[11px] tracking-[0.12em] uppercase"
              style={{ color: "rgba(255,255,255,0.65)" }}
            >
              [ TOKEN ]
            </span>
            <span
              className="font-mono text-[11px] tracking-[0.12em] uppercase"
              style={{ color: "rgba(255,255,255,0.65)" }}
            >
              TBA LAUNCH
            </span>
          </div>
          <div
            className="relative z-10 px-6 lg:px-12 py-10 lg:py-14 flex items-center justify-between gap-8"
            style={{ borderBottom: "1px solid rgba(255,255,255,0.08)" }}
          >
            <div className="flex-1 min-w-0">
              <h2
                className="sz-chromatic-title font-heading font-extrabold leading-[1.0] tracking-[-0.04em] pb-1"
                data-reveal
                style={{
                  fontSize: "clamp(2rem, 4vw, 4rem)",
                  color: "#fff",
                  "--rv-t": "translateY(32px)",
                }}
              >
                Powering execution across the platform
              </h2>
              <p
                className="font-sans text-lg font-medium mt-4 leading-relaxed"
                data-reveal
                style={{
                  color: "rgba(255,255,255,0.70)",
                  maxWidth: "560px",
                  "--rv-t": "translateY(10px)",
                }}
              >
                A planned token. Nothing in Corvid requires it today.
              </p>
              <p
                className="font-mono text-xs font-semibold tracking-[0.14em] uppercase mt-4"
                data-reveal
                style={{
                  color: "var(--v2-accent-text)",
                  "--rv-t": "translateY(10px)",
                }}
              >
                Not launched yet · details will be published in the docs first
              </p>
            </div>
            <div
              className="hidden md:flex items-center justify-center flex-shrink-0 relative overflow-hidden"
              data-reveal
              style={{
                width: "200px",
                height: "160px",
                "--rv-t": "scale(0.8)",
              }}
            >
              <svg
                viewBox="0 0 200 200"
                className="w-full h-full"
                style={{ maxWidth: "200px", maxHeight: "200px" }}
              >
                <defs>
                  <radialGradient id="net-core" cx="50%" cy="50%" r="50%">
                    <stop
                      offset="0%"
                      stopColor="var(--v2-accent)"
                      stopOpacity="0.5"
                    ></stop>
                    <stop
                      offset="100%"
                      stopColor="var(--v2-accent)"
                      stopOpacity="0"
                    ></stop>
                  </radialGradient>
                  <style
                    dangerouslySetInnerHTML={{
                      __html:
                        "\n          @keyframes dash-flow {\n            from { stroke-dashoffset: 40; }\n            to   { stroke-dashoffset: 0; }\n          }\n          .edge-flow { animation: dash-flow 1.6s linear infinite; }\n          .edge-flow-slow { animation: dash-flow 2.8s linear infinite; }\n        ",
                    }}
                  />
                </defs>
                <line
                  x1="100"
                  y1="100"
                  x2="100"
                  y2="28"
                  stroke="var(--v2-accent)"
                  strokeOpacity="0.18"
                  strokeWidth="0.7"
                  strokeDasharray="3 5"
                  className="edge-flow"
                  style={{ animationDelay: "0s" }}
                ></line>
                <line
                  x1="100"
                  y1="100"
                  x2="168"
                  y2="58"
                  stroke="var(--v2-accent)"
                  strokeOpacity="0.18"
                  strokeWidth="0.7"
                  strokeDasharray="3 5"
                  className="edge-flow"
                  style={{ animationDelay: "0.18s" }}
                ></line>
                <line
                  x1="100"
                  y1="100"
                  x2="172"
                  y2="140"
                  stroke="var(--v2-accent)"
                  strokeOpacity="0.18"
                  strokeWidth="0.7"
                  strokeDasharray="3 5"
                  className="edge-flow"
                  style={{ animationDelay: "0.36s" }}
                ></line>
                <line
                  x1="100"
                  y1="100"
                  x2="100"
                  y2="172"
                  stroke="var(--v2-accent)"
                  strokeOpacity="0.18"
                  strokeWidth="0.7"
                  strokeDasharray="3 5"
                  className="edge-flow"
                  style={{ animationDelay: "0.54s" }}
                ></line>
                <line
                  x1="100"
                  y1="100"
                  x2="28"
                  y2="140"
                  stroke="var(--v2-accent)"
                  strokeOpacity="0.18"
                  strokeWidth="0.7"
                  strokeDasharray="3 5"
                  className="edge-flow"
                  style={{ animationDelay: "0.72s" }}
                ></line>
                <line
                  x1="100"
                  y1="100"
                  x2="28"
                  y2="58"
                  stroke="var(--v2-accent)"
                  strokeOpacity="0.18"
                  strokeWidth="0.7"
                  strokeDasharray="3 5"
                  className="edge-flow"
                  style={{ animationDelay: "0.8999999999999999s" }}
                ></line>
                <line
                  x1="100"
                  y1="100"
                  x2="138"
                  y2="68"
                  stroke="var(--v2-accent)"
                  strokeOpacity="0.18"
                  strokeWidth="0.7"
                  strokeDasharray="3 5"
                  className="edge-flow"
                  style={{ animationDelay: "1.08s" }}
                ></line>
                <line
                  x1="100"
                  y1="100"
                  x2="138"
                  y2="132"
                  stroke="var(--v2-accent)"
                  strokeOpacity="0.18"
                  strokeWidth="0.7"
                  strokeDasharray="3 5"
                  className="edge-flow"
                  style={{ animationDelay: "1.26s" }}
                ></line>
                <line
                  x1="100"
                  y1="100"
                  x2="62"
                  y2="132"
                  stroke="var(--v2-accent)"
                  strokeOpacity="0.18"
                  strokeWidth="0.7"
                  strokeDasharray="3 5"
                  className="edge-flow"
                  style={{ animationDelay: "1.44s" }}
                ></line>
                <line
                  x1="100"
                  y1="100"
                  x2="62"
                  y2="68"
                  stroke="var(--v2-accent)"
                  strokeOpacity="0.18"
                  strokeWidth="0.7"
                  strokeDasharray="3 5"
                  className="edge-flow"
                  style={{ animationDelay: "0.019999999999999796s" }}
                ></line>
                <line
                  x1="100"
                  y1="28"
                  x2="168"
                  y2="58"
                  stroke="var(--v2-accent)"
                  strokeOpacity="0.07"
                  strokeWidth="0.4"
                  strokeDasharray="2 8"
                  className="edge-flow-slow"
                  style={{ animationDelay: "0.19999999999999973s" }}
                ></line>
                <line
                  x1="168"
                  y1="58"
                  x2="172"
                  y2="140"
                  stroke="var(--v2-accent)"
                  strokeOpacity="0.07"
                  strokeWidth="0.4"
                  strokeDasharray="2 8"
                  className="edge-flow-slow"
                  style={{ animationDelay: "0.3799999999999999s" }}
                ></line>
                <line
                  x1="172"
                  y1="140"
                  x2="100"
                  y2="172"
                  stroke="var(--v2-accent)"
                  strokeOpacity="0.07"
                  strokeWidth="0.4"
                  strokeDasharray="2 8"
                  className="edge-flow-slow"
                  style={{ animationDelay: "0.56s" }}
                ></line>
                <line
                  x1="100"
                  y1="172"
                  x2="28"
                  y2="140"
                  stroke="var(--v2-accent)"
                  strokeOpacity="0.07"
                  strokeWidth="0.4"
                  strokeDasharray="2 8"
                  className="edge-flow-slow"
                  style={{ animationDelay: "0.7399999999999998s" }}
                ></line>
                <line
                  x1="28"
                  y1="140"
                  x2="28"
                  y2="58"
                  stroke="var(--v2-accent)"
                  strokeOpacity="0.07"
                  strokeWidth="0.4"
                  strokeDasharray="2 8"
                  className="edge-flow-slow"
                  style={{ animationDelay: "0.9199999999999999s" }}
                ></line>
                <line
                  x1="28"
                  y1="58"
                  x2="100"
                  y2="28"
                  stroke="var(--v2-accent)"
                  strokeOpacity="0.07"
                  strokeWidth="0.4"
                  strokeDasharray="2 8"
                  className="edge-flow-slow"
                  style={{ animationDelay: "1.0999999999999996s" }}
                ></line>
                <line
                  x1="138"
                  y1="68"
                  x2="138"
                  y2="132"
                  stroke="var(--v2-accent)"
                  strokeOpacity="0.07"
                  strokeWidth="0.4"
                  strokeDasharray="2 8"
                  className="edge-flow-slow"
                  style={{ animationDelay: "1.2799999999999998s" }}
                ></line>
                <line
                  x1="138"
                  y1="132"
                  x2="62"
                  y2="132"
                  stroke="var(--v2-accent)"
                  strokeOpacity="0.07"
                  strokeWidth="0.4"
                  strokeDasharray="2 8"
                  className="edge-flow-slow"
                  style={{ animationDelay: "1.46s" }}
                ></line>
                <line
                  x1="62"
                  y1="132"
                  x2="62"
                  y2="68"
                  stroke="var(--v2-accent)"
                  strokeOpacity="0.07"
                  strokeWidth="0.4"
                  strokeDasharray="2 8"
                  className="edge-flow-slow"
                  style={{ animationDelay: "0.03999999999999959s" }}
                ></line>
                <line
                  x1="62"
                  y1="68"
                  x2="138"
                  y2="68"
                  stroke="var(--v2-accent)"
                  strokeOpacity="0.07"
                  strokeWidth="0.4"
                  strokeDasharray="2 8"
                  className="edge-flow-slow"
                  style={{ animationDelay: "0.21999999999999975s" }}
                ></line>
                <line
                  x1="100"
                  y1="28"
                  x2="138"
                  y2="68"
                  stroke="var(--v2-accent)"
                  strokeOpacity="0.07"
                  strokeWidth="0.4"
                  strokeDasharray="2 8"
                  className="edge-flow-slow"
                  style={{ animationDelay: "0.39999999999999947s" }}
                ></line>
                <line
                  x1="168"
                  y1="58"
                  x2="138"
                  y2="68"
                  stroke="var(--v2-accent)"
                  strokeOpacity="0.07"
                  strokeWidth="0.4"
                  strokeDasharray="2 8"
                  className="edge-flow-slow"
                  style={{ animationDelay: "0.5799999999999996s" }}
                ></line>
                <line
                  x1="172"
                  y1="140"
                  x2="138"
                  y2="132"
                  stroke="var(--v2-accent)"
                  strokeOpacity="0.07"
                  strokeWidth="0.4"
                  strokeDasharray="2 8"
                  className="edge-flow-slow"
                  style={{ animationDelay: "0.7599999999999998s" }}
                ></line>
                <line
                  x1="100"
                  y1="172"
                  x2="62"
                  y2="132"
                  stroke="var(--v2-accent)"
                  strokeOpacity="0.07"
                  strokeWidth="0.4"
                  strokeDasharray="2 8"
                  className="edge-flow-slow"
                  style={{ animationDelay: "0.9399999999999995s" }}
                ></line>
                <line
                  x1="28"
                  y1="140"
                  x2="62"
                  y2="68"
                  stroke="var(--v2-accent)"
                  strokeOpacity="0.07"
                  strokeWidth="0.4"
                  strokeDasharray="2 8"
                  className="edge-flow-slow"
                  style={{ animationDelay: "1.12s" }}
                ></line>
                <line
                  x1="28"
                  y1="58"
                  x2="62"
                  y2="68"
                  stroke="var(--v2-accent)"
                  strokeOpacity="0.07"
                  strokeWidth="0.4"
                  strokeDasharray="2 8"
                  className="edge-flow-slow"
                  style={{ animationDelay: "1.2999999999999998s" }}
                ></line>
                <circle cx="100" cy="100" r="28" fill="url(#net-core)">
                  <animate
                    attributeName="r"
                    values="26;32;26"
                    dur="3s"
                    repeatCount="indefinite"
                  ></animate>
                </circle>
                <g>
                  <circle
                    cx="100"
                    cy="28"
                    r="8.75"
                    fill="none"
                    stroke="var(--v2-accent)"
                    strokeWidth="0.4"
                    strokeOpacity="0"
                  >
                    <animate
                      attributeName="r"
                      values="3.5;14;3.5"
                      dur="2.1s"
                      repeatCount="indefinite"
                    ></animate>
                    <animate
                      attributeName="stroke-opacity"
                      values="0.5;0;0.5"
                      dur="2.1s"
                      repeatCount="indefinite"
                    ></animate>
                  </circle>
                  <circle
                    cx="100"
                    cy="28"
                    r="3.5"
                    fill="none"
                    stroke="var(--v2-accent)"
                    strokeWidth="1"
                    strokeOpacity="0.5"
                  >
                    <animate
                      attributeName="stroke-opacity"
                      values="0.5;0.9;0.5"
                      dur="2.1s"
                      repeatCount="indefinite"
                    ></animate>
                  </circle>
                  <circle
                    cx="100"
                    cy="28"
                    r="1.575"
                    fill="var(--v2-accent)"
                    fillOpacity="0.7"
                  >
                    <animate
                      attributeName="fill-opacity"
                      values="0.7;1;0.7"
                      dur="2.1s"
                      repeatCount="indefinite"
                    ></animate>
                  </circle>
                </g>
                <g>
                  <circle
                    cx="168"
                    cy="58"
                    r="7.5"
                    fill="none"
                    stroke="var(--v2-accent)"
                    strokeWidth="0.4"
                    strokeOpacity="0"
                  >
                    <animate
                      attributeName="r"
                      values="3;12;3"
                      dur="2.8s"
                      repeatCount="indefinite"
                    ></animate>
                    <animate
                      attributeName="stroke-opacity"
                      values="0.5;0;0.5"
                      dur="2.8s"
                      repeatCount="indefinite"
                    ></animate>
                  </circle>
                  <circle
                    cx="168"
                    cy="58"
                    r="3"
                    fill="none"
                    stroke="var(--v2-accent)"
                    strokeWidth="1"
                    strokeOpacity="0.5"
                  >
                    <animate
                      attributeName="stroke-opacity"
                      values="0.5;0.9;0.5"
                      dur="2.8s"
                      repeatCount="indefinite"
                    ></animate>
                  </circle>
                  <circle
                    cx="168"
                    cy="58"
                    r="1.35"
                    fill="var(--v2-accent)"
                    fillOpacity="0.7"
                  >
                    <animate
                      attributeName="fill-opacity"
                      values="0.7;1;0.7"
                      dur="2.8s"
                      repeatCount="indefinite"
                    ></animate>
                  </circle>
                </g>
                <g>
                  <circle
                    cx="172"
                    cy="140"
                    r="10"
                    fill="none"
                    stroke="var(--v2-accent)"
                    strokeWidth="0.4"
                    strokeOpacity="0"
                  >
                    <animate
                      attributeName="r"
                      values="4;16;4"
                      dur="1.9s"
                      repeatCount="indefinite"
                    ></animate>
                    <animate
                      attributeName="stroke-opacity"
                      values="0.5;0;0.5"
                      dur="1.9s"
                      repeatCount="indefinite"
                    ></animate>
                  </circle>
                  <circle
                    cx="172"
                    cy="140"
                    r="4"
                    fill="none"
                    stroke="var(--v2-accent)"
                    strokeWidth="1"
                    strokeOpacity="0.5"
                  >
                    <animate
                      attributeName="stroke-opacity"
                      values="0.5;0.9;0.5"
                      dur="1.9s"
                      repeatCount="indefinite"
                    ></animate>
                  </circle>
                  <circle
                    cx="172"
                    cy="140"
                    r="1.8"
                    fill="var(--v2-accent)"
                    fillOpacity="0.7"
                  >
                    <animate
                      attributeName="fill-opacity"
                      values="0.7;1;0.7"
                      dur="1.9s"
                      repeatCount="indefinite"
                    ></animate>
                  </circle>
                </g>
                <g>
                  <circle
                    cx="100"
                    cy="172"
                    r="7.5"
                    fill="none"
                    stroke="var(--v2-accent)"
                    strokeWidth="0.4"
                    strokeOpacity="0"
                  >
                    <animate
                      attributeName="r"
                      values="3;12;3"
                      dur="3.2s"
                      repeatCount="indefinite"
                    ></animate>
                    <animate
                      attributeName="stroke-opacity"
                      values="0.5;0;0.5"
                      dur="3.2s"
                      repeatCount="indefinite"
                    ></animate>
                  </circle>
                  <circle
                    cx="100"
                    cy="172"
                    r="3"
                    fill="none"
                    stroke="var(--v2-accent)"
                    strokeWidth="1"
                    strokeOpacity="0.5"
                  >
                    <animate
                      attributeName="stroke-opacity"
                      values="0.5;0.9;0.5"
                      dur="3.2s"
                      repeatCount="indefinite"
                    ></animate>
                  </circle>
                  <circle
                    cx="100"
                    cy="172"
                    r="1.35"
                    fill="var(--v2-accent)"
                    fillOpacity="0.7"
                  >
                    <animate
                      attributeName="fill-opacity"
                      values="0.7;1;0.7"
                      dur="3.2s"
                      repeatCount="indefinite"
                    ></animate>
                  </circle>
                </g>
                <g>
                  <circle
                    cx="28"
                    cy="140"
                    r="8.75"
                    fill="none"
                    stroke="var(--v2-accent)"
                    strokeWidth="0.4"
                    strokeOpacity="0"
                  >
                    <animate
                      attributeName="r"
                      values="3.5;14;3.5"
                      dur="2.4s"
                      repeatCount="indefinite"
                    ></animate>
                    <animate
                      attributeName="stroke-opacity"
                      values="0.5;0;0.5"
                      dur="2.4s"
                      repeatCount="indefinite"
                    ></animate>
                  </circle>
                  <circle
                    cx="28"
                    cy="140"
                    r="3.5"
                    fill="none"
                    stroke="var(--v2-accent)"
                    strokeWidth="1"
                    strokeOpacity="0.5"
                  >
                    <animate
                      attributeName="stroke-opacity"
                      values="0.5;0.9;0.5"
                      dur="2.4s"
                      repeatCount="indefinite"
                    ></animate>
                  </circle>
                  <circle
                    cx="28"
                    cy="140"
                    r="1.575"
                    fill="var(--v2-accent)"
                    fillOpacity="0.7"
                  >
                    <animate
                      attributeName="fill-opacity"
                      values="0.7;1;0.7"
                      dur="2.4s"
                      repeatCount="indefinite"
                    ></animate>
                  </circle>
                </g>
                <g>
                  <circle
                    cx="28"
                    cy="58"
                    r="7.5"
                    fill="none"
                    stroke="var(--v2-accent)"
                    strokeWidth="0.4"
                    strokeOpacity="0"
                  >
                    <animate
                      attributeName="r"
                      values="3;12;3"
                      dur="2s"
                      repeatCount="indefinite"
                    ></animate>
                    <animate
                      attributeName="stroke-opacity"
                      values="0.5;0;0.5"
                      dur="2s"
                      repeatCount="indefinite"
                    ></animate>
                  </circle>
                  <circle
                    cx="28"
                    cy="58"
                    r="3"
                    fill="none"
                    stroke="var(--v2-accent)"
                    strokeWidth="1"
                    strokeOpacity="0.5"
                  >
                    <animate
                      attributeName="stroke-opacity"
                      values="0.5;0.9;0.5"
                      dur="2s"
                      repeatCount="indefinite"
                    ></animate>
                  </circle>
                  <circle
                    cx="28"
                    cy="58"
                    r="1.35"
                    fill="var(--v2-accent)"
                    fillOpacity="0.7"
                  >
                    <animate
                      attributeName="fill-opacity"
                      values="0.7;1;0.7"
                      dur="2s"
                      repeatCount="indefinite"
                    ></animate>
                  </circle>
                </g>
                <g>
                  <circle
                    cx="138"
                    cy="68"
                    r="6.25"
                    fill="none"
                    stroke="var(--v2-accent)"
                    strokeWidth="0.4"
                    strokeOpacity="0"
                  >
                    <animate
                      attributeName="r"
                      values="2.5;10;2.5"
                      dur="1.7s"
                      repeatCount="indefinite"
                    ></animate>
                    <animate
                      attributeName="stroke-opacity"
                      values="0.5;0;0.5"
                      dur="1.7s"
                      repeatCount="indefinite"
                    ></animate>
                  </circle>
                  <circle
                    cx="138"
                    cy="68"
                    r="2.5"
                    fill="none"
                    stroke="var(--v2-accent)"
                    strokeWidth="1"
                    strokeOpacity="0.5"
                  >
                    <animate
                      attributeName="stroke-opacity"
                      values="0.5;0.9;0.5"
                      dur="1.7s"
                      repeatCount="indefinite"
                    ></animate>
                  </circle>
                  <circle
                    cx="138"
                    cy="68"
                    r="1.125"
                    fill="var(--v2-accent)"
                    fillOpacity="0.7"
                  >
                    <animate
                      attributeName="fill-opacity"
                      values="0.7;1;0.7"
                      dur="1.7s"
                      repeatCount="indefinite"
                    ></animate>
                  </circle>
                </g>
                <g>
                  <circle
                    cx="138"
                    cy="132"
                    r="5"
                    fill="none"
                    stroke="var(--v2-accent)"
                    strokeWidth="0.4"
                    strokeOpacity="0"
                  >
                    <animate
                      attributeName="r"
                      values="2;8;2"
                      dur="2.6s"
                      repeatCount="indefinite"
                    ></animate>
                    <animate
                      attributeName="stroke-opacity"
                      values="0.5;0;0.5"
                      dur="2.6s"
                      repeatCount="indefinite"
                    ></animate>
                  </circle>
                  <circle
                    cx="138"
                    cy="132"
                    r="2"
                    fill="none"
                    stroke="var(--v2-accent)"
                    strokeWidth="1"
                    strokeOpacity="0.5"
                  >
                    <animate
                      attributeName="stroke-opacity"
                      values="0.5;0.9;0.5"
                      dur="2.6s"
                      repeatCount="indefinite"
                    ></animate>
                  </circle>
                  <circle
                    cx="138"
                    cy="132"
                    r="0.9"
                    fill="var(--v2-accent)"
                    fillOpacity="0.7"
                  >
                    <animate
                      attributeName="fill-opacity"
                      values="0.7;1;0.7"
                      dur="2.6s"
                      repeatCount="indefinite"
                    ></animate>
                  </circle>
                </g>
                <g>
                  <circle
                    cx="62"
                    cy="132"
                    r="6.25"
                    fill="none"
                    stroke="var(--v2-accent)"
                    strokeWidth="0.4"
                    strokeOpacity="0"
                  >
                    <animate
                      attributeName="r"
                      values="2.5;10;2.5"
                      dur="3s"
                      repeatCount="indefinite"
                    ></animate>
                    <animate
                      attributeName="stroke-opacity"
                      values="0.5;0;0.5"
                      dur="3s"
                      repeatCount="indefinite"
                    ></animate>
                  </circle>
                  <circle
                    cx="62"
                    cy="132"
                    r="2.5"
                    fill="none"
                    stroke="var(--v2-accent)"
                    strokeWidth="1"
                    strokeOpacity="0.5"
                  >
                    <animate
                      attributeName="stroke-opacity"
                      values="0.5;0.9;0.5"
                      dur="3s"
                      repeatCount="indefinite"
                    ></animate>
                  </circle>
                  <circle
                    cx="62"
                    cy="132"
                    r="1.125"
                    fill="var(--v2-accent)"
                    fillOpacity="0.7"
                  >
                    <animate
                      attributeName="fill-opacity"
                      values="0.7;1;0.7"
                      dur="3s"
                      repeatCount="indefinite"
                    ></animate>
                  </circle>
                </g>
                <g>
                  <circle
                    cx="62"
                    cy="68"
                    r="5"
                    fill="none"
                    stroke="var(--v2-accent)"
                    strokeWidth="0.4"
                    strokeOpacity="0"
                  >
                    <animate
                      attributeName="r"
                      values="2;8;2"
                      dur="2.3s"
                      repeatCount="indefinite"
                    ></animate>
                    <animate
                      attributeName="stroke-opacity"
                      values="0.5;0;0.5"
                      dur="2.3s"
                      repeatCount="indefinite"
                    ></animate>
                  </circle>
                  <circle
                    cx="62"
                    cy="68"
                    r="2"
                    fill="none"
                    stroke="var(--v2-accent)"
                    strokeWidth="1"
                    strokeOpacity="0.5"
                  >
                    <animate
                      attributeName="stroke-opacity"
                      values="0.5;0.9;0.5"
                      dur="2.3s"
                      repeatCount="indefinite"
                    ></animate>
                  </circle>
                  <circle
                    cx="62"
                    cy="68"
                    r="0.9"
                    fill="var(--v2-accent)"
                    fillOpacity="0.7"
                  >
                    <animate
                      attributeName="fill-opacity"
                      values="0.7;1;0.7"
                      dur="2.3s"
                      repeatCount="indefinite"
                    ></animate>
                  </circle>
                </g>
                <circle
                  cx="100"
                  cy="100"
                  r="10"
                  fill="none"
                  stroke="var(--v2-accent)"
                  strokeWidth="1.5"
                  strokeOpacity="0.6"
                >
                  <animate
                    attributeName="r"
                    values="9;11;9"
                    dur="2s"
                    repeatCount="indefinite"
                  ></animate>
                  <animate
                    attributeName="stroke-opacity"
                    values="0.6;1;0.6"
                    dur="2s"
                    repeatCount="indefinite"
                  ></animate>
                </circle>
                <circle cx="100" cy="100" r="5" fill="var(--v2-accent)">
                  <animate
                    attributeName="r"
                    values="5;6;5"
                    dur="2s"
                    repeatCount="indefinite"
                  ></animate>
                </circle>
                <circle r="1.5" fill="var(--v2-accent)" fillOpacity="0.9">
                  <animateMotion
                    path="M 100 100 L 100 28"
                    dur="1.2s"
                    repeatCount="indefinite"
                    begin="0s"
                  ></animateMotion>
                </circle>
                <circle r="1.5" fill="var(--v2-accent)" fillOpacity="0.9">
                  <animateMotion
                    path="M 100 100 L 172 140"
                    dur="1.6s"
                    repeatCount="indefinite"
                    begin="0.5s"
                  ></animateMotion>
                </circle>
                <circle r="1.5" fill="var(--v2-accent)" fillOpacity="0.9">
                  <animateMotion
                    path="M 100 100 L 28 140"
                    dur="2s"
                    repeatCount="indefinite"
                    begin="1s"
                  ></animateMotion>
                </circle>
                <circle r="1.5" fill="var(--v2-accent)" fillOpacity="0.9">
                  <animateMotion
                    path="M 168 58 L 100 100"
                    dur="2.4000000000000004s"
                    repeatCount="indefinite"
                    begin="1.5s"
                  ></animateMotion>
                </circle>
                <circle r="1.5" fill="var(--v2-accent)" fillOpacity="0.9">
                  <animateMotion
                    path="M 100 172 L 100 100"
                    dur="2.8s"
                    repeatCount="indefinite"
                    begin="2s"
                  ></animateMotion>
                </circle>
              </svg>
            </div>
          </div>
          <div className="relative z-10">
            <AccordionList items={tokenItems} variant="token" initialOpen={0} />
          </div>
          <div
            className="relative z-10 grid grid-cols-1 sm:grid-cols-3"
            style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}
          >
            <div
              className="px-6 lg:px-12 py-5"
              style={{ borderRight: "1px solid rgba(255,255,255,0.08)" }}
            >
              <span
                className="font-mono text-[11px] tracking-[0.12em] uppercase block mb-1"
                style={{ color: "rgba(255,255,255,0.60)" }}
              >
                CONTRACT
              </span>
              <span
                className="font-mono text-sm flex items-center gap-2"
                style={{ color: "rgba(255,255,255,0.60)" }}
              >
                TBA
              </span>
            </div>
            <div
              className="px-6 lg:px-12 py-5"
              style={{ borderRight: "1px solid rgba(255,255,255,0.08)" }}
            >
              <span
                className="font-mono text-[11px] tracking-[0.12em] uppercase block mb-1"
                style={{ color: "rgba(255,255,255,0.60)" }}
              >
                NETWORK
              </span>
              <span
                className="font-mono text-sm flex items-center gap-2"
                style={{ color: "rgba(255,255,255,0.60)" }}
              >
                ROBINHOOD CHAIN
              </span>
            </div>
            <div className="px-6 lg:px-12 py-5">
              <span
                className="font-mono text-[11px] tracking-[0.12em] uppercase block mb-1"
                style={{ color: "rgba(255,255,255,0.60)" }}
              >
                STATUS
              </span>
              <span
                className="font-mono text-sm flex items-center gap-2"
                style={{ color: "rgba(255,255,255,0.60)" }}
              >
                <span
                  className="h-1.5 w-1.5 rounded-full animate-pulse inline-block"
                  style={{ background: "var(--v2-accent)" }}
                ></span>
                COMING SOON
              </span>
            </div>
          </div>
        </section>
      </div>
      <div className="relative w-full px-6 lg:px-14 max-w-7xl mx-auto">
        <div
          className="h-px w-full"
          style={{
            background:
              "linear-gradient(90deg, transparent, rgba(255,255,255,0.08) 30%, rgba(255,255,255,0.08) 70%, transparent)",
          }}
        ></div>
        <div
          className="absolute left-1/2 top-0 h-8 w-1/3 -translate-x-1/2 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at 50% 0%, rgba(167,139,250,0.25) 0%, transparent 70%)",
            filter: "blur(8px)",
          }}
        ></div>
      </div>
    </>
  );
}
