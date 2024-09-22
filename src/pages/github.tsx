import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface Repository {
  id: number;
  name: string;
  description: string;
  html_url: string;
  stargazers_count: number;
  language: string;
  created_at: string;
}

const GitHub: React.FC = () => {
  const [repos, setRepos] = useState<Repository[]>([]);

 useEffect(() => {
  fetch('https://api.github.com/users/wowgeekyboy/repos')
    .then(response => response.json())
    .then(data => {
      const sortedRepos = data.sort((a: Repository, b: Repository) => 
        new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
      );
      setRepos(sortedRepos);
    });
}, []);

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
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <h1 className="text-5xl font-bold text-center mb-12 text-space-white">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-red-600">
          GitHub Constellations
        </span>
      </h1>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
      >
               {repos.map(repo => (
          <motion.div
            key={repo.id}
            variants={itemVariants}
            className="bg-gradient-to-br from-space-dark to-blue-900 rounded-lg p-6 hover:shadow-lg transition duration-300 transform hover:scale-105"
          >
            <h2 className="text-2xl font-semibold mb-2 text-space-white">{repo.name}</h2>
            <p className="text-space-light mb-4">{repo.description}</p>
            <div className="flex justify-between items-center">
              <span className="text-space-light">{repo.language}</span>
              <span className="text-space-light">⭐ {repo.stargazers_count}</span>
            </div>
            <a
              href={repo.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block bg-space-light text-space-dark px-4 py-2 rounded-full text-sm font-semibold hover:bg-space-white transition-colors"
            >
              View Repository
            </a>
          </motion.div>
        ))}

      </motion.div>
    </div>
  );
};

export default GitHub;