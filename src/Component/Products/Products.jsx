import React from 'react';
import Product from './Product';

const Products = () => {
    return (
        <div>
            <h1 className='text-center my-10 text-7xl font-bold hover:text-green-400'>Our Products</h1>
            <hr className='border-2 border-green-700  w-48 mx-auto' />
            <Product></Product>
        </div>
    );
};

export default Products;