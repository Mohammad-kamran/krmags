import React from "react";
import "./NavbarBorder.css";
import { useDarkMode } from "../../hooks/DarkModeContext";

const NavbarBorder = () => {
  const { isDark } = useDarkMode();

  return (
    <div
      className={`flex w-auto  ${
        isDark
          ? "bg-red-700 shadow-glow h-[64px]"
          : " bg-customPurple shadow-glow-dark h-[64px] "
      }`}
    ></div>
  );
};

export default NavbarBorder;
