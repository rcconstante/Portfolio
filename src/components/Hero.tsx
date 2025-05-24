import { ArrowDown } from 'lucide-react';
import { motion } from 'framer-motion';
import { useScrollAnimation, fadeIn, fadeInUp, fadeInLeft, fadeInRight } from '@/hooks/useScrollAnimation';

const Hero = () => {
  const [headingRef, headingControls] = useScrollAnimation();
  const [subHeadingRef, subHeadingControls] = useScrollAnimation({ delay: 200 });
  const [scrollIndicatorRef, scrollIndicatorControls] = useScrollAnimation({ delay: 1000 });

  return (
    <section id="home" className="min-h-screen relative overflow-hidden flex items-center">
      {/* Spline 3D Background */}
      <motion.div 
        className="absolute inset-0 z-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <spline-viewer 
          url="https://prod.spline.design/WxYhIytZcUFVj6Qi/scene.splinecode" 
          className="w-full h-full"
          style={{ filter: 'none' }}
        />
        <motion.div 
          className="absolute inset-0 bg-black/40"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
        ></motion.div>
      </motion.div>
      
      <div className="container mx-auto px-6 py-20 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        <div className="space-y-8">
          {/* Name and Title */}
          <motion.div 
            className="space-y-2"
            ref={subHeadingRef}
            initial="hidden"
            animate={subHeadingControls}
            variants={fadeInUp}
          >
            <h2 className="text-xl font-light text-white/80 tracking-wide">Richmond Constante</h2>
            <p className="text-sm text-white/60 font-light tracking-wider">Fullstack | ML | Comp Vision</p>
          </motion.div>

          {/* Main Heading */}
          <motion.h1 
            className="text-5xl lg:text-6xl xl:text-7xl font-light text-white leading-tight"
            ref={headingRef}
            initial="hidden"
            animate={headingControls}
            variants={fadeInLeft}
          >
            I am a{' '}
            <span className="font-medium italic">Developer</span>{' '}
            specialising<br />
            in crafting digital<br />
            <span className="font-medium italic">experiences</span>.
          </motion.h1>
        </div>
        
        {/* Right side - 3D Element placeholder */}
        <motion.div 
          className="flex justify-center lg:justify-end"
          initial="hidden"
          animate="visible"
          variants={fadeInRight}
        >
          <div className="relative">
            {/* This space is for the 3D spline element that's in the background */}
          </div>
        </motion.div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        ref={scrollIndicatorRef}
        initial="hidden"
        animate={scrollIndicatorControls}
        variants={fadeIn}
        whileInView={{ y: [0, 10, 0] }}
        transition={{ 
          y: { 
            repeat: Infinity, 
            duration: 1.5,
            ease: "easeInOut" 
          }
        }}
      >
        <ArrowDown className="w-5 h-5 text-white/40" />
      </motion.div>
    </section>
  );
};

export default Hero;
