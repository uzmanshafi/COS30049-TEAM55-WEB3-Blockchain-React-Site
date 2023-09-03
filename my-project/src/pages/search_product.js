import React, { useState } from 'react';
import ProductCard from '../components/product-card';
import productData from '../Dataset/data';

const SearchProduct = () => {
  const [selectedFilter, setSelectedFilter] = useState("All");

  const handleFilterChange = (filter) => {
    setSelectedFilter(filter);
  };

  const filteredProducts = productData.filter(product => 
    selectedFilter === "All" ? true : product.typeOfProduct === selectedFilter
  );

  return (
    <div className="container mx-auto px-4">
      <div className='flex flex-row flex-wrap justify-center md:justify-start m-4'>
        <button onClick={() => handleFilterChange("All")} className='bg-primary-color w-full md:w-20 uppercase font-bold rounded-full p-2 mx-1 my-1 text-center'>All</button>
        <button onClick={() => handleFilterChange("Art")} className='bg-primary-color w-full md:w-20 uppercase font-bold rounded-full p-2 mx-1 my-1 text-center'>Art</button>
        <button onClick={() => handleFilterChange("Entertainment")} className='bg-primary-color w-full md:w-36 uppercase font-bold rounded-full p-2 mx-1 my-1 text-center'>Entertainment</button>
        <button onClick={() => handleFilterChange("Games")} className='bg-primary-color w-full md:w-20 uppercase font-bold rounded-full p-2 mx-1 my-1 text-center'>Games</button>
        <button onClick={() => handleFilterChange("Membership")} className='bg-primary-color w-full md:w-32 uppercase font-bold rounded-full p-2 mx-1 my-1 text-center'>Membership</button>
      </div>
      <div id='display_searched_product' className='flex flex-wrap justify-start'>
        {filteredProducts.map(product => <ProductCard key={product.id} product={product} />)}
      </div>
    </div>
  );
};

export default SearchProduct;
