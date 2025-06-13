import React, { useState } from 'react';
import { 
  Warehouse, 
  Thermometer, 
  Droplets, 
  Eye, 
  AlertTriangle,
  CheckCircle,
  Clock,
  Package
} from 'lucide-react';
import { mockWarehouseInventory } from '../data/mockData';

const WarehouseManagement: React.FC = () => {
  const [selectedWarehouse, setSelectedWarehouse] = useState('all');

  const warehouses = [
    'all',
    'RGCC Nyagatare Warehouse',
    'RGCC Kigali Central Warehouse',
    'RGCC Musanze Warehouse',
    'RGCC Bugesera Warehouse'
  ];

  const filteredInventory = selectedWarehouse === 'all' 
    ? mockWarehouseInventory 
    : mockWarehouseInventory.filter(item => item.warehouseName === selectedWarehouse);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'stored': return 'text-green-600 bg-green-50';
      case 'processing': return 'text-yellow-600 bg-yellow-50';
      case 'dispatched': return 'text-blue-600 bg-blue-50';
      default: return 'text-gray-600 bg-gray-50';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'stored': return <CheckCircle className="h-4 w-4" />;
      case 'processing': return <Clock className="h-4 w-4" />;
      case 'dispatched': return <Package className="h-4 w-4" />;
      default: return <AlertTriangle className="h-4 w-4" />;
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

  const totalInventory = filteredInventory.reduce((sum, item) => sum + item.quantity, 0);
  const averageQuality = filteredInventory.filter(item => item.quality === 'A').length / filteredInventory.length * 100;

  return (
    <div className="p-6 space-y-6 animate-fade-in">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Warehouse Management</h2>
          <p className="text-gray-600">Monitor and manage grain storage across all facilities</p>
        </div>
        <div className="flex space-x-3">
          <button className="bg-rwanda-green-500 text-white px-6 py-2 rounded-lg font-medium hover:bg-rwanda-green-600 transition-colors">
            + Add Inventory
          </button>
          <button className="border border-gray-300 text-gray-700 px-6 py-2 rounded-lg font-medium hover:bg-gray-50 transition-colors">
            Generate Report
          </button>
        </div>
      </div>

      {/* Warehouse Selector */}
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
        <div className="flex items-center space-x-4">
          <Warehouse className="h-5 w-5 text-rwanda-green-500" />
          <select
            value={selectedWarehouse}
            onChange={(e) => setSelectedWarehouse(e.target.value)}
            className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-rwanda-green-500 focus:border-transparent"
          >
            {warehouses.map(warehouse => (
              <option key={warehouse} value={warehouse}>
                {warehouse === 'all' ? 'All Warehouses' : warehouse}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Summary Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 rounded-lg bg-rwanda-green-50">
              <Package className="h-6 w-6 text-rwanda-green-600" />
            </div>
            <span className="text-2xl">📦</span>
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-1">{totalInventory} tons</h3>
          <p className="text-gray-600 text-sm">Total Inventory</p>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 rounded-lg bg-green-50">
              <CheckCircle className="h-6 w-6 text-green-600" />
            </div>
            <span className="text-2xl">⭐</span>
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-1">{averageQuality.toFixed(0)}%</h3>
          <p className="text-gray-600 text-sm">Grade A Quality</p>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 rounded-lg bg-blue-50">
              <Thermometer className="h-6 w-6 text-blue-600" />
            </div>
            <span className="text-2xl">🌡️</span>
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-1">18.8°C</h3>
          <p className="text-gray-600 text-sm">Avg Temperature</p>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 rounded-lg bg-cyan-50">
              <Droplets className="h-6 w-6 text-cyan-600" />
            </div>
            <span className="text-2xl">💧</span>
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-1">43.5%</h3>
          <p className="text-gray-600 text-sm">Avg Humidity</p>
        </div>
      </div>

      {/* Inventory Table */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900">Inventory Details</h3>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Grain Type
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Warehouse
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Quantity
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Quality
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Conditions
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredInventory.map((item) => (
                <tr key={item.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <span className="text-2xl mr-3">
                        {item.grainType === 'maize' ? '🌽' : 
                         item.grainType === 'beans' ? '🫘' : '🌾'}
                      </span>
                      <div>
                        <div className="text-sm font-medium text-gray-900 capitalize">
                          {item.grainType}
                        </div>
                        <div className="text-sm text-gray-500">
                          {item.moistureLevel}% moisture
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{item.warehouseName}</div>
                    <div className="text-sm text-gray-500">ID: {item.warehouseId}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">
                      {item.quantity} {item.unit}
                    </div>
                    <div className="text-sm text-gray-500">
                      Received: {new Date(item.receivedDate).toLocaleDateString()}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${getQualityColor(item.quality)}`}>
                      Grade {item.quality}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center space-x-4 text-sm text-gray-600">
                      <div className="flex items-center">
                        <Thermometer className="h-4 w-4 mr-1" />
                        {item.temperature}°C
                      </div>
                      <div className="flex items-center">
                        <Droplets className="h-4 w-4 mr-1" />
                        {item.humidity}%
                      </div>
                    </div>
                    <div className="text-xs text-gray-500 mt-1">
                      Last checked: {new Date(item.lastInspection).toLocaleDateString()}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex items-center px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(item.status)}`}>
                      {getStatusIcon(item.status)}
                      <span className="ml-1 capitalize">{item.status}</span>
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <div className="flex space-x-2">
                      <button className="text-rwanda-green-600 hover:text-rwanda-green-900">
                        <Eye className="h-4 w-4" />
                      </button>
                      <button className="text-blue-600 hover:text-blue-900">
                        Edit
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {filteredInventory.length === 0 && (
        <div className="text-center py-12">
          <div className="text-4xl mb-4">📦</div>
          <h3 className="text-lg font-medium text-gray-900 mb-2">No inventory found</h3>
          <p className="text-gray-600">Select a different warehouse or add new inventory items.</p>
        </div>
      )}
    </div>
  );
};

export default WarehouseManagement;