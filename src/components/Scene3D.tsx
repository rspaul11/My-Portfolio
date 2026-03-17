import { Canvas } from "@react-three/fiber";
import { Float, MeshDistortMaterial } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

const FloatingOrb = ({ position, color, speed = 1, distort = 0.4, size = 1 }: {
  position: [number, number, number];
  color: string;
  speed?: number;
  distort?: number;
  size?: number;
}) => {
  const mesh = useRef<THREE.Mesh>(null);
  return (
    <Float speed={speed} rotationIntensity={0.4} floatIntensity={1.5}>
      <mesh ref={mesh} position={position}>
        <icosahedronGeometry args={[size, 4]} />
        <MeshDistortMaterial
          color={color}
          transparent
          opacity={0.35}
          distort={distort}
          speed={2}
          roughness={0.2}
          metalness={0.8}
        />
      </mesh>
    </Float>
  );
};

const Particles = ({ count = 80 }: { count?: number }) => {
  const points = useRef<THREE.Points>(null);
  const positions = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 20;
    positions[i * 3 + 1] = (Math.random() - 0.5) * 20;
    positions[i * 3 + 2] = (Math.random() - 0.5) * 10;
  }

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial size={0.03} color="#6366f1" transparent opacity={0.6} sizeAttenuation />
    </points>
  );
};

interface Scene3DProps {
  variant?: "hero" | "section" | "minimal";
  className?: string;
}

const Scene3D = ({ variant = "hero", className = "" }: Scene3DProps) => {
  return (
    <div className={`absolute inset-0 pointer-events-none ${className}`}>
      <Canvas camera={{ position: [0, 0, 6], fov: 60 }} dpr={[1, 1.5]}>
        <ambientLight intensity={0.3} />
        <directionalLight position={[5, 5, 5]} intensity={0.5} />
        {variant === "hero" && (
          <>
            <FloatingOrb position={[-3, 1.5, -2]} color="#6366f1" speed={1.2} size={1.2} distort={0.5} />
            <FloatingOrb position={[3.5, -1, -1]} color="#06b6d4" speed={0.8} size={0.8} distort={0.3} />
            <FloatingOrb position={[0, -2.5, -3]} color="#8b5cf6" speed={1} size={0.6} distort={0.6} />
            <Particles count={120} />
          </>
        )}
        {variant === "section" && (
          <>
            <FloatingOrb position={[-4, 0, -3]} color="#6366f1" speed={0.6} size={0.7} distort={0.3} />
            <FloatingOrb position={[4, 1, -2]} color="#06b6d4" speed={0.5} size={0.5} distort={0.4} />
            <Particles count={50} />
          </>
        )}
        {variant === "minimal" && (
          <>
            <FloatingOrb position={[3, 0, -4]} color="#6366f1" speed={0.4} size={0.5} distort={0.2} />
            <Particles count={30} />
          </>
        )}
      </Canvas>
    </div>
  );
};

export default Scene3D;
