import React from 'react';
import Image from 'next/image';
const CategoryProducts = ({items}) => {
    const {title, description, image} = items;
    return (
        <div className='p-8 border rounded-lg shadow-xl'>
           <img className='w-44 mx-auto' src={image} alt="" />
            <h1 className='font-semibold italic text-xl w-fit mx-auto'>{title}</h1>
            <p className='w-fit mx-auto'>{description}</p>

        </div>
    );
};

export default CategoryProducts;