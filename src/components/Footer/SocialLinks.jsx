import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaYoutube } from 'react-icons/fa';
import { motion } from 'framer-motion';

const SocialLinks = () => {
  const socialLinks = [
    { icon: FaFacebookF, href: '#' },
    { icon: FaTwitter, href: '#' },
    { icon: FaLinkedinIn, href: '#' },
    { icon: FaInstagram, href: '#' },
    { icon: FaYoutube, href: '#' }
  ];

  return (
    <div className="flex space-x-4">
      {socialLinks.map((social, index) => {
        const Icon = social.icon;
        return (
          <motion.a
            key={index}
            whileHover={{ scale: 1.2 }}
            href={social.href}
            className="text-gray-400 hover:text-white text-xl"
          >
            <Icon />
          </motion.a>
        );
      })}
    </div>
  );
};

export default SocialLinks;