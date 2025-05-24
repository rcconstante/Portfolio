import { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';

interface SmoothScrollProps {
  children: React.ReactNode;
}

const SmoothScroll: React.FC<SmoothScrollProps> = ({ children }) => {
  // Create a ref for the scrollable container
  const scrollRef = useRef<HTMLDivElement>(null);
  
  // Get the current scroll progress
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ['start start', 'end end']
  });
  
  // Create a smooth spring animation for the scroll
  const smoothY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Transform the scroll progress into a negative Y value for the content
  const y = useTransform(smoothY, [0, 1], ['0%', '-100%']);
  
  // Get the height of the content
  const [contentHeight, setContentHeight] = useState(0);
  
  useEffect(() => {
    if (scrollRef.current) {
      // Set the content height
      setContentHeight(scrollRef.current.scrollHeight);
      
      // Set the body height to match the content height
      document.body.style.height = `${scrollRef.current.scrollHeight}px`;
    }
    
    return () => {
      // Reset the body height when unmounting
      document.body.style.height = '';
    };
  }, []);

  return (
    <div ref={scrollRef} style={{ position: 'fixed', width: '100%', height: '100%', overflow: 'hidden' }}>
      <motion.div
        style={{ y }}
        className="w-full"
      >
        {children}
      </motion.div>
    </div>
  );
};

export default SmoothScroll; 