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
      .get("http://localhost:3000/clientOrder", {
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
    <>
      <div className="w-[95vw] mb-[5vh] container mx-auto mt-8">
        <div className="border border-gray-300 rounded-lg p-4">
          <div className="grid grid-cols-4 gap-4 bg-blue-500 text-white font-bold p-2">
            <div>Name</div>
            <div>Used In</div>
            <div>Stock</div>
            <div>Ordered Units</div>
          </div>
          {newar &&
            newar.map((reagent) => {
              const arr = reagent.stock;
              return arr.map((it, index) => (
                <div
                  key={index}
                  className="grid grid-cols-4 gap-4 border-t border-gray-300 hover:text-[#0000ff] hover:bg-gray-200"
                >
                  <div className="py-2">{it.reagent}</div>
                  <div className="py-2">{it.class.join(", ")}</div>
                  <div className="py-2">{it.quantity}</div>
                  <div className="py-2">
                    <button
                      className="border border-green-500 rounded-md px-2 py-1"
                      onClick={() =>
                        navigate(`/clientorder/${id}/${it.reagent}`)
                      }
                    >
                      Place The Order
                    </button>
                  </div>
                </div>
              ));
            })}
        </div>
      </div>
    </>
  );
}

export default ClientOrder;

