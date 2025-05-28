import { similarProductItems } from "@/constants";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import { useEffect, useState } from "react";
import { SlArrowRight } from "react-icons/sl";

const SimilarProducts = () => {
  const [activeSlide, setActiveSlide] = useState(similarProductItems[0]);

  const isLastSlide =
    similarProductItems.findIndex((item) => item.id === activeSlide.id) ===
    similarProductItems.length - 1;

  useEffect(() => {
    setActiveSlide(similarProductItems[0]);
  }, []);
  return (
    <div className="pl-[100px] w-full flex flex-col gap-[30px] justify-start items-center pt-[80px] pb-[120px]">
      <h3 className="w-full text-[74px] leading-[112%] text-[#3A3A3A]">
        <em className="not-italic font-bold">Similar</em> Products
      </h3>

      <Splide
        className="productSlider relative h-full w-full"
        hasTrack={false}
        aria-label="My Favorite Images"
        options={{
          perPage: 1,
          pagination: false,
          speed: 1000,
          fixedWidth: "470px",
          height: "640px",
          gap: 40,
          padding: {
            right: "100%",
          },
        }}
        onMove={(_, newIndex) => {
          setActiveSlide(similarProductItems[newIndex]);
        }}
      >
        <SplideTrack className="max-h-full">
          {similarProductItems.map((item) => (
            <SplideSlide key={item.id}>
              <div className="w-full h-full flex flex-col justify-start items-center gap-[27px]">
                <div className="w-full h-full flex justify-center items-center flex-grow bg-[#f6f6f6] rounded-[20px]">
                  <img
                    className="w-fit h-fit mix-blend-multiply "
                    src={item.image}
                    alt={item.title}
                    style={item.styles}
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
        <div className="splide__arrows absolute -top-[75px] right-[63px] flex justify-center items-center gap-3">
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
  );
};

export default SimilarProducts;
