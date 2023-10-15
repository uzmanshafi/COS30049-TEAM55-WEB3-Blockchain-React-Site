import React, { useState } from 'react';
import homeImage from '../images/home-image1.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEthereum } from '@fortawesome/free-brands-svg-icons';
import FetchData from './../components/FetchData'; // Import the FetchData component

const Home = () => {
  const [activeTab, setActiveTab] = useState("Trending");

  return (
    <div className="grid grid-rows-[auto,1fr]">
        <div className="w-full flex justify-center items-center py-6 md:py-10">
                <div className="bg-primary-color px-4 py-6 md:p-10 rounded-md flex flex-col md:flex-row justify-between items-center md:w-1/2">
                    <div className="flex flex-col justify-center items-center mb-4 md:mb-0 md:w-4/5">
                        <h2 className="text-xs md:text-xl font-bold mb-2">BUY THE LATEST</h2>
                        <h2 className="text-xs md:text-2xl font-bold mb-2">POP VINYL</h2>
                        <h2 className="text-xs md:text-lg font-bold mb-2">MUSIC TODAY AS AN</h2>
                        <h1 className="text-lg md:text-6xl font-bold">NFT</h1>
                    </div>
                    <div className="flex flex-col justify-center items-center mb-4 md:mb-0">
                        <img src={homeImage} alt="home image" className="object-contain w-6/12 md:w-6/12" />
                    </div>
                    <div className="flex flex-col justify-end items-center md:self-end shadow-md">
                        <button className="bg-secondary-color w-32 h-10 rounded-md font-bold text-white">
                            BUY NOW
                        </button>
                    </div>
                </div>
            </div>
      <div className=" w-full flex flex-col items-start">
        <div className="flex justify-start self-center px-4 md:px-10">
          <button
            className={`px-6 py-2 rounded-full m-4 uppercase font-semibold shadow-md ${
              activeTab === "Trending" ? "bg-primary-color" : "bg-gray-600"
            }`}
            onClick={() => setActiveTab("Trending")}
          >
            Trending
          </button>
          <button
            className={`px-6 py-2 rounded-full m-4 uppercase font-semibold shadow-md ${
              activeTab === "Recent" ? "bg-primary-color" : "bg-gray-600"
            }`}
            onClick={() => setActiveTab("Recent")}
          >
            Recent
          </button>
        </div>
        <FetchData />
      </div>
    </div>
  );
};

export default Home;