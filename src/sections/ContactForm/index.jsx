import React from "react";

// assets
import ContactFormImage from "@/assets/contact-form-1.png";

// icons
import { FaCheck } from "react-icons/fa";
import { HiArrowRight } from "react-icons/hi";

const ContactForm = () => {
  return (
    <div className="w-full flex justify-between items-stretch max-w-[1318px] mt-[110px] bg-[#F9F9F9] rounded-[20px] border border-[#0000001A] overflow-hidden">
      <div className="w-full basis-[57%] flex flex-col gap-[32px] justify-center items-start px-14 py-[77px]">
        <div className="w-full flex flex-col justify-start items-start text-[#3a3a3a] mb-[10px]">
          <p className="text-2xl leading-[110%]">A place you call your own</p>
          <h3 className="text-[38px] leading-[110%] tracking-[0.38px]">
            Build your <em className="not-italic font-bold">#BeautifulHome</em>
            with us.
          </h3>
        </div>

        <form className="grid grid-cols-2 gap-3 w-full">
          {/* First Input */}
          <input
            type="text"
            placeholder="First Name"
            className="px-6 py-5 text-base leading-[132%] tracking-[-0.16px] text-[#b7b7b7] rounded-lg border border-[#D1DEE1] bg-white col-span-1"
          />

          {/* Second Input */}
          <input
            type="text"
            placeholder="Last Name"
            className="px-6 py-5 text-base leading-[132%] tracking-[-0.16px] text-[#b7b7b7] rounded-lg border border-[#D1DEE1] bg-white col-span-1"
          />

          {/* Phone Number Input */}
          <div className="flex items-center px-6 py-5 text-base leading-[132%] tracking-[-0.16px] text-[#b7b7b7] rounded-lg border border-[#D1DEE1] bg-white col-span-1">
            <span className="text-[#dbdbdb] mr-2 flex items-center leading-[132%] tracking-[-0.16px]">
              +91
              <span className="h-5 border-l border-[#b7b7b7] mx-3" />
            </span>
            <input
              type="tel"
              placeholder="Phone Number"
              className="outline-none flex-1 bg-transparent"
            />
          </div>

          {/* Fourth Input */}
          <input
            type="email"
            placeholder="Email"
            className="px-6 py-5 text-base leading-[132%] tracking-[-0.16px] text-[#b7b7b7] rounded-lg border border-[#D1DEE1] bg-white col-span-1"
          />
        </form>

        <label className="relative flex items-center justify-between">
          <input type="checkbox" className="peer sr-only" />
          <span
            className={`
      flex items-center justify-center w-[20px] h-[20px] rounded-[4px]
      border border-[rgba(0,0,0,0.02)] bg-[#efefef]
      backdrop-blur-[3.2979px] transition-all
      peer-checked:bg-gradient-to-l from-[#8D5BCF] to-[#7445B2]
      peer-checked:text-white mr-2
    `}
          >
            <FaCheck size={10} fill="#efefef" />
          </span>
          <span className="text-sm select-none">
            Yes, I would like to receive important updates and notifications on
            WhatsApp
          </span>
        </label>

        <button
          className="!p-6 flex justify-center items-center gap-6 !rounded-full 
        border-[2px] border-[rgba(226,203,255,0.10)] bg-gradient-to-r from-[#7445B2] to-[#8D5BCF]"
        >
          <p className="text-lg leading-[136%] tracking-[-0.36px] font-medium text-white">
            Book A Free Site Visit
          </p>
          <HiArrowRight size={24} fill="#fff" />
        </button>
      </div>

      {/* IMAGE */}
      <div
        className="w-full basis-[42%] flex justify-center items-center"
        style={{
          backgroundImage: "url(/src/assets/contact-form-1.png)",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      ></div>
    </div>
  );
};

export default ContactForm;
