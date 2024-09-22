import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Home: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.2,
        duration: 0.6,
      },
    },
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <motion.div
        ref={ref}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        variants={containerVariants}
        className="text-center"
      >
        <h1 className="text-6xl font-bold mb-4 text-space-white">
          Namaste 🙏 I'm Sarvesh Atalkar
        </h1>
        <h2 className="text-3xl mb-8 text-space-light">Full Stack Developer</h2>
        <p className="text-xl mb-12 max-w-2xl mx-auto">
          Crafting stellar web experiences with MERN stack, Next.js, Python, and more. 
          Let's explore the digital universe together! 🚀
        </p>
        <motion.a
          href="/contact"
          className="bg-space-light text-space-dark px-8 py-3 rounded-full text-lg font-semibold hover:bg-space-white transition duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Contact Me
        </motion.a>
      </motion.div>
    </div>
  );
};

export default Home;