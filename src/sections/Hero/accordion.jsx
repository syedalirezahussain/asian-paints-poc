import React, { useState } from "react";
import { FiMinus, FiPlus } from "react-icons/fi";

const AccordionItem = ({ index, title, content, isOpen, onClick }) => {
  return (
    <div
      className="accordionItem w-full after:!mt-[21px] pt-5 
    first:border-t first:border-[#BBBBBB33] transition-all duration-300
    !max-h-[187px] overflow-hidden"
    >
      <div
        className="w-full flex justify-between items-center cursor-pointer font-medium h-5"
        onClick={() => onClick(index)}
      >
        <h3 className={`${isOpen ? "text-[#3A3A3A]" : "text-[#3A3A3A99]"}`}>
          {title}
        </h3>
        {isOpen ? (
          <FiMinus size={24} stroke="#4D4D4D" />
        ) : (
          <FiPlus size={24} stroke="#4D4D4D" />
        )}
      </div>
      <div
        className={`w-full overflow-hidden transition-all duration-300 ease-in-out text-[#6B6767] ${
          isOpen ? "max-h-32 h-32 opacity-100 mt-3 pb-1" : "max-h-0 opacity-0"
        }`}
      >
        <div className="w-full">{content}</div>
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
    <div className="mt-5 w-full flex flex-col justify-start items-center md:mx-0 rounded-[20px] bg-[#fafafa]">
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
    </div>
  );
};

export default Accordion;
