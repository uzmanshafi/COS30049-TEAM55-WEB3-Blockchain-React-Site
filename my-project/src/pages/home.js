import React from 'react';
import homeImage from '../images/home-image1.png';
import ProductCard from '../components/product-card';

const Home = () => {
  const numProducts = 10;
  const productArray = Array.from({ length: numProducts }, (_, index) => index);

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
          <button className="bg-primary-color px-6 py-2 rounded-full m-4 uppercase font-semibold shadow-md">Trending</button>
          <button className="bg-gray-600 px-6 py-2 rounded-full m-4 uppercase font-semibold shadow-md">Recent</button>
        </div>
        <div className="p-4 md:p-12 flex flex-wrap justify-center items-start">
          {productArray.map((_, index) => (
            <div className="m-2 md:m-4" key={index}>
              <ProductCard />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
