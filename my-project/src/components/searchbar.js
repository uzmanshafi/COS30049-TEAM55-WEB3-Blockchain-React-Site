import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

function SearchBar({ placeholder, data }) {
        const [filteredData, setFilteredData] = useState([]);

        const handleFilter = (event) => {
            const searchWord = event.target.value
            const newFilter = data.filter((value) => {
                return value.title.toLowerCase().includes(searchWord.toLowerCase());
            });

            if (searchWord == "") {
                setFilteredData([]);
            } else {
            setFilteredData(newFilter);
            }
        }
    return (
        <div className="search relative">
            <div className='searchInputs relative'>
                <input className="p-20px rounded-full border-4 bg-white border-black h-10 w-40 placeholder-background-color pl-10" type="text" placeholder={placeholder} onChange={handleFilter} />
                <div className="searchIcon absolute top-0 left-0 z-10 h-10 w-10 flex items-center justify-center">
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                </div>
            </div>
            {filteredData.length != 0 && (
            <div className='dataResult w-40 h-40 bg-white shadow-md overflow-hidden overflow-y-auto scrollbar-hide'>
                {filteredData.slice(0, 15).map((value, key) => {
                    return (
                        <a className="dataItem w-100% h-50px flex items-center bg-accent-color hover:bg-lightgrey" href={value.link} target="_blank"> 
                        {" "}
                        <p className="ml-5">{value.title}</p> 
                        </a>
                    );
                })}
            </div>
            )}
        </div>
    );
};

export default SearchBar;