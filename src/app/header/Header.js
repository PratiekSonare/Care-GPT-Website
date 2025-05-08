'use client'
import React, { useEffect, useState } from 'react';
import '../styles.css'; // Add transition styles here if needed
import Image from 'next/image';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 800);
    };

    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`top-0 fixed w-full px-6 md:px-20 lg:px-40 py-4 backdrop-blur-md z-50 transition-all duration-1000 ${isScrolled ? 'shadow-lg' : 'shadow-none'
        }`}
    >
      <div
        className={`flex items-center transition-all duration-1000 ${isScrolled ? 'justify-between' : 'justify-center'
          }`}
      >
        <Image
          src="/logo.svg"
          alt="logo"
          className={`transition-all duration-1000 ease-in-out ${isScrolled ? 'w-[5%]' : 'w-[8%]'
            }`}
        />

        {isScrolled && (
          <nav className="hidden md:flex flex-row gap-6 raleway-mid">
            <button className='group block relative w-fit'>
              <p className='cursor-pointer  mt-2'>About</p>
              <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-green-600 rounded-lg transition-all duration-300 group-hover:w-full"></span>
            </button>
            <button className='block group relative w-fit'>
            <p className='cursor-pointer  mt-2'>Contact</p>
              <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-green-600 rounded-lg transition-all duration-300 group-hover:w-full"></span>
            </button>
          </nav>
        )}

        {isScrolled && (
          <div>
            <button className="px-5 py-3 bg-green-400 hover:bg-green-600 hover:text-green-400 transition-all duration-300 rounded-xl raleway-midbold">Download</button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
