// Framer Motion Animation Variants
// ================================

// Fade in from bottom with spring physics
export const fadeInUp = {
  initial: { 
    opacity: 0, 
    y: 40 
  },
  animate: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.6, 
      ease: [0.22, 1, 0.36, 1] 
    }
  }
};

// Simple fade in
export const fadeIn = {
  initial: { 
    opacity: 0 
  },
  animate: { 
    opacity: 1,
    transition: { 
      duration: 0.6 
    }
  }
};

// Parent container for staggered children
export const staggerContainer = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1
    }
  }
};

// Child item for staggered animations
export const staggerItem = {
  initial: { 
    opacity: 0, 
    y: 20 
  },
  animate: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1]
    }
  }
};

// Scale in from slightly smaller
export const scaleIn = {
  initial: { 
    scale: 0.9, 
    opacity: 0 
  },
  animate: { 
    scale: 1, 
    opacity: 1,
    transition: {
      duration: 0.4,
      ease: [0.22, 1, 0.36, 1]
    }
  },
  exit: {
    scale: 0.9,
    opacity: 0,
    transition: {
      duration: 0.3
    }
  }
};

// Slide in from right (for page transitions)
export const slideInRight = {
  initial: { 
    x: 60, 
    opacity: 0 
  },
  animate: { 
    x: 0, 
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1]
    }
  },
  exit: {
    x: -60,
    opacity: 0,
    transition: {
      duration: 0.3
    }
  }
};

// For layout animations on cards
export const cardLayout = {
  layout: true,
  initial: { opacity: 0, scale: 0.9 },
  animate: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.9 },
  transition: {
    opacity: { duration: 0.3 },
    scale: { duration: 0.3 },
    layout: { duration: 0.4, ease: [0.22, 1, 0.36, 1] }
  }
};

// Viewport settings for scroll-triggered animations
export const viewportSettings = {
  once: true,
  amount: 0.2
};

// Page transition wrapper
export const pageTransition = {
  initial: { opacity: 0 },
  animate: { 
    opacity: 1,
    transition: { duration: 0.5 }
  },
  exit: { 
    opacity: 0,
    transition: { duration: 0.3 }
  }
};
