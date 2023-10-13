import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEthereum } from '@fortawesome/free-brands-svg-icons';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import { NavLink, useNavigate } from 'react-router-dom';
import SearchBar from './searchbar';

const Header = () => {
    const [isOpen, setisOpen] = useState(false);
    const navigate = useNavigate();
    const isLoggedIn = localStorage.getItem("emailData") && localStorage.getItem("passwordData");
    const userEmail = localStorage.getItem("emailData");

    let Links = [
        { name: 'Home', link: '/' },
        { name: 'Upload', link: '/upload' },
    ];

    let allPages = [
        ...Links,
        { name: 'About', link: '/about' },
        { name: 'Product', link: '/product' },
        { name: 'Search Product', link: '/search_product' },
        { name: 'Submit Product', link: '/submit_product' },
        { name: 'Dashboard', link: '/dashboard' },
    ];

    const performSearch = (query) => {
        const matchedPage = allPages.find((page) => 
        page.name.toLowerCase().includes(query.toLowerCase())
        );

        if (matchedPage) {
        navigate(matchedPage.link);
        } else {
        console.log('Page not found');
        }
    };

    return (
        <div className="shadow-md w-full bg-primary-color fixed top-0 left-0">
        <div className="p-4 md:flex justify-between items-center bg-primary-color">
            <div className="flex items-center gap-1">
            <h1 className="text-sm md:text-md lg:text-xl uppercase font-bold tracking-widest">
                <FontAwesomeIcon className='inline-block md:hidden lg:inline-block' icon={faEthereum} /> Blockchain Trading Platform
            </h1>
            </div>

            <div
            onClick={() => setisOpen(!isOpen)}
            className="w-7 h-7 absolute right-3 top-4 cursor-pointer md:hidden"
            >
            {isOpen ? (
                <FontAwesomeIcon icon={faXmark} />
            ) : (
                <FontAwesomeIcon icon={faBars} />
            )}
            </div>

            <ul
            className={`md:flex md:items-center md:pb-0 pb-12 uppercase absolute md:static shadow-xl md:shadow-none bg-primary-color md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${isOpen ? 'top-12' : 'top-[-490px]'
                }`}
            >
            {Links.map((link, index) => (
                <li
                key={index}
                className="font-semibold my-7 tracking-wider md:text-sm md:my-0 md:ml-8 md:tracking-tighter lg:text-md"
                >
                <NavLink to={link.link}>{link.name}</NavLink>
                </li>
            ))}
            <li className="font-semibold my-7 mx-4 md:my-0 md:ml-8 tracking-wider">
                <SearchBar onSearch={performSearch} />
            </li>
            {isLoggedIn ? (
                <>
                    <li>{userEmail}</li>
                    <button
                        onClick={() => {
                            localStorage.removeItem("emailData");
                            localStorage.removeItem("passwordData");
                        } }
                        className="btn -my-2 py-1 px-2 md:ml-8 rounded-md border-2 border-black md:static tracking-wide font-semibold"
                    >
                         Logout
                    </button></>
            ) : (
                <button
                    onClick={() => navigate("/login")}
                    className="btn -my-2 py-1 px-2 md:ml-8 rounded-md border-2 border-black md:static tracking-wide font-semibold"
                >
                    Login
                </button>
            )}
            </ul>
        </div>
        </div>
    );
};

export default Header;
