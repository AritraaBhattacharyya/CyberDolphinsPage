import React from 'react';
import { Smartphone } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      title: "Cost Effectiveness",
      description: "Our development is pixel perfect in all ways.",
      color: "bg-blue-600",
      textColor: "text-white"
    },
    {
      title: "Innovative Technology",
      description: "We have a best team for your shopping websites.",
      color: "bg-white",
      textColor: "text-blue-900",
      icon: <Smartphone className="text-blue-600 w-12 h-12" />
    },
    {
      title: "Software Development",
      description: "We enhance customer experiences for success.",
      color: "bg-blue-600",
      textColor: "text-white"
    },
    {
      title: "Theme Setting",
      description: "We create vibrant, intuitive and minimalist web",
      color: "bg-blue-600",
      textColor: "text-white"
    }
  ];

  return (
    <div className="bg-custom-dark-blue text-blue-900 py-16 px-8 ">
      <div className="max-w-6xl mx-auto bg-white py-16 px-8 rounded-t-3xl">
        <p className="text-sm uppercase mb-2">WHAT WE'RE OFFERING</p>
        <h2 className="text-4xl font-bold mb-4">Simplifying IT<br />for a complex world.</h2>
        <p className="mb-8 max-w-2xl">
          One fundamental aspect of IT services is infrastructure management.
          This involves the design, implementation, and maintenance of the
          hardware, software, networks, and servers.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </div>
  );
};

const ServiceCard = ({ title, description, color, textColor, icon }) => {
  return (
    <div className={`${color} ${textColor} p-6 rounded-lg flex flex-col justify-between h-full`}>
      {icon && <div className="mb-4">{icon}</div>}
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default ServicesSection;