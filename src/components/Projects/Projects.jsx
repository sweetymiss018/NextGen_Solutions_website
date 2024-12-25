import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';
import { SiPhp } from "react-icons/si";
import { FaMagento } from "react-icons/fa";
import { FaWordpress } from "react-icons/fa";
import { FaAngular } from "react-icons/fa";
import { FaDrupal } from "react-icons/fa6";
import { SiZendesk } from "react-icons/si";



const projects = [
  {
    icon: <SiPhp/>,
    title: 'PHP Development',
    description: 'As a PHP development company, we have built several PHP sites that precisely cater to the needs of small and large ecommerce firms.'
  },
  {
    icon: <FaMagento color='greenYellow'/>,
    title: 'Magento Development',
    description: 'We possess specific expertise in building Magneto sites, with a stellar track record of front end and back end customization & functionality.'
  },
  {
    icon: <FaWordpress color='blue'/>,
    title: 'WordPress Development',
    description: 'Our technical team is well versed with several WordPress ecommerce plugins, and has built WordPress sites that are highly functional and secure.'
  },
  {
    icon: <FaAngular color='red'/>,
    title: 'Angular js',
    description: 'Angular js based websites not only load faster, but also provide high security, reliability, and seamless performance.'
  },
  {
    icon: <FaDrupal color='green'/>,
    title: 'Drupal Development',
    description: 'Our team is fully adept at creating Drupal sites which are easy to use, SEO friendly, highly secure, and load fast.'
  },
  {
    icon: <SiZendesk color='red'/>,
    title: 'Zen Cart Development',
    description: 'The advanced ecommerce Zen Cart solution ensures that your site perfectly syncs with your ecommerce needs & objectives.'
  }
];

const Projects = () => {
  return (
    <div className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-medium text-gray-600 mb-4">
            Our Team Is Fully-Equipped To Deliver
          </h2>
          <h1 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-900 to-purple-900">
            The Very Best In E-Commerce!
          </h1>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>

        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <motion.img
            src="/mobile-preview.png"
            alt="Mobile Preview"
            className="max-w-xs mx-auto"
            initial={{ y: 100 }}
            whileInView={{ y: 0 }}
            transition={{ type: "spring", bounce: 0.4 }}
            viewport={{ once: true }}
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;