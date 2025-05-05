import { useState } from 'react';
import { motion } from 'framer-motion';
import RotatingText from './RotatingText';
import SocialLinks from './SocialLinks';
import ContactInfo from './ContactInfo';
import FooterLinks from './FooterLinks';
import RequestCall from '../RequestCall';

const Footer = () => {

  const [showPopup, setShowPopup] = useState(false);
  
    const handleButtonClick = () => {
      setShowPopup(true); // Show the popup manually
    };
  
    const closePopup = () => {
      setShowPopup(false); // Close the popup
    };
  
  return (
    <footer id='contact' className="bg-gray-900 text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">READY TO DISCUSS YOUR PROJECT?</h2>
          <h1 className="text-6xl font-bold mb-8">LET'S TALK</h1>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#059669] px-8 py-3 rounded-md text-lg font-medium"
            onClick={handleButtonClick}
          >
            Work with Us →
          </motion.button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 border-t border-gray-800 pt-12">
          <ContactInfo />
          <div>
            <h3 className="text-xl font-bold mb-6">The socials</h3>
            <SocialLinks />
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800">
          <FooterLinks />
          <p className="mt-6 text-sm text-gray-400">
            Copyright © 2024-{new Date().getFullYear()}. Web Solution Centre. All Rights Reserved.
          </p>
          <p className="mt-2 text-sm text-gray-400">
            NextGen Solutions Pvt Ltd Company.
          </p>
        </div>
      </div>
      
      <RotatingText />

      {showPopup && (
        <RequestCall triggerPopup={showPopup} onClose={closePopup} />
      )}
    </footer>
  );
};

export default Footer;