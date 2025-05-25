
import { motion, useScroll, useSpring } from "framer-motion";

const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <>
      {/* Main progress bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 z-50 origin-left"
        style={{ scaleX }}
      />
      
      {/* Circular progress indicator */}
      <motion.div
        className="fixed bottom-8 right-8 w-16 h-16 bg-black/80 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center z-40 cursor-pointer hover:scale-110 transition-transform duration-300"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        <svg className="w-10 h-10 transform -rotate-90" viewBox="0 0 36 36">
          <path
            d="m18,2.0845 a 15.9155,15.9155 0 0,1 0,31.831 a 15.9155,15.9155 0 0,1 0,-31.831"
            fill="none"
            stroke="rgba(255,255,255,0.2)"
            strokeWidth="2"
          />
          <motion.path
            d="m18,2.0845 a 15.9155,15.9155 0 0,1 0,31.831 a 15.9155,15.9155 0 0,1 0,-31.831"
            fill="none"
            stroke="url(#gradient)"
            strokeWidth="2"
            strokeDasharray="100, 100"
            style={{
              strokeDashoffset: useSpring(
                scrollYProgress,
                { stiffness: 100, damping: 30 }
              ).get() * -100 + 100
            }}
          />
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#3b82f6" />
              <stop offset="50%" stopColor="#8b5cf6" />
              <stop offset="100%" stopColor="#ec4899" />
            </linearGradient>
          </defs>
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            className="text-white text-xs font-bold"
            style={{
              opacity: useSpring(scrollYProgress, { stiffness: 100, damping: 30 })
            }}
          >
            {Math.round(scrollYProgress.get() * 100)}%
          </motion.div>
        </div>
      </motion.div>
    </>
  );
};

export default ScrollProgress;
