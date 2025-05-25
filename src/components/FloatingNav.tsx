
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Home, User, Briefcase, Code, Mail, Menu, X } from 'lucide-react';

const FloatingNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navItems = [
    { id: 'home', label: 'Home', icon: Home, href: '#home' },
    { id: 'about', label: 'About', icon: User, href: '#about' },
    { id: 'projects', label: 'Projects', icon: Briefcase, href: '#projects' },
    { id: 'skills', label: 'Skills', icon: Code, href: '#skills' },
    { id: 'contact', label: 'Contact', icon: Mail, href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => item.id);
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const element = document.getElementById(sections[i]);
        if (element && element.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <div className="fixed left-8 top-1/2 transform -translate-y-1/2 z-40">
      {/* Toggle Button */}
      <motion.button
        className="w-12 h-12 bg-black/80 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/10 transition-colors duration-300"
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <X className="w-5 h-5" />
            </motion.div>
          ) : (
            <motion.div
              key="menu"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <Menu className="w-5 h-5" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>

      {/* Navigation Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="absolute left-16 top-0 space-y-3"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            {navItems.map((item, index) => {
              const Icon = item.icon;
              const isActive = activeSection === item.id;
              
              return (
                <motion.button
                  key={item.id}
                  className={`group flex items-center space-x-3 px-4 py-3 rounded-full backdrop-blur-sm border transition-all duration-300 ${
                    isActive
                      ? 'bg-gradient-to-r from-blue-500/20 to-purple-500/20 border-blue-500/50 text-white'
                      : 'bg-black/60 border-white/20 text-white/70 hover:bg-white/10 hover:text-white'
                  }`}
                  onClick={() => handleNavClick(item.href)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Icon className="w-4 h-4" />
                  <span className="text-sm font-medium whitespace-nowrap">
                    {item.label}
                  </span>
                  {isActive && (
                    <motion.div
                      className="absolute left-0 top-1/2 transform -translate-y-1/2 w-1 h-6 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full"
                      layoutId="activeIndicator"
                    />
                  )}
                </motion.button>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default FloatingNav;
