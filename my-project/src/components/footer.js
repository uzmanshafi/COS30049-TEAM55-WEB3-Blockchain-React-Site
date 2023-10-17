import React from 'react';
import { NavLink } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="w-full p-4 bg-gray-900 border-t border-gray-600 shadow md:flex md:items-center md:justify-between md:p-6">
            <span className="text-sm text-white sm:text-center">
                © 2023 <a href="#" className="hover:underline">Team 55</a>. All Rights Reserved.
            </span>
            <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
                <li>
                    <NavLink to="/about" className="mr-4 hover:underline md:mr-6 text-primary-color">About</NavLink>
                </li>
                <li>
                    <NavLink to="/" className="mr-4 hover:underline md:mr-6 text-primary-color">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/product" className="mr-4 hover:underline md:mr-6 text-primary-color">Product</NavLink>
                </li>
                <li>
                    <NavLink to="/login" className="hover:underline text-primary-color">Login</NavLink>
                </li>
            </ul>
        </footer>
    );
};

export default Footer;
