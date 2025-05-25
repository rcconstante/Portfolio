import { Button } from '@/components/ui/button';
import { ExternalLink, Github } from 'lucide-react';
import { motion } from 'framer-motion';
import { useScrollAnimation, fadeInLeft, fadeInRight, fadeInUp, staggerChildren, staggerItem } from '@/hooks/useScrollAnimation';
import AnimatedSection from './AnimatedSection';

const ProjectShowcase = () => {
  const [titleRef, titleControls] = useScrollAnimation();
  const [descRef, descControls] = useScrollAnimation({ delay: 200 });
  const [techStackRef, techStackControls] = useScrollAnimation({ delay: 300 });
  const [buttonsRef, buttonsControls] = useScrollAnimation({ delay: 400 });
  const [imageRef, imageControls] = useScrollAnimation({ delay: 200 });
  const [bgRef, bgControls] = useScrollAnimation();

  return (
    <section id="projects" className="py-20 bg-black relative overflow-hidden">
      {/* Animated background */}
      <motion.div 
        className="absolute inset-0"
        ref={bgRef}
        initial="hidden"
        animate={bgControls}
        variants={fadeInUp}
      >
        <motion.div 
          className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-3xl"
          animate={{
            y: [0, -20, 0],
            scale: [1, 1.05, 1],
          }}
          transition={{
            repeat: Infinity,
            duration: 8,
            ease: "easeInOut"
          }}
        ></motion.div>
      </motion.div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <motion.div
              ref={titleRef}
              initial="hidden"
              animate={titleControls}
              variants={fadeInLeft}
            >
              <div className="flex items-center space-x-2 text-blue-400 text-sm font-semibold mb-4">
                <div className="w-8 h-0.5 bg-blue-400"></div>
                <span>FEATURED PROJECT</span>
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
                Automata Visualizer
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                  Web Application
                </span>
              </h2>
            </motion.div>
            
            <AnimatedSection delay={200} animation="fadeInUp">
              <p className="text-white/70 text-lg leading-relaxed">
              A dynamic web app designed to visualize Deterministic Finite Automata (DFA), 
              Context-Free Grammars (CFG), and Pushdown Automata (PDA), making the learning 
              and exploration of automata theory interactive and intuitive.
              </p>
            </AnimatedSection>
            
            <motion.div 
              className="flex flex-wrap gap-3"
              ref={techStackRef}
              initial="hidden"
              animate={techStackControls}
              variants={staggerChildren}
            >
              {['React', 'Vite', 'Tailwind', 'JavaScript', 'Graphviz'].map((tech, index) => (
                <motion.span 
                  key={tech} 
                  className="px-3 py-1 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white/80 text-sm hover:bg-white/20 transition-all duration-300"
                  variants={staggerItem}
                >
                  {tech}
                </motion.span>
              ))}
            </motion.div>
            
            <motion.div 
              className="flex flex-wrap gap-4 pt-4"
              ref={buttonsRef}
              initial="hidden"
              animate={buttonsControls}
              variants={fadeInUp}
            >
              <a href="https://automatavisualizer.netlify.app" target="_blank" rel="noopener noreferrer">
                <Button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-6 py-3 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Live Demo
                </Button>
              </a>
              <a href="https://github.com/fame2332/automata-tailwind" target="_blank" rel="noopener noreferrer">
                <Button className="border-2 border-white/50 bg-white/10 text-white hover:bg-white/20 px-6 py-3 rounded-full backdrop-blur-sm transition-all duration-300 hover:scale-105">
                  <Github className="w-4 h-4 mr-2" />
                  Source Code
                </Button>
              </a>
            </motion.div>
          </div>
          
          <motion.div 
            className="flex justify-center"
            ref={imageRef}
            initial="hidden"
            animate={imageControls}
            variants={fadeInRight}
          >
            <div className="relative group">
              <motion.div 
                className="w-full max-w-md aspect-[4/3] bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-2xl p-1"
                animate={{ boxShadow: ["0px 0px 0px rgba(80, 70, 230, 0.5)", "0px 0px 30px rgba(80, 70, 230, 0.8)", "0px 0px 0px rgba(80, 70, 230, 0.5)"] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <div className="w-full h-full bg-gray-900 rounded-2xl overflow-hidden">
                  <img 
                    src="/images/Automata-removebg-preview.png"
                    alt="Project showcase"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
              </motion.div>
              
              {/* Floating tech icons */}
              <motion.div 
                className="absolute -top-6 -right-6 w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center shadow-lg"
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              >
                <span className="text-white text-xs font-bold">React</span>
              </motion.div>
              <motion.div 
                className="absolute -bottom-6 -left-6 w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center shadow-lg"
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut", delay: 1 }}
              >
                <span className="text-white text-xs font-bold">Tailwind</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProjectShowcase;
