import { heroSliderItems } from "@/constants";
import useScreenSize from "@/hooks/useScreenSize";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";

import "@splidejs/react-splide/css";
import { useEffect, useState } from "react";
import { SlArrowRight } from "react-icons/sl";

const Slider = () => {
  const [activeSlide, setActiveSlide] = useState(heroSliderItems[0]);
  const isMobile = useScreenSize() < 768;

  useEffect(() => {
    setActiveSlide(heroSliderItems[0]);
  }, []);

  return (
    <div className="w-full flex flex-col justify-start items-center">
      <Splide
        className="heroSlider relative h-[390px] w-full"
        hasTrack={false}
        aria-label="My Favorite Images"
        options={{
          pagination: false,
          type: "loop",
          arrows: !isMobile,
          height: isMobile ? 390 : null,
        }}
        onMove={(_, newIndex) => {
          setActiveSlide(heroSliderItems[newIndex]);
        }}
      >
        <SplideTrack className="max-h-full  h-full">
          {heroSliderItems.map((item) => (
            <SplideSlide key={item.id} className="h-full w-full">
              <div className="w-full h-full flex justify-center items-center">
                <img
                  src={item.image}
                  alt={item.alt}
                  className={`${item.className}`}
                />
              </div>
            </SplideSlide>
          ))}
        </SplideTrack>
        {/* ARROWS */}
        <div className="splide__arrows absolute bottom-7 right-8 flex justify-center items-center gap-3">
          <button className="!w-16 !h-16 splide__arrow splide__arrow--prev !bg-white !opacity-100 !left-[unset] !relative focus:!outline-none focus-visible:!outline-none">
            <SlArrowRight stroke="#9a9a9a" size={20} className="!w-2 !h-2" />
          </button>
          <button className="!w-16 !h-16 splide__arrow splide__arrow--next !bg-white !opacity-100 !right-[unset] !relative focus:!outline-none focus-visible:!outline-none">
            <SlArrowRight stroke="#9a9a9a" className="!w-2 !h-2" size={20} />
          </button>
        </div>

        {!isMobile && (
          <>
            {/* PAGINATION */}
            <ul className="h-[88px] md:h-auto flex justify-center items-center gap-2 mt-5 md:mt-0 md:absolute md:left-9 md:bottom-7">
              {heroSliderItems.map((item) => {
                return (
                  <li role="presentation" key={item?.id}>
                    <img
                      src={item.image}
                      alt={item.alt}
                      className={`is-active w-10 h-10 overflow-hidden rounded-[8px] ${
                        activeSlide.id === item.id
                          ? "!w-16 !h-16 mb-6 transition-all duration-300 ease-in-pagination"
                          : ""
                      }`}
                    />
                  </li>
                );
              })}
            </ul>
          </>
        )}
      </Splide>
      {isMobile && (
        <>
          {/* PAGINATION */}
          <ul className="h-[88px] md:h-auto flex justify-center items-center gap-2 mt-5 md:mt-0 md:absolute md:left-9 md:bottom-7">
            {heroSliderItems.map((item) => {
              return (
                <li role="presentation" key={item?.id}>
                  <img
                    src={item.image}
                    alt={item.alt}
                    className={`is-active w-10 h-10 overflow-hidden rounded-[8px] ${
                      activeSlide.id === item.id
                        ? "!w-16 !h-16 mb-6 transition-all duration-300 ease-in-pagination"
                        : ""
                    }`}
                  />
                </li>
              );
            })}
          </ul>
        </>
      )}
    </div>
  );
};

export default Slider;
