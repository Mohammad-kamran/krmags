import { IoIosMoon } from "react-icons/io";
import { IoSunny } from "react-icons/io5";
import { useState } from "react";

const ThemeToggleButton = ({ isDark, toggleColor }) => {
  const [isAnimating, setIsAnimating] = useState(false);

  const handleClick = () => {
    setIsAnimating(true);
    toggleColor();
    setTimeout(() => setIsAnimating(false), 500); // Reset animation state after 0.5s
  };

  return (
    <div className="flex justify-center w-full">
      <button
        className={`flex items-center w-12 h-12 p-2 rounded-full transition-colors`}
        onClick={handleClick}
        style={{
          color: isDark ? "white" : "black",
          backgroundColor: isDark ? "black" : "white",
        }}
        aria-label="Toggle Theme"
      >
        <div
          className={`flex items-center justify-center w-8 h-8 rounded-full transition-transform ${
            isAnimating ? "animate-spin" : ""
          }`}
        >
          {isDark ? (
            <IoIosMoon className="w-6 h-6" />
          ) : (
            <IoSunny className="w-6 h-6" />
          )}
        </div>
      </button>
    </div>
  );
};

export default ThemeToggleButton;
