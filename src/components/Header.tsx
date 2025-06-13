import React from 'react';
import { Menu, Bell, User, Search, Globe } from 'lucide-react';

interface HeaderProps {
  onMenuClick: () => void;
  currentView: string;
}

const Header: React.FC<HeaderProps> = ({ onMenuClick, currentView }) => {
  const getPageTitle = (view: string) => {
    switch (view) {
      case 'dashboard': return 'Dashboard';
      case 'marketplace': return 'Grain Marketplace';
      case 'warehouse': return 'Warehouse Management';
      case 'market-info': return 'Market Information';
      case 'quality': return 'Quality Assurance';
      case 'contracts': return 'Contracts';
      case 'analytics': return 'Analytics & Reports';
      default: return 'RGCC Digital Platform';
    }
  };

  return (
    <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
      <div className="flex items-center justify-between px-4 py-3">
        <div className="flex items-center space-x-4">
          <button
            onClick={onMenuClick}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors lg:hidden"
          >
            <Menu className="h-5 w-5 text-gray-600" />
          </button>
          
          <div className="flex items-center space-x-2">
            <Globe className="h-8 w-8 text-rwanda-green-500" />
            <div className="hidden sm:block">
              <h1 className="text-lg font-semibold text-gray-900">RGCC</h1>
              <p className="text-sm text-gray-500 leading-none">{getPageTitle(currentView)}</p>
            </div>
          </div>
        </div>

        <div className="flex-1 max-w-xl mx-4 hidden sm:block">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search grains, traders, warehouses..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rwanda-green-500 focus:border-transparent"
            />
          </div>
        </div>

        <div className="flex items-center space-x-2">
          <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors relative">
            <Bell className="h-5 w-5 text-gray-600" />
            <span className="absolute -top-1 -right-1 h-4 w-4 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
              3
            </span>
          </button>
          
          <div className="flex items-center space-x-2 ml-4 pl-4 border-l border-gray-200">
            <div className="h-8 w-8 bg-rwanda-green-500 rounded-full flex items-center justify-center">
              <User className="h-4 w-4 text-white" />
            </div>
            <div className="hidden md:block">
              <p className="text-sm font-medium text-gray-900">John Uwimana</p>
              <p className="text-xs text-gray-500">Warehouse Manager</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;