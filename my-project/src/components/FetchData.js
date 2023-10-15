import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEthereum } from '@fortawesome/free-brands-svg-icons';
import { useNavigate } from 'react-router-dom';

const FetchData = ({ tab }) => {
    const [products, setProducts] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        let endpoint = 'http://127.0.0.1:8000/products/';
        if (tab === 'Trending') {
            endpoint += '?trending=true';  // Filters trending products
        } else if (tab === "Recent") {
            endpoint += '?recent=true';  // Filters recent products
        } else if (tab !== "All") {
            endpoint += `?category=${tab}`;  // Filters products by category
        }

        axios.get(endpoint)
            .then(res => { setProducts(res.data) })
            .catch(err => console.log(err))
    }, [tab]);

    return (
        <div className="p-4 md:p-12 flex flex-wrap justify-center items-start">
            {products.map((product, i) => (
                <div key={i} className="bg-primary-color rounded-md h-96 w-64 shadow-lg p-4 flex flex-col justify-between items-start m-2">
                    <div className="relative w-full h-2/3 mb-4">
                        <img
                            className="absolute inset-0 w-full h-full object-cover"
                            src={product.image_path}
                            alt={`Product named ${product.product_name}`}
                        />
                    </div>

                    <div className="flex flex-col justify-between w-full h-1/3">
                        <div>
                            <h1 className="text-md font-bold">{product.product_name}</h1>
                            <h1 className="uppercase mb-2">{product.category}</h1>
                        </div>

                        <div className="flex justify-between w-full items-center">
                            <h2 className="text-md font-bold tracking-widest flex items-center">
                                <FontAwesomeIcon icon={faEthereum} className='pr-2' /> {product.price} ETH
                            </h2>
                            <button
                                onClick={() => {
                                    console.log("Navigating with product:", product);
                                    navigate('/product', { state: { product } });
                                }}
                                className="bg-secondary-color py-2 px-4 rounded-md shadow-md font-bold tracking-wider text-white border-2 border-white"
                            >
                                BUY NOW
                            </button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default FetchData;
