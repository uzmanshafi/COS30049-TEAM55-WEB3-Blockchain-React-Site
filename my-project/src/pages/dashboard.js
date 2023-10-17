import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEthereum } from '@fortawesome/free-brands-svg-icons'
import p1 from '../images/p1.png';
import DonutChart from '../components/DonutChart';
import axios from 'axios';

const Dashboard = () => {
    const [user, setUser] = useState(null);
    const [transactions, setTransactions] = useState([]);
    const user_id = localStorage.getItem('userId');  // Retrieves the user_id from localStorage
    const initialCategoryData = {
        'Gaming': 0,
        'Music': 0,
        'Art': 0,
        'Software': 0
    };

    const [categoryData, setCategoryData] = useState(initialCategoryData);


    useEffect(() => {
        if (user_id) {
            // Fetches user details
            axios.get(`http://127.0.0.1:8000/user/${user_id}/`)
                .then(response => {
                    setUser(response.data);
                })
                .catch(error => {
                    console.error("Error fetching user details:", error);
                });

            // Fetches user transactions
            axios.get(`http://127.0.0.1:8000/transactions/${user_id}/`)
                .then(response => {
                    setTransactions(response.data);
                })
                .catch(error => {
                    console.error("Error fetching transactions:", error);
                });

            // Updates the user balance
            axios.get(`http://127.0.0.1:8000/updateUserBalance/${user_id}/`)
                .then(response => {
                    if (response.data.status === 'success') {
                        // Updates the balance in the frontend
                        setUser(prevUser => ({ ...prevUser, balance: response.data.balance }));
                    }
                })
                .catch(error => {
                    console.error("Error updating and fetching balance:", error);
                });

            // Fetches user category data
            axios.get(`http://127.0.0.1:8000/getAssetCount/${user_id}/`)
                .then(response => {
                    setCategoryData(response.data);
                })
                .catch(error => {
                    console.error("Error fetching category counts:", error);
                });


        }
    }, [user_id]);

    const [currentTab, setCurrentTab] = useState("Purchased");

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
                    </div>
                </div>

                {/* Transactions */}
                <div className="bg-primary-color w-full md:w-3/5 rounded-lg flex flex-col flex-grow p-2 md:p-8 mx-auto">
                    <div className="flex flex-col md:flex-row flex-wrap p-4 w-full">
                        <button onClick={() => setCurrentTab("Purchased")} className="bg-secondary-color w-full md:w-auto mx-2 my-1 md:my-0 rounded-xl p-2 text-xs md:text-lg uppercase font-semibold text-white shadow-md">Purchased</button>
                        <button onClick={() => setCurrentTab("Stat")} className="bg-secondary-color w-full md:w-auto mx-2 my-1 md:my-0 rounded-xl p-2 text-xs md:text-lg uppercase font-semibold text-white">Stats</button>
                    </div>
                    <div
                        id='purchasedTab'
                        className="bg-accent-color flex-grow w-full rounded-lg mx-auto overflow-y-auto p-2 shadow-inner"
                        style={{ maxHeight: "458px" }}
                    >
                        {currentTab === "Purchased" && transactions.map((transaction, index) => (
                            <div key={index} className='flex flex-col md:flex-row my-4 mx-2 bg-white p-4 rounded shadow-md items-center'>
                                <img src={transaction.image_path} alt="Item" className="rounded-md w-11/12 md:w-2/12 object-cover mr-4 mb-2 md:mb-0 mx-auto md:mx-0" />
                                <div className='flex flex-col md:flex-row flex-grow pr-4'>
                                    <div className='p-2'>
                                    <h2 className='font-bold text-lg md:text-2xl'>{transaction.product_name}</h2>
                                    <h2 className='font-medium text-sm italic md:pt-2 '>{new Date(transaction.purchase_date).toLocaleDateString()}</h2>
                                    </div>
                                    <h2 className='text-xs md:text-sm md:py-4 md:pl-4 text-blue-700 break-all w-full md:w-auto' title={transaction.transaction_hash}>{transaction.transaction_hash}</h2>
                                </div>
                                <div className='flex flex-row items-center'>
                                    <FontAwesomeIcon icon={faEthereum} className='text-xl md:text-4xl mr-2' />
                                    <h2 className='font-medium text-xl md:text-3xl'>{transaction.price} ETH</h2>
                                </div>
                            </div>
                        ))}
                        {currentTab === "Stat" && <div className="flex justify-center items-center "><DonutChart data={categoryData} /></div>}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
