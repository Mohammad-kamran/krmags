import React from "react";
import WatsappIcon from '../../assets/Icons/Watsapp.svg';

// FloatingActionButton.jsx
const FloatingActionButton = () => {
    return (
        <section className="fixed z-50 bottom-4 md:bottom-5 lg:bottom-6 right-4 md:right-5 lg:right-6"
        >
            <div className="
                w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16
                flex items-center justify-center 
                rounded-full 
                bg-[#25D366] 
                shadow-lg 
                hover:bg-[#128C7E] 
                hover:scale-110
                transition-all duration-300
                cursor-pointer
            ">
                <a 
                    href="https://wa.me/7048998601" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-full h-full"
                >
                    <img 
                        className="w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8" 
                        src={WatsappIcon} 
                        alt="WhatsApp"
                    />
                </a>
            </div>
        </section>
    );
};

export default FloatingActionButton;
