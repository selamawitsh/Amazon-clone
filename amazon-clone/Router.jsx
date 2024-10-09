import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Corrected the import
import Landing from './src/pages/landingPage/Landing';
import Signup from './src/pages/Signup/Signup';
import Payment from './src/pages/Payment/Payment';
import Orders from './src/pages/Orders/Orders';
import Cart from './src/pages/Cart/Cart';

function Routing() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/Signup' element={<Signup />} />
        <Route path='/payments' element={<Payment />} />  
        <Route path='/Orders' element={<Orders />} />      
        <Route path='/Cart' element={<Cart />} />          
      </Routes>
    </Router>
  );
}

export default Routing;
