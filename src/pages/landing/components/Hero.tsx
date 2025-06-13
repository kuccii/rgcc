import React from 'react';
import { useNavigate } from 'react-router-dom';

const Hero: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-rwanda-green-50 to-white">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMtOS45IDAtMTggOC4xLTE4IDE4czguMSAxOCAxOCAxOCAxOC04LjEgMTgtMTgtOC4xLTE4LTE4LTE4em0wIDJjOC44IDAgMTYgNy4yIDE2IDE2cy03LjIgMTYtMTYgMTYtMTYtNy4yLTE2LTE2IDcuMi0xNiAxNi0xNnoiIGZpbGw9IiMwMDAiLz48L2c+PC9zdmc+')] bg-repeat"></div>
      </div>

      {/* Main Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="text-left space-y-8">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-rwanda-green-100 text-rwanda-green-800 text-sm font-medium">
              <span className="mr-2">🌾</span>
              Rwanda's Leading Agricultural Corporation
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Transforming Rwanda's
              <span className="block text-rwanda-green-600 mt-2">Agricultural Future</span>
            </h1>
            
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl">
              Empowering farmers, strengthening supply chains, and building a sustainable future for Rwanda's agricultural sector through innovative solutions and strategic partnerships.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => navigate('/app')}
                className="px-8 py-4 bg-rwanda-green-600 text-white rounded-lg font-semibold hover:bg-rwanda-green-700 transition-colors duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                Get Started
              </button>
              <button
                onClick={() => navigate('/app')}
                className="px-8 py-4 bg-white text-rwanda-green-600 rounded-lg font-semibold hover:bg-gray-50 transition-colors duration-200 border-2 border-rwanda-green-600"
              >
                Learn More
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8">
              <div>
                <div className="text-3xl font-bold text-rwanda-green-600">15+</div>
                <div className="text-sm text-gray-600">Warehouses</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-rwanda-green-600">1000+</div>
                <div className="text-sm text-gray-600">Farmers</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-rwanda-green-600">24/7</div>
                <div className="text-sm text-gray-600">Support</div>
              </div>
            </div>
          </div>

          {/* Right Column - Image/Illustration */}
          <div className="relative">
            <div className="relative z-10">
              <img
                src="/hero-image.jpg"
                alt="RGCC Agricultural Operations"
                className="rounded-2xl shadow-2xl"
                onError={(e) => {
                  e.currentTarget.src = 'https://images.unsplash.com/photo-1592982537447-7440770cbfc9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80';
                }}
              />
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-6 -right-6 bg-white p-4 rounded-xl shadow-lg">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-rwanda-green-100 rounded-full flex items-center justify-center">
                  <span className="text-2xl">🌾</span>
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Quality Grains</div>
                  <div className="text-sm text-gray-600">Certified Products</div>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-rwanda-green-100 rounded-full flex items-center justify-center">
                  <span className="text-2xl">🚚</span>
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Nationwide</div>
                  <div className="text-sm text-gray-600">Delivery Network</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Wave Divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          className="w-full h-16 text-white"
          viewBox="0 0 1440 100"
          preserveAspectRatio="none"
          fill="currentColor"
        >
          <path
            d="M0,50 C150,100 350,0 500,50 C650,100 850,0 1000,50 C1150,100 1350,0 1440,50 L1440,100 L0,100 Z"
          />
        </svg>
      </div>
    </div>
  );
};

export default Hero; 