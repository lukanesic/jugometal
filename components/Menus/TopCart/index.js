import React, { useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Link from 'next/link'
import { useSelector } from 'react-redux'

const TopCart = ({ open, setOpen }) => {
  useEffect(() => {
    if (open) {
      const width = document.body.clientWidth
      document.body.style.overflowY = 'hidden'
      document.body.style.width = `${width}px`
    } else {
      document.body.style.overflowY = 'visible'
      document.body.style.width = `auto`
    }

    return () => {
      document.body.style.overflowY = 'visible'
      document.body.style.width = `auto`
    }
  }, [open])

  const { cart, cartTotalQuantity } = useSelector((state) => state.cart)

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            className='t-c-dropback'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            onClick={() => setOpen(!open)}
          />
          <motion.div
            className='top-c'
            initial={{ opacity: 0, height: '10vh' }}
            animate={{ opacity: 1, height: '40vh' }}
            exit={{ opacity: 0, height: '10vh' }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            <div className='top-c-content'>
              <h4>{cartTotalQuantity > 0 && cartTotalQuantity}</h4>
              <h5>
                {cartTotalQuantity === 0
                  ? 'Vaša korpa je prazna'
                  : cartTotalQuantity > 1
                  ? 'Proizvoda u korpi'
                  : 'Proizvod dodat u korpu'}
              </h5>

              <Link href='/cart'>
                <button className='black'>Pogledajte korpu</button>
              </Link>

              <button className='white' onClick={() => setOpen(!open)}>
                Nastavite sa kupovinom
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

export default TopCart
