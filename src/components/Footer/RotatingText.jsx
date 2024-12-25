import { motion } from 'framer-motion';

const RotatingText = () => {
  const text = "Digital Marketing • Search Engine Optimization • E-Commerce • Web Development • ";
  const radius = 150;
  const characters = text.split('');
  const angleStep = (2 * Math.PI) / characters.length;

  return (
    <div className="absolute right-0 top-0 w-[300px] h-[300px]">
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="relative w-full h-full"
      >
        {characters.map((char, i) => {
          const angle = i * angleStep;
          const x = radius * Math.cos(angle);
          const y = radius * Math.sin(angle);

          return (
            <span
              key={i}
              className="absolute left-1/2 top-1/2 text-sm text-gray-400 whitespace-nowrap transform -translate-x-1/2 -translate-y-1/2"
              style={{
                transform: `translate(${x}px, ${y}px) rotate(${(i * 360) / characters.length}deg)`,
              }}
            >
              {char}
            </span>
          );
        })}
      </motion.div>
    </div>
  );
};

export default RotatingText;