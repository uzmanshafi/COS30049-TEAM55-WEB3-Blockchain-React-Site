import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUpload } from '@fortawesome/free-brands-svg-icons'
import product from '../components/product-card';
import p1 from '../images/p1.png';
import p2 from '../images/p2.png';
import p3 from '../images/p3.png';
import p4 from '../images/p4.png';

const Product = ({ productImage, productName, ethPrice, currentSupply, itemsSold, description }) => {
    return (
        <div className="h-96 flex">
            {/* Left Box */}
            <div className="bg-primary-color p-6 w-1/2">
            <div className="border-black border-2 rounded-md">
      <img className="object-contain h-fit w-full" src={productImage} alt={productName} /> </div>
                    <h1 className="text-2xl font-bold mt-4">{productName}</h1>
                    <h2 className="text-lg font-bold mt-30">
                        {ethPrice} ETH
                    </h2>
                    <div className="flex mt-4">
                        <div>
                            <div className="bg-gray-200 p-2 mb-2 text-center rounded">
                                Current Supply:3000 <strong>{currentSupply}</strong>
                            </div>
                            <button className="bg-secondary-color py-2 px-4 rounded-md shadow-md font-bold text-white">
                                Buy Now
                            </button>
                        </div>
                        <div className="ml-auto">
                            <div className="bg-gray-200 p-2 mb-2 text-center rounded">
                                Items Sold: 130 <strong>{itemsSold}</strong>
                            </div>
                            <button className="bg-secondary-color py-2 px-4 rounded-md shadow-md font-bold text-white">
                                Add To Cart
                            </button>
                        </div>
                    </div>
                
            </div>
            
            {/* Right Box */}
            <div className="bg-secondary-color p-6 w-1/2">
                <div className="rounded-md bg-white p-6 h-full">
                    {/* White box above the content name */}
                    <div className="bg-white h-12 w-full mb-4 rounded-full">
                        {/* Add content here, if needed */}
                    </div>
                    <h1 className="text-2xl font-bold">Description</h1>
                    <p className="mt-2">{description}</p>
                    <div className="mt-4 bg-gray-200 p-4">
                        <h2 className="text-xl font-bold">Transaction Activity</h2>
                        {/* Add your transaction activity here */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;