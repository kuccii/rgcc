import React, { useState } from 'react';
import { 
  Search, 
  Filter, 
  MapPin, 
  Calendar, 
  Droplets, 
  Star,
  Eye,
  MessageCircle,
  TrendingUp
} from 'lucide-react';
import { mockGrainListings } from '../data/mockData';

const Marketplace: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedGrainType, setSelectedGrainType] = useState('all');
  const [selectedQuality, setSelectedQuality] = useState('all');

  const grainTypes = ['all', 'maize', 'beans', 'rice', 'wheat', 'sorghum'];
  const qualityGrades = ['all', 'A', 'B', 'C'];

  const filteredListings = mockGrainListings.filter(listing => {
    const matchesSearch = listing.sellerName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         listing.grainType.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         listing.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesGrainType = selectedGrainType === 'all' || listing.grainType === selectedGrainType;
    const matchesQuality = selectedQuality === 'all' || listing.quality === selectedQuality;
    
    return matchesSearch && matchesGrainType && matchesQuality;
  });

  const getGrainTypeIcon = (grainType: string) => {
    switch (grainType) {
      case 'maize': return '🌽';
      case 'beans': return '🫘';
      case 'rice': return '🌾';
      case 'wheat': return '🌾';
      case 'sorghum': return '🌾';
      default: return '🌾';
    }
  };

  const getQualityColor = (quality: string) => {
    switch (quality) {
      case 'A': return 'text-green-600 bg-green-50';
      case 'B': return 'text-yellow-600 bg-yellow-50';
      case 'C': return 'text-orange-600 bg-orange-50';
      default: return 'text-gray-600 bg-gray-50';
    }
  };

  return (
    <div className="p-6 space-y-6 animate-fade-in">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Grain Marketplace</h2>
          <p className="text-gray-600">Connect with farmers and traders across Rwanda</p>
        </div>
        <button className="bg-rwanda-green-500 text-white px-6 py-2 rounded-lg font-medium hover:bg-rwanda-green-600 transition-colors">
          + List Your Grains
        </button>
      </div>

      {/* Search and Filters */}
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search grains, farmers, locations..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rwanda-green-500 focus:border-transparent"
            />
          </div>
          
          <select
            value={selectedGrainType}
            onChange={(e) => setSelectedGrainType(e.target.value)}
            className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-rwanda-green-500 focus:border-transparent"
          >
            {grainTypes.map(type => (
              <option key={type} value={type}>
                {type === 'all' ? 'All Grains' : type.charAt(0).toUpperCase() + type.slice(1)}
              </option>
            ))}
          </select>
          
          <select
            value={selectedQuality}
            onChange={(e) => setSelectedQuality(e.target.value)}
            className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-rwanda-green-500 focus:border-transparent"
          >
            {qualityGrades.map(grade => (
              <option key={grade} value={grade}>
                {grade === 'all' ? 'All Qualities' : `Grade ${grade}`}
              </option>
            ))}
          </select>
          
          <button className="flex items-center justify-center space-x-2 border border-gray-300 rounded-lg px-3 py-2 hover:bg-gray-50 transition-colors">
            <Filter className="h-4 w-4" />
            <span>More Filters</span>
          </button>
        </div>
      </div>

      {/* Market Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Active Listings</p>
              <p className="text-2xl font-bold text-gray-900">{filteredListings.length}</p>
            </div>
            <TrendingUp className="h-8 w-8 text-rwanda-green-500" />
          </div>
        </div>
        
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Total Volume</p>
              <p className="text-2xl font-bold text-gray-900">
                {filteredListings.reduce((sum, listing) => sum + listing.quantity, 0)} tons
              </p>
            </div>
            <div className="text-2xl">📦</div>
          </div>
        </div>
        
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Avg. Price (Maize)</p>
              <p className="text-2xl font-bold text-gray-900">385 RWF/kg</p>
            </div>
            <div className="text-2xl">💰</div>
          </div>
        </div>
      </div>

      {/* Listings Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredListings.map((listing) => (
          <div key={listing.id} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-all duration-200 hover:-translate-y-1">
            <div className="relative">
              <img 
                src={listing.images[0]} 
                alt={listing.grainType}
                className="w-full h-48 object-cover"
              />
              <div className="absolute top-4 left-4">
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${getQualityColor(listing.quality)}`}>
                  Grade {listing.quality}
                </span>
              </div>
              <div className="absolute top-4 right-4 bg-white rounded-full p-2">
                <span className="text-lg">{getGrainTypeIcon(listing.grainType)}</span>
              </div>
            </div>
            
            <div className="p-6">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h3 className="font-semibold text-gray-900 capitalize">{listing.grainType}</h3>
                  <p className="text-sm text-gray-600">{listing.sellerName}</p>
                </div>
                <div className="text-right">
                  <p className="text-lg font-bold text-rwanda-green-600">
                    {listing.pricePerUnit} {listing.currency}
                  </p>
                  <p className="text-xs text-gray-500">per kg</p>
                </div>
              </div>
              
              <div className="space-y-2 mb-4">
                <div className="flex items-center text-sm text-gray-600">
                  <MapPin className="h-4 w-4 mr-2" />
                  {listing.location}
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <Calendar className="h-4 w-4 mr-2" />
                  Available from {new Date(listing.availableFrom).toLocaleDateString()}
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <Droplets className="h-4 w-4 mr-2" />
                  {listing.moistureLevel}% moisture
                </div>
              </div>
              
              <div className="flex items-center justify-between mb-4">
                <span className="text-lg font-semibold text-gray-900">
                  {listing.quantity} {listing.unit}
                </span>
                <div className="flex items-center space-x-1">
                  <Star className="h-4 w-4 text-yellow-400 fill-current" />
                  <span className="text-sm text-gray-600">4.8</span>
                </div>
              </div>
              
              <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                {listing.description}
              </p>
              
              <div className="flex space-x-2">
                <button className="flex-1 bg-rwanda-green-500 text-white py-2 px-4 rounded-lg font-medium hover:bg-rwanda-green-600 transition-colors">
                  Contact Seller
                </button>
                <button className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                  <Eye className="h-4 w-4 text-gray-600" />
                </button>
                <button className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                  <MessageCircle className="h-4 w-4 text-gray-600" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredListings.length === 0 && (
        <div className="text-center py-12">
          <div className="text-4xl mb-4">🔍</div>
          <h3 className="text-lg font-medium text-gray-900 mb-2">No listings found</h3>
          <p className="text-gray-600">Try adjusting your search criteria or check back later for new listings.</p>
        </div>
      )}
    </div>
  );
};

export default Marketplace;