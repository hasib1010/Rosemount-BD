import React from "react";
import Image from "next/image";
import Link from "next/link";



const Product = ({
    imgSrc,
    cardNo,
    title,
    origin,
    cardDescription,
}) => {
    return (
        <Link href="#" className="shape-box inline-block relative z-10 max-w-[500px] h-[430px] overflow-hidden w-[23.333%] text-left shape-box_half">
            <Image className='w-[50%] h-[50%] absolute left-[50%] top-[35%] transform -translate-x-[50%] -translate-y-[50%]' src={imgSrc}></Image>
            <div className="brk-abs-overlay z-index-0 bg-black opacity-60"></div>
            <div className="fig-caption absolute left-0 right-0 bottom-0">
                <div className="show-cont left-[30px] right-[30px] transition-bottom duration-[.6s]">
                    <h3 className="card-no text-3xl text-[#ffc107] leading-none mt-10 mb-0">{cardNo}</h3>
                    <h4 className="card-main-title mt-8 font-bold text-xl uppercase text-gray-800">{title}<span className='text-red-500'>{origin}</span></h4>
                </div>
                <p className="card-content text-gray-600 mt-[20px] leading-[22px] text-[16px]">{cardDescription}</p>
                {/* <a href="#" className="read-more-btn">More</a> */}
                <button className="text-white text-[14px] !bg-red-500 before:bg-red-500 font-bold py-2 mt-4 px-10 button-hover">More</button>
            </div>
            <span className="after"></span>
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
