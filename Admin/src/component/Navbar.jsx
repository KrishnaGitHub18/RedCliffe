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
    <nav className="flex items-center justify-between bg-blue-600 shadow-md p-4 md:p-6">
        <div className="text-white text-xl md:text-2xl font-bold cursor-pointer" onClick={handleClickToHome}>
          RedCliffe
        </div>
        <div className="flex-grow"></div>
        <div className="flex items-center gap-4 md:gap-6 text-white">
          <div 
            onClick={handleClickToHome} 
            className="cursor-pointer text-sm md:text-base font-medium hover:text-blue-200 transition-colors duration-200"
          >
            Home
          </div>
          <div 
            onClick={handleClickToData} 
            className="cursor-pointer text-sm md:text-base font-medium hover:text-blue-200 transition-colors duration-200"
          >
            Stock
          </div>
          <div 
            onClick={handleClickToOrder} 
            className="cursor-pointer text-sm md:text-base font-medium hover:text-blue-200 transition-colors duration-200"
          >
            Order
          </div>
          <div 
            onClick={()=>handleLog(log)} 
            className="cursor-pointer text-sm md:text-base font-medium bg-blue-700 hover:bg-blue-800 px-4 py-2 rounded-lg transition-colors duration-200"
          >
            {log}
          </div>
        </div>
      </nav>
  )
}

export default Navbar