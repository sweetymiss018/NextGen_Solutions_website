import { motion } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppButton = () => {
  const whatsappNumber = '+919891846187';
  const message = 'Hello! I would like to discuss a project.';

  return (
    <motion.a
      href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 z-50"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <div className="bg-green-500 text-white p-4 rounded-full shadow-lg">
        <FaWhatsapp className="text-3xl" />
      </div>
    </motion.a>
  );
};

export default WhatsAppButton;