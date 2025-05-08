'use client'

import React, { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

const cardVariants = {
  hidden: { opacity: 0, x: -200, scale: 0.9 },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      delay: i * 0.2,
      duration: 0.8,
      type: 'spring',
      stiffness: 60,
      damping: 12
    }
  })
}

const cardData = [
  {
    title: 'Water Consumption',
    number: '1.5 litres',
    content: 'per prompt',
    theme: 'bg-water',
    color: 'text-blue-400',
    details: ['Sources: Groundwater, Tap', 'Avg Daily Use: 150L']
  },
  {
    title: 'CO2 Emission',
    number: '16.67 g',
    content: 'per prompt',
    theme: 'bg-fire',
    color: 'text-red-500',
    details: ['Sources: Data centers', 'Offset Options: Planting Trees']
  },
  {
    title: 'Electricity Used',
    number: '0.05 kWh',
    content: 'per prompt',
    theme: 'bg-elec',
    color: 'text-yellow-500',
    details: ['Region: US-East-1', 'Cost: ~₹0.50']
  },
  {
    title: 'Trees Utilised',
    number: '0.00075',
    content: 'per prompt',
    theme: 'bg-tree',
    color: 'text-green-500',
    details: ['Approx. per 1000 prompts', 'Equivalent Offset: 1 sapling']
  }
]

const Blocks = () => {
  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { once: false, amount: 0.2 })
  const [selectedCardIndex, setSelectedCardIndex] = useState(null)

  const toggleCard = (index) => {
    setSelectedCardIndex(prev => prev === index ? null : index)
  }

  return (
    <div ref={containerRef} className='z-50 flex flex-col items-center justify-start px-10 min-h-screen gap-6'>
      <div className="flex flex-wrap justify-evenly w-full">
        {cardData.map((card, index) => (
          <motion.div
            key={index}
            custom={index}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={cardVariants}
            whileHover={{
              scale: 1.05,
              rotate: 1,
              transition: { type: 'spring', stiffness: 100 }
            }}
            onClick={() => toggleCard(index)}
            className='cursor-pointer flex-1 max-w-xs w-full'
          >
            <div className={`div-center-border ${card.theme}`}>
              <h2 className={`text-3xl p-bold mb-4 ${card.color}`}>{card.title}</h2>
              <p className='text-5xl text-white p-bold'>{card.number}</p>
              <p className='text-base p-light text-gray-300'>{card.content}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Conditionally Rendered Extra Details */}
      {selectedCardIndex !== null && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mt-8 w-full max-w-2xl bg-gray-800 rounded-xl p-6 text-white shadow-lg"
        >
          <div className={``}>
              <h3 className='text-xl font-semibold mb-3'>
                More on {cardData[selectedCardIndex].title}
              </h3>
              <ul className="list-disc list-inside text-gray-300">
                {cardData[selectedCardIndex].details.map((detail, i) => (
                  <li key={i}>{detail}</li>
                ))}
              </ul>
          </div>
        </motion.div>
      )}
    </div>
  )
}

export default Blocks
