import React from 'react'
import {useNavigate} from 'react-router-dom';

const Navbar = ({log}) => {
    const Location = localStorage.getItem("Location-client"); 
    const navigate= useNavigate();
  
    const handleLog=(log)=>{
        if(log==="Logout"){
            localStorage.removeItem("Token"); 
            navigate("*");
            window.location.reload();
            alert("You are logged out!");
        }else{
            navigate("/login")
        }
    }
    const handleClickToOrder=()=>{ 
      if(log==="Login") alert("You are not loged in")
      navigate(`/order-data`);
    }
    const handleClickToData=()=>{ 
      if(log==="Login") alert("You are not loged in")
      navigate(`/data`);
    }
    const handleClickToHome=()=>{ 
        navigate(`/`);
    }

  return (
    <nav className="flex items-center justify-between bg-blue-500 p-6">
        <div className="text-white text-lg font-bold">RedCliffe</div>
        <div className="flex-grow"></div>
        <div className="text-white text-lg font-bold">
          <div onClick={handleClickToHome} className="cursor-pointer inline-block mr-4 hover:text-gray-200">
            Home
          </div>
          <div onClick={handleClickToData} className="cursor-pointer inline-block mr-4 hover:text-gray-200">
            Stock
          </div>
          <div onClick={handleClickToOrder} className="cursor-pointer inline-block mr-4 hover:text-gray-200">
            Order
          </div>
          <div onClick={()=>handleLog(log)} className="cursor-pointer inline-block hover:text-gray-200">
            {log}
          </div>
        </div>
      </nav>
  )
}

export default Navbar