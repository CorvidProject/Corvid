import "react";

// Izinkan custom property CSS (--nama) pada prop style (dipakai variabel reveal --rv-t / --rv-clip).
declare module "react" {
  interface CSSProperties {
    [key: `--${string}`]: string | number | undefined;
  }
}
