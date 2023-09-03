import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEthereum } from '@fortawesome/free-brands-svg-icons'
import { faClipboard } from '@fortawesome/free-solid-svg-icons';
import p1 from '../images/p1.png';

const Dashboard = () => {

    const renderWalletAddress = (address) => {
      const start = address.substring(0, 6);
      const end = address.substring(address.length - 4);
      return `${start}...${end}`;
    };
  
    return (
        <div className="flex flex-col md:flex-row m-12 justify-center h-full min-h-full">
        
        {/* User Card */}
        <div id="user-card" className="bg-primary-color w-full md:w-1/5 h-auto rounded-lg p-4 md:p-8 mb-4 md:mb-0 mx-4">
          <div id="user-profile" className="flex flex-col justify-center items-center">
            <div id="user-pfp" className="w-48 h-48 rounded-full border-4 border-white shadow-md">
              <img src={p1} alt="User" className="object-cover w-full h-full rounded-full"/>
            </div>
            <h2 className="font-semibold my-4 text-xl tracking-wider">John Doe</h2>
            <h2 className="font-semibold text-sm tracking-wider">
              {renderWalletAddress('0xae2Fc483527B8EF99EB5D9B44875F005ba1FaE13')} 
              <FontAwesomeIcon icon={faClipboard} className="hover:cursor-pointer" />
            </h2>
            <div className="flex flex-row mx-2">
              <div className="text-center p-2">
                <h2 className="font-semibold">Current Listing</h2>
                <h1 className="font-bold text-xl">1</h1>
              </div>
              <div className="text-center p-2">
                <h2 className="font-semibold">Current Sold</h2>
                <h1 className="font-bold text-xl">4</h1>
              </div>
            </div>
            <div className="flex flex-row mx-2">
              <button className="bg-secondary-color p-2 rounded-full font-semibold text-white shadow-md">DEPOSIT ETH</button>
              <button className="bg-indigo-700 p-2 rounded-full font-semibold text-white shadow-md ml-4">WITHDRAW ETH</button>
            </div>
          </div>
        </div>
        
        {/* Dashboard */}
        <div id="dashboard" className="bg-primary-color w-full md:w-3/5 h-96 rounded-lg mx-4"></div>
  
      </div>
    );
  };
  
  export default Dashboard;