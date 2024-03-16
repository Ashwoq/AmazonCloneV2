import React from "react";
import footerData from "../src/assets/Data/Footer.json";
import { Link } from "react-router-dom";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const downFooter = footerData.find((item) => item.name === "downFooter");
  const topFooter = footerData.find((item) => item.name === "topFooter");
  const countries = footerData.find((item) => item.name === "countries");

  return (
    <div className="">
      <div
        onClick={scrollToTop}
        className="bg-[#37475A] text-center lg:py-4 xs:py-2 text-white xs:text-[11px] lg:text-sm font-semibold cursor-pointer hover:bg-slate-500"
      >
        Back to Top
      </div>
      <div className="flex flex-col xs:hidden lg:flex ">
        <div className="bg-[#232F3E] ">
          <div className="grid max-w-5xl grid-cols-4 gap-16 mx-auto my-2 text-xs leading-4 border-b border-[#3a4553] pb-14 py-10">
            {topFooter &&
              topFooter.data.map((column, index) => (
                <div key={index} className="text-white ">
                  <div className="my-4 text-[18px] font-semibold ">
                    {column.colName}
                  </div>
                  <div className="">
                    {column.colData.map((item, idx) => (
                      <div
                        className="text-[14px] font-base leading-6 text-[#d2d3d4] cursor-not-allowed decoration-inherit hover:underline"
                        key={idx}
                      >
                        {item.calValue}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
          </div>
          <div className="my-10 ">
            <div className="flex items-center justify-center ">
              <Link to={"/"}>
                <img
                  className="ml-5 cursor-pointer mt-[14px] w-24 object-contain"
                  src="https://pngimg.com/d/amazon_PNG11.png"
                  alt="amazon-logo"
                />
              </Link>
              <span className="mr-5 text-white">.in</span>
            </div>
            <div className="flex flex-wrap items-center justify-center max-w-3xl gap-2 mx-auto mt-4">
              {countries &&
                countries.data.map((x, i) => (
                  <div
                    className="flex text-xs leading-3 text-white cursor-not-allowed hover:underline"
                    key={i}
                  >
                    {x.country}
                  </div>
                ))}
            </div>
          </div>
        </div>
        <div className="bg-[#131a22]">
          <div className="grid max-w-4xl grid-cols-4 py-10 m-2 mx-auto text-xs leading-3 gap-x-16 gap-7">
            {/* <div className="max-w-5xl"> */}
            {downFooter &&
              downFooter.data.map((item, index) => (
                <div key={index} className="max-w-[130px] ">
                  <div className="text-white cursor-not-allowed decoration-inherit hover:underline ">
                    {item.head}
                  </div>
                  <div className="decoration-inherit hover:underline cursor-not-allowed text-[#99978a]">
                    {item.para}
                  </div>
                </div>
              ))}
            {/* </div> */}
          </div>

          <div className="grid max-w-lg grid-cols-3 mx-auto my-2 mb-8 text-xs font-medium text-center text-[#dddddd]">
            <div className="cursor-not-allowed hover:underline ">
              Conditions of Use & Sale
            </div>
            <div className="cursor-not-allowed hover:underline ">
              Privacy Notice
            </div>
            <div className="cursor-not-allowed hover:underline ">
              Interest-Based Ads{" "}
            </div>
            <div className="col-span-3 cursor-not-allowed hover:underline">
              © 1996-2024, Amazon.com, Inc. or its affiliates
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col xs:flex lg:hidden ">
        <div className="bg-[#232F3E] ">
          <div className="grid max-w-xs grid-cols-4 gap-1 mx-auto my-3 text-xs leading-4 border-b border-[#3a4553]">
            {topFooter &&
              topFooter.data.map((column, index) => (
                <div key={index} className="text-white ">
                  <div className="my-4 text-[11px] text-center font-semibold ">
                    {column.colName}
                  </div>
                </div>
              ))}
          </div>
          <div className="my-1 mb-3">
            <div className="flex items-center justify-center ">
              <Link to={"/"}>
                <img
                  className="ml-5 cursor-pointer mt-[5px] w-16 object-contain"
                  src="https://pngimg.com/d/amazon_PNG11.png"
                  alt="amazon-logo"
                />
              </Link>
              <span className="relative mr-5 text-xs text-white bottom-1">
                .in
              </span>
            </div>
          </div>
        </div>
        <div className="bg-[#131a22]">
          <div className="grid max-w-xs grid-cols-3 mx-auto my-6 leading-4 text-[8px] font-medium text-center text-[#dddddd]">
            <div className="cursor-not-allowed hover:underline ">
              Conditions of Use & Sale
            </div>
            <div className="cursor-not-allowed hover:underline ">
              Privacy Notice
            </div>
            <div className="cursor-not-allowed hover:underline ">
              Interest-Based Ads{" "}
            </div>
            <div className="col-span-3 cursor-not-allowed hover:underline">
              © 1996-2024, Amazon.com, Inc. or its affiliates
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
