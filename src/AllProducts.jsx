import React from "react";
import { useStateValue } from "./Checkout/StateProvider";
import { Star } from "@mui/icons-material";

const AllProducts = ({ productItem }) => {
  const [{ basket }, dispatch] = useStateValue();

  const addToBasket = (selectedItem) => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: selectedItem.title,
        description: selectedItem.description,
        sellerName: selectedItem.sellerName,
        sellerCompany: selectedItem.sellerCompany,
        title: selectedItem.title,
        price: selectedItem.price,
        image: selectedItem.imgSRC,
        ratings: selectedItem.ratings,
      },
    });
    // setOpen(true);
    Swal.fire("Hey!", "Item Added to the Cart", "success");
  };
  return (
    <div className="rounded-md border-[#f1f1f1] border-2 my-2 ">
      <div className="grid justify-center grid-cols-5 gap-4 ">
        <div className="flex items-center lg:col-span-1 xs:col-span-2 justify-center rounded-md bg-[#f1f1f1]">
          <img
            className="object-cover w-44 mix-blend-darken"
            src={productItem.imgSRC}
            alt={productItem.title}
          />
        </div>
        <div className="lg:p-5 xs:p-2 lg:col-span-4 xs:col-span-3 ">
          <div className="font-semibold lg:text-lg xs:text-sm">
            {productItem.title}
          </div>
          <div className=" lg:leading-normal xs:leading-[14px] lg:text-base xs:text-xs lg:mt-[-8px] xs:mt-0">
            {productItem.description}
          </div>
          <div className="mt-1 lg:text-sm xs:text-[11px]">
            {productItem.sellerName}
          </div>

          <div className="font-semibold lg:text-2xl xs:text-base ">
            <small className="relative text-xs align-top top-1">₹</small>
            {productItem.price}
          </div>

          <div>
            <div className="flex ">
              {Array(productItem.ratings)
                .fill()
                .map((_, i) => (
                  <div key={i} className="flex">
                    <Star fontSize="small" className="text-[#ffa41c]" />
                  </div>
                ))}
            </div>
          </div>

          <div className="mt-2 lg:text-xs lg:leading-normal xs:leading-3 xs:text-[10px] text-[#007600] font-medium">
            In stock
          </div>
          <div className="lg:text-xs lg:leading-normal xs:leading-3 xs:text-[10px] text-[#565959] font-medium">
            Sold by
            <span className="text-[#007185]"> {"sellerCompany"}</span>
          </div>
          <div className="lg:text-xs lg:leading-normal xs:leading-3 xs:text-[10px] text-[#565959] font-medium">
            Gift options available.
            <span className="text-[#007185]"> Learn more</span>
          </div>

          <button
            className=" rounded-xl bg-[#FFD814] hover:bg-[#f7ca00] p-1 border my-3 text-center px-6 pb-2 border-[#FCD200] shadow-md xs:scale-[0.75] lg:scale-[1]"
            // onClick={() => {
            //   setOpen(true);
            //   removeFromBasket();
            // }}
            onClick={() => addToBasket(productItem)}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default AllProducts;
