// Footer.jsx
import React from 'react';
import SepratorLine from "./LineSeprator";
import FooterLinks from "./FooterLinks";
import FloatingActionButton from "./FloatingActionButton";
import Twitter from '../../assets/Icons/Tweeter.svg';
import Instagram from '../../assets/Icons/Instagram.svg';
import Watsapp from '../../assets/Icons/Watsapp.svg';
import Facebook from '../../assets/Icons/Facebook.svg';
import Youtube from '../../assets/Icons/Youtube.svg';
import { useDarkMode } from "../../hooks/DarkModeContext";

const Footer = () => {
    const { isDark } = useDarkMode();
    
    const socialLinks = [
        { href: "https://x.com/krmags", icon: Twitter, alt: "Twitter" },
        { href: "https://www.instagram.com/krmags_solutionsprivatelimited/", icon: Instagram, alt: "Instagram" },
        { href: "https://wa.me/7048998601", icon: Watsapp, alt: "WhatsApp" },
        { href: "https://www.facebook.com/krmags/", icon: Facebook, alt: "Facebook" },
        { href: "https://www.youtube.com/@krmags", icon: Youtube, alt: "YouTube" }
    ];

    return (
        <footer className={`
            ${isDark ? 'bg-neutral-300' : 'bg-black'} 
            container mx-auto px-4 md:px-6 lg:px-8 
            py-8 md:py-10 lg:py-12 
            rounded-tl-2xl rounded-tr-2xl md:rounded-tl-3xl md:rounded-tr-3xl 
            flex flex-col justify-center
            relative
        `}>
            <div className="flex justify-center mb-6 md:mb-8">
                <h2 className={`
                    ${isDark ? 'text-black' : 'text-white'}
                    text-xl md:text-2xl lg:text-3xl 
                    font-bold 
                    tracking-wide
                `}>
                    Follow Us
                </h2>
            </div>

            <div className="flex flex-wrap justify-center gap-4 md:gap-6 lg:gap-8">
                {socialLinks.map((link, index) => (
                    <a 
                        key={index}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="transition-transform duration-200 transform social-icon hover:scale-110"
                    >
                        <img 
                            className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12" 
                            src={link.icon} 
                            alt={link.alt}
                        />
                    </a>
                ))}
            </div>

            <SepratorLine />
            <FooterLinks />
            <FloatingActionButton />
        </footer>
    );
};



export default Footer;