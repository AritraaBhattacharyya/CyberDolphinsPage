import React from 'react';
import { Server, Headset, Shield, Globe, Smartphone, Cloud } from 'lucide-react'; // Updated icons

const ModernSolution = () => {
  const services = [
    { icon: <Server className="w-8 h-8" />, title: "Managed Services", description: "Porta felis euismod semper eget lacinia odio sem nec elit." },
    { icon: <Headset className="w-8 h-8" />, title: "IT Consulting & Advisory", description: "Nullam quis risus eget urna mollis ornare vel eu leo." },
    { icon: <Shield className="w-8 h-8" />, title: "Cyber Security", description: "Aenean lacinia bibendum nulla sed consectetur eget lacinia odio." },
    { icon: <Globe className="w-8 h-8" />, title: "Web Development", description: "Nulla vitae elit libero, a pharetra augue sem nec elit." },
    { icon: <Smartphone className="w-8 h-8" />, title: "Mobile Development", description: "Maecenas sed diam eget risus varius blandit sit amet non magna." },
    { icon: <Cloud className="w-8 h-8" />, title: "Cloud Services", description: "Sed posuere consectetur est at lobortis diam eget risus varius." },
  ];

  return (
    <div className="bg-custom-dark-blue text-white py-16 px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">A Modern Solution to an Old Problem</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="bg-white text-blue-900 rounded-full p-4 mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{service.title}</h3>
              <p className="text-sm">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ModernSolution;
