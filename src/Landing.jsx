import Products from "./Components/Products";
import Slider from "./Components/Slider";
import { useStateValue } from "./Checkout/StateProvider";
import landingData from "./assets/Data/ProductsData.json";
import CustomSnackBar from "./Components/CustomSnackBar";
import { useEffect, useState } from "react";

const Landing = () => {
  const [open, setOpen] = useState(true);
  const [{ basket }, dispatch] = useStateValue();
  // console.log(basket);

  const addToBasket = (selectedItem) => {
    setOpen(true);
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
    // alert("Item Added");
    // setOpen(true);
    Swal.fire("Hey!", "Item Added to the Cart", "success");
  };

  return (
    <>
      <div className="bg-[#e3e6e6] ">
        <div className="">
          {/* <img
          className="w-full z-[-1] mb-[-310px]"
          src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/OHL/Budget/Unrec/GW/BS_2X_PC_1._CB580097921_.jpg"
          alt="Landing1stImage"
          style={{
            maskImage:
              "linear-gradient(to bottom, rgba(0,0,0,1), rgba(0,0,0,0))",
          }}
        /> */}
          <CustomSnackBar
            open={open}
            setOpen={setOpen}
            stateColor={"success"}
            message={"Item Successfully Added"}
          />
          <div className="lg:mb-[-450px] xs:mb-[-160px]">
            <Slider />
          </div>
          <div className="relative mx-7 z-1">
            <Products />
          </div>
          <div className="p-5 bg-white m-7">
            <div className="mb-4 text-xl font-semibold">Today's Deals</div>
            <div className="flex gap-3">
              <div className="flex gap-3 overflow-x-auto">
                {landingData.mobilePhones.map((phone, index) => (
                  <div className="min-w-64" key={index}>
                    <div className="flex items-center justify-center mb-2 bg-gray-200 rounded-md">
                      <img
                        className="object-cover py-2 mix-blend-darken"
                        src={phone.imgSRC}
                        alt={phone.title}
                      />
                    </div>
                    <div className="flex items-center text-xs font-semibold">
                      <span className="p-1 px-2 text-white bg-red-700 rounded-sm">
                        {phone.discount}
                      </span>
                      <span className="p-1 px-2 text-red-700">
                        Limited time deal
                      </span>
                    </div>
                    <div className="my-1 text-lg">
                      <small>₹</small>
                      {phone.price}
                      {"  "}
                      <span className="text-xs font-light text-gray-600">
                        M.R.P: <span className="line-through">{phone.mrp}</span>
                      </span>
                    </div>
                    <div className="flex items-center justify-between mr-1 ">
                      <div className="text-base font-semibold ">
                        {phone.title}
                      </div>
                      <button
                        className="p-1 px-3 rounded-sm bg-theme-amazonYC hover:bg-green-500 hover:text-white"
                        onClick={() => addToBasket(phone)}
                      >
                        Add
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          &nbsp;
        </div>
      </div>
    </>
  );
};

export default Landing;
