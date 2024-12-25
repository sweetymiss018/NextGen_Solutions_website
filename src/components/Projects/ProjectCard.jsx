import { motion } from "framer-motion";

const ProjectCard = ({ icon, title, description }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.02 }}
      className="bg-white rounded-lg shadow-lg p-6"
    >
      <div className="flex justify-start items-start space-x-4">
        {/* Icon Container */}
        <div className="flex items-start justify-center w-16 h-16 rounded-full text-blue-500 text-3xl">
          {icon}
        </div>
        {/* Title and Description */}
        <div>
          <h3 className="text-xl font-bold">{title}</h3>
          <p className="text-gray-600 mt-1">{description}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
