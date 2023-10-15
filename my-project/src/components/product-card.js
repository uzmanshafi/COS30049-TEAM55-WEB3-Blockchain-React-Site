import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEthereum } from '@fortawesome/free-brands-svg-icons';
import { useNavigate } from 'react-router-dom';

function ProductCard({ product }) {
    const navigate = useNavigate();
    
    const goToProductPage = () => {
        navigate('/product');
    };

    return (
        <div className="bg-primary-color rounded-md h-96 w-64 shadow-lg p-4 flex flex-col justify-between items-center m-2">
            <div className="h-1/2 w-full flex justify-center items-center overflow-hidden">
                <img 
                    src={product.image_path} 
                    alt={product.product_name} 
                    className="max-h-full max-w-full object-cover shadow-inner" 
                />
            </div>
            <h1 className="text-xl font-bold">{product.product_name}</h1>
            <h1>{product.category.toUpperCase()}</h1>
            <div className="flex justify-between w-full items-center">
                <h2 className="text-md font-bold tracking-widest flex items-center">
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
    );
}

export default ProductCard;
