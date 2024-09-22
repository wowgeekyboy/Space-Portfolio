import React from 'react';
import Head from 'next/head';
import Navbar from './Navbar';
import Footer from './Footer';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="space-bg min-h-screen flex flex-col">
      <Head>
        <title>Sarvesh Atalkar | Full Stack Developer</title>
        <meta name="description" content="Portfolio of Sarvesh Atalkar, Full Stack Developer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;