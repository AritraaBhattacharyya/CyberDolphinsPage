import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    { company: "Microsoft", text: "It's very easy to create stylish and beautiful prototypes for your future projects, both graphical and dynamic." },
    { company: "Apple Inc", text: "It's very easy to create stylish and beautiful prototypes for your future projects, both graphical and dynamic." },
    { company: "Google", text: "It's very easy to create stylish and beautiful prototypes for your future projects, both graphical and dynamic." },
    // Add more testimonials as needed
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="bg-custom-dark-blue text-white py-16 px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Testimonials</h2>
        <div className="relative">
          <button onClick={prevTestimonial} className="absolute left-0 top-1/2 transform -translate-y-1/2">
            <ChevronLeft className="w-8 h-8" />
          </button>
          <div className="text-center px-12">
            <h3 className="text-xl font-bold mb-4">{testimonials[currentIndex].company}</h3>
            <p className="italic">{testimonials[currentIndex].text}</p>
          </div>
          <button onClick={nextTestimonial} className="absolute right-0 top-1/2 transform -translate-y-1/2">
            <ChevronRight className="w-8 h-8" />
          </button>
        </div>
        <div className="flex justify-center mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 rounded-full mx-1 ${
                index === currentIndex ? 'bg-white' : 'bg-gray-500'
              }`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;