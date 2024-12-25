import { motion } from 'framer-motion';

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: 'LOFT',
      description: 'For women of all race and life roles, Loft offers a classic and chic collection of everyday wear and stylish accessories.',
      image: '/loft.jpg'
    },
    {
      id: 2,
      title: 'TOPSHOP',
      description: 'Let your inner fashionista shine with quirky, trendy and modern ensembles and accessories from Top Shop.',
      image: '/topshop.jpg'
    }
  ];

  return (
    <div className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-12">Our Work</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              whileHover={{ scale: 1.02 }}
              className="bg-white rounded-lg overflow-hidden shadow-lg"
            >
              <motion.img
                whileHover={{ scale: 1.1 }}
                src={project.image}
                alt={project.title}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600">{project.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;