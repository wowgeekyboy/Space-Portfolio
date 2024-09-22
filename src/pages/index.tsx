import React, { useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import SpaceButton from '../components/SpaceButton';
import { useRouter } from 'next/router';

const Comet = () => {
  const cometRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const animateComet = () => {
      if (cometRef.current) {
        cometRef.current.style.left = '-100px';
        cometRef.current.style.top = `${Math.random() * window.innerHeight}px`;
        cometRef.current.style.opacity = '1';

        setTimeout(() => {
          if (cometRef.current) {
            cometRef.current.style.left = '100%';
            cometRef.current.style.opacity = '0';
          }
        }, 100);

        setTimeout(animateComet, Math.random() * 1000 + 500); // More frequent comets
      }
    };

    animateComet();
  }, []);

  return (
    <div
      ref={cometRef}
      className="fixed w-20 h-1 bg-gradient-to-r from-transparent via-space-light to-transparent"
      style={{
        transition: 'left 1s linear, opacity 1s linear',
        pointerEvents: 'none',
      }}
    />
  );
};


const Home: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const controls = useAnimation();
  const router = useRouter();

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <Comet />
      <motion.div
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={containerVariants}
        className="text-center"
      >
        <motion.h1
          variants={itemVariants}
          className="text-6xl font-bold mb-4 text-space-white"
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
            Namaste, Earthling!
          </span>
        </motion.h1>
        <motion.h2
          variants={itemVariants}
          className="text-5xl font-bold mb-8 text-space-light"
        >
          I'm{' '}
          <span className="relative">
            <span className="absolute -inset-1 bg-space-light blur-sm"></span>
            <span className="relative text-space-dark">Sarvesh Atalkar</span>
          </span>
        </motion.h2>
        <motion.p
          variants={itemVariants}
          className="text-xl mb-12 max-w-2xl mx-auto"
        >
          Crafting stellar web experiences with MERN stack, Next.js, Python, and more. 
          Let's explore the digital universe together! 🚀
        </motion.p>
        <motion.div variants={itemVariants}>
          <SpaceButton onClick={() => router.push('/contact')}>
            Contact Me
          </SpaceButton>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Home;