import React from "react";

const GradientHeart = ({ ...props }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="28"
      height="29"
      viewBox="0 0 28 29"
      fill="none"
      className="cursor-pointer"
      {...props}
    >
      <path
        d="M13.9996 24.659C-9.33327 11.7625 7.00005 -2.23753 13.9996 6.6152C21.0001 -2.23753 37.3334 11.7625 13.9996 24.659Z"
        fill="url(#paint0_radial_13_656)"
      />
      <defs>
        <radialGradient
          id="paint0_radial_13_656"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(4.28257 8.71553) rotate(49.8991) scale(21.9092 25.4778)"
        >
          <stop stopColor="#F269A2" />
          <stop offset="1" stopColor="#E1136A" />
        </radialGradient>
      </defs>
    </svg>
  );
};

export default GradientHeart;
