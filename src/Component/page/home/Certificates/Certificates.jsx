"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import Sicor from "./Sicor";
import Mona from "./Mona";
import Heading from "@/Component/ui/Heading";
import 'aos/dist/aos.css';

const Certificates = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
    });
  }, []);
  return (
    <div className="container">
      <Heading>Our Proud</Heading>
      <div className="flex flex-col items-center gap-14">
        <div
          className="flex flex-row-reverse items-center gap-6"
          data-aos="fade-right"
        >
          <Sicor />
          <div> 
          </div>
        </div>
        <h1 className="w-full text-center lg:text-3xl my-4 font-medium"> 
          We are Authorized Sole Distributor of <br />{" "}
          <span className="font-extrabold text-green-500">Sicor Motor</span>
          <span className="italic font-semibold text-red-500"> 
            (Made in Italy)
          </span> 
          in Bangladesh.
        </h1>
        <div className="flex items-center gap-6" data-aos="fade-left">
          <Mona />
          <div>
           
          </div>
        </div>
        <h1 className="w-full text-center lg:text-3xl my-4 font-medium">
              Authorized Sole Distributor of <br />{" "}
              <span className="font-extrabold text-black">MONADRIVE</span>
              <span className="italic font-semibold text-red-500">
                {" "}
                (Made in China)
              </span>{" "}
              in Bangladesh.
            </h1>
      </div>
    </div>
  );
};

export default Certificates;
