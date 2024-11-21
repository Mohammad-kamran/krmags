import LogoImage from "./logoTheme";
import ThemeToggleButton from "./ThemeToggleButton";
import NavigationLinks from "./NavigationLinks";
import AuthButtons from "./AuthButtons";
import { useDarkMode } from "../../hooks/DarkModeContext";
import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose } from "react-icons/io5";

const Navbar = () => {
  const { isDark, toggleTheme } = useDarkMode();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav
      className={`z-50 fixed flex items-center px-4 w-full h-16 ${
        isDark ? "bg-black text-white" : "bg-white text-black"
      } shadow-md`}
    >
      {/* Logo Section */}
      <div className="flex justify-start w-20 h-12">
        <LogoImage isDark={isDark} />
      </div>

      {/* Desktop Navigation Links */}
      <div className="justify-center flex-1 hidden md:flex ml-14">
        <NavigationLinks isDark={isDark} isMobile={false} />
      </div>

      {/* Auth Buttons for Desktop */}
      <div className="hidden md:flex">
        <AuthButtons isDark={isDark} />
      </div>

      {/* Dark Mode Toggle and Hamburger Menu */}
      <div className="flex items-center gap-4 ml-auto">
        {/* Theme Toggle */}
        <ThemeToggleButton isDark={isDark} toggleColor={toggleTheme} />

        {/* Hamburger Menu */}
        <button
          className="flex items-center md:hidden"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          {isMenuOpen ? (
            <IoClose className="w-6 h-6" />
          ) : (
            <RxHamburgerMenu className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMenuOpen && (
        <div
          className={`absolute top-16 left-0 w-full ${
            isDark ? "bg-black text-white" : "bg-white text-black"
          } shadow-lg md:hidden`}
        >
          <div className="flex flex-col items-center gap-4 p-4">
            {/* Mobile Navigation Links */}
            <NavigationLinks isDark={isDark} isMobile={true} />

            {/* Auth Buttons for Mobile */}
            <AuthButtons isDark={isDark} isMobile={true} />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
