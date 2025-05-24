
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

const Index = () => {
  return (
    <div className="min-h-screen bg-black overflow-x-hidden">
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
