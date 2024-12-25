import { motion } from 'framer-motion';

const MenuButton = ({ isOpen, toggleMenu }) => {
  return (
    <motion.button
      onClick={toggleMenu}
      className="lg:hidden p-2 text-white"
      whileTap={{ scale: 0.95 }}
    >
      <div className="w-6 h-5 flex flex-col justify-between">
        <motion.span
          animate={isOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
          className="w-full h-0.5 bg-white block"
        />
        <motion.span
          animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
          className="w-full h-0.5 bg-white block"
        />
        <motion.span
          animate={isOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
          className="w-full h-0.5 bg-white block"
        />
      </div>
    </motion.button>
  );
};

export default MenuButton;