import { useEffect } from 'react';
import { useAnimation } from 'framer-motion';

export const useAutoAnimation = (interval = 3000) => {
  const controls = useAnimation();

  useEffect(() => {
    const animate = async () => {
      while (true) {
        await controls.start({
          opacity: 1,
          scale: 1.1,
          transition: { duration: 1.5 }
        });
        await controls.start({
          opacity: 0.9,
          scale: 1,
          transition: { duration: 1.5 }
        });
      }
    };

    animate();
  }, [controls]);

  return controls;
};