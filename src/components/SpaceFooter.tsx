import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import { motion } from 'framer-motion';
import * as random from 'maath/random/dist/maath-random.esm';

const StarField = () => {
  const ref = useRef<THREE.Points>(null);
  const sphere = random.inSphere(new Float32Array(5000), { radius: 1.2 });

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#ffffff"
          size={0.002}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

const SpaceFooter: React.FC = () => {
  return (
    <footer className="relative h-40 overflow-hidden">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <StarField />
      </Canvas>
      <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-t from-space-dark to-transparent">
        <div className="text-center">
          <p className="text-space-light text-sm">
            Created and designed with <span className="text-red-500">❤️</span> by Sarvesh
          </p>
          <div className="mt-2 flex justify-center space-x-4">
            <motion.a 
              href="https://linkedin.com/in/yourprofile" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-space-light hover:text-space-white transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <span className="bg-blue-600 px-2 py-1 rounded">LinkedIn</span>
            </motion.a>
            <motion.a 
              href="https://github.com/wowgeekyboy" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-space-light hover:text-space-white transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <span className="bg-gray-800 px-2 py-1 rounded">GitHub</span>
            </motion.a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default SpaceFooter;