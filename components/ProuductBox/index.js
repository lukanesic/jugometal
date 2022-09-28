import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { AnimatePresence, motion } from 'framer-motion'

const ProductBox = ({ link, title, image, id, placeholder, description }) => {
  return (
    <motion.div className='home-box'>
      {link && (
        <Link href={link}>
          {/* next/image */}
          {image && (
            <div className='img'>
              <Image
                src={image}
                alt={title}
                layout='fill'
                objectPosition='center'
                objectFit='contain'
              />
            </div>
          )}
        </Link>
      )}

      {/* Resi placeholdere za responsive, jer ne prati loading state po dimenzijama slike */}
      {placeholder && (
        <div style={{ height: 300, width: 300, background: '#f0f0f0' }} />
      )}

      <div className='home-box-info'>
        {''}
        <h3 className={placeholder ? 'plc-hld' : ''}>
          {placeholder ? 'placeholder' : title}
        </h3>
        <div className='h-line'></div>
        <p className={placeholder ? 'plc-hld' : ''}>
          {placeholder ? 'placeholder' : `${description}`}
        </p>

        {link && <Link href={link}>Detaljnije</Link>}
      </div>
    </motion.div>
  )
}

export default ProductBox
