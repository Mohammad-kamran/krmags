import HeroSection from "../layouts/Herosection/HeroSection";
import Navbar from "../layouts/Navbar/Navbar";
import NavbarBorder from "../layouts/Navbar/NavbarBorder";
import HeroProduct from "../layouts/HeroProductSection/HeroProduct";
import MapAndYt from "../layouts/Map&Youtube/Map&yt";
import AboutUs from "../layouts/AboutUs/AboutUs";
import Footer from "../layouts/Footer/Footer";
const HomePage = () => {
  return (
    <>
      <Navbar />
      <NavbarBorder />
      <HeroSection />
      <HeroProduct />
      <MapAndYt /> 
      <AboutUs />
      <Footer />
    </>
  );
};

export default HomePage;
