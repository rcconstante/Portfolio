import { Github, Twitter, Instagram, Linkedin, Facebook } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  return (
    <footer className="py-16 bg-black border-t border-white/10">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-white">R.constante</h3>
            <p className="text-white/60">
              Creating innovative digital experiences
              <br />
              with passion and precision.
            </p>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Quick Links</h4>
            <div className="grid grid-cols-2 gap-2">
              {[ 'Projects', 'Skills', 'About', 'Contact'].map((link) => (
                <a 
                  key={link} 
                  href={`#${link.toLowerCase()}`} 
                  className="text-white/60 hover:text-white transition-colors duration-300"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>
          
<div className="flex flex-col space-y-4">
  <h4 className="text-lg font-semibold text-white">Connect</h4>
  <div className="flex items-center space-x-4">
    <a
      href="https://github.com/fame2332" // Replace with your actual GitHub
      target="_blank"
      rel="noopener noreferrer"
    >
      <Button variant="ghost" size="icon" className="rounded-full bg-white/10 hover:bg-white/20 text-white">
        <Github className="w-5 h-5" />
      </Button>
    </a>
    <a
      href="https://www.linkedin.com/in/richmond-constante" // Replace with your LinkedIn
      target="_blank"
      rel="noopener noreferrer"
    >
      <Button variant="ghost" size="icon" className="rounded-full bg-white/10 hover:bg-white/20 text-white">
        <Linkedin className="w-5 h-5" />
      </Button>
    </a>
    <a
      href="https://facebook.com/watashiwarich" // Replace with your Twitter
      target="_blank"
      rel="noopener noreferrer"
    >
      <Button variant="ghost" size="icon" className="rounded-full bg-white/10 hover:bg-white/20 text-white">
        <Facebook className="w-5 h-5" />
      </Button>
    </a>
    <a
      href="https://instagram.com/rcconstante" // Replace with your Instagram
      target="_blank"
      rel="noopener noreferrer"
    >
      <Button variant="ghost" size="icon" className="rounded-full bg-white/10 hover:bg-white/20 text-white">
        <Instagram className="w-5 h-5" />
      </Button>
    </a>
  </div>
            <Button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white rounded-full w-full mt-4">
              Contact Me
            </Button>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8">
          <p className="text-white/40 text-center">
            © 2025 R.constante. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
