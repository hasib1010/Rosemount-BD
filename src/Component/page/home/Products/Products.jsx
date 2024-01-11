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
            <div className='my-32 container mx-auto'>
                <Product cardNo={"02"} imgSrc={product3} cardDescription={"Customer interactions, study and analysis of company branding through creative briefs. Creation of mock-up designs by using UI tools that simulate actions and pre-visualize the reactions."} title={"Complete Lift "} origin={"(Imported)"} ></Product>
                <Product cardNo={"03"} imgSrc={product4} cardDescription={"Customer interactions, study and analysis of company branding through creative briefs. Creation of mock-up designs by using UI tools that simulate actions and pre-visualize the reactions."} title={"Door Mechanism"} origin={"(Imported)"}></Product>
                <Product cardNo={"04"} imgSrc={product2} cardDescription={"Customer interactions, study and analysis of company branding through creative briefs. Creation of mock-up designs by using UI tools that simulate actions and pre-visualize the reactions."} title={"Complete Cabin"} origin={"(Imported)"}></Product>
                <Product cardNo={"05"} imgSrc={product1} cardDescription={"Customer interactions, study and analysis of company branding through creative briefs. Creation of mock-up designs by using UI tools that simulate actions and pre-visualize the reactions."} title={"All Kind Of Spare Parts"} origin={"(Imported)"}></Product>
                <Product cardNo={"06"} imgSrc={product5} cardDescription={"Customer interactions, study and analysis of company branding through creative briefs. Creation of mock-up designs by using UI tools that simulate actions and pre-visualize the reactions."} title={"Controllers & Eleteic Parts"} origin={"(Imported)"}></Product>
                <Product cardNo={"07"} imgSrc={product6} cardDescription={"Customer interactions, study and analysis of company branding through creative briefs. Creation of mock-up designs by using UI tools that simulate actions and pre-visualize the reactions."} title={"Elevator Safety Components"} origin={"(Imported)"}></Product>
                <Product cardNo={"08"} imgSrc={product8} cardDescription={"Customer interactions, study and analysis of company branding through creative briefs. Creation of mock-up designs by using UI tools that simulate actions and pre-visualize the reactions."} title={"Montanari Motors"} origin={"(Imported)"}></Product>
                <Product cardNo={"09"} imgSrc={product9} cardDescription={"Customer interactions, study and analysis of company branding through creative briefs. Creation of mock-up designs by using UI tools that simulate actions and pre-visualize the reactions."} title={"Sicor Motors"} origin={"(Imported)"}></Product>
                <Product cardNo={"10"} imgSrc={product7} cardDescription={"Customer interactions, study and analysis of company branding through creative briefs. Creation of mock-up designs by using UI tools that simulate actions and pre-visualize the reactions."} title={"Monadrive Motors"} origin={"(Imported)"}></Product>
            </div>
        </div>
    );
};

export default Products;