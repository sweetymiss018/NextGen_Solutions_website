import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <div id='home' className="bg-gradient-to-r from-blue-900 to-purple-900 min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Stunning Website Development Company in Odisha, India
          </h1>
          <p className="text-xl text-gray-300 mb-4">
            Transform your business with our cutting-edge e-commerce solutions.
          </p>
          
          {/* Famous Quote */}
          <blockquote className="text-lg md:text-xl italic font-light text-gray-200 mb-8">
            "The best way to predict the future is to create it." – Peter Drucker
          </blockquote>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-purple-600 text-white px-8 py-3 rounded-md text-lg font-medium"
          >
            Get Started
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
