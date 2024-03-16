import React, { useState } from "react";
import { useStateValue } from "./StateProvider";
import CustomSnackBar from "../Components/CustomSnackBar";
import { Star } from "@mui/icons-material";

const CheckOutProducts = ({
  title,
  price,
  src,
  sellerName,
  description,
  sellerCompany,
  hideButton,
  ratings,
}) => {
  const [{ basket }, dispatch] = useStateValue();
  const [open, setOpen] = useState(true);

  const removeFromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: title,
    });
    Swal.fire("😒", "Item has been Deleted ", "success");
  };

  return (
    <div className="">
      {/* <CustomSnackBar
        open={open}
        setOpen={setOpen}
        stateColor={"error"}
        message="Item Deleted !!!"
      /> */}
      <div className="grid justify-center grid-cols-5 lg:gap-4 xs:gap-2 lg:p-5 xs:p-2 my-1 lg:border-[#dddddd] lg:border-b-[1px] ">
        <div className="flex items-center justify-center rounded-md lg:col-span-1 xs:col-span-2">
          <img
            className="object-cover w-44 mix-blend-darken"
            src={src}
            alt={title}
          />
        </div>
        <div className="col-span-2 lg:col-span-3">
          <div className="font-semibold lg:text-xl xs:text-md">{title}</div>
          <div className="leading-5 lg:text-base xs:text-xs">{description}</div>
          <div className="mt-1 text-sm">{sellerName}</div>
          <div className="flex">
            {Array(ratings)
              .fill()
              .map((_, i) => (
                <div key={i} className="flex">
                  <Star fontSize="small" className="text-[#ffa41c] " />
                </div>
              ))}
          </div>

          <div className="lg:mt-2 xs:mt-0 lg:text-xs xs:text-[10px] text-[#007600] font-medium lg:leading-normal xs:leading-3">
            In stock
          </div>
          <div className="lg:text-xs lg:leading-normal xs:leading-3 xs:text-[10px] text-[#565959] font-medium">
            Sold by
            <span className="text-[#007185]"> {sellerCompany}</span>
          </div>
          <div className="lg:text-xs lg:leading-normal xs:leading-3 xs:text-[10px] text-[#565959] font-medium">
            Gift options available.
            <span className="text-[#007185] lg:leading-normal xs:leading-3">
              {" "}
              Learn more
            </span>
          </div>
          {!hideButton && (
            <button
              className=" rounded-xl  bg-[#FFD814] hover:bg-[#f7ca00] p-1 border my-3 text-center transition px-6 pb-2 text-sm border-[#FCD200] shadow-md lg:scale-[1] xs:scale-[0.8] "
              onClick={() => {
                // setOpen(true);
                removeFromBasket();
              }}
            >
              Delete
            </button>
          )}
        </div>
        <div className="font-semibold text-right lg:text-xl xs:text-md ">
          <small>₹</small>
          {price}
        </div>
      </div>
    </div>
  );
};

export default CheckOutProducts;
``;
