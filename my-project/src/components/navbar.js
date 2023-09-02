import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEthereum } from '@fortawesome/free-brands-svg-icons';
import { faWallet, faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';

const Header = () => {
  const [isOpen, setisOpen] = useState(false);

  const Links = [
    { name: 'Home', link: '/' },
    { name: 'Dashboard', link: '/dashboard' },
    { name: 'Upload', link: '/upload' },
  ];

  return (
    <div className="shadow-md w-full bg-primary-color fixed top-0 left-0">
      <div className="p-4 md:flex justify-between items-center bg-primary-color">
        <div className="flex items-center gap-1">
          <h1 className="text-sm md:text-2xl uppercase font-bold tracking-widest">
            <FontAwesomeIcon icon={faEthereum} /> Blockchain Trading Platform
          </h1>
        </div>

        {/* Mobile Nav */}
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

        {/* Nav Links */}
        <ul
          className={`md:flex md:items-center md:pb-0 pb-12 uppercase absolute md:static bg-primary-color md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            isOpen ? 'top-12' : 'top-[-490px]'
          }`}
        >
          {Links.map((link, index) => (
            <li
              key={index}
              className="font-semibold my-7 md:my-0 md:ml-8 tracking-wider"
            >
              <NavLink to={link.link}>{link.name}</NavLink>
            </li>
          ))}
          <button className="btn -my-2 py-1 px-2 md:ml-8 rounded-md border-2 border-black md:static tracking-wide font-semibold">
            <FontAwesomeIcon icon={faWallet} /> Connect Wallet
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
