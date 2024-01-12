"use client"
import React, { useEffect } from 'react';
import AOS from 'aos';
import Sicor from './Sicor';
import Mona from './Mona';

const Certificates = () => {
    useEffect(() => {
        AOS.init({
            duration: 800,
            once: false,
        })
    }, [])
    return (
        <div className='container flex gap-14 flex-col items-center'>
            <h1 className='text-8xl font-semibold underline'>Our Proud</h1>
            <div className='flex flex-row-reverse items-center gap-6' data-aos="fade-right">
                <Sicor />
                <div >
                    <h1 className='w-full text-center text-3xl my-4 font-medium'> We are Authorized Sole Distributor of <br />  <span className='font-extrabold text-green-500'>Sicor Motor</span>
                        <span className='italic font-semibold text-red-500'> (Made in Italy)</span> in   Bangladesh.</h1>
                </div>
            </div>
 
            <div className='flex items-center gap-6' data-aos="fade-left">
                <Mona/>
                <div>
                    <h1 className='w-full text-center text-3xl my-4 font-medium'>Authorized Sole Distributor of <br />  <span className='font-extrabold text-black'>MONADRIVE</span>
                        <span className='italic font-semibold text-red-500'> (Made in China)</span>  in  Bangladesh.</h1>
                </div>
            </div>


        </div>
    );
};

export default Certificates;
