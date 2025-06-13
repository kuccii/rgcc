import React from 'react';

const Contact: React.FC = () => {
  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">GET IN TOUCH</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="flex items-center justify-center space-x-2">
              <span className="text-gray-400">📍</span>
              <p className="text-gray-600">Remera, Airport Road RN3, Mathias House, 3rd floor next to Prince House Kigali-Rwanda</p>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <span className="text-gray-400">📞</span>
              <p className="text-gray-600">0788382552</p>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <span className="text-gray-400">✉️</span>
              <p className="text-gray-600">info@rgccltd.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact; 