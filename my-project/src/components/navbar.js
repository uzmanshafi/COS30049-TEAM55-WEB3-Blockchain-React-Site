import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEthereum } from '@fortawesome/free-brands-svg-icons';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import { NavLink, useNavigate } from 'react-router-dom';
import SearchBar from './searchbar';
import axios from 'axios';

const Header = ({ isLoggedIn, userEmail, setIsLoggedIn, setUserEmail }) => {
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();
    const [data, setData] = useState([]);

    useEffect(() => {
        function updateLoginStatus() {
            const email = localStorage.getItem("emailData");
            if (email) {
                setUserEmail(email);
                setIsLoggedIn(true);
            } else {
                setUserEmail(null);
                setIsLoggedIn(false);
            }
        }

        // this is an Event listener for local storage changes
        window.addEventListener('storage', updateLoginStatus);

        // Initial check
        updateLoginStatus();

        return () => {
            window.removeEventListener('storage', updateLoginStatus);
        };
    }, []);

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/products/')
          .then((response) => {
            setData(response.data);
          })
          .catch((error) => {
            console.error(error);
          });
      }, []);


    let Links = [
        { name: 'Home', link: '/' },
        { name: 'Products Page', link: '/productspage' } 
    ];
    
    
    if (isLoggedIn) {
        Links.push(
            { name: 'Upload', link: '/upload' },
            { name: 'Dashboard', link: '/dashboard' }
        );
    }
    

    let allPages = [
        ...Links,
        { name: 'About', link: '/about' },
        { name: 'Product', link: '/product' },
        { name: 'Search Product', link: '/search_product' },
        { name: 'Submit Product', link: '/submit_product' },
        { name: 'Dashboard', link: '/dashboard' },
    ];



    return (
        <div className="shadow-md w-full bg-primary-color fixed top-0 left-0 z-10">
            <div className="p-4 md:flex justify-between items-center bg-primary-color">
                <div className="flex items-center gap-1">
                    <h1 className="text-sm md:text-md lg:text-xl uppercase font-bold tracking-widest">
                        <FontAwesomeIcon className='inline-block md:hidden lg:inline-block' icon={faEthereum} /> Blockchain Trading Platform
                    </h1>
                </div>

                <div
                    onClick={() => setIsOpen(!isOpen)}
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
                    <li className="font-semibold my-7 mx-2 md:my-0 md:ml-4 tracking-wider">
                        <NavLink to="/search">
                            <button className="btn -my-2 py-1 px-2 md:ml-8 rounded-md bg-white md:static tracking-wide w-52 text-sm text-darker-grey">
                                <div className="flex items-center">
                                    <svg className="w-4 mr-2 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                                    </svg>
                                    To search page..
                                </div>
                            </button>
                        </NavLink>
                    </li>
                    {isLoggedIn ? (
                        <>
                            <li>{userEmail}</li>
                            <button
                                onClick={() => {
                                    localStorage.removeItem("emailData");
                                    localStorage.removeItem("passwordData");
                                    setIsLoggedIn(false);
                                    setUserEmail(null);
                                    navigate("/login"); // Navigates back to the login page
                                }}
                                className="btn -my-2 py-1 px-2 md:ml-8 rounded-md border-2 border-black md:static tracking-wide font-semibold"
                            >
                                Logout
                            </button>
                        </>
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
