import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="bg-custom-nav shadow-lg text-white fixed top-0 left-0 w-full h-24 flex items-center justify-between px-6 z-50">
            {/* Logo */}
            <Link to="/">
                <img src="/logo.png" alt="Web Sight Logo" className="w-24 h-24 object-contain" />
            </Link>
            {/* Primary Nav */}
            <div className="hidden md:flex space-x-4">
                <Link to="/about" className="text-white font-semibold text-xl py-2 px-4 no-underline">About</Link>
                <Link to="/search" className="py-2 px-4 bg-custom-nav-text text-white rounded hover:bg-gray-500 transition-colors no-underline">Start Searching</Link>
            </div>
            {/* Mobile button */}
            <div className="md:hidden">
                <button onClick={toggleMenu} className="text-white">
                    <svg
                        className="w-6 h-6"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4 6h16M4 12h16m-7 6h7"
                        />
                    </svg>
                </button>
            </div>

            {/* Mobile Menu */}
            <div className={`md:hidden ${isOpen ? "block" : "hidden"} bg-custom-blue`}>
                <Link to="/about" className="block py-2 px-4 text-white hover:bg-gray-700">About</Link>
                <Link to="/search" className="block py-2 px-4 text-white hover:bg-gray-700">Start Searching</Link>
            </div>
        </nav>
    );
}

export default Navbar;
