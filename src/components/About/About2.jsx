import React from 'react';
import { motion } from 'framer-motion';

const About2 = () => {
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

  const imageAnimation = {
    hidden: { opacity: 0, x: -50 },
    show: { opacity: 1, x: 0, transition: { duration: 0.8 } }
  };

  const contentAnimation = {
    hidden: { opacity: 0, x: 50 },
    show: { opacity: 1, x: 0, transition: { duration: 0.8 } }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <div className="min-h-screen bg-[#F5F5F5]">
      <div className="container mx-auto px-4 py-12 md:py-20">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Left Column - Banner Image */}
          <motion.div 
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            variants={imageAnimation}
            className="relative rounded-lg overflow-hidden shadow-lg"
          >
            <img 
              src="https://images.unsplash.com/photo-1531266752426-aad472b7bbf4?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTR8fHdvcmxkfGVufDB8fDB8fHww"
              alt="We live & breathe digital"
              className="w-full h-auto object-cover"
              loading="lazy"
            />
          </motion.div>

          {/* Right Column */}
          <motion.div 
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            variants={contentAnimation}
            className="space-y-6"
          >
            <motion.div variants={item} className="space-y-2">
              <h2 className="text-4xl md:text-5xl font-bold">
                What <span className="text-emerald-500">We Do</span>?
              </h2>
              <motion.div 
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="w-20 h-1 bg-yellow-400 origin-left"
              ></motion.div>
            </motion.div>
            
           <motion.p 
  variants={item}
  className="text-gray-700 leading-relaxed"
>
  We collaborate with clients across India, the U.K., Canada, New Zealand, Hong Kong, Singapore, 
  and the U.A.E., delivering impactful solutions across industries like eCommerce, tech, retail, and media. 
  Our expertise spans end-to-end services — from building fast, responsive websites using HTML/CSS/JS, 
  WordPress, and the MERN stack, to crafting stunning designs in Figma and Canva. 
  Whether it's custom frontend development, robust backend APIs, or digital marketing strategies that drive 
  engagement and conversions, we focus on solving real business problems with creativity and precision. 
  Our SEO-optimized solutions ensure visibility, while our digital campaigns deliver measurable results. 
  We’re passionate about quality, obsessed with innovation, and committed to growth — for our clients and ourselves.
</motion.p>

          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About2;