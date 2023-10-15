import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEthereum } from '@fortawesome/free-brands-svg-icons';
import { useNavigate } from 'react-router-dom';

const FetchData = ({ tab }) => {
    const [products, setProducts] = useState([]);
    const [records, setRecords] = useState([]);
    const [displayTrendingOnly, setDisplayTrendingOnly] = useState(false);

    const navigate = useNavigate();
    const goToProductPage = () => {
        navigate('/product');
    };

    useEffect(() => {
        let endpoint = 'http://127.0.0.1:8000/products/';
        if (tab === 'Trending') {
            endpoint += '?trending=true';  // This will be a query param to filter trending products in backend
        }

        axios.get(endpoint)
            .then(res => { setRecords(res.data) })
            .catch(err => console.log(err))
    }, [tab]);

    const displayedProducts = displayTrendingOnly
        ? records.filter(product => product.isTrending === 1)
        : records;

    return (
        <div className="">
            <div className="p-4 md:p-12 flex flex-wrap justify-center items-start">
                {records.map((product, i) => (
                    <div className="">
                        <div className="bg-primary-color rounded-md h-96 w-64 shadow-lg p-4 flex flex-col justify-between items-center m-2">
                            <img className="object-contain h-fit w-full shadow-inner" src={product.image_path} alt={product.image_path} />
                            <h1 className="text-xl font-bold">{product.product_name}</h1>
                            <h1 className="">{product.category.toUpperCase()}</h1>
                            <div className="flex justify-between w-full items-center">
                                <h2 className="text-lg font-bold tracking-widest flex items-center">
                                    <FontAwesomeIcon icon={faEthereum} /> {product.price} ETH
                                </h2>
                                <button
                                    onClick={goToProductPage}
                                    className="bg-secondary-color py-2 px-4 rounded-md shadow-md font-bold tracking-wider text-white border-2 border-white"
                                >
                                    BUY NOW
                                </button>

                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>

    )
}

export default FetchData;