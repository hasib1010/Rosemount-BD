import React from 'react';
import Image from 'next/image';
import product1 from "@/assets/products/all-spares.png"
import product2 from "@/assets/products/cabin.png"
import product3 from "@/assets/products/complete lift.png"
import product4 from "@/assets/products/door.png"
import product5 from "@/assets/products/electric.png"
import product6 from "@/assets/products/safetey.png"
import product7 from "@/assets/products/mona.png"
import product8 from "@/assets/products/montanari.png"
import product9 from "@/assets/products/sicor.png"
const Product = () => {
    return (
        <div className='grid grid-cols-3 gap-10  my-32 container mx-auto'>
            <div className='w-fit text-center rounded-2xl p-3 shadow-xl'>
                <Image className='' src={product1}></Image>
                <h1 className='font-bold text-3xl my-3'>All Kind of Spare Parts</h1>
            </div>
            <div className='w-fit text-center  rounded-2xl p-3 shadow-xl'>
                <Image  src={product2}></Image>
                <h1 className='font-bold text-3xl my-3'>Complete Cabin</h1>
            </div>
            <div className='w-fit text-center  rounded-2xl p-3 shadow-xl'>
                <Image src={product3}></Image>
                <h1 className='font-bold text-3xl  my-3'>Complete Lift</h1>
            </div>
            <div className='w-fit text-center  rounded-2xl p-3 shadow-xl'>
                <Image src={product4}></Image>
                <h1 className='font-bold text-3xl my-3'>Door Mechanism</h1>
            </div>
            <div className='w-fit text-center  rounded-2xl p-3 shadow-xl'>
                <Image src={product5}></Image>
                <h1 className='font-bold text-3xl my-3'>Controllers & Eleteic Parts</h1>
            </div>
            <div className='w-fit text-center  rounded-2xl p-3 shadow-xl'>
                <Image src={product6}></Image>
                <h1 className='font-bold text-3xl my-3'>Safety Components</h1>
            </div>
            <div className='w-fit text-center  rounded-2xl p-3 shadow-xl'>
                <Image src={product7}></Image>
                <h1 className='font-bold text-3xl my-3'>MONADRIVE Motors</h1>
            </div>
            <div className='w-fit text-center  rounded-2xl p-3 shadow-xl'>
                <Image src={product8}></Image>
                <h1 className='font-bold text-3xl my-3'>MONTANARI Motors</h1>
            </div>
            <div className='w-fit text-center  rounded-2xl p-3 shadow-xl'>
                <Image src={product9}></Image>
                <h1 className='font-bold text-3xl my-3'>Sicor Motors</h1>
            </div>
        </div>
    );
};

export default Product;