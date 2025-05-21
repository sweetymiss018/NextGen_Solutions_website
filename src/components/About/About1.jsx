import React from 'react';
import { motion } from 'framer-motion';

const About1 = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <motion.div 
      initial="hidden"
      animate="show"
      variants={container}
      className="min-h-screen bg-white"
    >
      <div className="container mx-auto px-4 py-12 md:py-20">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Left Column */}
          <motion.div variants={container} className="space-y-6">
            <motion.div variants={item} className="space-y-2">
              <h1 className="text-4xl md:text-5xl font-bold flex items-center">
                ABOUT 
                <span className="text-emerald-500 ml-2">US</span>
              </h1>
              <motion.div 
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.3 }}
                className="w-20 h-1 bg-yellow-400 origin-left"
              ></motion.div>
            </motion.div>
            
            <motion.p 
              variants={item}
              className="text-xl italic text-gray-800"
            >
              We live and breathe digital. The Internet is our home.
            </motion.p>
            
           <motion.p 
  variants={item}
  className="text-gray-700 leading-relaxed"
>
  We are a full-service digital solutions agency based in New Delhi, India, 
  delivering top-notch web development, design, and marketing services to clients worldwide. 
  Our team of creative developers, designers, and marketers specialize in building 
  responsive websites using HTML, CSS, JavaScript, WordPress, and the MERN stack. 
  From sleek frontend interfaces to powerful backend systems, we handle it all. 
  Whether it's a custom Canva or Figma design, dynamic React apps, or robust Node.js backends, 
  we craft tailored solutions that perform. We also offer expert digital marketing and SEO strategies 
  to grow your brand online. We plan, we build, we market — so your business can thrive in the digital world.
</motion.p>

          </motion.div>

          {/* Right Column - Banner Image */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="relative rounded-lg overflow-hidden shadow-lg w-[90%] h-[90%]"
          >
            <img 
              src="https://plus.unsplash.com/premium_photo-1661963874418-df1110ee39c1?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8c29mdHdhcmV8ZW58MHx8MHx8fDA%3D"
              alt="We live & breathe digital"
              className="w-full h-auto object-cover"
              loading="lazy"
            />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default About1;