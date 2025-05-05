import { motion, AnimatePresence } from 'framer-motion';

const ContactModal = ({ isOpen, onClose, serviceTitle }) => {
  // Animation variants
  const backdrop = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { duration: 0.3 }
    }
  };

  const modal = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.95 
    },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1, 
      transition: { 
        type: "spring",
        damping: 25,
        stiffness: 300,
        duration: 0.5
      } 
    },
    exit: { 
      opacity: 0, 
      y: 50,
      scale: 0.95,
      transition: { 
        duration: 0.2 
      } 
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 p-4"
          variants={backdrop}
          initial="hidden"
          animate="visible"
          exit="hidden"
          onClick={onClose}
        >
          <motion.div
            className="bg-white rounded-xl shadow-2xl p-8 max-w-md w-full relative z-10"
            variants={modal}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-gray-400 hover:text-red-500 text-3xl transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              &times;
            </button>
            
            <h2 className="text-2xl font-bold text-emerald-600 mb-2">
              Contact Us About {serviceTitle}
            </h2>
            <div className="w-16 h-1 bg-yellow-400 mb-6"></div>
            
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-gray-700 mb-1">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition"
                  placeholder="Your name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-gray-700 mb-1">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition"
                  placeholder="Your email"
                />
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-gray-700 mb-1">Phone (Optional)</label>
                <input 
                  type="tel" 
                  id="phone" 
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition"
                  placeholder="Your phone number"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-gray-700 mb-1">Message</label>
                <textarea 
                  id="message" 
                  rows="4"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition"
                  placeholder={`Tell us about your ${serviceTitle} needs...`}
                ></textarea>
              </div>
              
              <motion.button
                type="submit"
                className="w-full bg-emerald-500 text-white px-6 py-3 rounded-lg hover:bg-emerald-600 transition-colors font-medium mt-4"
                whileHover={{ 
                  scale: 1.02,
                  boxShadow: "0 5px 15px -3px rgba(16, 185, 129, 0.4)"
                }}
                whileTap={{ scale: 0.98 }}
              >
                Submit Inquiry
              </motion.button>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ContactModal;