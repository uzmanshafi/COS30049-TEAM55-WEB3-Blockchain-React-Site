import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEthereum } from '@fortawesome/free-brands-svg-icons';
import SearchBar from './../components/searchbar';

const SearchProduct = () => {
  const [filteredData, setFilteredData] = useState([]);
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/products/')
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const handleFilter = (event) => {
    const searchWord = event.target.value.toLowerCase();
    const newFilter = products.filter((value) => {
      const productName = value.product_name.toLowerCase();
      const category = value.category.toLowerCase();
      return productName.includes(searchWord) || category.includes(searchWord);
    });

    if(searchWord === "") {
        setFilteredData([])
    } else {
        setFilteredData(newFilter);
    }

    if(searchWord.length === 1) {
        navigate('/search');
    }
  } 

  return (
    <div className="py-10">
      <div className="searchInputs flex justify-center items-center">
        <div classNam="w-96 absolute">
          <input type="text" placeholder="Enter product or category.." onChange={handleFilter} className="block w-96 p-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
        </div>

      </div>
      <div className="p-4 py-10 md:p-12 flex flex-wrap justify-center items-start">
      {filteredData.map((product, i) => (
        <div key={i} className="bg-primary-color rounded-md h-96 w-64 shadow-lg p-4 flex flex-col justify-between items-start m-2">
          <div className="relative w-full h-2/3 mb-4">
            <img
              className="absolute inset-0 w-full h-full object-cover"
              src={product.image_path}
              alt={`Product named ${product.product_name}`} />
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
                } }
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
  );
};

export default SearchProduct;
