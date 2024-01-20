"use client"
import React, { useRef, useState } from 'react'; 
import { Swiper, SwiperSlide } from 'swiper/react';
 import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import A from "@/assets/home-page/1.png"
import B from "@/assets/home-page/2.png"
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
        className="mySwiper container mx-auto  mt-6"
      >
        <SwiperSlide> <Image src={A}></Image> </SwiperSlide>
        <SwiperSlide><Image src={B}></Image></SwiperSlide>
        <SwiperSlide><Image src={C}></Image></SwiperSlide>
        <SwiperSlide><Image src={D}></Image></SwiperSlide>
        <SwiperSlide><Image src={E}></Image></SwiperSlide>
        <SwiperSlide><Image src={F}></Image></SwiperSlide>
        <SwiperSlide><Image src={G}></Image></SwiperSlide>
        <SwiperSlide><Image src={H}></Image></SwiperSlide>
        <SwiperSlide><Image src={I}></Image></SwiperSlide>
      </Swiper>
    </>
  );
}
