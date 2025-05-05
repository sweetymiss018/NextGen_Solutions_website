import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ContactModal from '../Contact/ContactModal';

const ServicesPage = () => {
  const [selectedService, setSelectedService] = useState(null);
  const [showContactModal, setShowContactModal] = useState(false);
  const [contactServiceTitle, setContactServiceTitle] = useState('');

  const services = [
    {
      title: "Digital Strategy and Planning",
      description: "We combine expertise and innovation to develop strategic plans that drive business growth and enhance your brand's digital presence.",
      details: [
        "Comprehensive market analysis and competitor research",
        "Customized digital roadmap aligned with business goals",
        "Performance metrics and KPI development",
        "Ongoing optimization and strategy refinement"
      ],
      icon: "📈"
    },
    {
      title: "Creative Strategy and Web Graphics Design",
      description: "We specialize in crafting engaging digital experiences through innovative design solutions for websites, apps, and various digital platforms.",
      details: [
        "User-centered interface design",
        "Brand identity development",
        "Responsive web design for all devices",
        "Interactive prototypes and wireframes",
        "UI/UX best practices implementation"
      ],
      icon: "🎨"
    },
    {
      title: "Social Media Marketing",
      description: "Leveraging the power of social platforms, we create and execute comprehensive strategies to build your brand presence and engage your audience.",
      details: [
        "Platform-specific content strategy",
        "Community management and engagement",
        "Influencer partnership programs",
        "Paid social advertising campaigns",
        "Analytics and performance reporting"
      ],
      icon: "📱"
    },
    {
      title: "Videos, GIFs and Content Marketing",
      description: "We produce compelling visual content optimized for digital platforms, helping you connect with your audience through engaging multimedia experiences.",
      details: [
        "Concept development and storyboarding",
        "High-quality video production",
        "Motion graphics and animation",
        "Platform-optimized content formatting",
        "Content calendar and distribution strategy"
      ],
      icon: "🎥"
    }
  ];

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

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5
      }
    })
  };

  const handleGetStartedClick = (serviceTitle) => {
    setSelectedService(null); // Close the service details modal
    setContactServiceTitle(serviceTitle);
    setShowContactModal(true);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-gray-900 text-white py-20 px-4 md:px-8"
      >
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold">
            Our <span className="text-emerald-500">Services</span>
          </h1>
          <div className="w-16 h-1 bg-yellow-400 mt-4"></div>
        </div>
      </motion.div>

      {/* Services Grid */}
      <motion.div
        variants={{
          hidden: { opacity: 0 },
          show: {
            opacity: 1,
            transition: { staggerChildren: 0.2 }
          }
        }}
        initial="hidden"
        animate="show"
        className="max-w-7xl mx-auto py-12 px-4 md:px-8"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 20 },
                show: { 
                  opacity: 1, 
                  y: 0, 
                  transition: { 
                    type: "spring",
                    stiffness: 100,
                    duration: 0.5 
                  } 
                }
              }}
              className="border border-gray-200 p-6 rounded-lg hover:shadow-lg transition-shadow bg-white"
              whileHover={{ 
                y: -5,
                boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)"
              }}
            >
              <div className="flex items-start">
                <span className="text-3xl mr-4">{service.icon}</span>
                <div>
                  <h2 className="text-2xl font-bold mb-2">
                    {service.title}
                  </h2>
                  <div className="w-12 h-1 bg-yellow-400 mb-4"></div>
                  <p className="text-gray-600 mb-6">
                    {service.description}
                  </p>
                  <motion.button
                    className="bg-emerald-500 text-white px-6 py-2 rounded hover:bg-emerald-600 transition-colors"
                    whileHover={{ 
                      scale: 1.05,
                      boxShadow: "0 5px 15px -3px rgba(16, 185, 129, 0.4)"
                    }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setSelectedService(service)}
                  >
                    READ MORE
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Modal */}
      <AnimatePresence>
        {selectedService && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 p-4"
            variants={backdrop}
            initial="hidden"
            animate="visible"
            exit="hidden"
            onClick={() => setSelectedService(null)}
          >
            <motion.div
              className="bg-white rounded-xl shadow-2xl p-8 max-w-2xl w-full relative z-10 max-h-[90vh] overflow-y-auto"
              variants={modal}
              initial="hidden"
              animate="visible"
              exit="exit"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedService(null)}
                className="absolute top-4 right-4 text-gray-400 hover:text-red-500 text-3xl transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                &times;
              </button>
              
              <div className="flex items-start mb-6">
                <span className="text-4xl mr-4">{selectedService.icon}</span>
                <div>
                  <h2 className="text-3xl font-bold text-emerald-600 mb-2">
                    {selectedService.title}
                  </h2>
                  <div className="w-16 h-1 bg-yellow-400 mb-4"></div>
                </div>
              </div>
              
              <div className="space-y-6">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="bg-gray-50 p-6 rounded-lg"
                >
                  <h3 className="text-xl font-semibold mb-3 text-gray-800">What We Offer</h3>
                  <ul className="space-y-3">
                    {selectedService.details.map((detail, i) => (
                      <motion.li
                        key={i}
                        custom={i}
                        variants={itemVariants}
                        initial="hidden"
                        animate="visible"
                        className="flex items-start"
                      >
                        <span className="text-emerald-500 mr-2">✓</span>
                        <span className="text-gray-700">{detail}</span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="bg-gradient-to-r from-emerald-50 to-blue-50 p-6 rounded-lg"
                >
                  <h3 className="text-xl font-semibold mb-3 text-gray-800">Our Approach</h3>
                  <p className="text-gray-700">
                    Our team of experts works closely with you to understand your unique needs and 
                    delivers tailored solutions that drive measurable results. We combine creativity 
                    with data-driven strategies to ensure your digital success.
                  </p>
                </motion.div>
                
                <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="text-center pt-4"
            >
              <motion.button
                className="bg-emerald-500 text-white px-8 py-3 rounded-lg hover:bg-emerald-600 transition-colors font-medium"
                whileHover={{ 
                  scale: 1.03,
                  boxShadow: "0 5px 15px -3px rgba(16, 185, 129, 0.4)"
                }}
                whileTap={{ scale: 0.98 }}
                onClick={() => handleGetStartedClick(selectedService.title)}
              >
                Get Started With This Service
              </motion.button>
            </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      {/* Contact Modal */}
      <ContactModal 
        isOpen={showContactModal} 
        onClose={() => setShowContactModal(false)}
        serviceTitle={contactServiceTitle}
      />

    </div>
  );
};

export default ServicesPage;