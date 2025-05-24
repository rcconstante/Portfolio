import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Vision from '@/components/Vision';
import ProjectShowcase from '@/components/ProjectShowcase';
import FeaturedWork from '@/components/FeaturedWork';
import About from '@/components/About';
import Profile from '@/components/Profile';
import Skills from '@/components/Skills';
import ContactMe from '@/components/ContactMe';
import Footer from '@/components/Footer';
import LoadingScreen from '@/components/LoadingScreen';
import SmoothScroll from '@/components/SmoothScroll';

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);

  const handleLoadingComplete = () => {
    setIsLoading(false);
    // Small delay for smooth transition
    setTimeout(() => {
      setShowContent(true);
    }, 300);
  };

  // Add a class to the body for consistent background
  useEffect(() => {
    document.body.classList.add('bg-black');
    return () => {
      document.body.classList.remove('bg-black');
    };
  }, []);

  if (isLoading) {
    return <LoadingScreen onLoadingComplete={handleLoadingComplete} />;
  }

  return (
    <motion.div 
      className={`min-h-screen bg-black overflow-x-hidden transition-opacity duration-1000 ${showContent ? 'opacity-100' : 'opacity-0'}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <Header />
      <div className="relative z-10">
        <Hero />
        <Vision />
        <ProjectShowcase />
        <FeaturedWork />
        <About />
        <Profile />
        <Skills />
        <ContactMe />
        <Footer />
      </div>
    </motion.div>
  );
};

export default Index;
