import image1 from "../../../assets/images/Multistand/MultiStandPack.svg";
import image2 from "../../../assets/images/Multistand/MultiStandUnpack.svg";
import image3 from "../../../assets/images/Flexible/Flexible.svg";
import image4 from "../../../assets/images/Aluminium/WhiteAlu.svg";
import image5 from "../../../assets/images/Aluminium/WhiteAluSingle.svg";
import { useCarousel } from "../../../hooks/UseCarousel.jsx";
import { useDarkMode } from "../../../hooks/DarkModeContext.jsx";

const productDescriptions = [
  "MultiStand Pack - Ideal for various applications.",
  "MultiStand Unpack - Versatile and efficient design.",
  "Flexible - Perfect for adaptable setups.",
  "White Aluminium - Sleek and modern look.",
  "Single White Aluminium - Compact and lightweight."
];

const RightSection = () => {
  const { isDark } = useDarkMode();
  const images = [image1, image2, image3, image4, image5];
  const {
    currentImageIndex,
    nextImage,
    prevImage,
    goToImage,
    totalImages,
  } = useCarousel(images);

  return (
    <div className="flex flex-col items-center w-full px-4 mt-8 md:w-1/2 md:mt-16">
      {/* Image Slider Container */}
      <div className="relative w-full max-w-[400px] h-[300px] sm:h-[400px] md:h-[500px] overflow-hidden rounded flex items-center justify-center bg-white">
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{
            width: `${images.length * 100}%`,
            transform: `translateX(-${currentImageIndex * 100}%)`,
          }}
        >
          {images.map((image, index) => (
            <div
              key={index}
              className="flex items-center justify-center flex-shrink-0 w-full"
            >
              <img
                className="w-11/12 max-w-[300px] h-auto mx-auto"
                src={image}
                alt={`Carousel image ${index + 1}`}
              />
            </div>
          ))}
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={prevImage}
          className="absolute flex items-center justify-center w-8 h-8 text-white transform -translate-y-1/2 bg-gray-700 rounded-full md:w-10 md:h-10 left-2 md:left-4 top-1/2"
          aria-label="Previous image"
        >
          ◀
        </button>
        <button
          onClick={nextImage}
          className="absolute flex items-center justify-center w-8 h-8 text-white transform -translate-y-1/2 bg-gray-700 rounded-full md:w-10 md:h-10 right-2 md:right-4 top-1/2"
          aria-label="Next image"
        >
          ▶
        </button>
      </div>

      {/* Product Description */}
      <div className="mt-4 text-center">
        <p className={`text-sm font-semibold md:text-lg ${isDark ? 'text-white' : 'text-black'}`}>
          {productDescriptions[currentImageIndex]}
        </p>
      </div>

      {/* Carousel Indicators */}
      <div className="flex mt-4 space-x-2">
        {Array.from({ length: totalImages }).map((_, index) => (
          <button
            key={index}
            onClick={() => goToImage(index)}
            className={`w-3 h-3 md:w-4 md:h-4 rounded-full ${
              index === currentImageIndex ? "bg-gray-800" : "bg-gray-400"
            }`}
            aria-label={`Go to image ${index + 1}`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default RightSection;
