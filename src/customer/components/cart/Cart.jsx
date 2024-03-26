import React from "react";
import CartItem from "./CartItem";
import { Button } from "@mui/material";
import HomePageLayout from "../homepagelayout/HomePageLayout";

const Cart = () => {
  return (
    <HomePageLayout>
         <div className="lg:grid grid-cols-3 lg:px-16 relative">
        <div className=" col-span-2">
          {[1, 1, 1, 1].map((item) => (
            <CartItem />
          ))}
        </div>
        <div className="px-5 sticky top-0 h-[100vh] mt-5 lg:mt-0 ">
          <div className="border p-5 bg-white shadow-lg rounded-md">
            <p className="font-bold opacity-60 pb-4">PRICE DETAILS</p>
            <hr />

            <div className="space-y-3 font-semibold">
              <div className="flex justify-between pt-3 text-black ">
                <span>Price (300 item)</span>
                <span>₹4000</span>
              </div>
              <div className="flex justify-between">
                <span>Discount</span>
                <span className="text-green-700">-₹400</span>
              </div>
              <div className="flex justify-between">
                <span>Delivery Charges</span>
                <span className="text-green-700">Free</span>
              </div>
              <hr />
              <div className="flex justify-between font-bold text-lg">
                <span>Total Amount</span>
                <span className="text-green-700">₹1000</span>
              </div>
            </div>

            <Button
              variant="contained"
              type="submit"
              sx={{ padding: ".8rem 2rem", marginTop: "2rem", width: "100%" }}
            >
              Check Out
            </Button>
          </div>
        </div>
      </div>
    </HomePageLayout>
  );
};

export default Cart;
