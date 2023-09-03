import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEthereum } from '@fortawesome/free-brands-svg-icons';

const Product = ({ productImage, ethPrice, nftNumber, supply, sold }) => {
  return (
    <div className="flex justify-between">
      <div className="bg-white rounded-md p-4">
        <img className="object-contain h-48 w-full mb-2" src={productImage} alt="product" />
        <h1 className="text-xl font-bold">NFT #{nftNumber} PENGUIN</h1>
        <h2 className="text-lg font-bold tracking-widest flex items-center">
          <FontAwesomeIcon icon={faEthereum} /> {ethPrice} ETH
        </h2>
        <div className="flex justify-between mt-2">
          <button className="bg-blue-500 text-white py-1 px-4 rounded-full">
            Buy Now <span className="text-xs bg-white p-1 rounded-full">{supply}</span>
          </button>
          <button className="bg-green-500 text-white py-1 px-4 rounded-full">
            Add To Cart <span className="text-xs bg-white p-1 rounded-full">{sold}</span>
          </button>
        </div>
      </div>
      <div className="bg-gray-200 rounded-md p-4 w-2/3">
        <h1 className="text-primary-color font-bold italic text-2xl">Product Description</h1>
        <p className="text-primary-color mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit...
        </p>
        <div className="bg-white rounded-md p-4">
          Transaction Activity Here
        </div>
      </div>
    </div>
  );
};
