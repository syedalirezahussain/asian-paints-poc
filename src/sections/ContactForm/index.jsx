import React from "react";

// assets
import ContactFormImage from "@/assets/contact-form-1.png";

// icons
import { FaCheck } from "react-icons/fa";
import { HiArrowRight } from "react-icons/hi";
import useScreenSize from "@/hooks/useScreenSize";
import FadeInOnScroll from "@/components/FadeInOnScroll";

const ContactForm = () => {
  const isMobile = useScreenSize() < 768;
  return (
    <FadeInOnScroll className="w-full flex md:max-h-[568px] justify-between items-stretch max-w-[1318px] mt-[81px] md:mt-[110px] bg-[#F9F9F9] md:rounded-[20px] md:border border-[#0000001A] overflow-hidden">
      <div className="w-full md:basis-[57%] flex flex-col gap-[32px] justify-center items-start  px-3 md:px-14 md:py-[77px] py-8">
        <div className="w-full flex flex-col justify-start items-start text-[#3a3a3a] mb-[10px]">
          {!isMobile && (
            <p className="text-2xl leading-[110%]">A place you call your own</p>
          )}
          <h3 className="text-[36px] md:text-[38px] leading-[110%] tracking-[0.38px] md:pl-0 pl-7">
            Build your &nbsp;
            <em className="not-italic relative right-[20px] font-bold bg-gradient-to-r from-[#8D5BCF] to-[#472E69] bg-clip-text text-transparent">
              #BeautifulHome
            </em>
            {!isMobile ? (
              <>{"With Us"}</>
            ) : (
              <p className="text-[#3a3a3a] not-italic text-base self-center">
                With Asian Paints
              </p>
            )}
          </h3>
        </div>

        {/* IMAGE */}
        {isMobile && (
          <div className="w-full h-[358px] flex justify-center items-center rounded-[20px] overflow-hidden">
            <img
              src={ContactFormImage}
              alt=""
              className="w-full object-cover"
            />
          </div>
        )}

        {isMobile ? (
          <form className="grid md:grid-cols-2 gap-3 w-full px-3">
            {/* First Input */}
            <label className="w-full flex flex-col justify-center items-start rounded-lg bg-white px-6 py-[8.5px]">
              <p className="text-[11px] leading-[132%] tracking-[-1%] text-[#00000066]">
                First Name
              </p>
              <input
                type="text"
                className="text-[14px] md:text-base leading-[132%] tracking-[-0.16px] text-black col-span-1"
              />
            </label>

            {/* Second Input */}
            <label className="w-full flex flex-col justify-center items-start rounded-lg bg-white px-6 py-[8.5px]">
              <p className="text-[11px] leading-[132%] tracking-[-1%] text-[#00000066]">
                Last Name
              </p>
              <input
                type="text"
                className="text-[14px] md:text-base leading-[132%] tracking-[-0.16px] text-black col-span-1"
              />
            </label>

            {/* Phone Number Input */}
            <div className="flex items-center px-6 py-4 text-[14px] leading-[132%] tracking-[-0.16px] text-[#b7b7b7] rounded-lg bg-white">
              <span className="text-[#949494] mr-2 flex items-center leading-[132%] tracking-[-0.16px]">
                +91
                <span className="h-[15px] md:h-5 border-l border-[#949494] mx-3" />
              </span>
              <input
                type="tel"
                className="outline-none flex-1 bg-transparent"
              />
            </div>

            {/* Fourth Input */}
            <input
              type="email"
              placeholder="Email"
              className="px-6 py-4 md:py-5 text-[14px] md:text-base leading-[132%] tracking-[-0.16px] text-[#b7b7b7] placeholder:text-[#949494] rounded-lg bg-white col-span-1"
            />
          </form>
        ) : (
          <form className="grid md:grid-cols-2 gap-3 w-full">
            {/* First Input */}
            <input
              type="text"
              placeholder="First Name"
              className="px-6 py-[8.5px] md:py-5 text-[14px] md:text-base leading-[132%] tracking-[-0.16px] text-[#b7b7b7] rounded-lg border border-[#D1DEE1] bg-white col-span-1"
            />

            {/* Second Input */}
            <input
              type="text"
              placeholder="Last Name"
              className="px-6 py-[8.5px] md:py-5 text-[14px] md:text-base leading-[132%] tracking-[-0.16px] text-[#b7b7b7] rounded-lg border border-[#D1DEE1] bg-white col-span-1"
            />

            {/* Phone Number Input */}
            <div className="flex items-center px-6 py-[8.5px] md:py-5 text-[14px] md:text-base leading-[132%] tracking-[-0.16px] text-[#b7b7b7] rounded-lg border border-[#D1DEE1] bg-white col-span-1">
              <span className="text-[#dbdbdb] mr-2 flex items-center leading-[132%] tracking-[-0.16px]">
                +91
                <span className="h-[15px] w-[1px] bg-[#dbdbdb] mx-3" />
              </span>
              <input
                type="tel"
                className="outline-none flex-1 bg-transparent"
              />
            </div>

            {/* Fourth Input */}
            <input
              type="email"
              placeholder="Email"
              className="px-6 py-[8.5px] md:py-5 text-[14px] md:text-base leading-[132%] tracking-[-0.16px] text-[#b7b7b7] rounded-lg border border-[#D1DEE1] bg-white col-span-1"
            />
          </form>
        )}

        <label className="relative flex items-center justify-between px-3 md:px-0">
          <input type="checkbox" className="peer sr-only" />
          <span
            className={`
      flex items-center justify-center min-w-[20px] w-[20px] h-[20px] rounded-[4px]
      border border-[rgba(0,0,0,0.02)] bg-[#efefef]
      backdrop-blur-[3.2979px] transition-all
      peer-checked:bg-gradient-to-l from-[#8D5BCF] to-[#7445B2]
      peer-checked:text-white mr-2
    `}
          >
            <FaCheck size={10} fill="#efefef" />
          </span>
          <span className="text-sm select-none text-[#6B6767]">
            Yes, I would like to receive important updates and notifications on
            WhatsApp
          </span>
        </label>

        <button className="gradientBorder md:w-auto w-[calc(100%-8px)] mx-auto md:mx-[unset] !py-6 !pl-8 md:!pl-10 !pr-9 flex justify-between items-center gap-6 !rounded-full ">
          <p className="md:text-lg leading-[136%] tracking-[-0.36px] font-medium text-white">
            Book A Free Site Visit
          </p>
          <HiArrowRight size={24} fill="#fff" />
        </button>
      </div>

      {/* IMAGE */}
      {!isMobile && (
        <div className="w-full basis-[42%] flex justify-center items-center">
          <img src={ContactFormImage} alt="" className="w-full object-cover" />
        </div>
      )}
    </FadeInOnScroll>
  );
};

export default ContactForm;
