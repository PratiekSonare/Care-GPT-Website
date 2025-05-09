'use client';
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

import Header from "./header/Header";
import StartLine from "./component/StartLine";
import Blocks from './component/Blocks';
import Video from "./component/Video";
import AltFinal from './component/AltFinal';
import Footer from "./footer/Footer";

import './styles.css';

export default function Home() {
  const [clouds, setClouds] = useState([]);

  useEffect(() => {
    const cloudCount = 6;
    const screenWidth = typeof window !== 'undefined' ? window.innerWidth : 1920;

    const generatedClouds = Array.from({ length: cloudCount }, (_, i) => ({
      id: i,
      top: Math.random() * 4000,
      size: 5 + Math.random() * 10,
      startX: -200, // start before screen
      endX: screenWidth + 200, // go past screen
      duration: 10 + Math.random() * 10, // faster: 5s to 10s
    }));

    setClouds(generatedClouds);
  }, []);

  return (
    <>
      <Header />
      <div className='my-[450px]'></div>
      <StartLine />

      {/* ☁️ Cloud Animation */}
      {clouds.map(cloud => (
        <motion.img
          key={cloud.id}
          src='/cloud.webp'
          alt='cloud'
          className="opacity-50 absolute -z-10 pointer-events-none"
          style={{
            top: `${cloud.top}px`,
            width: `${cloud.size}%`,
            left: 0,
          }}
          initial={{ x: cloud.startX }}
          animate={{ x: cloud.endX }}
          transition={{
            duration: cloud.duration,
            ease: 'linear',
            repeat: Infinity,
          }}
        />
      ))}

      <div className='my-[1000px]'></div>
      <Blocks />
      <div className='my-[300px]'></div>
      <section id="about"><Video /></section>
      <div className='my-[500px]'></div>
      <AltFinal />
      <div className='my-[100px]'></div>
      <section id="contact"><Footer /></section>

    </>
  );
}
