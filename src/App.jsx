import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats/Stats';
import Projects from './components/Projects/Projects';
import Portfolio from './components/Portfolio';
import Footer from './components/Footer/Footer';
import WhatsAppButton from './components/WhatsApp/WhatsAppButton';
import RecentWork from './components/RecentWork';

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Stats />
      <Projects />
      <Portfolio />
      <RecentWork />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;