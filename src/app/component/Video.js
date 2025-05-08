'use client'
import React from 'react'
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';

const Video = () => {
    const { scrollYProgress } = useScroll();
    const translateX = useTransform(scrollYProgress, [0.4, 0.6], [-500, 0]); 
    const translateMinusX = useTransform(scrollYProgress, [0.4, 0.6], [500, 0]); 

  return (
    <div style={{height: '100vh'}} className='grid grid-cols-[3fr_2fr] grid-rows-1 gap-10 justify-between items-center px-20'>
        
        {/* save nature */}
        <motion.div style={{x: translateX, }} className='px-10'>
            <p className='text-6xl p-light mb-4'>Track your prompts.</p>
            <p className='text-6xl p-light mb-20'>Protect the <span className='p-bold'>environment</span>.</p>
            <p className='text-6xl p-light mb-20'>Use ChatGPT catiously.</p>
        </motion.div>

        {/* extension image when hovered, download option */}
        <motion.div style={{x:translateMinusX}} className='flex justify-center items-center w-full h-full border-5 border-black'>
            video content
        </motion.div>

    </div>
  )
}

export default Video