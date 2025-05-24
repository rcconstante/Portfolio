import { motion } from 'framer-motion';
import { useScrollAnimation, staggerChildren, staggerItem } from '@/hooks/useScrollAnimation';
import AnimatedSection from './AnimatedSection';

const Skills = () => {
  const [titleRef, titleControls] = useScrollAnimation();
  const [skillsRef, skillsControls] = useScrollAnimation({ delay: 200 });

  const technologies = [
    {
      name: "Python",
      icon: "/icons/python.svg",
      color: "from-blue-500 to-yellow-500"
    },
    {
      name: "Java",
      icon: "/icons/java.svg",
      color: "from-red-500 to-orange-500"
    },
    {
      name: "JavaScript",
      icon: "/icons/javascript.svg",
      color: "from-yellow-400 to-yellow-600"
    },
    {
      name: "SQL",
      icon: "/icons/sql.svg",
      color: "from-blue-400 to-blue-600"
    },
    {
      name: "HTML",
      icon: "/icons/html.svg",
      color: "from-orange-500 to-red-500"
    },
    {
      name: "CSS",
      icon: "/icons/css.svg",
      color: "from-blue-500 to-blue-700"
    },
    {
      name: "React",
      icon: "/icons/react.svg",
      color: "from-cyan-400 to-blue-500"
    },
    {
      name: "Flask",
      icon: "/icons/flask.svg",
      color: "from-gray-600 to-gray-800"
    },
    {
      name: "Tailwind CSS",
      icon: "/icons/tailwind.svg",
      color: "from-cyan-400 to-blue-500"
    },
    {
      name: "Vite",
      icon: "/icons/vite.svg",
      color: "from-purple-500 to-blue-500"
    },
    {
      name: "Arduino",
      icon: "/icons/arduino.svg",
      color: "from-teal-500 to-cyan-500"
    },
    {
      name: "Machine Learning",
      icon: "/icons/machine-learning.svg",
      color: "from-green-500 to-emerald-600"
    },
    {
      name: "NLP",
      icon: "/icons/nlp.svg",
      color: "from-purple-500 to-indigo-600"
    },
    {
      name: "IoT Systems",
      icon: "/icons/iot.svg",
      color: "from-blue-500 to-indigo-500"
    },
    {
      name: "Computer Vision",
      icon: "/icons/computer-vision.svg",
      color: "from-red-500 to-pink-600"
    },
    {
      name: "Access",
      icon: "/icons/access.svg",
      color: "from-red-600 to-red-800"
    }
  ];

  // Create a placeholder icon component for when the SVG might not be available
  const IconPlaceholder = ({ name, color }) => (
    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center`}>
      <span className="text-white text-xs font-bold">{name.substring(0, 2).toUpperCase()}</span>
    </div>
  );

  // Function to handle image error
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.style.display = 'none';
    const nextElement = e.currentTarget.nextElementSibling;
    if (nextElement) {
      (nextElement as HTMLElement).style.display = 'flex';
    }
  };

  return (
    <section id="skills" className="py-24 bg-black relative overflow-hidden">
      {/* Background elements */}
      <motion.div 
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.div 
          className="absolute top-20 left-20 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"
          animate={{ 
            y: [0, -30, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{ 
            repeat: Infinity, 
            duration: 10,
            ease: "easeInOut" 
          }}
        />
        <motion.div 
          className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"
          animate={{ 
            y: [0, 30, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{ 
            repeat: Infinity, 
            duration: 8,
            ease: "easeInOut",
            delay: 1
          }}
        />
      </motion.div>
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          className="flex items-center justify-between mb-16"
          ref={titleRef}
          initial="hidden"
          animate={titleControls}
          variants={staggerChildren}
        >
          <motion.div variants={staggerItem}>
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">Technologies</h2>
            <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
          </motion.div>
          <motion.div className="flex items-center space-x-2 text-white/50" variants={staggerItem}>
            <span>05</span>
            <div className="w-8 h-0.5 bg-white/30"></div>
            <span>24</span>
          </motion.div>
        </motion.div>
        
        <AnimatedSection 
          className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 backdrop-blur-sm rounded-3xl p-8 border border-white/10"
          delay={300}
          animation="fadeInUp"
        >
          <motion.div 
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8"
            ref={skillsRef}
            initial="hidden"
            animate={skillsControls}
            variants={staggerChildren}
          >
            {technologies.map((tech, index) => (
              <motion.div 
                key={tech.name}
                className="flex flex-col items-center group"
                variants={staggerItem}
                whileHover={{ scale: 1.05 }}
              >
                <motion.div 
                  className={`w-16 h-16 mb-3 rounded-2xl bg-gradient-to-br ${tech.color} flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300`}
                  whileHover={{ 
                    y: -5,
                    boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.5)" 
                  }}
                >
                  <motion.div 
                    className="w-10 h-10 flex items-center justify-center"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    {/* Try to use the SVG, fall back to placeholder */}
                    <img 
                      src={tech.icon} 
                      alt={tech.name} 
                      className="w-8 h-8 object-contain"
                      onError={handleImageError}
                    />
                    <div className="hidden">
                      <IconPlaceholder name={tech.name} color={tech.color} />
                    </div>
                  </motion.div>
                </motion.div>
                <motion.p 
                  className="text-white/80 text-sm font-medium text-center group-hover:text-white transition-colors duration-300"
                  whileHover={{ scale: 1.05 }}
                >
                  {tech.name}
                </motion.p>
              </motion.div>
            ))}
          </motion.div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Skills;
