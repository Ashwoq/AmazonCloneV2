import React from "react";
import SubTotal from "./SubTotal";
import CheckOutProducts from "./CheckOutProducts";
import { useStateValue } from "./StateProvider";

const Checkout = () => {
  const [{ basket, user }, dispatch] = useStateValue();
  return (
    <div className="bg-[#eaeded]">
      <div className="flex ">
        <img
          className="w-[100%]"
          src="https://m.media-amazon.com/images/G/01/AdProductsWebsite/images/AUX/ILB_BrightColors_Approved._TTW_.jpg"
          alt="bannerAD"
        />
      </div>

      <div className="w-full lg:flex sm:block ">
        <div className="lg:w-[78%] sm:w-[95%] lg:p-5 lg:m-5 lg:mt-8 bg-white xs:m-4 ">
          <h1 className="xs:p-5 xs:pb-0 lg:p-0">Hello, {user?.email}</h1>

          <div className="flex justify-between border-[#dddddd] border-b-[1px] pb-3 xs:m-5 lg:m-0 lg:my-3 lg:mr-5 font-semibold">
            <div className="lg:text-3xl xs:text-lg">
              {basket.length > 0
                ? "Shopping Cart"
                : "Your Amazon Cart is empty"}
            </div>
            <div className="relative text-s text-[#565959] lg:top-7">
              {basket.length > 0 ? "Price" : ""}
            </div>
          </div>
          {basket.map((x, i) => (
            <div key={i}>
              <CheckOutProducts
                title={x.title}
                price={x.price}
                sellerName={x.sellerName}
                sellerCompany={x.sellerCompany}
                description={x.description}
                src={x.image}
                ratings={x.ratings}
              />
            </div>
          ))}
        </div>
        <div className="bg-[#eaeded] lg:w-[22%] sm:w-[95%] lg:m-5 lg:ml-0 lg:mt-8 xs:m-4">
          <SubTotal />{" "}
        </div>
        &nbsp;
      </div>
    </div>
  );
};

export default Checkout;
