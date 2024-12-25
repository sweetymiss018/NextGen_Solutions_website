import { motion } from 'framer-motion';

const NavLink = ({ href, children }) => {
  return (
    <motion.a
      href={href}
      className="text-white/90 hover:text-white px-3 py-2 text-sm font-medium transition-colors duration-200"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {children}
    </motion.a>
  );
};

export default NavLink;