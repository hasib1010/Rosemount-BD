import React from "react";
import Product from "./Product";
import product1 from "@/assets/products/all-spares.png";
import product2 from "@/assets/products/cabin.png";
import product3 from "@/assets/products/complete lift.png";
import product4 from "@/assets/products/door.png";
import product5 from "@/assets/products/electric.png";
import product6 from "@/assets/products/safetey.png";
import product7 from "@/assets/products/mona.png";
import product8 from "@/assets/products/montanari.png";
import product9 from "@/assets/products/sicor.png";
import Heading from "@/Component/ui/Heading";

const Products = () => {
  return (
    <div>
      <Heading>Our Product</Heading>
      <div className="container grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
        <Product

          imgSrc={product3}
          cardDescription={
            "World Class Brands. Sunny Elevator, Mozitor Elevator, Modern Fuji, Hariter Elevator"
          }
          title={"Complete Lift "}
          origin={"(Intact Imported)"}
        ></Product>
        <Product
          imgSrc={product4}
          cardDescription={
            "Door Hanger, Door Operator, Door Panel and other door mechanism"
          }
          title={"Door Mechanism"}
          origin={"(Imported)"}
        ></Product>
        <Product

          imgSrc={product2}
          cardDescription={
            "Elevator Intact Complete Cabin. Modern and Elegant design. Directly from the manufacturer to your Hand."
          }
          title={"Complete Cabin"}
          origin={"(Intact Imported)"}
        ></Product>
        <Product

          imgSrc={product1}
          cardDescription={
            "Complete Elevator solutions. Whole Lift and spare parts service. COP, LOP, Guide Rail, Display ETC...."
          }
          title={"All Kind Of Spare Parts"}
          origin={"(Imported)"}
        ></Product>
        <Product

          imgSrc={product5}
          cardDescription={
            "Electric parts like Controller, ARD, Inverter and many more"
          }
          title={"Controllers & Eleteic Parts"}
          origin={"(Imported)"}
        ></Product>
        <Product

          imgSrc={product6}
          cardDescription={
            "Elevator safety components as guide rail checker, Speed Governor, Hydraulic Buffer ETC..."
          }
          title={"Elevator Safety Components"}
          origin={"(Imported)"}
        ></Product>
        <Product

          imgSrc={product8}
          cardDescription={
            "World Class Elevator Motor From Montanari Group. Made In Italy. Manufacturer to your hand. Authentic products. "
          }
          title={"Montanari Motors"}
          origin={"(Imported)"}
        ></Product>
        <Product

          imgSrc={product9}
          cardDescription={
            "World Class Elevator Motor From Sicor Group. Made In Italy. Manufacturer to your hand. Authentic products."
          }
          title={"Sicor Motors"}
          origin={"(Imported)"}
        ></Product>
        <Product

          imgSrc={product7}
          cardDescription={
            "World Class Elevator Motor From Montanari Group. Made In Chaina.We are official sole agent in Bangladesh. Manufacturer to your hand. Authentic products."
          }
          title={"Monadrive Motors"}
          origin={"(Imported)"}
        ></Product>
      </div>
    </div>
  );
};

export default Products;
