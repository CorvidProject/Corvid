"use client";
import { Suspense, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Trenches } from "@/components/app/trenches";
import { EMPTY_FILTERS, FilterBar, IntervalControls, TrendingRows, useFiltered, useNow, type Filters, type Interval } from "@/components/app/trending-table";

function TerminalInner() {
  const params = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const [interval, setInterval_] = useState<Interval>("24h");
  const [filters, setFilters] = useState<Filters>({ ...EMPTY_FILTERS, signals: { ...EMPTY_FILTERS.signals } });
  const [spinning, setSpinning] = useState(false);
  const [now, bump] = useNow();
  const rows = useFiltered(filters, now);
  const refresh = () => {
    setSpinning(true);
    bump();
    setTimeout(() => setSpinning(false), 700);
  };
  const mode: "trending" | "trenches" = params.get("mode") === "trenches" ? "trenches" : "trending";
  const setMode = (m: "trending" | "trenches") => {
    const q = new URLSearchParams(params.toString());
    if (m === "trending") q.delete("mode");
    else q.set("mode", m);
    const qs = q.toString();
    router.replace(qs ? `${pathname}?${qs}` : pathname, { scroll: false });
  };
  return (
    <>
      <div className="mb-2">
        <div className="crv-ticker" role="region" aria-label="Trending tokens">
          <span className="crv-ticker__label">Trending</span>
          <div className="crv-ticker__viewport">
            <div
              className="crv-ticker__track"
              style={{ animationDuration: "96s" }}
            >
              <a
                className="crv-ticker__item"
                aria-hidden="false"
                href="/application/tokens/3kRQDKPGqMWwBdGjiVPpPqVzFsnYG5PDqvrVz1D2pump?chain=robinhood"
              >
                <img
                  alt=""
                  width="16"
                  height="16"
                  className="crv-ticker__icon"
                  src="https://cdn.dexscreener.com/cms/images/0xwNc5Wag6YRs0WW?width=800&height=800&quality=95&format=auto"
                />
                <span className="crv-ticker__sym">tipr</span>
                <span className="crv-ticker__mcap">$1.09M</span>
                <span className="crv-ticker__chg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="11"
                    height="11"
                    fill="currentColor"
                    viewBox="0 0 256 256"
                  >
                    <path d="M204,64V168a12,12,0,0,1-24,0V93L72.49,200.49a12,12,0,0,1-17-17L163,76H88a12,12,0,0,1,0-24H192A12,12,0,0,1,204,64Z"></path>
                  </svg>
                  1232.0%
                </span>
              </a>
              <a
                className="crv-ticker__item"
                aria-hidden="false"
                href="/application/tokens/GoDSW31bTxfkoup9yA1qcGGx9RMXdTEWgApv3xzBmoA?chain=robinhood"
              >
                <img
                  alt=""
                  width="16"
                  height="16"
                  className="crv-ticker__icon"
                  src="https://cdn.dexscreener.com/cms/images/WgIWKD4nq1lJjxYB?width=800&height=800&quality=95&format=auto"
                />
                <span className="crv-ticker__sym">STEALTH</span>
                <span className="crv-ticker__mcap">$398.57K</span>
                <span className="crv-ticker__chg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="11"
                    height="11"
                    fill="currentColor"
                    viewBox="0 0 256 256"
                  >
                    <path d="M204,64V168a12,12,0,0,1-24,0V93L72.49,200.49a12,12,0,0,1-17-17L163,76H88a12,12,0,0,1,0-24H192A12,12,0,0,1,204,64Z"></path>
                  </svg>
                  945.0%
                </span>
              </a>
              <a
                className="crv-ticker__item"
                aria-hidden="false"
                href="/application/tokens/GexThZHgaswpAQ7Fi8QrHFubjPimUNSYhJiAA7XZpump?chain=robinhood"
              >
                <img
                  alt=""
                  width="16"
                  height="16"
                  className="crv-ticker__icon"
                  src="https://cdn.dexscreener.com/cms/images/eyoaU-MPZ9AFW1cY?width=800&height=800&quality=95&format=auto"
                />
                <span className="crv-ticker__sym">WASTED</span>
                <span className="crv-ticker__mcap">$733.94K</span>
                <span className="crv-ticker__chg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="11"
                    height="11"
                    fill="currentColor"
                    viewBox="0 0 256 256"
                  >
                    <path d="M204,64V168a12,12,0,0,1-24,0V93L72.49,200.49a12,12,0,0,1-17-17L163,76H88a12,12,0,0,1,0-24H192A12,12,0,0,1,204,64Z"></path>
                  </svg>
                  414.0%
                </span>
              </a>
              <a
                className="crv-ticker__item"
                aria-hidden="false"
                href="/application/tokens/6QUHcqYuiPRHxhnYZoygewXtNQr9kUrhc9Tmwgtbpump?chain=robinhood"
              >
                <img
                  alt=""
                  width="16"
                  height="16"
                  className="crv-ticker__icon"
                  src="https://cdn.dexscreener.com/cms/images/NyF80jZDYsbdm_Xf?width=800&height=800&quality=95&format=auto"
                />
                <span className="crv-ticker__sym">RAM</span>
                <span className="crv-ticker__mcap">$126.37K</span>
                <span className="crv-ticker__chg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="11"
                    height="11"
                    fill="currentColor"
                    viewBox="0 0 256 256"
                  >
                    <path d="M204,64V168a12,12,0,0,1-24,0V93L72.49,200.49a12,12,0,0,1-17-17L163,76H88a12,12,0,0,1,0-24H192A12,12,0,0,1,204,64Z"></path>
                  </svg>
                  360.0%
                </span>
              </a>
              <a
                className="crv-ticker__item"
                aria-hidden="false"
                href="/application/tokens/93VGqXL76voGxc43apJTDJoKkqnxTht1BKWoEmUypump?chain=robinhood"
              >
                <img
                  alt=""
                  width="16"
                  height="16"
                  className="crv-ticker__icon"
                  src="https://cdn.dexscreener.com/cms/images/xIZSwvfNUyZthlS-?width=800&height=800&quality=95&format=auto"
                />
                <span className="crv-ticker__sym">PI</span>
                <span className="crv-ticker__mcap">$159.82K</span>
                <span className="crv-ticker__chg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="11"
                    height="11"
                    fill="currentColor"
                    viewBox="0 0 256 256"
                  >
                    <path d="M204,64V168a12,12,0,0,1-24,0V93L72.49,200.49a12,12,0,0,1-17-17L163,76H88a12,12,0,0,1,0-24H192A12,12,0,0,1,204,64Z"></path>
                  </svg>
                  334.0%
                </span>
              </a>
              <a
                className="crv-ticker__item"
                aria-hidden="false"
                href="/application/tokens/ExxzYBTt3jwU5MUxuw2F4toYbTLdFwThSjyaCn6Xpump?chain=robinhood"
              >
                <img
                  alt=""
                  width="16"
                  height="16"
                  className="crv-ticker__icon"
                  src="https://cdn.dexscreener.com/cms/images/tcNNtgqabCEqyXgM?width=800&height=800&quality=95&format=auto"
                />
                <span className="crv-ticker__sym">Anakin</span>
                <span className="crv-ticker__mcap">$2.79M</span>
                <span className="crv-ticker__chg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="11"
                    height="11"
                    fill="currentColor"
                    viewBox="0 0 256 256"
                  >
                    <path d="M204,64V168a12,12,0,0,1-24,0V93L72.49,200.49a12,12,0,0,1-17-17L163,76H88a12,12,0,0,1,0-24H192A12,12,0,0,1,204,64Z"></path>
                  </svg>
                  319.0%
                </span>
              </a>
              <a
                className="crv-ticker__item"
                aria-hidden="false"
                href="/application/tokens/APLPiTjBWzwfZ5U1TBeqLF9XJ7dV7XKGe7j4BZhkDray?chain=robinhood"
              >
                <img
                  alt=""
                  width="16"
                  height="16"
                  className="crv-ticker__icon"
                  src="https://cdn.dexscreener.com/cms/images/9Q-pX5iQ4-yAbN_o?width=800&height=800&quality=95&format=auto"
                />
                <span className="crv-ticker__sym">PEAK</span>
                <span className="crv-ticker__mcap">$1.38M</span>
                <span className="crv-ticker__chg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="11"
                    height="11"
                    fill="currentColor"
                    viewBox="0 0 256 256"
                  >
                    <path d="M204,64V168a12,12,0,0,1-24,0V93L72.49,200.49a12,12,0,0,1-17-17L163,76H88a12,12,0,0,1,0-24H192A12,12,0,0,1,204,64Z"></path>
                  </svg>
                  243.0%
                </span>
              </a>
              <a
                className="crv-ticker__item"
                aria-hidden="false"
                href="/application/tokens/qhbbjGBKJxW3AZGqngWM5tHcrENR3pVoRB9MCf1pump?chain=robinhood"
              >
                <img
                  alt=""
                  width="16"
                  height="16"
                  className="crv-ticker__icon"
                  src="https://cdn.dexscreener.com/cms/images/xmRNLXLbxYP96gaR?width=800&height=800&quality=95&format=auto"
                />
                <span className="crv-ticker__sym">Kim</span>
                <span className="crv-ticker__mcap">$177.35K</span>
                <span className="crv-ticker__chg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="11"
                    height="11"
                    fill="currentColor"
                    viewBox="0 0 256 256"
                  >
                    <path d="M204,64V168a12,12,0,0,1-24,0V93L72.49,200.49a12,12,0,0,1-17-17L163,76H88a12,12,0,0,1,0-24H192A12,12,0,0,1,204,64Z"></path>
                  </svg>
                  185.0%
                </span>
              </a>
              <a
                className="crv-ticker__item"
                aria-hidden="false"
                href="/application/tokens/Bv1a7cEj5aRnJQhMw4kRQqAFesMSd5LwcDnUzq52BMmr?chain=robinhood"
              >
                <img
                  alt=""
                  width="16"
                  height="16"
                  className="crv-ticker__icon"
                  src="https://cdn.dexscreener.com/cms/images/GcjeczTah2v57O9h?width=800&height=800&quality=95&format=auto"
                />
                <span className="crv-ticker__sym">FLOAT</span>
                <span className="crv-ticker__mcap">$1.62M</span>
                <span className="crv-ticker__chg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="11"
                    height="11"
                    fill="currentColor"
                    viewBox="0 0 256 256"
                  >
                    <path d="M204,64V168a12,12,0,0,1-24,0V93L72.49,200.49a12,12,0,0,1-17-17L163,76H88a12,12,0,0,1,0-24H192A12,12,0,0,1,204,64Z"></path>
                  </svg>
                  175.0%
                </span>
              </a>
              <a
                className="crv-ticker__item"
                aria-hidden="false"
                href="/application/tokens/EJAxERvKU4kEVXn3NarjvRtgaMaJyP9ZuMeKA7JJpump?chain=robinhood"
              >
                <img
                  alt=""
                  width="16"
                  height="16"
                  className="crv-ticker__icon"
                  src="https://cdn.dexscreener.com/cms/images/mzA62X_uenf4s4Df?width=800&height=800&quality=95&format=auto"
                />
                <span className="crv-ticker__sym">CHOO</span>
                <span className="crv-ticker__mcap">$1.87M</span>
                <span className="crv-ticker__chg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="11"
                    height="11"
                    fill="currentColor"
                    viewBox="0 0 256 256"
                  >
                    <path d="M204,64V168a12,12,0,0,1-24,0V93L72.49,200.49a12,12,0,0,1-17-17L163,76H88a12,12,0,0,1,0-24H192A12,12,0,0,1,204,64Z"></path>
                  </svg>
                  104.0%
                </span>
              </a>
              <a
                className="crv-ticker__item"
                aria-hidden="false"
                href="/application/tokens/14LCiSb7CKDjvxcsbLfzyAA4EobVJwSBLNNzEuGUP8w8?chain=robinhood"
              >
                <img
                  alt=""
                  width="16"
                  height="16"
                  className="crv-ticker__icon"
                  src="https://dd.dexscreener.com/ds-data/tokens/solana/14LCiSb7CKDjvxcsbLfzyAA4EobVJwSBLNNzEuGUP8w8.png"
                  style={{ visibility: "hidden" }}
                />
                <span className="crv-ticker__sym">STEALTH</span>
                <span className="crv-ticker__mcap">$105.01K</span>
                <span className="crv-ticker__chg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="11"
                    height="11"
                    fill="currentColor"
                    viewBox="0 0 256 256"
                  >
                    <path d="M204,64V168a12,12,0,0,1-24,0V93L72.49,200.49a12,12,0,0,1-17-17L163,76H88a12,12,0,0,1,0-24H192A12,12,0,0,1,204,64Z"></path>
                  </svg>
                  102.0%
                </span>
              </a>
              <a
                className="crv-ticker__item"
                aria-hidden="false"
                href="/application/tokens/DKYcjobF7HPtL9RyQBRdeRQ2iWvizpfbgWwPWNXdpump?chain=robinhood"
              >
                <img
                  alt=""
                  width="16"
                  height="16"
                  className="crv-ticker__icon"
                  src="https://cdn.dexscreener.com/cms/images/EeFgwNnTiEIktyct?width=800&height=800&quality=95&format=auto"
                />
                <span className="crv-ticker__sym">DacityCoin</span>
                <span className="crv-ticker__mcap">$1.16M</span>
                <span className="crv-ticker__chg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="11"
                    height="11"
                    fill="currentColor"
                    viewBox="0 0 256 256"
                  >
                    <path d="M204,64V168a12,12,0,0,1-24,0V93L72.49,200.49a12,12,0,0,1-17-17L163,76H88a12,12,0,0,1,0-24H192A12,12,0,0,1,204,64Z"></path>
                  </svg>
                  94.9%
                </span>
              </a>
              <a
                className="crv-ticker__item"
                aria-hidden="false"
                href="/application/tokens/wMHBD2B8KbDagvXUEapginhtJdrH4QSvSezBM8Tpump?chain=robinhood"
              >
                <img
                  alt=""
                  width="16"
                  height="16"
                  className="crv-ticker__icon"
                  src="https://cdn.dexscreener.com/cms/images/US6CpluFuWt8sjTD?width=800&height=800&quality=95&format=auto"
                />
                <span className="crv-ticker__sym">ANTS</span>
                <span className="crv-ticker__mcap">$2.49M</span>
                <span className="crv-ticker__chg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="11"
                    height="11"
                    fill="currentColor"
                    viewBox="0 0 256 256"
                  >
                    <path d="M204,64V168a12,12,0,0,1-24,0V93L72.49,200.49a12,12,0,0,1-17-17L163,76H88a12,12,0,0,1,0-24H192A12,12,0,0,1,204,64Z"></path>
                  </svg>
                  81.9%
                </span>
              </a>
              <a
                className="crv-ticker__item"
                aria-hidden="false"
                href="/application/tokens/HsprHxBRgiVaQdRf3TnKNuZZtaX9JUSPgMFdAkk6pump?chain=robinhood"
              >
                <img
                  alt=""
                  width="16"
                  height="16"
                  className="crv-ticker__icon"
                  src="https://cdn.dexscreener.com/cms/images/-8CCNt5h1g4Fnvqj?width=800&height=800&quality=95&format=auto"
                />
                <span className="crv-ticker__sym">GATO</span>
                <span className="crv-ticker__mcap">$9.64M</span>
                <span className="crv-ticker__chg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="11"
                    height="11"
                    fill="currentColor"
                    viewBox="0 0 256 256"
                  >
                    <path d="M204,64V168a12,12,0,0,1-24,0V93L72.49,200.49a12,12,0,0,1-17-17L163,76H88a12,12,0,0,1,0-24H192A12,12,0,0,1,204,64Z"></path>
                  </svg>
                  61.0%
                </span>
              </a>
              <a
                className="crv-ticker__item"
                aria-hidden="false"
                href="/application/tokens/Pmfm2RprxQRKZH1XWVsBUc2KgCTyzeDTSFbT1vJmogz?chain=robinhood"
              >
                <img
                  alt=""
                  width="16"
                  height="16"
                  className="crv-ticker__icon"
                  src="https://cdn.dexscreener.com/cms/images/kOP94Lh1xNl9phyr?width=800&height=800&quality=95&format=auto"
                />
                <span className="crv-ticker__sym">MOGZ</span>
                <span className="crv-ticker__mcap">$478.70K</span>
                <span className="crv-ticker__chg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="11"
                    height="11"
                    fill="currentColor"
                    viewBox="0 0 256 256"
                  >
                    <path d="M204,64V168a12,12,0,0,1-24,0V93L72.49,200.49a12,12,0,0,1-17-17L163,76H88a12,12,0,0,1,0-24H192A12,12,0,0,1,204,64Z"></path>
                  </svg>
                  60.6%
                </span>
              </a>
              <a
                className="crv-ticker__item"
                aria-hidden="false"
                href="/application/tokens/CTPoyCwkjMvoJwU4xvZZqoD8tiYk6yDchySiN5gGpump?chain=robinhood"
              >
                <img
                  alt=""
                  width="16"
                  height="16"
                  className="crv-ticker__icon"
                  src="https://cdn.dexscreener.com/cms/images/fgomV20_6LJtdS5w?width=800&height=800&quality=95&format=auto"
                />
                <span className="crv-ticker__sym">fone</span>
                <span className="crv-ticker__mcap">$2.19M</span>
                <span className="crv-ticker__chg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="11"
                    height="11"
                    fill="currentColor"
                    viewBox="0 0 256 256"
                  >
                    <path d="M204,64V168a12,12,0,0,1-24,0V93L72.49,200.49a12,12,0,0,1-17-17L163,76H88a12,12,0,0,1,0-24H192A12,12,0,0,1,204,64Z"></path>
                  </svg>
                  41.4%
                </span>
              </a>
              <a
                className="crv-ticker__item"
                aria-hidden="false"
                href="/application/tokens/3w2TvVmTrtq4kSkoFVrTFQgz6MX7ThzDVrx9r5c3pump?chain=robinhood"
              >
                <img
                  alt=""
                  width="16"
                  height="16"
                  className="crv-ticker__icon"
                  src="https://cdn.dexscreener.com/cms/images/hPCRJ6BpEEjR7OSB?width=800&height=800&quality=95&format=auto"
                />
                <span className="crv-ticker__sym">HI</span>
                <span className="crv-ticker__mcap">$434.66K</span>
                <span className="crv-ticker__chg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="11"
                    height="11"
                    fill="currentColor"
                    viewBox="0 0 256 256"
                  >
                    <path d="M204,64V168a12,12,0,0,1-24,0V93L72.49,200.49a12,12,0,0,1-17-17L163,76H88a12,12,0,0,1,0-24H192A12,12,0,0,1,204,64Z"></path>
                  </svg>
                  36.8%
                </span>
              </a>
              <a
                className="crv-ticker__item"
                aria-hidden="false"
                href="/application/tokens/2gTbp2gwH46rqExzabSyrdR3294SLwCp2rSqWDS6Sim1?chain=robinhood"
              >
                <img
                  alt=""
                  width="16"
                  height="16"
                  className="crv-ticker__icon"
                  src="https://cdn.dexscreener.com/cms/images/m77rUuvJ5NXElvxd?width=800&height=800&quality=95&format=auto"
                />
                <span className="crv-ticker__sym">CATPAD</span>
                <span className="crv-ticker__mcap">$173.02K</span>
                <span className="crv-ticker__chg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="11"
                    height="11"
                    fill="currentColor"
                    viewBox="0 0 256 256"
                  >
                    <path d="M204,64V168a12,12,0,0,1-24,0V93L72.49,200.49a12,12,0,0,1-17-17L163,76H88a12,12,0,0,1,0-24H192A12,12,0,0,1,204,64Z"></path>
                  </svg>
                  33.7%
                </span>
              </a>
              <a
                className="crv-ticker__item"
                aria-hidden="false"
                href="/application/tokens/4kjruqGHDsSqkMdFfCjV7Vb62HPFhtXyWc2t6JpQzDnz?chain=robinhood"
              >
                <img
                  alt=""
                  width="16"
                  height="16"
                  className="crv-ticker__icon"
                  src="https://cdn.dexscreener.com/cms/images/lwZpiYOTcTq51oKH?width=800&height=800&quality=95&format=auto"
                />
                <span className="crv-ticker__sym">GTA6</span>
                <span className="crv-ticker__mcap">$13.05M</span>
                <span className="crv-ticker__chg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="11"
                    height="11"
                    fill="currentColor"
                    viewBox="0 0 256 256"
                  >
                    <path d="M204,64V168a12,12,0,0,1-24,0V93L72.49,200.49a12,12,0,0,1-17-17L163,76H88a12,12,0,0,1,0-24H192A12,12,0,0,1,204,64Z"></path>
                  </svg>
                  27.7%
                </span>
              </a>
              <a
                className="crv-ticker__item"
                aria-hidden="false"
                href="/application/tokens/5yC9BM8KUsJTPbWPLfA2N8qH1s9V8DQ3Vcw1G6Jdpump?chain=robinhood"
              >
                <img
                  alt=""
                  width="16"
                  height="16"
                  className="crv-ticker__icon"
                  src="https://cdn.dexscreener.com/cms/images/CosLgfKcR4zLMl2Q?width=800&height=800&quality=95&format=auto"
                />
                <span className="crv-ticker__sym">AgenC</span>
                <span className="crv-ticker__mcap">$1.99M</span>
                <span className="crv-ticker__chg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="11"
                    height="11"
                    fill="currentColor"
                    viewBox="0 0 256 256"
                  >
                    <path d="M204,64V168a12,12,0,0,1-24,0V93L72.49,200.49a12,12,0,0,1-17-17L163,76H88a12,12,0,0,1,0-24H192A12,12,0,0,1,204,64Z"></path>
                  </svg>
                  25.9%
                </span>
              </a>
              <a
                className="crv-ticker__item"
                aria-hidden="false"
                href="/application/tokens/ApZuxdpzMrbEYTGEzeY9afh5pj9d6qPRJCTgQYiipbKg?chain=robinhood"
              >
                <img
                  alt=""
                  width="16"
                  height="16"
                  className="crv-ticker__icon"
                  src="https://cdn.dexscreener.com/cms/images/EvHO-m_bFJ_TjSs4?width=800&height=800&quality=95&format=auto"
                />
                <span className="crv-ticker__sym">CYBERLEEK</span>
                <span className="crv-ticker__mcap">$1.69M</span>
                <span className="crv-ticker__chg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="11"
                    height="11"
                    fill="currentColor"
                    viewBox="0 0 256 256"
                  >
                    <path d="M204,64V168a12,12,0,0,1-24,0V93L72.49,200.49a12,12,0,0,1-17-17L163,76H88a12,12,0,0,1,0-24H192A12,12,0,0,1,204,64Z"></path>
                  </svg>
                  25.5%
                </span>
              </a>
              <a
                className="crv-ticker__item"
                aria-hidden="false"
                href="/application/tokens/DtcicPCKTKeAh7TDEzTym3hXeoHAoMiBdYJhMYxZpump?chain=robinhood"
              >
                <img
                  alt=""
                  width="16"
                  height="16"
                  className="crv-ticker__icon"
                  src="https://cdn.dexscreener.com/cms/images/2bajn2a05AdQGV-4?width=800&height=800&quality=95&format=auto"
                />
                <span className="crv-ticker__sym">CBUCKS</span>
                <span className="crv-ticker__mcap">$1.70M</span>
                <span className="crv-ticker__chg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="11"
                    height="11"
                    fill="currentColor"
                    viewBox="0 0 256 256"
                  >
                    <path d="M204,64V168a12,12,0,0,1-24,0V93L72.49,200.49a12,12,0,0,1-17-17L163,76H88a12,12,0,0,1,0-24H192A12,12,0,0,1,204,64Z"></path>
                  </svg>
                  21.6%
                </span>
              </a>
              <a
                className="crv-ticker__item"
                aria-hidden="false"
                href="/application/tokens/FjPKUGnF5zBpdEv18gT8FJCtxh3MKrFkoeYekgYr1win?chain=robinhood"
              >
                <img
                  alt=""
                  width="16"
                  height="16"
                  className="crv-ticker__icon"
                  src="https://cdn.dexscreener.com/cms/images/TnRgOJHMjT2jYp5f?width=800&height=800&quality=95&format=auto"
                />
                <span className="crv-ticker__sym">1WIN</span>
                <span className="crv-ticker__mcap">$15.81M</span>
                <span className="crv-ticker__chg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="11"
                    height="11"
                    fill="currentColor"
                    viewBox="0 0 256 256"
                  >
                    <path d="M204,64V168a12,12,0,0,1-24,0V93L72.49,200.49a12,12,0,0,1-17-17L163,76H88a12,12,0,0,1,0-24H192A12,12,0,0,1,204,64Z"></path>
                  </svg>
                  15.9%
                </span>
              </a>
              <a
                className="crv-ticker__item"
                aria-hidden="false"
                href="/application/tokens/GTBxUiw6wJdmmkCGZgRHLyYxqu1vG4KtRpeox6yDpump?chain=robinhood"
              >
                <img
                  alt=""
                  width="16"
                  height="16"
                  className="crv-ticker__icon"
                  src="https://cdn.dexscreener.com/cms/images/BqiLLFPFrRoiHTBQ?width=800&height=800&quality=95&format=auto"
                />
                <span className="crv-ticker__sym">JEANPHIL</span>
                <span className="crv-ticker__mcap">$3.45M</span>
                <span className="crv-ticker__chg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="11"
                    height="11"
                    fill="currentColor"
                    viewBox="0 0 256 256"
                  >
                    <path d="M204,64V168a12,12,0,0,1-24,0V93L72.49,200.49a12,12,0,0,1-17-17L163,76H88a12,12,0,0,1,0-24H192A12,12,0,0,1,204,64Z"></path>
                  </svg>
                  11.2%
                </span>
              </a>
              <a
                className="crv-ticker__item"
                aria-hidden="true"
                tabIndex={-1}
                href="/application/tokens/3kRQDKPGqMWwBdGjiVPpPqVzFsnYG5PDqvrVz1D2pump?chain=robinhood"
              >
                <img
                  alt=""
                  width="16"
                  height="16"
                  className="crv-ticker__icon"
                  src="https://cdn.dexscreener.com/cms/images/0xwNc5Wag6YRs0WW?width=800&height=800&quality=95&format=auto"
                />
                <span className="crv-ticker__sym">tipr</span>
                <span className="crv-ticker__mcap">$1.09M</span>
                <span className="crv-ticker__chg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="11"
                    height="11"
                    fill="currentColor"
                    viewBox="0 0 256 256"
                  >
                    <path d="M204,64V168a12,12,0,0,1-24,0V93L72.49,200.49a12,12,0,0,1-17-17L163,76H88a12,12,0,0,1,0-24H192A12,12,0,0,1,204,64Z"></path>
                  </svg>
                  1232.0%
                </span>
              </a>
              <a
                className="crv-ticker__item"
                aria-hidden="true"
                tabIndex={-1}
                href="/application/tokens/GoDSW31bTxfkoup9yA1qcGGx9RMXdTEWgApv3xzBmoA?chain=robinhood"
              >
                <img
                  alt=""
                  width="16"
                  height="16"
                  className="crv-ticker__icon"
                  src="https://cdn.dexscreener.com/cms/images/WgIWKD4nq1lJjxYB?width=800&height=800&quality=95&format=auto"
                />
                <span className="crv-ticker__sym">STEALTH</span>
                <span className="crv-ticker__mcap">$398.57K</span>
                <span className="crv-ticker__chg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="11"
                    height="11"
                    fill="currentColor"
                    viewBox="0 0 256 256"
                  >
                    <path d="M204,64V168a12,12,0,0,1-24,0V93L72.49,200.49a12,12,0,0,1-17-17L163,76H88a12,12,0,0,1,0-24H192A12,12,0,0,1,204,64Z"></path>
                  </svg>
                  945.0%
                </span>
              </a>
              <a
                className="crv-ticker__item"
                aria-hidden="true"
                tabIndex={-1}
                href="/application/tokens/GexThZHgaswpAQ7Fi8QrHFubjPimUNSYhJiAA7XZpump?chain=robinhood"
              >
                <img
                  alt=""
                  width="16"
                  height="16"
                  className="crv-ticker__icon"
                  src="https://cdn.dexscreener.com/cms/images/eyoaU-MPZ9AFW1cY?width=800&height=800&quality=95&format=auto"
                />
                <span className="crv-ticker__sym">WASTED</span>
                <span className="crv-ticker__mcap">$733.94K</span>
                <span className="crv-ticker__chg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="11"
                    height="11"
                    fill="currentColor"
                    viewBox="0 0 256 256"
                  >
                    <path d="M204,64V168a12,12,0,0,1-24,0V93L72.49,200.49a12,12,0,0,1-17-17L163,76H88a12,12,0,0,1,0-24H192A12,12,0,0,1,204,64Z"></path>
                  </svg>
                  414.0%
                </span>
              </a>
              <a
                className="crv-ticker__item"
                aria-hidden="true"
                tabIndex={-1}
                href="/application/tokens/6QUHcqYuiPRHxhnYZoygewXtNQr9kUrhc9Tmwgtbpump?chain=robinhood"
              >
                <img
                  alt=""
                  width="16"
                  height="16"
                  className="crv-ticker__icon"
                  src="https://cdn.dexscreener.com/cms/images/NyF80jZDYsbdm_Xf?width=800&height=800&quality=95&format=auto"
                />
                <span className="crv-ticker__sym">RAM</span>
                <span className="crv-ticker__mcap">$126.37K</span>
                <span className="crv-ticker__chg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="11"
                    height="11"
                    fill="currentColor"
                    viewBox="0 0 256 256"
                  >
                    <path d="M204,64V168a12,12,0,0,1-24,0V93L72.49,200.49a12,12,0,0,1-17-17L163,76H88a12,12,0,0,1,0-24H192A12,12,0,0,1,204,64Z"></path>
                  </svg>
                  360.0%
                </span>
              </a>
              <a
                className="crv-ticker__item"
                aria-hidden="true"
                tabIndex={-1}
                href="/application/tokens/93VGqXL76voGxc43apJTDJoKkqnxTht1BKWoEmUypump?chain=robinhood"
              >
                <img
                  alt=""
                  width="16"
                  height="16"
                  className="crv-ticker__icon"
                  src="https://cdn.dexscreener.com/cms/images/xIZSwvfNUyZthlS-?width=800&height=800&quality=95&format=auto"
                />
                <span className="crv-ticker__sym">PI</span>
                <span className="crv-ticker__mcap">$159.82K</span>
                <span className="crv-ticker__chg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="11"
                    height="11"
                    fill="currentColor"
                    viewBox="0 0 256 256"
                  >
                    <path d="M204,64V168a12,12,0,0,1-24,0V93L72.49,200.49a12,12,0,0,1-17-17L163,76H88a12,12,0,0,1,0-24H192A12,12,0,0,1,204,64Z"></path>
                  </svg>
                  334.0%
                </span>
              </a>
              <a
                className="crv-ticker__item"
                aria-hidden="true"
                tabIndex={-1}
                href="/application/tokens/ExxzYBTt3jwU5MUxuw2F4toYbTLdFwThSjyaCn6Xpump?chain=robinhood"
              >
                <img
                  alt=""
                  width="16"
                  height="16"
                  className="crv-ticker__icon"
                  src="https://cdn.dexscreener.com/cms/images/tcNNtgqabCEqyXgM?width=800&height=800&quality=95&format=auto"
                />
                <span className="crv-ticker__sym">Anakin</span>
                <span className="crv-ticker__mcap">$2.79M</span>
                <span className="crv-ticker__chg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="11"
                    height="11"
                    fill="currentColor"
                    viewBox="0 0 256 256"
                  >
                    <path d="M204,64V168a12,12,0,0,1-24,0V93L72.49,200.49a12,12,0,0,1-17-17L163,76H88a12,12,0,0,1,0-24H192A12,12,0,0,1,204,64Z"></path>
                  </svg>
                  319.0%
                </span>
              </a>
              <a
                className="crv-ticker__item"
                aria-hidden="true"
                tabIndex={-1}
                href="/application/tokens/APLPiTjBWzwfZ5U1TBeqLF9XJ7dV7XKGe7j4BZhkDray?chain=robinhood"
              >
                <img
                  alt=""
                  width="16"
                  height="16"
                  className="crv-ticker__icon"
                  src="https://cdn.dexscreener.com/cms/images/9Q-pX5iQ4-yAbN_o?width=800&height=800&quality=95&format=auto"
                />
                <span className="crv-ticker__sym">PEAK</span>
                <span className="crv-ticker__mcap">$1.38M</span>
                <span className="crv-ticker__chg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="11"
                    height="11"
                    fill="currentColor"
                    viewBox="0 0 256 256"
                  >
                    <path d="M204,64V168a12,12,0,0,1-24,0V93L72.49,200.49a12,12,0,0,1-17-17L163,76H88a12,12,0,0,1,0-24H192A12,12,0,0,1,204,64Z"></path>
                  </svg>
                  243.0%
                </span>
              </a>
              <a
                className="crv-ticker__item"
                aria-hidden="true"
                tabIndex={-1}
                href="/application/tokens/qhbbjGBKJxW3AZGqngWM5tHcrENR3pVoRB9MCf1pump?chain=robinhood"
              >
                <img
                  alt=""
                  width="16"
                  height="16"
                  className="crv-ticker__icon"
                  src="https://cdn.dexscreener.com/cms/images/xmRNLXLbxYP96gaR?width=800&height=800&quality=95&format=auto"
                />
                <span className="crv-ticker__sym">Kim</span>
                <span className="crv-ticker__mcap">$177.35K</span>
                <span className="crv-ticker__chg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="11"
                    height="11"
                    fill="currentColor"
                    viewBox="0 0 256 256"
                  >
                    <path d="M204,64V168a12,12,0,0,1-24,0V93L72.49,200.49a12,12,0,0,1-17-17L163,76H88a12,12,0,0,1,0-24H192A12,12,0,0,1,204,64Z"></path>
                  </svg>
                  185.0%
                </span>
              </a>
              <a
                className="crv-ticker__item"
                aria-hidden="true"
                tabIndex={-1}
                href="/application/tokens/Bv1a7cEj5aRnJQhMw4kRQqAFesMSd5LwcDnUzq52BMmr?chain=robinhood"
              >
                <img
                  alt=""
                  width="16"
                  height="16"
                  className="crv-ticker__icon"
                  src="https://cdn.dexscreener.com/cms/images/GcjeczTah2v57O9h?width=800&height=800&quality=95&format=auto"
                />
                <span className="crv-ticker__sym">FLOAT</span>
                <span className="crv-ticker__mcap">$1.62M</span>
                <span className="crv-ticker__chg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="11"
                    height="11"
                    fill="currentColor"
                    viewBox="0 0 256 256"
                  >
                    <path d="M204,64V168a12,12,0,0,1-24,0V93L72.49,200.49a12,12,0,0,1-17-17L163,76H88a12,12,0,0,1,0-24H192A12,12,0,0,1,204,64Z"></path>
                  </svg>
                  175.0%
                </span>
              </a>
              <a
                className="crv-ticker__item"
                aria-hidden="true"
                tabIndex={-1}
                href="/application/tokens/EJAxERvKU4kEVXn3NarjvRtgaMaJyP9ZuMeKA7JJpump?chain=robinhood"
              >
                <img
                  alt=""
                  width="16"
                  height="16"
                  className="crv-ticker__icon"
                  src="https://cdn.dexscreener.com/cms/images/mzA62X_uenf4s4Df?width=800&height=800&quality=95&format=auto"
                />
                <span className="crv-ticker__sym">CHOO</span>
                <span className="crv-ticker__mcap">$1.87M</span>
                <span className="crv-ticker__chg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="11"
                    height="11"
                    fill="currentColor"
                    viewBox="0 0 256 256"
                  >
                    <path d="M204,64V168a12,12,0,0,1-24,0V93L72.49,200.49a12,12,0,0,1-17-17L163,76H88a12,12,0,0,1,0-24H192A12,12,0,0,1,204,64Z"></path>
                  </svg>
                  104.0%
                </span>
              </a>
              <a
                className="crv-ticker__item"
                aria-hidden="true"
                tabIndex={-1}
                href="/application/tokens/14LCiSb7CKDjvxcsbLfzyAA4EobVJwSBLNNzEuGUP8w8?chain=robinhood"
              >
                <img
                  alt=""
                  width="16"
                  height="16"
                  className="crv-ticker__icon"
                  src="https://dd.dexscreener.com/ds-data/tokens/solana/14LCiSb7CKDjvxcsbLfzyAA4EobVJwSBLNNzEuGUP8w8.png"
                  style={{ visibility: "hidden" }}
                />
                <span className="crv-ticker__sym">STEALTH</span>
                <span className="crv-ticker__mcap">$105.01K</span>
                <span className="crv-ticker__chg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="11"
                    height="11"
                    fill="currentColor"
                    viewBox="0 0 256 256"
                  >
                    <path d="M204,64V168a12,12,0,0,1-24,0V93L72.49,200.49a12,12,0,0,1-17-17L163,76H88a12,12,0,0,1,0-24H192A12,12,0,0,1,204,64Z"></path>
                  </svg>
                  102.0%
                </span>
              </a>
              <a
                className="crv-ticker__item"
                aria-hidden="true"
                tabIndex={-1}
                href="/application/tokens/DKYcjobF7HPtL9RyQBRdeRQ2iWvizpfbgWwPWNXdpump?chain=robinhood"
              >
                <img
                  alt=""
                  width="16"
                  height="16"
                  className="crv-ticker__icon"
                  src="https://cdn.dexscreener.com/cms/images/EeFgwNnTiEIktyct?width=800&height=800&quality=95&format=auto"
                />
                <span className="crv-ticker__sym">DacityCoin</span>
                <span className="crv-ticker__mcap">$1.16M</span>
                <span className="crv-ticker__chg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="11"
                    height="11"
                    fill="currentColor"
                    viewBox="0 0 256 256"
                  >
                    <path d="M204,64V168a12,12,0,0,1-24,0V93L72.49,200.49a12,12,0,0,1-17-17L163,76H88a12,12,0,0,1,0-24H192A12,12,0,0,1,204,64Z"></path>
                  </svg>
                  94.9%
                </span>
              </a>
              <a
                className="crv-ticker__item"
                aria-hidden="true"
                tabIndex={-1}
                href="/application/tokens/wMHBD2B8KbDagvXUEapginhtJdrH4QSvSezBM8Tpump?chain=robinhood"
              >
                <img
                  alt=""
                  width="16"
                  height="16"
                  className="crv-ticker__icon"
                  src="https://cdn.dexscreener.com/cms/images/US6CpluFuWt8sjTD?width=800&height=800&quality=95&format=auto"
                />
                <span className="crv-ticker__sym">ANTS</span>
                <span className="crv-ticker__mcap">$2.49M</span>
                <span className="crv-ticker__chg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="11"
                    height="11"
                    fill="currentColor"
                    viewBox="0 0 256 256"
                  >
                    <path d="M204,64V168a12,12,0,0,1-24,0V93L72.49,200.49a12,12,0,0,1-17-17L163,76H88a12,12,0,0,1,0-24H192A12,12,0,0,1,204,64Z"></path>
                  </svg>
                  81.9%
                </span>
              </a>
              <a
                className="crv-ticker__item"
                aria-hidden="true"
                tabIndex={-1}
                href="/application/tokens/HsprHxBRgiVaQdRf3TnKNuZZtaX9JUSPgMFdAkk6pump?chain=robinhood"
              >
                <img
                  alt=""
                  width="16"
                  height="16"
                  className="crv-ticker__icon"
                  src="https://cdn.dexscreener.com/cms/images/-8CCNt5h1g4Fnvqj?width=800&height=800&quality=95&format=auto"
                />
                <span className="crv-ticker__sym">GATO</span>
                <span className="crv-ticker__mcap">$9.64M</span>
                <span className="crv-ticker__chg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="11"
                    height="11"
                    fill="currentColor"
                    viewBox="0 0 256 256"
                  >
                    <path d="M204,64V168a12,12,0,0,1-24,0V93L72.49,200.49a12,12,0,0,1-17-17L163,76H88a12,12,0,0,1,0-24H192A12,12,0,0,1,204,64Z"></path>
                  </svg>
                  61.0%
                </span>
              </a>
              <a
                className="crv-ticker__item"
                aria-hidden="true"
                tabIndex={-1}
                href="/application/tokens/Pmfm2RprxQRKZH1XWVsBUc2KgCTyzeDTSFbT1vJmogz?chain=robinhood"
              >
                <img
                  alt=""
                  width="16"
                  height="16"
                  className="crv-ticker__icon"
                  src="https://cdn.dexscreener.com/cms/images/kOP94Lh1xNl9phyr?width=800&height=800&quality=95&format=auto"
                />
                <span className="crv-ticker__sym">MOGZ</span>
                <span className="crv-ticker__mcap">$478.70K</span>
                <span className="crv-ticker__chg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="11"
                    height="11"
                    fill="currentColor"
                    viewBox="0 0 256 256"
                  >
                    <path d="M204,64V168a12,12,0,0,1-24,0V93L72.49,200.49a12,12,0,0,1-17-17L163,76H88a12,12,0,0,1,0-24H192A12,12,0,0,1,204,64Z"></path>
                  </svg>
                  60.6%
                </span>
              </a>
              <a
                className="crv-ticker__item"
                aria-hidden="true"
                tabIndex={-1}
                href="/application/tokens/CTPoyCwkjMvoJwU4xvZZqoD8tiYk6yDchySiN5gGpump?chain=robinhood"
              >
                <img
                  alt=""
                  width="16"
                  height="16"
                  className="crv-ticker__icon"
                  src="https://cdn.dexscreener.com/cms/images/fgomV20_6LJtdS5w?width=800&height=800&quality=95&format=auto"
                />
                <span className="crv-ticker__sym">fone</span>
                <span className="crv-ticker__mcap">$2.19M</span>
                <span className="crv-ticker__chg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="11"
                    height="11"
                    fill="currentColor"
                    viewBox="0 0 256 256"
                  >
                    <path d="M204,64V168a12,12,0,0,1-24,0V93L72.49,200.49a12,12,0,0,1-17-17L163,76H88a12,12,0,0,1,0-24H192A12,12,0,0,1,204,64Z"></path>
                  </svg>
                  41.4%
                </span>
              </a>
              <a
                className="crv-ticker__item"
                aria-hidden="true"
                tabIndex={-1}
                href="/application/tokens/3w2TvVmTrtq4kSkoFVrTFQgz6MX7ThzDVrx9r5c3pump?chain=robinhood"
              >
                <img
                  alt=""
                  width="16"
                  height="16"
                  className="crv-ticker__icon"
                  src="https://cdn.dexscreener.com/cms/images/hPCRJ6BpEEjR7OSB?width=800&height=800&quality=95&format=auto"
                />
                <span className="crv-ticker__sym">HI</span>
                <span className="crv-ticker__mcap">$434.66K</span>
                <span className="crv-ticker__chg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="11"
                    height="11"
                    fill="currentColor"
                    viewBox="0 0 256 256"
                  >
                    <path d="M204,64V168a12,12,0,0,1-24,0V93L72.49,200.49a12,12,0,0,1-17-17L163,76H88a12,12,0,0,1,0-24H192A12,12,0,0,1,204,64Z"></path>
                  </svg>
                  36.8%
                </span>
              </a>
              <a
                className="crv-ticker__item"
                aria-hidden="true"
                tabIndex={-1}
                href="/application/tokens/2gTbp2gwH46rqExzabSyrdR3294SLwCp2rSqWDS6Sim1?chain=robinhood"
              >
                <img
                  alt=""
                  width="16"
                  height="16"
                  className="crv-ticker__icon"
                  src="https://cdn.dexscreener.com/cms/images/m77rUuvJ5NXElvxd?width=800&height=800&quality=95&format=auto"
                />
                <span className="crv-ticker__sym">CATPAD</span>
                <span className="crv-ticker__mcap">$173.02K</span>
                <span className="crv-ticker__chg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="11"
                    height="11"
                    fill="currentColor"
                    viewBox="0 0 256 256"
                  >
                    <path d="M204,64V168a12,12,0,0,1-24,0V93L72.49,200.49a12,12,0,0,1-17-17L163,76H88a12,12,0,0,1,0-24H192A12,12,0,0,1,204,64Z"></path>
                  </svg>
                  33.7%
                </span>
              </a>
              <a
                className="crv-ticker__item"
                aria-hidden="true"
                tabIndex={-1}
                href="/application/tokens/4kjruqGHDsSqkMdFfCjV7Vb62HPFhtXyWc2t6JpQzDnz?chain=robinhood"
              >
                <img
                  alt=""
                  width="16"
                  height="16"
                  className="crv-ticker__icon"
                  src="https://cdn.dexscreener.com/cms/images/lwZpiYOTcTq51oKH?width=800&height=800&quality=95&format=auto"
                />
                <span className="crv-ticker__sym">GTA6</span>
                <span className="crv-ticker__mcap">$13.05M</span>
                <span className="crv-ticker__chg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="11"
                    height="11"
                    fill="currentColor"
                    viewBox="0 0 256 256"
                  >
                    <path d="M204,64V168a12,12,0,0,1-24,0V93L72.49,200.49a12,12,0,0,1-17-17L163,76H88a12,12,0,0,1,0-24H192A12,12,0,0,1,204,64Z"></path>
                  </svg>
                  27.7%
                </span>
              </a>
              <a
                className="crv-ticker__item"
                aria-hidden="true"
                tabIndex={-1}
                href="/application/tokens/5yC9BM8KUsJTPbWPLfA2N8qH1s9V8DQ3Vcw1G6Jdpump?chain=robinhood"
              >
                <img
                  alt=""
                  width="16"
                  height="16"
                  className="crv-ticker__icon"
                  src="https://cdn.dexscreener.com/cms/images/CosLgfKcR4zLMl2Q?width=800&height=800&quality=95&format=auto"
                />
                <span className="crv-ticker__sym">AgenC</span>
                <span className="crv-ticker__mcap">$1.99M</span>
                <span className="crv-ticker__chg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="11"
                    height="11"
                    fill="currentColor"
                    viewBox="0 0 256 256"
                  >
                    <path d="M204,64V168a12,12,0,0,1-24,0V93L72.49,200.49a12,12,0,0,1-17-17L163,76H88a12,12,0,0,1,0-24H192A12,12,0,0,1,204,64Z"></path>
                  </svg>
                  25.9%
                </span>
              </a>
              <a
                className="crv-ticker__item"
                aria-hidden="true"
                tabIndex={-1}
                href="/application/tokens/ApZuxdpzMrbEYTGEzeY9afh5pj9d6qPRJCTgQYiipbKg?chain=robinhood"
              >
                <img
                  alt=""
                  width="16"
                  height="16"
                  className="crv-ticker__icon"
                  src="https://cdn.dexscreener.com/cms/images/EvHO-m_bFJ_TjSs4?width=800&height=800&quality=95&format=auto"
                />
                <span className="crv-ticker__sym">CYBERLEEK</span>
                <span className="crv-ticker__mcap">$1.69M</span>
                <span className="crv-ticker__chg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="11"
                    height="11"
                    fill="currentColor"
                    viewBox="0 0 256 256"
                  >
                    <path d="M204,64V168a12,12,0,0,1-24,0V93L72.49,200.49a12,12,0,0,1-17-17L163,76H88a12,12,0,0,1,0-24H192A12,12,0,0,1,204,64Z"></path>
                  </svg>
                  25.5%
                </span>
              </a>
              <a
                className="crv-ticker__item"
                aria-hidden="true"
                tabIndex={-1}
                href="/application/tokens/DtcicPCKTKeAh7TDEzTym3hXeoHAoMiBdYJhMYxZpump?chain=robinhood"
              >
                <img
                  alt=""
                  width="16"
                  height="16"
                  className="crv-ticker__icon"
                  src="https://cdn.dexscreener.com/cms/images/2bajn2a05AdQGV-4?width=800&height=800&quality=95&format=auto"
                />
                <span className="crv-ticker__sym">CBUCKS</span>
                <span className="crv-ticker__mcap">$1.70M</span>
                <span className="crv-ticker__chg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="11"
                    height="11"
                    fill="currentColor"
                    viewBox="0 0 256 256"
                  >
                    <path d="M204,64V168a12,12,0,0,1-24,0V93L72.49,200.49a12,12,0,0,1-17-17L163,76H88a12,12,0,0,1,0-24H192A12,12,0,0,1,204,64Z"></path>
                  </svg>
                  21.6%
                </span>
              </a>
              <a
                className="crv-ticker__item"
                aria-hidden="true"
                tabIndex={-1}
                href="/application/tokens/FjPKUGnF5zBpdEv18gT8FJCtxh3MKrFkoeYekgYr1win?chain=robinhood"
              >
                <img
                  alt=""
                  width="16"
                  height="16"
                  className="crv-ticker__icon"
                  src="https://cdn.dexscreener.com/cms/images/TnRgOJHMjT2jYp5f?width=800&height=800&quality=95&format=auto"
                />
                <span className="crv-ticker__sym">1WIN</span>
                <span className="crv-ticker__mcap">$15.81M</span>
                <span className="crv-ticker__chg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="11"
                    height="11"
                    fill="currentColor"
                    viewBox="0 0 256 256"
                  >
                    <path d="M204,64V168a12,12,0,0,1-24,0V93L72.49,200.49a12,12,0,0,1-17-17L163,76H88a12,12,0,0,1,0-24H192A12,12,0,0,1,204,64Z"></path>
                  </svg>
                  15.9%
                </span>
              </a>
              <a
                className="crv-ticker__item"
                aria-hidden="true"
                tabIndex={-1}
                href="/application/tokens/GTBxUiw6wJdmmkCGZgRHLyYxqu1vG4KtRpeox6yDpump?chain=robinhood"
              >
                <img
                  alt=""
                  width="16"
                  height="16"
                  className="crv-ticker__icon"
                  src="https://cdn.dexscreener.com/cms/images/BqiLLFPFrRoiHTBQ?width=800&height=800&quality=95&format=auto"
                />
                <span className="crv-ticker__sym">JEANPHIL</span>
                <span className="crv-ticker__mcap">$3.45M</span>
                <span className="crv-ticker__chg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="11"
                    height="11"
                    fill="currentColor"
                    viewBox="0 0 256 256"
                  >
                    <path d="M204,64V168a12,12,0,0,1-24,0V93L72.49,200.49a12,12,0,0,1-17-17L163,76H88a12,12,0,0,1,0-24H192A12,12,0,0,1,204,64Z"></path>
                  </svg>
                  11.2%
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-[1800px] mx-auto">
        <div
          className="flex items-center justify-between gap-6 px-5 sm:px-8"
          style={{ borderBottom: "1px solid var(--v2-line-1)" }}
        >
          <div className="flex items-center gap-8">
            {(["trending", "trenches"] as const).map((k) => {
              const active = mode === k;
              return (
                <button
                  key={k}
                  onClick={() => setMode(k)}
                  aria-pressed={active}
                  className="relative py-3.5 text-[15px] tracking-wide transition-colors"
                  style={{
                    color: active ? "var(--v2-t-1)" : "var(--v2-t-4)",
                    fontWeight: active ? "600" : "400",
                  }}
                >
                  {k === "trending" ? "Trending" : "Trenches"}
                  {active && (
                    <span
                      className="absolute left-0 right-0"
                      style={{ bottom: "-1px", height: "2px", background: "var(--v2-accent)" }}
                    ></span>
                  )}
                </button>
              );
            })}
          </div>
          {mode === "trending" && (
            <IntervalControls value={interval} onChange={setInterval_} onRefresh={refresh} spinning={spinning} />
          )}
        </div>
        {mode === "trending" ? (
        <>
          <FilterBar filters={filters} onChange={setFilters} />
          <TrendingRows tokens={rows} interval={interval} now={now} reset={() => setFilters({ ...EMPTY_FILTERS, signals: { ...EMPTY_FILTERS.signals } })} />
        </>
        ) : (
          <div className="px-5 sm:px-8 pt-4">
            <Trenches />
          </div>
        )}
      </div>
    </>
  );
}


export function ApplicationTerminalContent() {
  return (
    <Suspense fallback={null}>
      <TerminalInner />
    </Suspense>
  );
}
