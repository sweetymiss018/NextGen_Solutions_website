
// const About2 = () => {
//     return (
//       <div className=" mx-auto px-4 py-12 md:py-20 bg-white">
//         <div className="grid md:grid-cols-2 gap-8 items-center">
//           {/* Left Column - Event Image */}
//           <div className="relative rounded-lg overflow-hidden shadow-lg">
//             <img 
//               src="https://webeesocial.com/wp-content/uploads/2019/10/about-banner.jpg"
//               alt="We live & breathe digital"
//               className="w-full h-auto object-cover"
//               loading="lazy"
//             />
//           </div>
  
//           {/* Right Column */}
//           <div className="space-y-6">
//             <div className="space-y-2">
//               <h2 className="text-4xl md:text-5xl font-bold">
//                 What <span className="text-emerald-500">We Do</span>?
//               </h2>
//               <div className="w-20 h-1 bg-yellow-400"></div>
//             </div>
            
//             <p className="text-gray-700 leading-relaxed">
//               We are working with clients from India, U.K., Canada, New Zealand, Hong Kong, Singapore, 
//               U.A.E. e.t.c. across verticals like ecommerce, technology, retail and events. From marketing 
//               events like Auto Expo - Components and MTV unplugged to creating some incredible ROAS 
//               (Return on ad spends) for ecommerce brands, our team loves to be creative and strategic about 
//               different lines of businesses. We won the 'Best Digital Innovation' award at the ACT summit in 
//               Pune where our digital activation campaign for ACMA Safer work-places won accolades from 
//               auto component OEMs. We are hungry for creativity and passionate about driving results. Our 
//               clients below can attest to our efforts!
//             </p>
//           </div>
//         </div>
//       </div>
//     );
//   };

// export default About2;

import React from 'react';

const About2 = () => {
  return (
    <div className="min-h-screen bg-[#F5F5F5]">
      <div className="container mx-auto px-4 py-12 md:py-20">
        <div className="grid md:grid-cols-2 gap-8 items-center">

            {/* Left Column - Banner Image */}
          <div className="relative rounded-lg overflow-hidden shadow-lg">
            <img 
              src="https://images.unsplash.com/photo-1531266752426-aad472b7bbf4?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTR8fHdvcmxkfGVufDB8fDB8fHww"
              // src="https://webeesocial.com/wp-content/uploads/2019/10/about-banner.jpg"
              alt="We live & breathe digital"
              className="w-full h-auto object-cover"
              loading="lazy"
            />
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            <div className="space-y-2">
              <h2 className="text-4xl md:text-5xl font-bold">
                What <span className="text-emerald-500">We Do</span>?
              </h2>
              <div className="w-20 h-1 bg-yellow-400"></div>
            </div>
            
            <p className="text-gray-700 leading-relaxed">
              We are working with clients from India, U.K., Canada, New Zealand, Hong Kong, Singapore, 
              U.A.E. e.t.c. across verticals like ecommerce, technology, retail and events. From marketing 
              events like Auto Expo - Components and MTV unplugged to creating some incredible ROAS 
              (Return on ad spends) for ecommerce brands, our team loves to be creative and strategic about 
              different lines of businesses. We won the 'Best Digital Innovation' award at the ACT summit in 
              Pune where our digital activation campaign for ACMA Safer work-places won accolades from 
              auto component OEMs. We are hungry for creativity and passionate about driving results. Our 
              clients below can attest to our efforts!
            </p>
          </div>

          
        </div>
      </div>
    </div>
  );
};

export default About2;