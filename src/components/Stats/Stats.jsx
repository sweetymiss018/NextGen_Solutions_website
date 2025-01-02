import { FaUsers, FaMagento, FaGlobe, FaHandshake } from 'react-icons/fa';
import { BsGraphUp, BsPalette, BsMouse, BsMegaphone } from 'react-icons/bs';
import StatCard from './StatCard';
import ServiceCard from './ServiceCard';

const Stats = () => {
  const stats = [
    { icon: FaUsers, count: 15, label: "Team Size" },
    { icon: FaMagento, count: 8, label: "Certified Magento Experts" },
    { icon: FaGlobe, count: 30, label: "Websites Launched" },
    { icon: FaHandshake, count: 10, label: "Collaborations" }
  ];

  const services = [
    
    {
      icon: BsPalette,
      title: "Excellent Design & Development",
      description: "The e-commerce web design and site functioning can make the difference between a happy customer and an unhappy one. We guarantee that we will exceed your expectations in both areas!"
    },
    {
      icon: BsMegaphone,
      title: "Digital Marketing",
      description: "Internet Marketing has always been our forte! By making use of smart marketing plans and SEO methodologies, we enhance your site's brand awareness across search crawlers, social media platforms, and the web at large!"
    },
    {
      icon: BsMouse,
      title: "Engaging User Experience",
      description: "Web Solution Centre has the proficient technical team you need, to deliver intuitive, engaging, and addictive user experiences. We ensure to perfect even the tiniest user interaction details."
    },
    {
      icon: BsGraphUp,
      title: "Robust Strategy",
      description: "To attain indelible success in eCommerce, you'll need a solid approach! We'll conduct all the brainstorming, create a strategy, and orchestrate the best method for achieving superior results."
    },
  ];

  return (
    <div id='about' className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">We Help You Score Big In E-Commerce!</h2>
          <p className="text-xl text-gray-600">Transforming businesses with innovative solutions</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <StatCard key={index} {...stat} />
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Stats;