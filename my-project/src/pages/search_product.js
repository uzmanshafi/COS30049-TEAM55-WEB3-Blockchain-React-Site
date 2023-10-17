import React, { useState, useEffect } from 'react';
import ProductCard from '../components/product-card';
import axios from 'axios';
import { useLocation } from 'react-router-dom';

const SearchProduct = () => {
  const location = useLocation();
  const searchQuery = location.state ? location.state.searchQuery.toLowerCase() : "";

  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get(`http://127.0.0.1:8000/search_products/?query=${searchQuery}`)
      .then(response => {
        setProducts(response.data);
      })
      .catch(error => {
        console.error("Error fetching products:", error);
      });
  }, [searchQuery]);

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-xl font-bold my-4 text-primary-color">Search Results for: "{searchQuery}"</h1>
      <div id='display_searched_product' className='flex flex-wrap justify-start'>
        {products.length > 0 ? (
          products.map(product => (
            <ProductCard key={product.item_id} product={product} />
          ))
        ) : (
          <h2 className="text-2xl text-red-500 font-bold mt-5 mx-auto">Product does not exist</h2>
        )}
      </div>
    </div>
  );
};

export default SearchProduct;
