import { motion } from 'framer-motion';

const MenuButton = ({ isOpen, toggleMenu }) => {
  return (
    <motion.button
      onClick={toggleMenu}
      className="lg:hidden p-3 rounded-full focus:outline-none focus:ring-2 focus:ring-[#897362]/50"
      whileTap={{ scale: 0.9 }}
      aria-label="Menu toggle"
    >
      <div className="w-6 h-6 relative flex items-center justify-center">
        <motion.span
          animate={isOpen ? 
            { rotate: 45, y: 0, width: '100%', backgroundColor: '#6b5647' } : 
            { rotate: 0, y: -6, width: '100%', backgroundColor: '#897362' }
          }
          className="absolute h-[2px] rounded-full block"
          transition={{ duration: 0.3, ease: "easeInOut" }}
        />
        <motion.span
          animate={isOpen ? 
            { opacity: 0, x: -10, backgroundColor: '#6b5647' } : 
            { opacity: 1, x: 0, backgroundColor: '#897362' }
          }
          className="absolute h-[2px] w-full rounded-full block"
          transition={{ duration: 0.2, ease: "easeInOut" }}
        />
        <motion.span
          animate={isOpen ? 
            { rotate: -45, y: 0, width: '100%', backgroundColor: '#6b5647' } : 
            { rotate: 0, y: 6, width: '100%', backgroundColor: '#897362' }
          }
          className="absolute h-[2px] rounded-full block"
          transition={{ duration: 0.3, ease: "easeInOut" }}
        />
      </div>
    </motion.button>
  );
};

export default MenuButton;