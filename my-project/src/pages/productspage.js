import React, { useState } from 'react';
import FetchData from './../components/FetchData'; // Import the FetchData component

const ProductsPage = () => {
    const [activeTab, setActiveTab] = useState("All"); // Default tab is "All"

    return (
        <div className="grid grid-rows-[auto,1fr]">
            <div className="w-full flex justify-center items-center py-6 md:py-10">
                {/* ... Add any header or description if needed ... */}
            </div>
            <div className=" w-full flex flex-col items-start">
                <div className="flex justify-start self-center px-4 md:px-10">
                    <button
                        className={`px-6 py-2 rounded-full m-4 uppercase font-semibold shadow-md ${activeTab === "All" ? "bg-primary-color" : "bg-gray-600"
                            }`}
                        onClick={() => setActiveTab("All")}
                    >
                        All
                    </button>
                    <button
                        className={`px-6 py-2 rounded-full m-4 uppercase font-semibold shadow-md ${activeTab === "Gaming" ? "bg-primary-color" : "bg-gray-600"
                            }`}
                        onClick={() => setActiveTab("Gaming")}
                    >
                        Gaming
                    </button>
                    <button
                        className={`px-6 py-2 rounded-full m-4 uppercase font-semibold shadow-md ${activeTab === "Music" ? "bg-primary-color" : "bg-gray-600"
                            }`}
                        onClick={() => setActiveTab("Music")}
                    >
                        Music
                    </button>
                    <button
                        className={`px-6 py-2 rounded-full m-4 uppercase font-semibold shadow-md ${activeTab === "Art" ? "bg-primary-color" : "bg-gray-600"
                            }`}
                        onClick={() => setActiveTab("Art")}
                    >
                        Art
                    </button>
                    <button
                        className={`px-6 py-2 rounded-full m-4 uppercase font-semibold shadow-md ${activeTab === "Software" ? "bg-primary-color" : "bg-gray-600"
                            }`}
                        onClick={() => setActiveTab("Software")}
                    >
                        Software
                    </button>
                </div>
                {/* Call FetchData with the activeTab as parameter */}
                <FetchData tab={activeTab} />
            </div>
        </div>
    );
};

export default ProductsPage;
