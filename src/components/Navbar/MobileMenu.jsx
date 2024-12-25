import { motion } from 'framer-motion';
import NavLinks from './NavLinks';

const menuVariants = {
  closed: {
    x: '-100%',
    transition: {
      type: 'tween',
      duration: 0.3,
      staggerChildren: 0.05,
      staggerDirection: -1
    }
  },
  open: {
    x: 0,
    transition: {
      type: 'tween',
      duration: 0.3,
      staggerChildren: 0.05,
      delayChildren: 0.1
    }
  }
};

const CloseButton = ({ onClose }) => (
  <motion.button
    onClick={onClose}
    className="absolute top-6 right-6 text-white p-2"
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }}
  >
    <svg 
      className="w-8 h-8" 
      fill="none" 
      viewBox="0 0 24 24" 
      stroke="currentColor"
    >
      <path 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        strokeWidth={2} 
        d="M6 18L18 6M6 6l12 12" 
      />
    </svg>
  </motion.button>
);

const MobileMenu = ({ isOpen, onClose }) => {
  return (
    <motion.div
      initial="closed"
      animate={isOpen ? "open" : "closed"}
      variants={menuVariants}
      className="fixed inset-0 bg-black/95 z-50 lg:hidden flex flex-col items-center justify-center"
    >
      <CloseButton onClose={onClose} />
      <NavLinks mobile />
    </motion.div>
  );
};

export default MobileMenu;