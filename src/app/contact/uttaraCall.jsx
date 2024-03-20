"use client"
import React from 'react';
import { TbPhoneCall } from "react-icons/tb";

const PhoneCallButton2 = ({ phoneNumber }) => {
    const makePhoneCall = () => {
        window.open(`tel:${phoneNumber}`);
    };

    return (
        <button className='btn w-full h-full  ' onClick={makePhoneCall}><p className='text-xl flex gap-5 items-center p-3  font-semibold '> <TbPhoneCall className='text-green-600 text-2xl mr-3' />
            +8801735551357
        </p></button>
    );
};

export default PhoneCallButton2;
