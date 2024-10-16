import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Corrected the import
import Landing from './src/pages/landingPage/Landing';
import Signup from './src/pages/Signup/Signup';
import Payment from './src/pages/Payment/Payment';
import Orders from './src/pages/Orders/Orders';
import Cart from './src/pages/Cart/Cart';
import Result from './src/pages/Results/Result'
import ProductDetail from './src/pages/ProductDetail/ProductDetail';
function Routing() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/Signup' element={<Signup />} />
        <Route path='/payments' element={<Payment />} />  
        <Route path='/Orders' element={<Orders />} />      
        <Route path='/Cart' element={<Cart />} />  
        <Route path='/category/:categoryName' element={<Result/>}/>
        <Route path='/products/:productId' element={<ProductDetail />} />
{/* 
        <Route path='/products/:ProductId' element={<ProductDetail/>}/> */}
      </Routes>
    </Router>
  );
}

export default Routing;
