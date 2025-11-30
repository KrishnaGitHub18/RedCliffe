import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function ClientOrder() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5173/clientOrder", {
        headers: {
          token: localStorage.getItem("Token"),
        },
      })
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
      .catch((err) => {
        console.error("Error logging in:", err);
      });
  }, []);

  const newar = data.filter((prev) => prev.location === id);

  return (
    <div className="container mx-auto px-4 py-8 max-w-7xl">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Available Reagents</h1>
      <div className="bg-white border border-gray-300 rounded-lg shadow-lg overflow-hidden">
        <div className="grid grid-cols-4 gap-4 bg-blue-600 text-white font-bold p-4">
          <div className="px-2">Name</div>
          <div className="px-2">Used In</div>
          <div className="px-2">Stock</div>
          <div className="px-2">Action</div>
        </div>
        {newar && newar.length > 0 ? (
          newar.map((reagent) => {
            const arr = reagent.stock;
            return arr.map((it, index) => (
              <div
                key={index}
                className="grid grid-cols-4 gap-4 border-t border-gray-200 hover:bg-blue-50 transition-colors duration-200 p-4"
              >
                <div className="py-2 font-medium text-gray-800">{it.reagent}</div>
                <div className="py-2 text-gray-600">{it.class.join(", ")}</div>
                <div className="py-2 text-gray-700 font-semibold">{it.quantity}</div>
                <div className="py-2">
                  <button
                    className="bg-green-500 hover:bg-green-600 text-white font-medium rounded-md px-4 py-2 transition-colors duration-200 shadow-sm"
                    onClick={() =>
                      navigate(`/clientorder/${id}/${it.reagent}`)
                    }
                  >
                    Place Order
                  </button>
                </div>
              </div>
            ));
          })
        ) : (
          <div className="p-8 text-center text-gray-500">
            No reagents available at this location.
          </div>
        )}
      </div>
    </div>
  );
}

export default ClientOrder;

