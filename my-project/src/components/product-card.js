import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEthereum } from '@fortawesome/free-brands-svg-icons';
import p1 from '../images/p1.png';
import p2 from '../images/p2.png';
import p3 from '../images/p3.png';
import p4 from '../images/p4.png';

const ProductCard = ({ product }) => {
  const { id, typeOfProduct, image, ethPrice, nftNumber } = product;

  // Here we map the string image name to the imported image variables
  const imageMap = {
    'p1.png': p1,
    'p2.png': p2,
    'p3.png': p3,
    'p4.png': p4,
  };

  return (
    <div className="bg-primary-color rounded-md h-96 w-64 shadow-lg p-4 flex flex-col justify-between items-center m-2">
      <img className="object-contain h-fit w-full shadow-inner" src={imageMap[image]} alt={`nft ${typeOfProduct}`} />
      <h1 className="text-xl font-bold">NFT #{nftNumber}</h1>
      <h1>{typeOfProduct.toUpperCase()}</h1>
      <div className="flex justify-between w-full items-center">
        <h2 className="text-lg font-bold tracking-widest flex items-center">
          <FontAwesomeIcon icon={faEthereum} /> {ethPrice} ETH
        </h2>
        <button className="bg-secondary-color py-2 px-4 rounded-md shadow-md font-bold tracking-wider text-white border-2 border-white">
          BUY NOW
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
