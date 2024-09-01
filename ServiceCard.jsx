import React from 'react';

const ServiceCard = ({ title, description, icon }) => {
  return (
    <div className="bg-blue-800 p-6 rounded-lg">
      <div className="text-3xl mb-4">{icon}</div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default ServiceCard;