'use client';

import React, { useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import '../styles.css';

const Component = () => {
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0.45, 0.2], [0, 1]);
  const opacity = useTransform(scrollYProgress, [0.45, 0.2], [0, 1]);
  const translateY = useTransform(scrollYProgress, [0, 0.5], [0, 1000]);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div style={{ scale, opacity, y: translateY }}>
      <div className='z-0 flex flex-col gap-5 px-10 justify-center items-center text-center w-full h-full'>
        <span className='text-6xl p-light'>
          For every prompt that you make to
          <a href='https://chatgpt.com/'>
            <span
              className="relative inline-block w-[5%] align-middle ml-8 mr-5"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              {/* Base logo */}
              <img
                src='/chatgpt-logo.svg'
                alt='chatgpt-logo'
                className='w-full'
              />
              
              {/* Rain overlay */}
              {isHovered && (
                <img
                  src='/rain-raining.gif'
                  alt='rain effect'
                  className='absolute top-[-80px] left-[-5px] w-full pointer-events-none transition-all duration-300 ease-in-out'
                />
              )}
            </span>
            <span className='text-7xl p-bold align-middle'>ChatGPT</span>
          </a>
          ,
        </span>

        <span className='text-6xl p-light'>
          <span className='text-7xl p-bold'>NATURE</span> has to pay a price
        </span>
      </div>
    </motion.div>
  );
};

export default Component;
