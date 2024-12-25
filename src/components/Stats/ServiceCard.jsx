import { motion } from 'framer-motion';

const ServiceCard = ({ icon: Icon, title, description }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="p-6 bg-white rounded-lg shadow-lg"
    >
      <div className="flex items-center mb-4">
        <Icon className="text-3xl text-purple-600 mr-3" />
        <h3 className="text-xl font-bold">{title}</h3>
      </div>
      <p className="text-gray-600">{description}</p>
    </motion.div>
  );
};

export default ServiceCard;