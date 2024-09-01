import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const StartupNews = () => {
  const mainArticle = {
    image: "/api/placeholder/400/300", // Replace with actual image URL
    title: "OpenAI launches new alignment division to tackle risks of superintelligent AI",
    description: "Small UK merchants, businesses, and other enterprises can now use Tap to Pay on iPhone to accept contactless payments with Apple devices.",
    tags: ["Collaboration Tools", "Smart Reminders"]
  };

  const smallArticles = [
    {
      title: "Bluebase launches Tap to Pay on smartphone for international and domestic business",
      description: "Small UK merchants, businesses, and other enterprises can now use Tap to Pay on iPhone to accept payment terminals at point of sale.",
      tags: ["Collaboration Tools", "Smart Reminders", "Requirement", "Task Management"]
    },
    {
      title: "Google Bard launches in EU, overcoming data privacy concerns in the region",
      description: "Small UK merchants, businesses, and other enterprises can now use Tap to Pay on iPhone to accept payment terminals at point of sale.",
      tags: ["Collaboration Tools", "Smart Reminders", "Requirement"]
    }
  ];

  return (
    <div className="bg-custom-dark-blue text-white py-16 px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-8">Read daily news about startup companies</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 bg-blue-800 rounded-lg overflow-hidden">
            <div className="flex flex-col md:flex-row">
              <img src={mainArticle.image} alt="OpenAI" className="w-full md:w-1/2 h-48 md:h-auto object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{mainArticle.title}</h3>
                <p className="text-sm mb-4">{mainArticle.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {mainArticle.tags.map((tag, index) => (
                    <span key={index} className="bg-blue-700 text-xs px-2 py-1 rounded">{tag}</span>
                  ))}
                </div>
                <button className="text-blue-300 flex items-center">
                  Read More <ArrowUpRight className="w-4 h-4 ml-1" />
                </button>
              </div>
            </div>
          </div>
          
          <div className="space-y-6">
            {smallArticles.map((article, index) => (
              <div key={index} className="bg-white rounded-lg p-6 text-black">
                <h3 className="text-lg font-semibold mb-2">{article.title}</h3>
                <p className="text-sm mb-4">{article.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {article.tags.map((tag, index) => (
                    <span key={index} className="bg-blue-700 text-xs px-2 py-1 rounded">{tag}</span>
                  ))}
                </div>
                <button className="text-black flex items-center">
                  Read More <ArrowUpRight className="w-4 h-4 ml-1" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StartupNews;