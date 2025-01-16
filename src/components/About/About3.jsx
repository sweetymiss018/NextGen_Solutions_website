// Improved Leadership Component
const About3 = () => {
    return (
      <div className=" mx-auto px-4 py-12 md:py-20 bg-white">
        {/* Header */}
        <div className="mb-16 text-center">
          <h2 className="text-5xl font-bold">
            The <span className="text-emerald-500">Leadership</span>
          </h2>
          <div className="w-20 h-1 bg-yellow-400 mx-auto mt-4"></div>
        </div>
  
        {/* Leadership Content */}
        <div className="max-w-7xl mx-auto">
          {/* First Row */}
          <div className="mb-20">
            <div className="flex flex-col md:flex-row items-center max-w-3xl mx-auto">
              <div className="md:w-2/3 md:pr-8 text-gray-600">
                <p className="mb-3">
                  <span className="text-gray-800 font-medium">Soumya sharma</span> is the Co-Founder & CEO of WebeeSocial.
                </p>
                <p>
                  She also heads the Creative Department of the agency. Before setting up WeBeeSocial, she 
                  spearheaded some of the biggest campaigns for brands like Huawei, Intel, Ford, Dabur etc.
                </p>
              </div>
              <div className="relative mt-8 md:mt-0">
                <div className="w-48 h-48 rounded-full overflow-hidden relative z-10">
                  <img 
                    src="https://webeesocial.com/wp-content/uploads/2019/10/team-1.png"
                    alt="Soumya sharma"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute top-0 right-0 w-28 h-28 bg-emerald-500 rounded-full -translate-y-1/4 translate-x-1/4"></div>
                <div className="absolute bottom-0 right-0 w-16 h-16 bg-yellow-400 rounded-full translate-y-1/8 translate-x-1/4"></div>
              </div>
            </div>
          </div>
  
          {/* Second Row */}
          <div>
            <div className="flex flex-col-reverse md:flex-row items-center max-w-3xl mx-auto">
              <div className="relative mt-8 md:mt-0">
                <div className="w-48 h-48 rounded-full overflow-hidden relative z-10">
                  <img 
                    src="https://webeesocial.com/wp-content/uploads/2019/10/team-2.png"
                    alt="Shubhendu Jha"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute top-0 left-0 w-28 h-28 bg-yellow-400 rounded-full -translate-y-1/4 -translate-x-1/4"></div>
                <div className="absolute bottom-0 left-0 w-16 h-16 bg-emerald-500 rounded-full translate-y-1/8 -translate-x-1/4"></div>
              </div>
              <div className="md:w-2/3 md:pl-8 text-gray-600">
                <p className="mb-3">
                  <span className="text-gray-800 font-medium">Shubhendu Jha</span> is the Co-Founder & MD of WebeeSocial.
                </p>
                <p>
                  He also heads the Client Servicing Department of the agency. Being a digitalhead he loves 
                  creativity, not only as a hobby, but as a away of life. Before setting up WeBeeSocial, he 
                  was working with brands like airtel, Dabur, Honda, Adidas etc. which made him proficient 
                  in different verticals.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  export default About3;