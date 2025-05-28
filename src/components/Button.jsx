import React from "react";

const Button = ({ className, children }) => {
  return (
    <div
      className={`w-[52px] h-[52px] flex justify-center items-center cursor-pointer rounded-full border border-[#e9e9e9] ${className} `}
    >
      {children}
    </div>
  );
};

export default Button;
