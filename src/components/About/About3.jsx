import React from 'react';
import { motion } from 'framer-motion';

const About3 = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        when: "beforeChildren"
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0 }
  };

  const leftContent = {
    hidden: { opacity: 0, x: -50 },
    show: { opacity: 1, x: 0, transition: { duration: 0.8 } }
  };

  const rightContent = {
    hidden: { opacity: 0, x: 50 },
    show: { opacity: 1, x: 0, transition: { duration: 0.8 } }
  };

  return (
    <div className="mx-auto px-4 py-12 md:py-20 bg-white">
      {/* Header */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16 text-center"
      >
        <h2 className="text-5xl font-bold">
          The <span className="text-emerald-500">Leadership</span>
        </h2>
        <motion.div 
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="w-20 h-1 bg-yellow-400 mx-auto mt-4 origin-center"
        ></motion.div>
      </motion.div>

      {/* Leadership Content */}
      <div className="max-w-7xl mx-auto">
        {/* First Row */}
        <motion.div 
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={container}
          className="mb-20"
        >
          <div className="flex flex-col md:flex-row items-center max-w-3xl mx-auto">
            <motion.div 
              variants={leftContent}
              className="md:w-2/3 md:pr-8 text-gray-600"
            >
              <p className="mb-3">
                <span className="text-gray-800 font-medium">Soumya sharma</span> is the Co-Founder & CEO of WebeeSocial.
              </p>
              <p>
                She also heads the Creative Department of the agency. Before setting up WeBeeSocial, she 
                spearheaded some of the biggest campaigns for brands like Huawei, Intel, Ford, Dabur etc.
              </p>
            </motion.div>
            <motion.div 
              variants={rightContent}
              className="relative mt-8 md:mt-0"
            >
              <div className="w-48 h-48 rounded-full overflow-hidden relative z-10">
                <img 
                  src="https://webeesocial.com/wp-content/uploads/2019/10/team-1.png"
                  alt="Soumya sharma"
                  className="w-full h-full object-cover"
                />
              </div>
              <motion.div 
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="absolute top-0 right-0 w-28 h-28 bg-emerald-500 rounded-full -translate-y-1/4 translate-x-1/4"
              ></motion.div>
              <motion.div 
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="absolute bottom-0 right-0 w-16 h-16 bg-yellow-400 rounded-full translate-y-1/8 translate-x-1/4"
              ></motion.div>
            </motion.div>
          </div>
        </motion.div>

        {/* Second Row */}
        <motion.div 
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={container}
        >
          <div className="flex flex-col-reverse md:flex-row items-center max-w-3xl mx-auto">
            <motion.div 
              variants={leftContent}
              className="relative mt-8 md:mt-0"
            >
              <div className="w-48 h-48 rounded-full overflow-hidden relative z-10">
                <img 
                  src="https://webeesocial.com/wp-content/uploads/2019/10/team-2.png"
                  alt="Shubhendu Jha"
                  className="w-full h-full object-cover"
                />
              </div>
              <motion.div 
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="absolute top-0 left-0 w-28 h-28 bg-yellow-400 rounded-full -translate-y-1/4 -translate-x-1/4"
              ></motion.div>
              <motion.div 
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="absolute bottom-0 left-0 w-16 h-16 bg-emerald-500 rounded-full translate-y-1/8 -translate-x-1/4"
              ></motion.div>
            </motion.div>
            <motion.div 
              variants={rightContent}
              className="md:w-2/3 md:pl-8 text-gray-600"
            >
              <p className="mb-3">
                <span className="text-gray-800 font-medium">Shubhendu Jha</span> is the Co-Founder & MD of WebeeSocial.
              </p>
              <p>
                He also heads the Client Servicing Department of the agency. Being a digitalhead he loves 
                creativity, not only as a hobby, but as a away of life. Before setting up WeBeeSocial, he 
                was working with brands like airtel, Dabur, Honda, Adidas etc. which made him proficient 
                in different verticals.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About3;