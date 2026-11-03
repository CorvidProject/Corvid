export function ApplicationSettingsContent() {
  return (
    <>
      <div className="flex items-center justify-center py-20 px-4">
        <div
          className="relative flex flex-col items-center text-center w-full max-w-[440px]"
          style={{
            background: "var(--v2-panel-grad)",
            border: "1px solid var(--v2-line-1)",
            borderRadius: "16px",
            boxShadow: "var(--v2-panel-inset)",
            padding: "48px 40px",
          }}
        >
          <div
            className="absolute top-0 left-8 right-8 h-px pointer-events-none"
            style={{
              background:
                "linear-gradient(90deg, transparent, var(--v2-accent) 50%, transparent)",
            }}
          ></div>
          <span
            className="font-mono font-semibold text-[11px] tracking-[0.06em] uppercase mb-5"
            style={{ color: "var(--v2-accent-text)" }}
          >
            [ Sign-in required ]
          </span>
          <h3
            className="text-[22px] font-bold leading-tight mb-3"
            style={{ color: "var(--v2-t-1)" }}
          >
            Unlock this feature
          </h3>
          <p
            className="text-[14px] leading-relaxed mb-8 max-w-[340px]"
            style={{ color: "var(--v2-t-3)" }}
          >
            Free account — 25 credits included
          </p>
          <button className="btn-v2 btn-v2-primary h-11 px-7 text-[14px] font-semibold">
            Create account
          </button>
        </div>
      </div>
    </>
  );
}
