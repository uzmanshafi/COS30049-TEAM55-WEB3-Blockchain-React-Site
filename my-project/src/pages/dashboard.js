import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEthereum } from '@fortawesome/free-brands-svg-icons'
import { faClipboard } from '@fortawesome/free-solid-svg-icons';
import p1 from '../images/p1.png';
import p2 from '../images/p2.png';
import p3 from '../images/p3.png';
import p4 from '../images/p4.png';

const Dashboard = () => {

    const renderWalletAddress = (address) => {
        const start = address.substring(0, 6);
        const end = address.substring(address.length - 4);
        return `${start}...${end}`;
    };

    return (
        <div className="flex flex-col md:flex-row m-4 md:m-12 justify-center"> {/* Add justify-center */}
            <div className="flex flex-col md:flex-row w-full mx-auto"> {/* Add mx-auto */}
                {/* User Card */}
                <div className="bg-primary-color w-full md:w-1/5 flex-none rounded-lg p-4 md:p-8 mb-4 md:mb-0 mx-2 md:mx-4 flex flex-col flex-grow mx-auto">
                    <div id="user-profile" className="flex flex-col justify-center items-center">
                        <div id="user-pfp" className="w-32 md:w-48 h-32 md:h-48 rounded-full border-4 border-white shadow-md">
                            <img src={p1} alt="User" className="object-cover w-full h-full rounded-full" />
                        </div>
                        <h2 className="font-semibold my-4 text-md md:text-xl tracking-wider">John Doe</h2>
                        <h2 className="font-semibold text-xs md:text-sm tracking-wider">
                            {renderWalletAddress('0xae2Fc483527B8EF99EB5D9B44875F005ba1FaE13')}
                            <FontAwesomeIcon icon={faClipboard} className="hover:cursor-pointer" />
                        </h2>
                        <div className="flex flex-row mx-2">
                            <div className="text-center p-2">
                                <h2 className="font-semibold text-xs md:text-base">Current Listing</h2>
                                <h1 className="font-bold text-md md:text-xl">1</h1>
                            </div>
                            <div className="text-center p-2">
                                <h2 className="font-semibold text-xs md:text-base">Current Sold</h2>
                                <h1 className="font-bold text-md md:text-xl">4</h1>
                            </div>
                        </div>
                        <div className="flex flex-col md:flex-row mx-2">
                            <button className="bg-secondary-color p-2 rounded-full font-semibold text-white shadow-md mb-2 md:mb-0">DEPOSIT ETH</button>
                            <button className="bg-indigo-700 p-2 rounded-full font-semibold text-white shadow-md mt-2 md:mt-0 md:ml-4">WITHDRAW ETH</button>
                        </div>
                    </div>
                </div>

                {/* Dashboard */}
                <div className="bg-primary-color w-full md:w-3/5 rounded-lg flex flex-col flex-grow p-2 md:p-8 mx-auto">
                    <div className="flex flex-row flex-wrap p-4 w-full">
                    <button className="bg-secondary-color mx-2 my-1 md:my-0 rounded-xl p-2 text-xs md:text-lg uppercase font-semibold text-white shadow-md">Purchased</button>
                        <button className="bg-secondary-color mx-2 my-1 md:my-0 rounded-xl p-2 text-xs md:text-lg uppercase font-semibold text-white shadow-md">Listed</button>
                        <button className="bg-secondary-color mx-2 my-1 md:my-0 rounded-xl p-2 text-xs md:text-lg uppercase font-semibold text-white shadow-md">Offers</button>
                        <button className="bg-secondary-color mx-2 my-1 md:my-0 rounded-xl p-2 text-xs md:text-lg uppercase font-semibold text-white shadow-md">Offers Made</button>
                        <button className="bg-secondary-color mx-2 my-1 md:my-0 rounded-xl p-2 text-xs md:text-lg uppercase font-semibold text-white">Stats</button>
                    </div>
                    <div id='purchasedTab' className="bg-accent-color flex-grow w-full rounded-lg mx-auto overflow-y-auto p-2 max-h-[calc(100%/5*5)] shadow-inner">

                        <div id='item-card' className='w-full bg-primary-color mb-4 rounded-xl flex flex-col md:flex-row items-start md:items-center p-2 md:p-4 shadow-xl'>
                            <div className='bg-gray-800 w-16 h-16 p-1 rounded-md shadow-md'>
                                <img src={p1} alt="Item" className="object-cover w-full h-full rounded-md" />
                            </div>
                            <div id='item-info' className='mx-2 md:mx-4 flex-grow mt-2 md:mt-0'>
                                <h2 className='text-xs md:text-sm font-semibold uppercase'>Product Name</h2>
                                <h2 className='text-xs uppercase'>Previous Owner Name</h2>
                                <h2 className='text-xs uppercase'>Purchased On</h2>
                                <h2 className='text-xs uppercase'>Category</h2>
                            </div>
                            <div className='flex flex-row items-center mt-2 md:mt-0'>
                                <FontAwesomeIcon icon={faEthereum} className='mr-2' />
                                <h2 className='text-xl font-bold'>1 ETH</h2>
                            </div>
                        </div>
                        <div id='item-card' className='w-full bg-primary-color mb-4 rounded-xl flex flex-col md:flex-row items-start md:items-center p-2 md:p-4 shadow-xl'>
                            <div className='bg-gray-800 w-16 h-16 p-1 rounded-md shadow-md'>
                                <img src={p1} alt="Item" className="object-cover w-full h-full rounded-md" />
                            </div>
                            <div id='item-info' className='mx-2 md:mx-4 flex-grow mt-2 md:mt-0'>
                                <h2 className='text-xs md:text-sm font-semibold uppercase'>Product Name</h2>
                                <h2 className='text-xs uppercase'>Previous Owner Name</h2>
                                <h2 className='text-xs uppercase'>Purchased On</h2>
                                <h2 className='text-xs uppercase'>Category</h2>
                            </div>
                            <div className='flex flex-row items-center mt-2 md:mt-0'>
                                <FontAwesomeIcon icon={faEthereum} className='mr-2' />
                                <h2 className='text-xl font-bold'>1 ETH</h2>
                            </div>
                        </div>
                        <div id='item-card' className='w-full bg-primary-color mb-4 rounded-xl flex flex-col md:flex-row items-start md:items-center p-2 md:p-4 shadow-xl'>
                            <div className='bg-gray-800 w-16 h-16 p-1 rounded-md shadow-md'>
                                <img src={p1} alt="Item" className="object-cover w-full h-full rounded-md" />
                            </div>
                            <div id='item-info' className='mx-2 md:mx-4 flex-grow mt-2 md:mt-0'>
                                <h2 className='text-xs md:text-sm font-semibold uppercase'>Product Name</h2>
                                <h2 className='text-xs uppercase'>Previous Owner Name</h2>
                                <h2 className='text-xs uppercase'>Purchased On</h2>
                                <h2 className='text-xs uppercase'>Category</h2>
                            </div>
                            <div className='flex flex-row items-center mt-2 md:mt-0'>
                                <FontAwesomeIcon icon={faEthereum} className='mr-2' />
                                <h2 className='text-xl font-bold'>1 ETH</h2>
                            </div>
                        </div>

                        <div id='item-card' className='w-full bg-primary-color mb-4 rounded-xl flex flex-col md:flex-row items-start md:items-center p-2 md:p-4 shadow-xl'>
                            <div className='bg-gray-800 w-16 h-16 p-1 rounded-md shadow-md'>
                                <img src={p1} alt="Item" className="object-cover w-full h-full rounded-md" />
                            </div>
                            <div id='item-info' className='mx-2 md:mx-4 flex-grow mt-2 md:mt-0'>
                                <h2 className='text-xs md:text-sm font-semibold uppercase'>Product Name</h2>
                                <h2 className='text-xs uppercase'>Previous Owner Name</h2>
                                <h2 className='text-xs uppercase'>Purchased On</h2>
                                <h2 className='text-xs uppercase'>Category</h2>
                            </div>
                            <div className='flex flex-row items-center mt-2 md:mt-0'>
                                <FontAwesomeIcon icon={faEthereum} className='mr-2' />
                                <h2 className='text-xl font-bold'>1 ETH</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;