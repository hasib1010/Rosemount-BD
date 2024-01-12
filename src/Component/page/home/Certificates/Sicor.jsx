import React from "react";
import sicor from "@/assets/certificate/sicor.png";
import Image from "next/image";
const Sicor = () => {
  return (
    <div className="max-w-[100vw]">
      <div className=" flex">
        <Image
          className="w-screen mx-6"
          src={sicor}
          alt="Sicor Motor Certificate"
        ></Image>
      </div>
    </div>
  );
};

export default Sicor;
