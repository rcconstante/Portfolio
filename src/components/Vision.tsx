import { motion } from 'framer-motion';
import { useScrollAnimation, fadeInUp, scaleUp } from '@/hooks/useScrollAnimation';

const Vision = () => {
  const [headingRef, headingControls] = useScrollAnimation();
  const [dividerRef, dividerControls] = useScrollAnimation({ delay: 300 });
  const [bgElement1Ref, bgElement1Controls] = useScrollAnimation();
  const [bgElement2Ref, bgElement2Controls] = useScrollAnimation({ delay: 200 });

  return (
    <section className="py-32 bg-gradient-to-b from-black via-gray-900 to-black relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <motion.div 
          ref={bgElement1Ref}
          initial="hidden"
          animate={bgElement1Controls}
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: { 
              opacity: 1, 
              scale: 1, 
              y: [0, -20, 0],
              transition: { 
                duration: 1.2,
                ease: "easeOut",
                y: {
                  repeat: Infinity,
                  duration: 8,
                  ease: "easeInOut"
                }
              } 
            }
          }}
          className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"
        ></motion.div>
        <motion.div 
          ref={bgElement2Ref}
          initial="hidden"
          animate={bgElement2Controls}
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: { 
              opacity: 1, 
              scale: 1, 
              y: [0, 20, 0],
              transition: { 
                duration: 1.2,
                ease: "easeOut",
                delay: 0.3,
                y: {
                  repeat: Infinity,
                  duration: 10,
                  ease: "easeInOut",
                  delay: 1
                }
              } 
            }
          }}
          className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
        ></motion.div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex justify-center">
          <div className="max-w-5xl text-center space-y-8">
            <motion.div
              ref={headingRef}
              initial="hidden"
              animate={headingControls}
              variants={fadeInUp}
            >
              <h2 className="text-5xl lg:text-7xl font-bold text-white leading-tight">
                I pair strong{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
                  visual design
                </span>{' '}
                skills with a focus on{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400">
                  user-centered design
                </span>
                .
              </h2>
            </motion.div>
            
            <motion.div 
              className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"
              ref={dividerRef}
              initial="hidden"
              animate={dividerControls}
              variants={scaleUp}
            ></motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Vision;
