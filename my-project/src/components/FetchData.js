import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEthereum } from '@fortawesome/free-brands-svg-icons';
import { useNavigate } from 'react-router-dom';

function FetchData() {
    const [records, setRecords] = useState([])
    const navigate = useNavigate();
    const goToProductPage = () => {
        navigate('/product');
      };
    useEffect(()=> {
        axios.get('http://127.0.0.1:8000/products/')
        .then(res => {setRecords(res.data)})
        .catch(err => console.log(err))
    })
    return (
        <div>
            {records.map((product, i ) => (
            <div className="bg-primary-color rounded-md h-96 w-64 shadow-lg p-4 flex flex-col justify-between items-center m-2">
                <img className="object-contain h-fit w-full shadow-inner" src={product.image_path} alt={product.image_path} />
                <h1 className="text-xl font-bold">{product.product_name}</h1>
                <h1>{product.category.toUpperCase()}</h1>
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
            ))}
        </div>

        
    )
}

export default FetchData;