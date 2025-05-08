'use client'

import React from 'react'
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';

const Footer = () => {

    const { scrollYProgress } = useScroll();
    const scale = useTransform(scrollYProgress, [0.45, 0.2], [0, 1]); // Scale from 1 to 0
    const opacity = useTransform(scrollYProgress, [0.45, 0.2], [0, 1]); // Opacity from 1 to 0
    const translateY = useTransform(scrollYProgress, [0, 0.5], [0, 1000]);


    return (
        <footer className='bg-transparent bottom-0 w-full rounded-t-2xl tree-background '>
            <div className='background background-light'></div>
            <div className='background background-dark'></div>
            <div className='flex flex-col justify-center items-center p-light text-white content'>
                <p className='text-xs mt-40 -mb-2'>Powered by</p>
                <img src='/seltel-white.svg' alt='seltel-logo' className='w-[10%]' />
                {/* <Image src='https://static-00.iconduck.com/assets.00/linkedin-with-circle-icon-2048x2048-np6yltn1.png' alt='linkedin' className='w-[2%] invert-100 mb-2'></Image> */}
                <p className='text-xs'>© All rights reserved, 2025</p>
            </div>
        </footer>

    )
}

export default Footer