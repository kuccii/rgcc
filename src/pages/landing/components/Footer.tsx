import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="font-bold mb-4">SITE NAVIGATION</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-rwanda-green-400">Home</a></li>
              <li><a href="#warehouses" className="hover:text-rwanda-green-400">Warehouses</a></li>
              <li><a href="#news" className="hover:text-rwanda-green-400">News</a></li>
              <li><a href="#about" className="hover:text-rwanda-green-400">About Us</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">ACCOUNT</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-rwanda-green-400">Login</a></li>
              <li><a href="#" className="hover:text-rwanda-green-400">My Account</a></li>
              <li><a href="#" className="hover:text-rwanda-green-400">FAQ</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">SOCIAL MEDIA</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-rwanda-green-400">Facebook</a>
              <a href="#" className="hover:text-rwanda-green-400">Twitter</a>
              <a href="#" className="hover:text-rwanda-green-400">Google+</a>
            </div>
          </div>
        </div>
        <div className="text-center border-t border-gray-800 pt-8">
          <p>Copyright © {new Date().getFullYear()} RGCC Ltd. Site developed by O'GENIUS PRIORITY LTD</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 