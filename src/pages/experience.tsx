import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const experiences = [
  {
    company: 'upGrad',
    position: 'Technical Product Manager',
    duration: 'September 2023 - April 2024',
    location: 'Bengaluru, India',
    achievements: [
      'Spearheaded development of OdinSculpt platform using Next.js, React.js, and Node.js, reducing deployment time by 40%.',
      'Implemented Server-Side Rendering (SSR) and code splitting, improving SEO performance by 30% and reducing initial page load times by 45%.',
      'Designed real-time collaboration feature using WebSockets, enhancing student-instructor interactions and reducing response times by 60%.',
      'Integrated CleverTap analytics, improving user retention by 25%.',
    ],
  },
  {
    company: 'Chesa',
    position: 'Full Stack Developer',
    duration: 'July 2021 - September 2023',
    location: 'Bengaluru, India',
    achievements: [
      'Engineered healthcare communication system using React.js, Redux, AWS, Node.js, and Express.',
      'Developed distribution platform using HTML5, CSS3, Bootstrap, Tailwind, JavaScript, jQuery, MySQL, PHP.',
      'Implemented JWT for secure authentication and Redux for global state management.',
      'Led development of Chesa Academy and corporate websites, implementing SEO best practices, resulting in 50% increase in organic traffic and 30% boost in lead generation.',
    ],
  },
];

const Experience: React.FC = () => {
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
        type: 'spring',
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <h1 className="text-5xl font-bold text-center mb-12 text-space-white">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-green-600">
          Interstellar Journey
        </span>
      </h1>
      <motion.div
        ref={ref}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        variants={containerVariants}
        className="space-y-12"
      >
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="bg-gradient-to-br from-space-dark to-purple-900 rounded-lg p-6 hover:shadow-lg transition duration-300 transform hover:scale-105"
          >
            <h2 className="text-2xl font-semibold mb-2 text-space-white">{exp.position}</h2>
            <h3 className="text-xl mb-2 text-space-light">{exp.company}</h3>
            <p className="text-space-light mb-4">{exp.duration} | {exp.location}</p>
            <ul className="list-disc list-inside space-y-2">
              {exp.achievements.map((achievement, achIndex) => (
                <li key={achIndex} className="text-space-light">{achievement}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Experience;