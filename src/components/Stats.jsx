import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState, useEffect } from 'react';

const CountUp = ({ end, duration = 2 }) => {
  const [count, setCount] = useState(0);
  const [ref, inView] = useInView({ triggerOnce: true });

  useEffect(() => {
    if (inView) {
      let startTime;
      const animateCount = (timestamp) => {
        if (!startTime) startTime = timestamp;
        const progress = timestamp - startTime;
        const percentage = Math.min(progress / (duration * 1000), 1);
        
        setCount(Math.floor(end * percentage));
        
        if (percentage < 1) {
          requestAnimationFrame(animateCount);
        }
      };
      
      requestAnimationFrame(animateCount);
    }
  }, [inView, end, duration]);

  return <span ref={ref}>{count}</span>;
};

const Stats = () => {
  return (
    <div className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-center"
          >
            <h3 className="text-4xl font-bold text-blue-600">
              <CountUp end={15} />+
            </h3>
            <p className="mt-2 text-gray-600">Team Size</p>
          </motion.div>
          
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-center"
          >
            <h3 className="text-4xl font-bold text-blue-600">
              <CountUp end={20} />+
            </h3>
            <p className="mt-2 text-gray-600">Certified Magento Experts</p>
          </motion.div>
          
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-center"
          >
            <h3 className="text-4xl font-bold text-blue-600">
              <CountUp end={30} />+
            </h3>
            <p className="mt-2 text-gray-600">Websites Launched</p>
          </motion.div>
          
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-center"
          >
            <h3 className="text-4xl font-bold text-blue-600">
              <CountUp end={10} />+
            </h3>
            <p className="mt-2 text-gray-600">Collaborations</p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Stats;