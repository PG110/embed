import React from "react";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {Button} from "@mui/material";
import Homepage from "../customer/pages/Home/Homepage"
import Contact from "../customer/pages/contact/Contact"
// import { customTheme, customerTheme } from "../Admin/them/customeThem";
import Healthcare from "../customer/components/Healthcare/Healthcare";
import Aboutus from "../customer/pages/aboutus/Aboutus";
import Labtest from "../customer/pages/Lab Tests/Labtest";
import Cart from "../customer/components/cart/Cart";
import ProductDetails from "../customer/pages/Home/ProductDetails";

const CustomerRoutes = () => {
  return (
    <div>
    
        <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/Labtest" element={<Labtest />} />
            <Route path="/healthcare" element={<Healthcare />} />
            <Route path="/aboutus" element={<Aboutus />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/productdetails" element={<ProductDetails />} />
            Commented out routes
            {/* <Route path="/:lavelOne/:lavelTwo/:lavelThree" element={<Product />} />
            <Route path="/account/order" element={<Order />} />
            <Route path="/account/order/:orderId" element={<OrderDetails />} />
            <Route path="/account/rate/:productId" element={<RateProduct />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/payment/:orderId" element={<PaymentSuccess />} />
            */}
        </Routes>
     
  
      
    </div>
  );
};

export default CustomerRoutes;
