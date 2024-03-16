import React from "react";
import { useStateValue } from "./StateProvider";
import { getBasketTotal } from "./Reducer";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { useNavigate } from "react-router-dom";

const SubTotal = () => {
  const history = useNavigate();
  const [{ basket }, dispatch] = useStateValue();
  return (
    <div className="flex flex-col justify-between p-5 bg-white border-gray-500 rounded-sm">
      <div className="flex text-[#008500] ">
        <div className="mr-1 ml-[-5px]">
          <CheckCircleIcon />
        </div>
        <div className="text-[#008500] text-xs font-medium">
          Part of your order qualifies for a FREE Delivery.
          <span className="text-[#565959]">
            &nbsp;Select this option at checkout&nbsp;
          </span>
          <span className="text-[#007185]">Details</span>
        </div>
      </div>

      <div className="my-2 ">
        <div className="text-lg">
          Subtotal ({basket.length} items):
          <strong>₹{getBasketTotal(basket).toFixed(2)}</strong>
        </div>
        <small className="flex items-center ">
          <input type="checkbox" className="mt-1 mr-1" />
          This order contains a gift
        </small>
      </div>

      {basket.length > 0 ? (
        <button
          className="rounded-xl  bg-[#FFD814] hover:bg-[#f7ca00] p-1 border my-3 text-center px-6 pb-2 border-[#FCD200] shadow-md"
          onClick={(e) => {
            history("/payment");
          }}
        >
          Proceed to Checkout
        </button>
      ) : (
        <button className="rounded-xl  bg-[#FFD814] hover:bg-[#f7ca00] p-1 border my-3 text-center px-6 pb-2 cursor-not-allowed border-[#FCD200] shadow-md ">
          Please Add Products
        </button>
      )}
    </div>
  );
};

export default SubTotal;
