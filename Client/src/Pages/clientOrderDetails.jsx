import React, { useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import bg from "../assets/pngwing.com-order.png";

const ClientOrderDetails = () => {
  const { id } = useParams();
  const { id2 } = useParams();
  const [order, setOrder] = useState("");

  const handleChange = (e) => {
    setOrder(e.target.value);
  };

  const submit = async () => {
    try {
      const res = await axios.post("http://localhost:3000/clientorderDeatils", {
        units: order,
        name: id2,
        location: id,
      });
  
      if (res.data.message==='Data saved successfully') {
        setOrder("");
        alert("Data saved Successfully");
      }
      else 
      {
        alert(res.data.message) ;
      }
    } catch (err) {
     // console.log(err) ;
      alert("Please Enter Valid Data");
    }
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-7xl">
      <div className="flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="flex-1 flex justify-center items-center min-h-[400px]">
          <div className="flex flex-col gap-6 items-center justify-center border-2 border-gray-300 rounded-xl p-8 w-full max-w-md bg-gradient-to-br from-sky-100 to-blue-100 shadow-lg">
            <h1 className="text-center text-3xl font-semibold text-gray-800">
              Place Order
            </h1>
            <span className="text-center text-lg font-medium text-gray-700">
              Enter the Quantity of <span className="font-bold text-blue-600">{id2}</span>
            </span>
            <input
              className="border-2 border-gray-400 w-full max-w-xs p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-center text-lg"
              type="number"
              min="1"
              value={order}
              placeholder="Enter the quantity"
              onChange={handleChange}
            />
            <button
              className="mt-2 w-full max-w-xs bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-200 shadow-md hover:shadow-lg"
              onClick={submit}
            >
              Submit Order
            </button>
          </div>
        </div>
        <div className="flex-1 flex justify-center items-center">
          <img src={bg} className="w-full max-w-lg h-auto object-contain" alt="Order illustration" />
        </div>
      </div>
    </div>
  );
};

export default ClientOrderDetails;
