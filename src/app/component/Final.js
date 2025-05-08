'use client'
import React from 'react'
import { motion, useScroll, useTransform } from 'framer-motion';

const Final = () => {
  const { scrollYProgress } = useScroll();

  return (
    <div>
      <div className='flex flex-col gap-0 justify-center items-center px-5 text-center'>
        <div><p className='text-5xl p-light mb-4'>Only <span className='p-bold'>your</span> present, can save <span className='p-bold'>your</span> future.</p></div>
        <button className='group block relative w-fit'>
          <p className='text-5xl p-light cursor-pointer'>Download now. </p>
          <span className="absolute left-0 bottom-[-5px] w-0 h-[4px] bg-green-600 rounded-lg transition-all duration-300 group-hover:w-full"></span>
        </button>
        <motion.img 
        src='/caregpt-logo.svg' 
        alt='caregpt-logo' 
        className='w-[20%] mt-20'
        animate={{
          y: [5, -5, 5, -5, 5],
          x: [-5, 5, 5, -5, -5],
          rotate: [0, 2, -2, 2, 0] // Add subtle rotation
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
        ></motion.img>
      </div>
    </div>
  )


}

export default Final