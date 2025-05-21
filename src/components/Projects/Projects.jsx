import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';
import { FaHtml5, FaWordpress, FaFigma, FaReact, FaNodeJs, FaBullhorn } from 'react-icons/fa';
import { SiCanva, SiMongodb, SiJavascript, SiGooglemarketingplatform } from 'react-icons/si';
import { BsSearch } from 'react-icons/bs';

export const projects = [
  {
    icon: <FaHtml5 color="orange" />,
    title: 'HTML/CSS/JS Development',
    description: 'We create clean, fast, and responsive websites using plain HTML, CSS, and JavaScript — perfect for lightweight, custom builds.'
  },
  {
    icon: <FaReact color="#61DBFB" />,
    title: 'Frontend Development (React)',
    description: 'Modern, responsive, and scalable frontend development using React, Tailwind CSS, and modern design principles.'
  },
  {
    icon: <FaNodeJs color="green" />,
    title: 'Backend Development (Node.js)',
    description: 'We develop robust backend systems with Node.js, Express, REST APIs, and MongoDB for full control over your application.'
  },
  {
    icon: <SiMongodb color="#4DB33D" />,
    title: 'MERN Stack Development',
    description: 'Complete web solutions using MongoDB, Express.js, React, and Node.js. From MVPs to full-scale applications.'
  },
  {
    icon: <FaWordpress color="blue" />,
    title: 'WordPress Development',
    description: 'Professional WordPress development with custom themes, plugin integration, and secure, scalable site solutions.'
  },
  {
    icon: <SiCanva color="#00C4CC" />,
    title: 'Canva Design',
    description: 'We design stunning social media graphics, posters, and marketing content using Canva for impactful visual branding.'
  },
  {
    icon: <FaFigma color="#A259FF" />,
    title: 'UI/UX Design (Figma)',
    description: 'We design user-centric, intuitive interfaces and wireframes in Figma — turning ideas into high-fidelity mockups.'
  },
  
  {
    icon: <FaBullhorn color="#FF5722" />,
    title: 'Digital Marketing',
    description: 'Grow your online presence with our digital marketing services including strategy, content creation, and analytics.'
  },
  {
    icon: <BsSearch color="#009688" />,
    title: 'SEO Optimization',
    description: 'Boost your website’s visibility with technical SEO, on-page optimization, and keyword-targeted content strategies.'
  }
];


const Projects = () => {
  return (
    <div id='services' className="py-20 bg-gray-50">
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
            src="https://media4.giphy.com/media/3bXSswmHBH2xXVpDgn/giphy.webp?cid=790b76119ryrv0efi3cps7fv8nklrp2ncg2i4qlbh2h1xhhv&ep=v1_gifs_search&rid=giphy.webp&ct=g"
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