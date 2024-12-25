import { motion } from 'framer-motion';

const Logo = () => {
  return (
    <motion.a
      href="#"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="text-2xl font-bold"
    >
      <span className="bg-gradient-to-r from-purple-600 to-blue-600 text-transparent bg-clip-text">
        NextGen
      </span>
    </motion.a>
  );
};

export default Logo;