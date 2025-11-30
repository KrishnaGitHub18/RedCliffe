import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ShippingDetails = () => {
    const [data, setData] = useState([]);
    const [placed, setPlaced] = useState("Not Delivered");

    useEffect(() => {
        axios.get('http://localhost:3000/clientorderDeatils')
            .then((res) => {
                setData(res.data);
            })
            .catch((err) => {
                console.error('Error logging in:', err);
            });
    }, []);

    const handleUpdate = async (order) => {
        try {
            const Data = { ...order, Status: "Delivered" };
            const res = await axios.put(`http://localhost:3000/clientorderDeatils/${order._id}`, Data);
            if (res) {
                alert("Order Placed!");
                setPlaced("Delivered");
                window.location.reload();
            }
        } catch (err) {
            alert("Try Again!");
        }
    }

    return (
        <div className="container mx-auto px-4 py-8 max-w-7xl">
            <h1 className="text-3xl font-bold text-gray-800 mb-6">Shipping Details</h1>
            <div className="bg-white border border-gray-300 rounded-lg shadow-lg overflow-hidden">
                <div className="grid grid-cols-4 gap-4 bg-blue-600 text-white font-bold p-4">
                    <div className="px-2">Name</div>
                    <div className="px-2">Location</div>
                    <div className="px-2">Quantity</div>
                    <div className="px-2">Status</div>
                </div>
                {data.map((order, index) => (
                    <div key={index} className="grid grid-cols-4 gap-4 border-t border-gray-200 hover:bg-blue-50 transition-colors duration-200 p-4">
                        <div className="py-2 font-medium text-gray-800">{order.name}</div>
                        <div className="py-2 text-gray-600">{order.location}</div>
                        <div className="py-2 text-gray-700 font-semibold">{order.units}</div>
                        <div className="py-2">
                            <button 
                                className={`px-4 py-2 rounded-lg font-medium transition-colors duration-200 ${
                                    order.Status === 'Delivered' 
                                        ? 'bg-green-500 hover:bg-green-600 text-white' 
                                        : order.Status === 'Pending'
                                        ? 'bg-yellow-500 hover:bg-yellow-600 text-white'
                                        : 'bg-blue-600 hover:bg-blue-700 text-white'
                                }`}
                                onClick={() => handleUpdate(order)}
                            >
                                {order.Status === 'Delivered' ? 'Delivered' : 'Mark as Delivered'}
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ShippingDetails;
