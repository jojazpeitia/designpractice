'use client'

import { Canvas, useFrame } from "@react-three/fiber"
import { useRef } from "react";
import { Mesh } from "three";

function Cube() {
  const meshRef = useRef<Mesh>(null);

  useFrame(() => {
    if (!meshRef.current) {
      return;
    }

    meshRef.current.rotation.x += 0.01;
    meshRef.current.rotation.y += 0.01;
  });

  return (
    <mesh ref={meshRef}>
      <boxGeometry args={[2, 2, 2]} />
      <meshStandardMaterial color="white" />
    </mesh>
  );
}

export default function Design2() {
  return (
    <div>
      <h1 className="justify-center items-center flex mt-36">
        cube
      </h1>
      <Canvas>
        <ambientLight />
        <pointLight intensity={1000} position={[10, 10, 10]} />
        <Cube />
      </Canvas>
    </div>
  );
}