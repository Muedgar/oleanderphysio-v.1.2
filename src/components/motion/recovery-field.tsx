"use client";

import { useEffect, useRef } from "react";
import type { BufferAttribute } from "three";

import { cn } from "@/lib/utils";
import { Container } from "@/components/layout/container";

type RecoveryFieldProps = {
  className?: string;
};

export function RecoveryField({ className }: RecoveryFieldProps) {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mount = mountRef.current;
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (!mount || reduceMotion) {
      return;
    }

    let isCancelled = false;
    let cleanup = () => {};

    async function setupField() {
      const three = await import("three");

      if (!mount || isCancelled) {
        return;
      }

      const scene = new three.Scene();
      const camera = new three.PerspectiveCamera(45, 1, 0.1, 100);
      camera.position.z = 8;

      const testCanvas = document.createElement("canvas");
      const canRenderWebGl =
        Boolean(testCanvas.getContext("webgl2")) ||
        Boolean(testCanvas.getContext("webgl"));

      if (!canRenderWebGl) {
        mount.dataset.fallback = "true";
        return;
      }

      const renderer = new three.WebGLRenderer({
        alpha: true,
        antialias: true,
        preserveDrawingBuffer: true,
        powerPreference: "low-power",
      });
      renderer.setClearColor(0x000000, 0);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
      mount.appendChild(renderer.domElement);

      const particleCount = 180;
      const positions = new Float32Array(particleCount * 3);
      const basePositions = new Float32Array(particleCount * 3);

      for (let index = 0; index < particleCount; index += 1) {
        const stride = index * 3;
        const band = index / particleCount;
        const angle = band * Math.PI * 5.2;
        const radius = 1.2 + Math.sin(band * Math.PI * 2) * 0.36;
        const x = Math.cos(angle) * radius * 2.1;
        const y = (band - 0.5) * 4.7;
        const z = Math.sin(angle) * 0.86;

        positions[stride] = x;
        positions[stride + 1] = y;
        positions[stride + 2] = z;
        basePositions[stride] = x;
        basePositions[stride + 1] = y;
        basePositions[stride + 2] = z;
      }

      const geometry = new three.BufferGeometry();
      geometry.setAttribute("position", new three.BufferAttribute(positions, 3));

      const material = new three.PointsMaterial({
        color: 0x7fe8da,
        size: 0.055,
        transparent: true,
        opacity: 0.58,
        depthWrite: false,
        blending: three.AdditiveBlending,
      });

      const points = new three.Points(geometry, material);
      scene.add(points);

      const glowGeometry = new three.TorusGeometry(1.82, 0.008, 12, 160);
      const glowMaterial = new three.MeshBasicMaterial({
        color: 0xf5c542,
        transparent: true,
        opacity: 0.14,
      });
      const glow = new three.Mesh(glowGeometry, glowMaterial);
      glow.rotation.x = Math.PI / 2.8;
      glow.rotation.y = -0.28;
      scene.add(glow);

      const resize = () => {
        const { width, height } = mount.getBoundingClientRect();
        renderer.setSize(width, height, false);
        camera.aspect = width / Math.max(height, 1);
        camera.updateProjectionMatrix();
      };

      let frameId = 0;
      const animate = () => {
        const time = performance.now() * 0.00034;
        const positionAttribute = geometry.getAttribute(
          "position",
        ) as BufferAttribute;

        for (let index = 0; index < particleCount; index += 1) {
          const stride = index * 3;
          const phase = index * 0.047;

          positions[stride] =
            basePositions[stride] + Math.sin(time * 2.2 + phase) * 0.12;
          positions[stride + 1] =
            basePositions[stride + 1] + Math.cos(time * 1.7 + phase) * 0.08;
          positions[stride + 2] =
            basePositions[stride + 2] + Math.sin(time + phase) * 0.22;
        }

        positionAttribute.needsUpdate = true;
        points.rotation.z = Math.sin(time * 0.55) * 0.045;
        points.rotation.y = Math.sin(time * 0.42) * 0.18;
        glow.rotation.z = time * 0.28;

        renderer.render(scene, camera);
        frameId = window.requestAnimationFrame(animate);
      };

      resize();
      animate();
      window.addEventListener("resize", resize);

      cleanup = () => {
        window.cancelAnimationFrame(frameId);
        window.removeEventListener("resize", resize);
        geometry.dispose();
        material.dispose();
        glowGeometry.dispose();
        glowMaterial.dispose();
        renderer.dispose();
        renderer.domElement.remove();
      };
    }

    setupField();

    return () => {
      isCancelled = true;
      cleanup();
    };
  }, []);

  return (
    <section className={cn("bg-clinic-ink text-white", className)}>
      <Container className="grid min-h-[78svh] gap-10 py-20 md:grid-cols-[0.9fr_1.1fr] md:items-center md:py-28">
        <div className="max-w-2xl" data-reveal="lift">
          <p className="editorial-eyebrow">Small progress, repeated</p>
          <h2 className="editorial-title-inverse mt-5">
            Movement is the treatment. Confidence is the outcome.
          </h2>
          <p className="mt-7 text-base leading-8 text-white/72 md:text-lg">
            Recovery often happens in small, repeated changes. We help those
            changes become strength you can trust.
          </p>
        </div>

        <div
          className="relative min-h-[22rem] overflow-hidden rounded-lg border border-white/12 bg-white/[0.035] md:min-h-[32rem]"
          data-reveal="image"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_35%_35%,rgba(127,232,218,0.24),transparent_34%),radial-gradient(circle_at_74%_68%,rgba(245,197,66,0.14),transparent_30%)]" />
          <div
            ref={mountRef}
            className="absolute inset-0 data-[fallback=true]:bg-[radial-gradient(circle_at_42%_38%,rgba(127,232,218,0.2),transparent_28%),linear-gradient(135deg,transparent,rgba(127,232,218,0.12),transparent)]"
            aria-hidden="true"
          />
          <div className="absolute inset-x-8 bottom-8 h-px bg-gradient-to-r from-transparent via-white/28 to-transparent" />
        </div>
      </Container>
    </section>
  );
}
