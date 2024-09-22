import React from 'react';
import Head from 'next/head';
import Navbar from './Navbar';
import SpaceFooter from './SpaceFooter';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Head>
        <title>Sarvesh Atalkar | Full Stack Developer</title>
        <meta name="description" content="Portfolio of Sarvesh Atalkar, Full Stack Developer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main className="flex-grow">{children}</main>
      <SpaceFooter />
    </div>
  );
};

export default Layout;