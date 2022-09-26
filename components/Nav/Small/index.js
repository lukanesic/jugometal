import React from 'react'
import Link from 'next/link'

import { BsSearch } from 'react-icons/bs'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { GiHamburgerMenu } from 'react-icons/gi'

const Small = ({
  openSideM,
  setOpenSideM,
  openTopC,
  setOpenTopC,
  openSearch,
  setOpenSearch,
}) => {
  return (
    <nav className='sm-nav'>
      <div className='sm-nav-logo'>
        <Link href='/'>
          {/* LOGO img */}
          <div className='small-logo' />
        </Link>
      </div>

      <div className='sm-nav-li'>
        {/* <AiOutlineShoppingCart
          className='sm-i'
          onClick={() => setOpenTopC(!openTopC)}
        /> */}

        <BsSearch className='sm-i' onClick={() => setOpenSearch(!openSearch)} />

        <GiHamburgerMenu
          className='sm-i '
          onClick={() => setOpenSideM(!openSideM)}
        />
      </div>
    </nav>
  )
}

export default Small
