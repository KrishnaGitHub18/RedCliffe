import React from "react";
import { Routes, Route } from "react-router-dom";
import ClientLogin from "./Pages/Clientlogin";
import ClientOrder from "./Pages/clientOrder";
import ClientOrderDetails from "./Pages/clientOrderDetails";
import Home from "./Pages/Home";
import Navbar from "./component/Navbar";
import MyOrders from "./Pages/MyOrders";

function App() {
  const TOKEN = localStorage.getItem("Token");

  return (
    <div>
      {!TOKEN && (<>
          <Navbar log={"Login"} />
          <Routes>
            <Route path="*" element={<Home />} />
            <Route path="/login" element={<ClientLogin />} />  
          </Routes>
        </>)
      }

      {TOKEN && (
        <>
          <Navbar log={"Logout"} />
          <Routes>
            <Route path="*" element={<Home />} />
            <Route path="/login" element={<ClientLogin />} />
            <Route path="/clientorder/:id" element={<ClientOrder />} />
            <Route path="/login/myOrder" element={<MyOrders/>} />
            <Route
              path="/clientorder/:id/:id2"
              element={<ClientOrderDetails />}
            />
          </Routes>
        </>
      )}
    </div>
  );
}

export default App;
