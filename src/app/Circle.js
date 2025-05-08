'use client'
import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Circle = () => {
    const { scrollYProgress } = useScroll();
    const scale = useTransform(scrollYProgress, [0, 0.25], [0, 1]); // Scale from 0 to 1
    const opacity = useTransform(scrollYProgress, [0, 0.25], [0, 1]); // Opacity from 0 to 1

    return (
        <div>

            <div>
                <motion.div
                    style={{
                        scale,
                        opacity,
                        width: '200px',
                        height: '200px',
                        borderRadius: '50%',
                        backgroundColor: 'red',
                        position: 'fixed',
                        top: '50%',
                        left: '40%',
                        translateX: '-50%',
                        translateY: '-50%',
                    }}
                />
            </div>
            
            <div>
                <motion.div
                    style={{
                        scale,
                        opacity,
                        width: '200px',
                        height: '200px',
                        borderRadius: '50%',
                        backgroundColor: 'yellow',
                        position: 'fixed',
                        top: '50%',
                        left: '60%',
                        translateX: '-50%',
                        translateY: '-50%',
                    }}
                />
            </div>

            <div>
                <motion.div
                    style={{
                        scale,
                        opacity,
                        width: '400px',
                        height: '400px',
                        borderRadius: '50%',
                        backgroundColor: 'blue',
                        position: 'fixed',
                        top: '50%',
                        left: '50%',
                        translateX: '-50%',
                        translateY: '-50%',
                    }}
                />
            </div>
            
        </div>
    );
};

export default Circle;
