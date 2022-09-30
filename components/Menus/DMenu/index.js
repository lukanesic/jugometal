import React, { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'

const DMenu = ({ open, setOpen }) => {
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

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className='dropback'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          onClick={() => setOpen(!open)}
        >
          <motion.div
            initial={{ opacity: 0, width: '10vw' }}
            animate={{ opacity: 1, width: '30vw' }}
            exit={{ opacity: 0, width: '10vw' }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className='side-menu'
          >
            <motion.div className='close-button'>
              <button onClick={() => setOpen(!open)}>X</button>
            </motion.div>
            <div className='side-menu-content-desktop'>
              <Link href='/traktori'>
                <li>Traktori</li>
              </Link>
              <Link href='/stocarstvo'>
                <li>Stočarstvo</li>
              </Link>
              <Link href='/vocarstvo'>
                <li>Voćarstvo</li>
              </Link>
              <Link href='/ratarstvo'>
                <li>Ratarstvo</li>
              </Link>
              <Link href='/transport'>
                <li>Transport</li>
              </Link>
            </div>

            <div className='side-menu-content-desktop'>
              <Link href='/o-nama'>
                <li>O nama</li>
              </Link>
              <Link href='/finansiranje'>
                <li>Finansiranje</li>
              </Link>
              <Link href='/servis'>
                <li>Servis</li>
              </Link>
            </div>

            <div
              className='side-menu-content-desktop'
              style={{ borderBottom: 'none' }}
            >
              <Link href='/'>
                <li>Početna</li>
              </Link>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default DMenu
