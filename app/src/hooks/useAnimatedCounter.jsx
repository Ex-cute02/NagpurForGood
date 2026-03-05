import { useEffect, useRef, useState } from 'react';
import { useInView, useMotionValue, useSpring } from 'framer-motion';

/**
 * Custom hook that animates a number counting up when it comes into view.
 * 
 * @param {string} targetValue - The target value string (e.g., "127,600+", "25,000+")
 * @param {number} duration - Animation duration in seconds
 * @returns {{ ref: React.RefObject, displayValue: string }}
 */
export function useAnimatedCounter(targetValue, duration = 2) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  
  // Extract the numeric value from the string
  const numericString = targetValue.replace(/[^0-9.]/g, '');
  const targetNumber = parseFloat(numericString) || 0;
  
  // Get the suffix (e.g., "+", "K+", etc.)
  const suffix = targetValue.replace(/[0-9,.\s]/g, '');
  
  // Check if original had commas
  const hasCommas = targetValue.includes(',');
  
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    duration: duration * 1000,
    bounce: 0
  });
  
  const [displayValue, setDisplayValue] = useState('0');
  
  useEffect(() => {
    if (isInView) {
      motionValue.set(targetNumber);
    }
  }, [isInView, targetNumber, motionValue]);
  
  useEffect(() => {
    const unsubscribe = springValue.on('change', (latest) => {
      const rounded = Math.round(latest);
      if (hasCommas) {
        setDisplayValue(rounded.toLocaleString() + suffix);
      } else {
        setDisplayValue(rounded + suffix);
      }
    });
    
    return () => unsubscribe();
  }, [springValue, hasCommas, suffix]);
  
  return { ref, displayValue };
}

/**
 * A simpler counter component that can be used inline
 */
export function AnimatedCounter({ value, className = '' }) {
  const { ref, displayValue } = useAnimatedCounter(value);
  
  return (
    <span ref={ref} className={className}>
      {displayValue}
    </span>
  );
}

export default useAnimatedCounter;
