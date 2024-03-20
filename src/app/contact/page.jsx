import React from 'react';
import animation from "@/assets/contact.gif"
import animation2 from "@/assets/contact2.gif"
import headoffice from "@/assets/headoffice.png"
import uttaraoffice from "@/assets/uttaraoffice.png"
import Image from 'next/image';
import { IoLocationOutline } from "react-icons/io5";
import PhoneCallButton from './Call';
import Whatsapp from './WhatsApp';
import PhoneCallButton2 from './uttaraCall';
import Whatsapp2 from './WhatsappUttara';

function Contact() {
    
    return (
        <div className='mt-10'>
            <h3 className='text-center text-4xl font-bold mb-5'>Rosemount BD Head Office</h3>
            <div className='flex lg:flex-row flex-col-reverse lg:   gap-32 items-center'>
                <div>
                    <Image className='w-96' src={animation} alt='contact animation'></Image>
                </div>
                <div className='flex lg:flex-row flex-col-reverse gap-10 justify-center items-center'>
                    <div className='w-96 flex flex-col gap-8'>
                        <p className='text-base flex items-center p-3 rounded-lg font-semibold border'> <IoLocationOutline className='text-red-600 text-xl mr-3' />
                            107, Bir Uttam CR Datta Road (G.F.) <br /> Room No:5 <br /> Dhaka-1205, Bangladesh
                        </p>
                        
                        <PhoneCallButton phoneNumber="+8801712551357" />
                        <Whatsapp></Whatsapp>
                    </div>
                    <Image className='lg:h-[600px] w-auto rounded-lg' src={headoffice} alt='rosemount bd head office '></Image>
                </div>
            </div>
            <h3 className='text-center text-4xl font-bold my-10'>Rosemount BD Uttara Office</h3>
            <div className='flex lg:flex-row-reverse flex-col-reverse lg:   gap-32 items-center'>
                <div>
                    <Image className='w-96' src={animation2} alt='contact animation'></Image>
                </div>
                <div className='flex lg:flex-row-reverse flex-col-reverse gap-10 justify-center items-center'>
                    <div className='w-96 flex flex-col gap-8'>
                        <p className='text-base flex items-center p-3 rounded-lg font-semibold border'> <IoLocationOutline className='text-red-600 text-xl mr-3' />
                            Road No. 33 <br /> House No. 6, 1st Floor <br /> Sector-7 Uttara <br /> Dhaka-1230
                        </p>
                        
                        <PhoneCallButton2 phoneNumber="+8801712551357" />
                       <Whatsapp2></Whatsapp2>
                    </div>
                    <Image className='lg:h-[600px] w-auto rounded-lg' src={uttaraoffice} alt='rosemount bd head office '></Image>
                </div>
            </div>
        </div>
    )
}

export default Contact;