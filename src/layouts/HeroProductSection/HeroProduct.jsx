import React from 'react'
import MultiStandPacked from '../../assets/images/Multistand/MultiStandPack.svg';
import Flexible from '../../assets/images/Flexible/Flexible.svg';
import WhiteAluSingle from '../../assets/images/Aluminium/WhiteAluSingle.svg';
import { useDarkMode } from '../../hooks/DarkModeContext';

const HeroProduct = () => {
  const { isDark } = useDarkMode ();

  return (
    <section className='container px-4 mx-auto mt-20 mb-32'>
      <div className='flex flex-wrap justify-between gap-8 lg:flex-nowrap'>

        {/* MultiStand Product */}
        <div className='flex flex-col items-center w-full sm:w-[230px] h-auto min-h-[220px]'>
          <h1 className={`text-3xl mb-6 sm:mb-10 ${isDark ? 'text-white' : 'text-black'}`}>MultiStand</h1>
          <img src={MultiStandPacked} alt='Reload' className='w-[200px] h-[200px] bg-white rounded-xl'/>
          <p className={`text-center mt-4 px-4 ${isDark ? 'text-white' : 'text-black'}`}>Built to withstand harsh conditions, ensuring long-lasting performance</p>
        </div>

        {/* Vertical Line */}
        <div className={`mt-6 sm:mt-10 w-[2px] h-[200px] ${isDark ? 'bg-red-700' : 'bg-customPurple'} hidden sm:block`}></div>

        {/* Flexible Product */}
        <div className='flex flex-col items-center w-full sm:w-[230px] h-auto min-h-[220px]'>
          <h1 className={`text-3xl mb-6 sm:mb-10 ${isDark ? 'text-white' : 'text-black'}`}>Flexible</h1>
          <img src={Flexible} alt='Reload' className='w-[200px] h-[200px] bg-white rounded-xl'/>
          <p className={`text-center mt-4 px-4 ${isDark ? 'text-white' : 'text-black'}`}>Built to withstand harsh conditions, ensuring long-lasting performance</p>
        </div>

        {/* Vertical Line */}
        <div className={`mt-6 sm:mt-10 w-[2px] h-[200px] ${isDark ? 'bg-red-700' : 'bg-customPurple'} hidden sm:block`}></div>

        {/* Aluminium Product */}
        <div className='flex flex-col items-center w-full sm:w-[230px] h-auto min-h-[220px]'>
          <h1 className={`mb-6 sm:mb-10 text-3xl ${isDark ? 'text-white' : 'text-black'}`}>Aluminium</h1>
          <img src={WhiteAluSingle} alt='Reload' className='w-[200px] h-[200px] bg-white rounded-xl'/>
          <p className={`text-center mt-4 px-4 ${isDark ? 'text-white' : 'text-black'}`}>Built to withstand harsh conditions, ensuring long-lasting performance</p>
        </div>

      </div>
    </section>
  );
}

export default HeroProduct;
