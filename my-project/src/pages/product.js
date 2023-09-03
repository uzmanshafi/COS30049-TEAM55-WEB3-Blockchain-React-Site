import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowsTurnToDots} from '@fortawesome/free-solid-svg-icons'
import { faBitcoin } from '@fortawesome/free-brands-svg-icons'
import { faUpload } from '@fortawesome/free-brands-svg-icons'
import { faEthereum } from '@fortawesome/free-brands-svg-icons';
import p1 from '../images/p1.png';

const Product = () => {
    return (
        <div classname="mx-20 px-20">
            <h1 className="text-primary-color font-bold italic text-2xl pt-8">
                PRODUCT 
            </h1>
            <br></br>
            <div className='grid grid-rows-5 grid-flow-col gap-4 px-20'>
                <div className='row-start-1 p-7 col-span-2 bg-primary-color rounded-md text-center col-start-1 col-span-2 flex flex-col'>

                    <div className='grid grid-rows-4 grid-flow-col gap-2 px-10 text-center'>
                        <div className='col-start-1 col-span-4 space-y-4 pb-8 mx-auto flex flex-col items-center'>
                            <img src={p1} alt="home image" className="object-contain w-6/12 md:w-6/12 rounded-full" />
                            <h1 className='font-bold text-2xl'>PRODUCT NAME</h1>
                            <h2 className='text-2xl'>CATEGORY</h2>
                            <h1 className='text-2xl font-bold'><FontAwesomeIcon icon={faEthereum} /> 4ETH</h1>
                        </div>
                        <div className='col-start-1 space-y-5 mx-auto'>
                            <p>CURRENT SUPPLY</p>
                            <p className='font-bold text-2xl'>1000</p>
                            <button className='bg-secondary-color p-2 w-full rounded-full shadow-lg font-bold mt-auto text-white' to="/">BUY NOW</button>
                        </div>
                        <div className='col-start-3 mx-auto space-y-5'>
                            <p>ITEMS SOLD</p>
                            <p className='font-bold text-2xl'>4</p>
                            <button className='bg-purple p-2 w-full rounded-full shadow-lg font-bold mt-auto text-white' to="/">ADD TO CART</button>
                        </div>
                    </div>
                </div>




                <div className='row-start-1 p-7  row-span-1 bg-primary-color rounded-md col-end-8 col-span-4'>
                  <h2 className='font-bold'>DESCRIPTION</h2>
                  <p className="text-black">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ac nisl a elit tincidunt posuere id at velit. Aliquam ultricies, risus et ornare bibendum, libero ipsum ullamcorper purus, at faucibus lorem orci nec sapien. Quisque accumsan, arcu ac fermentum efficitur, velit urna bibendum tortor, sit amet porttitor arcu dolor quis nibh. Praesent sit amet faucibus sapien. Fusce efficitur feugiat ullamcorper. Etiam elit sapien, hendrerit quis ex nec, laoreet eleifend metus. Integer non vehicula nisi.</p>
                  <br></br>
                  <div className='bg-secondary-color text-white rounded-lg p-4 w-2/3 flex flex-wrap '>
                    <h3 className='text-white font-bold flex'>TRANSACTION ACTIVITY <FontAwesomeIcon icon={faBitcoin} /></h3>
                    <div className='w-full p-2'>
                       <span>Transfer</span> <span><FontAwesomeIcon icon={faArrowsTurnToDots} /></span> <span className='Sender'>0x00000</span> <span>to</span> <span className='Receiver'>0xc121332</span>
                    </div>
                    <div className='w-full p-2'>
                       <span>Transfer</span> <span><FontAwesomeIcon icon={faArrowsTurnToDots} /></span> <span className='Sender'>0x00000</span> <span>to</span> <span className='Receiver'>0xc121332</span>
                    </div>
                    <div className='w-full p-2'>
                       <span>Transfer</span> <span><FontAwesomeIcon icon={faArrowsTurnToDots} /></span> <span className='Sender'>0x00000</span> <span>to</span> <span className='Receiver'>0xc121332</span>
                    </div>
                    <div className='w-full p-2'>
                       <span>Transfer</span> <span><FontAwesomeIcon icon={faArrowsTurnToDots} /></span> <span className='Sender'>0x00000</span> <span>to</span> <span className='Receiver'>0xc121332</span>
                    </div>  <div className='w-full p-2'>
                       <span>Transfer</span> <span><FontAwesomeIcon icon={faArrowsTurnToDots} /></span> <span className='Sender'>0x00000</span> <span>to</span> <span className='Receiver'>0xc121332</span>
                    </div>

                  </div>
                </div>
            </div>

        </div>
    );
};