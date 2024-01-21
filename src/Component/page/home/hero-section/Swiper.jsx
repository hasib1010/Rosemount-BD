"use client"
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import B from "@/assets/home-page/2.JPG"
import A from "@/assets/home-page/1.JPG"
import C from "@/assets/home-page/3.png"
import D from "@/assets/home-page/4.png"
import E from "@/assets/home-page/5.png"
import F from "@/assets/home-page/6.png"
import G from "@/assets/home-page/7.png"
import H from "@/assets/home-page/8.png"
import I from "@/assets/home-page/9.png"


import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function Swiperx() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper w-full  mx-auto  mt-6"
      >
        <SwiperSlide><Image alt='Slider' className='w-4/5  mx-auto' src={A}></Image> </SwiperSlide>
        <SwiperSlide><Image alt='Slider' className='w-4/5    mx-auto' src={B}></Image></SwiperSlide>
        <SwiperSlide><Image alt='Slider' className='w-4/5    mx-auto' src={C}></Image></SwiperSlide>
        <SwiperSlide><Image alt='Slider' className='w-4/5    mx-auto' src={D}></Image></SwiperSlide>
        <SwiperSlide><Image alt='Slider' className='w-4/5    mx-auto' src={E}></Image></SwiperSlide>
        <SwiperSlide><Image alt='Slider' className='w-4/5    mx-auto' src={F}></Image></SwiperSlide>
        <SwiperSlide><Image alt='Slider' className='w-4/5    mx-auto' src={G}></Image></SwiperSlide>
        <SwiperSlide><Image alt='Slider' className='w-4/5    mx-auto' src={H}></Image></SwiperSlide>
        <SwiperSlide><Image alt='Slider' className='w-4/5    mx-auto' src={I}></Image></SwiperSlide>
      </Swiper>
    </>
  );
}
