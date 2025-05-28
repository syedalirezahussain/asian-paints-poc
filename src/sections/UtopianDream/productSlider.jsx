import { integerToRoman } from "@/lib/utils";

// constants
import { productSliderItems } from "@/constants";
import React, { useEffect, useState } from "react";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import { SlArrowRight } from "react-icons/sl";

// styles
import styles from "./styles.module.scss";

const ProductSlider = () => {
  const [activeSlide, setActiveSlide] = useState(productSliderItems[0]);

  const isLastSlide =
    productSliderItems.findIndex((item) => item.id === activeSlide.id) ===
    productSliderItems.length - 1;

  useEffect(() => {
    setActiveSlide(productSliderItems[0]);
  }, []);

  return (
    <div className="w-full flex justify-center items-start mt-[52px] gap-12 pl-[100px]">
      <ul className="w-full basis-[30%] h-full flex flex-col justify-start items-center py-12">
        {productSliderItems.map((item, index) => (
          <li
            className={`relative w-full flex justify-center items-center my-6 first:!mt-0 last:mb-0 ${
              activeSlide.id === item.id && styles.productSliderActive
            }`}
            key={item.id}
          >
            <span className="absolute left-0 top-0 bottom-0 my-auto text-[28px] text-[#A8A8A8] leading-[102%]">
              {integerToRoman(index + 1)}
            </span>
            <p
              className={`text-2xl leading-[102%] ${
                activeSlide.id === item.id
                  ? "font-bold text-black transition-all duration-300 ease-in-out"
                  : ""
              }`}
            >
              {item.title}
            </p>
          </li>
        ))}
      </ul>

      <div className="w-[66.5%] h-[545px]">
        <Splide
          className="productSlider relative h-full w-full"
          hasTrack={false}
          aria-label="My Favorite Images"
          options={{
            pagination: false,
            autoWidth: true,
            focus: "center",
            padding: {
              right: "50%",
            },
            speed: 1000,
          }}
          onMove={(_, newIndex) => {
            setActiveSlide(productSliderItems[newIndex]);
          }}
        >
          <SplideTrack className="max-h-full">
            {productSliderItems.map((item) => (
              <SplideSlide
                key={item.id}
                className={`!w-[380px] h-[545px] px-7 bg-[#F4F4F4] rounded-[20px] py-12 transition-transform duration-500 ease-in-out ${
                  activeSlide.id !== item.id ? "scale-[0.84]" : ""
                } ${
                  item.id + 1 === activeSlide.id
                    ? "translate-x-[85%] !bg-[#D1D1D124]"
                    : ""
                } ${item.id < activeSlide.id - 1 ? "opacity-0" : ""}
                ${item.id === activeSlide.id + 2 ? "-translate-x-[8%]" : ""}
                `}
              >
                <div className="w-full h-full flex flex-col justify-center items-center">
                  <div className="w-full h-full flex-grow flex justify-center items-center overflow-hidden">
                    <img
                      src={item.image}
                      style={item.styles}
                      alt={item.alt}
                      className={`${item.className}`}
                    />
                  </div>

                  <div className="justify-end text-center">
                    <h3 className="text-[#141517] text-lg font-semibold ">
                      {item.title}
                    </h3>
                    <p className="text-[#14151799] text-[14px] font-medium uppercase">
                      {item.price}
                    </p>
                  </div>
                </div>
              </SplideSlide>
            ))}
          </SplideTrack>

          {/* ARROWS */}
          <div className="splide__arrows absolute bottom-7 -left-[50%] flex justify-center items-center gap-3">
            <button className="!w-16 !h-16 splide__arrow splide__arrow--prev !border !border-[#C1C1C1] !bg-white !opacity-100 !left-[unset] !relative focus:!outline-none focus-visible:!outline-none">
              <SlArrowRight stroke="#9a9a9a" size={20} className="!w-2 !h-2" />
            </button>
            <button
              disabled={isLastSlide}
              className={`!w-16 !h-16 splide__arrow splide__arrow--next !border !border-[#C1C1C1] !bg-white 
              !right-[unset] !relative focus:!outline-none focus-visible:!outline-none
              disabled:opacity-50 disabled:cursor-not-allowed ${
                isLastSlide
                  ? "!opacity-50 !pointer-events-none"
                  : "!opacity-100 "
              }`}
            >
              <SlArrowRight stroke="#9a9a9a" className="!w-2 !h-2" size={20} />
            </button>
          </div>
        </Splide>
      </div>
    </div>
  );
};

export default ProductSlider;
