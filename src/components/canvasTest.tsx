import React, { useEffect, useRef } from "react";

export default function CanvasTest() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const gl = canvas.getContext("webgl");
    if (!gl) {
      alert("WebGL not supported");
      return;
    }

    gl.clearColor(0.0, 0.0, 0.0, 1.0);
    gl.clear(gl.COLOR_BUFFER_BIT);
  }, []);

  return <canvas width="640" height="480" ref={canvasRef} />;
}
