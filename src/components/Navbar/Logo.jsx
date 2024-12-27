import { motion } from "framer-motion";
import logo from "../../assets/logo.png";

const Logo = () => {
  return (
    <motion.a
      href="#"
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="flex items-center gap-2 text-2xl font-bold"
    >
      <img
        className="h-10 w-10 object-contain"
        src={logo}
        alt="NextGen Logo"
      />
      <span className="bg-gradient-to-r from-[#FFBD59] to-[#9a7ebd] text-transparent bg-clip-text">
        NextGen
      </span>
    </motion.a>
  );
};

export default Logo;
