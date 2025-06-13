import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import Marketplace from './components/Marketplace';
import WarehouseManagement from './components/WarehouseManagement';
import MarketInformation from './components/MarketInformation';
import LandingPage from './pages/landing/LandingPage';

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // For development, we'll set isAuthenticated to true
  // In production, this should be handled by your auth system
  React.useEffect(() => {
    setIsAuthenticated(true);
  }, []);

  const MainApp = () => {
    const location = useLocation();
    const currentView = location.pathname.split('/').pop() || 'dashboard';

    if (!isAuthenticated) {
      return <Navigate to="/" replace />;
    }

    return (
      <div className="min-h-screen bg-gray-50 flex">
        <Sidebar 
          isOpen={sidebarOpen}
          onClose={() => setSidebarOpen(false)}
          currentView={currentView}
          onViewChange={() => {}}
        />
        
        <div className="flex-1 flex flex-col lg:ml-0">
          <Header 
            onMenuClick={() => setSidebarOpen(true)}
            currentView={currentView}
          />
          
          <main className="flex-1 overflow-auto">
            <Routes>
              <Route path="/" element={<Navigate to="/app/dashboard" replace />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/marketplace" element={<Marketplace />} />
              <Route path="/warehouse" element={<WarehouseManagement />} />
              <Route path="/market-info" element={<MarketInformation />} />
              <Route path="/quality" element={
                <div className="p-6">
                  <div className="bg-white rounded-xl p-8 text-center shadow-sm border border-gray-100">
                    <div className="text-6xl mb-4">🏆</div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">Quality Assurance</h2>
                    <p className="text-gray-600">Quality control and certification system coming soon.</p>
                  </div>
                </div>
              } />
              <Route path="/contracts" element={
                <div className="p-6">
                  <div className="bg-white rounded-xl p-8 text-center shadow-sm border border-gray-100">
                    <div className="text-6xl mb-4">📄</div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">Contract Management</h2>
                    <p className="text-gray-600">Digital contract management system coming soon.</p>
                  </div>
                </div>
              } />
              <Route path="/analytics" element={
                <div className="p-6">
                  <div className="bg-white rounded-xl p-8 text-center shadow-sm border border-gray-100">
                    <div className="text-6xl mb-4">📊</div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">Analytics & Reports</h2>
                    <p className="text-gray-600">Advanced analytics and reporting dashboard coming soon.</p>
                  </div>
                </div>
              } />
              <Route path="/community" element={
                <div className="p-6">
                  <div className="bg-white rounded-xl p-8 text-center shadow-sm border border-gray-100">
                    <div className="text-6xl mb-4">👥</div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">Community Hub</h2>
                    <p className="text-gray-600">Stakeholder collaboration and knowledge sharing platform coming soon.</p>
                  </div>
                </div>
              } />
              <Route path="/settings" element={
                <div className="p-6">
                  <div className="bg-white rounded-xl p-8 text-center shadow-sm border border-gray-100">
                    <div className="text-6xl mb-4">⚙️</div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">Settings</h2>
                    <p className="text-gray-600">Application settings and preferences coming soon.</p>
                  </div>
                </div>
              } />
              <Route path="*" element={<Navigate to="/app/dashboard" replace />} />
            </Routes>
          </main>
        </div>
      </div>
    );
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/app/*" element={<MainApp />} />
      </Routes>
    </Router>
  );
}

export default App;