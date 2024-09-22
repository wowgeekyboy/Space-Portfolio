import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { Canvas, useFrame } from '@react-three/fiber';
import { Stars } from '@react-three/drei';

const SpaceBackground: React.FC = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full z-[-1]">
      <Canvas>
        <ambientLight intensity={0.1} />
        <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
        <Comets />
      </Canvas>
    </div>
  );
};

const Comets: React.FC = () => {
  const cometsRef = useRef<THREE.Group>(null);

  useEffect(() => {
    if (cometsRef.current) {
      for (let i = 0; i < 5; i++) {
        const comet = new THREE.Mesh(
          new THREE.SphereGeometry(0.05, 32, 32),
          new THREE.MeshBasicMaterial({ color: 0xffffff })
        );
        comet.position.set(
          Math.random() * 100 - 50,
          Math.random() * 100 - 50,
          Math.random() * 100 - 50
        );
        comet.userData = {
          velocity: new THREE.Vector3(
            (Math.random() - 0.5) * 0.1,
            (Math.random() - 0.5) * 0.1,
            (Math.random() - 0.5) * 0.1
          ),
        };
        cometsRef.current.add(comet);
      }
    }
  }, []);

  useFrame(() => {
    if (cometsRef.current) {
      cometsRef.current.children.forEach((comet: THREE.Object3D) => {
        comet.position.add(comet.userData.velocity);
        if (
          comet.position.x > 50 ||
          comet.position.x < -50 ||
          comet.position.y > 50 ||
          comet.position.y < -50 ||
          comet.position.z > 50 ||
          comet.position.z < -50
        ) {
          comet.position.set(
            Math.random() * 100 - 50,
            Math.random() * 100 - 50,
            Math.random() * 100 - 50
          );
        }
      });
    }
  });

  return <group ref={cometsRef} />;
};

export default SpaceBackground;