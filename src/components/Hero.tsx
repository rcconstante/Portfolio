
import { ArrowDown } from 'lucide-react';
import { motion } from 'framer-motion';
import { useScrollAnimation, fadeIn, fadeInUp, fadeInLeft, fadeInRight } from '@/hooks/useScrollAnimation';

const Hero = () => {
  const [headingRef, headingControls] = useScrollAnimation();
  const [subHeadingRef, subHeadingControls] = useScrollAnimation({ delay: 200 });
  const [scrollIndicatorRef, scrollIndicatorControls] = useScrollAnimation({ delay: 1000 });

  return (
    <section id="home" className="min-h-screen relative overflow-hidden flex items-center">
      {/* Enhanced Spline 3D Background */}
      <motion.div 
        className="absolute inset-0 z-0"
        initial={{ opacity: 0, scale: 1.1 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
      >
        <spline-viewer 
          url="https://prod.spline.design/WxYhIytZcUFVj6Qi/scene.splinecode" 
          className="w-full h-full"
          style={{ filter: 'brightness(0.8) contrast(1.2)' }}
        />
        <motion.div 
          className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, delay: 0.5 }}
        />
      </motion.div>
      
      <div className="container mx-auto px-6 py-20 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        <div className="space-y-8">
          {/* Enhanced Name and Title */}
          <motion.div 
            className="space-y-3"
            ref={subHeadingRef}
            initial="hidden"
            animate={subHeadingControls}
            variants={fadeInUp}
          >
            <motion.h2 
              className="text-2xl lg:text-3xl font-light text-white/90 tracking-wide"
              animate={{
                opacity: [0.7, 1, 0.7],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              Richmond Constante
            </motion.h2>
            <div className="flex items-center space-x-4">
              <motion.div 
                className="w-12 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500"
                initial={{ width: 0 }}
                animate={{ width: 48 }}
                transition={{ duration: 1, delay: 1 }}
              />
              <p className="text-sm text-white/70 font-light tracking-wider uppercase">
                Fullstack | ML | Computer Vision
              </p>
            </div>
          </motion.div>

          {/* Enhanced Main Heading */}
          <motion.h1 
            className="text-5xl lg:text-6xl xl:text-7xl font-light text-white leading-tight"
            ref={headingRef}
            initial="hidden"
            animate={headingControls}
            variants={fadeInLeft}
          >
            I am a{' '}
            <motion.span 
              className="font-medium italic bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
              animate={{
                backgroundPosition: ['0%', '100%', '0%'],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              Developer
            </motion.span>{' '}
            specialising<br />
            in crafting digital<br />
            <motion.span 
              className="font-medium italic bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"
              animate={{
                backgroundPosition: ['0%', '100%', '0%'],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 2
              }}
            >
              experiences
            </motion.span>
            .
          </motion.h1>

          {/* Call to action buttons */}
          <motion.div 
            className="flex flex-wrap gap-4 pt-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.5 }}
          >
            <motion.a
              href="#projects"
              className="group px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full text-white font-medium hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 flex items-center space-x-2"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              <span>View My Work</span>
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                →
              </motion.div>
            </motion.a>
            
            <motion.a
              href="#contact"
              className="px-8 py-4 border-2 border-white/30 rounded-full text-white font-medium hover:bg-white/10 backdrop-blur-sm transition-all duration-300"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Let's Connect
            </motion.a>
          </motion.div>
        </div>
        
        {/* Enhanced Right side with floating elements */}
        <motion.div 
          className="flex justify-center lg:justify-end relative"
          initial="hidden"
          animate="visible"
          variants={fadeInRight}
        >
          <div className="relative">
            {/* Floating tech badges */}
            <motion.div 
              className="absolute -top-8 -right-8 px-4 py-2 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 backdrop-blur-sm border border-blue-500/30 rounded-full text-white text-sm font-medium"
              animate={{ 
                y: [0, -10, 0],
                rotate: [0, 5, 0]
              }}
              transition={{ 
                duration: 4, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
            >
              React Expert
            </motion.div>
            
            <motion.div 
              className="absolute -bottom-8 -left-8 px-4 py-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-sm border border-purple-500/30 rounded-full text-white text-sm font-medium"
              animate={{ 
                y: [0, 10, 0],
                rotate: [0, -5, 0]
              }}
              transition={{ 
                duration: 5, 
                repeat: Infinity, 
                ease: "easeInOut",
                delay: 1
              }}
            >
              ML Engineer
            </motion.div>
          </div>
        </motion.div>
      </div>
      
      {/* Enhanced scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center space-y-2"
        ref={scrollIndicatorRef}
        initial="hidden"
        animate={scrollIndicatorControls}
        variants={fadeIn}
      >
        <span className="text-white/40 text-xs uppercase tracking-wider">Scroll</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ 
            repeat: Infinity, 
            duration: 1.5,
            ease: "easeInOut" 
          }}
        >
          <ArrowDown className="w-5 h-5 text-white/40" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
