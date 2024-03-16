import { ChevronLeft, ChevronRight } from "@mui/icons-material";
import React, { useEffect, useState } from "react";

const Slider = () => {
  const slides = [
    {
      url: "https://images-eu.ssl-images-amazon.com/images/G/31/img21/OHL/Budget/Unrec/GW/BS_2X_PC_1._CB580097921_.jpg",
      alt: "Landing1stImage",
    },
    {
      url: "https://images-eu.ssl-images-amazon.com/images/G/31/OHL/24/BAU/feb/PC_hero_1_2x_1._CB582889946_.jpg",
      alt: "Landing1stImage",
    },
    {
      url: "https://images-eu.ssl-images-amazon.com/images/G/31/img23/Beauty/GW/Skincare._CB580162062_.jpg",
      alt: "Landing1stImage",
    },
    {
      url: "https://images-eu.ssl-images-amazon.com/images/G/31/img22/Wireless/devjyoti/GW/Uber/Nov/D103625178_DesktopTallHero_3000x1200._CB574597993_.jpg",
    },
    {
      url: "https://images-eu.ssl-images-amazon.com/images/G/31/img22/CE/March/Unrec/HF/Under_1499_Tallhero_3000x1200._CB581730972_.jpg",
      alt: "Landing1stImage",
    },
    {
      url: "https://images-eu.ssl-images-amazon.com/images/G/31/img23/Consumables/X-GL/Feb5/PC_Hero_1_3000._CB582457311_.jpg",
      alt: "Landing1stImage",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div className="lg:h-[800px] xs:h-[300px] w-full m-auto relative group">
      <div
        className="w-full h-full bg-center bg-cover duration-700 
        z-[-1] 
        "
        style={{
          backgroundImage: `url(${slides[currentIndex].url})`,
          // maskImage: "linear-gradient(to bottom, rgba(0,0,0,1), rgba(0,0,0,0))",
          maskImage:
            "linear-gradient(to bottom, rgba(0,0,0,1), rgba(0,0,0,0.9), rgba(0,0,0,0))",
        }}
      >
        <div className="hidden group-hover:flex absolute top-[35%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer ">
          <ChevronLeft onClick={prevSlide} size={30} />
        </div>
        <div className="hidden group-hover:flex absolute top-[35%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
          <ChevronRight onClick={nextSlide} size={30} />
        </div>
      </div>
    </div>
  );
};

export default Slider;
