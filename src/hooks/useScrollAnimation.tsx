import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { useAnimation, AnimationControls } from 'framer-motion';

type ScrollAnimationOptions = {
  threshold?: number;
  triggerOnce?: boolean;
  delay?: number;
};

export const useScrollAnimation = (options: ScrollAnimationOptions = {}): [(node?: Element | null) => void, AnimationControls] => {
  const { 
    threshold = 0.1, 
    triggerOnce = true,
    delay = 0
  } = options;
  
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold,
    triggerOnce,
  });

  useEffect(() => {
    if (inView) {
      setTimeout(() => {
        controls.start('visible');
      }, delay);
    }
  }, [controls, inView, delay]);

  return [ref, controls];
};

// Common animation variants
export const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.6 } }
};

export const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1]
    } 
  }
};

export const fadeInDown = {
  hidden: { opacity: 0, y: -50 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1]
    } 
  }
};

export const fadeInLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: { 
    opacity: 1, 
    x: 0, 
    transition: { 
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1]
    } 
  }
};

export const fadeInRight = {
  hidden: { opacity: 0, x: 50 },
  visible: { 
    opacity: 1, 
    x: 0, 
    transition: { 
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1]
    } 
  }
};

export const scaleUp = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { 
    opacity: 1, 
    scale: 1, 
    transition: { 
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1]
    } 
  }
};

export const staggerChildren = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

export const staggerItem = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1]
    }
  }
}; 