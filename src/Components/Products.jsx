import { Link } from "react-router-dom";
import landingData from "../assets/Data/ProductsData.json";
const Products = () => {
  return (
    <div className="grid justify-center gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {Object.keys(landingData.fourBoxes).map((boxKey) => (
        <div key={boxKey} className="bg-white max-w-[355px] p-5">
          <div className="text-[21px] font-semibold">
            {/* <div className="h-16 text-xl font-semibold bg-red-800"> */}
            {landingData.fourBoxes[boxKey].title}
          </div>
          <div className="grid items-center justify-center grid-cols-2 gap-3 my-2 gap-y-5">
            {landingData.fourBoxes[boxKey].items.map((item, i) => (
              <div
                className="flex flex-col items-center justify-center cursor-pointer"
                key={i}
              >
                <img
                  className="object-cover h-28"
                  src={item.imgTag}
                  alt={`product-${i}`}
                />
                <div className="text-[12px] font-semibold h-10 w-full">
                  {item.label}
                </div>
              </div>
            ))}
          </div>
          <Link to="/appliances">
            <div className="inline-flex text-xs text-blue-500 cursor-pointer">
              {landingData.fourBoxes[boxKey].endTitle}
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Products;
