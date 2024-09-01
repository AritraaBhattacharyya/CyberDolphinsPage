import React from 'react';
import { Fish } from 'lucide-react'; // Assuming 'Fish' is an available icon

const CyberDolphinsLanding = () => {
  return (
    <div className="bg-custom-dark-blue text-white min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <header className="flex justify-between items-center mb-12">
          <div className="flex items-center">
            <Fish className="text-cyan-400 mr-2" size={40} /> {/* Using Fish icon as a placeholder */}
            <h1 className="text-2xl font-bold">CYBER DOLPHINS</h1>
          </div>
          <button className="bg-blue-600 px-4 py-2 rounded">Get Started</button>
        </header>

        <main className="flex flex-col md:flex-row justify-between items-center mb-16">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h2 className="text-3xl font-bold mb-4">We provide the expertise and support to propel your business forward.</h2>
            <button className="bg-blue-600 px-6 py-3 rounded text-lg">Get Started</button>
          </div>
          <div className="md:w-1/2">
            <div className="bg-navy-800 p-6 rounded-lg">
              <h3 className="text-2xl font-bold mb-4">Let's get started on something great</h3>
              <p className="mb-4">Our team of IT experts looks forward to meeting with you and providing valuable insights tailored to your business.</p>
              <button className="bg-blue-600 px-4 py-2 rounded">Get an appointment now</button>
              <div className="flex justify-between mt-6 text-sm">
                <div>
                  <p className="font-bold">2 Mins</p>
                  <p>Response Time</p>
                </div>
                <div>
                  <p className="font-bold">99%</p>
                  <p>Client Satisfaction</p>
                </div>
                <div>
                  <p className="font-bold">22+ Years</p>
                  <p>Field Experience</p>
                </div>
              </div>
            </div>
          </div>
        </main>

        <footer className="text-sm">
          <div className="grid grid-cols-2 md:grid-cols-6 gap-8">
            <div>
              <h4 className="font-bold mb-2">Services</h4>
              <ul>
                <li>IT Support</li>
                <li>Web Design</li>
                <li>Development</li>
                <li>Cloud Things</li>
                <li>E-Commerce</li>
                <li>CRM Solutions</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-2">Company</h4>
              <ul>
                <li>Blog</li>
                <li>About Us</li>
                <li>Partners</li>
                <li>Careers</li>
                <li>Events</li>
                <li>Team</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-2">Product</h4>
              <ul>
                <li>Case Studies</li>
                <li>Our Pricing</li>
                <li>Features</li>
                <li>Overview</li>
                <li>New Releases</li>
                <li>Solutions</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-2">Our Fields</h4>
              <ul>
                <li>Healthcare</li>
                <li>Banks</li>
                <li>Logistics</li>
                <li>Supermarkets</li>
                <li>Industries</li>
                <li>Hotels</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-2">Legal</h4>
              <ul>
                <li>License</li>
                <li>Settings</li>
                <li>Cookies</li>
                <li>Document</li>
                <li>Terms</li>
                <li>Privacy</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-2">Phone</h4>
              <p>+1 455-1482-236</p>
              <p>+1 918-740-7555</p>
              <h4 className="font-bold mt-4 mb-2">Mail</h4>
              <p>info@mail.com</p>
              <p>Annemariey@mail.com</p>
            </div>
          </div>
          <div className="mt-8 text-center">
            <p>&copy; 2024 All rights reserved by CyberDolphins</p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default CyberDolphinsLanding;
