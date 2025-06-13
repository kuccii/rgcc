import React, { useState } from 'react';
import { 
  TrendingUp, 
  TrendingDown, 
  Minus, 
  MapPin, 
  Calendar,
  Bell,
  Download,
  RefreshCcw
} from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from 'recharts';
import { mockMarketPrices } from '../data/mockData';

const MarketInformation: React.FC = () => {
  const [selectedLocation, setSelectedLocation] = useState('all');
  const [selectedTimeframe, setSelectedTimeframe] = useState('7days');

  const locations = ['all', 'Kigali', 'Nyagatare', 'Musanze', 'Bugesera', 'Huye'];
  const timeframes = [
    { value: '7days', label: '7 Days' },
    { value: '1month', label: '1 Month' },
    { value: '3months', label: '3 Months' },
    { value: '1year', label: '1 Year' }
  ];

  // Mock historical data
  const historicalData = [
    { date: 'Dec 8', maize: 375, beans: 840, rice: 930, wheat: 650 },
    { date: 'Dec 9', maize: 378, beans: 845, rice: 925, wheat: 655 },
    { date: 'Dec 10', maize: 380, beans: 850, rice: 920, wheat: 660 },
    { date: 'Dec 11', maize: 382, beans: 848, rice: 915, wheat: 658 },
    { date: 'Dec 12', maize: 385, beans: 852, rice: 922, wheat: 662 },
    { date: 'Dec 13', maize: 383, beans: 855, rice: 918, wheat: 665 },
    { date: 'Dec 14', maize: 387, beans: 858, rice: 925, wheat: 668 },
  ];

  const volumeData = [
    { location: 'Kigali', volume: 1250 },
    { location: 'Nyagatare', volume: 890 },
    { location: 'Musanze', volume: 650 },
    { location: 'Bugesera', volume: 420 },
    { location: 'Huye', volume: 340 },
  ];

  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case 'up': return <TrendingUp className="h-4 w-4 text-green-500" />;
      case 'down': return <TrendingDown className="h-4 w-4 text-red-500" />;
      default: return <Minus className="h-4 w-4 text-gray-500" />;
    }
  };

  const getTrendColor = (trend: string) => {
    switch (trend) {
      case 'up': return 'text-green-600 bg-green-50';
      case 'down': return 'text-red-600 bg-red-50';
      default: return 'text-gray-600 bg-gray-50';
    }
  };

  const getGrainIcon = (grainType: string) => {
    switch (grainType) {
      case 'maize': return '🌽';
      case 'beans': return '🫘';
      case 'rice': return '🍚';
      case 'wheat': return '🌾';
      case 'sorghum': return '🌾';
      default: return '🌾';
    }
  };

  return (
    <div className="p-6 space-y-6 animate-fade-in">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Market Information</h2>
          <p className="text-gray-600">Real-time prices and market trends across Rwanda</p>
        </div>
        <div className="flex space-x-3">
          <button className="flex items-center space-x-2 border border-gray-300 text-gray-700 px-4 py-2 rounded-lg font-medium hover:bg-gray-50 transition-colors">
            <Bell className="h-4 w-4" />
            <span>Price Alerts</span>
          </button>
          <button className="flex items-center space-x-2 border border-gray-300 text-gray-700 px-4 py-2 rounded-lg font-medium hover:bg-gray-50 transition-colors">
            <Download className="h-4 w-4" />
            <span>Export Data</span>
          </button>
          <button className="flex items-center space-x-2 bg-rwanda-green-500 text-white px-4 py-2 rounded-lg font-medium hover:bg-rwanda-green-600 transition-colors">
            <RefreshCcw className="h-4 w-4" />
            <span>Refresh</span>
          </button>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
            <select
              value={selectedLocation}
              onChange={(e) => setSelectedLocation(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-rwanda-green-500 focus:border-transparent"
            >
              {locations.map(location => (
                <option key={location} value={location}>
                  {location === 'all' ? 'All Locations' : location}
                </option>
              ))}
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Timeframe</label>
            <select
              value={selectedTimeframe}
              onChange={(e) => setSelectedTimeframe(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-rwanda-green-500 focus:border-transparent"
            >
              {timeframes.map(timeframe => (
                <option key={timeframe.value} value={timeframe.value}>
                  {timeframe.label}
                </option>
              ))}
            </select>
          </div>
          
          <div className="flex items-end">
            <div className="bg-rwanda-green-50 p-2 rounded-lg">
              <p className="text-sm text-rwanda-green-600">Last Updated</p>
              <p className="font-semibold text-rwanda-green-800">
                {new Date().toLocaleTimeString()}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Current Prices Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {mockMarketPrices.map((price) => (
          <div key={price.id} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-3">
                <span className="text-2xl">{getGrainIcon(price.grainType)}</span>
                <div>
                  <h3 className="font-semibold text-gray-900 capitalize">{price.grainType}</h3>
                  <div className="flex items-center text-sm text-gray-500">
                    <MapPin className="h-3 w-3 mr-1" />
                    {price.location}
                  </div>
                </div>
              </div>
              <div className={`flex items-center px-2 py-1 rounded-full ${getTrendColor(price.trend)}`}>
                {getTrendIcon(price.trend)}
              </div>
            </div>
            
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Average</span>
                <span className="text-lg font-bold text-gray-900">
                  {price.averagePrice} {price.currency}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">High</span>
                <span className="text-sm font-medium text-gray-700">
                  {price.highPrice} {price.currency}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Low</span>
                <span className="text-sm font-medium text-gray-700">
                  {price.lowPrice} {price.currency}
                </span>
              </div>
            </div>
            
            <div className="mt-4 pt-4 border-t border-gray-100">
              <div className="flex items-center text-xs text-gray-500">
                <Calendar className="h-3 w-3 mr-1" />
                Updated: {new Date(price.date).toLocaleDateString()}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Price Trends Chart */}
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-gray-900">Price Trends (RWF/kg)</h3>
            <TrendingUp className="h-5 w-5 text-rwanda-green-500" />
          </div>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={historicalData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="date" stroke="#6b7280" fontSize={12} />
              <YAxis stroke="#6b7280" fontSize={12} />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: 'white', 
                  border: '1px solid #e5e7eb',
                  borderRadius: '8px',
                  fontSize: '12px'
                }}
              />
              <Line type="monotone" dataKey="maize" stroke="#2D5A27" strokeWidth={2} name="Maize" />
              <Line type="monotone" dataKey="beans" stroke="#F59E0B" strokeWidth={2} name="Beans" />
              <Line type="monotone" dataKey="rice" stroke="#8B4513" strokeWidth={2} name="Rice" />
              <Line type="monotone" dataKey="wheat" stroke="#059669" strokeWidth={2} name="Wheat" />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Trading Volume by Location */}
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-gray-900">Trading Volume (tons)</h3>
            <BarChart className="h-5 w-5 text-rwanda-gold-500" />
          </div>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={volumeData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="location" stroke="#6b7280" fontSize={12} />
              <YAxis stroke="#6b7280" fontSize={12} />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: 'white', 
                  border: '1px solid #e5e7eb',
                  borderRadius: '8px',
                  fontSize: '12px'
                }}
              />
              <Bar dataKey="volume" fill="#2D5A27" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Market Insights */}
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
        <h3 className="text-lg font-semibold text-gray-900 mb-6">Market Insights & Forecast</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-green-50 rounded-lg p-4">
            <div className="flex items-center mb-2">
              <TrendingUp className="h-5 w-5 text-green-600 mr-2" />
              <h4 className="font-medium text-green-800">Positive Outlook</h4>
            </div>
            <p className="text-sm text-green-700">
              Maize prices expected to rise 5-8% due to increased export demand and favorable weather conditions.
            </p>
          </div>
          
          <div className="bg-yellow-50 rounded-lg p-4">
            <div className="flex items-center mb-2">
              <Minus className="h-5 w-5 text-yellow-600 mr-2" />
              <h4 className="font-medium text-yellow-800">Stable Market</h4>
            </div>
            <p className="text-sm text-yellow-700">
              Bean prices remain stable with consistent supply from northern provinces matching regional demand.
            </p>
          </div>
          
          <div className="bg-blue-50 rounded-lg p-4">
            <div className="flex items-center mb-2">
              <TrendingDown className="h-5 w-5 text-blue-600 mr-2" />
              <h4 className="font-medium text-blue-800">Seasonal Adjustment</h4>
            </div>
            <p className="text-sm text-blue-700">
              Rice prices may decline 3-5% as new harvest season approaches and inventory levels increase.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarketInformation;