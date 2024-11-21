import LeftSection from "./LeftSectionComponants/LeftSection";
import RightSection from "./RightSectionComponants/RightSection";


const HeroSection = () => {
  return (
    <div className="flex flex-col items-center justify-center px-4 py-10 md:flex-row md:items-start md:px-16">
      <LeftSection />
      <RightSection />
    </div>
  );
};

export default HeroSection;

