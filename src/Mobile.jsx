import React from "react";
import AllProducts from "./AllProducts";
import data from "../src/assets/Data/ProductsData.json";

const Mobile = () => {
  const mobileData = data.mobilePhones;
  return (
    <div>
      <AllProducts productItem={mobileData} />
    </div>
  );
};

export default Mobile;
