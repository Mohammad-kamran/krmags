import React from 'react';
import { useNavigate } from "react-router-dom";

const NavigationLinks = ({ isDark, isMobile }) => {
  const linkClasses = `w-100% text-center py-2 ${
    isDark ? "text-white hover:text-red-600" : "text-black hover:text-red-800"
  }`;
  const navigate = useNavigate();

  return (
    <ul
      className={`${
        isMobile
          ? "flex flex-col items-center justify-center gap-2"
          : "flex justify-center items-center gap-8"
      }`}
    >
      <li className={linkClasses} > Home </li>
      <li className={linkClasses} > About </li>
      <li className={linkClasses} > Products </li>
      <li className={linkClasses} > Contact Us </li>
    </ul>
  );
};

export default NavigationLinks;
