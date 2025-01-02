
export const useWorkCardAnimation = () => {
  const containerVariants = {
    initial: { opacity: 0, y: 20 },
    animate: (index) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, delay: index * 0.1 }
    }),
    hover: {
      scale: 1.02,
      transition: { duration: 0.3 }
    }
  };

  const imageVariants = {
    initial: { scale: 1 },
    hover: {
      scale: 1.1,
      filter: 'blur(4px)',
      transition: { duration: 0.4 }
    }
  };

  const contentVariants = {
    initial: { opacity: 0 },
    hover: {
      opacity: 1,
      transition: {
        duration: 0.3,
        staggerChildren: 0.1
      }
    }
  };

  const featuredImageVariants = {
    initial: { scale: 0, opacity: 0 },
    hover: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.4, delay: 0.2 }
    }
  };

  return {
    containerVariants,
    imageVariants,
    contentVariants,
    featuredImageVariants
  };
};
