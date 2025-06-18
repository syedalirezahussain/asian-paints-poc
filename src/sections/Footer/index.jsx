import React from "react";

// icons
import { FaInstagram } from "react-icons/fa";
import { RiTelegram2Fill } from "react-icons/ri";
import { FaWhatsapp } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { MdArrowOutward } from "react-icons/md";
import useScreenSize from "@/hooks/useScreenSize";

const Footer = () => {
  const isMobile = useScreenSize() < 768;

  return (
    <footer className="max-w-[1318px] w-[calc(100%-16px)] mx-auto md:w-full px-7 py-6 md:p-15 mt-6 flex md:flex-row flex-col justify-between items-stretch rounded-[20px] md:rounded-[32px] bg-[#16191C]">
      <div className="w-full basis-[52%] flex flex-col justify-start items-start">
        <h3 className="text-[34px] md:text-[74px] font-medium leading-[101%] text-white mb-2">
          Curated for you
        </h3>
        <p className="text-[20px] md:text-[24px] leading-[101%] text-[#FFFFFFCC] flex-grow">
          By Asian Paints
        </p>

        {isMobile && (
          <div className="basis-[37%] w-full flex justify-start items-start pt-[84px] pb-[34px]">
            <div className="w-full flex flex-col justify-center items-start gap-8">
              <ul className="list-none basis-[50%] flex flex-wrap justify-between">
                <li className="w-full flex justify-start items-center gap-2 mb-6 uppercase text-[10px] text-[#D0D0C8] leading-[100%] font-medium tracking-[0.4px] opacity-[0.4]">
                  <span className="block w-2 h-2 opacity-[0.2] bg-[#D0D0C8] rounded-full"></span>
                  <p>Contact us</p>
                </li>
                <li className=" text-[14px] text-[#D0D0C8] leading-[140%]">
                  +1 980 971-24-19 <br />
                  hello@asianpaints.com
                </li>

                <li className=" text-[#D0D0C8] leading-[140%]">
                  <div className="flex justify-start items-center gap-[5px]">
                    <p className="text-[14px]">Telegram</p>
                    <MdArrowOutward size={10} />
                  </div>
                  <div className="flex justify-start items-center gap-[5px]">
                    <p className="text-[14px]">Whatsapp</p>
                    <MdArrowOutward size={10} />
                  </div>
                </li>
              </ul>

              <ul className="list-none basis-[50%]">
                <li className="flex justify-start items-center gap-2 mb-6 uppercase text-[10px] text-[#D0D0C8] leading-[100%] font-medium tracking-[0.4px] opacity-[0.4]">
                  <span className="block w-2 h-2 opacity-[0.2] bg-[#D0D0C8] rounded-full"></span>
                  <p>Headquarters</p>
                </li>
                <li className="mb-3 text-[14px] text-[#D0D0C8] leading-[140%]">
                  1901 Somewhere, Near Paharganj Circle, <br /> South Delhi -
                  81063
                </li>
                <li className="text-[14px] text-[#D0D0C8] leading-[140%]">
                  10am—6pm
                </li>
              </ul>
            </div>
          </div>
        )}

        <div className="w-full flex justify-start items-center gap-2">
          <span className="w-10 h-10 flex justify-center items-center rounded-full border border-[#D0D0C833]">
            <RiTelegram2Fill fill="#D0D0C8" />
          </span>
          <span className="w-10 h-10 flex justify-center items-center rounded-full border border-[#D0D0C833]">
            <FaFacebook fill="#D0D0C8" />
          </span>
          <span className="w-10 h-10 flex justify-center items-center rounded-full border border-[#D0D0C833]">
            <FaWhatsapp fill="#D0D0C8" />
          </span>
          <span className="w-10 h-10 flex justify-center items-center rounded-full border border-[#D0D0C833]">
            <FaInstagram fill="#D0D0C8" />
          </span>
        </div>

        {isMobile && (
          <div className="w-full flex justify-between items-center text-[14px] text-[#CBDADA99] leading-[150%] font-medium mt-6 opacity-[0.6]">
            <p>Privacy</p>
            <p>© 2023 — Copyright</p>
          </div>
        )}
      </div>

      {!isMobile && (
        <div className="basis-[37%] w-full flex flex-col justify-start items-start">
          <div className="w-full flex justify-between items-start border-t border-[#CBDADA] pt-6">
            <ul className="list-none basis-[50%]">
              <li className="flex justify-start items-center gap-2 mb-6 uppercase text-[10px] text-[#D0D0C8] leading-[100%] font-medium tracking-[0.4px] opacity-[0.4]">
                <span className="block w-2 h-2 opacity-[0.2] bg-[#D0D0C8] rounded-full"></span>
                <p>Contact us</p>
              </li>
              <li className="mb-8 text-[14px] text-[#D0D0C8] leading-[140%]">
                +1 980 971-24-19 <br />
                hello@asianpaints.com
              </li>

              <li className=" text-[#D0D0C8] leading-[140%]">
                <div className="flex justify-start items-center gap-[5px]">
                  <p className="text-[14px]">Telegram</p>
                  <MdArrowOutward size={10} />
                </div>
                <div className="flex justify-start items-center gap-[5px]">
                  <p className="text-[14px]">Whatsapp</p>
                  <MdArrowOutward size={10} />
                </div>
              </li>
            </ul>

            <ul className="list-none basis-[50%]">
              <li className="flex justify-start items-center gap-2 mb-6 uppercase text-[10px] text-[#D0D0C8] leading-[100%] font-medium tracking-[0.4px] opacity-[0.4]">
                <span className="block w-2 h-2 opacity-[0.2] bg-[#D0D0C8] rounded-full"></span>
                <p>Headquarters</p>
              </li>
              <li className="mb-3 text-[14px] text-[#D0D0C8] leading-[140%]">
                1901 Somewhere, Near Paharganj Circle, <br /> South Delhi -
                81063
              </li>
              <li className="text-[14px] text-[#D0D0C8] leading-[140%]">
                10am—6pm
              </li>
            </ul>
          </div>

          <div className="w-full flex justify-between items-center mt-[200px] text-[14px] text-[#CBDADA99] leading-[150%] font-medium  opacity-[0.6]">
            <p>Privacy</p>
            <p>© 2023 — Copyright</p>
          </div>
        </div>
      )}
    </footer>
  );
};

export default Footer;
