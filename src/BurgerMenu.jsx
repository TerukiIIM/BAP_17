import React, { useState } from "react";

const BurgerMenu = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="relative">
            {/* Icône du menu burger */}
            <button
                onClick={toggleMenu}
                className="flex flex-col justify-between w-8 h-6 focus:outline-none ml-5"
                aria-label="Menu"
            >
                <span
                    className={`block h-1 w-full bg-black rounded-full transition-all duration-300 ${
                        isOpen ? "transform rotate-45 translate-y-2.5" : ""
                    }`}
                ></span>
                <span
                    className={`block h-1 w-full bg-black rounded-full transition-all duration-300 ${
                        isOpen ? "opacity-0" : "opacity-100"
                    }`}
                ></span>
                <span
                    className={`block h-1 w-full bg-black rounded-full transition-all duration-300 ${
                        isOpen ? "transform -rotate-45 -translate-y-2.5" : ""
                    }`}
                ></span>
            </button>

            {/* Menu déroulant */}
            {isOpen && (
                <div className="absolute top-10 left-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 z-50">
                    <a
                        href="#"
                        className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                    >
                        Accueil
                    </a>
                    <a
                        href="#"
                        className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                    >
                        Visite
                    </a>
                    <a
                        href="#"
                        className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                    >
                        Services
                    </a>
                </div>
            )}
        </div>
    );
};

// Mise à jour du composant header
const Header = () => {
    return (
        <header className="fixed w-full flex justify-between pt-5">
            <BurgerMenu />

            <nav className="flex w-96 p-2 justify-around shadow-2xs rounded-4xl">
                <p>Jeu vidéo</p>
                <p>Bande dessinée</p>
                <p>À propos</p>
            </nav>

            <div className="w-15"></div>
        </header>
    );
};

export default Header;
