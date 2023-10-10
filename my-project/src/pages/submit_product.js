import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faImage } from '@fortawesome/free-regular-svg-icons';
import { faEthereum, faBtc } from '@fortawesome/free-brands-svg-icons';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';

const CustomDropDown = ({ onChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState('CHOOSE BLOCKCHAIN');

  const handleSelect = (value, label) => {
    setSelected(label);
    setIsOpen(!isOpen);
    onChange(value);
  };

  return (
    <div className="relative inline-block text-left md:w-1/4">
      <button type="button" onClick={() => setIsOpen(!isOpen)} className="inline-flex justify-between w-full rounded-md px-4 py-2 bg-accent-color text-white">
        {selected} <FontAwesomeIcon icon={faCaretDown} />
      </button>

      {isOpen && (
        <div className="absolute mt-2 w-full rounded-md bg-white shadow-lg">
          <div className="py-1 bg-accent-color">
            <div onClick={() => handleSelect('ethereum', 'ETHEREUM')} className="text-white cursor-pointer flex justify-between px-4 py-2">
              ETHEREUM <FontAwesomeIcon icon={faEthereum} />
            </div>
            <div onClick={() => handleSelect('bitcoin', 'BITCOIN')} className="text-white cursor-pointer flex justify-between px-4 py-2">
              BITCOIN <FontAwesomeIcon icon={faBtc} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const Upload = () => {
  const handleBlockchainChange = (value) => {
    console.log("Blockchain selected:", value);
  };

  return (
    <div className="mx-auto px-4 md:mx-10 md:px-20 p-10">
      <div className="grid grid-cols-12 gap-4 px-4 md:px-20">
        <div className="col-span-12 md:col-span-4 p-7 bg-primary-color rounded-md text-center flex flex-col">
          <div className="p-4 py-16 bg-accent-color rounded-md w-full h-1/2 text-2xl">
            <FontAwesomeIcon icon={faImage} size="2xl" style={{color: "#ffffff"}} />
          </div>
          <button className="bg-secondary-color p-2 w-full rounded-md shadow-lg font-bold mt-auto">UPLOAD IMAGE</button>
        </div>
        <div className="col-span-12 md:col-span-8 p-7 bg-primary-color rounded-md">
          <form className="">
            <div className="flex flex-col md:flex-row items-start mb-4">
              <input className="mr-2 rounded-md bg-accent-color placeholder-white text-white w-3/4" type="text" maxLength="30" placeholder="ENTER PRODUCT NAME HERE" />
              <p className="font-bold text-xs">* MAX 30 CHARACTERS</p>
            </div>
            <div className="flex flex-col md:flex-row items-start mb-4">
              <textarea className="mr-2 h-40 bg-accent-color rounded-md placeholder-white text-white md:w-3/4" placeholder="ENTER DESCRIPTION HERE"></textarea>
              <p className="font-bold text-xs ml-2">* THE DESCRIPTION WILL BE INCLUDED ON THE ITEM'S DETAIL PAGE UNDERNEATH ITS IMAGE. <u>MARKDOWN</u> SYNTAX IS SUPPORTED.</p>
            </div>
            <div className="flex items-center mb-4">
              <CustomDropDown onChange={handleBlockchainChange} />
            </div>
            <div className="flex flex-col md:flex-row items-start mb-4">
              <input className="mr-2 rounded-md bg-accent-color placeholder-white text-white md:w-1/4" type="number" placeholder="SUPPLY QUANTITY" />
              <p className="font-bold text-xs ml-2">* THE NUMBER OF ITEMS THAT CAN BE MINTED.<br />NO GAS COST TO YOU!</p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Upload;
