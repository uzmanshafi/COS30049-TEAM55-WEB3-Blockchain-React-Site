import React, { useState } from 'react';
import axios from 'axios';

function SearchBar({ onSearch }) {
    const [suggestions, setSuggestions] = useState([]);

    const handleInputChange = (e) => {
        const value = e.target.value;
        if (value.length >= 3) {
            axios.get(`http://127.0.0.1:8000/suggest_products/?query=${value}`)
                .then(response => {
                    setSuggestions(response.data);
                })
                .catch(error => {
                    console.error("Error fetching product suggestions:", error);
                });
        } else {
            setSuggestions([]);
        }
    };

    return (
        <div className="relative p-2">
            <div className="absolute inset-y-0 left-0 flex items-center pl-5 pointer-events-none">
                <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                </svg>
            </div>
            <input
                className="block w-full p-2 pl-10 text-md text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-secondary-color focus:border-secondary-color  "
                type="search"
                placeholder="Type Search Product by name or category"
                onKeyDown={(e) => {
                    if (e.key === "Enter") {
                        onSearch(e.target.value);
                    }
                }}
                onChange={handleInputChange}
            />
            {suggestions.length > 0 && (
                <div className="absolute top-full left-0 mt-2 w-full bg-white border border-gray-300 rounded-lg shadow-lg">
                    {suggestions.map((suggestion, idx) => (
                        <div key={idx} className="p-2 hover:bg-gray-200 cursor-pointer" onClick={() => onSearch(suggestion.product_name)}>
                            {suggestion.product_name}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default SearchBar;
