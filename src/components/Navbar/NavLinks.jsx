import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';

const links = [
  { name: 'Home', to: '/' },
  { name: 'Services', to: '/services' },
  { name: 'Career', to: '/Career' },
  { name: 'About', to: '/about' },
  { name: 'Contact', to: '/contact' }
];

const NavLinks = ({ mobile = false, onLinkClick }) => {
  const linkVariants = {
    closed: { opacity: 0, y: -10 },
    open: { opacity: 1, y: 0 }
  };

  return (
    <div className={`${mobile ? 'flex flex-col items-center space-y-8' : 'hidden lg:flex space-x-4'}`}>
      {links.map((link) => (
        <motion.div
          key={link.name}
          variants={mobile ? linkVariants : null}
        >
          <NavLink
            to={link.to}
            className={({ isActive }) => 
              `${mobile 
                ? 'text-white text-2xl hover:text-emerald-400' 
                : 'text-black hover:text-emerald-600'} 
              ${isActive ? (mobile ? 'text-emerald-400' : 'text-emerald-600 font-semibold') : ''}
              px-3 py-2 font-medium transition-colors duration-200`
            }
            onClick={mobile ? onLinkClick : null}
          >
            {link.name}
          </NavLink>
        </motion.div>
      ))}
      {mobile && (
        <motion.div variants={linkVariants}>
          <button
            onClick={onLinkClick}
            className="bg-emerald-600 text-white px-8 py-3 rounded-md text-xl font-medium mt-4"
          >
            REQUEST A QUOTE
          </button>
        </motion.div>
      )}
    </div>
  );
};

export default NavLinks;