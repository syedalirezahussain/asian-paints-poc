import React, { useState } from "react";
import { FiMinus, FiPlus } from "react-icons/fi";
import FadeInOnScroll from "./FadeInOnScroll";

const AccordionItem = ({
  index,
  title,
  content,
  isOpen,
  onClick,
  isLastItem,
}) => {
  return (
    <div
      className={`w-full relative accordionItem rounded last:pb-0 transition-all duration-500
        ${!isLastItem ? "pb-[20px]" : ""}
        ${
          isOpen
            ? "h-full md:max-h-[392px] max-h-[172px]"
            : "md:min-h-[92px] md:max-h-[92px] min-h-[76px] max-h-[76px] "
        }
      `}
    >
      <div
        className={`w-full flex justify-between items-center cursor-pointer h-6 md:h-9 text-xl md:text-2xl  transition-all duration-500
          ${isOpen ? "my-4" : "my-7"}
          `}
        onClick={() => onClick(index)}
      >
        <h3
          className={`w-full leading-[102%] ${
            isOpen ? "text-[#3A3A3A] font-medium" : "text-[#3A3A3A99]"
          }`}
        >
          {title}
        </h3>
        {isOpen ? (
          <FiMinus size={24} stroke="#4D4D4D" />
        ) : (
          <FiPlus size={24} stroke="#4D4D4D" />
        )}
      </div>
      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out text-[#6B6767] text-[14px] md:text-xl ${
          isOpen ? "max-h-96 opacity-100 mt-3" : "max-h-0 opacity-0"
        }`}
      >
        <p>{content}</p>
      </div>
      {!isLastItem && (
        <span className="absolute bottom-0 left-0 right-0 mx-auto h-[1px] w-full bg-[#0000001A]"></span>
      )}
    </div>
  );
};

const Accordion = ({ items }) => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (index) => {
    setOpenIndex(index);
  };

  return (
    <FadeInOnScroll className="basis-[48%] h-full flex flex-col justify-start items-center mx-3 md:mx-0 px-7 md:px-10 py-8 md:py-16 rounded-[20px] bg-[#fafafa]">
      {items?.map((item, index) => (
        <AccordionItem
          key={index}
          index={index}
          title={item.title}
          content={item.content}
          isOpen={openIndex === index}
          onClick={toggle}
          isLastItem={index === items?.length - 1}
        />
      ))}
    </FadeInOnScroll>
  );
};

export default Accordion;
