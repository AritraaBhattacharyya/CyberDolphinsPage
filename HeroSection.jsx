import React from 'react';
import wallpaper from '@/assets/wallpaper2.jpeg';
import '../index.css'; // Make sure to import the custom CSS file

const HeroSection = () => {
  return (
    <div className="relative h-screen flex items-center justify-center">
      <img src={wallpaper} alt="Underwater scene" className="absolute inset-0 w-full h-full object-cover custom-blur" />
      <div className="relative z-10 text-center">
        <h1 className="text-5xl font-bold mb-4">We manage your IT, so you can manage your business.</h1>
        <p className="text-xl mb-8">Take charge of your business continuity with innovative IT solutions</p>
        <div className="space-x-4">
          <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded">
            Get Free Consultation
          </button>
          <button className="border border-white hover:bg-white hover:text-blue-900 text-white font-bold py-2 px-4 rounded">
            Explore
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
