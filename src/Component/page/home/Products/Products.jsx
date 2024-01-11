import React from 'react';
import Product from './Product';
import product1 from "@/assets/products/all-spares.png"
import product2 from "@/assets/products/cabin.png"
import product3 from "@/assets/products/complete lift.png"
import product4 from "@/assets/products/door.png"
import product5 from "@/assets/products/electric.png"
import product6 from "@/assets/products/safetey.png"
import product7 from "@/assets/products/mona.png"
import product8 from "@/assets/products/montanari.png"
import product9 from "@/assets/products/sicor.png"

const Products = () => {
    return (
        <div>
            <h1 className='text-center my-10 text-7xl font-bold hover:text-green-400'>Our Products</h1>
            <hr className='border-2 border-green-700  w-48 mx-auto' />
            <div className='grid lg:grid-cols-3 grid-cols-1 gap-10  my-32 container mx-auto'>
                <Product imgSrc={product3} title={"Complete Lift "} origin={"(Imported)"}></Product>
                <Product imgSrc={product4} title={"Door Mechanism"}></Product>
                <Product imgSrc={product2} title={"Complete Cabin"} origin={"(Imported)"}></Product>
                <Product imgSrc={product1} title={"All Kind Of Spare Parts"}></Product>
                <Product imgSrc={product5} title={"Controllers & Eleteic Parts"}></Product>
                <Product imgSrc={product6} title={"Elevator Safety Components"}></Product>
                <Product imgSrc={product8} title={"Montanari Motors"}></Product>
                <Product imgSrc={product9} title={"Sicor Motors"}></Product>
                <Product imgSrc={product7} title={"Monadrive Motors"}></Product>
            </div>
        </div>
    );
};

export default Products;