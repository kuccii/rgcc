import React from 'react';

const Warehouses: React.FC = () => {
  const warehouses = [
    {
      name: "Gatsibo - Kiramuruzi",
      location: "Eastern Province, Rwanda",
      capacity: "5,000 MT",
      status: "Operational",
      lastUpdate: "7 Yrs 1 Mth Ago",
      coordinates: { lat: -1.5833, lng: 30.2333 },
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    },
    {
      name: "Gatsibo - Rugarama",
      location: "Eastern Province, Rwanda",
      capacity: "4,500 MT",
      status: "Operational",
      lastUpdate: "7 Yrs 1 Mth Ago",
      coordinates: { lat: -1.5833, lng: 30.2333 },
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    },
    {
      name: "Nyagatare - Ryabega",
      location: "Eastern Province, Rwanda",
      capacity: "6,000 MT",
      status: "Operational",
      lastUpdate: "7 Yrs 1 Mth Ago",
      coordinates: { lat: -1.5833, lng: 30.2333 },
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    },
    {
      name: "Kirehe - COACMU/RGCC",
      location: "Eastern Province, Rwanda",
      capacity: "5,500 MT",
      status: "Operational",
      lastUpdate: "7 Yrs 1 Mth Ago",
      coordinates: { lat: -1.5833, lng: 30.2333 },
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    }
  ];

  return (
    <div className="relative py-24 bg-gradient-to-b from-white to-rwanda-green-50">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMtOS45IDAtMTggOC4xLTE4IDE4czguMSAxOCAxOCAxOCAxOC04LjEgMTgtMTgtOC4xLTE4LTE4LTE4em0wIDJjOC44IDAgMTYgNy4yIDE2IDE2cy03LjIgMTYtMTYgMTYtMTYtNy4yLTE2LTE2IDcuMi0xNiAxNi0xNnoiIGZpbGw9IiMwMDAiLz48L2c+PC9zdmc+')] bg-repeat"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header Section */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-rwanda-green-100 text-rwanda-green-800 text-sm font-medium mb-6">
            <span className="mr-2">🏭</span>
            Our Facilities
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Strategic Warehouse Locations
          </h2>
          <p className="text-xl text-gray-600">
            Strategically positioned warehouses across Rwanda to serve our agricultural community
          </p>
        </div>

        {/* Warehouses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {warehouses.map((warehouse, index) => (
            <div 
              key={index}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={warehouse.image} 
                  alt={warehouse.name}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-xl font-bold text-white mb-1">
                    {warehouse.name}
                  </h3>
                  <p className="text-sm text-white/90">
                    {warehouse.location}
                  </p>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <p className="text-sm text-gray-500">Capacity</p>
                    <p className="font-semibold text-gray-900">{warehouse.capacity}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Status</p>
                    <p className="font-semibold text-rwanda-green-600">{warehouse.status}</p>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <div className="flex items-center text-sm text-gray-500">
                    <span className="mr-2">🕒</span>
                    Last Update: {warehouse.lastUpdate}
                  </div>
                  <button className="text-rwanda-green-600 hover:text-rwanda-green-700 font-medium text-sm">
                    View Details →
                  </button>
                </div>
              </div>

              {/* Hover Effect Border */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-rwanda-green-500 to-rwanda-green-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
            </div>
          ))}
        </div>

        {/* Map Section */}
        <div className="mt-16 bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="p-6 border-b border-gray-100">
            <h3 className="text-xl font-bold text-gray-900">Warehouse Locations</h3>
            <p className="text-gray-600">Strategic distribution across Rwanda</p>
          </div>
          <div className="h-96 bg-gray-100 relative">
            {/* Placeholder for Map Component */}
            <div className="absolute inset-0 flex items-center justify-center">
              <p className="text-gray-500">Map View Coming Soon</p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <button className="inline-flex items-center px-8 py-4 bg-rwanda-green-600 text-white rounded-lg font-semibold hover:bg-rwanda-green-700 transition-colors duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
            <span className="mr-2">📞</span>
            Contact Warehouse Management
          </button>
        </div>
      </div>
    </div>
  );
};

export default Warehouses; 