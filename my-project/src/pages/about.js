import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEthereum } from '@fortawesome/free-brands-svg-icons'

const About = () => {
    return (
        <div className="p-20">
            <h1 className="text-white p-20 text-center font-bold text-2xl">TEAM MEMBERS</h1>
                   {/* Container for all boxes, center aligned */}
            <div className="flex justify-center mb-8">
                {/* Flex container to keep boxes beside each other */}
                <div className="flex space-x-8">
                    {/* Single Box */}
                    <div className="bg-primary-color w-64 h-64 p-8 rounded-lg flex flex-col items-center justify-center">
                        <div className="bg-white w-24 h-24 rounded-full"></div>
                        <p className="text-center mt-4 text-black font-bold">SHAFI UZMAN FASSI</p>
                        <p className="text-center text-black">102608927</p>
                    </div>

                    {/* Single Box */}
                    <div className="bg-primary-color w-64 h-64 p-8 rounded-lg flex flex-col items-center justify-center">
                        <div className="bg-white w-24 h-24 rounded-full"></div>
                        <p className="text-center mt-4 text-black font-bold">SAMIN J.HOSSAIN</p>
                        <p className="text-center text-black">103837256</p>
                    </div>

                    {/* Single Box */}
                    <div className="bg-primary-color w-64 h-64 p-8 rounded-lg flex flex-col items-center justify-center">
                        <div className="bg-white w-24 h-24 rounded-full"></div>
                        <p className="text-center mt-4 text-black font-bold">CALEB GARDINER</p>
                        <p className="text-center text-black">104540186</p>
                    </div>
                </div>
            </div>
            
            {/* Rectangle for paragraph */}
            <div className="bg-primary-color p-4 rounded-lg mx-auto w-3/4">
                {/* Space for paragraph */}
                <p>
                Our team consists of three devoted students, namely Samin, Uzman, and Caleb, who are enrolled at Swinburne University. We are actively engaged in the development of a cutting-edge website, demonstrating our enthusiasm and commitment to this project. Drawing upon our collective knowledge and proficiency in the field of software development, we made a deliberate decision to employ React.js as our chosen development framework in order to guarantee a smooth and highly interactive user interface. The objective of our project is to tackle the identified problem or topic by providing a user-friendly and comprehensive platform for our intended audience. As we progress through different phases of advancement, our dedication is in the implementation of optimal methodologies, while concurrently engaging in the active pursuit of feedback to enhance the quality of our endeavours.
                </p>
            </div>
            </div>
        
    );
};
 
export default About;