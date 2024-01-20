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
        <Link href={`/category/${title}`} className="shape-box relative z-10 max-w-[500px] h-[450px] mx-auto overflow-hidden w-full text-left shape-box_half">
            <Image className='w-[60%] h-[60%] absolute left-[50%] top-[35%] transform -translate-x-[50%] -translate-y-[50%]' src={imgSrc}></Image>
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

