import { useDarkMode } from "../../hooks/DarkModeContext";

const AboutUs = () => {
    const { isDark } = useDarkMode();
    return (
        <section className="container flex justify-center px-4 mx-auto mb-40">
            <div className={`flex flex-col items-center justify-center w-full sm:w-3/4 h-auto p-8 rounded-lg shadow-md ${isDark ? 'bg-black' : 'bg-white'}`}>
                <h1 className={`mb-10 text-3xl sm:text-4xl font-bold text-center ${isDark ? 'text-white' : 'text-black'}`}>About Us</h1>
                <p className={`mb-4 text-xl sm:text-2xl text-center font-courier ${isDark ? 'text-white' : 'text-black'}`}>
                    We established KRMAGS Solutions Private Limited with the mission to develop people, particularly the unemployed, socially, economically, and emotionally. We aim to encourage individuals to take responsibility for their own health and to ensure they have full access to appropriate resources.
                </p>
                <p className="text-lg text-center text-red-700">
                    <strong>--KRMAGS</strong>
                </p>
            </div>
        </section>
    );
};

export default AboutUs;
