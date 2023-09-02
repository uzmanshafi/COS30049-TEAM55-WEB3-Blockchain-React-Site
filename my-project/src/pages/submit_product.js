import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faImage } from '@fortawesome/free-regular-svg-icons'
import { faEthereum, faBtc } from '@fortawesome/free-brands-svg-icons'

const Upload = () => {
    return (
        <div className=" mx-20 px-20">
            <h1 className="text-primary-color font-bold italic text-2xl px-20 pt-8">
                UPLOAD 
            </h1>
            <br></br>
            <div className="grid grid-rows-5 grid-flow-col gap-4 px-20">
                <div className="row-start-1 p-7 row-span-1 col-span-2 bg-primary-color rounded-md text-center col-start-1 col-span-2 flex flex-col">
                    <div className="p-4 py-16 bg-accent-color rounded-md w-full h-1/2 text-2xl"><FontAwesomeIcon icon={faImage} size="2xl" style={{color: "#ffffff",}} /></div>
                    <br></br>
                    <button className="bg-secondary-color p-2 w-full rounded-md shadow-lg font-bold mt-auto">UPLOAD IMAGE</button>
                </div>
                <div class="row-start-1 p-7  row-span-1 bg-primary-color rounded-md col-end-8 col-span-4">
                    <form className="">
                        <div className="flex items-center">
                            <input className="mr-2 rounded-md bg-accent-color placeholder-white text-white" type="text" size="30" maxlength="30" placeholder="ENTER PRODUCT NAME HERE"></input>
                            <p className="font-bold">* MAX 30 CHARACTERS</p>
                        </div>
                        <br></br>
                        <div className="flex items-center">
                            <textarea className="mr-2 h-40 bg-accent-color rounded-md placeholder-top-left placeholder-white text-white w-80" type="text" placeholder="ENTER DESCRIPTION HERE" size="30"></textarea>
                            <p className="font-bold"> * THE DESCRIPTION WILL BE INCLUDED ON THE ITEM'S DETAIL PAGE UNDERNEATH ITS IMAGE. <u>MARKDOWN</u> SYNTAX IS SUPPORTED.</p>
                        </div>
                       
                        <br></br>
                        <div className="flex items-center">
                            <select id="blockchain" name="blockchain" className="bg-accent-color text-white rounded-md">
                                <option value="">CHOOSE BLOCKCHAIN</option>
                                <option value="ethereum">ETHEREUM</option>
                                <option value="bitcoin">BITCOIN</option>
                            </select>
                            <p className="pl-2 text-2xl"><FontAwesomeIcon icon={faEthereum} /> <FontAwesomeIcon icon={faBtc} /> </p>
                        </div>
                        <br></br>
                        <div className="flex items-center">
                            <input className="mr-2 rounded-md bg-accent-color placeholder-white" type="number" size="100" maxlength="30" placeholder="SUPPLY QUANTITY"></input>
                            <p className="font-bold">* THE NUMBER OF ITEMS THAT CAN BE MINTED.<br></br>NO GAS COST TO YOU!</p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Upload;