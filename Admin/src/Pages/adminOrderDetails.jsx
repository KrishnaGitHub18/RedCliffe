import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AdminOrderDetails = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/clientorderDeatils')
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.error('Error logging in:', err);
      });
  }, []);

  return (
    <div className="container mx-auto px-4 py-8 max-w-7xl">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Order Details</h1>
      <div className="bg-white border border-gray-300 rounded-lg shadow-lg overflow-hidden">
        <div className="grid grid-cols-4 gap-4 bg-blue-600 text-white font-bold p-4">
          <div className="px-2">Name</div>
          <div className="px-2">Location</div>
          <div className="px-2">Quantity</div>
          <div className="px-2">Status</div>
        </div>
        {data?.map((order, index) => (
          <div key={index} className="grid grid-cols-4 gap-4 border-t border-gray-200 hover:bg-blue-50 transition-colors duration-200 p-4">
            <div className="py-2 font-medium text-gray-800">{order.name}</div>
            <div className="py-2 text-gray-600">{order.location}</div>
            <div className="py-2 text-gray-700 font-semibold">{order.units}</div>
            <div className="py-2">
              <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                order.Status === 'Pending' ? 'bg-yellow-100 text-yellow-800' :
                order.Status === 'Approved' ? 'bg-green-100 text-green-800' :
                order.Status === 'Rejected' ? 'bg-red-100 text-red-800' :
                'bg-gray-100 text-gray-800'
              }`}>
                {order.Status}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminOrderDetails;
