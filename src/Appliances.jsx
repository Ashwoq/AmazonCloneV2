import React from "react";
import AllProducts from "./AllProducts";
import data from "../src/assets/Data/ProductsData.json";

const Appliances = () => {
  const appliancesData = data.homeAppliances;
  return (
    <div>
      <AllProducts productItem={appliancesData} />
    </div>
  );
};

export default Appliances;
