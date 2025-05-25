
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface LoadingScreenProps {
  onLoadingComplete: () => void;
}

const LoadingScreen = ({ onLoadingComplete }: LoadingScreenProps) => {
  const [progress, setProgress] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [showExit, setShowExit] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          if (!isPaused) {
            setIsPaused(true);
            // Pause for 1 second at 100%
            setTimeout(() => {
              setShowExit(true);
              setTimeout(() => {
                onLoadingComplete();
              }, 800);
            }, 1000);
          }
          return 100;
        }
        // Increment progress over 3 seconds
        return prev + 3.33;
      });
    }, 100);

    return () => clearInterval(interval);
  }, [onLoadingComplete, isPaused]);

  return (
    <AnimatePresence>
      <motion.div 
        className="fixed inset-0 z-50 bg-black flex items-center justify-center overflow-hidden"
        exit={{ 
          x: "100%",
          transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] }
        }}
      >
        {/* Animated background pattern */}
        <div className="absolute inset-0">
          {Array.from({ length: 20 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-px h-full bg-white/10"
              style={{ left: `${i * 5}%` }}
              animate={{
                opacity: [0, 1, 0],
                scaleY: [0, 1, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.1,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>

        {/* White bar animation from left to right */}
        <motion.div 
          className="absolute top-0 left-0 h-full bg-white"
          style={{ width: `${progress}%` }}
          transition={{ duration: 0.1, ease: "easeOut" }}
        />
        
        {/* Loading content */}
        <div className="relative z-10 text-center">
          <motion.div 
            className="text-6xl lg:text-8xl font-bold text-black mb-6"
            animate={{
              scale: progress === 100 ? [1, 1.1, 1] : 1,
            }}
            transition={{ duration: 0.5 }}
          >
            {Math.round(progress)}%
          </motion.div>
          
          <motion.div 
            className="text-xl lg:text-2xl text-black/80 font-medium tracking-wider mb-8"
            animate={{
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            LOADING
          </motion.div>

          {/* Progress dots */}
          <div className="flex justify-center space-x-2">
            {Array.from({ length: 5 }).map((_, i) => (
              <motion.div
                key={i}
                className="w-2 h-2 bg-black/60 rounded-full"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.3, 1, 0.3],
                }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  delay: i * 0.2,
                  ease: "easeInOut"
                }}
              />
            ))}
          </div>
        </div>

        {/* Loading bar indicator */}
        <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 w-64">
          <div className="h-1 bg-black/20 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-black rounded-full"
              style={{ width: `${progress}%` }}
              transition={{ duration: 0.1, ease: "easeOut" }}
            />
          </div>
          <div className="mt-2 text-center">
            <span className="text-black/60 text-sm font-medium">
              Initializing Portfolio Experience
            </span>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default LoadingScreen;
