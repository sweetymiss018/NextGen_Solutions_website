import { motion } from 'framer-motion';
import { useWorkCardAnimation } from '../hooks/useWorkCardAnimation';

const WorkCard = ({ work, index }) => {
  const { containerVariants, imageVariants, contentVariants, featuredImageVariants } = useWorkCardAnimation();

  return (
    <motion.div
      variants={containerVariants}
      initial="initial"
      animate="animate"
      whileHover="hover"
      custom={index}
      className="relative h-[400px] group overflow-hidden rounded-xl"
    >
      {/* Background Image */}
      <motion.div
        variants={imageVariants}
        className="absolute inset-0"
      >
        <img
          src={work.backgroundImage}
          alt={work.title}
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Content Overlay */}
      <motion.div
        variants={contentVariants}
        className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent 
                   flex items-center justify-center"
      >
        <div className="p-8 text-center">
          <span className="text-emerald-400 text-sm font-medium mb-2 block">
            {work.category}
          </span>
          <h3 className="text-3xl font-bold text-white mb-4">{work.title}</h3>
          <p className="text-gray-300 mb-6 max-w-md mx-auto">{work.description}</p>
          
          {/* Featured Image */}
          <motion.div
            variants={featuredImageVariants}
            className="w-32 h-32 mx-auto mb-6 rounded-lg overflow-hidden"
          >
            <img
              src={work.featuredImage}
              alt={`${work.title} featured`}
              className="w-full h-full object-cover"
            />
          </motion.div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-2 bg-emerald-500 text-white rounded-full text-sm font-medium 
                     hover:bg-emerald-600 transition-colors"
          >
            View Project
          </motion.button>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default WorkCard;