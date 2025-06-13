import React from 'react';
import { useNavigate } from 'react-router-dom';

const Hero: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-rwanda-green-100 via-white to-rwanda-green-50 overflow-hidden">
      {/* Decorative Background Pattern */}
      <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMtOS45IDAtMTggOC4xLTE4IDE4czguMSAxOCAxOCAxOCAxOC04LjEgMTgtMTgtOC4xLTE4LTE4LTE4em0wIDJjOC44IDAgMTYgNy4yIDE2IDE2cy03LjIgMTYtMTYgMTYtMTYtNy4yLTE2LTE2IDcuMi0xNiAxNi0xNnoiIGZpbGw9IiMwMDAiLz48L2c+PC9zdmc+')] bg-repeat"></div>

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div className="space-y-10 text-left">
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-rwanda-green-100 text-rwanda-green-800 text-lg font-medium">
              <span className="mr-2 text-xl">🌿</span>
              Leading the Future of Agriculture in Rwanda
            </div>

            <h1 className="text-7xl lg:text-8xl font-bold text-gray-900">
              Innovating
              <span className="block text-rwanda-green-600 mt-4">Rwanda’s Agriculture</span>
            </h1>

            <p className="text-2xl text-gray-700 max-w-2xl">
              Discover how we empower farmers, build resilient supply chains, and promote sustainability with modern agri-tech and powerful partnerships.
            </p>

            <div className="flex flex-col sm:flex-row gap-6">
              <button
                onClick={() => navigate('/app')}
                className="px-10 py-5 bg-rwanda-green-600 text-white rounded-xl text-xl font-semibold hover:bg-rwanda-green-700 transition duration-200 shadow-md hover:shadow-xl"
              >
                Get Started
              </button>
              <button
                onClick={() => navigate('/about')}
                className="px-10 py-5 bg-white text-rwanda-green-600 border-2 border-rwanda-green-600 rounded-xl text-xl font-semibold hover:bg-gray-50 transition duration-200"
              >
                Learn More
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-12">
              <div>
                <div className="text-5xl font-bold text-rwanda-green-600">15+</div>
                <p className="text-lg text-gray-600">Warehouses</p>
              </div>
              <div>
                <div className="text-5xl font-bold text-rwanda-green-600">1,000+</div>
                <p className="text-lg text-gray-600">Farmers</p>
              </div>
              <div>
                <div className="text-5xl font-bold text-rwanda-green-600">24/7</div>
                <p className="text-lg text-gray-600">Support</p>
              </div>
            </div>
          </div>

          {/* Image Column */}
          <div className="relative">
            <img
              src="/hero-image.jpg"
              alt="RGCC Agricultural Operations"
              className="rounded-3xl shadow-2xl w-full max-w-4xl mx-auto"
              onError={(e) => {
                e.currentTarget.src = 'https://images.unsplash.com/photo-1592982537447-7440770cbfc9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1400&q=80';
              }}
            />

            {/* Highlight Badges */}
            <div className="absolute -top-8 -right-8 bg-white p-5 rounded-xl shadow-lg flex items-center space-x-4">
              <div className="w-16 h-16 bg-rwanda-green-100 rounded-full flex items-center justify-center">
                <span className="text-4xl">🌾</span>
              </div>
              <div>
                <p className="font-semibold text-xl text-gray-900">Quality Grains</p>
                <p className="text-lg text-gray-500">Certified Products</p>
              </div>
            </div>

            <div className="absolute -bottom-8 -left-8 bg-white p-5 rounded-xl shadow-lg flex items-center space-x-4">
              <div className="w-16 h-16 bg-rwanda-green-100 rounded-full flex items-center justify-center">
                <span className="text-4xl">🚚</span>
              </div>
              <div>
                <p className="font-semibold text-xl text-gray-900">Nationwide Reach</p>
                <p className="text-lg text-gray-500">Reliable Delivery</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Wave Divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          className="w-full h-20 text-white"
          viewBox="0 0 1440 100"
          preserveAspectRatio="none"
          fill="currentColor"
        >
          <path d="M0,50 C150,100 350,0 500,50 C650,100 850,0 1000,50 C1150,100 1350,0 1440,50 L1440,100 L0,100 Z" />
        </svg>
      </div>
    </div>
  );
};

export default Hero;
