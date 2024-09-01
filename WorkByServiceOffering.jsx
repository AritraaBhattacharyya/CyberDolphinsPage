import React from 'react';

const WorkByServiceOffering = () => {
  const services = [
    "Technology Modernization",
    "Digital Organization",
    "Experience Transformation",
    "Customer Engagement",
    "Total Commerce",
    "Innovation",
    "Partnerships"
  ];

  const caseStudies = [
    {
      title: "Pandora's Data-Driven Digital Transformation",
      description: "How Pandora harnessed the power of digital to create a foundation for unified commerce and profitable growth."
    },
    {
      title: "Pandora's Data-Driven Digital Transformation",
      description: "How Pandora harnessed the power of digital to create a foundation for unified commerce and profitable growth."
    },
    {
      title: "Pandora's Data-Driven Digital Transformation",
      description: "How Pandora harnessed the power of digital to create a foundation for unified commerce and profitable growth."
    },
    {
      title: "Pandora's Data-Driven Digital Transformation",
      description: "How Pandora harnessed the power of digital to create a foundation for unified commerce and profitable growth."
    }
  ];

  const clients = [
    "/api/placeholder/100/100", // Replace with actual client logo URLs
    "/api/placeholder/100/100",
    "/api/placeholder/100/100",
    "/api/placeholder/100/100",
    "/api/placeholder/100/100",
    "/api/placeholder/100/100"
  ];

  return (
    <div className="bg-custom-dark-blue text-white py-16 px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Work by Service Offering</h2>
        
        <div className="flex flex-wrap gap-4 mb-12 justify-center">
          {services.map((service, index) => (
            <button 
              key={index} 
              className={`px-4 py-2 rounded-full ${
                index === 2 ? 'bg-orange-500' : 'bg-blue-800 hover:bg-blue-700'
              }`}
            >
              {service}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {caseStudies.map((study, index) => (
            <div key={index} className="bg-white text-blue-900 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-2">PANDORA</h3>
              <h4 className="font-semibold mb-2">{study.title}</h4>
              <p className="text-sm">{study.description}</p>
            </div>
          ))}
        </div>

        <p className="text-center mb-4">Cyber dolphin is used by over</p>
        <h3 className="text-4xl font-bold text-center mb-8">1000+ companies across the world</h3>
        
        <div className="flex justify-center items-center gap-8 flex-wrap">
          {clients.map((client, index) => (
            <img key={index} src={client} alt={`Client ${index + 1}`} className="h-12 w-auto" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default WorkByServiceOffering;
