'use client';
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const AnimatedSection = ({ children, direction = 'left' }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: '-100px' });

  const variants = {
    hidden: {
      opacity: 0,
      x: direction === 'left' ? -100 : direction === 'right' ? 100 : 0,
      y: direction === 'up' ? 100 : direction === 'down' ? -100 : 0,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration: 0.8,
        type: 'spring',
        stiffness: 60,
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedSection