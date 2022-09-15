import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import banner from './../../../public/images/banners/main-banner.jpg'

const HomeBanner = () => {
  const containerAnimation = {
    hidden: { x: -50 },
    show: {
      x: 0,
      transition: {
        duration: 0.75,
        ease: 'easeOut',
        staggerChildren: 1,
        when: 'beforeChildren',
      },
    },
  }

  const animeh6 = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { duration: 0.75 },
    },
  }

  const titleAnimeh3 = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { duration: 0.5 },
    },
  }
  return (
    <div className='front-banner'>
      <Image
        src={banner}
        alt={'Homepage Banner'}
        layout='fill'
        objectFit='cover'
        style={{ zIndex: '-10' }}
      />
      <motion.div
        className='front-banner-qoute max-width'
        variants={containerAnimation}
        initial='hidden'
        animate='show'
      >
        <motion.h3 variants={titleAnimeh3}>Budućnost je u hrani</motion.h3>
        <motion.h6 variants={animeh6}>
          Jugometal poljoprivredni proizvodi
        </motion.h6>
      </motion.div>
    </div>
  )
}

export default HomeBanner
