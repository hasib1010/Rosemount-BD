"use client"
import React from 'react'; 
import Image from 'next/image';
const CategoryProducts = ({ items }) => {
    const { title, description, image } = items;

    function initiateWhatsAppCall(phoneNumber) {
        var whatsappLink = 'https://wa.me/' + phoneNumber;
        window.open(whatsappLink, '_blank');
    }
    return (
        <div onClick={() => initiateWhatsAppCall("+8801712551357")} className='cursor-pointer  text-center btn  bg-white hover:bg-white h-full p-8 border rounded-lg shadow-xl w-80 flex flex-col justify-between items-center'>
            <Image className='w-fit mx-auto' src={image} width={100} placeholder="blur" blurDataURL={"./assets/home-page/blur.webp"} height={100} alt='Elevator spare parts'></Image>
            <h1 className='font-semibold  text-xl w-fit mx-auto'>{title}</h1>
            <p className='w-fit mx-auto'>{description}</p>
            {/* <button className='bg-green-600 p-3 rounded-lg text-xl font-bold text-white'>Call Now WhatsApp</button> */}
        </div>
    );
};

export default CategoryProducts;