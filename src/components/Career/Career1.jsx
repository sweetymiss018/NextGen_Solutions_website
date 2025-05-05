import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
} from "../Dialogue";

const Career1 = () => {
  const [selectedJob, setSelectedJob] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isExperienced, setIsExperienced] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    degree: '',
    percentage: '',
    experienceType: 'fresher',
    previousExperience: '',
    resume: null
  });

  const handleInputChange = (e) => {
    const { name, value, type, files } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'file' ? files[0] : value
    }));
  };

  const handleExperienceTypeChange = (e) => {
    const value = e.target.value;
    setIsExperienced(value === 'experienced');
    setFormData(prev => ({
      ...prev,
      experienceType: value,
      previousExperience: value === 'fresher' ? '' : prev.previousExperience
    }));
  };

  // Animation variants
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
    show: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.5,
        ease: "easeOut"
      } 
    }
  };

  const modalItem = {
    hidden: { opacity: 0, x: 20 },
    visible: { opacity: 1, x: 0 }
  };

   // ... (keeping the same Careers data)
   const Careers = [
    {
      title: "Digital Strategy and Planning",
      description: "We combine expertise and innovation to develop strategic plans that drive business growth and enhance your brand's digital presence.",
      buttonText: "Apply Now",
      fullDescription: `As a Digital Strategist, you will:
      • Lead the development and execution of digital strategies
      • Analyze market trends and competitor activities
      • Create detailed roadmaps for digital initiatives
      • Work closely with clients to understand their business objectives`,
      
      Requirements:`
      • 3+ years of experience in digital strategy
      • Strong analytical and problem-solving skills
      • Excellent communication and presentation abilities
      • Bachelor's degree in Marketing, Business, or related field`
    },
    {
      title: "Creative Strategy and Web Graphics Design",
      description: "We specialize in crafting engaging digital experiences through innovative design solutions for websites, apps, and various digital platforms.",
      buttonText: "Apply Now",
      fullDescription: `As a Web Graphics Designer, you will:
      • Create compelling visual designs for websites and digital platforms
      • Develop brand identity systems and style guides
      • Collaborate with development teams to ensure design feasibility
      • Create responsive designs for multiple devices`,
      
      Requirements:`
      • Portfolio demonstrating strong web design skills
      • Proficiency in Adobe Creative Suite and Figma
      • Understanding of UI/UX principles
      • 2+ years of professional design experience`
    },
    {
      title: "Social Media Marketing",
      description: "Leveraging the power of social platforms, we create and execute comprehensive strategies to build your brand presence and engage your audience.",
      buttonText: "Apply Now",
      fullDescription: `As a Social Media Manager, you will:
      • Develop and implement social media strategies
      • Create engaging content for multiple platforms
      • Monitor and analyze social media performance
      • Manage community engagement and respond to inquiries`,
      
      Requirements:`
      • 2+ years of social media management experience
      • Strong content creation and copywriting skills
      • Experience with social media analytics tools
      • Understanding of current social media trends`
    },
    {
      title: "Videos, GIFs and Content Marketing",
      description: "We produce compelling visual content optimized for digital platforms, helping you connect with your audience through engaging multimedia experiences.",
      buttonText: "Apply Now",
      fullDescription: `As a Content Creator, you will:
      • Produce high-quality video content and GIFs
      • Develop content strategies across multiple channels
      • Edit and optimize content for different platforms
      • Collaborate with the marketing team on campaigns`,
      Requirements:`
      • Experience with video editing software
      • Strong understanding of digital content formats
      • Creative storytelling abilities
      • Portfolio of previous video/animation work`     
    }
  ];

  const handleApply = (career) => {
    setSelectedJob(career);
    setIsModalOpen(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setIsModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <motion.div 
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="bg-[#111827] text-white py-20 px-4 md:px-8 border-b border-emerald-500"
      >
        <div className="max-w-7xl mx-auto">
          <motion.h1 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold tracking-tight"
          >
            Start Your <span className="text-emerald-400">Career </span>
            With <span className="text-emerald-400">Us</span>
          </motion.h1>
          <motion.div 
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="w-32 h-1 bg-emerald-500 mt-6 origin-left"
          ></motion.div>
        </div>
      </motion.div>

      {/* Careers Grid */}
      <motion.div 
        variants={container}
        initial="hidden"
        animate="show"
        className="max-w-7xl mx-auto py-16 px-4 md:px-8"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {Careers.map((career, index) => (
            <motion.div 
              key={index} 
              variants={item}
              whileHover={{ 
                y: -5,
                boxShadow: "0 25px 50px -12px rgba(16, 185, 129, 0.25)"
              }}
              className="bg-gray-900 p-8 rounded-xl transition-all duration-300 border border-gray-800 hover:border-emerald-500"
            >
              <h2 className="text-2xl font-bold mb-3 text-white">
                {career.title}
              </h2>
              <div className="w-12 h-1 bg-emerald-500 mb-4"></div>
              <p className="text-gray-400 mb-6">
                {career.description}
              </p>
              <motion.button 
                onClick={() => handleApply(career)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-emerald-500 text-white px-8 py-3 rounded-lg hover:bg-emerald-600 transition-colors duration-300 font-medium"
              >
                {career.buttonText}
              </motion.button>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Application Modal */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="max-w-2xl bg-gray-900 text-white border border-emerald-500">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            <DialogHeader>
              <DialogTitle className="text-3xl md:text-4xl font-bold text-emerald-400">
                {selectedJob?.title}
              </DialogTitle>
            </DialogHeader>
            
            {/* Job Description */}
            <motion.div 
              variants={modalItem}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.1 }}
              className="mt-6 bg-white p-6 rounded-lg"
            >
              <h3 className="text-2xl font-semibold mb-3 text-emerald-900">Job Description</h3>
              <p className="whitespace-pre-line text-gray-900">
                {selectedJob?.fullDescription}
              </p>
            </motion.div>

            {/* Job Requirements */}
            <motion.div 
              variants={modalItem}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.2 }}
              className="bg-white p-6 mb-6 rounded-lg"
            >
              <h3 className="text-2xl font-semibold text-emerald-900">Requirements</h3>
              <p className="whitespace-pre-line text-gray-900">
                {selectedJob?.Requirements}
              </p>
            </motion.div>

            {/* Application Form */}
            <motion.form 
              onSubmit={handleSubmit} 
              className="mt-8 space-y-6"
              variants={container}
              initial="hidden"
              animate="show"
            >
              {/* Personal Information */}
              <motion.div variants={item} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-emerald-900 mb-2">Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full bg-gray border border-gray-800 rounded-lg py-3 px-4 text-white focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-emerald-900 mb-2">Email *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full bg-gray border border-gray-800 rounded-lg py-3 px-4 text-white focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500"
                    required
                  />
                </div>
              </motion.div>

              <motion.div variants={item} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-emerald-900 mb-2">Phone *</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full bg-gray border border-gray-800 rounded-lg py-3 px-4 text-white focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-emerald-900 mb-2">Experience Level *</label>
                  <select
                    name="experienceType"
                    value={formData.experienceType}
                    onChange={handleExperienceTypeChange}
                    className="w-full bg-gray border border-gray-800 rounded-lg py-3 px-4 text-black focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500"
                    required
                  >
                    <option value="fresher">Fresher</option>
                    <option value="experienced">Experienced</option>
                  </select>
                </div>
              </motion.div>

              <motion.div variants={item} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-emerald-900 mb-2">Recent Degree *</label>
                  <input
                    type="text"
                    name="degree"
                    value={formData.degree}
                    onChange={handleInputChange}
                    className="w-full bg-gray border border-gray-800 rounded-lg py-3 px-4 text-white focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500"
                    required
                    placeholder="e.g., B.Tech in Computer Science"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-emerald-900 mb-2">Percentage/CGPA *</label>
                  <input
                    type="text"
                    name="percentage"
                    value={formData.percentage}
                    onChange={handleInputChange}
                    className="w-full bg-gray border border-gray-800 rounded-lg py-3 px-4 text-white focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500"
                    required
                    placeholder="e.g., 85% or 8.5 CGPA"
                  />
                </div>
              </motion.div>

              {/* Conditional Previous Experience */}
              {isExperienced && (
                <motion.div 
                  variants={item}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <label className="block text-sm font-medium text-emerald-900 mb-2">Previous Work Experience *</label>
                  <textarea
                    name="previousExperience"
                    value={formData.previousExperience}
                    onChange={handleInputChange}
                    className="w-full bg-gray border border-gray-500 rounded-lg py-3 px-4 text-white focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500"
                    rows="4"
                    required
                    placeholder="Please describe your previous work experience, including company names, roles, and duration"
                  ></textarea>
                </motion.div>
              )}
              
              {/* Resume Upload */}
              <motion.div variants={item}>
                <label className="block text-sm font-medium text-emerald-900 mb-2">Resume/CV *</label>
                <input
                  type="file"
                  name="resume"
                  onChange={handleInputChange}
                  className="w-full text-gray-400
                  file:mr-4 file:py-3 file:px-4
                  file:rounded-lg file:border-0
                  file:text-sm file:font-medium
                  file:bg-emerald-500 file:text-white
                  hover:file:bg-emerald-600
                  cursor-pointer"
                  accept=".pdf,.doc,.docx"
                  required
                />
              </motion.div>
              
              {/* Form Actions */}
              <motion.div 
                variants={item}
                className="flex justify-end space-x-4 pt-6 border-t border-gray-800"
              >
                <motion.button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-3 border border-gray-600 rounded-lg text-gray-300 hover:bg-gray-800 transition-colors duration-300"
                >
                  Cancel
                </motion.button>
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-3 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600 transition-colors duration-300 font-medium"
                >
                  Submit Application
                </motion.button>
              </motion.div>
            </motion.form>
          </motion.div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Career1;