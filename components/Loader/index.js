import React from 'react'
import { AnimatePresence, motion } from 'framer-motion'

import logo from './../../public/images/logo.jpg'
import Image from 'next/image'

const Loader = () => {
  return (
    <AnimatePresence exitBeforeEnter>
      <motion.div
        initial={{ opacity: 1, display: 'grid' }}
        animate={{ opacity: 0, display: 'none' }}
        transition={{
          opacity: {
            duration: 1.5,
            delay: 1,
          },
          display: {
            delay: 2.5,
          },
        }}
        className='loader'
      >
        <motion.div
          className='img'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{
            opacity: {
              duration: 0.9,
              delay: 0.2,
            },
          }}
        >
          <Image
            src={logo}
            alt={'Jugometal Logo'}
            layout='fill'
            objectFit='cover'
          />
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

export default Loader
