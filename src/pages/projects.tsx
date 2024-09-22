import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const projects = [
  {
    title: 'NextGen E-commerce Platform',
    description: 'High-performance e-commerce platform using Next.js and Redux with real-time inventory updates and AI-powered recommendations.',
    tech: ['Next.js', 'Redux', 'Node.js', 'MongoDB'],
  },
  {
    title: 'Collaborative Task Management System',
    description: 'Real-time collaborative task management system using MERN stack, featuring live updates, chat functionality, and file sharing.',
    tech: ['MERN Stack', 'Socket.io', 'JWT'],
  },
  {
    title: 'Smart Content Categorization Tool',
    description: 'Content categorization tool using Python and Django with basic machine learning models for text classification.',
    tech: ['Python', 'Django', 'scikit-learn', 'PostgreSQL'],
  },
];

const Projects: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <h1 className="text-5xl font-bold text-center mb-12 text-space-white">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-green-600">
          Cosmic Creations
        </span>
      </h1>
      <motion.div
        ref={ref}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        variants={containerVariants}
        className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
      >
        {projects.map((project, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="bg-gradient-to-br from-space-dark to-purple-900 rounded-lg p-6 hover:shadow-lg transition duration-300 transform hover:scale-105"
          >
            <h2 className="text-2xl font-semibold mb-4 text-space-white">{project.title}</h2>
            <p className="text-space-light mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.map((tech, techIndex) => (
                <span
                  key={techIndex}
                  className="bg-space-light text-space-dark px-2 py-1 rounded-full text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Projects;