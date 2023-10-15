import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEthereum } from '@fortawesome/free-brands-svg-icons';
import axios from 'axios';
import { useLocation } from 'react-router-dom';

const Product = () => {
    const location = useLocation();
    const [productData, setProductData] = useState(location?.state?.product || {});

    useEffect(() => {
        if (!productData.product_name && productData.item_id) {
            axios.get(`http://127.0.0.1:8000/products/${productData.item_id}/`)
                .then(response => setProductData(response.data))
                .catch(error => console.error("Error fetching product details:", error));
        }
    }, [productData]);

    return (
        <div className="mx-4 md:mx-20 px-4 md:px-20 flex justify-center items-center h-screen">
            <div className="grid grid-cols-1 md:grid-cols-6 gap-4 px-2 md:px-20 w-full md:max-w-5xl">
                <div className="col-span-6 md:col-span-2 p-4 md:p-7 bg-primary-color rounded-md text-center">
                    <img src={productData.image_path} alt={productData.product_name} className="object-contain w-6/12 md:w-5/6 mb-4 mx-auto" />
                    <h1 className="font-bold text-2xl mb-2">{productData.product_name}</h1>
                    <h2 className="text-xl mb-2">{productData.category}</h2>
                    <h1 className="text-xl font-bold mb-2"><FontAwesomeIcon icon={faEthereum} /> {productData.price} ETH</h1>
                    <p className="text-xl mb-2">Seller: {productData.seller}</p>
                    <button className="bg-secondary-color p-2 w-full rounded-full shadow-lg font-bold mt-4 text-white">
                        CONFIRM PURCHASE
                    </button>
                </div>
                <div className="col-span-6 md:col-span-4 p-4 md:p-7 bg-primary-color rounded-md">
                    <h2 className="font-bold mb-4 text-2xl">DESCRIPTION</h2>
                    <p className='text-lg text-justify leading-8 font-semibold'>{productData.description}</p>
                </div>
            </div>
        </div>
    );
};

export default Product;
