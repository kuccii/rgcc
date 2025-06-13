import React from 'react';

const Mission: React.FC = () => {
  const missionPoints = [
    {
      icon: "🌾",
      title: "Agricultural Excellence",
      description: "Promoting sustainable farming practices and ensuring the highest quality of grains and cereals."
    },
    {
      icon: "🤝",
      title: "Community Impact",
      description: "Empowering local farmers and strengthening the agricultural supply chain across Rwanda."
    },
    {
      icon: "📈",
      title: "Market Growth",
      description: "Driving economic development through innovative agricultural solutions and strategic partnerships."
    }
  ];

  return (
    <div className="relative py-24 bg-gradient-to-b from-white to-rwanda-green-50">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMtOS45IDAtMTggOC4xLTE4IDE4czguMSAxOCAxOCAxOCAxOC04LjEgMTgtMTgtOC4xLTE4LTE4LTE4em0wIDJjOC44IDAgMTYgNy4yIDE2IDE2cy03LjIgMTYtMTYgMTYtMTYtNy4yLTE2LTE2IDcuMi0xNiAxNi0xNnoiIGZpbGw9IiMwMDAiLz48L2c+PC9zdmc+')] bg-repeat"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Main Mission Statement */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-rwanda-green-100 text-rwanda-green-800 text-sm font-medium mb-6">
            <span className="mr-2">🎯</span>
            Our Commitment
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Building Rwanda's Agricultural Future
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            RGCC is dedicated to becoming a cornerstone of Rwanda's crop marketing chain, 
            supporting initiatives throughout the entire agricultural value chain and 
            strengthening vital connections between farmers, markets, and consumers.
          </p>
        </div>

        {/* Mission Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {missionPoints.map((point, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1"
            >
              <div className="w-16 h-16 bg-rwanda-green-100 rounded-full flex items-center justify-center mb-6">
                <span className="text-3xl">{point.icon}</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {point.title}
              </h3>
              <p className="text-gray-600">
                {point.description}
              </p>
            </div>
          ))}
        </div>

        {/* Vision Statement */}
        <div className="mt-20 bg-rwanda-green-600 rounded-2xl p-8 md:p-12 text-white">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
            <p className="text-lg text-rwanda-green-50">
              To be the leading force in transforming Rwanda's agricultural sector, 
              creating sustainable value chains that benefit farmers, businesses, 
              and the nation as a whole.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mission; 