import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SpaceButton from '../components/SpaceButton';
import ReCAPTCHA from "react-google-recaptcha";

const Contact: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [captchaValue, setCaptchaValue] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!captchaValue) {
      alert("Please complete the captcha");
      return;
    }
    // Here you would typically send the form data to your server
    console.log({ name, email, message, captchaValue });
    // Reset form fields
    setName('');
    setEmail('');
    setMessage('');
    setCaptchaValue(null);
    alert("Message sent successfully!");
  };

  const formVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: 'spring',
        damping: 10,
        stiffness: 100,
      }
    },
  };

  const inputVariants = {
    focus: { scale: 1.05, boxShadow: "0 0 8px rgb(208, 214, 249)" }
  };

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 flex items-center justify-center bg-space-dark">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={formVariants}
        className="bg-space-dark bg-opacity-50 backdrop-filter backdrop-blur-lg rounded-lg p-8 w-full max-w-md"
      >
        <h1 className="text-4xl font-bold mb-6 text-center text-space-white">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
            Contact the Cosmos
          </span>
        </h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <motion.div whileFocus="focus" variants={inputVariants}>
            <label htmlFor="name" className="block text-sm font-medium text-space-light mb-1">
              Name
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full px-3 py-2 bg-space-dark border border-space-light rounded-md focus:outline-none focus:ring-2 focus:ring-space-light transition-all duration-300"
            />
          </motion.div>
          <motion.div whileFocus="focus" variants={inputVariants}>
            <label htmlFor="email" className="block text-sm font-medium text-space-light mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-3 py-2 bg-space-dark border border-space-light rounded-md focus:outline-none focus:ring-2 focus:ring-space-light transition-all duration-300"
            />
          </motion.div>
          <motion.div whileFocus="focus" variants={inputVariants}>
            <label htmlFor="message" className="block text-sm font-medium text-space-light mb-1">
              Message
            </label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              rows={4}
              className="w-full px-3 py-2 bg-space-dark border border-space-light rounded-md focus:outline-none focus:ring-2 focus:ring-space-light transition-all duration-300"
            ></textarea>
          </motion.div>
          <div className="flex justify-center">
            <ReCAPTCHA
              sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || "6LcHqUsqAAAAAGCGIhHD0pszSRHJ7zJIQeIlKb3E"}
              onChange={(value) => setCaptchaValue(value)}
            />
          </div>
          <SpaceButton type="submit">
            Launch Message
          </SpaceButton>
        </form>
        <div className="mt-8 text-center text-space-light">
          <h3 className="text-2xl font-bold mb-4">Or reach out directly:</h3>
          <div className="flex justify-center space-x-8">
            <div className="flex items-center">
              <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
              <a href="mailto:sarveshatalkar@gmail.com" className="hover:text-space-white transition-colors">sarveshatalkar@gmail.com</a>
            </div>
            <div className="flex items-center">
              <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              <span>+919820693616</span>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;
