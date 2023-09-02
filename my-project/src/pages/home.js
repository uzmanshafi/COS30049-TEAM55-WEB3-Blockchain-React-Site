import React from 'react';
import homeImage from '../images/home-image1.png';  // Adjust the path accordingly
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpload } from '@fortawesome/free-brands-svg-icons';

const Home = () => {
  return (
    <div className="grid grid-rows-2">
      <div className="w-full h-80 flex justify-center items-center">
        <div className="bg-primary-color h-3/4 w-1/2 rounded-md flex flex-row justify-between p-10">
          <div className="flex flex-col justify-center items-center w-2/3">
            <h2 className="text-1xl font-bold">BUY THE LATEST</h2>
            <h2 className="text-2xl font-bold">POP VINYL</h2>
            <h2 className="text-md font-bold">MUSIC TODAY AS AN</h2>
            <h1 className="text-6xl font-bold">NFT</h1>
          </div>
          <div className="flex flex-col justify-center items-center">
            <img src={homeImage} alt="home image" className="object-contain w-5/12" />
          </div>
          <div className="flex flex-col justify-end items-center">
            <button className="bg-secondary-color w-32 h-10 rounded-md font-bold text-white">
              BUY NOW
            </button>
          </div>
        </div>
      </div>
      <div className="bg-blue-500 w-full h-96"></div>
    </div>
  );
};

export default Home;
