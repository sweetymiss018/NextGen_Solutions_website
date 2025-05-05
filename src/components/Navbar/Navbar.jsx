import { useState } from "react";
import { motion } from "framer-motion";
import Logo from "./Logo";
import NavLinks from "./NavLinks";
import MenuButton from "./MenuButton";
import MobileMenu from "./MobileMenu";
import RequestCall from "../RequestCall";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  const handleButtonClick = () => {
    setShowPopup(true);
    closeMenu();
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    document.body.style.overflow = !isMenuOpen ? "hidden" : "unset";
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    document.body.style.overflow = "unset";
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed w-full bg-gradient-to-r from-gray-100 to-gray-200 z-50 shadow-md"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <Logo />
            <NavLinks />
            
            <div className="flex items-center space-x-4">
              <span className="hidden lg:block text-black font-medium">
                <a href="tel:+917978929961" className="hover:text-emerald-600 transition-colors">
                  +91-7978929961
                </a>
              </span>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="hidden lg:block bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-2 rounded-md text-sm font-medium transition-colors"
                onClick={handleButtonClick}
              >
                REQUEST A QUOTE
              </motion.button>
              <MenuButton isOpen={isMenuOpen} toggleMenu={toggleMenu} />
            </div>
          </div>
        </div>
      </motion.nav>

      <MobileMenu isOpen={isMenuOpen} onClose={closeMenu} />

      {showPopup && (
        <RequestCall triggerPopup={showPopup} onClose={closePopup} />
      )}
    </>
  );
};

export default Navbar;