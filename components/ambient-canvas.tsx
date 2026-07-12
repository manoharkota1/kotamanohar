"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

function Orb() {
  const mesh = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!mesh.current) return;
    mesh.current.rotation.x = state.clock.elapsedTime * 0.07;
    mesh.current.rotation.y = state.clock.elapsedTime * 0.09;
  });

  return (
    <Float speed={0.8} rotationIntensity={0.25} floatIntensity={0.7}>
      <mesh ref={mesh} position={[2.6, -1.8, -6]}>
        <icosahedronGeometry args={[1.35, 2]} />
        <meshBasicMaterial color="#c9f22a" wireframe transparent opacity={0.055} />
      </mesh>
    </Float>
  );
}

/** A deliberately near-invisible spatial detail that gives the black canvas depth. */
export function AmbientCanvas() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden opacity-25" aria-hidden="true">
      <Canvas camera={{ position: [0, 0, 5], fov: 48 }} dpr={[1, 1.5]}>
        <Orb />
      </Canvas>
    </div>
  );
}
