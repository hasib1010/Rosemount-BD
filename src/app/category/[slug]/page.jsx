import CategoryProducts from '@/Component/CategoryProducts/CategoryProducts';
import { categoryItems } from '@/app/data/categoryitem';
import React from 'react';

const page = ({ params }) => {
    const category = categoryItems.find(item => item.categoryName === decodeURIComponent(params.slug));

    console.log(category);
    return (
        <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 place-items-center container mx-auto gap-10 '>
            {
                category?.products.map(items=> <CategoryProducts items={items}></CategoryProducts>)
            }
        </div>
    );
};

export default page;
