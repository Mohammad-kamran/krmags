// AuthButtons.jsx
import React from "react";

const AuthButtons = ({ isDark }) => {
  return (
    <div className={`flex gap-4 ${isDark ? "text-white" : "text-black"}`}>
      <button 
        className="w-20 h-10 rounded hover:text-white hover:bg-red-700"
      >
        SignUp
      </button>
      <button 
        className={`w-20 h-10 rounded 
                    ${isDark ? 'hover:bg-white hover:text-black' : "hover:bg-black hover:text-white"}`}
      >
        LogIn
      </button>
    </div>
  );
};

export default AuthButtons;
