import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Contact: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log({ name, email, message });
    // Reset form fields
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-space-dark bg-opacity-50 backdrop-filter backdrop-blur-lg rounded-lg p-8 w-full max-w-md"
      >
        <h1 className="text-3xl font-bold mb-6 text-center text-space-white">Contact Me</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-space-light mb-1">
              Name
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full px-3 py-2 bg-space-dark border border-space-light rounded-md focus:outline-none focus:ring-2 focus:ring-space-light"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-space-light mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-3 py-2 bg-space-dark border border-space-light rounded-md focus:outline-none focus:ring-2 focus:ring-space-light"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-space-light mb-1">
              Message
            </label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              rows={4}
              className="w-full px-3 py-2 bg-space-dark border border-space-light rounded-md focus:outline-none focus:ring-2 focus:ring-space-light"
            ></textarea>
          </div>
          <motion.button
            type="submit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full bg-space-light text-space-dark py-2 px-4 rounded-md font-semibold hover:bg-space-white transition duration-300"
          >
            Send Message
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
};

export default Contact;