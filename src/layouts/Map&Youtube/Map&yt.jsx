import { useDarkMode } from "../../hooks/DarkModeContext";

const MapAndYt = () => {
    const { isDark } = useDarkMode();

    return (
        <section className="container px-4 mx-auto my-20">
            <div className="flex flex-col gap-10 md:flex-row">
                
                {/* Google Map Section */}
                <div className="w-full mb-10 md:w-1/2 md:mb-0">
                    <h2 className={`mb-4 text-3xl font-bold text-center ${isDark ? 'text-white' : 'text-black'}`}>Office</h2>
                    <iframe
                        title="Krmags Solutions Pvt Ltd Location Map"
                        className="rounded-lg w-full h-[225px] sm:h-[225px] md:h-[450px]"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224.88307484377086!2d85.19130973854111!3d25.60062276365439!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed5f4c8c1925ef%3A0xf17081b078d1de0b!2sKrmags%20Solutions%20Pvt%20Ltd.!5e0!3m2!1sen!2sin!4v1730144856697!5m2!1sen!2sin"
                        width="100%"
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>

                {/* YouTube Video Section */}
                <div className="flex flex-col w-full pl-0 md:w-1/2 md:pl-10">
                    <h2 className={`mb-4 text-3xl font-bold text-center ${isDark ? 'text-white' : 'text-black'}`}>Product Videos</h2>
                    <iframe
                        className="rounded-lg w-full h-[225px] sm:h-[225px] md:h-[450px] max-w-full"
                        src="https://www.youtube.com/embed/EV4xNrGI8RI?si=9pJGExJOIHEVr7v-"
                        title="Promotional Video about Our Products"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                    ></iframe>
                </div>
            </div>
        </section>
    );
}

export default MapAndYt;
