import { categoryItems } from '@/app/data/categoryitem';
import React from 'react';

const page = ({ params }) => {
    const category = categoryItems.find(item => item.categoryName === decodeURIComponent(params.slug));

    console.log(category);
    return (
        <div>
            {
                category?.products.map(items=> <p className='text-xl'>d</p>)
            }
        </div>
    );
};

export default page;
