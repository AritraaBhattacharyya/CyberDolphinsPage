import React from 'react';

const ContactSection = () => {
  const stats = [
    { value: '10+', label: 'Years', subLabel: 'Field Experience' },
    { value: '950+', label: 'Projects', subLabel: 'Done Around World' },
    { value: '99%', label: '', subLabel: 'Client Satisfaction' },
    { value: '1995+', label: 'Year', subLabel: 'Established On' },
    { value: '2', label: 'Mins', subLabel: 'Response Time' },
  ];

  const socialLinks = ['Dribbble', 'Twitter', 'Instagram', 'LinkedIn'];

  return (
    <div className="bg-custom-dark-blue py-16 px-8">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Contact Form */}
        <div className="bg-white rounded-lg p-8 col-span-1 md:col-span-2">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Lets get in touch</h2>
          <p className="text-gray-600 mb-6">
            You can reach us anytime via <span className="text-orange-500">info@cyberdolphins.com</span>
          </p>
          <form>
            <div className="grid grid-cols-2 gap-4 mb-4">
              <input className="border p-2 rounded bg-white" type="text" placeholder="First Name" />
              <input className="border p-2 rounded bg-white" type="text" placeholder="Last Name" />
            </div>
            <input className="border p-2 rounded w-full mb-4 bg-white" type="email" placeholder="Email" />
            <div className="grid grid-cols-2 gap-4 mb-4">
              <input className="border p-2 rounded bg-white" type="tel" placeholder="Phone Number" />
              <input className="border p-2 rounded bg-white" type="text" placeholder="Country" />
            </div>
            <textarea className="border p-2 rounded w-full mb-4 bg-white" rows="4" placeholder="Message"></textarea>
            <div className="mb-4 bg-white">
              <input type="checkbox" id="terms" className="mr-2" />
              <label htmlFor="terms" className="text-sm text-gray-600">You agree to our terms and conditions.</label>
            </div>
            <button className="bg-blue-600 text-white py-2 px-4 rounded w-full">Get Started</button>
          </form>
        </div>

        {/* Stats and Contact Info */}
        <div className="space-y-8">
          <div className="bg-white rounded-lg p-8">
            {stats.map((stat, index) => (
              <div key={index} className="mb-4">
                <div className="text-2xl font-bold text-gray-800">{stat.value}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
                <div className="text-sm text-orange-500">{stat.subLabel}</div>
              </div>
            ))}
          </div>
          <div className="bg-white rounded-lg p-8">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Contact Info</h3>
            <p className="text-gray-600 mb-2">+1 00000000</p>
            <p className="text-gray-600 mb-4">CTO@mail.com</p>
            <h4 className="text-lg font-semibold text-gray-800 mb-2">Visit our office</h4>
            <p className="text-gray-600 mb-4">
              16/5 Dixon Street<br />
              Edinburgh, Scotland<br />
              Singapore
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <div key={index} className="w-3 h-3 bg-blue-500 rounded-full"></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;