import { motion } from 'framer-motion';


const ProjectCard = ({ project }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover="hover"
      className="relative bg-white rounded-lg overflow-hidden shadow-lg cursor-pointer"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        {/* Main Background Image */}
        <motion.div
          variants={{
            initial: { scale: 1, filter: 'blur(0px)' },
            hover: { scale: 1.1, filter: 'blur(4px)' }
          }}
          transition={{ duration: 0.4 }}
          className="w-full h-full"
        >
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Overlay Content */}
        <motion.div 
          variants={{
            initial: { opacity: 0, clipPath: 'circle(0% at 50% 50%)' },
            hover: { 
              opacity: 1, 
              clipPath: 'circle(100% at 50% 50%)',
              transition: { duration: 0.5, ease: "easeOut" }
            }
          }}
          className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/90 flex items-center justify-center"
        >
          <div className="p-8 text-center">
            {/* Featured Image */}
            <motion.div
              variants={{
                initial: { scale: 0, opacity: 0 },
                hover: { 
                  scale: 1, 
                  opacity: 1,
                  transition: { duration: 0.4, delay: 0.2 }
                }
              }}
              className="w-32 h-32 mx-auto mb-6 rounded-lg overflow-hidden"
            >
              <img
                src={project.featuredImage || project.image}
                alt={`${project.title} featured`}
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Text Content */}
            <motion.div
              variants={{
                initial: { y: 20, opacity: 0 },
                hover: { 
                  y: 0, 
                  opacity: 1,
                  transition: { duration: 0.4, delay: 0.3 }
                }
              }}
              className="space-y-4"
            >
              <h3 className="text-3xl font-bold text-white">{project.title}</h3>
              <p className="text-gray-200 text-md leading-relaxed">
                {project.description}
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-2 bg-white text-black rounded-full text-sm font-medium 
                         hover:bg-opacity-90 transition-colors inline-block"
              >
                Learn More
              </motion.button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;