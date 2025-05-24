
import { useState, useEffect } from 'react';

interface LoadingScreenProps {
  onLoadingComplete: () => void;
}

const LoadingScreen = ({ onLoadingComplete }: LoadingScreenProps) => {
  const [progress, setProgress] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          if (!isPaused) {
            setIsPaused(true);
            // Pause for 1 second at 100%
            setTimeout(() => {
              onLoadingComplete();
            }, 1000);
          }
          return 100;
        }
        // Increment progress over 3 seconds (100 / 30 = ~3.33% per 100ms)
        return prev + 3.33;
      });
    }, 100);

    return () => clearInterval(interval);
  }, [onLoadingComplete, isPaused]);

  return (
    <div className="fixed inset-0 z-50 bg-black flex items-center justify-center overflow-hidden">
      {/* White bar animation from left to right */}
      <div 
        className="absolute top-0 left-0 h-full bg-white transition-all duration-100 ease-out"
        style={{ width: `${progress}%` }}
      />
      
      {/* Loading percentage text */}
      <div className="relative z-10 text-center">
        <div className="text-6xl font-bold text-black mb-4">
          {Math.round(progress)}%
        </div>
        <div className="text-xl text-black/80 font-medium tracking-wider">
          LOADING
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
