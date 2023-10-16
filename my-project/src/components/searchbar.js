import React from 'react';
import { useState } from 'react';

function SearchBar({ placeholder, data }) {
    
    const [filteredData, setFilteredData] = useState([]);

    const handleFilter = (event) => {
        const searchWord = event.target.value
        const newFilter = data.filter((value) => {
            return value.product_name.toLowerCase().includes(searchWord.toLowerCase())
        });

        if(searchWord === "") {
            setFilteredData([])
        } else {
            setFilteredData(newFilter);
        }

    }

    return (
        <div className="search relative p-2">
            <div className="searchInputs relative">
                <div className="SearchIcon absolute inset-y-0 left-0 flex items-center pl-5 pointer-events-none">
                    <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                    </svg>
                </div>
                <input type="text" placeholder={placeholder} onChange={handleFilter} className="block w p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
            </div>
            {filteredData.length != 0 && (
                <div className="dataResult absolute block w-56 p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    {filteredData.slice(0, 8).map((product, index) => {
                        return <a className="dataItem w-100% h-40px display-flex align no-underline" href="/product">
                            <p className="pt-1 overflow-hidden overflow-y-auto hover:bg-grey">{product.product_name}</p>
                        </a>;
                    })}
                </div>
            )}

        </div>

        
        
    );
}

export default SearchBar;
