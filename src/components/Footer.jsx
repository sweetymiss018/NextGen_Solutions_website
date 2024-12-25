import { motion } from 'framer-motion';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">READY TO DISCUSS YOUR PROJECT?</h2>
          <h1 className="text-6xl font-bold mb-8">LET'S TALK</h1>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-purple-600 to-pink-600 px-8 py-3 rounded-md text-lg font-medium"
          >
            Work with Us →
          </motion.button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 border-t border-gray-800 pt-12">
          <div>
            <h3 className="text-xl font-bold mb-4">Say hello</h3>
            <p className="text-gray-400 mb-2">Web Solution Centre</p>
            <p className="text-gray-400">Bhubaneswar, Odisha, INDIA</p>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">The socials</h3>
            <div className="flex space-x-4">
              <motion.a whileHover={{ scale: 1.2 }} href="#" className="text-gray-400 hover:text-white">
                <FaFacebookF />
              </motion.a>
              <motion.a whileHover={{ scale: 1.2 }} href="#" className="text-gray-400 hover:text-white">
                <FaTwitter />
              </motion.a>
              <motion.a whileHover={{ scale: 1.2 }} href="#" className="text-gray-400 hover:text-white">
                <FaLinkedinIn />
              </motion.a>
              <motion.a whileHover={{ scale: 1.2 }} href="#" className="text-gray-400 hover:text-white">
                <FaInstagram />
              </motion.a>
              <motion.a whileHover={{ scale: 1.2 }} href="#" className="text-gray-400 hover:text-white">
                <FaYoutube />
              </motion.a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;