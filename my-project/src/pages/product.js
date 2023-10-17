import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEthereum } from '@fortawesome/free-brands-svg-icons';
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';

const Product = ({ isLoggedIn, userId }) => {
    const location = useLocation();
    const navigate = useNavigate();
    const [productData, setProductData] = useState(location?.state?.product || {});
    const [contractAddress, setContractAddress] = useState(null);
    

    
    useEffect(() => {
        if (!productData.product_name && productData.item_id) {
            axios.get(`http://127.0.0.1:8000/products/${productData.item_id}/`)
                .then(response => setProductData(response.data))
                .catch(error => console.error("Error fetching product details:", error));
        }
        // Checks if contract is deployed
        axios.get('http://127.0.0.1:8000/checkContractDeployment')
            .then(response => setContractAddress(response.data.isDeployed ? response.data.address : null))
            .catch(error => console.error("Error checking contract deployment:", error));
    }, [productData]);

    const handlePurchase = async () => {
        if (!isLoggedIn) {
            alert("You need to be logged in to make a purchase!");
            navigate('/login');
            return;
        }

        if (!contractAddress) {
            try {
                const deployResponse = await axios.get('http://127.0.0.1:8000/deployContract');
            } catch (error) {
                console.error("Error deploying contract:", error);
                alert('Error deploying the smart contract. Please try again.');
                return;
            }
        }

        const payload = {
            user_id: userId,
            item_id: productData.item_id,
            price: productData.price
        };
        console.log('Sending payload:', payload);
        axios.post('http://127.0.0.1:8000/purchase_product/', payload)        
            .then(response => {
                if (response.data.status === 'success') {
                    alert('Purchase successful!');
                } else {
                    alert('Purchase failed.');
                }
            })
            .catch(error => {
                console.error("Error during purchase:", error);
                alert('Purchase failed due to an error.');
            });
    };

    return (
        <div className="mx-4 md:mx-20 px-4 md:px-20 flex justify-center items-center h-screen">
            <div className="grid grid-cols-1 md:grid-cols-6 gap-4 px-2 md:px-20 w-full md:max-w-5xl">
                <div className="col-span-6 md:col-span-2 p-4 md:p-7 bg-primary-color rounded-md text-center">
                    <img src={productData.image_path} alt={productData.product_name} className="object-contain w-6/12 md:w-5/6 mb-4 mx-auto" />
                    <h1 className="font-bold text-2xl mb-2">{productData.product_name}</h1>
                    <h2 className="text-xl mb-2">{productData.category}</h2>
                    <h1 className="text-xl font-bold mb-2"><FontAwesomeIcon icon={faEthereum} /> {productData.price} ETH</h1>
                    <p className="text-xl mb-2">Seller: {productData.seller}</p>
                    <button
                        onClick={handlePurchase} // Calls the handlePurchase function when the button is clicked
                        className="bg-secondary-color p-2 w-full rounded-full shadow-lg font-bold mt-4 text-white"
                    >
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
