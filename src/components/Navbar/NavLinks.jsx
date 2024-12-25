import { motion } from 'framer-motion';

const links = [
  { name: 'Home', href: '#home' },
  { name: 'Services', href: '#services' },
  { name: 'Portfolio', href: '#portfolio' },
  { name: 'About', href: '#about' },
  { name: 'Contact', href: '#contact' }
];

const linkVariants = {
  closed: { opacity: 0, x: -20 },
  open: { opacity: 1, x: 0 }
};

const NavLinks = ({ mobile }) => {
  return (
    <div className={`${mobile ? 'flex flex-col items-center space-y-6' : 'hidden lg:flex items-center space-x-8'}`}>
      {links.map((link) => (
        <motion.a
          key={link.name}
          href={link.href}
          variants={mobile ? linkVariants : {}}
          className={`${
            mobile 
              ? 'text-3xl text-white hover:text-purple-400' 
              : 'text-white/90 hover:text-white text-sm'
          } font-medium transition-colors`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {link.name}
        </motion.a>
      ))}
    </div>
  );
};

export default NavLinks;