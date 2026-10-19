'use client';

import React, { useEffect, useRef } from 'react';

export function FluidBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Check reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Initialize WebGL
    const gl =
      canvas.getContext('webgl', { powerPreference: 'low-power', alpha: false }) ||
      (canvas.getContext('experimental-webgl') as WebGLRenderingContext | null);

    let animationFrameId: number;
    let isVisible = true;

    // Pointer coordinates with smooth interpolation
    const mouse = { x: 0.5, y: 0.5, targetX: 0.5, targetY: 0.5 };

    const handlePointerMove = (e: MouseEvent | TouchEvent) => {
      let clientX = 0;
      let clientY = 0;
      if ('touches' in e && e.touches.length > 0) {
        clientX = e.touches[0].clientX;
        clientY = e.touches[0].clientY;
      } else if ('clientX' in e) {
        clientX = e.clientX;
        clientY = e.clientY;
      }
      mouse.targetX = clientX / window.innerWidth;
      mouse.targetY = 1.0 - clientY / window.innerHeight;
    };

    window.addEventListener('mousemove', handlePointerMove, { passive: true });
    window.addEventListener('touchmove', handlePointerMove, { passive: true });

    // Handle visibility change to save GPU resources
    const handleVisibilityChange = () => {
      isVisible = document.visibilityState === 'visible';
    };
    document.addEventListener('visibilitychange', handleVisibilityChange);

    // Fallback Canvas 2D if WebGL is unavailable
    if (!gl) {
      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      let width = (canvas.width = window.innerWidth);
      let height = (canvas.height = window.innerHeight);

      const handleResize = () => {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
      };
      window.addEventListener('resize', handleResize);

      let t = 0;
      const render2D = () => {
        if (isVisible && !prefersReducedMotion) {
          t += 0.003;
          mouse.x += (mouse.targetX - mouse.x) * 0.05;
          mouse.y += (mouse.targetY - mouse.y) * 0.05;

          // Render deep midnight base
          ctx.fillStyle = '#05070c';
          ctx.fillRect(0, 0, width, height);

          // Flowing organic color fields
          const grad1 = ctx.createRadialGradient(
            width * (0.3 + Math.sin(t) * 0.15 + mouse.x * 0.1),
            height * (0.3 + Math.cos(t * 0.8) * 0.15),
            10,
            width * 0.4,
            height * 0.4,
            width * 0.65
          );
          grad1.addColorStop(0, 'rgba(107, 67, 166, 0.22)'); // violet
          grad1.addColorStop(1, 'transparent');
          ctx.fillStyle = grad1;
          ctx.fillRect(0, 0, width, height);

          const grad2 = ctx.createRadialGradient(
            width * (0.7 + Math.cos(t * 0.7) * 0.15),
            height * (0.6 + Math.sin(t * 0.9) * 0.15 + (1 - mouse.y) * 0.1),
            10,
            width * 0.7,
            height * 0.6,
            width * 0.6
          );
          grad2.addColorStop(0, 'rgba(217, 155, 67, 0.18)'); // warm amber
          grad2.addColorStop(0.6, 'rgba(200, 70, 48, 0.10)'); // vermilion
          grad2.addColorStop(1, 'transparent');
          ctx.fillStyle = grad2;
          ctx.fillRect(0, 0, width, height);

          const grad3 = ctx.createRadialGradient(
            width * (0.5 + Math.sin(t * 0.5) * 0.2),
            height * (0.8 + Math.cos(t * 0.6) * 0.1),
            10,
            width * 0.5,
            height * 0.8,
            width * 0.5
          );
          grad3.addColorStop(0, 'rgba(25, 88, 97, 0.20)'); // deep teal
          grad3.addColorStop(1, 'transparent');
          ctx.fillStyle = grad3;
          ctx.fillRect(0, 0, width, height);
        }
        animationFrameId = requestAnimationFrame(render2D);
      };
      render2D();

      return () => {
        window.removeEventListener('mousemove', handlePointerMove);
        window.removeEventListener('touchmove', handlePointerMove);
        window.removeEventListener('resize', handleResize);
        document.removeEventListener('visibilitychange', handleVisibilityChange);
        cancelAnimationFrame(animationFrameId);
      };
    }

    // Shaders for WebGL Fluid Shader
    const vsSource = `
      attribute vec2 a_position;
      void main() {
        gl_Position = vec4(a_position, 0.0, 1.0);
      }
    `;

    const fsSource = `
      precision mediump float;
      uniform vec2 u_resolution;
      uniform float u_time;
      uniform vec2 u_mouse;

      // Simplex-inspired organic noise function
      vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
      vec2 mod289(vec2 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
      vec3 permute(vec3 x) { return mod289(((x*34.0)+1.0)*x); }

      float snoise(vec2 v) {
        const vec4 C = vec4(0.211324865405187, 0.366025403784439,
                           -0.577350269189626, 0.024390243902439);
        vec2 i  = floor(v + dot(v, C.yy) );
        vec2 x0 = v -   i + dot(i, C.xx);
        vec2 i1;
        i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
        vec4 x12 = x0.xyxy + C.xxzz;
        x12.xy -= i1;
        i = mod289(i);
        vec3 p = permute( permute( i.y + vec3(0.0, i1.y, 1.0 ))
              + i.x + vec3(0.0, i1.x, 1.0 ));
        vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy), dot(x12.zw,x12.zw)), 0.0);
        m = m*m ;
        m = m*m ;
        vec3 x = 2.0 * fract(p * C.www) - 1.0;
        vec3 h = abs(x) - 0.5;
        vec3 ox = floor(x + 0.5);
        vec3 a0 = x - ox;
        m *= 1.79284291400159 - 0.85373472095314 * ( a0*a0 + h*h );
        vec3 g;
        g.x  = a0.x  * x0.x  + h.x  * x0.y;
        g.yz = a0.yz * x12.xz + h.yz * x12.yw;
        return 130.0 * dot(m, g);
      }

      void main() {
        vec2 st = gl_FragCoord.xy / u_resolution.xy;
        st.x *= u_resolution.x / u_resolution.y;

        // Subtle pointer displacement
        vec2 mouseCoord = u_mouse;
        mouseCoord.x *= u_resolution.x / u_resolution.y;
        float distToMouse = length(st - mouseCoord);
        vec2 mouseDisplacement = (st - mouseCoord) * exp(-distToMouse * 3.5) * 0.12;
        st += mouseDisplacement;

        // Multi-frequency organic flow
        float t = u_time * 0.045;
        float n1 = snoise(st * 0.85 + vec2(t * 0.6, t * 0.4));
        float n2 = snoise(st * 1.5 - vec2(t * 0.4, -t * 0.5) + vec2(n1 * 0.6));
        float n3 = snoise(st * 2.2 + vec2(-t * 0.3, t * 0.7) + vec2(n2 * 0.4));

        // Liquid Cinema Color System
        vec3 base = vec3(0.02, 0.027, 0.047);       // Deep Midnight Blue (#05070c)
        vec3 violet = vec3(0.24, 0.14, 0.40);     // Organic Violet (#3e2466)
        vec3 teal = vec3(0.06, 0.22, 0.25);       // Deep Teal (#103840)
        vec3 amber = vec3(0.85, 0.60, 0.26);      // Warm Amber (#d99b43)
        vec3 vermilion = vec3(0.78, 0.27, 0.19);  // Subtle Vermilion (#c84630)

        // Composite organic layers
        vec3 color = base;
        color = mix(color, violet, smoothstep(-0.4, 0.7, n1) * 0.38);
        color = mix(color, teal, smoothstep(-0.3, 0.8, n2) * 0.32);
        color = mix(color, amber, smoothstep(0.2, 0.95, n3) * 0.22);
        color = mix(color, vermilion, smoothstep(0.4, 1.0, n1 * n2) * 0.16);

        // Soft peripheral vignette
        vec2 uv = gl_FragCoord.xy / u_resolution.xy;
        float vignette = uv.x * uv.y * (1.0 - uv.x) * (1.0 - uv.y);
        vignette = clamp(pow(16.0 * vignette, 0.3), 0.0, 1.0);
        color *= (0.75 + 0.25 * vignette);

        gl_FragColor = vec4(color, 1.0);
      }
    `;

    // Compile shader helper
    const createShader = (type: number, source: string) => {
      const shader = gl.createShader(type);
      if (!shader) return null;
      gl.shaderSource(shader, source);
      gl.compileShader(shader);
      if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        gl.deleteShader(shader);
        return null;
      }
      return shader;
    };

    const vs = createShader(gl.VERTEX_SHADER, vsSource);
    const fs = createShader(gl.FRAGMENT_SHADER, fsSource);
    if (!vs || !fs) return;

    const program = gl.createProgram();
    if (!program) return;
    gl.attachShader(program, vs);
    gl.attachShader(program, fs);
    gl.linkProgram(program);

    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) return;
    gl.useProgram(program);

    // Quad geometry
    const positionBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array([-1, -1, 1, -1, -1, 1, -1, 1, 1, -1, 1, 1]),
      gl.STATIC_DRAW
    );

    const positionLoc = gl.getAttribLocation(program, 'a_position');
    gl.enableVertexAttribArray(positionLoc);
    gl.vertexAttribPointer(positionLoc, 2, gl.FLOAT, false, 0, 0);

    const resolutionLoc = gl.getUniformLocation(program, 'u_resolution');
    const timeLoc = gl.getUniformLocation(program, 'u_time');
    const mouseLoc = gl.getUniformLocation(program, 'u_mouse');

    // Resize handler (caps DPR at 1.5 to preserve GPU budget)
    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      const width = Math.floor(window.innerWidth * dpr);
      const height = Math.floor(window.innerHeight * dpr);

      if (canvas.width !== width || canvas.height !== height) {
        canvas.width = width;
        canvas.height = height;
        gl.viewport(0, 0, width, height);
      }
    };
    window.addEventListener('resize', resize);
    resize();

    const startTime = performance.now();

    const render = () => {
      if (isVisible && !prefersReducedMotion) {
        const currentTime = (performance.now() - startTime) * 0.001;

        // Smooth mouse lerp
        mouse.x += (mouse.targetX - mouse.x) * 0.04;
        mouse.y += (mouse.targetY - mouse.y) * 0.04;

        gl.uniform2f(resolutionLoc, canvas.width, canvas.height);
        gl.uniform1f(timeLoc, currentTime);
        gl.uniform2f(mouseLoc, mouse.x, mouse.y);

        gl.drawArrays(gl.TRIANGLES, 0, 6);
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('mousemove', handlePointerMove);
      window.removeEventListener('touchmove', handlePointerMove);
      window.removeEventListener('resize', resize);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      cancelAnimationFrame(animationFrameId);
      gl.deleteProgram(program);
    };
  }, []);

  return (
    <div
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
      aria-hidden="true"
    >
      <canvas
        ref={canvasRef}
        className="w-full h-full object-cover"
        style={{ filter: 'blur(20px) contrast(1.15)' }}
      />
      {/* Darkening veil to preserve WCAG contrast for all text */}
      <div className="absolute inset-0 bg-[#05070c]/75" />
    </div>
  );
}
