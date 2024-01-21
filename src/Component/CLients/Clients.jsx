import React from 'react';
import Marquee from "react-fast-marquee";
import A from "@/assets/clients/1.jpg";
import B from "@/assets/clients/2.jpg";
import C from "@/assets/clients/3.jpg";
import I from "@/assets/clients/I.jpg";
import D from "@/assets/clients/4.jpg";
import E from "@/assets/clients/5.png";
import F from "@/assets/clients/6.png";
import G from "@/assets/clients/7.png";
import H from "@/assets/clients/8.png";
import Image from 'next/image';
const Clients = () => {
    return (
        <div className='text-center my-20'>
            <h1 className='lg:text-5xl font-bold'>Our Honorable Clients</h1>
            <Marquee className='mt-20' speed={100}>
                <div className='flex gap-20 items-center justify-center'>
                    <div className='w-fit mx-auto'>
                        <Image className='w-28 mx-auto' src={A} alt='xxx'></Image>
                        <h1 className='w-fit mx-auto text-xl font-semibold'>SYSTECH <br /> Properties Ltd.</h1>
                    </div>
                    <div>
                        <Image className='w-28 mx-auto' src={B} alt='xxx'></Image>
                        <h1 className='w-fit mx-auto text-xl font-semibold'>H & S Engineering</h1>
                    </div>
                    <div>
                        <Image className='w-28 mr-5' src={C} alt='xxx'></Image>
                    </div>
                    <div>
                        <Image className='w-28 mr-5' src={D} alt='xxx'></Image>
                    </div>
                    <div>
                        <Image className='w-28 mx-auto' alt='xxx' src={E}></Image>
                        <h1 className='w-fit mx-auto text-xl font-semibold'>Maan Bangladesh LTD.</h1>
                    </div>
                    <div>
                        <Image className='w-28 mx-auto' alt='xxx' src={F}></Image>
                        <h1 className='w-fit mx-auto text-xl font-semibold'>Capital Elevator</h1>
                    </div>
                    <div>
                        <Image className='w-28 mr-5' alt='xxx' src={G}></Image>
                    </div>
                    <div>
                        <Image className='w-28 mr-5' alt='xxx' src={H}></Image>
                    </div>
                    <div>
                        <Image className='w-28 mr-5' alt='xxx' src={I}></Image>
                    </div>
                </div>
            </Marquee>
        </div>
    );
};

export default Clients;