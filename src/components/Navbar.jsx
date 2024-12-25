import { motion } from 'framer-motion';
import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed w-full bg-white shadow-lg z-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <img src="/logo.png" alt="Web Solution Centre" className="h-8 w-auto" />
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              <a href="#" className="text-gray-800 hover:text-purple-600 px-3 py-2 rounded-md text-sm font-medium">Home</a>
              <a href="#" className="text-gray-800 hover:text-purple-600 px-3 py-2 rounded-md text-sm font-medium">Services</a>
              <a href="#" className="text-gray-800 hover:text-purple-600 px-3 py-2 rounded-md text-sm font-medium">Portfolio</a>
              <a href="#" className="text-gray-800 hover:text-purple-600 px-3 py-2 rounded-md text-sm font-medium">About</a>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-purple-600 text-white px-4 py-2 rounded-md"
              >
                OUR WORK
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-purple-600 text-white px-4 py-2 rounded-md"
              >
                REQUEST A QUOTE
              </motion.button>
            </div>
          </div>

          <div className="flex items-center">
            <span className="text-gray-800 font-medium">+91-9891846187</span>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;