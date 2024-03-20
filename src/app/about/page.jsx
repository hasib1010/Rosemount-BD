import React from 'react';
import pikusir from "@/assets/pikusir.png";
import khalidsir from "@/assets/khalidsir.png";
import team from "@/assets/team.jpg";
import Image from "next/image";
function AboutUs() {
  return (
    <div className=''>
      <p className='text-center lg:text-3xl font-semibold my-10'>Welcome to Rosemount BD, your trusted source for all your lifting needs since 2009.</p>
      {/* proprietor section */}
      <div className='flex lg:flex-row flex-col lg:items-end gap-7'>
        <div className='relative'>
          <Image className='transition duration-300 ease-in-out grayscale hover:grayscale-0 border-4 border-black rounded-md' src={pikusir}></Image>

        </div>
        <div className='flex flex-col items-end'>
          <h2 className='lg:text-5xl font-bold'>Md Mahbubur Rahman</h2>
          <p className='text-2xl text-green-600 font-semibold'>Business Owner</p>
          <code className='text-black text-center ml-9 pt-8 font-semibold text-4xl  bottom-0 right-0'>Director of BEELIA</code>
        </div>

      </div>

      {/* ceo section */}
      <br /><br /><br />
      <div className='flex lg:flex-row-reverse  flex-col lg:items-end gap-7'>
        <div className='relative'>
          <Image className='transition duration-300 ease-in-out grayscale hover:grayscale-0 border-4 border-black rounded-md' src={khalidsir}></Image>

        </div>
        <div className='flex flex-col items-start'>
          <h2 className='lg:text-5xl font-bold'>Mohammad Khalid Hossain Tarafder</h2>
          <p className='text-2xl text-green-600 font-semibold'>CEO</p>
          <code className=' text-black text-start  pt-8 font-semibold text-4xl  bottom-0 right-0'>Director of BEELIA</code>
        </div>
      </div>
      {/* Operation Panel */}
      <br />
      <hr className="border-gray-400 my-10 " />
      <div>
        <h3 className='text-center my-7 mt-32 text-7xl font-bold  text-black'>Operation Panel</h3>
        <Image className='rounded-lg' src={team}></Image>
      </div>
      <p className='text-xl my-8 w-2/3 mx-auto'><span className='ml-20 font-bold'>Rosemount BD</span> specializes in sourcing and importing high-quality lift systems and spare parts to meet the diverse needs of our customers. With over a decade of experience in the industry, we have established ourselves as a reliable partner, providing top-notch products and exceptional service.
        <br />
        As importers, we work tirelessly to curate a comprehensive range of lift systems and spare parts from trusted manufacturers around the world. Our extensive network allows us to offer a wide selection of products, ensuring that you have access to the best solutions for your lifting requirements.
        <br />

        At Rosemount BD, customer satisfaction is our top priority. Our knowledgeable team is dedicated to assisting you in finding the right products to meet your needs, offering expert guidance and support throughout the process. Whether you are looking for complete lift systems or individual spare parts, we are here to help. <br />
        As a general supplier, we take pride in our ability to deliver value and reliability to our customers. We understand the importance of efficiency and reliability in lift systems, and we strive to provide products that meet the highest standards of quality and performance.
        <br />
        Thank you for considering Rosemount BD as your trusted partner in sourcing lift systems and spare parts. We are committed to providing you with the best products and service, and we look forward to serving you for many years to come.

      </p>
    </div>
  )
}

export default AboutUs;