import React, { useState } from "react";
import { FiMinus, FiPlus } from "react-icons/fi";
import FadeInOnScroll from "./FadeInOnScroll";

const AccordionItem = ({ index, title, content, isOpen, onClick }) => {
  return (
    <div className="accordionItem rounded p-4 md:last:pb-4 last:pb-0 transition-all duration-300">
      <div
        className="w-full flex justify-between items-center cursor-pointer font-medium h-9 text-xl md:text-2xl"
        onClick={() => onClick(index)}
      >
        <h3 className={`${isOpen ? "text-[#3A3A3A]" : "text-[#3A3A3A99]"}`}>
          {title}
        </h3>
        {isOpen ? <FiMinus size={24} /> : <FiPlus size={24} />}
      </div>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out text-[#6B6767] text-[14px] md:text-xl ${
          isOpen ? "max-h-96 opacity-100 mt-3" : "max-h-0 opacity-0"
        }`}
      >
        <p>{content}</p>
      </div>
    </div>
  );
};

const Accordion = ({ items }) => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (index) => {
    setOpenIndex(index);
  };

  return (
    <FadeInOnScroll className="basis-[48%] flex flex-col justify-start items-center mx-3 md:mx-0 px-7 md:px-10 py-8 md:py-16 rounded-[20px] bg-[#fafafa]">
      {items?.map((item, index) => (
        <AccordionItem
          key={index}
          index={index}
          title={item.title}
          content={item.content}
          isOpen={openIndex === index}
          onClick={toggle}
        />
      ))}
    </FadeInOnScroll>
  );
};

export default Accordion;
