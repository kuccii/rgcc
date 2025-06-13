import React from "react";

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
    <section className="relative py-24 bg-gradient-to-b from-rwanda-green-50 to-white">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMtOS45IDAtMTggOC4xLTE4IDE4czguMSAxOCAxOCAxOCAxOC04LjEgMTgtMTgtOC4xLTE4LTE4LTE4em0wIDJjOC44IDAgMTYgNy4yIDE2IDE2cy03LjIgMTYtMTYgMTYtMTYtNy4yLTE2LTE2IDcuMi0xNiAxNi0xNnoiIGZpbGw9IiMwMDAiLz48L2c+PC9zdmc+')] bg-repeat"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-rwanda-green-100 text-rwanda-green-800 text-sm font-medium mb-6 animate-fade-in">
            <span className="mr-2">✨</span>
            What We Offer
          </div>
          <h2 className="text-4xl font-extrabold text-gray-900 mb-4 tracking-tight">
            Our Comprehensive Services
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Delivering excellence in agricultural services with innovative solutions and professional expertise.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 overflow-hidden"
              role="region"
              aria-labelledby={`service-${index}`}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-3xl`}></div>
              <div className="relative z-10">
                <div className="w-14 h-14 flex items-center justify-center bg-rwanda-green-100 text-3xl rounded-xl mb-6 group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <h3 id={`service-${index}`} className="text-xl font-semibold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-5">{service.description}</p>
                <ul className="space-y-2 text-sm text-gray-700">
                  {service.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-start">
                      <span className="text-rwanda-green-600 mr-2 mt-1">•</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <div className={`absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r ${service.color} scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left`}></div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-20 text-center">
          <button className="inline-flex items-center px-8 py-4 bg-rwanda-green-600 text-white rounded-xl font-semibold hover:bg-rwanda-green-700 transition duration-300 shadow-md hover:shadow-lg">
            <span className="mr-2">📞</span>
            Contact Us for More Information
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;
