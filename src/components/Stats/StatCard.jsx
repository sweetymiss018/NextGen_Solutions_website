import { motion } from 'framer-motion';
import CountUp from './CountUp';

const StatCard = ({ icon: Icon, count, label }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="text-center p-6 bg-white rounded-lg shadow-lg"
    >
      <div className="flex justify-center mb-4">
        <Icon className="text-4xl text-purple-600" />
      </div>
      <h3 className="text-4xl font-bold text-blue-600">
        <CountUp end={count} />+
      </h3>
      <p className="mt-2 text-gray-600">{label}</p>
    </motion.div>
  );
};

export default StatCard;