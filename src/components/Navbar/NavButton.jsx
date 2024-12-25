import { motion } from 'framer-motion';

const NavButton = ({ children, primary }) => {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`
        px-6 py-2 rounded-md text-sm font-medium transition-colors duration-200
        ${primary 
          ? 'bg-purple-600 text-white hover:bg-purple-700' 
          : 'bg-white/10 text-white hover:bg-white/20'
        }
      `}
    >
      {children}
    </motion.button>
  );
};

export default NavButton;