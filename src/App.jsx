import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Loader2 } from 'lucide-react';
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import WhatsAppButton from "./components/WhatsApp/WhatsAppButton";

// Lazy-loaded components
const Hero = lazy(() => import("./components/Hero"));
const Stats = lazy(() => import("./components/Stats/Stats"));
const Projects = lazy(() => import("./components/Projects/Projects"));
const Portfolio = lazy(() => import("./components/Portfolio"));
const RecentWork = lazy(() => import("./components/RecentWork"));
const Services = lazy(() => import("./components/Services/Services"));
const Career = lazy(() => import("./components/Career/Career"));
const About = lazy(() => import("./components/About/About"));
const Contact = lazy(() => import("./components/Contact/Contact1"));

// Custom loader component with Framer Motion and Lucide
const LoadingSpinner = () => {
  return (
    <motion.div 
      className="flex justify-center items-center h-screen bg-gray-900"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        animate={{ 
          rotate: 360,
        }}
        transition={{
          duration: 1,
          repeat: Infinity,
          ease: "linear"
        }}
      >
        <Loader2 className="h-12 w-12 text-blue-500" />
      </motion.div>
    </motion.div>
  );
};

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-900">
        <Navbar />

        {/* Smooth scroll container */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Suspense fallback={<LoadingSpinner />}>
            <Routes>
              <Route
                path="/"
                element={
                  <>
                    <Hero />
                    <Stats />
                    <Projects />
                    <Portfolio />
                    <RecentWork />
                  </>
                }
              />
              <Route 
                path="/services" 
                element={
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Services />
                  </motion.div>
                } 
              />
              <Route 
                path="/Career" 
                element={
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Career />
                  </motion.div>
                } 
              />
              <Route 
                path="/about" 
                element={
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <About />
                  </motion.div>
                } 
              />
              <Route 
                path="/contact" 
                element={
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Contact />
                  </motion.div>
                } 
              />
            </Routes>
          </Suspense>
        </motion.div>
        
        <WhatsAppButton />
        <Footer />
      </div>
    </Router>
  );
}

export default App;