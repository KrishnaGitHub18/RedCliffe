import React from "react";
import { Routes, Route } from "react-router-dom";
import AdminLogin from "./Pages/Adminlogin"; 
import Data from "./Pages/Data"; 
import AdminOrderDetails from "./Pages/adminOrderDetails";
import Home from "./Pages/Home";
import Navbar from "./component/Navbar";

function App() {
  const TOKEN = localStorage.getItem("Token");

  return (
    <div>
      {!TOKEN && (<>
          <Navbar log={"Login"} />
          <Routes>
            <Route path="*" element={<Home />} />
            <Route path="/login" element={<AdminLogin />} />
          </Routes>
        </>)
      }

      {TOKEN && (
        <>
          <Navbar log={"Logout"} />
          <Routes>
            <Route path="*" element={<Home />} />
            <Route path="/login" element={<AdminLogin />} />
            <Route path="/data" element={<Data />} /> 
            <Route path="/order-data" element={< AdminOrderDetails/>} />
          </Routes>
        </>
      )}
    </div>
  ); 
}

export default App;
