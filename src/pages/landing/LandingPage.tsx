import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Mission from './components/Mission';
import Services from './components/Services';
import Warehouses from './components/Warehouses';
import Contact from './components/Contact';
import Footer from './components/Footer';

const LandingPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <Mission />
        <Services />
        <Warehouses />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default LandingPage; 