import React from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  LayoutDashboard, 
  ShoppingCart, 
  Warehouse, 
  TrendingUp, 
  Award, 
  FileText, 
  BarChart3,
  Users,
  Settings,
  X,
  Home
} from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
  currentView: string;
  onViewChange: (view: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose, currentView, onViewChange }) => {
  const navigate = useNavigate();

  const menuItems = [
    { id: 'dashboard', icon: LayoutDashboard, label: 'Dashboard', path: '/app/dashboard' },
    { id: 'marketplace', icon: ShoppingCart, label: 'Marketplace', path: '/app/marketplace' },
    { id: 'warehouse', icon: Warehouse, label: 'Warehouse', path: '/app/warehouse' },
    { id: 'market-info', icon: TrendingUp, label: 'Market Info', path: '/app/market-info' },
    { id: 'quality', icon: Award, label: 'Quality Control', path: '/app/quality' },
    { id: 'contracts', icon: FileText, label: 'Contracts', path: '/app/contracts' },
    { id: 'analytics', icon: BarChart3, label: 'Analytics', path: '/app/analytics' },
    { id: 'community', icon: Users, label: 'Community', path: '/app/community' },
  ];

  const handleNavigation = (item: typeof menuItems[0]) => {
    onViewChange(item.id);
    navigate(item.path);
    onClose();
  };

  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={onClose}
        />
      )}
      
      {/* Sidebar */}
      <aside className={`
        fixed left-0 top-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 z-50
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
        lg:translate-x-0 lg:static lg:shadow-none lg:border-r lg:border-gray-200
      `}>
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-200">
          <div className="flex items-center space-x-2">
            <div className="h-8 w-8 bg-rwanda-green-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">R</span>
            </div>
            <div>
              <h2 className="font-semibold text-gray-900">RGCC</h2>
              <p className="text-xs text-gray-500">Digital Platform</p>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="p-1 hover:bg-gray-100 rounded lg:hidden"
          >
            <X className="h-5 w-5 text-gray-500" />
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-4 space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = currentView === item.id;
            
            return (
              <button
                key={item.id}
                onClick={() => handleNavigation(item)}
                className={`
                  w-full flex items-center space-x-3 px-3 py-2.5 rounded-lg text-left transition-colors
                  ${isActive 
                    ? 'bg-rwanda-green-50 text-rwanda-green-700 border-r-2 border-rwanda-green-500' 
                    : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                  }
                `}
              >
                <Icon className={`h-5 w-5 ${isActive ? 'text-rwanda-green-600' : ''}`} />
                <span className="font-medium">{item.label}</span>
              </button>
            );
          })}
        </nav>

        {/* Footer */}
        <div className="p-4 border-t border-gray-200">
          <button 
            onClick={() => handleNavigation({ id: 'settings', icon: Settings, label: 'Settings', path: '/app/settings' })}
            className="w-full flex items-center space-x-3 px-3 py-2.5 text-gray-600 hover:bg-gray-50 hover:text-gray-900 rounded-lg transition-colors"
          >
            <Settings className="h-5 w-5" />
            <span className="font-medium">Settings</span>
          </button>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;