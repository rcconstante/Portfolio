
import { useState } from 'react';
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

  if (isLoading) {
    return <LoadingScreen onLoadingComplete={handleLoadingComplete} />;
  }

  return (
    <div className={`min-h-screen bg-black overflow-x-hidden transition-opacity duration-1000 ${showContent ? 'opacity-100' : 'opacity-0'}`}>
      <Header />
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
  );
};

export default Index;
