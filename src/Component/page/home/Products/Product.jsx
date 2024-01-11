import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Product = ({ imgSrc, title, origin }) => {
    return (
        <Link href="#" className='w-fit text-center rounded-2xl hover:shadow-2xl  p-3 shadow-xl'>
            <Image className='' src={imgSrc}></Image>
            <h1 className='font-bold text-3xl my-3'>{title} <span className='text-red-500'>{origin}</span> </h1>
        </Link>
    );
};

export default Product;


// <div className='w-fit text-center  rounded-2xl p-3 shadow-xl'>
// <Image  src={product2}></Image>
// <h1 className='font-bold text-3xl my-3'>Complete Cabin</h1>
// </div>
// <div className='w-fit text-center  rounded-2xl p-3 shadow-xl'>
// <Image src={product3}></Image>
// <h1 className='font-bold text-3xl  my-3'>Complete Lift</h1>
// </div>
// <div className='w-fit text-center  rounded-2xl p-3 shadow-xl'>
// <Image src={product4}></Image>
// <h1 className='font-bold text-3xl my-3'>Door Mechanism</h1>
// </div>
// <div className='w-fit text-center  rounded-2xl p-3 shadow-xl'>
// <Image src={product5}></Image>
// <h1 className='font-bold text-3xl my-3'>Controllers & Eleteic Parts</h1>
// </div>
// <div className='w-fit text-center  rounded-2xl p-3 shadow-xl'>
// <Image src={product6}></Image>
// <h1 className='font-bold text-3xl my-3'>Safety Components</h1>
// </div>
// <div className='w-fit text-center  rounded-2xl p-3 shadow-xl'>
// <Image src={product7}></Image>
// <h1 className='font-bold text-3xl my-3'>MONADRIVE Motors</h1>
// </div>
// <div className='w-fit text-center  rounded-2xl p-3 shadow-xl'>
// <Image src={product8}></Image>
// <h1 className='font-bold text-3xl my-3'>MONTANARI Motors</h1>
// </div>
// <div className='w-fit text-center  rounded-2xl p-3 shadow-xl'>
// <Image src={product9}></Image>
// <h1 className='font-bold text-3xl my-3'>Sicor Motors</h1>
// </div>