import { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

const CountUp = ({ end, duration = 2 }) => {
  const [count, setCount] = useState(0);
  const [ref, inView] = useInView({ triggerOnce: true });

  useEffect(() => {
    if (inView) {
      let startTime;
      const animateCount = (timestamp) => {
        if (!startTime) startTime = timestamp;
        const progress = timestamp - startTime;
        const percentage = Math.min(progress / (duration * 1000), 1);
        
        setCount(Math.floor(end * percentage));
        
        if (percentage < 1) {
          requestAnimationFrame(animateCount);
        }
      };
      
      requestAnimationFrame(animateCount);
    }
  }, [inView, end, duration]);

  return <span ref={ref}>{count}</span>;
};

export default CountUp;