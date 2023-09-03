import React from 'react';
import p1 from '../images/p1.png';
import p2 from '../images/p2.png';
import p3 from '../images/p3.png';

const About = () => {
    return (
        <div className="p-4 md:p-12">
            <h1 className="text-white p-20 text-center font-bold text-2xl">ABOUT MEMBERS</h1>
            <div className="flex flex-wrap justify-center mb-8">
                <div className="bg-primary-color w-64 h-64 p-8 rounded-lg flex flex-col items-center justify-center m-4">
                    <div className="bg-white w-24 h-24 rounded-full bg-cover bg-no-repeat bg-center" id='user-1' style={{ backgroundImage: `url(${p1})` }}></div>
                    <p className="text-center mt-4 text-black font-bold">SHAFI UZMAN FASSY</p>
                    <p className="text-center text-black">1023456</p>
                </div>
                <div className="bg-primary-color w-64 h-64 p-8 rounded-lg flex flex-col items-center justify-center m-4">
                    <div className="bg-white w-24 h-24 rounded-full bg-cover bg-no-repeat bg-center" id='user-2' style={{ backgroundImage: `url(${p2})` }}></div>
                    <p className="text-center mt-4 text-black font-bold">SAMIN J.HOSSAIN</p>
                    <p className="text-center text-black">103837256</p>
                </div>
                <div className="bg-primary-color w-64 h-64 p-8 rounded-lg flex flex-col items-center justify-center m-4">
                    <div className="bg-white w-24 h-24 rounded-full bg-cover bg-no-repeat bg-center" id='user-3' style={{ backgroundImage: `url(${p3})` }}></div>
                    <p className="text-center mt-4 text-black font-bold">CALEB GARDINER</p>
                    <p className="text-center text-black">104540186</p>
                </div>
            </div>
            <div className="bg-primary-color p-4 rounded-lg mx-auto w-full md:w-3/4">
                <p>
                    Our team consists of three devoted students, namely Samin, Uzman, and Caleb, who are enrolled at Swinburne University. We are actively engaged in the development of a cutting-edge website, demonstrating our enthusiasm and commitment to this project. Drawing upon our collective knowledge and proficiency in the field of software development, we made a deliberate decision to employ React.js as our chosen development framework in order to guarantee a smooth and highly interactive user interface. The objective of our project is to tackle the identified problem or topic by providing a user-friendly and comprehensive platform for our intended audience. As we progress through different phases of advancement, our dedication is in the implementation of optimal methodologies, while concurrently engaging in the active pursuit of feedback to enhance the quality of our endeavours.
                </p>
            </div>
        </div>
    );
};

export default About;


