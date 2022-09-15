import React from 'react'
import { motion } from 'framer-motion'
import { fade, fadeDesc } from '../../../lib/animations'

import Image from 'next/image'

const PageBanner = ({ src, alt, h1, p }) => {
  return (
    <div className='page-banner'>
      <Image
        src={src}
        alt={alt}
        style={{ zIndex: '-100' }}
        layout='fill'
        objectFit='cover'
      />
      <div className='page-banner-info max-width'>
        <motion.h1 variants={fade} initial='hidden' animate='show'>
          {h1}
        </motion.h1>
        <motion.p variants={fadeDesc} initial='hidden' animate='show'>
          {p}
        </motion.p>
      </div>
    </div>
  )
}

export default PageBanner
