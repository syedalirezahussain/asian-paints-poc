import FadeInOnScroll from "@/components/FadeInOnScroll";
import { similarProductItems } from "@/constants";
import useScreenSize from "@/hooks/useScreenSize";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import { useEffect, useState } from "react";
import { SlArrowRight } from "react-icons/sl";

const SimilarProducts = () => {
  const isMobile = useScreenSize() < 768;

  const [activeSlide, setActiveSlide] = useState(similarProductItems[0]);

  const isLastSlide =
    similarProductItems.findIndex((item) => item.id === activeSlide.id) ===
    similarProductItems.length - 1;

  const isFirstSlide =
    similarProductItems.findIndex((item) => item.id === activeSlide.id) === 0;

  useEffect(() => {
    setActiveSlide(similarProductItems[0]);
  }, []);
  return (
    <FadeInOnScroll className="md:pl-[64px] w-full flex flex-col gap-[30px] justify-start items-center md:pt-[80px] pt-8 pb-[52px] md:pb-[120px]">
      <h3 className="w-full text-2xl md:text-[74px] leading-[112%] px-7 text-[#3A3A3A]">
        <em className="not-italic font-bold">Similar</em> Products
      </h3>

      <Splide
        className="productSlider relative h-full w-full"
        hasTrack={false}
        aria-label="Similar Products"
        options={{
          perPage: 1,
          pagination: false,
          speed: 1000,
          fixedWidth: isMobile ? "260px" : "470px",
          height: isMobile ? "375px" : "640px",
          gap: isMobile ? 12 : 40,
          padding: {
            right: isMobile ? "15%" : "50%",
            left: isMobile ? "15%" : null,
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
                    className="md:w-fit md:h-fit mix-blend-multiply "
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
        <div className="splide__arrows absolute -top-[44px] md:-top-[75px] right-5 md:right-[63px] flex justify-center items-center gap-3">
          <button
            disabled={isFirstSlide}
            className={`!w-11 !h-11 md:!w-16 md:!h-16 splide__arrow splide__arrow--prev !border !bg-white
                       !opacity-100 !left-[unset] !relative focus:!outline-none focus-visible:!outline-none
                       disabled:cursor-not-allowed ${
                         isFirstSlide
                           ? "!pointer-events-none !border-[#C1C1C1]"
                           : "!border-[#868686]"
                       }`}
          >
            <SlArrowRight stroke="#9a9a9a" size={20} className="!w-2 !h-2" />
          </button>
          <button
            disabled={isLastSlide}
            className={`!w-11 !h-11 md:!w-16 md:!h-16 splide__arrow splide__arrow--next !border !bg-white 
                       !right-[unset] !relative focus:!outline-none focus-visible:!outline-none
                       disabled:cursor-not-allowed !opacity-100 ${
                         isLastSlide
                           ? "!pointer-events-none !border-[#C1C1C1]"
                           : "!border-[#868686]"
                       }`}
          >
            <SlArrowRight stroke="#9a9a9a" className="!w-2 !h-2" size={20} />
          </button>
        </div>
      </Splide>
    </FadeInOnScroll>
  );
};

export default SimilarProducts;
