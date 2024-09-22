import React, { useRef, useEffect } from 'react';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';
import * as THREE from 'three';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { useTexture } from '@react-three/drei';

const Planet = ({ position, texture, size, onClick }: { position: [number, number, number]; texture: string; size: number; onClick: () => void }) => {
  const planetTexture = useTexture(texture);
  const meshRef = useRef<THREE.Mesh>(null);
  const { camera } = useThree();

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.005;
    }
  });

  return (
    <mesh ref={meshRef} position={position} onClick={(e) => { e.stopPropagation(); onClick(); }}>
      <sphereGeometry args={[size, 32, 32]} />
      <meshStandardMaterial map={planetTexture} />
    </mesh>
  );
};

const PlanetNavigation: React.FC = () => {
  const router = useRouter();
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width * 2 - 1;
        const y = -((e.clientY - rect.top) / rect.height) * 2 + 1;
        containerRef.current.style.setProperty('--mouse-x', `${x}`);
        containerRef.current.style.setProperty('--mouse-y', `${y}`);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div ref={containerRef} className="fixed bottom-0 left-0 w-full h-32 z-10">
      <Canvas camera={{ position: [0, 0, 10], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <Planet
          position={[-4, 0, 0]}
          texture="/images/earth_texture.jpg"
          size={1}
          onClick={() => router.push('/')}
        />
        <Planet
          position={[-1.5, 0, 0]}
          texture="/images/mars_texture.jpg"
          size={0.8}
          onClick={() => router.push('/projects')}
        />
        <Planet
          position={[1.5, 0, 0]}
          texture="/images/jupiter_texture.jpg"
          size={1.2}
          onClick={() => router.push('/experience')}
        />
        <Planet
          position={[4, 0, 0]}
          texture="/images/saturn_texture.jpg"
          size={0.9}
          onClick={() => router.push('/contact')}
        />
      </Canvas>
    </div>
  );
};

export default PlanetNavigation;