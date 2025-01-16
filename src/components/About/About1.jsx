import React from 'react';

const About1 = () => {
  return (
    <div className="min-h-screen bg-white ">
      <div className="container mx-auto px-4 py-12 md:py-20">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Left Column */}
          <div className="space-y-6">
            <div className="space-y-2">
              <h1 className="text-4xl md:text-5xl font-bold flex items-center">
                ABOUT 
                <span className="text-emerald-500 ml-2">US</span>
              </h1>
              <div className="w-20 h-1 bg-yellow-400"></div>
            </div>
            
            <p className="text-xl italic text-gray-800">
              We live and breathe digital. The Internet is our home.
            </p>
            
            <p className="text-gray-700 leading-relaxed">
              We are a buzzing digital media agency based out of New Delhi, India. 
              Our team consists of experienced and hardworking social bees who 
              breathe and live digital. Change on Facebook, Twitter, YouTube, 
              Instagram, Google algorithm? Rest assured that we are aware of it 
              the moment it's out. We combine our years of experience in creating 
              integrated social solutions with creative output to generate a rich 
              digital experience for our clients. We think we research, we create, 
              and for our clients, we thrive to deliver best solutions to their 
              every problem.
            </p>
          </div>

          {/* Right Column - Banner Image */}
          <div className="relative rounded-lg overflow-hidden shadow-lg w-[90%] h-[90%]">
            <img 
              src="https://plus.unsplash.com/premium_photo-1661963874418-df1110ee39c1?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8c29mdHdhcmV8ZW58MHx8MHx8fDA%3D"
              alt="We live & breathe digital"
              className="w-full h-auto object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About1;