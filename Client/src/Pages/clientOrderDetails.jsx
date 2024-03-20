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
    <div className="w-[95vw] mb-[5vh] flex justify-between">
      <div className="flex h-[75vh] w-[50vw] justify-center items-center">
        <div className="flex flex-col gap-[25px] items-center justify-center border border-gray-700 rounded-lg p-8 w-[30vw] h-[40vh]  bg-sky-200">
          <h1 className="text-center text-[30px] font-[500]">
            Place Order:
          </h1>
          <span className="text-center text-[20px] font-[500]">Enter the Quantity of {id2}</span>
          <input
            className="border-2 w-[20vw] border-black p-[5px]"
            type="text"
            value={order}
            placeholder="Enter the quantity"
            onChange={handleChange}
          ></input>
          <button
            className="mt-4 w-[15vw] bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={submit}
          >
            Submit
          </button>
        </div>
      </div>
      <div className="mt-[0px] w-[40vw] h-[40vh] pt-[5vh] pr-[5vw]">
        <img src={bg} className="w-full" alt="Background" />
      </div>
    </div>
  );
};

export default ClientOrderDetails;
