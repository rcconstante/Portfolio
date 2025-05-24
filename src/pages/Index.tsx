
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import FeaturedWork from '@/components/FeaturedWork';
import ProjectShowcase from '@/components/ProjectShowcase';
import Skills from '@/components/Skills';
import Experience from '@/components/Experience';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-black overflow-x-hidden">
      <Header />
      <Hero />
      <FeaturedWork />
      <ProjectShowcase />
      <Skills />
      <Experience />
      <Footer />
    </div>
  );
};

export default Index;
