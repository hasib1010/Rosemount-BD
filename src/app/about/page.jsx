import React from 'react';
import pikusir from "@/assets/pikusir.png";
import khalidsir from "@/assets/khalidsir.png";
import belia from "@/assets/belia.png";
import Image from "next/image";
function AboutUs() {
    return (
        <div className='my-20'> 
          {/* proprietor section */}
       <div className='flex lg:flex-row flex-col lg:items-end gap-7'>
     <div className='relative'>
     <Image className='transition duration-300 ease-in-out grayscale hover:grayscale-0 border-4 border-black rounded-md' src={pikusir}></Image>
     <Image className='absolute -top-10 -right-10 w-40' src={belia}></Image>
     </div>
        <div className='flex flex-col items-end'>
        <h2 className='lg:text-5xl font-bold'>Md Mahbubur Rahman</h2>
       <p className='text-2xl text-green-600 font-semibold'>Business Owner</p>
        </div>
       </div>
       {/* ceo section */}
       <br /><br /><br />
       <div className='flex lg:flex-row-reverse  flex-col lg:items-end gap-7'>
     <div className='relative'>
     <Image className='transition duration-300 ease-in-out grayscale hover:grayscale-0 border-4 border-black rounded-md' src={khalidsir}></Image>
     <Image className='absolute -top-10 -right-10 w-40' src={belia}></Image>
     </div>
        <div className='flex flex-col items-start'>
        <h2 className='lg:text-5xl font-bold'>Mohammad Khalid Hossain Tarafder</h2>
       <p className='text-2xl text-green-600 font-semibold'>CEO</p>
        </div>
       </div>
            

        </div>
    )
}

export default AboutUs;