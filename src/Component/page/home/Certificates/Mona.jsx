import React from 'react';
import Image from 'next/image';
import mona from "@/assets/certificate/mona.png"
const Mona = () => {
    return (
        <div className='max-w-[100vw]'>
        <div className=' flex'> 
                <Image className='w-3/5 mx-auto' src={mona} alt='Sicor Motor Certificate'></Image> 
        </div>
    </div>
    );
};

export default Mona;