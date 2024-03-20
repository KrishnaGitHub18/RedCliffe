import React, { useEffect, useState } from 'react';
import axios from 'axios';

const MyOrders = () => {
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
        <div className="container mx-auto mt-8">
            <div className="border border-gray-300 rounded-lg p-4">
                <div className="grid grid-cols-4 gap-4 bg-blue-500 text-white font-bold p-2">
                    <div>Name</div>
                    <div>Location</div>
                    <div>Quantity</div>
                    <div>Status</div>
                </div>
                {data.map((order, index) => (
                    <div key={index} className="grid grid-cols-4 gap-4 border-t border-gray-300 hover:text-[#0000ff] hover:bg-gray-200">
                        <div className="py-2">{order.name}</div>
                        <div className="py-2">{order.location}</div>
                        <div className="py-2">{order.units}</div>
                        <div className="py-2">{order.Status}</div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MyOrders;
