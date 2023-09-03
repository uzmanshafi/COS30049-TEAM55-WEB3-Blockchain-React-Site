import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUpload } from '@fortawesome/free-brands-svg-icons'
import ProductCard from '../components/product-card';



const Product = ({ productImage, productName, ethPrice, currentSupply, itemsSold, description }) => {
    return (
        <div className="flex">
            
            <div className="bg-primary-color p-4 w-1/3">
                <div className="rounded-md bg-white p-4">
                    <img className="object-contain h-fit w-full" src={productImage} alt={productName} />
                    <h1 className="text-2xl font-bold mt-4">{productName}</h1>
                    <h2 className="text-lg font-bold mt-2">
                        {ethPrice} ETH
                    </h2>
                    <div className="flex mt-4">
                        <button className="bg-secondary-color py-2 px-4 rounded-md shadow-md font-bold text-white">
                            Buy Now
                        </button>
                        <span className="ml-2 text-white">{currentSupply}</span>
                        <button className="bg-secondary-color py-2 px-4 rounded-md shadow-md font-bold text-white ml-auto">
                            Add To Cart
                        </button>
                        <span className="ml-2 text-white">{itemsSold}</span>
                    </div>
                </div>
            </div>
            
            {/* Right Box */}
            <div className="bg-secondary-color p-4 w-2/3">
                <div className="rounded-md bg-white p-4">
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