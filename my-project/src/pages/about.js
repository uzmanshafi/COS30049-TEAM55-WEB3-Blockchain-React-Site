import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEthereum } from '@fortawesome/free-brands-svg-icons'

const About = () => {
    return (
        <div classname="">
            <h1 className="text-white font-bold italic text-2xl">
                ABOUT
                <br></br>
                <br></br>

                <div className="grid grid-cols-8 gap-4">
                    <div className="col-span-8 bg-primary-color text-center p-8 rounded-md">01</div>
                    <div className="col-span-4 bg-primary-color text-center p-8 rounded-md">02</div>
                    <div className="col-span-4 bg-primary-color text-center p-8 rounded-md">03</div>
                </div>
            </h1>
        </div>
    );
};

export default About;