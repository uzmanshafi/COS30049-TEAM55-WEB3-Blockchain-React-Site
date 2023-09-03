import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEthereum } from '@fortawesome/free-brands-svg-icons';
import p1 from '../images/p1.png';
import p2 from '../images/p2.png';
import p3 from '../images/p3.png';
import p4 from '../images/p4.png';

const ProductCard = () => {
  const [productImage, setProductImage] = useState(p1); 
  const [ethPrice, setEthPrice] = useState(0.5); 
  const [nftNumber, setNftNumber] = useState(1); 

  useEffect(() => {
  
    const images = [p1, p2, p3, p4];
    const randomImage = images[Math.floor(Math.random() * images.length)];
  
    setProductImage(randomImage);

    
    const randomPrice = (Math.random() * (4 - 0.5) + 0.5).toFixed(2);
    setEthPrice(randomPrice);

    // Randomize NFT number between 1 and 1000
    const randomNumber = Math.floor(Math.random() * 1000) + 1;
    setNftNumber(randomNumber);
  
  }, []);

  return (
    <div className="bg-primary-color rounded-md h-80 w-64 shadow-lg p-4 flex flex-col justify-between items-center">
      <img className="object-contain h-fit w-full shadow-inner" src={productImage} alt="nft" />
      <h1 className="text-xl font-bold">NFT #{nftNumber} PENGUIN</h1>
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
