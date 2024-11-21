import { useDarkMode } from "../../../hooks/DarkModeContext";

const LeftSection = () => {
  const { isDark } = useDarkMode();

  return (
    <div className="w-full px-4 mt-8 text-center md:w-1/2 md:px-8 lg:px-16 md:mt-16 md:text-left">
      <div className={`${isDark ? "text-white" : "text-black"}`}>
        <h1 className="text-3xl font-bold md:text-5xl lg:text-6xl">
          Together We Thrive <br />
          Distributors & Sellers <br />
          in Harmony
        </h1>
        <p className="mt-6 text-sm md:mt-10 md:text-lg">
          By fostering strong partnerships, we ensure seamless supply chains and
          exceptional service. Together, we drive growth and innovation, creating
          a future where every connection counts.
        </p>
        <button
          className={`w-full md:w-64 h-12 md:h-16 mt-8 md:mt-16 rounded text-lg md:text-xl ${
            isDark
              ? "bg-red-700 hover:bg-white hover:text-black"
              : "bg-black text-white hover:bg-red-700"
          }`}
        >
          Create an account
        </button>
      </div>
    </div>
  );
};

export default LeftSection;
