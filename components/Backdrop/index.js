import React, { useEffect } from 'react'
import { motion } from 'framer-motion'

const Backdrop = ({ children, setOpen, open }) => {
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
    <motion.div
      className='backdrop'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0.2 }}
      transition={{ duration: 0.4, delay: 0.1 }}
      onClick={() => setOpen(!open)}
    >
      {children}
    </motion.div>
  )
}
export default Backdrop
