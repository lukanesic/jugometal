import React, { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
// import { useSelector } from 'react-redux'

const SideMenu = ({ open, setOpen }) => {
  //   const { user } = useSelector((state) => state.user)

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
        <>
          <motion.div
            className='side-dropback uni-drop'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            onClick={() => setOpen(!open)}
          />
          <motion.div
            initial={{ opacity: 0, width: '55vw' }}
            animate={{ opacity: 1, width: '70vw' }}
            exit={{ opacity: 0, width: '55vw' }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className='side-menu'
          >
            <motion.div className='close-button'>
              <button onClick={() => setOpen(!open)}>X</button>
            </motion.div>
            <div className='side-menu-content'>
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

            <div className='side-menu-content'>
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

            <div className='side-menu-content' style={{ borderBottom: 'none' }}>
              <Link href='/'>
                <li>Početna</li>
              </Link>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

export default SideMenu
