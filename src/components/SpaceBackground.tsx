import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Stars } from '@react-three/drei';
import * as THREE from 'three';

const AnimatedStars = () => {
  const ref = useRef<THREE.Points>(null);

  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.x += 0.0001;
      ref.current.rotation.y += 0.0002;
    }
  });

  return <Stars ref={ref} radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />;
};

const SpaceBackground: React.FC = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full z-[-1]">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <ambientLight intensity={0.1} />
        <AnimatedStars />
      </Canvas>
    </div>
  );
};

export default SpaceBackground;