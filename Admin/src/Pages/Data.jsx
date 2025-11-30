import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';

const TableComponent = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    console.log(localStorage.getItem('Token'));
    axios.get('http://localhost:3000/reagent', {
      headers:{
        'token' : localStorage.getItem('Token'),
      }
    })
      .then((res) => {
        setData(res.data)
      })
      .catch(function (err) {
        console.error('Error logging in:', err);
      });
  }, []);

  return (
    <div className="container mx-auto px-4 py-8 max-w-7xl">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Stock Data</h1>
      <div className="bg-white border border-gray-300 rounded-lg shadow-lg overflow-hidden">
        <div className="grid grid-cols-4 gap-4 bg-blue-600 text-white font-bold p-4">
          <div className="px-2">Name</div>
          <div className="px-2">Used In</div>
          <div className="px-2">Stock</div>
          <div className="px-2">Expiry Date</div>
        </div>
        {data.map((reagent, index) => (
          <div key={index} className="grid grid-cols-4 gap-4 border-t border-gray-200 hover:bg-blue-50 transition-colors duration-200 p-4">
            <div className="py-2 font-medium text-gray-800">{reagent.name}</div>
            <div className="py-2 text-gray-600">{reagent.UsedIn.join(', ')}</div>
            <div className="py-2 text-gray-700 font-semibold">{reagent.stock}</div>
            <div className="py-2 text-gray-700">{reagent.expiryDate}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default TableComponent;

