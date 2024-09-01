import React from 'react';
import { Zap, Server, Link, Code } from 'lucide-react';

const FeaturesList = () => {
  const features = [
    {
      icon: <Zap className="w-6 h-6 text-white" />,
      title: "Design and UX that ensures your app will be loved and used",
      description: "Quisque nec consectetur erat. Duis tellus ante, sodales sed molestie at, sagittis at neque. Quisque condimentum libero vitae. Mauris tellus sem, ultrices varius nisl at, semperla lacinia mauris.",
      color: "bg-indigo-600"
    },
    {
      icon: <Server className="w-6 h-6 text-white" />,
      title: "Enterprise-grade development secures reliability and quality",
      description: "Praesent tortor nulla, ullamcorper vel ante at, varius tincidunt ipsum. Cras vitae consectetur arcu. Proin at velit vel risus elementum accumsan sed non neque. Aenean risus.",
      color: "bg-teal-500"
    },
    {
      icon: <Link className="w-6 h-6 text-white" />,
      title: "A proven and tested process guarantees your success",
      description: "Aliquam bibendum velit at ante cursus, et efficitur lectus rutrum. Maecenas ac convallis lorem, non ultrices sem. Duis erit metus, ullamcorper sed ante sed, viverra bibendum neque.",
      color: "bg-indigo-600"
    },
    {
      icon: <Code className="w-6 h-6 text-white" />,
      title: "Start-to-end app development agency",
      description: "Cras imperdiet faucibus sem, a dignissim urna feugiat sed. Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque posuere vestibulum turpis, ut efficitur erat tristique sed.",
      color: "bg-indigo-600"
    }
  ];

  return (
    <div className="bg-white py-16 px-8 rounded-3xl mx-4 my-8">
      <div className="max-w-6xl mx-auto flex">
        <div className="w-1/2 relative">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-3/4 h-4/5 bg-gray-200 rounded-lg transform -rotate-6"></div>
            <div className="w-3/4 h-4/5 bg-gray-300 rounded-lg absolute transform rotate-6"></div>
            <div className="w-3/4 h-4/5 bg-gray-400 rounded-lg absolute"></div>
          </div>
        </div>
        <div className="w-1/2 space-y-8">
          {features.map((feature, index) => (
            <div key={index} className="flex items-start">
              <div className={`${feature.color} rounded-lg p-2 mr-4 flex-shrink-0`}>
                {feature.icon}
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-600">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturesList;