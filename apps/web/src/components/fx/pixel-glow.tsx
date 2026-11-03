"use client";
import { useEffect, useRef } from "react";

// Port dari efek hero lama (shader WebGL "flow"): tiga pita cahaya + dot-screen. Warna diganti ke palet Corvid.
const VERT = "attribute vec2 position; void main(){ gl_Position = vec4(position, 0.0, 1.0); }";
const FRAG = `
precision highp float;
uniform vec2 resolution; uniform float time; uniform float dpr;
float hash(vec2 p){ p = fract(p * vec2(234.34, 435.345)); p += dot(p, p + 34.23); return fract(p.x * p.y); }
float band(vec2 uv, float base, float amp, float freq, float phase, float width){
  float y = base + amp * sin(uv.x * freq + phase) + 0.04 * sin(uv.x * freq * 2.7 - phase * 1.3);
  float d = uv.y - y; return exp(-(d * d) / width);
}
void main(){
  vec2 uv = gl_FragCoord.xy / resolution.xy;
  float aspect = resolution.x / resolution.y;
  float t = time * 0.2;
  vec3 amber  = vec3(0.788, 0.827, 0.851);
  vec3 orange = vec3(0.667, 0.733, 0.773);
  vec3 ember  = vec3(0.404, 0.420, 0.424);
  float a = band(uv, 0.11, 0.07, 2.4, t, 0.0045);
  float b = band(uv, 0.03, 0.06, 1.9, t * 0.8 + 2.1, 0.0075);
  float c = band(uv, 0.18, 0.05, 3.1, -t * 0.9 + 4.0, 0.0030);
  vec2 q = vec2(uv.x * aspect, uv.y);
  float poolL = exp(-pow(distance(q, vec2(0.05 * aspect, -0.05 + 0.03 * sin(t))), 2.0) / 0.10);
  float poolR = exp(-pow(distance(q, vec2(0.95 * aspect, -0.05 + 0.03 * cos(t))), 2.0) / 0.10);
  vec3 col = amber * a * 0.9 + orange * b * 0.8 + ember * c * 0.9 + orange * (poolL + poolR) * 0.6;
  float light = a * 1.1 + b * 0.95 + c * 0.7 + (poolL + poolR) * 0.7;
  vec2 m = vec2((uv.x - 0.5) * aspect, uv.y - 0.5);
  float mid = exp(-(m.x * m.x) / 0.18 - (m.y * m.y) / 0.5);
  light *= 1.0 - mid * 0.88;
  float cell = 6.0 * dpr;
  vec2 g = fract(gl_FragCoord.xy / cell) - 0.5;
  float dotShape = smoothstep(0.34, 0.16, length(g));
  float level = 0.55 + 0.45 * hash(floor(gl_FragCoord.xy / cell));
  float shimmer = 0.7 + 0.3 * sin((uv.x * aspect - uv.y) * 26.0 - time * 1.4);
  float dots = dotShape * level * shimmer;
  float alpha = clamp(light * 1.5 * dots, 0.0, 1.0);
  vec3 base = vec3(0.106, 0.106, 0.106);
  vec3 lit = col / max(light, 0.001);
  gl_FragColor = vec4(mix(base, lit, alpha) + vec3(0.012) * dotShape, 1.0);
}`;

export function PixelGlow() {
  const ref = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const cv = ref.current;
    if (!cv) return;
    const gl = cv.getContext("webgl", { antialias: false, premultipliedAlpha: false });
    if (!gl) return;
    const sh = (type: number, src: string) => {
      const s = gl.createShader(type)!;
      gl.shaderSource(s, src);
      gl.compileShader(s);
      return gl.getShaderParameter(s, gl.COMPILE_STATUS) ? s : null;
    };
    const vs = sh(gl.VERTEX_SHADER, VERT);
    const fs = sh(gl.FRAGMENT_SHADER, FRAG);
    if (!vs || !fs) return;
    const prog = gl.createProgram()!;
    gl.attachShader(prog, vs);
    gl.attachShader(prog, fs);
    gl.linkProgram(prog);
    if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) return;
    gl.useProgram(prog);
    const buf = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buf);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, -1, 1, 1, -1, 1, 1]), gl.STATIC_DRAW);
    const pos = gl.getAttribLocation(prog, "position");
    gl.enableVertexAttribArray(pos);
    gl.vertexAttribPointer(pos, 2, gl.FLOAT, false, 0, 0);
    const uRes = gl.getUniformLocation(prog, "resolution");
    const uTime = gl.getUniformLocation(prog, "time");
    const uDpr = gl.getUniformLocation(prog, "dpr");
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let dpr = 1;
    const resize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      const r = cv.getBoundingClientRect();
      cv.width = Math.max(1, Math.round(r.width * dpr));
      cv.height = Math.max(1, Math.round(r.height * dpr));
      gl.viewport(0, 0, cv.width, cv.height);
    };
    const t0 = performance.now();
    const draw = (now: number) => {
      gl.uniform2f(uRes, cv.width, cv.height);
      gl.uniform1f(uTime, (now - t0) / 1000);
      gl.uniform1f(uDpr, dpr);
      gl.drawArrays(gl.TRIANGLES, 0, 6);
    };
    let raf = 0;
    let visible = true;
    const loop = (now: number) => {
      if (visible && !document.hidden) draw(now);
      raf = requestAnimationFrame(loop);
    };
    resize();
    if (reduced) draw(t0 + 4000);
    else raf = requestAnimationFrame(loop);
    const ro = new ResizeObserver(() => {
      resize();
      if (reduced) draw(t0 + 4000);
    });
    ro.observe(cv);
    const io = new IntersectionObserver(([e]) => {
      visible = e.isIntersecting;
    });
    io.observe(cv);
    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      io.disconnect();
      gl.deleteProgram(prog);
      gl.deleteShader(vs);
      gl.deleteShader(fs);
      gl.deleteBuffer(buf);
    };
  }, []);
  return (
    <div className="crv-pixel-glow" aria-hidden="true">
      <canvas ref={ref} className="absolute inset-0 w-full h-full" aria-hidden="true" />
      <div className="crv-pixel-glow__vignette" />
    </div>
  );
}
