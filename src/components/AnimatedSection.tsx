import { motion } from 'framer-motion';
import { useScrollAnimation, fadeInUp } from '@/hooks/useScrollAnimation';
import { ReactNode } from 'react';

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  animation?: 'fadeInUp' | 'fadeInDown' | 'fadeInLeft' | 'fadeInRight' | 'scaleUp' | 'fadeIn';
}

const AnimatedSection: React.FC<AnimatedSectionProps> = ({
  children,
  className = '',
  delay = 0,
  animation = 'fadeInUp'
}) => {
  const [ref, controls] = useScrollAnimation({ delay });
  
  // Define animation variants
  const variants = {
    fadeInUp: {
      hidden: { opacity: 0, y: 50 },
      visible: { 
        opacity: 1, 
        y: 0, 
        transition: { 
          duration: 0.6,
          ease: [0.22, 1, 0.36, 1]
        } 
      }
    },
    fadeInDown: {
      hidden: { opacity: 0, y: -50 },
      visible: { 
        opacity: 1, 
        y: 0, 
        transition: { 
          duration: 0.6,
          ease: [0.22, 1, 0.36, 1]
        } 
      }
    },
    fadeInLeft: {
      hidden: { opacity: 0, x: -50 },
      visible: { 
        opacity: 1, 
        x: 0, 
        transition: { 
          duration: 0.6,
          ease: [0.22, 1, 0.36, 1]
        } 
      }
    },
    fadeInRight: {
      hidden: { opacity: 0, x: 50 },
      visible: { 
        opacity: 1, 
        x: 0, 
        transition: { 
          duration: 0.6,
          ease: [0.22, 1, 0.36, 1]
        } 
      }
    },
    scaleUp: {
      hidden: { opacity: 0, scale: 0.8 },
      visible: { 
        opacity: 1, 
        scale: 1, 
        transition: { 
          duration: 0.6,
          ease: [0.22, 1, 0.36, 1]
        } 
      }
    },
    fadeIn: {
      hidden: { opacity: 0 },
      visible: { 
        opacity: 1, 
        transition: { 
          duration: 0.6 
        } 
      }
    }
  };

  return (
    <motion.div
      className={className}
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={variants[animation]}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedSection; 