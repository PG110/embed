import React from 'react'
import { Button } from "@mui/material";
import { IconButton } from "@mui/material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";

const CartItem = () => {
  return (
    <div className="p-5 shadow-lg border rounded-md">
      <div className="flex items-center">
        <div className="w-[5rem] h-[5rem] lg:w-[9rem] lg:h-[9rem] ">
          <img
            className="w-full h-full object-cover object-top"
            src="https://cdn01.pharmeasy.in/dam/products_otc/Z47706/sugar-free-gold-500-pellets-with-free-sugar-free-green-40gm-powder-1-1710330150.jpg?dim=1440x0"
            alt=""
          />
        </div>
        <div className="ml-5 space-y-1">
          <p className="font-semibold">cold</p>
          <p className="opacity-70 mt-2"></p>
          <div className="flex space-x-2 items-center pt-3">
            <p className="opacity-50 line-through">₹400</p>
            <p className="font-semibold text-lg">
              ₹1000
            </p>
            <p className="text-green-600 font-semibold">
              72% off
            </p>
          </div>
        </div>
      </div>
      <div className="lg:flex items-center lg:space-x-10 pt-4">
        <div className="flex items-center space-x-2 ">
          <IconButton   color="primary" aria-label="add an alarm">
            <RemoveCircleOutlineIcon />
          </IconButton>

          <span className="py-1 px-7 border rounded-sm">1</span>
          <IconButton  color="primary" aria-label="add an alarm">
            <AddCircleOutlineIcon />
          </IconButton>
        </div>
        <div className="flex text-sm lg:text-base mt-5 lg:mt-0">
          
          <Button  variant="text">
            Remove{" "}
          </Button>
          
        </div>
      </div>
    </div>
  )
}

export default CartItem