import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ServicesSection from './components/ServicesSection';
import WorkByServiceOffering from './components/WorkByServiceOffering';
import ModernSolution from './components/ModernSolution';
import Testimonials from './components/Testimonials';
import FeaturesList from './components/FeaturesList';
import StartupNews from './components/StartupNews';
import ContactSection from './components/ContactSection';
import CyberDolphinsLanding from './components/CyberDolphinsLanding';

function App() {
  return (
    <div className="min-h-screen bg-blue-900 text-white">
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <WorkByServiceOffering />
      <ModernSolution />
      <Testimonials />
      <FeaturesList />
      <StartupNews />
      <ContactSection />
      <CyberDolphinsLanding />
    </div>
  );
}

export default App;