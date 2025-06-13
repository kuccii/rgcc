import React from 'react';
import { 
  TrendingUp, 
  TrendingDown, 
  Users, 
  Warehouse, 
  ShoppingCart, 
  Award,
  ArrowUpRight,
  ArrowDownRight
} from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from 'recharts';

const Dashboard: React.FC = () => {
  const stats = [
    {
      title: 'Total Grain Volume',
      value: '2,450 tons',
      change: '+12.5%',
      trend: 'up',
      icon: Warehouse,
      color: 'rwanda-green'
    },
    {
      title: 'Active Traders',
      value: '1,234',
      change: '+8.2%',
      trend: 'up',
      icon: Users,
      color: 'rwanda-gold'
    },
    {
      title: 'Monthly Transactions',
      value: 'RWF 45.2M',
      change: '-2.1%',
      trend: 'down',
      icon: ShoppingCart,
      color: 'blue'
    },
    {
      title: 'Quality Certificates',
      value: '189',
      change: '+15.3%',
      trend: 'up',
      icon: Award,
      color: 'green'
    }
  ];

  const priceData = [
    { month: 'Jul', maize: 380, beans: 850, rice: 920 },
    { month: 'Aug', maize: 385, beans: 855, rice: 915 },
    { month: 'Sep', maize: 390, beans: 860, rice: 925 },
    { month: 'Oct', maize: 385, beans: 845, rice: 930 },
    { month: 'Nov', maize: 380, beans: 850, rice: 925 },
    { month: 'Dec', maize: 385, beans: 855, rice: 920 },
  ];

  const volumeData = [
    { grain: 'Maize', volume: 850 },
    { grain: 'Beans', volume: 620 },
    { grain: 'Rice', volume: 480 },
    { grain: 'Wheat', volume: 320 },
    { grain: 'Sorghum', volume: 180 },
  ];

  return (
    <div className="p-6 space-y-6 animate-fade-in">
      {/* Welcome Section */}
      <div className="bg-gradient-to-r from-rwanda-green-500 to-rwanda-green-600 rounded-xl p-6 text-white">
        <h2 className="text-2xl font-bold mb-2">Welcome to RGCC Digital Platform</h2>
        <p className="text-rwanda-green-100 mb-4">
          Your comprehensive solution for grain and cereal trading in Rwanda
        </p>
        <div className="flex flex-wrap gap-4">
          <div className="bg-white/20 backdrop-blur-sm rounded-lg p-3">
            <p className="text-sm opacity-90">Current Season</p>
            <p className="font-semibold">Harvest 2024</p>
          </div>
          <div className="bg-white/20 backdrop-blur-sm rounded-lg p-3">
            <p className="text-sm opacity-90">Market Status</p>
            <p className="font-semibold">Active</p>
          </div>
          <div className="bg-white/20 backdrop-blur-sm rounded-lg p-3">
            <p className="text-sm opacity-90">Weather</p>
            <p className="font-semibold">Favorable</p>
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          const isPositive = stat.trend === 'up';
          
          return (
            <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between mb-4">
                <div className={`p-3 rounded-lg bg-${stat.color}-50`}>
                  <Icon className={`h-6 w-6 text-${stat.color}-600`} />
                </div>
                <div className={`flex items-center text-sm font-medium ${
                  isPositive ? 'text-green-600' : 'text-red-600'
                }`}>
                  {isPositive ? <ArrowUpRight className="h-4 w-4" /> : <ArrowDownRight className="h-4 w-4" />}
                  {stat.change}
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</h3>
              <p className="text-gray-600 text-sm">{stat.title}</p>
            </div>
          );
        })}
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Price Trends */}
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-gray-900">Price Trends (RWF/kg)</h3>
            <TrendingUp className="h-5 w-5 text-rwanda-green-500" />
          </div>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={priceData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="month" stroke="#6b7280" />
              <YAxis stroke="#6b7280" />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: 'white', 
                  border: '1px solid #e5e7eb',
                  borderRadius: '8px'
                }}
              />
              <Line type="monotone" dataKey="maize" stroke="#2D5A27" strokeWidth={2} name="Maize" />
              <Line type="monotone" dataKey="beans" stroke="#F59E0B" strokeWidth={2} name="Beans" />
              <Line type="monotone" dataKey="rice" stroke="#8B4513" strokeWidth={2} name="Rice" />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Volume by Grain Type */}
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-gray-900">Trading Volume (tons)</h3>
            <Warehouse className="h-5 w-5 text-rwanda-gold-500" />
          </div>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={volumeData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="grain" stroke="#6b7280" />
              <YAxis stroke="#6b7280" />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: 'white', 
                  border: '1px solid #e5e7eb',
                  borderRadius: '8px'
                }}
              />
              <Bar dataKey="volume" fill="#2D5A27" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
        <h3 className="text-lg font-semibold text-gray-900 mb-6">Recent Activity</h3>
        <div className="space-y-4">
          {[
            {
              action: 'New grain listing added',
              details: '50 tons of Grade A maize from Nyagatare District',
              time: '2 hours ago',
              type: 'listing'
            },
            {
              action: 'Contract signed',
              details: 'Jean Baptiste Mukamana - 100 tons maize delivery',
              time: '4 hours ago',
              type: 'contract'
            },
            {
              action: 'Quality certificate issued',
              details: 'Batch QC-2024-001 - Grade A certification',
              time: '6 hours ago',
              type: 'quality'
            },
            {
              action: 'Warehouse inventory updated',
              details: 'RGCC Kigali Central - 25 tons beans received',
              time: '8 hours ago',
              type: 'warehouse'
            }
          ].map((activity, index) => (
            <div key={index} className="flex items-start space-x-3 p-3 hover:bg-gray-50 rounded-lg transition-colors">
              <div className={`w-2 h-2 rounded-full mt-2 ${
                activity.type === 'listing' ? 'bg-blue-500' :
                activity.type === 'contract' ? 'bg-green-500' :
                activity.type === 'quality' ? 'bg-rwanda-gold-500' :
                'bg-rwanda-green-500'
              }`} />
              <div className="flex-1">
                <p className="font-medium text-gray-900">{activity.action}</p>
                <p className="text-sm text-gray-600">{activity.details}</p>
                <p className="text-xs text-gray-400 mt-1">{activity.time}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;