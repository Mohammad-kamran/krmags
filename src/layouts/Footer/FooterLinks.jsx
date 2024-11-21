import { useDarkMode } from "../../hooks/DarkModeContext";

const FooterLinks = () => {
    const { isDark } = useDarkMode();

    const links = [
        { text: "Terms of Service", href: "src/App.js" },
        { text: "Privacy Policy", href: "src/App.js" },
        { text: "About Us", href: "src/App.js" },
        { text: "Products", href: "src/App.js" },
        { text: "Support", href: "src/App.js" },
        { text: "Contact Us", href: "src/App.js" },
        { text: "Partners", href: "src/App.js" },
        { text: "Product Resources", href: "src/App.js" },
        { text: "Industry Insights", href: "src/App.js" },
        { text: "Support Materials", href: "src/App.js" },
        { text: "App coming soon", href: "src/App.js", className: "text-red-600 install-app" }
    ];

    return (
        <div className={`w-full px-4 ${isDark ? 'text-black' : 'text-white'}`}>
            {/* Header Section */}
            <div className="mb-8 text-center">
                <h1 className="mb-2 text-xl font-bold md:text-2xl">
                    Thousands of Business Partners.
                </h1>
                <p className="text-sm md:text-base">
                    Trust Us - Be Part of Our Growth Story
                </p>
            </div>

            {/* Links Grid */}
            <div className="grid grid-cols-2 gap-4 text-sm sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 md:text-base">
                {links.map((link, index) => (
                    <a
                        key={index}
                        href={link.href}
                        className={`text-center hover:opacity-80 transition-opacity ${link.className || ''}`}
                    >
                        {link.text}
                    </a>
                ))}
            </div>

            {/* Footer Credits */}
            <div className="mt-8 mb-4 space-y-2 text-xs text-center">
                <p>
                    &copy; 2024 KRMAGS. 
                    <strong className="ml-1 text-red-600">
                        All rights reserved.
                    </strong>
                </p>
                <p>
                    Developed by Mohammad Kamran 
                    <a 
                        className="ml-1 text-customPurple hover:underline"
                        href="https://www.linkedin.com/in/md-kamran-247154246/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        -LinkedIn
                    </a>
                </p>
            </div>
        </div>
    );
};

export default FooterLinks;