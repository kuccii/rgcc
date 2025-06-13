import React from 'react';

const Services: React.FC = () => {
  const services = [
    {
      icon: "🌾",
      title: "Trading of Grains & Cereals",
      description: "Comprehensive grain trading services with fair pricing",
      features: [
        "RGCC purchases Grains and cereals at cost of production",
        "Plus a fair margin to the farmer",
        "Grains & cereals when necessary at cost plus reasonable commercial margin"
      ],
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: "🏭",
      title: "Warehouse Management",
      description: "State-of-the-art storage and management solutions",
      features: [
        "Leases facilities from MINAGRI and others",
        "Warehouse Receipting system",
        "Management of National strategic reserves"
      ],
      color: "from-green-500 to-green-600"
    },
    {
      icon: "⚡",
      title: "Grain Handling",
      description: "Professional grain processing and handling services",
      features: [
        "Cleaning, drying, sorting, grading",
        "Bagging, labelling as commercial service",
        "To private sector, including farmers' cooperatives"
      ],
      color: "from-yellow-500 to-yellow-600"
    },
    {
      icon: "📊",
      title: "Other Services",
      description: "Comprehensive support for agricultural businesses",
      features: [
        "Market intelligence services offered to private sector",
        "Capacity building",
        "Business Advisory services",
        "Agribusiness skills development"
      ],
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: "🔮",
      title: "Warehouse Future Plans",
      description: "Innovative solutions for tomorrow's needs",
      features: [
        "RGCC will work through accredited and certified buying centres",
        "Run by the grain traders (including farmer's cooperatives)",
        "Operating under RGCC guidelines"
      ],
      color: "from-red-500 to-red-600"
    }
  ];

  return (
    <div className="relative py-24 bg-gradient-to-b from-rwanda-green-50 to-white">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMtOS45IDAtMTggOC4xLTE4IDE4czguMSAxOCAxOCAxOCAxOC04LjEgMTgtMTgtOC4xLTE4LTE4LTE4em0wIDJjOC44IDAgMTYgNy4yIDE2IDE2cy03LjIgMTYtMTYgMTYtMTYtNy4yLTE2LTE2IDcuMi0xNiAxNi0xNnoiIGZpbGw9IiMwMDAiLz48L2c+PC9zdmc+')] bg-repeat"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header Section */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-rwanda-green-100 text-rwanda-green-800 text-sm font-medium mb-6">
            <span className="mr-2">✨</span>
            What We Offer
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Our Comprehensive Services
          </h2>
          <p className="text-xl text-gray-600">
            Delivering excellence in agricultural services with innovative solutions and professional expertise
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              {/* Gradient Overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
              
              {/* Content */}
              <div className="p-8">
                <div className="w-16 h-16 bg-rwanda-green-100 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl">{service.icon}</span>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 mb-6">
                  {service.description}
                </p>
                
                <ul className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <span className="flex-shrink-0 w-5 h-5 text-rwanda-green-600 mr-2">•</span>
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Hover Effect Border */}
              <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${service.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300`}></div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <button className="inline-flex items-center px-8 py-4 bg-rwanda-green-600 text-white rounded-lg font-semibold hover:bg-rwanda-green-700 transition-colors duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
            <span className="mr-2">📞</span>
            Contact Us for More Information
          </button>
        </div>
      </div>
    </div>
  );
};

export default Services; 