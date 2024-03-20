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
    <div className="w-[95vw] mb-[5vh] container mx-auto mt-8">
      <div className="border border-gray-300 rounded-lg p-4">
        <div className="grid grid-cols-4 gap-4 bg-blue-500 text-white font-bold p-2">
          <div>Name</div>
          <div>Used In</div>
          <div>Stock</div>
          <div>Expiry Date</div>
        </div>
        {data.map((reagent, index) => (
          <div key={index} className="grid grid-cols-4 gap-4 border-t border-gray-300 hover:text-[#0000ff] hover:bg-gray-200">
            <div className="py-2">{reagent.name}</div>
            <div className="py-2">{reagent.UsedIn.join(', ')}</div>
            <div className="py-2">{reagent.stock}</div>
            <div className="py-2">{reagent.expiryDate}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default TableComponent;

