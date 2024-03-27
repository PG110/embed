import React from "react";
import "./HomeSectionCard.css";
import { useLocation, useNavigate } from "react-router-dom";

const HomeSectionCard = ({ product }) => {
  const { title, price, disscount, selling_price } = product;
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(`/${5}`);
  };

  return (
    <div
      onClick={handleNavigate}
      className="productCard cursor-pointer flex flex-col items-center bg-white rounded-lg shadow-xl w-[15rem] h-[20rem] overflow-hidden mx-3 border border-blue-300"
    >
      <div className="h-[10rem] w-full overflow-hidden">
        <img
          className="object-cover object-top w-full h-full"
          src={product.image}
          alt=""
        />
      </div>

      <div className="textPart bg-white p-3 ">
        <p className="">{title}</p>

        <div className="flex space-x-2 items-center">
          <p className="font-semibold">{selling_price}</p>
          <p className="opacity-50 line-through">{price}</p>
          <p className="text-green-600 font-semibold">{disscount}</p>
        </div>
      </div>
    </div>
  );
};

export default HomeSectionCard;
