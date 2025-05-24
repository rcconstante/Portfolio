import { Facebook, MessageSquare, User } from 'lucide-react';

const Header = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-md border-b border-white/10">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
            <span className="text-black font-bold text-sm">R</span>
          </div>
          <span className="text-white font-bold text-xl">Rich.Dev</span>
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          <a 
            href="#projects" 
            onClick={(e) => { e.preventDefault(); scrollToSection('projects'); }}
            className="text-white hover:text-blue-400 transition-colors"
          >
            Projects
          </a>
          <a 
            href="#about" 
            onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}
            className="text-white/70 hover:text-white transition-colors"
          >
            About
          </a>
          <a 
            href="#skills" 
            onClick={(e) => { e.preventDefault(); scrollToSection('skills'); }}
            className="text-white/70 hover:text-white transition-colors"
          >
            Technologies
          </a>
          <a 
            href="#contact" 
            onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}
            className="text-white/70 hover:text-white transition-colors"
          >
            Contact Me
          </a>
        </nav>
        
        <div className="flex items-center space-x-4">
          <Facebook className="w-5 h-5 text-white/70 hover:text-white cursor-pointer transition-colors" />
          <MessageSquare className="w-5 h-5 text-white/70 hover:text-white cursor-pointer transition-colors" />
          <div className="flex items-center space-x-2">
            <User className="w-5 h-5 text-white/70" />
            <span className="text-white/70 text-sm">19/20</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
