import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero";
import Stats from "./components/Stats/Stats";
import Projects from "./components/Projects/Projects";
import Portfolio from "./components/Portfolio";
import Footer from "./components/Footer/Footer";
import WhatsAppButton from "./components/WhatsApp/WhatsAppButton";
import RecentWork from "./components/RecentWork";
import About from "./components/About/About";
import Services from "./components/Services/Services";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavLinks from "./components/Navbar/NavLinks";
import Career from "./components/Career/Career";
import Contact from "./components/Contact/Contact1";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-900">
        <Navbar />

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
          <Route path="/services" element={<Services />} />
          <Route path="/Career" element={<Career />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <WhatsAppButton />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
