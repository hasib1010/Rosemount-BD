import React from 'react';
import Image from 'next/image';
import mona from "@/assets/certificate/mona.png"
const Mona = () => {
    return (
        <div className='max-w-[100vh]'>
        <div className=' flex'> 
                <Image className='w-screen mx-6' src={mona} alt='Sicor Motor Certificate'></Image> 
        </div>
    </div>
    );
};

export default Mona;