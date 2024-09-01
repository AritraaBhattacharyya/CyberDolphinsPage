import React from 'react';

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center p-4 bg-custom-dark-blue text-white">
      <div className="text-2xl font-bold">Cyber Dolphins</div>
      <div className="space-x-4">
        <a href="#" className="hover:text-blue-300">Home</a>
        <a href="#" className="hover:text-blue-300">Our Approach</a>
        <a href="#" className="hover:text-blue-300">Portfolio</a>
        <a href="#" className="hover:text-blue-300">Blog</a>
        <a href="#" className="hover:text-blue-300">Contact</a>
      </div>
    </nav>
  );
};

export default Navbar;
