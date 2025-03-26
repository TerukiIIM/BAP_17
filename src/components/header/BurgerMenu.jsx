import { useState } from "react";
import "../../App.css";

const BurgerMenu = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="relative">
            <button
                onClick={toggleMenu}
                className="flex flex-col justify-between w-8 h-6 focus:outline-none ml-14 shad"
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

            {isOpen && (
                <div
                    className="absolute mt-5 ml-14  w-60 bg-white rounded-lg shadow-lg py-2 z-50"
                    id="shadow"
                >
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
                        Découvrir la ville
                    </a>
                    <a
                        href="#"
                        className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                    >
                        Vie municipale
                    </a>
                    <a
                        href="#"
                        className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                    >
                        Vivre au Plessis-Robinson
                    </a>
                    <a
                        href="#"
                        className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                    >
                        Vie culturelle
                    </a>
                    <a
                        href="#"
                        className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                    >
                        Section enfants
                    </a>
                </div>
            )}
        </div>
    );
};

// Mise à jour du composant header
const Header = () => {
    return (
        <header className="fixed w-full flex justify-between pt-14">
            <BurgerMenu />

            <nav
                className="flex w-96 p-2 justify-around shadow-2xs rounded-4xl backdrop-blur-xs bg-white/50"
                id="shadow"
            >
                <a className="text-black">Jeu vidéo</a>
                <a className="text-black">Bande dessinée</a>
                <a className="text-black">À propos</a>
            </nav>

            <div className="w-15"></div>
        </header>
    );
};

export default Header;
