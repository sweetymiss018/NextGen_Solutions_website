import React from 'react';

const ServicesPage = () => {
  const services = [
    {
      title: "Digital Strategy and Planning",
      description: "We combine expertise and innovation to develop strategic plans that drive business growth and enhance your brand's digital presence.",
      buttonText: "READ MORE"
    },
    {
      title: "Creative Strategy and Web Graphics Design",
      description: "We specialize in crafting engaging digital experiences through innovative design solutions for websites, apps, and various digital platforms.",
      buttonText: "READ MORE"
    },
    {
      title: "Social Media Marketing",
      description: "Leveraging the power of social platforms, we create and execute comprehensive strategies to build your brand presence and engage your audience.",
      buttonText: "READ MORE"
    },
    {
      title: "Videos, GIFs and Content Marketing",
      description: "We produce compelling visual content optimized for digital platforms, helping you connect with your audience through engaging multimedia experiences.",
      buttonText: "READ MORE"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-gray-900 text-white py-20 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold">
            Our <span className="text-emerald-500">Services</span>
          </h1>
          <div className="w-16 h-1 bg-yellow-400 mt-4"></div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto py-12 px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="border border-gray-200 p-6 rounded-lg hover:shadow-lg transition-shadow"
            >
              <h2 className="text-2xl font-bold mb-2">
                {service.title}
              </h2>
              <div className="w-12 h-1 bg-yellow-400 mb-4"></div>
              <p className="text-gray-600 mb-6">
                {service.description}
              </p>
              <button className="bg-emerald-500 text-white px-6 py-2 rounded hover:bg-emerald-600 transition-colors">
                {service.buttonText}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;