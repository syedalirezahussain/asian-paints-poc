import React from "react";

const Certificate = ({ ...props }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="25"
      viewBox="0 0 24 25"
      fill="none"
      {...props}
    >
      <path
        d="M6.5 20.2999H5C3.89543 20.2999 3 19.4045 3 18.2999V4.29993C3 3.19536 3.89543 2.29993 5 2.29993H19C20.1046 2.29993 21 3.19536 21 4.29993V18.2999C21 19.4045 20.1046 20.2999 19 20.2999H17.5M12 19.2999C13.6569 19.2999 15 17.9568 15 16.2999C15 14.6431 13.6569 13.2999 12 13.2999C10.3431 13.2999 9 14.6431 9 16.2999C9 17.9568 10.3431 19.2999 12 19.2999ZM12 19.2999L12.0214 19.2997L8.82867 22.4925L6.00024 19.6641L9.01965 16.6447M12 19.2999L15.1928 22.4925L18.0212 19.6641L15.0018 16.6447M9 6.29993H15M7 9.79993H17"
        stroke="black"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Certificate;
