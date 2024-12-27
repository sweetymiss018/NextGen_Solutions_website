import { motion } from 'framer-motion';
import WorkCard from './WorkCard';
import { works } from '../data/works';

const RecentWork = () => {
  return (
    <section className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold text-white mb-4">Recent Work</h2>
          <p className="text-gray-400 text-lg">Discover our latest projects and creative endeavors</p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {works.map((work, index) => (
            <WorkCard 
              key={work.id} 
              work={work} 
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecentWork;