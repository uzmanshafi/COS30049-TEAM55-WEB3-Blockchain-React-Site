import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEthereum } from '@fortawesome/free-brands-svg-icons'
import { faClipboard, faTrash } from '@fortawesome/free-solid-svg-icons';
import p1 from '../images/p1.png';
import p2 from '../images/p2.png';
import p3 from '../images/p3.png';
import p4 from '../images/p4.png';
import DonutChart from '../components/DonutChart';
import axios from 'axios';

const Dashboard = () => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const session_id = localStorage.getItem('session_id'); // Get session_id from local storage

        if (session_id && (!user || (user && user.email === "Loading..."))) {
            axios.get(`http://127.0.0.1:8000/users/details/`, { headers: { "Authorization": `Bearer ${session_id}` } })
                .then(response => {
                    setUser(response.data);
                })
                .catch(error => {
                    console.error("Error fetching user details:", error);
                });
        }
    }, [user]);
    

    const generateRandomData = (n) => {
        const productNames = Array.from({ length: n }, (_, i) => `NFT #${Math.floor(Math.random() * 1000 + 1)} Penguin`);
        const previousOwners = Array.from({ length: n }, (_, i) => `Owner #${Math.floor(Math.random() * 1000 + 1)}`);
        const purchasedDates = Array.from({ length: n }, (_, i) => `${Math.floor(Math.random() * 31 + 1)} - ${["jan", "feb", "mar", "apr", "may"][Math.floor(Math.random() * 5)]} - 2023`);
        const categories = Array.from({ length: n }, (_, i) => ["Games", "Entertainment", "Art", "Membership"][Math.floor(Math.random() * 4)]);
        const images = Array.from({ length: n }, (_, i) => [p1, p2, p3, p4][Math.floor(Math.random() * 4)]);
        const prices = Array.from({ length: n }, (_, i) => (Math.random() * 3.5 + 0.5).toFixed(2));

        return { productNames, previousOwners, purchasedDates, categories, images, prices };
    };

    const randomData = generateRandomData(5);

    const [currentTab, setCurrentTab] = useState("Purchased");

    const listedData = generateRandomData(2);

    return (
        <div className="flex flex-col md:flex-row m-4 md:m-12 justify-center">
            <div className="flex flex-col md:flex-row w-full mx-auto">
                {/* User Card */}
                <div className="bg-primary-color w-full md:w-1/5 flex-none rounded-lg p-4 md:p-8 mb-4 md:mb-0 mx-2 md:mx-4 flex flex-col flex-grow mx-auto">
                    <div id="user-profile" className="flex flex-col justify-center items-center">
                        <div id="user-pfp" className="w-32 md:w-48 h-32 md:h-48 rounded-full border-4 border-white shadow-md">
                            <img src={p1} alt="User" className="object-cover w-full h-full rounded-full" />
                        </div>
                        <h2 className="font-semibold my-4 text-md md:text-xl tracking-wider">
                            {user ? user.username : "Loading..."}
                        </h2>
                        <h2 className="font-semibold text-xs md:text-sm tracking-wider">
                            {user ? user.email : "Loading..."}
                        </h2>
                        <h2 className='text-4xl font-bold my-3'>
                            <FontAwesomeIcon icon={faEthereum} className='mr-2' />
                            {user ? `${user.balance} ETH` : "Loading..."}
                        </h2>

                        <div className="flex flex-col mx-2 my-4">
                            <button className="bg-secondary-color p-2 rounded-full font-semibold text-white shadow-md mb-2">Update Username</button>
                            <button className="bg-indigo-700 p-2 rounded-full font-semibold text-white shadow-md mt-2">Update Password</button>
                        </div>
                    </div>
                </div>

                {/* Dashboard */}
                <div className="bg-primary-color w-full md:w-3/5 rounded-lg flex flex-col flex-grow p-2 md:p-8 mx-auto">
                    <div className="flex flex-row flex-wrap p-4 w-full">
                        <button onClick={() => setCurrentTab("Purchased")} className="bg-secondary-color mx-2 my-1 md:my-0 rounded-xl p-2 text-xs md:text-lg uppercase font-semibold text-white shadow-md">Purchased</button>
                        <button onClick={() => setCurrentTab("Stat")} className="bg-secondary-color mx-2 my-1 md:my-0 rounded-xl p-2 text-xs md:text-lg uppercase font-semibold text-white">Stats</button>
                    </div>
                    <div id='purchasedTab' className="bg-accent-color flex-grow w-full rounded-lg mx-auto overflow-y-auto p-2 max-h-[calc(100%/5*5)] shadow-inner">

                        {currentTab === "Purchased" && randomData.productNames.map((name, index) => (
                            <div key={index} id='item-card' className='w-full bg-primary-color mb-4 rounded-xl flex flex-col md:flex-row items-start md:items-center p-2 md:p-4 shadow-xl'>
                                <div className='bg-gray-800 w-16 h-16 p-1 rounded-md shadow-md'>
                                    <img src={randomData.images[index]} alt="Item" className="object-cover w-full h-full rounded-md" />
                                </div>
                                <div id='item-info' className='mx-2 md:mx-4 flex-grow mt-2 md:mt-0'>
                                    <h2 className='text-xs md:text-sm font-semibold uppercase'>{name}</h2>
                                    <h2 className='text-xs uppercase'>{randomData.previousOwners[index]}</h2>
                                    <h2 className='text-xs uppercase'>{randomData.purchasedDates[index]}</h2>
                                    <h2 className='text-xs uppercase'>{randomData.categories[index]}</h2>
                                </div>
                                <div className='flex flex-row items-center mt-2 md:mt-0'>
                                    <FontAwesomeIcon icon={faEthereum} className='mr-2' />
                                    <h2 className='text-xl font-bold'>{randomData.prices[index]} ETH</h2>
                                </div>
                            </div>
                        ))}

                        {currentTab === "Stat" && <div className="flex justify-center items-center "><DonutChart /></div>}

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;