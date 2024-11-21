// LogoImage.jsx
import darkLogo from "../../assets/logo/DarkModeLogo.svg";
import lightLogo from "../../assets/logo/LightLogo.svg";

const LogoImage = ({ isDark }) => {
  return (
  
    <img 
      src={isDark ? darkLogo : lightLogo} 
      alt="Logo" 
    />

  );
};

export default LogoImage;
