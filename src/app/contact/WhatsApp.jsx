"use client"
import React from 'react'; 
import { FaWhatsappSquare } from "react-icons/fa";
const Whatsapp = () => { 

    function initiateWhatsAppCall(phoneNumber) {
        var whatsappLink = 'https://wa.me/' + phoneNumber;
        window.open(whatsappLink, '_blank');
    }
    return (
        <div onClick={() => initiateWhatsAppCall("+8801712551357")} className='cursor-pointer  hover:text-black text-white bg-green-600  text-center btn  hover:bg-white h-full py-4 border rounded-lg shadow-xl w-80 mx-auto flex flex-col justify-between items-center'>
             <div className='flex items-center gap-10 '>
                <FaWhatsappSquare className='text-4xl  '></FaWhatsappSquare>
             <p className='text-3xl  '>Whats App</p>
             </div>
        </div>
    );
};

export default Whatsapp;